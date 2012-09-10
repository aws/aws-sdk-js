/**
 * @fileoverview AWS JS SDK
 * @suppress {undefinedVars}
 */
var http = require('http');
var https = require('https');
var cryptoLib = require('crypto');

/**
 * @namespace AWS
 */
var AWS = {};

/**
 * @namespace util
 */
AWS.util = {
  date: {
    getDate: function getDate() {
      return new Date();
    },

    getISODateString: function getISODateString() {
      var date = AWS.util.date.getDate();
      return date.toISOString().replace(/[:-]|\.\d{3}/g, '');
    }
  },

  crypto: {
    hmachex: function hmachex(key, string) {
      return cryptoLib.createHmac('sha256', key).update(string).digest('hex');
    },

    hmac: function hmac(key, string) {
      return cryptoLib.createHmac('sha256', key).update(string).digest('binary');
    },

    sha256hex: function sha256hex(string) {
      return cryptoLib.createHash('sha256').update(string).digest('hex');
    },

    sha256: function sha256(string) {
      return cryptoLib.createHash('sha256').update(string).digest('binary');
    },

    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(("0" + data.charCodeAt(i).toString(16)).substr(-2,2));
      }
      return out.join('');
    }
  }

};

/**
 * @class AWS.DynamoDB
 * @constructor
 */
AWS.DynamoDB = function DynamoDB(config) {
  this.config = config;
  this.endpoint = new AWS.Endpoint(this.config);
};

AWS.DynamoDB.prototype = {

  createTable: function createTable(params) {
    return this.makeRequest('createTable', params);
  },

  deleteTable: function deleteTable(params) {
    return this.makeRequest('deleteTable', params);
  },

  describeTable: function describeTable(params) {
    return this.makeRequest('describeTable', params);
  },

  listTables: function listTables(params) {
    return this.makeRequest('listTables', params);
  },

  makeRequest: function makeRequest(operation, params) {

    var awsResponse = new AWS.AWSResponse({
      service: this,
      operation: operation,
      params: params
    });

    var awsRequest = new AWS.AWSRequest(awsResponse);

    var requestHandler = new AWS.RequestHandler(awsRequest);
    requestHandler.makeRequest();

    return awsRequest;

  },

  buildHttpRequest: function buildHttpRequest(operation, params) {

    var target = 'DynamoDB_20111205.' +
      operation[0].toUpperCase() +
      operation.substr(1);

    var httpRequest = new AWS.HttpRequest();
    httpRequest.serviceName = 'dynamodb';
    httpRequest.method = 'POST';
    httpRequest.uri = '/';
    httpRequest.body = JSON.stringify(params || {});
    httpRequest.headers = {
      'Content-Type': 'application/x-amz-json-1.0',
      'User-Agent': 'aws-sdk-js/0.1',
      'Content-Length': httpRequest.body.length,
      'X-Amz-Target': target
    };
    httpRequest.endpoint = this.endpoint;
    httpRequest.sign(this.config.credentials);
    return httpRequest;
  },

  parseResponse: function parseResponse(httpResponse) {
    if (httpResponse.body) {
      return JSON.parse(httpResponse.body);
    } else {
      return {};
    }
  },

  extractError: function extractError(httpResponse) {
    if (httpResponse.statusCode >= 400) {
      // this logic varies between services
      var error = JSON.parse(httpResponse.body);
      return {
        code: error['__type'].split('#')[1] || httpResponse.statusCode,
        message: error['message'] || null
      };
    } else if (httpResponse.statusCode >= 300) {
      return {
        code: httpResponse.statusCode,
        message: httpResponse.statusCode
      };
    } else {
      return null;
    }
  },

  shouldRetry: function shouldRetry(httpResponse, error) {
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (httpResponse.statusCode >= 500) return true;
    return false;
  },

  expiredCredentialsError: function expiredCredentialsError(httpResponse) {
    // this logic varies between services (about a dozen different ways)
    // TODO check for expired credential errors
    return false;
  },

  throttledError: function throttledError(error) {
    // this logic varies between services
    return (error.code == 'ProvisionedThroughputExceededException');
  },

  serviceError: function serviceError(error) {
    // this logic should be consitent between services
    return (httpResponse.statusCode >= 500);
  }

};

/**
 * @constructor
 */
