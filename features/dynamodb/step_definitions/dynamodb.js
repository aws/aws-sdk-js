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
  this.Before("@dynamodb", function (next) {
    this.client = new this.AWS.DynamoDB.Client({region: 'us-west-2', maxRetries: 2});
    next();
  });

  function createTable(world, callback) {
    var params = {
      TableName: world.tableName,
      KeySchema: {
        HashKeyElement: { AttributeName: 'id', AttributeType: 'S' }
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 5,
      }
    };

    world.client.createTable(params, function(err, data) {
      if (err) {
        callback.fail(err);
        return;
      }
      world.eventually(callback, function (retry) {
        params = { TableName: world.tableName };
        world.client.describeTable(params, function(err, data) {
          if (data.Table && data.Table.TableStatus === 'ACTIVE')
            callback();
          else
            retry();
        });
      }, {maxTime: 500, delay: 10, backoff: 0});
    });
  };

  this.Given(/^I have a table$/, function(callback) {
    var world = this;
    this.tableName = 'aws-sdk-js-integration-test';
    this.client.listTables(function(err, data) {
      for (var i = 0; i < data.TableNames.length; i++) {
        if (data.TableNames[i] == world.tableName) {
          callback();
          return;
        }
      }
      createTable(world, callback);
    });
  });

  this.When(/^I put the item:$/, function(string, next) {
    var params = {TableName: this.tableName, Item: JSON.parse(string)};
    this.request(null, 'putItem', params, next);
  });

  this.Then(/^the item with id "([^"]*)" should exist$/, function(key, next) {
    var world = this;
    var params = {TableName: this.tableName, Key: {HashKeyElement: {S: key}}};
    this.client.getItem(params, function(err, data) {
      world.resp = this;
      world.error = err;
      next();
    });
  });

  this.Then(/^it should have attribute "([^"]*)" containing "([^"]*)"$/, function(attr, value, next) {
    if (this.resp.data.Item[attr].S !== value)
      next.fail("Attr value " + this.resp.data.Item[attr].S + " does not match " + value);
    else
      next();
  });

  this.When(/^I delete the table$/, function(next) {
    var params = {TableName: this.tableName};
    this.request(null, 'deleteTable', params, next);
  });

  this.Then(/^the table should eventually not exist$/, function(next) {
    var world = this;
    world.eventually(next, function (retry) {
      world.client.listTables(function(err, data) {
        for (var i = 0; i < data.TableNames.length; i++) {
          if (data.TableNames[i] == world.tableName) {
            retry();
            return;
          }
        }
        next();
      });
    });
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
        world.AWS.EventListeners.Core.HTTP_DATA.call(this, chunk, resp);
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

  this.Given(/^I try to delete an item with key "([^"]*)" from table "([^"]*)"$/, function(key, table, callback) {
    this.request(null, 'deleteItem', {TableName: table, Key: key}, callback, false);
  });

  this.Given(/^I try to delete an item with no table parameter$/, function(callback) {
    this.request(null, 'deleteItem', {}, callback, false);
  });
};
