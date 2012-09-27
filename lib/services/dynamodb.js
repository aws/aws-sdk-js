var AWS = require('../core');
var inherit = AWS.util.inherit;

require('../rpc');

/**
 * @class AWS.DynamoDB
 * @constructor
 */
AWS.DynamoDB = inherit(AWS.RPCService, {

  constructor: function DynamoDB(config) {
    AWS.RPCService.call(this, config);
  },

  defaultRetryCount: 10,

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

  HttpRequest: inherit(AWS.HttpRequest, {
    constructor: function DynamoDBHttpRequest() {
      AWS.HttpRequest.call(this);
      this.serviceName = 'dynamodb';
    }
  }),

  Endpoint: inherit(AWS.Endpoint, {
    constructor: function DynamoDBEndpoint(config) {
      AWS.Endpoint.call(this, config);
      this.host = 'dynamodb.' + config.region + '.amazonaws.com';
    }
  })

});

// Generate API methods
require('./dynamodb.api');

AWS.Service.defineMethods(AWS.DynamoDB);
