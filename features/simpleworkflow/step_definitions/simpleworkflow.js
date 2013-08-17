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
  this.Before("@simpleworkflow", function (callback) {
    this.service = new this.AWS.SimpleWorkflow.Client();
    callback();
  });

  this.Given(/^I register a SimpleWorkFlow domain with prefix "([^"]*)"$/, function(prefix, callback) {
    this.swfDomain = prefix + '-' + new Date().getTime();
    var params = {name:this.swfDomain, workflowExecutionRetentionPeriodInDays:'7'};
    this.request(null, 'registerDomain', params, callback);
  });

  this.Given(/^I list SimpleWorkFlow domains with status "([^"]*)"$/, function(status, callback) {
    this.request(null, 'listDomains', {registrationStatus: status}, callback);
  });

  this.Then(/^the SimpleWorkFlow domain should be in the list$/, function(callback) {
    var items = {};
    this.data.domainInfos.forEach(function (info) {
      items[info.name] = info;
    });
    this.assert.ok(items[this.swfDomain]);
    callback();
  });

  this.Then(/^I delete the SimpleWorkFlow domain$/, function(callback) {
    this.request(null, 'deprecateDomain', {name: this.swfDomain}, callback);
  });

  this.Given(/^I try to create a SimpleWorkFlowDomain with an empty name$/, function(callback) {
    var params = {name: '', workflowExecutionRetentionPeriodInDays:'7'};
    this.request(null, 'registerDomain', params, callback, false);
  });
};
