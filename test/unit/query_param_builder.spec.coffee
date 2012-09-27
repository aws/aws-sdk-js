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

  describe 'foo', ->

    it 'can serialize simple strings', ->
      params = serialize({Name1:'abc',Name2:'xyz'}, {Name1:{t:'s'},Name2:{t:'s'}})
      expect(params).toEqual([
        ['Name1', 'abc']
        ['Name2', 'xyz']
      ])

    it 'defaults params to string types', ->
      params = serialize({ ParamName:'abc' }, {ParamName: {}})
      expect(params).toEqual([['ParamName', 'abc']])

