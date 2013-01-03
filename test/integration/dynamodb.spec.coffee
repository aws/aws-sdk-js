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

helpers = require('../helpers'); AWS = helpers.AWS

describe 'AWS.DynamoDB', ->
  client = new AWS.DynamoDB.Client()

  describe 'listTables', ->
    it 'should send a request with parameters', ->
      helpers.integration (-> client.listTables(Limit: 3)), (resp) ->
        expect(resp.error).toEqual(null)
        expect(JSON.stringify(resp.data)).toMatch(/\{.*"TableNames":.*\}/)
        expect(resp.request.httpRequest.body).toEqual('{"Limit":3}')

  describe 'deleteItem', ->
    it 'should fail if TableName not provided', ->
      helpers.integration (-> client.deleteItem()), (resp) ->
        expect(resp.error instanceof Error).toBeTruthy()
        expect(resp.error.code).toEqual('ValidationException')
        expect(resp.error.message).toEqual(
          'The paramater \'tableName\' is required but was not present in the request')
        expect(resp.error.retryable).toEqual(false)
        expect(resp.error.statusCode).toEqual(400)
        expect(resp.data).toEqual(null)
