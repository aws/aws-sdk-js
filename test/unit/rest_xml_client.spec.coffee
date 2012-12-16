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
require('../../lib/rest_xml_client')

describe 'AWS.RESTXMLClient', ->

  xmlns = 'http://mockservice.com/xmlns'

  operation = null

  MockRESTXMLClient = AWS.util.inherit AWS.RESTXMLClient,
    constructor: (config) ->
      this.serviceName = 'mockservice'
      AWS.RESTXMLClient.call(this, config)

  beforeEach ->

    MockRESTXMLClient.prototype.api =
      xmlNamespace: xmlns
      operations:
        sampleOperation:
          m: 'POST' # http method
          u: '/'    # uri
          i: null   # no params
          o: null   # no ouputs

    AWS.Client.defineMethods(MockRESTXMLClient)

    operation = MockRESTXMLClient.prototype.api.operations.sampleOperation

  svc = new MockRESTXMLClient()

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
        expect(req.path).toEqual('/abc')
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
        expect(req.path).toEqual('/bucket-name?next-marker=marker&limit=123')
        expect(req.headers['x-amz-acl']).toEqual('canned-acl')
        expect(req.headers['x-amz-meta-abc']).toEqual('xyz')
        expect(req.headers['x-amz-meta-mno']).toEqual('hjk')
        helpers.matchXML(req.body, xml)

      it 'omits the body xml when body params are not present', ->
        operation.u = '/{Bucket}'
        operation.i = {n:'CreateBucketConfig', m:{Bucket:{l:'uri',r:1},Config:{}}}
        params = { Bucket:'abc' } # omitting Config purposefully
        req = buildRequest(params)
        expect(req.body).toEqual(null)
        expect(req.path).toEqual('/abc')

  describe 'parseResponse', ->

    resp = null

    beforeEach ->
      resp = new AWS.HttpResponse()

    parse = (callback) ->
      svc.parseResponse resp, 'sampleOperation', (error,data) ->
        callback.call(this, error, data)

    describe 'with data', ->

      extractData = (resp) ->
        svc.extractData(resp, 'sampleOperation')

      it 'parses the xml body', ->
        operation.o = {Foo:{},Bar:{t:'a',m:{n:'Item'}}}
        resp = new AWS.HttpResponse()
        resp.status = 200
        resp.body = """
        <xml>
          <Foo>foo</Foo>
          <Bar>
            <Item>a</Item>
            <Item>b</Item>
            <Item>c</Item>
          </Bar>
        </xml>
        """
        expect(extractData(resp)).toEqual({Foo:'foo', Bar:['a', 'b', 'c']})

    describe 'with error', ->

      beforeEach ->
        resp.statusCode = 400
        resp.body = """
        <Error>
          <Code>InvalidArgument</Code>
          <Message>Provided param is bad</Message>
        </Error>
        """

      it 'extracts the error code', ->
        parse (error, data) ->
          expect(error instanceof Error).toBeTruthy()
          expect(error.code).toEqual('InvalidArgument')
          expect(data).toEqual(null)

      it 'extracts the error message', ->
        parse (error, data) ->
          expect(error instanceof Error).toBeTruthy()
          expect(error.message).toEqual('Provided param is bad')
          expect(data).toEqual(null)

      it 'returns an empty error when the body is blank', ->
        resp.body = ''
        parse (error, data) ->
          expect(error instanceof Error).toBeTruthy()
          expect(error.code).toEqual(400)
          expect(error.message).toEqual(null)
          expect(data).toEqual(null)
