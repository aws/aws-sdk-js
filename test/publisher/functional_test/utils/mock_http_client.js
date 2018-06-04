const {AWS, spyOn, mockHttpSuccessfulResponse} = require('../../../helpers');
const {EventEmitter} = require('events')

function mockDefinedResponses(resps, request) {
  let index = 0;
  //mock sdk exception that happens before sending
  request.on('sign', function(request) {
    if (resps[index].sdkException) {
      const resp = resps[index];
      const retryable = typeof resp.retryable === 'undefined' ? true : resp.retryable;
      request.response.error = AWS.util.error(new Error(), {
        code: resp.sdkException,
        message: resp.sdkExceptionMessage,
        retryable: retryable
      });
      index ++;
    }
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
      } else if (resp.sdkException && resp.sdkException === 'NetworkingError') {
        errCb({
          code: resp.sdkException,
          message: resp.sdkExceptionMessage,
        });
      }
      return stream;
    }
  });
}

function mockSuccessfulResponse(resp, request) {
  return {
    body: '',
    headers: resp.responseHeaders,
    statusCode: resp.httpStatus,
  };
}

function mockFailedResponse(resp, request) {
  const protocol = request.service.api.protocol;
  // const operationName = request.service.api.operations[request.operation].name;
  const body = faildResponseBody(protocol, resp);
  const headers = Object.assign({}, resp.responseHeaders || {});
  if (protocol === 'json' || protocol === 'rest-json') {
    headers['x-amzn-errortype'] = resp.errorCode;
  }
  return {
    body: body,
    headers: headers,
    statusCode: resp.httpStatus,
  }
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
`
      break;
    case 'json':
    case 'rest-json':
    //error code should be set in x-amzn-errortype header
      return `{"Message": "${resp.errorMessage}"}`
    default:
      break;
  }
}

module.exports = {
  mockResponses: mockDefinedResponses,
}
