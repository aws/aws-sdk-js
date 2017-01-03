helpers = require('../helpers')
AWS = helpers.AWS
Buffer = AWS.util.Buffer
encode = AWS.util.base64.encode

docClient = null

beforeEach ->
  docClient = new AWS.DynamoDB.DocumentClient()

translateInput = (input) ->
  request = docClient.put(input)
  request.emit('validate', [request])
  request.params

describe 'AWS.DynamoDB.DocumentClient', ->

  it 'returns a request', ->
    request = docClient.get({ Key: foo: 1 })
    expect(request instanceof AWS.Request).to.equal(true)

  describe 'supports sets', ->

    it 'validates type of set', ->
      expect(-> docClient.createSet([true, false, false])).to.throw('Sets can contain string, number, or binary values')

    it 'detects type of sets', ->
      expect(docClient.createSet(['1', '2', 'string']).type).to.equal('String')
      expect(docClient.createSet([1, 2, 3]).type).to.equal('Number')
      expect(docClient.createSet([new Buffer('foo'), new Buffer('bar')]).type).to.equal('Binary')

    it 'supports sets with falsy values', ->
      expect(docClient.createSet([0]).type).to.equal('Number')
      expect(docClient.createSet(['']).type).to.equal('String')

    it 'validates set elements if validate: true', ->
      expect(-> docClient.createSet([1, 2, 'string'], {validate: true})).to.throw('Number Set contains String value')
      expect(-> docClient.createSet(['string', 'string', 2], {validate: true})).to.throw('String Set contains Number value')
      expect(-> docClient.createSet([1, 2, new Buffer('foo')], {validate: true})).to.throw('Number Set contains Binary value')

    it 'does not validate set elements if validate: true unset', ->
      expect(-> docClient.createSet([1, 2, 'string'])).to.not.throw('Number Set contains String value')
      expect(-> docClient.createSet(['string', 'string', 2])).to.not.throw('String Set contains Number value')
      expect(-> docClient.createSet([1, 2, new Buffer('foo')])).to.not.throw('Number Set contains Binary value')

  describe 'input', ->

    it 'translates strings', ->
      input = Item:
        foo: 'bar'
      params = Item:
        foo: S: 'bar'
      expect(translateInput(input)).to.eql(params)

    it 'converts empty strings to null when convertEmptyValues option set', ->
      input = Item:
        foo: ''
      params = Item:
        foo: NULL: true

      client = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true})
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'does not convert empty strings to null when convertEmptyValues option not set', ->
      input = Item:
        foo: ''
      params = Item:
        foo: S: ''

      client = new AWS.DynamoDB.DocumentClient()
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'translates binary buffers', ->
      buffer = new Buffer 'bar'
      input = Item:
        foo: buffer
      params = Item:
        foo: B: buffer
      expect(translateInput(input)).to.eql(params)

    it 'converts empty binary buffers to null when convertEmptyValues option set', ->
      buffer = new Buffer ''
      input = Item:
        foo: buffer
      params = Item:
        foo: NULL: true

      client = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true})
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'does not convert empty binary buffers to null when convertEmptyValues option not set', ->
      buffer = new Buffer ''
      input = Item:
        foo: buffer
      params = Item:
        foo: B: buffer

      client = new AWS.DynamoDB.DocumentClient()
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'translates numbers', ->
      input = Item:
        foo: 1
      params = Item:
        foo: N: '1'
      expect(translateInput(input)).to.eql(params)

    it 'translates booleans', ->
      input = Item:
        foo: true
        bar: false
      params = Item:
        foo: BOOL: true
        bar: BOOL: false
      expect(translateInput(input)).to.eql(params)

    it 'translates null', ->
      input = Item:
        foo: null
      params = Item:
        foo: NULL: true
      expect(translateInput(input)).to.eql(params)

    it 'translates maps', ->
      input = Item: foo:
        bar: 'string'
        baz: 'string'
      params = Item: foo:
        M:
          bar: S: 'string'
          baz: S: 'string'
      expect(translateInput(input)).to.eql(params)

    it 'converts empty map members to null when convertEmptyValues option set', ->
      input = Item: foo:
        bar: 'string'
        baz: 'string'
        quux: ''
        fizz: new Buffer ''
        buzz: docClient.createSet([''])
      params = Item: foo:
        M:
          bar: S: 'string'
          baz: S: 'string'
          quux: NULL: true
          fizz: NULL: true
          buzz: NULL: true

      client = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true})
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'does not covert empty map members to null when convertEmptyValues option not set', ->
      emptyBuffer = new Buffer ''
      input = Item: foo:
        bar: 'string'
        baz: 'string'
        quux: ''
        fizz: emptyBuffer
        buzz: docClient.createSet([''])
      params = Item: foo:
        M:
          bar: S: 'string'
          baz: S: 'string'
          quux: S: ''
          fizz: B: emptyBuffer
          buzz: SS: ['']

      client = new AWS.DynamoDB.DocumentClient()
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'translates lists', ->
      buffer = new Buffer 'quux'
      input = Item: foo:
        bar: ['string', 2, buffer]
      params = Item: foo:
        M:
          bar: L: [
            {S: 'string'},
            {N: '2'},
            {B: buffer}
          ]
      expect(translateInput(input)).to.eql(params)

    it 'converts empty list members to null when convertEmptyValues option set', ->
      buffer = new Buffer 'quux'
      input = Item: foo:
        bar: ['string', 2, buffer, '', new Buffer(''), docClient.createSet([''])]
      params = Item: foo:
        M:
          bar: L: [
            {S: 'string'},
            {N: '2'},
            {B: buffer},
            {NULL: true},
            {NULL: true},
            {NULL: true},
          ]

      client = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true})
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'does not covert empty list members to null when convertEmptyValues option not set', ->
      emptyBuffer = new Buffer ''
      buffer = new Buffer 'quux'
      input = Item: foo:
        bar: ['string', 2, buffer, '', emptyBuffer, docClient.createSet([''])]
      params = Item: foo:
        M:
          bar: L: [
            {S: 'string'},
            {N: '2'},
            {B: buffer},
            {S: ''},
            {B: emptyBuffer},
            {SS: ['']},
          ]

      client = new AWS.DynamoDB.DocumentClient()
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'translates string sets', ->
      set  = docClient.createSet ['bar', 'baz', 'quux']
      input = Item:
        foo: set
      params = Item:
        foo:
          SS: ['bar', 'baz', 'quux']
      expect(translateInput(input)).to.eql(params)

    it 'removes empty strings from sets when convertEmptyValues option set', ->
      set  = docClient.createSet ['bar', 'baz', 'quux', '']
      input = Item:
        foo: set
      params = Item:
        foo:
          SS: ['bar', 'baz', 'quux']

      client = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true})
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'does not remove empty strings from sets when convertEmptyValues option not set', ->
      set  = docClient.createSet ['bar', 'baz', 'quux', '']
      input = Item:
        foo: set
      params = Item:
        foo:
          SS: ['bar', 'baz', 'quux', '']

      client = new AWS.DynamoDB.DocumentClient()
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'converts empty sets to null when convertEmptyValues option set', ->
      set  = docClient.createSet ['']
      input = Item:
        foo: set
      params = Item:
        foo:
          NULL: true

      client = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true})
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'does not convert empty sets to null when convertEmptyValues option not set', ->
      set  = docClient.createSet ['']
      input = Item:
        foo: set
      params = Item:
        foo:
          SS: ['']

      client = new AWS.DynamoDB.DocumentClient()
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'translates number sets', ->
      set  = docClient.createSet [1, 2, 3]
      input = Item:
        foo: set
      params = Item:
        foo:
          NS: ['1', '2', '3']
      expect(translateInput(input)).to.eql(params)

    it 'translates binary sets', ->
      bar = new Buffer('bar')
      baz = new Buffer('baz')
      quux = new Buffer('quux')
      set  = docClient.createSet [bar, baz, quux]
      input = Item:
        foo: set
      params = Item:
        foo:
          BS: [bar, baz, quux]
      expect(translateInput(input)).to.eql(params)

    it 'removes empty binary members from sets when convertEmptyValues option set', ->
      bar = new Buffer('bar')
      baz = new Buffer('baz')
      quux = new Buffer('quux')
      empty = new Buffer('')
      set  = docClient.createSet [bar, baz, quux, empty]
      input = Item:
        foo: set
      params = Item:
        foo:
          BS: [bar, baz, quux]

      client = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true})
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'removes empty binary members from sets when convertEmptyValues option set', ->
      bar = new Buffer('bar')
      baz = new Buffer('baz')
      quux = new Buffer('quux')
      empty = new Buffer('')
      set  = docClient.createSet [bar, baz, quux, empty]
      input = Item:
        foo: set
      params = Item:
        foo:
          BS: [bar, baz, quux]

      client = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true})
      request = client.put(input)
      request.emit('validate', [request])

      expect(request.params).to.eql(params)

    it 'translates recursive maps', ->
      input = Item:
        name:
          first: 'foo'
          last: 'bar'
          aliases: [ 'alpha', 'beta', 'gamma' ]
        address:
          mailing: street: '123 foo bar'
          billing: street: '456 baz quux'
      params = Item:
        name:
          M:
            first: 'S': 'foo'
            last: 'S': 'bar'
            aliases: 'L': [
              {'S': 'alpha'},
              {'S': 'beta'},
              {'S': 'gamma'}
            ]
        address:
          M:
            mailing:
              M:
                street: 'S': '123 foo bar'
            billing:
              M:
                street: 'S': '456 baz quux'
      expect(translateInput(input)).to.eql(params)

    it 'translates nested maps', ->
      input = Item:
        names: [
          {
            first: 'foo',
            last: 'bar',
            aliases: ['alpha', 'beta', 'gamma']
          },
          {
            first: 'baz',
            last: 'quux',
            aliases: ['pi', 'rho', 'sigma']
          }
        ]
      params = Item:
        names:
          L: [
            {
              M: {
                first: 'S': 'foo'
                last: 'S': 'bar'
                aliases: 'L': [
                  {S: 'alpha'},
                  {S: 'beta'},
                  {S: 'gamma'}
                ]
              }
            },
            {
              M: {
                first: 'S': 'baz'
                last: 'S': 'quux'
                aliases: 'L': [
                  {S: 'pi'},
                  {S: 'rho'},
                  {S: 'sigma'}
                ]
              }
            }
          ]
      expect(translateInput(input)).to.eql(params)

    it 'translates recusive lists', ->
      buffer = new Buffer('foo')
      input = Item:
        tags: [
          ['alpha', 'beta', 'gamma', buffer],
          [1, 2, 3, buffer],
          [{moreTags: ['pi', 'rho', 'sigma', {
            someMoreTags: ['bar', 'baz']
          }]}]
        ]
      params = Item:
        tags:
          L:[
            {L:[
              {'S': 'alpha'},
              {'S': 'beta'},
              {'S': 'gamma'},
              {'B': buffer},
            ]},
            {L:[
              {'N': '1'},
              {'N': '2'},
              {'N': '3'},
              {'B': buffer},
            ]},
            {L:[
              {
                'M': {
                  moreTags: {
                    'L': [
                      {'S': 'pi'},
                      {'S': 'rho'},
                      {'S': 'sigma'},
                      {
                        'M': {
                          someMoreTags: {
                            'L': [
                              {'S': 'bar'},
                              {'S': 'baz'}
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              },
            ]}
          ]
      expect(translateInput(input)).to.eql(params)

    it 'translates nested sets', ->
      stringSet = docClient.createSet(['alpha', 'beta', 'gamma'])
      numberSet = docClient.createSet([1, 2, 3])
      input = Item:
        name:
          first: 'foo'
          last: 'bar'
          aliases: stringSet
          scores: [
            numberSet,
            numberSet,
            numberSet
          ]
      params = Item:
        name:
          M:
            first: S: 'foo'
            last: S: 'bar'
            aliases: SS: [
              'alpha',
              'beta',
              'gamma'
            ]
            scores:
              L:[
                {NS: ['1', '2', '3']},
                {NS: ['1', '2', '3']},
                {NS: ['1', '2', '3']}
              ]
      expect(translateInput(input)).to.eql(params)

  describe 'output', ->

    it 'translates strings', (done) ->
      wire = JSON.stringify(
        Item:
          foo: S: 'bar'
      )
      output = Item:
        foo: 'bar'
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates numbers', (done) ->
      wire = JSON.stringify(
        Item:
          foo: N: '1'
      )
      output = Item:
        foo: 1
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates booleans', (done) ->
      wire = JSON.stringify(
        Item:
          foo: BOOL: true
          bar: BOOL: false
      )
      output = Item:
        foo: true
        bar: false
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates null', (done) ->
      wire = JSON.stringify(
        Item:
          foo: NULL: true
      )
      output = Item:
        foo: null
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates maps', (done) ->
      wire = JSON.stringify(
        Item: foo:
          M:
            bar: S: 'string'
            baz: S: 'string'
      )
      output = Item: foo:
        bar: 'string'
        baz: 'string'
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates lists', (done) ->
      buffer = new Buffer 'quux'
      wire = JSON.stringify(
        Item: foo:
          M:
            bar: L: [
              {S: 'string'},
              {N: '2'},
              {B: encode(buffer)}
              {BOOL: true}
            ]
      )
      output = Item: foo:
        bar: ['string', 2, buffer, true]
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates string sets', (done) ->
      set  = docClient.createSet ['bar', 'baz', 'quux']
      wire = JSON.stringify(
        Item:
          foo:
            'SS': ['bar', 'baz', 'quux']
      )
      output = Item:
        foo: set
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates number sets', (done) ->
      set  = docClient.createSet [1, 2, 3]
      wire = JSON.stringify(Item:
        foo:
          'NS': ['1', '2', '3']
      )
      output = Item:
        foo: set
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates binary sets', (done) ->
      bar = new Buffer('bar')
      baz = new Buffer('baz')
      quux = new Buffer('quux')
      set  = docClient.createSet [bar, baz, quux]
      wire = JSON.stringify(
        Item:
          foo:
            'BS': [encode(bar), encode(baz), encode(quux)]
      )
      output = Item:
        foo: set
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates recursive maps', (done) ->
      wire = JSON.stringify(
        Item:
          name:
            M:
              first: 'S': 'foo'
              last: 'S': 'bar'
              aliases: 'L': [
                {'S': 'alpha'},
                {'S': 'beta'},
                {'S': 'gamma'}
              ]
          address:
            M:
              mailing:
                M:
                  street: 'S': '123 foo bar'
              billing:
                M:
                  street: 'S': '456 baz quux'
      )
      output = Item:
        name:
          first: 'foo'
          last: 'bar'
          aliases: [ 'alpha', 'beta', 'gamma' ]
        address:
          mailing: street: '123 foo bar'
          billing: street: '456 baz quux'
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates nested maps', (done) ->
      wire = JSON.stringify(
        Item:
          names:
            L: [
              {
                M: {
                  first: 'S': 'foo'
                  last: 'S': 'bar'
                  aliases: 'L': [
                    {S: 'alpha'},
                    {S: 'beta'},
                    {S: 'gamma'}
                  ]
                }
              },
              {
                M: {
                  first: 'S': 'baz'
                  last: 'S': 'quux'
                  aliases: 'L': [
                    {S: 'pi'},
                    {S: 'rho'},
                    {S: 'sigma'}
                  ]
                }
              }
            ]
      )
      output = Item:
        names: [
          {
            first: 'foo',
            last: 'bar',
            aliases: ['alpha', 'beta', 'gamma']
          },
          {
            first: 'baz',
            last: 'quux',
            aliases: ['pi', 'rho', 'sigma']
          }
        ]
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates recusive lists', (done) ->
      buffer = new Buffer('foo')
      wire = JSON.stringify(
        Item:
          tags:
            L:[
              {L:[
                {'S': 'alpha'},
                {'S': 'beta'},
                {'S': 'gamma'},
                {'B': encode(buffer)},
              ]},
              {L:[
                {'N': '1'},
                {'N': '2'},
                {'N': '3'},
                {'B': encode(buffer)},
              ]},
              {L:[
                {
                  'M': {
                    moreTags: {
                      'L': [
                        {'S': 'pi'},
                        {'S': 'rho'},
                        {'S': 'sigma'},
                        {
                          'M': {
                            someMoreTags: {
                              'L': [
                                {'S': 'bar'},
                                {'S': 'baz'}
                                {'N': '1'},
                                {'BOOL': true},
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
              ]}
            ]
      )
      output = Item:
        tags: [
          ['alpha', 'beta', 'gamma', buffer],
          [1, 2, 3, buffer],
          [{moreTags: ['pi', 'rho', 'sigma', {
            someMoreTags: ['bar', 'baz', 1, true]
          }]}]
        ]
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

    it 'translates nested sets', (done) ->
      stringSet = docClient.createSet(['alpha', 'beta', 'gamma'])
      numberSet = docClient.createSet([1, 2, 3])
      wire = JSON.stringify(
        Item:
          name:
            M:
              first: S: 'foo'
              last: S: 'bar'
              aliases: SS: [
                'alpha',
                'beta',
                'gamma'
              ]
              scores:
                L:[
                  {NS: ['1', '2', '3']},
                  {NS: ['1', '2', '3']},
                  {NS: ['1', '2', '3']}
                ]
      )
      output = Item:
        name:
          first: 'foo'
          last: 'bar'
          aliases: stringSet
          scores: [
            numberSet,
            numberSet,
            numberSet
          ]
      helpers.mockHttpResponse 200, {}, wire
      docClient.get {Key: foo: 1}, (err, data) ->
        expect(data).to.eql(output)
        done()

  describe 'response.nextPage', ->

    client = null; response = null; request = null

    beforeEach ->
      client = new AWS.DynamoDB.DocumentClient({paramValidation: false})
      request = client.query({ExpressionAttributeValues: { foo: 'bar' }})
      response = request.response

    fill = (err, data) ->
      request.emit('validate', [request])
      response.error = err
      response.data = data

    it 'returns null if there are no more pages', ->
      fill(null, {})
      expect(response.nextPage()).to.equal(null)

    it 'returns a request object with the next page marker filled in params', ->
      fill(null, LastEvaluatedKey: { fizz: 'pop' })
      req = response.nextPage()
      expect(req.params.ExclusiveStartKey.fizz).to.equal('pop')
      expect(req.operation).to.equal(response.request.operation)

    it 'uses untranslated params', ->
      fill(null, LastEvaluatedKey: 'baz')
      req = response.nextPage()
      expect(req.params.ExpressionAttributeValues.foo).to.equal('bar')

    it 'throws error if response returned an error and there is no callback', ->
      fill(new Error('error!'), null, true)
      expect(-> response.nextPage()).to.throw('error!')

    it 'sends the request if passed with a callback', (done) ->
      helpers.mockHttpResponse 200, {}, ['']
      fill(null, LastEvaluatedKey: 'baz')
      response.nextPage (err, data) ->
        expect(err).to.equal(null)
        expect(data).to.eql({})
        done()

    it 'passes null to callback if there are no more pages', ->
      fill(null, {})
      response.nextPage (err, data) ->
        expect(err).to.equal(null)
        expect(data).to.equal(null)

    it 'passes error through if original response returned an error', ->
      fill('error!', null)
      response.nextPage (err, data) ->
        expect(err).to.equal('error!')
        expect(data).to.equal(null)