AWS.RequestHandler = function RequestHandler(awsRequest) {
  this.awsRequest = awsRequest;
  this.maxRetries = 3;
}

AWS.RequestHandler.prototype = {

  makeRequest: function makeRequest() {

    var requestHandler = this;
    var awsResponse = this.awsRequest.awsResponse;
    var service = awsResponse.service;
    var operation = awsResponse.operation;
    var params = awsResponse.params;

    var httpRequest = service.buildHttpRequest(operation, params);
    var httpResponse = new AWS.HttpResponse();

    awsResponse.httpRequest = httpRequest;

    AWS.HttpClient.getInstance().handleRequest(httpRequest, {

      onHeaders: function onHeaders(statusCode, headers) {
        httpResponse.statusCode = statusCode;
        httpResponse.headers = headers;
      },

      onData: function data(data) {
        if (httpResponse.body === null) {
          httpResponse.body = data;
        } else {
          httpResponse.body += data;
        }
      },

      onEnd: function onEnd() {
        awsResponse.httpResponse = httpResponse;
        if (httpResponse.body) {
          httpResponse.body = httpResponse.body.toString();
        }
        requestHandler.handleHttpResponse();
      },

      onError: function onError(error) {
        requestHandler.handleNetworkError(error);
      }

    });

  },

  handleHttpResponse: function handleHttpResponse() {

    var awsResponse = this.awsRequest.awsResponse;
    var service = awsResponse.service;
    var httpResponse = awsResponse.httpResponse;

    // Do this for *every* response, even responses with 200 status
    // code may contain an error.  If extractError returns null
    // then we have a successful response.
    var error = service.extractError(httpResponse);
    awsResponse.error = error;

    if (error) {
      if (service.shouldRetry(httpResponse, error)) {
        this.retryRequest();
      } else {
        this.awsRequest.notifyFail();
      }
    } else {
      awsResponse.data = service.parseResponse(httpResponse);
      this.awsRequest.notifyDone();
    }

  },

  handleNetworkError: function handleNetworkError(error) {
    this.awsRequest.error = error;
    this.retryRequest();
  },

  retryRequest: function retryRequest() {

    var delay = this.retryDelays()[this.awsRequest.awsResponse.retryCount];

    this.awsRequest.awsResponse.retryCount += 1;

    if (delay != undefined) {

      var requestHandler = this;
      setTimeout(function delayRetry() {
        console.log("RETRYING");
        requestHandler.makeRequest();
      }, delay);

    } else {
      this.awsRequest.notifyFail(); // retried too many times
    }

  },

  retryDelays: function retryDelays() {

    // for standard services
    // return [300, 600, 1200];

    // for dynamo db
    var delays = [];
    for(var i = 0; i < 10; ++i) {
      if (i === 0) {
        delays.push(0);
      } else {
        delays.push(50 * Math.pow(2, i - 1));
      }
    }

    return delays;

  }

};

AWS.HttpRequest = function HttpRequest() {
  this.endpoint = null;
  this.headers = [];
  this.body = '';
  this.method = 'GET';
  this.uri = '/';
  this.serviceName = '';
};

AWS.HttpRequest.prototype = {
  sign: function sign(credentials) {
    new AWS.SignatureV4Signer(this).addAuthorization(credentials);
  },

  pathname: function pathname() {
    return this.uri.split('?',1)[0];
  },

  search: function search() {
    return this.uri.split('?',1)[1];
  }
};

/**
 * @constructor
 */
AWS.HttpResponse = function HttpResponse() {
  this.statusCode = null;
  this.headers = null;
  this.body = null;
};

/**
 * @constructor
 */
AWS.RequestSigner = function RequestSigner(request) {
  this.request = request;
};

/**
 * @constructor
 * @extends AWS.RequestSigner
 */
AWS.SignatureV4Signer = function SignatureV4Signer(request) {
  AWS.RequestSigner.apply(this, arguments);
};

