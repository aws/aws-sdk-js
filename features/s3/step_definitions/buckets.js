/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

module.exports = function() {

  this.When(/^I create a bucket$/, function(next) {
    this.bucket = 'aws-sdk-js-integration-' +
      this.AWS.util.date.unixTimestamp() * 1000;
    this.request('s3', 'createBucket', {Bucket:this.bucket}, next);
  });

  this.When(/^I create a bucket with the location constraint "([^"]*)"$/, function(loc, next) {
    this.bucket = 'aws-sdk-js-integration-' +
      this.AWS.util.date.unixTimestamp() * 1000;
    var params = { Bucket: this.bucket, CreateBucketConfiguration: {LocationConstraint: loc} };
    this.request('s3', 'createBucket', params, next);
  });

  this.Then(/^the bucket should exist$/, function(next) {
    this.eventually(next, function (retry) {
      this.request('s3', 'headBucket', {Bucket:this.bucket}, retry);
    });
  });

  this.When(/^I delete the bucket$/, function(next) {
    this.request('s3', 'deleteBucket', {Bucket:this.bucket}, next);
  });

  this.Then(/^the bucket should not exist$/, function(next) {
    this.eventually(next, function (retry) {
      retry.condition = function() {
        return this.error && this.error.code === 'NotFound';
      }
      this.request('s3', 'headBucket', {Bucket:this.bucket}, retry, false);
    });
  });

  this.Then(/^the bucket should have a location constraint of "([^"]*)"$/, function(loc, next) {
    this.s3.getBucketLocation({Bucket:this.bucket}, function(err, data) {
      if (data && data.LocationConstraint == loc)
        next();
      else
        fail();
    });
  });

  this.Then(/^I delete the bucket$/, function(next) {
    this.request('s3', 'deleteBucket', {Bucket:this.bucket}, next);
  });

};
