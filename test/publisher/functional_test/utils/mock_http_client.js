const {AWS, mockHttpSuccessfulResponse, spyOn} = require('../../../helpers');
const {EventEmitter} = require('events');

function mockDefinedResponses(resps, request) {
  let index = 0;
  //mock sdk exception that happens before sending
  request.onAsync('sign', function(request, done) {
    if (resps[index].sdkException && resps[index].sdkException.message !== 'NetworkingError') {
      const resp = resps[index].sdkException;
      const retryable = typeof resp.isRetryable === 'undefined' ? true : resp.isRetryable;
      request.response.error = AWS.util.error(new Error(), {
        message: resp.message,
        retryable: retryable
      });
      index ++;
    }
    done();
  });
  //mock aws exceptions
  var stream = new EventEmitter();
  spyOn(AWS.HttpClient, 'getInstance');
  AWS.HttpClient.getInstance.andReturn({
    handleRequest: function(req, opts, cb, errCb) {
      const resp = resps[index];
      index ++;
      if (typeof resp.httpStatus === 'number') {
        const response = resp.httpStatus > 299 ?
          mockFailedResponse(resp, request) :
          mockSuccessfulResponse(resp, request);
        mockHttpSuccessfulResponse(response.statusCode, response.headers, response.body, cb);
      } else if (resp.sdkException && resp.sdkException.message === 'NetworkingError') {
        errCb({
          code: 'NetworkingError',
          message: resp.sdkException.message,
        });
      }
      return stream;
    }
  });
}

function lowerCaseKeys(map) {
  let transfered = {};
  for (const key of Object.keys(map)) {
    var lowered = key.toLowerCase();
    transfered[lowered] = map[key];
  }
  return transfered;
}

function mockSuccessfulResponse(resp, request) {
  return {
    body: '',
    headers: lowerCaseKeys(resp.responseHeaders),
    statusCode: resp.httpStatus,
  };
}

function mockFailedResponse(resp, request) {
  const protocol = request.service.api.protocol;
  const body = faildResponseBody(protocol, resp);
  const headers = Object.assign({}, resp.responseHeaders || {});
  if (protocol === 'json' || protocol === 'rest-json') {
    headers['x-amzn-errortype'] = resp.errorCode;
  }
  return {
    body: body,
    headers: headers,
    statusCode: resp.httpStatus,
  };
}

function faildResponseBody(protocol, resp) {
  switch (protocol) {
    case 'ec2':
    case 'query':
    case 'rest-xml':
      return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Errors>
    <Error>
      <Code>${resp.errorCode}</Code>
      <Message>${resp.errorMessage}</Message>
      ${resp.requestId ? `<RequestId>${resp.requestId}</RequestId>`: ''}
    </Error>
  </Errors>
</Response>
`;
      break;
    case 'json':
    case 'rest-json':
    //error code should be set in x-amzn-errortype header
      return `{"Message": "${resp.errorMessage}"}`;
    default:
      break;
  }
}

module.exports = {
  mockResponses: mockDefinedResponses,
};
