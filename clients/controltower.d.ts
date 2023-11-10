import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ControlTower extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ControlTower.Types.ClientConfiguration)
  config: Config & ControlTower.Types.ClientConfiguration;
  /**
   * This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see  the AWS Control Tower User Guide .
   */
  disableControl(params: ControlTower.Types.DisableControlInput, callback?: (err: AWSError, data: ControlTower.Types.DisableControlOutput) => void): Request<ControlTower.Types.DisableControlOutput, AWSError>;
  /**
   * This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see  the AWS Control Tower User Guide .
   */
  disableControl(callback?: (err: AWSError, data: ControlTower.Types.DisableControlOutput) => void): Request<ControlTower.Types.DisableControlOutput, AWSError>;
  /**
   * This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify. For usage examples, see  the AWS Control Tower User Guide .
   */
  enableControl(params: ControlTower.Types.EnableControlInput, callback?: (err: AWSError, data: ControlTower.Types.EnableControlOutput) => void): Request<ControlTower.Types.EnableControlOutput, AWSError>;
  /**
   * This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify. For usage examples, see  the AWS Control Tower User Guide .
   */
  enableControl(callback?: (err: AWSError, data: ControlTower.Types.EnableControlOutput) => void): Request<ControlTower.Types.EnableControlOutput, AWSError>;
  /**
   * Returns the status of a particular EnableControl or DisableControl operation. Displays a message in case of error. Details for an operation are available for 90 days. For usage examples, see  the AWS Control Tower User Guide .
   */
  getControlOperation(params: ControlTower.Types.GetControlOperationInput, callback?: (err: AWSError, data: ControlTower.Types.GetControlOperationOutput) => void): Request<ControlTower.Types.GetControlOperationOutput, AWSError>;
  /**
   * Returns the status of a particular EnableControl or DisableControl operation. Displays a message in case of error. Details for an operation are available for 90 days. For usage examples, see  the AWS Control Tower User Guide .
   */
  getControlOperation(callback?: (err: AWSError, data: ControlTower.Types.GetControlOperationOutput) => void): Request<ControlTower.Types.GetControlOperationOutput, AWSError>;
  /**
   * Retrieves details about an enabled control. For usage examples, see  the AWS Control Tower User Guide .
   */
  getEnabledControl(params: ControlTower.Types.GetEnabledControlInput, callback?: (err: AWSError, data: ControlTower.Types.GetEnabledControlOutput) => void): Request<ControlTower.Types.GetEnabledControlOutput, AWSError>;
  /**
   * Retrieves details about an enabled control. For usage examples, see  the AWS Control Tower User Guide .
   */
  getEnabledControl(callback?: (err: AWSError, data: ControlTower.Types.GetEnabledControlOutput) => void): Request<ControlTower.Types.GetEnabledControlOutput, AWSError>;
  /**
   * Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains. For usage examples, see  the AWS Control Tower User Guide .
   */
  listEnabledControls(params: ControlTower.Types.ListEnabledControlsInput, callback?: (err: AWSError, data: ControlTower.Types.ListEnabledControlsOutput) => void): Request<ControlTower.Types.ListEnabledControlsOutput, AWSError>;
  /**
   * Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains. For usage examples, see  the AWS Control Tower User Guide .
   */
  listEnabledControls(callback?: (err: AWSError, data: ControlTower.Types.ListEnabledControlsOutput) => void): Request<ControlTower.Types.ListEnabledControlsOutput, AWSError>;
  /**
   * Returns a list of tags associated with the resource. For usage examples, see  the AWS Control Tower User Guide .
   */
  listTagsForResource(params: ControlTower.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: ControlTower.Types.ListTagsForResourceOutput) => void): Request<ControlTower.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Returns a list of tags associated with the resource. For usage examples, see  the AWS Control Tower User Guide .
   */
  listTagsForResource(callback?: (err: AWSError, data: ControlTower.Types.ListTagsForResourceOutput) => void): Request<ControlTower.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Applies tags to a resource. For usage examples, see  the AWS Control Tower User Guide .
   */
  tagResource(params: ControlTower.Types.TagResourceInput, callback?: (err: AWSError, data: ControlTower.Types.TagResourceOutput) => void): Request<ControlTower.Types.TagResourceOutput, AWSError>;
  /**
   * Applies tags to a resource. For usage examples, see  the AWS Control Tower User Guide .
   */
  tagResource(callback?: (err: AWSError, data: ControlTower.Types.TagResourceOutput) => void): Request<ControlTower.Types.TagResourceOutput, AWSError>;
  /**
   * Removes tags from a resource. For usage examples, see  the AWS Control Tower User Guide .
   */
  untagResource(params: ControlTower.Types.UntagResourceInput, callback?: (err: AWSError, data: ControlTower.Types.UntagResourceOutput) => void): Request<ControlTower.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes tags from a resource. For usage examples, see  the AWS Control Tower User Guide .
   */
  untagResource(callback?: (err: AWSError, data: ControlTower.Types.UntagResourceOutput) => void): Request<ControlTower.Types.UntagResourceOutput, AWSError>;
}
declare namespace ControlTower {
  export type Arn = string;
  export type ControlIdentifier = string;
  export interface ControlOperation {
    /**
     * The time that the operation finished.
     */
    endTime?: SyntheticTimestamp_date_time;
    /**
     * One of ENABLE_CONTROL or DISABLE_CONTROL.
     */
    operationType?: ControlOperationType;
    /**
     * The time that the operation began.
     */
    startTime?: SyntheticTimestamp_date_time;
    /**
     * One of IN_PROGRESS, SUCEEDED, or FAILED.
     */
    status?: ControlOperationStatus;
    /**
     * If the operation result is FAILED, this string contains a message explaining why the operation failed.
     */
    statusMessage?: String;
  }
  export type ControlOperationStatus = "SUCCEEDED"|"FAILED"|"IN_PROGRESS"|string;
  export type ControlOperationType = "ENABLE_CONTROL"|"DISABLE_CONTROL"|string;
  export interface DisableControlInput {
    /**
     * The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny control. For information on how to find the controlIdentifier, see the overview page.
     */
    controlIdentifier: ControlIdentifier;
    /**
     * The ARN of the organizational unit. For information on how to find the targetIdentifier, see the overview page.
     */
    targetIdentifier: TargetIdentifier;
  }
  export interface DisableControlOutput {
    /**
     * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
     */
    operationIdentifier: OperationIdentifier;
  }
  export type DriftStatus = "DRIFTED"|"IN_SYNC"|"NOT_CHECKING"|"UNKNOWN"|string;
  export interface DriftStatusSummary {
    /**
     *  The drift status of the enabled control. Valid values:    DRIFTED: The enabledControl deployed in this configuration doesn’t match the configuration that AWS Control Tower expected.     IN_SYNC: The enabledControl deployed in this configuration matches the configuration that AWS Control Tower expected.    NOT_CHECKING: AWS Control Tower does not check drift for this enabled control. Drift is not supported for the control type.    UNKNOWN: AWS Control Tower is not able to check the drift status for the enabled control.   
     */
    driftStatus?: DriftStatus;
  }
  export interface EnableControlInput {
    /**
     * The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny control. For information on how to find the controlIdentifier, see the overview page.
     */
    controlIdentifier: ControlIdentifier;
    /**
     * Tags to be applied to the EnabledControl resource.
     */
    tags?: TagMap;
    /**
     * The ARN of the organizational unit. For information on how to find the targetIdentifier, see the overview page.
     */
    targetIdentifier: TargetIdentifier;
  }
  export interface EnableControlOutput {
    /**
     * The ARN of the EnabledControl resource.
     */
    arn?: Arn;
    /**
     * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface EnabledControlDetails {
    /**
     * The ARN of the enabled control.
     */
    arn?: Arn;
    /**
     * The control identifier of the enabled control. For information on how to find the controlIdentifier, see the overview page.
     */
    controlIdentifier?: ControlIdentifier;
    /**
     * The drift status of the enabled control.
     */
    driftStatusSummary?: DriftStatusSummary;
    /**
     * The deployment summary of the enabled control.
     */
    statusSummary?: EnablementStatusSummary;
    /**
     * The ARN of the organizational unit. For information on how to find the targetIdentifier, see the overview page.
     */
    targetIdentifier?: TargetIdentifier;
    /**
     * Target AWS Regions for the enabled control.
     */
    targetRegions?: TargetRegions;
  }
  export interface EnabledControlSummary {
    /**
     * The ARN of the enabled control.
     */
    arn?: Arn;
    /**
     * The controlIdentifier of the enabled control.
     */
    controlIdentifier?: ControlIdentifier;
    /**
     * The drift status of the enabled control.
     */
    driftStatusSummary?: DriftStatusSummary;
    /**
     * A short description of the status of the enabled control.
     */
    statusSummary?: EnablementStatusSummary;
    /**
     *  The ARN of the organizational unit. 
     */
    targetIdentifier?: TargetIdentifier;
  }
  export type EnabledControls = EnabledControlSummary[];
  export type EnablementStatus = "SUCCEEDED"|"FAILED"|"UNDER_CHANGE"|string;
  export interface EnablementStatusSummary {
    /**
     * The last operation identifier for the enabled control.
     */
    lastOperationIdentifier?: OperationIdentifier;
    /**
     *  The deployment status of the enabled control. Valid values:    SUCCEEDED: The enabledControl configuration was deployed successfully.    UNDER_CHANGE: The enabledControl configuration is changing.     FAILED: The enabledControl configuration failed to deploy.  
     */
    status?: EnablementStatus;
  }
  export interface GetControlOperationInput {
    /**
     * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface GetControlOperationOutput {
    /**
     * An operation performed by the control.
     */
    controlOperation: ControlOperation;
  }
  export interface GetEnabledControlInput {
    /**
     * The controlIdentifier of the enabled control.
     */
    enabledControlIdentifier: Arn;
  }
  export interface GetEnabledControlOutput {
    /**
     * Information about the enabled control.
     */
    enabledControlDetails: EnabledControlDetails;
  }
  export interface ListEnabledControlsInput {
    /**
     * How many results to return per API call.
     */
    maxResults?: MaxResults;
    /**
     * The token to continue the list from a previous API call with the same parameters.
     */
    nextToken?: String;
    /**
     * The ARN of the organizational unit. For information on how to find the targetIdentifier, see the overview page.
     */
    targetIdentifier: TargetIdentifier;
  }
  export interface ListEnabledControlsOutput {
    /**
     * Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.
     */
    enabledControls: EnabledControls;
    /**
     * Retrieves the next page of results. If the string is empty, the current response is the end of the results.
     */
    nextToken?: String;
  }
  export interface ListTagsForResourceInput {
    /**
     *  The ARN of the resource.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * A list of tags, as key:value strings.
     */
    tags: TagMap;
  }
  export type MaxResults = number;
  export type OperationIdentifier = string;
  export interface Region {
    /**
     * The AWS Region name.
     */
    name?: RegionName;
  }
  export type RegionName = string;
  export type String = string;
  export type SyntheticTimestamp_date_time = Date;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceInput {
    /**
     * The ARN of the resource to be tagged.
     */
    resourceArn: Arn;
    /**
     * Tags to be applied to the resource.
     */
    tags: TagMap;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type TargetIdentifier = string;
  export type TargetRegions = Region[];
  export interface UntagResourceInput {
    /**
     * The ARN of the resource.
     */
    resourceArn: Arn;
    /**
     * Tag keys to be removed from the resource.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceOutput {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ControlTower client.
   */
  export import Types = ControlTower;
}
export = ControlTower;
