# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

helpers = require('../../helpers')
AWS = helpers.AWS
matchXML = helpers.matchXML

describe 'AWS.XML.Builder', ->

  xmlns = 'http://mockservice.com/xmlns'

  toXML = (rules, params, options) ->
    options = {} if (!options)
    options.xmlNamespace = xmlns
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
      rules = {Count:{t:'i'},State:{}}
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
          t: 'o'
          m:
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
      rules = {Config:{t:'o',m:{Foo:{},Bar:{}}}}
      params = { Config: {} }
      xml = """
      <Data xmlns="#{xmlns}">
        <Config/>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'does not serialize missing members', ->
      rules = {Config:{t:'o',m:{Foo:{},Bar:{}}}}
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
      rules = {Aliases:{t:'a',m:{}}}
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
      rules = {Aliases:{t:'a',m:{n:'Alias'}}}
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
      rules = {Aliases:{t:'a',m:{n:'Alias'}}}
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
          t: 'a'
          m:
            t: 'o'
            n: 'Point'
            m:
              X: {t:'n'}
              Y: {t:'n'}
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
      rules = {Aliases:{t:'a',f:1,m:{}}}
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
      rules = {Aliases:{t:'a',f:1,n:'Alias',m:{}}}
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
      rules = {Aliases:{t:'a',f:1,m:{n:'Alias'}}}
      params = {Aliases:[]}
      xml = """
      <Data xmlns="#{xmlns}"/>
      """
      matchXML(toXML(rules, params), xml)

    it 'serializes lists of structures', ->
      rules =
        Points:
          t: 'a'
          f: 1
          n: 'Point'
          m:
            t: 'o'
            n: 'Point'
            m:
              X: {t:'n'}
              Y: {t:'n'}
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
      rules = {Count:{t:'i'}}
      params = { Count: 123.0 }
      xml = """
      <Data xmlns="#{xmlns}">
        <Count>123</Count>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'floats', ->
      rules = {Count:{t:'n'}}
      params = { Count: 123.123 }
      xml = """
      <Data xmlns="#{xmlns}">
        <Count>123.123</Count>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'timestamps', ->

    it 'true', ->
      rules = {Enabled:{t:'b'}}
      params = { Enabled: true }
      xml = """
      <Data xmlns="#{xmlns}">
        <Enabled>true</Enabled>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

    it 'false', ->
      rules = {Enabled:{t:'b'}}
      params = { Enabled: false }
      xml = """
      <Data xmlns="#{xmlns}">
        <Enabled>false</Enabled>
      </Data>
      """
      matchXML(toXML(rules, params), xml)

  describe 'timestamps', ->

    time = new Date()

    it 'iso8601', ->
      rules = {Expires:{t:'t'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.iso8601(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params, {timestampFormat:'iso8601'}), xml)

    it 'rfc822', ->
      rules = {Expires:{t:'t'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.rfc822(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params, {timestampFormat:'rfc822'}), xml)

    it 'unix timestamp', ->
      rules = {Expires:{t:'t'}}
      params = { Expires: time }
      xml = """
      <Data xmlns="#{xmlns}">
        <Expires>#{AWS.util.date.unixTimestamp(time)}</Expires>
      </Data>
      """
      matchXML(toXML(rules, params, {timestampFormat:'unixTimestamp'}), xml)

