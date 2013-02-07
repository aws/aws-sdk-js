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

  function createQueue(world, callback) {
    var timestamp = world.AWS.util.date.unixTimestamp() * 1000;
    var name = 'aws-sdk-js-integration-' + timestamp
    world.client.createQueue({QueueName:name}, function(err, data) {
      if (err) callback.fail(err);
      world.createdQueues.push(data.QueueUrl);
      world.queueUrl = data.QueueUrl;
    });
  };

  function deleteQueue(url, world, callback) {
    world.client.deleteQueue({QueueUrl:url}, function(err, data) {
      if (err) callback.fail(err);
      world.deletedQueues.push(url);
    });
  };

  this.Given(/^I create (a|\d+) queues?$/, function(count, callback) {
    this.createdQueues = []

    count = count == 'a' ? 1 : parseInt(count)
    for (var i = 0; i < count; ++i) {
      createQueue(this, callback);
    }

    this.eventually(callback, function (next) {
      if (this.createdQueues.length == count) {
        next();
      } else {
        next.fail();
      }
    }, { maxTime: 20 });
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

  this.Then(/^I should delete the queues?$/, function(callback) {
    this.deletedQueues = [];
    for (var i = 0; i < this.createdQueues.length; ++i) {
      deleteQueue(this.createdQueues[i], this, callback);
    }

    this.eventually(callback, function (next) {
      if (this.deletedQueues.length == this.createdQueues.length) {
        next();
      } else {
        next.fail();
      }
    }, { maxTime: 20 });
  });

};
