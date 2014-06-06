helpers = require('../helpers')
AWS = helpers.AWS
Buffer = AWS.util.Buffer

svc = AWS.Protocol.Json
describe 'AWS.Protocol.Json', ->

  MockJSONClient = AWS.util.inherit AWS.Service,
    endpointPrefix: 'mockservice'
    api: new AWS.Model.Api
      metadata:
        protocol: 'json'
        targetPrefix: 'prefix'
      operations:
        OperationName:
          input:
            type: 'structure'
            members: {}
          output:
            type: 'structure'
            members:
              i: type: 'integer'
              b: type: 'binary'
              s: type: 'string'

  AWS.Service.defineMethods(MockJSONClient)

  request = null
  response = null
  service = null

  beforeEach ->
    service = new MockJSONClient(region: 'region')
    request = new AWS.Request(service, 'operationName')
    response = request.response

  describe 'buildRequest', ->
    buildRequest = ->
      svc.buildRequest(request)

    it 'should use POST method requests', ->
      buildRequest()
      expect(request.httpRequest.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      buildRequest()
      expect(request.httpRequest.path).toEqual('/')

    it 'allows mounted path to be specified', ->
      service = new MockJSONClient(endpoint: 'https://localhost/foo/bar')
      request = new AWS.Request(service, 'operationName')
      buildRequest()
      expect(request.httpRequest.path).toEqual('/foo/bar')

    it 'should set Content-Type header', ->
      buildRequest()
      expect(request.httpRequest.headers['Content-Type']).
        toEqual('application/x-amz-json-1.0')

    it 'should set X-Amz-Target header', ->
      buildRequest()
      expect(request.httpRequest.headers['X-Amz-Target']).
        toEqual('prefix.OperationName')

    it 'should set the body to JSON serialized params', ->
      service.api.operations.operationName.input.members.foo =
        new AWS.Model.Shape.create({type: 'string'}, api: service.api)
      request.params = foo: 'bar'
      buildRequest()
      expect(request.httpRequest.body).toEqual('{"foo":"bar"}')

    it 'should preserve numeric types', ->
      service.api.operations.operationName.input.members.count =
        new AWS.Model.Shape.create({type: 'integer'}, api: service.api)
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
      extractData '{"i":1, "b":"AQID"}'
      expect(response.error).toEqual(null)
      expect(response.data.i).toEqual(1)
      expect(response.data.b.toString()).toEqual('\u0001\u0002\u0003')

    it 'returns raw data if convertResponseTypes is false', ->
      service.config.convertResponseTypes = false
      extractData '{"i":1, "b":"AQID"}'
      expect(response.data.i).toEqual(1)
      expect(response.data.b.toString()).toEqual('AQID')

    it 'returns an empty object when the body is an empty string', ->
      extractData ''
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({})

    it 'returns an empty object when the body is null', ->
      extractData ''
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({})
