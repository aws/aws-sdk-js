var AWS = require('../core');
require('./v3');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.CloudFront = inherit(AWS.Signers.S3, {
  /**
   * The canonical string for CloudFront is simply the Date header
   */
  stringToSign: function stringToSign() {
    return this.request.headers['X-Amz-Date'];
  }
});

module.exports = AWS.Signers.CloudFront;
