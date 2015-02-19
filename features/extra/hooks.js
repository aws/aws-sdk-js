var util = require('util');
var realExit = process.exit;

module.exports = function () {
  var world = require('./world.js').WorldInstance;
  this.World = require('./world.js').World;

  world.cleanupTasks = new world.AWS.SequentialExecutor();

  process.exit = function(code) {
    var finalCallback = function() { realExit(code); };
    world.cleanupTasks.emit('cleanup', [], finalCallback);
  };

  this.AfterAll = function(callback) {
    world.cleanupTasks.onAsync('cleanup', callback.bind(world));
  };

  this.Before(function(callback) {
    this.params = {};
    callback();
  });

  /* Global error code steps */

  this.Given(/^I run the "([^"]*)" operation$/, function (operation, callback) {
    this.request(null, operation, {}, callback, false);
  });

  this.Given(/^I run the "([^"]*)" operation with params:$/, function (operation, params, callback) {
    this.request(null, operation, JSON.parse(params), callback, false);
  });

  this.Then(/^the request should be successful$/, function (callback) {
    this.assert.ok(!this.error, 'Response was not successful');
    callback();
  });

  this.Then(/^the value at "([^"]*)" should be a list$/, function (path, callback) {
    var value = this.AWS.util.jamespath.find(path, this.data);
    this.assert.ok(Array.isArray(value), 'expected ' + util.inspect(value) + ' to be a list');
    callback();
  });

  this.Then(/^the value at "([^"]*)" should be a number$/, function (path, callback) {
    var value = this.AWS.util.jamespath.find(path, this.data);
    this.assert.ok(typeof value === 'number', 'expected ' + util.inspect(value) + ' to be a number');
    callback();
  });

  this.Then(/^the value at "([^"]*)" should be a string$/, function (path, callback) {
    var value = this.AWS.util.jamespath.find(path, this.data);
    this.assert.ok(typeof value === 'string', 'expected ' + util.inspect(value) + ' to be a string');
    callback();
  });

  this.Then(/^the error code should be "([^"]*)"$/, function(code, callback) {
    this.assert.ok(this.error, 'Response does not contain an error');
    this.assert.equal(this.error.code, code);
    callback();
  });

  this.Then(/^the error message should (be|equal|match|contain):$/, function(matcher, message, callback) {
    if (matcher === 'be') matcher = 'equal';
    if (matcher === 'contain') matcher = 'match';
    this.assert.ok(this.error, 'Response does not contain an error');
    this.assert[matcher](this.error.message, message);
    callback();
  });

  this.Then(/^the status code should be (\d+)$/, function(status, callback) {
    this.assert.equal(this.response.httpResponse.statusCode, parseInt(status));
    callback();
  });

  this.Then(/^I should get the error:$/, function(table, callback) {
    var err = table.hashes()[0];
    this.assert.equal(this.error.code, err.code);
    this.assert.equal(this.error.message, err.message);
    callback();
  });

  this.Given(/^I have a "([^"]*)" service in the "([^"]*)" region$/, function(svc, region, callback) {
    this.service = new this.AWS[svc]({ region: region });
    callback();
  });

  this.Given(/^I paginate the "([^"]*)" operation with limit (\d+)(?: and max pages (\d+))?$/, function(operation, limit, maxPages, callback) {
    limit = parseInt(limit);
    if (maxPages) maxPages = parseInt(maxPages);

    var world = this;
    this.numPages = 0;
    this.numMarkers = 0;
    this.operation = operation;
    this.paginationConfig = this.service.paginationConfig(operation);
    this.params = this.params || {};

    var marker = this.paginationConfig.outputToken;
    if (this.paginationConfig.limitKey) {
      this.params[this.paginationConfig.limitKey] = limit;
    }
    this.service[operation](this.params).eachPage(function (err, data) {
      if (err) callback.fail(err);
      else if (data === null) callback();
      else if (maxPages && world.numPages === maxPages) {
        callback();
        return false;
      }
      else {
        if (data[marker]) world.numMarkers++;
        world.numPages++;
        world.data = data;
      }
    });
  });

  this.Then(/^I should get more than one page$/, function(callback) {
    this.assert.compare(this.numPages, '>', 1);
    callback();
  });

  this.Then(/^I should get (\d+) pages$/, function(numPages, callback) {
    this.assert.equal(this.numPages, parseInt(numPages));
    callback();
  });

  this.Then(/^I should get numPages - 1 markers$/, function(callback) {
    this.assert.equal(this.numMarkers, this.numPages - 1);
    callback();
  });

  this.Then(/^the last page should not contain a marker$/, function(callback) {
    var marker = this.paginationConfig.outputToken;
    this.assert.equal(this.data[marker], null);
    callback();
  });


  this.Then(/^the result at (\w+) should contain a property (\w+) with an? (\w+)$/, function(wrapper, property, type, callback) {
    if (type === 'Array' || type === 'Date') {
      this.assert.equal(this.AWS.util.isType(this.data[wrapper][property], type), true);
    } else {
      this.assert.equal(typeof this.data[wrapper][property], type);
    }
    callback();
  });

  this.Then(/^the result should contain a property (\w+) with an? (\w+)$/, function(property, type, callback) {
    if (type === 'Array' || type === 'Date') {
      this.assert.equal(this.AWS.util.isType(this.data[property], type), true);
    } else {
      this.assert.equal(typeof this.data[property], type);
    }
    callback();
  });

};
