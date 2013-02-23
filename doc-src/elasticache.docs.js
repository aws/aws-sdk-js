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
 * === Sending a Request Using ElastiCache
 *
 *   svc = new AWS.ElastiCache();
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
 *     * +CacheSecurityGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the Cache Security Group to authorize.
 *     * +EC2SecurityGroupName+ - (*required*, <tt>String</tt>) Name of
 *       the EC2 Security Group to include in the authorization.
 *     * +EC2SecurityGroupOwnerId+ - (*required*, <tt>String</tt>) AWS
 *       Account Number of the owner of the security group specified in
 *       the EC2SecurityGroupName parameter. The AWS Access Key ID is not
 *       an acceptable value.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheSecurityGroup+ - (<tt>Object</tt>) Defines a set of EC2
 *         Security groups that are allowed to access a Cache Cluster.
 *         * +OwnerId+ - (<tt>String</tt>) Provides the AWS ID of the owner
 *           of a specific Cache Security Group.
 *         * +CacheSecurityGroupName+ - (<tt>String</tt>) Specifies the
 *           name of the Cache Security Group.
 *         * +Description+ - (<tt>String</tt>) Provides the description of
 *           the Cache Security Group.
 *         * +EC2SecurityGroups+ - (<tt>Array<Object></tt>) Contains a list
 *           of EC2SecurityGroup elements.
 *           * +Status+ - (<tt>String</tt>) Provides the status of the EC2
 *             Security Group.
 *           * +EC2SecurityGroupName+ - (<tt>String</tt>) Specifies the
 *             name of the EC2 Security Group.
 *           * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) Specifies the
 *             AWS ID of the owner of the EC2 Security Group specified in
 *             the EC2SecurityGroupName field.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCacheCluster(params, callback)
 *   Calls the CreateCacheCluster API operation.
 *   @param params [Object]
 *     * +CacheClusterId+ - (*required*, <tt>String</tt>) The Cache
 *       Cluster identifier. This parameter is stored as a lowercase
 *       string. &cacheclusterIDconstraints;
 *     * +NumCacheNodes+ - (*required*, <tt>Integer</tt>) The number of
 *       Cache Nodes the Cache Cluster should have.
 *     * +CacheNodeType+ - (*required*, <tt>String</tt>) The compute and
 *       memory capacity of nodes in a Cache Cluster.
 *       &cachenodetypevalues;
 *     * +Engine+ - (*required*, <tt>String</tt>) The name of the cache
 *       engine to be used for this Cache Cluster. Currently, memcached
 *       is the only cache engine supported by the service.
 *     * +EngineVersion+ - (<tt>String</tt>) The version of the cache
 *       engine to be used for this cluster.
 *     * +CacheParameterGroupName+ - (<tt>String</tt>) The name of the
 *       cache parameter group to associate with this Cache cluster. If
 *       this argument is omitted, the default CacheParameterGroup for
 *       the specified engine will be used.
 *     * +CacheSubnetGroupName+ - (<tt>String</tt>) The name of the Cache
 *       Subnet Group to be used for the Cache Cluster. Use this
 *       parameter only when you are creating a cluster in an Amazon
 *       Virtual Private Cloud (VPC).
 *     * +CacheSecurityGroupNames+ - (<tt>Array<String></tt>) A list of
 *       Cache Security Group Names to associate with this Cache Cluster.
 *       Use this parameter only when you are creating a cluster outside
 *       of an Amazon Virtual Private Cloud (VPC).
 *     * +SecurityGroupIds+ - (<tt>Array<String></tt>) Specifies the VPC
 *       Security Groups associated with the Cache Cluster. Use this
 *       parameter only when you are creating a cluster in an Amazon
 *       Virtual Private Cloud (VPC).
 *     * +PreferredAvailabilityZone+ - (<tt>String</tt>) The EC2
 *       Availability Zone that the Cache Cluster will be created in. All
 *       cache nodes belonging to a cache cluster are placed in the
 *       preferred availability zone. Default: System chosen (random)
 *       availability zone.
 *     * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *       range (in UTC) during which system maintenance can occur.
 *       Example: sun:05:00-sun:09:00
 *     * +Port+ - (<tt>Integer</tt>) The port number on which each of the
 *       Cache Nodes will accept connections.
 *     * +NotificationTopicArn+ - (<tt>String</tt>) The Amazon Resource
 *       Name (ARN) of the Amazon Simple Notification Service (SNS) topic
 *       to which notifications will be sent. The Amazon SNS topic owner
 *       must be the same as the Cache Cluster owner.
 *     * +AutoMinorVersionUpgrade+ - (<tt>Boolean</tt>) Indicates that
 *       minor engine upgrades will be applied automatically to the Cache
 *       Cluster during the maintenance window. Default: true
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheCluster+ - (<tt>Object</tt>) Contains information about a
 *         Cache Cluster.
 *         * +CacheClusterId+ - (<tt>String</tt>) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * +ConfigurationEndpoint+ - (<tt>Object</tt>) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *             the Cache Node.
 *           * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *             cache engine is listening on.
 *         * +ClientDownloadLandingPage+ - (<tt>String</tt>) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * +CacheNodeType+ - (<tt>String</tt>) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * +Engine+ - (<tt>String</tt>) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * +EngineVersion+ - (<tt>String</tt>) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * +CacheClusterStatus+ - (<tt>String</tt>) Specifies the current
 *           state of this Cache Cluster.
 *         * +NumCacheNodes+ - (<tt>Integer</tt>) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * +PreferredAvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * +CacheClusterCreateTime+ - (<tt>Date</tt>) Provides the date
 *           and time the Cache Cluster was created.
 *         * +PreferredMaintenanceWindow+ - (<tt>String</tt>) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * +PendingModifiedValues+ - (<tt>Object</tt>) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * +NumCacheNodes+ - (<tt>Integer</tt>) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * +CacheNodeIdsToRemove+ - (<tt>Array<String></tt>) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * +EngineVersion+ - (<tt>String</tt>) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * +NotificationConfiguration+ - (<tt>Object</tt>) Specifies the
 *           notification details the Cache Cluster contains.
 *           * +TopicArn+ - (<tt>String</tt>) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * +TopicStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this topic.
 *         * +CacheSecurityGroups+ - (<tt>Array<Object></tt>) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * +CacheSecurityGroupName+ - (<tt>String</tt>) The name of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * +CacheParameterGroup+ - (<tt>Object</tt>) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * +CacheParameterGroupName+ - (<tt>String</tt>) The name of
 *             the Cache Parameter Group.
 *           * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *             parameter updates.
 *           * +CacheNodeIdsToReboot+ - (<tt>Array<String></tt>) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * +CacheSubnetGroupName+ - (<tt>String</tt>) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * +CacheNodes+ - (<tt>Array<Object></tt>) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * +CacheNodeId+ - (<tt>String</tt>) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * +CacheNodeStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this Cache Node.
 *           * +CacheNodeCreateTime+ - (<tt>Date</tt>) Provides the date
 *             and time the Cache Node was created.
 *           * +Endpoint+ - (<tt>Object</tt>) Specifies the endpoint
 *             details for a Cache Node.
 *             * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *               the Cache Node.
 *             * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *               cache engine is listening on.
 *           * +ParameterGroupStatus+ - (<tt>String</tt>) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * +AutoMinorVersionUpgrade+ - (<tt>Boolean</tt>) Indicates that
 *           minor version patches are applied automatically.
 *         * +SecurityGroups+ - (<tt>Array<Object></tt>) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * +SecurityGroupId+ - (<tt>String</tt>) The identifier of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the Cache
 *             Security Group membership. The status changes whenever a
 *             Cache Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCacheParameterGroup(params, callback)
 *   Calls the CreateCacheParameterGroup API operation.
 *   @param params [Object]
 *     * +CacheParameterGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the Cache Parameter Group.
 *     * +CacheParameterGroupFamily+ - (*required*, <tt>String</tt>) The
 *       name of the Cache Parameter Group Family the Cache Parameter
 *       Group can be used with. Currently, memcached1.4 is the only
 *       cache parameter group family supported by the service.
 *     * +Description+ - (*required*, <tt>String</tt>) The description
 *       for the Cache Parameter Group.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheParameterGroup+ - (<tt>Object</tt>) Contains a set of
 *         parameters and their values which can be applied to a Cache
 *         Cluster.
 *         * +CacheParameterGroupName+ - (<tt>String</tt>) Provides the
 *           name of the Cache Parameter Group.
 *         * +CacheParameterGroupFamily+ - (<tt>String</tt>) Provides the
 *           name of the Cache Parameter Group Family that this Cache
 *           Parameter Group is compatible with.
 *         * +Description+ - (<tt>String</tt>) Provides the
 *           customer-specified description for this Cache Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCacheSecurityGroup(params, callback)
 *   Calls the CreateCacheSecurityGroup API operation.
 *   @param params [Object]
 *     * +CacheSecurityGroupName+ - (*required*, <tt>String</tt>) The
 *       name for the Cache Security Group. This value is stored as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters. Must not be "Default". Example:
 *       mysecuritygroup
 *     * +Description+ - (*required*, <tt>String</tt>) The description
 *       for the Cache Security Group.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheSecurityGroup+ - (<tt>Object</tt>) Defines a set of EC2
 *         Security groups that are allowed to access a Cache Cluster.
 *         * +OwnerId+ - (<tt>String</tt>) Provides the AWS ID of the owner
 *           of a specific Cache Security Group.
 *         * +CacheSecurityGroupName+ - (<tt>String</tt>) Specifies the
 *           name of the Cache Security Group.
 *         * +Description+ - (<tt>String</tt>) Provides the description of
 *           the Cache Security Group.
 *         * +EC2SecurityGroups+ - (<tt>Array<Object></tt>) Contains a list
 *           of EC2SecurityGroup elements.
 *           * +Status+ - (<tt>String</tt>) Provides the status of the EC2
 *             Security Group.
 *           * +EC2SecurityGroupName+ - (<tt>String</tt>) Specifies the
 *             name of the EC2 Security Group.
 *           * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) Specifies the
 *             AWS ID of the owner of the EC2 Security Group specified in
 *             the EC2SecurityGroupName field.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCacheSubnetGroup(params, callback)
 *   Calls the CreateCacheSubnetGroup API operation.
 *   @param params [Object]
 *     * +CacheSubnetGroupName+ - (*required*, <tt>String</tt>) The name
 *       for the Cache Subnet Group. This value is stored as a lowercase
 *       string. Constraints: Must contain no more than 255 alphanumeric
 *       characters or hyphens. Example: mysubnetgroup
 *     * +CacheSubnetGroupDescription+ - (*required*, <tt>String</tt>)
 *       The description for the Cache Subnet Group.
 *     * +SubnetIds+ - (*required*, <tt>Array<String></tt>) The EC2
 *       Subnet IDs for the Cache Subnet Group.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheSubnetGroup+ - (<tt>Object</tt>) Contains the result of a
 *         successful invocation of the following actions:
 *         CreateCacheSubnetGroup ModifyCacheSubnetGroup
 *         DescribeCacheSubnetGroups DeleteCacheSubnetGroup This data type
 *         is used as a response element in the DescribeCacheSubnetGroups
 *         action.
 *         * +CacheSubnetGroupName+ - (<tt>String</tt>) Specifies the name
 *           of the Cache Subnet Group.
 *         * +CacheSubnetGroupDescription+ - (<tt>String</tt>) Provides the
 *           description of the Cache Subnet Group.
 *         * +VpcId+ - (<tt>String</tt>) Provides the VPC ID of the Cache
 *           Subnet Group.
 *         * +Subnets+ - (<tt>Array<Object></tt>) Contains a list of
 *           subnets for this group.
 *           * +SubnetIdentifier+ - (<tt>String</tt>) Specifies the unique
 *             identifier for the Subnet
 *           * +SubnetAvailabilityZone+ - (<tt>Object</tt>) Specifies the
 *             Availability Zone associated with the Subnet
 *             * +Name+ - (<tt>String</tt>) Specifies the name of the
 *               Availability Zone
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteCacheCluster(params, callback)
 *   Calls the DeleteCacheCluster API operation.
 *   @param params [Object]
 *     * +CacheClusterId+ - (*required*, <tt>String</tt>) The Cache
 *       Cluster identifier for the Cache Cluster to be deleted. This
 *       parameter isn't case sensitive.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheCluster+ - (<tt>Object</tt>) Contains information about a
 *         Cache Cluster.
 *         * +CacheClusterId+ - (<tt>String</tt>) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * +ConfigurationEndpoint+ - (<tt>Object</tt>) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *             the Cache Node.
 *           * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *             cache engine is listening on.
 *         * +ClientDownloadLandingPage+ - (<tt>String</tt>) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * +CacheNodeType+ - (<tt>String</tt>) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * +Engine+ - (<tt>String</tt>) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * +EngineVersion+ - (<tt>String</tt>) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * +CacheClusterStatus+ - (<tt>String</tt>) Specifies the current
 *           state of this Cache Cluster.
 *         * +NumCacheNodes+ - (<tt>Integer</tt>) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * +PreferredAvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * +CacheClusterCreateTime+ - (<tt>Date</tt>) Provides the date
 *           and time the Cache Cluster was created.
 *         * +PreferredMaintenanceWindow+ - (<tt>String</tt>) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * +PendingModifiedValues+ - (<tt>Object</tt>) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * +NumCacheNodes+ - (<tt>Integer</tt>) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * +CacheNodeIdsToRemove+ - (<tt>Array<String></tt>) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * +EngineVersion+ - (<tt>String</tt>) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * +NotificationConfiguration+ - (<tt>Object</tt>) Specifies the
 *           notification details the Cache Cluster contains.
 *           * +TopicArn+ - (<tt>String</tt>) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * +TopicStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this topic.
 *         * +CacheSecurityGroups+ - (<tt>Array<Object></tt>) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * +CacheSecurityGroupName+ - (<tt>String</tt>) The name of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * +CacheParameterGroup+ - (<tt>Object</tt>) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * +CacheParameterGroupName+ - (<tt>String</tt>) The name of
 *             the Cache Parameter Group.
 *           * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *             parameter updates.
 *           * +CacheNodeIdsToReboot+ - (<tt>Array<String></tt>) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * +CacheSubnetGroupName+ - (<tt>String</tt>) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * +CacheNodes+ - (<tt>Array<Object></tt>) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * +CacheNodeId+ - (<tt>String</tt>) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * +CacheNodeStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this Cache Node.
 *           * +CacheNodeCreateTime+ - (<tt>Date</tt>) Provides the date
 *             and time the Cache Node was created.
 *           * +Endpoint+ - (<tt>Object</tt>) Specifies the endpoint
 *             details for a Cache Node.
 *             * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *               the Cache Node.
 *             * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *               cache engine is listening on.
 *           * +ParameterGroupStatus+ - (<tt>String</tt>) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * +AutoMinorVersionUpgrade+ - (<tt>Boolean</tt>) Indicates that
 *           minor version patches are applied automatically.
 *         * +SecurityGroups+ - (<tt>Array<Object></tt>) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * +SecurityGroupId+ - (<tt>String</tt>) The identifier of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the Cache
 *             Security Group membership. The status changes whenever a
 *             Cache Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteCacheParameterGroup(params, callback)
 *   Calls the DeleteCacheParameterGroup API operation.
 *   @param params [Object]
 *     * +CacheParameterGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the Cache Parameter Group to delete. The specified cache
 *       security group must not be associated with any Cache clusters.
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
 * @!method deleteCacheSecurityGroup(params, callback)
 *   Calls the DeleteCacheSecurityGroup API operation.
 *   @param params [Object]
 *     * +CacheSecurityGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the Cache Security Group to delete. You cannot delete
 *       the default security group.
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
 * @!method deleteCacheSubnetGroup(params, callback)
 *   Calls the DeleteCacheSubnetGroup API operation.
 *   @param params [Object]
 *     * +CacheSubnetGroupName+ - (*required*, <tt>String</tt>) The name
 *       of the Cache Subnet Group to delete. Constraints: Must contain
 *       no more than 255 alphanumeric characters or hyphens.
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
 * @!method describeCacheClusters(params, callback)
 *   Calls the DescribeCacheClusters API operation.
 *   @param params [Object]
 *     * +CacheClusterId+ - (<tt>String</tt>) The user-supplied cluster
 *       identifier. If this parameter is specified, only information
 *       about that specific Cache Cluster is returned. This parameter
 *       isn't case sensitive.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. &maxrecords;
 *     * +Marker+ - (<tt>String</tt>) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
 *     * +ShowCacheNodeInfo+ - (<tt>Boolean</tt>) An optional flag that
 *       can be included in the DescribeCacheCluster request to retrieve
 *       Cache Nodes information.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) The marker obtained from a previous
 *         operation response.
 *       * +CacheClusters+ - (<tt>Array<Object></tt>) A list of
 *         CacheClusters.
 *         * +CacheClusterId+ - (<tt>String</tt>) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * +ConfigurationEndpoint+ - (<tt>Object</tt>) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *             the Cache Node.
 *           * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *             cache engine is listening on.
 *         * +ClientDownloadLandingPage+ - (<tt>String</tt>) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * +CacheNodeType+ - (<tt>String</tt>) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * +Engine+ - (<tt>String</tt>) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * +EngineVersion+ - (<tt>String</tt>) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * +CacheClusterStatus+ - (<tt>String</tt>) Specifies the current
 *           state of this Cache Cluster.
 *         * +NumCacheNodes+ - (<tt>Integer</tt>) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * +PreferredAvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * +CacheClusterCreateTime+ - (<tt>Date</tt>) Provides the date
 *           and time the Cache Cluster was created.
 *         * +PreferredMaintenanceWindow+ - (<tt>String</tt>) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * +PendingModifiedValues+ - (<tt>Object</tt>) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * +NumCacheNodes+ - (<tt>Integer</tt>) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * +CacheNodeIdsToRemove+ - (<tt>Array<String></tt>) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * +EngineVersion+ - (<tt>String</tt>) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * +NotificationConfiguration+ - (<tt>Object</tt>) Specifies the
 *           notification details the Cache Cluster contains.
 *           * +TopicArn+ - (<tt>String</tt>) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * +TopicStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this topic.
 *         * +CacheSecurityGroups+ - (<tt>Array<Object></tt>) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * +CacheSecurityGroupName+ - (<tt>String</tt>) The name of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * +CacheParameterGroup+ - (<tt>Object</tt>) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * +CacheParameterGroupName+ - (<tt>String</tt>) The name of
 *             the Cache Parameter Group.
 *           * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *             parameter updates.
 *           * +CacheNodeIdsToReboot+ - (<tt>Array<String></tt>) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * +CacheSubnetGroupName+ - (<tt>String</tt>) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * +CacheNodes+ - (<tt>Array<Object></tt>) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * +CacheNodeId+ - (<tt>String</tt>) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * +CacheNodeStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this Cache Node.
 *           * +CacheNodeCreateTime+ - (<tt>Date</tt>) Provides the date
 *             and time the Cache Node was created.
 *           * +Endpoint+ - (<tt>Object</tt>) Specifies the endpoint
 *             details for a Cache Node.
 *             * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *               the Cache Node.
 *             * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *               cache engine is listening on.
 *           * +ParameterGroupStatus+ - (<tt>String</tt>) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * +AutoMinorVersionUpgrade+ - (<tt>Boolean</tt>) Indicates that
 *           minor version patches are applied automatically.
 *         * +SecurityGroups+ - (<tt>Array<Object></tt>) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * +SecurityGroupId+ - (<tt>String</tt>) The identifier of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the Cache
 *             Security Group membership. The status changes whenever a
 *             Cache Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheEngineVersions(params, callback)
 *   Calls the DescribeCacheEngineVersions API operation.
 *   @param params [Object]
 *     * +Engine+ - (<tt>String</tt>) The cache engine to return.
 *     * +EngineVersion+ - (<tt>String</tt>) The cache engine version to
 *       return. Example: 1.4.14
 *     * +CacheParameterGroupFamily+ - (<tt>String</tt>) The name of a
 *       specific Cache Parameter Group family to return details for.
 *       Constraints: Must be 1 to 255 alphanumeric characters First
 *       character must be a letter Cannot end with a hyphen or contain
 *       two consecutive hyphens
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * +Marker+ - (<tt>String</tt>) An optional marker provided in the
 *       previous DescribeCacheParameterGroups request. If this parameter
 *       is specified, the response includes only records beyond the
 *       marker, up to the value specified by MaxRecords.
 *     * +DefaultOnly+ - (<tt>Boolean</tt>) Indicates that only the
 *       default version of the specified engine or engine and major
 *       version combination is returned.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) The identifier returned to allow
 *         retrieval of paginated results.
 *       * +CacheEngineVersions+ - (<tt>Array<Object></tt>) A list of
 *         CacheEngineVersion elements.
 *         * +Engine+ - (<tt>String</tt>) The name of the cache engine.
 *         * +EngineVersion+ - (<tt>String</tt>) The version number of the
 *           cache engine.
 *         * +CacheParameterGroupFamily+ - (<tt>String</tt>) The name of
 *           the CacheParameterGroupFamily for the cache engine.
 *         * +CacheEngineDescription+ - (<tt>String</tt>) The description
 *           of the cache engine.
 *         * +CacheEngineVersionDescription+ - (<tt>String</tt>) The
 *           description of the cache engine version.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheParameterGroups(params, callback)
 *   Calls the DescribeCacheParameterGroups API operation.
 *   @param params [Object]
 *     * +CacheParameterGroupName+ - (<tt>String</tt>) The name of a
 *       specific cache parameter group to return details for.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * +Marker+ - (<tt>String</tt>) An optional marker provided in the
 *       previous DescribeCacheParameterGroups request. If this parameter
 *       is specified, the response includes only records beyond the
 *       marker, up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) The marker obtained from a previous
 *         operation response.
 *       * +CacheParameterGroups+ - (<tt>Array<Object></tt>) A list of
 *         CacheParameterGroup instances.
 *         * +CacheParameterGroupName+ - (<tt>String</tt>) Provides the
 *           name of the Cache Parameter Group.
 *         * +CacheParameterGroupFamily+ - (<tt>String</tt>) Provides the
 *           name of the Cache Parameter Group Family that this Cache
 *           Parameter Group is compatible with.
 *         * +Description+ - (<tt>String</tt>) Provides the
 *           customer-specified description for this Cache Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheParameters(params, callback)
 *   Calls the DescribeCacheParameters API operation.
 *   @param params [Object]
 *     * +CacheParameterGroupName+ - (*required*, <tt>String</tt>) The
 *       name of a specific cache parameter group to return details for.
 *     * +Source+ - (<tt>String</tt>) The parameter types to return.
 *       Valid values: user | system | engine-default
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * +Marker+ - (<tt>String</tt>) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) The marker obtained from a previous
 *         operation response.
 *       * +Parameters+ - (<tt>Array<Object></tt>) A list of Parameter
 *         instances.
 *         * +ParameterName+ - (<tt>String</tt>) Specifies the name of the
 *           parameter.
 *         * +ParameterValue+ - (<tt>String</tt>) Specifies the value of
 *           the parameter.
 *         * +Description+ - (<tt>String</tt>) Provides a description of
 *           the parameter.
 *         * +Source+ - (<tt>String</tt>) Indicates the source of the
 *           parameter value.
 *         * +DataType+ - (<tt>String</tt>) Specifies the valid data type
 *           for the parameter.
 *         * +AllowedValues+ - (<tt>String</tt>) Specifies the valid range
 *           of values for the parameter.
 *         * +IsModifiable+ - (<tt>Boolean</tt>) Indicates whether (true)
 *           or not (false) the parameter can be modified. Some parameters
 *           have security or operational implications that prevent them
 *           from being changed.
 *         * +MinimumEngineVersion+ - (<tt>String</tt>) The earliest engine
 *           version to which the parameter can apply.
 *       * +CacheNodeTypeSpecificParameters+ - (<tt>Array<Object></tt>) A
 *         list of CacheNodeTypeSpecificParameter instances.
 *         * +ParameterName+ - (<tt>String</tt>) Specifies the name of the
 *           parameter.
 *         * +Description+ - (<tt>String</tt>) Provides a description of
 *           the parameter.
 *         * +Source+ - (<tt>String</tt>) Indicates the source of the
 *           parameter value.
 *         * +DataType+ - (<tt>String</tt>) Specifies the valid data type
 *           for the parameter.
 *         * +AllowedValues+ - (<tt>String</tt>) Specifies the valid range
 *           of values for the parameter.
 *         * +IsModifiable+ - (<tt>Boolean</tt>) Indicates whether (true)
 *           or not (false) the parameter can be modified. Some parameters
 *           have security or operational implications that prevent them
 *           from being changed.
 *         * +MinimumEngineVersion+ - (<tt>String</tt>) The earliest engine
 *           version to which the parameter can apply.
 *         * +CacheNodeTypeSpecificValues+ - (<tt>Array<Object></tt>) A
 *           list of Cache Node types and their corresponding values for
 *           this parameter.
 *           * +CacheNodeType+ - (<tt>String</tt>) Specifies the Cache Node
 *             type for which this value applies.
 *           * +Value+ - (<tt>String</tt>) Specifies the value for the
 *             Cache Node type.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheSecurityGroups(params, callback)
 *   Calls the DescribeCacheSecurityGroups API operation.
 *   @param params [Object]
 *     * +CacheSecurityGroupName+ - (<tt>String</tt>) The name of the
 *       Cache Security Group to return details for.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. &maxrecords;
 *     * +Marker+ - (<tt>String</tt>) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) The marker obtained from a previous
 *         operation response.
 *       * +CacheSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *         CacheSecurityGroup instances.
 *         * +OwnerId+ - (<tt>String</tt>) Provides the AWS ID of the owner
 *           of a specific Cache Security Group.
 *         * +CacheSecurityGroupName+ - (<tt>String</tt>) Specifies the
 *           name of the Cache Security Group.
 *         * +Description+ - (<tt>String</tt>) Provides the description of
 *           the Cache Security Group.
 *         * +EC2SecurityGroups+ - (<tt>Array<Object></tt>) Contains a list
 *           of EC2SecurityGroup elements.
 *           * +Status+ - (<tt>String</tt>) Provides the status of the EC2
 *             Security Group.
 *           * +EC2SecurityGroupName+ - (<tt>String</tt>) Specifies the
 *             name of the EC2 Security Group.
 *           * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) Specifies the
 *             AWS ID of the owner of the EC2 Security Group specified in
 *             the EC2SecurityGroupName field.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCacheSubnetGroups(params, callback)
 *   Calls the DescribeCacheSubnetGroups API operation.
 *   @param params [Object]
 *     * +CacheSubnetGroupName+ - (<tt>String</tt>) The name of the Cache
 *       Subnet Group to return details for.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * +Marker+ - (<tt>String</tt>) An optional marker provided in the
 *       previous DescribeCacheSubnetGroups request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) The marker obtained from a previous
 *         operation response.
 *       * +CacheSubnetGroups+ - (<tt>Array<Object></tt>) One or more Cache
 *         Subnet Groups.
 *         * +CacheSubnetGroupName+ - (<tt>String</tt>) Specifies the name
 *           of the Cache Subnet Group.
 *         * +CacheSubnetGroupDescription+ - (<tt>String</tt>) Provides the
 *           description of the Cache Subnet Group.
 *         * +VpcId+ - (<tt>String</tt>) Provides the VPC ID of the Cache
 *           Subnet Group.
 *         * +Subnets+ - (<tt>Array<Object></tt>) Contains a list of
 *           subnets for this group.
 *           * +SubnetIdentifier+ - (<tt>String</tt>) Specifies the unique
 *             identifier for the Subnet
 *           * +SubnetAvailabilityZone+ - (<tt>Object</tt>) Specifies the
 *             Availability Zone associated with the Subnet
 *             * +Name+ - (<tt>String</tt>) Specifies the name of the
 *               Availability Zone
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEngineDefaultParameters(params, callback)
 *   Calls the DescribeEngineDefaultParameters API operation.
 *   @param params [Object]
 *     * +CacheParameterGroupFamily+ - (*required*, <tt>String</tt>) The
 *       name of the Cache Parameter Group Family. Currently,
 *       memcached1.4 is the only cache parameter group family supported
 *       by the service.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * +Marker+ - (<tt>String</tt>) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +EngineDefaults+ - (<tt>Object</tt>) The default Parameters and
 *         CacheNodeTypeSpecificParameters for a CacheParameterGroupFamily.
 *         * +CacheParameterGroupFamily+ - (<tt>String</tt>) Specifies the
 *           name of the Cache Parameter Group Family which the engine
 *           default parameters apply to.
 *         * +Marker+ - (<tt>String</tt>) Provides an identifier to allow
 *           retrieval of paginated results.
 *         * +Parameters+ - (<tt>Array<Object></tt>) Contains a list of
 *           engine default parameters.
 *           * +ParameterName+ - (<tt>String</tt>) Specifies the name of
 *             the parameter.
 *           * +ParameterValue+ - (<tt>String</tt>) Specifies the value of
 *             the parameter.
 *           * +Description+ - (<tt>String</tt>) Provides a description of
 *             the parameter.
 *           * +Source+ - (<tt>String</tt>) Indicates the source of the
 *             parameter value.
 *           * +DataType+ - (<tt>String</tt>) Specifies the valid data type
 *             for the parameter.
 *           * +AllowedValues+ - (<tt>String</tt>) Specifies the valid
 *             range of values for the parameter.
 *           * +IsModifiable+ - (<tt>Boolean</tt>) Indicates whether (true)
 *             or not (false) the parameter can be modified. Some
 *             parameters have security or operational implications that
 *             prevent them from being changed.
 *           * +MinimumEngineVersion+ - (<tt>String</tt>) The earliest
 *             engine version to which the parameter can apply.
 *         * +CacheNodeTypeSpecificParameters+ - (<tt>Array<Object></tt>) A
 *           list of CacheNodeTypeSpecificParameter instances.
 *           * +ParameterName+ - (<tt>String</tt>) Specifies the name of
 *             the parameter.
 *           * +Description+ - (<tt>String</tt>) Provides a description of
 *             the parameter.
 *           * +Source+ - (<tt>String</tt>) Indicates the source of the
 *             parameter value.
 *           * +DataType+ - (<tt>String</tt>) Specifies the valid data type
 *             for the parameter.
 *           * +AllowedValues+ - (<tt>String</tt>) Specifies the valid
 *             range of values for the parameter.
 *           * +IsModifiable+ - (<tt>Boolean</tt>) Indicates whether (true)
 *             or not (false) the parameter can be modified. Some
 *             parameters have security or operational implications that
 *             prevent them from being changed.
 *           * +MinimumEngineVersion+ - (<tt>String</tt>) The earliest
 *             engine version to which the parameter can apply.
 *           * +CacheNodeTypeSpecificValues+ - (<tt>Array<Object></tt>) A
 *             list of Cache Node types and their corresponding values for
 *             this parameter.
 *             * +CacheNodeType+ - (<tt>String</tt>) Specifies the Cache
 *               Node type for which this value applies.
 *             * +Value+ - (<tt>String</tt>) Specifies the value for the
 *               Cache Node type.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEvents(params, callback)
 *   Calls the DescribeEvents API operation.
 *   @param params [Object]
 *     * +SourceIdentifier+ - (<tt>String</tt>) The identifier of the
 *       event source for which events will be returned. If not
 *       specified, then all sources are included in the response.
 *     * +SourceType+ - (<tt>String</tt>) The event source to retrieve
 *       events for. If no value is specified, all events are returned.
 *     * +StartTime+ - (<tt>Date</tt>) The beginning of the time interval
 *       to retrieve events for, specified in ISO 8601 format.
 *     * +EndTime+ - (<tt>Date</tt>) The end of the time interval for
 *       which to retrieve events, specified in ISO 8601 format.
 *     * +Duration+ - (<tt>Integer</tt>) The number of minutes to
 *       retrieve events for.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved.
 *     * +Marker+ - (<tt>String</tt>) An optional marker provided in the
 *       previous DescribeCacheClusters request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) The marker obtained from a previous
 *         operation response.
 *       * +Events+ - (<tt>Array<Object></tt>) A list of Event instances.
 *         * +SourceIdentifier+ - (<tt>String</tt>) Provides the identifier
 *           for the source of the event.
 *         * +SourceType+ - (<tt>String</tt>) Specifies the source type for
 *           this event.
 *         * +Message+ - (<tt>String</tt>) Provides the text of this event.
 *         * +Date+ - (<tt>Date</tt>) Specifies the date and time of the
 *           event.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedCacheNodes(params, callback)
 *   Calls the DescribeReservedCacheNodes API operation.
 *   @param params [Object]
 *     * +ReservedCacheNodeId+ - (<tt>String</tt>) The reserved Cache
 *       Node identifier filter value. Specify this parameter to show
 *       only the reservation that matches the specified reservation ID.
 *     * +ReservedCacheNodesOfferingId+ - (<tt>String</tt>) The offering
 *       identifier filter value. Specify this parameter to show only
 *       purchased reservations matching the specified offering
 *       identifier.
 *     * +CacheNodeType+ - (<tt>String</tt>) The Cache Node type filter
 *       value. Specify this parameter to show only those reservations
 *       matching the specified Cache Nodes type.
 *     * +Duration+ - (<tt>String</tt>) The duration filter value,
 *       specified in years or seconds. Specify this parameter to show
 *       only reservations for this duration. Valid Values: 1 | 3 |
 *       31536000 | 94608000
 *     * +ProductDescription+ - (<tt>String</tt>) The product description
 *       filter value. Specify this parameter to show only those
 *       reservations matching the specified product description.
 *     * +OfferingType+ - (<tt>String</tt>) The offering type filter
 *       value. Specify this parameter to show only the available
 *       offerings matching the specified offering type. Valid Values:
 *       "Light Utilization" | "Medium Utilization" | "Heavy Utilization"
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more than the MaxRecords value is
 *       available, a marker is included in the response so that the
 *       following results can be retrieved. Default: 100 Constraints:
 *       minimum 20, maximum 100
 *     * +Marker+ - (<tt>String</tt>) The marker provided in the previous
 *       request. If this parameter is specified, the response includes
 *       records beyond the marker only, up to MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) The marker provided for paginated
 *         results.
 *       * +ReservedCacheNodes+ - (<tt>Array<Object></tt>) A list of of
 *         reserved Cache Nodes.
 *         * +ReservedCacheNodeId+ - (<tt>String</tt>) The unique
 *           identifier for the reservation.
 *         * +ReservedCacheNodesOfferingId+ - (<tt>String</tt>) The
 *           offering identifier.
 *         * +CacheNodeType+ - (<tt>String</tt>) The cache node type for
 *           the reserved Cache Node.
 *         * +StartTime+ - (<tt>Date</tt>) The time the reservation
 *           started.
 *         * +Duration+ - (<tt>Integer</tt>) The duration of the
 *           reservation in seconds.
 *         * +FixedPrice+ - (<tt>Float</tt>) The fixed price charged for
 *           this reserved Cache Node.
 *         * +UsagePrice+ - (<tt>Float</tt>) The hourly price charged for
 *           this reserved Cache Node.
 *         * +CacheNodeCount+ - (<tt>Integer</tt>) The number of reserved
 *           Cache Nodes.
 *         * +ProductDescription+ - (<tt>String</tt>) The description of
 *           the reserved Cache Node.
 *         * +OfferingType+ - (<tt>String</tt>) The offering type of this
 *           reserved Cache Node.
 *         * +State+ - (<tt>String</tt>) The state of the reserved Cache
 *           Node.
 *         * +RecurringCharges+ - (<tt>Array<Object></tt>) The recurring
 *           price charged to run this reserved Cache Node.
 *           * +RecurringChargeAmount+ - (<tt>Float</tt>) The amount of the
 *             recurring charge.
 *           * +RecurringChargeFrequency+ - (<tt>String</tt>) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedCacheNodesOfferings(params, callback)
 *   Calls the DescribeReservedCacheNodesOfferings API operation.
 *   @param params [Object]
 *     * +ReservedCacheNodesOfferingId+ - (<tt>String</tt>) The offering
 *       identifier filter value. Specify this parameter to show only the
 *       available offering that matches the specified reservation
 *       identifier. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706
 *     * +CacheNodeType+ - (<tt>String</tt>) The Cache Node type filter
 *       value. Specify this parameter to show only the available
 *       offerings matching the specified Cache Node type.
 *     * +Duration+ - (<tt>String</tt>) Duration filter value, specified
 *       in years or seconds. Specify this parameter to show only
 *       reservations for this duration. Valid Values: 1 | 3 | 31536000 |
 *       94608000
 *     * +ProductDescription+ - (<tt>String</tt>) Product description
 *       filter value. Specify this parameter to show only the available
 *       offerings matching the specified product description.
 *     * +OfferingType+ - (<tt>String</tt>) The offering type filter
 *       value. Specify this parameter to show only the available
 *       offerings matching the specified offering type. Valid Values:
 *       "Light Utilization" | "Medium Utilization" | "Heavy Utilization"
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more than the MaxRecords value is
 *       available, a marker is included in the response so that the
 *       following results can be retrieved. Default: 100 Constraints:
 *       minimum 20, maximum 100
 *     * +Marker+ - (<tt>String</tt>) The marker provided in the previous
 *       request. If this parameter is specified, the response includes
 *       records beyond the marker only, up to MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) A marker provided for paginated
 *         results.
 *       * +ReservedCacheNodesOfferings+ - (<tt>Array<Object></tt>) A list
 *         of reserved Cache Node offerings.
 *         * +ReservedCacheNodesOfferingId+ - (<tt>String</tt>) The
 *           offering identifier.
 *         * +CacheNodeType+ - (<tt>String</tt>) The Cache Node type for
 *           the reserved Cache Node.
 *         * +Duration+ - (<tt>Integer</tt>) The duration of the offering
 *           in seconds.
 *         * +FixedPrice+ - (<tt>Float</tt>) The fixed price charged for
 *           this offering.
 *         * +UsagePrice+ - (<tt>Float</tt>) The hourly price charged for
 *           this offering.
 *         * +ProductDescription+ - (<tt>String</tt>) The cache engine used
 *           by the offering.
 *         * +OfferingType+ - (<tt>String</tt>) The offering type.
 *         * +RecurringCharges+ - (<tt>Array<Object></tt>) The recurring
 *           price charged to run this reserved Cache Node.
 *           * +RecurringChargeAmount+ - (<tt>Float</tt>) The amount of the
 *             recurring charge.
 *           * +RecurringChargeFrequency+ - (<tt>String</tt>) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyCacheCluster(params, callback)
 *   Calls the ModifyCacheCluster API operation.
 *   @param params [Object]
 *     * +CacheClusterId+ - (*required*, <tt>String</tt>) The Cache
 *       Cluster identifier. This value is stored as a lowercase string.
 *     * +NumCacheNodes+ - (<tt>Integer</tt>) The number of Cache Nodes
 *       the Cache Cluster should have. If NumCacheNodes is greater than
 *       the existing number of Cache Nodes, Cache Nodes will be added.
 *       If NumCacheNodes is less than the existing number of Cache
 *       Nodes, Cache Nodes will be removed. When removing Cache Nodes,
 *       the Ids of the specific Cache Nodes to be removed must be
 *       supplied using the CacheNodeIdsToRemove parameter.
 *     * +CacheNodeIdsToRemove+ - (<tt>Array<String></tt>) The list of
 *       Cache Node IDs to be removed. This parameter is only valid when
 *       NumCacheNodes is less than the existing number of Cache Nodes.
 *       The number of Cache Node Ids supplied in this parameter must
 *       match the difference between the existing number of Cache Nodes
 *       in the cluster and the new NumCacheNodes requested.
 *     * +CacheSecurityGroupNames+ - (<tt>Array<String></tt>) A list of
 *       Cache Security Group Names to authorize on this Cache Cluster.
 *       This change is asynchronously applied as soon as possible. This
 *       parameter can be used only with clusters that are created
 *       outside of an Amazon Virtual Private Cloud (VPC). Constraints:
 *       Must contain no more than 255 alphanumeric characters. Must not
 *       be "Default".
 *     * +SecurityGroupIds+ - (<tt>Array<String></tt>) Specifies the VPC
 *       Security Groups associated with the Cache Cluster. This
 *       parameter can be used only with clusters that are created in an
 *       Amazon Virtual Private Cloud (VPC).
 *     * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *       range (in UTC) during which system maintenance can occur, which
 *       may result in an outage. This change is made immediately. If
 *       moving this window to the current time, there must be at least
 *       120 minutes between the current time and end of the window to
 *       ensure pending changes are applied.
 *     * +NotificationTopicArn+ - (<tt>String</tt>) The Amazon Resource
 *       Name (ARN) of the SNS topic to which notifications will be sent.
 *       The SNS topic owner must be same as the Cache Cluster owner.
 *     * +CacheParameterGroupName+ - (<tt>String</tt>) The name of the
 *       Cache Parameter Group to apply to this Cache Cluster. This
 *       change is asynchronously applied as soon as possible for
 *       parameters when the ApplyImmediately parameter is specified as
 *       true for this request.
 *     * +NotificationTopicStatus+ - (<tt>String</tt>) The status of the
 *       Amazon SNS notification topic. The value can be active or
 *       inactive. Notifications are sent only if the status is active.
 *     * +ApplyImmediately+ - (<tt>Boolean</tt>) Specifies whether or not
 *       the modifications in this request and any pending modifications
 *       are asynchronously applied as soon as possible, regardless of
 *       the PreferredMaintenanceWindow setting for the Cache Cluster. If
 *       this parameter is passed as false, changes to the Cache Cluster
 *       are applied on the next maintenance reboot, or the next failure
 *       reboot, whichever occurs first. Default: false
 *     * +EngineVersion+ - (<tt>String</tt>) The version of the cache
 *       engine to upgrade this cluster to.
 *     * +AutoMinorVersionUpgrade+ - (<tt>Boolean</tt>) Indicates that
 *       minor engine upgrades will be applied automatically to the Cache
 *       Cluster during the maintenance window. Default: true
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheCluster+ - (<tt>Object</tt>) Contains information about a
 *         Cache Cluster.
 *         * +CacheClusterId+ - (<tt>String</tt>) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * +ConfigurationEndpoint+ - (<tt>Object</tt>) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *             the Cache Node.
 *           * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *             cache engine is listening on.
 *         * +ClientDownloadLandingPage+ - (<tt>String</tt>) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * +CacheNodeType+ - (<tt>String</tt>) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * +Engine+ - (<tt>String</tt>) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * +EngineVersion+ - (<tt>String</tt>) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * +CacheClusterStatus+ - (<tt>String</tt>) Specifies the current
 *           state of this Cache Cluster.
 *         * +NumCacheNodes+ - (<tt>Integer</tt>) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * +PreferredAvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * +CacheClusterCreateTime+ - (<tt>Date</tt>) Provides the date
 *           and time the Cache Cluster was created.
 *         * +PreferredMaintenanceWindow+ - (<tt>String</tt>) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * +PendingModifiedValues+ - (<tt>Object</tt>) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * +NumCacheNodes+ - (<tt>Integer</tt>) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * +CacheNodeIdsToRemove+ - (<tt>Array<String></tt>) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * +EngineVersion+ - (<tt>String</tt>) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * +NotificationConfiguration+ - (<tt>Object</tt>) Specifies the
 *           notification details the Cache Cluster contains.
 *           * +TopicArn+ - (<tt>String</tt>) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * +TopicStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this topic.
 *         * +CacheSecurityGroups+ - (<tt>Array<Object></tt>) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * +CacheSecurityGroupName+ - (<tt>String</tt>) The name of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * +CacheParameterGroup+ - (<tt>Object</tt>) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * +CacheParameterGroupName+ - (<tt>String</tt>) The name of
 *             the Cache Parameter Group.
 *           * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *             parameter updates.
 *           * +CacheNodeIdsToReboot+ - (<tt>Array<String></tt>) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * +CacheSubnetGroupName+ - (<tt>String</tt>) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * +CacheNodes+ - (<tt>Array<Object></tt>) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * +CacheNodeId+ - (<tt>String</tt>) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * +CacheNodeStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this Cache Node.
 *           * +CacheNodeCreateTime+ - (<tt>Date</tt>) Provides the date
 *             and time the Cache Node was created.
 *           * +Endpoint+ - (<tt>Object</tt>) Specifies the endpoint
 *             details for a Cache Node.
 *             * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *               the Cache Node.
 *             * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *               cache engine is listening on.
 *           * +ParameterGroupStatus+ - (<tt>String</tt>) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * +AutoMinorVersionUpgrade+ - (<tt>Boolean</tt>) Indicates that
 *           minor version patches are applied automatically.
 *         * +SecurityGroups+ - (<tt>Array<Object></tt>) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * +SecurityGroupId+ - (<tt>String</tt>) The identifier of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the Cache
 *             Security Group membership. The status changes whenever a
 *             Cache Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyCacheParameterGroup(params, callback)
 *   Calls the ModifyCacheParameterGroup API operation.
 *   @param params [Object]
 *     * +CacheParameterGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the cache parameter group to modify.
 *     * +ParameterNameValues+ - (*required*, <tt>Array<Object></tt>) An
 *       array of parameter names and values for the parameter update. At
 *       least one parameter name and value must be supplied; subsequent
 *       arguments are optional. A maximum of 20 parameters may be
 *       modified in a single request.
 *       * +ParameterName+ - (<tt>String</tt>) Specifies the name of the
 *         parameter.
 *       * +ParameterValue+ - (<tt>String</tt>) Specifies the value of
 *         the parameter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheParameterGroupName+ - (<tt>String</tt>) The name of the
 *         Cache Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyCacheSubnetGroup(params, callback)
 *   Calls the ModifyCacheSubnetGroup API operation.
 *   @param params [Object]
 *     * +CacheSubnetGroupName+ - (*required*, <tt>String</tt>) The name
 *       for the Cache Subnet Group. This value is stored as a lowercase
 *       string. Constraints: Must contain no more than 255 alphanumeric
 *       characters or hyphens. Example: mysubnetgroup
 *     * +CacheSubnetGroupDescription+ - (<tt>String</tt>) The
 *       description for the Cache Subnet Group.
 *     * +SubnetIds+ - (<tt>Array<String></tt>) The EC2 Subnet IDs for
 *       the Cache Subnet Group.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheSubnetGroup+ - (<tt>Object</tt>) Contains the result of a
 *         successful invocation of the following actions:
 *         CreateCacheSubnetGroup ModifyCacheSubnetGroup
 *         DescribeCacheSubnetGroups DeleteCacheSubnetGroup This data type
 *         is used as a response element in the DescribeCacheSubnetGroups
 *         action.
 *         * +CacheSubnetGroupName+ - (<tt>String</tt>) Specifies the name
 *           of the Cache Subnet Group.
 *         * +CacheSubnetGroupDescription+ - (<tt>String</tt>) Provides the
 *           description of the Cache Subnet Group.
 *         * +VpcId+ - (<tt>String</tt>) Provides the VPC ID of the Cache
 *           Subnet Group.
 *         * +Subnets+ - (<tt>Array<Object></tt>) Contains a list of
 *           subnets for this group.
 *           * +SubnetIdentifier+ - (<tt>String</tt>) Specifies the unique
 *             identifier for the Subnet
 *           * +SubnetAvailabilityZone+ - (<tt>Object</tt>) Specifies the
 *             Availability Zone associated with the Subnet
 *             * +Name+ - (<tt>String</tt>) Specifies the name of the
 *               Availability Zone
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method purchaseReservedCacheNodesOffering(params, callback)
 *   Calls the PurchaseReservedCacheNodesOffering API operation.
 *   @param params [Object]
 *     * +ReservedCacheNodesOfferingId+ - (*required*, <tt>String</tt>)
 *       The ID of the Reserved Cache Node offering to purchase. Example:
 *       438012d3-4052-4cc7-b2e3-8d3372e0e706
 *     * +ReservedCacheNodeId+ - (<tt>String</tt>) Customer-specified
 *       identifier to track this reservation. Example: myreservationID
 *     * +CacheNodeCount+ - (<tt>Integer</tt>) The number of instances to
 *       reserve. Default: 1
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservedCacheNode+ - (<tt>Object</tt>) This data type is used
 *         as a response element in the DescribeReservedCacheNodes and
 *         PurchaseReservedCacheNodesOffering actions.
 *         * +ReservedCacheNodeId+ - (<tt>String</tt>) The unique
 *           identifier for the reservation.
 *         * +ReservedCacheNodesOfferingId+ - (<tt>String</tt>) The
 *           offering identifier.
 *         * +CacheNodeType+ - (<tt>String</tt>) The cache node type for
 *           the reserved Cache Node.
 *         * +StartTime+ - (<tt>Date</tt>) The time the reservation
 *           started.
 *         * +Duration+ - (<tt>Integer</tt>) The duration of the
 *           reservation in seconds.
 *         * +FixedPrice+ - (<tt>Float</tt>) The fixed price charged for
 *           this reserved Cache Node.
 *         * +UsagePrice+ - (<tt>Float</tt>) The hourly price charged for
 *           this reserved Cache Node.
 *         * +CacheNodeCount+ - (<tt>Integer</tt>) The number of reserved
 *           Cache Nodes.
 *         * +ProductDescription+ - (<tt>String</tt>) The description of
 *           the reserved Cache Node.
 *         * +OfferingType+ - (<tt>String</tt>) The offering type of this
 *           reserved Cache Node.
 *         * +State+ - (<tt>String</tt>) The state of the reserved Cache
 *           Node.
 *         * +RecurringCharges+ - (<tt>Array<Object></tt>) The recurring
 *           price charged to run this reserved Cache Node.
 *           * +RecurringChargeAmount+ - (<tt>Float</tt>) The amount of the
 *             recurring charge.
 *           * +RecurringChargeFrequency+ - (<tt>String</tt>) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootCacheCluster(params, callback)
 *   Calls the RebootCacheCluster API operation.
 *   @param params [Object]
 *     * +CacheClusterId+ - (*required*, <tt>String</tt>) The Cache
 *       Cluster identifier. This parameter is stored as a lowercase
 *       string.
 *     * +CacheNodeIdsToReboot+ - (*required*, <tt>Array<String></tt>) A
 *       list of Cache Cluster Node Ids to reboot. To reboot an entire
 *       cache cluster, specify all cache cluster node Ids.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheCluster+ - (<tt>Object</tt>) Contains information about a
 *         Cache Cluster.
 *         * +CacheClusterId+ - (<tt>String</tt>) Specifies a user-supplied
 *           identifier. This is the unique key that identifies a Cache
 *           Cluster.
 *         * +ConfigurationEndpoint+ - (<tt>Object</tt>) Specifies a
 *           user-supplied identifier. This is the unique key that
 *           identifies a Cache Cluster.
 *           * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *             the Cache Node.
 *           * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *             cache engine is listening on.
 *         * +ClientDownloadLandingPage+ - (<tt>String</tt>) Provides the
 *           landing page to download the latest ElastiCache client
 *           library.
 *         * +CacheNodeType+ - (<tt>String</tt>) Specifies the name of the
 *           compute and memory capacity node type for the Cache Cluster.
 *         * +Engine+ - (<tt>String</tt>) Provides the name of the cache
 *           engine to be used for this Cache Cluster.
 *         * +EngineVersion+ - (<tt>String</tt>) Provides the cache engine
 *           version of the cache engine to be used for this Cache Cluster.
 *         * +CacheClusterStatus+ - (<tt>String</tt>) Specifies the current
 *           state of this Cache Cluster.
 *         * +NumCacheNodes+ - (<tt>Integer</tt>) Specifies the number of
 *           Cache Nodes the Cache Cluster contains.
 *         * +PreferredAvailabilityZone+ - (<tt>String</tt>) Specifies the
 *           name of the Availability Zone the Cache Cluster is located in.
 *         * +CacheClusterCreateTime+ - (<tt>Date</tt>) Provides the date
 *           and time the Cache Cluster was created.
 *         * +PreferredMaintenanceWindow+ - (<tt>String</tt>) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * +PendingModifiedValues+ - (<tt>Object</tt>) Specifies that
 *           changes to the Cache Cluster are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by sub-elements.
 *           * +NumCacheNodes+ - (<tt>Integer</tt>) Contains the new
 *             NumCacheNodes for the Cache Cluster that will be applied or
 *             is in progress.
 *           * +CacheNodeIdsToRemove+ - (<tt>Array<String></tt>) Contains
 *             the list of node Ids to remove from the Cache Cluster that
 *             will be applied or is in progress.
 *           * +EngineVersion+ - (<tt>String</tt>) Contains the new version
 *             of the Cache Engine the Cache Cluster will be upgraded to.
 *         * +NotificationConfiguration+ - (<tt>Object</tt>) Specifies the
 *           notification details the Cache Cluster contains.
 *           * +TopicArn+ - (<tt>String</tt>) Specifies the topic Amazon
 *             Resource Name (ARN), identifying this resource.
 *           * +TopicStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this topic.
 *         * +CacheSecurityGroups+ - (<tt>Array<Object></tt>) Provides the
 *           list of Cache Security Group elements containing
 *           CacheSecurityGroup.Name and CacheSecurityGroup.Status
 *           sub-elements.
 *           * +CacheSecurityGroupName+ - (<tt>String</tt>) The name of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the
 *             CacheSecurityGroupMembership, the status changes either when
 *             a CacheSecurityGroup is modified, or when the
 *             CacheSecurityGroups assigned to a Cache Cluster are
 *             modified.
 *         * +CacheParameterGroup+ - (<tt>Object</tt>) Provides the status
 *           of the Cache Parameter Group assigned to the Cache Cluster.
 *           * +CacheParameterGroupName+ - (<tt>String</tt>) The name of
 *             the Cache Parameter Group.
 *           * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *             parameter updates.
 *           * +CacheNodeIdsToReboot+ - (<tt>Array<String></tt>) A list of
 *             the Cache Node Ids which need to be rebooted for parameter
 *             changes to be applied.
 *         * +CacheSubnetGroupName+ - (<tt>String</tt>) Specifies the name
 *           of the Cache Subnet Group associated with the Cache Cluster.
 *         * +CacheNodes+ - (<tt>Array<Object></tt>) Specifies the list of
 *           Cache Nodes the Cache Cluster contains.
 *           * +CacheNodeId+ - (<tt>String</tt>) Specifies a Cache Node
 *             identifier. This is the unique key that identifies a Cache
 *             Node per Customer (AWS account).
 *           * +CacheNodeStatus+ - (<tt>String</tt>) Specifies the current
 *             state of this Cache Node.
 *           * +CacheNodeCreateTime+ - (<tt>Date</tt>) Provides the date
 *             and time the Cache Node was created.
 *           * +Endpoint+ - (<tt>Object</tt>) Specifies the endpoint
 *             details for a Cache Node.
 *             * +Address+ - (<tt>String</tt>) Specifies the DNS address of
 *               the Cache Node.
 *             * +Port+ - (<tt>Integer</tt>) Specifies the port that the
 *               cache engine is listening on.
 *           * +ParameterGroupStatus+ - (<tt>String</tt>) Specifies the
 *             status of the parameter group applied to this Cache Node.
 *         * +AutoMinorVersionUpgrade+ - (<tt>Boolean</tt>) Indicates that
 *           minor version patches are applied automatically.
 *         * +SecurityGroups+ - (<tt>Array<Object></tt>) Specifies the VPC
 *           Security Groups associated with the Cache Cluster.
 *           * +SecurityGroupId+ - (<tt>String</tt>) The identifier of the
 *             Cache Security Group.
 *           * +Status+ - (<tt>String</tt>) The status of the Cache
 *             Security Group membership. The status changes whenever a
 *             Cache Security Group is modified, or when the Cache Security
 *             Groups assigned to a Cache Cluster are modified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method resetCacheParameterGroup(params, callback)
 *   Calls the ResetCacheParameterGroup API operation.
 *   @param params [Object]
 *     * +CacheParameterGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the Cache Parameter Group.
 *     * +ResetAllParameters+ - (<tt>Boolean</tt>) Specifies whether
 *       (true) or not (false) to reset all parameters in the Cache
 *       Parameter Group to default values.
 *     * +ParameterNameValues+ - (*required*, <tt>Array<Object></tt>) An
 *       array of parameter names which should be reset. If not resetting
 *       the entire CacheParameterGroup, at least one parameter name must
 *       be supplied.
 *       * +ParameterName+ - (<tt>String</tt>) Specifies the name of the
 *         parameter.
 *       * +ParameterValue+ - (<tt>String</tt>) Specifies the value of
 *         the parameter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheParameterGroupName+ - (<tt>String</tt>) The name of the
 *         Cache Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method revokeCacheSecurityGroupIngress(params, callback)
 *   Calls the RevokeCacheSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * +CacheSecurityGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the Cache Security Group to revoke ingress from.
 *     * +EC2SecurityGroupName+ - (*required*, <tt>String</tt>) The name
 *       of the EC2 Security Group to revoke access from.
 *     * +EC2SecurityGroupOwnerId+ - (*required*, <tt>String</tt>) The
 *       AWS Account Number of the owner of the security group specified
 *       in the EC2SecurityGroupName parameter. The AWS Access Key ID is
 *       not an acceptable value.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CacheSecurityGroup+ - (<tt>Object</tt>) Defines a set of EC2
 *         Security groups that are allowed to access a Cache Cluster.
 *         * +OwnerId+ - (<tt>String</tt>) Provides the AWS ID of the owner
 *           of a specific Cache Security Group.
 *         * +CacheSecurityGroupName+ - (<tt>String</tt>) Specifies the
 *           name of the Cache Security Group.
 *         * +Description+ - (<tt>String</tt>) Provides the description of
 *           the Cache Security Group.
 *         * +EC2SecurityGroups+ - (<tt>Array<Object></tt>) Contains a list
 *           of EC2SecurityGroup elements.
 *           * +Status+ - (<tt>String</tt>) Provides the status of the EC2
 *             Security Group.
 *           * +EC2SecurityGroupName+ - (<tt>String</tt>) Specifies the
 *             name of the EC2 Security Group.
 *           * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) Specifies the
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
 *     to.  The default endpoint is built from the configured +region+.
 *     The endpoint should be a string like <tt>'https://s3.amazonaws.com'</tt>.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.ElastiCache.Client = inherit({});
