AWS = require('./helpers').AWS

describe 'AWS.HttpRequest', ->

  request = null
  agentHeader = null
  if AWS.util.isBrowser()
    agentHeader = 'X-Amz-User-Agent'
  else
    agentHeader = 'User-Agent'

  beforeEach ->
    request = new AWS.HttpRequest('http://domain.com')

  describe 'constructor', ->

    it 'defaults to POST method requests', ->
      expect(request.method).to.equal('POST')

    it 'defaults the uri to /', ->
      expect(request.path).to.equal('/')

    it 'provides headers with a default user agent', ->
      headers = {}
      headers[agentHeader] = AWS.util.userAgent()
      expect(request.headers).to.eql(headers)

    it 'defaults body to empty string', ->
      expect(request.body).to.equal('')

    it 'defaults endpointPrefix to undefined', ->
      expect(request.endpointPrefix).to.equal(undefined)

    it 'uses the path from the endpoint if provided', ->
      request = new AWS.HttpRequest('http://domain.com/path')
      expect(request.path).to.equal('/path')

  describe 'pathname', ->

    it 'defaults to /', ->
      expect(request.pathname()).to.equal('/')

    it 'returns the path portion of the uri', ->
      request.path = '/abc/xyz?mno=hjk'
      expect(request.pathname()).to.equal('/abc/xyz')

  describe 'search', ->

    it 'defaults to an empty string', ->
      expect(request.search()).to.equal('')

    it 'returns the querystring portion of the uri', ->
      request.path = '/abc/xyz?mno=hjk'
      expect(request.search()).to.equal('mno=hjk')

