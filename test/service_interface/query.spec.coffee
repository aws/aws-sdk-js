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
require('../../lib/service_interface/query')

describe 'AWS.ServiceInterface.Query', ->
  client = null
  request = null
  response = null
  svc = eval(@description)

  beforeEach ->
    MockQueryClient = AWS.Client.defineClient
      endpointPrefix: 'mockservice'
      apiVersion: '2012-01-01'
      operations:
        operationName:
          name: 'OperationName'
          input:
            members:
              Input:
                members: {}
          output:
            type: 'structure'
            members:
              Data:
                type: 'structure'
                members:
                  Name:
                    type: 'string'
                  Count:
                    type: 'float'

    client = new MockQueryClient({region:'region'})
    request = new AWS.Request(client, 'operationName')
    response = new AWS.Response(request)

  describe 'buildRequest', ->
    buildRequest = (input) ->
      if input == undefined
        input = 'foo+bar: yuck/baz=~'
      request.params = Input: input
      svc.buildRequest(request)

    it 'should use POST method requests', ->
      buildRequest()
      expect(request.httpRequest.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      buildRequest()
      expect(request.httpRequest.path).toEqual('/')

    it 'should set Content-Type header', ->
      buildRequest()
      expect(request.httpRequest.headers['Content-Type']).
        toEqual('application/x-www-form-urlencoded; charset=utf-8')

    it 'should add the api version param', ->
      buildRequest()
      expect(request.httpRequest.params.toString()).
        toMatch(/Version=2012-01-01/)

    it 'should add the operation name as Action', ->
      buildRequest()
      expect(request.httpRequest.params.toString()).
        toMatch(/Action=OperationName/)

    it 'should uri encode params properly', ->
      buildRequest()
      expect(request.httpRequest.params.toString()).
        toMatch(/foo%2Bbar%3A%20yuck%2Fbaz%3D~/);

    it 'encodes empty string values properly', ->
      buildRequest('')
      expect(request.httpRequest.params.toString()).
        toMatch(/Input=($|&)/);

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

    it 'extracts error from UnknownOperationException', ->
      extractError '<UnknownOperationException/>'
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('UnknownOperation')
      expect(response.error.message).toEqual('Unknown operation operationName')
      expect(response.data).toEqual(null)

    it 'extracts the error code and message', ->
      extractError()
      expect(response.error instanceof Error).toBeTruthy()
      expect(response.error.code).toEqual('InvalidArgument')
      expect(response.error.message).toEqual('Provided param is bad')
      expect(response.data).toEqual(null)

    it 'returns an empty error when the body is blank', ->
      extractError('')
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

    it 'parses the response using the operation output rules', ->
      extractData """
      <xml>
        <Data>
          <Name>abc</Name>
          <Count>123</Count>
        </Data>
      </xml>
      """
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({Data:{Name:'abc',Count:123}})

    it 'performs default xml parsing when output rule is missing', ->
      delete client.api.operations.operationName.output
      extractData """
      <xml>
        <Data>
          <Name>abc</Name>
          <Count>123</Count>
        </Data>
      </xml>
      """
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({Data:{Name:'abc',Count:'123'}})

    it 'removes wrapping result element if resultWrapped is set', ->
      client.api.resultWrapped = true
      extractData """
      <xml>
        <OperationNameResult>
          <Data>
            <Name>abc</Name>
            <Count>12345.5</Count>
          </Data>
        </OperationNameResult>
      </xml>
      """
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({Data:{Name:'abc',Count:12345.5}})

    it 'does not fail if wrapping element is not present (resultWrapped=true)', ->
      client.api.resultWrapped = true
      extractData """
      <xml>
        <NotWrapped><Data>abc</Data></NotWrapped>
      </xml>
      """
      expect(response.error).toEqual(null)
      expect(response.data).toEqual({NotWrapped:{Data:'abc'}})
