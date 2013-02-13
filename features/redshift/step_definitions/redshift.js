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
  this.Before("@redshift", function (callback) {
    this.client = new this.AWS.Redshift.Client();
    callback();
  });

  this.Given(/^I create a Redshift cluster security group with prefix name "([^"]*)"$/, function(prefix, callback) {
    this.clusterGroupName = this.uniqueName(prefix);
    var params = { Description: 'Description', ClusterSecurityGroupName: this.clusterGroupName };
    this.request(null, 'createClusterSecurityGroup', params, callback, false);
  });

  this.Given(/^I describe Redshift cluster security groups$/, function(callback) {
    this.request(null, 'describeClusterSecurityGroups', {}, callback);
  });

  this.Then(/^the Redshift cluster security group should be in the list$/, function(callback) {
    var groupName = this.clusterGroupName;
    this.assert.contains(this.data.ClusterSecurityGroups, function(item) {
      return item.ClusterSecurityGroupName === groupName;
    });
    callback();
  });

  this.Then(/^I delete the Redshift cluster security group$/, function(callback) {
    var params = {ClusterSecurityGroupName: this.clusterGroupName};
    this.request(null, 'deleteClusterSecurityGroup', params, callback);
  });
};
