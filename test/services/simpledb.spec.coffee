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

helpers = require('../helpers')
AWS = helpers.AWS

require('../../lib/services/simpledb')

describe 'AWS.SimpleDB.Client', ->
  describe 'setEndpoint', ->
    it 'uses global endpoint if region is us-east-1', ->
      client = new AWS.SimpleDB.Client(region: 'us-east-1')
      client.setEndpoint()
      expect(client.endpoint.host).toEqual('sdb.amazonaws.com')

    it 'uses normal setEndpoint functionality if region is not us-east-1', ->
      setEndpoint = spyOn(AWS.Client.prototype, 'setEndpoint')
      client = new AWS.SimpleDB.Client(region: 'us-west-2')
      client.setEndpoint()
      expect(setEndpoint).toHaveBeenCalled()
