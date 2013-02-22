# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

helpers = require('./helpers')
AWS = helpers.AWS
MockClient = helpers.MockClient

describe 'AWS.Client', ->

  config = null; client = null
  retryableError = (error, result) ->
    expect(client.retryableError(error)).toEqual(result)

  beforeEach ->
    config = new AWS.Config()
    client = new AWS.Client(config)

  describe 'constructor', ->
    it 'should use AWS.config copy if no config is provided', ->
      client = new AWS.Client()
      expect(client.config).not.toBe(AWS.config)
      expect(client.config.sslEnabled).toEqual(true)

    it 'should merge custom options on top of global defaults if config provided', ->
      client = new AWS.Client(maxRetries: 5)
      expect(client.config.sslEnabled).toEqual(true)
      expect(client.config.maxRetries).toEqual(5)

    it 'should allow AWS.config to be object literal', ->
      cfg = AWS.config
      AWS.config = maxRetries: 20
      client = new AWS.Client({})
      expect(client.config.maxRetries).toEqual(20)
      expect(client.config.sslEnabled).toEqual(true)
      AWS.config = cfg

  describe 'setEndpoint', ->
    FooClient = null

    beforeEach ->
      FooClient = AWS.util.inherit AWS.Client, api:
        endpointPrefix: 'fooservice'

    it 'uses specified endpoint if provided', ->
      client = new FooClient()
      client.setEndpoint('notfooservice.amazonaws.com')
      expect(client.endpoint.host).toEqual('notfooservice.amazonaws.com')

    it 'uses global endpoint if defined on service API', ->
      FooClient.prototype.api.globalEndpoint = 'fooservice.amazonaws.com'
      client = new FooClient()
      client.setEndpoint()
      expect(client.endpoint.host).toEqual('fooservice.amazonaws.com')

    it 'generates endpoint based on region if no global endpoint / not provided', ->
      client = new FooClient({region:'someregion'})
      client.setEndpoint()
      expect(client.endpoint.host).toEqual('fooservice.someregion.amazonaws.com')

  describe 'makeRequest', ->

    it 'it treats params as an optinal parameter', ->
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])
      client = new MockClient()
      client.makeRequest 'operationName', (err, data) ->
        expect(data).toEqual('FOOBAR')

    it 'yields data to the callback', ->
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])
      client = new MockClient()
      req = client.makeRequest 'operation', (err, data) ->
        expect(err).toEqual(null)
        expect(data).toEqual('FOOBAR')

    it 'yields service errors to the callback', ->
      helpers.mockHttpResponse(500, {}, ['service error'])
      client = new MockClient(maxRetries: 0)
      req = client.makeRequest 'operation', {}, (err, data) ->
        expect(err).toEqual({code:500, message:null, retryable:true, statusCode:500})
        expect(data).toEqual(null)

    it 'yields network errors to the callback', ->
      error = { code: 'NetworkingError' }
      helpers.mockHttpResponse(error)
      client = new MockClient(maxRetries: 0)
      req = client.makeRequest 'operation', {}, (err, data) ->
        expect(err).toEqual(error)
        expect(data).toEqual(null)

    it 'does not send the request if a callback function is omitted', ->
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])
      httpClient = AWS.HttpClient.getInstance()
      spyOn(httpClient, 'handleRequest')
      new MockClient().makeRequest('operation')
      expect(httpClient.handleRequest).not.toHaveBeenCalled()

    it 'allows parameter validation to be disabled in config', ->
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])
      AWS.EventListeners.Core.on 'validate',
        AWS.EventListeners.Core.VALIDATE_PARAMETERS
      client = new MockClient(paramValidation: false)
      req = client.makeRequest 'operation', {}, (err, data) ->
        expect(err).toEqual(null)
        expect(data).toEqual('FOOBAR')
      AWS.EventListeners.Core.removeListener 'validate',
        AWS.EventListeners.Core.VALIDATE_PARAMETERS


    describe 'global events', ->
      it 'adds AWS.events listeners to requests', ->
        helpers.mockHttpResponse(200, {}, ['FOO', 'BAR'])

        event = jasmine.createSpy()
        AWS.events.on('complete', event)

        new MockClient().makeRequest('operation').send()
        expect(event).toHaveBeenCalled()

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
      client.config.maxRetries = 30
      expect(client.numRetries()).toEqual(30)

    it 'should use defaultRetries defined on object if undefined on config', ->
      client.defaultRetryCount = 13
      client.config.maxRetries = undefined
      expect(client.numRetries()).toEqual(13)
