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


AWS = {};

/**
 * Constructs a service interface and a low-level {Client}.  Use the +client+
 * property to make API calls.  Each API operation is exposed as a function on
 * the +client+.
 *
 * === Sending a Request Using S3
 *
 *   svc = new AWS.S3();
 *   svc.client.OPERATION_NAME(params, function (err, data) {
 *     if (err) {
 *       console.log(err); // an error occurred
 *     } else {
 *       console.log(data); // successful response
 *     }
 *   });
 *
 * @!method constructor(options)
 *   Constructs a service interface.  The returned service will have a {client}
 *   property that provides access to the API operations.
 *   @option (see AWS.S3.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.S3.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.S3.Client
 *
 */
AWS.S3 = inherit({})

/**
 * The low-level S3 client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method abortMultipartUpload(params, callback)
 *   Calls the AbortMultipartUpload API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +UploadId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadAbort.html
 *     Amazon S3 Documentation for AbortMultipartUpload
 *
 * @!method completeMultipartUpload(params, callback)
 *   Calls the CompleteMultipartUpload API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +MultipartUpload+ - (<tt>Object</tt>)
 *       * +Parts+ - (<tt>Array<Object></tt>)
 *         * +ETag+ - (<tt>String</tt>) Entity tag returned when the part
 *           was uploaded.
 *         * +PartNumber+ - (<tt>Integer</tt>) Part number that
 *           identifies the part.
 *     * +UploadId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Location+ - (<tt>String</tt>)
 *       * +Bucket+ - (<tt>String</tt>)
 *       * +Key+ - (<tt>String</tt>)
 *       * +ETag+ - (<tt>String</tt>) Entity tag for the uploaded object.
 *       * +Expiration+ - (<tt>Date</tt>) If the object expiration is
 *         configured, this will contain the expiration date (expiry-date)
 *         and rule ID (rule-id). The value of rule-id is URL encoded.
 *       * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *         encryption algorithm used when storing this object in S3.
 *       * +VersionId+ - (<tt>String</tt>) Version of the object.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadComplete.html
 *     Amazon S3 Documentation for CompleteMultipartUpload
 *
 * @!method copyObject(params, callback)
 *   Calls the CopyObject API operation.
 *   @param params [Object]
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the object.
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +CacheControl+ - (<tt>String</tt>) Specifies caching behavior
 *       along the request/reply chain.
 *     * +ContentDisposition+ - (<tt>String</tt>) Specifies
 *       presentational information for the object.
 *     * +ContentEncoding+ - (<tt>String</tt>) Specifies what content
 *       encodings have been applied to the object and thus what decoding
 *       mechanisms must be applied to obtain the media-type referenced
 *       by the Content-Type header field.
 *     * +ContentLanguage+ - (<tt>String</tt>) The language the content
 *       is in.
 *     * +ContentType+ - (<tt>String</tt>) A standard MIME type
 *       describing the format of the object data.
 *     * +CopySource+ - (*required*, <tt>String</tt>) The name of the
 *       source bucket and key name of the source object, separated by a
 *       slash (/). Must be URL-encoded.
 *     * +CopySourceIfMatch+ - (<tt>Date</tt>) Copies the object if its
 *       entity tag (ETag) matches the specified tag.
 *     * +CopySourceIfModifiedSince+ - (<tt>Date</tt>) Copies the object
 *       if it has been modified since the specified time.
 *     * +CopySourceIfNoneMatch+ - (<tt>Date</tt>) Copies the object if
 *       its entity tag (ETag) is different than the specified ETag.
 *     * +CopySourceIfUnmodifiedSince+ - (<tt>Date</tt>) Copies the
 *       object if it hasn''t been modified since the specified time.
 *     * +Expires+ - (<tt>Date</tt>) The date and time at which the
 *       object is no longer cacheable.
 *     * +GrantFullControl+ - (<tt>String</tt>) Gives the grantee READ,
 *       READ_ACP, and WRITE_ACP permissions on the object.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to read the
 *       object data and its metadata.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       object ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable object.
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *       store with the object in S3.
 *     * +MetadataDirective+ - (<tt>String</tt>) Specifies whether the
 *       metadata is copied from the source object or replaced with
 *       metadata provided in the request.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +StorageClass+ - (<tt>String</tt>) The type of storage to use
 *       for the object. Defaults to 'STANDARD'.
 *     * +WebsiteRedirectLocation+ - (<tt>String</tt>) If the bucket is
 *       configured as a website, redirects requests for this object to
 *       another object in the same bucket or to an external URL. Amazon
 *       S3 stores the value of this header in the object metadata.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CopyObjectResult+ - (<tt>Object</tt>)
 *         * +ETag+ - (<tt>String</tt>)
 *         * +LastModified+ - (<tt>String</tt>)
 *       * +Expiration+ - (<tt>String</tt>) If the object expiration is
 *         configured, the response includes this header.
 *       * +CopySourceVersionId+ - (<tt>String</tt>)
 *       * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *         encryption algorithm used when storing this object in S3.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectCOPY.html
 *     Amazon S3 Documentation for CopyObject
 *
 * @!method createBucket(params, callback)
 *   Calls the CreateBucket API operation.
 *   @param params [Object]
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the bucket.
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +CreateBucketConfiguration+ - (<tt>Object</tt>)
 *       * +LocationConstraint+ - (<tt>String</tt>) Specifies the region
 *         where the bucket will be created.
 *     * +GrantFullControl+ - (<tt>String</tt>) Allows grantee the read,
 *       write, read ACP, and write ACP permissions on the bucket.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to list the
 *       objects in the bucket.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       bucket ACL.
 *     * +GrantWrite+ - (<tt>String</tt>) Allows grantee to create,
 *       overwrite, and delete any object in the bucket.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable bucket.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Location+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUT.html
 *     Amazon S3 Documentation for CreateBucket
 *
 * @!method createMultipartUpload(params, callback)
 *   Calls the CreateMultipartUpload API operation.
 *   @param params [Object]
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the object.
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +CacheControl+ - (<tt>String</tt>) Specifies caching behavior
 *       along the request/reply chain.
 *     * +ContentDisposition+ - (<tt>String</tt>) Specifies
 *       presentational information for the object.
 *     * +ContentEncoding+ - (<tt>String</tt>) Specifies what content
 *       encodings have been applied to the object and thus what decoding
 *       mechanisms must be applied to obtain the media-type referenced
 *       by the Content-Type header field.
 *     * +ContentLanguage+ - (<tt>String</tt>) The language the content
 *       is in.
 *     * +ContentType+ - (<tt>String</tt>) A standard MIME type
 *       describing the format of the object data.
 *     * +Expires+ - (<tt>Date</tt>) The date and time at which the
 *       object is no longer cacheable.
 *     * +GrantFullControl+ - (<tt>String</tt>) Gives the grantee READ,
 *       READ_ACP, and WRITE_ACP permissions on the object.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to read the
 *       object data and its metadata.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       object ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable object.
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *       store with the object in S3.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +StorageClass+ - (<tt>String</tt>) The type of storage to use
 *       for the object. Defaults to 'STANDARD'.
 *     * +WebsiteRedirectLocation+ - (<tt>String</tt>) If the bucket is
 *       configured as a website, redirects requests for this object to
 *       another object in the same bucket or to an external URL. Amazon
 *       S3 stores the value of this header in the object metadata.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Bucket+ - (<tt>String</tt>) Name of the bucket to which the
 *         multipart upload was initiated.
 *       * +Key+ - (<tt>String</tt>) Object key for which the multipart
 *         upload was initiated.
 *       * +UploadId+ - (<tt>String</tt>) ID for the initiated multipart
 *         upload.
 *       * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *         encryption algorithm used when storing this object in S3.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadInitiate.html
 *     Amazon S3 Documentation for CreateMultipartUpload
 *
 * @!method deleteBucket(params, callback)
 *   Calls the DeleteBucket API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETE.html
 *     Amazon S3 Documentation for DeleteBucket
 *
 * @!method deleteBucketCors(params, callback)
 *   Calls the DeleteBucketCors API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEcors.html
 *     Amazon S3 Documentation for DeleteBucketCors
 *
 * @!method deleteBucketLifecycle(params, callback)
 *   Calls the DeleteBucketLifecycle API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETElifecycle.html
 *     Amazon S3 Documentation for DeleteBucketLifecycle
 *
 * @!method deleteBucketPolicy(params, callback)
 *   Calls the DeleteBucketPolicy API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEpolicy.html
 *     Amazon S3 Documentation for DeleteBucketPolicy
 *
 * @!method deleteBucketTagging(params, callback)
 *   Calls the DeleteBucketTagging API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEtagging.html
 *     Amazon S3 Documentation for DeleteBucketTagging
 *
 * @!method deleteBucketWebsite(params, callback)
 *   Calls the DeleteBucketWebsite API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEwebsite.html
 *     Amazon S3 Documentation for DeleteBucketWebsite
 *
 * @!method deleteObject(params, callback)
 *   Calls the DeleteObject API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DeleteMarker+ - (<tt>String</tt>) Specifies whether the
 *         versioned object that was permanently deleted was (true) or was
 *         not (false) a delete marker.
 *       * +VersionId+ - (<tt>String</tt>) Returns the version ID of the
 *         delete marker created as a result of the DELETE operation.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectDELETE.html
 *     Amazon S3 Documentation for DeleteObject
 *
 * @!method deleteObjects(params, callback)
 *   Calls the DeleteObjects API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Delete+ - (*required*, <tt>Object</tt>)
 *       * +Objects+ - (*required*, <tt>Array<Object></tt>)
 *         * +Key+ - (*required*, <tt>String</tt>) Key name of the object
 *           to delete.
 *         * +VersionId+ - (<tt>String</tt>) VersionId for the specific
 *           version of the object to delete.
 *       * +Quiet+ - (<tt>Boolean</tt>) Element to enable quiet mode for
 *         the request. When you add this element, you must set its value
 *         to true.
 *     * +MFA+ - (<tt>String</tt>) The concatenation of the
 *       authentication device''s serial number, a space, and the value
 *       that is displayed on your authentication device.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Deleted+ - (<tt>Array<Object></tt>)
 *         * +Key+ - (<tt>String</tt>)
 *         * +VersionId+ - (<tt>String</tt>)
 *         * +DeleteMarker+ - (<tt>Boolean</tt>)
 *         * +DeleteMarkerVersionId+ - (<tt>String</tt>)
 *       * +Errors+ - (<tt>Array<Object></tt>)
 *         * +Key+ - (<tt>String</tt>)
 *         * +VersionId+ - (<tt>String</tt>)
 *         * +Code+ - (<tt>String</tt>)
 *         * +Message+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/multiobjectdeleteapi.html
 *     Amazon S3 Documentation for DeleteObjects
 *
 * @!method getBucketAcl(params, callback)
 *   Calls the GetBucketAcl API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *       * +Grants+ - (<tt>Array<Object></tt>) A list of grants.
 *         * +Grantee+ - (<tt>Object</tt>)
 *           * +Type+ - (<tt>String</tt>) Type of grantee
 *           * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *             grantee.
 *           * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *             grantee.
 *           * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *             grantee.
 *           * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *         * +Permission+ - (<tt>String</tt>) Specifies the permission
 *           given to the grantee.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETacl.html
 *     Amazon S3 Documentation for GetBucketAcl
 *
 * @!method getBucketCors(params, callback)
 *   Calls the GetBucketCors API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CORSRules+ - (<tt>Array<Object></tt>)
 *         * +AllowedOrigins+ - (<tt>Array<String></tt>) One or more
 *           origins you want customers to be able to access the bucket
 *           from.
 *         * +AllowedMethods+ - (<tt>Array<String></tt>) Identifies HTTP
 *           methods that the domain/origin specified in the rule is
 *           allowed to execute.
 *         * +MaxAgeSeconds+ - (<tt>Integer</tt>) The time in seconds that
 *           your browser is to cache the preflight response for the
 *           specified resource.
 *         * +ExposeHeaders+ - (<tt>Array<String></tt>) One or more headers
 *           in the response that you want customers to be able to access
 *           from their applications (for example, from a JavaScript
 *           XMLHttpRequest object).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETcors.html
 *     Amazon S3 Documentation for GetBucketCors
 *
 * @!method getBucketLifecycle(params, callback)
 *   Calls the GetBucketLifecycle API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Rules+ - (<tt>Array<Object></tt>)
 *         * +ID+ - (<tt>String</tt>) Unique identifier for the rule. The
 *           value cannot be longer than 255 characters.
 *         * +Prefix+ - (<tt>String</tt>) Prefix identifying one or more
 *           objects to which the rule applies.
 *         * +Status+ - (<tt>String</tt>) If 'Enabled', the rule is
 *           currently being applied. If 'Disabled', the rule is not
 *           currently being applied.
 *         * +Transition+ - (<tt>Object</tt>)
 *           * +Days+ - (<tt>Integer</tt>) Indicates the lifetime, in days,
 *             of the objects that are subject to the rule. The value must
 *             be a non-zero positive integer.
 *           * +Date+ - (<tt>Date</tt>) Indicates at what date the object
 *             is to be moved or deleted. Should be in GMT ISO 8601 Format.
 *           * +StorageClass+ - (<tt>String</tt>) The class of storage used
 *             to store the object.
 *         * +Expiration+ - (<tt>Object</tt>)
 *           * +Days+ - (<tt>Integer</tt>) Indicates the lifetime, in days,
 *             of the objects that are subject to the rule. The value must
 *             be a non-zero positive integer.
 *           * +Date+ - (<tt>Date</tt>) Indicates at what date the object
 *             is to be moved or deleted. Should be in GMT ISO 8601 Format.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlifecycle.html
 *     Amazon S3 Documentation for GetBucketLifecycle
 *
 * @!method getBucketLocation(params, callback)
 *   Calls the GetBucketLocation API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LocationConstraint+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlocation.html
 *     Amazon S3 Documentation for GetBucketLocation
 *
 * @!method getBucketLogging(params, callback)
 *   Calls the GetBucketLogging API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LoggingEnabled+ - (<tt>Object</tt>)
 *         * +TargetBucket+ - (<tt>String</tt>) Specifies the bucket where
 *           you want Amazon S3 to store server access logs. You can have
 *           your logs delivered to any bucket that you own, including the
 *           same bucket that is being logged. You can also configure
 *           multiple buckets to deliver their logs to the same target
 *           bucket. In this case you should choose a different
 *           TargetPrefix for each source bucket so that the delivered log
 *           files can be distinguished by key.
 *         * +TargetPrefix+ - (<tt>String</tt>) This element lets you
 *           specify a prefix for the keys that the log files will be
 *           stored under.
 *         * +TargetGrants+ - (<tt>Array<Object></tt>)
 *           * +Grantee+ - (<tt>Object</tt>)
 *             * +Type+ - (<tt>String</tt>) Type of grantee
 *             * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *               grantee.
 *             * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *               grantee.
 *             * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *               grantee.
 *             * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *           * +Permission+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlogging.html
 *     Amazon S3 Documentation for GetBucketLogging
 *
 * @!method getBucketNotification(params, callback)
 *   Calls the GetBucketNotification API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +TopicConfiguration+ - (<tt>Object</tt>)
 *         * +Topic+ - (<tt>String</tt>) Amazon SNS topic to which Amazon
 *           S3 will publish a message to report the specified events for
 *           the bucket.
 *         * +Event+ - (<tt>String</tt>) Bucket event for which to send
 *           notifications.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETnotification.html
 *     Amazon S3 Documentation for GetBucketNotification
 *
 * @!method getBucketPolicy(params, callback)
 *   Calls the GetBucketPolicy API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Policy+ - (<tt>String</tt>) The bucket policy as a JSON
 *         document.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETpolicy.html
 *     Amazon S3 Documentation for GetBucketPolicy
 *
 * @!method getBucketRequestPayment(params, callback)
 *   Calls the GetBucketRequestPayment API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Payer+ - (<tt>String</tt>) Specifies who pays for the download
 *         and request fees.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTrequestPaymentGET.html
 *     Amazon S3 Documentation for GetBucketRequestPayment
 *
 * @!method getBucketTagging(params, callback)
 *   Calls the GetBucketTagging API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +TagSet+ - (<tt>Array<Object></tt>)
 *         * +Key+ - (<tt>String</tt>) Name of the tag.
 *         * +Value+ - (<tt>String</tt>) Value of the tag.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETtagging.html
 *     Amazon S3 Documentation for GetBucketTagging
 *
 * @!method getBucketVersioning(params, callback)
 *   Calls the GetBucketVersioning API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Status+ - (<tt>String</tt>) The versioning state of the bucket.
 *       * +MFADelete+ - (<tt>String</tt>) Specifies whether MFA delete is
 *         enabled in the bucket versioning configuration. This element is
 *         only returned if the bucket has been configured with MFA delete.
 *         If the bucket has never been so configured, this element is not
 *         returned.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETversioningStatus.html
 *     Amazon S3 Documentation for GetBucketVersioning
 *
 * @!method getBucketWebsite(params, callback)
 *   Calls the GetBucketWebsite API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RedirectAllRequestsTo+ - (<tt>Object</tt>)
 *         * +HostName+ - (<tt>String</tt>) Name of the host where requests
 *           will be redirected.
 *         * +Protocol+ - (<tt>String</tt>) Protocol to use (http, https)
 *           when redirecting requests. The default is the protocol that is
 *           used in the original request.
 *       * +IndexDocument+ - (<tt>Object</tt>)
 *         * +Suffix+ - (<tt>String</tt>) A suffix that is appended to a
 *           request that is for a directory on the website endpoint (e.g.
 *           if the suffix is index.html and you make a request to
 *           samplebucket/images/ the data that is returned will be for the
 *           object with the key name images/index.html) The suffix must
 *           not be empty and must not include a slash character.
 *       * +ErrorDocument+ - (<tt>Object</tt>)
 *         * +Key+ - (<tt>String</tt>) The object key name to use when a
 *           4XX class error occurs.
 *       * +RoutingRules+ - (<tt>Array<Object></tt>)
 *         * +Condition+ - (<tt>Object</tt>) A container for describing a
 *           condition that must be met for the specified redirect to
 *           apply. For example, 1. If request is for pages in the /docs
 *           folder, redirect to the /documents folder. 2. If request
 *           results in HTTP error 4xx, redirect request to another host
 *           where you might process the error.
 *           * +KeyPrefixEquals+ - (<tt>String</tt>) The object key name
 *             prefix when the redirect is applied. For example, to
 *             redirect requests for ExamplePage.html, the key prefix will
 *             be ExamplePage.html. To redirect request for all pages with
 *             the prefix docs/, the key prefix will be /docs, which
 *             identifies all objects in the docs/ folder. Required when
 *             the parent element Condition is specified and sibling
 *             HttpErrorCodeReturnedEquals is not specified. If both
 *             conditions are specified, both must be true for the redirect
 *             to be applied.
 *           * +HttpErrorCodeReturnedEquals+ - (<tt>String</tt>) The HTTP
 *             error code when the redirect is applied. In the event of an
 *             error, if the error code equals this value, then the
 *             specified redirect is applied. Required when parent element
 *             Condition is specified and sibling KeyPrefixEquals is not
 *             specified. If both are specified, then both must be true for
 *             the redirect to be applied.
 *         * +Redirect+ - (<tt>Object</tt>) Container for redirect
 *           information. You can redirect requests to another host, to
 *           another page, or with another protocol. In the event of an
 *           error, you can can specify a different error code to return.
 *           * +ReplaceKeyPrefixWith+ - (<tt>String</tt>) The object key
 *             prefix to use in the redirect request. For example, to
 *             redirect requests for all pages with prefix docs/ (objects
 *             in the docs/ folder) to documents/, you can set a condition
 *             block with KeyPrefixEquals set to docs/ and in the Redirect
 *             set ReplaceKeyPrefixWith to /documents. Not required if one
 *             of the siblings is present. Can be present only if
 *             ReplaceKeyWith is not provided.
 *           * +ReplaceKeyWith+ - (<tt>String</tt>) The specific object key
 *             to use in the redirect request. For example, redirect
 *             request to error.html. Not required if one of the sibling is
 *             present. Can be present only if ReplaceKeyPrefixWith is not
 *             provided.
 *           * +HttpRedirectCode+ - (<tt>String</tt>) The HTTP redirect
 *             code to use on the response. Not required if one of the
 *             siblings is present.
 *           * +HostName+ - (<tt>String</tt>) Name of the host where
 *             requests will be redirected.
 *           * +Protocol+ - (<tt>String</tt>) Protocol to use (http, https)
 *             when redirecting requests. The default is the protocol that
 *             is used in the original request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETwebsite.html
 *     Amazon S3 Documentation for GetBucketWebsite
 *
 * @!method getObject(params, callback)
 *   Calls the GetObject API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +IfMatch+ - (<tt>String</tt>) Return the object only if its
 *       entity tag (ETag) is the same as the one specified, otherwise
 *       return a 412 (precondition failed).
 *     * +IfModifiedSince+ - (<tt>Date</tt>) Return the object only if it
 *       has been modified since the specified time, otherwise return a
 *       304 (not modified).
 *     * +IfNoneMatch+ - (<tt>String</tt>) Return the object only if its
 *       entity tag (ETag) is different from the one specified, otherwise
 *       return a 304 (not modified).
 *     * +IfUnmodifiedSince+ - (<tt>Date</tt>) Return the object only if
 *       it has not been modified since the specified time, otherwise
 *       return a 412 (precondition failed).
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +Range+ - (<tt>String</tt>) Downloads the specified range bytes
 *       of an object. For more information about the HTTP Range header,
 *       go to
 *       http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.
 *     * +ResponseCacheControl+ - (<tt>String</tt>) Sets the
 *       Cache-Control header of the response.
 *     * +ResponseContentDisposition+ - (<tt>String</tt>) Sets the
 *       Content-Disposition header of the response
 *     * +ResponseContentEncoding+ - (<tt>String</tt>) Sets the
 *       Content-Encoding header of the response.
 *     * +ResponseContentLanguage+ - (<tt>String</tt>) Sets the
 *       Content-Language header of the response.
 *     * +ResponseContentType+ - (<tt>String</tt>) Sets the Content-Type
 *       header of the response.
 *     * +ResponseExpires+ - (<tt>Date</tt>) Sets the Expires header of
 *       the response.
 *     * +VersionId+ - (<tt>String</tt>) VersionId used to reference a
 *       specific version of the object.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Body+ - (<tt>String</tt>) Object data.
 *       * +DeleteMarker+ - (<tt>String</tt>) Specifies whether the object
 *         retrieved was (true) or was not (false) a Delete Marker. If
 *         false, this response header does not appear in the response.
 *       * +Expiration+ - (<tt>String</tt>) If the object expiration is
 *         configured (see PUT Bucket lifecycle), the response includes
 *         this header. It includes the expiry-date and rule-id key value
 *         pairs providing object expiration information. The value of the
 *         rule-id is URL encoded.
 *       * +Restore+ - (<tt>String</tt>) Provides information about object
 *         restoration operation and expiration time of the restored object
 *         copy.
 *       * +LastModified+ - (<tt>Date</tt>) Last modified date of the
 *         object
 *       * +ContentLength+ - (<tt>Integer</tt>) Size of the body in bytes.
 *       * +ETag+ - (<tt>String</tt>) An ETag is an opaque identifier
 *         assigned by a web server to a specific version of a resource
 *         found at a URL
 *       * +MissingMeta+ - (<tt>Integer</tt>) This is set to the number of
 *         metadata entries not returned in x-amz-meta headers. This can
 *         happen if you create metadata using an API like SOAP that
 *         supports more flexible metadata than the REST API. For example,
 *         using SOAP, you can create metadata whose values are not legal
 *         HTTP headers.
 *       * +VersionId+ - (<tt>String</tt>) Version of the object.
 *       * +CacheControl+ - (<tt>String</tt>) Specifies caching behavior
 *         along the request/reply chain.
 *       * +ContentDisposition+ - (<tt>String</tt>) Specifies
 *         presentational information for the object.
 *       * +ContentEncoding+ - (<tt>String</tt>) Specifies what content
 *         encodings have been applied to the object and thus what decoding
 *         mechanisms must be applied to obtain the media-type referenced
 *         by the Content-Type header field.
 *       * +ContentLanguage+ - (<tt>String</tt>) The language the content
 *         is in.
 *       * +ContentType+ - (<tt>String</tt>) A standard MIME type
 *         describing the format of the object data.
 *       * +Expires+ - (<tt>Date</tt>) The date and time at which the
 *         object is no longer cacheable.
 *       * +WebsiteRedirectLocation+ - (<tt>String</tt>) If the bucket is
 *         configured as a website, redirects requests for this object to
 *         another object in the same bucket or to an external URL. Amazon
 *         S3 stores the value of this header in the object metadata.
 *       * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *         encryption algorithm used when storing this object in S3.
 *       * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *         store with the object in S3.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGET.html
 *     Amazon S3 Documentation for GetObject
 *
 * @!method getObjectAcl(params, callback)
 *   Calls the GetObjectAcl API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +VersionId+ - (<tt>String</tt>) VersionId used to reference a
 *       specific version of the object.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *       * +Grants+ - (<tt>Array<Object></tt>) A list of grants.
 *         * +Grantee+ - (<tt>Object</tt>)
 *           * +Type+ - (<tt>String</tt>) Type of grantee
 *           * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *             grantee.
 *           * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *             grantee.
 *           * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *             grantee.
 *           * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *         * +Permission+ - (<tt>String</tt>) Specifies the permission
 *           given to the grantee.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGETacl.html
 *     Amazon S3 Documentation for GetObjectAcl
 *
 * @!method getObjectTorrent(params, callback)
 *   Calls the GetObjectTorrent API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Body+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGETtorrent.html
 *     Amazon S3 Documentation for GetObjectTorrent
 *
 * @!method headBucket(params, callback)
 *   Calls the HeadBucket API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketHEAD.html
 *     Amazon S3 Documentation for HeadBucket
 *
 * @!method headObject(params, callback)
 *   Calls the HeadObject API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +IfMatch+ - (<tt>String</tt>) Return the object only if its
 *       entity tag (ETag) is the same as the one specified, otherwise
 *       return a 412 (precondition failed).
 *     * +IfModifiedSince+ - (<tt>Date</tt>) Return the object only if it
 *       has been modified since the specified time, otherwise return a
 *       304 (not modified).
 *     * +IfNoneMatch+ - (<tt>String</tt>) Return the object only if its
 *       entity tag (ETag) is different from the one specified, otherwise
 *       return a 304 (not modified).
 *     * +IfUnmodifiedSince+ - (<tt>Date</tt>) Return the object only if
 *       it has not been modified since the specified time, otherwise
 *       return a 412 (precondition failed).
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +Range+ - (<tt>String</tt>) Downloads the specified range bytes
 *       of an object. For more information about the HTTP Range header,
 *       go to
 *       http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.
 *     * +VersionId+ - (<tt>String</tt>) VersionId used to reference a
 *       specific version of the object.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DeleteMarker+ - (<tt>String</tt>) Specifies whether the object
 *         retrieved was (true) or was not (false) a Delete Marker. If
 *         false, this response header does not appear in the response.
 *       * +Expiration+ - (<tt>String</tt>) If the object expiration is
 *         configured (see PUT Bucket lifecycle), the response includes
 *         this header. It includes the expiry-date and rule-id key value
 *         pairs providing object expiration information. The value of the
 *         rule-id is URL encoded.
 *       * +Restore+ - (<tt>String</tt>) Provides information about object
 *         restoration operation and expiration time of the restored object
 *         copy.
 *       * +LastModified+ - (<tt>Date</tt>) Last modified date of the
 *         object
 *       * +ContentLength+ - (<tt>Integer</tt>) Size of the body in bytes.
 *       * +ETag+ - (<tt>String</tt>) An ETag is an opaque identifier
 *         assigned by a web server to a specific version of a resource
 *         found at a URL
 *       * +MissingMeta+ - (<tt>Integer</tt>) This is set to the number of
 *         metadata entries not returned in x-amz-meta headers. This can
 *         happen if you create metadata using an API like SOAP that
 *         supports more flexible metadata than the REST API. For example,
 *         using SOAP, you can create metadata whose values are not legal
 *         HTTP headers.
 *       * +VersionId+ - (<tt>String</tt>) Version of the object.
 *       * +CacheControl+ - (<tt>String</tt>) Specifies caching behavior
 *         along the request/reply chain.
 *       * +ContentDisposition+ - (<tt>String</tt>) Specifies
 *         presentational information for the object.
 *       * +ContentEncoding+ - (<tt>String</tt>) Specifies what content
 *         encodings have been applied to the object and thus what decoding
 *         mechanisms must be applied to obtain the media-type referenced
 *         by the Content-Type header field.
 *       * +ContentLanguage+ - (<tt>String</tt>) The language the content
 *         is in.
 *       * +ContentType+ - (<tt>String</tt>) A standard MIME type
 *         describing the format of the object data.
 *       * +Expires+ - (<tt>Date</tt>) The date and time at which the
 *         object is no longer cacheable.
 *       * +WebsiteRedirectLocation+ - (<tt>String</tt>) If the bucket is
 *         configured as a website, redirects requests for this object to
 *         another object in the same bucket or to an external URL. Amazon
 *         S3 stores the value of this header in the object metadata.
 *       * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *         encryption algorithm used when storing this object in S3.
 *       * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *         store with the object in S3.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectHEAD.html
 *     Amazon S3 Documentation for HeadObject
 *
 * @!method listBuckets(params, callback)
 *   Calls the ListBuckets API operation.
 *   @param params [Object]
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Buckets+ - (<tt>Array<Object></tt>)
 *         * +Name+ - (<tt>String</tt>) The name of the bucket.
 *         * +CreationDate+ - (<tt>Date</tt>) Date the bucket was created.
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTServiceGET.html
 *     Amazon S3 Documentation for ListBuckets
 *
 * @!method listMultipartUploads(params, callback)
 *   Calls the ListMultipartUploads API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Delimiter+ - (<tt>String</tt>) Character you use to group keys.
 *     * +KeyMarker+ - (<tt>String</tt>) Together with upload-id-marker,
 *       this parameter specifies the multipart upload after which
 *       listing should begin.
 *     * +MaxUploads+ - (<tt>Integer</tt>) Sets the maximum number of
 *       multipart uploads, from 1 to 1,000, to return in the response
 *       body. 1,000 is the maximum number of uploads that can be
 *       returned in a response.
 *     * +Prefix+ - (<tt>String</tt>) Lists in-progress uploads only for
 *       those keys that begin with the specified prefix.
 *     * +UploadIdMarker+ - (<tt>String</tt>) Together with key-marker,
 *       specifies the multipart upload after which listing should begin.
 *       If key-marker is not specified, the upload-id-marker parameter
 *       is ignored.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Bucket+ - (<tt>String</tt>) Name of the bucket to which the
 *         multipart upload was initiated.
 *       * +KeyMarker+ - (<tt>String</tt>) The key at or after which the
 *         listing began.
 *       * +UploadIdMarker+ - (<tt>String</tt>) Upload ID after which
 *         listing began.
 *       * +NextKeyMarker+ - (<tt>String</tt>) When a list is truncated,
 *         this element specifies the value that should be used for the
 *         key-marker request parameter in a subsequent request.
 *       * +NextUploadIdMarker+ - (<tt>String</tt>) When a list is
 *         truncated, this element specifies the value that should be used
 *         for the upload-id-marker request parameter in a subsequent
 *         request.
 *       * +MaxUploads+ - (<tt>Integer</tt>) Maximum number of multipart
 *         uploads that could have been included in the response.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) Indicates whether the
 *         returned list of multipart uploads is truncated. A value of true
 *         indicates that the list was truncated. The list can be truncated
 *         if the number of multipart uploads exceeds the limit allowed or
 *         specified by max uploads.
 *       * +Uploads+ - (<tt>Array<Object></tt>)
 *         * +UploadId+ - (<tt>String</tt>) Upload ID that identifies the
 *           multipart upload.
 *         * +Key+ - (<tt>String</tt>) Key of the object for which the
 *           multipart upload was initiated.
 *         * +Initiated+ - (<tt>Date</tt>) Date and time at which the
 *           multipart upload was initiated.
 *         * +StorageClass+ - (<tt>String</tt>) The class of storage used
 *           to store the object.
 *         * +Owner+ - (<tt>Object</tt>)
 *           * +ID+ - (<tt>String</tt>)
 *           * +DisplayName+ - (<tt>String</tt>)
 *         * +Initiator+ - (<tt>Object</tt>) Identifies who initiated the
 *           multipart upload.
 *           * +ID+ - (<tt>String</tt>) If the principal is an AWS account,
 *             it provides the Canonical User ID. If the principal is an
 *             IAM User, it provides a user ARN value.
 *           * +DisplayName+ - (<tt>String</tt>) Name of the Principal.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListMPUpload.html
 *     Amazon S3 Documentation for ListMultipartUploads
 *
 * @!method listObjectVersions(params, callback)
 *   Calls the ListObjectVersions API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Delimiter+ - (<tt>String</tt>) A delimiter is a character you
 *       use to group keys.
 *     * +KeyMarker+ - (<tt>String</tt>) Specifies the key to start with
 *       when listing objects in a bucket.
 *     * +MaxKeys+ - (<tt>Integer</tt>) Sets the maximum number of keys
 *       returned in the response. The response might contain fewer keys
 *       but will never contain more.
 *     * +Prefix+ - (<tt>String</tt>) Limits the response to keys that
 *       begin with the specified prefix.
 *     * +VersionIdMarker+ - (<tt>String</tt>) Specifies the object
 *       version you want to start listing from.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         or not Amazon S3 returned all of the results that satisfied the
 *         search criteria. If your results were truncated, you can make a
 *         follow-up paginated request using the NextKeyMarker and
 *         NextVersionIdMarker response parameters as a starting place in
 *         another request to return the rest of the results.
 *       * +KeyMarker+ - (<tt>String</tt>) Marks the last Key returned in a
 *         truncated response.
 *       * +VersionIdMarker+ - (<tt>String</tt>)
 *       * +NextKeyMarker+ - (<tt>String</tt>) Use this value for the key
 *         marker request parameter in a subsequent request.
 *       * +NextVersionIdMarker+ - (<tt>String</tt>) Use this value for the
 *         next version id marker parameter in a subsequent request.
 *       * +Versions+ - (<tt>Array<Object></tt>)
 *         * +ETag+ - (<tt>String</tt>)
 *         * +Size+ - (<tt>String</tt>) Size in bytes of the object.
 *         * +StorageClass+ - (<tt>String</tt>) The class of storage used
 *           to store the object.
 *         * +Key+ - (<tt>String</tt>) The object key.
 *         * +VersionId+ - (<tt>String</tt>) Version ID of an object.
 *         * +IsLatest+ - (<tt>Boolean</tt>) Specifies whether the object
 *           is (true) or is not (false) the latest version of an object.
 *         * +LastModified+ - (<tt>Date</tt>) Date and time the object was
 *           last modified.
 *         * +Owner+ - (<tt>Object</tt>)
 *           * +ID+ - (<tt>String</tt>)
 *           * +DisplayName+ - (<tt>String</tt>)
 *       * +DeleteMarkers+ - (<tt>Array<Object></tt>)
 *         * +Owner+ - (<tt>Object</tt>)
 *           * +ID+ - (<tt>String</tt>)
 *           * +DisplayName+ - (<tt>String</tt>)
 *         * +Key+ - (<tt>String</tt>) The object key.
 *         * +VersionId+ - (<tt>String</tt>) Version ID of an object.
 *         * +IsLatest+ - (<tt>Boolean</tt>) Specifies whether the object
 *           is (true) or is not (false) the latest version of an object.
 *         * +LastModified+ - (<tt>Date</tt>) Date and time the object was
 *           last modified.
 *       * +Name+ - (<tt>String</tt>)
 *       * +Prefix+ - (<tt>String</tt>)
 *       * +MaxKeys+ - (<tt>Integer</tt>)
 *       * +CommonPrefixes+ - (<tt>Array<Object></tt>)
 *         * +Prefix+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETVersion.html
 *     Amazon S3 Documentation for ListObjectVersions
 *
 * @!method listObjects(params, callback)
 *   Calls the ListObjects API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Delimiter+ - (<tt>String</tt>) A delimiter is a character you
 *       use to group keys.
 *     * +Marker+ - (<tt>String</tt>) Specifies the key to start with
 *       when listing objects in a bucket.
 *     * +MaxKeys+ - (<tt>Integer</tt>) Sets the maximum number of keys
 *       returned in the response. The response might contain fewer keys
 *       but will never contain more.
 *     * +Prefix+ - (<tt>String</tt>) Limits the response to keys that
 *       begin with the specified prefix.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         or not Amazon S3 returned all of the results that satisfied the
 *         search criteria.
 *       * +Marker+ - (<tt>String</tt>)
 *       * +Contents+ - (<tt>Array<Object></tt>)
 *         * +Key+ - (<tt>String</tt>)
 *         * +LastModified+ - (<tt>Date</tt>)
 *         * +ETag+ - (<tt>String</tt>)
 *         * +Size+ - (<tt>Integer</tt>)
 *         * +StorageClass+ - (<tt>String</tt>) The class of storage used
 *           to store the object.
 *         * +Owner+ - (<tt>Object</tt>)
 *           * +ID+ - (<tt>String</tt>)
 *           * +DisplayName+ - (<tt>String</tt>)
 *       * +Name+ - (<tt>String</tt>)
 *       * +Prefix+ - (<tt>String</tt>)
 *       * +MaxKeys+ - (<tt>Integer</tt>)
 *       * +CommonPrefixes+ - (<tt>Array<Object></tt>)
 *         * +Prefix+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGET.html
 *     Amazon S3 Documentation for ListObjects
 *
 * @!method listParts(params, callback)
 *   Calls the ListParts API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +MaxParts+ - (<tt>Integer</tt>) Sets the maximum number of parts
 *       to return.
 *     * +PartNumberMarker+ - (<tt>String</tt>) Specifies the part after
 *       which listing should begin. Only parts with higher part numbers
 *       will be listed.
 *     * +UploadId+ - (*required*, <tt>String</tt>) Upload ID identifying
 *       the multipart upload whose parts are being listed.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Bucket+ - (<tt>String</tt>) Name of the bucket to which the
 *         multipart upload was initiated.
 *       * +Key+ - (<tt>String</tt>) Object key for which the multipart
 *         upload was initiated.
 *       * +UploadId+ - (<tt>String</tt>) Upload ID identifying the
 *         multipart upload whose parts are being listed.
 *       * +PartNumberMarker+ - (<tt>Integer</tt>) Part number after which
 *         listing begins.
 *       * +NextPartNumberMarker+ - (<tt>Integer</tt>) When a list is
 *         truncated, this element specifies the last part in the list, as
 *         well as the value to use for the part-number-marker request
 *         parameter in a subsequent request.
 *       * +MaxParts+ - (<tt>Integer</tt>) Maximum number of parts that
 *         were allowed in the response.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) Indicates whether the
 *         returned list of parts is truncated.
 *       * +Parts+ - (<tt>Array<Object></tt>)
 *         * +PartNumber+ - (<tt>Integer</tt>) Part number identifying the
 *           part.
 *         * +LastModified+ - (<tt>Date</tt>) Date and time at which the
 *           part was uploaded.
 *         * +ETag+ - (<tt>String</tt>) Entity tag returned when the part
 *           was uploaded.
 *         * +Size+ - (<tt>Integer</tt>) Size of the uploaded part data.
 *       * +Initiator+ - (<tt>Object</tt>) Identifies who initiated the
 *         multipart upload.
 *         * +ID+ - (<tt>String</tt>) If the principal is an AWS account,
 *           it provides the Canonical User ID. If the principal is an IAM
 *           User, it provides a user ARN value.
 *         * +DisplayName+ - (<tt>String</tt>) Name of the Principal.
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *       * +StorageClass+ - (<tt>String</tt>) The class of storage used to
 *         store the object.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListParts.html
 *     Amazon S3 Documentation for ListParts
 *
 * @!method putBucketAcl(params, callback)
 *   Calls the PutBucketAcl API operation.
 *   @param params [Object]
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the bucket.
 *     * +AccessControlPolicy+ - (<tt>Object</tt>)
 *       * +Grants+ - (<tt>Array<Object></tt>) A list of grants.
 *         * +Grantee+ - (<tt>Object</tt>)
 *           * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *             grantee.
 *           * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *             grantee.
 *           * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *             grantee.
 *           * +Type+ - (*required*, <tt>String</tt>) Type of grantee
 *           * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *         * +Permission+ - (<tt>String</tt>) Specifies the permission
 *           given to the grantee.
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +GrantFullControl+ - (<tt>String</tt>) Allows grantee the read,
 *       write, read ACP, and write ACP permissions on the bucket.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to list the
 *       objects in the bucket.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       bucket ACL.
 *     * +GrantWrite+ - (<tt>String</tt>) Allows grantee to create,
 *       overwrite, and delete any object in the bucket.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable bucket.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTacl.html
 *     Amazon S3 Documentation for PutBucketAcl
 *
 * @!method putBucketCors(params, callback)
 *   Calls the PutBucketCors API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +CORSConfiguration+ - (<tt>Object</tt>)
 *       * +CORSRules+ - (<tt>Array<Object></tt>)
 *         * +AllowedMethods+ - (<tt>Array<String></tt>) Identifies HTTP
 *           methods that the domain/origin specified in the rule is
 *           allowed to execute.
 *         * +AllowedOrigins+ - (<tt>Array<String></tt>) One or more
 *           origins you want customers to be able to access the bucket
 *           from.
 *         * +ExposeHeaders+ - (<tt>Array<String></tt>) One or more
 *           headers in the response that you want customers to be able
 *           to access from their applications (for example, from a
 *           JavaScript XMLHttpRequest object).
 *         * +MaxAgeSeconds+ - (<tt>Integer</tt>) The time in seconds
 *           that your browser is to cache the preflight response for the
 *           specified resource.
 *     * +ContentMD5+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTcors.html
 *     Amazon S3 Documentation for PutBucketCors
 *
 * @!method putBucketLifecycle(params, callback)
 *   Calls the PutBucketLifecycle API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +LifecycleConfiguration+ - (<tt>Object</tt>)
 *       * +Rules+ - (*required*, <tt>Array<Object></tt>)
 *         * +Expiration+ - (<tt>Object</tt>)
 *           * +Date+ - (<tt>Date</tt>) Indicates at what date the object
 *             is to be moved or deleted. Should be in GMT ISO 8601
 *             Format.
 *           * +Days+ - (*required*, <tt>Integer</tt>) Indicates the
 *             lifetime, in days, of the objects that are subject to the
 *             rule. The value must be a non-zero positive integer.
 *         * +ID+ - (<tt>String</tt>) Unique identifier for the rule. The
 *           value cannot be longer than 255 characters.
 *         * +Prefix+ - (*required*, <tt>String</tt>) Prefix identifying
 *           one or more objects to which the rule applies.
 *         * +Status+ - (*required*, <tt>String</tt>) If 'Enabled', the
 *           rule is currently being applied. If 'Disabled', the rule is
 *           not currently being applied.
 *         * +Transition+ - (<tt>Object</tt>)
 *           * +Date+ - (<tt>Date</tt>) Indicates at what date the object
 *             is to be moved or deleted. Should be in GMT ISO 8601
 *             Format.
 *           * +Days+ - (<tt>Integer</tt>) Indicates the lifetime, in
 *             days, of the objects that are subject to the rule. The
 *             value must be a non-zero positive integer.
 *           * +StorageClass+ - (<tt>String</tt>) The class of storage
 *             used to store the object.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html
 *     Amazon S3 Documentation for PutBucketLifecycle
 *
 * @!method putBucketLogging(params, callback)
 *   Calls the PutBucketLogging API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +BucketLoggingStatus+ - (*required*, <tt>Object</tt>)
 *       * +LoggingEnabled+ - (*required*, <tt>Object</tt>)
 *         * +TargetBucket+ - (<tt>String</tt>) Specifies the bucket
 *           where you want Amazon S3 to store server access logs. You
 *           can have your logs delivered to any bucket that you own,
 *           including the same bucket that is being logged. You can also
 *           configure multiple buckets to deliver their logs to the same
 *           target bucket. In this case you should choose a different
 *           TargetPrefix for each source bucket so that the delivered
 *           log files can be distinguished by key.
 *         * +TargetGrants+ - (<tt>Array<Object></tt>)
 *           * +Grantee+ - (<tt>Object</tt>)
 *             * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *               grantee.
 *             * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *               grantee.
 *             * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *               grantee.
 *             * +Type+ - (*required*, <tt>String</tt>) Type of grantee
 *             * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *           * +Permission+ - (<tt>String</tt>)
 *         * +TargetPrefix+ - (<tt>String</tt>) This element lets you
 *           specify a prefix for the keys that the log files will be
 *           stored under.
 *     * +ContentMD5+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTlogging.html
 *     Amazon S3 Documentation for PutBucketLogging
 *
 * @!method putBucketNotification(params, callback)
 *   Calls the PutBucketNotification API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +NotificationConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +TopicConfiguration+ - (*required*, <tt>Object</tt>)
 *         * +Event+ - (<tt>String</tt>) Bucket event for which to send
 *           notifications.
 *         * +Topic+ - (<tt>String</tt>) Amazon SNS topic to which Amazon
 *           S3 will publish a message to report the specified events for
 *           the bucket.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTnotification.html
 *     Amazon S3 Documentation for PutBucketNotification
 *
 * @!method putBucketPolicy(params, callback)
 *   Calls the PutBucketPolicy API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +Policy+ - (*required*, <tt>String</tt>) The bucket policy as a
 *       JSON document.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTpolicy.html
 *     Amazon S3 Documentation for PutBucketPolicy
 *
 * @!method putBucketRequestPayment(params, callback)
 *   Calls the PutBucketRequestPayment API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +RequestPaymentConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +Payer+ - (*required*, <tt>String</tt>) Specifies who pays for
 *         the download and request fees.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTrequestPaymentPUT.html
 *     Amazon S3 Documentation for PutBucketRequestPayment
 *
 * @!method putBucketTagging(params, callback)
 *   Calls the PutBucketTagging API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +Tagging+ - (*required*, <tt>Object</tt>)
 *       * +TagSet+ - (*required*, <tt>Array<Object></tt>)
 *         * +Key+ - (*required*, <tt>String</tt>) Name of the tag.
 *         * +Value+ - (*required*, <tt>String</tt>) Value of the tag.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTtagging.html
 *     Amazon S3 Documentation for PutBucketTagging
 *
 * @!method putBucketVersioning(params, callback)
 *   Calls the PutBucketVersioning API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +MFA+ - (<tt>String</tt>) The value is the concatenation of the
 *       authentication device''s serial number, a space, and the value
 *       displayed on your authentication device.
 *     * +VersioningConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +MFADelete+ - (<tt>String</tt>) Specifies whether MFA delete
 *         is enabled in the bucket versioning configuration. This
 *         element is only returned if the bucket has been configured
 *         with MFA delete. If the bucket has never been so configured,
 *         this element is not returned.
 *       * +Status+ - (<tt>String</tt>) The versioning state of the
 *         bucket.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html
 *     Amazon S3 Documentation for PutBucketVersioning
 *
 * @!method putBucketWebsite(params, callback)
 *   Calls the PutBucketWebsite API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +WebsiteConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +ErrorDocument+ - (<tt>Object</tt>)
 *         * +Key+ - (*required*, <tt>String</tt>) The object key name to
 *           use when a 4XX class error occurs.
 *       * +IndexDocument+ - (<tt>Object</tt>)
 *         * +Suffix+ - (*required*, <tt>String</tt>) A suffix that is
 *           appended to a request that is for a directory on the website
 *           endpoint (e.g. if the suffix is index.html and you make a
 *           request to samplebucket/images/ the data that is returned
 *           will be for the object with the key name images/index.html)
 *           The suffix must not be empty and must not include a slash
 *           character.
 *       * +RedirectAllRequestsTo+ - (<tt>Object</tt>)
 *         * +HostName+ - (*required*, <tt>String</tt>) Name of the host
 *           where requests will be redirected.
 *         * +Protocol+ - (<tt>String</tt>) Protocol to use (http, https)
 *           when redirecting requests. The default is the protocol that
 *           is used in the original request.
 *       * +RoutingRules+ - (<tt>Array<Object></tt>)
 *         * +Condition+ - (<tt>Object</tt>) A container for describing a
 *           condition that must be met for the specified redirect to
 *           apply. For example, 1. If request is for pages in the /docs
 *           folder, redirect to the /documents folder. 2. If request
 *           results in HTTP error 4xx, redirect request to another host
 *           where you might process the error.
 *           * +HttpErrorCodeReturnedEquals+ - (<tt>String</tt>) The HTTP
 *             error code when the redirect is applied. In the event of
 *             an error, if the error code equals this value, then the
 *             specified redirect is applied. Required when parent
 *             element Condition is specified and sibling KeyPrefixEquals
 *             is not specified. If both are specified, then both must be
 *             true for the redirect to be applied.
 *           * +KeyPrefixEquals+ - (<tt>String</tt>) The object key name
 *             prefix when the redirect is applied. For example, to
 *             redirect requests for ExamplePage.html, the key prefix
 *             will be ExamplePage.html. To redirect request for all
 *             pages with the prefix docs/, the key prefix will be /docs,
 *             which identifies all objects in the docs/ folder. Required
 *             when the parent element Condition is specified and sibling
 *             HttpErrorCodeReturnedEquals is not specified. If both
 *             conditions are specified, both must be true for the
 *             redirect to be applied.
 *         * +Redirect+ - (*required*, <tt>Object</tt>) Container for
 *           redirect information. You can redirect requests to another
 *           host, to another page, or with another protocol. In the
 *           event of an error, you can can specify a different error
 *           code to return.
 *           * +HostName+ - (*required*, <tt>String</tt>) Name of the
 *             host where requests will be redirected.
 *           * +HttpRedirectCode+ - (<tt>String</tt>) The HTTP redirect
 *             code to use on the response. Not required if one of the
 *             siblings is present.
 *           * +Protocol+ - (<tt>String</tt>) Protocol to use (http,
 *             https) when redirecting requests. The default is the
 *             protocol that is used in the original request.
 *           * +ReplaceKeyPrefixWith+ - (<tt>String</tt>) The object key
 *             prefix to use in the redirect request. For example, to
 *             redirect requests for all pages with prefix docs/ (objects
 *             in the docs/ folder) to documents/, you can set a
 *             condition block with KeyPrefixEquals set to docs/ and in
 *             the Redirect set ReplaceKeyPrefixWith to /documents. Not
 *             required if one of the siblings is present. Can be present
 *             only if ReplaceKeyWith is not provided.
 *           * +ReplaceKeyWith+ - (<tt>String</tt>) The specific object
 *             key to use in the redirect request. For example, redirect
 *             request to error.html. Not required if one of the sibling
 *             is present. Can be present only if ReplaceKeyPrefixWith is
 *             not provided.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTwebsite.html
 *     Amazon S3 Documentation for PutBucketWebsite
 *
 * @!method putObject(params, callback)
 *   Calls the PutObject API operation.
 *   @param params [Object]
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the object.
 *     * +Body+ - (<tt>String</tt>)
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +CacheControl+ - (<tt>String</tt>) Specifies caching behavior
 *       along the request/reply chain.
 *     * +ContentDisposition+ - (<tt>String</tt>) Specifies
 *       presentational information for the object.
 *     * +ContentEncoding+ - (<tt>String</tt>) Specifies what content
 *       encodings have been applied to the object and thus what decoding
 *       mechanisms must be applied to obtain the media-type referenced
 *       by the Content-Type header field.
 *     * +ContentLanguage+ - (<tt>String</tt>) The language the content
 *       is in.
 *     * +ContentType+ - (<tt>String</tt>) A standard MIME type
 *       describing the format of the object data.
 *     * +Expires+ - (<tt>Date</tt>) The date and time at which the
 *       object is no longer cacheable.
 *     * +GrantFullControl+ - (<tt>String</tt>) Gives the grantee READ,
 *       READ_ACP, and WRITE_ACP permissions on the object.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to read the
 *       object data and its metadata.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       object ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable object.
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *       store with the object in S3.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +StorageClass+ - (<tt>String</tt>) The type of storage to use
 *       for the object. Defaults to 'STANDARD'.
 *     * +WebsiteRedirectLocation+ - (<tt>String</tt>) If the bucket is
 *       configured as a website, redirects requests for this object to
 *       another object in the same bucket or to an external URL. Amazon
 *       S3 stores the value of this header in the object metadata.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Expiration+ - (<tt>Date</tt>) If the object expiration is
 *         configured, this will contain the expiration date (expiry-date)
 *         and rule ID (rule-id). The value of rule-id is URL encoded.
 *       * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *         encryption algorithm used when storing this object in S3.
 *       * +ETag+ - (<tt>String</tt>) Entity tag for the uploaded object.
 *       * +VersionId+ - (<tt>String</tt>) Version of the object.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUT.html
 *     Amazon S3 Documentation for PutObject
 *
 * @!method putObjectAcl(params, callback)
 *   Calls the PutObjectAcl API operation.
 *   @param params [Object]
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the bucket.
 *     * +AccessControlPolicy+ - (<tt>Object</tt>)
 *       * +Grants+ - (<tt>Array<Object></tt>) A list of grants.
 *         * +Grantee+ - (<tt>Object</tt>)
 *           * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *             grantee.
 *           * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *             grantee.
 *           * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *             grantee.
 *           * +Type+ - (*required*, <tt>String</tt>) Type of grantee
 *           * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *         * +Permission+ - (<tt>String</tt>) Specifies the permission
 *           given to the grantee.
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +ContentMD5+ - (<tt>String</tt>)
 *     * +GrantFullControl+ - (<tt>String</tt>) Allows grantee the read,
 *       write, read ACP, and write ACP permissions on the bucket.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to list the
 *       objects in the bucket.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       bucket ACL.
 *     * +GrantWrite+ - (<tt>String</tt>) Allows grantee to create,
 *       overwrite, and delete any object in the bucket.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable bucket.
 *     * +Key+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUTacl.html
 *     Amazon S3 Documentation for PutObjectAcl
 *
 * @!method restoreObject(params, callback)
 *   Calls the RestoreObject API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +RestoreRequest+ - (<tt>Object</tt>)
 *       * +Days+ - (*required*, <tt>Integer</tt>) Lifetime of the active
 *         copy in days
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectRestore.html
 *     Amazon S3 Documentation for RestoreObject
 *
 * @!method uploadPart(params, callback)
 *   Calls the UploadPart API operation.
 *   @param params [Object]
 *     * +Body+ - (<tt>String</tt>)
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +PartNumber+ - (*required*, <tt>String</tt>) Part number of part
 *       being uploaded.
 *     * +UploadId+ - (*required*, <tt>String</tt>) Upload ID identifying
 *       the multipart upload whose part is being uploaded.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *         encryption algorithm used when storing this object in S3.
 *       * +ETag+ - (<tt>String</tt>) Entity tag for the uploaded object.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadUploadPart.html
 *     Amazon S3 Documentation for UploadPart
 *
 * @!method uploadPartCopy(params, callback)
 *   Calls the UploadPartCopy API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +CopySource+ - (*required*, <tt>String</tt>) The name of the
 *       source bucket and key name of the source object, separated by a
 *       slash (/). Must be URL-encoded.
 *     * +CopySourceIfMatch+ - (<tt>Date</tt>) Copies the object if its
 *       entity tag (ETag) matches the specified tag.
 *     * +CopySourceIfModifiedSince+ - (<tt>Date</tt>) Copies the object
 *       if it has been modified since the specified time.
 *     * +CopySourceIfNoneMatch+ - (<tt>Date</tt>) Copies the object if
 *       its entity tag (ETag) is different than the specified ETag.
 *     * +CopySourceIfUnmodifiedSince+ - (<tt>Date</tt>) Copies the
 *       object if it hasn''t been modified since the specified time.
 *     * +CopySourceRange+ - (<tt>String</tt>) The range of bytes to copy
 *       from the source object. The range value must use the form
 *       bytes=first-last, where the first and last are the zero-based
 *       byte offsets to copy. For example, bytes=0-9 indicates that you
 *       want to copy the first ten bytes of the source. You can copy a
 *       range only if the source object is greater than 5 GB.
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +PartNumber+ - (*required*, <tt>String</tt>) Part number of part
 *       being copied.
 *     * +UploadId+ - (*required*, <tt>String</tt>) Upload ID identifying
 *       the multipart upload whose part is being copied.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CopySourceVersionId+ - (<tt>String</tt>) The version of the
 *         source object that was copied, if you have enabled versioning on
 *         the source bucket.
 *       * +CopyPartResult+ - (<tt>Object</tt>)
 *         * +ETag+ - (<tt>String</tt>) Entity tag of the object.
 *         * +LastModified+ - (<tt>Date</tt>) Date and time at which the
 *           object was uploaded.
 *       * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *         encryption algorithm used when storing this object in S3.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *   @see http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadUploadPartCopy.html
 *     Amazon S3 Documentation for UploadPartCopy
 *
 *
 * @!method constructor(options)
 *   Constructs a service client object.  This client has one method for
 *   each API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured +region+.
 *     The endpoint should be a string like <tt>'https://s3.amazonaws.com'</tt>.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.S3.Client = inherit({});
