var jmespath = require('jmespath');

module.exports = function() {
  this.Before("@dynamodb", function (next) {
    this.service = new this.AWS.DynamoDB({
      maxRetries: 2
    });
    next();
  });

  function createTable(world, callback) {
    var params = {
      TableName: world.tableName,
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      BillingMode: "PAY_PER_REQUEST"
    };

    world.service.createTable(params, function(err, data) {
      if (err) {
        callback.fail(err);
        return;
      }
      params = { TableName: world.tableName };
      world.service.waitFor('tableExists', params, callback);
    });
  }

  this.Given(/^I have a table$/, function(callback) {
    var world = this;
    this.service.listTables(function(err, data) {
      for (var i = 0; i < data.TableNames.length; i++) {
        if (data.TableNames[i] == world.tableName) {
          callback();
          return;
        }
      }
      createTable(world, callback);
    });
  });

  this.When(/^I create a table$/, function(callback) {
    var world = this;
    this.tableName = this.uniqueName("aws-sdk-js-integration-");
    createTable(world, callback);
  });

  this.When(/^I put the item:$/, function(string, next) {
    var params = {TableName: this.tableName, Item: JSON.parse(string)};
    this.request(null, 'putItem', params, next);
  });

  this.Then(/^the item with id "([^"]*)" should exist$/, function(key, next) {
    var world = this;
    var params = {TableName: this.tableName, Key: {id: {S: key}}};
    this.request(null, 'getItem', params, next);
  });

  this.Then(/^it should have attribute "([^"]*)" containing "([^"]*)"$/, function(attr, value, next) {
    this.assert.equal(jmespath.search(this.data.Item, attr), value);
    next();
  });

  this.When(/^I delete the table$/, function(next) {
    var params = {TableName: this.tableName};
    this.request(null, 'deleteTable', params, next);
  });

  this.Then(/^the table should eventually exist$/, function(callback) {
    var params = {TableName: this.tableName};
    this.service.waitFor('tableExists', params, callback);
  });

  this.Then(/^the table should eventually not exist$/, function(callback) {
    var params = {TableName: this.tableName};
    this.service.waitFor('tableNotExists', params, callback);
  });

  this.Given(/^my first request is corrupted with CRC checking (ON|OFF)$/, function(toggle, callback) {
    var world = this;
    this.service.config.dynamoDbCrc32 = toggle == 'ON' ? true : false;
    var req = this.service.listTables();
    this.service.config.dynamoDbCrc32 = true;
    req.removeAllListeners('httpData');
    req.on('httpData', function(chunk, resp) {
      if (resp.retryCount == 0) {
        resp.httpResponse.body = Buffer.from('{"invalid":"response"}');
      } else {
        world.AWS.EventListeners.Core.HTTP_DATA.call(this, chunk, resp);
      }
    });
    req.on('complete', function(resp) {
      world.error = resp.error;
      world.response = resp;
      if (resp.error) callback.fail(resp.error);
      else callback();
    });
    req.send();
  });

  this.Then(/^the request should( not)? be retried$/, function(retry, callback) {
    if (retry && this.response.retryCount > 0) callback.fail('Request was incorrectly retried');
    if (!retry && this.response.retryCount == 0) callback.fail('Request was incorrectly retried');
    callback();
  });

  this.Given(/^all of my requests are corrupted with CRC checking ON$/, function(callback) {
    var world = this;
    var req = this.service.listTables();
    req.removeAllListeners('httpData');
    req.on('httpData', function(chunk, resp) {
      resp.httpResponse.body = Buffer.from('{"invalid":"response"}');
    });
    req.on('complete', function(resp) {
      world.error = resp.error;
      world.response = resp;
      callback();
    });
    req.send();
  });

  this.When(/^the request is retried the maximum number of times$/, function(callback) {
    if (this.response.retryCount != 2) callback.fail('Incorrect retry count');
    callback();
  });

  this.Then(/^the request should( not)? fail with a CRC checking error$/, function(failed, callback) {
    if (failed && this.error) callback.fail(this.error);
    if (!failed && !this.error) callback.fail('Did not fail when should have');
    callback();
  });

  this.Given(/^I try to delete an item with key "([^"]*)" from table "([^"]*)"$/, function(key, table, callback) {
    var params = {TableName: table, Key: {HashKeyElement: {S: key}}};
    this.request(null, 'deleteItem', params, callback, false);
  });

  this.Given(/^I try to delete a table with an empty table parameter$/, function(callback) {
    this.request(null, 'deleteTable', {TableName: ''}, callback, false);
  });
};
