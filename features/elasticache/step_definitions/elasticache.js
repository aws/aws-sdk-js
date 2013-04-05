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
  this.Before("@elasticache", function (callback) {
    this.service = new this.AWS.ElastiCache.Client();
    callback();
  });

  this.Given(/^I create a ElastiCache security group with prefix name "([^"]*)"$/, function(prefix, callback) {
    this.cacheGroupName = this.uniqueName(prefix);
    var params = { Description: 'Description', CacheSecurityGroupName: this.cacheGroupName };
    this.request(null, 'createCacheSecurityGroup', params, callback, false);
  });

  this.Given(/^the ElastiCache security group name is in the result$/, function(callback) {
    var name = this.data.CacheSecurityGroupName;
    this.assert.equal(name, this.cacheGroupName);
    callback();
  });

  this.Given(/^I describe the ElastiCache security group$/, function(callback) {
    var params = {CacheSecurityGroupName: this.cacheGroupName};
    this.request(null, 'describeCacheSecurityGroups', params, callback);
  });

  this.Then(/^the ElastiCache security group should be described$/, function(callback) {
    var item = this.data.CacheSecurityGroups[0];
    this.assert.equal(item.CacheSecurityGroupName, this.cacheGroupName);
    callback();
  });

  this.Then(/^I delete the ElastiCache security group$/, function(callback) {
    var params = {CacheSecurityGroupName: this.cacheGroupName};
    this.request(null, 'deleteCacheSecurityGroup', params, callback);
  });
};
