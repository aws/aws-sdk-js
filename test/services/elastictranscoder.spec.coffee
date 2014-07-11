helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.ElasticTranscoder', ->

  et = null
  beforeEach ->
    et = new AWS.ElasticTranscoder()

  describe 'error handling', ->
    it 'should generate the correct error name', ->
      helpers.mockHttpResponse 400, {'x-amzn-errortype': 'ErrorName:'}, ''
      et.listPipelines (err, data) ->
        expect(err.code).to.equal('ErrorName')

    it 'generates generic error name if header is not present', ->
      helpers.mockHttpResponse 400, {}, ''
      et.listPipelines (err, data) ->
        expect(err.code).to.equal('UnknownError')

  describe 'cancelJob', ->
    it 'omits the body', ->
      helpers.mockHttpResponse 200, {}, ''
      params = { Id: 'job-id' }
      et.cancelJob { Id: 'job-id' }, (err, data) ->
        req = this.request.httpRequest
        expect(req.path).to.equal('/2012-09-25/jobs/job-id')
        expect(req.body).to.equal('{}')

  describe 'updatePipelineNotifications', ->
    it 'only populates the body with non-uri and non-header params', ->
      helpers.mockHttpResponse 200, {}, ''
      params =
        Id: 'pipeline-id'
        Notifications:
          Progressing: 'arn1'
          Completed: 'arn2'
          Warning: 'arn3'
          Error: 'arn4'
      et.updatePipelineNotifications params, (err, data) ->
        req = this.request.httpRequest
        expect(req.path).to.equal('/2012-09-25/pipelines/pipeline-id/notifications')
        expect(req.body).to.equal('{"Notifications":{"Progressing":"arn1","Completed":"arn2","Warning":"arn3","Error":"arn4"}}')
