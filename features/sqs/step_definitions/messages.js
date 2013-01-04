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

module.exports = function () {
  this.Given(/^I create a queue$/, function(next) {
    var world = this;
    this.queue = 'aws-sdk-js-integration-' +
      this.AWS.util.date.unixTimestamp() * 1000;
    this.client.createQueue({QueueName:this.queue}, function(err, data) {
      world.queueUrl = data.QueueUrl;
      if (err) next.fail();
      else next();
    });
  });

  this.When(/^I send the message "([^"]*)"$/, function(message, callback) {
    var world = this;
    this.client.sendMessage({QueueUrl:this.queueUrl,MessageBody:message}, function(err, data) {
      if (err) callback.fail();
      world.data = data;
      callback();
    });
  });

  this.Then(/^the result should include a message ID$/, function(callback) {
    if (this.data.MessageId) callback();
    else callback.fail();
  });

  this.Then(/^the result should have an MD5 digest of "([^"]*)"$/, function(digest, callback) {
    if (this.data.MD5OfMessageBody === digest) callback();
    else callback.fail();
  });

  this.Then(/^I should eventually be able to receive "([^"]*)" from the queue$/, function(message, callback) {
    var world = this;
    this.eventually(callback, function (retry) {
      this.client.receiveMessage({QueueUrl:world.queueUrl}, function(err, data) {
        var params = {QueueUrl:world.queueUrl,ReceiptHandle:data.Message.ReceiptHandle};
        if (err) retry();
        else {
          var success = data.Message.Body === message;
          world.client.deleteMessage(params, function(err, data) {
            success && err ? callback.fail() : callback();
          });
        }
      });
    });
  });

  this.Then(/^I should delete the queue$/, function(callback) {
    this.request('client', 'deleteQueue', {QueueUrl:this.queueUrl}, callback);
  });
};
