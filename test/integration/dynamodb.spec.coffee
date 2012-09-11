AWS = require('../../lib/aws')
config = new AWS.FileSystemConfig('configuration')

integration = (test, callback) ->
  req = test.suite.parentSuite.service[test.suite.description]()
  resp = null
  runs ->
    req.always (respObject) ->
      resp = respObject
  waitsFor ->
    resp != null
  runs ->
    callback(resp)

describe 'AWS.DynamoDB', ->
  this.service = new AWS.DynamoDB(config)

  describe 'listTables', ->
    it 'should send a request', ->
      integration this, (resp) ->
        expect(resp.error).toBe(null)
        expect(JSON.stringify(resp.data)).toEqual('{"TableNames":[]}')
