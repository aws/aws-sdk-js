var AWS = require('../core');

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
    var httpRequest = new AWS.DynamoDB.HttpRequest(operation, params);
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
    if (httpResponse.statusCode < 300) return null;
    if (httpResponse.body) {
      // this logic varies between services
      console.log(httpResponse)
      var error = JSON.parse(httpResponse.body);
      return {
        code: error['__type'].split('#')[1] || httpResponse.statusCode,
        message: error['message'] || null
      };
    } else {
      return {
        code: httpResponse.statusCode,
        message: httpResponse.statusCode
      };
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

AWS.DynamoDB.HttpRequest = function DynamoDBHttpRequest(operation, params) {
  AWS.HttpRequest.apply(this, []);

  var target = this.targetPrefix + '.' +
    operation[0].toUpperCase() + operation.substr(1);

  this.serviceName = 'dynamodb';
  this.method = 'POST';
  this.uri = '/';
  this.body = JSON.stringify(params || {});
  this.headers = {
    'Content-Type': 'application/x-amz-json-1.0',
    'User-Agent': this.userAgent,
    'Content-Length': this.body.length,
    'X-Amz-Target': target
  };
}

AWS.DynamoDB.HttpRequest.prototype = new AWS.HttpRequest();
AWS.DynamoDB.HttpRequest.prototype.targetPrefix = 'DynamoDB_20111205';
