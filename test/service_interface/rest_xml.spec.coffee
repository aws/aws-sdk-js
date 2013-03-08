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

helpers = require('../helpers'); AWS = helpers.AWS
require('../../lib/service_interface/rest_xml')

describe 'AWS.ServiceInterface.RestXml', ->

  MockRESTXMLClient = AWS.util.inherit AWS.Client,
    endpointPrefix: 'mockservice'

  xmlns = 'http://mockservice.com/xmlns'
  operation = null
  request = null
  response = null
  svc = eval(@description)

  beforeEach ->
    MockRESTXMLClient.prototype.api =
      xmlnamespace: xmlns
      operations:
        sampleOperation:
          http:
            method: 'POST' # http method
            uri: '/'    # uri
          input:
            type: 'structure'
            members: {}
          output:
            type: 'structure'
            members: {}

    AWS.Client.defineMethods(MockRESTXMLClient)
    operation = MockRESTXMLClient.prototype.api.operations.sampleOperation
    client = new MockRESTXMLClient(region: 'region')
    request = new AWS.Request(client, 'sampleOperation')
    response = new AWS.Response(request)

  describe 'buildRequest', ->
    buildRequest = (callback) ->
      if callback
        callback()
      svc.buildRequest(request)

    describe 'empty bodies', ->
      it 'defaults body to empty string when there are no inputs', ->
        buildRequest ->
          operation.input =
            type: 'structure'
            members: {}
        expect(request.httpRequest.body).toEqual('')

      it 'defaults body to empty string when no body params are present', ->
        buildRequest ->
          operation.http.uri = '/{Bucket}'
          operation.input =
            members:
              Bucket:
                location: 'uri'
                required: true
              ACL:
                name: 'x-amz-acl'
                location: 'header'
          request.params = Bucket: 'abc', ACL: 'canned-acl'
        expect(request.httpRequest.body).toEqual('')
        expect(request.httpRequest.path).toEqual('/abc')
        expect(request.httpRequest.headers['x-amz-acl']).toEqual('canned-acl')

    describe 'string bodies', ->
      it 'populates the body with string types directly', ->
        buildRequest ->
          operation.http.uri = '/{Bucket}'
          operation.input =
            payload: 'Data'
            members:
              Bucket:
                location: 'uri'
                required: true
              Data:
                type: 'string'
          request.params = Bucket: 'bucket-name', Data: 'abc'
        expect(request.httpRequest.body).toEqual('abc')

    describe 'xml bodies', ->
      it 'populates the body with XML from the params', ->
        buildRequest ->
          operation.http.uri = '/{Bucket}?next-marker={Marker}&limit={Limit}'
          operation.input =
            payload: 'Config'
            members:
              Bucket: # uri path param
                type: 'string'
                location: 'uri'
                required: true
              Marker: # uri querystring param
                type: 'string'
                location: 'uri'
              Limit: # uri querystring integer param
                type: 'integer'
                location: 'uri'
              ACL: # header string param
                type: 'string'
                location: 'header'
                name: 'x-amz-acl'
              Metadata: # header map param
                type: 'map'
                location: 'header'
                name: 'x-amz-meta-'
              Config: # structure of mixed tpyes
                type: 'structure'
                required: true
                members:
                  Abc: {} # string
                  Locations: # array of strings
                    type: 'list'
                    members:
                      type: 'string'
                      name: 'Location'
                  Data: # array of structures
                    type: 'list'
                    members:
                      type: 'structure'
                      members:
                        Foo: {}
                        Bar: {}
          request.params =
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
        xml = """
        <Config xmlns="http://mockservice.com/xmlns">
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
        """
        expect(request.httpRequest.method).toEqual('POST')
        expect(request.httpRequest.path).
          toEqual('/bucket-name?next-marker=marker&limit=123')
        expect(request.httpRequest.headers['x-amz-acl']).toEqual('canned-acl')
        expect(request.httpRequest.headers['x-amz-meta-abc']).toEqual('xyz')
        expect(request.httpRequest.headers['x-amz-meta-mno']).toEqual('hjk')
        helpers.matchXML(request.httpRequest.body, xml)

      it 'omits the body xml when body params are not present', ->
        buildRequest ->
          operation.http.uri = '/{Bucket}'
          operation.input =
            members:
              Bucket:
                location: 'uri'
                required: true
              Config: {}
          request.params = Bucket:'abc' # omitting Config purposefully
        expect(request.httpRequest.body).toEqual('')
        expect(request.httpRequest.path).toEqual('/abc')

  describe 'extractError', ->
    extractError = (body) ->
      if body == undefined
        body = """
        <Error>
          <Code>InvalidArgument</Code>
          <Message>Provided param is bad</Message>
        </Error>
        """
      response.httpResponse.statusCode = 400
      response.httpResponse.body = new Buffer(body)
      svc.extractError(response)

    it 'extracts the error code and message', ->
      extractError()
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('InvalidArgument')
      expect(response.error.message).toEqual('Provided param is bad')
      expect(response.data).toEqual(null)

    it 'returns an empty error when the body is blank', ->
      extractError ''
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual(400)
      expect(response.error.message).toEqual(null)
      expect(response.data).toEqual(null)

    it 'extracts error when inside <Errors>', ->
      extractError """
      <SomeResponse>
        <Errors>
          <Error>
            <Code>code</Code><Message>msg</Message>
          </Error>
        </Errors>
      </SomeResponse>"""
      expect(response.error.code).toEqual('code')
      expect(response.error.message).toEqual('msg')

    it 'extracts error when <Error> is nested', ->
      extractError """
      <SomeResponse>
        <Error>
          <Code>code</Code><Message>msg</Message>
        </Error>
      </SomeResponse>"""
      expect(response.error.code).toEqual('code')
      expect(response.error.message).toEqual('msg')

  describe 'extractData', ->
    extractData = (body) ->
      response.httpResponse.statusCode = 200
      response.httpResponse.body = new Buffer(body)
      svc.extractData(response)

    it 'parses the xml body', ->
      operation.output =
        type: 'structure'
        members:
          Foo: {}
          Bar:
            type: 'list'
            members:
              name: 'Item'
      extractData """
      <xml>
        <Foo>foo</Foo>
        <Bar>
          <Item>a</Item>
          <Item>b</Item>
          <Item>c</Item>
        </Bar>
      </xml>
      """
      expect(response.data).toEqual({Foo:'foo', Bar:['a', 'b', 'c']})

    it 'sets payload element to a Buffer object when it streams', ->
      operation.output =
        type: 'structure'
        payload: 'Body'
        members:
          Body:
            streaming: true
      extractData 'Buffer data'
      expect(response.data.Body instanceof Buffer).toBeTruthy()
      expect(response.data.Body.toString()).toEqual('Buffer data')

    it 'sets payload element to String when it does not stream', ->
      operation.output =
        type: 'structure'
        payload: 'Body'
        members:
          Body: {}
      extractData 'Buffer data'
      expect(typeof response.data.Body).toEqual('string')
      expect(response.data.Body).toEqual('Buffer data')

    it 'sets payload element along with other outputs', ->
      response.httpResponse.headers['x-amz-foo'] = 'foo'
      response.httpResponse.headers['x-amz-bar'] = 'bar'
      operation.output =
        type: 'structure'
        payload: 'Baz'
        members:
          Foo:
            location: 'header'
            name: 'x-amz-foo'
          Bar:
            location: 'header'
            name: 'x-amz-bar'
          Baz: {}
      extractData 'Buffer data'
      expect(response.data.Foo).toEqual('foo')
      expect(response.data.Bar).toEqual('bar')
      expect(response.data.Baz).toEqual('Buffer data')
