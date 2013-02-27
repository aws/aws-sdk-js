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
require('../../lib/signers/v2')

describe 'AWS.Signers.V2', ->

  credentials = null
  date = null
  request = null
  signer = null

  buildRequest = ->
    request = new AWS.HttpRequest(new AWS.Endpoint('localhost'))
    request.params = new AWS.QueryParamList()
    request

  buildSigner = (request) ->
    new AWS.Signers.V2(request)

  signRequest = (request) ->
    signer = new AWS.Signers.V2(request)
    signer.addAuthorization(credentials, date)

  beforeEach ->
    credentials = { accessKeyId:'akid', secretAccessKey:'secret' }
    date = new Date(1935346573456)
    signRequest(buildRequest())

  describe 'constructor', ->

    it 'builds a signer for a request object', ->
      expect(signer.request).toBe(request)

  describe 'addAuthorization', ->

    it 'adds a url encoded iso8601 timestamp param', ->
      expect(request.params.toString()).toMatch(/Timestamp=2031-04-30T20%3A16%3A13.456Z/)

    it 'adds a SignatureVersion param', ->
      expect(request.params.toString()).toMatch(/SignatureVersion=2/)

    it 'adds a SignatureMethod param', ->
      expect(request.params.toString()).toMatch(/SignatureMethod=HmacSHA256/)

    it 'adds an AWSAccessKeyId param', ->
      expect(request.params.toString()).toMatch(/AWSAccessKeyId=akid/)

    it 'omits SecurityToken when sessionToken has been omitted', ->
      expect(request.params.toString()).not.toMatch(/SecurityToken/)

    it 'adds the SecurityToken when sessionToken is provided', ->
      credentials.sessionToken = 'session'
      signRequest(buildRequest())
      expect(request.params.toString()).toMatch(/SecurityToken=session/)

    it 'populates the body', ->
      expect(request.body).toEqual('AWSAccessKeyId=akid&Signature=%2FrumhWptMPvyb4aaeOv5iGpl6%2FLfs5uVHu8k1d3NNfc%3D&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2031-04-30T20%3A16%3A13.456Z')

    it 'populates content-length header', ->
      expect(request.headers['Content-Length']).toEqual(165)

    it 'signs additional body params', ->
      request = buildRequest()
      request.params.add('Param.1', 'abc')
      request.params.add('Param.2', 'xyz')
      signRequest(request)
      expect(request.body).toEqual('AWSAccessKeyId=akid&Param.1=abc&Param.2=xyz&Signature=3pcXIWw0eVd4wFmp%2Blo24L93UTMGcYSNE%2BFYNNqzDts%3D&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2031-04-30T20%3A16%3A13.456Z')

