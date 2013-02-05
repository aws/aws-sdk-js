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
  this.Before("@iam", function (callback) {
    this.client = new this.AWS.IAM.Client();
    callback();
  });

  this.Given(/^I have an IAM username "([^"]*)"$/, function(name, callback) {
    this.iamUser = name + '-' + new Date().getTime();
    callback();
  });

  this.Given(/^I create an IAM user with the username$/, function(callback) {
    this.request(null, 'createUser', {UserName: this.iamUser}, callback, false);
  });

  this.Given(/^I list the IAM users$/, function(callback) {
    this.request(null, 'listUsers', {}, callback);
  });

  this.Then(/^the list should contain the user$/, function(callback) {
    var world = this, found = false, data = this.resp.data;
    data.Users.forEach(function(user) {
      if (user.UserName === world.iamUser) found = true;
    });
    if (found) callback();
    else callback.fail('User ' + world.topicArn + ' not in users: ' +
      require('util').inspect(data.Users));
  });

  this.Then(/^I delete the IAM user$/, function(callback) {
    this.request(null, 'deleteUser', {UserName: this.iamUser}, callback);
  });
};
