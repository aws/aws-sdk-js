helpers = require('./helpers')
AWS = helpers.AWS

validateCredentials = (creds, key, secret, session) ->
  expect(creds.accessKeyId).to.equal(key || 'akid')
  expect(creds.secretAccessKey).to.equal(secret || 'secret')
  expect(creds.sessionToken).to.equal(session || 'session')

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
      expect(creds.accessKeyId).to.equal(undefined)
      expect(creds.secretAccessKey).to.equal(undefined)
      expect(creds.sessionToken).to.equal(undefined)

  describe 'needsRefresh', ->
    it 'needs refresh if credentials are not set', ->
      creds = new AWS.Credentials()
      expect(creds.needsRefresh()).to.equal(true)
      creds = new AWS.Credentials('akid')
      expect(creds.needsRefresh()).to.equal(true)

    it 'does not need refresh if credentials are set', ->
      creds = new AWS.Credentials('akid', 'secret')
      expect(creds.needsRefresh()).to.equal(false)

    it 'needs refresh if creds are expired', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = true
      expect(creds.needsRefresh()).to.equal(true)

    it 'can be expired based on expireTime', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = false
      creds.expireTime = new Date(0)
      expect(creds.needsRefresh()).to.equal(true)

    it 'needs refresh if expireTime is within expiryWindow secs from now', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = false
      creds.expireTime = new Date(AWS.util.date.getDate().getTime() + 1000)
      expect(creds.needsRefresh()).to.equal(true)

    it 'does not need refresh if expireTime outside expiryWindow', ->
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = false
      ms = AWS.util.date.getDate().getTime() + (creds.expiryWindow + 5) * 1000
      creds.expireTime = new Date(ms)
      expect(creds.needsRefresh()).to.equal(false)

  describe 'get', ->
    it 'does not call refresh if not needsRefresh', ->
      spy = helpers.createSpy('done callback')
      creds = new AWS.Credentials('akid', 'secret')
      refresh = helpers.spyOn(creds, 'refresh')
      creds.get(spy)
      expect(refresh.calls.length).to.equal(0)
      expect(spy.calls.length).not.to.equal(0)
      expect(spy.calls[0].arguments[0]).not.to.exist
      expect(creds.expired).to.equal(false)

    it 'calls refresh only if needsRefresh', ->
      spy = helpers.createSpy('done callback')
      creds = new AWS.Credentials('akid', 'secret')
      creds.expired = true
      refresh = helpers.spyOn(creds, 'refresh').andCallThrough()
      creds.get(spy)
      expect(refresh.calls.length).not.to.equal(0)
      expect(spy.calls.length).not.to.equal(0)
      expect(spy.calls[0].arguments[0]).not.to.exist
      expect(creds.expired).to.equal(false)

