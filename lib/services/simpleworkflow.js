var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @class AWS.SimpleWorkflow
 * @constructor
 */
AWS.SimpleWorkflow = inherit(AWS.Service, {

  constructor: function SimpleWorkflow(config) {
    AWS.Service.call(this, config);
  },

  defaultRetryCount: 10,

  extractError: function extractError(httpResponse) {
    if (httpResponse.statusCode < 300) return null;
    if (httpResponse.body) {
      var error = JSON.parse(httpResponse.body);
      return {
        code: error.__type.split('#')[1] || httpResponse.statusCode,
        message: error.message || null
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

AWS.util.update(AWS.SimpleWorkflow, {
  RequestBuilder: AWS.JsonRequestBuilder,
  ResponseParser: AWS.JsonResponseParser,
  HttpRequest: inherit(AWS.HttpRequest, {
    constructor: function DynamoDBHttpRequest() {
      AWS.HttpRequest.call(this);
      this.serviceName = 'simpleworkflow';
      this.targetPrefix = 'SimpleWorkflowService.';
    },
    sign: function sign(credentials) {
      new AWS.SignatureV3Signer(this).addAuthorization(credentials);
    }
  }),
  Endpoint: inherit(AWS.Endpoint, {
    constructor: function DynamoDBEndpoint(config) {
      AWS.Endpoint.call(this, config);
      this.host = 'swf.' + config.region + '.amazonaws.com';
    }
  })
});

// Generate API methods
require('./simpleworkflow.api');

AWS.Service.defineMethods(AWS.SimpleWorkflow);
