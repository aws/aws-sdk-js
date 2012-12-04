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
 * === Sending a Request Using EC2
 *
 *   svc = new AWS.EC2();
 *   svc.client.OPERATION_NAME(params).always(function (resp) {
 *     console.log(resp.data, resp.error);
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
 * @!method activateLicense(params, options)
 *   Activates a specific number of licenses for a 90-day period.
 *   Activations can be done against a specific license ID.
 *   @param [Object] params
 *     * +licenseId+ - (*required*, <tt>String</tt>) Specifies the ID for
 *       the specific license to activate against.
 *     * +capacity+ - (*required*, <tt>Integer</tt>) Specifies the
 *       additional number of licenses to activate.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method allocateAddress(params, options)
 *   The AllocateAddress operation acquires an elastic IP address for use
 *   with your account.
 *   @param [Object] params
 *     * +Domain+ - (<tt>String</tt>) Set to vpc to allocate the address
 *       to your VPC. By default, will allocate to EC2.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +PublicIp+ - (<tt>String</tt>) IP address for use with your
 *       account.
 *     * +domain+ - (<tt>String</tt>)
 *     * +allocationId+ - (<tt>String</tt>)
 *
 * @!method assignPrivateIpAddresses(params, options)
 *   Calls the AssignPrivateIpAddresses API operation.
 *   @param [Object] params
 *     * +networkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +privateIpAddresses+ - (<tt>Array<String></tt>)
 *     * +secondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *     * +allowReassignment+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method associateAddress(params, options)
 *   The AssociateAddress operation associates an elastic IP address with
 *   an instance.
 *   @param [Object] params
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The instance to
 *       associate with the IP address.
 *     * +PublicIp+ - (*required*, <tt>String</tt>) IP address that you
 *       are assigning to the instance.
 *     * +AllocationId+ - (<tt>String</tt>) The allocation ID that AWS
 *       returned when you allocated the elastic IP address for use with
 *       Amazon VPC.
 *     * +networkInterfaceId+ - (<tt>String</tt>)
 *     * +privateIpAddress+ - (<tt>String</tt>)
 *     * +allowReassociation+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +associationId+ - (<tt>String</tt>)
 *
 * @!method associateDhcpOptions(params, options)
 *   Associates a set of DHCP options (that you've previously created)
 *   with the specified VPC. Or, associates the default DHCP options with
 *   the VPC. The default set consists of the standard EC2 host name, no
 *   domain name, no DNS server, no NTP server, and no NetBIOS server or
 *   node type. After you associate the options with the VPC, any
 *   existing instances and all new instances that you launch in that VPC
 *   use the options. For more information about the supported DHCP
 *   options and using them with Amazon VPC, go to Using DHCP Options in
 *   the Amazon Virtual Private Cloud Developer Guide.
 *   @param [Object] params
 *     * +DhcpOptionsId+ - (*required*, <tt>String</tt>) The ID of the
 *       DHCP options to associate with the VPC. Specify "default" to
 *       associate the default DHCP options with the VPC.
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC to
 *       associate the DHCP options with.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method associateRouteTable(params, options)
 *   Associates a subnet with a route table. The subnet and route table
 *   must be in the same VPC. This association causes traffic originating
 *   from the subnet to be routed according to the routes in the route
 *   table. The action returns an association ID, which you need if you
 *   want to disassociate the route table from the subnet later. A route
 *   table can be associated with multiple subnets.
 *   @param [Object] params
 *     * +subnetId+ - (*required*, <tt>String</tt>) The ID of the subnet.
 *     * +routeTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +associationId+ - (<tt>String</tt>)
 *
 * @!method attachInternetGateway(params, options)
 *   Attaches an Internet gateway to a VPC, enabling connectivity between
 *   the Internet and the VPC. For more information about your VPC and
 *   Internet gateway, go to the Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +internetGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the Internet gateway to attach.
 *     * +vpcId+ - (*required*, <tt>String</tt>) The ID of the VPC.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method attachNetworkInterface(params, options)
 *   Calls the AttachNetworkInterface API operation.
 *   @param [Object] params
 *     * +networkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +instanceId+ - (*required*, <tt>String</tt>)
 *     * +deviceIndex+ - (*required*, <tt>Integer</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +attachmentId+ - (<tt>String</tt>)
 *
 * @!method attachVolume(params, options)
 *   Attach a previously created volume to a running instance.
 *   @param [Object] params
 *     * +VolumeId+ - (*required*, <tt>String</tt>) The ID of the Amazon
 *       EBS volume. The volume and instance must be within the same
 *       Availability Zone and the instance must be running.
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance to which the volume attaches. The volume and instance
 *       must be within the same Availability Zone and the instance must
 *       be running.
 *     * +Device+ - (*required*, <tt>String</tt>) Specifies how the
 *       device is exposed to the instance (e.g., /dev/sdh).
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Attachment+ - (<tt>Object</tt>)
 *       * +VolumeId+ - (<tt>String</tt>)
 *       * +InstanceId+ - (<tt>String</tt>)
 *       * +Device+ - (<tt>String</tt>) How the device is exposed to the
 *         instance (e.g., /dev/sdh).
 *       * +State+ - (<tt>String</tt>)
 *       * +AttachTime+ - (<tt>Date</tt>) Timestamp when this attachment
 *         initiated.
 *       * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *
 * @!method attachVpnGateway(params, options)
 *   Attaches a VPN gateway to a VPC. This is the last step required to
 *   get your VPC fully connected to your data center before launching
 *   instances in it. For more information, go to Process for Using
 *   Amazon VPC in the Amazon Virtual Private Cloud Developer Guide.
 *   @param [Object] params
 *     * +VpnGatewayId+ - (*required*, <tt>String</tt>) The ID of the VPN
 *       gateway to attach to the VPC.
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC to
 *       attach to the VPN gateway.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +VpcAttachement+ - (<tt>Object</tt>)
 *       * +VpcId+ - (<tt>String</tt>)
 *       * +State+ - (<tt>String</tt>)
 *
 * @!method authorizeSecurityGroupEgress(params, options)
 *   This action applies only to security groups in a VPC; it's not
 *   supported for EC2 security groups. For information about Amazon
 *   Virtual Private Cloud and VPC security groups, go to the Amazon
 *   Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +groupId+ - (*required*, <tt>String</tt>) ID of the VPC security
 *       group to modify.
 *     * +sourceSecurityGroupName+ - (<tt>String</tt>) Deprecated.
 *     * +sourceSecurityGroupOwnerId+ - (<tt>String</tt>) Deprecated.
 *     * +ipProtocol+ - (<tt>String</tt>) Deprecated.
 *     * +fromPort+ - (<tt>Integer</tt>) Deprecated.
 *     * +toPort+ - (<tt>Integer</tt>) Deprecated.
 *     * +cidrIp+ - (<tt>String</tt>) Deprecated.
 *     * +ipPermissions+ - (<tt>Array<Object></tt>) List of IP
 *       permissions to authorize on the specified security group.
 *       Specifying permissions through IP permissions is the preferred
 *       way of authorizing permissions since it offers more flexibility
 *       and control.
 *       * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *         permission.
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
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method authorizeSecurityGroupIngress(params, options)
 *   The AuthorizeSecurityGroupIngress operation adds permissions to a
 *   security group.
 *   @param [Object] params
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
 *         permission.
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
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method bundleInstance(params, options)
 *   The BundleInstance operation request that an instance is bundled the
 *   next time it boots. The bundling process creates a new image from a
 *   running instance and stores the AMI data in S3. Once bundled, the
 *   image must be registered in the normal way using the RegisterImage
 *   API.
 *   @param [Object] params
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance to bundle.
 *     * +Storage+ - (*required*, <tt>Object</tt>)
 *       * +S3+ - (<tt>Object</tt>) The details of S3 storage for
 *         bundling a Windows instance.
 *         * +Bucket+ - (<tt>String</tt>) The bucket in which to store
 *           the AMI. You can specify a bucket that you already own or a
 *           new bucket that Amazon EC2 creates on your behalf.
 *         * +Prefix+ - (<tt>String</tt>) The prefix to use when storing
 *           the AMI in S3.
 *         * +AWSAccessKeyId+ - (<tt>String</tt>) The Access Key ID of
 *           the owner of the Amazon S3 bucket.
 *         * +UploadPolicy+ - (<tt>String</tt>) A Base64-encoded Amazon
 *           S3 upload policy that gives Amazon EC2 permission to upload
 *           items into Amazon S3 on the user's behalf.
 *         * +UploadPolicySignature+ - (<tt>String</tt>) The signature of
 *           the Base64 encoded JSON document.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +BundleTask+ - (<tt>Object</tt>)
 *       * +InstanceId+ - (<tt>String</tt>) Instance associated with this
 *         bundle task.
 *       * +BundleId+ - (<tt>String</tt>) Unique identifier for this
 *         task.
 *       * +State+ - (<tt>String</tt>) The state of this task.
 *       * +StartTime+ - (<tt>Date</tt>) The time this task started.
 *       * +UpdateTime+ - (<tt>Date</tt>) The time of the most recent
 *         update for the task.
 *       * +Storage+ - (<tt>Object</tt>) Amazon S3 storage locations.
 *         * +S3+ - (<tt>Object</tt>) The details of S3 storage for
 *           bundling a Windows instance.
 *           * +Bucket+ - (<tt>String</tt>) The bucket in which to store
 *             the AMI. You can specify a bucket that you already own or
 *             a new bucket that Amazon EC2 creates on your behalf.
 *           * +Prefix+ - (<tt>String</tt>) The prefix to use when
 *             storing the AMI in S3.
 *           * +AWSAccessKeyId+ - (<tt>String</tt>) The Access Key ID of
 *             the owner of the Amazon S3 bucket.
 *           * +UploadPolicy+ - (<tt>String</tt>) A Base64-encoded Amazon
 *             S3 upload policy that gives Amazon EC2 permission to
 *             upload items into Amazon S3 on the user's behalf.
 *           * +UploadPolicySignature+ - (<tt>String</tt>) The signature
 *             of the Base64 encoded JSON document.
 *       * +Progress+ - (<tt>String</tt>) The level of task completion,
 *         in percent (e.g., 20%).
 *       * +BundleTaskError+ - (<tt>Object</tt>) If the task fails, a
 *         description of the error.
 *         * +Code+ - (<tt>String</tt>) Error code.
 *         * +Message+ - (<tt>String</tt>) Error message.
 *
 * @!method cancelBundleTask(params, options)
 *   CancelBundleTask operation cancels a pending or in-progress bundling
 *   task. This is an asynchronous call and it make take a while for the
 *   task to be canceled. If a task is canceled while it is storing
 *   items, there may be parts of the incomplete AMI stored in S3. It is
 *   up to the caller to clean up these parts from S3.
 *   @param [Object] params
 *     * +BundleId+ - (*required*, <tt>String</tt>) The ID of the bundle
 *       task to cancel.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +BundleTask+ - (<tt>Object</tt>) The canceled bundle task.
 *       * +InstanceId+ - (<tt>String</tt>) Instance associated with this
 *         bundle task.
 *       * +BundleId+ - (<tt>String</tt>) Unique identifier for this
 *         task.
 *       * +State+ - (<tt>String</tt>) The state of this task.
 *       * +StartTime+ - (<tt>Date</tt>) The time this task started.
 *       * +UpdateTime+ - (<tt>Date</tt>) The time of the most recent
 *         update for the task.
 *       * +Storage+ - (<tt>Object</tt>) Amazon S3 storage locations.
 *         * +S3+ - (<tt>Object</tt>) The details of S3 storage for
 *           bundling a Windows instance.
 *           * +Bucket+ - (<tt>String</tt>) The bucket in which to store
 *             the AMI. You can specify a bucket that you already own or
 *             a new bucket that Amazon EC2 creates on your behalf.
 *           * +Prefix+ - (<tt>String</tt>) The prefix to use when
 *             storing the AMI in S3.
 *           * +AWSAccessKeyId+ - (<tt>String</tt>) The Access Key ID of
 *             the owner of the Amazon S3 bucket.
 *           * +UploadPolicy+ - (<tt>String</tt>) A Base64-encoded Amazon
 *             S3 upload policy that gives Amazon EC2 permission to
 *             upload items into Amazon S3 on the user's behalf.
 *           * +UploadPolicySignature+ - (<tt>String</tt>) The signature
 *             of the Base64 encoded JSON document.
 *       * +Progress+ - (<tt>String</tt>) The level of task completion,
 *         in percent (e.g., 20%).
 *       * +BundleTaskError+ - (<tt>Object</tt>) If the task fails, a
 *         description of the error.
 *         * +Code+ - (<tt>String</tt>) Error code.
 *         * +Message+ - (<tt>String</tt>) Error message.
 *
 * @!method cancelConversionTask(params, options)
 *   Calls the CancelConversionTask API operation.
 *   @param [Object] params
 *     * +conversionTaskId+ - (*required*, <tt>String</tt>)
 *     * +reasonMessage+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method cancelExportTask(params, options)
 *   Calls the CancelExportTask API operation.
 *   @param [Object] params
 *     * +exportTaskId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method cancelReservedInstancesListing(params, options)
 *   Calls the CancelReservedInstancesListing API operation.
 *   @param [Object] params
 *     * +reservedInstancesListingId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +reservedInstancesListings+ - (<tt>Array<Object></tt>)
 *       * +reservedInstancesListingId+ - (<tt>String</tt>)
 *       * +reservedInstancesId+ - (<tt>String</tt>)
 *       * +createDate+ - (<tt>Date</tt>)
 *       * +updateDate+ - (<tt>Date</tt>)
 *       * +status+ - (<tt>String</tt>)
 *       * +statusMessage+ - (<tt>String</tt>)
 *       * +instanceCounts+ - (<tt>Array<Object></tt>)
 *         * +state+ - (<tt>String</tt>)
 *         * +instanceCount+ - (<tt>Integer</tt>)
 *       * +priceSchedules+ - (<tt>Array<Object></tt>)
 *         * +term+ - (<tt>Integer</tt>)
 *         * +price+ - (<tt>Float</tt>)
 *         * +currencyCode+ - (<tt>String</tt>)
 *         * +active+ - (<tt>Boolean</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +clientToken+ - (<tt>String</tt>)
 *
 * @!method cancelSpotInstanceRequests(params, options)
 *   Cancels one or more Spot Instance requests.
 *   @param [Object] params
 *     * +spotInstanceRequestIds+ - (*required*, <tt>Array<String></tt>)
 *       Specifies the ID of the Spot Instance request.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +cancelledSpotInstanceRequests+ - (<tt>Array<Object></tt>)
 *       * +spotInstanceRequestId+ - (<tt>String</tt>)
 *       * +state+ - (<tt>String</tt>)
 *
 * @!method confirmProductInstance(params, options)
 *   The ConfirmProductInstance operation returns true if the specified
 *   product code is attached to the specified instance. The operation
 *   returns false if the product code is not attached to the instance.
 *   @param [Object] params
 *     * +ProductCode+ - (*required*, <tt>String</tt>) The product code
 *       to confirm.
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance to confirm.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +OwnerId+ - (<tt>String</tt>) The instance owner's account ID.
 *       Only present if the product code is attached to the instance.
 *
 * @!method createCustomerGateway(params, options)
 *   Provides information to AWS about your customer gateway device. The
 *   customer gateway is the appliance at your end of the VPN connection
 *   (compared to the VPN gateway, which is the device at the AWS side of
 *   the VPN connection). You can have a single active customer gateway
 *   per AWS account (active means that you've created a VPN connection
 *   to use with the customer gateway). AWS might delete any customer
 *   gateway that you create with this operation if you leave it inactive
 *   for an extended period of time.
 *   @param [Object] params
 *     * +Type+ - (*required*, <tt>String</tt>) The type of VPN
 *       connection this customer gateway supports.
 *     * +PublicIp+ - (*required*, <tt>String</tt>) The Internet-routable
 *       IP address for the customer gateway's outside interface. The
 *       address must be static
 *     * +BgpAsn+ - (*required*, <tt>Integer</tt>) The customer gateway's
 *       Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +CustomerGateway+ - (<tt>Object</tt>) Information about the
 *       customer gateway.
 *       * +CustomerGatewayId+ - (<tt>String</tt>) Specifies the ID of
 *         the customer gateway.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         customer gateway. Valid values are pending, available,
 *         deleting, and deleted.
 *       * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *         connection the customer gateway supports.
 *       * +IpAddress+ - (<tt>String</tt>) Contains the Internet-routable
 *         IP address of the customer gateway's outside interface.
 *       * +BgpAsn+ - (<tt>String</tt>) Specifies the customer gateway's
 *         Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         CustomerGateway.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method createDhcpOptions(params, options)
 *   Creates a set of DHCP options that you can then associate with one
 *   or more VPCs, causing all existing and new instances that you launch
 *   in those VPCs to use the set of DHCP options. The following table
 *   lists the individual DHCP options you can specify. For more
 *   information about the options, go to
 *   http://www.ietf.org/rfc/rfc2132.txt
 *   @param [Object] params
 *     * +DhcpConfigurations+ - (*required*, <tt>Array<Object></tt>) A
 *       set of one or more DHCP configurations.
 *       * +Key+ - (<tt>String</tt>) Contains the name of a DHCP option.
 *       * +Values+ - (<tt>Array<String></tt>) Contains a set of values
 *         for a DHCP option.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +DhcpOptions+ - (<tt>Object</tt>) A set of one or more DHCP
 *       options.
 *       * +DhcpOptionsId+ - (<tt>String</tt>) Specifies the ID of the
 *         set of DHCP options.
 *       * +DhcpConfigurations+ - (<tt>Array<Object></tt>) Contains
 *         information about the set of DHCP options.
 *         * +Key+ - (<tt>String</tt>) Contains the name of a DHCP
 *           option.
 *         * +Values+ - (<tt>Array<String></tt>) Contains a set of values
 *           for a DHCP option.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         DhcpOptions.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method createImage(params, options)
 *   Creates an Amazon EBS-backed AMI from a "running" or "stopped"
 *   instance. AMIs that use an Amazon EBS root device boot faster than
 *   AMIs that use instance stores. They can be up to 1 TiB in size, use
 *   storage that persists on instance failure, and can be stopped and
 *   started.
 *   @param [Object] params
 *     * +instanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance from which to create the new image.
 *     * +name+ - (*required*, <tt>String</tt>) The name for the new AMI
 *       being created.
 *     * +description+ - (<tt>String</tt>) The description for the new
 *       AMI being created.
 *     * +noReboot+ - (<tt>Boolean</tt>) By default this property is set
 *       to false, which means Amazon EC2 attempts to cleanly shut down
 *       the instance before image creation and reboots the instance
 *       afterwards. When set to true, Amazon EC2 will not shut down the
 *       instance before creating the image. When this option is used,
 *       file system integrity on the created image cannot be guaranteed.
 *     * +blockDeviceMappings+ - (<tt>Array<Object></tt>)
 *       * +VirtualName+ - (<tt>String</tt>) Specifies the virtual device
 *         name.
 *       * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *         (e.g., /dev/sdh).
 *       * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *           which the volume will be created.
 *         * +volumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *           gigabytes.
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * +volumeType+ - (<tt>String</tt>)
 *         * +iops+ - (<tt>Integer</tt>)
 *       * +noDevice+ - (<tt>String</tt>) Specifies the device name to
 *         suppress during instance launch.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +imageId+ - (<tt>String</tt>) The ID of the new AMI.
 *
 * @!method createInstanceExportTask(params, options)
 *   Calls the CreateInstanceExportTask API operation.
 *   @param [Object] params
 *     * +description+ - (<tt>String</tt>)
 *     * +instanceId+ - (*required*, <tt>String</tt>)
 *     * +targetEnvironment+ - (<tt>String</tt>)
 *     * +exportToS3Task+ - (<tt>Object</tt>)
 *       * +diskImageFormat+ - (<tt>String</tt>)
 *       * +containerFormat+ - (<tt>String</tt>)
 *       * +s3Bucket+ - (<tt>String</tt>)
 *       * +s3Prefix+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +exportTask+ - (<tt>Object</tt>)
 *       * +exportTaskId+ - (<tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +state+ - (<tt>String</tt>)
 *       * +statusMessage+ - (<tt>String</tt>)
 *       * +instanceExportDetails+ - (<tt>Object</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +targetEnvironment+ - (<tt>String</tt>)
 *       * +exportToS3Task+ - (<tt>Object</tt>)
 *         * +diskImageFormat+ - (<tt>String</tt>)
 *         * +containerFormat+ - (<tt>String</tt>)
 *         * +s3Bucket+ - (<tt>String</tt>)
 *         * +s3Key+ - (<tt>String</tt>)
 *
 * @!method createInternetGateway(params, options)
 *   Creates a new Internet gateway in your AWS account. After creating
 *   the Internet gateway, you then attach it to a VPC using
 *   AttachInternetGateway. For more information about your VPC and
 *   Internet gateway, go to Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +internetGateway+ - (<tt>Object</tt>)
 *       * +internetGatewayId+ - (<tt>String</tt>)
 *       * +attachments+ - (<tt>Array<Object></tt>)
 *         * +vpcId+ - (<tt>String</tt>)
 *         * +state+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method createKeyPair(params, options)
 *   The CreateKeyPair operation creates a new 2048 bit RSA key pair and
 *   returns a unique ID that can be used to reference this key pair when
 *   launching new instances. For more information, see RunInstances.
 *   @param [Object] params
 *     * +KeyName+ - (*required*, <tt>String</tt>) The unique name for
 *       the new key pair.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +KeyPair+ - (<tt>Object</tt>) The newly created EC2 key pair.
 *       * +KeyName+ - (<tt>String</tt>) The name of the key pair.
 *       * +KeyFingerprint+ - (<tt>String</tt>) The SHA-1 digest of the
 *         DER encoded private key.
 *       * +KeyMaterial+ - (<tt>String</tt>) The unencrypted PEM encoded
 *         RSA private key.
 *
 * @!method createNetworkAcl(params, options)
 *   Creates a new network ACL in a VPC. Network ACLs provide an optional
 *   layer of security (on top of security groups) for the instances in
 *   your VPC. For more information about network ACLs, go to Network
 *   ACLs in the Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +vpcId+ - (*required*, <tt>String</tt>) The ID of the VPC where
 *       the network ACL will be created.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +networkAcl+ - (<tt>Object</tt>)
 *       * +networkAclId+ - (<tt>String</tt>)
 *       * +vpcId+ - (<tt>String</tt>)
 *       * +isDefault+ - (<tt>Boolean</tt>)
 *       * +entries+ - (<tt>Array<Object></tt>)
 *         * +ruleNumber+ - (<tt>Integer</tt>)
 *         * +protocol+ - (<tt>String</tt>)
 *         * +ruleAction+ - (<tt>String</tt>)
 *         * +egress+ - (<tt>Boolean</tt>)
 *         * +cidrBlock+ - (<tt>String</tt>)
 *         * +icmpTypeCode+ - (<tt>Object</tt>)
 *           * +type+ - (<tt>Integer</tt>) For the ICMP protocol, the
 *             ICMP type. A value of -1 is a wildcard meaning all types.
 *             Required if specifying icmp for the protocol.
 *           * +code+ - (<tt>Integer</tt>) For the ICMP protocol, the
 *             ICMP code. A value of -1 is a wildcard meaning all codes.
 *             Required if specifying icmp for the protocol.
 *         * +portRange+ - (<tt>Object</tt>)
 *           * +from+ - (<tt>Integer</tt>) The first port in the range.
 *             Required if specifying tcp or udp for the protocol.
 *           * +to+ - (<tt>Integer</tt>) The last port in the range.
 *             Required if specifying tcp or udp for the protocol.
 *       * +associations+ - (<tt>Array<Object></tt>)
 *         * +networkAclAssociationId+ - (<tt>String</tt>)
 *         * +networkAclId+ - (<tt>String</tt>)
 *         * +subnetId+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method createNetworkAclEntry(params, options)
 *   Creates an entry (i.e., rule) in a network ACL with a rule number
 *   you specify. Each network ACL has a set of numbered ingress rules
 *   and a separate set of numbered egress rules. When determining
 *   whether a packet should be allowed in or out of a subnet associated
 *   with the ACL, Amazon VPC processes the entries in the ACL according
 *   to the rule numbers, in ascending order.
 *   @param [Object] params
 *     * +networkAclId+ - (*required*, <tt>String</tt>) ID of the ACL
 *       where the entry will be created.
 *     * +ruleNumber+ - (*required*, <tt>Integer</tt>) Rule number to
 *       assign to the entry (e.g., 100). ACL entries are processed in
 *       ascending order by rule number.
 *     * +protocol+ - (*required*, <tt>String</tt>) IP protocol the rule
 *       applies to. Valid Values: tcp, udp, icmp or an IP protocol
 *       number.
 *     * +ruleAction+ - (*required*, <tt>String</tt>) Whether to allow or
 *       deny traffic that matches the rule.
 *     * +egress+ - (*required*, <tt>Boolean</tt>) Whether this rule
 *       applies to egress traffic from the subnet (true) or ingress
 *       traffic to the subnet (false).
 *     * +cidrBlock+ - (*required*, <tt>String</tt>) The CIDR range to
 *       allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
 *     * +icmpTypeCode+ - (<tt>Object</tt>) ICMP values.
 *       * +type+ - (<tt>Integer</tt>) For the ICMP protocol, the ICMP
 *         type. A value of -1 is a wildcard meaning all types. Required
 *         if specifying icmp for the protocol.
 *       * +code+ - (<tt>Integer</tt>) For the ICMP protocol, the ICMP
 *         code. A value of -1 is a wildcard meaning all codes. Required
 *         if specifying icmp for the protocol.
 *     * +portRange+ - (<tt>Object</tt>) Port ranges.
 *       * +from+ - (<tt>Integer</tt>) The first port in the range.
 *         Required if specifying tcp or udp for the protocol.
 *       * +to+ - (<tt>Integer</tt>) The last port in the range. Required
 *         if specifying tcp or udp for the protocol.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method createNetworkInterface(params, options)
 *   Calls the CreateNetworkInterface API operation.
 *   @param [Object] params
 *     * +subnetId+ - (*required*, <tt>String</tt>)
 *     * +description+ - (<tt>String</tt>)
 *     * +privateIpAddress+ - (<tt>String</tt>)
 *     * +groups+ - (<tt>Array<String></tt>)
 *     * +privateIpAddresses+ - (<tt>Array<Object></tt>)
 *       * +privateIpAddress+ - (*required*, <tt>String</tt>)
 *       * +primary+ - (<tt>Boolean</tt>)
 *     * +secondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +networkInterface+ - (<tt>Object</tt>)
 *       * +networkInterfaceId+ - (<tt>String</tt>)
 *       * +subnetId+ - (<tt>String</tt>)
 *       * +vpcId+ - (<tt>String</tt>)
 *       * +availabilityZone+ - (<tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +ownerId+ - (<tt>String</tt>)
 *       * +requesterId+ - (<tt>String</tt>)
 *       * +requesterManaged+ - (<tt>Boolean</tt>)
 *       * +status+ - (<tt>String</tt>)
 *       * +macAddress+ - (<tt>String</tt>)
 *       * +privateIpAddress+ - (<tt>String</tt>)
 *       * +privateDnsName+ - (<tt>String</tt>)
 *       * +sourceDestCheck+ - (<tt>Boolean</tt>)
 *       * +groups+ - (<tt>Array<Object></tt>)
 *         * +GroupName+ - (<tt>String</tt>)
 *         * +groupId+ - (<tt>String</tt>)
 *       * +attachment+ - (<tt>Object</tt>)
 *         * +attachmentId+ - (<tt>String</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +instanceOwnerId+ - (<tt>String</tt>)
 *         * +deviceIndex+ - (<tt>Integer</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +attachTime+ - (<tt>Date</tt>)
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *       * +association+ - (<tt>Object</tt>)
 *         * +publicIp+ - (<tt>String</tt>)
 *         * +ipOwnerId+ - (<tt>String</tt>)
 *         * +allocationId+ - (<tt>String</tt>)
 *         * +associationId+ - (<tt>String</tt>)
 *       * +tagSet+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +privateIpAddresses+ - (<tt>Array<Object></tt>)
 *         * +privateIpAddress+ - (<tt>String</tt>)
 *         * +primary+ - (<tt>Boolean</tt>)
 *         * +association+ - (<tt>Object</tt>)
 *           * +publicIp+ - (<tt>String</tt>)
 *           * +ipOwnerId+ - (<tt>String</tt>)
 *           * +allocationId+ - (<tt>String</tt>)
 *           * +associationId+ - (<tt>String</tt>)
 *
 * @!method createPlacementGroup(params, options)
 *   Creates a PlacementGroup into which multiple Amazon EC2 instances
 *   can be launched. Users must give the group a name unique within the
 *   scope of the user account.
 *   @param [Object] params
 *     * +groupName+ - (*required*, <tt>String</tt>) The name of the
 *       PlacementGroup.
 *     * +strategy+ - (*required*, <tt>String</tt>) The PlacementGroup
 *       strategy.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method createReservedInstancesListing(params, options)
 *   Calls the CreateReservedInstancesListing API operation.
 *   @param [Object] params
 *     * +reservedInstancesId+ - (*required*, <tt>String</tt>)
 *     * +instanceCount+ - (*required*, <tt>Integer</tt>)
 *     * +priceSchedules+ - (*required*, <tt>Array<Object></tt>)
 *       * +term+ - (<tt>Integer</tt>)
 *       * +price+ - (<tt>Float</tt>)
 *       * +currencyCode+ - (<tt>String</tt>)
 *     * +clientToken+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +reservedInstancesListings+ - (<tt>Array<Object></tt>)
 *       * +reservedInstancesListingId+ - (<tt>String</tt>)
 *       * +reservedInstancesId+ - (<tt>String</tt>)
 *       * +createDate+ - (<tt>Date</tt>)
 *       * +updateDate+ - (<tt>Date</tt>)
 *       * +status+ - (<tt>String</tt>)
 *       * +statusMessage+ - (<tt>String</tt>)
 *       * +instanceCounts+ - (<tt>Array<Object></tt>)
 *         * +state+ - (<tt>String</tt>)
 *         * +instanceCount+ - (<tt>Integer</tt>)
 *       * +priceSchedules+ - (<tt>Array<Object></tt>)
 *         * +term+ - (<tt>Integer</tt>)
 *         * +price+ - (<tt>Float</tt>)
 *         * +currencyCode+ - (<tt>String</tt>)
 *         * +active+ - (<tt>Boolean</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +clientToken+ - (<tt>String</tt>)
 *
 * @!method createRoute(params, options)
 *   Creates a new route in a route table within a VPC. The route's
 *   target can be either a gateway attached to the VPC or a NAT instance
 *   in the VPC.
 *   @param [Object] params
 *     * +routeTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table where the route will be added.
 *     * +destinationCidrBlock+ - (*required*, <tt>String</tt>) The CIDR
 *       address block used for the destination match. For example:
 *       0.0.0.0/0. Routing decisions are based on the most specific
 *       match.
 *     * +gatewayId+ - (<tt>String</tt>) The ID of a VPN or Internet
 *       gateway attached to your VPC. You must provide either GatewayId
 *       or InstanceId, but not both.
 *     * +instanceId+ - (<tt>String</tt>) The ID of a NAT instance in
 *       your VPC. You must provide either GatewayId or InstanceId, but
 *       not both.
 *     * +networkInterfaceId+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method createRouteTable(params, options)
 *   Creates a new route table within a VPC. After you create a new route
 *   table, you can add routes and associate the table with a subnet. For
 *   more information about route tables, go to Route Tables in the
 *   Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +vpcId+ - (*required*, <tt>String</tt>) The ID of the VPC where
 *       the route table will be created.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +routeTable+ - (<tt>Object</tt>)
 *       * +routeTableId+ - (<tt>String</tt>)
 *       * +vpcId+ - (<tt>String</tt>)
 *       * +routes+ - (<tt>Array<Object></tt>)
 *         * +destinationCidrBlock+ - (<tt>String</tt>)
 *         * +gatewayId+ - (<tt>String</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +instanceOwnerId+ - (<tt>String</tt>)
 *         * +networkInterfaceId+ - (<tt>String</tt>)
 *         * +state+ - (<tt>String</tt>)
 *       * +associations+ - (<tt>Array<Object></tt>)
 *         * +routeTableAssociationId+ - (<tt>String</tt>)
 *         * +routeTableId+ - (<tt>String</tt>)
 *         * +subnetId+ - (<tt>String</tt>)
 *         * +main+ - (<tt>Boolean</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +propagatingVgws+ - (<tt>Array<Object></tt>)
 *         * +gatewayId+ - (<tt>String</tt>)
 *       * +propagatedRoutes+ - (<tt>Array<Object></tt>)
 *         * +destinationCidrBlock+ - (<tt>String</tt>)
 *         * +gatewayId+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +sourceId+ - (<tt>String</tt>)
 *
 * @!method createSecurityGroup(params, options)
 *   The CreateSecurityGroup operation creates a new security group.
 *   @param [Object] params
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the security
 *       group.
 *     * +Description+ - (*required*, <tt>String</tt>) Description of the
 *       group. This is informational only.
 *     * +VpcId+ - (<tt>String</tt>) ID of the VPC.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +groupId+ - (<tt>String</tt>)
 *
 * @!method createSnapshot(params, options)
 *   Create a snapshot of the volume identified by volume ID. A volume
 *   does not have to be detached at the time the snapshot is taken.
 *   @param [Object] params
 *     * +VolumeId+ - (*required*, <tt>String</tt>) The ID of the volume
 *       from which to create the snapshot.
 *     * +Description+ - (<tt>String</tt>) The description for the new
 *       snapshot.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Snapshot+ - (<tt>Object</tt>) The new snapshot.
 *       * +SnapshotId+ - (<tt>String</tt>) The unique ID of this
 *         snapshot.
 *       * +VolumeId+ - (<tt>String</tt>) The ID of the volume from which
 *         this snapshot was created.
 *       * +State+ - (<tt>String</tt>) Snapshot state (e.g., pending,
 *         completed, or error).
 *       * +StartTime+ - (<tt>Date</tt>) Time stamp when the snapshot was
 *         initiated.
 *       * +Progress+ - (<tt>String</tt>) The progress of the snapshot,
 *         in percentage.
 *       * +OwnerId+ - (<tt>String</tt>) AWS Access Key ID of the user
 *         who owns the snapshot.
 *       * +Description+ - (<tt>String</tt>) Description of the snapshot.
 *       * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *         gigabytes.
 *       * +ownerAlias+ - (<tt>String</tt>) The AWS account alias (e.g.,
 *         "amazon", "redhat", "self", etc.) or AWS account ID that owns
 *         the AMI.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         Snapshot.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method createSpotDatafeedSubscription(params, options)
 *   Creates the data feed for Spot Instances, enabling you to view Spot
 *   Instance usage logs. You can create one data feed per account.
 *   @param [Object] params
 *     * +bucket+ - (*required*, <tt>String</tt>) The Amazon S3 bucket in
 *       which to store the Spot Instance datafeed.
 *     * +prefix+ - (<tt>String</tt>) The prefix that is prepended to
 *       datafeed files.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +spotDatafeedSubscription+ - (<tt>Object</tt>)
 *       * +ownerId+ - (<tt>String</tt>) Specifies the AWS account ID of
 *         the account.
 *       * +bucket+ - (<tt>String</tt>) Specifies the Amazon S3 bucket
 *         where the Spot Instance data feed is located.
 *       * +prefix+ - (<tt>String</tt>) Contains the prefix that is
 *         prepended to data feed files.
 *       * +state+ - (<tt>String</tt>) Specifies the state of the Spot
 *         Instance request.
 *       * +fault+ - (<tt>Object</tt>) Specifies a fault code for the
 *         Spot Instance request, if present.
 *         * +code+ - (<tt>String</tt>)
 *         * +message+ - (<tt>String</tt>)
 *
 * @!method createSubnet(params, options)
 *   Creates a subnet in an existing VPC. You can create up to 20 subnets
 *   in a VPC. If you add more than one subnet to a VPC, they're set up
 *   in a star topology with a logical router in the middle. When you
 *   create each subnet, you provide the VPC ID and the CIDR block you
 *   want for the subnet. Once you create a subnet, you can't change its
 *   CIDR block. The subnet's CIDR block can be the same as the VPC's
 *   CIDR block (assuming you want only a single subnet in the VPC), or a
 *   subset of the VPC's CIDR block. If you create more than one subnet
 *   in a VPC, the subnets' CIDR blocks must not overlap. The smallest
 *   subnet (and VPC) you can create uses a /28 netmask (16 IP
 *   addresses), and the largest uses a /18 netmask (16,384 IP
 *   addresses).
 *   @param [Object] params
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC to
 *       create the subnet in.
 *     * +CidrBlock+ - (*required*, <tt>String</tt>) The CIDR block the
 *       subnet is to cover.
 *     * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone to
 *       create the subnet in.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Subnet+ - (<tt>Object</tt>)
 *       * +SubnetId+ - (<tt>String</tt>) Specifies the ID of the subnet.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         subnet. The state of the subnet may be either pending or
 *         available.
 *       * +VpcId+ - (<tt>String</tt>) Contains the ID of the VPC the
 *         subnet is in.
 *       * +CidrBlock+ - (<tt>String</tt>) Specifies the CIDR block
 *         assigned to the subnet.
 *       * +AvailableIpAddressCount+ - (<tt>Integer</tt>) Specifies the
 *         number of unused IP addresses in the subnet.
 *       * +AvailabilityZone+ - (<tt>String</tt>) Specifies the
 *         Availability Zone the subnet is in.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         Subnet.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method createTags(params, options)
 *   Adds or overwrites tags for the specified resources. Each resource
 *   can have a maximum of 10 tags. Each tag consists of a key-value
 *   pair. Tag keys must be unique per resource.
 *   @param [Object] params
 *     * +resources+ - (*required*, <tt>Array<String></tt>) One or more
 *       IDs of resources to tag. This could be the ID of an AMI, an
 *       instance, an EBS volume, or snapshot, etc.
 *     * +tags+ - (*required*, <tt>Array<Object></tt>) The tags to add or
 *       overwrite for the specified resources. Each tag item consists of
 *       a key-value pair.
 *       * +key+ - (<tt>String</tt>) The tag's key.
 *       * +value+ - (<tt>String</tt>) The tag's value.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method createVolume(params, options)
 *   Initializes an empty volume of a given size.
 *   @param [Object] params
 *     * +Size+ - (<tt>Integer</tt>) The size of the volume, in
 *       gigabytes. Required if you are not creating a volume from a
 *       snapshot.
 *     * +SnapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *       which to create the new volume.
 *     * +AvailabilityZone+ - (*required*, <tt>String</tt>) The
 *       Availability Zone in which to create the new volume.
 *     * +VolumeType+ - (<tt>String</tt>)
 *     * +Iops+ - (<tt>Integer</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Volume+ - (<tt>Object</tt>) The newly created EBS volume.
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
 *         * +Device+ - (<tt>String</tt>) How the device is exposed to
 *           the instance (e.g., /dev/sdh).
 *         * +State+ - (<tt>String</tt>)
 *         * +AttachTime+ - (<tt>Date</tt>) Timestamp when this
 *           attachment initiated.
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         Volume.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +volumeType+ - (<tt>String</tt>)
 *       * +iops+ - (<tt>Integer</tt>)
 *
 * @!method createVpc(params, options)
 *   Creates a VPC with the CIDR block you specify. The smallest VPC you
 *   can create uses a /28 netmask (16 IP addresses), and the largest
 *   uses a /18 netmask (16,384 IP addresses). To help you decide how big
 *   to make your VPC, go to the topic about creating VPCs in the Amazon
 *   Virtual Private Cloud Developer Guide.
 *   @param [Object] params
 *     * +CidrBlock+ - (*required*, <tt>String</tt>) A valid CIDR block.
 *     * +instanceTenancy+ - (<tt>String</tt>) The allowed tenancy of
 *       instances launched into the VPC. A value of default means
 *       instances can be launched with any tenancy; a value of dedicated
 *       means instances must be launched with tenancy as dedicated.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Vpc+ - (<tt>Object</tt>) Information about the VPC.
 *       * +VpcId+ - (<tt>String</tt>) Specifies the ID of the VPC.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         VPC. The state of the subnet may be either pending or
 *         available.
 *       * +CidrBlock+ - (<tt>String</tt>) Specifies the CIDR block the
 *         VPC covers.
 *       * +DhcpOptionsId+ - (<tt>String</tt>) Specifies the ID of the
 *         set of DHCP options associated with the VPC. Contains a value
 *         of default if the default options are associated with the VPC.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the VPC.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +instanceTenancy+ - (<tt>String</tt>) The allowed tenancy of
 *         instances launched into the VPC.
 *
 * @!method createVpnConnection(params, options)
 *   Creates a new VPN connection between an existing VPN gateway and
 *   customer gateway. The only supported connection type is ipsec.1.
 *   @param [Object] params
 *     * +Type+ - (*required*, <tt>String</tt>) The type of VPN
 *       connection.
 *     * +CustomerGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the customer gateway.
 *     * +VpnGatewayId+ - (*required*, <tt>String</tt>) The ID of the VPN
 *       gateway.
 *     * +options+ - (<tt>Object</tt>)
 *       * +staticRoutesOnly+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +VpnConnection+ - (<tt>Object</tt>)
 *       * +VpnConnectionId+ - (<tt>String</tt>) Specifies the ID of the
 *         VPN gateway at the VPC end of the VPN connection.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         VPN connection. Valid values are pending, available, deleting,
 *         and deleted.
 *       * +CustomerGatewayConfiguration+ - (<tt>String</tt>) Contains
 *         configuration information in the native XML format for the VPN
 *         connection's customer gateway.
 *       * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *         connection.
 *       * +CustomerGatewayId+ - (<tt>String</tt>) Specifies ID of the
 *         customer gateway at the end of the VPN connection.
 *       * +VpnGatewayId+ - (<tt>String</tt>) Specfies the ID of the VPN
 *         gateway at the VPC end of the VPN connection.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         VpnConnection.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +vgwTelemetry+ - (<tt>Array<Object></tt>)
 *         * +outsideIpAddress+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +lastStatusChange+ - (<tt>Date</tt>)
 *         * +statusMessage+ - (<tt>String</tt>)
 *         * +acceptedRouteCount+ - (<tt>Integer</tt>)
 *       * +options+ - (<tt>Object</tt>)
 *         * +staticRoutesOnly+ - (<tt>Boolean</tt>)
 *       * +routes+ - (<tt>Array<Object></tt>)
 *         * +destinationCidrBlock+ - (<tt>String</tt>)
 *         * +source+ - (<tt>String</tt>)
 *         * +state+ - (<tt>String</tt>)
 *
 * @!method createVpnConnectionRoute(params, options)
 *   Calls the CreateVpnConnectionRoute API operation.
 *   @param [Object] params
 *     * +VpnConnectionId+ - (*required*, <tt>String</tt>)
 *     * +DestinationCidrBlock+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method createVpnGateway(params, options)
 *   Creates a new VPN gateway. A VPN gateway is the VPC-side endpoint
 *   for your VPN connection. You can create a VPN gateway before
 *   creating the VPC itself.
 *   @param [Object] params
 *     * +Type+ - (*required*, <tt>String</tt>) The type of VPN
 *       connection this VPN gateway supports.
 *     * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone in
 *       which to create the VPN gateway.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +VpnGateway+ - (<tt>Object</tt>)
 *       * +VpnGatewayId+ - (<tt>String</tt>) Specifies the ID of the VPN
 *         gateway.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         VPN gateway. Valid values are pending, available, deleting,
 *         and deleted.
 *       * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *         connection the VPN gateway supports.
 *       * +AvailabilityZone+ - (<tt>String</tt>) Specifies the
 *         Availability Zone where the VPN gateway was created.
 *       * +VpcAttachments+ - (<tt>Array<Object></tt>) Contains
 *         information about the VPCs attached to the VPN gateway.
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         VpnGateway.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method deactivateLicense(params, options)
 *   Deactivates a specific number of licenses. Deactivations can be done
 *   against a specific license ID after they have persisted for at least
 *   a 90-day period.
 *   @param [Object] params
 *     * +licenseId+ - (*required*, <tt>String</tt>) Specifies the ID for
 *       the specific license to deactivate against.
 *     * +capacity+ - (*required*, <tt>Integer</tt>) Specifies the amount
 *       of capacity to deactivate against the license.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteCustomerGateway(params, options)
 *   Deletes a customer gateway. You must delete the VPN connection
 *   before deleting the customer gateway.
 *   @param [Object] params
 *     * +CustomerGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the customer gateway to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteDhcpOptions(params, options)
 *   Deletes a set of DHCP options that you specify. Amazon VPC returns
 *   an error if the set of options you specify is currently associated
 *   with a VPC. You can disassociate the set of options by associating
 *   either a new set of options or the default options with the VPC.
 *   @param [Object] params
 *     * +DhcpOptionsId+ - (*required*, <tt>String</tt>) The ID of the
 *       DHCP options set to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteInternetGateway(params, options)
 *   Deletes an Internet gateway from your AWS account. The gateway must
 *   not be attached to a VPC. For more information about your VPC and
 *   Internet gateway, go to Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +internetGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the Internet gateway to be deleted.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteKeyPair(params, options)
 *   The DeleteKeyPair operation deletes a key pair.
 *   @param [Object] params
 *     * +KeyName+ - (*required*, <tt>String</tt>) The name of the Amazon
 *       EC2 key pair to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteNetworkAcl(params, options)
 *   Deletes a network ACL from a VPC. The ACL must not have any subnets
 *   associated with it. You can't delete the default network ACL. For
 *   more information about network ACLs, go to Network ACLs in the
 *   Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +networkAclId+ - (*required*, <tt>String</tt>) The ID of the
 *       network ACL to be deleted.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteNetworkAclEntry(params, options)
 *   Deletes an ingress or egress entry (i.e., rule) from a network ACL.
 *   For more information about network ACLs, go to Network ACLs in the
 *   Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +networkAclId+ - (*required*, <tt>String</tt>) ID of the network
 *       ACL.
 *     * +ruleNumber+ - (*required*, <tt>Integer</tt>) Rule number for
 *       the entry to delete.
 *     * +egress+ - (*required*, <tt>Boolean</tt>) Whether the rule to
 *       delete is an egress rule (true) or ingress rule (false).
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteNetworkInterface(params, options)
 *   Calls the DeleteNetworkInterface API operation.
 *   @param [Object] params
 *     * +networkInterfaceId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deletePlacementGroup(params, options)
 *   Deletes a PlacementGroup from a user's account. Terminate all Amazon
 *   EC2 instances in the placement group before deletion.
 *   @param [Object] params
 *     * +groupName+ - (*required*, <tt>String</tt>) The name of the
 *       PlacementGroup to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteRoute(params, options)
 *   Deletes a route from a route table in a VPC. For more information
 *   about route tables, go to Route Tables in the Amazon Virtual Private
 *   Cloud User Guide.
 *   @param [Object] params
 *     * +routeTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table where the route will be deleted.
 *     * +destinationCidrBlock+ - (*required*, <tt>String</tt>) The CIDR
 *       range for the route you want to delete. The value you specify
 *       must exactly match the CIDR for the route you want to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteRouteTable(params, options)
 *   Deletes a route table from a VPC. The route table must not be
 *   associated with a subnet. You can't delete the main route table. For
 *   more information about route tables, go to Route Tables in the
 *   Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +routeTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table to be deleted.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteSecurityGroup(params, options)
 *   The DeleteSecurityGroup operation deletes a security group.
 *   @param [Object] params
 *     * +GroupName+ - (<tt>String</tt>) The name of the Amazon EC2
 *       security group to delete.
 *     * +GroupId+ - (<tt>String</tt>) The ID of the Amazon EC2 security
 *       group to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteSnapshot(params, options)
 *   Deletes the snapshot identified by snapshotId.
 *   @param [Object] params
 *     * +SnapshotId+ - (*required*, <tt>String</tt>) The ID of the
 *       snapshot to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteSpotDatafeedSubscription(params, options)
 *   Deletes the data feed for Spot Instances.
 *   @param [Object] params
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteSubnet(params, options)
 *   Deletes a subnet from a VPC. You must terminate all running
 *   instances in the subnet before deleting it, otherwise Amazon VPC
 *   returns an error.
 *   @param [Object] params
 *     * +SubnetId+ - (*required*, <tt>String</tt>) The ID of the subnet
 *       you want to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteTags(params, options)
 *   Deletes tags from the specified Amazon EC2 resources.
 *   @param [Object] params
 *     * +resources+ - (*required*, <tt>Array<String></tt>) A list of one
 *       or more resource IDs. This could be the ID of an AMI, an
 *       instance, an EBS volume, or snapshot, etc.
 *     * +tags+ - (<tt>Array<Object></tt>) The tags to delete from the
 *       specified resources. Each tag item consists of a key-value pair.
 *       * +key+ - (<tt>String</tt>) The tag's key.
 *       * +value+ - (<tt>String</tt>) The tag's value.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteVolume(params, options)
 *   Deletes a previously created volume. Once successfully deleted, a
 *   new volume can be created with the same name.
 *   @param [Object] params
 *     * +VolumeId+ - (*required*, <tt>String</tt>) The ID of the EBS
 *       volume to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteVpc(params, options)
 *   Deletes a VPC. You must detach or delete all gateways or other
 *   objects that are dependent on the VPC first. For example, you must
 *   terminate all running instances, delete all VPC security groups
 *   (except the default), delete all the route tables (except the
 *   default), etc.
 *   @param [Object] params
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC you
 *       want to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteVpnConnection(params, options)
 *   Deletes a VPN connection. Use this if you want to delete a VPC and
 *   all its associated components. Another reason to use this operation
 *   is if you believe the tunnel credentials for your VPN connection
 *   have been compromised. In that situation, you can delete the VPN
 *   connection and create a new one that has new keys, without needing
 *   to delete the VPC or VPN gateway. If you create a new VPN
 *   connection, you must reconfigure the customer gateway using the new
 *   configuration information returned with the new VPN connection ID.
 *   @param [Object] params
 *     * +VpnConnectionId+ - (*required*, <tt>String</tt>) The ID of the
 *       VPN connection to delete
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteVpnConnectionRoute(params, options)
 *   Calls the DeleteVpnConnectionRoute API operation.
 *   @param [Object] params
 *     * +VpnConnectionId+ - (*required*, <tt>String</tt>)
 *     * +DestinationCidrBlock+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deleteVpnGateway(params, options)
 *   Deletes a VPN gateway. Use this when you want to delete a VPC and
 *   all its associated components because you no longer need them. We
 *   recommend that before you delete a VPN gateway, you detach it from
 *   the VPC and delete the VPN connection. Note that you don't need to
 *   delete the VPN gateway if you just want to delete and re-create the
 *   VPN connection between your VPC and data center.
 *   @param [Object] params
 *     * +VpnGatewayId+ - (*required*, <tt>String</tt>) The ID of the VPN
 *       gateway to delete.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deregisterImage(params, options)
 *   The DeregisterImage operation deregisters an AMI. Once deregistered,
 *   instances of the AMI can no longer be launched.
 *   @param [Object] params
 *     * +ImageId+ - (*required*, <tt>String</tt>) The ID of the AMI to
 *       deregister.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method describeAddresses(params, options)
 *   The DescribeAddresses operation lists elastic IP addresses assigned
 *   to your account.
 *   @param [Object] params
 *     * +PublicIps+ - (<tt>Array<String></tt>) The optional list of
 *       Elastic IP addresses to describe.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Addresses. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +allocationIds+ - (<tt>Array<String></tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Addresses+ - (<tt>Array<Object></tt>) The list of Elastic IPs.
 *       * +InstanceId+ - (<tt>String</tt>)
 *       * +PublicIp+ - (<tt>String</tt>)
 *       * +allocationId+ - (<tt>String</tt>)
 *       * +associationId+ - (<tt>String</tt>)
 *       * +domain+ - (<tt>String</tt>)
 *       * +networkInterfaceId+ - (<tt>String</tt>)
 *       * +networkInterfaceOwnerId+ - (<tt>String</tt>)
 *       * +privateIpAddress+ - (<tt>String</tt>)
 *
 * @!method describeAvailabilityZones(params, options)
 *   The DescribeAvailabilityZones operation describes availability zones
 *   that are currently available to the account and their states.
 *   @param [Object] params
 *     * +ZoneNames+ - (<tt>Array<String></tt>) A list of the
 *       availability zone names to describe.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for AvailabilityZones. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +AvailabilityZones+ - (<tt>Array<Object></tt>) The list of
 *       described Amazon EC2 availability zones.
 *       * +zoneName+ - (<tt>String</tt>) Name of the Availability Zone.
 *       * +State+ - (<tt>String</tt>) State of the Availability Zone.
 *       * +regionName+ - (<tt>String</tt>) Name of the region in which
 *         this zone resides.
 *       * +messages+ - (<tt>Array<Object></tt>) A list of messages about
 *         the Availability Zone.
 *         * +message+ - (<tt>String</tt>)
 *
 * @!method describeBundleTasks(params, options)
 *   The DescribeBundleTasks operation describes in-progress and recent
 *   bundle tasks. Complete and failed tasks are removed from the list a
 *   short time after completion. If no bundle ids are given, all bundle
 *   tasks are returned.
 *   @param [Object] params
 *     * +BundleIds+ - (<tt>Array<String></tt>) The list of bundle task
 *       IDs to describe.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for BundleTasks. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +BundleTasks+ - (<tt>Array<Object></tt>) The list of described
 *       bundle tasks.
 *       * +InstanceId+ - (<tt>String</tt>) Instance associated with this
 *         bundle task.
 *       * +BundleId+ - (<tt>String</tt>) Unique identifier for this
 *         task.
 *       * +State+ - (<tt>String</tt>) The state of this task.
 *       * +StartTime+ - (<tt>Date</tt>) The time this task started.
 *       * +UpdateTime+ - (<tt>Date</tt>) The time of the most recent
 *         update for the task.
 *       * +Storage+ - (<tt>Object</tt>) Amazon S3 storage locations.
 *         * +S3+ - (<tt>Object</tt>) The details of S3 storage for
 *           bundling a Windows instance.
 *           * +Bucket+ - (<tt>String</tt>) The bucket in which to store
 *             the AMI. You can specify a bucket that you already own or
 *             a new bucket that Amazon EC2 creates on your behalf.
 *           * +Prefix+ - (<tt>String</tt>) The prefix to use when
 *             storing the AMI in S3.
 *           * +AWSAccessKeyId+ - (<tt>String</tt>) The Access Key ID of
 *             the owner of the Amazon S3 bucket.
 *           * +UploadPolicy+ - (<tt>String</tt>) A Base64-encoded Amazon
 *             S3 upload policy that gives Amazon EC2 permission to
 *             upload items into Amazon S3 on the user's behalf.
 *           * +UploadPolicySignature+ - (<tt>String</tt>) The signature
 *             of the Base64 encoded JSON document.
 *       * +Progress+ - (<tt>String</tt>) The level of task completion,
 *         in percent (e.g., 20%).
 *       * +BundleTaskError+ - (<tt>Object</tt>) If the task fails, a
 *         description of the error.
 *         * +Code+ - (<tt>String</tt>) Error code.
 *         * +Message+ - (<tt>String</tt>) Error message.
 *
 * @!method describeConversionTasks(params, options)
 *   Calls the DescribeConversionTasks API operation.
 *   @param [Object] params
 *     * +filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +conversionTaskIds+ - (<tt>Array<String></tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +conversionTasks+ - (<tt>Array<Object></tt>)
 *       * +conversionTaskId+ - (<tt>String</tt>)
 *       * +expirationTime+ - (<tt>String</tt>)
 *       * +importInstance+ - (<tt>Object</tt>)
 *         * +volumes+ - (<tt>Array<Object></tt>)
 *           * +bytesConverted+ - (<tt>Integer</tt>)
 *           * +availabilityZone+ - (<tt>String</tt>)
 *           * +image+ - (<tt>Object</tt>)
 *             * +format+ - (<tt>String</tt>)
 *             * +size+ - (<tt>Integer</tt>)
 *             * +importManifestUrl+ - (<tt>String</tt>)
 *             * +checksum+ - (<tt>String</tt>)
 *           * +volume+ - (<tt>Object</tt>)
 *             * +size+ - (<tt>Integer</tt>)
 *             * +id+ - (<tt>String</tt>)
 *           * +status+ - (<tt>String</tt>)
 *           * +statusMessage+ - (<tt>String</tt>)
 *           * +description+ - (<tt>String</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +platform+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *       * +importVolume+ - (<tt>Object</tt>)
 *         * +bytesConverted+ - (<tt>Integer</tt>)
 *         * +availabilityZone+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +image+ - (<tt>Object</tt>)
 *           * +format+ - (<tt>String</tt>)
 *           * +size+ - (<tt>Integer</tt>)
 *           * +importManifestUrl+ - (<tt>String</tt>)
 *           * +checksum+ - (<tt>String</tt>)
 *         * +volume+ - (<tt>Object</tt>)
 *           * +size+ - (<tt>Integer</tt>)
 *           * +id+ - (<tt>String</tt>)
 *       * +state+ - (<tt>String</tt>)
 *       * +statusMessage+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeCustomerGateways(params, options)
 *   Gives you information about your customer gateways. You can filter
 *   the results to return information only about customer gateways that
 *   match criteria you specify. For example, you could ask to get
 *   information about a particular customer gateway (or all) only if the
 *   gateway's state is pending or available. You can specify multiple
 *   filters (e.g., the customer gateway has a particular IP address for
 *   the Internet-routable external interface, and the gateway's state is
 *   pending or available). The result includes information for a
 *   particular customer gateway only if the gateway matches all your
 *   filters. If there's no match, no special message is returned; the
 *   response is simply empty. The following table shows the available
 *   filters.
 *   @param [Object] params
 *     * +CustomerGatewayIds+ - (<tt>Array<String></tt>) A set of one or
 *       more customer gateway IDs.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Customer Gateways. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +CustomerGateways+ - (<tt>Array<Object></tt>)
 *       * +CustomerGatewayId+ - (<tt>String</tt>) Specifies the ID of
 *         the customer gateway.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         customer gateway. Valid values are pending, available,
 *         deleting, and deleted.
 *       * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *         connection the customer gateway supports.
 *       * +IpAddress+ - (<tt>String</tt>) Contains the Internet-routable
 *         IP address of the customer gateway's outside interface.
 *       * +BgpAsn+ - (<tt>String</tt>) Specifies the customer gateway's
 *         Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         CustomerGateway.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeDhcpOptions(params, options)
 *   Gives you information about one or more sets of DHCP options. You
 *   can specify one or more DHCP options set IDs, or no IDs (to describe
 *   all your sets of DHCP options). The returned information consists
 *   of:
 *   @param [Object] params
 *     * +DhcpOptionsIds+ - (<tt>Array<String></tt>)
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for DhcpOptions. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +DhcpOptions+ - (<tt>Array<Object></tt>)
 *       * +DhcpOptionsId+ - (<tt>String</tt>) Specifies the ID of the
 *         set of DHCP options.
 *       * +DhcpConfigurations+ - (<tt>Array<Object></tt>) Contains
 *         information about the set of DHCP options.
 *         * +Key+ - (<tt>String</tt>) Contains the name of a DHCP
 *           option.
 *         * +Values+ - (<tt>Array<String></tt>) Contains a set of values
 *           for a DHCP option.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         DhcpOptions.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeExportTasks(params, options)
 *   Calls the DescribeExportTasks API operation.
 *   @param [Object] params
 *     * +exportTaskIds+ - (<tt>Array<String></tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +exportTasks+ - (<tt>Array<Object></tt>)
 *       * +exportTaskId+ - (<tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +state+ - (<tt>String</tt>)
 *       * +statusMessage+ - (<tt>String</tt>)
 *       * +instanceExportDetails+ - (<tt>Object</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +targetEnvironment+ - (<tt>String</tt>)
 *       * +exportToS3Task+ - (<tt>Object</tt>)
 *         * +diskImageFormat+ - (<tt>String</tt>)
 *         * +containerFormat+ - (<tt>String</tt>)
 *         * +s3Bucket+ - (<tt>String</tt>)
 *         * +s3Key+ - (<tt>String</tt>)
 *
 * @!method describeImageAttribute(params, options)
 *   The DescribeImageAttribute operation returns information about an
 *   attribute of an AMI. Only one attribute can be specified per call.
 *   @param [Object] params
 *     * +ImageId+ - (*required*, <tt>String</tt>) The ID of the AMI
 *       whose attribute is to be described.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute to describe.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +ImageAttribute+ - (<tt>Object</tt>) The described image
 *       attribute of the associated AMI.
 *       * +ImageId+ - (<tt>String</tt>) The ID of the associated AMI.
 *       * +LaunchPermissions+ - (<tt>Array<Object></tt>) Launch
 *         permissions for the associated AMI.
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of the user
 *           involved in this launch permission.
 *         * +Group+ - (<tt>String</tt>) The AWS group of the user
 *           involved in this launch permission.
 *       * +ProductCodes+ - (<tt>Array<Object></tt>) Product codes for
 *         the associated AMI.
 *         * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *           DevPay product code.
 *         * +ProductCodeType+ - (<tt>String</tt>)
 *       * +kernelId+ - (<tt>Object</tt>) Kernel ID of the associated
 *         AMI.
 *         * +value+ - (<tt>String</tt>)
 *       * +ramdiskId+ - (<tt>Object</tt>) Ramdisk ID of the associated
 *         AMI.
 *         * +value+ - (<tt>String</tt>)
 *       * +description+ - (<tt>Object</tt>) User-created description of
 *         the associated AMI.
 *         * +value+ - (<tt>String</tt>)
 *       * +BlockDeviceMappings+ - (<tt>Array<Object></tt>) Block device
 *         mappings for the associated AMI.
 *         * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *           device name.
 *         * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *             from which the volume will be created.
 *           * +volumeSize+ - (<tt>Integer</tt>) The size of the volume,
 *             in gigabytes.
 *           * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *           * +volumeType+ - (<tt>String</tt>)
 *           * +iops+ - (<tt>Integer</tt>)
 *         * +noDevice+ - (<tt>String</tt>) Specifies the device name to
 *           suppress during instance launch.
 *
 * @!method describeImages(params, options)
 *   The DescribeImages operation returns information about AMIs, AKIs,
 *   and ARIs available to the user. Information returned includes image
 *   type, product codes, architecture, and kernel and RAM disk IDs.
 *   Images available to the user include public images available for any
 *   user to launch, private images owned by the user making the request,
 *   and private images owned by other users for which the user has
 *   explicit launch permissions.
 *   @param [Object] params
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
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Images. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Images+ - (<tt>Array<Object></tt>) The list of the described
 *       AMIs.
 *       * +ImageId+ - (<tt>String</tt>) The unique ID of the AMI.
 *       * +ImageLocation+ - (<tt>String</tt>) The location of the AMI.
 *       * +State+ - (<tt>String</tt>) Current state of the AMI. If the
 *         operation returns available, the image is successfully
 *         registered and available for launching. If the operation
 *         returns deregistered, the image is deregistered and no longer
 *         available for launching.
 *       * +OwnerId+ - (<tt>String</tt>) AWS Access Key ID of the image
 *         owner.
 *       * +Public+ - (<tt>Boolean</tt>) True if this image has public
 *         launch permissions. False if it only has implicit and explicit
 *         launch permissions.
 *       * +ProductCodes+ - (<tt>Array<Object></tt>) Product codes of the
 *         AMI.
 *         * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *           DevPay product code.
 *         * +ProductCodeType+ - (<tt>String</tt>)
 *       * +Architecture+ - (<tt>String</tt>) The architecture of the
 *         image.
 *       * +ImageType+ - (<tt>String</tt>) The type of image (machine,
 *         kernel, or ramdisk).
 *       * +KernelId+ - (<tt>String</tt>) The kernel associated with the
 *         image, if any. Only applicable for machine images.
 *       * +RamdiskId+ - (<tt>String</tt>) The RAM disk associated with
 *         the image, if any. Only applicable for machine images.
 *       * +Platform+ - (<tt>String</tt>) The operating platform of the
 *         AMI.
 *       * +stateReason+ - (<tt>Object</tt>) The reason for the state
 *         change.
 *         * +code+ - (<tt>String</tt>) Reason code for the state change.
 *         * +message+ - (<tt>String</tt>) Descriptive message for the
 *           state change.
 *       * +imageOwnerAlias+ - (<tt>String</tt>) The AWS account alias
 *         (e.g., "amazon", "redhat", "self", etc.) or AWS account ID
 *         that owns the AMI.
 *       * +name+ - (<tt>String</tt>) The name of the AMI that was
 *         provided during image creation.
 *       * +description+ - (<tt>String</tt>) The description of the AMI
 *         that was provided during image creation.
 *       * +rootDeviceType+ - (<tt>String</tt>) The root device type used
 *         by the AMI. The AMI can use an Amazon EBS or instance store
 *         root device.
 *       * +rootDeviceName+ - (<tt>String</tt>) The root device name
 *         (e.g., /dev/sda1).
 *       * +blockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies how
 *         block devices are exposed to the instance.
 *         * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *           device name.
 *         * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *             from which the volume will be created.
 *           * +volumeSize+ - (<tt>Integer</tt>) The size of the volume,
 *             in gigabytes.
 *           * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *           * +volumeType+ - (<tt>String</tt>)
 *           * +iops+ - (<tt>Integer</tt>)
 *         * +noDevice+ - (<tt>String</tt>) Specifies the device name to
 *           suppress during instance launch.
 *       * +virtualizationType+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         Image.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +hypervisor+ - (<tt>String</tt>)
 *
 * @!method describeInstanceAttribute(params, options)
 *   Returns information about an attribute of an instance. Only one
 *   attribute can be specified per call.
 *   @param [Object] params
 *     * +instanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance whose instance attribute is being described.
 *     * +attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute to describe.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +InstanceAttribute+ - (<tt>Object</tt>) The described instance
 *       attribute.
 *       * +instanceId+ - (<tt>String</tt>) The ID of the associated
 *         instance.
 *       * +instanceType+ - (<tt>Object</tt>) The instance type (e.g.,
 *         m1.small, c1.medium, m2.2xlarge, and so on).
 *         * +value+ - (<tt>String</tt>)
 *       * +kernelId+ - (<tt>Object</tt>) The kernel ID of the associated
 *         instance.
 *         * +value+ - (<tt>String</tt>)
 *       * +ramdiskId+ - (<tt>Object</tt>) The ramdisk ID of the
 *         associated instance.
 *         * +value+ - (<tt>String</tt>)
 *       * +userData+ - (<tt>Object</tt>) MIME, Base64-encoded user data.
 *         * +value+ - (<tt>String</tt>)
 *       * +disableApiTermination+ - (<tt>Object</tt>) Whether this
 *         instance can be terminated. You must modify this attribute
 *         before you can terminate any "locked" instances.
 *         * +value+ - (<tt>Boolean</tt>)
 *       * +instanceInitiatedShutdownBehavior+ - (<tt>Object</tt>)
 *         Whether this instance's Amazon EBS volumes are deleted when
 *         the instance is shut down.
 *         * +value+ - (<tt>String</tt>)
 *       * +rootDeviceName+ - (<tt>Object</tt>) The root device name
 *         (e.g., /dev/sda1).
 *         * +value+ - (<tt>String</tt>)
 *       * +blockDeviceMappings+ - (<tt>Array<Object></tt>) How block
 *         devices are exposed to this instance. Each mapping is made up
 *         of a virtualName and a deviceName.
 *         * +deviceName+ - (<tt>String</tt>) The device name (e.g.,
 *           /dev/sdh) at which the block device is exposed on the
 *           instance.
 *         * +ebs+ - (<tt>Object</tt>) The optional EBS device mapped to
 *           the specified device name.
 *           * +volumeId+ - (<tt>String</tt>) The ID of the EBS volume.
 *           * +status+ - (<tt>String</tt>) The status of the EBS volume.
 *           * +attachTime+ - (<tt>Date</tt>) The time at which the EBS
 *             volume was attached to the associated instance.
 *           * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *       * +productCodes+ - (<tt>Array<Object></tt>)
 *         * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *           DevPay product code.
 *         * +ProductCodeType+ - (<tt>String</tt>)
 *       * +ebsOptimized+ - (<tt>Object</tt>)
 *         * +value+ - (<tt>Boolean</tt>)
 *
 * @!method describeInstanceStatus(params, options)
 *   Describes the status of an Amazon Elastic Compute Cloud (Amazon EC2)
 *   instance. Instance status provides information about two types of
 *   scheduled events for an instance that may require your attention:
 *   @param [Object] params
 *     * +InstanceIds+ - (<tt>Array<String></tt>)
 *     * +filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +NextToken+ - (<tt>String</tt>)
 *     * +MaxResults+ - (<tt>Integer</tt>)
 *     * +includeAllInstances+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +instanceStatuses+ - (<tt>Array<Object></tt>)
 *       * +instanceId+ - (<tt>String</tt>)
 *       * +availabilityZone+ - (<tt>String</tt>)
 *       * +events+ - (<tt>Array<Object></tt>)
 *         * +code+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +notBefore+ - (<tt>Date</tt>)
 *         * +notAfter+ - (<tt>Date</tt>)
 *       * +instanceState+ - (<tt>Object</tt>)
 *         * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *           high byte is an opaque internal value and should be ignored.
 *           The low byte is set based on the state represented.
 *         * +Name+ - (<tt>String</tt>) The current state of the
 *           instance.
 *       * +systemStatus+ - (<tt>Object</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +details+ - (<tt>Array<Object></tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +status+ - (<tt>String</tt>)
 *           * +impairedSince+ - (<tt>Date</tt>)
 *       * +instanceStatus+ - (<tt>Object</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +details+ - (<tt>Array<Object></tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +status+ - (<tt>String</tt>)
 *           * +impairedSince+ - (<tt>Date</tt>)
 *     * +nextToken+ - (<tt>String</tt>)
 *
 * @!method describeInstances(params, options)
 *   The DescribeInstances operation returns information about instances
 *   that you own.
 *   @param [Object] params
 *     * +InstanceIds+ - (<tt>Array<String></tt>) An optional list of the
 *       instances to describe.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Instances. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Reservations+ - (<tt>Array<Object></tt>) The list of
 *       reservations containing the describes instances.
 *       * +ReservationId+ - (<tt>String</tt>) The unique ID of this
 *         reservation.
 *       * +OwnerId+ - (<tt>String</tt>) The AWS Access Key ID of the
 *         user who owns the reservation.
 *       * +RequesterId+ - (<tt>String</tt>) The unique ID of the user
 *         who requested the instances in this reservation.
 *       * +Groups+ - (<tt>Array<Object></tt>) The list of security
 *         groups requested for the instances in this reservation.
 *         * +GroupName+ - (<tt>String</tt>)
 *         * +groupId+ - (<tt>String</tt>)
 *       * +Instances+ - (<tt>Array<Object></tt>) The list of Amazon EC2
 *         instances included in this reservation.
 *         * +InstanceId+ - (<tt>String</tt>) Unique ID of the instance
 *           launched.
 *         * +ImageId+ - (<tt>String</tt>) Image ID of the AMI used to
 *           launch the instance.
 *         * +State+ - (<tt>Object</tt>) The current state of the
 *           instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be
 *             ignored. The low byte is set based on the state
 *             represented.
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
 *           with an associated key pair, this displays the key pair
 *           name.
 *         * +AmiLaunchIndex+ - (<tt>Integer</tt>) The AMI launch index,
 *           which can be used to find this instance within the launch
 *           group.
 *         * +ProductCodes+ - (<tt>Array<Object></tt>) Product codes
 *           attached to this instance.
 *           * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an
 *             AWS DevPay product code.
 *           * +ProductCodeType+ - (<tt>String</tt>)
 *         * +InstanceType+ - (<tt>String</tt>) The instance type. For
 *           more information on instance types, please see the Amazon
 *           Elastic Compute Cloud Developer Guide.
 *         * +LaunchTime+ - (<tt>Date</tt>) The time this instance
 *           launched.
 *         * +Placement+ - (<tt>Object</tt>) The location where this
 *           instance launched.
 *           * +AvailabilityZone+ - (<tt>String</tt>) The availability
 *             zone in which an Amazon EC2 instance runs.
 *           * +groupName+ - (<tt>String</tt>) The name of the
 *             PlacementGroup in which an Amazon EC2 instance runs.
 *             Placement groups are primarily used for launching High
 *             Performance Computing instances in the same group to
 *             ensure fast connection speeds.
 *           * +tenancy+ - (<tt>String</tt>) The allowed tenancy of
 *             instances launched into the VPC. A value of default means
 *             instances can be launched with any tenancy; a value of
 *             dedicated means all instances launched into the VPC will
 *             be launched as dedicated tenancy regardless of the tenancy
 *             assigned to the instance at launch.
 *         * +KernelId+ - (<tt>String</tt>) Kernel associated with this
 *           instance.
 *         * +RamdiskId+ - (<tt>String</tt>) RAM disk associated with
 *           this instance.
 *         * +Platform+ - (<tt>String</tt>) Platform of the instance
 *           (e.g., Windows).
 *         * +Monitoring+ - (<tt>Object</tt>) Monitoring status for this
 *           instance.
 *           * +State+ - (<tt>String</tt>) The state of monitoring on an
 *             Amazon EC2 instance (ex: enabled, disabled).
 *         * +SubnetId+ - (<tt>String</tt>) Specifies the Amazon VPC
 *           subnet ID in which the instance is running.
 *         * +VpcId+ - (<tt>String</tt>) Specifies the Amazon VPC in
 *           which the instance is running.
 *         * +PrivateIpAddress+ - (<tt>String</tt>) Specifies the private
 *           IP address that is assigned to the instance (Amazon VPC).
 *         * +PublicIpAddress+ - (<tt>String</tt>) Specifies the IP
 *           address of the instance.
 *         * +stateReason+ - (<tt>Object</tt>) The reason for the state
 *           change.
 *           * +code+ - (<tt>String</tt>) Reason code for the state
 *             change.
 *           * +message+ - (<tt>String</tt>) Descriptive message for the
 *             state change.
 *         * +architecture+ - (<tt>String</tt>) The architecture of this
 *           instance.
 *         * +rootDeviceType+ - (<tt>String</tt>) The root device type
 *           used by the AMI. The AMI can use an Amazon EBS or instance
 *           store root device.
 *         * +rootDeviceName+ - (<tt>String</tt>) The root device name
 *           (e.g., /dev/sda1).
 *         * +blockDeviceMappings+ - (<tt>Array<Object></tt>) Block
 *           device mapping set.
 *           * +deviceName+ - (<tt>String</tt>) The device name (e.g.,
 *             /dev/sdh) at which the block device is exposed on the
 *             instance.
 *           * +ebs+ - (<tt>Object</tt>) The optional EBS device mapped
 *             to the specified device name.
 *             * +volumeId+ - (<tt>String</tt>) The ID of the EBS volume.
 *             * +status+ - (<tt>String</tt>) The status of the EBS
 *               volume.
 *             * +attachTime+ - (<tt>Date</tt>) The time at which the EBS
 *               volume was attached to the associated instance.
 *             * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *               whether the Amazon EBS volume is deleted on instance
 *               termination.
 *         * +virtualizationType+ - (<tt>String</tt>)
 *         * +instanceLifecycle+ - (<tt>String</tt>)
 *         * +spotInstanceRequestId+ - (<tt>String</tt>)
 *         * +license+ - (<tt>Object</tt>)
 *           * +pool+ - (<tt>String</tt>) The license pool from which
 *             this license was used (ex: 'windows').
 *         * +clientToken+ - (<tt>String</tt>)
 *         * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           Instance.
 *           * +key+ - (<tt>String</tt>) The tag's key.
 *           * +value+ - (<tt>String</tt>) The tag's value.
 *         * +securityGroups+ - (<tt>Array<Object></tt>)
 *           * +GroupName+ - (<tt>String</tt>)
 *           * +groupId+ - (<tt>String</tt>)
 *         * +sourceDestCheck+ - (<tt>Boolean</tt>)
 *         * +hypervisor+ - (<tt>String</tt>)
 *         * +networkInterfaces+ - (<tt>Array<Object></tt>)
 *           * +networkInterfaceId+ - (<tt>String</tt>)
 *           * +subnetId+ - (<tt>String</tt>)
 *           * +vpcId+ - (<tt>String</tt>)
 *           * +description+ - (<tt>String</tt>)
 *           * +ownerId+ - (<tt>String</tt>)
 *           * +status+ - (<tt>String</tt>)
 *           * +privateIpAddress+ - (<tt>String</tt>)
 *           * +privateDnsName+ - (<tt>String</tt>)
 *           * +sourceDestCheck+ - (<tt>Boolean</tt>)
 *           * +groups+ - (<tt>Array<Object></tt>)
 *             * +GroupName+ - (<tt>String</tt>)
 *             * +groupId+ - (<tt>String</tt>)
 *           * +attachment+ - (<tt>Object</tt>)
 *             * +attachmentId+ - (<tt>String</tt>)
 *             * +deviceIndex+ - (<tt>Integer</tt>)
 *             * +status+ - (<tt>String</tt>)
 *             * +attachTime+ - (<tt>Date</tt>)
 *             * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *           * +association+ - (<tt>Object</tt>)
 *             * +publicIp+ - (<tt>String</tt>)
 *             * +ipOwnerId+ - (<tt>String</tt>)
 *         * +iamInstanceProfile+ - (<tt>Object</tt>)
 *           * +arn+ - (<tt>String</tt>)
 *           * +id+ - (<tt>String</tt>)
 *         * +ebsOptimized+ - (<tt>Boolean</tt>)
 *
 * @!method describeInternetGateways(params, options)
 *   Gives you information about your Internet gateways. You can filter
 *   the results to return information only about Internet gateways that
 *   match criteria you specify. For example, you could get information
 *   only about gateways with particular tags. The Internet gateway must
 *   match at least one of the specified values for it to be included in
 *   the results.
 *   @param [Object] params
 *     * +internetGatewayIds+ - (<tt>Array<String></tt>) One or more
 *       Internet gateway IDs.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Internet Gateways. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +internetGateways+ - (<tt>Array<Object></tt>)
 *       * +internetGatewayId+ - (<tt>String</tt>)
 *       * +attachments+ - (<tt>Array<Object></tt>)
 *         * +vpcId+ - (<tt>String</tt>)
 *         * +state+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeKeyPairs(params, options)
 *   The DescribeKeyPairs operation returns information about key pairs
 *   available to you. If you specify key pairs, information about those
 *   key pairs is returned. Otherwise, information for all registered key
 *   pairs is returned.
 *   @param [Object] params
 *     * +KeyNames+ - (<tt>Array<String></tt>) The optional list of key
 *       pair names to describe.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for KeyPairs. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +KeyPairs+ - (<tt>Array<Object></tt>) The list of described key
 *       pairs.
 *       * +KeyName+ - (<tt>String</tt>) The name of the key pair.
 *       * +KeyFingerprint+ - (<tt>String</tt>) The SHA-1 digest of the
 *         DER encoded private key.
 *
 * @!method describeLicenses(params, options)
 *   Provides details of a user's registered licenses. Zero or more IDs
 *   may be specified on the call. When one or more license IDs are
 *   specified, only data for the specified IDs are returned.
 *   @param [Object] params
 *     * +licenseIds+ - (<tt>Array<String></tt>) Specifies the license
 *       registration for which details are to be returned.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Licenses. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +licenses+ - (<tt>Array<Object></tt>) Specifies active licenses
 *       in use and attached to an Amazon EC2 instance.
 *       * +licenseId+ - (<tt>String</tt>) The unique ID identifying the
 *         license.
 *       * +type+ - (<tt>String</tt>) The license type (ex.
 *         "Microsoft/Windows/Standard").
 *       * +pool+ - (<tt>String</tt>) The name of the pool in which the
 *         license is kept.
 *       * +capacities+ - (<tt>Array<Object></tt>) The capacities
 *         available for this license, indicating how many licenses are
 *         in use, how many are available, how many Amazon EC2 instances
 *         can be supported, etc.
 *         * +capacity+ - (<tt>Integer</tt>) The number of licenses
 *           available.
 *         * +instanceCapacity+ - (<tt>Integer</tt>) The number of Amazon
 *           EC2 instances that can be supported with the license's
 *           capacity.
 *         * +state+ - (<tt>String</tt>) The state of this license
 *           capacity, indicating whether the license is actively being
 *           used or not.
 *         * +earliestAllowedDeactivationTime+ - (<tt>Date</tt>) The
 *           earliest allowed time at which a license can be deactivated.
 *           Some licenses have time restrictions on when they can be
 *           activated and reactivated.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         License.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeNetworkAcls(params, options)
 *   Gives you information about the network ACLs in your VPC. You can
 *   filter the results to return information only about ACLs that match
 *   criteria you specify. For example, you could get information only
 *   the ACL associated with a particular subnet. The ACL must match at
 *   least one of the specified values for it to be included in the
 *   results.
 *   @param [Object] params
 *     * +networkAclIds+ - (<tt>Array<String></tt>) One or more network
 *       ACL IDs.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Network ACLs. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +networkAcls+ - (<tt>Array<Object></tt>)
 *       * +networkAclId+ - (<tt>String</tt>)
 *       * +vpcId+ - (<tt>String</tt>)
 *       * +isDefault+ - (<tt>Boolean</tt>)
 *       * +entries+ - (<tt>Array<Object></tt>)
 *         * +ruleNumber+ - (<tt>Integer</tt>)
 *         * +protocol+ - (<tt>String</tt>)
 *         * +ruleAction+ - (<tt>String</tt>)
 *         * +egress+ - (<tt>Boolean</tt>)
 *         * +cidrBlock+ - (<tt>String</tt>)
 *         * +icmpTypeCode+ - (<tt>Object</tt>)
 *           * +type+ - (<tt>Integer</tt>) For the ICMP protocol, the
 *             ICMP type. A value of -1 is a wildcard meaning all types.
 *             Required if specifying icmp for the protocol.
 *           * +code+ - (<tt>Integer</tt>) For the ICMP protocol, the
 *             ICMP code. A value of -1 is a wildcard meaning all codes.
 *             Required if specifying icmp for the protocol.
 *         * +portRange+ - (<tt>Object</tt>)
 *           * +from+ - (<tt>Integer</tt>) The first port in the range.
 *             Required if specifying tcp or udp for the protocol.
 *           * +to+ - (<tt>Integer</tt>) The last port in the range.
 *             Required if specifying tcp or udp for the protocol.
 *       * +associations+ - (<tt>Array<Object></tt>)
 *         * +networkAclAssociationId+ - (<tt>String</tt>)
 *         * +networkAclId+ - (<tt>String</tt>)
 *         * +subnetId+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeNetworkInterfaceAttribute(params, options)
 *   Calls the DescribeNetworkInterfaceAttribute API operation.
 *   @param [Object] params
 *     * +networkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +description+ - (<tt>String</tt>)
 *     * +sourceDestCheck+ - (<tt>String</tt>)
 *     * +groups+ - (<tt>String</tt>)
 *     * +attachment+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +networkInterfaceId+ - (<tt>String</tt>)
 *     * +description+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>String</tt>)
 *     * +sourceDestCheck+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>Boolean</tt>)
 *     * +groups+ - (<tt>Array<Object></tt>)
 *       * +GroupName+ - (<tt>String</tt>)
 *       * +groupId+ - (<tt>String</tt>)
 *     * +attachment+ - (<tt>Object</tt>)
 *       * +attachmentId+ - (<tt>String</tt>)
 *       * +instanceId+ - (<tt>String</tt>)
 *       * +instanceOwnerId+ - (<tt>String</tt>)
 *       * +deviceIndex+ - (<tt>Integer</tt>)
 *       * +status+ - (<tt>String</tt>)
 *       * +attachTime+ - (<tt>Date</tt>)
 *       * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *
 * @!method describeNetworkInterfaces(params, options)
 *   Calls the DescribeNetworkInterfaces API operation.
 *   @param [Object] params
 *     * +networkInterfaceIds+ - (<tt>Array<String></tt>)
 *     * +filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +networkInterfaces+ - (<tt>Array<Object></tt>)
 *       * +networkInterfaceId+ - (<tt>String</tt>)
 *       * +subnetId+ - (<tt>String</tt>)
 *       * +vpcId+ - (<tt>String</tt>)
 *       * +availabilityZone+ - (<tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +ownerId+ - (<tt>String</tt>)
 *       * +requesterId+ - (<tt>String</tt>)
 *       * +requesterManaged+ - (<tt>Boolean</tt>)
 *       * +status+ - (<tt>String</tt>)
 *       * +macAddress+ - (<tt>String</tt>)
 *       * +privateIpAddress+ - (<tt>String</tt>)
 *       * +privateDnsName+ - (<tt>String</tt>)
 *       * +sourceDestCheck+ - (<tt>Boolean</tt>)
 *       * +groups+ - (<tt>Array<Object></tt>)
 *         * +GroupName+ - (<tt>String</tt>)
 *         * +groupId+ - (<tt>String</tt>)
 *       * +attachment+ - (<tt>Object</tt>)
 *         * +attachmentId+ - (<tt>String</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +instanceOwnerId+ - (<tt>String</tt>)
 *         * +deviceIndex+ - (<tt>Integer</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +attachTime+ - (<tt>Date</tt>)
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *       * +association+ - (<tt>Object</tt>)
 *         * +publicIp+ - (<tt>String</tt>)
 *         * +ipOwnerId+ - (<tt>String</tt>)
 *         * +allocationId+ - (<tt>String</tt>)
 *         * +associationId+ - (<tt>String</tt>)
 *       * +tagSet+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +privateIpAddresses+ - (<tt>Array<Object></tt>)
 *         * +privateIpAddress+ - (<tt>String</tt>)
 *         * +primary+ - (<tt>Boolean</tt>)
 *         * +association+ - (<tt>Object</tt>)
 *           * +publicIp+ - (<tt>String</tt>)
 *           * +ipOwnerId+ - (<tt>String</tt>)
 *           * +allocationId+ - (<tt>String</tt>)
 *           * +associationId+ - (<tt>String</tt>)
 *
 * @!method describePlacementGroups(params, options)
 *   Returns information about one or more PlacementGroup instances in a
 *   user's account.
 *   @param [Object] params
 *     * +groupNames+ - (<tt>Array<String></tt>) The name of the
 *       PlacementGroup.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Placement Groups. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +placementGroups+ - (<tt>Array<Object></tt>) Contains
 *       information about the specified PlacementGroups.
 *       * +groupName+ - (<tt>String</tt>) The name of this
 *         PlacementGroup.
 *       * +strategy+ - (<tt>String</tt>) The strategy to use when
 *         allocating Amazon EC2 instances for the PlacementGroup.
 *       * +state+ - (<tt>String</tt>) The state of this PlacementGroup.
 *
 * @!method describeRegions(params, options)
 *   The DescribeRegions operation describes regions zones that are
 *   currently available to the account.
 *   @param [Object] params
 *     * +RegionNames+ - (<tt>Array<String></tt>) The optional list of
 *       regions to describe.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Regions. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Regions+ - (<tt>Array<Object></tt>) The list of described
 *       Amazon EC2 regions.
 *       * +RegionName+ - (<tt>String</tt>) Name of the region.
 *       * +Endpoint+ - (<tt>String</tt>) Region service endpoint.
 *
 * @!method describeReservedInstances(params, options)
 *   The DescribeReservedInstances operation describes Reserved Instances
 *   that were purchased for use with your account.
 *   @param [Object] params
 *     * +ReservedInstancesIds+ - (<tt>Array<String></tt>) The optional
 *       list of Reserved Instance IDs to describe.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for ReservedInstances. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +offeringType+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +ReservedInstances+ - (<tt>Array<Object></tt>) The list of
 *       described Reserved Instances.
 *       * +ReservedInstancesId+ - (<tt>String</tt>) The unique ID of the
 *         Reserved Instances purchase.
 *       * +InstanceType+ - (<tt>String</tt>) The instance type on which
 *         the Reserved Instances can be used.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone
 *         in which the Reserved Instances can be used.
 *       * +Start+ - (<tt>Date</tt>) The date and time the Reserved
 *         Instances started.
 *       * +Duration+ - (<tt>Integer</tt>) The duration of the Reserved
 *         Instances, in seconds.
 *       * +UsagePrice+ - (<tt>Float</tt>) The usage price of the
 *         Reserved Instances, per hour.
 *       * +FixedPrice+ - (<tt>Float</tt>) The purchase price of the
 *         Reserved Instances.
 *       * +InstanceCount+ - (<tt>Integer</tt>) The number of Reserved
 *         Instances purchased.
 *       * +ProductDescription+ - (<tt>String</tt>) The Reserved
 *         Instances product description (ex: Windows or Unix/Linux).
 *       * +State+ - (<tt>String</tt>) The state of the Reserved
 *         Instances purchase.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         ReservedInstances.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +instanceTenancy+ - (<tt>String</tt>) The tenancy of the
 *         reserved instance (ex: default or dedicated).
 *       * +currencyCode+ - (<tt>String</tt>) The currency of the
 *         reserved instance. Specified using ISO 4217 standard (e.g.,
 *         USD, JPY).
 *       * +offeringType+ - (<tt>String</tt>)
 *       * +recurringCharges+ - (<tt>Array<Object></tt>)
 *         * +frequency+ - (<tt>String</tt>)
 *         * +amount+ - (<tt>Float</tt>)
 *
 * @!method describeReservedInstancesListings(params, options)
 *   Calls the DescribeReservedInstancesListings API operation.
 *   @param [Object] params
 *     * +reservedInstancesId+ - (<tt>String</tt>)
 *     * +reservedInstancesListingId+ - (<tt>String</tt>)
 *     * +filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +reservedInstancesListings+ - (<tt>Array<Object></tt>)
 *       * +reservedInstancesListingId+ - (<tt>String</tt>)
 *       * +reservedInstancesId+ - (<tt>String</tt>)
 *       * +createDate+ - (<tt>Date</tt>)
 *       * +updateDate+ - (<tt>Date</tt>)
 *       * +status+ - (<tt>String</tt>)
 *       * +statusMessage+ - (<tt>String</tt>)
 *       * +instanceCounts+ - (<tt>Array<Object></tt>)
 *         * +state+ - (<tt>String</tt>)
 *         * +instanceCount+ - (<tt>Integer</tt>)
 *       * +priceSchedules+ - (<tt>Array<Object></tt>)
 *         * +term+ - (<tt>Integer</tt>)
 *         * +price+ - (<tt>Float</tt>)
 *         * +currencyCode+ - (<tt>String</tt>)
 *         * +active+ - (<tt>Boolean</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +clientToken+ - (<tt>String</tt>)
 *
 * @!method describeReservedInstancesOfferings(params, options)
 *   The DescribeReservedInstancesOfferings operation describes Reserved
 *   Instance offerings that are available for purchase. With Amazon EC2
 *   Reserved Instances, you purchase the right to launch Amazon EC2
 *   instances for a period of time (without getting insufficient
 *   capacity errors) and pay a lower usage rate for the actual time
 *   used.
 *   @param [Object] params
 *     * +ReservedInstancesOfferingIds+ - (<tt>Array<String></tt>) An
 *       optional list of the unique IDs of the Reserved Instance
 *       offerings to describe.
 *     * +InstanceType+ - (<tt>String</tt>) The instance type on which
 *       the Reserved Instance can be used.
 *     * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone in
 *       which the Reserved Instance can be used.
 *     * +ProductDescription+ - (<tt>String</tt>) The Reserved Instance
 *       product description.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for ReservedInstancesOfferings. For a complete
 *       reference to the available filter keys for this operation, see
 *       the Amazon EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +instanceTenancy+ - (<tt>String</tt>) The tenancy of the
 *       Reserved Instance offering. A Reserved Instance with tenancy of
 *       dedicated will run on single-tenant hardware and can only be
 *       launched within a VPC.
 *     * +offeringType+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +ReservedInstancesOfferings+ - (<tt>Array<Object></tt>) The list
 *       of described Reserved Instance offerings.
 *       * +ReservedInstancesOfferingId+ - (<tt>String</tt>) The unique
 *         ID of this Reserved Instances offering.
 *       * +InstanceType+ - (<tt>String</tt>) The instance type on which
 *         the Reserved Instances can be used.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone
 *         in which the Reserved Instances can be used.
 *       * +Duration+ - (<tt>Integer</tt>) The duration of the Reserved
 *         Instance, in seconds.
 *       * +UsagePrice+ - (<tt>Float</tt>) The usage price of the
 *         Reserved Instance, per hour.
 *       * +FixedPrice+ - (<tt>Float</tt>) The purchase price of the
 *         Reserved Instance.
 *       * +ProductDescription+ - (<tt>String</tt>) The Reserved
 *         Instances description (ex: Windows or Unix/Linux).
 *       * +instanceTenancy+ - (<tt>String</tt>) The tenancy of the
 *         reserved instance (ex: default or dedicated).
 *       * +currencyCode+ - (<tt>String</tt>) The currency of the
 *         reserved instance. Specified using ISO 4217 standard (e.g.,
 *         USD, JPY).
 *       * +offeringType+ - (<tt>String</tt>)
 *       * +recurringCharges+ - (<tt>Array<Object></tt>)
 *         * +frequency+ - (<tt>String</tt>)
 *         * +amount+ - (<tt>Float</tt>)
 *       * +marketplace+ - (<tt>Boolean</tt>)
 *       * +pricingDetails+ - (<tt>Array<Object></tt>)
 *         * +price+ - (<tt>Float</tt>)
 *         * +count+ - (<tt>Integer</tt>)
 *     * +nextToken+ - (<tt>String</tt>)
 *
 * @!method describeRouteTables(params, options)
 *   Gives you information about your route tables. You can filter the
 *   results to return information only about tables that match criteria
 *   you specify. For example, you could get information only about a
 *   table associated with a particular subnet. You can specify multiple
 *   values for the filter. The table must match at least one of the
 *   specified values for it to be included in the results.
 *   @param [Object] params
 *     * +routeTableIds+ - (<tt>Array<String></tt>) One or more route
 *       table IDs.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Route Tables. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +routeTables+ - (<tt>Array<Object></tt>)
 *       * +routeTableId+ - (<tt>String</tt>)
 *       * +vpcId+ - (<tt>String</tt>)
 *       * +routes+ - (<tt>Array<Object></tt>)
 *         * +destinationCidrBlock+ - (<tt>String</tt>)
 *         * +gatewayId+ - (<tt>String</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +instanceOwnerId+ - (<tt>String</tt>)
 *         * +networkInterfaceId+ - (<tt>String</tt>)
 *         * +state+ - (<tt>String</tt>)
 *       * +associations+ - (<tt>Array<Object></tt>)
 *         * +routeTableAssociationId+ - (<tt>String</tt>)
 *         * +routeTableId+ - (<tt>String</tt>)
 *         * +subnetId+ - (<tt>String</tt>)
 *         * +main+ - (<tt>Boolean</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +propagatingVgws+ - (<tt>Array<Object></tt>)
 *         * +gatewayId+ - (<tt>String</tt>)
 *       * +propagatedRoutes+ - (<tt>Array<Object></tt>)
 *         * +destinationCidrBlock+ - (<tt>String</tt>)
 *         * +gatewayId+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +sourceId+ - (<tt>String</tt>)
 *
 * @!method describeSecurityGroups(params, options)
 *   The DescribeSecurityGroups operation returns information about
 *   security groups that you own.
 *   @param [Object] params
 *     * +GroupNames+ - (<tt>Array<String></tt>) The optional list of
 *       Amazon EC2 security groups to describe.
 *     * +GroupIds+ - (<tt>Array<String></tt>)
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for SecurityGroups. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +SecurityGroups+ - (<tt>Array<Object></tt>) The list of
 *       described Amazon EC2 security groups.
 *       * +OwnerId+ - (<tt>String</tt>) The AWS Access Key ID of the
 *         owner of the security group.
 *       * +GroupName+ - (<tt>String</tt>) The name of this security
 *         group.
 *       * +groupId+ - (<tt>String</tt>)
 *       * +Description+ - (<tt>String</tt>) The description of this
 *         security group.
 *       * +IpPermissions+ - (<tt>Array<Object></tt>) The permissions
 *         enabled for this security group.
 *         * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *           permission.
 *         * +FromPort+ - (<tt>Integer</tt>) Start of port range for the
 *           TCP and UDP protocols, or an ICMP type number. An ICMP type
 *           number of -1 indicates a wildcard (i.e., any ICMP type
 *           number).
 *         * +ToPort+ - (<tt>Integer</tt>) End of port range for the TCP
 *           and UDP protocols, or an ICMP code. An ICMP code of -1
 *           indicates a wildcard (i.e., any ICMP code).
 *         * +UserIdGroupPairs+ - (<tt>Array<Object></tt>) The list of
 *           AWS user IDs and groups included in this permission.
 *           * +UserId+ - (<tt>String</tt>) The AWS user ID of an
 *             account.
 *           * +GroupName+ - (<tt>String</tt>) Name of the security group
 *             in the specified AWS account. Cannot be used when
 *             specifying a CIDR IP address range.
 *           * +GroupId+ - (<tt>String</tt>) ID of the security group in
 *             the specified AWS account. Cannot be used when specifying
 *             a CIDR IP address range.
 *         * +IpRanges+ - (<tt>Array<Object></tt>) The list of CIDR IP
 *           ranges included in this permission.
 *           * +CidrIp+ - (<tt>String</tt>) The list of CIDR IP ranges.
 *       * +ipPermissionsEgress+ - (<tt>Array<Object></tt>)
 *         * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *           permission.
 *         * +FromPort+ - (<tt>Integer</tt>) Start of port range for the
 *           TCP and UDP protocols, or an ICMP type number. An ICMP type
 *           number of -1 indicates a wildcard (i.e., any ICMP type
 *           number).
 *         * +ToPort+ - (<tt>Integer</tt>) End of port range for the TCP
 *           and UDP protocols, or an ICMP code. An ICMP code of -1
 *           indicates a wildcard (i.e., any ICMP code).
 *         * +UserIdGroupPairs+ - (<tt>Array<Object></tt>) The list of
 *           AWS user IDs and groups included in this permission.
 *           * +UserId+ - (<tt>String</tt>) The AWS user ID of an
 *             account.
 *           * +GroupName+ - (<tt>String</tt>) Name of the security group
 *             in the specified AWS account. Cannot be used when
 *             specifying a CIDR IP address range.
 *           * +GroupId+ - (<tt>String</tt>) ID of the security group in
 *             the specified AWS account. Cannot be used when specifying
 *             a CIDR IP address range.
 *         * +IpRanges+ - (<tt>Array<Object></tt>) The list of CIDR IP
 *           ranges included in this permission.
 *           * +CidrIp+ - (<tt>String</tt>) The list of CIDR IP ranges.
 *       * +vpcId+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeSnapshotAttribute(params, options)
 *   Returns information about an attribute of a snapshot. Only one
 *   attribute can be specified per call.
 *   @param [Object] params
 *     * +SnapshotId+ - (*required*, <tt>String</tt>) The ID of the EBS
 *       snapshot whose attribute is being described.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the EBS
 *       attribute to describe.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot whose
 *       attribute is being described.
 *     * +CreateVolumePermissions+ - (<tt>Array<Object></tt>) The list of
 *       permissions describing who can create a volume from the
 *       associated EBS snapshot.
 *       * +UserId+ - (<tt>String</tt>) The user ID of the user that can
 *         create volumes from the snapshot.
 *       * +Group+ - (<tt>String</tt>) The group that is allowed to
 *         create volumes from the snapshot (currently supports "all").
 *     * +productCodes+ - (<tt>Array<Object></tt>)
 *       * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *         DevPay product code.
 *       * +ProductCodeType+ - (<tt>String</tt>)
 *
 * @!method describeSnapshots(params, options)
 *   Returns information about the Amazon EBS snapshots available to you.
 *   Snapshots available to you include public snapshots available for
 *   any AWS account to launch, private snapshots you own, and private
 *   snapshots owned by another AWS account but for which you've been
 *   given explicit create volume permissions.
 *   @param [Object] params
 *     * +SnapshotIds+ - (<tt>Array<String></tt>) The optional list of
 *       EBS snapshot IDs to describe.
 *     * +OwnerIds+ - (<tt>Array<String></tt>) The optional list of EBS
 *       snapshot owners.
 *     * +RestorableByUserIds+ - (<tt>Array<String></tt>) The optional
 *       list of users who have permission to create volumes from the
 *       described EBS snapshots.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Snapshots. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Snapshots+ - (<tt>Array<Object></tt>) The list of described EBS
 *       snapshots.
 *       * +SnapshotId+ - (<tt>String</tt>) The unique ID of this
 *         snapshot.
 *       * +VolumeId+ - (<tt>String</tt>) The ID of the volume from which
 *         this snapshot was created.
 *       * +State+ - (<tt>String</tt>) Snapshot state (e.g., pending,
 *         completed, or error).
 *       * +StartTime+ - (<tt>Date</tt>) Time stamp when the snapshot was
 *         initiated.
 *       * +Progress+ - (<tt>String</tt>) The progress of the snapshot,
 *         in percentage.
 *       * +OwnerId+ - (<tt>String</tt>) AWS Access Key ID of the user
 *         who owns the snapshot.
 *       * +Description+ - (<tt>String</tt>) Description of the snapshot.
 *       * +VolumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *         gigabytes.
 *       * +ownerAlias+ - (<tt>String</tt>) The AWS account alias (e.g.,
 *         "amazon", "redhat", "self", etc.) or AWS account ID that owns
 *         the AMI.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         Snapshot.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeSpotDatafeedSubscription(params, options)
 *   Describes the data feed for Spot Instances.
 *   @param [Object] params
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +spotDatafeedSubscription+ - (<tt>Object</tt>) The Spot Instance
 *       datafeed subscription.
 *       * +ownerId+ - (<tt>String</tt>) Specifies the AWS account ID of
 *         the account.
 *       * +bucket+ - (<tt>String</tt>) Specifies the Amazon S3 bucket
 *         where the Spot Instance data feed is located.
 *       * +prefix+ - (<tt>String</tt>) Contains the prefix that is
 *         prepended to data feed files.
 *       * +state+ - (<tt>String</tt>) Specifies the state of the Spot
 *         Instance request.
 *       * +fault+ - (<tt>Object</tt>) Specifies a fault code for the
 *         Spot Instance request, if present.
 *         * +code+ - (<tt>String</tt>)
 *         * +message+ - (<tt>String</tt>)
 *
 * @!method describeSpotInstanceRequests(params, options)
 *   Describes Spot Instance requests. Spot Instances are instances that
 *   Amazon EC2 starts on your behalf when the maximum price that you
 *   specify exceeds the current Spot Price. Amazon EC2 periodically sets
 *   the Spot Price based on available Spot Instance capacity and current
 *   spot instance requests. For conceptual information about Spot
 *   Instances, refer to the Amazon Elastic Compute Cloud Developer Guide
 *   or Amazon Elastic Compute Cloud User Guide.
 *   @param [Object] params
 *     * +spotInstanceRequestIds+ - (<tt>Array<String></tt>) The ID of
 *       the request.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for SpotInstances. For a complete reference to
 *       the available filter keys for this operation, see the Amazon EC2
 *       API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +spotInstanceRequests+ - (<tt>Array<Object></tt>)
 *       * +spotInstanceRequestId+ - (<tt>String</tt>)
 *       * +spotPrice+ - (<tt>String</tt>)
 *       * +type+ - (<tt>String</tt>)
 *       * +state+ - (<tt>String</tt>)
 *       * +fault+ - (<tt>Object</tt>)
 *         * +code+ - (<tt>String</tt>)
 *         * +message+ - (<tt>String</tt>)
 *       * +validFrom+ - (<tt>Date</tt>)
 *       * +validUntil+ - (<tt>Date</tt>)
 *       * +launchGroup+ - (<tt>String</tt>)
 *       * +availabilityZoneGroup+ - (<tt>String</tt>)
 *       * +launchSpecification+ - (<tt>Object</tt>)
 *         * +imageId+ - (<tt>String</tt>) The AMI ID.
 *         * +keyName+ - (<tt>String</tt>) The name of the key pair.
 *         * +SecurityGroups+ - (<tt>Array<Object></tt>)
 *           * +GroupName+ - (<tt>String</tt>)
 *           * +groupId+ - (<tt>String</tt>)
 *         * +userData+ - (<tt>String</tt>) Optional data, specific to a
 *           user's application, to provide in the launch request. All
 *           instances that collectively comprise the launch request have
 *           access to this data. User data is never returned through API
 *           responses.
 *         * +addressingType+ - (<tt>String</tt>) Deprecated.
 *         * +instanceType+ - (<tt>String</tt>) Specifies the instance
 *           type.
 *         * +placement+ - (<tt>Object</tt>) Defines a placement item.
 *           * +availabilityZone+ - (<tt>String</tt>) The availability
 *             zone in which an Amazon EC2 instance runs.
 *           * +groupName+ - (<tt>String</tt>) The name of the
 *             PlacementGroup in which an Amazon EC2 instance runs.
 *             Placement groups are primarily used for launching High
 *             Performance Computing instances in the same group to
 *             ensure fast connection speeds.
 *         * +kernelId+ - (<tt>String</tt>) Specifies the ID of the
 *           kernel to select.
 *         * +ramdiskId+ - (<tt>String</tt>) Specifies the ID of the RAM
 *           disk to select. Some kernels require additional drivers at
 *           launch. Check the kernel requirements for information on
 *           whether or not you need to specify a RAM disk and search for
 *           the kernel ID.
 *         * +blockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies
 *           how block devices are exposed to the instance. Each mapping
 *           is made up of a virtualName and a deviceName.
 *           * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *             device name.
 *           * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *             (e.g., /dev/sdh).
 *           * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *             automatically setup Amazon EBS volumes when the instance
 *             is launched.
 *             * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *               from which the volume will be created.
 *             * +volumeSize+ - (<tt>Integer</tt>) The size of the
 *               volume, in gigabytes.
 *             * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *               whether the Amazon EBS volume is deleted on instance
 *               termination.
 *             * +volumeType+ - (<tt>String</tt>)
 *             * +iops+ - (<tt>Integer</tt>)
 *           * +noDevice+ - (<tt>String</tt>) Specifies the device name
 *             to suppress during instance launch.
 *         * +monitoringEnabled+ - (<tt>Boolean</tt>) Enables monitoring
 *           for the instance.
 *         * +subnetId+ - (<tt>String</tt>) Specifies the Amazon VPC
 *           subnet ID within which to launch the instance(s) for Amazon
 *           Virtual Private Cloud.
 *         * +networkInterfaces+ - (<tt>Array<Object></tt>)
 *           * +networkInterfaceId+ - (<tt>String</tt>)
 *           * +deviceIndex+ - (<tt>Integer</tt>)
 *           * +subnetId+ - (<tt>String</tt>)
 *           * +description+ - (<tt>String</tt>)
 *           * +privateIpAddress+ - (<tt>String</tt>)
 *           * +groups+ - (<tt>Array<String></tt>)
 *           * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *           * +privateIpAddresses+ - (<tt>Array<Object></tt>)
 *             * +privateIpAddress+ - (<tt>String</tt>)
 *             * +primary+ - (<tt>Boolean</tt>)
 *           * +secondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *         * +iamInstanceProfile+ - (<tt>Object</tt>)
 *           * +arn+ - (<tt>String</tt>)
 *           * +name+ - (<tt>String</tt>)
 *         * +ebsOptimized+ - (<tt>Boolean</tt>)
 *       * +instanceId+ - (<tt>String</tt>)
 *       * +createTime+ - (<tt>Date</tt>)
 *       * +productDescription+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for this spot
 *         instance request.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +launchedAvailabilityZone+ - (<tt>String</tt>) The
 *         Availability Zone in which the bid is launched.
 *
 * @!method describeSpotPriceHistory(params, options)
 *   Describes the Spot Price history.
 *   @param [Object] params
 *     * +startTime+ - (<tt>Date</tt>) The start date and time of the
 *       Spot Instance price history data.
 *     * +endTime+ - (<tt>Date</tt>) The end date and time of the Spot
 *       Instance price history data.
 *     * +instanceTypes+ - (<tt>Array<String></tt>) Specifies the
 *       instance type to return.
 *     * +productDescriptions+ - (<tt>Array<String></tt>) The description
 *       of the AMI.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for SpotPriceHistory. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +availabilityZone+ - (<tt>String</tt>) Filters the results by
 *       availability zone (ex: 'us-east-1a').
 *     * +maxResults+ - (<tt>Integer</tt>) Specifies the number of rows
 *       to return.
 *     * +nextToken+ - (<tt>String</tt>) Specifies the next set of rows
 *       to return.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +spotPriceHistory+ - (<tt>Array<Object></tt>)
 *       * +instanceType+ - (<tt>String</tt>)
 *       * +productDescription+ - (<tt>String</tt>)
 *       * +spotPrice+ - (<tt>String</tt>)
 *       * +timestamp+ - (<tt>Date</tt>)
 *       * +availabilityZone+ - (<tt>String</tt>)
 *     * +nextToken+ - (<tt>String</tt>) The string marking the next set
 *       of results returned. Displays empty if there are no more results
 *       to be returned.
 *
 * @!method describeSubnets(params, options)
 *   Gives you information about your subnets. You can filter the results
 *   to return information only about subnets that match criteria you
 *   specify.
 *   @param [Object] params
 *     * +SubnetIds+ - (<tt>Array<String></tt>) A set of one or more
 *       subnet IDs.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Subnets. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Subnets+ - (<tt>Array<Object></tt>) Contains a set of one or
 *       more Subnet instances.
 *       * +SubnetId+ - (<tt>String</tt>) Specifies the ID of the subnet.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         subnet. The state of the subnet may be either pending or
 *         available.
 *       * +VpcId+ - (<tt>String</tt>) Contains the ID of the VPC the
 *         subnet is in.
 *       * +CidrBlock+ - (<tt>String</tt>) Specifies the CIDR block
 *         assigned to the subnet.
 *       * +AvailableIpAddressCount+ - (<tt>Integer</tt>) Specifies the
 *         number of unused IP addresses in the subnet.
 *       * +AvailabilityZone+ - (<tt>String</tt>) Specifies the
 *         Availability Zone the subnet is in.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         Subnet.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeTags(params, options)
 *   Describes the tags for the specified resources.
 *   @param [Object] params
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for tags.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +tags+ - (<tt>Array<Object></tt>) A list of the tags for the
 *       specified resources.
 *       * +resourceId+ - (<tt>String</tt>) The resource ID for the tag.
 *       * +resourceType+ - (<tt>String</tt>) The type of resource
 *         identified by the associated resource ID (ex: instance, AMI,
 *         EBS volume, etc).
 *       * +key+ - (<tt>String</tt>) The tag's key.
 *       * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method describeVolumeAttribute(params, options)
 *   Calls the DescribeVolumeAttribute API operation.
 *   @param [Object] params
 *     * +VolumeId+ - (*required*, <tt>String</tt>)
 *     * +Attribute+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +volumeId+ - (<tt>String</tt>)
 *     * +autoEnableIO+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>Boolean</tt>)
 *     * +productCodes+ - (<tt>Array<Object></tt>)
 *       * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an AWS
 *         DevPay product code.
 *       * +ProductCodeType+ - (<tt>String</tt>)
 *
 * @!method describeVolumeStatus(params, options)
 *   Describes the status of a volume.
 *   @param [Object] params
 *     * +VolumeIds+ - (<tt>Array<String></tt>)
 *     * +filters+ - (<tt>Array<Object></tt>)
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *     * +NextToken+ - (<tt>String</tt>)
 *     * +MaxResults+ - (<tt>Integer</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +volumeStatuses+ - (<tt>Array<Object></tt>)
 *       * +volumeId+ - (<tt>String</tt>)
 *       * +availabilityZone+ - (<tt>String</tt>)
 *       * +volumeStatus+ - (<tt>Object</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +details+ - (<tt>Array<Object></tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +status+ - (<tt>String</tt>)
 *       * +events+ - (<tt>Array<Object></tt>)
 *         * +eventType+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +notBefore+ - (<tt>Date</tt>)
 *         * +notAfter+ - (<tt>Date</tt>)
 *         * +eventId+ - (<tt>String</tt>)
 *       * +actions+ - (<tt>Array<Object></tt>)
 *         * +code+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +eventType+ - (<tt>String</tt>)
 *         * +eventId+ - (<tt>String</tt>)
 *     * +nextToken+ - (<tt>String</tt>)
 *
 * @!method describeVolumes(params, options)
 *   Describes the status of the indicated volume or, in lieu of any
 *   specified, all volumes belonging to the caller. Volumes that have
 *   been deleted are not described.
 *   @param [Object] params
 *     * +VolumeIds+ - (<tt>Array<String></tt>) The optional list of EBS
 *       volumes to describe.
 *     * +filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for Volumes. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Volumes+ - (<tt>Array<Object></tt>) The list of described EBS
 *       volumes.
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
 *         * +Device+ - (<tt>String</tt>) How the device is exposed to
 *           the instance (e.g., /dev/sdh).
 *         * +State+ - (<tt>String</tt>)
 *         * +AttachTime+ - (<tt>Date</tt>) Timestamp when this
 *           attachment initiated.
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         Volume.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +volumeType+ - (<tt>String</tt>)
 *       * +iops+ - (<tt>Integer</tt>)
 *
 * @!method describeVpcs(params, options)
 *   Gives you information about your VPCs. You can filter the results to
 *   return information only about VPCs that match criteria you specify.
 *   @param [Object] params
 *     * +VpcIds+ - (<tt>Array<String></tt>) The ID of a VPC you want
 *       information about.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for VPCs. For a complete reference to the
 *       available filter keys for this operation, see the Amazon EC2 API
 *       reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Vpcs+ - (<tt>Array<Object></tt>)
 *       * +VpcId+ - (<tt>String</tt>) Specifies the ID of the VPC.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         VPC. The state of the subnet may be either pending or
 *         available.
 *       * +CidrBlock+ - (<tt>String</tt>) Specifies the CIDR block the
 *         VPC covers.
 *       * +DhcpOptionsId+ - (<tt>String</tt>) Specifies the ID of the
 *         set of DHCP options associated with the VPC. Contains a value
 *         of default if the default options are associated with the VPC.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the VPC.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +instanceTenancy+ - (<tt>String</tt>) The allowed tenancy of
 *         instances launched into the VPC.
 *
 * @!method describeVpnConnections(params, options)
 *   Gives you information about your VPN connections.
 *   @param [Object] params
 *     * +VpnConnectionIds+ - (<tt>Array<String></tt>) A VPN connection
 *       ID. More than one may be specified per request.
 *     * +Filters+ - (<tt>Array<Object></tt>) A list of filters used to
 *       match properties for VPN Connections. For a complete reference
 *       to the available filter keys for this operation, see the Amazon
 *       EC2 API reference.
 *       * +Name+ - (<tt>String</tt>) Specifies the name of the filter.
 *       * +Values+ - (<tt>Array<String></tt>) Contains one or more
 *         values for the filter.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +VpnConnections+ - (<tt>Array<Object></tt>)
 *       * +VpnConnectionId+ - (<tt>String</tt>) Specifies the ID of the
 *         VPN gateway at the VPC end of the VPN connection.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         VPN connection. Valid values are pending, available, deleting,
 *         and deleted.
 *       * +CustomerGatewayConfiguration+ - (<tt>String</tt>) Contains
 *         configuration information in the native XML format for the VPN
 *         connection's customer gateway.
 *       * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *         connection.
 *       * +CustomerGatewayId+ - (<tt>String</tt>) Specifies ID of the
 *         customer gateway at the end of the VPN connection.
 *       * +VpnGatewayId+ - (<tt>String</tt>) Specfies the ID of the VPN
 *         gateway at the VPC end of the VPN connection.
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         VpnConnection.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +vgwTelemetry+ - (<tt>Array<Object></tt>)
 *         * +outsideIpAddress+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +lastStatusChange+ - (<tt>Date</tt>)
 *         * +statusMessage+ - (<tt>String</tt>)
 *         * +acceptedRouteCount+ - (<tt>Integer</tt>)
 *       * +options+ - (<tt>Object</tt>)
 *         * +staticRoutesOnly+ - (<tt>Boolean</tt>)
 *       * +routes+ - (<tt>Array<Object></tt>)
 *         * +destinationCidrBlock+ - (<tt>String</tt>)
 *         * +source+ - (<tt>String</tt>)
 *         * +state+ - (<tt>String</tt>)
 *
 * @!method describeVpnGateways(params, options)
 *   Gives you information about your VPN gateways. You can filter the
 *   results to return information only about VPN gateways that match
 *   criteria you specify.
 *   @param [Object] params
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
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +VpnGateways+ - (<tt>Array<Object></tt>)
 *       * +VpnGatewayId+ - (<tt>String</tt>) Specifies the ID of the VPN
 *         gateway.
 *       * +State+ - (<tt>String</tt>) Describes the current state of the
 *         VPN gateway. Valid values are pending, available, deleting,
 *         and deleted.
 *       * +Type+ - (<tt>String</tt>) Specifies the type of VPN
 *         connection the VPN gateway supports.
 *       * +AvailabilityZone+ - (<tt>String</tt>) Specifies the
 *         Availability Zone where the VPN gateway was created.
 *       * +VpcAttachments+ - (<tt>Array<Object></tt>) Contains
 *         information about the VPCs attached to the VPN gateway.
 *         * +VpcId+ - (<tt>String</tt>)
 *         * +State+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *         VpnGateway.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method detachInternetGateway(params, options)
 *   Detaches an Internet gateway from a VPC, disabling connectivity
 *   between the Internet and the VPC. The VPC must not contain any
 *   running instances with elastic IP addresses. For more information
 *   about your VPC and Internet gateway, go to Amazon Virtual Private
 *   Cloud User Guide.
 *   @param [Object] params
 *     * +internetGatewayId+ - (*required*, <tt>String</tt>) The ID of
 *       the Internet gateway to detach.
 *     * +vpcId+ - (*required*, <tt>String</tt>) The ID of the VPC.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method detachNetworkInterface(params, options)
 *   Calls the DetachNetworkInterface API operation.
 *   @param [Object] params
 *     * +attachmentId+ - (*required*, <tt>String</tt>)
 *     * +force+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method detachVolume(params, options)
 *   Detach a previously attached volume from a running instance.
 *   @param [Object] params
 *     * +VolumeId+ - (*required*, <tt>String</tt>) The ID of the volume
 *       to detach.
 *     * +InstanceId+ - (<tt>String</tt>) The ID of the instance from
 *       which to detach the the specified volume.
 *     * +Device+ - (<tt>String</tt>) The device name to which the volume
 *       is attached on the specified instance.
 *     * +Force+ - (<tt>Boolean</tt>) Forces detachment if the previous
 *       detachment attempt did not occur cleanly (logging into an
 *       instance, unmounting the volume, and detaching normally).
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Attachment+ - (<tt>Object</tt>) The updated EBS volume
 *       attachment information after trying to detach the volume from
 *       the specified instance.
 *       * +VolumeId+ - (<tt>String</tt>)
 *       * +InstanceId+ - (<tt>String</tt>)
 *       * +Device+ - (<tt>String</tt>) How the device is exposed to the
 *         instance (e.g., /dev/sdh).
 *       * +State+ - (<tt>String</tt>)
 *       * +AttachTime+ - (<tt>Date</tt>) Timestamp when this attachment
 *         initiated.
 *       * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *
 * @!method detachVpnGateway(params, options)
 *   Detaches a VPN gateway from a VPC. You do this if you're planning to
 *   turn off the VPC and not use it anymore. You can confirm a VPN
 *   gateway has been completely detached from a VPC by describing the
 *   VPN gateway (any attachments to the VPN gateway are also described).
 *   @param [Object] params
 *     * +VpnGatewayId+ - (*required*, <tt>String</tt>) The ID of the VPN
 *       gateway to detach from the VPC.
 *     * +VpcId+ - (*required*, <tt>String</tt>) The ID of the VPC to
 *       detach the VPN gateway from.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method disableVgwRoutePropagation(params, options)
 *   Calls the DisableVgwRoutePropagation API operation.
 *   @param [Object] params
 *     * +RouteTableId+ - (*required*, <tt>String</tt>)
 *     * +GatewayId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method disassociateAddress(params, options)
 *   The DisassociateAddress operation disassociates the specified
 *   elastic IP address from the instance to which it is assigned. This
 *   is an idempotent operation. If you enter it more than once, Amazon
 *   EC2 does not return an error.
 *   @param [Object] params
 *     * +PublicIp+ - (*required*, <tt>String</tt>) The elastic IP
 *       address that you are disassociating from the instance.
 *     * +AssociationId+ - (<tt>String</tt>) Association ID corresponding
 *       to the VPC elastic IP address you want to disassociate.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method disassociateRouteTable(params, options)
 *   Disassociates a subnet from a route table.
 *   @param [Object] params
 *     * +associationId+ - (*required*, <tt>String</tt>) The association
 *       ID representing the current association between the route table
 *       and subnet.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method enableVgwRoutePropagation(params, options)
 *   Calls the EnableVgwRoutePropagation API operation.
 *   @param [Object] params
 *     * +RouteTableId+ - (*required*, <tt>String</tt>)
 *     * +GatewayId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method enableVolumeIO(params, options)
 *   Enable IO on the volume after an event has occured.
 *   @param [Object] params
 *     * +volumeId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method getConsoleOutput(params, options)
 *   The GetConsoleOutput operation retrieves console output for the
 *   specified instance.
 *   @param [Object] params
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance for which you want console output.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *       console output was requested.
 *     * +Timestamp+ - (<tt>Date</tt>) The time the output was last
 *       updated.
 *     * +Output+ - (<tt>String</tt>) The console output, Base64 encoded.
 *
 * @!method getPasswordData(params, options)
 *   Retrieves the encrypted administrator password for the instances
 *   running Windows.
 *   @param [Object] params
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance for which you want the Windows administrator password.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *       Windows administrator password was requested.
 *     * +Timestamp+ - (<tt>Date</tt>) The time the data was last
 *       updated.
 *     * +PasswordData+ - (<tt>String</tt>) The Windows administrator
 *       password of the specified instance.
 *
 * @!method importInstance(params, options)
 *   Calls the ImportInstance API operation.
 *   @param [Object] params
 *     * +description+ - (<tt>String</tt>)
 *     * +launchSpecification+ - (<tt>Object</tt>)
 *       * +architecture+ - (<tt>String</tt>)
 *       * +securityGroups+ - (<tt>Array<String></tt>)
 *       * +additionalInfo+ - (<tt>String</tt>)
 *       * +userData+ - (<tt>String</tt>)
 *       * +instanceType+ - (<tt>String</tt>)
 *       * +placement+ - (<tt>Object</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>) The availability zone
 *           in which an Amazon EC2 instance runs.
 *         * +groupName+ - (<tt>String</tt>) The name of the
 *           PlacementGroup in which an Amazon EC2 instance runs.
 *           Placement groups are primarily used for launching High
 *           Performance Computing instances in the same group to ensure
 *           fast connection speeds.
 *         * +tenancy+ - (<tt>String</tt>) The allowed tenancy of
 *           instances launched into the VPC. A value of default means
 *           instances can be launched with any tenancy; a value of
 *           dedicated means all instances launched into the VPC will be
 *           launched as dedicated tenancy regardless of the tenancy
 *           assigned to the instance at launch.
 *       * +blockDeviceMappings+ - (<tt>Array<Object></tt>)
 *         * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *           device name.
 *         * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *             from which the volume will be created.
 *           * +volumeSize+ - (<tt>Integer</tt>) The size of the volume,
 *             in gigabytes.
 *           * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *           * +volumeType+ - (<tt>String</tt>)
 *           * +iops+ - (<tt>Integer</tt>)
 *         * +noDevice+ - (<tt>String</tt>) Specifies the device name to
 *           suppress during instance launch.
 *       * +monitoring+ - (<tt>Boolean</tt>)
 *       * +subnetId+ - (<tt>String</tt>)
 *       * +disableApiTermination+ - (<tt>Boolean</tt>)
 *       * +instanceInitiatedShutdownBehavior+ - (<tt>String</tt>)
 *       * +privateIpAddress+ - (<tt>String</tt>)
 *     * +diskImages+ - (<tt>Array<Object></tt>)
 *       * +Image+ - (<tt>Object</tt>)
 *         * +format+ - (*required*, <tt>String</tt>)
 *         * +bytes+ - (*required*, <tt>Integer</tt>)
 *         * +importManifestUrl+ - (*required*, <tt>String</tt>)
 *       * +Description+ - (<tt>String</tt>)
 *       * +Volume+ - (<tt>Object</tt>)
 *         * +size+ - (*required*, <tt>Integer</tt>)
 *     * +platform+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +conversionTask+ - (<tt>Object</tt>)
 *       * +conversionTaskId+ - (<tt>String</tt>)
 *       * +expirationTime+ - (<tt>String</tt>)
 *       * +importInstance+ - (<tt>Object</tt>)
 *         * +volumes+ - (<tt>Array<Object></tt>)
 *           * +bytesConverted+ - (<tt>Integer</tt>)
 *           * +availabilityZone+ - (<tt>String</tt>)
 *           * +image+ - (<tt>Object</tt>)
 *             * +format+ - (<tt>String</tt>)
 *             * +size+ - (<tt>Integer</tt>)
 *             * +importManifestUrl+ - (<tt>String</tt>)
 *             * +checksum+ - (<tt>String</tt>)
 *           * +volume+ - (<tt>Object</tt>)
 *             * +size+ - (<tt>Integer</tt>)
 *             * +id+ - (<tt>String</tt>)
 *           * +status+ - (<tt>String</tt>)
 *           * +statusMessage+ - (<tt>String</tt>)
 *           * +description+ - (<tt>String</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +platform+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *       * +importVolume+ - (<tt>Object</tt>)
 *         * +bytesConverted+ - (<tt>Integer</tt>)
 *         * +availabilityZone+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +image+ - (<tt>Object</tt>)
 *           * +format+ - (<tt>String</tt>)
 *           * +size+ - (<tt>Integer</tt>)
 *           * +importManifestUrl+ - (<tt>String</tt>)
 *           * +checksum+ - (<tt>String</tt>)
 *         * +volume+ - (<tt>Object</tt>)
 *           * +size+ - (<tt>Integer</tt>)
 *           * +id+ - (<tt>String</tt>)
 *       * +state+ - (<tt>String</tt>)
 *       * +statusMessage+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method importKeyPair(params, options)
 *   Imports the public key from an RSA key pair created with a
 *   third-party tool. This operation differs from CreateKeyPair as the
 *   private key is never transferred between the caller and AWS servers.
 *   @param [Object] params
 *     * +keyName+ - (*required*, <tt>String</tt>) The unique name for
 *       the key pair.
 *     * +publicKeyMaterial+ - (*required*, <tt>String</tt>) The public
 *       key portion of the key pair being imported.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +keyName+ - (<tt>String</tt>) The specified unique key pair
 *       name.
 *     * +keyFingerprint+ - (<tt>String</tt>) The MD5 public key
 *       fingerprint as specified in section 4 of RFC4716 .
 *
 * @!method importVolume(params, options)
 *   Calls the ImportVolume API operation.
 *   @param [Object] params
 *     * +availabilityZone+ - (<tt>String</tt>)
 *     * +image+ - (<tt>Object</tt>)
 *       * +format+ - (*required*, <tt>String</tt>)
 *       * +bytes+ - (*required*, <tt>Integer</tt>)
 *       * +importManifestUrl+ - (*required*, <tt>String</tt>)
 *     * +description+ - (<tt>String</tt>)
 *     * +volume+ - (<tt>Object</tt>)
 *       * +size+ - (*required*, <tt>Integer</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +conversionTask+ - (<tt>Object</tt>)
 *       * +conversionTaskId+ - (<tt>String</tt>)
 *       * +expirationTime+ - (<tt>String</tt>)
 *       * +importInstance+ - (<tt>Object</tt>)
 *         * +volumes+ - (<tt>Array<Object></tt>)
 *           * +bytesConverted+ - (<tt>Integer</tt>)
 *           * +availabilityZone+ - (<tt>String</tt>)
 *           * +image+ - (<tt>Object</tt>)
 *             * +format+ - (<tt>String</tt>)
 *             * +size+ - (<tt>Integer</tt>)
 *             * +importManifestUrl+ - (<tt>String</tt>)
 *             * +checksum+ - (<tt>String</tt>)
 *           * +volume+ - (<tt>Object</tt>)
 *             * +size+ - (<tt>Integer</tt>)
 *             * +id+ - (<tt>String</tt>)
 *           * +status+ - (<tt>String</tt>)
 *           * +statusMessage+ - (<tt>String</tt>)
 *           * +description+ - (<tt>String</tt>)
 *         * +instanceId+ - (<tt>String</tt>)
 *         * +platform+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *       * +importVolume+ - (<tt>Object</tt>)
 *         * +bytesConverted+ - (<tt>Integer</tt>)
 *         * +availabilityZone+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +image+ - (<tt>Object</tt>)
 *           * +format+ - (<tt>String</tt>)
 *           * +size+ - (<tt>Integer</tt>)
 *           * +importManifestUrl+ - (<tt>String</tt>)
 *           * +checksum+ - (<tt>String</tt>)
 *         * +volume+ - (<tt>Object</tt>)
 *           * +size+ - (<tt>Integer</tt>)
 *           * +id+ - (<tt>String</tt>)
 *       * +state+ - (<tt>String</tt>)
 *       * +statusMessage+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>)
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *
 * @!method modifyImageAttribute(params, options)
 *   The ModifyImageAttribute operation modifies an attribute of an AMI.
 *   @param [Object] params
 *     * +ImageId+ - (*required*, <tt>String</tt>) The ID of the AMI
 *       whose attribute you want to modify.
 *     * +Attribute+ - (<tt>String</tt>) The name of the AMI attribute
 *       you want to modify.
 *     * +OperationType+ - (<tt>String</tt>) The type of operation being
 *       requested.
 *     * +UserIds+ - (<tt>Array<String></tt>) The AWS user ID being added
 *       to or removed from the list of users with launch permissions for
 *       this AMI. Only valid when the launchPermission attribute is
 *       being modified.
 *     * +UserGroups+ - (<tt>Array<String></tt>) The user group being
 *       added to or removed from the list of user groups with launch
 *       permissions for this AMI. Only valid when the launchPermission
 *       attribute is being modified.
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
 *           involved in this launch permission.
 *       * +Remove+ - (<tt>Array<Object></tt>)
 *         * +UserId+ - (<tt>String</tt>) The AWS user ID of the user
 *           involved in this launch permission.
 *         * +Group+ - (<tt>String</tt>) The AWS group of the user
 *           involved in this launch permission.
 *     * +Description+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method modifyInstanceAttribute(params, options)
 *   Modifies an attribute of an instance.
 *   @param [Object] params
 *     * +instanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       instance whose attribute is being modified.
 *     * +attribute+ - (<tt>String</tt>) The name of the attribute being
 *       modified.
 *     * +value+ - (<tt>String</tt>) The new value of the instance
 *       attribute being modified.
 *     * +blockDeviceMappings+ - (<tt>Array<Object></tt>) The new block
 *       device mappings for the instance whose attributes are being
 *       modified.
 *       * +deviceName+ - (<tt>String</tt>) The device name (e.g.,
 *         /dev/sdh) at which the block device is exposed on the
 *         instance.
 *       * +ebs+ - (<tt>Object</tt>) The EBS instance block device
 *         specification describing the EBS block device to map to the
 *         specified device name on a running instance.
 *         * +volumeId+ - (<tt>String</tt>) The ID of the EBS volume that
 *           should be mounted as a block device on an Amazon EC2
 *           instance.
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *       * +virtualName+ - (<tt>String</tt>) The virtual device name.
 *       * +noDevice+ - (<tt>String</tt>) When set to the empty string,
 *         specifies that the device name in this object should not be
 *         mapped to any real device.
 *     * +SourceDestCheck+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>Boolean</tt>)
 *     * +disableApiTermination+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>Boolean</tt>)
 *     * +instanceType+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>String</tt>)
 *     * +kernel+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>String</tt>)
 *     * +ramdisk+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>String</tt>)
 *     * +userData+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>String</tt>)
 *     * +instanceInitiatedShutdownBehavior+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>String</tt>)
 *     * +groups+ - (<tt>Array<String></tt>)
 *     * +ebsOptimized+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method modifyNetworkInterfaceAttribute(params, options)
 *   Calls the ModifyNetworkInterfaceAttribute API operation.
 *   @param [Object] params
 *     * +networkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +description+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>String</tt>)
 *     * +sourceDestCheck+ - (<tt>Object</tt>)
 *       * +value+ - (<tt>Boolean</tt>)
 *     * +groups+ - (<tt>Array<String></tt>)
 *     * +attachment+ - (<tt>Object</tt>)
 *       * +attachmentId+ - (<tt>String</tt>)
 *       * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method modifySnapshotAttribute(params, options)
 *   Adds or remove permission settings for the specified snapshot.
 *   @param [Object] params
 *     * +SnapshotId+ - (*required*, <tt>String</tt>) The ID of the EBS
 *       snapshot whose attributes are being modified.
 *     * +Attribute+ - (<tt>String</tt>) The name of the attribute being
 *       modified.
 *     * +OperationType+ - (<tt>String</tt>) The operation to perform on
 *       the attribute.
 *     * +UserIds+ - (<tt>Array<String></tt>) The AWS user IDs to add to
 *       or remove from the list of users that have permission to create
 *       EBS volumes from the specified snapshot. Currently supports
 *       "all".
 *     * +GroupNames+ - (<tt>Array<String></tt>) The AWS group names to
 *       add to or remove from the list of groups that have permission to
 *       create EBS volumes from the specified snapshot. Currently
 *       supports "all".
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
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method modifyVolumeAttribute(params, options)
 *   Calls the ModifyVolumeAttribute API operation.
 *   @param [Object] params
 *     * +VolumeId+ - (*required*, <tt>String</tt>)
 *     * +AutoEnableIO+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method monitorInstances(params, options)
 *   Enables monitoring for a running instance.
 *   @param [Object] params
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       Amazon EC2 instances on which to enable monitoring.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +InstanceMonitorings+ - (<tt>Array<Object></tt>) A list of
 *       updated monitoring information for the instances specified in
 *       the request.
 *       * +InstanceId+ - (<tt>String</tt>) Instance ID.
 *       * +Monitoring+ - (<tt>Object</tt>) Monitoring state for the
 *         associated instance.
 *         * +State+ - (<tt>String</tt>) The state of monitoring on an
 *           Amazon EC2 instance (ex: enabled, disabled).
 *
 * @!method purchaseReservedInstancesOffering(params, options)
 *   The PurchaseReservedInstancesOffering operation purchases a Reserved
 *   Instance for use with your account. With Amazon EC2 Reserved
 *   Instances, you purchase the right to launch Amazon EC2 instances for
 *   a period of time (without getting insufficient capacity errors) and
 *   pay a lower usage rate for the actual time used.
 *   @param [Object] params
 *     * +ReservedInstancesOfferingId+ - (*required*, <tt>String</tt>)
 *       The unique ID of the Reserved Instances offering being
 *       purchased.
 *     * +InstanceCount+ - (*required*, <tt>Integer</tt>) The number of
 *       Reserved Instances to purchase.
 *     * +limitPrice+ - (<tt>Object</tt>)
 *       * +amount+ - (<tt>Float</tt>)
 *       * +currencyCode+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +ReservedInstancesId+ - (<tt>String</tt>) The unique ID of the
 *       Reserved Instances purchased for your account.
 *
 * @!method rebootInstances(params, options)
 *   The RebootInstances operation requests a reboot of one or more
 *   instances. This operation is asynchronous; it only queues a request
 *   to reboot the specified instance(s). The operation will succeed if
 *   the instances are valid and belong to the user. Requests to reboot
 *   terminated instances are ignored.
 *   @param [Object] params
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       instances to terminate.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method registerImage(params, options)
 *   The RegisterImage operation registers an AMI with Amazon EC2. Images
 *   must be registered before they can be launched. For more
 *   information, see RunInstances.
 *   @param [Object] params
 *     * +ImageLocation+ - (<tt>String</tt>)
 *     * +name+ - (<tt>String</tt>) The name to give the new Amazon
 *       Machine Image.
 *     * +description+ - (<tt>String</tt>)
 *     * +architecture+ - (<tt>String</tt>)
 *     * +kernelId+ - (<tt>String</tt>)
 *     * +ramdiskId+ - (<tt>String</tt>) The optional ID of a specific
 *       ramdisk to register with the new AMI.
 *     * +rootDeviceName+ - (<tt>String</tt>) The root device name (e.g.,
 *       /dev/sda1).
 *     * +blockDeviceMappings+ - (<tt>Array<Object></tt>) The block
 *       device mappings for the new AMI, which specify how different
 *       block devices (ex: EBS volumes and ephemeral drives) will be
 *       exposed on instances launched from the new image.
 *       * +VirtualName+ - (<tt>String</tt>) Specifies the virtual device
 *         name.
 *       * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *         (e.g., /dev/sdh).
 *       * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *           which the volume will be created.
 *         * +volumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *           gigabytes.
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * +volumeType+ - (<tt>String</tt>)
 *         * +iops+ - (<tt>Integer</tt>)
 *       * +noDevice+ - (<tt>String</tt>) Specifies the device name to
 *         suppress during instance launch.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +ImageId+ - (<tt>String</tt>) The ID of the new Amazon Machine
 *       Image (AMI).
 *
 * @!method releaseAddress(params, options)
 *   The ReleaseAddress operation releases an elastic IP address
 *   associated with your account.
 *   @param [Object] params
 *     * +PublicIp+ - (<tt>String</tt>) The elastic IP address that you
 *       are releasing from your account.
 *     * +AllocationId+ - (<tt>String</tt>) The allocation ID that AWS
 *       provided when you allocated the address for use with Amazon VPC.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method replaceNetworkAclAssociation(params, options)
 *   Changes which network ACL a subnet is associated with. By default
 *   when you create a subnet, it's automatically associated with the
 *   default network ACL. For more information about network ACLs, go to
 *   Network ACLs in the Amazon Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +associationId+ - (*required*, <tt>String</tt>) The ID
 *       representing the current association between the original
 *       network ACL and the subnet.
 *     * +networkAclId+ - (*required*, <tt>String</tt>) The ID of the new
 *       ACL to associate with the subnet.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +newAssociationId+ - (<tt>String</tt>)
 *
 * @!method replaceNetworkAclEntry(params, options)
 *   Replaces an entry (i.e., rule) in a network ACL. For more
 *   information about network ACLs, go to Network ACLs in the Amazon
 *   Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +networkAclId+ - (*required*, <tt>String</tt>) ID of the ACL
 *       where the entry will be replaced.
 *     * +ruleNumber+ - (*required*, <tt>Integer</tt>) Rule number of the
 *       entry to replace.
 *     * +protocol+ - (*required*, <tt>String</tt>) IP protocol the rule
 *       applies to. Valid Values: tcp, udp, icmp or an IP protocol
 *       number.
 *     * +ruleAction+ - (*required*, <tt>String</tt>) Whether to allow or
 *       deny traffic that matches the rule.
 *     * +egress+ - (*required*, <tt>Boolean</tt>) Whether this rule
 *       applies to egress traffic from the subnet (true) or ingress
 *       traffic (false).
 *     * +cidrBlock+ - (*required*, <tt>String</tt>) The CIDR range to
 *       allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
 *     * +icmpTypeCode+ - (<tt>Object</tt>) ICMP values.
 *       * +type+ - (<tt>Integer</tt>) For the ICMP protocol, the ICMP
 *         type. A value of -1 is a wildcard meaning all types. Required
 *         if specifying icmp for the protocol.
 *       * +code+ - (<tt>Integer</tt>) For the ICMP protocol, the ICMP
 *         code. A value of -1 is a wildcard meaning all codes. Required
 *         if specifying icmp for the protocol.
 *     * +portRange+ - (<tt>Object</tt>) Port ranges.
 *       * +from+ - (<tt>Integer</tt>) The first port in the range.
 *         Required if specifying tcp or udp for the protocol.
 *       * +to+ - (<tt>Integer</tt>) The last port in the range. Required
 *         if specifying tcp or udp for the protocol.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method replaceRoute(params, options)
 *   Replaces an existing route within a route table in a VPC. For more
 *   information about route tables, go to Route Tables in the Amazon
 *   Virtual Private Cloud User Guide.
 *   @param [Object] params
 *     * +routeTableId+ - (*required*, <tt>String</tt>) The ID of the
 *       route table where the route will be replaced.
 *     * +destinationCidrBlock+ - (*required*, <tt>String</tt>) The CIDR
 *       address block used for the destination match. For example:
 *       0.0.0.0/0. The value you provide must match the CIDR of an
 *       existing route in the table.
 *     * +gatewayId+ - (<tt>String</tt>) The ID of a VPN or Internet
 *       gateway attached to your VPC.
 *     * +instanceId+ - (<tt>String</tt>) The ID of a NAT instance in
 *       your VPC.
 *     * +networkInterfaceId+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method replaceRouteTableAssociation(params, options)
 *   Changes the route table associated with a given subnet in a VPC.
 *   After you execute this action, the subnet uses the routes in the new
 *   route table it's associated with. For more information about route
 *   tables, go to Route Tables in the Amazon Virtual Private Cloud User
 *   Guide.
 *   @param [Object] params
 *     * +associationId+ - (*required*, <tt>String</tt>) The ID
 *       representing the current association between the original route
 *       table and the subnet.
 *     * +routeTableId+ - (*required*, <tt>String</tt>) The ID of the new
 *       route table to associate with the subnet.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +newAssociationId+ - (<tt>String</tt>)
 *
 * @!method reportInstanceStatus(params, options)
 *   Calls the ReportInstanceStatus API operation.
 *   @param [Object] params
 *     * +instances+ - (<tt>Array<String></tt>)
 *     * +status+ - (<tt>String</tt>)
 *     * +startTime+ - (<tt>Date</tt>)
 *     * +endTime+ - (<tt>Date</tt>)
 *     * +reasonCodes+ - (<tt>Array<String></tt>)
 *     * +description+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method requestSpotInstances(params, options)
 *   Creates a Spot Instance request.
 *   @param [Object] params
 *     * +spotPrice+ - (*required*, <tt>String</tt>) Specifies the
 *       maximum hourly price for any Spot Instance launched to fulfill
 *       the request.
 *     * +instanceCount+ - (<tt>Integer</tt>) Specifies the maximum
 *       number of Spot Instances to launch.
 *     * +type+ - (<tt>String</tt>) Specifies the Spot Instance type.
 *     * +validFrom+ - (<tt>Date</tt>) Defines the start date of the
 *       request.
 *     * +validUntil+ - (<tt>Date</tt>) End date of the request.
 *     * +launchGroup+ - (<tt>String</tt>) Specifies the instance launch
 *       group. Launch groups are Spot Instances that launch and
 *       terminate together.
 *     * +availabilityZoneGroup+ - (<tt>String</tt>) Specifies the
 *       Availability Zone group.
 *     * +launchSpecification+ - (<tt>Object</tt>) Specifies additional
 *       launch instance information.
 *       * +imageId+ - (<tt>String</tt>) The AMI ID.
 *       * +keyName+ - (<tt>String</tt>) The name of the key pair.
 *       * +SecurityGroups+ - (<tt>Array<Object></tt>)
 *         * +GroupName+ - (<tt>String</tt>)
 *         * +groupId+ - (<tt>String</tt>)
 *       * +userData+ - (<tt>String</tt>) Optional data, specific to a
 *         user's application, to provide in the launch request. All
 *         instances that collectively comprise the launch request have
 *         access to this data. User data is never returned through API
 *         responses.
 *       * +addressingType+ - (<tt>String</tt>) Deprecated.
 *       * +instanceType+ - (<tt>String</tt>) Specifies the instance
 *         type.
 *       * +placement+ - (<tt>Object</tt>) Defines a placement item.
 *         * +availabilityZone+ - (<tt>String</tt>) The availability zone
 *           in which an Amazon EC2 instance runs.
 *         * +groupName+ - (<tt>String</tt>) The name of the
 *           PlacementGroup in which an Amazon EC2 instance runs.
 *           Placement groups are primarily used for launching High
 *           Performance Computing instances in the same group to ensure
 *           fast connection speeds.
 *       * +kernelId+ - (<tt>String</tt>) Specifies the ID of the kernel
 *         to select.
 *       * +ramdiskId+ - (<tt>String</tt>) Specifies the ID of the RAM
 *         disk to select. Some kernels require additional drivers at
 *         launch. Check the kernel requirements for information on
 *         whether or not you need to specify a RAM disk and search for
 *         the kernel ID.
 *       * +blockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies how
 *         block devices are exposed to the instance. Each mapping is
 *         made up of a virtualName and a deviceName.
 *         * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *           device name.
 *         * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *           (e.g., /dev/sdh).
 *         * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *           automatically setup Amazon EBS volumes when the instance is
 *           launched.
 *           * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *             from which the volume will be created.
 *           * +volumeSize+ - (<tt>Integer</tt>) The size of the volume,
 *             in gigabytes.
 *           * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *             whether the Amazon EBS volume is deleted on instance
 *             termination.
 *           * +volumeType+ - (<tt>String</tt>)
 *           * +iops+ - (<tt>Integer</tt>)
 *         * +noDevice+ - (<tt>String</tt>) Specifies the device name to
 *           suppress during instance launch.
 *       * +monitoringEnabled+ - (<tt>Boolean</tt>) Enables monitoring
 *         for the instance.
 *       * +subnetId+ - (<tt>String</tt>) Specifies the Amazon VPC subnet
 *         ID within which to launch the instance(s) for Amazon Virtual
 *         Private Cloud.
 *       * +networkInterfaces+ - (<tt>Array<Object></tt>)
 *         * +networkInterfaceId+ - (<tt>String</tt>)
 *         * +deviceIndex+ - (<tt>Integer</tt>)
 *         * +subnetId+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +privateIpAddress+ - (<tt>String</tt>)
 *         * +groups+ - (<tt>Array<String></tt>)
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *         * +privateIpAddresses+ - (<tt>Array<Object></tt>)
 *           * +privateIpAddress+ - (*required*, <tt>String</tt>)
 *           * +primary+ - (<tt>Boolean</tt>)
 *         * +secondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *       * +iamInstanceProfile+ - (<tt>Object</tt>)
 *         * +arn+ - (<tt>String</tt>)
 *         * +name+ - (<tt>String</tt>)
 *       * +ebsOptimized+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +spotInstanceRequests+ - (<tt>Array<Object></tt>) Contains a
 *       list of Spot Instance requests.
 *       * +spotInstanceRequestId+ - (<tt>String</tt>)
 *       * +spotPrice+ - (<tt>String</tt>)
 *       * +type+ - (<tt>String</tt>)
 *       * +state+ - (<tt>String</tt>)
 *       * +fault+ - (<tt>Object</tt>)
 *         * +code+ - (<tt>String</tt>)
 *         * +message+ - (<tt>String</tt>)
 *       * +validFrom+ - (<tt>Date</tt>)
 *       * +validUntil+ - (<tt>Date</tt>)
 *       * +launchGroup+ - (<tt>String</tt>)
 *       * +availabilityZoneGroup+ - (<tt>String</tt>)
 *       * +launchSpecification+ - (<tt>Object</tt>)
 *         * +imageId+ - (<tt>String</tt>) The AMI ID.
 *         * +keyName+ - (<tt>String</tt>) The name of the key pair.
 *         * +SecurityGroups+ - (<tt>Array<Object></tt>)
 *           * +GroupName+ - (<tt>String</tt>)
 *           * +groupId+ - (<tt>String</tt>)
 *         * +userData+ - (<tt>String</tt>) Optional data, specific to a
 *           user's application, to provide in the launch request. All
 *           instances that collectively comprise the launch request have
 *           access to this data. User data is never returned through API
 *           responses.
 *         * +addressingType+ - (<tt>String</tt>) Deprecated.
 *         * +instanceType+ - (<tt>String</tt>) Specifies the instance
 *           type.
 *         * +placement+ - (<tt>Object</tt>) Defines a placement item.
 *           * +availabilityZone+ - (<tt>String</tt>) The availability
 *             zone in which an Amazon EC2 instance runs.
 *           * +groupName+ - (<tt>String</tt>) The name of the
 *             PlacementGroup in which an Amazon EC2 instance runs.
 *             Placement groups are primarily used for launching High
 *             Performance Computing instances in the same group to
 *             ensure fast connection speeds.
 *         * +kernelId+ - (<tt>String</tt>) Specifies the ID of the
 *           kernel to select.
 *         * +ramdiskId+ - (<tt>String</tt>) Specifies the ID of the RAM
 *           disk to select. Some kernels require additional drivers at
 *           launch. Check the kernel requirements for information on
 *           whether or not you need to specify a RAM disk and search for
 *           the kernel ID.
 *         * +blockDeviceMappings+ - (<tt>Array<Object></tt>) Specifies
 *           how block devices are exposed to the instance. Each mapping
 *           is made up of a virtualName and a deviceName.
 *           * +VirtualName+ - (<tt>String</tt>) Specifies the virtual
 *             device name.
 *           * +DeviceName+ - (<tt>String</tt>) Specifies the device name
 *             (e.g., /dev/sdh).
 *           * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *             automatically setup Amazon EBS volumes when the instance
 *             is launched.
 *             * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot
 *               from which the volume will be created.
 *             * +volumeSize+ - (<tt>Integer</tt>) The size of the
 *               volume, in gigabytes.
 *             * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *               whether the Amazon EBS volume is deleted on instance
 *               termination.
 *             * +volumeType+ - (<tt>String</tt>)
 *             * +iops+ - (<tt>Integer</tt>)
 *           * +noDevice+ - (<tt>String</tt>) Specifies the device name
 *             to suppress during instance launch.
 *         * +monitoringEnabled+ - (<tt>Boolean</tt>) Enables monitoring
 *           for the instance.
 *         * +subnetId+ - (<tt>String</tt>) Specifies the Amazon VPC
 *           subnet ID within which to launch the instance(s) for Amazon
 *           Virtual Private Cloud.
 *         * +networkInterfaces+ - (<tt>Array<Object></tt>)
 *           * +networkInterfaceId+ - (<tt>String</tt>)
 *           * +deviceIndex+ - (<tt>Integer</tt>)
 *           * +subnetId+ - (<tt>String</tt>)
 *           * +description+ - (<tt>String</tt>)
 *           * +privateIpAddress+ - (<tt>String</tt>)
 *           * +groups+ - (<tt>Array<String></tt>)
 *           * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *           * +privateIpAddresses+ - (<tt>Array<Object></tt>)
 *             * +privateIpAddress+ - (<tt>String</tt>)
 *             * +primary+ - (<tt>Boolean</tt>)
 *           * +secondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *         * +iamInstanceProfile+ - (<tt>Object</tt>)
 *           * +arn+ - (<tt>String</tt>)
 *           * +name+ - (<tt>String</tt>)
 *         * +ebsOptimized+ - (<tt>Boolean</tt>)
 *       * +instanceId+ - (<tt>String</tt>)
 *       * +createTime+ - (<tt>Date</tt>)
 *       * +productDescription+ - (<tt>String</tt>)
 *       * +tags+ - (<tt>Array<Object></tt>) A list of tags for this spot
 *         instance request.
 *         * +key+ - (<tt>String</tt>) The tag's key.
 *         * +value+ - (<tt>String</tt>) The tag's value.
 *       * +launchedAvailabilityZone+ - (<tt>String</tt>) The
 *         Availability Zone in which the bid is launched.
 *
 * @!method resetImageAttribute(params, options)
 *   The ResetImageAttribute operation resets an attribute of an AMI to
 *   its default value.
 *   @param [Object] params
 *     * +ImageId+ - (*required*, <tt>String</tt>) The ID of the AMI
 *       whose attribute is being reset.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute being reset.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method resetInstanceAttribute(params, options)
 *   Resets an attribute of an instance to its default value.
 *   @param [Object] params
 *     * +instanceId+ - (*required*, <tt>String</tt>) The ID of the
 *       Amazon EC2 instance whose attribute is being reset.
 *     * +attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute being reset.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method resetNetworkInterfaceAttribute(params, options)
 *   Calls the ResetNetworkInterfaceAttribute API operation.
 *   @param [Object] params
 *     * +networkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +sourceDestCheck+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method resetSnapshotAttribute(params, options)
 *   Resets permission settings for the specified snapshot.
 *   @param [Object] params
 *     * +SnapshotId+ - (*required*, <tt>String</tt>) The ID of the
 *       snapshot whose attribute is being reset.
 *     * +Attribute+ - (*required*, <tt>String</tt>) The name of the
 *       attribute being reset.
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method revokeSecurityGroupEgress(params, options)
 *   This action applies only to security groups in a VPC. It doesn't
 *   work with EC2 security groups. For information about Amazon Virtual
 *   Private Cloud and VPC security groups, go to the Amazon Virtual
 *   Private Cloud User Guide.
 *   @param [Object] params
 *     * +groupId+ - (*required*, <tt>String</tt>) ID of the VPC security
 *       group to modify.
 *     * +sourceSecurityGroupName+ - (<tt>String</tt>) Deprecated.
 *     * +sourceSecurityGroupOwnerId+ - (<tt>String</tt>) Deprecated.
 *     * +ipProtocol+ - (<tt>String</tt>) Deprecated.
 *     * +fromPort+ - (<tt>Integer</tt>) Deprecated.
 *     * +toPort+ - (<tt>Integer</tt>) Deprecated.
 *     * +cidrIp+ - (<tt>String</tt>) Deprecated.
 *     * +ipPermissions+ - (<tt>Array<Object></tt>) List of IP
 *       permissions to authorize on the specified security group.
 *       Specifying permissions through IP permissions is the preferred
 *       way of authorizing permissions since it offers more flexibility
 *       and control.
 *       * +IpProtocol+ - (<tt>String</tt>) The IP protocol of this
 *         permission.
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
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method revokeSecurityGroupIngress(params, options)
 *   The RevokeSecurityGroupIngress operation revokes permissions from a
 *   security group. The permissions used to revoke must be specified
 *   using the same values used to grant the permissions.
 *   @param [Object] params
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
 *         permission.
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
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method runInstances(params, options)
 *   The RunInstances operation launches a specified number of instances.
 *   @param [Object] params
 *     * +ImageId+ - (*required*, <tt>String</tt>) Unique ID of a machine
 *       image, returned by a call to DescribeImages.
 *     * +MinCount+ - (*required*, <tt>Integer</tt>) Minimum number of
 *       instances to launch. If the value is more than Amazon EC2 can
 *       launch, no instances are launched at all.
 *     * +MaxCount+ - (*required*, <tt>Integer</tt>) Maximum number of
 *       instances to launch. If the value is more than Amazon EC2 can
 *       launch, the largest possible number above minCount will be
 *       launched instead.
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
 *       * +groupName+ - (<tt>String</tt>) The name of the PlacementGroup
 *         in which an Amazon EC2 instance runs. Placement groups are
 *         primarily used for launching High Performance Computing
 *         instances in the same group to ensure fast connection speeds.
 *       * +tenancy+ - (<tt>String</tt>) The allowed tenancy of instances
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
 *       * +ebs+ - (<tt>Object</tt>) Specifies parameters used to
 *         automatically setup Amazon EBS volumes when the instance is
 *         launched.
 *         * +snapshotId+ - (<tt>String</tt>) The ID of the snapshot from
 *           which the volume will be created.
 *         * +volumeSize+ - (<tt>Integer</tt>) The size of the volume, in
 *           gigabytes.
 *         * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies whether
 *           the Amazon EBS volume is deleted on instance termination.
 *         * +volumeType+ - (<tt>String</tt>)
 *         * +iops+ - (<tt>Integer</tt>)
 *       * +noDevice+ - (<tt>String</tt>) Specifies the device name to
 *         suppress during instance launch.
 *     * +Monitoring+ - (<tt>Object</tt>) Enables monitoring for the
 *       instance.
 *       * +enabled+ - (*required*, <tt>Boolean</tt>)
 *     * +SubnetId+ - (<tt>String</tt>) Specifies the subnet ID within
 *       which to launch the instance(s) for Amazon Virtual Private
 *       Cloud.
 *     * +disableApiTermination+ - (<tt>Boolean</tt>) Specifies whether
 *       the instance can be terminated using the APIs. You must modify
 *       this attribute before you can terminate any "locked" instances
 *       from the APIs.
 *     * +instanceInitiatedShutdownBehavior+ - (<tt>String</tt>)
 *       Specifies whether the instance's Amazon EBS volumes are stopped
 *       or terminated when the instance is shut down.
 *     * +license+ - (<tt>Object</tt>) Specifies active licenses in use
 *       and attached to an Amazon EC2 instance.
 *       * +pool+ - (<tt>String</tt>) The license pool from which to take
 *         a license when starting Amazon EC2 instances in the associated
 *         RunInstances request.
 *     * +privateIpAddress+ - (<tt>String</tt>) If you're using Amazon
 *       Virtual Private Cloud, you can optionally use this parameter to
 *       assign the instance a specific available IP address from the
 *       subnet.
 *     * +clientToken+ - (<tt>String</tt>) Unique, case-sensitive
 *       identifier you provide to ensure idempotency of the request. For
 *       more information, go to How to Ensure Idempotency in the Amazon
 *       Elastic Compute Cloud User Guide.
 *     * +additionalInfo+ - (<tt>String</tt>)
 *     * +networkInterfaces+ - (<tt>Array<Object></tt>)
 *       * +networkInterfaceId+ - (<tt>String</tt>)
 *       * +deviceIndex+ - (<tt>Integer</tt>)
 *       * +subnetId+ - (<tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +privateIpAddress+ - (<tt>String</tt>)
 *       * +groups+ - (<tt>Array<String></tt>)
 *       * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *       * +privateIpAddresses+ - (<tt>Array<Object></tt>)
 *         * +privateIpAddress+ - (*required*, <tt>String</tt>)
 *         * +primary+ - (<tt>Boolean</tt>)
 *       * +secondaryPrivateIpAddressCount+ - (<tt>Integer</tt>)
 *     * +iamInstanceProfile+ - (<tt>Object</tt>)
 *       * +arn+ - (<tt>String</tt>)
 *       * +name+ - (<tt>String</tt>)
 *     * +ebsOptimized+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Reservation+ - (<tt>Object</tt>) The newly created reservation,
 *       containing the new instances.
 *       * +ReservationId+ - (<tt>String</tt>) The unique ID of this
 *         reservation.
 *       * +OwnerId+ - (<tt>String</tt>) The AWS Access Key ID of the
 *         user who owns the reservation.
 *       * +RequesterId+ - (<tt>String</tt>) The unique ID of the user
 *         who requested the instances in this reservation.
 *       * +Groups+ - (<tt>Array<Object></tt>) The list of security
 *         groups requested for the instances in this reservation.
 *         * +GroupName+ - (<tt>String</tt>)
 *         * +groupId+ - (<tt>String</tt>)
 *       * +Instances+ - (<tt>Array<Object></tt>) The list of Amazon EC2
 *         instances included in this reservation.
 *         * +InstanceId+ - (<tt>String</tt>) Unique ID of the instance
 *           launched.
 *         * +ImageId+ - (<tt>String</tt>) Image ID of the AMI used to
 *           launch the instance.
 *         * +State+ - (<tt>Object</tt>) The current state of the
 *           instance.
 *           * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *             high byte is an opaque internal value and should be
 *             ignored. The low byte is set based on the state
 *             represented.
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
 *           with an associated key pair, this displays the key pair
 *           name.
 *         * +AmiLaunchIndex+ - (<tt>Integer</tt>) The AMI launch index,
 *           which can be used to find this instance within the launch
 *           group.
 *         * +ProductCodes+ - (<tt>Array<Object></tt>) Product codes
 *           attached to this instance.
 *           * +ProductCodeId+ - (<tt>String</tt>) The unique ID of an
 *             AWS DevPay product code.
 *           * +ProductCodeType+ - (<tt>String</tt>)
 *         * +InstanceType+ - (<tt>String</tt>) The instance type. For
 *           more information on instance types, please see the Amazon
 *           Elastic Compute Cloud Developer Guide.
 *         * +LaunchTime+ - (<tt>Date</tt>) The time this instance
 *           launched.
 *         * +Placement+ - (<tt>Object</tt>) The location where this
 *           instance launched.
 *           * +AvailabilityZone+ - (<tt>String</tt>) The availability
 *             zone in which an Amazon EC2 instance runs.
 *           * +groupName+ - (<tt>String</tt>) The name of the
 *             PlacementGroup in which an Amazon EC2 instance runs.
 *             Placement groups are primarily used for launching High
 *             Performance Computing instances in the same group to
 *             ensure fast connection speeds.
 *           * +tenancy+ - (<tt>String</tt>) The allowed tenancy of
 *             instances launched into the VPC. A value of default means
 *             instances can be launched with any tenancy; a value of
 *             dedicated means all instances launched into the VPC will
 *             be launched as dedicated tenancy regardless of the tenancy
 *             assigned to the instance at launch.
 *         * +KernelId+ - (<tt>String</tt>) Kernel associated with this
 *           instance.
 *         * +RamdiskId+ - (<tt>String</tt>) RAM disk associated with
 *           this instance.
 *         * +Platform+ - (<tt>String</tt>) Platform of the instance
 *           (e.g., Windows).
 *         * +Monitoring+ - (<tt>Object</tt>) Monitoring status for this
 *           instance.
 *           * +State+ - (<tt>String</tt>) The state of monitoring on an
 *             Amazon EC2 instance (ex: enabled, disabled).
 *         * +SubnetId+ - (<tt>String</tt>) Specifies the Amazon VPC
 *           subnet ID in which the instance is running.
 *         * +VpcId+ - (<tt>String</tt>) Specifies the Amazon VPC in
 *           which the instance is running.
 *         * +PrivateIpAddress+ - (<tt>String</tt>) Specifies the private
 *           IP address that is assigned to the instance (Amazon VPC).
 *         * +PublicIpAddress+ - (<tt>String</tt>) Specifies the IP
 *           address of the instance.
 *         * +stateReason+ - (<tt>Object</tt>) The reason for the state
 *           change.
 *           * +code+ - (<tt>String</tt>) Reason code for the state
 *             change.
 *           * +message+ - (<tt>String</tt>) Descriptive message for the
 *             state change.
 *         * +architecture+ - (<tt>String</tt>) The architecture of this
 *           instance.
 *         * +rootDeviceType+ - (<tt>String</tt>) The root device type
 *           used by the AMI. The AMI can use an Amazon EBS or instance
 *           store root device.
 *         * +rootDeviceName+ - (<tt>String</tt>) The root device name
 *           (e.g., /dev/sda1).
 *         * +blockDeviceMappings+ - (<tt>Array<Object></tt>) Block
 *           device mapping set.
 *           * +deviceName+ - (<tt>String</tt>) The device name (e.g.,
 *             /dev/sdh) at which the block device is exposed on the
 *             instance.
 *           * +ebs+ - (<tt>Object</tt>) The optional EBS device mapped
 *             to the specified device name.
 *             * +volumeId+ - (<tt>String</tt>) The ID of the EBS volume.
 *             * +status+ - (<tt>String</tt>) The status of the EBS
 *               volume.
 *             * +attachTime+ - (<tt>Date</tt>) The time at which the EBS
 *               volume was attached to the associated instance.
 *             * +deleteOnTermination+ - (<tt>Boolean</tt>) Specifies
 *               whether the Amazon EBS volume is deleted on instance
 *               termination.
 *         * +virtualizationType+ - (<tt>String</tt>)
 *         * +instanceLifecycle+ - (<tt>String</tt>)
 *         * +spotInstanceRequestId+ - (<tt>String</tt>)
 *         * +license+ - (<tt>Object</tt>)
 *           * +pool+ - (<tt>String</tt>) The license pool from which
 *             this license was used (ex: 'windows').
 *         * +clientToken+ - (<tt>String</tt>)
 *         * +tags+ - (<tt>Array<Object></tt>) A list of tags for the
 *           Instance.
 *           * +key+ - (<tt>String</tt>) The tag's key.
 *           * +value+ - (<tt>String</tt>) The tag's value.
 *         * +securityGroups+ - (<tt>Array<Object></tt>)
 *           * +GroupName+ - (<tt>String</tt>)
 *           * +groupId+ - (<tt>String</tt>)
 *         * +sourceDestCheck+ - (<tt>Boolean</tt>)
 *         * +hypervisor+ - (<tt>String</tt>)
 *         * +networkInterfaces+ - (<tt>Array<Object></tt>)
 *           * +networkInterfaceId+ - (<tt>String</tt>)
 *           * +subnetId+ - (<tt>String</tt>)
 *           * +vpcId+ - (<tt>String</tt>)
 *           * +description+ - (<tt>String</tt>)
 *           * +ownerId+ - (<tt>String</tt>)
 *           * +status+ - (<tt>String</tt>)
 *           * +privateIpAddress+ - (<tt>String</tt>)
 *           * +privateDnsName+ - (<tt>String</tt>)
 *           * +sourceDestCheck+ - (<tt>Boolean</tt>)
 *           * +groups+ - (<tt>Array<Object></tt>)
 *             * +GroupName+ - (<tt>String</tt>)
 *             * +groupId+ - (<tt>String</tt>)
 *           * +attachment+ - (<tt>Object</tt>)
 *             * +attachmentId+ - (<tt>String</tt>)
 *             * +deviceIndex+ - (<tt>Integer</tt>)
 *             * +status+ - (<tt>String</tt>)
 *             * +attachTime+ - (<tt>Date</tt>)
 *             * +deleteOnTermination+ - (<tt>Boolean</tt>)
 *           * +association+ - (<tt>Object</tt>)
 *             * +publicIp+ - (<tt>String</tt>)
 *             * +ipOwnerId+ - (<tt>String</tt>)
 *         * +iamInstanceProfile+ - (<tt>Object</tt>)
 *           * +arn+ - (<tt>String</tt>)
 *           * +id+ - (<tt>String</tt>)
 *         * +ebsOptimized+ - (<tt>Boolean</tt>)
 *
 * @!method startInstances(params, options)
 *   Starts an instance that uses an Amazon EBS volume as its root
 *   device. Instances that use Amazon EBS volumes as their root devices
 *   can be quickly stopped and started. When an instance is stopped, the
 *   compute resources are released and you are not billed for hourly
 *   instance usage. However, your root partition Amazon EBS volume
 *   remains, continues to persist your data, and you are charged for
 *   Amazon EBS volume usage. You can restart your instance at any time.
 *   @param [Object] params
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       Amazon EC2 instances to start.
 *     * +additionalInfo+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +startingInstances+ - (<tt>Array<Object></tt>) The list of the
 *       starting instances and details on how their state has changed.
 *       * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *         state changed.
 *       * +CurrentState+ - (<tt>Object</tt>) The current state of the
 *         specified instance.
 *         * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *           high byte is an opaque internal value and should be ignored.
 *           The low byte is set based on the state represented.
 *         * +Name+ - (<tt>String</tt>) The current state of the
 *           instance.
 *       * +PreviousState+ - (<tt>Object</tt>) The previous state of the
 *         specified instance.
 *         * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *           high byte is an opaque internal value and should be ignored.
 *           The low byte is set based on the state represented.
 *         * +Name+ - (<tt>String</tt>) The current state of the
 *           instance.
 *
 * @!method stopInstances(params, options)
 *   Stops an instance that uses an Amazon EBS volume as its root device.
 *   Instances that use Amazon EBS volumes as their root devices can be
 *   quickly stopped and started. When an instance is stopped, the
 *   compute resources are released and you are not billed for hourly
 *   instance usage. However, your root partition Amazon EBS volume
 *   remains, continues to persist your data, and you are charged for
 *   Amazon EBS volume usage. You can restart your instance at any time.
 *   @param [Object] params
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       Amazon EC2 instances to stop.
 *     * +force+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +stoppingInstances+ - (<tt>Array<Object></tt>) The list of the
 *       stopping instances and details on how their state has changed.
 *       * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *         state changed.
 *       * +CurrentState+ - (<tt>Object</tt>) The current state of the
 *         specified instance.
 *         * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *           high byte is an opaque internal value and should be ignored.
 *           The low byte is set based on the state represented.
 *         * +Name+ - (<tt>String</tt>) The current state of the
 *           instance.
 *       * +PreviousState+ - (<tt>Object</tt>) The previous state of the
 *         specified instance.
 *         * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *           high byte is an opaque internal value and should be ignored.
 *           The low byte is set based on the state represented.
 *         * +Name+ - (<tt>String</tt>) The current state of the
 *           instance.
 *
 * @!method terminateInstances(params, options)
 *   The TerminateInstances operation shuts down one or more instances.
 *   This operation is idempotent; if you terminate an instance more than
 *   once, each call will succeed.
 *   @param [Object] params
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       instances to terminate.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +TerminatingInstances+ - (<tt>Array<Object></tt>) The list of
 *       the terminating instances and details on how their state has
 *       changed.
 *       * +InstanceId+ - (<tt>String</tt>) The ID of the instance whose
 *         state changed.
 *       * +CurrentState+ - (<tt>Object</tt>) The current state of the
 *         specified instance.
 *         * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *           high byte is an opaque internal value and should be ignored.
 *           The low byte is set based on the state represented.
 *         * +Name+ - (<tt>String</tt>) The current state of the
 *           instance.
 *       * +PreviousState+ - (<tt>Object</tt>) The previous state of the
 *         specified instance.
 *         * +Code+ - (<tt>Integer</tt>) A 16-bit unsigned integer. The
 *           high byte is an opaque internal value and should be ignored.
 *           The low byte is set based on the state represented.
 *         * +Name+ - (<tt>String</tt>) The current state of the
 *           instance.
 *
 * @!method unassignPrivateIpAddresses(params, options)
 *   Calls the UnassignPrivateIpAddresses API operation.
 *   @param [Object] params
 *     * +networkInterfaceId+ - (*required*, <tt>String</tt>)
 *     * +privateIpAddresses+ - (*required*, <tt>Array<String></tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method unmonitorInstances(params, options)
 *   Disables monitoring for a running instance.
 *   @param [Object] params
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) The list of
 *       Amazon EC2 instances on which to disable monitoring.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +InstanceMonitorings+ - (<tt>Array<Object></tt>) A list of
 *       updated monitoring information for the instances specified in
 *       the request.
 *       * +InstanceId+ - (<tt>String</tt>) Instance ID.
 *       * +Monitoring+ - (<tt>Object</tt>) Monitoring state for the
 *         associated instance.
 *         * +State+ - (<tt>String</tt>) The state of monitoring on an
 *           Amazon EC2 instance (ex: enabled, disabled).
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
AWS.EC2.Client = inherit({});"
