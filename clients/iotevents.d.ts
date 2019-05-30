import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class IoTEvents extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IoTEvents.Types.ClientConfiguration)
  config: Config & IoTEvents.Types.ClientConfiguration;
  /**
   * Creates a detector model.
   */
  createDetectorModel(params: IoTEvents.Types.CreateDetectorModelRequest, callback?: (err: AWSError, data: IoTEvents.Types.CreateDetectorModelResponse) => void): Request<IoTEvents.Types.CreateDetectorModelResponse, AWSError>;
  /**
   * Creates a detector model.
   */
  createDetectorModel(callback?: (err: AWSError, data: IoTEvents.Types.CreateDetectorModelResponse) => void): Request<IoTEvents.Types.CreateDetectorModelResponse, AWSError>;
  /**
   * Creates an input.
   */
  createInput(params: IoTEvents.Types.CreateInputRequest, callback?: (err: AWSError, data: IoTEvents.Types.CreateInputResponse) => void): Request<IoTEvents.Types.CreateInputResponse, AWSError>;
  /**
   * Creates an input.
   */
  createInput(callback?: (err: AWSError, data: IoTEvents.Types.CreateInputResponse) => void): Request<IoTEvents.Types.CreateInputResponse, AWSError>;
  /**
   * Deletes a detector model. Any active instances of the detector model are also deleted.
   */
  deleteDetectorModel(params: IoTEvents.Types.DeleteDetectorModelRequest, callback?: (err: AWSError, data: IoTEvents.Types.DeleteDetectorModelResponse) => void): Request<IoTEvents.Types.DeleteDetectorModelResponse, AWSError>;
  /**
   * Deletes a detector model. Any active instances of the detector model are also deleted.
   */
  deleteDetectorModel(callback?: (err: AWSError, data: IoTEvents.Types.DeleteDetectorModelResponse) => void): Request<IoTEvents.Types.DeleteDetectorModelResponse, AWSError>;
  /**
   * Deletes an input.
   */
  deleteInput(params: IoTEvents.Types.DeleteInputRequest, callback?: (err: AWSError, data: IoTEvents.Types.DeleteInputResponse) => void): Request<IoTEvents.Types.DeleteInputResponse, AWSError>;
  /**
   * Deletes an input.
   */
  deleteInput(callback?: (err: AWSError, data: IoTEvents.Types.DeleteInputResponse) => void): Request<IoTEvents.Types.DeleteInputResponse, AWSError>;
  /**
   * Describes a detector model. If the version parameter is not specified, information about the latest version is returned.
   */
  describeDetectorModel(params: IoTEvents.Types.DescribeDetectorModelRequest, callback?: (err: AWSError, data: IoTEvents.Types.DescribeDetectorModelResponse) => void): Request<IoTEvents.Types.DescribeDetectorModelResponse, AWSError>;
  /**
   * Describes a detector model. If the version parameter is not specified, information about the latest version is returned.
   */
  describeDetectorModel(callback?: (err: AWSError, data: IoTEvents.Types.DescribeDetectorModelResponse) => void): Request<IoTEvents.Types.DescribeDetectorModelResponse, AWSError>;
  /**
   * Describes an input.
   */
  describeInput(params: IoTEvents.Types.DescribeInputRequest, callback?: (err: AWSError, data: IoTEvents.Types.DescribeInputResponse) => void): Request<IoTEvents.Types.DescribeInputResponse, AWSError>;
  /**
   * Describes an input.
   */
  describeInput(callback?: (err: AWSError, data: IoTEvents.Types.DescribeInputResponse) => void): Request<IoTEvents.Types.DescribeInputResponse, AWSError>;
  /**
   * Retrieves the current settings of the AWS IoT Events logging options.
   */
  describeLoggingOptions(params: IoTEvents.Types.DescribeLoggingOptionsRequest, callback?: (err: AWSError, data: IoTEvents.Types.DescribeLoggingOptionsResponse) => void): Request<IoTEvents.Types.DescribeLoggingOptionsResponse, AWSError>;
  /**
   * Retrieves the current settings of the AWS IoT Events logging options.
   */
  describeLoggingOptions(callback?: (err: AWSError, data: IoTEvents.Types.DescribeLoggingOptionsResponse) => void): Request<IoTEvents.Types.DescribeLoggingOptionsResponse, AWSError>;
  /**
   * Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
   */
  listDetectorModelVersions(params: IoTEvents.Types.ListDetectorModelVersionsRequest, callback?: (err: AWSError, data: IoTEvents.Types.ListDetectorModelVersionsResponse) => void): Request<IoTEvents.Types.ListDetectorModelVersionsResponse, AWSError>;
  /**
   * Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
   */
  listDetectorModelVersions(callback?: (err: AWSError, data: IoTEvents.Types.ListDetectorModelVersionsResponse) => void): Request<IoTEvents.Types.ListDetectorModelVersionsResponse, AWSError>;
  /**
   * Lists the detector models you have created. Only the metadata associated with each detector model is returned.
   */
  listDetectorModels(params: IoTEvents.Types.ListDetectorModelsRequest, callback?: (err: AWSError, data: IoTEvents.Types.ListDetectorModelsResponse) => void): Request<IoTEvents.Types.ListDetectorModelsResponse, AWSError>;
  /**
   * Lists the detector models you have created. Only the metadata associated with each detector model is returned.
   */
  listDetectorModels(callback?: (err: AWSError, data: IoTEvents.Types.ListDetectorModelsResponse) => void): Request<IoTEvents.Types.ListDetectorModelsResponse, AWSError>;
  /**
   * Lists the inputs you have created.
   */
  listInputs(params: IoTEvents.Types.ListInputsRequest, callback?: (err: AWSError, data: IoTEvents.Types.ListInputsResponse) => void): Request<IoTEvents.Types.ListInputsResponse, AWSError>;
  /**
   * Lists the inputs you have created.
   */
  listInputs(callback?: (err: AWSError, data: IoTEvents.Types.ListInputsResponse) => void): Request<IoTEvents.Types.ListInputsResponse, AWSError>;
  /**
   * Lists the tags (metadata) you have assigned to the resource.
   */
  listTagsForResource(params: IoTEvents.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IoTEvents.Types.ListTagsForResourceResponse) => void): Request<IoTEvents.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags (metadata) you have assigned to the resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: IoTEvents.Types.ListTagsForResourceResponse) => void): Request<IoTEvents.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Sets or updates the AWS IoT Events logging options. Note that if you update the value of any loggingOptions field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to five minutes for that change to take effect.
   */
  putLoggingOptions(params: IoTEvents.Types.PutLoggingOptionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets or updates the AWS IoT Events logging options. Note that if you update the value of any loggingOptions field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to five minutes for that change to take effect.
   */
  putLoggingOptions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Add to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   */
  tagResource(params: IoTEvents.Types.TagResourceRequest, callback?: (err: AWSError, data: IoTEvents.Types.TagResourceResponse) => void): Request<IoTEvents.Types.TagResourceResponse, AWSError>;
  /**
   * Add to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   */
  tagResource(callback?: (err: AWSError, data: IoTEvents.Types.TagResourceResponse) => void): Request<IoTEvents.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the given tags (metadata) from the resource.
   */
  untagResource(params: IoTEvents.Types.UntagResourceRequest, callback?: (err: AWSError, data: IoTEvents.Types.UntagResourceResponse) => void): Request<IoTEvents.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the given tags (metadata) from the resource.
   */
  untagResource(callback?: (err: AWSError, data: IoTEvents.Types.UntagResourceResponse) => void): Request<IoTEvents.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a detector model. Detectors (instances) spawned by the previous version will be deleted and re-created as new inputs arrive.
   */
  updateDetectorModel(params: IoTEvents.Types.UpdateDetectorModelRequest, callback?: (err: AWSError, data: IoTEvents.Types.UpdateDetectorModelResponse) => void): Request<IoTEvents.Types.UpdateDetectorModelResponse, AWSError>;
  /**
   * Updates a detector model. Detectors (instances) spawned by the previous version will be deleted and re-created as new inputs arrive.
   */
  updateDetectorModel(callback?: (err: AWSError, data: IoTEvents.Types.UpdateDetectorModelResponse) => void): Request<IoTEvents.Types.UpdateDetectorModelResponse, AWSError>;
  /**
   * Updates an input.
   */
  updateInput(params: IoTEvents.Types.UpdateInputRequest, callback?: (err: AWSError, data: IoTEvents.Types.UpdateInputResponse) => void): Request<IoTEvents.Types.UpdateInputResponse, AWSError>;
  /**
   * Updates an input.
   */
  updateInput(callback?: (err: AWSError, data: IoTEvents.Types.UpdateInputResponse) => void): Request<IoTEvents.Types.UpdateInputResponse, AWSError>;
}
declare namespace IoTEvents {
  export interface Action {
    /**
     * Sets a variable to a specified value.
     */
    setVariable?: SetVariableAction;
    /**
     * Sends an Amazon SNS message.
     */
    sns?: SNSTopicPublishAction;
    /**
     * Publishes an MQTT message with the given topic to the AWS IoT Message Broker.
     */
    iotTopicPublish?: IotTopicPublishAction;
    /**
     * Information needed to set the timer.
     */
    setTimer?: SetTimerAction;
    /**
     * Information needed to clear the timer.
     */
    clearTimer?: ClearTimerAction;
    /**
     * Information needed to reset the timer.
     */
    resetTimer?: ResetTimerAction;
  }
  export type Actions = Action[];
  export type AmazonResourceName = string;
  export interface Attribute {
    /**
     * An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to the AWS IoT Events system (BatchPutMessage). Each such message contains a JSON payload, and the attribute (and its paired value) specified here are available for use in the condition expressions used by detectors.  Syntax: &lt;field-name&gt;.&lt;field-name&gt;... 
     */
    jsonPath: AttributeJsonPath;
  }
  export type AttributeJsonPath = string;
  export type Attributes = Attribute[];
  export interface ClearTimerAction {
    /**
     * The name of the timer to clear.
     */
    timerName: TimerName;
  }
  export type Condition = string;
  export interface CreateDetectorModelRequest {
    /**
     * The name of the detector model.
     */
    detectorModelName: DetectorModelName;
    /**
     * Information that defines how the detectors operate.
     */
    detectorModelDefinition: DetectorModelDefinition;
    /**
     * A brief description of the detector model.
     */
    detectorModelDescription?: DetectorModelDescription;
    /**
     * The input attribute key used to identify a device or system in order to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression to specify the attribute-value pair in the message payload of each input that is used to identify the device associated with the input.
     */
    key?: AttributeJsonPath;
    /**
     * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
     */
    roleArn: AmazonResourceName;
    /**
     * Metadata which can be used to manage the detector model.
     */
    tags?: Tags;
  }
  export interface CreateDetectorModelResponse {
    /**
     * Information about how the detector model is configured.
     */
    detectorModelConfiguration?: DetectorModelConfiguration;
  }
  export interface CreateInputRequest {
    /**
     * The name you want to give to the input.
     */
    inputName: InputName;
    /**
     * A brief description of the input.
     */
    inputDescription?: InputDescription;
    /**
     * The definition of the input.
     */
    inputDefinition: InputDefinition;
    /**
     * Metadata which can be used to manage the input.
     */
    tags?: Tags;
  }
  export interface CreateInputResponse {
    /**
     * Information about the configuration of the input.
     */
    inputConfiguration?: InputConfiguration;
  }
  export interface DeleteDetectorModelRequest {
    /**
     * The name of the detector model to be deleted.
     */
    detectorModelName: DetectorModelName;
  }
  export interface DeleteDetectorModelResponse {
  }
  export interface DeleteInputRequest {
    /**
     * The name of the input to be deleted.
     */
    inputName: InputName;
  }
  export interface DeleteInputResponse {
  }
  export interface DescribeDetectorModelRequest {
    /**
     * The name of the detector model.
     */
    detectorModelName: DetectorModelName;
    /**
     * The version of the detector model.
     */
    detectorModelVersion?: DetectorModelVersion;
  }
  export interface DescribeDetectorModelResponse {
    /**
     * Information about the detector model.
     */
    detectorModel?: DetectorModel;
  }
  export interface DescribeInputRequest {
    /**
     * The name of the input.
     */
    inputName: InputName;
  }
  export interface DescribeInputResponse {
    /**
     * Information about the input.
     */
    input?: Input;
  }
  export interface DescribeLoggingOptionsRequest {
  }
  export interface DescribeLoggingOptionsResponse {
    /**
     * The current settings of the AWS IoT Events logging options.
     */
    loggingOptions?: LoggingOptions;
  }
  export interface DetectorDebugOption {
    /**
     * The name of the detector model.
     */
    detectorModelName: DetectorModelName;
    /**
     * The value of the input attribute key used to create the detector (the instance of the detector model).
     */
    keyValue?: KeyValue;
  }
  export type DetectorDebugOptions = DetectorDebugOption[];
  export interface DetectorModel {
    /**
     * Information that defines how a detector operates.
     */
    detectorModelDefinition?: DetectorModelDefinition;
    /**
     * Information about how the detector is configured.
     */
    detectorModelConfiguration?: DetectorModelConfiguration;
  }
  export type DetectorModelArn = string;
  export interface DetectorModelConfiguration {
    /**
     * The name of the detector model.
     */
    detectorModelName?: DetectorModelName;
    /**
     * The version of the detector model.
     */
    detectorModelVersion?: DetectorModelVersion;
    /**
     * A brief description of the detector model.
     */
    detectorModelDescription?: DetectorModelDescription;
    /**
     * The ARN of the detector model.
     */
    detectorModelArn?: DetectorModelArn;
    /**
     * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
     */
    roleArn?: AmazonResourceName;
    /**
     * The time the detector model was created.
     */
    creationTime?: Timestamp;
    /**
     * The time the detector model was last updated.
     */
    lastUpdateTime?: Timestamp;
    /**
     * The status of the detector model.
     */
    status?: DetectorModelVersionStatus;
    /**
     * The input attribute key used to identify a device or system in order to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression to specify the attribute-value pair in the message payload of each input that is used to identify the device associated with the input.
     */
    key?: AttributeJsonPath;
  }
  export interface DetectorModelDefinition {
    /**
     * Information about the states of the detector.
     */
    states: States;
    /**
     * The state that is entered at the creation of each detector (instance).
     */
    initialStateName: StateName;
  }
  export type DetectorModelDescription = string;
  export type DetectorModelName = string;
  export type DetectorModelSummaries = DetectorModelSummary[];
  export interface DetectorModelSummary {
    /**
     * The name of the detector model.
     */
    detectorModelName?: DetectorModelName;
    /**
     * A brief description of the detector model.
     */
    detectorModelDescription?: DetectorModelDescription;
    /**
     * The time the detector model was created.
     */
    creationTime?: Timestamp;
  }
  export type DetectorModelVersion = string;
  export type DetectorModelVersionStatus = "ACTIVE"|"ACTIVATING"|"INACTIVE"|"DEPRECATED"|"DRAFT"|"PAUSED"|"FAILED"|string;
  export type DetectorModelVersionSummaries = DetectorModelVersionSummary[];
  export interface DetectorModelVersionSummary {
    /**
     * The name of the detector model.
     */
    detectorModelName?: DetectorModelName;
    /**
     * The ID of the detector model version.
     */
    detectorModelVersion?: DetectorModelVersion;
    /**
     * The ARN of the detector model version.
     */
    detectorModelArn?: DetectorModelArn;
    /**
     * The ARN of the role that grants the detector model permission to perform its tasks.
     */
    roleArn?: AmazonResourceName;
    /**
     * The time the detector model version was created.
     */
    creationTime?: Timestamp;
    /**
     * The last time the detector model version was updated.
     */
    lastUpdateTime?: Timestamp;
    /**
     * The status of the detector model version.
     */
    status?: DetectorModelVersionStatus;
  }
  export interface Event {
    /**
     * The name of the event.
     */
    eventName: EventName;
    /**
     * [Optional] The Boolean expression that when TRUE causes the actions to be performed. If not present, the actions are performed (=TRUE); if the expression result is not a Boolean value the actions are NOT performed (=FALSE).
     */
    condition?: Condition;
    /**
     * The actions to be performed.
     */
    actions?: Actions;
  }
  export type EventName = string;
  export type Events = Event[];
  export interface Input {
    /**
     * Information about the configuration of an input.
     */
    inputConfiguration?: InputConfiguration;
    /**
     * The definition of the input.
     */
    inputDefinition?: InputDefinition;
  }
  export type InputArn = string;
  export interface InputConfiguration {
    /**
     * The name of the input.
     */
    inputName: InputName;
    /**
     * A brief description of the input.
     */
    inputDescription?: InputDescription;
    /**
     * The ARN of the input.
     */
    inputArn: InputArn;
    /**
     * The time the input was created.
     */
    creationTime: Timestamp;
    /**
     * The last time the input was updated.
     */
    lastUpdateTime: Timestamp;
    /**
     * The status of the input.
     */
    status: InputStatus;
  }
  export interface InputDefinition {
    /**
     * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using BatchPutMessage. Each such message contains a JSON payload, and those attributes (and their paired values) specified here is available for use in the condition expressions used by detectors that monitor this input. 
     */
    attributes: Attributes;
  }
  export type InputDescription = string;
  export type InputName = string;
  export type InputStatus = "CREATING"|"UPDATING"|"ACTIVE"|"DELETING"|string;
  export type InputSummaries = InputSummary[];
  export interface InputSummary {
    /**
     * The name of the input.
     */
    inputName?: InputName;
    /**
     * A brief description of the input.
     */
    inputDescription?: InputDescription;
    /**
     * The ARN of the input.
     */
    inputArn?: InputArn;
    /**
     * The time the input was created.
     */
    creationTime?: Timestamp;
    /**
     * The last time the input was updated.
     */
    lastUpdateTime?: Timestamp;
    /**
     * The status of the input.
     */
    status?: InputStatus;
  }
  export interface IotTopicPublishAction {
    /**
     * The MQTT topic of the message.
     */
    mqttTopic: MQTTTopic;
  }
  export type KeyValue = string;
  export interface ListDetectorModelVersionsRequest {
    /**
     * The name of the detector model whose versions are returned.
     */
    detectorModelName: DetectorModelName;
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: MaxResults;
  }
  export interface ListDetectorModelVersionsResponse {
    /**
     * Summary information about the detector model versions.
     */
    detectorModelVersionSummaries?: DetectorModelVersionSummaries;
    /**
     * A token to retrieve the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListDetectorModelsRequest {
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: MaxResults;
  }
  export interface ListDetectorModelsResponse {
    /**
     * Summary information about the detector models.
     */
    detectorModelSummaries?: DetectorModelSummaries;
    /**
     * A token to retrieve the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListInputsRequest {
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: MaxResults;
  }
  export interface ListInputsResponse {
    /**
     * Summary information about the inputs.
     */
    inputSummaries?: InputSummaries;
    /**
     * A token to retrieve the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of tags assigned to the resource.
     */
    tags?: Tags;
  }
  export type LoggingEnabled = boolean;
  export type LoggingLevel = "ERROR"|"INFO"|"DEBUG"|string;
  export interface LoggingOptions {
    /**
     * The ARN of the role that grants permission to AWS IoT Events to perform logging.
     */
    roleArn: AmazonResourceName;
    /**
     * The logging level. Currently, only "ERROR" is supported.
     */
    level: LoggingLevel;
    /**
     * If TRUE, logging is enabled for AWS IoT Events.
     */
    enabled: LoggingEnabled;
    /**
     * Information that identifies those detector models and their detectors (instances) for which the logging level is given.
     */
    detectorDebugOptions?: DetectorDebugOptions;
  }
  export type MQTTTopic = string;
  export type MaxResults = number;
  export type NextToken = string;
  export interface OnEnterLifecycle {
    /**
     * Specifies the actions that are performed when the state is entered and the condition is TRUE.
     */
    events?: Events;
  }
  export interface OnExitLifecycle {
    /**
     * Specifies the actions that are performed when the state is exited and the condition is TRUE.
     */
    events?: Events;
  }
  export interface OnInputLifecycle {
    /**
     * Specifies the actions performed when the condition evaluates to TRUE.
     */
    events?: Events;
    /**
     * Specifies the actions performed and the next state entered when a condition evaluates to TRUE.
     */
    transitionEvents?: TransitionEvents;
  }
  export interface PutLoggingOptionsRequest {
    /**
     * The new values of the AWS IoT Events logging options.
     */
    loggingOptions: LoggingOptions;
  }
  export interface ResetTimerAction {
    /**
     * The name of the timer to reset.
     */
    timerName: TimerName;
  }
  export interface SNSTopicPublishAction {
    /**
     * The ARN of the Amazon SNS target to which the message is sent.
     */
    targetArn: AmazonResourceName;
  }
  export type Seconds = number;
  export interface SetTimerAction {
    /**
     * The name of the timer.
     */
    timerName: TimerName;
    /**
     * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy.
     */
    seconds: Seconds;
  }
  export interface SetVariableAction {
    /**
     * The name of the variable.
     */
    variableName: VariableName;
    /**
     * The new value of the variable.
     */
    value: VariableValue;
  }
  export interface State {
    /**
     * The name of the state.
     */
    stateName: StateName;
    /**
     * When an input is received and the condition is TRUE, perform the specified actions.
     */
    onInput?: OnInputLifecycle;
    /**
     * When entering this state, perform these actions if the condition is TRUE.
     */
    onEnter?: OnEnterLifecycle;
    /**
     * When exiting this state, perform these actions if the specified condition is TRUE.
     */
    onExit?: OnExitLifecycle;
  }
  export type StateName = string;
  export type States = State[];
  export interface Tag {
    /**
     * The tag's key.
     */
    key: TagKey;
    /**
     * The tag's value.
     */
    value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: AmazonResourceName;
    /**
     * The new or modified tags for the resource.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = Tag[];
  export type TimerName = string;
  export type Timestamp = Date;
  export interface TransitionEvent {
    /**
     * The name of the transition event.
     */
    eventName: EventName;
    /**
     * [Required] A Boolean expression that when TRUE causes the actions to be performed and the nextState to be entered.
     */
    condition: Condition;
    /**
     * The actions to be performed.
     */
    actions?: Actions;
    /**
     * The next state to enter.
     */
    nextState: StateName;
  }
  export type TransitionEvents = TransitionEvent[];
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: AmazonResourceName;
    /**
     * A list of the keys of the tags to be removed from the resource.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateDetectorModelRequest {
    /**
     * The name of the detector model to be updated.
     */
    detectorModelName: DetectorModelName;
    /**
     * Information that defines how a detector operates.
     */
    detectorModelDefinition: DetectorModelDefinition;
    /**
     * A brief description of the detector model.
     */
    detectorModelDescription?: DetectorModelDescription;
    /**
     * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
     */
    roleArn: AmazonResourceName;
  }
  export interface UpdateDetectorModelResponse {
    /**
     * Information about how the detector model is configured.
     */
    detectorModelConfiguration?: DetectorModelConfiguration;
  }
  export interface UpdateInputRequest {
    /**
     * The name of the input you want to update.
     */
    inputName: InputName;
    /**
     * A brief description of the input.
     */
    inputDescription?: InputDescription;
    /**
     * The definition of the input.
     */
    inputDefinition: InputDefinition;
  }
  export interface UpdateInputResponse {
    /**
     * Information about the configuration of the input.
     */
    inputConfiguration?: InputConfiguration;
  }
  export type VariableName = string;
  export type VariableValue = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-07-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IoTEvents client.
   */
  export import Types = IoTEvents;
}
export = IoTEvents;
