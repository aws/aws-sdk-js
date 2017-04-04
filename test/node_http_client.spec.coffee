helpers = require('./helpers')
AWS = helpers.AWS
EventEmitter = require('events').EventEmitter
httpModule = require('http')

if AWS.util.isNode()
  describe 'AWS.NodeHttpClient', ->
    http = new AWS.NodeHttpClient()

    describe 'maxSockets delegation', ->
      it 'delegates maxSockets from agent to globalAgent', ->
        https = require('https')
        agent = http.sslAgent()
        https.globalAgent.maxSockets = 5
        expect(https.globalAgent.maxSockets).to.equal(agent.maxSockets)
        https.globalAgent.maxSockets += 1
        expect(https.globalAgent.maxSockets).to.equal(agent.maxSockets)

      it 'overrides globalAgent value if global is set to Infinity', ->
        https = require('https')
        agent = http.sslAgent()
        https.globalAgent.maxSockets = Infinity
        expect(agent.maxSockets).to.equal(50)

      it 'overrides globalAgent value if global is set to false', ->
        https = require('https')
        oldGlobal = https.globalAgent
        https.globalAgent = false
        agent = http.sslAgent()
        expect(agent.maxSockets).to.equal(50)
        https.globalAgent = oldGlobal

    describe 'handleRequest', ->
      it 'emits error event', (done) ->
        req = new AWS.HttpRequest 'http://invalid'
        http.handleRequest req, {}, null, (err) ->
          expect(err.code).to.equal('ENOTFOUND')
          done()

      it 'supports timeout in httpOptions', ->
        numCalls = 0
        req = new AWS.HttpRequest 'http://1.1.1.1'
        http.handleRequest req, {timeout: 1}, null, (err) ->
          numCalls += 1
          expect(err.code).to.equal('TimeoutError')
          expect(err.message).to.equal('Connection timed out after 1ms')
          expect(numCalls).to.equal(1)

      it 'supports connectTimeout in httpOptions', ->
        numCalls = 0
        req = new AWS.HttpRequest 'http://1.1.1.1'
        http.handleRequest req, {connectTimeout: 1}, null, (err) ->
          numCalls += 1
          expect(err.code).to.equal('TimeoutError')
          expect(err.message).to.equal('Socket timed out without establishing a connection')
          expect(numCalls).to.equal(1)

      describe 'connectTimeout', ->
        timeoutId = 'TIMEOUT_ID'
        oldSetTimeout = global.setTimeout
        oldClearTimeout = global.clearTimeout
        setTimeoutSpy = null
        clearTimeoutSpy = null

        oldRequest = httpModule.request
        requestSpy = null
        mockClientRequest = null

        beforeEach ->
          setTimeoutSpy = helpers.spyOn(global, 'setTimeout')
            .andReturn(timeoutId)
          clearTimeoutSpy = helpers.spyOn(global, 'clearTimeout')
            .andCallFake(() -> {})
          mockClientRequest = new EventEmitter()
          mockClientRequest.setTimeout = () -> {}
          mockClientRequest.end = () -> {}
          requestSpy = helpers.spyOn(httpModule, 'request')
            .andReturn(mockClientRequest)

        afterEach ->
          global.setTimeout = oldSetTimeout
          global.clearTimeout = oldClearTimeout
          httpModule.request = oldRequest

        it 'clears timeouts once the connection has been established', ->
          req = new AWS.HttpRequest 'http://1.1.1.1'
          http.handleRequest req, {connectTimeout: 120000}, null, () -> {}

          mockSocket = new EventEmitter()
          mockSocket.connecting = true;
          mockClientRequest.emit('socket', mockSocket)
          expect(setTimeoutSpy.calls.length).to.equal(1)
          mockSocket.emit('connect')
          expect(clearTimeoutSpy.calls.length).to.equal(1)
          expect(clearTimeoutSpy.calls[0].arguments[0]).to.equal(timeoutId)
