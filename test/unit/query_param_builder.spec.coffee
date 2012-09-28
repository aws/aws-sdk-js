AWS = require('../../lib/core')
require('../../lib/query_service')

describe 'AWS.QueryParamBuilder', ->

  serialize = (requestParams, rules) ->
    params = []
    builder = new AWS.QueryParamBuilder(rules)
    builder.serialize(requestParams, (name, value) ->
      params.push([name, value])
    )
    params

  describe 'scalar params', ->

    it 'can serialize simple strings', ->
      params = serialize({Name1:'abc',Name2:'xyz'}, {Name1:{t:'s'},Name2:{t:'s'}})
      expect(params).toEqual([
        ['Name1', 'abc']
        ['Name2', 'xyz']
      ])

    it 'stringifies values', ->
      params = serialize({ Count:1 }, {Count: {t:'s'}})
      expect(params).toEqual([['Count', '1']])

    it 'defaults params to strings when type not specified', ->
      params = serialize({ ParamName:'abc' }, {ParamName: {}})
      expect(params).toEqual([['ParamName', 'abc']])

  describe 'structures', ->

    it 'works with deeply nested objects', ->
      rules = {Aa:{t:'o',m:{Bb:{t:'o',m:{Cc:{t:'o',m:{Dd:{}}}}}}}}
      params = serialize({Aa:Bb:Cc:Dd:'value'}, rules)
      expect(params).toEqual([
        ['Aa.Bb.Cc.Dd', 'value']
      ])

    it 'works with nested objects that have multiple properties', ->
      rules = {Root:{t:'o',m:{Abc:{},Xyz:{}}},Root2:{}}
      params = serialize({Root:{Abc:'1',Xyz:'2'},Root2:'3'}, rules)
      expect(params).toEqual([
        ['Root.Abc', '1']
        ['Root.Xyz', '2']
        ['Root2', '3']
      ])

  describe 'lists', ->

    it 'numbers list members starting at 1', ->
      rules = {Name:{t:'a',m:{}}} # array of strings
      params = serialize({Name:['a','b','c']}, rules)
      expect(params).toEqual([
        ['Name.1', 'a'],
        ['Name.2', 'b'],
        ['Name.3', 'c'],
      ])

    it 'accepts nested arrays', ->
      rules = {Person:{t:'o',m:{Name:{t:'a',m:{}}}}} # nested list of strings
      params = serialize({Person:{Name:['a','b','c']}}, rules)
      expect(params).toEqual([
        ['Person.Name.1', 'a'],
        ['Person.Name.2', 'b'],
        ['Person.Name.3', 'c'],
      ])

    it 'supports lists of complex types', ->
      rules = {Root:{t:'a',m:{t:'o',m:{Aa:{},Bb:{}}}}} # nested list of structures
      params = serialize({Root:[{Aa:'a1',Bb:'b1'},{Aa:'a2',Bb:'b2'}]},rules)
      expect(params).toEqual([
        ['Root.1.Aa', 'a1'],
        ['Root.1.Bb', 'b1'],
        ['Root.2.Aa', 'a2'],
        ['Root.2.Bb', 'b2'],
      ])

