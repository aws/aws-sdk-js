helpers = require('./helpers')
AWS = helpers.AWS
Buffer = AWS.util.Buffer

describe 'uriEscape', ->

  e = AWS.util.uriEscape

  it 'escapes spaces as %20', ->
    expect(e('a b')).to.equal('a%20b')

  it 'escapes + as %2B', ->
    expect(e('a+b')).to.equal('a%2Bb')

  it 'escapes / as %2F', ->
    expect(e('a/b')).to.equal('a%2Fb')

  it 'escapes \' as %27', ->
    expect(e('a\'b')).to.equal('a%27b')

  it 'escapes * as %2A', ->
    expect(e('a*b')).to.equal('a%2Ab')

  it 'does not escape ~', ->
    expect(e('a~b')).to.equal('a~b')

  it 'encodes utf8 characters', ->
    expect(e('ёŝ')).to.equal('%D1%91%C5%9D')

describe 'uriEscapePath', ->

  e = AWS.util.uriEscapePath

  it 'does not escape forward slashes', ->
    s = 'a&b/x=y/1+2/m?n'
    expect(e(s)).to.equal('a%26b/x%3Dy/1%2B2/m%3Fn')

  it 'leaves leading and trailing forward slashes in place', ->
    s = '/ab cd/'
    expect(e(s)).to.equal('/ab%20cd/')

describe 'AWS.util.queryParamsToString', ->
  qpts = AWS.util.queryParamsToString

  it 'sorts query parameters before stringifying', ->
    expect(qpts(c: '1', b: '2', a: '3')).to.equal('a=3&b=2&c=1')

  it 'handles empty values', ->
    expect(qpts(a: '', b: '2')).to.equal('a=&b=2')

  it 'handles null/undefined values', ->
    expect(qpts(a: undefined, b: null)).to.equal('a=&b=')

  it 'calls uriEscape on each name and value', ->
    spy = helpers.spyOn(AWS.util, 'uriEscape').andCallThrough()
    qpts(c: '1', b: '2', a: '3')
    expect(spy.calls.length).to.equal(6)

  it 'handles values as lists', ->
    expect(qpts(a: ['c', 'b', 'a'], b: '4')).to.equal('a=a&a=b&a=c&b=4')

  it 'escapes list values', ->
    expect(qpts(a: ['+', '&', '*'], b: '4')).to.equal('a=%26&a=%2A&a=%2B&b=4')

  it 'does not provide value if value is null', ->
    expect(qpts(a: null, b: null)).to.equal('a=&b=')

