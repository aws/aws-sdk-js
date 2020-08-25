import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ResourceGroups extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ResourceGroups.Types.ClientConfiguration)
  config: Config & ResourceGroups.Types.ClientConfiguration;
  /**
   * Creates a resource group with the specified name and description. You can optionally include a resource query, or a service configuration.
   */
  createGroup(params: ResourceGroups.Types.CreateGroupInput, callback?: (err: AWSError, data: ResourceGroups.Types.CreateGroupOutput) => void): Request<ResourceGroups.Types.CreateGroupOutput, AWSError>;
  /**
   * Creates a resource group with the specified name and description. You can optionally include a resource query, or a service configuration.
   */
  createGroup(callback?: (err: AWSError, data: ResourceGroups.Types.CreateGroupOutput) => void): Request<ResourceGroups.Types.CreateGroupOutput, AWSError>;
  /**
   * Deletes the specified resource group. Deleting a resource group does not delete any resources that are members of the group; it only deletes the group structure.
   */
  deleteGroup(params: ResourceGroups.Types.DeleteGroupInput, callback?: (err: AWSError, data: ResourceGroups.Types.DeleteGroupOutput) => void): Request<ResourceGroups.Types.DeleteGroupOutput, AWSError>;
  /**
   * Deletes the specified resource group. Deleting a resource group does not delete any resources that are members of the group; it only deletes the group structure.
   */
  deleteGroup(callback?: (err: AWSError, data: ResourceGroups.Types.DeleteGroupOutput) => void): Request<ResourceGroups.Types.DeleteGroupOutput, AWSError>;
  /**
   * Returns information about a specified resource group.
   */
  getGroup(params: ResourceGroups.Types.GetGroupInput, callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupOutput) => void): Request<ResourceGroups.Types.GetGroupOutput, AWSError>;
  /**
   * Returns information about a specified resource group.
   */
  getGroup(callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupOutput) => void): Request<ResourceGroups.Types.GetGroupOutput, AWSError>;
  /**
   * Returns the service configuration associated with the specified resource group. AWS Resource Groups supports configurations for the following resource group types:    AWS::EC2::CapacityReservationPool - Amazon EC2 capacity reservation pools. For more information, see Working with capacity reservation groups in the EC2 Users Guide.  
   */
  getGroupConfiguration(params: ResourceGroups.Types.GetGroupConfigurationInput, callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupConfigurationOutput) => void): Request<ResourceGroups.Types.GetGroupConfigurationOutput, AWSError>;
  /**
   * Returns the service configuration associated with the specified resource group. AWS Resource Groups supports configurations for the following resource group types:    AWS::EC2::CapacityReservationPool - Amazon EC2 capacity reservation pools. For more information, see Working with capacity reservation groups in the EC2 Users Guide.  
   */
  getGroupConfiguration(callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupConfigurationOutput) => void): Request<ResourceGroups.Types.GetGroupConfigurationOutput, AWSError>;
  /**
   * Retrieves the resource query associated with the specified resource group.
   */
  getGroupQuery(params: ResourceGroups.Types.GetGroupQueryInput, callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupQueryOutput) => void): Request<ResourceGroups.Types.GetGroupQueryOutput, AWSError>;
  /**
   * Retrieves the resource query associated with the specified resource group.
   */
  getGroupQuery(callback?: (err: AWSError, data: ResourceGroups.Types.GetGroupQueryOutput) => void): Request<ResourceGroups.Types.GetGroupQueryOutput, AWSError>;
  /**
   * Returns a list of tags that are associated with a resource group, specified by an ARN.
   */
  getTags(params: ResourceGroups.Types.GetTagsInput, callback?: (err: AWSError, data: ResourceGroups.Types.GetTagsOutput) => void): Request<ResourceGroups.Types.GetTagsOutput, AWSError>;
  /**
   * Returns a list of tags that are associated with a resource group, specified by an ARN.
   */
  getTags(callback?: (err: AWSError, data: ResourceGroups.Types.GetTagsOutput) => void): Request<ResourceGroups.Types.GetTagsOutput, AWSError>;
  /**
   * Adds the specified resources to the specified group.
   */
  groupResources(params: ResourceGroups.Types.GroupResourcesInput, callback?: (err: AWSError, data: ResourceGroups.Types.GroupResourcesOutput) => void): Request<ResourceGroups.Types.GroupResourcesOutput, AWSError>;
  /**
   * Adds the specified resources to the specified group.
   */
  groupResources(callback?: (err: AWSError, data: ResourceGroups.Types.GroupResourcesOutput) => void): Request<ResourceGroups.Types.GroupResourcesOutput, AWSError>;
  /**
   * Returns a list of ARNs of the resources that are members of a specified resource group.
   */
  listGroupResources(params: ResourceGroups.Types.ListGroupResourcesInput, callback?: (err: AWSError, data: ResourceGroups.Types.ListGroupResourcesOutput) => void): Request<ResourceGroups.Types.ListGroupResourcesOutput, AWSError>;
  /**
   * Returns a list of ARNs of the resources that are members of a specified resource group.
   */
  listGroupResources(callback?: (err: AWSError, data: ResourceGroups.Types.ListGroupResourcesOutput) => void): Request<ResourceGroups.Types.ListGroupResourcesOutput, AWSError>;
  /**
   * Returns a list of existing resource groups in your account.
   */
  listGroups(params: ResourceGroups.Types.ListGroupsInput, callback?: (err: AWSError, data: ResourceGroups.Types.ListGroupsOutput) => void): Request<ResourceGroups.Types.ListGroupsOutput, AWSError>;
  /**
   * Returns a list of existing resource groups in your account.
   */
  listGroups(callback?: (err: AWSError, data: ResourceGroups.Types.ListGroupsOutput) => void): Request<ResourceGroups.Types.ListGroupsOutput, AWSError>;
  /**
   * Returns a list of AWS resource identifiers that matches tne specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation.
   */
  searchResources(params: ResourceGroups.Types.SearchResourcesInput, callback?: (err: AWSError, data: ResourceGroups.Types.SearchResourcesOutput) => void): Request<ResourceGroups.Types.SearchResourcesOutput, AWSError>;
  /**
   * Returns a list of AWS resource identifiers that matches tne specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation.
   */
  searchResources(callback?: (err: AWSError, data: ResourceGroups.Types.SearchResourcesOutput) => void): Request<ResourceGroups.Types.SearchResourcesOutput, AWSError>;
  /**
   * Adds tags to a resource group with the specified ARN. Existing tags on a resource group are not changed if they are not specified in the request parameters.  Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data. 
   */
  tag(params: ResourceGroups.Types.TagInput, callback?: (err: AWSError, data: ResourceGroups.Types.TagOutput) => void): Request<ResourceGroups.Types.TagOutput, AWSError>;
  /**
   * Adds tags to a resource group with the specified ARN. Existing tags on a resource group are not changed if they are not specified in the request parameters.  Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data. 
   */
  tag(callback?: (err: AWSError, data: ResourceGroups.Types.TagOutput) => void): Request<ResourceGroups.Types.TagOutput, AWSError>;
  /**
   * Removes the specified resources from the specified group.
   */
  ungroupResources(params: ResourceGroups.Types.UngroupResourcesInput, callback?: (err: AWSError, data: ResourceGroups.Types.UngroupResourcesOutput) => void): Request<ResourceGroups.Types.UngroupResourcesOutput, AWSError>;
  /**
   * Removes the specified resources from the specified group.
   */
  ungroupResources(callback?: (err: AWSError, data: ResourceGroups.Types.UngroupResourcesOutput) => void): Request<ResourceGroups.Types.UngroupResourcesOutput, AWSError>;
  /**
   * Deletes tags from a specified resource group.
   */
  untag(params: ResourceGroups.Types.UntagInput, callback?: (err: AWSError, data: ResourceGroups.Types.UntagOutput) => void): Request<ResourceGroups.Types.UntagOutput, AWSError>;
  /**
   * Deletes tags from a specified resource group.
   */
  untag(callback?: (err: AWSError, data: ResourceGroups.Types.UntagOutput) => void): Request<ResourceGroups.Types.UntagOutput, AWSError>;
  /**
   * Updates the description for an existing group. You cannot update the name of a resource group.
   */
  updateGroup(params: ResourceGroups.Types.UpdateGroupInput, callback?: (err: AWSError, data: ResourceGroups.Types.UpdateGroupOutput) => void): Request<ResourceGroups.Types.UpdateGroupOutput, AWSError>;
  /**
   * Updates the description for an existing group. You cannot update the name of a resource group.
   */
  updateGroup(callback?: (err: AWSError, data: ResourceGroups.Types.UpdateGroupOutput) => void): Request<ResourceGroups.Types.UpdateGroupOutput, AWSError>;
  /**
   * Updates the resource query of a group.
   */
  updateGroupQuery(params: ResourceGroups.Types.UpdateGroupQueryInput, callback?: (err: AWSError, data: ResourceGroups.Types.UpdateGroupQueryOutput) => void): Request<ResourceGroups.Types.UpdateGroupQueryOutput, AWSError>;
  /**
   * Updates the resource query of a group.
   */
  updateGroupQuery(callback?: (err: AWSError, data: ResourceGroups.Types.UpdateGroupQueryOutput) => void): Request<ResourceGroups.Types.UpdateGroupQueryOutput, AWSError>;
}
declare namespace ResourceGroups {
  export interface CreateGroupInput {
    /**
     * The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with AWS or aws; these are reserved. A resource group name must be unique within each AWS Region in your AWS account.
     */
    Name: GroupName;
    /**
     * The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces.
     */
    Description?: Description;
    /**
     * The resource query that determines which AWS resources are members of this group.  You can specify either a ResourceQuery or a Configuration, but not both. 
     */
    ResourceQuery?: ResourceQuery;
    /**
     * The tags to add to the group. A tag is key-value pair string.
     */
    Tags?: Tags;
    /**
     * A configuration associates the resource group with an AWS service and specifies how the service can interact with the resources in the group. A configuration is an array of GroupConfigurationItem elements.  You can specify either a Configuration or a ResourceQuery in a group, but not both. 
     */
    Configuration?: GroupConfigurationList;
  }
  export interface CreateGroupOutput {
    /**
     * The description of the resource group.
     */
    Group?: Group;
    /**
     * The resource query associated with the group.
     */
    ResourceQuery?: ResourceQuery;
    /**
     * The tags associated with the group.
     */
    Tags?: Tags;
    /**
     * The service configuration associated with the resource group. AWS Resource Groups supports adding service configurations for the following resource group types:    AWS::EC2::CapacityReservationPool - Amazon EC2 capacity reservation pools. For more information, see Working with capacity reservation groups in the EC2 Users Guide.  
     */
    GroupConfiguration?: GroupConfiguration;
  }
  export interface DeleteGroupInput {
    /**
     * Don't use this parameter. Use Group instead.
     */
    GroupName?: GroupName;
    /**
     * The name or the ARN of the resource group to delete.
     */
    Group?: GroupString;
  }
  export interface DeleteGroupOutput {
    /**
     * A full description of the deleted resource group.
     */
    Group?: Group;
  }
  export type Description = string;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface FailedResource {
    /**
     * The ARN of the resource that failed to be added or removed.
     */
    ResourceArn?: ResourceArn;
    /**
     * The error message text associated with the failure.
     */
    ErrorMessage?: ErrorMessage;
    /**
     * The error code associated with the failure.
     */
    ErrorCode?: ErrorCode;
  }
  export type FailedResourceList = FailedResource[];
  export interface GetGroupConfigurationInput {
    /**
     * The name or the ARN of the resource group.
     */
    Group?: GroupString;
  }
  export interface GetGroupConfigurationOutput {
    /**
     * The configuration associated with the specified group.
     */
    GroupConfiguration?: GroupConfiguration;
  }
  export interface GetGroupInput {
    /**
     * Don't use this parameter. Use Group instead.
     */
    GroupName?: GroupName;
    /**
     * The name or the ARN of the resource group to retrieve.
     */
    Group?: GroupString;
  }
  export interface GetGroupOutput {
    /**
     * A full description of the resource group.
     */
    Group?: Group;
  }
  export interface GetGroupQueryInput {
    /**
     * Don't use this parameter. Use Group instead.
     */
    GroupName?: GroupName;
    /**
     * The name or the ARN of the resource group to query.
     */
    Group?: GroupString;
  }
  export interface GetGroupQueryOutput {
    /**
     * The resource query associated with the specified group.
     */
    GroupQuery?: GroupQuery;
  }
  export interface GetTagsInput {
    /**
     * The ARN of the resource group whose tags you want to retrieve.
     */
    Arn: GroupArn;
  }
  export interface GetTagsOutput {
    /**
     * The ARN of the tagged resource group.
     */
    Arn?: GroupArn;
    /**
     * The tags associated with the specified resource group.
     */
    Tags?: Tags;
  }
  export interface Group {
    /**
     * The ARN of the resource group.
     */
    GroupArn: GroupArn;
    /**
     * The name of the resource group.
     */
    Name: GroupName;
    /**
     * The description of the resource group.
     */
    Description?: Description;
  }
  export type GroupArn = string;
  export interface GroupConfiguration {
    /**
     * The configuration currently associated with the group and in effect.
     */
    Configuration?: GroupConfigurationList;
    /**
     * If present, the new configuration that is in the process of being applied to the group.
     */
    ProposedConfiguration?: GroupConfigurationList;
    /**
     * The current status of an attempt to update the group configuration.
     */
    Status?: GroupConfigurationStatus;
    /**
     * If present, the reason why a request to update the group configuration failed.
     */
    FailureReason?: GroupConfigurationFailureReason;
  }
  export type GroupConfigurationFailureReason = string;
  export interface GroupConfigurationItem {
    /**
     * Specifies the type of group configuration item. Each item must have a unique value for type. You can specify the following string values:    AWS::EC2::CapacityReservationPool  For more information about EC2 capacity reservation groups, see Working with capacity reservation groups in the EC2 Users Guide.    AWS::ResourceGroups::Generic - Supports parameters that configure the behavior of resource groups of any type.  
     */
    Type: GroupConfigurationType;
    /**
     * A collection of parameters for this group configuration item.
     */
    Parameters?: GroupParameterList;
  }
  export type GroupConfigurationList = GroupConfigurationItem[];
  export interface GroupConfigurationParameter {
    /**
     * The name of the group configuration parameter. You can specify the following string values:   For configuration item type AWS::ResourceGroups::Generic:    allowed-resource-types  Specifies the types of resources that you can add to this group by using the GroupResources operation.     For configuration item type AWS::EC2::CapacityReservationPool:   None - This configuration item type doesn't support any parameters.   For more information about EC2 capacity reservation groups, see Working with capacity reservation groups in the EC2 Users Guide.  
     */
    Name: GroupConfigurationParameterName;
    /**
     * The values of for this parameter. You can specify the following string value:   For item type allowed-resource-types: the only supported parameter value is AWS::EC2::CapacityReservation.  
     */
    Values?: GroupConfigurationParameterValueList;
  }
  export type GroupConfigurationParameterName = string;
  export type GroupConfigurationParameterValue = string;
  export type GroupConfigurationParameterValueList = GroupConfigurationParameterValue[];
  export type GroupConfigurationStatus = "UPDATING"|"UPDATE_COMPLETE"|"UPDATE_FAILED"|string;
  export type GroupConfigurationType = string;
  export interface GroupFilter {
    /**
     * The name of the filter. Filter names are case-sensitive.
     */
    Name: GroupFilterName;
    /**
     * One or more filter values. Allowed filter values vary by group filter name, and are case-sensitive.
     */
    Values: GroupFilterValues;
  }
  export type GroupFilterList = GroupFilter[];
  export type GroupFilterName = "resource-type"|"configuration-type"|string;
  export type GroupFilterValue = string;
  export type GroupFilterValues = GroupFilterValue[];
  export interface GroupIdentifier {
    /**
     * The name of the resource group.
     */
    GroupName?: GroupName;
    /**
     * The ARN of the resource group.
     */
    GroupArn?: GroupArn;
  }
  export type GroupIdentifierList = GroupIdentifier[];
  export type GroupList = Group[];
  export type GroupName = string;
  export type GroupParameterList = GroupConfigurationParameter[];
  export interface GroupQuery {
    /**
     * The name of the resource group that is associated with the specified resource query.
     */
    GroupName: GroupName;
    /**
     * The resource query that determines which AWS resources are members of the associated resource group.
     */
    ResourceQuery: ResourceQuery;
  }
  export interface GroupResourcesInput {
    /**
     * The name or the ARN of the resource group to add resources to.
     */
    Group: GroupString;
    /**
     * The list of ARNs for resources to be added to the group. 
     */
    ResourceArns: ResourceArnList;
  }
  export interface GroupResourcesOutput {
    /**
     * The ARNs of the resources that were successfully added to the group by this operation.
     */
    Succeeded?: ResourceArnList;
    /**
     * The ARNs of the resources that failed to be added to the group by this operation.
     */
    Failed?: FailedResourceList;
  }
  export type GroupString = string;
  export interface ListGroupResourcesInput {
    /**
     * Don't use this parameter. Use Group instead.
     */
    GroupName?: GroupName;
    /**
     * The name or the ARN of the resource group
     */
    Group?: GroupString;
    /**
     * Filters, formatted as ResourceFilter objects, that you want to apply to a ListGroupResources operation. Filters the results to include only those of the specified resource types.    resource-type - Filter resources by their type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.    When you specify a resource-type filter for ListGroupResources, AWS Resource Groups validates your filter resource types against the types that are defined in the query associated with the group. For example, if a group contains only S3 buckets because its query specifies only that resource type, but your resource-type filter includes EC2 instances, AWS Resource Groups does not filter for EC2 instances. In this case, a ListGroupResources request returns a BadRequestException error with a message similar to the following:  The resource types specified as filters in the request are not valid.  The error includes a list of resource types that failed the validation because they are not part of the query associated with the group. This validation doesn't occur when the group query specifies AWS::AllSupported, because a group based on such a query can contain any of the allowed resource types for the query type (tag-based or AWS CloudFormation stack-based queries).
     */
    Filters?: ResourceFilterList;
    /**
     * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * The parameter for receiving additional results if you receive a NextToken response in a previous request. A NextToken response indicates that more output is available. Set this parameter to the value provided by a previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
  }
  export interface ListGroupResourcesOutput {
    /**
     * The ARNs and resource types of resources that are members of the group that you specified.
     */
    ResourceIdentifiers?: ResourceIdentifierList;
    /**
     * If present, indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
    /**
     * A list of QueryError objects. Each error is an object that contains ErrorCode and Message structures. Possible values for ErrorCode are CLOUDFORMATION_STACK_INACTIVE and CLOUDFORMATION_STACK_NOT_EXISTING.
     */
    QueryErrors?: QueryErrorList;
  }
  export interface ListGroupsInput {
    /**
     * Filters, formatted as GroupFilter objects, that you want to apply to a ListGroups operation.    resource-type - Filter the results to include only those of the specified resource types. Specify up to five resource types in the format AWS::ServiceCode::ResourceType . For example, AWS::EC2::Instance, or AWS::S3::Bucket.    configuration-type - Filter the results to include only those groups that have the specified configuration types attached. The current supported values are:   AWS:EC2::CapacityReservationPool    
     */
    Filters?: GroupFilterList;
    /**
     * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * The parameter for receiving additional results if you receive a NextToken response in a previous request. A NextToken response indicates that more output is available. Set this parameter to the value provided by a previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
  }
  export interface ListGroupsOutput {
    /**
     * A list of GroupIdentifier objects. Each identifier is an object that contains both the Name and the GroupArn.
     */
    GroupIdentifiers?: GroupIdentifierList;
    /**
     * This output element is deprecated and shouldn't be used. Refer to GroupIdentifiers instead.
     */
    Groups?: GroupList;
    /**
     * If present, indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type Query = string;
  export interface QueryError {
    /**
     * Possible values are CLOUDFORMATION_STACK_INACTIVE and CLOUDFORMATION_STACK_NOT_EXISTING.
     */
    ErrorCode?: QueryErrorCode;
    /**
     * A message that explains the ErrorCode value. Messages might state that the specified CloudFormation stack does not exist (or no longer exists). For CLOUDFORMATION_STACK_INACTIVE, the message typically states that the CloudFormation stack has a status that is not (or no longer) active, such as CREATE_FAILED.
     */
    Message?: QueryErrorMessage;
  }
  export type QueryErrorCode = "CLOUDFORMATION_STACK_INACTIVE"|"CLOUDFORMATION_STACK_NOT_EXISTING"|string;
  export type QueryErrorList = QueryError[];
  export type QueryErrorMessage = string;
  export type QueryType = "TAG_FILTERS_1_0"|"CLOUDFORMATION_STACK_1_0"|string;
  export type ResourceArn = string;
  export type ResourceArnList = ResourceArn[];
  export interface ResourceFilter {
    /**
     * The name of the filter. Filter names are case-sensitive.
     */
    Name: ResourceFilterName;
    /**
     * One or more filter values. Allowed filter values vary by resource filter name, and are case-sensitive.
     */
    Values: ResourceFilterValues;
  }
  export type ResourceFilterList = ResourceFilter[];
  export type ResourceFilterName = "resource-type"|string;
  export type ResourceFilterValue = string;
  export type ResourceFilterValues = ResourceFilterValue[];
  export interface ResourceIdentifier {
    /**
     * The ARN of a resource.
     */
    ResourceArn?: ResourceArn;
    /**
     * The resource type of a resource, such as AWS::EC2::Instance.
     */
    ResourceType?: ResourceType;
  }
  export type ResourceIdentifierList = ResourceIdentifier[];
  export interface ResourceQuery {
    /**
     * The type of the query. You can use the following values:     CLOUDFORMATION_STACK_1_0:  A JSON syntax that lets you specify a CloudFormation stack ARN.     TAG_FILTERS_1_0:  A JSON syntax that lets you specify a collection of simple tag filters for resource types and tags, as supported by the AWS Tagging API  ResourceTypeFilters parameter of the tagging:GetResources  operation. If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches any of the specified values. For example, consider the following sample query for resources that have two tags, Stage and Version, with two values each:  [{"Key":"Stage","Values":["Test","Deploy"]},{"Key":"Version","Values":["1","2"]}]  The results of this query could include the following.   An EC2 instance that has the following two tags: {"Key":"Stage","Value":"Deploy"}, and {"Key":"Version","Value":"2"}    An S3 bucket that has the following two tags: {"Key":"Stage","Value":"Test"}, and {"Key":"Version","Value":"1"}    The query would not include the following items in the results, however.    An EC2 instance that has only the following tag: {"Key":"Stage","Value":"Deploy"}. The instance does not have all of the tag keys specified in the filter, so it is excluded from the results.   An RDS database that has the following two tags: {"Key":"Stage","Value":"Archived"}, and {"Key":"Version","Value":"4"}  The database has all of the tag keys, but none of those keys has an associated value that matches at least one of the specified values in the filter.    
     */
    Type: QueryType;
    /**
     * The query that defines a group or a search.
     */
    Query: Query;
  }
  export type ResourceType = string;
  export interface SearchResourcesInput {
    /**
     * The search query, using the same formats that are supported for resource group definition. For more information, see CreateGroup.
     */
    ResourceQuery: ResourceQuery;
    /**
     * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * The parameter for receiving additional results if you receive a NextToken response in a previous request. A NextToken response indicates that more output is available. Set this parameter to the value provided by a previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
  }
  export interface SearchResourcesOutput {
    /**
     * The ARNs and resource types of resources that are members of the group that you specified.
     */
    ResourceIdentifiers?: ResourceIdentifierList;
    /**
     * If present, indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null.
     */
    NextToken?: NextToken;
    /**
     * A list of QueryError objects. Each error is an object that contains ErrorCode and Message structures. Possible values for ErrorCode are CLOUDFORMATION_STACK_INACTIVE and CLOUDFORMATION_STACK_NOT_EXISTING.
     */
    QueryErrors?: QueryErrorList;
  }
  export interface TagInput {
    /**
     * The ARN of the resource group to which to add tags.
     */
    Arn: GroupArn;
    /**
     * The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs.
     */
    Tags: Tags;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagOutput {
    /**
     * The ARN of the tagged resource.
     */
    Arn?: GroupArn;
    /**
     * The tags that have been added to the specified resource group.
     */
    Tags?: Tags;
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export interface UngroupResourcesInput {
    /**
     * The name or the ARN of the resource group from which to remove the resources.
     */
    Group: GroupString;
    /**
     * The ARNs of the resources to be removed from the group.
     */
    ResourceArns: ResourceArnList;
  }
  export interface UngroupResourcesOutput {
    /**
     * The ARNs of the resources that were successfully removed from the group.
     */
    Succeeded?: ResourceArnList;
    /**
     * The resources that failed to be removed from the group.
     */
    Failed?: FailedResourceList;
  }
  export interface UntagInput {
    /**
     * The ARN of the resource group from which to remove tags. The command removed both the specified keys and any values associated with those keys.
     */
    Arn: GroupArn;
    /**
     * The keys of the tags to be removed.
     */
    Keys: TagKeyList;
  }
  export interface UntagOutput {
    /**
     * The ARN of the resource group from which tags have been removed.
     */
    Arn?: GroupArn;
    /**
     * The keys of the tags that were removed.
     */
    Keys?: TagKeyList;
  }
  export interface UpdateGroupInput {
    /**
     * Don't use this parameter. Use Group instead.
     */
    GroupName?: GroupName;
    /**
     * The name or the ARN of the resource group to modify.
     */
    Group?: GroupString;
    /**
     * The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces.
     */
    Description?: Description;
  }
  export interface UpdateGroupOutput {
    /**
     * The update description of the resource group.
     */
    Group?: Group;
  }
  export interface UpdateGroupQueryInput {
    /**
     * Don't use this parameter. Use Group instead.
     */
    GroupName?: GroupName;
    /**
     * The name or the ARN of the resource group to query.
     */
    Group?: GroupString;
    /**
     * The resource query to determine which AWS resources are members of this resource group.
     */
    ResourceQuery: ResourceQuery;
  }
  export interface UpdateGroupQueryOutput {
    /**
     * The updated resource query associated with the resource group after the update.
     */
    GroupQuery?: GroupQuery;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ResourceGroups client.
   */
  export import Types = ResourceGroups;
}
export = ResourceGroups;
