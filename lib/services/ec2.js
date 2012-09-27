var AWS = require('../core');
var inherit = AWS.util.inherit;

require('../query');

/**
 * @class AWS.EC2
 * @constructor
 */
AWS.EC2 = inherit(AWS.QueryService, {

  apiVersion: '2012-07-20'

});

AWS.util.update(AWS.EC2, {

  HttpRequest: inherit(AWS.HttpRequest, {

    constructor: function EC2HttpRequest() {
      AWS.HttpRequest.call(this);
    },

    sign: function sign(credentials) {
      new AWS.SignatureV2Signer(this).addAuthorization(credentials);
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
