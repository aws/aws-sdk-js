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

describe 'AWS.JSON.Builder', ->

  timestampFormat = 'iso8601'

  toJSON = (rules, params, options) ->
    options = {} if (!options)
    options.timestampFormat = timestampFormat
    builder = new AWS.JSON.Builder(rules, options)
    builder.toJSON(params)

  describe 'toJSON', ->

    it 'returns an empty document when there are no params', ->
      expect(toJSON({}, {})).toEqual("{}")

    it 'translates strucutres', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'structure'
            members:
              A:
                type: 'string'
              B:
                type: 'string'
      params = { Items: { A: 'a', B: 'b' } }
      expect(toJSON(rules, params)).toEqual('{"Items":{"A":"a","B":"b"}}')

    it 'translates lists', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'list'
            members:
              type: 'string'
      params = { Items: ['a','b','c'] }
      expect(toJSON(rules, params)).toEqual('{"Items":["a","b","c"]}')

    it 'translates maps', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'map'
      params = { Items: { A: 'a', B: 'b' } }
      expect(toJSON(rules, params)).toEqual('{"Items":{"A":"a","B":"b"}}')

    it 'traslates nested timestamps', ->
      rules =
        type: 'structure'
        members:
          Build:
            type: 'timestamp'
      now = new Date()
      params =
        Build:
          When: now
      formatted = AWS.util.date.iso8601(now)
      expect(toJSON(rules, params)).toEqual('{"Build":{"When":"'+formatted+'"}}')

