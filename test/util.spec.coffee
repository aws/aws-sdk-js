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

AWS = require('../lib/core')

describe 'uriEscape', ->

  e = AWS.util.uriEscape

  it 'escapes spaces as %20', ->
    expect(e('a b')).toEqual('a%20b')

  it 'escapes + as %2B', ->
    expect(e('a+b')).toEqual('a%2Bb')

  it 'escapes / as %2F', ->
    expect(e('a/b')).toEqual('a%2Fb')

  it 'escapes \' as %27', ->
    expect(e('a\'b')).toEqual('a%27b')

  it 'escapes * as %2A', ->
    expect(e('a*b')).toEqual('a%2Ab')

  it 'does not escape ~', ->
    expect(e('a~b')).toEqual('a~b')

  it 'encodes utf8 characters', ->
    expect(e('ёŝ')).toEqual('%D1%91%C5%9D')

describe 'uriEscapePath', ->

  e = AWS.util.uriEscapePath

  it 'does not escape forward slashes', ->
    s = 'a&b/x=y/1+2/m?n'
    expect(e(s)).toEqual('a%26b/x%3Dy/1%2B2/m%3Fn')

  it 'leaves leading and trailing forward slashes in place', ->
    s = '/ab cd/'
    expect(e(s)).toEqual('/ab%20cd/')

describe 'AWS.util.queryParamsToString', ->
  qpts = AWS.util.queryParamsToString

  it 'sorts query parameters before stringifying', ->
    expect(qpts(c: '1', b: '2', a: '3')).toEqual('a=3&b=2&c=1')

  it 'handles empty values', ->
    expect(qpts(a: '', b: '2')).toEqual('a=&b=2')

  it 'handles null/undefined values', ->
    expect(qpts(a: undefined, b: null)).toEqual('a&b')

  it 'calls uriEscape on each name and value', ->
    spy = spyOn(AWS.util, 'uriEscape').andCallThrough()
    qpts(c: '1', b: '2', a: '3')
    expect(spy.calls.length).toEqual(6)

  it 'handles values as lists', ->
    expect(qpts(a: ['1', '2', '3'], b: '4')).toEqual('a=1&a=2&a=3&b=4')

  it 'escapes list values', ->
    expect(qpts(a: ['+', '&', '*'], b: '4')).toEqual('a=%26&a=%2A&a=%2B&b=4')

describe 'AWS.util.date', ->

  util = AWS.util.date

  describe 'getDate', ->
    it 'should return current date by default', ->
      oldDate = Date; now = {}
      `Date = jasmine.createSpy().andReturn(now);`
      expect(util.getDate()).toBe(now)
      `Date = oldDate;`

  describe 'iso8601', ->
    it 'should return date formatted as YYYYMMDDTHHnnssZ', ->
      spyOn(util, 'getDate').andCallFake -> new Date(600000)
      expect(util.iso8601()).toEqual('1970-01-01T00:10:00.000Z')

    it 'should allow date parameter', ->
      expect(util.iso8601(new Date(660000))).toEqual('1970-01-01T00:11:00.000Z')

  describe 'rfc822', ->
    it 'should return date formatted as YYYYMMDDTHHnnssZ', ->
      spyOn(util, 'getDate').andCallFake -> new Date(600000)
      expect(util.rfc822()).toEqual('Thu, 01 Jan 1970 00:10:00 GMT')

    it 'should allow date parameter', ->
      expect(util.rfc822(new Date(660000))).toEqual('Thu, 01 Jan 1970 00:11:00 GMT')

  describe 'unixTimestamp', ->
    it 'should return date formatted as unix timestamp', ->
      spyOn(util, 'getDate').andCallFake -> new Date(600000)
      expect(util.unixTimestamp()).toEqual(600)

    it 'should allow date parameter', ->
      expect(util.unixTimestamp(new Date(660000))).toEqual(660)

    it 'should return date formatted as unix timestamp with milliseconds', ->
      spyOn(util, 'getDate').andCallFake -> new Date(600123)
      expect(util.unixTimestamp()).toEqual(600.123)

