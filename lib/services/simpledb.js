var AWS = require('../core');

AWS.SimpleDB = AWS.Service.defineService('simpledb', ['2009-04-15'], {
  /**
   * @api private
   */
  setEndpoint: function setEndpoint(endpoint) {
    if (this.config.region === 'us-east-1') {
      var prefix = this.api.endpointPrefix;
      this.endpoint = new AWS.Endpoint(prefix + '.amazonaws.com');
    } else {
      AWS.Service.prototype.setEndpoint.call(this, endpoint);
    }
  }
});

module.exports = AWS.SimpleDB;
