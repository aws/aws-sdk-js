helpers = require('../helpers')
AWS = helpers.AWS
Stream = require('stream').Stream
Buffer = AWS.util.Buffer

describe 'AWS.S3', ->

  s3 = null
  request = (operation, params) -> s3.makeRequest(operation, params)

  beforeEach ->
    s3 = new AWS.S3(region: undefined)

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
      s3 = new AWS.S3(region: undefined)
      expect(s3.endpoint.hostname).toEqual('s3.amazonaws.com')

    it 'sets hostname to s3.amazonaws.com when region is us-east-1', ->
      s3 = new AWS.S3(region: 'us-east-1')
      expect(s3.endpoint.hostname).toEqual('s3.amazonaws.com')

    it 'sets region to us-east-1 when unspecified', ->
      s3 = new AWS.S3(region: 'us-east-1')
      expect(s3.config.region).toEqual('us-east-1')

    it 'combines the region with s3 in the endpoint using a - instead of .', ->
      s3 = new AWS.S3(region: 'us-west-1')
      expect(s3.endpoint.hostname).toEqual('s3-us-west-1.amazonaws.com')

  describe 'building a request', ->
    build = (operation, params) ->
      request(operation, params).build().httpRequest

    it 'obeys the configuration for s3ForcePathStyle', ->
      config = new AWS.Config(s3ForcePathStyle: true, accessKeyId: 'AKID', secretAccessKey: 'SECRET')
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

    describe 'adding Content-Type', ->
      beforeEach -> spyOn(AWS.util, 'isBrowser').andReturn(true)

      it 'adds default content-type when not supplied', ->
        req = build('putObject', Bucket: 'bucket', Key: 'key', Body: 'body')
        expect(req.headers['Content-Type']).toEqual('application/octet-stream; charset=UTF-8')

      it 'adds charset to existing content-type if not supplied', ->
        req = build('putObject', Bucket: 'bucket', Key: 'key', Body: 'body', ContentType: 'text/html')
        expect(req.headers['Content-Type']).toEqual('text/html; charset=UTF-8')

      it 'normalized charset to uppercase', ->
        req = build('putObject', Bucket: 'bucket', Key: 'key', Body: 'body', ContentType: 'text/html; charset=utf-8')
        expect(req.headers['Content-Type']).toEqual('text/html; charset=UTF-8')

      it 'does not add charset to non-string data', ->
        req = build('putObject', Bucket: 'bucket', Key: 'key', Body: new Buffer('body'), ContentType: 'image/png')
        expect(req.headers['Content-Type']).toEqual('image/png')

    describe 'virtual-hosted vs path-style bucket requests', ->

      describe 'HTTPS', ->

        beforeEach ->
          s3 = new AWS.S3(sslEnabled: true, region: undefined)

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
          s3 = new AWS.S3(sslEnabled: true, s3ForcePathStyle: true, region: undefined)
          req = build('listObjects', {Bucket:'bucket-name'})
          expect(req.endpoint.hostname).toEqual('s3.amazonaws.com')
          expect(req.path).toEqual('/bucket-name')

        it 'puts dns-incompat bucket names in path', ->
          req = build('listObjects', {Bucket:'bucket_name'})
          expect(req.endpoint.hostname).toEqual('s3.amazonaws.com')
          expect(req.path).toEqual('/bucket_name')

      describe 'HTTP', ->

        beforeEach ->
          s3 = new AWS.S3(sslEnabled: false, region: undefined)

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

  describe 'SSE support', ->
    beforeEach -> s3 = new AWS.S3

    it 'encodes SSECustomerKey and fills in MD5', ->
      req = s3.putObject
        Bucket: 'bucket', Key: 'key', Body: 'data'
        SSECustomerKey: 'KEY', SSECustomerAlgorithm: 'AES256'
      req.build()
      expect(req.httpRequest.headers['x-amz-server-side-encryption-customer-key']).
        toEqual('S0VZ')
      expect(req.httpRequest.headers['x-amz-server-side-encryption-customer-key-MD5']).
        toEqual('TzFsSjRNSnJoM1o2UjFLaWR0NlZjQT09')

    it 'encodes CopySourceSSECustomerKey and fills in MD5', ->
      req = s3.copyObject
        Bucket: 'bucket', Key: 'key', CopySource: 'bucket/oldkey', Body: 'data'
        CopySourceSSECustomerKey: 'KEY', CopySourceSSECustomerAlgorithm: 'AES256'
      req.build()
      expect(req.httpRequest.headers['x-amz-copy-source-server-side-encryption-customer-key']).
        toEqual('S0VZ')
      expect(req.httpRequest.headers['x-amz-copy-source-server-side-encryption-customer-key-MD5']).
        toEqual('TzFsSjRNSnJoM1o2UjFLaWR0NlZjQT09')

  describe 'retry behavior', ->
    it 'retries RequestTimeout errors', ->
      s3.config.maxRetries = 3
      helpers.mockHttpResponse 400, {},
        '<xml><Code>RequestTimeout</Code><Message>message</Message></xml>'
      s3.putObject (err, data) ->
        expect(@retryCount).toEqual(s3.config.maxRetries)

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
                <DisplayName>aws-sdk</DisplayName>
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
            <DisplayName>aws-sdk</DisplayName>
            <ID>id</ID>
          </Owner>
        </AccessControlPolicy>
        """
      helpers.mockHttpResponse 200, headers, body
      s3.getBucketAcl (error, data) ->
        expect(error).toBe(null)
        expect(data).toEqual({
          Owner:
            DisplayName: 'aws-sdk',
            ID: 'id'
          Grants: [
            {
              Permission: 'FULL_CONTROL'
              Grantee:
                Type: 'CanonicalUser'
                DisplayName: 'aws-sdk'
                ID: 'id'
            },
            {
              Permission : 'READ'
              Grantee:
                Type: 'Group'
                URI: 'uri'
            }
          ]
        })

  describe 'putBucketAcl', ->
    it 'correctly builds the ACL XML document', ->
      xml =
        """
        <AccessControlPolicy xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
          <AccessControlList>
            <Grant>
              <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser">
                <DisplayName>aws-sdk</DisplayName>
                <ID>id</ID>
              </Grantee>
              <Permission>FULL_CONTROL</Permission>
            </Grant>
            <Grant>
              <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group">
                <URI>uri</URI>
              </Grantee>
              <Permission>READ</Permission>
            </Grant>
          </AccessControlList>
          <Owner>
            <DisplayName>aws-sdk</DisplayName>
            <ID>id</ID>
          </Owner>
        </AccessControlPolicy>
        """
      helpers.mockHttpResponse 200, {}, ''
      params =
        AccessControlPolicy:
          Owner:
            DisplayName: 'aws-sdk',
            ID: 'id'
          Grants: [
            {
              Permission: 'FULL_CONTROL'
              Grantee:
                Type: 'CanonicalUser',
                DisplayName: 'aws-sdk'
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
        })
        expect(this.requestId).toEqual('656c76696e6727732072657175657374')

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
        expect(data).toEqual(LocationConstraint: 'EU')
        expect(this.requestId).toEqual('abcxyz')

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
        req = s3[operation](Bucket: 'bucket', ContentMD5: '000').build()
        hash = AWS.util.crypto.md5(req.httpRequest.body, 'base64')
        expect(req.httpRequest.headers['Content-MD5']).toEqual(hash)

  describe 'willComputeChecksums', ->
    willCompute = (operation, opts) ->
      compute = opts.computeChecksums
      s3 = new AWS.S3(computeChecksums: compute)
      req = s3.makeRequest(operation, Bucket: 'example', ContentMD5: opts.hash).build()
      checksum = req.httpRequest.headers['Content-MD5']
      if opts.hash != undefined
        expect(checksum).toEqual(opts.hash)
      else
        realChecksum = AWS.util.crypto.md5(req.httpRequest.body, 'base64')
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
      req = s3.putObject(Bucket: 'example', Key: 'foo', Body: new Stream)
      expect(req.build(->).httpRequest.headers['Content-MD5']).toEqual(undefined)

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
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=4mlYnRmz%2BBFEPrgYz5tXcl9Wc4w%3D&x-amz-security-token=session')

    it 'gets a signed URL with Expires time', ->
      url = s3.getSignedUrl('getObject', Bucket: 'bucket', Key: 'key', Expires: 60)
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=60&Signature=kH2pMK%2Fgm7cCZKVG8GHVTRGXKzY%3D&x-amz-security-token=session')

    it 'gets a signed URL with expiration and bound bucket parameters', ->
      s3 = new AWS.S3(paramValidation: true, region: undefined, params: Bucket: 'bucket')
      url = s3.getSignedUrl('getObject', Key: 'key', Expires: 60)
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=60&Signature=kH2pMK%2Fgm7cCZKVG8GHVTRGXKzY%3D&x-amz-security-token=session')

    it 'generates the right URL with a custom endpoint', ->
      s3 = new AWS.S3(endpoint: 'https://foo.bar.baz:555/prefix', params: Bucket: 'bucket')
      url = s3.getSignedUrl('getObject', Key: 'key', Expires: 60)
      expect(url).toEqual('https://bucket.foo.bar.baz:555/prefix/key?AWSAccessKeyId=akid&Expires=60&Signature=zA6k0cQqDkTZgLamfoYLOd%2Bqfg8%3D&x-amz-security-token=session')

    it 'gets a signed URL with callback', ->
      url = null
      runs ->
        s3.getSignedUrl 'getObject', Bucket: 'bucket', Key: 'key', (err, value) -> url = value
      waitsFor -> url
      runs ->
        expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=4mlYnRmz%2BBFEPrgYz5tXcl9Wc4w%3D&x-amz-security-token=session')

    it 'gets a signed URL for putObject with no body', ->
      url = s3.getSignedUrl('putObject', Bucket: 'bucket', Key: 'key')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=J%2BnWZ0lPUfLV0kio8ONhJmAttGc%3D&x-amz-security-token=session')

    it 'gets a signed URL for putObject with special characters', ->
      url = s3.getSignedUrl('putObject', Bucket: 'bucket', Key: '!@#$%^&*();\':"{}[],./?`~')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/%21%40%23%24%25%5E%26%2A%28%29%3B%27%3A%22%7B%7D%5B%5D%2C./%3F%60~?AWSAccessKeyId=akid&Expires=900&Signature=9nEltJACZKsriZqU2cmRel6g8LQ%3D&x-amz-security-token=session')

    it 'gets a signed URL for putObject with a body (and checksum)', ->
      url = s3.getSignedUrl('putObject', Bucket: 'bucket', Key: 'key', Body: 'body')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Content-MD5=hBotaJrYa9FhFEdFPCLG%2FA%3D%3D&Expires=900&Signature=4ycA2tpHKxfFnNCdqnK1d5BG8gc%3D&x-amz-security-token=session')

    it 'gets a signed URL and appends to existing query parameters', ->
      url = s3.getSignedUrl('listObjects', Bucket: 'bucket', Prefix: 'prefix')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/?AWSAccessKeyId=akid&Expires=900&Signature=8W3pwZPfgucCyPNg1MsoYq8h5zw%3D&prefix=prefix&x-amz-security-token=session')

    it 'gets a signed URL for getObject using SigV4', ->
      s3 = new AWS.S3(signatureVersion: 'v4', region: undefined)
      url = s3.getSignedUrl('getObject', Bucket: 'bucket', Key: 'object')
      expect(url).toEqual('https://bucket.s3.amazonaws.com/object?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Security-Token=session&X-Amz-Signature=05ae40d2d22c93549a1de0686232ff56baf556876ec497d0d8349431f98b8dfe&X-Amz-SignedHeaders=host')

    it 'errors when expiry time is greater than a week out on SigV4', ->
      err = null; data = null
      s3 = new AWS.S3(signatureVersion: 'v4', region: undefined)
      params = Bucket: 'bucket', Key: 'object', Expires: 60 * 60 * 24 * 7 + 120
      error = 'Presigning does not support expiry time greater than a week with SigV4 signing.'
      runs ->
        s3.getSignedUrl 'getObject', params, (e, d) -> data = d; err = e
      waitsFor -> err || data
      runs ->
        expect(err).not.toEqual(null)
        expect(err.message).toEqual(error)
        #expect(-> s3.getSignedUrl('getObject', params)).toThrow(error) # sync mode
