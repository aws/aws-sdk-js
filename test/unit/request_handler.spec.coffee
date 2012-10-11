AWS = require('../../lib/core')

MockService = AWS.util.inherit AWS.Service,
  constructor: (config) -> AWS.Service.call(this, config)
  buildRequest: -> this.newHttpRequest()
  extractData: (httpResponse) ->
    return httpResponse.body
  extractError: (httpResponse) ->
    retryable = httpResponse.statusCode >= 500
    return { code: httpResponse.statusCode, message: null, retryable: retryable }
  signRequest: -> {sign: ->}

describe 'AWS.Service', ->

  oldSetTimeout = setTimeout
  config = null; service = null; totalWaited = null; delays = []
  context = null; request = null; handler = null

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
    context = new AWS.AWSResponse(service: service,
      method: 'mockMethod', params: {foo: 'bar'})
    request = new AWS.AWSRequest(context)
    handler = new AWS.RequestHandler(request)

    # Useful spies
    spyOn(request, 'notifyFail')
    spyOn(request, 'notifyDone')
    spyOn(AWS.HttpClient, 'getInstance')

  # Safely tear down setTimeout hack
  afterEach -> `setTimeout = oldSetTimeout`

  describe 'handleHttpResponse', ->

    it 'should retry a request with a set maximum retries', ->

      service.config.maxRetries = 10

      # fail every request with a fake networking error
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onError(code: 'NetworkingError', message: "FAIL!")

      handler.makeRequest()

      expect(context.retryCount).toEqual(service.config.maxRetries + 1);
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
      expect(context.retryCount).toEqual(service.config.maxRetries + 1);

    it 'should not call notifyFail if retried fewer than maxRetries', ->

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        if context.retryCount < 2
          cb.onError(code: 'NetworkingError', message: "FAIL!")
        else
          cb.onHeaders(context.retryCount < 2 ? 500 : 200, {})
          cb.onData('{"data":"BAR"}')
          cb.onEnd()

      handler.makeRequest()

      expect(totalWaited).toEqual(90)
      expect(context.retryCount).toBeLessThan(service.config.maxRetries);

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

      # throw by the service while parsing a response
      error = { error: 'ParseError', message: 'error message' }

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onHeaders(200, {})
        cb.onData("Success!")
        cb.onEnd()

      spyOn(service, 'parseResponse').andThrow(error)
      spyOn(handler, 'retryRequest')

      handler.makeRequest({})

      expect(handler.retryRequest).not.toHaveBeenCalled()
      expect(request.notifyFail).toHaveBeenCalledWith(error)
      expect(request.notifyDone).not.toHaveBeenCalled()

