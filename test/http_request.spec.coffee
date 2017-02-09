helpers = require('./helpers')
AWS = helpers.AWS

describe 'AWS.HttpRequest', ->

  request = null
  agentHeader = null
  isBrowser = AWS.util.isBrowser()
  if isBrowser
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

    it 'returns a sorted string', ->
      request.path = '/version/service?foo=3&foo.options=4&bar=1&baz=2&quux=5'
      expect(request.search()).to.equal('bar=1&baz=2&foo=3&foo.options=4&quux=5')

    it 'returns the querystring portion of the uri', ->
      request.path = '/abc/xyz?mno=hjk'
      expect(request.search()).to.equal('mno=hjk')

  describe 'getUserAgentHeaderName', ->
    it 'provides the correct header for browser environments', ->
      helpers.spyOn(AWS.util, 'isBrowser').andReturn true
      expect(request.getUserAgentHeaderName()).to.equal('X-Amz-User-Agent')

    it 'provides the correct header for node environments', ->
      helpers.spyOn(AWS.util, 'isBrowser').andReturn false
      expect(request.getUserAgentHeaderName()).to.equal('User-Agent')
  
  describe 'appendToUserAgent', ->
    it 'always appends a string to a user agent', ->
      headers = {}
      headers[agentHeader] = AWS.util.userAgent() + ' custom'
      request = new AWS.HttpRequest('http://domain.com')
      request.appendToUserAgent('custom')
      expect(request.headers).to.eql(headers)

  describe 'getUserAgent', ->
    it 'returns previously set user agent', ->
      headers = request.headers
      expect(request.getUserAgent()).to.equal(headers[agentHeader])
      request.appendToUserAgent('one')
      expect(headers[agentHeader]).to.match(/one$/)
      expect(request.getUserAgent()).to.equal(headers[agentHeader])
      request.appendToUserAgent('two')
      expect(headers[agentHeader]).to.match(/two$/)
      expect(request.getUserAgent()).to.equal(headers[agentHeader])