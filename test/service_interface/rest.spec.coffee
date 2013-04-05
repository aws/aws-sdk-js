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

AWS = require('../../lib/core')
require('../../lib/service_interface/rest')

describe 'AWS.ServiceInterface.Rest', ->

  MockRESTService = AWS.util.inherit AWS.Service,
    endpointPrefix: 'mockservice'

  operation = null
  request = null
  response = null
  svc = eval(@description)

  beforeEach ->
    MockRESTService.prototype.api =
      operations:
        sampleOperation:
          http:
            method: 'POST'
            uri: '/'
          input: null
          output: null

    AWS.Service.defineMethods(MockRESTService)

    operation = MockRESTService.prototype.api.operations.sampleOperation
    service = new MockRESTService(region: 'region')
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
          operation.input = {members:{Id:{location:'uri'}}}
          request.params = Id: 'abc'
        expect(request.httpRequest.path).toEqual('/Owner/abc')

      it 'can replace multiple path placeholders', ->
        buildRequest ->
          operation.http.uri = '/{Id}/{Count}'
          operation.input = {members:{Id:{location:'uri'},Count:{ttype:'integer',location:'uri'}}}
          request.params = Id: 'abc', Count: 123
        expect(request.httpRequest.path).toEqual('/abc/123')

      it 'performs querystring param replacements', ->
        buildRequest ->
          operation.http.uri = '/path?id-param={Id}'
          operation.input = {members:{Id:{location:'uri'}}}
          request.params = Id: 'abc'
        expect(request.httpRequest.path).toEqual('/path?id-param=abc')

      it 'omits querystring when param is not provided', ->
        buildRequest ->
          operation.http.uri = '/path?id-param={Id}'
          operation.input = {members:{Id:{location:'uri'}}}
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
          request.params = { Abc:'abc', Xyz:'xyz', Bar:'bar' }
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
          operation.input = {members:{ACL:{location:'header'}}}
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

  describe 'extractData', ->
    extractData = (callback) ->
      if callback
        callback()
      svc.extractData(response)

    describe 'headers', ->
      it 'extracts header values', ->
        extractData ->
          operation.output =
            type: 'structure'
            members:
              ContentType:
                type: 'string'
                location: 'header'
                name: 'content-type'
          response.httpResponse.headers['content-type'] = 'text/plain'
        expect(response.data.ContentType).toEqual('text/plain')

      it 'extracts headers when the rule name is camel-cased', ->
        extractData ->
          operation.output =
            type: 'structure'
            members:
              ContentType:
                type: 'string'
                location: 'header'
                name: 'Content-Type'
          response.httpResponse.headers['content-type'] = 'text/plain'
        expect(response.data.ContentType).toEqual('text/plain')

      it 'extracts headers when the header name is camel-cased', ->
        extractData ->
          operation.output =
            type: 'structure'
            members:
              ContentType:
                type: 'string'
                location: 'header'
                name: 'content-type'
          response.httpResponse.headers['Content-Type'] = 'text/plain'
        expect(response.data.ContentType).toEqual('text/plain')

      it 'extracts map types from header', ->
        extractData ->
          operation.output =
            type: 'structure'
            members:
              Metadata:
                type: 'map'
                location: 'header'
                name: 'x-amz-meta-'
          response.httpResponse.headers['X-AMZ-META-FOO'] = 'foo'
          response.httpResponse.headers['x-amz-meta-bar'] = 'bar'
        expect(response.data.Metadata.FOO).toEqual('foo')
        expect(response.data.Metadata.bar).toEqual('bar')

      it 'adds empty map if no matching headers are found', ->
        extractData ->
          operation.output =
            type: 'structure'
            members:
              Metadata:
                type: 'map'
                location: 'header'
                name: 'x-amz-meta-'
        expect(response.data.Metadata).toEqual({})

    describe 'status code', ->
      it 'extracts the http status when instructed to', ->
        extractData ->
          operation.output =
            type: 'structure'
            members:
              Result:
                type: 'integer'
                location: 'status'
          response.httpResponse.statusCode = 200
        expect(response.data.Result).toEqual(200)

      it 'casts string status codes to integers', ->
        extractData ->
          operation.output =
            type: 'structure'
            members:
              Result:
                type: 'integer'
                location: 'status'
          response.httpResponse.statusCode = '202'
        expect(response.data.Result).toEqual(202)
