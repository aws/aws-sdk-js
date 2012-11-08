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

AWS = require('../../../lib/core')
require('../../../lib/services/s3')

describe 'AWS.S3', ->

  s3 = null

  beforeEach ->
    s3 = new AWS.S3()

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

    it 'sets host to s3.amazonaws.com when region is un-specified', ->
      s3 = new AWS.S3()
      expect(s3.endpoint.host).toEqual('s3.amazonaws.com')

    it 'sets host to s3.amazonaws.com when region is us-east-1', ->
      s3 = new AWS.S3({ region: 'us-east-1' })
      expect(s3.endpoint.host).toEqual('s3.amazonaws.com')

    it 'sets region to us-east-1 when unspecified', ->
      s3 = new AWS.S3({ region: 'us-east-1' })
      expect(s3.endpoint.region).toEqual('us-east-1')

    it 'combines the region with s3 in the endpoint using a - instead of .', ->
      s3 = new AWS.S3({ region: 'us-west-1' })
      expect(s3.endpoint.host).toEqual('s3-us-west-1.amazonaws.com')

  describe 'buildRequest', ->

    it 'returns a http request object', ->
      req = s3.buildRequest('listBuckets')
      expect(req.constructor).toEqual(AWS.HttpRequest)

    it 'obeys the configuration for s3ForcePathStyle', ->
      config = new AWS.Config({s3ForcePathStyle: true })
      s3 = new AWS.S3(config)
      expect(s3.config.s3ForcePathStyle).toEqual(true)
      req = s3.buildRequest('headObject', {Bucket:'bucket', Key:'key'})
      expect(req.endpoint.host).toEqual('s3.amazonaws.com')
      expect(req.uri).toEqual('/bucket/key')

    describe 'uri escaped params', ->

      it 'uri-escapes path and querystring params', ->
        # bucket param ends up as part of the host
        params = { Bucket: 'bucket', Key: 'a b c', VersionId: 'a&b' }
        req = s3.buildRequest('headObject', params)
        expect(req.uri).toEqual('/a%20b%20c?versionId=a%26b')

      it 'does not uri-escape forward slashes in the path', ->
        params = { Bucket: 'bucket', Key: 'k e/y' }
        req = s3.buildRequest('headObject', params)
        expect(req.uri).toEqual('/k%20e/y')

      it 'ensures a single forward slash exists', ->

        req = s3.buildRequest('listObjects', { Bucket: 'bucket' })
        expect(req.uri).toEqual('/')

        req = s3.buildRequest('listObjects', { Bucket: 'bucket', MaxKeys:123 })
        expect(req.uri).toEqual('/?max-keys=123')

      it 'ensures a single forward slash exists when querystring is present', ->

    describe 'vitual-hosted vs path-style bucket requests', ->

      describe 'HTTPS', ->

        beforeEach ->
          s3 = new AWS.S3({ useSSL: true, region: 'us-east-1' })

        it 'puts dns-compat bucket names in the host', ->
          req = s3.buildRequest('headObject', {Bucket:'bucket-name',Key:'abc'})
          expect(req.method).toEqual('HEAD')
          expect(req.endpoint.host).toEqual('bucket-name.s3.amazonaws.com')
          expect(req.uri).toEqual('/abc')

        it 'ensures the path contains / at a minimum when moving bucket', ->
          req = s3.buildRequest('listObjects', {Bucket:'bucket-name'})
          expect(req.endpoint.host).toEqual('bucket-name.s3.amazonaws.com')
          expect(req.uri).toEqual('/')

        it 'puts dns-compat bucket names in path if they contain a dot', ->
          req = s3.buildRequest('listObjects', {Bucket:'bucket.name'})
          expect(req.endpoint.host).toEqual('s3.amazonaws.com')
          expect(req.uri).toEqual('/bucket.name')

        it 'puts dns-compat bucket names in path if configured to do so', ->
          s3 = new AWS.S3({ useSSL: true, s3ForcePathStyle: true })
          req = s3.buildRequest('listObjects', {Bucket:'bucket-name'})
          expect(req.endpoint.host).toEqual('s3.amazonaws.com')
          expect(req.uri).toEqual('/bucket-name')

        it 'puts dns-incompat bucket names in path', ->
          req = s3.buildRequest('listObjects', {Bucket:'bucket_name'})
          expect(req.endpoint.host).toEqual('s3.amazonaws.com')
          expect(req.uri).toEqual('/bucket_name')

      describe 'HTTP', ->

        beforeEach ->
          s3 = new AWS.S3({ useSSL: false, region: 'us-east-1' })

        it 'puts dns-compat bucket names in the host', ->
          req = s3.buildRequest('listObjects', {Bucket:'bucket-name'})
          expect(req.endpoint.host).toEqual('bucket-name.s3.amazonaws.com')
          expect(req.uri).toEqual('/')

        it 'puts dns-compat bucket names in the host if they contain a dot', ->
          req = s3.buildRequest('listObjects', {Bucket:'bucket.name'})
          expect(req.endpoint.host).toEqual('bucket.name.s3.amazonaws.com')
          expect(req.uri).toEqual('/')

        it 'puts dns-incompat bucket names in path', ->
          req = s3.buildRequest('listObjects', {Bucket:'bucket_name'})
          expect(req.endpoint.host).toEqual('s3.amazonaws.com')
          expect(req.uri).toEqual('/bucket_name')

  # S3 returns a handful of errors without xml bodies (to match the http spec)
  # these tests ensure we give meaningful codes/messages for these.
  describe 'errors with no XML body', ->

    extractError = (resp) ->
      s3.extractError(resp)

    it 'handles 304 errors', ->
      resp = new AWS.HttpResponse()
      resp.statusCode = 304
      error = extractError(resp)
      expect(error.code).toEqual('NotModified')
      expect(error.message).toEqual(304)

    it 'handles 403 errors', ->
      resp = new AWS.HttpResponse()
      resp.statusCode = 403
      error = extractError(resp)
      expect(error.code).toEqual('Forbidden')
      expect(error.message).toEqual(403)

    it 'handles 404 errors', ->
      resp = new AWS.HttpResponse()
      resp.statusCode = 404
      error = extractError(resp)
      expect(error.code).toEqual('NotFound')
      expect(error.message).toEqual(404)

    it 'misc errors not known to return an empty body', ->
      resp = new AWS.HttpResponse()
      resp.statusCode = 412 # made up
      error = extractError(resp)
      expect(error.code).toEqual(412)
      expect(error.message).toEqual(null)

  # tests from this point on are "special cases" for specific aws operations

  describe 'completeMultipartUpload', ->

    it 'returns data when the resp is 200 with valid response', ->
      resp =
        statusCode: 200
        headers:
          'x-amz-id-2': 'Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg=='
          'x-amz-request-id': '656c76696e6727732072657175657374'
        body: """
        <?xml version="1.0" encoding="UTF-8"?>
        <CompleteMultipartUploadResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
          <Location>http://Example-Bucket.s3.amazonaws.com/Example-Object</Location>
          <Bucket>Example-Bucket</Bucket>
          <Key>Example-Object</Key>
          <ETag>"3858f62230ac3c915f300c664312c11f-9"</ETag>
        </CompleteMultipartUploadResult>
        """
      s3.parseResponse resp, 'completeMultipartUpload', (error, data) ->
        expect(error).toBe(null)
        expect(data).toEqual({
          Location: 'http://Example-Bucket.s3.amazonaws.com/Example-Object'
          Bucket: 'Example-Bucket'
          Key: 'Example-Object'
          ETag: '"3858f62230ac3c915f300c664312c11f-9"'
          RequestId: '656c76696e6727732072657175657374'
        })

    it 'returns an error when the resp is 200 with an error xml document', ->
      resp =
        statusCode: 200
        headers: {}
        body: """
          <?xml version="1.0" encoding="UTF-8"?>




          <Error>
            <Code>InternalError</Code>
            <Message>We encountered an internal error. Please try again.</Message>
            <RequestId>656c76696e6727732072657175657374</RequestId>
            <HostId>Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==</HostId>
          </Error>
        """
      s3.parseResponse resp, 'completeMultipartUpload', (error, data) ->
        expect(error).toEqual({
          code: 'InternalError',
          message: 'We encountered an internal error. Please try again.',
          statusCode: 200,
          retryable: true
        })
        expect(data).toEqual(null)

  describe 'getBucketLocation', ->

    it 'returns null for the location constraint when not present', ->
      resp =
        statusCode: 200
        headers: {}
        body: '<?xml version="1.0" encoding="UTF-8"?>\n<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/"/>'
      s3.parseResponse resp, 'getBucketLocation', (error, data) ->
        expect(error).toBe(null)
        expect(data).toEqual({})

    it 'parses the location constraint from the root xml', ->
      resp =
        statusCode: 200
        headers: { 'x-amz-request-id': 'abcxyz' }
        body: '<?xml version="1.0" encoding="UTF-8"?>\n<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/">EU</LocationConstraint>'
      s3.parseResponse resp, 'getBucketLocation', (error, data) ->
        expect(error).toBe(null)
        expect(data).toEqual({
          LocationConstraint: 'EU',
          RequestId: 'abcxyz',
        })
