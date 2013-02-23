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
 * === Sending a Request Using ImportExport
 *
 *   svc = new AWS.ImportExport();
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
 *   @option (see AWS.ImportExport.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.ImportExport.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.ImportExport.Client
 *
 */
AWS.ImportExport = inherit({})

/**
 * The low-level ImportExport client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method cancelJob(params, callback)
 *   Calls the CancelJob API operation.
 *   @param params [Object]
 *     * +JobId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Success+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createJob(params, callback)
 *   Calls the CreateJob API operation.
 *   @param params [Object]
 *     * +JobType+ - (*required*, <tt>String</tt>)
 *     * +Manifest+ - (*required*, <tt>String</tt>)
 *     * +ManifestAddendum+ - (<tt>String</tt>)
 *     * +ValidateOnly+ - (*required*, <tt>Boolean</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +JobId+ - (<tt>String</tt>)
 *       * +JobType+ - (<tt>String</tt>)
 *       * +AwsShippingAddress+ - (<tt>String</tt>)
 *       * +Signature+ - (<tt>String</tt>)
 *       * +SignatureFileContents+ - (<tt>String</tt>)
 *       * +WarningMessage+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getStatus(params, callback)
 *   Calls the GetStatus API operation.
 *   @param params [Object]
 *     * +JobId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +JobId+ - (<tt>String</tt>)
 *       * +JobType+ - (<tt>String</tt>)
 *       * +AwsShippingAddress+ - (<tt>String</tt>)
 *       * +LocationCode+ - (<tt>String</tt>)
 *       * +LocationMessage+ - (<tt>String</tt>)
 *       * +ProgressCode+ - (<tt>String</tt>)
 *       * +ProgressMessage+ - (<tt>String</tt>)
 *       * +Carrier+ - (<tt>String</tt>)
 *       * +TrackingNumber+ - (<tt>String</tt>)
 *       * +LogBucket+ - (<tt>String</tt>)
 *       * +LogKey+ - (<tt>String</tt>)
 *       * +ErrorCount+ - (<tt>Integer</tt>)
 *       * +Signature+ - (<tt>String</tt>)
 *       * +SignatureFileContents+ - (<tt>String</tt>)
 *       * +CurrentManifest+ - (<tt>String</tt>)
 *       * +CreationDate+ - (<tt>Date</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listJobs(params, callback)
 *   Calls the ListJobs API operation.
 *   @param params [Object]
 *     * +MaxJobs+ - (<tt>Integer</tt>)
 *     * +Marker+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Jobs+ - (<tt>Array<Object></tt>)
 *         * +JobId+ - (<tt>String</tt>)
 *         * +CreationDate+ - (<tt>Date</tt>)
 *         * +IsCanceled+ - (<tt>Boolean</tt>)
 *         * +JobType+ - (<tt>String</tt>)
 *       * +IsTruncated+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateJob(params, callback)
 *   Calls the UpdateJob API operation.
 *   @param params [Object]
 *     * +JobId+ - (*required*, <tt>String</tt>)
 *     * +Manifest+ - (*required*, <tt>String</tt>)
 *     * +JobType+ - (*required*, <tt>String</tt>)
 *     * +ValidateOnly+ - (*required*, <tt>Boolean</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Success+ - (<tt>Boolean</tt>)
 *       * +WarningMessage+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
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
AWS.ImportExport.Client = inherit({});
