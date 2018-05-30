const {AWS} = require('../../../helpers');
function setupMockResponse(cb) {
  AWS.events = new AWS.SequentialExecutor();
  AWS.events.on('validate', function(req) {
    req.removeListener('send', AWS.EventListeners.Core.SEND);
    req.removeAllListeners('extractError');
    req.removeAllListeners('extractData');
    Object.keys(AWS.EventListeners).forEach(function(ns) {
      if (AWS.EventListeners[ns].VALIDATE_RESPONSE) {
        return req.removeListener('validateResponse', AWS.EventListeners[ns].VALIDATE_RESPONSE);
      }
    });
    return req.on('validateResponse', cb);
  });
}
function mockDefinedResponses(resps) {
  let index = 0;
  setupMockResponse(function(response) {
    var resp = resps[index];
    AWS.util.update(response.httpResponse.headers, resp.responseHeaders);
    response.httpResponse.statusCode = resp.httpStatus;
    if (resp.errorCode) {
      response.error = AWS.util.error(new Error(resp.errorMessage), {
        code: resp.errorCode
      });
    }
    if (resp.sdkException) {
      response.error = AWS.util.error(new Error(resp.sdkExceptionMessage), {
        code: resp.sdkException
      });
      if (resp.retryable) {
        response.error.retryable = true;
      }
    }
    index += 1;
  })
}

module.exports = {
  mockResponses: mockDefinedResponses,
}
