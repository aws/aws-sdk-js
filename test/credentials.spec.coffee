helpers = require('./helpers')
AWS = helpers.AWS

validateCredentials = (creds, key, secret, session) ->
  expect(creds.accessKeyId).toEqual(key || 'akid')
  expect(creds.secretAccessKey).toEqual(secret || 'secret')
  expect(creds.sessionToken).toEqual(session || 'session')

describe 'AWS.Credentials', ->
  describe 'constructor', ->
    it 'should allow setting of credentials with keys', ->
      config = new AWS.Config(
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      )
      validateCredentials(config.credentials)

    it 'should allow setting of credentials as object', ->
      creds =
        accessKeyId: 'akid'
        secretAccessKey: 'secret'
        sessionToken: 'session'
      validateCredentials(new AWS.Credentials(creds))

    it 'defaults credentials to undefined when not passed', ->
      creds = new AWS.Credentials()
      expect(creds.accessKeyId).toBe(undefined)
      expect(creds.secretAccessKey).toBe(undefined)
      expect(creds.sessionToken).toBe(undefined)

  describe 'needsRefresh', ->
    it 'needs refresh if credentials are not set', ->
      creds = new AWS.Credentials()
      expect(creds.needsRefresh()).toEqual(true)
      creds = new AWS.Credentials('akid')
      expect(creds.needsRefresh()).toEqual(true)

    it 'does not need refresh if credentials are set', ->
      creds = new AWS.Credentials('akid', 'secret')
      expect(creds.needsRefresh()).toEqual(false)

    it 'needs refresh if creds are expired', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = true
      expect(creds.needsRefresh()).toEqual(true)

    it 'can be expired based on expireTime', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = false
      creds.expireTime = new Date(0)
      expect(creds.needsRefresh()).toEqual(true)

    it 'needs refresh if expireTime is within expiryWindow secs from now', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = false
      creds.expireTime = new Date(AWS.util.date.getDate().getTime() + 1000)
      expect(creds.needsRefresh()).toEqual(true)

    it 'does not need refresh if expireTime outside expiryWindow', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = false
      ms = AWS.util.date.getDate().getTime() + (creds.expiryWindow + 5) * 1000
      creds.expireTime = new Date(ms)
      expect(creds.needsRefresh()).toEqual(false)

  describe 'get', ->
    it 'does not call refresh if not needsRefresh', ->
      spy = jasmine.createSpy('done callback')
      creds = new AWS.Credentials('akid', 'secret')
      refresh = spyOn(creds, 'refresh')
      creds.get(spy)
      expect(refresh).not.toHaveBeenCalled()
      expect(spy).toHaveBeenCalled()
      expect(spy.argsForCall[0][0]).toEqual(null)
      expect(creds.expired).toEqual(false)

    it 'calls refresh only if needsRefresh', ->
      spy = jasmine.createSpy('done callback')
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = true
      refresh = spyOn(creds, 'refresh').andCallThrough()
      creds.get(spy)
      expect(refresh).toHaveBeenCalled()
      expect(spy).toHaveBeenCalled()
      expect(spy.argsForCall[0][0]).toEqual(null)
      expect(creds.expired).toEqual(false)

