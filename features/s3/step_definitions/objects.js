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
  /**
   * Create a single bucket that will be shared by all s3 object scenarios.
   */
  this.Before("@s3", "@objects", function (callback) {

    // execute only once
    if (this.sharedBucket) {
      callback();
      return;
    }

    this.sharedBucket = 'aws-sdk-js-integration-' +
      this.AWS.util.date.unixTimestamp() * 1000;

    this.s3.createBucket({Bucket:this.sharedBucket}).done(function () {
      callback();
    });

  });

  this.When(/^I write "([^"]*)" to the key "([^"]*)"$/, function(contents, key, next) {
    var params = {Bucket:this.sharedBucket,Key:key,Body:contents};
    this.request('s3', 'putObject', params, next);
  });

  this.Then(/^the object with the key "([^"]*)" should contain "([^"]*)"$/, function(key, contents, next) {
    this.eventually(next, function (retry) {
      this.s3.getObject({Bucket:this.sharedBucket,Key:key}).always(function (resp) {
        if (resp.data && resp.data.Body == contents)
          next();
        else
          retry();
      });
    });
  });

  this.When(/^I delete the object with the key "([^"]*)"$/, function(key, next) {
    var params = {Bucket:this.sharedBucket,Key:key};
    this.request('s3', 'deleteObject', params, next);
  });

  this.Then(/^the object with the key "([^"]*)" should (not )?exist$/, function(key, shouldNotExist, next) {
    var params = { Bucket:this.sharedBucket, Key:key };
    this.eventually(next, function (retry) {
      this.s3.headObject(params).always(function (resp) {
        if (shouldNotExist) {
          (resp.error && resp.error.code == 'NotFound') ? next() : retry();
        } else { // should exist
          resp.error ? retry() : next();
        }
      }, {bind: this});
    });
  });

  // this scenario is a work around for not having an after all hook
  this.Then(/^I delete the shared bucket$/, function(next) {
    this.request('s3', 'deleteBucket', {Bucket:this.sharedBucket}, next);
  });

};
