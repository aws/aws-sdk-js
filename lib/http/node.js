var AWS = require('../core');
var Stream = AWS.util.stream.Stream;
var TransformStream = AWS.util.stream.Transform;
var ReadableStream = AWS.util.stream.Readable;
require('../http');
var attachLengthChecker = require('./response-validator/attachValidators');

/**
 * @api private
 */
AWS.NodeHttpClient = AWS.util.inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var self = this;
    var endpoint = httpRequest.endpoint;
    var pathPrefix = '';
    if (!httpOptions) httpOptions = {};
    if (httpOptions.proxy) {
      pathPrefix = endpoint.protocol + '//' + endpoint.hostname;
      if (endpoint.port !== 80 && endpoint.port !== 443) {
        pathPrefix += ':' + endpoint.port;
      }
      endpoint = new AWS.Endpoint(httpOptions.proxy);
    }

    var useSSL = endpoint.protocol === 'https:';
    var http = useSSL ? require('https') : require('http');
    var options = {
      host: endpoint.hostname,
      port: endpoint.port,
      method: httpRequest.method,
      headers: httpRequest.headers,
      path: pathPrefix + httpRequest.path
    };

    if (useSSL && !httpOptions.agent) {
      options.agent = this.sslAgent();
    }

    AWS.util.update(options, httpOptions);
    delete options.proxy; // proxy isn't an HTTP option
    delete options.timeout; // timeout isn't an HTTP option

    var stream = http.request(options, function (httpResp) {
      if (stream && stream.didCallback) return;
      var headers = httpResp.headers;
      var responseStream = httpResp;

      if (AWS.HttpClient.streamsApiVersion === 2) {
        //should validate content length
        if (headers && headers['content-length'] && httpRequest.method !== 'HEAD') {
          var ContentLengthCheckerStream = require('./response-validator/contentLengthChecker')
          var contentLengthCheckerStream = new ContentLengthCheckerStream(
            parseInt(headers['content-length'], 10)
          );
          responseStream.on('error', function(err) {
            responseStream.unpipe(contentLengthCheckerStream);
            if (typeof httpResp.destroy === 'function') httpResp.destroy();
            contentLengthCheckerStream.emit('error', err);
          });
          responseStream = responseStream.pipe(contentLengthCheckerStream)
        }
        //if response contains checksum in payload, validate it and chop it off the response stream.
        if (headers && headers['x-amz-transfer-encoding'] && headers['content-length']) {
          var transferEncoding = headers['x-amz-transfer-encoding'];
          var contentLength = headers['content-length'];
          var IntegrityCheckerStream = require('./response-validator/integrityChecker');
          var integrityCheckerStream = new IntegrityCheckerStream(transferEncoding, contentLength);
          responseStream.on('error', function(err) {
            responseStream.unpipe(integrityCheckerStream);
            if (typeof httpResp.destroy === 'function') httpResp.destroy();
            integrityCheckerStream.emit('error', err);
          })
          responseStream = responseStream.pipe(integrityCheckerStream);
          httpResp.headers['content-length'] -= 16;
        }
      } else {
        if (headers && headers['content-length'] && httpRequest.method !== 'HEAD') {
          attachLengthChecker(responseStream, parseInt(headers['content-length'], 10));
        }
          //TODO
          // not support integrity check for node version < 0.9.4 / streamAPI version 1
      }

      if (callback) callback(responseStream);
      responseStream.emit(
        'headers',
        httpResp.statusCode,
        httpResp.headers,
        httpResp.statusMessage
      );
    });
    httpRequest.stream = stream; // attach stream to httpRequest
    stream.didCallback = false;

    // connection timeout support
    if (httpOptions.connectTimeout) {
      stream.on('socket', function(socket) {
        if (socket.connecting) {
          var timeoutId = setTimeout(function connectTimeout() {
            if (stream.didCallback) return; stream.didCallback = true;

            stream.abort();
            errCallback(AWS.util.error(
              new Error('Socket timed out without establishing a connection'),
              {code: 'TimeoutError'}
            ));
          }, httpOptions.connectTimeout);
          socket.on('connect', (function(tId) {
            return function () {
              clearTimeout(tId);
            };
          })(timeoutId));
        }
      });
    }

    // timeout support
    stream.setTimeout(httpOptions.timeout || 0, function() {
      if (stream.didCallback) return; stream.didCallback = true;

      var msg = 'Connection timed out after ' + httpOptions.timeout + 'ms';
      errCallback(AWS.util.error(new Error(msg), {code: 'TimeoutError'}));
      stream.abort();
    });

    stream.on('error', function() {
      if (stream.didCallback) return; stream.didCallback = true;
      errCallback.apply(stream, arguments);
    });

    var expect = httpRequest.headers.Expect || httpRequest.headers.expect;
    if (expect === '100-continue') {
      stream.on('continue', function() {
        self.writeBody(stream, httpRequest);
      });
    } else {
      this.writeBody(stream, httpRequest);
    }

    return stream;
  },

  writeBody: function writeBody(stream, httpRequest) {
    var body = httpRequest.body;
    var totalBytes = parseInt(httpRequest.headers['Content-Length'], 10);

    if (body instanceof Stream) {
      // For progress support of streaming content -
      // pipe the data through a transform stream to emit 'sendProgress' events
      var progressStream = this.progressStream(stream, totalBytes);
      if (progressStream) {
        body.pipe(progressStream).pipe(stream);
      } else {
        body.pipe(stream);
      }
    } else if (body) {
      // The provided body is a buffer/string and is already fully available in memory -
      // For performance it's best to send it as a whole by calling stream.end(body),
      // Callers expect a 'sendProgress' event which is best emitted once
      // the http request stream has been fully written and all data flushed.
      // The use of totalBytes is important over body.length for strings where
      // length is char length and not byte length.
      stream.once('finish', function() {
        stream.emit('sendProgress', {
          loaded: totalBytes,
          total: totalBytes
        });
      });
      stream.end(body);
    } else {
      // no request body
      stream.end();
    }
  },

  sslAgent: function sslAgent() {
    var https = require('https');

    if (!AWS.NodeHttpClient.sslAgent) {
      AWS.NodeHttpClient.sslAgent = new https.Agent({rejectUnauthorized: true});
      AWS.NodeHttpClient.sslAgent.setMaxListeners(0);

      // delegate maxSockets to globalAgent, set a default limit of 50 if current value is Infinity.
      // Users can bypass this default by supplying their own Agent as part of SDK configuration.
      Object.defineProperty(AWS.NodeHttpClient.sslAgent, 'maxSockets', {
        enumerable: true,
        get: function() {
          var defaultMaxSockets = 50;
          var globalAgent = https.globalAgent;
          if (globalAgent && globalAgent.maxSockets !== Infinity && typeof globalAgent.maxSockets === 'number') {
            return globalAgent.maxSockets;
          }
          return defaultMaxSockets;
        }
      });
    }
    return AWS.NodeHttpClient.sslAgent;
  },

  progressStream: function progressStream(stream, totalBytes) {
    if (typeof TransformStream === 'undefined') {
      // for node 0.8 there is no streaming progress
      return;
    }
    var loadedBytes = 0;
    var reporter = new TransformStream();
    reporter._transform = function(chunk, encoding, callback) {
      if (chunk) {
        loadedBytes += chunk.length;
        stream.emit('sendProgress', {
          loaded: loadedBytes,
          total: totalBytes
        });
      }
      callback(null, chunk);
    };
    return reporter;
  },

  emitter: null
});

/**
 * @!ignore
 */

/**
 * @api private
 */
AWS.HttpClient.prototype = AWS.NodeHttpClient.prototype;

/**
 * @api private
 */
AWS.HttpClient.streamsApiVersion = ReadableStream ? 2 : 1;
