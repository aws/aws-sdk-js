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
 * ### Sending a Request Using RDS
 *
 * ```js
 * svc = new AWS.RDS();
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
 *   @option (see AWS.RDS.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.RDS.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.RDS.Client
 *
 */
AWS.RDS = inherit({})

/**
 * The low-level RDS client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method authorizeDBSecurityGroupIngress(params, callback)
 *   Calls the AuthorizeDBSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * `DBSecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the DB Security Group to add authorization to.
 *     * `CIDRIP` &mdash; (`String`) The IP range to authorize.
 *     * `EC2SecurityGroupName` &mdash; (`String`) Name of the EC2
 *       Security Group to authorize. For VPC DB Security Groups,
 *       EC2SecurityGroupId must be provided. Otherwise,
 *       EC2SecurityGroupOwnerId and either EC2SecurityGroupName or
 *       EC2SecurityGroupId must be provided.
 *     * `EC2SecurityGroupId` &mdash; (`String`) Id of the EC2 Security
 *       Group to authorize. For VPC DB Security Groups,
 *       EC2SecurityGroupId must be provided. Otherwise,
 *       EC2SecurityGroupOwnerId and either EC2SecurityGroupName or
 *       EC2SecurityGroupId must be provided.
 *     * `EC2SecurityGroupOwnerId` &mdash; (`String`) AWS Account Number
 *       of the owner of the EC2 Security Group specified in the
 *       EC2SecurityGroupName parameter. The AWS Access Key ID is not an
 *       acceptable value. For VPC DB Security Groups, EC2SecurityGroupId
 *       must be provided. Otherwise, EC2SecurityGroupOwnerId and either
 *       EC2SecurityGroupName or EC2SecurityGroupId must be provided.
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
 *       * `DBSecurityGroup` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions:
 *         DescribeDBSecurityGroups AuthorizeDBSecurityGroupIngress
 *         CreateDBSecurityGroup RevokeDBSecurityGroupIngress This data
 *         type is used as a response element in the
 *         DescribeDBSecurityGroups action.
 *         * `OwnerId` &mdash; (`String`) Provides the AWS ID of the owner
 *           of a specific DB Security Group.
 *         * `DBSecurityGroupName` &mdash; (`String`) Specifies the name of
 *           the DB Security Group.
 *         * `DBSecurityGroupDescription` &mdash; (`String`) Provides the
 *           description of the DB Security Group.
 *         * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *           Security Group.
 *         * `EC2SecurityGroups` &mdash; (`Array<Object>`) Contains a list
 *           of EC2SecurityGroup elements.
 *           * `Status` &mdash; (`String`) Provides the status of the EC2
 *             security group.
 *           * `EC2SecurityGroupName` &mdash; (`String`) Specifies the name
 *             of the EC2 Security Group.
 *           * `EC2SecurityGroupId` &mdash; (`String`) Specifies the id of
 *             the EC2 Security Group.
 *           * `EC2SecurityGroupOwnerId` &mdash; (`String`) Specifies the
 *             AWS ID of the owner of the EC2 security group specified in
 *             the EC2SecurityGroupName field.
 *         * `IPRanges` &mdash; (`Array<Object>`) Contains a list of
 *           IPRange elements.
 *           * `Status` &mdash; (`String`) Specifies the status of the IP
 *             range.
 *           * `CIDRIP` &mdash; (`String`) Specifies the IP range.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method copyDBSnapshot(params, callback)
 *   Calls the CopyDBSnapshot API operation.
 *   @param params [Object]
 *     * `SourceDBSnapshotIdentifier` &mdash; **required** &mdash;
 *       (`String`) The identifier for the source DB snapshot.
 *       Constraints: Must be the identifier for a valid system snapshot
 *       in the "available" state. Example: rds:mydb-2012-04-02-00-01
 *     * `TargetDBSnapshotIdentifier` &mdash; **required** &mdash;
 *       (`String`) The identifier for the copied snapshot. Constraints:
 *       Cannot be null, empty, or blank Must contain from 1 to 255
 *       alphanumeric characters or hyphens First character must be a
 *       letter Cannot end with a hyphen or contain two consecutive
 *       hyphens Example: my-db-snapshot
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
 *       * `DBSnapshot` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBSnapshot
 *         DeleteDBSnapshot This data type is used as a response element in
 *         the DescribeDBSnapshots action.
 *         * `DBSnapshotIdentifier` &mdash; (`String`) Specifies the
 *           identifier for the DB Snapshot.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Specifies the the
 *           DBInstanceIdentifier of the DB Instance this DB Snapshot was
 *           created from.
 *         * `SnapshotCreateTime` &mdash; (`Date`) Provides the time (UTC)
 *           when the snapshot was taken.
 *         * `Engine` &mdash; (`String`) Specifies the name of the database
 *           engine.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size in gigabytes (GB).
 *         * `Status` &mdash; (`String`) Specifies the status of this DB
 *           Snapshot.
 *         * `Port` &mdash; (`Integer`) Specifies the port that the
 *           database engine was listening on at the time of the snapshot.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance was located in at the
 *           time of the DB Snapshot.
 *         * `VpcId` &mdash; (`String`) Provides the Vpc Id associated with
 *           the DB Snapshot.
 *         * `InstanceCreateTime` &mdash; (`Date`) Specifies the time (UTC)
 *           when the snapshot was taken.
 *         * `MasterUsername` &mdash; (`String`) Provides the master
 *           username for the DB Instance.
 *         * `EngineVersion` &mdash; (`String`) Specifies the version of
 *           the database engine.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for the restored DB Instance.
 *         * `SnapshotType` &mdash; (`String`) Provides the type of the DB
 *           Snapshot.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDBInstance(params, callback)
 *   Calls the CreateDBInstance API operation.
 *   @param params [Object]
 *     * `DBName` &mdash; (`String`) The meaning of this parameter
 *       differs according to the database engine you use. MySQL The name
 *       of the database to create when the DB Instance is created. If
 *       this parameter is not specified, no database is created in the
 *       DB Instance. Constraints: Must contain 1 to 64 alphanumeric
 *       characters Cannot be a word reserved by the specified database
 *       engine Type: String Oracle The Oracle System ID (SID) of the
 *       created DB Instance. Default: ORCL Constraints: Cannot be longer
 *       than 8 characters SQL Server Not applicable. Must be null.
 *     * `DBInstanceIdentifier` &mdash; **required** &mdash; (`String`)
 *       The DB Instance identifier. This parameter is stored as a
 *       lowercase string. Constraints: Must contain from 1 to 63
 *       alphanumeric characters or hyphens (1 to 15 for SQL Server).
 *       First character must be a letter. Cannot end with a hyphen or
 *       contain two consecutive hyphens. Example: mydbinstance
 *     * `AllocatedStorage` &mdash; **required** &mdash; (`Integer`) The
 *       amount of storage (in gigabytes) to be initially allocated for
 *       the database instance. MySQL Constraints: Must be an integer
 *       from 5 to 1024. Type: Integer Oracle Constraints: Must be an
 *       integer from 10 to 1024. SQL Server Constraints: Must be an
 *       integer from 200 to 1024 (Standard Edition and Enterprise
 *       Edition) or from 30 to 1024 (Express Edition and Web Edition)
 *     * `DBInstanceClass` &mdash; **required** &mdash; (`String`) The
 *       compute and memory capacity of the DB Instance. To determine the
 *       instance classes that are available for a particular DB engine,
 *       use the DescribeOrderableDBInstanceOptions action. Valid Values:
 *       db.t1.micro | db.m1.small | db.m1.large | db.m1.xlarge |
 *       db.m2.xlarge |db.m2.2xlarge | db.m2.4xlarge Amazon RDS does not
 *       support db.t1.micro instances in a virtual private cloud (VPC).
 *     * `Engine` &mdash; **required** &mdash; (`String`) The name of the
 *       database engine to be used for this instance. Valid Values:
 *       MySQL | oracle-se1 | oracle-se | oracle-ee | sqlserver-ee |
 *       sqlserver-se | sqlserver-ex | sqlserver-web
 *     * `MasterUsername` &mdash; **required** &mdash; (`String`) The
 *       name of master user for the client DB Instance. MySQL
 *       Constraints: Must be 1 to 16 alphanumeric characters. First
 *       character must be a letter. Cannot be a reserved word for the
 *       chosen database engine. Type: String Oracle Constraints: Must be
 *       1 to 30 alphanumeric characters. First character must be a
 *       letter. Cannot be a reserved word for the chosen database
 *       engine. SQL Server Constraints: Must be 1 to 128 alphanumeric
 *       characters. First character must be a letter. Cannot be a
 *       reserved word for the chosen database engine.
 *     * `MasterUserPassword` &mdash; **required** &mdash; (`String`) The
 *       password for the master database user. MySQL Constraints: Must
 *       contain from 8 to 41 alphanumeric characters. Type: String
 *       Oracle Constraints: Must contain from 8 to 30 alphanumeric
 *       characters. SQL Server Constraints: Must contain from 8 to 128
 *       alphanumeric characters.
 *     * `DBSecurityGroups` &mdash; (`Array<String>`) A list of DB
 *       Security Groups to associate with this DB Instance. Default: The
 *       default DB Security Group for the database engine.
 *     * `AvailabilityZone` &mdash; (`String`) The EC2 Availability Zone
 *       that the database instance will be created in. Default: A
 *       random, system-chosen Availability Zone in the endpoint's
 *       region. Example: us-east-1d Constraint: The AvailabilityZone
 *       parameter cannot be specified if the MultiAZ parameter is set to
 *       true. The specified Availability Zone must be in the same region
 *       as the current endpoint.
 *     * `DBSubnetGroupName` &mdash; (`String`) A DB Subnet Group to
 *       associate with this DB Instance. If there is no DB Subnet Group,
 *       then it is a non-VPC DB instance.
 *     * `PreferredMaintenanceWindow` &mdash; (`String`) The weekly time
 *       range (in UTC) during which system maintenance can occur.
 *       Format: ddd:hh24:mi-ddd:hh24:mi Default: A 30-minute window
 *       selected at random from an 8-hour block of time per region,
 *       occurring on a random day of the week. The following list shows
 *       the time blocks for each region from which the default
 *       maintenance windows are assigned. US-East (Northern Virginia)
 *       Region: 03:00-11:00 UTC US-West (Northern California) Region:
 *       06:00-14:00 UTC EU (Ireland) Region: 22:00-06:00 UTC Asia
 *       Pacific (Singapore) Region: 14:00-22:00 UTC Asia Pacific (Tokyo)
 *       Region: 17:00-03:00 UTC Valid Days: Mon, Tue, Wed, Thu, Fri,
 *       Sat, Sun Constraints: Minimum 30-minute window.
 *     * `DBParameterGroupName` &mdash; (`String`) The name of the DB
 *       Parameter Group to associate with this DB instance. If this
 *       argument is omitted, the default DBParameterGroup for the
 *       specified engine will be used. Constraints: Must be 1 to 255
 *       alphanumeric characters First character must be a letter Cannot
 *       end with a hyphen or contain two consecutive hyphens
 *     * `BackupRetentionPeriod` &mdash; (`Integer`) The number of days
 *       for which automated backups are retained. Setting this parameter
 *       to a positive number enables backups. Setting this parameter to
 *       0 disables automated backups. Default: 1 Constraints: Must be a
 *       value from 0 to 8 Cannot be set to 0 if the DB Instance is a
 *       master instance with read replicas
 *     * `PreferredBackupWindow` &mdash; (`String`) The daily time range
 *       during which automated backups are created if automated backups
 *       are enabled, using the BackupRetentionPeriod parameter. Default:
 *       A 30-minute window selected at random from an 8-hour block of
 *       time per region. The following list shows the time blocks for
 *       each region from which the default backup windows are assigned.
 *       US-East (Northern Virginia) Region: 03:00-11:00 UTC US-West
 *       (Northern California) Region: 06:00-14:00 UTC EU (Ireland)
 *       Region: 22:00-06:00 UTC Asia Pacific (Singapore) Region:
 *       14:00-22:00 UTC Asia Pacific (Tokyo) Region: 17:00-03:00 UTC
 *       Constraints: Must be in the format hh24:mi-hh24:mi. Times should
 *       be Universal Time Coordinated (UTC). Must not conflict with the
 *       preferred maintenance window. Must be at least 30 minutes.
 *     * `Port` &mdash; (`Integer`) The port number on which the database
 *       accepts connections. MySQL Default: 3306 Valid Values:
 *       1150-65535 Type: Integer Oracle Default: 1521 Valid Values:
 *       1150-65535 SQL Server Default: 1433 Valid Values: 1150-65535
 *       except for 1434 and 3389.
 *     * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is a
 *       Multi-AZ deployment. For Microsoft SQL Server, must be set to
 *       false. You cannot set the AvailabilityZone parameter if the
 *       MultiAZ parameter is set to true.
 *     * `EngineVersion` &mdash; (`String`) The version number of the
 *       database engine to use. MySQL Example: 5.1.42 Type: String
 *       Oracle Example: 11.2.0.2.v2 Type: String SQL Server Example:
 *       10.50.2789.0.v1
 *     * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *       minor engine upgrades will be applied automatically to the DB
 *       Instance during the maintenance window. Default: true
 *     * `LicenseModel` &mdash; (`String`) License model information for
 *       this DB Instance. Valid values: license-included |
 *       bring-your-own-license | general-public-license
 *     * `OptionGroupName` &mdash; (`String`) Indicates that the DB
 *       Instance should be associated with the specified option group.
 *     * `CharacterSetName` &mdash; (`String`) For supported engines,
 *       indicates that the DB Instance should be associated with the
 *       specified CharacterSet.
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
 *       * `DBInstance` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBInstance
 *         DeleteDBInstance ModifyDBInstance This data type is used as a
 *         response element in the DescribeDBInstances action.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Contains a
 *           user-supplied database identifier. This is the unique key that
 *           identifies a DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) Contains the name of the
 *           compute and memory capacity class of the DB Instance.
 *         * `Engine` &mdash; (`String`) Provides the name of the database
 *           engine to be used for this DB Instance.
 *         * `DBInstanceStatus` &mdash; (`String`) Specifies the current
 *           state of this database.
 *         * `MasterUsername` &mdash; (`String`) Contains the master
 *           username for the DB Instance.
 *         * `DBName` &mdash; (`String`) The meaning of this parameter
 *           differs according to the database engine you use. MySQL
 *           Contains the name of the initial database of this instance
 *           that was provided at create time, if one was specified when
 *           the DB Instance was created. This same name is returned for
 *           the life of the DB Instance. Type: String Oracle Contains the
 *           Oracle System ID (SID) of the created DB Instance.
 *         * `Endpoint` &mdash; (`Object`) Specifies the connection
 *           endpoint.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the DB Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the
 *             database engine is listening on.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size specified in gigabytes.
 *         * `InstanceCreateTime` &mdash; (`Date`) Provides the date and
 *           time the DB Instance was created.
 *         * `PreferredBackupWindow` &mdash; (`String`) Specifies the daily
 *           time range during which automated backups are created if
 *           automated backups are enabled, as determined by the
 *           BackupRetentionPeriod.
 *         * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *           number of days for which automatic DB Snapshots are retained.
 *         * `DBSecurityGroups` &mdash; (`Array<Object>`) Provides List of
 *           DB Security Group elements containing only
 *           DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
 *           * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *             Security Group.
 *           * `Status` &mdash; (`String`) The status of the DB Security
 *             Group.
 *         * `DBParameterGroups` &mdash; (`Array<Object>`) Provides the
 *           list of DB Parameter Groups applied to this DB Instance.
 *           * `DBParameterGroupName` &mdash; (`String`) The name of the DP
 *             Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance is located in.
 *         * `DBSubnetGroup` &mdash; (`Object`) Provides the inforamtion of
 *           the subnet group associated with the DB instance, including
 *           the name, descrption and subnets in the subnet group.
 *           * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *             the DB Subnet Group.
 *           * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *             description of the DB Subnet Group.
 *           * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *             Subnet Group.
 *           * `SubnetGroupStatus` &mdash; (`String`) Provides the status
 *             of the DB Subnet Group.
 *           * `Subnets` &mdash; (`Array<Object>`) Contains a list of
 *             Subnets elements.
 *             * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *               identifier of the subnet.
 *             * `SubnetAvailabilityZone` &mdash; (`Object`)
 *               * `Name` &mdash; (`String`) The name of the availability
 *                 zone.
 *             * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *               the subnet.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the DB Instance are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by subelements.
 *           * `DBInstanceClass` &mdash; (`String`) Contains the new
 *             DBInstanceClass for the DB Instance that will be applied or
 *             is in progress.
 *           * `AllocatedStorage` &mdash; (`Integer`) Contains the new
 *             AllocatedStorage size for the DB Instance that will be
 *             applied or is in progress.
 *           * `MasterUserPassword` &mdash; (`String`) Contains the pending
 *             or in-progress change of the master credentials for the DB
 *             Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the pending port for
 *             the DB Instance.
 *           * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *             pending number of days for which automated backups are
 *             retained.
 *           * `MultiAZ` &mdash; (`Boolean`) Indicates that the Single-AZ
 *             DB Instance is to change to a Multi-AZ deployment.
 *           * `EngineVersion` &mdash; (`String`) Indicates the database
 *             engine version.
 *         * `LatestRestorableTime` &mdash; (`Date`) Specifies the latest
 *           time to which a database can be restored with point-in-time
 *           restore.
 *         * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is
 *           a Multi-AZ deployment.
 *         * `EngineVersion` &mdash; (`String`) Indicates the database
 *           engine version.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `ReadReplicaSourceDBInstanceIdentifier` &mdash; (`String`)
 *           Contains the identifier of the source DB Instance if this DB
 *           Instance is a Read Replica.
 *         * `ReadReplicaDBInstanceIdentifiers` &mdash; (`Array<String>`)
 *           Contains one or more identifiers of the Read Replicas
 *           associated with this DB Instance.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for this DB Instance.
 *         * `OptionGroupMembership` &mdash; (`Object`) Specifies the name
 *           and status of the option group that this instance belongs to.
 *           * `OptionGroupName` &mdash; (`String`) The name of the option
 *             group that the instance belongs to.
 *           * `Status` &mdash; (`String`) The status of the DB Instance's
 *             option group membership (e.g. in-sync, pending,
 *             pending-maintenance, applying).
 *         * `CharacterSetName` &mdash; (`String`) If present, specifies
 *           the name of the character set that this instance is associated
 *           with.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDBInstanceReadReplica(params, callback)
 *   Calls the CreateDBInstanceReadReplica API operation.
 *   @param params [Object]
 *     * `DBInstanceIdentifier` &mdash; **required** &mdash; (`String`)
 *       The DB Instance identifier of the Read Replica. This is the
 *       unique key that identifies a DB Instance. This parameter is
 *       stored as a lowercase string.
 *     * `SourceDBInstanceIdentifier` &mdash; **required** &mdash;
 *       (`String`) The identifier of the DB Instance that will act as
 *       the source for the Read Replica. Each DB Instance can have up to
 *       five Read Replicas. Constraints: Must be the identifier of an
 *       existing DB Instance that is not already a Read Replica DB
 *       Instance.
 *     * `DBInstanceClass` &mdash; (`String`) The compute and memory
 *       capacity of the Read Replica. Valid Values: db.m1.small |
 *       db.m1.large | db.m1.xlarge | db.m2.xlarge |db.m2.2xlarge |
 *       db.m2.4xlarge Default: Inherits from the source DB Instance.
 *     * `AvailabilityZone` &mdash; (`String`) The Amazon EC2
 *       Availability Zone that the Read Replica will be created in.
 *       Default: A random, system-chosen Availability Zone in the
 *       endpoint's region. Example: us-east-1d
 *     * `Port` &mdash; (`Integer`) The port number that the DB Instance
 *       uses for connections. Default: Inherits from the source DB
 *       Instance Valid Values: 1150-65535
 *     * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *       minor engine upgrades will be applied automatically to the Read
 *       Replica during the maintenance window. Default: Inherits from
 *       the source DB Instance
 *     * `OptionGroupName` &mdash; (`String`)
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
 *       * `DBInstance` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBInstance
 *         DeleteDBInstance ModifyDBInstance This data type is used as a
 *         response element in the DescribeDBInstances action.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Contains a
 *           user-supplied database identifier. This is the unique key that
 *           identifies a DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) Contains the name of the
 *           compute and memory capacity class of the DB Instance.
 *         * `Engine` &mdash; (`String`) Provides the name of the database
 *           engine to be used for this DB Instance.
 *         * `DBInstanceStatus` &mdash; (`String`) Specifies the current
 *           state of this database.
 *         * `MasterUsername` &mdash; (`String`) Contains the master
 *           username for the DB Instance.
 *         * `DBName` &mdash; (`String`) The meaning of this parameter
 *           differs according to the database engine you use. MySQL
 *           Contains the name of the initial database of this instance
 *           that was provided at create time, if one was specified when
 *           the DB Instance was created. This same name is returned for
 *           the life of the DB Instance. Type: String Oracle Contains the
 *           Oracle System ID (SID) of the created DB Instance.
 *         * `Endpoint` &mdash; (`Object`) Specifies the connection
 *           endpoint.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the DB Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the
 *             database engine is listening on.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size specified in gigabytes.
 *         * `InstanceCreateTime` &mdash; (`Date`) Provides the date and
 *           time the DB Instance was created.
 *         * `PreferredBackupWindow` &mdash; (`String`) Specifies the daily
 *           time range during which automated backups are created if
 *           automated backups are enabled, as determined by the
 *           BackupRetentionPeriod.
 *         * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *           number of days for which automatic DB Snapshots are retained.
 *         * `DBSecurityGroups` &mdash; (`Array<Object>`) Provides List of
 *           DB Security Group elements containing only
 *           DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
 *           * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *             Security Group.
 *           * `Status` &mdash; (`String`) The status of the DB Security
 *             Group.
 *         * `DBParameterGroups` &mdash; (`Array<Object>`) Provides the
 *           list of DB Parameter Groups applied to this DB Instance.
 *           * `DBParameterGroupName` &mdash; (`String`) The name of the DP
 *             Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance is located in.
 *         * `DBSubnetGroup` &mdash; (`Object`) Provides the inforamtion of
 *           the subnet group associated with the DB instance, including
 *           the name, descrption and subnets in the subnet group.
 *           * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *             the DB Subnet Group.
 *           * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *             description of the DB Subnet Group.
 *           * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *             Subnet Group.
 *           * `SubnetGroupStatus` &mdash; (`String`) Provides the status
 *             of the DB Subnet Group.
 *           * `Subnets` &mdash; (`Array<Object>`) Contains a list of
 *             Subnets elements.
 *             * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *               identifier of the subnet.
 *             * `SubnetAvailabilityZone` &mdash; (`Object`)
 *               * `Name` &mdash; (`String`) The name of the availability
 *                 zone.
 *             * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *               the subnet.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the DB Instance are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by subelements.
 *           * `DBInstanceClass` &mdash; (`String`) Contains the new
 *             DBInstanceClass for the DB Instance that will be applied or
 *             is in progress.
 *           * `AllocatedStorage` &mdash; (`Integer`) Contains the new
 *             AllocatedStorage size for the DB Instance that will be
 *             applied or is in progress.
 *           * `MasterUserPassword` &mdash; (`String`) Contains the pending
 *             or in-progress change of the master credentials for the DB
 *             Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the pending port for
 *             the DB Instance.
 *           * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *             pending number of days for which automated backups are
 *             retained.
 *           * `MultiAZ` &mdash; (`Boolean`) Indicates that the Single-AZ
 *             DB Instance is to change to a Multi-AZ deployment.
 *           * `EngineVersion` &mdash; (`String`) Indicates the database
 *             engine version.
 *         * `LatestRestorableTime` &mdash; (`Date`) Specifies the latest
 *           time to which a database can be restored with point-in-time
 *           restore.
 *         * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is
 *           a Multi-AZ deployment.
 *         * `EngineVersion` &mdash; (`String`) Indicates the database
 *           engine version.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `ReadReplicaSourceDBInstanceIdentifier` &mdash; (`String`)
 *           Contains the identifier of the source DB Instance if this DB
 *           Instance is a Read Replica.
 *         * `ReadReplicaDBInstanceIdentifiers` &mdash; (`Array<String>`)
 *           Contains one or more identifiers of the Read Replicas
 *           associated with this DB Instance.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for this DB Instance.
 *         * `OptionGroupMembership` &mdash; (`Object`) Specifies the name
 *           and status of the option group that this instance belongs to.
 *           * `OptionGroupName` &mdash; (`String`) The name of the option
 *             group that the instance belongs to.
 *           * `Status` &mdash; (`String`) The status of the DB Instance's
 *             option group membership (e.g. in-sync, pending,
 *             pending-maintenance, applying).
 *         * `CharacterSetName` &mdash; (`String`) If present, specifies
 *           the name of the character set that this instance is associated
 *           with.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDBParameterGroup(params, callback)
 *   Calls the CreateDBParameterGroup API operation.
 *   @param params [Object]
 *     * `DBParameterGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the DB Parameter Group. Constraints: Must be 1 to
 *       255 alphanumeric characters First character must be a letter
 *       Cannot end with a hyphen or contain two consecutive hyphens This
 *       value is stored as a lower-case string.
 *     * `DBParameterGroupFamily` &mdash; **required** &mdash; (`String`)
 *       The DB Parameter Group Family name. A DB Parameter Group can be
 *       associated with one and only one DB Parameter Group Family, and
 *       can be applied only to a DB Instance running a database engine
 *       and engine version compatible with that DB Parameter Group
 *       Family.
 *     * `Description` &mdash; **required** &mdash; (`String`) The
 *       description for the DB Parameter Group.
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
 *       * `DBParameterGroup` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the CreateDBParameterGroup action. This
 *         data type is used as a request parameter in the
 *         DeleteDBParameterGroup action, and as a response element in the
 *         DescribeDBParameterGroups action.
 *         * `DBParameterGroupName` &mdash; (`String`) Provides the name of
 *           the DB Parameter Group.
 *         * `DBParameterGroupFamily` &mdash; (`String`) Provides the name
 *           of the DB Parameter Group Family that this DB Parameter Group
 *           is compatible with.
 *         * `Description` &mdash; (`String`) Provides the
 *           customer-specified description for this DB Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDBSecurityGroup(params, callback)
 *   Calls the CreateDBSecurityGroup API operation.
 *   @param params [Object]
 *     * `DBSecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name for the DB Security Group. This value is stored as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters or hyphens. Must not be "Default".
 *       Example: mysecuritygroup
 *     * `DBSecurityGroupDescription` &mdash; **required** &mdash;
 *       (`String`) The description for the DB Security Group.
 *     * `EC2VpcId` &mdash; (`String`) The Id of VPC. Indicates which VPC
 *       this DB Security Group should belong to. Must be specified to
 *       create a DB Security Group for a VPC; may not be specified
 *       otherwise.
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
 *       * `DBSecurityGroup` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions:
 *         DescribeDBSecurityGroups AuthorizeDBSecurityGroupIngress
 *         CreateDBSecurityGroup RevokeDBSecurityGroupIngress This data
 *         type is used as a response element in the
 *         DescribeDBSecurityGroups action.
 *         * `OwnerId` &mdash; (`String`) Provides the AWS ID of the owner
 *           of a specific DB Security Group.
 *         * `DBSecurityGroupName` &mdash; (`String`) Specifies the name of
 *           the DB Security Group.
 *         * `DBSecurityGroupDescription` &mdash; (`String`) Provides the
 *           description of the DB Security Group.
 *         * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *           Security Group.
 *         * `EC2SecurityGroups` &mdash; (`Array<Object>`) Contains a list
 *           of EC2SecurityGroup elements.
 *           * `Status` &mdash; (`String`) Provides the status of the EC2
 *             security group.
 *           * `EC2SecurityGroupName` &mdash; (`String`) Specifies the name
 *             of the EC2 Security Group.
 *           * `EC2SecurityGroupId` &mdash; (`String`) Specifies the id of
 *             the EC2 Security Group.
 *           * `EC2SecurityGroupOwnerId` &mdash; (`String`) Specifies the
 *             AWS ID of the owner of the EC2 security group specified in
 *             the EC2SecurityGroupName field.
 *         * `IPRanges` &mdash; (`Array<Object>`) Contains a list of
 *           IPRange elements.
 *           * `Status` &mdash; (`String`) Specifies the status of the IP
 *             range.
 *           * `CIDRIP` &mdash; (`String`) Specifies the IP range.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDBSnapshot(params, callback)
 *   Calls the CreateDBSnapshot API operation.
 *   @param params [Object]
 *     * `DBSnapshotIdentifier` &mdash; **required** &mdash; (`String`)
 *       The identifier for the DB Snapshot. Constraints: Cannot be null,
 *       empty, or blank Must contain from 1 to 255 alphanumeric
 *       characters or hyphens First character must be a letter Cannot
 *       end with a hyphen or contain two consecutive hyphens Example:
 *       my-snapshot-id
 *     * `DBInstanceIdentifier` &mdash; **required** &mdash; (`String`)
 *       The DB Instance identifier. This is the unique key that
 *       identifies a DB Instance. This parameter isn't case sensitive.
 *       Constraints: Must contain from 1 to 63 alphanumeric characters
 *       or hyphens First character must be a letter Cannot end with a
 *       hyphen or contain two consecutive hyphens
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
 *       * `DBSnapshot` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBSnapshot
 *         DeleteDBSnapshot This data type is used as a response element in
 *         the DescribeDBSnapshots action.
 *         * `DBSnapshotIdentifier` &mdash; (`String`) Specifies the
 *           identifier for the DB Snapshot.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Specifies the the
 *           DBInstanceIdentifier of the DB Instance this DB Snapshot was
 *           created from.
 *         * `SnapshotCreateTime` &mdash; (`Date`) Provides the time (UTC)
 *           when the snapshot was taken.
 *         * `Engine` &mdash; (`String`) Specifies the name of the database
 *           engine.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size in gigabytes (GB).
 *         * `Status` &mdash; (`String`) Specifies the status of this DB
 *           Snapshot.
 *         * `Port` &mdash; (`Integer`) Specifies the port that the
 *           database engine was listening on at the time of the snapshot.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance was located in at the
 *           time of the DB Snapshot.
 *         * `VpcId` &mdash; (`String`) Provides the Vpc Id associated with
 *           the DB Snapshot.
 *         * `InstanceCreateTime` &mdash; (`Date`) Specifies the time (UTC)
 *           when the snapshot was taken.
 *         * `MasterUsername` &mdash; (`String`) Provides the master
 *           username for the DB Instance.
 *         * `EngineVersion` &mdash; (`String`) Specifies the version of
 *           the database engine.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for the restored DB Instance.
 *         * `SnapshotType` &mdash; (`String`) Provides the type of the DB
 *           Snapshot.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDBSubnetGroup(params, callback)
 *   Calls the CreateDBSubnetGroup API operation.
 *   @param params [Object]
 *     * `DBSubnetGroupName` &mdash; **required** &mdash; (`String`) The
 *       name for the DB Subnet Group. This value is stored as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters or hyphens. Must not be "Default".
 *       Example: mySubnetgroup
 *     * `DBSubnetGroupDescription` &mdash; **required** &mdash;
 *       (`String`) The description for the DB Subnet Group.
 *     * `SubnetIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       EC2 Subnet IDs for the DB Subnet Group.
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
 *       * `DBSubnetGroup` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions:
 *         CreateDBSubnetGroup ModifyDBSubnetGroup DescribeDBSubnetGroups
 *         DeleteDBSubnetGroup This data type is used as a response element
 *         in the DescribeDBSubnetGroups action.
 *         * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *           the DB Subnet Group.
 *         * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *           description of the DB Subnet Group.
 *         * `VpcId` &mdash; (`String`) Provides the VpcId of the DB Subnet
 *           Group.
 *         * `SubnetGroupStatus` &mdash; (`String`) Provides the status of
 *           the DB Subnet Group.
 *         * `Subnets` &mdash; (`Array<Object>`) Contains a list of Subnets
 *           elements.
 *           * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *             identifier of the subnet.
 *           * `SubnetAvailabilityZone` &mdash; (`Object`)
 *             * `Name` &mdash; (`String`) The name of the availability
 *               zone.
 *           * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *             the subnet.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createOptionGroup(params, callback)
 *   Calls the CreateOptionGroup API operation.
 *   @param params [Object]
 *     * `OptionGroupName` &mdash; **required** &mdash; (`String`)
 *       Specifies the name of the option group to be created.
 *       Constraints: Must be 1 to 255 alphanumeric characters or hyphens
 *       First character must be a letter Cannot end with a hyphen or
 *       contain two consecutive hyphens Example: myOptiongroup
 *     * `EngineName` &mdash; **required** &mdash; (`String`) Specifies
 *       the name of the engine that this option group should be
 *       associated with.
 *     * `MajorEngineVersion` &mdash; **required** &mdash; (`String`)
 *       Specifies the major version of the engine that this option group
 *       should be associated with.
 *     * `OptionGroupDescription` &mdash; **required** &mdash; (`String`)
 *       The description of the option group.
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
 *       * `OptionGroup` &mdash; (`Object`)
 *         * `OptionGroupName` &mdash; (`String`) Specifies the name of the
 *           option group.
 *         * `OptionGroupDescription` &mdash; (`String`)
 *         * `EngineName` &mdash; (`String`) Engine name that this option
 *           group can be applied to.
 *         * `MajorEngineVersion` &mdash; (`String`) Indicates the major
 *           engine version associated with this option group.
 *         * `Options` &mdash; (`Array<Object>`)
 *           * `OptionName` &mdash; (`String`) The name of the option.
 *           * `OptionDescription` &mdash; (`String`) The description of
 *             the option.
 *           * `Port` &mdash; (`Integer`) If required, the port configured
 *             for this option to use.
 *           * `DBSecurityGroupMemberships` &mdash; (`Array<Object>`)
 *             * `DBSecurityGroupName` &mdash; (`String`) The name of the
 *               DB Security Group.
 *             * `Status` &mdash; (`String`) The status of the DB Security
 *               Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteDBInstance(params, callback)
 *   Calls the DeleteDBInstance API operation.
 *   @param params [Object]
 *     * `DBInstanceIdentifier` &mdash; **required** &mdash; (`String`)
 *       The DB Instance identifier for the DB Instance to be deleted.
 *       This parameter isn't case sensitive. Constraints: Must contain
 *       from 1 to 63 alphanumeric characters or hyphens First character
 *       must be a letter Cannot end with a hyphen or contain two
 *       consecutive hyphens
 *     * `SkipFinalSnapshot` &mdash; (`Boolean`) Determines whether a
 *       final DB Snapshot is created before the DB Instance is deleted.
 *       If true is specified, no DBSnapshot is created. If false is
 *       specified, a DB Snapshot is created before the DB Instance is
 *       deleted. The FinalDBSnapshotIdentifier parameter must be
 *       specified if SkipFinalSnapshot is false.Default: false
 *     * `FinalDBSnapshotIdentifier` &mdash; (`String`) The
 *       DBSnapshotIdentifier of the new DBSnapshot created when
 *       SkipFinalSnapshot is set to false. Specifying this parameter and
 *       also setting the SkipFinalShapshot parameter to true results in
 *       an error. Constraints: Must be 1 to 255 alphanumeric characters
 *       First character must be a letter Cannot end with a hyphen or
 *       contain two consecutive hyphens
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
 *       * `DBInstance` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBInstance
 *         DeleteDBInstance ModifyDBInstance This data type is used as a
 *         response element in the DescribeDBInstances action.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Contains a
 *           user-supplied database identifier. This is the unique key that
 *           identifies a DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) Contains the name of the
 *           compute and memory capacity class of the DB Instance.
 *         * `Engine` &mdash; (`String`) Provides the name of the database
 *           engine to be used for this DB Instance.
 *         * `DBInstanceStatus` &mdash; (`String`) Specifies the current
 *           state of this database.
 *         * `MasterUsername` &mdash; (`String`) Contains the master
 *           username for the DB Instance.
 *         * `DBName` &mdash; (`String`) The meaning of this parameter
 *           differs according to the database engine you use. MySQL
 *           Contains the name of the initial database of this instance
 *           that was provided at create time, if one was specified when
 *           the DB Instance was created. This same name is returned for
 *           the life of the DB Instance. Type: String Oracle Contains the
 *           Oracle System ID (SID) of the created DB Instance.
 *         * `Endpoint` &mdash; (`Object`) Specifies the connection
 *           endpoint.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the DB Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the
 *             database engine is listening on.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size specified in gigabytes.
 *         * `InstanceCreateTime` &mdash; (`Date`) Provides the date and
 *           time the DB Instance was created.
 *         * `PreferredBackupWindow` &mdash; (`String`) Specifies the daily
 *           time range during which automated backups are created if
 *           automated backups are enabled, as determined by the
 *           BackupRetentionPeriod.
 *         * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *           number of days for which automatic DB Snapshots are retained.
 *         * `DBSecurityGroups` &mdash; (`Array<Object>`) Provides List of
 *           DB Security Group elements containing only
 *           DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
 *           * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *             Security Group.
 *           * `Status` &mdash; (`String`) The status of the DB Security
 *             Group.
 *         * `DBParameterGroups` &mdash; (`Array<Object>`) Provides the
 *           list of DB Parameter Groups applied to this DB Instance.
 *           * `DBParameterGroupName` &mdash; (`String`) The name of the DP
 *             Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance is located in.
 *         * `DBSubnetGroup` &mdash; (`Object`) Provides the inforamtion of
 *           the subnet group associated with the DB instance, including
 *           the name, descrption and subnets in the subnet group.
 *           * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *             the DB Subnet Group.
 *           * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *             description of the DB Subnet Group.
 *           * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *             Subnet Group.
 *           * `SubnetGroupStatus` &mdash; (`String`) Provides the status
 *             of the DB Subnet Group.
 *           * `Subnets` &mdash; (`Array<Object>`) Contains a list of
 *             Subnets elements.
 *             * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *               identifier of the subnet.
 *             * `SubnetAvailabilityZone` &mdash; (`Object`)
 *               * `Name` &mdash; (`String`) The name of the availability
 *                 zone.
 *             * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *               the subnet.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the DB Instance are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by subelements.
 *           * `DBInstanceClass` &mdash; (`String`) Contains the new
 *             DBInstanceClass for the DB Instance that will be applied or
 *             is in progress.
 *           * `AllocatedStorage` &mdash; (`Integer`) Contains the new
 *             AllocatedStorage size for the DB Instance that will be
 *             applied or is in progress.
 *           * `MasterUserPassword` &mdash; (`String`) Contains the pending
 *             or in-progress change of the master credentials for the DB
 *             Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the pending port for
 *             the DB Instance.
 *           * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *             pending number of days for which automated backups are
 *             retained.
 *           * `MultiAZ` &mdash; (`Boolean`) Indicates that the Single-AZ
 *             DB Instance is to change to a Multi-AZ deployment.
 *           * `EngineVersion` &mdash; (`String`) Indicates the database
 *             engine version.
 *         * `LatestRestorableTime` &mdash; (`Date`) Specifies the latest
 *           time to which a database can be restored with point-in-time
 *           restore.
 *         * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is
 *           a Multi-AZ deployment.
 *         * `EngineVersion` &mdash; (`String`) Indicates the database
 *           engine version.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `ReadReplicaSourceDBInstanceIdentifier` &mdash; (`String`)
 *           Contains the identifier of the source DB Instance if this DB
 *           Instance is a Read Replica.
 *         * `ReadReplicaDBInstanceIdentifiers` &mdash; (`Array<String>`)
 *           Contains one or more identifiers of the Read Replicas
 *           associated with this DB Instance.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for this DB Instance.
 *         * `OptionGroupMembership` &mdash; (`Object`) Specifies the name
 *           and status of the option group that this instance belongs to.
 *           * `OptionGroupName` &mdash; (`String`) The name of the option
 *             group that the instance belongs to.
 *           * `Status` &mdash; (`String`) The status of the DB Instance's
 *             option group membership (e.g. in-sync, pending,
 *             pending-maintenance, applying).
 *         * `CharacterSetName` &mdash; (`String`) If present, specifies
 *           the name of the character set that this instance is associated
 *           with.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteDBParameterGroup(params, callback)
 *   Calls the DeleteDBParameterGroup API operation.
 *   @param params [Object]
 *     * `DBParameterGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the DB Parameter Group. Constraints: Must be the
 *       name of an existing DB Parameter Group You cannot delete a
 *       default DB Parameter Group Cannot be associated with any DB
 *       Instances
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
 * @!method deleteDBSecurityGroup(params, callback)
 *   Calls the DeleteDBSecurityGroup API operation.
 *   @param params [Object]
 *     * `DBSecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the DB Security Group to delete. You cannot delete
 *       the default DB Security Group. Constraints: Must be 1 to 255
 *       alphanumeric characters First character must be a letter Cannot
 *       end with a hyphen or contain two consecutive hyphens
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
 * @!method deleteDBSnapshot(params, callback)
 *   Calls the DeleteDBSnapshot API operation.
 *   @param params [Object]
 *     * `DBSnapshotIdentifier` &mdash; **required** &mdash; (`String`)
 *       The DBSnapshot identifier. Constraints: Must be the name of an
 *       existing DB Snapshot in the available state.
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
 *       * `DBSnapshot` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBSnapshot
 *         DeleteDBSnapshot This data type is used as a response element in
 *         the DescribeDBSnapshots action.
 *         * `DBSnapshotIdentifier` &mdash; (`String`) Specifies the
 *           identifier for the DB Snapshot.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Specifies the the
 *           DBInstanceIdentifier of the DB Instance this DB Snapshot was
 *           created from.
 *         * `SnapshotCreateTime` &mdash; (`Date`) Provides the time (UTC)
 *           when the snapshot was taken.
 *         * `Engine` &mdash; (`String`) Specifies the name of the database
 *           engine.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size in gigabytes (GB).
 *         * `Status` &mdash; (`String`) Specifies the status of this DB
 *           Snapshot.
 *         * `Port` &mdash; (`Integer`) Specifies the port that the
 *           database engine was listening on at the time of the snapshot.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance was located in at the
 *           time of the DB Snapshot.
 *         * `VpcId` &mdash; (`String`) Provides the Vpc Id associated with
 *           the DB Snapshot.
 *         * `InstanceCreateTime` &mdash; (`Date`) Specifies the time (UTC)
 *           when the snapshot was taken.
 *         * `MasterUsername` &mdash; (`String`) Provides the master
 *           username for the DB Instance.
 *         * `EngineVersion` &mdash; (`String`) Specifies the version of
 *           the database engine.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for the restored DB Instance.
 *         * `SnapshotType` &mdash; (`String`) Provides the type of the DB
 *           Snapshot.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteDBSubnetGroup(params, callback)
 *   Calls the DeleteDBSubnetGroup API operation.
 *   @param params [Object]
 *     * `DBSubnetGroupName` &mdash; **required** &mdash; (`String`) The
 *       name of the database subnet group to delete. You cannot delete
 *       the default subnet group. Constraints: Must be 1 to 255
 *       alphanumeric characters First character must be a letter Cannot
 *       end with a hyphen or contain two consecutive hyphens
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
 * @!method deleteOptionGroup(params, callback)
 *   Calls the DeleteOptionGroup API operation.
 *   @param params [Object]
 *     * `OptionGroupName` &mdash; **required** &mdash; (`String`) The
 *       name of the option group to be deleted. You cannot delete
 *       default Option Groups.
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
 * @!method describeDBEngineVersions(params, callback)
 *   Calls the DescribeDBEngineVersions API operation.
 *   @param params [Object]
 *     * `Engine` &mdash; (`String`) The database engine to return.
 *     * `EngineVersion` &mdash; (`String`) The database engine version
 *       to return. Example: 5.1.49
 *     * `DBParameterGroupFamily` &mdash; (`String`) The name of a
 *       specific DB Parameter Group family to return details for.
 *       Constraints: Must be 1 to 255 alphanumeric characters First
 *       character must be a letter Cannot end with a hyphen or contain
 *       two consecutive hyphens
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more than the MaxRecords value is
 *       available, a marker is included in the response so that the
 *       following results can be retrieved. Default: 100 Constraints:
 *       minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) The marker provided in the previous
 *       request. If this parameter is specified, the response includes
 *       records beyond the marker only, up to MaxRecords.
 *     * `DefaultOnly` &mdash; (`Boolean`) Indicates that only the
 *       default version of the specified engine or engine and major
 *       version combination is returned.
 *     * `ListSupportedCharacterSets` &mdash; (`Boolean`) If this
 *       parameter is specified, and if the requested engine supports the
 *       CharacterSetName parameter for CreateDBInstance, the response
 *       includes a list of supported character sets for each engine
 *       version.
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
 *       * `DBEngineVersions` &mdash; (`Array<Object>`) A list of
 *         DBEngineVersion elements.
 *         * `Engine` &mdash; (`String`) The name of the database engine.
 *         * `EngineVersion` &mdash; (`String`) The version number of the
 *           database engine.
 *         * `DBParameterGroupFamily` &mdash; (`String`) The name of the
 *           DBParameterGroupFamily for the database engine.
 *         * `DBEngineDescription` &mdash; (`String`) The description of
 *           the database engine.
 *         * `DBEngineVersionDescription` &mdash; (`String`) The
 *           description of the database engine version.
 *         * `SupportedCharacterSets` &mdash; (`Array<Object>`) A list of
 *           the character sets supported by this engine for the
 *           CharacterSetName parameter of the CreateDBInstance API.
 *           * `CharacterSetName` &mdash; (`String`) The name of the
 *             character set.
 *           * `CharacterSetDescription` &mdash; (`String`) The description
 *             of the character set.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDBInstances(params, callback)
 *   Calls the DescribeDBInstances API operation.
 *   @param params [Object]
 *     * `DBInstanceIdentifier` &mdash; (`String`) The user-supplied
 *       instance identifier. If this parameter is specified, information
 *       from only the specific DB Instance is returned. This parameter
 *       isn't case sensitive. Constraints: Must contain from 1 to 63
 *       alphanumeric characters or hyphens First character must be a
 *       letter Cannot end with a hyphen or contain two consecutive
 *       hyphens
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeDBInstances request. If this parameter is
 *       specified, the response includes only records beyond the marker,
 *       up to the value specified by MaxRecords .
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
 *       * `DBInstances` &mdash; (`Array<Object>`) A list of DBInstance
 *         instances.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Contains a
 *           user-supplied database identifier. This is the unique key that
 *           identifies a DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) Contains the name of the
 *           compute and memory capacity class of the DB Instance.
 *         * `Engine` &mdash; (`String`) Provides the name of the database
 *           engine to be used for this DB Instance.
 *         * `DBInstanceStatus` &mdash; (`String`) Specifies the current
 *           state of this database.
 *         * `MasterUsername` &mdash; (`String`) Contains the master
 *           username for the DB Instance.
 *         * `DBName` &mdash; (`String`) The meaning of this parameter
 *           differs according to the database engine you use. MySQL
 *           Contains the name of the initial database of this instance
 *           that was provided at create time, if one was specified when
 *           the DB Instance was created. This same name is returned for
 *           the life of the DB Instance. Type: String Oracle Contains the
 *           Oracle System ID (SID) of the created DB Instance.
 *         * `Endpoint` &mdash; (`Object`) Specifies the connection
 *           endpoint.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the DB Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the
 *             database engine is listening on.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size specified in gigabytes.
 *         * `InstanceCreateTime` &mdash; (`Date`) Provides the date and
 *           time the DB Instance was created.
 *         * `PreferredBackupWindow` &mdash; (`String`) Specifies the daily
 *           time range during which automated backups are created if
 *           automated backups are enabled, as determined by the
 *           BackupRetentionPeriod.
 *         * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *           number of days for which automatic DB Snapshots are retained.
 *         * `DBSecurityGroups` &mdash; (`Array<Object>`) Provides List of
 *           DB Security Group elements containing only
 *           DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
 *           * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *             Security Group.
 *           * `Status` &mdash; (`String`) The status of the DB Security
 *             Group.
 *         * `DBParameterGroups` &mdash; (`Array<Object>`) Provides the
 *           list of DB Parameter Groups applied to this DB Instance.
 *           * `DBParameterGroupName` &mdash; (`String`) The name of the DP
 *             Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance is located in.
 *         * `DBSubnetGroup` &mdash; (`Object`) Provides the inforamtion of
 *           the subnet group associated with the DB instance, including
 *           the name, descrption and subnets in the subnet group.
 *           * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *             the DB Subnet Group.
 *           * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *             description of the DB Subnet Group.
 *           * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *             Subnet Group.
 *           * `SubnetGroupStatus` &mdash; (`String`) Provides the status
 *             of the DB Subnet Group.
 *           * `Subnets` &mdash; (`Array<Object>`) Contains a list of
 *             Subnets elements.
 *             * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *               identifier of the subnet.
 *             * `SubnetAvailabilityZone` &mdash; (`Object`)
 *               * `Name` &mdash; (`String`) The name of the availability
 *                 zone.
 *             * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *               the subnet.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the DB Instance are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by subelements.
 *           * `DBInstanceClass` &mdash; (`String`) Contains the new
 *             DBInstanceClass for the DB Instance that will be applied or
 *             is in progress.
 *           * `AllocatedStorage` &mdash; (`Integer`) Contains the new
 *             AllocatedStorage size for the DB Instance that will be
 *             applied or is in progress.
 *           * `MasterUserPassword` &mdash; (`String`) Contains the pending
 *             or in-progress change of the master credentials for the DB
 *             Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the pending port for
 *             the DB Instance.
 *           * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *             pending number of days for which automated backups are
 *             retained.
 *           * `MultiAZ` &mdash; (`Boolean`) Indicates that the Single-AZ
 *             DB Instance is to change to a Multi-AZ deployment.
 *           * `EngineVersion` &mdash; (`String`) Indicates the database
 *             engine version.
 *         * `LatestRestorableTime` &mdash; (`Date`) Specifies the latest
 *           time to which a database can be restored with point-in-time
 *           restore.
 *         * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is
 *           a Multi-AZ deployment.
 *         * `EngineVersion` &mdash; (`String`) Indicates the database
 *           engine version.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `ReadReplicaSourceDBInstanceIdentifier` &mdash; (`String`)
 *           Contains the identifier of the source DB Instance if this DB
 *           Instance is a Read Replica.
 *         * `ReadReplicaDBInstanceIdentifiers` &mdash; (`Array<String>`)
 *           Contains one or more identifiers of the Read Replicas
 *           associated with this DB Instance.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for this DB Instance.
 *         * `OptionGroupMembership` &mdash; (`Object`) Specifies the name
 *           and status of the option group that this instance belongs to.
 *           * `OptionGroupName` &mdash; (`String`) The name of the option
 *             group that the instance belongs to.
 *           * `Status` &mdash; (`String`) The status of the DB Instance's
 *             option group membership (e.g. in-sync, pending,
 *             pending-maintenance, applying).
 *         * `CharacterSetName` &mdash; (`String`) If present, specifies
 *           the name of the character set that this instance is associated
 *           with.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDBParameterGroups(params, callback)
 *   Calls the DescribeDBParameterGroups API operation.
 *   @param params [Object]
 *     * `DBParameterGroupName` &mdash; (`String`) The name of a specific
 *       DB Parameter Group to return details for. Constraints: Must be 1
 *       to 255 alphanumeric characters First character must be a letter
 *       Cannot end with a hyphen or contain two consecutive hyphens
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeDBParameterGroups request. If this parameter is
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
 *       * `DBParameterGroups` &mdash; (`Array<Object>`) A list of
 *         DBParameterGroup instances.
 *         * `DBParameterGroupName` &mdash; (`String`) Provides the name of
 *           the DB Parameter Group.
 *         * `DBParameterGroupFamily` &mdash; (`String`) Provides the name
 *           of the DB Parameter Group Family that this DB Parameter Group
 *           is compatible with.
 *         * `Description` &mdash; (`String`) Provides the
 *           customer-specified description for this DB Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDBParameters(params, callback)
 *   Calls the DescribeDBParameters API operation.
 *   @param params [Object]
 *     * `DBParameterGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of a specific DB Parameter Group to return details for.
 *       Constraints: Must be 1 to 255 alphanumeric characters First
 *       character must be a letter Cannot end with a hyphen or contain
 *       two consecutive hyphens
 *     * `Source` &mdash; (`String`) The parameter types to return.
 *       Default: All parameter types returned Valid Values: user |
 *       system | engine-default
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeDBParameters request. If this parameter is
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
 *         * `ApplyType` &mdash; (`String`) Specifies the engine specific
 *           parameters type.
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
 *         * `ApplyMethod` &mdash; (`String`) Indicates when to apply
 *           parameter updates.
 *       * `Marker` &mdash; (`String`) The marker obtained from a previous
 *         operation response.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDBSecurityGroups(params, callback)
 *   Calls the DescribeDBSecurityGroups API operation.
 *   @param params [Object]
 *     * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *       Security Group to return details for.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeDBSecurityGroups request. If this parameter is
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
 *       * `DBSecurityGroups` &mdash; (`Array<Object>`) A list of
 *         DBSecurityGroup instances.
 *         * `OwnerId` &mdash; (`String`) Provides the AWS ID of the owner
 *           of a specific DB Security Group.
 *         * `DBSecurityGroupName` &mdash; (`String`) Specifies the name of
 *           the DB Security Group.
 *         * `DBSecurityGroupDescription` &mdash; (`String`) Provides the
 *           description of the DB Security Group.
 *         * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *           Security Group.
 *         * `EC2SecurityGroups` &mdash; (`Array<Object>`) Contains a list
 *           of EC2SecurityGroup elements.
 *           * `Status` &mdash; (`String`) Provides the status of the EC2
 *             security group.
 *           * `EC2SecurityGroupName` &mdash; (`String`) Specifies the name
 *             of the EC2 Security Group.
 *           * `EC2SecurityGroupId` &mdash; (`String`) Specifies the id of
 *             the EC2 Security Group.
 *           * `EC2SecurityGroupOwnerId` &mdash; (`String`) Specifies the
 *             AWS ID of the owner of the EC2 security group specified in
 *             the EC2SecurityGroupName field.
 *         * `IPRanges` &mdash; (`Array<Object>`) Contains a list of
 *           IPRange elements.
 *           * `Status` &mdash; (`String`) Specifies the status of the IP
 *             range.
 *           * `CIDRIP` &mdash; (`String`) Specifies the IP range.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDBSnapshots(params, callback)
 *   Calls the DescribeDBSnapshots API operation.
 *   @param params [Object]
 *     * `DBInstanceIdentifier` &mdash; (`String`) A DB Instance
 *       Identifier to retrieve the list of DB Snapshots for. Cannot be
 *       used in conjunction with DBSnapshotIdentifier. This parameter
 *       isn't case sensitive. Constraints: Must contain from 1 to 63
 *       alphanumeric characters or hyphens First character must be a
 *       letter Cannot end with a hyphen or contain two consecutive
 *       hyphens
 *     * `DBSnapshotIdentifier` &mdash; (`String`) A specific DB Snapshot
 *       Identifier to describe. Cannot be used in conjunction with
 *       DBInstanceIdentifier. This value is stored as a lowercase
 *       string. Constraints: Must be 1 to 255 alphanumeric characters
 *       First character must be a letter Cannot end with a hyphen or
 *       contain two consecutive hyphens If this is the identifier of an
 *       automated snapshot, the SnapshotType parameter must also be
 *       specified.
 *     * `SnapshotType` &mdash; (`String`) An optional snapshot type for
 *       which snapshots will be returned. If not specified, the returned
 *       results will include snapshots of all types.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeDBSnapshots request. If this parameter is
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
 *       * `DBSnapshots` &mdash; (`Array<Object>`) A list of DBSnapshot
 *         instances.
 *         * `DBSnapshotIdentifier` &mdash; (`String`) Specifies the
 *           identifier for the DB Snapshot.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Specifies the the
 *           DBInstanceIdentifier of the DB Instance this DB Snapshot was
 *           created from.
 *         * `SnapshotCreateTime` &mdash; (`Date`) Provides the time (UTC)
 *           when the snapshot was taken.
 *         * `Engine` &mdash; (`String`) Specifies the name of the database
 *           engine.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size in gigabytes (GB).
 *         * `Status` &mdash; (`String`) Specifies the status of this DB
 *           Snapshot.
 *         * `Port` &mdash; (`Integer`) Specifies the port that the
 *           database engine was listening on at the time of the snapshot.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance was located in at the
 *           time of the DB Snapshot.
 *         * `VpcId` &mdash; (`String`) Provides the Vpc Id associated with
 *           the DB Snapshot.
 *         * `InstanceCreateTime` &mdash; (`Date`) Specifies the time (UTC)
 *           when the snapshot was taken.
 *         * `MasterUsername` &mdash; (`String`) Provides the master
 *           username for the DB Instance.
 *         * `EngineVersion` &mdash; (`String`) Specifies the version of
 *           the database engine.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for the restored DB Instance.
 *         * `SnapshotType` &mdash; (`String`) Provides the type of the DB
 *           Snapshot.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDBSubnetGroups(params, callback)
 *   Calls the DescribeDBSubnetGroups API operation.
 *   @param params [Object]
 *     * `DBSubnetGroupName` &mdash; (`String`) The name of the DB Subnet
 *       Group to return details for.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeDBSubnetGroups request. If this parameter is
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
 *       * `DBSubnetGroups` &mdash; (`Array<Object>`) A list of
 *         DBSubnetGroup instances.
 *         * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *           the DB Subnet Group.
 *         * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *           description of the DB Subnet Group.
 *         * `VpcId` &mdash; (`String`) Provides the VpcId of the DB Subnet
 *           Group.
 *         * `SubnetGroupStatus` &mdash; (`String`) Provides the status of
 *           the DB Subnet Group.
 *         * `Subnets` &mdash; (`Array<Object>`) Contains a list of Subnets
 *           elements.
 *           * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *             identifier of the subnet.
 *           * `SubnetAvailabilityZone` &mdash; (`Object`)
 *             * `Name` &mdash; (`String`) The name of the availability
 *               zone.
 *           * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *             the subnet.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEngineDefaultParameters(params, callback)
 *   Calls the DescribeEngineDefaultParameters API operation.
 *   @param params [Object]
 *     * `DBParameterGroupFamily` &mdash; **required** &mdash; (`String`)
 *       The name of the DB Parameter Group Family.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeEngineDefaultParameters request. If this
 *       parameter is specified, the response includes only records
 *       beyond the marker, up to the value specified by MaxRecords.
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
 *       * `EngineDefaults` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the DescribeEngineDefaultParameters
 *         action.
 *         * `DBParameterGroupFamily` &mdash; (`String`) Specifies the name
 *           of the DB Parameter Group Family which the engine default
 *           parameters apply to.
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
 *           * `ApplyType` &mdash; (`String`) Specifies the engine specific
 *             parameters type.
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
 *           * `ApplyMethod` &mdash; (`String`) Indicates when to apply
 *             parameter updates.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEvents(params, callback)
 *   Calls the DescribeEvents API operation.
 *   @param params [Object]
 *     * `SourceIdentifier` &mdash; (`String`) The identifier of the
 *       event source for which events will be returned. If not
 *       specified, then all sources are included in the response.
 *       Constraints: If SourceIdentifier is supplied, SourceType must
 *       also be provided. If the source type is DBInstance, then a
 *       DBInstanceIdentifier must be supplied. If the source type is
 *       DBSecurityGroup, a DBSecurityGroupName must be supplied. If the
 *       source type is DBParameterGroup, a DBParameterGroupName must be
 *       supplied. If the source type is DBSnapshot, a
 *       DBSnapshotIdentifier must be supplied. Cannot end with a hyphen
 *       or contain two consecutive hyphens.
 *     * `SourceType` &mdash; (`String`) The event source to retrieve
 *       events for. If no value is specified, all events are returned.
 *     * `StartTime` &mdash; (`Date`) The beginning of the time interval
 *       to retrieve events for, specified in ISO 8601 format. For more
 *       information about ISO 8601, go to the ISO8601 Wikipedia page.
 *       Example: 2009-07-08T18:00Z
 *     * `EndTime` &mdash; (`Date`) The end of the time interval for
 *       which to retrieve events, specified in ISO 8601 format. For more
 *       information about ISO 8601, go to the ISO8601 Wikipedia page.
 *       Example: 2009-07-08T18:00Z
 *     * `Duration` &mdash; (`Integer`) The number of minutes to retrieve
 *       events for. Default: 60
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeEvents request. If this parameter is specified,
 *       the response includes only records beyond the marker, up to the
 *       value specified by MaxRecords.
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
 * @!method describeOptionGroupOptions(params, callback)
 *   Calls the DescribeOptionGroupOptions API operation.
 *   @param params [Object]
 *     * `EngineName` &mdash; **required** &mdash; (`String`) A required
 *       parameter. Options available for the given Engine name will be
 *       described.
 *     * `MajorEngineVersion` &mdash; (`String`) If specified, filters
 *       the results to include only options for the specified major
 *       engine version.
 *     * `MaxRecords` &mdash; (`Integer`)
 *     * `Marker` &mdash; (`String`)
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
 *       * `OptionGroupOptions` &mdash; (`Array<Object>`)
 *         * `Name` &mdash; (`String`) The name of the option.
 *         * `Description` &mdash; (`String`) The description of the
 *           option.
 *         * `EngineName` &mdash; (`String`) Engine name that this option
 *           can be applied to.
 *         * `MajorEngineVersion` &mdash; (`String`) Indicates the major
 *           engine version that the option is available for.
 *         * `MinimumRequiredMinorEngineVersion` &mdash; (`String`) The
 *           minimum required engine version for the option to be applied.
 *         * `PortRequired` &mdash; (`Boolean`) Specifies whether the
 *           option requires a port.
 *         * `DefaultPort` &mdash; (`Integer`) If the option requires a
 *           port, specifies the default port for the option.
 *         * `OptionsDependedOn` &mdash; (`Array<String>`) List of all
 *           options that are prerequisites for this option.
 *       * `Marker` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeOptionGroups(params, callback)
 *   Calls the DescribeOptionGroups API operation.
 *   @param params [Object]
 *     * `OptionGroupName` &mdash; (`String`) The name of the option
 *       group to describe. Cannot be supplied together with EngineName
 *       or MajorEngineVersion.
 *     * `Marker` &mdash; (`String`)
 *     * `MaxRecords` &mdash; (`Integer`)
 *     * `EngineName` &mdash; (`String`) Filters the list of option
 *       groups to only include groups associated with a specific
 *       database engine.
 *     * `MajorEngineVersion` &mdash; (`String`) Filters the list of
 *       option groups to only include groups associated with a specific
 *       database engine version. If specified, then EngineName must also
 *       be specified.
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
 *       * `OptionGroupsList` &mdash; (`Array<Object>`) List of option
 *         groups.
 *         * `OptionGroupName` &mdash; (`String`) Specifies the name of the
 *           option group.
 *         * `OptionGroupDescription` &mdash; (`String`)
 *         * `EngineName` &mdash; (`String`) Engine name that this option
 *           group can be applied to.
 *         * `MajorEngineVersion` &mdash; (`String`) Indicates the major
 *           engine version associated with this option group.
 *         * `Options` &mdash; (`Array<Object>`)
 *           * `OptionName` &mdash; (`String`) The name of the option.
 *           * `OptionDescription` &mdash; (`String`) The description of
 *             the option.
 *           * `Port` &mdash; (`Integer`) If required, the port configured
 *             for this option to use.
 *           * `DBSecurityGroupMemberships` &mdash; (`Array<Object>`)
 *             * `DBSecurityGroupName` &mdash; (`String`) The name of the
 *               DB Security Group.
 *             * `Status` &mdash; (`String`) The status of the DB Security
 *               Group.
 *       * `Marker` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeOrderableDBInstanceOptions(params, callback)
 *   Calls the DescribeOrderableDBInstanceOptions API operation.
 *   @param params [Object]
 *     * `Engine` &mdash; **required** &mdash; (`String`) The name of the
 *       engine to retrieve DB Instance options for.
 *     * `EngineVersion` &mdash; (`String`) The engine version filter
 *       value. Specify this parameter to show only the available
 *       offerings matching the specified engine version.
 *     * `DBInstanceClass` &mdash; (`String`) The DB Instance class
 *       filter value. Specify this parameter to show only the available
 *       offerings matching the specified DB Instance class.
 *     * `LicenseModel` &mdash; (`String`) The license model filter
 *       value. Specify this parameter to show only the available
 *       offerings matching the specified license model.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of records
 *       to include in the response. If more records exist than the
 *       specified MaxRecords value, a marker is included in the response
 *       so that the remaining results may be retrieved. Default: 100
 *       Constraints: minimum 20, maximum 100
 *     * `Marker` &mdash; (`String`) An optional marker provided in the
 *       previous DescribeOrderableDBInstanceOptions request. If this
 *       parameter is specified, the response includes only records
 *       beyond the marker, up to the value specified by MaxRecords .
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
 *       * `OrderableDBInstanceOptions` &mdash; (`Array<Object>`) An
 *         OrderableDBInstanceOption structure containing information about
 *         orderable options for the DB Instance.
 *         * `Engine` &mdash; (`String`) The engine type of the orderable
 *           DB Instance.
 *         * `EngineVersion` &mdash; (`String`) The engine version of the
 *           orderable DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) The DB Instance Class for
 *           the orderable DB Instance
 *         * `LicenseModel` &mdash; (`String`) The license model for the
 *           orderable DB Instance.
 *         * `AvailabilityZones` &mdash; (`Array<Object>`) A list of
 *           availability zones for the orderable DB Instance.
 *           * `Name` &mdash; (`String`) The name of the availability zone.
 *         * `MultiAZCapable` &mdash; (`Boolean`) Indicates whether this
 *           orderable DB Instance is multi-AZ capable.
 *         * `ReadReplicaCapable` &mdash; (`Boolean`) Indicates whether
 *           this orderable DB Instance can have a read replica.
 *         * `VpcCapable` &mdash; (`Boolean`) Indicates whether this
 *           orderable DB Instance is VPC capable.
 *         * `VpcMultiAZCapable` &mdash; (`Boolean`) Indicates whether this
 *           orderable DB Instance is VPC multi-AZ capable.
 *         * `VpcReadReplicaCapable` &mdash; (`Boolean`) Indicates whether
 *           this orderable DB Instance can have a VPC read replica.
 *       * `Marker` &mdash; (`String`) A marker that can be used to
 *         retrieve paginated results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedDBInstances(params, callback)
 *   Calls the DescribeReservedDBInstances API operation.
 *   @param params [Object]
 *     * `ReservedDBInstanceId` &mdash; (`String`) The reserved DB
 *       Instance identifier filter value. Specify this parameter to show
 *       only the reservation that matches the specified reservation ID.
 *     * `ReservedDBInstancesOfferingId` &mdash; (`String`) The offering
 *       identifier filter value. Specify this parameter to show only
 *       purchased reservations matching the specified offering
 *       identifier.
 *     * `DBInstanceClass` &mdash; (`String`) The DB Instance class
 *       filter value. Specify this parameter to show only those
 *       reservations matching the specified DB Instances class.
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
 *     * `MultiAZ` &mdash; (`Boolean`) The Multi-AZ filter value. Specify
 *       this parameter to show only those reservations matching the
 *       specified Multi-AZ parameter.
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
 *       * `ReservedDBInstances` &mdash; (`Array<Object>`) A list of of
 *         reserved DB Instances.
 *         * `ReservedDBInstanceId` &mdash; (`String`) The unique
 *           identifier for the reservation.
 *         * `ReservedDBInstancesOfferingId` &mdash; (`String`) The
 *           offering identifier.
 *         * `DBInstanceClass` &mdash; (`String`) The DB instance class for
 *           the reserved DB Instance.
 *         * `StartTime` &mdash; (`Date`) The time the reservation started.
 *         * `Duration` &mdash; (`Integer`) The duration of the reservation
 *           in seconds.
 *         * `FixedPrice` &mdash; (`Float`) The fixed price charged for
 *           this reserved DB Instance.
 *         * `UsagePrice` &mdash; (`Float`) The hourly price charged for
 *           this reserved DB Instance.
 *         * `CurrencyCode` &mdash; (`String`) The currency code for the
 *           reserved DB Instance.
 *         * `DBInstanceCount` &mdash; (`Integer`) The number of reserved
 *           DB Instances.
 *         * `ProductDescription` &mdash; (`String`) The description of the
 *           reserved DB Instance.
 *         * `OfferingType` &mdash; (`String`) The offering type of this
 *           reserved DB Instance.
 *         * `MultiAZ` &mdash; (`Boolean`) Indicates if the reservation
 *           applies to Multi-AZ deployments.
 *         * `State` &mdash; (`String`) The state of the reserved DB
 *           Instance.
 *         * `RecurringCharges` &mdash; (`Array<Object>`) The recurring
 *           price charged to run this reserved DB Instance.
 *           * `RecurringChargeAmount` &mdash; (`Float`) The amount of the
 *             recurring charge.
 *           * `RecurringChargeFrequency` &mdash; (`String`) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeReservedDBInstancesOfferings(params, callback)
 *   Calls the DescribeReservedDBInstancesOfferings API operation.
 *   @param params [Object]
 *     * `ReservedDBInstancesOfferingId` &mdash; (`String`) The offering
 *       identifier filter value. Specify this parameter to show only the
 *       available offering that matches the specified reservation
 *       identifier. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706
 *     * `DBInstanceClass` &mdash; (`String`) The DB Instance class
 *       filter value. Specify this parameter to show only the available
 *       offerings matching the specified DB Instance class.
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
 *     * `MultiAZ` &mdash; (`Boolean`) The Multi-AZ filter value. Specify
 *       this parameter to show only the available offerings matching the
 *       specified Multi-AZ parameter.
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
 *       * `ReservedDBInstancesOfferings` &mdash; (`Array<Object>`) A list
 *         of reserved DB Instance offerings.
 *         * `ReservedDBInstancesOfferingId` &mdash; (`String`) The
 *           offering identifier.
 *         * `DBInstanceClass` &mdash; (`String`) The DB instance class for
 *           the reserved DB Instance.
 *         * `Duration` &mdash; (`Integer`) The duration of the offering in
 *           seconds.
 *         * `FixedPrice` &mdash; (`Float`) The fixed price charged for
 *           this offering.
 *         * `UsagePrice` &mdash; (`Float`) The hourly price charged for
 *           this offering.
 *         * `CurrencyCode` &mdash; (`String`) The currency code for the
 *           reserved DB Instance offering.
 *         * `ProductDescription` &mdash; (`String`) The database engine
 *           used by the offering.
 *         * `OfferingType` &mdash; (`String`) The offering type.
 *         * `MultiAZ` &mdash; (`Boolean`) Indicates if the offering
 *           applies to Multi-AZ deployments.
 *         * `RecurringCharges` &mdash; (`Array<Object>`) The recurring
 *           price charged to run this reserved DB Instance.
 *           * `RecurringChargeAmount` &mdash; (`Float`) The amount of the
 *             recurring charge.
 *           * `RecurringChargeFrequency` &mdash; (`String`) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyDBInstance(params, callback)
 *   Calls the ModifyDBInstance API operation.
 *   @param params [Object]
 *     * `DBInstanceIdentifier` &mdash; **required** &mdash; (`String`)
 *       The DB Instance identifier. This value is stored as a lowercase
 *       string. For a SQL Server DB Instance, this value cannot be
 *       changed. Constraints: Must be the identifier for an existing DB
 *       Instance Must contain from 1 to 63 alphanumeric characters or
 *       hyphens First character must be a letter Cannot end with a
 *       hyphen or contain two consecutive hyphens Example: mydbinstance
 *     * `AllocatedStorage` &mdash; (`Integer`) The new storage capacity
 *       of the RDS instance. This change does not result in an outage
 *       and is applied during the next maintenance window unless the
 *       ApplyImmediately parameter is specified as true for this
 *       request. MySQL Default: Uses existing setting Valid Values:
 *       5-1024 Constraints: Value supplied must be at least 10% greater
 *       than the current value. Values that are not at least 10% greater
 *       than the existing value are rounded up so that they are 10%
 *       greater than the current value. Type: Integer Oracle Default:
 *       Uses existing setting Valid Values: 10-1024 Constraints: Value
 *       supplied must be at least 10% greater than the current value.
 *       Values that are not at least 10% greater than the existing value
 *       are rounded up so that they are 10% greater than the current
 *       value. SQL Server Cannot be modified.
 *     * `DBInstanceClass` &mdash; (`String`) The new compute and memory
 *       capacity of the DB Instance. To determine the instance classes
 *       that are available for a particular DB engine, use the
 *       DescribeOrderableDBInstanceOptions action. Passing a value for
 *       this parameter causes an outage during the change and is applied
 *       during the next maintenance window, unless the ApplyImmediately
 *       parameter is specified as true for this request. Default: Uses
 *       existing setting Valid Values: db.t1.micro | db.m1.small |
 *       db.m1.large | db.m1.xlarge | db.m2.xlarge | db.m2.2xlarge |
 *       db.m2.4xlarge Amazon RDS does not support db.t1.micro instances
 *       in a virtual private cloud (VPC).
 *     * `DBSecurityGroups` &mdash; (`Array<String>`) A list of DB
 *       Security Groups to authorize on this DB Instance. This change is
 *       asynchronously applied as soon as possible. Constraints: Must be
 *       1 to 255 alphanumeric characters First character must be a
 *       letter Cannot end with a hyphen or contain two consecutive
 *       hyphens
 *     * `ApplyImmediately` &mdash; (`Boolean`) Specifies whether or not
 *       the modifications in this request and any pending modifications
 *       are asynchronously applied as soon as possible, regardless of
 *       the PreferredMaintenanceWindow setting for the DB Instance. If
 *       this parameter is passed as false, changes to the DB Instance
 *       are applied on the next call to RebootDBInstance, the next
 *       maintenance reboot, or the next failure reboot, whichever occurs
 *       first. Default: false
 *     * `MasterUserPassword` &mdash; (`String`) The new password for the
 *       DB Instance master user. This change is asynchronously applied
 *       as soon as possible. Between the time of the request and the
 *       completion of the request, the MasterUserPassword element exists
 *       in the PendingModifiedValues element of the operation response.
 *       Default: Uses existing setting Constraints: Must be 8 to 41
 *       alphanumeric characters (MySQL), 8 to 30 alphanumeric characters
 *       (Oracle), or 8 to 128 alphanumeric characters (SQL Server).
 *       Amazon RDS API actions never return the password, so this action
 *       provides a way to regain access to a master instance user if the
 *       password is lost.
 *     * `DBParameterGroupName` &mdash; (`String`) The name of the DB
 *       Parameter Group to apply to this DB Instance. This change is
 *       asynchronously applied as soon as possible for parameters when
 *       the ApplyImmediately parameter is specified as true for this
 *       request. Default: Uses existing setting Constraints: The DB
 *       Parameter Group must be in the same DB Parameter Group family as
 *       this DB Instance.
 *     * `BackupRetentionPeriod` &mdash; (`Integer`) The number of days
 *       to retain automated backups. Setting this parameter to a
 *       positive number enables backups. Setting this parameter to 0
 *       disables automated backups. Default: Uses existing setting
 *       Constraints: Must be a value from 0 to 8 Cannot be set to 0 if
 *       the DB Instance is a master instance with read replicas or of
 *       the DB Instance is a read replica
 *     * `PreferredBackupWindow` &mdash; (`String`) The daily time range
 *       during which automated backups are created if automated backups
 *       are enabled, as determined by the BackupRetentionPeriod.
 *       Constraints: Must be in the format hh24:mi-hh24:mi Times should
 *       be Universal Time Coordinated (UTC) Must not conflict with the
 *       preferred maintenance window Must be at least 30 minutes
 *     * `PreferredMaintenanceWindow` &mdash; (`String`) The weekly time
 *       range (in UTC) during which system maintenance can occur, which
 *       may result in an outage. This change is made immediately. If
 *       moving this window to the current time, there must be at least
 *       120 minutes between the current time and end of the window to
 *       ensure pending changes are applied. Default: Uses existing
 *       setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue |
 *       Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30
 *       minutes
 *     * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is a
 *       Multi-AZ deployment. Constraints: Cannot be specified if the DB
 *       Instance is a read replica.
 *     * `EngineVersion` &mdash; (`String`) The version number of the
 *       database engine to upgrade to. For major version upgrades, if a
 *       nondefault DB Parameter Group is currently in use, a new DB
 *       Parameter Group in the DB Parameter Group Family for the new
 *       engine version must be specified. The new DB Parameter Group can
 *       be the default for that DB Parameter Group Family. Example:
 *       5.1.42
 *     * `AllowMajorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *       major version upgrades are allowed. Constraints: This parameter
 *       must be set to true when specifying a value for the
 *       EngineVersion parameter that is a different major version than
 *       the DB Instance's current version.
 *     * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *       minor version upgrades will be applied automatically to the DB
 *       Instance during the maintenance window.
 *     * `OptionGroupName` &mdash; (`String`) Indicates that the DB
 *       Instance should be associated with the specified option group.
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
 *       * `DBInstance` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBInstance
 *         DeleteDBInstance ModifyDBInstance This data type is used as a
 *         response element in the DescribeDBInstances action.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Contains a
 *           user-supplied database identifier. This is the unique key that
 *           identifies a DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) Contains the name of the
 *           compute and memory capacity class of the DB Instance.
 *         * `Engine` &mdash; (`String`) Provides the name of the database
 *           engine to be used for this DB Instance.
 *         * `DBInstanceStatus` &mdash; (`String`) Specifies the current
 *           state of this database.
 *         * `MasterUsername` &mdash; (`String`) Contains the master
 *           username for the DB Instance.
 *         * `DBName` &mdash; (`String`) The meaning of this parameter
 *           differs according to the database engine you use. MySQL
 *           Contains the name of the initial database of this instance
 *           that was provided at create time, if one was specified when
 *           the DB Instance was created. This same name is returned for
 *           the life of the DB Instance. Type: String Oracle Contains the
 *           Oracle System ID (SID) of the created DB Instance.
 *         * `Endpoint` &mdash; (`Object`) Specifies the connection
 *           endpoint.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the DB Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the
 *             database engine is listening on.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size specified in gigabytes.
 *         * `InstanceCreateTime` &mdash; (`Date`) Provides the date and
 *           time the DB Instance was created.
 *         * `PreferredBackupWindow` &mdash; (`String`) Specifies the daily
 *           time range during which automated backups are created if
 *           automated backups are enabled, as determined by the
 *           BackupRetentionPeriod.
 *         * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *           number of days for which automatic DB Snapshots are retained.
 *         * `DBSecurityGroups` &mdash; (`Array<Object>`) Provides List of
 *           DB Security Group elements containing only
 *           DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
 *           * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *             Security Group.
 *           * `Status` &mdash; (`String`) The status of the DB Security
 *             Group.
 *         * `DBParameterGroups` &mdash; (`Array<Object>`) Provides the
 *           list of DB Parameter Groups applied to this DB Instance.
 *           * `DBParameterGroupName` &mdash; (`String`) The name of the DP
 *             Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance is located in.
 *         * `DBSubnetGroup` &mdash; (`Object`) Provides the inforamtion of
 *           the subnet group associated with the DB instance, including
 *           the name, descrption and subnets in the subnet group.
 *           * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *             the DB Subnet Group.
 *           * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *             description of the DB Subnet Group.
 *           * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *             Subnet Group.
 *           * `SubnetGroupStatus` &mdash; (`String`) Provides the status
 *             of the DB Subnet Group.
 *           * `Subnets` &mdash; (`Array<Object>`) Contains a list of
 *             Subnets elements.
 *             * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *               identifier of the subnet.
 *             * `SubnetAvailabilityZone` &mdash; (`Object`)
 *               * `Name` &mdash; (`String`) The name of the availability
 *                 zone.
 *             * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *               the subnet.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the DB Instance are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by subelements.
 *           * `DBInstanceClass` &mdash; (`String`) Contains the new
 *             DBInstanceClass for the DB Instance that will be applied or
 *             is in progress.
 *           * `AllocatedStorage` &mdash; (`Integer`) Contains the new
 *             AllocatedStorage size for the DB Instance that will be
 *             applied or is in progress.
 *           * `MasterUserPassword` &mdash; (`String`) Contains the pending
 *             or in-progress change of the master credentials for the DB
 *             Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the pending port for
 *             the DB Instance.
 *           * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *             pending number of days for which automated backups are
 *             retained.
 *           * `MultiAZ` &mdash; (`Boolean`) Indicates that the Single-AZ
 *             DB Instance is to change to a Multi-AZ deployment.
 *           * `EngineVersion` &mdash; (`String`) Indicates the database
 *             engine version.
 *         * `LatestRestorableTime` &mdash; (`Date`) Specifies the latest
 *           time to which a database can be restored with point-in-time
 *           restore.
 *         * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is
 *           a Multi-AZ deployment.
 *         * `EngineVersion` &mdash; (`String`) Indicates the database
 *           engine version.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `ReadReplicaSourceDBInstanceIdentifier` &mdash; (`String`)
 *           Contains the identifier of the source DB Instance if this DB
 *           Instance is a Read Replica.
 *         * `ReadReplicaDBInstanceIdentifiers` &mdash; (`Array<String>`)
 *           Contains one or more identifiers of the Read Replicas
 *           associated with this DB Instance.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for this DB Instance.
 *         * `OptionGroupMembership` &mdash; (`Object`) Specifies the name
 *           and status of the option group that this instance belongs to.
 *           * `OptionGroupName` &mdash; (`String`) The name of the option
 *             group that the instance belongs to.
 *           * `Status` &mdash; (`String`) The status of the DB Instance's
 *             option group membership (e.g. in-sync, pending,
 *             pending-maintenance, applying).
 *         * `CharacterSetName` &mdash; (`String`) If present, specifies
 *           the name of the character set that this instance is associated
 *           with.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyDBParameterGroup(params, callback)
 *   Calls the ModifyDBParameterGroup API operation.
 *   @param params [Object]
 *     * `DBParameterGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the DB Parameter Group. Constraints: Must be the
 *       name of an existing DB Parameter Group Must be 1 to 255
 *       alphanumeric characters First character must be a letter Cannot
 *       end with a hyphen or contain two consecutive hyphens
 *     * `Parameters` &mdash; **required** &mdash; (`Array<Object>`) An
 *       array of parameter names, values, and the apply method for the
 *       parameter update. At least one parameter name, value, and apply
 *       method must be supplied; subsequent arguments are optional. A
 *       maximum of 20 parameters may be modified in a single request.
 *       Valid Values (for the application method): immediate |
 *       pending-reboot You can use the immediate value with dynamic
 *       parameters only. You can use the pending-reboot value for both
 *       dynamic and static parameters, and changes are applied when DB
 *       Instance reboots.
 *       * `ParameterName` &mdash; (`String`) Specifies the name of the
 *         parameter.
 *       * `ParameterValue` &mdash; (`String`) Specifies the value of the
 *         parameter.
 *       * `Description` &mdash; (`String`) Provides a description of the
 *         parameter.
 *       * `Source` &mdash; (`String`) Indicates the source of the
 *         parameter value.
 *       * `ApplyType` &mdash; (`String`) Specifies the engine specific
 *         parameters type.
 *       * `DataType` &mdash; (`String`) Specifies the valid data type
 *         for the parameter.
 *       * `AllowedValues` &mdash; (`String`) Specifies the valid range
 *         of values for the parameter.
 *       * `IsModifiable` &mdash; (`Boolean`) Indicates whether (true) or
 *         not (false) the parameter can be modified. Some parameters
 *         have security or operational implications that prevent them
 *         from being changed.
 *       * `MinimumEngineVersion` &mdash; (`String`) The earliest engine
 *         version to which the parameter can apply.
 *       * `ApplyMethod` &mdash; (`String`) Indicates when to apply
 *         parameter updates.
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
 *       * `DBParameterGroupName` &mdash; (`String`) The name of the DB
 *         Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyDBSubnetGroup(params, callback)
 *   Calls the ModifyDBSubnetGroup API operation.
 *   @param params [Object]
 *     * `DBSubnetGroupName` &mdash; **required** &mdash; (`String`) The
 *       name for the DB Subnet Group. This value is stored as a
 *       lowercase string. Constraints: Must contain no more than 255
 *       alphanumeric characters or hyphens. Must not be "Default".
 *       Example: mySubnetgroup
 *     * `DBSubnetGroupDescription` &mdash; (`String`) The description
 *       for the DB Subnet Group.
 *     * `SubnetIds` &mdash; **required** &mdash; (`Array<String>`) The
 *       EC2 Subnet IDs for the DB Subnet Group.
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
 *       * `DBSubnetGroup` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions:
 *         CreateDBSubnetGroup ModifyDBSubnetGroup DescribeDBSubnetGroups
 *         DeleteDBSubnetGroup This data type is used as a response element
 *         in the DescribeDBSubnetGroups action.
 *         * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *           the DB Subnet Group.
 *         * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *           description of the DB Subnet Group.
 *         * `VpcId` &mdash; (`String`) Provides the VpcId of the DB Subnet
 *           Group.
 *         * `SubnetGroupStatus` &mdash; (`String`) Provides the status of
 *           the DB Subnet Group.
 *         * `Subnets` &mdash; (`Array<Object>`) Contains a list of Subnets
 *           elements.
 *           * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *             identifier of the subnet.
 *           * `SubnetAvailabilityZone` &mdash; (`Object`)
 *             * `Name` &mdash; (`String`) The name of the availability
 *               zone.
 *           * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *             the subnet.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyOptionGroup(params, callback)
 *   Calls the ModifyOptionGroup API operation.
 *   @param params [Object]
 *     * `OptionGroupName` &mdash; **required** &mdash; (`String`) The
 *       name of the option group to be modified.
 *     * `OptionsToInclude` &mdash; (`Array<Object>`) Options in this
 *       list are added to the Option Group or, if already present, the
 *       specified configuration is used to update the existing
 *       configuration.
 *       * `OptionName` &mdash; **required** &mdash; (`String`)
 *       * `Port` &mdash; (`Integer`)
 *       * `DBSecurityGroupMemberships` &mdash; (`Array<String>`)
 *     * `OptionsToRemove` &mdash; (`Array<String>`) Options in this list
 *       are removed from the Option Group.
 *     * `ApplyImmediately` &mdash; (`Boolean`) Indicates whether the
 *       changes should be applied immediately, or during the next
 *       maintenance window for each instance associated with the Option
 *       Group.
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
 *       * `OptionGroup` &mdash; (`Object`)
 *         * `OptionGroupName` &mdash; (`String`) Specifies the name of the
 *           option group.
 *         * `OptionGroupDescription` &mdash; (`String`)
 *         * `EngineName` &mdash; (`String`) Engine name that this option
 *           group can be applied to.
 *         * `MajorEngineVersion` &mdash; (`String`) Indicates the major
 *           engine version associated with this option group.
 *         * `Options` &mdash; (`Array<Object>`)
 *           * `OptionName` &mdash; (`String`) The name of the option.
 *           * `OptionDescription` &mdash; (`String`) The description of
 *             the option.
 *           * `Port` &mdash; (`Integer`) If required, the port configured
 *             for this option to use.
 *           * `DBSecurityGroupMemberships` &mdash; (`Array<Object>`)
 *             * `DBSecurityGroupName` &mdash; (`String`) The name of the
 *               DB Security Group.
 *             * `Status` &mdash; (`String`) The status of the DB Security
 *               Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method purchaseReservedDBInstancesOffering(params, callback)
 *   Calls the PurchaseReservedDBInstancesOffering API operation.
 *   @param params [Object]
 *     * `ReservedDBInstancesOfferingId` &mdash; **required** &mdash;
 *       (`String`) The ID of the Reserved DB Instance offering to
 *       purchase. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706
 *     * `ReservedDBInstanceId` &mdash; (`String`) Customer-specified
 *       identifier to track this reservation. Example: myreservationID
 *     * `DBInstanceCount` &mdash; (`Integer`) The number of instances to
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
 *       * `ReservedDBInstance` &mdash; (`Object`) This data type is used
 *         as a response element in the DescribeReservedDBInstances and
 *         PurchaseReservedDBInstancesOffering actions.
 *         * `ReservedDBInstanceId` &mdash; (`String`) The unique
 *           identifier for the reservation.
 *         * `ReservedDBInstancesOfferingId` &mdash; (`String`) The
 *           offering identifier.
 *         * `DBInstanceClass` &mdash; (`String`) The DB instance class for
 *           the reserved DB Instance.
 *         * `StartTime` &mdash; (`Date`) The time the reservation started.
 *         * `Duration` &mdash; (`Integer`) The duration of the reservation
 *           in seconds.
 *         * `FixedPrice` &mdash; (`Float`) The fixed price charged for
 *           this reserved DB Instance.
 *         * `UsagePrice` &mdash; (`Float`) The hourly price charged for
 *           this reserved DB Instance.
 *         * `CurrencyCode` &mdash; (`String`) The currency code for the
 *           reserved DB Instance.
 *         * `DBInstanceCount` &mdash; (`Integer`) The number of reserved
 *           DB Instances.
 *         * `ProductDescription` &mdash; (`String`) The description of the
 *           reserved DB Instance.
 *         * `OfferingType` &mdash; (`String`) The offering type of this
 *           reserved DB Instance.
 *         * `MultiAZ` &mdash; (`Boolean`) Indicates if the reservation
 *           applies to Multi-AZ deployments.
 *         * `State` &mdash; (`String`) The state of the reserved DB
 *           Instance.
 *         * `RecurringCharges` &mdash; (`Array<Object>`) The recurring
 *           price charged to run this reserved DB Instance.
 *           * `RecurringChargeAmount` &mdash; (`Float`) The amount of the
 *             recurring charge.
 *           * `RecurringChargeFrequency` &mdash; (`String`) The frequency
 *             of the recurring charge.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootDBInstance(params, callback)
 *   Calls the RebootDBInstance API operation.
 *   @param params [Object]
 *     * `DBInstanceIdentifier` &mdash; **required** &mdash; (`String`)
 *       The DB Instance identifier. This parameter is stored as a
 *       lowercase string. Constraints: Must contain from 1 to 63
 *       alphanumeric characters or hyphens First character must be a
 *       letter Cannot end with a hyphen or contain two consecutive
 *       hyphens
 *     * `ForceFailover` &mdash; (`Boolean`) When true, the reboot will
 *       be conducted through a MultiAZ failover. Constraint: You cannot
 *       specify true if the instance is not configured for MultiAZ.
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
 *       * `DBInstance` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBInstance
 *         DeleteDBInstance ModifyDBInstance This data type is used as a
 *         response element in the DescribeDBInstances action.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Contains a
 *           user-supplied database identifier. This is the unique key that
 *           identifies a DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) Contains the name of the
 *           compute and memory capacity class of the DB Instance.
 *         * `Engine` &mdash; (`String`) Provides the name of the database
 *           engine to be used for this DB Instance.
 *         * `DBInstanceStatus` &mdash; (`String`) Specifies the current
 *           state of this database.
 *         * `MasterUsername` &mdash; (`String`) Contains the master
 *           username for the DB Instance.
 *         * `DBName` &mdash; (`String`) The meaning of this parameter
 *           differs according to the database engine you use. MySQL
 *           Contains the name of the initial database of this instance
 *           that was provided at create time, if one was specified when
 *           the DB Instance was created. This same name is returned for
 *           the life of the DB Instance. Type: String Oracle Contains the
 *           Oracle System ID (SID) of the created DB Instance.
 *         * `Endpoint` &mdash; (`Object`) Specifies the connection
 *           endpoint.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the DB Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the
 *             database engine is listening on.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size specified in gigabytes.
 *         * `InstanceCreateTime` &mdash; (`Date`) Provides the date and
 *           time the DB Instance was created.
 *         * `PreferredBackupWindow` &mdash; (`String`) Specifies the daily
 *           time range during which automated backups are created if
 *           automated backups are enabled, as determined by the
 *           BackupRetentionPeriod.
 *         * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *           number of days for which automatic DB Snapshots are retained.
 *         * `DBSecurityGroups` &mdash; (`Array<Object>`) Provides List of
 *           DB Security Group elements containing only
 *           DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
 *           * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *             Security Group.
 *           * `Status` &mdash; (`String`) The status of the DB Security
 *             Group.
 *         * `DBParameterGroups` &mdash; (`Array<Object>`) Provides the
 *           list of DB Parameter Groups applied to this DB Instance.
 *           * `DBParameterGroupName` &mdash; (`String`) The name of the DP
 *             Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance is located in.
 *         * `DBSubnetGroup` &mdash; (`Object`) Provides the inforamtion of
 *           the subnet group associated with the DB instance, including
 *           the name, descrption and subnets in the subnet group.
 *           * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *             the DB Subnet Group.
 *           * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *             description of the DB Subnet Group.
 *           * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *             Subnet Group.
 *           * `SubnetGroupStatus` &mdash; (`String`) Provides the status
 *             of the DB Subnet Group.
 *           * `Subnets` &mdash; (`Array<Object>`) Contains a list of
 *             Subnets elements.
 *             * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *               identifier of the subnet.
 *             * `SubnetAvailabilityZone` &mdash; (`Object`)
 *               * `Name` &mdash; (`String`) The name of the availability
 *                 zone.
 *             * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *               the subnet.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the DB Instance are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by subelements.
 *           * `DBInstanceClass` &mdash; (`String`) Contains the new
 *             DBInstanceClass for the DB Instance that will be applied or
 *             is in progress.
 *           * `AllocatedStorage` &mdash; (`Integer`) Contains the new
 *             AllocatedStorage size for the DB Instance that will be
 *             applied or is in progress.
 *           * `MasterUserPassword` &mdash; (`String`) Contains the pending
 *             or in-progress change of the master credentials for the DB
 *             Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the pending port for
 *             the DB Instance.
 *           * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *             pending number of days for which automated backups are
 *             retained.
 *           * `MultiAZ` &mdash; (`Boolean`) Indicates that the Single-AZ
 *             DB Instance is to change to a Multi-AZ deployment.
 *           * `EngineVersion` &mdash; (`String`) Indicates the database
 *             engine version.
 *         * `LatestRestorableTime` &mdash; (`Date`) Specifies the latest
 *           time to which a database can be restored with point-in-time
 *           restore.
 *         * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is
 *           a Multi-AZ deployment.
 *         * `EngineVersion` &mdash; (`String`) Indicates the database
 *           engine version.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `ReadReplicaSourceDBInstanceIdentifier` &mdash; (`String`)
 *           Contains the identifier of the source DB Instance if this DB
 *           Instance is a Read Replica.
 *         * `ReadReplicaDBInstanceIdentifiers` &mdash; (`Array<String>`)
 *           Contains one or more identifiers of the Read Replicas
 *           associated with this DB Instance.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for this DB Instance.
 *         * `OptionGroupMembership` &mdash; (`Object`) Specifies the name
 *           and status of the option group that this instance belongs to.
 *           * `OptionGroupName` &mdash; (`String`) The name of the option
 *             group that the instance belongs to.
 *           * `Status` &mdash; (`String`) The status of the DB Instance's
 *             option group membership (e.g. in-sync, pending,
 *             pending-maintenance, applying).
 *         * `CharacterSetName` &mdash; (`String`) If present, specifies
 *           the name of the character set that this instance is associated
 *           with.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method resetDBParameterGroup(params, callback)
 *   Calls the ResetDBParameterGroup API operation.
 *   @param params [Object]
 *     * `DBParameterGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the DB Parameter Group. Constraints: Must be 1 to
 *       255 alphanumeric characters First character must be a letter
 *       Cannot end with a hyphen or contain two consecutive hyphens
 *     * `ResetAllParameters` &mdash; (`Boolean`) Specifies whether
 *       (true) or not (false) to reset all parameters in the DB
 *       Parameter Group to default values. Default: true
 *     * `Parameters` &mdash; (`Array<Object>`) An array of parameter
 *       names, values, and the apply method for the parameter update. At
 *       least one parameter name, value, and apply method must be
 *       supplied; subsequent arguments are optional. A maximum of 20
 *       parameters may be modified in a single request. MySQL Valid
 *       Values (for Apply method): immediate | pending-reboot You can
 *       use the immediate value with dynamic parameters only. You can
 *       use the pending-reboot value for both dynamic and static
 *       parameters, and changes are applied when DB Instance reboots.
 *       Oracle Valid Values (for Apply method): pending-reboot
 *       * `ParameterName` &mdash; (`String`) Specifies the name of the
 *         parameter.
 *       * `ParameterValue` &mdash; (`String`) Specifies the value of the
 *         parameter.
 *       * `Description` &mdash; (`String`) Provides a description of the
 *         parameter.
 *       * `Source` &mdash; (`String`) Indicates the source of the
 *         parameter value.
 *       * `ApplyType` &mdash; (`String`) Specifies the engine specific
 *         parameters type.
 *       * `DataType` &mdash; (`String`) Specifies the valid data type
 *         for the parameter.
 *       * `AllowedValues` &mdash; (`String`) Specifies the valid range
 *         of values for the parameter.
 *       * `IsModifiable` &mdash; (`Boolean`) Indicates whether (true) or
 *         not (false) the parameter can be modified. Some parameters
 *         have security or operational implications that prevent them
 *         from being changed.
 *       * `MinimumEngineVersion` &mdash; (`String`) The earliest engine
 *         version to which the parameter can apply.
 *       * `ApplyMethod` &mdash; (`String`) Indicates when to apply
 *         parameter updates.
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
 *       * `DBParameterGroupName` &mdash; (`String`) The name of the DB
 *         Parameter Group.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method restoreDBInstanceFromDBSnapshot(params, callback)
 *   Calls the RestoreDBInstanceFromDBSnapshot API operation.
 *   @param params [Object]
 *     * `DBInstanceIdentifier` &mdash; **required** &mdash; (`String`)
 *       The identifier for the DB Snapshot to restore from. Constraints:
 *       Must contain from 1 to 63 alphanumeric characters or hyphens
 *       First character must be a letter Cannot end with a hyphen or
 *       contain two consecutive hyphens
 *     * `DBSnapshotIdentifier` &mdash; **required** &mdash; (`String`)
 *       Name of the DB Instance to create from the DB Snapshot. This
 *       parameter isn't case sensitive. Constraints: Must contain from 1
 *       to 255 alphanumeric characters or hyphens First character must
 *       be a letter Cannot end with a hyphen or contain two consecutive
 *       hyphens Example: my-snapshot-id
 *     * `DBInstanceClass` &mdash; (`String`) The compute and memory
 *       capacity of the Amazon RDS DB instance. Valid Values:
 *       db.t1.micro | db.m1.small | db.m1.large | db.m1.xlarge |
 *       db.m2.2xlarge | db.m2.4xlarge
 *     * `Port` &mdash; (`Integer`) The port number on which the database
 *       accepts connections. Default: The same port as the original DB
 *       Instance Constraints: Value must be 1150-65535
 *     * `AvailabilityZone` &mdash; (`String`) The EC2 Availability Zone
 *       that the database instance will be created in. Default: A
 *       random, system-chosen Availability Zone. Constraint: You cannot
 *       specify the AvailabilityZone parameter if the MultiAZ parameter
 *       is set to true. Example: us-east-1a
 *     * `DBSubnetGroupName` &mdash; (`String`) The DB Subnet Group name
 *       to use for the new instance.
 *     * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is a
 *       Multi-AZ deployment. Constraint: You cannot specify the
 *       AvailabilityZone parameter if the MultiAZ parameter is set to
 *       true.
 *     * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *       minor version upgrades will be applied automatically to the DB
 *       Instance during the maintenance window.
 *     * `LicenseModel` &mdash; (`String`) License model information for
 *       the restored DB Instance. Default: Same as source. Valid values:
 *       license-included | bring-your-own-license |
 *       general-public-license
 *     * `DBName` &mdash; (`String`) The database name for the restored
 *       DB Instance. This parameter doesn't apply to the MySQL engine.
 *     * `Engine` &mdash; (`String`) The database engine to use for the
 *       new instance. Default: The same as source Constraint: Must be
 *       compatible with the engine of the source Example: oracle-ee
 *     * `OptionGroupName` &mdash; (`String`)
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
 *       * `DBInstance` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBInstance
 *         DeleteDBInstance ModifyDBInstance This data type is used as a
 *         response element in the DescribeDBInstances action.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Contains a
 *           user-supplied database identifier. This is the unique key that
 *           identifies a DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) Contains the name of the
 *           compute and memory capacity class of the DB Instance.
 *         * `Engine` &mdash; (`String`) Provides the name of the database
 *           engine to be used for this DB Instance.
 *         * `DBInstanceStatus` &mdash; (`String`) Specifies the current
 *           state of this database.
 *         * `MasterUsername` &mdash; (`String`) Contains the master
 *           username for the DB Instance.
 *         * `DBName` &mdash; (`String`) The meaning of this parameter
 *           differs according to the database engine you use. MySQL
 *           Contains the name of the initial database of this instance
 *           that was provided at create time, if one was specified when
 *           the DB Instance was created. This same name is returned for
 *           the life of the DB Instance. Type: String Oracle Contains the
 *           Oracle System ID (SID) of the created DB Instance.
 *         * `Endpoint` &mdash; (`Object`) Specifies the connection
 *           endpoint.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the DB Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the
 *             database engine is listening on.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size specified in gigabytes.
 *         * `InstanceCreateTime` &mdash; (`Date`) Provides the date and
 *           time the DB Instance was created.
 *         * `PreferredBackupWindow` &mdash; (`String`) Specifies the daily
 *           time range during which automated backups are created if
 *           automated backups are enabled, as determined by the
 *           BackupRetentionPeriod.
 *         * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *           number of days for which automatic DB Snapshots are retained.
 *         * `DBSecurityGroups` &mdash; (`Array<Object>`) Provides List of
 *           DB Security Group elements containing only
 *           DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
 *           * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *             Security Group.
 *           * `Status` &mdash; (`String`) The status of the DB Security
 *             Group.
 *         * `DBParameterGroups` &mdash; (`Array<Object>`) Provides the
 *           list of DB Parameter Groups applied to this DB Instance.
 *           * `DBParameterGroupName` &mdash; (`String`) The name of the DP
 *             Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance is located in.
 *         * `DBSubnetGroup` &mdash; (`Object`) Provides the inforamtion of
 *           the subnet group associated with the DB instance, including
 *           the name, descrption and subnets in the subnet group.
 *           * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *             the DB Subnet Group.
 *           * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *             description of the DB Subnet Group.
 *           * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *             Subnet Group.
 *           * `SubnetGroupStatus` &mdash; (`String`) Provides the status
 *             of the DB Subnet Group.
 *           * `Subnets` &mdash; (`Array<Object>`) Contains a list of
 *             Subnets elements.
 *             * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *               identifier of the subnet.
 *             * `SubnetAvailabilityZone` &mdash; (`Object`)
 *               * `Name` &mdash; (`String`) The name of the availability
 *                 zone.
 *             * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *               the subnet.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the DB Instance are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by subelements.
 *           * `DBInstanceClass` &mdash; (`String`) Contains the new
 *             DBInstanceClass for the DB Instance that will be applied or
 *             is in progress.
 *           * `AllocatedStorage` &mdash; (`Integer`) Contains the new
 *             AllocatedStorage size for the DB Instance that will be
 *             applied or is in progress.
 *           * `MasterUserPassword` &mdash; (`String`) Contains the pending
 *             or in-progress change of the master credentials for the DB
 *             Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the pending port for
 *             the DB Instance.
 *           * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *             pending number of days for which automated backups are
 *             retained.
 *           * `MultiAZ` &mdash; (`Boolean`) Indicates that the Single-AZ
 *             DB Instance is to change to a Multi-AZ deployment.
 *           * `EngineVersion` &mdash; (`String`) Indicates the database
 *             engine version.
 *         * `LatestRestorableTime` &mdash; (`Date`) Specifies the latest
 *           time to which a database can be restored with point-in-time
 *           restore.
 *         * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is
 *           a Multi-AZ deployment.
 *         * `EngineVersion` &mdash; (`String`) Indicates the database
 *           engine version.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `ReadReplicaSourceDBInstanceIdentifier` &mdash; (`String`)
 *           Contains the identifier of the source DB Instance if this DB
 *           Instance is a Read Replica.
 *         * `ReadReplicaDBInstanceIdentifiers` &mdash; (`Array<String>`)
 *           Contains one or more identifiers of the Read Replicas
 *           associated with this DB Instance.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for this DB Instance.
 *         * `OptionGroupMembership` &mdash; (`Object`) Specifies the name
 *           and status of the option group that this instance belongs to.
 *           * `OptionGroupName` &mdash; (`String`) The name of the option
 *             group that the instance belongs to.
 *           * `Status` &mdash; (`String`) The status of the DB Instance's
 *             option group membership (e.g. in-sync, pending,
 *             pending-maintenance, applying).
 *         * `CharacterSetName` &mdash; (`String`) If present, specifies
 *           the name of the character set that this instance is associated
 *           with.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method restoreDBInstanceToPointInTime(params, callback)
 *   Calls the RestoreDBInstanceToPointInTime API operation.
 *   @param params [Object]
 *     * `SourceDBInstanceIdentifier` &mdash; **required** &mdash;
 *       (`String`) The identifier of the source DB Instance from which
 *       to restore. Constraints: Must be the identifier of an existing
 *       database instance Must contain from 1 to 63 alphanumeric
 *       characters or hyphens First character must be a letter Cannot
 *       end with a hyphen or contain two consecutive hyphens
 *     * `TargetDBInstanceIdentifier` &mdash; **required** &mdash;
 *       (`String`) The name of the new database instance to be created.
 *       Constraints: Must contain from 1 to 63 alphanumeric characters
 *       or hyphens First character must be a letter Cannot end with a
 *       hyphen or contain two consecutive hyphens
 *     * `RestoreTime` &mdash; (`Date`) The date and time to restore
 *       from. Valid Values: Value must be a UTC time Constraints: Must
 *       be before the latest restorable time for the DB Instance Cannot
 *       be specified if UseLatestRestorableTime parameter is true
 *       Example: 2009-09-07T23:45:00Z
 *     * `UseLatestRestorableTime` &mdash; (`Boolean`) Specifies whether
 *       (true) or not (false) the DB Instance is restored from the
 *       latest backup time. Default: false Constraints: Cannot be
 *       specified if RestoreTime parameter is provided.
 *     * `DBInstanceClass` &mdash; (`String`) The compute and memory
 *       capacity of the Amazon RDS DB instance. Valid Values:
 *       db.t1.micro | db.m1.small | db.m1.large | db.m1.xlarge |
 *       db.m2.2xlarge | db.m2.4xlarge Default: The same DBInstanceClass
 *       as the original DB Instance.
 *     * `Port` &mdash; (`Integer`) The port number on which the database
 *       accepts connections. Constraints: Value must be 1150-65535
 *       Default: The same port as the original DB Instance.
 *     * `AvailabilityZone` &mdash; (`String`) The EC2 Availability Zone
 *       that the database instance will be created in. Default: A
 *       random, system-chosen Availability Zone. Constraint: You cannot
 *       specify the AvailabilityZone parameter if the MultiAZ parameter
 *       is set to true. Example: us-east-1a
 *     * `DBSubnetGroupName` &mdash; (`String`) The DB subnet group name
 *       to use for the new instance.
 *     * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is a
 *       Multi-AZ deployment. Constraint: You cannot specify the
 *       AvailabilityZone parameter if the MultiAZ parameter is set to
 *       true.
 *     * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *       minor version upgrades will be applied automatically to the DB
 *       Instance during the maintenance window.
 *     * `LicenseModel` &mdash; (`String`) License model information for
 *       the restored DB Instance. Default: Same as source. Valid values:
 *       license-included | bring-your-own-license |
 *       general-public-license
 *     * `DBName` &mdash; (`String`) The database name for the restored
 *       DB Instance. This parameter is not used for the MySQL engine.
 *     * `Engine` &mdash; (`String`) The database engine to use for the
 *       new instance. Default: The same as source Constraint: Must be
 *       compatible with the engine of the source Example: oracle-ee
 *     * `OptionGroupName` &mdash; (`String`)
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
 *       * `DBInstance` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions: CreateDBInstance
 *         DeleteDBInstance ModifyDBInstance This data type is used as a
 *         response element in the DescribeDBInstances action.
 *         * `DBInstanceIdentifier` &mdash; (`String`) Contains a
 *           user-supplied database identifier. This is the unique key that
 *           identifies a DB Instance.
 *         * `DBInstanceClass` &mdash; (`String`) Contains the name of the
 *           compute and memory capacity class of the DB Instance.
 *         * `Engine` &mdash; (`String`) Provides the name of the database
 *           engine to be used for this DB Instance.
 *         * `DBInstanceStatus` &mdash; (`String`) Specifies the current
 *           state of this database.
 *         * `MasterUsername` &mdash; (`String`) Contains the master
 *           username for the DB Instance.
 *         * `DBName` &mdash; (`String`) The meaning of this parameter
 *           differs according to the database engine you use. MySQL
 *           Contains the name of the initial database of this instance
 *           that was provided at create time, if one was specified when
 *           the DB Instance was created. This same name is returned for
 *           the life of the DB Instance. Type: String Oracle Contains the
 *           Oracle System ID (SID) of the created DB Instance.
 *         * `Endpoint` &mdash; (`Object`) Specifies the connection
 *           endpoint.
 *           * `Address` &mdash; (`String`) Specifies the DNS address of
 *             the DB Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the port that the
 *             database engine is listening on.
 *         * `AllocatedStorage` &mdash; (`Integer`) Specifies the allocated
 *           storage size specified in gigabytes.
 *         * `InstanceCreateTime` &mdash; (`Date`) Provides the date and
 *           time the DB Instance was created.
 *         * `PreferredBackupWindow` &mdash; (`String`) Specifies the daily
 *           time range during which automated backups are created if
 *           automated backups are enabled, as determined by the
 *           BackupRetentionPeriod.
 *         * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *           number of days for which automatic DB Snapshots are retained.
 *         * `DBSecurityGroups` &mdash; (`Array<Object>`) Provides List of
 *           DB Security Group elements containing only
 *           DBSecurityGroup.Name and DBSecurityGroup.Status subelements.
 *           * `DBSecurityGroupName` &mdash; (`String`) The name of the DB
 *             Security Group.
 *           * `Status` &mdash; (`String`) The status of the DB Security
 *             Group.
 *         * `DBParameterGroups` &mdash; (`Array<Object>`) Provides the
 *           list of DB Parameter Groups applied to this DB Instance.
 *           * `DBParameterGroupName` &mdash; (`String`) The name of the DP
 *             Parameter Group.
 *           * `ParameterApplyStatus` &mdash; (`String`) The status of
 *             parameter updates.
 *         * `AvailabilityZone` &mdash; (`String`) Specifies the name of
 *           the Availability Zone the DB Instance is located in.
 *         * `DBSubnetGroup` &mdash; (`Object`) Provides the inforamtion of
 *           the subnet group associated with the DB instance, including
 *           the name, descrption and subnets in the subnet group.
 *           * `DBSubnetGroupName` &mdash; (`String`) Specifies the name of
 *             the DB Subnet Group.
 *           * `DBSubnetGroupDescription` &mdash; (`String`) Provides the
 *             description of the DB Subnet Group.
 *           * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *             Subnet Group.
 *           * `SubnetGroupStatus` &mdash; (`String`) Provides the status
 *             of the DB Subnet Group.
 *           * `Subnets` &mdash; (`Array<Object>`) Contains a list of
 *             Subnets elements.
 *             * `SubnetIdentifier` &mdash; (`String`) Specifies the
 *               identifier of the subnet.
 *             * `SubnetAvailabilityZone` &mdash; (`Object`)
 *               * `Name` &mdash; (`String`) The name of the availability
 *                 zone.
 *             * `SubnetStatus` &mdash; (`String`) Specifies the status of
 *               the subnet.
 *         * `PreferredMaintenanceWindow` &mdash; (`String`) Specifies the
 *           weekly time range (in UTC) during which system maintenance can
 *           occur.
 *         * `PendingModifiedValues` &mdash; (`Object`) Specifies that
 *           changes to the DB Instance are pending. This element is only
 *           included when changes are pending. Specific changes are
 *           identified by subelements.
 *           * `DBInstanceClass` &mdash; (`String`) Contains the new
 *             DBInstanceClass for the DB Instance that will be applied or
 *             is in progress.
 *           * `AllocatedStorage` &mdash; (`Integer`) Contains the new
 *             AllocatedStorage size for the DB Instance that will be
 *             applied or is in progress.
 *           * `MasterUserPassword` &mdash; (`String`) Contains the pending
 *             or in-progress change of the master credentials for the DB
 *             Instance.
 *           * `Port` &mdash; (`Integer`) Specifies the pending port for
 *             the DB Instance.
 *           * `BackupRetentionPeriod` &mdash; (`Integer`) Specifies the
 *             pending number of days for which automated backups are
 *             retained.
 *           * `MultiAZ` &mdash; (`Boolean`) Indicates that the Single-AZ
 *             DB Instance is to change to a Multi-AZ deployment.
 *           * `EngineVersion` &mdash; (`String`) Indicates the database
 *             engine version.
 *         * `LatestRestorableTime` &mdash; (`Date`) Specifies the latest
 *           time to which a database can be restored with point-in-time
 *           restore.
 *         * `MultiAZ` &mdash; (`Boolean`) Specifies if the DB Instance is
 *           a Multi-AZ deployment.
 *         * `EngineVersion` &mdash; (`String`) Indicates the database
 *           engine version.
 *         * `AutoMinorVersionUpgrade` &mdash; (`Boolean`) Indicates that
 *           minor version patches are applied automatically.
 *         * `ReadReplicaSourceDBInstanceIdentifier` &mdash; (`String`)
 *           Contains the identifier of the source DB Instance if this DB
 *           Instance is a Read Replica.
 *         * `ReadReplicaDBInstanceIdentifiers` &mdash; (`Array<String>`)
 *           Contains one or more identifiers of the Read Replicas
 *           associated with this DB Instance.
 *         * `LicenseModel` &mdash; (`String`) License model information
 *           for this DB Instance.
 *         * `OptionGroupMembership` &mdash; (`Object`) Specifies the name
 *           and status of the option group that this instance belongs to.
 *           * `OptionGroupName` &mdash; (`String`) The name of the option
 *             group that the instance belongs to.
 *           * `Status` &mdash; (`String`) The status of the DB Instance's
 *             option group membership (e.g. in-sync, pending,
 *             pending-maintenance, applying).
 *         * `CharacterSetName` &mdash; (`String`) If present, specifies
 *           the name of the character set that this instance is associated
 *           with.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method revokeDBSecurityGroupIngress(params, callback)
 *   Calls the RevokeDBSecurityGroupIngress API operation.
 *   @param params [Object]
 *     * `DBSecurityGroupName` &mdash; **required** &mdash; (`String`)
 *       The name of the DB Security Group to revoke ingress from.
 *     * `CIDRIP` &mdash; (`String`) The IP range to revoke access from.
 *       Must be a valid CIDR range. If CIDRIP is specified,
 *       EC2SecurityGroupName, EC2SecurityGroupId and
 *       EC2SecurityGroupOwnerId cannot be provided.
 *     * `EC2SecurityGroupName` &mdash; (`String`) The name of the EC2
 *       Security Group to revoke access from. For VPC DB Security
 *       Groups, EC2SecurityGroupId must be provided. Otherwise,
 *       EC2SecurityGroupOwnerId and either EC2SecurityGroupName or
 *       EC2SecurityGroupId must be provided.
 *     * `EC2SecurityGroupId` &mdash; (`String`) The id of the EC2
 *       Security Group to revoke access from. For VPC DB Security
 *       Groups, EC2SecurityGroupId must be provided. Otherwise,
 *       EC2SecurityGroupOwnerId and either EC2SecurityGroupName or
 *       EC2SecurityGroupId must be provided.
 *     * `EC2SecurityGroupOwnerId` &mdash; (`String`) The AWS Account
 *       Number of the owner of the EC2 security group specified in the
 *       EC2SecurityGroupName parameter. The AWS Access Key ID is not an
 *       acceptable value. For VPC DB Security Groups, EC2SecurityGroupId
 *       must be provided. Otherwise, EC2SecurityGroupOwnerId and either
 *       EC2SecurityGroupName or EC2SecurityGroupId must be provided.
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
 *       * `DBSecurityGroup` &mdash; (`Object`) Contains the result of a
 *         successful invocation of the following actions:
 *         DescribeDBSecurityGroups AuthorizeDBSecurityGroupIngress
 *         CreateDBSecurityGroup RevokeDBSecurityGroupIngress This data
 *         type is used as a response element in the
 *         DescribeDBSecurityGroups action.
 *         * `OwnerId` &mdash; (`String`) Provides the AWS ID of the owner
 *           of a specific DB Security Group.
 *         * `DBSecurityGroupName` &mdash; (`String`) Specifies the name of
 *           the DB Security Group.
 *         * `DBSecurityGroupDescription` &mdash; (`String`) Provides the
 *           description of the DB Security Group.
 *         * `VpcId` &mdash; (`String`) Provides the VpcId of the DB
 *           Security Group.
 *         * `EC2SecurityGroups` &mdash; (`Array<Object>`) Contains a list
 *           of EC2SecurityGroup elements.
 *           * `Status` &mdash; (`String`) Provides the status of the EC2
 *             security group.
 *           * `EC2SecurityGroupName` &mdash; (`String`) Specifies the name
 *             of the EC2 Security Group.
 *           * `EC2SecurityGroupId` &mdash; (`String`) Specifies the id of
 *             the EC2 Security Group.
 *           * `EC2SecurityGroupOwnerId` &mdash; (`String`) Specifies the
 *             AWS ID of the owner of the EC2 security group specified in
 *             the EC2SecurityGroupName field.
 *         * `IPRanges` &mdash; (`Array<Object>`) Contains a list of
 *           IPRange elements.
 *           * `Status` &mdash; (`String`) Specifies the status of the IP
 *             range.
 *           * `CIDRIP` &mdash; (`String`) Specifies the IP range.
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
AWS.RDS.Client = inherit({});
