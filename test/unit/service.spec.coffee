# Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

helpers = require('../helpers')
AWS = helpers.AWS
MockService = helpers.MockService

describe 'AWS.Service', ->

  config = null; service = null
  retryableError = (error, result) ->
    expect(service.retryableError(error)).toEqual(result)

  beforeEach ->
    config = new AWS.Config()
    service = new AWS.Service(config)

  describe 'constructor', ->
    it 'should use AWS.config copy if no config is provided', ->
      service = new AWS.Service()
      expect(service.config).not.toBe(AWS.config)
      expect(service.config.useSSL).toEqual(true)

    it 'should merge custom options on top of global defaults if config provided', ->
      service = new AWS.Service(maxRetries: 5)
      expect(service.config.useSSL).toEqual(true)
      expect(service.config.maxRetries).toEqual(5)

    it 'should allow AWS.config to be object literal', ->
      cfg = AWS.config
      AWS.config = maxRetries: 20
      service = new AWS.Service({})
      expect(service.config.maxRetries).toEqual(20)
      expect(service.config.useSSL).toEqual(true)
      AWS.config = cfg

  describe 'makeRequest', ->
    it 'should allow extra config applied per request', ->
      service = new MockService(maxRetries: 10, useSSL: false)
      request = service.makeRequest('foo', {}, {useSSL: true, maxRetries: 0})

      expect(request.awsResponse.service.config.useSSL).toEqual(true)
      expect(request.awsResponse.service.config.maxRetries).toEqual(0)
      expect(request.awsResponse.service).not.toBe(service)
      expect(service.config.useSSL).toEqual(false)
      expect(service.config.maxRetries).toEqual(10)

  describe 'retryableError', ->

    it 'should retry on throttle error', ->
      retryableError({code: 'ProvisionedThroughputExceededException', statusCode:400}, true)

    it 'should retry on expired credentials error', ->
      retryableError({code: 'ExpiredTokenException', statusCode:400}, true)

    it 'should retry on 500 or above regardless of error', ->
      retryableError({code: 'Error', statusCode:500 }, true)
      retryableError({code: 'RandomError', statusCode:505 }, true)

    it 'should not retry when error is < 500 level status code', ->
      retryableError({code: 'Error', statusCode:200 }, false)
      retryableError({code: 'Error', statusCode:302 }, false)
      retryableError({code: 'Error', statusCode:404 }, false)

  describe 'numRetries', ->
    it 'should use config max retry value if defined', ->
      service.config.maxRetries = 30
      expect(service.numRetries()).toEqual(30)

    it 'should use defaultRetries defined on object if undefined on config', ->
      service.defaultRetryCount = 13
      service.config.maxRetries = undefined;
      expect(service.numRetries()).toEqual(13)
