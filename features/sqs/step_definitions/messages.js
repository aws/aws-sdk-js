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

  this.When(/^I send the message "([^"]*)"$/, function(message, callback) {
    this.request(null, 'sendMessage', {QueueUrl:this.queueUrl,MessageBody:message}, callback);
  });

  this.Then(/^the result should include a message ID$/, function(callback) {
    this.assert.compare(this.data.MessageId.length, '>', 0);
    callback();
  });

  this.Then(/^the result should have an MD5 digest of "([^"]*)"$/, function(digest, callback) {
    this.assert.equal(this.data.MD5OfMessageBody, digest);
    callback();
  });

  this.Then(/^I should eventually be able to receive "([^"]*)" from the queue$/, function(message, callback) {
    this.eventually(callback, function (next) {
      next.condition = function() {
        return this.data.Messages[0].Body === message;
      };
      this.request(null, 'receiveMessage', {QueueUrl:this.queueUrl}, next);
    });
  });

};
