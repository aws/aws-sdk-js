helpers = require('../helpers'); AWS = helpers.AWS

describe 'AWS.XMLParser', ->

  parse = (xml, rules, callback) ->
    new AWS.XMLParser(rules).parse(xml, callback)

  describe 'default behavior', ->

    rules = {} # no rules, rely on default parsing behavior

    it 'returns an empty object from an empty document', ->
      xml = '<xml/>'
      parse xml, rules, (data) ->
        expect(data).toEqual({})

    it 'converts string elements to properties', ->
      xml = '<xml><foo>abc</foo><bar>xyz</bar></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({foo:'abc', bar:'xyz'})

    it 'converts nested elements into objects', ->
      xml = '<xml><foo><bar>yuck</bar></foo></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({foo:{bar:'yuck'}})

    # to create an array, rules MUST define element as a list
    it 'flattens lists into a scalars', ->
      xml = '<xml><foo><bar>1</bar><bar>2</bar></foo></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({foo:{bar:'1'}})

  describe 'parsing errors', ->

    it 'throws an error when unable to parse the xml', ->
      xml = 'asdf'
      rules = {}
      message = """
      Non-whitespace before first tag.
      Line: 0
      Column: 1
      Char: a
      """
      error = { code: 'AWS.XMLParser.Error', message: message }
      expect(-> new AWS.XMLParser(rules).parse(xml)).toThrow(error)

