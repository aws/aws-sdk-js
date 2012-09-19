AWS = require('../../lib/core')

describe 'AWS.util.date', ->
  util = AWS.util.date

  describe 'getDate', ->
    it 'should return current date by default', ->
      oldDate = Date; now = {}
      `Date = jasmine.createSpy().andReturn(now);`
      expect(util.getDate()).toBe(now)
      `Date = oldDate;`

  describe 'getISODateString', ->
    it 'should return date formatted as YYYYMMDDTHHnnssZ', ->
      spyOn(util, 'getDate').andCallFake -> new Date(600000)
      expect(util.getISODateString()).toEqual('19700101T001000Z')

    it 'should allow date parameter', ->
      expect(util.getISODateString(new Date(660000))).toEqual('19700101T001100Z')

  describe 'getUTCDateString', ->
    it 'should return date formatted as YYYYMMDDTHHnnssZ', ->
      spyOn(util, 'getDate').andCallFake -> new Date(600000)
      expect(util.getUTCDateString()).toEqual('Thu, 01 Jan 1970 00:10:00 GMT')

    it 'should allow date parameter', ->
      expect(util.getUTCDateString(new Date(660000))).toEqual('Thu, 01 Jan 1970 00:11:00 GMT')


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
