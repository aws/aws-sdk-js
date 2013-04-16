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

AWS = require('../lib/aws')
EventEmitter = require('events').EventEmitter

# Mock credentials
AWS.config.update
  region: 'mock-region'
  credentials:
    accessKeyId: 'akid'
    secretAccessKey: 'secret'

# Disable validation
AWS.EventListeners.Core.removeListener 'validate',
  AWS.EventListeners.Core.VALIDATE_PARAMETERS

# Disable setTimeout for tests
# Warning: this might cause unpredictable results
# TODO: refactor this out.
`setTimeout = function(fn, delay) { fn(); }`

#AWS.HttpClient.getInstance = -> throw new Error('Unmocked HTTP request')

flattenXML = (xml) ->
  if (!xml)
    return xml
  xml.split("\n").join('').   # remove newlines
    replace(/>\s+</g, '><').  # prunes whitespace between elements
    replace(/^\s+|\s+$/g, '') # trims whitespace from ends

matchXML = (xml1, xml2) ->
  expect(flattenXML(xml1)).toEqual(flattenXML(xml2))

MockService = AWS.Service.defineService 'mockService',
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
  api:
    endpointPrefix: 'mockservice'
    signatureVersion: 'v4'

mockHttpSuccessfulResponse = (status, headers, data, cb) ->
  if !Array.isArray(data)
    data = [data]

  httpResp = new EventEmitter()
  httpResp.statusCode = status
  httpResp.headers = headers
  httpResp.read = ->
    if data.length > 0
      new Buffer(data.shift())
    else
      null

  cb(httpResp)

  AWS.util.arrayEach data.slice(), (str) ->
    if httpResp._events.readable
      httpResp.emit('readable')
    else
      httpResp.emit('data', new Buffer(str))

  httpResp.emit('end')

mockHttpResponse = (status, headers, data) ->
  stream = new EventEmitter()
  spyOn(AWS.HttpClient, 'getInstance')
  AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
    if typeof status == 'number'
      mockHttpSuccessfulResponse status, headers, data, cb
    else
      errCb(status)

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

module.exports =
  AWS: AWS
  matchXML: matchXML
  mockHttpResponse: mockHttpResponse
  mockIntermittentFailureResponse: mockIntermittentFailureResponse
  mockHttpSuccessfulResponse: mockHttpSuccessfulResponse
  MockService: MockService
