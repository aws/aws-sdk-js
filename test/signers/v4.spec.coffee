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
helpers = require('../helpers')
require('../../lib/services/dynamodb')

beforeEach ->
  spyOn(AWS.util, 'userAgent').andReturn('aws-sdk-js/0.1')

buildRequest = ->
  ddb = new AWS.DynamoDB.Client({region: 'region', endpoint: 'localhost'})
  req = ddb.makeRequest('listTables', {foo: 'bår'})
  resp = new AWS.Response(req)
  req.emitEvents(['validate', 'build', 'afterBuild'], resp)
  return req.httpRequest

buildSigner = (request) ->
  return new AWS.Signers.V4(request || buildRequest(), 'dynamodb')

describe 'AWS.Signers.V4', ->
  date = new Date(1935346573456)
  datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '')
  creds = {accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'}
  signature = '98f67f143b30a6de9c4a9f03fb33b0b0f78d664ba5d7195e4dc420bdb3cd94f2'
  authorization = 'AWS4-HMAC-SHA256 Credential=akid/20310430/region/dynamodb/aws4_request, ' +
    'SignedHeaders=content-length;content-type;date;host;user-agent;x-amz-date;x-amz-security-token;x-amz-target, ' +
    'Signature=' + signature
  signer = null

  beforeEach ->
    signer = buildSigner()
    signer.addHeaders(creds, datetime)

  describe 'constructor', ->
    it 'can build a signer for a request object', ->
      req = buildRequest()
      signer = buildSigner(req)
      expect(signer.request).toBe(req)

  describe 'addAuthorization', ->
    headers = {
      'Content-Type': 'application/x-amz-json-1.0',
      'Content-Length': 14,
      'X-Amz-Target': 'DynamoDB_20111205.ListTables',
      'Host': 'localhost',
      'Date': datetime,
      'X-Amz-Date': datetime,
      'X-Amz-Security-Token' : 'session',
      'Authorization' : authorization
    }

    beforeEach -> signer.addAuthorization(creds, date)

    for key, value of headers
      it 'should add ' + key + ' header', ->
        key = this.description.match(/(\S+) header/)[1]
        expect(signer.request.headers[key]).toEqual(headers[key])

  describe 'authorization', ->
    it 'should return authorization part for signer', ->
      expect(signer.authorization(creds, datetime)).toEqual(authorization)

  describe 'signature', ->
    it 'should generate proper signature', ->
      expect(signer.signature(creds, datetime)).toEqual(signature)

  describe 'stringToSign', ->
    it 'should sign correctly generated input string', ->
      expect(signer.stringToSign(datetime)).toEqual 'AWS4-HMAC-SHA256\n' +
        datetime + '\n' +
        '20310430/region/dynamodb/aws4_request\n' +
        signer.hexEncodedHash(signer.canonicalString())

  describe 'canonicalHeaders', ->
    it 'should return headers', ->
      expect(signer.canonicalHeaders()).toEqual [
        'content-length:14',
        'content-type:application/x-amz-json-1.0',
        'date:' + datetime,
        'host:localhost',
        'user-agent:' + AWS.util.userAgent(),
        'x-amz-date:' + datetime,
        'x-amz-security-token:session',
        'x-amz-target:DynamoDB_20111205.ListTables'
      ].join('\n')

    it 'should ignore Authorization header', ->
      signer.request.headers = {'Authorization': 'foo'}
      expect(signer.canonicalHeaders()).toEqual('')

    it 'should lowercase all header names (not values)', ->
      signer.request.headers = {'FOO': 'BAR'}
      expect(signer.canonicalHeaders()).toEqual('foo:BAR')

    it 'should sort headers by key', ->
      signer.request.headers = {abc: 'a', bca: 'b', Qux: 'c', bar: 'd'}
      expect(signer.canonicalHeaders()).toEqual('abc:a\nbar:d\nbca:b\nqux:c')

    it 'should compact multiple spaces in keys/values to a single space', ->
      signer.request.headers = {'Header': 'Value     with  Multiple   \t spaces'}
      expect(signer.canonicalHeaders()).toEqual('header:Value with Multiple spaces')

    it 'should strip starting and end of line spaces', ->
      signer.request.headers = {'Header': ' \t   Value  \t  '}
      expect(signer.canonicalHeaders()).toEqual('header:Value')
