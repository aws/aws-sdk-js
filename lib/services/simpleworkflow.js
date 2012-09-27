var AWS = require('../core');
var inherit = AWS.util.inherit;

require('../rpc_service');
require('../sigv3');

/**
 * @class AWS.SimpleWorkflow
 * @constructor
 */
AWS.SimpleWorkflow = inherit(AWS.RPCService, {

  constructor: function SimpleWorkflow(config) {
    this.serviceName = 'swf';
    AWS.RPCService.call(this, config);
  },

  signRequest: function signRequest(request) {
    new AWS.SignatureV3Signer(request).addAuthorization(this.config.credentials);
  }

});

require('./simpleworkflow.api');

AWS.Service.defineMethods(AWS.SimpleWorkflow);
