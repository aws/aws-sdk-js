helpers = require('./helpers')
url = require('url')
http = require('http')
AWS = helpers.AWS

if AWS.util.isNode()
  describe 'AWS.MetadataService', ->
    describe 'loadCredentials', ->
      [server, port, service, forceTimeout] = [null, 1024 + parseInt(Math.random() * 100), null, null]
      httpClient = AWS.HttpClient.getInstance()

      beforeEach ->
        forceTimeout = false
        helpers.spyOn(http.ClientRequest.prototype, 'setTimeout').andCallFake (timeout, cb) ->
          if forceTimeout
            process.nextTick(cb)
        service = new AWS.MetadataService(host: '127.0.0.1:' + port)
        server = http.createServer (req, res) ->
          re = new RegExp('^/latest/meta-data/iam/security-credentials/(.*)$')
          match = url.parse(req.url).pathname.match(re)
          if match
            res.writeHead(200, 'Content-Type': 'text/plain')
            if match[1] == ''
              res.write('TestingRole\n')
              res.write('TestingRole2\n')
            else
              data = '{"Code":"Success","AccessKeyId":"KEY","SecretAccessKey":"SECRET","Token":"TOKEN"}'
              res.write(data)
          else
            res.writeHead(404, {})
          res.end()

        server.listen(port)

      afterEach -> server.close() if server

      it 'should load credentials from metadata service', (done) ->
        service.loadCredentials (err, data) ->
          expect(err).to.equal(null)
          expect(data.Code).to.equal('Success')
          expect(data.AccessKeyId).to.equal('KEY')
          expect(data.SecretAccessKey).to.equal('SECRET')
          expect(data.Token).to.equal('TOKEN')
          done()


      it 'should load credentials from metadata service', (done) ->
        concurrency = countdown = 10
        for x in [1..concurrency]
          service.loadCredentials (err, data) ->
            expect(err).to.equal(null)
            expect(data.Code).to.equal('Success')
            expect(data.AccessKeyId).to.equal('KEY')
            expect(data.SecretAccessKey).to.equal('SECRET')
            expect(data.Token).to.equal('TOKEN')
            countdown--
            if countdown == 0
              done()

      it 'should fail if server is not up', (done) ->
        server.close(); server = null
        service = new AWS.MetadataService(host: '255.255.255.255')
        service.httpOptions.timeout = 10
        service.loadCredentials (err, data) ->
          expect(err).to.be.instanceOf(Error)
          expect(data).not.to.exist
          done()

      it 'should retry when request times out', (done) ->
        options = {
          host: '127.0.0.1:' + port,
          maxRetries: 5
        }

        firstTry = true
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallFake ->
          if firstTry
            forceTimeout = true
            firstTry = false
          else
            forceTimeout = false
          return spy.origMethod.apply(httpClient, arguments)

        service = new AWS.MetadataService(options)
        service.loadCredentials (err, data) ->
          expect(err).to.be.null
          expect(data.AccessKeyId).to.equal('KEY')
          # 2 successful calls to retrieve credentials + 1 timeout
          expect(spy.calls.length).to.equal(3)
          done()

      it 'should retry up to the specified maxRetries when requests time out', (done) ->
        options = {
          host: '127.0.0.1:' + port,
          maxRetries: 5
        }
        forceTimeout = true
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallThrough()

        service = new AWS.MetadataService(options)
        service.loadCredentials (err, data) ->
          expect(data).to.be.undefined
          expect(err).to.not.be.null
          expect(err.code).to.equal('TimeoutError')
          # 1st failed try + 5 retries
          expect(spy.calls.length).to.equal(6)
          done()

      it 'makes only one pair of requests when multiple calls are made before first one finishes', (done) ->
        options = {host: '127.0.0.1:' + port}
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallThrough()
        concurrency = countdown = 10
        services = []
        for x in [1..concurrency]
          services[x - 1] = new AWS.MetadataService(options)
          services[x - 1].loadCredentials (err, data) ->
            expect(err).to.equal(null)
            expect(data.AccessKeyId).to.equal('KEY')
            countdown--
            if countdown == 0
              expect(spy.calls.length).to.equal(2)
              done()
