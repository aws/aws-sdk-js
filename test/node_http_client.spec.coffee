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

helpers = require('./helpers')
AWS = helpers.AWS
MockClient = helpers.MockClient

describe 'AWS.NodeHttpClient', ->
  http = new AWS.NodeHttpClient()

  describe 'handleRequest', ->
    it 'emits httpError in error event', ->
      done = false
      endpoint = new AWS.Endpoint('http://invalid')
      req = new AWS.Request(endpoint: endpoint, config: region: 'empty')
      resp = new AWS.Response(req)
      req.on 'httpError', (cbErr, cbResp) ->
        expect(cbErr instanceof Error).toBeTruthy()
        expect(cbResp).toBe(resp)
        done = true

      runs -> http.handleRequest(req, resp)
      waitsFor -> done
