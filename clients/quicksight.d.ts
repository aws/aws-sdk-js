import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class QuickSight extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: QuickSight.Types.ClientConfiguration)
  config: Config & QuickSight.Types.ClientConfiguration;
  /**
   * Cancels an ongoing ingestion of data into SPICE.
   */
  cancelIngestion(params: QuickSight.Types.CancelIngestionRequest, callback?: (err: AWSError, data: QuickSight.Types.CancelIngestionResponse) => void): Request<QuickSight.Types.CancelIngestionResponse, AWSError>;
  /**
   * Cancels an ongoing ingestion of data into SPICE.
   */
  cancelIngestion(callback?: (err: AWSError, data: QuickSight.Types.CancelIngestionResponse) => void): Request<QuickSight.Types.CancelIngestionResponse, AWSError>;
  /**
   * Creates a dashboard from a template. To first create a template, see the CreateTemplate API operation. A dashboard is an entity in QuickSight that identifies QuickSight reports, created from analyses. You can share QuickSight dashboards. With the right permissions, you can create scheduled email reports from them. The CreateDashboard, DescribeDashboard, and ListDashboardsByUser API operations act on the dashboard entity. If you have the correct permissions, you can create a dashboard from a template that exists in a different AWS account.
   */
  createDashboard(params: QuickSight.Types.CreateDashboardRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateDashboardResponse) => void): Request<QuickSight.Types.CreateDashboardResponse, AWSError>;
  /**
   * Creates a dashboard from a template. To first create a template, see the CreateTemplate API operation. A dashboard is an entity in QuickSight that identifies QuickSight reports, created from analyses. You can share QuickSight dashboards. With the right permissions, you can create scheduled email reports from them. The CreateDashboard, DescribeDashboard, and ListDashboardsByUser API operations act on the dashboard entity. If you have the correct permissions, you can create a dashboard from a template that exists in a different AWS account.
   */
  createDashboard(callback?: (err: AWSError, data: QuickSight.Types.CreateDashboardResponse) => void): Request<QuickSight.Types.CreateDashboardResponse, AWSError>;
  /**
   * Creates a dataset.
   */
  createDataSet(params: QuickSight.Types.CreateDataSetRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateDataSetResponse) => void): Request<QuickSight.Types.CreateDataSetResponse, AWSError>;
  /**
   * Creates a dataset.
   */
  createDataSet(callback?: (err: AWSError, data: QuickSight.Types.CreateDataSetResponse) => void): Request<QuickSight.Types.CreateDataSetResponse, AWSError>;
  /**
   * Creates a data source.
   */
  createDataSource(params: QuickSight.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateDataSourceResponse) => void): Request<QuickSight.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a data source.
   */
  createDataSource(callback?: (err: AWSError, data: QuickSight.Types.CreateDataSourceResponse) => void): Request<QuickSight.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.
   */
  createGroup(params: QuickSight.Types.CreateGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateGroupResponse) => void): Request<QuickSight.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.
   */
  createGroup(callback?: (err: AWSError, data: QuickSight.Types.CreateGroupResponse) => void): Request<QuickSight.Types.CreateGroupResponse, AWSError>;
  /**
   * Adds an Amazon QuickSight user to an Amazon QuickSight group. 
   */
  createGroupMembership(params: QuickSight.Types.CreateGroupMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateGroupMembershipResponse) => void): Request<QuickSight.Types.CreateGroupMembershipResponse, AWSError>;
  /**
   * Adds an Amazon QuickSight user to an Amazon QuickSight group. 
   */
  createGroupMembership(callback?: (err: AWSError, data: QuickSight.Types.CreateGroupMembershipResponse) => void): Request<QuickSight.Types.CreateGroupMembershipResponse, AWSError>;
  /**
   * Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy will be assigned to specified groups or users of Amazon QuickSight. The users and groups need to be in the same namespace. 
   */
  createIAMPolicyAssignment(params: QuickSight.Types.CreateIAMPolicyAssignmentRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.CreateIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy will be assigned to specified groups or users of Amazon QuickSight. The users and groups need to be in the same namespace. 
   */
  createIAMPolicyAssignment(callback?: (err: AWSError, data: QuickSight.Types.CreateIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.CreateIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Creates and starts a new SPICE ingestion on a dataset Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see How do I create an IAM policy to control access to Amazon EC2 resources using tags? in the AWS Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.
   */
  createIngestion(params: QuickSight.Types.CreateIngestionRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateIngestionResponse) => void): Request<QuickSight.Types.CreateIngestionResponse, AWSError>;
  /**
   * Creates and starts a new SPICE ingestion on a dataset Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see How do I create an IAM policy to control access to Amazon EC2 resources using tags? in the AWS Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.
   */
  createIngestion(callback?: (err: AWSError, data: QuickSight.Types.CreateIngestionResponse) => void): Request<QuickSight.Types.CreateIngestionResponse, AWSError>;
  /**
   * Creates a template from an existing QuickSight analysis or template. You can use the resulting template to create a dashboard. A template is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.
   */
  createTemplate(params: QuickSight.Types.CreateTemplateRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateTemplateResponse) => void): Request<QuickSight.Types.CreateTemplateResponse, AWSError>;
  /**
   * Creates a template from an existing QuickSight analysis or template. You can use the resulting template to create a dashboard. A template is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.
   */
  createTemplate(callback?: (err: AWSError, data: QuickSight.Types.CreateTemplateResponse) => void): Request<QuickSight.Types.CreateTemplateResponse, AWSError>;
  /**
   * Creates a template alias for a template.
   */
  createTemplateAlias(params: QuickSight.Types.CreateTemplateAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateTemplateAliasResponse) => void): Request<QuickSight.Types.CreateTemplateAliasResponse, AWSError>;
  /**
   * Creates a template alias for a template.
   */
  createTemplateAlias(callback?: (err: AWSError, data: QuickSight.Types.CreateTemplateAliasResponse) => void): Request<QuickSight.Types.CreateTemplateAliasResponse, AWSError>;
  /**
   * Deletes a dashboard.
   */
  deleteDashboard(params: QuickSight.Types.DeleteDashboardRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteDashboardResponse) => void): Request<QuickSight.Types.DeleteDashboardResponse, AWSError>;
  /**
   * Deletes a dashboard.
   */
  deleteDashboard(callback?: (err: AWSError, data: QuickSight.Types.DeleteDashboardResponse) => void): Request<QuickSight.Types.DeleteDashboardResponse, AWSError>;
  /**
   * Deletes a dataset.
   */
  deleteDataSet(params: QuickSight.Types.DeleteDataSetRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteDataSetResponse) => void): Request<QuickSight.Types.DeleteDataSetResponse, AWSError>;
  /**
   * Deletes a dataset.
   */
  deleteDataSet(callback?: (err: AWSError, data: QuickSight.Types.DeleteDataSetResponse) => void): Request<QuickSight.Types.DeleteDataSetResponse, AWSError>;
  /**
   * Deletes the data source permanently. This action breaks all the datasets that reference the deleted data source.
   */
  deleteDataSource(params: QuickSight.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteDataSourceResponse) => void): Request<QuickSight.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes the data source permanently. This action breaks all the datasets that reference the deleted data source.
   */
  deleteDataSource(callback?: (err: AWSError, data: QuickSight.Types.DeleteDataSourceResponse) => void): Request<QuickSight.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Removes a user group from Amazon QuickSight. 
   */
  deleteGroup(params: QuickSight.Types.DeleteGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupResponse) => void): Request<QuickSight.Types.DeleteGroupResponse, AWSError>;
  /**
   * Removes a user group from Amazon QuickSight. 
   */
  deleteGroup(callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupResponse) => void): Request<QuickSight.Types.DeleteGroupResponse, AWSError>;
  /**
   * Removes a user from a group so that the user is no longer a member of the group.
   */
  deleteGroupMembership(params: QuickSight.Types.DeleteGroupMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupMembershipResponse) => void): Request<QuickSight.Types.DeleteGroupMembershipResponse, AWSError>;
  /**
   * Removes a user from a group so that the user is no longer a member of the group.
   */
  deleteGroupMembership(callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupMembershipResponse) => void): Request<QuickSight.Types.DeleteGroupMembershipResponse, AWSError>;
  /**
   * Deletes an existing IAM policy assignment.
   */
  deleteIAMPolicyAssignment(params: QuickSight.Types.DeleteIAMPolicyAssignmentRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.DeleteIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Deletes an existing IAM policy assignment.
   */
  deleteIAMPolicyAssignment(callback?: (err: AWSError, data: QuickSight.Types.DeleteIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.DeleteIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Deletes a template.
   */
  deleteTemplate(params: QuickSight.Types.DeleteTemplateRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteTemplateResponse) => void): Request<QuickSight.Types.DeleteTemplateResponse, AWSError>;
  /**
   * Deletes a template.
   */
  deleteTemplate(callback?: (err: AWSError, data: QuickSight.Types.DeleteTemplateResponse) => void): Request<QuickSight.Types.DeleteTemplateResponse, AWSError>;
  /**
   * Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to.
   */
  deleteTemplateAlias(params: QuickSight.Types.DeleteTemplateAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteTemplateAliasResponse) => void): Request<QuickSight.Types.DeleteTemplateAliasResponse, AWSError>;
  /**
   * Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to.
   */
  deleteTemplateAlias(callback?: (err: AWSError, data: QuickSight.Types.DeleteTemplateAliasResponse) => void): Request<QuickSight.Types.DeleteTemplateAliasResponse, AWSError>;
  /**
   * Deletes the Amazon QuickSight user that is associated with the identity of the AWS Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call. 
   */
  deleteUser(params: QuickSight.Types.DeleteUserRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteUserResponse) => void): Request<QuickSight.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes the Amazon QuickSight user that is associated with the identity of the AWS Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call. 
   */
  deleteUser(callback?: (err: AWSError, data: QuickSight.Types.DeleteUserResponse) => void): Request<QuickSight.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes a user identified by its principal ID. 
   */
  deleteUserByPrincipalId(params: QuickSight.Types.DeleteUserByPrincipalIdRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteUserByPrincipalIdResponse) => void): Request<QuickSight.Types.DeleteUserByPrincipalIdResponse, AWSError>;
  /**
   * Deletes a user identified by its principal ID. 
   */
  deleteUserByPrincipalId(callback?: (err: AWSError, data: QuickSight.Types.DeleteUserByPrincipalIdResponse) => void): Request<QuickSight.Types.DeleteUserByPrincipalIdResponse, AWSError>;
  /**
   * Provides a summary for a dashboard.
   */
  describeDashboard(params: QuickSight.Types.DescribeDashboardRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardResponse) => void): Request<QuickSight.Types.DescribeDashboardResponse, AWSError>;
  /**
   * Provides a summary for a dashboard.
   */
  describeDashboard(callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardResponse) => void): Request<QuickSight.Types.DescribeDashboardResponse, AWSError>;
  /**
   * Describes read and write permissions for a dashboard.
   */
  describeDashboardPermissions(params: QuickSight.Types.DescribeDashboardPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardPermissionsResponse) => void): Request<QuickSight.Types.DescribeDashboardPermissionsResponse, AWSError>;
  /**
   * Describes read and write permissions for a dashboard.
   */
  describeDashboardPermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeDashboardPermissionsResponse) => void): Request<QuickSight.Types.DescribeDashboardPermissionsResponse, AWSError>;
  /**
   * Describes a dataset. 
   */
  describeDataSet(params: QuickSight.Types.DescribeDataSetRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSetResponse) => void): Request<QuickSight.Types.DescribeDataSetResponse, AWSError>;
  /**
   * Describes a dataset. 
   */
  describeDataSet(callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSetResponse) => void): Request<QuickSight.Types.DescribeDataSetResponse, AWSError>;
  /**
   * Describes the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.
   */
  describeDataSetPermissions(params: QuickSight.Types.DescribeDataSetPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSetPermissionsResponse) => void): Request<QuickSight.Types.DescribeDataSetPermissionsResponse, AWSError>;
  /**
   * Describes the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.
   */
  describeDataSetPermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSetPermissionsResponse) => void): Request<QuickSight.Types.DescribeDataSetPermissionsResponse, AWSError>;
  /**
   * Describes a data source.
   */
  describeDataSource(params: QuickSight.Types.DescribeDataSourceRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSourceResponse) => void): Request<QuickSight.Types.DescribeDataSourceResponse, AWSError>;
  /**
   * Describes a data source.
   */
  describeDataSource(callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSourceResponse) => void): Request<QuickSight.Types.DescribeDataSourceResponse, AWSError>;
  /**
   * Describes the resource permissions for a data source.
   */
  describeDataSourcePermissions(params: QuickSight.Types.DescribeDataSourcePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSourcePermissionsResponse) => void): Request<QuickSight.Types.DescribeDataSourcePermissionsResponse, AWSError>;
  /**
   * Describes the resource permissions for a data source.
   */
  describeDataSourcePermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeDataSourcePermissionsResponse) => void): Request<QuickSight.Types.DescribeDataSourcePermissionsResponse, AWSError>;
  /**
   * Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). 
   */
  describeGroup(params: QuickSight.Types.DescribeGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeGroupResponse) => void): Request<QuickSight.Types.DescribeGroupResponse, AWSError>;
  /**
   * Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). 
   */
  describeGroup(callback?: (err: AWSError, data: QuickSight.Types.DescribeGroupResponse) => void): Request<QuickSight.Types.DescribeGroupResponse, AWSError>;
  /**
   * Describes an existing IAM policy assignment, as specified by the assignment name.
   */
  describeIAMPolicyAssignment(params: QuickSight.Types.DescribeIAMPolicyAssignmentRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.DescribeIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Describes an existing IAM policy assignment, as specified by the assignment name.
   */
  describeIAMPolicyAssignment(callback?: (err: AWSError, data: QuickSight.Types.DescribeIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.DescribeIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Describes a SPICE ingestion.
   */
  describeIngestion(params: QuickSight.Types.DescribeIngestionRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeIngestionResponse) => void): Request<QuickSight.Types.DescribeIngestionResponse, AWSError>;
  /**
   * Describes a SPICE ingestion.
   */
  describeIngestion(callback?: (err: AWSError, data: QuickSight.Types.DescribeIngestionResponse) => void): Request<QuickSight.Types.DescribeIngestionResponse, AWSError>;
  /**
   * Describes a template's metadata.
   */
  describeTemplate(params: QuickSight.Types.DescribeTemplateRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateResponse) => void): Request<QuickSight.Types.DescribeTemplateResponse, AWSError>;
  /**
   * Describes a template's metadata.
   */
  describeTemplate(callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateResponse) => void): Request<QuickSight.Types.DescribeTemplateResponse, AWSError>;
  /**
   * Describes the template alias for a template.
   */
  describeTemplateAlias(params: QuickSight.Types.DescribeTemplateAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateAliasResponse) => void): Request<QuickSight.Types.DescribeTemplateAliasResponse, AWSError>;
  /**
   * Describes the template alias for a template.
   */
  describeTemplateAlias(callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplateAliasResponse) => void): Request<QuickSight.Types.DescribeTemplateAliasResponse, AWSError>;
  /**
   * Describes read and write permissions on a template.
   */
  describeTemplatePermissions(params: QuickSight.Types.DescribeTemplatePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplatePermissionsResponse) => void): Request<QuickSight.Types.DescribeTemplatePermissionsResponse, AWSError>;
  /**
   * Describes read and write permissions on a template.
   */
  describeTemplatePermissions(callback?: (err: AWSError, data: QuickSight.Types.DescribeTemplatePermissionsResponse) => void): Request<QuickSight.Types.DescribeTemplatePermissionsResponse, AWSError>;
  /**
   * Returns information about a user, given the user name. 
   */
  describeUser(params: QuickSight.Types.DescribeUserRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeUserResponse) => void): Request<QuickSight.Types.DescribeUserResponse, AWSError>;
  /**
   * Returns information about a user, given the user name. 
   */
  describeUser(callback?: (err: AWSError, data: QuickSight.Types.DescribeUserResponse) => void): Request<QuickSight.Types.DescribeUserResponse, AWSError>;
  /**
   * Generates a server-side embeddable URL and authorization code. For this process to work properly, first configure the dashboards and user permissions. For more information, see Embedding Amazon QuickSight Dashboards in the Amazon QuickSight User Guide or Embedding Amazon QuickSight Dashboards in the Amazon QuickSight API Reference. Currently, you can use GetDashboardEmbedURL only from the server, not from the user’s browser.
   */
  getDashboardEmbedUrl(params: QuickSight.Types.GetDashboardEmbedUrlRequest, callback?: (err: AWSError, data: QuickSight.Types.GetDashboardEmbedUrlResponse) => void): Request<QuickSight.Types.GetDashboardEmbedUrlResponse, AWSError>;
  /**
   * Generates a server-side embeddable URL and authorization code. For this process to work properly, first configure the dashboards and user permissions. For more information, see Embedding Amazon QuickSight Dashboards in the Amazon QuickSight User Guide or Embedding Amazon QuickSight Dashboards in the Amazon QuickSight API Reference. Currently, you can use GetDashboardEmbedURL only from the server, not from the user’s browser.
   */
  getDashboardEmbedUrl(callback?: (err: AWSError, data: QuickSight.Types.GetDashboardEmbedUrlResponse) => void): Request<QuickSight.Types.GetDashboardEmbedUrlResponse, AWSError>;
  /**
   * Lists all the versions of the dashboards in the QuickSight subscription.
   */
  listDashboardVersions(params: QuickSight.Types.ListDashboardVersionsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListDashboardVersionsResponse) => void): Request<QuickSight.Types.ListDashboardVersionsResponse, AWSError>;
  /**
   * Lists all the versions of the dashboards in the QuickSight subscription.
   */
  listDashboardVersions(callback?: (err: AWSError, data: QuickSight.Types.ListDashboardVersionsResponse) => void): Request<QuickSight.Types.ListDashboardVersionsResponse, AWSError>;
  /**
   * Lists dashboards in an AWS account.
   */
  listDashboards(params: QuickSight.Types.ListDashboardsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListDashboardsResponse) => void): Request<QuickSight.Types.ListDashboardsResponse, AWSError>;
  /**
   * Lists dashboards in an AWS account.
   */
  listDashboards(callback?: (err: AWSError, data: QuickSight.Types.ListDashboardsResponse) => void): Request<QuickSight.Types.ListDashboardsResponse, AWSError>;
  /**
   * Lists all of the datasets belonging to the current AWS account in an AWS Region. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/*.
   */
  listDataSets(params: QuickSight.Types.ListDataSetsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListDataSetsResponse) => void): Request<QuickSight.Types.ListDataSetsResponse, AWSError>;
  /**
   * Lists all of the datasets belonging to the current AWS account in an AWS Region. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/*.
   */
  listDataSets(callback?: (err: AWSError, data: QuickSight.Types.ListDataSetsResponse) => void): Request<QuickSight.Types.ListDataSetsResponse, AWSError>;
  /**
   * Lists data sources in current AWS Region that belong to this AWS account.
   */
  listDataSources(params: QuickSight.Types.ListDataSourcesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListDataSourcesResponse) => void): Request<QuickSight.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists data sources in current AWS Region that belong to this AWS account.
   */
  listDataSources(callback?: (err: AWSError, data: QuickSight.Types.ListDataSourcesResponse) => void): Request<QuickSight.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists member users in a group.
   */
  listGroupMemberships(params: QuickSight.Types.ListGroupMembershipsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListGroupMembershipsResponse) => void): Request<QuickSight.Types.ListGroupMembershipsResponse, AWSError>;
  /**
   * Lists member users in a group.
   */
  listGroupMemberships(callback?: (err: AWSError, data: QuickSight.Types.ListGroupMembershipsResponse) => void): Request<QuickSight.Types.ListGroupMembershipsResponse, AWSError>;
  /**
   * Lists all user groups in Amazon QuickSight. 
   */
  listGroups(params: QuickSight.Types.ListGroupsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListGroupsResponse) => void): Request<QuickSight.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists all user groups in Amazon QuickSight. 
   */
  listGroups(callback?: (err: AWSError, data: QuickSight.Types.ListGroupsResponse) => void): Request<QuickSight.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists IAM policy assignments in the current Amazon QuickSight account.
   */
  listIAMPolicyAssignments(params: QuickSight.Types.ListIAMPolicyAssignmentsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListIAMPolicyAssignmentsResponse) => void): Request<QuickSight.Types.ListIAMPolicyAssignmentsResponse, AWSError>;
  /**
   * Lists IAM policy assignments in the current Amazon QuickSight account.
   */
  listIAMPolicyAssignments(callback?: (err: AWSError, data: QuickSight.Types.ListIAMPolicyAssignmentsResponse) => void): Request<QuickSight.Types.ListIAMPolicyAssignmentsResponse, AWSError>;
  /**
   * Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM policies assigned to the specified user and group or groups that the user belongs to.
   */
  listIAMPolicyAssignmentsForUser(params: QuickSight.Types.ListIAMPolicyAssignmentsForUserRequest, callback?: (err: AWSError, data: QuickSight.Types.ListIAMPolicyAssignmentsForUserResponse) => void): Request<QuickSight.Types.ListIAMPolicyAssignmentsForUserResponse, AWSError>;
  /**
   * Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM policies assigned to the specified user and group or groups that the user belongs to.
   */
  listIAMPolicyAssignmentsForUser(callback?: (err: AWSError, data: QuickSight.Types.ListIAMPolicyAssignmentsForUserResponse) => void): Request<QuickSight.Types.ListIAMPolicyAssignmentsForUserResponse, AWSError>;
  /**
   * Lists the history of SPICE ingestions for a dataset.
   */
  listIngestions(params: QuickSight.Types.ListIngestionsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListIngestionsResponse) => void): Request<QuickSight.Types.ListIngestionsResponse, AWSError>;
  /**
   * Lists the history of SPICE ingestions for a dataset.
   */
  listIngestions(callback?: (err: AWSError, data: QuickSight.Types.ListIngestionsResponse) => void): Request<QuickSight.Types.ListIngestionsResponse, AWSError>;
  /**
   * Lists the tags assigned to a resource.
   */
  listTagsForResource(params: QuickSight.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: QuickSight.Types.ListTagsForResourceResponse) => void): Request<QuickSight.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags assigned to a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: QuickSight.Types.ListTagsForResourceResponse) => void): Request<QuickSight.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all the aliases of a template.
   */
  listTemplateAliases(params: QuickSight.Types.ListTemplateAliasesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListTemplateAliasesResponse) => void): Request<QuickSight.Types.ListTemplateAliasesResponse, AWSError>;
  /**
   * Lists all the aliases of a template.
   */
  listTemplateAliases(callback?: (err: AWSError, data: QuickSight.Types.ListTemplateAliasesResponse) => void): Request<QuickSight.Types.ListTemplateAliasesResponse, AWSError>;
  /**
   * Lists all the versions of the templates in the current Amazon QuickSight account.
   */
  listTemplateVersions(params: QuickSight.Types.ListTemplateVersionsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListTemplateVersionsResponse) => void): Request<QuickSight.Types.ListTemplateVersionsResponse, AWSError>;
  /**
   * Lists all the versions of the templates in the current Amazon QuickSight account.
   */
  listTemplateVersions(callback?: (err: AWSError, data: QuickSight.Types.ListTemplateVersionsResponse) => void): Request<QuickSight.Types.ListTemplateVersionsResponse, AWSError>;
  /**
   * Lists all the templates in the current Amazon QuickSight account.
   */
  listTemplates(params: QuickSight.Types.ListTemplatesRequest, callback?: (err: AWSError, data: QuickSight.Types.ListTemplatesResponse) => void): Request<QuickSight.Types.ListTemplatesResponse, AWSError>;
  /**
   * Lists all the templates in the current Amazon QuickSight account.
   */
  listTemplates(callback?: (err: AWSError, data: QuickSight.Types.ListTemplatesResponse) => void): Request<QuickSight.Types.ListTemplatesResponse, AWSError>;
  /**
   * Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.
   */
  listUserGroups(params: QuickSight.Types.ListUserGroupsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListUserGroupsResponse) => void): Request<QuickSight.Types.ListUserGroupsResponse, AWSError>;
  /**
   * Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.
   */
  listUserGroups(callback?: (err: AWSError, data: QuickSight.Types.ListUserGroupsResponse) => void): Request<QuickSight.Types.ListUserGroupsResponse, AWSError>;
  /**
   * Returns a list of all of the Amazon QuickSight users belonging to this account. 
   */
  listUsers(params: QuickSight.Types.ListUsersRequest, callback?: (err: AWSError, data: QuickSight.Types.ListUsersResponse) => void): Request<QuickSight.Types.ListUsersResponse, AWSError>;
  /**
   * Returns a list of all of the Amazon QuickSight users belonging to this account. 
   */
  listUsers(callback?: (err: AWSError, data: QuickSight.Types.ListUsersResponse) => void): Request<QuickSight.Types.ListUsersResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity and Access Management (IAM) identity or role specified in the request. 
   */
  registerUser(params: QuickSight.Types.RegisterUserRequest, callback?: (err: AWSError, data: QuickSight.Types.RegisterUserResponse) => void): Request<QuickSight.Types.RegisterUserResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity and Access Management (IAM) identity or role specified in the request. 
   */
  registerUser(callback?: (err: AWSError, data: QuickSight.Types.RegisterUserResponse) => void): Request<QuickSight.Types.RegisterUserResponse, AWSError>;
  /**
   * Searchs for dashboards that belong to a user. 
   */
  searchDashboards(params: QuickSight.Types.SearchDashboardsRequest, callback?: (err: AWSError, data: QuickSight.Types.SearchDashboardsResponse) => void): Request<QuickSight.Types.SearchDashboardsResponse, AWSError>;
  /**
   * Searchs for dashboards that belong to a user. 
   */
  searchDashboards(callback?: (err: AWSError, data: QuickSight.Types.SearchDashboardsResponse) => void): Request<QuickSight.Types.SearchDashboardsResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified QuickSight resource.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. QuickSight supports tagging on data set, data source, dashboard, and template.  Tagging for QuickSight works in a similar way to tagging for other AWS services, except for the following:   You can't use tags to track AWS costs for QuickSight. This restriction is because QuickSight costs are based on users and SPICE capacity, which aren't taggable resources.   QuickSight doesn't currently support the Tag Editor for AWS Resource Groups.  
   */
  tagResource(params: QuickSight.Types.TagResourceRequest, callback?: (err: AWSError, data: QuickSight.Types.TagResourceResponse) => void): Request<QuickSight.Types.TagResourceResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified QuickSight resource.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. QuickSight supports tagging on data set, data source, dashboard, and template.  Tagging for QuickSight works in a similar way to tagging for other AWS services, except for the following:   You can't use tags to track AWS costs for QuickSight. This restriction is because QuickSight costs are based on users and SPICE capacity, which aren't taggable resources.   QuickSight doesn't currently support the Tag Editor for AWS Resource Groups.  
   */
  tagResource(callback?: (err: AWSError, data: QuickSight.Types.TagResourceResponse) => void): Request<QuickSight.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag or tags from a resource.
   */
  untagResource(params: QuickSight.Types.UntagResourceRequest, callback?: (err: AWSError, data: QuickSight.Types.UntagResourceResponse) => void): Request<QuickSight.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag or tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: QuickSight.Types.UntagResourceResponse) => void): Request<QuickSight.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a dashboard in an AWS account.
   */
  updateDashboard(params: QuickSight.Types.UpdateDashboardRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardResponse) => void): Request<QuickSight.Types.UpdateDashboardResponse, AWSError>;
  /**
   * Updates a dashboard in an AWS account.
   */
  updateDashboard(callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardResponse) => void): Request<QuickSight.Types.UpdateDashboardResponse, AWSError>;
  /**
   * Updates read and write permissions on a dashboard.
   */
  updateDashboardPermissions(params: QuickSight.Types.UpdateDashboardPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardPermissionsResponse) => void): Request<QuickSight.Types.UpdateDashboardPermissionsResponse, AWSError>;
  /**
   * Updates read and write permissions on a dashboard.
   */
  updateDashboardPermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardPermissionsResponse) => void): Request<QuickSight.Types.UpdateDashboardPermissionsResponse, AWSError>;
  /**
   * Updates the published version of a dashboard.
   */
  updateDashboardPublishedVersion(params: QuickSight.Types.UpdateDashboardPublishedVersionRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardPublishedVersionResponse) => void): Request<QuickSight.Types.UpdateDashboardPublishedVersionResponse, AWSError>;
  /**
   * Updates the published version of a dashboard.
   */
  updateDashboardPublishedVersion(callback?: (err: AWSError, data: QuickSight.Types.UpdateDashboardPublishedVersionResponse) => void): Request<QuickSight.Types.UpdateDashboardPublishedVersionResponse, AWSError>;
  /**
   * Updates a dataset.
   */
  updateDataSet(params: QuickSight.Types.UpdateDataSetRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSetResponse) => void): Request<QuickSight.Types.UpdateDataSetResponse, AWSError>;
  /**
   * Updates a dataset.
   */
  updateDataSet(callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSetResponse) => void): Request<QuickSight.Types.UpdateDataSetResponse, AWSError>;
  /**
   * Updates the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.
   */
  updateDataSetPermissions(params: QuickSight.Types.UpdateDataSetPermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSetPermissionsResponse) => void): Request<QuickSight.Types.UpdateDataSetPermissionsResponse, AWSError>;
  /**
   * Updates the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.
   */
  updateDataSetPermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSetPermissionsResponse) => void): Request<QuickSight.Types.UpdateDataSetPermissionsResponse, AWSError>;
  /**
   * Updates a data source.
   */
  updateDataSource(params: QuickSight.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSourceResponse) => void): Request<QuickSight.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates a data source.
   */
  updateDataSource(callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSourceResponse) => void): Request<QuickSight.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates the permissions to a data source.
   */
  updateDataSourcePermissions(params: QuickSight.Types.UpdateDataSourcePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSourcePermissionsResponse) => void): Request<QuickSight.Types.UpdateDataSourcePermissionsResponse, AWSError>;
  /**
   * Updates the permissions to a data source.
   */
  updateDataSourcePermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateDataSourcePermissionsResponse) => void): Request<QuickSight.Types.UpdateDataSourcePermissionsResponse, AWSError>;
  /**
   * Changes a group description. 
   */
  updateGroup(params: QuickSight.Types.UpdateGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateGroupResponse) => void): Request<QuickSight.Types.UpdateGroupResponse, AWSError>;
  /**
   * Changes a group description. 
   */
  updateGroup(callback?: (err: AWSError, data: QuickSight.Types.UpdateGroupResponse) => void): Request<QuickSight.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request.
   */
  updateIAMPolicyAssignment(params: QuickSight.Types.UpdateIAMPolicyAssignmentRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.UpdateIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request.
   */
  updateIAMPolicyAssignment(callback?: (err: AWSError, data: QuickSight.Types.UpdateIAMPolicyAssignmentResponse) => void): Request<QuickSight.Types.UpdateIAMPolicyAssignmentResponse, AWSError>;
  /**
   * Updates a template from an existing Amazon QuickSight analysis or another template.
   */
  updateTemplate(params: QuickSight.Types.UpdateTemplateRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplateResponse) => void): Request<QuickSight.Types.UpdateTemplateResponse, AWSError>;
  /**
   * Updates a template from an existing Amazon QuickSight analysis or another template.
   */
  updateTemplate(callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplateResponse) => void): Request<QuickSight.Types.UpdateTemplateResponse, AWSError>;
  /**
   * Updates the template alias of a template.
   */
  updateTemplateAlias(params: QuickSight.Types.UpdateTemplateAliasRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplateAliasResponse) => void): Request<QuickSight.Types.UpdateTemplateAliasResponse, AWSError>;
  /**
   * Updates the template alias of a template.
   */
  updateTemplateAlias(callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplateAliasResponse) => void): Request<QuickSight.Types.UpdateTemplateAliasResponse, AWSError>;
  /**
   * Updates the resource permissions for a template.
   */
  updateTemplatePermissions(params: QuickSight.Types.UpdateTemplatePermissionsRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplatePermissionsResponse) => void): Request<QuickSight.Types.UpdateTemplatePermissionsResponse, AWSError>;
  /**
   * Updates the resource permissions for a template.
   */
  updateTemplatePermissions(callback?: (err: AWSError, data: QuickSight.Types.UpdateTemplatePermissionsResponse) => void): Request<QuickSight.Types.UpdateTemplatePermissionsResponse, AWSError>;
  /**
   * Updates an Amazon QuickSight user.
   */
  updateUser(params: QuickSight.Types.UpdateUserRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateUserResponse) => void): Request<QuickSight.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates an Amazon QuickSight user.
   */
  updateUser(callback?: (err: AWSError, data: QuickSight.Types.UpdateUserResponse) => void): Request<QuickSight.Types.UpdateUserResponse, AWSError>;
}
declare namespace QuickSight {
  export type ActionList = String[];
  export interface ActiveIAMPolicyAssignment {
    /**
     * A name for the IAM policy assignment.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    PolicyArn?: Arn;
  }
  export type ActiveIAMPolicyAssignmentList = ActiveIAMPolicyAssignment[];
  export interface AdHocFilteringOption {
    /**
     * Availability status.
     */
    AvailabilityStatus?: DashboardBehavior;
  }
  export type AliasName = string;
  export interface AmazonElasticsearchParameters {
    /**
     * The Amazon Elasticsearch Service domain.
     */
    Domain: Domain;
  }
  export type Arn = string;
  export type AssignmentStatus = "ENABLED"|"DRAFT"|"DISABLED"|string;
  export interface AthenaParameters {
    /**
     * The workgroup that Amazon Athena uses.
     */
    WorkGroup?: WorkGroup;
  }
  export interface AuroraParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export interface AuroraPostgreSqlParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export type AwsAccountId = string;
  export interface AwsIotAnalyticsParameters {
    /**
     * Dataset name.
     */
    DataSetName: DataSetName;
  }
  export type Boolean = boolean;
  export interface CalculatedColumn {
    /**
     * Column name.
     */
    ColumnName: ColumnName;
    /**
     * A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column.
     */
    ColumnId: ColumnId;
    /**
     * An expression that defines the calculated column.
     */
    Expression: Expression;
  }
  export type CalculatedColumnList = CalculatedColumn[];
  export interface CancelIngestionRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the dataset used in the ingestion.
     */
    DataSetId: string;
    /**
     * An ID for the ingestion.
     */
    IngestionId: IngestionId;
  }
  export interface CancelIngestionResponse {
    /**
     * The Amazon Resource Name (ARN) for the data ingestion.
     */
    Arn?: Arn;
    /**
     * An ID for the ingestion.
     */
    IngestionId?: IngestionId;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: string;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CastColumnTypeOperation {
    /**
     * Column name.
     */
    ColumnName: ColumnName;
    /**
     * New column data type.
     */
    NewColumnType: ColumnDataType;
    /**
     * When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format.
     */
    Format?: TypeCastFormat;
  }
  export type Catalog = string;
  export type ClusterId = string;
  export type ColumnDataType = "STRING"|"INTEGER"|"DECIMAL"|"DATETIME"|string;
  export interface ColumnGroup {
    /**
     * Geospatial column group that denotes a hierarchy.
     */
    GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
  }
  export interface ColumnGroupColumnSchema {
    /**
     * The name of the column group's column schema.
     */
    Name?: String;
  }
  export type ColumnGroupColumnSchemaList = ColumnGroupColumnSchema[];
  export type ColumnGroupList = ColumnGroup[];
  export type ColumnGroupName = string;
  export interface ColumnGroupSchema {
    /**
     * The name of the column group schema.
     */
    Name?: String;
    /**
     * A structure containing the list of schemas for column group columns.
     */
    ColumnGroupColumnSchemaList?: ColumnGroupColumnSchemaList;
  }
  export type ColumnGroupSchemaList = ColumnGroupSchema[];
  export type ColumnId = string;
  export type ColumnList = ColumnName[];
  export type ColumnName = string;
  export interface ColumnSchema {
    /**
     * The name of the column schema.
     */
    Name?: String;
    /**
     * The data type of the column schema.
     */
    DataType?: String;
    /**
     * The geographic role of the column schema.
     */
    GeographicRole?: String;
  }
  export type ColumnSchemaList = ColumnSchema[];
  export interface ColumnTag {
    /**
     * A geospatial role for a column.
     */
    ColumnGeographicRole?: GeoSpatialDataRole;
  }
  export type ColumnTagList = ColumnTag[];
  export interface CreateColumnsOperation {
    /**
     * Calculated columns to create.
     */
    Columns: CalculatedColumnList;
  }
  export interface CreateDashboardRequest {
    /**
     * The ID of the AWS account where you want to create the dashboard.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the IAM policy.
     */
    DashboardId: RestrictiveResourceId;
    /**
     * The display name of the dashboard.
     */
    Name: DashboardName;
    /**
     * A structure that contains the parameters of the dashboard. These are parameter overrides for a dashboard. A dashboard can have any type of parameters, and some parameters might accept multiple values. You can use the dashboard permissions structure described following to override two string parameters that accept multiple values. 
     */
    Parameters?: Parameters;
    /**
     * A structure that contains the permissions of the dashboard. You can use this structure for granting permissions with principal and action information.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The source entity from which the dashboard is created. The source entity accepts the Amazon Resource Name (ARN) of the source template or analysis and also references the replacement datasets for the placeholders set when creating the template. The replacement datasets need to follow the same schema as the datasets for which placeholders were created when creating the template.  If you are creating a dashboard from a source entity in a different AWS account, use the ARN of the source template.
     */
    SourceEntity: DashboardSourceEntity;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.
     */
    Tags?: TagList;
    /**
     * A description for the first version of the dashboard being created.
     */
    VersionDescription?: VersionDescription;
    /**
     * Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .csv format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. The sheet controls pane is collapsed by default when set to true. This option is COLLAPSED by default.   
     */
    DashboardPublishOptions?: DashboardPublishOptions;
  }
  export interface CreateDashboardResponse {
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    Arn?: Arn;
    /**
     * The ARN of the dashboard, including the version number of the first version that is created.
     */
    VersionArn?: Arn;
    /**
     * The ID for the dashboard.
     */
    DashboardId?: RestrictiveResourceId;
    /**
     * The status of the dashboard creation request.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateDataSetRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId: ResourceId;
    /**
     * The display name for the dataset.
     */
    Name: ResourceName;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     */
    PhysicalTableMap: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     */
    LogicalTableMap?: LogicalTableMap;
    /**
     * Indicates whether you want to import the data into SPICE.
     */
    ImportMode: DataSetImportMode;
    /**
     * Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.
     */
    ColumnGroups?: ColumnGroupList;
    /**
     * A list of resource permissions on the dataset.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The row-level security configuration for the data that you want to create.
     */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
     */
    Tags?: TagList;
  }
  export interface CreateDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    Arn?: Arn;
    /**
     * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId?: ResourceId;
    /**
     * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     */
    IngestionArn?: Arn;
    /**
     * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     */
    IngestionId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateDataSourceRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the data source. This ID is unique per AWS Region for each AWS account. 
     */
    DataSourceId: ResourceId;
    /**
     * A display name for the data source.
     */
    Name: ResourceName;
    /**
     * The type of the data source. Currently, the supported types for this operation are: ATHENA, AURORA, AURORA_POSTGRESQL, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3, SNOWFLAKE, SPARK, SQLSERVER, TERADATA. Use ListDataSources to return a list of all data sources.
     */
    Type: DataSourceType;
    /**
     * The parameters that QuickSight uses to connect to your underlying source.
     */
    DataSourceParameters?: DataSourceParameters;
    /**
     * The credentials QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
     */
    Credentials?: DataSourceCredentials;
    /**
     * A list of resource permissions on the data source.
     */
    Permissions?: ResourcePermissionList;
    /**
     * Use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
     */
    VpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
     */
    SslProperties?: SslProperties;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
     */
    Tags?: TagList;
  }
  export interface CreateDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    Arn?: Arn;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId?: ResourceId;
    /**
     * The status of creating the data source.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateGroupMembershipRequest {
    /**
     * The name of the user that you want to add to the group membership.
     */
    MemberName: GroupMemberName;
    /**
     * The name of the group that you want to add the user to.
     */
    GroupName: GroupName;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface CreateGroupMembershipResponse {
    /**
     * The group member.
     */
    GroupMember?: GroupMember;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateGroupRequest {
    /**
     * A name for the group that you want to create.
     */
    GroupName: GroupName;
    /**
     * A description for the group that you want to create.
     */
    Description?: GroupDescription;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface CreateGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateIAMPolicyAssignmentRequest {
    /**
     * The ID of the AWS account where you want to assign an IAM policy to QuickSight users or groups.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the assignment. It must be unique within an AWS account.
     */
    AssignmentName: IAMPolicyAssignmentName;
    /**
     * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.  
     */
    AssignmentStatus: AssignmentStatus;
    /**
     * The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.
     */
    PolicyArn?: Arn;
    /**
     * The QuickSight users, groups, or both that you want to assign the policy to.
     */
    Identities?: IdentityMap;
    /**
     * The namespace that contains the assignment.
     */
    Namespace: Namespace;
  }
  export interface CreateIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment. This name must be unique within the AWS account.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The ID for the assignment.
     */
    AssignmentId?: String;
    /**
     * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.  
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     * The ARN for the IAM policy that is applied to the QuickSight users and groups specified in this assignment.
     */
    PolicyArn?: Arn;
    /**
     * The QuickSight users, groups, or both that the IAM policy is assigned to.
     */
    Identities?: IdentityMap;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateIngestionRequest {
    /**
     * The ID of the dataset used in the ingestion.
     */
    DataSetId: string;
    /**
     * An ID for the ingestion.
     */
    IngestionId: IngestionId;
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
  }
  export interface CreateIngestionResponse {
    /**
     * The Amazon Resource Name (ARN) for the data ingestion.
     */
    Arn?: Arn;
    /**
     * An ID for the ingestion.
     */
    IngestionId?: IngestionId;
    /**
     * The ingestion status.
     */
    IngestionStatus?: IngestionStatus;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: string;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateTemplateAliasRequest {
    /**
     * The ID of the AWS account that contains the template that you creating an alias for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the template.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * The name that you want to give to the template alias that you're creating. Don't start the alias name with the $ character. Alias names that start with $ are reserved by QuickSight. 
     */
    AliasName: AliasName;
    /**
     * The version number of the template.
     */
    TemplateVersionNumber: VersionNumber;
  }
  export interface CreateTemplateAliasResponse {
    /**
     * Information about the template alias.
     */
    TemplateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CreateTemplateRequest {
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the template that you want to create. This template is unique per AWS Region in each AWS account.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * A display name for the template.
     */
    Name?: TemplateName;
    /**
     * A list of resource permissions to be set on the template. 
     */
    Permissions?: ResourcePermissionList;
    /**
     * The Amazon Resource Name (ARN) of the source entity from which this template is being created. Currently, you can create a template from an analysis or another template. If the ARN is for an analysis, include its dataset references. 
     */
    SourceEntity: TemplateSourceEntity;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     */
    Tags?: TagList;
    /**
     * A description of the current template version being created. This API operation creates the first version of the template. Every time UpdateTemplate is called, a new version is created. Each version of the template maintains a description of the version in the VersionDescription field.
     */
    VersionDescription?: VersionDescription;
  }
  export interface CreateTemplateResponse {
    /**
     * The ARN for the template.
     */
    Arn?: Arn;
    /**
     * The ARN for the template, including the version information of the first version.
     */
    VersionArn?: Arn;
    /**
     * The ID of the template.
     */
    TemplateId?: RestrictiveResourceId;
    /**
     * The template creation status.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface CredentialPair {
    /**
     * User name.
     */
    Username: Username;
    /**
     * Password.
     */
    Password: Password;
  }
  export interface CustomSql {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    DataSourceArn: Arn;
    /**
     * A display name for the SQL query result.
     */
    Name: CustomSqlName;
    /**
     * The SQL query.
     */
    SqlQuery: SqlQuery;
    /**
     * The column schema from the SQL query result set.
     */
    Columns?: InputColumnList;
  }
  export type CustomSqlName = string;
  export interface Dashboard {
    /**
     * Dashboard ID.
     */
    DashboardId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * A display name for the dashboard.
     */
    Name?: DashboardName;
    /**
     * Version.
     */
    Version?: DashboardVersion;
    /**
     * The time that this dataset was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this dataset was published.
     */
    LastPublishedTime?: Timestamp;
    /**
     * The last time that this dataset was updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type DashboardBehavior = "ENABLED"|"DISABLED"|string;
  export interface DashboardError {
    /**
     * Type.
     */
    Type?: DashboardErrorType;
    /**
     * Message.
     */
    Message?: NonEmptyString;
  }
  export type DashboardErrorList = DashboardError[];
  export type DashboardErrorType = "ACCESS_DENIED"|"SOURCE_NOT_FOUND"|"DATA_SET_NOT_FOUND"|"INTERNAL_FAILURE"|"PARAMETER_VALUE_INCOMPATIBLE"|"PARAMETER_TYPE_INVALID"|"PARAMETER_NOT_FOUND"|"COLUMN_TYPE_MISMATCH"|"COLUMN_GEOGRAPHIC_ROLE_MISMATCH"|"COLUMN_REPLACEMENT_MISSING"|string;
  export type DashboardFilterAttribute = "QUICKSIGHT_USER"|string;
  export type DashboardName = string;
  export interface DashboardPublishOptions {
    /**
     * Ad hoc (one-time) filtering option.
     */
    AdHocFilteringOption?: AdHocFilteringOption;
    /**
     * Export to .csv option.
     */
    ExportToCSVOption?: ExportToCSVOption;
    /**
     * Sheet controls option.
     */
    SheetControlsOption?: SheetControlsOption;
  }
  export interface DashboardSearchFilter {
    /**
     * The comparison operator that you want to use as a filter. For example, "Operator": "StringEquals".
     */
    Operator: FilterOperator;
    /**
     * The name of the value that you want to use as a filter. For example, "Name": "QUICKSIGHT_USER". 
     */
    Name?: DashboardFilterAttribute;
    /**
     * The value of the named item, in this case QUICKSIGHT_USER, that you want to use as a filter. For example, "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1". 
     */
    Value?: String;
  }
  export type DashboardSearchFilterList = DashboardSearchFilter[];
  export interface DashboardSourceEntity {
    /**
     * Source template.
     */
    SourceTemplate?: DashboardSourceTemplate;
  }
  export interface DashboardSourceTemplate {
    /**
     * Dataset references.
     */
    DataSetReferences: DataSetReferenceList;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn: Arn;
  }
  export interface DashboardSummary {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * Dashboard ID.
     */
    DashboardId?: RestrictiveResourceId;
    /**
     * A display name for the dashboard.
     */
    Name?: DashboardName;
    /**
     * The time that this dashboard was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this dashboard was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * Published version number.
     */
    PublishedVersionNumber?: VersionNumber;
    /**
     * The last time that this dashboard was published.
     */
    LastPublishedTime?: Timestamp;
  }
  export type DashboardSummaryList = DashboardSummary[];
  export type DashboardUIState = "EXPANDED"|"COLLAPSED"|string;
  export interface DashboardVersion {
    /**
     * The time that this dashboard version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * Errors.
     */
    Errors?: DashboardErrorList;
    /**
     * Version number.
     */
    VersionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     */
    Status?: ResourceStatus;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * Source entity ARN.
     */
    SourceEntityArn?: Arn;
    /**
     * The Amazon Resource Numbers (ARNs) for the datasets that are associated with a version of the dashboard.
     */
    DataSetArns?: DataSetArnsList;
    /**
     * Description.
     */
    Description?: VersionDescription;
  }
  export interface DashboardVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The time that this dashboard version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * Version number.
     */
    VersionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     */
    Status?: ResourceStatus;
    /**
     * Source entity ARN.
     */
    SourceEntityArn?: Arn;
    /**
     * Description.
     */
    Description?: VersionDescription;
  }
  export type DashboardVersionSummaryList = DashboardVersionSummary[];
  export interface DataSet {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The ID of the dataset.
     */
    DataSetId?: ResourceId;
    /**
     * A display name for the dataset.
     */
    Name?: ResourceName;
    /**
     * The time that this dataset was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this dataset was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     */
    PhysicalTableMap?: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     */
    LogicalTableMap?: LogicalTableMap;
    /**
     * The list of columns after all transforms. These columns are available in templates, analyses, and dashboards.
     */
    OutputColumns?: OutputColumnList;
    /**
     * Indicates whether you want to import the data into SPICE.
     */
    ImportMode?: DataSetImportMode;
    /**
     * The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't imported into SPICE.
     */
    ConsumedSpiceCapacityInBytes?: Long;
    /**
     * Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.
     */
    ColumnGroups?: ColumnGroupList;
    /**
     * The row-level security configuration for the dataset.
     */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  }
  export type DataSetArnsList = Arn[];
  export interface DataSetConfiguration {
    /**
     * Placeholder.
     */
    Placeholder?: String;
    /**
     * Dataset schema.
     */
    DataSetSchema?: DataSetSchema;
    /**
     * A structure containing the list of column group schemas.
     */
    ColumnGroupSchemaList?: ColumnGroupSchemaList;
  }
  export type DataSetConfigurationList = DataSetConfiguration[];
  export type DataSetImportMode = "SPICE"|"DIRECT_QUERY"|string;
  export type DataSetName = string;
  export interface DataSetReference {
    /**
     * Dataset placeholder.
     */
    DataSetPlaceholder: NonEmptyString;
    /**
     * Dataset Amazon Resource Name (ARN).
     */
    DataSetArn: Arn;
  }
  export type DataSetReferenceList = DataSetReference[];
  export interface DataSetSchema {
    /**
     * A structure containing the list of column schemas.
     */
    ColumnSchemaList?: ColumnSchemaList;
  }
  export interface DataSetSummary {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    Arn?: Arn;
    /**
     * The ID of the dataset.
     */
    DataSetId?: ResourceId;
    /**
     * A display name for the dataset.
     */
    Name?: ResourceName;
    /**
     * The time that this dataset was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this dataset was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * Indicates whether you want to import the data into SPICE.
     */
    ImportMode?: DataSetImportMode;
    /**
     * The row-level security configuration for the dataset.
     */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  }
  export type DataSetSummaryList = DataSetSummary[];
  export interface DataSource {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    Arn?: Arn;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId?: ResourceId;
    /**
     * A display name for the data source.
     */
    Name?: ResourceName;
    /**
     * The type of the data source. This type indicates which database engine the data source connects to.
     */
    Type?: DataSourceType;
    /**
     * The HTTP status of the request.
     */
    Status?: ResourceStatus;
    /**
     * The time that this data source was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this data source was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * The parameters that Amazon QuickSight uses to connect to your underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
     */
    DataSourceParameters?: DataSourceParameters;
    /**
     * The VPC connection information. You need to use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
     */
    VpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
     */
    SslProperties?: SslProperties;
    /**
     * Error information from the last update or the creation of the data source.
     */
    ErrorInfo?: DataSourceErrorInfo;
  }
  export interface DataSourceCredentials {
    /**
     * Credential pair.
     */
    CredentialPair?: CredentialPair;
  }
  export interface DataSourceErrorInfo {
    /**
     * Error type.
     */
    Type?: DataSourceErrorInfoType;
    /**
     * Error message.
     */
    Message?: String;
  }
  export type DataSourceErrorInfoType = "TIMEOUT"|"ENGINE_VERSION_NOT_SUPPORTED"|"UNKNOWN_HOST"|"GENERIC_SQL_FAILURE"|"CONFLICT"|"UNKNOWN"|string;
  export type DataSourceList = DataSource[];
  export interface DataSourceParameters {
    /**
     * Amazon Elasticsearch Service parameters.
     */
    AmazonElasticsearchParameters?: AmazonElasticsearchParameters;
    /**
     * Amazon Athena parameters.
     */
    AthenaParameters?: AthenaParameters;
    /**
     * Amazon Aurora MySQL parameters.
     */
    AuroraParameters?: AuroraParameters;
    /**
     * Aurora PostgreSQL parameters.
     */
    AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;
    /**
     * AWS IoT Analytics parameters.
     */
    AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters;
    /**
     * Jira parameters.
     */
    JiraParameters?: JiraParameters;
    /**
     * MariaDB parameters.
     */
    MariaDbParameters?: MariaDbParameters;
    /**
     * MySQL parameters.
     */
    MySqlParameters?: MySqlParameters;
    /**
     * PostgreSQL parameters.
     */
    PostgreSqlParameters?: PostgreSqlParameters;
    /**
     * Presto parameters.
     */
    PrestoParameters?: PrestoParameters;
    /**
     * Amazon RDS parameters.
     */
    RdsParameters?: RdsParameters;
    /**
     * Amazon Redshift parameters.
     */
    RedshiftParameters?: RedshiftParameters;
    /**
     * S3 parameters.
     */
    S3Parameters?: S3Parameters;
    /**
     * ServiceNow parameters.
     */
    ServiceNowParameters?: ServiceNowParameters;
    /**
     * Snowflake parameters.
     */
    SnowflakeParameters?: SnowflakeParameters;
    /**
     * Spark parameters.
     */
    SparkParameters?: SparkParameters;
    /**
     * SQL Server parameters.
     */
    SqlServerParameters?: SqlServerParameters;
    /**
     * Teradata parameters.
     */
    TeradataParameters?: TeradataParameters;
    /**
     * Twitter parameters.
     */
    TwitterParameters?: TwitterParameters;
  }
  export type DataSourceType = "ADOBE_ANALYTICS"|"AMAZON_ELASTICSEARCH"|"ATHENA"|"AURORA"|"AURORA_POSTGRESQL"|"AWS_IOT_ANALYTICS"|"GITHUB"|"JIRA"|"MARIADB"|"MYSQL"|"POSTGRESQL"|"PRESTO"|"REDSHIFT"|"S3"|"SALESFORCE"|"SERVICENOW"|"SNOWFLAKE"|"SPARK"|"SQLSERVER"|"TERADATA"|"TWITTER"|string;
  export type Database = string;
  export interface DateTimeParameter {
    /**
     * A display name for the dataset.
     */
    Name: NonEmptyString;
    /**
     * Values.
     */
    Values: TimestampList;
  }
  export type DateTimeParameterList = DateTimeParameter[];
  export interface DecimalParameter {
    /**
     * A display name for the dataset.
     */
    Name: NonEmptyString;
    /**
     * Values.
     */
    Values: DoubleList;
  }
  export type DecimalParameterList = DecimalParameter[];
  export interface DeleteDashboardRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're deleting.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: RestrictiveResourceId;
    /**
     * The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted.
     */
    VersionNumber?: VersionNumber;
  }
  export interface DeleteDashboardResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The Secure Socket Layer (SSL) properties that apply for the resource.
     */
    Arn?: Arn;
    /**
     * The ID of the dashboard.
     */
    DashboardId?: RestrictiveResourceId;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DeleteDataSetRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId: ResourceId;
  }
  export interface DeleteDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    Arn?: Arn;
    /**
     * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteDataSourceRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId: ResourceId;
  }
  export interface DeleteDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source that you deleted.
     */
    Arn?: Arn;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteGroupMembershipRequest {
    /**
     * The name of the user that you want to delete from the group membership.
     */
    MemberName: GroupMemberName;
    /**
     * The name of the group that you want to delete the user from.
     */
    GroupName: GroupName;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteGroupMembershipResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteGroupRequest {
    /**
     * The name of the group that you want to delete.
     */
    GroupName: GroupName;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteGroupResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteIAMPolicyAssignmentRequest {
    /**
     * The AWS account ID where you want to delete the IAM policy assignment.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the assignment. 
     */
    AssignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace that contains the assignment.
     */
    Namespace: Namespace;
  }
  export interface DeleteIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment. 
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteTemplateAliasRequest {
    /**
     * The ID of the AWS account that contains the item to delete.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template that the specified alias is for.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * The name for the template alias. If you name a specific alias, you delete the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. 
     */
    AliasName: AliasName;
  }
  export interface DeleteTemplateAliasResponse {
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * An ID for the template associated with the deletion.
     */
    TemplateId?: RestrictiveResourceId;
    /**
     * The name for the template alias.
     */
    AliasName?: AliasName;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DeleteTemplateRequest {
    /**
     * The ID of the AWS account that contains the template that you're deleting.
     */
    AwsAccountId: AwsAccountId;
    /**
     * An ID for the template you want to delete.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * Specifies the version of the template that you want to delete. If you don't provide a version number, DeleteTemplate deletes all versions of the template. 
     */
    VersionNumber?: VersionNumber;
  }
  export interface DeleteTemplateResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * An ID for the template.
     */
    TemplateId?: RestrictiveResourceId;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteUserByPrincipalIdRequest {
    /**
     * The principal ID of the user.
     */
    PrincipalId: String;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteUserByPrincipalIdResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteUserRequest {
    /**
     * The name of the user that you want to delete.
     */
    UserName: UserName;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteUserResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export type Delimiter = string;
  export interface DescribeDashboardPermissionsRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're describing permissions for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the IAM policy.
     */
    DashboardId: RestrictiveResourceId;
  }
  export interface DescribeDashboardPermissionsResponse {
    /**
     * The ID for the dashboard.
     */
    DashboardId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    DashboardArn?: Arn;
    /**
     * A structure that contains the permissions for the dashboard.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeDashboardRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: RestrictiveResourceId;
    /**
     * The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described. 
     */
    VersionNumber?: VersionNumber;
    /**
     * The alias name.
     */
    AliasName?: AliasName;
  }
  export interface DescribeDashboardResponse {
    /**
     * Information about the dashboard.
     */
    Dashboard?: Dashboard;
    /**
     * The HTTP status of this request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeDataSetPermissionsRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId: ResourceId;
  }
  export interface DescribeDataSetPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    DataSetArn?: Arn;
    /**
     * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId?: ResourceId;
    /**
     * A list of resource permissions on the dataset.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeDataSetRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId: ResourceId;
  }
  export interface DescribeDataSetResponse {
    /**
     * Information on the dataset.
     */
    DataSet?: DataSet;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeDataSourcePermissionsRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId: ResourceId;
  }
  export interface DescribeDataSourcePermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    DataSourceArn?: Arn;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId?: ResourceId;
    /**
     * A list of resource permissions on the data source.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeDataSourceRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId: ResourceId;
  }
  export interface DescribeDataSourceResponse {
    /**
     * The information on the data source.
     */
    DataSource?: DataSource;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeGroupRequest {
    /**
     * The name of the group that you want to describe.
     */
    GroupName: GroupName;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DescribeGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeIAMPolicyAssignmentRequest {
    /**
     * The ID of the AWS account that contains the assignment that you want to describe.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the assignment. 
     */
    AssignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace that contains the assignment.
     */
    Namespace: Namespace;
  }
  export interface DescribeIAMPolicyAssignmentResponse {
    /**
     * Information describing the IAM policy assignment.
     */
    IAMPolicyAssignment?: IAMPolicyAssignment;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeIngestionRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the dataset used in the ingestion.
     */
    DataSetId: string;
    /**
     * An ID for the ingestion.
     */
    IngestionId: IngestionId;
  }
  export interface DescribeIngestionResponse {
    /**
     * Information about the ingestion.
     */
    Ingestion?: Ingestion;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: string;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeTemplateAliasRequest {
    /**
     * The ID of the AWS account that contains the template alias that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * The name of the template alias that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     */
    AliasName: AliasName;
  }
  export interface DescribeTemplateAliasResponse {
    /**
     * Information about the template alias.
     */
    TemplateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface DescribeTemplatePermissionsRequest {
    /**
     * The ID of the AWS account that contains the template that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: RestrictiveResourceId;
  }
  export interface DescribeTemplatePermissionsResponse {
    /**
     * The ID for the template.
     */
    TemplateId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the template.
     */
    TemplateArn?: Arn;
    /**
     * A list of resource permissions to be set on the template. 
     */
    Permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeTemplateRequest {
    /**
     * The ID of the AWS account that contains the template that you're describing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * (Optional) The number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the template is described.
     */
    VersionNumber?: VersionNumber;
    /**
     * The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     */
    AliasName?: AliasName;
  }
  export interface DescribeTemplateResponse {
    /**
     * The template structure for the object you want to describe.
     */
    Template?: Template;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeUserRequest {
    /**
     * The name of the user that you want to describe.
     */
    UserName: UserName;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DescribeUserResponse {
    /**
     * The user name.
     */
    User?: User;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export type Domain = string;
  export type Double = number;
  export type DoubleList = Double[];
  export type EmbeddingUrl = string;
  export interface ErrorInfo {
    /**
     * Error type.
     */
    Type?: IngestionErrorType;
    /**
     * Error message.
     */
    Message?: string;
  }
  export interface ExportToCSVOption {
    /**
     * Availability status.
     */
    AvailabilityStatus?: DashboardBehavior;
  }
  export type Expression = string;
  export type FileFormat = "CSV"|"TSV"|"CLF"|"ELF"|"XLSX"|"JSON"|string;
  export interface FilterOperation {
    /**
     * An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset.
     */
    ConditionExpression: Expression;
  }
  export type FilterOperator = "StringEquals"|string;
  export interface GeoSpatialColumnGroup {
    /**
     * A display name for the hierarchy.
     */
    Name: ColumnGroupName;
    /**
     * Country code.
     */
    CountryCode: GeoSpatialCountryCode;
    /**
     * Columns in this hierarchy.
     */
    Columns: ColumnList;
  }
  export type GeoSpatialCountryCode = "US"|string;
  export type GeoSpatialDataRole = "COUNTRY"|"STATE"|"COUNTY"|"CITY"|"POSTCODE"|"LONGITUDE"|"LATITUDE"|string;
  export interface GetDashboardEmbedUrlRequest {
    /**
     * The ID for the AWS account that contains the dashboard that you're embedding.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to the IAM policy.
     */
    DashboardId: RestrictiveResourceId;
    /**
     * The authentication method that the user uses to sign in.
     */
    IdentityType: IdentityType;
    /**
     * How many minutes the session is valid. The session lifetime must be 15-600 minutes.
     */
    SessionLifetimeInMinutes?: SessionLifetimeInMinutes;
    /**
     * Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button.
     */
    UndoRedoDisabled?: boolean;
    /**
     * Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button.
     */
    ResetDisabled?: boolean;
    /**
     * The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any Amazon QuickSight users in your account (readers, authors, or admins) authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation.  
     */
    UserArn?: Arn;
  }
  export interface GetDashboardEmbedUrlResponse {
    /**
     * An URL that you can put into your server-side webpage to embed your dashboard. This URL is valid for 5 minutes, and the resulting session is valid for 10 hours. The API provides the URL with an auth_code value that enables a single sign-on session. 
     */
    EmbedUrl?: EmbeddingUrl;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface Group {
    /**
     * The Amazon Resource Name (ARN) for the group.
     */
    Arn?: Arn;
    /**
     * The name of the group.
     */
    GroupName?: GroupName;
    /**
     * The group description.
     */
    Description?: GroupDescription;
    /**
     * The principal ID of the group.
     */
    PrincipalId?: String;
  }
  export type GroupDescription = string;
  export type GroupList = Group[];
  export interface GroupMember {
    /**
     * The Amazon Resource Name (ARN) for the group member (user).
     */
    Arn?: Arn;
    /**
     * The name of the group member (user).
     */
    MemberName?: GroupMemberName;
  }
  export type GroupMemberList = GroupMember[];
  export type GroupMemberName = string;
  export type GroupName = string;
  export type Host = string;
  export interface IAMPolicyAssignment {
    /**
     * The AWS account ID.
     */
    AwsAccountId?: AwsAccountId;
    /**
     * Assignment ID.
     */
    AssignmentId?: String;
    /**
     * Assignment name.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The Amazon Resource Name (ARN) for the IAM policy.
     */
    PolicyArn?: Arn;
    /**
     * Identities.
     */
    Identities?: IdentityMap;
    /**
     * Assignment status.
     */
    AssignmentStatus?: AssignmentStatus;
  }
  export type IAMPolicyAssignmentName = string;
  export interface IAMPolicyAssignmentSummary {
    /**
     * Assignment name.
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * Assignment status.
     */
    AssignmentStatus?: AssignmentStatus;
  }
  export type IAMPolicyAssignmentSummaryList = IAMPolicyAssignmentSummary[];
  export type IdentityMap = {[key: string]: IdentityNameList};
  export type IdentityName = string;
  export type IdentityNameList = IdentityName[];
  export type IdentityType = "IAM"|"QUICKSIGHT"|string;
  export interface Ingestion {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn: Arn;
    /**
     * Ingestion ID.
     */
    IngestionId?: IngestionId;
    /**
     * Ingestion status.
     */
    IngestionStatus: IngestionStatus;
    /**
     * Error information for this ingestion.
     */
    ErrorInfo?: ErrorInfo;
    RowInfo?: RowInfo;
    QueueInfo?: QueueInfo;
    /**
     * The time that this ingestion started.
     */
    CreatedTime: timestamp;
    /**
     * The time that this ingestion took, measured in seconds.
     */
    IngestionTimeInSeconds?: long;
    /**
     * The size of the data ingested, in bytes.
     */
    IngestionSizeInBytes?: long;
    /**
     * Event source for this ingestion.
     */
    RequestSource?: IngestionRequestSource;
    /**
     * Type of this ingestion.
     */
    RequestType?: IngestionRequestType;
  }
  export type IngestionErrorType = "FAILURE_TO_ASSUME_ROLE"|"INGESTION_SUPERSEDED"|"INGESTION_CANCELED"|"DATA_SET_DELETED"|"DATA_SET_NOT_SPICE"|"S3_UPLOADED_FILE_DELETED"|"S3_MANIFEST_ERROR"|"DATA_TOLERANCE_EXCEPTION"|"SPICE_TABLE_NOT_FOUND"|"DATA_SET_SIZE_LIMIT_EXCEEDED"|"ROW_SIZE_LIMIT_EXCEEDED"|"ACCOUNT_CAPACITY_LIMIT_EXCEEDED"|"CUSTOMER_ERROR"|"DATA_SOURCE_NOT_FOUND"|"IAM_ROLE_NOT_AVAILABLE"|"CONNECTION_FAILURE"|"SQL_TABLE_NOT_FOUND"|"PERMISSION_DENIED"|"SSL_CERTIFICATE_VALIDATION_FAILURE"|"OAUTH_TOKEN_FAILURE"|"SOURCE_API_LIMIT_EXCEEDED_FAILURE"|"PASSWORD_AUTHENTICATION_FAILURE"|"SQL_SCHEMA_MISMATCH_ERROR"|"INVALID_DATE_FORMAT"|"INVALID_DATAPREP_SYNTAX"|"SOURCE_RESOURCE_LIMIT_EXCEEDED"|"SQL_INVALID_PARAMETER_VALUE"|"QUERY_TIMEOUT"|"SQL_NUMERIC_OVERFLOW"|"UNRESOLVABLE_HOST"|"UNROUTABLE_HOST"|"SQL_EXCEPTION"|"S3_FILE_INACCESSIBLE"|"IOT_FILE_NOT_FOUND"|"IOT_DATA_SET_FILE_EMPTY"|"INVALID_DATA_SOURCE_CONFIG"|"DATA_SOURCE_AUTH_FAILED"|"DATA_SOURCE_CONNECTION_FAILED"|"FAILURE_TO_PROCESS_JSON_FILE"|"INTERNAL_SERVICE_ERROR"|string;
  export type IngestionId = string;
  export type IngestionMaxResults = number;
  export type IngestionRequestSource = "MANUAL"|"SCHEDULED"|string;
  export type IngestionRequestType = "INITIAL_INGESTION"|"EDIT"|"INCREMENTAL_REFRESH"|"FULL_REFRESH"|string;
  export type IngestionStatus = "INITIALIZED"|"QUEUED"|"RUNNING"|"FAILED"|"COMPLETED"|"CANCELLED"|string;
  export type Ingestions = Ingestion[];
  export interface InputColumn {
    /**
     * The name of this column in the underlying data source.
     */
    Name: ColumnName;
    /**
     * The data type of the column.
     */
    Type: InputColumnDataType;
  }
  export type InputColumnDataType = "STRING"|"INTEGER"|"DECIMAL"|"DATETIME"|"BIT"|"BOOLEAN"|"JSON"|string;
  export type InputColumnList = InputColumn[];
  export type InstanceId = string;
  export interface IntegerParameter {
    /**
     * A display name for the dataset.
     */
    Name: NonEmptyString;
    /**
     * Values.
     */
    Values: LongList;
  }
  export type IntegerParameterList = IntegerParameter[];
  export interface JiraParameters {
    /**
     * The base URL of the Jira site.
     */
    SiteBaseUrl: SiteBaseUrl;
  }
  export interface JoinInstruction {
    /**
     * Left operand.
     */
    LeftOperand: LogicalTableId;
    /**
     * Right operand.
     */
    RightOperand: LogicalTableId;
    /**
     * Type.
     */
    Type: JoinType;
    /**
     * On Clause.
     */
    OnClause: OnClause;
  }
  export type JoinType = "INNER"|"OUTER"|"LEFT"|"RIGHT"|string;
  export interface ListDashboardVersionsRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're listing versions for.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDashboardVersionsResponse {
    /**
     * A structure that contains information about each version of the dashboard.
     */
    DashboardVersionSummaryList?: DashboardVersionSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListDashboardsRequest {
    /**
     * The ID of the AWS account that contains the dashboards that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDashboardsResponse {
    /**
     * A structure that contains all of the dashboards in your AWS account. This structure provides basic information about the dashboards.
     */
    DashboardSummaryList?: DashboardSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListDataSetsRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDataSetsResponse {
    /**
     * The list of dataset summaries.
     */
    DataSetSummaries?: DataSetSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListDataSourcesRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDataSourcesResponse {
    /**
     * A list of data sources.
     */
    DataSources?: DataSourceList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListGroupMembershipsRequest {
    /**
     * The name of the group that you want to see a membership list of.
     */
    GroupName: GroupName;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface ListGroupMembershipsResponse {
    /**
     * The list of the members of the group.
     */
    GroupMemberList?: GroupMemberList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListGroupsRequest {
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface ListGroupsResponse {
    /**
     * The list of the groups.
     */
    GroupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListIAMPolicyAssignmentsForUserRequest {
    /**
     * The ID of the AWS account that contains the assignments.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the user.
     */
    UserName: UserName;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace of the assignment.
     */
    Namespace: Namespace;
  }
  export interface ListIAMPolicyAssignmentsForUserResponse {
    /**
     * The active assignments for this user.
     */
    ActiveAssignments?: ActiveIAMPolicyAssignmentList;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListIAMPolicyAssignmentsRequest {
    /**
     * The ID of the AWS account that contains these IAM policy assignments.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The status of the assignments.
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     * The namespace for the assignments.
     */
    Namespace: Namespace;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListIAMPolicyAssignmentsResponse {
    /**
     * Information describing the IAM policy assignments.
     */
    IAMPolicyAssignments?: IAMPolicyAssignmentSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListIngestionsRequest {
    /**
     * The ID of the dataset used in the ingestion.
     */
    DataSetId: string;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: string;
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: IngestionMaxResults;
  }
  export interface ListIngestionsResponse {
    /**
     * A list of the ingestions.
     */
    Ingestions?: Ingestions;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: string;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: string;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want a list of tags for.
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     */
    Tags?: TagList;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListTemplateAliasesRequest {
    /**
     * The ID of the AWS account that contains the template aliases that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTemplateAliasesResponse {
    /**
     * A structure containing the list of the template's aliases.
     */
    TemplateAliasList?: TemplateAliasList;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
  }
  export interface ListTemplateVersionsRequest {
    /**
     * The ID of the AWS account that contains the templates that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTemplateVersionsResponse {
    /**
     * A structure containing a list of all the versions of the specified template.
     */
    TemplateVersionSummaryList?: TemplateVersionSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListTemplatesRequest {
    /**
     * The ID of the AWS account that contains the templates that you're listing.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTemplatesResponse {
    /**
     * A structure containing information about the templates in the list.
     */
    TemplateSummaryList?: TemplateSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ListUserGroupsRequest {
    /**
     * The Amazon QuickSight user name that you want to list group memberships for.
     */
    UserName: UserName;
    /**
     * The AWS account ID that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListUserGroupsResponse {
    /**
     * The list of groups the user is a member of.
     */
    GroupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListUsersRequest {
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface ListUsersResponse {
    /**
     * The list of users.
     */
    UserList?: UserList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface LogicalTable {
    /**
     * A display name for the logical table.
     */
    Alias: LogicalTableAlias;
    /**
     * Transform operations that act on this logical table.
     */
    DataTransforms?: TransformOperationList;
    /**
     * Source of this logical table.
     */
    Source: LogicalTableSource;
  }
  export type LogicalTableAlias = string;
  export type LogicalTableId = string;
  export type LogicalTableMap = {[key: string]: LogicalTable};
  export interface LogicalTableSource {
    /**
     * Specifies the result of a join of two logical tables.
     */
    JoinInstruction?: JoinInstruction;
    /**
     * Physical table ID.
     */
    PhysicalTableId?: PhysicalTableId;
  }
  export type Long = number;
  export type LongList = Long[];
  export interface ManifestFileLocation {
    /**
     * Amazon S3 bucket.
     */
    Bucket: S3Bucket;
    /**
     * Amazon S3 key that identifies an object.
     */
    Key: S3Key;
  }
  export interface MariaDbParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export type MaxResults = number;
  export interface MySqlParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export type Namespace = string;
  export type NonEmptyString = string;
  export type OnClause = string;
  export type OptionalPort = number;
  export interface OutputColumn {
    /**
     * A display name for the dataset.
     */
    Name?: ColumnName;
    /**
     * Type.
     */
    Type?: ColumnDataType;
  }
  export type OutputColumnList = OutputColumn[];
  export interface Parameters {
    /**
     * String parameters.
     */
    StringParameters?: StringParameterList;
    /**
     * Integer parameters.
     */
    IntegerParameters?: IntegerParameterList;
    /**
     * Decimal parameters.
     */
    DecimalParameters?: DecimalParameterList;
    /**
     * DateTime parameters.
     */
    DateTimeParameters?: DateTimeParameterList;
  }
  export type Password = string;
  export interface PhysicalTable {
    /**
     * A physical table type for relational data sources.
     */
    RelationalTable?: RelationalTable;
    /**
     * A physical table type built from the results of the custom SQL query.
     */
    CustomSql?: CustomSql;
    /**
     * A physical table type for as S3 data source.
     */
    S3Source?: S3Source;
  }
  export type PhysicalTableId = string;
  export type PhysicalTableMap = {[key: string]: PhysicalTable};
  export type Port = number;
  export type PositiveInteger = number;
  export interface PostgreSqlParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export interface PrestoParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Catalog.
     */
    Catalog: Catalog;
  }
  export type Principal = string;
  export interface ProjectOperation {
    /**
     * Projected columns.
     */
    ProjectedColumns: ProjectedColumnList;
  }
  export type ProjectedColumnList = String[];
  export type Query = string;
  export interface QueueInfo {
    /**
     * The ID of the queued ingestion.
     */
    WaitingOnIngestion: string;
    /**
     * The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing ingestion to complete.
     */
    QueuedIngestion: string;
  }
  export interface RdsParameters {
    /**
     * Instance ID.
     */
    InstanceId: InstanceId;
    /**
     * Database.
     */
    Database: Database;
  }
  export interface RedshiftParameters {
    /**
     * Host. This field can be blank if ClusterId is provided.
     */
    Host?: Host;
    /**
     * Port. This field can be blank if the ClusterId is provided.
     */
    Port?: OptionalPort;
    /**
     * Database.
     */
    Database: Database;
    /**
     * Cluster ID. This field can be blank if the Host and Port are provided.
     */
    ClusterId?: ClusterId;
  }
  export interface RegisterUserRequest {
    /**
     * Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:    IAM: A user whose identity maps to an existing IAM user or role.     QUICKSIGHT: A user whose identity is owned and managed internally by Amazon QuickSight.   
     */
    IdentityType: IdentityType;
    /**
     * The email address of the user that you want to register.
     */
    Email: String;
    /**
     * The Amazon QuickSight role for the user. The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.  
     */
    UserRole: UserRole;
    /**
     * The ARN of the IAM user or role that you are registering with Amazon QuickSight. 
     */
    IamArn?: String;
    /**
     * You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see  assume-role  in the AWS CLI Reference. 
     */
    SessionName?: RoleSessionName;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * The Amazon QuickSight user name that you want to create for the user you are registering.
     */
    UserName?: UserName;
  }
  export interface RegisterUserResponse {
    /**
     * The user name.
     */
    User?: User;
    /**
     * The URL the user visits to complete registration and provide a password. This is returned only for users with an identity type of QUICKSIGHT.
     */
    UserInvitationUrl?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface RelationalTable {
    /**
     * The Amazon Resource Name (ARN) for the data source.
     */
    DataSourceArn: Arn;
    /**
     * The schema name. This name applies to certain relational database engines.
     */
    Schema?: RelationalTableSchema;
    /**
     * The name of the relational table.
     */
    Name: RelationalTableName;
    /**
     * The column schema of the table.
     */
    InputColumns: InputColumnList;
  }
  export type RelationalTableName = string;
  export type RelationalTableSchema = string;
  export interface RenameColumnOperation {
    /**
     * The name of the column to be renamed.
     */
    ColumnName: ColumnName;
    /**
     * The new name for the column.
     */
    NewColumnName: ColumnName;
  }
  export type ResourceId = string;
  export type ResourceName = string;
  export interface ResourcePermission {
    /**
     * The Amazon Resource Name (ARN) of an Amazon QuickSight user or group, or an IAM ARN. If you are using cross-account resource sharing, this is the IAM ARN of an account root. Otherwise, it is the ARN of a QuickSight user or group. .
     */
    Principal: Principal;
    /**
     * The action to grant or revoke permissions on, for example "quicksight:DescribeDashboard".
     */
    Actions: ActionList;
  }
  export type ResourcePermissionList = ResourcePermission[];
  export type ResourceStatus = "CREATION_IN_PROGRESS"|"CREATION_SUCCESSFUL"|"CREATION_FAILED"|"UPDATE_IN_PROGRESS"|"UPDATE_SUCCESSFUL"|"UPDATE_FAILED"|string;
  export type RestrictiveResourceId = string;
  export type RoleSessionName = string;
  export interface RowInfo {
    /**
     * The number of rows that were ingested.
     */
    RowsIngested?: long;
    /**
     * The number of rows that were not ingested.
     */
    RowsDropped?: long;
  }
  export interface RowLevelPermissionDataSet {
    /**
     * The Amazon Resource Name (ARN) of the permission dataset.
     */
    Arn: Arn;
    /**
     * Permission policy.
     */
    PermissionPolicy: RowLevelPermissionPolicy;
  }
  export type RowLevelPermissionPolicy = "GRANT_ACCESS"|"DENY_ACCESS"|string;
  export type S3Bucket = string;
  export type S3Key = string;
  export interface S3Parameters {
    /**
     * Location of the Amazon S3 manifest file. This is NULL if the manifest file was uploaded in the console.
     */
    ManifestFileLocation: ManifestFileLocation;
  }
  export interface S3Source {
    /**
     * The amazon Resource Name (ARN) for the data source.
     */
    DataSourceArn: Arn;
    /**
     * Information about the format for the S3 source file or files.
     */
    UploadSettings?: UploadSettings;
    /**
     * A physical table type for as S3 data source.
     */
    InputColumns: InputColumnList;
  }
  export interface SearchDashboardsRequest {
    /**
     * The ID of the AWS account that contains the user whose dashboards you're searching for. 
     */
    AwsAccountId: AwsAccountId;
    /**
     * The filters to apply to the search. Currently, you can search only by user name. For example, "Filters": [ { "Name": "QUICKSIGHT_USER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" } ] 
     */
    Filters: DashboardSearchFilterList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: MaxResults;
  }
  export interface SearchDashboardsResponse {
    /**
     * The list of dashboards owned by the user specified in Filters in your request.
     */
    DashboardSummaryList?: DashboardSummaryList;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    NextToken?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface ServiceNowParameters {
    /**
     * URL of the base site.
     */
    SiteBaseUrl: SiteBaseUrl;
  }
  export type SessionLifetimeInMinutes = number;
  export interface SheetControlsOption {
    /**
     * Visibility state.
     */
    VisibilityState?: DashboardUIState;
  }
  export type SiteBaseUrl = string;
  export interface SnowflakeParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Database.
     */
    Database: Database;
    /**
     * Warehouse.
     */
    Warehouse: Warehouse;
  }
  export interface SparkParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
  }
  export type SqlQuery = string;
  export interface SqlServerParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export interface SslProperties {
    /**
     * A Boolean option to control whether SSL should be disabled.
     */
    DisableSsl?: Boolean;
  }
  export type StatusCode = number;
  export type String = string;
  export type StringList = String[];
  export interface StringParameter {
    /**
     * A display name for the dataset.
     */
    Name: NonEmptyString;
    /**
     * Values.
     */
    Values: StringList;
  }
  export type StringParameterList = StringParameter[];
  export interface Tag {
    /**
     * Tag key.
     */
    Key: TagKey;
    /**
     * Tag value.
     */
    Value: TagValue;
  }
  export interface TagColumnOperation {
    /**
     * The column that this operation acts on.
     */
    ColumnName: ColumnName;
    /**
     * The dataset column tag, currently only used for geospatial type tagging. .  This is not tags for the AWS tagging feature. . 
     */
    Tags: ColumnTagList;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to tag.
     */
    ResourceArn: Arn;
    /**
     * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export type TagValue = string;
  export interface Template {
    /**
     * The Amazon Resource Name (ARN) of the template.
     */
    Arn?: Arn;
    /**
     * The display name of the template.
     */
    Name?: TemplateName;
    /**
     * A structure describing the versions of the template.
     */
    Version?: TemplateVersion;
    /**
     * The ID for the template. This is unique per AWS Region for each AWS account.
     */
    TemplateId?: RestrictiveResourceId;
    /**
     * Time when this was last updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * Time when this was created.
     */
    CreatedTime?: Timestamp;
  }
  export interface TemplateAlias {
    /**
     * The display name of the template alias.
     */
    AliasName?: AliasName;
    /**
     * The Amazon Resource Name (ARN) of the template alias.
     */
    Arn?: Arn;
    /**
     * The version number of the template alias.
     */
    TemplateVersionNumber?: VersionNumber;
  }
  export type TemplateAliasList = TemplateAlias[];
  export interface TemplateError {
    /**
     * Type of error.
     */
    Type?: TemplateErrorType;
    /**
     * Description of the error type.
     */
    Message?: NonEmptyString;
  }
  export type TemplateErrorList = TemplateError[];
  export type TemplateErrorType = "SOURCE_NOT_FOUND"|"DATA_SET_NOT_FOUND"|"INTERNAL_FAILURE"|string;
  export type TemplateName = string;
  export interface TemplateSourceAnalysis {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn: Arn;
    /**
     * A structure containing information about the dataset references used as placeholders in the template.
     */
    DataSetReferences: DataSetReferenceList;
  }
  export interface TemplateSourceEntity {
    /**
     * The source analysis, if it is based on an analysis.
     */
    SourceAnalysis?: TemplateSourceAnalysis;
    /**
     * The source template, if it is based on an template.
     */
    SourceTemplate?: TemplateSourceTemplate;
  }
  export interface TemplateSourceTemplate {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn: Arn;
  }
  export interface TemplateSummary {
    /**
     * A summary of a template.
     */
    Arn?: Arn;
    /**
     * The ID of the template. This ID is unique per AWS Region for each AWS account.
     */
    TemplateId?: RestrictiveResourceId;
    /**
     * A display name for the template.
     */
    Name?: TemplateName;
    /**
     * A structure containing a list of version numbers for the template summary.
     */
    LatestVersionNumber?: VersionNumber;
    /**
     * The last time that this template was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The last time that this template was updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type TemplateSummaryList = TemplateSummary[];
  export interface TemplateVersion {
    /**
     * The time that this template version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * Errors associated with the template.
     */
    Errors?: TemplateErrorList;
    /**
     * The version number of the template.
     */
    VersionNumber?: VersionNumber;
    /**
     * The HTTP status of the request.
     */
    Status?: ResourceStatus;
    /**
     * Schema of the dataset identified by the placeholder. The idea is that any dashboard created from the template should be bound to new datasets matching the same schema described through this API. .
     */
    DataSetConfigurations?: DataSetConfigurationList;
    /**
     * The description of the template.
     */
    Description?: VersionDescription;
    /**
     * The Amazon Resource Name (ARN) of the analysis or template which was used to create this template.
     */
    SourceEntityArn?: Arn;
  }
  export interface TemplateVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the template version.
     */
    Arn?: Arn;
    /**
     * The version number of the template version.
     */
    VersionNumber?: VersionNumber;
    /**
     * The time that this template version was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The status of the template version.
     */
    Status?: ResourceStatus;
    /**
     * The description of the template version.
     */
    Description?: VersionDescription;
  }
  export type TemplateVersionSummaryList = TemplateVersionSummary[];
  export interface TeradataParameters {
    /**
     * Host.
     */
    Host: Host;
    /**
     * Port.
     */
    Port: Port;
    /**
     * Database.
     */
    Database: Database;
  }
  export type TextQualifier = "DOUBLE_QUOTE"|"SINGLE_QUOTE"|string;
  export type Timestamp = Date;
  export type TimestampList = Timestamp[];
  export interface TransformOperation {
    /**
     * An operation that projects columns. Operations that come after a projection can only refer to projected columns.
     */
    ProjectOperation?: ProjectOperation;
    /**
     * An operation that filters rows based on some condition.
     */
    FilterOperation?: FilterOperation;
    /**
     * An operation that creates calculated columns. Columns created in one such operation form a lexical closure.
     */
    CreateColumnsOperation?: CreateColumnsOperation;
    /**
     * An operation that renames a column.
     */
    RenameColumnOperation?: RenameColumnOperation;
    /**
     * A transform operation that casts a column to a different type.
     */
    CastColumnTypeOperation?: CastColumnTypeOperation;
    /**
     * An operation that tags a column with additional information.
     */
    TagColumnOperation?: TagColumnOperation;
  }
  export type TransformOperationList = TransformOperation[];
  export interface TwitterParameters {
    /**
     * Twitter query string.
     */
    Query: Query;
    /**
     * Maximum number of rows to query Twitter.
     */
    MaxRows: PositiveInteger;
  }
  export type TypeCastFormat = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to untag.
     */
    ResourceArn: Arn;
    /**
     * The keys of the key-value pairs for the resource tag or tags assigned to the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateDashboardPermissionsRequest {
    /**
     * The ID of the AWS account that contains the dashboard whose permissions you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: RestrictiveResourceId;
    /**
     * The permissions that you want to grant on this resource.
     */
    GrantPermissions?: UpdateResourcePermissionList;
    /**
     * The permissions that you want to revoke from this resource.
     */
    RevokePermissions?: UpdateResourcePermissionList;
  }
  export interface UpdateDashboardPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    DashboardArn?: Arn;
    /**
     * The ID for the dashboard.
     */
    DashboardId?: RestrictiveResourceId;
    /**
     * Information about the permissions on the dashboard.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateDashboardPublishedVersionRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: RestrictiveResourceId;
    /**
     * The version number of the dashboard.
     */
    VersionNumber: VersionNumber;
  }
  export interface UpdateDashboardPublishedVersionResponse {
    /**
     * The ID for the dashboard.
     */
    DashboardId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    DashboardArn?: Arn;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateDashboardRequest {
    /**
     * The ID of the AWS account that contains the dashboard that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard.
     */
    DashboardId: RestrictiveResourceId;
    /**
     * The display name of the dashboard.
     */
    Name: DashboardName;
    /**
     * The template or analysis from which the dashboard is created. The SouceTemplate entity accepts the Amazon Resource Name (ARN) of the template and also references to replacement datasets for the placeholders set when creating the template. The replacement datasets need to follow the same schema as the datasets for which placeholders were created when creating the template.
     */
    SourceEntity: DashboardSourceEntity;
    /**
     * A structure that contains the parameters of the dashboard.
     */
    Parameters?: Parameters;
    /**
     * A description for the first version of the dashboard being created.
     */
    VersionDescription?: VersionDescription;
    /**
     * Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .csv format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. The sheet controls pane is collapsed by default when set to true. This option is COLLAPSED by default.   
     */
    DashboardPublishOptions?: DashboardPublishOptions;
  }
  export interface UpdateDashboardResponse {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: Arn;
    /**
     * The ARN of the dashboard, including the version number.
     */
    VersionArn?: Arn;
    /**
     * The ID for the dashboard.
     */
    DashboardId?: RestrictiveResourceId;
    /**
     * The creation status of the request.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateDataSetPermissionsRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset whose permissions you want to update. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId: ResourceId;
    /**
     * The resource permissions that you want to grant to the dataset.
     */
    GrantPermissions?: ResourcePermissionList;
    /**
     * The resource permissions that you want to revoke from the dataset.
     */
    RevokePermissions?: ResourcePermissionList;
  }
  export interface UpdateDataSetPermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    DataSetArn?: Arn;
    /**
     * The ID for the dataset whose permissions you want to update. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateDataSetRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dataset that you want to update. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId: ResourceId;
    /**
     * The display name for the dataset.
     */
    Name: ResourceName;
    /**
     * Declares the physical tables that are available in the underlying data sources.
     */
    PhysicalTableMap: PhysicalTableMap;
    /**
     * Configures the combination and transformation of the data from the physical tables.
     */
    LogicalTableMap?: LogicalTableMap;
    /**
     * Indicates whether you want to import the data into SPICE.
     */
    ImportMode: DataSetImportMode;
    /**
     * Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.
     */
    ColumnGroups?: ColumnGroupList;
    /**
     * The row-level security configuration for the data you want to create.
     */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  }
  export interface UpdateDataSetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    Arn?: Arn;
    /**
     * The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     */
    DataSetId?: ResourceId;
    /**
     * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     */
    IngestionArn?: Arn;
    /**
     * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
     */
    IngestionId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateDataSourcePermissionsRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account. 
     */
    DataSourceId: ResourceId;
    /**
     * A list of resource permissions that you want to grant on the data source.
     */
    GrantPermissions?: ResourcePermissionList;
    /**
     * A list of resource permissions that you want to revoke on the data source.
     */
    RevokePermissions?: ResourcePermissionList;
  }
  export interface UpdateDataSourcePermissionsResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    DataSourceArn?: Arn;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId?: ResourceId;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateDataSourceRequest {
    /**
     * The AWS account ID.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account. 
     */
    DataSourceId: ResourceId;
    /**
     * A display name for the data source.
     */
    Name: ResourceName;
    /**
     * The parameters that QuickSight uses to connect to your underlying source.
     */
    DataSourceParameters?: DataSourceParameters;
    /**
     * The credentials that QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
     */
    Credentials?: DataSourceCredentials;
    /**
     * Use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.
     */
    VpcConnectionProperties?: VpcConnectionProperties;
    /**
     * Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.
     */
    SslProperties?: SslProperties;
  }
  export interface UpdateDataSourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    Arn?: Arn;
    /**
     * The ID of the data source. This ID is unique per AWS Region for each AWS account.
     */
    DataSourceId?: ResourceId;
    /**
     * The update status of the data source's last update.
     */
    UpdateStatus?: ResourceStatus;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateGroupRequest {
    /**
     * The name of the group that you want to update.
     */
    GroupName: GroupName;
    /**
     * The description for the group that you want to update.
     */
    Description?: GroupDescription;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface UpdateGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateIAMPolicyAssignmentRequest {
    /**
     * The ID of the AWS account that contains the IAM policy assignment.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The name of the assignment. This name must be unique within an AWS account.
     */
    AssignmentName: IAMPolicyAssignmentName;
    /**
     * The namespace of the assignment.
     */
    Namespace: Namespace;
    /**
     * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.  
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     * The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.
     */
    PolicyArn?: Arn;
    /**
     * The QuickSight users, groups, or both that you want to assign the policy to.
     */
    Identities?: IdentityMap;
  }
  export interface UpdateIAMPolicyAssignmentResponse {
    /**
     * The name of the assignment. 
     */
    AssignmentName?: IAMPolicyAssignmentName;
    /**
     * The ID of the assignment.
     */
    AssignmentId?: String;
    /**
     * The ARN for the IAM policy applied to the QuickSight users and groups specified in this assignment.
     */
    PolicyArn?: Arn;
    /**
     * The QuickSight users, groups, or both that the IAM policy is assigned to.
     */
    Identities?: IdentityMap;
    /**
     * The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.  
     */
    AssignmentStatus?: AssignmentStatus;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export type UpdateResourcePermissionList = ResourcePermission[];
  export interface UpdateTemplateAliasRequest {
    /**
     * The ID of the AWS account that contains the template alias that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * The alias of the template that you want to update. If you name a specific alias, you update the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.
     */
    AliasName: AliasName;
    /**
     * The version number of the template.
     */
    TemplateVersionNumber: VersionNumber;
  }
  export interface UpdateTemplateAliasResponse {
    /**
     * The template alias.
     */
    TemplateAlias?: TemplateAlias;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateTemplatePermissionsRequest {
    /**
     * The ID of the AWS account that contains the template.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * A list of resource permissions to be granted on the template. 
     */
    GrantPermissions?: UpdateResourcePermissionList;
    /**
     * A list of resource permissions to be revoked from the template. 
     */
    RevokePermissions?: UpdateResourcePermissionList;
  }
  export interface UpdateTemplatePermissionsResponse {
    /**
     * The ID for the template.
     */
    TemplateId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) of the template.
     */
    TemplateArn?: Arn;
    /**
     * A list of resource permissions to be set on the template.
     */
    Permissions?: ResourcePermissionList;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateTemplateRequest {
    /**
     * The ID of the AWS account that contains the template that you're updating.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the template.
     */
    TemplateId: RestrictiveResourceId;
    /**
     * The source QuickSight entity from which this template is being updated. You can currently update templates from an Analysis or another template.
     */
    SourceEntity: TemplateSourceEntity;
    /**
     * A description of the current template version that is being updated. Every time you call UpdateTemplate, you create a new version of the template. Each version of the template maintains a description of the version in the VersionDescription field.
     */
    VersionDescription?: VersionDescription;
    /**
     * The name for the template.
     */
    Name?: TemplateName;
  }
  export interface UpdateTemplateResponse {
    /**
     * The ID for the template.
     */
    TemplateId?: RestrictiveResourceId;
    /**
     * The Amazon Resource Name (ARN) for the template.
     */
    Arn?: Arn;
    /**
     * The ARN for the template, including the version information of the first version.
     */
    VersionArn?: Arn;
    /**
     * The creation status of the template.
     */
    CreationStatus?: ResourceStatus;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface UpdateUserRequest {
    /**
     * The Amazon QuickSight user name that you want to update.
     */
    UserName: UserName;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * The email address of the user that you want to update.
     */
    Email: String;
    /**
     * The Amazon QuickSight role of the user. The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.  
     */
    Role: UserRole;
  }
  export interface UpdateUserResponse {
    /**
     * The Amazon QuickSight user.
     */
    User?: User;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface UploadSettings {
    /**
     * File format.
     */
    Format?: FileFormat;
    /**
     * A row number to start reading data from.
     */
    StartFromRow?: PositiveInteger;
    /**
     * Whether the file has a header row, or the files each have a header row.
     */
    ContainsHeader?: Boolean;
    /**
     * Text qualifier.
     */
    TextQualifier?: TextQualifier;
    /**
     * The delimiter between values in the file.
     */
    Delimiter?: Delimiter;
  }
  export interface User {
    /**
     * The Amazon Resource Name (ARN) for the user.
     */
    Arn?: Arn;
    /**
     * The user's user name.
     */
    UserName?: UserName;
    /**
     * The user's email address.
     */
    Email?: String;
    /**
     * The Amazon QuickSight role for the user. The user role can be one of the following:.    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.  
     */
    Role?: UserRole;
    /**
     * The type of identity authentication used by the user.
     */
    IdentityType?: IdentityType;
    /**
     * The active status of user. When you create an Amazon QuickSight user that’s not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a password.
     */
    Active?: Boolean;
    /**
     * The principal ID of the user.
     */
    PrincipalId?: String;
  }
  export type UserList = User[];
  export type UserName = string;
  export type UserRole = "ADMIN"|"AUTHOR"|"READER"|"RESTRICTED_AUTHOR"|"RESTRICTED_READER"|string;
  export type Username = string;
  export type VersionDescription = string;
  export type VersionNumber = number;
  export interface VpcConnectionProperties {
    /**
     * The Amazon Resource Name (ARN) for the VPC connection.
     */
    VpcConnectionArn: Arn;
  }
  export type Warehouse = string;
  export type WorkGroup = string;
  export type long = number;
  export type timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-04-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the QuickSight client.
   */
  export import Types = QuickSight;
}
export = QuickSight;
