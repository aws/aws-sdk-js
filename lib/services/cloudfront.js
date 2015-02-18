var AWS = require('../core');

AWS.util.update(AWS.CloudFront.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('extractData', this.parseData);
  },


  /**
   * TODO This should be removed in a new major version
   * This is a backfill that populates payload data without the
   * top-level payload name.
   *
   * @api private
   */
  parseData: function parseData(resp) {
    var req = resp.request;
    var operation = req.operation;
    var payloadMember = req.service.api.operations[operation].output.payload;
    var payload = resp.data[payloadMember];
    if (payloadMember && payload){
      AWS.util.each(payload, function(key, value){
        AWS.util.property(resp.data, key, value, false);
      });
    }
  }

});
