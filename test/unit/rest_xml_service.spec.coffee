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

AWS = require('../../lib/core')
require('../../lib/rest_xml_service')

describe 'AWS.RESTXMLService', ->

  MockRESTXMLService = AWS.util.inherit AWS.RESTXMLService,
    constructor: (config) ->
      this.serviceName = 'mockservice'
      AWS.RESTXMLService.call(this, config)

  MockRESTXMLService.prototype.api =
    operations:
      operationName:
        n: 'OperationName'

  AWS.Service.defineMethods(MockRESTXMLService)

  svc = new MockRESTXMLService()

  it 'defines a method for each api operation', ->
    expect(typeof svc.operationName).toEqual('function')

  describe 'buildRequest', ->

    it 'returns an http request', ->
      req = svc.buildRequest('operationName', {})
      expect(req.constructor).toBe(AWS.HttpRequest)

