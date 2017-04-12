var AWS = require('../core');

AWS.util.update(AWS.APIGateway.prototype, {
/**
 * Sets the Accept header to application/json.
 *
 * @api private
 */
  setAcceptHeader: function setAcceptHeader(req) {
    var httpRequest = req.httpRequest;
    httpRequest.headers['Accept'] = 'application/json';
  },

  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.setAcceptHeader);
    if (request.operation === 'getExport') {
      var params = request.params || {};
      if (params.exportType === 'swagger') {
        request.addListener('extractData', this.parsePayload);
      }
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

