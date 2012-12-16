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
MockClient = helpers.MockClient

describe 'AWS.RequestHandler', ->

  oldSetTimeout = setTimeout
  config = null; client = null; totalWaited = null; delays = []
  response = null; request = null; handler = null

  beforeEach ->
    # Mock the timer manually (jasmine.Clock does not work in node)
    `setTimeout = jasmine.createSpy('setTimeout');`
    setTimeout.andCallFake (callback, delay) ->
      totalWaited += delay
      delays.push(delay)
      callback()

    totalWaited = 0
    delays = []
    client = new MockClient(maxRetries: 3)
    client.config.credentials = AWS.util.copy(client.config.credentials)
    request = new AWS.AWSRequest(client, 'mockMethod', {foo:'bar'})
    response = request.awsResponse
    handler = new AWS.RequestHandler(request)

    # Useful spies
    spyOn(request, 'notifyFail')
    spyOn(request, 'notifyDone')
    spyOn(AWS.HttpClient, 'getInstance')

  # Safely tear down setTimeout hack
  afterEach -> `setTimeout = oldSetTimeout`

  describe 'makeRequest', ->
    it 'sends fail event if credentials are not set', ->
      client.config.credentials.accessKeyId = null
      handler.makeRequest()

      client.config.credentials.accessKeyId = 'akid'
      client.config.credentials.secretAccessKey = null
      handler.makeRequest()

      expect(request.notifyFail).toHaveBeenCalled()
      AWS.util.arrayEach request.notifyFail.calls, (call) ->
        expect(call.args[0] instanceof Error).toBeTruthy()
        expect(call.args[0].code).toEqual('SigningError')
        expect(call.args[0].message).toMatch(/Missing credentials in config/)

    it 'sends fail event if region is not set', ->
      handler.client.config.region = null
      handler.makeRequest()

      call = request.notifyFail.calls[0]
      expect(request.notifyFail).toHaveBeenCalled()
      expect(call.args[0] instanceof Error).toBeTruthy()
      expect(call.args[0].code).toEqual('SigningError')
      expect(call.args[0].message).toMatch(/Missing region in config/)

  describe 'handleHttpData', ->

    beforeEach ->
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onHeaders(200, {})
        cb.onData("FOO")
        cb.onData("BAR")
        cb.onData("BAZ")
        cb.onData("QUX")
        cb.onEnd()

    it 'notifies data if there are promise callbacks', ->

      calls = []

      # Add a promise callback
      request.data((resp) -> calls.push(resp.data))

      handler.makeRequest()

      expect(request.awsResponse.httpResponse.body).toEqual(null)
      expect(calls).toEqual(['FOO', 'BAR', 'BAZ', 'QUX'])

    it 'does not notify if there are no callbacks registered', ->

      spyOn(request, 'notifyData')
      handler.makeRequest()
      expect(request.notifyData).not.toHaveBeenCalled()

  describe 'handleHttpResponse', ->

    it 'should retry a request with a set maximum retries', ->

      client.config.maxRetries = 10

      # fail every request with a fake networking error
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onError(code: 'NetworkingError', message: "FAIL!")

      handler.makeRequest()

      expect(response.retryCount).toEqual(client.config.maxRetries + 1);
      expect(request.notifyFail).toHaveBeenCalled()
      expect(request.notifyDone).not.toHaveBeenCalled()

    it 'should retry with falloff', ->
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onError(code: 'NetworkingError', message: "FAIL!")

      handler.makeRequest()

      expect(delays).toEqual([30, 60, 120])

    it 'should retry if status code is >= 500', ->

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onHeaders(500, {})
        cb.onEnd()

      handler.makeRequest()

      expect(request.notifyFail).toHaveBeenCalledWith(
        code: 500,
        message: null,
        statusCode: 500
        retryable: true)

      expect(request.notifyDone).not.toHaveBeenCalled()
      expect(response.retryCount).toEqual(client.config.maxRetries + 1);

    it 'should not call notifyFail if retried fewer than maxRetries', ->

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        if response.retryCount < 2
          cb.onError(code: 'NetworkingError', message: "FAIL!")
        else
          cb.onHeaders(response.retryCount < 2 ? 500 : 200, {})
          cb.onData('{"data":"BAR"}')
          cb.onEnd()

      handler.makeRequest()

      expect(totalWaited).toEqual(90)
      expect(response.retryCount).toBeLessThan(client.config.maxRetries);

    it 'notifies done on a successful response', ->

      spyOn(handler, 'retryRequest')

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onHeaders(200, {})
        cb.onData("Success!")
        cb.onEnd()

      handler.makeRequest()

      expect(handler.retryRequest).not.toHaveBeenCalled()
      expect(request.notifyFail).not.toHaveBeenCalled()
      expect(request.notifyDone).toHaveBeenCalledWith("Success!")

    it 'should notifyFail if error found and should not be retrying', ->

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onHeaders(400, {})
        cb.onEnd()

      handler.makeRequest()

      expect(request.notifyFail).toHaveBeenCalled()
      expect(request.notifyDone).not.toHaveBeenCalled()

    it 'notifies fail if an error is thrown', ->

      # throw by the client while parsing a response
      error = { error: 'ParseError', message: 'error message' }

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onHeaders(200, {})
        cb.onData("Success!")
        cb.onEnd()

      spyOn(client, 'parseResponse').andThrow(error)
      spyOn(handler, 'retryRequest')

      try
        handler.makeRequest({})
      catch e
        expect(e).toBe(error)

      expect(handler.retryRequest).not.toHaveBeenCalled()
      expect(request.notifyDone).not.toHaveBeenCalled()
