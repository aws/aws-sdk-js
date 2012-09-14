helpers = require('./helpers'); AWS = helpers.AWS

describe 'AWS.SimpleWorkflow', ->
  service = new AWS.SimpleWorkflow(helpers.config)

  describe 'listDomains', ->
    it 'should send a request with parameters', ->
      helpers.integration (-> service.listDomains(registrationStatus: "REGISTERED")), (resp) ->
        expect(resp.error).toEqual(null)
        expect(JSON.stringify(resp.data)).toMatch(/\{"domainInfos":.*\}/)
        expect(resp.httpRequest.body).toEqual('{"registrationStatus":"REGISTERED"}')

  describe 'getWorkflowExecutionHistory', ->
    it 'should fail if TableName not provided', ->
      helpers.integration (-> service.getWorkflowExecutionHistory()), (resp) ->
        expect(resp.error.code).toEqual('ValidationException')
        expect(resp.error.message).toMatch(/Value null at 'domain' failed to satisfy constraint: Member must not be null/)
        expect(resp.data).toEqual(null)
