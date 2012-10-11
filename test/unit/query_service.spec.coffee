AWS = require('../../lib/core')
require('../../lib/query_service')

describe 'AWS.QueryService', ->

  MockQueryService = AWS.util.inherit AWS.QueryService,
    constructor: (config) -> 
      this.serviceName = 'mockservice'
      AWS.QueryService.call(this, config)

  MockQueryService.prototype.api =
    apiVersion: '2012-01-01'
    operations:
      simpleMethod:
        n: 'OperationName'
        i: { Input:{} }

  AWS.Service.defineMethods(MockQueryService)

  svc = new MockQueryService()

  it 'defines a method for each api operation', ->
    expect(typeof svc.simpleMethod).toEqual('function')

  describe 'buildRequest', ->

    req = svc.buildRequest('simpleMethod', { Input:'foo+bar: yuck/baz=~' })

    it 'should use POST method requests', ->
      expect(req.method).toEqual('POST')

    it 'should perform all operations on root (/)', ->
      expect(req.uri).toEqual('/')

    it 'should set Content-Type header', ->
      expect(req.headers['Content-Type']).
        toEqual('application/x-www-form-urlencoded; charset=utf-8')

    it 'should add the api version param', ->
      expect(req.params.toString()).toMatch(/Version=2012-01-01/)

    it 'should add the operation name as Action', ->
      expect(req.params.toString()).toMatch(/Action=OperationName/)

    it 'should uri encode params properly', ->
      expect(req.params.toString()).toMatch(/foo%2Bbar%3A%20yuck%2Fbaz%3D~/);

  describe 'extractError', ->

    httpResponse = new AWS.HttpResponse()
    httpResponse.statusCode = 400
    httpResponse.body = """
    <Response>
      <Errors>
        <Error>
          <Code>InvalidInstanceID.Malformed</Code>
          <Message>Invalid id: "i-12345678"</Message>
        </Error>
      </Errors>
      <RequestID>ab123mno-6432-dceb-asdf-123mno543123</RequestID>
    </Response>
    """

    it 'extracts the error code', ->
      expect(svc.extractError(httpResponse).code).
        toEqual('InvalidInstanceID.Malformed')

    it 'extracts the error message', ->
      expect(svc.extractError(httpResponse).message).
        toEqual('Invalid id: "i-12345678"')

