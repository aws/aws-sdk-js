AWS = require('../../lib/core')

describe 'AWS.HttpRequest', ->

  request = null
  beforeEach ->
    request = new AWS.HttpRequest()

  describe 'constructor', ->

    it 'defaults to POST method requests', ->
      expect(request.method).toEqual('POST')

    it 'defaults the uri to /', ->
      expect(request.uri).toEqual('/')

    it 'provides headers with a default user agent', ->
      userAgent = 'aws-sdk-js/' + AWS.VERSION
      expect(request.headers).toEqual({ 'User-Agent': userAgent })

    it 'defaults body to undefined', ->
      expect(request.body).toEqual(undefined)

    it 'defaults endpoint to undefined', ->
      expect(request.endpoint).toEqual(undefined)

    it 'defaults serviceName to undefined', ->
      expect(request.serviceName).toEqual(undefined)

  describe 'pathname', ->

    it 'defaults to /', ->
      expect(request.pathname()).toEqual('/')

    it 'returns the path portion of the uri', ->
      request.uri = '/abc/xyz?mno=hjk'
      expect(request.pathname()).toEqual('/abc/xyz')

  describe 'search', ->

    it 'defaults to an empty string', ->
      expect(request.search()).toEqual('')

    it 'returns the querystring portion of the uri', ->
      request.uri = '/abc/xyz?mno=hjk'
      expect(request.search()).toEqual('mno=hjk')

