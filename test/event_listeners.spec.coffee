helpers = require('./helpers')
AWS = helpers.AWS
MockService = helpers.MockService

describe 'AWS.EventListeners', ->

  oldSetTimeout = setTimeout
  config = null; service = null; totalWaited = null; delays = []
  successHandler = null; errorHandler = null; completeHandler = null
  retryHandler = null

  beforeEach ->
    # Mock the timer manually
    `setTimeout = helpers.createSpy('setTimeout');`
    setTimeout.andCallFake (callback, delay) ->
      totalWaited += delay
      delays.push(delay)
      callback()

    totalWaited = 0
    delays = []
    service = new MockService(maxRetries: 3)
    service.config.credentials = AWS.util.copy(service.config.credentials)

    # Helpful handlers
    successHandler = helpers.createSpy('success')
    errorHandler = helpers.createSpy('error')
    completeHandler = helpers.createSpy('complete')
    retryHandler = helpers.createSpy('retry')

  # Safely tear down setTimeout hack
  afterEach -> `setTimeout = oldSetTimeout`

  makeRequest = (callback) ->
    request = service.makeRequest('mockMethod', foo: 'bar')
    request.on('retry', retryHandler)
    request.on('error', errorHandler)
    request.on('success', successHandler)
    request.on('complete', completeHandler)
    if callback
      request.send(callback)
    else
      request

  describe 'validate', ->
    it 'takes the request object as a parameter', ->
      request = makeRequest()
      request.on 'validate', (req) ->
        expect(req).to.equal(request)
        throw "ERROR"
      response = request.send(->)
      expect(response.error).to.equal("ERROR")

    it 'sends error event if credentials are not set', ->
      service.config.credentialProvider = null
      service.config.credentials.accessKeyId = null
      makeRequest(->)

      expect(errorHandler.calls.length).not.to.equal(0)
      AWS.util.arrayEach errorHandler.calls, (call) ->
        expect(call.arguments[0]).to.be.instanceOf(Error)
        expect(call.arguments[0].code).to.equal('CredentialsError')
        expect(call.arguments[0].message).to.match(/Missing credentials/)

    it 'sends error event if credentials are not set', ->
      service.config.credentials.accessKeyId = 'akid'
      service.config.credentials.secretAccessKey = null
      makeRequest(->)

      expect(errorHandler.calls.length).not.to.equal(0)
      AWS.util.arrayEach errorHandler.calls, (call) ->
        expect(call.arguments[0] ).to.be.instanceOf(Error)
        expect(call.arguments[0].code).to.equal('CredentialsError')
        expect(call.arguments[0].message).to.match(/Missing credentials/)

    it 'does not validate credentials if request is not signed', ->
      helpers.mockHttpResponse 200, {}, ''
      service.api = new AWS.Model.Api metadata:
        endpointPrefix: 'mockservice'
        signatureVersion: null
      request = makeRequest()
      request.send(->)
      expect(errorHandler.calls.length).to.equal(0)
      expect(successHandler.calls.length).not.to.equal(0)

    it 'sends error event if region is not set', ->
      helpers.mockHttpResponse 200, {}, ''
      service.config.region = null
      request = makeRequest(->)

      call = errorHandler.calls[0]
      expect(errorHandler.calls.length).not.to.equal(0)
      expect(call.arguments[0] ).to.be.instanceOf(Error)
      expect(call.arguments[0].code).to.equal('ConfigError')
      expect(call.arguments[0].message).to.match(/Missing region in config/)

    it 'ignores region validation if service has global endpoint', ->
      helpers.mockHttpResponse 200, {}, ''
      service.config.region = null
      service.isGlobalEndpoint = true

      makeRequest(->)
      expect(errorHandler.calls.length).to.equal(0)
      delete service.isGlobalEndpoint

  describe 'build', ->
    it 'takes the request object as a parameter', ->
      helpers.mockHttpResponse 200, {}, ''
      request = makeRequest()
      request.on 'build', (req) ->
        expect(req).to.equal(request)
        throw "ERROR"
      response = request.send(->)
      expect(response.error).to.equal("ERROR")

  describe 'afterBuild', ->
    sendRequest = (body) ->
      request = makeRequest()
      request.removeAllListeners('sign')
      request.on('build', (req) -> req.httpRequest.body = body)
      request.build()
      request

    contentLength = (body) ->
      sendRequest(body).httpRequest.headers['Content-Length']

    it 'builds Content-Length in the request headers for string content', ->
      expect(contentLength('FOOBAR')).to.equal(6)

    it 'builds Content-Length for string "0"', ->
      expect(contentLength('0')).to.equal(1)

    it 'builds Content-Length for utf-8 string body', ->
      expect(contentLength('tï№')).to.equal(6)

    it 'builds Content-Length for buffer body', ->
      expect(contentLength(new AWS.util.Buffer('tï№'))).to.equal(6)

    if AWS.util.isNode()
      it 'builds Content-Length for file body', ->
        fs = require('fs')
        file = fs.createReadStream(__filename)
        fileLen = fs.lstatSync(file.path).size
        expect(contentLength(file)).to.equal(fileLen)

  describe 'sign', ->
    it 'takes the request object as a parameter', ->
      helpers.mockHttpResponse 200, {}, ''
      request = makeRequest()
      request.on 'sign', (req) ->
        expect(req).to.equal(request)
        throw "ERROR"
      response = request.send(->)
      expect(response.error).to.equal("ERROR")

    it 'uses the api.signingName if provided', ->
      helpers.mockHttpResponse 200, {}, ''
      service.api.signingName = 'SIGNING_NAME'
      helpers.spyOn(AWS.Signers.RequestSigner, 'getVersion').andCallFake ->
        (req, signingName) -> throw signingName
      request = makeRequest()
      response = request.send(->)
      expect(response.error).to.equal('SIGNING_NAME')
      delete service.api.signingName

    it 'uses the api.endpointPrefix if signingName not provided', ->
      helpers.mockHttpResponse 200, {}, ''
      helpers.spyOn(AWS.Signers.RequestSigner, 'getVersion').andCallFake ->
        (req, signingName) -> throw signingName
      request = makeRequest()
      response = request.send(->)
      expect(response.error).to.equal('mockservice')

  describe 'send', ->
    it 'passes httpOptions from config', ->
      options = {}
      helpers.spyOn(AWS.HttpClient, 'getInstance').andReturn handleRequest: (req, opts) ->
        options = opts
        new AWS.SequentialExecutor()
      service.config.httpOptions = timeout: 15
      service.config.maxRetries = 0
      makeRequest(->)
      expect(options.timeout).to.equal(15)

    it 'signs only once in normal case', ->
      signHandler = helpers.createSpy('sign')
      helpers.mockHttpResponse 200, {}, ['data']

      request = makeRequest()
      request.on('sign', signHandler)
      request.build()
      request.signedAt = new Date(request.signedAt - 60 * 5 * 1000)
      request.send()
      expect(signHandler.calls.length).to.equal(1)

    it 'resigns if it took more than 10 min to get to send', ->
      signHandler = helpers.createSpy('sign')
      helpers.mockHttpResponse 200, {}, ['data']

      request = makeRequest()
      request.on('sign', signHandler)
      request.build()
      request.signedAt = new Date(request.signedAt - 60 * 12 * 1000)
      request.send()
      expect(signHandler.calls.length).to.equal(2)

  describe 'httpData', ->
    beforeEach ->
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']

    it 'emits httpData event on each chunk', ->
      calls = []

      # register httpData event
      request = makeRequest()
      request.on('httpData', (chunk) -> calls.push(chunk.toString()))
      request.send()

      expect(calls).to.eql(['FOO', 'BAR', 'BAZ', 'QUX'])

    it 'does not clear default httpData event if another is added', ->
      request = makeRequest()
      request.on('httpData', ->)
      response = request.send()

      expect(response.httpResponse.body.toString()).to.equal('FOOBARBAZQUX')

  if AWS.util.isNode() and AWS.HttpClient.streamsApiVersion > 1
    describe 'httpDownloadProgress', ->
      beforeEach ->
        helpers.mockHttpResponse 200, {'content-length': 12}, ['FOO', 'BAR', 'BAZ', 'QUX']

      it 'emits httpDownloadProgress for each chunk', ->
        progress = []

        # register httpData event
        request = makeRequest()
        request.on('httpDownloadProgress', (p) -> progress.push(p))
        request.send()

        expect(progress[0]).to.eql(loaded: 3, total: 12)
        expect(progress[1]).to.eql(loaded: 6, total: 12)
        expect(progress[2]).to.eql(loaded: 9, total: 12)
        expect(progress[3]).to.eql(loaded: 12, total: 12)

  describe 'retry', ->
    it 'retries a request with a set maximum retries', ->
      sendHandler = helpers.createSpy('send')
      service.config.maxRetries = 10

      # fail every request with a fake networking error
      helpers.mockHttpResponse
        code: 'NetworkingError', message: 'Cannot connect'

      request = makeRequest()
      request.on('send', sendHandler)
      response = request.send(->)

      expect(retryHandler.calls.length).not.to.equal(0)
      expect(errorHandler.calls.length).not.to.equal(0)
      expect(completeHandler.calls.length).not.to.equal(0)
      expect(successHandler.calls.length).to.equal(0)
      expect(response.retryCount).to.equal(service.config.maxRetries)
      expect(sendHandler.calls.length).to.equal(service.config.maxRetries + 1)

    it 'retries with falloff', ->
      helpers.mockHttpResponse
        code: 'NetworkingError', message: 'Cannot connect'
      makeRequest(->)
      expect(delays).to.eql([30, 60, 120])

    it 'uses retry from error.retryDelay property', ->
      helpers.mockHttpResponse
        code: 'NetworkingError', message: 'Cannot connect'
      request = makeRequest()
      request.on 'retry', (resp) -> resp.error.retryDelay = 17
      response = request.send(->)
      expect(delays).to.eql([17, 17, 17])

    it 'retries if status code is >= 500', ->
      helpers.mockHttpResponse 500, {}, ''

      makeRequest (err) ->
        expect(err.code).to.equal(500)
        expect(err.message).to.equal(null)
        expect(err.statusCode).to.equal(500)
        expect(err.retryable).to.equal(true)
        expect(@retryCount).
          to.equal(service.config.maxRetries)

    it 'should not emit error if retried fewer than maxRetries', ->
      helpers.mockIntermittentFailureResponse 2, 200, {}, 'foo'

      response = makeRequest(->)

      expect(totalWaited).to.equal(90)
      expect(response.retryCount).to.be.lessThan(service.config.maxRetries)
      expect(response.data).to.equal('foo')
      expect(errorHandler.calls.length).to.equal(0)

    ['ExpiredToken', 'ExpiredTokenException', 'RequestExpired'].forEach (name) ->
      it 'invalidates expired credentials and retries', ->
        helpers.spyOn(AWS.HttpClient, 'getInstance')
        AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
          if req.headers.Authorization.match('Credential=INVALIDKEY')
            helpers.mockHttpSuccessfulResponse 403, {}, name, cb
          else
            helpers.mockHttpSuccessfulResponse 200, {}, 'DATA', cb
          new AWS.SequentialExecutor()

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
        expect(response.retryCount).to.equal(1)
        expect(creds.accessKeyId).to.equal('VALIDKEY1')
        expect(creds.secretAccessKey).to.equal('VALIDSECRET1')

    [301, 307].forEach (code) ->
      it 'attempts to redirect on ' + code + ' responses', ->
        helpers.mockHttpResponse code, {location: 'http://redirected'}, ''
        service.config.maxRetries = 0
        service.config.maxRedirects = 5
        response = makeRequest(->)
        expect(response.request.httpRequest.endpoint.host).to.equal('redirected')
        expect(response.error.retryable).to.equal(true)
        expect(response.redirectCount).to.equal(service.config.maxRedirects)
        expect(delays).to.eql([0, 0, 0, 0, 0])

    it 'does not redirect if 3xx is missing location header', ->
      helpers.mockHttpResponse 304, {}, ''
      service.config.maxRetries = 0
      response = makeRequest(->)
      expect(response.request.httpRequest.endpoint.host).not.to.equal('redirected')
      expect(response.error.retryable).to.equal(false)

  describe 'success', ->
    it 'emits success on a successful response', ->
      # fail every request with a fake networking error
      helpers.mockHttpResponse 200, {}, 'Success!'

      response = makeRequest(->)

      expect(retryHandler.calls.length).to.equal(0)
      expect(errorHandler.calls.length).to.equal(0)
      expect(completeHandler.calls.length).not.to.equal(0)
      expect(successHandler.calls.length).not.to.equal(0)
      expect(response.retryCount).to.equal(0);

  describe 'error', ->
    it 'emits error if error found and should not be retrying', ->
      # fail every request with a fake networking error
      helpers.mockHttpResponse 400, {}, ''

      response = makeRequest(->)

      expect(retryHandler.calls.length).not.to.equal(0)
      expect(errorHandler.calls.length).not.to.equal(0)
      expect(completeHandler.calls.length).not.to.equal(0)
      expect(successHandler.calls.length).to.equal(0)
      expect(response.retryCount).to.equal(0)

    it 'emits error if an error is set in extractError', ->
      error = code: 'ParseError', message: 'error message'
      extractDataHandler = helpers.createSpy('extractData')

      helpers.mockHttpResponse 400, {}, ''

      request = makeRequest()
      request.on('extractData', extractDataHandler)
      request.on('extractError', (resp) -> resp.error = error)
      response = request.send(->)

      expect(response.error).to.equal(error)
      expect(extractDataHandler.calls.length).to.equal(0)
      expect(retryHandler.calls.length).not.to.equal(0)
      expect(errorHandler.calls.length).not.to.equal(0)
      expect(completeHandler.calls.length).not.to.equal(0)

  describe 'logging', ->
    data = null
    logger = null
    logfn = (d) -> data += d
    match = /\[AWS mock 200 .* 0 retries\] mockMethod\(.*foo.*bar.*\)/

    beforeEach ->
      data = ''
      logger = {}
      service = new MockService(logger: logger)

    it 'does nothing if logging is off', ->
      service = new MockService(logger: null)
      helpers.mockHttpResponse 200, {}, []
      makeRequest().send()
      expect(completeHandler.calls.length).not.to.equal(0)

    it 'calls .log() on logger if it is available', ->
      helpers.mockHttpResponse 200, {}, []
      logger.log = logfn
      makeRequest().send()
      expect(data).to.match(match)

    it 'calls .write() on logger if it is available', ->
      helpers.mockHttpResponse 200, {}, []
      logger.write = logfn
      makeRequest().send()
      expect(data).to.match(match)

  describe 'terminal callback error handling', ->
    describe 'without domains', ->
      it 'emits uncaughtException', ->
        helpers.mockHttpResponse 200, {}, []
        expect(-> (makeRequest -> invalidCode)).to.throw()
        expect(completeHandler.calls.length).not.to.equal(0)
        expect(errorHandler.calls.length).to.equal(0)
        expect(retryHandler.calls.length).to.equal(0)

      ['error', 'complete'].forEach (evt) ->
        it 'raise exceptions from terminal ' + evt + ' events', ->
          helpers.mockHttpResponse 500, {}, []
          request = makeRequest()
          expect(-> request.send(-> invalidCode)).to.throw()
          expect(completeHandler.calls.length).not.to.equal(0)

    if AWS.util.isNode()
      describe 'with domains', ->
        domains = []

        createDomain = ->
          domain = require('domain').create()
          domains.push(domain)
          domain

        beforeEach ->
          domains = []

        afterEach ->
          domains.forEach (d) -> d.exit(); d.dispose()

        it 'sends error raised from complete event to a domain', ->
          result = false
          d = createDomain()
          d.enter()
          d.on('error', (e) -> result = e)
          d.run ->
            helpers.mockHttpResponse 200, {}, []
            request = makeRequest()
            request.on 'complete', -> invalidCode
            expect(-> request.send()).not.to.throw()
            expect(completeHandler.calls.length).not.to.equal(0)
            expect(retryHandler.calls.length).to.equal(0)
            expect(result.name).to.equal('ReferenceError')
            d.exit()

        it 'does not leak service error into domain', ->
          result = false
          d = createDomain()
          d.on('error', (e) -> result = e)
          d.enter()
          d.run ->
            helpers.mockHttpResponse 500, {}, []
            makeRequest().send()
            expect(completeHandler.calls.length).not.to.equal(0)
            expect(result).to.equal(false)
            d.exit()

        it 'supports inner domains', (done) ->
          helpers.mockHttpResponse 200, {}, []

          err = new ReferenceError()
          gotOuterError = false
          gotInnerError = false
          outerDomain = createDomain()
          outerDomain.on 'error', -> gotOuterError = true

          outerDomain.enter()
          outerDomain.run ->
            request = makeRequest()
            innerDomain = createDomain()
            innerDomain.enter()
            innerDomain.add(request)
            innerDomain.on 'error', ->
              gotInnerError = true
              expect(gotOuterError).to.equal(false)
              expect(gotInnerError).to.equal(true)
              expect(err.domainThrown).to.equal(false)
              expect(err.domain).to.equal(innerDomain)
              done()

            request.send ->
                innerDomain.run -> throw err
