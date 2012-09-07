/**
 * @fileoverview AWS JS SDK
 * @suppress {undefinedVars}
 */
var http = require('http');
var https = require('https');
var cryptoLib = require('crypto');

AWS = {};
AWS.util = {
  date: {
    getDate: function getDate() {
      return new Date();
    },

    getISODateString: function getISODateString() {
      function pad(n) { return n < 10 ? '0' + n : n; }
      var d = AWS.util.date.getDate();
      return d.getUTCFullYear() +
          pad(d.getUTCMonth() + 1) +
          pad(d.getUTCDate()) + 'T' +
          pad(d.getUTCHours()) +
          pad(d.getUTCMinutes()) +
          pad(d.getUTCSeconds()) + 'Z';
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
    }
  }
};

/**
 * @constructor
 */
AWS.DynamoDB = function DynamoDB(config) {
  this.config = config;
  this.endpoint = new AWS.Endpoint(this.config);
};
AWS.DynamoDB.prototype = {
  createTable: function createTable() {

  },

  listTables: function listTables() {

    var httpResponse = new AWS.HttpResponse();
    var httpRequest = new AWS.HttpRequest();
    httpRequest.serviceName = 'dynamodb';
    httpRequest.method = 'POST';
    httpRequest.uri = '/';
    httpRequest.body = '{}';
    httpRequest.headers = {
      'Content-Type': 'application/x-amz-json-1.0',
      'User-Agent': 'aws-sdk-js/0.1',
      'Content-Length': httpRequest.body.length,
      'X-Amz-Target': 'DynamoDB_20111205.ListTables'
    };
    httpRequest.endpoint = this.endpoint;
    httpRequest.sign(this.config.credentials);

    var signer = new AWS.RequestSigner(httpRequest);

    var awsResponse = new AWS.AWSResponse({
      service: this,
      operationName: 'listTables',
      httpRequest: httpRequest,
      httpResponse: httpResponse,
    });

    var awsRequest = new AWS.AWSRequest(awsResponse);

    // enable debug logging
    if (this.config.debug) {
      awsRequest.always(function(error, data, awsResponse) {
        console.log('------------------------------------');
        console.log("CONTEXT: ", awsResponse);
        console.log('------------------------------------');
      });
    }

    var retryHandler = new AWS.RetryHandler();

    this.config.handler.handleRequest(httpRequest, {

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

        // inspect the response
        //   determine if a retry is necessary
        //     conditionally send the handler a NEW request

        if (httpResponse.body) {
          httpResponse.body = httpResponse.body.toString();
        }
        awsRequest.notifyDone(httpRequest, httpResponse);
      },

      onError: function onError(error) {

        // conditionally send the handler a new request

        awsRequest.notifyFail(error);
      }

    });

    return awsRequest;

  }

};

/**
 * @constructor
 */
AWS.RetryHandler = function RetryHandler() {
}

AWS.RetryHandler.prototype = {
}

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
    this.request.headers['Date'] = this.request.headers['X-Amz-Date'] = datetime;
    if (credentials.sessionToken) {
      this.request.headers['X-Amz-Security-Token'] = credentials.sessionToken;
    }
    this.request.headers['Authorization'] = this.authorization(credentials, datetime);
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
AWS.HttpHandler = function HttpHandler() {
};

AWS.HttpHandler.prototype = {
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

/**
 * @constructor
 */
AWS.AWSRequest = function AWSRequest(awsResponse) {
  this.awsResponse = awsResponse;
  this.doneCallbacks = [];
  this.failCallbacks = [];
  this.alwaysCallbacks = [];
  this.state = null;
  this.data = null;
  this.error = null;
};

AWS.AWSRequest.prototype = {

  done: function done(cb) {
    if (this.state === 'done') {
      this.call(cb, [this.data]);
    } else if (this.state === null) {
      this.doneCallbacks.push(cb);
    }
  },

  fail: function fail(cb) {
    if (this.state === 'fail') {
      this.call(cb, [this.error]);
    } else if (this.state === null) {
      this.failCallbacks.push(cb);
    }
  },

  always: function always(cb) {
    if (this.state) {
      this.call(cb, [this.error, this.data]);
    } else {
      this.alwaysCallbacks.push(cb);
    }
  },

  notifyDone: function notifyDone() {

    // parse the response body
    if (this.awsResponse.httpResponse.body) {
      this.data = JSON.parse(this.awsResponse.httpResponse.body);
    } else {
      this.data = {};
    }

    // TODO - check the response for bad status codes and convert to error

    this.state = 'done';
    this.notify(this.doneCallbacks, [this.data]);
    this.notify(this.alwaysCallbacks, [null, this.data]);

  },

  notifyFail: function notifyFail(error) {
    this.error = error;
    this.state = 'fail';
    this.notify(this.failCallbacks, [error]);
    this.notify(this.alwaysCallbacks, [error, null]);
  },

  notify: function notify(callbacks, args) {
    for (var i in callbacks) {
      this.call(callbacks[i], args);
    }
  },

  call: function call(cb, args) {
    cb.apply(this.awsResponse, args.concat(this.awsResponse));
  }
};

/**
 * @constructor
 */
AWS.AWSResponse = function AWSResponse(options) {
  return {
    service: options.service,
    operationName: options.operationName,
    httpRequest: options.httpRequest,
    httpResponse: options.httpResponse
  };
};

/**
 * @constructor
 */
AWS.Config = function Config(options) {
  if (arguments.length == 0) return;
  if (options.credentials) {
    this.credentials = new AWS.Credentials(options.credentials);
  } else {
    this.credentials = new AWS.Credentials(options);
  }

  this.set('region', options.region, null);
  this.set('useSSL', options.useSSL, true);
  this.set('handler', options.handler, AWS.HttpHandler);
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

require('fs').readFile('../configuration', 'ascii', function(err, data) {
  var configData = JSON.parse(data);
  var config = new AWS.Config(configData);
  var ddb = new AWS.DynamoDB(config);
  var req = ddb.listTables();
  req.done(function(data, context) {
    console.log("DATA: ", data);
  });
  req.fail(function(error, context) {
    console.log("ERROR: ", error);
  });
});
