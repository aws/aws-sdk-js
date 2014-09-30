var AWS = require('../core');

var maxTotalParts = 10000;
var minMultipartSize = 1024 * 1024 * 5;

function ManagedUpload(svc, options) {
  AWS.SequentialExecutor.call(this);

  var self = this;
  var callback, body;
  var maxQueue = 4;
  var partSize = minMultipartSize;

  var totalChunkedBytes = 0;
  var totalUploadedBytes = 0;
  var totalBytes;
  var numParts = 0;
  var totalPartNumbers = 0;
  var activeParts = 0;
  var doneParts = 0;
  var parts = {};
  var completeInfo = [];
  var failed = false;
  var isDoneChunking = false;
  var multipartReq = null;

  var fillQueue = function() {
    callback(new Error('Unsupported body payload ' + typeof(body)));
  };

  function cleanup(err) {
    if (failed) return;

    // clean up stream
    if (typeof body.removeAllListeners === 'function' &&
        typeof body.resume === 'function') {
      body.removeAllListeners('readable');
      body.removeAllListeners('end');
      body.resume();
    }

    if (svc.config.params.UploadId) svc.abortMultipartUpload().send();

    AWS.util.each(parts, function(partNumber, part) {
      part.removeAllListeners('complete');
      part.abort();
    });

    parts = {};
    callback(err);
    failed = true;
  }

  function finishMultiPart() {
    var completeParams = { MultipartUpload: { Parts: completeInfo } };
    svc.completeMultipartUpload(completeParams, function(err, data) {
      if (err) return cleanup(err);
      else callback(err, data);
    });
  }

  function finishSinglePart(err, data) {
    var httpReq = this.request.httpRequest;
    var url = AWS.util.urlFormat(httpReq.endpoint);
    data.Location = url.substr(0, url.length - 1) + httpReq.path;
    callback(err, data);
  }

  function progress(info) {
    if (this.operation === 'putObject') {
      info.part = 1;
    } else {
      totalUploadedBytes += info.loaded - this._lastUploadedBytes;
      this._lastUploadedBytes = info.loaded;
      info = {
        loaded: totalUploadedBytes,
        total: totalBytes,
        part: this.params.PartNumber
      };
    }
    self.emit('httpUploadProgress', [info]);
  }

  function uploadPart(chunk, partNumber) {
    var partParams = {
      Body: chunk,
      ContentLength: AWS.util.string.byteLength(chunk),
      PartNumber: partNumber
    };

    var partInfo = {ETag: null, PartNumber: partNumber};
    completeInfo.push(partInfo);

    var req = svc.uploadPart(partParams);
    parts[partNumber] = req;
    req._lastUploadedBytes = 0;
    req.on('httpUploadProgress', progress);
    req.send(function(err, data) {
      delete parts[partParams.PartNumber];
      activeParts--;
      if (err) return cleanup(err);

      partInfo.ETag = data.ETag;
      doneParts++;
      if (isDoneChunking && doneParts === numParts) {
        finishMultiPart();
      } else {
        fillQueue();
      }
    });
  }

  function nextChunk(chunk) {
    var partNumber = ++totalPartNumbers;
    if (isDoneChunking && partNumber === 1) {
      return svc.putObject({Body: chunk}).
        on('httpUploadProgress', progress).send(finishSinglePart);
    }

    activeParts++;
    if (!svc.config.params.UploadId) {
      if (!multipartReq) { // create multipart
        multipartReq = svc.createMultipartUpload();
        multipartReq.on('success', function(resp) {
          svc.config.params.UploadId = resp.data.UploadId;
          multipartReq = null;
        }).on('error', cleanup).send();
      }

      // queue chunks to be sent after multipart is done.
      multipartReq.on('success', function() {
        uploadPart(chunk, partNumber);
      });
    } else { // multipart is created, just send
      uploadPart(chunk, partNumber);
    }
  }

  var partPos = 0;
  var partBuffer = null;
  var queueFillFns = {
    stream: function() {
      if (activeParts >= maxQueue) return;

      var buf = body.read(partSize - partBuffer.length) ||
                body.read();
      if (buf) {
        partBuffer = AWS.util.Buffer.concat([partBuffer, buf]);
        totalChunkedBytes += buf.length;
      }

      if (partBuffer.length >= partSize) {
        nextChunk(partBuffer.slice(0, partSize));
        partBuffer = partBuffer.slice(partSize);
      } else if (isDoneChunking && partBuffer.length > 0) {
        totalBytes = totalChunkedBytes;
        nextChunk(partBuffer);
        partBuffer = new AWS.util.Buffer(0);
      }

      body.read(0);
    },

    buffer: function() {
      var bodyLen = AWS.util.string.byteLength(body);
      while (activeParts < maxQueue && partPos < bodyLen) {
        var buf = body.slice(partPos, partPos + partSize);
        partPos += partSize;

        if (AWS.util.string.byteLength(buf) < partSize) {
          isDoneChunking = true;
          numParts = totalPartNumbers + 1;
        }
        nextChunk(buf);
      }
    }
  };

  function configure(opts) {
    opts = opts || {};
    if (opts.maxQueue) maxQueue = opts.maxQueue;
    if (opts.partSize) partSize = opts.partSize;
  }

  function send(params, cb) {
    if (arguments.length === 1 && typeof params === 'function') {
      cb = params; params = null;
    }
    params = params || {};
    callback = cb || function() {};

    // bind parameters to new service object
    if (!svc) {
      svc = new AWS.S3({params: params});
    } else {
      svc = new svc.constructor.__super__(AWS.util.copy(svc.config));
      svc.config.params = AWS.util.merge(svc.config.params || {}, params);
    }

    configure(options);
    body = svc.config.params.Body;
    if (!body) throw new Error('params.Body is required');
    if (typeof body === 'string') body = new AWS.util.Buffer(body);

    if (partSize < minMultipartSize) {
      throw new Error('partSize must be greater than ' + minMultipartSize);
    }

    // try to get totalBytes
    try {
      totalBytes = AWS.util.string.byteLength(body);
    } catch (e) { }

    // try to adjust partSize if we know payload length
    if (totalBytes) {
      var newPartSize = Math.ceil(totalBytes / maxTotalParts);
      if (newPartSize > partSize) partSize = newPartSize;
    } else {
      totalBytes = undefined;
    }

    var runFill = true;
    if (typeof body.slice === 'function') {
      fillQueue = queueFillFns.buffer;
    } else if (AWS.util.isNode()) {
      var Stream = AWS.util.nodeRequire('stream').Stream;
      if (body instanceof Stream) {
        runFill = false;
        fillQueue = queueFillFns.stream;
        partBuffer = new AWS.util.Buffer(0);
        body.on('readable', fillQueue).on('end', function() {
          isDoneChunking = true;
          numParts = totalPartNumbers + 1;
          fillQueue();
        });
      }
    }
    if (runFill) fillQueue();
  }

  self.configure = configure;
  self.send = send;
}

AWS.util.mixin(ManagedUpload, AWS.SequentialExecutor);
module.exports = ManagedUpload;
