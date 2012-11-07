# Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

AWS = require('../../lib/core')

describe 'uriEscape', ->

  e = AWS.util.uriEscape

  it 'escapes spaces as %20', ->
    expect(e('a b')).toEqual('a%20b')

  it 'escapes + as %2B', ->
    expect(e('a+b')).toEqual('a%2Bb')

  it 'escapes / as %2F', ->
    expect(e('a/b')).toEqual('a%2Fb')

  it 'does not escape ~', ->
    expect(e('a~b')).toEqual('a~b')

describe 'uriEscapePath', ->

  e = AWS.util.uriEscapePath

  it 'does not escape forward slashes', ->
    s = 'a&b/x=y/1+2/m?n'
    expect(e(s)).toEqual('a%26b/x%3Dy/1%2B2/m%3Fn')

  it 'leaves leading and trailing forward slashes in place', ->
    s = '/ab cd/'
    expect(e(s)).toEqual('/ab%20cd/')

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


describe 'AWS.util.crypto', ->

  util = AWS.util.crypto

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

  describe 'sha256', ->
    input = 'foo'
    result = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'

    it 'should return binary data hashed with sha256', ->
      expected = util.sha256(input)
      expect(util.toHex(expected)).toEqual(result)

    it 'should return hex data hashed with sha256', ->
      expected = util.sha256(input, 'hex')
      expect(expected).toEqual(result)

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
