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
      it 'emits error event', (done) ->
        req = new AWS.HttpRequest 'http://invalid'
        http.handleRequest req, {}, null, (err) ->
          expect(err.code).toEqual 'ENOTFOUND'
          done()

      it 'supports timeout in httpOptions', ->
        numCalls = 0
        req = new AWS.HttpRequest 'http://1.1.1.1'
        http.handleRequest req, {timeout: 1}, null, (err) ->
          numCalls += 1
          expect(err.code).toEqual 'TimeoutError'
          expect(err.message).toEqual 'Connection timed out after 1ms'
          expect(numCalls).toEqual 1
