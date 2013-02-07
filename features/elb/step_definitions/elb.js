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
  this.Before("@elb", function (callback) {
    this.client = new this.AWS.ELB.Client();
    callback();
  });

  this.Given(/^I create a load balancer with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.loadBalancerName = prefix + '-' + new Date().getTime();

    var params = {
      LoadBalancerName: this.loadBalancerName,
      Listeners: [{Protocol: 'TCP', LoadBalancerPort: 80, InstancePort: 80}],
      AvailabilityZones: ['us-east-1a']
    };
    this.request(null, 'createLoadBalancer', params, callback, false);
  });

  this.Given(/^I describe load balancers with the load balancer name$/, function(callback) {
    var params = {LoadBalancerNames: [this.loadBalancerName]};
    this.request(null, 'describeLoadBalancers', params, callback);
  });

  this.Then(/^the load balancer should be in the list$/, function(callback) {
    var name = this.data.LoadBalancerDescriptions[0].LoadBalancerName;
    this.assert.equal(name, this.loadBalancerName);
    callback();
  });

  this.Then(/^I delete the load balancer$/, function(callback) {
    var params = {LoadBalancerName: this.loadBalancerName};
    this.request(null, 'deleteLoadBalancer', params, callback);
  });

  this.Given(/^I try to create a load balancer with no name$/, function(callback) {
    this.request(null, 'createLoadBalancer', {}, callback);
  });
};