describe 'AWS.util.string', ->
  len = AWS.util.string.byteLength

  describe 'byteLength', ->
    it 'handles null/undefined objects', ->
      expect(len(undefined)).toEqual(0)
      expect(len(null)).toEqual(0)

    it 'handles buffer input', ->
      expect(len(new Buffer('∂ƒ©∆'))).toEqual(10)

    it 'handles string input', ->
      expect(len('')).toEqual(0)
      expect(len('∂ƒ©∆')).toEqual(10)

    it 'handles file object input (path property)', ->
      fs = require('fs')
      file = fs.createReadStream(__filename)
      fileLen = fs.lstatSync(file.path).size
      expect(len(file)).toEqual(fileLen)
      expect(len(path: __filename)).toEqual(fileLen)

    it 'fails if input is not a string, buffer, or file', ->
      err = null
      try
        len(3.14)
      catch e
        err = e

      expect(err.message).toEqual('Cannot determine length of 3.14')
      expect(err.object).toBe(3.14)

    it 'ignores path property unless it is a string', ->
      object = {}
      err = null
      try
        len(object)
      catch e
        err = e

      expect(err.message).toMatch(/Cannot determine length of /)
      expect(err.object).toBe(object)

describe 'AWS.util.buffer', ->
  describe 'concat', ->
    it 'concatenates a list of buffers', ->
      buffer1 = new Buffer('abcdefg')
      buffer2 = new Buffer('hijklmn')
      buffer3 = AWS.util.buffer.concat([buffer1, buffer2])
      expect(buffer3.length).toEqual(14)
      expect(buffer3.toString()).toEqual('abcdefghijklmn')

describe 'AWS.util.crypto', ->

  util = AWS.util.crypto

  describe 'crc32', ->
    it 'returns the correct CRC32 value for binary data', ->
      buffer = new Buffer(4433);
      for i in [0...buffer.length]
        buffer[i] = i % 256;
      expect(util.crc32(buffer)).toEqual(899332870)

    it 'handles String values', ->
      string = '{"ConsumedCapacityUnits":1.0}'
      expect(util.crc32(string)).toEqual(2614884069)

  describe 'toHex', ->
    it 'should convert binary data to hex string', ->
      expect(util.toHex('ABC')).toEqual('414243')

  describe 'hmac', ->
    input = 'foo'
    key = 'KEY'
    result = '116a3725a3540067a09e4dba64bb6b3fb27b4d98a1a2e2dbcb8b4cffa73585d5'

    it 'should return a keyed hash as a binary digest', ->
      expected = util.hmac(key, input)
      expect(util.toHex(expected)).toEqual(result)

    it 'should return a keyed hash as hex digest', ->
      expected = util.hmac(key, input, 'hex')
      expect(expected).toEqual(result)

    it 'accepts the crypto function as an argument', ->
      r = util.hmac('secret', 'the quick brown fox', 'base64', 'sha1')
      expect(r).toEqual('z1BzGT+uG/2qGzE1UHb5m/skn1E=')

    it 'accepts UTF-8 input for string', ->
      r = util.hmac('foo', 'å∆ç∂', 'hex')
      expect(r).toEqual('b2ce6b3feec8a02f3bb2e3f32f7bf0daee0f14e79631707a266fddcf404edded')

  describe 'sha256', ->
    input = 'foo'
    result = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'

    it 'should return binary data hashed with sha256', ->
      expected = util.sha256(input)
      expect(util.toHex(expected)).toEqual(result)

    it 'should return hex data hashed with sha256', ->
      expected = util.sha256(input, 'hex')
      expect(expected).toEqual(result)

    it 'accepts UTF-8 input', ->
      r = util.sha256('ß∂ƒ©', 'hex')
      expect(r).toEqual('3c01ddd413d2cacac59a255e4aade0d9058a8a9ea8b2dfe5bb2dc4ed132b4139')

  describe 'md5', ->
    input = 'foo'
    result = 'acbd18db4cc2f85cedef654fccc4a4d8'

    it 'should return binary data hashed with md5', ->
      expected = util.md5(input)
      expect(util.toHex(expected)).toEqual(result)

    it 'should return hex data hashed with md5', ->
      expected = util.md5(input, 'hex')
      expect(expected).toEqual(result)

    it 'accepts UTF-8 input', ->
      r = util.md5('ￃ', 'hex')
      expect(r).toEqual('b497dbbe19fb58cddaeef11f9d40804c')

