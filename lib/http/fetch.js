var AWS = require('../core');
var pipeThrough = AWS.util.pipeThrough;
var TransformStream = typeof TransformStream !== 'undefined' ? TransformStream :
  AWS.util.stream && AWS.util.stream.TransformStream ? AWS.util.stream.TransformStream :
  typeof WebStreamsPolyfill !== 'undefined' ? WebStreamsPolyfill.TransformStream :
  undefined;
require('../http');
var CONNECTION_REUSE_ENV_NAME = 'AWS_NODEJS_CONNECTION_REUSE_ENABLED';

/**
 * @api private
 */
AWS.FetchClient = AWS.util.inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var self = this;
    var endpoint = httpRequest.endpoint;
    if (!httpOptions) httpOptions = {};

    var emitter = new EventEmitter();

    // Construct href
    var href = endpoint.protocol + '//' + endpoint.hostname;
    if (endpoint.port !== 80 && endpoint.port !== 443) {
      href += ':' + endpoint.port;
    }
    href += httpRequest.path;

    // Construct headers
    var headers = new Headers();
    AWS.util.each(httpRequest.headers, function (key, value) {
      // See: https://fetch.spec.whatwg.org/#forbidden-header-name
      if (key !== 'Content-Length' && key !== 'Expect' && key !== 'Host') {
        headers.set(key, value);
      }
    });

    // Send cookies?
    var credentials = 'omit';
    if (httpOptions.xhrWithCredentials) {
      credentials = 'include';
    }

    // Construct request
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
    var req = {
      method: httpRequest.method,
      headers: headers,
      credentials: credentials
    };
    if (httpRequest.body) req.body = httpRequest.body;
    var request = new Request(href, req);

    // Send request
    fetch(request).then(function(response) {
        if (!response.ok) throw Error(response.statusText);
        return response;
    }).then(function(response) {
      emitter.statusCode = response.status;
      emitter.headers = self.parseHeaders(response.headers);
      emitter.abort = function() { response.body.cancel(); };

      httpRequest.responseStream = self.writeBody(emitter, response); // attach responseStream to httpRequest
      httpRequest.stream = emitter; // attach emitter to httpRequest
      emitter.didCallback = false; // Required for httpDone event

      emitter.on('error', function() {
        if (emitter.didCallback) return; emitter.didCallback = true;
        errCallback.apply(emitter, arguments);
      });

      if (emitter.didCallback) return;
      callback(emitter);
      emitter.emit(
        'headers',
        emitter.statusCode,
        emitter.headers,
        response.statusText
      );
    }, function(err) {
        if (emitter.didCallback) return; emitter.didCallback = true;
        errCallback(AWS.util.error(new Error('Network Failure'), {
        code: 'NetworkingError'
      }));
    }).catch(function(err) {
      if (emitter.didCallback) return; emitter.didCallback = true;
      errCallback(AWS.util.error(err, {
        code: 'BadReplyError'
      }));
    });

    return emitter;
  },

  writeBody: function writeBody(emitter, response) {
    var body = response.body;
    var totalBytes = parseInt(response.headers.get('Content-Length'), 10);

    // For progress support of streaming content -
    // pipe the data through a transform stream to emit 'sendProgress' events
    var progressStream = this.progressStream(emitter, totalBytes);
    if (progressStream) {
      if (body.pipeThrough) {
        return body.pipeThrough(progressStream);
      } else {
        // less optimized
        return pipeThrough(body, progressStream);
      }
    } else {
      return body;
    }
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    var headers = {};
    rawHeaders.forEach(function(val,key){
       headers[key] = val;
    });

    return headers;
  },

  progressStream: function progressStream(emitter, totalBytes) {
    if (typeof TransformStream === 'undefined') {
      return;
    }

    var loadedBytes = 0;
    var transform = function(chunk, controller, callback) {
      if (chunk) {
        loadedBytes += chunk.length;
        emitter.emit('sendProgress', {
          loaded: loadedBytes,
          total: totalBytes
        });
      }
      if (typeof callback === 'function') {
        callback(null, chunk);
      } else {
        controller.enqueue(chunk);
      }
    };
    return new TransformStream({ transform: transform });
  },

  emitter: null
});

/**
 * @!ignore
 */

/**
 * @api private
 */
AWS.HttpClient.prototype = AWS.FetchClient.prototype;

/**
 * @api private
 */
AWS.HttpClient.streamsApiVersion = 3;