if AWS.util.isNode()
  describe 'AWS.EnvironmentCredentials', ->
    beforeEach (done) ->
      process.env = {}
      done()

    afterEach ->
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
        expect(creds.accessKeyId).to.equal('akid')
        creds.accessKeyId = 'not_akid'
        expect(creds.accessKeyId).not.to.equal('akid')
        creds.refresh()
        expect(creds.accessKeyId).to.equal('akid')

  describe 'AWS.FileSystemCredentials', ->
    describe 'constructor', ->
      it 'should accept filename and load credentials from root doc', ->
        mock = '{"accessKeyId":"akid", "secretAccessKey":"secret","sessionToken":"session"}'
        helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.FileSystemCredentials('foo')
        validateCredentials(creds)

      it 'should accept filename and load credentials from credentials block', ->
        mock = '{"credentials":{"accessKeyId":"akid", "secretAccessKey":"secret","sessionToken":"session"}}'
        spy = helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.FileSystemCredentials('foo')
        validateCredentials(creds)

    describe 'refresh', ->
      it 'should refresh from given filename', ->
        mock = '{"credentials":{"accessKeyId":"RELOADED", "secretAccessKey":"RELOADED","sessionToken":"RELOADED"}}'
        helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.FileSystemCredentials('foo')
        validateCredentials(creds, 'RELOADED', 'RELOADED', 'RELOADED')

      it 'fails if credentials are not in the file', ->
        mock = '{"credentials":{}}'
        helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        new AWS.FileSystemCredentials('foo').refresh (err) ->
          expect(err.message).to.equal('Credentials not set in foo')

        expect(-> new AWS.FileSystemCredentials('foo').refresh()).
          to.throw('Credentials not set in foo')

  describe 'AWS.SharedIniFileCredentials', ->
    beforeEach ->
      delete process.env.AWS_PROFILE
      delete process.env.HOME
      delete process.env.HOMEPATH
      delete process.env.HOMEDRIVE
      delete process.env.USERPROFILE

    describe 'constructor', ->
      it 'throws an error if HOME/HOMEPATH/USERPROFILE are not set', ->
        expect(-> new AWS.SharedIniFileCredentials().refresh()).
          to.throw('Cannot load credentials, HOME path not set')

      it 'uses HOMEDRIVE\\HOMEPATH if HOME and USERPROFILE are not set', ->
        process.env.HOMEDRIVE = 'd:/'
        process.env.HOMEPATH = 'homepath'
        creds = new AWS.SharedIniFileCredentials()
        creds.get();
        expect(creds.filename).to.match(/d:[\/\\]homepath[\/\\].aws[\/\\]credentials/)

      it 'uses default HOMEDRIVE of C:/', ->
        process.env.HOMEPATH = 'homepath'
        creds = new AWS.SharedIniFileCredentials()
        creds.get();
        expect(creds.filename).to.match(/C:[\/\\]homepath[\/\\].aws[\/\\]credentials/)

      it 'uses USERPROFILE if HOME is not set', ->
        process.env.USERPROFILE = '/userprofile'
        creds = new AWS.SharedIniFileCredentials()
        creds.get();
        expect(creds.filename).to.match(/[\/\\]userprofile[\/\\].aws[\/\\]credentials/)

      it 'can override filename as a constructor argument', ->
        creds = new AWS.SharedIniFileCredentials(filename: '/etc/creds')
        creds.get();
        expect(creds.filename).to.equal('/etc/creds')

    describe 'loading', ->
      beforeEach -> process.env.HOME = '/home/user'

      it 'loads credentials from ~/.aws/credentials using default profile', ->
        mock = '''
        [default]
        aws_access_key_id = akid
        aws_secret_access_key = secret
        aws_session_token = session
        '''
        helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.SharedIniFileCredentials()
        creds.get();
        validateCredentials(creds)
        expect(AWS.util.readFileSync.calls[0].arguments[0]).to.match(/[\/\\]home[\/\\]user[\/\\].aws[\/\\]credentials/)

      it 'loads the default profile if AWS_PROFILE is empty', ->
        process.env.AWS_PROFILE = ''
        mock = '''
        [default]
        aws_access_key_id = akid
        aws_secret_access_key = secret
        aws_session_token = session
        '''
        helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.SharedIniFileCredentials()
        creds.get();
        validateCredentials(creds)

      it 'accepts a profile name parameter', ->
        mock = '''
        [foo]
        aws_access_key_id = akid
        aws_secret_access_key = secret
        aws_session_token = session
        '''
        spy = helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.SharedIniFileCredentials(profile: 'foo')
        creds.get();
        validateCredentials(creds)

      it 'sets profile based on ENV', ->
        process.env.AWS_PROFILE = 'foo'
        mock = '''
        [foo]
        aws_access_key_id = akid
        aws_secret_access_key = secret
        aws_session_token = session
        '''
        spy = helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.SharedIniFileCredentials()
        creds.get();
        validateCredentials(creds)

    describe 'refresh', ->
      beforeEach -> process.env.HOME = '/home/user'

      it 'should refresh from disk', ->
        mock = '''
        [default]
        aws_access_key_id = RELOADED
        aws_secret_access_key = RELOADED
        aws_session_token = RELOADED
        '''
        helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        creds = new AWS.SharedIniFileCredentials()
        creds.get();
        validateCredentials(creds, 'RELOADED', 'RELOADED', 'RELOADED')

      it 'fails if credentials are not in the file', ->
        mock = ''
        helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)

        new AWS.SharedIniFileCredentials().refresh (err) ->
          expect(err.message).to.match(/Profile default not found in [\/\\]home[\/\\]user[\/\\].aws[\/\\]credentials/)

        expect(-> new AWS.SharedIniFileCredentials().refresh()).
          to.throw(/Profile default not found in [\/\\]home[\/\\]user[\/\\].aws[\/\\]credentials/)

  describe 'loadRoleProfile', ->
    beforeEach -> 
      process.env.HOME = '/home/user'
    
    it 'will fail if assume role is disabled', ->
      mock = '''
      [default]
      aws_access_key_id = akid
      aws_secret_access_key = secret
      role_arn = arn
      '''
      helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)
      creds = new AWS.SharedIniFileCredentials({disableAssumeRole: true})
      creds.refresh (err) ->
        expect(err.message).to.match(/Role assumption profiles are disabled. Failed to load profile default from [\/\\]home[\/\\]user[\/\\].aws[\/\\]credentials/)
      
    it 'will fail if no source profile is specified', ->
      mock = '''
      [default]
      aws_access_key_id = akid
      aws_secret_access_key = secret
      role_arn = arn
      '''
      helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)
    
      creds = new AWS.SharedIniFileCredentials()
      creds.refresh (err) ->
        expect(err.message).to.match(/source_profile is not set in [\/\\]home[\/\\]user[\/\\].aws[\/\\]credentials using profile default/)
    
    it 'will fail if source profile config is not defined', ->
      mock = '''
      [default]
      aws_access_key_id = akid
      aws_secret_access_key = secret
      role_arn = arn
      source_profile = fake
      '''
      helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)
      
      creds = new AWS.SharedIniFileCredentials()
      creds.refresh (err) ->
        expect(err.message).to.match(/source_profile fake set in [\/\\]home[\/\\]user[\/\\].aws[\/\\]credentials using profile default does not exist/)
    
    it 'will fail if source profile config lacks credentials', ->
      mock = '''
      [default]
      aws_access_key_id = akid
      aws_secret_access_key = secret
      role_arn = arn
      source_profile = foo
      [foo]
      aws_access_key_id = akid2
      '''
      helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)
      
      creds = new AWS.SharedIniFileCredentials()
      creds.refresh (err) ->
        expect(err.message).to.match(/Credentials not set in source_profile foo set in [\/\\]home[\/\\]user[\/\\].aws[\/\\]credentials using profile default/)

    it 'will return credentials for assumed role', (done) ->
      mock = '''
      [default]
      aws_access_key_id = akid
      aws_secret_access_key = secret
      role_arn = arn
      external
      asda
      source_profile = foo
      [foo]
      aws_access_key_id = akid2
      aws_secret_access_key = secret2
      '''
      helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock)
      helpers.mockHttpResponse 200, {}, '''
      <AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
        <AssumeRoleResult>
          <Credentials>
            <AccessKeyId>KEY</AccessKeyId>
            <SecretAccessKey>SECRET</SecretAccessKey>
            <SessionToken>TOKEN</SessionToken>
            <Expiration>1970-01-01T00:00:00.000Z</Expiration>
          </Credentials>
        </AssumeRoleResult>
      </AssumeRoleResponse>
      '''
      creds = new AWS.SharedIniFileCredentials()
      expect(creds.roleArn).to.equal('arn')
      creds.refresh (err) ->
        expect(creds.accessKeyId).to.equal('KEY')
        expect(creds.secretAccessKey).to.equal('SECRET')
        expect(creds.sessionToken).to.equal('TOKEN')
        expect(creds.expireTime).to.eql(new Date(0))
        done()

  describe 'AWS.EC2MetadataCredentials', ->
    creds = null

    beforeEach ->
      creds = new AWS.EC2MetadataCredentials(host: 'host')

    mockMetadataService = (expireTime) ->
      helpers.spyOn(creds.metadataService, 'loadCredentials').andCallFake (cb) ->
          cb null,
            Code: 'Success'
            AccessKeyId: 'KEY'
            SecretAccessKey: 'SECRET'
            Token: 'TOKEN'
            Expiration: expireTime.toISOString()

    describe 'constructor', ->
      it 'allows passing of AWS.MetadataService options', ->
        expect(creds.metadataService.host).to.equal('host')

      it 'does not modify options object', ->
        opts = {}
        creds = new AWS.EC2MetadataCredentials(opts)
        expect(opts).to.eql({})

      it 'allows setting timeout', ->
        opts = httpOptions: timeout: 5000
        creds = new AWS.EC2MetadataCredentials(opts)
        expect(creds.metadataService.httpOptions.timeout).to.equal(5000)

    describe 'needsRefresh', ->
      it 'can be expired based on expire time from EC2 Metadata service', ->
        mockMetadataService(new Date(0))
        creds.refresh(->)
        expect(creds.needsRefresh()).to.equal(true)

    describe 'refresh', ->
      it 'loads credentials from EC2 Metadata service', ->
        mockMetadataService(new Date(AWS.util.date.getDate().getTime() + 100000))
        creds.refresh(->)
        expect(creds.metadata.Code).to.equal('Success')
        expect(creds.accessKeyId).to.equal('KEY')
        expect(creds.secretAccessKey).to.equal('SECRET')
        expect(creds.sessionToken).to.equal('TOKEN')
        expect(creds.needsRefresh()).to.equal(false)

      it 'does try to load creds second time if Metadata service failed', ->
        spy = helpers.spyOn(creds.metadataService, 'loadCredentials').andCallFake (cb) ->
          cb(new Error('INVALID SERVICE'))

        creds.refresh (err) ->
          expect(err.message).to.equal('INVALID SERVICE')
        creds.refresh ->
          creds.refresh ->
            creds.refresh ->
              expect(spy.calls.length).to.equal(4)

  describe 'AWS.ECSCredentials', ->
    creds = null
    responseData = {
      AccessKeyId: 'KEY',
      SecretAccessKey: 'SECRET',
      Token: 'TOKEN',
      Expiration: (new Date(0)).toISOString()
    }

    beforeEach ->
      creds = new AWS.ECSCredentials(host: 'host')
      process.env = {}

    afterEach ->
      process.env = {}

    mockEndpoint = (expireTime) ->
      helpers.spyOn(creds, 'request').andCallFake (path, cb) ->
          expiration = expireTime.toISOString()
          cb null, JSON.stringify(AWS.util.merge(responseData, {Expiration: expiration}))

    describe 'constructor', ->
      it 'allows passing of options', ->
        expect(creds.host).to.equal('host')

      it 'does not modify options object', ->
        opts = {}
        creds = new AWS.ECSCredentials(opts)
        expect(opts).to.eql({})

      it 'allows setting timeout', ->
        opts = httpOptions: timeout: 5000
        creds = new AWS.ECSCredentials(opts)
        expect(creds.httpOptions.timeout).to.equal(5000)

    describe 'getECSRelativeUri', ->
      it 'returns undefined when process is not available', ->
        process_copy = process
        process = undefined
        expect(creds.getECSRelativeUri()).to.equal(undefined)
        process = process_copy

      it 'returns undefined when relative URI environment variable not set', ->
        expect(creds.getECSRelativeUri()).to.equal(undefined)

      it 'returns relative URI when environment variable is set', ->
        process.env['AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'] = '/path'
        expect(creds.getECSRelativeUri()).to.equal('/path')

      it 'returns relative URI from prototype when environment variable is set', ->
        process.env['AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'] = '/path'
        expect(AWS.ECSCredentials.prototype.getECSRelativeUri()).to.equal('/path')

    describe 'credsFormatIsValid', ->
      it 'returns false when data is missing required property', ->
        incompleteData = {AccessKeyId: 'KEY', SecretAccessKey: 'SECRET', Token: 'TOKEN'}
        expect(creds.credsFormatIsValid(incompleteData)).to.be.false

      it 'returns true when data has all required properties', ->
        expect(creds.credsFormatIsValid(responseData)).to.be.true

    describe 'needsRefresh', ->
      it 'can be expired based on expire time from URI endpoint', ->
        process.env['AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'] = '/path'
        spy = mockEndpoint(new Date(0))
        creds.refresh(->)
        expect(spy.calls.length).to.equal(1)
        expect(creds.needsRefresh()).to.equal(true)

    describe 'refresh', ->
      it 'loads credentials from specified relative URI', ->
        callbackErr = null
        process.env['AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'] = '/path'
        spy = mockEndpoint(new Date(AWS.util.date.getDate().getTime() + 100000))
        creds.refresh((err) -> callbackErr = err)
        expect(spy.calls.length).to.equal(1)
        expect(callbackErr).to.be.null
        expect(creds.accessKeyId).to.equal('KEY')
        expect(creds.secretAccessKey).to.equal('SECRET')
        expect(creds.sessionToken).to.equal('TOKEN')
        expect(creds.needsRefresh()).to.equal(false)

      it 'passes an error to the callback when environment variable not set', ->
        callbackErr = null
        spy = mockEndpoint(new Date(AWS.util.date.getDate().getTime() + 100000))
        creds.refresh((err) -> callbackErr = err)
        expect(spy.calls.length).to.equal(0)
        expect(callbackErr).to.not.be.null

      it 'retries up to specified maxRetries for timeout errors', (done) ->
        process.env['AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'] = '/path'
        options = {maxRetries: 3}
        creds = new AWS.ECSCredentials(options)
        httpClient = AWS.HttpClient.getInstance()
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallFake (httpReq, httpOp, cb, errCb) ->
          errCb({code: 'TimeoutError'})
        creds.refresh (err) ->
          expect(err).to.not.be.null
          expect(err.code).to.equal('TimeoutError')
          expect(spy.calls.length).to.equal(4)
          done()

      it 'makes only one request when multiple calls are made before first one finishes', (done) ->
        concurrency = countdown = 10
        process.env['AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'] = '/path'
        spy = helpers.spyOn(AWS.ECSCredentials.prototype, 'request').andCallFake (path, cb) ->
          respond = ->
            cb null, JSON.stringify(responseData)
          process.nextTick(respond)
        providers = []
        callRefresh = (ind) ->
          providers[ind] = new AWS.ECSCredentials(host: 'host')
          providers[ind].refresh (err) ->
            expect(err).to.equal(null)
            expect(providers[ind].accessKeyId).to.equal('KEY')
            countdown--
            if countdown == 0
              expect(spy.calls.length).to.equal(1)
              done()
        for x in [1..concurrency]
          callRefresh(x - 1)

