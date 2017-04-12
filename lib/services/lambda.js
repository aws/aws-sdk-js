var AWS = require('../core');

AWS.util.update(AWS.Lambda.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    if (request.operation === 'invoke') {
      request.addListener('extractData', this.parsePayload);
    }
  },

  /**
   * @api private
   */
  parsePayload: function parsePayload(resp) {
    var req = resp.request;
    var operation = req.operation;
    var rules = req.service.api.operations[operation].output || {};
    if (rules.payload && resp.data[rules.payload]) {
      resp.data[rules.payload] = resp.data[rules.payload].toString();
    }
  }
});

