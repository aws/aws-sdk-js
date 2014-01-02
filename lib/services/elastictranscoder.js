var AWS = require('../core');

AWS.ElasticTranscoder = AWS.Service.defineService('elastictranscoder', ['2012-09-25'], {
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('extractError', this.extractErrorCode);
  },

  /**
   * @api private
   */
  extractErrorCode: function extractErrorCode(resp) {
    // ETS stores error type in the header
    var errorType = resp.httpResponse.headers['x-amzn-errortype'];
    if (errorType) {
      resp.error.name = resp.error.code = errorType.split(':')[0];
    }
  }
});

module.exports = AWS.ElasticTranscoder;
