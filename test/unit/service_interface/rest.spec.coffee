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

AWS = require('../../../lib/core')
require('../../../lib/service_interface/rest')

describe 'AWS.ServiceInterface.Rest', ->

  MockRESTClient = AWS.util.inherit AWS.Client,
    serviceName: 'mockservice'

  operation = null
  request = null
  response = null
  svc = eval(@description)

  beforeEach ->
    MockRESTClient.prototype.api =
      operations:
        sampleOperation:
          m: 'POST' # http method
          u: '/'    # uri
          i: null   # no params
          o: null   # no ouputs

    AWS.Client.defineMethods(MockRESTClient)

    operation = MockRESTClient.prototype.api.operations.sampleOperation
    client = new MockRESTClient(region: 'region')
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

  describe 'extractData', ->
    extractData = (callback) ->
      if callback
        callback()
      svc.extractData(response)

    describe 'headers', ->
      it 'extracts header values', ->
        extractData ->
          operation.o = {ContentType:{t:'s',l:'header',n:'content-type'}}
          response.httpResponse.headers['content-type'] = 'text/plain'
        expect(response.data.ContentType).toEqual('text/plain')

      it 'extracts headers when the rule name is camel-cased', ->
        extractData ->
          operation.o = {ContentType:{t:'s',l:'header',n:'Content-Type'}}
          response.httpResponse.headers['content-type'] = 'text/plain'
        expect(response.data.ContentType).toEqual('text/plain')

      it 'extracts headers when the header name is camel-cased', ->
        extractData ->
          operation.o = {ContentType:{t:'s',l:'header',n:'content-type'}}
          response.httpResponse.headers['Content-Type'] = 'text/plain'
        expect(response.data.ContentType).toEqual('text/plain')

      it 'extracts map types from header', ->
        extractData ->
          operation.o = {Metadata:{t:'m',l:'header',n:'x-amz-meta-'}}
          response.httpResponse.headers['X-AMZ-META-FOO'] = 'foo'
          response.httpResponse.headers['x-amz-meta-bar'] = 'bar'
        expect(response.data.Metadata.FOO).toEqual('foo')
        expect(response.data.Metadata.bar).toEqual('bar')

      it 'adds empty map if no matching headers are found', ->
        extractData ->
          operation.o = {Metadata:{t:'m',l:'header',n:'x-amz-meta-'}}
        expect(response.data.Metadata).toEqual({})

    describe 'status code', ->
      it 'extracts the http status when instructed to', ->
        extractData ->
          operation.o = {Result:{t:'i',l:'status'}}
          response.httpResponse.statusCode = 200
        expect(response.data.Result).toEqual(200)

      it 'casts string status codes to integers', ->
        extractData ->
          operation.o = {Result:{t:'i',l:'status'}}
          response.httpResponse.statusCode = '202'
        expect(response.data.Result).toEqual(202)
