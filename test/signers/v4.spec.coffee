helpers = require('../helpers')
AWS = helpers.AWS

beforeEach ->
  spyOn(AWS.util, 'userAgent').andReturn('aws-sdk-js/0.1')

buildRequest = ->
  ddb = new AWS.DynamoDB({region: 'region', endpoint: 'localhost', apiVersion: '2011-12-05'})
  ddb.makeRequest('listTables', {ExclusiveStartTableName: 'bår'}).build().httpRequest

buildSigner = (request) ->
  return new AWS.Signers.V4(request || buildRequest(), 'dynamodb')

describe 'AWS.Signers.V4', ->
  date = new Date(1935346573456)
  datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '')
  creds = null
  signature = 'be723920bdf3f2ee6c0299adeafd5bc875cca511e2a4b8374d0d4e229acf2931'
  authorization = 'AWS4-HMAC-SHA256 Credential=akid/20310430/region/dynamodb/aws4_request, ' +
    'SignedHeaders=host;x-amz-date;x-amz-security-token;x-amz-target, ' +
    'Signature=' + signature
  signer = null

  beforeEach ->
    creds = accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'
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
      'Content-Length': 34,
      'X-Amz-Target': 'DynamoDB_20111205.ListTables',
      'Host': 'localhost',
      'X-Amz-Date': datetime,
      'x-amz-security-token' : 'session',
      'Authorization' : authorization
    }

    for key, value of headers
      it 'should add ' + key + ' header', ->
        signer.addAuthorization(creds, date)
        key = this.description.match(/(\S+) header/)[1]
        expect(signer.request.headers[key]).toEqual(headers[key])

  describe 'authorization', ->
    it 'should return authorization part for signer', ->
      expect(signer.authorization(creds, datetime)).toEqual(authorization)

  describe 'signature', ->
    it 'should generate proper signature', ->
      expect(signer.signature(creds, datetime)).toEqual(signature)

    describe 'caching', ->
      callCount = null
      calls = null

      beforeEach ->
        spyOn(AWS.util.crypto, 'hmac')
        signer.signature(creds, datetime)
        calls = AWS.util.crypto.hmac.calls
        callCount = calls.length

      it 'caches subsequent requests', ->
        signer.signature(creds, datetime)
        expect(calls.length).toEqual(callCount + 1)
        signer.signature(creds, datetime)
        expect(calls.length).toEqual(callCount + 2)

      it 'busts cache if region changes', ->
        signer.request.region = 'new-region'
        signer.signature(creds, datetime)
        expect(calls.length).toEqual(callCount + 5)

      it 'busts cache if service changes', ->
        signer.serviceName = 'newService'
        signer.signature(creds, datetime)
        expect(calls.length).toEqual(callCount + 5)

      it 'busts cache if access key changes', ->
        creds.accessKeyId = 'NEWAKID'
        signer.signature(creds, datetime)
        expect(calls.length).toEqual(callCount + 5)

      it 'busts cache if date changes', ->
        newDate = new Date(date.getTime() + 1000000000)
        newDatetime = AWS.util.date.iso8601(newDate).replace(/[:\-]|\.\d{3}/g, '')
        signer.signature(creds, newDatetime)
        expect(calls.length).toEqual(callCount + 5)

  describe 'stringToSign', ->
    it 'should sign correctly generated input string', ->
      expect(signer.stringToSign(datetime)).toEqual 'AWS4-HMAC-SHA256\n' +
        datetime + '\n' +
        '20310430/region/dynamodb/aws4_request\n' +
        signer.hexEncodedHash(signer.canonicalString())

  describe 'canonicalHeaders', ->
    it 'should return headers', ->
      expect(signer.canonicalHeaders()).toEqual [
        'host:localhost',
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
