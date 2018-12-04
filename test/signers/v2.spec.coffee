AWS = require('../helpers').AWS

describe 'AWS.Signers.V2', ->

  credentials = null
  date = null
  request = null
  signer = null

  buildRequest = ->
    request = new AWS.HttpRequest(new AWS.Endpoint('localhost'))
    request.params = {}
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

  stringify = AWS.util.queryParamsToString

  describe 'constructor', ->

    it 'builds a signer for a request object', ->
      expect(signer.request).to.equal(request)

  describe 'addAuthorization', ->

    it 'adds a url encoded iso8601 timestamp param', ->
      expect(stringify(request.params)).to.match(/Timestamp=2031-04-30T20%3A16%3A13Z/)

    it 'adds a SignatureVersion param', ->
      expect(stringify(request.params)).to.match(/SignatureVersion=2/)

    it 'adds a SignatureMethod param', ->
      expect(stringify(request.params)).to.match(/SignatureMethod=HmacSHA256/)

    it 'adds an AWSAccessKeyId param', ->
      expect(stringify(request.params)).to.match(/AWSAccessKeyId=akid/)

    it 'omits SecurityToken when sessionToken has been omitted', ->
      expect(stringify(request.params)).not.to.match(/SecurityToken/)

    it 'adds the SecurityToken when sessionToken is provided', ->
      credentials.sessionToken = 'session'
      signRequest(buildRequest())
      expect(stringify(request.params)).to.match(/SecurityToken=session/)

    it 'populates the body', ->
      expect(request.body).to.equal('AWSAccessKeyId=akid&Signature=6g8SME09kuR%2FVYtVhDoXRqXsZDb7%2FPcjEVDKHJB%2BZe8%3D&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2031-04-30T20%3A16%3A13Z')

    it 'populates content-length header', ->
      expect(request.headers['Content-Length']).to.equal(163)

    it 'signs additional body params', ->
      request = buildRequest()
      request.params['Param.1'] = 'abc'
      request.params['Param.2'] = 'xyz'
      signRequest(request)
      expect(request.body).to.equal('AWSAccessKeyId=akid&Param.1=abc&Param.2=xyz&Signature=hoA%2F%2FTha7KYkewoZbCMC8NQIcixNQd5U6WNLk%2B%2BKl%2FU%3D&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2031-04-30T20%3A16%3A13Z')

