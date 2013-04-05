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
  this.Before("@opsworks", function (callback) {
    this.iam = new this.AWS.IAM.Client();
    this.service = new this.AWS.OpsWorks.Client();
    callback();
  });

  this.Given(/^I create an OpsWorks user profile with the IAM user ARN$/, function(callback) {
    var params = {IamUserArn: this.iamUserArn};
    this.request(null, 'createUserProfile', params, callback, false);
  });

  this.Given(/^the IAM user ARN is in the result$/, function(callback) {
    this.assert.equal(this.data.IamUserArn, this.iamUserArn);
    callback();
  });

  this.Given(/^I describe the OpsWorks user profiles$/, function(callback) {
    var params = {IamUserArns: [this.iamUserArn]};
    this.request(null, 'describeUserProfiles', params, callback);
  });

  this.Then(/^the IAM user ARN should be in the result$/, function(callback) {
    this.assert.equal(this.data.UserProfiles[0].IamUserArn, this.iamUserArn);
    callback();
  });

  this.Then(/^the name should be equal to the IAM username$/, function(callback) {
    this.assert.equal(this.data.UserProfiles[0].Name, this.iamUser);
    callback();
  });

  this.Then(/^the SSH username should be equal to the IAM username$/, function(callback) {
    this.assert.equal(this.data.UserProfiles[0].SshUsername, this.iamUser);
    callback();
  });

  this.Then(/^I delete the OpsWorks user profile$/, function(callback) {
    var params = {IamUserArn: this.iamUserArn};
    this.request(null, 'deleteUserProfile', params, callback, false);
  });
};
