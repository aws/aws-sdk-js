helpers = require('../helpers'); AWS = helpers.AWS

describe 'AWS.XMLParser', ->

  parse = (xml, rules, callback) ->
    new AWS.XMLParser(rules).parse(xml, callback)

  it 'returns an empty object from an empty document', ->
    xml = '<xml/>'
    rules = {}
    parse xml, rules, (data) ->
      expect(data).toEqual({})

