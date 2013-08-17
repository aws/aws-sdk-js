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
        AWS.util.arrayEach(data.Contents, function (item) {
          params.Delete.Objects.push({Key: item.Key});
        });
        world.request('s3', 'deleteObjects', params, deleteBucket);
      } else {
        deleteBucket();
      }
    });
  }

  this.Before("@s3", function (callback) {
    this.service = this.s3 = new this.AWS.S3.Client();
    callback();
  });

  this.After("@s3", function (callback) {
    cleanBucket(this, this.bucket, callback);
  });

  this.AfterAll(function(callback) {
    cleanBucket(this, this.sharedBucket, callback);
  });

};
