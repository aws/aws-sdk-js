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

helpers = require('../helpers'); AWS = helpers.AWS

describe 'AWS.S3', ->

  beforeEach ->
    client = new AWS.S3.Client()

  describe 'CRUD buckets', ->

    it 'should be able to create and delete buckets in a different region', ->

      client = new AWS.S3.Client(region:'eu-west-1')

      bucketName = 'aws-sdk-js-integration-' + AWS.util.date.unixTimestamp()
      params = { Bucket: bucketName, LocationConstraint: 'EU' }

      # create a bucket in the EU
      helpers.integration (-> client.createBucket(params)), (resp) ->
        expect(resp.error).toEqual(null)
        expect(resp.data.Location).toEqual("http://#{bucketName}.s3.amazonaws.com/")

        # delete the bucket
        helpers.integration (-> client.deleteBucket({Bucket:bucketName})), (resp2) ->
          expect(resp2.error).toEqual(null)
          expect(resp2.data.RequestId).toBeDefined()

