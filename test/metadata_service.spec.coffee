helpers = require('./helpers')
url = require('url')
http = require('http')
AWS = helpers.AWS

if AWS.util.isNode()
  describe 'AWS.MetadataService', ->
    describe 'loadCredentials', ->
      [server, port, service] = [null, 1024 + parseInt(Math.random() * 100), null]

      beforeEach ->
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

      it 'should load credentials from metadata service', ->
        [err, data] = [null, null]
        runs ->
          service.loadCredentials (e, d) -> [err, data] = [e, d]
        waitsFor -> err || data
        runs ->
          expect(err).toBe(null)
          expect(data.Code).toEqual('Success')
          expect(data.AccessKeyId).toEqual('KEY')
          expect(data.SecretAccessKey).toEqual('SECRET')
          expect(data.Token).toEqual('TOKEN')

      it 'should fail if server is not up', ->
        server.close(); server = null
        service = new AWS.MetadataService(host: '255.255.255.255')
        service.httpOptions.timeout = 10
        [err, data] = [null, null]
        runs ->
          service.loadCredentials (e, d) -> [err, data] = [e, d]
        waitsFor -> err || data
        runs ->
          expect(err instanceof Error).toBe(true)
          expect(data).toEqual(null)
