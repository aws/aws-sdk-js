module.exports = function () {

  function cleanBucket(world, bucket, callback) {
    if (!bucket) { callback(); return; }

    var params = {Bucket: bucket};
    var deleteBucket = function() {
      delete params.Delete;
      world.request('s3', 'deleteBucket', params, callback, false);
    }

    world.s3.listObjects(params, function (err, data) {
      if (err) { deleteBucket(); return; }
      if (data.Contents.length > 0) {
        params.Delete = { Objects: [] };
        world.AWS.util.arrayEach(data.Contents, function (item) {
          params.Delete.Objects.push({Key: item.Key});
        });
        world.request('s3', 'deleteObjects', params, deleteBucket);
      } else {
        deleteBucket();
      }
    });
  }

  this.Before("@s3", function (callback) {
    this.service = this.s3 = new this.AWS.S3({maxRetries: 100});
    callback();
  });

  this.After("@s3", function (callback) {
    cleanBucket(this, this.bucket, callback);
  });

  this.AfterAll(function(callback) {
    cleanBucket(this, this.sharedBucket, callback);
  });

};
