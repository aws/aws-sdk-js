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

    this.eventually(callback, function (retry) {
      if(this.createdQueues.length == count) {
        callback();
      } else {
        retry();
      }
    }, { maxTime: 20 });
  });

  this.Then(/^list queues should eventually return the queue urls$/, function(callback) {
    var world = this;
    var createdQueues = this.createdQueues;
    this.eventually(callback, function (retry) {
      this.client.listQueues(function (err, data) {
        var matchingCount = 0;
        if (err) callback.fail(err);
        for (var i = 0; i < createdQueues.length; ++i) {
          for (var j = 0; j < data.QueueUrls.length; ++j) {
            if (createdQueues[i] == data.QueueUrls[j]) {
              matchingCount += 1;
            }
          }
        }
        if (matchingCount == createdQueues.length)
          callback();
        else
          retry();
      });
    }, { maxTime: 60 });
  });

  this.Then(/^I should delete the queues?$/, function(callback) {
    this.deletedQueues = [];
    for (var i = 0; i < this.createdQueues.length; ++i) {
      deleteQueue(this.createdQueues[i], this, callback);
    }

    this.eventually(callback, function (retry) {
      if(this.deletedQueues.length == this.createdQueues.length) {
        callback();
      } else {
        retry();
      }
    }, { maxTime: 20 });
  });

};
