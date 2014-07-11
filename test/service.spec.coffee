helpers = require('./helpers')
AWS = helpers.AWS
MockService = helpers.MockService

describe 'AWS.Service', ->

  config = null; service = null
  retryableError = (error, result) ->
    expect(service.retryableError(error)).to.eql(result)

  beforeEach ->
    config = new AWS.Config()
    service = new AWS.Service(config)

  describe 'apiVersions', ->
    it 'should set apiVersions property', ->
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      expect(CustomService.apiVersions).to.eql(['1999-05-05', '2001-01-01'])

  describe 'constructor', ->
    it 'should use AWS.config copy if no config is provided', ->
      service = new AWS.Service()
      expect(service.config).not.to.equal(AWS.config)
      expect(service.config.sslEnabled).to.equal(true)

    it 'should merge custom options on top of global defaults if config provided', ->
      service = new AWS.Service(maxRetries: 5)
      expect(service.config.sslEnabled).to.equal(true)
      expect(service.config.maxRetries).to.equal(5)

    it 'merges credential data into config', ->
      service = new AWS.Service(accessKeyId: 'foo', secretAccessKey: 'bar')
      expect(service.config.credentials.accessKeyId).to.equal('foo')
      expect(service.config.credentials.secretAccessKey).to.equal('bar')

    it 'should allow AWS.config to be object literal', ->
      cfg = AWS.config
      AWS.config = maxRetries: 20
      service = new AWS.Service({})
      expect(service.config.maxRetries).to.equal(20)
      expect(service.config.sslEnabled).to.equal(true)
      AWS.config = cfg

    it 'tries to construct service with latest API version', ->
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      errmsg = "Could not find API configuration custom-2001-01-01"
      expect(-> new CustomService()).to.throw(errmsg)

    it 'tries to construct service with exact API version match', ->
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      errmsg = "Could not find API configuration custom-1999-05-05"
      expect(-> new CustomService(apiVersion: '1999-05-05')).to.throw(errmsg)


    it 'skips any API versions with a * and uses next (future) service', ->
      CustomService = AWS.Service.defineService('custom', ['1998-01-01', '1999-05-05*', '2001-01-01'])
      errmsg = "Could not find API configuration custom-2001-01-01"
      expect(-> new CustomService(apiVersion: '2000-01-01')).to.throw(errmsg)

    it 'skips multiple API versions with a * and uses next (future) service', ->
      CustomService = AWS.Service.defineService('custom', ['1998-01-01', '1999-05-05*', '1999-07-07*', '2001-01-01'])
      errmsg = "Could not find API configuration custom-2001-01-01"
      expect(-> new CustomService(apiVersion: '1999-05-05')).to.throw(errmsg)

    it 'tries to construct service with fuzzy API version match', ->
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      errmsg = "Could not find API configuration custom-1999-05-05"
      expect(-> new CustomService(apiVersion: '2000-01-01')).to.throw(errmsg)

    it 'uses global apiVersion value when constructing versioned services', ->
      AWS.config.apiVersion = '2002-03-04'
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      errmsg = "Could not find API configuration custom-2001-01-01"
      expect(-> new CustomService).to.throw(errmsg)
      AWS.config.apiVersion = null

    it 'uses global apiVersions value when constructing versioned services', ->
      AWS.config.apiVersions = {custom: '2002-03-04'}
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      errmsg = "Could not find API configuration custom-2001-01-01"
      expect(-> new CustomService).to.throw(errmsg)
      AWS.config.apiVersions = {}

    it 'uses service specific apiVersions before apiVersion', ->
      AWS.config.apiVersions = {custom: '2000-01-01'}
      AWS.config.apiVersion = '2002-03-04'
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      errmsg = "Could not find API configuration custom-1999-05-05"
      expect(-> new CustomService).to.throw(errmsg)
      AWS.config.apiVersion = null
      AWS.config.apiVersions = {}

    it 'tries to construct service with fuzzy API version match', ->
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      errmsg = "Could not find API configuration custom-1999-05-05"
      expect(-> new CustomService(apiVersion: '2000-01-01')).to.throw(errmsg)

    it 'fails if apiVersion matches nothing', ->
      CustomService = AWS.Service.defineService('custom', ['2001-01-01', '1999-05-05'])
      errmsg = "Could not find custom API to satisfy version constraint `1998-01-01'"
      expect(-> new CustomService(apiVersion: '1998-01-01')).to.throw(errmsg)

    it 'allows construction of services from one-off apiConfig properties', ->
      service = new AWS.Service apiConfig:
        operations:
          operationName: input: {}, output: {}

      expect(typeof service.operationName).to.equal('function')
      expect(service.operationName() instanceof AWS.Request).to.equal(true)

    it 'interpolates endpoint when reading from configuration', ->
      service = new MockService(endpoint: '{scheme}://{service}.{region}.domain.tld')
      expect(service.config.endpoint).to.equal('https://mockservice.mock-region.domain.tld')
      service = new MockService(sslEnabled: false, endpoint: '{scheme}://{service}.{region}.domain.tld')
      expect(service.config.endpoint).to.equal('http://mockservice.mock-region.domain.tld')

  describe 'setEndpoint', ->
    FooService = null

    beforeEach ->
      FooService = AWS.util.inherit AWS.Service, api:
        endpointPrefix: 'fooservice'

    it 'uses specified endpoint if provided', ->
      service = new FooService()
      service.setEndpoint('notfooservice.amazonaws.com')
      expect(service.endpoint.host).to.equal('notfooservice.amazonaws.com')

  describe 'makeRequest', ->

    it 'it treats params as an optinal parameter', ->
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])
      service = new MockService()
      service.makeRequest 'operationName', (err, data) ->
        expect(data).to.equal('FOOBAR')

    it 'yields data to the callback', ->
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])
      service = new MockService()
      req = service.makeRequest 'operation', (err, data) ->
        expect(err).to.equal(null)
        expect(data).to.equal('FOOBAR')

    it 'yields service errors to the callback', ->
      helpers.mockHttpResponse(500, {}, ['ServiceError'])
      service = new MockService(maxRetries: 0)
      req = service.makeRequest 'operation', {}, (err, data) ->
        expect(err.code).to.equal('ServiceError')
        expect(err.message).to.equal(null)
        expect(err.statusCode).to.equal(500)
        expect(err.retryable).to.equal(true)
        expect(data).to.equal(null)

    it 'yields network errors to the callback', ->
      error = { code: 'NetworkingError' }
      helpers.mockHttpResponse(error)
      service = new MockService(maxRetries: 0)
      req = service.makeRequest 'operation', {}, (err, data) ->
        expect(err).to.eql(error)
        expect(data).to.equal(null)

    it 'does not send the request if a callback function is omitted', ->
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])
      httpClient = AWS.HttpClient.getInstance()
      helpers.spyOn(httpClient, 'handleRequest')
      new MockService().makeRequest('operation')
      expect(httpClient.handleRequest.calls.length).to.equal(0)

    it 'allows parameter validation to be disabled in config', ->
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])
      service = new MockService(paramValidation: false)
      req = service.makeRequest 'operation', {}, (err, data) ->
        expect(err).to.equal(null)
        expect(data).to.equal('FOOBAR')

    describe 'bound parameters', ->
      it 'accepts toplevel bound parameters on the service', ->
        service = new AWS.S3(params: {Bucket: 'bucket', Key: 'key'})
        req = service.makeRequest 'getObject'
        expect(req.params).to.eql(Bucket: 'bucket', Key: 'key')

      it 'ignores bound parameters not in input members', ->
        service = new AWS.S3(params: {Bucket: 'bucket', Key: 'key'})
        req = service.makeRequest 'listObjects'
        expect(req.params).to.eql(Bucket: 'bucket')

      it 'can override bound parameters', ->
        service = new AWS.S3(params: {Bucket: 'bucket', Key: 'key'})
        params = Bucket: 'notBucket'

        req = service.makeRequest('listObjects', params)
        expect(params).not.to.equal(req.params)
        expect(req.params).to.eql(Bucket: 'notBucket')

    describe 'global events', ->
      it 'adds AWS.events listeners to requests', ->
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])

        event = helpers.createSpy()
        AWS.events.on('complete', event)

        new MockService().makeRequest('operation').send()
        expect(event.calls.length).not.to.equal(0)

  describe 'retryableError', ->

    it 'should retry on throttle error', ->
      retryableError({code: 'ProvisionedThroughputExceededException', statusCode:400}, true)

    it 'should retry on expired credentials error', ->
      retryableError({code: 'ExpiredTokenException', statusCode:400}, true)

    it 'should retry on 500 or above regardless of error', ->
      retryableError({code: 'Error', statusCode:500 }, true)
      retryableError({code: 'RandomError', statusCode:505 }, true)

    it 'should not retry when error is < 500 level status code', ->
      retryableError({code: 'Error', statusCode:200 }, false)
      retryableError({code: 'Error', statusCode:302 }, false)
      retryableError({code: 'Error', statusCode:404 }, false)

  describe 'numRetries', ->
    it 'should use config max retry value if defined', ->
      service.config.maxRetries = 30
      expect(service.numRetries()).to.equal(30)

    it 'should use defaultRetries defined on object if undefined on config', ->
      service.defaultRetryCount = 13
      service.config.maxRetries = undefined
      expect(service.numRetries()).to.equal(13)
