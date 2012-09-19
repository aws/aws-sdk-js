AWS = require('../../lib/core')

describe 'AWS.Config', ->

  configure = (options) -> new AWS.Config(options)

  describe 'constructor', ->
    it 'should be able to pass in a Config object as parameter', ->
      config = new AWS.Config(useSSL: false, maxRetries: 0)
      copyConfig = new AWS.Config(config)
      expect(copyConfig).not.toBe(config)
      expect(copyConfig.useSSL).toEqual(false)
      expect(copyConfig.maxRetries).toEqual(0)

  describe 'region', ->
    it 'defaults to undefined', ->
      expect(configure().region).toEqual(undefined)
    it 'can be set to a string', ->
      expect(configure(region: 'us-west-1').region).toEqual('us-west-1')

  describe 'maxRetries', ->
    it 'defaults to unefined', ->
      expect(configure().maxRetries).toEqual(undefined)
    it 'can be set to an integer', ->
      expect(configure(maxRetries: 2).maxRetries).toEqual(2)

  describe 'useSSL', ->
    it 'defaults to true', ->
      expect(configure().useSSL).toEqual(true)
    it 'can be set to false', ->
      expect(configure(useSSL: false).useSSL).toEqual(false)

  describe 'debug', ->
    it 'defaults to false', ->
      expect(configure().debug).toEqual(false)
    it 'can be set to true', ->
      expect(configure(debug: true).debug).toEqual(true)

  describe 'default', ->
    it 'should have a default Config object', ->
      expect(AWS.configuration.useSSL).toEqual(true)
      expect(AWS.configuration.maxRetries).toEqual(undefined)
      expect(AWS.configuration.debug).toEqual(false)

    it 'can set default config to an object literal', ->

  describe 'Credentials', ->
    it 'should allow setting of credentials with keys', ->
      config = configure(
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      )
      expect(config.credentials.accessKeyId).toEqual('akid')
      expect(config.credentials.secretAccessKey).toEqual('secret')
      expect(config.credentials.sessionToken).toEqual('session')

    it 'should allow setting of credentials as object', ->
      creds =
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      config = configure({credentials: new AWS.Credentials(creds)})
      expect(config.credentials.accessKeyId).toEqual('akid')
      expect(config.credentials.secretAccessKey).toEqual('secret')
      expect(config.credentials.sessionToken).toEqual('session')

