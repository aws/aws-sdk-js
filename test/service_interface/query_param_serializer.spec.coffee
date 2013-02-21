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
require('../../lib/service_interface/query')

describe 'AWS.QueryParamSerializer', ->

  serialize = (requestParams, rules) ->
    params = []
    serializer = new AWS.QueryParamSerializer(rules)
    serializer.serialize(requestParams, (name, value) ->
      params.push([name, value])
    )
    params

  describe 'scalar params', ->

    it 'can serialize simple strings', ->
      rules = {Name1:{type:'string'},Name2:{type:'string'}}
      params = serialize({Name1:'abc',Name2:'xyz'}, rules)
      expect(params).toEqual([
        ['Name1', 'abc']
        ['Name2', 'xyz']
      ])

    it 'stringifies values', ->
      rules = {Count: {type:'string'}}
      params = serialize({ Count:1 }, rules)
      expect(params).toEqual([['Count', '1']])

    it 'defaults params to strings when type not specified', ->
      rules = {ParamName: {}}
      params = serialize({ ParamName:'abc' }, rules)
      expect(params).toEqual([['ParamName', 'abc']])

  describe 'structures', ->

    it 'works with deeply nested objects', ->
      rules =
        Aa:
          type: 'structure'
          members:
            Bb:
              type: 'structure'
              members:
                Cc:
                  type: 'structure'
                  members:
                    Dd: {}
      params = serialize({Aa:Bb:Cc:Dd:'value'}, rules)
      expect(params).toEqual([
        ['Aa.Bb.Cc.Dd', 'value']
      ])

    it 'works with nested objects that have multiple properties', ->
      rules =
        Root:
          type: 'structure'
          members:
            Abc: {}
            Xyz: {}
        Root2: {}
      params = serialize({Root:{Abc:'1',Xyz:'2'},Root2:'3'}, rules)
      expect(params).toEqual([
        ['Root.Abc', '1']
        ['Root.Xyz', '2']
        ['Root2', '3']
      ])

    it 'applies structure member names', ->
      rules =
        Root:
          type: 'structure'
          name: 'ROOT'
          members:
            Leaf:
              name: 'lEAF'
      params = serialize({Root:{Leaf:'value'}}, rules)
      expect(params).toEqual([
        ['ROOT.lEAF', 'value']
      ])

  describe 'lists', ->

    describe 'flattened', ->

      it 'numbers list members starting at 1', ->
        rules =
          Name:
            type: 'list'
            flattened: true
            members: {}
        params = serialize({Name:['a','b','c']}, rules)
        expect(params).toEqual([
          ['Name.1', 'a'],
          ['Name.2', 'b'],
          ['Name.3', 'c'],
        ])

      it 'Uses list-member names instead of the list name', ->
        rules =
          Root:
            type: 'structure'
            members:
              Items:
                type: 'list'
                flattened: true
                members:
                  name: 'ListItem'
        params = serialize({Root:{Items:['a', 'b', 'c']}}, rules)
        expect(params).toEqual([
          ['Root.ListItem.1', 'a'],
          ['Root.ListItem.2', 'b'],
          ['Root.ListItem.3', 'c'],
        ])

      it 'accepts nested arrays', ->
        rules =
          Person:
            type: 'structure'
            members:
              Name:
                type: 'list'
                flattened: true
                members: {}
        params = serialize({Person:{Name:['a','b','c']}}, rules)
        expect(params).toEqual([
          ['Person.Name.1', 'a'],
          ['Person.Name.2', 'b'],
          ['Person.Name.3', 'c'],
        ])

      it 'supports lists of complex types', ->
        rules =
          Root:
            type: 'list'
            flattened: true
            members:
              type: 'structure'
              members:
                Aa: {}
                Bb: {}
        params = serialize({Root:[{Aa:'a1',Bb:'b1'},{Aa:'a2',Bb:'b2'}]},rules)
        expect(params).toEqual([
          ['Root.1.Aa', 'a1'],
          ['Root.1.Bb', 'b1'],
          ['Root.2.Aa', 'a2'],
          ['Root.2.Bb', 'b2'],
        ])

      it 'serialzes list members as strings when member rule not present', ->
        rules =
          Root:
            type: 'list'
            flattened: true
        params = serialize({Root:['a', 'b', 'c']}, rules)
        expect(params).toEqual([
          ['Root.1', 'a'],
          ['Root.2', 'b'],
          ['Root.3', 'c'],
        ])

    describe 'non-flat', ->
      it 'adds a `.member` prefix to each list member', ->
        rules =
          Person:
            type: 'list'
            members: {}
        params = serialize({Person:['a','b','c']}, rules)
        expect(params).toEqual([
          ['Person.member.1', 'a'],
          ['Person.member.2', 'b'],
          ['Person.member.3', 'c'],
        ])

      it 'ignores the list-member name', ->
        rules =
          Person:
            type: 'list'
            members:
              name: 'Name'
        params = serialize({Person:['a','b','c']}, rules)
        expect(params).toEqual([
          ['Person.member.1', 'a'],
          ['Person.member.2', 'b'],
          ['Person.member.3', 'c'],
        ])

      it 'observes both list name and list member name', ->
        rules =
          People:
            type: 'list'
            name: 'Person',
            members:
              name: 'Name'
        params = serialize({People:['a','b','c']}, rules)
        expect(params).toEqual([
          ['Person.member.1', 'a'],
          ['Person.member.2', 'b'],
          ['Person.member.3', 'c'],
        ])

  describe 'maps', -> # maps are hashes with user defined keys

    it 'accepts a hash (object) of arbitrary key/value pairs', ->
      rules =
        Attributes:
          type: 'map'
          keys: {}
          members: {}
      data = {Attributes:{Color:'red',Size:'large',Value:'low'}}
      params = serialize(data, rules)
      expect(params).toEqual([
        ['Attributes.1.key', 'Color'],
        ['Attributes.1.value', 'red'],
        ['Attributes.2.key', 'Size'],
        ['Attributes.2.value', 'large'],
        ['Attributes.3.key', 'Value'],
        ['Attributes.3.value', 'low'],
      ])

  describe 'maps with member names', ->

    it 'applies member name traits', ->
      rules =
        Attributes:
          type: 'map'
          keys:
            name: 'Name'
          members:
            name: 'Value'
      data = {Attributes:{Color:'red',Size:'large',Value:'low'}}
      params = serialize(data, rules)
      expect(params).toEqual([
        ['Attributes.1.Name', 'Color'],
        ['Attributes.1.Value', 'red'],
        ['Attributes.2.Name', 'Size'],
        ['Attributes.2.Value', 'large'],
        ['Attributes.3.Name', 'Value'],
        ['Attributes.3.Value', 'low'],
      ])
