var AWS = require('./core');
var http = require('http');
var https = require('https');

AWS.HttpRequest = function HttpRequest() {
  this.endpoint = null;
  this.headers = [];
  this.body = '';
  this.method = 'GET';
  this.uri = '/';
  this.serviceName = '';
};

AWS.HttpRequest.prototype = {
  userAgent: 'aws-sdk-js/0.1',

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
