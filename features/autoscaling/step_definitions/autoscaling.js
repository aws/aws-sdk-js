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
  this.Before("@autoscaling", function (callback) {
    this.service = new this.AWS.AutoScaling.Client();
    callback();
  });

  this.Given(/^I create a launch configuration with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.launchConfigName = this.uniqueName(prefix);
    var params = {
      ImageId: 'ami-1624987f',
      InstanceType: 'm1.small',
      LaunchConfigurationName: this.launchConfigName
    };
    this.request(null, 'createLaunchConfiguration', params, callback, false);
  });

  this.Given(/^I create an auto scaling group with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.groupName = this.uniqueName(prefix);
    var params = {
      AutoScalingGroupName: this.groupName,
      LaunchConfigurationName: this.launchConfigName,
      MinSize: 1,
      MaxSize: 4,
      AvailabilityZones: ['us-east-1a']
    };
    this.request(null, 'createAutoScalingGroup', params, callback);
  });

  this.Given(/^I list auto scaling groups with the group name$/, function(callback) {
    var params = {AutoScalingGroupNames: [this.groupName]};
    this.request(null, 'describeAutoScalingGroups', params, callback)
  });

  this.Then(/^the list should contain the auto scaling group$/, function(callback) {
    var name = this.data.AutoScalingGroups[0].AutoScalingGroupName;
    this.assert.equal(name, this.groupName);
    callback();
  });

  this.Then(/^I delete the auto scaling group$/, function(callback) {
    var params = {AutoScalingGroupName: this.groupName};
    this.request(null, 'deleteAutoScalingGroup', params, callback);
  });

  this.Then(/^I delete the launch configuration$/, function(callback) {
    var params = {LaunchConfigurationName: this.launchConfigName};
    this.request(null, 'deleteLaunchConfiguration', params, callback);
  });
};
