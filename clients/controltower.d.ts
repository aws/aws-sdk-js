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
   * Creates a new landing zone. This API call starts an asynchronous operation that creates and configures a landing zone, based on the parameters specified in the manifest JSON file.
   */
  createLandingZone(params: ControlTower.Types.CreateLandingZoneInput, callback?: (err: AWSError, data: ControlTower.Types.CreateLandingZoneOutput) => void): Request<ControlTower.Types.CreateLandingZoneOutput, AWSError>;
  /**
   * Creates a new landing zone. This API call starts an asynchronous operation that creates and configures a landing zone, based on the parameters specified in the manifest JSON file.
   */
  createLandingZone(callback?: (err: AWSError, data: ControlTower.Types.CreateLandingZoneOutput) => void): Request<ControlTower.Types.CreateLandingZoneOutput, AWSError>;
  /**
   * Decommissions a landing zone. This API call starts an asynchronous operation that deletes Amazon Web Services Control Tower resources deployed in accounts managed by Amazon Web Services Control Tower.
   */
  deleteLandingZone(params: ControlTower.Types.DeleteLandingZoneInput, callback?: (err: AWSError, data: ControlTower.Types.DeleteLandingZoneOutput) => void): Request<ControlTower.Types.DeleteLandingZoneOutput, AWSError>;
  /**
   * Decommissions a landing zone. This API call starts an asynchronous operation that deletes Amazon Web Services Control Tower resources deployed in accounts managed by Amazon Web Services Control Tower.
   */
  deleteLandingZone(callback?: (err: AWSError, data: ControlTower.Types.DeleteLandingZoneOutput) => void): Request<ControlTower.Types.DeleteLandingZoneOutput, AWSError>;
  /**
   * Disable an EnabledBaseline resource on the specified Target. This API starts an asynchronous operation to remove all resources deployed as part of the baseline enablement. The resource will vary depending on the enabled baseline.
   */
  disableBaseline(params: ControlTower.Types.DisableBaselineInput, callback?: (err: AWSError, data: ControlTower.Types.DisableBaselineOutput) => void): Request<ControlTower.Types.DisableBaselineOutput, AWSError>;
  /**
   * Disable an EnabledBaseline resource on the specified Target. This API starts an asynchronous operation to remove all resources deployed as part of the baseline enablement. The resource will vary depending on the enabled baseline.
   */
  disableBaseline(callback?: (err: AWSError, data: ControlTower.Types.DisableBaselineOutput) => void): Request<ControlTower.Types.DisableBaselineOutput, AWSError>;
  /**
   * This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  disableControl(params: ControlTower.Types.DisableControlInput, callback?: (err: AWSError, data: ControlTower.Types.DisableControlOutput) => void): Request<ControlTower.Types.DisableControlOutput, AWSError>;
  /**
   * This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  disableControl(callback?: (err: AWSError, data: ControlTower.Types.DisableControlOutput) => void): Request<ControlTower.Types.DisableControlOutput, AWSError>;
  /**
   * Enable (apply) a Baseline to a Target. This API starts an asynchronous operation to deploy resources specified by the Baseline to the specified Target.
   */
  enableBaseline(params: ControlTower.Types.EnableBaselineInput, callback?: (err: AWSError, data: ControlTower.Types.EnableBaselineOutput) => void): Request<ControlTower.Types.EnableBaselineOutput, AWSError>;
  /**
   * Enable (apply) a Baseline to a Target. This API starts an asynchronous operation to deploy resources specified by the Baseline to the specified Target.
   */
  enableBaseline(callback?: (err: AWSError, data: ControlTower.Types.EnableBaselineOutput) => void): Request<ControlTower.Types.EnableBaselineOutput, AWSError>;
  /**
   * This API call activates a control. It starts an asynchronous operation that creates Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  enableControl(params: ControlTower.Types.EnableControlInput, callback?: (err: AWSError, data: ControlTower.Types.EnableControlOutput) => void): Request<ControlTower.Types.EnableControlOutput, AWSError>;
  /**
   * This API call activates a control. It starts an asynchronous operation that creates Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  enableControl(callback?: (err: AWSError, data: ControlTower.Types.EnableControlOutput) => void): Request<ControlTower.Types.EnableControlOutput, AWSError>;
  /**
   * Retrieve details about an existing Baseline resource by specifying its identifier.
   */
  getBaseline(params: ControlTower.Types.GetBaselineInput, callback?: (err: AWSError, data: ControlTower.Types.GetBaselineOutput) => void): Request<ControlTower.Types.GetBaselineOutput, AWSError>;
  /**
   * Retrieve details about an existing Baseline resource by specifying its identifier.
   */
  getBaseline(callback?: (err: AWSError, data: ControlTower.Types.GetBaselineOutput) => void): Request<ControlTower.Types.GetBaselineOutput, AWSError>;
  /**
   * Returns the details of an asynchronous baseline operation, as initiated by any of these APIs: EnableBaseline, DisableBaseline, UpdateEnabledBaseline, ResetEnabledBaseline. A status message is displayed in case of operation failure.
   */
  getBaselineOperation(params: ControlTower.Types.GetBaselineOperationInput, callback?: (err: AWSError, data: ControlTower.Types.GetBaselineOperationOutput) => void): Request<ControlTower.Types.GetBaselineOperationOutput, AWSError>;
  /**
   * Returns the details of an asynchronous baseline operation, as initiated by any of these APIs: EnableBaseline, DisableBaseline, UpdateEnabledBaseline, ResetEnabledBaseline. A status message is displayed in case of operation failure.
   */
  getBaselineOperation(callback?: (err: AWSError, data: ControlTower.Types.GetBaselineOperationOutput) => void): Request<ControlTower.Types.GetBaselineOperationOutput, AWSError>;
  /**
   * Returns the status of a particular EnableControl or DisableControl operation. Displays a message in case of error. Details for an operation are available for 90 days. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  getControlOperation(params: ControlTower.Types.GetControlOperationInput, callback?: (err: AWSError, data: ControlTower.Types.GetControlOperationOutput) => void): Request<ControlTower.Types.GetControlOperationOutput, AWSError>;
  /**
   * Returns the status of a particular EnableControl or DisableControl operation. Displays a message in case of error. Details for an operation are available for 90 days. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  getControlOperation(callback?: (err: AWSError, data: ControlTower.Types.GetControlOperationOutput) => void): Request<ControlTower.Types.GetControlOperationOutput, AWSError>;
  /**
   * Retrieve details of an EnabledBaseline resource by specifying its identifier.
   */
  getEnabledBaseline(params: ControlTower.Types.GetEnabledBaselineInput, callback?: (err: AWSError, data: ControlTower.Types.GetEnabledBaselineOutput) => void): Request<ControlTower.Types.GetEnabledBaselineOutput, AWSError>;
  /**
   * Retrieve details of an EnabledBaseline resource by specifying its identifier.
   */
  getEnabledBaseline(callback?: (err: AWSError, data: ControlTower.Types.GetEnabledBaselineOutput) => void): Request<ControlTower.Types.GetEnabledBaselineOutput, AWSError>;
  /**
   * Retrieves details about an enabled control. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  getEnabledControl(params: ControlTower.Types.GetEnabledControlInput, callback?: (err: AWSError, data: ControlTower.Types.GetEnabledControlOutput) => void): Request<ControlTower.Types.GetEnabledControlOutput, AWSError>;
  /**
   * Retrieves details about an enabled control. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  getEnabledControl(callback?: (err: AWSError, data: ControlTower.Types.GetEnabledControlOutput) => void): Request<ControlTower.Types.GetEnabledControlOutput, AWSError>;
  /**
   * Returns details about the landing zone. Displays a message in case of error.
   */
  getLandingZone(params: ControlTower.Types.GetLandingZoneInput, callback?: (err: AWSError, data: ControlTower.Types.GetLandingZoneOutput) => void): Request<ControlTower.Types.GetLandingZoneOutput, AWSError>;
  /**
   * Returns details about the landing zone. Displays a message in case of error.
   */
  getLandingZone(callback?: (err: AWSError, data: ControlTower.Types.GetLandingZoneOutput) => void): Request<ControlTower.Types.GetLandingZoneOutput, AWSError>;
  /**
   * Returns the status of the specified landing zone operation. Details for an operation are available for 60 days.
   */
  getLandingZoneOperation(params: ControlTower.Types.GetLandingZoneOperationInput, callback?: (err: AWSError, data: ControlTower.Types.GetLandingZoneOperationOutput) => void): Request<ControlTower.Types.GetLandingZoneOperationOutput, AWSError>;
  /**
   * Returns the status of the specified landing zone operation. Details for an operation are available for 60 days.
   */
  getLandingZoneOperation(callback?: (err: AWSError, data: ControlTower.Types.GetLandingZoneOperationOutput) => void): Request<ControlTower.Types.GetLandingZoneOperationOutput, AWSError>;
  /**
   * Returns a summary list of all available baselines.
   */
  listBaselines(params: ControlTower.Types.ListBaselinesInput, callback?: (err: AWSError, data: ControlTower.Types.ListBaselinesOutput) => void): Request<ControlTower.Types.ListBaselinesOutput, AWSError>;
  /**
   * Returns a summary list of all available baselines.
   */
  listBaselines(callback?: (err: AWSError, data: ControlTower.Types.ListBaselinesOutput) => void): Request<ControlTower.Types.ListBaselinesOutput, AWSError>;
  /**
   * Returns a list of summaries describing EnabledBaseline resources. You can filter the list by the corresponding Baseline or Target of the EnabledBaseline resources.
   */
  listEnabledBaselines(params: ControlTower.Types.ListEnabledBaselinesInput, callback?: (err: AWSError, data: ControlTower.Types.ListEnabledBaselinesOutput) => void): Request<ControlTower.Types.ListEnabledBaselinesOutput, AWSError>;
  /**
   * Returns a list of summaries describing EnabledBaseline resources. You can filter the list by the corresponding Baseline or Target of the EnabledBaseline resources.
   */
  listEnabledBaselines(callback?: (err: AWSError, data: ControlTower.Types.ListEnabledBaselinesOutput) => void): Request<ControlTower.Types.ListEnabledBaselinesOutput, AWSError>;
  /**
   * Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and the accounts it contains. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  listEnabledControls(params: ControlTower.Types.ListEnabledControlsInput, callback?: (err: AWSError, data: ControlTower.Types.ListEnabledControlsOutput) => void): Request<ControlTower.Types.ListEnabledControlsOutput, AWSError>;
  /**
   * Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and the accounts it contains. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  listEnabledControls(callback?: (err: AWSError, data: ControlTower.Types.ListEnabledControlsOutput) => void): Request<ControlTower.Types.ListEnabledControlsOutput, AWSError>;
  /**
   * Returns the landing zone ARN for the landing zone deployed in your managed account. This API also creates an ARN for existing accounts that do not yet have a landing zone ARN.  Returns one landing zone ARN.
   */
  listLandingZones(params: ControlTower.Types.ListLandingZonesInput, callback?: (err: AWSError, data: ControlTower.Types.ListLandingZonesOutput) => void): Request<ControlTower.Types.ListLandingZonesOutput, AWSError>;
  /**
   * Returns the landing zone ARN for the landing zone deployed in your managed account. This API also creates an ARN for existing accounts that do not yet have a landing zone ARN.  Returns one landing zone ARN.
   */
  listLandingZones(callback?: (err: AWSError, data: ControlTower.Types.ListLandingZonesOutput) => void): Request<ControlTower.Types.ListLandingZonesOutput, AWSError>;
  /**
   * Returns a list of tags associated with the resource. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  listTagsForResource(params: ControlTower.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: ControlTower.Types.ListTagsForResourceOutput) => void): Request<ControlTower.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Returns a list of tags associated with the resource. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  listTagsForResource(callback?: (err: AWSError, data: ControlTower.Types.ListTagsForResourceOutput) => void): Request<ControlTower.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Re-enables an EnabledBaseline resource. For example, this API can re-apply the existing Baseline after a new member account is moved to the target OU.
   */
  resetEnabledBaseline(params: ControlTower.Types.ResetEnabledBaselineInput, callback?: (err: AWSError, data: ControlTower.Types.ResetEnabledBaselineOutput) => void): Request<ControlTower.Types.ResetEnabledBaselineOutput, AWSError>;
  /**
   * Re-enables an EnabledBaseline resource. For example, this API can re-apply the existing Baseline after a new member account is moved to the target OU.
   */
  resetEnabledBaseline(callback?: (err: AWSError, data: ControlTower.Types.ResetEnabledBaselineOutput) => void): Request<ControlTower.Types.ResetEnabledBaselineOutput, AWSError>;
  /**
   * This API call resets a landing zone. It starts an asynchronous operation that resets the landing zone to the parameters specified in its original configuration.
   */
  resetLandingZone(params: ControlTower.Types.ResetLandingZoneInput, callback?: (err: AWSError, data: ControlTower.Types.ResetLandingZoneOutput) => void): Request<ControlTower.Types.ResetLandingZoneOutput, AWSError>;
  /**
   * This API call resets a landing zone. It starts an asynchronous operation that resets the landing zone to the parameters specified in its original configuration.
   */
  resetLandingZone(callback?: (err: AWSError, data: ControlTower.Types.ResetLandingZoneOutput) => void): Request<ControlTower.Types.ResetLandingZoneOutput, AWSError>;
  /**
   * Applies tags to a resource. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  tagResource(params: ControlTower.Types.TagResourceInput, callback?: (err: AWSError, data: ControlTower.Types.TagResourceOutput) => void): Request<ControlTower.Types.TagResourceOutput, AWSError>;
  /**
   * Applies tags to a resource. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  tagResource(callback?: (err: AWSError, data: ControlTower.Types.TagResourceOutput) => void): Request<ControlTower.Types.TagResourceOutput, AWSError>;
  /**
   * Removes tags from a resource. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  untagResource(params: ControlTower.Types.UntagResourceInput, callback?: (err: AWSError, data: ControlTower.Types.UntagResourceOutput) => void): Request<ControlTower.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes tags from a resource. For usage examples, see  the Amazon Web Services Control Tower User Guide .
   */
  untagResource(callback?: (err: AWSError, data: ControlTower.Types.UntagResourceOutput) => void): Request<ControlTower.Types.UntagResourceOutput, AWSError>;
  /**
   * Updates an EnabledBaseline resource's applied parameters or version.
   */
  updateEnabledBaseline(params: ControlTower.Types.UpdateEnabledBaselineInput, callback?: (err: AWSError, data: ControlTower.Types.UpdateEnabledBaselineOutput) => void): Request<ControlTower.Types.UpdateEnabledBaselineOutput, AWSError>;
  /**
   * Updates an EnabledBaseline resource's applied parameters or version.
   */
  updateEnabledBaseline(callback?: (err: AWSError, data: ControlTower.Types.UpdateEnabledBaselineOutput) => void): Request<ControlTower.Types.UpdateEnabledBaselineOutput, AWSError>;
  /**
   *  Updates the configuration of an already enabled control. If the enabled control shows an EnablementStatus of SUCCEEDED, supply parameters that are different from the currently configured parameters. Otherwise, Amazon Web Services Control Tower will not accept the request. If the enabled control shows an EnablementStatus of FAILED, Amazon Web Services Control Tower will update the control to match any valid parameters that you supply. If the DriftSummary status for the control shows as DRIFTED, you cannot call this API. Instead, you can update the control by calling DisableControl and again calling EnableControl, or you can run an extending governance operation. For usage examples, see  the Amazon Web Services Control Tower User Guide  
   */
  updateEnabledControl(params: ControlTower.Types.UpdateEnabledControlInput, callback?: (err: AWSError, data: ControlTower.Types.UpdateEnabledControlOutput) => void): Request<ControlTower.Types.UpdateEnabledControlOutput, AWSError>;
  /**
   *  Updates the configuration of an already enabled control. If the enabled control shows an EnablementStatus of SUCCEEDED, supply parameters that are different from the currently configured parameters. Otherwise, Amazon Web Services Control Tower will not accept the request. If the enabled control shows an EnablementStatus of FAILED, Amazon Web Services Control Tower will update the control to match any valid parameters that you supply. If the DriftSummary status for the control shows as DRIFTED, you cannot call this API. Instead, you can update the control by calling DisableControl and again calling EnableControl, or you can run an extending governance operation. For usage examples, see  the Amazon Web Services Control Tower User Guide  
   */
  updateEnabledControl(callback?: (err: AWSError, data: ControlTower.Types.UpdateEnabledControlOutput) => void): Request<ControlTower.Types.UpdateEnabledControlOutput, AWSError>;
  /**
   * This API call updates the landing zone. It starts an asynchronous operation that updates the landing zone based on the new landing zone version, or on the changed parameters specified in the updated manifest file. 
   */
  updateLandingZone(params: ControlTower.Types.UpdateLandingZoneInput, callback?: (err: AWSError, data: ControlTower.Types.UpdateLandingZoneOutput) => void): Request<ControlTower.Types.UpdateLandingZoneOutput, AWSError>;
  /**
   * This API call updates the landing zone. It starts an asynchronous operation that updates the landing zone based on the new landing zone version, or on the changed parameters specified in the updated manifest file. 
   */
  updateLandingZone(callback?: (err: AWSError, data: ControlTower.Types.UpdateLandingZoneOutput) => void): Request<ControlTower.Types.UpdateLandingZoneOutput, AWSError>;
}
declare namespace ControlTower {
  export type Arn = string;
  export type BaselineArn = string;
  export interface BaselineOperation {
    /**
     * The end time of the operation (if applicable), in ISO 8601 format.
     */
    endTime?: Timestamp;
    /**
     * The identifier of the specified operation.
     */
    operationIdentifier?: OperationIdentifier;
    /**
     * An enumerated type (enum) with possible values of ENABLE_BASELINE, DISABLE_BASELINE, UPDATE_ENABLED_BASELINE, or RESET_ENABLED_BASELINE.
     */
    operationType?: BaselineOperationType;
    /**
     * The start time of the operation, in ISO 8601 format.
     */
    startTime?: Timestamp;
    /**
     * An enumerated type (enum) with possible values of SUCCEEDED, FAILED, or IN_PROGRESS.
     */
    status?: BaselineOperationStatus;
    /**
     * A status message that gives more information about the operation's status, if applicable.
     */
    statusMessage?: String;
  }
  export type BaselineOperationStatus = "SUCCEEDED"|"FAILED"|"IN_PROGRESS"|string;
  export type BaselineOperationType = "ENABLE_BASELINE"|"DISABLE_BASELINE"|"UPDATE_ENABLED_BASELINE"|"RESET_ENABLED_BASELINE"|string;
  export interface BaselineSummary {
    /**
     * The full ARN of a Baseline.
     */
    arn: String;
    /**
     * A summary description of a Baseline.
     */
    description?: String;
    /**
     * The human-readable name of a Baseline.
     */
    name: String;
  }
  export type BaselineVersion = string;
  export type Baselines = BaselineSummary[];
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
  export type ControlOperationType = "ENABLE_CONTROL"|"DISABLE_CONTROL"|"UPDATE_ENABLED_CONTROL"|string;
  export interface CreateLandingZoneInput {
    /**
     * The manifest.yaml file is a text file that describes your Amazon Web Services resources. For examples, review The manifest file. 
     */
    manifest: Manifest;
    /**
     * Tags to be applied to the landing zone. 
     */
    tags?: TagMap;
    /**
     * The landing zone version, for example, 3.0.
     */
    version: LandingZoneVersion;
  }
  export interface CreateLandingZoneOutput {
    /**
     * The ARN of the landing zone resource.
     */
    arn: Arn;
    /**
     * A unique identifier assigned to a CreateLandingZone operation. You can use this identifier as an input of GetLandingZoneOperation to check the operation's status.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface DeleteLandingZoneInput {
    /**
     * The unique identifier of the landing zone.
     */
    landingZoneIdentifier: String;
  }
  export interface DeleteLandingZoneOutput {
    /**
     * &gt;A unique identifier assigned to a DeleteLandingZone operation. You can use this identifier as an input parameter of GetLandingZoneOperation to check the operation's status.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface DisableBaselineInput {
    /**
     * Identifier of the EnabledBaseline resource to be deactivated, in ARN format.
     */
    enabledBaselineIdentifier: Arn;
  }
  export interface DisableBaselineOutput {
    /**
     * The ID (in UUID format) of the asynchronous DisableBaseline operation. This operationIdentifier is used to track status through calls to the GetBaselineOperation API.
     */
    operationIdentifier: OperationIdentifier;
  }
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
  export interface Document {
  }
  export type DriftStatus = "DRIFTED"|"IN_SYNC"|"NOT_CHECKING"|"UNKNOWN"|string;
  export interface DriftStatusSummary {
    /**
     *  The drift status of the enabled control. Valid values:    DRIFTED: The enabledControl deployed in this configuration doesn’t match the configuration that Amazon Web Services Control Tower expected.     IN_SYNC: The enabledControl deployed in this configuration matches the configuration that Amazon Web Services Control Tower expected.    NOT_CHECKING: Amazon Web Services Control Tower does not check drift for this enabled control. Drift is not supported for the control type.    UNKNOWN: Amazon Web Services Control Tower is not able to check the drift status for the enabled control.   
     */
    driftStatus?: DriftStatus;
  }
  export interface EnableBaselineInput {
    /**
     * The ARN of the baseline to be enabled.
     */
    baselineIdentifier: Arn;
    /**
     * The specific version to be enabled of the specified baseline.
     */
    baselineVersion: BaselineVersion;
    /**
     * A list of key-value objects that specify enablement parameters, where key is a string and value is a document of any type.
     */
    parameters?: EnabledBaselineParameters;
    /**
     * Tags associated with input to EnableBaseline.
     */
    tags?: TagMap;
    /**
     * The ARN of the target on which the baseline will be enabled. Only OUs are supported as targets.
     */
    targetIdentifier: Arn;
  }
  export interface EnableBaselineOutput {
    /**
     * The ARN of the EnabledBaseline resource.
     */
    arn: Arn;
    /**
     * The ID (in UUID format) of the asynchronous EnableBaseline operation. This operationIdentifier is used to track status through calls to the GetBaselineOperation API.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface EnableControlInput {
    /**
     * The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny control. For information on how to find the controlIdentifier, see the overview page.
     */
    controlIdentifier: ControlIdentifier;
    /**
     * A list of input parameter values, which are specified to configure the control when you enable it.
     */
    parameters?: EnabledControlParameters;
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
  export type EnabledBaselineBaselineIdentifiers = Arn[];
  export interface EnabledBaselineDetails {
    /**
     * The ARN of the EnabledBaseline resource.
     */
    arn: Arn;
    /**
     * The specific Baseline enabled as part of the EnabledBaseline resource.
     */
    baselineIdentifier: String;
    /**
     * The enabled version of the Baseline.
     */
    baselineVersion?: String;
    /**
     * Shows the parameters that are applied when enabling this Baseline.
     */
    parameters?: EnabledBaselineParameterSummaries;
    statusSummary: EnablementStatusSummary;
    /**
     * The target on which to enable the Baseline.
     */
    targetIdentifier: String;
  }
  export interface EnabledBaselineFilter {
    /**
     * Identifiers for the Baseline objects returned as part of the filter operation.
     */
    baselineIdentifiers?: EnabledBaselineBaselineIdentifiers;
    /**
     * Identifiers for the targets of the Baseline filter operation.
     */
    targetIdentifiers?: EnabledBaselineTargetIdentifiers;
  }
  export interface EnabledBaselineParameter {
    /**
     * A string denoting the parameter key.
     */
    key: String;
    /**
     * A low-level Document object of any type (for example, a Java Object).
     */
    value: EnabledBaselineParameterDocument;
  }
  export interface EnabledBaselineParameterDocument {
  }
  export type EnabledBaselineParameterSummaries = EnabledBaselineParameterSummary[];
  export interface EnabledBaselineParameterSummary {
    /**
     * A string denoting the parameter key.
     */
    key: String;
    /**
     * A low-level document object of any type (for example, a Java Object).
     */
    value: EnabledBaselineParameterDocument;
  }
  export type EnabledBaselineParameters = EnabledBaselineParameter[];
  export interface EnabledBaselineSummary {
    /**
     * The ARN of the EnabledBaseline resource
     */
    arn: Arn;
    /**
     * The specific baseline that is enabled as part of the EnabledBaseline resource.
     */
    baselineIdentifier: String;
    /**
     * The enabled version of the baseline.
     */
    baselineVersion?: String;
    statusSummary: EnablementStatusSummary;
    /**
     * The target upon which the baseline is enabled.
     */
    targetIdentifier: String;
  }
  export type EnabledBaselineTargetIdentifiers = Arn[];
  export type EnabledBaselines = EnabledBaselineSummary[];
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
     * Array of EnabledControlParameter objects.
     */
    parameters?: EnabledControlParameterSummaries;
    /**
     * The deployment summary of the enabled control.
     */
    statusSummary?: EnablementStatusSummary;
    /**
     * The ARN of the organizational unit. For information on how to find the targetIdentifier, see the overview page.
     */
    targetIdentifier?: TargetIdentifier;
    /**
     * Target Amazon Web Services Regions for the enabled control.
     */
    targetRegions?: TargetRegions;
  }
  export interface EnabledControlParameter {
    /**
     * The key of a key/value pair.
     */
    key: String;
    /**
     * The value of a key/value pair.
     */
    value: Document;
  }
  export type EnabledControlParameterSummaries = EnabledControlParameterSummary[];
  export interface EnabledControlParameterSummary {
    /**
     * The key of a key/value pair.
     */
    key: String;
    /**
     * The value of a key/value pair.
     */
    value: Document;
  }
  export type EnabledControlParameters = EnabledControlParameter[];
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
     * The ARN of the organizational unit.
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
  export interface GetBaselineInput {
    /**
     * The ARN of the Baseline resource to be retrieved.
     */
    baselineIdentifier: BaselineArn;
  }
  export interface GetBaselineOperationInput {
    /**
     * The operation ID returned from mutating asynchronous APIs (Enable, Disable, Update, Reset).
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface GetBaselineOperationOutput {
    /**
     * A baselineOperation object that shows information about the specified operation ID.
     */
    baselineOperation: BaselineOperation;
  }
  export interface GetBaselineOutput {
    /**
     * The baseline ARN.
     */
    arn: BaselineArn;
    /**
     * A description of the baseline.
     */
    description?: String;
    /**
     * A user-friendly name for the baseline.
     */
    name: String;
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
  export interface GetEnabledBaselineInput {
    /**
     * Identifier of the EnabledBaseline resource to be retrieved, in ARN format.
     */
    enabledBaselineIdentifier: Arn;
  }
  export interface GetEnabledBaselineOutput {
    /**
     * Details of the EnabledBaseline resource.
     */
    enabledBaselineDetails?: EnabledBaselineDetails;
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
  export interface GetLandingZoneInput {
    /**
     * The unique identifier of the landing zone.
     */
    landingZoneIdentifier: String;
  }
  export interface GetLandingZoneOperationInput {
    /**
     * A unique identifier assigned to a landing zone operation.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface GetLandingZoneOperationOutput {
    /**
     * Details about a landing zone operation.
     */
    operationDetails: LandingZoneOperationDetail;
  }
  export interface GetLandingZoneOutput {
    /**
     * Information about the landing zone.
     */
    landingZone: LandingZoneDetail;
  }
  export interface LandingZoneDetail {
    /**
     * The ARN of the landing zone.
     */
    arn?: Arn;
    /**
     * The drift status of the landing zone.
     */
    driftStatus?: LandingZoneDriftStatusSummary;
    /**
     * The latest available version of the landing zone.
     */
    latestAvailableVersion?: LandingZoneVersion;
    /**
     * The landing zone manifest.yaml text file that specifies the landing zone configurations. 
     */
    manifest: Manifest;
    /**
     * The landing zone deployment status. One of ACTIVE, PROCESSING, FAILED.
     */
    status?: LandingZoneStatus;
    /**
     * The landing zone's current deployed version.
     */
    version: LandingZoneVersion;
  }
  export type LandingZoneDriftStatus = "DRIFTED"|"IN_SYNC"|string;
  export interface LandingZoneDriftStatusSummary {
    /**
     * The drift status of the landing zone.  Valid values:    DRIFTED: The landing zone deployed in this configuration does not match the configuration that Amazon Web Services Control Tower expected.     IN_SYNC: The landing zone deployed in this configuration matches the configuration that Amazon Web Services Control Tower expected.   
     */
    status?: LandingZoneDriftStatus;
  }
  export interface LandingZoneOperationDetail {
    /**
     * The landing zone operation end time.
     */
    endTime?: Timestamp;
    /**
     * The landing zone operation type.  Valid values:    DELETE: The DeleteLandingZone operation.     CREATE: The CreateLandingZone operation.     UPDATE: The UpdateLandingZone operation.     RESET: The ResetLandingZone operation.   
     */
    operationType?: LandingZoneOperationType;
    /**
     * The landing zone operation start time.
     */
    startTime?: Timestamp;
    /**
     * Valid values:    SUCCEEDED: The landing zone operation succeeded.     IN_PROGRESS: The landing zone operation is in progress.     FAILED: The landing zone operation failed.   
     */
    status?: LandingZoneOperationStatus;
    /**
     * If the operation result is FAILED, this string contains a message explaining why the operation failed.
     */
    statusMessage?: String;
  }
  export type LandingZoneOperationStatus = "SUCCEEDED"|"FAILED"|"IN_PROGRESS"|string;
  export type LandingZoneOperationType = "DELETE"|"CREATE"|"UPDATE"|"RESET"|string;
  export type LandingZoneStatus = "ACTIVE"|"PROCESSING"|"FAILED"|string;
  export interface LandingZoneSummary {
    /**
     * The ARN of the landing zone.
     */
    arn?: Arn;
  }
  export type LandingZoneVersion = string;
  export interface ListBaselinesInput {
    /**
     * The maximum number of results to be shown.
     */
    maxResults?: ListBaselinesMaxResults;
    /**
     * A pagination token.
     */
    nextToken?: String;
  }
  export type ListBaselinesMaxResults = number;
  export interface ListBaselinesOutput {
    /**
     * A list of Baseline object details.
     */
    baselines: Baselines;
    /**
     * A pagination token.
     */
    nextToken?: String;
  }
  export interface ListEnabledBaselinesInput {
    /**
     * A filter applied on the ListEnabledBaseline operation. Allowed filters are baselineIdentifiers and targetIdentifiers. The filter can be applied for either, or both.
     */
    filter?: EnabledBaselineFilter;
    /**
     * The maximum number of results to be shown.
     */
    maxResults?: ListEnabledBaselinesMaxResults;
    /**
     * A pagination token.
     */
    nextToken?: ListEnabledBaselinesNextToken;
  }
  export type ListEnabledBaselinesMaxResults = number;
  export type ListEnabledBaselinesNextToken = string;
  export interface ListEnabledBaselinesOutput {
    /**
     * Retuens a list of summaries of EnabledBaseline resources.
     */
    enabledBaselines: EnabledBaselines;
    /**
     * A pagination token.
     */
    nextToken?: ListEnabledBaselinesNextToken;
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
     * Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and the accounts it contains.
     */
    enabledControls: EnabledControls;
    /**
     * Retrieves the next page of results. If the string is empty, the response is the end of the results.
     */
    nextToken?: String;
  }
  export interface ListLandingZonesInput {
    /**
     * The maximum number of returned landing zone ARNs, which is one.
     */
    maxResults?: ListLandingZonesMaxResults;
    /**
     * The token to continue the list from a previous API call with the same parameters.
     */
    nextToken?: String;
  }
  export type ListLandingZonesMaxResults = number;
  export interface ListLandingZonesOutput {
    /**
     * The ARN of the landing zone.
     */
    landingZones: ListLandingZonesOutputLandingZonesList;
    /**
     * Retrieves the next page of results. If the string is empty, the response is the end of the results.
     */
    nextToken?: String;
  }
  export type ListLandingZonesOutputLandingZonesList = LandingZoneSummary[];
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
  export interface Manifest {
  }
  export type MaxResults = number;
  export type OperationIdentifier = string;
  export interface Region {
    /**
     * The Amazon Web Services Region name.
     */
    name?: RegionName;
  }
  export type RegionName = string;
  export interface ResetEnabledBaselineInput {
    /**
     * Specifies the ID of the EnabledBaseline resource to be re-enabled, in ARN format.
     */
    enabledBaselineIdentifier: Arn;
  }
  export interface ResetEnabledBaselineOutput {
    /**
     * The ID (in UUID format) of the asynchronous ResetEnabledBaseline operation. This operationIdentifier is used to track status through calls to the GetBaselineOperation API.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface ResetLandingZoneInput {
    /**
     * The unique identifier of the landing zone.
     */
    landingZoneIdentifier: String;
  }
  export interface ResetLandingZoneOutput {
    /**
     * A unique identifier assigned to a ResetLandingZone operation. You can use this identifier as an input parameter of GetLandingZoneOperation to check the operation's status.
     */
    operationIdentifier: OperationIdentifier;
  }
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
  export type Timestamp = Date;
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
  export interface UpdateEnabledBaselineInput {
    /**
     * Specifies the new Baseline version, to which the EnabledBaseline should be updated.
     */
    baselineVersion: BaselineVersion;
    /**
     * Specifies the EnabledBaseline resource to be updated.
     */
    enabledBaselineIdentifier: Arn;
    /**
     * Parameters to apply when making an update.
     */
    parameters?: EnabledBaselineParameters;
  }
  export interface UpdateEnabledBaselineOutput {
    /**
     * The ID (in UUID format) of the asynchronous UpdateEnabledBaseline operation. This operationIdentifier is used to track status through calls to the GetBaselineOperation API.
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface UpdateEnabledControlInput {
    /**
     *  The ARN of the enabled control that will be updated. 
     */
    enabledControlIdentifier: Arn;
    /**
     * A key/value pair, where Key is of type String and Value is of type Document.
     */
    parameters: EnabledControlParameters;
  }
  export interface UpdateEnabledControlOutput {
    /**
     *  The operation identifier for this UpdateEnabledControl operation. 
     */
    operationIdentifier: OperationIdentifier;
  }
  export interface UpdateLandingZoneInput {
    /**
     * The unique identifier of the landing zone.
     */
    landingZoneIdentifier: String;
    /**
     * The manifest.yaml file is a text file that describes your Amazon Web Services resources. For examples, review The manifest file.
     */
    manifest: Manifest;
    /**
     * The landing zone version, for example, 3.2.
     */
    version: LandingZoneVersion;
  }
  export interface UpdateLandingZoneOutput {
    /**
     * A unique identifier assigned to a UpdateLandingZone operation. You can use this identifier as an input of GetLandingZoneOperation to check the operation's status.
     */
    operationIdentifier: OperationIdentifier;
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
