AWS = require('../../lib/aws')
config = new AWS.FileSystemConfig('configuration')

integration = (expected) ->
  req = this.suite.parentSuite.service[this.suite.description]()
  resp = null
  runs ->
    req.always (respObject) ->
      resp = respObject
  waitsFor ->
    resp != null
  runs ->
    expect(resp.error).toBe(null)
    expect(JSON.stringify(resp.data)).toBe(expected)

describe 'AWS.DynamoDB', ->
  this.service = new AWS.DynamoDB(config)

  describe 'listTables', ->
    it 'should send a request', ->
      helpers.integration.apply(this, ['{"TableNames":[]}'])
