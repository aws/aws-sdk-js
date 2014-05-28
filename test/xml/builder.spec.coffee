helpers = require('../helpers')
AWS = helpers.AWS
matchXML = helpers.matchXML

describe 'AWS.XML.Builder', ->

  xmlns = 'http://mockservice.com/xmlns'
  api = null

  beforeEach ->
    api = new AWS.Model.Api metadata: xmlNamespace: xmlns

  toXML = (rules, params) ->
    rules.type = 'structure'
    shape = AWS.Model.Shape.create(rules, api: api)

    builder = new AWS.XML.Builder()
    builder.toXML(params, shape, 'Data')

  describe 'toXML', ->
    it 'wraps simple structures with location of body', ->
      rules = members: { Name:{}, State:{} }
      params = { Name:'abc', State: 'Enabled' }
      xml = """
      <Data xmlns="#{xmlns}">
        <Name>abc</Name>
        <State>Enabled</State>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'ignores null input', ->
      rules = members: { Name:{}, State:{} }
      params = { Name:null, State:undefined }
      xml = ''
      matchXML(toXML(rules, params), xml)

    it 'ignores nested null input', ->
      rules = members: {Struct:{type: 'structure', members: {State:{}}}}
      params = { Struct: { State: null } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Struct/>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'orders xml members by the order they appear in the rules', ->
      rules = xmlOrder: ['Count', 'State'], members: {Count:{type:'integer'},State:{}}
      params = { State: 'Disabled', Count: 123 }
      xml = """
      <Data xmlns="#{xmlns}">
        <Count>123</Count>
        <State>Disabled</State>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'can serializes structures into XML', ->
      rules = members:
        Name: {}
        Details:
          type: 'structure'
          members:
            Abc: {}
            Xyz: {}
      params =
        Details:
          Xyz: 'xyz'
          Abc: 'abc'
        Name: 'john'
      xml = """
      <Data xmlns="#{xmlns}">
        <Name>john</Name>
        <Details>
          <Abc>abc</Abc>
          <Xyz>xyz</Xyz>
        </Details>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'serializes empty structures as empty element', ->
      rules = {members:{Config:{type:'structure',members:{Foo:{},Bar:{}}}}}
      params = { Config: {} }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config/>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'does not serialize missing members', ->
      rules = {members:{Config:{type:'structure',members:{Foo:{},Bar:{}}}}}
      params = { Config: { Foo: 'abc' } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config>
          <Foo>abc</Foo>
        </Config>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'lists', ->

    it 'serializes lists (default member names)', ->
      rules = {members:{Aliases:{type:'list',member:{}}}}
      params = {Aliases:['abc','mno','xyz']}
      xml = """
      <Data xmlns="#{xmlns}">
        <Aliases>
          <member>abc</member>
          <member>mno</member>
          <member>xyz</member>
        </Aliases>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'serializes lists (custom member names)', ->
      rules = {members:{Aliases:{type:'list',member:{locationName:'Alias'}}}}
      params = {Aliases:['abc','mno','xyz']}
      xml = """
      <Data xmlns="#{xmlns}">
        <Aliases>
          <Alias>abc</Alias>
          <Alias>mno</Alias>
          <Alias>xyz</Alias>
        </Aliases>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'includes lists elements even if they have no members', ->
      rules = {members:{Aliases:{type:'list',member:{locationName:'Alias'}}}}
      params = {Aliases:[]}
      xml = """
      <Data xmlns="#{xmlns}">
        <Aliases/>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'serializes lists of structures', ->
      rules = members:
        Points:
          type: 'list'
          member:
            type: 'structure'
            locationName: 'Point'
            members:
              X: {type:'float'}
              Y: {type:'float'}
      params = {Points:[{X:1.2,Y:2.1},{X:3.4,Y:4.3}]}
      xml = """
      <Data xmlns="#{xmlns}">
        <Points>
          <Point>
            <X>1.2</X>
            <Y>2.1</Y>
          </Point>
          <Point>
            <X>3.4</X>
            <Y>4.3</Y>
          </Point>
        </Points>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'flattened lists', ->

    it 'serializes lists without a base wrapper', ->
      rules = {members:{Aliases:{type:'list',flattened:true,member:{}}}}
      params = {Aliases:['abc','mno','xyz']}
      xml = """
      <Data xmlns="#{xmlns}">
        <Aliases>abc</Aliases>
        <Aliases>mno</Aliases>
        <Aliases>xyz</Aliases>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'serializes lists (custom member names)', ->
      rules = members: {Aliases:{type:'list',flattened:true,member:{locationName:'Alias'}}}
      params = {Aliases:['abc','mno','xyz']}
      xml = """
      <Data xmlns="#{xmlns}">
        <Alias>abc</Alias>
        <Alias>mno</Alias>
        <Alias>xyz</Alias>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'omits lists elements when no members are given', ->
      rules = {members:{Aliases:{type:'list',flattened:true,member:{locationName:'Alias'}}}}
      params = {Aliases:[]}
      xml = ''
      matchXML(toXML(rules, params), xml)

    it 'serializes lists of structures', ->
      rules = members:
        Points:
          type: 'list'
          flattened: true
          name: 'Point'
          member:
            type: 'structure'
            locationName: 'Point'
            members:
              X: {type:'float'}
              Y: {type:'float'}
      params = {Points:[{X:1.2,Y:2.1},{X:3.4,Y:4.3}]}
      xml = """
      <Data xmlns="#{xmlns}">
        <Point>
          <X>1.2</X>
          <Y>2.1</Y>
        </Point>
        <Point>
          <X>3.4</X>
          <Y>4.3</Y>
        </Point>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

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
      xml = """
      <Data xmlns="#{xmlns}">
        <Items>
          <entry>
            <key>A</key>
            <value>a</value>
          </entry>
          <entry>
            <key>B</key>
            <value>b</value>
          </entry>
        </Items>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'allows renamed map keys and values', ->
      params = { Items: { A: 'a', B: 'b' } }
      otherRules =
        type: 'structure'
        members:
          Items:
            type: 'map'
            key: type: 'string', locationName: 'MKEY'
            value: type: 'string', locationName: 'MVALUE'
      xml = """
      <Data xmlns="#{xmlns}">
        <Items>
          <entry>
            <MKEY>A</MKEY>
            <MVALUE>a</MVALUE>
          </entry>
          <entry>
            <MKEY>B</MKEY>
            <MVALUE>b</MVALUE>
          </entry>
        </Items>
      </Data>
      """
      matchXML(toXML(otherRules, params), xml)

    it 'ignores null', ->
      expect(toXML(rules, Items: null)).toEqual('')

    it 'ignores undefined', ->
      expect(toXML(rules, Items: undefined)).toEqual('')

  describe 'flattened maps', ->
    rules =
      type: 'structure'
      members:
        Items:
          type: 'map'
          locationName: 'Item'
          flattened: true
          key: type: 'string'
          value: type: 'string'

    it 'translates flattened maps', ->
      params = { Items: { A: 'a', B: 'b' } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Item>
          <key>A</key>
          <value>a</value>
        </Item>
        <Item>
          <key>B</key>
          <value>b</value>
        </Item>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'allows renamed map keys and values', ->
      params = { Items: { A: 'a', B: 'b' } }
      otherRules =
        type: 'structure'
        members:
          Items:
            locationName: 'Item'
            flattened: true
            type: 'map'
            key: type: 'string', locationName: 'MKEY'
            value: type: 'string', locationName: 'MVALUE'
      xml = """
      <Data xmlns="#{xmlns}">
        <Item>
          <MKEY>A</MKEY>
          <MVALUE>a</MVALUE>
        </Item>
        <Item>
          <MKEY>B</MKEY>
          <MVALUE>b</MVALUE>
        </Item>
      </Data>
      """
      matchXML(toXML(otherRules, params), xml)

    it 'ignores null', ->
      expect(toXML(rules, Items: null)).toEqual('')

    it 'ignores undefined', ->
      expect(toXML(rules, Items: undefined)).toEqual('')

  describe 'numbers', ->

    it 'integers', ->
      rules = members: {Count:{type:'integer'}}
      params = { Count: 123.0 }
      xml = """
      <Data xmlns="#{xmlns}">
        <Count>123</Count>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'floats', ->
      rules = members: {Count:{type:'float'}}
      params = { Count: 123.123 }
      xml = """
      <Data xmlns="#{xmlns}">
        <Count>123.123</Count>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'ints and floats formatted as numbers', ->
      rules = members: {CountI:{type:'integer'},CountF:{type:'float'}}
      params = { CountI: '123', CountF: '1.23' }
      xml = """
      <Data xmlns="#{xmlns}">
        <CountI>123</CountI>
        <CountF>1.23</CountF>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'booleans', ->

    it 'true', ->
      rules = members: {Enabled:{type:'boolean'}}
      params = { Enabled: true }
      xml = """
      <Data xmlns="#{xmlns}">
        <Enabled>true</Enabled>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'false', ->
      rules = members: {Enabled:{type:'boolean'}}
      params = { Enabled: false }
      xml = """
      <Data xmlns="#{xmlns}">
        <Enabled>false</Enabled>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'timestamps', ->

    time = new Date()
    time.setMilliseconds(0)

    it 'iso8601', ->
      api.timestampFormat = 'iso8601'
      rules = members: {Expires:{type:'timestamp'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.iso8601(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'rfc822', ->
      api.timestampFormat = 'rfc822'
      rules = members: {Expires:{type:'timestamp'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.rfc822(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'unix timestamp', ->
      api.timestampFormat = 'unixTimestamp'
      rules = members: {Expires:{type:'timestamp'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.unixTimestamp(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'follows the forat given on the shape', ->
      api.timestampFormat = 'unixTimestamp'
      rules = members: {Expires:{type:'timestamp',timestampFormat:'rfc822'}}
      params = { Expires: time }
      # despite the api configuration will specify unixTimesmap, we expect
      # an rfc822 formatted date based on the format attribute
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.rfc822(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'xml attributes', ->
    it 'can serialize xml attributes', ->
      rules = members:
        Config:
          type: 'structure'
          members:
            Foo:
              type: 'string'
            Attr:
              type: 'string'
              xmlAttribute: true
              locationName: 'attr:name'
      params = { Config: { Foo: 'bar', Attr: 'abc' } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config attr:name="abc"><Foo>bar</Foo></Config>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'xml namespaces', ->
    it 'can apply xml namespaces on structures', ->
      rules = members:
        Config:
          type: 'structure'
          xmlNamespace:
            uri: 'URI'
          members:
            Foo:
              type: 'string'
      params = { Config: { Foo: 'bar' } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config xmlns="URI"><Foo>bar</Foo></Config>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'applies namespace prefixes to the xmlns attribute', ->
      rules = members:
        Config:
          type: 'structure'
          xmlNamespace:
            prefix: 'xsi'
            uri: 'URI'
          members:
            Foo:
              type: 'string'
      params = { Config: { Foo: 'bar' } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config xmlns:xsi="URI"><Foo>bar</Foo></Config>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'can apply namespaces to elements that have other attributes', ->
      rules = members:
        Config:
          type: 'structure'
          xmlNamespace:
            prefix: 'xsi'
            uri: 'URI'
          members:
            Foo:
              type: 'string'
            Bar:
              type: 'string'
              xmlAttribute: true
              locationName: 'xsi:label'
      params = { Config: { Foo: 'abc', Bar: 'xyz' } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config xmlns:xsi="URI" xsi:label="xyz"><Foo>abc</Foo></Config>
      </Data>
      """
      matchXML(toXML(rules, params), xml)
