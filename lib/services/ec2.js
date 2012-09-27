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
    AWS.QueryService.call(this, config);
  },

  signRequest: function signRequest(request) {
    new AWS.SignatureV2Signer(request).addAuthorization(this.config.credentials);
  }

});

AWS.util.update(AWS.EC2, {

  HttpRequest: inherit(AWS.HttpRequest, {

    constructor: function EC2HttpRequest() {
      AWS.HttpRequest.call(this);
    }

  }),

  Endpoint: inherit(AWS.Endpoint, {
    constructor: function EC2Endpoint(config) {
      AWS.Endpoint.call(this, config);
      this.host = 'ec2.' + config.region + '.amazonaws.com';
    }
  })

});

// Generate API methods
require('./ec2.api');

AWS.Service.defineMethods(AWS.EC2);
