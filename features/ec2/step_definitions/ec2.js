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
  this.Before("@ec2", function (callback) {
    this.service = new this.AWS.EC2.Client();
    callback();
  });

  this.Given(/^I describe EC2 regions "([^"]*)"$/, function(regions, callback) {
    regions = regions.split(/\s*,\s*/);
    this.request(null, 'describeRegions', {RegionNames: regions}, callback);
  });

  this.Then(/^the EC2 endpoint for "([^"]*)" should be "([^"]*)"$/, function(region, endpoint, callback) {
    this.assert.contains(this.data.Regions, function(region) {
      return region.Endpoint === endpoint;
    });
    callback();
  });

  this.Given(/^I describe the EC2 instance "([^"]*)"$/, function(instanceId, callback) {
    this.request(null, 'describeInstances', {InstanceIds: [instanceId]}, callback, false);
  });
};
