var AWS = require('./core');
var inherit = AWS.util.inherit;

AWS.QueryRequestBuilder = inherit({

  constructor: function QueryRequestBuilder(operation) {
    this.apiVersion = '';
    this.operationName = operation.n;
    this.params = [];
  },

  populateRequest: function populateRequest(httpRequest) {

    this.addParam('Timestamp', AWS.util.date.getDate().toISOString());
    this.addParam('Version', this.apiVersion);
    this.addParam('Action', this.operationName);

    httpRequest.body = this.urlEncodedParams();

    httpRequest.headers['Content-Type'] =
      'application/x-www-form-urlencoded; charset=utf-8';

  },

  addParam: function addParam(paramName, paramValue) {
    this.params.push([paramName, paramValue]);
  },

  urlEncodedParams: function urlEncodedParams(params) {
    return params.join('');
  }

});

AWS.QueryService = inherit(AWS.Service, {

  constructor: function QueryService(config) {
    AWS.Service.call(this, config);
  },

  buildRequest: function buildRequest(method, params) {
    var httpRequest = this.newHttpRequest();
    var operation = this.api.operations[method];
    var builder = new AWS.QueryRequestBuilder(this.api, operation);
    builder.populateRequest(httpRequest, params);
    return httpRequest;
  },

  parseResponse: function parseResponse(httpResponse) {
    /* jshint unsed:true */
    return httpResponse.body;
  },

  extractError: function extractError() {
    /* jshint unsed:true */
    return null;
  }

});
