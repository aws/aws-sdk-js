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
  this.Before("@sts", function (callback) {
    this.service = new this.AWS.STS.Client();
    callback();
  });

  this.Given(/^I get an STS session token with a duration of (\d+) seconds$/, function(duration, callback) {
    this.request(null, 'getSessionToken', {DurationSeconds:parseInt(duration)}, callback, false);
  });

  this.Then(/^the result should contain an access key ID and secret access key$/, function(callback) {
    this.assert.compare(this.data.Credentials.AccessKeyId.length, '>', 0);
    this.assert.compare(this.data.Credentials.SecretAccessKey.length, '>', 0);
    callback();
  });

  this.Then(/^the TTL on the session token credentials should be less than (\d+)$/, function(duration, callback) {
    var ttl = this.data.Credentials.Expiration.getTime();
    ttl = (ttl - new Date().getTime()) / 1000;
    this.assert.compare(ttl, '<', duration);
    callback();
  });
};
