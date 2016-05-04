helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.DynamoDB', ->

  configure = (options) ->
    new AWS.Config(options)

  ddb = (options) ->
    new AWS.DynamoDB(configure(options))

  client = ddb()

  describe 'config', ->

    it 'returns the configuration object it was constructed with', ->
      config = configure(endpoint: 'localhost')
      dynamo = new AWS.DynamoDB(config)
      expect(dynamo.config).to.eql(config)

  describe 'numRetries', ->

    it 'defaults to 10', ->
      expect(client.numRetries()).to.equal(10)

    it 'can be overridden in the config', ->
      expect(ddb({ maxRetries: 2 }).numRetries()).to.equal(2)

  describe 'retryDelays', ->

    it 'has a custom backoff function', ->
      expectedDelays = [ 0, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800 ]
      actualDelays = (client.retryDelays(i) for i in [0..client.numRetries()-1])
      expect(actualDelays).to.eql(expectedDelays)

  describe 'CRC32 check', ->
    dynamo = null

    beforeEach ->
      dynamo = ddb(accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2')

    if AWS.util.isNode()
      it 'does not verify response checksum when streaming', (done) ->
        err = null
        helpers.mockHttpResponse 200, {'x-amz-crc32': '0'}, """{"TableNames":["mock-table"]}"""
        request = dynamo.listTables()
        request.on 'complete', ->
          expect(err).to.eql(null)
          done()
        s = request.createReadStream()
        s.on 'data', ->
        s.on 'error', (e) -> err = e

    it 'does verify response checksum when not streaming', ->
      helpers.mockHttpResponse 200, {'x-amz-crc32': '1575962599'}, """{"TableNames":["mock-table"]}"""
      request = dynamo.listTables()
      request.send (err, data) ->
        expect(err).to.eql(null)

    it 'does not verify response checksum when no [x-amz-crc32] header', ->
      helpers.mockHttpResponse 200, {}, """{"TableNames":["mock-table"]}"""
      request = dynamo.listTables()
      request.send (err, data) ->
        expect(err).to.eql(null)

    it 'throws an error when response checksum does not match', ->
      helpers.mockHttpResponse 200, {'x-amz-crc32': '0'}, """{"TableNames":["mock-table"]}"""
      request = dynamo.listTables()
      request.send (err, data) ->
        expect(err.code).to.eql('CRC32CheckFailed')
        expect(data).to.eql(null)

    it 'retries request when response checksum does not match', ->
      helpers.mockHttpResponse 200, {'x-amz-crc32': '0'}, """{"TableNames":["mock-table"]}"""
      request = dynamo.listTables()
      request.send (err, data) ->
        expect(this.retryCount).to.eql(10)
