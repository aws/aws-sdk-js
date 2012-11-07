/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

module.exports = function () {

  this.When(/^I create a bucket$/, function(next) {
    this.bucket = 'aws-sdk-js-integration-' +
      this.AWS.util.date.unixTimestamp() * 1000;
    this.request('s3', 'createBucket', {Bucket:this.bucket}, next);
  });

  this.When(/^I delete the bucket$/, function(next) {
    this.request('s3', 'deleteBucket', {Bucket:this.bucket}, next);
  });

  this.Then(/^the bucket should (not )?exist$/, function(shouldNotExist, next) {
    this.eventually(next, function (retry) {
      this.s3.headBucket({Bucket:this.bucket}).always(function (resp) {
        if (shouldNotExist) {
          (resp.error && resp.error.code == 'NotFound') ? next() : retry();
        } else { // should exist
          resp.error ? retry() : next();
        }
      }, {bind: this});
    });
  });


};
