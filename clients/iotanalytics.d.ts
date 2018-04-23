import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class IoTAnalytics extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IoTAnalytics.Types.ClientConfiguration)
  config: Config & IoTAnalytics.Types.ClientConfiguration;
  /**
   * Sends messages to a channel.
   */
  batchPutMessage(params: IoTAnalytics.Types.BatchPutMessageRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.BatchPutMessageResponse) => void): Request<IoTAnalytics.Types.BatchPutMessageResponse, AWSError>;
  /**
   * Sends messages to a channel.
   */
  batchPutMessage(callback?: (err: AWSError, data: IoTAnalytics.Types.BatchPutMessageResponse) => void): Request<IoTAnalytics.Types.BatchPutMessageResponse, AWSError>;
  /**
   * Cancels the reprocessing of data through the pipeline.
   */
  cancelPipelineReprocessing(params: IoTAnalytics.Types.CancelPipelineReprocessingRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CancelPipelineReprocessingResponse) => void): Request<IoTAnalytics.Types.CancelPipelineReprocessingResponse, AWSError>;
  /**
   * Cancels the reprocessing of data through the pipeline.
   */
  cancelPipelineReprocessing(callback?: (err: AWSError, data: IoTAnalytics.Types.CancelPipelineReprocessingResponse) => void): Request<IoTAnalytics.Types.CancelPipelineReprocessingResponse, AWSError>;
  /**
   * Creates a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
   */
  createChannel(params: IoTAnalytics.Types.CreateChannelRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CreateChannelResponse) => void): Request<IoTAnalytics.Types.CreateChannelResponse, AWSError>;
  /**
   * Creates a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
   */
  createChannel(callback?: (err: AWSError, data: IoTAnalytics.Types.CreateChannelResponse) => void): Request<IoTAnalytics.Types.CreateChannelResponse, AWSError>;
  /**
   * Creates a data set. A data set stores data retrieved from a data store by applying an SQL action.  This operation creates the skeleton of a data set. To populate the data set, call "CreateDatasetContent". 
   */
  createDataset(params: IoTAnalytics.Types.CreateDatasetRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatasetResponse) => void): Request<IoTAnalytics.Types.CreateDatasetResponse, AWSError>;
  /**
   * Creates a data set. A data set stores data retrieved from a data store by applying an SQL action.  This operation creates the skeleton of a data set. To populate the data set, call "CreateDatasetContent". 
   */
  createDataset(callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatasetResponse) => void): Request<IoTAnalytics.Types.CreateDatasetResponse, AWSError>;
  /**
   * Creates the content of a data set by applying an SQL action.
   */
  createDatasetContent(params: IoTAnalytics.Types.CreateDatasetContentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates the content of a data set by applying an SQL action.
   */
  createDatasetContent(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a data store, which is a repository for messages.
   */
  createDatastore(params: IoTAnalytics.Types.CreateDatastoreRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatastoreResponse) => void): Request<IoTAnalytics.Types.CreateDatastoreResponse, AWSError>;
  /**
   * Creates a data store, which is a repository for messages.
   */
  createDatastore(callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatastoreResponse) => void): Request<IoTAnalytics.Types.CreateDatastoreResponse, AWSError>;
  /**
   * Creates a pipeline. A pipeline consumes messages from one or more channels and allows you to process the messages before storing them in a data store.
   */
  createPipeline(params: IoTAnalytics.Types.CreatePipelineRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CreatePipelineResponse) => void): Request<IoTAnalytics.Types.CreatePipelineResponse, AWSError>;
  /**
   * Creates a pipeline. A pipeline consumes messages from one or more channels and allows you to process the messages before storing them in a data store.
   */
  createPipeline(callback?: (err: AWSError, data: IoTAnalytics.Types.CreatePipelineResponse) => void): Request<IoTAnalytics.Types.CreatePipelineResponse, AWSError>;
  /**
   * Deletes the specified channel.
   */
  deleteChannel(params: IoTAnalytics.Types.DeleteChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified channel.
   */
  deleteChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified data set. You do not have to delete the content of the data set before you perform this operation.
   */
  deleteDataset(params: IoTAnalytics.Types.DeleteDatasetRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified data set. You do not have to delete the content of the data set before you perform this operation.
   */
  deleteDataset(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the content of the specified data set.
   */
  deleteDatasetContent(params: IoTAnalytics.Types.DeleteDatasetContentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the content of the specified data set.
   */
  deleteDatasetContent(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified data store.
   */
  deleteDatastore(params: IoTAnalytics.Types.DeleteDatastoreRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified data store.
   */
  deleteDatastore(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified pipeline.
   */
  deletePipeline(params: IoTAnalytics.Types.DeletePipelineRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified pipeline.
   */
  deletePipeline(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves information about a channel.
   */
  describeChannel(params: IoTAnalytics.Types.DescribeChannelRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.DescribeChannelResponse) => void): Request<IoTAnalytics.Types.DescribeChannelResponse, AWSError>;
  /**
   * Retrieves information about a channel.
   */
  describeChannel(callback?: (err: AWSError, data: IoTAnalytics.Types.DescribeChannelResponse) => void): Request<IoTAnalytics.Types.DescribeChannelResponse, AWSError>;
  /**
   * Retrieves information about a data set.
   */
  describeDataset(params: IoTAnalytics.Types.DescribeDatasetRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.DescribeDatasetResponse) => void): Request<IoTAnalytics.Types.DescribeDatasetResponse, AWSError>;
  /**
   * Retrieves information about a data set.
   */
  describeDataset(callback?: (err: AWSError, data: IoTAnalytics.Types.DescribeDatasetResponse) => void): Request<IoTAnalytics.Types.DescribeDatasetResponse, AWSError>;
  /**
   * Retrieves information about a data store.
   */
  describeDatastore(params: IoTAnalytics.Types.DescribeDatastoreRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.DescribeDatastoreResponse) => void): Request<IoTAnalytics.Types.DescribeDatastoreResponse, AWSError>;
  /**
   * Retrieves information about a data store.
   */
  describeDatastore(callback?: (err: AWSError, data: IoTAnalytics.Types.DescribeDatastoreResponse) => void): Request<IoTAnalytics.Types.DescribeDatastoreResponse, AWSError>;
  /**
   * Retrieves the current settings of the AWS IoT Analytics logging options.
   */
  describeLoggingOptions(params: IoTAnalytics.Types.DescribeLoggingOptionsRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.DescribeLoggingOptionsResponse) => void): Request<IoTAnalytics.Types.DescribeLoggingOptionsResponse, AWSError>;
  /**
   * Retrieves the current settings of the AWS IoT Analytics logging options.
   */
  describeLoggingOptions(callback?: (err: AWSError, data: IoTAnalytics.Types.DescribeLoggingOptionsResponse) => void): Request<IoTAnalytics.Types.DescribeLoggingOptionsResponse, AWSError>;
  /**
   * Retrieves information about a pipeline.
   */
  describePipeline(params: IoTAnalytics.Types.DescribePipelineRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.DescribePipelineResponse) => void): Request<IoTAnalytics.Types.DescribePipelineResponse, AWSError>;
  /**
   * Retrieves information about a pipeline.
   */
  describePipeline(callback?: (err: AWSError, data: IoTAnalytics.Types.DescribePipelineResponse) => void): Request<IoTAnalytics.Types.DescribePipelineResponse, AWSError>;
  /**
   * Retrieves the contents of a data set as pre-signed URIs.
   */
  getDatasetContent(params: IoTAnalytics.Types.GetDatasetContentRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.GetDatasetContentResponse) => void): Request<IoTAnalytics.Types.GetDatasetContentResponse, AWSError>;
  /**
   * Retrieves the contents of a data set as pre-signed URIs.
   */
  getDatasetContent(callback?: (err: AWSError, data: IoTAnalytics.Types.GetDatasetContentResponse) => void): Request<IoTAnalytics.Types.GetDatasetContentResponse, AWSError>;
  /**
   * Retrieves a list of channels.
   */
  listChannels(params: IoTAnalytics.Types.ListChannelsRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.ListChannelsResponse) => void): Request<IoTAnalytics.Types.ListChannelsResponse, AWSError>;
  /**
   * Retrieves a list of channels.
   */
  listChannels(callback?: (err: AWSError, data: IoTAnalytics.Types.ListChannelsResponse) => void): Request<IoTAnalytics.Types.ListChannelsResponse, AWSError>;
  /**
   * Retrieves information about data sets.
   */
  listDatasets(params: IoTAnalytics.Types.ListDatasetsRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.ListDatasetsResponse) => void): Request<IoTAnalytics.Types.ListDatasetsResponse, AWSError>;
  /**
   * Retrieves information about data sets.
   */
  listDatasets(callback?: (err: AWSError, data: IoTAnalytics.Types.ListDatasetsResponse) => void): Request<IoTAnalytics.Types.ListDatasetsResponse, AWSError>;
  /**
   * Retrieves a list of data stores.
   */
  listDatastores(params: IoTAnalytics.Types.ListDatastoresRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.ListDatastoresResponse) => void): Request<IoTAnalytics.Types.ListDatastoresResponse, AWSError>;
  /**
   * Retrieves a list of data stores.
   */
  listDatastores(callback?: (err: AWSError, data: IoTAnalytics.Types.ListDatastoresResponse) => void): Request<IoTAnalytics.Types.ListDatastoresResponse, AWSError>;
  /**
   * Retrieves a list of pipelines.
   */
  listPipelines(params: IoTAnalytics.Types.ListPipelinesRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.ListPipelinesResponse) => void): Request<IoTAnalytics.Types.ListPipelinesResponse, AWSError>;
  /**
   * Retrieves a list of pipelines.
   */
  listPipelines(callback?: (err: AWSError, data: IoTAnalytics.Types.ListPipelinesResponse) => void): Request<IoTAnalytics.Types.ListPipelinesResponse, AWSError>;
  /**
   * Sets or updates the AWS IoT Analytics logging options.
   */
  putLoggingOptions(params: IoTAnalytics.Types.PutLoggingOptionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets or updates the AWS IoT Analytics logging options.
   */
  putLoggingOptions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Simulates the results of running a pipeline activity on a message payload.
   */
  runPipelineActivity(params: IoTAnalytics.Types.RunPipelineActivityRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.RunPipelineActivityResponse) => void): Request<IoTAnalytics.Types.RunPipelineActivityResponse, AWSError>;
  /**
   * Simulates the results of running a pipeline activity on a message payload.
   */
  runPipelineActivity(callback?: (err: AWSError, data: IoTAnalytics.Types.RunPipelineActivityResponse) => void): Request<IoTAnalytics.Types.RunPipelineActivityResponse, AWSError>;
  /**
   * Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
   */
  sampleChannelData(params: IoTAnalytics.Types.SampleChannelDataRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.SampleChannelDataResponse) => void): Request<IoTAnalytics.Types.SampleChannelDataResponse, AWSError>;
  /**
   * Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
   */
  sampleChannelData(callback?: (err: AWSError, data: IoTAnalytics.Types.SampleChannelDataResponse) => void): Request<IoTAnalytics.Types.SampleChannelDataResponse, AWSError>;
  /**
   * Starts the reprocessing of raw message data through the pipeline.
   */
  startPipelineReprocessing(params: IoTAnalytics.Types.StartPipelineReprocessingRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.StartPipelineReprocessingResponse) => void): Request<IoTAnalytics.Types.StartPipelineReprocessingResponse, AWSError>;
  /**
   * Starts the reprocessing of raw message data through the pipeline.
   */
  startPipelineReprocessing(callback?: (err: AWSError, data: IoTAnalytics.Types.StartPipelineReprocessingResponse) => void): Request<IoTAnalytics.Types.StartPipelineReprocessingResponse, AWSError>;
  /**
   * Updates the settings of a channel.
   */
  updateChannel(params: IoTAnalytics.Types.UpdateChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of a channel.
   */
  updateChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of a data set.
   */
  updateDataset(params: IoTAnalytics.Types.UpdateDatasetRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of a data set.
   */
  updateDataset(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of a data store.
   */
  updateDatastore(params: IoTAnalytics.Types.UpdateDatastoreRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of a data store.
   */
  updateDatastore(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of a pipeline.
   */
  updatePipeline(params: IoTAnalytics.Types.UpdatePipelineRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of a pipeline.
   */
  updatePipeline(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace IoTAnalytics {
  export type ActivityBatchSize = number;
  export type ActivityName = string;
  export interface AddAttributesActivity {
    /**
     * The name of the 'addAttributes' activity.
     */
    name: ActivityName;
    /**
     * A list of 1-50 "AttributeNameMapping" objects that map an existing attribute to a new attribute.  The existing attributes remain in the message, so if you want to remove the originals, use "RemoveAttributeActivity". 
     */
    attributes: AttributeNameMapping;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export type AttributeName = string;
  export type AttributeNameMapping = {[key: string]: AttributeName};
  export type AttributeNames = AttributeName[];
  export type BatchPutMessageErrorEntries = BatchPutMessageErrorEntry[];
  export interface BatchPutMessageErrorEntry {
    /**
     * The ID of the message that caused the error. (See the value corresponding to the "messageId" key in the message object.)
     */
    messageId?: MessageId;
    /**
     * The code associated with the error.
     */
    errorCode?: ErrorCode;
    /**
     * The message associated with the error.
     */
    errorMessage?: ErrorMessage;
  }
  export interface BatchPutMessageRequest {
    /**
     * The name of the channel where the messages are sent.
     */
    channelName: ChannelName;
    /**
     * The list of messages to be sent. Each message has format: '{ "messageId": "string", "payload": "string"}'.
     */
    messages: Messages;
  }
  export interface BatchPutMessageResponse {
    /**
     * A list of any errors encountered when sending the messages to the channel.
     */
    batchPutMessageErrorEntries?: BatchPutMessageErrorEntries;
  }
  export interface CancelPipelineReprocessingRequest {
    /**
     * The name of pipeline for which data reprocessing is canceled.
     */
    pipelineName: PipelineName;
    /**
     * The ID of the reprocessing task (returned by "StartPipelineReprocessing").
     */
    reprocessingId: ReprocessingId;
  }
  export interface CancelPipelineReprocessingResponse {
  }
  export interface Channel {
    /**
     * The name of the channel.
     */
    name?: ChannelName;
    /**
     * The ARN of the channel.
     */
    arn?: ChannelArn;
    /**
     * The status of the channel.
     */
    status?: ChannelStatus;
    /**
     * How long, in days, message data is kept for the channel.
     */
    retentionPeriod?: RetentionPeriod;
    /**
     * When the channel was created.
     */
    creationTime?: Timestamp;
    /**
     * When the channel was last updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export interface ChannelActivity {
    /**
     * The name of the 'channel' activity.
     */
    name: ActivityName;
    /**
     * The name of the channel from which the messages are processed.
     */
    channelName: ChannelName;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export type ChannelArn = string;
  export type ChannelName = string;
  export type ChannelStatus = "CREATING"|"ACTIVE"|"DELETING"|string;
  export type ChannelSummaries = ChannelSummary[];
  export interface ChannelSummary {
    /**
     * The name of the channel.
     */
    channelName?: ChannelName;
    /**
     * The status of the channel.
     */
    status?: ChannelStatus;
    /**
     * When the channel was created.
     */
    creationTime?: Timestamp;
    /**
     * The last time the channel was updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export interface CreateChannelRequest {
    /**
     * The name of the channel.
     */
    channelName: ChannelName;
    /**
     * How long, in days, message data is kept for the channel.
     */
    retentionPeriod?: RetentionPeriod;
  }
  export interface CreateChannelResponse {
    /**
     * The name of the channel.
     */
    channelName?: ChannelName;
    /**
     * The ARN of the channel.
     */
    channelArn?: ChannelArn;
    /**
     * How long, in days, message data is kept for the channel.
     */
    retentionPeriod?: RetentionPeriod;
  }
  export interface CreateDatasetContentRequest {
    /**
     * The name of the data set.
     */
    datasetName: DatasetName;
  }
  export interface CreateDatasetRequest {
    /**
     * The name of the data set.
     */
    datasetName: DatasetName;
    /**
     * A list of actions that create the data set. Only one action is supported at this time.
     */
    actions: DatasetActions;
    /**
     * A list of triggers. A trigger causes data set content to be populated at a specified time or time interval. The list of triggers can be empty or contain up to five DataSetTrigger objects.
     */
    triggers?: DatasetTriggers;
  }
  export interface CreateDatasetResponse {
    /**
     * The name of the data set.
     */
    datasetName?: DatasetName;
    /**
     * The ARN of the data set.
     */
    datasetArn?: DatasetArn;
  }
  export interface CreateDatastoreRequest {
    /**
     * The name of the data store.
     */
    datastoreName: DatastoreName;
    /**
     * How long, in days, message data is kept for the data store.
     */
    retentionPeriod?: RetentionPeriod;
  }
  export interface CreateDatastoreResponse {
    /**
     * The name of the data store.
     */
    datastoreName?: DatastoreName;
    /**
     * The ARN of the data store.
     */
    datastoreArn?: DatastoreArn;
    /**
     * How long, in days, message data is kept for the data store.
     */
    retentionPeriod?: RetentionPeriod;
  }
  export interface CreatePipelineRequest {
    /**
     * The name of the pipeline.
     */
    pipelineName: PipelineName;
    /**
     * A list of pipeline activities. The list can be 1-25 PipelineActivity objects. Activities perform transformations on your messages, such as removing, renaming, or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.
     */
    pipelineActivities: PipelineActivities;
  }
  export interface CreatePipelineResponse {
    /**
     * The name of the pipeline.
     */
    pipelineName?: PipelineName;
    /**
     * The ARN of the pipeline.
     */
    pipelineArn?: PipelineArn;
  }
  export interface Dataset {
    /**
     * The name of the data set.
     */
    name?: DatasetName;
    /**
     * The ARN of the data set.
     */
    arn?: DatasetArn;
    /**
     * The "DatasetAction" objects that create the data set.
     */
    actions?: DatasetActions;
    /**
     * The "DatasetTrigger" objects that specify when the data set is automatically updated.
     */
    triggers?: DatasetTriggers;
    /**
     * The status of the data set.
     */
    status?: DatasetStatus;
    /**
     * When the data set was created.
     */
    creationTime?: Timestamp;
    /**
     * The last time the data set was updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export interface DatasetAction {
    /**
     * The name of the data set action.
     */
    actionName?: DatasetActionName;
    /**
     * An "SqlQueryDatasetAction" object that contains the SQL query to modify the message.
     */
    queryAction?: SqlQueryDatasetAction;
  }
  export type DatasetActionName = string;
  export type DatasetActions = DatasetAction[];
  export type DatasetArn = string;
  export type DatasetContentState = "CREATING"|"SUCCEEDED"|"FAILED"|string;
  export interface DatasetContentStatus {
    /**
     * The state of the data set. Can be one of "CREATING", "SUCCEEDED" or "FAILED".
     */
    state?: DatasetContentState;
    /**
     * The reason the data set is in this state.
     */
    reason?: Reason;
  }
  export type DatasetContentVersion = string;
  export type DatasetEntries = DatasetEntry[];
  export interface DatasetEntry {
    /**
     * The name of the data set item.
     */
    entryName?: EntryName;
    /**
     * The pre-signed URI of the data set item.
     */
    dataURI?: PresignedURI;
  }
  export type DatasetName = string;
  export type DatasetStatus = "CREATING"|"ACTIVE"|"DELETING"|string;
  export type DatasetSummaries = DatasetSummary[];
  export interface DatasetSummary {
    /**
     * The name of the data set.
     */
    datasetName?: DatasetName;
    /**
     * The status of the data set.
     */
    status?: DatasetStatus;
    /**
     * The time the data set was created.
     */
    creationTime?: Timestamp;
    /**
     * The last time the data set was updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export interface DatasetTrigger {
    /**
     * The "Schedule" when the trigger is initiated.
     */
    schedule?: Schedule;
  }
  export type DatasetTriggers = DatasetTrigger[];
  export interface Datastore {
    /**
     * The name of the data store.
     */
    name?: DatastoreName;
    /**
     * The ARN of the data store.
     */
    arn?: DatastoreArn;
    /**
     * The status of a data store:  CREATING  The data store is being created.  ACTIVE  The data store has been created and can be used.  DELETING  The data store is being deleted.  
     */
    status?: DatastoreStatus;
    /**
     * How long, in days, message data is kept for the data store.
     */
    retentionPeriod?: RetentionPeriod;
    /**
     * When the data store was created.
     */
    creationTime?: Timestamp;
    /**
     * The last time the data store was updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export interface DatastoreActivity {
    /**
     * The name of the 'datastore' activity.
     */
    name: ActivityName;
    /**
     * The name of the data store where processed messages are stored.
     */
    datastoreName: DatastoreName;
  }
  export type DatastoreArn = string;
  export type DatastoreName = string;
  export type DatastoreStatus = "CREATING"|"ACTIVE"|"DELETING"|string;
  export type DatastoreSummaries = DatastoreSummary[];
  export interface DatastoreSummary {
    /**
     * The name of the data store.
     */
    datastoreName?: DatastoreName;
    /**
     * The status of the data store.
     */
    status?: DatastoreStatus;
    /**
     * When the data store was created.
     */
    creationTime?: Timestamp;
    /**
     * The last time the data store was updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export interface DeleteChannelRequest {
    /**
     * The name of the channel to delete.
     */
    channelName: ChannelName;
  }
  export interface DeleteDatasetContentRequest {
    /**
     * The name of the data set whose content is deleted.
     */
    datasetName: DatasetName;
    /**
     * The version of the data set whose content is deleted. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
     */
    versionId?: DatasetContentVersion;
  }
  export interface DeleteDatasetRequest {
    /**
     * The name of the data set to delete.
     */
    datasetName: DatasetName;
  }
  export interface DeleteDatastoreRequest {
    /**
     * The name of the data store to delete.
     */
    datastoreName: DatastoreName;
  }
  export interface DeletePipelineRequest {
    /**
     * The name of the pipeline to delete.
     */
    pipelineName: PipelineName;
  }
  export interface DescribeChannelRequest {
    /**
     * The name of the channel whose information is retrieved.
     */
    channelName: ChannelName;
  }
  export interface DescribeChannelResponse {
    /**
     * An object that contains information about the channel.
     */
    channel?: Channel;
  }
  export interface DescribeDatasetRequest {
    /**
     * The name of the data set whose information is retrieved.
     */
    datasetName: DatasetName;
  }
  export interface DescribeDatasetResponse {
    /**
     * An object that contains information about the data set.
     */
    dataset?: Dataset;
  }
  export interface DescribeDatastoreRequest {
    /**
     * The name of the data store
     */
    datastoreName: DatastoreName;
  }
  export interface DescribeDatastoreResponse {
    /**
     * Information about the data store.
     */
    datastore?: Datastore;
  }
  export interface DescribeLoggingOptionsRequest {
  }
  export interface DescribeLoggingOptionsResponse {
    /**
     * The current settings of the AWS IoT Analytics logging options.
     */
    loggingOptions?: LoggingOptions;
  }
  export interface DescribePipelineRequest {
    /**
     * The name of the pipeline whose information is retrieved.
     */
    pipelineName: PipelineName;
  }
  export interface DescribePipelineResponse {
    /**
     * A "Pipeline" object that contains information about the pipeline.
     */
    pipeline?: Pipeline;
  }
  export interface DeviceRegistryEnrichActivity {
    /**
     * The name of the 'deviceRegistryEnrich' activity.
     */
    name: ActivityName;
    /**
     * The name of the attribute that is added to the message.
     */
    attribute: AttributeName;
    /**
     * The name of the IoT device whose registry information is added to the message.
     */
    thingName: AttributeName;
    /**
     * The ARN of the role that allows access to the device's registry information.
     */
    roleArn: RoleArn;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export interface DeviceShadowEnrichActivity {
    /**
     * The name of the 'deviceShadowEnrich' activity.
     */
    name: ActivityName;
    /**
     * The name of the attribute that is added to the message.
     */
    attribute: AttributeName;
    /**
     * The name of the IoT device whose shadow information is added to the message.
     */
    thingName: AttributeName;
    /**
     * The ARN of the role that allows access to the device's shadow.
     */
    roleArn: RoleArn;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export type EndTime = Date;
  export type EntryName = string;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface FilterActivity {
    /**
     * The name of the 'filter' activity.
     */
    name: ActivityName;
    /**
     * An expression that looks like an SQL WHERE clause that must return a Boolean value.
     */
    filter: FilterExpression;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export type FilterExpression = string;
  export interface GetDatasetContentRequest {
    /**
     * The name of the data set whose contents are retrieved.
     */
    datasetName: DatasetName;
    /**
     * The version of the data set whose contents are retrieved. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
     */
    versionId?: DatasetContentVersion;
  }
  export interface GetDatasetContentResponse {
    /**
     * A list of "DatasetEntry" objects.
     */
    entries?: DatasetEntries;
    /**
     * The time when the request was made.
     */
    timestamp?: Timestamp;
    /**
     * The status of the data set content.
     */
    status?: DatasetContentStatus;
  }
  export interface LambdaActivity {
    /**
     * The name of the 'lambda' activity.
     */
    name: ActivityName;
    /**
     * The name of the Lambda function that is run on the message.
     */
    lambdaName: LambdaName;
    /**
     * The number of messages passed to the Lambda function for processing. The AWS Lambda function must be able to process all of these messages within five minutes, which is the maximum timeout duration for Lambda functions.
     */
    batchSize: ActivityBatchSize;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export type LambdaName = string;
  export interface ListChannelsRequest {
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this request. The default value is 100.
     */
    maxResults?: MaxResults;
  }
  export interface ListChannelsResponse {
    /**
     * A list of "ChannelSummary" objects.
     */
    channelSummaries?: ChannelSummaries;
    /**
     * The token to retrieve the next set of results, or null if there are no more results.
     */
    nextToken?: NextToken;
  }
  export interface ListDatasetsRequest {
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this request. The default value is 100.
     */
    maxResults?: MaxResults;
  }
  export interface ListDatasetsResponse {
    /**
     * A list of "DatasetSummary" objects.
     */
    datasetSummaries?: DatasetSummaries;
    /**
     * The token to retrieve the next set of results, or null if there are no more results.
     */
    nextToken?: NextToken;
  }
  export interface ListDatastoresRequest {
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this request. The default value is 100.
     */
    maxResults?: MaxResults;
  }
  export interface ListDatastoresResponse {
    /**
     * A list of "DatastoreSummary" objects.
     */
    datastoreSummaries?: DatastoreSummaries;
    /**
     * The token to retrieve the next set of results, or null if there are no more results.
     */
    nextToken?: NextToken;
  }
  export interface ListPipelinesRequest {
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this request. The default value is 100.
     */
    maxResults?: MaxResults;
  }
  export interface ListPipelinesResponse {
    /**
     * A list of "PipelineSummary" objects.
     */
    pipelineSummaries?: PipelineSummaries;
    /**
     * The token to retrieve the next set of results, or null if there are no more results.
     */
    nextToken?: NextToken;
  }
  export type LogResult = string;
  export type LoggingEnabled = boolean;
  export type LoggingLevel = "ERROR"|string;
  export interface LoggingOptions {
    /**
     * The ARN of the role that grants permission to AWS IoT Analytics to perform logging.
     */
    roleArn: RoleArn;
    /**
     * The logging level. Currently, only "ERROR" is supported.
     */
    level: LoggingLevel;
    /**
     * If true, logging is enabled for AWS IoT Analytics.
     */
    enabled: LoggingEnabled;
  }
  export interface MathActivity {
    /**
     * The name of the 'math' activity.
     */
    name: ActivityName;
    /**
     * The name of the attribute that will contain the result of the math operation.
     */
    attribute: AttributeName;
    /**
     * An expression that uses one or more existing attributes and must return an integer value.
     */
    math: MathExpression;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export type MathExpression = string;
  export type MaxMessages = number;
  export type MaxResults = number;
  export interface Message {
    /**
     * The ID you wish to assign to the message.
     */
    messageId: MessageId;
    /**
     * The payload of the message.
     */
    payload: MessagePayload;
  }
  export type MessageId = string;
  export type MessagePayload = Buffer|Uint8Array|Blob|string;
  export type MessagePayloads = MessagePayload[];
  export type Messages = Message[];
  export type NextToken = string;
  export interface Pipeline {
    /**
     * The name of the pipeline.
     */
    name?: PipelineName;
    /**
     * The ARN of the pipeline.
     */
    arn?: PipelineArn;
    /**
     * The activities that perform transformations on the messages.
     */
    activities?: PipelineActivities;
    /**
     * A summary of information about the pipeline reprocessing.
     */
    reprocessingSummaries?: ReprocessingSummaries;
    /**
     * When the pipeline was created.
     */
    creationTime?: Timestamp;
    /**
     * The last time the pipeline was updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export type PipelineActivities = PipelineActivity[];
  export interface PipelineActivity {
    /**
     * Determines the source of the messages to be processed.
     */
    channel?: ChannelActivity;
    /**
     * Runs a Lambda function to modify the message.
     */
    lambda?: LambdaActivity;
    /**
     * Specifies where to store the processed message data.
     */
    datastore?: DatastoreActivity;
    /**
     * Adds other attributes based on existing attributes in the message.
     */
    addAttributes?: AddAttributesActivity;
    /**
     * Removes attributes from a message.
     */
    removeAttributes?: RemoveAttributesActivity;
    /**
     * Creates a new message using only the specified attributes from the original message. 
     */
    selectAttributes?: SelectAttributesActivity;
    /**
     * Filters a message based on its attributes.
     */
    filter?: FilterActivity;
    /**
     * Computes an arithmetic expression using the message's attributes and adds it to the message.
     */
    math?: MathActivity;
    /**
     * Adds data from the AWS IoT device registry to your message.
     */
    deviceRegistryEnrich?: DeviceRegistryEnrichActivity;
    /**
     * Adds information from the AWS IoT Device Shadows service to a message.
     */
    deviceShadowEnrich?: DeviceShadowEnrichActivity;
  }
  export type PipelineArn = string;
  export type PipelineName = string;
  export type PipelineSummaries = PipelineSummary[];
  export interface PipelineSummary {
    /**
     * The name of the pipeline.
     */
    pipelineName?: PipelineName;
    /**
     * A summary of information about the pipeline reprocessing.
     */
    reprocessingSummaries?: ReprocessingSummaries;
    /**
     * When the pipeline was created.
     */
    creationTime?: Timestamp;
    /**
     * When the pipeline was last updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export type PresignedURI = string;
  export interface PutLoggingOptionsRequest {
    /**
     * The new values of the AWS IoT Analytics logging options.
     */
    loggingOptions: LoggingOptions;
  }
  export type Reason = string;
  export interface RemoveAttributesActivity {
    /**
     * The name of the 'removeAttributes' activity.
     */
    name: ActivityName;
    /**
     * A list of 1-50 attributes to remove from the message.
     */
    attributes: AttributeNames;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export type ReprocessingId = string;
  export type ReprocessingStatus = "RUNNING"|"SUCCEEDED"|"CANCELLED"|"FAILED"|string;
  export type ReprocessingSummaries = ReprocessingSummary[];
  export interface ReprocessingSummary {
    /**
     * The 'reprocessingId' returned by "StartPipelineReprocessing".
     */
    id?: ReprocessingId;
    /**
     * The status of the pipeline reprocessing.
     */
    status?: ReprocessingStatus;
    /**
     * The time the pipeline reprocessing was created.
     */
    creationTime?: Timestamp;
  }
  export interface RetentionPeriod {
    /**
     * If true, message data is kept indefinitely.
     */
    unlimited?: UnlimitedRetentionPeriod;
    /**
     * The number of days that message data is kept. The "unlimited" parameter must be false.
     */
    numberOfDays?: RetentionPeriodInDays;
  }
  export type RetentionPeriodInDays = number;
  export type RoleArn = string;
  export interface RunPipelineActivityRequest {
    /**
     * The pipeline activity that is run. This must not be a 'channel' activity or a 'datastore' activity because these activities are used in a pipeline only to load the original message and to store the (possibly) transformed message. If a 'lambda' activity is specified, only short-running Lambda functions (those with a timeout of less than 30 seconds or less) can be used.
     */
    pipelineActivity: PipelineActivity;
    /**
     * The sample message payloads on which the pipeline activity is run.
     */
    payloads: MessagePayloads;
  }
  export interface RunPipelineActivityResponse {
    /**
     * The enriched or transformed sample message payloads as base64-encoded strings. (The results of running the pipeline activity on each input sample message payload, encoded in base64.)
     */
    payloads?: MessagePayloads;
    /**
     * In case the pipeline activity fails, the log message that is generated.
     */
    logResult?: LogResult;
  }
  export interface SampleChannelDataRequest {
    /**
     * The name of the channel whose message samples are retrieved.
     */
    channelName: ChannelName;
    /**
     * The number of sample messages to be retrieved. The limit is 10, the default is also 10.
     */
    maxMessages?: MaxMessages;
    /**
     * The start of the time window from which sample messages are retrieved.
     */
    startTime?: StartTime;
    /**
     * The end of the time window from which sample messages are retrieved.
     */
    endTime?: EndTime;
  }
  export interface SampleChannelDataResponse {
    /**
     * The list of message samples. Each sample message is returned as a base64-encoded string.
     */
    payloads?: MessagePayloads;
  }
  export interface Schedule {
    /**
     * The expression that defines when to trigger an update. For more information, see  Schedule Expressions for Rules in the Amazon CloudWatch documentation.
     */
    expression?: ScheduleExpression;
  }
  export type ScheduleExpression = string;
  export interface SelectAttributesActivity {
    /**
     * The name of the 'selectAttributes' activity.
     */
    name: ActivityName;
    /**
     * A list of the attributes to select from the message.
     */
    attributes: AttributeNames;
    /**
     * The next activity in the pipeline.
     */
    next?: ActivityName;
  }
  export type SqlQuery = string;
  export interface SqlQueryDatasetAction {
    /**
     * An SQL query string.
     */
    sqlQuery: SqlQuery;
  }
  export interface StartPipelineReprocessingRequest {
    /**
     * The name of the pipeline on which to start reprocessing.
     */
    pipelineName: PipelineName;
    /**
     * The start time (inclusive) of raw message data that is reprocessed.
     */
    startTime?: StartTime;
    /**
     * The end time (exclusive) of raw message data that is reprocessed.
     */
    endTime?: EndTime;
  }
  export interface StartPipelineReprocessingResponse {
    /**
     * The ID of the pipeline reprocessing activity that was started.
     */
    reprocessingId?: ReprocessingId;
  }
  export type StartTime = Date;
  export type Timestamp = Date;
  export type UnlimitedRetentionPeriod = boolean;
  export interface UpdateChannelRequest {
    /**
     * The name of the channel to be updated.
     */
    channelName: ChannelName;
    /**
     * How long, in days, message data is kept for the channel.
     */
    retentionPeriod?: RetentionPeriod;
  }
  export interface UpdateDatasetRequest {
    /**
     * The name of the data set to update.
     */
    datasetName: DatasetName;
    /**
     * A list of "DatasetAction" objects. Only one action is supported at this time.
     */
    actions: DatasetActions;
    /**
     * A list of "DatasetTrigger" objects. The list can be empty or can contain up to five DataSetTrigger objects.
     */
    triggers?: DatasetTriggers;
  }
  export interface UpdateDatastoreRequest {
    /**
     * The name of the data store to be updated.
     */
    datastoreName: DatastoreName;
    /**
     * How long, in days, message data is kept for the data store.
     */
    retentionPeriod?: RetentionPeriod;
  }
  export interface UpdatePipelineRequest {
    /**
     * The name of the pipeline to update.
     */
    pipelineName: PipelineName;
    /**
     * A list of "PipelineActivity" objects. The list can be 1-25 PipelineActivity objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.
     */
    pipelineActivities: PipelineActivities;
  }
  export type errorMessage = string;
  export type resourceArn = string;
  export type resourceId = string;
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
   * Contains interfaces for use with the IoTAnalytics client.
   */
  export import Types = IoTAnalytics;
}
export = IoTAnalytics;
