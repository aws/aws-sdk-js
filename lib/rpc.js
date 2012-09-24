var AWS = require('./core');
var inherit = AWS.util.inherit;

AWS.RPCRequestBuilder = inherit({
  constructor: function RPCRequestBuilder(operation) {
    this.operationName = operation.n;
  },

  populateRequest: function populateRequest(params, httpRequest) {
    httpRequest.body = JSON.stringify(params || {});
    httpRequest.headers['Content-Type'] = 'application/x-amz-json-1.0';
    httpRequest.headers['Content-Length'] = httpRequest.body.length;
    httpRequest.headers['X-Amz-Target'] = httpRequest.targetPrefix + this.operationName;
  }
});

AWS.RPCResponseParser = inherit({

  constructor: function RPCResponseParser() {},

  parse: function parse(httpResponse) {
    return JSON.parse(httpResponse.body || '{}');
  }

});

AWS.RPCErrorParser = inherit({

  constructor: function RPCErrorParser() {},

  extractError: function extractError(httpResponse) {
    if (httpResponse.statusCode < 300) return null;
    var error = {};
    if (httpResponse.body) {
      var e = JSON.parse(httpResponse.body);
      error.code = e.__type.split('#').pop();
      if (error.code === 'RequestEntityTooLarge') {
        error.message = 'Request body must be less than 1 MB';
      } else {
        error.message = (e.message || e.Message || null);
      }
    } else {
      error.code = String(httpResponse.statusCode);
      error.message = null;
    }
    return error;
  }

});