if AWS.util.isNode()
  describe 'AWS.EnvironmentCredentials', ->
    beforeEach ->
      process.env = {}

    describe 'constructor', ->
      it 'should be able to read credentials from env with a prefix', ->
        process.env.AWS_ACCESS_KEY_ID = 'akid'
        process.env.AWS_SECRET_ACCESS_KEY = 'secret'
        process.env.AWS_SESSION_TOKEN = 'session'
        creds = new AWS.EnvironmentCredentials('AWS')
        validateCredentials(creds)

      it 'should be able to read credentials from env without a prefix', ->
        process.env.ACCESS_KEY_ID = 'akid'
        process.env.SECRET_ACCESS_KEY = 'secret'
        process.env.SESSION_TOKEN = 'session'
        creds = new AWS.EnvironmentCredentials()
        validateCredentials(creds)

    describe 'refresh', ->
      it 'can refresh credentials', ->
        process.env.AWS_ACCESS_KEY_ID = 'akid'
        process.env.AWS_SECRET_ACCESS_KEY = 'secret'
        creds = new AWS.EnvironmentCredentials('AWS')
        expect(creds.accessKeyId).toEqual('akid')
        creds.accessKeyId = 'not_akid'
        expect(creds.accessKeyId).not.toEqual('akid')
        creds.refresh()
        expect(creds.accessKeyId).toEqual('akid')

  describe 'AWS.FileSystemCredentials', ->
    describe 'constructor', ->
      it 'should accept filename and load credentials from root doc', ->
        mock = '{"accessKeyId":"akid", "secretAccessKey":"secret","sessionToken":"session"}'
        spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.FileSystemCredentials('foo')
        validateCredentials(creds)

      it 'should accept filename and load credentials from credentials block', ->
        mock = '{"credentials":{"accessKeyId":"akid", "secretAccessKey":"secret","sessionToken":"session"}}'
        spy = spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.FileSystemCredentials('foo')
        validateCredentials(creds)

    describe 'refresh', ->
      it 'should refresh from given filename', ->
        mock = '{"credentials":{"accessKeyId":"RELOADED", "secretAccessKey":"RELOADED","sessionToken":"RELOADED"}}'
        spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.FileSystemCredentials('foo')
        validateCredentials(creds, 'RELOADED', 'RELOADED', 'RELOADED')

      it 'fails if credentials are not in the file', ->
        mock = '{"credentials":{}}'
        spyOn(AWS.util, 'readFileSync').andReturn(mock)

        new AWS.FileSystemCredentials('foo').refresh (err) ->
          expect(err.message).toEqual('Credentials not set in foo')

        expect(-> new AWS.FileSystemCredentials('foo').refresh()).
          toThrow('Credentials not set in foo')

  describe 'AWS.EC2MetadataCredentials', ->
    creds = null

    beforeEach ->
      creds = new AWS.EC2MetadataCredentials(host: 'host')

    mockMetadataService = (expireTime) ->
      spyOn(creds.metadataService, 'loadCredentials').andCallFake (cb) ->
          cb null,
            Code: 'Success'
            AccessKeyId: 'KEY'
            SecretAccessKey: 'SECRET'
            Token: 'TOKEN'
            Expiration: expireTime.toISOString()

    describe 'constructor', ->
      it 'allows passing of AWS.MetadataService options', ->
        expect(creds.metadataService.host).toEqual('host')

    describe 'needsRefresh', ->
      it 'can be expired based on expire time from EC2 Metadata service', ->
        mockMetadataService(new Date(0))
        creds.refresh(->)
        expect(creds.needsRefresh()).toEqual(true)

    describe 'refresh', ->
      it 'loads credentials from EC2 Metadata service', ->
        mockMetadataService(new Date(AWS.util.date.getDate().getTime() + 100000))
        creds.refresh(->)
        expect(creds.metadata.Code).toEqual('Success')
        expect(creds.accessKeyId).toEqual('KEY')
        expect(creds.secretAccessKey).toEqual('SECRET')
        expect(creds.sessionToken).toEqual('TOKEN')
        expect(creds.needsRefresh()).toEqual(false)

      it 'does try to load creds second time if Metadata service failed', ->
        spy = spyOn(creds.metadataService, 'loadCredentials').andCallFake (cb) ->
          cb(new Error('INVALID SERVICE'))

        creds.refresh (err) ->
          expect(err.message).toEqual('INVALID SERVICE')
        creds.refresh ->
          creds.refresh ->
            creds.refresh ->
              expect(spy.calls.length).toEqual(4)

describe 'AWS.TemporaryCredentials', ->
  creds = null

  beforeEach ->
    creds = new AWS.TemporaryCredentials(DurationSeconds: 1200)

  mockSTS = (expireTime, inParams) ->
    if !inParams
      inParams = DurationSeconds: 1200
    if inParams.RoleArn
      operation = 'assumeRole'
    else
      operation = 'getSessionToken'
    spyOn(creds.service, operation).andCallFake (params, cb) ->
     expect(params).toEqual(inParams)
     cb null, Credentials:
       AccessKeyId: 'KEY'
       SecretAccessKey: 'SECRET'
       SessionToken: 'TOKEN'
       Expiration: expireTime

  describe 'masterCredentials', ->
    it 'seeds masterCredentials from global credentials', ->
      origCreds = AWS.config.credentials
      AWS.config.credentials = new AWS.Credentials('AKID', 'SECRET')
      creds = new AWS.TemporaryCredentials()
      expect(creds.masterCredentials.accessKeyId).toEqual('AKID')
      expect(creds.masterCredentials.secretAccessKey).toEqual('SECRET')
      AWS.config.credentials = origCreds

    it 'seeds masterCredentials from temporary credentials', ->
      origCreds = AWS.config.credentials
      AWS.config.credentials = new AWS.Credentials('AKID', 'SECRET')
      for i in [0..3]
        creds = new AWS.TemporaryCredentials()
        expect(creds.masterCredentials.accessKeyId).toEqual('AKID')
        expect(creds.masterCredentials.secretAccessKey).toEqual('SECRET')
      AWS.config.credentials = origCreds


  describe 'needsRefresh', ->
    it 'can be expired based on expire time from STS response', ->
      mockSTS(new Date(0))
      creds.refresh(->)
      expect(creds.needsRefresh()).toEqual(true)

  describe 'refresh', ->
    it 'loads temporary credentials from STS using getSessionToken', ->
      mockSTS(new Date(AWS.util.date.getDate().getTime() + 100000))
      creds.refresh(->)
      expect(creds.accessKeyId).toEqual('KEY')
      expect(creds.secretAccessKey).toEqual('SECRET')
      expect(creds.sessionToken).toEqual('TOKEN')
      expect(creds.needsRefresh()).toEqual(false)

    it 'loads temporary credentials from STS using assumeRole if RoleArn is provided', ->
      creds = new AWS.TemporaryCredentials(RoleArn: 'ARN')
      mockSTS(new Date(AWS.util.date.getDate().getTime() + 100000),
        RoleArn: 'ARN', RoleSessionName: 'temporary-credentials')
      creds.refresh(->)
      expect(creds.accessKeyId).toEqual('KEY')
      expect(creds.secretAccessKey).toEqual('SECRET')
      expect(creds.sessionToken).toEqual('TOKEN')
      expect(creds.needsRefresh()).toEqual(false)

    it 'does try to load creds second time if service request failed', ->
      spy = spyOn(creds.service, 'getSessionToken').andCallFake (params, cb) ->
        cb(new Error('INVALID SERVICE'))

      creds.refresh (err) ->
        expect(err.message).toEqual('INVALID SERVICE')
      creds.refresh ->
        creds.refresh ->
          creds.refresh ->
            expect(spy.calls.length).toEqual(4)

