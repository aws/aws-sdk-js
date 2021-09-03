var AWS = require('../core');

AWS.util.update(AWS.LookoutMetrics.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.modifyContentType);
  },

  /**
   * Normally rest-json services require `Content-Type` header to be 'application/json',
   * However lookout metrics services requires the header to be 'application/x-amz-json-1.1'.
   *
   * @api private
   */
  modifyContentType: function modifyContentType(request) {
    if (request.httpRequest.headers['Content-Type'] === 'application/json') {
      request.httpRequest.headers['Content-Type'] = 'application/x-amz-json-1.1';
    }
  }
});
