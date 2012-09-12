var AWS = require('./core');

AWS.Service = function Service(className, config) {
  if (className === null) return;
  this.className = className;
  this.config = config;
  this.endpoint = new AWS[className].Endpoint(this.config);
};

AWS.Service.prototype = {

  defaultRetryCount: 3,

  makeRequest: function makeRequest(method, params, serializer, parser) {
    var awsResponse = new AWS.AWSResponse({
      service: this,
      method: method,
      params: params
    });

    // The AWSRequest is a deffered object the customr receives in response
    // to a request method.  They call methods like done, fail and always
    // with callbacks.  When the response is received, the callbacks are
    // notified with the AWSResponse as the only argument.
    var awsRequest = new AWS.AWSRequest(awsResponse);

    var requestHandler = new AWS.RequestHandler(awsRequest, serializer, parser);
    requestHandler.makeRequest();

    return awsRequest; // return the deffered object immediately

  },

  newHttpRequest: function newHttpRequest() {
    var httpRequest = new AWS[this.className].HttpRequest();
    httpRequest.endpoint = this.endpoint;
    return httpRequest;
  },

  shouldRetry: function shouldRetry(httpResponse, error) {
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (httpResponse.statusCode >= 500) return true;
    return false;
  },

  // How many times a failed request should be retried before giving up.
  // the defaultRetryCount can be overriden by service classes.
  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },

  retryDelays: function retryDelays() {
    var retryCount = this.numRetries();
    var delays = [];
    for(var i = 0; i < retryCount; ++i) {
      delays[i] = Math.pow(2, i) * 0.3;
    }
    return delays;
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

// adds one method for each operation described in the api configuration
AWS.Service.defineMethods = function defineMethods(svc) {
  for (var i in svc.api) {
    var operation = svc.api[i];
    var method = operation.n[0].toLowerCase() + operation.n.substr(1);
    AWS.Service.defineMethod(svc, method, operation);
  }
};

// adds one method for each operation described in the api configuration
AWS.Service.defineMethod = function defineMethod(svc, method, operation) {
  svc.prototype[method] = function(params) {
    var serializer = new svc.RequestBuilder(operation);
    var parser = new svc.ResponseParser(operation);
    return this.makeRequest(method, params, serializer, parser);
  };
};

AWS.JsonRequestBuilder = function JsonRequestBuilder(operation) {
  this.operationName = operation.n;
};

AWS.JsonRequestBuilder.prototype.populateRequest = function populateRequest(params, httpRequest) {
  httpRequest.body = JSON.stringify(params || {});
  httpRequest.headers['Content-Type'] = 'application/x-amz-json-1.0';
  httpRequest.headers['Content-Length'] = httpRequest.body.length;
  httpRequest.headers['X-Amz-Target'] = httpRequest.targetPrefix + this.operationName;
};

AWS.JsonResponseParser = function JsonResponseParser(operation) {};

AWS.JsonResponseParser.prototype.parse = function parse(httpResponse) {
  return JSON.parse(httpResponse.body || '{}');
};
