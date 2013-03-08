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
 * ### Sending a Request Using StorageGateway
 *
 * ```js
 * svc = new AWS.StorageGateway();
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
 *   @option (see AWS.StorageGateway.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.StorageGateway.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.StorageGateway.Client
 *
 */
AWS.StorageGateway = inherit({})

/**
 * The low-level StorageGateway client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method activateGateway(params, callback)
 *   Calls the ActivateGateway API operation.
 *   @param params [Object]
 *     * `ActivationKey` &mdash; **required** &mdash; (`String`) Your
 *       gateway activation key. You can obtain the activation key by
 *       sending an HTTP GET request with redirects enabled to the
 *       gateway IP address (port 80). The redirect URL returned in the
 *       response provides you the activation key for your gateway in the
 *       query string parameter activationKey. It may also include other
 *       activation-related parameters, however, these are merely
 *       defaults -- the arguments you pass to the ActivateGateway API
 *       call determine the actual configuration of your gateway.
 *     * `GatewayName` &mdash; **required** &mdash; (`String`)
 *     * `GatewayTimezone` &mdash; **required** &mdash; (`String`) One of
 *       the values that indicates the time zone you want to set for the
 *       gateway. The time zone is used, for example, for scheduling
 *       snapshots and your gateway's maintenance schedule.
 *     * `GatewayRegion` &mdash; **required** &mdash; (`String`) One of
 *       the values that indicates the region where you want to store the
 *       snapshot backups. The gateway region specified must be the same
 *       region as the region in your Host header in the request. For
 *       more information about available regions and endpoints for AWS
 *       Storage Gateway, see Regions and Endpoints in the Amazon Web
 *       Services Glossary. Valid Values: "us-east-1", "us-west-1",
 *       "us-west-2", "eu-west-1", "ap-northeast-1", "ap-southest-1",
 *       "sa-east-1"
 *     * `GatewayType` &mdash; (`String`) One of the values that defines
 *       the type of gateway to activate. The type specified is critical
 *       to all later functions of the gateway and cannot be changed
 *       after activation. The default value is STORED.
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method addCache(params, callback)
 *   Calls the AddCache API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the gateway. Use the ListGateways
 *       operation to return a list of gateways for your account and
 *       region.
 *     * `DiskIds` &mdash; **required** &mdash; (`Array<String>`) An
 *       array of strings that identify disks that are to be configured
 *       as cache. Each string in the array must be minimum length of 1
 *       and maximum length of 300. You can get the disk IDs from the
 *       ListLocalDisks API.
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method addUploadBuffer(params, callback)
 *   Calls the AddUploadBuffer API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
 *     * `DiskIds` &mdash; **required** &mdash; (`Array<String>`) An
 *       array of strings that identify disks that are to be configured
 *       as upload buffer. Each string in the array must be minimum
 *       length of 1 and maximum length of 300. You can get disk IDs from
 *       the ListLocalDisks API.
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method addWorkingStorage(params, callback)
 *   Calls the AddWorkingStorage API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
 *     * `DiskIds` &mdash; **required** &mdash; (`Array<String>`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCachediSCSIVolume(params, callback)
 *   Calls the CreateCachediSCSIVolume API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the gateway. Use the ListGateways
 *       operation to return a list of gateways for your account and
 *       region.
 *     * `VolumeSizeInBytes` &mdash; **required** &mdash; (`Integer`) The
 *       size of the cached volume.
 *     * `SnapshotId` &mdash; (`String`) The snapshot ID (e.g.,
 *       "snap-1122aabb") of the snapshot to restore as the new stored
 *       volume. Specify this field if you want to create the iSCSI
 *       cached volume from a snapshot; otherwise, do not include this
 *       field. To list snapshots for your account, use DescribeSnapshots
 *       in Amazon Elastic Compute Cloud API Reference.
 *     * `TargetName` &mdash; **required** &mdash; (`String`) The name of
 *       the iSCSI target used by initiators to connect to the target and
 *       as a suffix for the target ARN. For example, specifying
 *       TargetName as myvolume results in the target ARN of
 *       arn:aws:storagegateway:us-east-1:111122223333:gateway/mygateway/target/iqn.1997-05.com.amazon:myvolume.
 *       The target name must be unique across all volumes of a gateway.
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`) The
 *       network interface of the gateway on which to expose the iSCSI
 *       target. Only IPv4 addresses are accepted. Use the
 *       DescribeGatewayInformation operation to get a list of the
 *       network interfaces available on the gateway.
 *     * `ClientToken` &mdash; **required** &mdash; (`String`) A unique
 *       identifying string for the cached volume.
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
 *       * `VolumeARN` &mdash; (`String`) The ARN of the configured volume.
 *       * `TargetARN` &mdash; (`String`) The ARN of the volume target that
 *         includes the iSCSI name that initiators can use to connect to
 *         the target.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSnapshot(params, callback)
 *   Calls the CreateSnapshot API operation.
 *   @param params [Object]
 *     * `VolumeARN` &mdash; **required** &mdash; (`String`)
 *     * `SnapshotDescription` &mdash; **required** &mdash; (`String`)
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
 *       * `VolumeARN` &mdash; (`String`)
 *       * `SnapshotId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSnapshotFromVolumeRecoveryPoint(params, callback)
 *   Calls the CreateSnapshotFromVolumeRecoveryPoint API operation.
 *   @param params [Object]
 *     * `VolumeARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the volume. Use the ListVolumes operation
 *       to return a list of gateway volumes.
 *     * `SnapshotDescription` &mdash; **required** &mdash; (`String`) A
 *       textual description of the snapshot that appears in the Amazon
 *       EC2 console, Elastic Block Store snapshots panel in the
 *       Description field, and in the AWS Storage Gateway snapshot
 *       Details pane, Description field. Length: Minimum length of 1.
 *       Maximum length of 255.
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
 *       * `SnapshotId` &mdash; (`String`) The snapshot ID that is used to
 *         refer to the snapshot in future operations such as describing
 *         snapshots (Amazon Elastic Compute Cloud API DescribeSnapshots)
 *         or creating a volume from a snapshot (CreateStorediSCSIVolume).
 *       * `VolumeARN` &mdash; (`String`) The ARN of the volume of which
 *         the snapshot was taken. Obtain volume ARNs from the ListVolumes
 *         operation.
 *       * `VolumeRecoveryPointTime` &mdash; (`String`) The time of the
 *         recovery point. Data up to this recovery point are included in
 *         the snapshot. Type: String format of a date in the ISO8601
 *         extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createStorediSCSIVolume(params, callback)
 *   Calls the CreateStorediSCSIVolume API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
 *     * `DiskId` &mdash; **required** &mdash; (`String`)
 *     * `SnapshotId` &mdash; (`String`)
 *     * `PreserveExistingData` &mdash; **required** &mdash; (`Boolean`)
 *     * `TargetName` &mdash; **required** &mdash; (`String`)
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`)
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
 *       * `VolumeARN` &mdash; (`String`)
 *       * `VolumeSizeInBytes` &mdash; (`Integer`)
 *       * `TargetARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteBandwidthRateLimit(params, callback)
 *   Calls the DeleteBandwidthRateLimit API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
 *     * `BandwidthType` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteChapCredentials(params, callback)
 *   Calls the DeleteChapCredentials API operation.
 *   @param params [Object]
 *     * `TargetARN` &mdash; **required** &mdash; (`String`)
 *     * `InitiatorName` &mdash; **required** &mdash; (`String`)
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
 *       * `TargetARN` &mdash; (`String`)
 *       * `InitiatorName` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteGateway(params, callback)
 *   Calls the DeleteGateway API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteSnapshotSchedule(params, callback)
 *   Calls the DeleteSnapshotSchedule API operation.
 *   @param params [Object]
 *     * `VolumeARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the volume. Use the ListVolumes operation
 *       to return a list of gateway volumes.
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
 *       * `VolumeARN` &mdash; (`String`) The Amazon Resource Name (ARN) of
 *         the volume of which the snapshot was taken.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteVolume(params, callback)
 *   Calls the DeleteVolume API operation.
 *   @param params [Object]
 *     * `VolumeARN` &mdash; **required** &mdash; (`String`)
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
 *       * `VolumeARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeBandwidthRateLimit(params, callback)
 *   Calls the DescribeBandwidthRateLimit API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *       * `AverageUploadRateLimitInBitsPerSec` &mdash; (`Integer`)
 *       * `AverageDownloadRateLimitInBitsPerSec` &mdash; (`Integer`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCache(params, callback)
 *   Calls the DescribeCache API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the gateway. Use the ListGateways
 *       operation to return a list of gateways for your account and
 *       region.
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
 *       * `GatewayARN` &mdash; (`String`) In response, AWS Storage Gateway
 *         returns the ARN of the activated gateway. If you don't remember
 *         the ARN of a gateway, you can use the List Gateways operations
 *         to return a list of gateways for your account and region.
 *       * `DiskIds` &mdash; (`Array<String>`) An array of the gateway's
 *         local disk IDs that are configured as cache. Each local disk ID
 *         is specified as a string (minimum length of 1 and maximum length
 *         of 300). If no local disks are configured as cache, then the
 *         DiskIds array is empty.
 *       * `CacheAllocatedInBytes` &mdash; (`Integer`) The size allocated,
 *         in bytes, for the cache. If no cache is defined for the gateway,
 *         this field returns 0.
 *       * `CacheUsedPercentage` &mdash; (`Float`) The percentage (0 to
 *         100) of the cache storage in use. If no cached is defined for
 *         the gateway, this field returns 0.
 *       * `CacheDirtyPercentage` &mdash; (`Float`) The percentage of the
 *         cache that contains data that has not yet been persisted to
 *         Amazon S3. If no cached is defined for the gateway, this field
 *         returns 0.
 *       * `CacheHitPercentage` &mdash; (`Float`) The percentage (0 to 100)
 *         of data read from the storage volume that was read from cache.
 *         If no cached is defined for the gateway, this field returns 0.
 *       * `CacheMissPercentage` &mdash; (`Float`) TThe percentage (0 to
 *         100) of data read from the storage volume that was not read from
 *         the cache, but was read from Amazon S3. If no cached is defined
 *         for the gateway, this field returns 0.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCachediSCSIVolumes(params, callback)
 *   Calls the DescribeCachediSCSIVolumes API operation.
 *   @param params [Object]
 *     * `VolumeARNs` &mdash; **required** &mdash; (`Array<String>`) An
 *       array of strings, where each string represents the Amazon
 *       Resource Name (ARN) of a cached volume. All of the specified
 *       cached volumes must be from the same gateway. Use ListVolumes to
 *       get volume ARNs of a gateway.
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
 *       * `CachediSCSIVolumes` &mdash; (`Array<Object>`) An array of
 *         CachediSCSIVolume objects where each object contains metadata
 *         about one cached volume.
 *         * `VolumeARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the storage volume.
 *         * `VolumeId` &mdash; (`String`) The unique identifier of the
 *           storage volume, e.g. vol-1122AABB.
 *         * `VolumeType` &mdash; (`String`) A value describing the type of
 *           volume.
 *         * `VolumeStatus` &mdash; (`String`) A value that indicates the
 *           state of the volume.
 *         * `VolumeSizeInBytes` &mdash; (`Integer`) The size of the volume
 *           in bytes that was specified in the API_CreateCachediSCSIVolume
 *           operation.
 *         * `VolumeProgress` &mdash; (`Float`) The percentage complete if
 *           the volume is restoring or bootstrapping that represents the
 *           percent of data transferred. This field does not appear in the
 *           response if the stored volume is not restoring or
 *           bootstrapping.
 *         * `SourceSnapshotId` &mdash; (`String`) If the cached volume was
 *           created from a snapshot, this field contains the snapshot ID
 *           used, e.g. snap-1122aabb. Otherwise, this field is not
 *           included.
 *         * `VolumeiSCSIAttributes` &mdash; (`Object`)
 *           * `TargetARN` &mdash; (`String`)
 *           * `NetworkInterfaceId` &mdash; (`String`)
 *           * `NetworkInterfacePort` &mdash; (`Integer`)
 *           * `LunNumber` &mdash; (`Integer`)
 *           * `ChapEnabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeChapCredentials(params, callback)
 *   Calls the DescribeChapCredentials API operation.
 *   @param params [Object]
 *     * `TargetARN` &mdash; **required** &mdash; (`String`)
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
 *       * `ChapCredentials` &mdash; (`Array<Object>`)
 *         * `TargetARN` &mdash; (`String`)
 *         * `SecretToAuthenticateInitiator` &mdash; (`String`)
 *         * `InitiatorName` &mdash; (`String`)
 *         * `SecretToAuthenticateTarget` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeGatewayInformation(params, callback)
 *   Calls the DescribeGatewayInformation API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *       * `GatewayId` &mdash; (`String`) The gateway ID.
 *       * `GatewayTimezone` &mdash; (`String`) One of the GatewayTimezone
 *         values that indicates the time zone configured for the gateway.
 *       * `GatewayState` &mdash; (`String`) One of the GatewayState values
 *         that indicates the operating state of the gateway.
 *       * `GatewayNetworkInterfaces` &mdash; (`Array<Object>`) A
 *         NetworkInterface array that contains descriptions of the gateway
 *         network interfaces.
 *         * `Ipv4Address` &mdash; (`String`)
 *         * `MacAddress` &mdash; (`String`)
 *         * `Ipv6Address` &mdash; (`String`)
 *       * `GatewayType` &mdash; (`String`) TBD
 *       * `NextUpdateAvailabilityDate` &mdash; (`String`) The date at
 *         which an update to the gateway is available. This date is in the
 *         time zone of the gateway. If the gateway is not available for an
 *         update this field is not returned in the response.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeMaintenanceStartTime(params, callback)
 *   Calls the DescribeMaintenanceStartTime API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *       * `HourOfDay` &mdash; (`Integer`)
 *       * `MinuteOfHour` &mdash; (`Integer`)
 *       * `DayOfWeek` &mdash; (`Integer`)
 *       * `Timezone` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSnapshotSchedule(params, callback)
 *   Calls the DescribeSnapshotSchedule API operation.
 *   @param params [Object]
 *     * `VolumeARN` &mdash; **required** &mdash; (`String`)
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
 *       * `VolumeARN` &mdash; (`String`)
 *       * `StartAt` &mdash; (`Integer`)
 *       * `RecurrenceInHours` &mdash; (`Integer`)
 *       * `Description` &mdash; (`String`)
 *       * `Timezone` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStorediSCSIVolumes(params, callback)
 *   Calls the DescribeStorediSCSIVolumes API operation.
 *   @param params [Object]
 *     * `VolumeARNs` &mdash; **required** &mdash; (`Array<String>`)
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
 *       * `StorediSCSIVolumes` &mdash; (`Array<Object>`)
 *         * `VolumeARN` &mdash; (`String`)
 *         * `VolumeId` &mdash; (`String`)
 *         * `VolumeType` &mdash; (`String`)
 *         * `VolumeStatus` &mdash; (`String`)
 *         * `VolumeSizeInBytes` &mdash; (`Integer`)
 *         * `VolumeProgress` &mdash; (`Float`)
 *         * `VolumeDiskId` &mdash; (`String`)
 *         * `SourceSnapshotId` &mdash; (`String`)
 *         * `PreservedExistingData` &mdash; (`Boolean`)
 *         * `VolumeiSCSIAttributes` &mdash; (`Object`)
 *           * `TargetARN` &mdash; (`String`)
 *           * `NetworkInterfaceId` &mdash; (`String`)
 *           * `NetworkInterfacePort` &mdash; (`Integer`)
 *           * `LunNumber` &mdash; (`Integer`)
 *           * `ChapEnabled` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeUploadBuffer(params, callback)
 *   Calls the DescribeUploadBuffer API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the gateway. Use the ListGateways
 *       operation to return a list of gateways for your account and
 *       region.
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
 *       * `GatewayARN` &mdash; (`String`) In response, AWS Storage Gateway
 *         returns the ARN of the activated gateway. If you don't remember
 *         the ARN of a gateway, you can use the ListGateways operations to
 *         return a list of gateways for your account and region.
 *       * `DiskIds` &mdash; (`Array<String>`) An array of the gateway's
 *         local disk IDs that are configured as working storage. Each
 *         local disk ID is specified as a string (minimum length of 1 and
 *         maximum length of 300). If no local disks are configured as
 *         working storage, then the DiskIds array is empty.
 *       * `UploadBufferUsedInBytes` &mdash; (`Integer`) The total upload
 *         buffer in bytes in use by the gateway. If no upload buffer is
 *         configured for the gateway, this field returns 0.
 *       * `UploadBufferAllocatedInBytes` &mdash; (`Integer`) The total
 *         upload buffer in bytes allocated for the gateway. If no upload
 *         buffer is configured for the gateway, this field returns 0.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeWorkingStorage(params, callback)
 *   Calls the DescribeWorkingStorage API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *       * `DiskIds` &mdash; (`Array<String>`)
 *       * `WorkingStorageUsedInBytes` &mdash; (`Integer`)
 *       * `WorkingStorageAllocatedInBytes` &mdash; (`Integer`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listGateways(params, callback)
 *   Calls the ListGateways API operation.
 *   @param params [Object]
 *     * `Marker` &mdash; (`String`)
 *     * `Limit` &mdash; (`Integer`)
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
 *       * `Gateways` &mdash; (`Array<Object>`)
 *         * `GatewayARN` &mdash; (`String`)
 *       * `Marker` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listLocalDisks(params, callback)
 *   Calls the ListLocalDisks API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *       * `Disks` &mdash; (`Array<Object>`)
 *         * `DiskId` &mdash; (`String`)
 *         * `DiskPath` &mdash; (`String`)
 *         * `DiskNode` &mdash; (`String`)
 *         * `DiskSizeInBytes` &mdash; (`Integer`)
 *         * `DiskAllocationType` &mdash; (`String`)
 *         * `DiskAllocationResource` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listVolumeRecoveryPoints(params, callback)
 *   Calls the ListVolumeRecoveryPoints API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the gateway. Use the ListGateways
 *       operation to return a list of gateways for your account and
 *       region.
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
 *       * `GatewayARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *         of the activated gateway whose local disk information is
 *         returned.
 *       * `VolumeRecoveryPointInfos` &mdash; (`Array<Object>`) An array of
 *         VolumeRecoveryPointInfo objects, where each object describes a
 *         recovery point. If no recovery points are defined for the
 *         volume, then VolumeRecoveryPointInfos is an empty array "[]"
 *         * `VolumeARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the volume associated with the recovery point.
 *         * `VolumeSizeInBytes` &mdash; (`Integer`) The size, in bytes, of
 *           the volume to which the recovery point is associated.
 *         * `VolumeUsageInBytes` &mdash; (`Integer`) The size, in bytes,
 *           of the volume in use at the time of the recovery point.
 *         * `VolumeRecoveryPointTime` &mdash; (`String`) The time of the
 *           recovery point. The format of the time is in the ISO8601
 *           extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listVolumes(params, callback)
 *   Calls the ListVolumes API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
 *     * `Marker` &mdash; (`String`)
 *     * `Limit` &mdash; (`Integer`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *       * `Marker` &mdash; (`String`)
 *       * `VolumeInfos` &mdash; (`Array<Object>`)
 *         * `VolumeARN` &mdash; (`String`)
 *         * `VolumeType` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method shutdownGateway(params, callback)
 *   Calls the ShutdownGateway API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method startGateway(params, callback)
 *   Calls the StartGateway API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateBandwidthRateLimit(params, callback)
 *   Calls the UpdateBandwidthRateLimit API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
 *     * `AverageUploadRateLimitInBitsPerSec` &mdash; (`Integer`)
 *     * `AverageDownloadRateLimitInBitsPerSec` &mdash; (`Integer`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateChapCredentials(params, callback)
 *   Calls the UpdateChapCredentials API operation.
 *   @param params [Object]
 *     * `TargetARN` &mdash; **required** &mdash; (`String`)
 *     * `SecretToAuthenticateInitiator` &mdash; **required** &mdash;
 *       (`String`)
 *     * `InitiatorName` &mdash; **required** &mdash; (`String`)
 *     * `SecretToAuthenticateTarget` &mdash; (`String`)
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
 *       * `TargetARN` &mdash; (`String`)
 *       * `InitiatorName` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateGatewayInformation(params, callback)
 *   Calls the UpdateGatewayInformation API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
 *     * `GatewayName` &mdash; (`String`)
 *     * `GatewayTimezone` &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateGatewaySoftwareNow(params, callback)
 *   Calls the UpdateGatewaySoftwareNow API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateMaintenanceStartTime(params, callback)
 *   Calls the UpdateMaintenanceStartTime API operation.
 *   @param params [Object]
 *     * `GatewayARN` &mdash; **required** &mdash; (`String`)
 *     * `HourOfDay` &mdash; **required** &mdash; (`Integer`)
 *     * `MinuteOfHour` &mdash; **required** &mdash; (`Integer`)
 *     * `DayOfWeek` &mdash; **required** &mdash; (`Integer`)
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
 *       * `GatewayARN` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateSnapshotSchedule(params, callback)
 *   Calls the UpdateSnapshotSchedule API operation.
 *   @param params [Object]
 *     * `VolumeARN` &mdash; **required** &mdash; (`String`)
 *     * `StartAt` &mdash; **required** &mdash; (`Integer`)
 *     * `RecurrenceInHours` &mdash; **required** &mdash; (`Integer`)
 *     * `Description` &mdash; (`String`)
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
 *       * `VolumeARN` &mdash; (`String`)
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
AWS.StorageGateway.Client = inherit({});
