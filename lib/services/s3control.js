var AWS = require('../core');

AWS.util.update(AWS.S3Control.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('afterBuild', this.prependAccountId);
    request.addListener('extractError', this.extractHostId);
  },

  /**
   * @api private
   */
  prependAccountId: function(request) {
    var api = request.service.api;
    var operationModel = api.operations[request.operation];
    var inputModel = operationModel.input;
    var params = request.params;
    if (inputModel.members.AccountId && params.AccountId) {
      //customization needed
      var accountId = params.AccountId;
      var endpoint = request.httpRequest.endpoint;
      endpoint.hostname = String(accountId) + '.' + endpoint.hostname;
      request.httpRequest.headers.Host = String(accountId) + '.' + request.httpRequest.headers.Host
      // delete request.httpRequest.headers['x-amz-account-id'];
    }
  },

  /**
   * @api private
   */
  extractHostId: function(response) {
    var hostId = response.httpResponse.headers ? response.httpResponse.headers['x-amz-id-2'] : null;
    response.hostId = hostId;
    response.error.hostId = hostId;
  }
});
