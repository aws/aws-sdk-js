AWS = require('../lib/aws')
config = new AWS.FileSystemConfig('configuration')

describe 'AWS.DynamoDB', ->
  service = new AWS.DynamoDB(config)

  describe 'listTables', ->
    it 'should send a request', ->
      req = service.listTables()
      data = null
      runs ->
        req.done (doneData, context) ->
          data = doneData
        req.fail (error, context) ->
          data = null
      waitsFor ->
        data != null
      runs ->
        expect(JSON.stringify(data)).toBe("{}")
