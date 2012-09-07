AWS = require('../../lib/aws')

describe 'AWS.Config', ->
  describe 'Defaults', ->
    config = new AWS.Config({}) # TODO take out {}

    it 'region should be null', ->
      expect(config.region).toEqual(null)

    it 'useSSL should be true', ->
      expect(config.useSSL).toEqual(true)
    
    it 'handler should be AWS.HttpHandler', ->
      expect(config.handler).toEqual(new AWS.HttpHandler)

    it 'debug should be false', ->
      expect(config.debug).toEqual(false)

  describe 'Credentials', ->
    it 'should allow setting of credentials with keys', ->
      creds =
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      config = new AWS.Config(creds)
      expect(config.credentials.accessKeyId).toBe('akid')
      expect(config.credentials.secretAccessKey).toBe('secret')
      expect(config.credentials.sessionToken).toBe('session')

    it 'should allow setting of credentials as object', ->
      creds =
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      config = new AWS.Config({credentials: new AWS.Credentials(creds)})
      expect(config.credentials.accessKeyId).toBe('akid')
      expect(config.credentials.secretAccessKey).toBe('secret')
      expect(config.credentials.sessionToken).toBe('session')
