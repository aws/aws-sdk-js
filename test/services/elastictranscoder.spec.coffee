# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

helpers = require('../helpers')
AWS = helpers.AWS

require('../../lib/services/route53')

describe 'AWS.Route53.Client', ->

  et = null
  beforeEach ->
    et = new AWS.ElasticTranscoder.Client()

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
