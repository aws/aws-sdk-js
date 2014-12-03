helpers = require('../helpers')
AWS = helpers.AWS

body = (size) ->
  if AWS.util.isNode() || navigator && navigator.userAgent.match(/phantomjs/i)
    new AWS.util.Buffer(size)
  else
    new Blob(new Array(size).map (i) -> '.')

smallbody = body(5)
bigbody = body(36)

describe 'AWS.S3.ManagedUpload', ->
  s3 = new AWS.S3 maxRetries: 0, params: { Bucket: 'bucket', Key: 'key' }
  [err, data, upload, minPartSize] = []
  beforeEach ->
    minPartSize = AWS.S3.ManagedUpload.minPartSize
    AWS.S3.ManagedUpload.prototype.minPartSize = 10
    [err, data] = []
    helpers.spyOn(AWS.S3.prototype, 'extractError').andReturn(->)
    upload = new AWS.S3.ManagedUpload(s3)

  afterEach ->
    AWS.S3.ManagedUpload.prototype.minPartSize = minPartSize

  send = (params, cb) -> upload.send params, (e, d) ->
    [err,data] = [e,d]
    cb() if cb

  describe 'send', ->
    it 'fails if Body is not passed', ->
      expect(-> send()).to.throw('params.Body is required')

    it 'uploads a single part if size is less than min multipart size', ->
      reqs = helpers.mockResponses [
        data: ETag: 'ETAG'
      ]

      send Body: smallbody, ContentEncoding: 'encoding'
      expect(err).not.to.exist
      expect(data.ETag).to.equal('ETAG')
      expect(data.Location).to.equal('https://bucket.s3.mock-region.amazonaws.com/key')
      expect(helpers.operationsForRequests(reqs)).to.eql ['s3.putObject']
      expect(reqs[0].params.ContentEncoding).to.equal('encoding')

    it 'uploads multipart if size is greater than min multipart size', ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { data: ETag: 'ETAG2' }
        { data: ETag: 'ETAG3' }
        { data: ETag: 'ETAG4' }
        { data: ETag: 'FINAL_ETAG', Location: 'FINAL_LOCATION' }
      ]

      send Body: bigbody, ContentEncoding: 'encoding'
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

    it 'aborts if ETag is not in response', ->
      helpers.spyOn(AWS.util, 'isBrowser').andReturn true
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: {} }
        { data: {} }
      ]

      send Body: bigbody
      expect(helpers.operationsForRequests(reqs)).to.eql [
        's3.createMultipartUpload'
        's3.uploadPart'
        's3.abortMultipartUpload'
      ]
      expect(err).to.exist
      expect(err.message).to.equal('No access to ETag property on response. Check CORS configuration to expose ETag header.')

    it 'allows changing part size', ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { data: ETag: 'ETAG2' }
        { data: ETag: 'FINAL_ETAG', Location: 'FINAL_LOCATION' }
      ]

      size = 18
      opts = partSize: size, queueSize: 1
      upload = new AWS.S3.ManagedUpload(s3, opts)
      send Body: bigbody
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

    it 'errors if partSize is smaller than minPartSize', ->
      expect(-> new AWS.S3.ManagedUpload(s3, partSize: 5)).to.throw(
        'partSize must be greater than 10')

    it 'aborts if uploadPart fails', ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { error: { code: 'UploadPartFailed' }, data: null }
        { data: {}, error: null }
      ]

      upload = new AWS.S3.ManagedUpload(s3, queueSize: 1)
      send Body: bigbody
      expect(helpers.operationsForRequests(reqs)).to.eql [
        's3.createMultipartUpload'
        's3.uploadPart'
        's3.uploadPart'
        's3.abortMultipartUpload'
      ]
      expect(err).to.exist
      expect(data).not.to.exist
      expect(reqs[3].params.UploadId).to.equal('uploadId')

    it 'aborts if complete call fails', ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { data: ETag: 'ETAG2' }
        { data: ETag: 'ETAG3' }
        { data: ETag: 'ETAG4' }
        { error: { code: 'CompleteFailed' }, data: null }
      ]

      send Body: bigbody
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

    it 'leaves parts if leavePartsOnError is set', ->
      reqs = helpers.mockResponses [
        { data: UploadId: 'uploadId' }
        { data: ETag: 'ETAG1' }
        { error: { code: 'UploadPartFailed' }, data: null }
        { data: {}, error: null }
      ]

      upload = new AWS.S3.ManagedUpload(s3, queueSize: 1, leavePartsOnError: true)
      send Body: bigbody
      expect(helpers.operationsForRequests(reqs)).to.eql [
        's3.createMultipartUpload'
        's3.uploadPart'
        's3.uploadPart'
      ]
      expect(err).to.exist
      expect(err.code).to.equal('UploadPartFailed')
      expect(data).not.to.exist

    if AWS.util.isNode()
      describe 'streaming', ->
        it 'sends a small stream in a single putObject', (done) ->
          stream = AWS.util.buffer.toStream(smallbody)
          reqs = helpers.mockResponses [data: ETag: 'ETAG']
          upload.send Body: stream, ->
            expect(helpers.operationsForRequests(reqs)).to.eql ['s3.putObject']
            expect(err).not.to.exist
            done()
