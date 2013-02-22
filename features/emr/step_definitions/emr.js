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
  this.Before("@emr", function (callback) {
    this.client = new this.AWS.EMR.Client();
    callback();
  });

  this.Given(/^I run an EMR job flow with name prefix "([^"]*)"$/, function(prefix, callback) {
    var params = {
      Name: this.uniqueName(prefix),
      Instances: {
        MasterInstanceType: 'm1.small',
        SlaveInstanceType: 'm1.small',
        InstanceCount: 1,
        TerminationProtected: false
      }
    };
    this.request(null, 'runJobFlow', params, callback);
  });

  this.Then(/^I should store the job flow ID$/, function(callback) {
    this.jobFlowId = this.data.JobFlowId;
    callback();
  });

  this.Then(/^when I describe the EMR job flows$/, function(callback) {
    this.request(null, 'describeJobFlows', {}, callback);
  });

  this.Then(/^the list should contain the job flow ID$/, function(callback) {
    var jobFlowId = this.jobFlowId;
    this.assert.contains(this.data.JobFlows, function(job) {
      return job.JobFlowId === jobFlowId;
    });
    callback();
  });

  this.Then(/^I terminate the job flow$/, function(callback) {
    this.request(null, 'terminateJobFlows', {JobFlowIds: [this.jobFlowId]}, callback);
  });

  this.Given(/^I run an EMR job flow with invalid parameters$/, function(callback) {
    var params = {Name: '', Instances: {MasterInstanceType: 'invalid'}};
    this.request(null, 'runJobFlow', params, callback, false);
  });
};
