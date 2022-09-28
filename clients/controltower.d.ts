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
   * This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.
   */
  disableControl(params: ControlTower.Types.DisableControlInput, callback?: (err: AWSError, data: ControlTower.Types.DisableControlOutput) => void): Request<ControlTower.Types.DisableControlOutput, AWSError>;
  /**
   * This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.
   */
  disableControl(callback?: (err: AWSError, data: ControlTower.Types.DisableControlOutput) => void): Request<ControlTower.Types.DisableControlOutput, AWSError>;
  /**
   * This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
   */
  enableControl(params: ControlTower.Types.EnableControlInput, callback?: (err: AWSError, data: ControlTower.Types.EnableControlOutput) => void): Request<ControlTower.Types.EnableControlOutput, AWSError>;
  /**
   * This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
   */
  enableControl(callback?: (err: AWSError, data: ControlTower.Types.EnableControlOutput) => void): Request<ControlTower.Types.EnableControlOutput, AWSError>;
  /**
   * Returns the status of a particular EnableControl or DisableControl operation. Displays a message in case of error. Details for an operation are available for 90 days.
   */
  getControlOperation(params: ControlTower.Types.GetControlOperationInput, callback?: (err: AWSError, data: ControlTower.Types.GetControlOperationOutput) => void): Request<ControlTower.Types.GetControlOperationOutput, AWSError>;
  /**
   * Returns the status of a particular EnableControl or DisableControl operation. Displays a message in case of error. Details for an operation are available for 90 days.
   */
  getControlOperation(callback?: (err: AWSError, data: ControlTower.Types.GetControlOperationOutput) => void): Request<ControlTower.Types.GetControlOperationOutput, AWSError>;
  /**
   * Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.
   */
  listEnabledControls(params: ControlTower.Types.ListEnabledControlsInput, callback?: (err: AWSError, data: ControlTower.Types.ListEnabledControlsOutput) => void): Request<ControlTower.Types.ListEnabledControlsOutput, AWSError>;
  /**
   * Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.
   */
  listEnabledControls(callback?: (err: AWSError, data: ControlTower.Types.ListEnabledControlsOutput) => void): Request<ControlTower.Types.ListEnabledControlsOutput, AWSError>;
}
declare namespace ControlTower {
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
     * The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.
     */
    controlIdentifier: ControlIdentifier;
    /**
     * The ARN of the organizational unit.
     */
    targetIdentifier: TargetIdentifier;
  }
  export interface DisableControlOutput {
    /**
     * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface EnableControlInput {
    /**
     * The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.
     */
    controlIdentifier: ControlIdentifier;
    /**
     * The ARN of the organizational unit.
     */
    targetIdentifier: TargetIdentifier;
  }
  export interface EnableControlOutput {
    /**
     * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface EnabledControlSummary {
    /**
     * The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail.
     */
    controlIdentifier?: ControlIdentifier;
  }
  export type EnabledControls = EnabledControlSummary[];
  export interface GetControlOperationInput {
    /**
     * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface GetControlOperationOutput {
    /**
     * 
     */
    controlOperation: ControlOperation;
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
     * The ARN of the organizational unit.
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
  export type MaxResults = number;
  export type OperationIdentifier = string;
  export type String = string;
  export type SyntheticTimestamp_date_time = Date;
  export type TargetIdentifier = string;
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
