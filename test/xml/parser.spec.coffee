helpers = require('../helpers'); AWS = helpers.AWS

describe 'AWS.XML.Parser', ->

  parse = (xml, rules, callback) ->
    if rules
      shape = AWS.Model.Shape.create(rules, api: {})
    else
      shape = {}
    callback.call(this, new AWS.XML.Parser().parse(xml, shape))

  describe 'default behavior', ->

    rules = null # no rules, rely on default parsing behavior

    it 'returns empty object when string is empty', ->
      parse '', null, (data) -> expect(data).toEqual({})

    it 'returns an empty object from an empty document', ->
      xml = '<xml/>'
      parse xml, rules, (data) ->
        expect(data).toEqual({})

    it 'returns empty elements as empty string', ->
      xml = '<xml><element/></xml>'
      parse xml, rules, (data) ->
        expect(data).toEqual({element:''})

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

    it 'parses attributes from tags', ->
      xml = '<xml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
             <Item xsi:name="name"></Item></xml>'
      rules =
        type: 'structure'
        members:
          Item:
            type: 'structure'
            members:
              Name:
                type: 'string'
                xmlAttribute: true
                locationName: 'xsi:name'
      parse xml, rules, (data) ->
        expect(data).toEqual({Item:{Name: 'name'}})

  describe 'lists', ->

    it 'returns empty lists as []', ->
      xml = '<xml><items/></xml>'
      rules =
        type: 'structure'
        members:
          items:
            type: 'list'
            member:
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
            member:
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
            member: {}
      parse xml, rules, (data) ->
        expect(data).toEqual({items:['abc','xyz']})

    it 'observes list member names when present', ->
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
            member:
              locationName: 'item'
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
            member:
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
            member:
              type: 'structure'
              locationName: 'Person'
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

    it 'collects sibling elements of the same name', ->
      rules =
        type: 'structure'
        members:
          person:
            type: 'structure'
            members:
              name: {}
              aka:
                type: 'list'
                flattened: true
                member:
                  locationName: 'alias'
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
          name:
            type: 'string'
          values:
            type: 'list'
            flattened: true
            member:
              locationName: 'complexValue'
              type: 'structure'
              members:
                a: type: 'integer'
                b: type: 'integer'
      values = {name:'Name',values:[{a:1,b:2},{a:3,b:4}]}
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
          People:
            type: 'list'
            flattened: true
            member:
              type: 'structure'
              locationName: 'Person'
              members:
                Name: {}
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
              value:
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
            Summary:
              type: 'map'
              locationName: 'SummaryMap',
              key:
                locationName: 'Property'
              value:
                type: 'integer'
                locationName: 'Count'
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
          type: 'structure'
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
            Attributes:
              locationName: 'Attribute'
              type: 'map'
              flattened: true
              key:
                locationName: 'AttrName'
              value:
                locationName: 'AttrValue'
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
      error = {}
      try
        parse(xml, rules, ->)
      catch e
        error = e
      expect(error.message).toEqual(message)

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
            aka:
              locationName: 'alias'
      xml = "<xml><alias>John Doe</alias></xml>"
      parse xml, rules, (data) ->
        expect(data).toEqual({aka:'John Doe'})

    it 'can rename nested elements', ->
      rules =
        type: 'structure'
        members:
          person:
            members:
              name: {}
              aka:
                locationName: 'alias'
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
        expect(data.Value.toString()).toEqual('foo')
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
        expect(data.Value.toString()).toEqual('foo')

  describe 'elements with XML namespaces', ->
    it 'strips the xmlns element', ->
      rules =
        type: 'structure'
        members:
          List:
            type: 'list'
            member:
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
      error = {}
      try
        new AWS.XML.Parser().parse(xml, rules)
      catch e
        error = e
      expect(error.code).toEqual('XMLParserError')

