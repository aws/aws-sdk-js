AWS = require('../../lib/aws')

describe 'AWS.util.date', ->
  util = AWS.util.date

  describe 'getDate', ->
    it 'should return current date by default', ->
      expect(util.getDate().getTime()).toBeCloseTo(new Date().getTime(), 5)

  describe 'getISODateString', ->
    it 'should return date formatted as YYYYMMDDTHHnnssZ', ->
      spyOn(util, 'getDate').andCallFake -> new Date(600000)
      expect(util.getISODateString()).toEqual('19700101T001000Z')

    it 'should allow date parameter', ->
      expect(util.getISODateString(new Date(600000))).toEqual('19700101T001000Z')

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
      expected = util.hmachex(key, input)
      expect(expected).toEqual(result)

  describe 'sha256', ->
    input = 'foo'
    result = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'

    it 'should return binary data hashed with sha256', ->
      expected = util.sha256(input)
      expect(util.toHex(expected)).toEqual(result)

    it 'should return hex data hashed with sha256', ->
      expected = util.sha256hex(input)
      expect(expected).toEqual(result)
