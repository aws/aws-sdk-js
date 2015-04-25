module.exports = function () {

  this.Before('@s3', function (callback) {
    this.service = this.s3 = new this.AWS.S3({maxRetries: 100});
    callback();
  });

  this.registerHandler('AfterFeatures', function(event, callback) {
    var path = require('path');
    var fs = require('fs');
    var filePath = path.resolve('integ.buckets.json');
    if (!fs.existsSync(filePath)) return callback();

    var AWS = require(path.resolve('./'));
    AWS.config.loadFromPath(path.resolve('configuration'));
    var s3 = new AWS.S3({maxRetries: 100});

    function cleanBucket(bucket, done) {
      var params = {Bucket: bucket};
      var deleteBucket = function() {
        delete params.Delete;
        s3.deleteBucket(params, function(delErr, delData) {
          if (cache.buckets.length) {
            cleanBucket(buckets.shift(), done);
          }
          else {
            fs.unlinkSync(filePath);
            done();
          }
        });
      };
      s3.listObjects(params, function (listErr, listData) {
        if (listErr) return callback.fail(listErr);
        if (listData.Contents.length > 0) {
          params.Delete = { Objects: [] };
          AWS.util.arrayEach(listData.Contents, function (item) {
            params.Delete.Objects.push({Key: item.Key});
          });
          s3.deleteObjects(params, deleteBucket);
        } else {
          deleteBucket();
        }
      });
    }

    try {
      var cache = JSON.parse(fs.readFileSync(filePath));
      var buckets = cache.buckets;
      cleanBucket(buckets.shift(), callback);
    } catch (fileErr) {
      callback.fail(fileErr);
    }
    callback();
  });


};
