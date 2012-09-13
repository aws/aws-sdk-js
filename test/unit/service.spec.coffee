AWS = require('../../lib/core')

describe 'AWS.Service', ->
  config = null; service = null
  shouldRetry = (status, error, result) ->
    expect(service.shouldRetry({statusCode: status}, error)).toEqual(result)

  beforeEach ->
    config = new AWS.Config()
    service = new AWS.Service('MockService', config)

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
