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
  this.Before("@cloudformation", function (callback) {
    this.client = new this.AWS.CloudFormation.Client();
    callback();
  });

  this.Given(/^I create a CloudFormation stack with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.stackName = this.uniqueName(prefix);
    this.templateBody = '{"Resources":{"member":{"Type":"AWS::SQS::Queue"}}}';
    var params = { TemplateBody: this.templateBody, StackName: this.stackName };
    this.request(null, 'createStack', params, callback, false);
  });

  this.Given(/^I get a CloudFormation template for the stack$/, function(callback) {
    this.request(null, 'getTemplate', {StackName: this.stackName}, callback);
  });

  this.Then(/^the result should contain the CloudFormation template body$/, function(callback) {
    this.assert.equal(this.data.TemplateBody.replace(/\s+/, ''), this.templateBody);
    callback();
  });

  this.Then(/^I delete the CloudFormation stack$/, function(callback) {
    this.request(null, 'deleteStack', {StackName: this.stackName}, callback);
  });
};
