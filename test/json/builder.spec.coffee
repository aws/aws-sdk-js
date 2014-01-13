helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.JSON.Builder', ->

  timestampFormat = 'iso8601'

  build = (rules, params, options) ->
    options = {} if (!options)
    options.timestampFormat = timestampFormat
    builder = new AWS.JSON.Builder(rules, options)
    builder.build(params)

  describe 'build', ->

    it 'returns an empty document when there are no params', ->
      expect(build({}, {})).toEqual("{}")

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
      expect(build(rules, params)).toEqual('{"Items":{"A":"a","B":"b"}}')

    it 'translates lists', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'list'
            members:
              type: 'string'
      params = { Items: ['a','b','c'] }
      expect(build(rules, params)).toEqual('{"Items":["a","b","c"]}')

    it 'translates maps', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'map'
      params = { Items: { A: 'a', B: 'b' } }
      expect(build(rules, params)).toEqual('{"Items":{"A":"a","B":"b"}}')

    it 'translates nested maps', ->
      rules =
        type: 'structure'
        members:
          Items: type: 'map', members: type: 'integer'
      now = new Date()
      now.setMilliseconds(100)
      params = Items: MyKey: "5", MyOtherKey: "10"
      str = '{"Items":{"MyKey":5,"MyOtherKey":10}}'
      expect(build(rules, params)).toEqual(str)

    it 'traslates nested timestamps', ->
      rules =
        type: 'structure'
        members:
          Build:
            type: 'structure'
            members:
              When:
                type: 'timestamp'
      now = new Date()
      now.setMilliseconds(100)
      params =
        Build:
          When: now
      formatted = AWS.util.date.iso8601(now)
      expect(build(rules, params)).toEqual('{"Build":{"When":"'+formatted+'"}}')

    it 'translates integers formatted as strings', ->
      rules =
        type: 'structure'
        members:
          Integer: type: 'integer'
      expect(build(rules, Integer: '20')).toEqual('{"Integer":20}')

    it 'translates floats formatted as strings', ->
      rules =
        type: 'structure'
        members:
          Float: type: 'float'
      expect(build(rules, Float: '20.1')).toEqual('{"Float":20.1}')
