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
  this.Before("@route53", function (callback) {
    this.service = new this.AWS.Route53.Client();
    callback();
  });

  this.When(/^I create a Route53 hosted zone with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.zoneName = 'zone1.example.com';
    var params = {
      Name: this.zoneName,
      CallerReference: this.uniqueName(prefix),
      HostedZoneConfig: {
        Comment: 'A comment about the zone'
      }
    };
    this.request(null, 'createHostedZone', params, callback, false);
  });

  this.Then(/^the result should contain the hosted zone ID$/, function(callback) {
    this.hostedZoneId = this.data.HostedZone.Id;
    callback();
  });

  this.Then(/^the result should contain the change ID$/, function(callback) {
    this.changeInfoId = this.data.ChangeInfo.Id;
    callback();
  });

  this.Then(/^the result should contain the hosted zone name$/, function(callback) {
    this.assert.equal(this.data.HostedZone.Name, this.zoneName + '.');
    callback();
  });

  this.When(/^I get information about the Route53 change ID$/, function(callback) {
    this.request(null, 'getChange', {Id: this.changeInfoId}, callback);
  });

  this.Then(/^the change status should be PENDING or INSYNC$/, function(callback) {
    this.assert.match(this.data.ChangeInfo.Status, /^(PENDING|INSYNC)$/);
    callback();
  });

  this.When(/^I get information about the Route53 hosted zone ID$/, function(callback) {
    this.request(null, 'getHostedZone', {Id: this.hostedZoneId}, callback);
  });

  this.Then(/^the result should contain multiple nameservers$/, function(callback) {
    this.assert.compare(this.data.DelegationSet.NameServers.length, '>=', 0);
    this.assert.equal(typeof this.data.DelegationSet.NameServers[0], 'string');
    callback();
  });

  this.Then(/^I delete the Route53 hosted zone$/, function(callback) {
    this.request(null, 'deleteHostedZone', {Id: this.hostedZoneId}, callback);
  });

  this.When(/^I create a Route53 TCP health check with name prefix "([^"]*)"$/, function(prefix, callback) {
    var params = {
      CallerReference: this.uniqueName(prefix),
      HealthCheckConfig: {
        IPAddress: '192.0.43.10', // example.com
        Port: 80,
        Type: 'TCP'
      }
    }
    this.request(null, 'createHealthCheck', params, callback);
  });

  this.Then(/^the result should contain health check information$/, function(callback) {
    this.healthCheckInfo = this.data.HealthCheck;
    callback();
  });

  this.Then(/^the result should contain the health check ID$/, function(callback) {
    this.healthCheckId = this.data.HealthCheck.Id;
    callback();
  });

  this.When(/^I get information about the health check ID$/, function(callback) {
    var params = {HealthCheckId: this.healthCheckId};
    this.request(null, 'getHealthCheck', params, callback);
  });

  this.Then(/^the result should contain the previous health check information$/, function(callback) {
    this.assert.deepEqual(this.data.HealthCheck, this.healthCheckInfo);
    callback();
  });

  this.Then(/^I delete the Route53 TCP health check$/, function(callback) {
    var params = {HealthCheckId: this.healthCheckId};
    this.request(null, 'deleteHealthCheck', params, callback);
  });

  this.When(/^I list Route53 hosted zones$/, function(callback) {
    this.request(null, 'listHostedZones', {}, callback);
  });
};
