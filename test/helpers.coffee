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

fs = require('fs')
configFile = __dirname + '/../configuration'

if fs.existsSync(configFile)
  AWS.config.loadFromPath(configFile)
else
  AWS.config.update credentials:
    accessKeyId: 'akid'
    secretAccessKey: 'secret'

integration = (reqBuilder, respCallback) ->
  req = reqBuilder()
  resp = null
  runs ->
    req.on('complete', (respObject) -> resp = respObject)
    req.send()
  waitsFor -> resp != null
  runs -> respCallback(resp)

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
    serviceName: 'mockservice'
    signatureVersion: 'v4'

MockService = AWS.util.inherit AWS.Service,
  constructor: (config) -> AWS.Service.call(this, config)

MockService.Client = MockClient

mockHttpResponse = (status, headers, data) ->
  spyOn(AWS.HttpClient, 'getInstance')
  AWS.HttpClient.getInstance.andReturn handleRequest: (req, resp) ->
    if typeof status == 'number'
      req.emit('httpHeaders', status, headers, resp)
      str = str instanceof Array ? str : [str]
      AWS.util.arrayEach data, (str) ->
        req.emit('httpData', new Buffer(str), resp)
      req.emit('httpDone', resp)
    else
      req.emit('httpError', status, resp)

mockIntermittentFailureResponse = (numFailures, status, headers, data) ->
  spyOn(AWS.HttpClient, 'getInstance')
  AWS.HttpClient.getInstance.andReturn handleRequest: (req, resp) ->
    if resp.retryCount < numFailures
      req.emit('httpError', {code: 'NetworkingError', message: 'FAIL!'}, resp)
    else
      req.emit('httpHeaders', (resp.retryCount < numFailures ? 500 : status), headers, resp)
      str = str instanceof Array ? str : [str]
      AWS.util.arrayEach data, (str) ->
        req.emit('httpData', new Buffer(str), resp)
      req.emit('httpDone', resp)

module.exports =
  AWS: AWS
  integration: integration
  matchXML: matchXML
  mockHttpResponse: mockHttpResponse
  mockIntermittentFailureResponse: mockIntermittentFailureResponse
  MockClient: MockClient
  MockService: MockService
