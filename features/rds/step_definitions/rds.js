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
  this.Before("@rds", function (callback) {
    this.client = new this.AWS.RDS.Client();
    callback();
  });

  this.Given(/^I create a RDS security group with prefix name "([^"]*)"$/, function(prefix, callback) {
    this.dbGroupName = this.uniqueName(prefix);
    var params = { DBSecurityGroupDescription: 'Description', DBSecurityGroupName: this.dbGroupName };
    this.request(null, 'createDBSecurityGroup', params, callback, false);
  });

  this.Given(/^the RDS security group name is in the result$/, function(callback) {
    var name = this.data.DBSecurityGroupName;
    this.assert.equal(name, this.dbGroupName);
    callback();
  });

  this.Given(/^I describe the RDS security group$/, function(callback) {
    var params = {DBSecurityGroupName: this.dbGroupName};
    this.request(null, 'describeDBSecurityGroups', params, callback);
  });

  this.Then(/^the RDS security group should be described$/, function(callback) {
    var item = this.data.DBSecurityGroups[0];
    this.assert.equal(item.DBSecurityGroupName, this.dbGroupName);
    callback();
  });

  this.Then(/^I delete the RDS security group$/, function(callback) {
    var params = {DBSecurityGroupName: this.dbGroupName};
    this.request(null, 'deleteDBSecurityGroup', params, callback);
  });
};
