helpers = require('../helpers')
AWS = helpers.AWS

body = (size) ->
  try
    return new Blob((0 for i in [0...size]))
  catch e
    return new AWS.util.Buffer(size)

smallbody = body(5)
bigbody = body(36)
zerobody = body(0)

describe 'AWS.S3.ManagedUpload', ->
  s3 = new AWS.S3 maxRetries: 0, params: { Bucket: 'bucket', Key: 'key' }
  [err, data, upload, minPartSize] = []
  beforeEach ->
    minPartSize = AWS.S3.ManagedUpload.minPartSize
    AWS.S3.ManagedUpload.prototype.minPartSize = 10
    [err, data] = []
    helpers.spyOn(AWS.S3.prototype, 'extractError').andReturn(->)
    upload = null

  afterEach ->
    AWS.S3.ManagedUpload.prototype.minPartSize = minPartSize

  send = (params, cb) ->
    if !upload
      upload = new AWS.S3.ManagedUpload(service: s3, params: params)
    upload.send (e, d) ->
      [err,data] = [e,d]
      cb() if cb

  describe 'send', ->
    it 'default callback throws', ->
      helpers.mockResponses [ error: new Error('ERROR') ]
      upload = new AWS.S3.ManagedUpload({params: {Body: 'body'}})
      expect(-> upload.send()).to.throw('ERROR')

    it 'fails if Body is not passed', ->
      expect(-> send()).to.throw('params.Body is required')

    it 'fails if Body is unknown type', ->
      send(Body: 2)
      expect(err.message).to.match(/Unsupported body payload number/)

    it 'converts string body to Buffer', ->
      reqs = helpers.mockResponses [
        data: ETag: 'ETAG'
      ]
      send(Body: 'string')
      expect(data.ETag).to.equal('ETAG')

    it 'uses a default service object if none provided', ->
      expect(-> new AWS.S3.ManagedUpload()).to.throw('params.Body is required')

    it 'uploads a single part if size is less than min multipart size', (done) ->
      reqs = helpers.mockResponses [
        data: ETag: 'ETAG'
      ]

      send Body: smallbody, ContentEncoding: 'encoding', ->
        expect(err).not.to.exist
        expect(data.ETag).to.equal('ETAG')
        expect(data.Location).to.equal('https://bucket.s3.mock-region.amazonaws.com/key')
        expect(helpers.operationsForRequests(reqs)).to.eql ['s3.putObject']
        expect(reqs[0].params.ContentEncoding).to.equal('encoding')
        done()

    it 'can not use provided ContentMD5 for a multipart upload', (done) ->
      send Body: bigbody, ContentMD5: 'MD5HASH', ->
        expect(data).not.to.exist
        expect(err.code).to.equal('InvalidDigest')
        done()

    it 'can use provided ContentMD5 for single part upload', (done) ->
      reqs = helpers.mockResponses [
        data: ETag: 'ETAG'
      ]

      send Body: smallbody, ContentMD5: 'MD5HASH', ->
        expect(err).not.to.exist
        expect(data.ETag).to.equal('ETAG')
        expect(helpers.operationsForRequests(reqs)).to.eql ['s3.putObject']
        done()

    it 'can fail a single part', ->
      reqs = helpers.mockResponses [
        data: null
        error: new Error('ERROR')
      ]
      send(Body: 'string')
      expect(data).not.to.exist
      expect(err.message).to.equal('ERROR')

    it 'uploads multipart if size is greater than min multipart size', (done) ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { data: ETag: 'ETAG2' }
        { data: ETag: 'ETAG3' }
        { data: ETag: 'ETAG4' }
        { data: ETag: 'FINAL_ETAG', Location: 'FINAL_LOCATION' }
      ]

      send Body: bigbody, ContentEncoding: 'encoding', ->
        expect(helpers.operationsForRequests(reqs)).to.eql [
          's3.createMultipartUpload'
          's3.uploadPart'
          's3.uploadPart'
          's3.uploadPart'
          's3.uploadPart'
          's3.completeMultipartUpload'
        ]
        expect(err).not.to.exist
        expect(data.ETag).to.equal('FINAL_ETAG')
        expect(data.Location).to.equal('FINAL_LOCATION')
        expect(reqs[0].params).to.eql(Bucket: 'bucket', Key: 'key', ContentEncoding: 'encoding')
        expect(reqs[1].params.ContentLength).to.equal(10)
        expect(reqs[1].params.UploadId).to.equal('uploadId')
        expect(reqs[2].params.UploadId).to.equal('uploadId')
        expect(reqs[2].params.ContentLength).to.equal(10)
        expect(reqs[3].params.UploadId).to.equal('uploadId')
        expect(reqs[3].params.ContentLength).to.equal(10)
        expect(reqs[4].params.UploadId).to.equal('uploadId')
        expect(reqs[4].params.ContentLength).to.equal(6)
        expect(reqs[5].params.UploadId).to.equal('uploadId')
        expect(reqs[5].params.MultipartUpload.Parts).to.eql [
          { ETag: 'ETAG1', PartNumber: 1 }
          { ETag: 'ETAG2', PartNumber: 2 }
          { ETag: 'ETAG3', PartNumber: 3 }
          { ETag: 'ETAG4', PartNumber: 4 }
        ]
        done()

    it 'aborts if ETag is not in response', (done) ->
      helpers.spyOn(AWS.util, 'isBrowser').andReturn true
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: {} }
        { data: {} }
      ]

      send Body: bigbody, ->
        expect(helpers.operationsForRequests(reqs)).to.eql [
          's3.createMultipartUpload'
          's3.uploadPart'
          's3.abortMultipartUpload'
        ]
        expect(err).to.exist
        expect(err.message).to.equal('No access to ETag property on response. Check CORS configuration to expose ETag header.')
        done()

    it 'allows changing part size', (done) ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { data: ETag: 'ETAG2' }
        { data: ETag: 'FINAL_ETAG', Location: 'FINAL_LOCATION' }
      ]

      size = 18
      opts = partSize: size, queueSize: 1, service: s3, params: {Body: bigbody}
      upload = new AWS.S3.ManagedUpload(opts)
      send {}, ->
        expect(helpers.operationsForRequests(reqs)).to.eql [
          's3.createMultipartUpload'
          's3.uploadPart'
          's3.uploadPart'
          's3.completeMultipartUpload'
        ]
        expect(err).not.to.exist
        expect(data.ETag).to.equal('FINAL_ETAG')
        expect(data.Location).to.equal('FINAL_LOCATION')
        expect(reqs[1].params.ContentLength).to.equal(size)
        expect(reqs[2].params.ContentLength).to.equal(size)
        done()

    it 'supports zero-byte body buffers', (done) ->
      reqs = helpers.mockResponses [data: ETag: 'ETAG']
      upload = new AWS.S3.ManagedUpload params: { Body: zerobody }
      upload.send ->
        expect(helpers.operationsForRequests(reqs)).to.eql ['s3.putObject']
        expect(err).not.to.exist
        done()

    it 'errors if partSize is smaller than minPartSize', ->
      expect(-> new AWS.S3.ManagedUpload(partSize: 5)).to.throw(
        'partSize must be greater than 10')

    it 'aborts if uploadPart fails', (done) ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { error: { code: 'UploadPartFailed' }, data: null }
        { data: {}, error: null }
      ]

      upload = new AWS.S3.ManagedUpload(queueSize: 1, params: {Body: bigbody})
      send {}, ->
        expect(helpers.operationsForRequests(reqs)).to.eql [
          's3.createMultipartUpload'
          's3.uploadPart'
          's3.uploadPart'
          's3.abortMultipartUpload'
        ]
        expect(err).to.exist
        expect(data).not.to.exist
        expect(reqs[3].params.UploadId).to.equal('uploadId')
        done()

    it 'aborts if complete call fails', (done) ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { data: ETag: 'ETAG2' }
        { data: ETag: 'ETAG3' }
        { data: ETag: 'ETAG4' }
        { error: { code: 'CompleteFailed' }, data: null }
      ]

      send Body: bigbody, ->
        expect(helpers.operationsForRequests(reqs)).to.eql [
          's3.createMultipartUpload'
          's3.uploadPart'
          's3.uploadPart'
          's3.uploadPart'
          's3.uploadPart'
          's3.completeMultipartUpload'
          's3.abortMultipartUpload'
        ]
        expect(err).to.exist
        expect(err.code).to.equal('CompleteFailed')
        expect(data).not.to.exist
        done()

    it 'leaves parts if leavePartsOnError is set', (done) ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { error: { code: 'UploadPartFailed' }, data: null }
        { data: {}, error: null }
      ]

      upload = new AWS.S3.ManagedUpload
        queueSize: 1
        leavePartsOnError: true
        params: { Body: bigbody }
      send {}, ->
        expect(helpers.operationsForRequests(reqs)).to.eql [
          's3.createMultipartUpload'
          's3.uploadPart'
          's3.uploadPart'
        ]
        expect(err).to.exist
        expect(err.code).to.equal('UploadPartFailed')
        expect(data).not.to.exist
        done()

    it 'resumes multipart buffer upload if leavePartsOnError is set', (done) ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { error: { code: 'UploadPartFailed' }, data: null }
        { data: ETag: 'ETAG2' }
        { data: ETag: 'ETAG3' }
        { data: ETag: 'ETAG4' }
        { data: ETag: 'FINAL_ETAG', Location: 'FINAL_LOCATION' }
        { data: {}, error: null }
      ]

      upload = new AWS.S3.ManagedUpload
        queueSize: 1
        leavePartsOnError: true
        params: { Body: bigbody }
      send {}, ->
        expect(helpers.operationsForRequests(reqs)).to.eql [
          's3.createMultipartUpload'
          's3.uploadPart'
          's3.uploadPart'
        ]

        expect(err).to.exist
        expect(err.code).to.equal('UploadPartFailed')
        expect(data).not.to.exist
        send {}, ->
          expect(helpers.operationsForRequests(reqs)).to.eql [
            's3.createMultipartUpload'
            's3.uploadPart'
            's3.uploadPart'
            's3.uploadPart'
            's3.uploadPart'
            's3.uploadPart'
            's3.completeMultipartUpload'
          ]
          expect(err).not.to.exist
          expect(data.ETag).to.equal('FINAL_ETAG')
          expect(data.Location).to.equal('FINAL_LOCATION')
          done()

    it 'does not resume multipart buffer upload if leavePartsOnError is not set', (done) ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { error: { code: 'UploadPartFailed' }, data: null }
        { error: new Error('ERROR'), data: null}
      ]

      upload = new AWS.S3.ManagedUpload
        queueSize: 1
        params: { Body: bigbody }
      send {}, ->
        expect(helpers.operationsForRequests(reqs)).to.eql [
          's3.createMultipartUpload'
          's3.uploadPart'
          's3.uploadPart'
          's3.abortMultipartUpload'
        ]

        expect(err).to.exist
        expect(err.code).to.equal('UploadPartFailed')
        expect(data).not.to.exist
        send {}, ->
          expect(err).to.exist
          expect(data).not.to.exist
          done()

    it 'returns data with ETag, Location, Bucket, and Key with single part upload', (done) ->
      reqs = helpers.mockResponses [
        data: ETag: 'ETAG'
      ]
      send Body: smallbody, ContentEncoding: 'encoding', ->
        expect(err).not.to.exist
        expect(data.ETag).to.equal('ETAG')
        expect(data.Location).to.equal('https://bucket.s3.mock-region.amazonaws.com/key')
        expect(data.Key).to.equal('key')
        expect(data.Bucket).to.equal('bucket')
        done()

    if AWS.util.isNode()
      describe 'streaming', ->
        it 'sends a small stream in a single putObject', (done) ->
          stream = AWS.util.buffer.toStream(smallbody)
          reqs = helpers.mockResponses [data: ETag: 'ETAG']
          upload = new AWS.S3.ManagedUpload params: { Body: stream }
          upload.send ->
            expect(helpers.operationsForRequests(reqs)).to.eql ['s3.putObject']
            expect(err).not.to.exist
            done()

        it 'sends a zero byte stream', (done) ->
          stream = AWS.util.buffer.toStream(zerobody)
          reqs = helpers.mockResponses [data: ETag: 'ETAG']
          upload = new AWS.S3.ManagedUpload params: { Body: stream }
          upload.send ->
            expect(helpers.operationsForRequests(reqs)).to.eql ['s3.putObject']
            expect(err).not.to.exist
            done()

        it 'propagates an error from a stream', (done) ->
          errorStream = new require('stream').Readable()
          errorStream._read = -> this.emit('error', new Error('message'))

          upload = new AWS.S3.ManagedUpload params: { Body: errorStream }
          upload.send (e, d) ->
            expect(e).to.exist
            expect(d).not.to.exist
            expect(e.message).to.equal('message')
            done()

        it 'can send a stream that is exactly equal to part size', (done) ->
          partSize = 5 * 1024 * 1024
          require('crypto').randomBytes partSize, (err, buf) ->
            return done(err) if err

            stream = AWS.util.buffer.toStream buf
            reqs = helpers.mockResponses [
              { data: UploadId: 'uploadId' }
              { data: ETag: 'ETAG1' }
            ]
            upload = new AWS.S3.ManagedUpload({
              partSize: partSize,
              queueSize: 1,
              params: { Body: stream }
            })
            upload.send (err) ->
              return done(err) if err

              expect(helpers.operationsForRequests(reqs)).to.eql [
                's3.createMultipartUpload',
                's3.uploadPart',
                's3.completeMultipartUpload'
              ]
              done()

        it 'can send a stream that is exactly divisible by part size', (done) ->
          partSize = 5 * 1024 * 1024
          streamSize = 2 * partSize
          require('crypto').randomBytes streamSize, (err, buf) ->
            return done(err) if err

            stream = AWS.util.buffer.toStream buf
            reqs = helpers.mockResponses [
              { data: UploadId: 'uploadId' }
              { data: ETag: 'ETAG1' }
              { data: ETag: 'ETAG2' }
              { data: ETag: 'FINAL_ETAG', Location: 'FINAL_LOCATION' }
            ]
            upload = new AWS.S3.ManagedUpload({
              partSize: partSize,
              queueSize: 1,
              params: { Body: stream }
            })
            upload.send (err) ->
              return done(err) if err

              expect(helpers.operationsForRequests(reqs)).to.eql [
                's3.createMultipartUpload'
                's3.uploadPart'
                's3.uploadPart'
                's3.completeMultipartUpload'
              ]
              done()

    if typeof Promise == 'function'
      describe 'promise', ->
        thenFunction = (d) ->
          data = d

        catchFunction = (e) ->
          err = e

        beforeEach ->
          AWS.util.addPromises(AWS.S3.ManagedUpload, Promise)

        it 'resolves when single part upload is successful', ->
          reqs = helpers.mockResponses [
            data: ETag: 'ETAG'
          ]

          params = Body: smallbody, ContentEncoding: 'encoding'
          upload = new AWS.S3.ManagedUpload(service: s3, params: params)

          # if a promise is returned from a test, then done callback not needed
          # and next test will wait for promise to resolve before running
          return upload.promise().then(thenFunction).catch(catchFunction).then ->
            expect(err).not.to.exist
            expect(data.ETag).to.equal('ETAG')
            expect(data.Location).to.equal('https://bucket.s3.mock-region.amazonaws.com/key')
            expect(helpers.operationsForRequests(reqs)).to.eql ['s3.putObject']
            expect(reqs[0].params.ContentEncoding).to.equal('encoding')

        it 'resolves when multipart upload is successful', ->
          reqs = helpers.mockResponses [
            { data: UploadId: 'uploadId' }
            { data: ETag: 'ETAG1' }
            { data: ETag: 'ETAG2' }
            { data: ETag: 'ETAG3' }
            { data: ETag: 'ETAG4' }
            { data: ETag: 'FINAL_ETAG', Location: 'FINAL_LOCATION' }
          ]

          params = Body: bigbody, ContentEncoding: 'encoding'
          upload = new AWS.S3.ManagedUpload(service: s3, params: params)

          return upload.promise().then(thenFunction).catch(catchFunction).then ->
            expect(helpers.operationsForRequests(reqs)).to.eql [
              's3.createMultipartUpload'
              's3.uploadPart'
              's3.uploadPart'
              's3.uploadPart'
              's3.uploadPart'
              's3.completeMultipartUpload'
            ]
            expect(err).not.to.exist
            expect(data.ETag).to.equal('FINAL_ETAG')
            expect(data.Location).to.equal('FINAL_LOCATION')
            expect(reqs[0].params).to.eql(Bucket: 'bucket', Key: 'key', ContentEncoding: 'encoding')
            expect(reqs[1].params.ContentLength).to.equal(10)
            expect(reqs[1].params.UploadId).to.equal('uploadId')
            expect(reqs[2].params.UploadId).to.equal('uploadId')
            expect(reqs[2].params.ContentLength).to.equal(10)
            expect(reqs[3].params.UploadId).to.equal('uploadId')
            expect(reqs[3].params.ContentLength).to.equal(10)
            expect(reqs[4].params.UploadId).to.equal('uploadId')
            expect(reqs[4].params.ContentLength).to.equal(6)
            expect(reqs[5].params.UploadId).to.equal('uploadId')
            expect(reqs[5].params.MultipartUpload.Parts).to.eql [
              { ETag: 'ETAG1', PartNumber: 1 }
              { ETag: 'ETAG2', PartNumber: 2 }
              { ETag: 'ETAG3', PartNumber: 3 }
              { ETag: 'ETAG4', PartNumber: 4 }
            ]

        it 'rejects when upload fails', ->
          helpers.mockResponses [ error: new Error('ERROR') ]

          params = Body: smallbody, ContentEncoding: 'encoding'
          upload = new AWS.S3.ManagedUpload(service: s3, params: params)

          return upload.promise().then(thenFunction).catch(catchFunction).then ->
            expect(data).not.to.exist
            expect(err.message).to.equal('ERROR')
