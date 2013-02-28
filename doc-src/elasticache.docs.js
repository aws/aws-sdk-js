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
 * ### Sending a Request Using ElastiCache
 *
 * ```js
 * svc = new AWS.ElastiCache();
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
 *   @option (see AWS.ElastiCache.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.ElastiCache.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.ElastiCache.Client
 *
 */
AWS.ElastiCache = inherit({})

/**
 * The low-level ElastiCache client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method authorizeCacheSecurityGroupIngress(params, callback)
 *   Calls the AuthorizeCacheSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * `CacheSecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Cache Security Group to authorize.
 *     * `EC2SecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       Name of the EC2 Security Group to include in the authorization.
 *     * `EC2SecurityGroupOwnerId` &mdash; **required** &mdash;
 *       (`String`) AWS Account Number of the owner of the security group
 *       specified in the EC2SecurityGroupName parameter. The AWS Access
 *       Key ID is not an acceptable value.
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
 *       * `CacheSecurityGroup` &mdash; (`Object`) Defines a set of EC2
 *         Security groups that are allowed to access a Cache Cluster.
 *         * `OwnerId` &mdash; (`String`) Provides the AWS ID of the owner
 *           of a specific Cache Security Group.
 *         * `CacheSecurityGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Security Group.
 *         * `Description` &mdash; (`String`) Provides the description of
 *           the Cache Security Group.
 *         * `EC2SecurityGroups` &mdash; (`Array<Object>`) Contains a list
 *           of EC2SecurityGroup elements.
 *           * `Status` &mdash; (`String`) Provides the status of the EC2
 *             Security Group.
 *           * `EC2SecurityGroupName` &mdash; (`String`) Specifies the name
 *             of the EC2 Security Group.
 *           * `EC2SecurityGroupOwnerId` &mdash; (`String`) Specifies the
 *             AWS ID of the owner of the EC2 Security Group specified in
 *             the EC2SecurityGroupName field.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCacheCluster(params, callback)
 *   Calls the CreateCacheCluster API operation.
 *   @param params [Object]
 *     * `CacheClusterId` &mdash; **required** &mdash; (`String`) The
 *       Cache Cluster identifier. This parameter is stored as a
 *       lowercase string. Constraints: Must contain from 1 to 20
 *       alphanumeric characters or hyphens. First character must be a
 *       letter. Cannot end with a hyphen or contain two consecutive
 *       hyphens. Example: mycachecluster
 *     * `NumCacheNodes` &mdash; **required** &mdash; (`Integer`) The
 *       number of Cache Nodes the Cache Cluster should have.
 *     * `CacheNodeType` &mdash; **required** &mdash; (`String`) The
 *       compute and memory capacity of nodes in a Cache Cluster. Valid
 *       values: cache.t1.micro | cache.m1.small | cache.m1.medium |
 *       cache.m1.large | cache.m1.xlarge | cache.m3.xlarge |
 *       cache.m3.2xlarge | cache.m2.xlarge | cache.m2.2xlarge |
 *       cache.m2.4xlarge | cache.c1.xlarge
 *     * `Engine` &mdash; **required** &mdash; (`String`) The name of the
 *       cache engine to be used for this Cache Cluster. Currently,
 *       memcached is the only cache engine supported by the service.
 *     * `EngineVersion` &mdash; (`String`) The version of the cache
 *       engine to be used for this cluster.
 *     * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *       cache parameter group to associate with this Cache cluster. If
 *       this argument is omitted, the default CacheParameterGroup for
 *       the specified engine will be used.
 *     * `CacheSubnetGroupName` &mdash; (`String`) The name of the Cache
 *       Subnet Group to be used for the Cache Cluster. Use this
 *       parameter only when you are creating a cluster in an Amazon
 *       Virtual Private Cloud (VPC).
 *     * `CacheSecurityGroupNames` &mdash; (`Array<String>`) A list of
 *       Cache Security Group Names to associate with this Cache Cluster.
 *       Use this parameter only when you are creating a cluster outside
 *       of an Amazon Virtual Private Cloud (VPC).
 *     * `SecurityGroupIds` &mdash; (`Array<String>`) Specifies the VPC
 *       Security Groups associated with the Cache Cluster. Use this
 *       parameter only when you are creating a cluster in an Amazon
 *       Virtual Private Cloud (VPC).
 *     * `PreferredAvailabilityZone` &mdash; (`String`) The EC2
 *       Availability Zone that the Cache Cluster will be created in. All
 *       cache nodes belonging to a cache cluster are placed in the
 *       preferred availability zone. Default: System chosen (random)
 *       availability zone.
 *     * `PreferredMaintenanceWindow` &mdash; (`String`) The weekly time
 *       range (in UTC) during which system maintenance can occur.
 *       Example: sun:05:00-sun:09:00
 *     * `Port` &mdash; (`Integer`) The port number on which each of the
 *       Cache Nodes will accept connections.
 *     * `NotificationTopicArn` &mdash; (`String`) The Amazon Resource
 *       Name (ARN) of the Amazon Simple Notification Service (SNS) topic
 *       to which notifications will be sent. The Amazon SNS topic owner
 *       must be the same as the Cache Cluster owner.
 *     * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *       minor engine upgrades will be applied automatically to the Cache
 *       Cluster during the maintenance window. Default: true
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
 *       * `CacheCluster` &mdash; (`Object`) Contains information about a
 *         Cache Cluster.
 *         * `CacheClusterId` &mdash; (`String`) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * `ConfigurationEndpoint` &mdash; (`Object`) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the Cache Node.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the cache
 *             engine is listening on.
 *         * `ClientDownloadLandingPage` &mdash; (`String`) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * `CacheNodeType` &mdash; (`String`) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * `Engine` &mdash; (`String`) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * `EngineVersion` &mdash; (`String`) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * `CacheClusterStatus` &mdash; (`String`) Specifies the current
 *           state of this Cache Cluster.
 *         * `NumCacheNodes` &mdash; (`Integer`) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * `PreferredAvailabilityZone` &mdash; (`String`) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * `CacheClusterCreateTime` &mdash; (`Date`) Provides the date
 *           and time the Cache Cluster was created.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * `NumCacheNodes` &mdash; (`Integer`) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * `CacheNodeIdsToRemove` &mdash; (`Array<String>`) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * `EngineVersion` &mdash; (`String`) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * `NotificationConfiguration` &mdash; (`Object`) Specifies the
 *           notification details the Cache Cluster contains.
 *           * `TopicArn` &mdash; (`String`) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * `TopicStatus` &mdash; (`String`) Specifies the current state
 *             of this topic.
 *         * `CacheSecurityGroups` &mdash; (`Array<Object>`) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * `CacheSecurityGroupName` &mdash; (`String`) The name of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * `CacheParameterGroup` &mdash; (`Object`) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *             Cache Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *           * `CacheNodeIdsToReboot` &mdash; (`Array<String>`) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * `CacheSubnetGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * `CacheNodes` &mdash; (`Array<Object>`) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * `CacheNodeId` &mdash; (`String`) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * `CacheNodeStatus` &mdash; (`String`) Specifies the current
 *             state of this Cache Node.
 *           * `CacheNodeCreateTime` &mdash; (`Date`) Provides the date and
 *             time the Cache Node was created.
 *           * `Endpoint` &mdash; (`Object`) Specifies the endpoint details
 *             for a Cache Node.
 *             * `Address` &mdash; (`String`) Specifies the DNS address of
 *               the Cache Node.
 *             * `Port` &mdash; (`Integer`) Specifies the port that the
 *               cache engine is listening on.
 *           * `ParameterGroupStatus` &mdash; (`String`) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `SecurityGroups` &mdash; (`Array<Object>`) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * `SecurityGroupId` &mdash; (`String`) The identifier of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the Cache Security
 *             Group membership. The status changes whenever a Cache
 *             Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCacheParameterGroup(params, callback)
 *   Calls the CreateCacheParameterGroup API operation.
 *   @param params [Object]
 *     * `CacheParameterGroupName` &mdash; **required** &mdash;
 *       (`String`) The name of the Cache Parameter Group.
 *     * `CacheParameterGroupFamily` &mdash; **required** &mdash;
 *       (`String`) The name of the Cache Parameter Group Family the
 *       Cache Parameter Group can be used with. Currently, memcached1.4
 *       is the only cache parameter group family supported by the
 *       service.
 *     * `Description` &mdash; **required** &mdash; (`String`) The
 *       description for the Cache Parameter Group.
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
 *       * `CacheParameterGroup` &mdash; (`Object`) Contains a set of
 *         parameters and their values which can be applied to a Cache
 *         Cluster.
 *         * `CacheParameterGroupName` &mdash; (`String`) Provides the name
 *           of the Cache Parameter Group.
 *         * `CacheParameterGroupFamily` &mdash; (`String`) Provides the
 *           name of the Cache Parameter Group Family that this Cache
 *           Parameter Group is compatible with.
 *         * `Description` &mdash; (`String`) Provides the
 *           customer-specified description for this Cache Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCacheSecurityGroup(params, callback)
 *   Calls the CreateCacheSecurityGroup API operation.
 *   @param params [Object]
 *     * `CacheSecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name for the Cache Security Group. This value is stored as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters. Must not be "Default". Example:
 *       mysecuritygroup
 *     * `Description` &mdash; **required** &mdash; (`String`) The
 *       description for the Cache Security Group.
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
 *       * `CacheSecurityGroup` &mdash; (`Object`) Defines a set of EC2
 *         Security groups that are allowed to access a Cache Cluster.
 *         * `OwnerId` &mdash; (`String`) Provides the AWS ID of the owner
 *           of a specific Cache Security Group.
 *         * `CacheSecurityGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Security Group.
 *         * `Description` &mdash; (`String`) Provides the description of
 *           the Cache Security Group.
 *         * `EC2SecurityGroups` &mdash; (`Array<Object>`) Contains a list
 *           of EC2SecurityGroup elements.
 *           * `Status` &mdash; (`String`) Provides the status of the EC2
 *             Security Group.
 *           * `EC2SecurityGroupName` &mdash; (`String`) Specifies the name
 *             of the EC2 Security Group.
 *           * `EC2SecurityGroupOwnerId` &mdash; (`String`) Specifies the
 *             AWS ID of the owner of the EC2 Security Group specified in
 *             the EC2SecurityGroupName field.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCacheSubnetGroup(params, callback)
 *   Calls the CreateCacheSubnetGroup API operation.
 *   @param params [Object]
 *     * `CacheSubnetGroupName` &mdash; **required** &mdash; (`String`)
 *       The name for the Cache Subnet Group. This value is stored as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters or hyphens. Example: mysubnetgroup
 *     * `CacheSubnetGroupDescription` &mdash; **required** &mdash;
 *       (`String`) The description for the Cache Subnet Group.
 *     * `SubnetIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       EC2 Subnet IDs for the Cache Subnet Group.
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
 *       * `CacheSubnetGroup` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions:
 *         CreateCacheSubnetGroup ModifyCacheSubnetGroup
 *         DescribeCacheSubnetGroups DeleteCacheSubnetGroup This data type
 *         is used as a response element in the DescribeCacheSubnetGroups
 *         action.
 *         * `CacheSubnetGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Subnet Group.
 *         * `CacheSubnetGroupDescription` &mdash; (`String`) Provides the
 *           description of the Cache Subnet Group.
 *         * `VpcId` &mdash; (`String`) Provides the VPC ID of the Cache
 *           Subnet Group.
 *         * `Subnets` &mdash; (`Array<Object>`) Contains a list of subnets
 *           for this group.
 *           * `SubnetIdentifier` &mdash; (`String`) Specifies the unique
 *             identifier for the Subnet
 *           * `SubnetAvailabilityZone` &mdash; (`Object`) Specifies the
 *             Availability Zone associated with the Subnet
 *             * `Name` &mdash; (`String`) Specifies the name of the
 *               Availability Zone
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteCacheCluster(params, callback)
 *   Calls the DeleteCacheCluster API operation.
 *   @param params [Object]
 *     * `CacheClusterId` &mdash; **required** &mdash; (`String`) The
 *       Cache Cluster identifier for the Cache Cluster to be deleted.
 *       This parameter isn't case sensitive.
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
 *       * `CacheCluster` &mdash; (`Object`) Contains information about a
 *         Cache Cluster.
 *         * `CacheClusterId` &mdash; (`String`) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * `ConfigurationEndpoint` &mdash; (`Object`) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the Cache Node.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the cache
 *             engine is listening on.
 *         * `ClientDownloadLandingPage` &mdash; (`String`) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * `CacheNodeType` &mdash; (`String`) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * `Engine` &mdash; (`String`) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * `EngineVersion` &mdash; (`String`) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * `CacheClusterStatus` &mdash; (`String`) Specifies the current
 *           state of this Cache Cluster.
 *         * `NumCacheNodes` &mdash; (`Integer`) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * `PreferredAvailabilityZone` &mdash; (`String`) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * `CacheClusterCreateTime` &mdash; (`Date`) Provides the date
 *           and time the Cache Cluster was created.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * `NumCacheNodes` &mdash; (`Integer`) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * `CacheNodeIdsToRemove` &mdash; (`Array<String>`) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * `EngineVersion` &mdash; (`String`) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * `NotificationConfiguration` &mdash; (`Object`) Specifies the
 *           notification details the Cache Cluster contains.
 *           * `TopicArn` &mdash; (`String`) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * `TopicStatus` &mdash; (`String`) Specifies the current state
 *             of this topic.
 *         * `CacheSecurityGroups` &mdash; (`Array<Object>`) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * `CacheSecurityGroupName` &mdash; (`String`) The name of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * `CacheParameterGroup` &mdash; (`Object`) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *             Cache Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *           * `CacheNodeIdsToReboot` &mdash; (`Array<String>`) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * `CacheSubnetGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * `CacheNodes` &mdash; (`Array<Object>`) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * `CacheNodeId` &mdash; (`String`) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * `CacheNodeStatus` &mdash; (`String`) Specifies the current
 *             state of this Cache Node.
 *           * `CacheNodeCreateTime` &mdash; (`Date`) Provides the date and
 *             time the Cache Node was created.
 *           * `Endpoint` &mdash; (`Object`) Specifies the endpoint details
 *             for a Cache Node.
 *             * `Address` &mdash; (`String`) Specifies the DNS address of
 *               the Cache Node.
 *             * `Port` &mdash; (`Integer`) Specifies the port that the
 *               cache engine is listening on.
 *           * `ParameterGroupStatus` &mdash; (`String`) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `SecurityGroups` &mdash; (`Array<Object>`) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * `SecurityGroupId` &mdash; (`String`) The identifier of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the Cache Security
 *             Group membership. The status changes whenever a Cache
 *             Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteCacheParameterGroup(params, callback)
 *   Calls the DeleteCacheParameterGroup API operation.
 *   @param params [Object]
 *     * `CacheParameterGroupName` &mdash; **required** &mdash;
 *       (`String`) The name of the Cache Parameter Group to delete. The
 *       specified cache security group must not be associated with any
 *       Cache clusters.
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
 * @!method deleteCacheSecurityGroup(params, callback)
 *   Calls the DeleteCacheSecurityGroup API operation.
 *   @param params [Object]
 *     * `CacheSecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Cache Security Group to delete. You cannot
 *       delete the default security group.
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
 * @!method deleteCacheSubnetGroup(params, callback)
 *   Calls the DeleteCacheSubnetGroup API operation.
 *   @param params [Object]
 *     * `CacheSubnetGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Cache Subnet Group to delete. Constraints: Must
 *       contain no more than 255 alphanumeric characters or hyphens.
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
 * @!method describeCacheClusters(params, callback)
 *   Calls the DescribeCacheClusters API operation.
 *   @param params [Object]
 *     * `CacheClusterId` &mdash; (`String`) The user-supplied cluster
 *       identifier. If this parameter is specified, only information
 *       about that specific Cache Cluster is returned. This parameter
 *       isn't case sensitive.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
 *     * `ShowCacheNodeInfo` &mdash; (`Boolean`) An optional flag that
 *       can be included in the DescribeCacheCluster request to retrieve
 *       Cache Nodes information.
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
 *       * `Marker` &mdash; (`String`) The marker obtained from a previous
 *         operation response.
 *       * `CacheClusters` &mdash; (`Array<Object>`) A list of
 *         CacheClusters.
 *         * `CacheClusterId` &mdash; (`String`) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * `ConfigurationEndpoint` &mdash; (`Object`) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the Cache Node.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the cache
 *             engine is listening on.
 *         * `ClientDownloadLandingPage` &mdash; (`String`) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * `CacheNodeType` &mdash; (`String`) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * `Engine` &mdash; (`String`) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * `EngineVersion` &mdash; (`String`) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * `CacheClusterStatus` &mdash; (`String`) Specifies the current
 *           state of this Cache Cluster.
 *         * `NumCacheNodes` &mdash; (`Integer`) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * `PreferredAvailabilityZone` &mdash; (`String`) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * `CacheClusterCreateTime` &mdash; (`Date`) Provides the date
 *           and time the Cache Cluster was created.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * `NumCacheNodes` &mdash; (`Integer`) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * `CacheNodeIdsToRemove` &mdash; (`Array<String>`) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * `EngineVersion` &mdash; (`String`) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * `NotificationConfiguration` &mdash; (`Object`) Specifies the
 *           notification details the Cache Cluster contains.
 *           * `TopicArn` &mdash; (`String`) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * `TopicStatus` &mdash; (`String`) Specifies the current state
 *             of this topic.
 *         * `CacheSecurityGroups` &mdash; (`Array<Object>`) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * `CacheSecurityGroupName` &mdash; (`String`) The name of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * `CacheParameterGroup` &mdash; (`Object`) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *             Cache Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *           * `CacheNodeIdsToReboot` &mdash; (`Array<String>`) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * `CacheSubnetGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * `CacheNodes` &mdash; (`Array<Object>`) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * `CacheNodeId` &mdash; (`String`) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * `CacheNodeStatus` &mdash; (`String`) Specifies the current
 *             state of this Cache Node.
 *           * `CacheNodeCreateTime` &mdash; (`Date`) Provides the date and
 *             time the Cache Node was created.
 *           * `Endpoint` &mdash; (`Object`) Specifies the endpoint details
 *             for a Cache Node.
 *             * `Address` &mdash; (`String`) Specifies the DNS address of
 *               the Cache Node.
 *             * `Port` &mdash; (`Integer`) Specifies the port that the
 *               cache engine is listening on.
 *           * `ParameterGroupStatus` &mdash; (`String`) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `SecurityGroups` &mdash; (`Array<Object>`) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * `SecurityGroupId` &mdash; (`String`) The identifier of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the Cache Security
 *             Group membership. The status changes whenever a Cache
 *             Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheEngineVersions(params, callback)
 *   Calls the DescribeCacheEngineVersions API operation.
 *   @param params [Object]
 *     * `Engine` &mdash; (`String`) The cache engine to return.
 *     * `EngineVersion` &mdash; (`String`) The cache engine version to
 *       return. Example: 1.4.14
 *     * `CacheParameterGroupFamily` &mdash; (`String`) The name of a
 *       specific Cache Parameter Group family to return details for.
 *       Constraints: Must be 1 to 255 alphanumeric characters First
 *       character must be a letter Cannot end with a hyphen or contain
 *       two consecutive hyphens
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeCacheParameterGroups request. If this parameter
 *       is specified, the response includes only records beyond the
 *       marker, up to the value specified by MaxRecords.
 *     * `DefaultOnly` &mdash; (`Boolean`) Indicates that only the
 *       default version of the specified engine or engine and major
 *       version combination is returned.
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
 *       * `Marker` &mdash; (`String`) The identifier returned to allow
 *         retrieval of paginated results.
 *       * `CacheEngineVersions` &mdash; (`Array<Object>`) A list of
 *         CacheEngineVersion elements.
 *         * `Engine` &mdash; (`String`) The name of the cache engine.
 *         * `EngineVersion` &mdash; (`String`) The version number of the
 *           cache engine.
 *         * `CacheParameterGroupFamily` &mdash; (`String`) The name of the
 *           CacheParameterGroupFamily for the cache engine.
 *         * `CacheEngineDescription` &mdash; (`String`) The description of
 *           the cache engine.
 *         * `CacheEngineVersionDescription` &mdash; (`String`) The
 *           description of the cache engine version.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheParameterGroups(params, callback)
 *   Calls the DescribeCacheParameterGroups API operation.
 *   @param params [Object]
 *     * `CacheParameterGroupName` &mdash; (`String`) The name of a
 *       specific cache parameter group to return details for.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeCacheParameterGroups request. If this parameter
 *       is specified, the response includes only records beyond the
 *       marker, up to the value specified by MaxRecords.
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
 *       * `Marker` &mdash; (`String`) The marker obtained from a previous
 *         operation response.
 *       * `CacheParameterGroups` &mdash; (`Array<Object>`) A list of
 *         CacheParameterGroup instances.
 *         * `CacheParameterGroupName` &mdash; (`String`) Provides the name
 *           of the Cache Parameter Group.
 *         * `CacheParameterGroupFamily` &mdash; (`String`) Provides the
 *           name of the Cache Parameter Group Family that this Cache
 *           Parameter Group is compatible with.
 *         * `Description` &mdash; (`String`) Provides the
 *           customer-specified description for this Cache Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheParameters(params, callback)
 *   Calls the DescribeCacheParameters API operation.
 *   @param params [Object]
 *     * `CacheParameterGroupName` &mdash; **required** &mdash;
 *       (`String`) The name of a specific cache parameter group to
 *       return details for.
 *     * `Source` &mdash; (`String`) The parameter types to return. Valid
 *       values: user | system | engine-default
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
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
 *       * `Marker` &mdash; (`String`) The marker obtained from a previous
 *         operation response.
 *       * `Parameters` &mdash; (`Array<Object>`) A list of Parameter
 *         instances.
 *         * `ParameterName` &mdash; (`String`) Specifies the name of the
 *           parameter.
 *         * `ParameterValue` &mdash; (`String`) Specifies the value of the
 *           parameter.
 *         * `Description` &mdash; (`String`) Provides a description of the
 *           parameter.
 *         * `Source` &mdash; (`String`) Indicates the source of the
 *           parameter value.
 *         * `DataType` &mdash; (`String`) Specifies the valid data type
 *           for the parameter.
 *         * `AllowedValues` &mdash; (`String`) Specifies the valid range
 *           of values for the parameter.
 *         * `IsModifiable` &mdash; (`Boolean`) Indicates whether (true) or
 *           not (false) the parameter can be modified. Some parameters
 *           have security or operational implications that prevent them
 *           from being changed.
 *         * `MinimumEngineVersion` &mdash; (`String`) The earliest engine
 *           version to which the parameter can apply.
 *       * `CacheNodeTypeSpecificParameters` &mdash; (`Array<Object>`) A
 *         list of CacheNodeTypeSpecificParameter instances.
 *         * `ParameterName` &mdash; (`String`) Specifies the name of the
 *           parameter.
 *         * `Description` &mdash; (`String`) Provides a description of the
 *           parameter.
 *         * `Source` &mdash; (`String`) Indicates the source of the
 *           parameter value.
 *         * `DataType` &mdash; (`String`) Specifies the valid data type
 *           for the parameter.
 *         * `AllowedValues` &mdash; (`String`) Specifies the valid range
 *           of values for the parameter.
 *         * `IsModifiable` &mdash; (`Boolean`) Indicates whether (true) or
 *           not (false) the parameter can be modified. Some parameters
 *           have security or operational implications that prevent them
 *           from being changed.
 *         * `MinimumEngineVersion` &mdash; (`String`) The earliest engine
 *           version to which the parameter can apply.
 *         * `CacheNodeTypeSpecificValues` &mdash; (`Array<Object>`) A list
 *           of Cache Node types and their corresponding values for this
 *           parameter.
 *           * `CacheNodeType` &mdash; (`String`) Specifies the Cache Node
 *             type for which this value applies.
 *           * `Value` &mdash; (`String`) Specifies the value for the Cache
 *             Node type.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheSecurityGroups(params, callback)
 *   Calls the DescribeCacheSecurityGroups API operation.
 *   @param params [Object]
 *     * `CacheSecurityGroupName` &mdash; (`String`) The name of the
 *       Cache Security Group to return details for.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
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
 *       * `Marker` &mdash; (`String`) The marker obtained from a previous
 *         operation response.
 *       * `CacheSecurityGroups` &mdash; (`Array<Object>`) A list of
 *         CacheSecurityGroup instances.
 *         * `OwnerId` &mdash; (`String`) Provides the AWS ID of the owner
 *           of a specific Cache Security Group.
 *         * `CacheSecurityGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Security Group.
 *         * `Description` &mdash; (`String`) Provides the description of
 *           the Cache Security Group.
 *         * `EC2SecurityGroups` &mdash; (`Array<Object>`) Contains a list
 *           of EC2SecurityGroup elements.
 *           * `Status` &mdash; (`String`) Provides the status of the EC2
 *             Security Group.
 *           * `EC2SecurityGroupName` &mdash; (`String`) Specifies the name
 *             of the EC2 Security Group.
 *           * `EC2SecurityGroupOwnerId` &mdash; (`String`) Specifies the
 *             AWS ID of the owner of the EC2 Security Group specified in
 *             the EC2SecurityGroupName field.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheSubnetGroups(params, callback)
 *   Calls the DescribeCacheSubnetGroups API operation.
 *   @param params [Object]
 *     * `CacheSubnetGroupName` &mdash; (`String`) The name of the Cache
 *       Subnet Group to return details for.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeCacheSubnetGroups request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
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
 *       * `Marker` &mdash; (`String`) The marker obtained from a previous
 *         operation response.
 *       * `CacheSubnetGroups` &mdash; (`Array<Object>`) One or more Cache
 *         Subnet Groups.
 *         * `CacheSubnetGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Subnet Group.
 *         * `CacheSubnetGroupDescription` &mdash; (`String`) Provides the
 *           description of the Cache Subnet Group.
 *         * `VpcId` &mdash; (`String`) Provides the VPC ID of the Cache
 *           Subnet Group.
 *         * `Subnets` &mdash; (`Array<Object>`) Contains a list of subnets
 *           for this group.
 *           * `SubnetIdentifier` &mdash; (`String`) Specifies the unique
 *             identifier for the Subnet
 *           * `SubnetAvailabilityZone` &mdash; (`Object`) Specifies the
 *             Availability Zone associated with the Subnet
 *             * `Name` &mdash; (`String`) Specifies the name of the
 *               Availability Zone
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEngineDefaultParameters(params, callback)
 *   Calls the DescribeEngineDefaultParameters API operation.
 *   @param params [Object]
 *     * `CacheParameterGroupFamily` &mdash; **required** &mdash;
 *       (`String`) The name of the Cache Parameter Group Family.
 *       Currently, memcached1.4 is the only cache parameter group family
 *       supported by the service.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
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
 *       * `EngineDefaults` &mdash; (`Object`) The default Parameters and
 *         CacheNodeTypeSpecificParameters for a CacheParameterGroupFamily.
 *         * `CacheParameterGroupFamily` &mdash; (`String`) Specifies the
 *           name of the Cache Parameter Group Family which the engine
 *           default parameters apply to.
 *         * `Marker` &mdash; (`String`) Provides an identifier to allow
 *           retrieval of paginated results.
 *         * `Parameters` &mdash; (`Array<Object>`) Contains a list of
 *           engine default parameters.
 *           * `ParameterName` &mdash; (`String`) Specifies the name of the
 *             parameter.
 *           * `ParameterValue` &mdash; (`String`) Specifies the value of
 *             the parameter.
 *           * `Description` &mdash; (`String`) Provides a description of
 *             the parameter.
 *           * `Source` &mdash; (`String`) Indicates the source of the
 *             parameter value.
 *           * `DataType` &mdash; (`String`) Specifies the valid data type
 *             for the parameter.
 *           * `AllowedValues` &mdash; (`String`) Specifies the valid range
 *             of values for the parameter.
 *           * `IsModifiable` &mdash; (`Boolean`) Indicates whether (true)
 *             or not (false) the parameter can be modified. Some
 *             parameters have security or operational implications that
 *             prevent them from being changed.
 *           * `MinimumEngineVersion` &mdash; (`String`) The earliest
 *             engine version to which the parameter can apply.
 *         * `CacheNodeTypeSpecificParameters` &mdash; (`Array<Object>`) A
 *           list of CacheNodeTypeSpecificParameter instances.
 *           * `ParameterName` &mdash; (`String`) Specifies the name of the
 *             parameter.
 *           * `Description` &mdash; (`String`) Provides a description of
 *             the parameter.
 *           * `Source` &mdash; (`String`) Indicates the source of the
 *             parameter value.
 *           * `DataType` &mdash; (`String`) Specifies the valid data type
 *             for the parameter.
 *           * `AllowedValues` &mdash; (`String`) Specifies the valid range
 *             of values for the parameter.
 *           * `IsModifiable` &mdash; (`Boolean`) Indicates whether (true)
 *             or not (false) the parameter can be modified. Some
 *             parameters have security or operational implications that
 *             prevent them from being changed.
 *           * `MinimumEngineVersion` &mdash; (`String`) The earliest
 *             engine version to which the parameter can apply.
 *           * `CacheNodeTypeSpecificValues` &mdash; (`Array<Object>`) A
 *             list of Cache Node types and their corresponding values for
 *             this parameter.
 *             * `CacheNodeType` &mdash; (`String`) Specifies the Cache
 *               Node type for which this value applies.
 *             * `Value` &mdash; (`String`) Specifies the value for the
 *               Cache Node type.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEvents(params, callback)
 *   Calls the DescribeEvents API operation.
 *   @param params [Object]
 *     * `SourceIdentifier` &mdash; (`String`) The identifier of the
 *       event source for which events will be returned. If not
 *       specified, then all sources are included in the response.
 *     * `SourceType` &mdash; (`String`) The event source to retrieve
 *       events for. If no value is specified, all events are returned.
 *     * `StartTime` &mdash; (`Date`) The beginning of the time interval
 *       to retrieve events for, specified in ISO 8601 format.
 *     * `EndTime` &mdash; (`Date`) The end of the time interval for
 *       which to retrieve events, specified in ISO 8601 format.
 *     * `Duration` &mdash; (`Integer`) The number of minutes to retrieve
 *       events for.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
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
 *       * `Marker` &mdash; (`String`) The marker obtained from a previous
 *         operation response.
 *       * `Events` &mdash; (`Array<Object>`) A list of Event instances.
 *         * `SourceIdentifier` &mdash; (`String`) Provides the identifier
 *           for the source of the event.
 *         * `SourceType` &mdash; (`String`) Specifies the source type for
 *           this event.
 *         * `Message` &mdash; (`String`) Provides the text of this event.
 *         * `Date` &mdash; (`Date`) Specifies the date and time of the
 *           event.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedCacheNodes(params, callback)
 *   Calls the DescribeReservedCacheNodes API operation.
 *   @param params [Object]
 *     * `ReservedCacheNodeId` &mdash; (`String`) The reserved Cache Node
 *       identifier filter value. Specify this parameter to show only the
 *       reservation that matches the specified reservation ID.
 *     * `ReservedCacheNodesOfferingId` &mdash; (`String`) The offering
 *       identifier filter value. Specify this parameter to show only
 *       purchased reservations matching the specified offering
 *       identifier.
 *     * `CacheNodeType` &mdash; (`String`) The Cache Node type filter
 *       value. Specify this parameter to show only those reservations
 *       matching the specified Cache Nodes type.
 *     * `Duration` &mdash; (`String`) The duration filter value,
 *       specified in years or seconds. Specify this parameter to show
 *       only reservations for this duration. Valid Values: 1 | 3 |
 *       31536000 | 94608000
 *     * `ProductDescription` &mdash; (`String`) The product description
 *       filter value. Specify this parameter to show only those
 *       reservations matching the specified product description.
 *     * `OfferingType` &mdash; (`String`) The offering type filter
 *       value. Specify this parameter to show only the available
 *       offerings matching the specified offering type. Valid Values:
 *       "Light Utilization" | "Medium Utilization" | "Heavy Utilization"
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more than the MaxRecords value is
 *       available, a marker is included in the response so that the
 *       following results can be retrieved. Default: 100 Constraints:
 *       minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) The marker provided in the previous
 *       request. If this parameter is specified, the response includes
 *       records beyond the marker only, up to MaxRecords.
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
 *       * `Marker` &mdash; (`String`) The marker provided for paginated
 *         results.
 *       * `ReservedCacheNodes` &mdash; (`Array<Object>`) A list of of
 *         reserved Cache Nodes.
 *         * `ReservedCacheNodeId` &mdash; (`String`) The unique identifier
 *           for the reservation.
 *         * `ReservedCacheNodesOfferingId` &mdash; (`String`) The offering
 *           identifier.
 *         * `CacheNodeType` &mdash; (`String`) The cache node type for the
 *           reserved Cache Node.
 *         * `StartTime` &mdash; (`Date`) The time the reservation started.
 *         * `Duration` &mdash; (`Integer`) The duration of the reservation
 *           in seconds.
 *         * `FixedPrice` &mdash; (`Float`) The fixed price charged for
 *           this reserved Cache Node.
 *         * `UsagePrice` &mdash; (`Float`) The hourly price charged for
 *           this reserved Cache Node.
 *         * `CacheNodeCount` &mdash; (`Integer`) The number of reserved
 *           Cache Nodes.
 *         * `ProductDescription` &mdash; (`String`) The description of the
 *           reserved Cache Node.
 *         * `OfferingType` &mdash; (`String`) The offering type of this
 *           reserved Cache Node.
 *         * `State` &mdash; (`String`) The state of the reserved Cache
 *           Node.
 *         * `RecurringCharges` &mdash; (`Array<Object>`) The recurring
 *           price charged to run this reserved Cache Node.
 *           * `RecurringChargeAmount` &mdash; (`Float`) The amount of the
 *             recurring charge.
 *           * `RecurringChargeFrequency` &mdash; (`String`) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedCacheNodesOfferings(params, callback)
 *   Calls the DescribeReservedCacheNodesOfferings API operation.
 *   @param params [Object]
 *     * `ReservedCacheNodesOfferingId` &mdash; (`String`) The offering
 *       identifier filter value. Specify this parameter to show only the
 *       available offering that matches the specified reservation
 *       identifier. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706
 *     * `CacheNodeType` &mdash; (`String`) The Cache Node type filter
 *       value. Specify this parameter to show only the available
 *       offerings matching the specified Cache Node type.
 *     * `Duration` &mdash; (`String`) Duration filter value, specified
 *       in years or seconds. Specify this parameter to show only
 *       reservations for this duration. Valid Values: 1 | 3 | 31536000 |
 *       94608000
 *     * `ProductDescription` &mdash; (`String`) Product description
 *       filter value. Specify this parameter to show only the available
 *       offerings matching the specified product description.
 *     * `OfferingType` &mdash; (`String`) The offering type filter
 *       value. Specify this parameter to show only the available
 *       offerings matching the specified offering type. Valid Values:
 *       "Light Utilization" | "Medium Utilization" | "Heavy Utilization"
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more than the MaxRecords value is
 *       available, a marker is included in the response so that the
 *       following results can be retrieved. Default: 100 Constraints:
 *       minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) The marker provided in the previous
 *       request. If this parameter is specified, the response includes
 *       records beyond the marker only, up to MaxRecords.
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
 *       * `Marker` &mdash; (`String`) A marker provided for paginated
 *         results.
 *       * `ReservedCacheNodesOfferings` &mdash; (`Array<Object>`) A list
 *         of reserved Cache Node offerings.
 *         * `ReservedCacheNodesOfferingId` &mdash; (`String`) The offering
 *           identifier.
 *         * `CacheNodeType` &mdash; (`String`) The Cache Node type for the
 *           reserved Cache Node.
 *         * `Duration` &mdash; (`Integer`) The duration of the offering in
 *           seconds.
 *         * `FixedPrice` &mdash; (`Float`) The fixed price charged for
 *           this offering.
 *         * `UsagePrice` &mdash; (`Float`) The hourly price charged for
 *           this offering.
 *         * `ProductDescription` &mdash; (`String`) The cache engine used
 *           by the offering.
 *         * `OfferingType` &mdash; (`String`) The offering type.
 *         * `RecurringCharges` &mdash; (`Array<Object>`) The recurring
 *           price charged to run this reserved Cache Node.
 *           * `RecurringChargeAmount` &mdash; (`Float`) The amount of the
 *             recurring charge.
 *           * `RecurringChargeFrequency` &mdash; (`String`) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyCacheCluster(params, callback)
 *   Calls the ModifyCacheCluster API operation.
 *   @param params [Object]
 *     * `CacheClusterId` &mdash; **required** &mdash; (`String`) The
 *       Cache Cluster identifier. This value is stored as a lowercase
 *       string.
 *     * `NumCacheNodes` &mdash; (`Integer`) The number of Cache Nodes
 *       the Cache Cluster should have. If NumCacheNodes is greater than
 *       the existing number of Cache Nodes, Cache Nodes will be added.
 *       If NumCacheNodes is less than the existing number of Cache
 *       Nodes, Cache Nodes will be removed. When removing Cache Nodes,
 *       the Ids of the specific Cache Nodes to be removed must be
 *       supplied using the CacheNodeIdsToRemove parameter.
 *     * `CacheNodeIdsToRemove` &mdash; (`Array<String>`) The list of
 *       Cache Node IDs to be removed. This parameter is only valid when
 *       NumCacheNodes is less than the existing number of Cache Nodes.
 *       The number of Cache Node Ids supplied in this parameter must
 *       match the difference between the existing number of Cache Nodes
 *       in the cluster and the new NumCacheNodes requested.
 *     * `CacheSecurityGroupNames` &mdash; (`Array<String>`) A list of
 *       Cache Security Group Names to authorize on this Cache Cluster.
 *       This change is asynchronously applied as soon as possible. This
 *       parameter can be used only with clusters that are created
 *       outside of an Amazon Virtual Private Cloud (VPC). Constraints:
 *       Must contain no more than 255 alphanumeric characters. Must not
 *       be "Default".
 *     * `SecurityGroupIds` &mdash; (`Array<String>`) Specifies the VPC
 *       Security Groups associated with the Cache Cluster. This
 *       parameter can be used only with clusters that are created in an
 *       Amazon Virtual Private Cloud (VPC).
 *     * `PreferredMaintenanceWindow` &mdash; (`String`) The weekly time
 *       range (in UTC) during which system maintenance can occur, which
 *       may result in an outage. This change is made immediately. If
 *       moving this window to the current time, there must be at least
 *       120 minutes between the current time and end of the window to
 *       ensure pending changes are applied.
 *     * `NotificationTopicArn` &mdash; (`String`) The Amazon Resource
 *       Name (ARN) of the SNS topic to which notifications will be sent.
 *       The SNS topic owner must be same as the Cache Cluster owner.
 *     * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *       Cache Parameter Group to apply to this Cache Cluster. This
 *       change is asynchronously applied as soon as possible for
 *       parameters when the ApplyImmediately parameter is specified as
 *       true for this request.
 *     * `NotificationTopicStatus` &mdash; (`String`) The status of the
 *       Amazon SNS notification topic. The value can be active or
 *       inactive. Notifications are sent only if the status is active.
 *     * `ApplyImmediately` &mdash; (`Boolean`) Specifies whether or not
 *       the modifications in this request and any pending modifications
 *       are asynchronously applied as soon as possible, regardless of
 *       the PreferredMaintenanceWindow setting for the Cache Cluster. If
 *       this parameter is passed as false, changes to the Cache Cluster
 *       are applied on the next maintenance reboot, or the next failure
 *       reboot, whichever occurs first. Default: false
 *     * `EngineVersion` &mdash; (`String`) The version of the cache
 *       engine to upgrade this cluster to.
 *     * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *       minor engine upgrades will be applied automatically to the Cache
 *       Cluster during the maintenance window. Default: true
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
 *       * `CacheCluster` &mdash; (`Object`) Contains information about a
 *         Cache Cluster.
 *         * `CacheClusterId` &mdash; (`String`) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * `ConfigurationEndpoint` &mdash; (`Object`) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the Cache Node.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the cache
 *             engine is listening on.
 *         * `ClientDownloadLandingPage` &mdash; (`String`) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * `CacheNodeType` &mdash; (`String`) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * `Engine` &mdash; (`String`) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * `EngineVersion` &mdash; (`String`) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * `CacheClusterStatus` &mdash; (`String`) Specifies the current
 *           state of this Cache Cluster.
 *         * `NumCacheNodes` &mdash; (`Integer`) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * `PreferredAvailabilityZone` &mdash; (`String`) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * `CacheClusterCreateTime` &mdash; (`Date`) Provides the date
 *           and time the Cache Cluster was created.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * `NumCacheNodes` &mdash; (`Integer`) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * `CacheNodeIdsToRemove` &mdash; (`Array<String>`) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * `EngineVersion` &mdash; (`String`) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * `NotificationConfiguration` &mdash; (`Object`) Specifies the
 *           notification details the Cache Cluster contains.
 *           * `TopicArn` &mdash; (`String`) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * `TopicStatus` &mdash; (`String`) Specifies the current state
 *             of this topic.
 *         * `CacheSecurityGroups` &mdash; (`Array<Object>`) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * `CacheSecurityGroupName` &mdash; (`String`) The name of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * `CacheParameterGroup` &mdash; (`Object`) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *             Cache Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *           * `CacheNodeIdsToReboot` &mdash; (`Array<String>`) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * `CacheSubnetGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * `CacheNodes` &mdash; (`Array<Object>`) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * `CacheNodeId` &mdash; (`String`) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * `CacheNodeStatus` &mdash; (`String`) Specifies the current
 *             state of this Cache Node.
 *           * `CacheNodeCreateTime` &mdash; (`Date`) Provides the date and
 *             time the Cache Node was created.
 *           * `Endpoint` &mdash; (`Object`) Specifies the endpoint details
 *             for a Cache Node.
 *             * `Address` &mdash; (`String`) Specifies the DNS address of
 *               the Cache Node.
 *             * `Port` &mdash; (`Integer`) Specifies the port that the
 *               cache engine is listening on.
 *           * `ParameterGroupStatus` &mdash; (`String`) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `SecurityGroups` &mdash; (`Array<Object>`) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * `SecurityGroupId` &mdash; (`String`) The identifier of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the Cache Security
 *             Group membership. The status changes whenever a Cache
 *             Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyCacheParameterGroup(params, callback)
 *   Calls the ModifyCacheParameterGroup API operation.
 *   @param params [Object]
 *     * `CacheParameterGroupName` &mdash; **required** &mdash;
 *       (`String`) The name of the cache parameter group to modify.
 *     * `ParameterNameValues` &mdash; **required** &mdash;
 *       (`Array<Object>`) An array of parameter names and values for the
 *       parameter update. At least one parameter name and value must be
 *       supplied; subsequent arguments are optional. A maximum of 20
 *       parameters may be modified in a single request.
 *       * `ParameterName` &mdash; (`String`) Specifies the name of the
 *         parameter.
 *       * `ParameterValue` &mdash; (`String`) Specifies the value of the
 *         parameter.
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
 *       * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *         Cache Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyCacheSubnetGroup(params, callback)
 *   Calls the ModifyCacheSubnetGroup API operation.
 *   @param params [Object]
 *     * `CacheSubnetGroupName` &mdash; **required** &mdash; (`String`)
 *       The name for the Cache Subnet Group. This value is stored as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters or hyphens. Example: mysubnetgroup
 *     * `CacheSubnetGroupDescription` &mdash; (`String`) The description
 *       for the Cache Subnet Group.
 *     * `SubnetIds` &mdash; (`Array<String>`) The EC2 Subnet IDs for the
 *       Cache Subnet Group.
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
 *       * `CacheSubnetGroup` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions:
 *         CreateCacheSubnetGroup ModifyCacheSubnetGroup
 *         DescribeCacheSubnetGroups DeleteCacheSubnetGroup This data type
 *         is used as a response element in the DescribeCacheSubnetGroups
 *         action.
 *         * `CacheSubnetGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Subnet Group.
 *         * `CacheSubnetGroupDescription` &mdash; (`String`) Provides the
 *           description of the Cache Subnet Group.
 *         * `VpcId` &mdash; (`String`) Provides the VPC ID of the Cache
 *           Subnet Group.
 *         * `Subnets` &mdash; (`Array<Object>`) Contains a list of subnets
 *           for this group.
 *           * `SubnetIdentifier` &mdash; (`String`) Specifies the unique
 *             identifier for the Subnet
 *           * `SubnetAvailabilityZone` &mdash; (`Object`) Specifies the
 *             Availability Zone associated with the Subnet
 *             * `Name` &mdash; (`String`) Specifies the name of the
 *               Availability Zone
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method purchaseReservedCacheNodesOffering(params, callback)
 *   Calls the PurchaseReservedCacheNodesOffering API operation.
 *   @param params [Object]
 *     * `ReservedCacheNodesOfferingId` &mdash; **required** &mdash;
 *       (`String`) The ID of the Reserved Cache Node offering to
 *       purchase. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706
 *     * `ReservedCacheNodeId` &mdash; (`String`) Customer-specified
 *       identifier to track this reservation. Example: myreservationID
 *     * `CacheNodeCount` &mdash; (`Integer`) The number of instances to
 *       reserve. Default: 1
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
 *       * `ReservedCacheNode` &mdash; (`Object`) This data type is used as
 *         a response element in the DescribeReservedCacheNodes and
 *         PurchaseReservedCacheNodesOffering actions.
 *         * `ReservedCacheNodeId` &mdash; (`String`) The unique identifier
 *           for the reservation.
 *         * `ReservedCacheNodesOfferingId` &mdash; (`String`) The offering
 *           identifier.
 *         * `CacheNodeType` &mdash; (`String`) The cache node type for the
 *           reserved Cache Node.
 *         * `StartTime` &mdash; (`Date`) The time the reservation started.
 *         * `Duration` &mdash; (`Integer`) The duration of the reservation
 *           in seconds.
 *         * `FixedPrice` &mdash; (`Float`) The fixed price charged for
 *           this reserved Cache Node.
 *         * `UsagePrice` &mdash; (`Float`) The hourly price charged for
 *           this reserved Cache Node.
 *         * `CacheNodeCount` &mdash; (`Integer`) The number of reserved
 *           Cache Nodes.
 *         * `ProductDescription` &mdash; (`String`) The description of the
 *           reserved Cache Node.
 *         * `OfferingType` &mdash; (`String`) The offering type of this
 *           reserved Cache Node.
 *         * `State` &mdash; (`String`) The state of the reserved Cache
 *           Node.
 *         * `RecurringCharges` &mdash; (`Array<Object>`) The recurring
 *           price charged to run this reserved Cache Node.
 *           * `RecurringChargeAmount` &mdash; (`Float`) The amount of the
 *             recurring charge.
 *           * `RecurringChargeFrequency` &mdash; (`String`) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootCacheCluster(params, callback)
 *   Calls the RebootCacheCluster API operation.
 *   @param params [Object]
 *     * `CacheClusterId` &mdash; **required** &mdash; (`String`) The
 *       Cache Cluster identifier. This parameter is stored as a
 *       lowercase string.
 *     * `CacheNodeIdsToReboot` &mdash; **required** &mdash;
 *       (`Array<String>`) A list of Cache Cluster Node Ids to reboot. To
 *       reboot an entire cache cluster, specify all cache cluster node
 *       Ids.
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
 *       * `CacheCluster` &mdash; (`Object`) Contains information about a
 *         Cache Cluster.
 *         * `CacheClusterId` &mdash; (`String`) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * `ConfigurationEndpoint` &mdash; (`Object`) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the Cache Node.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the cache
 *             engine is listening on.
 *         * `ClientDownloadLandingPage` &mdash; (`String`) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * `CacheNodeType` &mdash; (`String`) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * `Engine` &mdash; (`String`) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * `EngineVersion` &mdash; (`String`) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * `CacheClusterStatus` &mdash; (`String`) Specifies the current
 *           state of this Cache Cluster.
 *         * `NumCacheNodes` &mdash; (`Integer`) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * `PreferredAvailabilityZone` &mdash; (`String`) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * `CacheClusterCreateTime` &mdash; (`Date`) Provides the date
 *           and time the Cache Cluster was created.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * `NumCacheNodes` &mdash; (`Integer`) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * `CacheNodeIdsToRemove` &mdash; (`Array<String>`) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * `EngineVersion` &mdash; (`String`) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * `NotificationConfiguration` &mdash; (`Object`) Specifies the
 *           notification details the Cache Cluster contains.
 *           * `TopicArn` &mdash; (`String`) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * `TopicStatus` &mdash; (`String`) Specifies the current state
 *             of this topic.
 *         * `CacheSecurityGroups` &mdash; (`Array<Object>`) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * `CacheSecurityGroupName` &mdash; (`String`) The name of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * `CacheParameterGroup` &mdash; (`Object`) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *             Cache Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *           * `CacheNodeIdsToReboot` &mdash; (`Array<String>`) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * `CacheSubnetGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * `CacheNodes` &mdash; (`Array<Object>`) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * `CacheNodeId` &mdash; (`String`) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * `CacheNodeStatus` &mdash; (`String`) Specifies the current
 *             state of this Cache Node.
 *           * `CacheNodeCreateTime` &mdash; (`Date`) Provides the date and
 *             time the Cache Node was created.
 *           * `Endpoint` &mdash; (`Object`) Specifies the endpoint details
 *             for a Cache Node.
 *             * `Address` &mdash; (`String`) Specifies the DNS address of
 *               the Cache Node.
 *             * `Port` &mdash; (`Integer`) Specifies the port that the
 *               cache engine is listening on.
 *           * `ParameterGroupStatus` &mdash; (`String`) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `SecurityGroups` &mdash; (`Array<Object>`) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * `SecurityGroupId` &mdash; (`String`) The identifier of the
 *             Cache Security Group.
 *           * `Status` &mdash; (`String`) The status of the Cache Security
 *             Group membership. The status changes whenever a Cache
 *             Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method resetCacheParameterGroup(params, callback)
 *   Calls the ResetCacheParameterGroup API operation.
 *   @param params [Object]
 *     * `CacheParameterGroupName` &mdash; **required** &mdash;
 *       (`String`) The name of the Cache Parameter Group.
 *     * `ResetAllParameters` &mdash; (`Boolean`) Specifies whether
 *       (true) or not (false) to reset all parameters in the Cache
 *       Parameter Group to default values.
 *     * `ParameterNameValues` &mdash; **required** &mdash;
 *       (`Array<Object>`) An array of parameter names which should be
 *       reset. If not resetting the entire CacheParameterGroup, at least
 *       one parameter name must be supplied.
 *       * `ParameterName` &mdash; (`String`) Specifies the name of the
 *         parameter.
 *       * `ParameterValue` &mdash; (`String`) Specifies the value of the
 *         parameter.
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
 *       * `CacheParameterGroupName` &mdash; (`String`) The name of the
 *         Cache Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method revokeCacheSecurityGroupIngress(params, callback)
 *   Calls the RevokeCacheSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * `CacheSecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the Cache Security Group to revoke ingress from.
 *     * `EC2SecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the EC2 Security Group to revoke access from.
 *     * `EC2SecurityGroupOwnerId` &mdash; **required** &mdash;
 *       (`String`) The AWS Account Number of the owner of the security
 *       group specified in the EC2SecurityGroupName parameter. The AWS
 *       Access Key ID is not an acceptable value.
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
 *       * `CacheSecurityGroup` &mdash; (`Object`) Defines a set of EC2
 *         Security groups that are allowed to access a Cache Cluster.
 *         * `OwnerId` &mdash; (`String`) Provides the AWS ID of the owner
 *           of a specific Cache Security Group.
 *         * `CacheSecurityGroupName` &mdash; (`String`) Specifies the name
 *           of the Cache Security Group.
 *         * `Description` &mdash; (`String`) Provides the description of
 *           the Cache Security Group.
 *         * `EC2SecurityGroups` &mdash; (`Array<Object>`) Contains a list
 *           of EC2SecurityGroup elements.
 *           * `Status` &mdash; (`String`) Provides the status of the EC2
 *             Security Group.
 *           * `EC2SecurityGroupName` &mdash; (`String`) Specifies the name
 *             of the EC2 Security Group.
 *           * `EC2SecurityGroupOwnerId` &mdash; (`String`) Specifies the
 *             AWS ID of the owner of the EC2 Security Group specified in
 *             the EC2SecurityGroupName field.
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
AWS.ElastiCache.Client = inherit({});
