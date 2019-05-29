import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DLM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DLM.Types.ClientConfiguration)
  config: Config & DLM.Types.ClientConfiguration;
  /**
   * Creates a policy to manage the lifecycle of the specified AWS resources. You can create up to 100 lifecycle policies.
   */
  createLifecyclePolicy(params: DLM.Types.CreateLifecyclePolicyRequest, callback?: (err: AWSError, data: DLM.Types.CreateLifecyclePolicyResponse) => void): Request<DLM.Types.CreateLifecyclePolicyResponse, AWSError>;
  /**
   * Creates a policy to manage the lifecycle of the specified AWS resources. You can create up to 100 lifecycle policies.
   */
  createLifecyclePolicy(callback?: (err: AWSError, data: DLM.Types.CreateLifecyclePolicyResponse) => void): Request<DLM.Types.CreateLifecyclePolicyResponse, AWSError>;
  /**
   * Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
   */
  deleteLifecyclePolicy(params: DLM.Types.DeleteLifecyclePolicyRequest, callback?: (err: AWSError, data: DLM.Types.DeleteLifecyclePolicyResponse) => void): Request<DLM.Types.DeleteLifecyclePolicyResponse, AWSError>;
  /**
   * Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
   */
  deleteLifecyclePolicy(callback?: (err: AWSError, data: DLM.Types.DeleteLifecyclePolicyResponse) => void): Request<DLM.Types.DeleteLifecyclePolicyResponse, AWSError>;
  /**
   * Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy.
   */
  getLifecyclePolicies(params: DLM.Types.GetLifecyclePoliciesRequest, callback?: (err: AWSError, data: DLM.Types.GetLifecyclePoliciesResponse) => void): Request<DLM.Types.GetLifecyclePoliciesResponse, AWSError>;
  /**
   * Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy.
   */
  getLifecyclePolicies(callback?: (err: AWSError, data: DLM.Types.GetLifecyclePoliciesResponse) => void): Request<DLM.Types.GetLifecyclePoliciesResponse, AWSError>;
  /**
   * Gets detailed information about the specified lifecycle policy.
   */
  getLifecyclePolicy(params: DLM.Types.GetLifecyclePolicyRequest, callback?: (err: AWSError, data: DLM.Types.GetLifecyclePolicyResponse) => void): Request<DLM.Types.GetLifecyclePolicyResponse, AWSError>;
  /**
   * Gets detailed information about the specified lifecycle policy.
   */
  getLifecyclePolicy(callback?: (err: AWSError, data: DLM.Types.GetLifecyclePolicyResponse) => void): Request<DLM.Types.GetLifecyclePolicyResponse, AWSError>;
  /**
   * Updates the specified lifecycle policy.
   */
  updateLifecyclePolicy(params: DLM.Types.UpdateLifecyclePolicyRequest, callback?: (err: AWSError, data: DLM.Types.UpdateLifecyclePolicyResponse) => void): Request<DLM.Types.UpdateLifecyclePolicyResponse, AWSError>;
  /**
   * Updates the specified lifecycle policy.
   */
  updateLifecyclePolicy(callback?: (err: AWSError, data: DLM.Types.UpdateLifecyclePolicyResponse) => void): Request<DLM.Types.UpdateLifecyclePolicyResponse, AWSError>;
}
declare namespace DLM {
  export type CopyTags = boolean;
  export type Count = number;
  export interface CreateLifecyclePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    ExecutionRoleArn: ExecutionRoleArn;
    /**
     * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
     */
    Description: PolicyDescription;
    /**
     * The desired activation state of the lifecycle policy after creation.
     */
    State: SettablePolicyStateValues;
    /**
     * The configuration details of the lifecycle policy. Target tags cannot be re-used across lifecycle policies.
     */
    PolicyDetails: PolicyDetails;
  }
  export interface CreateLifecyclePolicyResponse {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId?: PolicyId;
  }
  export interface CreateRule {
    /**
     * The interval between snapshots. The supported values are 2, 3, 4, 6, 8, 12, and 24.
     */
    Interval: Interval;
    /**
     * The interval unit.
     */
    IntervalUnit: IntervalUnitValues;
    /**
     * The time, in UTC, to start the operation. The supported format is hh:mm. The operation occurs within a one-hour window following the specified time.
     */
    Times?: TimesList;
  }
  export interface DeleteLifecyclePolicyRequest {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId: PolicyId;
  }
  export interface DeleteLifecyclePolicyResponse {
  }
  export type ExcludeBootVolume = boolean;
  export type ExecutionRoleArn = string;
  export interface GetLifecyclePoliciesRequest {
    /**
     * The identifiers of the data lifecycle policies.
     */
    PolicyIds?: PolicyIdList;
    /**
     * The activation state.
     */
    State?: GettablePolicyStateValues;
    /**
     * The resource type.
     */
    ResourceTypes?: ResourceTypeValuesList;
    /**
     * The target tag for a policy. Tags are strings in the format key=value.
     */
    TargetTags?: TargetTagsFilterList;
    /**
     * The tags to add to objects created by the policy. Tags are strings in the format key=value. These user-defined tags are added in addition to the AWS-added lifecycle tags.
     */
    TagsToAdd?: TagsToAddFilterList;
  }
  export interface GetLifecyclePoliciesResponse {
    /**
     * Summary information about the lifecycle policies.
     */
    Policies?: LifecyclePolicySummaryList;
  }
  export interface GetLifecyclePolicyRequest {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId: PolicyId;
  }
  export interface GetLifecyclePolicyResponse {
    /**
     * Detailed information about the lifecycle policy.
     */
    Policy?: LifecyclePolicy;
  }
  export type GettablePolicyStateValues = "ENABLED"|"DISABLED"|"ERROR"|string;
  export type Interval = number;
  export type IntervalUnitValues = "HOURS"|string;
  export interface LifecyclePolicy {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId?: PolicyId;
    /**
     * The description of the lifecycle policy.
     */
    Description?: PolicyDescription;
    /**
     * The activation state of the lifecycle policy.
     */
    State?: GettablePolicyStateValues;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    ExecutionRoleArn?: ExecutionRoleArn;
    /**
     * The local date and time when the lifecycle policy was created.
     */
    DateCreated?: Timestamp;
    /**
     * The local date and time when the lifecycle policy was last modified.
     */
    DateModified?: Timestamp;
    /**
     * The configuration of the lifecycle policy
     */
    PolicyDetails?: PolicyDetails;
  }
  export interface LifecyclePolicySummary {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId?: PolicyId;
    /**
     * The description of the lifecycle policy.
     */
    Description?: PolicyDescription;
    /**
     * The activation state of the lifecycle policy.
     */
    State?: GettablePolicyStateValues;
  }
  export type LifecyclePolicySummaryList = LifecyclePolicySummary[];
  export interface Parameters {
    /**
     * When executing an EBS Snapshot Management – Instance policy, execute all CreateSnapshots calls with the excludeBootVolume set to the supplied field. Defaults to false. Only valid for EBS Snapshot Management – Instance policies.
     */
    ExcludeBootVolume?: ExcludeBootVolume;
  }
  export type PolicyDescription = string;
  export interface PolicyDetails {
    /**
     * This field determines the valid target resource types and actions a policy can manage. This field defaults to EBS_SNAPSHOT_MANAGEMENT if not present.
     */
    PolicyType?: PolicyTypeValues;
    /**
     * The resource type.
     */
    ResourceTypes?: ResourceTypeValuesList;
    /**
     * The single tag that identifies targeted resources for this policy.
     */
    TargetTags?: TargetTagList;
    /**
     * The schedule of policy-defined actions.
     */
    Schedules?: ScheduleList;
    /**
     * A set of optional parameters that can be provided by the policy. 
     */
    Parameters?: Parameters;
  }
  export type PolicyId = string;
  export type PolicyIdList = PolicyId[];
  export type PolicyTypeValues = "EBS_SNAPSHOT_MANAGEMENT"|string;
  export type ResourceTypeValues = "VOLUME"|"INSTANCE"|string;
  export type ResourceTypeValuesList = ResourceTypeValues[];
  export interface RetainRule {
    /**
     * The number of snapshots to keep for each volume, up to a maximum of 1000.
     */
    Count: Count;
  }
  export interface Schedule {
    /**
     * The name of the schedule.
     */
    Name?: ScheduleName;
    /**
     * Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
     */
    CopyTags?: CopyTags;
    /**
     * The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.
     */
    TagsToAdd?: TagsToAddList;
    /**
     * A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: $(instance-id) or $(timestamp). Variable tags are only valid for EBS Snapshot Management – Instance policies.
     */
    VariableTags?: VariableTagsList;
    /**
     * The create rule.
     */
    CreateRule?: CreateRule;
    /**
     * The retain rule.
     */
    RetainRule?: RetainRule;
  }
  export type ScheduleList = Schedule[];
  export type ScheduleName = string;
  export type SettablePolicyStateValues = "ENABLED"|"DISABLED"|string;
  export type String = string;
  export interface Tag {
    /**
     * The tag key.
     */
    Key: String;
    /**
     * The tag value.
     */
    Value: String;
  }
  export type TagFilter = string;
  export type TagsToAddFilterList = TagFilter[];
  export type TagsToAddList = Tag[];
  export type TargetTagList = Tag[];
  export type TargetTagsFilterList = TagFilter[];
  export type Time = string;
  export type TimesList = Time[];
  export type Timestamp = Date;
  export interface UpdateLifecyclePolicyRequest {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId: PolicyId;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    ExecutionRoleArn?: ExecutionRoleArn;
    /**
     * The desired activation state of the lifecycle policy after creation.
     */
    State?: SettablePolicyStateValues;
    /**
     * A description of the lifecycle policy.
     */
    Description?: PolicyDescription;
    /**
     * The configuration of the lifecycle policy. Target tags cannot be re-used across policies.
     */
    PolicyDetails?: PolicyDetails;
  }
  export interface UpdateLifecyclePolicyResponse {
  }
  export type VariableTagsList = Tag[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-01-12"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DLM client.
   */
  export import Types = DLM;
}
export = DLM;
