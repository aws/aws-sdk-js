module.exports = function() {

  this.When(/^I create a bucket$/, function(next) {
    this.bucket = this.uniqueName('aws-sdk-js-integration');
    this.request('s3', 'createBucket', {Bucket:this.bucket}, next);
  });

  this.When(/^I create a bucket with the location constraint "([^"]*)"$/, function(loc, next) {
    this.bucket = this.uniqueName('aws-sdk-js-integration');
    var params = { Bucket: this.bucket, CreateBucketConfiguration: { LocationConstraint: loc }};
    this.request('s3', 'createBucket', params, next);
  });

  this.Then(/^the bucket should exist$/, function(next) {
    this.s3.waitFor('bucketExists', {Bucket:this.bucket}, next);
  });

  this.When(/^I delete the bucket$/, function(next) {
    this.request('s3', 'deleteBucket', {Bucket:this.bucket}, next);
  });

  this.Then(/^the bucket should not exist$/, function(next) {
    this.s3.waitFor('bucketNotExists', {Bucket:this.bucket}, next);
  });

  this.Then(/^the bucket should have a location constraint of "([^"]*)"$/, function(loc, next) {
    var self = this;
    self.s3.getBucketLocation({Bucket:self.bucket}, function(err, data) {
      self.assert.equal(data.LocationConstraint, loc);
      next();
    });
  });

  this.Then(/^I delete the bucket$/, function(next) {
    this.request('s3', 'deleteBucket', {Bucket:this.bucket}, next);
  });

  this.When(/^I put a transition lifecycle configuration on the bucket with prefix "([^"]*)"$/, function(prefix, callback) {
    var params = {
      Bucket: this.bucket,
      LifecycleConfiguration: {
        Rules: [{
          Prefix: prefix,
          Status: 'Enabled',
          Transition: {Days: 0, StorageClass: 'GLACIER'}
        }]
      }
    };

    this.request('s3', 'putBucketLifecycle', params, callback);
  });

  this.When(/^I get the transition lifecycle configuration on the bucket$/, function(callback) {
    this.eventually(callback, function(next) {
      this.request('s3', 'getBucketLifecycle', {Bucket: this.bucket}, next);
    });
  });

  this.Then(/^the lifecycle configuration should have transition days of (\d+)$/, function(days, callback) {
    this.assert.equal(this.data.Rules[0].Transition.Days, 0);
    callback();
  });

  this.Then(/^the lifecycle configuration should have transition storage class of "([^"]*)"$/, function(value, callback) {
    this.assert.equal(this.data.Rules[0].Transition.StorageClass, value);
    callback();
  });

  this.When(/^I put a bucket CORS configuration$/, function(callback) {
    var params = {
      Bucket: this.bucket,
      CORSConfiguration: {
        CORSRules: [{
          AllowedMethods: ['DELETE', 'POST', 'PUT'],
          AllowedOrigins: ['http://example.com'],
          AllowedHeaders: ['*'],
          ExposeHeaders: ['x-amz-server-side-encryption'],
          MaxAgeSeconds: 5000
        }]
      }
    }
    this.request('s3', 'putBucketCors', params, callback);
  });

  this.When(/^I get the bucket CORS configuration$/, function(callback) {
    this.request('s3', 'getBucketCors', {Bucket: this.bucket}, callback);
  });

  this.Then(/^the AllowedMethods list should inclue "([^"]*)"$/, function(value, callback) {
    this.assert.equal(this.data.CORSRules[0].AllowedMethods.sort().join(" "), "DELETE POST PUT");
    callback();
  });

  this.Then(/^the AllowedOrigin value should equal "([^"]*)"$/, function(value, callback) {
    this.assert.equal(this.data.CORSRules[0].AllowedOrigins[0], value);
    callback();
  });

  this.Then(/^the AllowedHeader value should equal "([^"]*)"$/, function(value, callback) {
    this.assert.equal(this.data.CORSRules[0].AllowedHeaders[0], value);
    callback();
  });

  this.Then(/^the ExposeHeader value should equal "([^"]*)"$/, function(value, callback) {
    this.assert.equal(this.data.CORSRules[0].ExposeHeaders[0], value);
    callback();
  });

  this.Then(/^the MaxAgeSeconds value should equal (\d+)$/, function(value, callback) {
    this.assert.equal(this.data.CORSRules[0].MaxAgeSeconds, parseInt(value));
    callback();
  });

  this.When(/^I put a bucket tag with key "([^"]*)" and value "([^"]*)"$/, function(key, value, callback) {
    var params = {
      Bucket: this.bucket,
      Tagging: {
        TagSet: [
          {Key: key, Value: value}
        ]
      }
    };

    this.request('s3', 'putBucketTagging', params, callback);
  });

  this.When(/^I get the bucket tagging$/, function(callback) {
    this.request('s3', 'getBucketTagging', {Bucket: this.bucket}, callback);
  });

  this.Then(/^the first tag in the tag set should have key and value "([^"]*)", "([^"]*)"$/, function(key, value, callback) {
    this.assert.equal(this.data.TagSet[0].Key, key);
    this.assert.equal(this.data.TagSet[0].Value, value);
    callback();
  });
};
