AWS = null
ignoreRequire = require
if typeof window == 'undefined'
  AWS = ignoreRequire('../lib/aws')
else
  AWS = window.AWS

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

# Disable setTimeout for tests
# Warning: this might cause unpredictable results
# TODO: refactor this out.
`setTimeout = function(fn, delay) { fn(); }`

flattenXML = (xml) ->
  if (!xml)
    return xml
  xml.split("\n").join('').   # remove newlines
    replace(/>\s+</g, '><').  # prunes whitespace between elements
    replace(/^\s+|\s+$/g, '') # trims whitespace from ends

matchXML = (xml1, xml2) ->
  expect(flattenXML(xml1)).toEqual(flattenXML(xml2))

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
  spyOn(AWS.HttpClient, 'getInstance')
  AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
    if typeof status == 'number'
      mockHttpSuccessfulResponse status, headers, data, cb
    else
      errCb(status)
    stream

  return stream

mockIntermittentFailureResponse = (numFailures, status, headers, data) ->
  retryCount = 0
  spyOn(AWS.HttpClient, 'getInstance')
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
  spyOn(svc, 'addAllRequestListeners').andCallFake (req) ->
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
  spyOn(svc, 'addAllRequestListeners').andCallFake (req) ->
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
  matchXML: matchXML
  mockHttpResponse: mockHttpResponse
  mockIntermittentFailureResponse: mockIntermittentFailureResponse
  mockHttpSuccessfulResponse: mockHttpSuccessfulResponse
  mockResponse: mockResponse
  mockResponses: mockResponses
  MockService: MockService

