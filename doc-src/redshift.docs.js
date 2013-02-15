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
 * === Sending a Request Using Redshift
 *
 *   svc = new AWS.Redshift();
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
 *   @option (see AWS.Redshift.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.Redshift.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.Redshift.Client
 *
 */
AWS.Redshift = inherit({})

/**
 * The low-level Redshift client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method authorizeClusterSecurityGroupIngress(params, callback)
 *   Calls the AuthorizeClusterSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * +ClusterSecurityGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the security group to which the ingress rule is added.
 *     * +CIDRIP+ - (<tt>String</tt>) The IP range to be added the
 *       &service; security group.
 *     * +EC2SecurityGroupName+ - (<tt>String</tt>) The EC2 security
 *       group to be added the &service; security group.
 *     * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) The AWS account
 *       number of the owner of the security group specified by the
 *       EC2SecurityGroupName parameter. The AWS Access Key ID is not an
 *       acceptable value. Example: 111122223333
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *         cluster security group to which the operation was applied.
 *       * +Description+ - (<tt>String</tt>) A description of the security
 *         group.
 *       * +EC2SecurityGroups+ - (<tt>Array<Object></tt>) A list of EC2
 *         security groups that are permitted to access clusters associated
 *         with this cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the EC2 security
 *           group.
 *         * +EC2SecurityGroupName+ - (<tt>String</tt>) The name of the EC2
 *           Security Group.
 *         * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) The AWS ID of
 *           the owner of the EC2 security group specified in the
 *           EC2SecurityGroupName field.
 *       * +IPRanges+ - (<tt>Array<Object></tt>) A list of IP ranges (CIDR
 *         blocks) that are permitted to access clusters associated with
 *         this cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the IP range, for
 *           example, "authorized".
 *         * +CIDRIP+ - (<tt>String</tt>) The IP range in Classless
 *           Inter-Domain Routing (CIDR) notation.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method copyClusterSnapshot(params, callback)
 *   Calls the CopyClusterSnapshot API operation.
 *   @param params [Object]
 *     * +SourceSnapshotIdentifier+ - (*required*, <tt>String</tt>) The
 *       identifier for the source snapshot. Constraints: Must be the
 *       identifier for a valid automated snapshot whose state is
 *       "available".
 *     * +TargetSnapshotIdentifier+ - (*required*, <tt>String</tt>) The
 *       identifier given to the new manual snapshot. Constraints: Cannot
 *       be null, empty, or blank. Must contain from 1 to 255
 *       alphanumeric characters or hyphens. First character must be a
 *       letter. Cannot end with a hyphen or contain two consecutive
 *       hyphens. Must be unique for the AWS account that is making the
 *       request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SnapshotIdentifier+ - (<tt>String</tt>) The snapshot identifier
 *         that is provided in the request.
 *       * +ClusterIdentifier+ - (<tt>String</tt>) The identifier of the
 *         cluster for which the snapshot was taken.
 *       * +SnapshotCreateTime+ - (<tt>Date</tt>) The time (UTC) when
 *         &service; began the snapshot. A snapshot contains a copy of the
 *         cluster data as of this exact time.
 *       * +Status+ - (<tt>String</tt>) The snapshot status. The value of
 *         the status depends on the API operation used.
 *         CreateClusterSnapshot and CopyClusterSnapshot returns status as
 *         "creating". DescribeClusterSnapshots returns status as
 *         "creating", "available", or "failed". DeleteClusterSnapshot
 *         returns status as "deleted".
 *       * +Port+ - (<tt>Integer</tt>) The port that the cluster is
 *         listening on.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone in
 *         which the cluster was created.
 *       * +ClusterCreateTime+ - (<tt>Date</tt>) The time (UTC) when the
 *         cluster was originally created.
 *       * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *         the cluster.
 *       * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *         &service; engine that is running on the cluster.
 *       * +SnapshotType+ - (<tt>String</tt>) The snapshot type. Snapshots
 *         created using CreateClusterSnapshot and CopyClusterSnapshot will
 *         be of type "manual".
 *       * +NodeType+ - (<tt>String</tt>) The node type of the nodes in the
 *         cluster.
 *       * +NumberOfNodes+ - (<tt>Integer</tt>) The number of nodes in the
 *         cluster.
 *       * +DBName+ - (<tt>String</tt>) The name of the database that was
 *         created when the cluster was created.
 *       * +VpcId+ - (<tt>String</tt>) The VPC identifier of the cluster if
 *         the snapshot is from a cluster in a VPC.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createCluster(params, callback)
 *   Calls the CreateCluster API operation.
 *   @param params [Object]
 *     * +DBName+ - (<tt>String</tt>) The name of the first database to
 *       be created when the cluster is created. To create additional
 *       databases after the cluster is created, connect to the cluster
 *       with a SQL client and use SQL commands to create a database. For
 *       more information, go to Create a Database in the &service;
 *       Developer Guide. Default: dev Constraints: Must contain 1 to 64
 *       alphanumeric characters. Must contain only lowercase letters.
 *       Cannot be a word that is reserved by the service. A list of
 *       reserved words can be found in Reserved Words in the &service;
 *       Developer Guide.
 *     * +ClusterIdentifier+ - (*required*, <tt>String</tt>) A unique
 *       identifier for the cluster. You use this identifier to refer to
 *       the cluster for any subsequent cluster operations such as
 *       deleting or modifying. The identifier also appears in the
 *       &service; console. &clusterIDConstraints; Example:
 *       myexamplecluster
 *     * +ClusterType+ - (<tt>String</tt>) The type of the cluster. When
 *       cluster type is specified as single-node, the NumberOfNodes
 *       parameter is not required. multi-node, the NumberOfNodes
 *       parameter is required. Valid Values: multi-node | single-node
 *       Default: multi-node
 *     * +NodeType+ - (*required*, <tt>String</tt>) The node type to be
 *       provisioned for the cluster. For information about node types,
 *       go to Working with Clusters in the Amazon Redshift Management
 *       Guide. Valid Values: dw.hs1.xlarge | dw.hs1.8xlarge.
 *     * +MasterUsername+ - (*required*, <tt>String</tt>) The user name
 *       associated with the master user account for the cluster that is
 *       being created. Constraints: Must be 1 - 128 alphanumeric
 *       characters. First character must be a letter. Cannot be a
 *       reserved word. A list of reserved words can be found in Reserved
 *       Words in the &service; Developer Guide.
 *     * +MasterUserPassword+ - (*required*, <tt>String</tt>) The
 *       password associated with the master user account for the cluster
 *       that is being created. Constraints: Must be between 8 and 64
 *       characters in length. Must contain at least one uppercase
 *       letter. Must contain one lowercase letter. Must contain one
 *       number.
 *     * +ClusterSecurityGroups+ - (<tt>Array<String></tt>) A list of
 *       security groups to be associated with this cluster. Default: The
 *       default cluster security group for &service;.
 *     * +VpcSecurityGroupIds+ - (<tt>Array<String></tt>) A list of
 *       Virtual Private Cloud (VPC) security groups to associate with
 *       the cluster. Default: The default VPC security group is
 *       associated. Type: String list
 *     * +ClusterSubnetGroupName+ - (<tt>String</tt>) A cluster subnet
 *       group to be associated with this cluster. If this parameter is
 *       not provided the resulting cluster will be deployed outside
 *       virtual private cloud (VPC).
 *     * +AvailabilityZone+ - (<tt>String</tt>) The EC2 Availability Zone
 *       (AZ) in which you want &service; to provision the cluster. For
 *       example, if you have several EC2 instances running in a specific
 *       Availability Zone, then you might want the cluster to be
 *       provisioned in the same zone in order to decrease network
 *       latency. Default: A random, system-chosen Availability Zone in
 *       the region that is specified by the endpoint. Example:
 *       us-east-1d Constraint: The specified Availability Zone must be
 *       in the same region as the current endpoint.
 *     * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *       range (in UTC) during which automated cluster maintenance can
 *       occur. Format: ddd:hh24:mi-ddd:hh24:mi Default: A 30-minute
 *       window selected at random from an 8-hour block of time per
 *       region, occurring on a random day of the week. The following
 *       list shows the time blocks for each region from which the
 *       default maintenance windows are assigned. US-East (Northern
 *       Virginia) Region: 03:00-11:00 UTC US-West (Northern California)
 *       Region: 06:00-14:00 UTC EU (Ireland) Region: 22:00-06:00 UTC
 *       Asia Pacific (Singapore) Region: 14:00-22:00 UTC Asia Pacific
 *       (Tokyo) Region: 17:00-03:00 UTC Valid Days: Mon | Tue | Wed |
 *       Thu | Fri | Sat | Sun Constraints: Minimum 30-minute window.
 *     * +ClusterParameterGroupName+ - (<tt>String</tt>) The name of the
 *       parameter group to be associated with this cluster. Default: The
 *       default &service; cluster parameter group. For information about
 *       the default parameter group, go to Working with Amazon Redshift
 *       Parameter Groups Constraints: Must be 1 to 255 alphanumeric
 *       characters or hyphens. First character must be a letter. Cannot
 *       end with a hyphen or contain two consecutive hyphens.
 *     * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *       number of days that automated snapshots are retained. If the
 *       value is 0, automated snapshots are disabled. Even if automated
 *       snapshots are disabled, you can still create manual snapshots
 *       when you want with CreateClusterSnapshot. Default: 1
 *       Constraints: Must be a value from 0 to 35.
 *     * +Port+ - (<tt>Integer</tt>) The port number on which the cluster
 *       accepts incoming connections. The cluster is accessible only via
 *       the JDBC and ODBC connection strings. Part of the connection
 *       string requires the port on which the cluster will listen for
 *       incoming connections. Default: 5439 Valid Values: 1150-65535 ???
 *     * +ClusterVersion+ - (<tt>String</tt>) The version of the
 *       &service; engine software that you want to deploy on the
 *       cluster. The version selected runs on all the nodes in the
 *       cluster. Constraints: Only version 1.0 is currently available.
 *       Example: 1.0
 *     * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, upgrades can
 *       be applied during the maintenance window to the &service; engine
 *       that is running on the cluster. When a new version of the
 *       &service; engine is released, you can request that the service
 *       automatically apply upgrades during the maintenance window to
 *       the &service; engine that is running on your cluster. Default:
 *       true
 *     * +NumberOfNodes+ - (<tt>Integer</tt>) The number of compute nodes
 *       in the cluster. This parameter is required when the ClusterType
 *       parameter is specified as multi-node. For information about
 *       determining how many nodes you need, go to Working with Clusters
 *       in the Amazon Redshift Management Guide. If you don't specify
 *       this parameter, you get a single-node cluster. When requesting a
 *       multi-node cluster, you must specify the number of nodes that
 *       you want in the cluster. Default: 1 Constraints: Value must be
 *       at least 1 and no more than 100.
 *     * +PubliclyAccessible+ - (<tt>Boolean</tt>) If true, the cluster
 *       can be accessed from a public network.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterIdentifier+ - (<tt>String</tt>) The unique identifier of
 *         the cluster.
 *       * +NodeType+ - (<tt>String</tt>) The node type for the nodes in
 *         the cluster.
 *       * +ClusterStatus+ - (<tt>String</tt>) The current state of this
 *         cluster. Possible values include "available", "creating",
 *         "deleting", "rebooting", and "resizing".
 *       * +ModifyStatus+ - (<tt>String</tt>) The status of a modify
 *         operation, if any, initiated for the cluster.
 *       * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *         the cluster. This name is used to connect to the database
 *         specified in DBName.
 *       * +DBName+ - (<tt>String</tt>) The name of the initial database
 *         that was provided when the cluster was created. This same name
 *         is returned for the life of the cluster. If an initial database
 *         was not specified, a database named "dev" was created by
 *         default.
 *       * +Endpoint+ - (<tt>Object</tt>) The connection endpoint.
 *         * +Address+ - (<tt>String</tt>) The DNS address of the Cluster.
 *         * +Port+ - (<tt>Integer</tt>) The port that the database engine
 *           is listening on.
 *       * +ClusterCreateTime+ - (<tt>Date</tt>) The date and time that the
 *         cluster was created.
 *       * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *         number of days that automatic cluster snapshots are retained.
 *       * +ClusterSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *         cluster security group that are associated with the cluster.
 *         Each security group is represented by an element that contains
 *         ClusterSecurityGroup.Name and ClusterSecurityGroup.Status
 *         subelements. Cluster security groups are used when the cluster
 *         is not created in a VPC.
 *         * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *           cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the cluster
 *           security group.
 *       * +VpcSecurityGroups+ - (<tt>Array<Object></tt>) A list of Virtual
 *         Private Cloud (VPC) security groups that are associated with the
 *         cluster. This parameter is only valid when the cluster is in a
 *         VPC.
 *         * +VpcSecurityGroupId+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *       * +ClusterParameterGroups+ - (<tt>Array<Object></tt>) The list of
 *         cluster parameter groups that are associated with this cluster.
 *         * +ParameterGroupName+ - (<tt>String</tt>) The name of the
 *           cluster parameter group.
 *         * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *           parameter updates.
 *       * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *         subnet group that is associated with the cluster. This parameter
 *         is only valid when the cluster is in a VPC.
 *       * +VpcId+ - (<tt>String</tt>) The indentifier of the VPC the
 *         cluster is in, if the cluster is in a VPC.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The name of the
 *         Availability Zone in which the cluster is located.
 *       * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *         range (in UTC) during which system maintenance can occur.
 *       * +PendingModifiedValues+ - (<tt>Object</tt>) If present, changes
 *         to the cluster are pending. Specific changes are identified by
 *         subelements.
 *         * +MasterUserPassword+ - (<tt>String</tt>) The pending or
 *           in-progress change of the master credentials for the cluster.
 *         * +NodeType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster's node type.
 *         * +NumberOfNodes+ - (<tt>Integer</tt>) The pending or
 *           in-progress change of the number nodes in the cluster.
 *         * +ClusterType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster type.
 *         * +ClusterVersion+ - (<tt>String</tt>) The pending or
 *           in-progress change of the service version.
 *         * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *           pending or in-progress change of the automated snapshot
 *           retention period.
 *       * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *         &service; engine that is running on the cluster.
 *       * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, version
 *         upgrades will be applied automatically to the cluster during the
 *         maintenance window.
 *       * +NumberOfNodes+ - (<tt>Integer</tt>) The number of compute nodes
 *         in the cluster.
 *       * +PubliclyAccessible+ - (<tt>Boolean</tt>) If true, the cluster
 *         can be accessed from a public network.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createClusterParameterGroup(params, callback)
 *   Calls the CreateClusterParameterGroup API operation.
 *   @param params [Object]
 *     * +ParameterGroupName+ - (*required*, <tt>String</tt>) The name of
 *       the cluster parameter group. Constraints: Must be 1 to 255
 *       alphanumeric characters or hyphens First character must be a
 *       letter. Cannot end with a hyphen or contain two consecutive
 *       hyphens. Must be unique withing your AWS account. This value is
 *       stored as a lower-case string.
 *     * +ParameterGroupFamily+ - (*required*, <tt>String</tt>) The
 *       &service; engine version to which the cluster parameter group
 *       applies. The cluster engine version determines the set of
 *       parameters. To get a list of valid parameter group family names,
 *       you can call DescribeClusterParameterGroups. By default, Amazon
 *       Redshift returns a list of all the parameter groups that are
 *       owned by your AWS account, including the default parameter
 *       groups for each Amazon Redshift engine version. The parameter
 *       group family names associated with the default parameter groups
 *       provide you the valid values. For example, a valid family name
 *       is "redshift-1.0".
 *     * +Description+ - (*required*, <tt>String</tt>) A description of
 *       the parameter group.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ParameterGroupName+ - (<tt>String</tt>) The name of the cluster
 *         parameter group.
 *       * +ParameterGroupFamily+ - (<tt>String</tt>) The name of the
 *         cluster parameter group family that this cluster parameter group
 *         is compatible with.
 *       * +Description+ - (<tt>String</tt>) The description of the
 *         parameter group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createClusterSecurityGroup(params, callback)
 *   Calls the CreateClusterSecurityGroup API operation.
 *   @param params [Object]
 *     * +ClusterSecurityGroupName+ - (*required*, <tt>String</tt>) The
 *       name for the security group. &service; stores the value as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters or hyphens. Must not be "Default". Must
 *       be unique for all security groups that are created by your AWS
 *       account. Example: examplesecuritygroup
 *     * +Description+ - (*required*, <tt>String</tt>) A description for
 *       the security group.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *         cluster security group to which the operation was applied.
 *       * +Description+ - (<tt>String</tt>) A description of the security
 *         group.
 *       * +EC2SecurityGroups+ - (<tt>Array<Object></tt>) A list of EC2
 *         security groups that are permitted to access clusters associated
 *         with this cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the EC2 security
 *           group.
 *         * +EC2SecurityGroupName+ - (<tt>String</tt>) The name of the EC2
 *           Security Group.
 *         * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) The AWS ID of
 *           the owner of the EC2 security group specified in the
 *           EC2SecurityGroupName field.
 *       * +IPRanges+ - (<tt>Array<Object></tt>) A list of IP ranges (CIDR
 *         blocks) that are permitted to access clusters associated with
 *         this cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the IP range, for
 *           example, "authorized".
 *         * +CIDRIP+ - (<tt>String</tt>) The IP range in Classless
 *           Inter-Domain Routing (CIDR) notation.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createClusterSnapshot(params, callback)
 *   Calls the CreateClusterSnapshot API operation.
 *   @param params [Object]
 *     * +SnapshotIdentifier+ - (*required*, <tt>String</tt>) A unique
 *       identifier for the snapshot that you are requesting. This
 *       identifier must be unique for all snapshots within the AWS
 *       account. Constraints: Cannot be null, empty, or blank Must
 *       contain from 1 to 255 alphanumeric characters or hyphens First
 *       character must be a letter Cannot end with a hyphen or contain
 *       two consecutive hyphens Example: my-snapshot-id
 *     * +ClusterIdentifier+ - (*required*, <tt>String</tt>) The cluster
 *       identifier for which you want a snapshot.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SnapshotIdentifier+ - (<tt>String</tt>) The snapshot identifier
 *         that is provided in the request.
 *       * +ClusterIdentifier+ - (<tt>String</tt>) The identifier of the
 *         cluster for which the snapshot was taken.
 *       * +SnapshotCreateTime+ - (<tt>Date</tt>) The time (UTC) when
 *         &service; began the snapshot. A snapshot contains a copy of the
 *         cluster data as of this exact time.
 *       * +Status+ - (<tt>String</tt>) The snapshot status. The value of
 *         the status depends on the API operation used.
 *         CreateClusterSnapshot and CopyClusterSnapshot returns status as
 *         "creating". DescribeClusterSnapshots returns status as
 *         "creating", "available", or "failed". DeleteClusterSnapshot
 *         returns status as "deleted".
 *       * +Port+ - (<tt>Integer</tt>) The port that the cluster is
 *         listening on.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone in
 *         which the cluster was created.
 *       * +ClusterCreateTime+ - (<tt>Date</tt>) The time (UTC) when the
 *         cluster was originally created.
 *       * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *         the cluster.
 *       * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *         &service; engine that is running on the cluster.
 *       * +SnapshotType+ - (<tt>String</tt>) The snapshot type. Snapshots
 *         created using CreateClusterSnapshot and CopyClusterSnapshot will
 *         be of type "manual".
 *       * +NodeType+ - (<tt>String</tt>) The node type of the nodes in the
 *         cluster.
 *       * +NumberOfNodes+ - (<tt>Integer</tt>) The number of nodes in the
 *         cluster.
 *       * +DBName+ - (<tt>String</tt>) The name of the database that was
 *         created when the cluster was created.
 *       * +VpcId+ - (<tt>String</tt>) The VPC identifier of the cluster if
 *         the snapshot is from a cluster in a VPC.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createClusterSubnetGroup(params, callback)
 *   Calls the CreateClusterSubnetGroup API operation.
 *   @param params [Object]
 *     * +ClusterSubnetGroupName+ - (*required*, <tt>String</tt>) The
 *       name for the subnet group. &service; stores the value as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters or hyphens. Must not be "Default". Must
 *       be unique for all subnet groups that are created by your AWS
 *       account. Example: examplesubnetgroup
 *     * +Description+ - (*required*, <tt>String</tt>) A description for
 *       the subnet group.
 *     * +SubnetIds+ - (*required*, <tt>Array<String></tt>) An array of
 *       VPC subnet IDs. A maximum of 20 subnets can be modified in a
 *       single request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *         cluster subnet group.
 *       * +Description+ - (<tt>String</tt>) The description of the cluster
 *         subnet group.
 *       * +VpcId+ - (<tt>String</tt>) The VPC ID of the cluster subnet
 *         group.
 *       * +SubnetGroupStatus+ - (<tt>String</tt>) The status of the
 *         cluster subnet group. The valid values are "Complete",
 *         "Incomplete" and "Invalid".
 *       * +Subnets+ - (<tt>Array<Object></tt>) A list of the VPC Subnet
 *         elements.
 *         * +SubnetIdentifier+ - (<tt>String</tt>) The identifier of the
 *           subnet.
 *         * +SubnetAvailabilityZone+ - (<tt>Object</tt>)
 *           * +Name+ - (<tt>String</tt>) The name of the availability
 *             zone.
 *         * +SubnetStatus+ - (<tt>String</tt>) The status of the subnet.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteCluster(params, callback)
 *   Calls the DeleteCluster API operation.
 *   @param params [Object]
 *     * +ClusterIdentifier+ - (*required*, <tt>String</tt>) The
 *       identifier of the cluster to be deleted. Constraints: Must
 *       contain lowercase characters. Must contain from 1 to 63
 *       alphanumeric characters or hyphens. First character must be a
 *       letter. Cannot end with a hyphen or contain two consecutive
 *       hyphens.
 *     * +SkipFinalClusterSnapshot+ - (<tt>Boolean</tt>) Determines
 *       whether a final snapshot of the cluster is created before
 *       &service; deletes the cluster. If true, a final cluster snapshot
 *       is not created. If false, a final cluster snapshot is created
 *       before the cluster is deleted. The
 *       FinalClusterSnapshotIdentifier parameter must be specified if
 *       SkipFinalClusterSnapshot is false.Default: false
 *     * +FinalClusterSnapshotIdentifier+ - (<tt>String</tt>) The
 *       identifier of the final snapshot that is to be created
 *       immediately before deleting the cluster. If this parameter is
 *       provided, SkipFinalClusterSnapshot must be false. Constraints:
 *       Must be 1 to 255 alphanumeric characters. First character must
 *       be a letter. Cannot end with a hyphen or contain two consecutive
 *       hyphens.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterIdentifier+ - (<tt>String</tt>) The unique identifier of
 *         the cluster.
 *       * +NodeType+ - (<tt>String</tt>) The node type for the nodes in
 *         the cluster.
 *       * +ClusterStatus+ - (<tt>String</tt>) The current state of this
 *         cluster. Possible values include "available", "creating",
 *         "deleting", "rebooting", and "resizing".
 *       * +ModifyStatus+ - (<tt>String</tt>) The status of a modify
 *         operation, if any, initiated for the cluster.
 *       * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *         the cluster. This name is used to connect to the database
 *         specified in DBName.
 *       * +DBName+ - (<tt>String</tt>) The name of the initial database
 *         that was provided when the cluster was created. This same name
 *         is returned for the life of the cluster. If an initial database
 *         was not specified, a database named "dev" was created by
 *         default.
 *       * +Endpoint+ - (<tt>Object</tt>) The connection endpoint.
 *         * +Address+ - (<tt>String</tt>) The DNS address of the Cluster.
 *         * +Port+ - (<tt>Integer</tt>) The port that the database engine
 *           is listening on.
 *       * +ClusterCreateTime+ - (<tt>Date</tt>) The date and time that the
 *         cluster was created.
 *       * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *         number of days that automatic cluster snapshots are retained.
 *       * +ClusterSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *         cluster security group that are associated with the cluster.
 *         Each security group is represented by an element that contains
 *         ClusterSecurityGroup.Name and ClusterSecurityGroup.Status
 *         subelements. Cluster security groups are used when the cluster
 *         is not created in a VPC.
 *         * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *           cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the cluster
 *           security group.
 *       * +VpcSecurityGroups+ - (<tt>Array<Object></tt>) A list of Virtual
 *         Private Cloud (VPC) security groups that are associated with the
 *         cluster. This parameter is only valid when the cluster is in a
 *         VPC.
 *         * +VpcSecurityGroupId+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *       * +ClusterParameterGroups+ - (<tt>Array<Object></tt>) The list of
 *         cluster parameter groups that are associated with this cluster.
 *         * +ParameterGroupName+ - (<tt>String</tt>) The name of the
 *           cluster parameter group.
 *         * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *           parameter updates.
 *       * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *         subnet group that is associated with the cluster. This parameter
 *         is only valid when the cluster is in a VPC.
 *       * +VpcId+ - (<tt>String</tt>) The indentifier of the VPC the
 *         cluster is in, if the cluster is in a VPC.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The name of the
 *         Availability Zone in which the cluster is located.
 *       * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *         range (in UTC) during which system maintenance can occur.
 *       * +PendingModifiedValues+ - (<tt>Object</tt>) If present, changes
 *         to the cluster are pending. Specific changes are identified by
 *         subelements.
 *         * +MasterUserPassword+ - (<tt>String</tt>) The pending or
 *           in-progress change of the master credentials for the cluster.
 *         * +NodeType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster's node type.
 *         * +NumberOfNodes+ - (<tt>Integer</tt>) The pending or
 *           in-progress change of the number nodes in the cluster.
 *         * +ClusterType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster type.
 *         * +ClusterVersion+ - (<tt>String</tt>) The pending or
 *           in-progress change of the service version.
 *         * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *           pending or in-progress change of the automated snapshot
 *           retention period.
 *       * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *         &service; engine that is running on the cluster.
 *       * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, version
 *         upgrades will be applied automatically to the cluster during the
 *         maintenance window.
 *       * +NumberOfNodes+ - (<tt>Integer</tt>) The number of compute nodes
 *         in the cluster.
 *       * +PubliclyAccessible+ - (<tt>Boolean</tt>) If true, the cluster
 *         can be accessed from a public network.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteClusterParameterGroup(params, callback)
 *   Calls the DeleteClusterParameterGroup API operation.
 *   @param params [Object]
 *     * +ParameterGroupName+ - (*required*, <tt>String</tt>) The name of
 *       the parameter group to be deleted. Constraints: Must be the name
 *       of an existing cluster parameter group. Cannot delete a default
 *       cluster parameter group.
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
 * @!method deleteClusterSecurityGroup(params, callback)
 *   Calls the DeleteClusterSecurityGroup API operation.
 *   @param params [Object]
 *     * +ClusterSecurityGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the cluster security group to be deleted.
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
 * @!method deleteClusterSnapshot(params, callback)
 *   Calls the DeleteClusterSnapshot API operation.
 *   @param params [Object]
 *     * +SnapshotIdentifier+ - (*required*, <tt>String</tt>) The unique
 *       identifier of the manual snapshot to be deleted. Constraints:
 *       Must be the name of an existing snapshot that is in the
 *       available state.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SnapshotIdentifier+ - (<tt>String</tt>) The snapshot identifier
 *         that is provided in the request.
 *       * +ClusterIdentifier+ - (<tt>String</tt>) The identifier of the
 *         cluster for which the snapshot was taken.
 *       * +SnapshotCreateTime+ - (<tt>Date</tt>) The time (UTC) when
 *         &service; began the snapshot. A snapshot contains a copy of the
 *         cluster data as of this exact time.
 *       * +Status+ - (<tt>String</tt>) The snapshot status. The value of
 *         the status depends on the API operation used.
 *         CreateClusterSnapshot and CopyClusterSnapshot returns status as
 *         "creating". DescribeClusterSnapshots returns status as
 *         "creating", "available", or "failed". DeleteClusterSnapshot
 *         returns status as "deleted".
 *       * +Port+ - (<tt>Integer</tt>) The port that the cluster is
 *         listening on.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone in
 *         which the cluster was created.
 *       * +ClusterCreateTime+ - (<tt>Date</tt>) The time (UTC) when the
 *         cluster was originally created.
 *       * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *         the cluster.
 *       * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *         &service; engine that is running on the cluster.
 *       * +SnapshotType+ - (<tt>String</tt>) The snapshot type. Snapshots
 *         created using CreateClusterSnapshot and CopyClusterSnapshot will
 *         be of type "manual".
 *       * +NodeType+ - (<tt>String</tt>) The node type of the nodes in the
 *         cluster.
 *       * +NumberOfNodes+ - (<tt>Integer</tt>) The number of nodes in the
 *         cluster.
 *       * +DBName+ - (<tt>String</tt>) The name of the database that was
 *         created when the cluster was created.
 *       * +VpcId+ - (<tt>String</tt>) The VPC identifier of the cluster if
 *         the snapshot is from a cluster in a VPC.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteClusterSubnetGroup(params, callback)
 *   Calls the DeleteClusterSubnetGroup API operation.
 *   @param params [Object]
 *     * +ClusterSubnetGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the cluster subnet group name to be deleted.
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
 * @!method describeClusterParameterGroups(params, callback)
 *   Calls the DescribeClusterParameterGroups API operation.
 *   @param params [Object]
 *     * +ParameterGroupName+ - (<tt>String</tt>) The name of a specific
 *       parameter group for which to return details. By default, details
 *       about all parameter groups and the default parameter group are
 *       returned.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of
 *       parameter group records to include in the response. If more
 *       records exist than the specified MaxRecords value, the response
 *       includes a marker that you can use in a subsequent
 *       DescribeClusterParameterGroups request to retrieve the next set
 *       of records. Default: 100 Constraints: Value must be at least 20
 *       and no more than 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned by a
 *       previous DescribeClusterParameterGroups request to indicate the
 *       first parameter group that the current request will return.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) A marker at which to continue
 *         listing cluster parameter groups in a new request. The response
 *         returns a marker if there are more parameter groups to list than
 *         returned in the response.
 *       * +ParameterGroups+ - (<tt>Array<Object></tt>) A list of
 *         ClusterParameterGroup instances. Each instance describes one
 *         cluster parameter group.
 *         * +ParameterGroupName+ - (<tt>String</tt>) The name of the
 *           cluster parameter group.
 *         * +ParameterGroupFamily+ - (<tt>String</tt>) The name of the
 *           cluster parameter group family that this cluster parameter
 *           group is compatible with.
 *         * +Description+ - (<tt>String</tt>) The description of the
 *           parameter group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeClusterParameters(params, callback)
 *   Calls the DescribeClusterParameters API operation.
 *   @param params [Object]
 *     * +ParameterGroupName+ - (*required*, <tt>String</tt>) The name of
 *       a cluster parameter group for which to return details.
 *     * +Source+ - (<tt>String</tt>) The parameter types to return.
 *       Specify user to show parameters that are different form the
 *       default. Similarly, specify engine-default to show parameters
 *       that are the same as the default parameter group. Default: All
 *       parameter types returned. Valid Values: user | engine-default
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, response includes a marker that you
 *       can specify in your subsequent request to retrieve remaining
 *       result. Default: 100 Constraints: Value must be at least 20 and
 *       no more than 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned from a
 *       previous DescribeClusterParameters request. If this parameter is
 *       specified, the response includes only records beyond the
 *       specified marker, up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Parameters+ - (<tt>Array<Object></tt>) A list of Parameter
 *         instances. Each instance lists the parameters of one cluster
 *         parameter group.
 *         * +ParameterName+ - (<tt>String</tt>) The name of the parameter.
 *         * +ParameterValue+ - (<tt>String</tt>) The value of the
 *           parameter.
 *         * +Description+ - (<tt>String</tt>) A description of the
 *           parameter.
 *         * +Source+ - (<tt>String</tt>) The source of the parameter
 *           value, such as "engine-default" or "user".
 *         * +DataType+ - (<tt>String</tt>) The data type of the parameter.
 *         * +AllowedValues+ - (<tt>String</tt>) The valid range of values
 *           for the parameter.
 *         * +IsModifiable+ - (<tt>Boolean</tt>) If true, the parameter can
 *           be modified. Some parameters have security or operational
 *           implications that prevent them from being changed.
 *         * +MinimumEngineVersion+ - (<tt>String</tt>) The earliest engine
 *           version to which the parameter can apply.
 *       * +Marker+ - (<tt>String</tt>) A marker that indicates the first
 *         parameter group that a subsequent DescribeClusterParameterGroups
 *         request will return. The response returns a marker only if there
 *         are more parameter groups details to list than the current
 *         response can return.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeClusterSecurityGroups(params, callback)
 *   Calls the DescribeClusterSecurityGroups API operation.
 *   @param params [Object]
 *     * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of a
 *       cluster security group for which you are requesting details. You
 *       can specify either the Marker parameter or a
 *       ClusterSecurityGroupName parameter, but not both. Example:
 *       securitygroup1
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to be included in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the
 *       response, which you can use in a subsequent
 *       DescribeClusterSecurityGroups request. Default: 100 Constraints:
 *       Value must be at least 20 and no more than 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned by a
 *       previous DescribeClusterSecurityGroups request to indicate the
 *       first security group that the current request will return. You
 *       can specify either the Marker parameter or a
 *       ClusterSecurityGroupName parameter, but not both.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) A marker at which to continue
 *         listing cluster security groups in a new request. The response
 *         returns a marker if there are more security groups to list than
 *         could be returned in the response.
 *       * +ClusterSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *         ClusterSecurityGroup instances.
 *         * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *           cluster security group to which the operation was applied.
 *         * +Description+ - (<tt>String</tt>) A description of the
 *           security group.
 *         * +EC2SecurityGroups+ - (<tt>Array<Object></tt>) A list of EC2
 *           security groups that are permitted to access clusters
 *           associated with this cluster security group.
 *           * +Status+ - (<tt>String</tt>) The status of the EC2 security
 *             group.
 *           * +EC2SecurityGroupName+ - (<tt>String</tt>) The name of the
 *             EC2 Security Group.
 *           * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) The AWS ID of
 *             the owner of the EC2 security group specified in the
 *             EC2SecurityGroupName field.
 *         * +IPRanges+ - (<tt>Array<Object></tt>) A list of IP ranges
 *           (CIDR blocks) that are permitted to access clusters associated
 *           with this cluster security group.
 *           * +Status+ - (<tt>String</tt>) The status of the IP range, for
 *             example, "authorized".
 *           * +CIDRIP+ - (<tt>String</tt>) The IP range in Classless
 *             Inter-Domain Routing (CIDR) notation.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeClusterSnapshots(params, callback)
 *   Calls the DescribeClusterSnapshots API operation.
 *   @param params [Object]
 *     * +ClusterIdentifier+ - (<tt>String</tt>) The identifier of the
 *       cluster for which information about snapshots is requested.
 *     * +SnapshotIdentifier+ - (<tt>String</tt>) The snapshot identifier
 *       of the snapshot about which to return information.
 *     * +SnapshotType+ - (<tt>String</tt>) The type of snapshots for
 *       which you are requesting information. By default, snapshots of
 *       all types are returned. Valid Values: automated | manual
 *     * +StartTime+ - (<tt>Date</tt>) A value that requests only
 *       snapshots created at or after the specified time. The time value
 *       is specified in ISO 8601 format. For more information about ISO
 *       8601, go to the ISO8601 Wikipedia page. Example:
 *       2012-07-16T18:00:00Z
 *     * +EndTime+ - (<tt>Date</tt>) A time value that requests only
 *       snapshots created at or before the specified time. The time
 *       value is specified in ISO 8601 format. For more information
 *       about ISO 8601, go to the ISO8601 Wikipedia page. Example:
 *       2012-07-16T18:00:00Z
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of snapshot
 *       records to include in the response. If more records exist than
 *       the specified MaxRecords value, the response returns a marker
 *       that you can use in a subsequent DescribeClusterSnapshots
 *       request in order to retrieve the next set of snapshot records.
 *       Default: 100 Constraints: Must be at least 20 and no more than
 *       100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned by a
 *       previous DescribeClusterSnapshots request to indicate the first
 *       snapshot that the request will return.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) A marker that indicates the first
 *         snapshot that a subsequent DescribeClusterSnapshots request will
 *         return. The response returns a marker only if there are more
 *         snapshots to list than the current response can return.
 *       * +Snapshots+ - (<tt>Array<Object></tt>) A list of Snapshot
 *         instances.
 *         * +SnapshotIdentifier+ - (<tt>String</tt>) The snapshot
 *           identifier that is provided in the request.
 *         * +ClusterIdentifier+ - (<tt>String</tt>) The identifier of the
 *           cluster for which the snapshot was taken.
 *         * +SnapshotCreateTime+ - (<tt>Date</tt>) The time (UTC) when
 *           &service; began the snapshot. A snapshot contains a copy of
 *           the cluster data as of this exact time.
 *         * +Status+ - (<tt>String</tt>) The snapshot status. The value of
 *           the status depends on the API operation used.
 *           CreateClusterSnapshot and CopyClusterSnapshot returns status
 *           as "creating". DescribeClusterSnapshots returns status as
 *           "creating", "available", or "failed". DeleteClusterSnapshot
 *           returns status as "deleted".
 *         * +Port+ - (<tt>Integer</tt>) The port that the cluster is
 *           listening on.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The Availability Zone
 *           in which the cluster was created.
 *         * +ClusterCreateTime+ - (<tt>Date</tt>) The time (UTC) when the
 *           cluster was originally created.
 *         * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *           the cluster.
 *         * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *           &service; engine that is running on the cluster.
 *         * +SnapshotType+ - (<tt>String</tt>) The snapshot type.
 *           Snapshots created using CreateClusterSnapshot and
 *           CopyClusterSnapshot will be of type "manual".
 *         * +NodeType+ - (<tt>String</tt>) The node type of the nodes in
 *           the cluster.
 *         * +NumberOfNodes+ - (<tt>Integer</tt>) The number of nodes in
 *           the cluster.
 *         * +DBName+ - (<tt>String</tt>) The name of the database that was
 *           created when the cluster was created.
 *         * +VpcId+ - (<tt>String</tt>) The VPC identifier of the cluster
 *           if the snapshot is from a cluster in a VPC.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeClusterSubnetGroups(params, callback)
 *   Calls the DescribeClusterSubnetGroups API operation.
 *   @param params [Object]
 *     * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *       cluster subnet group for which information is requested.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of cluster
 *       subnet group records to include in the response. If more records
 *       exist than the specified MaxRecords value, the response returns
 *       a marker that you can use in a subsequent
 *       DescribeClusterSubnetGroups request in order to retrieve the
 *       next set of cluster subnet group records. Default: 100
 *       Constraints: Must be at least 20 and no more than 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned by a
 *       previous DescribeClusterSubnetGroups request to indicate the
 *       first cluster subnet group that the request will return.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) A marker at which to continue
 *         listing cluster subnet groups in a new request. The response
 *         returns a marker if there are more subnet groups to list than
 *         returned in the response.
 *       * +ClusterSubnetGroups+ - (<tt>Array<Object></tt>) A list of
 *         ClusterSubnetGroup instances.
 *         * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *           cluster subnet group.
 *         * +Description+ - (<tt>String</tt>) The description of the
 *           cluster subnet group.
 *         * +VpcId+ - (<tt>String</tt>) The VPC ID of the cluster subnet
 *           group.
 *         * +SubnetGroupStatus+ - (<tt>String</tt>) The status of the
 *           cluster subnet group. The valid values are "Complete",
 *           "Incomplete" and "Invalid".
 *         * +Subnets+ - (<tt>Array<Object></tt>) A list of the VPC Subnet
 *           elements.
 *           * +SubnetIdentifier+ - (<tt>String</tt>) The identifier of the
 *             subnet.
 *           * +SubnetAvailabilityZone+ - (<tt>Object</tt>)
 *             * +Name+ - (<tt>String</tt>) The name of the availability
 *               zone.
 *           * +SubnetStatus+ - (<tt>String</tt>) The status of the subnet.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeClusterVersions(params, callback)
 *   Calls the DescribeClusterVersions API operation.
 *   @param params [Object]
 *     * +ClusterVersion+ - (<tt>String</tt>) The specific cluster
 *       version to return. Example: 1.0
 *     * +ClusterParameterGroupFamily+ - (<tt>String</tt>) The name of a
 *       specific cluster parameter group family to return details for.
 *       Constraints: Must be 1 to 255 alphanumeric characters First
 *       character must be a letter Cannot end with a hyphen or contain
 *       two consecutive hyphens
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more than the MaxRecords value is
 *       available, a marker is included in the response so that the
 *       following results can be retrieved. Default: 100 Constraints:
 *       Value must be at least 20 and no more than 100.
 *     * +Marker+ - (<tt>String</tt>) The marker returned from a previous
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
 *       * +Marker+ - (<tt>String</tt>) The identifier returned to allow
 *         retrieval of paginated results.
 *       * +ClusterVersions+ - (<tt>Array<Object></tt>) A list of Version
 *         elements.
 *         * +ClusterVersion+ - (<tt>String</tt>) The version number used
 *           by the the cluster.
 *         * +ClusterParameterGroupFamily+ - (<tt>String</tt>) The name of
 *           the cluster parameter group family for the cluster.
 *         * +Description+ - (<tt>String</tt>) The description of the
 *           cluster version.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeClusters(params, callback)
 *   Calls the DescribeClusters API operation.
 *   @param params [Object]
 *     * +ClusterIdentifier+ - (<tt>String</tt>) The unique identifier of
 *       a cluster whose properties you are requesting. This parameter
 *       isn't case sensitive. The default is that all clusters defined
 *       for an account are returned.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       that the response can include. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       that can be used in a new DescribeClusters request to continue
 *       listing results. Default: 100 Constraints: Value must be at
 *       least 20 and no more than 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned by a
 *       previous DescribeClusters request to indicate the first cluster
 *       that the current DescribeClusters request will return. You can
 *       specify either a Marker parameter or a ClusterIdentifier
 *       parameter in a DescribeClusters request, but not both.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) A marker at which to continue
 *         listing clusters in a new request. A marker is returned if there
 *         are more clusters to list than were returned in the response.
 *       * +Clusters+ - (<tt>Array<Object></tt>) A list of Cluster objects,
 *         where each object describes one cluster.
 *         * +ClusterIdentifier+ - (<tt>String</tt>) The unique identifier
 *           of the cluster.
 *         * +NodeType+ - (<tt>String</tt>) The node type for the nodes in
 *           the cluster.
 *         * +ClusterStatus+ - (<tt>String</tt>) The current state of this
 *           cluster. Possible values include "available", "creating",
 *           "deleting", "rebooting", and "resizing".
 *         * +ModifyStatus+ - (<tt>String</tt>) The status of a modify
 *           operation, if any, initiated for the cluster.
 *         * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *           the cluster. This name is used to connect to the database
 *           specified in DBName.
 *         * +DBName+ - (<tt>String</tt>) The name of the initial database
 *           that was provided when the cluster was created. This same name
 *           is returned for the life of the cluster. If an initial
 *           database was not specified, a database named "dev" was created
 *           by default.
 *         * +Endpoint+ - (<tt>Object</tt>) The connection endpoint.
 *           * +Address+ - (<tt>String</tt>) The DNS address of the
 *             Cluster.
 *           * +Port+ - (<tt>Integer</tt>) The port that the database
 *             engine is listening on.
 *         * +ClusterCreateTime+ - (<tt>Date</tt>) The date and time that
 *           the cluster was created.
 *         * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *           number of days that automatic cluster snapshots are retained.
 *         * +ClusterSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *           cluster security group that are associated with the cluster.
 *           Each security group is represented by an element that contains
 *           ClusterSecurityGroup.Name and ClusterSecurityGroup.Status
 *           subelements. Cluster security groups are used when the cluster
 *           is not created in a VPC.
 *           * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of
 *             the cluster security group.
 *           * +Status+ - (<tt>String</tt>) The status of the cluster
 *             security group.
 *         * +VpcSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *           Virtual Private Cloud (VPC) security groups that are
 *           associated with the cluster. This parameter is only valid when
 *           the cluster is in a VPC.
 *           * +VpcSecurityGroupId+ - (<tt>String</tt>)
 *           * +Status+ - (<tt>String</tt>)
 *         * +ClusterParameterGroups+ - (<tt>Array<Object></tt>) The list
 *           of cluster parameter groups that are associated with this
 *           cluster.
 *           * +ParameterGroupName+ - (<tt>String</tt>) The name of the
 *             cluster parameter group.
 *           * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *             parameter updates.
 *         * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *           subnet group that is associated with the cluster. This
 *           parameter is only valid when the cluster is in a VPC.
 *         * +VpcId+ - (<tt>String</tt>) The indentifier of the VPC the
 *           cluster is in, if the cluster is in a VPC.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The name of the
 *           Availability Zone in which the cluster is located.
 *         * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly
 *           time range (in UTC) during which system maintenance can occur.
 *         * +PendingModifiedValues+ - (<tt>Object</tt>) If present,
 *           changes to the cluster are pending. Specific changes are
 *           identified by subelements.
 *           * +MasterUserPassword+ - (<tt>String</tt>) The pending or
 *             in-progress change of the master credentials for the
 *             cluster.
 *           * +NodeType+ - (<tt>String</tt>) The pending or in-progress
 *             change of the cluster's node type.
 *           * +NumberOfNodes+ - (<tt>Integer</tt>) The pending or
 *             in-progress change of the number nodes in the cluster.
 *           * +ClusterType+ - (<tt>String</tt>) The pending or in-progress
 *             change of the cluster type.
 *           * +ClusterVersion+ - (<tt>String</tt>) The pending or
 *             in-progress change of the service version.
 *           * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *             pending or in-progress change of the automated snapshot
 *             retention period.
 *         * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *           &service; engine that is running on the cluster.
 *         * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, version
 *           upgrades will be applied automatically to the cluster during
 *           the maintenance window.
 *         * +NumberOfNodes+ - (<tt>Integer</tt>) The number of compute
 *           nodes in the cluster.
 *         * +PubliclyAccessible+ - (<tt>Boolean</tt>) If true, the cluster
 *           can be accessed from a public network.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDefaultClusterParameters(params, callback)
 *   Calls the DescribeDefaultClusterParameters API operation.
 *   @param params [Object]
 *     * +ParameterGroupFamily+ - (*required*, <tt>String</tt>) The name
 *       of the cluster parameter group family.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: Value must be at least 20 and no more than 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned from a
 *       previous DescribeDefaultClusterParameters request. If this
 *       parameter is specified, the response includes only records
 *       beyond the marker, up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ParameterGroupFamily+ - (<tt>String</tt>) The name of the
 *         cluster parameter group family to which the engine default
 *         parameters apply.
 *       * +Marker+ - (<tt>String</tt>) An identifier to allow retrieval of
 *         paginated results.
 *       * +Parameters+ - (<tt>Array<Object></tt>) The list of cluster
 *         default parameters.
 *         * +ParameterName+ - (<tt>String</tt>) The name of the parameter.
 *         * +ParameterValue+ - (<tt>String</tt>) The value of the
 *           parameter.
 *         * +Description+ - (<tt>String</tt>) A description of the
 *           parameter.
 *         * +Source+ - (<tt>String</tt>) The source of the parameter
 *           value, such as "engine-default" or "user".
 *         * +DataType+ - (<tt>String</tt>) The data type of the parameter.
 *         * +AllowedValues+ - (<tt>String</tt>) The valid range of values
 *           for the parameter.
 *         * +IsModifiable+ - (<tt>Boolean</tt>) If true, the parameter can
 *           be modified. Some parameters have security or operational
 *           implications that prevent them from being changed.
 *         * +MinimumEngineVersion+ - (<tt>String</tt>) The earliest engine
 *           version to which the parameter can apply.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEvents(params, callback)
 *   Calls the DescribeEvents API operation.
 *   @param params [Object]
 *     * +SourceIdentifier+ - (<tt>String</tt>) The identifier of the
 *       event source for which events will be returned. If this
 *       parameter is not specified, then all sources are included in the
 *       response. Constraints: If SourceIdentifier is supplied,
 *       SourceType must also be provided. Specify a cluster identifier
 *       when SourceType is cluster. Specify a cluster security group
 *       name when SourceType is cluster-security-group. Specify a
 *       cluster parameter group name when SourceType is
 *       cluster-parameter-group. Specify a cluster snapshot identifier
 *       when SourceType is cluster-snapshot.
 *     * +SourceType+ - (<tt>String</tt>) The event source to retrieve
 *       events for. If no value is specified, all events are returned.
 *       Constraints: If SourceType is supplied, SourceIdentifier must
 *       also be provided. Specify cluster when SourceIdentifier is a
 *       cluster identifier. Specify cluster-security-group when
 *       SourceIdentifier is a cluster security group name. Specify
 *       cluster-parameter-group when SourceIdentifier is a cluster
 *       parameter group name. Specify cluster-snapshot when
 *       SourceIdentifier is a cluster snapshot identifier.
 *     * +StartTime+ - (<tt>Date</tt>) The beginning of the time interval
 *       to retrieve events for, specified in ISO 8601 format. For more
 *       information about ISO 8601, go to the ISO8601 Wikipedia page.
 *       Example: 2009-07-08T18:00Z
 *     * +EndTime+ - (<tt>Date</tt>) The end of the time interval for
 *       which to retrieve events, specified in ISO 8601 format. For more
 *       information about ISO 8601, go to the ISO8601 Wikipedia page.
 *       Example: 2009-07-08T18:00Z
 *     * +Duration+ - (<tt>Integer</tt>) The number of minutes prior to
 *       the time of the request for which to retrieve events. For
 *       example, if the request is sent at 18:00 and you specify a
 *       druration of 60, then only events which have occurred after
 *       17:00 will be returned. Default: 60
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: Value must be at least 20 and no more than 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned from a
 *       previous DescribeEvents request. If this parameter is specified,
 *       the response includes only records beyond the marker, up to the
 *       value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) A marker at which to continue
 *         listing events in a new request. The response returns a marker
 *         if there are more events to list than returned in the response.
 *       * +Events+ - (<tt>Array<Object></tt>) A list of Event instances.
 *         * +SourceIdentifier+ - (<tt>String</tt>) The identifier for the
 *           source of the event.
 *         * +SourceType+ - (<tt>String</tt>) The source type for this
 *           event.
 *         * +Message+ - (<tt>String</tt>) The text of this event.
 *         * +Date+ - (<tt>Date</tt>) The date and time of the event.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeOrderableClusterOptions(params, callback)
 *   Calls the DescribeOrderableClusterOptions API operation.
 *   @param params [Object]
 *     * +ClusterVersion+ - (<tt>String</tt>) The version filter value.
 *       Specify this parameter to show only the available offerings
 *       matching the specified version. Default: All versions.
 *       Constraints: Must be one of the version returned from
 *       DescribeClusterVersions.
 *     * +NodeType+ - (<tt>String</tt>) The node type filter value.
 *       Specify this parameter to show only the available offerings
 *       matching the specified node type.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned from a
 *       previous DescribeOrderableClusterOptions request. If this
 *       parameter is specified, the response includes only records
 *       beyond the marker, up to the value specified by MaxRecords.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +OrderableClusterOptions+ - (<tt>Array<Object></tt>) An
 *         OrderableClusterOption structure containing information about
 *         orderable options for the Cluster.
 *         * +ClusterVersion+ - (<tt>String</tt>) The version of the
 *           orderable cluster.
 *         * +ClusterType+ - (<tt>String</tt>) The cluster type, for
 *           example multi-node.
 *         * +NodeType+ - (<tt>String</tt>) The node type for the orderable
 *           cluster.
 *         * +AvailabilityZones+ - (<tt>Array<Object></tt>) A list of
 *           availability zones for the orderable cluster.
 *           * +Name+ - (<tt>String</tt>) The name of the availability
 *             zone.
 *       * +Marker+ - (<tt>String</tt>) A marker that can be used to
 *         retrieve paginated results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedNodeOfferings(params, callback)
 *   Calls the DescribeReservedNodeOfferings API operation.
 *   @param params [Object]
 *     * +ReservedNodeOfferingId+ - (<tt>String</tt>) The unique
 *       identifier for the offering.
 *     * +NodeType+ - (<tt>String</tt>) The node type you can purchase.
 *       &nodeTypeInfo;
 *     * +Duration+ - (<tt>String</tt>) The duration, in seconds, for
 *       which the offering will reserve the node.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned by a
 *       previous DescribeReservedNodeOfferings request to indicate the
 *       first offering that the request will return. You can specify
 *       either a Marker parameter or a ClusterIdentifier parameter in a
 *       DescribeClusters request, but not both.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) An optional marker returned by a
 *         previous DescribeReservedNodeOfferings request to indicate the
 *         first reserved node offering that the request will return.
 *       * +ReservedNodeOfferings+ - (<tt>Array<Object></tt>) A list of
 *         reserved node offerings.
 *         * +ReservedNodeOfferingId+ - (<tt>String</tt>) The offering
 *           identifier.
 *         * +NodeType+ - (<tt>String</tt>) The node type offered by the
 *           reserved node offering.
 *         * +Duration+ - (<tt>Integer</tt>) The duration, in seconds, for
 *           which the offering will reserve the node.
 *         * +FixedPrice+ - (<tt>Float</tt>) The upfront fixed charge you
 *           will pay to purchase the specific reserved node offering.
 *         * +UsagePrice+ - (<tt>Float</tt>) The rate you are charged for
 *           each hour the cluster that is using the offering is running.
 *         * +CurrencyCode+ - (<tt>String</tt>) The currency code for the
 *           compute nodes offering.
 *         * +OfferingType+ - (<tt>String</tt>) The anticipated utilization
 *           of the reserved node, as defined in the reserved node
 *           offering.
 *         * +RecurringCharges+ - (<tt>Array<Object></tt>) The charge to
 *           your account regardless of whether you are creating any
 *           clusters using the node offering. Recurring charges are only
 *           in effect for heavy-utilization reserved nodes.
 *           * +RecurringChargeAmount+ - (<tt>Float</tt>) The amount
 *             charged per the period of time specified by the recurring
 *             charge frequency.
 *           * +RecurringChargeFrequency+ - (<tt>String</tt>) The frequency
 *             at which the recurring charge amount is applied.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedNodes(params, callback)
 *   Calls the DescribeReservedNodes API operation.
 *   @param params [Object]
 *     * +ReservedNodeId+ - (<tt>String</tt>) Customer specified
 *       identifier for the node reservation.
 *     * +ReservedNodeOfferingId+ - (<tt>String</tt>) The reserved node
 *       offering identifier.
 *     * +NodeType+ - (<tt>String</tt>) The node type reserved.
 *     * +Duration+ - (<tt>String</tt>) Duration, in seconds, for which
 *       the node is reserved.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100.
 *     * +Marker+ - (<tt>String</tt>) An optional marker returned by a
 *       previous DescribeReservedNodes request to indicate the first
 *       parameter group that the current request will return.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Marker+ - (<tt>String</tt>) A marker that can be used to
 *         retrieve paginated results.
 *       * +ReservedNodes+ - (<tt>Array<Object></tt>) The list of reserved
 *         nodes.
 *         * +ReservedNodeId+ - (<tt>String</tt>) The unique identifier for
 *           the reservation.
 *         * +ReservedNodeOfferingId+ - (<tt>String</tt>) The identifier
 *           for the reserved node offering.
 *         * +NodeType+ - (<tt>String</tt>) The node type of the reserved
 *           node.
 *         * +StartTime+ - (<tt>Date</tt>) The time the reservation
 *           started. You purchase a reserved node offering for a duration.
 *           This is the start time of that duration.
 *         * +Duration+ - (<tt>Integer</tt>) The duration of the node
 *           reservation in seconds.
 *         * +FixedPrice+ - (<tt>Float</tt>) The fixed cost Amazon Redshift
 *           charged you for this reserved node.
 *         * +UsagePrice+ - (<tt>Float</tt>) The hourly rate Amazon
 *           Redshift charge you for this reserved node.
 *         * +CurrencyCode+ - (<tt>String</tt>) The currency code for the
 *           reserved cluster.
 *         * +NodeCount+ - (<tt>Integer</tt>) The number of reserved
 *           compute nodes.
 *         * +State+ - (<tt>String</tt>) The state of the reserved Compute
 *           Node. Possible Values: pending-payment-This reserved node has
 *           recently been purchased, and the sale has been approved, but
 *           payment has not yet been confirmed. active-This reserved node
 *           is owned by the caller and is available for use.
 *           payment-failed-Payment failed for the purchase attempt.
 *         * +OfferingType+ - (<tt>String</tt>) The anticipated utilization
 *           of the reserved node, as defined in the reserved node
 *           offering.
 *         * +RecurringCharges+ - (<tt>Array<Object></tt>) The recurring
 *           charges for the reserved node.
 *           * +RecurringChargeAmount+ - (<tt>Float</tt>) The amount
 *             charged per the period of time specified by the recurring
 *             charge frequency.
 *           * +RecurringChargeFrequency+ - (<tt>String</tt>) The frequency
 *             at which the recurring charge amount is applied.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeResize(params, callback)
 *   Calls the DescribeResize API operation.
 *   @param params [Object]
 *     * +ClusterIdentifier+ - (*required*, <tt>String</tt>) The unique
 *       identifier of a cluster whose resize progress you are
 *       requesting. This parameter isn't case sensitive. The default is
 *       that all clusters defined for an account are returned.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +TargetNodeType+ - (<tt>String</tt>) The node type that the
 *         cluster will have after the resize completes.
 *       * +TargetNumberOfNodes+ - (<tt>Integer</tt>) The number of nodes
 *         that the cluster will have after the resize completes.
 *       * +TargetClusterType+ - (<tt>String</tt>) The cluster type after
 *         the resize completed. Valid Values: multi-node | single-node
 *       * +Status+ - (<tt>String</tt>) The status of the resize operation.
 *         Valid Values: NONE | IN_PROGRESS | FAILED | SUCCEEDED
 *       * +ImportTablesCompleted+ - (<tt>Array<String></tt>) The tables
 *         which have been imported completely. Valid Values: List of table
 *         names
 *       * +ImportTablesInProgress+ - (<tt>Array<String></tt>) The tables
 *         which are being imported currently. Valid Values: List of table
 *         names
 *       * +ImportTablesNotStarted+ - (<tt>Array<String></tt>) The tables
 *         which have not been imported yet. Valid Values: List of table
 *         names
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyCluster(params, callback)
 *   Calls the ModifyCluster API operation.
 *   @param params [Object]
 *     * +ClusterIdentifier+ - (*required*, <tt>String</tt>) The unique
 *       identifier of the cluster to be modified. Example:
 *       examplecluster
 *     * +ClusterType+ - (<tt>String</tt>) The new cluster type. When you
 *       submit your cluster resize request, your existing cluster goes
 *       into a read-only mode. After Amazon Redshift provisions a new
 *       cluster based on your resize requirements, there will be outage
 *       for a period while the old cluster is deleted and your
 *       connection is switched to the new cluster. You can use
 *       DescribeResize to track the progress of the resize request.
 *       Valid Values: multi-node | single-node
 *     * +NodeType+ - (<tt>String</tt>) The new node type of the cluster.
 *       If you specify a new node type you must also specify the number
 *       of nodes parameter also. When you submit your cluster resize
 *       request, your existing cluster goes into a read-only mode. After
 *       Amazon Redshift provisions a new cluster based on your resize
 *       requirements, there will be outage for a period while the old
 *       cluster is deleted and your connection is switched to the new
 *       cluster. You can use DescribeResize to track the progress of the
 *       resize request. Valid Values: dw.hs1.xlarge | dw.hs1.8xlarge
 *     * +NumberOfNodes+ - (<tt>Integer</tt>) The new number of nodes of
 *       the cluster. If you specify a new number of nodes, you must also
 *       specify the node type parameter also. When you submit your
 *       cluster resize request, your existing cluster goes into a
 *       read-only mode. After Amazon Redshift provisions a new cluster
 *       based on your resize requirements, there will be outage for a
 *       period while the old cluster is deleted and your connection is
 *       switched to the new cluster. You can use DescribeResize to track
 *       the progress of the resize request. Valid Values: Integer
 *       greater than 0
 *     * +ClusterSecurityGroups+ - (<tt>Array<String></tt>) A list of
 *       cluster security groups to be authorized on this cluster. This
 *       change is asynchronously applied as soon as possible. Security
 *       groups currently associated with the cluster and not in the list
 *       of groups to apply, will be revoked from the cluster.
 *       Constraints: Must be 1 to 255 alphanumeric characters or hyphens
 *       First character must be a letter Cannot end with a hyphen or
 *       contain two consecutive hyphens
 *     * +VpcSecurityGroupIds+ - (<tt>Array<String></tt>) A list of
 *       Virtual Private Cloud (VPC) security groups to associate with
 *       the cluster.
 *     * +MasterUserPassword+ - (<tt>String</tt>) The new password for
 *       the cluster master user. This change is asynchronously applied
 *       as soon as possible. Between the time of the request and the
 *       completion of the request, the MasterUserPassword element exists
 *       in the PendingModifiedValues element of the operation response.
 *       Operations never return the password, so this operation provides
 *       a way to regain access to the master user account for a cluster
 *       if the password is lost. Default: Uses existing setting.
 *       Constraints: Must be between 8 and 64 characters in length. Must
 *       contain at least one uppercase letter. Must contain one
 *       lowercase letter. Must contain one number.
 *     * +ClusterParameterGroupName+ - (<tt>String</tt>) The name of the
 *       cluster parameter group to apply to this cluster. This change is
 *       applied only after the cluster is rebooted. To reboot a cluster
 *       use RebootCluster. Default: Uses existing setting. Constraints:
 *       The cluster parameter group must be in the same parameter group
 *       family that matches the cluster version.
 *     * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *       number of days that automated snapshots are retained. If the
 *       value is 0, automated snapshots are disabled. Even if automated
 *       snapshots are disabled, you can still create manual snapshots
 *       when you want with CreateClusterSnapshot. If you decrease the
 *       automated snapshot retention period from its current value,
 *       existing automated snapshots which fall outside of the new
 *       retention period will be immediately deleted. Default: Uses
 *       existing setting. Constraints: Must be a value from 0 to 35.
 *     * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *       range (in UTC) during which system maintenance can occur, if
 *       necessary. If system maintenance is necessary during the window,
 *       it may result in an outage. This maintenance window change is
 *       made immediately. If the new maintenance window indicates the
 *       current time, there must be at least 120 minutes between the
 *       current time and end of the window in order to ensure that
 *       pending changes are applied. Default: Uses existing setting.
 *       Format: ddd:hh24:mi-ddd:hh24:mi, for example
 *       wed:07:30-wed:08:00. Valid Days: Mon | Tue | Wed | Thu | Fri |
 *       Sat | Sun Constraints: Must be at least 30 minutes.
 *     * +ClusterVersion+ - (<tt>String</tt>) The new version number of
 *       the Amazon Redshift engine to upgrade to. For major version
 *       upgrades, if a non-default cluster parameter group is currently
 *       in use, a new cluster parameter group in the cluster parameter
 *       group family for the new version must be specified. The new
 *       cluster parameter group can be the default for that cluster
 *       parameter group family. &parametersMoreInfo; Example: 1.0
 *     * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, upgrades
 *       will be applied automatically to the cluster during the
 *       maintenance window. Default: false
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterIdentifier+ - (<tt>String</tt>) The unique identifier of
 *         the cluster.
 *       * +NodeType+ - (<tt>String</tt>) The node type for the nodes in
 *         the cluster.
 *       * +ClusterStatus+ - (<tt>String</tt>) The current state of this
 *         cluster. Possible values include "available", "creating",
 *         "deleting", "rebooting", and "resizing".
 *       * +ModifyStatus+ - (<tt>String</tt>) The status of a modify
 *         operation, if any, initiated for the cluster.
 *       * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *         the cluster. This name is used to connect to the database
 *         specified in DBName.
 *       * +DBName+ - (<tt>String</tt>) The name of the initial database
 *         that was provided when the cluster was created. This same name
 *         is returned for the life of the cluster. If an initial database
 *         was not specified, a database named "dev" was created by
 *         default.
 *       * +Endpoint+ - (<tt>Object</tt>) The connection endpoint.
 *         * +Address+ - (<tt>String</tt>) The DNS address of the Cluster.
 *         * +Port+ - (<tt>Integer</tt>) The port that the database engine
 *           is listening on.
 *       * +ClusterCreateTime+ - (<tt>Date</tt>) The date and time that the
 *         cluster was created.
 *       * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *         number of days that automatic cluster snapshots are retained.
 *       * +ClusterSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *         cluster security group that are associated with the cluster.
 *         Each security group is represented by an element that contains
 *         ClusterSecurityGroup.Name and ClusterSecurityGroup.Status
 *         subelements. Cluster security groups are used when the cluster
 *         is not created in a VPC.
 *         * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *           cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the cluster
 *           security group.
 *       * +VpcSecurityGroups+ - (<tt>Array<Object></tt>) A list of Virtual
 *         Private Cloud (VPC) security groups that are associated with the
 *         cluster. This parameter is only valid when the cluster is in a
 *         VPC.
 *         * +VpcSecurityGroupId+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *       * +ClusterParameterGroups+ - (<tt>Array<Object></tt>) The list of
 *         cluster parameter groups that are associated with this cluster.
 *         * +ParameterGroupName+ - (<tt>String</tt>) The name of the
 *           cluster parameter group.
 *         * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *           parameter updates.
 *       * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *         subnet group that is associated with the cluster. This parameter
 *         is only valid when the cluster is in a VPC.
 *       * +VpcId+ - (<tt>String</tt>) The indentifier of the VPC the
 *         cluster is in, if the cluster is in a VPC.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The name of the
 *         Availability Zone in which the cluster is located.
 *       * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *         range (in UTC) during which system maintenance can occur.
 *       * +PendingModifiedValues+ - (<tt>Object</tt>) If present, changes
 *         to the cluster are pending. Specific changes are identified by
 *         subelements.
 *         * +MasterUserPassword+ - (<tt>String</tt>) The pending or
 *           in-progress change of the master credentials for the cluster.
 *         * +NodeType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster's node type.
 *         * +NumberOfNodes+ - (<tt>Integer</tt>) The pending or
 *           in-progress change of the number nodes in the cluster.
 *         * +ClusterType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster type.
 *         * +ClusterVersion+ - (<tt>String</tt>) The pending or
 *           in-progress change of the service version.
 *         * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *           pending or in-progress change of the automated snapshot
 *           retention period.
 *       * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *         &service; engine that is running on the cluster.
 *       * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, version
 *         upgrades will be applied automatically to the cluster during the
 *         maintenance window.
 *       * +NumberOfNodes+ - (<tt>Integer</tt>) The number of compute nodes
 *         in the cluster.
 *       * +PubliclyAccessible+ - (<tt>Boolean</tt>) If true, the cluster
 *         can be accessed from a public network.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyClusterParameterGroup(params, callback)
 *   Calls the ModifyClusterParameterGroup API operation.
 *   @param params [Object]
 *     * +ParameterGroupName+ - (*required*, <tt>String</tt>) The name of
 *       the parameter group to be modified.
 *     * +Parameters+ - (*required*, <tt>Array<Object></tt>) An array of
 *       parameters to be modified. A maximum of 20 parameters can be
 *       modified in a single request. For each parameter to be modified,
 *       you must supply at least the parameter name and parameter value;
 *       other name-value pairs of the parameter are optional.
 *       * +ParameterName+ - (<tt>String</tt>) The name of the parameter.
 *       * +ParameterValue+ - (<tt>String</tt>) The value of the
 *         parameter.
 *       * +Description+ - (<tt>String</tt>) A description of the
 *         parameter.
 *       * +Source+ - (<tt>String</tt>) The source of the parameter
 *         value, such as "engine-default" or "user".
 *       * +DataType+ - (<tt>String</tt>) The data type of the parameter.
 *       * +AllowedValues+ - (<tt>String</tt>) The valid range of values
 *         for the parameter.
 *       * +IsModifiable+ - (<tt>Boolean</tt>) If true, the parameter can
 *         be modified. Some parameters have security or operational
 *         implications that prevent them from being changed.
 *       * +MinimumEngineVersion+ - (<tt>String</tt>) The earliest engine
 *         version to which the parameter can apply.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ParameterGroupName+ - (<tt>String</tt>) The name of the cluster
 *         parameter group.
 *       * +ParameterGroupStatus+ - (<tt>String</tt>) The status of the
 *         parameter group. For example, if you made a change to a
 *         parameter group name-value pair, then the change could be
 *         pending a reboot of an associated cluster.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyClusterSubnetGroup(params, callback)
 *   Calls the ModifyClusterSubnetGroup API operation.
 *   @param params [Object]
 *     * +ClusterSubnetGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the parameter group to be modified.
 *     * +Description+ - (<tt>String</tt>) The name of the parameter
 *       group to be modified.
 *     * +SubnetIds+ - (*required*, <tt>Array<String></tt>) An array of
 *       VPC subnet IDs. A maximum of 20 subnets can be modified in a
 *       single request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *         cluster subnet group.
 *       * +Description+ - (<tt>String</tt>) The description of the cluster
 *         subnet group.
 *       * +VpcId+ - (<tt>String</tt>) The VPC ID of the cluster subnet
 *         group.
 *       * +SubnetGroupStatus+ - (<tt>String</tt>) The status of the
 *         cluster subnet group. The valid values are "Complete",
 *         "Incomplete" and "Invalid".
 *       * +Subnets+ - (<tt>Array<Object></tt>) A list of the VPC Subnet
 *         elements.
 *         * +SubnetIdentifier+ - (<tt>String</tt>) The identifier of the
 *           subnet.
 *         * +SubnetAvailabilityZone+ - (<tt>Object</tt>)
 *           * +Name+ - (<tt>String</tt>) The name of the availability
 *             zone.
 *         * +SubnetStatus+ - (<tt>String</tt>) The status of the subnet.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method purchaseReservedNodeOffering(params, callback)
 *   Calls the PurchaseReservedNodeOffering API operation.
 *   @param params [Object]
 *     * +ReservedNodeOfferingId+ - (*required*, <tt>String</tt>) The
 *       unique identifier of the reserved node offering you want to
 *       purchase.
 *     * +ReservedNodeId+ - (<tt>String</tt>)
 *     * +NodeCount+ - (<tt>Integer</tt>) The number of reserved nodes
 *       you want to purchase. Default: 1
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ReservedNodeId+ - (<tt>String</tt>) The unique identifier for
 *         the reservation.
 *       * +ReservedNodeOfferingId+ - (<tt>String</tt>) The identifier for
 *         the reserved node offering.
 *       * +NodeType+ - (<tt>String</tt>) The node type of the reserved
 *         node.
 *       * +StartTime+ - (<tt>Date</tt>) The time the reservation started.
 *         You purchase a reserved node offering for a duration. This is
 *         the start time of that duration.
 *       * +Duration+ - (<tt>Integer</tt>) The duration of the node
 *         reservation in seconds.
 *       * +FixedPrice+ - (<tt>Float</tt>) The fixed cost Amazon Redshift
 *         charged you for this reserved node.
 *       * +UsagePrice+ - (<tt>Float</tt>) The hourly rate Amazon Redshift
 *         charge you for this reserved node.
 *       * +CurrencyCode+ - (<tt>String</tt>) The currency code for the
 *         reserved cluster.
 *       * +NodeCount+ - (<tt>Integer</tt>) The number of reserved compute
 *         nodes.
 *       * +State+ - (<tt>String</tt>) The state of the reserved Compute
 *         Node. Possible Values: pending-payment-This reserved node has
 *         recently been purchased, and the sale has been approved, but
 *         payment has not yet been confirmed. active-This reserved node is
 *         owned by the caller and is available for use.
 *         payment-failed-Payment failed for the purchase attempt.
 *       * +OfferingType+ - (<tt>String</tt>) The anticipated utilization
 *         of the reserved node, as defined in the reserved node offering.
 *       * +RecurringCharges+ - (<tt>Array<Object></tt>) The recurring
 *         charges for the reserved node.
 *         * +RecurringChargeAmount+ - (<tt>Float</tt>) The amount charged
 *           per the period of time specified by the recurring charge
 *           frequency.
 *         * +RecurringChargeFrequency+ - (<tt>String</tt>) The frequency
 *           at which the recurring charge amount is applied.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootCluster(params, callback)
 *   Calls the RebootCluster API operation.
 *   @param params [Object]
 *     * +ClusterIdentifier+ - (*required*, <tt>String</tt>) The cluster
 *       identifier.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterIdentifier+ - (<tt>String</tt>) The unique identifier of
 *         the cluster.
 *       * +NodeType+ - (<tt>String</tt>) The node type for the nodes in
 *         the cluster.
 *       * +ClusterStatus+ - (<tt>String</tt>) The current state of this
 *         cluster. Possible values include "available", "creating",
 *         "deleting", "rebooting", and "resizing".
 *       * +ModifyStatus+ - (<tt>String</tt>) The status of a modify
 *         operation, if any, initiated for the cluster.
 *       * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *         the cluster. This name is used to connect to the database
 *         specified in DBName.
 *       * +DBName+ - (<tt>String</tt>) The name of the initial database
 *         that was provided when the cluster was created. This same name
 *         is returned for the life of the cluster. If an initial database
 *         was not specified, a database named "dev" was created by
 *         default.
 *       * +Endpoint+ - (<tt>Object</tt>) The connection endpoint.
 *         * +Address+ - (<tt>String</tt>) The DNS address of the Cluster.
 *         * +Port+ - (<tt>Integer</tt>) The port that the database engine
 *           is listening on.
 *       * +ClusterCreateTime+ - (<tt>Date</tt>) The date and time that the
 *         cluster was created.
 *       * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *         number of days that automatic cluster snapshots are retained.
 *       * +ClusterSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *         cluster security group that are associated with the cluster.
 *         Each security group is represented by an element that contains
 *         ClusterSecurityGroup.Name and ClusterSecurityGroup.Status
 *         subelements. Cluster security groups are used when the cluster
 *         is not created in a VPC.
 *         * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *           cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the cluster
 *           security group.
 *       * +VpcSecurityGroups+ - (<tt>Array<Object></tt>) A list of Virtual
 *         Private Cloud (VPC) security groups that are associated with the
 *         cluster. This parameter is only valid when the cluster is in a
 *         VPC.
 *         * +VpcSecurityGroupId+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *       * +ClusterParameterGroups+ - (<tt>Array<Object></tt>) The list of
 *         cluster parameter groups that are associated with this cluster.
 *         * +ParameterGroupName+ - (<tt>String</tt>) The name of the
 *           cluster parameter group.
 *         * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *           parameter updates.
 *       * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *         subnet group that is associated with the cluster. This parameter
 *         is only valid when the cluster is in a VPC.
 *       * +VpcId+ - (<tt>String</tt>) The indentifier of the VPC the
 *         cluster is in, if the cluster is in a VPC.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The name of the
 *         Availability Zone in which the cluster is located.
 *       * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *         range (in UTC) during which system maintenance can occur.
 *       * +PendingModifiedValues+ - (<tt>Object</tt>) If present, changes
 *         to the cluster are pending. Specific changes are identified by
 *         subelements.
 *         * +MasterUserPassword+ - (<tt>String</tt>) The pending or
 *           in-progress change of the master credentials for the cluster.
 *         * +NodeType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster's node type.
 *         * +NumberOfNodes+ - (<tt>Integer</tt>) The pending or
 *           in-progress change of the number nodes in the cluster.
 *         * +ClusterType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster type.
 *         * +ClusterVersion+ - (<tt>String</tt>) The pending or
 *           in-progress change of the service version.
 *         * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *           pending or in-progress change of the automated snapshot
 *           retention period.
 *       * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *         &service; engine that is running on the cluster.
 *       * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, version
 *         upgrades will be applied automatically to the cluster during the
 *         maintenance window.
 *       * +NumberOfNodes+ - (<tt>Integer</tt>) The number of compute nodes
 *         in the cluster.
 *       * +PubliclyAccessible+ - (<tt>Boolean</tt>) If true, the cluster
 *         can be accessed from a public network.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method resetClusterParameterGroup(params, callback)
 *   Calls the ResetClusterParameterGroup API operation.
 *   @param params [Object]
 *     * +ParameterGroupName+ - (*required*, <tt>String</tt>) The name of
 *       the cluster parameter group to be reset.
 *     * +ResetAllParameters+ - (<tt>Boolean</tt>) If true, all
 *       parameters in the specified parameter group will be reset to
 *       their default values. Default: true
 *     * +Parameters+ - (<tt>Array<Object></tt>) An array of names of
 *       parameters to be reset. If ResetAllParameters option is not
 *       used, then at least one parameter name must be supplied.
 *       Constraints: A maximum of 20 parameters can be reset in a single
 *       request.
 *       * +ParameterName+ - (<tt>String</tt>) The name of the parameter.
 *       * +ParameterValue+ - (<tt>String</tt>) The value of the
 *         parameter.
 *       * +Description+ - (<tt>String</tt>) A description of the
 *         parameter.
 *       * +Source+ - (<tt>String</tt>) The source of the parameter
 *         value, such as "engine-default" or "user".
 *       * +DataType+ - (<tt>String</tt>) The data type of the parameter.
 *       * +AllowedValues+ - (<tt>String</tt>) The valid range of values
 *         for the parameter.
 *       * +IsModifiable+ - (<tt>Boolean</tt>) If true, the parameter can
 *         be modified. Some parameters have security or operational
 *         implications that prevent them from being changed.
 *       * +MinimumEngineVersion+ - (<tt>String</tt>) The earliest engine
 *         version to which the parameter can apply.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ParameterGroupName+ - (<tt>String</tt>) The name of the cluster
 *         parameter group.
 *       * +ParameterGroupStatus+ - (<tt>String</tt>) The status of the
 *         parameter group. For example, if you made a change to a
 *         parameter group name-value pair, then the change could be
 *         pending a reboot of an associated cluster.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method restoreFromClusterSnapshot(params, callback)
 *   Calls the RestoreFromClusterSnapshot API operation.
 *   @param params [Object]
 *     * +ClusterIdentifier+ - (*required*, <tt>String</tt>) The
 *       identifier of the cluster that will be created from restoring
 *       the snapshot. &clusterIDConstraints;
 *     * +SnapshotIdentifier+ - (*required*, <tt>String</tt>) The name of
 *       the snapshot from which to create the new cluster. This
 *       parameter isn't case sensitive. Example: my-snapshot-id
 *     * +Port+ - (<tt>Integer</tt>) The port number on which the cluster
 *       accepts connections. Default: The same port as the original
 *       cluster. Constraints: Must be between 1115 and 65535.
 *     * +AvailabilityZone+ - (<tt>String</tt>) The Amazon EC2
 *       Availability Zone in which to restore the cluster. Default: A
 *       random, system-chosen Availability Zone. Example: us-east-1a
 *     * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, upgrades can
 *       be applied during the maintenance window to the &service; engine
 *       that is running on the cluster. Default: true
 *     * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *       subnet group where you want to cluster restored. A snapshot of
 *       cluster in VPC can be restored only in VPC. Therefore, you must
 *       provide subnet group name where you want the cluster restored.
 *     * +PubliclyAccessible+ - (<tt>Boolean</tt>) If true, the cluster
 *       can be accessed from a public network.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterIdentifier+ - (<tt>String</tt>) The unique identifier of
 *         the cluster.
 *       * +NodeType+ - (<tt>String</tt>) The node type for the nodes in
 *         the cluster.
 *       * +ClusterStatus+ - (<tt>String</tt>) The current state of this
 *         cluster. Possible values include "available", "creating",
 *         "deleting", "rebooting", and "resizing".
 *       * +ModifyStatus+ - (<tt>String</tt>) The status of a modify
 *         operation, if any, initiated for the cluster.
 *       * +MasterUsername+ - (<tt>String</tt>) The master user name for
 *         the cluster. This name is used to connect to the database
 *         specified in DBName.
 *       * +DBName+ - (<tt>String</tt>) The name of the initial database
 *         that was provided when the cluster was created. This same name
 *         is returned for the life of the cluster. If an initial database
 *         was not specified, a database named "dev" was created by
 *         default.
 *       * +Endpoint+ - (<tt>Object</tt>) The connection endpoint.
 *         * +Address+ - (<tt>String</tt>) The DNS address of the Cluster.
 *         * +Port+ - (<tt>Integer</tt>) The port that the database engine
 *           is listening on.
 *       * +ClusterCreateTime+ - (<tt>Date</tt>) The date and time that the
 *         cluster was created.
 *       * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *         number of days that automatic cluster snapshots are retained.
 *       * +ClusterSecurityGroups+ - (<tt>Array<Object></tt>) A list of
 *         cluster security group that are associated with the cluster.
 *         Each security group is represented by an element that contains
 *         ClusterSecurityGroup.Name and ClusterSecurityGroup.Status
 *         subelements. Cluster security groups are used when the cluster
 *         is not created in a VPC.
 *         * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *           cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the cluster
 *           security group.
 *       * +VpcSecurityGroups+ - (<tt>Array<Object></tt>) A list of Virtual
 *         Private Cloud (VPC) security groups that are associated with the
 *         cluster. This parameter is only valid when the cluster is in a
 *         VPC.
 *         * +VpcSecurityGroupId+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *       * +ClusterParameterGroups+ - (<tt>Array<Object></tt>) The list of
 *         cluster parameter groups that are associated with this cluster.
 *         * +ParameterGroupName+ - (<tt>String</tt>) The name of the
 *           cluster parameter group.
 *         * +ParameterApplyStatus+ - (<tt>String</tt>) The status of
 *           parameter updates.
 *       * +ClusterSubnetGroupName+ - (<tt>String</tt>) The name of the
 *         subnet group that is associated with the cluster. This parameter
 *         is only valid when the cluster is in a VPC.
 *       * +VpcId+ - (<tt>String</tt>) The indentifier of the VPC the
 *         cluster is in, if the cluster is in a VPC.
 *       * +AvailabilityZone+ - (<tt>String</tt>) The name of the
 *         Availability Zone in which the cluster is located.
 *       * +PreferredMaintenanceWindow+ - (<tt>String</tt>) The weekly time
 *         range (in UTC) during which system maintenance can occur.
 *       * +PendingModifiedValues+ - (<tt>Object</tt>) If present, changes
 *         to the cluster are pending. Specific changes are identified by
 *         subelements.
 *         * +MasterUserPassword+ - (<tt>String</tt>) The pending or
 *           in-progress change of the master credentials for the cluster.
 *         * +NodeType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster's node type.
 *         * +NumberOfNodes+ - (<tt>Integer</tt>) The pending or
 *           in-progress change of the number nodes in the cluster.
 *         * +ClusterType+ - (<tt>String</tt>) The pending or in-progress
 *           change of the cluster type.
 *         * +ClusterVersion+ - (<tt>String</tt>) The pending or
 *           in-progress change of the service version.
 *         * +AutomatedSnapshotRetentionPeriod+ - (<tt>Integer</tt>) The
 *           pending or in-progress change of the automated snapshot
 *           retention period.
 *       * +ClusterVersion+ - (<tt>String</tt>) The version ID of the
 *         &service; engine that is running on the cluster.
 *       * +AllowVersionUpgrade+ - (<tt>Boolean</tt>) If true, version
 *         upgrades will be applied automatically to the cluster during the
 *         maintenance window.
 *       * +NumberOfNodes+ - (<tt>Integer</tt>) The number of compute nodes
 *         in the cluster.
 *       * +PubliclyAccessible+ - (<tt>Boolean</tt>) If true, the cluster
 *         can be accessed from a public network.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method revokeClusterSecurityGroupIngress(params, callback)
 *   Calls the RevokeClusterSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * +ClusterSecurityGroupName+ - (*required*, <tt>String</tt>) The
 *       name of the security Group from which to revoke the ingress
 *       rule.
 *     * +CIDRIP+ - (<tt>String</tt>) The IP range for which to revoke
 *       access. This range must be a valid Classless Inter-Domain
 *       Routing (CIDR) block of IP addresses. If CIDRIP is specified,
 *       EC2SecurityGroupName and EC2SecurityGroupOwnerId cannot be
 *       provided.
 *     * +EC2SecurityGroupName+ - (<tt>String</tt>) The name of the EC2
 *       Security Group whose access is to be revoked. If
 *       EC2SecurityGroupName is specified, EC2SecurityGroupOwnerId must
 *       also be provided and CIDRIP cannot be provided.
 *     * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) The AWS account
 *       number of the owner of the security group specified in the
 *       EC2SecurityGroupName parameter. The AWS access key ID is not an
 *       acceptable value. If EC2SecurityGroupOwnerId is specified,
 *       EC2SecurityGroupName must also be provided. and CIDRIP cannot be
 *       provided. Example: 111122223333
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ClusterSecurityGroupName+ - (<tt>String</tt>) The name of the
 *         cluster security group to which the operation was applied.
 *       * +Description+ - (<tt>String</tt>) A description of the security
 *         group.
 *       * +EC2SecurityGroups+ - (<tt>Array<Object></tt>) A list of EC2
 *         security groups that are permitted to access clusters associated
 *         with this cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the EC2 security
 *           group.
 *         * +EC2SecurityGroupName+ - (<tt>String</tt>) The name of the EC2
 *           Security Group.
 *         * +EC2SecurityGroupOwnerId+ - (<tt>String</tt>) The AWS ID of
 *           the owner of the EC2 security group specified in the
 *           EC2SecurityGroupName field.
 *       * +IPRanges+ - (<tt>Array<Object></tt>) A list of IP ranges (CIDR
 *         blocks) that are permitted to access clusters associated with
 *         this cluster security group.
 *         * +Status+ - (<tt>String</tt>) The status of the IP range, for
 *           example, "authorized".
 *         * +CIDRIP+ - (<tt>String</tt>) The IP range in Classless
 *           Inter-Domain Routing (CIDR) notation.
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
AWS.Redshift.Client = inherit({});
