/**
 * The managed uploader allows for easy and efficient uploading of buffers,
 * blobs, or streams, using a configurable amount of concurrency to perform
 * multipart uploads where possible. This abstraction also enables uploading
 * streams of unknown size due to the use of multipart uploads.
 *
 * To construct a managed upload object, see the {constructor} function.
 *
 * ## Tracking upload progress
 *
 * The managed upload object can also track progress by attaching an
 * 'httpUploadProgress' listener to the upload manager. This event is similar
 * to {AWS.Request~httpUploadProgress} but groups all concurrent upload progress
 * into a single event. See {AWS.S3.ManagedUpload~httpUploadProgress} for more
 * information.
 *
 * ## Handling Multipart Cleanup
 *
 * By default, this class will automatically clean up any multipart uploads
 * when an individual part upload fails. This behavior can be disabled in order
 * to manually handle failures by setting the `leavePartsOnError` configuration
 * option to `true` when initializing the upload object.
 *
 * @!event httpUploadProgress(progress)
 *   Triggered when the uploader has uploaded more data.
 *   @note The `total` property may not be set if the stream being uploaded has
 *     not yet finished chunking. In this case the `total` will be undefined
 *     until the total stream size is known.
 *   @note This event will not be emitted in Node.js 0.8.x.
 *   @param progress [map] An object containing the `loaded` and `total` bytes
 *     of the request and the `key` of the S3 object. Note that `total` may be undefined until the payload
 *     size is known.
 *   @context (see AWS.Request~send)
 */
AWS.S3.ManagedUpload = AWS.util.inherit({
    /**
     * Creates a managed upload object with a set of configuration options.
     *
     * @note A "Body" parameter is required to be set prior to calling {send}.
     * @option options params [map] a map of parameters to pass to the upload
     *   requests. The "Body" parameter is required to be specified either on
     *   the service or in the params option.
     * @note ContentMD5 should not be provided when using the managed upload object.
     *   Instead, setting "computeChecksums" to true will enable automatic ContentMD5 generation
     *   by the managed upload object.
     * @option options queueSize [Number] (4) the size of the concurrent queue
     *   manager to upload parts in parallel. Set to 1 for synchronous uploading
     *   of parts. Note that the uploader will buffer at most queueSize * partSize
     *   bytes into memory at any given time.
     * @option options partSize [Number] (5mb) the size in bytes for each
     *   individual part to be uploaded. Adjust the part size to ensure the number
     *   of parts does not exceed {maxTotalParts}. See {minPartSize} for the
     *   minimum allowed part size.
     * @option options leavePartsOnError [Boolean] (false) whether to abort the
     *   multipart upload if an error occurs. Set to true if you want to handle
     *   failures manually.
     * @option options service [AWS.S3] an optional S3 service object to use for
     *   requests. This object might have bound parameters used by the uploader.
     * @example Creating a default uploader for a stream object
     *   var upload = new AWS.S3.ManagedUpload({
     *     params: {Bucket: 'bucket', Key: 'key', Body: stream}
     *   });
     * @example Creating an uploader with concurrency of 1 and partSize of 10mb
     *   var upload = new AWS.S3.ManagedUpload({
     *     partSize: 10 * 1024 * 1024, queueSize: 1,
     *     params: {Bucket: 'bucket', Key: 'key', Body: stream}
     *   });
     * @see send
     */
    constructor: function ManagedUpload(options) {},
    /**
     * @readonly
     * @return [Number] the minimum number of bytes for an individual part
     *   upload.
     */
    minPartSize: 1024 * 1024 * 5,
    /**
     * @readonly
     * @return [Number] the maximum allowed number of parts in a multipart upload.
     */
    maxTotalParts: 10000,
    /**
     * Initiates the managed upload for the payload.
     *
     * @callback callback function(err, data)
     *   @param err [Error] an error or null if no error occurred.
     *   @param data [map] The response data from the successful upload:
     *     * `Location` (String) the URL of the uploaded object
     *     * `ETag` (String) the ETag of the uploaded object
     *     * `Bucket` (String) the bucket to which the object was uploaded
     *     * `Key` (String) the key to which the object was uploaded
     * @example Sending a managed upload object
     *   var params = {Bucket: 'bucket', Key: 'key', Body: stream};
     *   var upload = new AWS.S3.ManagedUpload({params: params});
     *   upload.send(function(err, data) {
     *     console.log(err, data);
     *   });
     */
    send: function(callback) {},
    /**
     * Aborts a managed upload, including all concurrent upload requests.
     * @note By default, calling this function will cleanup a multipart upload
     *   if one was created. To leave the multipart upload around after aborting
     *   a request, configure `leavePartsOnError` to `true` in the {constructor}.
     * @note Calling {abort} in the browser environment will not abort any requests
     *   that are already in flight. If a multipart upload was created, any parts
     *   not yet uploaded will not be sent, and the multipart upload will be cleaned up.
     * @example Aborting an upload
     *   var params = {
     *     Bucket: 'bucket', Key: 'key',
     *     Body: new Buffer(1024 * 1024 * 25) // 25MB payload
     *   };
     *   var upload = s3.upload(params);
     *   upload.send(function (err, data) {
     *     if (err) console.log("Error:", err.code, err.message);
     *     else console.log(data);
     *   });
     *
     *   // abort request in 1 second
     *   setTimeout(upload.abort.bind(upload), 1000);
     */
    abort: function() {}
});