var AWS = require('../core');

/**
 * @class AWS.DynamoDB
 * @constructor
 */
AWS.DynamoDB = function DynamoDB(config) {
  AWS.Service.call(this, 'DynamoDB', config);
};

AWS.DynamoDB.prototype = new AWS.Service(null);

AWS.DynamoDB.prototype.defaultRetryCount = 10;

AWS.DynamoDB.prototype.extractError = function extractError(httpResponse) {
  if (httpResponse.statusCode < 300) return null;
  if (httpResponse.body) {
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
};

AWS.DynamoDB.prototype.retryDelays = function retryDelays() {
  var retryCount = this.numRetries();
  var delays = [];
  for (var i = 0; i < retryCount; ++i) {
    if (i === 0) {
      delays.push(0);
    } else {
      delays.push(50 * Math.pow(2, i - 1));
    }
  }
  return delays;
};

AWS.DynamoDB.Endpoint = function DynamoDBEndpoint(config) {
  AWS.Endpoint.call(this, config);
  this.host = 'dynamodb.' + config.region + '.amazonaws.com';
}

AWS.DynamoDB.Endpoint.prototype = new AWS.Endpoint();

AWS.DynamoDB.HttpRequest = function DynamoDBHttpRequest() {
  AWS.HttpRequest.call(this);
  this.serviceName = 'dynamodb';
  this.targetPrefix = 'DynamoDB_20111205.';
}

AWS.DynamoDB.HttpRequest.prototype = new AWS.HttpRequest();

AWS.DynamoDB.RequestBuilder = AWS.JsonRequestBuilder;

AWS.DynamoDB.ResponseParser = AWS.JsonResponseParser;

require('./dynamodb.api');

AWS.Service.defineMethods(AWS.DynamoDB);

