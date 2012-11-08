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

module.exports = ->

  @When /^I create a bucket$/, (next) ->
    @bucket = 'aws-sdk-js-integration-' + @AWS.util.date.unixTimestamp() * 1000
    @request('s3', 'createBucket', {Bucket:@bucket}, next)

  @Then /^I (should be able to )?delete the bucket$/, (ignore, next) ->
    @request('s3', 'deleteBucket', {Bucket:@bucket}, next)

  @Then /^the bucket should (not )?exist$/, (shouldNotExist, next) ->
    @eventually next, (retry) ->
      @s3.headBucket(Bucket:@bucket).always (resp) ->
        if shouldNotExist
          next() if resp.error and resp.error.code == 'NotFound' else retry()
        else
          retry() if resp.error else next()
