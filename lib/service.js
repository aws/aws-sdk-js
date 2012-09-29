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
    this.endpoint = new AWS.Endpoint(this.config, this.serviceName);

  },

  defaultRetryCount: 3,

  makeRequest: function makeRequest(method, params) {

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

    var requestHandler = new AWS.RequestHandler(awsRequest);
    requestHandler.makeRequest();

    return awsRequest; // return the deffered object immediately

  },

  signRequest: function signRequest(httpRequest) {
    new this.signatureVersion(httpRequest, this.serviceName).
      addAuthorization(this.config.credentials);
  },

  newHttpRequest: function newHttpRequest() {
    var httpRequest = new AWS.HttpRequest();
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

    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
      svc.prototype[method] = function(params) {
        return this.makeRequest(method, params);
      };
    });

  }

});
