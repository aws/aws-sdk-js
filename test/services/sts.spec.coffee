helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.STS', ->

  sts = null
  beforeEach ->
    sts = new AWS.STS()

  describe 'credentialsFrom', ->
    it 'returns null if no data is provided', ->
      expect(sts.credentialsFrom(null)).to.equal(null)

    it 'creates a TemporaryCredentials object with hydrated data', ->
      creds = sts.credentialsFrom Credentials:
         AccessKeyId: 'KEY'
         SecretAccessKey: 'SECRET'
         SessionToken: 'TOKEN'
         Expiration: new Date(0)
      expect(creds instanceof AWS.TemporaryCredentials)
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.expireTime).to.eql(new Date(0))
      expect(creds.expired).to.equal(false)

    it 'updates an existing Credentials object with hydrated data', ->
      data = Credentials:
         AccessKeyId: 'KEY'
         SecretAccessKey: 'SECRET'
         SessionToken: 'TOKEN'
         Expiration: new Date(0)
      creds = new AWS.Credentials
      sts.credentialsFrom(data, creds)
      expect(creds).to.be.instanceOf(AWS.Credentials)
      expect(creds.accessKeyId).to.equal('KEY')
      expect(creds.secretAccessKey).to.equal('SECRET')
      expect(creds.sessionToken).to.equal('TOKEN')
      expect(creds.expireTime).to.eql(new Date(0))
      expect(creds.expired).to.equal(false)

  describe 'assumeRoleWithWebIdentity', ->
    service = new AWS.STS

    it 'sends an unsigned GET request (params in query string)', ->
      helpers.mockHttpResponse 200, {}, '{}'
      params = RoleArn: 'ARN', RoleSessionName: 'NAME', WebIdentityToken: 'TOK'
      service.assumeRoleWithWebIdentity params, ->
        hr = this.request.httpRequest
        expect(hr.method).to.equal('GET')
        expect(hr.body).to.equal('')
        expect(hr.headers['Authorization']).to.equal(undefined)
        expect(hr.headers['Content-Type']).to.equal(undefined)
        expect(hr.path).to.equal('/?Action=AssumeRoleWithWebIdentity&' +
          'RoleArn=ARN&RoleSessionName=NAME&Version=' +
          service.api.apiVersion + '&WebIdentityToken=TOK')

    it 'can build a get request on a mounted path (custom endpoint)', ->
      helpers.mockHttpResponse 200, {}, '{}'
      service = new AWS.STS(endpoint: 'http://localhost/foo/bar')
      params = RoleArn: 'ARN', RoleSessionName: 'NAME', WebIdentityToken: 'TOK'
      service.assumeRoleWithWebIdentity params, ->
        hr = this.request.httpRequest
        expect(hr.path).to.equal('/foo/bar?Action=AssumeRoleWithWebIdentity&' +
          'RoleArn=ARN&RoleSessionName=NAME&Version=' +
          service.api.apiVersion + '&WebIdentityToken=TOK')

  describe 'assumeRoleWithSAML', ->
    service = new AWS.STS

    it 'sends an unsigned GET request (params in query string)', ->
      helpers.mockHttpResponse 200, {}, '{}'
      params = RoleArn: 'ARN', PrincipalArn: 'PARN', SAMLAssertion: 'OK'
      service.assumeRoleWithSAML params, ->
        hr = this.request.httpRequest
        expect(hr.method).to.equal('GET')
        expect(hr.body).to.equal('')
        expect(hr.headers['Authorization']).to.equal(undefined)
        expect(hr.headers['Content-Type']).to.equal(undefined)
        expect(hr.path).to.equal('/?Action=AssumeRoleWithSAML&' +
          'PrincipalArn=PARN&RoleArn=ARN&SAMLAssertion=OK&' +
          'Version=' + service.api.apiVersion)
