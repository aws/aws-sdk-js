var AWS = require('../core');
var EventEmitter = require('events').EventEmitter;
require('../http');

/**
 * @api private
 */
AWS.XHRClient = AWS.util.inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var self = this;
    var endpoint = httpRequest.endpoint;
    var emitter = new EventEmitter();
    var href = endpoint.protocol + '//' + endpoint.hostname;
    if (endpoint.port !== 80 && endpoint.port !== 443) {
      href += ':' + endpoint.port;
    }
    href += httpRequest.path;

    var xhr = new XMLHttpRequest(), headersEmitted = false;
    httpRequest.stream = xhr;

    xhr.addEventListener('readystatechange', function() {
      try {
        if (xhr.status === 0) return; // 0 code is invalid
      } catch (e) { return; }

      if (this.readyState >= this.HEADERS_RECEIVED && !headersEmitted) {
        emitter.statusCode = xhr.status;
        emitter.headers = self.parseHeaders(xhr.getAllResponseHeaders());
        emitter.emit(
          'headers',
          emitter.statusCode,
          emitter.headers,
          xhr.statusText
        );
        headersEmitted = true;
      }
      if (this.readyState === this.DONE) {
        self.finishRequest(xhr, emitter);
      }
    }, false);
    xhr.upload.addEventListener('progress', function (evt) {
      emitter.emit('sendProgress', evt);
    });
    xhr.addEventListener('progress', function (evt) {
      emitter.emit('receiveProgress', evt);
    }, false);
    xhr.addEventListener('timeout', function () {
      errCallback(AWS.util.error(new Error('Timeout'), {code: 'TimeoutError'}));
    }, false);
    xhr.addEventListener('error', function () {
      errCallback(AWS.util.error(new Error('Network Failure'), {
        code: 'NetworkingError'
      }));
    }, false);
    xhr.addEventListener('abort', function () {
      errCallback(AWS.util.error(new Error('Request aborted'), {
        code: 'RequestAbortedError'
      }));
    }, false);

    callback(emitter);
    xhr.open(httpRequest.method, href, httpOptions.xhrAsync !== false);
    AWS.util.each(httpRequest.headers, function (key, value) {
      if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
        xhr.setRequestHeader(key, value);
      }
    });

    if (httpOptions.timeout && httpOptions.xhrAsync !== false) {
      xhr.timeout = httpOptions.timeout;
    }

    if (httpOptions.xhrWithCredentials) {
      xhr.withCredentials = true;
    }
    try { xhr.responseType = 'arraybuffer'; } catch (e) {}

    try {
      if (httpRequest.body) {
        xhr.send(httpRequest.body);
      } else {
        xhr.send();
      }
    } catch (err) {
      if (httpRequest.body && typeof httpRequest.body.buffer === 'object') {
        xhr.send(httpRequest.body.buffer); // send ArrayBuffer directly
      } else {
        throw err;
      }
    }

    return emitter;
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    // rawHeaders.split(/\r?\n/) method has a bug in ie11
    // Using finite state machine to solve ie11 parsing head problem
    var responseChunkedParse = {
      receive: function(data) {
        //  the response header
        this.header = {};
        // The name of the response header
        this.name = '';
        // The value of the response header
        this.value = '';
        // State machine, each state is designed as a function
        this.handleStatus = this.foundHeaderName;
        // The data is fed to each state machine, and the data is parsed and stored
        for (var a = 0; a < data.length; a++) {
          this.handleStatus = this.handleStatus(data.charAt(a));
        }
        this.setHeaderData();
        return this.header;
      },
      foundHeaderName: function(char) {
        // The name of the response header, such as content-type: application/x-www-form-urlencoded, and content-type is name
        if (char === ':') {
          return this.foundHeaderSpace;
        } else if (char === ' ' || char === '\r' || char === '\n') {
          return this.foundHeaderName;
        } else {
          this.name += char;
        }
        return this.foundHeaderName;
      },
      foundHeaderSpace: function(char) {
        // The space in the response header, such as content-type: application/x-www-form-urlencoded, ':' is followed by a space
        if (char === ' ') {
          return this.foundHeaderValue;
        }
        return this.foundHeaderSpace;
      },
      foundHeaderValue: function(char) {
        // The value of the response header, such as content-type: application/x-www-form-urlencoded，application/x-www-form-urlencoded is value
        if (char === '\r' || char === '\n') {
          // You need to filter out the '\r\n' between each item in the response header, such as content-type: application/x-www-form-urlencoded'\r\n'content-length:10
          this.setHeaderData();
          return this.foundHeaderName;
        } else {
          this.value += char;
        }
        return this.foundHeaderValue;
      },

      setHeaderData: function() {
        if (!this.name || !this.value) return;
        this.header[this.name.toLowerCase()] = this.value;
        this.name = '';
        this.value = '';
      },
    };
    var newHeaders = responseChunkedParse.receive(rawHeaders) || {};
    return newHeaders;
  },

  finishRequest: function finishRequest(xhr, emitter) {
    var buffer;
    if (xhr.responseType === 'arraybuffer' && xhr.response) {
      var ab = xhr.response;
      buffer = new AWS.util.Buffer(ab.byteLength);
      var view = new Uint8Array(ab);
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
      }
    }

    try {
      if (!buffer && typeof xhr.responseText === 'string') {
        buffer = new AWS.util.Buffer(xhr.responseText);
      }
    } catch (e) {}

    if (buffer) emitter.emit('data', buffer);
    emitter.emit('end');
  }
});

/**
 * @api private
 */
AWS.HttpClient.prototype = AWS.XHRClient.prototype;

/**
 * @api private
 */
AWS.HttpClient.streamsApiVersion = 1;
