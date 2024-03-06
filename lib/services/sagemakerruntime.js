var AWS = require('../core');

AWS.util.update(AWS.SageMakerRuntime.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    if (request.operation === 'invokeEndpointAsync') {
      request.addListener('build', this.emptyBody);
    }
  },

  /**
   * Empty request body for async inference
   * @api private
   */
  emptyBody: function emptyBody(request) {
    request.httpRequest.body = '';
  },
});
