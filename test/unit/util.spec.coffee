AWS = require('../../lib/aws')

describe 'AWS.util.date', ->
  util = AWS.util.date

  describe 'getDate', ->
    it 'should return current date by default', ->
      expect(util.getDate().getTime()).toBeCloseTo(new Date().getTime(), 5)

    it 'should return date formatted as YYYYMMDDTHHnnssZ', ->
      spyOn(util, 'getDate').andCallFake -> new Date(600000)
      expect(util.getISODateString()).toBe('19700101T001000Z')

describe 'AWS.util.crypto', ->
  util = AWS.util.crypto

  describe 'hmachex', ->
    it 'should return a keyed hash as hex digest', ->
      result = '116a3725a3540067a09e4dba64bb6b3fb27b4d98a1a2e2dbcb8b4cffa73585d5'
      expect(util.hmachex('KEY', 'foo')).toBe(result)

  describe 'sha256hex', ->
    it 'should return data hashed with sha256', ->
      result = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'
      expect(util.sha256hex('foo')).toBe(result)
