var AWS = require('../core');
var inherit = AWS.util.inherit;

require('../query_service');
require('../sigv2');

/**
 * @class AWS.EC2
 * @constructor
 */
AWS.EC2 = inherit(AWS.QueryService, {

  constructor: function EC2(config) {
    this.serviceName = 'ec2';
    AWS.QueryService.call(this, config);
  },

  signRequest: function signRequest(request) {
    new AWS.SignatureV2Signer(request).addAuthorization(this.config.credentials);
  }

});

require('./ec2.api');

AWS.Service.defineMethods(AWS.EC2);
