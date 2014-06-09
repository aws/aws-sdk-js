helpers = require('../helpers')
QueryParamSerializer = require('../../lib/query/query_param_serializer')
Shape = helpers.AWS.Model.Shape

describe 'QueryParamSerializer', ->

  serialize = (requestParams, rules) ->
    params = []
    serializer = new QueryParamSerializer()
    shape = Shape.create type: 'structure', members: rules
    serializer.serialize requestParams, shape, (name, value) ->
      params.push([name, value])
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

    it 'ignores null values', ->
      rules = {ParamName: {}}
      params = serialize({ ParamName:null }, rules)
      expect(params).toEqual([])

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
          locationName: 'ROOT'
          members:
            Leaf:
              locationName: 'lEAF'
      params = serialize({Root:{Leaf:'value'}}, rules)
      expect(params).toEqual([
        ['ROOT.lEAF', 'value']
      ])

    it 'ignores null', ->
      rules =
        Root:
          type: 'structure'
          locationName: 'ROOT'
          members:
            Leaf:
              locationName: 'lEAF'
      params = serialize({Root:null}, rules)
      expect(params).toEqual([])


  describe 'lists', ->

    describe 'flattened', ->

      it 'numbers list members starting at 1', ->
        rules =
          Name:
            type: 'list'
            flattened: true
            member: type: 'string'
        params = serialize({Name:['a','b','c']}, rules)
        expect(params).toEqual([
          ['Name.1', 'a'],
          ['Name.2', 'b'],
          ['Name.3', 'c'],
        ])

      it 'supports queryFlattened key', ->
        rules =
          Name:
            type: 'list'
            queryFlattened: true
            member: type: 'string'
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
                member:
                  locationName: 'ListItem'
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
                member: type: 'string'
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
            member:
              type: 'structure'
              members:
                Aa: {}
                Bb: {}
        params = serialize({Root:[{Aa:'a1',Bb:'b1'},{Aa:'a2',Bb:'b2'}]},rules)
        expect(params.sort()).toEqual([
          ['Root.1.Aa', 'a1'],
          ['Root.1.Bb', 'b1'],
          ['Root.2.Aa', 'a2'],
          ['Root.2.Bb', 'b2'],
        ])

      it 'serializes list members as strings when member rule not present', ->
        rules =
          Root:
            type: 'list'
            flattened: true
            member: type: 'string'
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
            member: type: 'string'
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
            member:
              locationName: 'Name'
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
            locationName: 'Person',
            member:
              locationName: 'Name'
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
          flattened: true
          key: {}
          value: {}
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

    it 'supports queryFlattened key', ->
      rules =
        Attributes:
          type: 'map'
          queryFlattened: true
          key: {}
          value: {}
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

    describe 'non-flat', ->
      it 'adds .entry. to name', ->
        rules =
          Attributes:
            type: 'map'
            key: {}
            value: {}
        data = Attributes: Color: 'red', Size: 'large', Value: 'low'
        params = serialize(data, rules)
        expect(params).toEqual([
          ['Attributes.entry.1.key', 'Color'],
          ['Attributes.entry.1.value', 'red'],
          ['Attributes.entry.2.key', 'Size'],
          ['Attributes.entry.2.value', 'large'],
          ['Attributes.entry.3.key', 'Value'],
          ['Attributes.entry.3.value', 'low'],
        ])

  describe 'maps with member names', ->

    it 'applies member name traits', ->
      rules =
        Attributes:
          type: 'map'
          flattened: true
          key:
            locationName: 'Name'
          value:
            locationName: 'Value'
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

  describe 'timestamps', ->

    it 'serializes timestamp to iso8601 strings by default', ->
      date = new Date(); date.setMilliseconds(0)
      rules = { Date: { type: 'timestamp' } }
      params = serialize({ Date: date }, rules)
      expect(params).toEqual([
        ['Date', helpers.util.date.iso8601(date)],
      ])

    it 'obeys format options in the rules', ->
      date = new Date(); date.setMilliseconds(0)
      rules = { Date: { type: 'timestamp', timestampFormat: 'rfc822' } }
      params = serialize({ Date: date }, rules)
      expect(params).toEqual([
        ['Date', helpers.util.date.rfc822(date)],
      ])