describe 'AWS.WebIdentityCredentials', ->
  creds = null

  beforeEach ->
    creds = new AWS.WebIdentityCredentials(WebIdentityToken: 'token', RoleArn: 'arn')

  mockSTS = (expireTime) ->
    spyOn(creds.service, 'assumeRoleWithWebIdentity').andCallFake (params, cb) ->
     expect(params).toEqual(RoleArn: 'arn', WebIdentityToken: 'token', RoleSessionName: 'web-identity')
     cb null, Credentials:
       AccessKeyId: 'KEY'
       SecretAccessKey: 'SECRET'
       SessionToken: 'TOKEN'
       Expiration: expireTime

  describe 'refresh', ->
    it 'loads federated credentials from STS', ->
      mockSTS(new Date(AWS.util.date.getDate().getTime() + 100000))
      creds.refresh(->)
      expect(creds.accessKeyId).toEqual('KEY')
      expect(creds.secretAccessKey).toEqual('SECRET')
      expect(creds.sessionToken).toEqual('TOKEN')
      expect(creds.needsRefresh()).toEqual(false)

    it 'does try to load creds second time if service request failed', ->
      spy = spyOn(creds.service, 'assumeRoleWithWebIdentity').andCallFake (params, cb) ->
        cb(new Error('INVALID SERVICE'))

      creds.refresh (err) ->
        expect(err.message).toEqual('INVALID SERVICE')
      creds.refresh ->
        creds.refresh ->
          creds.refresh ->
            expect(spy.calls.length).toEqual(4)

describe 'AWS.SAMLCredentials', ->
  creds = null

  beforeEach ->
    creds = new AWS.SAMLCredentials(SAMLAssertion: 'token', RoleArn: 'arn', PrincipalArn: 'arn')

  mockSTS = (expireTime) ->
    spyOn(creds.service, 'assumeRoleWithSAML').andCallFake (params, cb) ->
     expect(params).toEqual(SAMLAssertion: 'token', RoleArn: 'arn', PrincipalArn: 'arn')
     cb null, Credentials:
       AccessKeyId: 'KEY'
       SecretAccessKey: 'SECRET'
       SessionToken: 'TOKEN'
       Expiration: expireTime

  describe 'refresh', ->
    it 'loads federated credentials from STS', ->
      mockSTS(new Date(AWS.util.date.getDate().getTime() + 100000))
      creds.refresh(->)
      expect(creds.accessKeyId).toEqual('KEY')
      expect(creds.secretAccessKey).toEqual('SECRET')
      expect(creds.sessionToken).toEqual('TOKEN')
      expect(creds.needsRefresh()).toEqual(false)

    it 'does try to load creds second time if service request failed', ->
      spy = spyOn(creds.service, 'assumeRoleWithSAML').andCallFake (params, cb) ->
        cb(new Error('INVALID SERVICE'))

      creds.refresh (err) ->
        expect(err.message).toEqual('INVALID SERVICE')
      creds.refresh ->
        creds.refresh ->
          creds.refresh ->
            expect(spy.calls.length).toEqual(4)
