helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.CloudSearchDomain', ->

  cds = undefined
  request = (operation, params) -> cds.makeRequest(operation, params)

  beforeEach -> cds = new AWS.CloudSearchDomain endpoint: 'host.region.domain'

  describe 'constructor', ->
    it 'fails if there is no provided endpoint', ->
      err = {}
      try
        new AWS.CloudSearchDomain
      catch e
        err = e
      expect(err.name).to.equal('InvalidEndpoint')

    it 'fails if the endpoint is a template', ->
      err = {}
      try
        new AWS.CloudSearchDomain endpoint: '{region}.domain'
      catch e
        err = e
      expect(err.name).to.equal('InvalidEndpoint')

    it 'allows explicit endpoint', ->
      expect(-> new AWS.CloudSearchDomain endpoint: 'host.domain').not.to.throw()

  describe 'building a request', ->
   
    build = (operation, params) ->
      request(operation, params).build().httpRequest

    it 'updates region by parsing hostname', ->
      params = { query: 'foo' }
      req = build('search', params)
      expect(req.region).to.equal('region')

    it 'falls back to configured region when hostname cannot be parsed', ->
      cds.endpoint.hostname = 'host'
      params = { query: 'foo' }
      req = build('search', params)
      expect(req.region).to.equal('mock-region')

    it 'does NOT sign request if credentials are NOT provided', ->
      cds.config.credentials = null
      params = { query: 'foo' }
      req = build('search', params)
      expect(req.headers).not.to.have.property('Authorization')
    
    it 'signs request if credentials are provided', ->
      params = { query: 'foo' }
      req = build('search', params)
      expect(req.headers).to.have.property('Authorization')
