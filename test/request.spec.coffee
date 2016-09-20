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
      ).to.throw('error')

    for evt in ['error', 'success', 'complete']
      it 'throws errors out of terminal ' + evt + ' event', ->
        helpers.mockHttpResponse 200, {}, ''
        expect(->
          req = service.makeRequest('mockMethod')
          req.on evt, -> throw new Error('error')
          req.send()
        ).to.throw('error')

    it 'propagates errors to error event', ->
      helpers.mockHttpResponse 200, {}, ''
      err = null
      expect(->
        req = service.makeRequest('mockMethod')
        req.on 'extractData', -> throw new Error('error')
        req.send((e) -> err = e)
      ).not.to.throw('error')
      expect(err.message).to.equal('error')

    it 'propagates request creation errors into response', ->
      helpers.spyOn(AWS.HttpClient, 'getInstance')
      AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
        throw new Error('XHR error')
      db = new AWS.DynamoDB
      req = db.listTables()
      req.send()
      expect(req.response.error.message).to.equal('XHR error')

  describe 'isPageable', ->
    beforeEach ->
      service = new AWS.Service apiConfig: new AWS.Model.Api
        operations: mockMethod: {}

    it 'is pageable if it has a pagination config for the operation', ->
      service.api.paginators['mockMethod'] = new AWS.Model.Paginator('mockMethod', limit_key: 'Marker')

      request = service.makeRequest('mockMethod')
      expect(request.isPageable()).to.equal(true)

    it 'is not pageable if the pagination config does not exist for the operation', ->
      expect(service.makeRequest('mockMethod').isPageable()).to.equal(false)

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

      helpers.mockResponses [
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
          expect(resps).to.eql [
            [null, {Value: 1, NextToken: 'a'}],
            [null, {Value: 2, NextToken: 'b'}],
            [null, {Value: 3, NextToken: 'c'}],
            [null, {Value: 4}],
            [null, null]
          ]
          done()

    it 'supports stopping responses if false is returned', ->
      resps = []
      service.mockMethod().eachPage (err, data) ->
        if resps.length == 2
          return false
        resps.push([err, data])
        true
      expect(resps).to.eql [
        [null, {Value: 1, NextToken: 'a'}],
        [null, {Value: 2, NextToken: 'b'}]
      ]

    it 'supports asynchronous eachPage calls', (done) ->
      resps = []
      service.mockMethod().eachPage (err, data, next) ->
        process.nextTick ->
          resps.push([err, data])
          next()

          if resps.length > 4
            expect(resps).to.eql [
              [null, {Value: 1, NextToken: 'a'}],
              [null, {Value: 2, NextToken: 'b'}],
              [null, {Value: 3, NextToken: 'c'}],
              [null, {Value: 4}],
              [null, null]
            ]
            done()

    it 'throws error from eachPage callback', ->
      try
        service.mockMethod().eachPage -> invalidCode
      catch e
        expect(e.name).to.equal('ReferenceError')

  describe 'eachItem', ->
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
                Results:
                  type: 'list'
                  member: type: 'string'
        paginators:
          mockMethod:
            input_token: 'NextToken'
            output_token: 'NextToken'
            result_key: 'Results'

    it 'performs callback on each returned item', (done) ->
      helpers.mockResponses [
        {data: Results: [{Value: 1}, {Value: 2}, {Value: 3}]}
      ]
      resps = []
      service.mockMethod().eachItem (err, data) ->
        resps.push([err, data])
        if err == null && data == null
          expect(resps).to.eql [
            [null, {Value: 1}],
            [null, {Value: 2}],
            [null, {Value: 3}],
            [null, null]
          ]
          done()

    it 'performs callback on items from multiple pages', (done) ->
      helpers.mockResponses [
        {data: {Results: [{Value: 1}, {Value: 2}], NextToken: 'a'}},
        {data: {Results: [{Value: 3}], NextToken: 'b'}},
        {data: Results: [{Value: 4}, {Value: 5}]}
      ]
      resps = []
      service.mockMethod().eachItem (err, data) ->
        resps.push([err, data])
        if err == null && data == null
          expect(resps).to.eql [
            [null, {Value: 1}],
            [null, {Value: 2}],
            [null, {Value: 3}],
            [null, {Value: 4}],
            [null, {Value: 5}],
            [null, null]
          ]
          done()

    it 'supports stopping responses if false is returned', ->
      helpers.mockResponses [
        {data: {Results: [{Value: 1}, {Value: 2}], NextToken: 'a'}},
        {data: {Results: [{Value: 3}], NextToken: 'b'}},
        {data: Results: [{Value: 4}, {Value: 5}]}
      ]
      resps = []
      service.mockMethod().eachItem (err, data) ->
        if resps.length == 2
          return false
        resps.push([err, data])

      expect(resps).to.eql [
        [null, {Value: 1}],
        [null, {Value: 2}]
      ]

    it 'passes error to callback', (done) ->
      helpers.mockResponses [
        {data: {Results: [{Value: 1}, {Value: 2}], NextToken: 'a'}},
        {error: {code: 'mockError'}, httpResponse: {statusCode: 404}}
      ]
      resps = []
      service.mockMethod().eachItem (err, data) ->
        if err
          delete err.retryDelay
        resps.push([err, data])
        if err == null && data == null
          expect(resps).to.eql [
            [null, {Value: 1}],
            [null, {Value: 2}],
            [{code: 'mockError', retryable: false, statusCode: 404}, null],
            [null, null]
          ]
          done()

  describe 'waitFor', ->
    it 'creates a ResourceWaiter object', ->
      service.api.waiters = state: operation: 'mockMethod'
      service.waitFor('state')

  describe 'send', ->
    it 'accepts an optional callback', (done) ->
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']
      service.makeRequest('mockMethod').send (err, data) ->
        expect(data).to.equal('FOOBARBAZQUX')
        done()

  describe 'abort', ->
    it 'allows aborting requests', (done) ->
      helpers.mockHttpResponse 200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']
      req = service.makeRequest('mockMethod')
      req.on 'send', (resp) -> req.abort()
      req.send (err, data) ->
        expect(data).not.to.exist
        expect(err.code).to.equal('RequestAbortedError')
        expect(err.message).to.match(/aborted by user/)
        done()

  describe 'promise', ->
    it 'exists if Promises are available', ->
      req = service.makeRequest('mockMethod')
      if typeof Promise == 'undefined'
        expect(typeof req.promise).to.equal('undefined')
      else
        expect(typeof req.promise).to.equal('function')

    it 'returns a promise when called', ->
      P = ->
      AWS.config.setPromisesDependency(P)
      req = service.makeRequest('mockMethod')
      expect(typeof req.promise).to.equal('function')
      promise = req.promise()
      expect(promise instanceof P).to.equal(true)

  if AWS.util.isNode()
    describe 'createReadStream', ->
      nstream = require('stream')
      streamsApiVersion = AWS.HttpClient.streamsApiVersion
      app = undefined; data = undefined; error = undefined

      getport = (cb, startport) ->
        port = startport or 45678
        srv = require('net').createServer()
        srv.on 'error', -> getport(cb, port + 1)
        srv.listen port, ->
          srv.once 'close', -> cb(port)
          srv.close()

      server = require('http').createServer (req, resp) ->
        app(req, resp)

      beforeEach (done) ->
        data = ''; error = null

        server.setTimeout(1)

        app = (req, resp) ->
          resp.writeHead(200, {})
          resp.write('FOOBARBAZQUX')
          resp.end()

        getport (port) ->
          server.listen(port)
          service = new MockService(endpoint: 'http://localhost:' + port)
          done()

      afterEach ->
        AWS.HttpClient.streamsApiVersion = streamsApiVersion
        server.close()

      it 'streams data', (done) ->
        AWS.HttpClient.streamsApiVersion = 1

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          # should fail because 'error' should not be emitted
          expect(error).to.be.null
        s.on 'data', (c) -> data += c.toString()
        s.on 'end', ->
          expect(error).to.be.null
          expect(data).to.equal('FOOBARBAZQUX')
          done()

      it 'succeeds when stream length matches content-length header', (done) ->
        AWS.HttpClient.streamsApiVersion = 1

        app = (req, resp) ->
          resp.writeHead(200, {'content-length': '12'})
          resp.write('FOOBARBAZQUX')
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          # should fail because 'error' should not be emitted
          expect(error).to.be.null
        s.on 'data', (c) -> data += c.toString()
        s.on 'end', ->
          expect(error).to.be.null
          expect(data).to.equal('FOOBARBAZQUX')
          done()

      it 'emits error when stream length is less than content-length header', (done) ->
        AWS.HttpClient.streamsApiVersion = 1

        app = (req, resp) ->
          resp.writeHead(200, {'content-length': '13'})
          resp.write('FOOBARBAZQUX')
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'data', (c) -> data += c.toString()
        s.on 'end', (a) ->
          # will fail if 'error' was not emitted
          expect(error).to.not.be.null
        s.on 'error', (e) ->
          error = e
          expect(error).to.not.be.null
          expect(error.code).to.equal('StreamContentLengthMismatch')
          expect(data).to.equal('FOOBARBAZQUX')
          done()

      it 'only accepts data up to the specified content-length', (done) ->
        AWS.HttpClient.streamsApiVersion = 1

        app = (req, resp) ->
          resp.writeHead(200, {'content-length': '11'})
          resp.write('FOOBARBAZQUX')
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          # should fail because 'error' should not be emitted
          expect(error).to.be.null
        s.on 'data', (c) -> data += c.toString()
        s.on 'end', ->
          expect(error).to.be.null
          expect(data).to.equal('FOOBARBAZQU')
          done()

      it 'streams2 data (readable event)', (done) ->
        if AWS.HttpClient.streamsApiVersion < 2
          return done()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          # should fail because 'error' should not be emitted
          expect(error).to.be.null
        s.on 'end', ->
          expect(error).to.be.null
          expect(data).to.equal('FOOBARBAZQUX')
          done()
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      it 'succeeds when streams2 length matches content-length header', (done) ->
        if AWS.HttpClient.streamsApiVersion < 2
          return done()

        app = (req, resp) ->
          resp.writeHead(200, {'content-length': '12'})
          resp.write('FOOBARBAZQUX')
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          # should fail because 'error' should not be emitted
          expect(error).to.be.null
        s.on 'end', ->
          expect(error).to.be.null
          expect(data).to.equal('FOOBARBAZQUX')
          done()
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      it 'emits error when streams2 length is less than content-length header', (done) ->
        if AWS.HttpClient.streamsApiVersion < 2
          return done()

        app = (req, resp) ->
          resp.writeHead(200, {'content-length': '13'})
          resp.write('FOOBARBAZQUX')
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          expect(error).to.not.be.null
          expect(error.code).to.equal('StreamContentLengthMismatch')
          expect(data).to.equal('FOOBARBAZQUX')
          done()
        s.on 'end', ->
          # will fail if 'error' was not emitted
          expect(error).to.not.be.null
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      it 'only accepts data up to the specified content-length', (done) ->
        if AWS.HttpClient.streamsApiVersion < 2
          return done()

        app = (req, resp) ->
          resp.writeHead(200, {'content-length': '11'})
          resp.write('FOOBARBAZQUX')
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          # should fail because 'error' should not be emitted
          expect(error).to.be.null
        s.on 'end', ->
          expect(error).to.be.null
          expect(data).to.equal('FOOBARBAZQU')
          done()
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      it 'does not stream data on failures', (done) ->
        AWS.HttpClient.streamsApiVersion = 1
        app = (req, resp) ->
          resp.writeHead(404, {})
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          expect(error).to.not.be.null
          expect(error.statusCode).to.equal(404)
          expect(data).to.equal('')
          done()
        s.on 'end', ->
          # will fail if 'error' not emitted
          expect(error).to.not.be.null
        s.on 'data', (c) -> data += c.toString()

      it 'does not stream data on failures for streams2', (done) ->
        if AWS.HttpClient.streamsApiVersion < 2
          return done()

        app = (req, resp) ->
          resp.writeHead(404, {})
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) ->
          error = e
          expect(error).to.not.be.null
          expect(error.statusCode).to.equal(404)
          expect(data).to.equal('')
          done()
        s.on 'end', ->
          # will fail if 'error' not emitted
          expect(error).to.not.be.null
        s.on 'readable', ->
          try
            chunk = s.read()
            if chunk
              data += chunk
          catch e
            console.log(e.stack)

      it 'retries temporal errors and streams resulting successful response', (done) ->
        server.setTimeout(1000)
        errs = 0
        app = (req, resp) ->
          status = if errs < 2 then 500 else 200
          errs += 1
          resp.writeHead(status, {})
          if status == 200
            resp.write('FOOBARBAZQUX')
          else
            resp.write('SOME_ERROR')
          resp.end()

        request = service.makeRequest('mockMethod')
        s = request.createReadStream()
        s.on 'error', (e) -> error = e
        s.on 'data', (c) -> data += c.toString()
        request.on 'complete', ->
          expect(error).to.be.null
          expect(data).to.equal('FOOBARBAZQUX')
          done()

      it 'streams partial data and raises an error', (done) ->
        reqError = null
        helpers.spyOn(AWS.HttpClient, 'getInstance')
        AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
          req = new EventEmitter()
          if AWS.HttpClient.streamsApiVersion == 2
            req = new nstream.PassThrough()
          req.statusCode = 200
          req.headers = {}
          process.nextTick ->
            cb(req)
            req.emit('headers', 200, {})
            AWS.util.arrayEach ['FOO', 'BAR', 'BAZ'], (str) ->
              if AWS.HttpClient.streamsApiVersion < 2
                process.nextTick ->  req.emit 'data', new Buffer(str)
              else
                req.push(new Buffer(str))
                process.nextTick -> req.emit 'readable'
            process.nextTick -> errCb new Error('fail')
          req

        request = service.makeRequest('mockMethod')
        request.on 'error', (e) -> reqError = e
        request.on 'complete', ->
          expect(data).to.equal('FOOBARBAZ')
          expect(error.message).to.equal('fail')
          expect(reqError.message).to.equal('fail')
          done()

        s = request.createReadStream()
        s.on 'error', (e) -> error = e
        s.on 'data', (c) -> data += c.toString()

      it 'fails if retry occurs in the middle of a successful stream', (done) ->
        reqError = null; resp = null
        retryCount = 0
        helpers.spyOn(AWS.HttpClient, 'getInstance')
        AWS.HttpClient.getInstance.andReturn handleRequest: (req, opts, cb, errCb) ->
          req = new EventEmitter()
          if AWS.HttpClient.streamsApiVersion == 2
            req = new nstream.PassThrough()
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
                if AWS.HttpClient.streamsApiVersion == 2
                  req.push(new Buffer(str))
                  process.nextTick -> req.emit 'readable'
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
          expect(data).to.equal('FOOBAR')
          expect(error.code).to.equal('NetworkingError')
          expect(reqError.code).to.equal('NetworkingError')
          expect(reqError.hostname).to.equal('localhost')
          expect(reqError.region).to.equal('mock-region')
          expect(resp.retryCount).to.equal(0)
          done()

  if AWS.util.isNode()
    describe 'domain support', ->
      domain = null
      beforeEach -> domain = require('domain').create()

      it 'supports domains', ->
        helpers.mockHttpResponse 200, {}, 'Success!'

        thrown = null
        domain.on 'error', (err) -> thrown = err
        domain.run ->
          service = new helpers.MockService()
          service.makeRequest 'operationName', ->
            invalidCode

        expect(thrown.name).to.equal('ReferenceError')
