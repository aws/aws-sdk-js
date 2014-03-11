var AWS = require('../core');

AWS.util.update(AWS.SES.prototype, {
  /**
   * @api private
   */
  initialize: function initialize(options) {
    AWS.Service.prototype.initialize.call(this, options);
  },

  /**
   * @api private
   */
  defaultEndpoint: 'us-east-1',

  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('validate',
      AWS.EventListeners.Core.VALIDATE_REGION);
  }
});
