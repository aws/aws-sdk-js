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
    this.service = new this.AWS.RDS.Client();
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

  this.Given(/^I paginate the "([^"]*)" operation with limit (\d+)(?: and max pages (\d+))?$/, function(operation, limit, maxPages, callback) {
    limit = parseInt(limit);
    if (maxPages) maxPages = parseInt(maxPages);

    var world = this;
    this.numPages = 0;
    this.numMarkers = 0
    this.operation = operation;
    this.paginationConfig = this.service.paginationConfig(operation);
    this.params = this.params || {};

    var marker = this.paginationConfig.outputToken;
    if (this.paginationConfig.limitKey) {
      this.params[this.paginationConfig.limitKey] = limit;
    }
    this.service[operation](this.params).eachPage(function (err, data) {
      if (err) callback.fail(err);
      else if (data === null) callback();
      else if (maxPages && world.numPages === maxPages) {
        callback();
        return false;
      }
      else {
        if (data[marker]) world.numMarkers++;
        world.numPages++;
        world.data = data;
      }
    });
  });

  this.Then(/^I should get more than one page$/, function(callback) {
    this.assert.compare(this.numPages, '>', 1);
    callback();
  });

  this.Then(/^I should get (\d+) pages$/, function(numPages, callback) {
    this.assert.equal(this.numPages, parseInt(numPages));
    callback();
  });

  this.Then(/^I should get numPages - 1 markers$/, function(callback) {
    this.assert.equal(this.numMarkers, this.numPages - 1);
    callback();
  });

  this.Then(/^the last page should not contain a marker$/, function(callback) {
    var marker = this.paginationConfig.outputToken;
    this.assert.equal(this.data[marker], null);
    callback();
  });
};
