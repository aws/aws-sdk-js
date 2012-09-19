AWS = require('../../lib/core')

describe 'AWS.Service', ->
  config = null; service = null
  shouldRetry = (status, error, result) ->
    expect(service.shouldRetry({statusCode: status}, error)).toEqual(result)

  beforeEach ->
    config = new AWS.Config()
    service = new AWS.Service(config)

  describe 'constructor', ->
    it 'should use AWS.configuration copy if no config is provided', ->
      service = new AWS.Service()
      expect(service.config).not.toBe(AWS.configuration)
      expect(service.config.useSSL).toEqual(true)

    it 'should merge custom options on top of global defaults if config provided', ->
      service = new AWS.Service(maxRetries: 5)
      expect(service.config.useSSL).toEqual(true)
      expect(service.config.maxRetries).toEqual(5)

    it 'should allow AWS.configuration to be object literal', ->
      cfg = AWS.configuration
      AWS.configuration = maxRetries: 20
      service = new AWS.Service({})
      expect(service.config.maxRetries).toEqual(20)
      expect(service.config.useSSL).toEqual(true)
      AWS.configuration = cfg

  describe 'shouldRetry', ->
    it 'should not retry on null error', ->
      shouldRetry(200, null, false)

    it 'should retry on throttle error', ->
      shouldRetry(400, {code: 'ProvisionedThroughputExceededException'}, true)

    it 'should not retry when no error found and < 500 level status code', ->
      shouldRetry(200, {code: 'Nothing'}, false)
      shouldRetry(304, null, false)
      shouldRetry(404, {code: 'NotThrottling'}, false)

    it 'should retry on 500 or above regardless of error', ->
      shouldRetry(500, null, true)
      shouldRetry(505, {code: 'Error'}, true)

  describe 'numRetries', ->
    it 'should use config max retry value if defined', ->
      service.config.maxRetries = 30
      expect(service.numRetries()).toEqual(30)

    it 'should use defaultRetries defined on object if undefined on config', ->
      service.defaultRetryCount = 13
      service.config.maxRetries = undefined;
      expect(service.numRetries()).toEqual(13)
