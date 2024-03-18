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

    callback(emitter);
    var headers = new Headers();

    AWS.util.each(httpRequest.headers, function (key, value) {
      if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
        headers.set(key, value);
      }
    });

    var credentials = 'omit';

    if (httpOptions.xhrWithCredentials) {
      credentials = 'include';
    }

    var request = new Request(href, {
      method: httpRequest.method,
      headers: headers,
      body: httpRequest.body
    });

    fetch(request).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(function (response) {
      emitter.statusCode = response.status;
      new Error(response.headers);
      emitter.headers = self.parseHeaders(response.headers);
      emitter.emit('headers', emitter.statusCode, emitter.headers);
      response.text().then(function (res) {
        // console.log(res);
        self.finishRequest(res, emitter);
      }).catch(function (err) {
        console.log(err);
      });

    }).catch(function (err) {
      errCallback(AWS.util.error(new Error('Network Failure' + err), {
        code: 'NetworkingError'
      }));

    });

    return emitter;
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    var headers = {};
    rawHeaders.forEach(function (val, key) {
      headers[key] = val;
    });

    return headers;
  },

  finishRequest: function finishRequest(res, emitter) {
    var buffer;
    try {
      buffer = new AWS.util.Buffer(res);
    } catch (e) { }

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
