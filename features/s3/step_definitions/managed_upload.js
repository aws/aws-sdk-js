module.exports = function () {

  this.When(/^I use S3 managed upload to upload(?: a| an) (empty|small|large) buffer to the key "([^"]*)"$/, function (size, key, callback) {
    var self = this;
    var buffer = self.createBuffer(size);
    var params = {Bucket: self.sharedBucket, Key: key, Body: buffer};
    self.s3.upload(params, function (err, data) {
      self.error = err;
      self.data = data;
      callback();
    });
  });

  this.Given(/^I generate the MD5 checksum of a (\d+MB) buffer$/, function(size, next) {
    this.uploadBuffer = this.createBuffer(size);
    this.sentContentMD5 = this.AWS.util.crypto.md5(this.uploadBuffer, 'base64');
    next();
  });

  this.Given(/^I use S3 managed upload to upload the buffer to the key "([^"]*)"$/, function (key, callback) {
    var self = this;
    var params = {Bucket: self.sharedBucket, Key: key, Body: self.uploadBuffer};
    self.s3.upload(params, function (err, data) {
      self.error = err;
      self.data = data;
      callback();
    });
  });

  this.Then(/^the multipart upload should succeed$/, function (callback) {
    this.assert.equal(this.error, null);
    this.assert.equal(typeof this.data.Location, 'string');
    callback();
  });

  this.When(/^I use S3 managed upload to upload(?: a| an) (empty|small|large) stream to the key "([^"]*)"$/, function (size, key, callback) {
    var fs = require('fs');
    var self = this;
    var fileName = self.createFile(size);
    var params = {Bucket: self.sharedBucket, Key: key, Body: fs.createReadStream(fileName)};

    self.progressEvents = [];
    var progress = function(info) {
      self.progressEvents.push(info);
    };

    self.s3.upload(params).on('httpUploadProgress', progress).send(function (err, data) {
      self.error = err;
      self.data = data;
      callback();
    });
  });

  this.Then(/^I should get progress events$/, function (callback) {
    this.assert.compare(this.progressEvents.length, '>', 0);
    callback();
  });

  this.Then(/^the ContentLength should equal (\d+)$/, function (val, callback) {
    this.assert.equal(this.data.ContentLength, val);
    callback();
  });
};
