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

describe 'AWS.Route53', ->

  cf = null
  beforeEach ->
    cf = new AWS.CloudFront()

  describe 'createInvalidation', ->
    it 'correctly builds the request', ->
      helpers.mockHttpResponse 200, {}, ''
      api = cf.api.apiVersion
      xml =
        """
        <InvalidationBatch xmlns="http://cloudfront.amazonaws.com/doc/#{api}/">
          <Paths>
            <Quantity>2</Quantity>
            <Items>
              <Path>path1</Path>
              <Path>path2</Path>
            </Items>
          </Paths>
          <CallerReference>abc</CallerReference>
        </InvalidationBatch>
        """
      params =
        DistributionId: 'ID'
        InvalidationBatch:
          Paths:
            Quantity: 2
            Items: ['path1', 'path2']
          CallerReference: 'abc'
      cf.createInvalidation params, (err, data) ->
        req = this.request.httpRequest
        expect(req.path).toEqual("/#{api}/distribution/ID/invalidation")
        helpers.matchXML(req.body, xml)
