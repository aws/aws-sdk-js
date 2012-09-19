AWS = require('../../lib/core')

MockService = AWS.util.inherit AWS.Service,
  constructor: (config) -> AWS.Service.call(this, config)
  newHttpRequest: -> {sign: ->}
MockService.HttpRequest = AWS.HttpRequest

describe 'AWS.Service', ->

  oldSetTimeout = setTimeout
  builder = {populateRequest: ->}
  parser = {parse: (resp) -> resp.body}
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
    handler = new AWS.RequestHandler(request, builder, parser)

    # Useful spies
    spyOn(request, 'notifyFail')
    spyOn(request, 'notifyDone')
    spyOn(AWS.HttpClient, 'getInstance')

  # Safely tear down setTimeout hack
  afterEach -> `setTimeout = oldSetTimeout`

  describe 'handleHttpResponse', ->
    it 'should retry a request with a set maximum retries', ->
      service.config.maxRetries = 10
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

    it 'should retry if shouldRetry(resp, error) is true', ->
      spyOn(service, 'shouldRetry').andReturn(true)
      spyOn(service, 'extractError').andReturn(code: 'ERROR', message: 'FOO')

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onHeaders(300, {})
        cb.onData('{"error":"MESSAGE"}')
        cb.onEnd()

      handler.makeRequest()

      expect(context.error).toEqual(code: 'ERROR', message: 'FOO')
      expect(request.notifyFail).toHaveBeenCalled()
      expect(request.notifyDone).not.toHaveBeenCalled()
      expect(context.retryCount).toEqual(service.config.maxRetries + 1);

    it 'should not call notifyFail if retried fewer than maxRetries', ->
      spyOn(service, 'extractError').andReturn(null)

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        if context.retryCount < 2
          cb.onError(code: 'NetworkingError', message: "FAIL!")
        else
          cb.onHeaders(context.retryCount < 2 ? 500 : 200, {})
          cb.onData('{"data":"BAR"}')
          cb.onEnd()

      handler.makeRequest()

      expect(totalWaited).toEqual(90)
      expect(context.data).toEqual('{"data":"BAR"}')
      expect(request.notifyFail).not.toHaveBeenCalled()
      expect(request.notifyDone).toHaveBeenCalled()
      expect(context.retryCount).toBeLessThan(service.config.maxRetries);

    it 'should notifyFail if error found and should not be retrying', ->
      spyOn(service, 'shouldRetry').andReturn(false)

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onError('fail')

      handler.makeRequest()

      expect(request.notifyFail).toHaveBeenCalled()
      expect(request.notifyDone).not.toHaveBeenCalled()

    it 'should not retry and notifyDone with data if no error was found', ->
      spyOn(service, 'extractError').andReturn(null)
      spyOn(handler, 'retryRequest')

      AWS.HttpClient.getInstance.andReturn handleRequest: (req, cb) ->
        cb.onHeaders(200, {})
        cb.onData("Success!")
        cb.onEnd()

      handler.makeRequest()

      expect(handler.retryRequest).not.toHaveBeenCalled()
      expect(request.notifyFail).not.toHaveBeenCalled()
      expect(request.notifyDone).toHaveBeenCalled()
      expect(context.data).toEqual("Success!")
