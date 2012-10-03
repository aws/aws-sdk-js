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

    it 'returns empty elements as null', ->
      xml = '<xml><element/></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({element:null})

    it 'converts string elements to properties', ->
      xml = '<xml><foo>abc</foo><bar>xyz</bar></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({foo:'abc', bar:'xyz'})

    it 'converts nested elements into objects', ->
      xml = '<xml><foo><bar>yuck</bar></foo></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({foo:{bar:'yuck'}})

    it 'returns everything as a string (even numbers)', ->
      xml = '<xml><count>123</count></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({count:'123'})

    it 'flattens sibling elements of the same name', ->
      xml = '<xml><foo><bar>1</bar><bar>2</bar></foo></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({foo:{bar:'1'}})

  describe 'lists', ->

    it 'Converts xml lists of strings into arrays of strings', ->
      xml = """
      <xml>
        <items>
          <member>abc</member>
          <member>xyz</member>
        </items>
      </xml>
      """
      rules = {items:{t:'a',m:{}}}
      parse xml, rules, (data) ->
        expect(data).toEqual({items:['abc','xyz']})

    it 'Observes list member names when present', ->
      xml = """
      <xml>
        <items>
          <item>abc</item>
          <item>xyz</item>
        </items>
      </xml>
      """
      rules = {items:{t:'a',m:{n:'item'}}}
      parse xml, rules, (data) ->
        expect(data).toEqual({items:['abc','xyz']})

  describe 'flattened lists', ->

    xml = """
    <xml>
      <person>
        <name>Unknown</name>
        <alias>John Doe</alias>
        <alias>Jane Doe</alias>
      </person>
    </xml>
    """

    it 'flattens siblings of the same name into a single element', ->
      parse xml, {}, (data) ->
        expect(data).toEqual({person:{name:'Unknown',alias:'John Doe'}})

    it 'collects sibling elements of the same name', ->
      rules = {person:{m:{alias:{n:'aka',t:'f',m:{}}}}}
      parse xml, rules, (data) ->
        expect(data).toEqual({person:{name:'Unknown',aka:['John Doe', 'Jane Doe']}})

  describe 'maps', ->

  describe 'booleans', ->

    rules = {enabled:{t:'b'}}

    it 'converts the string "true" in to the boolean value true', ->
      xml = "<xml><enabled>true</enabled></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({enabled:true})

    it 'converts the string "false" in to the boolean value false', ->
      xml = "<xml><enabled>false</enabled></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({enabled:false})

    it 'converts the empty elements into null', ->
      xml = "<xml><enabled/></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({enabled:null})

  describe 'timestamp', ->

  describe 'numbers', ->

    rules = {decimal:{t:'n'}}

    it 'float parses elements types as integer', ->
      xml = "<xml><decimal>123.456</decimal></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({decimal:123.456})

    it 'returns null for empty elements', ->
      xml = "<xml><decimal/></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({decimal:null})

  describe 'integers', ->

    rules = {count:{t:'i'}}

    it 'integer parses elements types as integer', ->
      xml = "<xml><count>123</count></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({count:123})

    it 'returns null for empty elements', ->
      xml = "<xml><count/></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({count:null})

  describe 'renaming elements', ->

    it 'can rename scalar elements', ->
      rules = {alias:{n:'aka'}}
      xml = "<xml><alias>John Doe</alias></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({aka:'John Doe'})

    it 'can rename nested elements', ->
      rules = {person:{m:{alias:{n:'aka'}}}}
      xml = "<xml><person><name>Joe</name><alias>John Doe</alias></person></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({person:{name:'Joe',aka:'John Doe'}})

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