describe 'AWS.util.date', ->

  util = AWS.util.date

  describe 'getDate', ->
    it 'should return current date by default', ->
      now = {}
      obj = if AWS.util.isNode() then GLOBAL else window
      helpers.spyOn(obj, 'Date').andCallFake -> now
      expect(util.getDate()).to.equal(now)

    describe 'systemClockOffset', ->
      [date, mocked, config] = []

      beforeEach ->
        [date, mocked, config] = [Date, false, AWS.config]
        obj = if AWS.util.isNode() then GLOBAL else window
        helpers.spyOn(obj, 'Date').andCallFake (t) ->
          if mocked
            new date(t)
          else
            mocked = true
            new date(0)

      afterEach ->
        AWS.config = config
        AWS.config.systemClockOffset = 0

      it 'returns a date with a millisecond offset if provided', ->
        AWS.config.systemClockOffset = 10000
        expect(util.getDate().getTime()).to.equal(10000)

      it 'returns a date with a millisecond offset from a non-Config object', ->
        AWS.config = systemClockOffset: 10000
        expect(util.getDate().getTime()).to.equal(10000)
        AWS.config = config

      it 'returns a date with no offset if non-Config object has no systemClockOffset property', ->
        AWS.config = {}
        expect(util.getDate().getTime()).to.equal(0)

  describe 'iso8601', ->
    it 'should return date formatted as YYYYMMDDTHHmmssZ', ->
      date = new Date(600000); date.setMilliseconds(0)
      helpers.spyOn(util, 'getDate').andCallFake -> date
      expect(util.iso8601()).to.equal('1970-01-01T00:10:00Z')

    it 'should allow date parameter', ->
      date = new Date(660000); date.setMilliseconds(0)
      expect(util.iso8601(date)).to.equal('1970-01-01T00:11:00Z')

  describe 'rfc822', ->
    it 'should return date formatted as YYYYMMDDTHHmmssZ', ->
      date = new Date(600000); date.setMilliseconds(0)
      helpers.spyOn(util, 'getDate').andCallFake -> date
      expect(util.rfc822()).to.match(/^Thu, 0?1 Jan 1970 00:10:00 (GMT|UTC)$/)

    it 'should allow date parameter', ->
      date = new Date(660000); date.setMilliseconds(0)
      expect(util.rfc822(date)).to.match(/^Thu, 0?1 Jan 1970 00:11:00 (GMT|UTC)$/)

  describe 'unixTimestamp', ->
    it 'should return date formatted as unix timestamp', ->
      date = new Date(600000); date.setMilliseconds(0)
      helpers.spyOn(util, 'getDate').andCallFake -> date
      expect(util.unixTimestamp()).to.equal(600)

    it 'should allow date parameter', ->
      date = new Date(660000); date.setMilliseconds(0)
      expect(util.unixTimestamp(date)).to.equal(660)

    it 'should return date formatted as unix timestamp with milliseconds', ->
      helpers.spyOn(util, 'getDate').andCallFake -> new Date(600123)
      expect(util.unixTimestamp()).to.equal(600.123)

describe 'AWS.util.string', ->
  len = AWS.util.string.byteLength

  describe 'byteLength', ->
    it 'handles null/undefined objects', ->
      expect(len(undefined)).to.equal(0)
      expect(len(null)).to.equal(0)

    it 'handles buffer input', ->
      expect(len(new Buffer('∂ƒ©∆'))).to.equal(10)

    it 'handles string input', ->
      expect(len('')).to.equal(0)
      expect(len('∂ƒ©∆')).to.equal(10)

    if AWS.util.isNode()
      it 'handles file object input (path property)', ->
        fs = require('fs')
        file = fs.createReadStream(__filename)
        fileLen = fs.lstatSync(file.path).size
        expect(len(file)).to.equal(fileLen)
        expect(len(path: __filename)).to.equal(fileLen)

    it 'fails if input is not a string, buffer, or file', ->
      err = null
      try
        len(3.14)
      catch e
        err = e

      expect(err.message).to.equal('Cannot determine length of 3.14')
      expect(err.object).to.equal(3.14)

    it 'ignores path property unless it is a string', ->
      object = {}
      err = null
      try
        len(object)
      catch e
        err = e

      expect(err.message).to.match(/Cannot determine length of /)
      expect(err.object).to.equal(object)

describe 'AWS.util.ini', ->
  describe 'parse', ->
    it 'parses an ini file', ->
      ini = '''
      ; comment at the beginning of the line
      [section1] ; comment at end of line
      invalidline
      key1=value1 ; another comment
        key2 = value2;value3
      [emptysection]
      '''
      map = AWS.util.ini.parse(ini)
      expect(map.section1.key1).to.equal('value1')
      expect(map.section1.key2).to.equal('value2;value3')
      expect(map.emptysection).to.equal(undefined)

    it 'ignores leading and trailing white space', ->
      ini = '''
      [section1] ; comment at end of line
      \r\tkey1=\t\rvalue1\t\r
      \v\f\tkey2=value2\f\v
      \u00a0key3   =  \u00a0value3\u3000
      [emptysection]
      '''
      map = AWS.util.ini.parse(ini)
      expect(map.section1.key1).to.equal('value1')
      expect(map.section1.key2).to.equal('value2')
      expect(map.section1.key3).to.equal('value3')

describe 'AWS.util.buffer', ->
  describe 'concat', ->
    it 'concatenates a list of buffers', ->
      buffer1 = new Buffer('abcdefg')
      buffer2 = new Buffer('hijklmn')
      buffer3 = AWS.util.buffer.concat([buffer1, buffer2])
      expect(buffer3.length).to.equal(14)
      expect(buffer3.toString()).to.equal('abcdefghijklmn')

