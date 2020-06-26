import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DMS.Types.ClientConfiguration)
  config: Config & DMS.Types.ClientConfiguration;
  /**
   * Adds metadata tags to an AWS DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS.
   */
  addTagsToResource(params: DMS.Types.AddTagsToResourceMessage, callback?: (err: AWSError, data: DMS.Types.AddTagsToResourceResponse) => void): Request<DMS.Types.AddTagsToResourceResponse, AWSError>;
  /**
   * Adds metadata tags to an AWS DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS.
   */
  addTagsToResource(callback?: (err: AWSError, data: DMS.Types.AddTagsToResourceResponse) => void): Request<DMS.Types.AddTagsToResourceResponse, AWSError>;
  /**
   * Applies a pending maintenance action to a resource (for example, to a replication instance).
   */
  applyPendingMaintenanceAction(params: DMS.Types.ApplyPendingMaintenanceActionMessage, callback?: (err: AWSError, data: DMS.Types.ApplyPendingMaintenanceActionResponse) => void): Request<DMS.Types.ApplyPendingMaintenanceActionResponse, AWSError>;
  /**
   * Applies a pending maintenance action to a resource (for example, to a replication instance).
   */
  applyPendingMaintenanceAction(callback?: (err: AWSError, data: DMS.Types.ApplyPendingMaintenanceActionResponse) => void): Request<DMS.Types.ApplyPendingMaintenanceActionResponse, AWSError>;
  /**
   * Creates an endpoint using the provided settings.
   */
  createEndpoint(params: DMS.Types.CreateEndpointMessage, callback?: (err: AWSError, data: DMS.Types.CreateEndpointResponse) => void): Request<DMS.Types.CreateEndpointResponse, AWSError>;
  /**
   * Creates an endpoint using the provided settings.
   */
  createEndpoint(callback?: (err: AWSError, data: DMS.Types.CreateEndpointResponse) => void): Request<DMS.Types.CreateEndpointResponse, AWSError>;
  /**
   *  Creates an AWS DMS event notification subscription.  You can specify the type of source (SourceType) you want to be notified of, provide a list of AWS DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all AWS DMS sources belonging to your customer account. For more information about AWS DMS events, see Working with Events and Notifications in the AWS Database Migration Service User Guide. 
   */
  createEventSubscription(params: DMS.Types.CreateEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.CreateEventSubscriptionResponse) => void): Request<DMS.Types.CreateEventSubscriptionResponse, AWSError>;
  /**
   *  Creates an AWS DMS event notification subscription.  You can specify the type of source (SourceType) you want to be notified of, provide a list of AWS DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all AWS DMS sources belonging to your customer account. For more information about AWS DMS events, see Working with Events and Notifications in the AWS Database Migration Service User Guide. 
   */
  createEventSubscription(callback?: (err: AWSError, data: DMS.Types.CreateEventSubscriptionResponse) => void): Request<DMS.Types.CreateEventSubscriptionResponse, AWSError>;
  /**
   * Creates the replication instance using the specified parameters. AWS DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the AWS CLI and AWS DMS API. For information on the required permissions, see IAM Permissions Needed to Use AWS DMS.
   */
  createReplicationInstance(params: DMS.Types.CreateReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationInstanceResponse) => void): Request<DMS.Types.CreateReplicationInstanceResponse, AWSError>;
  /**
   * Creates the replication instance using the specified parameters. AWS DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the AWS CLI and AWS DMS API. For information on the required permissions, see IAM Permissions Needed to Use AWS DMS.
   */
  createReplicationInstance(callback?: (err: AWSError, data: DMS.Types.CreateReplicationInstanceResponse) => void): Request<DMS.Types.CreateReplicationInstanceResponse, AWSError>;
  /**
   * Creates a replication subnet group given a list of the subnet IDs in a VPC.
   */
  createReplicationSubnetGroup(params: DMS.Types.CreateReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationSubnetGroupResponse) => void): Request<DMS.Types.CreateReplicationSubnetGroupResponse, AWSError>;
  /**
   * Creates a replication subnet group given a list of the subnet IDs in a VPC.
   */
  createReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.CreateReplicationSubnetGroupResponse) => void): Request<DMS.Types.CreateReplicationSubnetGroupResponse, AWSError>;
  /**
   * Creates a replication task using the specified parameters.
   */
  createReplicationTask(params: DMS.Types.CreateReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationTaskResponse) => void): Request<DMS.Types.CreateReplicationTaskResponse, AWSError>;
  /**
   * Creates a replication task using the specified parameters.
   */
  createReplicationTask(callback?: (err: AWSError, data: DMS.Types.CreateReplicationTaskResponse) => void): Request<DMS.Types.CreateReplicationTaskResponse, AWSError>;
  /**
   * Deletes the specified certificate. 
   */
  deleteCertificate(params: DMS.Types.DeleteCertificateMessage, callback?: (err: AWSError, data: DMS.Types.DeleteCertificateResponse) => void): Request<DMS.Types.DeleteCertificateResponse, AWSError>;
  /**
   * Deletes the specified certificate. 
   */
  deleteCertificate(callback?: (err: AWSError, data: DMS.Types.DeleteCertificateResponse) => void): Request<DMS.Types.DeleteCertificateResponse, AWSError>;
  /**
   * Deletes the connection between a replication instance and an endpoint.
   */
  deleteConnection(params: DMS.Types.DeleteConnectionMessage, callback?: (err: AWSError, data: DMS.Types.DeleteConnectionResponse) => void): Request<DMS.Types.DeleteConnectionResponse, AWSError>;
  /**
   * Deletes the connection between a replication instance and an endpoint.
   */
  deleteConnection(callback?: (err: AWSError, data: DMS.Types.DeleteConnectionResponse) => void): Request<DMS.Types.DeleteConnectionResponse, AWSError>;
  /**
   * Deletes the specified endpoint.  All tasks associated with the endpoint must be deleted before you can delete the endpoint.  
   */
  deleteEndpoint(params: DMS.Types.DeleteEndpointMessage, callback?: (err: AWSError, data: DMS.Types.DeleteEndpointResponse) => void): Request<DMS.Types.DeleteEndpointResponse, AWSError>;
  /**
   * Deletes the specified endpoint.  All tasks associated with the endpoint must be deleted before you can delete the endpoint.  
   */
  deleteEndpoint(callback?: (err: AWSError, data: DMS.Types.DeleteEndpointResponse) => void): Request<DMS.Types.DeleteEndpointResponse, AWSError>;
  /**
   *  Deletes an AWS DMS event subscription. 
   */
  deleteEventSubscription(params: DMS.Types.DeleteEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.DeleteEventSubscriptionResponse) => void): Request<DMS.Types.DeleteEventSubscriptionResponse, AWSError>;
  /**
   *  Deletes an AWS DMS event subscription. 
   */
  deleteEventSubscription(callback?: (err: AWSError, data: DMS.Types.DeleteEventSubscriptionResponse) => void): Request<DMS.Types.DeleteEventSubscriptionResponse, AWSError>;
  /**
   * Deletes the specified replication instance.  You must delete any migration tasks that are associated with the replication instance before you can delete it.  
   */
  deleteReplicationInstance(params: DMS.Types.DeleteReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationInstanceResponse) => void): Request<DMS.Types.DeleteReplicationInstanceResponse, AWSError>;
  /**
   * Deletes the specified replication instance.  You must delete any migration tasks that are associated with the replication instance before you can delete it.  
   */
  deleteReplicationInstance(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationInstanceResponse) => void): Request<DMS.Types.DeleteReplicationInstanceResponse, AWSError>;
  /**
   * Deletes a subnet group.
   */
  deleteReplicationSubnetGroup(params: DMS.Types.DeleteReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationSubnetGroupResponse) => void): Request<DMS.Types.DeleteReplicationSubnetGroupResponse, AWSError>;
  /**
   * Deletes a subnet group.
   */
  deleteReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationSubnetGroupResponse) => void): Request<DMS.Types.DeleteReplicationSubnetGroupResponse, AWSError>;
  /**
   * Deletes the specified replication task.
   */
  deleteReplicationTask(params: DMS.Types.DeleteReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationTaskResponse) => void): Request<DMS.Types.DeleteReplicationTaskResponse, AWSError>;
  /**
   * Deletes the specified replication task.
   */
  deleteReplicationTask(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationTaskResponse) => void): Request<DMS.Types.DeleteReplicationTaskResponse, AWSError>;
  /**
   * Lists all of the AWS DMS attributes for a customer account. These attributes include AWS DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region. This command does not take any parameters.
   */
  describeAccountAttributes(params: DMS.Types.DescribeAccountAttributesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeAccountAttributesResponse) => void): Request<DMS.Types.DescribeAccountAttributesResponse, AWSError>;
  /**
   * Lists all of the AWS DMS attributes for a customer account. These attributes include AWS DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region. This command does not take any parameters.
   */
  describeAccountAttributes(callback?: (err: AWSError, data: DMS.Types.DescribeAccountAttributesResponse) => void): Request<DMS.Types.DescribeAccountAttributesResponse, AWSError>;
  /**
   * Provides a description of the certificate.
   */
  describeCertificates(params: DMS.Types.DescribeCertificatesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeCertificatesResponse) => void): Request<DMS.Types.DescribeCertificatesResponse, AWSError>;
  /**
   * Provides a description of the certificate.
   */
  describeCertificates(callback?: (err: AWSError, data: DMS.Types.DescribeCertificatesResponse) => void): Request<DMS.Types.DescribeCertificatesResponse, AWSError>;
  /**
   * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
   */
  describeConnections(params: DMS.Types.DescribeConnectionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
   */
  describeConnections(callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Returns information about the type of endpoints available.
   */
  describeEndpointTypes(params: DMS.Types.DescribeEndpointTypesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointTypesResponse) => void): Request<DMS.Types.DescribeEndpointTypesResponse, AWSError>;
  /**
   * Returns information about the type of endpoints available.
   */
  describeEndpointTypes(callback?: (err: AWSError, data: DMS.Types.DescribeEndpointTypesResponse) => void): Request<DMS.Types.DescribeEndpointTypesResponse, AWSError>;
  /**
   * Returns information about the endpoints for your account in the current region.
   */
  describeEndpoints(params: DMS.Types.DescribeEndpointsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Returns information about the endpoints for your account in the current region.
   */
  describeEndpoints(callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in Working with Events and Notifications in the AWS Database Migration Service User Guide. 
   */
  describeEventCategories(params: DMS.Types.DescribeEventCategoriesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventCategoriesResponse) => void): Request<DMS.Types.DescribeEventCategoriesResponse, AWSError>;
  /**
   * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in Working with Events and Notifications in the AWS Database Migration Service User Guide. 
   */
  describeEventCategories(callback?: (err: AWSError, data: DMS.Types.DescribeEventCategoriesResponse) => void): Request<DMS.Types.DescribeEventCategoriesResponse, AWSError>;
  /**
   * Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.  If you specify SubscriptionName, this action lists the description for that subscription.
   */
  describeEventSubscriptions(params: DMS.Types.DescribeEventSubscriptionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventSubscriptionsResponse) => void): Request<DMS.Types.DescribeEventSubscriptionsResponse, AWSError>;
  /**
   * Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.  If you specify SubscriptionName, this action lists the description for that subscription.
   */
  describeEventSubscriptions(callback?: (err: AWSError, data: DMS.Types.DescribeEventSubscriptionsResponse) => void): Request<DMS.Types.DescribeEventSubscriptionsResponse, AWSError>;
  /**
   *  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see Working with Events and Notifications in the AWS Database Migration User Guide. 
   */
  describeEvents(params: DMS.Types.DescribeEventsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventsResponse) => void): Request<DMS.Types.DescribeEventsResponse, AWSError>;
  /**
   *  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see Working with Events and Notifications in the AWS Database Migration User Guide. 
   */
  describeEvents(callback?: (err: AWSError, data: DMS.Types.DescribeEventsResponse) => void): Request<DMS.Types.DescribeEventsResponse, AWSError>;
  /**
   * Returns information about the replication instance types that can be created in the specified region.
   */
  describeOrderableReplicationInstances(params: DMS.Types.DescribeOrderableReplicationInstancesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeOrderableReplicationInstancesResponse) => void): Request<DMS.Types.DescribeOrderableReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about the replication instance types that can be created in the specified region.
   */
  describeOrderableReplicationInstances(callback?: (err: AWSError, data: DMS.Types.DescribeOrderableReplicationInstancesResponse) => void): Request<DMS.Types.DescribeOrderableReplicationInstancesResponse, AWSError>;
  /**
   * For internal use only
   */
  describePendingMaintenanceActions(params: DMS.Types.DescribePendingMaintenanceActionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribePendingMaintenanceActionsResponse) => void): Request<DMS.Types.DescribePendingMaintenanceActionsResponse, AWSError>;
  /**
   * For internal use only
   */
  describePendingMaintenanceActions(callback?: (err: AWSError, data: DMS.Types.DescribePendingMaintenanceActionsResponse) => void): Request<DMS.Types.DescribePendingMaintenanceActionsResponse, AWSError>;
  /**
   * Returns the status of the RefreshSchemas operation.
   */
  describeRefreshSchemasStatus(params: DMS.Types.DescribeRefreshSchemasStatusMessage, callback?: (err: AWSError, data: DMS.Types.DescribeRefreshSchemasStatusResponse) => void): Request<DMS.Types.DescribeRefreshSchemasStatusResponse, AWSError>;
  /**
   * Returns the status of the RefreshSchemas operation.
   */
  describeRefreshSchemasStatus(callback?: (err: AWSError, data: DMS.Types.DescribeRefreshSchemasStatusResponse) => void): Request<DMS.Types.DescribeRefreshSchemasStatusResponse, AWSError>;
  /**
   * Returns information about the task logs for the specified task.
   */
  describeReplicationInstanceTaskLogs(params: DMS.Types.DescribeReplicationInstanceTaskLogsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstanceTaskLogsResponse) => void): Request<DMS.Types.DescribeReplicationInstanceTaskLogsResponse, AWSError>;
  /**
   * Returns information about the task logs for the specified task.
   */
  describeReplicationInstanceTaskLogs(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstanceTaskLogsResponse) => void): Request<DMS.Types.DescribeReplicationInstanceTaskLogsResponse, AWSError>;
  /**
   * Returns information about replication instances for your account in the current region.
   */
  describeReplicationInstances(params: DMS.Types.DescribeReplicationInstancesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about replication instances for your account in the current region.
   */
  describeReplicationInstances(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about the replication subnet groups.
   */
  describeReplicationSubnetGroups(params: DMS.Types.DescribeReplicationSubnetGroupsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationSubnetGroupsResponse) => void): Request<DMS.Types.DescribeReplicationSubnetGroupsResponse, AWSError>;
  /**
   * Returns information about the replication subnet groups.
   */
  describeReplicationSubnetGroups(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationSubnetGroupsResponse) => void): Request<DMS.Types.DescribeReplicationSubnetGroupsResponse, AWSError>;
  /**
   * Returns the task assessment results from Amazon S3. This action always returns the latest results.
   */
  describeReplicationTaskAssessmentResults(params: DMS.Types.DescribeReplicationTaskAssessmentResultsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTaskAssessmentResultsResponse) => void): Request<DMS.Types.DescribeReplicationTaskAssessmentResultsResponse, AWSError>;
  /**
   * Returns the task assessment results from Amazon S3. This action always returns the latest results.
   */
  describeReplicationTaskAssessmentResults(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTaskAssessmentResultsResponse) => void): Request<DMS.Types.DescribeReplicationTaskAssessmentResultsResponse, AWSError>;
  /**
   * Returns information about replication tasks for your account in the current region.
   */
  describeReplicationTasks(params: DMS.Types.DescribeReplicationTasksMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Returns information about replication tasks for your account in the current region.
   */
  describeReplicationTasks(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Returns information about the schema for the specified endpoint. 
   */
  describeSchemas(params: DMS.Types.DescribeSchemasMessage, callback?: (err: AWSError, data: DMS.Types.DescribeSchemasResponse) => void): Request<DMS.Types.DescribeSchemasResponse, AWSError>;
  /**
   * Returns information about the schema for the specified endpoint. 
   */
  describeSchemas(callback?: (err: AWSError, data: DMS.Types.DescribeSchemasResponse) => void): Request<DMS.Types.DescribeSchemasResponse, AWSError>;
  /**
   * Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.
   */
  describeTableStatistics(params: DMS.Types.DescribeTableStatisticsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeTableStatisticsResponse) => void): Request<DMS.Types.DescribeTableStatisticsResponse, AWSError>;
  /**
   * Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.
   */
  describeTableStatistics(callback?: (err: AWSError, data: DMS.Types.DescribeTableStatisticsResponse) => void): Request<DMS.Types.DescribeTableStatisticsResponse, AWSError>;
  /**
   * Uploads the specified certificate.
   */
  importCertificate(params: DMS.Types.ImportCertificateMessage, callback?: (err: AWSError, data: DMS.Types.ImportCertificateResponse) => void): Request<DMS.Types.ImportCertificateResponse, AWSError>;
  /**
   * Uploads the specified certificate.
   */
  importCertificate(callback?: (err: AWSError, data: DMS.Types.ImportCertificateResponse) => void): Request<DMS.Types.ImportCertificateResponse, AWSError>;
  /**
   * Lists all tags for an AWS DMS resource.
   */
  listTagsForResource(params: DMS.Types.ListTagsForResourceMessage, callback?: (err: AWSError, data: DMS.Types.ListTagsForResourceResponse) => void): Request<DMS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags for an AWS DMS resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: DMS.Types.ListTagsForResourceResponse) => void): Request<DMS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Modifies the specified endpoint.
   */
  modifyEndpoint(params: DMS.Types.ModifyEndpointMessage, callback?: (err: AWSError, data: DMS.Types.ModifyEndpointResponse) => void): Request<DMS.Types.ModifyEndpointResponse, AWSError>;
  /**
   * Modifies the specified endpoint.
   */
  modifyEndpoint(callback?: (err: AWSError, data: DMS.Types.ModifyEndpointResponse) => void): Request<DMS.Types.ModifyEndpointResponse, AWSError>;
  /**
   * Modifies an existing AWS DMS event notification subscription. 
   */
  modifyEventSubscription(params: DMS.Types.ModifyEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.ModifyEventSubscriptionResponse) => void): Request<DMS.Types.ModifyEventSubscriptionResponse, AWSError>;
  /**
   * Modifies an existing AWS DMS event notification subscription. 
   */
  modifyEventSubscription(callback?: (err: AWSError, data: DMS.Types.ModifyEventSubscriptionResponse) => void): Request<DMS.Types.ModifyEventSubscriptionResponse, AWSError>;
  /**
   * Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window. 
   */
  modifyReplicationInstance(params: DMS.Types.ModifyReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationInstanceResponse) => void): Request<DMS.Types.ModifyReplicationInstanceResponse, AWSError>;
  /**
   * Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window. 
   */
  modifyReplicationInstance(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationInstanceResponse) => void): Request<DMS.Types.ModifyReplicationInstanceResponse, AWSError>;
  /**
   * Modifies the settings for the specified replication subnet group.
   */
  modifyReplicationSubnetGroup(params: DMS.Types.ModifyReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationSubnetGroupResponse) => void): Request<DMS.Types.ModifyReplicationSubnetGroupResponse, AWSError>;
  /**
   * Modifies the settings for the specified replication subnet group.
   */
  modifyReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationSubnetGroupResponse) => void): Request<DMS.Types.ModifyReplicationSubnetGroupResponse, AWSError>;
  /**
   * Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it.  For more information about AWS DMS tasks, see Working with Migration Tasks in the AWS Database Migration Service User Guide.
   */
  modifyReplicationTask(params: DMS.Types.ModifyReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationTaskResponse) => void): Request<DMS.Types.ModifyReplicationTaskResponse, AWSError>;
  /**
   * Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it.  For more information about AWS DMS tasks, see Working with Migration Tasks in the AWS Database Migration Service User Guide.
   */
  modifyReplicationTask(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationTaskResponse) => void): Request<DMS.Types.ModifyReplicationTaskResponse, AWSError>;
  /**
   * Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
   */
  rebootReplicationInstance(params: DMS.Types.RebootReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.RebootReplicationInstanceResponse) => void): Request<DMS.Types.RebootReplicationInstanceResponse, AWSError>;
  /**
   * Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
   */
  rebootReplicationInstance(callback?: (err: AWSError, data: DMS.Types.RebootReplicationInstanceResponse) => void): Request<DMS.Types.RebootReplicationInstanceResponse, AWSError>;
  /**
   * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
   */
  refreshSchemas(params: DMS.Types.RefreshSchemasMessage, callback?: (err: AWSError, data: DMS.Types.RefreshSchemasResponse) => void): Request<DMS.Types.RefreshSchemasResponse, AWSError>;
  /**
   * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
   */
  refreshSchemas(callback?: (err: AWSError, data: DMS.Types.RefreshSchemasResponse) => void): Request<DMS.Types.RefreshSchemasResponse, AWSError>;
  /**
   * Reloads the target database table with the source data. 
   */
  reloadTables(params: DMS.Types.ReloadTablesMessage, callback?: (err: AWSError, data: DMS.Types.ReloadTablesResponse) => void): Request<DMS.Types.ReloadTablesResponse, AWSError>;
  /**
   * Reloads the target database table with the source data. 
   */
  reloadTables(callback?: (err: AWSError, data: DMS.Types.ReloadTablesResponse) => void): Request<DMS.Types.ReloadTablesResponse, AWSError>;
  /**
   * Removes metadata tags from a DMS resource.
   */
  removeTagsFromResource(params: DMS.Types.RemoveTagsFromResourceMessage, callback?: (err: AWSError, data: DMS.Types.RemoveTagsFromResourceResponse) => void): Request<DMS.Types.RemoveTagsFromResourceResponse, AWSError>;
  /**
   * Removes metadata tags from a DMS resource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: DMS.Types.RemoveTagsFromResourceResponse) => void): Request<DMS.Types.RemoveTagsFromResourceResponse, AWSError>;
  /**
   * Starts the replication task. For more information about AWS DMS tasks, see Working with Migration Tasks  in the AWS Database Migration Service User Guide. 
   */
  startReplicationTask(params: DMS.Types.StartReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskResponse) => void): Request<DMS.Types.StartReplicationTaskResponse, AWSError>;
  /**
   * Starts the replication task. For more information about AWS DMS tasks, see Working with Migration Tasks  in the AWS Database Migration Service User Guide. 
   */
  startReplicationTask(callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskResponse) => void): Request<DMS.Types.StartReplicationTaskResponse, AWSError>;
  /**
   *  Starts the replication task assessment for unsupported data types in the source database. 
   */
  startReplicationTaskAssessment(params: DMS.Types.StartReplicationTaskAssessmentMessage, callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskAssessmentResponse) => void): Request<DMS.Types.StartReplicationTaskAssessmentResponse, AWSError>;
  /**
   *  Starts the replication task assessment for unsupported data types in the source database. 
   */
  startReplicationTaskAssessment(callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskAssessmentResponse) => void): Request<DMS.Types.StartReplicationTaskAssessmentResponse, AWSError>;
  /**
   * Stops the replication task. 
   */
  stopReplicationTask(params: DMS.Types.StopReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.StopReplicationTaskResponse) => void): Request<DMS.Types.StopReplicationTaskResponse, AWSError>;
  /**
   * Stops the replication task. 
   */
  stopReplicationTask(callback?: (err: AWSError, data: DMS.Types.StopReplicationTaskResponse) => void): Request<DMS.Types.StopReplicationTaskResponse, AWSError>;
  /**
   * Tests the connection between the replication instance and the endpoint.
   */
  testConnection(params: DMS.Types.TestConnectionMessage, callback?: (err: AWSError, data: DMS.Types.TestConnectionResponse) => void): Request<DMS.Types.TestConnectionResponse, AWSError>;
  /**
   * Tests the connection between the replication instance and the endpoint.
   */
  testConnection(callback?: (err: AWSError, data: DMS.Types.TestConnectionResponse) => void): Request<DMS.Types.TestConnectionResponse, AWSError>;
  /**
   * Waits for the testConnectionSucceeds state by periodically calling the underlying DMS.describeConnectionsoperation every 5 seconds (at most 60 times). Wait until testing connection succeeds.
   */
  waitFor(state: "testConnectionSucceeds", params: DMS.Types.DescribeConnectionsMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Waits for the testConnectionSucceeds state by periodically calling the underlying DMS.describeConnectionsoperation every 5 seconds (at most 60 times). Wait until testing connection succeeds.
   */
  waitFor(state: "testConnectionSucceeds", callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Waits for the endpointDeleted state by periodically calling the underlying DMS.describeEndpointsoperation every 5 seconds (at most 60 times). Wait until testing endpoint is deleted.
   */
  waitFor(state: "endpointDeleted", params: DMS.Types.DescribeEndpointsMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Waits for the endpointDeleted state by periodically calling the underlying DMS.describeEndpointsoperation every 5 seconds (at most 60 times). Wait until testing endpoint is deleted.
   */
  waitFor(state: "endpointDeleted", callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Waits for the replicationInstanceAvailable state by periodically calling the underlying DMS.describeReplicationInstancesoperation every 60 seconds (at most 60 times). Wait until DMS replication instance is available.
   */
  waitFor(state: "replicationInstanceAvailable", params: DMS.Types.DescribeReplicationInstancesMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Waits for the replicationInstanceAvailable state by periodically calling the underlying DMS.describeReplicationInstancesoperation every 60 seconds (at most 60 times). Wait until DMS replication instance is available.
   */
  waitFor(state: "replicationInstanceAvailable", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Waits for the replicationInstanceDeleted state by periodically calling the underlying DMS.describeReplicationInstancesoperation every 15 seconds (at most 60 times). Wait until DMS replication instance is deleted.
   */
  waitFor(state: "replicationInstanceDeleted", params: DMS.Types.DescribeReplicationInstancesMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Waits for the replicationInstanceDeleted state by periodically calling the underlying DMS.describeReplicationInstancesoperation every 15 seconds (at most 60 times). Wait until DMS replication instance is deleted.
   */
  waitFor(state: "replicationInstanceDeleted", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Waits for the replicationTaskReady state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is ready.
   */
  waitFor(state: "replicationTaskReady", params: DMS.Types.DescribeReplicationTasksMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskReady state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is ready.
   */
  waitFor(state: "replicationTaskReady", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskStopped state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is stopped.
   */
  waitFor(state: "replicationTaskStopped", params: DMS.Types.DescribeReplicationTasksMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskStopped state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is stopped.
   */
  waitFor(state: "replicationTaskStopped", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskRunning state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is running.
   */
  waitFor(state: "replicationTaskRunning", params: DMS.Types.DescribeReplicationTasksMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskRunning state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is running.
   */
  waitFor(state: "replicationTaskRunning", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskDeleted state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is deleted.
   */
  waitFor(state: "replicationTaskDeleted", params: DMS.Types.DescribeReplicationTasksMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskDeleted state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is deleted.
   */
  waitFor(state: "replicationTaskDeleted", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
}
declare namespace DMS {
  export interface AccountQuota {
    /**
     * The name of the AWS DMS quota for this AWS account.
     */
    AccountQuotaName?: String;
    /**
     * The amount currently used toward the quota maximum.
     */
    Used?: Long;
    /**
     * The maximum allowed value for the quota.
     */
    Max?: Long;
  }
  export type AccountQuotaList = AccountQuota[];
  export interface AddTagsToResourceMessage {
    /**
     * Identifies the AWS DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN). For AWS DMS, you can tag a replication instance, an endpoint, or a replication task.
     */
    ResourceArn: String;
    /**
     * One or more tags to be assigned to the resource.
     */
    Tags: TagList;
  }
  export interface AddTagsToResourceResponse {
  }
  export interface ApplyPendingMaintenanceActionMessage {
    /**
     * The Amazon Resource Name (ARN) of the AWS DMS resource that the pending maintenance action applies to.
     */
    ReplicationInstanceArn: String;
    /**
     * The pending maintenance action to apply to this resource.
     */
    ApplyAction: String;
    /**
     * A value that specifies the type of opt-in request, or undoes an opt-in request. You can't undo an opt-in request of type immediate. Valid values:    immediate - Apply the maintenance action immediately.    next-maintenance - Apply the maintenance action during the next maintenance window for the resource.    undo-opt-in - Cancel any existing next-maintenance opt-in requests.  
     */
    OptInType: String;
  }
  export interface ApplyPendingMaintenanceActionResponse {
    /**
     * The AWS DMS resource that the pending maintenance action will be applied to.
     */
    ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
  }
  export type AuthMechanismValue = "default"|"mongodb_cr"|"scram_sha_1"|string;
  export type AuthTypeValue = "no"|"password"|string;
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone.
     */
    Name?: String;
  }
  export type AvailabilityZonesList = String[];
  export type Boolean = boolean;
  export type BooleanOptional = boolean;
  export interface Certificate {
    /**
     * A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    CertificateIdentifier?: String;
    /**
     * The date that the certificate was created.
     */
    CertificateCreationDate?: TStamp;
    /**
     * The contents of a .pem file, which contains an X.509 certificate.
     */
    CertificatePem?: String;
    /**
     * The location of an imported Oracle Wallet certificate for use with SSL.
     */
    CertificateWallet?: CertificateWallet;
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    CertificateArn?: String;
    /**
     * The owner of the certificate.
     */
    CertificateOwner?: String;
    /**
     * The beginning date that the certificate is valid.
     */
    ValidFromDate?: TStamp;
    /**
     * The final date that the certificate is valid.
     */
    ValidToDate?: TStamp;
    /**
     * The signing algorithm for the certificate.
     */
    SigningAlgorithm?: String;
    /**
     * The key length of the cryptographic algorithm being used.
     */
    KeyLength?: IntegerOptional;
  }
  export type CertificateList = Certificate[];
  export type CertificateWallet = Buffer|Uint8Array|Blob|string;
  export type CompressionTypeValue = "none"|"gzip"|string;
  export interface Connection {
    /**
     * The ARN of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The ARN string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The connection status. This parameter can return one of the following values:    "successful"     "testing"     "failed"     "deleting"   
     */
    Status?: String;
    /**
     * The error message when the connection last failed.
     */
    LastFailureMessage?: String;
    /**
     * The identifier of the endpoint. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    ReplicationInstanceIdentifier?: String;
  }
  export type ConnectionList = Connection[];
  export interface CreateEndpointMessage {
    /**
     * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier: String;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    EndpointType: ReplicationEndpointTypeValue;
    /**
     * The type of engine for the endpoint. Valid values, depending on the EndpointType value, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", and "neptune".
     */
    EngineName: String;
    /**
     * The user name to be used to log in to the endpoint database.
     */
    Username?: String;
    /**
     * The password to be used to log in to the endpoint database.
     */
    Password?: SecretString;
    /**
     * The name of the server where the endpoint database resides.
     */
    ServerName?: String;
    /**
     * The port used by the endpoint database.
     */
    Port?: IntegerOptional;
    /**
     * The name of the endpoint database.
     */
    DatabaseName?: String;
    /**
     * Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see Working with AWS DMS Endpoints in the AWS Database Migration Service User Guide. 
     */
    ExtraConnectionAttributes?: String;
    /**
     * An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.
     */
    KmsKeyId?: String;
    /**
     * One or more tags to be assigned to the endpoint.
     */
    Tags?: TagList;
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    CertificateArn?: String;
    /**
     * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none 
     */
    SslMode?: DmsSslModeValue;
    /**
     *  The Amazon Resource Name (ARN) for the service access role that you want to use to create the endpoint. 
     */
    ServiceAccessRoleArn?: String;
    /**
     * The external table definition. 
     */
    ExternalTableDefinition?: String;
    /**
     * Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the AWS Database Migration Service User Guide. 
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for AWS DMS in the AWS Database Migration Service User Guide. 
     */
    S3Settings?: S3Settings;
    /**
     * The settings in JSON format for the DMS transfer type of source endpoint.  Possible settings include the following:    ServiceAccessRoleArn - The IAM role that has permission to access the Amazon S3 bucket.    BucketName - The name of the S3 bucket to use.    CompressionType - An optional parameter to use GZIP to compress the target files. To use GZIP, set this value to NONE (the default). To keep the files uncompressed, don't use this value.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string,BucketName=string,CompressionType=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" }  
     */
    DmsTransferSettings?: DmsTransferSettings;
    /**
     * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see Using MongoDB as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide. 
     */
    MongoDbSettings?: MongoDbSettings;
    /**
     * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using Amazon Kinesis Data Streams as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide. 
     */
    KinesisSettings?: KinesisSettings;
    /**
     * Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using Apache Kafka as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide. 
     */
    KafkaSettings?: KafkaSettings;
    /**
     * Settings in JSON format for the target Elasticsearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS in the AWS Database Migration Service User Guide.
     */
    ElasticsearchSettings?: ElasticsearchSettings;
    /**
     * Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying Endpoint Settings for Amazon Neptune as a Target in the AWS Database Migration Service User Guide. 
     */
    NeptuneSettings?: NeptuneSettings;
    RedshiftSettings?: RedshiftSettings;
  }
  export interface CreateEndpointResponse {
    /**
     * The endpoint that was created.
     */
    Endpoint?: Endpoint;
  }
  export interface CreateEventSubscriptionMessage {
    /**
     * The name of the AWS DMS event notification subscription. This name must be less than 255 characters.
     */
    SubscriptionName: String;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it. 
     */
    SnsTopicArn: String;
    /**
     *  The type of AWS DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned.  Valid values: replication-instance | replication-task 
     */
    SourceType?: String;
    /**
     * A list of event categories for a source type that you want to subscribe to. For more information, see Working with Events and Notifications in the AWS Database Migration Service User Guide. 
     */
    EventCategories?: EventCategoriesList;
    /**
     * A list of identifiers for which AWS DMS provides notification events. If you don't specify a value, notifications are provided for all sources. If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.
     */
    SourceIds?: SourceIdsList;
    /**
     *  A Boolean value; set to true to activate the subscription, or set to false to create the subscription but not activate it. 
     */
    Enabled?: BooleanOptional;
    /**
     * One or more tags to be assigned to the event subscription.
     */
    Tags?: TagList;
  }
  export interface CreateEventSubscriptionResponse {
    /**
     * The event subscription that was created.
     */
    EventSubscription?: EventSubscription;
  }
  export interface CreateReplicationInstanceMessage {
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain 1-63 alphanumeric characters or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: myrepinstance 
     */
    ReplicationInstanceIdentifier: String;
    /**
     * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Selecting the right AWS DMS replication instance for your migration. 
     */
    ReplicationInstanceClass: String;
    /**
     *  Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. 
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The Availability Zone where the replication instance will be created. The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example: us-east-1d 
     */
    AvailabilityZone?: String;
    /**
     * A subnet group to associate with the replication instance.
     */
    ReplicationSubnetGroupIdentifier?: String;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi  Default: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     *  Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
    /**
     * A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to true. Default: true 
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * One or more tags to be assigned to the replication instance.
     */
    Tags?: TagList;
    /**
     * An AWS KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the KmsKeyId parameter, then AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.
     */
    KmsKeyId?: String;
    /**
     *  Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true. 
     */
    PubliclyAccessible?: BooleanOptional;
    /**
     * A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: "1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4" 
     */
    DnsNameServers?: String;
  }
  export interface CreateReplicationInstanceResponse {
    /**
     * The replication instance that was created.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface CreateReplicationSubnetGroupMessage {
    /**
     * The name for the replication subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens. Must not be "default". Example: mySubnetgroup 
     */
    ReplicationSubnetGroupIdentifier: String;
    /**
     * The description for the subnet group.
     */
    ReplicationSubnetGroupDescription: String;
    /**
     * One or more subnet IDs to be assigned to the subnet group.
     */
    SubnetIds: SubnetIdentifierList;
    /**
     * One or more tags to be assigned to the subnet group.
     */
    Tags?: TagList;
  }
  export interface CreateReplicationSubnetGroupResponse {
    /**
     * The replication subnet group that was created.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
  }
  export interface CreateReplicationTaskMessage {
    /**
     * An identifier for the replication task. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier: String;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
     */
    SourceEndpointArn: String;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
     */
    TargetEndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of a replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The migration type. Valid values: full-load | cdc | full-load-and-cdc 
     */
    MigrationType: MigrationTypeValue;
    /**
     * The table mappings for the task, in JSON format. For more information, see Using Table Mapping to Specify Task Settings in the AWS Database Migration Service User Guide. 
     */
    TableMappings: String;
    /**
     * Overall settings for the task, in JSON format. For more information, see Specifying Task Settings for AWS Database Migration Service Tasks in the AWS Database Migration User Guide. 
     */
    ReplicationTaskSettings?: String;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”
     */
    CdcStartTime?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for AWS DMS. 
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “
     */
    CdcStopPosition?: String;
    /**
     * One or more tags to be assigned to the replication task.
     */
    Tags?: TagList;
    /**
     * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the AWS Database Migration Service User Guide. 
     */
    TaskData?: String;
  }
  export interface CreateReplicationTaskResponse {
    /**
     * The replication task that was created.
     */
    ReplicationTask?: ReplicationTask;
  }
  export type DataFormatValue = "csv"|"parquet"|string;
  export interface DeleteCertificateMessage {
    /**
     * The Amazon Resource Name (ARN) of the deleted certificate.
     */
    CertificateArn: String;
  }
  export interface DeleteCertificateResponse {
    /**
     * The Secure Sockets Layer (SSL) certificate.
     */
    Certificate?: Certificate;
  }
  export interface DeleteConnectionMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
  }
  export interface DeleteConnectionResponse {
    /**
     * The connection that is being deleted.
     */
    Connection?: Connection;
  }
  export interface DeleteEndpointMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface DeleteEndpointResponse {
    /**
     * The endpoint that was deleted.
     */
    Endpoint?: Endpoint;
  }
  export interface DeleteEventSubscriptionMessage {
    /**
     * The name of the DMS event notification subscription to be deleted.
     */
    SubscriptionName: String;
  }
  export interface DeleteEventSubscriptionResponse {
    /**
     * The event subscription that was deleted.
     */
    EventSubscription?: EventSubscription;
  }
  export interface DeleteReplicationInstanceMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance to be deleted.
     */
    ReplicationInstanceArn: String;
  }
  export interface DeleteReplicationInstanceResponse {
    /**
     * The replication instance that was deleted.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface DeleteReplicationSubnetGroupMessage {
    /**
     * The subnet group name of the replication instance.
     */
    ReplicationSubnetGroupIdentifier: String;
  }
  export interface DeleteReplicationSubnetGroupResponse {
  }
  export interface DeleteReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task to be deleted.
     */
    ReplicationTaskArn: String;
  }
  export interface DeleteReplicationTaskResponse {
    /**
     * The deleted replication task.
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface DescribeAccountAttributesMessage {
  }
  export interface DescribeAccountAttributesResponse {
    /**
     * Account quota information.
     */
    AccountQuotas?: AccountQuotaList;
    /**
     * A unique AWS DMS identifier for an account in a particular AWS Region. The value of this identifier has the following format: c99999999999. DMS uses this identifier to name artifacts. For example, DMS uses this identifier to name the default Amazon S3 bucket for storing task assessment reports in a given AWS Region. The format of this S3 bucket name is the following: dms-AccountNumber-UniqueAccountIdentifier. Here is an example name for this default S3 bucket: dms-111122223333-c44445555666.  AWS DMS supports the UniqueAccountIdentifier parameter in versions 3.1.4 and later. 
     */
    UniqueAccountIdentifier?: String;
  }
  export interface DescribeCertificatesMessage {
    /**
     * Filters applied to the certificate described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 10
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeCertificatesResponse {
    /**
     * The pagination token.
     */
    Marker?: String;
    /**
     * The Secure Sockets Layer (SSL) certificates associated with the replication instance.
     */
    Certificates?: CertificateList;
  }
  export interface DescribeConnectionsMessage {
    /**
     * The filters applied to the connection. Valid filter names: endpoint-arn | replication-instance-arn
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeConnectionsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the connections.
     */
    Connections?: ConnectionList;
  }
  export interface DescribeEndpointTypesMessage {
    /**
     * Filters applied to the describe action. Valid filter names: engine-name | endpoint-type
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEndpointTypesResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The types of endpoints that are supported.
     */
    SupportedEndpointTypes?: SupportedEndpointTypeList;
  }
  export interface DescribeEndpointsMessage {
    /**
     * Filters applied to the describe action. Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEndpointsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Endpoint description.
     */
    Endpoints?: EndpointList;
  }
  export interface DescribeEventCategoriesMessage {
    /**
     *  The type of AWS DMS resource that generates events.  Valid values: replication-instance | replication-task
     */
    SourceType?: String;
    /**
     * Filters applied to the action.
     */
    Filters?: FilterList;
  }
  export interface DescribeEventCategoriesResponse {
    /**
     * A list of event categories.
     */
    EventCategoryGroupList?: EventCategoryGroupList;
  }
  export interface DescribeEventSubscriptionsMessage {
    /**
     * The name of the AWS DMS event subscription to be described.
     */
    SubscriptionName?: String;
    /**
     * Filters applied to the action.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEventSubscriptionsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A list of event subscriptions.
     */
    EventSubscriptionsList?: EventSubscriptionsList;
  }
  export interface DescribeEventsMessage {
    /**
     *  The identifier of an event source.
     */
    SourceIdentifier?: String;
    /**
     * The type of AWS DMS resource that generates events. Valid values: replication-instance | replication-task
     */
    SourceType?: SourceType;
    /**
     * The start time for the events to be listed.
     */
    StartTime?: TStamp;
    /**
     * The end time for the events to be listed.
     */
    EndTime?: TStamp;
    /**
     * The duration of the events to be listed.
     */
    Duration?: IntegerOptional;
    /**
     * A list of event categories for the source type that you've chosen.
     */
    EventCategories?: EventCategoriesList;
    /**
     * Filters applied to the action.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEventsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The events described.
     */
    Events?: EventList;
  }
  export interface DescribeOrderableReplicationInstancesMessage {
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeOrderableReplicationInstancesResponse {
    /**
     * The order-able replication instances available.
     */
    OrderableReplicationInstances?: OrderableReplicationInstanceList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribePendingMaintenanceActionsMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * 
     */
    Filters?: FilterList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface DescribePendingMaintenanceActionsResponse {
    /**
     * The pending maintenance action.
     */
    PendingMaintenanceActions?: PendingMaintenanceActions;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeRefreshSchemasStatusMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface DescribeRefreshSchemasStatusResponse {
    /**
     * The status of the schema.
     */
    RefreshSchemasStatus?: RefreshSchemasStatus;
  }
  export interface DescribeReplicationInstanceTaskLogsMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReplicationInstanceTaskLogsResponse {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * An array of replication task log metadata. Each member of the array contains the replication task name, ARN, and task log size (in bytes). 
     */
    ReplicationInstanceTaskLogs?: ReplicationInstanceTaskLogsList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReplicationInstancesMessage {
    /**
     * Filters applied to the describe action. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationInstancesResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The replication instances described.
     */
    ReplicationInstances?: ReplicationInstanceList;
  }
  export interface DescribeReplicationSubnetGroupsMessage {
    /**
     * Filters applied to the describe action. Valid filter names: replication-subnet-group-id
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationSubnetGroupsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the replication subnet groups.
     */
    ReplicationSubnetGroups?: ReplicationSubnetGroups;
  }
  export interface DescribeReplicationTaskAssessmentResultsMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input parameter is specified, the API returns only one result and ignore the values of the MaxRecords and Marker parameters. 
     */
    ReplicationTaskArn?: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationTaskAssessmentResultsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * - The Amazon S3 bucket where the task assessment report is located. 
     */
    BucketName?: String;
    /**
     *  The task assessment report. 
     */
    ReplicationTaskAssessmentResults?: ReplicationTaskAssessmentResultList;
  }
  export interface DescribeReplicationTasksMessage {
    /**
     * Filters applied to the describe action. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).
     */
    WithoutSettings?: BooleanOptional;
  }
  export interface DescribeReplicationTasksResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the replication tasks.
     */
    ReplicationTasks?: ReplicationTaskList;
  }
  export interface DescribeSchemasMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeSchemasResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The described schema.
     */
    Schemas?: SchemaList;
  }
  export interface DescribeTableStatisticsMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 500.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Filters applied to the describe table statistics action. Valid filter names: schema-name | table-name | table-state A combination of filters creates an AND condition where each record matches all specified filters.
     */
    Filters?: FilterList;
  }
  export interface DescribeTableStatisticsResponse {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn?: String;
    /**
     * The table statistics.
     */
    TableStatistics?: TableStatisticsList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export type DmsSslModeValue = "none"|"require"|"verify-ca"|"verify-full"|string;
  export interface DmsTransferSettings {
    /**
     *  The IAM role that has permission to access the Amazon S3 bucket. 
     */
    ServiceAccessRoleArn?: String;
    /**
     *  The name of the S3 bucket to use. 
     */
    BucketName?: String;
  }
  export interface DynamoDbSettings {
    /**
     *  The Amazon Resource Name (ARN) used by the service access IAM role. 
     */
    ServiceAccessRoleArn: String;
  }
  export interface ElasticsearchSettings {
    /**
     * The Amazon Resource Name (ARN) used by service to access the IAM role.
     */
    ServiceAccessRoleArn: String;
    /**
     * The endpoint for the Elasticsearch cluster.
     */
    EndpointUri: String;
    /**
     * The maximum percentage of records that can fail to be written before a full load operation stops. 
     */
    FullLoadErrorPercentage?: IntegerOptional;
    /**
     * The maximum number of seconds for which DMS retries failed API requests to the Elasticsearch cluster.
     */
    ErrorRetryDuration?: IntegerOptional;
  }
  export type EncodingTypeValue = "plain"|"plain-dictionary"|"rle-dictionary"|string;
  export type EncryptionModeValue = "sse-s3"|"sse-kms"|string;
  export interface Endpoint {
    /**
     * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    EndpointType?: ReplicationEndpointTypeValue;
    /**
     * The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", and "neptune".
     */
    EngineName?: String;
    /**
     * The expanded name for the engine name. For example, if the EngineName parameter is "aurora," this value would be "Amazon Aurora MySQL."
     */
    EngineDisplayName?: String;
    /**
     * The user name used to connect to the endpoint.
     */
    Username?: String;
    /**
     * The name of the server at the endpoint.
     */
    ServerName?: String;
    /**
     * The port value used to access the endpoint.
     */
    Port?: IntegerOptional;
    /**
     * The name of the database at the endpoint.
     */
    DatabaseName?: String;
    /**
     * Additional connection attributes used to connect to the endpoint.
     */
    ExtraConnectionAttributes?: String;
    /**
     * The status of the endpoint.
     */
    Status?: String;
    /**
     * An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.
     */
    KmsKeyId?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) used for SSL connection to the endpoint.
     */
    CertificateArn?: String;
    /**
     * The SSL mode used to connect to the endpoint. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) used by the service access IAM role.
     */
    ServiceAccessRoleArn?: String;
    /**
     * The external table definition.
     */
    ExternalTableDefinition?: String;
    /**
     *  Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account. 
     */
    ExternalId?: String;
    /**
     * The settings for the target DynamoDB database. For more information, see the DynamoDBSettings structure.
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * The settings for the S3 target endpoint. For more information, see the S3Settings structure.
     */
    S3Settings?: S3Settings;
    /**
     * The settings in JSON format for the DMS transfer type of source endpoint.  Possible settings include the following:    ServiceAccessRoleArn - The IAM role that has permission to access the Amazon S3 bucket.    BucketName - The name of the S3 bucket to use.    CompressionType - An optional parameter to use GZIP to compress the target files. To use GZIP, set this value to NONE (the default). To keep the files uncompressed, don't use this value.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string,BucketName=string,CompressionType=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" }  
     */
    DmsTransferSettings?: DmsTransferSettings;
    /**
     * The settings for the MongoDB source endpoint. For more information, see the MongoDbSettings structure.
     */
    MongoDbSettings?: MongoDbSettings;
    /**
     * The settings for the Amazon Kinesis target endpoint. For more information, see the KinesisSettings structure.
     */
    KinesisSettings?: KinesisSettings;
    /**
     * The settings for the Apache Kafka target endpoint. For more information, see the KafkaSettings structure.
     */
    KafkaSettings?: KafkaSettings;
    /**
     * The settings for the Elasticsearch source endpoint. For more information, see the ElasticsearchSettings structure.
     */
    ElasticsearchSettings?: ElasticsearchSettings;
    /**
     * The settings for the Amazon Neptune target endpoint. For more information, see the NeptuneSettings structure.
     */
    NeptuneSettings?: NeptuneSettings;
    /**
     * Settings for the Amazon Redshift endpoint.
     */
    RedshiftSettings?: RedshiftSettings;
  }
  export type EndpointList = Endpoint[];
  export interface Event {
    /**
     *  The identifier of an event source.
     */
    SourceIdentifier?: String;
    /**
     *  The type of AWS DMS resource that generates events.  Valid values: replication-instance | endpoint | replication-task
     */
    SourceType?: SourceType;
    /**
     * The event message.
     */
    Message?: String;
    /**
     * The event categories available for the specified source type.
     */
    EventCategories?: EventCategoriesList;
    /**
     * The date of the event.
     */
    Date?: TStamp;
  }
  export type EventCategoriesList = String[];
  export interface EventCategoryGroup {
    /**
     *  The type of AWS DMS resource that generates events.  Valid values: replication-instance | replication-server | security-group | replication-task
     */
    SourceType?: String;
    /**
     *  A list of event categories from a source type that you've chosen.
     */
    EventCategories?: EventCategoriesList;
  }
  export type EventCategoryGroupList = EventCategoryGroup[];
  export type EventList = Event[];
  export interface EventSubscription {
    /**
     * The AWS customer account associated with the AWS DMS event notification subscription.
     */
    CustomerAwsId?: String;
    /**
     * The AWS DMS event notification subscription Id.
     */
    CustSubscriptionId?: String;
    /**
     * The topic ARN of the AWS DMS event notification subscription.
     */
    SnsTopicArn?: String;
    /**
     * The status of the AWS DMS event notification subscription. Constraints: Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist The status "no-permission" indicates that AWS DMS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.
     */
    Status?: String;
    /**
     * The time the AWS DMS event notification subscription was created.
     */
    SubscriptionCreationTime?: String;
    /**
     *  The type of AWS DMS resource that generates events.  Valid values: replication-instance | replication-server | security-group | replication-task
     */
    SourceType?: String;
    /**
     * A list of source Ids for the event subscription.
     */
    SourceIdsList?: SourceIdsList;
    /**
     * A lists of event categories.
     */
    EventCategoriesList?: EventCategoriesList;
    /**
     * Boolean value that indicates if the event subscription is enabled.
     */
    Enabled?: Boolean;
  }
  export type EventSubscriptionsList = EventSubscription[];
  export interface Filter {
    /**
     * The name of the filter.
     */
    Name: String;
    /**
     * The filter value.
     */
    Values: FilterValueList;
  }
  export type FilterList = Filter[];
  export type FilterValueList = String[];
  export interface ImportCertificateMessage {
    /**
     * A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    CertificateIdentifier: String;
    /**
     * The contents of a .pem file, which contains an X.509 certificate.
     */
    CertificatePem?: String;
    /**
     * The location of an imported Oracle Wallet certificate for use with SSL.
     */
    CertificateWallet?: CertificateWallet;
    /**
     * The tags associated with the certificate.
     */
    Tags?: TagList;
  }
  export interface ImportCertificateResponse {
    /**
     * The certificate to be uploaded.
     */
    Certificate?: Certificate;
  }
  export type Integer = number;
  export type IntegerOptional = number;
  export interface KafkaSettings {
    /**
     * The broker location and port of the Kafka broker that hosts your Kafka instance. Specify the broker in the form  broker-hostname-or-ip:port . For example, "ec2-12-345-678-901.compute-1.amazonaws.com:2345".
     */
    Broker?: String;
    /**
     * The topic to which you migrate the data. If you don't specify a topic, AWS DMS specifies "kafka-default-topic" as the migration topic.
     */
    Topic?: String;
  }
  export type KeyList = String[];
  export interface KinesisSettings {
    /**
     * The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.
     */
    StreamArn?: String;
    /**
     * The output format for the records created on the endpoint. The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).
     */
    MessageFormat?: MessageFormatValue;
    /**
     * The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role that AWS DMS uses to write to the Kinesis data stream.
     */
    ServiceAccessRoleArn?: String;
    /**
     * Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is False.
     */
    IncludeTransactionDetails?: BooleanOptional;
    /**
     * Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is False.
     */
    IncludePartitionValue?: BooleanOptional;
    /**
     * Prefixes schema and table names to partition values, when the partition type is primary-key-type. Doing this increases data distribution among Kinesis shards. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same shard, which causes throttling. The default is False.
     */
    PartitionIncludeSchemaTable?: BooleanOptional;
    /**
     * Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. The default is False.
     */
    IncludeTableAlterOperations?: BooleanOptional;
    /**
     * Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. The default is False.
     */
    IncludeControlDetails?: BooleanOptional;
  }
  export interface ListTagsForResourceMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the AWS DMS resource.
     */
    ResourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags for the resource.
     */
    TagList?: TagList;
  }
  export type Long = number;
  export type MessageFormatValue = "json"|"json-unformatted"|string;
  export type MigrationTypeValue = "full-load"|"cdc"|"full-load-and-cdc"|string;
  export interface ModifyEndpointMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    EndpointType?: ReplicationEndpointTypeValue;
    /**
     * The type of engine for the endpoint. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", and "neptune".
     */
    EngineName?: String;
    /**
     * The user name to be used to login to the endpoint database.
     */
    Username?: String;
    /**
     * The password to be used to login to the endpoint database.
     */
    Password?: SecretString;
    /**
     * The name of the server where the endpoint database resides.
     */
    ServerName?: String;
    /**
     * The port used by the endpoint database.
     */
    Port?: IntegerOptional;
    /**
     * The name of the endpoint database.
     */
    DatabaseName?: String;
    /**
     * Additional attributes associated with the connection. To reset this parameter, pass the empty string ("") as an argument.
     */
    ExtraConnectionAttributes?: String;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
    /**
     * The SSL mode used to connect to the endpoint. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     *  The Amazon Resource Name (ARN) for the service access role you want to use to modify the endpoint. 
     */
    ServiceAccessRoleArn?: String;
    /**
     * The external table definition.
     */
    ExternalTableDefinition?: String;
    /**
     * Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the AWS Database Migration Service User Guide. 
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for AWS DMS in the AWS Database Migration Service User Guide. 
     */
    S3Settings?: S3Settings;
    /**
     * The settings in JSON format for the DMS transfer type of source endpoint.  Attributes include the following:   serviceAccessRoleArn - The AWS Identity and Access Management (IAM) role that has permission to access the Amazon S3 bucket.   BucketName - The name of the S3 bucket to use.   compressionType - An optional parameter to use GZIP to compress the target files. Either set this parameter to NONE (the default) or don't use it to leave the files uncompressed.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string ,BucketName=string,CompressionType=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" }  
     */
    DmsTransferSettings?: DmsTransferSettings;
    /**
     * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the configuration properties section in  Using MongoDB as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide. 
     */
    MongoDbSettings?: MongoDbSettings;
    /**
     * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using Amazon Kinesis Data Streams as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide. 
     */
    KinesisSettings?: KinesisSettings;
    /**
     * Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using Apache Kafka as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide. 
     */
    KafkaSettings?: KafkaSettings;
    /**
     * Settings in JSON format for the target Elasticsearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS in the AWS Database Migration Service User Guide. 
     */
    ElasticsearchSettings?: ElasticsearchSettings;
    /**
     * Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying Endpoint Settings for Amazon Neptune as a Target in the AWS Database Migration Service User Guide. 
     */
    NeptuneSettings?: NeptuneSettings;
    RedshiftSettings?: RedshiftSettings;
  }
  export interface ModifyEndpointResponse {
    /**
     * The modified endpoint.
     */
    Endpoint?: Endpoint;
  }
  export interface ModifyEventSubscriptionMessage {
    /**
     * The name of the AWS DMS event notification subscription to be modified.
     */
    SubscriptionName: String;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
     */
    SnsTopicArn?: String;
    /**
     *  The type of AWS DMS resource that generates the events you want to subscribe to.  Valid values: replication-instance | replication-task
     */
    SourceType?: String;
    /**
     *  A list of event categories for a source type that you want to subscribe to. Use the DescribeEventCategories action to see a list of event categories. 
     */
    EventCategories?: EventCategoriesList;
    /**
     *  A Boolean value; set to true to activate the subscription. 
     */
    Enabled?: BooleanOptional;
  }
  export interface ModifyEventSubscriptionResponse {
    /**
     * The modified event subscription.
     */
    EventSubscription?: EventSubscription;
  }
  export interface ModifyReplicationInstanceMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The amount of storage (in gigabytes) to be allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     * Indicates whether the changes should be applied immediately or during the next maintenance window.
     */
    ApplyImmediately?: Boolean;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Selecting the right AWS DMS replication instance for your migration. 
     */
    ReplicationInstanceClass?: String;
    /**
     *  Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. 
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied. Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes
     */
    PreferredMaintenanceWindow?: String;
    /**
     *  Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
    /**
     * Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the replication instance's current version.
     */
    AllowMajorVersionUpgrade?: Boolean;
    /**
     * A value that indicates that minor version upgrades are applied automatically to the replication instance during the maintenance window. Changing this parameter doesn't result in an outage, except in the case dsecribed following. The change is asynchronously applied as soon as possible.  An outage does result if these factors apply:    This parameter is set to true during the maintenance window.   A newer minor version is available.    AWS DMS has enabled automatic patching for the given engine version.   
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    ReplicationInstanceIdentifier?: String;
  }
  export interface ModifyReplicationInstanceResponse {
    /**
     * The modified replication instance.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface ModifyReplicationSubnetGroupMessage {
    /**
     * The name of the replication instance subnet group.
     */
    ReplicationSubnetGroupIdentifier: String;
    /**
     * A description for the replication instance subnet group.
     */
    ReplicationSubnetGroupDescription?: String;
    /**
     * A list of subnet IDs.
     */
    SubnetIds: SubnetIdentifierList;
  }
  export interface ModifyReplicationSubnetGroupResponse {
    /**
     * The modified replication subnet group.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
  }
  export interface ModifyReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn: String;
    /**
     * The replication task identifier. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier?: String;
    /**
     * The migration type. Valid values: full-load | cdc | full-load-and-cdc 
     */
    MigrationType?: MigrationTypeValue;
    /**
     * When using the AWS CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with file://. When working with the DMS API, provide the JSON as the parameter value, for example: --table-mappings file://mappingfile.json 
     */
    TableMappings?: String;
    /**
     * JSON file that contains settings for the task, such as task metadata settings.
     */
    ReplicationTaskSettings?: String;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”
     */
    CdcStartTime?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for AWS DMS. 
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “
     */
    CdcStopPosition?: String;
    /**
     * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the AWS Database Migration Service User Guide. 
     */
    TaskData?: String;
  }
  export interface ModifyReplicationTaskResponse {
    /**
     * The replication task that was modified.
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface MongoDbSettings {
    /**
     * The user name you use to access the MongoDB source endpoint. 
     */
    Username?: String;
    /**
     *  The password for the user account you use to access the MongoDB source endpoint. 
     */
    Password?: SecretString;
    /**
     *  The name of the server on the MongoDB source endpoint. 
     */
    ServerName?: String;
    /**
     *  The port value for the MongoDB source endpoint. 
     */
    Port?: IntegerOptional;
    /**
     *  The database name on the MongoDB source endpoint. 
     */
    DatabaseName?: String;
    /**
     *  The authentication type you use to access the MongoDB source endpoint. When when set to "no", user name and password parameters are not used and can be empty. 
     */
    AuthType?: AuthTypeValue;
    /**
     *  The authentication mechanism you use to access the MongoDB source endpoint. For the default value, in MongoDB version 2.x, "default" is "mongodb_cr". For MongoDB version 3.x or later, "default" is "scram_sha_1". This setting isn't used when AuthType is set to "no".
     */
    AuthMechanism?: AuthMechanismValue;
    /**
     *  Specifies either document or table mode.  Default value is "none". Specify "none" to use document mode. Specify "one" to use table mode.
     */
    NestingLevel?: NestingLevelValue;
    /**
     *  Specifies the document ID. Use this setting when NestingLevel is set to "none".  Default value is "false". 
     */
    ExtractDocId?: String;
    /**
     *  Indicates the number of documents to preview to determine the document organization. Use this setting when NestingLevel is set to "one".  Must be a positive value greater than 0. Default value is 1000.
     */
    DocsToInvestigate?: String;
    /**
     *  The MongoDB database name. This setting isn't used when AuthType is set to "no".  The default is "admin".
     */
    AuthSource?: String;
    /**
     * The AWS KMS key identifier that is used to encrypt the content on the replication instance. If you don't specify a value for the KmsKeyId parameter, then AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.
     */
    KmsKeyId?: String;
  }
  export interface NeptuneSettings {
    /**
     * The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. For more information, see Creating an IAM Service Role for Accessing Amazon Neptune as a Target in the AWS Database Migration Service User Guide.  
     */
    ServiceAccessRoleArn?: String;
    /**
     * The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. AWS DMS maps the SQL source data to graph data before storing it in these .csv files.
     */
    S3BucketName: String;
    /**
     * A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName 
     */
    S3BucketFolder: String;
    /**
     * The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. The default is 250.
     */
    ErrorRetryDuration?: IntegerOptional;
    /**
     * The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the bulk load is successful, AWS DMS clears the bucket, ready to store the next batch of migrated graph data.
     */
    MaxFileSize?: IntegerOptional;
    /**
     * The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. The default is 5.
     */
    MaxRetryCount?: IntegerOptional;
    /**
     * If you want AWS Identity and Access Management (IAM) authorization enabled for this endpoint, set this parameter to true. Then attach the appropriate IAM policy document to your service role specified by ServiceAccessRoleArn. The default is false.
     */
    IamAuthEnabled?: BooleanOptional;
  }
  export type NestingLevelValue = "none"|"one"|string;
  export interface OrderableReplicationInstance {
    /**
     * The version of the replication engine.
     */
    EngineVersion?: String;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Selecting the right AWS DMS replication instance for your migration. 
     */
    ReplicationInstanceClass?: String;
    /**
     * The type of storage used by the replication instance.
     */
    StorageType?: String;
    /**
     * The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.
     */
    MinAllocatedStorage?: Integer;
    /**
     * The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.
     */
    MaxAllocatedStorage?: Integer;
    /**
     * The default amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    DefaultAllocatedStorage?: Integer;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    IncludedAllocatedStorage?: Integer;
    /**
     * List of Availability Zones for this replication instance.
     */
    AvailabilityZones?: AvailabilityZonesList;
    /**
     * The value returned when the specified EngineVersion of the replication instance is in Beta or test mode. This indicates some features might not work as expected.  AWS DMS supports the ReleaseStatus parameter in versions 3.1.4 and later. 
     */
    ReleaseStatus?: ReleaseStatusValues;
  }
  export type OrderableReplicationInstanceList = OrderableReplicationInstance[];
  export type ParquetVersionValue = "parquet-1-0"|"parquet-2-0"|string;
  export interface PendingMaintenanceAction {
    /**
     * The type of pending maintenance action that is available for the resource.
     */
    Action?: String;
    /**
     * The date of the maintenance window when the action is to be applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any next-maintenance opt-in requests are ignored.
     */
    AutoAppliedAfterDate?: TStamp;
    /**
     * The date when the maintenance action will be automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any immediate opt-in requests are ignored.
     */
    ForcedApplyDate?: TStamp;
    /**
     * The type of opt-in request that has been received for the resource.
     */
    OptInStatus?: String;
    /**
     * The effective date when the pending maintenance action will be applied to the resource. This date takes into account opt-in requests received from the ApplyPendingMaintenanceAction API operation, and also the AutoAppliedAfterDate and ForcedApplyDate parameter values. This value is blank if an opt-in request has not been received and nothing has been specified for AutoAppliedAfterDate or ForcedApplyDate.
     */
    CurrentApplyDate?: TStamp;
    /**
     * A description providing more detail about the maintenance action.
     */
    Description?: String;
  }
  export type PendingMaintenanceActionDetails = PendingMaintenanceAction[];
  export type PendingMaintenanceActions = ResourcePendingMaintenanceActions[];
  export interface RebootReplicationInstanceMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * If this parameter is true, the reboot is conducted through a Multi-AZ failover. (If the instance isn't configured for Multi-AZ, then you can't specify true.)
     */
    ForceFailover?: BooleanOptional;
  }
  export interface RebootReplicationInstanceResponse {
    /**
     * The replication instance that is being rebooted. 
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface RedshiftSettings {
    /**
     * A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. You can choose true or false (the default). This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT specification, Amazon Redshift inserts a NULL value into that field. 
     */
    AcceptAnyDate?: BooleanOptional;
    /**
     * Code to run after connecting. This parameter should contain the code itself, not the name of a file containing the code.
     */
    AfterConnectScript?: String;
    /**
     * The location where the comma-separated value (.csv) files are stored before being uploaded to the S3 bucket. 
     */
    BucketFolder?: String;
    /**
     * The name of the S3 bucket you want to use
     */
    BucketName?: String;
    /**
     * A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.
     */
    ConnectionTimeout?: IntegerOptional;
    /**
     * The name of the Amazon Redshift data warehouse (service) that you are working with.
     */
    DatabaseName?: String;
    /**
     * The date format that you are using. Valid values are auto (case-sensitive), your date format string enclosed in quotes, or NULL. If this parameter is left unset (NULL), it defaults to a format of 'YYYY-MM-DD'. Using auto recognizes most strings, even some that aren't supported when you use a date format string.  If your date and time values use formats different from each other, set this to auto. 
     */
    DateFormat?: String;
    /**
     * A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. A value of true sets empty CHAR and VARCHAR fields to null. The default is false.
     */
    EmptyAsNull?: BooleanOptional;
    /**
     * The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either SSE_S3 (the default) or SSE_KMS. To use SSE_S3, create an AWS Identity and Access Management (IAM) role with a policy that allows "arn:aws:s3:::*" to use the following actions: "s3:PutObject", "s3:ListBucket" 
     */
    EncryptionMode?: EncryptionModeValue;
    /**
     * The number of threads used to upload a single file. This parameter accepts a value from 1 through 64. It defaults to 10.
     */
    FileTransferUploadStreams?: IntegerOptional;
    /**
     * The amount of time to wait (in milliseconds) before timing out, beginning from when you begin loading.
     */
    LoadTimeout?: IntegerOptional;
    /**
     * The maximum size (in KB) of any .csv file used to transfer data to Amazon Redshift. This accepts a value from 1 through 1,048,576. It defaults to 32,768 KB (32 MB).
     */
    MaxFileSize?: IntegerOptional;
    /**
     * The password for the user named in the username property.
     */
    Password?: SecretString;
    /**
     * The port number for Amazon Redshift. The default value is 5439.
     */
    Port?: IntegerOptional;
    /**
     * A value that specifies to remove surrounding quotation marks from strings in the incoming data. All characters within the quotation marks, including delimiters, are retained. Choose true to remove quotation marks. The default is false.
     */
    RemoveQuotes?: BooleanOptional;
    /**
     * A list of characters that you want to replace. Use with ReplaceChars.
     */
    ReplaceInvalidChars?: String;
    /**
     * A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead. The default is "?".
     */
    ReplaceChars?: String;
    /**
     * The name of the Amazon Redshift cluster you are using.
     */
    ServerName?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service.
     */
    ServiceAccessRoleArn?: String;
    /**
     * The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
     */
    ServerSideEncryptionKmsKeyId?: String;
    /**
     * The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'. It defaults to 10. Using auto recognizes most strings, even some that aren't supported when you use a time format string.  If your date and time values use formats different from each other, set this parameter to auto. 
     */
    TimeFormat?: String;
    /**
     * A value that specifies to remove the trailing white space characters from a VARCHAR string. This parameter applies only to columns with a VARCHAR data type. Choose true to remove unneeded white space. The default is false.
     */
    TrimBlanks?: BooleanOptional;
    /**
     * A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. This parameter applies only to columns with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose true to truncate data. The default is false.
     */
    TruncateColumns?: BooleanOptional;
    /**
     * An Amazon Redshift user name for a registered user.
     */
    Username?: String;
    /**
     * The size of the write buffer to use in rows. Valid values range from 1 through 2,048. The default is 1,024. Use this setting to tune performance. 
     */
    WriteBufferSize?: IntegerOptional;
  }
  export interface RefreshSchemasMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
  }
  export interface RefreshSchemasResponse {
    /**
     * The status of the refreshed schema.
     */
    RefreshSchemasStatus?: RefreshSchemasStatus;
  }
  export interface RefreshSchemasStatus {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The status of the schema.
     */
    Status?: RefreshSchemasStatusTypeValue;
    /**
     * The date the schema was last refreshed.
     */
    LastRefreshDate?: TStamp;
    /**
     * The last failure message for the schema.
     */
    LastFailureMessage?: String;
  }
  export type RefreshSchemasStatusTypeValue = "successful"|"failed"|"refreshing"|string;
  export type ReleaseStatusValues = "beta"|string;
  export type ReloadOptionValue = "data-reload"|"validate-only"|string;
  export interface ReloadTablesMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn: String;
    /**
     * The name and schema of the table to be reloaded. 
     */
    TablesToReload: TableListToReload;
    /**
     * Options for reload. Specify data-reload to reload the data and re-validate it if validation is enabled. Specify validate-only to re-validate the table. This option applies only when validation is enabled for the task.  Valid values: data-reload, validate-only Default value is data-reload.
     */
    ReloadOption?: ReloadOptionValue;
  }
  export interface ReloadTablesResponse {
    /**
     * The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn?: String;
  }
  export interface RemoveTagsFromResourceMessage {
    /**
     * An AWS DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).
     */
    ResourceArn: String;
    /**
     * The tag key (name) of the tag to be removed.
     */
    TagKeys: KeyList;
  }
  export interface RemoveTagsFromResourceResponse {
  }
  export type ReplicationEndpointTypeValue = "source"|"target"|string;
  export interface ReplicationInstance {
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain 1-63 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: myrepinstance 
     */
    ReplicationInstanceIdentifier?: String;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For more information on the settings and capacities for the available replication instance classes, see  Selecting the right AWS DMS replication instance for your migration. 
     */
    ReplicationInstanceClass?: String;
    /**
     * The status of the replication instance. The possible return values include:    "available"     "creating"     "deleted"     "deleting"     "failed"     "modifying"     "upgrading"     "rebooting"     "resetting-master-credentials"     "storage-full"     "incompatible-credentials"     "incompatible-network"     "maintenance"   
     */
    ReplicationInstanceStatus?: String;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    AllocatedStorage?: Integer;
    /**
     * The time the replication instance was created.
     */
    InstanceCreateTime?: TStamp;
    /**
     * The VPC security group for the instance.
     */
    VpcSecurityGroups?: VpcSecurityGroupMembershipList;
    /**
     * The Availability Zone for the instance.
     */
    AvailabilityZone?: String;
    /**
     * The subnet group for the replication instance.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
    /**
     * The maintenance window times for the replication instance.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The pending modification values.
     */
    PendingModifiedValues?: ReplicationPendingModifiedValues;
    /**
     *  Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: Boolean;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
    /**
     * Boolean value indicating if minor version upgrades will be automatically applied to the instance.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * An AWS KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the KmsKeyId parameter, then AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.
     */
    KmsKeyId?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The public IP address of the replication instance.
     */
    ReplicationInstancePublicIpAddress?: String;
    /**
     * The private IP address of the replication instance.
     */
    ReplicationInstancePrivateIpAddress?: String;
    /**
     * One or more public IP addresses for the replication instance.
     */
    ReplicationInstancePublicIpAddresses?: ReplicationInstancePublicIpAddressList;
    /**
     * One or more private IP addresses for the replication instance.
     */
    ReplicationInstancePrivateIpAddresses?: ReplicationInstancePrivateIpAddressList;
    /**
     *  Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true. 
     */
    PubliclyAccessible?: Boolean;
    /**
     * The Availability Zone of the standby replication instance in a Multi-AZ deployment.
     */
    SecondaryAvailabilityZone?: String;
    /**
     *  The expiration date of the free replication instance that is part of the Free DMS program. 
     */
    FreeUntil?: TStamp;
    /**
     * The DNS name servers supported for the replication instance to access your on-premise source or target database.
     */
    DnsNameServers?: String;
  }
  export type ReplicationInstanceList = ReplicationInstance[];
  export type ReplicationInstancePrivateIpAddressList = String[];
  export type ReplicationInstancePublicIpAddressList = String[];
  export interface ReplicationInstanceTaskLog {
    /**
     * The name of the replication task.
     */
    ReplicationTaskName?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn?: String;
    /**
     * The size, in bytes, of the replication task log.
     */
    ReplicationInstanceTaskLogSize?: Long;
  }
  export type ReplicationInstanceTaskLogsList = ReplicationInstanceTaskLog[];
  export interface ReplicationPendingModifiedValues {
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For more information on the settings and capacities for the available replication instance classes, see  Selecting the right AWS DMS replication instance for your migration. 
     */
    ReplicationInstanceClass?: String;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     *  Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
  }
  export interface ReplicationSubnetGroup {
    /**
     * The identifier of the replication instance subnet group.
     */
    ReplicationSubnetGroupIdentifier?: String;
    /**
     * A description for the replication subnet group.
     */
    ReplicationSubnetGroupDescription?: String;
    /**
     * The ID of the VPC.
     */
    VpcId?: String;
    /**
     * The status of the subnet group.
     */
    SubnetGroupStatus?: String;
    /**
     * The subnets that are in the subnet group.
     */
    Subnets?: SubnetList;
  }
  export type ReplicationSubnetGroups = ReplicationSubnetGroup[];
  export interface ReplicationTask {
    /**
     * The user-assigned replication task identifier or name. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    SourceEndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    TargetEndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The type of migration.
     */
    MigrationType?: MigrationTypeValue;
    /**
     * Table mappings specified in the task.
     */
    TableMappings?: String;
    /**
     * The settings for the replication task.
     */
    ReplicationTaskSettings?: String;
    /**
     * The status of the replication task.
     */
    Status?: String;
    /**
     * The last error (failure) message generated for the replication instance.
     */
    LastFailureMessage?: String;
    /**
     * The reason the replication task was stopped. This response parameter can return one of the following values:    "STOP_REASON_FULL_LOAD_COMPLETED" – Full-load migration completed.    "STOP_REASON_CACHED_CHANGES_APPLIED" – Change data capture (CDC) load completed.    "STOP_REASON_CACHED_CHANGES_NOT_APPLIED" – In a full-load and CDC migration, the full-load stopped as specified before starting the CDC migration.    "STOP_REASON_SERVER_TIME" – The migration stopped at the specified server time.  
     */
    StopReason?: String;
    /**
     * The date the replication task was created.
     */
    ReplicationTaskCreationDate?: TStamp;
    /**
     * The date the replication task is scheduled to start.
     */
    ReplicationTaskStartDate?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want the CDC operation to start. Specifying both values results in an error. The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “
     */
    CdcStopPosition?: String;
    /**
     * Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the CdcStartPosition parameter to start a CDC operation that begins at that checkpoint.
     */
    RecoveryCheckpoint?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn?: String;
    /**
     * The statistics for the task, including elapsed time, tables loaded, and table errors.
     */
    ReplicationTaskStats?: ReplicationTaskStats;
    /**
     * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the AWS Database Migration Service User Guide. 
     */
    TaskData?: String;
  }
  export interface ReplicationTaskAssessmentResult {
    /**
     *  The replication task identifier of the task on which the task assessment was run. 
     */
    ReplicationTaskIdentifier?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn?: String;
    /**
     * The date the task assessment was completed. 
     */
    ReplicationTaskLastAssessmentDate?: TStamp;
    /**
     *  The status of the task assessment. 
     */
    AssessmentStatus?: String;
    /**
     *  The file containing the results of the task assessment. 
     */
    AssessmentResultsFile?: String;
    /**
     *  The task assessment results in JSON format. 
     */
    AssessmentResults?: String;
    /**
     *  The URL of the S3 object containing the task assessment results. 
     */
    S3ObjectUrl?: String;
  }
  export type ReplicationTaskAssessmentResultList = ReplicationTaskAssessmentResult[];
  export type ReplicationTaskList = ReplicationTask[];
  export interface ReplicationTaskStats {
    /**
     * The percent complete for the full load migration task.
     */
    FullLoadProgressPercent?: Integer;
    /**
     * The elapsed time of the task, in milliseconds.
     */
    ElapsedTimeMillis?: Long;
    /**
     * The number of tables loaded for this task.
     */
    TablesLoaded?: Integer;
    /**
     * The number of tables currently loading for this task.
     */
    TablesLoading?: Integer;
    /**
     * The number of tables queued for this task.
     */
    TablesQueued?: Integer;
    /**
     * The number of errors that have occurred during this task.
     */
    TablesErrored?: Integer;
    /**
     * The date the replication task was started either with a fresh start or a target reload.
     */
    FreshStartDate?: TStamp;
    /**
     * The date the replication task was started either with a fresh start or a resume. For more information, see StartReplicationTaskType.
     */
    StartDate?: TStamp;
    /**
     * The date the replication task was stopped.
     */
    StopDate?: TStamp;
    /**
     * The date the replication task full load was started.
     */
    FullLoadStartDate?: TStamp;
    /**
     * The date the replication task full load was completed.
     */
    FullLoadFinishDate?: TStamp;
  }
  export interface ResourcePendingMaintenanceActions {
    /**
     * The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to. For information about creating an ARN, see  Constructing an Amazon Resource Name (ARN) for AWS DMS in the DMS documentation.
     */
    ResourceIdentifier?: String;
    /**
     * Detailed information about the pending maintenance action.
     */
    PendingMaintenanceActionDetails?: PendingMaintenanceActionDetails;
  }
  export interface S3Settings {
    /**
     *  The Amazon Resource Name (ARN) used by the service access IAM role. 
     */
    ServiceAccessRoleArn?: String;
    /**
     *  The external table definition. 
     */
    ExternalTableDefinition?: String;
    /**
     *  The delimiter used to separate rows in the source files. The default is a carriage return (\n). 
     */
    CsvRowDelimiter?: String;
    /**
     *  The delimiter used to separate columns in the source files. The default is a comma. 
     */
    CsvDelimiter?: String;
    /**
     *  An optional parameter to set a folder name in the S3 bucket. If provided, tables are created in the path  bucketFolder/schema_name/table_name/. If this parameter isn't specified, then the path used is  schema_name/table_name/. 
     */
    BucketFolder?: String;
    /**
     *  The name of the S3 bucket. 
     */
    BucketName?: String;
    /**
     * An optional parameter to use GZIP to compress the target files. Set to GZIP to compress the target files. Either set this parameter to NONE (the default) or don't use it to leave the files uncompressed. This parameter applies to both .csv and .parquet file formats. 
     */
    CompressionType?: CompressionTypeValue;
    /**
     * The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either SSE_S3 (the default) or SSE_KMS. To use SSE_S3, you need an AWS Identity and Access Management (IAM) role with permission to allow "arn:aws:s3:::dms-*" to use the following actions:    s3:CreateBucket     s3:ListBucket     s3:DeleteBucket     s3:GetBucketLocation     s3:GetObject     s3:PutObject     s3:DeleteObject     s3:GetObjectVersion     s3:GetBucketPolicy     s3:PutBucketPolicy     s3:DeleteBucketPolicy   
     */
    EncryptionMode?: EncryptionModeValue;
    /**
     * If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID. The key that you use needs an attached policy that enables AWS Identity and Access Management (IAM) user permissions and allows use of the key. Here is a CLI example: aws dms create-endpoint --endpoint-identifier value --endpoint-type target --engine-name s3 --s3-settings ServiceAccessRoleArn=value,BucketFolder=value,BucketName=value,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=value  
     */
    ServerSideEncryptionKmsKeyId?: String;
    /**
     * The format of the data that you want to use for output. You can choose one of the following:     csv : This is a row-based file format with comma-separated values (.csv).     parquet : Apache Parquet (.parquet) is a columnar storage file format that features efficient compression and provides faster query response.   
     */
    DataFormat?: DataFormatValue;
    /**
     * The type of encoding you are using:     RLE_DICTIONARY uses a combination of bit-packing and run-length encoding to store repeated values more efficiently. This is the default.    PLAIN doesn't use encoding at all. Values are stored as they are.    PLAIN_DICTIONARY builds a dictionary of the values encountered in a given column. The dictionary is stored in a dictionary page for each column chunk.  
     */
    EncodingType?: EncodingTypeValue;
    /**
     * The maximum size of an encoded dictionary page of a column. If the dictionary page exceeds this, this column is stored using an encoding type of PLAIN. This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to PLAIN encoding. This size is used for .parquet file format only. 
     */
    DictPageSizeLimit?: IntegerOptional;
    /**
     * The number of rows in a row group. A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only.  If you choose a value larger than the maximum, RowGroupLength is set to the max row group length in bytes (64 * 1024 * 1024). 
     */
    RowGroupLength?: IntegerOptional;
    /**
     * The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only. 
     */
    DataPageSize?: IntegerOptional;
    /**
     * The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0.
     */
    ParquetVersion?: ParquetVersionValue;
    /**
     * A value that enables statistics for Parquet pages and row groups. Choose true to enable statistics, false to disable. Statistics include NULL, DISTINCT, MAX, and MIN values. This parameter defaults to true. This value is used for .parquet file format only.
     */
    EnableStatistics?: BooleanOptional;
    /**
     * A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.  AWS DMS supports the IncludeOpForFullLoad parameter in versions 3.1.4 and later.  For full load, records can only be inserted. By default (the false setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If IncludeOpForFullLoad is set to true or y, the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.  This setting works together with the CdcInsertsOnly and the CdcInsertsAndUpdates parameters for output to .csv files only. For more information about how these settings work together, see Indicating Source DB Operations in Migrated S3 Data in the AWS Database Migration Service User Guide.. 
     */
    IncludeOpForFullLoad?: BooleanOptional;
    /**
     * A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target. If CdcInsertsOnly is set to true or y, only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of IncludeOpForFullLoad. If IncludeOpForFullLoad is set to true, the first field of every CDC record is set to I to indicate the INSERT operation at the source. If IncludeOpForFullLoad is set to false, every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see Indicating Source DB Operations in Migrated S3 Data in the AWS Database Migration Service User Guide..  AWS DMS supports the interaction described preceding between the CdcInsertsOnly and IncludeOpForFullLoad parameters in versions 3.1.4 and later.   CdcInsertsOnly and CdcInsertsAndUpdates can't both be set to true for the same endpoint. Set either CdcInsertsOnly or CdcInsertsAndUpdates to true for the same endpoint, but not both. 
     */
    CdcInsertsOnly?: BooleanOptional;
    /**
     * A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.  AWS DMS supports the TimestampColumnName parameter in versions 3.1.4 and later.  DMS includes an additional STRING column in the .csv or .parquet object files of your migrated data when you set TimestampColumnName to a nonblank value. For a full load, each row of this timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS.  For a change data capture (CDC) load, each row of the timestamp column contains the timestamp for the commit of that row in the source database. The string format for this timestamp column value is yyyy-MM-dd HH:mm:ss.SSSSSS. By default, the precision of this value is in microseconds. For a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS for the source database. When the AddColumnName parameter is set to true, DMS also includes a name for the timestamp column that you set with TimestampColumnName.
     */
    TimestampColumnName?: String;
    /**
     * A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format.  AWS DMS supports the ParquetTimestampInMillisecond parameter in versions 3.1.4 and later.  When ParquetTimestampInMillisecond is set to true or y, AWS DMS writes all TIMESTAMP columns in a .parquet formatted file with millisecond precision. Otherwise, DMS writes them with microsecond precision. Currently, Amazon Athena and AWS Glue can handle only millisecond precision for TIMESTAMP values. Set this parameter to true for S3 endpoint object files that are .parquet formatted only if you plan to query or process the data with Athena or AWS Glue.  AWS DMS writes any TIMESTAMP column values written to an S3 file in .csv format with microsecond precision. Setting ParquetTimestampInMillisecond has no effect on the string format of the timestamp column value that is inserted by setting the TimestampColumnName parameter. 
     */
    ParquetTimestampInMillisecond?: BooleanOptional;
    /**
     * A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is false, but when CdcInsertsAndUpdates is set to trueor y, INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file.  For .csv file format only, how these INSERTs and UPDATEs are recorded depends on the value of the IncludeOpForFullLoad parameter. If IncludeOpForFullLoad is set to true, the first field of every CDC record is set to either I or U to indicate INSERT and UPDATE operations at the source. But if IncludeOpForFullLoad is set to false, CDC records are written without an indication of INSERT or UPDATE operations at the source. For more information about how these settings work together, see Indicating Source DB Operations in Migrated S3 Data in the AWS Database Migration Service User Guide..  AWS DMS supports the use of the CdcInsertsAndUpdates parameter in versions 3.3.1 and later.  CdcInsertsOnly and CdcInsertsAndUpdates can't both be set to true for the same endpoint. Set either CdcInsertsOnly or CdcInsertsAndUpdates to true for the same endpoint, but not both. 
     */
    CdcInsertsAndUpdates?: BooleanOptional;
  }
  export type SchemaList = String[];
  export type SecretString = string;
  export type SourceIdsList = String[];
  export type SourceType = "replication-instance"|string;
  export interface StartReplicationTaskAssessmentMessage {
    /**
     *  The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn: String;
  }
  export interface StartReplicationTaskAssessmentResponse {
    /**
     *  The assessed replication task. 
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface StartReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task to be started.
     */
    ReplicationTaskArn: String;
    /**
     * The type of replication task.
     */
    StartReplicationTaskType: StartReplicationTaskTypeValue;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”
     */
    CdcStartTime?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for AWS DMS. 
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “
     */
    CdcStopPosition?: String;
  }
  export interface StartReplicationTaskResponse {
    /**
     * The replication task started.
     */
    ReplicationTask?: ReplicationTask;
  }
  export type StartReplicationTaskTypeValue = "start-replication"|"resume-processing"|"reload-target"|string;
  export interface StopReplicationTaskMessage {
    /**
     * The Amazon Resource Name(ARN) of the replication task to be stopped.
     */
    ReplicationTaskArn: String;
  }
  export interface StopReplicationTaskResponse {
    /**
     * The replication task stopped.
     */
    ReplicationTask?: ReplicationTask;
  }
  export type String = string;
  export interface Subnet {
    /**
     * The subnet identifier.
     */
    SubnetIdentifier?: String;
    /**
     * The Availability Zone of the subnet.
     */
    SubnetAvailabilityZone?: AvailabilityZone;
    /**
     * The status of the subnet.
     */
    SubnetStatus?: String;
  }
  export type SubnetIdentifierList = String[];
  export type SubnetList = Subnet[];
  export interface SupportedEndpointType {
    /**
     * The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", and "neptune".
     */
    EngineName?: String;
    /**
     * Indicates if Change Data Capture (CDC) is supported.
     */
    SupportsCDC?: Boolean;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    EndpointType?: ReplicationEndpointTypeValue;
    /**
     * The earliest AWS DMS engine version that supports this endpoint engine. Note that endpoint engines released with AWS DMS versions earlier than 3.1.1 do not return a value for this parameter.
     */
    ReplicationInstanceEngineMinimumVersion?: String;
    /**
     * The expanded name for the engine name. For example, if the EngineName parameter is "aurora," this value would be "Amazon Aurora MySQL."
     */
    EngineDisplayName?: String;
  }
  export type SupportedEndpointTypeList = SupportedEndpointType[];
  export type TStamp = Date;
  export type TableListToReload = TableToReload[];
  export interface TableStatistics {
    /**
     * The schema name.
     */
    SchemaName?: String;
    /**
     * The name of the table.
     */
    TableName?: String;
    /**
     * The number of insert actions performed on a table.
     */
    Inserts?: Long;
    /**
     * The number of delete actions performed on a table.
     */
    Deletes?: Long;
    /**
     * The number of update actions performed on a table.
     */
    Updates?: Long;
    /**
     * The data definition language (DDL) used to build and modify the structure of your tables.
     */
    Ddls?: Long;
    /**
     * The number of rows added during the full load operation.
     */
    FullLoadRows?: Long;
    /**
     * The number of rows that failed conditional checks during the full load operation (valid only for migrations where DynamoDB is the target).
     */
    FullLoadCondtnlChkFailedRows?: Long;
    /**
     * The number of rows that failed to load during the full load operation (valid only for migrations where DynamoDB is the target).
     */
    FullLoadErrorRows?: Long;
    /**
     * The time when the full load operation started.
     */
    FullLoadStartTime?: TStamp;
    /**
     * The time when the full load operation completed.
     */
    FullLoadEndTime?: TStamp;
    /**
     * A value that indicates if the table was reloaded (true) or loaded as part of a new full load operation (false).
     */
    FullLoadReloaded?: BooleanOptional;
    /**
     * The last time a table was updated.
     */
    LastUpdateTime?: TStamp;
    /**
     * The state of the tables described. Valid states: Table does not exist | Before load | Full load | Table completed | Table cancelled | Table error | Table all | Table updates | Table is being reloaded
     */
    TableState?: String;
    /**
     * The number of records that have yet to be validated.
     */
    ValidationPendingRecords?: Long;
    /**
     * The number of records that failed validation.
     */
    ValidationFailedRecords?: Long;
    /**
     * The number of records that couldn't be validated.
     */
    ValidationSuspendedRecords?: Long;
    /**
     * The validation state of the table. This parameter can have the following values:   Not enabled - Validation isn't enabled for the table in the migration task.   Pending records - Some records in the table are waiting for validation.   Mismatched records - Some records in the table don't match between the source and target.   Suspended records - Some records in the table couldn't be validated.   No primary key - The table couldn't be validated because it has no primary key.   Table error - The table wasn't validated because it's in an error state and some data wasn't migrated.   Validated - All rows in the table are validated. If the table is updated, the status can change from Validated.   Error - The table couldn't be validated because of an unexpected error.  
     */
    ValidationState?: String;
    /**
     * Additional details about the state of validation.
     */
    ValidationStateDetails?: String;
  }
  export type TableStatisticsList = TableStatistics[];
  export interface TableToReload {
    /**
     * The schema name of the table to be reloaded.
     */
    SchemaName?: String;
    /**
     * The table name of the table to be reloaded.
     */
    TableName?: String;
  }
  export interface Tag {
    /**
     * A key is the required name of the tag. The string value can be 1-128 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regular expressions: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Key?: String;
    /**
     * A value is the optional value of the tag. The string value can be 1-256 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regular expressions: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Value?: String;
  }
  export type TagList = Tag[];
  export interface TestConnectionMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface TestConnectionResponse {
    /**
     * The connection tested.
     */
    Connection?: Connection;
  }
  export type VpcSecurityGroupIdList = String[];
  export interface VpcSecurityGroupMembership {
    /**
     * The VPC security group ID.
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
  export type apiVersion = "2016-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DMS client.
   */
  export import Types = DMS;
}
export = DMS;
