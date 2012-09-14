AWS = require('../../lib/core')

describe 'AWS.JsonResponseParser', ->

  resp = (options) ->
    r = new AWS.HttpResponse()
    r.statusCode = options.statusCode
    if (options.headers)
      r.headers = options.headers
    else
      r.headers = {}
    if (options.body)
      r.body = options.body
    return r

  parse = (r) ->
    parser = new AWS.JsonResponseParser
    return parser.parse(r)

  describe 'parse', ->

    it 'returns an empty object when the body is null', ->
      expect(parse(resp({ body: null }))).toEqual({})

    it 'returns an empty object when the body is an empty string', ->
      expect(parse(resp({ body: '' }))).toEqual({})

    it 'returns the parsed version of the JSON body', ->
      expect(parse(resp({ body: '{"a":123}' }))).toEqual({a:123})

