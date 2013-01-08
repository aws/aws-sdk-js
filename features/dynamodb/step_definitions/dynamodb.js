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
  this.Before("@dynamodb", function (callback) {
    this.client = new this.AWS.DynamoDB.Client({region: 'us-west-2', maxRetries: 2});
    callback();
  });

  this.Given(/^my first request is corrupted with CRC checking (ON|OFF)$/, function(toggle, callback) {
    var world = this;
    this.client.config.dynamoDbCrc32 = toggle == 'ON' ? true : false;
    var req = this.client.listTables();
    this.client.config.dynamoDbCrc32 = true;
    req.removeAllListeners('httpData');
    req.on('httpData', function(chunk, resp) {
      if (resp.retryCount == 0) {
        resp.httpResponse.body = new Buffer('{"invalid":"response"}');
      } else {
        world.AWS.EventListeners.Http.HTTP_DATA.call(this, chunk, resp);
      }
    });
    req.on('complete', function(resp) {
      world.resp = resp;
      if (resp.error) callback.fail(resp.error);
      else callback();
    });
    req.send();
  });

  this.Then(/^the request should( not)? be retried$/, function(retry, callback) {
    if (retry && this.resp.retryCount > 0) callback.fail('Request was incorrectly retried');
    if (!retry && this.resp.retryCount == 0) callback.fail('Request was incorrectly retried');
    callback();
  });

  this.Given(/^all of my requests are corrupted with CRC checking ON$/, function(callback) {
    var world = this;
    var req = this.client.listTables();
    req.removeAllListeners('httpData');
    req.on('httpData', function(chunk, resp) {
      resp.httpResponse.body = new Buffer('{"invalid":"response"}');
    });
    req.on('complete', function(resp) {
      world.resp = resp;
      callback();
    });
    req.send();
  });

  this.When(/^the request is retried the maximum number of times$/, function(callback) {
    if (this.resp.retryCount != 2) callback.fail('Incorrect retry count');
    callback();
  });

  this.Then(/^the request should( not)? fail with a CRC checking error$/, function(failed, callback) {
    if (failed && this.resp.error) callback.fail(this.resp.error);
    if (!failed && !this.resp.error) callback.fail('Did not fail when should have');
    callback();
  });
};
