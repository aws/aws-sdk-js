module.exports = function () {

  this.When(/^I use S3 managed upload to upload a large buffer$/, function (callback) {
    var self = this;
    var buffer = new Buffer(1024 * 1024 * 12);
    var params = {Bucket: self.sharedBucket, Key: 'largebuffer', Body: buffer};
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

  this.When(/^I use S3 managed upload to upload a large stream$/, function (callback) {
    var self = this;
    var stream = this.AWS.util.buffer.toStream(new Buffer(1024 * 1024 * 10));
    var params = {Bucket: self.sharedBucket, Key: 'largestream', Body: stream};

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

  this.Then(/^I should head the managed upload object$/, function (callback) {
    var params = {Bucket: this.sharedBucket, Key: 'largestream'};
    this.request('s3', 'headObject', params, callback);
  });

  this.Then(/^the ContentLength should equal (\d+)$/, function (val, callback) {
    this.assert.equal(this.data.ContentLength, val);
    callback();
  });
};
