AWS = require('../../lib/core')
require('../../lib/rpc_service')

describe 'AWS.RPCService', ->

  MockRPCService = AWS.util.inherit AWS.RPCService,
    constructor: (config) ->
      this.serviceName = 'mockservice'
      AWS.RPCService.call(this, config)

  MockRPCService.prototype.api =
    targetPrefix: 'prefix-'
    operations:
      operationName:
        n: 'OperationName'

  AWS.Service.defineMethods(MockRPCService)

  svc = new MockRPCService()

  it 'defines a method for each api operation', ->
    expect(typeof svc.operationName).toEqual('function')

  describe 'buildRequest', ->

    req = svc.buildRequest('operationName', {})

    it 'should use POST method requests', ->
      expect(req.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      expect(req.uri).toEqual('/')

    it 'should set Content-Type header', ->
      expect(req.headers['Content-Type']).toEqual('application/x-amz-json-1.0')

    it 'should set X-Amz-Target header', ->
      expect(req.headers['X-Amz-Target']).toEqual('prefix-OperationName')

    it 'should set Content-Length to body length', ->
      expect(req.body).toEqual('{}')
      expect(req.headers['Content-Length']).toEqual(2)

    it 'should set the body to JSON serialized params', ->
      req = svc.buildRequest('operationName', { foo: 'bar' })
      expect(req.body).toEqual('{"foo":"bar"}')

    it 'should preserve numeric types', ->
      req = svc.buildRequest('operationName', { count: 3 })
      expect(req.body).toEqual('{"count":3}')

  describe 'parseResponse', ->

    it 'JSON parses http response bodies', ->
      resp = new AWS.HttpResponse()
      resp.body = '{"a":1, "b":"xyz"}'
      data = svc.parseResponse resp, 'operationName'
      expect(data).toEqual({a:1, b:'xyz'})

    it 'returns an empty object when the body is an empty string', ->
      resp = new AWS.HttpResponse()
      resp.body = ''
      data = svc.parseResponse resp, 'operationName'
      expect(data).toEqual({})

    it 'returns an empty object when the body is null', ->
      resp = new AWS.HttpResponse()
      resp.body = null
      data = svc.parseResponse resp, 'operationName'
      expect(data).toEqual({})

  describe 'extractError', ->

    resp = (options) ->
      r = new AWS.HttpResponse()
      r.statusCode = options.statusCode
      if (options.headers)
        r.headers = options.headers
      else
        r.headers = {}
      if (options.body)
        r.body = options.body
      return r

    extract = (httpResponse) ->
      svc.extractError(httpResponse)

    it 'returns null for 200 status', ->
      expect(extract(resp({ statusCode: 200 }))).toEqual(null)

    describe 'code', ->

      it 'splits the error type on # to determine the error code', ->
        body = '{"__type":"com.amazon.coral.service#ErrorCode" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.code).toEqual('ErrorCode')

      it 'returns the full type when a # is not present', ->
        body = '{"__type":"ErrorCode" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.code).toEqual('ErrorCode')

      it 'returns the status code when the body is blank', ->
        error = extract(resp({ statusCode: 500,  body: null }))
        expect(error.code).toEqual('500')

    describe 'message', ->

      it 'returns null for the message when not present', ->
        body = '{"__type":"ErrorCode" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.message).toEqual(null)

      it 'returns the message when present', ->
        body = '{"__type":"ErrorCode", "message":"Error Message" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.message).toEqual('Error Message')

      # DynamoDB and SWF return error message properties with different case
      it 'returns the message when the message property is upper-cased', ->
        body = '{"__type":"ErrorCode", "Message":"Error Message" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.message).toEqual('Error Message')

      it 'returns a special message for RequestEntityToLarge errors', ->
        body = '{"__type":"RequestEntityTooLarge" }'
        error = extract(resp({ statusCode: 400,  body: body }))
        expect(error.message).toEqual('Request body must be less than 1 MB')

      it 'returns null when the body is blank', ->
        error = extract(resp({ statusCode: 500,  body: null }))
        expect(error.message).toEqual(null)


