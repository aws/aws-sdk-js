AWS = require('../../lib/core')
require('../../lib/json_service')

describe 'AWS.JSONService', ->

  MockJSONService = AWS.util.inherit AWS.JSONService,
    constructor: (config) ->
      this.serviceName = 'mockservice'
      AWS.JSONService.call(this, config)

  MockJSONService.prototype.api =
    targetPrefix: 'prefix-'
    operations:
      operationName:
        n: 'OperationName'

  AWS.Service.defineMethods(MockJSONService)

  svc = new MockJSONService()

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

    parse = (callback) ->
      svc.parseResponse resp, 'operationName', (error,data) ->
        callback.call(this, error, data)

    resp = new AWS.HttpResponse()
    resp.headers = {}

    describe 'with data', ->

      beforeEach ->
        resp.statusCode = 200

      it 'JSON parses http response bodies', ->
        resp.body = '{"a":1, "b":"xyz"}'
        parse (error, data) ->
          expect(error).toEqual(null)
          expect(data).toEqual({a:1, b:'xyz'})

      it 'returns an empty object when the body is an empty string', ->
        resp.body = ''
        parse (error, data) ->
          expect(error).toEqual(null)
          expect(data).toEqual({})

      it 'returns an empty object when the body is null', ->
        resp.body = null
        parse (error, data) ->
          expect(error).toEqual(null)
          expect(data).toEqual({})

    describe 'with error', ->

      beforeEach ->
        resp.statusCode = 500

      it 'removes prefixes from the error code', ->
        resp.body = '{"__type":"com.amazon.coral.service#ErrorCode" }'
        parse (error, data) ->
          expect(error.code).toEqual('ErrorCode')
          expect(data).toEqual(null)

      it 'returns the full code when a # is not present', ->
        resp.body = '{"__type":"ErrorCode" }'
        parse (error, data) ->
          expect(error.code).toEqual('ErrorCode')
          expect(data).toEqual(null)

      it 'returns the status code when the body is blank', ->
        resp.body = null
        parse (error, data) ->
          expect(error.code).toEqual(500)
          expect(error.message).toEqual(null)
          expect(data).toEqual(null)

      it 'returns null for the message when not present', ->
        resp.body = '{"__type":"ErrorCode" }'
        parse (error, data) ->
          expect(error.message).toEqual(null)
          expect(data).toEqual(null)

      it 'returns the message when present', ->
        resp.body = '{"__type":"ErrorCode", "message":"Error Message" }'
        parse (error, data) ->
          expect(error.message).toEqual('Error Message')
          expect(data).toEqual(null)

      # DynamoDB and SWF return error message properties with different case
      it 'returns the message when the message property is upper-cased', ->
        resp.body = '{"__type":"ErrorCode", "Message":"Error Message" }'
        parse (error, data) ->
          expect(error.message).toEqual('Error Message')
          expect(data).toEqual(null)

      it 'returns a special message for RequestEntityToLarge errors', ->
        resp.body = '{"__type":"RequestEntityTooLarge" }'
        parse (error, data) ->
          expect(error.message).toEqual('Request body must be less than 1 MB')
          expect(data).toEqual(null)

