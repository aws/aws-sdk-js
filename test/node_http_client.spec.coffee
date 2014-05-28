helpers = require('./helpers')
AWS = helpers.AWS

if AWS.util.isNode()
  describe 'AWS.NodeHttpClient', ->
    http = new AWS.NodeHttpClient()

    describe 'maxSockets delegation', ->
      it 'delegates maxSockets from agent to globalAgent', ->
        https = require('https')
        agent = http.sslAgent()
        expect(https.globalAgent.maxSockets).toEqual(agent.maxSockets)
        https.globalAgent.maxSockets += 1
        expect(https.globalAgent.maxSockets).toEqual(agent.maxSockets)

    describe 'handleRequest', ->
      it 'emits error event', ->
        error = null
        req = new AWS.HttpRequest 'http://invalid'
        runs ->
          http.handleRequest req, {}, null, (err) ->
            error = err
        waitsFor -> error
        runs ->
          expect(error.code).toEqual 'ENOTFOUND'

      it 'supports timeout in httpOptions', ->
        error = null
        numCalls = 0
        req = new AWS.HttpRequest 'http://1.1.1.1'
        runs ->
          http.handleRequest req, {timeout: 1}, null, (err) ->
            error = err
            numCalls += 1

        waitsFor((-> error), 'Timed out', 100)
        runs ->
          expect(error.code).toEqual 'TimeoutError'
          expect(error.message).toEqual 'Connection timed out after 1ms'
          #expect(numCalls).toEqual 1
