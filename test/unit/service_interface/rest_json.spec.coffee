# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

helpers = require('../../helpers'); AWS = helpers.AWS
require('../../../lib/service_interface/rest_json')

describe 'AWS.ServiceInterface.RestJson', ->

  MockJSONRESTClient = AWS.util.inherit AWS.Client,
    serviceName: 'mockservice'

  operation = null
  request = null
  response = null
  svc = eval(@description)

  beforeEach ->
    MockJSONRESTClient.prototype.api =
      operations:
        sampleOperation:
          m: 'POST' # http method
          u: '/'    # uri
          i: null   # no params
          o: null   # no ouputs

    AWS.Client.defineMethods(MockJSONRESTClient)

    operation = MockJSONRESTClient.prototype.api.operations.sampleOperation
    client = new MockJSONRESTClient(region: 'region')
    request = new AWS.Request(client, 'sampleOperation')
    response = new AWS.Response(request)

  describe 'buildRequest', ->
    buildRequest = (callback) ->
      if callback
        callback()
      svc.buildRequest(request)

    describe 'method', ->
      it 'populates method from the operation', ->
        buildRequest ->
          operation.m = 'GET'
        expect(request.httpRequest.method).toEqual('GET')

    describe 'uri', ->
      it 'populates uri from the operation', ->
        buildRequest ->
          operation.u = '/path'
        expect(request.httpRequest.path).toEqual('/path')

      it 'replaces param placeholders', ->
        buildRequest ->
          operation.u = '/Owner/{Id}'
          operation.i = {m:{Id:{l:'uri'}}}
          request.params = Id: 'abc'
        expect(request.httpRequest.path).toEqual('/Owner/abc')

      it 'can replace multiple path placeholders', ->
        buildRequest ->
          operation.u = '/{Id}/{Count}'
          operation.i = {m:{Id:{l:'uri'},Count:{t:'i',l:'uri'}}}
          request.params = Id: 'abc', Count: 123
        expect(request.httpRequest.path).toEqual('/abc/123')

      it 'performs querystring param replacements', ->
        buildRequest ->
          operation.u = '/path?id-param={Id}'
          operation.i = {m:{Id:{l:'uri'}}}
          request.params = Id: 'abc'
        expect(request.httpRequest.path).toEqual('/path?id-param=abc')

      it 'omits querystring when param is not provided', ->
        buildRequest ->
          operation.u = '/path?id-param={Id}'
          operation.i = {m:{Id:{l:'uri'}}}
        expect(request.httpRequest.path).toEqual('/path')

      it 'accpets multiple query params with uri params', ->
        buildRequest ->
          operation.u = '/{Abc}/{Xyz}?foo={Foo}&bar={Bar}'
          operation.i = {m:{Abc:{l:'uri'},Xyz:{l:'uri'},Foo:{l:'uri'},Bar:{l:'uri'}}}
          request.params = { Abc:'abc', Xyz:'xyz', Bar:'bar' } # omitted Foo
        expect(request.httpRequest.path).toEqual('/abc/xyz?bar=bar')

      it 'uri escapes params in both path and querystring', ->
        buildRequest ->
          operation.u = '/{Path}?query={Query}'
          operation.i = {m:{Path:{l:'uri'},Query:{l:'uri'}}}
          request.params = { Path:'a b', Query:'a/b' }
        expect(request.httpRequest.path).toEqual('/a%20b?query=a%2Fb')

    describe 'headers', ->
      it 'populates the headers with present params', ->
        buildRequest ->
          operation.i = {m:{ACL:{l:'header',n:'x-amz-acl'}}}
          request.params = ACL: 'public-read'
        expect(request.httpRequest.headers['x-amz-acl']).toEqual('public-read')

      it 'uses default rule name if .n property is not present', ->
        buildRequest ->
          operation.i = {m:{ACL:{l:'header'}}}
          request.params = ACL: 'public-read'
        expect(request.httpRequest.headers['ACL']).toEqual('public-read')

      it 'works with map types', ->
        buildRequest ->
          operation.i = {m:{Metadata:{t:'m',l:'header',n:'x-amz-meta-'}}}
          request.params =
            Metadata:
              foo: 'bar'
              abc: 'xyz'
        expect(request.httpRequest.headers['x-amz-meta-foo']).toEqual('bar')
        expect(request.httpRequest.headers['x-amz-meta-abc']).toEqual('xyz')

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

    it 'returns an empty object when the body is an empty string', ->
      extractData ''
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({})

    it 'returns an empty object when the body is null', ->
      extractData ''
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({})
