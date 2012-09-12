AWS = require('../../lib/core')

describe 'AWS.JsonRequestBuilder', ->

  buildRequest = (params) ->
    httpRequest = new AWS.HttpRequest()
    httpRequest.targetPrefix = 'Prefix.'
    serializer = new AWS.JsonRequestBuilder({ n: 'Operation' })
    serializer.populateRequest(params, httpRequest)
    httpRequest

  httpRequest = buildRequest()

  describe 'populateRequest', ->

    it 'should use POST method requests', ->
      expect(httpRequest.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      expect(httpRequest.uri).toEqual('/')

    it 'should set Content-Type header', ->
      type = 'application/x-amz-json-1.0'
      expect(httpRequest.headers['Content-Type']).toEqual(type)

    it 'should set X-Amz-Target header', ->
      expect(httpRequest.headers['X-Amz-Target']).toEqual('Prefix.Operation')

    it 'should set Content-Length to body length', ->
      httpRequest = buildRequest({ foo: 'bar' })
      expect(httpRequest.headers['Content-Length']).toEqual(13)

    it 'should set the body to JSON serialized params', ->
      httpRequest = buildRequest({ foo: 'bar' })
      expect(httpRequest.body).toEqual('{"foo":"bar"}')

