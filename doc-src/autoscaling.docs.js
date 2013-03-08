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
 * ### Sending a Request Using AutoScaling
 *
 * ```js
 * svc = new AWS.AutoScaling();
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
 *   @option (see AWS.AutoScaling.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.AutoScaling.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.AutoScaling.Client
 *
 */
AWS.AutoScaling = inherit({})

/**
 * The low-level AutoScaling client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method createAutoScalingGroup(params, callback)
 *   Calls the CreateAutoScalingGroup API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Auto Scaling group.
 *     * `LaunchConfigurationName` &mdash; **required** &mdash;
 *       (`String`) The name of the launch configuration to use with the
 *       Auto Scaling group.
 *     * `MinSize` &mdash; **required** &mdash; (`Integer`) The minimum
 *       size of the Auto Scaling group.
 *     * `MaxSize` &mdash; **required** &mdash; (`Integer`) The maximum
 *       size of the Auto Scaling group.
 *     * `DesiredCapacity` &mdash; (`Integer`) The number of Amazon EC2
 *       instances that should be running in the group.
 *     * `DefaultCooldown` &mdash; (`Integer`) The amount of time, in
 *       seconds, after a scaling activity completes before any further
 *       trigger-related scaling activities can start.
 *     * `AvailabilityZones` &mdash; (`Array<String>`) A list of
 *       Availability Zones for the Auto Scaling group.
 *     * `LoadBalancerNames` &mdash; (`Array<String>`) A list of load
 *       balancers to use.
 *     * `HealthCheckType` &mdash; (`String`) The service you want the
 *       health status from, Amazon EC2 or Elastic Load Balancer. Valid
 *       values are EC2 or ELB.
 *     * `HealthCheckGracePeriod` &mdash; (`Integer`) Length of time in
 *       seconds after a new Amazon EC2 instance comes into service that
 *       Auto Scaling starts checking its health.
 *     * `PlacementGroup` &mdash; (`String`) Physical location of your
 *       cluster placement group created in Amazon EC2. For more
 *       information about cluster placement group, see Using Cluster
 *       Instances
 *     * `VPCZoneIdentifier` &mdash; (`String`) A comma-separated list of
 *       subnet identifiers of Amazon Virtual Private Clouds (Amazon
 *       VPCs). When you specify subnets and Availability Zones with this
 *       call, ensure that the subnets' Availability Zones match the
 *       Availability Zones specified.
 *     * `TerminationPolicies` &mdash; (`Array<String>`) A standalone
 *       termination policy or a list of termination policies used to
 *       select the instance to terminate. The policies are executed in
 *       the order that they are listed. For more information on
 *       configuring a termination policy for your Auto Scaling group, go
 *       to Instance Termination Policy for Your Auto Scaling Group in
 *       the the Auto Scaling Developer Guide.
 *     * `Tags` &mdash; (`Array<Object>`) The tag to be created or
 *       updated. Each tag should be defined by its resource type,
 *       resource ID, key, value, and a propagate flag. Valid values:
 *       key=value, value=value, propagate=true or false. Value and
 *       propagate are optional parameters.
 *       * `ResourceId` &mdash; (`String`) The name of the Auto Scaling
 *         group.
 *       * `ResourceType` &mdash; (`String`) The kind of resource to
 *         which the tag is applied. Currently, Auto Scaling supports the
 *         auto-scaling-group resource type.
 *       * `Key` &mdash; **required** &mdash; (`String`) The key of the
 *         tag.
 *       * `Value` &mdash; (`String`) The value of the tag.
 *       * `PropagateAtLaunch` &mdash; (`Boolean`) Specifies whether the
 *         new tag will be applied to instances launched after the tag is
 *         created. The same behavior applies to updates: If you change a
 *         tag, the changed tag will be applied to all instances launched
 *         after you made the change.
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
 * @!method createLaunchConfiguration(params, callback)
 *   Calls the CreateLaunchConfiguration API operation.
 *   @param params [Object]
 *     * `LaunchConfigurationName` &mdash; **required** &mdash;
 *       (`String`) The name of the launch configuration to create.
 *     * `ImageId` &mdash; **required** &mdash; (`String`) Unique ID of
 *       the Amazon Machine Image (AMI) which was assigned during
 *       registration. For more information about Amazon EC2 images,
 *       please see Amazon EC2 product documentation.
 *     * `KeyName` &mdash; (`String`) The name of the Amazon EC2 key
 *       pair.
 *     * `SecurityGroups` &mdash; (`Array<String>`) The names of the
 *       security groups with which to associate Amazon EC2 or Amazon VPC
 *       instances. Specify Amazon EC2 security groups using security
 *       group names, such as websrv. Specify Amazon VPC security groups
 *       using security group IDs, such as sg-12345678. For more
 *       information about Amazon EC2 security groups, go to Using
 *       Security Groups in the Amazon EC2 product documentation. For
 *       more information about Amazon VPC security groups, go to
 *       Security Groups in the Amazon VPC product documentation.
 *     * `UserData` &mdash; (`String`) The user data available to the
 *       launched Amazon EC2 instances. For more information about Amazon
 *       EC2 user data, please see Amazon EC2 product documentation.
 *     * `InstanceType` &mdash; **required** &mdash; (`String`) The
 *       instance type of the Amazon EC2 instance. For more information
 *       about Amazon EC2 instance types, please see Amazon EC2 product
 *       documentation
 *     * `KernelId` &mdash; (`String`) The ID of the kernel associated
 *       with the Amazon EC2 AMI.
 *     * `RamdiskId` &mdash; (`String`) The ID of the RAM disk associated
 *       with the Amazon EC2 AMI.
 *     * `BlockDeviceMappings` &mdash; (`Array<Object>`) A list of
 *       mappings that specify how block devices are exposed to the
 *       instance. Each mapping is made up of a VirtualName, a
 *       DeviceName, and an ebs data structure that contains information
 *       about the associated Elastic Block Storage volume. For more
 *       information about Amazon EC2 BlockDeviceMappings, go to Block
 *       Device Mapping in the Amazon EC2 product documentation.
 *       * `VirtualName` &mdash; (`String`) The virtual name associated
 *         with the device.
 *       * `DeviceName` &mdash; **required** &mdash; (`String`) The name
 *         of the device within Amazon EC2.
 *       * `Ebs` &mdash; (`Object`) The Elastic Block Storage volume
 *         information.
 *         * `SnapshotId` &mdash; (`String`) The snapshot ID.
 *         * `VolumeSize` &mdash; (`Integer`) The volume size, in
 *           gigabytes.
 *     * `InstanceMonitoring` &mdash; (`Object`) Enables detailed
 *       monitoring, which is enabled by default. When detailed
 *       monitoring is enabled, CloudWatch will generate metrics every
 *       minute and your account will be charged a fee. When you disable
 *       detailed monitoring, by specifying False, Cloudwatch will
 *       generate metrics every 5 minutes. For information about
 *       monitoring, see the Amazon CloudWatch product page.
 *       * `Enabled` &mdash; (`Boolean`) If True, instance monitoring is
 *         enabled.
 *     * `SpotPrice` &mdash; (`String`) The maximum hourly price to be
 *       paid for any Spot Instance launched to fulfill the request. Spot
 *       Instances are launched when the price you specify exceeds the
 *       current Spot market price. For more information on launching
 *       Spot Instances, go to Using Auto Scaling to Launch Spot
 *       Instances in the Auto Scaling Developer Guide.
 *     * `IamInstanceProfile` &mdash; (`String`) The name or the Amazon
 *       Resource Name (ARN) of the instance profile associated with the
 *       IAM role for the instance. For information on launching EC2
 *       instances with an IAM role, go to Launching Auto Scaling
 *       Instances With an IAM Role in the Auto Scaling Developer Guide.
 *     * `EbsOptimized` &mdash; (`Boolean`)
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
 * @!method createOrUpdateTags(params, callback)
 *   Calls the CreateOrUpdateTags API operation.
 *   @param params [Object]
 *     * `Tags` &mdash; **required** &mdash; (`Array<Object>`) The tag to
 *       be created or updated. Each tag should be defined by its
 *       resource type, resource ID, key, value, and a propagate flag.
 *       The resource type and resource ID identify the type and name of
 *       resource for which the tag is created. Currently,
 *       auto-scaling-group is the only supported resource type. The
 *       valid value for the resource ID is groupname. The
 *       PropagateAtLaunch flag defines whether the new tag will be
 *       applied to instances launched by the Auto Scaling group. Valid
 *       values are true or false. However, instances that are already
 *       running will not get the new or updated tag. Likewise, when you
 *       modify a tag, the updated version will be applied only to new
 *       instances launched by the Auto Scaling group after the change.
 *       Running instances that had the previous version of the tag will
 *       continue to have the older tag. When you create a tag and a tag
 *       of the same name already exists, the operation overwrites the
 *       previous tag definition, but you will not get an error message.
 *       * `ResourceId` &mdash; (`String`) The name of the Auto Scaling
 *         group.
 *       * `ResourceType` &mdash; (`String`) The kind of resource to
 *         which the tag is applied. Currently, Auto Scaling supports the
 *         auto-scaling-group resource type.
 *       * `Key` &mdash; **required** &mdash; (`String`) The key of the
 *         tag.
 *       * `Value` &mdash; (`String`) The value of the tag.
 *       * `PropagateAtLaunch` &mdash; (`Boolean`) Specifies whether the
 *         new tag will be applied to instances launched after the tag is
 *         created. The same behavior applies to updates: If you change a
 *         tag, the changed tag will be applied to all instances launched
 *         after you made the change.
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
 * @!method deleteAutoScalingGroup(params, callback)
 *   Calls the DeleteAutoScalingGroup API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Auto Scaling group.
 *     * `ForceDelete` &mdash; (`Boolean`) Starting with API version
 *       2011-01-01, specifies that the Auto Scaling group will be
 *       deleted along with all instances associated with the group,
 *       without waiting for all instances to be terminated.
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
 * @!method deleteLaunchConfiguration(params, callback)
 *   Calls the DeleteLaunchConfiguration API operation.
 *   @param params [Object]
 *     * `LaunchConfigurationName` &mdash; **required** &mdash;
 *       (`String`) The name of the launch configuration.
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
 * @!method deleteNotificationConfiguration(params, callback)
 *   Calls the DeleteNotificationConfiguration API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Auto Scaling group.
 *     * `TopicARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the Amazon Simple Notification Service
 *       (SNS) topic.
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
 * @!method deletePolicy(params, callback)
 *   Calls the DeletePolicy API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *       Scaling group.
 *     * `PolicyName` &mdash; **required** &mdash; (`String`) The name or
 *       PolicyARN of the policy you want to delete.
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
 * @!method deleteScheduledAction(params, callback)
 *   Calls the DeleteScheduledAction API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *       Scaling group.
 *     * `ScheduledActionName` &mdash; **required** &mdash; (`String`)
 *       The name of the action you want to delete.
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
 *     * `Tags` &mdash; **required** &mdash; (`Array<Object>`) Each tag
 *       should be defined by its resource type, resource ID, key, value,
 *       and a propagate flag. Valid values are: Resource type =
 *       auto-scaling-group, Resource ID = AutoScalingGroupName,
 *       key=value, value=value, propagate=true or false.
 *       * `ResourceId` &mdash; (`String`) The name of the Auto Scaling
 *         group.
 *       * `ResourceType` &mdash; (`String`) The kind of resource to
 *         which the tag is applied. Currently, Auto Scaling supports the
 *         auto-scaling-group resource type.
 *       * `Key` &mdash; **required** &mdash; (`String`) The key of the
 *         tag.
 *       * `Value` &mdash; (`String`) The value of the tag.
 *       * `PropagateAtLaunch` &mdash; (`Boolean`) Specifies whether the
 *         new tag will be applied to instances launched after the tag is
 *         created. The same behavior applies to updates: If you change a
 *         tag, the changed tag will be applied to all instances launched
 *         after you made the change.
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
 * @!method describeAdjustmentTypes(params, callback)
 *   Calls the DescribeAdjustmentTypes API operation.
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
 *       * `AdjustmentTypes` &mdash; (`Array<Object>`) A list of specific
 *         policy adjustment types.
 *         * `AdjustmentType` &mdash; (`String`) A policy adjustment type.
 *           Valid values are ChangeInCapacity, ExactCapacity, and
 *           PercentChangeInCapacity.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAutoScalingGroups(params, callback)
 *   Calls the DescribeAutoScalingGroups API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupNames` &mdash; (`Array<String>`) A list of Auto
 *       Scaling group names.
 *     * `NextToken` &mdash; (`String`) A string that marks the start of
 *       the next batch of returned results.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to return.
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
 *       * `AutoScalingGroups` &mdash; (`Array<Object>`) A list of Auto
 *         Scaling groups.
 *         * `AutoScalingGroupName` &mdash; (`String`) Specifies the name
 *           of the group.
 *         * `AutoScalingGroupARN` &mdash; (`String`) The Amazon Resource
 *           Name (ARN) of the Auto Scaling group.
 *         * `LaunchConfigurationName` &mdash; (`String`) Specifies the
 *           name of the associated LaunchConfiguration.
 *         * `MinSize` &mdash; (`Integer`) Contains the minimum size of the
 *           Auto Scaling group.
 *         * `MaxSize` &mdash; (`Integer`) Contains the maximum size of the
 *           Auto Scaling group.
 *         * `DesiredCapacity` &mdash; (`Integer`) Specifies the desired
 *           capacity for the Auto Scaling group.
 *         * `DefaultCooldown` &mdash; (`Integer`) The number of seconds
 *           after a scaling activity completes before any further scaling
 *           activities can start.
 *         * `AvailabilityZones` &mdash; (`Array<String>`) Contains a list
 *           of Availability Zones for the group.
 *         * `LoadBalancerNames` &mdash; (`Array<String>`) A list of load
 *           balancers associated with this Auto Scaling group.
 *         * `HealthCheckType` &mdash; (`String`) The service of interest
 *           for the health status check, either "EC2" for Amazon EC2 or
 *           "ELB" for Elastic Load Balancing.
 *         * `HealthCheckGracePeriod` &mdash; (`Integer`) The length of
 *           time that Auto Scaling waits before checking an instance's
 *           health status. The grace period begins when an instance comes
 *           into service.
 *         * `Instances` &mdash; (`Array<Object>`) Provides a summary list
 *           of Amazon EC2 instances.
 *           * `InstanceId` &mdash; (`String`) Specifies the ID of the
 *             Amazon EC2 instance.
 *           * `AvailabilityZone` &mdash; (`String`) Availability Zones
 *             associated with this instance.
 *           * `LifecycleState` &mdash; (`String`) Contains a description
 *             of the current lifecycle state.
 *           * `HealthStatus` &mdash; (`String`) The instance's health
 *             status.
 *           * `LaunchConfigurationName` &mdash; (`String`) The launch
 *             configuration associated with this instance.
 *         * `CreatedTime` &mdash; (`Date`) Specifies the date and time the
 *           Auto Scaling group was created.
 *         * `SuspendedProcesses` &mdash; (`Array<Object>`) Suspended
 *           processes associated with this Auto Scaling group.
 *           * `ProcessName` &mdash; (`String`) The name of the suspended
 *             process.
 *           * `SuspensionReason` &mdash; (`String`) The reason that the
 *             process was suspended.
 *         * `PlacementGroup` &mdash; (`String`) The name of the cluster
 *           placement group, if applicable. For more information, go to
 *           Using Cluster Instances in the Amazon EC2 User Guide.
 *         * `VPCZoneIdentifier` &mdash; (`String`) The subnet identifier
 *           for the Amazon VPC connection, if applicable. You can specify
 *           several subnets in a comma-separated list. When you specify
 *           VPCZoneIdentifier with AvailabilityZones, ensure that the
 *           subnets' Availability Zones match the values you specify for
 *           AvailabilityZones.
 *         * `EnabledMetrics` &mdash; (`Array<Object>`) A list of metrics
 *           enabled for this Auto Scaling group.
 *           * `Metric` &mdash; (`String`) The name of the enabled metric.
 *           * `Granularity` &mdash; (`String`) The granularity of the
 *             enabled metric.
 *         * `Status` &mdash; (`String`) A list of status conditions for
 *           the Auto Scaling group.
 *         * `Tags` &mdash; (`Array<Object>`) A list of tags for the Auto
 *           Scaling group.
 *           * `ResourceId` &mdash; (`String`) The name of the Auto Scaling
 *             group.
 *           * `ResourceType` &mdash; (`String`) The kind of resource to
 *             which the tag is applied. Currently, Auto Scaling supports
 *             the auto-scaling-group resource type.
 *           * `Key` &mdash; (`String`) The key of the tag.
 *           * `Value` &mdash; (`String`) The value of the tag.
 *           * `PropagateAtLaunch` &mdash; (`Boolean`) Specifies whether
 *             the new tag will be applied to instances launched after the
 *             tag is created. The same behavior applies to updates: If you
 *             change a tag, the changed tag will be applied to all
 *             instances launched after you made the change.
 *         * `TerminationPolicies` &mdash; (`Array<String>`) A standalone
 *           termination policy or a list of termination policies for this
 *           Auto Scaling group.
 *       * `NextToken` &mdash; (`String`) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAutoScalingInstances(params, callback)
 *   Calls the DescribeAutoScalingInstances API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; (`Array<String>`) The list of Auto Scaling
 *       instances to describe. If this list is omitted, all auto scaling
 *       instances are described. The list of requested instances cannot
 *       contain more than 50 items. If unknown instances are requested,
 *       they are ignored with no error.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of Auto
 *       Scaling instances to be described with each call.
 *     * `NextToken` &mdash; (`String`) The token returned by a previous
 *       call to indicate that there is more data available.
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
 *       * `AutoScalingInstances` &mdash; (`Array<Object>`) A list of Auto
 *         Scaling instances.
 *         * `InstanceId` &mdash; (`String`) The instance ID of the Amazon
 *           EC2 instance.
 *         * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *           Scaling group associated with this instance.
 *         * `AvailabilityZone` &mdash; (`String`) The Availability Zone in
 *           which this instance resides.
 *         * `LifecycleState` &mdash; (`String`) The life cycle state of
 *           this instance.
 *         * `HealthStatus` &mdash; (`String`) The health status of this
 *           instance. "Healthy" means that the instance is healthy and
 *           should remain in service. "Unhealthy" means that the instance
 *           is unhealthy. Auto Scaling should terminate and replace it.
 *         * `LaunchConfigurationName` &mdash; (`String`) The launch
 *           configuration associated with this instance.
 *       * `NextToken` &mdash; (`String`) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAutoScalingNotificationTypes(params, callback)
 *   Calls the DescribeAutoScalingNotificationTypes API operation.
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
 *       * `AutoScalingNotificationTypes` &mdash; (`Array<String>`)
 *         Notification types supported by Auto Scaling. They are:
 *         autoscaling:EC2_INSTANCE_LAUNCH,
 *         autoscaling:EC2_INSTANCE_LAUNCH_ERROR,
 *         autoscaling:EC2_INSTANCE_TERMINATE,
 *         autoscaling:EC2_INSTANCE_TERMINATE_ERROR,
 *         autoscaling:TEST_NOTIFICATION
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLaunchConfigurations(params, callback)
 *   Calls the DescribeLaunchConfigurations API operation.
 *   @param params [Object]
 *     * `LaunchConfigurationNames` &mdash; (`Array<String>`) A list of
 *       launch configuration names.
 *     * `NextToken` &mdash; (`String`) A string that marks the start of
 *       the next batch of returned results.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of launch
 *       configurations. The default is 100.
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
 *       * `LaunchConfigurations` &mdash; (`Array<Object>`) A list of
 *         launch configurations.
 *         * `LaunchConfigurationName` &mdash; (`String`) Specifies the
 *           name of the launch configuration.
 *         * `LaunchConfigurationARN` &mdash; (`String`) The launch
 *           configuration's Amazon Resource Name (ARN).
 *         * `ImageId` &mdash; (`String`) Provides the unique ID of the
 *           Amazon Machine Image (AMI) that was assigned during
 *           registration.
 *         * `KeyName` &mdash; (`String`) Provides the name of the Amazon
 *           EC2 key pair.
 *         * `SecurityGroups` &mdash; (`Array<String>`) A description of
 *           the security groups to associate with the Amazon EC2
 *           instances.
 *         * `UserData` &mdash; (`String`) The user data available to the
 *           launched Amazon EC2 instances.
 *         * `InstanceType` &mdash; (`String`) Specifies the instance type
 *           of the Amazon EC2 instance.
 *         * `KernelId` &mdash; (`String`) Provides the ID of the kernel
 *           associated with the Amazon EC2 AMI.
 *         * `RamdiskId` &mdash; (`String`) Provides ID of the RAM disk
 *           associated with the Amazon EC2 AMI.
 *         * `BlockDeviceMappings` &mdash; (`Array<Object>`) Specifies how
 *           block devices are exposed to the instance. Each mapping is
 *           made up of a virtualName and a deviceName.
 *           * `VirtualName` &mdash; (`String`) The virtual name associated
 *             with the device.
 *           * `DeviceName` &mdash; (`String`) The name of the device
 *             within Amazon EC2.
 *           * `Ebs` &mdash; (`Object`) The Elastic Block Storage volume
 *             information.
 *             * `SnapshotId` &mdash; (`String`) The snapshot ID.
 *             * `VolumeSize` &mdash; (`Integer`) The volume size, in
 *               gigabytes.
 *         * `InstanceMonitoring` &mdash; (`Object`) Controls whether
 *           instances in this group are launched with detailed monitoring
 *           or not.
 *           * `Enabled` &mdash; (`Boolean`) If True, instance monitoring
 *             is enabled.
 *         * `SpotPrice` &mdash; (`String`) Specifies the price to bid when
 *           launching Spot Instances.
 *         * `IamInstanceProfile` &mdash; (`String`) Provides the name or
 *           the Amazon Resource Name (ARN) of the instance profile
 *           associated with the IAM role for the instance. The instance
 *           profile contains the IAM role.
 *         * `CreatedTime` &mdash; (`Date`) Provides the creation date and
 *           time for this launch configuration.
 *         * `EbsOptimized` &mdash; (`Boolean`)
 *       * `NextToken` &mdash; (`String`) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeMetricCollectionTypes(params, callback)
 *   Calls the DescribeMetricCollectionTypes API operation.
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
 *       * `Metrics` &mdash; (`Array<Object>`) The list of Metrics
 *         collected.The following metrics are supported: GroupMinSize
 *         GroupMaxSize GroupDesiredCapacity GroupInServiceInstances
 *         GroupPendingInstances GroupTerminatingInstances
 *         GroupTotalInstances
 *         * `Metric` &mdash; (`String`)
 *       * `Granularities` &mdash; (`Array<Object>`) A list of
 *         granularities for the listed Metrics.
 *         * `Granularity` &mdash; (`String`) The granularity of a Metric.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeNotificationConfigurations(params, callback)
 *   Calls the DescribeNotificationConfigurations API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupNames` &mdash; (`Array<String>`) The name of
 *       the Auto Scaling group.
 *     * `NextToken` &mdash; (`String`) A string that is used to mark the
 *       start of the next batch of returned results for pagination.
 *     * `MaxRecords` &mdash; (`Integer`) Maximum number of records to be
 *       returned.
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
 *       * `NotificationConfigurations` &mdash; (`Array<Object>`) The list
 *         of notification configurations.
 *         * `AutoScalingGroupName` &mdash; (`String`) Specifies the Auto
 *           Scaling group name.
 *         * `TopicARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the Amazon Simple Notification Service (SNS) topic.
 *         * `NotificationType` &mdash; (`String`) The types of events for
 *           an action to start.
 *       * `NextToken` &mdash; (`String`) A string that is used to mark the
 *         start of the next batch of returned results for pagination.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describePolicies(params, callback)
 *   Calls the DescribePolicies API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *       Scaling group.
 *     * `PolicyNames` &mdash; (`Array<String>`) A list of policy names
 *       or policy ARNs to be described. If this list is omitted, all
 *       policy names are described. If an auto scaling group name is
 *       provided, the results are limited to that group. The list of
 *       requested policy names cannot contain more than 50 items. If
 *       unknown policy names are requested, they are ignored with no
 *       error.
 *     * `NextToken` &mdash; (`String`) A string that is used to mark the
 *       start of the next batch of returned results for pagination.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of policies
 *       that will be described with each call.
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
 *       * `ScalingPolicies` &mdash; (`Array<Object>`) A list of scaling
 *         policies.
 *         * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *           Scaling group associated with this scaling policy.
 *         * `PolicyName` &mdash; (`String`) The name of the scaling
 *           policy.
 *         * `ScalingAdjustment` &mdash; (`Integer`) The number associated
 *           with the specified adjustment type. A positive value adds to
 *           the current capacity and a negative value removes from the
 *           current capacity.
 *         * `AdjustmentType` &mdash; (`String`) Specifies whether the
 *           ScalingAdjustment is an absolute number or a percentage of the
 *           current capacity. Valid values are ChangeInCapacity,
 *           ExactCapacity, and PercentChangeInCapacity.
 *         * `Cooldown` &mdash; (`Integer`) The amount of time, in seconds,
 *           after a scaling activity completes before any further
 *           trigger-related scaling activities can start.
 *         * `PolicyARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the policy.
 *         * `Alarms` &mdash; (`Array<Object>`) A list of CloudWatch Alarms
 *           related to the policy.
 *           * `AlarmName` &mdash; (`String`) The name of the alarm.
 *           * `AlarmARN` &mdash; (`String`) The Amazon Resource Name (ARN)
 *             of the alarm.
 *         * `MinAdjustmentStep` &mdash; (`Integer`) Changes the
 *           DesiredCapacity of the Auto Scaling group by at least the
 *           specified number of instances.
 *       * `NextToken` &mdash; (`String`) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeScalingActivities(params, callback)
 *   Calls the DescribeScalingActivities API operation.
 *   @param params [Object]
 *     * `ActivityIds` &mdash; (`Array<String>`) A list containing the
 *       activity IDs of the desired scaling activities. If this list is
 *       omitted, all activities are described. If an
 *       AutoScalingGroupName is provided, the results are limited to
 *       that group. The list of requested activities cannot contain more
 *       than 50 items. If unknown activities are requested, they are
 *       ignored with no error.
 *     * `AutoScalingGroupName` &mdash; (`String`) The name of the
 *       AutoScalingGroup.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of scaling
 *       activities to return.
 *     * `NextToken` &mdash; (`String`) A string that marks the start of
 *       the next batch of returned results for pagination.
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
 *       * `Activities` &mdash; (`Array<Object>`) A list of the requested
 *         scaling activities.
 *         * `ActivityId` &mdash; (`String`) Specifies the ID of the
 *           activity.
 *         * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *           Scaling group.
 *         * `Description` &mdash; (`String`) Contains a friendly, more
 *           verbose description of the scaling activity.
 *         * `Cause` &mdash; (`String`) Contains the reason the activity
 *           was begun.
 *         * `StartTime` &mdash; (`Date`) Provides the start time of this
 *           activity.
 *         * `EndTime` &mdash; (`Date`) Provides the end time of this
 *           activity.
 *         * `StatusCode` &mdash; (`String`) Contains the current status of
 *           the activity.
 *         * `StatusMessage` &mdash; (`String`) Contains a friendly, more
 *           verbose description of the activity status.
 *         * `Progress` &mdash; (`Integer`) Specifies a value between 0 and
 *           100 that indicates the progress of the activity.
 *         * `Details` &mdash; (`String`) Contains details of the scaling
 *           activity.
 *       * `NextToken` &mdash; (`String`) Acts as a paging mechanism for
 *         large result sets. Set to a non-empty string if there are
 *         additional results waiting to be returned. Pass this in to
 *         subsequent calls to return additional results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeScalingProcessTypes(params, callback)
 *   Calls the DescribeScalingProcessTypes API operation.
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
 *       * `Processes` &mdash; (`Array<Object>`) A list of ProcessType
 *         names.
 *         * `ProcessName` &mdash; (`String`) The name of a process.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeScheduledActions(params, callback)
 *   Calls the DescribeScheduledActions API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *       Scaling group.
 *     * `ScheduledActionNames` &mdash; (`Array<String>`) A list of
 *       scheduled actions to be described. If this list is omitted, all
 *       scheduled actions are described. The list of requested scheduled
 *       actions cannot contain more than 50 items. If an auto scaling
 *       group name is provided, the results are limited to that group.
 *       If unknown scheduled actions are requested, they are ignored
 *       with no error.
 *     * `StartTime` &mdash; (`Date`) The earliest scheduled start time
 *       to return. If scheduled action names are provided, this field
 *       will be ignored.
 *     * `EndTime` &mdash; (`Date`) The latest scheduled start time to
 *       return. If scheduled action names are provided, this field is
 *       ignored.
 *     * `NextToken` &mdash; (`String`) A string that marks the start of
 *       the next batch of returned results.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of scheduled
 *       actions to return.
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
 *       * `ScheduledUpdateGroupActions` &mdash; (`Array<Object>`) A list
 *         of scheduled actions designed to update an Auto Scaling group.
 *         * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *           Scaling group to be updated.
 *         * `ScheduledActionName` &mdash; (`String`) The name of this
 *           scheduled action.
 *         * `ScheduledActionARN` &mdash; (`String`) The Amazon Resource
 *           Name (ARN) of this scheduled action.
 *         * `Time` &mdash; (`Date`) Time is deprecated. The time that the
 *           action is scheduled to begin. Time is an alias for StartTime.
 *         * `StartTime` &mdash; (`Date`) The time that the action is
 *           scheduled to begin. This value can be up to one month in the
 *           future. When StartTime and EndTime are specified with
 *           Recurrence, they form the boundaries of when the recurring
 *           action will start and stop.
 *         * `EndTime` &mdash; (`Date`) The time that the action is
 *           scheduled to end. This value can be up to one month in the
 *           future.
 *         * `Recurrence` &mdash; (`String`) The regular schedule that an
 *           action occurs.
 *         * `MinSize` &mdash; (`Integer`) The minimum size of the Auto
 *           Scaling group.
 *         * `MaxSize` &mdash; (`Integer`) The maximum size of the Auto
 *           Scaling group.
 *         * `DesiredCapacity` &mdash; (`Integer`) The number of instances
 *           you prefer to maintain in your Auto Scaling group.
 *       * `NextToken` &mdash; (`String`) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTags(params, callback)
 *   Calls the DescribeTags API operation.
 *   @param params [Object]
 *     * `Filters` &mdash; (`Array<Object>`) The value of the filter type
 *       used to identify the tags to be returned. For example, you can
 *       filter so that tags are returned according to Auto Scaling
 *       group, the key and value, or whether the new tag will be applied
 *       to instances launched after the tag is created
 *       (PropagateAtLaunch).
 *       * `Name` &mdash; (`String`) The name of the filter. Valid Name
 *         values are: "auto-scaling-group", "key", "value", and
 *         "propagate-at-launch".
 *       * `Values` &mdash; (`Array<String>`) The value of the filter.
 *     * `NextToken` &mdash; (`String`) A string that marks the start of
 *       the next batch of returned results.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to return.
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
 *       * `Tags` &mdash; (`Array<Object>`) The list of tags.
 *         * `ResourceId` &mdash; (`String`) The name of the Auto Scaling
 *           group.
 *         * `ResourceType` &mdash; (`String`) The kind of resource to
 *           which the tag is applied. Currently, Auto Scaling supports the
 *           auto-scaling-group resource type.
 *         * `Key` &mdash; (`String`) The key of the tag.
 *         * `Value` &mdash; (`String`) The value of the tag.
 *         * `PropagateAtLaunch` &mdash; (`Boolean`) Specifies whether the
 *           new tag will be applied to instances launched after the tag is
 *           created. The same behavior applies to updates: If you change a
 *           tag, the changed tag will be applied to all instances launched
 *           after you made the change.
 *       * `NextToken` &mdash; (`String`) A string used to mark the start
 *         of the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTerminationPolicyTypes(params, callback)
 *   Calls the DescribeTerminationPolicyTypes API operation.
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
 *       * `TerminationPolicyTypes` &mdash; (`Array<String>`) Termination
 *         policies supported by Auto Scaling. They are: OldestInstance,
 *         OldestLaunchConfiguration, NewestInstance,
 *         ClosestToNextInstanceHour, Default
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method disableMetricsCollection(params, callback)
 *   Calls the DisableMetricsCollection API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name or ARN of the Auto Scaling Group.
 *     * `Metrics` &mdash; (`Array<String>`) The list of metrics to
 *       disable. If no metrics are specified, all metrics are disabled.
 *       The following metrics are supported: GroupMinSize GroupMaxSize
 *       GroupDesiredCapacity GroupInServiceInstances
 *       GroupPendingInstances GroupTerminatingInstances
 *       GroupTotalInstances
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
 * @!method enableMetricsCollection(params, callback)
 *   Calls the EnableMetricsCollection API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name or ARN of the Auto Scaling group.
 *     * `Metrics` &mdash; (`Array<String>`) The list of metrics to
 *       collect. If no metrics are specified, all metrics are enabled.
 *       The following metrics are supported: GroupMinSize GroupMaxSize
 *       GroupDesiredCapacity GroupInServiceInstances
 *       GroupPendingInstances GroupTerminatingInstances
 *       GroupTotalInstances
 *     * `Granularity` &mdash; **required** &mdash; (`String`) The
 *       granularity to associate with the metrics to collect. Currently,
 *       the only legal granularity is "1Minute".
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
 * @!method executePolicy(params, callback)
 *   Calls the ExecutePolicy API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; (`String`) The name or ARN of the
 *       Auto Scaling group.
 *     * `PolicyName` &mdash; **required** &mdash; (`String`) The name or
 *       PolicyARN of the policy you want to run.
 *     * `HonorCooldown` &mdash; (`Boolean`) Set to True if you want Auto
 *       Scaling to reject this request when the Auto Scaling group is in
 *       cooldown.
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
 * @!method putNotificationConfiguration(params, callback)
 *   Calls the PutNotificationConfiguration API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Auto Scaling group.
 *     * `TopicARN` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the Amazon Simple Notification Service
 *       (SNS) topic.
 *     * `NotificationTypes` &mdash; **required** &mdash;
 *       (`Array<String>`) The type of events that will trigger the
 *       notification. For more information, go to
 *       DescribeAutoScalingNotificationTypes.
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
 * @!method putScalingPolicy(params, callback)
 *   Calls the PutScalingPolicy API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name or ARN of the Auto Scaling group.
 *     * `PolicyName` &mdash; **required** &mdash; (`String`) The name of
 *       the policy you want to create or update.
 *     * `ScalingAdjustment` &mdash; **required** &mdash; (`Integer`) The
 *       number of instances by which to scale. AdjustmentType determines
 *       the interpretation of this number (e.g., as an absolute number
 *       or as a percentage of the existing Auto Scaling group size). A
 *       positive increment adds to the current capacity and a negative
 *       value removes from the current capacity.
 *     * `AdjustmentType` &mdash; **required** &mdash; (`String`)
 *       Specifies whether the ScalingAdjustment is an absolute number or
 *       a percentage of the current capacity. Valid values are
 *       ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
 *     * `Cooldown` &mdash; (`Integer`) The amount of time, in seconds,
 *       after a scaling activity completes before any further
 *       trigger-related scaling activities can start.
 *     * `MinAdjustmentStep` &mdash; (`Integer`) Used with AdjustmentType
 *       with the value PercentChangeInCapacity, the scaling policy
 *       changes the DesiredCapacity of the Auto Scaling group by at
 *       least the number of instances specified in the value. You will
 *       get a ValidationError if you use MinAdjustmentStep on a policy
 *       with an AdjustmentType other than PercentChangeInCapacity.
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
 *       * `PolicyARN` &mdash; (`String`) A policy's Amazon Resource Name
 *         (ARN).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putScheduledUpdateGroupAction(params, callback)
 *   Calls the PutScheduledUpdateGroupAction API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name or ARN of the Auto Scaling group.
 *     * `ScheduledActionName` &mdash; **required** &mdash; (`String`)
 *       The name of this scaling action.
 *     * `Time` &mdash; (`Date`) Time is deprecated. The time for this
 *       action to start. Time is an alias for StartTime and can be
 *       specified instead of StartTime, or vice versa. If both Time and
 *       StartTime are specified, their values should be identical.
 *       Otherwise, PutScheduledUpdateGroupAction will return an error.
 *     * `StartTime` &mdash; (`Date`) The time for this action to start,
 *       as in --start-time 2010-06-01T00:00:00Z. When StartTime and
 *       EndTime are specified with Recurrence, they form the boundaries
 *       of when the recurring action will start and stop.
 *     * `EndTime` &mdash; (`Date`) The time for this action to end.
 *     * `Recurrence` &mdash; (`String`) The time when recurring future
 *       actions will start. Start time is specified by the user
 *       following the Unix cron syntax format. For information about
 *       cron syntax, go to Wikipedia, The Free Encyclopedia. When
 *       StartTime and EndTime are specified with Recurrence, they form
 *       the boundaries of when the recurring action will start and stop.
 *     * `MinSize` &mdash; (`Integer`) The minimum size for the new Auto
 *       Scaling group.
 *     * `MaxSize` &mdash; (`Integer`) The maximum size for the Auto
 *       Scaling group.
 *     * `DesiredCapacity` &mdash; (`Integer`) The number of Amazon EC2
 *       instances that should be running in the group.
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
 * @!method resumeProcesses(params, callback)
 *   Calls the ResumeProcesses API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name or Amazon Resource Name (ARN) of the Auto Scaling
 *       group.
 *     * `ScalingProcesses` &mdash; (`Array<String>`) The processes that
 *       you want to suspend or resume, which can include one or more of
 *       the following: Launch Terminate HealthCheck ReplaceUnhealthy
 *       AZRebalance AlarmNotification ScheduledActions AddToLoadBalancer
 *       To suspend all process types, omit this parameter.
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
 * @!method setDesiredCapacity(params, callback)
 *   Calls the SetDesiredCapacity API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Auto Scaling group.
 *     * `DesiredCapacity` &mdash; **required** &mdash; (`Integer`) The
 *       new capacity setting for the Auto Scaling group.
 *     * `HonorCooldown` &mdash; (`Boolean`) By default,
 *       SetDesiredCapacity overrides any cooldown period. Set to True if
 *       you want Auto Scaling to reject this request when the Auto
 *       Scaling group is in cooldown.
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
 * @!method setInstanceHealth(params, callback)
 *   Calls the SetInstanceHealth API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The
 *       identifier of the Amazon EC2 instance.
 *     * `HealthStatus` &mdash; **required** &mdash; (`String`) The
 *       health status of the instance. "Healthy" means that the instance
 *       is healthy and should remain in service. "Unhealthy" means that
 *       the instance is unhealthy. Auto Scaling should terminate and
 *       replace it.
 *     * `ShouldRespectGracePeriod` &mdash; (`Boolean`) If True, this
 *       call should respect the grace period associated with the group.
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
 * @!method suspendProcesses(params, callback)
 *   Calls the SuspendProcesses API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name or Amazon Resource Name (ARN) of the Auto Scaling
 *       group.
 *     * `ScalingProcesses` &mdash; (`Array<String>`) The processes that
 *       you want to suspend or resume, which can include one or more of
 *       the following: Launch Terminate HealthCheck ReplaceUnhealthy
 *       AZRebalance AlarmNotification ScheduledActions AddToLoadBalancer
 *       To suspend all process types, omit this parameter.
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
 * @!method terminateInstanceInAutoScalingGroup(params, callback)
 *   Calls the TerminateInstanceInAutoScalingGroup API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The ID of
 *       the Amazon EC2 instance to be terminated.
 *     * `ShouldDecrementDesiredCapacity` &mdash; **required** &mdash;
 *       (`Boolean`) Specifies whether (true) or not (false) terminating
 *       this instance should also decrement the size of the
 *       AutoScalingGroup.
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
 *       * `Activity` &mdash; (`Object`) A scaling Activity.
 *         * `ActivityId` &mdash; (`String`) Specifies the ID of the
 *           activity.
 *         * `AutoScalingGroupName` &mdash; (`String`) The name of the Auto
 *           Scaling group.
 *         * `Description` &mdash; (`String`) Contains a friendly, more
 *           verbose description of the scaling activity.
 *         * `Cause` &mdash; (`String`) Contains the reason the activity
 *           was begun.
 *         * `StartTime` &mdash; (`Date`) Provides the start time of this
 *           activity.
 *         * `EndTime` &mdash; (`Date`) Provides the end time of this
 *           activity.
 *         * `StatusCode` &mdash; (`String`) Contains the current status of
 *           the activity.
 *         * `StatusMessage` &mdash; (`String`) Contains a friendly, more
 *           verbose description of the activity status.
 *         * `Progress` &mdash; (`Integer`) Specifies a value between 0 and
 *           100 that indicates the progress of the activity.
 *         * `Details` &mdash; (`String`) Contains details of the scaling
 *           activity.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateAutoScalingGroup(params, callback)
 *   Calls the UpdateAutoScalingGroup API operation.
 *   @param params [Object]
 *     * `AutoScalingGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Auto Scaling group.
 *     * `LaunchConfigurationName` &mdash; (`String`) The name of the
 *       launch configuration.
 *     * `MinSize` &mdash; (`Integer`) The minimum size of the Auto
 *       Scaling group.
 *     * `MaxSize` &mdash; (`Integer`) The maximum size of the Auto
 *       Scaling group.
 *     * `DesiredCapacity` &mdash; (`Integer`) The desired capacity for
 *       the Auto Scaling group.
 *     * `DefaultCooldown` &mdash; (`Integer`) The amount of time, in
 *       seconds, after a scaling activity completes before any further
 *       trigger-related scaling activities can start.
 *     * `AvailabilityZones` &mdash; (`Array<String>`) Availability Zones
 *       for the group.
 *     * `HealthCheckType` &mdash; (`String`) The service of interest for
 *       the health status check, either "EC2" for Amazon EC2 or "ELB"
 *       for Elastic Load Balancing.
 *     * `HealthCheckGracePeriod` &mdash; (`Integer`) The length of time
 *       that Auto Scaling waits before checking an instance's health
 *       status. The grace period begins when an instance comes into
 *       service.
 *     * `PlacementGroup` &mdash; (`String`) The name of the cluster
 *       placement group, if applicable. For more information, go to
 *       Using Cluster Instances in the Amazon EC2 User Guide.
 *     * `VPCZoneIdentifier` &mdash; (`String`) The subnet identifier for
 *       the Amazon VPC connection, if applicable. You can specify
 *       several subnets in a comma-separated list. When you specify
 *       VPCZoneIdentifier with AvailabilityZones, ensure that the
 *       subnets' Availability Zones match the values you specify for
 *       AvailabilityZones.
 *     * `TerminationPolicies` &mdash; (`Array<String>`) A standalone
 *       termination policy or a list of termination policies used to
 *       select the instance to terminate. The policies are executed in
 *       the order that they are listed. For more information on creating
 *       a termination policy for your Auto Scaling group, go to Instance
 *       Termination Policy for Your Auto Scaling Group in the the Auto
 *       Scaling Developer Guide.
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
AWS.AutoScaling.Client = inherit({});
