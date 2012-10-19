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

helpers = require('../helpers'); AWS = helpers.AWS
require('../../lib/rest_xml_service')

describe 'AWS.RESTXMLService', ->

  xmlns = 'http://mockservice.com/xmlns'

  operation = null

  MockRESTXMLService = AWS.util.inherit AWS.RESTXMLService,
    constructor: (config) ->
      this.serviceName = 'mockservice'
      AWS.RESTXMLService.call(this, config)

  beforeEach ->

    MockRESTXMLService.prototype.api =
      xmlNamespace: xmlns
      operations:
        sampleOperation:
          m: 'POST' # http method
          u: '/'    # uri
          i: null   # no params
          o: null   # no ouputs

    AWS.Service.defineMethods(MockRESTXMLService)

    operation = MockRESTXMLService.prototype.api.operations.sampleOperation

  svc = new MockRESTXMLService()

  it 'defines a method for each api operation', ->
    expect(typeof svc.sampleOperation).toEqual('function')

  describe 'buildRequest', ->

    buildRequest = (params) ->
      svc.buildRequest('sampleOperation', params)

    describe 'empty bodies', ->

      it 'defaults body to null when there are no inputs', ->
        operation.i = null
        expect(buildRequest().body).toEqual(null)

      it 'defaults body to null when all inputs are uri or header values', ->
        operation.u = '/{Bucket}'
        operation.i = {m:{Bucket:{l:'uri',r:1},ACL:{n:'x-amz-acl',l:'header'}}}
        params = { Bucket:'abc', ACL:'canned-acl' }
        req = buildRequest(params)
        expect(req.body).toEqual(null)
        expect(req.uri).toEqual('/abc')
        expect(req.headers['x-amz-acl']).toEqual('canned-acl')

    describe 'string bodies', ->

      it 'populates the body with string types directly', ->
        operation.u = '/{Bucket}'
        operation.i = {m:{Bucket:{l:'uri',r:1},Data:{t:'s',l:'body'}}}
        params = { Bucket: 'bucket-name', Data: 'abc' }
        expect(buildRequest(params).body).toEqual('abc')

    describe 'xml bodies', ->

      it 'populates the body with XML from the params w/out a location', ->
        operation.u = '/{Bucket}?next-marker={Marker}&limit={Limit}'
        operation.i =
          n: 'ComplexRequest', # the root xml element name
          m:
            Bucket: # uri path param
              t: 's'
              l: 'uri'
              r: 1
            Marker: # uri querystring param
              t: 's'
              l: 'uri'
            Limit: # uri querystring integer param
              t: 'i'
              l: 'uri'
            ACL: # header string param
              t: 's'
              l: 'header'
              n: 'x-amz-acl'
            Metadata: # header map param
              t: 'm'
              l: 'header'
              n: 'x-amz-meta-'
            Config: # structure of mixed tpyes
              t: 'o'
              r: 1
              m:
                Abc: {} # string
                Locations: # array of strings
                  t: 'a'
                  m:
                    t: 's'
                    n: 'Location'
                Data: # array of structures
                  t: 'a'
                  m:
                    t: 'o'
                    m:
                      Foo: {}
                      Bar: {}
            Enabled: # boolean
              t: 'b'

        params = {
          Enabled: true
          ACL: 'canned-acl'
          Config:
            Abc: 'abc'
            Locations: ['a', 'b', 'c']
            Data: [
              { Foo:'foo1', Bar:'bar1' },
              { Foo:'foo2', Bar:'bar2' },
            ]
          Bucket: 'bucket-name'
          Marker: 'marker'
          Limit: 123
          Metadata:
            abc: 'xyz'
            mno: 'hjk'
        }

        xml = """
        <ComplexRequest xmlns="http://mockservice.com/xmlns">
          <Config>
            <Abc>abc</Abc>
            <Locations>
              <Location>a</Location>
              <Location>b</Location>
              <Location>c</Location>
            </Locations>
            <Data>
              <member>
                <Foo>foo1</Foo>
                <Bar>bar1</Bar>
              </member>
              <member>
                <Foo>foo2</Foo>
                <Bar>bar2</Bar>
              </member>
            </Data>
          </Config>
          <Enabled>true</Enabled>
        </ComplexRequest>
        """

        req = buildRequest(params)
        expect(req.method).toEqual('POST')
        expect(req.uri).toEqual('/bucket-name?next-marker=marker&limit=123')
        expect(req.headers['x-amz-acl']).toEqual('canned-acl')
        expect(req.headers['x-amz-meta-abc']).toEqual('xyz')
        expect(req.headers['x-amz-meta-mno']).toEqual('hjk')
        helpers.matchXML(req.body, xml)