describe 'AWS.TemporaryCredentials', ->
  creds = null

  setupCreds = () ->
    creds = new AWS.TemporaryCredentials(DurationSeconds: 1200)

  setupClients = () ->
    setupCreds()
    creds.createClients()

  mockSTS = (expireTime, inParams) ->
    if !inParams
      inParams = DurationSeconds: 1200
    if inParams.RoleArn
      operation = 'assumeRole'
    else
      operation = 'getSessionToken'
    helpers.spyOn(creds.service, operation).andCallFake (cb) ->
      expect(creds.service.config.params).to.eql(inParams)
      cb null, Credentials:
        AccessKeyId: 'KEY'
        SecretAccessKey: 'SECRET'
        SessionToken: 'TOKEN'
        Expiration: expireTime

  describe 'constructor', ->
    setupCreds()
    it 'constructs service clients lazily', ->
      expect(creds.service).not.to.exist

  describe 'createClients', ->
    beforeEach -> setupCreds()

    it 'constructs clients if not present', ->
      expect(creds.service).not.to.exist
      creds.createClients()
      expect(creds.service).to.exist

    it 'does not construct clients if already present', ->
      creds.createClients()
      service = creds.service
      creds.createClients()
      expect(service).to.eql(creds.service)

  describe 'masterCredentials', ->
    it 'seeds masterCredentials from global credentials', ->
      origCreds = AWS.config.credentials
      AWS.config.credentials = new AWS.Credentials('AKID', 'SECRET')
      creds = new AWS.TemporaryCredentials()
      expect(creds.masterCredentials.accessKeyId).to.equal('AKID')
      expect(creds.masterCredentials.secretAccessKey).to.equal('SECRET')
      AWS.config.credentials = origCreds

    it 'seeds masterCredentials from temporary credentials', ->
      origCreds = AWS.config.credentials
      AWS.config.credentials = new AWS.Credentials('AKID', 'SECRET')
      for i in [0..3]
        creds = new AWS.TemporaryCredentials()
        expect(creds.masterCredentials.accessKeyId).to.equal('AKID')
        expect(creds.masterCredentials.secretAccessKey).to.equal('SECRET')
      AWS.config.credentials = origCreds

    it 'seeds masterCredentials from passed in credentials', ->
      origCreds = AWS.config.credentials
      # change global credentials
      AWS.config.credentials = new AWS.Credentials('AKID', 'SECRET')
      masterCreds = new AWS.Credentials('TEMPID', 'TEMPSECRET')
      creds = new AWS.TemporaryCredentials(null, masterCreds)
      expect(creds.masterCredentials.accessKeyId).to.equal('TEMPID')
      expect(creds.masterCredentials.secretAccessKey).to.equal('TEMPSECRET')
      # make sure global creds are unaltered
      expect(AWS.config.credentials.accessKeyId).to.equal('AKID')
      expect(AWS.config.credentials.secretAccessKey).to.equal('SECRET')
      AWS.config.credentials = origCreds


  describe 'needsRefresh', ->
    it 'can be expired based on expire time from STS response', ->
      setupClients()
      mockSTS(new Date(0))
      creds.refresh(->)
      expect(creds.needsRefresh()).to.equal(true)

  describe 'refresh', ->
    beforeEach -> setupClients()

    it 'loads temporary credentials from STS using getSessionToken', ->
      mockSTS(new Date(AWS.util.date.getDate().getTime() + 100000))
      creds.refresh(->)
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.needsRefresh()).to.equal(false)

    it 'loads temporary credentials from STS using assumeRole if RoleArn is provided', ->
      creds = new AWS.TemporaryCredentials(RoleArn: 'ARN')
      creds.createClients()
      mockSTS(new Date(AWS.util.date.getDate().getTime() + 100000),
        RoleArn: 'ARN', RoleSessionName: 'temporary-credentials')
      creds.refresh(->)
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.needsRefresh()).to.equal(false)

    it 'does try to load creds second time if service request failed', ->
      spy = helpers.spyOn(creds.service, 'getSessionToken').andCallFake (cb) ->
        cb(new Error('INVALID SERVICE'))

      creds.refresh (err) ->
        expect(err.message).to.equal('INVALID SERVICE')
      creds.refresh ->
        creds.refresh ->
          creds.refresh ->
            expect(spy.calls.length).to.equal(4)

