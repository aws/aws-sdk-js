helpers = require('../helpers')
AWS = helpers.AWS
Buffer = AWS.util.Buffer

if AWS.util.isNode()
  describe 'AWS.Glacier', ->

    glacier = null
    beforeEach ->
      glacier = new AWS.Glacier()

    describe 'building requests', ->
      it 'sets accountId to "-" if not set', ->
        req = glacier.listVaults()
        req.emit('validate', [req])
        req.emit('build', [req])
        expect(req.httpRequest.path).toEqual('/-/vaults')

      it 'will not override accountId if set', ->
        req = glacier.listVaults(accountId: 'ABC123')
        req.emit('validate', [req])
        req.emit('build', [req])
        expect(req.httpRequest.path).toEqual('/ABC123/vaults')

    describe 'computeChecksums', ->
      it 'returns correct linear and tree hash for buffer data', ->
        # compute a 5.5 megabyte chunk of data filled with '0' string (0 byte)
        # expected values taken from AWS SDK for Ruby
        data = new Buffer(1024 * 1024 * 5.5)
        data.fill('0')

        expected =
          linearHash: '68aff0c5a91aa0491752bfb96e3fef33eb74953804f6a2f7b708d5bcefa8ff6b',
          treeHash: '154e26c78fd74d0c2c9b3cc4644191619dc4f2cd539ae2a74d5fd07957a3ee6a'

        expect(glacier.computeChecksums(data)).toEqual(expected)

    describe 'initiateJob', ->
      it 'correctly builds the request', ->
        helpers.mockHttpResponse 200, {}, ''
        params =
          vaultName: 'vault-name'
          jobParameters:
            Format: 'foo'
            Type: 'bar'
        glacier.initiateJob params, (err, data) ->
          req = this.request.httpRequest
          expect(req.path).toEqual('/-/vaults/vault-name/jobs')
          expect(req.body).toEqual('{"Format":"foo","Type":"bar"}')

    describe 'uploadArchive', ->
      it 'passes the body along', ->
        helpers.mockHttpResponse 200, {}, ''
        params =
          vaultName: 'vault-name'
          body: 'abc'
        glacier.uploadArchive params, (err, data) ->
          req = this.request.httpRequest
          expect(req.method).toEqual('POST')
          expect(req.path).toEqual('/-/vaults/vault-name/archives')
          expect(req.body).toEqual('abc')
