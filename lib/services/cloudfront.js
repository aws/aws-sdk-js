var AWS = require('../core');

module.exports = function decorateService(CloudFront) {
  // pull in CloudFront signer
  require('../cloudfront/signer')(CloudFront);
  AWS.util.update(CloudFront.prototype, {

    setupRequestListeners: function setupRequestListeners(request) {
      request.addListener('extractData', AWS.util.hoistPayloadMember);
    }
  });
};