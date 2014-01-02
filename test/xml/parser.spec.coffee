helpers = require('../helpers'); AWS = helpers.AWS

describe 'AWS.XML.Parser', ->

  parse = (xml, rules, callback) ->
    callback.call(this, new AWS.XML.Parser(rules).parse(xml))

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

    it 'ignores xmlns on the root element', ->
      xml = '<xml xmlns="http://foo.bar.com"><Abc>xyz</Abc></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({Abc:'xyz'})

  describe 'structures', ->

    it 'returns empty objects as {}', ->
      xml = '<xml><Item/></xml>'
      rules =
        type: 'structure'
        members:
          Item:
            type: 'structure'
            members:
              Name:
                type: 'string'
      parse xml, rules, (data) ->
        expect(data).toEqual({Item:{}})

  describe 'lists', ->

    it 'returns empty lists as []', ->
      xml = '<xml><items/></xml>'
      rules =
        type: 'structure'
        members:
          items:
            type: 'list'
            members:
              type: 'string'
      parse xml, rules, (data) ->
        expect(data).toEqual({items:[]})

    it 'returns missing lists as []', ->
      xml = '<xml></xml>'
      rules =
        type: 'structure'
        members:
          items:
            type: 'list'
            members:
              type: 'string'
      parse xml, rules, (data) ->
        expect(data).toEqual({items:[]})

    it 'Converts xml lists of strings into arrays of strings', ->
      xml = """
      <xml>
        <items>
          <member>abc</member>
          <member>xyz</member>
        </items>
      </xml>
      """
      rules =
        type: 'structure'
        members:
          items:
            type: 'list'
            members: {}
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
      rules =
        type: 'structure'
        members:
          items:
            type: 'list'
            members:
              name: 'item'
      parse xml, rules, (data) ->
        expect(data).toEqual({items:['abc','xyz']})

    it 'can parse lists of strucures', ->
      xml = """
      <xml>
        <People>
          <member><Name>abc</Name></member>>
          <member><Name>xyz</Name></member>>
        </People>
      </xml>
      """
      rules =
        type: 'structure'
        members:
          People:
            type: 'list'
            members:
              type: 'structure'
              members:
                Name:
                  type: 'string'
      parse xml, rules, (data) ->
        expect(data).toEqual({People:[{Name:'abc'},{Name:'xyz'}]})

    it 'can parse lists of strucures with renames', ->
      xml = """
      <xml>
        <People>
          <Person><Name>abc</Name></Person>>
          <Person><Name>xyz</Name></Person>>
        </People>
      </xml>
      """
      rules =
        type: 'structure'
        members:
          People:
            type: 'list'
            members:
              type: 'structure'
              name: 'Person'
              members:
                Name:
                  type: 'string'
      parse xml, rules, (data) ->
        expect(data).toEqual({People:[{Name:'abc'},{Name:'xyz'}]})

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
      rules =
        type: 'structure'
        members:
          person:
            members:
              alias:
                name: 'aka'
                type: 'list'
                flattened: true
                members: {}
      parse xml, rules, (data) ->
        expect(data).toEqual({person:{name:'Unknown',aka:['John Doe', 'Jane Doe']}})

    it 'flattened lists can be composed of complex obects', ->
      xml = """
      <xml>
        <name>Name</name>
        <complexValue>
          <a>1</a>
          <b>2</b>
        </complexValue>
        <complexValue>
          <a>3</a>
          <b>4</b>
        </complexValue>
      </xml>
      """
      rules =
        type: 'structure'
        members:
          complexValue:
            type: 'list'
            flattened: true
            name: 'values'
            members:
              type: 'structure'
              members: {}
      values = {name:'Name',values:[{a:'1',b:'2'},{a:'3',b:'4'}]}
      parse xml, rules, (data) ->
        expect(data).toEqual(values)

    it 'can parse flattened lists of complex objects', ->
      xml = """
      <xml>
        <Count>2</Count>
        <Person><Name>abc</Name></Person>
        <Person><Name>xyz</Name></Person>
      </xml>
      """
      rules =
        type: 'structure'
        members:
          Count:
            type: 'integer'
          Person:
            type: 'list'
            flattened: true
            name: 'People'
            members:
              type: 'structure'
              name: 'Person'
      parse xml, rules, (data) ->
        expect(data).toEqual({Count:2,People:[{Name:'abc'},{Name:'xyz'}]})

  describe 'maps', ->

    describe 'non-flattened', ->
      it 'expects entry, key, and value elements by default', ->
        # example from IAM GetAccountSummary (output)
        xml = """
        <xml>
          <SummaryMap>
            <entry>
              <key>Groups</key>
              <value>31</value>
            </entry>
            <entry>
              <key>GroupsQuota</key>
              <value>50</value>
            </entry>
            <entry>
              <key>UsersQuota</key>
              <value>150</value>
            </entry>
          </SummaryMap>
        </xml>
        """
        rules =
          type: 'structure'
          members:
            SummaryMap:
              type: 'map'
              members:
                type: 'integer'
        parse xml, rules, (data) ->
          expect(data).toEqual(SummaryMap:{Groups:31,GroupsQuota:50,UsersQuota:150})

      it 'can use alternate names for key and value elements', ->
        # using Property/Count instead of key/value, also applied a name
        # trait to the Summary map to rename it
        xml = """
        <xml>
          <SummaryMap>
            <entry>
              <Property>Groups</Property>
              <Count>31</Count>
            </entry>
            <entry>
              <Property>GroupsQuota</Property>
              <Count>50</Count>
            </entry>
            <entry>
              <Property>UsersQuota</Property>
              <Count>150</Count>
            </entry>
          </SummaryMap>
        </xml>
        """
        rules =
          type: 'structure'
          members:
            SummaryMap:
              type: 'map'
              name: 'Summary',
              keys:
                name: 'Property'
              members:
                type: 'integer'
                name: 'Count'
        parse xml, rules, (data) ->
          expect(data).toEqual(Summary:{Groups:31,GroupsQuota:50,UsersQuota:150})

      describe 'flattened', ->
        it 'expects key and value elements by default', ->
          xml = """
          <xml>
            <Attributes>
              <key>color</key>
              <value>red</value>
            </Attributes>
            <Attributes>
              <key>size</key>
              <value>large</value>
            </Attributes>
          </xml>
          """
          rules =
            type: 'strucure'
            members:
              Attributes:
                type: 'map'
                flattened: true
          parse xml, rules, (data) ->
            expect(data).toEqual({Attributes:{color:'red',size:'large'}})

        it 'can use alternate names for key and value elements', ->
          # using AttrName/AttrValue instead of key/value, also applied a name
          # trait to the Attributes map
          xml = """
          <xml>
            <Attribute>
              <AttrName>age</AttrName>
              <AttrValue>35</AttrValue>
            </Attribute>
            <Attribute>
              <AttrName>height</AttrName>
              <AttrValue>72</AttrValue>
            </Attribute>
          </xml>
          """
          rules =
            type: 'structure'
            members:
              Attribute:
                name: 'Attributes'
                type: 'map'
                flattened: true
                keys:
                  name: 'AttrName'
                members:
                  name: 'AttrValue'
                  type: 'integer'
          parse xml, rules, (data) ->
            expect(data).toEqual({Attributes:{age:35,height:72}})

  describe 'booleans', ->

    rules =
      type: 'structure'
      members:
        enabled:
          type: 'boolean'

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

    rules =
      type: 'structure'
      members:
        CreatedAt:
          type: 'timestamp'

    it 'returns an empty element as null', ->
      xml = "<xml><CreatedAt/></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({CreatedAt:null})

    it 'understands unix timestamps', ->
      timestamp = 1349908100
      date = new Date(timestamp * 1000)
      xml = "<xml><CreatedAt>#{timestamp}</CreatedAt></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({CreatedAt:date})

    it 'understands basic iso8601 strings', ->
      timestamp = '2012-10-10T15:47:10.001Z'
      date = new Date(timestamp)
      xml = "<xml><CreatedAt>#{timestamp}</CreatedAt></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({CreatedAt:date})

    it 'understands basic rfc822 strings', ->
      timestamp = 'Wed, 10 Oct 2012 15:59:55 UTC'
      date = new Date(timestamp)
      xml = "<xml><CreatedAt>#{timestamp}</CreatedAt></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({CreatedAt:date})

    it 'throws an error when unable to determine the format', ->
      timestamp = 'bad-date-format'
      xml = "<xml><CreatedAt>#{timestamp}</CreatedAt></xml>"
      message = 'unhandled timestamp format: ' + timestamp
      error = { code: 'AWS.XML.Parser.Error', message: message }
      expect(-> new AWS.XML.Parser(rules).parse(xml)).toThrow(error)

  describe 'numbers', ->

    rules =
      type: 'structure'
      members:
        decimal:
          type: 'float'

    it 'float parses elements types as integer', ->
      xml = "<xml><decimal>123.456</decimal></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({decimal:123.456})

    it 'returns null for empty elements', ->
      xml = "<xml><decimal/></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({decimal:null})

  describe 'integers', ->

    rules =
      type: 'structure'
      members:
        count:
          type: 'integer'

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
      rules =
        type: 'structure'
        members:
            alias:
              name: 'aka'
      xml = "<xml><alias>John Doe</alias></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({aka:'John Doe'})

    it 'can rename nested elements', ->
      rules =
        type: 'structure'
        members:
          person:
            members:
              alias:
                name: 'aka'
      xml = "<xml><person><name>Joe</name><alias>John Doe</alias></person></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({person:{name:'Joe',aka:'John Doe'}})

  describe 'base64 encoded strings', ->
    it 'base64 decodes string elements with encoding="base64"', ->
      rules =
        type: 'structure'
        members:
          Value:
            type: 'string'
      xml = """
      <xml>
        <Value encoding="base64">Zm9v</Value>
      </xml>
      """
      parse xml, rules, (data) ->
        expect(data).toEqual(Value:'foo')
      rules =
        type: 'structure'
        members:
          Value: {}
      xml = """
      <xml>
        <Value encoding="base64">Zm9v</Value>
      </xml>
      """
      parse xml, rules, (data) ->
        expect(data).toEqual(Value:'foo')

  describe 'elements with XML namespaces', ->
    it 'strips the xmlns element', ->
      rules =
        type: 'structure'
        members:
          List:
            type: 'list'
            members:
              type: 'structure'
              members:
                Attr1: {}
                Attr2:
                  type: 'structure'
                  members:
                    Foo: {}
      xml = """
      <xml xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <List>
          <member>
            <Attr1 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser">abc</Attr1>
            <Attr2 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><Foo>bar</Foo></Attr2>
          </member>
        </List>
      </xml>
      """
      parse xml, rules, (data) ->
        expect(data).toEqual({List:[{Attr1:'abc',Attr2:{Foo:'bar'}}]})

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
      error = { code: 'AWS.XML.Parser.Error', message: message }
      expect(-> new AWS.XML.Parser(rules).parse(xml)).toThrow(error)

