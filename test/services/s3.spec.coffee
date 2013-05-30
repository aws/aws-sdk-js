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

helpers = require('../helpers')
AWS = helpers.AWS
Stream = require('stream').Stream

require('../../lib/services/s3')

describe 'AWS.S3', ->

  s3 = null
  oldRegion = null
  request = (operation, params) ->
    req = new AWS.Request(s3, operation, params || {})
    req.service.addAllRequestListeners(req)
    req

  beforeEach ->
    oldRegion = AWS.config.region
    AWS.config.update(region: undefined) # use global region
    s3 = new AWS.S3()

  afterEach ->
    AWS.config.update(region: oldRegion)

  describe 'dnsCompatibleBucketName', ->

    it 'must be at least 3 characters', ->
      expect(s3.dnsCompatibleBucketName('aa')).toBe(false)

    it 'must not be longer than 63 characters', ->
      b = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      expect(s3.dnsCompatibleBucketName(b)).toBe(false)

    it 'must start with a lower-cased letter or number', ->
      expect(s3.dnsCompatibleBucketName('Abc')).toBe(false)
      expect(s3.dnsCompatibleBucketName('-bc')).toBe(false)
      expect(s3.dnsCompatibleBucketName('abc')).toBe(true)

    it 'must end with a lower-cased letter or number', ->
      expect(s3.dnsCompatibleBucketName('abC')).toBe(false)
      expect(s3.dnsCompatibleBucketName('ab-')).toBe(false)
      expect(s3.dnsCompatibleBucketName('abc')).toBe(true)

    it 'may not contain multiple contiguous dots', ->
      expect(s3.dnsCompatibleBucketName('abc.123')).toBe(true)
      expect(s3.dnsCompatibleBucketName('abc..123')).toBe(false)

    it 'may only contain letters numbers and dots', ->
      expect(s3.dnsCompatibleBucketName('abc123')).toBe(true)
      expect(s3.dnsCompatibleBucketName('abc_123')).toBe(false)

    it 'must not look like an ip address', ->
      expect(s3.dnsCompatibleBucketName('1.2.3.4')).toBe(false)
      expect(s3.dnsCompatibleBucketName('a.b.c.d')).toBe(true)

  describe 'endpoint', ->

    it 'sets hostname to s3.amazonaws.com when region is un-specified', ->
      s3 = new AWS.S3()
      expect(s3.endpoint.hostname).toEqual('s3.amazonaws.com')

    it 'sets hostname to s3.amazonaws.com when region is us-east-1', ->
      s3 = new AWS.S3({ region: 'us-east-1' })
      expect(s3.endpoint.hostname).toEqual('s3.amazonaws.com')

    it 'sets region to us-east-1 when unspecified', ->
      s3 = new AWS.S3({ region: 'us-east-1' })
      expect(s3.config.region).toEqual('us-east-1')

    it 'combines the region with s3 in the endpoint using a - instead of .', ->
      s3 = new AWS.S3({ region: 'us-west-1' })
      expect(s3.endpoint.hostname).toEqual('s3-us-west-1.amazonaws.com')

  describe 'building a request', ->
    build = (operation, params) ->
      req = request(operation, params)
      req.emit('build', [req])
      return req.httpRequest

    it 'obeys the configuration for s3ForcePathStyle', ->
      config = new AWS.Config({s3ForcePathStyle: true })
      s3 = new AWS.S3(config)
      expect(s3.config.s3ForcePathStyle).toEqual(true)
      req = build('headObject', {Bucket:'bucket', Key:'key'})
      expect(req.endpoint.hostname).toEqual('s3.amazonaws.com')
      expect(req.path).toEqual('/bucket/key')

    describe 'uri escaped params', ->
      it 'uri-escapes path and querystring params', ->
        # bucket param ends up as part of the hostname
        params = { Bucket: 'bucket', Key: 'a b c', VersionId: 'a&b' }
        req = build('headObject', params)
        expect(req.path).toEqual('/a%20b%20c?versionId=a%26b')

      it 'does not uri-escape forward slashes in the path', ->
        params = { Bucket: 'bucket', Key: 'k e/y' }
        req = build('headObject', params)
        expect(req.path).toEqual('/k%20e/y')

      it 'ensures a single forward slash exists', ->
        req = build('listObjects', { Bucket: 'bucket' })
        expect(req.path).toEqual('/')

        req = build('listObjects', { Bucket: 'bucket', MaxKeys:123 })
        expect(req.path).toEqual('/?max-keys=123')

      it 'ensures a single forward slash exists when querystring is present'

    describe 'virtual-hosted vs path-style bucket requests', ->

      describe 'HTTPS', ->

        beforeEach ->
          s3 = new AWS.S3({ sslEnabled: true })

        it 'puts dns-compat bucket names in the hostname', ->
          req = build('headObject', {Bucket:'bucket-name',Key:'abc'})
          expect(req.method).toEqual('HEAD')
          expect(req.endpoint.hostname).toEqual('bucket-name.s3.amazonaws.com')
          expect(req.path).toEqual('/abc')

        it 'ensures the path contains / at a minimum when moving bucket', ->
          req = build('listObjects', {Bucket:'bucket-name'})
          expect(req.endpoint.hostname).toEqual('bucket-name.s3.amazonaws.com')
          expect(req.path).toEqual('/')

        it 'puts dns-compat bucket names in path if they contain a dot', ->
          req = build('listObjects', {Bucket:'bucket.name'})
          expect(req.endpoint.hostname).toEqual('s3.amazonaws.com')
          expect(req.path).toEqual('/bucket.name')

        it 'puts dns-compat bucket names in path if configured to do so', ->
          s3 = new AWS.S3({ sslEnabled: true, s3ForcePathStyle: true })
          req = build('listObjects', {Bucket:'bucket-name'})
          expect(req.endpoint.hostname).toEqual('s3.amazonaws.com')
          expect(req.path).toEqual('/bucket-name')

        it 'puts dns-incompat bucket names in path', ->
          req = build('listObjects', {Bucket:'bucket_name'})
          expect(req.endpoint.hostname).toEqual('s3.amazonaws.com')
          expect(req.path).toEqual('/bucket_name')

      describe 'HTTP', ->

        beforeEach ->
          s3 = new AWS.S3({ sslEnabled: false })

        it 'puts dns-compat bucket names in the hostname', ->
          req = build('listObjects', {Bucket:'bucket-name'})
          expect(req.endpoint.hostname).toEqual('bucket-name.s3.amazonaws.com')
          expect(req.path).toEqual('/')

        it 'puts dns-compat bucket names in the hostname if they contain a dot', ->
          req = build('listObjects', {Bucket:'bucket.name'})
          expect(req.endpoint.hostname).toEqual('bucket.name.s3.amazonaws.com')
          expect(req.path).toEqual('/')

        it 'puts dns-incompat bucket names in path', ->
          req = build('listObjects', {Bucket:'bucket_name'})
          expect(req.endpoint.hostname).toEqual('s3.amazonaws.com')
          expect(req.path).toEqual('/bucket_name')

  # S3 returns a handful of errors without xml bodies (to match the
  # http spec) these tests ensure we give meaningful codes/messages for these.
  describe 'errors with no XML body', ->

    extractError = (statusCode, body) ->
      req = request('operation')
      resp = new AWS.Response(req)
      resp.httpResponse.body = new Buffer(body || '')
      resp.httpResponse.statusCode = statusCode
      req.emit('extractError', [resp])
      resp.error

    it 'handles 304 errors', ->
      error = extractError(304)
      expect(error.code).toEqual('NotModified')
      expect(error.message).toEqual(null)

    it 'handles 400 errors', ->
      error = extractError(400)
      expect(error.code).toEqual('BadRequest')
      expect(error.message).toEqual(null)

    it 'handles 403 errors', ->
      error = extractError(403)
      expect(error.code).toEqual('Forbidden')
      expect(error.message).toEqual(null)

    it 'handles 404 errors', ->
      error = extractError(404)
      expect(error.code).toEqual('NotFound')
      expect(error.message).toEqual(null)

    it 'misc errors not known to return an empty body', ->
      error = extractError(412) # made up
      expect(error.code).toEqual(412)
      expect(error.message).toEqual(null)

    it 'uses canned errors only when the body is empty', ->
      body = """
      <xml>
        <Code>ErrorCode</Code>
        <Message>ErrorMessage</Message>
      </xml>
      """
      error = extractError(403, body)
      expect(error.code).toEqual('ErrorCode')
      expect(error.message).toEqual('ErrorMessage')

  # tests from this point on are "special cases" for specific aws operations

  describe 'getBucketAcl', ->
    it 'correctly parses the ACL XML document', ->
      headers = { 'x-amz-request-id' : 'request-id' }
      body =
        """
        <AccessControlPolicy xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
          <AccessControlList>
            <Grant>
              <Grantee xsi:type="CanonicalUser" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <DisplayName>aws-ruby-sdk</DisplayName>
                <ID>id</ID>
              </Grantee>
              <Permission>FULL_CONTROL</Permission>
            </Grant>
            <Grant>
              <Grantee xsi:type="Group" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <URI>uri</URI>
              </Grantee>
              <Permission>READ</Permission>
            </Grant>
          </AccessControlList>
          <Owner>
            <DisplayName>aws-ruby-sdk</DisplayName>
            <ID>id</ID>
          </Owner>
        </AccessControlPolicy>
        """
      helpers.mockHttpResponse 200, headers, body
      s3.getBucketAcl (error, data) ->
        expect(error).toBe(null)
        expect(data).toEqual({
          Owner:
            DisplayName: 'aws-ruby-sdk',
            ID: 'id'
          Grants: [
            {
              Permission: 'FULL_CONTROL'
              Grantee:
                Type: 'CanonicalUser',
                DisplayName: 'aws-ruby-sdk'
                ID: 'id'
            },
            {
              Permission : 'READ'
              Grantee:
                Type: 'Group',
                URI: 'uri'
            }
          ],
          RequestId : 'request-id'
        })

  describe 'putBucketAcl', ->
    it 'correctly builds the ACL XML document', ->
      xml =
        """
        <AccessControlPolicy xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
          <AccessControlList>
            <Grant>
              <Grantee xsi:type="CanonicalUser" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <DisplayName>aws-ruby-sdk</DisplayName>
                <ID>id</ID>
              </Grantee>
              <Permission>FULL_CONTROL</Permission>
            </Grant>
            <Grant>
              <Grantee xsi:type="Group" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <URI>uri</URI>
              </Grantee>
              <Permission>READ</Permission>
            </Grant>
          </AccessControlList>
          <Owner>
            <DisplayName>aws-ruby-sdk</DisplayName>
            <ID>id</ID>
          </Owner>
        </AccessControlPolicy>
        """
      helpers.mockHttpResponse 200, {}, ''
      params =
        AccessControlPolicy:
          Owner:
            DisplayName: 'aws-ruby-sdk',
            ID: 'id'
          Grants: [
            {
              Permission: 'FULL_CONTROL'
              Grantee:
                Type: 'CanonicalUser',
                DisplayName: 'aws-ruby-sdk'
                ID: 'id'
            },
            {
              Permission : 'READ'
              Grantee:
                Type: 'Group',
                URI: 'uri'
            }
          ]
      s3.putBucketAcl params, (err, data) ->
        helpers.matchXML(this.request.httpRequest.body, xml)

  describe 'completeMultipartUpload', ->

    it 'returns data when the resp is 200 with valid response', ->
      headers =
        'x-amz-id-2': 'Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg=='
        'x-amz-request-id': '656c76696e6727732072657175657374'
      body =
        """
        <?xml version="1.0" encoding="UTF-8"?>
        <CompleteMultipartUploadResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
          <Location>http://Example-Bucket.s3.amazonaws.com/Example-Object</Location>
          <Bucket>Example-Bucket</Bucket>
          <Key>Example-Object</Key>
          <ETag>"3858f62230ac3c915f300c664312c11f-9"</ETag>
        </CompleteMultipartUploadResult>
        """

      helpers.mockHttpResponse 200, headers, body
      s3.completeMultipartUpload (error, data) ->
        expect(error).toBe(null)
        expect(data).toEqual({
          Location: 'http://Example-Bucket.s3.amazonaws.com/Example-Object'
          Bucket: 'Example-Bucket'
          Key: 'Example-Object'
          ETag: '"3858f62230ac3c915f300c664312c11f-9"'
          RequestId: '656c76696e6727732072657175657374'
        })

    it 'returns an error when the resp is 200 with an error xml document', ->
      body =
      """
      <?xml version="1.0" encoding="UTF-8"?>
      <Error>
        <Code>InternalError</Code>
        <Message>We encountered an internal error. Please try again.</Message>
        <RequestId>656c76696e6727732072657175657374</RequestId>
        <HostId>Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==</HostId>
      </Error>
      """

      helpers.mockHttpResponse 200, {}, body
      s3.completeMultipartUpload (error, data) ->
        expect(error instanceof Error).toBeTruthy()
        expect(error.code).toEqual('InternalError')
        expect(error.message).toEqual('We encountered an internal error. Please try again.')
        expect(error.statusCode).toEqual(200)
        expect(error.retryable).toEqual(true)
        expect(data).toEqual(null)

  describe 'getBucketLocation', ->

    it 'returns null for the location constraint when not present', ->
      body = '<?xml version="1.0" encoding="UTF-8"?>\n<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/"/>'
      helpers.mockHttpResponse 200, {}, body
      s3.getBucketLocation (error, data) ->
        expect(error).toBe(null)
        expect(data).toEqual({})

    it 'parses the location constraint from the root xml', ->
      headers = { 'x-amz-request-id': 'abcxyz' }
      body = '<?xml version="1.0" encoding="UTF-8"?>\n<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/">EU</LocationConstraint>'
      helpers.mockHttpResponse 200, headers, body
      s3.getBucketLocation (error, data) ->
        expect(error).toBe(null)
        expect(data).toEqual({
          LocationConstraint: 'EU',
          RequestId: 'abcxyz',
        })

  describe 'createBucket', ->
    it 'auto-populates the LocationConstraint based on the region', ->
      loc = null
      s3 = new AWS.S3(region:'eu-west-1')
      s3.makeRequest = (op, params) ->
        loc = params.CreateBucketConfiguration.LocationConstraint
      s3.createBucket(Bucket:'name')
      expect(loc).toEqual('eu-west-1')

    it 'correctly builds the xml', ->

  AWS.util.each AWS.S3.prototype.computableChecksumOperations, (operation) ->
    describe operation, ->
      it 'forces Content-MD5 header parameter', ->
        helpers.mockHttpResponse 200, {}, ''
        resp = s3[operation](Bucket: 'bucket', ContentMD5: '000').send()
        hash = AWS.util.crypto.md5(resp.request.httpRequest.body, 'base64')
        expect(resp.request.httpRequest.headers['Content-MD5']).toEqual(hash)

  describe 'willComputeChecksums', ->
    beforeEach ->
      helpers.mockHttpResponse 200, {}, ''

    willCompute = (operation, opts) ->
      compute = opts.computeChecksums
      s3 = new AWS.S3(computeChecksums: compute)
      resp = s3.makeRequest(operation, Bucket: 'example', ContentMD5: opts.hash).send()
      checksum = resp.request.httpRequest.headers['Content-MD5']
      if opts.hash != undefined
        expect(checksum).toEqual(opts.hash)
      else
        realChecksum = AWS.util.crypto.md5(resp.request.httpRequest.body, 'base64')
        expect(checksum).toEqual(realChecksum)

    it 'computes checksums if the operation requires it', ->
      willCompute 'deleteObjects', computeChecksums: true
      willCompute 'putBucketCors', computeChecksums: true
      willCompute 'putBucketLifecycle', computeChecksums: true
      willCompute 'putBucketTagging', computeChecksums: true

    it 'computes checksums if computeChecksums is off and operation requires it', ->
      willCompute 'deleteObjects', computeChecksums: false
      willCompute 'putBucketCors', computeChecksums: false
      willCompute 'putBucketLifecycle', computeChecksums: false
      willCompute 'putBucketTagging', computeChecksums: false

    it 'does not compute checksums if computeChecksums is off', ->
      willCompute 'putObject', computeChecksums: false, hash: null

    it 'does not compute checksums if computeChecksums is on and ContentMD5 is provided', ->
      willCompute 'putBucketAcl', computeChecksums: true, hash: '000'

    it 'does not compute checksums for Stream objects', ->
      s3 = new AWS.S3(computeChecksums: true)
      resp = s3.putObject(Bucket: 'example', Key: 'foo', Body: new Stream).send()
      expect(resp.request.httpRequest.headers['Content-MD5']).toEqual(undefined)

    it 'computes checksums if computeChecksums is on and ContentMD5 is not provided',->
      willCompute 'putBucketAcl', computeChecksums: true

  describe 'getSignedUrl', ->
    date = null
    beforeEach ->
      date = AWS.util.date.getDate
      AWS.util.date.getDate = -> new Date(0)
    afterEach ->
      AWS.util.date.getDate = date

    it 'gets a signed URL for getObject', ->
      url = s3.getSignedUrl('getObject', Bucket: 'bucket', Key: 'key')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=uefzBaGpqvO9QhGtT%2BbYda0pgQY%3D')

    it 'gets a signed URL with Expires time', ->
      url = s3.getSignedUrl('getObject', Bucket: 'bucket', Key: 'key', Expires: 60)
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=60&Signature=ZJKBOuhI99B2OZdkGSOmfG86BOI%3D')

    it 'gets a signed URL with callback', ->
      url = null
      runs ->
        s3.getSignedUrl 'getObject', Bucket: 'bucket', Key: 'key', (err, value) -> url = value
      waitsFor -> url
      runs ->
        expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=uefzBaGpqvO9QhGtT%2BbYda0pgQY%3D')

    it 'gets a signed URL for putObject with no body', ->
      url = s3.getSignedUrl('putObject', Bucket: 'bucket', Key: 'key')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=h%2FphNvPoGxx9qq2U7Zhbfqgi0Xs%3D')

    it 'gets a signed URL for putObject with a body (and checksum)', ->
      url = s3.getSignedUrl('putObject', Bucket: 'bucket', Key: 'key', Body: 'body')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Content-MD5=hBotaJrYa9FhFEdFPCLG%2FA%3D%3D&Expires=900&Signature=7%2BXiHEwB%2B3nSg2rhTyatSigkGPI%3D')

    it 'gets a signed URL and appends to existing query parameters', ->
      url = s3.getSignedUrl('listObjects', Bucket: 'bucket', Prefix: 'prefix')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/?prefix=prefix&AWSAccessKeyId=akid&Expires=900&Signature=fWeCHJBop4LyDXm2%2F%2BvR%2BqzH5zk%3D')
