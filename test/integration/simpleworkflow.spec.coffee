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

helpers = require('./helpers'); AWS = helpers.AWS

describe 'AWS.SimpleWorkflow', ->
  client = new AWS.SimpleWorkflow.Client()

  describe 'listDomains', ->
    it 'should send a request with parameters', ->
      helpers.integration (-> client.listDomains(registrationStatus: "REGISTERED")), (resp) ->
        expect(resp.error).toEqual(null)
        expect(JSON.stringify(resp.data)).toMatch(/\{"domainInfos":.*\}/)
        expect(resp.httpRequest.body).toEqual('{"registrationStatus":"REGISTERED"}')

  describe 'getWorkflowExecutionHistory', ->
    it 'should fail if TableName not provided', ->
      helpers.integration (-> client.getWorkflowExecutionHistory()), (resp) ->
        expect(resp.error.code).toEqual('ValidationException')
        expect(resp.error.message).toMatch(/Value null at 'domain' failed to satisfy constraint: Member must not be null/)
        expect(resp.data).toEqual(null)
