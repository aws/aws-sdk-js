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

AWS.HttpClient.getInstance = -> throw new Error('Unmocked HTTP request')

flattenXML = (xml) ->
  if (!xml)
    return xml
  xml.split("\n").join('').   # remove newlines
    replace(/>\s+</g, '><').  # prunes whitespace between elements
    replace(/^\s+|\s+$/g, '') # trims whitespace from ends

matchXML = (xml1, xml2) ->
  expect(flattenXML(xml1)).toEqual(flattenXML(xml2))

MockClient = AWS.util.inherit AWS.Client,
  constructor: (config) ->
    AWS.Client.call(this, config)
    @config.credentials = accessKeyId: 'akid', secretAccessKey: 'secret'
    @config.region = 'mock-region'
  setupRequestListeners: (request) ->
    request.on 'extractData', (resp) ->
      resp.data = resp.httpResponse.body.toString()
    request.on 'extractError', (resp) ->
      resp.error =
        code: resp.httpResponse.statusCode
        message: null
  api:
    endpointPrefix: 'mockservice'
    signatureVersion: 'v4'

MockService = AWS.util.inherit AWS.Service,
  constructor: (config) -> AWS.Service.call(this, config)

MockService.Client = MockClient

mockHttpResponse = (status, headers, data) ->
  spyOn(AWS.HttpClient, 'getInstance')
  AWS.HttpClient.getInstance.andReturn handleRequest: (req, resp) ->
    if typeof status == 'number'
      req.emit('httpHeaders', [status, headers, resp])
      str = str instanceof Array ? str : [str]
      AWS.util.arrayEach data, (str) ->
        req.emit('httpData', [new Buffer(str), resp])
      req.emit('httpDone', [resp])
    else
      req.emit('httpError', [status, resp])

mockIntermittentFailureResponse = (numFailures, status, headers, data) ->
  spyOn(AWS.HttpClient, 'getInstance')
  AWS.HttpClient.getInstance.andReturn handleRequest: (req, resp) ->
    if resp.retryCount < numFailures
      req.emit('httpError', [{code: 'NetworkingError', message: 'FAIL!'}, resp])
    else
      req.emit('httpHeaders', [(resp.retryCount < numFailures ? 500 : status), headers, resp])
      str = str instanceof Array ? str : [str]
      AWS.util.arrayEach data, (str) ->
        req.emit('httpData', [new Buffer(str), resp])
      req.emit('httpDone', [resp])

module.exports =
  AWS: AWS
  matchXML: matchXML
  mockHttpResponse: mockHttpResponse
  mockIntermittentFailureResponse: mockIntermittentFailureResponse
  MockClient: MockClient
  MockService: MockService
