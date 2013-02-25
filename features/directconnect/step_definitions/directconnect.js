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
  this.Before("@directconnect", function (callback) {
    this.client = new this.AWS.DirectConnect.Client();
    callback();
  });

  this.Given(/^I describe Direct Connect offerings$/, function(callback) {
    this.request(null, 'describeOfferings', {}, callback);
  });

  this.Given(/^I take the first offering ID$/, function(callback) {
    this.AWS.util.arrayEach.call(this, this.data.offerings, function(item) {
      if (item.region === this.client.config.region) {
        this.offering = item;
        return this.AWS.util.abort;
      }
    });
    callback();
  });

  this.When(/^I create a Direct Connect connection with name prefix "([^"]*)" and the offering ID$/, function(prefix, callback) {
    var params = {
      offeringId: this.offering.offeringId,
      connectionName: this.uniqueName(prefix)
    };
    this.request(null, 'createConnection', params, callback);
  });

  this.Then(/^I should get a Direct Connect connection ID$/, function(callback) {
    this.connectionId = this.data.connectionId;
    callback();
  });

  this.Then(/^the region should match the offering region$/, function(callback) {
    this.assert.equal(this.offering.region, this.data.region);
    callback();
  });

  this.Then(/^I describe connection details for the connection$/, function(callback) {
    var params = {connectionId: this.connectionId};
    this.request(null, 'describeConnectionDetail', params, callback);
  });

  this.Then(/^the bandwidth should match the offering bandwidth$/, function(callback) {
    this.assert.equal(this.offering.bandwidth, this.data.bandwidth);
    callback();
  });

  this.Then(/^I delete the Direct Connect connection$/, function(callback) {
    var params = {connectionId: this.connectionId};
    this.request(null, 'deleteConnection', params, callback);
  });

  this.Given(/^I create a Direct Connect connection with an invalid offering ID$/, function(callback) {
    var params = {
      offeringId: 'INVALID_OFFERING_ID',
      connectionName: this.uniqueName('aws-sdk-js')
    };
    this.request(null, 'createConnection', params, callback, false);
  });
};
