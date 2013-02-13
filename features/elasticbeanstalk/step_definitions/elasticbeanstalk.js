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
  this.Before("@elasticbeanstalk", function (callback) {
    this.client = new this.AWS.ElasticBeanstalk.Client();
    callback();
  });

  this.Given(/^I create an Elastic Beanstalk application with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.appName = this.uniqueName(prefix);
    var params = { ApplicationName: this.appName };
    this.request(null, 'createApplication', params, callback, false);
  });

  this.Given(/^I create an Elastic Beanstalk application version with label "([^"]*)"$/, function(label, callback) {
    this.appVersion = label;
    var params = { ApplicationName: this.appName, VersionLabel: this.appVersion };
    this.request(null, 'createApplicationVersion', params, callback);
  });

  this.Given(/^I describe the Elastic Beanstalk application$/, function(callback) {
    var params = { ApplicationNames: [this.appName] };
    this.request(null, 'describeApplications', params, callback);
  });

  this.Then(/^the result should contain the Elastic Beanstalk application version$/, function(callback) {
    this.assert.deepEqual(this.data.Applications[0].Versions, [this.appVersion]);
    callback();
  });

  this.Then(/^the result should contain the Elastic Beanstalk application name$/, function(callback) {
    this.assert.equal(this.data.Applications[0].ApplicationName, this.appName);
    callback();
  });

  this.Then(/^I delete the Elastic Beanstalk application$/, function(callback) {
    var params = { ApplicationName: this.appName };
    this.request(null, 'deleteApplication', params, callback);
  });
};
