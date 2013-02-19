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
    this.iam = new this.AWS.IAM.Client();
    callback();
  });

  this.Given(/^I have an IAM username "([^"]*)"$/, function(name, callback) {
    this.iamUserArn = '';
    this.iamUser = this.uniqueName(name);
    callback();
  });

  this.Given(/^I create an IAM user with the username$/, function(callback) {
    var world = this;
    var next = function() {
      if (world.data) this.iamUserArn = world.data.User.Arn;
      else this.iamUserArn = null;
      callback();
    };
    next.fail = callback.fail;
    this.request('iam', 'createUser', {UserName: this.iamUser}, next, false);
  });

  this.Given(/^I list the IAM users$/, function(callback) {
    this.request('iam', 'listUsers', {}, callback);
  });

  this.Then(/^the list should contain the user$/, function(callback) {
    var name = this.iamUser;
    this.assert.contains(this.data.Users, function(user) {
      return user.UserName === name;
    });
    callback();
  });

  this.Then(/^I delete the IAM user$/, function(callback) {
    this.request('iam', 'deleteUser', {UserName: this.iamUser}, callback);
  });

  this.Given(/^I create an IAM role with name prefix "([^"]*)"$/, function(name, callback) {
    this.iamRoleName = this.uniqueName(name);

    var world = this;
    var assumeRolePolicyDocument = '{"Version":"2008-10-17","Statement":[' +
      '{"Effect":"Allow","Principal":{"Service":["ec2.amazonaws.com"]},' +
      '"Action":["sts:AssumeRole"]}]}';
    var params = {RoleName: this.iamRoleName,
      AssumeRolePolicyDocument: assumeRolePolicyDocument};
    var next = function() {
      world.iamRoleArn = world.data.Role.Arn;
      callback();
    }
    next.fail = callback.fail;

    this.request('iam', 'createRole', params, next);
  });

  this.Then(/^the IAM role should exist$/, function(callback) {
    this.assert.compare(this.iamRoleArn.length, '>', 0);
    callback();
  });

  this.Then(/^I delete the IAM role$/, function(callback) {
    this.request('iam', 'deleteRole', {RoleName: this.iamRoleName}, callback);
  });
};