describe 'AWS.util.each', ->
  it 'should iterate over a hash', ->
    parts = []
    AWS.util.each {a: 1, b: 2, c: 3}, (key, item) ->
      parts.push([key + '_', item + 1])
    expect(parts).toEqual([['a_', 2], ['b_', 3], ['c_', 4]])

  it 'should iterate over an array', ->
    total = 0
    AWS.util.each [1, 2, 3], (idx, item) ->
      total += item
    expect(total).toEqual(6)

  it 'should ignore inherited properties', ->
    objCtor = -> this.a = 1; this.b = 2; this.c = 3
    objCtor.prototype = d: 4, e: 5, f: 6
    obj = new objCtor()
    parts = []
    AWS.util.each obj, (key, item) ->
      parts.push([key + '_', item + 1])
    expect(parts).toEqual([['a_', 2], ['b_', 3], ['c_', 4]])

  it 'callback should not change "this" scope', ->
    new ->
      this.class = 'MyClass'
      self = this
      AWS.util.each.apply this, [[1, 2, 3], ->
        expect(this).toBe(self)]

  it 'can abort out of loop', ->
    string = ''
    AWS.util.each {a: 1, b: 2, c: 3}, (key, item) ->
      return AWS.util.abort if item == 2
      string += key

    expect(string).toEqual('a')

describe 'AWS.util.arrayEach', ->
  it 'should iterate over arrays', ->
    total = 0
    AWS.util.arrayEach [1, 2, 3], (item) ->
      total += item
    expect(total).toEqual(6)

  it 'should pass index as second parameter', ->
    lastIndex = null
    AWS.util.arrayEach [1, 2, 3], (item, idx) ->
      expect(typeof(idx)).toEqual('number')
      expect(lastIndex).toEqual(idx - 1) if lastIndex != null
      lastIndex = idx

  it 'can abort out of loop', ->
    total = 0
    AWS.util.arrayEach [1, 2, 3], (item, idx) ->
      return AWS.util.abort if idx == 1
      total += item

    expect(total).toEqual(1)

describe 'AWS.util.copy', ->
  it 'does not copy null or undefined', ->
    expect(AWS.util.copy(null)).toEqual(null)
    expect(AWS.util.copy(undefined)).toEqual(undefined)

  it 'should perform a shallow copy of an object', ->
    obj = a: 1, b: 2, c: 3
    copied = AWS.util.copy(obj)
    expect(copied).not.toBe(obj)
    expect(copied).toEqual(a: 1, b: 2, c: 3)

  it 'should copy inherited properties', ->
    objCtor = -> this.a = 1; this.b = 2; this.c = 3
    objCtor.prototype = d: 4
    obj = new objCtor()
    copied = AWS.util.copy(obj)
    expect(copied).not.toBe(obj)
    expect(copied).toEqual(a: 1, b: 2, c: 3, d: 4)

describe 'AWS.util.merge', ->
  it 'should merge an object into another and return new object', ->
    obj = a: 1, b: 2, c: 3
    newObj = AWS.util.merge(obj, {d: 4, e: 5, a: 6})
    expect(newObj).toEqual(a: 6, b: 2, c: 3, d: 4, e: 5)
    expect(obj).toEqual(a: 1, b: 2, c: 3)

describe 'AWS.util.update', ->
  it 'should merge an object into another', ->
    obj = a: 1, b: 2, c: 3
    AWS.util.update(obj, {d: 4, e: 5, a: 6})
    expect(obj).toEqual(a: 6, b: 2, c: 3, d: 4, e: 5)

  it 'should return the merged object', ->
    obj = a: 1, b: 2
    expect(AWS.util.update(obj, c: 3)).toBe(obj)

describe 'AWS.util.inherit', ->
  it 'should inherit an object and append features', ->
    Base = (value) ->
      this.defaultValue = value

    Base.prototype =
      main: -> 'main'
      other: 'other'

    Derived = AWS.util.inherit Base,
      constructor: (value) ->
        Base.apply(this, [value + 5])

      main: -> 'notMain'
      foo: -> 'bar'

    derived = new Derived(5)
    expect(derived instanceof Base).toBeTruthy()
    expect(derived.constructor).toBe(Derived)
    expect(derived.main()).toEqual('notMain')
    expect(derived.other).toEqual('other')
    expect(derived.defaultValue).toEqual(10)
    expect(derived.foo()).toEqual('bar')

  it 'should create pass-through constructor if not defined', ->
    Base = AWS.util.inherit
      constructor: createSpy()

    Derived = AWS.util.inherit Base,
      other: true

    derived = new Derived(1, 2, 'three')
    expect(derived.other).toEqual(true)
    expect(Base.prototype.constructor).toHaveBeenCalledWith(1, 2, 'three')

