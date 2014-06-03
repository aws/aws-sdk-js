var util = require('../util');
var JsonBuilder = require('../json/builder');

function buildRequest(req) {
  var httpRequest = req.httpRequest;
  var api = req.service.api;
  var target = api.targetPrefix + '.' + api.operations[req.operation].name;
  var version = api.jsonVersion || '1.0';
  var input = api.operations[req.operation].input;
  var builder = new JsonBuilder();

  if (version === 1) version = '1.0';
  httpRequest.body = builder.build(req.params || {}, input);
  httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
  httpRequest.headers['X-Amz-Target'] = target;
}

function extractError(resp) {
  var error = {};
  var httpResponse = resp.httpResponse;

  if (httpResponse.body.length > 0) {
    var e = JSON.parse(httpResponse.body.toString());
    if (e.__type || e.code) {
      error.code = (e.__type || e.code).split('#').pop();
    } else {
      error.code = 'UnknownError';
    }
    if (error.code === 'RequestEntityTooLarge') {
      error.message = 'Request body must be less than 1 MB';
    } else {
      error.message = (e.message || e.Message || null);
    }
  } else {
    error.code = httpResponse.statusCode;
    error.message = null;
  }

  resp.error = util.error(new Error(), error);
}

function extractData(resp) {
  resp.data = JSON.parse(resp.httpResponse.body.toString() || '{}');
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};
