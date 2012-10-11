var AWS = require('../core');
var inherit = AWS.util.inherit;

require('../json_service');
require('../sigv3');

/**
 * @class AWS.SimpleWorkflow
 * @constructor
 */
AWS.SimpleWorkflow = inherit(AWS.JSONService, {

  constructor: function SimpleWorkflow(config) {
    this.serviceName = 'swf';
    AWS.JSONService.call(this, config);
  },

  signatureVersion: AWS.SigV3

});

require('./simpleworkflow.api');

AWS.Service.defineMethods(AWS.SimpleWorkflow);
