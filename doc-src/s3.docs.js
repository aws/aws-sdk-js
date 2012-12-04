/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
 *   svc.client.OPERATION_NAME(params).always(function (resp) {
 *     console.log(resp.data, resp.error);
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
 * @!method abortMultipartUpload(params, options)
 *   Aborts a multipart upload.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +UploadId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method completeMultipartUpload(params, options)
 *   Completes a multipart upload by assembling previously uploaded
 *   parts.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +UploadId+ - (*required*, <tt>String</tt>)
 *     * +MultipartUpload+ - (<tt>Object</tt>)
 *       * +Parts+ - (<tt>Array<Object></tt>)
 *         * +PartNumber+ - (<tt>Integer</tt>) Part number that
 *           identifies the part.
 *         * +ETag+ - (<tt>String</tt>) Entity tag returned when the part
 *           was uploaded.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Location+ - (<tt>String</tt>)
 *     * +Bucket+ - (<tt>String</tt>)
 *     * +Key+ - (<tt>String</tt>)
 *     * +ETag+ - (<tt>String</tt>) Entity tag for the uploaded object.
 *     * +Expiration+ - (<tt>Date</tt>) If the object expiration is
 *       configured, this will contain the expiration date (expiry-date)
 *       and rule ID (rule-id). The value of rule-id is URL encoded.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +VersionId+ - (<tt>String</tt>) Version of the object.
 *
 * @!method copyObject(params, options)
 *   Creates a copy of an object that is already stored in Amazon S3.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +MetadataDirective+ - (<tt>String</tt>) Specifies whether the
 *       metadata is copied from the source object or replaced with
 *       metadata provided in the request.
 *     * +WebsiteRedirectLocation+ - (<tt>String</tt>) If the bucket is
 *       configured as a website, redirects requests for this object to
 *       another object in the same bucket or to an external URL.
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the bucket.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to list the
 *       objects in the bucket.
 *     * +GrantWrite+ - (<tt>String</tt>) Allows grantee to create,
 *       overwrite, and delete any object in the bucket.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       bucket ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable bucket.
 *     * +GrantFullControl+ - (<tt>String</tt>) Allows grantee the read,
 *       write, read ACP, and write ACP permissions on the bucket.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +StorageClass+ - (<tt>String</tt>) The class of storage used to
 *       store the object.
 *     * +CopySource+ - (*required*, <tt>String</tt>) The name of the
 *       source bucket and key name of the source object, separated by a
 *       slash (/). Must be URL-encoded.
 *     * +CopySourceIfMatch+ - (<tt>Date</tt>) Copies the object if its
 *       entity tag (ETag) matches the specified tag.
 *     * +CopySourceIfNoneMatch+ - (<tt>Date</tt>) Copies the object if
 *       its entity tag (ETag) is different than the specified ETag.
 *     * +CopySourceIfUnmodifiedSince+ - (<tt>Date</tt>) Copies the
 *       object if it hasn''t been modified since the specified time.
 *     * +CopySourceIfModifiedSince+ - (<tt>Date</tt>) Copies the object
 *       if it has been modified since the specified time.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +CopyObjectResult+ - (<tt>Object</tt>)
 *       * +ETag+ - (<tt>String</tt>)
 *       * +LastModified+ - (<tt>String</tt>)
 *     * +Expiration+ - (<tt>String</tt>) If the object expiration is
 *       configured, the response includes this header.
 *     * +CopySourceVersionId+ - (<tt>String</tt>)
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *
 * @!method createBucket(params, options)
 *   Creates a new bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +CreateBucketConfiguration+ - (<tt>Object</tt>)
 *       * +LocationConstraint+ - (<tt>String</tt>) Specifies the region
 *         where the bucket will be created.
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the bucket.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to list the
 *       objects in the bucket.
 *     * +GrantWrite+ - (<tt>String</tt>) Allows grantee to create,
 *       overwrite, and delete any object in the bucket.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       bucket ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable bucket.
 *     * +GrantFullControl+ - (<tt>String</tt>) Allows grantee the read,
 *       write, read ACP, and write ACP permissions on the bucket.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Location+ - (<tt>String</tt>)
 *
 * @!method createMultipartUpload(params, options)
 *   Initiates a multipart upload and returns an upload ID.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +CacheControl+ - (<tt>String</tt>) Can be used to specify
 *       caching behavior along the request/reply chain.
 *     * +ContentDisposition+ - (<tt>String</tt>) Specifies
 *       presentational information for the object.
 *     * +ContentEncoding+ - (<tt>String</tt>) Specifies what content
 *       encodings have been applied to the object and thus what decoding
 *       mechanisms must be applied to obtain the media-type referenced
 *       by the Content-Type header field.
 *     * +ContentType+ - (<tt>String</tt>) A standard MIME type
 *       describing the format of the object data.
 *     * +Expires+ - (<tt>Date</tt>) The date and time at which the
 *       object is no longer cacheable.
 *     * +StorageClass+ - (<tt>String</tt>) The type of storage to use
 *       for the object. Defaults to 'STANDARD'.
 *     * +WebsiteRedirectLocation+ - (<tt>String</tt>) If the bucket is
 *       configured as a website, redirects requests for this object to
 *       another object in the same bucket or to an external URL. Amazon
 *       S3 stores the value of this header in the object metadata.
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the object.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to read the
 *       object data and its metadata.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       object ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable object.
 *     * +GrantFullControl+ - (<tt>String</tt>) Gives the grantee READ,
 *       READ_ACP, and WRITE_ACP permissions on the object.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *       store with the object in S3.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Bucket+ - (<tt>String</tt>) Name of the bucket to which the
 *       multipart upload was initiated.
 *     * +Key+ - (<tt>String</tt>) Object key for which the multipart
 *       upload was initiated.
 *     * +UploadId+ - (<tt>String</tt>) ID for the initiated multipart
 *       upload.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *
 * @!method deleteBucket(params, options)
 *   Deletes the bucket. All objects (including all object versions and
 *   Delete Markers) in the bucket must be deleted before the bucket
 *   itself can be deleted.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteBucketCors(params, options)
 *   Deletes the cors configuration information set for the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteBucketLifecycle(params, options)
 *   Deletes the lifecycle configuration from the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteBucketPolicy(params, options)
 *   Deletes the policy from the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteBucketTagging(params, options)
 *   Deletes the tags from the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteBucketWebsite(params, options)
 *   This operation removes the website configuration from the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteObject(params, options)
 *   Removes the null version (if there is one) of an object and inserts
 *   a delete marker, which becomes the latest version of the object. If
 *   there isn''t a null version, Amazon S3 does not remove any objects.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +DeleteMarker+ - (<tt>String</tt>) Specifies whether the
 *       versioned object that was permanently deleted was (true) or was
 *       not (false) a delete marker.
 *     * +VersionId+ - (<tt>String</tt>) Returns the version ID of the
 *       delete marker created as a result of the DELETE operation.
 *
 * @!method deleteObjects(params, options)
 *   This operation enables you to delete multiple objects from a bucket
 *   using a single HTTP request. You may specify up to 1000 keys.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Delete+ - (*required*, <tt>Object</tt>)
 *       * +Quiet+ - (<tt>Boolean</tt>) Element to enable quiet mode for
 *         the request. When you add this element, you must set its value
 *         to true.
 *       * +Objects+ - (*required*, <tt>Array<Object></tt>)
 *         * +Key+ - (*required*, <tt>String</tt>) Key name of the object
 *           to delete.
 *         * +VersionId+ - (<tt>String</tt>) VersionId for the specific
 *           version of the object to delete.
 *     * +MFA+ - (<tt>String</tt>) The concatenation of the
 *       authentication device''s serial number, a space, and the value
 *       that is displayed on your authentication device.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Deleted+ - (<tt>Array<Object></tt>)
 *       * +Key+ - (<tt>String</tt>)
 *       * +VersionId+ - (<tt>String</tt>)
 *       * +DeleteMarker+ - (<tt>Boolean</tt>)
 *       * +DeleteMarkerVersionId+ - (<tt>String</tt>)
 *     * +Errors+ - (<tt>Array<Object></tt>)
 *       * +Key+ - (<tt>String</tt>)
 *       * +VersionId+ - (<tt>String</tt>)
 *       * +Code+ - (<tt>String</tt>)
 *       * +Message+ - (<tt>String</tt>)
 *
 * @!method getBucketAcl(params, options)
 *   Gets the access control policy for the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Owner+ - (<tt>Object</tt>)
 *       * +ID+ - (<tt>String</tt>)
 *       * +DisplayName+ - (<tt>String</tt>)
 *     * +Grants+ - (<tt>Array<Object></tt>) A list of grants.
 *       * +Grantee+ - (<tt>Object</tt>)
 *         * +Type+ - (<tt>String</tt>) Type of grantee
 *         * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *           grantee.
 *         * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *           grantee.
 *         * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *           grantee.
 *         * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *       * +Permission+ - (<tt>String</tt>) Specifies the permission
 *         given to the grantee.
 *
 * @!method getBucketCors(params, options)
 *   Returns the cors configuration for the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +CORSRules+ - (<tt>Array<Object></tt>)
 *       * +AllowedOrigins+ - (<tt>Array<String></tt>) One or more
 *         origins you want customers to be able to access the bucket
 *         from.
 *       * +AllowedMethods+ - (<tt>Array<String></tt>) Identifies HTTP
 *         methods that the domain/origin specified in the rule is
 *         allowed to execute.
 *       * +MaxAgeSeconds+ - (<tt>Integer</tt>) The time in seconds that
 *         your browser is to cache the preflight response for the
 *         specified resource.
 *       * +ExposeHeaders+ - (<tt>Array<String></tt>) One or more headers
 *         in the response that you want customers to be able to access
 *         from their applications (for example, from a JavaScript
 *         XMLHttpRequest object).
 *
 * @!method getBucketLifecycle(params, options)
 *   Returns the lifecycle configuration information set on the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Rules+ - (<tt>Array<Object></tt>)
 *       * +ID+ - (<tt>String</tt>) Unique identifier for the rule. The
 *         value cannot be longer than 255 characters.
 *       * +Prefix+ - (<tt>String</tt>) Prefix identifying one or more
 *         objects to which the rule applies.
 *       * +Status+ - (<tt>String</tt>) If 'Enabled', the rule is
 *         currently being applied. If 'Disabled', the rule is not
 *         currently being applied.
 *       * +Transition+ - (<tt>Object</tt>)
 *         * +Days+ - (<tt>Integer</tt>) Indicates the lifetime, in days,
 *           of the objects that are subject to the rule. The value must
 *           be a non-zero positive integer.
 *         * +Date+ - (<tt>Date</tt>) Indicates at what date the object
 *           is to be moved or deleted. Should be in GMT ISO 8601 Format.
 *         * +StorageClass+ - (<tt>String</tt>) The class of storage used
 *           to store the object.
 *       * +Expiration+ - (<tt>Object</tt>)
 *         * +Days+ - (<tt>Integer</tt>) Indicates the lifetime, in days,
 *           of the objects that are subject to the rule. The value must
 *           be a non-zero positive integer.
 *         * +Date+ - (<tt>Date</tt>) Indicates at what date the object
 *           is to be moved or deleted. Should be in GMT ISO 8601 Format.
 *
 * @!method getBucketLocation(params, options)
 *   Returns the region the bucket resides in.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +LocationConstraint+ - (<tt>String</tt>)
 *
 * @!method getBucketLogging(params, options)
 *   Returns the logging status of a bucket and the permissions users
 *   have to view and modify that status. To use GET, you must be the
 *   bucket owner.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +LoggingEnabled+ - (<tt>Object</tt>)
 *       * +TargetBucket+ - (<tt>String</tt>) Specifies the bucket where
 *         you want Amazon S3 to store server access logs. You can have
 *         your logs delivered to any bucket that you own, including the
 *         same bucket that is being logged. You can also configure
 *         multiple buckets to deliver their logs to the same target
 *         bucket. In this case you should choose a different
 *         TargetPrefix for each source bucket so that the delivered log
 *         files can be distinguished by key.
 *       * +TargetPrefix+ - (<tt>String</tt>) This element lets you
 *         specify a prefix for the keys that the log files will be
 *         stored under.
 *       * +TargetGrants+ - (<tt>Array<Object></tt>)
 *         * +Grantee+ - (<tt>Object</tt>)
 *           * +Type+ - (<tt>String</tt>) Type of grantee
 *           * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *             grantee.
 *           * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *             grantee.
 *           * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *             grantee.
 *           * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *         * +Permission+ - (<tt>String</tt>)
 *
 * @!method getBucketNotification(params, options)
 *   Return the notification configuration of a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +TopicConfiguration+ - (<tt>Object</tt>)
 *       * +Topic+ - (<tt>String</tt>) Amazon SNS topic to which Amazon
 *         S3 will publish a message to report the specified events for
 *         the bucket.
 *       * +Event+ - (<tt>String</tt>) Bucket event for which to send
 *         notifications.
 *
 * @!method getBucketPolicy(params, options)
 *   Returns the policy of a specified bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Policy+ - (<tt>String</tt>) The bucket policy as a JSON
 *       document.
 *
 * @!method getBucketRequestPayment(params, options)
 *   Returns the request payment configuration of a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Payer+ - (<tt>String</tt>) Specifies who pays for the download
 *       and request fees.
 *
 * @!method getBucketTagging(params, options)
 *   Returns the tag set associated with the bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +TagSet+ - (<tt>Array<Object></tt>)
 *       * +Key+ - (<tt>String</tt>) Name of the tag.
 *       * +Value+ - (<tt>String</tt>) Value of the tag.
 *
 * @!method getBucketVersioning(params, options)
 *   Returns the versioning state of a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Status+ - (<tt>String</tt>) The versioning state of the bucket.
 *     * +MFADelete+ - (<tt>String</tt>) Specifies whether MFA delete is
 *       enabled in the bucket versioning configuration. This element is
 *       only returned if the bucket has been configured with MFA delete.
 *       If the bucket has never been so configured, this element is not
 *       returned.
 *
 * @!method getBucketWebsite(params, options)
 *   Returns the website configuration for a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +IndexDocument+ - (<tt>Object</tt>)
 *       * +Suffix+ - (<tt>String</tt>) A suffix that is appended to a
 *         request that is for a directory on the website endpoint (e.g.
 *         if the suffix is index.html and you make a request to
 *         samplebucket/images/ the data that is returned will be for the
 *         object with the key name images/index.html) The suffix must
 *         not be empty and must not include a slash character.
 *     * +ErrorDocument+ - (<tt>Object</tt>)
 *       * +Key+ - (<tt>String</tt>) The object key name to use when a
 *         4XX class error occurs.
 *
 * @!method getObject(params, options)
 *   Retrieves objects from Amazon S3.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +ResponseContentType+ - (<tt>String</tt>) Sets the Content-Type
 *       header of the response.
 *     * +ResponseContentLanguage+ - (<tt>String</tt>) Sets the
 *       Content-Language header of the response.
 *     * +ResponseExpires+ - (<tt>Date</tt>) Sets the Expires header of
 *       the response.
 *     * +ResponseCacheControl+ - (<tt>String</tt>) Sets the
 *       Cache-Control header of the response.
 *     * +ResponseContentDisposition+ - (<tt>String</tt>) Sets the
 *       Content-Disposition header of the response
 *     * +ResponseContentEncoding+ - (<tt>String</tt>) Sets the
 *       Content-Encoding header of the response.
 *     * +VersionId+ - (<tt>String</tt>) VersionId used to reference a
 *       specific version of the object.
 *     * +Range+ - (<tt>String</tt>) Downloads the specified range bytes
 *       of an object. For more information about the HTTP Range header,
 *       go to
 *       http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.
 *     * +IfModifiedSince+ - (<tt>Date</tt>) Return the object only if it
 *       has been modified since the specified time, otherwise return a
 *       304 (not modified).
 *     * +IfUnmodifiedSince+ - (<tt>Date</tt>) Return the object only if
 *       it has not been modified since the specified time, otherwise
 *       return a 412 (precondition failed).
 *     * +IfMatch+ - (<tt>String</tt>) Return the object only if its
 *       entity tag (ETag) is the same as the one specified, otherwise
 *       return a 412 (precondition failed).
 *     * +IfNoneMatch+ - (<tt>String</tt>) Return the object only if its
 *       entity tag (ETag) is different from the one specified, otherwise
 *       return a 304 (not modified).
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Body+ - (<tt>Base64 Encoded Data</tt>) Object data.
 *     * +DeleteMarker+ - (<tt>String</tt>) Specifies whether the object
 *       retrieved was (true) or was not (false) a Delete Marker. If
 *       false, this response header does not appear in the response.
 *     * +Expiration+ - (<tt>String</tt>) If the object expiration is
 *       configured (see PUT Bucket lifecycle), the response includes
 *       this header. It includes the expiry-date and rule-id key value
 *       pairs providing object expiration information. The value of the
 *       rule-id is URL encoded.
 *     * +WebsiteRedirectLocation+ - (<tt>String</tt>) When a bucket is
 *       configured as a website, you can set this metadata on the object
 *       so the website endpoint will evaluate the request for the object
 *       as a 301 redirect to another object in the same bucket or an
 *       external URL.
 *     * +LastModified+ - (<tt>Date</tt>) Last modified date of the
 *       object
 *     * +ContentType+ - (<tt>String</tt>) Content type of the object
 *     * +ContentLength+ - (<tt>Integer</tt>) Size of the body in bytes.
 *     * +ETag+ - (<tt>String</tt>) An ETag is an opaque identifier
 *       assigned by a web server to a specific version of a resource
 *       found at a URL
 *     * +MissingMeta+ - (<tt>Integer</tt>) This is set to the number of
 *       metadata entries not returned in x-amz-meta headers. This can
 *       happen if you create metadata using an API like SOAP that
 *       supports more flexible metadata than the REST API. For example,
 *       using SOAP, you can create metadata whose values are not legal
 *       HTTP headers.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +VersionId+ - (<tt>String</tt>) Version of the object.
 *     * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *       store with the object in S3.
 *
 * @!method getObjectAcl(params, options)
 *   Returns the access control list (ACL) of an object.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +VersionId+ - (<tt>String</tt>) VersionId used to reference a
 *       specific version of the object.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Owner+ - (<tt>Object</tt>)
 *       * +ID+ - (<tt>String</tt>)
 *       * +DisplayName+ - (<tt>String</tt>)
 *     * +Grants+ - (<tt>Array<Object></tt>) A list of grants.
 *       * +Grantee+ - (<tt>Object</tt>)
 *         * +Type+ - (<tt>String</tt>) Type of grantee
 *         * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *           grantee.
 *         * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *           grantee.
 *         * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *           grantee.
 *         * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *       * +Permission+ - (<tt>String</tt>) Specifies the permission
 *         given to the grantee.
 *
 * @!method getObjectTorrent(params, options)
 *   Return torrent files from a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Body+ - (<tt>Base64 Encoded Data</tt>)
 *
 * @!method headBucket(params, options)
 *   This operation is useful to determine if a bucket exists and you
 *   have permission to access it.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method headObject(params, options)
 *   The HEAD operation retrieves metadata from an object without
 *   returning the object itself. This operation is useful if you''re
 *   only interested in an object''s metadata. To use HEAD, you must have
 *   READ access to the object.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +VersionId+ - (<tt>String</tt>) VersionId used to reference a
 *       specific version of the object.
 *     * +Range+ - (<tt>String</tt>) Downloads the specified range bytes
 *       of an object. For more information about the HTTP Range header,
 *       go to
 *       http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.
 *     * +IfModifiedSince+ - (<tt>Date</tt>) Return the object only if it
 *       has been modified since the specified time, otherwise return a
 *       304 (not modified).
 *     * +IfUnmodifiedSince+ - (<tt>Date</tt>) Return the object only if
 *       it has not been modified since the specified time, otherwise
 *       return a 412 (precondition failed).
 *     * +IfMatch+ - (<tt>String</tt>) Return the object only if its
 *       entity tag (ETag) is the same as the one specified, otherwise
 *       return a 412 (precondition failed).
 *     * +IfNoneMatch+ - (<tt>String</tt>) Return the object only if its
 *       entity tag (ETag) is different from the one specified, otherwise
 *       return a 304 (not modified).
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +DeleteMarker+ - (<tt>String</tt>) Specifies whether the object
 *       retrieved was (true) or was not (false) a Delete Marker. If
 *       false, this response header does not appear in the response.
 *     * +Expiration+ - (<tt>String</tt>) If the object expiration is
 *       configured (see PUT Bucket lifecycle), the response includes
 *       this header. It includes the expiry-date and rule-id key value
 *       pairs providing object expiration information. The value of the
 *       rule-id is URL encoded.
 *     * +WebsiteRedirectLocation+ - (<tt>String</tt>) When a bucket is
 *       configured as a website, you can set this metadata on the object
 *       so the website endpoint will evaluate the request for the object
 *       as a 301 redirect to another object in the same bucket or an
 *       external URL.
 *     * +LastModified+ - (<tt>Date</tt>) Last modified date of the
 *       object
 *     * +ContentType+ - (<tt>String</tt>) Content type of the object
 *     * +ContentLength+ - (<tt>Integer</tt>) Size of the body in bytes.
 *     * +ETag+ - (<tt>String</tt>) An ETag is an opaque identifier
 *       assigned by a web server to a specific version of a resource
 *       found at a URL
 *     * +MissingMeta+ - (<tt>Integer</tt>) This is set to the number of
 *       metadata entries not returned in x-amz-meta headers. This can
 *       happen if you create metadata using an API like SOAP that
 *       supports more flexible metadata than the REST API. For example,
 *       using SOAP, you can create metadata whose values are not legal
 *       HTTP headers.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +VersionId+ - (<tt>String</tt>) Version of the object.
 *     * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *       store with the object in S3.
 *
 * @!method listBuckets(params, options)
 *   Returns a list of all buckets owned by the authenticated sender of
 *   the request.
 *   @param [Object] params
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Buckets+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) The name of the bucket.
 *       * +CreationDate+ - (<tt>Date</tt>) Date the bucket was created.
 *     * +Owner+ - (<tt>Object</tt>)
 *       * +ID+ - (<tt>String</tt>)
 *       * +DisplayName+ - (<tt>String</tt>)
 *
 * @!method listMultipartUploads(params, options)
 *   This operation lists in-progress multipart uploads.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Prefix+ - (<tt>String</tt>) Lists in-progress uploads only for
 *       those keys that begin with the specified prefix.
 *     * +Delimiter+ - (<tt>String</tt>) Character you use to group keys.
 *     * +MaxUploads+ - (<tt>Integer</tt>) Sets the maximum number of
 *       multipart uploads, from 1 to 1,000, to return in the response
 *       body. 1,000 is the maximum number of uploads that can be
 *       returned in a response.
 *     * +KeyMarker+ - (<tt>String</tt>) Together with upload-id-marker,
 *       this parameter specifies the multipart upload after which
 *       listing should begin.
 *     * +UploadIdMarker+ - (<tt>String</tt>) Together with key-marker,
 *       specifies the multipart upload after which listing should begin.
 *       If key-marker is not specified, the upload-id-marker parameter
 *       is ignored.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Bucket+ - (<tt>String</tt>) Name of the bucket to which the
 *       multipart upload was initiated.
 *     * +KeyMarker+ - (<tt>String</tt>) The key at or after which the
 *       listing began.
 *     * +UploadIdMarker+ - (<tt>String</tt>) Upload ID after which
 *       listing began.
 *     * +NextKeyMarker+ - (<tt>String</tt>) When a list is truncated,
 *       this element specifies the value that should be used for the
 *       key-marker request parameter in a subsequent request.
 *     * +NextUploadIdMarker+ - (<tt>String</tt>) When a list is
 *       truncated, this element specifies the value that should be used
 *       for the upload-id-marker request parameter in a subsequent
 *       request.
 *     * +MaxUploads+ - (<tt>Integer</tt>) Maximum number of multipart
 *       uploads that could have been included in the response.
 *     * +IsTruncated+ - (<tt>Boolean</tt>) Indicates whether the
 *       returned list of multipart uploads is truncated. A value of true
 *       indicates that the list was truncated. The list can be truncated
 *       if the number of multipart uploads exceeds the limit allowed or
 *       specified by max uploads.
 *     * +Uploads+ - (<tt>Array<Object></tt>)
 *       * +UploadId+ - (<tt>String</tt>) Upload ID that identifies the
 *         multipart upload.
 *       * +Key+ - (<tt>String</tt>) Key of the object for which the
 *         multipart upload was initiated.
 *       * +Initiated+ - (<tt>Date</tt>) Date and time at which the
 *         multipart upload was initiated.
 *       * +StorageClass+ - (<tt>String</tt>) The class of storage used
 *         to store the object.
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *       * +Initiator+ - (<tt>Object</tt>) Identifies who initiated the
 *         multipart upload.
 *         * +ID+ - (<tt>String</tt>) If the principal is an AWS account,
 *           it provides the Canonical User ID. If the principal is an
 *           IAM User, it provides a user ARN value.
 *         * +DisplayName+ - (<tt>String</tt>) Name of the Principal.
 *
 * @!method listObjectVersions(params, options)
 *   Returns metadata about all of the versions of objects in a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +KeyMarker+ - (<tt>String</tt>) Specifies the key to start with
 *       when listing objects in a bucket.
 *     * +VersionIdMarker+ - (<tt>String</tt>) Specifies the object
 *       version you want to start listing from.
 *     * +MaxKeys+ - (<tt>Integer</tt>) Sets the maximum number of keys
 *       returned in the response. The response might contain fewer keys
 *       but will never contain more.
 *     * +Delimiter+ - (<tt>String</tt>) A delimiter is a character you
 *       use to group keys.
 *     * +Prefix+ - (<tt>String</tt>) Limits the response to keys that
 *       begin with the specified prefix.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +KeyMarker+ - (<tt>String</tt>) Marks the last Key returned in a
 *       truncated response.
 *     * +VersionIdMarker+ - (<tt>String</tt>)
 *     * +NextKeyMarker+ - (<tt>String</tt>) Use this value for the key
 *       marker request parameter in a subsequent request.
 *     * +NextVersionIdMarker+ - (<tt>String</tt>) Use this value for the
 *       next version id marker parameter in a subsequent request.
 *     * +Versions+ - (<tt>Array<Object></tt>)
 *       * +ETag+ - (<tt>String</tt>)
 *       * +Size+ - (<tt>String</tt>) Size in bytes of the object.
 *       * +StorageClass+ - (<tt>String</tt>) The class of storage used
 *         to store the object.
 *       * +Key+ - (<tt>String</tt>) The object key.
 *       * +VersionId+ - (<tt>String</tt>) Version ID of an object.
 *       * +IsLatest+ - (<tt>Boolean</tt>) Specifies whether the object
 *         is (true) or is not (false) the latest version of an object.
 *       * +LastModified+ - (<tt>Date</tt>) Date and time the object was
 *         last modified.
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *     * +DeleteMarkers+ - (<tt>Array<Object></tt>)
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *       * +Key+ - (<tt>String</tt>) The object key.
 *       * +VersionId+ - (<tt>String</tt>) Version ID of an object.
 *       * +IsLatest+ - (<tt>Boolean</tt>) Specifies whether the object
 *         is (true) or is not (false) the latest version of an object.
 *       * +LastModified+ - (<tt>Date</tt>) Date and time the object was
 *         last modified.
 *     * +Name+ - (<tt>String</tt>)
 *     * +Prefix+ - (<tt>String</tt>)
 *     * +MaxKeys+ - (<tt>Integer</tt>)
 *     * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *       (true) or not (false) Amazon S3 returned all of the results that
 *       satisfied the search criteria. If your results were truncated,
 *       you can make a follow-up paginated request using the
 *       NextKeyMarker and NextVersionIdMarker response parameters as a
 *       starting place in another request to return the rest of the
 *       results.
 *     * +CommonPrefixes+ - (<tt>Array<Object></tt>)
 *       * +Prefix+ - (<tt>String</tt>)
 *
 * @!method listObjects(params, options)
 *   Returns some or all (up to 1000) of the objects in a bucket. You can
 *   use the request parameters as selection criteria to return a subset
 *   of the objects in a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Marker+ - (<tt>String</tt>) Specifies the key to start with
 *       when listing objects in a bucket.
 *     * +MaxKeys+ - (<tt>Integer</tt>) Sets the maximum number of keys
 *       returned in the response. The response might contain fewer keys
 *       but will never contain more.
 *     * +Delimiter+ - (<tt>String</tt>) A delimiter is a character you
 *       use to group keys.
 *     * +Prefix+ - (<tt>String</tt>) Limits the response to keys that
 *       begin with the specified prefix.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Marker+ - (<tt>String</tt>)
 *     * +Contents+ - (<tt>Array<Object></tt>)
 *       * +Key+ - (<tt>String</tt>)
 *       * +LastModified+ - (<tt>Date</tt>)
 *       * +ETag+ - (<tt>String</tt>)
 *       * +Size+ - (<tt>Integer</tt>)
 *       * +StorageClass+ - (<tt>String</tt>) The class of storage used
 *         to store the object.
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *     * +Name+ - (<tt>String</tt>)
 *     * +Prefix+ - (<tt>String</tt>)
 *     * +MaxKeys+ - (<tt>Integer</tt>)
 *     * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *       (true) or not (false) Amazon S3 returned all of the results that
 *       satisfied the search criteria. If your results were truncated,
 *       you can make a follow-up paginated request using the
 *       NextKeyMarker and NextVersionIdMarker response parameters as a
 *       starting place in another request to return the rest of the
 *       results.
 *     * +CommonPrefixes+ - (<tt>Array<Object></tt>)
 *       * +Prefix+ - (<tt>String</tt>)
 *
 * @!method listParts(params, options)
 *   Lists the parts that have been uploaded for a specific multipart
 *   upload.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +UploadId+ - (*required*, <tt>String</tt>) Upload ID identifying
 *       the multipart upload whose parts are being listed.
 *     * +MaxParts+ - (<tt>Integer</tt>) Sets the maximum number of parts
 *       to return.
 *     * +PartNumberMarker+ - (<tt>String</tt>) Specifies the part after
 *       which listing should begin. Only parts with higher part numbers
 *       will be listed.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Bucket+ - (<tt>String</tt>) Name of the bucket to which the
 *       multipart upload was initiated.
 *     * +Key+ - (<tt>String</tt>) Object key for which the multipart
 *       upload was initiated.
 *     * +UploadId+ - (<tt>String</tt>) Upload ID identifying the
 *       multipart upload whose parts are being listed.
 *     * +PartNumberMarker+ - (<tt>Integer</tt>) Part number after which
 *       listing begins.
 *     * +NextPartNumberMarker+ - (<tt>Integer</tt>) When a list is
 *       truncated, this element specifies the last part in the list, as
 *       well as the value to use for the part-number-marker request
 *       parameter in a subsequent request.
 *     * +MaxParts+ - (<tt>Integer</tt>) Maximum number of parts that
 *       were allowed in the response.
 *     * +IsTruncated+ - (<tt>Boolean</tt>) Indicates whether the
 *       returned list of parts is truncated.
 *     * +Parts+ - (<tt>Array<Object></tt>)
 *       * +PartNumber+ - (<tt>Integer</tt>) Part number identifying the
 *         part.
 *       * +LastModified+ - (<tt>Date</tt>) Date and time at which the
 *         part was uploaded.
 *       * +ETag+ - (<tt>String</tt>) Entity tag returned when the part
 *         was uploaded.
 *       * +Size+ - (<tt>Integer</tt>) Size of the uploaded part data.
 *     * +Initiator+ - (<tt>Object</tt>) Identifies who initiated the
 *       multipart upload.
 *       * +ID+ - (<tt>String</tt>) If the principal is an AWS account,
 *         it provides the Canonical User ID. If the principal is an IAM
 *         User, it provides a user ARN value.
 *       * +DisplayName+ - (<tt>String</tt>) Name of the Principal.
 *     * +Owner+ - (<tt>Object</tt>)
 *       * +ID+ - (<tt>String</tt>)
 *       * +DisplayName+ - (<tt>String</tt>)
 *     * +StorageClass+ - (<tt>String</tt>) The class of storage used to
 *       store the object.
 *
 * @!method putBucketAcl(params, options)
 *   Sets the permissions on a bucket using access control lists (ACL).
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +AccessControlPolicy+ - (<tt>Object</tt>)
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *       * +Grants+ - (<tt>Array<Object></tt>) A list of grants.
 *         * +Grantee+ - (<tt>Object</tt>)
 *           * +Type+ - (*required*, <tt>String</tt>) Type of grantee
 *           * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *             grantee.
 *           * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *             grantee.
 *           * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *             grantee.
 *           * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *         * +Permission+ - (<tt>String</tt>) Specifies the permission
 *           given to the grantee.
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the bucket.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to list the
 *       objects in the bucket.
 *     * +GrantWrite+ - (<tt>String</tt>) Allows grantee to create,
 *       overwrite, and delete any object in the bucket.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       bucket ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable bucket.
 *     * +GrantFullControl+ - (<tt>String</tt>) Allows grantee the read,
 *       write, read ACP, and write ACP permissions on the bucket.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketCors(params, options)
 *   Sets the cors configuration for a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +CORSConfiguration+ - (<tt>Object</tt>)
 *       * +CORSRules+ - (<tt>Array<Object></tt>)
 *         * +AllowedOrigins+ - (<tt>Array<String></tt>) One or more
 *           origins you want customers to be able to access the bucket
 *           from.
 *         * +AllowedMethods+ - (<tt>Array<String></tt>) Identifies HTTP
 *           methods that the domain/origin specified in the rule is
 *           allowed to execute.
 *         * +MaxAgeSeconds+ - (<tt>Integer</tt>) The time in seconds
 *           that your browser is to cache the preflight response for the
 *           specified resource.
 *         * +ExposeHeaders+ - (<tt>Array<String></tt>) One or more
 *           headers in the response that you want customers to be able
 *           to access from their applications (for example, from a
 *           JavaScript XMLHttpRequest object).
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketLifecycle(params, options)
 *   Sets lifecycle configuration for your bucket. If a lifecycle
 *   configuration exists, it replaces it.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +LifecycleConfiguration+ - (<tt>Object</tt>)
 *       * +Rules+ - (*required*, <tt>Array<Object></tt>)
 *         * +ID+ - (<tt>String</tt>) Unique identifier for the rule. The
 *           value cannot be longer than 255 characters.
 *         * +Prefix+ - (*required*, <tt>String</tt>) Prefix identifying
 *           one or more objects to which the rule applies.
 *         * +Status+ - (*required*, <tt>String</tt>) If 'Enabled', the
 *           rule is currently being applied. If 'Disabled', the rule is
 *           not currently being applied.
 *         * +Transition+ - (<tt>Object</tt>)
 *           * +Days+ - (<tt>Integer</tt>) Indicates the lifetime, in
 *             days, of the objects that are subject to the rule. The
 *             value must be a non-zero positive integer.
 *           * +Date+ - (<tt>Date</tt>) Indicates at what date the object
 *             is to be moved or deleted. Should be in GMT ISO 8601
 *             Format.
 *           * +StorageClass+ - (<tt>String</tt>) The class of storage
 *             used to store the object.
 *         * +Expiration+ - (<tt>Object</tt>)
 *           * +Days+ - (*required*, <tt>Integer</tt>) Indicates the
 *             lifetime, in days, of the objects that are subject to the
 *             rule. The value must be a non-zero positive integer.
 *           * +Date+ - (<tt>Date</tt>) Indicates at what date the object
 *             is to be moved or deleted. Should be in GMT ISO 8601
 *             Format.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketLogging(params, options)
 *   Set the logging parameters for a bucket and to specify permissions
 *   for who can view and modify the logging parameters. To set the
 *   logging status of a bucket, you must be the bucket owner.
 *   @param [Object] params
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
 *         * +TargetPrefix+ - (<tt>String</tt>) This element lets you
 *           specify a prefix for the keys that the log files will be
 *           stored under.
 *         * +TargetGrants+ - (<tt>Array<Object></tt>)
 *           * +Grantee+ - (<tt>Object</tt>)
 *             * +Type+ - (*required*, <tt>String</tt>) Type of grantee
 *             * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *               grantee.
 *             * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *               grantee.
 *             * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *               grantee.
 *             * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *           * +Permission+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketNotification(params, options)
 *   Enables notifications of specified events for a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +NotificationConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +TopicConfiguration+ - (*required*, <tt>Object</tt>)
 *         * +Topic+ - (<tt>String</tt>) Amazon SNS topic to which Amazon
 *           S3 will publish a message to report the specified events for
 *           the bucket.
 *         * +Event+ - (<tt>String</tt>) Bucket event for which to send
 *           notifications.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketPolicy(params, options)
 *   Replaces a policy on a bucket. If the bucket already has a policy,
 *   the one in this request completely replaces it.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Policy+ - (*required*, <tt>String</tt>) The bucket policy as a
 *       JSON document.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketRequestPayment(params, options)
 *   Sets the request payment configuration for a bucket. By default, the
 *   bucket owner pays for downloads from the bucket. This configuration
 *   parameter enables the bucket owner (only) to specify that the person
 *   requesting the download will be charged for the download.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +RequestPaymentConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +Payer+ - (*required*, <tt>String</tt>) Specifies who pays for
 *         the download and request fees.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketTagging(params, options)
 *   Sets the tags for a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Tagging+ - (*required*, <tt>Object</tt>)
 *       * +TagSet+ - (*required*, <tt>Array<Object></tt>)
 *         * +Key+ - (*required*, <tt>String</tt>) Name of the tag.
 *         * +Value+ - (*required*, <tt>String</tt>) Value of the tag.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketVersioning(params, options)
 *   Sets the versioning state of an existing bucket. To set the
 *   versioning state, you must be the bucket owner.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +VersioningConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +Status+ - (<tt>String</tt>) The versioning state of the
 *         bucket.
 *       * +MFADelete+ - (<tt>String</tt>) Specifies whether MFA delete
 *         is enabled in the bucket versioning configuration. This
 *         element is only returned if the bucket has been configured
 *         with MFA delete. If the bucket has never been so configured,
 *         this element is not returned.
 *     * +MFA+ - (<tt>String</tt>) The value is the concatenation of the
 *       authentication device''s serial number, a space, and the value
 *       displayed on your authentication device.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putBucketWebsite(params, options)
 *   Set the website configuration for a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +WebsiteConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +IndexDocument+ - (<tt>Object</tt>)
 *         * +Suffix+ - (*required*, <tt>String</tt>) A suffix that is
 *           appended to a request that is for a directory on the website
 *           endpoint (e.g. if the suffix is index.html and you make a
 *           request to samplebucket/images/ the data that is returned
 *           will be for the object with the key name images/index.html)
 *           The suffix must not be empty and must not include a slash
 *           character.
 *       * +ErrorDocument+ - (<tt>Object</tt>)
 *         * +Key+ - (*required*, <tt>String</tt>) The object key name to
 *           use when a 4XX class error occurs.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method putObject(params, options)
 *   Adds an object to a bucket.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +CacheControl+ - (<tt>String</tt>) Can be used to specify
 *       caching behavior along the request/reply chain.
 *     * +ContentDisposition+ - (<tt>String</tt>) Specifies
 *       presentational information for the object.
 *     * +ContentEncoding+ - (<tt>String</tt>) Specifies what content
 *       encodings have been applied to the object and thus what decoding
 *       mechanisms must be applied to obtain the media-type referenced
 *       by the Content-Type header field.
 *     * +ContentType+ - (<tt>String</tt>) A standard MIME type
 *       describing the format of the object data.
 *     * +Expires+ - (<tt>Date</tt>) The date and time at which the
 *       object is no longer cacheable.
 *     * +StorageClass+ - (<tt>String</tt>) The type of storage to use
 *       for the object. Defaults to 'STANDARD'.
 *     * +WebsiteRedirectLocation+ - (<tt>String</tt>) If the bucket is
 *       configured as a website, redirects requests for this object to
 *       another object in the same bucket or to an external URL. Amazon
 *       S3 stores the value of this header in the object metadata.
 *     * +Body+ - (<tt>Base64 Encoded Data</tt>)
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the object.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to read the
 *       object data and its metadata.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       object ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable object.
 *     * +GrantFullControl+ - (<tt>String</tt>) Gives the grantee READ,
 *       READ_ACP, and WRITE_ACP permissions on the object.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +Metadata+ - (<tt>Object<String></tt>) A map of metadata to
 *       store with the object in S3.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Expiration+ - (<tt>Date</tt>) If the object expiration is
 *       configured, this will contain the expiration date (expiry-date)
 *       and rule ID (rule-id). The value of rule-id is URL encoded.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +ETag+ - (<tt>String</tt>) Entity tag for the uploaded object.
 *     * +VersionId+ - (<tt>String</tt>) Version of the object.
 *
 * @!method putObjectAcl(params, options)
 *   uses the acl subresource to set the access control list (ACL)
 *   permissions for an object that already exists in a bucket
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +AccessControlPolicy+ - (<tt>Object</tt>)
 *       * +Owner+ - (<tt>Object</tt>)
 *         * +ID+ - (<tt>String</tt>)
 *         * +DisplayName+ - (<tt>String</tt>)
 *       * +Grants+ - (<tt>Array<Object></tt>) A list of grants.
 *         * +Grantee+ - (<tt>Object</tt>)
 *           * +Type+ - (*required*, <tt>String</tt>) Type of grantee
 *           * +ID+ - (<tt>String</tt>) The canonical user ID of the
 *             grantee.
 *           * +DisplayName+ - (<tt>String</tt>) Screen name of the
 *             grantee.
 *           * +EmailAddress+ - (<tt>String</tt>) Email address of the
 *             grantee.
 *           * +URI+ - (<tt>String</tt>) URI of the grantee group.
 *         * +Permission+ - (<tt>String</tt>) Specifies the permission
 *           given to the grantee.
 *     * +ACL+ - (<tt>String</tt>) The canned ACL to apply to the bucket.
 *     * +GrantRead+ - (<tt>String</tt>) Allows grantee to list the
 *       objects in the bucket.
 *     * +GrantWrite+ - (<tt>String</tt>) Allows grantee to create,
 *       overwrite, and delete any object in the bucket.
 *     * +GrantReadACP+ - (<tt>String</tt>) Allows grantee to read the
 *       bucket ACL.
 *     * +GrantWriteACP+ - (<tt>String</tt>) Allows grantee to write the
 *       ACL for the applicable bucket.
 *     * +GrantFullControl+ - (<tt>String</tt>) Allows grantee the read,
 *       write, read ACP, and write ACP permissions on the bucket.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method restoreObject(params, options)
 *   Restores an archived copy of an object back into Amazon S3
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +RestoreRequest+ - (<tt>Object</tt>)
 *       * +Days+ - (*required*, <tt>Integer</tt>) Lifetime of the active
 *         copy in days
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method uploadPart(params, options)
 *   Uploads a part in a multipart upload.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +UploadId+ - (*required*, <tt>String</tt>) Upload ID identifying
 *       the multipart upload whose part is being uploaded.
 *     * +PartNumber+ - (*required*, <tt>String</tt>) Part number of part
 *       being uploaded.
 *     * +Body+ - (<tt>Base64 Encoded Data</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
 *     * +ETag+ - (<tt>String</tt>) Entity tag for the uploaded object.
 *
 * @!method uploadPartCopy(params, options)
 *   Uploads a part by copying data from an existing object as data
 *   source.
 *   @param [Object] params
 *     * +Bucket+ - (*required*, <tt>String</tt>)
 *     * +Key+ - (*required*, <tt>String</tt>)
 *     * +UploadId+ - (*required*, <tt>String</tt>) Upload ID identifying
 *       the multipart upload whose part is being copied.
 *     * +PartNumber+ - (*required*, <tt>String</tt>) Part number of part
 *       being copied.
 *     * +CopySourceRange+ - (<tt>String</tt>) The range of bytes to copy
 *       from the source object. The range value must use the form
 *       bytes=first-last, where the first and last are the zero-based
 *       byte offsets to copy. For example, bytes=0-9 indicates that you
 *       want to copy the first ten bytes of the source. You can copy a
 *       range only if the source object is greater than 5 GB.
 *     * +CopySource+ - (*required*, <tt>String</tt>) The name of the
 *       source bucket and key name of the source object, separated by a
 *       slash (/). Must be URL-encoded.
 *     * +CopySourceIfMatch+ - (<tt>Date</tt>) Copies the object if its
 *       entity tag (ETag) matches the specified tag.
 *     * +CopySourceIfNoneMatch+ - (<tt>Date</tt>) Copies the object if
 *       its entity tag (ETag) is different than the specified ETag.
 *     * +CopySourceIfUnmodifiedSince+ - (<tt>Date</tt>) Copies the
 *       object if it hasn''t been modified since the specified time.
 *     * +CopySourceIfModifiedSince+ - (<tt>Date</tt>) Copies the object
 *       if it has been modified since the specified time.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +CopySourceVersionId+ - (<tt>String</tt>) The version of the
 *       source object that was copied, if you have enabled versioning on
 *       the source bucket.
 *     * +CopyPartResult+ - (<tt>Object</tt>)
 *       * +ETag+ - (<tt>String</tt>) Entity tag of the object.
 *       * +LastModified+ - (<tt>Date</tt>) Date and time at which the
 *         object was uploaded.
 *     * +ServerSideEncryption+ - (<tt>String</tt>) The Server-side
 *       encryption algorithm used when storing this object in S3.
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
AWS.S3.Client = inherit({});"
