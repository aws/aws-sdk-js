var AWS = require('./core');
var inherit = AWS.util.inherit;

AWS.JSONService = inherit(AWS.Service, {

  constructor: function JSONService(config) {
    AWS.Service.call(this, config);
  },

  buildRequest: function buildRequest(method, params) {

    var httpRequest = this.newHttpRequest();

    httpRequest.body = JSON.stringify(params || {});

    var target = this.api.targetPrefix + this.api.operations[method].n;
    httpRequest.headers['Content-Type'] = 'application/x-amz-json-1.0';
    httpRequest.headers['Content-Length'] = httpRequest.body.length;
    httpRequest.headers['X-Amz-Target'] = target;

    return httpRequest;

  },

  extractData: function extractData(httpResponse) {
    return JSON.parse(httpResponse.body || '{}');
  },

  extractError: function extractError(httpResponse) {
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
      error.code = httpResponse.statusCode;
      error.message = null;
    }
    return error;
  }

});
