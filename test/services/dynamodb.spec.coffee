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

AWS = require('../../lib/core')
require('../../lib/services/dynamodb')

describe 'AWS.DynamoDB', ->

  configure = (options) ->
    new AWS.Config(options)

  ddb = (options) ->
    new AWS.DynamoDB(configure(options))

  describe 'config', ->

    it 'returns the configuration object it was constructed with', ->
      config = configure()
      dynamo = new AWS.DynamoDB(config)
      expect(dynamo.config).toEqual(config)

  describe 'numRetries', ->

    it 'defaults to 10', ->
      expect(ddb().numRetries()).toEqual(10)

    it 'can be overridden in the config', ->
      expect(ddb({ maxRetries: 2 }).numRetries()).toEqual(2)

  describe 'retryDelays', ->

    it 'has a custom backoff function', ->
      delays = [ 0, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800 ]
      expect(ddb().retryDelays()).toEqual(delays)

