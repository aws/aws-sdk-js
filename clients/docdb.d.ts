import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DocDB extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DocDB.Types.ClientConfiguration)
  config: Config & DocDB.Types.ClientConfiguration;
  /**
   * Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources. or in a Condition statement in an AWS Identity and Access Management (IAM) policy for Amazon DocumentDB.
   */
  addTagsToResource(params: DocDB.Types.AddTagsToResourceMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources. or in a Condition statement in an AWS Identity and Access Management (IAM) policy for Amazon DocumentDB.
   */
  addTagsToResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Applies a pending maintenance action to a resource (for example, to a DB instance).
   */
  applyPendingMaintenanceAction(params: DocDB.Types.ApplyPendingMaintenanceActionMessage, callback?: (err: AWSError, data: DocDB.Types.ApplyPendingMaintenanceActionResult) => void): Request<DocDB.Types.ApplyPendingMaintenanceActionResult, AWSError>;
  /**
   * Applies a pending maintenance action to a resource (for example, to a DB instance).
   */
  applyPendingMaintenanceAction(callback?: (err: AWSError, data: DocDB.Types.ApplyPendingMaintenanceActionResult) => void): Request<DocDB.Types.ApplyPendingMaintenanceActionResult, AWSError>;
  /**
   * Copies the specified DB cluster parameter group.
   */
  copyDBClusterParameterGroup(params: DocDB.Types.CopyDBClusterParameterGroupMessage, callback?: (err: AWSError, data: DocDB.Types.CopyDBClusterParameterGroupResult) => void): Request<DocDB.Types.CopyDBClusterParameterGroupResult, AWSError>;
  /**
   * Copies the specified DB cluster parameter group.
   */
  copyDBClusterParameterGroup(callback?: (err: AWSError, data: DocDB.Types.CopyDBClusterParameterGroupResult) => void): Request<DocDB.Types.CopyDBClusterParameterGroupResult, AWSError>;
  /**
   * Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot. To cancel the copy operation after it is in progress, delete the target DB cluster snapshot identified by TargetDBClusterSnapshotIdentifier while that DB cluster snapshot is in the copying status.
   */
  copyDBClusterSnapshot(params: DocDB.Types.CopyDBClusterSnapshotMessage, callback?: (err: AWSError, data: DocDB.Types.CopyDBClusterSnapshotResult) => void): Request<DocDB.Types.CopyDBClusterSnapshotResult, AWSError>;
  /**
   * Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot. To cancel the copy operation after it is in progress, delete the target DB cluster snapshot identified by TargetDBClusterSnapshotIdentifier while that DB cluster snapshot is in the copying status.
   */
  copyDBClusterSnapshot(callback?: (err: AWSError, data: DocDB.Types.CopyDBClusterSnapshotResult) => void): Request<DocDB.Types.CopyDBClusterSnapshotResult, AWSError>;
  /**
   * Creates a new Amazon DocumentDB DB cluster.
   */
  createDBCluster(params: DocDB.Types.CreateDBClusterMessage, callback?: (err: AWSError, data: DocDB.Types.CreateDBClusterResult) => void): Request<DocDB.Types.CreateDBClusterResult, AWSError>;
  /**
   * Creates a new Amazon DocumentDB DB cluster.
   */
  createDBCluster(callback?: (err: AWSError, data: DocDB.Types.CreateDBClusterResult) => void): Request<DocDB.Types.CreateDBClusterResult, AWSError>;
  /**
   * Creates a new DB cluster parameter group. Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster. A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after you create it. After you create a DB cluster parameter group, you must associate it with your DB cluster. For the new DB cluster parameter group and associated settings to take effect, you must then reboot the DB instances in the DB cluster without failover.  After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This step is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. 
   */
  createDBClusterParameterGroup(params: DocDB.Types.CreateDBClusterParameterGroupMessage, callback?: (err: AWSError, data: DocDB.Types.CreateDBClusterParameterGroupResult) => void): Request<DocDB.Types.CreateDBClusterParameterGroupResult, AWSError>;
  /**
   * Creates a new DB cluster parameter group. Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster. A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after you create it. After you create a DB cluster parameter group, you must associate it with your DB cluster. For the new DB cluster parameter group and associated settings to take effect, you must then reboot the DB instances in the DB cluster without failover.  After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This step is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. 
   */
  createDBClusterParameterGroup(callback?: (err: AWSError, data: DocDB.Types.CreateDBClusterParameterGroupResult) => void): Request<DocDB.Types.CreateDBClusterParameterGroupResult, AWSError>;
  /**
   * Creates a snapshot of a DB cluster. 
   */
  createDBClusterSnapshot(params: DocDB.Types.CreateDBClusterSnapshotMessage, callback?: (err: AWSError, data: DocDB.Types.CreateDBClusterSnapshotResult) => void): Request<DocDB.Types.CreateDBClusterSnapshotResult, AWSError>;
  /**
   * Creates a snapshot of a DB cluster. 
   */
  createDBClusterSnapshot(callback?: (err: AWSError, data: DocDB.Types.CreateDBClusterSnapshotResult) => void): Request<DocDB.Types.CreateDBClusterSnapshotResult, AWSError>;
  /**
   * Creates a new DB instance.
   */
  createDBInstance(params: DocDB.Types.CreateDBInstanceMessage, callback?: (err: AWSError, data: DocDB.Types.CreateDBInstanceResult) => void): Request<DocDB.Types.CreateDBInstanceResult, AWSError>;
  /**
   * Creates a new DB instance.
   */
  createDBInstance(callback?: (err: AWSError, data: DocDB.Types.CreateDBInstanceResult) => void): Request<DocDB.Types.CreateDBInstanceResult, AWSError>;
  /**
   * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two Availability Zones in the AWS Region.
   */
  createDBSubnetGroup(params: DocDB.Types.CreateDBSubnetGroupMessage, callback?: (err: AWSError, data: DocDB.Types.CreateDBSubnetGroupResult) => void): Request<DocDB.Types.CreateDBSubnetGroupResult, AWSError>;
  /**
   * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two Availability Zones in the AWS Region.
   */
  createDBSubnetGroup(callback?: (err: AWSError, data: DocDB.Types.CreateDBSubnetGroupResult) => void): Request<DocDB.Types.CreateDBSubnetGroupResult, AWSError>;
  /**
   * Deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted. 
   */
  deleteDBCluster(params: DocDB.Types.DeleteDBClusterMessage, callback?: (err: AWSError, data: DocDB.Types.DeleteDBClusterResult) => void): Request<DocDB.Types.DeleteDBClusterResult, AWSError>;
  /**
   * Deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted. 
   */
  deleteDBCluster(callback?: (err: AWSError, data: DocDB.Types.DeleteDBClusterResult) => void): Request<DocDB.Types.DeleteDBClusterResult, AWSError>;
  /**
   * Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
   */
  deleteDBClusterParameterGroup(params: DocDB.Types.DeleteDBClusterParameterGroupMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
   */
  deleteDBClusterParameterGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.  The DB cluster snapshot must be in the available state to be deleted. 
   */
  deleteDBClusterSnapshot(params: DocDB.Types.DeleteDBClusterSnapshotMessage, callback?: (err: AWSError, data: DocDB.Types.DeleteDBClusterSnapshotResult) => void): Request<DocDB.Types.DeleteDBClusterSnapshotResult, AWSError>;
  /**
   * Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.  The DB cluster snapshot must be in the available state to be deleted. 
   */
  deleteDBClusterSnapshot(callback?: (err: AWSError, data: DocDB.Types.DeleteDBClusterSnapshotResult) => void): Request<DocDB.Types.DeleteDBClusterSnapshotResult, AWSError>;
  /**
   * Deletes a previously provisioned DB instance. 
   */
  deleteDBInstance(params: DocDB.Types.DeleteDBInstanceMessage, callback?: (err: AWSError, data: DocDB.Types.DeleteDBInstanceResult) => void): Request<DocDB.Types.DeleteDBInstanceResult, AWSError>;
  /**
   * Deletes a previously provisioned DB instance. 
   */
  deleteDBInstance(callback?: (err: AWSError, data: DocDB.Types.DeleteDBInstanceResult) => void): Request<DocDB.Types.DeleteDBInstanceResult, AWSError>;
  /**
   * Deletes a DB subnet group.  The specified database subnet group must not be associated with any DB instances. 
   */
  deleteDBSubnetGroup(params: DocDB.Types.DeleteDBSubnetGroupMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a DB subnet group.  The specified database subnet group must not be associated with any DB instances. 
   */
  deleteDBSubnetGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list contains only the description of the specified DB cluster parameter group. 
   */
  describeDBClusterParameterGroups(params: DocDB.Types.DescribeDBClusterParameterGroupsMessage, callback?: (err: AWSError, data: DocDB.Types.DBClusterParameterGroupsMessage) => void): Request<DocDB.Types.DBClusterParameterGroupsMessage, AWSError>;
  /**
   * Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list contains only the description of the specified DB cluster parameter group. 
   */
  describeDBClusterParameterGroups(callback?: (err: AWSError, data: DocDB.Types.DBClusterParameterGroupsMessage) => void): Request<DocDB.Types.DBClusterParameterGroupsMessage, AWSError>;
  /**
   * Returns the detailed parameter list for a particular DB cluster parameter group.
   */
  describeDBClusterParameters(params: DocDB.Types.DescribeDBClusterParametersMessage, callback?: (err: AWSError, data: DocDB.Types.DBClusterParameterGroupDetails) => void): Request<DocDB.Types.DBClusterParameterGroupDetails, AWSError>;
  /**
   * Returns the detailed parameter list for a particular DB cluster parameter group.
   */
  describeDBClusterParameters(callback?: (err: AWSError, data: DocDB.Types.DBClusterParameterGroupDetails) => void): Request<DocDB.Types.DBClusterParameterGroupDetails, AWSError>;
  /**
   * Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot. When you share snapshots with other AWS accounts, DescribeDBClusterSnapshotAttributes returns the restore attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If all is included in the list of values for the restore attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts.
   */
  describeDBClusterSnapshotAttributes(params: DocDB.Types.DescribeDBClusterSnapshotAttributesMessage, callback?: (err: AWSError, data: DocDB.Types.DescribeDBClusterSnapshotAttributesResult) => void): Request<DocDB.Types.DescribeDBClusterSnapshotAttributesResult, AWSError>;
  /**
   * Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot. When you share snapshots with other AWS accounts, DescribeDBClusterSnapshotAttributes returns the restore attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If all is included in the list of values for the restore attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts.
   */
  describeDBClusterSnapshotAttributes(callback?: (err: AWSError, data: DocDB.Types.DescribeDBClusterSnapshotAttributesResult) => void): Request<DocDB.Types.DescribeDBClusterSnapshotAttributesResult, AWSError>;
  /**
   * Returns information about DB cluster snapshots. This API operation supports pagination.
   */
  describeDBClusterSnapshots(params: DocDB.Types.DescribeDBClusterSnapshotsMessage, callback?: (err: AWSError, data: DocDB.Types.DBClusterSnapshotMessage) => void): Request<DocDB.Types.DBClusterSnapshotMessage, AWSError>;
  /**
   * Returns information about DB cluster snapshots. This API operation supports pagination.
   */
  describeDBClusterSnapshots(callback?: (err: AWSError, data: DocDB.Types.DBClusterSnapshotMessage) => void): Request<DocDB.Types.DBClusterSnapshotMessage, AWSError>;
  /**
   * Returns information about provisioned Amazon DocumentDB DB clusters. This API operation supports pagination.
   */
  describeDBClusters(params: DocDB.Types.DescribeDBClustersMessage, callback?: (err: AWSError, data: DocDB.Types.DBClusterMessage) => void): Request<DocDB.Types.DBClusterMessage, AWSError>;
  /**
   * Returns information about provisioned Amazon DocumentDB DB clusters. This API operation supports pagination.
   */
  describeDBClusters(callback?: (err: AWSError, data: DocDB.Types.DBClusterMessage) => void): Request<DocDB.Types.DBClusterMessage, AWSError>;
  /**
   * Returns a list of the available DB engines.
   */
  describeDBEngineVersions(params: DocDB.Types.DescribeDBEngineVersionsMessage, callback?: (err: AWSError, data: DocDB.Types.DBEngineVersionMessage) => void): Request<DocDB.Types.DBEngineVersionMessage, AWSError>;
  /**
   * Returns a list of the available DB engines.
   */
  describeDBEngineVersions(callback?: (err: AWSError, data: DocDB.Types.DBEngineVersionMessage) => void): Request<DocDB.Types.DBEngineVersionMessage, AWSError>;
  /**
   * Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
   */
  describeDBInstances(params: DocDB.Types.DescribeDBInstancesMessage, callback?: (err: AWSError, data: DocDB.Types.DBInstanceMessage) => void): Request<DocDB.Types.DBInstanceMessage, AWSError>;
  /**
   * Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
   */
  describeDBInstances(callback?: (err: AWSError, data: DocDB.Types.DBInstanceMessage) => void): Request<DocDB.Types.DBInstanceMessage, AWSError>;
  /**
   * Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.
   */
  describeDBSubnetGroups(params: DocDB.Types.DescribeDBSubnetGroupsMessage, callback?: (err: AWSError, data: DocDB.Types.DBSubnetGroupMessage) => void): Request<DocDB.Types.DBSubnetGroupMessage, AWSError>;
  /**
   * Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.
   */
  describeDBSubnetGroups(callback?: (err: AWSError, data: DocDB.Types.DBSubnetGroupMessage) => void): Request<DocDB.Types.DBSubnetGroupMessage, AWSError>;
  /**
   * Returns the default engine and system parameter information for the cluster database engine.
   */
  describeEngineDefaultClusterParameters(params: DocDB.Types.DescribeEngineDefaultClusterParametersMessage, callback?: (err: AWSError, data: DocDB.Types.DescribeEngineDefaultClusterParametersResult) => void): Request<DocDB.Types.DescribeEngineDefaultClusterParametersResult, AWSError>;
  /**
   * Returns the default engine and system parameter information for the cluster database engine.
   */
  describeEngineDefaultClusterParameters(callback?: (err: AWSError, data: DocDB.Types.DescribeEngineDefaultClusterParametersResult) => void): Request<DocDB.Types.DescribeEngineDefaultClusterParametersResult, AWSError>;
  /**
   * Displays a list of categories for all event source types, or, if specified, for a specified source type. 
   */
  describeEventCategories(params: DocDB.Types.DescribeEventCategoriesMessage, callback?: (err: AWSError, data: DocDB.Types.EventCategoriesMessage) => void): Request<DocDB.Types.EventCategoriesMessage, AWSError>;
  /**
   * Displays a list of categories for all event source types, or, if specified, for a specified source type. 
   */
  describeEventCategories(callback?: (err: AWSError, data: DocDB.Types.EventCategoriesMessage) => void): Request<DocDB.Types.EventCategoriesMessage, AWSError>;
  /**
   * Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, DB security group, DB snapshot, or DB parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
   */
  describeEvents(params: DocDB.Types.DescribeEventsMessage, callback?: (err: AWSError, data: DocDB.Types.EventsMessage) => void): Request<DocDB.Types.EventsMessage, AWSError>;
  /**
   * Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, DB security group, DB snapshot, or DB parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
   */
  describeEvents(callback?: (err: AWSError, data: DocDB.Types.EventsMessage) => void): Request<DocDB.Types.EventsMessage, AWSError>;
  /**
   * Returns a list of orderable DB instance options for the specified engine.
   */
  describeOrderableDBInstanceOptions(params: DocDB.Types.DescribeOrderableDBInstanceOptionsMessage, callback?: (err: AWSError, data: DocDB.Types.OrderableDBInstanceOptionsMessage) => void): Request<DocDB.Types.OrderableDBInstanceOptionsMessage, AWSError>;
  /**
   * Returns a list of orderable DB instance options for the specified engine.
   */
  describeOrderableDBInstanceOptions(callback?: (err: AWSError, data: DocDB.Types.OrderableDBInstanceOptionsMessage) => void): Request<DocDB.Types.OrderableDBInstanceOptionsMessage, AWSError>;
  /**
   * Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
   */
  describePendingMaintenanceActions(params: DocDB.Types.DescribePendingMaintenanceActionsMessage, callback?: (err: AWSError, data: DocDB.Types.PendingMaintenanceActionsMessage) => void): Request<DocDB.Types.PendingMaintenanceActionsMessage, AWSError>;
  /**
   * Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
   */
  describePendingMaintenanceActions(callback?: (err: AWSError, data: DocDB.Types.PendingMaintenanceActionsMessage) => void): Request<DocDB.Types.PendingMaintenanceActionsMessage, AWSError>;
  /**
   * Forces a failover for a DB cluster. A failover for a DB cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer). If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.
   */
  failoverDBCluster(params: DocDB.Types.FailoverDBClusterMessage, callback?: (err: AWSError, data: DocDB.Types.FailoverDBClusterResult) => void): Request<DocDB.Types.FailoverDBClusterResult, AWSError>;
  /**
   * Forces a failover for a DB cluster. A failover for a DB cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer). If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.
   */
  failoverDBCluster(callback?: (err: AWSError, data: DocDB.Types.FailoverDBClusterResult) => void): Request<DocDB.Types.FailoverDBClusterResult, AWSError>;
  /**
   * Lists all tags on an Amazon DocumentDB resource.
   */
  listTagsForResource(params: DocDB.Types.ListTagsForResourceMessage, callback?: (err: AWSError, data: DocDB.Types.TagListMessage) => void): Request<DocDB.Types.TagListMessage, AWSError>;
  /**
   * Lists all tags on an Amazon DocumentDB resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: DocDB.Types.TagListMessage) => void): Request<DocDB.Types.TagListMessage, AWSError>;
  /**
   * Modifies a setting for an Amazon DocumentDB DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
   */
  modifyDBCluster(params: DocDB.Types.ModifyDBClusterMessage, callback?: (err: AWSError, data: DocDB.Types.ModifyDBClusterResult) => void): Request<DocDB.Types.ModifyDBClusterResult, AWSError>;
  /**
   * Modifies a setting for an Amazon DocumentDB DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
   */
  modifyDBCluster(callback?: (err: AWSError, data: DocDB.Types.ModifyDBClusterResult) => void): Request<DocDB.Types.ModifyDBClusterResult, AWSError>;
  /**
   *  Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request.   Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.   After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new DB cluster. This step is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. 
   */
  modifyDBClusterParameterGroup(params: DocDB.Types.ModifyDBClusterParameterGroupMessage, callback?: (err: AWSError, data: DocDB.Types.DBClusterParameterGroupNameMessage) => void): Request<DocDB.Types.DBClusterParameterGroupNameMessage, AWSError>;
  /**
   *  Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request.   Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.   After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new DB cluster. This step is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. 
   */
  modifyDBClusterParameterGroup(callback?: (err: AWSError, data: DocDB.Types.DBClusterParameterGroupNameMessage) => void): Request<DocDB.Types.DBClusterParameterGroupNameMessage, AWSError>;
  /**
   * Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot. To share a manual DB cluster snapshot with other AWS accounts, specify restore as the AttributeName, and use the ValuesToAdd parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value all to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case.
   */
  modifyDBClusterSnapshotAttribute(params: DocDB.Types.ModifyDBClusterSnapshotAttributeMessage, callback?: (err: AWSError, data: DocDB.Types.ModifyDBClusterSnapshotAttributeResult) => void): Request<DocDB.Types.ModifyDBClusterSnapshotAttributeResult, AWSError>;
  /**
   * Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot. To share a manual DB cluster snapshot with other AWS accounts, specify restore as the AttributeName, and use the ValuesToAdd parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value all to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case.
   */
  modifyDBClusterSnapshotAttribute(callback?: (err: AWSError, data: DocDB.Types.ModifyDBClusterSnapshotAttributeResult) => void): Request<DocDB.Types.ModifyDBClusterSnapshotAttributeResult, AWSError>;
  /**
   * Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
   */
  modifyDBInstance(params: DocDB.Types.ModifyDBInstanceMessage, callback?: (err: AWSError, data: DocDB.Types.ModifyDBInstanceResult) => void): Request<DocDB.Types.ModifyDBInstanceResult, AWSError>;
  /**
   * Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
   */
  modifyDBInstance(callback?: (err: AWSError, data: DocDB.Types.ModifyDBInstanceResult) => void): Request<DocDB.Types.ModifyDBInstanceResult, AWSError>;
  /**
   * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two Availability Zones in the AWS Region.
   */
  modifyDBSubnetGroup(params: DocDB.Types.ModifyDBSubnetGroupMessage, callback?: (err: AWSError, data: DocDB.Types.ModifyDBSubnetGroupResult) => void): Request<DocDB.Types.ModifyDBSubnetGroupResult, AWSError>;
  /**
   * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two Availability Zones in the AWS Region.
   */
  modifyDBSubnetGroup(callback?: (err: AWSError, data: DocDB.Types.ModifyDBSubnetGroupResult) => void): Request<DocDB.Types.ModifyDBSubnetGroupResult, AWSError>;
  /**
   * You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the DB cluster parameter group that is associated with the DB instance, you must reboot the instance for the changes to take effect.  Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. 
   */
  rebootDBInstance(params: DocDB.Types.RebootDBInstanceMessage, callback?: (err: AWSError, data: DocDB.Types.RebootDBInstanceResult) => void): Request<DocDB.Types.RebootDBInstanceResult, AWSError>;
  /**
   * You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the DB cluster parameter group that is associated with the DB instance, you must reboot the instance for the changes to take effect.  Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. 
   */
  rebootDBInstance(callback?: (err: AWSError, data: DocDB.Types.RebootDBInstanceResult) => void): Request<DocDB.Types.RebootDBInstanceResult, AWSError>;
  /**
   * Removes metadata tags from an Amazon DocumentDB resource.
   */
  removeTagsFromResource(params: DocDB.Types.RemoveTagsFromResourceMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes metadata tags from an Amazon DocumentDB resource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters, submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters.   When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance reboot.
   */
  resetDBClusterParameterGroup(params: DocDB.Types.ResetDBClusterParameterGroupMessage, callback?: (err: AWSError, data: DocDB.Types.DBClusterParameterGroupNameMessage) => void): Request<DocDB.Types.DBClusterParameterGroupNameMessage, AWSError>;
  /**
   *  Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters, submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters.   When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance reboot.
   */
  resetDBClusterParameterGroup(callback?: (err: AWSError, data: DocDB.Types.DBClusterParameterGroupNameMessage) => void): Request<DocDB.Types.DBClusterParameterGroupNameMessage, AWSError>;
  /**
   * Creates a new DB cluster from a DB snapshot or DB cluster snapshot. If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group. If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
   */
  restoreDBClusterFromSnapshot(params: DocDB.Types.RestoreDBClusterFromSnapshotMessage, callback?: (err: AWSError, data: DocDB.Types.RestoreDBClusterFromSnapshotResult) => void): Request<DocDB.Types.RestoreDBClusterFromSnapshotResult, AWSError>;
  /**
   * Creates a new DB cluster from a DB snapshot or DB cluster snapshot. If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group. If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
   */
  restoreDBClusterFromSnapshot(callback?: (err: AWSError, data: DocDB.Types.RestoreDBClusterFromSnapshotResult) => void): Request<DocDB.Types.RestoreDBClusterFromSnapshotResult, AWSError>;
  /**
   * Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. 
   */
  restoreDBClusterToPointInTime(params: DocDB.Types.RestoreDBClusterToPointInTimeMessage, callback?: (err: AWSError, data: DocDB.Types.RestoreDBClusterToPointInTimeResult) => void): Request<DocDB.Types.RestoreDBClusterToPointInTimeResult, AWSError>;
  /**
   * Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. 
   */
  restoreDBClusterToPointInTime(callback?: (err: AWSError, data: DocDB.Types.RestoreDBClusterToPointInTimeResult) => void): Request<DocDB.Types.RestoreDBClusterToPointInTimeResult, AWSError>;
  /**
   * Waits for the dBInstanceAvailable state by periodically calling the underlying DocDB.describeDBInstancesoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "dBInstanceAvailable", params: DocDB.Types.DescribeDBInstancesMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DocDB.Types.DBInstanceMessage) => void): Request<DocDB.Types.DBInstanceMessage, AWSError>;
  /**
   * Waits for the dBInstanceAvailable state by periodically calling the underlying DocDB.describeDBInstancesoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "dBInstanceAvailable", callback?: (err: AWSError, data: DocDB.Types.DBInstanceMessage) => void): Request<DocDB.Types.DBInstanceMessage, AWSError>;
  /**
   * Waits for the dBInstanceDeleted state by periodically calling the underlying DocDB.describeDBInstancesoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "dBInstanceDeleted", params: DocDB.Types.DescribeDBInstancesMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DocDB.Types.DBInstanceMessage) => void): Request<DocDB.Types.DBInstanceMessage, AWSError>;
  /**
   * Waits for the dBInstanceDeleted state by periodically calling the underlying DocDB.describeDBInstancesoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "dBInstanceDeleted", callback?: (err: AWSError, data: DocDB.Types.DBInstanceMessage) => void): Request<DocDB.Types.DBInstanceMessage, AWSError>;
}
declare namespace DocDB {
  export interface AddTagsToResourceMessage {
    /**
     * The Amazon DocumentDB resource that the tags are added to. This value is an Amazon Resource Name (ARN).
     */
    ResourceName: String;
    /**
     * The tags to be assigned to the Amazon DocumentDB resource. 
     */
    Tags: TagList;
  }
  export type ApplyMethod = "immediate"|"pending-reboot"|string;
  export interface ApplyPendingMaintenanceActionMessage {
    /**
     * The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to.
     */
    ResourceIdentifier: String;
    /**
     * The pending maintenance action to apply to this resource. Valid values: system-update, db-upgrade 
     */
    ApplyAction: String;
    /**
     * A value that specifies the type of opt-in request or undoes an opt-in request. An opt-in request of type immediate can't be undone. Valid values:    immediate - Apply the maintenance action immediately.    next-maintenance - Apply the maintenance action during the next maintenance window for the resource.    undo-opt-in - Cancel any existing next-maintenance opt-in requests.  
     */
    OptInType: String;
  }
  export interface ApplyPendingMaintenanceActionResult {
    ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
  }
  export type AttributeValueList = String[];
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone.
     */
    Name?: String;
  }
  export type AvailabilityZoneList = AvailabilityZone[];
  export type AvailabilityZones = String[];
  export type Boolean = boolean;
  export type BooleanOptional = boolean;
  export interface CloudwatchLogsExportConfiguration {
    /**
     * The list of log types to enable.
     */
    EnableLogTypes?: LogTypeList;
    /**
     * The list of log types to disable.
     */
    DisableLogTypes?: LogTypeList;
  }
  export interface CopyDBClusterParameterGroupMessage {
    /**
     * The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. Constraints:   Must specify a valid DB cluster parameter group.   If the source DB cluster parameter group is in the same AWS Region as the copy, specify a valid DB parameter group identifier; for example, my-db-cluster-param-group, or a valid ARN.   If the source DB parameter group is in a different AWS Region than the copy, specify a valid DB cluster parameter group ARN; for example, arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1.  
     */
    SourceDBClusterParameterGroupIdentifier: String;
    /**
     * The identifier for the copied DB cluster parameter group. Constraints:   Cannot be null, empty, or blank.   Must contain from 1 to 255 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-cluster-param-group1 
     */
    TargetDBClusterParameterGroupIdentifier: String;
    /**
     * A description for the copied DB cluster parameter group.
     */
    TargetDBClusterParameterGroupDescription: String;
    /**
     * The tags that are to be assigned to the parameter group.
     */
    Tags?: TagList;
  }
  export interface CopyDBClusterParameterGroupResult {
    DBClusterParameterGroup?: DBClusterParameterGroup;
  }
  export interface CopyDBClusterSnapshotMessage {
    /**
     * The identifier of the DB cluster snapshot to copy. This parameter is not case sensitive. You can't copy an encrypted, shared DB cluster snapshot from one AWS Region to another. Constraints:   Must specify a valid system snapshot in the "available" state.   If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier.   If the source snapshot is in a different AWS Region than the copy, specify a valid DB cluster snapshot ARN.   Example: my-cluster-snapshot1 
     */
    SourceDBClusterSnapshotIdentifier: String;
    /**
     * The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-cluster-snapshot2 
     */
    TargetDBClusterSnapshotIdentifier: String;
    /**
     * The AWS KMS key ID for an encrypted DB cluster snapshot. The AWS KMS key ID is the Amazon Resource Name (ARN), AWS KMS key identifier, or the AWS KMS key alias for the AWS KMS encryption key.  If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for KmsKeyId to encrypt the copy with a new AWS KMS encryption key. If you don't specify a value for KmsKeyId, then the copy of the DB cluster snapshot is encrypted with the same AWS KMS key as the source DB cluster snapshot.  If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for KmsKeyId.  To copy an encrypted DB cluster snapshot to another AWS Region, set KmsKeyId to the AWS KMS key ID that you want to use to encrypt the copy of the DB cluster snapshot in the destination Region. AWS KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one Region in another Region. If you copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned.
     */
    KmsKeyId?: String;
    /**
     * The URL that contains a Signature Version 4 signed request for the CopyDBClusterSnapshot API action in the AWS Region that contains the source DB cluster snapshot to copy. You must use the PreSignedUrl parameter when copying an encrypted DB cluster snapshot from another AWS Region. The presigned URL must be a valid request for the CopyDBSClusterSnapshot API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied. The presigned URL request must contain the following parameter values:    KmsKeyId - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the CopyDBClusterSnapshot action that is called in the destination AWS Region, and the action contained in the presigned URL.    DestinationRegion - The name of the AWS Region that the DB cluster snapshot will be created in.    SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your SourceDBClusterSnapshotIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:cluster-snapshot:my-cluster-snapshot-20161115.  
     */
    PreSignedUrl?: String;
    /**
     * Set to true to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.
     */
    CopyTags?: BooleanOptional;
    /**
     * The tags to be assigned to the DB cluster snapshot.
     */
    Tags?: TagList;
  }
  export interface CopyDBClusterSnapshotResult {
    DBClusterSnapshot?: DBClusterSnapshot;
  }
  export interface CreateDBClusterMessage {
    /**
     * A list of Amazon EC2 Availability Zones that instances in the DB cluster can be created in.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints:   Must be a value from 1 to 35.  
     */
    BackupRetentionPeriod?: IntegerOptional;
    /**
     * The DB cluster identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-cluster 
     */
    DBClusterIdentifier: String;
    /**
     *  The name of the DB cluster parameter group to associate with this DB cluster.
     */
    DBClusterParameterGroupName?: String;
    /**
     * A list of EC2 VPC security groups to associate with this DB cluster.
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * A DB subnet group to associate with this DB cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup 
     */
    DBSubnetGroupName?: String;
    /**
     * The name of the database engine to be used for this DB cluster. Valid values: docdb 
     */
    Engine: String;
    /**
     * The version number of the database engine to use.
     */
    EngineVersion?: String;
    /**
     * The port number on which the instances in the DB cluster accept connections.
     */
    Port?: IntegerOptional;
    /**
     * The name of the master user for the DB cluster. Constraints:   Must be from 1 to 16 letters or numbers.   The first character must be a letter.   Cannot be a reserved word for the chosen database engine.  
     */
    MasterUsername?: String;
    /**
     * The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@". Constraints: Must contain from 8 to 41 characters.
     */
    MasterUserPassword?: String;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes.  
     */
    PreferredBackupWindow?: String;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The tags to be assigned to the DB cluster.
     */
    Tags?: TagList;
    /**
     * Specifies whether the DB cluster is encrypted.
     */
    StorageEncrypted?: BooleanOptional;
    /**
     * The AWS KMS key identifier for an encrypted DB cluster. The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS encryption key. If you are creating a DB cluster using the same AWS account that owns the AWS KMS encryption key that is used to encrypt the new DB cluster, you can use the AWS KMS key alias instead of the ARN for the AWS KMS encryption key. If an encryption key is not specified in KmsKeyId:   If ReplicationSourceIdentifier identifies an encrypted source, then Amazon DocumentDB uses the encryption key that is used to encrypt the source. Otherwise, Amazon DocumentDB uses your default encryption key.    If the StorageEncrypted parameter is true and ReplicationSourceIdentifier is not specified, Amazon DocumentDB uses your default encryption key.   AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region. If you create a replica of an encrypted DB cluster in another AWS Region, you must set KmsKeyId to a KMS key ID that is valid in the destination AWS Region. This key is used to encrypt the replica in that AWS Region.
     */
    KmsKeyId?: String;
    /**
     * A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs.
     */
    EnableCloudwatchLogsExports?: LogTypeList;
  }
  export interface CreateDBClusterParameterGroupMessage {
    /**
     * The name of the DB cluster parameter group. Constraints:   Must match the name of an existing DBClusterParameterGroup.    This value is stored as a lowercase string. 
     */
    DBClusterParameterGroupName: String;
    /**
     * The DB cluster parameter group family name.
     */
    DBParameterGroupFamily: String;
    /**
     * The description for the DB cluster parameter group.
     */
    Description: String;
    /**
     * The tags to be assigned to the DB cluster parameter group.
     */
    Tags?: TagList;
  }
  export interface CreateDBClusterParameterGroupResult {
    DBClusterParameterGroup?: DBClusterParameterGroup;
  }
  export interface CreateDBClusterResult {
    DBCluster?: DBCluster;
  }
  export interface CreateDBClusterSnapshotMessage {
    /**
     * The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-cluster-snapshot1 
     */
    DBClusterSnapshotIdentifier: String;
    /**
     * The identifier of the DB cluster to create a snapshot for. This parameter is not case sensitive. Constraints:   Must match the identifier of an existing DBCluster.   Example: my-cluster 
     */
    DBClusterIdentifier: String;
    /**
     * The tags to be assigned to the DB cluster snapshot.
     */
    Tags?: TagList;
  }
  export interface CreateDBClusterSnapshotResult {
    DBClusterSnapshot?: DBClusterSnapshot;
  }
  export interface CreateDBInstanceMessage {
    /**
     * The DB instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance 
     */
    DBInstanceIdentifier: String;
    /**
     * The compute and memory capacity of the DB instance; for example, db.m4.large. 
     */
    DBInstanceClass: String;
    /**
     * The name of the database engine to be used for this instance. Valid value: docdb 
     */
    Engine: String;
    /**
     *  The Amazon EC2 Availability Zone that the DB instance is created in. Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.  Example: us-east-1d   Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to true. The specified Availability Zone must be in the same AWS Region as the current endpoint. 
     */
    AvailabilityZone?: String;
    /**
     * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.  Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window. Default: true 
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The tags to be assigned to the DB instance.
     */
    Tags?: TagList;
    /**
     * The identifier of the DB cluster that the instance will belong to.
     */
    DBClusterIdentifier: String;
    /**
     * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid values: 0-15
     */
    PromotionTier?: IntegerOptional;
  }
  export interface CreateDBInstanceResult {
    DBInstance?: DBInstance;
  }
  export interface CreateDBSubnetGroupMessage {
    /**
     * The name for the DB subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default. Example: mySubnetgroup 
     */
    DBSubnetGroupName: String;
    /**
     * The description for the DB subnet group.
     */
    DBSubnetGroupDescription: String;
    /**
     * The Amazon EC2 subnet IDs for the DB subnet group.
     */
    SubnetIds: SubnetIdentifierList;
    /**
     * The tags to be assigned to the DB subnet group.
     */
    Tags?: TagList;
  }
  export interface CreateDBSubnetGroupResult {
    DBSubnetGroup?: DBSubnetGroup;
  }
  export interface DBCluster {
    /**
     * Provides the list of Amazon EC2 Availability Zones that instances in the DB cluster can be created in.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * Specifies the number of days for which automatic DB snapshots are retained.
     */
    BackupRetentionPeriod?: IntegerOptional;
    /**
     * Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.
     */
    DBClusterIdentifier?: String;
    /**
     * Specifies the name of the DB cluster parameter group for the DB cluster.
     */
    DBClusterParameterGroup?: String;
    /**
     * Specifies information on the subnet group that is associated with the DB cluster, including the name, description, and subnets in the subnet group.
     */
    DBSubnetGroup?: String;
    /**
     * Specifies the current state of this DB cluster.
     */
    Status?: String;
    /**
     * Specifies the progress of the operation as a percentage.
     */
    PercentProgress?: String;
    /**
     * The earliest time to which a database can be restored with point-in-time restore.
     */
    EarliestRestorableTime?: TStamp;
    /**
     * Specifies the connection endpoint for the primary instance of the DB cluster.
     */
    Endpoint?: String;
    /**
     * The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load balances connections across the Amazon DocumentDB replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Amazon DocumentDB distributes the connection requests among the Amazon DocumentDB replicas in the DB cluster. This functionality can help balance your read workload across multiple Amazon DocumentDB replicas in your DB cluster.  If a failover occurs, and the Amazon DocumentDB replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Amazon DocumentDB replicas in the cluster, you can then reconnect to the reader endpoint.
     */
    ReaderEndpoint?: String;
    /**
     * Specifies whether the DB cluster has instances in multiple Availability Zones.
     */
    MultiAZ?: Boolean;
    /**
     * Provides the name of the database engine to be used for this DB cluster.
     */
    Engine?: String;
    /**
     * Indicates the database engine version.
     */
    EngineVersion?: String;
    /**
     * Specifies the latest time to which a database can be restored with point-in-time restore.
     */
    LatestRestorableTime?: TStamp;
    /**
     * Specifies the port that the database engine is listening on.
     */
    Port?: IntegerOptional;
    /**
     * Contains the master user name for the DB cluster.
     */
    MasterUsername?: String;
    /**
     * Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod. 
     */
    PreferredBackupWindow?: String;
    /**
     * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    PreferredMaintenanceWindow?: String;
    /**
     * Provides the list of instances that make up the DB cluster.
     */
    DBClusterMembers?: DBClusterMemberList;
    /**
     * Provides a list of virtual private cloud (VPC) security groups that the DB cluster belongs to.
     */
    VpcSecurityGroups?: VpcSecurityGroupMembershipList;
    /**
     * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
     */
    HostedZoneId?: String;
    /**
     * Specifies whether the DB cluster is encrypted.
     */
    StorageEncrypted?: Boolean;
    /**
     * If StorageEncrypted is true, the AWS KMS key identifier for the encrypted DB cluster.
     */
    KmsKeyId?: String;
    /**
     * The AWS Region-unique, immutable identifier for the DB cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.
     */
    DbClusterResourceId?: String;
    /**
     * The Amazon Resource Name (ARN) for the DB cluster.
     */
    DBClusterArn?: String;
    /**
     * Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.
     */
    AssociatedRoles?: DBClusterRoles;
    /**
     * Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).
     */
    ClusterCreateTime?: TStamp;
    /**
     * A list of log types that this DB cluster is configured to export to Amazon CloudWatch Logs.
     */
    EnabledCloudwatchLogsExports?: LogTypeList;
  }
  export type DBClusterList = DBCluster[];
  export interface DBClusterMember {
    /**
     * Specifies the instance identifier for this member of the DB cluster.
     */
    DBInstanceIdentifier?: String;
    /**
     * A value that is true if the cluster member is the primary instance for the DB cluster and false otherwise.
     */
    IsClusterWriter?: Boolean;
    /**
     * Specifies the status of the DB cluster parameter group for this member of the DB cluster.
     */
    DBClusterParameterGroupStatus?: String;
    /**
     * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance. 
     */
    PromotionTier?: IntegerOptional;
  }
  export type DBClusterMemberList = DBClusterMember[];
  export interface DBClusterMessage {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * A list of DB clusters.
     */
    DBClusters?: DBClusterList;
  }
  export interface DBClusterParameterGroup {
    /**
     * Provides the name of the DB cluster parameter group.
     */
    DBClusterParameterGroupName?: String;
    /**
     * Provides the name of the DB parameter group family that this DB cluster parameter group is compatible with.
     */
    DBParameterGroupFamily?: String;
    /**
     * Provides the customer-specified description for this DB cluster parameter group.
     */
    Description?: String;
    /**
     * The Amazon Resource Name (ARN) for the DB cluster parameter group.
     */
    DBClusterParameterGroupArn?: String;
  }
  export interface DBClusterParameterGroupDetails {
    /**
     * Provides a list of parameters for the DB cluster parameter group.
     */
    Parameters?: ParametersList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export type DBClusterParameterGroupList = DBClusterParameterGroup[];
  export interface DBClusterParameterGroupNameMessage {
    /**
     * The name of a DB cluster parameter group. Constraints:   Must be from 1 to 255 letters or numbers.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.    This value is stored as a lowercase string. 
     */
    DBClusterParameterGroupName?: String;
  }
  export interface DBClusterParameterGroupsMessage {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * A list of DB cluster parameter groups.
     */
    DBClusterParameterGroups?: DBClusterParameterGroupList;
  }
  export interface DBClusterRole {
    /**
     * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.
     */
    RoleArn?: String;
    /**
     * Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following values:    ACTIVE - The IAM role ARN is associated with the DB cluster and can be used to access other AWS services on your behalf.    PENDING - The IAM role ARN is being associated with the DB cluster.    INVALID - The IAM role ARN is associated with the DB cluster, but the DB cluster cannot assume the IAM role to access other AWS services on your behalf.  
     */
    Status?: String;
  }
  export type DBClusterRoles = DBClusterRole[];
  export interface DBClusterSnapshot {
    /**
     * Provides the list of Amazon EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * Specifies the identifier for the DB cluster snapshot.
     */
    DBClusterSnapshotIdentifier?: String;
    /**
     * Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.
     */
    DBClusterIdentifier?: String;
    /**
     * Provides the time when the snapshot was taken, in UTC.
     */
    SnapshotCreateTime?: TStamp;
    /**
     * Specifies the name of the database engine.
     */
    Engine?: String;
    /**
     * Specifies the status of this DB cluster snapshot.
     */
    Status?: String;
    /**
     * Specifies the port that the DB cluster was listening on at the time of the snapshot.
     */
    Port?: Integer;
    /**
     * Provides the virtual private cloud (VPC) ID that is associated with the DB cluster snapshot.
     */
    VpcId?: String;
    /**
     * Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).
     */
    ClusterCreateTime?: TStamp;
    /**
     * Provides the master user name for the DB cluster snapshot.
     */
    MasterUsername?: String;
    /**
     * Provides the version of the database engine for this DB cluster snapshot.
     */
    EngineVersion?: String;
    /**
     * Provides the type of the DB cluster snapshot.
     */
    SnapshotType?: String;
    /**
     * Specifies the percentage of the estimated data that has been transferred.
     */
    PercentProgress?: Integer;
    /**
     * Specifies whether the DB cluster snapshot is encrypted.
     */
    StorageEncrypted?: Boolean;
    /**
     * If StorageEncrypted is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.
     */
    KmsKeyId?: String;
    /**
     * The Amazon Resource Name (ARN) for the DB cluster snapshot.
     */
    DBClusterSnapshotArn?: String;
    /**
     * If the DB cluster snapshot was copied from a source DB cluster snapshot, the ARN for the source DB cluster snapshot; otherwise, a null value.
     */
    SourceDBClusterSnapshotArn?: String;
  }
  export interface DBClusterSnapshotAttribute {
    /**
     * The name of the manual DB cluster snapshot attribute. The attribute named restore refers to the list of AWS accounts that have permission to copy or restore the manual DB cluster snapshot.
     */
    AttributeName?: String;
    /**
     * The values for the manual DB cluster snapshot attribute. If the AttributeName field is set to restore, then this element returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If a value of all is in the list, then the manual DB cluster snapshot is public and available for any AWS account to copy or restore.
     */
    AttributeValues?: AttributeValueList;
  }
  export type DBClusterSnapshotAttributeList = DBClusterSnapshotAttribute[];
  export interface DBClusterSnapshotAttributesResult {
    /**
     * The identifier of the DB cluster snapshot that the attributes apply to.
     */
    DBClusterSnapshotIdentifier?: String;
    /**
     * The list of attributes and values for the DB cluster snapshot.
     */
    DBClusterSnapshotAttributes?: DBClusterSnapshotAttributeList;
  }
  export type DBClusterSnapshotList = DBClusterSnapshot[];
  export interface DBClusterSnapshotMessage {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * Provides a list of DB cluster snapshots.
     */
    DBClusterSnapshots?: DBClusterSnapshotList;
  }
  export interface DBEngineVersion {
    /**
     * The name of the database engine.
     */
    Engine?: String;
    /**
     * The version number of the database engine.
     */
    EngineVersion?: String;
    /**
     * The name of the DB parameter group family for the database engine.
     */
    DBParameterGroupFamily?: String;
    /**
     * The description of the database engine.
     */
    DBEngineDescription?: String;
    /**
     * The description of the database engine version.
     */
    DBEngineVersionDescription?: String;
    /**
     * A list of engine versions that this database engine version can be upgraded to.
     */
    ValidUpgradeTarget?: ValidUpgradeTargetList;
    /**
     * The types of logs that the database engine has available for export to Amazon CloudWatch Logs.
     */
    ExportableLogTypes?: LogTypeList;
    /**
     * A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.
     */
    SupportsLogExportsToCloudwatchLogs?: Boolean;
  }
  export type DBEngineVersionList = DBEngineVersion[];
  export interface DBEngineVersionMessage {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * Detailed information about one or more DB engine versions.
     */
    DBEngineVersions?: DBEngineVersionList;
  }
  export interface DBInstance {
    /**
     * Contains a user-provided database identifier. This identifier is the unique key that identifies a DB instance.
     */
    DBInstanceIdentifier?: String;
    /**
     * Contains the name of the compute and memory capacity class of the DB instance.
     */
    DBInstanceClass?: String;
    /**
     * Provides the name of the database engine to be used for this DB instance.
     */
    Engine?: String;
    /**
     * Specifies the current state of this database.
     */
    DBInstanceStatus?: String;
    /**
     * Specifies the connection endpoint.
     */
    Endpoint?: Endpoint;
    /**
     * Provides the date and time that the DB instance was created.
     */
    InstanceCreateTime?: TStamp;
    /**
     *  Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod. 
     */
    PreferredBackupWindow?: String;
    /**
     * Specifies the number of days for which automatic DB snapshots are retained.
     */
    BackupRetentionPeriod?: Integer;
    /**
     * Provides a list of VPC security group elements that the DB instance belongs to.
     */
    VpcSecurityGroups?: VpcSecurityGroupMembershipList;
    /**
     * Specifies the name of the Availability Zone that the DB instance is located in.
     */
    AvailabilityZone?: String;
    /**
     * Specifies information on the subnet group that is associated with the DB instance, including the name, description, and subnets in the subnet group.
     */
    DBSubnetGroup?: DBSubnetGroup;
    /**
     * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    PreferredMaintenanceWindow?: String;
    /**
     * Specifies that changes to the DB instance are pending. This element is included only when changes are pending. Specific changes are identified by subelements.
     */
    PendingModifiedValues?: PendingModifiedValues;
    /**
     * Specifies the latest time to which a database can be restored with point-in-time restore.
     */
    LatestRestorableTime?: TStamp;
    /**
     * Indicates the database engine version.
     */
    EngineVersion?: String;
    /**
     * Indicates that minor version patches are applied automatically.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * Specifies the availability options for the DB instance. A value of true specifies an internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address.
     */
    PubliclyAccessible?: Boolean;
    /**
     * The status of a read replica. If the instance is not a read replica, this is blank.
     */
    StatusInfos?: DBInstanceStatusInfoList;
    /**
     * Contains the name of the DB cluster that the DB instance is a member of if the DB instance is a member of a DB cluster.
     */
    DBClusterIdentifier?: String;
    /**
     * Specifies whether the DB instance is encrypted.
     */
    StorageEncrypted?: Boolean;
    /**
     *  If StorageEncrypted is true, the AWS KMS key identifier for the encrypted DB instance. 
     */
    KmsKeyId?: String;
    /**
     * The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.
     */
    DbiResourceId?: String;
    /**
     * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.
     */
    PromotionTier?: IntegerOptional;
    /**
     * The Amazon Resource Name (ARN) for the DB instance.
     */
    DBInstanceArn?: String;
    /**
     * A list of log types that this DB instance is configured to export to Amazon CloudWatch Logs.
     */
    EnabledCloudwatchLogsExports?: LogTypeList;
  }
  export type DBInstanceList = DBInstance[];
  export interface DBInstanceMessage {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * Detailed information about one or more DB instances. 
     */
    DBInstances?: DBInstanceList;
  }
  export interface DBInstanceStatusInfo {
    /**
     * This value is currently "read replication."
     */
    StatusType?: String;
    /**
     * A Boolean value that is true if the instance is operating normally, or false if the instance is in an error state.
     */
    Normal?: Boolean;
    /**
     * Status of the DB instance. For a StatusType of read replica, the values can be replicating, error, stopped, or terminated.
     */
    Status?: String;
    /**
     * Details of the error if there is an error for the instance. If the instance is not in an error state, this value is blank.
     */
    Message?: String;
  }
  export type DBInstanceStatusInfoList = DBInstanceStatusInfo[];
  export interface DBSubnetGroup {
    /**
     * The name of the DB subnet group.
     */
    DBSubnetGroupName?: String;
    /**
     * Provides the description of the DB subnet group.
     */
    DBSubnetGroupDescription?: String;
    /**
     * Provides the virtual private cloud (VPC) ID of the DB subnet group.
     */
    VpcId?: String;
    /**
     * Provides the status of the DB subnet group.
     */
    SubnetGroupStatus?: String;
    /**
     * Detailed information about one or more subnets within a DB subnet group.
     */
    Subnets?: SubnetList;
    /**
     * The Amazon Resource Identifier (ARN) for the DB subnet group.
     */
    DBSubnetGroupArn?: String;
  }
  export interface DBSubnetGroupMessage {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * Detailed information about one or more DB subnet groups.
     */
    DBSubnetGroups?: DBSubnetGroups;
  }
  export type DBSubnetGroups = DBSubnetGroup[];
  export interface DeleteDBClusterMessage {
    /**
     * The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case sensitive. Constraints:   Must match an existing DBClusterIdentifier.  
     */
    DBClusterIdentifier: String;
    /**
     *  Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If true is specified, no DB cluster snapshot is created. If false is specified, a DB cluster snapshot is created before the DB cluster is deleted.   If SkipFinalSnapshot is false, you must specify a FinalDBSnapshotIdentifier parameter.  Default: false 
     */
    SkipFinalSnapshot?: Boolean;
    /**
     *  The DB cluster snapshot identifier of the new DB cluster snapshot created when SkipFinalSnapshot is set to false.    Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.   Constraints:   Must be from 1 to 255 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    FinalDBSnapshotIdentifier?: String;
  }
  export interface DeleteDBClusterParameterGroupMessage {
    /**
     * The name of the DB cluster parameter group. Constraints:   Must be the name of an existing DB cluster parameter group.   You can't delete a default DB cluster parameter group.   Cannot be associated with any DB clusters.  
     */
    DBClusterParameterGroupName: String;
  }
  export interface DeleteDBClusterResult {
    DBCluster?: DBCluster;
  }
  export interface DeleteDBClusterSnapshotMessage {
    /**
     * The identifier of the DB cluster snapshot to delete. Constraints: Must be the name of an existing DB cluster snapshot in the available state.
     */
    DBClusterSnapshotIdentifier: String;
  }
  export interface DeleteDBClusterSnapshotResult {
    DBClusterSnapshot?: DBClusterSnapshot;
  }
  export interface DeleteDBInstanceMessage {
    /**
     * The DB instance identifier for the DB instance to be deleted. This parameter isn't case sensitive. Constraints:   Must match the name of an existing DB instance.  
     */
    DBInstanceIdentifier: String;
  }
  export interface DeleteDBInstanceResult {
    DBInstance?: DBInstance;
  }
  export interface DeleteDBSubnetGroupMessage {
    /**
     * The name of the database subnet group to delete.  You can't delete the default subnet group.  Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup 
     */
    DBSubnetGroupName: String;
  }
  export interface DescribeDBClusterParameterGroupsMessage {
    /**
     * The name of a specific DB cluster parameter group to return details for. Constraints:   If provided, must match the name of an existing DBClusterParameterGroup.  
     */
    DBClusterParameterGroupName?: String;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeDBClusterParametersMessage {
    /**
     * The name of a specific DB cluster parameter group to return parameter details for. Constraints:   If provided, must match the name of an existing DBClusterParameterGroup.  
     */
    DBClusterParameterGroupName: String;
    /**
     *  A value that indicates to return only parameters for a specific source. Parameter sources can be engine, service, or customer. 
     */
    Source?: String;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeDBClusterSnapshotAttributesMessage {
    /**
     * The identifier for the DB cluster snapshot to describe the attributes for.
     */
    DBClusterSnapshotIdentifier: String;
  }
  export interface DescribeDBClusterSnapshotAttributesResult {
    DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
  }
  export interface DescribeDBClusterSnapshotsMessage {
    /**
     * The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used with the DBClusterSnapshotIdentifier parameter. This parameter is not case sensitive.  Constraints:   If provided, must match the identifier of an existing DBCluster.  
     */
    DBClusterIdentifier?: String;
    /**
     * A specific DB cluster snapshot identifier to describe. This parameter can't be used with the DBClusterIdentifier parameter. This value is stored as a lowercase string.  Constraints:   If provided, must match the identifier of an existing DBClusterSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified.  
     */
    DBClusterSnapshotIdentifier?: String;
    /**
     * The type of DB cluster snapshots to be returned. You can specify one of the following values:    automated - Return all DB cluster snapshots that Amazon DocumentDB has automatically created for your AWS account.    manual - Return all DB cluster snapshots that you have manually created for your AWS account.    shared - Return all manual DB cluster snapshots that have been shared to your AWS account.    public - Return all DB cluster snapshots that have been marked as public.   If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the IncludeShared parameter to true. You can include public DB cluster snapshots with these results by setting the IncludePublic parameter to true. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public.
     */
    SnapshotType?: String;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * Set to true to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore, and otherwise false. The default is false.
     */
    IncludeShared?: Boolean;
    /**
     * Set to true to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account, and otherwise false. The default is false.
     */
    IncludePublic?: Boolean;
  }
  export interface DescribeDBClustersMessage {
    /**
     * The user-provided DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case sensitive. Constraints:   If provided, must match an existing DBClusterIdentifier.  
     */
    DBClusterIdentifier?: String;
    /**
     * A filter that specifies one or more DB clusters to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB clusters identified by these ARNs.  
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeDBEngineVersionsMessage {
    /**
     * The database engine to return.
     */
    Engine?: String;
    /**
     * The database engine version to return. Example: 5.1.49 
     */
    EngineVersion?: String;
    /**
     * The name of a specific DB parameter group family to return details for. Constraints:   If provided, must match an existing DBParameterGroupFamily.  
     */
    DBParameterGroupFamily?: String;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * Indicates that only the default version of the specified engine or engine and major version combination is returned.
     */
    DefaultOnly?: Boolean;
    /**
     * If this parameter is specified and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version. 
     */
    ListSupportedCharacterSets?: BooleanOptional;
    /**
     * If this parameter is specified and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version. 
     */
    ListSupportedTimezones?: BooleanOptional;
  }
  export interface DescribeDBInstancesMessage {
    /**
     * The user-provided instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case sensitive. Constraints:   If provided, must match the identifier of an existing DBInstance.  
     */
    DBInstanceIdentifier?: String;
    /**
     * A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list includes only the information about the DB instances that are associated with the DB clusters that are identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance ARNs. The results list includes only the information about the DB instances that are identified by these ARNs.  
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeDBSubnetGroupsMessage {
    /**
     * The name of the DB subnet group to return details for.
     */
    DBSubnetGroupName?: String;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeEngineDefaultClusterParametersMessage {
    /**
     * The name of the DB cluster parameter group family to return the engine parameter information for.
     */
    DBParameterGroupFamily: String;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeEngineDefaultClusterParametersResult {
    EngineDefaults?: EngineDefaults;
  }
  export interface DescribeEventCategoriesMessage {
    /**
     * The type of source that is generating the events. Valid values: db-instance, db-parameter-group, db-security-group, db-snapshot 
     */
    SourceType?: String;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
  }
  export interface DescribeEventsMessage {
    /**
     * The identifier of the event source for which events are returned. If not specified, then all sources are included in the response. Constraints:   If SourceIdentifier is provided, SourceType must also be provided.   If the source type is DBInstance, a DBInstanceIdentifier must be provided.   If the source type is DBSecurityGroup, a DBSecurityGroupName must be provided.   If the source type is DBParameterGroup, a DBParameterGroupName must be provided.   If the source type is DBSnapshot, a DBSnapshotIdentifier must be provided.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    SourceIdentifier?: String;
    /**
     * The event source to retrieve events for. If no value is specified, all events are returned.
     */
    SourceType?: SourceType;
    /**
     *  The beginning of the time interval to retrieve events for, specified in ISO 8601 format.  Example: 2009-07-08T18:00Z
     */
    StartTime?: TStamp;
    /**
     *  The end of the time interval for which to retrieve events, specified in ISO 8601 format.  Example: 2009-07-08T18:00Z
     */
    EndTime?: TStamp;
    /**
     * The number of minutes to retrieve events for. Default: 60
     */
    Duration?: IntegerOptional;
    /**
     * A list of event categories that trigger notifications for an event notification subscription.
     */
    EventCategories?: EventCategoriesList;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeOrderableDBInstanceOptionsMessage {
    /**
     * The name of the engine to retrieve DB instance options for.
     */
    Engine: String;
    /**
     * The engine version filter value. Specify this parameter to show only the available offerings that match the specified engine version.
     */
    EngineVersion?: String;
    /**
     * The DB instance class filter value. Specify this parameter to show only the available offerings that match the specified DB instance class.
     */
    DBInstanceClass?: String;
    /**
     * The license model filter value. Specify this parameter to show only the available offerings that match the specified license model.
     */
    LicenseModel?: String;
    /**
     * The virtual private cloud (VPC) filter value. Specify this parameter to show only the available VPC or non-VPC offerings.
     */
    Vpc?: BooleanOptional;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribePendingMaintenanceActionsMessage {
    /**
     * The ARN of a resource to return pending maintenance actions for.
     */
    ResourceIdentifier?: String;
    /**
     * A filter that specifies one or more resources to return pending maintenance actions for. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list includes only pending maintenance actions for the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance ARNs. The results list includes only pending maintenance actions for the DB instances identified by these ARNs.  
     */
    Filters?: FilterList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface Endpoint {
    /**
     * Specifies the DNS address of the DB instance.
     */
    Address?: String;
    /**
     * Specifies the port that the database engine is listening on.
     */
    Port?: Integer;
    /**
     * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
     */
    HostedZoneId?: String;
  }
  export interface EngineDefaults {
    /**
     * The name of the DB cluster parameter group family to return the engine parameter information for.
     */
    DBParameterGroupFamily?: String;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * The parameters of a particular DB cluster parameter group family.
     */
    Parameters?: ParametersList;
  }
  export interface Event {
    /**
     * Provides the identifier for the source of the event.
     */
    SourceIdentifier?: String;
    /**
     * Specifies the source type for this event.
     */
    SourceType?: SourceType;
    /**
     * Provides the text of this event.
     */
    Message?: String;
    /**
     * Specifies the category for the event.
     */
    EventCategories?: EventCategoriesList;
    /**
     * Specifies the date and time of the event.
     */
    Date?: TStamp;
    /**
     * The Amazon Resource Name (ARN) for the event.
     */
    SourceArn?: String;
  }
  export type EventCategoriesList = String[];
  export interface EventCategoriesMap {
    /**
     * The source type that the returned categories belong to.
     */
    SourceType?: String;
    /**
     * The event categories for the specified source type.
     */
    EventCategories?: EventCategoriesList;
  }
  export type EventCategoriesMapList = EventCategoriesMap[];
  export interface EventCategoriesMessage {
    /**
     * A list of event category maps.
     */
    EventCategoriesMapList?: EventCategoriesMapList;
  }
  export type EventList = Event[];
  export interface EventsMessage {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * Detailed information about one or more events. 
     */
    Events?: EventList;
  }
  export interface FailoverDBClusterMessage {
    /**
     * A DB cluster identifier to force a failover for. This parameter is not case sensitive. Constraints:   Must match the identifier of an existing DBCluster.  
     */
    DBClusterIdentifier?: String;
    /**
     * The name of the instance to promote to the primary instance. You must specify the instance identifier for an Amazon DocumentDB replica in the DB cluster. For example, mydbcluster-replica1.
     */
    TargetDBInstanceIdentifier?: String;
  }
  export interface FailoverDBClusterResult {
    DBCluster?: DBCluster;
  }
  export interface Filter {
    /**
     * The name of the filter. Filter names are case sensitive.
     */
    Name: String;
    /**
     * One or more filter values. Filter values are case sensitive.
     */
    Values: FilterValueList;
  }
  export type FilterList = Filter[];
  export type FilterValueList = String[];
  export type Integer = number;
  export type IntegerOptional = number;
  export type KeyList = String[];
  export interface ListTagsForResourceMessage {
    /**
     * The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).
     */
    ResourceName: String;
    /**
     * This parameter is not currently supported.
     */
    Filters?: FilterList;
  }
  export type LogTypeList = String[];
  export interface ModifyDBClusterMessage {
    /**
     * The DB cluster identifier for the cluster that is being modified. This parameter is not case sensitive. Constraints:   Must match the identifier of an existing DBCluster.  
     */
    DBClusterIdentifier: String;
    /**
     * The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-cluster2 
     */
    NewDBClusterIdentifier?: String;
    /**
     * A value that specifies whether the changes in this request and any pending changes are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is set to false, changes to the DB cluster are applied during the next maintenance window. The ApplyImmediately parameter affects only the NewDBClusterIdentifier and MasterUserPassword values. If you set this parameter value to false, the changes to the NewDBClusterIdentifier and MasterUserPassword values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. Default: false 
     */
    ApplyImmediately?: Boolean;
    /**
     * The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints:   Must be a value from 1 to 35.  
     */
    BackupRetentionPeriod?: IntegerOptional;
    /**
     * The name of the DB cluster parameter group to use for the DB cluster.
     */
    DBClusterParameterGroupName?: String;
    /**
     * A list of virtual private cloud (VPC) security groups that the DB cluster will belong to.
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The port number on which the DB cluster accepts connections. Constraints: Must be a value from 1150 to 65535.  Default: The same port as the original DB cluster.
     */
    Port?: IntegerOptional;
    /**
     * The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@". Constraints: Must contain from 8 to 41 characters.
     */
    MasterUserPassword?: String;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter.  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes.  
     */
    PreferredBackupWindow?: String;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.  Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific DB instance or DB cluster. The EnableLogTypes and DisableLogTypes arrays determine which logs are exported (or not exported) to CloudWatch Logs.
     */
    CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
    /**
     * The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true.
     */
    EngineVersion?: String;
  }
  export interface ModifyDBClusterParameterGroupMessage {
    /**
     * The name of the DB cluster parameter group to modify.
     */
    DBClusterParameterGroupName: String;
    /**
     * A list of parameters in the DB cluster parameter group to modify.
     */
    Parameters: ParametersList;
  }
  export interface ModifyDBClusterResult {
    DBCluster?: DBCluster;
  }
  export interface ModifyDBClusterSnapshotAttributeMessage {
    /**
     * The identifier for the DB cluster snapshot to modify the attributes for.
     */
    DBClusterSnapshotIdentifier: String;
    /**
     * The name of the DB cluster snapshot attribute to modify. To manage authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this value to restore.
     */
    AttributeName: String;
    /**
     * A list of DB cluster snapshot attributes to add to the attribute specified by AttributeName. To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account IDs. To make the manual DB cluster snapshot restorable by any AWS account, set it to all. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want to be available to all AWS accounts.
     */
    ValuesToAdd?: AttributeValueList;
    /**
     * A list of DB cluster snapshot attributes to remove from the attribute specified by AttributeName. To remove authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account identifiers. To remove authorization for any AWS account to copy or restore the DB cluster snapshot, set it to all . If you specify all, an AWS account whose account ID is explicitly added to the restore attribute can still copy or restore a manual DB cluster snapshot.
     */
    ValuesToRemove?: AttributeValueList;
  }
  export interface ModifyDBClusterSnapshotAttributeResult {
    DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
  }
  export interface ModifyDBInstanceMessage {
    /**
     * The DB instance identifier. This value is stored as a lowercase string. Constraints:   Must match the identifier of an existing DBInstance.  
     */
    DBInstanceIdentifier: String;
    /**
     * The new compute and memory capacity of the DB instance; for example, db.m4.large. Not all DB instance classes are available in all AWS Regions.  If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless ApplyImmediately is specified as true for this request.  Default: Uses existing setting.
     */
    DBInstanceClass?: String;
    /**
     * Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance.   If this parameter is set to false, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next reboot. Default: false 
     */
    ApplyImmediately?: Boolean;
    /**
     * The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, changing this parameter causes a reboot of the DB instance. If you are moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure that pending changes are applied. Default: Uses existing setting. Format: ddd:hh24:mi-ddd:hh24:mi  Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Must be at least 30 minutes.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case, and the change is asynchronously applied as soon as possible. An outage results if this parameter is set to true during the maintenance window, and a newer minor version is available, and Amazon DocumentDB has enabled automatic patching for that engine version. 
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     *  The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot occurs immediately if you set Apply Immediately to true. It occurs during the next maintenance window if you set Apply Immediately to false. This value is stored as a lowercase string.  Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance 
     */
    NewDBInstanceIdentifier?: String;
    /**
     * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid values: 0-15
     */
    PromotionTier?: IntegerOptional;
  }
  export interface ModifyDBInstanceResult {
    DBInstance?: DBInstance;
  }
  export interface ModifyDBSubnetGroupMessage {
    /**
     * The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.  Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup 
     */
    DBSubnetGroupName: String;
    /**
     * The description for the DB subnet group.
     */
    DBSubnetGroupDescription?: String;
    /**
     * The Amazon EC2 subnet IDs for the DB subnet group.
     */
    SubnetIds: SubnetIdentifierList;
  }
  export interface ModifyDBSubnetGroupResult {
    DBSubnetGroup?: DBSubnetGroup;
  }
  export interface OrderableDBInstanceOption {
    /**
     * The engine type of a DB instance.
     */
    Engine?: String;
    /**
     * The engine version of a DB instance.
     */
    EngineVersion?: String;
    /**
     * The DB instance class for a DB instance.
     */
    DBInstanceClass?: String;
    /**
     * The license model for a DB instance.
     */
    LicenseModel?: String;
    /**
     * A list of Availability Zones for a DB instance.
     */
    AvailabilityZones?: AvailabilityZoneList;
    /**
     * Indicates whether a DB instance is in a virtual private cloud (VPC).
     */
    Vpc?: Boolean;
  }
  export type OrderableDBInstanceOptionsList = OrderableDBInstanceOption[];
  export interface OrderableDBInstanceOptionsMessage {
    /**
     * The options that are available for a particular orderable DB instance.
     */
    OrderableDBInstanceOptions?: OrderableDBInstanceOptionsList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface Parameter {
    /**
     * Specifies the name of the parameter.
     */
    ParameterName?: String;
    /**
     * Specifies the value of the parameter.
     */
    ParameterValue?: String;
    /**
     * Provides a description of the parameter.
     */
    Description?: String;
    /**
     * Indicates the source of the parameter value.
     */
    Source?: String;
    /**
     * Specifies the engine-specific parameters type.
     */
    ApplyType?: String;
    /**
     * Specifies the valid data type for the parameter.
     */
    DataType?: String;
    /**
     * Specifies the valid range of values for the parameter.
     */
    AllowedValues?: String;
    /**
     *  Indicates whether (true) or not (false) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. 
     */
    IsModifiable?: Boolean;
    /**
     * The earliest engine version to which the parameter can apply.
     */
    MinimumEngineVersion?: String;
    /**
     * Indicates when to apply parameter updates.
     */
    ApplyMethod?: ApplyMethod;
  }
  export type ParametersList = Parameter[];
  export interface PendingCloudwatchLogsExports {
    /**
     * Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.
     */
    LogTypesToEnable?: LogTypeList;
    /**
     * Log types that are in the process of being enabled. After they are enabled, these log types are exported to Amazon CloudWatch Logs.
     */
    LogTypesToDisable?: LogTypeList;
  }
  export interface PendingMaintenanceAction {
    /**
     * The type of pending maintenance action that is available for the resource.
     */
    Action?: String;
    /**
     * The date of the maintenance window when the action is applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any next-maintenance opt-in requests are ignored.
     */
    AutoAppliedAfterDate?: TStamp;
    /**
     * The date when the maintenance action is automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any immediate opt-in requests are ignored.
     */
    ForcedApplyDate?: TStamp;
    /**
     * Indicates the type of opt-in request that has been received for the resource.
     */
    OptInStatus?: String;
    /**
     * The effective date when the pending maintenance action is applied to the resource.
     */
    CurrentApplyDate?: TStamp;
    /**
     * A description providing more detail about the maintenance action.
     */
    Description?: String;
  }
  export type PendingMaintenanceActionDetails = PendingMaintenanceAction[];
  export type PendingMaintenanceActions = ResourcePendingMaintenanceActions[];
  export interface PendingMaintenanceActionsMessage {
    /**
     * The maintenance actions to be applied.
     */
    PendingMaintenanceActions?: PendingMaintenanceActions;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface PendingModifiedValues {
    /**
     *  Contains the new DBInstanceClass for the DB instance that will be applied or is currently being applied. 
     */
    DBInstanceClass?: String;
    /**
     *  Contains the new AllocatedStorage size for the DB instance that will be applied or is currently being applied. 
     */
    AllocatedStorage?: IntegerOptional;
    /**
     * Contains the pending or currently in-progress change of the master credentials for the DB instance.
     */
    MasterUserPassword?: String;
    /**
     * Specifies the pending port for the DB instance.
     */
    Port?: IntegerOptional;
    /**
     * Specifies the pending number of days for which automated backups are retained.
     */
    BackupRetentionPeriod?: IntegerOptional;
    /**
     * Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.
     */
    MultiAZ?: BooleanOptional;
    /**
     * Indicates the database engine version.
     */
    EngineVersion?: String;
    /**
     * The license model for the DB instance. Valid values: license-included, bring-your-own-license, general-public-license 
     */
    LicenseModel?: String;
    /**
     * Specifies the new Provisioned IOPS value for the DB instance that will be applied or is currently being applied.
     */
    Iops?: IntegerOptional;
    /**
     *  Contains the new DBInstanceIdentifier for the DB instance that will be applied or is currently being applied. 
     */
    DBInstanceIdentifier?: String;
    /**
     * Specifies the storage type to be associated with the DB instance.
     */
    StorageType?: String;
    /**
     * Specifies the identifier of the certificate authority (CA) certificate for the DB instance.
     */
    CACertificateIdentifier?: String;
    /**
     * The new DB subnet group for the DB instance. 
     */
    DBSubnetGroupName?: String;
    /**
     * A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.
     */
    PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
  }
  export interface RebootDBInstanceMessage {
    /**
     * The DB instance identifier. This parameter is stored as a lowercase string. Constraints:   Must match the identifier of an existing DBInstance.  
     */
    DBInstanceIdentifier: String;
    /**
     *  When true, the reboot is conducted through a Multi-AZ failover.  Constraint: You can't specify true if the instance is not configured for Multi-AZ.
     */
    ForceFailover?: BooleanOptional;
  }
  export interface RebootDBInstanceResult {
    DBInstance?: DBInstance;
  }
  export interface RemoveTagsFromResourceMessage {
    /**
     * The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource Name (ARN).
     */
    ResourceName: String;
    /**
     * The tag key (name) of the tag to be removed.
     */
    TagKeys: KeyList;
  }
  export interface ResetDBClusterParameterGroupMessage {
    /**
     * The name of the DB cluster parameter group to reset.
     */
    DBClusterParameterGroupName: String;
    /**
     * A value that is set to true to reset all parameters in the DB cluster parameter group to their default values, and false otherwise. You can't use this parameter if there is a list of parameter names specified for the Parameters parameter.
     */
    ResetAllParameters?: Boolean;
    /**
     * A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the ResetAllParameters parameter is set to true.
     */
    Parameters?: ParametersList;
  }
  export interface ResourcePendingMaintenanceActions {
    /**
     * The Amazon Resource Name (ARN) of the resource that has pending maintenance actions.
     */
    ResourceIdentifier?: String;
    /**
     * A list that provides details about the pending maintenance actions for the resource.
     */
    PendingMaintenanceActionDetails?: PendingMaintenanceActionDetails;
  }
  export interface RestoreDBClusterFromSnapshotMessage {
    /**
     * Provides the list of Amazon EC2 Availability Zones that instances in the restored DB cluster can be created in.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-snapshot-id 
     */
    DBClusterIdentifier: String;
    /**
     * The identifier for the DB snapshot or DB cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot. Constraints:   Must match the identifier of an existing snapshot.  
     */
    SnapshotIdentifier: String;
    /**
     * The database engine to use for the new DB cluster. Default: The same as source. Constraint: Must be compatible with the engine of the source.
     */
    Engine: String;
    /**
     * The version of the database engine to use for the new DB cluster.
     */
    EngineVersion?: String;
    /**
     * The port number on which the new DB cluster accepts connections. Constraints: Must be a value from 1150 to 65535. Default: The same port as the original DB cluster.
     */
    Port?: IntegerOptional;
    /**
     * The name of the DB subnet group to use for the new DB cluster. Constraints: If provided, must match the name of an existing DBSubnetGroup. Example: mySubnetgroup 
     */
    DBSubnetGroupName?: String;
    /**
     * A list of virtual private cloud (VPC) security groups that the new DB cluster will belong to.
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The tags to be assigned to the restored DB cluster.
     */
    Tags?: TagList;
    /**
     * The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot. The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the AWS KMS encryption key used to encrypt the new DB cluster, then you can use the AWS KMS key alias instead of the ARN for the AWS KMS encryption key. If you do not specify a value for the KmsKeyId parameter, then the following occurs:   If the DB snapshot or DB cluster snapshot in SnapshotIdentifier is encrypted, then the restored DB cluster is encrypted using the AWS KMS key that was used to encrypt the DB snapshot or the DB cluster snapshot.   If the DB snapshot or the DB cluster snapshot in SnapshotIdentifier is not encrypted, then the restored DB cluster is not encrypted.  
     */
    KmsKeyId?: String;
    /**
     * A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.
     */
    EnableCloudwatchLogsExports?: LogTypeList;
  }
  export interface RestoreDBClusterFromSnapshotResult {
    DBCluster?: DBCluster;
  }
  export interface RestoreDBClusterToPointInTimeMessage {
    /**
     * The name of the new DB cluster to be created. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    DBClusterIdentifier: String;
    /**
     * The identifier of the source DB cluster from which to restore. Constraints:   Must match the identifier of an existing DBCluster.  
     */
    SourceDBClusterIdentifier: String;
    /**
     * The date and time to restore the DB cluster to. Valid values: A time in Universal Coordinated Time (UTC) format. Constraints:   Must be before the latest restorable time for the DB instance.   Must be specified if the UseLatestRestorableTime parameter is not provided.   Cannot be specified if the UseLatestRestorableTime parameter is true.   Cannot be specified if the RestoreType parameter is copy-on-write.   Example: 2015-03-07T23:45:00Z 
     */
    RestoreToTime?: TStamp;
    /**
     * A value that is set to true to restore the DB cluster to the latest restorable backup time, and false otherwise.  Default: false  Constraints: Cannot be specified if the RestoreToTime parameter is provided.
     */
    UseLatestRestorableTime?: Boolean;
    /**
     * The port number on which the new DB cluster accepts connections. Constraints: Must be a value from 1150 to 65535.  Default: The default port for the engine.
     */
    Port?: IntegerOptional;
    /**
     * The DB subnet group name to use for the new DB cluster. Constraints: If provided, must match the name of an existing DBSubnetGroup. Example: mySubnetgroup 
     */
    DBSubnetGroupName?: String;
    /**
     * A list of VPC security groups that the new DB cluster belongs to.
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The tags to be assigned to the restored DB cluster.
     */
    Tags?: TagList;
    /**
     * The AWS KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster. The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the AWS KMS encryption key used to encrypt the new DB cluster, then you can use the AWS KMS key alias instead of the ARN for the AWS KMS encryption key. You can restore to a new DB cluster and encrypt the new DB cluster with an AWS KMS key that is different from the AWS KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the AWS KMS key identified by the KmsKeyId parameter. If you do not specify a value for the KmsKeyId parameter, then the following occurs:   If the DB cluster is encrypted, then the restored DB cluster is encrypted using the AWS KMS key that was used to encrypt the source DB cluster.   If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.   If DBClusterIdentifier refers to a DB cluster that is not encrypted, then the restore request is rejected.
     */
    KmsKeyId?: String;
    /**
     * A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.
     */
    EnableCloudwatchLogsExports?: LogTypeList;
  }
  export interface RestoreDBClusterToPointInTimeResult {
    DBCluster?: DBCluster;
  }
  export type SourceType = "db-instance"|"db-parameter-group"|"db-security-group"|"db-snapshot"|"db-cluster"|"db-cluster-snapshot"|string;
  export type String = string;
  export interface Subnet {
    /**
     * Specifies the identifier of the subnet.
     */
    SubnetIdentifier?: String;
    /**
     * Specifies the Availability Zone for the subnet.
     */
    SubnetAvailabilityZone?: AvailabilityZone;
    /**
     * Specifies the status of the subnet.
     */
    SubnetStatus?: String;
  }
  export type SubnetIdentifierList = String[];
  export type SubnetList = Subnet[];
  export type TStamp = Date;
  export interface Tag {
    /**
     * The required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with "aws:" or "rds:". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Key?: String;
    /**
     * The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with "aws:" or "rds:". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Value?: String;
  }
  export type TagList = Tag[];
  export interface TagListMessage {
    /**
     * A list of one or more tags.
     */
    TagList?: TagList;
  }
  export interface UpgradeTarget {
    /**
     * The name of the upgrade target database engine.
     */
    Engine?: String;
    /**
     * The version number of the upgrade target database engine.
     */
    EngineVersion?: String;
    /**
     * The version of the database engine that a DB instance can be upgraded to.
     */
    Description?: String;
    /**
     * A value that indicates whether the target version is applied to any source DB instances that have AutoMinorVersionUpgrade set to true.
     */
    AutoUpgrade?: Boolean;
    /**
     * A value that indicates whether a database engine is upgraded to a major version.
     */
    IsMajorVersionUpgrade?: Boolean;
  }
  export type ValidUpgradeTargetList = UpgradeTarget[];
  export type VpcSecurityGroupIdList = String[];
  export interface VpcSecurityGroupMembership {
    /**
     * The name of the VPC security group.
     */
    VpcSecurityGroupId?: String;
    /**
     * The status of the VPC security group.
     */
    Status?: String;
  }
  export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-10-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DocDB client.
   */
  export import Types = DocDB;
}
export = DocDB;
