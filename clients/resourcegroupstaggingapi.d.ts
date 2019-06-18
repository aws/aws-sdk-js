import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ResourceGroupsTaggingAPI extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ResourceGroupsTaggingAPI.Types.ClientConfiguration)
  config: Config & ResourceGroupsTaggingAPI.Types.ClientConfiguration;
  /**
   * Deletes the policy that is attached to the specified organization root or account. You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  deleteTagPolicy(params: ResourceGroupsTaggingAPI.Types.DeleteTagPolicyInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.DeleteTagPolicyOutput) => void): Request<ResourceGroupsTaggingAPI.Types.DeleteTagPolicyOutput, AWSError>;
  /**
   * Deletes the policy that is attached to the specified organization root or account. You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  deleteTagPolicy(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.DeleteTagPolicyOutput) => void): Request<ResourceGroupsTaggingAPI.Types.DeleteTagPolicyOutput, AWSError>;
  /**
   * Describes the status of the StartReportCreation operation.  You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  describeReportCreation(params: ResourceGroupsTaggingAPI.Types.DescribeReportCreationInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.DescribeReportCreationOutput) => void): Request<ResourceGroupsTaggingAPI.Types.DescribeReportCreationOutput, AWSError>;
  /**
   * Describes the status of the StartReportCreation operation.  You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  describeReportCreation(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.DescribeReportCreationOutput) => void): Request<ResourceGroupsTaggingAPI.Types.DescribeReportCreationOutput, AWSError>;
  /**
   * Disables tag policies for your organization and deletes all tag policies. You can call this operation from the organization's master account only and from the us-east-1 Region only.   Use caution when disabling tag policies, as this is a destructive operation that applies to your entire organization. You cannot undo this operation. 
   */
  disableTagPolicies(params: ResourceGroupsTaggingAPI.Types.DisableTagPoliciesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.DisableTagPoliciesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.DisableTagPoliciesOutput, AWSError>;
  /**
   * Disables tag policies for your organization and deletes all tag policies. You can call this operation from the organization's master account only and from the us-east-1 Region only.   Use caution when disabling tag policies, as this is a destructive operation that applies to your entire organization. You cannot undo this operation. 
   */
  disableTagPolicies(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.DisableTagPoliciesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.DisableTagPoliciesOutput, AWSError>;
  /**
   * Enables tag policies for your organization. To use tag policies, you must be using AWS Organizations with all features enabled.  You can call this operation from the organization's master account only and from the us-east-1 Region only.  This operation does the following:   Enables tag policies for the specified organization.   Calls the EnableAWSServiceAccess API on your behalf to allow service access with the tagpolicies.tag.amazonaws.com service principal.   Creates a service-linked role named AWSServiceRoleForTagPolicies.    For more information on tag policies, see Tag Policies in the AWS Resource Groups User Guide. 
   */
  enableTagPolicies(params: ResourceGroupsTaggingAPI.Types.EnableTagPoliciesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.EnableTagPoliciesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.EnableTagPoliciesOutput, AWSError>;
  /**
   * Enables tag policies for your organization. To use tag policies, you must be using AWS Organizations with all features enabled.  You can call this operation from the organization's master account only and from the us-east-1 Region only.  This operation does the following:   Enables tag policies for the specified organization.   Calls the EnableAWSServiceAccess API on your behalf to allow service access with the tagpolicies.tag.amazonaws.com service principal.   Creates a service-linked role named AWSServiceRoleForTagPolicies.    For more information on tag policies, see Tag Policies in the AWS Resource Groups User Guide. 
   */
  enableTagPolicies(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.EnableTagPoliciesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.EnableTagPoliciesOutput, AWSError>;
  /**
   * Returns a table that shows counts of resources that are noncompliant with their tag policies. For more information on tag policies, see Tag Policies in the AWS Resource Groups User Guide.  You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  getComplianceSummary(params: ResourceGroupsTaggingAPI.Types.GetComplianceSummaryInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetComplianceSummaryOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetComplianceSummaryOutput, AWSError>;
  /**
   * Returns a table that shows counts of resources that are noncompliant with their tag policies. For more information on tag policies, see Tag Policies in the AWS Resource Groups User Guide.  You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  getComplianceSummary(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetComplianceSummaryOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetComplianceSummaryOutput, AWSError>;
  /**
   * Returns the contents of the effective tag policy for the AWS account. Depending on how you use tag policies, the effective tag policy for an account is one of the following:   The tag policy attached to the organization that the account belongs to.   The tag policy attached to the account.   The combination of both policies if tag policies are attached to the organization root and account.  
   */
  getEffectiveTagPolicy(params: ResourceGroupsTaggingAPI.Types.GetEffectiveTagPolicyInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetEffectiveTagPolicyOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetEffectiveTagPolicyOutput, AWSError>;
  /**
   * Returns the contents of the effective tag policy for the AWS account. Depending on how you use tag policies, the effective tag policy for an account is one of the following:   The tag policy attached to the organization that the account belongs to.   The tag policy attached to the account.   The combination of both policies if tag policies are attached to the organization root and account.  
   */
  getEffectiveTagPolicy(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetEffectiveTagPolicyOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetEffectiveTagPolicyOutput, AWSError>;
  /**
   * Returns all the tagged or previously tagged resources that are located in the specified Region for the AWS account. Depending on what information you want returned, you can also specify the following:    Filters that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.   Information about compliance with tag policies. If supplied, the compliance check follows the specified tag policy instead of following the effective tag policy. For more information on tag policies, see Tag Policies in the AWS Resource Groups User Guide.     You can check the PaginationToken response parameter to determine if a query completed. Queries can occasionally return fewer results on a page than allowed. The PaginationToken response parameter value is null only when there are no more results to display.  
   */
  getResources(params: ResourceGroupsTaggingAPI.Types.GetResourcesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetResourcesOutput, AWSError>;
  /**
   * Returns all the tagged or previously tagged resources that are located in the specified Region for the AWS account. Depending on what information you want returned, you can also specify the following:    Filters that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.   Information about compliance with tag policies. If supplied, the compliance check follows the specified tag policy instead of following the effective tag policy. For more information on tag policies, see Tag Policies in the AWS Resource Groups User Guide.     You can check the PaginationToken response parameter to determine if a query completed. Queries can occasionally return fewer results on a page than allowed. The PaginationToken response parameter value is null only when there are no more results to display.  
   */
  getResources(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetResourcesOutput, AWSError>;
  /**
   * Returns all tag keys in the specified Region for the AWS account.  You can check the PaginationToken response parameter to determine if a query completed. Queries can occasionally return fewer results on a page than allowed. The PaginationToken response parameter value is null only when there are no more results to display.  
   */
  getTagKeys(params: ResourceGroupsTaggingAPI.Types.GetTagKeysInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagKeysOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagKeysOutput, AWSError>;
  /**
   * Returns all tag keys in the specified Region for the AWS account.  You can check the PaginationToken response parameter to determine if a query completed. Queries can occasionally return fewer results on a page than allowed. The PaginationToken response parameter value is null only when there are no more results to display.  
   */
  getTagKeys(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagKeysOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagKeysOutput, AWSError>;
  /**
   * Returns the policy that is attached to the specified target.  You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  getTagPolicy(params: ResourceGroupsTaggingAPI.Types.GetTagPolicyInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagPolicyOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagPolicyOutput, AWSError>;
  /**
   * Returns the policy that is attached to the specified target.  You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  getTagPolicy(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagPolicyOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagPolicyOutput, AWSError>;
  /**
   * Returns all tag values for the specified key in the specified Region for the AWS account.  You can check the PaginationToken response parameter to determine if a query completed. Queries can occasionally return fewer results on a page than allowed. The PaginationToken response parameter value is null only when there are no more results to display.  
   */
  getTagValues(params: ResourceGroupsTaggingAPI.Types.GetTagValuesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagValuesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagValuesOutput, AWSError>;
  /**
   * Returns all tag values for the specified key in the specified Region for the AWS account.  You can check the PaginationToken response parameter to determine if a query completed. Queries can occasionally return fewer results on a page than allowed. The PaginationToken response parameter value is null only when there are no more results to display.  
   */
  getTagValues(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.GetTagValuesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.GetTagValuesOutput, AWSError>;
  /**
   * Validates the tag policy and then attaches it to the account or organization root. This policy determines whether a resource is compliant. Validating the tag policy includes checking that the tag policy document includes the required components, uses JSON syntax, and has fewer than 5,000 characters (including spaces). For more information, see Tag Policy Structure in the AWS Resource Groups User Guide.   If you later call this operation to attach a tag policy to the same organization root or account, it overwrites the original call without prompting you to confirm.  You can call this operation from the organization's master account only, and from the us-east-1 Region only. 
   */
  putTagPolicy(params: ResourceGroupsTaggingAPI.Types.PutTagPolicyInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.PutTagPolicyOutput) => void): Request<ResourceGroupsTaggingAPI.Types.PutTagPolicyOutput, AWSError>;
  /**
   * Validates the tag policy and then attaches it to the account or organization root. This policy determines whether a resource is compliant. Validating the tag policy includes checking that the tag policy document includes the required components, uses JSON syntax, and has fewer than 5,000 characters (including spaces). For more information, see Tag Policy Structure in the AWS Resource Groups User Guide.   If you later call this operation to attach a tag policy to the same organization root or account, it overwrites the original call without prompting you to confirm.  You can call this operation from the organization's master account only, and from the us-east-1 Region only. 
   */
  putTagPolicy(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.PutTagPolicyOutput) => void): Request<ResourceGroupsTaggingAPI.Types.PutTagPolicyOutput, AWSError>;
  /**
   * Generates a report that lists all tagged resources in accounts across your organization, and whether each resource is compliant with the effective tag policy.  You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  startReportCreation(params: ResourceGroupsTaggingAPI.Types.StartReportCreationInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.StartReportCreationOutput) => void): Request<ResourceGroupsTaggingAPI.Types.StartReportCreationOutput, AWSError>;
  /**
   * Generates a report that lists all tagged resources in accounts across your organization, and whether each resource is compliant with the effective tag policy.  You can call this operation from the organization's master account only and from the us-east-1 Region only. 
   */
  startReportCreation(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.StartReportCreationOutput) => void): Request<ResourceGroupsTaggingAPI.Types.StartReportCreationOutput, AWSError>;
  /**
   * Applies one or more tags to the specified resources. Note the following:   Not all resources can have tags. For a list of resources that support tagging, see this list.   Each resource can have up to 50 tags.    You can only tag resources that are located in the specified Region for the AWS account.   To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see Set Up Permissions in the AWS Resource Groups User Guide.   
   */
  tagResources(params: ResourceGroupsTaggingAPI.Types.TagResourcesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.TagResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.TagResourcesOutput, AWSError>;
  /**
   * Applies one or more tags to the specified resources. Note the following:   Not all resources can have tags. For a list of resources that support tagging, see this list.   Each resource can have up to 50 tags.    You can only tag resources that are located in the specified Region for the AWS account.   To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see Set Up Permissions in the AWS Resource Groups User Guide.   
   */
  tagResources(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.TagResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.TagResourcesOutput, AWSError>;
  /**
   * Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:   To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see Set Up Permissions in the AWS Resource Groups User Guide.    You can only tag resources that are located in the specified Region for the AWS account.  
   */
  untagResources(params: ResourceGroupsTaggingAPI.Types.UntagResourcesInput, callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.UntagResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.UntagResourcesOutput, AWSError>;
  /**
   * Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:   To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see Set Up Permissions in the AWS Resource Groups User Guide.    You can only tag resources that are located in the specified Region for the AWS account.  
   */
  untagResources(callback?: (err: AWSError, data: ResourceGroupsTaggingAPI.Types.UntagResourcesOutput) => void): Request<ResourceGroupsTaggingAPI.Types.UntagResourcesOutput, AWSError>;
}
declare namespace ResourceGroupsTaggingAPI {
  export type AmazonResourceType = string;
  export interface ComplianceDetails {
    /**
     * A tag key that is required by the effective tag policy is missing.
     */
    MissingKeys?: TagKeyList;
    /**
     * The tag key is noncompliant with the effective tag policy.
     */
    InvalidKeys?: TagKeyList;
    /**
     * The tag value is noncompliant with the effective tag policy.
     */
    InvalidValues?: TagKeyList;
    /**
     * Whether a resource is compliant with the effective tag policy.
     */
    ComplianceStatus?: ComplianceStatus;
  }
  export type ComplianceStatus = boolean;
  export interface DeleteTagPolicyInput {
    /**
     * The account ID or the root identifier of the organization. If you don't know the root ID, you can call the AWS Organizations ListRoots API to find it. 
     */
    TargetId: TargetId;
  }
  export interface DeleteTagPolicyOutput {
  }
  export interface DescribeReportCreationInput {
  }
  export interface DescribeReportCreationOutput {
    /**
     * Reports the status of the operation. The operation status can be one of the following:    RUNNING: Report generation is in progress.    SUCCEEDED: Report generation is complete. You can open the report from the Amazon S3 bucket you specified when you ran StartReportGeneration.    FAILED: Report generation timed out or the Amazon S3 bucket is not accessible.   
     */
    Status?: Status;
    /**
     * The path to the Amazon S3 bucket where the report is stored.
     */
    S3Location?: S3Location;
    /**
     * Details of the common errors that all operations return.
     */
    ErrorMessage?: ErrorMessage;
  }
  export interface DisableTagPoliciesInput {
  }
  export interface DisableTagPoliciesOutput {
  }
  export interface EnableTagPoliciesInput {
    /**
     * The root identifier of the organization. If you don't know the root ID, you can call the AWS Organizations ListRoots API to find it. 
     */
    RootId: RootId;
  }
  export interface EnableTagPoliciesOutput {
  }
  export type ErrorCode = "InternalServiceException"|"InvalidParameterException"|string;
  export type ErrorMessage = string;
  export type ExcludeCompliantResources = boolean;
  export type FailedResourcesMap = {[key: string]: FailureInfo};
  export interface FailureInfo {
    /**
     * The HTTP status code of the common error.
     */
    StatusCode?: StatusCode;
    /**
     * The code of the common error. Valid values include InternalServiceException, InvalidParameterException, and any valid error code returned by the AWS service that hosts the resource that you want to tag.
     */
    ErrorCode?: ErrorCode;
    /**
     * The message of the common error.
     */
    ErrorMessage?: ErrorMessage;
  }
  export interface GetComplianceSummaryInput {
    /**
     * The target identifiers (usually, specific account IDs) to limit the output by. If you use this parameter, the count of returned noncompliant resources includes only resources in the specified target IDs.
     */
    TargetIdFilters?: TargetIdFilterList;
    /**
     * A list of Regions to limit the output by. If you use this parameter, the count of returned noncompliant resources includes only resources in the specified Regions.
     */
    RegionFilters?: RegionFilterList;
    /**
     * The constraints on the resources that you want returned. The format of each resource type is service[:resourceType]. For example, specifying a resource type of ec2 returns all Amazon EC2 resources (which includes EC2 instances). Specifying a resource type of ec2:instance returns only EC2 instances.  The string for each service name and resource type is the same as that embedded in a resource's Amazon Resource Name (ARN). Consult the AWS General Reference for the following:   For a list of service name strings, see AWS Service Namespaces.   For resource type strings, see Example ARNs.   For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.   You can specify multiple resource types by using an array. The array can include up to 100 items. Note that the length constraint requirement applies to each resource type filter. 
     */
    ResourceTypeFilters?: ResourceTypeFilterList;
    /**
     * A list of tag keys to limit the output by. If you use this parameter, the count of returned noncompliant resources includes only resources that have the specified tag keys.
     */
    TagKeyFilters?: TagKeyFilterList;
    /**
     * A list of attributes to group the counts of noncompliant resources by. If supplied, the counts are sorted by those attributes.
     */
    GroupBy?: GroupBy;
    /**
     * A limit that restricts the number of results that are returned per page.
     */
    MaxResults?: MaxResultsGetComplianceSummary;
    /**
     * A string that indicates that additional data is available. Leave this value empty for your initial request. If the response includes a PaginationToken, use that string for this value to request an additional page of data.
     */
    PaginationToken?: PaginationToken;
  }
  export interface GetComplianceSummaryOutput {
    /**
     * A table that shows counts of noncompliant resources.
     */
    SummaryList?: SummaryList;
    /**
     * A string that indicates that the response contains more data than can be returned in a single response. To receive additional data, specify this string for the PaginationToken value in a subsequent request.
     */
    PaginationToken?: PaginationToken;
  }
  export interface GetEffectiveTagPolicyInput {
    /**
     * The unique identifier of the organization root or account whose tag policy you want returned. 
     */
    TargetId?: TargetId;
  }
  export interface GetEffectiveTagPolicyOutput {
    /**
     * The contents of the tag policy that is effective for this account.
     */
    Policy?: Policy;
    /**
     * The last time this tag policy was updated.
     */
    LastUpdated?: LastUpdated;
  }
  export interface GetResourcesInput {
    /**
     * A string that indicates that additional data is available. Leave this value empty for your initial request. If the response includes a PaginationToken, use that string for this value to request an additional page of data.
     */
    PaginationToken?: PaginationToken;
    /**
     * A list of TagFilters (keys and values). Each TagFilter specified must contain a key with values as optional. A request can include up to 50 keys, and each key can include up to 20 values.  Note the following when deciding how to use TagFilters:   If you do specify a TagFilter, the response returns only those resources that are currently associated with the specified tag.    If you don't specify a TagFilter, the response includes all resources that were ever associated with tags. Resources that currently don't have associated tags are shown with an empty tag set, like this: "Tags": [].   If you specify more than one filter in a single request, the response returns only those resources that satisfy all specified filters.   If you specify a filter that contains more than one value for a key, the response returns resources that match any of the specified values for that key.   If you don't specify any values for a key, the response returns resources that are tagged with that key irrespective of the value. For example, for filters: filter1 = {key1, {value1}}, filter2 = {key2, {value2,value3,value4}} , filter3 = {key3}:    GetResources( {filter1} ) returns resources tagged with key1=value1    GetResources( {filter2} ) returns resources tagged with key2=value2 or key2=value3 or key2=value4    GetResources( {filter3} ) returns resources tagged with any tag containing key3 as its tag key, irrespective of its value    GetResources( {filter1,filter2,filter3} ) returns resources tagged with ( key1=value1) and ( key2=value2 or key2=value3 or key2=value4) and (key3, irrespective of the value)    
     */
    TagFilters?: TagFilterList;
    /**
     * A limit that restricts the number of resources returned by GetResources in paginated output. You can set ResourcesPerPage to a minimum of 1 item and the maximum of 100 items. 
     */
    ResourcesPerPage?: ResourcesPerPage;
    /**
     * A limit that restricts the number of tags (key and value pairs) returned by GetResources in paginated output. A resource with no tags is counted as having one tag (one key and value pair).  GetResources does not split a resource and its associated tags across pages. If the specified TagsPerPage would cause such a break, a PaginationToken is returned in place of the affected resource and its tags. Use that token in another request to get the remaining data. For example, if you specify a TagsPerPage of 100 and the account has 22 resources with 10 tags each (meaning that each resource has 10 key and value pairs), the output will consist of 3 pages, with the first page displaying the first 10 resources, each with its 10 tags, the second page displaying the next 10 resources each with its 10 tags, and the third page displaying the remaining 2 resources, each with its 10 tags. You can set TagsPerPage to a minimum of 100 items and the maximum of 500 items.
     */
    TagsPerPage?: TagsPerPage;
    /**
     * The constraints on the resources that you want returned. The format of each resource type is service[:resourceType]. For example, specifying a resource type of ec2 returns all Amazon EC2 resources (which includes EC2 instances). Specifying a resource type of ec2:instance returns only EC2 instances.  The string for each service name and resource type is the same as that embedded in a resource's Amazon Resource Name (ARN). Consult the AWS General Reference for the following:   For a list of service name strings, see AWS Service Namespaces.   For resource type strings, see Example ARNs.   For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.   You can specify multiple resource types by using an array. The array can include up to 100 items. Note that the length constraint requirement applies to each resource type filter. 
     */
    ResourceTypeFilters?: ResourceTypeFilterList;
    /**
     * Specifies whether to include details regarding the compliance with the effective tag policy. Set this to true to determine whether resources are compliant with the tag policy and to get details.
     */
    IncludeComplianceDetails?: IncludeComplianceDetails;
    /**
     * Specifies whether to exclude resources that are compliant with the tag policy. Set this to true if you are interested in retrieving information on noncompliant resources only. You can use this parameter only if the IncludeComplianceDetails parameter is also set to true.
     */
    ExcludeCompliantResources?: ExcludeCompliantResources;
    /**
     * The tag policy to check resources against for compliance. If supplied, the compliance check follows the specified tag policy instead of following the effective tag policy. Using this parameter to specify a tag policy is useful for testing new tag policies before attaching them to a target. You can only use this parameter if the IncludeComplianceDetails parameter is also set to true.
     */
    Policy?: Policy;
  }
  export interface GetResourcesOutput {
    /**
     * A string that indicates that the response contains more data than can be returned in a single response. To receive additional data, specify this string for the PaginationToken value in a subsequent request.
     */
    PaginationToken?: PaginationToken;
    /**
     * A list of resource ARNs and the tags (keys and values) associated with each.
     */
    ResourceTagMappingList?: ResourceTagMappingList;
  }
  export interface GetTagKeysInput {
    /**
     * A string that indicates that additional data is available. Leave this value empty for your initial request. If the response includes a PaginationToken, use that string for this value to request an additional page of data.
     */
    PaginationToken?: PaginationToken;
    /**
     * A limit that restricts the number of results that are returned per page.
     */
    MaxResults?: MaxResultTagsDS1;
  }
  export interface GetTagKeysOutput {
    /**
     * A string that indicates that the response contains more data than can be returned in a single response. To receive additional data, specify this string for the PaginationToken value in a subsequent request.
     */
    PaginationToken?: PaginationToken;
    /**
     * A list of all tag keys in the AWS account.
     */
    TagKeys?: TagKeyList;
  }
  export interface GetTagPolicyInput {
    /**
     * The account ID or the root identifier of the organization. If you don't know the root ID, you can call the AWS Organizations ListRoots API to find it. 
     */
    TargetId: TargetId;
  }
  export interface GetTagPolicyOutput {
    /**
     * The policy that is attached to the specified target.
     */
    Policy?: Policy;
    /**
     * The last time this policy was updated.
     */
    LastUpdated?: LastUpdated;
  }
  export interface GetTagValuesInput {
    /**
     * A string that indicates that additional data is available. Leave this value empty for your initial request. If the response includes a PaginationToken, use that string for this value to request an additional page of data.
     */
    PaginationToken?: PaginationToken;
    /**
     * The key for which you want to list all existing values in the specified Region for the AWS account.
     */
    Key: TagKey;
    /**
     * A limit that restricts the number of results that are returned per page.
     */
    MaxResults?: MaxResultTagsDS1;
  }
  export interface GetTagValuesOutput {
    /**
     * A string that indicates that the response contains more data than can be returned in a single response. To receive additional data, specify this string for the PaginationToken value in a subsequent request.
     */
    PaginationToken?: PaginationToken;
    /**
     * A list of all tag values for the specified key in the AWS account.
     */
    TagValues?: TagValuesOutputList;
  }
  export type GroupBy = GroupByAttribute[];
  export type GroupByAttribute = "TARGET_ID"|"REGION"|"RESOURCE_TYPE"|string;
  export type IncludeComplianceDetails = boolean;
  export type LastUpdated = Date;
  export type MaxResultTagsDS1 = number;
  export type MaxResultsGetComplianceSummary = number;
  export type NonCompliantResources = number;
  export type PaginationToken = string;
  export type Policy = string;
  export interface PutTagPolicyInput {
    /**
     * The account ID or the root identifier of the organization. If you don't know the root ID, you can call the AWS Organizations ListRoots API to find it. 
     */
    TargetId: TargetId;
    /**
     * The tag policy to attach to the target.
     */
    Policy: Policy;
  }
  export interface PutTagPolicyOutput {
  }
  export type Region = string;
  export type RegionFilterList = Region[];
  export type ResourceARN = string;
  export type ResourceARNList = ResourceARN[];
  export interface ResourceTagMapping {
    /**
     * The ARN of the resource.
     */
    ResourceARN?: ResourceARN;
    /**
     * The tags that have been applied to one or more AWS resources.
     */
    Tags?: TagList;
    /**
     * Details on whether a resource is compliant with the effective tag policy, including information about any noncompliant tag keys.
     */
    ComplianceDetails?: ComplianceDetails;
  }
  export type ResourceTagMappingList = ResourceTagMapping[];
  export type ResourceTypeFilterList = AmazonResourceType[];
  export type ResourcesPerPage = number;
  export type RootId = string;
  export type S3Bucket = string;
  export type S3Location = string;
  export interface StartReportCreationInput {
    /**
     * The name of the Amazon S3 bucket where the report will be stored. For more information on S3 bucket requirements, including an example bucket policy, see Additional Requirements for Running Organization-Wide Tag Compliance Report in the AWS Resource Groups User Guide. 
     */
    S3Bucket: S3Bucket;
  }
  export interface StartReportCreationOutput {
  }
  export type Status = string;
  export type StatusCode = number;
  export interface Summary {
    /**
     * The timestamp that shows when this summary was generated in this Region. 
     */
    LastUpdated?: LastUpdated;
    /**
     * The account identifier or the root identifier of the organization. If you don't know the root ID, you can call the AWS Organizations ListRoots API.
     */
    TargetId?: TargetId;
    /**
     * The AWS Region that the summary applies to.
     */
    Region?: Region;
    /**
     * The resource type.
     */
    ResourceType?: AmazonResourceType;
    /**
     * The count of noncompliant resources.
     */
    NonCompliantResources?: NonCompliantResources;
  }
  export type SummaryList = Summary[];
  export interface Tag {
    /**
     * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
     */
    Key: TagKey;
    /**
     * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
     */
    Value: TagValue;
  }
  export interface TagFilter {
    /**
     * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
     */
    Key?: TagKey;
    /**
     * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
     */
    Values?: TagValueList;
  }
  export type TagFilterList = TagFilter[];
  export type TagKey = string;
  export type TagKeyFilterList = TagKey[];
  export type TagKeyList = TagKey[];
  export type TagKeyListForUntag = TagKey[];
  export type TagList = Tag[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourcesInput {
    /**
     * A list of ARNs. An ARN (Amazon Resource Name) uniquely identifies a resource. You can specify a minimum of 1 and a maximum of 20 ARNs (resources) to tag. For more information, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    ResourceARNList: ResourceARNList;
    /**
     * The tags that you want to add to the specified resources. A tag consists of a key and a value that you define.
     */
    Tags: TagMap;
  }
  export interface TagResourcesOutput {
    /**
     * Details of resources that could not be tagged. An error code, status code, and error message are returned for each failed item.
     */
    FailedResourcesMap?: FailedResourcesMap;
  }
  export type TagValue = string;
  export type TagValueList = TagValue[];
  export type TagValuesOutputList = TagValue[];
  export type TagsPerPage = number;
  export type TargetId = string;
  export type TargetIdFilterList = TargetId[];
  export interface UntagResourcesInput {
    /**
     * A list of ARNs. An ARN (Amazon Resource Name) uniquely identifies a resource. You can specify a minimum of 1 and a maximum of 20 ARNs (resources) to untag. For more information, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    ResourceARNList: ResourceARNList;
    /**
     * A list of the tag keys that you want to remove from the specified resources.
     */
    TagKeys: TagKeyListForUntag;
  }
  export interface UntagResourcesOutput {
    /**
     * Details of resources that could not be untagged. An error code, status code, and error message are returned for each failed item.
     */
    FailedResourcesMap?: FailedResourcesMap;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-01-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ResourceGroupsTaggingAPI client.
   */
  export import Types = ResourceGroupsTaggingAPI;
}
export = ResourceGroupsTaggingAPI;
