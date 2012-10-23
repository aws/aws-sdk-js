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

  describe 'buildRequest', ->

    s3 = new AWS.S3()

    it 'returns a http request object', ->
      req = s3.buildRequest('listBuckets')
      expect(req.constructor).toEqual(AWS.HttpRequest)

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

    describe 'buildRequest', ->

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

