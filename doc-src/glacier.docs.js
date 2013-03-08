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
 * Constructs a service interface and a low-level {Client}.  Use the `client`
 * property to make API calls.  Each API operation is exposed as a function on
 * the `client`.
 *
 * ### Sending a Request Using Glacier
 *
 * ```js
 * svc = new AWS.Glacier();
 * svc.client.OPERATION_NAME(params, function (err, data) {
 *   if (err) {
 *     console.log(err); // an error occurred
 *   } else {
 *     console.log(data); // successful response
 *   }
 * });
 * ```
 *
 * @!method constructor(options)
 *   Constructs a service interface.  The returned service will have a {client}
 *   property that provides access to the API operations.
 *   @option (see AWS.Glacier.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.Glacier.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.Glacier.Client
 *
 */
AWS.Glacier = inherit({})

/**
 * The low-level Glacier client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method abortMultipartUpload(params, callback)
 *   Calls the AbortMultipartUpload API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `uploadId` &mdash; (`String`) The upload ID of the multipart
 *       upload to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method completeMultipartUpload(params, callback)
 *   Calls the CompleteMultipartUpload API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `uploadId` &mdash; (`String`) The upload ID of the multipart
 *       upload.
 *     * `archiveSize` &mdash; (`String`) The total size, in bytes, of
 *       the entire archive. This value should be the sum of all the
 *       sizes of the individual parts that you uploaded.
 *     * `checksum` &mdash; (`String`) The SHA256 tree hash of the entire
 *       archive. It is the tree hash of SHA256 tree hash of the
 *       individual parts. If the value you specify in the request does
 *       not match the SHA256 tree hash of the final assembled archive as
 *       computed by Amazon Glacier, Amazon Glacier returns an error and
 *       the request fails.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `location` &mdash; (`String`) The relative URI path of the newly
 *         added archive resource.
 *       * `checksum` &mdash; (`String`) The checksum of the archive
 *         computed by Amazon Glacier.
 *       * `archiveId` &mdash; (`String`) The ID of the archive. This value
 *         is also included as part of the location.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createVault(params, callback)
 *   Calls the CreateVault API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `location` &mdash; (`String`) The URI of the vault that was
 *         created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteArchive(params, callback)
 *   Calls the DeleteArchive API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `archiveId` &mdash; (`String`) The ID of the archive to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteVault(params, callback)
 *   Calls the DeleteVault API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteVaultNotifications(params, callback)
 *   Calls the DeleteVaultNotifications API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeJob(params, callback)
 *   Calls the DescribeJob API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `jobId` &mdash; (`String`) The ID of the job to describe.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `JobId` &mdash; (`String`) An opaque string that identifies an
 *         Amazon Glacier job.
 *       * `JobDescription` &mdash; (`String`) The job description you
 *         provided when you initiated the job.
 *       * `Action` &mdash; (`String`) The job type. It is either
 *         ArchiveRetrieval or InventoryRetrieval.
 *       * `ArchiveId` &mdash; (`String`) For an ArchiveRetrieval job, this
 *         is the archive ID requested for download. Otherwise, this field
 *         is null.
 *       * `VaultARN` &mdash; (`String`) The Amazon Resource Name (ARN) of
 *         the vault from which the archive retrieval was requested.
 *       * `CreationDate` &mdash; (`String`) The UTC date when the job was
 *         created. A string representation of ISO 8601 date format, for
 *         example, "2012-03-20T17:03:43.221Z".
 *       * `Completed` &mdash; (`Boolean`) The job status. When a job is
 *         completed, you get the job's output.
 *       * `StatusCode` &mdash; (`String`) The status code can be
 *         InProgress, Succeeded, or Failed, and indicates the status of
 *         the job.
 *       * `StatusMessage` &mdash; (`String`) A friendly message that
 *         describes the job status.
 *       * `ArchiveSizeInBytes` &mdash; (`Integer`) For an ArchiveRetrieval
 *         job, this is the size in bytes of the archive being requested
 *         for download. For the InventoryRetrieval job, the value is null.
 *       * `InventorySizeInBytes` &mdash; (`Integer`) For an
 *         InventoryRetrieval job, this is the size in bytes of the
 *         inventory requested for download. For the ArchiveRetrieval job,
 *         the value is null.
 *       * `SNSTopic` &mdash; (`String`) An Amazon Simple Notification
 *         Service (Amazon SNS) topic that receives notification.
 *       * `CompletionDate` &mdash; (`String`) The UTC time that the
 *         archive retrieval request completed. While the job is in
 *         progress, the value will be null.
 *       * `SHA256TreeHash` &mdash; (`String`) For an ArchiveRetrieval job,
 *         it is the checksum of the archive. Otherwise, the value is null.
 *       * `ArchiveSHA256TreeHash` &mdash; (`String`)
 *       * `RetrievalByteRange` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVault(params, callback)
 *   Calls the DescribeVault API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `VaultARN` &mdash; (`String`) The Amazon Resource Name (ARN) of
 *         the vault.
 *       * `VaultName` &mdash; (`String`) The name of the vault.
 *       * `CreationDate` &mdash; (`String`) The UTC date when the vault
 *         was created. A string representation of ISO 8601 date format,
 *         for example, "2012-03-20T17:03:43.221Z".
 *       * `LastInventoryDate` &mdash; (`String`) The UTC date when Amazon
 *         Glacier completed the last vault inventory. A string
 *         representation of ISO 8601 date format, for example,
 *         "2012-03-20T17:03:43.221Z".
 *       * `NumberOfArchives` &mdash; (`Integer`) The number of archives in
 *         the vault as of the last inventory date. This field will return
 *         null if an inventory has not yet run on the vault, for example,
 *         if you just created the vault.
 *       * `SizeInBytes` &mdash; (`Integer`) Total size, in bytes, of the
 *         archives in the vault as of the last inventory date. This field
 *         will return null if an inventory has not yet run on the vault,
 *         for example, if you just created the vault.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getJobOutput(params, callback)
 *   Calls the GetJobOutput API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `jobId` &mdash; (`String`) The job ID whose data is downloaded.
 *     * `range` &mdash; (`String`) The range of bytes to retrieve from
 *       the output. For example, if you want to download the first
 *       1,048,576 bytes, specify "Range: bytes=0-1048575". By default,
 *       this operation downloads the entire output.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `body` &mdash; (`Buffer`) The job data, either archive data or
 *         inventory data.
 *       * `checksum` &mdash; (`String`) The checksum of the data in the
 *         response. This header is returned only when retrieving the
 *         output for an archive retrieval job. Furthermore, this header
 *         appears only under the following conditions: You get the entire
 *         range of the archive. You request a range to return of the
 *         archive that starts and ends on a multiple of 1 MB. For example,
 *         if you have an 3.1 MB archive and you specify a range to return
 *         that starts at 1 MB and ends at 2 MB, then the
 *         x-amz-sha256-tree-hash is returned as a response header. You
 *         request a range of the archive to return that starts on a
 *         multiple of 1 MB and goes to the end of the archive. For
 *         example, if you have a 3.1 MB archive and you specify a range
 *         that starts at 2 MB and ends at 3.1 MB (the end of the archive),
 *         then the x-amz-sha256-tree-hash is returned as a response
 *         header.
 *       * `status` &mdash; (`Integer`) The HTTP response code for a job
 *         output request. The value depends on whether a range was
 *         specified in the request.
 *       * `contentRange` &mdash; (`String`) The range of bytes returned by
 *         Amazon Glacier. If only partial output is downloaded, the
 *         response provides the range of bytes Amazon Glacier returned.
 *         For example, bytes 0-1048575/8388608 returns the first 1 MB from
 *         8 MB.
 *       * `acceptRanges` &mdash; (`String`) Indicates the range units
 *         accepted. For more information, go to RFC2616.
 *       * `contentType` &mdash; (`String`) The Content-Type depends on
 *         whether the job output is an archive or a vault inventory. For
 *         archive data, the Content-Type is application/octet-stream. For
 *         vault inventory, if you requested CSV format when you initiated
 *         the job, the Content-Type is text/csv. Otherwise, by default,
 *         vault inventory is returned as JSON, and the Content-Type is
 *         application/json.
 *       * `archiveDescription` &mdash; (`String`) The description of an
 *         archive.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getVaultNotifications(params, callback)
 *   Calls the GetVaultNotifications API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `SNSTopic` &mdash; (`String`) The Amazon Simple Notification
 *         Service (Amazon SNS) topic Amazon Resource Name (ARN).
 *       * `Events` &mdash; (`Array<String>`) A list of one or more events
 *         for which Amazon Glacier will send a notification to the
 *         specified Amazon SNS topic.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method initiateJob(params, callback)
 *   Calls the InitiateJob API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `jobParameters` &mdash; (`Object`) Provides options for
 *       specifying job information.
 *       * `Format` &mdash; (`String`) When initiating a job to retrieve
 *         a vault inventory, you can optionally add this parameter to
 *         your request to specify the output format. If you are
 *         initiating an inventory job and do not specify a Format field,
 *         JSON is the default format. Valid Values are "CSV" and "JSON".
 *       * `Type` &mdash; (`String`) The job type. You can initiate a job
 *         to retrieve an archive or get an inventory of a vault. Valid
 *         Values are "archive-retrieval" and "inventory-retrieval".
 *       * `ArchiveId` &mdash; (`String`) The ID of the archive that you
 *         want to retrieve. This field is required only if Type is set
 *         to archive-retrieval. An error occurs if you specify this
 *         request parameter for an inventory retrieval job request.
 *       * `Description` &mdash; (`String`) The optional description for
 *         the job. The description must be less than or equal to 1,024
 *         bytes. The allowable characters are 7-bit ASCII without
 *         control codes—specifically, ASCII values 32—126 decimal or
 *         0x20—0x7E hexadecimal.
 *       * `SNSTopic` &mdash; (`String`) The Amazon SNS topic ARN to
 *         which Amazon Glacier sends a notification when the job is
 *         completed and the output is ready for you to download. The
 *         specified topic publishes the notification to its subscribers.
 *         The SNS topic must exist.
 *       * `RetrievalByteRange` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `location` &mdash; (`String`) The relative URI path of the job.
 *       * `jobId` &mdash; (`String`) The ID of the job.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method initiateMultipartUpload(params, callback)
 *   Calls the InitiateMultipartUpload API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `archiveDescription` &mdash; (`String`) The archive description
 *       that you are uploading in parts. The part size must be a
 *       megabyte (1024 KB) multiplied by a power of 2—for example,
 *       1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB),
 *       and so on. The minimum allowable part size is 1 MB, and the
 *       maximum is 4 GB (4096 MB).
 *     * `partSize` &mdash; (`String`) The size of each part except the
 *       last, in bytes. The last part can be smaller than this part
 *       size.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `location` &mdash; (`String`) The relative URI path of the
 *         multipart upload ID Amazon Glacier created.
 *       * `uploadId` &mdash; (`String`) The ID of the multipart upload.
 *         This value is also included as part of the location.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listJobs(params, callback)
 *   Calls the ListJobs API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `limit` &mdash; (`String`) Specifies that the response be
 *       limited to the specified number of items or fewer. If not
 *       specified, the List Jobs operation returns up to 1,000 jobs.
 *     * `marker` &mdash; (`String`) An opaque string used for
 *       pagination. This value specifies the job at which the listing of
 *       jobs should begin. Get the marker value from a previous List
 *       Jobs response. You need only include the marker if you are
 *       continuing the pagination of results started in a previous List
 *       Jobs request.
 *     * `statuscode` &mdash; (`String`) Specifies the type of job status
 *       to return. You can specify the following values: "InProgress",
 *       "Succeeded", or "Failed".
 *     * `completed` &mdash; (`String`) Specifies the state of the jobs
 *       to return. You can specify true or false.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `JobList` &mdash; (`Array<Object>`) A list of job objects. Each
 *         job object contains metadata describing the job.
 *         * `JobId` &mdash; (`String`) An opaque string that identifies an
 *           Amazon Glacier job.
 *         * `JobDescription` &mdash; (`String`) The job description you
 *           provided when you initiated the job.
 *         * `Action` &mdash; (`String`) The job type. It is either
 *           ArchiveRetrieval or InventoryRetrieval.
 *         * `ArchiveId` &mdash; (`String`) For an ArchiveRetrieval job,
 *           this is the archive ID requested for download. Otherwise, this
 *           field is null.
 *         * `VaultARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the vault from which the archive retrieval was requested.
 *         * `CreationDate` &mdash; (`String`) The UTC date when the job
 *           was created. A string representation of ISO 8601 date format,
 *           for example, "2012-03-20T17:03:43.221Z".
 *         * `Completed` &mdash; (`Boolean`) The job status. When a job is
 *           completed, you get the job's output.
 *         * `StatusCode` &mdash; (`String`) The status code can be
 *           InProgress, Succeeded, or Failed, and indicates the status of
 *           the job.
 *         * `StatusMessage` &mdash; (`String`) A friendly message that
 *           describes the job status.
 *         * `ArchiveSizeInBytes` &mdash; (`Integer`) For an
 *           ArchiveRetrieval job, this is the size in bytes of the archive
 *           being requested for download. For the InventoryRetrieval job,
 *           the value is null.
 *         * `InventorySizeInBytes` &mdash; (`Integer`) For an
 *           InventoryRetrieval job, this is the size in bytes of the
 *           inventory requested for download. For the ArchiveRetrieval
 *           job, the value is null.
 *         * `SNSTopic` &mdash; (`String`) An Amazon Simple Notification
 *           Service (Amazon SNS) topic that receives notification.
 *         * `CompletionDate` &mdash; (`String`) The UTC time that the
 *           archive retrieval request completed. While the job is in
 *           progress, the value will be null.
 *         * `SHA256TreeHash` &mdash; (`String`) For an ArchiveRetrieval
 *           job, it is the checksum of the archive. Otherwise, the value
 *           is null.
 *         * `ArchiveSHA256TreeHash` &mdash; (`String`)
 *         * `RetrievalByteRange` &mdash; (`String`)
 *       * `Marker` &mdash; (`String`) An opaque string that represents
 *         where to continue pagination of the results. You use this value
 *         in a new List Jobs request to obtain more jobs in the list. If
 *         there are no more jobs, this value is null.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listMultipartUploads(params, callback)
 *   Calls the ListMultipartUploads API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `limit` &mdash; (`String`) Specifies the maximum number of
 *       uploads returned in the response body. If this value is not
 *       specified, the List Uploads operation returns up to 1,000
 *       uploads.
 *     * `marker` &mdash; (`String`) An opaque string used for
 *       pagination. This value specifies the upload at which the listing
 *       of uploads should begin. Get the marker value from a previous
 *       List Uploads response. You need only include the marker if you
 *       are continuing the pagination of results started in a previous
 *       List Uploads request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `UploadsList` &mdash; (`Array<Object>`) A list of in-progress
 *         multipart uploads.
 *         * `MultipartUploadId` &mdash; (`String`) The ID of a multipart
 *           upload.
 *         * `VaultARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the vault that contains the archive.
 *         * `ArchiveDescription` &mdash; (`String`) The description of the
 *           archive that was specified in the Initiate Multipart Upload
 *           request.
 *         * `PartSizeInBytes` &mdash; (`Integer`) The part size, in bytes,
 *           specified in the Initiate Multipart Upload request. This is
 *           the size of all the parts in the upload except the last part,
 *           which may be smaller than this size.
 *         * `CreationDate` &mdash; (`String`) The UTC time at which the
 *           multipart upload was initiated.
 *       * `Marker` &mdash; (`String`) An opaque string that represents
 *         where to continue pagination of the results. You use the marker
 *         in a new List Multipart Uploads request to obtain more uploads
 *         in the list. If there are no more uploads, this value is null.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listParts(params, callback)
 *   Calls the ListParts API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `uploadId` &mdash; (`String`) The upload ID of the multipart
 *       upload.
 *     * `marker` &mdash; (`String`) An opaque string used for
 *       pagination. This value specifies the part at which the listing
 *       of parts should begin. Get the marker value from the response of
 *       a previous List Parts response. You need only include the marker
 *       if you are continuing the pagination of results started in a
 *       previous List Parts request.
 *     * `limit` &mdash; (`String`) Specifies the maximum number of parts
 *       returned in the response body. If this value is not specified,
 *       the List Parts operation returns up to 1,000 uploads.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `MultipartUploadId` &mdash; (`String`) The ID of the upload to
 *         which the parts are associated.
 *       * `VaultARN` &mdash; (`String`) The Amazon Resource Name (ARN) of
 *         the vault to which the multipart upload was initiated.
 *       * `ArchiveDescription` &mdash; (`String`) The description of the
 *         archive that was specified in the Initiate Multipart Upload
 *         request.
 *       * `PartSizeInBytes` &mdash; (`Integer`) The part size in bytes.
 *       * `CreationDate` &mdash; (`String`) The UTC time at which the
 *         multipart upload was initiated.
 *       * `Parts` &mdash; (`Array<Object>`) A list of the part sizes of
 *         the multipart upload.
 *         * `RangeInBytes` &mdash; (`String`) The byte range of a part,
 *           inclusive of the upper value of the range.
 *         * `SHA256TreeHash` &mdash; (`String`) The SHA256 tree hash value
 *           that Amazon Glacier calculated for the part. This field is
 *           never null.
 *       * `Marker` &mdash; (`String`) An opaque string that represents
 *         where to continue pagination of the results. You use the marker
 *         in a new List Parts request to obtain more jobs in the list. If
 *         there are no more parts, this value is null.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listVaults(params, callback)
 *   Calls the ListVaults API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `marker` &mdash; (`String`) A string used for pagination. The
 *       marker specifies the vault ARN after which the listing of vaults
 *       should begin.
 *     * `limit` &mdash; (`String`) The maximum number of items returned
 *       in the response. If you don't specify a value, the List Vaults
 *       operation returns up to 1,000 items.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `VaultList` &mdash; (`Array<Object>`) List of vaults.
 *         * `VaultARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the vault.
 *         * `VaultName` &mdash; (`String`) The name of the vault.
 *         * `CreationDate` &mdash; (`String`) The UTC date when the vault
 *           was created. A string representation of ISO 8601 date format,
 *           for example, "2012-03-20T17:03:43.221Z".
 *         * `LastInventoryDate` &mdash; (`String`) The UTC date when
 *           Amazon Glacier completed the last vault inventory. A string
 *           representation of ISO 8601 date format, for example,
 *           "2012-03-20T17:03:43.221Z".
 *         * `NumberOfArchives` &mdash; (`Integer`) The number of archives
 *           in the vault as of the last inventory date. This field will
 *           return null if an inventory has not yet run on the vault, for
 *           example, if you just created the vault.
 *         * `SizeInBytes` &mdash; (`Integer`) Total size, in bytes, of the
 *           archives in the vault as of the last inventory date. This
 *           field will return null if an inventory has not yet run on the
 *           vault, for example, if you just created the vault.
 *       * `Marker` &mdash; (`String`) The vault ARN at which to continue
 *         pagination of the results. You use the marker in another List
 *         Vaults request to obtain more vaults in the list.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setVaultNotifications(params, callback)
 *   Calls the SetVaultNotifications API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `vaultNotificationConfig` &mdash; (`Object`) Provides options
 *       for specifying notification configuration.
 *       * `SNSTopic` &mdash; (`String`) The Amazon Simple Notification
 *         Service (Amazon SNS) topic Amazon Resource Name (ARN).
 *       * `Events` &mdash; (`Array<String>`) A list of one or more
 *         events for which Amazon Glacier will send a notification to
 *         the specified Amazon SNS topic.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method uploadArchive(params, callback)
 *   Calls the UploadArchive API operation.
 *   @param params [Object]
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `archiveDescription` &mdash; (`String`) The optional description
 *       of the archive you are uploading.
 *     * `checksum` &mdash; (`String`) The SHA256 checksum (a linear
 *       hash) of the payload.
 *     * `body` &mdash; (`Buffer`) The data to upload.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `location` &mdash; (`String`) The relative URI path of the newly
 *         added archive resource.
 *       * `checksum` &mdash; (`String`) The checksum of the archive
 *         computed by Amazon Glacier.
 *       * `archiveId` &mdash; (`String`) The ID of the archive. This value
 *         is also included as part of the location.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method uploadMultipartPart(params, callback)
 *   Calls the UploadMultipartPart API operation.
 *   @param params [Object]
 *     * `accountId` &mdash; (`String`) The AccountId is the AWS Account
 *       ID. You can specify either the AWS Account ID or optionally a
 *       '-', in which case Amazon Glacier uses the AWS Account ID
 *       associated with the credentials used to sign the request. If you
 *       specify your Account ID, do not include hyphens in it.
 *     * `vaultName` &mdash; (`String`) The name of the vault.
 *     * `uploadId` &mdash; (`String`) The upload ID of the multipart
 *       upload.
 *     * `checksum` &mdash; (`String`) The SHA256 tree hash of the data
 *       being uploaded.
 *     * `range` &mdash; (`String`) Identifies the range of bytes in the
 *       assembled archive that will be uploaded in this part. Amazon
 *       Glacier uses this information to assemble the archive in the
 *       proper sequence. The format of this header follows RFC 2616. An
 *       example header is Content-Range:bytes 0-4194303/*.
 *     * `body` &mdash; (`Buffer`) The data to upload.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `checksum` &mdash; (`String`) The SHA256 tree hash that Amazon
 *         Glacier computed for the uploaded part.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 *
 * @!method constructor(options)
 *   Constructs a service client object.  This client has one method for
 *   each API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured `region`.
 *     The endpoint should be a string like `'https://s3.amazonaws.com'`.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.Glacier.Client = inherit({});
