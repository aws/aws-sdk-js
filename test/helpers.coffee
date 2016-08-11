AWS = null
global = null
ignoreRequire = require
if typeof window == 'undefined'
  AWS = ignoreRequire('../lib/aws')
  global = GLOBAL
else
  AWS = window.AWS
  global = window

if global.jasmine
  global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000

_it = it
global.it = (label, fn) ->
  if label.match(/\(no phantomjs\)/) and navigator and navigator.userAgent.match(/phantomjs/i)
    return
  _it(label, fn)

EventEmitter = require('events').EventEmitter
Buffer = AWS.util.Buffer

require('util').print = (data) ->
  process.stdout.write(data)

# Mock credentials
AWS.config.update
  paramValidation: false
  region: 'mock-region'
  credentials:
    accessKeyId: 'akid'
    secretAccessKey: 'secret'
    sessionToken: 'session'

spies = null
beforeEach ->
  spies = []

afterEach ->
  while spies.length > 0
    spy = spies.pop()
    spy.object[spy.methodName] = spy.origMethod

_createSpy = (name) ->
  spy = ->
    spy.calls.push
      object: this
      arguments: Array.prototype.slice.call(arguments)
    if spy.callFn
      return spy.callFn.apply(spy.object, arguments)
    if spy.shouldReturn
      return spy.returnValue
  spy.object = this
  spy.methodName = name
  spy.callFn = null
  spy.shouldReturn = false
  spy.returnValue = null
  spy.calls = []
  spy.andReturn = (value) -> spy.shouldReturn = true; spy.returnValue = value; spy
  spy.andCallFake = (fn) -> spy.callFn = fn; spy
  spy

_spyOn = (obj, methodName) ->
  spy = _createSpy.call(obj, methodName)
  spy.origMethod = obj[methodName]
  spy.andCallThrough = -> spy.callFn = spy.origMethod; spy
  obj[methodName] = spy
  spies.push(spy)
  spy

# Disable setTimeout for tests, but keep original in case test needs to use it
# Warning: this might cause unpredictable results
# TODO: refactor this out.
global.setTimeoutOrig = global.setTimeout
global.setTimeout = (fn) -> fn()

global.expect = require('chai').expect

matchXML = (xml1, xml2) ->
  results = []
  parser = new (require('xml2js').Parser)()
  [xml1, xml2].forEach (xml) ->
    parser.parseString xml, (e,r) ->
      if e then throw e
      results.push(r)
  expect(results[0]).to.eql(results[1])

MockService = AWS.Service.defineService 'mock',
  serviceIdentifier: 'mock'
  initialize: (config) ->
    AWS.Service.prototype.initialize.call(this, config)
    @config.credentials = accessKeyId: 'akid', secretAccessKey: 'secret'
    @config.region = 'mock-region'
  setupRequestListeners: (request) ->
    request.on 'extractData', (resp) ->
      resp.data = (resp.httpResponse.body||'').toString()
    request.on 'extractError', (resp) ->
      resp.error =
        code: (resp.httpResponse.body||'').toString() || resp.httpResponse.statusCode
        message: null
  api: new AWS.Model.Api metadata:
    endpointPrefix: 'mockservice'
    signatureVersion: 'v4'

mockHttpSuccessfulResponse = (status, headers, data, cb) ->
  if !Array.isArray(data)
    data = [data]

  httpResp = new EventEmitter()
  httpResp.statusCode = status
  httpResp.headers = headers

  cb(httpResp)
  httpResp.emit('headers', status, headers)

  if AWS.util.isNode() && httpResp._events.readable
    httpResp.read = ->
      if data.length > 0
        chunk = data.shift()
        if chunk is null
          null
        else
          new Buffer(chunk)
      else
        null

  AWS.util.arrayEach data.slice(), (str) ->
    if AWS.util.isNode() && httpResp._events.readable
      httpResp.emit('readable')
    else
      httpResp.emit('data', new Buffer(str))

  if httpResp._events['readable'] || httpResp._events['data']
    httpResp.emit('end')
  else
    httpResp.emit('aborted')

mockHttpResponse = (status, headers, data) ->
  stream = new EventEmitter()
  stream.setMaxListeners(0)
  _spyOn(AWS.HttpClient, 'getInstance')
  AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
    if typeof status == 'number'
      mockHttpSuccessfulResponse status, headers, data, cb
    else
      errCb(status)
    stream

  return stream

mockIntermittentFailureResponse = (numFailures, status, headers, data) ->
  retryCount = 0
  _spyOn(AWS.HttpClient, 'getInstance')
  AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
    if retryCount < numFailures
      retryCount += 1
      errCb code: 'NetworkingError', message: 'FAIL!'
    else
      statusCode = retryCount < numFailures ? 500 : status
      mockHttpSuccessfulResponse statusCode, headers, data, cb
    new EventEmitter()

globalEvents = null
beforeEach -> globalEvents = AWS.events
afterEach -> AWS.events = globalEvents

setupMockResponse = (cb) ->
  AWS.events = new AWS.SequentialExecutor()
  AWS.events.on 'validate', (req) ->
    ['sign', 'send'].forEach (evt) -> req.removeAllListeners(evt)
    req.removeListener('extractData', AWS.EventListeners.CorePost.EXTRACT_REQUEST_ID)
    req.removeListener('extractError', AWS.EventListeners.CorePost.EXTRACT_REQUEST_ID)
    Object.keys(AWS.EventListeners).forEach (ns) ->
      if AWS.EventListeners[ns].EXTRACT_DATA
        req.removeListener('extractData', AWS.EventListeners[ns].EXTRACT_DATA)
      if AWS.EventListeners[ns].EXTRACT_ERROR
        req.removeListener('extractError', AWS.EventListeners[ns].EXTRACT_ERROR)
    req.response.httpResponse.statusCode = 200
    req.removeListener('validateResponse', AWS.EventListeners.Core.VALIDATE_RESPONSE)
    req.on('validateResponse', cb)

mockResponse = (resp) ->
  reqs = []
  setupMockResponse (response) ->
    reqs.push(response.request)
    AWS.util.update response, resp
  reqs

mockResponses = (resps) ->
  index = 0
  reqs = []
  setupMockResponse (response) ->
    reqs.push(response.request)
    resp = resps[index]
    AWS.util.update response, resp
    index += 1

  reqs

operationsForRequests = (reqs) ->
  reqs.map (req) ->
    req.service.serviceIdentifier + '.' + req.operation

module.exports =
  AWS: AWS
  util: AWS.util
  spyOn: _spyOn
  createSpy: _createSpy
  matchXML: matchXML
  mockHttpResponse: mockHttpResponse
  mockIntermittentFailureResponse: mockIntermittentFailureResponse
  mockHttpSuccessfulResponse: mockHttpSuccessfulResponse
  mockResponse: mockResponse
  mockResponses: mockResponses
  operationsForRequests: operationsForRequests
  MockService: MockService

