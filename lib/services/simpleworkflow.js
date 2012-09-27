var AWS = require('../core');
var inherit = AWS.util.inherit;

require('../rpc');

/**
 * @class AWS.SimpleWorkflow
 * @constructor
 */
AWS.SimpleWorkflow = inherit(AWS.RPCService, {

  constructor: function SimpleWorkflow(config) {
    AWS.RPCService.call(this, config);
  }

});

AWS.util.update(AWS.SimpleWorkflow, {

  HttpRequest: inherit(AWS.HttpRequest, {
    constructor: function SimpleWorkflowHttpRequest() {
      AWS.HttpRequest.call(this);
    },
    sign: function sign(credentials) {
      new AWS.SignatureV3Signer(this).addAuthorization(credentials);
    }
  }),

  Endpoint: inherit(AWS.Endpoint, {
    constructor: function SimpleWorkflowEndpoint(config) {
      AWS.Endpoint.call(this, config);
      this.host = 'swf.' + config.region + '.amazonaws.com';
    }
  })

});

// Generate API methods
require('./simpleworkflow.api');

AWS.Service.defineMethods(AWS.SimpleWorkflow);
