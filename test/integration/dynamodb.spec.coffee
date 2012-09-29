helpers = require('./helpers'); AWS = helpers.AWS

describe 'AWS.DynamoDB', ->
  service = new AWS.DynamoDB()

  describe 'listTables', ->
    it 'should send a request with parameters', ->
      helpers.integration (-> service.listTables(Limit: 3)), (resp) ->
        expect(resp.error).toEqual(null)
        expect(JSON.stringify(resp.data)).toMatch(/\{.*"TableNames":.*\}/)
        expect(resp.httpRequest.body).toEqual('{"Limit":3}')

  describe 'deleteItem', ->
    it 'should fail if TableName not provided', ->
      helpers.integration (-> service.deleteItem()), (resp) ->
        errObj =
          code: 'ValidationException',
          message: 'The paramater \'tableName\' is required but was not present in the request'
        expect(resp.error).toEqual(errObj)
        expect(resp.data).toEqual(null)
