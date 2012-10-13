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
require('../../lib/rest_xml_service')

describe 'AWS.RESTService', ->

  operation = null

  MockRESTService = AWS.util.inherit AWS.RESTService,
    constructor: (config) ->
      this.serviceName = 'mockservice'
      AWS.RESTService.call(this, config)

  beforeEach ->

    MockRESTService.prototype.api =
      operations:
        sampleOperation:
          m: 'POST' # http method
          u: '/'    # uri
          i: null   # no params
          o: null   # no ouputs

    AWS.Service.defineMethods(MockRESTService)

    operation = MockRESTService.prototype.api.operations.sampleOperation

  svc = new MockRESTService()

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
        expect(buildRequest().uri).toEqual('/path')

      it 'replaces param placeholders', ->
        operation.u = '/Owner/{Id}'
        operation.i = {Id:{l:'uri'}}
        expect(buildRequest({'Id': 'abc'}).uri).toEqual('/Owner/abc')

      it 'can replace multiple path placeholders', ->
        operation.u = '/{Id}/{Count}'
        operation.i = {Id:{l:'uri'},Count:{t:'i',l:'uri'}}
        expect(buildRequest({Id:'abc',Count:123}).uri).toEqual('/abc/123')

      it 'performs querystring param replacements', ->
        operation.u = '/path?id-param={Id}'
        operation.i = {Id:{l:'uri'}}
        expect(buildRequest({Id:'abc'}).uri).toEqual('/path?id-param=abc')

      it 'omits querystring when param is not provided', ->
        operation.u = '/path?id-param={Id}'
        operation.i = {Id:{l:'uri'}}
        expect(buildRequest().uri).toEqual('/path')

      it 'accpets multiple query params with uri params', ->
        operation.u = '/{Abc}/{Xyz}?foo={Foo}&bar={Bar}'
        operation.i = {Abc:{l:'uri'},Xyz:{l:'uri'},Foo:{l:'uri'},Bar:{l:'uri'}}
        params = { Abc:'abc', Xyz:'xyz', Bar:'bar' } # omitted Foo
        expect(buildRequest(params).uri).toEqual('/abc/xyz?bar=bar')

    describe 'headers', ->

      it 'defaults headers to an empty hash', ->
        expect(buildRequest().headers).toEqual({})

      it 'populates the headers with present params', ->
        operation.i = {ACL:{l:'header',n:'x-amz-acl'}}
        expect(buildRequest(ACL:'public-read').headers).toEqual('x-amz-acl':'public-read')

      it 'works with map types', ->
        operation.i = {Metadata:{t:'m',l:'header',n:'x-amz-meta-'}}
        params =
          Metadata:
            foo: 'bar'
            abc: 'xyz'
        expect(buildRequest(params).headers).toEqual(
          'x-amz-meta-foo': 'bar'
          'x-amz-meta-abc': 'xyz'
        )
