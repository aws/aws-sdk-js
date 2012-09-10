AWS = require('../../lib/aws')

describe 'AWS.Config', ->

  configure = (options) -> new AWS.Config(options)

  describe 'region', ->
    it 'defaults to null', ->
      expect(configure().region).toEqual(null)
    it 'can be set to a string', ->
      expect(configure({ region: 'us-west-1' }).region).toEqual('us-west-1')

  describe 'maxRetries', ->
    it 'defaults to 3', ->
      expect(configure().maxRetries).toEqual(3)
    it 'can be set to an integer', ->
      expect(configure({ maxRetries: 2 }).maxRetries).toEqual(2)

  describe 'useSSL', ->
    it 'defaults to true', ->
      expect(configure().useSSL).toEqual(true)
    it 'can be set to false', ->
      expect(configure({ useSSL: false }).useSSL).toEqual(false)

  describe 'debug', ->
    it 'defaults to false', ->
      expect(configure().debug).toEqual(false)
    it 'can be set to true', ->
      expect(configure({ debug: true }).debug).toEqual(true)

  describe 'Credentials', ->
    it 'should allow setting of credentials with keys', ->
      config = configure(
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      )
      expect(config.credentials.accessKeyId).toBe('akid')
      expect(config.credentials.secretAccessKey).toBe('secret')
      expect(config.credentials.sessionToken).toBe('session')

    it 'should allow setting of credentials as object', ->
      creds =
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      config = configure({credentials: new AWS.Credentials(creds)})
      expect(config.credentials.accessKeyId).toBe('akid')
      expect(config.credentials.secretAccessKey).toBe('secret')
      expect(config.credentials.sessionToken).toBe('session')
