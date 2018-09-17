var AWS = require('../core');

AWS.util.update(AWS.S3Control.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('afterBuild', this.prependAccountId);
    request.addListener('extractError', this.extractHostId);
    request.addListener('extractData', this.extractHostId);
    request.addListener('validate', this.validateAccountId);
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
      var newHostname = String(accountId) + '.' + endpoint.hostname;
      endpoint.hostname = newHostname;
      request.httpRequest.headers.Host = newHostname;
      delete request.httpRequest.headers['x-amz-account-id'];
    }
  },

  /**
   * @api private
   */
  extractHostId: function(response) {
    var hostId = response.httpResponse.headers ? response.httpResponse.headers['x-amz-id-2'] : null;
    response.extendedRequestId = hostId;
    if (response.error) {
      response.error.extendedRequestId = hostId;
    }
  },

  /**
   * @api private
   */
  validateAccountId: function(request) {
    var params = request.params;
    if (!Object.prototype.hasOwnProperty.call(params, 'AccountId')) return;
    var accountId = params.AccountId;
    //validate type
    if (typeof accountId !== 'string') {
      throw AWS.util.error(
        new Error(),
        {code: 'ValidationError', message: 'AccountId must be a string.'}
      );
    }
    //validate length
    if (accountId.length < 1 || accountId.length > 63) {
      throw AWS.util.error(
        new Error(),
        {code: 'ValidationError', message: 'AccountId length should be between 1 to 63 characters, inclusive.'}
      );
    }
    //validate pattern
    var hostPattern = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
    if (!hostPattern.test(accountId)) {
      throw AWS.util.error(new Error(),
        {code: 'ValidationError', message: 'AccountId should be hostname compatible. AccountId: ' + accountId});
    }
  }
});
