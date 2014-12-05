helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.DynamoDB', ->

  configure = (options) ->
    new AWS.Config(options)

  ddb = (options) ->
    new AWS.DynamoDB(configure(options))

  describe 'config', ->

    it 'returns the configuration object it was constructed with', ->
      config = configure(endpoint: 'localhost')
      dynamo = new AWS.DynamoDB(config)
      expect(dynamo.config).to.eql(config)

  describe 'numRetries', ->

    it 'defaults to 10', ->
      expect(ddb().numRetries()).to.equal(10)

    it 'can be overridden in the config', ->
      expect(ddb({ maxRetries: 2 }).numRetries()).to.equal(2)

  describe 'retryDelays', ->

    it 'has a custom backoff function', ->
      delays = [ 0, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800 ]
      expect(ddb().retryDelays()).to.eql(delays)

  describe 'CRC32 check', ->
    dynamo = null;

    beforeEach ->
      dynamo = ddb(accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2')

    if AWS.util.isNode()
      it 'does not verify response checksum when streaming', ->
        spy = helpers.spyOn(dynamo, 'crc32IsValid')
        helpers.mockHttpResponse 200, {'x-amz-crc32': '1575962599'}, """{"TableNames":["mock-table"]}"""
        request = dynamo.makeRequest('listTables')
        s = request.createReadStream()
        s.on 'end', ->
          expect(spy.calls.length).to.eql(0)

    it 'does verify response checksum when not streaming', ->
      spy = helpers.spyOn(dynamo, 'crc32IsValid').andCallThrough()
      helpers.mockHttpResponse 200, {'x-amz-crc32': '1575962599'}, """{"TableNames":["mock-table"]}"""
      request = dynamo.makeRequest('listTables')
      request.send (err, data) ->
        expect(spy.calls.length).to.eql(1)
