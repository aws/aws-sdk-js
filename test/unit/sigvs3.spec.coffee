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
require('../../lib/sigvs3')

describe 'AWS.SigVS3', ->

  # these can be overriden in tests
  method = null
  uri = null
  headers = null
  body = null
  date = null
  virtualHostedBucket = null
  accessKeyId = null
  secretAccessKey = null
  sessionToken = null

  # reset the overriden variable before each test
  beforeEach ->
    method = 'POST'
    uri = '/'
    virtualHostedBucket = null
    date = undefined
    headers = {}
    body = null
    accessKeyId = 'akid'
    secretAccessKey = 'secret'
    sessionToken = null

  buildRequest = () ->
    req = new AWS.HttpRequest()
    req.method = method
    req.uri = uri
    req.headers = headers
    req.body = body
    req.virtualHostedBucket = virtualHostedBucket
    req

  credentials = () ->
    creds = {}
    creds.accessKeyId = accessKeyId
    creds.secretAccessKey = secretAccessKey
    creds.sessionToken = sessionToken if (sessionToken)
    creds

  addAuth = (req) ->
    signer = new AWS.SigVS3(req || buildRequest())
    signer.addAuthorization(credentials(), date)
    signer.request

  stringToSign = (req) ->
    signer = new AWS.SigVS3(req || buildRequest())
    signer.stringToSign()

  describe 'addAuthorization', ->

    beforeEach ->
      date = AWS.util.date.rfc822(new Date(0))

    it 'sets the date header when not present', ->

      req = buildRequest()

      # stub date.rfc822 to return a fixed date string
      spyOn(AWS.util.date, 'rfc822')
      AWS.util.date.rfc822.andReturn('date-string')

      signer = new AWS.SigVS3(req)
      signer.addAuthorization(credentials())

      expect(req.headers['Date']).toEqual('date-string')

    it 'does not set the date header if x-amz-date is present', ->

      req = buildRequest()
      req.headers['X-Amz-Date'] = 'date-string'

      signer = new AWS.SigVS3(buildRequest())
      signer.addAuthorization(credentials())

      expect(req.headers['Date']).toEqual(null)
      expect(req.headers['X-Amz-Date']).toEqual('date-string')

    it 'omits the security token header when session token is blank', ->
      sessionToken = null
      req = addAuth()
      expect(req.headers['X-Amz-Security-Token']).toEqual(undefined)

    it 'adds a security token header when session token available', ->
      sessionToken = 'session'
      req = addAuth()
      expect(req.headers['X-Amz-Security-Token']).toEqual('session')

    it 'adds an Authorization header which contains akid and signature', ->

      creds = { accessKeyId: 'AKID', secretAccessKey: 'secret' }

      req = buildRequest()

      signer = new AWS.SigVS3(req)

      spyOn(signer, 'stringToSign')
      signer.stringToSign.andReturn('string-to-sign')
      signer.addAuthorization(creds, date)

      expect(req.headers['Authorization']).toEqual('AWS AKID:Gg5WLabTOvH0WMd15wv7lWe4zK0=')

  describe 'stringToSign', ->

    beforeEach ->
      headers['Date'] = 'DATE-STRING'

    it 'builds a basic string to sign', ->
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /
      """)

    it 'includes content md5 and content type when present', ->
      headers['Content-Type'] = 'CONTENT-TYPE'
      headers['Content-MD5'] = 'CONTENT-MD5'
      expect(stringToSign()).toEqual("""
      POST
      CONTENT-MD5
      CONTENT-TYPE
      DATE-STRING
      /
      """)

    it 'includes the http method, whatever it is', ->
      method = 'VERB'
      expect(stringToSign()).toEqual("""
      VERB


      DATE-STRING
      /
      """)

    it 'includes any x-amz- style headers, but not others', ->
      headers['X-Amz-Abc'] = 'abc'
      headers['X-Amz-Xyz'] = 'xyz'
      headers['random-header'] = 'random'
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      x-amz-abc:abc
      x-amz-xyz:xyz
      /
      """)

    it 'includes x-amz- headers that are lower-cased', ->
      headers['x-amz-Abc'] = 'abc'
      headers['x-amz-Xyz'] = 'xyz'
      headers['random-header'] = 'random'
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      x-amz-abc:abc
      x-amz-xyz:xyz
      /
      """)

    it 'sorts headers by their name', ->
      headers['x-amz-mno'] = 'mno'
      headers['x-amz-Xyz'] = 'xyz'
      headers['x-amz-Abc'] = 'abc'
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      x-amz-abc:abc
      x-amz-mno:mno
      x-amz-xyz:xyz
      /
      """)

    it 'builds a canonical resource from the uri', ->
      uri = '/bucket_name/key'
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /bucket_name/key
      """)

    it 'appends the bucket to the path when it is part of the host', ->
      uri = '/'
      virtualHostedBucket = 'bucket-name'
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /bucket-name/
      """)

    it 'appends the subresource portion of the uri querystring', ->
      uri = '/?acl'
      virtualHostedBucket = 'bucket-name'
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /bucket-name/?acl
      """)

    it 'includes the sub resource value when present', ->
      uri = '/bucket_name/key?versionId=123'
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /bucket_name/key?versionId=123
      """)

    it 'omits non-sub-resource querystring params from the resource string', ->
      uri = '/?versionId=abc&next-marker=xyz'
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /?versionId=abc
      """)

    it 'sorts sub resources by name', ->
      uri = '/?logging&acl&website&torrent=123' # made up example
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /?acl&logging&torrent=123&website
      """)

    it 'sorts sub resources by name', ->
      uri = '/?logging&acl&website&torrent=123' # made up example
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /?acl&logging&torrent=123&website
      """)

    it 'includes the un-decoded query string param for sub resources', ->
      uri = '/?versionId=a%2Bb' # a+b
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /?versionId=a%2Bb
      """)

    it 'includes the non-encoded query string get header overrides', ->
      uri = '/?response-content-type=a%2Bb' # a+b
      expect(stringToSign()).toEqual("""
      POST


      DATE-STRING
      /?response-content-type=a+b
      """)

    it 'omits the date header when not present', ->
      delete headers['Date']
      expect(stringToSign()).toEqual("""
      POST



      /
      """)
