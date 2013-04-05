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
 * ### Sending a Request Using CloudFront
 *
 * ```js
 * svc = new AWS.CloudFront();
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
 *   @option (see AWS.CloudFront.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.CloudFront.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.CloudFront.Client
 *
 */
AWS.CloudFront = inherit(AWS.Service, {});

/**
 * The low-level CloudFront client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method createCloudFrontOriginAccessIdentity(params, callback)
 *   Calls the CreateCloudFrontOriginAccessIdentity API operation.
 *   @param params [Object]
 *     * `CloudFrontOriginAccessIdentityConfig` &mdash; **required**
 *       &mdash; (`map`)
 *         * `CallerReference` &mdash; **required** &mdash; (`String`)
 *         * `Comment` &mdash; **required** &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Location` &mdash; (`String`)
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `S3CanonicalUserId` &mdash; (`String`)
 *       * `CloudFrontOriginAccessIdentityConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `Comment` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDistribution(params, callback)
 *   Calls the CreateDistribution API operation.
 *   @param params [Object]
 *     * `DistributionConfig` &mdash; **required** &mdash; (`map`)
 *         * `CallerReference` &mdash; **required** &mdash; (`String`)
 *         * `Aliases` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<String>`)
 *         * `DefaultRootObject` &mdash; **required** &mdash; (`String`)
 *         * `Origins` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<map>`)
 *                 * `Id` &mdash; **required** &mdash; (`String`)
 *                 * `DomainName` &mdash; **required** &mdash; (`String`)
 *                 * `S3OriginConfig` &mdash; (`map`)
 *                     * `OriginAccessIdentity` &mdash; **required**
 *                       &mdash; (`String`)
 *                 * `CustomOriginConfig` &mdash; (`map`)
 *                     * `HTTPPort` &mdash; **required** &mdash;
 *                       (`Integer`)
 *                     * `HTTPSPort` &mdash; **required** &mdash;
 *                       (`Integer`)
 *                     * `OriginProtocolPolicy` &mdash; **required**
 *                       &mdash; (`String`)
 *                       Possible values include:
 *                       * `http-only`
 *                       * `match-viewer`
 *         * `DefaultCacheBehavior` &mdash; **required** &mdash; (`map`)
 *             * `TargetOriginId` &mdash; **required** &mdash; (`String`)
 *             * `ForwardedValues` &mdash; **required** &mdash; (`map`)
 *                 * `QueryString` &mdash; **required** &mdash;
 *                   (`Boolean`)
 *             * `TrustedSigners` &mdash; **required** &mdash; (`map`)
 *                 * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *                 * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *                 * `Items` &mdash; (`Array<String>`)
 *             * `ViewerProtocolPolicy` &mdash; **required** &mdash;
 *               (`String`)
 *               Possible values include:
 *               * `allow-all`
 *               * `https-only`
 *             * `MinTTL` &mdash; **required** &mdash; (`Integer`)
 *         * `CacheBehaviors` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<map>`)
 *                 * `PathPattern` &mdash; **required** &mdash;
 *                   (`String`)
 *                 * `TargetOriginId` &mdash; **required** &mdash;
 *                   (`String`)
 *                 * `ForwardedValues` &mdash; **required** &mdash;
 *                   (`map`)
 *                     * `QueryString` &mdash; **required** &mdash;
 *                       (`Boolean`)
 *                 * `TrustedSigners` &mdash; **required** &mdash;
 *                   (`map`)
 *                     * `Enabled` &mdash; **required** &mdash;
 *                       (`Boolean`)
 *                     * `Quantity` &mdash; **required** &mdash;
 *                       (`Integer`)
 *                     * `Items` &mdash; (`Array<String>`)
 *                 * `ViewerProtocolPolicy` &mdash; **required** &mdash;
 *                   (`String`)
 *                   Possible values include:
 *                   * `allow-all`
 *                   * `https-only`
 *                 * `MinTTL` &mdash; **required** &mdash; (`Integer`)
 *         * `Comment` &mdash; **required** &mdash; (`String`)
 *         * `Logging` &mdash; **required** &mdash; (`map`)
 *             * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *             * `Bucket` &mdash; **required** &mdash; (`String`)
 *             * `Prefix` &mdash; **required** &mdash; (`String`)
 *         * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Location` &mdash; (`String`)
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `Status` &mdash; (`String`)
 *       * `LastModifiedTime` &mdash; (`Date`)
 *       * `InProgressInvalidationBatches` &mdash; (`Integer`)
 *       * `DomainName` &mdash; (`String`)
 *       * `ActiveTrustedSigners` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<map>`)
 *               * `AwsAccountNumber` &mdash; (`String`)
 *               * `KeyPairIds` &mdash; (`map`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *       * `DistributionConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `Aliases` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `DefaultRootObject` &mdash; (`String`)
 *           * `Origins` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<map>`)
 *                   * `Id` &mdash; (`String`)
 *                   * `DomainName` &mdash; (`String`)
 *                   * `S3OriginConfig` &mdash; (`map`)
 *                       * `OriginAccessIdentity` &mdash; (`String`)
 *                   * `CustomOriginConfig` &mdash; (`map`)
 *                       * `HTTPPort` &mdash; (`Integer`)
 *                       * `HTTPSPort` &mdash; (`Integer`)
 *                       * `OriginProtocolPolicy` &mdash; (`String`)
 *                         Possible values include:
 *                         * `http-only`
 *                         * `match-viewer`
 *           * `DefaultCacheBehavior` &mdash; (`map`)
 *               * `TargetOriginId` &mdash; (`String`)
 *               * `ForwardedValues` &mdash; (`map`)
 *                   * `QueryString` &mdash; (`Boolean`)
 *               * `TrustedSigners` &mdash; (`map`)
 *                   * `Enabled` &mdash; (`Boolean`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *               * `ViewerProtocolPolicy` &mdash; (`String`)
 *                 Possible values include:
 *                 * `allow-all`
 *                 * `https-only`
 *               * `MinTTL` &mdash; (`Integer`)
 *           * `CacheBehaviors` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<map>`)
 *                   * `PathPattern` &mdash; (`String`)
 *                   * `TargetOriginId` &mdash; (`String`)
 *                   * `ForwardedValues` &mdash; (`map`)
 *                       * `QueryString` &mdash; (`Boolean`)
 *                   * `TrustedSigners` &mdash; (`map`)
 *                       * `Enabled` &mdash; (`Boolean`)
 *                       * `Quantity` &mdash; (`Integer`)
 *                       * `Items` &mdash; (`Array<String>`)
 *                   * `ViewerProtocolPolicy` &mdash; (`String`)
 *                     Possible values include:
 *                     * `allow-all`
 *                     * `https-only`
 *                   * `MinTTL` &mdash; (`Integer`)
 *           * `Comment` &mdash; (`String`)
 *           * `Logging` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Bucket` &mdash; (`String`)
 *               * `Prefix` &mdash; (`String`)
 *           * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInvalidation(params, callback)
 *   Calls the CreateInvalidation API operation.
 *   @param params [Object]
 *     * `DistributionId` &mdash; **required** &mdash; (`String`)
 *     * `InvalidationBatch` &mdash; **required** &mdash; (`map`)
 *         * `Paths` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<String>`)
 *         * `CallerReference` &mdash; **required** &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Location` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `Status` &mdash; (`String`)
 *       * `CreateTime` &mdash; (`Date`)
 *       * `InvalidationBatch` &mdash; (`map`)
 *           * `Paths` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `CallerReference` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createStreamingDistribution(params, callback)
 *   Calls the CreateStreamingDistribution API operation.
 *   @param params [Object]
 *     * `StreamingDistributionConfig` &mdash; **required** &mdash;
 *       (`map`)
 *         * `CallerReference` &mdash; **required** &mdash; (`String`)
 *         * `S3Origin` &mdash; **required** &mdash; (`map`)
 *             * `DomainName` &mdash; **required** &mdash; (`String`)
 *             * `OriginAccessIdentity` &mdash; **required** &mdash;
 *               (`String`)
 *         * `Aliases` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<String>`)
 *         * `Comment` &mdash; **required** &mdash; (`String`)
 *         * `Logging` &mdash; **required** &mdash; (`map`)
 *             * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *             * `Bucket` &mdash; **required** &mdash; (`String`)
 *             * `Prefix` &mdash; **required** &mdash; (`String`)
 *         * `TrustedSigners` &mdash; **required** &mdash; (`map`)
 *             * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<String>`)
 *         * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Location` &mdash; (`String`)
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `Status` &mdash; (`String`)
 *       * `LastModifiedTime` &mdash; (`Date`)
 *       * `DomainName` &mdash; (`String`)
 *       * `ActiveTrustedSigners` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<map>`)
 *               * `AwsAccountNumber` &mdash; (`String`)
 *               * `KeyPairIds` &mdash; (`map`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *       * `StreamingDistributionConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `S3Origin` &mdash; (`map`)
 *               * `DomainName` &mdash; (`String`)
 *               * `OriginAccessIdentity` &mdash; (`String`)
 *           * `Aliases` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `Comment` &mdash; (`String`)
 *           * `Logging` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Bucket` &mdash; (`String`)
 *               * `Prefix` &mdash; (`String`)
 *           * `TrustedSigners` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteCloudFrontOriginAccessIdentity(params, callback)
 *   Calls the DeleteCloudFrontOriginAccessIdentity API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *     * `IfMatch` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteDistribution(params, callback)
 *   Calls the DeleteDistribution API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *     * `IfMatch` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteStreamingDistribution(params, callback)
 *   Calls the DeleteStreamingDistribution API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *     * `IfMatch` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getCloudFrontOriginAccessIdentity(params, callback)
 *   Calls the GetCloudFrontOriginAccessIdentity API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `S3CanonicalUserId` &mdash; (`String`)
 *       * `CloudFrontOriginAccessIdentityConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `Comment` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getCloudFrontOriginAccessIdentityConfig(params, callback)
 *   Calls the GetCloudFrontOriginAccessIdentityConfig API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `CallerReference` &mdash; (`String`)
 *       * `Comment` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getDistribution(params, callback)
 *   Calls the GetDistribution API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `Status` &mdash; (`String`)
 *       * `LastModifiedTime` &mdash; (`Date`)
 *       * `InProgressInvalidationBatches` &mdash; (`Integer`)
 *       * `DomainName` &mdash; (`String`)
 *       * `ActiveTrustedSigners` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<map>`)
 *               * `AwsAccountNumber` &mdash; (`String`)
 *               * `KeyPairIds` &mdash; (`map`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *       * `DistributionConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `Aliases` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `DefaultRootObject` &mdash; (`String`)
 *           * `Origins` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<map>`)
 *                   * `Id` &mdash; (`String`)
 *                   * `DomainName` &mdash; (`String`)
 *                   * `S3OriginConfig` &mdash; (`map`)
 *                       * `OriginAccessIdentity` &mdash; (`String`)
 *                   * `CustomOriginConfig` &mdash; (`map`)
 *                       * `HTTPPort` &mdash; (`Integer`)
 *                       * `HTTPSPort` &mdash; (`Integer`)
 *                       * `OriginProtocolPolicy` &mdash; (`String`)
 *                         Possible values include:
 *                         * `http-only`
 *                         * `match-viewer`
 *           * `DefaultCacheBehavior` &mdash; (`map`)
 *               * `TargetOriginId` &mdash; (`String`)
 *               * `ForwardedValues` &mdash; (`map`)
 *                   * `QueryString` &mdash; (`Boolean`)
 *               * `TrustedSigners` &mdash; (`map`)
 *                   * `Enabled` &mdash; (`Boolean`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *               * `ViewerProtocolPolicy` &mdash; (`String`)
 *                 Possible values include:
 *                 * `allow-all`
 *                 * `https-only`
 *               * `MinTTL` &mdash; (`Integer`)
 *           * `CacheBehaviors` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<map>`)
 *                   * `PathPattern` &mdash; (`String`)
 *                   * `TargetOriginId` &mdash; (`String`)
 *                   * `ForwardedValues` &mdash; (`map`)
 *                       * `QueryString` &mdash; (`Boolean`)
 *                   * `TrustedSigners` &mdash; (`map`)
 *                       * `Enabled` &mdash; (`Boolean`)
 *                       * `Quantity` &mdash; (`Integer`)
 *                       * `Items` &mdash; (`Array<String>`)
 *                   * `ViewerProtocolPolicy` &mdash; (`String`)
 *                     Possible values include:
 *                     * `allow-all`
 *                     * `https-only`
 *                   * `MinTTL` &mdash; (`Integer`)
 *           * `Comment` &mdash; (`String`)
 *           * `Logging` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Bucket` &mdash; (`String`)
 *               * `Prefix` &mdash; (`String`)
 *           * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getDistributionConfig(params, callback)
 *   Calls the GetDistributionConfig API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `CallerReference` &mdash; (`String`)
 *       * `Aliases` &mdash; (`map`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<String>`)
 *       * `DefaultRootObject` &mdash; (`String`)
 *       * `Origins` &mdash; (`map`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<map>`)
 *               * `Id` &mdash; (`String`)
 *               * `DomainName` &mdash; (`String`)
 *               * `S3OriginConfig` &mdash; (`map`)
 *                   * `OriginAccessIdentity` &mdash; (`String`)
 *               * `CustomOriginConfig` &mdash; (`map`)
 *                   * `HTTPPort` &mdash; (`Integer`)
 *                   * `HTTPSPort` &mdash; (`Integer`)
 *                   * `OriginProtocolPolicy` &mdash; (`String`)
 *                     Possible values include:
 *                     * `http-only`
 *                     * `match-viewer`
 *       * `DefaultCacheBehavior` &mdash; (`map`)
 *           * `TargetOriginId` &mdash; (`String`)
 *           * `ForwardedValues` &mdash; (`map`)
 *               * `QueryString` &mdash; (`Boolean`)
 *           * `TrustedSigners` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `ViewerProtocolPolicy` &mdash; (`String`)
 *             Possible values include:
 *             * `allow-all`
 *             * `https-only`
 *           * `MinTTL` &mdash; (`Integer`)
 *       * `CacheBehaviors` &mdash; (`map`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<map>`)
 *               * `PathPattern` &mdash; (`String`)
 *               * `TargetOriginId` &mdash; (`String`)
 *               * `ForwardedValues` &mdash; (`map`)
 *                   * `QueryString` &mdash; (`Boolean`)
 *               * `TrustedSigners` &mdash; (`map`)
 *                   * `Enabled` &mdash; (`Boolean`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *               * `ViewerProtocolPolicy` &mdash; (`String`)
 *                 Possible values include:
 *                 * `allow-all`
 *                 * `https-only`
 *               * `MinTTL` &mdash; (`Integer`)
 *       * `Comment` &mdash; (`String`)
 *       * `Logging` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Bucket` &mdash; (`String`)
 *           * `Prefix` &mdash; (`String`)
 *       * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getInvalidation(params, callback)
 *   Calls the GetInvalidation API operation.
 *   @param params [Object]
 *     * `DistributionId` &mdash; **required** &mdash; (`String`)
 *     * `Id` &mdash; **required** &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Id` &mdash; (`String`)
 *       * `Status` &mdash; (`String`)
 *       * `CreateTime` &mdash; (`Date`)
 *       * `InvalidationBatch` &mdash; (`map`)
 *           * `Paths` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `CallerReference` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getStreamingDistribution(params, callback)
 *   Calls the GetStreamingDistribution API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `Status` &mdash; (`String`)
 *       * `LastModifiedTime` &mdash; (`Date`)
 *       * `DomainName` &mdash; (`String`)
 *       * `ActiveTrustedSigners` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<map>`)
 *               * `AwsAccountNumber` &mdash; (`String`)
 *               * `KeyPairIds` &mdash; (`map`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *       * `StreamingDistributionConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `S3Origin` &mdash; (`map`)
 *               * `DomainName` &mdash; (`String`)
 *               * `OriginAccessIdentity` &mdash; (`String`)
 *           * `Aliases` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `Comment` &mdash; (`String`)
 *           * `Logging` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Bucket` &mdash; (`String`)
 *               * `Prefix` &mdash; (`String`)
 *           * `TrustedSigners` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getStreamingDistributionConfig(params, callback)
 *   Calls the GetStreamingDistributionConfig API operation.
 *   @param params [Object]
 *     * `Id` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `CallerReference` &mdash; (`String`)
 *       * `S3Origin` &mdash; (`map`)
 *           * `DomainName` &mdash; (`String`)
 *           * `OriginAccessIdentity` &mdash; (`String`)
 *       * `Aliases` &mdash; (`map`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<String>`)
 *       * `Comment` &mdash; (`String`)
 *       * `Logging` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Bucket` &mdash; (`String`)
 *           * `Prefix` &mdash; (`String`)
 *       * `TrustedSigners` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<String>`)
 *       * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listCloudFrontOriginAccessIdentities(params, callback)
 *   Calls the ListCloudFrontOriginAccessIdentities API operation.
 *   @param params [Object]
 *     * `Marker` &mdash; (`String`)
 *     * `MaxItems` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Marker` &mdash; (`String`)
 *       * `NextMarker` &mdash; (`String`)
 *       * `MaxItems` &mdash; (`Integer`)
 *       * `IsTruncated` &mdash; (`Boolean`)
 *       * `Quantity` &mdash; (`Integer`)
 *       * `Items` &mdash; (`Array<map>`)
 *           * `Id` &mdash; (`String`)
 *           * `S3CanonicalUserId` &mdash; (`String`)
 *           * `Comment` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listDistributions(params, callback)
 *   Calls the ListDistributions API operation.
 *   @param params [Object]
 *     * `Marker` &mdash; (`String`)
 *     * `MaxItems` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Marker` &mdash; (`String`)
 *       * `NextMarker` &mdash; (`String`)
 *       * `MaxItems` &mdash; (`Integer`)
 *       * `IsTruncated` &mdash; (`Boolean`)
 *       * `Quantity` &mdash; (`Integer`)
 *       * `Items` &mdash; (`Array<map>`)
 *           * `Id` &mdash; (`String`)
 *           * `Status` &mdash; (`String`)
 *           * `LastModifiedTime` &mdash; (`Date`)
 *           * `DomainName` &mdash; (`String`)
 *           * `Aliases` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `Origins` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<map>`)
 *                   * `Id` &mdash; (`String`)
 *                   * `DomainName` &mdash; (`String`)
 *                   * `S3OriginConfig` &mdash; (`map`)
 *                       * `OriginAccessIdentity` &mdash; (`String`)
 *                   * `CustomOriginConfig` &mdash; (`map`)
 *                       * `HTTPPort` &mdash; (`Integer`)
 *                       * `HTTPSPort` &mdash; (`Integer`)
 *                       * `OriginProtocolPolicy` &mdash; (`String`)
 *                         Possible values include:
 *                         * `http-only`
 *                         * `match-viewer`
 *           * `DefaultCacheBehavior` &mdash; (`map`)
 *               * `TargetOriginId` &mdash; (`String`)
 *               * `ForwardedValues` &mdash; (`map`)
 *                   * `QueryString` &mdash; (`Boolean`)
 *               * `TrustedSigners` &mdash; (`map`)
 *                   * `Enabled` &mdash; (`Boolean`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *               * `ViewerProtocolPolicy` &mdash; (`String`)
 *                 Possible values include:
 *                 * `allow-all`
 *                 * `https-only`
 *               * `MinTTL` &mdash; (`Integer`)
 *           * `CacheBehaviors` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<map>`)
 *                   * `PathPattern` &mdash; (`String`)
 *                   * `TargetOriginId` &mdash; (`String`)
 *                   * `ForwardedValues` &mdash; (`map`)
 *                       * `QueryString` &mdash; (`Boolean`)
 *                   * `TrustedSigners` &mdash; (`map`)
 *                       * `Enabled` &mdash; (`Boolean`)
 *                       * `Quantity` &mdash; (`Integer`)
 *                       * `Items` &mdash; (`Array<String>`)
 *                   * `ViewerProtocolPolicy` &mdash; (`String`)
 *                     Possible values include:
 *                     * `allow-all`
 *                     * `https-only`
 *                   * `MinTTL` &mdash; (`Integer`)
 *           * `Comment` &mdash; (`String`)
 *           * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listInvalidations(params, callback)
 *   Calls the ListInvalidations API operation.
 *   @param params [Object]
 *     * `DistributionId` &mdash; **required** &mdash; (`String`)
 *     * `Marker` &mdash; (`String`)
 *     * `MaxItems` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Marker` &mdash; (`String`)
 *       * `NextMarker` &mdash; (`String`)
 *       * `MaxItems` &mdash; (`Integer`)
 *       * `IsTruncated` &mdash; (`Boolean`)
 *       * `Quantity` &mdash; (`Integer`)
 *       * `Items` &mdash; (`Array<map>`)
 *           * `Id` &mdash; (`String`)
 *           * `Status` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listStreamingDistributions(params, callback)
 *   Calls the ListStreamingDistributions API operation.
 *   @param params [Object]
 *     * `Marker` &mdash; (`String`)
 *     * `MaxItems` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Marker` &mdash; (`String`)
 *       * `NextMarker` &mdash; (`String`)
 *       * `MaxItems` &mdash; (`Integer`)
 *       * `IsTruncated` &mdash; (`Boolean`)
 *       * `Quantity` &mdash; (`Integer`)
 *       * `Items` &mdash; (`Array<map>`)
 *           * `Id` &mdash; (`String`)
 *           * `Status` &mdash; (`String`)
 *           * `LastModifiedTime` &mdash; (`Date`)
 *           * `DomainName` &mdash; (`String`)
 *           * `S3Origin` &mdash; (`map`)
 *               * `DomainName` &mdash; (`String`)
 *               * `OriginAccessIdentity` &mdash; (`String`)
 *           * `Aliases` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `TrustedSigners` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `Comment` &mdash; (`String`)
 *           * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateCloudFrontOriginAccessIdentity(params, callback)
 *   Calls the UpdateCloudFrontOriginAccessIdentity API operation.
 *   @param params [Object]
 *     * `CloudFrontOriginAccessIdentityConfig` &mdash; **required**
 *       &mdash; (`map`)
 *         * `CallerReference` &mdash; **required** &mdash; (`String`)
 *         * `Comment` &mdash; **required** &mdash; (`String`)
 *     * `Id` &mdash; (`String`)
 *     * `IfMatch` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `S3CanonicalUserId` &mdash; (`String`)
 *       * `CloudFrontOriginAccessIdentityConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `Comment` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateDistribution(params, callback)
 *   Calls the UpdateDistribution API operation.
 *   @param params [Object]
 *     * `DistributionConfig` &mdash; **required** &mdash; (`map`)
 *         * `CallerReference` &mdash; **required** &mdash; (`String`)
 *         * `Aliases` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<String>`)
 *         * `DefaultRootObject` &mdash; **required** &mdash; (`String`)
 *         * `Origins` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<map>`)
 *                 * `Id` &mdash; **required** &mdash; (`String`)
 *                 * `DomainName` &mdash; **required** &mdash; (`String`)
 *                 * `S3OriginConfig` &mdash; (`map`)
 *                     * `OriginAccessIdentity` &mdash; **required**
 *                       &mdash; (`String`)
 *                 * `CustomOriginConfig` &mdash; (`map`)
 *                     * `HTTPPort` &mdash; **required** &mdash;
 *                       (`Integer`)
 *                     * `HTTPSPort` &mdash; **required** &mdash;
 *                       (`Integer`)
 *                     * `OriginProtocolPolicy` &mdash; **required**
 *                       &mdash; (`String`)
 *                       Possible values include:
 *                       * `http-only`
 *                       * `match-viewer`
 *         * `DefaultCacheBehavior` &mdash; **required** &mdash; (`map`)
 *             * `TargetOriginId` &mdash; **required** &mdash; (`String`)
 *             * `ForwardedValues` &mdash; **required** &mdash; (`map`)
 *                 * `QueryString` &mdash; **required** &mdash;
 *                   (`Boolean`)
 *             * `TrustedSigners` &mdash; **required** &mdash; (`map`)
 *                 * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *                 * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *                 * `Items` &mdash; (`Array<String>`)
 *             * `ViewerProtocolPolicy` &mdash; **required** &mdash;
 *               (`String`)
 *               Possible values include:
 *               * `allow-all`
 *               * `https-only`
 *             * `MinTTL` &mdash; **required** &mdash; (`Integer`)
 *         * `CacheBehaviors` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<map>`)
 *                 * `PathPattern` &mdash; **required** &mdash;
 *                   (`String`)
 *                 * `TargetOriginId` &mdash; **required** &mdash;
 *                   (`String`)
 *                 * `ForwardedValues` &mdash; **required** &mdash;
 *                   (`map`)
 *                     * `QueryString` &mdash; **required** &mdash;
 *                       (`Boolean`)
 *                 * `TrustedSigners` &mdash; **required** &mdash;
 *                   (`map`)
 *                     * `Enabled` &mdash; **required** &mdash;
 *                       (`Boolean`)
 *                     * `Quantity` &mdash; **required** &mdash;
 *                       (`Integer`)
 *                     * `Items` &mdash; (`Array<String>`)
 *                 * `ViewerProtocolPolicy` &mdash; **required** &mdash;
 *                   (`String`)
 *                   Possible values include:
 *                   * `allow-all`
 *                   * `https-only`
 *                 * `MinTTL` &mdash; **required** &mdash; (`Integer`)
 *         * `Comment` &mdash; **required** &mdash; (`String`)
 *         * `Logging` &mdash; **required** &mdash; (`map`)
 *             * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *             * `Bucket` &mdash; **required** &mdash; (`String`)
 *             * `Prefix` &mdash; **required** &mdash; (`String`)
 *         * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *     * `Id` &mdash; (`String`)
 *     * `IfMatch` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `Status` &mdash; (`String`)
 *       * `LastModifiedTime` &mdash; (`Date`)
 *       * `InProgressInvalidationBatches` &mdash; (`Integer`)
 *       * `DomainName` &mdash; (`String`)
 *       * `ActiveTrustedSigners` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<map>`)
 *               * `AwsAccountNumber` &mdash; (`String`)
 *               * `KeyPairIds` &mdash; (`map`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *       * `DistributionConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `Aliases` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `DefaultRootObject` &mdash; (`String`)
 *           * `Origins` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<map>`)
 *                   * `Id` &mdash; (`String`)
 *                   * `DomainName` &mdash; (`String`)
 *                   * `S3OriginConfig` &mdash; (`map`)
 *                       * `OriginAccessIdentity` &mdash; (`String`)
 *                   * `CustomOriginConfig` &mdash; (`map`)
 *                       * `HTTPPort` &mdash; (`Integer`)
 *                       * `HTTPSPort` &mdash; (`Integer`)
 *                       * `OriginProtocolPolicy` &mdash; (`String`)
 *                         Possible values include:
 *                         * `http-only`
 *                         * `match-viewer`
 *           * `DefaultCacheBehavior` &mdash; (`map`)
 *               * `TargetOriginId` &mdash; (`String`)
 *               * `ForwardedValues` &mdash; (`map`)
 *                   * `QueryString` &mdash; (`Boolean`)
 *               * `TrustedSigners` &mdash; (`map`)
 *                   * `Enabled` &mdash; (`Boolean`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *               * `ViewerProtocolPolicy` &mdash; (`String`)
 *                 Possible values include:
 *                 * `allow-all`
 *                 * `https-only`
 *               * `MinTTL` &mdash; (`Integer`)
 *           * `CacheBehaviors` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<map>`)
 *                   * `PathPattern` &mdash; (`String`)
 *                   * `TargetOriginId` &mdash; (`String`)
 *                   * `ForwardedValues` &mdash; (`map`)
 *                       * `QueryString` &mdash; (`Boolean`)
 *                   * `TrustedSigners` &mdash; (`map`)
 *                       * `Enabled` &mdash; (`Boolean`)
 *                       * `Quantity` &mdash; (`Integer`)
 *                       * `Items` &mdash; (`Array<String>`)
 *                   * `ViewerProtocolPolicy` &mdash; (`String`)
 *                     Possible values include:
 *                     * `allow-all`
 *                     * `https-only`
 *                   * `MinTTL` &mdash; (`Integer`)
 *           * `Comment` &mdash; (`String`)
 *           * `Logging` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Bucket` &mdash; (`String`)
 *               * `Prefix` &mdash; (`String`)
 *           * `Enabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateStreamingDistribution(params, callback)
 *   Calls the UpdateStreamingDistribution API operation.
 *   @param params [Object]
 *     * `StreamingDistributionConfig` &mdash; **required** &mdash;
 *       (`map`)
 *         * `CallerReference` &mdash; **required** &mdash; (`String`)
 *         * `S3Origin` &mdash; **required** &mdash; (`map`)
 *             * `DomainName` &mdash; **required** &mdash; (`String`)
 *             * `OriginAccessIdentity` &mdash; **required** &mdash;
 *               (`String`)
 *         * `Aliases` &mdash; **required** &mdash; (`map`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<String>`)
 *         * `Comment` &mdash; **required** &mdash; (`String`)
 *         * `Logging` &mdash; **required** &mdash; (`map`)
 *             * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *             * `Bucket` &mdash; **required** &mdash; (`String`)
 *             * `Prefix` &mdash; **required** &mdash; (`String`)
 *         * `TrustedSigners` &mdash; **required** &mdash; (`map`)
 *             * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *             * `Quantity` &mdash; **required** &mdash; (`Integer`)
 *             * `Items` &mdash; (`Array<String>`)
 *         * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *     * `Id` &mdash; (`String`)
 *     * `IfMatch` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `ETag` &mdash; (`String`)
 *       * `Id` &mdash; (`String`)
 *       * `Status` &mdash; (`String`)
 *       * `LastModifiedTime` &mdash; (`Date`)
 *       * `DomainName` &mdash; (`String`)
 *       * `ActiveTrustedSigners` &mdash; (`map`)
 *           * `Enabled` &mdash; (`Boolean`)
 *           * `Quantity` &mdash; (`Integer`)
 *           * `Items` &mdash; (`Array<map>`)
 *               * `AwsAccountNumber` &mdash; (`String`)
 *               * `KeyPairIds` &mdash; (`map`)
 *                   * `Quantity` &mdash; (`Integer`)
 *                   * `Items` &mdash; (`Array<String>`)
 *       * `StreamingDistributionConfig` &mdash; (`map`)
 *           * `CallerReference` &mdash; (`String`)
 *           * `S3Origin` &mdash; (`map`)
 *               * `DomainName` &mdash; (`String`)
 *               * `OriginAccessIdentity` &mdash; (`String`)
 *           * `Aliases` &mdash; (`map`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `Comment` &mdash; (`String`)
 *           * `Logging` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Bucket` &mdash; (`String`)
 *               * `Prefix` &mdash; (`String`)
 *           * `TrustedSigners` &mdash; (`map`)
 *               * `Enabled` &mdash; (`Boolean`)
 *               * `Quantity` &mdash; (`Integer`)
 *               * `Items` &mdash; (`Array<String>`)
 *           * `Enabled` &mdash; (`Boolean`)
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
AWS.CloudFront.Client_20120505 = inherit(AWS.Client, {});
