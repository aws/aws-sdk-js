# Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

integration = (reqBuilder, respCallback) ->
  req = reqBuilder()
  resp = null
  runs -> req.always (respObject) -> resp = respObject
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
  constructor: (config) -> AWS.Client.call(this, config)
  buildRequest: ->
    req = this.newHttpRequest()
    req.sign = ->
    req
  extractData: (httpResponse) ->
    return httpResponse.body
  extractError: (httpResponse) ->
    retryable = httpResponse.statusCode >= 500
    return { code: httpResponse.statusCode, message: null, retryable: retryable }
  serviceName: 'mockservice'
  signatureVersion: require('../lib/sigv4')

MockService = AWS.util.inherit AWS.Service,
  constructor: (config) -> AWS.Service.call(this, config)

MockService.Client = MockClient

module.exports =
  AWS: AWS
  integration: integration
  matchXML: matchXML
  MockClient: MockClient
  MockService: MockService