describe 'AWS.WebIdentityCredentials', ->
  creds = null

  setupCreds = () ->
    creds = new AWS.WebIdentityCredentials(WebIdentityToken: 'token', RoleArn: 'arn')

  setupClients = () ->
    setupCreds()
    creds.createClients()

  mockSTS = (expireTime) ->
    helpers.spyOn(creds.service, 'assumeRoleWithWebIdentity').andCallFake (cb) ->
      expect(creds.service.config.params).to.eql
        RoleArn: 'arn', WebIdentityToken: 'token',
        RoleSessionName: 'web-identity'
      cb null,
        Credentials:
          AccessKeyId: 'KEY'
          SecretAccessKey: 'SECRET'
          SessionToken: 'TOKEN'
          Expiration: expireTime
        OtherProperty: true

  describe 'constructor', ->
    it 'lazily constructs service clients', ->
      setupCreds()
      expect(creds.service).not.to.exist

  describe 'createClients', ->
    beforeEach -> setupCreds()

    it 'constructs service clients if not present', ->
      expect(creds.service).not.to.exist
      creds.createClients()
      expect(creds.service).to.exist

    it 'does not construct service clients if present', ->
      creds.createClients()
      service = creds.service
      creds.createClients()
      expect(service).to.eql(creds.service)

    it 'uses global config for service clients if client config ommitted', ->
      creds.createClients();
      expect(creds.service.config.httpOptions.timeout).to.equal(AWS.config.httpOptions.timeout)

    it 'passes clientConfig to service clients', ->
      creds = new AWS.WebIdentityCredentials({WebIdentityToken: 'token', RoleArn: 'arn'}, {httpOptions: {timeout: 50}})
      creds.createClients();
      expect(creds.service.config.httpOptions.timeout).to.equal(50);

  describe 'refresh', ->
    beforeEach -> setupClients()

    it 'loads federated credentials from STS', ->
      mockSTS(new Date(AWS.util.date.getDate().getTime() + 100000))
      creds.refresh(->)
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.needsRefresh()).to.equal(false)
      expect(creds.data.OtherProperty).to.equal(true)

    it 'does try to load creds second time if service request failed', ->
      spy = helpers.spyOn(creds.service, 'assumeRoleWithWebIdentity').andCallFake (cb) ->
        cb(new Error('INVALID SERVICE'))

      creds.refresh (err) ->
        expect(err.message).to.equal('INVALID SERVICE')
      creds.refresh ->
        creds.refresh ->
          creds.refresh ->
            expect(spy.calls.length).to.equal(4)