describe 'AWS.util.crypto', ->

  util = AWS.util.crypto

  describe 'crc32', ->
    it 'returns the correct CRC32 value for binary data', ->
      buffer = new Buffer(4433);
      for i in [0...buffer.length]
        buffer.writeUInt8 i % 256, i
      expect(util.crc32(buffer)).to.equal(899332870)

    it 'handles String values', ->
      string = '{"ConsumedCapacityUnits":1.0}'
      expect(util.crc32(string)).to.equal(2614884069)

  describe 'toHex', ->
    it 'should convert binary data to hex string', ->
      expect(util.toHex('ABC')).to.equal('414243')

  describe 'hmac', ->
    input = 'foo'
    key = 'KEY'
    result = '116a3725a3540067a09e4dba64bb6b3fb27b4d98a1a2e2dbcb8b4cffa73585d5'

    it 'should return a keyed hash as a binary digest', ->
      expected = util.hmac(key, input)
      expect(util.toHex(expected)).to.equal(result)

    it 'should return a keyed hash as hex digest', ->
      expected = util.hmac(key, input, 'hex')
      expect(expected).to.equal(result)

    it 'accepts the crypto function as an argument', ->
      r = util.hmac('secret', 'the quick brown fox', 'base64', 'sha1')
      expect(r).to.equal('z1BzGT+uG/2qGzE1UHb5m/skn1E=')

    it 'accepts UTF-8 input for string', ->
      r = util.hmac('foo', 'å∆ç∂', 'hex')
      expect(r).to.equal('bc11556145cbe4935ba187b9f8ba0c12bae2c866e5795013dfe2d08cabc33e13')

  describe 'sha256', ->
    input = 'foo'
    result = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'

    it 'should return binary data hashed with sha256', ->
      expected = util.sha256(input)
      expect(util.toHex(expected)).to.equal(result)

    it 'should return hex data hashed with sha256', ->
      expected = util.sha256(input, 'hex')
      expect(expected).to.equal(result)

    it 'accepts UTF-8 input', ->
      r = util.sha256('ß∂ƒ©', 'hex')
      expect(r).to.equal('3c01ddd413d2cacac59a255e4aade0d9058a8a9ea8b2dfe5bb2dc4ed132b4139')

    it 'handles async interface', ->
      util.sha256 input, 'hex', (e, d) ->
        expect(d).to.equal(result)

    if AWS.util.isNode()
      it 'handles streams in async interface', (done) ->
        Transform = AWS.util.nodeRequire('stream').Transform
        tr = new Transform
        tr._transform = (data, encoding, callback) -> callback(null, data)
        tr.push(new AWS.util.Buffer(input))
        tr.end()
        util.sha256 tr, 'hex', (e, d) ->
          expect(d).to.equal(result)
          done()

    if AWS.util.isBrowser()
      it 'handles Blobs (no phantomjs)', (done) ->
        result = 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
        util.sha256 new Blob([1,2,3]), 'hex', (e, d) ->
          expect(e).to.eql(null)
          expect(d).to.equal(result)
          done()

      it 'handles Uint8Array objects directly', (done) ->
        result = '039058c6f2c0cb492c533b0a4d14ef77cc0f78abccced5287d84a1a2011cfb81'
        util.sha256 new Uint8Array([1,2,3]), 'hex', (e, d) ->
          expect(e).to.eql(null)
          expect(d).to.equal(result)
          done()

  describe 'md5', ->
    input = 'foo'
    result = 'acbd18db4cc2f85cedef654fccc4a4d8'

    it 'should return binary data hashed with md5', ->
      expected = util.md5(input)
      expect(util.toHex(expected)).to.equal(result)

    it 'should return hex data hashed with md5', ->
      expected = util.md5(input, 'hex')
      expect(expected).to.equal(result)

    it 'accepts UTF-8 input', ->
      r = util.md5('ￃ', 'hex')
      expect(r).to.equal('b497dbbe19fb58cddaeef11f9d40804c')

    it 'handles async interface', ->
      util.md5 input, 'hex', (e, d) ->
        expect(d).to.equal(result)

    if AWS.util.isNode()
      it 'handles streams in async interface', (done) ->
        Transform = AWS.util.nodeRequire('stream').Transform
        tr = new Transform
        tr._transform = (data, enc, callback) -> callback(null, data)
        tr.push(new AWS.util.Buffer(input))
        tr.end()
        util.md5 tr, 'hex', (e, d) ->
          expect(d).to.equal(result)
          done()

