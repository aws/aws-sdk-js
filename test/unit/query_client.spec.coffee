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
require('../../lib/query_client')

describe 'AWS.QueryClient', ->

  MockQueryClient = AWS.util.inherit AWS.QueryClient,
    constructor: (config) -> 
      this.serviceName = 'mockservice'
      AWS.QueryClient.call(this, config)

  MockQueryClient.prototype.api =
    apiVersion: '2012-01-01'
    operations:
      operationName:
        n: 'OperationName'
        i: {m:{Input:{m:{}}}}
        o: {Data:{t:'o',m:{Name:{t:'s'},Count:{t:'i'}}}}

  AWS.Client.defineMethods(MockQueryClient)

  svc = new MockQueryClient()

  it 'defines a method for each api operation', ->
    expect(typeof svc.operationName).toEqual('function')

  describe 'buildRequest', ->

    req = svc.buildRequest('operationName', { Input:'foo+bar: yuck/baz=~' })

    it 'should use POST method requests', ->
      expect(req.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      expect(req.path).toEqual('/')

    it 'should set Content-Type header', ->
      expect(req.headers['Content-Type']).
        toEqual('application/x-www-form-urlencoded; charset=utf-8')

    it 'should add the api version param', ->
      expect(req.params.toString()).toMatch(/Version=2012-01-01/)

    it 'should add the operation name as Action', ->
      expect(req.params.toString()).toMatch(/Action=OperationName/)

    it 'should uri encode params properly', ->
      expect(req.params.toString()).toMatch(/foo%2Bbar%3A%20yuck%2Fbaz%3D~/);

  describe 'parseResponse', ->

    resp = new AWS.HttpResponse()

    parse = (callback) ->
      svc.parseResponse resp, 'operationName', (error,data) ->
        callback.call(this, error, data)

    describe 'with data', ->

      beforeEach ->
        resp.statusCode = 200
        resp.body = """
          <xml>
            <Data>
              <Name>abc</Name>
              <Count>123</Count>
            </Data>
          </xml>
        """

      it 'parses the response using the operation output rules', ->
        parse (error, data) ->
          expect(error).toEqual(null)
          expect(data).toEqual({Data:{Name:'abc',Count:123}})

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
          expect(error.code).toEqual('InvalidArgument')
          expect(data).toEqual(null)

      it 'extracts the error message', ->
        parse (error, data) ->
          expect(error.message).toEqual('Provided param is bad')
          expect(data).toEqual(null)

      it 'returns an empty error when the body is blank', ->
        resp.body = ''
        parse (error, data) ->
          expect(error.code).toEqual(400)
          expect(error.message).toEqual(null)
          expect(data).toEqual(null)

