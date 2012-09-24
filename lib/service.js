var AWS = require('./core');
var inherit = AWS.util.inherit;

AWS.Service = inherit({

  constructor: function Service(config) {
    var defaultConfig = new AWS.Config(AWS.configuration);
    if (config === undefined) {
      config = defaultConfig;
    } else {
      config = AWS.util.merge(defaultConfig, config);
    }

    this.config = config;
    if (this.constructor.Endpoint) {
      this.endpoint = new this.constructor.Endpoint(this.config);
    } else {
      this.endpoint = new AWS.Endpoint(this.config);
    }
  },

  defaultRetryCount: 3,

  makeRequest: function makeRequest(method, params, serializer, parser) {
    var awsResponse = new AWS.AWSResponse({
      service: this,
      method: method,
      params: params
    });

    // The AWSRequest is a deferred object the customr receives in response
    // to a request method.  They call methods like done, fail and always
    // with callbacks.  When the response is received, the callbacks are
    // notified with the AWSResponse as the only argument.
    var awsRequest = new AWS.AWSRequest(awsResponse);

    var requestHandler = new AWS.RequestHandler(awsRequest, serializer, parser);
    requestHandler.makeRequest();

    return awsRequest; // return the deffered object immediately

  },

  newHttpRequest: function newHttpRequest() {
    var httpRequest = new this.constructor.HttpRequest();
    httpRequest.endpoint = this.endpoint;
    return httpRequest;
  },

  shouldRetry: function shouldRetry(httpResponse, error) {
    if (error) {
      if (this.expiredCredentialsError(error)) return true;
      if (this.throttledError(error)) return true;
    }
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
      delays[i] = Math.pow(2, i) * 30;
    }
    return delays;
  },

  extractError: function extractError(httpResponse) {
    return (new this.constructor.ErrorParser()).extractError(httpResponse);
  },

  expiredCredentialsError: function expiredCredentialsError(error) {
    // TODO : this only handles *one* of the expired credential codes
    return (error.code === 'ExpiredTokenException');
  },

  throttledError: function throttledError(error) {
    // this logic varies between services
    return (error.code == 'ProvisionedThroughputExceededException');
  }

});

AWS.util.update(AWS.Service, {
  // adds one method for each operation described in the api configuration
  defineMethods: function defineMethods(svc) {
    AWS.util.arrayEach(svc.api, function iterator(operation) {
      var method = operation.n[0].toLowerCase() + operation.n.substr(1);
      AWS.Service.defineMethod(svc, method, operation);
    });
  },

  // adds one method for each operation described in the api configuration
  defineMethod: function defineMethod(svc, method, operation) {
    svc.prototype[method] = function(params) {
      var serializer = new svc.RequestBuilder(operation);
      var parser = new svc.ResponseParser(operation);
      return this.makeRequest(method, params, serializer, parser);
    };
  }
});