describe 'AWS.util.each', ->
  it 'should iterate over a hash', ->
    parts = []
    AWS.util.each {a: 1, b: 2, c: 3}, (key, item) ->
      parts.push([key + '_', item + 1])
    expect(parts).to.eql([['a_', 2], ['b_', 3], ['c_', 4]])

  it 'should iterate over an array', ->
    total = 0
    AWS.util.each [1, 2, 3], (idx, item) ->
      total += item
    expect(total).to.equal(6)

  it 'should ignore inherited properties', ->
    objCtor = -> this.a = 1; this.b = 2; this.c = 3
    objCtor.prototype = d: 4, e: 5, f: 6
    obj = new objCtor()
    parts = []
    AWS.util.each obj, (key, item) ->
      parts.push([key + '_', item + 1])
    expect(parts).to.eql([['a_', 2], ['b_', 3], ['c_', 4]])

  it 'callback should not change "this" scope', ->
    new ->
      this.class = 'MyClass'
      self = this
      AWS.util.each.apply this, [[1, 2, 3], ->
        expect(this).to.equal(self)]

  it 'can abort out of loop', ->
    string = ''
    AWS.util.each {a: 1, b: 2, c: 3}, (key, item) ->
      return AWS.util.abort if item == 2
      string += key

    expect(string).to.equal('a')

describe 'AWS.util.arrayEach', ->
  it 'should iterate over arrays', ->
    total = 0
    AWS.util.arrayEach [1, 2, 3], (item) ->
      total += item
    expect(total).to.equal(6)

  it 'should pass index as second parameter', ->
    lastIndex = null
    AWS.util.arrayEach [1, 2, 3], (item, idx) ->
      expect(typeof(idx)).to.equal('number')
      expect(lastIndex).to.equal(idx - 1) if lastIndex != null
      lastIndex = idx

  it 'can abort out of loop', ->
    total = 0
    AWS.util.arrayEach [1, 2, 3], (item, idx) ->
      return AWS.util.abort if idx == 1
      total += item

    expect(total).to.equal(1)

describe 'AWS.util.copy', ->
  it 'does not copy null or undefined', ->
    expect(AWS.util.copy(null)).to.equal(null)
    expect(AWS.util.copy(undefined)).to.equal(undefined)

  it 'should perform a shallow copy of an object', ->
    obj = a: 1, b: 2, c: 3
    copied = AWS.util.copy(obj)
    expect(copied).not.to.equal(obj)
    expect(copied).to.eql(a: 1, b: 2, c: 3)

  it 'should copy inherited properties', ->
    objCtor = -> this.a = 1; this.b = 2; this.c = 3
    objCtor.prototype = d: 4
    obj = new objCtor()
    copied = AWS.util.copy(obj)
    expect(copied).not.to.equal(obj)
    expect(copied).to.eql(a: 1, b: 2, c: 3, d: 4)

describe 'AWS.util.merge', ->
  it 'should merge an object into another and return new object', ->
    obj = a: 1, b: 2, c: 3
    newObj = AWS.util.merge(obj, {d: 4, e: 5, a: 6})
    expect(newObj).to.eql(a: 6, b: 2, c: 3, d: 4, e: 5)
    expect(obj).to.eql(a: 1, b: 2, c: 3)