describe 'AWS.SAMLCredentials', ->
  creds = null

  setupCreds = () ->
    creds = new AWS.SAMLCredentials(SAMLAssertion: 'token', RoleArn: 'arn', PrincipalArn: 'arn')

  setupClients = () ->
    setupCreds()
    creds.createClients()

  mockSTS = (expireTime) ->
    helpers.spyOn(creds.service, 'assumeRoleWithSAML').andCallFake (cb) ->
      expect(creds.service.config.params).to.eql
        SAMLAssertion: 'token', RoleArn: 'arn', PrincipalArn: 'arn'
      cb null, Credentials:
        AccessKeyId: 'KEY'
        SecretAccessKey: 'SECRET'
        SessionToken: 'TOKEN'
        Expiration: expireTime

  describe 'constructor', ->
    setupCreds()
    it 'constructs service clients lazily', ->
      expect(creds.service).not.to.exist

  describe 'createClients', ->
    setupCreds()
    it 'constructs clients if not present', ->
      expect(creds.service).not.to.exist
      creds.createClients()
      expect(creds.service).to.exist

    it 'does not construct clients if already present', ->
      creds.createClients()
      service = creds.service
      creds.createClients()
      expect(service).to.eql(creds.service)

  describe 'refresh', ->
    beforeEach -> setupClients()

    it 'loads federated credentials from STS', ->
      mockSTS(new Date(AWS.util.date.getDate().getTime() + 100000))
      creds.refresh(->)
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.needsRefresh()).to.equal(false)

    it 'does try to load creds second time if service request failed', ->
      spy = helpers.spyOn(creds.service, 'assumeRoleWithSAML').andCallFake (cb) ->
        cb(new Error('INVALID SERVICE'))

      creds.refresh (err) ->
        expect(err.message).to.equal('INVALID SERVICE')
      creds.refresh ->
        creds.refresh ->
          creds.refresh ->
            expect(spy.calls.length).to.equal(4)

