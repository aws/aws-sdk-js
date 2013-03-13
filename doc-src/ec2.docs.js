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
 * ### Sending a Request Using EC2
 *
 * ```js
 * svc = new AWS.EC2();
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
 *   @option (see AWS.EC2.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.EC2.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.EC2.Client
 *
 */
AWS.EC2 = inherit({})

/**
 * The low-level EC2 client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method activateLicense(params, callback)
 *   Calls the ActivateLicense API operation.
 *   @param params [Object]
 *     * `LicenseId` &mdash; **required** &mdash; (`String`) Specifies
 *       the ID for the specific license to activate against.
 *     * `Capacity` &mdash; **required** &mdash; (`Integer`) Specifies
 *       the additional number of licenses to activate.
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
 * @!method allocateAddress(params, callback)
 *   Calls the AllocateAddress API operation.
 *   @param params [Object]
 *     * `Domain` &mdash; (`String`) Set to vpc to allocate the address
 *       to your VPC. By default, will allocate to EC2.
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
 *       * `PublicIp` &mdash; (`String`) IP address for use with your
 *         account.
 *       * `Domain` &mdash; (`String`)
 *       * `AllocationId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method assignPrivateIpAddresses(params, callback)
 *   Calls the AssignPrivateIpAddresses API operation.
 *   @param params [Object]
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`)
 *     * `PrivateIpAddresses` &mdash; (`Array<String>`)
 *     * `SecondaryPrivateIpAddressCount` &mdash; (`Integer`)
 *     * `AllowReassignment` &mdash; (`Boolean`)
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
 * @!method associateAddress(params, callback)
 *   Calls the AssociateAddress API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; (`String`) The instance to associate with
 *       the IP address.
 *     * `PublicIp` &mdash; (`String`) IP address that you are assigning
 *       to the instance.
 *     * `AllocationId` &mdash; (`String`) The allocation ID that AWS
 *       returned when you allocated the elastic IP address for use with
 *       Amazon VPC.
 *     * `NetworkInterfaceId` &mdash; (`String`)
 *     * `PrivateIpAddress` &mdash; (`String`)
 *     * `AllowReassociation` &mdash; (`Boolean`)
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
 *       * `AssociationId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method associateDhcpOptions(params, callback)
 *   Calls the AssociateDhcpOptions API operation.
 *   @param params [Object]
 *     * `DhcpOptionsId` &mdash; **required** &mdash; (`String`) The ID
 *       of the DHCP options to associate with the VPC. Specify "default"
 *       to associate the default DHCP options with the VPC.
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC to associate the DHCP options with.
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
 * @!method associateRouteTable(params, callback)
 *   Calls the AssociateRouteTable API operation.
 *   @param params [Object]
 *     * `SubnetId` &mdash; **required** &mdash; (`String`) The ID of the
 *       subnet.
 *     * `RouteTableId` &mdash; **required** &mdash; (`String`) The ID of
 *       the route table.
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
 *       * `AssociationId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method attachInternetGateway(params, callback)
 *   Calls the AttachInternetGateway API operation.
 *   @param params [Object]
 *     * `InternetGatewayId` &mdash; **required** &mdash; (`String`) The
 *       ID of the Internet gateway to attach.
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC.
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
 * @!method attachNetworkInterface(params, callback)
 *   Calls the AttachNetworkInterface API operation.
 *   @param params [Object]
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`)
 *     * `InstanceId` &mdash; **required** &mdash; (`String`)
 *     * `DeviceIndex` &mdash; **required** &mdash; (`Integer`)
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
 *       * `AttachmentId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method attachVolume(params, callback)
 *   Calls the AttachVolume API operation.
 *   @param params [Object]
 *     * `VolumeId` &mdash; **required** &mdash; (`String`) The ID of the
 *       Amazon EBS volume. The volume and instance must be within the
 *       same Availability Zone and the instance must be running.
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the instance to which the volume attaches. The volume and
 *       instance must be within the same Availability Zone and the
 *       instance must be running.
 *     * `Device` &mdash; **required** &mdash; (`String`) Specifies how
 *       the device is exposed to the instance (e.g., /dev/sdh).
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
 *       * `VolumeId` &mdash; (`String`)
 *       * `InstanceId` &mdash; (`String`)
 *       * `Device` &mdash; (`String`) How the device is exposed to the
 *         instance (e.g., /dev/sdh).
 *       * `State` &mdash; (`String`)
 *       * `AttachTime` &mdash; (`Date`) Timestamp when this attachment
 *         initiated.
 *       * `DeleteOnTermination` &mdash; (`Boolean`) ` Whether this volume
 *         will be deleted or not when the associated instance is
 *         terminated.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method attachVpnGateway(params, callback)
 *   Calls the AttachVpnGateway API operation.
 *   @param params [Object]
 *     * `VpnGatewayId` &mdash; **required** &mdash; (`String`) The ID of
 *       the VPN gateway to attach to the VPC.
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC to attach to the VPN gateway.
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
 *       * `VpcAttachement` &mdash; (`Object`)
 *         * `VpcId` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method authorizeSecurityGroupEgress(params, callback)
 *   Calls the AuthorizeSecurityGroupEgress API operation.
 *   @param params [Object]
 *     * `GroupId` &mdash; **required** &mdash; (`String`) ID of the VPC
 *       security group to modify.
 *     * `SourceSecurityGroupName` &mdash; (`String`) Deprecated.
 *     * `SourceSecurityGroupOwnerId` &mdash; (`String`) Deprecated.
 *     * `IpProtocol` &mdash; (`String`) Deprecated.
 *     * `FromPort` &mdash; (`Integer`) Deprecated.
 *     * `ToPort` &mdash; (`Integer`) Deprecated.
 *     * `CidrIp` &mdash; (`String`) Deprecated.
 *     * `IpPermissions` &mdash; (`Array<Object>`) List of IP permissions
 *       to authorize on the specified security group. Specifying
 *       permissions through IP permissions is the preferred way of
 *       authorizing permissions since it offers more flexibility and
 *       control.
 *       * `IpProtocol` &mdash; (`String`) The IP protocol of this
 *         permission. Valid protocol values: tcp, udp, icmp
 *       * `FromPort` &mdash; (`Integer`) Start of port range for the TCP
 *         and UDP protocols, or an ICMP type number. An ICMP type number
 *         of -1 indicates a wildcard (i.e., any ICMP type number).
 *       * `ToPort` &mdash; (`Integer`) End of port range for the TCP and
 *         UDP protocols, or an ICMP code. An ICMP code of -1 indicates a
 *         wildcard (i.e., any ICMP code).
 *       * `UserIdGroupPairs` &mdash; (`Array<Object>`) The list of AWS
 *         user IDs and groups included in this permission.
 *         * `UserId` &mdash; (`String`) The AWS user ID of an account.
 *         * `GroupName` &mdash; (`String`) Name of the security group in
 *           the specified AWS account. Cannot be used when specifying a
 *           CIDR IP address range.
 *         * `GroupId` &mdash; (`String`) ID of the security group in the
 *           specified AWS account. Cannot be used when specifying a CIDR
 *           IP address range.
 *       * `IpRanges` &mdash; (`Array<Object>`) The list of CIDR IP
 *         ranges included in this permission.
 *         * `CidrIp` &mdash; (`String`) The list of CIDR IP ranges.
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
 * @!method authorizeSecurityGroupIngress(params, callback)
 *   Calls the AuthorizeSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * `GroupName` &mdash; (`String`) Name of the standard (EC2)
 *       security group to modify. The group must belong to your account.
 *       Can be used instead of GroupID for standard (EC2) security
 *       groups.
 *     * `GroupId` &mdash; (`String`) ID of the standard (EC2) or VPC
 *       security group to modify. The group must belong to your account.
 *       Required for VPC security groups; can be used instead of
 *       GroupName for standard (EC2) security groups.
 *     * `SourceSecurityGroupName` &mdash; (`String`) Deprecated
 *     * `SourceSecurityGroupOwnerId` &mdash; (`String`) Deprecated
 *     * `IpProtocol` &mdash; (`String`) Deprecated
 *     * `FromPort` &mdash; (`Integer`) Deprecated
 *     * `ToPort` &mdash; (`Integer`) Deprecated
 *     * `CidrIp` &mdash; (`String`) Deprecated
 *     * `IpPermissions` &mdash; (`Array<Object>`) List of IP permissions
 *       to authorize on the specified security group. Specifying
 *       permissions through IP permissions is the preferred way of
 *       authorizing permissions since it offers more flexibility and
 *       control.
 *       * `IpProtocol` &mdash; (`String`) The IP protocol of this
 *         permission. Valid protocol values: tcp, udp, icmp
 *       * `FromPort` &mdash; (`Integer`) Start of port range for the TCP
 *         and UDP protocols, or an ICMP type number. An ICMP type number
 *         of -1 indicates a wildcard (i.e., any ICMP type number).
 *       * `ToPort` &mdash; (`Integer`) End of port range for the TCP and
 *         UDP protocols, or an ICMP code. An ICMP code of -1 indicates a
 *         wildcard (i.e., any ICMP code).
 *       * `UserIdGroupPairs` &mdash; (`Array<Object>`) The list of AWS
 *         user IDs and groups included in this permission.
 *         * `UserId` &mdash; (`String`) The AWS user ID of an account.
 *         * `GroupName` &mdash; (`String`) Name of the security group in
 *           the specified AWS account. Cannot be used when specifying a
 *           CIDR IP address range.
 *         * `GroupId` &mdash; (`String`) ID of the security group in the
 *           specified AWS account. Cannot be used when specifying a CIDR
 *           IP address range.
 *       * `IpRanges` &mdash; (`Array<Object>`) The list of CIDR IP
 *         ranges included in this permission.
 *         * `CidrIp` &mdash; (`String`) The list of CIDR IP ranges.
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
 * @!method bundleInstance(params, callback)
 *   Calls the BundleInstance API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the instance to bundle.
 *     * `Storage` &mdash; **required** &mdash; (`Object`)
 *       * `S3` &mdash; (`Object`) The details of S3 storage for bundling
 *         a Windows instance.
 *         * `Bucket` &mdash; (`String`) The bucket in which to store the
 *           AMI. You can specify a bucket that you already own or a new
 *           bucket that Amazon EC2 creates on your behalf. If you
 *           specify a bucket that belongs to someone else, Amazon EC2
 *           returns an error.
 *         * `Prefix` &mdash; (`String`) The prefix to use when storing
 *           the AMI in S3.
 *         * `AWSAccessKeyId` &mdash; (`String`) The Access Key ID of the
 *           owner of the Amazon S3 bucket.
 *         * `UploadPolicy` &mdash; (`String`) A Base64-encoded Amazon S3
 *           upload policy that gives Amazon EC2 permission to upload
 *           items into Amazon S3 on the user's behalf.
 *         * `UploadPolicySignature` &mdash; (`String`) The signature of
 *           the Base64 encoded JSON document.
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
 *       * `BundleTask` &mdash; (`Object`)
 *         * `InstanceId` &mdash; (`String`) Instance associated with this
 *           bundle task.
 *         * `BundleId` &mdash; (`String`) Unique identifier for this task.
 *         * `State` &mdash; (`String`) The state of this task.
 *         * `StartTime` &mdash; (`Date`) The time this task started.
 *         * `UpdateTime` &mdash; (`Date`) The time of the most recent
 *           update for the task.
 *         * `Storage` &mdash; (`Object`) Amazon S3 storage locations.
 *           * `S3` &mdash; (`Object`) The details of S3 storage for
 *             bundling a Windows instance.
 *             * `Bucket` &mdash; (`String`) The bucket in which to store
 *               the AMI. You can specify a bucket that you already own or
 *               a new bucket that Amazon EC2 creates on your behalf. If
 *               you specify a bucket that belongs to someone else, Amazon
 *               EC2 returns an error.
 *             * `Prefix` &mdash; (`String`) The prefix to use when storing
 *               the AMI in S3.
 *             * `AWSAccessKeyId` &mdash; (`String`) The Access Key ID of
 *               the owner of the Amazon S3 bucket.
 *             * `UploadPolicy` &mdash; (`String`) A Base64-encoded Amazon
 *               S3 upload policy that gives Amazon EC2 permission to
 *               upload items into Amazon S3 on the user's behalf.
 *             * `UploadPolicySignature` &mdash; (`String`) The signature
 *               of the Base64 encoded JSON document.
 *         * `Progress` &mdash; (`String`) The level of task completion, in
 *           percent (e.g., 20%).
 *         * `BundleTaskError` &mdash; (`Object`) If the task fails, a
 *           description of the error.
 *           * `Code` &mdash; (`String`) Error code.
 *           * `Message` &mdash; (`String`) Error message.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method cancelBundleTask(params, callback)
 *   Calls the CancelBundleTask API operation.
 *   @param params [Object]
 *     * `BundleId` &mdash; **required** &mdash; (`String`) The ID of the
 *       bundle task to cancel.
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
 *       * `BundleTask` &mdash; (`Object`) The canceled bundle task.
 *         * `InstanceId` &mdash; (`String`) Instance associated with this
 *           bundle task.
 *         * `BundleId` &mdash; (`String`) Unique identifier for this task.
 *         * `State` &mdash; (`String`) The state of this task.
 *         * `StartTime` &mdash; (`Date`) The time this task started.
 *         * `UpdateTime` &mdash; (`Date`) The time of the most recent
 *           update for the task.
 *         * `Storage` &mdash; (`Object`) Amazon S3 storage locations.
 *           * `S3` &mdash; (`Object`) The details of S3 storage for
 *             bundling a Windows instance.
 *             * `Bucket` &mdash; (`String`) The bucket in which to store
 *               the AMI. You can specify a bucket that you already own or
 *               a new bucket that Amazon EC2 creates on your behalf. If
 *               you specify a bucket that belongs to someone else, Amazon
 *               EC2 returns an error.
 *             * `Prefix` &mdash; (`String`) The prefix to use when storing
 *               the AMI in S3.
 *             * `AWSAccessKeyId` &mdash; (`String`) The Access Key ID of
 *               the owner of the Amazon S3 bucket.
 *             * `UploadPolicy` &mdash; (`String`) A Base64-encoded Amazon
 *               S3 upload policy that gives Amazon EC2 permission to
 *               upload items into Amazon S3 on the user's behalf.
 *             * `UploadPolicySignature` &mdash; (`String`) The signature
 *               of the Base64 encoded JSON document.
 *         * `Progress` &mdash; (`String`) The level of task completion, in
 *           percent (e.g., 20%).
 *         * `BundleTaskError` &mdash; (`Object`) If the task fails, a
 *           description of the error.
 *           * `Code` &mdash; (`String`) Error code.
 *           * `Message` &mdash; (`String`) Error message.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method cancelConversionTask(params, callback)
 *   Calls the CancelConversionTask API operation.
 *   @param params [Object]
 *     * `ConversionTaskId` &mdash; **required** &mdash; (`String`)
 *     * `ReasonMessage` &mdash; (`String`)
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
 * @!method cancelExportTask(params, callback)
 *   Calls the CancelExportTask API operation.
 *   @param params [Object]
 *     * `ExportTaskId` &mdash; **required** &mdash; (`String`)
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
 * @!method cancelReservedInstancesListing(params, callback)
 *   Calls the CancelReservedInstancesListing API operation.
 *   @param params [Object]
 *     * `ReservedInstancesListingId` &mdash; **required** &mdash;
 *       (`String`)
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
 *       * `ReservedInstancesListings` &mdash; (`Array<Object>`)
 *         * `ReservedInstancesListingId` &mdash; (`String`)
 *         * `ReservedInstancesId` &mdash; (`String`)
 *         * `CreateDate` &mdash; (`Date`)
 *         * `UpdateDate` &mdash; (`Date`)
 *         * `Status` &mdash; (`String`)
 *         * `StatusMessage` &mdash; (`String`)
 *         * `InstanceCounts` &mdash; (`Array<Object>`)
 *           * `State` &mdash; (`String`)
 *           * `InstanceCount` &mdash; (`Integer`)
 *         * `PriceSchedules` &mdash; (`Array<Object>`)
 *           * `Term` &mdash; (`Integer`)
 *           * `Price` &mdash; (`Float`)
 *           * `CurrencyCode` &mdash; (`String`)
 *           * `Active` &mdash; (`Boolean`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `ClientToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method cancelSpotInstanceRequests(params, callback)
 *   Calls the CancelSpotInstanceRequests API operation.
 *   @param params [Object]
 *     * `SpotInstanceRequestIds` &mdash; **required** &mdash;
 *       (`Array<String>`) Specifies the ID of the Spot Instance request.
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
 *       * `CancelledSpotInstanceRequests` &mdash; (`Array<Object>`)
 *         * `SpotInstanceRequestId` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method confirmProductInstance(params, callback)
 *   Calls the ConfirmProductInstance API operation.
 *   @param params [Object]
 *     * `ProductCode` &mdash; **required** &mdash; (`String`) The
 *       product code to confirm.
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the instance to confirm.
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
 *       * `OwnerId` &mdash; (`String`) The instance owner's account ID.
 *         Only present if the product code is attached to the instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method copyImage(params, callback)
 *   Calls the CopyImage API operation.
 *   @param params [Object]
 *     * `SourceRegion` &mdash; **required** &mdash; (`String`)
 *     * `SourceImageId` &mdash; **required** &mdash; (`String`)
 *     * `Name` &mdash; **required** &mdash; (`String`)
 *     * `Description` &mdash; (`String`)
 *     * `ClientToken` &mdash; (`String`)
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
 *       * `ImageId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method copySnapshot(params, callback)
 *   Calls the CopySnapshot API operation.
 *   @param params [Object]
 *     * `SourceRegion` &mdash; **required** &mdash; (`String`)
 *     * `SourceSnapshotId` &mdash; **required** &mdash; (`String`)
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
 *       * `SnapshotId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCustomerGateway(params, callback)
 *   Calls the CreateCustomerGateway API operation.
 *   @param params [Object]
 *     * `Type` &mdash; **required** &mdash; (`String`) The type of VPN
 *       connection this customer gateway supports.
 *     * `PublicIp` &mdash; **required** &mdash; (`String`) The
 *       Internet-routable IP address for the customer gateway's outside
 *       interface. The address must be static
 *     * `BgpAsn` &mdash; **required** &mdash; (`Integer`) The customer
 *       gateway's Border Gateway Protocol (BGP) Autonomous System Number
 *       (ASN).
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
 *       * `CustomerGateway` &mdash; (`Object`) Information about the
 *         customer gateway.
 *         * `CustomerGatewayId` &mdash; (`String`) Specifies the ID of the
 *           customer gateway.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           customer gateway. Valid values are pending, available,
 *           deleting, and deleted.
 *         * `Type` &mdash; (`String`) Specifies the type of VPN connection
 *           the customer gateway supports.
 *         * `IpAddress` &mdash; (`String`) Contains the Internet-routable
 *           IP address of the customer gateway's outside interface.
 *         * `BgpAsn` &mdash; (`String`) Specifies the customer gateway's
 *           Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           CustomerGateway.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDhcpOptions(params, callback)
 *   Calls the CreateDhcpOptions API operation.
 *   @param params [Object]
 *     * `DhcpConfigurations` &mdash; **required** &mdash;
 *       (`Array<Object>`) A set of one or more DHCP configurations.
 *       * `Key` &mdash; (`String`) Contains the name of a DHCP option.
 *       * `Values` &mdash; (`Array<String>`) Contains a set of values
 *         for a DHCP option.
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
 *       * `DhcpOptions` &mdash; (`Object`) A set of one or more DHCP
 *         options.
 *         * `DhcpOptionsId` &mdash; (`String`) Specifies the ID of the set
 *           of DHCP options.
 *         * `DhcpConfigurations` &mdash; (`Array<Object>`) Contains
 *           information about the set of DHCP options.
 *           * `Key` &mdash; (`String`) Contains the name of a DHCP option.
 *           * `Values` &mdash; (`Array<String>`) Contains a set of values
 *             for a DHCP option.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           DhcpOptions.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createImage(params, callback)
 *   Calls the CreateImage API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the instance from which to create the new image.
 *     * `Name` &mdash; **required** &mdash; (`String`) The name for the
 *       new AMI being created.
 *     * `Description` &mdash; (`String`) The description for the new AMI
 *       being created.
 *     * `NoReboot` &mdash; (`Boolean`) By default this property is set
 *       to false, which means Amazon EC2 attempts to cleanly shut down
 *       the instance before image creation and reboots the instance
 *       afterwards. When set to true, Amazon EC2 will not shut down the
 *       instance before creating the image. When this option is used,
 *       file system integrity on the created image cannot be guaranteed.
 *     * `BlockDeviceMappings` &mdash; (`Array<Object>`)
 *       * `VirtualName` &mdash; (`String`) Specifies the virtual device
 *         name.
 *       * `DeviceName` &mdash; (`String`) Specifies the device name
 *         (e.g., /dev/sdh).
 *       * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * `SnapshotId` &mdash; (`String`) The ID of the snapshot from
 *           which the volume will be created.
 *         * `VolumeSize` &mdash; (`Integer`) The size of the volume, in
 *           gigabytes.
 *         * `DeleteOnTermination` &mdash; (`Boolean`) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * `VolumeType` &mdash; (`String`)
 *         * `Iops` &mdash; (`Integer`)
 *       * `NoDevice` &mdash; (`String`) Specifies the device name to
 *         suppress during instance launch.
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
 *       * `ImageId` &mdash; (`String`) The ID of the new AMI.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInstanceExportTask(params, callback)
 *   Calls the CreateInstanceExportTask API operation.
 *   @param params [Object]
 *     * `Description` &mdash; (`String`)
 *     * `InstanceId` &mdash; **required** &mdash; (`String`)
 *     * `TargetEnvironment` &mdash; (`String`)
 *     * `ExportToS3Task` &mdash; (`Object`)
 *       * `DiskImageFormat` &mdash; (`String`)
 *       * `ContainerFormat` &mdash; (`String`)
 *       * `S3Bucket` &mdash; (`String`)
 *       * `S3Prefix` &mdash; (`String`)
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
 *       * `ExportTask` &mdash; (`Object`)
 *         * `ExportTaskId` &mdash; (`String`)
 *         * `Description` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *         * `StatusMessage` &mdash; (`String`)
 *         * `InstanceExportDetails` &mdash; (`Object`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `TargetEnvironment` &mdash; (`String`)
 *         * `ExportToS3Task` &mdash; (`Object`)
 *           * `DiskImageFormat` &mdash; (`String`)
 *           * `ContainerFormat` &mdash; (`String`)
 *           * `S3Bucket` &mdash; (`String`)
 *           * `S3Key` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInternetGateway(params, callback)
 *   Calls the CreateInternetGateway API operation.
 *   @param params [Object]
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
 *       * `InternetGateway` &mdash; (`Object`)
 *         * `InternetGatewayId` &mdash; (`String`)
 *         * `Attachments` &mdash; (`Array<Object>`)
 *           * `VpcId` &mdash; (`String`)
 *           * `State` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createKeyPair(params, callback)
 *   Calls the CreateKeyPair API operation.
 *   @param params [Object]
 *     * `KeyName` &mdash; **required** &mdash; (`String`) The unique
 *       name for the new key pair.
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
 *       * `KeyPair` &mdash; (`Object`) The newly created EC2 key pair.
 *         * `KeyName` &mdash; (`String`) The name of the key pair.
 *         * `KeyFingerprint` &mdash; (`String`) The SHA-1 digest of the
 *           DER encoded private key.
 *         * `KeyMaterial` &mdash; (`String`) The unencrypted PEM encoded
 *           RSA private key.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createNetworkAcl(params, callback)
 *   Calls the CreateNetworkAcl API operation.
 *   @param params [Object]
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC where the network ACL will be created.
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
 *       * `NetworkAcl` &mdash; (`Object`)
 *         * `NetworkAclId` &mdash; (`String`)
 *         * `VpcId` &mdash; (`String`)
 *         * `IsDefault` &mdash; (`Boolean`)
 *         * `Entries` &mdash; (`Array<Object>`)
 *           * `RuleNumber` &mdash; (`Integer`)
 *           * `Protocol` &mdash; (`String`)
 *           * `RuleAction` &mdash; (`String`)
 *           * `Egress` &mdash; (`Boolean`)
 *           * `CidrBlock` &mdash; (`String`)
 *           * `IcmpTypeCode` &mdash; (`Object`)
 *             * `Type` &mdash; (`Integer`) For the ICMP protocol, the ICMP
 *               type. A value of -1 is a wildcard meaning all types.
 *               Required if specifying icmp for the protocol.
 *             * `Code` &mdash; (`Integer`) For the ICMP protocol, the ICMP
 *               code. A value of -1 is a wildcard meaning all codes.
 *               Required if specifying icmp for the protocol.
 *           * `PortRange` &mdash; (`Object`)
 *             * `From` &mdash; (`Integer`) The first port in the range.
 *               Required if specifying tcp or udp for the protocol.
 *             * `To` &mdash; (`Integer`) The last port in the range.
 *               Required if specifying tcp or udp for the protocol.
 *         * `Associations` &mdash; (`Array<Object>`)
 *           * `NetworkAclAssociationId` &mdash; (`String`)
 *           * `NetworkAclId` &mdash; (`String`)
 *           * `SubnetId` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createNetworkAclEntry(params, callback)
 *   Calls the CreateNetworkAclEntry API operation.
 *   @param params [Object]
 *     * `NetworkAclId` &mdash; **required** &mdash; (`String`) ID of the
 *       ACL where the entry will be created.
 *     * `RuleNumber` &mdash; **required** &mdash; (`Integer`) Rule
 *       number to assign to the entry (e.g., 100). ACL entries are
 *       processed in ascending order by rule number.
 *     * `Protocol` &mdash; **required** &mdash; (`String`) IP protocol
 *       the rule applies to. Valid Values: tcp, udp, icmp or an IP
 *       protocol number.
 *     * `RuleAction` &mdash; **required** &mdash; (`String`) Whether to
 *       allow or deny traffic that matches the rule.
 *     * `Egress` &mdash; **required** &mdash; (`Boolean`) Whether this
 *       rule applies to egress traffic from the subnet (true) or ingress
 *       traffic to the subnet (false).
 *     * `CidrBlock` &mdash; **required** &mdash; (`String`) The CIDR
 *       range to allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
 *     * `IcmpTypeCode` &mdash; (`Object`) ICMP values.
 *       * `Type` &mdash; (`Integer`) For the ICMP protocol, the ICMP
 *         type. A value of -1 is a wildcard meaning all types. Required
 *         if specifying icmp for the protocol.
 *       * `Code` &mdash; (`Integer`) For the ICMP protocol, the ICMP
 *         code. A value of -1 is a wildcard meaning all codes. Required
 *         if specifying icmp for the protocol.
 *     * `PortRange` &mdash; (`Object`) Port ranges.
 *       * `From` &mdash; (`Integer`) The first port in the range.
 *         Required if specifying tcp or udp for the protocol.
 *       * `To` &mdash; (`Integer`) The last port in the range. Required
 *         if specifying tcp or udp for the protocol.
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
 * @!method createNetworkInterface(params, callback)
 *   Calls the CreateNetworkInterface API operation.
 *   @param params [Object]
 *     * `SubnetId` &mdash; **required** &mdash; (`String`)
 *     * `Description` &mdash; (`String`)
 *     * `PrivateIpAddress` &mdash; (`String`)
 *     * `Groups` &mdash; (`Array<String>`)
 *     * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *       * `PrivateIpAddress` &mdash; **required** &mdash; (`String`)
 *       * `Primary` &mdash; (`Boolean`)
 *     * `SecondaryPrivateIpAddressCount` &mdash; (`Integer`)
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
 *       * `NetworkInterface` &mdash; (`Object`)
 *         * `NetworkInterfaceId` &mdash; (`String`)
 *         * `SubnetId` &mdash; (`String`)
 *         * `VpcId` &mdash; (`String`)
 *         * `AvailabilityZone` &mdash; (`String`)
 *         * `Description` &mdash; (`String`)
 *         * `OwnerId` &mdash; (`String`)
 *         * `RequesterId` &mdash; (`String`)
 *         * `RequesterManaged` &mdash; (`Boolean`)
 *         * `Status` &mdash; (`String`)
 *         * `MacAddress` &mdash; (`String`)
 *         * `PrivateIpAddress` &mdash; (`String`)
 *         * `PrivateDnsName` &mdash; (`String`)
 *         * `SourceDestCheck` &mdash; (`Boolean`)
 *         * `Groups` &mdash; (`Array<Object>`)
 *           * `GroupName` &mdash; (`String`)
 *           * `GroupId` &mdash; (`String`)
 *         * `Attachment` &mdash; (`Object`)
 *           * `AttachmentId` &mdash; (`String`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `InstanceOwnerId` &mdash; (`String`)
 *           * `DeviceIndex` &mdash; (`Integer`)
 *           * `Status` &mdash; (`String`)
 *           * `AttachTime` &mdash; (`Date`)
 *           * `DeleteOnTermination` &mdash; (`Boolean`)
 *         * `Association` &mdash; (`Object`)
 *           * `PublicIp` &mdash; (`String`)
 *           * `IpOwnerId` &mdash; (`String`)
 *           * `AllocationId` &mdash; (`String`)
 *           * `AssociationId` &mdash; (`String`)
 *         * `TagSet` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *           * `PrivateIpAddress` &mdash; (`String`)
 *           * `PrivateDnsName` &mdash; (`String`)
 *           * `Primary` &mdash; (`Boolean`)
 *           * `Association` &mdash; (`Object`)
 *             * `PublicIp` &mdash; (`String`)
 *             * `IpOwnerId` &mdash; (`String`)
 *             * `AllocationId` &mdash; (`String`)
 *             * `AssociationId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPlacementGroup(params, callback)
 *   Calls the CreatePlacementGroup API operation.
 *   @param params [Object]
 *     * `GroupName` &mdash; **required** &mdash; (`String`) The name of
 *       the PlacementGroup.
 *     * `Strategy` &mdash; **required** &mdash; (`String`) The
 *       PlacementGroup strategy.
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
 * @!method createReservedInstancesListing(params, callback)
 *   Calls the CreateReservedInstancesListing API operation.
 *   @param params [Object]
 *     * `ReservedInstancesId` &mdash; **required** &mdash; (`String`)
 *     * `InstanceCount` &mdash; **required** &mdash; (`Integer`)
 *     * `PriceSchedules` &mdash; **required** &mdash; (`Array<Object>`)
 *       * `Term` &mdash; (`Integer`)
 *       * `Price` &mdash; (`Float`)
 *       * `CurrencyCode` &mdash; (`String`)
 *     * `ClientToken` &mdash; **required** &mdash; (`String`)
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
 *       * `ReservedInstancesListings` &mdash; (`Array<Object>`)
 *         * `ReservedInstancesListingId` &mdash; (`String`)
 *         * `ReservedInstancesId` &mdash; (`String`)
 *         * `CreateDate` &mdash; (`Date`)
 *         * `UpdateDate` &mdash; (`Date`)
 *         * `Status` &mdash; (`String`)
 *         * `StatusMessage` &mdash; (`String`)
 *         * `InstanceCounts` &mdash; (`Array<Object>`)
 *           * `State` &mdash; (`String`)
 *           * `InstanceCount` &mdash; (`Integer`)
 *         * `PriceSchedules` &mdash; (`Array<Object>`)
 *           * `Term` &mdash; (`Integer`)
 *           * `Price` &mdash; (`Float`)
 *           * `CurrencyCode` &mdash; (`String`)
 *           * `Active` &mdash; (`Boolean`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `ClientToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createRoute(params, callback)
 *   Calls the CreateRoute API operation.
 *   @param params [Object]
 *     * `RouteTableId` &mdash; **required** &mdash; (`String`) The ID of
 *       the route table where the route will be added.
 *     * `DestinationCidrBlock` &mdash; **required** &mdash; (`String`)
 *       The CIDR address block used for the destination match. For
 *       example: 0.0.0.0/0. Routing decisions are based on the most
 *       specific match.
 *     * `GatewayId` &mdash; (`String`) The ID of a VPN or Internet
 *       gateway attached to your VPC. You must provide either GatewayId
 *       or InstanceId, but not both.
 *     * `InstanceId` &mdash; (`String`) The ID of a NAT instance in your
 *       VPC. You must provide either GatewayId or InstanceId, but not
 *       both.
 *     * `NetworkInterfaceId` &mdash; (`String`)
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
 * @!method createRouteTable(params, callback)
 *   Calls the CreateRouteTable API operation.
 *   @param params [Object]
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC where the route table will be created.
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
 *       * `RouteTable` &mdash; (`Object`)
 *         * `RouteTableId` &mdash; (`String`)
 *         * `VpcId` &mdash; (`String`)
 *         * `Routes` &mdash; (`Array<Object>`)
 *           * `DestinationCidrBlock` &mdash; (`String`)
 *           * `GatewayId` &mdash; (`String`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `InstanceOwnerId` &mdash; (`String`)
 *           * `NetworkInterfaceId` &mdash; (`String`)
 *           * `State` &mdash; (`String`)
 *         * `Associations` &mdash; (`Array<Object>`)
 *           * `RouteTableAssociationId` &mdash; (`String`)
 *           * `RouteTableId` &mdash; (`String`)
 *           * `SubnetId` &mdash; (`String`)
 *           * `Main` &mdash; (`Boolean`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `PropagatingVgws` &mdash; (`Array<Object>`)
 *           * `GatewayId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSecurityGroup(params, callback)
 *   Calls the CreateSecurityGroup API operation.
 *   @param params [Object]
 *     * `GroupName` &mdash; **required** &mdash; (`String`) Name of the
 *       security group.
 *     * `Description` &mdash; **required** &mdash; (`String`)
 *       Description of the group. This is informational only.
 *     * `VpcId` &mdash; (`String`) ID of the VPC.
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
 *       * `GroupId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSnapshot(params, callback)
 *   Calls the CreateSnapshot API operation.
 *   @param params [Object]
 *     * `VolumeId` &mdash; **required** &mdash; (`String`) The ID of the
 *       volume from which to create the snapshot.
 *     * `Description` &mdash; (`String`) The description for the new
 *       snapshot.
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
 *       * `SnapshotId` &mdash; (`String`) The unique ID of this snapshot.
 *       * `VolumeId` &mdash; (`String`) The ID of the volume from which
 *         this snapshot was created.
 *       * `State` &mdash; (`String`) Snapshot state (e.g., pending,
 *         completed, or error).
 *       * `StartTime` &mdash; (`Date`) Time stamp when the snapshot was
 *         initiated.
 *       * `Progress` &mdash; (`String`) The progress of the snapshot, in
 *         percentage.
 *       * `OwnerId` &mdash; (`String`) AWS Access Key ID of the user who
 *         owns the snapshot.
 *       * `Description` &mdash; (`String`) Description of the snapshot.
 *       * `VolumeSize` &mdash; (`Integer`) The size of the volume, in
 *         gigabytes.
 *       * `OwnerAlias` &mdash; (`String`) The AWS account alias (e.g.,
 *         "amazon", "redhat", "self", etc.) or AWS account ID that owns
 *         the AMI.
 *       * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *         Snapshot.
 *         * `Key` &mdash; (`String`) The tag's key.
 *         * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSpotDatafeedSubscription(params, callback)
 *   Calls the CreateSpotDatafeedSubscription API operation.
 *   @param params [Object]
 *     * `Bucket` &mdash; **required** &mdash; (`String`) The Amazon S3
 *       bucket in which to store the Spot Instance datafeed.
 *     * `Prefix` &mdash; (`String`) The prefix that is prepended to
 *       datafeed files.
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
 *       * `SpotDatafeedSubscription` &mdash; (`Object`)
 *         * `OwnerId` &mdash; (`String`) Specifies the AWS account ID of
 *           the account.
 *         * `Bucket` &mdash; (`String`) Specifies the Amazon S3 bucket
 *           where the Spot Instance data feed is located.
 *         * `Prefix` &mdash; (`String`) Contains the prefix that is
 *           prepended to data feed files.
 *         * `State` &mdash; (`String`) Specifies the state of the Spot
 *           Instance request.
 *         * `Fault` &mdash; (`Object`) Specifies a fault code for the Spot
 *           Instance request, if present.
 *           * `Code` &mdash; (`String`)
 *           * `Message` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSubnet(params, callback)
 *   Calls the CreateSubnet API operation.
 *   @param params [Object]
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC to create the subnet in.
 *     * `CidrBlock` &mdash; **required** &mdash; (`String`) The CIDR
 *       block the subnet is to cover.
 *     * `AvailabilityZone` &mdash; (`String`) The Availability Zone to
 *       create the subnet in.
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
 *       * `Subnet` &mdash; (`Object`)
 *         * `SubnetId` &mdash; (`String`) Specifies the ID of the subnet.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           subnet. The state of the subnet may be either pending or
 *           available.
 *         * `VpcId` &mdash; (`String`) Contains the ID of the VPC the
 *           subnet is in.
 *         * `CidrBlock` &mdash; (`String`) Specifies the CIDR block
 *           assigned to the subnet.
 *         * `AvailableIpAddressCount` &mdash; (`Integer`) Specifies the
 *           number of unused IP addresses in the subnet. The IP addresses
 *           for any stopped instances are considered unavailable.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the
 *           Availability Zone the subnet is in.
 *         * `DefaultForAz` &mdash; (`Boolean`)
 *         * `MapPublicIpOnLaunch` &mdash; (`Boolean`)
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           Subnet.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createTags(params, callback)
 *   Calls the CreateTags API operation.
 *   @param params [Object]
 *     * `Resources` &mdash; **required** &mdash; (`Array<String>`) One
 *       or more IDs of resources to tag. This could be the ID of an AMI,
 *       an instance, an EBS volume, or snapshot, etc.
 *     * `Tags` &mdash; **required** &mdash; (`Array<Object>`) The tags
 *       to add or overwrite for the specified resources. Each tag item
 *       consists of a key-value pair.
 *       * `Key` &mdash; (`String`) The tag's key.
 *       * `Value` &mdash; (`String`) The tag's value.
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
 * @!method createVolume(params, callback)
 *   Calls the CreateVolume API operation.
 *   @param params [Object]
 *     * `Size` &mdash; (`Integer`) The size of the volume, in gigabytes.
 *       Required if you are not creating a volume from a snapshot.
 *     * `SnapshotId` &mdash; (`String`) The ID of the snapshot from
 *       which to create the new volume.
 *     * `AvailabilityZone` &mdash; **required** &mdash; (`String`) The
 *       Availability Zone in which to create the new volume.
 *     * `VolumeType` &mdash; (`String`)
 *     * `Iops` &mdash; (`Integer`)
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
 *       * `VolumeId` &mdash; (`String`) The unique ID of this volume.
 *       * `Size` &mdash; (`Integer`) The size of this volume, in
 *         gigabytes.
 *       * `SnapshotId` &mdash; (`String`) Optional snapshot from which
 *         this volume was created.
 *       * `AvailabilityZone` &mdash; (`String`) Availability zone in which
 *         this volume was created.
 *       * `State` &mdash; (`String`) State of this volume (e.g., creating,
 *         available).
 *       * `CreateTime` &mdash; (`Date`) Timestamp when volume creation was
 *         initiated.
 *       * `Attachments` &mdash; (`Array<Object>`) Information on what this
 *         volume is attached to.
 *         * `VolumeId` &mdash; (`String`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `Device` &mdash; (`String`) How the device is exposed to the
 *           instance (e.g., /dev/sdh).
 *         * `State` &mdash; (`String`)
 *         * `AttachTime` &mdash; (`Date`) Timestamp when this attachment
 *           initiated.
 *         * `DeleteOnTermination` &mdash; (`Boolean`) ` Whether this
 *           volume will be deleted or not when the associated instance is
 *           terminated.
 *       * `Tags` &mdash; (`Array<Object>`) A list of tags for the Volume.
 *         * `Key` &mdash; (`String`) The tag's key.
 *         * `Value` &mdash; (`String`) The tag's value.
 *       * `VolumeType` &mdash; (`String`)
 *       * `Iops` &mdash; (`Integer`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createVpc(params, callback)
 *   Calls the CreateVpc API operation.
 *   @param params [Object]
 *     * `CidrBlock` &mdash; **required** &mdash; (`String`) A valid CIDR
 *       block.
 *     * `InstanceTenancy` &mdash; (`String`) The allowed tenancy of
 *       instances launched into the VPC. A value of default means
 *       instances can be launched with any tenancy; a value of dedicated
 *       means instances must be launched with tenancy as dedicated.
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
 *       * `Vpc` &mdash; (`Object`) Information about the VPC.
 *         * `VpcId` &mdash; (`String`) Specifies the ID of the VPC.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           VPC. The state of the subnet may be either pending or
 *           available.
 *         * `CidrBlock` &mdash; (`String`) Specifies the CIDR block the
 *           VPC covers.
 *         * `DhcpOptionsId` &mdash; (`String`) Specifies the ID of the set
 *           of DHCP options associated with the VPC. Contains a value of
 *           default if the default options are associated with the VPC.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the VPC.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `InstanceTenancy` &mdash; (`String`) The allowed tenancy of
 *           instances launched into the VPC.
 *         * `IsDefault` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createVpnConnection(params, callback)
 *   Calls the CreateVpnConnection API operation.
 *   @param params [Object]
 *     * `Type` &mdash; **required** &mdash; (`String`) The type of VPN
 *       connection.
 *     * `CustomerGatewayId` &mdash; **required** &mdash; (`String`) The
 *       ID of the customer gateway.
 *     * `VpnGatewayId` &mdash; **required** &mdash; (`String`) The ID of
 *       the VPN gateway.
 *     * `Options` &mdash; (`Object`)
 *       * `StaticRoutesOnly` &mdash; (`Boolean`)
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
 *       * `VpnConnection` &mdash; (`Object`)
 *         * `VpnConnectionId` &mdash; (`String`) Specifies the ID of the
 *           VPN gateway at the VPC end of the VPN connection.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           VPN connection. Valid values are pending, available, deleting,
 *           and deleted.
 *         * `CustomerGatewayConfiguration` &mdash; (`String`) Contains
 *           configuration information in the native XML format for the VPN
 *           connection's customer gateway. This element is always present
 *           in the CreateVpnConnection response; however, it's present in
 *           the DescribeVpnConnections response only if the VPN connection
 *           is in the pending or available state.
 *         * `Type` &mdash; (`String`) Specifies the type of VPN
 *           connection.
 *         * `CustomerGatewayId` &mdash; (`String`) Specifies ID of the
 *           customer gateway at the end of the VPN connection.
 *         * `VpnGatewayId` &mdash; (`String`) Specfies the ID of the VPN
 *           gateway at the VPC end of the VPN connection.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           VpnConnection.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `VgwTelemetry` &mdash; (`Array<Object>`)
 *           * `OutsideIpAddress` &mdash; (`String`)
 *           * `Status` &mdash; (`String`)
 *           * `LastStatusChange` &mdash; (`Date`)
 *           * `StatusMessage` &mdash; (`String`)
 *           * `AcceptedRouteCount` &mdash; (`Integer`)
 *         * `Options` &mdash; (`Object`)
 *           * `StaticRoutesOnly` &mdash; (`Boolean`)
 *         * `Routes` &mdash; (`Array<Object>`)
 *           * `DestinationCidrBlock` &mdash; (`String`)
 *           * `Source` &mdash; (`String`)
 *           * `State` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createVpnConnectionRoute(params, callback)
 *   Calls the CreateVpnConnectionRoute API operation.
 *   @param params [Object]
 *     * `VpnConnectionId` &mdash; **required** &mdash; (`String`)
 *     * `DestinationCidrBlock` &mdash; **required** &mdash; (`String`)
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
 * @!method createVpnGateway(params, callback)
 *   Calls the CreateVpnGateway API operation.
 *   @param params [Object]
 *     * `Type` &mdash; **required** &mdash; (`String`) The type of VPN
 *       connection this VPN gateway supports.
 *     * `AvailabilityZone` &mdash; (`String`) The Availability Zone in
 *       which to create the VPN gateway.
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
 *       * `VpnGateway` &mdash; (`Object`)
 *         * `VpnGatewayId` &mdash; (`String`) Specifies the ID of the VPN
 *           gateway.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           VPN gateway. Valid values are pending, available, deleting,
 *           and deleted.
 *         * `Type` &mdash; (`String`) Specifies the type of VPN connection
 *           the VPN gateway supports.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the
 *           Availability Zone where the VPN gateway was created.
 *         * `VpcAttachments` &mdash; (`Array<Object>`) Contains
 *           information about the VPCs attached to the VPN gateway.
 *           * `VpcId` &mdash; (`String`)
 *           * `State` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           VpnGateway.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deactivateLicense(params, callback)
 *   Calls the DeactivateLicense API operation.
 *   @param params [Object]
 *     * `LicenseId` &mdash; **required** &mdash; (`String`) Specifies
 *       the ID for the specific license to deactivate against.
 *     * `Capacity` &mdash; **required** &mdash; (`Integer`) Specifies
 *       the amount of capacity to deactivate against the license.
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
 * @!method deleteCustomerGateway(params, callback)
 *   Calls the DeleteCustomerGateway API operation.
 *   @param params [Object]
 *     * `CustomerGatewayId` &mdash; **required** &mdash; (`String`) The
 *       ID of the customer gateway to delete.
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
 * @!method deleteDhcpOptions(params, callback)
 *   Calls the DeleteDhcpOptions API operation.
 *   @param params [Object]
 *     * `DhcpOptionsId` &mdash; **required** &mdash; (`String`) The ID
 *       of the DHCP options set to delete.
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
 * @!method deleteInternetGateway(params, callback)
 *   Calls the DeleteInternetGateway API operation.
 *   @param params [Object]
 *     * `InternetGatewayId` &mdash; **required** &mdash; (`String`) The
 *       ID of the Internet gateway to be deleted.
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
 * @!method deleteKeyPair(params, callback)
 *   Calls the DeleteKeyPair API operation.
 *   @param params [Object]
 *     * `KeyName` &mdash; **required** &mdash; (`String`) The name of
 *       the Amazon EC2 key pair to delete.
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
 * @!method deleteNetworkAcl(params, callback)
 *   Calls the DeleteNetworkAcl API operation.
 *   @param params [Object]
 *     * `NetworkAclId` &mdash; **required** &mdash; (`String`) The ID of
 *       the network ACL to be deleted.
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
 * @!method deleteNetworkAclEntry(params, callback)
 *   Calls the DeleteNetworkAclEntry API operation.
 *   @param params [Object]
 *     * `NetworkAclId` &mdash; **required** &mdash; (`String`) ID of the
 *       network ACL.
 *     * `RuleNumber` &mdash; **required** &mdash; (`Integer`) Rule
 *       number for the entry to delete.
 *     * `Egress` &mdash; **required** &mdash; (`Boolean`) Whether the
 *       rule to delete is an egress rule (true) or ingress rule (false).
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
 * @!method deleteNetworkInterface(params, callback)
 *   Calls the DeleteNetworkInterface API operation.
 *   @param params [Object]
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`)
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
 * @!method deletePlacementGroup(params, callback)
 *   Calls the DeletePlacementGroup API operation.
 *   @param params [Object]
 *     * `GroupName` &mdash; **required** &mdash; (`String`) The name of
 *       the PlacementGroup to delete.
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
 * @!method deleteRoute(params, callback)
 *   Calls the DeleteRoute API operation.
 *   @param params [Object]
 *     * `RouteTableId` &mdash; **required** &mdash; (`String`) The ID of
 *       the route table where the route will be deleted.
 *     * `DestinationCidrBlock` &mdash; **required** &mdash; (`String`)
 *       The CIDR range for the route you want to delete. The value you
 *       specify must exactly match the CIDR for the route you want to
 *       delete.
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
 * @!method deleteRouteTable(params, callback)
 *   Calls the DeleteRouteTable API operation.
 *   @param params [Object]
 *     * `RouteTableId` &mdash; **required** &mdash; (`String`) The ID of
 *       the route table to be deleted.
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
 * @!method deleteSecurityGroup(params, callback)
 *   Calls the DeleteSecurityGroup API operation.
 *   @param params [Object]
 *     * `GroupName` &mdash; (`String`) The name of the Amazon EC2
 *       security group to delete.
 *     * `GroupId` &mdash; (`String`) The ID of the Amazon EC2 security
 *       group to delete.
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
 * @!method deleteSnapshot(params, callback)
 *   Calls the DeleteSnapshot API operation.
 *   @param params [Object]
 *     * `SnapshotId` &mdash; **required** &mdash; (`String`) The ID of
 *       the snapshot to delete.
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
 * @!method deleteSpotDatafeedSubscription(params, callback)
 *   Calls the DeleteSpotDatafeedSubscription API operation.
 *   @param params [Object]
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
 * @!method deleteSubnet(params, callback)
 *   Calls the DeleteSubnet API operation.
 *   @param params [Object]
 *     * `SubnetId` &mdash; **required** &mdash; (`String`) The ID of the
 *       subnet you want to delete.
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
 * @!method deleteTags(params, callback)
 *   Calls the DeleteTags API operation.
 *   @param params [Object]
 *     * `Resources` &mdash; **required** &mdash; (`Array<String>`) A
 *       list of one or more resource IDs. This could be the ID of an
 *       AMI, an instance, an EBS volume, or snapshot, etc.
 *     * `Tags` &mdash; (`Array<Object>`) The tags to delete from the
 *       specified resources. Each tag item consists of a key-value pair.
 *       If a tag is specified without a value, the tag and all of its
 *       values are deleted.
 *       * `Key` &mdash; (`String`) The tag's key.
 *       * `Value` &mdash; (`String`) The tag's value.
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
 * @!method deleteVolume(params, callback)
 *   Calls the DeleteVolume API operation.
 *   @param params [Object]
 *     * `VolumeId` &mdash; **required** &mdash; (`String`) The ID of the
 *       EBS volume to delete.
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
 * @!method deleteVpc(params, callback)
 *   Calls the DeleteVpc API operation.
 *   @param params [Object]
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC you want to delete.
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
 * @!method deleteVpnConnection(params, callback)
 *   Calls the DeleteVpnConnection API operation.
 *   @param params [Object]
 *     * `VpnConnectionId` &mdash; **required** &mdash; (`String`) The ID
 *       of the VPN connection to delete
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
 * @!method deleteVpnConnectionRoute(params, callback)
 *   Calls the DeleteVpnConnectionRoute API operation.
 *   @param params [Object]
 *     * `VpnConnectionId` &mdash; **required** &mdash; (`String`)
 *     * `DestinationCidrBlock` &mdash; **required** &mdash; (`String`)
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
 * @!method deleteVpnGateway(params, callback)
 *   Calls the DeleteVpnGateway API operation.
 *   @param params [Object]
 *     * `VpnGatewayId` &mdash; **required** &mdash; (`String`) The ID of
 *       the VPN gateway to delete.
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
 * @!method deregisterImage(params, callback)
 *   Calls the DeregisterImage API operation.
 *   @param params [Object]
 *     * `ImageId` &mdash; **required** &mdash; (`String`) The ID of the
 *       AMI to deregister.
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
 * @!method describeAccountAttributes(params, callback)
 *   Calls the DescribeAccountAttributes API operation.
 *   @param params [Object]
 *     * `AttributeNames` &mdash; (`Array<String>`)
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
 *       * `AccountAttributes` &mdash; (`Array<Object>`)
 *         * `AttributeName` &mdash; (`String`)
 *         * `AttributeValues` &mdash; (`Array<Object>`)
 *           * `AttributeValue` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAddresses(params, callback)
 *   Calls the DescribeAddresses API operation.
 *   @param params [Object]
 *     * `PublicIps` &mdash; (`Array<String>`) The optional list of
 *       Elastic IP addresses to describe.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Addresses. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
 *     * `AllocationIds` &mdash; (`Array<String>`)
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
 *       * `Addresses` &mdash; (`Array<Object>`) The list of Elastic IPs.
 *         * `InstanceId` &mdash; (`String`)
 *         * `PublicIp` &mdash; (`String`)
 *         * `AllocationId` &mdash; (`String`)
 *         * `AssociationId` &mdash; (`String`)
 *         * `Domain` &mdash; (`String`)
 *         * `NetworkInterfaceId` &mdash; (`String`)
 *         * `NetworkInterfaceOwnerId` &mdash; (`String`)
 *         * `PrivateIpAddress` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAvailabilityZones(params, callback)
 *   Calls the DescribeAvailabilityZones API operation.
 *   @param params [Object]
 *     * `ZoneNames` &mdash; (`Array<String>`) A list of the availability
 *       zone names to describe.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for AvailabilityZones. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `AvailabilityZones` &mdash; (`Array<Object>`) The list of
 *         described Amazon EC2 availability zones.
 *         * `ZoneName` &mdash; (`String`) Name of the Availability Zone.
 *         * `State` &mdash; (`String`) State of the Availability Zone.
 *         * `RegionName` &mdash; (`String`) Name of the region in which
 *           this zone resides.
 *         * `Messages` &mdash; (`Array<Object>`) A list of messages about
 *           the Availability Zone.
 *           * `Message` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeBundleTasks(params, callback)
 *   Calls the DescribeBundleTasks API operation.
 *   @param params [Object]
 *     * `BundleIds` &mdash; (`Array<String>`) The list of bundle task
 *       IDs to describe.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for BundleTasks. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `BundleTasks` &mdash; (`Array<Object>`) The list of described
 *         bundle tasks.
 *         * `InstanceId` &mdash; (`String`) Instance associated with this
 *           bundle task.
 *         * `BundleId` &mdash; (`String`) Unique identifier for this task.
 *         * `State` &mdash; (`String`) The state of this task.
 *         * `StartTime` &mdash; (`Date`) The time this task started.
 *         * `UpdateTime` &mdash; (`Date`) The time of the most recent
 *           update for the task.
 *         * `Storage` &mdash; (`Object`) Amazon S3 storage locations.
 *           * `S3` &mdash; (`Object`) The details of S3 storage for
 *             bundling a Windows instance.
 *             * `Bucket` &mdash; (`String`) The bucket in which to store
 *               the AMI. You can specify a bucket that you already own or
 *               a new bucket that Amazon EC2 creates on your behalf. If
 *               you specify a bucket that belongs to someone else, Amazon
 *               EC2 returns an error.
 *             * `Prefix` &mdash; (`String`) The prefix to use when storing
 *               the AMI in S3.
 *             * `AWSAccessKeyId` &mdash; (`String`) The Access Key ID of
 *               the owner of the Amazon S3 bucket.
 *             * `UploadPolicy` &mdash; (`String`) A Base64-encoded Amazon
 *               S3 upload policy that gives Amazon EC2 permission to
 *               upload items into Amazon S3 on the user's behalf.
 *             * `UploadPolicySignature` &mdash; (`String`) The signature
 *               of the Base64 encoded JSON document.
 *         * `Progress` &mdash; (`String`) The level of task completion, in
 *           percent (e.g., 20%).
 *         * `BundleTaskError` &mdash; (`Object`) If the task fails, a
 *           description of the error.
 *           * `Code` &mdash; (`String`) Error code.
 *           * `Message` &mdash; (`String`) Error message.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeConversionTasks(params, callback)
 *   Calls the DescribeConversionTasks API operation.
 *   @param params [Object]
 *     * `Filters` &mdash; (`Array<Object>`)
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
 *     * `ConversionTaskIds` &mdash; (`Array<String>`)
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
 *       * `ConversionTasks` &mdash; (`Array<Object>`)
 *         * `ConversionTaskId` &mdash; (`String`)
 *         * `ExpirationTime` &mdash; (`String`)
 *         * `ImportInstance` &mdash; (`Object`)
 *           * `Volumes` &mdash; (`Array<Object>`)
 *             * `BytesConverted` &mdash; (`Integer`)
 *             * `AvailabilityZone` &mdash; (`String`)
 *             * `Image` &mdash; (`Object`)
 *               * `Format` &mdash; (`String`)
 *               * `Size` &mdash; (`Integer`)
 *               * `ImportManifestUrl` &mdash; (`String`)
 *               * `Checksum` &mdash; (`String`)
 *             * `Volume` &mdash; (`Object`)
 *               * `Size` &mdash; (`Integer`)
 *               * `Id` &mdash; (`String`)
 *             * `Status` &mdash; (`String`)
 *             * `StatusMessage` &mdash; (`String`)
 *             * `Description` &mdash; (`String`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `Platform` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *         * `ImportVolume` &mdash; (`Object`)
 *           * `BytesConverted` &mdash; (`Integer`)
 *           * `AvailabilityZone` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *           * `Image` &mdash; (`Object`)
 *             * `Format` &mdash; (`String`)
 *             * `Size` &mdash; (`Integer`)
 *             * `ImportManifestUrl` &mdash; (`String`)
 *             * `Checksum` &mdash; (`String`)
 *           * `Volume` &mdash; (`Object`)
 *             * `Size` &mdash; (`Integer`)
 *             * `Id` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *         * `StatusMessage` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCustomerGateways(params, callback)
 *   Calls the DescribeCustomerGateways API operation.
 *   @param params [Object]
 *     * `CustomerGatewayIds` &mdash; (`Array<String>`) A set of one or
 *       more customer gateway IDs.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Customer Gateways. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `CustomerGateways` &mdash; (`Array<Object>`)
 *         * `CustomerGatewayId` &mdash; (`String`) Specifies the ID of the
 *           customer gateway.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           customer gateway. Valid values are pending, available,
 *           deleting, and deleted.
 *         * `Type` &mdash; (`String`) Specifies the type of VPN connection
 *           the customer gateway supports.
 *         * `IpAddress` &mdash; (`String`) Contains the Internet-routable
 *           IP address of the customer gateway's outside interface.
 *         * `BgpAsn` &mdash; (`String`) Specifies the customer gateway's
 *           Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           CustomerGateway.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDhcpOptions(params, callback)
 *   Calls the DescribeDhcpOptions API operation.
 *   @param params [Object]
 *     * `DhcpOptionsIds` &mdash; (`Array<String>`)
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for DhcpOptions. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `DhcpOptions` &mdash; (`Array<Object>`)
 *         * `DhcpOptionsId` &mdash; (`String`) Specifies the ID of the set
 *           of DHCP options.
 *         * `DhcpConfigurations` &mdash; (`Array<Object>`) Contains
 *           information about the set of DHCP options.
 *           * `Key` &mdash; (`String`) Contains the name of a DHCP option.
 *           * `Values` &mdash; (`Array<String>`) Contains a set of values
 *             for a DHCP option.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           DhcpOptions.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeExportTasks(params, callback)
 *   Calls the DescribeExportTasks API operation.
 *   @param params [Object]
 *     * `ExportTaskIds` &mdash; (`Array<String>`)
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
 *       * `ExportTasks` &mdash; (`Array<Object>`)
 *         * `ExportTaskId` &mdash; (`String`)
 *         * `Description` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *         * `StatusMessage` &mdash; (`String`)
 *         * `InstanceExportDetails` &mdash; (`Object`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `TargetEnvironment` &mdash; (`String`)
 *         * `ExportToS3Task` &mdash; (`Object`)
 *           * `DiskImageFormat` &mdash; (`String`)
 *           * `ContainerFormat` &mdash; (`String`)
 *           * `S3Bucket` &mdash; (`String`)
 *           * `S3Key` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeImageAttribute(params, callback)
 *   Calls the DescribeImageAttribute API operation.
 *   @param params [Object]
 *     * `ImageId` &mdash; **required** &mdash; (`String`) The ID of the
 *       AMI whose attribute is to be described.
 *     * `Attribute` &mdash; **required** &mdash; (`String`) The name of
 *       the attribute to describe. Available attribute names:
 *       productCodes, kernel, ramdisk, launchPermisson,
 *       blockDeviceMapping
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
 *       * `ImageId` &mdash; (`String`) The ID of the associated AMI.
 *       * `LaunchPermissions` &mdash; (`Array<Object>`) Launch permissions
 *         for the associated AMI.
 *         * `UserId` &mdash; (`String`) The AWS user ID of the user
 *           involved in this launch permission.
 *         * `Group` &mdash; (`String`) The AWS group of the user involved
 *           in this launch permission. Available groups: all
 *       * `ProductCodes` &mdash; (`Array<Object>`) Product codes for the
 *         associated AMI.
 *         * `ProductCodeId` &mdash; (`String`) The unique ID of an AWS
 *           DevPay product code.
 *         * `ProductCodeType` &mdash; (`String`)
 *       * `KernelId` &mdash; (`Object`) Kernel ID of the associated AMI.
 *         * `Value` &mdash; (`String`) String value
 *       * `RamdiskId` &mdash; (`Object`) Ramdisk ID of the associated AMI.
 *         * `Value` &mdash; (`String`) String value
 *       * `Description` &mdash; (`Object`) User-created description of the
 *         associated AMI.
 *         * `Value` &mdash; (`String`) String value
 *       * `BlockDeviceMappings` &mdash; (`Array<Object>`) Block device
 *         mappings for the associated AMI.
 *         * `VirtualName` &mdash; (`String`) Specifies the virtual device
 *           name.
 *         * `DeviceName` &mdash; (`String`) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * `SnapshotId` &mdash; (`String`) The ID of the snapshot from
 *             which the volume will be created.
 *           * `VolumeSize` &mdash; (`Integer`) The size of the volume, in
 *             gigabytes.
 *           * `DeleteOnTermination` &mdash; (`Boolean`) Specifies whether
 *             the Amazon EBS volume is deleted on instance termination.
 *           * `VolumeType` &mdash; (`String`)
 *           * `Iops` &mdash; (`Integer`)
 *         * `NoDevice` &mdash; (`String`) Specifies the device name to
 *           suppress during instance launch.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeImages(params, callback)
 *   Calls the DescribeImages API operation.
 *   @param params [Object]
 *     * `ImageIds` &mdash; (`Array<String>`) An optional list of the AMI
 *       IDs to describe. If not specified, all AMIs will be described.
 *     * `Owners` &mdash; (`Array<String>`) The optional list of owners
 *       for the described AMIs. The IDs amazon, self, and explicit can
 *       be used to include AMIs owned by Amazon, AMIs owned by the user,
 *       and AMIs for which the user has explicit launch permissions,
 *       respectively.
 *     * `ExecutableUsers` &mdash; (`Array<String>`) The optional list of
 *       users with explicit launch permissions for the described AMIs.
 *       The user ID can be a user's account ID, 'self' to return AMIs
 *       for which the sender of the request has explicit launch
 *       permissions, or 'all' to return AMIs with public launch
 *       permissions.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Images. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Images` &mdash; (`Array<Object>`) The list of the described
 *         AMIs.
 *         * `ImageId` &mdash; (`String`) The unique ID of the AMI.
 *         * `ImageLocation` &mdash; (`String`) The location of the AMI.
 *         * `State` &mdash; (`String`) Current state of the AMI. If the
 *           operation returns available, the image is successfully
 *           registered and available for launching. If the operation
 *           returns deregistered, the image is deregistered and no longer
 *           available for launching.
 *         * `OwnerId` &mdash; (`String`) AWS Access Key ID of the image
 *           owner.
 *         * `Public` &mdash; (`Boolean`) True if this image has public
 *           launch permissions. False if it only has implicit and explicit
 *           launch permissions.
 *         * `ProductCodes` &mdash; (`Array<Object>`) Product codes of the
 *           AMI.
 *           * `ProductCodeId` &mdash; (`String`) The unique ID of an AWS
 *             DevPay product code.
 *           * `ProductCodeType` &mdash; (`String`)
 *         * `Architecture` &mdash; (`String`) The architecture of the
 *           image.
 *         * `ImageType` &mdash; (`String`) The type of image (machine,
 *           kernel, or ramdisk).
 *         * `KernelId` &mdash; (`String`) The kernel associated with the
 *           image, if any. Only applicable for machine images.
 *         * `RamdiskId` &mdash; (`String`) The RAM disk associated with
 *           the image, if any. Only applicable for machine images.
 *         * `Platform` &mdash; (`String`) The operating platform of the
 *           AMI.
 *         * `StateReason` &mdash; (`Object`) The reason for the state
 *           change.
 *           * `Code` &mdash; (`String`) Reason code for the state change.
 *           * `Message` &mdash; (`String`) Descriptive message for the
 *             state change.
 *         * `ImageOwnerAlias` &mdash; (`String`) The AWS account alias
 *           (e.g., "amazon", "redhat", "self", etc.) or AWS account ID
 *           that owns the AMI.
 *         * `Name` &mdash; (`String`) The name of the AMI that was
 *           provided during image creation.
 *         * `Description` &mdash; (`String`) The description of the AMI
 *           that was provided during image creation.
 *         * `RootDeviceType` &mdash; (`String`) The root device type used
 *           by the AMI. The AMI can use an Amazon EBS or instance store
 *           root device.
 *         * `RootDeviceName` &mdash; (`String`) The root device name
 *           (e.g., /dev/sda1).
 *         * `BlockDeviceMappings` &mdash; (`Array<Object>`) Specifies how
 *           block devices are exposed to the instance.
 *           * `VirtualName` &mdash; (`String`) Specifies the virtual
 *             device name.
 *           * `DeviceName` &mdash; (`String`) Specifies the device name
 *             (e.g., /dev/sdh).
 *           * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *             automatically setup Amazon EBS volumes when the instance is
 *             launched.
 *             * `SnapshotId` &mdash; (`String`) The ID of the snapshot
 *               from which the volume will be created.
 *             * `VolumeSize` &mdash; (`Integer`) The size of the volume,
 *               in gigabytes.
 *             * `DeleteOnTermination` &mdash; (`Boolean`) Specifies
 *               whether the Amazon EBS volume is deleted on instance
 *               termination.
 *             * `VolumeType` &mdash; (`String`)
 *             * `Iops` &mdash; (`Integer`)
 *           * `NoDevice` &mdash; (`String`) Specifies the device name to
 *             suppress during instance launch.
 *         * `VirtualizationType` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the Image.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `Hypervisor` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstanceAttribute(params, callback)
 *   Calls the DescribeInstanceAttribute API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the instance whose instance attribute is being described.
 *     * `Attribute` &mdash; **required** &mdash; (`String`) The name of
 *       the attribute to describe. Available attribute names:
 *       instanceType, kernel, ramdisk, userData, disableApiTermination,
 *       instanceInitiatedShutdownBehavior, rootDeviceName,
 *       blockDeviceMapping
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
 *       * `InstanceId` &mdash; (`String`) The ID of the associated
 *         instance.
 *       * `InstanceType` &mdash; (`Object`) The instance type (e.g.,
 *         m1.small, c1.medium, m2.2xlarge, and so on).
 *         * `Value` &mdash; (`String`) String value
 *       * `KernelId` &mdash; (`Object`) The kernel ID of the associated
 *         instance.
 *         * `Value` &mdash; (`String`) String value
 *       * `RamdiskId` &mdash; (`Object`) The ramdisk ID of the associated
 *         instance.
 *         * `Value` &mdash; (`String`) String value
 *       * `UserData` &mdash; (`Object`) MIME, Base64-encoded user data.
 *         * `Value` &mdash; (`String`) String value
 *       * `DisableApiTermination` &mdash; (`Object`) Whether this instance
 *         can be terminated. You must modify this attribute before you can
 *         terminate any "locked" instances.
 *         * `Value` &mdash; (`Boolean`) Boolean value
 *       * `InstanceInitiatedShutdownBehavior` &mdash; (`Object`) Whether
 *         this instance's Amazon EBS volumes are deleted when the instance
 *         is shut down.
 *         * `Value` &mdash; (`String`) String value
 *       * `RootDeviceName` &mdash; (`Object`) The root device name (e.g.,
 *         /dev/sda1).
 *         * `Value` &mdash; (`String`) String value
 *       * `BlockDeviceMappings` &mdash; (`Array<Object>`) How block
 *         devices are exposed to this instance. Each mapping is made up of
 *         a virtualName and a deviceName.
 *         * `DeviceName` &mdash; (`String`) The device name (e.g.,
 *           /dev/sdh) at which the block device is exposed on the
 *           instance.
 *         * `Ebs` &mdash; (`Object`) The optional EBS device mapped to the
 *           specified device name.
 *           * `VolumeId` &mdash; (`String`) The ID of the EBS volume.
 *           * `Status` &mdash; (`String`) The status of the EBS volume.
 *           * `AttachTime` &mdash; (`Date`) The time at which the EBS
 *             volume was attached to the associated instance.
 *           * `DeleteOnTermination` &mdash; (`Boolean`) Specifies whether
 *             the Amazon EBS volume is deleted on instance termination.
 *       * `ProductCodes` &mdash; (`Array<Object>`)
 *         * `ProductCodeId` &mdash; (`String`) The unique ID of an AWS
 *           DevPay product code.
 *         * `ProductCodeType` &mdash; (`String`)
 *       * `EbsOptimized` &mdash; (`Object`)
 *         * `Value` &mdash; (`Boolean`) Boolean value
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstanceStatus(params, callback)
 *   Calls the DescribeInstanceStatus API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; (`Array<String>`) The list of instance
 *       IDs. If not specified, all instances are described.
 *     * `Filters` &mdash; (`Array<Object>`) The list of filters to limit
 *       returned results.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
 *     * `NextToken` &mdash; (`String`) A string specifying the next
 *       paginated set of results to return.
 *     * `MaxResults` &mdash; (`Integer`) The maximum number of paginated
 *       instance items per response.
 *     * `IncludeAllInstances` &mdash; (`Boolean`)
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
 *       * `InstanceStatuses` &mdash; (`Array<Object>`) Collection of
 *         instance statuses describing the state of the requested
 *         instances.
 *         * `InstanceId` &mdash; (`String`) The ID of the Amazon EC2
 *           instance.
 *         * `AvailabilityZone` &mdash; (`String`) The Amazon EC2
 *           instance's availability zone.
 *         * `Events` &mdash; (`Array<Object>`) Events that affect the
 *           status of the associated Amazon EC2 instance.
 *           * `Code` &mdash; (`String`) The associated code of the event.
 *             Valid values: instance-reboot, system-reboot,
 *             instance-retirement
 *           * `Description` &mdash; (`String`) A description of the event.
 *           * `NotBefore` &mdash; (`Date`) The earliest scheduled start
 *             time for the event.
 *           * `NotAfter` &mdash; (`Date`) The latest scheduled end time
 *             for the event.
 *         * `InstanceState` &mdash; (`Object`)
 *           * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * `Name` &mdash; (`String`) The current state of the instance.
 *         * `SystemStatus` &mdash; (`Object`)
 *           * `Status` &mdash; (`String`)
 *           * `Details` &mdash; (`Array<Object>`)
 *             * `Name` &mdash; (`String`)
 *             * `Status` &mdash; (`String`)
 *             * `ImpairedSince` &mdash; (`Date`)
 *         * `InstanceStatus` &mdash; (`Object`)
 *           * `Status` &mdash; (`String`)
 *           * `Details` &mdash; (`Array<Object>`)
 *             * `Name` &mdash; (`String`)
 *             * `Status` &mdash; (`String`)
 *             * `ImpairedSince` &mdash; (`Date`)
 *       * `NextToken` &mdash; (`String`) A string specifying the next
 *         paginated set of results to return.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstances(params, callback)
 *   Calls the DescribeInstances API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; (`Array<String>`) An optional list of the
 *       instances to describe.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Instances. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Reservations` &mdash; (`Array<Object>`) The list of
 *         reservations containing the describes instances.
 *         * `ReservationId` &mdash; (`String`) The unique ID of this
 *           reservation.
 *         * `OwnerId` &mdash; (`String`) The AWS Access Key ID of the user
 *           who owns the reservation.
 *         * `RequesterId` &mdash; (`String`) The unique ID of the user who
 *           requested the instances in this reservation.
 *         * `Groups` &mdash; (`Array<Object>`) The list of security groups
 *           requested for the instances in this reservation.
 *           * `GroupName` &mdash; (`String`)
 *           * `GroupId` &mdash; (`String`)
 *         * `Instances` &mdash; (`Array<Object>`) The list of Amazon EC2
 *           instances included in this reservation.
 *           * `InstanceId` &mdash; (`String`) Unique ID of the instance
 *             launched.
 *           * `ImageId` &mdash; (`String`) Image ID of the AMI used to
 *             launch the instance.
 *           * `State` &mdash; (`Object`) The current state of the
 *             instance.
 *             * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *               high byte is an opaque internal value and should be
 *               ignored. The low byte is set based on the state
 *               represented.
 *             * `Name` &mdash; (`String`) The current state of the
 *               instance.
 *           * `PrivateDnsName` &mdash; (`String`) The private DNS name
 *             assigned to the instance. This DNS name can only be used
 *             inside the Amazon EC2 network. This element remains empty
 *             until the instance enters a running state.
 *           * `PublicDnsName` &mdash; (`String`) The public DNS name
 *             assigned to the instance. This DNS name is contactable from
 *             outside the Amazon EC2 network. This element remains empty
 *             until the instance enters a running state.
 *           * `StateTransitionReason` &mdash; (`String`) Reason for the
 *             most recent state transition. This might be an empty string.
 *           * `KeyName` &mdash; (`String`) If this instance was launched
 *             with an associated key pair, this displays the key pair
 *             name.
 *           * `AmiLaunchIndex` &mdash; (`Integer`) The AMI launch index,
 *             which can be used to find this instance within the launch
 *             group.
 *           * `ProductCodes` &mdash; (`Array<Object>`) Product codes
 *             attached to this instance.
 *             * `ProductCodeId` &mdash; (`String`) The unique ID of an AWS
 *               DevPay product code.
 *             * `ProductCodeType` &mdash; (`String`)
 *           * `InstanceType` &mdash; (`String`) The instance type. For
 *             more information on instance types, please see the Amazon
 *             Elastic Compute Cloud Developer Guide.
 *           * `LaunchTime` &mdash; (`Date`) The time this instance
 *             launched.
 *           * `Placement` &mdash; (`Object`) The location where this
 *             instance launched.
 *             * `AvailabilityZone` &mdash; (`String`) The availability
 *               zone in which an Amazon EC2 instance runs.
 *             * `GroupName` &mdash; (`String`) The name of the
 *               PlacementGroup in which an Amazon EC2 instance runs.
 *               Placement groups are primarily used for launching High
 *               Performance Computing instances in the same group to
 *               ensure fast connection speeds.
 *             * `Tenancy` &mdash; (`String`) The allowed tenancy of
 *               instances launched into the VPC. A value of default means
 *               instances can be launched with any tenancy; a value of
 *               dedicated means all instances launched into the VPC will
 *               be launched as dedicated tenancy regardless of the tenancy
 *               assigned to the instance at launch.
 *           * `KernelId` &mdash; (`String`) Kernel associated with this
 *             instance.
 *           * `RamdiskId` &mdash; (`String`) RAM disk associated with this
 *             instance.
 *           * `Platform` &mdash; (`String`) Platform of the instance
 *             (e.g., Windows).
 *           * `Monitoring` &mdash; (`Object`) Monitoring status for this
 *             instance.
 *             * `State` &mdash; (`String`) The state of monitoring on an
 *               Amazon EC2 instance (ex: enabled, disabled).
 *           * `SubnetId` &mdash; (`String`) Specifies the Amazon VPC
 *             subnet ID in which the instance is running.
 *           * `VpcId` &mdash; (`String`) Specifies the Amazon VPC in which
 *             the instance is running.
 *           * `PrivateIpAddress` &mdash; (`String`) Specifies the private
 *             IP address that is assigned to the instance (Amazon VPC).
 *           * `PublicIpAddress` &mdash; (`String`) Specifies the IP
 *             address of the instance.
 *           * `StateReason` &mdash; (`Object`) The reason for the state
 *             change.
 *             * `Code` &mdash; (`String`) Reason code for the state
 *               change.
 *             * `Message` &mdash; (`String`) Descriptive message for the
 *               state change.
 *           * `Architecture` &mdash; (`String`) The architecture of this
 *             instance.
 *           * `RootDeviceType` &mdash; (`String`) The root device type
 *             used by the AMI. The AMI can use an Amazon EBS or instance
 *             store root device.
 *           * `RootDeviceName` &mdash; (`String`) The root device name
 *             (e.g., /dev/sda1).
 *           * `BlockDeviceMappings` &mdash; (`Array<Object>`) Block device
 *             mapping set.
 *             * `DeviceName` &mdash; (`String`) The device name (e.g.,
 *               /dev/sdh) at which the block device is exposed on the
 *               instance.
 *             * `Ebs` &mdash; (`Object`) The optional EBS device mapped to
 *               the specified device name.
 *               * `VolumeId` &mdash; (`String`) The ID of the EBS volume.
 *               * `Status` &mdash; (`String`) The status of the EBS
 *                 volume.
 *               * `AttachTime` &mdash; (`Date`) The time at which the EBS
 *                 volume was attached to the associated instance.
 *               * `DeleteOnTermination` &mdash; (`Boolean`) Specifies
 *                 whether the Amazon EBS volume is deleted on instance
 *                 termination.
 *           * `VirtualizationType` &mdash; (`String`)
 *           * `InstanceLifecycle` &mdash; (`String`)
 *           * `SpotInstanceRequestId` &mdash; (`String`)
 *           * `License` &mdash; (`Object`)
 *             * `Pool` &mdash; (`String`) The license pool from which this
 *               license was used (ex: 'windows').
 *           * `ClientToken` &mdash; (`String`)
 *           * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *             Instance.
 *             * `Key` &mdash; (`String`) The tag's key.
 *             * `Value` &mdash; (`String`) The tag's value.
 *           * `SecurityGroups` &mdash; (`Array<Object>`)
 *             * `GroupName` &mdash; (`String`)
 *             * `GroupId` &mdash; (`String`)
 *           * `SourceDestCheck` &mdash; (`Boolean`)
 *           * `Hypervisor` &mdash; (`String`)
 *           * `NetworkInterfaces` &mdash; (`Array<Object>`)
 *             * `NetworkInterfaceId` &mdash; (`String`)
 *             * `SubnetId` &mdash; (`String`)
 *             * `VpcId` &mdash; (`String`)
 *             * `Description` &mdash; (`String`)
 *             * `OwnerId` &mdash; (`String`)
 *             * `Status` &mdash; (`String`)
 *             * `PrivateIpAddress` &mdash; (`String`)
 *             * `PrivateDnsName` &mdash; (`String`)
 *             * `SourceDestCheck` &mdash; (`Boolean`)
 *             * `Groups` &mdash; (`Array<Object>`)
 *               * `GroupName` &mdash; (`String`)
 *               * `GroupId` &mdash; (`String`)
 *             * `Attachment` &mdash; (`Object`)
 *               * `AttachmentId` &mdash; (`String`)
 *               * `DeviceIndex` &mdash; (`Integer`)
 *               * `Status` &mdash; (`String`)
 *               * `AttachTime` &mdash; (`Date`)
 *               * `DeleteOnTermination` &mdash; (`Boolean`)
 *             * `Association` &mdash; (`Object`)
 *               * `PublicIp` &mdash; (`String`)
 *               * `PublicDnsName` &mdash; (`String`)
 *               * `IpOwnerId` &mdash; (`String`)
 *             * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *               * `PrivateIpAddress` &mdash; (`String`)
 *               * `PrivateDnsName` &mdash; (`String`)
 *               * `Primary` &mdash; (`Boolean`)
 *               * `Association` &mdash; (`Object`)
 *                 * `PublicIp` &mdash; (`String`)
 *                 * `PublicDnsName` &mdash; (`String`)
 *                 * `IpOwnerId` &mdash; (`String`)
 *           * `IamInstanceProfile` &mdash; (`Object`)
 *             * `Arn` &mdash; (`String`)
 *             * `Id` &mdash; (`String`)
 *           * `EbsOptimized` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInternetGateways(params, callback)
 *   Calls the DescribeInternetGateways API operation.
 *   @param params [Object]
 *     * `InternetGatewayIds` &mdash; (`Array<String>`) One or more
 *       Internet gateway IDs.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Internet Gateways. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `InternetGateways` &mdash; (`Array<Object>`)
 *         * `InternetGatewayId` &mdash; (`String`)
 *         * `Attachments` &mdash; (`Array<Object>`)
 *           * `VpcId` &mdash; (`String`)
 *           * `State` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeKeyPairs(params, callback)
 *   Calls the DescribeKeyPairs API operation.
 *   @param params [Object]
 *     * `KeyNames` &mdash; (`Array<String>`) The optional list of key
 *       pair names to describe.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for KeyPairs. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `KeyPairs` &mdash; (`Array<Object>`) The list of described key
 *         pairs.
 *         * `KeyName` &mdash; (`String`) The name of the key pair.
 *         * `KeyFingerprint` &mdash; (`String`) The SHA-1 digest of the
 *           DER encoded private key.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLicenses(params, callback)
 *   Calls the DescribeLicenses API operation.
 *   @param params [Object]
 *     * `LicenseIds` &mdash; (`Array<String>`) Specifies the license
 *       registration for which details are to be returned.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Licenses. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Licenses` &mdash; (`Array<Object>`) Specifies active licenses
 *         in use and attached to an Amazon EC2 instance.
 *         * `LicenseId` &mdash; (`String`) The unique ID identifying the
 *           license.
 *         * `Type` &mdash; (`String`) The license type (ex.
 *           "Microsoft/Windows/Standard").
 *         * `Pool` &mdash; (`String`) The name of the pool in which the
 *           license is kept.
 *         * `Capacities` &mdash; (`Array<Object>`) The capacities
 *           available for this license, indicating how many licenses are
 *           in use, how many are available, how many Amazon EC2 instances
 *           can be supported, etc.
 *           * `Capacity` &mdash; (`Integer`) The number of licenses
 *             available.
 *           * `InstanceCapacity` &mdash; (`Integer`) The number of Amazon
 *             EC2 instances that can be supported with the license's
 *             capacity.
 *           * `State` &mdash; (`String`) The state of this license
 *             capacity, indicating whether the license is actively being
 *             used or not.
 *           * `EarliestAllowedDeactivationTime` &mdash; (`Date`) The
 *             earliest allowed time at which a license can be deactivated.
 *             Some licenses have time restrictions on when they can be
 *             activated and reactivated.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           License.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeNetworkAcls(params, callback)
 *   Calls the DescribeNetworkAcls API operation.
 *   @param params [Object]
 *     * `NetworkAclIds` &mdash; (`Array<String>`) One or more network
 *       ACL IDs.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Network ACLs. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `NetworkAcls` &mdash; (`Array<Object>`)
 *         * `NetworkAclId` &mdash; (`String`)
 *         * `VpcId` &mdash; (`String`)
 *         * `IsDefault` &mdash; (`Boolean`)
 *         * `Entries` &mdash; (`Array<Object>`)
 *           * `RuleNumber` &mdash; (`Integer`)
 *           * `Protocol` &mdash; (`String`)
 *           * `RuleAction` &mdash; (`String`)
 *           * `Egress` &mdash; (`Boolean`)
 *           * `CidrBlock` &mdash; (`String`)
 *           * `IcmpTypeCode` &mdash; (`Object`)
 *             * `Type` &mdash; (`Integer`) For the ICMP protocol, the ICMP
 *               type. A value of -1 is a wildcard meaning all types.
 *               Required if specifying icmp for the protocol.
 *             * `Code` &mdash; (`Integer`) For the ICMP protocol, the ICMP
 *               code. A value of -1 is a wildcard meaning all codes.
 *               Required if specifying icmp for the protocol.
 *           * `PortRange` &mdash; (`Object`)
 *             * `From` &mdash; (`Integer`) The first port in the range.
 *               Required if specifying tcp or udp for the protocol.
 *             * `To` &mdash; (`Integer`) The last port in the range.
 *               Required if specifying tcp or udp for the protocol.
 *         * `Associations` &mdash; (`Array<Object>`)
 *           * `NetworkAclAssociationId` &mdash; (`String`)
 *           * `NetworkAclId` &mdash; (`String`)
 *           * `SubnetId` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeNetworkInterfaceAttribute(params, callback)
 *   Calls the DescribeNetworkInterfaceAttribute API operation.
 *   @param params [Object]
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`)
 *     * `Description` &mdash; (`String`)
 *     * `SourceDestCheck` &mdash; (`String`)
 *     * `Groups` &mdash; (`String`)
 *     * `Attachment` &mdash; (`String`)
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
 *       * `NetworkInterfaceId` &mdash; (`String`)
 *       * `Description` &mdash; (`Object`)
 *         * `Value` &mdash; (`String`) String value
 *       * `SourceDestCheck` &mdash; (`Object`)
 *         * `Value` &mdash; (`Boolean`) Boolean value
 *       * `Groups` &mdash; (`Array<Object>`)
 *         * `GroupName` &mdash; (`String`)
 *         * `GroupId` &mdash; (`String`)
 *       * `Attachment` &mdash; (`Object`)
 *         * `AttachmentId` &mdash; (`String`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `InstanceOwnerId` &mdash; (`String`)
 *         * `DeviceIndex` &mdash; (`Integer`)
 *         * `Status` &mdash; (`String`)
 *         * `AttachTime` &mdash; (`Date`)
 *         * `DeleteOnTermination` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeNetworkInterfaces(params, callback)
 *   Calls the DescribeNetworkInterfaces API operation.
 *   @param params [Object]
 *     * `NetworkInterfaceIds` &mdash; (`Array<String>`)
 *     * `Filters` &mdash; (`Array<Object>`)
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `NetworkInterfaces` &mdash; (`Array<Object>`)
 *         * `NetworkInterfaceId` &mdash; (`String`)
 *         * `SubnetId` &mdash; (`String`)
 *         * `VpcId` &mdash; (`String`)
 *         * `AvailabilityZone` &mdash; (`String`)
 *         * `Description` &mdash; (`String`)
 *         * `OwnerId` &mdash; (`String`)
 *         * `RequesterId` &mdash; (`String`)
 *         * `RequesterManaged` &mdash; (`Boolean`)
 *         * `Status` &mdash; (`String`)
 *         * `MacAddress` &mdash; (`String`)
 *         * `PrivateIpAddress` &mdash; (`String`)
 *         * `PrivateDnsName` &mdash; (`String`)
 *         * `SourceDestCheck` &mdash; (`Boolean`)
 *         * `Groups` &mdash; (`Array<Object>`)
 *           * `GroupName` &mdash; (`String`)
 *           * `GroupId` &mdash; (`String`)
 *         * `Attachment` &mdash; (`Object`)
 *           * `AttachmentId` &mdash; (`String`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `InstanceOwnerId` &mdash; (`String`)
 *           * `DeviceIndex` &mdash; (`Integer`)
 *           * `Status` &mdash; (`String`)
 *           * `AttachTime` &mdash; (`Date`)
 *           * `DeleteOnTermination` &mdash; (`Boolean`)
 *         * `Association` &mdash; (`Object`)
 *           * `PublicIp` &mdash; (`String`)
 *           * `IpOwnerId` &mdash; (`String`)
 *           * `AllocationId` &mdash; (`String`)
 *           * `AssociationId` &mdash; (`String`)
 *         * `TagSet` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *           * `PrivateIpAddress` &mdash; (`String`)
 *           * `PrivateDnsName` &mdash; (`String`)
 *           * `Primary` &mdash; (`Boolean`)
 *           * `Association` &mdash; (`Object`)
 *             * `PublicIp` &mdash; (`String`)
 *             * `IpOwnerId` &mdash; (`String`)
 *             * `AllocationId` &mdash; (`String`)
 *             * `AssociationId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describePlacementGroups(params, callback)
 *   Calls the DescribePlacementGroups API operation.
 *   @param params [Object]
 *     * `GroupNames` &mdash; (`Array<String>`) The name of the
 *       PlacementGroup.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Placement Groups. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `PlacementGroups` &mdash; (`Array<Object>`) Contains information
 *         about the specified PlacementGroups.
 *         * `GroupName` &mdash; (`String`) The name of this
 *           PlacementGroup.
 *         * `Strategy` &mdash; (`String`) The strategy to use when
 *           allocating Amazon EC2 instances for the PlacementGroup.
 *         * `State` &mdash; (`String`) The state of this PlacementGroup.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRegions(params, callback)
 *   Calls the DescribeRegions API operation.
 *   @param params [Object]
 *     * `RegionNames` &mdash; (`Array<String>`) The optional list of
 *       regions to describe.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Regions. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Regions` &mdash; (`Array<Object>`) The list of described Amazon
 *         EC2 regions.
 *         * `RegionName` &mdash; (`String`) Name of the region.
 *         * `Endpoint` &mdash; (`String`) Region service endpoint.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedInstances(params, callback)
 *   Calls the DescribeReservedInstances API operation.
 *   @param params [Object]
 *     * `ReservedInstancesIds` &mdash; (`Array<String>`) The optional
 *       list of Reserved Instance IDs to describe.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for ReservedInstances. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
 *     * `OfferingType` &mdash; (`String`) The Reserved Instance offering
 *       type.
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
 *       * `ReservedInstances` &mdash; (`Array<Object>`) The list of
 *         described Reserved Instances.
 *         * `ReservedInstancesId` &mdash; (`String`) The unique ID of the
 *           Reserved Instances purchase.
 *         * `InstanceType` &mdash; (`String`) The instance type on which
 *           the Reserved Instances can be used.
 *         * `AvailabilityZone` &mdash; (`String`) The Availability Zone in
 *           which the Reserved Instances can be used.
 *         * `Start` &mdash; (`Date`) The date and time the Reserved
 *           Instances started.
 *         * `Duration` &mdash; (`Integer`) The duration of the Reserved
 *           Instances, in seconds.
 *         * `UsagePrice` &mdash; (`Float`) The usage price of the Reserved
 *           Instances, per hour.
 *         * `FixedPrice` &mdash; (`Float`) The purchase price of the
 *           Reserved Instances.
 *         * `InstanceCount` &mdash; (`Integer`) The number of Reserved
 *           Instances purchased.
 *         * `ProductDescription` &mdash; (`String`) The Reserved Instances
 *           product description (ex: Windows or Unix/Linux).
 *         * `State` &mdash; (`String`) The state of the Reserved Instances
 *           purchase.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           ReservedInstances.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `InstanceTenancy` &mdash; (`String`) The tenancy of the
 *           reserved instance (ex: default or dedicated).
 *         * `CurrencyCode` &mdash; (`String`) The currency of the reserved
 *           instance. Specified using ISO 4217 standard (e.g., USD, JPY).
 *         * `OfferingType` &mdash; (`String`) The Reserved Instance
 *           offering type.
 *         * `RecurringCharges` &mdash; (`Array<Object>`) The recurring
 *           charge tag assigned to the resource.
 *           * `Frequency` &mdash; (`String`) The frequency of the
 *             recurring charge.
 *           * `Amount` &mdash; (`Float`) The amount of the recurring
 *             charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedInstancesListings(params, callback)
 *   Calls the DescribeReservedInstancesListings API operation.
 *   @param params [Object]
 *     * `ReservedInstancesId` &mdash; (`String`)
 *     * `ReservedInstancesListingId` &mdash; (`String`)
 *     * `Filters` &mdash; (`Array<Object>`)
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `ReservedInstancesListings` &mdash; (`Array<Object>`)
 *         * `ReservedInstancesListingId` &mdash; (`String`)
 *         * `ReservedInstancesId` &mdash; (`String`)
 *         * `CreateDate` &mdash; (`Date`)
 *         * `UpdateDate` &mdash; (`Date`)
 *         * `Status` &mdash; (`String`)
 *         * `StatusMessage` &mdash; (`String`)
 *         * `InstanceCounts` &mdash; (`Array<Object>`)
 *           * `State` &mdash; (`String`)
 *           * `InstanceCount` &mdash; (`Integer`)
 *         * `PriceSchedules` &mdash; (`Array<Object>`)
 *           * `Term` &mdash; (`Integer`)
 *           * `Price` &mdash; (`Float`)
 *           * `CurrencyCode` &mdash; (`String`)
 *           * `Active` &mdash; (`Boolean`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `ClientToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedInstancesOfferings(params, callback)
 *   Calls the DescribeReservedInstancesOfferings API operation.
 *   @param params [Object]
 *     * `ReservedInstancesOfferingIds` &mdash; (`Array<String>`) An
 *       optional list of the unique IDs of the Reserved Instance
 *       offerings to describe.
 *     * `InstanceType` &mdash; (`String`) The instance type on which the
 *       Reserved Instance can be used.
 *     * `AvailabilityZone` &mdash; (`String`) The Availability Zone in
 *       which the Reserved Instance can be used.
 *     * `ProductDescription` &mdash; (`String`) The Reserved Instance
 *       product description.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for ReservedInstancesOfferings. For a complete
 *       reference to the available filter keys for this operation, see
 *       the Amazon EC2 API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
 *     * `InstanceTenancy` &mdash; (`String`) The tenancy of the Reserved
 *       Instance offering. A Reserved Instance with tenancy of dedicated
 *       will run on single-tenant hardware and can only be launched
 *       within a VPC.
 *     * `OfferingType` &mdash; (`String`) The Reserved Instance offering
 *       type.
 *     * `NextToken` &mdash; (`String`)
 *     * `MaxResults` &mdash; (`Integer`)
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
 *       * `ReservedInstancesOfferings` &mdash; (`Array<Object>`) The list
 *         of described Reserved Instance offerings.
 *         * `ReservedInstancesOfferingId` &mdash; (`String`) The unique ID
 *           of this Reserved Instances offering.
 *         * `InstanceType` &mdash; (`String`) The instance type on which
 *           the Reserved Instances can be used.
 *         * `AvailabilityZone` &mdash; (`String`) The Availability Zone in
 *           which the Reserved Instances can be used.
 *         * `Duration` &mdash; (`Integer`) The duration of the Reserved
 *           Instance, in seconds.
 *         * `UsagePrice` &mdash; (`Float`) The usage price of the Reserved
 *           Instance, per hour.
 *         * `FixedPrice` &mdash; (`Float`) The purchase price of the
 *           Reserved Instance.
 *         * `ProductDescription` &mdash; (`String`) The Reserved Instances
 *           description (ex: Windows or Unix/Linux).
 *         * `InstanceTenancy` &mdash; (`String`) The tenancy of the
 *           reserved instance (ex: default or dedicated).
 *         * `CurrencyCode` &mdash; (`String`) The currency of the reserved
 *           instance. Specified using ISO 4217 standard (e.g., USD, JPY).
 *         * `OfferingType` &mdash; (`String`) The Reserved Instance
 *           offering type.
 *         * `RecurringCharges` &mdash; (`Array<Object>`) The recurring
 *           charge tag assigned to the resource.
 *           * `Frequency` &mdash; (`String`) The frequency of the
 *             recurring charge.
 *           * `Amount` &mdash; (`Float`) The amount of the recurring
 *             charge.
 *         * `Marketplace` &mdash; (`Boolean`)
 *         * `PricingDetails` &mdash; (`Array<Object>`)
 *           * `Price` &mdash; (`Float`)
 *           * `Count` &mdash; (`Integer`)
 *       * `NextToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRouteTables(params, callback)
 *   Calls the DescribeRouteTables API operation.
 *   @param params [Object]
 *     * `RouteTableIds` &mdash; (`Array<String>`) One or more route
 *       table IDs.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Route Tables. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `RouteTables` &mdash; (`Array<Object>`)
 *         * `RouteTableId` &mdash; (`String`)
 *         * `VpcId` &mdash; (`String`)
 *         * `Routes` &mdash; (`Array<Object>`)
 *           * `DestinationCidrBlock` &mdash; (`String`)
 *           * `GatewayId` &mdash; (`String`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `InstanceOwnerId` &mdash; (`String`)
 *           * `NetworkInterfaceId` &mdash; (`String`)
 *           * `State` &mdash; (`String`)
 *         * `Associations` &mdash; (`Array<Object>`)
 *           * `RouteTableAssociationId` &mdash; (`String`)
 *           * `RouteTableId` &mdash; (`String`)
 *           * `SubnetId` &mdash; (`String`)
 *           * `Main` &mdash; (`Boolean`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `PropagatingVgws` &mdash; (`Array<Object>`)
 *           * `GatewayId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSecurityGroups(params, callback)
 *   Calls the DescribeSecurityGroups API operation.
 *   @param params [Object]
 *     * `GroupNames` &mdash; (`Array<String>`) The optional list of
 *       Amazon EC2 security groups to describe.
 *     * `GroupIds` &mdash; (`Array<String>`)
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for SecurityGroups. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `SecurityGroups` &mdash; (`Array<Object>`) The list of described
 *         Amazon EC2 security groups.
 *         * `OwnerId` &mdash; (`String`) The AWS Access Key ID of the
 *           owner of the security group.
 *         * `GroupName` &mdash; (`String`) The name of this security
 *           group.
 *         * `GroupId` &mdash; (`String`)
 *         * `Description` &mdash; (`String`) The description of this
 *           security group.
 *         * `IpPermissions` &mdash; (`Array<Object>`) The permissions
 *           enabled for this security group.
 *           * `IpProtocol` &mdash; (`String`) The IP protocol of this
 *             permission. Valid protocol values: tcp, udp, icmp
 *           * `FromPort` &mdash; (`Integer`) Start of port range for the
 *             TCP and UDP protocols, or an ICMP type number. An ICMP type
 *             number of -1 indicates a wildcard (i.e., any ICMP type
 *             number).
 *           * `ToPort` &mdash; (`Integer`) End of port range for the TCP
 *             and UDP protocols, or an ICMP code. An ICMP code of -1
 *             indicates a wildcard (i.e., any ICMP code).
 *           * `UserIdGroupPairs` &mdash; (`Array<Object>`) The list of AWS
 *             user IDs and groups included in this permission.
 *             * `UserId` &mdash; (`String`) The AWS user ID of an account.
 *             * `GroupName` &mdash; (`String`) Name of the security group
 *               in the specified AWS account. Cannot be used when
 *               specifying a CIDR IP address range.
 *             * `GroupId` &mdash; (`String`) ID of the security group in
 *               the specified AWS account. Cannot be used when specifying
 *               a CIDR IP address range.
 *           * `IpRanges` &mdash; (`Array<Object>`) The list of CIDR IP
 *             ranges included in this permission.
 *             * `CidrIp` &mdash; (`String`) The list of CIDR IP ranges.
 *         * `IpPermissionsEgress` &mdash; (`Array<Object>`)
 *           * `IpProtocol` &mdash; (`String`) The IP protocol of this
 *             permission. Valid protocol values: tcp, udp, icmp
 *           * `FromPort` &mdash; (`Integer`) Start of port range for the
 *             TCP and UDP protocols, or an ICMP type number. An ICMP type
 *             number of -1 indicates a wildcard (i.e., any ICMP type
 *             number).
 *           * `ToPort` &mdash; (`Integer`) End of port range for the TCP
 *             and UDP protocols, or an ICMP code. An ICMP code of -1
 *             indicates a wildcard (i.e., any ICMP code).
 *           * `UserIdGroupPairs` &mdash; (`Array<Object>`) The list of AWS
 *             user IDs and groups included in this permission.
 *             * `UserId` &mdash; (`String`) The AWS user ID of an account.
 *             * `GroupName` &mdash; (`String`) Name of the security group
 *               in the specified AWS account. Cannot be used when
 *               specifying a CIDR IP address range.
 *             * `GroupId` &mdash; (`String`) ID of the security group in
 *               the specified AWS account. Cannot be used when specifying
 *               a CIDR IP address range.
 *           * `IpRanges` &mdash; (`Array<Object>`) The list of CIDR IP
 *             ranges included in this permission.
 *             * `CidrIp` &mdash; (`String`) The list of CIDR IP ranges.
 *         * `VpcId` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSnapshotAttribute(params, callback)
 *   Calls the DescribeSnapshotAttribute API operation.
 *   @param params [Object]
 *     * `SnapshotId` &mdash; **required** &mdash; (`String`) The ID of
 *       the EBS snapshot whose attribute is being described.
 *     * `Attribute` &mdash; **required** &mdash; (`String`) The name of
 *       the EBS attribute to describe. Available attribute names:
 *       createVolumePermission
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
 *       * `SnapshotId` &mdash; (`String`) The ID of the snapshot whose
 *         attribute is being described.
 *       * `CreateVolumePermissions` &mdash; (`Array<Object>`) The list of
 *         permissions describing who can create a volume from the
 *         associated EBS snapshot. Only available if the
 *         createVolumePermission attribute is requested.
 *         * `UserId` &mdash; (`String`) The user ID of the user that can
 *           create volumes from the snapshot.
 *         * `Group` &mdash; (`String`) The group that is allowed to create
 *           volumes from the snapshot (currently supports "all").
 *       * `ProductCodes` &mdash; (`Array<Object>`)
 *         * `ProductCodeId` &mdash; (`String`) The unique ID of an AWS
 *           DevPay product code.
 *         * `ProductCodeType` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSnapshots(params, callback)
 *   Calls the DescribeSnapshots API operation.
 *   @param params [Object]
 *     * `SnapshotIds` &mdash; (`Array<String>`) The optional list of EBS
 *       snapshot IDs to describe.
 *     * `OwnerIds` &mdash; (`Array<String>`) The optional list of EBS
 *       snapshot owners.
 *     * `RestorableByUserIds` &mdash; (`Array<String>`) The optional
 *       list of users who have permission to create volumes from the
 *       described EBS snapshots.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Snapshots. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Snapshots` &mdash; (`Array<Object>`) The list of described EBS
 *         snapshots.
 *         * `SnapshotId` &mdash; (`String`) The unique ID of this
 *           snapshot.
 *         * `VolumeId` &mdash; (`String`) The ID of the volume from which
 *           this snapshot was created.
 *         * `State` &mdash; (`String`) Snapshot state (e.g., pending,
 *           completed, or error).
 *         * `StartTime` &mdash; (`Date`) Time stamp when the snapshot was
 *           initiated.
 *         * `Progress` &mdash; (`String`) The progress of the snapshot, in
 *           percentage.
 *         * `OwnerId` &mdash; (`String`) AWS Access Key ID of the user who
 *           owns the snapshot.
 *         * `Description` &mdash; (`String`) Description of the snapshot.
 *         * `VolumeSize` &mdash; (`Integer`) The size of the volume, in
 *           gigabytes.
 *         * `OwnerAlias` &mdash; (`String`) The AWS account alias (e.g.,
 *           "amazon", "redhat", "self", etc.) or AWS account ID that owns
 *           the AMI.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           Snapshot.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSpotDatafeedSubscription(params, callback)
 *   Calls the DescribeSpotDatafeedSubscription API operation.
 *   @param params [Object]
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
 *       * `SpotDatafeedSubscription` &mdash; (`Object`) The Spot Instance
 *         datafeed subscription.
 *         * `OwnerId` &mdash; (`String`) Specifies the AWS account ID of
 *           the account.
 *         * `Bucket` &mdash; (`String`) Specifies the Amazon S3 bucket
 *           where the Spot Instance data feed is located.
 *         * `Prefix` &mdash; (`String`) Contains the prefix that is
 *           prepended to data feed files.
 *         * `State` &mdash; (`String`) Specifies the state of the Spot
 *           Instance request.
 *         * `Fault` &mdash; (`Object`) Specifies a fault code for the Spot
 *           Instance request, if present.
 *           * `Code` &mdash; (`String`)
 *           * `Message` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSpotInstanceRequests(params, callback)
 *   Calls the DescribeSpotInstanceRequests API operation.
 *   @param params [Object]
 *     * `SpotInstanceRequestIds` &mdash; (`Array<String>`) The ID of the
 *       request.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for SpotInstances. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `SpotInstanceRequests` &mdash; (`Array<Object>`)
 *         * `SpotInstanceRequestId` &mdash; (`String`)
 *         * `SpotPrice` &mdash; (`String`)
 *         * `Type` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *         * `Fault` &mdash; (`Object`)
 *           * `Code` &mdash; (`String`)
 *           * `Message` &mdash; (`String`)
 *         * `Status` &mdash; (`Object`)
 *           * `Code` &mdash; (`String`)
 *           * `UpdateTime` &mdash; (`Date`)
 *           * `Message` &mdash; (`String`)
 *         * `ValidFrom` &mdash; (`Date`)
 *         * `ValidUntil` &mdash; (`Date`)
 *         * `LaunchGroup` &mdash; (`String`)
 *         * `AvailabilityZoneGroup` &mdash; (`String`)
 *         * `LaunchSpecification` &mdash; (`Object`)
 *           * `ImageId` &mdash; (`String`) The AMI ID.
 *           * `KeyName` &mdash; (`String`) The name of the key pair.
 *           * `SecurityGroups` &mdash; (`Array<Object>`)
 *             * `GroupName` &mdash; (`String`)
 *             * `GroupId` &mdash; (`String`)
 *           * `UserData` &mdash; (`String`) Optional data, specific to a
 *             user's application, to provide in the launch request. All
 *             instances that collectively comprise the launch request have
 *             access to this data. User data is never returned through API
 *             responses.
 *           * `AddressingType` &mdash; (`String`) Deprecated.
 *           * `InstanceType` &mdash; (`String`) Specifies the instance
 *             type.
 *           * `Placement` &mdash; (`Object`) Defines a placement item.
 *             * `AvailabilityZone` &mdash; (`String`) The availability
 *               zone in which an Amazon EC2 instance runs.
 *             * `GroupName` &mdash; (`String`) The name of the
 *               PlacementGroup in which an Amazon EC2 instance runs.
 *               Placement groups are primarily used for launching High
 *               Performance Computing instances in the same group to
 *               ensure fast connection speeds.
 *           * `KernelId` &mdash; (`String`) Specifies the ID of the kernel
 *             to select.
 *           * `RamdiskId` &mdash; (`String`) Specifies the ID of the RAM
 *             disk to select. Some kernels require additional drivers at
 *             launch. Check the kernel requirements for information on
 *             whether or not you need to specify a RAM disk and search for
 *             the kernel ID.
 *           * `BlockDeviceMappings` &mdash; (`Array<Object>`) Specifies
 *             how block devices are exposed to the instance. Each mapping
 *             is made up of a virtualName and a deviceName.
 *             * `VirtualName` &mdash; (`String`) Specifies the virtual
 *               device name.
 *             * `DeviceName` &mdash; (`String`) Specifies the device name
 *               (e.g., /dev/sdh).
 *             * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *               automatically setup Amazon EBS volumes when the instance
 *               is launched.
 *               * `SnapshotId` &mdash; (`String`) The ID of the snapshot
 *                 from which the volume will be created.
 *               * `VolumeSize` &mdash; (`Integer`) The size of the volume,
 *                 in gigabytes.
 *               * `DeleteOnTermination` &mdash; (`Boolean`) Specifies
 *                 whether the Amazon EBS volume is deleted on instance
 *                 termination.
 *               * `VolumeType` &mdash; (`String`)
 *               * `Iops` &mdash; (`Integer`)
 *             * `NoDevice` &mdash; (`String`) Specifies the device name to
 *               suppress during instance launch.
 *           * `MonitoringEnabled` &mdash; (`Boolean`) Enables monitoring
 *             for the instance.
 *           * `SubnetId` &mdash; (`String`) Specifies the Amazon VPC
 *             subnet ID within which to launch the instance(s) for Amazon
 *             Virtual Private Cloud.
 *           * `NetworkInterfaces` &mdash; (`Array<Object>`)
 *             * `NetworkInterfaceId` &mdash; (`String`)
 *             * `DeviceIndex` &mdash; (`Integer`)
 *             * `SubnetId` &mdash; (`String`)
 *             * `Description` &mdash; (`String`)
 *             * `PrivateIpAddress` &mdash; (`String`)
 *             * `Groups` &mdash; (`Array<String>`)
 *             * `DeleteOnTermination` &mdash; (`Boolean`)
 *             * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *               * `PrivateIpAddress` &mdash; (`String`)
 *               * `Primary` &mdash; (`Boolean`)
 *             * `SecondaryPrivateIpAddressCount` &mdash; (`Integer`)
 *           * `IamInstanceProfile` &mdash; (`Object`)
 *             * `Arn` &mdash; (`String`)
 *             * `Name` &mdash; (`String`)
 *           * `EbsOptimized` &mdash; (`Boolean`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `CreateTime` &mdash; (`Date`)
 *         * `ProductDescription` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for this spot
 *           instance request.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `LaunchedAvailabilityZone` &mdash; (`String`) The Availability
 *           Zone in which the bid is launched.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSpotPriceHistory(params, callback)
 *   Calls the DescribeSpotPriceHistory API operation.
 *   @param params [Object]
 *     * `StartTime` &mdash; (`Date`) The start date and time of the Spot
 *       Instance price history data.
 *     * `EndTime` &mdash; (`Date`) The end date and time of the Spot
 *       Instance price history data.
 *     * `InstanceTypes` &mdash; (`Array<String>`) Specifies the instance
 *       type to return.
 *     * `ProductDescriptions` &mdash; (`Array<String>`) The description
 *       of the AMI.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for SpotPriceHistory. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
 *     * `AvailabilityZone` &mdash; (`String`) Filters the results by
 *       availability zone (ex: 'us-east-1a').
 *     * `MaxResults` &mdash; (`Integer`) Specifies the number of rows to
 *       return.
 *     * `NextToken` &mdash; (`String`) Specifies the next set of rows to
 *       return.
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
 *       * `SpotPriceHistory` &mdash; (`Array<Object>`)
 *         * `InstanceType` &mdash; (`String`)
 *         * `ProductDescription` &mdash; (`String`)
 *         * `SpotPrice` &mdash; (`String`)
 *         * `Timestamp` &mdash; (`Date`)
 *         * `AvailabilityZone` &mdash; (`String`)
 *       * `NextToken` &mdash; (`String`) The string marking the next set
 *         of results returned. Displays empty if there are no more results
 *         to be returned.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSubnets(params, callback)
 *   Calls the DescribeSubnets API operation.
 *   @param params [Object]
 *     * `SubnetIds` &mdash; (`Array<String>`) A set of one or more
 *       subnet IDs.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Subnets. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Subnets` &mdash; (`Array<Object>`) Contains a set of one or
 *         more Subnet instances.
 *         * `SubnetId` &mdash; (`String`) Specifies the ID of the subnet.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           subnet. The state of the subnet may be either pending or
 *           available.
 *         * `VpcId` &mdash; (`String`) Contains the ID of the VPC the
 *           subnet is in.
 *         * `CidrBlock` &mdash; (`String`) Specifies the CIDR block
 *           assigned to the subnet.
 *         * `AvailableIpAddressCount` &mdash; (`Integer`) Specifies the
 *           number of unused IP addresses in the subnet. The IP addresses
 *           for any stopped instances are considered unavailable.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the
 *           Availability Zone the subnet is in.
 *         * `DefaultForAz` &mdash; (`Boolean`)
 *         * `MapPublicIpOnLaunch` &mdash; (`Boolean`)
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           Subnet.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTags(params, callback)
 *   Calls the DescribeTags API operation.
 *   @param params [Object]
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for tags.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Tags` &mdash; (`Array<Object>`) A list of the tags for the
 *         specified resources.
 *         * `ResourceId` &mdash; (`String`) The resource ID for the tag.
 *         * `ResourceType` &mdash; (`String`) The type of resource
 *           identified by the associated resource ID (ex: instance, AMI,
 *           EBS volume, etc).
 *         * `Key` &mdash; (`String`) The tag's key.
 *         * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumeAttribute(params, callback)
 *   Calls the DescribeVolumeAttribute API operation.
 *   @param params [Object]
 *     * `VolumeId` &mdash; **required** &mdash; (`String`)
 *     * `Attribute` &mdash; (`String`)
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
 *       * `VolumeId` &mdash; (`String`)
 *       * `AutoEnableIO` &mdash; (`Object`)
 *         * `Value` &mdash; (`Boolean`) Boolean value
 *       * `ProductCodes` &mdash; (`Array<Object>`)
 *         * `ProductCodeId` &mdash; (`String`) The unique ID of an AWS
 *           DevPay product code.
 *         * `ProductCodeType` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumeStatus(params, callback)
 *   Calls the DescribeVolumeStatus API operation.
 *   @param params [Object]
 *     * `VolumeIds` &mdash; (`Array<String>`)
 *     * `Filters` &mdash; (`Array<Object>`)
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
 *     * `NextToken` &mdash; (`String`)
 *     * `MaxResults` &mdash; (`Integer`)
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
 *       * `VolumeStatuses` &mdash; (`Array<Object>`)
 *         * `VolumeId` &mdash; (`String`)
 *         * `AvailabilityZone` &mdash; (`String`)
 *         * `VolumeStatus` &mdash; (`Object`)
 *           * `Status` &mdash; (`String`)
 *           * `Details` &mdash; (`Array<Object>`)
 *             * `Name` &mdash; (`String`)
 *             * `Status` &mdash; (`String`)
 *         * `Events` &mdash; (`Array<Object>`)
 *           * `EventType` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *           * `NotBefore` &mdash; (`Date`)
 *           * `NotAfter` &mdash; (`Date`)
 *           * `EventId` &mdash; (`String`)
 *         * `Actions` &mdash; (`Array<Object>`)
 *           * `Code` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *           * `EventType` &mdash; (`String`)
 *           * `EventId` &mdash; (`String`)
 *       * `NextToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumes(params, callback)
 *   Calls the DescribeVolumes API operation.
 *   @param params [Object]
 *     * `VolumeIds` &mdash; (`Array<String>`) The optional list of EBS
 *       volumes to describe.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for Volumes. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Volumes` &mdash; (`Array<Object>`) The list of described EBS
 *         volumes.
 *         * `VolumeId` &mdash; (`String`) The unique ID of this volume.
 *         * `Size` &mdash; (`Integer`) The size of this volume, in
 *           gigabytes.
 *         * `SnapshotId` &mdash; (`String`) Optional snapshot from which
 *           this volume was created.
 *         * `AvailabilityZone` &mdash; (`String`) Availability zone in
 *           which this volume was created.
 *         * `State` &mdash; (`String`) State of this volume (e.g.,
 *           creating, available).
 *         * `CreateTime` &mdash; (`Date`) Timestamp when volume creation
 *           was initiated.
 *         * `Attachments` &mdash; (`Array<Object>`) Information on what
 *           this volume is attached to.
 *           * `VolumeId` &mdash; (`String`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `Device` &mdash; (`String`) How the device is exposed to the
 *             instance (e.g., /dev/sdh).
 *           * `State` &mdash; (`String`)
 *           * `AttachTime` &mdash; (`Date`) Timestamp when this attachment
 *             initiated.
 *           * `DeleteOnTermination` &mdash; (`Boolean`) ` Whether this
 *             volume will be deleted or not when the associated instance
 *             is terminated.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           Volume.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `VolumeType` &mdash; (`String`)
 *         * `Iops` &mdash; (`Integer`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVpcAttribute(params, callback)
 *   Calls the DescribeVpcAttribute API operation.
 *   @param params [Object]
 *     * `VpcId` &mdash; **required** &mdash; (`String`)
 *     * `Attribute` &mdash; (`String`)
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
 *       * `VpcId` &mdash; (`String`)
 *       * `EnableDnsSupport` &mdash; (`Object`)
 *         * `Value` &mdash; (`Boolean`) Boolean value
 *       * `EnableDnsHostnames` &mdash; (`Object`)
 *         * `Value` &mdash; (`Boolean`) Boolean value
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVpcs(params, callback)
 *   Calls the DescribeVpcs API operation.
 *   @param params [Object]
 *     * `VpcIds` &mdash; (`Array<String>`) The ID of a VPC you want
 *       information about.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for VPCs. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `Vpcs` &mdash; (`Array<Object>`)
 *         * `VpcId` &mdash; (`String`) Specifies the ID of the VPC.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           VPC. The state of the subnet may be either pending or
 *           available.
 *         * `CidrBlock` &mdash; (`String`) Specifies the CIDR block the
 *           VPC covers.
 *         * `DhcpOptionsId` &mdash; (`String`) Specifies the ID of the set
 *           of DHCP options associated with the VPC. Contains a value of
 *           default if the default options are associated with the VPC.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the VPC.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `InstanceTenancy` &mdash; (`String`) The allowed tenancy of
 *           instances launched into the VPC.
 *         * `IsDefault` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVpnConnections(params, callback)
 *   Calls the DescribeVpnConnections API operation.
 *   @param params [Object]
 *     * `VpnConnectionIds` &mdash; (`Array<String>`) A VPN connection
 *       ID. More than one may be specified per request.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for VPN Connections. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `VpnConnections` &mdash; (`Array<Object>`)
 *         * `VpnConnectionId` &mdash; (`String`) Specifies the ID of the
 *           VPN gateway at the VPC end of the VPN connection.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           VPN connection. Valid values are pending, available, deleting,
 *           and deleted.
 *         * `CustomerGatewayConfiguration` &mdash; (`String`) Contains
 *           configuration information in the native XML format for the VPN
 *           connection's customer gateway. This element is always present
 *           in the CreateVpnConnection response; however, it's present in
 *           the DescribeVpnConnections response only if the VPN connection
 *           is in the pending or available state.
 *         * `Type` &mdash; (`String`) Specifies the type of VPN
 *           connection.
 *         * `CustomerGatewayId` &mdash; (`String`) Specifies ID of the
 *           customer gateway at the end of the VPN connection.
 *         * `VpnGatewayId` &mdash; (`String`) Specfies the ID of the VPN
 *           gateway at the VPC end of the VPN connection.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           VpnConnection.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `VgwTelemetry` &mdash; (`Array<Object>`)
 *           * `OutsideIpAddress` &mdash; (`String`)
 *           * `Status` &mdash; (`String`)
 *           * `LastStatusChange` &mdash; (`Date`)
 *           * `StatusMessage` &mdash; (`String`)
 *           * `AcceptedRouteCount` &mdash; (`Integer`)
 *         * `Options` &mdash; (`Object`)
 *           * `StaticRoutesOnly` &mdash; (`Boolean`)
 *         * `Routes` &mdash; (`Array<Object>`)
 *           * `DestinationCidrBlock` &mdash; (`String`)
 *           * `Source` &mdash; (`String`)
 *           * `State` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVpnGateways(params, callback)
 *   Calls the DescribeVpnGateways API operation.
 *   @param params [Object]
 *     * `VpnGatewayIds` &mdash; (`Array<String>`) A list of filters used
 *       to match properties for VPN Gateways. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *     * `Filters` &mdash; (`Array<Object>`) A list of filters used to
 *       match properties for VPN Gateways. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * `Name` &mdash; (`String`) Specifies the name of the filter.
 *       * `Values` &mdash; (`Array<String>`) Contains one or more values
 *         for the filter.
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
 *       * `VpnGateways` &mdash; (`Array<Object>`)
 *         * `VpnGatewayId` &mdash; (`String`) Specifies the ID of the VPN
 *           gateway.
 *         * `State` &mdash; (`String`) Describes the current state of the
 *           VPN gateway. Valid values are pending, available, deleting,
 *           and deleted.
 *         * `Type` &mdash; (`String`) Specifies the type of VPN connection
 *           the VPN gateway supports.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the
 *           Availability Zone where the VPN gateway was created.
 *         * `VpcAttachments` &mdash; (`Array<Object>`) Contains
 *           information about the VPCs attached to the VPN gateway.
 *           * `VpcId` &mdash; (`String`)
 *           * `State` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           VpnGateway.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method detachInternetGateway(params, callback)
 *   Calls the DetachInternetGateway API operation.
 *   @param params [Object]
 *     * `InternetGatewayId` &mdash; **required** &mdash; (`String`) The
 *       ID of the Internet gateway to detach.
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC.
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
 * @!method detachNetworkInterface(params, callback)
 *   Calls the DetachNetworkInterface API operation.
 *   @param params [Object]
 *     * `AttachmentId` &mdash; **required** &mdash; (`String`)
 *     * `Force` &mdash; (`Boolean`)
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
 * @!method detachVolume(params, callback)
 *   Calls the DetachVolume API operation.
 *   @param params [Object]
 *     * `VolumeId` &mdash; **required** &mdash; (`String`) The ID of the
 *       volume to detach.
 *     * `InstanceId` &mdash; (`String`) The ID of the instance from
 *       which to detach the the specified volume.
 *     * `Device` &mdash; (`String`) The device name to which the volume
 *       is attached on the specified instance.
 *     * `Force` &mdash; (`Boolean`) Forces detachment if the previous
 *       detachment attempt did not occur cleanly (logging into an
 *       instance, unmounting the volume, and detaching normally). This
 *       option can lead to data loss or a corrupted file system. Use
 *       this option only as a last resort to detach a volume from a
 *       failed instance. The instance will not have an opportunity to
 *       flush file system caches nor file system meta data. If you use
 *       this option, you must perform file system check and repair
 *       procedures.
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
 *       * `VolumeId` &mdash; (`String`)
 *       * `InstanceId` &mdash; (`String`)
 *       * `Device` &mdash; (`String`) How the device is exposed to the
 *         instance (e.g., /dev/sdh).
 *       * `State` &mdash; (`String`)
 *       * `AttachTime` &mdash; (`Date`) Timestamp when this attachment
 *         initiated.
 *       * `DeleteOnTermination` &mdash; (`Boolean`) ` Whether this volume
 *         will be deleted or not when the associated instance is
 *         terminated.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method detachVpnGateway(params, callback)
 *   Calls the DetachVpnGateway API operation.
 *   @param params [Object]
 *     * `VpnGatewayId` &mdash; **required** &mdash; (`String`) The ID of
 *       the VPN gateway to detach from the VPC.
 *     * `VpcId` &mdash; **required** &mdash; (`String`) The ID of the
 *       VPC to detach the VPN gateway from.
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
 * @!method disableVgwRoutePropagation(params, callback)
 *   Calls the DisableVgwRoutePropagation API operation.
 *   @param params [Object]
 *     * `RouteTableId` &mdash; **required** &mdash; (`String`)
 *     * `GatewayId` &mdash; **required** &mdash; (`String`)
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
 * @!method disassociateAddress(params, callback)
 *   Calls the DisassociateAddress API operation.
 *   @param params [Object]
 *     * `PublicIp` &mdash; (`String`) The elastic IP address that you
 *       are disassociating from the instance.
 *     * `AssociationId` &mdash; (`String`) Association ID corresponding
 *       to the VPC elastic IP address you want to disassociate.
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
 * @!method disassociateRouteTable(params, callback)
 *   Calls the DisassociateRouteTable API operation.
 *   @param params [Object]
 *     * `AssociationId` &mdash; **required** &mdash; (`String`) The
 *       association ID representing the current association between the
 *       route table and subnet.
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
 * @!method enableVgwRoutePropagation(params, callback)
 *   Calls the EnableVgwRoutePropagation API operation.
 *   @param params [Object]
 *     * `RouteTableId` &mdash; **required** &mdash; (`String`)
 *     * `GatewayId` &mdash; **required** &mdash; (`String`)
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
 * @!method enableVolumeIO(params, callback)
 *   Calls the EnableVolumeIO API operation.
 *   @param params [Object]
 *     * `VolumeId` &mdash; **required** &mdash; (`String`)
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
 * @!method getConsoleOutput(params, callback)
 *   Calls the GetConsoleOutput API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the instance for which you want console output.
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
 *       * `InstanceId` &mdash; (`String`) The ID of the instance whose
 *         console output was requested.
 *       * `Timestamp` &mdash; (`Date`) The time the output was last
 *         updated.
 *       * `Output` &mdash; (`String`) The console output, Base64 encoded.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getPasswordData(params, callback)
 *   Calls the GetPasswordData API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the instance for which you want the Windows administrator
 *       password.
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
 *       * `InstanceId` &mdash; (`String`) The ID of the instance whose
 *         Windows administrator password was requested.
 *       * `Timestamp` &mdash; (`Date`) The time the data was last updated.
 *       * `PasswordData` &mdash; (`String`) The Windows administrator
 *         password of the specified instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method importInstance(params, callback)
 *   Calls the ImportInstance API operation.
 *   @param params [Object]
 *     * `Description` &mdash; (`String`)
 *     * `LaunchSpecification` &mdash; (`Object`)
 *       * `Architecture` &mdash; (`String`)
 *       * `SecurityGroups` &mdash; (`Array<String>`)
 *       * `AdditionalInfo` &mdash; (`String`)
 *       * `UserData` &mdash; (`String`)
 *       * `InstanceType` &mdash; (`String`)
 *       * `Placement` &mdash; (`Object`)
 *         * `AvailabilityZone` &mdash; (`String`) The availability zone
 *           in which an Amazon EC2 instance runs.
 *         * `GroupName` &mdash; (`String`) The name of the
 *           PlacementGroup in which an Amazon EC2 instance runs.
 *           Placement groups are primarily used for launching High
 *           Performance Computing instances in the same group to ensure
 *           fast connection speeds.
 *         * `Tenancy` &mdash; (`String`) The allowed tenancy of
 *           instances launched into the VPC. A value of default means
 *           instances can be launched with any tenancy; a value of
 *           dedicated means all instances launched into the VPC will be
 *           launched as dedicated tenancy regardless of the tenancy
 *           assigned to the instance at launch.
 *       * `BlockDeviceMappings` &mdash; (`Array<Object>`)
 *         * `VirtualName` &mdash; (`String`) Specifies the virtual
 *           device name.
 *         * `DeviceName` &mdash; (`String`) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * `SnapshotId` &mdash; (`String`) The ID of the snapshot
 *             from which the volume will be created.
 *           * `VolumeSize` &mdash; (`Integer`) The size of the volume,
 *             in gigabytes.
 *           * `DeleteOnTermination` &mdash; (`Boolean`) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *           * `VolumeType` &mdash; (`String`)
 *           * `Iops` &mdash; (`Integer`)
 *         * `NoDevice` &mdash; (`String`) Specifies the device name to
 *           suppress during instance launch.
 *       * `Monitoring` &mdash; (`Boolean`)
 *       * `SubnetId` &mdash; (`String`)
 *       * `DisableApiTermination` &mdash; (`Boolean`)
 *       * `InstanceInitiatedShutdownBehavior` &mdash; (`String`)
 *       * `PrivateIpAddress` &mdash; (`String`)
 *     * `DiskImages` &mdash; (`Array<Object>`)
 *       * `Image` &mdash; (`Object`)
 *         * `Format` &mdash; **required** &mdash; (`String`)
 *         * `Bytes` &mdash; **required** &mdash; (`Integer`)
 *         * `ImportManifestUrl` &mdash; **required** &mdash; (`String`)
 *       * `Description` &mdash; (`String`)
 *       * `Volume` &mdash; (`Object`)
 *         * `Size` &mdash; **required** &mdash; (`Integer`)
 *     * `Platform` &mdash; **required** &mdash; (`String`)
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
 *       * `ConversionTask` &mdash; (`Object`)
 *         * `ConversionTaskId` &mdash; (`String`)
 *         * `ExpirationTime` &mdash; (`String`)
 *         * `ImportInstance` &mdash; (`Object`)
 *           * `Volumes` &mdash; (`Array<Object>`)
 *             * `BytesConverted` &mdash; (`Integer`)
 *             * `AvailabilityZone` &mdash; (`String`)
 *             * `Image` &mdash; (`Object`)
 *               * `Format` &mdash; (`String`)
 *               * `Size` &mdash; (`Integer`)
 *               * `ImportManifestUrl` &mdash; (`String`)
 *               * `Checksum` &mdash; (`String`)
 *             * `Volume` &mdash; (`Object`)
 *               * `Size` &mdash; (`Integer`)
 *               * `Id` &mdash; (`String`)
 *             * `Status` &mdash; (`String`)
 *             * `StatusMessage` &mdash; (`String`)
 *             * `Description` &mdash; (`String`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `Platform` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *         * `ImportVolume` &mdash; (`Object`)
 *           * `BytesConverted` &mdash; (`Integer`)
 *           * `AvailabilityZone` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *           * `Image` &mdash; (`Object`)
 *             * `Format` &mdash; (`String`)
 *             * `Size` &mdash; (`Integer`)
 *             * `ImportManifestUrl` &mdash; (`String`)
 *             * `Checksum` &mdash; (`String`)
 *           * `Volume` &mdash; (`Object`)
 *             * `Size` &mdash; (`Integer`)
 *             * `Id` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *         * `StatusMessage` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method importKeyPair(params, callback)
 *   Calls the ImportKeyPair API operation.
 *   @param params [Object]
 *     * `KeyName` &mdash; **required** &mdash; (`String`) The unique
 *       name for the key pair.
 *     * `PublicKeyMaterial` &mdash; **required** &mdash; (`String`) The
 *       public key portion of the key pair being imported.
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
 *       * `KeyName` &mdash; (`String`) The specified unique key pair name.
 *       * `KeyFingerprint` &mdash; (`String`) The MD5 public key
 *         fingerprint as specified in section 4 of RFC4716 .
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method importVolume(params, callback)
 *   Calls the ImportVolume API operation.
 *   @param params [Object]
 *     * `AvailabilityZone` &mdash; (`String`)
 *     * `Image` &mdash; (`Object`)
 *       * `Format` &mdash; **required** &mdash; (`String`)
 *       * `Bytes` &mdash; **required** &mdash; (`Integer`)
 *       * `ImportManifestUrl` &mdash; **required** &mdash; (`String`)
 *     * `Description` &mdash; (`String`)
 *     * `Volume` &mdash; (`Object`)
 *       * `Size` &mdash; **required** &mdash; (`Integer`)
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
 *       * `ConversionTask` &mdash; (`Object`)
 *         * `ConversionTaskId` &mdash; (`String`)
 *         * `ExpirationTime` &mdash; (`String`)
 *         * `ImportInstance` &mdash; (`Object`)
 *           * `Volumes` &mdash; (`Array<Object>`)
 *             * `BytesConverted` &mdash; (`Integer`)
 *             * `AvailabilityZone` &mdash; (`String`)
 *             * `Image` &mdash; (`Object`)
 *               * `Format` &mdash; (`String`)
 *               * `Size` &mdash; (`Integer`)
 *               * `ImportManifestUrl` &mdash; (`String`)
 *               * `Checksum` &mdash; (`String`)
 *             * `Volume` &mdash; (`Object`)
 *               * `Size` &mdash; (`Integer`)
 *               * `Id` &mdash; (`String`)
 *             * `Status` &mdash; (`String`)
 *             * `StatusMessage` &mdash; (`String`)
 *             * `Description` &mdash; (`String`)
 *           * `InstanceId` &mdash; (`String`)
 *           * `Platform` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *         * `ImportVolume` &mdash; (`Object`)
 *           * `BytesConverted` &mdash; (`Integer`)
 *           * `AvailabilityZone` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *           * `Image` &mdash; (`Object`)
 *             * `Format` &mdash; (`String`)
 *             * `Size` &mdash; (`Integer`)
 *             * `ImportManifestUrl` &mdash; (`String`)
 *             * `Checksum` &mdash; (`String`)
 *           * `Volume` &mdash; (`Object`)
 *             * `Size` &mdash; (`Integer`)
 *             * `Id` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *         * `StatusMessage` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`)
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyImageAttribute(params, callback)
 *   Calls the ModifyImageAttribute API operation.
 *   @param params [Object]
 *     * `ImageId` &mdash; **required** &mdash; (`String`) The ID of the
 *       AMI whose attribute you want to modify.
 *     * `Attribute` &mdash; (`String`) The name of the AMI attribute you
 *       want to modify. Available attributes: launchPermission,
 *       productCodes
 *     * `OperationType` &mdash; (`String`) The type of operation being
 *       requested. Available operation types: add, remove
 *     * `UserIds` &mdash; (`Array<String>`) The AWS user ID being added
 *       to or removed from the list of users with launch permissions for
 *       this AMI. Only valid when the launchPermission attribute is
 *       being modified.
 *     * `UserGroups` &mdash; (`Array<String>`) The user group being
 *       added to or removed from the list of user groups with launch
 *       permissions for this AMI. Only valid when the launchPermission
 *       attribute is being modified. Available user groups: all
 *     * `ProductCodes` &mdash; (`Array<String>`) The list of product
 *       codes being added to or removed from the specified AMI. Only
 *       valid when the productCodes attribute is being modified.
 *     * `Value` &mdash; (`String`) The value of the attribute being
 *       modified. Only valid when the description attribute is being
 *       modified.
 *     * `LaunchPermission` &mdash; (`Object`)
 *       * `Add` &mdash; (`Array<Object>`)
 *         * `UserId` &mdash; (`String`) The AWS user ID of the user
 *           involved in this launch permission.
 *         * `Group` &mdash; (`String`) The AWS group of the user
 *           involved in this launch permission. Available groups: all
 *       * `Remove` &mdash; (`Array<Object>`)
 *         * `UserId` &mdash; (`String`) The AWS user ID of the user
 *           involved in this launch permission.
 *         * `Group` &mdash; (`String`) The AWS group of the user
 *           involved in this launch permission. Available groups: all
 *     * `Description` &mdash; (`Object`)
 *       * `Value` &mdash; (`String`) String value
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
 * @!method modifyInstanceAttribute(params, callback)
 *   Calls the ModifyInstanceAttribute API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the instance whose attribute is being modified.
 *     * `Attribute` &mdash; (`String`) The name of the attribute being
 *       modified. Available attribute names: instanceType, kernel,
 *       ramdisk, userData, disableApiTermination,
 *       instanceInitiatedShutdownBehavior, rootDevice,
 *       blockDeviceMapping
 *     * `Value` &mdash; (`String`) The new value of the instance
 *       attribute being modified. Only valid when kernel, ramdisk,
 *       userData, disableApiTermination or
 *       instanceInitiateShutdownBehavior is specified as the attribute
 *       being modified.
 *     * `BlockDeviceMappings` &mdash; (`Array<Object>`) The new block
 *       device mappings for the instance whose attributes are being
 *       modified. Only valid when blockDeviceMapping is specified as the
 *       attribute being modified.
 *       * `DeviceName` &mdash; (`String`) The device name (e.g.,
 *         /dev/sdh) at which the block device is exposed on the
 *         instance.
 *       * `Ebs` &mdash; (`Object`) The EBS instance block device
 *         specification describing the EBS block device to map to the
 *         specified device name on a running instance.
 *         * `VolumeId` &mdash; (`String`) The ID of the EBS volume that
 *           should be mounted as a block device on an Amazon EC2
 *           instance.
 *         * `DeleteOnTermination` &mdash; (`Boolean`) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *       * `VirtualName` &mdash; (`String`) The virtual device name.
 *       * `NoDevice` &mdash; (`String`) When set to the empty string,
 *         specifies that the device name in this object should not be
 *         mapped to any real device.
 *     * `SourceDestCheck` &mdash; (`Object`)
 *       * `Value` &mdash; (`Boolean`) Boolean value
 *     * `DisableApiTermination` &mdash; (`Object`)
 *       * `Value` &mdash; (`Boolean`) Boolean value
 *     * `InstanceType` &mdash; (`Object`)
 *       * `Value` &mdash; (`String`) String value
 *     * `Kernel` &mdash; (`Object`)
 *       * `Value` &mdash; (`String`) String value
 *     * `Ramdisk` &mdash; (`Object`)
 *       * `Value` &mdash; (`String`) String value
 *     * `UserData` &mdash; (`Object`)
 *       * `Value` &mdash; (`String`) String value
 *     * `InstanceInitiatedShutdownBehavior` &mdash; (`Object`)
 *       * `Value` &mdash; (`String`) String value
 *     * `Groups` &mdash; (`Array<String>`)
 *     * `EbsOptimized` &mdash; (`Object`)
 *       * `Value` &mdash; (`Boolean`) Boolean value
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
 * @!method modifyNetworkInterfaceAttribute(params, callback)
 *   Calls the ModifyNetworkInterfaceAttribute API operation.
 *   @param params [Object]
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`)
 *     * `Description` &mdash; (`Object`)
 *       * `Value` &mdash; (`String`) String value
 *     * `SourceDestCheck` &mdash; (`Object`)
 *       * `Value` &mdash; (`Boolean`) Boolean value
 *     * `Groups` &mdash; (`Array<String>`)
 *     * `Attachment` &mdash; (`Object`)
 *       * `AttachmentId` &mdash; (`String`)
 *       * `DeleteOnTermination` &mdash; (`Boolean`)
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
 * @!method modifySnapshotAttribute(params, callback)
 *   Calls the ModifySnapshotAttribute API operation.
 *   @param params [Object]
 *     * `SnapshotId` &mdash; **required** &mdash; (`String`) The ID of
 *       the EBS snapshot whose attributes are being modified.
 *     * `Attribute` &mdash; (`String`) The name of the attribute being
 *       modified. Available attribute names: createVolumePermission
 *     * `OperationType` &mdash; (`String`) The operation to perform on
 *       the attribute. Available operation names: add, remove
 *     * `UserIds` &mdash; (`Array<String>`) The AWS user IDs to add to
 *       or remove from the list of users that have permission to create
 *       EBS volumes from the specified snapshot. Currently supports
 *       "all". Only valid when the createVolumePermission attribute is
 *       being modified.
 *     * `GroupNames` &mdash; (`Array<String>`) The AWS group names to
 *       add to or remove from the list of groups that have permission to
 *       create EBS volumes from the specified snapshot. Currently
 *       supports "all". Only valid when the createVolumePermission
 *       attribute is being modified.
 *     * `CreateVolumePermission` &mdash; (`Object`)
 *       * `Add` &mdash; (`Array<Object>`)
 *         * `UserId` &mdash; (`String`) The user ID of the user that can
 *           create volumes from the snapshot.
 *         * `Group` &mdash; (`String`) The group that is allowed to
 *           create volumes from the snapshot (currently supports "all").
 *       * `Remove` &mdash; (`Array<Object>`)
 *         * `UserId` &mdash; (`String`) The user ID of the user that can
 *           create volumes from the snapshot.
 *         * `Group` &mdash; (`String`) The group that is allowed to
 *           create volumes from the snapshot (currently supports "all").
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
 * @!method modifyVolumeAttribute(params, callback)
 *   Calls the ModifyVolumeAttribute API operation.
 *   @param params [Object]
 *     * `VolumeId` &mdash; **required** &mdash; (`String`)
 *     * `AutoEnableIO` &mdash; (`Boolean`)
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
 * @!method modifyVpcAttribute(params, callback)
 *   Calls the ModifyVpcAttribute API operation.
 *   @param params [Object]
 *     * `VpcId` &mdash; **required** &mdash; (`String`)
 *     * `EnableDnsSupport` &mdash; (`Object`)
 *       * `Value` &mdash; (`Boolean`) Boolean value
 *     * `EnableDnsHostnames` &mdash; (`Object`)
 *       * `Value` &mdash; (`Boolean`) Boolean value
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
 * @!method monitorInstances(params, callback)
 *   Calls the MonitorInstances API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       list of Amazon EC2 instances on which to enable monitoring.
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
 *       * `InstanceMonitorings` &mdash; (`Array<Object>`) A list of
 *         updated monitoring information for the instances specified in
 *         the request.
 *         * `InstanceId` &mdash; (`String`) Instance ID.
 *         * `Monitoring` &mdash; (`Object`) Monitoring state for the
 *           associated instance.
 *           * `State` &mdash; (`String`) The state of monitoring on an
 *             Amazon EC2 instance (ex: enabled, disabled).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method purchaseReservedInstancesOffering(params, callback)
 *   Calls the PurchaseReservedInstancesOffering API operation.
 *   @param params [Object]
 *     * `ReservedInstancesOfferingId` &mdash; **required** &mdash;
 *       (`String`) The unique ID of the Reserved Instances offering
 *       being purchased.
 *     * `InstanceCount` &mdash; **required** &mdash; (`Integer`) The
 *       number of Reserved Instances to purchase.
 *     * `LimitPrice` &mdash; (`Object`)
 *       * `Amount` &mdash; (`Float`)
 *       * `CurrencyCode` &mdash; (`String`)
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
 *       * `ReservedInstancesId` &mdash; (`String`) The unique ID of the
 *         Reserved Instances purchased for your account.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootInstances(params, callback)
 *   Calls the RebootInstances API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       list of instances to terminate.
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
 * @!method registerImage(params, callback)
 *   Calls the RegisterImage API operation.
 *   @param params [Object]
 *     * `ImageLocation` &mdash; (`String`) The full path to your AMI
 *       manifest in Amazon S3 storage.
 *     * `Name` &mdash; (`String`) The name to give the new Amazon
 *       Machine Image. Constraints: 3-128 alphanumeric characters,
 *       parenthesis (()), commas (,), slashes (/), dashes (-), or
 *       underscores(_)
 *     * `Description` &mdash; (`String`) The description describing the
 *       new AMI.
 *     * `Architecture` &mdash; (`String`) The architecture of the image.
 *       Valid Values: i386, x86_64
 *     * `KernelId` &mdash; (`String`) The optional ID of a specific
 *       kernel to register with the new AMI.
 *     * `RamdiskId` &mdash; (`String`) The optional ID of a specific
 *       ramdisk to register with the new AMI. Some kernels require
 *       additional drivers at launch. Check the kernel requirements for
 *       information on whether you need to specify a RAM disk.
 *     * `RootDeviceName` &mdash; (`String`) The root device name (e.g.,
 *       /dev/sda1).
 *     * `BlockDeviceMappings` &mdash; (`Array<Object>`) The block device
 *       mappings for the new AMI, which specify how different block
 *       devices (ex: EBS volumes and ephemeral drives) will be exposed
 *       on instances launched from the new image.
 *       * `VirtualName` &mdash; (`String`) Specifies the virtual device
 *         name.
 *       * `DeviceName` &mdash; (`String`) Specifies the device name
 *         (e.g., /dev/sdh).
 *       * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * `SnapshotId` &mdash; (`String`) The ID of the snapshot from
 *           which the volume will be created.
 *         * `VolumeSize` &mdash; (`Integer`) The size of the volume, in
 *           gigabytes.
 *         * `DeleteOnTermination` &mdash; (`Boolean`) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * `VolumeType` &mdash; (`String`)
 *         * `Iops` &mdash; (`Integer`)
 *       * `NoDevice` &mdash; (`String`) Specifies the device name to
 *         suppress during instance launch.
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
 *       * `ImageId` &mdash; (`String`) The ID of the new Amazon Machine
 *         Image (AMI).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method releaseAddress(params, callback)
 *   Calls the ReleaseAddress API operation.
 *   @param params [Object]
 *     * `PublicIp` &mdash; (`String`) The elastic IP address that you
 *       are releasing from your account.
 *     * `AllocationId` &mdash; (`String`) The allocation ID that AWS
 *       provided when you allocated the address for use with Amazon VPC.
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
 * @!method replaceNetworkAclAssociation(params, callback)
 *   Calls the ReplaceNetworkAclAssociation API operation.
 *   @param params [Object]
 *     * `AssociationId` &mdash; **required** &mdash; (`String`) The ID
 *       representing the current association between the original
 *       network ACL and the subnet.
 *     * `NetworkAclId` &mdash; **required** &mdash; (`String`) The ID of
 *       the new ACL to associate with the subnet.
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
 *       * `NewAssociationId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method replaceNetworkAclEntry(params, callback)
 *   Calls the ReplaceNetworkAclEntry API operation.
 *   @param params [Object]
 *     * `NetworkAclId` &mdash; **required** &mdash; (`String`) ID of the
 *       ACL where the entry will be replaced.
 *     * `RuleNumber` &mdash; **required** &mdash; (`Integer`) Rule
 *       number of the entry to replace.
 *     * `Protocol` &mdash; **required** &mdash; (`String`) IP protocol
 *       the rule applies to. Valid Values: tcp, udp, icmp or an IP
 *       protocol number.
 *     * `RuleAction` &mdash; **required** &mdash; (`String`) Whether to
 *       allow or deny traffic that matches the rule.
 *     * `Egress` &mdash; **required** &mdash; (`Boolean`) Whether this
 *       rule applies to egress traffic from the subnet (true) or ingress
 *       traffic (false).
 *     * `CidrBlock` &mdash; **required** &mdash; (`String`) The CIDR
 *       range to allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
 *     * `IcmpTypeCode` &mdash; (`Object`) ICMP values.
 *       * `Type` &mdash; (`Integer`) For the ICMP protocol, the ICMP
 *         type. A value of -1 is a wildcard meaning all types. Required
 *         if specifying icmp for the protocol.
 *       * `Code` &mdash; (`Integer`) For the ICMP protocol, the ICMP
 *         code. A value of -1 is a wildcard meaning all codes. Required
 *         if specifying icmp for the protocol.
 *     * `PortRange` &mdash; (`Object`) Port ranges.
 *       * `From` &mdash; (`Integer`) The first port in the range.
 *         Required if specifying tcp or udp for the protocol.
 *       * `To` &mdash; (`Integer`) The last port in the range. Required
 *         if specifying tcp or udp for the protocol.
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
 * @!method replaceRoute(params, callback)
 *   Calls the ReplaceRoute API operation.
 *   @param params [Object]
 *     * `RouteTableId` &mdash; **required** &mdash; (`String`) The ID of
 *       the route table where the route will be replaced.
 *     * `DestinationCidrBlock` &mdash; **required** &mdash; (`String`)
 *       The CIDR address block used for the destination match. For
 *       example: 0.0.0.0/0. The value you provide must match the CIDR of
 *       an existing route in the table.
 *     * `GatewayId` &mdash; (`String`) The ID of a VPN or Internet
 *       gateway attached to your VPC.
 *     * `InstanceId` &mdash; (`String`) The ID of a NAT instance in your
 *       VPC.
 *     * `NetworkInterfaceId` &mdash; (`String`)
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
 * @!method replaceRouteTableAssociation(params, callback)
 *   Calls the ReplaceRouteTableAssociation API operation.
 *   @param params [Object]
 *     * `AssociationId` &mdash; **required** &mdash; (`String`) The ID
 *       representing the current association between the original route
 *       table and the subnet.
 *     * `RouteTableId` &mdash; **required** &mdash; (`String`) The ID of
 *       the new route table to associate with the subnet.
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
 *       * `NewAssociationId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method reportInstanceStatus(params, callback)
 *   Calls the ReportInstanceStatus API operation.
 *   @param params [Object]
 *     * `Instances` &mdash; (`Array<String>`)
 *     * `Status` &mdash; (`String`)
 *     * `StartTime` &mdash; (`Date`)
 *     * `EndTime` &mdash; (`Date`)
 *     * `ReasonCodes` &mdash; (`Array<String>`)
 *     * `Description` &mdash; (`String`)
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
 * @!method requestSpotInstances(params, callback)
 *   Calls the RequestSpotInstances API operation.
 *   @param params [Object]
 *     * `SpotPrice` &mdash; **required** &mdash; (`String`) Specifies
 *       the maximum hourly price for any Spot Instance launched to
 *       fulfill the request.
 *     * `InstanceCount` &mdash; (`Integer`) Specifies the maximum number
 *       of Spot Instances to launch.
 *     * `Type` &mdash; (`String`) Specifies the Spot Instance type.
 *     * `ValidFrom` &mdash; (`Date`) Defines the start date of the
 *       request. If this is a one-time request, the request becomes
 *       active at this date and time and remains active until all
 *       instances launch, the request expires, or the request is
 *       canceled. If the request is persistent, the request becomes
 *       active at this date and time and remains active until it expires
 *       or is canceled.
 *     * `ValidUntil` &mdash; (`Date`) End date of the request. If this
 *       is a one-time request, the request remains active until all
 *       instances launch, the request is canceled, or this date is
 *       reached. If the request is persistent, it remains active until
 *       it is canceled or this date and time is reached.
 *     * `LaunchGroup` &mdash; (`String`) Specifies the instance launch
 *       group. Launch groups are Spot Instances that launch and
 *       terminate together.
 *     * `AvailabilityZoneGroup` &mdash; (`String`) Specifies the
 *       Availability Zone group. When specifying the same Availability
 *       Zone group for all Spot Instance requests, all Spot Instances
 *       are launched in the same Availability Zone.
 *     * `LaunchSpecification` &mdash; (`Object`) Specifies additional
 *       launch instance information.
 *       * `ImageId` &mdash; (`String`) The AMI ID.
 *       * `KeyName` &mdash; (`String`) The name of the key pair.
 *       * `UserData` &mdash; (`String`) Optional data, specific to a
 *         user's application, to provide in the launch request. All
 *         instances that collectively comprise the launch request have
 *         access to this data. User data is never returned through API
 *         responses.
 *       * `AddressingType` &mdash; (`String`) Deprecated.
 *       * `InstanceType` &mdash; (`String`) Specifies the instance type.
 *       * `Placement` &mdash; (`Object`) Defines a placement item.
 *         * `AvailabilityZone` &mdash; (`String`) The availability zone
 *           in which an Amazon EC2 instance runs.
 *         * `GroupName` &mdash; (`String`) The name of the
 *           PlacementGroup in which an Amazon EC2 instance runs.
 *           Placement groups are primarily used for launching High
 *           Performance Computing instances in the same group to ensure
 *           fast connection speeds.
 *       * `KernelId` &mdash; (`String`) Specifies the ID of the kernel
 *         to select.
 *       * `RamdiskId` &mdash; (`String`) Specifies the ID of the RAM
 *         disk to select. Some kernels require additional drivers at
 *         launch. Check the kernel requirements for information on
 *         whether or not you need to specify a RAM disk and search for
 *         the kernel ID.
 *       * `BlockDeviceMappings` &mdash; (`Array<Object>`) Specifies how
 *         block devices are exposed to the instance. Each mapping is
 *         made up of a virtualName and a deviceName.
 *         * `VirtualName` &mdash; (`String`) Specifies the virtual
 *           device name.
 *         * `DeviceName` &mdash; (`String`) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * `SnapshotId` &mdash; (`String`) The ID of the snapshot
 *             from which the volume will be created.
 *           * `VolumeSize` &mdash; (`Integer`) The size of the volume,
 *             in gigabytes.
 *           * `DeleteOnTermination` &mdash; (`Boolean`) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *           * `VolumeType` &mdash; (`String`)
 *           * `Iops` &mdash; (`Integer`)
 *         * `NoDevice` &mdash; (`String`) Specifies the device name to
 *           suppress during instance launch.
 *       * `MonitoringEnabled` &mdash; (`Boolean`) Enables monitoring for
 *         the instance.
 *       * `SubnetId` &mdash; (`String`) Specifies the Amazon VPC subnet
 *         ID within which to launch the instance(s) for Amazon Virtual
 *         Private Cloud.
 *       * `NetworkInterfaces` &mdash; (`Array<Object>`)
 *         * `NetworkInterfaceId` &mdash; (`String`)
 *         * `DeviceIndex` &mdash; (`Integer`)
 *         * `SubnetId` &mdash; (`String`)
 *         * `Description` &mdash; (`String`)
 *         * `PrivateIpAddress` &mdash; (`String`)
 *         * `Groups` &mdash; (`Array<String>`)
 *         * `DeleteOnTermination` &mdash; (`Boolean`)
 *         * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *           * `PrivateIpAddress` &mdash; **required** &mdash; (`String`)
 *           * `Primary` &mdash; (`Boolean`)
 *         * `SecondaryPrivateIpAddressCount` &mdash; (`Integer`)
 *       * `IamInstanceProfile` &mdash; (`Object`)
 *         * `Arn` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *       * `EbsOptimized` &mdash; (`Boolean`)
 *       * `SecurityGroupIds` &mdash; (`Array<String>`)
 *       * `SecurityGroups` &mdash; (`Array<String>`)
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
 *       * `SpotInstanceRequests` &mdash; (`Array<Object>`) Contains a list
 *         of Spot Instance requests.
 *         * `SpotInstanceRequestId` &mdash; (`String`)
 *         * `SpotPrice` &mdash; (`String`)
 *         * `Type` &mdash; (`String`)
 *         * `State` &mdash; (`String`)
 *         * `Fault` &mdash; (`Object`)
 *           * `Code` &mdash; (`String`)
 *           * `Message` &mdash; (`String`)
 *         * `Status` &mdash; (`Object`)
 *           * `Code` &mdash; (`String`)
 *           * `UpdateTime` &mdash; (`Date`)
 *           * `Message` &mdash; (`String`)
 *         * `ValidFrom` &mdash; (`Date`)
 *         * `ValidUntil` &mdash; (`Date`)
 *         * `LaunchGroup` &mdash; (`String`)
 *         * `AvailabilityZoneGroup` &mdash; (`String`)
 *         * `LaunchSpecification` &mdash; (`Object`)
 *           * `ImageId` &mdash; (`String`) The AMI ID.
 *           * `KeyName` &mdash; (`String`) The name of the key pair.
 *           * `SecurityGroups` &mdash; (`Array<Object>`)
 *             * `GroupName` &mdash; (`String`)
 *             * `GroupId` &mdash; (`String`)
 *           * `UserData` &mdash; (`String`) Optional data, specific to a
 *             user's application, to provide in the launch request. All
 *             instances that collectively comprise the launch request have
 *             access to this data. User data is never returned through API
 *             responses.
 *           * `AddressingType` &mdash; (`String`) Deprecated.
 *           * `InstanceType` &mdash; (`String`) Specifies the instance
 *             type.
 *           * `Placement` &mdash; (`Object`) Defines a placement item.
 *             * `AvailabilityZone` &mdash; (`String`) The availability
 *               zone in which an Amazon EC2 instance runs.
 *             * `GroupName` &mdash; (`String`) The name of the
 *               PlacementGroup in which an Amazon EC2 instance runs.
 *               Placement groups are primarily used for launching High
 *               Performance Computing instances in the same group to
 *               ensure fast connection speeds.
 *           * `KernelId` &mdash; (`String`) Specifies the ID of the kernel
 *             to select.
 *           * `RamdiskId` &mdash; (`String`) Specifies the ID of the RAM
 *             disk to select. Some kernels require additional drivers at
 *             launch. Check the kernel requirements for information on
 *             whether or not you need to specify a RAM disk and search for
 *             the kernel ID.
 *           * `BlockDeviceMappings` &mdash; (`Array<Object>`) Specifies
 *             how block devices are exposed to the instance. Each mapping
 *             is made up of a virtualName and a deviceName.
 *             * `VirtualName` &mdash; (`String`) Specifies the virtual
 *               device name.
 *             * `DeviceName` &mdash; (`String`) Specifies the device name
 *               (e.g., /dev/sdh).
 *             * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *               automatically setup Amazon EBS volumes when the instance
 *               is launched.
 *               * `SnapshotId` &mdash; (`String`) The ID of the snapshot
 *                 from which the volume will be created.
 *               * `VolumeSize` &mdash; (`Integer`) The size of the volume,
 *                 in gigabytes.
 *               * `DeleteOnTermination` &mdash; (`Boolean`) Specifies
 *                 whether the Amazon EBS volume is deleted on instance
 *                 termination.
 *               * `VolumeType` &mdash; (`String`)
 *               * `Iops` &mdash; (`Integer`)
 *             * `NoDevice` &mdash; (`String`) Specifies the device name to
 *               suppress during instance launch.
 *           * `MonitoringEnabled` &mdash; (`Boolean`) Enables monitoring
 *             for the instance.
 *           * `SubnetId` &mdash; (`String`) Specifies the Amazon VPC
 *             subnet ID within which to launch the instance(s) for Amazon
 *             Virtual Private Cloud.
 *           * `NetworkInterfaces` &mdash; (`Array<Object>`)
 *             * `NetworkInterfaceId` &mdash; (`String`)
 *             * `DeviceIndex` &mdash; (`Integer`)
 *             * `SubnetId` &mdash; (`String`)
 *             * `Description` &mdash; (`String`)
 *             * `PrivateIpAddress` &mdash; (`String`)
 *             * `Groups` &mdash; (`Array<String>`)
 *             * `DeleteOnTermination` &mdash; (`Boolean`)
 *             * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *               * `PrivateIpAddress` &mdash; (`String`)
 *               * `Primary` &mdash; (`Boolean`)
 *             * `SecondaryPrivateIpAddressCount` &mdash; (`Integer`)
 *           * `IamInstanceProfile` &mdash; (`Object`)
 *             * `Arn` &mdash; (`String`)
 *             * `Name` &mdash; (`String`)
 *           * `EbsOptimized` &mdash; (`Boolean`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `CreateTime` &mdash; (`Date`)
 *         * `ProductDescription` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for this spot
 *           instance request.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `LaunchedAvailabilityZone` &mdash; (`String`) The Availability
 *           Zone in which the bid is launched.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method resetImageAttribute(params, callback)
 *   Calls the ResetImageAttribute API operation.
 *   @param params [Object]
 *     * `ImageId` &mdash; **required** &mdash; (`String`) The ID of the
 *       AMI whose attribute is being reset.
 *     * `Attribute` &mdash; **required** &mdash; (`String`) The name of
 *       the attribute being reset. Available attribute names:
 *       launchPermission
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
 * @!method resetInstanceAttribute(params, callback)
 *   Calls the ResetInstanceAttribute API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the Amazon EC2 instance whose attribute is being reset.
 *     * `Attribute` &mdash; **required** &mdash; (`String`) The name of
 *       the attribute being reset. Available attribute names: kernel,
 *       ramdisk
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
 * @!method resetNetworkInterfaceAttribute(params, callback)
 *   Calls the ResetNetworkInterfaceAttribute API operation.
 *   @param params [Object]
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`)
 *     * `SourceDestCheck` &mdash; (`String`)
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
 * @!method resetSnapshotAttribute(params, callback)
 *   Calls the ResetSnapshotAttribute API operation.
 *   @param params [Object]
 *     * `SnapshotId` &mdash; **required** &mdash; (`String`) The ID of
 *       the snapshot whose attribute is being reset.
 *     * `Attribute` &mdash; **required** &mdash; (`String`) The name of
 *       the attribute being reset. Available attribute names:
 *       createVolumePermission
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
 * @!method revokeSecurityGroupEgress(params, callback)
 *   Calls the RevokeSecurityGroupEgress API operation.
 *   @param params [Object]
 *     * `GroupId` &mdash; **required** &mdash; (`String`) ID of the VPC
 *       security group to modify.
 *     * `SourceSecurityGroupName` &mdash; (`String`) Deprecated.
 *     * `SourceSecurityGroupOwnerId` &mdash; (`String`) Deprecated.
 *     * `IpProtocol` &mdash; (`String`) Deprecated.
 *     * `FromPort` &mdash; (`Integer`) Deprecated.
 *     * `ToPort` &mdash; (`Integer`) Deprecated.
 *     * `CidrIp` &mdash; (`String`) Deprecated.
 *     * `IpPermissions` &mdash; (`Array<Object>`) List of IP permissions
 *       to authorize on the specified security group. Specifying
 *       permissions through IP permissions is the preferred way of
 *       authorizing permissions since it offers more flexibility and
 *       control.
 *       * `IpProtocol` &mdash; (`String`) The IP protocol of this
 *         permission. Valid protocol values: tcp, udp, icmp
 *       * `FromPort` &mdash; (`Integer`) Start of port range for the TCP
 *         and UDP protocols, or an ICMP type number. An ICMP type number
 *         of -1 indicates a wildcard (i.e., any ICMP type number).
 *       * `ToPort` &mdash; (`Integer`) End of port range for the TCP and
 *         UDP protocols, or an ICMP code. An ICMP code of -1 indicates a
 *         wildcard (i.e., any ICMP code).
 *       * `UserIdGroupPairs` &mdash; (`Array<Object>`) The list of AWS
 *         user IDs and groups included in this permission.
 *         * `UserId` &mdash; (`String`) The AWS user ID of an account.
 *         * `GroupName` &mdash; (`String`) Name of the security group in
 *           the specified AWS account. Cannot be used when specifying a
 *           CIDR IP address range.
 *         * `GroupId` &mdash; (`String`) ID of the security group in the
 *           specified AWS account. Cannot be used when specifying a CIDR
 *           IP address range.
 *       * `IpRanges` &mdash; (`Array<Object>`) The list of CIDR IP
 *         ranges included in this permission.
 *         * `CidrIp` &mdash; (`String`) The list of CIDR IP ranges.
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
 * @!method revokeSecurityGroupIngress(params, callback)
 *   Calls the RevokeSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * `GroupName` &mdash; (`String`) Name of the standard (EC2)
 *       security group to modify. The group must belong to your account.
 *       Can be used instead of GroupID for standard (EC2) security
 *       groups.
 *     * `GroupId` &mdash; (`String`) ID of the standard (EC2) or VPC
 *       security group to modify. The group must belong to your account.
 *       Required for VPC security groups; can be used instead of
 *       GroupName for standard (EC2) security groups.
 *     * `SourceSecurityGroupName` &mdash; (`String`) Deprecated
 *     * `SourceSecurityGroupOwnerId` &mdash; (`String`) Deprecated
 *     * `IpProtocol` &mdash; (`String`) Deprecated
 *     * `FromPort` &mdash; (`Integer`) Deprecated
 *     * `ToPort` &mdash; (`Integer`) Deprecated
 *     * `CidrIp` &mdash; (`String`) Deprecated
 *     * `IpPermissions` &mdash; (`Array<Object>`) List of IP permissions
 *       to revoke on the specified security group. For an IP permission
 *       to be removed, it must exactly match one of the IP permissions
 *       you specify in this list. Specifying permissions through IP
 *       permissions is the preferred way of revoking permissions since
 *       it offers more flexibility and control.
 *       * `IpProtocol` &mdash; (`String`) The IP protocol of this
 *         permission. Valid protocol values: tcp, udp, icmp
 *       * `FromPort` &mdash; (`Integer`) Start of port range for the TCP
 *         and UDP protocols, or an ICMP type number. An ICMP type number
 *         of -1 indicates a wildcard (i.e., any ICMP type number).
 *       * `ToPort` &mdash; (`Integer`) End of port range for the TCP and
 *         UDP protocols, or an ICMP code. An ICMP code of -1 indicates a
 *         wildcard (i.e., any ICMP code).
 *       * `UserIdGroupPairs` &mdash; (`Array<Object>`) The list of AWS
 *         user IDs and groups included in this permission.
 *         * `UserId` &mdash; (`String`) The AWS user ID of an account.
 *         * `GroupName` &mdash; (`String`) Name of the security group in
 *           the specified AWS account. Cannot be used when specifying a
 *           CIDR IP address range.
 *         * `GroupId` &mdash; (`String`) ID of the security group in the
 *           specified AWS account. Cannot be used when specifying a CIDR
 *           IP address range.
 *       * `IpRanges` &mdash; (`Array<Object>`) The list of CIDR IP
 *         ranges included in this permission.
 *         * `CidrIp` &mdash; (`String`) The list of CIDR IP ranges.
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
 * @!method runInstances(params, callback)
 *   Calls the RunInstances API operation.
 *   @param params [Object]
 *     * `ImageId` &mdash; **required** &mdash; (`String`) Unique ID of a
 *       machine image, returned by a call to DescribeImages.
 *     * `MinCount` &mdash; **required** &mdash; (`Integer`) Minimum
 *       number of instances to launch. If the value is more than Amazon
 *       EC2 can launch, no instances are launched at all.
 *     * `MaxCount` &mdash; **required** &mdash; (`Integer`) Maximum
 *       number of instances to launch. If the value is more than Amazon
 *       EC2 can launch, the largest possible number above minCount will
 *       be launched instead. Between 1 and the maximum number allowed
 *       for your account (default: 20).
 *     * `KeyName` &mdash; (`String`) The name of the key pair.
 *     * `SecurityGroups` &mdash; (`Array<String>`) The names of the
 *       security groups into which the instances will be launched.
 *     * `SecurityGroupIds` &mdash; (`Array<String>`)
 *     * `UserData` &mdash; (`String`) Specifies additional information
 *       to make available to the instance(s).
 *     * `InstanceType` &mdash; (`String`) Specifies the instance type
 *       for the launched instances.
 *     * `Placement` &mdash; (`Object`) Specifies the placement
 *       constraints (Availability Zones) for launching the instances.
 *       * `AvailabilityZone` &mdash; (`String`) The availability zone in
 *         which an Amazon EC2 instance runs.
 *       * `GroupName` &mdash; (`String`) The name of the PlacementGroup
 *         in which an Amazon EC2 instance runs. Placement groups are
 *         primarily used for launching High Performance Computing
 *         instances in the same group to ensure fast connection speeds.
 *       * `Tenancy` &mdash; (`String`) The allowed tenancy of instances
 *         launched into the VPC. A value of default means instances can
 *         be launched with any tenancy; a value of dedicated means all
 *         instances launched into the VPC will be launched as dedicated
 *         tenancy regardless of the tenancy assigned to the instance at
 *         launch.
 *     * `KernelId` &mdash; (`String`) The ID of the kernel with which to
 *       launch the instance.
 *     * `RamdiskId` &mdash; (`String`) The ID of the RAM disk with which
 *       to launch the instance. Some kernels require additional drivers
 *       at launch. Check the kernel requirements for information on
 *       whether you need to specify a RAM disk. To find kernel
 *       requirements, go to the Resource Center and search for the
 *       kernel ID.
 *     * `BlockDeviceMappings` &mdash; (`Array<Object>`) Specifies how
 *       block devices are exposed to the instance. Each mapping is made
 *       up of a virtualName and a deviceName.
 *       * `VirtualName` &mdash; (`String`) Specifies the virtual device
 *         name.
 *       * `DeviceName` &mdash; (`String`) Specifies the device name
 *         (e.g., /dev/sdh).
 *       * `Ebs` &mdash; (`Object`) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * `SnapshotId` &mdash; (`String`) The ID of the snapshot from
 *           which the volume will be created.
 *         * `VolumeSize` &mdash; (`Integer`) The size of the volume, in
 *           gigabytes.
 *         * `DeleteOnTermination` &mdash; (`Boolean`) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * `VolumeType` &mdash; (`String`)
 *         * `Iops` &mdash; (`Integer`)
 *       * `NoDevice` &mdash; (`String`) Specifies the device name to
 *         suppress during instance launch.
 *     * `Monitoring` &mdash; (`Object`) Enables monitoring for the
 *       instance.
 *       * `Enabled` &mdash; **required** &mdash; (`Boolean`)
 *     * `SubnetId` &mdash; (`String`) Specifies the subnet ID within
 *       which to launch the instance(s) for Amazon Virtual Private
 *       Cloud.
 *     * `DisableApiTermination` &mdash; (`Boolean`) Specifies whether
 *       the instance can be terminated using the APIs. You must modify
 *       this attribute before you can terminate any "locked" instances
 *       from the APIs.
 *     * `InstanceInitiatedShutdownBehavior` &mdash; (`String`) Specifies
 *       whether the instance's Amazon EBS volumes are stopped or
 *       terminated when the instance is shut down.
 *     * `License` &mdash; (`Object`) Specifies active licenses in use
 *       and attached to an Amazon EC2 instance.
 *       * `Pool` &mdash; (`String`) The license pool from which to take
 *         a license when starting Amazon EC2 instances in the associated
 *         RunInstances request.
 *     * `PrivateIpAddress` &mdash; (`String`) If you're using Amazon
 *       Virtual Private Cloud, you can optionally use this parameter to
 *       assign the instance a specific available IP address from the
 *       subnet.
 *     * `ClientToken` &mdash; (`String`) Unique, case-sensitive
 *       identifier you provide to ensure idempotency of the request. For
 *       more information, go to How to Ensure Idempotency in the Amazon
 *       Elastic Compute Cloud User Guide.
 *     * `AdditionalInfo` &mdash; (`String`)
 *     * `NetworkInterfaces` &mdash; (`Array<Object>`)
 *       * `NetworkInterfaceId` &mdash; (`String`)
 *       * `DeviceIndex` &mdash; (`Integer`)
 *       * `SubnetId` &mdash; (`String`)
 *       * `Description` &mdash; (`String`)
 *       * `PrivateIpAddress` &mdash; (`String`)
 *       * `Groups` &mdash; (`Array<String>`)
 *       * `DeleteOnTermination` &mdash; (`Boolean`)
 *       * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *         * `PrivateIpAddress` &mdash; **required** &mdash; (`String`)
 *         * `Primary` &mdash; (`Boolean`)
 *       * `SecondaryPrivateIpAddressCount` &mdash; (`Integer`)
 *     * `IamInstanceProfile` &mdash; (`Object`)
 *       * `Arn` &mdash; (`String`)
 *       * `Name` &mdash; (`String`)
 *     * `EbsOptimized` &mdash; (`Boolean`)
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
 *       * `ReservationId` &mdash; (`String`) The unique ID of this
 *         reservation.
 *       * `OwnerId` &mdash; (`String`) The AWS Access Key ID of the user
 *         who owns the reservation.
 *       * `RequesterId` &mdash; (`String`) The unique ID of the user who
 *         requested the instances in this reservation.
 *       * `Groups` &mdash; (`Array<Object>`) The list of security groups
 *         requested for the instances in this reservation.
 *         * `GroupName` &mdash; (`String`)
 *         * `GroupId` &mdash; (`String`)
 *       * `Instances` &mdash; (`Array<Object>`) The list of Amazon EC2
 *         instances included in this reservation.
 *         * `InstanceId` &mdash; (`String`) Unique ID of the instance
 *           launched.
 *         * `ImageId` &mdash; (`String`) Image ID of the AMI used to
 *           launch the instance.
 *         * `State` &mdash; (`Object`) The current state of the instance.
 *           * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * `Name` &mdash; (`String`) The current state of the instance.
 *         * `PrivateDnsName` &mdash; (`String`) The private DNS name
 *           assigned to the instance. This DNS name can only be used
 *           inside the Amazon EC2 network. This element remains empty
 *           until the instance enters a running state.
 *         * `PublicDnsName` &mdash; (`String`) The public DNS name
 *           assigned to the instance. This DNS name is contactable from
 *           outside the Amazon EC2 network. This element remains empty
 *           until the instance enters a running state.
 *         * `StateTransitionReason` &mdash; (`String`) Reason for the most
 *           recent state transition. This might be an empty string.
 *         * `KeyName` &mdash; (`String`) If this instance was launched
 *           with an associated key pair, this displays the key pair name.
 *         * `AmiLaunchIndex` &mdash; (`Integer`) The AMI launch index,
 *           which can be used to find this instance within the launch
 *           group.
 *         * `ProductCodes` &mdash; (`Array<Object>`) Product codes
 *           attached to this instance.
 *           * `ProductCodeId` &mdash; (`String`) The unique ID of an AWS
 *             DevPay product code.
 *           * `ProductCodeType` &mdash; (`String`)
 *         * `InstanceType` &mdash; (`String`) The instance type. For more
 *           information on instance types, please see the Amazon Elastic
 *           Compute Cloud Developer Guide.
 *         * `LaunchTime` &mdash; (`Date`) The time this instance launched.
 *         * `Placement` &mdash; (`Object`) The location where this
 *           instance launched.
 *           * `AvailabilityZone` &mdash; (`String`) The availability zone
 *             in which an Amazon EC2 instance runs.
 *           * `GroupName` &mdash; (`String`) The name of the
 *             PlacementGroup in which an Amazon EC2 instance runs.
 *             Placement groups are primarily used for launching High
 *             Performance Computing instances in the same group to ensure
 *             fast connection speeds.
 *           * `Tenancy` &mdash; (`String`) The allowed tenancy of
 *             instances launched into the VPC. A value of default means
 *             instances can be launched with any tenancy; a value of
 *             dedicated means all instances launched into the VPC will be
 *             launched as dedicated tenancy regardless of the tenancy
 *             assigned to the instance at launch.
 *         * `KernelId` &mdash; (`String`) Kernel associated with this
 *           instance.
 *         * `RamdiskId` &mdash; (`String`) RAM disk associated with this
 *           instance.
 *         * `Platform` &mdash; (`String`) Platform of the instance (e.g.,
 *           Windows).
 *         * `Monitoring` &mdash; (`Object`) Monitoring status for this
 *           instance.
 *           * `State` &mdash; (`String`) The state of monitoring on an
 *             Amazon EC2 instance (ex: enabled, disabled).
 *         * `SubnetId` &mdash; (`String`) Specifies the Amazon VPC subnet
 *           ID in which the instance is running.
 *         * `VpcId` &mdash; (`String`) Specifies the Amazon VPC in which
 *           the instance is running.
 *         * `PrivateIpAddress` &mdash; (`String`) Specifies the private IP
 *           address that is assigned to the instance (Amazon VPC).
 *         * `PublicIpAddress` &mdash; (`String`) Specifies the IP address
 *           of the instance.
 *         * `StateReason` &mdash; (`Object`) The reason for the state
 *           change.
 *           * `Code` &mdash; (`String`) Reason code for the state change.
 *           * `Message` &mdash; (`String`) Descriptive message for the
 *             state change.
 *         * `Architecture` &mdash; (`String`) The architecture of this
 *           instance.
 *         * `RootDeviceType` &mdash; (`String`) The root device type used
 *           by the AMI. The AMI can use an Amazon EBS or instance store
 *           root device.
 *         * `RootDeviceName` &mdash; (`String`) The root device name
 *           (e.g., /dev/sda1).
 *         * `BlockDeviceMappings` &mdash; (`Array<Object>`) Block device
 *           mapping set.
 *           * `DeviceName` &mdash; (`String`) The device name (e.g.,
 *             /dev/sdh) at which the block device is exposed on the
 *             instance.
 *           * `Ebs` &mdash; (`Object`) The optional EBS device mapped to
 *             the specified device name.
 *             * `VolumeId` &mdash; (`String`) The ID of the EBS volume.
 *             * `Status` &mdash; (`String`) The status of the EBS volume.
 *             * `AttachTime` &mdash; (`Date`) The time at which the EBS
 *               volume was attached to the associated instance.
 *             * `DeleteOnTermination` &mdash; (`Boolean`) Specifies
 *               whether the Amazon EBS volume is deleted on instance
 *               termination.
 *         * `VirtualizationType` &mdash; (`String`)
 *         * `InstanceLifecycle` &mdash; (`String`)
 *         * `SpotInstanceRequestId` &mdash; (`String`)
 *         * `License` &mdash; (`Object`)
 *           * `Pool` &mdash; (`String`) The license pool from which this
 *             license was used (ex: 'windows').
 *         * `ClientToken` &mdash; (`String`)
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the
 *           Instance.
 *           * `Key` &mdash; (`String`) The tag's key.
 *           * `Value` &mdash; (`String`) The tag's value.
 *         * `SecurityGroups` &mdash; (`Array<Object>`)
 *           * `GroupName` &mdash; (`String`)
 *           * `GroupId` &mdash; (`String`)
 *         * `SourceDestCheck` &mdash; (`Boolean`)
 *         * `Hypervisor` &mdash; (`String`)
 *         * `NetworkInterfaces` &mdash; (`Array<Object>`)
 *           * `NetworkInterfaceId` &mdash; (`String`)
 *           * `SubnetId` &mdash; (`String`)
 *           * `VpcId` &mdash; (`String`)
 *           * `Description` &mdash; (`String`)
 *           * `OwnerId` &mdash; (`String`)
 *           * `Status` &mdash; (`String`)
 *           * `PrivateIpAddress` &mdash; (`String`)
 *           * `PrivateDnsName` &mdash; (`String`)
 *           * `SourceDestCheck` &mdash; (`Boolean`)
 *           * `Groups` &mdash; (`Array<Object>`)
 *             * `GroupName` &mdash; (`String`)
 *             * `GroupId` &mdash; (`String`)
 *           * `Attachment` &mdash; (`Object`)
 *             * `AttachmentId` &mdash; (`String`)
 *             * `DeviceIndex` &mdash; (`Integer`)
 *             * `Status` &mdash; (`String`)
 *             * `AttachTime` &mdash; (`Date`)
 *             * `DeleteOnTermination` &mdash; (`Boolean`)
 *           * `Association` &mdash; (`Object`)
 *             * `PublicIp` &mdash; (`String`)
 *             * `PublicDnsName` &mdash; (`String`)
 *             * `IpOwnerId` &mdash; (`String`)
 *           * `PrivateIpAddresses` &mdash; (`Array<Object>`)
 *             * `PrivateIpAddress` &mdash; (`String`)
 *             * `PrivateDnsName` &mdash; (`String`)
 *             * `Primary` &mdash; (`Boolean`)
 *             * `Association` &mdash; (`Object`)
 *               * `PublicIp` &mdash; (`String`)
 *               * `PublicDnsName` &mdash; (`String`)
 *               * `IpOwnerId` &mdash; (`String`)
 *         * `IamInstanceProfile` &mdash; (`Object`)
 *           * `Arn` &mdash; (`String`)
 *           * `Id` &mdash; (`String`)
 *         * `EbsOptimized` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method startInstances(params, callback)
 *   Calls the StartInstances API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       list of Amazon EC2 instances to start.
 *     * `AdditionalInfo` &mdash; (`String`)
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
 *       * `StartingInstances` &mdash; (`Array<Object>`) The list of the
 *         starting instances and details on how their state has changed.
 *         * `InstanceId` &mdash; (`String`) The ID of the instance whose
 *           state changed.
 *         * `CurrentState` &mdash; (`Object`) The current state of the
 *           specified instance.
 *           * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * `Name` &mdash; (`String`) The current state of the instance.
 *         * `PreviousState` &mdash; (`Object`) The previous state of the
 *           specified instance.
 *           * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * `Name` &mdash; (`String`) The current state of the instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method stopInstances(params, callback)
 *   Calls the StopInstances API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       list of Amazon EC2 instances to stop.
 *     * `Force` &mdash; (`Boolean`) Forces the instance to stop. The
 *       instance will not have an opportunity to flush file system
 *       caches nor file system meta data. If you use this option, you
 *       must perform file system check and repair procedures. This
 *       option is not recommended for Windows instances.
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
 *       * `StoppingInstances` &mdash; (`Array<Object>`) The list of the
 *         stopping instances and details on how their state has changed.
 *         * `InstanceId` &mdash; (`String`) The ID of the instance whose
 *           state changed.
 *         * `CurrentState` &mdash; (`Object`) The current state of the
 *           specified instance.
 *           * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * `Name` &mdash; (`String`) The current state of the instance.
 *         * `PreviousState` &mdash; (`Object`) The previous state of the
 *           specified instance.
 *           * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * `Name` &mdash; (`String`) The current state of the instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method terminateInstances(params, callback)
 *   Calls the TerminateInstances API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       list of instances to terminate.
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
 *       * `TerminatingInstances` &mdash; (`Array<Object>`) The list of the
 *         terminating instances and details on how their state has
 *         changed.
 *         * `InstanceId` &mdash; (`String`) The ID of the instance whose
 *           state changed.
 *         * `CurrentState` &mdash; (`Object`) The current state of the
 *           specified instance.
 *           * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * `Name` &mdash; (`String`) The current state of the instance.
 *         * `PreviousState` &mdash; (`Object`) The previous state of the
 *           specified instance.
 *           * `Code` &mdash; (`Integer`) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * `Name` &mdash; (`String`) The current state of the instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method unassignPrivateIpAddresses(params, callback)
 *   Calls the UnassignPrivateIpAddresses API operation.
 *   @param params [Object]
 *     * `NetworkInterfaceId` &mdash; **required** &mdash; (`String`)
 *     * `PrivateIpAddresses` &mdash; **required** &mdash;
 *       (`Array<String>`)
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
 * @!method unmonitorInstances(params, callback)
 *   Calls the UnmonitorInstances API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       list of Amazon EC2 instances on which to disable monitoring.
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
 *       * `InstanceMonitorings` &mdash; (`Array<Object>`) A list of
 *         updated monitoring information for the instances specified in
 *         the request.
 *         * `InstanceId` &mdash; (`String`) Instance ID.
 *         * `Monitoring` &mdash; (`Object`) Monitoring state for the
 *           associated instance.
 *           * `State` &mdash; (`String`) The state of monitoring on an
 *             Amazon EC2 instance (ex: enabled, disabled).
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
AWS.EC2.Client = inherit({});
