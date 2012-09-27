AWS = require('../../lib/core')
require('../../lib/rpc_service')

describe 'AWS.RPCService', ->

  MockQueryService = AWS.util.inherit AWS.QueryService,
    constructor: (config) -> 
      this.serviceName = 'mockservice'
      AWS.QueryService.call(this, config)

  MockQueryService.prototype.api =
    apiVersion: '2012-01-01'
    operations:
      simpleMethod:
        n: 'OperationName'

  AWS.Service.defineMethods(MockQueryService)

  svc = new MockQueryService()

  it 'defines a method for each api operation', ->
    expect(typeof svc.simpleMethod).toEqual('function')

  describe 'buildRequest', ->

    req = svc.buildRequest('simpleMethod', {})

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

