helpers = require('../helpers'); AWS = helpers.AWS
Buffer = require('buffer').Buffer
require('../../lib/service_interface/rest_json')

describe 'AWS.ServiceInterface.RestJson', ->

  MockJSONRESTService = AWS.util.inherit AWS.Service,
    endpointPrefix: 'mockservice'

  operation = null
  request = null
  response = null
  svc = eval(@description)

  beforeEach ->
    MockJSONRESTService.prototype.api =
      operations:
        sampleOperation:
          http:
            method: 'POST'
            uri: '/'
          input:
            type: 'structure'
            members: {}
          output:
            type: 'structure'
            members: {}

    AWS.Service.defineMethods(MockJSONRESTService)

    operation = MockJSONRESTService.prototype.api.operations.sampleOperation
    service = new MockJSONRESTService(region: 'region')
    request = new AWS.Request(service, 'sampleOperation')
    response = new AWS.Response(request)

  describe 'buildRequest', ->
    buildRequest = (callback) ->
      if callback
        callback()
      svc.buildRequest(request)

    describe 'method', ->
      it 'populates method from the operation', ->
        buildRequest ->
          operation.http.method = 'GET'
        expect(request.httpRequest.method).toEqual('GET')

    describe 'uri', ->
      it 'populates uri from the operation', ->
        buildRequest ->
          operation.http.uri = '/path'
        expect(request.httpRequest.path).toEqual('/path')

      it 'replaces param placeholders', ->
        buildRequest ->
          operation.http.uri = '/Owner/{Id}'
          operation.input =
            members:
              Id:
                location: 'uri'
          request.params = Id: 'abc'
        expect(request.httpRequest.path).toEqual('/Owner/abc')

      it 'can replace multiple path placeholders', ->
        buildRequest ->
          operation.http.uri = '/{Id}/{Count}'
          operation.input =
            members:
              Id:
                location: 'uri'
              Count:
                type: 'integer'
                location: 'uri'
          request.params = Id: 'abc', Count: 123
        expect(request.httpRequest.path).toEqual('/abc/123')

      it 'performs querystring param replacements', ->
        buildRequest ->
          operation.http.uri = '/path?id-param={Id}'
          operation.input =
            members:
              Id:
                location: 'uri'
          request.params = Id: 'abc'
        expect(request.httpRequest.path).toEqual('/path?id-param=abc')

      it 'omits querystring when param is not provided', ->
        buildRequest ->
          operation.http.uri = '/path?id-param={Id}'
          operation.input =
            members:
              Id:
                location: 'uri'
        expect(request.httpRequest.path).toEqual('/path')

      it 'accpets multiple query params with uri params', ->
        buildRequest ->
          operation.http.uri = '/{Abc}/{Xyz}?foo={Foo}&bar={Bar}'
          operation.input =
            members:
              Abc:
                location: 'uri'
              Xyz:
                location: 'uri'
              Foo:
                location: 'uri'
              Bar:
                location: 'uri'
          request.params = { Abc:'abc', Xyz:'xyz', Bar:'bar' } # omitted Foo
        expect(request.httpRequest.path).toEqual('/abc/xyz?bar=bar')

      it 'uri escapes params in both path and querystring', ->
        buildRequest ->
          operation.http.uri = '/{Path}?query={Query}'
          operation.input =
            members:
              Path:
                location: 'uri'
              Query:
                location: 'uri'
          request.params = { Path:'a b', Query:'a/b' }
        expect(request.httpRequest.path).toEqual('/a%20b?query=a%2Fb')

    describe 'headers', ->
      it 'populates the headers with present params', ->
        buildRequest ->
          operation.input =
            members:
              ACL:
                location: 'header'
                name: 'x-amz-acl'
          request.params = ACL: 'public-read'
        expect(request.httpRequest.headers['x-amz-acl']).toEqual('public-read')

      it 'uses default rule name if .n property is not present', ->
        buildRequest ->
          operation.input =
            members:
              ACL:
                location: 'header'
          request.params = ACL: 'public-read'
        expect(request.httpRequest.headers['ACL']).toEqual('public-read')

      it 'works with map types', ->
        buildRequest ->
          operation.input =
            members:
              Metadata:
                type: 'map'
                location: 'header'
                name: 'x-amz-meta-'
          request.params =
            Metadata:
              foo: 'bar'
              abc: 'xyz'
        expect(request.httpRequest.headers['x-amz-meta-foo']).toEqual('bar')
        expect(request.httpRequest.headers['x-amz-meta-abc']).toEqual('xyz')

    describe 'body', ->
      it 'builds root element if rules contains root', ->
        buildRequest ->
          operation.input =
            payload: 'Config'
            members:
              Config:
                type: 'structure'
                members:
                  Name: type: 'string'
                  Type: type: 'string'
          request.params =
            Config:
              Name: 'foo'
              Type: 'bar'
        expect(request.httpRequest.body.toString()).toEqual(
          '{"Name":"foo","Type":"bar"}')

      it 'builds payload element as non JSON data if rules contains payload', ->
        buildRequest ->
          operation.input =
            payload: 'Body'
            members:
              Body:
                type: 'binary'
                location: 'body'
          request.params =
            Body: 'foobar'
        expect(request.httpRequest.body).toEqual('foobar')

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

  describe 'extractData', ->
    extractData = (body) ->
      response.httpResponse.statusCode = 200
      response.httpResponse.body = new Buffer(body)
      svc.extractData(response)

    it 'JSON parses http response bodies', ->
      extractData '{"a":1, "b":"xyz"}'
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({a:1, b:'xyz'})

    it 'pulls header data out of response', ->
      response.httpResponse.headers['x-title'] = 'The title'
      operation.output =
        type: 'structure'
        members:
          Title: location: 'header', name: 'x-title'

      extractData '{}'
      expect(response.error).toEqual(null)
      expect(response.data.Title).toEqual('The title')

    it 'pulls body out into data key if body is payload', ->
      operation.output =
        type: 'structure'
        payload: 'Body'
        members:
          Body: location: 'body', type: 'binary'

      extractData 'foobar'
      expect(response.error).toEqual(null)
      expect(response.data.Body).toEqual('foobar')

    it 'pulls body out as Buffer if body is streaming payload', ->
      operation.output =
        type: 'structure'
        payload: 'Body'
        members:
          Body: location: 'body', type: 'binary', streaming: true

      extractData 'foobar'
      expect(response.error).toEqual(null)
      expect(response.data.Body instanceof Buffer).toEqual(true)
      expect(response.data.Body.toString()).toEqual('foobar')

    it 'returns an empty object when the body is an empty string', ->
      extractData ''
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({})

    it 'returns an empty object when the body is null', ->
      extractData ''
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({})
