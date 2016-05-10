helpers = require('./helpers')
AWS = helpers.AWS

configure = (options) -> new AWS.Config(options)

describe 'AWS.Config', ->

  describe 'constructor', ->
    it 'should be able to pass in a Config object as parameter', ->
      config = new AWS.Config(sslEnabled: false, maxRetries: 0)
      copyConfig = new AWS.Config(config)
      expect(copyConfig).not.to.equal(config)
      expect(copyConfig.sslEnabled).to.equal(false)
      expect(copyConfig.maxRetries).to.equal(0)

    it 'should be able to pass credential values directly', ->
      config = new AWS.Config(
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session')
      expect(config.credentials.accessKeyId).to.equal('akid')
      expect(config.credentials.secretAccessKey).to.equal('secret')
      expect(config.credentials.sessionToken).to.equal('session')

  describe 'region', ->
    oldEnv = process.env
    beforeEach (done) ->
      process.env = {}
      done()
    afterEach ->
      process.env = oldEnv

    it 'defaults to undefined', ->
      expect(configure().region).not.to.exist

    if AWS.util.isNode()
      it 'grabs AWS_REGION from the env', ->
        process.env.AWS_REGION = 'us-west-2'
        config = new AWS.Config()
        expect(config.region).to.equal('us-west-2')

      it 'also grabs AMAZON_REGION from the env', ->
        process.env.AMAZON_REGION = 'us-west-1'
        config = new AWS.Config()
        expect(config.region).to.equal('us-west-1')

      it 'prefers AWS_REGION to AMAZON_REGION', ->
        process.env.AWS_REGION = 'us-west-2'
        process.env.AMAZON_REGION = 'us-west-1'
        config = new AWS.Config()
        expect(config.region).to.equal('us-west-2')

    it 'can be set to a string', ->
      expect(configure(region: 'us-west-1').region).to.equal('us-west-1')

  describe 'maxRetries', ->
    it 'defaults to unefined', ->
      expect(configure().maxRetries).to.equal(undefined)
    it 'can be set to an integer', ->
      expect(configure(maxRetries: 2).maxRetries).to.equal(2)

  describe 'retryDelayOptions', ->
    it 'defaults to "base: 100"', ->
      expect(configure().retryDelayOptions).to.eql({base: 100})
    it 'can set "base" to an integer', ->
      expect(configure(retryDelayOptions: {base: 30}).retryDelayOptions).to.eql({base: 30})

  describe 'paramValidation', ->
    it 'defaults to true', ->
      expect(configure().paramValidation).to.equal(true)

  describe 'computeChecksums', ->
    it 'defaults to true', ->
      expect(configure().computeChecksums).to.equal(true)

  describe 'sslEnabled', ->
    it 'defaults to true', ->
      expect(configure().sslEnabled).to.equal(true)
    it 'can be set to false', ->
      expect(configure(sslEnabled: false).sslEnabled).to.equal(false)

  describe 'httpOptions', ->
    it 'defaults to {timeout:120000}', ->
      expect(configure().httpOptions).to.eql(timeout: 120000)

  describe 'systemClockOffset', ->
    it 'defaults to 0', ->
      expect(configure().systemClockOffset).to.equal(0)

  describe 'correctClockSkew', ->
    it 'defaults to false', ->
      expect(configure().correctClockSkew).to.equal(false)

  describe 'customUserAgent', ->
    it 'defaults to null', ->
      expect(configure().customUserAgent).to.equal(null)

  describe 'useAccelerateEndpoint', ->
    it 'defaults to false', ->
      expect(configure().useAccelerateEndpoint).to.equal(false)

  describe 'set', ->
    it 'should set a default value for a key', ->
      config = new AWS.Config()
      config.set('maxRetries', undefined, 'DEFAULT')
      expect(config.maxRetries).to.equal('DEFAULT')

    it 'should execute default value if it is a function', ->
      mock = helpers.createSpy()
      config = new AWS.Config()
      config.set('maxRetries', undefined, mock)
      expect(mock.calls.length).not.to.equal(0)

    it 'should not expand default value function if value is present', ->
      mock = helpers.createSpy()
      config = new AWS.Config()
      config.set('maxRetries', 'VALUE', mock)
      expect(mock.calls.length).to.equal(0)

  describe 'clear', ->
    it 'should be able to clear all key values from a config object', ->
      config = new AWS.Config(credentials: {}, maxRetries: 300, sslEnabled: 'foo')
      expect(config.maxRetries).to.equal(300)
      expect(config.sslEnabled).to.equal('foo')
      expect(config.credentials).not.to.equal(undefined)

      config.clear()

      expect(config.maxRetries).to.equal(undefined)
      expect(config.sslEnabled).to.equal(undefined)
      expect(config.credentials).not.to.equal(undefined)
      expect(config.credentialProvider).not.to.equal(undefined)

  describe 'update', ->
    it 'should be able to update keyed values', ->
      config = new AWS.Config()
      expect(config.maxRetries).to.equal(undefined)
      config.update(maxRetries: 10)
      expect(config.maxRetries).to.equal(10)

    it 'should ignore non-keyed values', ->
      config = new AWS.Config()
      config.update(foo: 10)
      expect(config.foo).to.equal(undefined)

    it 'should allow service identifiers to be set', ->
      config = new AWS.Config()
      config.update(s3: {endpoint: 'localhost'})
      expect(config.s3).to.eql(endpoint: 'localhost')

    it 'allows unknown keys if allowUnknownKeys is set', ->
      config = new AWS.Config()
      config.update(foo: 10, true)
      expect(config.foo).to.equal(10)

    it 'should be able to update literal credentials', ->
      config = new AWS.Config()
      config.update(
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session')
      expect(config.credentials.accessKeyId).to.equal('akid')
      expect(config.credentials.secretAccessKey).to.equal('secret')
      expect(config.credentials.sessionToken).to.equal('session')

    it 'should deep merge httpOptions', ->
      config = new AWS.Config()
      config.update httpOptions: timeout: 1
      config.update httpOptions: { xhrSync: true }
      expect(config.httpOptions.timeout).to.equal(1)
      expect(config.httpOptions.xhrSync).to.equal(true)

  describe 'getCredentials', ->
    spy = null
    config = null
    beforeEach (done) ->
      spy = helpers.createSpy('getCredentials callback')
      done()

    expectValid = (options, key) ->
      if options instanceof AWS.Config
        config = options
      else
        config = new AWS.Config(options)
      config.getCredentials(spy)
      expect(spy.calls.length).not.to.equal(0)
      expect(spy.calls[0].arguments[0]).not.to.exist
      if key
        expect(config.credentials.accessKeyId).to.equal(key)

    expectError = (options, message) ->
      if options instanceof AWS.Config
        config = options
      else
        config = new AWS.Config(options)
      config.getCredentials(spy)
      expect(spy.calls.length).not.to.equal(0)
      expect(spy.calls[0].arguments[0].code).to.equal('CredentialsError')
      expect(spy.calls[0].arguments[0].message).to.equal(message)

    it 'should check credentials for static object first', ->
      expectValid credentials: accessKeyId: '123', secretAccessKey: '456'

    it 'should error if static credentials are not available', ->
      expectError(credentials: {}, 'Missing credentials')

    it 'should check credentials for async get() method', ->
      expectValid credentials: get: (cb) -> cb()

    it 'should error if credentials.get() cannot resolve', ->
      options = credentials:
        constructor: name: 'CustomCredentials'
        get: (cb) -> cb(new Error('Error!'), null)
      expectError options, 'Could not load credentials from CustomCredentials'

    it 'should check credentialProvider if no credentials', ->
      expectValid credentials: null, credentialProvider:
        resolve: (cb) -> cb(null, accessKeyId: 'key', secretAccessKey: 'secret')

    it 'should error if credentialProvider fails to resolve', ->
      options = credentials: null, credentialProvider:
        resolve: (cb) -> cb(new Error('Error!'), null)
      expectError options, 'Could not load credentials from any providers'

    it 'should error if no credentials or credentialProvider', ->
      options = credentials: null, credentialProvider: null
      expectError options, 'No credentials to load'

describe 'AWS.config', ->
  it 'should be a default Config object', ->
    expect(AWS.config.sslEnabled).to.equal(true)
    expect(AWS.config.maxRetries).to.equal(undefined)

  it 'can set default config to an object literal', ->
    oldConfig = AWS.config
    AWS.config = {}
    expect(AWS.config).to.eql({})
    AWS.config = oldConfig

  describe 'setPromisesDependency', ->
    it 'updates promise support on requests', ->
      utilSpy = helpers.spyOn(AWS.util, 'addPromisesToRequests')
      AWS.config.setPromisesDependency(->)
      expect(utilSpy.calls.length).to.equal(1)