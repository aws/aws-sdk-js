var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @class AWS.SimpleWorkflow
 * @constructor
 */
AWS.SimpleWorkflow = inherit(AWS.Service, {

  constructor: function SimpleWorkflow(config) {
    AWS.Service.call(this, config);
  }

});

AWS.util.update(AWS.SimpleWorkflow, {

  RequestBuilder: AWS.JsonRequestBuilder,

  ResponseParser: AWS.JsonResponseParser,

  ErrorParser: AWS.JsonErrorParser,

  HttpRequest: inherit(AWS.HttpRequest, {
    constructor: function DynamoDBHttpRequest() {
      AWS.HttpRequest.call(this);
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
