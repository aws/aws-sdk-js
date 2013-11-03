/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

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
    var xhr = new XMLHttpRequest();
    var emitter = new EventEmitter();
    var href = endpoint.protocol + '//' + endpoint.host;
    if (endpoint.port != 80 && endpoint.port != 443) {
      href += ':' + endpoint.port;
    }
    href += httpRequest.path;

    if (httpOptions.timeout) {
      xhr.timeout = httpOptions.timeout;
    }

    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.HEADERS_RECEIVED) {
        try { xhr.responseType = 'arraybuffer'; } catch (e) {}
        emitter.statusCode = xhr.status;
        emitter.headers = self.parseHeaders(xhr.getAllResponseHeaders());
        callback(emitter);
      } else if (this.readyState === this.DONE) {
        var buffer;
        if (xhr.responseType === 'arraybuffer' && xhr.response) {
          var ab = xhr.response;
          buffer = new Buffer(ab.byteLength);
          var view = new Uint8Array(ab);
          for (var i = 0; i < buffer.length; ++i) {
            buffer[i] = view[i];
          }
        }

        try {
          if (!buffer && typeof xhr.responseText === 'string') {
            buffer = new Buffer(xhr.responseText);
          }
        } catch (e) {}

        if (buffer) emitter.emit('data', buffer);
        emitter.emit('end');
      }
    }, false);
    xhr.addEventListener('timeout', function () {
      errCallback(AWS.util.error(new Error('Timeout'), {code: 'TimeoutError'}));
    }, false);
    xhr.addEventListener('error', function () {
      errCallback(new Error('Network Failure'));
    }, false);

    xhr.open(httpRequest.method, href, true);
    AWS.util.each(httpRequest.headers, function (key, value) {
      if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
        xhr.setRequestHeader(key, value);
      }
    });

    if (httpRequest.body && typeof httpRequest.body.buffer === 'object') {
      xhr.send(httpRequest.body.buffer); // typed arrays sent as ArrayBuffer
    } else {
      xhr.send(httpRequest.body);
    }

    return emitter;
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    var headers = {};
    AWS.util.arrayEach(rawHeaders.split(/\r?\n/), function (line) {
      var key = line.split(':', 1)[0];
      var value = line.substring(key.length + 2);
      if (key.length > 0) headers[key] = value;
    });
    return headers;
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
