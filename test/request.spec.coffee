helpers = require('./helpers')
EventEmitter = require('events').EventEmitter
AWS = helpers.AWS
MockService = helpers.MockService
Buffer = AWS.util.Buffer

describe 'AWS.Request', ->
  service = null
  beforeEach ->
    service = new MockService

  describe 'error handling', ->
    it 'throws errors out of callback', ->
      helpers.mockHttpResponse 200, {}, ''
      expect(->
        service.makeRequest 'mockMethod', ->
          throw new Error('error')
      ).toThrow('error')

    for evt in ['error', 'success', 'complete']
      it 'throws errors out of terminal ' + evt + ' event', ->
        helpers.mockHttpResponse 200, {}, ''
        expect(->
          req = service.makeRequest('mockMethod')
          req.on evt, -> throw new Error('error')
          req.send()
        ).toThrow('error')

    it 'propagates errors to error event', ->
      helpers.mockHttpResponse 200, {}, ''
      err = null
      expect(->
        req = service.makeRequest('mockMethod')
        req.on 'extractData', -> throw new Error('error')
        req.send((e) -> err = e)
      ).not.toThrow('error')
      expect(err.message).toEqual('error')

  describe 'isPageable', ->
    beforeEach ->
      service = new AWS.Service apiConfig: new AWS.Model.Api
        operations: mockMethod: {}

    it 'is pageable if it has a pagination config for the operation', ->
      service.api.paginators['mockMethod'] = new AWS.Model.Paginator('mockMethod', limit_key: 'Marker')

      request = service.makeRequest('mockMethod')
      expect(request.isPageable()).toEqual(true)

    it 'is not pageable if the pagination config does not exist for the operation', ->
      expect(service.makeRequest('mockMethod').isPageable()).toEqual(false)

  describe 'eachPage', ->
    beforeEach ->
      service = new AWS.Service apiConfig: new AWS.Model.Api
        operations:
          mockMethod:
            input:
              type: 'structure'
              members:
                NextToken: type: 'string'
            output:
              type: 'structure'
              members:
                NextToken: type: 'string'
                Value: type: 'integer'
        paginators:
          mockMethod:
            input_token: 'NextToken'
            output_token: 'NextToken'

      helpers.mockResponses service, [
        {data: {Value: 1, NextToken: 'a'}},
        {data: {Value: 2, NextToken: 'b'}},
        {data: {Value: 3, NextToken: 'c'}},
        {data: {Value: 4}}
      ]

    it 'can page multiple responses', (done) ->
      resps = []
      service.mockMethod().eachPage (err, data) ->
        resps.push([err, data])
        if err == null && data == null
          expect(resps).toEqual [
            [null, {Value: 1, NextToken: 'a'}],
            [null, {Value: 2, NextToken: 'b'}],
            [null, {Value: 3, NextToken: 'c'}],
            [null, {Value: 4}],
            [null, null]
          ]
          done()

    it 'supports asynchronous eachPage calls', (done) ->
      resps = []
      service.mockMethod().eachPage (err, data, next) ->
        process.nextTick ->
          if resps.length == 2
            return false
          resps.push([err, data])
          if err == null && data == null
            expect(resps).toEqual [
              [null, {Value: 1, NextToken: 'a'}],
              [null, {Value: 2, NextToken: 'b'}],
              [null, {Value: 3, NextToken: 'c'}],
              [null, {Value: 4}],
              [null, null]
            ]
            done()
          next()

    it 'throws error from eachPage callback', ->
      try
        service.mockMethod().eachPage -> invalidCode
      catch e
        expect(e.name).toEqual('ReferenceError')

  describe 'waitFor', ->
    it 'creates a ResourceWaiter object', ->
      service.api.waiters = state: operation: 'mockMethod'
      service.waitFor('state')

  describe 'send', ->
    it 'accepts an optional callback', (done) ->
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']
      service.makeRequest('mockMethod').send (err, data) ->
        expect(data).toEqual('FOOBARBAZQUX')
        done()

  describe 'abort', ->
    it 'allows aborting requests', (done) ->
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']
      req = service.makeRequest('mockMethod')
      req.on 'send', (resp) -> req.abort()
      req.send (err, data) ->
        expect(data).toEqual(null)
        expect(err.code).toEqual('RequestAbortedError')
        expect(err.message).toMatch(/aborted by user/)
        done()

  if AWS.util.isNode()
    describe 'createReadStream', ->
      it 'streams data', (done) ->
        data = ''
        helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', -> done = true
        s.on 'data', (c) -> data += c.toString()
        request.on 'complete', ->
          expect(data).toEqual('FOOBARBAZQUX')
          done()

      it 'streams2 data (readable event)', (done) ->
        if AWS.HttpClient.streamsApiVersion < 2
          return

        data = ''
        helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']
        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', ->
          expect(data).toEqual('FOOBARBAZQUX')
          done()
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      it 'streams2 data does not hang out while waiting response', (done) ->
        if AWS.HttpClient.streamsApiVersion < 2
          return

        data = ''
        helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', null, null, 'BAZ', 'QUX']
        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'end', ->
          expect(data).toEqual('FOOBARBAZQUX')
          done()
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      it 'does not stream data on failures', (done) ->
        data = ''; error = null
        helpers.mockHttpResponse 404, {}, ['No such file']
        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (error) ->
          expect(data).toEqual('')
          expect(error.statusCode).toEqual(404)
          done()
        s.on 'data', (c) -> data += c.toString()

      it 'retries temporal errors and streams resulting successful response', (done) ->
        data = ''; error = null
        helpers.mockIntermittentFailureResponse 2, 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) -> error = e
        s.on 'data', (c) -> data += c.toString()
        request.on 'complete', ->
          expect(data).toEqual('FOOBARBAZQUX')
          expect(error).toEqual(null)
          done()

      it 'streams partial data and raises an error', (done) ->
        data = ''; error = null; reqError = null
        helpers.spyOn(AWS.HttpClient, 'getInstance')
        AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
          req = new EventEmitter()
          req.statusCode = 200
          req.headers = {}
          cb(req)
          req.emit('headers', 200, {})
          AWS.util.arrayEach ['FOO', 'BAR', 'BAZ'], (str) ->
            req.emit 'data', new Buffer(str)
          errCb new Error('fail')
          req

        request = service.makeRequest('mockMethod')
        request.on 'error', (e) -> reqError = e
        request.on 'complete', ->
          expect(data).toEqual('FOOBARBAZ')
          expect(error.message).toEqual('fail')
          expect(reqError.message).toEqual('fail')
          done()

        s = request.createReadStream()
        s.on 'error', (e) -> error = e
        s.on 'data', (c) -> data += c.toString()

      it 'fails if retry occurs in the middle of a failing stream', (done) ->
        data = ''; error = null; reqError = null; resp = null
        retryCount = 0
        helpers.spyOn(AWS.HttpClient, 'getInstance')
        AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
          req = new EventEmitter()
          req.statusCode = 200
          req.headers = {}
          process.nextTick ->
            cb(req)
            req.emit('headers', 200, {})
            AWS.util.arrayEach ['FOO', 'BAR', 'BAZ', 'QUX'], (str) ->
              if str == 'BAZ' and retryCount < 1
                process.nextTick ->
                  retryCount += 1
                  errCb code: 'NetworkingError', message: 'FAIL!', retryable: true
                return AWS.util.abort
              else
                process.nextTick -> req.emit 'data', new Buffer(str)
            if retryCount >= 1
              process.nextTick -> req.emit('end')
          req

        request = service.makeRequest('mockMethod')
        request.on 'error', (e) -> reqError = e
        request.on 'complete', (r) -> resp = r
        s = request.createReadStream()
        s.on 'error', (e) -> error = e
        s.on 'data', (c) -> data += c.toString()
        request.on 'complete', ->
          expect(data).toEqual('FOOBAR')
          expect(error.code).toEqual('NetworkingError')
          expect(reqError.code).toEqual('NetworkingError')
          expect(reqError.hostname).toEqual('mockservice.mock-region.amazonaws.com')
          expect(reqError.region).toEqual('mock-region')
          expect(resp.retryCount).toEqual(0)
          done()
