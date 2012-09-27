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

  signRequest: AWS.SignatureV3Signer.prototype.signRequest

});

require('./simpleworkflow.api');

AWS.Service.defineMethods(AWS.SimpleWorkflow);
