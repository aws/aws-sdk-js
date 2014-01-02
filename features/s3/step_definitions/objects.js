module.exports = function () {
  /**
   * Create a single bucket that will be shared by all s3 object scenarios.
   */
  this.Before("@s3", "@objects", function (callback) {

    // execute only once
    if (this.sharedBucket) {
      callback();
      return;
    }

    this.sharedBucket = 'aws-sdk-js-integration-' +
      this.AWS.util.date.unixTimestamp() * 1000;

    this.s3.createBucket({Bucket:this.sharedBucket}, function(err, data) {
      callback();
    });
  });

  this.When(/^I write (buffer )?"([^"]*)" to the key "([^"]*)"$/, function(buffer, contents, key, next) {
    var params = {Bucket: this.sharedBucket, Key: key, Body: buffer ? new Buffer(contents) : contents};
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I write "([^"]*)" to the key "([^"]*)" with ContentLength (\d+)$/, function(contents, key, contentLength, next) {
    var params = {Bucket: this.sharedBucket, Key: key, Body: contents, ContentLength: parseInt(contentLength)};
    this.s3nochecksums = new this.AWS.S3({computeChecksums: false});
    this.request('s3nochecksums', 'putObject', params, next);
  });

  this.Then(/^the object with the key "([^"]*)" should contain "([^"]*)"$/, function(key, contents, next) {
    this.assert.equal(this.data.Body.toString().replace("\n", ""), contents);
    next();
  });

  this.When(/^I copy an object with the key "([^"]*)" to "([^"]*)"$/, function(key1, key2, next) {
    var params = {
      Bucket: this.sharedBucket, Key: key2, CopySource: '/' + this.sharedBucket + '/' + key1
    }
    this.request('s3', 'copyObject', params, next);
  });

  this.When(/^I delete the object with the key "([^"]*)"$/, function(key, next) {
    var params = {Bucket:this.sharedBucket,Key:key};
    this.request('s3', 'deleteObject', params, next);
  });

  this.Then(/^the object with the key "([^"]*)" should (not )?exist$/, function(key, shouldNotExist, next) {
    var params = { Bucket:this.sharedBucket, Key:key };
    this.eventually(next, function (retry) {
      retry.condition = function() {
        if (shouldNotExist) {
          return this.error && this.error.code == 'NoSuchKey';
        } else {
          return !this.error;
        }
      };
      this.request('s3', 'getObject', params, retry, false);
    });
  });

  this.When(/^I write file "([^"]*)" to the key "([^"]*)"$/, function(filename, key, next) {
    var fs = require('fs');
    var params = {Bucket: this.sharedBucket, Key: key, Body:
      fs.createReadStream(__dirname + '/../../extra/fixtures/' + filename)};
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I stream key "([^"]*)"$/, function(key, callback) {
    var params = {Bucket: this.sharedBucket, Key: key};
    var world = this;
    this.result = '';
    this.service.getObject(params).createReadStream().
      on('end', function() { callback(); }).
      on('data', function(d) { world.result += d.toString(); });
  });

  this.When(/^I stream2 key "([^"]*)"$/, function(key, callback) {
    if (!require('stream').Readable) return callback();
    var params = {Bucket: this.sharedBucket, Key: key};
    var world = this;
    this.result = '';
    var stream = this.service.getObject(params).createReadStream();
    stream.on('end', function() { callback(); });
    stream.on('readable', function() {
      var v = stream.read(); if (v) world.result += v;
    });
  });

  this.Then(/^the streamed data should contain "([^"]*)"$/, function(data, callback) {
    this.assert.equal(this.result.replace('\n', ''), data);
    callback();
  });

  this.When(/^I get a pre\-signed URL to GET the key "([^"]*)"$/, function(key, callback) {
    this.signedUrl = this.s3.getSignedUrl('getObject', {Bucket: this.sharedBucket, Key: key});
    callback();
  });

  this.When(/^I access the URL via HTTP GET$/, function(callback, verb) {
    var world = this;
    this.data = '';
    require('https').get(this.signedUrl, function (res) {
      res.on('data', function (chunk) {
        world.data += chunk.toString();
      }).on('end', callback);
    }).on('error', callback.fail);
  });

  this.Given(/^I get a pre\-signed URL to PUT the key "([^"]*)"(?: with data "([^"]*)")?$/, function(key, body, callback) {
    var params = {Bucket: this.sharedBucket, Key: key};
    if (body) params.Body = body;
    this.signedUrl = this.s3.getSignedUrl('putObject', params);
    callback();
  });

  this.Given(/^I access the URL via HTTP PUT with data "([^"]*)"$/, function(body, callback) {
    var world = this;
    this.data = '';

    var data = body;
    var options = require('url').parse(this.signedUrl);
    options.method = 'PUT';
    options.headers = {'Content-Length': data.length};

    var req = require('https').request(options, function (res) {
      res.on('data', function (chunk) {
        world.data += chunk.toString();
      }).on('end', callback);
    }).on('error', callback.fail).end(data);
  });

  this.Then(/^the HTTP response should equal "([^"]*)"$/, function(data, callback) {
    this.assert.equal(this.data, data);
    callback();
  });

  this.Then(/^the HTTP response should contain "([^"]*)"$/, function(data, callback) {
    this.assert.match(this.data, data);
    callback();
  });

  this.Given(/^I setup the listObjects request for the bucket$/, function(callback) {
    this.params = { Bucket: this.sharedBucket };
    callback();
  });

  // progress events

  this.When(/^I write a (\d+)KB buffer to the key "([^"]*)" with progress events$/, function(kb, key, callback) {
    var self = this;
    var body = new Buffer(new Array(kb * 1024 + 1).join('x'));
    this.progress = [];
    var req = this.s3.putObject({Bucket: this.sharedBucket, Key: key, Body: body});
    req.on('httpUploadProgress', function (p) { self.progress.push(p) });
    req.send(callback);
  });

  this.Then(/^more than (\d+) "([^"]*)" event should fire$/, function(numEvents, eventName, callback) {
    this.assert.compare(this.progress.length, '>', numEvents);
    callback();
  });

  this.Then(/^the "([^"]*)" value of the progress event should equal (\d+)KB$/, function(prop, kb, callback) {
    this.assert.equal(this.progress[0][prop], kb * 1024);
    callback();
  });

  this.Then(/^the "([^"]*)" value of the first progress event should be greater than (\d+) bytes$/, function(prop, bytes, callback) {
    this.assert.compare(this.progress[0][prop], '>', bytes);
    callback();
  });

  this.When(/^I read the key "([^"]*)" with progress events$/, function(key, callback) {
    var self = this;
    this.progress = [];
    var req = this.s3.getObject({Bucket: this.sharedBucket, Key: key}, function (err, data) { });
    req.on('httpDownloadProgress', function (p) { self.progress.push(p) });
    req.send(function (err,data) { callback(); });
  });

  // this scenario is a work around for not having an after all hook
  this.Then(/^I delete the shared bucket$/, function(next) {
    this.request('s3', 'deleteBucket', {Bucket:this.sharedBucket}, next);
  });
};
