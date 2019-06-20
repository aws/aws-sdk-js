import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class IoTEventsData extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IoTEventsData.Types.ClientConfiguration)
  config: Config & IoTEventsData.Types.ClientConfiguration;
  /**
   * Sends a set of messages to the AWS IoT Events system. Each message payload is transformed into the input you specify ("inputName") and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
   */
  batchPutMessage(params: IoTEventsData.Types.BatchPutMessageRequest, callback?: (err: AWSError, data: IoTEventsData.Types.BatchPutMessageResponse) => void): Request<IoTEventsData.Types.BatchPutMessageResponse, AWSError>;
  /**
   * Sends a set of messages to the AWS IoT Events system. Each message payload is transformed into the input you specify ("inputName") and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
   */
  batchPutMessage(callback?: (err: AWSError, data: IoTEventsData.Types.BatchPutMessageResponse) => void): Request<IoTEventsData.Types.BatchPutMessageResponse, AWSError>;
  /**
   * Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
   */
  batchUpdateDetector(params: IoTEventsData.Types.BatchUpdateDetectorRequest, callback?: (err: AWSError, data: IoTEventsData.Types.BatchUpdateDetectorResponse) => void): Request<IoTEventsData.Types.BatchUpdateDetectorResponse, AWSError>;
  /**
   * Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
   */
  batchUpdateDetector(callback?: (err: AWSError, data: IoTEventsData.Types.BatchUpdateDetectorResponse) => void): Request<IoTEventsData.Types.BatchUpdateDetectorResponse, AWSError>;
  /**
   * Returns information about the specified detector (instance).
   */
  describeDetector(params: IoTEventsData.Types.DescribeDetectorRequest, callback?: (err: AWSError, data: IoTEventsData.Types.DescribeDetectorResponse) => void): Request<IoTEventsData.Types.DescribeDetectorResponse, AWSError>;
  /**
   * Returns information about the specified detector (instance).
   */
  describeDetector(callback?: (err: AWSError, data: IoTEventsData.Types.DescribeDetectorResponse) => void): Request<IoTEventsData.Types.DescribeDetectorResponse, AWSError>;
  /**
   * Lists detectors (the instances of a detector model).
   */
  listDetectors(params: IoTEventsData.Types.ListDetectorsRequest, callback?: (err: AWSError, data: IoTEventsData.Types.ListDetectorsResponse) => void): Request<IoTEventsData.Types.ListDetectorsResponse, AWSError>;
  /**
   * Lists detectors (the instances of a detector model).
   */
  listDetectors(callback?: (err: AWSError, data: IoTEventsData.Types.ListDetectorsResponse) => void): Request<IoTEventsData.Types.ListDetectorsResponse, AWSError>;
}
declare namespace IoTEventsData {
  export type BatchPutMessageErrorEntries = BatchPutMessageErrorEntry[];
  export interface BatchPutMessageErrorEntry {
    /**
     * The ID of the message that caused the error. (See the value corresponding to the "messageId" key in the "message" object.)
     */
    messageId?: MessageId;
    /**
     * The code associated with the error.
     */
    errorCode?: ErrorCode;
    /**
     * More information about the error.
     */
    errorMessage?: ErrorMessage;
  }
  export interface BatchPutMessageRequest {
    /**
     * The list of messages to send. Each message has the following format: '{ "messageId": "string", "inputName": "string", "payload": "string"}' 
     */
    messages: Messages;
  }
  export interface BatchPutMessageResponse {
    /**
     * A list of any errors encountered when sending the messages.
     */
    BatchPutMessageErrorEntries?: BatchPutMessageErrorEntries;
  }
  export type BatchUpdateDetectorErrorEntries = BatchUpdateDetectorErrorEntry[];
  export interface BatchUpdateDetectorErrorEntry {
    /**
     * The "messageId" of the update request that caused the error. (The value of the "messageId" in the update request "Detector" object.)
     */
    messageId?: MessageId;
    /**
     * The code of the error.
     */
    errorCode?: ErrorCode;
    /**
     * A message describing the error.
     */
    errorMessage?: ErrorMessage;
  }
  export interface BatchUpdateDetectorRequest {
    /**
     * The list of detectors (instances) to update, along with the values to update.
     */
    detectors: UpdateDetectorRequests;
  }
  export interface BatchUpdateDetectorResponse {
    /**
     * A list of those detector updates that resulted in errors. (If an error is listed here, the specific update did not occur.)
     */
    batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntries;
  }
  export interface DescribeDetectorRequest {
    /**
     * The name of the detector model whose detectors (instances) you want information about.
     */
    detectorModelName: DetectorModelName;
    /**
     * A filter used to limit results to detectors (instances) created because of the given key ID.
     */
    keyValue?: KeyValue;
  }
  export interface DescribeDetectorResponse {
    /**
     * Information about the detector (instance).
     */
    detector?: Detector;
  }
  export interface Detector {
    /**
     * The name of the detector model that created this detector (instance).
     */
    detectorModelName?: DetectorModelName;
    /**
     * The value of the key (identifying the device or system) that caused the creation of this detector (instance).
     */
    keyValue?: KeyValue;
    /**
     * The version of the detector model that created this detector (instance).
     */
    detectorModelVersion?: DetectorModelVersion;
    /**
     * The current state of the detector (instance).
     */
    state?: DetectorState;
    /**
     * The time the detector (instance) was created.
     */
    creationTime?: Timestamp;
    /**
     * The time the detector (instance) was last updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export type DetectorModelName = string;
  export type DetectorModelVersion = string;
  export interface DetectorState {
    /**
     * The name of the state.
     */
    stateName: StateName;
    /**
     * The current values of the detector's variables.
     */
    variables: Variables;
    /**
     * The current state of the detector's timers.
     */
    timers: Timers;
  }
  export interface DetectorStateDefinition {
    /**
     * The name of the new state of the detector (instance).
     */
    stateName: StateName;
    /**
     * The new values of the detector's variables. Any variable whose value isn't specified is cleared.
     */
    variables: VariableDefinitions;
    /**
     * The new values of the detector's timers. Any timer whose value isn't specified is cleared, and its timeout event won't occur.
     */
    timers: TimerDefinitions;
  }
  export interface DetectorStateSummary {
    /**
     * The name of the state.
     */
    stateName?: StateName;
  }
  export type DetectorSummaries = DetectorSummary[];
  export interface DetectorSummary {
    /**
     * The name of the detector model that created this detector (instance).
     */
    detectorModelName?: DetectorModelName;
    /**
     * The value of the key (identifying the device or system) that caused the creation of this detector (instance).
     */
    keyValue?: KeyValue;
    /**
     * The version of the detector model that created this detector (instance).
     */
    detectorModelVersion?: DetectorModelVersion;
    /**
     * The current state of the detector (instance).
     */
    state?: DetectorStateSummary;
    /**
     * The time the detector (instance) was created.
     */
    creationTime?: Timestamp;
    /**
     * The time the detector (instance) was last updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export type ErrorCode = "ResourceNotFoundException"|"InvalidRequestException"|"InternalFailureException"|"ServiceUnavailableException"|"ThrottlingException"|string;
  export type ErrorMessage = string;
  export type InputName = string;
  export type KeyValue = string;
  export interface ListDetectorsRequest {
    /**
     * The name of the detector model whose detectors (instances) are listed.
     */
    detectorModelName: DetectorModelName;
    /**
     * A filter that limits results to those detectors (instances) in the given state.
     */
    stateName?: StateName;
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: MaxResults;
  }
  export interface ListDetectorsResponse {
    /**
     * A list of summary information about the detectors (instances).
     */
    detectorSummaries?: DetectorSummaries;
    /**
     * A token to retrieve the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type MaxResults = number;
  export interface Message {
    /**
     * The ID to assign to the message. Within each batch sent, each "messageId" must be unique.
     */
    messageId: MessageId;
    /**
     * The name of the input into which the message payload is transformed.
     */
    inputName: InputName;
    /**
     * The payload of the message. This can be a JSON string or a Base-64-encoded string representing binary data (in which case you must decode it).
     */
    payload: Payload;
  }
  export type MessageId = string;
  export type Messages = Message[];
  export type NextToken = string;
  export type Payload = Buffer|Uint8Array|Blob|string;
  export type Seconds = number;
  export type StateName = string;
  export interface Timer {
    /**
     * The name of the timer.
     */
    name: TimerName;
    /**
     * The number of seconds which have elapsed on the timer.
     */
    timestamp: Timestamp;
  }
  export interface TimerDefinition {
    /**
     * The name of the timer.
     */
    name: TimerName;
    /**
     * The new setting of the timer (the number of seconds before the timer elapses).
     */
    seconds: Seconds;
  }
  export type TimerDefinitions = TimerDefinition[];
  export type TimerName = string;
  export type Timers = Timer[];
  export type Timestamp = Date;
  export interface UpdateDetectorRequest {
    /**
     * The ID to assign to the detector update "message". Each "messageId" must be unique within each batch sent.
     */
    messageId: MessageId;
    /**
     * The name of the detector model that created the detectors (instances).
     */
    detectorModelName: DetectorModelName;
    /**
     * The value of the input key attribute (identifying the device or system) that caused the creation of this detector (instance).
     */
    keyValue?: KeyValue;
    /**
     * The new state, variable values, and timer settings of the detector (instance).
     */
    state: DetectorStateDefinition;
  }
  export type UpdateDetectorRequests = UpdateDetectorRequest[];
  export interface Variable {
    /**
     * The name of the variable.
     */
    name: VariableName;
    /**
     * The current value of the variable.
     */
    value: VariableValue;
  }
  export interface VariableDefinition {
    /**
     * The name of the variable.
     */
    name: VariableName;
    /**
     * The new value of the variable.
     */
    value: VariableValue;
  }
  export type VariableDefinitions = VariableDefinition[];
  export type VariableName = string;
  export type VariableValue = string;
  export type Variables = Variable[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-10-23"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IoTEventsData client.
   */
  export import Types = IoTEventsData;
}
export = IoTEventsData;