describe 'AWS.util.update', ->
  it 'should merge an object into another', ->
    obj = a: 1, b: 2, c: 3
    AWS.util.update(obj, {d: 4, e: 5, a: 6})
    expect(obj).to.eql(a: 6, b: 2, c: 3, d: 4, e: 5)

  it 'should return the merged object', ->
    obj = a: 1, b: 2
    expect(AWS.util.update(obj, c: 3)).to.equal(obj)

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
    expect(derived).to.be.instanceOf(Base)
    expect(derived.constructor).to.equal(Derived)
    expect(derived.main()).to.equal('notMain')
    expect(derived.other).to.equal('other')
    expect(derived.defaultValue).to.equal(10)
    expect(derived.foo()).to.equal('bar')

  it 'should create pass-through constructor if not defined', ->
    Base = AWS.util.inherit
      constructor: helpers.createSpy()

    Derived = AWS.util.inherit Base,
      other: true

    derived = new Derived(1, 2, 'three')
    expect(derived.other).to.equal(true)
    expect(Base.prototype.constructor.calls[0].arguments).to.eql([1, 2, 'three'])

describe 'AWS.util.mixin', ->
  it 'copies properties to other object prototype', ->
    obj = prototype: a: 1, b: 2
    AWS.util.mixin(obj, prototype: b: 3, c: 4)
    expect(obj.prototype).to.eql(a: 1, b: 3, c: 4)

  it 'resets prototype constructor', ->
    obj = prototype: constructor: 'PASS'
    AWS.util.mixin(obj, prototype: constructor: 'FAIL')
    expect(obj.prototype).to.eql(constructor: 'PASS')

  it 'returns original klass', ->
    obj = prototype: foo: 1
    out = AWS.util.mixin(obj, prototype: bar: 2)
    expect(out).to.equal(obj)

describe 'AWS.util.isType', ->
  it 'accepts function for type', ->
    expect(AWS.util.isType([], Array)).to.equal(true)

  it 'accepts string for type', ->
    expect(AWS.util.isType([], 'Array')).to.equal(true)

describe 'AWS.util.isEmpty', ->

  it 'returns true when passed an empty object literal', ->
    expect(AWS.util.isEmpty({})).to.equal(true)

  it 'returns true when passed a non-empty object literal', ->
    expect(AWS.util.isEmpty({a:1})).to.equal(false)

describe 'AWS.util.error', ->
  it 'returns the created error object with extra options', ->
    origError = new Error()
    err = AWS.util.error(origError, message: 'msg', code: 'code')
    expect(err).to.equal(origError)
    expect(err.message).to.equal('msg')
    expect(err.code).to.equal('code')

  it 'accepts missing options', ->
    origError = new Error('ERROR')
    err = AWS.util.error(origError)
    expect(err).to.equal(origError)
    expect(err.message).to.equal('ERROR')

  it 'maintains the original error message property', ->
    origError = new Error('ERROR')
    err = AWS.util.error(origError, {code: 'code'})
    expect(err).to.equal(origError)
    expect(err.message).to.equal('ERROR')
    expect(err.code).to.equal('code')

  it 'keeps track of the old error', ->
    origError = new Error('ERROR')
    origError.value = 1
    err = AWS.util.error(origError, code: 'code', message: 'FOO')
    expect(err.originalError.message).to.equal('ERROR')
    expect(err.originalError.code).to.equal(undefined)
    expect(err.originalError.value).to.equal(1)

describe 'AWS.util.base64', ->

  base64 = AWS.util.base64

  describe 'encode', ->
    it 'encodes the given string', ->
      expect(base64.encode('foo')).to.equal('Zm9v')
      expect(base64.encode('ёŝ')).to.equal('0ZHFnQ==')

  describe 'decode', ->
    it 'decodes the given string', ->
      expect(base64.decode('Zm9v').toString()).to.equal('foo')
      expect(base64.decode('0ZHFnQ==').toString()).to.equal('ёŝ')

