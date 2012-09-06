var https = require('https');

AWS = {};
AWS.DynamoDB = function DynamoDB(config) {
  this.config = config;
}
AWS.DynamoDB.prototype = {
  createTable: function createTable() {
    
  },
  
  listTables: function listTables() {
    var request = new AWS.HttpRequest();
    request.method = 'POST';
    request.uri = '/';
    request.body = '{}';
    request.headers = {
      'Content-Type': 'application/x-amz-json-1.0',
      'User-Agent': 'AWS-SDK-JS',
      'Date': '...',
      'Authorization': '...',
      'Content-Length': request.body.length,
      'X-Amz-Target': 'DynamoDB_20111205.ListTables'
    };
    request.endpoint = this.config.endpoint;
    console.log(request.endpoint);
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
}
AWS.HttpRequest.prototype = {
  sign: function sign(credentials) {
    // nothing yet
  },
  
  addAuthorization: function addAuthorization(credentials) {
    
  }
  
  stringToSign: function stringToSign(string) {
    
  }
}

AWS.HttpHandler = function HttpHandler() {}
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
      console.log("statusCode: ", res.statusCode);
      console.log("headers: ", res.headers);
      res.on('data', function(d) {
        console.log("SUCCESS ************");
        process.stdout.write(d);
      });
    });
    req.write(request.body);
    req.end();
    req.on('error', function(e) {
      console.log("FAIL ************");
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
    this.secretAccessKey = arguments.secretAccessKey;
    this.sessionToken = arguments.sessionToken;
  }
  else {
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
    this.sessionToken = sessionToken;
  }
}

console.log(new AWS.Credentials());
var config = new AWS.Config({accessKeyId:'foo', secretAccessKey: 'bar', region: 'us-east-1'});
var ddb = new AWS.DynamoDB(config);
var req = ddb.listTables().done(function(data) {
  console.log(data);
});