describe 'AWS.util.mixin', ->
  it 'copies properties to other object prototype', ->
    obj = prototype: a: 1, b: 2
    AWS.util.mixin(obj, prototype: b: 3, c: 4)
    expect(obj.prototype).toEqual(a: 1, b: 3, c: 4)

  it 'resets prototype constructor', ->
    obj = prototype: constructor: 'PASS'
    AWS.util.mixin(obj, prototype: constructor: 'FAIL')
    expect(obj.prototype).toEqual(constructor: 'PASS')

  it 'returns original klass', ->
    obj = prototype: foo: 1
    out = AWS.util.mixin(obj, prototype: bar: 2)
    expect(out).toBe(obj)

describe 'AWS.util.isType', ->
  it 'accepts function for type', ->
    expect(AWS.util.isType([], Array)).toEqual(true)

  it 'accepts string for type', ->
    expect(AWS.util.isType([], 'Array')).toEqual(true)

describe 'AWS.util.isEmpty', ->

  it 'returns true when passed an empty object literal', ->
    expect(AWS.util.isEmpty({})).toEqual(true)

  it 'returns true when passed a non-empty object literal', ->
    expect(AWS.util.isEmpty({a:1})).toEqual(false)

describe 'AWS.util.error', ->
  it 'returns the created error object with extra options', ->
    origError = new Error()
    err = AWS.util.error(origError, message: 'msg', code: 'code')
    expect(err).toBe(origError)
    expect(err.message).toEqual('msg')
    expect(err.code).toEqual('code')

  it 'accepts missing options', ->
    origError = new Error('ERROR')
    err = AWS.util.error(origError)
    expect(err).toBe(origError)
    expect(err.message).toEqual('ERROR')

  it 'maintains the original error message property', ->
    origError = new Error('ERROR')
    err = AWS.util.error(origError, {code: 'code'})
    expect(err).toBe(origError)
    expect(err.message).toEqual('ERROR')
    expect(err.code).toEqual('code')

describe 'AWS.util.base64', ->

  base64 = AWS.util.base64

  describe 'encode', ->
    it 'encodes the given string', ->
      expect(base64.encode('foo')).toEqual('Zm9v')
      expect(base64.encode('ёŝ')).toEqual('0ZHFnQ==')

  describe 'decode', ->
    it 'decodes the given string', ->
      expect(base64.decode('Zm9v')).toEqual('foo')
      expect(base64.decode('0ZHFnQ==')).toEqual('ёŝ')

describe 'AWS.util.jamespath', ->
  query = AWS.util.jamespath.query
  find = AWS.util.jamespath.find

  describe 'query', ->
    it 'can find a toplevel element of a data structure', ->
      expect(query('foo', foo: 'value')).toEqual(['value'])

    it 'can find a nested element of a data structure', ->
      expect(query('foo.bar.baz', foo: bar: baz: 'value')).toEqual(['value'])

    it 'can index an element (positive and negative indexes)', ->
      data = foo: bar: [{baz: 'wrong'}, {baz: 'right'}, {baz: 'wrong'}]
      expect(query('foo.bar[1].baz', data)).toEqual(['right'])
      expect(query('foo.bar[-2].baz', data)).toEqual(['right'])

    it 'can index an element with wildcard', ->
      data = foo: bar: [{baz: 'wrong'}, {baz: 'right'}, {baz: 'wrong'}]
      expect(query('foo.bar[*].baz', data)).toEqual(['wrong', 'right', 'wrong'])

    it 'returns empty array if element is not found', ->
      data = foo: notBar: baz: 'value'
      expect(query('foo.bar.baz', data)).toEqual([])

    it 'allows multiple expressions to be ORed', ->
      data = foo: {key1: 'wrong'}, bar: {key2: 'right'}
      expect(query('foo.key2 or bar.key2', data)).toEqual(['right'])

    it 'returns multiple matches if a wildcard is used', ->
      data = foo:
        child1: bar: 'value1'
        child2: bar: 'value2'
        child3: bar: 'value3'
      expect(query('foo.*.bar', data)).toEqual(['value1', 'value2', 'value3'])

    it 'can support wildcard on both token and index', ->
      data = foo:
        child1: ['value1', 'value2']
        child2: ['value3']
        child4: 'notarray'
      expect(query('foo.*[*]', data)).toEqual(['value1', 'value2', 'value3'])

  describe 'find', ->
    it 'returns the first match of query', ->
      expect(find('foo.*', foo: bar: 1, baz: 2)).toEqual(1)

    it 'returns null if no match is found', ->
      expect(find('invalid.*', foo: bar: 1, baz: 2)).toEqual(null)