describe 'AWS.CognitoIdentityCredentials', ->
  if AWS.util.isNode()
    AWS.util.nodeRequire = require

  initParams =
    AccountId: '1234567890'
    IdentityPoolId: 'pool:id'
    RoleArn: 'arn'
  creds = new AWS.CognitoIdentityCredentials(initParams)

  afterEach ->
    creds.clearCachedId()

  setupCreds = (params) ->
    params = AWS.util.merge(initParams, params)
    creds = new AWS.CognitoIdentityCredentials(params)
    helpers.spyOn(creds, 'cacheId').andCallThrough()

  setupClients = (params) ->
    setupCreds(params)
    creds.createClients()

  describe 'constructor (browser)', ->
    beforeEach -> helpers.spyOn(AWS.util, 'isBrowser').andReturn(true)

    it 'loads IdentityId from localStorage cache if none provided', ->

      creds.setStorage('id', 'MYID')
      setupCreds()
      expect(creds.params.IdentityId).to.equal('MYID')

    it 'does not load IdentityId from cache if provided', ->
      creds.setStorage('id', 'NOTMYID')
      setupCreds(IdentityId: 'MYID')
      expect(creds.params.IdentityId).to.equal('MYID')

    it 'uses IdentityId if it is cached against one of Logins', ->
      creds.setStorage('id', 'MYID')
      creds.setStorage('providers', 'provider1')
      setupCreds(Logins: {provider1: 'Token'})
      expect(creds.params.IdentityId).to.equal('MYID')

      creds.setStorage('providers', 'provider1,provider2,provider3')
      setupCreds(Logins: {provider1: 'Token'})
      expect(creds.params.IdentityId).to.equal('MYID')

      creds.setStorage('providers', 'provider1,provider2,provider3')
      setupCreds(Logins: {provider1: 'Token1', provider3: 'Token3'})
      expect(creds.params.IdentityId).to.equal('MYID')

    it 'uses IdentityId if it is cached with the same LoginId', ->
      setupCreds({LoginId: 'LOGINID1'})
      creds.setStorage('id', 'MYID1')
      creds.loadCachedId()
      expect(creds.params.IdentityId).to.equal('MYID1')
      setupCreds({LoginId: 'LOGINID2'})
      expect(creds.params.IdentityId).not.to.equal('MYID1')

    it 'ignores IdentityId if it is not cached against any of Logins', ->
      creds.setStorage('id', 'MYID')
      creds.setStorage('providers', 'provider4,provider5')
      setupCreds(Logins: {provider1: 'Token'})
      expect(creds.params.IdentityId).not.to.exist

    it 'constructs service clients lazily', ->
      expect(creds.cognito).not.to.exist
      expect(creds.sts).not.to.exist
      expect(creds.webIdentityCredentials).not.to.exist

  describe 'clearCachedId', ->
    it 'should clear cache information', ->
      creds.setStorage('id', 'MYID')
      creds.setStorage('providers', 'provider1')
      creds.clearCachedId()
      expect(creds.getStorage('id')).not.to.exist
      expect(creds.getStorage('providers')).not.to.exist

    it 'should clear instance information', ->
      creds.identityId = 'foo'
      creds.params.IdentityId = 'foo'
      creds.clearCachedId()
      expect(creds.identityId).not.to.exist
      expect(creds.params.IdentityId).not.to.exist

  describe 'clearIdOnNotAuthorized', ->
    
    it 'should call clearCachedId if user is not authorized', ->
      clearCache = helpers.spyOn(creds,'clearCachedId')
      idErr = {code: 'NotAuthorizedException'}
      creds.clearIdOnNotAuthorized(idErr)
      expect(clearCache.calls.length).to.equal(1)
      
    it 'should not call clearCachedId if user is authorized', ->
      clearCache = helpers.spyOn(creds,'clearCachedId')
      idErr = {code: 'TEST'}
      creds.clearIdOnNotAuthorized(idErr)
      expect(clearCache.calls.length).to.equal(0)

  describe 'createClients', ->
    beforeEach -> setupCreds()

    it 'constructs service clients if not present', ->
      expect(creds.cognito).not.to.exist
      expect(creds.sts).not.to.exist
      expect(creds.webIdentityCredentials).not.to.exist
      creds.createClients()
      expect(creds.cognito).to.exist
      expect(creds.sts).to.exist
      expect(creds.webIdentityCredentials).to.exist

    it 'does not construct clients if already present', ->
      creds.createClients()
      cognito = creds.cognito
      sts = creds.sts
      webIdentityCredentials = creds.webIdentityCredentials
      creds.createClients()
      expect(creds.cognito).to.eql(cognito)
      expect(creds.sts).to.eql(sts)
      expect(creds.webIdentityCredentials).to.eql(webIdentityCredentials)

    it 'uses global config for service clients if client config ommitted', ->
      creds.createClients();
      expect(creds.cognito.config.region).to.equal(AWS.config.region);
      expect(creds.cognito.config.httpOptions.timeout).to.equal(AWS.config.httpOptions.timeout);
      expect(creds.sts.config.httpOptions.timeout).to.equal(AWS.config.httpOptions.timeout)
      creds.webIdentityCredentials.createClients();
      expect(creds.webIdentityCredentials.service.config.httpOptions.timeout).to.equal(AWS.config.httpOptions.timeout)

    it 'passes clientConfig to service clients', ->
      creds = new AWS.CognitoIdentityCredentials(initParams, {region: 'us-west-2', httpOptions: {timeout: 50}})
      creds.createClients();
      expect(creds.cognito.config.region).to.equal('us-west-2');
      expect(creds.cognito.config.httpOptions.timeout).to.equal(50);
      expect(creds.sts.config.httpOptions.timeout).to.equal(50);
      creds.webIdentityCredentials.createClients();
      expect(creds.webIdentityCredentials.service.config.httpOptions.timeout).to.equal(50);

  describe 'refresh', ->
    beforeEach -> setupClients()

    it 'runs getId, getCredentialsForIdentity when no role is passed in', ->
      delete creds.cognito.config.params.RoleArn
      helpers.mockResponses [
        { data: { IdentityId: 'IDENTITY-ID1' }, error: null },
        { data:
            IdentityId: 'IDENTITY-ID2',
            Credentials:
              AccessKeyId: 'KEY',
              SecretKey: 'SECRET',
              SessionToken: 'TOKEN'
          error: null }
      ]
      helpers.spyOn(creds.cognito, 'getCredentialsForIdentity').andCallThrough()
      creds.refresh(->)
      expect(creds.cognito.getCredentialsForIdentity.calls.length).to.eql(1)
      expect(creds.identityId).to.equal('IDENTITY-ID2')
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.needsRefresh()).to.equal(false)
      expect(creds.cacheId.calls.length).to.equal(1)


    it 'runs getId, getOpenIdToken, assumeRoleWithWebIdentity when a role is passed in', ->
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: {Token: 'TOKEN', IdentityId: 'IDENTITY-ID2'}, error: null}
      ]
      helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake (cb) ->
        expect(creds.webIdentityCredentials.params.IdentityId).to.equal('IDENTITY-ID2')
        expect(creds.webIdentityCredentials.params.WebIdentityToken).to.equal('TOKEN')
        creds.webIdentityCredentials.data =
          Credentials:
            AccessKeyId: 'KEY'
            SecretAccessKey: 'SECRET'
            SessionToken: 'TOKEN'
        cb null
      creds.refresh(->)
      expect(creds.identityId).to.equal('IDENTITY-ID2')
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.needsRefresh()).to.equal(false)
      expect(creds.cacheId.calls.length).to.equal(1)

    it 'does not call getId if IdentityId is passed in', ->
      setupClients IdentityId: 'MYID'
      helpers.mockResponses [
        {data: {Token: 'TOKEN', IdentityId: 'MYID2'}, error: null}
      ]
      helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake (cb) ->
        expect(creds.webIdentityCredentials.params.IdentityId).to.equal('MYID2')
        expect(creds.webIdentityCredentials.params.WebIdentityToken).to.equal('TOKEN')
        creds.webIdentityCredentials.data =
          Credentials:
            AccessKeyId: 'KEY'
            SecretAccessKey: 'SECRET'
            SessionToken: 'TOKEN'
        cb null
      creds.refresh(->)
      expect(creds.identityId).to.equal('MYID2')
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.needsRefresh()).to.equal(false)
      expect(creds.cacheId.calls.length).to.equal(1)

    it 'fails if getId fails', ->
      helpers.mockResponses [
        {data: null, error: new Error('INVALID SERVICE')}
      ]
      helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake (cb) ->
        cb(new Error('INVALID SERVICE'))
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).not.to.exist

    it 'fails if getOpenIdToken fails', ->
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: null, error: new Error('INVALID SERVICE')}
      ]
      helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake(->)
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).not.to.exist

    it 'fails if getCredentialsForIdentity fails', ->
      delete creds.cognito.config.params.RoleArn
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: null, error: new Error('INVALID SERVICE')}
      ]
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).not.to.exist

    it 'clears cache if getId fails for unauthorized user', ->
      creds.setStorage('id', 'MYID')
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: null, error: {message : 'INVALID SERVICE', code: 'NotAuthorizedException'} }
      ]
      helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake(->)
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).not.to.exist

    it 'does not clear cache if getId fails for authorized user', ->
      creds.setStorage('id', 'MYID')
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: null, error: new Error('INVALID SERVICE')}
      ]
      helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake(->)
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).to.exist

    it 'clears cache if getOpenIdToken fails for unauthorized user', ->
      creds.setStorage('id', 'MYID')
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: null, error: {message : 'INVALID SERVICE', code: 'NotAuthorizedException'}}
      ]
      helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake(->)
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).not.to.exist

    it 'does not clear cache if getOpenIdToken fails for authorized user', ->
      creds.setStorage('id', 'MYID')
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: null, error: new Error('INVALID SERVICE')}
      ]
      helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake(->)
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).to.equal('MYID')

    it 'clears cache if getCredentialsForIdentity fails for unauthorized user', ->
      delete creds.cognito.config.params.RoleArn
      creds.setStorage('id', 'MYID')
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: null, error: {message : 'INVALID SERVICE', code: 'NotAuthorizedException'}}
      ]
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).not.to.exist

    it 'does not clear cache if getCredentialsForIdentity fails for authorized user', ->
      delete creds.cognito.config.params.RoleArn
      creds.setStorage('id', 'MYID')
      helpers.mockResponses [
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: null, error: new Error('INVALID SERVICE')}
      ]
      creds.refresh (err) -> expect(err.message).to.equal('INVALID SERVICE')
      expect(creds.cacheId.calls.length).to.equal(0)
      expect(creds.getStorage('id')).to.equal('MYID')

    it 'does try to load creds second time if service request failed', ->
      reqs = helpers.mockResponses [
        {error: {code: 'InvalidService'}, data: null},
        {data: {IdentityId: 'IDENTITY-ID'}, error: null},
        {data: {Token: 'TOKEN'}, error: null},
        {data: {Credentials: {AccessKeyId: 'akid', SecretAccessKey: 'secret'}}, error: null}
      ]

      creds.refresh (err) ->
        expect(err.code).to.equal('InvalidService')
      creds.refresh ->
        expect(creds.accessKeyId).to.equal('akid')
        expect(creds.secretAccessKey).to.equal('secret')

    describe 'browser caching', ->
      beforeEach -> helpers.spyOn(AWS.util, 'isBrowser').andReturn(true)

      it 'caches IdentityId into localStorage on successful handshake', ->
        setupClients Logins: provider1: 'TOKEN1', provider2: 'TOKEN2'
        helpers.mockResponses [
          {data: {IdentityId: 'IDENTITY-ID1'}, error: null},
          {data: {Token: 'TOKEN', IdentityId: 'IDENTITY-ID2'}, error: null}
        ]
        helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake (cb) ->
          creds.webIdentityCredentials.data =
            Credentials:
              AccessKeyId: 'KEY'
              SecretAccessKey: 'SECRET'
              SessionToken: 'TOKEN'
          cb null
        creds.refresh(->)
        expect(creds.getStorage('id')).to.equal('IDENTITY-ID2')
        expect(creds.getStorage('providers')).to.equal('provider1,provider2')

      it 'returns cached id in getId call', ->
        setupClients Logins: provider1: 'TOKEN1', provider2: 'TOKEN2'
        helpers.mockResponses [
          {data: {IdentityId: 'IDENTITY-ID1'}, error: null},
          {data: {Token: 'TOKEN', IdentityId: 'IDENTITY-ID2'}, error: null}
        ]
        helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake (cb) ->
          creds.webIdentityCredentials.data =
            Credentials:
              AccessKeyId: 'KEY'
              SecretAccessKey: 'SECRET'
              SessionToken: 'TOKEN'
          cb null
        creds.refresh(->)
        creds.getId (err, id) ->
          expect(id).to.equal('IDENTITY-ID2')
          expect(creds.getStorage('id')).to.equal('IDENTITY-ID2')

      it 'returns cached id in getId call with LoginId', ->
        setupClients LoginId: 'LOGINIDA'
        helpers.mockResponses [
          {data: {IdentityId: 'IDENTITY-ID1'}, error: null},
          {data: {TOKEN: 'TOKEN', IdentityId: 'IDENTITY-ID2'}, error: null}
        ]
        helpers.spyOn(creds.webIdentityCredentials, 'refresh').andCallFake (cb) ->
          creds.webIdentityCredentials.data =
            Credentials:
              AccessKeyId: 'KEY'
              SecretAccessKey: 'SECRET'
              SessionToken: 'TOKEN'
          cb null
        creds.refresh(->)
        creds.getId (err, id) ->
          expect(id).to.equal('IDENTITY-ID2')
          expect(creds.getStorage('id')).to.equal('IDENTITY-ID2')
        setupCreds({LoginId: 'LOGINIDB'})
        expect(creds.getStorage('id')).not.to.equal('IDENTITY-ID2')
        creds.params.LoginId = 'LOGINIDA'
        creds.clearCachedId()

      it 'allows access to cached identityId even after a failed attempt to refresh credentials', ->
        creds.setStorage('id', 'MYID')
        expect(creds.identityId).to.equal('MYID')

  if typeof Promise == 'function'
    describe 'promises', ->
      err = null
      mockCred = null

      catchFunction = (e) ->
        err = e

      beforeEach ->
        AWS.util.addPromises(AWS.Credentials, Promise)

      beforeEach ->
        err = null
        mockCred = new helpers.MockCredentialsProvider()

      describe 'getPromise', ->
        spy = null

        beforeEach ->
          spy = helpers.spyOn(mockCred, 'refresh').andCallThrough()

        it 'resolves when get is successful', ->
          # if a promise is returned from a test, then done callback not needed
          # and next test will wait for promise to resolve before running
          return mockCred.getPromise().then ->
            expect(spy.calls.length).to.equal(1)
            expect(err).to.be.null
            expect(mockCred.accessKeyId).to.equal('akid')
            expect(mockCred.secretAccessKey).to.equal('secret')

        it 'rejects when get is unsuccessful', ->
          mockCred.forceRefreshError = true
          return mockCred.getPromise().catch(catchFunction).then ->
            expect(spy.calls.length).to.equal(1)
            expect(err).to.not.be.null
            expect(err.code).to.equal('MockCredentialsProviderFailure')
            expect(err.message).to.equal('mock credentials refresh error')
            expect(mockCred.accessKeyId).to.be.undefined
            expect(mockCred.secretAccessKey).to.be.undefined

      describe 'refreshPromise', ->
        it 'resolves when refresh is successful', ->
          refreshError = false
          return mockCred.refreshPromise().then ->
            expect(err).to.be.null
            expect(mockCred.accessKeyId).to.equal('akid')
            expect(mockCred.secretAccessKey).to.equal('secret')

        it 'rejects when refresh is unsuccessful', ->
          mockCred.forceRefreshError = true
          return mockCred.refreshPromise().catch(catchFunction).then ->
            expect(err).to.not.be.null
            expect(err.code).to.equal('MockCredentialsProviderFailure')
            expect(err.message).to.equal('mock credentials refresh error')
            expect(mockCred.accessKeyId).to.be.undefined
            expect(mockCred.secretAccessKey).to.be.undefined
