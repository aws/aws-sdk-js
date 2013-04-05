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
  this.Before("@ses", function (callback) {
    this.service = new this.AWS.SES.Client();
    callback();
  });

  this.When(/^I check quota$/, function(next) {
    this.request(null, 'getSendQuota', {}, next);
  });

  this.Then(/^the result should include (\S+) "([^"]*)"$/, function(type, attr, next) {
    if (this.data[attr] === undefined) next.fail("Missing " + attr);
    if (typeof this.data[attr] !== type) next.fail("Incorrect type " + attr);
    next();
  });

  this.When(/^I ask to verify the email address "([^"]*)"$/, function(email, next) {
    this.request(null, 'verifyEmailAddress', {EmailAddress: email}, next, function() {
      // do nothing
    });
  });
};
