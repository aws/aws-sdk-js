var AWS = require('../core');

/**
 * Note: the `AWS.CloudSearchDomain` constructor must be created with a
 *       valid endpoint.
 */
AWS.util.update(AWS.CloudSearchDomain.prototype, {
  /**
   * @api private
   */
  validateService: function validateService() {
    if (!this.config.endpoint || this.config.endpoint.indexOf('{') >= 0) {
      var msg = 'AWS.CloudSearchDomain requires an explicit '+
                '`endpoint\' configuration option.';
      throw AWS.util.error(new Error(),
        {name: 'InvalidEndpoint', message: msg});
    }
  }
});
