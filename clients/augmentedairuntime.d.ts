import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class AugmentedAIRuntime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AugmentedAIRuntime.Types.ClientConfiguration)
  config: Config & AugmentedAIRuntime.Types.ClientConfiguration;
  /**
   * Deletes the specified human loop for a flow definition.
   */
  deleteHumanLoop(params: AugmentedAIRuntime.Types.DeleteHumanLoopRequest, callback?: (err: AWSError, data: AugmentedAIRuntime.Types.DeleteHumanLoopResponse) => void): Request<AugmentedAIRuntime.Types.DeleteHumanLoopResponse, AWSError>;
  /**
   * Deletes the specified human loop for a flow definition.
   */
  deleteHumanLoop(callback?: (err: AWSError, data: AugmentedAIRuntime.Types.DeleteHumanLoopResponse) => void): Request<AugmentedAIRuntime.Types.DeleteHumanLoopResponse, AWSError>;
  /**
   * Returns information about the specified human loop.
   */
  describeHumanLoop(params: AugmentedAIRuntime.Types.DescribeHumanLoopRequest, callback?: (err: AWSError, data: AugmentedAIRuntime.Types.DescribeHumanLoopResponse) => void): Request<AugmentedAIRuntime.Types.DescribeHumanLoopResponse, AWSError>;
  /**
   * Returns information about the specified human loop.
   */
  describeHumanLoop(callback?: (err: AWSError, data: AugmentedAIRuntime.Types.DescribeHumanLoopResponse) => void): Request<AugmentedAIRuntime.Types.DescribeHumanLoopResponse, AWSError>;
  /**
   * Returns information about human loops, given the specified parameters.
   */
  listHumanLoops(params: AugmentedAIRuntime.Types.ListHumanLoopsRequest, callback?: (err: AWSError, data: AugmentedAIRuntime.Types.ListHumanLoopsResponse) => void): Request<AugmentedAIRuntime.Types.ListHumanLoopsResponse, AWSError>;
  /**
   * Returns information about human loops, given the specified parameters.
   */
  listHumanLoops(callback?: (err: AWSError, data: AugmentedAIRuntime.Types.ListHumanLoopsResponse) => void): Request<AugmentedAIRuntime.Types.ListHumanLoopsResponse, AWSError>;
  /**
   * Starts a human loop, provided that at least one activation condition is met.
   */
  startHumanLoop(params: AugmentedAIRuntime.Types.StartHumanLoopRequest, callback?: (err: AWSError, data: AugmentedAIRuntime.Types.StartHumanLoopResponse) => void): Request<AugmentedAIRuntime.Types.StartHumanLoopResponse, AWSError>;
  /**
   * Starts a human loop, provided that at least one activation condition is met.
   */
  startHumanLoop(callback?: (err: AWSError, data: AugmentedAIRuntime.Types.StartHumanLoopResponse) => void): Request<AugmentedAIRuntime.Types.StartHumanLoopResponse, AWSError>;
  /**
   * Stops the specified human loop.
   */
  stopHumanLoop(params: AugmentedAIRuntime.Types.StopHumanLoopRequest, callback?: (err: AWSError, data: AugmentedAIRuntime.Types.StopHumanLoopResponse) => void): Request<AugmentedAIRuntime.Types.StopHumanLoopResponse, AWSError>;
  /**
   * Stops the specified human loop.
   */
  stopHumanLoop(callback?: (err: AWSError, data: AugmentedAIRuntime.Types.StopHumanLoopResponse) => void): Request<AugmentedAIRuntime.Types.StopHumanLoopResponse, AWSError>;
}
declare namespace AugmentedAIRuntime {
  export type Boolean = boolean;
  export type ContentClassifier = "FreeOfPersonallyIdentifiableInformation"|"FreeOfAdultContent"|string;
  export type ContentClassifiers = ContentClassifier[];
  export interface DeleteHumanLoopRequest {
    /**
     * The name of the human loop you want to delete.
     */
    HumanLoopName: HumanLoopName;
  }
  export interface DeleteHumanLoopResponse {
  }
  export interface DescribeHumanLoopRequest {
    /**
     * The name of the human loop.
     */
    HumanLoopName: HumanLoopName;
  }
  export interface DescribeHumanLoopResponse {
    /**
     * The timestamp when Amazon Augmented AI created the human loop.
     */
    CreationTimestamp: Timestamp;
    /**
     * The reason why a human loop has failed. The failure reason is returned when the human loop status is Failed.
     */
    FailureReason?: String;
    /**
     * A failure code denoting a specific type of failure.
     */
    FailureCode?: String;
    /**
     * The status of the human loop. Valid values:
     */
    HumanLoopStatus: HumanLoopStatus;
    /**
     * The name of the human loop.
     */
    HumanLoopName: HumanLoopName;
    /**
     * The Amazon Resource Name (ARN) of the human loop.
     */
    HumanLoopArn: HumanLoopArn;
    /**
     * The Amazon Resource Name (ARN) of the flow definition.
     */
    FlowDefinitionArn: FlowDefinitionArn;
    /**
     * An object containing information about the human loop input.
     */
    HumanLoopInput: HumanLoopInputContent;
    /**
     * An object containing information about the output of the human loop.
     */
    HumanLoopOutput?: HumanLoopOutputContent;
  }
  export type FailureReason = string;
  export type FlowDefinitionArn = string;
  export interface HumanLoopActivationReason {
    /**
     * True if the specified conditions were matched to trigger the human loop.
     */
    ConditionsMatched?: Boolean;
  }
  export interface HumanLoopActivationResults {
    /**
     * An object containing information about why a human loop was triggered.
     */
    HumanLoopActivationReason?: HumanLoopActivationReason;
    /**
     * A copy of the human loop activation conditions of the flow definition, augmented with the results of evaluating those conditions on the input provided to the StartHumanLoop operation.
     */
    HumanLoopActivationConditionsEvaluationResults?: String;
  }
  export type HumanLoopArn = string;
  export interface HumanLoopInputContent {
    /**
     * Serialized input from the human loop.
     */
    InputContent: InputContent;
  }
  export type HumanLoopName = string;
  export interface HumanLoopOutputContent {
    /**
     * The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output. The output is stored at the following location: s3://S3OutputPath/HumanLoopName/CreationTime/output.json.
     */
    OutputS3Uri: String;
  }
  export type HumanLoopStatus = "InProgress"|"Failed"|"Completed"|"Stopped"|"Stopping"|string;
  export type HumanLoopSummaries = HumanLoopSummary[];
  export interface HumanLoopSummary {
    /**
     * The name of the human loop.
     */
    HumanLoopName?: HumanLoopName;
    /**
     * The status of the human loop. Valid values:
     */
    HumanLoopStatus?: HumanLoopStatus;
    /**
     * When Amazon Augmented AI created the human loop.
     */
    CreationTime?: Timestamp;
    /**
     * The reason why the human loop failed. A failure reason is returned only when the status of the human loop is Failed.
     */
    FailureReason?: FailureReason;
    /**
     * The Amazon Resource Name (ARN) of the flow definition.
     */
    FlowDefinitionArn?: FlowDefinitionArn;
  }
  export interface HumanReviewDataAttributes {
    /**
     * Declares that your content is free of personally identifiable information or adult content. Amazon SageMaker may restrict the Amazon Mechanical Turk workers that can view your task based on this information.
     */
    ContentClassifiers: ContentClassifiers;
  }
  export type InputContent = string;
  export interface ListHumanLoopsRequest {
    /**
     * (Optional) The timestamp of the date when you want the human loops to begin. For example, 1551000000.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * (Optional) The timestamp of the date before which you want the human loops to begin. For example, 1550000000.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * An optional value that specifies whether you want the results sorted in Ascending or Descending order.
     */
    SortOrder?: SortOrder;
    /**
     * A token to resume pagination.
     */
    NextToken?: NextToken;
    /**
     * The total number of items to return. If the total number of available items is more than the value specified in MaxResults, then a NextToken will be provided in the output that you can use to resume pagination.
     */
    MaxResults?: MaxResults;
  }
  export interface ListHumanLoopsResponse {
    /**
     * An array of objects containing information about the human loops.
     */
    HumanLoopSummaries: HumanLoopSummaries;
    /**
     * A token to resume pagination.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type SortOrder = "Ascending"|"Descending"|string;
  export interface StartHumanLoopRequest {
    /**
     * The name of the human loop.
     */
    HumanLoopName: HumanLoopName;
    /**
     * The Amazon Resource Name (ARN) of the flow definition.
     */
    FlowDefinitionArn: FlowDefinitionArn;
    /**
     * An object containing information about the human loop.
     */
    HumanLoopInput: HumanLoopInputContent;
    /**
     * Attributes of the data specified by the customer.
     */
    DataAttributes?: HumanReviewDataAttributes;
  }
  export interface StartHumanLoopResponse {
    /**
     * The Amazon Resource Name (ARN) of the human loop.
     */
    HumanLoopArn?: HumanLoopArn;
    /**
     * An object containing information about the human loop activation.
     */
    HumanLoopActivationResults?: HumanLoopActivationResults;
  }
  export interface StopHumanLoopRequest {
    /**
     * The name of the human loop you want to stop.
     */
    HumanLoopName: HumanLoopName;
  }
  export interface StopHumanLoopResponse {
  }
  export type String = string;
  export type Timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-11-07"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AugmentedAIRuntime client.
   */
  export import Types = AugmentedAIRuntime;
}
export = AugmentedAIRuntime;
