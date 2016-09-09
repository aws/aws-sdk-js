AWS.util.update(AWS.S3.prototype, {
    /**
     * Get a pre-signed URL for a given operation name.
     *
     * @note You must ensure that you have static or previously resolved
     *   credentials if you call this method synchronously (with no callback),
     *   otherwise it may not properly sign the request. If you cannot guarantee
     *   this (you are using an asynchronous credential provider, i.e., EC2
     *   IAM roles), you should always call this method with an asynchronous
     *   callback.
     * @param operation [String] the name of the operation to call
     * @param params [map] parameters to pass to the operation. See the given
     *   operation for the expected operation parameters. In addition, you can
     *   also pass the "Expires" parameter to inform S3 how long the URL should
     *   work for.
     * @option params Expires [Integer] (900) the number of seconds to expire
     *   the pre-signed URL operation in. Defaults to 15 minutes.
     * @param callback [Function] if a callback is provided, this function will
     *   pass the URL as the second parameter (after the error parameter) to
     *   the callback function.
     * @return [String] if called synchronously (with no callback), returns the
     *   signed URL.
     * @return [null] nothing is returned if a callback is provided.
     * @example Pre-signing a getObject operation (synchronously)
     *   var params = {Bucket: 'bucket', Key: 'key'};
     *   var url = s3.getSignedUrl('getObject', params);
     *   console.log('The URL is', url);
     * @example Pre-signing a putObject (asynchronously)
     *   var params = {Bucket: 'bucket', Key: 'key'};
     *   s3.getSignedUrl('putObject', params, function (err, url) {
     *     console.log('The URL is', url);
     *   });
     * @example Pre-signing a putObject operation with a specific payload
     *   var params = {Bucket: 'bucket', Key: 'key', Body: 'body'};
     *   var url = s3.getSignedUrl('putObject', params);
     *   console.log('The URL is', url);
     * @example Passing in a 1-minute expiry time for a pre-signed URL
     *   var params = {Bucket: 'bucket', Key: 'key', Expires: 60};
     *   var url = s3.getSignedUrl('getObject', params);
     *   console.log('The URL is', url); // expires in 60 seconds
     */
    getSignedUrl: function getSignedUrl(operation, params, callback) {},
    /**
     * @overload upload(params = {}, [options], [callback])
     *   Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
     *   concurrent handling of parts if the payload is large enough. You can
     *   configure the concurrent queue size by setting `options`. Note that this
     *   is the only operation for which the SDK can retry requests with stream
     *   bodies.
     *
     *   @param (see AWS.S3.putObject)
     *   @option (see AWS.S3.ManagedUpload.constructor)
     *   @return [AWS.S3.ManagedUpload] the managed upload object that can call
     *     `send()` or track progress.
     *   @example Uploading a stream object
     *     var params = {Bucket: 'bucket', Key: 'key', Body: stream};
     *     s3.upload(params, function(err, data) {
     *       console.log(err, data);
     *     });
     *   @example Uploading a stream with concurrency of 1 and partSize of 10mb
     *     var params = {Bucket: 'bucket', Key: 'key', Body: stream};
     *     var options = {partSize: 10 * 1024 * 1024, queueSize: 1};
     *     s3.upload(params, options, function(err, data) {
     *       console.log(err, data);
     *     });
     * @callback callback function(err, data)
     *   @param err [Error] an error or null if no error occurred.
     *   @param data [map] The response data from the successful upload:
     *     * `Location` (String) the URL of the uploaded object
     *     * `ETag` (String) the ETag of the uploaded object
     *     * `Bucket` (String) the bucket to which the object was uploaded
     *     * `Key` (String) the key to which the object was uploaded
     *   @see AWS.S3.ManagedUpload
     */
    upload: function upload(params, options, callback) {}
});