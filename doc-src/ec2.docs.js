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
 * === Sending a Request Using EC2
 *
 *   svc = new AWS.EC2();
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
 *     * +LicenseId+ - (*required*, <tt>String</tt>) Specifies the ID for
 *       the specific license to activate against.
 *     * +Capacity+ - (*required*, <tt>Integer</tt>) Specifies the
 *       additional number of licenses to activate.
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
 *
 * @!method allocateAddress(params, callback)
 *   Calls the AllocateAddress API operation.
 *   @param params [Object]
 *     * +Domain+ - (<tt>String</tt>) Set to vpc to allocate the address
 *       to your VPC. By default, will allocate to EC2.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +PublicIp+ - (<tt>String</tt>) IP address for use with your
 *         account.
 *       * +Domain+ - (<tt>String</tt>)
 *       * +AllocationId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method assignPrivateIpAddresses(params, callback)
 *   Calls the AssignPrivateIpAddresses API operation.
 *   @param params [Object]
 *     * +NetworkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +PrivateIpAddresses+ - (<tt>Array<String></tt>)
 *     * +SecondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *     * +AllowReassignment+ - (<tt>Boolean</tt>)
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
 *
 * @!method associateAddress(params, callback)
 *   Calls the AssociateAddress API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (<tt>String</tt>) The instance to associate with
 *       the IP address.
 *     * +PublicIp+ - (<tt>String</tt>) IP address that you are assigning
 *       to the instance.
 *     * +AllocationId+ - (<tt>String</tt>) The allocation ID that AWS
 *       returned when you allocated the elastic IP address for use with
 *       Amazon VPC.
 *     * +NetworkInterfaceId+ - (<tt>String</tt>)
 *     * +PrivateIpAddress+ - (<tt>String</tt>)
 *     * +AllowReassociation+ - (<tt>Boolean</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AssociationId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method associateDhcpOptions(params, callback)
 *   Calls the AssociateDhcpOptions API operation.
 *   @param params [Object]
 *     * +DhcpOptionsId+ - (*required*, <tt>String</tt>) The ID of the
 *       DHCP options to associate with the VPC. Specify "default" to
 *       associate the default DHCP options with the VPC.
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC to
 *       associate the DHCP options with.
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
 *
 * @!method associateRouteTable(params, callback)
 *   Calls the AssociateRouteTable API operation.
 *   @param params [Object]
 *     * +SubnetId+ - (*required*, <tt>String</tt>) The ID of the subnet.
 *     * +RouteTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AssociationId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method attachInternetGateway(params, callback)
 *   Calls the AttachInternetGateway API operation.
 *   @param params [Object]
 *     * +InternetGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the Internet gateway to attach.
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC.
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
 *
 * @!method attachNetworkInterface(params, callback)
 *   Calls the AttachNetworkInterface API operation.
 *   @param params [Object]
 *     * +NetworkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +InstanceId+ - (*required*, <tt>String</tt>)
 *     * +DeviceIndex+ - (*required*, <tt>Integer</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AttachmentId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method attachVolume(params, callback)
 *   Calls the AttachVolume API operation.
 *   @param params [Object]
 *     * +VolumeId+ - (*required*, <tt>String</tt>) The ID of the Amazon
 *       EBS volume. The volume and instance must be within the same
 *       Availability Zone and the instance must be running.
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance to which the volume attaches. The volume and instance
 *       must be within the same Availability Zone and the instance must
 *       be running.
 *     * +Device+ - (*required*, <tt>String</tt>) Specifies how the
 *       device is exposed to the instance (e.g., /dev/sdh).
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VolumeId+ - (<tt>String</tt>)
 *       * +InstanceId+ - (<tt>String</tt>)
 *       * +Device+ - (<tt>String</tt>) How the device is exposed to the
 *         instance (e.g., /dev/sdh).
 *       * +State+ - (<tt>String</tt>)
 *       * +AttachTime+ - (<tt>Date</tt>) Timestamp when this attachment
 *         initiated.
 *       * +DeleteOnTermination+ - (<tt>Boolean</tt>) ` Whether this volume
 *         will be deleted or not when the associated instance is
 *         terminated.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method attachVpnGateway(params, callback)
 *   Calls the AttachVpnGateway API operation.
 *   @param params [Object]
 *     * +VpnGatewayId+ - (*required*, <tt>String</tt>) The ID of the VPN
 *       gateway to attach to the VPC.
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC to
 *       attach to the VPN gateway.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VpcAttachement+ - (<tt>Object</tt>)
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method authorizeSecurityGroupEgress(params, callback)
 *   Calls the AuthorizeSecurityGroupEgress API operation.
 *   @param params [Object]
 *     * +GroupId+ - (*required*, <tt>String</tt>) ID of the VPC security
 *       group to modify.
 *     * +SourceSecurityGroupName+ - (<tt>String</tt>) Deprecated.
 *     * +SourceSecurityGroupOwnerId+ - (<tt>String</tt>) Deprecated.
 *     * +IpProtocol+ - (<tt>String</tt>) Deprecated.
 *     * +FromPort+ - (<tt>Integer</tt>) Deprecated.
 *     * +ToPort+ - (<tt>Integer</tt>) Deprecated.
 *     * +CidrIp+ - (<tt>String</tt>) Deprecated.
 *     * +IpPermissions+ - (<tt>Array<Object></tt>) List of IP
 *       permissions to authorize on the specified security group.
 *       Specifying permissions through IP permissions is the preferred
 *       way of authorizing permissions since it offers more flexibility
 *       and control.
 *       * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *         permission. Valid protocol values: tcp, udp, icmp
 *       * +FromPort+ - (<tt>Integer</tt>) Start of port range for the
 *         TCP and UDP protocols, or an ICMP type number. An ICMP type
 *         number of -1 indicates a wildcard (i.e., any ICMP type
 *         number).
 *       * +ToPort+ - (<tt>Integer</tt>) End of port range for the TCP
 *         and UDP protocols, or an ICMP code. An ICMP code of -1
 *         indicates a wildcard (i.e., any ICMP code).
 *       * +UserIdGroupPairs+ - (<tt>Array<Object></tt>) The list of AWS
 *         user IDs and groups included in this permission.
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of an account.
 *         * +GroupName+ - (<tt>String</tt>) Name of the security group
 *           in the specified AWS account. Cannot be used when specifying
 *           a CIDR IP address range.
 *         * +GroupId+ - (<tt>String</tt>) ID of the security group in
 *           the specified AWS account. Cannot be used when specifying a
 *           CIDR IP address range.
 *       * +IpRanges+ - (<tt>Array<Object></tt>) The list of CIDR IP
 *         ranges included in this permission.
 *         * +CidrIp+ - (<tt>String</tt>) The list of CIDR IP ranges.
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
 *
 * @!method authorizeSecurityGroupIngress(params, callback)
 *   Calls the AuthorizeSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * +GroupName+ - (<tt>String</tt>) Name of the standard (EC2)
 *       security group to modify. The group must belong to your account.
 *       Can be used instead of GroupID for standard (EC2) security
 *       groups.
 *     * +GroupId+ - (<tt>String</tt>) ID of the standard (EC2) or VPC
 *       security group to modify. The group must belong to your account.
 *       Required for VPC security groups; can be used instead of
 *       GroupName for standard (EC2) security groups.
 *     * +SourceSecurityGroupName+ - (<tt>String</tt>) Deprecated
 *     * +SourceSecurityGroupOwnerId+ - (<tt>String</tt>) Deprecated
 *     * +IpProtocol+ - (<tt>String</tt>) Deprecated
 *     * +FromPort+ - (<tt>Integer</tt>) Deprecated
 *     * +ToPort+ - (<tt>Integer</tt>) Deprecated
 *     * +CidrIp+ - (<tt>String</tt>) Deprecated
 *     * +IpPermissions+ - (<tt>Array<Object></tt>) List of IP
 *       permissions to authorize on the specified security group.
 *       Specifying permissions through IP permissions is the preferred
 *       way of authorizing permissions since it offers more flexibility
 *       and control.
 *       * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *         permission. Valid protocol values: tcp, udp, icmp
 *       * +FromPort+ - (<tt>Integer</tt>) Start of port range for the
 *         TCP and UDP protocols, or an ICMP type number. An ICMP type
 *         number of -1 indicates a wildcard (i.e., any ICMP type
 *         number).
 *       * +ToPort+ - (<tt>Integer</tt>) End of port range for the TCP
 *         and UDP protocols, or an ICMP code. An ICMP code of -1
 *         indicates a wildcard (i.e., any ICMP code).
 *       * +UserIdGroupPairs+ - (<tt>Array<Object></tt>) The list of AWS
 *         user IDs and groups included in this permission.
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of an account.
 *         * +GroupName+ - (<tt>String</tt>) Name of the security group
 *           in the specified AWS account. Cannot be used when specifying
 *           a CIDR IP address range.
 *         * +GroupId+ - (<tt>String</tt>) ID of the security group in
 *           the specified AWS account. Cannot be used when specifying a
 *           CIDR IP address range.
 *       * +IpRanges+ - (<tt>Array<Object></tt>) The list of CIDR IP
 *         ranges included in this permission.
 *         * +CidrIp+ - (<tt>String</tt>) The list of CIDR IP ranges.
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
 *
 * @!method bundleInstance(params, callback)
 *   Calls the BundleInstance API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance to bundle.
 *     * +Storage+ - (*required*, <tt>Object</tt>)
 *       * +S3+ - (<tt>Object</tt>) The details of S3 storage for
 *         bundling a Windows instance.
 *         * +Bucket+ - (<tt>String</tt>) The bucket in which to store
 *           the AMI. You can specify a bucket that you already own or a
 *           new bucket that Amazon EC2 creates on your behalf. If you
 *           specify a bucket that belongs to someone else, Amazon EC2
 *           returns an error.
 *         * +Prefix+ - (<tt>String</tt>) The prefix to use when storing
 *           the AMI in S3.
 *         * +AWSAccessKeyId+ - (<tt>String</tt>) The Access Key ID of
 *           the owner of the Amazon S3 bucket.
 *         * +UploadPolicy+ - (<tt>String</tt>) A Base64-encoded Amazon
 *           S3 upload policy that gives Amazon EC2 permission to upload
 *           items into Amazon S3 on the user's behalf.
 *         * +UploadPolicySignature+ - (<tt>String</tt>) The signature of
 *           the Base64 encoded JSON document.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +BundleTask+ - (<tt>Object</tt>)
 *         * +InstanceId+ - (<tt>String</tt>) Instance associated with this
 *           bundle task.
 *         * +BundleId+ - (<tt>String</tt>) Unique identifier for this
 *           task.
 *         * +State+ - (<tt>String</tt>) The state of this task.
 *         * +StartTime+ - (<tt>Date</tt>) The time this task started.
 *         * +UpdateTime+ - (<tt>Date</tt>) The time of the most recent
 *           update for the task.
 *         * +Storage+ - (<tt>Object</tt>) Amazon S3 storage locations.
 *           * +S3+ - (<tt>Object</tt>) The details of S3 storage for
 *             bundling a Windows instance.
 *             * +Bucket+ - (<tt>String</tt>) The bucket in which to store
 *               the AMI. You can specify a bucket that you already own or
 *               a new bucket that Amazon EC2 creates on your behalf. If
 *               you specify a bucket that belongs to someone else, Amazon
 *               EC2 returns an error.
 *             * +Prefix+ - (<tt>String</tt>) The prefix to use when
 *               storing the AMI in S3.
 *             * +AWSAccessKeyId+ - (<tt>String</tt>) The Access Key ID of
 *               the owner of the Amazon S3 bucket.
 *             * +UploadPolicy+ - (<tt>String</tt>) A Base64-encoded Amazon
 *               S3 upload policy that gives Amazon EC2 permission to
 *               upload items into Amazon S3 on the user's behalf.
 *             * +UploadPolicySignature+ - (<tt>String</tt>) The signature
 *               of the Base64 encoded JSON document.
 *         * +Progress+ - (<tt>String</tt>) The level of task completion,
 *           in percent (e.g., 20%).
 *         * +BundleTaskError+ - (<tt>Object</tt>) If the task fails, a
 *           description of the error.
 *           * +Code+ - (<tt>String</tt>) Error code.
 *           * +Message+ - (<tt>String</tt>) Error message.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method cancelBundleTask(params, callback)
 *   Calls the CancelBundleTask API operation.
 *   @param params [Object]
 *     * +BundleId+ - (*required*, <tt>String</tt>) The ID of the bundle
 *       task to cancel.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +BundleTask+ - (<tt>Object</tt>) The canceled bundle task.
 *         * +InstanceId+ - (<tt>String</tt>) Instance associated with this
 *           bundle task.
 *         * +BundleId+ - (<tt>String</tt>) Unique identifier for this
 *           task.
 *         * +State+ - (<tt>String</tt>) The state of this task.
 *         * +StartTime+ - (<tt>Date</tt>) The time this task started.
 *         * +UpdateTime+ - (<tt>Date</tt>) The time of the most recent
 *           update for the task.
 *         * +Storage+ - (<tt>Object</tt>) Amazon S3 storage locations.
 *           * +S3+ - (<tt>Object</tt>) The details of S3 storage for
 *             bundling a Windows instance.
 *             * +Bucket+ - (<tt>String</tt>) The bucket in which to store
 *               the AMI. You can specify a bucket that you already own or
 *               a new bucket that Amazon EC2 creates on your behalf. If
 *               you specify a bucket that belongs to someone else, Amazon
 *               EC2 returns an error.
 *             * +Prefix+ - (<tt>String</tt>) The prefix to use when
 *               storing the AMI in S3.
 *             * +AWSAccessKeyId+ - (<tt>String</tt>) The Access Key ID of
 *               the owner of the Amazon S3 bucket.
 *             * +UploadPolicy+ - (<tt>String</tt>) A Base64-encoded Amazon
 *               S3 upload policy that gives Amazon EC2 permission to
 *               upload items into Amazon S3 on the user's behalf.
 *             * +UploadPolicySignature+ - (<tt>String</tt>) The signature
 *               of the Base64 encoded JSON document.
 *         * +Progress+ - (<tt>String</tt>) The level of task completion,
 *           in percent (e.g., 20%).
 *         * +BundleTaskError+ - (<tt>Object</tt>) If the task fails, a
 *           description of the error.
 *           * +Code+ - (<tt>String</tt>) Error code.
 *           * +Message+ - (<tt>String</tt>) Error message.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method cancelConversionTask(params, callback)
 *   Calls the CancelConversionTask API operation.
 *   @param params [Object]
 *     * +ConversionTaskId+ - (*required*, <tt>String</tt>)
 *     * +ReasonMessage+ - (<tt>String</tt>)
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
 *
 * @!method cancelExportTask(params, callback)
 *   Calls the CancelExportTask API operation.
 *   @param params [Object]
 *     * +ExportTaskId+ - (*required*, <tt>String</tt>)
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
 *
 * @!method cancelReservedInstancesListing(params, callback)
 *   Calls the CancelReservedInstancesListing API operation.
 *   @param params [Object]
 *     * +ReservedInstancesListingId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservedInstancesListings+ - (<tt>Array<Object></tt>)
 *         * +ReservedInstancesListingId+ - (<tt>String</tt>)
 *         * +ReservedInstancesId+ - (<tt>String</tt>)
 *         * +CreateDate+ - (<tt>Date</tt>)
 *         * +UpdateDate+ - (<tt>Date</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +StatusMessage+ - (<tt>String</tt>)
 *         * +InstanceCounts+ - (<tt>Array<Object></tt>)
 *           * +State+ - (<tt>String</tt>)
 *           * +InstanceCount+ - (<tt>Integer</tt>)
 *         * +PriceSchedules+ - (<tt>Array<Object></tt>)
 *           * +Term+ - (<tt>Integer</tt>)
 *           * +Price+ - (<tt>Float</tt>)
 *           * +CurrencyCode+ - (<tt>String</tt>)
 *           * +Active+ - (<tt>Boolean</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +ClientToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method cancelSpotInstanceRequests(params, callback)
 *   Calls the CancelSpotInstanceRequests API operation.
 *   @param params [Object]
 *     * +SpotInstanceRequestIds+ - (*required*, <tt>Array<String></tt>)
 *       Specifies the ID of the Spot Instance request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CancelledSpotInstanceRequests+ - (<tt>Array<Object></tt>)
 *         * +SpotInstanceRequestId+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method confirmProductInstance(params, callback)
 *   Calls the ConfirmProductInstance API operation.
 *   @param params [Object]
 *     * +ProductCode+ - (*required*, <tt>String</tt>) The product code
 *       to confirm.
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance to confirm.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +OwnerId+ - (<tt>String</tt>) The instance owner's account ID.
 *         Only present if the product code is attached to the instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method copySnapshot(params, callback)
 *   Calls the CopySnapshot API operation.
 *   @param params [Object]
 *     * +SourceRegion+ - (*required*, <tt>String</tt>)
 *     * +SourceSnapshotId+ - (*required*, <tt>String</tt>)
 *     * +Description+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SnapshotId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCustomerGateway(params, callback)
 *   Calls the CreateCustomerGateway API operation.
 *   @param params [Object]
 *     * +Type+ - (*required*, <tt>String</tt>) The type of VPN
 *       connection this customer gateway supports.
 *     * +PublicIp+ - (*required*, <tt>String</tt>) The Internet-routable
 *       IP address for the customer gateway's outside interface. The
 *       address must be static
 *     * +BgpAsn+ - (*required*, <tt>Integer</tt>) The customer gateway's
 *       Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CustomerGateway+ - (<tt>Object</tt>) Information about the
 *         customer gateway.
 *         * +CustomerGatewayId+ - (<tt>String</tt>) Specifies the ID of
 *           the customer gateway.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           customer gateway. Valid values are pending, available,
 *           deleting, and deleted.
 *         * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *           connection the customer gateway supports.
 *         * +IpAddress+ - (<tt>String</tt>) Contains the Internet-routable
 *           IP address of the customer gateway's outside interface.
 *         * +BgpAsn+ - (<tt>String</tt>) Specifies the customer gateway's
 *           Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           CustomerGateway.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDhcpOptions(params, callback)
 *   Calls the CreateDhcpOptions API operation.
 *   @param params [Object]
 *     * +DhcpConfigurations+ - (*required*, <tt>Array<Object></tt>) A
 *       set of one or more DHCP configurations.
 *       * +Key+ - (<tt>String</tt>) Contains the name of a DHCP option.
 *       * +Values+ - (<tt>Array<String></tt>) Contains a set of values
 *         for a DHCP option.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DhcpOptions+ - (<tt>Object</tt>) A set of one or more DHCP
 *         options.
 *         * +DhcpOptionsId+ - (<tt>String</tt>) Specifies the ID of the
 *           set of DHCP options.
 *         * +DhcpConfigurations+ - (<tt>Array<Object></tt>) Contains
 *           information about the set of DHCP options.
 *           * +Key+ - (<tt>String</tt>) Contains the name of a DHCP
 *             option.
 *           * +Values+ - (<tt>Array<String></tt>) Contains a set of values
 *             for a DHCP option.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           DhcpOptions.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createImage(params, callback)
 *   Calls the CreateImage API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance from which to create the new image.
 *     * +Name+ - (*required*, <tt>String</tt>) The name for the new AMI
 *       being created.
 *     * +Description+ - (<tt>String</tt>) The description for the new
 *       AMI being created.
 *     * +NoReboot+ - (<tt>Boolean</tt>) By default this property is set
 *       to false, which means Amazon EC2 attempts to cleanly shut down
 *       the instance before image creation and reboots the instance
 *       afterwards. When set to true, Amazon EC2 will not shut down the
 *       instance before creating the image. When this option is used,
 *       file system integrity on the created image cannot be guaranteed.
 *     * +BlockDeviceMappings+ - (<tt>Array<Object></tt>)
 *       * +VirtualName+ - (<tt>String</tt>) Specifies the virtual device
 *         name.
 *       * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *         (e.g., /dev/sdh).
 *       * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *           which the volume will be created.
 *         * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *           gigabytes.
 *         * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * +VolumeType+ - (<tt>String</tt>)
 *         * +Iops+ - (<tt>Integer</tt>)
 *       * +NoDevice+ - (<tt>String</tt>) Specifies the device name to
 *         suppress during instance launch.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ImageId+ - (<tt>String</tt>) The ID of the new AMI.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInstanceExportTask(params, callback)
 *   Calls the CreateInstanceExportTask API operation.
 *   @param params [Object]
 *     * +Description+ - (<tt>String</tt>)
 *     * +InstanceId+ - (*required*, <tt>String</tt>)
 *     * +TargetEnvironment+ - (<tt>String</tt>)
 *     * +ExportToS3Task+ - (<tt>Object</tt>)
 *       * +DiskImageFormat+ - (<tt>String</tt>)
 *       * +ContainerFormat+ - (<tt>String</tt>)
 *       * +S3Bucket+ - (<tt>String</tt>)
 *       * +S3Prefix+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ExportTask+ - (<tt>Object</tt>)
 *         * +ExportTaskId+ - (<tt>String</tt>)
 *         * +Description+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *         * +StatusMessage+ - (<tt>String</tt>)
 *         * +InstanceExportDetails+ - (<tt>Object</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +TargetEnvironment+ - (<tt>String</tt>)
 *         * +ExportToS3Task+ - (<tt>Object</tt>)
 *           * +DiskImageFormat+ - (<tt>String</tt>)
 *           * +ContainerFormat+ - (<tt>String</tt>)
 *           * +S3Bucket+ - (<tt>String</tt>)
 *           * +S3Key+ - (<tt>String</tt>)
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
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InternetGateway+ - (<tt>Object</tt>)
 *         * +InternetGatewayId+ - (<tt>String</tt>)
 *         * +Attachments+ - (<tt>Array<Object></tt>)
 *           * +VpcId+ - (<tt>String</tt>)
 *           * +State+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createKeyPair(params, callback)
 *   Calls the CreateKeyPair API operation.
 *   @param params [Object]
 *     * +KeyName+ - (*required*, <tt>String</tt>) The unique name for
 *       the new key pair.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +KeyPair+ - (<tt>Object</tt>) The newly created EC2 key pair.
 *         * +KeyName+ - (<tt>String</tt>) The name of the key pair.
 *         * +KeyFingerprint+ - (<tt>String</tt>) The SHA-1 digest of the
 *           DER encoded private key.
 *         * +KeyMaterial+ - (<tt>String</tt>) The unencrypted PEM encoded
 *           RSA private key.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createNetworkAcl(params, callback)
 *   Calls the CreateNetworkAcl API operation.
 *   @param params [Object]
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC where
 *       the network ACL will be created.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +NetworkAcl+ - (<tt>Object</tt>)
 *         * +NetworkAclId+ - (<tt>String</tt>)
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +IsDefault+ - (<tt>Boolean</tt>)
 *         * +Entries+ - (<tt>Array<Object></tt>)
 *           * +RuleNumber+ - (<tt>Integer</tt>)
 *           * +Protocol+ - (<tt>String</tt>)
 *           * +RuleAction+ - (<tt>String</tt>)
 *           * +Egress+ - (<tt>Boolean</tt>)
 *           * +CidrBlock+ - (<tt>String</tt>)
 *           * +IcmpTypeCode+ - (<tt>Object</tt>)
 *             * +Type+ - (<tt>Integer</tt>) For the ICMP protocol, the
 *               ICMP type. A value of -1 is a wildcard meaning all types.
 *               Required if specifying icmp for the protocol.
 *             * +Code+ - (<tt>Integer</tt>) For the ICMP protocol, the
 *               ICMP code. A value of -1 is a wildcard meaning all codes.
 *               Required if specifying icmp for the protocol.
 *           * +PortRange+ - (<tt>Object</tt>)
 *             * +From+ - (<tt>Integer</tt>) The first port in the range.
 *               Required if specifying tcp or udp for the protocol.
 *             * +To+ - (<tt>Integer</tt>) The last port in the range.
 *               Required if specifying tcp or udp for the protocol.
 *         * +Associations+ - (<tt>Array<Object></tt>)
 *           * +NetworkAclAssociationId+ - (<tt>String</tt>)
 *           * +NetworkAclId+ - (<tt>String</tt>)
 *           * +SubnetId+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createNetworkAclEntry(params, callback)
 *   Calls the CreateNetworkAclEntry API operation.
 *   @param params [Object]
 *     * +NetworkAclId+ - (*required*, <tt>String</tt>) ID of the ACL
 *       where the entry will be created.
 *     * +RuleNumber+ - (*required*, <tt>Integer</tt>) Rule number to
 *       assign to the entry (e.g., 100). ACL entries are processed in
 *       ascending order by rule number.
 *     * +Protocol+ - (*required*, <tt>String</tt>) IP protocol the rule
 *       applies to. Valid Values: tcp, udp, icmp or an IP protocol
 *       number.
 *     * +RuleAction+ - (*required*, <tt>String</tt>) Whether to allow or
 *       deny traffic that matches the rule.
 *     * +Egress+ - (*required*, <tt>Boolean</tt>) Whether this rule
 *       applies to egress traffic from the subnet (true) or ingress
 *       traffic to the subnet (false).
 *     * +CidrBlock+ - (*required*, <tt>String</tt>) The CIDR range to
 *       allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
 *     * +IcmpTypeCode+ - (<tt>Object</tt>) ICMP values.
 *       * +Type+ - (<tt>Integer</tt>) For the ICMP protocol, the ICMP
 *         type. A value of -1 is a wildcard meaning all types. Required
 *         if specifying icmp for the protocol.
 *       * +Code+ - (<tt>Integer</tt>) For the ICMP protocol, the ICMP
 *         code. A value of -1 is a wildcard meaning all codes. Required
 *         if specifying icmp for the protocol.
 *     * +PortRange+ - (<tt>Object</tt>) Port ranges.
 *       * +From+ - (<tt>Integer</tt>) The first port in the range.
 *         Required if specifying tcp or udp for the protocol.
 *       * +To+ - (<tt>Integer</tt>) The last port in the range. Required
 *         if specifying tcp or udp for the protocol.
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
 *
 * @!method createNetworkInterface(params, callback)
 *   Calls the CreateNetworkInterface API operation.
 *   @param params [Object]
 *     * +SubnetId+ - (*required*, <tt>String</tt>)
 *     * +Description+ - (<tt>String</tt>)
 *     * +PrivateIpAddress+ - (<tt>String</tt>)
 *     * +Groups+ - (<tt>Array<String></tt>)
 *     * +PrivateIpAddresses+ - (<tt>Array<Object></tt>)
 *       * +PrivateIpAddress+ - (*required*, <tt>String</tt>)
 *       * +Primary+ - (<tt>Boolean</tt>)
 *     * +SecondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +NetworkInterface+ - (<tt>Object</tt>)
 *         * +NetworkInterfaceId+ - (<tt>String</tt>)
 *         * +SubnetId+ - (<tt>String</tt>)
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>)
 *         * +Description+ - (<tt>String</tt>)
 *         * +OwnerId+ - (<tt>String</tt>)
 *         * +RequesterId+ - (<tt>String</tt>)
 *         * +RequesterManaged+ - (<tt>Boolean</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +MacAddress+ - (<tt>String</tt>)
 *         * +PrivateIpAddress+ - (<tt>String</tt>)
 *         * +PrivateDnsName+ - (<tt>String</tt>)
 *         * +SourceDestCheck+ - (<tt>Boolean</tt>)
 *         * +Groups+ - (<tt>Array<Object></tt>)
 *           * +GroupName+ - (<tt>String</tt>)
 *           * +GroupId+ - (<tt>String</tt>)
 *         * +Attachment+ - (<tt>Object</tt>)
 *           * +AttachmentId+ - (<tt>String</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +InstanceOwnerId+ - (<tt>String</tt>)
 *           * +DeviceIndex+ - (<tt>Integer</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +AttachTime+ - (<tt>Date</tt>)
 *           * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *         * +Association+ - (<tt>Object</tt>)
 *           * +PublicIp+ - (<tt>String</tt>)
 *           * +IpOwnerId+ - (<tt>String</tt>)
 *           * +AllocationId+ - (<tt>String</tt>)
 *           * +AssociationId+ - (<tt>String</tt>)
 *         * +TagSet+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +PrivateIpAddresses+ - (<tt>Array<Object></tt>)
 *           * +PrivateIpAddress+ - (<tt>String</tt>)
 *           * +Primary+ - (<tt>Boolean</tt>)
 *           * +Association+ - (<tt>Object</tt>)
 *             * +PublicIp+ - (<tt>String</tt>)
 *             * +IpOwnerId+ - (<tt>String</tt>)
 *             * +AllocationId+ - (<tt>String</tt>)
 *             * +AssociationId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPlacementGroup(params, callback)
 *   Calls the CreatePlacementGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) The name of the
 *       PlacementGroup.
 *     * +Strategy+ - (*required*, <tt>String</tt>) The PlacementGroup
 *       strategy.
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
 *
 * @!method createReservedInstancesListing(params, callback)
 *   Calls the CreateReservedInstancesListing API operation.
 *   @param params [Object]
 *     * +ReservedInstancesId+ - (*required*, <tt>String</tt>)
 *     * +InstanceCount+ - (*required*, <tt>Integer</tt>)
 *     * +PriceSchedules+ - (*required*, <tt>Array<Object></tt>)
 *       * +Term+ - (<tt>Integer</tt>)
 *       * +Price+ - (<tt>Float</tt>)
 *       * +CurrencyCode+ - (<tt>String</tt>)
 *     * +ClientToken+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservedInstancesListings+ - (<tt>Array<Object></tt>)
 *         * +ReservedInstancesListingId+ - (<tt>String</tt>)
 *         * +ReservedInstancesId+ - (<tt>String</tt>)
 *         * +CreateDate+ - (<tt>Date</tt>)
 *         * +UpdateDate+ - (<tt>Date</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +StatusMessage+ - (<tt>String</tt>)
 *         * +InstanceCounts+ - (<tt>Array<Object></tt>)
 *           * +State+ - (<tt>String</tt>)
 *           * +InstanceCount+ - (<tt>Integer</tt>)
 *         * +PriceSchedules+ - (<tt>Array<Object></tt>)
 *           * +Term+ - (<tt>Integer</tt>)
 *           * +Price+ - (<tt>Float</tt>)
 *           * +CurrencyCode+ - (<tt>String</tt>)
 *           * +Active+ - (<tt>Boolean</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +ClientToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createRoute(params, callback)
 *   Calls the CreateRoute API operation.
 *   @param params [Object]
 *     * +RouteTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table where the route will be added.
 *     * +DestinationCidrBlock+ - (*required*, <tt>String</tt>) The CIDR
 *       address block used for the destination match. For example:
 *       0.0.0.0/0. Routing decisions are based on the most specific
 *       match.
 *     * +GatewayId+ - (<tt>String</tt>) The ID of a VPN or Internet
 *       gateway attached to your VPC. You must provide either GatewayId
 *       or InstanceId, but not both.
 *     * +InstanceId+ - (<tt>String</tt>) The ID of a NAT instance in
 *       your VPC. You must provide either GatewayId or InstanceId, but
 *       not both.
 *     * +NetworkInterfaceId+ - (<tt>String</tt>)
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
 *
 * @!method createRouteTable(params, callback)
 *   Calls the CreateRouteTable API operation.
 *   @param params [Object]
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC where
 *       the route table will be created.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RouteTable+ - (<tt>Object</tt>)
 *         * +RouteTableId+ - (<tt>String</tt>)
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +Routes+ - (<tt>Array<Object></tt>)
 *           * +DestinationCidrBlock+ - (<tt>String</tt>)
 *           * +GatewayId+ - (<tt>String</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +InstanceOwnerId+ - (<tt>String</tt>)
 *           * +NetworkInterfaceId+ - (<tt>String</tt>)
 *           * +State+ - (<tt>String</tt>)
 *         * +Associations+ - (<tt>Array<Object></tt>)
 *           * +RouteTableAssociationId+ - (<tt>String</tt>)
 *           * +RouteTableId+ - (<tt>String</tt>)
 *           * +SubnetId+ - (<tt>String</tt>)
 *           * +Main+ - (<tt>Boolean</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +PropagatingVgws+ - (<tt>Array<Object></tt>)
 *           * +GatewayId+ - (<tt>String</tt>)
 *         * +PropagatedRoutes+ - (<tt>Array<Object></tt>)
 *           * +DestinationCidrBlock+ - (<tt>String</tt>)
 *           * +GatewayId+ - (<tt>String</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +SourceId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSecurityGroup(params, callback)
 *   Calls the CreateSecurityGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the security
 *       group.
 *     * +Description+ - (*required*, <tt>String</tt>) Description of the
 *       group. This is informational only.
 *     * +VpcId+ - (<tt>String</tt>) ID of the VPC.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +GroupId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSnapshot(params, callback)
 *   Calls the CreateSnapshot API operation.
 *   @param params [Object]
 *     * +VolumeId+ - (*required*, <tt>String</tt>) The ID of the volume
 *       from which to create the snapshot.
 *     * +Description+ - (<tt>String</tt>) The description for the new
 *       snapshot.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SnapshotId+ - (<tt>String</tt>) The unique ID of this snapshot.
 *       * +VolumeId+ - (<tt>String</tt>) The ID of the volume from which
 *         this snapshot was created.
 *       * +State+ - (<tt>String</tt>) Snapshot state (e.g., pending,
 *         completed, or error).
 *       * +StartTime+ - (<tt>Date</tt>) Time stamp when the snapshot was
 *         initiated.
 *       * +Progress+ - (<tt>String</tt>) The progress of the snapshot, in
 *         percentage.
 *       * +OwnerId+ - (<tt>String</tt>) AWS Access Key ID of the user who
 *         owns the snapshot.
 *       * +Description+ - (<tt>String</tt>) Description of the snapshot.
 *       * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *         gigabytes.
 *       * +OwnerAlias+ - (<tt>String</tt>) The AWS account alias (e.g.,
 *         "amazon", "redhat", "self", etc.) or AWS account ID that owns
 *         the AMI.
 *       * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         Snapshot.
 *         * +Key+ - (<tt>String</tt>) The tag's key.
 *         * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSpotDatafeedSubscription(params, callback)
 *   Calls the CreateSpotDatafeedSubscription API operation.
 *   @param params [Object]
 *     * +Bucket+ - (*required*, <tt>String</tt>) The Amazon S3 bucket in
 *       which to store the Spot Instance datafeed.
 *     * +Prefix+ - (<tt>String</tt>) The prefix that is prepended to
 *       datafeed files.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SpotDatafeedSubscription+ - (<tt>Object</tt>)
 *         * +OwnerId+ - (<tt>String</tt>) Specifies the AWS account ID of
 *           the account.
 *         * +Bucket+ - (<tt>String</tt>) Specifies the Amazon S3 bucket
 *           where the Spot Instance data feed is located.
 *         * +Prefix+ - (<tt>String</tt>) Contains the prefix that is
 *           prepended to data feed files.
 *         * +State+ - (<tt>String</tt>) Specifies the state of the Spot
 *           Instance request.
 *         * +Fault+ - (<tt>Object</tt>) Specifies a fault code for the
 *           Spot Instance request, if present.
 *           * +Code+ - (<tt>String</tt>)
 *           * +Message+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createSubnet(params, callback)
 *   Calls the CreateSubnet API operation.
 *   @param params [Object]
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC to
 *       create the subnet in.
 *     * +CidrBlock+ - (*required*, <tt>String</tt>) The CIDR block the
 *       subnet is to cover.
 *     * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone to
 *       create the subnet in.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Subnet+ - (<tt>Object</tt>)
 *         * +SubnetId+ - (<tt>String</tt>) Specifies the ID of the subnet.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           subnet. The state of the subnet may be either pending or
 *           available.
 *         * +VpcId+ - (<tt>String</tt>) Contains the ID of the VPC the
 *           subnet is in.
 *         * +CidrBlock+ - (<tt>String</tt>) Specifies the CIDR block
 *           assigned to the subnet.
 *         * +AvailableIpAddressCount+ - (<tt>Integer</tt>) Specifies the
 *           number of unused IP addresses in the subnet. The IP addresses
 *           for any stopped instances are considered unavailable.
 *         * +AvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           Availability Zone the subnet is in.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           Subnet.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createTags(params, callback)
 *   Calls the CreateTags API operation.
 *   @param params [Object]
 *     * +Resources+ - (*required*, <tt>Array<String></tt>) One or more
 *       IDs of resources to tag. This could be the ID of an AMI, an
 *       instance, an EBS volume, or snapshot, etc.
 *     * +Tags+ - (*required*, <tt>Array<Object></tt>) The tags to add or
 *       overwrite for the specified resources. Each tag item consists of
 *       a key-value pair.
 *       * +Key+ - (<tt>String</tt>) The tag's key.
 *       * +Value+ - (<tt>String</tt>) The tag's value.
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
 *
 * @!method createVolume(params, callback)
 *   Calls the CreateVolume API operation.
 *   @param params [Object]
 *     * +Size+ - (<tt>Integer</tt>) The size of the volume, in
 *       gigabytes. Required if you are not creating a volume from a
 *       snapshot.
 *     * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *       which to create the new volume.
 *     * +AvailabilityZone+ - (*required*, <tt>String</tt>) The
 *       Availability Zone in which to create the new volume.
 *     * +VolumeType+ - (<tt>String</tt>)
 *     * +Iops+ - (<tt>Integer</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VolumeId+ - (<tt>String</tt>) The unique ID of this volume.
 *       * +Size+ - (<tt>Integer</tt>) The size of this volume, in
 *         gigabytes.
 *       * +SnapshotId+ - (<tt>String</tt>) Optional snapshot from which
 *         this volume was created.
 *       * +AvailabilityZone+ - (<tt>String</tt>) Availability zone in
 *         which this volume was created.
 *       * +State+ - (<tt>String</tt>) State of this volume (e.g.,
 *         creating, available).
 *       * +CreateTime+ - (<tt>Date</tt>) Timestamp when volume creation
 *         was initiated.
 *       * +Attachments+ - (<tt>Array<Object></tt>) Information on what
 *         this volume is attached to.
 *         * +VolumeId+ - (<tt>String</tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +Device+ - (<tt>String</tt>) How the device is exposed to the
 *           instance (e.g., /dev/sdh).
 *         * +State+ - (<tt>String</tt>)
 *         * +AttachTime+ - (<tt>Date</tt>) Timestamp when this attachment
 *           initiated.
 *         * +DeleteOnTermination+ - (<tt>Boolean</tt>) ` Whether this
 *           volume will be deleted or not when the associated instance is
 *           terminated.
 *       * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the Volume.
 *         * +Key+ - (<tt>String</tt>) The tag's key.
 *         * +Value+ - (<tt>String</tt>) The tag's value.
 *       * +VolumeType+ - (<tt>String</tt>)
 *       * +Iops+ - (<tt>Integer</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createVpc(params, callback)
 *   Calls the CreateVpc API operation.
 *   @param params [Object]
 *     * +CidrBlock+ - (*required*, <tt>String</tt>) A valid CIDR block.
 *     * +InstanceTenancy+ - (<tt>String</tt>) The allowed tenancy of
 *       instances launched into the VPC. A value of default means
 *       instances can be launched with any tenancy; a value of dedicated
 *       means instances must be launched with tenancy as dedicated.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Vpc+ - (<tt>Object</tt>) Information about the VPC.
 *         * +VpcId+ - (<tt>String</tt>) Specifies the ID of the VPC.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           VPC. The state of the subnet may be either pending or
 *           available.
 *         * +CidrBlock+ - (<tt>String</tt>) Specifies the CIDR block the
 *           VPC covers.
 *         * +DhcpOptionsId+ - (<tt>String</tt>) Specifies the ID of the
 *           set of DHCP options associated with the VPC. Contains a value
 *           of default if the default options are associated with the VPC.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the VPC.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +InstanceTenancy+ - (<tt>String</tt>) The allowed tenancy of
 *           instances launched into the VPC.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createVpnConnection(params, callback)
 *   Calls the CreateVpnConnection API operation.
 *   @param params [Object]
 *     * +Type+ - (*required*, <tt>String</tt>) The type of VPN
 *       connection.
 *     * +CustomerGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the customer gateway.
 *     * +VpnGatewayId+ - (*required*, <tt>String</tt>) The ID of the VPN
 *       gateway.
 *     * +Options+ - (<tt>Object</tt>)
 *       * +StaticRoutesOnly+ - (<tt>Boolean</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VpnConnection+ - (<tt>Object</tt>)
 *         * +VpnConnectionId+ - (<tt>String</tt>) Specifies the ID of the
 *           VPN gateway at the VPC end of the VPN connection.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           VPN connection. Valid values are pending, available, deleting,
 *           and deleted.
 *         * +CustomerGatewayConfiguration+ - (<tt>String</tt>) Contains
 *           configuration information in the native XML format for the VPN
 *           connection's customer gateway. This element is always present
 *           in the CreateVpnConnection response; however, it's present in
 *           the DescribeVpnConnections response only if the VPN connection
 *           is in the pending or available state.
 *         * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *           connection.
 *         * +CustomerGatewayId+ - (<tt>String</tt>) Specifies ID of the
 *           customer gateway at the end of the VPN connection.
 *         * +VpnGatewayId+ - (<tt>String</tt>) Specfies the ID of the VPN
 *           gateway at the VPC end of the VPN connection.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           VpnConnection.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +VgwTelemetry+ - (<tt>Array<Object></tt>)
 *           * +OutsideIpAddress+ - (<tt>String</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +LastStatusChange+ - (<tt>Date</tt>)
 *           * +StatusMessage+ - (<tt>String</tt>)
 *           * +AcceptedRouteCount+ - (<tt>Integer</tt>)
 *         * +Options+ - (<tt>Object</tt>)
 *           * +StaticRoutesOnly+ - (<tt>Boolean</tt>)
 *         * +Routes+ - (<tt>Array<Object></tt>)
 *           * +DestinationCidrBlock+ - (<tt>String</tt>)
 *           * +Source+ - (<tt>String</tt>)
 *           * +State+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createVpnConnectionRoute(params, callback)
 *   Calls the CreateVpnConnectionRoute API operation.
 *   @param params [Object]
 *     * +VpnConnectionId+ - (*required*, <tt>String</tt>)
 *     * +DestinationCidrBlock+ - (*required*, <tt>String</tt>)
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
 *
 * @!method createVpnGateway(params, callback)
 *   Calls the CreateVpnGateway API operation.
 *   @param params [Object]
 *     * +Type+ - (*required*, <tt>String</tt>) The type of VPN
 *       connection this VPN gateway supports.
 *     * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone in
 *       which to create the VPN gateway.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VpnGateway+ - (<tt>Object</tt>)
 *         * +VpnGatewayId+ - (<tt>String</tt>) Specifies the ID of the VPN
 *           gateway.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           VPN gateway. Valid values are pending, available, deleting,
 *           and deleted.
 *         * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *           connection the VPN gateway supports.
 *         * +AvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           Availability Zone where the VPN gateway was created.
 *         * +VpcAttachments+ - (<tt>Array<Object></tt>) Contains
 *           information about the VPCs attached to the VPN gateway.
 *           * +VpcId+ - (<tt>String</tt>)
 *           * +State+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           VpnGateway.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deactivateLicense(params, callback)
 *   Calls the DeactivateLicense API operation.
 *   @param params [Object]
 *     * +LicenseId+ - (*required*, <tt>String</tt>) Specifies the ID for
 *       the specific license to deactivate against.
 *     * +Capacity+ - (*required*, <tt>Integer</tt>) Specifies the amount
 *       of capacity to deactivate against the license.
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
 *
 * @!method deleteCustomerGateway(params, callback)
 *   Calls the DeleteCustomerGateway API operation.
 *   @param params [Object]
 *     * +CustomerGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the customer gateway to delete.
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
 *
 * @!method deleteDhcpOptions(params, callback)
 *   Calls the DeleteDhcpOptions API operation.
 *   @param params [Object]
 *     * +DhcpOptionsId+ - (*required*, <tt>String</tt>) The ID of the
 *       DHCP options set to delete.
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
 *
 * @!method deleteInternetGateway(params, callback)
 *   Calls the DeleteInternetGateway API operation.
 *   @param params [Object]
 *     * +InternetGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the Internet gateway to be deleted.
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
 *
 * @!method deleteKeyPair(params, callback)
 *   Calls the DeleteKeyPair API operation.
 *   @param params [Object]
 *     * +KeyName+ - (*required*, <tt>String</tt>) The name of the Amazon
 *       EC2 key pair to delete.
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
 *
 * @!method deleteNetworkAcl(params, callback)
 *   Calls the DeleteNetworkAcl API operation.
 *   @param params [Object]
 *     * +NetworkAclId+ - (*required*, <tt>String</tt>) The ID of the
 *       network ACL to be deleted.
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
 *
 * @!method deleteNetworkAclEntry(params, callback)
 *   Calls the DeleteNetworkAclEntry API operation.
 *   @param params [Object]
 *     * +NetworkAclId+ - (*required*, <tt>String</tt>) ID of the network
 *       ACL.
 *     * +RuleNumber+ - (*required*, <tt>Integer</tt>) Rule number for
 *       the entry to delete.
 *     * +Egress+ - (*required*, <tt>Boolean</tt>) Whether the rule to
 *       delete is an egress rule (true) or ingress rule (false).
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
 *
 * @!method deleteNetworkInterface(params, callback)
 *   Calls the DeleteNetworkInterface API operation.
 *   @param params [Object]
 *     * +NetworkInterfaceId+ - (*required*, <tt>String</tt>)
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
 *
 * @!method deletePlacementGroup(params, callback)
 *   Calls the DeletePlacementGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) The name of the
 *       PlacementGroup to delete.
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
 *
 * @!method deleteRoute(params, callback)
 *   Calls the DeleteRoute API operation.
 *   @param params [Object]
 *     * +RouteTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table where the route will be deleted.
 *     * +DestinationCidrBlock+ - (*required*, <tt>String</tt>) The CIDR
 *       range for the route you want to delete. The value you specify
 *       must exactly match the CIDR for the route you want to delete.
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
 *
 * @!method deleteRouteTable(params, callback)
 *   Calls the DeleteRouteTable API operation.
 *   @param params [Object]
 *     * +RouteTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table to be deleted.
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
 *
 * @!method deleteSecurityGroup(params, callback)
 *   Calls the DeleteSecurityGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (<tt>String</tt>) The name of the Amazon EC2
 *       security group to delete.
 *     * +GroupId+ - (<tt>String</tt>) The ID of the Amazon EC2 security
 *       group to delete.
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
 *
 * @!method deleteSnapshot(params, callback)
 *   Calls the DeleteSnapshot API operation.
 *   @param params [Object]
 *     * +SnapshotId+ - (*required*, <tt>String</tt>) The ID of the
 *       snapshot to delete.
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
 *
 * @!method deleteSpotDatafeedSubscription(params, callback)
 *   Calls the DeleteSpotDatafeedSubscription API operation.
 *   @param params [Object]
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
 *
 * @!method deleteSubnet(params, callback)
 *   Calls the DeleteSubnet API operation.
 *   @param params [Object]
 *     * +SubnetId+ - (*required*, <tt>String</tt>) The ID of the subnet
 *       you want to delete.
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
 *
 * @!method deleteTags(params, callback)
 *   Calls the DeleteTags API operation.
 *   @param params [Object]
 *     * +Resources+ - (*required*, <tt>Array<String></tt>) A list of one
 *       or more resource IDs. This could be the ID of an AMI, an
 *       instance, an EBS volume, or snapshot, etc.
 *     * +Tags+ - (<tt>Array<Object></tt>) The tags to delete from the
 *       specified resources. Each tag item consists of a key-value pair.
 *       If a tag is specified without a value, the tag and all of its
 *       values are deleted.
 *       * +Key+ - (<tt>String</tt>) The tag's key.
 *       * +Value+ - (<tt>String</tt>) The tag's value.
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
 *
 * @!method deleteVolume(params, callback)
 *   Calls the DeleteVolume API operation.
 *   @param params [Object]
 *     * +VolumeId+ - (*required*, <tt>String</tt>) The ID of the EBS
 *       volume to delete.
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
 *
 * @!method deleteVpc(params, callback)
 *   Calls the DeleteVpc API operation.
 *   @param params [Object]
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC you
 *       want to delete.
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
 *
 * @!method deleteVpnConnection(params, callback)
 *   Calls the DeleteVpnConnection API operation.
 *   @param params [Object]
 *     * +VpnConnectionId+ - (*required*, <tt>String</tt>) The ID of the
 *       VPN connection to delete
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
 *
 * @!method deleteVpnConnectionRoute(params, callback)
 *   Calls the DeleteVpnConnectionRoute API operation.
 *   @param params [Object]
 *     * +VpnConnectionId+ - (*required*, <tt>String</tt>)
 *     * +DestinationCidrBlock+ - (*required*, <tt>String</tt>)
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
 *
 * @!method deleteVpnGateway(params, callback)
 *   Calls the DeleteVpnGateway API operation.
 *   @param params [Object]
 *     * +VpnGatewayId+ - (*required*, <tt>String</tt>) The ID of the VPN
 *       gateway to delete.
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
 *
 * @!method deregisterImage(params, callback)
 *   Calls the DeregisterImage API operation.
 *   @param params [Object]
 *     * +ImageId+ - (*required*, <tt>String</tt>) The ID of the AMI to
 *       deregister.
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
 *
 * @!method describeAddresses(params, callback)
 *   Calls the DescribeAddresses API operation.
 *   @param params [Object]
 *     * +PublicIps+ - (<tt>Array<String></tt>) The optional list of
 *       Elastic IP addresses to describe.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Addresses. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +AllocationIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Addresses+ - (<tt>Array<Object></tt>) The list of Elastic IPs.
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +PublicIp+ - (<tt>String</tt>)
 *         * +AllocationId+ - (<tt>String</tt>)
 *         * +AssociationId+ - (<tt>String</tt>)
 *         * +Domain+ - (<tt>String</tt>)
 *         * +NetworkInterfaceId+ - (<tt>String</tt>)
 *         * +NetworkInterfaceOwnerId+ - (<tt>String</tt>)
 *         * +PrivateIpAddress+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAvailabilityZones(params, callback)
 *   Calls the DescribeAvailabilityZones API operation.
 *   @param params [Object]
 *     * +ZoneNames+ - (<tt>Array<String></tt>) A list of the
 *       availability zone names to describe.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for AvailabilityZones. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AvailabilityZones+ - (<tt>Array<Object></tt>) The list of
 *         described Amazon EC2 availability zones.
 *         * +ZoneName+ - (<tt>String</tt>) Name of the Availability Zone.
 *         * +State+ - (<tt>String</tt>) State of the Availability Zone.
 *         * +RegionName+ - (<tt>String</tt>) Name of the region in which
 *           this zone resides.
 *         * +Messages+ - (<tt>Array<Object></tt>) A list of messages about
 *           the Availability Zone.
 *           * +Message+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeBundleTasks(params, callback)
 *   Calls the DescribeBundleTasks API operation.
 *   @param params [Object]
 *     * +BundleIds+ - (<tt>Array<String></tt>) The list of bundle task
 *       IDs to describe.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for BundleTasks. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +BundleTasks+ - (<tt>Array<Object></tt>) The list of described
 *         bundle tasks.
 *         * +InstanceId+ - (<tt>String</tt>) Instance associated with this
 *           bundle task.
 *         * +BundleId+ - (<tt>String</tt>) Unique identifier for this
 *           task.
 *         * +State+ - (<tt>String</tt>) The state of this task.
 *         * +StartTime+ - (<tt>Date</tt>) The time this task started.
 *         * +UpdateTime+ - (<tt>Date</tt>) The time of the most recent
 *           update for the task.
 *         * +Storage+ - (<tt>Object</tt>) Amazon S3 storage locations.
 *           * +S3+ - (<tt>Object</tt>) The details of S3 storage for
 *             bundling a Windows instance.
 *             * +Bucket+ - (<tt>String</tt>) The bucket in which to store
 *               the AMI. You can specify a bucket that you already own or
 *               a new bucket that Amazon EC2 creates on your behalf. If
 *               you specify a bucket that belongs to someone else, Amazon
 *               EC2 returns an error.
 *             * +Prefix+ - (<tt>String</tt>) The prefix to use when
 *               storing the AMI in S3.
 *             * +AWSAccessKeyId+ - (<tt>String</tt>) The Access Key ID of
 *               the owner of the Amazon S3 bucket.
 *             * +UploadPolicy+ - (<tt>String</tt>) A Base64-encoded Amazon
 *               S3 upload policy that gives Amazon EC2 permission to
 *               upload items into Amazon S3 on the user's behalf.
 *             * +UploadPolicySignature+ - (<tt>String</tt>) The signature
 *               of the Base64 encoded JSON document.
 *         * +Progress+ - (<tt>String</tt>) The level of task completion,
 *           in percent (e.g., 20%).
 *         * +BundleTaskError+ - (<tt>Object</tt>) If the task fails, a
 *           description of the error.
 *           * +Code+ - (<tt>String</tt>) Error code.
 *           * +Message+ - (<tt>String</tt>) Error message.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeConversionTasks(params, callback)
 *   Calls the DescribeConversionTasks API operation.
 *   @param params [Object]
 *     * +Filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +ConversionTaskIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ConversionTasks+ - (<tt>Array<Object></tt>)
 *         * +ConversionTaskId+ - (<tt>String</tt>)
 *         * +ExpirationTime+ - (<tt>String</tt>)
 *         * +ImportInstance+ - (<tt>Object</tt>)
 *           * +Volumes+ - (<tt>Array<Object></tt>)
 *             * +BytesConverted+ - (<tt>Integer</tt>)
 *             * +AvailabilityZone+ - (<tt>String</tt>)
 *             * +Image+ - (<tt>Object</tt>)
 *               * +Format+ - (<tt>String</tt>)
 *               * +Size+ - (<tt>Integer</tt>)
 *               * +ImportManifestUrl+ - (<tt>String</tt>)
 *               * +Checksum+ - (<tt>String</tt>)
 *             * +Volume+ - (<tt>Object</tt>)
 *               * +Size+ - (<tt>Integer</tt>)
 *               * +Id+ - (<tt>String</tt>)
 *             * +Status+ - (<tt>String</tt>)
 *             * +StatusMessage+ - (<tt>String</tt>)
 *             * +Description+ - (<tt>String</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +Platform+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *         * +ImportVolume+ - (<tt>Object</tt>)
 *           * +BytesConverted+ - (<tt>Integer</tt>)
 *           * +AvailabilityZone+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *           * +Image+ - (<tt>Object</tt>)
 *             * +Format+ - (<tt>String</tt>)
 *             * +Size+ - (<tt>Integer</tt>)
 *             * +ImportManifestUrl+ - (<tt>String</tt>)
 *             * +Checksum+ - (<tt>String</tt>)
 *           * +Volume+ - (<tt>Object</tt>)
 *             * +Size+ - (<tt>Integer</tt>)
 *             * +Id+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *         * +StatusMessage+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCustomerGateways(params, callback)
 *   Calls the DescribeCustomerGateways API operation.
 *   @param params [Object]
 *     * +CustomerGatewayIds+ - (<tt>Array<String></tt>) A set of one or
 *       more customer gateway IDs.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Customer Gateways. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CustomerGateways+ - (<tt>Array<Object></tt>)
 *         * +CustomerGatewayId+ - (<tt>String</tt>) Specifies the ID of
 *           the customer gateway.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           customer gateway. Valid values are pending, available,
 *           deleting, and deleted.
 *         * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *           connection the customer gateway supports.
 *         * +IpAddress+ - (<tt>String</tt>) Contains the Internet-routable
 *           IP address of the customer gateway's outside interface.
 *         * +BgpAsn+ - (<tt>String</tt>) Specifies the customer gateway's
 *           Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           CustomerGateway.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDhcpOptions(params, callback)
 *   Calls the DescribeDhcpOptions API operation.
 *   @param params [Object]
 *     * +DhcpOptionsIds+ - (<tt>Array<String></tt>)
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for DhcpOptions. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DhcpOptions+ - (<tt>Array<Object></tt>)
 *         * +DhcpOptionsId+ - (<tt>String</tt>) Specifies the ID of the
 *           set of DHCP options.
 *         * +DhcpConfigurations+ - (<tt>Array<Object></tt>) Contains
 *           information about the set of DHCP options.
 *           * +Key+ - (<tt>String</tt>) Contains the name of a DHCP
 *             option.
 *           * +Values+ - (<tt>Array<String></tt>) Contains a set of values
 *             for a DHCP option.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           DhcpOptions.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeExportTasks(params, callback)
 *   Calls the DescribeExportTasks API operation.
 *   @param params [Object]
 *     * +ExportTaskIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ExportTasks+ - (<tt>Array<Object></tt>)
 *         * +ExportTaskId+ - (<tt>String</tt>)
 *         * +Description+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *         * +StatusMessage+ - (<tt>String</tt>)
 *         * +InstanceExportDetails+ - (<tt>Object</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +TargetEnvironment+ - (<tt>String</tt>)
 *         * +ExportToS3Task+ - (<tt>Object</tt>)
 *           * +DiskImageFormat+ - (<tt>String</tt>)
 *           * +ContainerFormat+ - (<tt>String</tt>)
 *           * +S3Bucket+ - (<tt>String</tt>)
 *           * +S3Key+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeImageAttribute(params, callback)
 *   Calls the DescribeImageAttribute API operation.
 *   @param params [Object]
 *     * +ImageId+ - (*required*, <tt>String</tt>) The ID of the AMI
 *       whose attribute is to be described.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute to describe. Available attribute names: productCodes,
 *       kernel, ramdisk, launchPermisson, blockDeviceMapping
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ImageId+ - (<tt>String</tt>) The ID of the associated AMI.
 *       * +LaunchPermissions+ - (<tt>Array<Object></tt>) Launch
 *         permissions for the associated AMI.
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of the user
 *           involved in this launch permission.
 *         * +Group+ - (<tt>String</tt>) The AWS group of the user involved
 *           in this launch permission. Available groups: all
 *       * +ProductCodes+ - (<tt>Array<Object></tt>) Product codes for the
 *         associated AMI.
 *         * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *           DevPay product code.
 *         * +ProductCodeType+ - (<tt>String</tt>)
 *       * +KernelId+ - (<tt>Object</tt>) Kernel ID of the associated AMI.
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +RamdiskId+ - (<tt>Object</tt>) Ramdisk ID of the associated
 *         AMI.
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +Description+ - (<tt>Object</tt>) User-created description of
 *         the associated AMI.
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Block device
 *         mappings for the associated AMI.
 *         * +VirtualName+ - (<tt>String</tt>) Specifies the virtual device
 *           name.
 *         * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *             which the volume will be created.
 *           * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *             gigabytes.
 *           * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *             the Amazon EBS volume is deleted on instance termination.
 *           * +VolumeType+ - (<tt>String</tt>)
 *           * +Iops+ - (<tt>Integer</tt>)
 *         * +NoDevice+ - (<tt>String</tt>) Specifies the device name to
 *           suppress during instance launch.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeImages(params, callback)
 *   Calls the DescribeImages API operation.
 *   @param params [Object]
 *     * +ImageIds+ - (<tt>Array<String></tt>) An optional list of the
 *       AMI IDs to describe. If not specified, all AMIs will be
 *       described.
 *     * +Owners+ - (<tt>Array<String></tt>) The optional list of owners
 *       for the described AMIs. The IDs amazon, self, and explicit can
 *       be used to include AMIs owned by Amazon, AMIs owned by the user,
 *       and AMIs for which the user has explicit launch permissions,
 *       respectively.
 *     * +ExecutableUsers+ - (<tt>Array<String></tt>) The optional list
 *       of users with explicit launch permissions for the described
 *       AMIs. The user ID can be a user's account ID, 'self' to return
 *       AMIs for which the sender of the request has explicit launch
 *       permissions, or 'all' to return AMIs with public launch
 *       permissions.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Images. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Images+ - (<tt>Array<Object></tt>) The list of the described
 *         AMIs.
 *         * +ImageId+ - (<tt>String</tt>) The unique ID of the AMI.
 *         * +ImageLocation+ - (<tt>String</tt>) The location of the AMI.
 *         * +State+ - (<tt>String</tt>) Current state of the AMI. If the
 *           operation returns available, the image is successfully
 *           registered and available for launching. If the operation
 *           returns deregistered, the image is deregistered and no longer
 *           available for launching.
 *         * +OwnerId+ - (<tt>String</tt>) AWS Access Key ID of the image
 *           owner.
 *         * +Public+ - (<tt>Boolean</tt>) True if this image has public
 *           launch permissions. False if it only has implicit and explicit
 *           launch permissions.
 *         * +ProductCodes+ - (<tt>Array<Object></tt>) Product codes of the
 *           AMI.
 *           * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *             DevPay product code.
 *           * +ProductCodeType+ - (<tt>String</tt>)
 *         * +Architecture+ - (<tt>String</tt>) The architecture of the
 *           image.
 *         * +ImageType+ - (<tt>String</tt>) The type of image (machine,
 *           kernel, or ramdisk).
 *         * +KernelId+ - (<tt>String</tt>) The kernel associated with the
 *           image, if any. Only applicable for machine images.
 *         * +RamdiskId+ - (<tt>String</tt>) The RAM disk associated with
 *           the image, if any. Only applicable for machine images.
 *         * +Platform+ - (<tt>String</tt>) The operating platform of the
 *           AMI.
 *         * +StateReason+ - (<tt>Object</tt>) The reason for the state
 *           change.
 *           * +Code+ - (<tt>String</tt>) Reason code for the state change.
 *           * +Message+ - (<tt>String</tt>) Descriptive message for the
 *             state change.
 *         * +ImageOwnerAlias+ - (<tt>String</tt>) The AWS account alias
 *           (e.g., "amazon", "redhat", "self", etc.) or AWS account ID
 *           that owns the AMI.
 *         * +Name+ - (<tt>String</tt>) The name of the AMI that was
 *           provided during image creation.
 *         * +Description+ - (<tt>String</tt>) The description of the AMI
 *           that was provided during image creation.
 *         * +RootDeviceType+ - (<tt>String</tt>) The root device type used
 *           by the AMI. The AMI can use an Amazon EBS or instance store
 *           root device.
 *         * +RootDeviceName+ - (<tt>String</tt>) The root device name
 *           (e.g., /dev/sda1).
 *         * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies how
 *           block devices are exposed to the instance.
 *           * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *             device name.
 *           * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *             (e.g., /dev/sdh).
 *           * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *             automatically setup Amazon EBS volumes when the instance is
 *             launched.
 *             * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *               from which the volume will be created.
 *             * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume,
 *               in gigabytes.
 *             * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *               whether the Amazon EBS volume is deleted on instance
 *               termination.
 *             * +VolumeType+ - (<tt>String</tt>)
 *             * +Iops+ - (<tt>Integer</tt>)
 *           * +NoDevice+ - (<tt>String</tt>) Specifies the device name to
 *             suppress during instance launch.
 *         * +VirtualizationType+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           Image.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +Hypervisor+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstanceAttribute(params, callback)
 *   Calls the DescribeInstanceAttribute API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance whose instance attribute is being described.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute to describe. Available attribute names: instanceType,
 *       kernel, ramdisk, userData, disableApiTermination,
 *       instanceInitiatedShutdownBehavior, rootDeviceName,
 *       blockDeviceMapping
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceId+ - (<tt>String</tt>) The ID of the associated
 *         instance.
 *       * +InstanceType+ - (<tt>Object</tt>) The instance type (e.g.,
 *         m1.small, c1.medium, m2.2xlarge, and so on).
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +KernelId+ - (<tt>Object</tt>) The kernel ID of the associated
 *         instance.
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +RamdiskId+ - (<tt>Object</tt>) The ramdisk ID of the associated
 *         instance.
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +UserData+ - (<tt>Object</tt>) MIME, Base64-encoded user data.
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +DisableApiTermination+ - (<tt>Object</tt>) Whether this
 *         instance can be terminated. You must modify this attribute
 *         before you can terminate any "locked" instances.
 *         * +Value+ - (<tt>Boolean</tt>) Boolean value
 *       * +InstanceInitiatedShutdownBehavior+ - (<tt>Object</tt>) Whether
 *         this instance's Amazon EBS volumes are deleted when the instance
 *         is shut down.
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +RootDeviceName+ - (<tt>Object</tt>) The root device name (e.g.,
 *         /dev/sda1).
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) How block
 *         devices are exposed to this instance. Each mapping is made up of
 *         a virtualName and a deviceName.
 *         * +DeviceName+ - (<tt>String</tt>) The device name (e.g.,
 *           /dev/sdh) at which the block device is exposed on the
 *           instance.
 *         * +Ebs+ - (<tt>Object</tt>) The optional EBS device mapped to
 *           the specified device name.
 *           * +VolumeId+ - (<tt>String</tt>) The ID of the EBS volume.
 *           * +Status+ - (<tt>String</tt>) The status of the EBS volume.
 *           * +AttachTime+ - (<tt>Date</tt>) The time at which the EBS
 *             volume was attached to the associated instance.
 *           * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *             the Amazon EBS volume is deleted on instance termination.
 *       * +ProductCodes+ - (<tt>Array<Object></tt>)
 *         * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *           DevPay product code.
 *         * +ProductCodeType+ - (<tt>String</tt>)
 *       * +EbsOptimized+ - (<tt>Object</tt>)
 *         * +Value+ - (<tt>Boolean</tt>) Boolean value
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstanceStatus(params, callback)
 *   Calls the DescribeInstanceStatus API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (<tt>Array<String></tt>) The list of instance
 *       IDs. If not specified, all instances are described.
 *     * +Filters+ - (<tt>Array<Object></tt>) The list of filters to
 *       limit returned results.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +NextToken+ - (<tt>String</tt>) A string specifying the next
 *       paginated set of results to return.
 *     * +MaxResults+ - (<tt>Integer</tt>) The maximum number of
 *       paginated instance items per response.
 *     * +IncludeAllInstances+ - (<tt>Boolean</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceStatuses+ - (<tt>Array<Object></tt>) Collection of
 *         instance statuses describing the state of the requested
 *         instances.
 *         * +InstanceId+ - (<tt>String</tt>) The ID of the Amazon EC2
 *           instance.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The Amazon EC2
 *           instance's availability zone.
 *         * +Events+ - (<tt>Array<Object></tt>) Events that affect the
 *           status of the associated Amazon EC2 instance.
 *           * +Code+ - (<tt>String</tt>) The associated code of the event.
 *             Valid values: instance-reboot, system-reboot,
 *             instance-retirement
 *           * +Description+ - (<tt>String</tt>) A description of the
 *             event.
 *           * +NotBefore+ - (<tt>Date</tt>) The earliest scheduled start
 *             time for the event.
 *           * +NotAfter+ - (<tt>Date</tt>) The latest scheduled end time
 *             for the event.
 *         * +InstanceState+ - (<tt>Object</tt>)
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * +Name+ - (<tt>String</tt>) The current state of the
 *             instance.
 *         * +SystemStatus+ - (<tt>Object</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +Details+ - (<tt>Array<Object></tt>)
 *             * +Name+ - (<tt>String</tt>)
 *             * +Status+ - (<tt>String</tt>)
 *             * +ImpairedSince+ - (<tt>Date</tt>)
 *         * +InstanceStatus+ - (<tt>Object</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +Details+ - (<tt>Array<Object></tt>)
 *             * +Name+ - (<tt>String</tt>)
 *             * +Status+ - (<tt>String</tt>)
 *             * +ImpairedSince+ - (<tt>Date</tt>)
 *       * +NextToken+ - (<tt>String</tt>) A string specifying the next
 *         paginated set of results to return.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstances(params, callback)
 *   Calls the DescribeInstances API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (<tt>Array<String></tt>) An optional list of the
 *       instances to describe.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Instances. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Reservations+ - (<tt>Array<Object></tt>) The list of
 *         reservations containing the describes instances.
 *         * +ReservationId+ - (<tt>String</tt>) The unique ID of this
 *           reservation.
 *         * +OwnerId+ - (<tt>String</tt>) The AWS Access Key ID of the
 *           user who owns the reservation.
 *         * +RequesterId+ - (<tt>String</tt>) The unique ID of the user
 *           who requested the instances in this reservation.
 *         * +Groups+ - (<tt>Array<Object></tt>) The list of security
 *           groups requested for the instances in this reservation.
 *           * +GroupName+ - (<tt>String</tt>)
 *           * +GroupId+ - (<tt>String</tt>)
 *         * +Instances+ - (<tt>Array<Object></tt>) The list of Amazon EC2
 *           instances included in this reservation.
 *           * +InstanceId+ - (<tt>String</tt>) Unique ID of the instance
 *             launched.
 *           * +ImageId+ - (<tt>String</tt>) Image ID of the AMI used to
 *             launch the instance.
 *           * +State+ - (<tt>Object</tt>) The current state of the
 *             instance.
 *             * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *               high byte is an opaque internal value and should be
 *               ignored. The low byte is set based on the state
 *               represented.
 *             * +Name+ - (<tt>String</tt>) The current state of the
 *               instance.
 *           * +PrivateDnsName+ - (<tt>String</tt>) The private DNS name
 *             assigned to the instance. This DNS name can only be used
 *             inside the Amazon EC2 network. This element remains empty
 *             until the instance enters a running state.
 *           * +PublicDnsName+ - (<tt>String</tt>) The public DNS name
 *             assigned to the instance. This DNS name is contactable from
 *             outside the Amazon EC2 network. This element remains empty
 *             until the instance enters a running state.
 *           * +StateTransitionReason+ - (<tt>String</tt>) Reason for the
 *             most recent state transition. This might be an empty string.
 *           * +KeyName+ - (<tt>String</tt>) If this instance was launched
 *             with an associated key pair, this displays the key pair
 *             name.
 *           * +AmiLaunchIndex+ - (<tt>Integer</tt>) The AMI launch index,
 *             which can be used to find this instance within the launch
 *             group.
 *           * +ProductCodes+ - (<tt>Array<Object></tt>) Product codes
 *             attached to this instance.
 *             * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an
 *               AWS DevPay product code.
 *             * +ProductCodeType+ - (<tt>String</tt>)
 *           * +InstanceType+ - (<tt>String</tt>) The instance type. For
 *             more information on instance types, please see the Amazon
 *             Elastic Compute Cloud Developer Guide.
 *           * +LaunchTime+ - (<tt>Date</tt>) The time this instance
 *             launched.
 *           * +Placement+ - (<tt>Object</tt>) The location where this
 *             instance launched.
 *             * +AvailabilityZone+ - (<tt>String</tt>) The availability
 *               zone in which an Amazon EC2 instance runs.
 *             * +GroupName+ - (<tt>String</tt>) The name of the
 *               PlacementGroup in which an Amazon EC2 instance runs.
 *               Placement groups are primarily used for launching High
 *               Performance Computing instances in the same group to
 *               ensure fast connection speeds.
 *             * +Tenancy+ - (<tt>String</tt>) The allowed tenancy of
 *               instances launched into the VPC. A value of default means
 *               instances can be launched with any tenancy; a value of
 *               dedicated means all instances launched into the VPC will
 *               be launched as dedicated tenancy regardless of the tenancy
 *               assigned to the instance at launch.
 *           * +KernelId+ - (<tt>String</tt>) Kernel associated with this
 *             instance.
 *           * +RamdiskId+ - (<tt>String</tt>) RAM disk associated with
 *             this instance.
 *           * +Platform+ - (<tt>String</tt>) Platform of the instance
 *             (e.g., Windows).
 *           * +Monitoring+ - (<tt>Object</tt>) Monitoring status for this
 *             instance.
 *             * +State+ - (<tt>String</tt>) The state of monitoring on an
 *               Amazon EC2 instance (ex: enabled, disabled).
 *           * +SubnetId+ - (<tt>String</tt>) Specifies the Amazon VPC
 *             subnet ID in which the instance is running.
 *           * +VpcId+ - (<tt>String</tt>) Specifies the Amazon VPC in
 *             which the instance is running.
 *           * +PrivateIpAddress+ - (<tt>String</tt>) Specifies the private
 *             IP address that is assigned to the instance (Amazon VPC).
 *           * +PublicIpAddress+ - (<tt>String</tt>) Specifies the IP
 *             address of the instance.
 *           * +StateReason+ - (<tt>Object</tt>) The reason for the state
 *             change.
 *             * +Code+ - (<tt>String</tt>) Reason code for the state
 *               change.
 *             * +Message+ - (<tt>String</tt>) Descriptive message for the
 *               state change.
 *           * +Architecture+ - (<tt>String</tt>) The architecture of this
 *             instance.
 *           * +RootDeviceType+ - (<tt>String</tt>) The root device type
 *             used by the AMI. The AMI can use an Amazon EBS or instance
 *             store root device.
 *           * +RootDeviceName+ - (<tt>String</tt>) The root device name
 *             (e.g., /dev/sda1).
 *           * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Block
 *             device mapping set.
 *             * +DeviceName+ - (<tt>String</tt>) The device name (e.g.,
 *               /dev/sdh) at which the block device is exposed on the
 *               instance.
 *             * +Ebs+ - (<tt>Object</tt>) The optional EBS device mapped
 *               to the specified device name.
 *               * +VolumeId+ - (<tt>String</tt>) The ID of the EBS volume.
 *               * +Status+ - (<tt>String</tt>) The status of the EBS
 *                 volume.
 *               * +AttachTime+ - (<tt>Date</tt>) The time at which the EBS
 *                 volume was attached to the associated instance.
 *               * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *                 whether the Amazon EBS volume is deleted on instance
 *                 termination.
 *           * +VirtualizationType+ - (<tt>String</tt>)
 *           * +InstanceLifecycle+ - (<tt>String</tt>)
 *           * +SpotInstanceRequestId+ - (<tt>String</tt>)
 *           * +License+ - (<tt>Object</tt>)
 *             * +Pool+ - (<tt>String</tt>) The license pool from which
 *               this license was used (ex: 'windows').
 *           * +ClientToken+ - (<tt>String</tt>)
 *           * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *             Instance.
 *             * +Key+ - (<tt>String</tt>) The tag's key.
 *             * +Value+ - (<tt>String</tt>) The tag's value.
 *           * +SecurityGroups+ - (<tt>Array<Object></tt>)
 *             * +GroupName+ - (<tt>String</tt>)
 *             * +GroupId+ - (<tt>String</tt>)
 *           * +SourceDestCheck+ - (<tt>Boolean</tt>)
 *           * +Hypervisor+ - (<tt>String</tt>)
 *           * +NetworkInterfaces+ - (<tt>Array<Object></tt>)
 *             * +NetworkInterfaceId+ - (<tt>String</tt>)
 *             * +SubnetId+ - (<tt>String</tt>)
 *             * +VpcId+ - (<tt>String</tt>)
 *             * +Description+ - (<tt>String</tt>)
 *             * +OwnerId+ - (<tt>String</tt>)
 *             * +Status+ - (<tt>String</tt>)
 *             * +PrivateIpAddress+ - (<tt>String</tt>)
 *             * +PrivateDnsName+ - (<tt>String</tt>)
 *             * +SourceDestCheck+ - (<tt>Boolean</tt>)
 *             * +Groups+ - (<tt>Array<Object></tt>)
 *               * +GroupName+ - (<tt>String</tt>)
 *               * +GroupId+ - (<tt>String</tt>)
 *             * +Attachment+ - (<tt>Object</tt>)
 *               * +AttachmentId+ - (<tt>String</tt>)
 *               * +DeviceIndex+ - (<tt>Integer</tt>)
 *               * +Status+ - (<tt>String</tt>)
 *               * +AttachTime+ - (<tt>Date</tt>)
 *               * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *             * +Association+ - (<tt>Object</tt>)
 *               * +PublicIp+ - (<tt>String</tt>)
 *               * +IpOwnerId+ - (<tt>String</tt>)
 *           * +IamInstanceProfile+ - (<tt>Object</tt>)
 *             * +Arn+ - (<tt>String</tt>)
 *             * +Id+ - (<tt>String</tt>)
 *           * +EbsOptimized+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInternetGateways(params, callback)
 *   Calls the DescribeInternetGateways API operation.
 *   @param params [Object]
 *     * +InternetGatewayIds+ - (<tt>Array<String></tt>) One or more
 *       Internet gateway IDs.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Internet Gateways. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InternetGateways+ - (<tt>Array<Object></tt>)
 *         * +InternetGatewayId+ - (<tt>String</tt>)
 *         * +Attachments+ - (<tt>Array<Object></tt>)
 *           * +VpcId+ - (<tt>String</tt>)
 *           * +State+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeKeyPairs(params, callback)
 *   Calls the DescribeKeyPairs API operation.
 *   @param params [Object]
 *     * +KeyNames+ - (<tt>Array<String></tt>) The optional list of key
 *       pair names to describe.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for KeyPairs. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +KeyPairs+ - (<tt>Array<Object></tt>) The list of described key
 *         pairs.
 *         * +KeyName+ - (<tt>String</tt>) The name of the key pair.
 *         * +KeyFingerprint+ - (<tt>String</tt>) The SHA-1 digest of the
 *           DER encoded private key.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLicenses(params, callback)
 *   Calls the DescribeLicenses API operation.
 *   @param params [Object]
 *     * +LicenseIds+ - (<tt>Array<String></tt>) Specifies the license
 *       registration for which details are to be returned.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Licenses. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Licenses+ - (<tt>Array<Object></tt>) Specifies active licenses
 *         in use and attached to an Amazon EC2 instance.
 *         * +LicenseId+ - (<tt>String</tt>) The unique ID identifying the
 *           license.
 *         * +Type+ - (<tt>String</tt>) The license type (ex.
 *           "Microsoft/Windows/Standard").
 *         * +Pool+ - (<tt>String</tt>) The name of the pool in which the
 *           license is kept.
 *         * +Capacities+ - (<tt>Array<Object></tt>) The capacities
 *           available for this license, indicating how many licenses are
 *           in use, how many are available, how many Amazon EC2 instances
 *           can be supported, etc.
 *           * +Capacity+ - (<tt>Integer</tt>) The number of licenses
 *             available.
 *           * +InstanceCapacity+ - (<tt>Integer</tt>) The number of Amazon
 *             EC2 instances that can be supported with the license's
 *             capacity.
 *           * +State+ - (<tt>String</tt>) The state of this license
 *             capacity, indicating whether the license is actively being
 *             used or not.
 *           * +EarliestAllowedDeactivationTime+ - (<tt>Date</tt>) The
 *             earliest allowed time at which a license can be deactivated.
 *             Some licenses have time restrictions on when they can be
 *             activated and reactivated.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           License.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeNetworkAcls(params, callback)
 *   Calls the DescribeNetworkAcls API operation.
 *   @param params [Object]
 *     * +NetworkAclIds+ - (<tt>Array<String></tt>) One or more network
 *       ACL IDs.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Network ACLs. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +NetworkAcls+ - (<tt>Array<Object></tt>)
 *         * +NetworkAclId+ - (<tt>String</tt>)
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +IsDefault+ - (<tt>Boolean</tt>)
 *         * +Entries+ - (<tt>Array<Object></tt>)
 *           * +RuleNumber+ - (<tt>Integer</tt>)
 *           * +Protocol+ - (<tt>String</tt>)
 *           * +RuleAction+ - (<tt>String</tt>)
 *           * +Egress+ - (<tt>Boolean</tt>)
 *           * +CidrBlock+ - (<tt>String</tt>)
 *           * +IcmpTypeCode+ - (<tt>Object</tt>)
 *             * +Type+ - (<tt>Integer</tt>) For the ICMP protocol, the
 *               ICMP type. A value of -1 is a wildcard meaning all types.
 *               Required if specifying icmp for the protocol.
 *             * +Code+ - (<tt>Integer</tt>) For the ICMP protocol, the
 *               ICMP code. A value of -1 is a wildcard meaning all codes.
 *               Required if specifying icmp for the protocol.
 *           * +PortRange+ - (<tt>Object</tt>)
 *             * +From+ - (<tt>Integer</tt>) The first port in the range.
 *               Required if specifying tcp or udp for the protocol.
 *             * +To+ - (<tt>Integer</tt>) The last port in the range.
 *               Required if specifying tcp or udp for the protocol.
 *         * +Associations+ - (<tt>Array<Object></tt>)
 *           * +NetworkAclAssociationId+ - (<tt>String</tt>)
 *           * +NetworkAclId+ - (<tt>String</tt>)
 *           * +SubnetId+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeNetworkInterfaceAttribute(params, callback)
 *   Calls the DescribeNetworkInterfaceAttribute API operation.
 *   @param params [Object]
 *     * +NetworkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +Description+ - (<tt>String</tt>)
 *     * +SourceDestCheck+ - (<tt>String</tt>)
 *     * +Groups+ - (<tt>String</tt>)
 *     * +Attachment+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +NetworkInterfaceId+ - (<tt>String</tt>)
 *       * +Description+ - (<tt>Object</tt>)
 *         * +Value+ - (<tt>String</tt>) String value
 *       * +SourceDestCheck+ - (<tt>Object</tt>)
 *         * +Value+ - (<tt>Boolean</tt>) Boolean value
 *       * +Groups+ - (<tt>Array<Object></tt>)
 *         * +GroupName+ - (<tt>String</tt>)
 *         * +GroupId+ - (<tt>String</tt>)
 *       * +Attachment+ - (<tt>Object</tt>)
 *         * +AttachmentId+ - (<tt>String</tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +InstanceOwnerId+ - (<tt>String</tt>)
 *         * +DeviceIndex+ - (<tt>Integer</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +AttachTime+ - (<tt>Date</tt>)
 *         * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeNetworkInterfaces(params, callback)
 *   Calls the DescribeNetworkInterfaces API operation.
 *   @param params [Object]
 *     * +NetworkInterfaceIds+ - (<tt>Array<String></tt>)
 *     * +Filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +NetworkInterfaces+ - (<tt>Array<Object></tt>)
 *         * +NetworkInterfaceId+ - (<tt>String</tt>)
 *         * +SubnetId+ - (<tt>String</tt>)
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>)
 *         * +Description+ - (<tt>String</tt>)
 *         * +OwnerId+ - (<tt>String</tt>)
 *         * +RequesterId+ - (<tt>String</tt>)
 *         * +RequesterManaged+ - (<tt>Boolean</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +MacAddress+ - (<tt>String</tt>)
 *         * +PrivateIpAddress+ - (<tt>String</tt>)
 *         * +PrivateDnsName+ - (<tt>String</tt>)
 *         * +SourceDestCheck+ - (<tt>Boolean</tt>)
 *         * +Groups+ - (<tt>Array<Object></tt>)
 *           * +GroupName+ - (<tt>String</tt>)
 *           * +GroupId+ - (<tt>String</tt>)
 *         * +Attachment+ - (<tt>Object</tt>)
 *           * +AttachmentId+ - (<tt>String</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +InstanceOwnerId+ - (<tt>String</tt>)
 *           * +DeviceIndex+ - (<tt>Integer</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +AttachTime+ - (<tt>Date</tt>)
 *           * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *         * +Association+ - (<tt>Object</tt>)
 *           * +PublicIp+ - (<tt>String</tt>)
 *           * +IpOwnerId+ - (<tt>String</tt>)
 *           * +AllocationId+ - (<tt>String</tt>)
 *           * +AssociationId+ - (<tt>String</tt>)
 *         * +TagSet+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +PrivateIpAddresses+ - (<tt>Array<Object></tt>)
 *           * +PrivateIpAddress+ - (<tt>String</tt>)
 *           * +Primary+ - (<tt>Boolean</tt>)
 *           * +Association+ - (<tt>Object</tt>)
 *             * +PublicIp+ - (<tt>String</tt>)
 *             * +IpOwnerId+ - (<tt>String</tt>)
 *             * +AllocationId+ - (<tt>String</tt>)
 *             * +AssociationId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describePlacementGroups(params, callback)
 *   Calls the DescribePlacementGroups API operation.
 *   @param params [Object]
 *     * +GroupNames+ - (<tt>Array<String></tt>) The name of the
 *       PlacementGroup.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Placement Groups. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +PlacementGroups+ - (<tt>Array<Object></tt>) Contains
 *         information about the specified PlacementGroups.
 *         * +GroupName+ - (<tt>String</tt>) The name of this
 *           PlacementGroup.
 *         * +Strategy+ - (<tt>String</tt>) The strategy to use when
 *           allocating Amazon EC2 instances for the PlacementGroup.
 *         * +State+ - (<tt>String</tt>) The state of this PlacementGroup.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRegions(params, callback)
 *   Calls the DescribeRegions API operation.
 *   @param params [Object]
 *     * +RegionNames+ - (<tt>Array<String></tt>) The optional list of
 *       regions to describe.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Regions. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Regions+ - (<tt>Array<Object></tt>) The list of described
 *         Amazon EC2 regions.
 *         * +RegionName+ - (<tt>String</tt>) Name of the region.
 *         * +Endpoint+ - (<tt>String</tt>) Region service endpoint.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedInstances(params, callback)
 *   Calls the DescribeReservedInstances API operation.
 *   @param params [Object]
 *     * +ReservedInstancesIds+ - (<tt>Array<String></tt>) The optional
 *       list of Reserved Instance IDs to describe.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for ReservedInstances. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +OfferingType+ - (<tt>String</tt>) The Reserved Instance
 *       offering type.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservedInstances+ - (<tt>Array<Object></tt>) The list of
 *         described Reserved Instances.
 *         * +ReservedInstancesId+ - (<tt>String</tt>) The unique ID of the
 *           Reserved Instances purchase.
 *         * +InstanceType+ - (<tt>String</tt>) The instance type on which
 *           the Reserved Instances can be used.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone
 *           in which the Reserved Instances can be used.
 *         * +Start+ - (<tt>Date</tt>) The date and time the Reserved
 *           Instances started.
 *         * +Duration+ - (<tt>Integer</tt>) The duration of the Reserved
 *           Instances, in seconds.
 *         * +UsagePrice+ - (<tt>Float</tt>) The usage price of the
 *           Reserved Instances, per hour.
 *         * +FixedPrice+ - (<tt>Float</tt>) The purchase price of the
 *           Reserved Instances.
 *         * +InstanceCount+ - (<tt>Integer</tt>) The number of Reserved
 *           Instances purchased.
 *         * +ProductDescription+ - (<tt>String</tt>) The Reserved
 *           Instances product description (ex: Windows or Unix/Linux).
 *         * +State+ - (<tt>String</tt>) The state of the Reserved
 *           Instances purchase.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           ReservedInstances.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +InstanceTenancy+ - (<tt>String</tt>) The tenancy of the
 *           reserved instance (ex: default or dedicated).
 *         * +CurrencyCode+ - (<tt>String</tt>) The currency of the
 *           reserved instance. Specified using ISO 4217 standard (e.g.,
 *           USD, JPY).
 *         * +OfferingType+ - (<tt>String</tt>) The Reserved Instance
 *           offering type.
 *         * +RecurringCharges+ - (<tt>Array<Object></tt>) The recurring
 *           charge tag assigned to the resource.
 *           * +Frequency+ - (<tt>String</tt>) The frequency of the
 *             recurring charge.
 *           * +Amount+ - (<tt>Float</tt>) The amount of the recurring
 *             charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedInstancesListings(params, callback)
 *   Calls the DescribeReservedInstancesListings API operation.
 *   @param params [Object]
 *     * +ReservedInstancesId+ - (<tt>String</tt>)
 *     * +ReservedInstancesListingId+ - (<tt>String</tt>)
 *     * +Filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservedInstancesListings+ - (<tt>Array<Object></tt>)
 *         * +ReservedInstancesListingId+ - (<tt>String</tt>)
 *         * +ReservedInstancesId+ - (<tt>String</tt>)
 *         * +CreateDate+ - (<tt>Date</tt>)
 *         * +UpdateDate+ - (<tt>Date</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +StatusMessage+ - (<tt>String</tt>)
 *         * +InstanceCounts+ - (<tt>Array<Object></tt>)
 *           * +State+ - (<tt>String</tt>)
 *           * +InstanceCount+ - (<tt>Integer</tt>)
 *         * +PriceSchedules+ - (<tt>Array<Object></tt>)
 *           * +Term+ - (<tt>Integer</tt>)
 *           * +Price+ - (<tt>Float</tt>)
 *           * +CurrencyCode+ - (<tt>String</tt>)
 *           * +Active+ - (<tt>Boolean</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +ClientToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedInstancesOfferings(params, callback)
 *   Calls the DescribeReservedInstancesOfferings API operation.
 *   @param params [Object]
 *     * +ReservedInstancesOfferingIds+ - (<tt>Array<String></tt>) An
 *       optional list of the unique IDs of the Reserved Instance
 *       offerings to describe.
 *     * +InstanceType+ - (<tt>String</tt>) The instance type on which
 *       the Reserved Instance can be used.
 *     * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone in
 *       which the Reserved Instance can be used.
 *     * +ProductDescription+ - (<tt>String</tt>) The Reserved Instance
 *       product description.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for ReservedInstancesOfferings. For a complete
 *       reference to the available filter keys for this operation, see
 *       the Amazon EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +InstanceTenancy+ - (<tt>String</tt>) The tenancy of the
 *       Reserved Instance offering. A Reserved Instance with tenancy of
 *       dedicated will run on single-tenant hardware and can only be
 *       launched within a VPC.
 *     * +OfferingType+ - (<tt>String</tt>) The Reserved Instance
 *       offering type.
 *     * +NextToken+ - (<tt>String</tt>)
 *     * +MaxResults+ - (<tt>Integer</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservedInstancesOfferings+ - (<tt>Array<Object></tt>) The list
 *         of described Reserved Instance offerings.
 *         * +ReservedInstancesOfferingId+ - (<tt>String</tt>) The unique
 *           ID of this Reserved Instances offering.
 *         * +InstanceType+ - (<tt>String</tt>) The instance type on which
 *           the Reserved Instances can be used.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone
 *           in which the Reserved Instances can be used.
 *         * +Duration+ - (<tt>Integer</tt>) The duration of the Reserved
 *           Instance, in seconds.
 *         * +UsagePrice+ - (<tt>Float</tt>) The usage price of the
 *           Reserved Instance, per hour.
 *         * +FixedPrice+ - (<tt>Float</tt>) The purchase price of the
 *           Reserved Instance.
 *         * +ProductDescription+ - (<tt>String</tt>) The Reserved
 *           Instances description (ex: Windows or Unix/Linux).
 *         * +InstanceTenancy+ - (<tt>String</tt>) The tenancy of the
 *           reserved instance (ex: default or dedicated).
 *         * +CurrencyCode+ - (<tt>String</tt>) The currency of the
 *           reserved instance. Specified using ISO 4217 standard (e.g.,
 *           USD, JPY).
 *         * +OfferingType+ - (<tt>String</tt>) The Reserved Instance
 *           offering type.
 *         * +RecurringCharges+ - (<tt>Array<Object></tt>) The recurring
 *           charge tag assigned to the resource.
 *           * +Frequency+ - (<tt>String</tt>) The frequency of the
 *             recurring charge.
 *           * +Amount+ - (<tt>Float</tt>) The amount of the recurring
 *             charge.
 *         * +Marketplace+ - (<tt>Boolean</tt>)
 *         * +PricingDetails+ - (<tt>Array<Object></tt>)
 *           * +Price+ - (<tt>Float</tt>)
 *           * +Count+ - (<tt>Integer</tt>)
 *       * +NextToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRouteTables(params, callback)
 *   Calls the DescribeRouteTables API operation.
 *   @param params [Object]
 *     * +RouteTableIds+ - (<tt>Array<String></tt>) One or more route
 *       table IDs.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Route Tables. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RouteTables+ - (<tt>Array<Object></tt>)
 *         * +RouteTableId+ - (<tt>String</tt>)
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +Routes+ - (<tt>Array<Object></tt>)
 *           * +DestinationCidrBlock+ - (<tt>String</tt>)
 *           * +GatewayId+ - (<tt>String</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +InstanceOwnerId+ - (<tt>String</tt>)
 *           * +NetworkInterfaceId+ - (<tt>String</tt>)
 *           * +State+ - (<tt>String</tt>)
 *         * +Associations+ - (<tt>Array<Object></tt>)
 *           * +RouteTableAssociationId+ - (<tt>String</tt>)
 *           * +RouteTableId+ - (<tt>String</tt>)
 *           * +SubnetId+ - (<tt>String</tt>)
 *           * +Main+ - (<tt>Boolean</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +PropagatingVgws+ - (<tt>Array<Object></tt>)
 *           * +GatewayId+ - (<tt>String</tt>)
 *         * +PropagatedRoutes+ - (<tt>Array<Object></tt>)
 *           * +DestinationCidrBlock+ - (<tt>String</tt>)
 *           * +GatewayId+ - (<tt>String</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +SourceId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSecurityGroups(params, callback)
 *   Calls the DescribeSecurityGroups API operation.
 *   @param params [Object]
 *     * +GroupNames+ - (<tt>Array<String></tt>) The optional list of
 *       Amazon EC2 security groups to describe.
 *     * +GroupIds+ - (<tt>Array<String></tt>)
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for SecurityGroups. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SecurityGroups+ - (<tt>Array<Object></tt>) The list of
 *         described Amazon EC2 security groups.
 *         * +OwnerId+ - (<tt>String</tt>) The AWS Access Key ID of the
 *           owner of the security group.
 *         * +GroupName+ - (<tt>String</tt>) The name of this security
 *           group.
 *         * +GroupId+ - (<tt>String</tt>)
 *         * +Description+ - (<tt>String</tt>) The description of this
 *           security group.
 *         * +IpPermissions+ - (<tt>Array<Object></tt>) The permissions
 *           enabled for this security group.
 *           * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *             permission. Valid protocol values: tcp, udp, icmp
 *           * +FromPort+ - (<tt>Integer</tt>) Start of port range for the
 *             TCP and UDP protocols, or an ICMP type number. An ICMP type
 *             number of -1 indicates a wildcard (i.e., any ICMP type
 *             number).
 *           * +ToPort+ - (<tt>Integer</tt>) End of port range for the TCP
 *             and UDP protocols, or an ICMP code. An ICMP code of -1
 *             indicates a wildcard (i.e., any ICMP code).
 *           * +UserIdGroupPairs+ - (<tt>Array<Object></tt>) The list of
 *             AWS user IDs and groups included in this permission.
 *             * +UserId+ - (<tt>String</tt>) The AWS user ID of an
 *               account.
 *             * +GroupName+ - (<tt>String</tt>) Name of the security group
 *               in the specified AWS account. Cannot be used when
 *               specifying a CIDR IP address range.
 *             * +GroupId+ - (<tt>String</tt>) ID of the security group in
 *               the specified AWS account. Cannot be used when specifying
 *               a CIDR IP address range.
 *           * +IpRanges+ - (<tt>Array<Object></tt>) The list of CIDR IP
 *             ranges included in this permission.
 *             * +CidrIp+ - (<tt>String</tt>) The list of CIDR IP ranges.
 *         * +IpPermissionsEgress+ - (<tt>Array<Object></tt>)
 *           * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *             permission. Valid protocol values: tcp, udp, icmp
 *           * +FromPort+ - (<tt>Integer</tt>) Start of port range for the
 *             TCP and UDP protocols, or an ICMP type number. An ICMP type
 *             number of -1 indicates a wildcard (i.e., any ICMP type
 *             number).
 *           * +ToPort+ - (<tt>Integer</tt>) End of port range for the TCP
 *             and UDP protocols, or an ICMP code. An ICMP code of -1
 *             indicates a wildcard (i.e., any ICMP code).
 *           * +UserIdGroupPairs+ - (<tt>Array<Object></tt>) The list of
 *             AWS user IDs and groups included in this permission.
 *             * +UserId+ - (<tt>String</tt>) The AWS user ID of an
 *               account.
 *             * +GroupName+ - (<tt>String</tt>) Name of the security group
 *               in the specified AWS account. Cannot be used when
 *               specifying a CIDR IP address range.
 *             * +GroupId+ - (<tt>String</tt>) ID of the security group in
 *               the specified AWS account. Cannot be used when specifying
 *               a CIDR IP address range.
 *           * +IpRanges+ - (<tt>Array<Object></tt>) The list of CIDR IP
 *             ranges included in this permission.
 *             * +CidrIp+ - (<tt>String</tt>) The list of CIDR IP ranges.
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSnapshotAttribute(params, callback)
 *   Calls the DescribeSnapshotAttribute API operation.
 *   @param params [Object]
 *     * +SnapshotId+ - (*required*, <tt>String</tt>) The ID of the EBS
 *       snapshot whose attribute is being described.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the EBS
 *       attribute to describe. Available attribute names:
 *       createVolumePermission
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot whose
 *         attribute is being described.
 *       * +CreateVolumePermissions+ - (<tt>Array<Object></tt>) The list of
 *         permissions describing who can create a volume from the
 *         associated EBS snapshot. Only available if the
 *         createVolumePermission attribute is requested.
 *         * +UserId+ - (<tt>String</tt>) The user ID of the user that can
 *           create volumes from the snapshot.
 *         * +Group+ - (<tt>String</tt>) The group that is allowed to
 *           create volumes from the snapshot (currently supports "all").
 *       * +ProductCodes+ - (<tt>Array<Object></tt>)
 *         * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *           DevPay product code.
 *         * +ProductCodeType+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSnapshots(params, callback)
 *   Calls the DescribeSnapshots API operation.
 *   @param params [Object]
 *     * +SnapshotIds+ - (<tt>Array<String></tt>) The optional list of
 *       EBS snapshot IDs to describe.
 *     * +OwnerIds+ - (<tt>Array<String></tt>) The optional list of EBS
 *       snapshot owners.
 *     * +RestorableByUserIds+ - (<tt>Array<String></tt>) The optional
 *       list of users who have permission to create volumes from the
 *       described EBS snapshots.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Snapshots. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Snapshots+ - (<tt>Array<Object></tt>) The list of described EBS
 *         snapshots.
 *         * +SnapshotId+ - (<tt>String</tt>) The unique ID of this
 *           snapshot.
 *         * +VolumeId+ - (<tt>String</tt>) The ID of the volume from which
 *           this snapshot was created.
 *         * +State+ - (<tt>String</tt>) Snapshot state (e.g., pending,
 *           completed, or error).
 *         * +StartTime+ - (<tt>Date</tt>) Time stamp when the snapshot was
 *           initiated.
 *         * +Progress+ - (<tt>String</tt>) The progress of the snapshot,
 *           in percentage.
 *         * +OwnerId+ - (<tt>String</tt>) AWS Access Key ID of the user
 *           who owns the snapshot.
 *         * +Description+ - (<tt>String</tt>) Description of the snapshot.
 *         * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *           gigabytes.
 *         * +OwnerAlias+ - (<tt>String</tt>) The AWS account alias (e.g.,
 *           "amazon", "redhat", "self", etc.) or AWS account ID that owns
 *           the AMI.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           Snapshot.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
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
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SpotDatafeedSubscription+ - (<tt>Object</tt>) The Spot Instance
 *         datafeed subscription.
 *         * +OwnerId+ - (<tt>String</tt>) Specifies the AWS account ID of
 *           the account.
 *         * +Bucket+ - (<tt>String</tt>) Specifies the Amazon S3 bucket
 *           where the Spot Instance data feed is located.
 *         * +Prefix+ - (<tt>String</tt>) Contains the prefix that is
 *           prepended to data feed files.
 *         * +State+ - (<tt>String</tt>) Specifies the state of the Spot
 *           Instance request.
 *         * +Fault+ - (<tt>Object</tt>) Specifies a fault code for the
 *           Spot Instance request, if present.
 *           * +Code+ - (<tt>String</tt>)
 *           * +Message+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSpotInstanceRequests(params, callback)
 *   Calls the DescribeSpotInstanceRequests API operation.
 *   @param params [Object]
 *     * +SpotInstanceRequestIds+ - (<tt>Array<String></tt>) The ID of
 *       the request.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for SpotInstances. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SpotInstanceRequests+ - (<tt>Array<Object></tt>)
 *         * +SpotInstanceRequestId+ - (<tt>String</tt>)
 *         * +SpotPrice+ - (<tt>String</tt>)
 *         * +Type+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *         * +Fault+ - (<tt>Object</tt>)
 *           * +Code+ - (<tt>String</tt>)
 *           * +Message+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +Code+ - (<tt>String</tt>)
 *           * +UpdateTime+ - (<tt>Date</tt>)
 *           * +Message+ - (<tt>String</tt>)
 *         * +ValidFrom+ - (<tt>Date</tt>)
 *         * +ValidUntil+ - (<tt>Date</tt>)
 *         * +LaunchGroup+ - (<tt>String</tt>)
 *         * +AvailabilityZoneGroup+ - (<tt>String</tt>)
 *         * +LaunchSpecification+ - (<tt>Object</tt>)
 *           * +ImageId+ - (<tt>String</tt>) The AMI ID.
 *           * +KeyName+ - (<tt>String</tt>) The name of the key pair.
 *           * +SecurityGroups+ - (<tt>Array<Object></tt>)
 *             * +GroupName+ - (<tt>String</tt>)
 *             * +GroupId+ - (<tt>String</tt>)
 *           * +UserData+ - (<tt>String</tt>) Optional data, specific to a
 *             user's application, to provide in the launch request. All
 *             instances that collectively comprise the launch request have
 *             access to this data. User data is never returned through API
 *             responses.
 *           * +AddressingType+ - (<tt>String</tt>) Deprecated.
 *           * +InstanceType+ - (<tt>String</tt>) Specifies the instance
 *             type.
 *           * +Placement+ - (<tt>Object</tt>) Defines a placement item.
 *             * +AvailabilityZone+ - (<tt>String</tt>) The availability
 *               zone in which an Amazon EC2 instance runs.
 *             * +GroupName+ - (<tt>String</tt>) The name of the
 *               PlacementGroup in which an Amazon EC2 instance runs.
 *               Placement groups are primarily used for launching High
 *               Performance Computing instances in the same group to
 *               ensure fast connection speeds.
 *           * +KernelId+ - (<tt>String</tt>) Specifies the ID of the
 *             kernel to select.
 *           * +RamdiskId+ - (<tt>String</tt>) Specifies the ID of the RAM
 *             disk to select. Some kernels require additional drivers at
 *             launch. Check the kernel requirements for information on
 *             whether or not you need to specify a RAM disk and search for
 *             the kernel ID.
 *           * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies
 *             how block devices are exposed to the instance. Each mapping
 *             is made up of a virtualName and a deviceName.
 *             * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *               device name.
 *             * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *               (e.g., /dev/sdh).
 *             * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *               automatically setup Amazon EBS volumes when the instance
 *               is launched.
 *               * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *                 from which the volume will be created.
 *               * +VolumeSize+ - (<tt>Integer</tt>) The size of the
 *                 volume, in gigabytes.
 *               * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *                 whether the Amazon EBS volume is deleted on instance
 *                 termination.
 *               * +VolumeType+ - (<tt>String</tt>)
 *               * +Iops+ - (<tt>Integer</tt>)
 *             * +NoDevice+ - (<tt>String</tt>) Specifies the device name
 *               to suppress during instance launch.
 *           * +MonitoringEnabled+ - (<tt>Boolean</tt>) Enables monitoring
 *             for the instance.
 *           * +SubnetId+ - (<tt>String</tt>) Specifies the Amazon VPC
 *             subnet ID within which to launch the instance(s) for Amazon
 *             Virtual Private Cloud.
 *           * +NetworkInterfaces+ - (<tt>Array<Object></tt>)
 *             * +NetworkInterfaceId+ - (<tt>String</tt>)
 *             * +DeviceIndex+ - (<tt>Integer</tt>)
 *             * +SubnetId+ - (<tt>String</tt>)
 *             * +Description+ - (<tt>String</tt>)
 *             * +PrivateIpAddress+ - (<tt>String</tt>)
 *             * +Groups+ - (<tt>Array<String></tt>)
 *             * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *             * +PrivateIpAddresses+ - (<tt>Array<Object></tt>)
 *               * +PrivateIpAddress+ - (<tt>String</tt>)
 *               * +Primary+ - (<tt>Boolean</tt>)
 *             * +SecondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *           * +IamInstanceProfile+ - (<tt>Object</tt>)
 *             * +Arn+ - (<tt>String</tt>)
 *             * +Name+ - (<tt>String</tt>)
 *           * +EbsOptimized+ - (<tt>Boolean</tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +CreateTime+ - (<tt>Date</tt>)
 *         * +ProductDescription+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for this spot
 *           instance request.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +LaunchedAvailabilityZone+ - (<tt>String</tt>) The
 *           Availability Zone in which the bid is launched.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSpotPriceHistory(params, callback)
 *   Calls the DescribeSpotPriceHistory API operation.
 *   @param params [Object]
 *     * +StartTime+ - (<tt>Date</tt>) The start date and time of the
 *       Spot Instance price history data.
 *     * +EndTime+ - (<tt>Date</tt>) The end date and time of the Spot
 *       Instance price history data.
 *     * +InstanceTypes+ - (<tt>Array<String></tt>) Specifies the
 *       instance type to return.
 *     * +ProductDescriptions+ - (<tt>Array<String></tt>) The description
 *       of the AMI.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for SpotPriceHistory. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +AvailabilityZone+ - (<tt>String</tt>) Filters the results by
 *       availability zone (ex: 'us-east-1a').
 *     * +MaxResults+ - (<tt>Integer</tt>) Specifies the number of rows
 *       to return.
 *     * +NextToken+ - (<tt>String</tt>) Specifies the next set of rows
 *       to return.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SpotPriceHistory+ - (<tt>Array<Object></tt>)
 *         * +InstanceType+ - (<tt>String</tt>)
 *         * +ProductDescription+ - (<tt>String</tt>)
 *         * +SpotPrice+ - (<tt>String</tt>)
 *         * +Timestamp+ - (<tt>Date</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>)
 *       * +NextToken+ - (<tt>String</tt>) The string marking the next set
 *         of results returned. Displays empty if there are no more results
 *         to be returned.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSubnets(params, callback)
 *   Calls the DescribeSubnets API operation.
 *   @param params [Object]
 *     * +SubnetIds+ - (<tt>Array<String></tt>) A set of one or more
 *       subnet IDs.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Subnets. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Subnets+ - (<tt>Array<Object></tt>) Contains a set of one or
 *         more Subnet instances.
 *         * +SubnetId+ - (<tt>String</tt>) Specifies the ID of the subnet.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           subnet. The state of the subnet may be either pending or
 *           available.
 *         * +VpcId+ - (<tt>String</tt>) Contains the ID of the VPC the
 *           subnet is in.
 *         * +CidrBlock+ - (<tt>String</tt>) Specifies the CIDR block
 *           assigned to the subnet.
 *         * +AvailableIpAddressCount+ - (<tt>Integer</tt>) Specifies the
 *           number of unused IP addresses in the subnet. The IP addresses
 *           for any stopped instances are considered unavailable.
 *         * +AvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           Availability Zone the subnet is in.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           Subnet.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTags(params, callback)
 *   Calls the DescribeTags API operation.
 *   @param params [Object]
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for tags.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Tags+ - (<tt>Array<Object></tt>) A list of the tags for the
 *         specified resources.
 *         * +ResourceId+ - (<tt>String</tt>) The resource ID for the tag.
 *         * +ResourceType+ - (<tt>String</tt>) The type of resource
 *           identified by the associated resource ID (ex: instance, AMI,
 *           EBS volume, etc).
 *         * +Key+ - (<tt>String</tt>) The tag's key.
 *         * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumeAttribute(params, callback)
 *   Calls the DescribeVolumeAttribute API operation.
 *   @param params [Object]
 *     * +VolumeId+ - (*required*, <tt>String</tt>)
 *     * +Attribute+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VolumeId+ - (<tt>String</tt>)
 *       * +AutoEnableIO+ - (<tt>Object</tt>)
 *         * +Value+ - (<tt>Boolean</tt>) Boolean value
 *       * +ProductCodes+ - (<tt>Array<Object></tt>)
 *         * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *           DevPay product code.
 *         * +ProductCodeType+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumeStatus(params, callback)
 *   Calls the DescribeVolumeStatus API operation.
 *   @param params [Object]
 *     * +VolumeIds+ - (<tt>Array<String></tt>)
 *     * +Filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +NextToken+ - (<tt>String</tt>)
 *     * +MaxResults+ - (<tt>Integer</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VolumeStatuses+ - (<tt>Array<Object></tt>)
 *         * +VolumeId+ - (<tt>String</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>)
 *         * +VolumeStatus+ - (<tt>Object</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +Details+ - (<tt>Array<Object></tt>)
 *             * +Name+ - (<tt>String</tt>)
 *             * +Status+ - (<tt>String</tt>)
 *         * +Events+ - (<tt>Array<Object></tt>)
 *           * +EventType+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *           * +NotBefore+ - (<tt>Date</tt>)
 *           * +NotAfter+ - (<tt>Date</tt>)
 *           * +EventId+ - (<tt>String</tt>)
 *         * +Actions+ - (<tt>Array<Object></tt>)
 *           * +Code+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *           * +EventType+ - (<tt>String</tt>)
 *           * +EventId+ - (<tt>String</tt>)
 *       * +NextToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumes(params, callback)
 *   Calls the DescribeVolumes API operation.
 *   @param params [Object]
 *     * +VolumeIds+ - (<tt>Array<String></tt>) The optional list of EBS
 *       volumes to describe.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Volumes. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Volumes+ - (<tt>Array<Object></tt>) The list of described EBS
 *         volumes.
 *         * +VolumeId+ - (<tt>String</tt>) The unique ID of this volume.
 *         * +Size+ - (<tt>Integer</tt>) The size of this volume, in
 *           gigabytes.
 *         * +SnapshotId+ - (<tt>String</tt>) Optional snapshot from which
 *           this volume was created.
 *         * +AvailabilityZone+ - (<tt>String</tt>) Availability zone in
 *           which this volume was created.
 *         * +State+ - (<tt>String</tt>) State of this volume (e.g.,
 *           creating, available).
 *         * +CreateTime+ - (<tt>Date</tt>) Timestamp when volume creation
 *           was initiated.
 *         * +Attachments+ - (<tt>Array<Object></tt>) Information on what
 *           this volume is attached to.
 *           * +VolumeId+ - (<tt>String</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +Device+ - (<tt>String</tt>) How the device is exposed to
 *             the instance (e.g., /dev/sdh).
 *           * +State+ - (<tt>String</tt>)
 *           * +AttachTime+ - (<tt>Date</tt>) Timestamp when this
 *             attachment initiated.
 *           * +DeleteOnTermination+ - (<tt>Boolean</tt>) ` Whether this
 *             volume will be deleted or not when the associated instance
 *             is terminated.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           Volume.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +VolumeType+ - (<tt>String</tt>)
 *         * +Iops+ - (<tt>Integer</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVpcs(params, callback)
 *   Calls the DescribeVpcs API operation.
 *   @param params [Object]
 *     * +VpcIds+ - (<tt>Array<String></tt>) The ID of a VPC you want
 *       information about.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for VPCs. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Vpcs+ - (<tt>Array<Object></tt>)
 *         * +VpcId+ - (<tt>String</tt>) Specifies the ID of the VPC.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           VPC. The state of the subnet may be either pending or
 *           available.
 *         * +CidrBlock+ - (<tt>String</tt>) Specifies the CIDR block the
 *           VPC covers.
 *         * +DhcpOptionsId+ - (<tt>String</tt>) Specifies the ID of the
 *           set of DHCP options associated with the VPC. Contains a value
 *           of default if the default options are associated with the VPC.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the VPC.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +InstanceTenancy+ - (<tt>String</tt>) The allowed tenancy of
 *           instances launched into the VPC.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVpnConnections(params, callback)
 *   Calls the DescribeVpnConnections API operation.
 *   @param params [Object]
 *     * +VpnConnectionIds+ - (<tt>Array<String></tt>) A VPN connection
 *       ID. More than one may be specified per request.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for VPN Connections. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VpnConnections+ - (<tt>Array<Object></tt>)
 *         * +VpnConnectionId+ - (<tt>String</tt>) Specifies the ID of the
 *           VPN gateway at the VPC end of the VPN connection.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           VPN connection. Valid values are pending, available, deleting,
 *           and deleted.
 *         * +CustomerGatewayConfiguration+ - (<tt>String</tt>) Contains
 *           configuration information in the native XML format for the VPN
 *           connection's customer gateway. This element is always present
 *           in the CreateVpnConnection response; however, it's present in
 *           the DescribeVpnConnections response only if the VPN connection
 *           is in the pending or available state.
 *         * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *           connection.
 *         * +CustomerGatewayId+ - (<tt>String</tt>) Specifies ID of the
 *           customer gateway at the end of the VPN connection.
 *         * +VpnGatewayId+ - (<tt>String</tt>) Specfies the ID of the VPN
 *           gateway at the VPC end of the VPN connection.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           VpnConnection.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +VgwTelemetry+ - (<tt>Array<Object></tt>)
 *           * +OutsideIpAddress+ - (<tt>String</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +LastStatusChange+ - (<tt>Date</tt>)
 *           * +StatusMessage+ - (<tt>String</tt>)
 *           * +AcceptedRouteCount+ - (<tt>Integer</tt>)
 *         * +Options+ - (<tt>Object</tt>)
 *           * +StaticRoutesOnly+ - (<tt>Boolean</tt>)
 *         * +Routes+ - (<tt>Array<Object></tt>)
 *           * +DestinationCidrBlock+ - (<tt>String</tt>)
 *           * +Source+ - (<tt>String</tt>)
 *           * +State+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVpnGateways(params, callback)
 *   Calls the DescribeVpnGateways API operation.
 *   @param params [Object]
 *     * +VpnGatewayIds+ - (<tt>Array<String></tt>) A list of filters
 *       used to match properties for VPN Gateways. For a complete
 *       reference to the available filter keys for this operation, see
 *       the Amazon EC2 API reference.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for VPN Gateways. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VpnGateways+ - (<tt>Array<Object></tt>)
 *         * +VpnGatewayId+ - (<tt>String</tt>) Specifies the ID of the VPN
 *           gateway.
 *         * +State+ - (<tt>String</tt>) Describes the current state of the
 *           VPN gateway. Valid values are pending, available, deleting,
 *           and deleted.
 *         * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *           connection the VPN gateway supports.
 *         * +AvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           Availability Zone where the VPN gateway was created.
 *         * +VpcAttachments+ - (<tt>Array<Object></tt>) Contains
 *           information about the VPCs attached to the VPN gateway.
 *           * +VpcId+ - (<tt>String</tt>)
 *           * +State+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           VpnGateway.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method detachInternetGateway(params, callback)
 *   Calls the DetachInternetGateway API operation.
 *   @param params [Object]
 *     * +InternetGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the Internet gateway to detach.
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC.
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
 *
 * @!method detachNetworkInterface(params, callback)
 *   Calls the DetachNetworkInterface API operation.
 *   @param params [Object]
 *     * +AttachmentId+ - (*required*, <tt>String</tt>)
 *     * +Force+ - (<tt>Boolean</tt>)
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
 *
 * @!method detachVolume(params, callback)
 *   Calls the DetachVolume API operation.
 *   @param params [Object]
 *     * +VolumeId+ - (*required*, <tt>String</tt>) The ID of the volume
 *       to detach.
 *     * +InstanceId+ - (<tt>String</tt>) The ID of the instance from
 *       which to detach the the specified volume.
 *     * +Device+ - (<tt>String</tt>) The device name to which the volume
 *       is attached on the specified instance.
 *     * +Force+ - (<tt>Boolean</tt>) Forces detachment if the previous
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
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VolumeId+ - (<tt>String</tt>)
 *       * +InstanceId+ - (<tt>String</tt>)
 *       * +Device+ - (<tt>String</tt>) How the device is exposed to the
 *         instance (e.g., /dev/sdh).
 *       * +State+ - (<tt>String</tt>)
 *       * +AttachTime+ - (<tt>Date</tt>) Timestamp when this attachment
 *         initiated.
 *       * +DeleteOnTermination+ - (<tt>Boolean</tt>) ` Whether this volume
 *         will be deleted or not when the associated instance is
 *         terminated.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method detachVpnGateway(params, callback)
 *   Calls the DetachVpnGateway API operation.
 *   @param params [Object]
 *     * +VpnGatewayId+ - (*required*, <tt>String</tt>) The ID of the VPN
 *       gateway to detach from the VPC.
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC to
 *       detach the VPN gateway from.
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
 *
 * @!method disableVgwRoutePropagation(params, callback)
 *   Calls the DisableVgwRoutePropagation API operation.
 *   @param params [Object]
 *     * +RouteTableId+ - (*required*, <tt>String</tt>)
 *     * +GatewayId+ - (*required*, <tt>String</tt>)
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
 *
 * @!method disassociateAddress(params, callback)
 *   Calls the DisassociateAddress API operation.
 *   @param params [Object]
 *     * +PublicIp+ - (<tt>String</tt>) The elastic IP address that you
 *       are disassociating from the instance.
 *     * +AssociationId+ - (<tt>String</tt>) Association ID corresponding
 *       to the VPC elastic IP address you want to disassociate.
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
 *
 * @!method disassociateRouteTable(params, callback)
 *   Calls the DisassociateRouteTable API operation.
 *   @param params [Object]
 *     * +AssociationId+ - (*required*, <tt>String</tt>) The association
 *       ID representing the current association between the route table
 *       and subnet.
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
 *
 * @!method enableVgwRoutePropagation(params, callback)
 *   Calls the EnableVgwRoutePropagation API operation.
 *   @param params [Object]
 *     * +RouteTableId+ - (*required*, <tt>String</tt>)
 *     * +GatewayId+ - (*required*, <tt>String</tt>)
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
 *
 * @!method enableVolumeIO(params, callback)
 *   Calls the EnableVolumeIO API operation.
 *   @param params [Object]
 *     * +VolumeId+ - (*required*, <tt>String</tt>)
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
 *
 * @!method getConsoleOutput(params, callback)
 *   Calls the GetConsoleOutput API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance for which you want console output.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *         console output was requested.
 *       * +Timestamp+ - (<tt>Date</tt>) The time the output was last
 *         updated.
 *       * +Output+ - (<tt>String</tt>) The console output, Base64 encoded.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getPasswordData(params, callback)
 *   Calls the GetPasswordData API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance for which you want the Windows administrator password.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *         Windows administrator password was requested.
 *       * +Timestamp+ - (<tt>Date</tt>) The time the data was last
 *         updated.
 *       * +PasswordData+ - (<tt>String</tt>) The Windows administrator
 *         password of the specified instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method importInstance(params, callback)
 *   Calls the ImportInstance API operation.
 *   @param params [Object]
 *     * +Description+ - (<tt>String</tt>)
 *     * +LaunchSpecification+ - (<tt>Object</tt>)
 *       * +Architecture+ - (<tt>String</tt>)
 *       * +SecurityGroups+ - (<tt>Array<String></tt>)
 *       * +AdditionalInfo+ - (<tt>String</tt>)
 *       * +UserData+ - (<tt>String</tt>)
 *       * +InstanceType+ - (<tt>String</tt>)
 *       * +Placement+ - (<tt>Object</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>) The availability zone
 *           in which an Amazon EC2 instance runs.
 *         * +GroupName+ - (<tt>String</tt>) The name of the
 *           PlacementGroup in which an Amazon EC2 instance runs.
 *           Placement groups are primarily used for launching High
 *           Performance Computing instances in the same group to ensure
 *           fast connection speeds.
 *         * +Tenancy+ - (<tt>String</tt>) The allowed tenancy of
 *           instances launched into the VPC. A value of default means
 *           instances can be launched with any tenancy; a value of
 *           dedicated means all instances launched into the VPC will be
 *           launched as dedicated tenancy regardless of the tenancy
 *           assigned to the instance at launch.
 *       * +BlockDeviceMappings+ - (<tt>Array<Object></tt>)
 *         * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *           device name.
 *         * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *             from which the volume will be created.
 *           * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume,
 *             in gigabytes.
 *           * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *           * +VolumeType+ - (<tt>String</tt>)
 *           * +Iops+ - (<tt>Integer</tt>)
 *         * +NoDevice+ - (<tt>String</tt>) Specifies the device name to
 *           suppress during instance launch.
 *       * +Monitoring+ - (<tt>Boolean</tt>)
 *       * +SubnetId+ - (<tt>String</tt>)
 *       * +DisableApiTermination+ - (<tt>Boolean</tt>)
 *       * +InstanceInitiatedShutdownBehavior+ - (<tt>String</tt>)
 *       * +PrivateIpAddress+ - (<tt>String</tt>)
 *     * +DiskImages+ - (<tt>Array<Object></tt>)
 *       * +Image+ - (<tt>Object</tt>)
 *         * +Format+ - (*required*, <tt>String</tt>)
 *         * +Bytes+ - (*required*, <tt>Integer</tt>)
 *         * +ImportManifestUrl+ - (*required*, <tt>String</tt>)
 *       * +Description+ - (<tt>String</tt>)
 *       * +Volume+ - (<tt>Object</tt>)
 *         * +Size+ - (*required*, <tt>Integer</tt>)
 *     * +Platform+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ConversionTask+ - (<tt>Object</tt>)
 *         * +ConversionTaskId+ - (<tt>String</tt>)
 *         * +ExpirationTime+ - (<tt>String</tt>)
 *         * +ImportInstance+ - (<tt>Object</tt>)
 *           * +Volumes+ - (<tt>Array<Object></tt>)
 *             * +BytesConverted+ - (<tt>Integer</tt>)
 *             * +AvailabilityZone+ - (<tt>String</tt>)
 *             * +Image+ - (<tt>Object</tt>)
 *               * +Format+ - (<tt>String</tt>)
 *               * +Size+ - (<tt>Integer</tt>)
 *               * +ImportManifestUrl+ - (<tt>String</tt>)
 *               * +Checksum+ - (<tt>String</tt>)
 *             * +Volume+ - (<tt>Object</tt>)
 *               * +Size+ - (<tt>Integer</tt>)
 *               * +Id+ - (<tt>String</tt>)
 *             * +Status+ - (<tt>String</tt>)
 *             * +StatusMessage+ - (<tt>String</tt>)
 *             * +Description+ - (<tt>String</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +Platform+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *         * +ImportVolume+ - (<tt>Object</tt>)
 *           * +BytesConverted+ - (<tt>Integer</tt>)
 *           * +AvailabilityZone+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *           * +Image+ - (<tt>Object</tt>)
 *             * +Format+ - (<tt>String</tt>)
 *             * +Size+ - (<tt>Integer</tt>)
 *             * +ImportManifestUrl+ - (<tt>String</tt>)
 *             * +Checksum+ - (<tt>String</tt>)
 *           * +Volume+ - (<tt>Object</tt>)
 *             * +Size+ - (<tt>Integer</tt>)
 *             * +Id+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *         * +StatusMessage+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method importKeyPair(params, callback)
 *   Calls the ImportKeyPair API operation.
 *   @param params [Object]
 *     * +KeyName+ - (*required*, <tt>String</tt>) The unique name for
 *       the key pair.
 *     * +PublicKeyMaterial+ - (*required*, <tt>String</tt>) The public
 *       key portion of the key pair being imported.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +KeyName+ - (<tt>String</tt>) The specified unique key pair
 *         name.
 *       * +KeyFingerprint+ - (<tt>String</tt>) The MD5 public key
 *         fingerprint as specified in section 4 of RFC4716 .
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method importVolume(params, callback)
 *   Calls the ImportVolume API operation.
 *   @param params [Object]
 *     * +AvailabilityZone+ - (<tt>String</tt>)
 *     * +Image+ - (<tt>Object</tt>)
 *       * +Format+ - (*required*, <tt>String</tt>)
 *       * +Bytes+ - (*required*, <tt>Integer</tt>)
 *       * +ImportManifestUrl+ - (*required*, <tt>String</tt>)
 *     * +Description+ - (<tt>String</tt>)
 *     * +Volume+ - (<tt>Object</tt>)
 *       * +Size+ - (*required*, <tt>Integer</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ConversionTask+ - (<tt>Object</tt>)
 *         * +ConversionTaskId+ - (<tt>String</tt>)
 *         * +ExpirationTime+ - (<tt>String</tt>)
 *         * +ImportInstance+ - (<tt>Object</tt>)
 *           * +Volumes+ - (<tt>Array<Object></tt>)
 *             * +BytesConverted+ - (<tt>Integer</tt>)
 *             * +AvailabilityZone+ - (<tt>String</tt>)
 *             * +Image+ - (<tt>Object</tt>)
 *               * +Format+ - (<tt>String</tt>)
 *               * +Size+ - (<tt>Integer</tt>)
 *               * +ImportManifestUrl+ - (<tt>String</tt>)
 *               * +Checksum+ - (<tt>String</tt>)
 *             * +Volume+ - (<tt>Object</tt>)
 *               * +Size+ - (<tt>Integer</tt>)
 *               * +Id+ - (<tt>String</tt>)
 *             * +Status+ - (<tt>String</tt>)
 *             * +StatusMessage+ - (<tt>String</tt>)
 *             * +Description+ - (<tt>String</tt>)
 *           * +InstanceId+ - (<tt>String</tt>)
 *           * +Platform+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *         * +ImportVolume+ - (<tt>Object</tt>)
 *           * +BytesConverted+ - (<tt>Integer</tt>)
 *           * +AvailabilityZone+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *           * +Image+ - (<tt>Object</tt>)
 *             * +Format+ - (<tt>String</tt>)
 *             * +Size+ - (<tt>Integer</tt>)
 *             * +ImportManifestUrl+ - (<tt>String</tt>)
 *             * +Checksum+ - (<tt>String</tt>)
 *           * +Volume+ - (<tt>Object</tt>)
 *             * +Size+ - (<tt>Integer</tt>)
 *             * +Id+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *         * +StatusMessage+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>)
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyImageAttribute(params, callback)
 *   Calls the ModifyImageAttribute API operation.
 *   @param params [Object]
 *     * +ImageId+ - (*required*, <tt>String</tt>) The ID of the AMI
 *       whose attribute you want to modify.
 *     * +Attribute+ - (<tt>String</tt>) The name of the AMI attribute
 *       you want to modify. Available attributes: launchPermission,
 *       productCodes
 *     * +OperationType+ - (<tt>String</tt>) The type of operation being
 *       requested. Available operation types: add, remove
 *     * +UserIds+ - (<tt>Array<String></tt>) The AWS user ID being added
 *       to or removed from the list of users with launch permissions for
 *       this AMI. Only valid when the launchPermission attribute is
 *       being modified.
 *     * +UserGroups+ - (<tt>Array<String></tt>) The user group being
 *       added to or removed from the list of user groups with launch
 *       permissions for this AMI. Only valid when the launchPermission
 *       attribute is being modified. Available user groups: all
 *     * +ProductCodes+ - (<tt>Array<String></tt>) The list of product
 *       codes being added to or removed from the specified AMI. Only
 *       valid when the productCodes attribute is being modified.
 *     * +Value+ - (<tt>String</tt>) The value of the attribute being
 *       modified. Only valid when the description attribute is being
 *       modified.
 *     * +LaunchPermission+ - (<tt>Object</tt>)
 *       * +Add+ - (<tt>Array<Object></tt>)
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of the user
 *           involved in this launch permission.
 *         * +Group+ - (<tt>String</tt>) The AWS group of the user
 *           involved in this launch permission. Available groups: all
 *       * +Remove+ - (<tt>Array<Object></tt>)
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of the user
 *           involved in this launch permission.
 *         * +Group+ - (<tt>String</tt>) The AWS group of the user
 *           involved in this launch permission. Available groups: all
 *     * +Description+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>String</tt>) String value
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
 *
 * @!method modifyInstanceAttribute(params, callback)
 *   Calls the ModifyInstanceAttribute API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance whose attribute is being modified.
 *     * +Attribute+ - (<tt>String</tt>) The name of the attribute being
 *       modified. Available attribute names: instanceType, kernel,
 *       ramdisk, userData, disableApiTermination,
 *       instanceInitiatedShutdownBehavior, rootDevice,
 *       blockDeviceMapping
 *     * +Value+ - (<tt>String</tt>) The new value of the instance
 *       attribute being modified. Only valid when kernel, ramdisk,
 *       userData, disableApiTermination or
 *       instanceInitiateShutdownBehavior is specified as the attribute
 *       being modified.
 *     * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) The new block
 *       device mappings for the instance whose attributes are being
 *       modified. Only valid when blockDeviceMapping is specified as the
 *       attribute being modified.
 *       * +DeviceName+ - (<tt>String</tt>) The device name (e.g.,
 *         /dev/sdh) at which the block device is exposed on the
 *         instance.
 *       * +Ebs+ - (<tt>Object</tt>) The EBS instance block device
 *         specification describing the EBS block device to map to the
 *         specified device name on a running instance.
 *         * +VolumeId+ - (<tt>String</tt>) The ID of the EBS volume that
 *           should be mounted as a block device on an Amazon EC2
 *           instance.
 *         * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *       * +VirtualName+ - (<tt>String</tt>) The virtual device name.
 *       * +NoDevice+ - (<tt>String</tt>) When set to the empty string,
 *         specifies that the device name in this object should not be
 *         mapped to any real device.
 *     * +SourceDestCheck+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>Boolean</tt>) Boolean value
 *     * +DisableApiTermination+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>Boolean</tt>) Boolean value
 *     * +InstanceType+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>String</tt>) String value
 *     * +Kernel+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>String</tt>) String value
 *     * +Ramdisk+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>String</tt>) String value
 *     * +UserData+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>String</tt>) String value
 *     * +InstanceInitiatedShutdownBehavior+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>String</tt>) String value
 *     * +Groups+ - (<tt>Array<String></tt>)
 *     * +EbsOptimized+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>Boolean</tt>) Boolean value
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
 *
 * @!method modifyNetworkInterfaceAttribute(params, callback)
 *   Calls the ModifyNetworkInterfaceAttribute API operation.
 *   @param params [Object]
 *     * +NetworkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +Description+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>String</tt>) String value
 *     * +SourceDestCheck+ - (<tt>Object</tt>)
 *       * +Value+ - (<tt>Boolean</tt>) Boolean value
 *     * +Groups+ - (<tt>Array<String></tt>)
 *     * +Attachment+ - (<tt>Object</tt>)
 *       * +AttachmentId+ - (<tt>String</tt>)
 *       * +DeleteOnTermination+ - (<tt>Boolean</tt>)
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
 *
 * @!method modifySnapshotAttribute(params, callback)
 *   Calls the ModifySnapshotAttribute API operation.
 *   @param params [Object]
 *     * +SnapshotId+ - (*required*, <tt>String</tt>) The ID of the EBS
 *       snapshot whose attributes are being modified.
 *     * +Attribute+ - (<tt>String</tt>) The name of the attribute being
 *       modified. Available attribute names: createVolumePermission
 *     * +OperationType+ - (<tt>String</tt>) The operation to perform on
 *       the attribute. Available operation names: add, remove
 *     * +UserIds+ - (<tt>Array<String></tt>) The AWS user IDs to add to
 *       or remove from the list of users that have permission to create
 *       EBS volumes from the specified snapshot. Currently supports
 *       "all". Only valid when the createVolumePermission attribute is
 *       being modified.
 *     * +GroupNames+ - (<tt>Array<String></tt>) The AWS group names to
 *       add to or remove from the list of groups that have permission to
 *       create EBS volumes from the specified snapshot. Currently
 *       supports "all". Only valid when the createVolumePermission
 *       attribute is being modified.
 *     * +CreateVolumePermission+ - (<tt>Object</tt>)
 *       * +Add+ - (<tt>Array<Object></tt>)
 *         * +UserId+ - (<tt>String</tt>) The user ID of the user that
 *           can create volumes from the snapshot.
 *         * +Group+ - (<tt>String</tt>) The group that is allowed to
 *           create volumes from the snapshot (currently supports "all").
 *       * +Remove+ - (<tt>Array<Object></tt>)
 *         * +UserId+ - (<tt>String</tt>) The user ID of the user that
 *           can create volumes from the snapshot.
 *         * +Group+ - (<tt>String</tt>) The group that is allowed to
 *           create volumes from the snapshot (currently supports "all").
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
 *
 * @!method modifyVolumeAttribute(params, callback)
 *   Calls the ModifyVolumeAttribute API operation.
 *   @param params [Object]
 *     * +VolumeId+ - (*required*, <tt>String</tt>)
 *     * +AutoEnableIO+ - (<tt>Boolean</tt>)
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
 *
 * @!method monitorInstances(params, callback)
 *   Calls the MonitorInstances API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       Amazon EC2 instances on which to enable monitoring.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceMonitorings+ - (<tt>Array<Object></tt>) A list of
 *         updated monitoring information for the instances specified in
 *         the request.
 *         * +InstanceId+ - (<tt>String</tt>) Instance ID.
 *         * +Monitoring+ - (<tt>Object</tt>) Monitoring state for the
 *           associated instance.
 *           * +State+ - (<tt>String</tt>) The state of monitoring on an
 *             Amazon EC2 instance (ex: enabled, disabled).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method purchaseReservedInstancesOffering(params, callback)
 *   Calls the PurchaseReservedInstancesOffering API operation.
 *   @param params [Object]
 *     * +ReservedInstancesOfferingId+ - (*required*, <tt>String</tt>)
 *       The unique ID of the Reserved Instances offering being
 *       purchased.
 *     * +InstanceCount+ - (*required*, <tt>Integer</tt>) The number of
 *       Reserved Instances to purchase.
 *     * +LimitPrice+ - (<tt>Object</tt>)
 *       * +Amount+ - (<tt>Float</tt>)
 *       * +CurrencyCode+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservedInstancesId+ - (<tt>String</tt>) The unique ID of the
 *         Reserved Instances purchased for your account.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootInstances(params, callback)
 *   Calls the RebootInstances API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       instances to terminate.
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
 *
 * @!method registerImage(params, callback)
 *   Calls the RegisterImage API operation.
 *   @param params [Object]
 *     * +ImageLocation+ - (<tt>String</tt>) The full path to your AMI
 *       manifest in Amazon S3 storage.
 *     * +Name+ - (<tt>String</tt>) The name to give the new Amazon
 *       Machine Image. Constraints: 3-128 alphanumeric characters,
 *       parenthesis (()), commas (,), slashes (/), dashes (-), or
 *       underscores(_)
 *     * +Description+ - (<tt>String</tt>) The description describing the
 *       new AMI.
 *     * +Architecture+ - (<tt>String</tt>) The architecture of the
 *       image. Valid Values: i386, x86_64
 *     * +KernelId+ - (<tt>String</tt>) The optional ID of a specific
 *       kernel to register with the new AMI.
 *     * +RamdiskId+ - (<tt>String</tt>) The optional ID of a specific
 *       ramdisk to register with the new AMI. Some kernels require
 *       additional drivers at launch. Check the kernel requirements for
 *       information on whether you need to specify a RAM disk.
 *     * +RootDeviceName+ - (<tt>String</tt>) The root device name (e.g.,
 *       /dev/sda1).
 *     * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) The block
 *       device mappings for the new AMI, which specify how different
 *       block devices (ex: EBS volumes and ephemeral drives) will be
 *       exposed on instances launched from the new image.
 *       * +VirtualName+ - (<tt>String</tt>) Specifies the virtual device
 *         name.
 *       * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *         (e.g., /dev/sdh).
 *       * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *           which the volume will be created.
 *         * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *           gigabytes.
 *         * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * +VolumeType+ - (<tt>String</tt>)
 *         * +Iops+ - (<tt>Integer</tt>)
 *       * +NoDevice+ - (<tt>String</tt>) Specifies the device name to
 *         suppress during instance launch.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ImageId+ - (<tt>String</tt>) The ID of the new Amazon Machine
 *         Image (AMI).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method releaseAddress(params, callback)
 *   Calls the ReleaseAddress API operation.
 *   @param params [Object]
 *     * +PublicIp+ - (<tt>String</tt>) The elastic IP address that you
 *       are releasing from your account.
 *     * +AllocationId+ - (<tt>String</tt>) The allocation ID that AWS
 *       provided when you allocated the address for use with Amazon VPC.
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
 *
 * @!method replaceNetworkAclAssociation(params, callback)
 *   Calls the ReplaceNetworkAclAssociation API operation.
 *   @param params [Object]
 *     * +AssociationId+ - (*required*, <tt>String</tt>) The ID
 *       representing the current association between the original
 *       network ACL and the subnet.
 *     * +NetworkAclId+ - (*required*, <tt>String</tt>) The ID of the new
 *       ACL to associate with the subnet.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +NewAssociationId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method replaceNetworkAclEntry(params, callback)
 *   Calls the ReplaceNetworkAclEntry API operation.
 *   @param params [Object]
 *     * +NetworkAclId+ - (*required*, <tt>String</tt>) ID of the ACL
 *       where the entry will be replaced.
 *     * +RuleNumber+ - (*required*, <tt>Integer</tt>) Rule number of the
 *       entry to replace.
 *     * +Protocol+ - (*required*, <tt>String</tt>) IP protocol the rule
 *       applies to. Valid Values: tcp, udp, icmp or an IP protocol
 *       number.
 *     * +RuleAction+ - (*required*, <tt>String</tt>) Whether to allow or
 *       deny traffic that matches the rule.
 *     * +Egress+ - (*required*, <tt>Boolean</tt>) Whether this rule
 *       applies to egress traffic from the subnet (true) or ingress
 *       traffic (false).
 *     * +CidrBlock+ - (*required*, <tt>String</tt>) The CIDR range to
 *       allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
 *     * +IcmpTypeCode+ - (<tt>Object</tt>) ICMP values.
 *       * +Type+ - (<tt>Integer</tt>) For the ICMP protocol, the ICMP
 *         type. A value of -1 is a wildcard meaning all types. Required
 *         if specifying icmp for the protocol.
 *       * +Code+ - (<tt>Integer</tt>) For the ICMP protocol, the ICMP
 *         code. A value of -1 is a wildcard meaning all codes. Required
 *         if specifying icmp for the protocol.
 *     * +PortRange+ - (<tt>Object</tt>) Port ranges.
 *       * +From+ - (<tt>Integer</tt>) The first port in the range.
 *         Required if specifying tcp or udp for the protocol.
 *       * +To+ - (<tt>Integer</tt>) The last port in the range. Required
 *         if specifying tcp or udp for the protocol.
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
 *
 * @!method replaceRoute(params, callback)
 *   Calls the ReplaceRoute API operation.
 *   @param params [Object]
 *     * +RouteTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table where the route will be replaced.
 *     * +DestinationCidrBlock+ - (*required*, <tt>String</tt>) The CIDR
 *       address block used for the destination match. For example:
 *       0.0.0.0/0. The value you provide must match the CIDR of an
 *       existing route in the table.
 *     * +GatewayId+ - (<tt>String</tt>) The ID of a VPN or Internet
 *       gateway attached to your VPC.
 *     * +InstanceId+ - (<tt>String</tt>) The ID of a NAT instance in
 *       your VPC.
 *     * +NetworkInterfaceId+ - (<tt>String</tt>)
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
 *
 * @!method replaceRouteTableAssociation(params, callback)
 *   Calls the ReplaceRouteTableAssociation API operation.
 *   @param params [Object]
 *     * +AssociationId+ - (*required*, <tt>String</tt>) The ID
 *       representing the current association between the original route
 *       table and the subnet.
 *     * +RouteTableId+ - (*required*, <tt>String</tt>) The ID of the new
 *       route table to associate with the subnet.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +NewAssociationId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method reportInstanceStatus(params, callback)
 *   Calls the ReportInstanceStatus API operation.
 *   @param params [Object]
 *     * +Instances+ - (<tt>Array<String></tt>)
 *     * +Status+ - (<tt>String</tt>)
 *     * +StartTime+ - (<tt>Date</tt>)
 *     * +EndTime+ - (<tt>Date</tt>)
 *     * +ReasonCodes+ - (<tt>Array<String></tt>)
 *     * +Description+ - (<tt>String</tt>)
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
 *
 * @!method requestSpotInstances(params, callback)
 *   Calls the RequestSpotInstances API operation.
 *   @param params [Object]
 *     * +SpotPrice+ - (*required*, <tt>String</tt>) Specifies the
 *       maximum hourly price for any Spot Instance launched to fulfill
 *       the request.
 *     * +InstanceCount+ - (<tt>Integer</tt>) Specifies the maximum
 *       number of Spot Instances to launch.
 *     * +Type+ - (<tt>String</tt>) Specifies the Spot Instance type.
 *     * +ValidFrom+ - (<tt>Date</tt>) Defines the start date of the
 *       request. If this is a one-time request, the request becomes
 *       active at this date and time and remains active until all
 *       instances launch, the request expires, or the request is
 *       canceled. If the request is persistent, the request becomes
 *       active at this date and time and remains active until it expires
 *       or is canceled.
 *     * +ValidUntil+ - (<tt>Date</tt>) End date of the request. If this
 *       is a one-time request, the request remains active until all
 *       instances launch, the request is canceled, or this date is
 *       reached. If the request is persistent, it remains active until
 *       it is canceled or this date and time is reached.
 *     * +LaunchGroup+ - (<tt>String</tt>) Specifies the instance launch
 *       group. Launch groups are Spot Instances that launch and
 *       terminate together.
 *     * +AvailabilityZoneGroup+ - (<tt>String</tt>) Specifies the
 *       Availability Zone group. When specifying the same Availability
 *       Zone group for all Spot Instance requests, all Spot Instances
 *       are launched in the same Availability Zone.
 *     * +LaunchSpecification+ - (<tt>Object</tt>) Specifies additional
 *       launch instance information.
 *       * +ImageId+ - (<tt>String</tt>) The AMI ID.
 *       * +KeyName+ - (<tt>String</tt>) The name of the key pair.
 *       * +UserData+ - (<tt>String</tt>) Optional data, specific to a
 *         user's application, to provide in the launch request. All
 *         instances that collectively comprise the launch request have
 *         access to this data. User data is never returned through API
 *         responses.
 *       * +AddressingType+ - (<tt>String</tt>) Deprecated.
 *       * +InstanceType+ - (<tt>String</tt>) Specifies the instance
 *         type.
 *       * +Placement+ - (<tt>Object</tt>) Defines a placement item.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The availability zone
 *           in which an Amazon EC2 instance runs.
 *         * +GroupName+ - (<tt>String</tt>) The name of the
 *           PlacementGroup in which an Amazon EC2 instance runs.
 *           Placement groups are primarily used for launching High
 *           Performance Computing instances in the same group to ensure
 *           fast connection speeds.
 *       * +KernelId+ - (<tt>String</tt>) Specifies the ID of the kernel
 *         to select.
 *       * +RamdiskId+ - (<tt>String</tt>) Specifies the ID of the RAM
 *         disk to select. Some kernels require additional drivers at
 *         launch. Check the kernel requirements for information on
 *         whether or not you need to specify a RAM disk and search for
 *         the kernel ID.
 *       * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies how
 *         block devices are exposed to the instance. Each mapping is
 *         made up of a virtualName and a deviceName.
 *         * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *           device name.
 *         * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *             from which the volume will be created.
 *           * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume,
 *             in gigabytes.
 *           * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *           * +VolumeType+ - (<tt>String</tt>)
 *           * +Iops+ - (<tt>Integer</tt>)
 *         * +NoDevice+ - (<tt>String</tt>) Specifies the device name to
 *           suppress during instance launch.
 *       * +MonitoringEnabled+ - (<tt>Boolean</tt>) Enables monitoring
 *         for the instance.
 *       * +SubnetId+ - (<tt>String</tt>) Specifies the Amazon VPC subnet
 *         ID within which to launch the instance(s) for Amazon Virtual
 *         Private Cloud.
 *       * +NetworkInterfaces+ - (<tt>Array<Object></tt>)
 *         * +NetworkInterfaceId+ - (<tt>String</tt>)
 *         * +DeviceIndex+ - (<tt>Integer</tt>)
 *         * +SubnetId+ - (<tt>String</tt>)
 *         * +Description+ - (<tt>String</tt>)
 *         * +PrivateIpAddress+ - (<tt>String</tt>)
 *         * +Groups+ - (<tt>Array<String></tt>)
 *         * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *         * +PrivateIpAddresses+ - (<tt>Array<Object></tt>)
 *           * +PrivateIpAddress+ - (*required*, <tt>String</tt>)
 *           * +Primary+ - (<tt>Boolean</tt>)
 *         * +SecondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *       * +IamInstanceProfile+ - (<tt>Object</tt>)
 *         * +Arn+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *       * +EbsOptimized+ - (<tt>Boolean</tt>)
 *       * +SecurityGroupIds+ - (<tt>Array<String></tt>)
 *       * +SecurityGroups+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SpotInstanceRequests+ - (<tt>Array<Object></tt>) Contains a
 *         list of Spot Instance requests.
 *         * +SpotInstanceRequestId+ - (<tt>String</tt>)
 *         * +SpotPrice+ - (<tt>String</tt>)
 *         * +Type+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *         * +Fault+ - (<tt>Object</tt>)
 *           * +Code+ - (<tt>String</tt>)
 *           * +Message+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +Code+ - (<tt>String</tt>)
 *           * +UpdateTime+ - (<tt>Date</tt>)
 *           * +Message+ - (<tt>String</tt>)
 *         * +ValidFrom+ - (<tt>Date</tt>)
 *         * +ValidUntil+ - (<tt>Date</tt>)
 *         * +LaunchGroup+ - (<tt>String</tt>)
 *         * +AvailabilityZoneGroup+ - (<tt>String</tt>)
 *         * +LaunchSpecification+ - (<tt>Object</tt>)
 *           * +ImageId+ - (<tt>String</tt>) The AMI ID.
 *           * +KeyName+ - (<tt>String</tt>) The name of the key pair.
 *           * +SecurityGroups+ - (<tt>Array<Object></tt>)
 *             * +GroupName+ - (<tt>String</tt>)
 *             * +GroupId+ - (<tt>String</tt>)
 *           * +UserData+ - (<tt>String</tt>) Optional data, specific to a
 *             user's application, to provide in the launch request. All
 *             instances that collectively comprise the launch request have
 *             access to this data. User data is never returned through API
 *             responses.
 *           * +AddressingType+ - (<tt>String</tt>) Deprecated.
 *           * +InstanceType+ - (<tt>String</tt>) Specifies the instance
 *             type.
 *           * +Placement+ - (<tt>Object</tt>) Defines a placement item.
 *             * +AvailabilityZone+ - (<tt>String</tt>) The availability
 *               zone in which an Amazon EC2 instance runs.
 *             * +GroupName+ - (<tt>String</tt>) The name of the
 *               PlacementGroup in which an Amazon EC2 instance runs.
 *               Placement groups are primarily used for launching High
 *               Performance Computing instances in the same group to
 *               ensure fast connection speeds.
 *           * +KernelId+ - (<tt>String</tt>) Specifies the ID of the
 *             kernel to select.
 *           * +RamdiskId+ - (<tt>String</tt>) Specifies the ID of the RAM
 *             disk to select. Some kernels require additional drivers at
 *             launch. Check the kernel requirements for information on
 *             whether or not you need to specify a RAM disk and search for
 *             the kernel ID.
 *           * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies
 *             how block devices are exposed to the instance. Each mapping
 *             is made up of a virtualName and a deviceName.
 *             * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *               device name.
 *             * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *               (e.g., /dev/sdh).
 *             * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *               automatically setup Amazon EBS volumes when the instance
 *               is launched.
 *               * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *                 from which the volume will be created.
 *               * +VolumeSize+ - (<tt>Integer</tt>) The size of the
 *                 volume, in gigabytes.
 *               * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *                 whether the Amazon EBS volume is deleted on instance
 *                 termination.
 *               * +VolumeType+ - (<tt>String</tt>)
 *               * +Iops+ - (<tt>Integer</tt>)
 *             * +NoDevice+ - (<tt>String</tt>) Specifies the device name
 *               to suppress during instance launch.
 *           * +MonitoringEnabled+ - (<tt>Boolean</tt>) Enables monitoring
 *             for the instance.
 *           * +SubnetId+ - (<tt>String</tt>) Specifies the Amazon VPC
 *             subnet ID within which to launch the instance(s) for Amazon
 *             Virtual Private Cloud.
 *           * +NetworkInterfaces+ - (<tt>Array<Object></tt>)
 *             * +NetworkInterfaceId+ - (<tt>String</tt>)
 *             * +DeviceIndex+ - (<tt>Integer</tt>)
 *             * +SubnetId+ - (<tt>String</tt>)
 *             * +Description+ - (<tt>String</tt>)
 *             * +PrivateIpAddress+ - (<tt>String</tt>)
 *             * +Groups+ - (<tt>Array<String></tt>)
 *             * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *             * +PrivateIpAddresses+ - (<tt>Array<Object></tt>)
 *               * +PrivateIpAddress+ - (<tt>String</tt>)
 *               * +Primary+ - (<tt>Boolean</tt>)
 *             * +SecondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *           * +IamInstanceProfile+ - (<tt>Object</tt>)
 *             * +Arn+ - (<tt>String</tt>)
 *             * +Name+ - (<tt>String</tt>)
 *           * +EbsOptimized+ - (<tt>Boolean</tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +CreateTime+ - (<tt>Date</tt>)
 *         * +ProductDescription+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for this spot
 *           instance request.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +LaunchedAvailabilityZone+ - (<tt>String</tt>) The
 *           Availability Zone in which the bid is launched.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method resetImageAttribute(params, callback)
 *   Calls the ResetImageAttribute API operation.
 *   @param params [Object]
 *     * +ImageId+ - (*required*, <tt>String</tt>) The ID of the AMI
 *       whose attribute is being reset.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute being reset. Available attribute names:
 *       launchPermission
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
 *
 * @!method resetInstanceAttribute(params, callback)
 *   Calls the ResetInstanceAttribute API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       Amazon EC2 instance whose attribute is being reset.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute being reset. Available attribute names: kernel,
 *       ramdisk
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
 *
 * @!method resetNetworkInterfaceAttribute(params, callback)
 *   Calls the ResetNetworkInterfaceAttribute API operation.
 *   @param params [Object]
 *     * +NetworkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +SourceDestCheck+ - (<tt>String</tt>)
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
 *
 * @!method resetSnapshotAttribute(params, callback)
 *   Calls the ResetSnapshotAttribute API operation.
 *   @param params [Object]
 *     * +SnapshotId+ - (*required*, <tt>String</tt>) The ID of the
 *       snapshot whose attribute is being reset.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute being reset. Available attribute names:
 *       createVolumePermission
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
 *
 * @!method revokeSecurityGroupEgress(params, callback)
 *   Calls the RevokeSecurityGroupEgress API operation.
 *   @param params [Object]
 *     * +GroupId+ - (*required*, <tt>String</tt>) ID of the VPC security
 *       group to modify.
 *     * +SourceSecurityGroupName+ - (<tt>String</tt>) Deprecated.
 *     * +SourceSecurityGroupOwnerId+ - (<tt>String</tt>) Deprecated.
 *     * +IpProtocol+ - (<tt>String</tt>) Deprecated.
 *     * +FromPort+ - (<tt>Integer</tt>) Deprecated.
 *     * +ToPort+ - (<tt>Integer</tt>) Deprecated.
 *     * +CidrIp+ - (<tt>String</tt>) Deprecated.
 *     * +IpPermissions+ - (<tt>Array<Object></tt>) List of IP
 *       permissions to authorize on the specified security group.
 *       Specifying permissions through IP permissions is the preferred
 *       way of authorizing permissions since it offers more flexibility
 *       and control.
 *       * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *         permission. Valid protocol values: tcp, udp, icmp
 *       * +FromPort+ - (<tt>Integer</tt>) Start of port range for the
 *         TCP and UDP protocols, or an ICMP type number. An ICMP type
 *         number of -1 indicates a wildcard (i.e., any ICMP type
 *         number).
 *       * +ToPort+ - (<tt>Integer</tt>) End of port range for the TCP
 *         and UDP protocols, or an ICMP code. An ICMP code of -1
 *         indicates a wildcard (i.e., any ICMP code).
 *       * +UserIdGroupPairs+ - (<tt>Array<Object></tt>) The list of AWS
 *         user IDs and groups included in this permission.
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of an account.
 *         * +GroupName+ - (<tt>String</tt>) Name of the security group
 *           in the specified AWS account. Cannot be used when specifying
 *           a CIDR IP address range.
 *         * +GroupId+ - (<tt>String</tt>) ID of the security group in
 *           the specified AWS account. Cannot be used when specifying a
 *           CIDR IP address range.
 *       * +IpRanges+ - (<tt>Array<Object></tt>) The list of CIDR IP
 *         ranges included in this permission.
 *         * +CidrIp+ - (<tt>String</tt>) The list of CIDR IP ranges.
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
 *
 * @!method revokeSecurityGroupIngress(params, callback)
 *   Calls the RevokeSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * +GroupName+ - (<tt>String</tt>) Name of the standard (EC2)
 *       security group to modify. The group must belong to your account.
 *       Can be used instead of GroupID for standard (EC2) security
 *       groups.
 *     * +GroupId+ - (<tt>String</tt>) ID of the standard (EC2) or VPC
 *       security group to modify. The group must belong to your account.
 *       Required for VPC security groups; can be used instead of
 *       GroupName for standard (EC2) security groups.
 *     * +SourceSecurityGroupName+ - (<tt>String</tt>) Deprecated
 *     * +SourceSecurityGroupOwnerId+ - (<tt>String</tt>) Deprecated
 *     * +IpProtocol+ - (<tt>String</tt>) Deprecated
 *     * +FromPort+ - (<tt>Integer</tt>) Deprecated
 *     * +ToPort+ - (<tt>Integer</tt>) Deprecated
 *     * +CidrIp+ - (<tt>String</tt>) Deprecated
 *     * +IpPermissions+ - (<tt>Array<Object></tt>) List of IP
 *       permissions to revoke on the specified security group. For an IP
 *       permission to be removed, it must exactly match one of the IP
 *       permissions you specify in this list. Specifying permissions
 *       through IP permissions is the preferred way of revoking
 *       permissions since it offers more flexibility and control.
 *       * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *         permission. Valid protocol values: tcp, udp, icmp
 *       * +FromPort+ - (<tt>Integer</tt>) Start of port range for the
 *         TCP and UDP protocols, or an ICMP type number. An ICMP type
 *         number of -1 indicates a wildcard (i.e., any ICMP type
 *         number).
 *       * +ToPort+ - (<tt>Integer</tt>) End of port range for the TCP
 *         and UDP protocols, or an ICMP code. An ICMP code of -1
 *         indicates a wildcard (i.e., any ICMP code).
 *       * +UserIdGroupPairs+ - (<tt>Array<Object></tt>) The list of AWS
 *         user IDs and groups included in this permission.
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of an account.
 *         * +GroupName+ - (<tt>String</tt>) Name of the security group
 *           in the specified AWS account. Cannot be used when specifying
 *           a CIDR IP address range.
 *         * +GroupId+ - (<tt>String</tt>) ID of the security group in
 *           the specified AWS account. Cannot be used when specifying a
 *           CIDR IP address range.
 *       * +IpRanges+ - (<tt>Array<Object></tt>) The list of CIDR IP
 *         ranges included in this permission.
 *         * +CidrIp+ - (<tt>String</tt>) The list of CIDR IP ranges.
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
 *
 * @!method runInstances(params, callback)
 *   Calls the RunInstances API operation.
 *   @param params [Object]
 *     * +ImageId+ - (*required*, <tt>String</tt>) Unique ID of a machine
 *       image, returned by a call to DescribeImages.
 *     * +MinCount+ - (*required*, <tt>Integer</tt>) Minimum number of
 *       instances to launch. If the value is more than Amazon EC2 can
 *       launch, no instances are launched at all.
 *     * +MaxCount+ - (*required*, <tt>Integer</tt>) Maximum number of
 *       instances to launch. If the value is more than Amazon EC2 can
 *       launch, the largest possible number above minCount will be
 *       launched instead. Between 1 and the maximum number allowed for
 *       your account (default: 20).
 *     * +KeyName+ - (<tt>String</tt>) The name of the key pair.
 *     * +SecurityGroups+ - (<tt>Array<String></tt>) The names of the
 *       security groups into which the instances will be launched.
 *     * +SecurityGroupIds+ - (<tt>Array<String></tt>)
 *     * +UserData+ - (<tt>String</tt>) Specifies additional information
 *       to make available to the instance(s).
 *     * +AddressingType+ - (<tt>String</tt>)
 *     * +InstanceType+ - (<tt>String</tt>) Specifies the instance type
 *       for the launched instances.
 *     * +Placement+ - (<tt>Object</tt>) Specifies the placement
 *       constraints (Availability Zones) for launching the instances.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The availability zone
 *         in which an Amazon EC2 instance runs.
 *       * +GroupName+ - (<tt>String</tt>) The name of the PlacementGroup
 *         in which an Amazon EC2 instance runs. Placement groups are
 *         primarily used for launching High Performance Computing
 *         instances in the same group to ensure fast connection speeds.
 *       * +Tenancy+ - (<tt>String</tt>) The allowed tenancy of instances
 *         launched into the VPC. A value of default means instances can
 *         be launched with any tenancy; a value of dedicated means all
 *         instances launched into the VPC will be launched as dedicated
 *         tenancy regardless of the tenancy assigned to the instance at
 *         launch.
 *     * +KernelId+ - (<tt>String</tt>) The ID of the kernel with which
 *       to launch the instance.
 *     * +RamdiskId+ - (<tt>String</tt>) The ID of the RAM disk with
 *       which to launch the instance. Some kernels require additional
 *       drivers at launch. Check the kernel requirements for information
 *       on whether you need to specify a RAM disk. To find kernel
 *       requirements, go to the Resource Center and search for the
 *       kernel ID.
 *     * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies how
 *       block devices are exposed to the instance. Each mapping is made
 *       up of a virtualName and a deviceName.
 *       * +VirtualName+ - (<tt>String</tt>) Specifies the virtual device
 *         name.
 *       * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *         (e.g., /dev/sdh).
 *       * +Ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *           which the volume will be created.
 *         * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *           gigabytes.
 *         * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * +VolumeType+ - (<tt>String</tt>)
 *         * +Iops+ - (<tt>Integer</tt>)
 *       * +NoDevice+ - (<tt>String</tt>) Specifies the device name to
 *         suppress during instance launch.
 *     * +Monitoring+ - (<tt>Object</tt>) Enables monitoring for the
 *       instance.
 *       * +Enabled+ - (*required*, <tt>Boolean</tt>)
 *     * +SubnetId+ - (<tt>String</tt>) Specifies the subnet ID within
 *       which to launch the instance(s) for Amazon Virtual Private
 *       Cloud.
 *     * +DisableApiTermination+ - (<tt>Boolean</tt>) Specifies whether
 *       the instance can be terminated using the APIs. You must modify
 *       this attribute before you can terminate any "locked" instances
 *       from the APIs.
 *     * +InstanceInitiatedShutdownBehavior+ - (<tt>String</tt>)
 *       Specifies whether the instance's Amazon EBS volumes are stopped
 *       or terminated when the instance is shut down.
 *     * +License+ - (<tt>Object</tt>) Specifies active licenses in use
 *       and attached to an Amazon EC2 instance.
 *       * +Pool+ - (<tt>String</tt>) The license pool from which to take
 *         a license when starting Amazon EC2 instances in the associated
 *         RunInstances request.
 *     * +PrivateIpAddress+ - (<tt>String</tt>) If you're using Amazon
 *       Virtual Private Cloud, you can optionally use this parameter to
 *       assign the instance a specific available IP address from the
 *       subnet.
 *     * +ClientToken+ - (<tt>String</tt>) Unique, case-sensitive
 *       identifier you provide to ensure idempotency of the request. For
 *       more information, go to How to Ensure Idempotency in the Amazon
 *       Elastic Compute Cloud User Guide.
 *     * +AdditionalInfo+ - (<tt>String</tt>)
 *     * +NetworkInterfaces+ - (<tt>Array<Object></tt>)
 *       * +NetworkInterfaceId+ - (<tt>String</tt>)
 *       * +DeviceIndex+ - (<tt>Integer</tt>)
 *       * +SubnetId+ - (<tt>String</tt>)
 *       * +Description+ - (<tt>String</tt>)
 *       * +PrivateIpAddress+ - (<tt>String</tt>)
 *       * +Groups+ - (<tt>Array<String></tt>)
 *       * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *       * +PrivateIpAddresses+ - (<tt>Array<Object></tt>)
 *         * +PrivateIpAddress+ - (*required*, <tt>String</tt>)
 *         * +Primary+ - (<tt>Boolean</tt>)
 *       * +SecondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *     * +IamInstanceProfile+ - (<tt>Object</tt>)
 *       * +Arn+ - (<tt>String</tt>)
 *       * +Name+ - (<tt>String</tt>)
 *     * +EbsOptimized+ - (<tt>Boolean</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservationId+ - (<tt>String</tt>) The unique ID of this
 *         reservation.
 *       * +OwnerId+ - (<tt>String</tt>) The AWS Access Key ID of the user
 *         who owns the reservation.
 *       * +RequesterId+ - (<tt>String</tt>) The unique ID of the user who
 *         requested the instances in this reservation.
 *       * +Groups+ - (<tt>Array<Object></tt>) The list of security groups
 *         requested for the instances in this reservation.
 *         * +GroupName+ - (<tt>String</tt>)
 *         * +GroupId+ - (<tt>String</tt>)
 *       * +Instances+ - (<tt>Array<Object></tt>) The list of Amazon EC2
 *         instances included in this reservation.
 *         * +InstanceId+ - (<tt>String</tt>) Unique ID of the instance
 *           launched.
 *         * +ImageId+ - (<tt>String</tt>) Image ID of the AMI used to
 *           launch the instance.
 *         * +State+ - (<tt>Object</tt>) The current state of the instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * +Name+ - (<tt>String</tt>) The current state of the
 *             instance.
 *         * +PrivateDnsName+ - (<tt>String</tt>) The private DNS name
 *           assigned to the instance. This DNS name can only be used
 *           inside the Amazon EC2 network. This element remains empty
 *           until the instance enters a running state.
 *         * +PublicDnsName+ - (<tt>String</tt>) The public DNS name
 *           assigned to the instance. This DNS name is contactable from
 *           outside the Amazon EC2 network. This element remains empty
 *           until the instance enters a running state.
 *         * +StateTransitionReason+ - (<tt>String</tt>) Reason for the
 *           most recent state transition. This might be an empty string.
 *         * +KeyName+ - (<tt>String</tt>) If this instance was launched
 *           with an associated key pair, this displays the key pair name.
 *         * +AmiLaunchIndex+ - (<tt>Integer</tt>) The AMI launch index,
 *           which can be used to find this instance within the launch
 *           group.
 *         * +ProductCodes+ - (<tt>Array<Object></tt>) Product codes
 *           attached to this instance.
 *           * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *             DevPay product code.
 *           * +ProductCodeType+ - (<tt>String</tt>)
 *         * +InstanceType+ - (<tt>String</tt>) The instance type. For more
 *           information on instance types, please see the Amazon Elastic
 *           Compute Cloud Developer Guide.
 *         * +LaunchTime+ - (<tt>Date</tt>) The time this instance
 *           launched.
 *         * +Placement+ - (<tt>Object</tt>) The location where this
 *           instance launched.
 *           * +AvailabilityZone+ - (<tt>String</tt>) The availability zone
 *             in which an Amazon EC2 instance runs.
 *           * +GroupName+ - (<tt>String</tt>) The name of the
 *             PlacementGroup in which an Amazon EC2 instance runs.
 *             Placement groups are primarily used for launching High
 *             Performance Computing instances in the same group to ensure
 *             fast connection speeds.
 *           * +Tenancy+ - (<tt>String</tt>) The allowed tenancy of
 *             instances launched into the VPC. A value of default means
 *             instances can be launched with any tenancy; a value of
 *             dedicated means all instances launched into the VPC will be
 *             launched as dedicated tenancy regardless of the tenancy
 *             assigned to the instance at launch.
 *         * +KernelId+ - (<tt>String</tt>) Kernel associated with this
 *           instance.
 *         * +RamdiskId+ - (<tt>String</tt>) RAM disk associated with this
 *           instance.
 *         * +Platform+ - (<tt>String</tt>) Platform of the instance (e.g.,
 *           Windows).
 *         * +Monitoring+ - (<tt>Object</tt>) Monitoring status for this
 *           instance.
 *           * +State+ - (<tt>String</tt>) The state of monitoring on an
 *             Amazon EC2 instance (ex: enabled, disabled).
 *         * +SubnetId+ - (<tt>String</tt>) Specifies the Amazon VPC subnet
 *           ID in which the instance is running.
 *         * +VpcId+ - (<tt>String</tt>) Specifies the Amazon VPC in which
 *           the instance is running.
 *         * +PrivateIpAddress+ - (<tt>String</tt>) Specifies the private
 *           IP address that is assigned to the instance (Amazon VPC).
 *         * +PublicIpAddress+ - (<tt>String</tt>) Specifies the IP address
 *           of the instance.
 *         * +StateReason+ - (<tt>Object</tt>) The reason for the state
 *           change.
 *           * +Code+ - (<tt>String</tt>) Reason code for the state change.
 *           * +Message+ - (<tt>String</tt>) Descriptive message for the
 *             state change.
 *         * +Architecture+ - (<tt>String</tt>) The architecture of this
 *           instance.
 *         * +RootDeviceType+ - (<tt>String</tt>) The root device type used
 *           by the AMI. The AMI can use an Amazon EBS or instance store
 *           root device.
 *         * +RootDeviceName+ - (<tt>String</tt>) The root device name
 *           (e.g., /dev/sda1).
 *         * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Block device
 *           mapping set.
 *           * +DeviceName+ - (<tt>String</tt>) The device name (e.g.,
 *             /dev/sdh) at which the block device is exposed on the
 *             instance.
 *           * +Ebs+ - (<tt>Object</tt>) The optional EBS device mapped to
 *             the specified device name.
 *             * +VolumeId+ - (<tt>String</tt>) The ID of the EBS volume.
 *             * +Status+ - (<tt>String</tt>) The status of the EBS volume.
 *             * +AttachTime+ - (<tt>Date</tt>) The time at which the EBS
 *               volume was attached to the associated instance.
 *             * +DeleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *               whether the Amazon EBS volume is deleted on instance
 *               termination.
 *         * +VirtualizationType+ - (<tt>String</tt>)
 *         * +InstanceLifecycle+ - (<tt>String</tt>)
 *         * +SpotInstanceRequestId+ - (<tt>String</tt>)
 *         * +License+ - (<tt>Object</tt>)
 *           * +Pool+ - (<tt>String</tt>) The license pool from which this
 *             license was used (ex: 'windows').
 *         * +ClientToken+ - (<tt>String</tt>)
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           Instance.
 *           * +Key+ - (<tt>String</tt>) The tag's key.
 *           * +Value+ - (<tt>String</tt>) The tag's value.
 *         * +SecurityGroups+ - (<tt>Array<Object></tt>)
 *           * +GroupName+ - (<tt>String</tt>)
 *           * +GroupId+ - (<tt>String</tt>)
 *         * +SourceDestCheck+ - (<tt>Boolean</tt>)
 *         * +Hypervisor+ - (<tt>String</tt>)
 *         * +NetworkInterfaces+ - (<tt>Array<Object></tt>)
 *           * +NetworkInterfaceId+ - (<tt>String</tt>)
 *           * +SubnetId+ - (<tt>String</tt>)
 *           * +VpcId+ - (<tt>String</tt>)
 *           * +Description+ - (<tt>String</tt>)
 *           * +OwnerId+ - (<tt>String</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *           * +PrivateIpAddress+ - (<tt>String</tt>)
 *           * +PrivateDnsName+ - (<tt>String</tt>)
 *           * +SourceDestCheck+ - (<tt>Boolean</tt>)
 *           * +Groups+ - (<tt>Array<Object></tt>)
 *             * +GroupName+ - (<tt>String</tt>)
 *             * +GroupId+ - (<tt>String</tt>)
 *           * +Attachment+ - (<tt>Object</tt>)
 *             * +AttachmentId+ - (<tt>String</tt>)
 *             * +DeviceIndex+ - (<tt>Integer</tt>)
 *             * +Status+ - (<tt>String</tt>)
 *             * +AttachTime+ - (<tt>Date</tt>)
 *             * +DeleteOnTermination+ - (<tt>Boolean</tt>)
 *           * +Association+ - (<tt>Object</tt>)
 *             * +PublicIp+ - (<tt>String</tt>)
 *             * +IpOwnerId+ - (<tt>String</tt>)
 *         * +IamInstanceProfile+ - (<tt>Object</tt>)
 *           * +Arn+ - (<tt>String</tt>)
 *           * +Id+ - (<tt>String</tt>)
 *         * +EbsOptimized+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method startInstances(params, callback)
 *   Calls the StartInstances API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       Amazon EC2 instances to start.
 *     * +AdditionalInfo+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StartingInstances+ - (<tt>Array<Object></tt>) The list of the
 *         starting instances and details on how their state has changed.
 *         * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *           state changed.
 *         * +CurrentState+ - (<tt>Object</tt>) The current state of the
 *           specified instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * +Name+ - (<tt>String</tt>) The current state of the
 *             instance.
 *         * +PreviousState+ - (<tt>Object</tt>) The previous state of the
 *           specified instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * +Name+ - (<tt>String</tt>) The current state of the
 *             instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method stopInstances(params, callback)
 *   Calls the StopInstances API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       Amazon EC2 instances to stop.
 *     * +Force+ - (<tt>Boolean</tt>) Forces the instance to stop. The
 *       instance will not have an opportunity to flush file system
 *       caches nor file system meta data. If you use this option, you
 *       must perform file system check and repair procedures. This
 *       option is not recommended for Windows instances.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StoppingInstances+ - (<tt>Array<Object></tt>) The list of the
 *         stopping instances and details on how their state has changed.
 *         * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *           state changed.
 *         * +CurrentState+ - (<tt>Object</tt>) The current state of the
 *           specified instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * +Name+ - (<tt>String</tt>) The current state of the
 *             instance.
 *         * +PreviousState+ - (<tt>Object</tt>) The previous state of the
 *           specified instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * +Name+ - (<tt>String</tt>) The current state of the
 *             instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method terminateInstances(params, callback)
 *   Calls the TerminateInstances API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       instances to terminate.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +TerminatingInstances+ - (<tt>Array<Object></tt>) The list of
 *         the terminating instances and details on how their state has
 *         changed.
 *         * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *           state changed.
 *         * +CurrentState+ - (<tt>Object</tt>) The current state of the
 *           specified instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * +Name+ - (<tt>String</tt>) The current state of the
 *             instance.
 *         * +PreviousState+ - (<tt>Object</tt>) The previous state of the
 *           specified instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be ignored.
 *             The low byte is set based on the state represented.
 *           * +Name+ - (<tt>String</tt>) The current state of the
 *             instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method unassignPrivateIpAddresses(params, callback)
 *   Calls the UnassignPrivateIpAddresses API operation.
 *   @param params [Object]
 *     * +NetworkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +PrivateIpAddresses+ - (*required*, <tt>Array<String></tt>)
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
 *
 * @!method unmonitorInstances(params, callback)
 *   Calls the UnmonitorInstances API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       Amazon EC2 instances on which to disable monitoring.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceMonitorings+ - (<tt>Array<Object></tt>) A list of
 *         updated monitoring information for the instances specified in
 *         the request.
 *         * +InstanceId+ - (<tt>String</tt>) Instance ID.
 *         * +Monitoring+ - (<tt>Object</tt>) Monitoring state for the
 *           associated instance.
 *           * +State+ - (<tt>String</tt>) The state of monitoring on an
 *             Amazon EC2 instance (ex: enabled, disabled).
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
AWS.EC2.Client = inherit({});
