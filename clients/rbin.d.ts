import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Rbin extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Rbin.Types.ClientConfiguration)
  config: Config & Rbin.Types.ClientConfiguration;
  /**
   * Creates a Recycle Bin retention rule. For more information, see  Create Recycle Bin retention rules in the Amazon EC2 User Guide.
   */
  createRule(params: Rbin.Types.CreateRuleRequest, callback?: (err: AWSError, data: Rbin.Types.CreateRuleResponse) => void): Request<Rbin.Types.CreateRuleResponse, AWSError>;
  /**
   * Creates a Recycle Bin retention rule. For more information, see  Create Recycle Bin retention rules in the Amazon EC2 User Guide.
   */
  createRule(callback?: (err: AWSError, data: Rbin.Types.CreateRuleResponse) => void): Request<Rbin.Types.CreateRuleResponse, AWSError>;
  /**
   * Deletes a Recycle Bin retention rule. For more information, see  Delete Recycle Bin retention rules in the Amazon EC2 User Guide.
   */
  deleteRule(params: Rbin.Types.DeleteRuleRequest, callback?: (err: AWSError, data: Rbin.Types.DeleteRuleResponse) => void): Request<Rbin.Types.DeleteRuleResponse, AWSError>;
  /**
   * Deletes a Recycle Bin retention rule. For more information, see  Delete Recycle Bin retention rules in the Amazon EC2 User Guide.
   */
  deleteRule(callback?: (err: AWSError, data: Rbin.Types.DeleteRuleResponse) => void): Request<Rbin.Types.DeleteRuleResponse, AWSError>;
  /**
   * Gets information about a Recycle Bin retention rule.
   */
  getRule(params: Rbin.Types.GetRuleRequest, callback?: (err: AWSError, data: Rbin.Types.GetRuleResponse) => void): Request<Rbin.Types.GetRuleResponse, AWSError>;
  /**
   * Gets information about a Recycle Bin retention rule.
   */
  getRule(callback?: (err: AWSError, data: Rbin.Types.GetRuleResponse) => void): Request<Rbin.Types.GetRuleResponse, AWSError>;
  /**
   * Lists the Recycle Bin retention rules in the Region.
   */
  listRules(params: Rbin.Types.ListRulesRequest, callback?: (err: AWSError, data: Rbin.Types.ListRulesResponse) => void): Request<Rbin.Types.ListRulesResponse, AWSError>;
  /**
   * Lists the Recycle Bin retention rules in the Region.
   */
  listRules(callback?: (err: AWSError, data: Rbin.Types.ListRulesResponse) => void): Request<Rbin.Types.ListRulesResponse, AWSError>;
  /**
   * Lists the tags assigned a specific resource.
   */
  listTagsForResource(params: Rbin.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Rbin.Types.ListTagsForResourceResponse) => void): Request<Rbin.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags assigned a specific resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Rbin.Types.ListTagsForResourceResponse) => void): Request<Rbin.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Assigns tags to the specified resource.
   */
  tagResource(params: Rbin.Types.TagResourceRequest, callback?: (err: AWSError, data: Rbin.Types.TagResourceResponse) => void): Request<Rbin.Types.TagResourceResponse, AWSError>;
  /**
   * Assigns tags to the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: Rbin.Types.TagResourceResponse) => void): Request<Rbin.Types.TagResourceResponse, AWSError>;
  /**
   * Unassigns a tag from a resource.
   */
  untagResource(params: Rbin.Types.UntagResourceRequest, callback?: (err: AWSError, data: Rbin.Types.UntagResourceResponse) => void): Request<Rbin.Types.UntagResourceResponse, AWSError>;
  /**
   * Unassigns a tag from a resource.
   */
  untagResource(callback?: (err: AWSError, data: Rbin.Types.UntagResourceResponse) => void): Request<Rbin.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing Recycle Bin retention rule. For more information, see  Update Recycle Bin retention rules in the Amazon EC2 User Guide.
   */
  updateRule(params: Rbin.Types.UpdateRuleRequest, callback?: (err: AWSError, data: Rbin.Types.UpdateRuleResponse) => void): Request<Rbin.Types.UpdateRuleResponse, AWSError>;
  /**
   * Updates an existing Recycle Bin retention rule. For more information, see  Update Recycle Bin retention rules in the Amazon EC2 User Guide.
   */
  updateRule(callback?: (err: AWSError, data: Rbin.Types.UpdateRuleResponse) => void): Request<Rbin.Types.UpdateRuleResponse, AWSError>;
}
declare namespace Rbin {
  export interface CreateRuleRequest {
    /**
     * Information about the retention period for which the retention rule is to retain resources.
     */
    RetentionPeriod: RetentionPeriod;
    /**
     * A brief description for the retention rule.
     */
    Description?: Description;
    /**
     * Information about the tags to assign to the retention rule.
     */
    Tags?: TagList;
    /**
     * The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots are supported.
     */
    ResourceType: ResourceType;
    /**
     * Information about the resource tags to use to identify resources that are to be retained by the retention rule. The retention rule retains only deleted snapshots that have one or more of the specified tag key and value pairs. If a snapshot is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule. You can add the same tag key and value pair to a maximum or five retention rules.
     */
    ResourceTags?: ResourceTags;
  }
  export interface CreateRuleResponse {
    /**
     * The unique identifier of the retention rule.
     */
    Identifier?: RuleIdentifier;
    RetentionPeriod?: RetentionPeriod;
    /**
     * The retention rule description.
     */
    Description?: Description;
    /**
     * The tags assigned to the retention rule.
     */
    Tags?: TagList;
    /**
     * The resource type retained by the retention rule.
     */
    ResourceType?: ResourceType;
    /**
     * Information about the resource tags used to identify resources that are retained by the retention rule.
     */
    ResourceTags?: ResourceTags;
    /**
     * The state of the retention rule. Only retention rules that are in the available state retain snapshots.
     */
    Status?: RuleStatus;
  }
  export interface DeleteRuleRequest {
    /**
     * The unique ID of the retention rule to delete.
     */
    Identifier: RuleIdentifier;
  }
  export interface DeleteRuleResponse {
  }
  export type Description = string;
  export interface GetRuleRequest {
    /**
     * The unique ID of the retention rule.
     */
    Identifier: RuleIdentifier;
  }
  export interface GetRuleResponse {
    /**
     * The unique ID of the retention rule.
     */
    Identifier?: RuleIdentifier;
    /**
     * The description assigned to the retention rule.
     */
    Description?: Description;
    /**
     * The resource type retained by the retention rule. Currently, only Amazon EBS snapshots are supported.
     */
    ResourceType?: ResourceType;
    /**
     * Information about the period for which the retention rule retains resources.
     */
    RetentionPeriod?: RetentionPeriod;
    /**
     * The resource tags used to identify resources that are to be retained by the retention rule.
     */
    ResourceTags?: ResourceTags;
    /**
     * The state of the retention rule. Only retention rules that are in the available state retain snapshots.
     */
    Status?: RuleStatus;
  }
  export interface ListRulesRequest {
    /**
     * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned nextToken value. This value can be between 5 and 500. If maxResults is given a larger value than 500, you receive an error.
     */
    MaxResults?: MaxResults;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: NextToken;
    /**
     * The resource type retained by the retention rule. Only retention rules that retain the specified resource type are listed.
     */
    ResourceType: ResourceType;
    /**
     * The tags used to identify resources that are to be retained by the retention rule.
     */
    ResourceTags?: ResourceTags;
  }
  export interface ListRulesResponse {
    /**
     * Information about the retention rules.
     */
    Rules?: RuleSummaryList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource for which to list the tags.
     */
    ResourceArn: RuleArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Information about the tags assigned to the resource.
     */
    Tags?: TagList;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export interface ResourceTag {
    /**
     * The tag key.
     */
    ResourceTagKey: ResourceTagKey;
    /**
     * The tag value.
     */
    ResourceTagValue?: ResourceTagValue;
  }
  export type ResourceTagKey = string;
  export type ResourceTagValue = string;
  export type ResourceTags = ResourceTag[];
  export type ResourceType = "EBS_SNAPSHOT"|string;
  export interface RetentionPeriod {
    /**
     * The period value for which the retention rule is to retain resources. The period is measured using the unit specified for RetentionPeriodUnit.
     */
    RetentionPeriodValue: RetentionPeriodValue;
    /**
     * The unit of time in which the retention period is measured. Currently, only DAYS is supported.
     */
    RetentionPeriodUnit: RetentionPeriodUnit;
  }
  export type RetentionPeriodUnit = "DAYS"|string;
  export type RetentionPeriodValue = number;
  export type RuleArn = string;
  export type RuleIdentifier = string;
  export type RuleStatus = "pending"|"available"|string;
  export interface RuleSummary {
    /**
     * The unique ID of the retention rule.
     */
    Identifier?: RuleIdentifier;
    /**
     * The description for the retention rule.
     */
    Description?: Description;
    /**
     * Information about the retention period for which the retention rule retains resources
     */
    RetentionPeriod?: RetentionPeriod;
  }
  export type RuleSummaryList = RuleSummary[];
  export interface Tag {
    /**
     * The tag key.
     */
    Key: TagKey;
    /**
     * The tag value.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to which to assign the tags.
     */
    ResourceArn: RuleArn;
    /**
     * Information about the tags to assign to the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource from which to unassign the tags.
     */
    ResourceArn: RuleArn;
    /**
     * Information about the tags to unassign from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateRuleRequest {
    /**
     * The unique ID of the retention rule to update.
     */
    Identifier: RuleIdentifier;
    /**
     * Information about the retention period for which the retention rule is to retain resources.
     */
    RetentionPeriod?: RetentionPeriod;
    /**
     * The retention rule description.
     */
    Description?: Description;
    /**
     * The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots are supported.
     */
    ResourceType?: ResourceType;
    /**
     * Information about the resource tags to use to identify resources that are to be retained by the retention rule. The retention rule retains only deleted snapshots that have one or more of the specified tag key and value pairs. If a snapshot is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.  You can add the same tag key and value pair to a maximum or five retention rules.
     */
    ResourceTags?: ResourceTags;
  }
  export interface UpdateRuleResponse {
    /**
     * The unique ID of the retention rule.
     */
    Identifier?: RuleIdentifier;
    RetentionPeriod?: RetentionPeriod;
    /**
     * The retention rule description.
     */
    Description?: Description;
    /**
     * The resource type retained by the retention rule.
     */
    ResourceType?: ResourceType;
    /**
     * Information about the resource tags used to identify resources that are retained by the retention rule.
     */
    ResourceTags?: ResourceTags;
    /**
     * The state of the retention rule. Only retention rules that are in the available state retain snapshots.
     */
    Status?: RuleStatus;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-06-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Rbin client.
   */
  export import Types = Rbin;
}
export = Rbin;
