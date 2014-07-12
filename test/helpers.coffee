AWS = null
global = null
ignoreRequire = require
if typeof window == 'undefined'
  AWS = ignoreRequire('../lib/aws')
  global = GLOBAL
else
  AWS = window.AWS
  global = window

EventEmitter = require('events').EventEmitter
Buffer = AWS.util.Buffer
semver = require('semver')

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

# Disable setTimeout for tests
# Warning: this might cause unpredictable results
# TODO: refactor this out.
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

MockService = AWS.Service.defineService 'mockService',
  serviceIdentifier: 'mock'
  initialize: (config) ->
    AWS.Service.prototype.initialize.call(this, config)
    @config.credentials = accessKeyId: 'akid', secretAccessKey: 'secret'
    @config.region = 'mock-region'
  setupRequestListeners: (request) ->
    request.on 'extractData', (resp) ->
      resp.data = resp.httpResponse.body.toString()
    request.on 'extractError', (resp) ->
      resp.error =
        code: resp.httpResponse.body.toString() || resp.httpResponse.statusCode
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
    if AWS.util.isNode() && (httpResp._events.readable || semver.gt(process.version, 'v0.11.3'))
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

mockResponse = (svc, resp) ->
  addAll = svc.addAllRequestListeners
  _spyOn(svc, 'addAllRequestListeners').andCallFake (req) ->
    req.response.httpResponse.statusCode = 200
    addAll.call(svc, req)
    req.removeAllListeners('send')
    req.removeAllListeners('extractError')
    req.removeAllListeners('extractData')
    req.on 'validateResponse', ->
      AWS.util.update req.response, resp

mockResponses = (svc, resps) ->
  index = 0
  addAll = svc.addAllRequestListeners
  _spyOn(svc, 'addAllRequestListeners').andCallFake (req) ->
    req.response.httpResponse.statusCode = 200
    addAll.call(svc, req)
    req.removeAllListeners('send')
    req.removeAllListeners('extractError')
    req.removeAllListeners('extractData')
    req.on 'validateResponse', ->
      resp = resps[index]
      if resp
        AWS.util.update req.response, resp
        index += 1

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
  MockService: MockService