AWS.SignatureV4Signer.prototype = {
  addAuthorization: function addAuthorization(credentials) {
    var datetime = AWS.util.date.getISODateString();
    //headers['Content-Type'] = 'application/x-www-form-urlencoded';
    this.request.headers['Host'] = this.request.endpoint.host;
    this.request.headers['Date'] = datetime;
    this.request.headers['X-Amz-Date'] = datetime;
    if (credentials.sessionToken) {
      this.request.headers['X-Amz-Security-Token'] = credentials.sessionToken;
    }
    this.request.headers['Authorization'] =
      this.authorization(credentials, datetime);
  },

  authorization: function authorization(credentials, datetime) {
    var parts = [];
    var credString = this.credentialString(datetime);
    parts.push("AWS4-HMAC-SHA256 Credential=" +
      credentials.accessKeyId + '/' + credString);
    parts.push("SignedHeaders=" + this.signedHeaders());
    parts.push("Signature=" + this.signature(credentials, datetime));
    return parts.join(', ');
  },

  signature: function signature(credentials, datetime) {
    var kSecret = credentials.secretAccessKey;
    var kDate = AWS.util.crypto.hmac("AWS4" + kSecret, datetime.substr(0,8));
    var kRegion = AWS.util.crypto.hmac(kDate, this.request.endpoint.region);
    var kService = AWS.util.crypto.hmac(kRegion, this.request.serviceName);
    var kCredentials = AWS.util.crypto.hmac(kService, 'aws4_request');
    return AWS.util.crypto.hmachex(kCredentials, this.stringToSign(datetime));
  },

  stringToSign: function stringToSign(datetime) {
    var parts = [];
    parts.push('AWS4-HMAC-SHA256');
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    parts.push(this.hexEncodedHash(this.canonicalString()));
    return parts.join("\n");
  },

  canonicalString: function canonicalString() {
    var parts = [];
    parts.push(this.request.method);
    parts.push(this.request.pathname());
    parts.push(this.request.search());
    parts.push(this.canonicalHeaders() + "\n");
    parts.push(this.signedHeaders());
    parts.push(this.hexEncodedHash(this.request.body || ''));
    return parts.join("\n");
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = [];
    for (var hkey in this.request.headers) {
      headers.push([hkey, this.request.headers[hkey]]);
    }
    headers.sort(function(a, b) {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    var parts = [];
    for (var key in headers) {
      if (headers[key][0] === 'Authorization') continue;
      parts.push(headers[key][0].toLowerCase() + ':' + this.canonicalHeaderValues(headers[key][1]));
    }
    return parts.join("\n").replace(/[ \t]+/g, ' ').replace(/^[ \t]+|[ \t]+$/g, '');
  },

  canonicalHeaderValues: function canonicalHeaderValues(values) {
    return values;
  },

  signedHeaders: function signedHeaders() {
    var keys = [];
    for (var key in this.request.headers) {
      key = key.toLowerCase();
      if (key === 'authorization') continue;
      keys.push(key);
    }
    return keys.sort().join(';');
  },

  credentialString: function credentialString(datetime) {
    var parts = [];
    parts.push(datetime.substr(0, 8));
    parts.push(this.request.endpoint.region);
    parts.push(this.request.serviceName);
    parts.push('aws4_request');
    return parts.join('/');
  },

  hexEncodedHash: function hash(string) {
    return AWS.util.crypto.sha256hex(string);
  }
};

/**
 * @constructor
 */
AWS.NodeHttpClient = function NodeHttpClient() {
};

AWS.NodeHttpClient.prototype = {
  handleRequest: function handleRequest(request, callbacks) {

    var options = {
      host: request.endpoint.host,
      port: request.endpoint.port,
      method: request.method,
      headers: request.headers,
      path: request.uri
    };

    var client = request.endpoint.scheme === 'https' ? https : http;

    var req = client.request(options, function onResponse(resp) {
      callbacks.onHeaders(resp.statusCode, resp.headers);
      resp.on('data', callbacks.onData);
      resp.on('end', callbacks.onEnd);
    });

    req.write(request.body);
    req.end();
    req.on('error', function(e) {
      callbacks.onError({ code: 'NetworkingError', message: e.toString() });
    });

  }
};

AWS.HttpClient = AWS.NodeHttpClient;

AWS.HttpClient.getInstance = function getInstance() {
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
}

/**
 * @class AWS.AWSRequest
 * @constructor
 */
AWS.AWSRequest = function AWSRequest(awsResponse) {
  this.state = null;
  this.awsResponse = awsResponse;
  this.callbacks = { done: [], fail: [], always: [] };
};

AWS.AWSRequest.prototype = {

  /**
   * @method done
   * @param {Function} callback This function is called when the service
   *   returns a successful response.
   * @param {Object} [options]
   *   @param {Object} [options.bind] An object to bind the callback
   *     function to.  Defaults to the response object.
   * @chainable
   */
  done: function done(callback, options) {
    if (this.state === 'done') {
      this.call(callback, options);
    } else if (this.state === null) {
      this.callbacks.done.push([callback, options]);
    }
  },

  /**
   * @method fail
   * @param {Function} callback This function is called when the service
   *   responds with an error or if a request could not be made.
   * @param {Object} [options]
   *   @param {Object} [options.bind] An object to bind the callback
   *     function to.  Defaults to the response object.
   * @chainable
   */
  fail: function fail(callback, options) {
    if (this.state === 'fail') {
      this.call(callback, options);
    } else if (this.state === null) {
      this.callbacks.fail.push([callback, options]);
    }
  },

  /**
   * @method fail
   * @param {Function} callback This function is called after after
   *   the service returns with a successful response or an error.
   *   It is also called when the request could not be completed.
   * @param {Object} [options]
   *   @param {Object} [options.bind] An object to bind the callback
   *     function to.  Defaults to the response object.
   * @chainable
   */
  always: function always(callback, options) {
    if (this.state) {
      this.call(callback, options);
    } else {
      this.callbacks.always.push([callback, options]);
    }
  },

  notifyDone: function notifyDone() {
    this.notify('done', this.callbacks.done.concat(this.callbacks.always));
  },

  notifyFail: function notifyFail() {
    this.notify('fail', this.callbacks.fail.concat(this.callbacks.always));
  },

  notify: function notify(state, callbacks) {
    for (var i in callbacks) {
      this.call(callbacks[i][0], callbacks[i][1]);
    }
    this.state = state;
  },

  call: function call(callback, options) {
    var binding = this.awsResponse;
    if (options && options.bind) {
      binding = options.bind;
    }
    callback.apply(binding, [this.awsResponse]);
  }

};

/**
 * @constructor
 */
AWS.AWSResponse = function AWSResponse(options) {
  this.data = null;
  this.error = null;
  this.retryCount = 0;
  this.service = options.service;
  this.operation = options.operation;
  this.params = options.params;
  this.httpRequest = null;
  this.httpResponse = null;
};

/**
 * @constructor
 */
AWS.Credentials = function Credentials(accessKeyId, secretAccessKey, sessionToken) {
  if (arguments.length == 0) return;
  if (arguments.length == 1 && arguments[0].accessKeyId) {
    this.accessKeyId = arguments[0].accessKeyId;
    this.secretAccessKey = arguments[0].secretAccessKey;
    this.sessionToken = arguments[0].sessionToken;
  }
  else {
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
    this.sessionToken = sessionToken;
  }
};

/**
 * @constructor
 */
AWS.Config = function Config(options) {

  if (options === undefined) {
    options = {};
  }

  if (options.credentials) {
    this.credentials = new AWS.Credentials(options.credentials);
  } else {
    this.credentials = new AWS.Credentials(options);
  }

  this.set('region', options.region, null);
  this.set('maxRetries', options.maxRetries, 3);
  this.set('useSSL', options.useSSL, true);
  this.set('debug', options.debug, false);
};

AWS.Config.prototype = {
  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      if (typeof(defaultValue) === 'function') {
        this[property] = new defaultValue(this);
      } else {
        this[property] = defaultValue;
      }
    } else {
      this[property] = value;
    }
  }
};

AWS.FileSystemConfig = function FileSystemConfig(filename) {
  var data = require('fs').readFileSync(filename, 'ascii');
  AWS.Config.apply(this, [JSON.parse(data)]);
};
AWS.FileSystemConfig.prototype = new AWS.Config();

/**
 * @constructor
 */
AWS.Endpoint = function Endpoint(config) {
  if (arguments.length == 0) return;
  this.region = config.region;
  this.scheme = config.useSSL ? 'https' : 'http';
  this.host = 'dynamodb.' + config.region + '.amazonaws.com';
  this.port = config.useSSL ? 443 : 80;
};

AWS.Endpoint.prototype = {
  toString: function toString() {
    return this.scheme + '://' + this.host + ':' + this.port;
  }
};

module.exports = AWS;
