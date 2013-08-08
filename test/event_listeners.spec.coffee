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
MockService = helpers.MockService

describe 'AWS.EventListeners', ->

  oldSetTimeout = setTimeout
  config = null; service = null; totalWaited = null; delays = []
  successHandler = null; errorHandler = null; completeHandler = null
  retryHandler = null

  beforeEach ->
    # Mock the timer manually (jasmine.Clock does not work in node)
    `setTimeout = jasmine.createSpy('setTimeout');`
    setTimeout.andCallFake (callback, delay) ->
      totalWaited += delay
      delays.push(delay)
      callback()

    totalWaited = 0
    delays = []
    service = new MockService(maxRetries: 3)
    service.config.credentials = AWS.util.copy(service.config.credentials)

    # Helpful handlers
    successHandler = createSpy('success')
    errorHandler = createSpy('error')
    completeHandler = createSpy('complete')
    retryHandler = createSpy('retry')

  # Safely tear down setTimeout hack
  afterEach -> `setTimeout = oldSetTimeout`

  makeRequest = (callback) ->
    request = service.makeRequest('mockMethod', foo: 'bar')
    request.on('retry', retryHandler)
    request.on('error', errorHandler)
    request.on('success', successHandler)
    request.on('complete', completeHandler)
    if callback
      request.on 'complete', (resp) ->
        callback.call(resp, resp.error, resp.data)
      request.send()
    else
      request

  describe 'validate', ->
    it 'takes the request object as a parameter', ->
      request = makeRequest()
      request.on 'validate', (req) ->
        expect(req).toBe(request)
        throw "ERROR"
      response = request.send()
      expect(response.error).toEqual("ERROR")

    it 'sends error event if credentials are not set', ->
      errorHandler = createSpy('errorHandler')
      request = makeRequest()
      request.on('error', errorHandler)

      service.config.credentialProvider = null
      service.config.credentials.accessKeyId = null
      request.send()

      service.config.credentials.accessKeyId = 'akid'
      service.config.credentials.secretAccessKey = null
      request.send()

      expect(errorHandler).toHaveBeenCalled()
      AWS.util.arrayEach errorHandler.calls, (call) ->
        expect(call.args[0] instanceof Error).toBeTruthy()
        expect(call.args[0].code).toEqual('SigningError')
        expect(call.args[0].message).toMatch(/Missing credentials in config/)

    it 'sends error event if region is not set', ->
      service.config.region = null
      request = makeRequest(->)

      call = errorHandler.calls[0]
      expect(errorHandler).toHaveBeenCalled()
      expect(call.args[0] instanceof Error).toBeTruthy()
      expect(call.args[0].code).toEqual('SigningError')
      expect(call.args[0].message).toMatch(/Missing region in config/)

  describe 'build', ->
    it 'takes the request object as a parameter', ->
      request = makeRequest()
      request.on 'build', (req) ->
        expect(req).toBe(request)
        throw "ERROR"
      response = request.send()
      expect(response.error).toEqual("ERROR")

  describe 'afterBuild', ->
    beforeEach ->
      helpers.mockHttpResponse 200, {}, ['DATA']

    sendRequest = (body) ->
      request = makeRequest()
      request.on('build', (req) -> req.httpRequest.body = body)
      request.send()
      request

    contentLength = (body) ->
      sendRequest(body).httpRequest.headers['Content-Length']

    it 'builds Content-Length in the request headers for string content', ->
      expect(contentLength('FOOBAR')).toEqual(6)

    it 'builds Content-Length for string "0"', ->
      expect(contentLength('0')).toEqual(1)

    it 'builds Content-Length for utf-8 string body', ->
      expect(contentLength('tï№')).toEqual(6)

    it 'builds Content-Length for buffer body', ->
      expect(contentLength(new Buffer('tï№'))).toEqual(6)

    it 'builds Content-Length for file body', ->
      fs = require('fs')
      file = fs.createReadStream(__filename)
      fileLen = fs.lstatSync(file.path).size
      expect(contentLength(file)).toEqual(fileLen)

  describe 'sign', ->
    it 'takes the request object as a parameter', ->
      request = makeRequest()
      request.on 'sign', (req) ->
        expect(req).toBe(request)
        throw "ERROR"
      response = request.send()
      expect(response.error).toEqual("ERROR")

    it 'uses the api.signingName if provided', ->
      service.api.signingName = 'SIGNING_NAME'
      spyOn(AWS.Signers.RequestSigner, 'getVersion').andCallFake ->
        (req, signingName) -> throw signingName
      request = makeRequest()
      response = request.send()
      expect(response.error).toEqual('SIGNING_NAME')
      delete service.api.signingName

    it 'uses the api.endpointPrefix if signingName not provided', ->
      spyOn(AWS.Signers.RequestSigner, 'getVersion').andCallFake ->
        (req, signingName) -> throw signingName
      request = makeRequest()
      response = request.send()
      expect(response.error).toEqual('mockservice')

  describe 'send', ->
    it 'passes httpOptions from config', ->
      options = {}
      spyOn(AWS.HttpClient, 'getInstance').andReturn handleRequest: (req, opts) ->
        options = opts
      service.config.httpOptions = timeout: 15
      service.config.maxRetries = 0
      makeRequest(->)
      expect(options.timeout).toEqual(15)

  describe 'httpData', ->
    beforeEach ->
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']

    it 'emits httpData event on each chunk', ->
      calls = []

      # register httpData event
      request = makeRequest()
      request.on('httpData', (chunk) -> calls.push(chunk.toString()))
      request.send()

      expect(calls).toEqual(['FOO', 'BAR', 'BAZ', 'QUX'])

    it 'does not clear default httpData event if another is added', ->
      request = makeRequest()
      request.on('httpData', ->)
      response = request.send()

      expect(response.httpResponse.body.toString()).toEqual('FOOBARBAZQUX')

  describe 'retry', ->
    it 'retries a request with a set maximum retries', ->
      sendHandler = createSpy('send')
      service.config.maxRetries = 10

      # fail every request with a fake networking error
      helpers.mockHttpResponse
        code: 'NetworkingError', message: 'Cannot connect'

      request = makeRequest()
      request.on('send', sendHandler)
      response = request.send()

      expect(retryHandler).toHaveBeenCalled()
      expect(errorHandler).toHaveBeenCalled()
      expect(completeHandler).toHaveBeenCalled()
      expect(successHandler).not.toHaveBeenCalled()
      expect(response.retryCount).toEqual(service.config.maxRetries);
      expect(sendHandler.calls.length).toEqual(service.config.maxRetries + 1)

    it 'retries with falloff', ->
      helpers.mockHttpResponse
        code: 'NetworkingError', message: 'Cannot connect'
      makeRequest(->)
      expect(delays).toEqual([30, 60, 120])

    it 'retries if status code is >= 500', ->
      helpers.mockHttpResponse 500, {}, ''

      makeRequest (err) ->
        expect(err).toEqual
          code: 500,
          message: null,
          statusCode: 500
          retryable: true
        expect(@retryCount).
          toEqual(service.config.maxRetries)

    it 'should not emit error if retried fewer than maxRetries', ->
      helpers.mockIntermittentFailureResponse 2, 200, {}, 'foo'

      response = makeRequest(->)

      expect(totalWaited).toEqual(90)
      expect(response.retryCount).toBeLessThan(service.config.maxRetries)
      expect(response.data).toEqual('foo')
      expect(errorHandler).not.toHaveBeenCalled()

    ['ExpiredToken', 'ExpiredTokenException', 'RequestExpired'].forEach (name) ->
      it 'invalidates expired credentials and retries', ->
        spyOn(AWS.HttpClient, 'getInstance')
        AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
          if req.headers.Authorization.match('Credential=INVALIDKEY')
            helpers.mockHttpSuccessfulResponse 403, {}, name, cb
          else
            helpers.mockHttpSuccessfulResponse 200, {}, 'DATA', cb

        creds =
          numCalls: 0
          expired: false
          accessKeyId: 'INVALIDKEY'
          secretAccessKey: 'INVALIDSECRET'
          get: (cb) ->
            if @expired
              @numCalls += 1
              @expired = false
              @accessKeyId = 'VALIDKEY' + @numCalls
              @secretAccessKey = 'VALIDSECRET' + @numCalls
            cb()

        service.config.credentials = creds

        response = makeRequest(->)
        expect(response.retryCount).toEqual(1)
        expect(creds.accessKeyId).toEqual('VALIDKEY1')
        expect(creds.secretAccessKey).toEqual('VALIDSECRET1')

    [301, 307].forEach (code) ->
      it 'attempts to redirect on ' + code + ' responses', ->
        helpers.mockHttpResponse code, {location: 'http://redirected'}, ''
        service.config.maxRetries = 0
        service.config.maxRedirects = 5
        response = makeRequest(->)
        expect(response.request.httpRequest.endpoint.host).toEqual('redirected')
        expect(response.error.retryable).toEqual(true)
        expect(response.redirectCount).toEqual(service.config.maxRedirects)
        expect(delays).toEqual([0, 0, 0, 0, 0])

    it 'does not redirect if 3xx is missing location header', ->
      helpers.mockHttpResponse 304, {}, ''
      service.config.maxRetries = 0
      response = makeRequest(->)
      expect(response.request.httpRequest.endpoint.host).not.toEqual('redirected')
      expect(response.error.retryable).toEqual(false)

  describe 'success', ->
    it 'emits success on a successful response', ->
      # fail every request with a fake networking error
      helpers.mockHttpResponse 200, {}, 'Success!'

      response = makeRequest(->)

      expect(retryHandler).not.toHaveBeenCalled()
      expect(errorHandler).not.toHaveBeenCalled()
      expect(completeHandler).toHaveBeenCalled()
      expect(successHandler).toHaveBeenCalled()
      expect(response.retryCount).toEqual(0);

  describe 'error', ->
    it 'emits error if error found and should not be retrying', ->
      # fail every request with a fake networking error
      helpers.mockHttpResponse 400, {}, ''

      response = makeRequest(->)

      expect(retryHandler).not.toHaveBeenCalled()
      expect(errorHandler).toHaveBeenCalled()
      expect(completeHandler).toHaveBeenCalled()
      expect(successHandler).not.toHaveBeenCalled()
      expect(response.retryCount).toEqual(0);

    it 'emits error if an error is set in extractError', ->
      error = code: 'ParseError', message: 'error message'
      extractDataHandler = createSpy('extractData')

      helpers.mockHttpResponse 400, {}, ''

      request = makeRequest()
      request.on('extractData', extractDataHandler)
      request.on('extractError', (resp) -> resp.error = error)
      response = request.send()

      expect(response.error).toBe(error)
      expect(extractDataHandler).not.toHaveBeenCalled()
      expect(retryHandler).not.toHaveBeenCalled()
      expect(errorHandler).toHaveBeenCalled()
      expect(completeHandler).toHaveBeenCalled()

  describe 'terminal callback error handling', ->
    beforeEach ->
      spyOn(process, 'exit')
      spyOn(console, 'error')

    didError = ->
      expect(console.error).toHaveBeenCalledWith('ERROR')
      expect(process.exit).toHaveBeenCalledWith(1)

    describe 'without domains', ->
      it 'logs exceptions raised from success event and exits process', ->
        helpers.mockHttpResponse 200, {}, []
        request = makeRequest()
        request.on 'success', -> throw "ERROR"
        expect(-> request.send()).not.toThrow('ERROR')
        expect(completeHandler).toHaveBeenCalled()
        expect(retryHandler).not.toHaveBeenCalled()
        didError()

      it 'logs exceptions raised from complete event and exits process', ->
        helpers.mockHttpResponse 200, {}, []
        request = makeRequest()
        request.on 'complete', -> throw "ERROR"
        expect(-> request.send()).not.toThrow('ERROR')
        expect(completeHandler).toHaveBeenCalled()
        expect(retryHandler).not.toHaveBeenCalled()
        didError()

      it 'logs exceptions raised from error event and exits process', ->
        helpers.mockHttpResponse 500, {}, []
        request = makeRequest()
        request.on 'error', -> throw "ERROR"
        expect(-> request.send()).not.toThrow('ERROR')
        expect(completeHandler).toHaveBeenCalled()
        didError()

    describe 'with domains', ->
      it 'sends error raised from complete event to a domain', ->
        result = false
        d = require('domain').create()
        if d.run
          d.on('error', (e) -> result = e)
          d.run ->
            helpers.mockHttpResponse 200, {}, []
            request = makeRequest()
            request.on 'complete', -> throw "ERROR"
            expect(-> request.send()).not.toThrow('ERROR')
            expect(completeHandler).toHaveBeenCalled()
            expect(retryHandler).not.toHaveBeenCalled()
            expect(result).toEqual("ERROR")

      it 'supports inner domains', ->
        helpers.mockHttpResponse 200, {}, []

        done = false
        err = new Error()
        gotOuterError = false
        gotInnerError = false
        Domain = require("domain")
        outerDomain = Domain.create()
        outerDomain.on 'error', (err) -> gotOuterError = true

        if outerDomain.run
          outerDomain.run ->
            request = makeRequest()
            innerDomain = Domain.create()
            innerDomain.add(request)
            innerDomain.on 'error', -> gotInnerError = true

            runs ->
              request.send ->
                innerDomain.run -> done = true; throw err
            waitsFor -> done
            runs ->
              expect(gotOuterError).toEqual(false)
              expect(gotInnerError).toEqual(true)
              expect(err.domainThrown).toEqual(false)
              expect(err.domain).toEqual(innerDomain)
