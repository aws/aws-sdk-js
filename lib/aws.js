var https = require('https');

AWS = {};

AWS.util = {
  date: {
    getDate: function getDate() {
      return new Date();
    },

    getISODateString: function getISODateString() {
      function pad(n) { return n < 10 ? '0' + n : n }
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
      return require('crypto').createHmac('sha256', key).update(string).digest('hex');
    },

    hmac: function hmac(key, string) {
      return require('crypto').createHmac('sha256', key).update(string).digest('binary');
    },

    sha256hex: function sha256hex(string) {
      return require('crypto').createHash('sha256').update(string).digest('hex');
    },

    sha256: function sha256(string) {
      return require('crypto').createHash('sha256').update(string).digest('binary');
    }
  }
};

AWS.DynamoDB = function DynamoDB(config) {
  this.config = config;
}
AWS.DynamoDB.prototype = {
  createTable: function createTable() {

  },

  listTables: function listTables() {
    var request = new AWS.HttpRequest();
    request.serviceName = 'dynamodb';
    request.method = 'POST';
    request.uri = '/';
    request.body = '{}';
    request.headers = {
      'Content-Type': 'application/x-amz-json-1.0',
      'User-Agent': 'AWS-SDK-JS',
      'Content-Length': request.body.length,
      'X-Amz-Target': 'DynamoDB_20111205.ListTables'
    };
    request.endpoint = this.config.endpoint;
    request.sign(this.config.credentials);
    var signer = new AWS.RequestSigner(request);
    if (this.config.debug) {
      console.log(signer.canonicalString());
      console.log("==============")
      console.log(signer.stringToSign(AWS.util.date.getISODateString()));
      console.log(request);
    }
    this.config.handler.handleRequest(request, function(data) {
      console.log(data);
    }, function(error) {

    });
    var response = new AWS.AWSRequest(this);
    return response;
  }
}

AWS.HttpRequest = function HttpRequest() {
  this.endpoint = null;
  this.headers = [];
  this.body = '';
  this.method = 'GET';
  this.uri = '/';
  this.serviceName = '';
}
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
}

AWS.HttpResponse = function HttpResponse() {
  // TODO fill this in
}

AWS.RequestSigner = function RequestSigner(request) {
  this.request = request;
}

AWS.SignatureV4Signer = function SignatureV4Signer(request) {
  AWS.RequestSigner.apply(this, arguments);
}
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
    var parts = []
    var credString = this.credentialString(datetime);
    parts.push("AWS4-HMAC-SHA256 Credential=" +
      credentials.accessKeyId + '/' + credString);
    parts.push("SignedHeaders=" + this.signedHeaders());
    parts.push("Signature=" + this.signature(credentials, datetime));
    return parts.join(', ');
  },

  signature: function signature(credentials, datetime) {
    kSecret = credentials.secretAccessKey;
    kDate = AWS.util.crypto.hmac("AWS4" + kSecret, datetime.substr(0,8));
    kRegion = AWS.util.crypto.hmac(kDate, this.request.endpoint.region);
    kService = AWS.util.crypto.hmac(kRegion, this.request.serviceName);
    kCredentials = AWS.util.crypto.hmac(kService, 'aws4_request');
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
    for (var key in this.request.headers) {
      headers.push([key, this.request.headers[key]]);
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
    keys = [];
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
}

AWS.HttpHandler = function HttpHandler() {
  this.debug = false;
}
AWS.HttpHandler.prototype = {
  handleRequest: function handleRequest(request, successCallback, failCallback) {
    var options = {
      host: request.endpoint.host,
      port: request.endpoint.port,
      method: request.method,
      headers: request.headers,
      path: request.uri
    };
    var req = https.request(options, function callback(res) {
      if (this.debug) {
        console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);
      }
      res.on('data', function(d) {
        if (this.debug) {
          console.log("SUCCESS ************");
        }
        process.stdout.write(d);
      });
    });
    req.write(request.body);
    req.end();
    req.on('error', function(e) {
      if (this.debug) {
        console.log("FAIL ************");
      }
      console.error(e);
    });
  }
}

AWS.AWSRequest = function AWSRequest(context) {
  this.context = context;
  this.doneCallbacks = [];
  this.errorCallbacks = [];
  this.state = null;
  this.data = null;
}

AWS.AWSRequest.prototype = {
  done: function done(cb) {
    if (this.state === 'done') {
      this.call(cb);
    } else if (this.state === null) {
      this.doneCallbacks.push(cb);
    }
  },

  error: function error(cb) {
    if (this.state === 'error') {
      this.call(cb);
    } else if (this.state === null) {
      this.errorCallbacks.push(cb);
    }
  },

  signalDone: function signalDone(data) {
    this.notify(this.doneCallbacks, 'done', data);
  },

  signalError: function signalError(data) {
    this.notify(this.errorCallbacks, 'error', data);
  },

  notify: function signal(callbacks, state, data) {
    this.data = data;
    for (var i in callbacks) {
      this.call(callbacks[i])
    }
    this.state = state;
  },

  call: function call(cb) {
    cb.apply(this.context, [this.data]);
  }
}

AWS.RequestContext = function RequestContext(request, response, service) {
  context = { httpRequest: request, httpResponse: response };
  context.prototype = service;
  return context;
}

AWS.Config = function Config(options) {
  if (arguments.length == 0) return;
  if (options.credentials) {
    this.credentials = new AWS.Credentials(options.credentials);
  } else {
    this.credentials = new AWS.Credentials(options);
  }
  this.region = options.region;
  this.endpoint = new AWS.Endpoint(this.region);
  this.handler = new AWS.HttpHandler();
}

AWS.Endpoint = function Endpoint(region) {
  if (arguments.length == 0) return;
  this.region = region;
  this.scheme = 'https';
  this.host = 'dynamodb.' + region + '.amazonaws.com';
  this.port = 443;
}
AWS.Endpoint.prototype = {
  toString: function toString() {
    return scheme + '://' + host + ':' + port;
  }
}

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
}

require('fs').readFile('../configuration', 'ascii', function(err, data) {
  var configData = JSON.parse(data);
  var config = new AWS.Config(configData);
  var ddb = new AWS.DynamoDB(config);
  var req = ddb.listTables().done(function(data) {
   console.log(data);
  });
});
