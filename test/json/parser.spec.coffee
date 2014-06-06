helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.JSON.Parser', ->

  parser = new AWS.JSON.Parser()
  timestampFormat = 'iso8601'
  api = null

  beforeEach ->
    api = new AWS.Model.Api metadata: timestampFormat: timestampFormat

  parse = (rules, params) ->
    shape = AWS.Model.Shape.create(rules, api: api)
    parser.parse(params, shape)

  describe 'parse', ->

    it 'returns an empty document when there are no params', ->
      expect(parse({}, '{}')).toEqual({})

    describe 'structures', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'structure'
            members:
              A: type: 'string'
              B: type: 'string'

      it 'translates input', ->
        params = '{ "Items": { "A": "a", "B": "b" } }'
        expect(parse(rules, params)).toEqual({"Items":{"A":"a","B":"b"}})

      it 'ignores null', ->
        expect(parse(rules, '{"Items": null}')).toEqual({})

    describe 'lists', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'list'
            member:
              type: 'string'

      it 'translates input', ->
        params = '{"Items":["a","b","c"]}'
        expect(parse(rules, params)).toEqual(Items: ['a', 'b', 'c'])

      it 'ignores null', ->
        expect(parse(rules, '{"Items": null}')).toEqual({})

    describe 'maps', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'map'
            key: type: 'string'
            value: type: 'string'

      it 'translates maps', ->
        params = '{"Items":{"A":"a","B":"b"}}'
        expect(parse(rules, params)).toEqual({ Items: { A: 'a', B: 'b' } })

      it 'ignores null', ->
        expect(parse(rules, '{"Items": null}')).toEqual({})

    it 'translates nested maps', ->
      rules =
        type: 'structure'
        members:
          Items: type: 'map', value: type: 'integer'
      now = new Date()
      now.setMilliseconds(100)
      params = Items: MyKey: 5, MyOtherKey: 10
      str = '{"Items":{"MyKey":5,"MyOtherKey":10}}'
      expect(parse(rules, str)).toEqual(params)

    it 'traslates nested timestamps', ->
      rules =
        type: 'structure'
        members:
          Build:
            type: 'structure'
            members:
              When:
                type: 'timestamp'
      time = new Date(0)
      params = Build: When: time
      formatted = AWS.util.date.iso8601(time)
      expect(parse(rules, '{"Build":{"When":"'+formatted+'"}}')).toEqual(params)

    it 'translates binary types', ->
      rules =
        type: 'structure'
        members:
          Binary1:
            type: 'binary'
          Binary2:
            type: 'base64'
      data = parse(rules, '{"Binary1":"AQID","Binary2":"AQID"}')
      expect(AWS.util.Buffer.isBuffer(data.Binary1))
      expect(AWS.util.Buffer.isBuffer(data.Binary2))
      expect(data.Binary1.toString()).toEqual('\u0001\u0002\u0003')
      expect(data.Binary2.toString()).toEqual('\u0001\u0002\u0003')