describe 'AWS.util.jamespath', ->
  query = AWS.util.jamespath.query
  find = AWS.util.jamespath.find

  describe 'query', ->
    it 'can find a toplevel element of a data structure', ->
      expect(query('foo', foo: 'value')).to.eql(['value'])

    it 'can find a nested element of a data structure', ->
      expect(query('foo.bar.baz', foo: bar: baz: 'value')).to.eql(['value'])

    it 'can index an element (positive and negative indexes)', ->
      data = foo: bar: [{baz: 'wrong'}, {baz: 'right'}, {baz: 'wrong'}]
      expect(query('foo.bar[1].baz', data)).to.eql(['right'])
      expect(query('foo.bar[-2].baz', data)).to.eql(['right'])

    it 'can index an element with wildcard', ->
      data = foo: bar: [{baz: 'wrong'}, {baz: 'right'}, {baz: 'wrong'}]
      expect(query('foo.bar[*].baz', data)).to.eql(['wrong', 'right', 'wrong'])

    it 'returns empty array if element is not found', ->
      data = foo: notBar: baz: 'value'
      expect(query('foo.bar.baz', data)).to.eql([])

    it 'allows multiple expressions to be ORed', ->
      data = foo: {key1: 'wrong'}, bar: {key2: 'right'}
      expect(query('foo.key2 || bar.key2', data)).to.eql(['right'])

    it 'returns multiple matches if a wildcard is used', ->
      data = foo:
        child1: bar: 'value1'
        child2: bar: 'value2'
        child3: bar: 'value3'
      expect(query('foo.*.bar', data)).to.eql(['value1', 'value2', 'value3'])

    it 'can support wildcard on both token and index', ->
      data = foo:
        child1: ['value1', 'value2']
        child2: ['value3']
        child4: 'notarray'
      expect(query('foo.*[*]', data)).to.eql(['value1', 'value2', 'value3'])

    it 'can support array flattening', ->
      data = foo: [ {bar: 1}, {bar: 2}, {bar: 3} ]
      expect(query('foo[].bar', data)).to.eql([1, 2, 3])


  describe 'find', ->
    it 'returns the first match of query', ->
      expect(find('foo.*', foo: bar: 1, baz: 2)).to.equal(1)

    it 'returns null if no match is found', ->
      expect(find('invalid.*', foo: bar: 1, baz: 2)).not.to.exist

describe 'AWS.util.hoistPayloadMember', ->
  hoist = AWS.util.hoistPayloadMember

  service = null
  buildService = (api) ->
    service = new AWS.Service endpoint: 'http://localhost', apiConfig: api

  it 'hoists structure payload members', ->
    api =
      'metadata': 'protocol': 'rest-xml'
      'operations': 'sample': 'output': 'shape': 'OutputShape'
      'shapes':
        'OutputShape':
          'type': 'structure'
          'payload': 'Data'
          'members':
            'Data': 'shape': 'SingleStructure'
        'StringType': 'type': 'string'
        'SingleStructure':
          'type': 'structure'
          'members': 'Foo': 'shape': 'StringType'
    httpResp =
      'status_code': 200
      'headers': 'X-Foo': 'baz'
      'body': '<OperationNameResponse><Foo>abc</Foo></OperationNameResponse>'
    buildService(api)
    helpers.mockHttpResponse httpResp.status_code, httpResp.headers, httpResp.body
    req = service.sample()
    req.send()
    hoist(req.response)
    expect(req.response.data.Foo).to.eql('abc')
    expect(req.response.data.Data.Foo).to.eql('abc')

  it 'does not hoist streaming payload members', ->
    api =
      'metadata': 'protocol': 'rest-xml'
      'operations': 'sample': 'output': 'shape': 'OutputShape'
      'shapes':
        'OutputShape':
          'type': 'structure'
          'payload': 'Stream'
          'members': 'Stream': 'shape': 'BlobStream'
        'BlobStream':
          'type': 'blob'
          'streaming': true
    httpResp =
      'status_code': 200
      'headers': {}
      'body': 'abc'
    buildService(api)
    helpers.mockHttpResponse httpResp.status_code, httpResp.headers, httpResp.body
    req = service.sample()
    req.send()
    hoist(req.response)
    expect(req.response.data.Stream.toString()).to.eql('abc')
