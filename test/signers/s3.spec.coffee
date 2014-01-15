AWS = require('../helpers').AWS

describe 'AWS.Signers.S3', ->

  # these can be overriden in tests
  method = null
  path = null
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
    path = '/'
    virtualHostedBucket = null
    date = new Date(0)
    headers = {}
    body = null
    accessKeyId = 'akid'
    secretAccessKey = 'secret'
    sessionToken = null

  buildRequest = () ->
    req = new AWS.HttpRequest('https://s3.amazonaws.com')
    req.method = method
    req.path = path
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
    signer = new AWS.Signers.S3(req || buildRequest())
    signer.addAuthorization(credentials(), date)
    signer.request

  stringToSign = (req) ->
    signer = new AWS.Signers.S3(req || buildRequest())
    signer.stringToSign()

  describe 'addAuthorization', ->
    it 'sets the date header when not present', ->
      req = buildRequest()
      addAuth(req)
      expect(req.headers['X-Amz-Date']).toEqual(AWS.util.date.rfc822(date))

    it 'overwrites Date if present', ->
      req = buildRequest()
      req.headers['X-Amz-Date'] = 'date-string'
      addAuth(req)
      expect(req.headers['X-Amz-Date']).toEqual(AWS.util.date.rfc822(date))

    it 'omits the security token header when session token is blank', ->
      sessionToken = null
      req = addAuth()
      expect(req.headers['x-amz-security-token']).toEqual(undefined)

    it 'adds a security token header when session token available', ->
      sessionToken = 'session'
      req = addAuth()
      expect(req.headers['x-amz-security-token']).toEqual('session')

    it 'adds an Authorization header which contains akid and signature', ->

      creds = { accessKeyId: 'AKID', secretAccessKey: 'secret' }

      req = buildRequest()

      signer = new AWS.Signers.S3(req)

      spyOn(signer, 'stringToSign')
      signer.stringToSign.andReturn('string-to-sign')
      signer.addAuthorization(creds, date)

      expect(req.headers['Authorization']).toEqual('AWS AKID:Gg5WLabTOvH0WMd15wv7lWe4zK0=')

    it 'properly signs special characters', ->

      creds = { accessKeyId: 'AKID', secretAccessKey: 'secret' }

      req = buildRequest()

      signer = new AWS.Signers.S3(req)

      spyOn(signer, 'stringToSign')
      signer.stringToSign.andReturn('!@#$%^&*();\':"{}[],./?`~')
      signer.addAuthorization(creds, date)

      expect(req.headers['Authorization']).toEqual('AWS AKID:2E04i7QCa0uZTYtxue9dEqto3dg=')


  describe 'stringToSign', ->

    beforeEach ->
      headers['X-Amz-Date'] = 'DATE-STRING'

    it 'builds a basic string to sign', ->
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /
      """)

    it 'includes content md5 and content type when present', ->
      headers['Content-Type'] = 'CONTENT-TYPE'
      headers['Content-MD5'] = 'CONTENT-MD5'
      expect(stringToSign()).toEqual("""
      POST
      CONTENT-MD5
      CONTENT-TYPE

      x-amz-date:DATE-STRING
      /
      """)

    it 'includes the http method, whatever it is', ->
      method = 'VERB'
      expect(stringToSign()).toEqual("""
      VERB



      x-amz-date:DATE-STRING
      /
      """)

    it 'includes any x-amz- style headers, but not others', ->
      headers['X-Amz-Abc'] = 'abc'
      headers['X-Amz-Xyz'] = 'xyz'
      headers['random-header'] = 'random'
      expect(stringToSign()).toEqual("""
      POST



      x-amz-abc:abc
      x-amz-date:DATE-STRING
      x-amz-xyz:xyz
      /
      """)

    it 'includes x-amz- headers that are lower-cased', ->
      headers['x-amz-Abc'] = 'abc'
      headers['x-amz-Xyz'] = 'xyz'
      headers['random-header'] = 'random'
      expect(stringToSign()).toEqual("""
      POST



      x-amz-abc:abc
      x-amz-date:DATE-STRING
      x-amz-xyz:xyz
      /
      """)

    it 'sorts headers by their name', ->
      headers['x-amz-mno'] = 'mno'
      headers['x-amz-Xyz'] = 'xyz'
      headers['x-amz-Abc'] = 'abc'
      expect(stringToSign()).toEqual("""
      POST



      x-amz-abc:abc
      x-amz-date:DATE-STRING
      x-amz-mno:mno
      x-amz-xyz:xyz
      /
      """)

    it 'builds a canonical resource from the path', ->
      path = '/bucket_name/key'
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /bucket_name/key
      """)

    it 'appends the bucket to the path when it is part of the hostname', ->
      path = '/'
      virtualHostedBucket = 'bucket-name'
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /bucket-name/
      """)

    it 'appends the subresource portion of the path querystring', ->
      path = '/?acl'
      virtualHostedBucket = 'bucket-name'
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /bucket-name/?acl
      """)

    it 'includes the sub resource value when present', ->
      path = '/bucket_name/key?versionId=123'
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /bucket_name/key?versionId=123
      """)

    it 'omits non-sub-resource querystring params from the resource string', ->
      path = '/?versionId=abc&next-marker=xyz'
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /?versionId=abc
      """)

    it 'sorts sub resources by name', ->
      path = '/?logging&acl&website&torrent=123' # made up example
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /?acl&logging&torrent=123&website
      """)

    it 'sorts sub resources by name', ->
      path = '/?logging&acl&website&torrent=123' # made up example
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /?acl&logging&torrent=123&website
      """)

    it 'includes the un-decoded query string param for sub resources', ->
      path = '/?versionId=a%2Bb' # a+b
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /?versionId=a%2Bb
      """)

    it 'includes the non-encoded query string get header overrides', ->
      path = '/?response-content-type=a%2Bb' # a+b
      expect(stringToSign()).toEqual("""
      POST



      x-amz-date:DATE-STRING
      /?response-content-type=a+b
      """)

    it 'omits the date header when not present', ->
      delete headers['X-Amz-Date']
      expect(stringToSign()).toEqual("""
      POST



      /
      """)
