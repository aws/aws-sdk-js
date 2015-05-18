helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.JSON.Builder', ->

  builder = new AWS.JSON.Builder()
  timestampFormat = 'iso8601'
  api = null

  beforeEach ->
    api = new AWS.Model.Api
      metadata:
        timestampFormat: timestampFormat
        protocol: 'json'

  build = (rules, params) ->
    shape = AWS.Model.Shape.create(rules, api: api)
    builder.build(params, shape)

  describe 'build', ->

    it 'returns an empty document when there are no params', ->
      expect(build({}, {})).to.equal("{}")

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
        params = { Items: { A: 'a', B: 'b' } }
        expect(build(rules, params)).to.equal('{"Items":{"A":"a","B":"b"}}')

      it 'ignores null', ->
        expect(build(rules, Items: null)).to.equal('{}')

      it 'ignores undefined', ->
        expect(build(rules, Items: undefined)).to.equal('{}')

    describe 'lists', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'list'
            member:
              type: 'string'

      it 'translates input', ->
        params = Items: ['a', 'b', 'c']
        expect(build(rules, params)).to.equal('{"Items":["a","b","c"]}')

      it 'ignores null', ->
        expect(build(rules, Items: null)).to.equal('{}')

      it 'ignores undefined', ->
        expect(build(rules, Items: undefined)).to.equal('{}')

    describe 'maps', ->
      rules =
        type: 'structure'
        members:
          Items:
            type: 'map'
            key: type: 'string'
            value: type: 'string'

      it 'translates maps', ->
        params = { Items: { A: 'a', B: 'b' } }
        expect(build(rules, params)).to.equal('{"Items":{"A":"a","B":"b"}}')

      it 'ignores null', ->
        expect(build(rules, Items: null)).to.equal('{}')

      it 'ignores undefined', ->
        expect(build(rules, Items: undefined)).to.equal('{}')

    it 'translates nested maps', ->
      rules =
        type: 'structure'
        members:
          Items: type: 'map', value: type: 'integer'
      now = new Date()
      now.setMilliseconds(100)
      params = Items: MyKey: "5", MyOtherKey: "10"
      str = '{"Items":{"MyKey":5,"MyOtherKey":10}}'
      expect(build(rules, params)).to.equal(str)

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
      params = Build: When: now
      formatted = AWS.util.date.iso8601(now).replace(/\.\d+Z$/, '')
      expect(build(rules, params)).to.match(new RegExp('\\{"Build":\\{"When":"'+formatted+'"\\}\\}'))

    it 'translates integers formatted as strings', ->
      rules =
        type: 'structure'
        members:
          Integer: type: 'integer'
      expect(build(rules, Integer: '20')).to.equal('{"Integer":20}')

    it 'translates floats formatted as strings', ->
      rules =
        type: 'structure'
        members:
          Float: type: 'float'
      expect(build(rules, Float: '20.1')).to.equal('{"Float":20.1}')

    it 'ignores nulls null as null', ->
      rules =
        type: 'structure'
        members:
          Float: type: 'float'
          Other: type: 'string'
      expect(build(rules, Float: null, Other: 'foo')).to.equal('{"Other":"foo"}')
