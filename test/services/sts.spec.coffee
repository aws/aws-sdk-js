helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.STS', ->

  sts = null
  beforeEach ->
    sts = new AWS.STS()

  describe 'credentialsFrom', ->
    it 'returns null if no data is provided', ->
      expect(sts.credentialsFrom(null)).toEqual(null)

    it 'creates a TemporaryCredentials object with hydrated data', ->
      creds = sts.credentialsFrom Credentials:
         AccessKeyId: 'KEY'
         SecretAccessKey: 'SECRET'
         SessionToken: 'TOKEN'
         Expiration: new Date(0)
      expect(creds instanceof AWS.TemporaryCredentials)
      expect(creds.accessKeyId).toEqual('KEY')
      expect(creds.secretAccessKey).toEqual('SECRET')
      expect(creds.sessionToken).toEqual('TOKEN')
      expect(creds.expireTime).toEqual(new Date(0))
      expect(creds.expired).toEqual(false)

    it 'updates an existing Credentials object with hydrated data', ->
      data = Credentials:
         AccessKeyId: 'KEY'
         SecretAccessKey: 'SECRET'
         SessionToken: 'TOKEN'
         Expiration: new Date(0)
      creds = new AWS.Credentials
      sts.credentialsFrom(data, creds)
      expect(creds instanceof AWS.Credentials)
      expect(creds.accessKeyId).toEqual('KEY')
      expect(creds.secretAccessKey).toEqual('SECRET')
      expect(creds.sessionToken).toEqual('TOKEN')
      expect(creds.expireTime).toEqual(new Date(0))
      expect(creds.expired).toEqual(false)

  describe 'assumeRoleWithWebIdentity', ->
    service = new AWS.STS

    it 'sends an unsigned GET request (params in query string)', ->
      helpers.mockHttpResponse 200, {}, '{}'
      params = RoleArn: 'ARN', RoleSessionName: 'NAME', WebIdentityToken: 'TOK'
      service.assumeRoleWithWebIdentity params, ->
        hr = this.request.httpRequest
        expect(hr.method).toEqual('GET')
        expect(hr.body).toEqual('')
        expect(hr.headers['Authorization']).toEqual(undefined)
        expect(hr.headers['Content-Type']).toEqual(undefined)
        expect(hr.path).toEqual('/?Action=AssumeRoleWithWebIdentity&' +
          'RoleArn=ARN&RoleSessionName=NAME&Version=' +
          service.api.apiVersion + '&WebIdentityToken=TOK')

  describe 'assumeRoleWithSAML', ->
    service = new AWS.STS

    it 'sends an unsigned GET request (params in query string)', ->
      helpers.mockHttpResponse 200, {}, '{}'
      params = RoleArn: 'ARN', PrincipalArn: 'PARN', SAMLAssertion: 'OK'
      service.assumeRoleWithSAML params, ->
        hr = this.request.httpRequest
        expect(hr.method).toEqual('GET')
        expect(hr.body).toEqual('')
        expect(hr.headers['Authorization']).toEqual(undefined)
        expect(hr.headers['Content-Type']).toEqual(undefined)
        expect(hr.path).toEqual('/?Action=AssumeRoleWithSAML&' +
          'PrincipalArn=PARN&RoleArn=ARN&SAMLAssertion=OK&' +
          'Version=' + service.api.apiVersion)
