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

  this.Given(/^I create a queue with the prefix name "([^"]*)"$/, function(prefix, callback) {
    var name = this.uniqueName(prefix);
    this.request(null, 'createQueue', { QueueName: name }, callback, function() {
      this.queueUrl = this.data.QueueUrl;
      this.createdQueues.push(this.queueUrl);
    });
  });

  this.Then(/^list queues should eventually return the queue urls$/, function(callback) {
    this.eventually(callback, function (next) {
      next.condition = function() {
        var matchingCount = 0;
        for (var i = 0; i < this.createdQueues.length; ++i) {
          for (var j = 0; j < this.data.QueueUrls.length; ++j) {
            if (this.createdQueues[i] == this.data.QueueUrls[j]) {
              matchingCount++;
            }
          }
        }
        return matchingCount == this.createdQueues.length;
      };
      this.request(null, 'listQueues', {}, next);
    }, { maxTime: 60 });
  });

  this.Then(/^I delete the SQS queue$/, function (callback) {
    var url = this.createdQueues.pop();
    this.request(null, 'deleteQueue', { QueueUrl: url }, callback);
  });

};
