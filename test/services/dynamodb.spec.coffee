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
      expect(dynamo.config).toEqual(config)

  describe 'numRetries', ->

    it 'defaults to 10', ->
      expect(ddb().numRetries()).toEqual(10)

    it 'can be overridden in the config', ->
      expect(ddb({ maxRetries: 2 }).numRetries()).toEqual(2)

  describe 'retryDelays', ->

    it 'has a custom backoff function', ->
      delays = [ 0, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800 ]
      expect(ddb().retryDelays()).toEqual(delays)

