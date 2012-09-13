var AWS = require('../core');
require('../service');
var inherit = AWS.util.inherit;

/**
 * @class AWS.DynamoDB
 * @constructor
 */
AWS.DynamoDB = inherit(AWS.Service, {
  constructor: function DynamoDB(config) {
    AWS.Service.call(this, config);
  },

  Endpoint: inherit(AWS.Endpoint, {
    constructor: function DynamoDBEndpoint(config) {
      AWS.Endpoint.call(this, config);
      this.host = 'dynamodb.' + config.region + '.amazonaws.com';
    }
  }),

  defaultRetryCount: 10,

  extractError: function extractError(httpResponse) {
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
  },

  retryDelays: function retryDelays() {
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
  }
});

AWS.util.update(AWS.DynamoDB, {
  RequestBuilder: AWS.JsonRequestBuilder,
  ResponseParser: AWS.JsonResponseParser,

  HttpRequest: inherit(AWS.HttpRequest, {
    constructor: function DynamoDBHttpRequest() {
      AWS.HttpRequest.call(this);
      this.serviceName = 'dynamodb';
      this.targetPrefix = 'DynamoDB_20111205.';
    }
  })
});

// Generate API methods
require('./dynamodb.api');
AWS.Service.defineMethods(AWS.DynamoDB);
