var AWS = require('../core');

AWS.EC2 = AWS.Service.defineService('ec2', ['2013-06-15*', '2013-07-15*', '2013-08-15*', '2013-10-01*', '2013-10-15'], {
  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('extractError', AWS.EventListeners.Query.EXTRACT_ERROR);
    request.addListener('extractError', this.extractError);
  },

  /**
   * @api private
   */
  extractError: function extractError(resp) {
    // EC2 nests the error code and message deeper than other AWS Query services.
    var httpResponse = resp.httpResponse;
    var data = new AWS.XML.Parser({}).parse(httpResponse.body.toString() || '');
    if (data.Errors)
      resp.error = AWS.util.error(new Error(), {
        code: data.Errors.Error.Code,
        message: data.Errors.Error.Message
      });
    else
      resp.error = AWS.util.error(new Error(), {
        code: httpResponse.statusCode,
        message: null
      });
  }
});

module.exports = AWS.EC2;
