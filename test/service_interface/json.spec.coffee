helpers = require('../helpers')
AWS = helpers.AWS
Buffer = AWS.util.Buffer

describe 'AWS.ServiceInterface.Json', ->

  MockJSONClient = AWS.util.inherit AWS.Service,
    endpointPrefix: 'mockservice'
    api:
      targetPrefix: 'prefix'
      operations:
        operationName:
          name: 'OperationName'
          input:
            type: 'structure'
            members: {}

  AWS.Service.defineMethods(MockJSONClient)

  request = null
  response = null
  svc = eval(@description)

  beforeEach ->
    service = new MockJSONClient(region: 'region')
    request = new AWS.Request(service, 'operationName')
    response = new AWS.Response(request)

  describe 'buildRequest', ->
    buildRequest = ->
      svc.buildRequest(request)

    it 'should use POST method requests', ->
      buildRequest()
      expect(request.httpRequest.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      buildRequest()
      expect(request.httpRequest.path).toEqual('/')

    it 'should set Content-Type header', ->
      buildRequest()
      expect(request.httpRequest.headers['Content-Type']).
        toEqual('application/x-amz-json-1.0')

    it 'should set X-Amz-Target header', ->
      buildRequest()
      expect(request.httpRequest.headers['X-Amz-Target']).
        toEqual('prefix.OperationName')

    it 'should set the body to JSON serialized params', ->
      request.params = foo: 'bar'
      buildRequest()
      expect(request.httpRequest.body).toEqual('{"foo":"bar"}')

    it 'should preserve numeric types', ->
      request.params = count: 3
      buildRequest()
      expect(request.httpRequest.body).toEqual('{"count":3}')

  describe 'extractError', ->
    extractError = (body) ->
      response.httpResponse.statusCode = 500
      response.httpResponse.body = new Buffer(body)
      svc.extractError(response)

    it 'removes prefixes from the error code', ->
      extractError '{"__type":"com.amazon.coral.service#ErrorCode" }'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('ErrorCode')
      expect(response.data).toEqual(null)

    it 'returns the full code when a # is not present', ->
      extractError '{"__type":"ErrorCode" }'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('ErrorCode')
      expect(response.data).toEqual(null)

    it 'returns the status code when the body is blank', ->
      extractError ''
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual(500)
      expect(response.error.message).toEqual(null)
      expect(response.data).toEqual(null)

    it 'returns UnknownError when the error type is not set', ->
      extractError '{"message":"Error Message" }'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('UnknownError')
      expect(response.error.message).toEqual('Error Message')
      expect(response.data).toEqual(null)

    it 'returns null for the message when not present', ->
      extractError '{"__type":"ErrorCode" }'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.message).toEqual(null)
      expect(response.data).toEqual(null)

    it 'returns the message when present', ->
      extractError '{"__type":"ErrorCode", "message":"Error Message" }'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.message).toEqual('Error Message')
      expect(response.data).toEqual(null)

    # DynamoDB and SWF return error message properties with different case
    it 'returns the message when the message property is upper-cased', ->
      extractError '{"__type":"ErrorCode", "Message":"Error Message" }'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.message).toEqual('Error Message')
      expect(response.data).toEqual(null)

    it 'returns a special message for RequestEntityToLarge errors', ->
      extractError '{"__type":"RequestEntityTooLarge" }'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.message).toEqual('Request body must be less than 1 MB')
      expect(response.data).toEqual(null)

    it 'extracts error type from "code" key (Glacier)', ->
      extractError '{"code":"InvalidParameter"}'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('InvalidParameter')

  describe 'extractData', ->
    extractData = (body) ->
      response.httpResponse.statusCode = 200
      response.httpResponse.body = new Buffer(body)
      svc.extractData(response)

    it 'JSON parses http response bodies', ->
      extractData '{"a":1, "b":"xyz"}'
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({a:1, b:'xyz'})

    it 'returns an empty object when the body is an empty string', ->
      extractData ''
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({})

    it 'returns an empty object when the body is null', ->
      extractData ''
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({})
