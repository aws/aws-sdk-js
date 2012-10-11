# Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

helpers = require('./helpers'); AWS = helpers.AWS

describe 'AWS.EC2', ->

  service = new AWS.EC2()

  it 'should send a request with parameters', ->

    # limit the list of regions returned with this filter
    params = { RegionNames: ['us-east-1', 'us-west-1'] }

    helpers.integration (-> service.describeRegions(params)), (resp) ->
      expect(resp.error).toEqual(null)
      expect(resp.data.Regions).toEqual([
        { RegionName: 'us-east-1', Endpoint: 'ec2.us-east-1.amazonaws.com' },
        { RegionName: 'us-west-1', Endpoint: 'ec2.us-west-1.amazonaws.com' },
      ])

  it 'should returns client errors', ->

    params = { InstanceIds : ['i-12345678'] }

    helpers.integration (-> service.describeInstances(params)), (resp) ->
      expect(resp.data).toEqual(null)
      expect(resp.error).toEqual(
        code : 'InvalidInstanceID.NotFound',
        message : "The instance ID 'i-12345678' does not exist",
        statusCode : 400,
        retryable : false
      )

