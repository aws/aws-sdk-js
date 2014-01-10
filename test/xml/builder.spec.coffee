helpers = require('../helpers')
AWS = helpers.AWS
matchXML = helpers.matchXML

describe 'AWS.XML.Builder', ->

  xmlns = 'http://mockservice.com/xmlns'

  toXML = (rules, params, options) ->
    options = {} if (!options)
    options.xmlnamespace = xmlns
    builder = new AWS.XML.Builder('Data', rules, options)
    builder.toXML(params)

  describe 'toXML', ->

    it 'returns an empty element when there are no params', ->
      expect(toXML(null, null)).toEqual("<Data xmlns=\"#{xmlns}\"/>")

    it 'wraps simple structures with location of body', ->
      rules = {Name:{},State:{}}
      params = { Name:'abc', State: 'Enabled' }
      xml = """
      <Data xmlns="#{xmlns}">
        <Name>abc</Name>
        <State>Enabled</State>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'orders xml members by the order they appear in the rules', ->
      rules = {Count:{type:'integer'},State:{}}
      params = { State: 'Disabled', Count: 123 }
      xml = """
      <Data xmlns="#{xmlns}">
        <Count>123</Count>
        <State>Disabled</State>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'can serializes structures into XML', ->
      rules =
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
      rules = {Config:{type:'structure',members:{Foo:{},Bar:{}}}}
      params = { Config: {} }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config/>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'does not serialize missing members', ->
      rules = {Config:{type:'structure',members:{Foo:{},Bar:{}}}}
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
      rules = {Aliases:{type:'list',members:{}}}
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
      rules = {Aliases:{type:'list',members:{name:'Alias'}}}
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
      rules = {Aliases:{type:'list',members:{name:'Alias'}}}
      params = {Aliases:[]}
      xml = """
      <Data xmlns="#{xmlns}">
        <Aliases/>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'serializes lists of structures', ->
      rules =
        Points:
          type: 'list'
          members:
            type: 'structure'
            name: 'Point'
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

  describe 'lists', ->

    it 'serializes lists without a base wrapper', ->
      rules = {Aliases:{type:'list',flattened:true,members:{}}}
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
      rules = {Aliases:{type:'list',flattened:true,name:'Alias',members:{}}}
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
      rules = {Aliases:{type:'list',flattened:true,members:{name:'Alias'}}}
      params = {Aliases:[]}
      xml = """
      <Data xmlns="#{xmlns}"/>
      """
      matchXML(toXML(rules, params), xml)

    it 'serializes lists of structures', ->
      rules =
        Points:
          type: 'list'
          flattened: true
          name: 'Point'
          members:
            type: 'structure'
            name: 'Point'
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

  describe 'numbers', ->

    it 'integers', ->
      rules = {Count:{type:'integer'}}
      params = { Count: 123.0 }
      xml = """
      <Data xmlns="#{xmlns}">
        <Count>123</Count>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'floats', ->
      rules = {Count:{type:'float'}}
      params = { Count: 123.123 }
      xml = """
      <Data xmlns="#{xmlns}">
        <Count>123.123</Count>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'ints and floats formatted as numbers', ->
      rules = {CountI:{type:'integer'},CountF:{type:'float'}}
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
      rules = {Enabled:{type:'boolean'}}
      params = { Enabled: true }
      xml = """
      <Data xmlns="#{xmlns}">
        <Enabled>true</Enabled>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'false', ->
      rules = {Enabled:{type:'booleans'}}
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
      rules = {Expires:{type:'timestamp'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.iso8601(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params, {timestampFormat:'iso8601'}), xml)

    it 'rfc822', ->
      rules = {Expires:{type:'timestamp'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.rfc822(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params, {timestampFormat:'rfc822'}), xml)

    it 'unix timestamp', ->
      rules = {Expires:{type:'timestamp'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.unixTimestamp(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params, {timestampFormat:'unixTimestamp'}), xml)

    it 'follows the forat given on the shape', ->
      rules = {Expires:{type:'timestamp',format:'rfc822'}}
      params = { Expires: time }
      # despite the api configuration will specify unixTimesmap, we expect
      # an rfc822 formatted date based on the format attribute
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.rfc822(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params, {timestampFormat:'unixTimestamp'}), xml)

  describe 'xml attributes', ->
    it 'can serialize xml attributes', ->
      rules =
        Config:
          type: 'structure'
          members:
            Foo:
              type: 'string'
            Attr:
              type: 'string'
              attribute: true
              name: 'attr:name'
      params = { Config: { Foo: 'bar', Attr: 'abc' } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config attr:name="abc"><Foo>bar</Foo></Config>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'xml namespaces', ->
    it 'can apply xml namespaces on structures', ->
      rules =
        Config:
          type: 'structure'
          xmlns:
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
      rules =
        Config:
          type: 'structure'
          xmlns:
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
      rules =
        Config:
          type: 'structure'
          xmlns:
            prefix: 'xsi'
            uri: 'URI'
          members:
            Foo:
              type: 'string'
            Bar:
              type: 'string'
              attribute: true
              name: 'xsi:label'
      params = { Config: { Foo: 'abc', Bar: 'xyz' } }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config xsi:label="xyz" xmlns:xsi="URI"><Foo>abc</Foo></Config>
      </Data>
      """
      matchXML(toXML(rules, params), xml)
