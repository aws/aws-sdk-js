# Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
require('../../lib/rest_xml_client')

describe 'AWS.RESTClient', ->

  operation = null

  MockRESTClient = AWS.util.inherit AWS.RESTClient,
    constructor: (config) ->
      this.serviceName = 'mockservice'
      AWS.RESTClient.call(this, config)

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

  svc = new MockRESTClient()

  it 'defines a method for each api operation', ->
    expect(typeof svc.sampleOperation).toEqual('function')

  describe 'buildRequest', ->

    buildRequest = (params) ->
      svc.buildRequest('sampleOperation', params)

    it 'returns an http request', ->
      req = svc.buildRequest('sampleOperation', {})
      expect(req.constructor).toBe(AWS.HttpRequest)

    describe 'method', ->

      it 'populates method from the operation', ->
        operation.m = 'GET'
        expect(buildRequest().method).toEqual('GET')

    describe 'uri', ->

      it 'populates uri from the operation', ->
        operation.u = '/path'
        expect(buildRequest().path).toEqual('/path')

      it 'replaces param placeholders', ->
        operation.u = '/Owner/{Id}'
        operation.i = {m:{Id:{l:'uri'}}}
        expect(buildRequest({'Id': 'abc'}).path).toEqual('/Owner/abc')

      it 'can replace multiple path placeholders', ->
        operation.u = '/{Id}/{Count}'
        operation.i = {m:{Id:{l:'uri'},Count:{t:'i',l:'uri'}}}
        expect(buildRequest({Id:'abc',Count:123}).path).toEqual('/abc/123')

      it 'performs querystring param replacements', ->
        operation.u = '/path?id-param={Id}'
        operation.i = {m:{Id:{l:'uri'}}}
        expect(buildRequest({Id:'abc'}).path).toEqual('/path?id-param=abc')

      it 'omits querystring when param is not provided', ->
        operation.u = '/path?id-param={Id}'
        operation.i = {m:{Id:{l:'uri'}}}
        expect(buildRequest().path).toEqual('/path')

      it 'accpets multiple query params with uri params', ->
        operation.u = '/{Abc}/{Xyz}?foo={Foo}&bar={Bar}'
        operation.i = {m:{Abc:{l:'uri'},Xyz:{l:'uri'},Foo:{l:'uri'},Bar:{l:'uri'}}}
        params = { Abc:'abc', Xyz:'xyz', Bar:'bar' } # omitted Foo
        expect(buildRequest(params).path).toEqual('/abc/xyz?bar=bar')

      it 'uri escapes params in both path and querystring', ->
        operation.u = '/{Path}?query={Query}'
        operation.i = {m:{Path:{l:'uri'},Query:{l:'uri'}}}
        params = { Path:'a b', Query:'a/b' }
        expect(buildRequest(params).path).toEqual('/a%20b?query=a%2Fb')

    describe 'headers', ->

      it 'populates default headers', ->
        req = new AWS.HttpRequest()
        expect(buildRequest().headers).toEqual(req.headers)

      it 'populates the headers with present params', ->
        operation.i = {m:{ACL:{l:'header',n:'x-amz-acl'}}}
        headers = buildRequest(ACL:'public-read').headers
        expect(headers['x-amz-acl']).toEqual('public-read')

      it 'works with map types', ->
        operation.i = {m:{Metadata:{t:'m',l:'header',n:'x-amz-meta-'}}}
        params =
          Metadata:
            foo: 'bar'
            abc: 'xyz'
        headers = buildRequest(params).headers
        expect(headers['x-amz-meta-foo']).toEqual('bar')
        expect(headers['x-amz-meta-abc']).toEqual('xyz')

  describe 'extractData', ->

    extractData = (resp) ->
      svc.extractData(resp, 'sampleOperation')

    describe 'headers', ->

      it 'extracts header values', ->
        operation.o = {ContentType:{t:'s',l:'header',n:'content-type'}}
        resp = new AWS.HttpResponse()
        resp.headers['content-type'] = 'text/plain'
        expect(extractData(resp).ContentType).toEqual('text/plain')

      it 'extracts headers when the rule name is camel-cased', ->
        operation.o = {ContentType:{t:'s',l:'header',n:'Content-Type'}}
        resp = new AWS.HttpResponse()
        resp.headers['content-type'] = 'text/plain'
        expect(extractData(resp).ContentType).toEqual('text/plain')

      it 'extracts headers when the header name is camel-cased', ->
        operation.o = {ContentType:{t:'s',l:'header',n:'content-type'}}
        resp = new AWS.HttpResponse()
        resp.headers['Content-Type'] = 'text/plain'
        expect(extractData(resp).ContentType).toEqual('text/plain')

    describe 'status code', ->

      it 'extracts the http status when instructed to', ->
        operation.o = {Result:{t:'i',l:'status'}}
        resp = new AWS.HttpResponse()
        resp.statusCode = 200
        expect(extractData(resp).Result).toEqual(200)

      it 'casts string status codes to integers', ->
        operation.o = {Result:{t:'i',l:'status'}}
        resp = new AWS.HttpResponse()
        resp.statusCode = '202'
        expect(extractData(resp).Result).toEqual(202)
