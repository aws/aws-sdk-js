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

require('../../lib/services/glacier')

describe 'AWS.Glacier.Client', ->
  client = new AWS.Glacier.Client

  describe 'building requests', ->
    it 'sets accountId to "-" if not set', ->
      resp = client.listVaults().send()
      expect(resp.request.httpRequest.path).toEqual('/-/vaults')

    it 'will not override accountId if set', ->
      resp = client.listVaults(accountId: 'ABC123').send()
      expect(resp.request.httpRequest.path).toEqual('/ABC123/vaults')

  describe 'computeChecksums', ->
    it 'returns correct linear and tree hash for buffer data', ->
      # compute a 5.5 megabyte chunk of data filled with '0' string (0 byte)
      # expected values taken from AWS SDK for Ruby
      data = new Buffer(1024 * 1024 * 5.5)
      data.fill('0')

      expected =
        linearHash: '68aff0c5a91aa0491752bfb96e3fef33eb74953804f6a2f7b708d5bcefa8ff6b', 
        treeHash: '154e26c78fd74d0c2c9b3cc4644191619dc4f2cd539ae2a74d5fd07957a3ee6a'

      expect(client.computeChecksums(data)).toEqual(expected)
