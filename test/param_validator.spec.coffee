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

describe 'AWS.ParamValidator', ->
  [members, rules] = [{}, {}]

  validate = (params) ->
    r = rules
    if r && !r.xml && !r.payload
      r = type: 'structure', members: rules
    new AWS.ParamValidator().validate(r, params)

  expectValid = (params) ->
    expect(validate(params)).toEqual true

  expectError = (message, params) ->
    if params == undefined
      [message, params] = [undefined, message]
    expect(-> validate(params)).toThrow(message)

  # empty rules (nil or {}) means no arguments are accepted
  describe 'empty rules', ->
    beforeEach ->
      rules = {}

    it 'accepts an empty hash when the rules are nil', ->
      rules = null
      expectValid {}

    it 'accepts an empty hash when the rules are an empty hash', ->
      expectValid {}

    it 'does not accept params in the given hash', ->
      expectError foo: 'bar'

  # Param (hash) keys can be given as strings or symbols, but
  # are case sensitive.
  describe 'param keys', ->
    beforeEach ->
      rules = foo: {}, bar: type: 'string'

    it 'accepts string keys', ->
      expectValid foo: 'foo'
      expectValid bar: 'bar'

    it 'rejects keys that do not match case', ->
      expectError Bar: 'bar'
      expectError Foo: 'foo'

  # Params not described in the rules are not accepted.
  describe 'unexpected params', ->
    beforeEach ->
      rules =
        string1: {}
        string2: {}
        hash:
          type: 'structure'
          members:
            good: {}

    it 'throws an ArgumentError for un-described params', ->
      expectError string3: 'xyz'

    it 'rejects nested params that are not described in the rules', ->
      expectValid hash: good: 'abc'
      expectError hash: bad: 'abc'

  # Params that are hashes (structures) can specify that some or all
  # of their nested params are required.  When the parent param is
  # present, the required nested params must also be present or an
  # ArgumentError is raised.  If the parent param is optional and not
  # provided, then missing nested required params will not raise an error.
  describe 'required params', ->
    beforeEach ->
      rules =
        req: required: true
        opt:
          type: 'structure'
          members: req: required: true

    it 'throws an error if a top-level required param is omitted', ->
      expectError {}

    it 'optional params can be omitted, even if they have required params', ->
      expectValid req: 'abc'

    it 'requires nested required params when the parent is present', ->
      expectError req: 'abc', opt: {}

    it 'accepts nested required params', ->
      expectValid req: 'abc', opt: req: 'xyz'

    it 'accepts empty strings in required params', ->
      expectValid req: ''

    it 'accepts 0 in required params', ->
      rules.req.type = 'integer'
      expectValid req: 0

    it 'accepts false in required params', ->
      rules.req.type = 'boolean'
      expectValid req: false

  # The root params is always a structure (hash) by default, but
  # you can also nest structures.
  describe 'structure', ->
    beforeEach ->
      rules =
        hash1:
          type: 'structure'
          members:
            param1: {}
            param2: {}
            hash2:
              type: 'structure'
              members:
                param3: type: 'boolean'
                param4: type: 'integer', required: true

    it 'accepts hashes', ->
      expectValid hash1: {}

    it 'accepts hashes with params', ->
      expectValid hash1: param1: 'a', param2: 'b'

    it 'throws an error for non hashes', ->
      expectError hash1: 'oops'

    it 'throws an error for unknown hash members', ->
      expectError hash1: param3: 'c'

    it 'allows nesting structures', ->
      expectValid hash1: hash2: param3: true, param4: 123

    it 'rejects unknown members', ->
      expectError hash1: oops: 'abc'

  describe 'list', ->
    beforeEach ->
      members = {}
      rules = array: type: 'list', members: members

    it 'accepts an array for list params', ->
      expectValid array: []

    it 'throws an error if list params are not arrays', ->
      expectError array: {}

    it 'supports nested structures', ->
      members.type = 'structure'
      members.members = name: {}
      expectValid array: [{name: 'abc'}, {name: 'mno'}, {name: 'xyz'}]
      expectError array: [{badKey: 'abc'}]

  describe 'map', ->
    beforeEach ->
      members = {}
      rules = hash: type: 'map', members: members

    it 'accepts maps', ->
      expectValid hash: {}

    it 'rejects non-maps', ->
      expectError hash: 'oops'

    it 'accepts user-supplied maps keys', ->
      expectValid hash: a: '1', b: '2', c: '3'

    it 'supports nested params', ->
      members.type = 'structure'
      members.members =
        param1: type: 'list'
        param2: type: 'integer'
        param3: type: 'structure', members: param4: {}

      expectValid hash:
        foo: param1: ['a', 'b', 'c']
        bar: param2: 123
        yuck: param3: param4: 'xyz'
      expectError hash: foo: param4: 'abc'

  describe 'boolean', ->
    beforeEach ->
      rules = param: type: 'boolean'

    it 'accepts true', ->
      expectValid param: true

    it 'accpets false', ->
      expectValid param: false

    it 'rejects other values', ->
      expectError param: 'true'

  describe 'timestamp', ->
    beforeEach ->
      rules = param: type: 'timestamp'

    it 'accepts Date objects', ->
      expectValid param: new Date()

    it 'accepts strings formatted like datetimes', ->
      expectValid param: '2012-01-02T10:11:12Z'
      expectValid param: '2012-01-02T10:11:12.0001Z'

    it 'rejects other param values', ->
      expectError param: 'abc'

  describe 'string', ->
    beforeEach ->
      rules = param: type: 'string'

    it 'accepts strings', ->
      expectValid param: 'abc'

    it 'accepts empty string', ->
      expectValid param: ''

    it 'rejects other objects', ->
      expectError param: 123
      expectError param: {}
      expectError param: []

  describe 'float', ->
    beforeEach ->
      rules = param: type: 'float'

    it 'accepts floats', ->
      expectValid param: 1.23

    it 'accepts integers', ->
      expectValid param: 123

    it 'rejects other objects', ->
      expectError param: '123'

  describe 'integer', ->
    beforeEach ->
      rules = param: type: 'integer'

    it 'accepts integers', ->
      expectValid param: 123

    it 'rejects other objects', ->
      expectError param: '123'

  describe 'binary', ->
    beforeEach ->
      rules = param: type: 'base64'

    it 'accepts strings', ->
      expectValid param: 'abc'

    it 'accepts Buffers', ->
      expectValid param: new Buffer(100)

    it 'rejects other objects', ->
      expectError param: {}

  describe 'binary', ->
    beforeEach ->
      rules = param: type: 'binary'

    it 'accepts strings', ->
      expectValid param: 'abc'

    it 'accepts Buffers', ->
      expectValid param: new Buffer(100)

    it 'accepts Streams', ->
      Stream = require('stream').Stream
      expectValid param: new Stream()

    it 'rejects other objects', ->
      expectError param: {}

  describe 'payloads', ->
    it 'validates from payload key if rules include an xml element', ->
      rules =
        xml: 'body'
        type: 'structure'
        members:
          notbody: type: 'string'
          body:
            required: true
            type: 'structure'
            members: enabled: type: 'boolean'

      expectValid enabled: true, notbody: 'true'

  describe 'error messages', ->
    beforeEach ->
      rules =
        config:
          type: 'structure'
          members:
            settings:
              type: 'structure'
              members:
                enabled: type: 'boolean'

    it 'throws helpful messages for unknown params', ->
      msg = 'Unexpected key \'fake\' found in params'
      expectError msg, fake: 'value'

    it 'throws helpful messages for nested unknown params', ->
      msg = 'Unexpected key \'fake\' found in params.config.settings'
      expectError msg, config: settings: fake: 'value'

    it 'throws helpful messages for missing required params', ->
      msg = 'Missing required key \'needed\' in params.config.settings'
      rules.config.members.settings.members.needed = required: true
      expectError msg, config: settings: {}

    it 'throws helpul messages for invalid structures', ->
      msg = 'Expected params.config.settings to be a structure'
      expectError msg, config: settings: 'abc'

    it 'throws helpul messages for invalid lists', ->
      msg = 'Expected params.config.settings.tags to be an Array'
      rules.config.members.settings.members.tags = type: 'list', members: {}
      expectError msg, config: settings: tags: 123

    it 'throws helpful messages for invalid list members', ->
      msg = 'Expected params.config.items[1].value to be a number'
      rules['config']['members']['items'] =
        type: 'list',
        members:
          type: 'structure',
          members:
            value: type: 'integer'

      expectError msg, config: items:
        [{value: 123}, {value: 'abc'}, {value: 321}]

    it 'throws helpful messages for invalid maps', ->
      msg = 'Expected params.config.settings.tags to be a map'
      rules['config']['members']['settings']['members']['tags'] =
        type: 'map',
        members: {}

      expectError msg, config: settings: tags: '123'

    it 'throws helpful messages for invalid map members', ->
      msg = 'Expected params.config.counts[\'red\'] to be a number'
      rules['config']['members']['counts'] =
        type: 'map',
        members: type: 'integer'

      expectError msg, config: counts: red: true

    it 'throws helpful messages for invalid strings', ->
      msg = "Expected params.config.settings.name to be a string"
      rules['config']['members']['settings']['members']['name'] =
        type: 'string'

      expectError msg, config: settings: name: null

    it 'throws helpful messages for invalid integers', ->
      msg = "Expected params.config.settings.count to be a number"
      rules['config']['members']['settings']['members']['count'] =
        type: 'integer'

      expectError msg, config: settings: count: null

    it 'throws helpful messages for invalid timestamps', ->
      msg = "Expected params.config.settings.when to be a " +
            "Date object or ISO-8601 string"
      rules['config']['members']['settings']['members']['when'] =
        type: 'timestamp'

      expectError msg, config: settings: when: null

    it 'throws helpful messages for invalid booleans', ->
      msg = "Expected params.config.settings.enabled to be a boolean"
      expectError msg, config: settings: enabled: null

    it 'throws helpful messages for invalid floats', ->
      msg = "Expected params.config.settings.value to be a number"
      rules.config.members.settings.members.value =
        type: 'float'

      expectError msg, config: settings: value: null

    it 'throws helpful messages for invalid base64 params', ->
      msg = "Expected params.config.settings.data to be a " +
            "string, Buffer, or Stream"
      rules.config.members.settings.members.data =
        type: 'base64'

      expectError msg, config: settings: data: null

    it 'throws helpful messages for invalid binary params', ->
      msg = "Expected params.config.settings.data to be a " +
            "string, Buffer, or Stream"
      rules.config.members.settings.members.data =
        type: 'binary'

      expectError msg, config: settings: data: null
