helpers = require('../helpers')
AWS = helpers.AWS

require('../../lib/services/route53')

describe 'AWS.Route53', ->

  et = null
  beforeEach ->
    et = new AWS.ElasticTranscoder()

  describe 'cancelJob', ->
    it 'omits the body', ->
      helpers.mockHttpResponse 200, {}, ''
      params = { Id: 'job-id' }
      et.cancelJob { Id: 'job-id' }, (err, data) ->
        req = this.request.httpRequest
        expect(req.path).toEqual('/2012-09-25/jobs/job-id')
        expect(req.body).toEqual('')

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
        expect(req.path).toEqual('/2012-09-25/pipelines/pipeline-id/notifications')
        expect(req.body).toEqual('{"Notifications":{"Progressing":"arn1","Completed":"arn2","Warning":"arn3","Error":"arn4"}}')
