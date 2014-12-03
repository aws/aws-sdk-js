var AWS = require('../core');
var byteLength = AWS.util.string.byteLength;

AWS.S3.ManagedUpload = AWS.util.inherit({
  constructor: function ManagedUpload(options) {
    var self = this;
    AWS.SequentialExecutor.call(self);
    self.body = null;
    self.callback = null;
    self.parts = {};
    self.completeInfo = [];
    self.fillQueue = function() {
      self.callback(new Error('Unsupported body payload ' + typeof self.body));
    };

    self.configure(options);
  },

  /**
   * @api private
   */
  configure: function configure(options) {
    options = options || {};
    this.partSize = this.minPartSize;

    if (options.queueSize) this.queueSize = options.queueSize;
    if (options.partSize) this.partSize = options.partSize;
    if (options.leavePartsOnError) this.leavePartsOnError = true;

    if (this.partSize < this.minPartSize) {
      throw new Error('partSize must be greater than ' +
                      this.minPartSize);
    }

    this.service = options.service;
    this.bindServiceObject(options.params);
    this.validateBody();
    this.adjustTotalBytes();
  },

  leavePartsOnError: false,
  queueSize: 4,
  partSize: null,
  minPartSize: 1024 * 1024 * 5,
  maxTotalParts: 10000,

  send: function(cb) {
    var self = this;
    self.callback = cb || function(err) { if (err) throw err; };

    var runFill = true;
    if (typeof self.body.slice === 'function') {
      self.fillQueue = self.fillBuffer;
    } else if (AWS.util.isNode()) {
      var Stream = AWS.util.nodeRequire('stream').Stream;
      if (self.body instanceof Stream) {
        runFill = false;
        self.fillQueue = self.fillStream;
        self.partBuffer = new AWS.util.Buffer(0);
        self.body.
          on('readable', function() { self.fillQueue(); }).
          on('end', function() {
            self.isDoneChunking = true;
            self.numParts = self.totalPartNumbers + 1;
            self.fillQueue.call(self);
          });
      }
    }

    if (runFill) self.fillQueue.call(self);
  },

  /**
   * @api private
   */
  validateBody: function validateBody() {
    var self = this;
    self.body = self.service.config.params.Body;
    if (!self.body) throw new Error('params.Body is required');
    if (typeof self.body === 'string') {
      self.body = new AWS.util.Buffer(self.body);
    }
  },

  /**
   * @api private
   */
  bindServiceObject: function bindServiceObject(params) {
    params = params || {};
    var self = this;

    // bind parameters to new service object
    if (!self.service) {
      self.service = new AWS.S3({params: params});
    } else {
      var config = AWS.util.copy(self.service.config);
      self.service = new self.service.constructor.__super__(config);
      self.service.config.params =
        AWS.util.merge(self.service.config.params || {}, params);
    }
  },

  /**
   * @api private
   */
  adjustTotalBytes: function adjustTotalBytes() {
    var self = this;
    try { // try to get totalBytes
      self.totalBytes = byteLength(self.body);
    } catch (e) { }

    // try to adjust partSize if we know payload length
    if (self.totalBytes) {
      var newPartSize = Math.ceil(self.totalBytes / self.maxTotalParts);
      if (newPartSize > self.partSize) self.partSize = newPartSize;
    } else {
      self.totalBytes = undefined;
    }
  },

  /**
   * @api private
   */
  isDoneChunking: false,

  /**
   * @api private
   */
  partPos: 0,

  /**
   * @api private
   */
  totalChunkedBytes: 0,

  /**
   * @api private
   */
  totalUploadedBytes: 0,

  /**
   * @api private
   */
  totalBytes: undefined,

  /**
   * @api private
   */
  numParts: 0,

  /**
   * @api private
   */
  totalPartNumbers: 0,

  /**
   * @api private
   */
  activeParts: 0,

  /**
   * @api private
   */
  doneParts: 0,

  /**
   * @api private
   */
  parts: null,

  /**
   * @api private
   */
  completeInfo: null,

  /**
   * @api private
   */
  failed: false,

  /**
   * @api private
   */
  multipartReq: null,

  /**
   * @api private
   */
  partBuffer: null,

  /**
   * @api private
   */
  fillBuffer: function fillBuffer() {
    var self = this;
    var bodyLen = byteLength(self.body);
    while (self.activeParts < self.queueSize && self.partPos < bodyLen) {
      var buf = self.body.slice(self.partPos, self.partPos + self.partSize);
      self.partPos += self.partSize;

      if (byteLength(buf) < self.partSize || self.partPos === bodyLen) {
        self.isDoneChunking = true;
        self.numParts = self.totalPartNumbers + 1;
      }
      self.nextChunk(buf);
    }
  },

  /**
   * @api private
   */
  fillStream: function fillStream() {
    var self = this;
    if (self.activeParts >= self.queueSize) return;

    var buf = self.body.read(self.partSize - self.partBuffer.length) ||
              self.body.read();
    if (buf) {
      self.partBuffer = AWS.util.Buffer.concat([self.partBuffer, buf]);
      self.totalChunkedBytes += buf.length;
    }

    if (self.partBuffer.length >= self.partSize) {
      self.partBuffer = self.partBuffer.slice(self.partSize);
    } else if (self.isDoneChunking && self.partBuffer.length > 0) {
      self.totalBytes = self.totalChunkedBytes;
      self.nextChunk(self.partBuffer);
      self.partBuffer = new AWS.util.Buffer(0);
    }

    self.body.read(0);
  },

  /**
   * @api private
   */
  nextChunk: function nextChunk(chunk) {
    var self = this;
    if (self.failed) return null;

    var partNumber = ++self.totalPartNumbers;
    if (self.isDoneChunking && partNumber === 1) {
      var req = self.service.putObject({Body: chunk});
      req._managedUpload = self;
      req.on('httpUploadProgress', self.progress).send(self.finishSinglePart);
      return null;
    }

    self.activeParts++;
    if (!self.service.config.params.UploadId) {

      if (!self.multipartReq) { // create multipart
        self.multipartReq = self.service.createMultipartUpload();
        self.multipartReq.on('success', function(resp) {
          self.service.config.params.UploadId = resp.data.UploadId;
          self.multipartReq = null;
        });
        self.queueChunks(chunk, partNumber);
        self.multipartReq.on('error', self.cleanup);
        self.multipartReq.send();
      } else {
        self.queueChunks(chunk, partNumber);
      }
    } else { // multipart is created, just send
      self.uploadPart(chunk, partNumber);
    }
  },

  /**
   * @api private
   */
  uploadPart: function uploadPart(chunk, partNumber) {
    var self = this;
    var partParams = {
      Body: chunk,
      ContentLength: AWS.util.string.byteLength(chunk),
      PartNumber: partNumber
    };

    var partInfo = {ETag: null, PartNumber: partNumber};
    self.completeInfo.push(partInfo);

    var req = self.service.uploadPart(partParams);
    self.parts[partNumber] = req;
    req._lastUploadedBytes = 0;
    req._managedUpload = self;
    req.on('httpUploadProgress', self.progress);
    req.send(function(err, data) {
      delete self.parts[partParams.PartNumber];
      self.activeParts--;

      if (!err && (!data || !data.ETag)) {
        var message = 'No access to ETag property on response.';
        if (AWS.util.isBrowser()) {
          message += ' Check CORS configuration to expose ETag header.';
        }

        err = AWS.util.error(new Error(message), {
          code: 'ETagMissing', retryable: false
        });
      }
      if (err) return self.cleanup(err);

      partInfo.ETag = data.ETag;
      self.doneParts++;
      if (self.isDoneChunking && self.doneParts === self.numParts) {
        self.finishMultiPart();
      } else {
        self.fillQueue.call(self);
      }
    });
  },

  /**
   * @api private
   */
  queueChunks: function queueChunks(chunk, partNumber) {
    var self = this;
    self.multipartReq.on('success', function() {
      self.uploadPart(chunk, partNumber);
    });
  },

  /**
   * @api private
   */
  cleanup: function cleanup(err) {
    var self = this;
    if (self.failed) return;

    // clean up stream
    if (typeof self.body.removeAllListeners === 'function' &&
        typeof self.body.resume === 'function') {
      self.body.removeAllListeners('readable');
      self.body.removeAllListeners('end');
      self.body.resume();
    }

    if (self.service.config.params.UploadId && !self.leavePartsOnError) {
      self.service.abortMultipartUpload().send();
    }

    AWS.util.each(self.parts, function(partNumber, part) {
      part.removeAllListeners('complete');
      part.abort();
    });

    self.parts = {};
    self.callback(err);
    self.failed = true;
  },

  /**
   * @api private
   */
  finishMultiPart: function finishMultiPart() {
    var self = this;
    var completeParams = { MultipartUpload: { Parts: self.completeInfo } };
    self.service.completeMultipartUpload(completeParams, function(err, data) {
      if (err) return self.cleanup(err);
      else self.callback(err, data);
    });
  },

  /**
   * @api private
   */
  finishSinglePart: function finishSinglePart(err, data) {
    var upload = this.request._managedUpload;
    var httpReq = this.request.httpRequest;
    var url = AWS.util.urlFormat(httpReq.endpoint);
    if (err) return upload.callback(err);
    data.Location = url.substr(0, url.length - 1) + httpReq.path;
    upload.callback(err, data);
  },

  /**
   * @api private
   */
  progress: function progress(info) {
    var upload = this._managedUpload;
    if (this.operation === 'putObject') {
      info.part = 1;
    } else {
      upload.totalUploadedBytes += info.loaded - this._lastUploadedBytes;
      this._lastUploadedBytes = info.loaded;
      info = {
        loaded: upload.totalUploadedBytes,
        total: upload.totalBytes,
        part: this.params.PartNumber
      };
    }
    upload.emit('httpUploadProgress', [info]);
  }
});

AWS.util.mixin(AWS.S3.ManagedUpload, AWS.SequentialExecutor);
module.exports = AWS.S3.ManagedUpload;
