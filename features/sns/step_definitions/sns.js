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
  this.Before("@sns", function (callback) {
    this.service = new this.AWS.SNS.Client();
    callback();
  });

  this.Given(/^I create an SNS topic with name "([^"]*)"$/, function(name, callback) {
    var world = this;
    this.request(null, 'createTopic', {Name: name}, callback, function (resp) {
      world.topicArn = resp.data.TopicArn;
    });
  });

  this.Given(/^I list the SNS topics$/, function(callback) {
    this.request(null, 'listTopics', {}, callback);
  });

  this.Then(/^the list should contain the topic ARN$/, function(callback) {
    var arn = this.topicArn;
    this.assert.contains(this.data.Topics, function(topic) {
      return topic.TopicArn === arn;
    });
    callback();
  });

  this.Then(/^I delete the SNS topic$/, function(callback) {
    this.request(null, 'deleteTopic', {TopicArn: this.topicArn}, callback);
  });

  this.Given(/^I get SNS topic attributes with an invalid ARN$/, function(callback) {
    this.request(null, 'getTopicAttributes', {TopicArn:'INVALID'}, callback, false);
  });
};
