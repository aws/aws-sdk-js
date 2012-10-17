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
        operation.i = {Bucket:{l:'uri',r:1},ACL:{l:'header',n:'x-amz-acl'}}
        params = { Bucket:'abc', ACL:'canned-acl' }
        req = buildRequest(params)
        expect(req.body).toEqual(null)
        expect(req.uri).toEqual('/abc')
        expect(req.headers['x-amz-acl']).toEqual('canned-acl')

    describe 'string bodies', ->

      it 'populates the body with string types directly', ->
        operation.u = '/{Bucket}'
        operation.i = {Bucket:{l:'uri',r:1},Data:{l:'body',t:'s'}}
        params = { Data:'abc' }
        expect(buildRequest(params).body).toEqual('abc')

    describe 'xml bodies', ->

      flattenXML = (xml) ->
        if xml == null
          return xml
        xml.split("\n").join('').   # remove newlines
          replace(/>\s+</g, '><').  # prunes whitespace between elements
          replace(/^\s+|\s+$/g, '') # trims whitespace from ends

      # Compares to XMl strings by flattening them and removing whitespace first.
      matchXML = (xml1, xml2) ->
        expect(flattenXML(xml1)).toEqual(flattenXML(xml2))

      it 'wraps simple structures with location of body', ->
        operation.i = {Config:{t:'o',l:'body',m:{Name:{},State:{}}}}
        params = { Name:'abc', State:'Enabled' }
        xml = """
        <Config xmlns="#{xmlns}">
          <Name>abc</Name>
          <State>Enabled</State>
        </Config>
        """
        matchXML(buildRequest(params).body, xml)

      it 'orders xml members by the order they appear in the rules', ->
        operation.i = {Config:{t:'o',l:'body',m:{Count:{t:'i'},State:{}}}}
        params = { State: 'Disabled', Count: 123 }
        xml = """
        <Config xmlns="#{xmlns}">
          <Count>123</Count>
          <State>Disabled</State>
        </Config>
        """
        matchXML(buildRequest(params).body, xml)

      it 'can serializes structures into XML', ->

        operation.i =
          Data:
            t: 'o'
            l: 'body'
            m:
              Name: {}
              Details:
                t: 'o'
                m:
                  Abc: {}
                  Xyz: {}

        params =
          Details:
            Xyz: 'xyz'
            Abc: 'abc'
          Name: 'john'

        xml = """
        <Data xmlns="#{xmlns}">
          <Name>john</Name>
          <Details>
            <Abc>abc</Abc>
            <Xyz>xyz</Xyz>
          </Details>
        </Data>
        """

        matchXML(buildRequest(params).body, xml)

      xit 'serializes lists (default member names)', ->

      xit 'serializes lists (custom member names)', ->

      xit 'serializes maps', ->

      it 'serializes numbers (integers)', ->
        operation.i = {Data:{t:'o',l:'body',m:{Count:{t:'i'}}}}
        params = { Count: 123.0 }
        xml = """
        <Data xmlns="#{xmlns}">
          <Count>123</Count>
        </Data>
        """
        matchXML(buildRequest(params).body, xml)

      it 'serializes nubmers (floats)', ->
        operation.i = {Data:{t:'o',l:'body',m:{Count:{t:'f'}}}}
        params = { Count: 123.123 }
        xml = """
        <Data xmlns="#{xmlns}">
          <Count>123.123</Count>
        </Data>
        """
        matchXML(buildRequest(params).body, xml)

      it 'serializes booleans (true)', ->
        operation.i = {Data:{t:'o',l:'body',m:{Enabled:{t:'b'}}}}
        params = { Enabled: true }
        xml = """
        <Data xmlns="#{xmlns}">
          <Enabled>true</Enabled>
        </Data>
        """
        matchXML(buildRequest(params).body, xml)

      it 'serializes booleans (false)', ->
        operation.i = {Data:{t:'o',l:'body',m:{Enabled:{t:'b'}}}}
        params = { Enabled: false }
        xml = """
        <Data xmlns="#{xmlns}">
          <Enabled>false</Enabled>
        </Data>
        """
        matchXML(buildRequest(params).body, xml)

      xit 'serializes timestamps (iso8601)', ->

      xit 'serializes timestamps (rfc822)', ->

      xit 'serializes timestamps (unix timestamp)', ->

      xit 'serializes structures to the body when no location provided', ->

      xit 'omits missing params from the XML', ->

