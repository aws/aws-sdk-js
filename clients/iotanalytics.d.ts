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
   * Creates a data set. A data set stores data retrieved from a data store by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application). This operation creates the skeleton of a data set. The data set can be populated manually by calling "CreateDatasetContent" or automatically according to a "trigger" you specify.
   */
  createDataset(params: IoTAnalytics.Types.CreateDatasetRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatasetResponse) => void): Request<IoTAnalytics.Types.CreateDatasetResponse, AWSError>;
  /**
   * Creates a data set. A data set stores data retrieved from a data store by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application). This operation creates the skeleton of a data set. The data set can be populated manually by calling "CreateDatasetContent" or automatically according to a "trigger" you specify.
   */
  createDataset(callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatasetResponse) => void): Request<IoTAnalytics.Types.CreateDatasetResponse, AWSError>;
  /**
   * Creates the content of a data set by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application).
   */
  createDatasetContent(params: IoTAnalytics.Types.CreateDatasetContentRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatasetContentResponse) => void): Request<IoTAnalytics.Types.CreateDatasetContentResponse, AWSError>;
  /**
   * Creates the content of a data set by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application).
   */
  createDatasetContent(callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatasetContentResponse) => void): Request<IoTAnalytics.Types.CreateDatasetContentResponse, AWSError>;
  /**
   * Creates a data store, which is a repository for messages.
   */
  createDatastore(params: IoTAnalytics.Types.CreateDatastoreRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatastoreResponse) => void): Request<IoTAnalytics.Types.CreateDatastoreResponse, AWSError>;
  /**
   * Creates a data store, which is a repository for messages.
   */
  createDatastore(callback?: (err: AWSError, data: IoTAnalytics.Types.CreateDatastoreResponse) => void): Request<IoTAnalytics.Types.CreateDatastoreResponse, AWSError>;
  /**
   * Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a channel and a datastore activity and, optionally, as many as 23 additional activities in the pipelineActivities array.
   */
  createPipeline(params: IoTAnalytics.Types.CreatePipelineRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.CreatePipelineResponse) => void): Request<IoTAnalytics.Types.CreatePipelineResponse, AWSError>;
  /**
   * Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a channel and a datastore activity and, optionally, as many as 23 additional activities in the pipelineActivities array.
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
   * Lists information about data set contents that have been created.
   */
  listDatasetContents(params: IoTAnalytics.Types.ListDatasetContentsRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.ListDatasetContentsResponse) => void): Request<IoTAnalytics.Types.ListDatasetContentsResponse, AWSError>;
  /**
   * Lists information about data set contents that have been created.
   */
  listDatasetContents(callback?: (err: AWSError, data: IoTAnalytics.Types.ListDatasetContentsResponse) => void): Request<IoTAnalytics.Types.ListDatasetContentsResponse, AWSError>;
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
   * Lists the tags (metadata) which you have assigned to the resource.
   */
  listTagsForResource(params: IoTAnalytics.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.ListTagsForResourceResponse) => void): Request<IoTAnalytics.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: IoTAnalytics.Types.ListTagsForResourceResponse) => void): Request<IoTAnalytics.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Sets or updates the AWS IoT Analytics logging options. Note that if you update the value of any loggingOptions field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to 5 minutes for that change to take effect. 
   */
  putLoggingOptions(params: IoTAnalytics.Types.PutLoggingOptionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets or updates the AWS IoT Analytics logging options. Note that if you update the value of any loggingOptions field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to 5 minutes for that change to take effect. 
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
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   */
  tagResource(params: IoTAnalytics.Types.TagResourceRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.TagResourceResponse) => void): Request<IoTAnalytics.Types.TagResourceResponse, AWSError>;
  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   */
  tagResource(callback?: (err: AWSError, data: IoTAnalytics.Types.TagResourceResponse) => void): Request<IoTAnalytics.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the given tags (metadata) from the resource.
   */
  untagResource(params: IoTAnalytics.Types.UntagResourceRequest, callback?: (err: AWSError, data: IoTAnalytics.Types.UntagResourceResponse) => void): Request<IoTAnalytics.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the given tags (metadata) from the resource.
   */
  untagResource(callback?: (err: AWSError, data: IoTAnalytics.Types.UntagResourceResponse) => void): Request<IoTAnalytics.Types.UntagResourceResponse, AWSError>;
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
   * Updates the settings of a pipeline. You must specify both a channel and a datastore activity and, optionally, as many as 23 additional activities in the pipelineActivities array.
   */
  updatePipeline(params: IoTAnalytics.Types.UpdatePipelineRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of a pipeline. You must specify both a channel and a datastore activity and, optionally, as many as 23 additional activities in the pipelineActivities array.
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
     * The list of messages to be sent. Each message has format: '{ "messageId": "string", "payload": "string"}'. Note that the field names of message payloads (data) that you send to AWS IoT Analytics:   Must contain only alphanumeric characters and undescores (_); no other special characters are allowed.   Must begin with an alphabetic character or single underscore (_).   Cannot contain hyphens (-).   In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$".    Cannot be greater than 255 characters.   Are case-insensitive. (Fields named "foo" and "FOO" in the same payload are considered duplicates.)   For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. 
     */
    messages: Messages;
  }
  export interface BatchPutMessageResponse {
    /**
     * A list of any errors encountered when sending the messages to the channel.
     */
    batchPutMessageErrorEntries?: BatchPutMessageErrorEntries;
  }
  export type BucketKeyExpression = string;
  export type BucketName = string;
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
     * Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel.
     */
    storage?: ChannelStorage;
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
  export interface ChannelStatistics {
    /**
     * The estimated size of the channel.
     */
    size?: EstimatedResourceSize;
  }
  export type ChannelStatus = "CREATING"|"ACTIVE"|"DELETING"|string;
  export interface ChannelStorage {
    /**
     * Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel.
     */
    serviceManagedS3?: ServiceManagedChannelS3Storage;
    /**
     * Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel.
     */
    customerManagedS3?: CustomerManagedChannelS3Storage;
  }
  export interface ChannelStorageSummary {
    /**
     * Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service.
     */
    serviceManagedS3?: ServiceManagedChannelS3StorageSummary;
    /**
     * Used to store channel data in an S3 bucket that you manage.
     */
    customerManagedS3?: CustomerManagedChannelS3StorageSummary;
  }
  export type ChannelSummaries = ChannelSummary[];
  export interface ChannelSummary {
    /**
     * The name of the channel.
     */
    channelName?: ChannelName;
    /**
     * Where channel data is stored.
     */
    channelStorage?: ChannelStorageSummary;
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
  export type ComputeType = "ACU_1"|"ACU_2"|string;
  export interface ContainerDatasetAction {
    /**
     * The ARN of the Docker container stored in your account. The Docker container contains an application and needed support libraries and is used to generate data set contents.
     */
    image: Image;
    /**
     * The ARN of the role which gives permission to the system to access needed resources in order to run the "containerAction". This includes, at minimum, permission to retrieve the data set contents which are the input to the containerized application.
     */
    executionRoleArn: RoleArn;
    /**
     * Configuration of the resource which executes the "containerAction".
     */
    resourceConfiguration: ResourceConfiguration;
    /**
     * The values of variables used within the context of the execution of the containerized application (basically, parameters passed to the application). Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue".
     */
    variables?: Variables;
  }
  export interface CreateChannelRequest {
    /**
     * The name of the channel.
     */
    channelName: ChannelName;
    /**
     * Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel.
     */
    channelStorage?: ChannelStorage;
    /**
     * How long, in days, message data is kept for the channel. When "customerManagedS3" storage is selected, this parameter is ignored.
     */
    retentionPeriod?: RetentionPeriod;
    /**
     * Metadata which can be used to manage the channel.
     */
    tags?: TagList;
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
  export interface CreateDatasetContentResponse {
    /**
     * The version ID of the data set contents which are being created.
     */
    versionId?: DatasetContentVersion;
  }
  export interface CreateDatasetRequest {
    /**
     * The name of the data set.
     */
    datasetName: DatasetName;
    /**
     * A list of actions that create the data set contents.
     */
    actions: DatasetActions;
    /**
     * A list of triggers. A trigger causes data set contents to be populated at a specified time interval or when another data set's contents are created. The list of triggers can be empty or contain up to five DataSetTrigger objects.
     */
    triggers?: DatasetTriggers;
    /**
     * When data set contents are created they are delivered to destinations specified here.
     */
    contentDeliveryRules?: DatasetContentDeliveryRules;
    /**
     * [Optional] How long, in days, versions of data set contents are kept for the data set. If not specified or set to null, versions of data set contents are retained for at most 90 days. The number of versions of data set contents retained is determined by the versioningConfiguration parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)
     */
    retentionPeriod?: RetentionPeriod;
    /**
     * [Optional] How many versions of data set contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the "retentionPeriod" parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)
     */
    versioningConfiguration?: VersioningConfiguration;
    /**
     * Metadata which can be used to manage the data set.
     */
    tags?: TagList;
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
    /**
     * How long, in days, data set contents are kept for the data set.
     */
    retentionPeriod?: RetentionPeriod;
  }
  export interface CreateDatastoreRequest {
    /**
     * The name of the data store.
     */
    datastoreName: DatastoreName;
    /**
     * Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created.
     */
    datastoreStorage?: DatastoreStorage;
    /**
     * How long, in days, message data is kept for the data store. When "customerManagedS3" storage is selected, this parameter is ignored.
     */
    retentionPeriod?: RetentionPeriod;
    /**
     * Metadata which can be used to manage the data store.
     */
    tags?: TagList;
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
     * A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data. The list can be 2-25 PipelineActivity objects and must contain both a channel and a datastore activity. Each entry in the list must contain only one activity, for example:  pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ] 
     */
    pipelineActivities: PipelineActivities;
    /**
     * Metadata which can be used to manage the pipeline.
     */
    tags?: TagList;
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
  export interface CustomerManagedChannelS3Storage {
    /**
     * The name of the Amazon S3 bucket in which channel data is stored.
     */
    bucket: BucketName;
    /**
     * [Optional] The prefix used to create the keys of the channel data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key). The prefix must end with a '/'.
     */
    keyPrefix?: S3KeyPrefix;
    /**
     * The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.
     */
    roleArn: RoleArn;
  }
  export interface CustomerManagedChannelS3StorageSummary {
    /**
     * The name of the Amazon S3 bucket in which channel data is stored.
     */
    bucket?: BucketName;
    /**
     * [Optional] The prefix used to create the keys of the channel data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key). The prefix must end with a '/'.
     */
    keyPrefix?: S3KeyPrefix;
    /**
     * The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.
     */
    roleArn?: RoleArn;
  }
  export interface CustomerManagedDatastoreS3Storage {
    /**
     * The name of the Amazon S3 bucket in which data store data is stored.
     */
    bucket: BucketName;
    /**
     * [Optional] The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key). The prefix must end with a '/'.
     */
    keyPrefix?: S3KeyPrefix;
    /**
     * The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.
     */
    roleArn: RoleArn;
  }
  export interface CustomerManagedDatastoreS3StorageSummary {
    /**
     * The name of the Amazon S3 bucket in which data store data is stored.
     */
    bucket?: BucketName;
    /**
     * [Optional] The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key). The prefix must end with a '/'.
     */
    keyPrefix?: S3KeyPrefix;
    /**
     * The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.
     */
    roleArn?: RoleArn;
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
     * The "DatasetAction" objects that automatically create the data set contents.
     */
    actions?: DatasetActions;
    /**
     * The "DatasetTrigger" objects that specify when the data set is automatically updated.
     */
    triggers?: DatasetTriggers;
    /**
     * When data set contents are created they are delivered to destinations specified here.
     */
    contentDeliveryRules?: DatasetContentDeliveryRules;
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
    /**
     * [Optional] How long, in days, message data is kept for the data set.
     */
    retentionPeriod?: RetentionPeriod;
    /**
     * [Optional] How many versions of data set contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the "retentionPeriod" parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)
     */
    versioningConfiguration?: VersioningConfiguration;
  }
  export interface DatasetAction {
    /**
     * The name of the data set action by which data set contents are automatically created.
     */
    actionName?: DatasetActionName;
    /**
     * An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents.
     */
    queryAction?: SqlQueryDatasetAction;
    /**
     * Information which allows the system to run a containerized application in order to create the data set contents. The application must be in a Docker container along with any needed support libraries.
     */
    containerAction?: ContainerDatasetAction;
  }
  export type DatasetActionName = string;
  export type DatasetActionSummaries = DatasetActionSummary[];
  export interface DatasetActionSummary {
    /**
     * The name of the action which automatically creates the data set's contents.
     */
    actionName?: DatasetActionName;
    /**
     * The type of action by which the data set's contents are automatically created.
     */
    actionType?: DatasetActionType;
  }
  export type DatasetActionType = "QUERY"|"CONTAINER"|string;
  export type DatasetActions = DatasetAction[];
  export type DatasetArn = string;
  export interface DatasetContentDeliveryDestination {
    /**
     * Configuration information for delivery of data set contents to AWS IoT Events.
     */
    iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;
    /**
     * Configuration information for delivery of data set contents to Amazon S3.
     */
    s3DestinationConfiguration?: S3DestinationConfiguration;
  }
  export interface DatasetContentDeliveryRule {
    /**
     * The name of the data set content delivery rules entry.
     */
    entryName?: EntryName;
    /**
     * The destination to which data set contents are delivered.
     */
    destination: DatasetContentDeliveryDestination;
  }
  export type DatasetContentDeliveryRules = DatasetContentDeliveryRule[];
  export type DatasetContentState = "CREATING"|"SUCCEEDED"|"FAILED"|string;
  export interface DatasetContentStatus {
    /**
     * The state of the data set contents. Can be one of "READY", "CREATING", "SUCCEEDED" or "FAILED".
     */
    state?: DatasetContentState;
    /**
     * The reason the data set contents are in this state.
     */
    reason?: Reason;
  }
  export type DatasetContentSummaries = DatasetContentSummary[];
  export interface DatasetContentSummary {
    /**
     * The version of the data set contents.
     */
    version?: DatasetContentVersion;
    /**
     * The status of the data set contents.
     */
    status?: DatasetContentStatus;
    /**
     * The actual time the creation of the data set contents was started.
     */
    creationTime?: Timestamp;
    /**
     * The time the creation of the data set contents was scheduled to start.
     */
    scheduleTime?: Timestamp;
    /**
     * The time the dataset content status was updated to SUCCEEDED or FAILED.
     */
    completionTime?: Timestamp;
  }
  export type DatasetContentVersion = string;
  export interface DatasetContentVersionValue {
    /**
     * The name of the data set whose latest contents are used as input to the notebook or application.
     */
    datasetName: DatasetName;
  }
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
    /**
     * A list of triggers. A trigger causes data set content to be populated at a specified time interval or when another data set is populated. The list of triggers can be empty or contain up to five DataSetTrigger objects
     */
    triggers?: DatasetTriggers;
    /**
     * A list of "DataActionSummary" objects.
     */
    actions?: DatasetActionSummaries;
  }
  export interface DatasetTrigger {
    /**
     * The "Schedule" when the trigger is initiated.
     */
    schedule?: Schedule;
    /**
     * The data set whose content creation triggers the creation of this data set's contents.
     */
    dataset?: TriggeringDataset;
  }
  export type DatasetTriggers = DatasetTrigger[];
  export interface Datastore {
    /**
     * The name of the data store.
     */
    name?: DatastoreName;
    /**
     * Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created.
     */
    storage?: DatastoreStorage;
    /**
     * The ARN of the data store.
     */
    arn?: DatastoreArn;
    /**
     * The status of a data store:  CREATING  The data store is being created.  ACTIVE  The data store has been created and can be used.  DELETING  The data store is being deleted.  
     */
    status?: DatastoreStatus;
    /**
     * How long, in days, message data is kept for the data store. When "customerManagedS3" storage is selected, this parameter is ignored.
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
  export interface DatastoreStatistics {
    /**
     * The estimated size of the data store.
     */
    size?: EstimatedResourceSize;
  }
  export type DatastoreStatus = "CREATING"|"ACTIVE"|"DELETING"|string;
  export interface DatastoreStorage {
    /**
     * Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store.
     */
    serviceManagedS3?: ServiceManagedDatastoreS3Storage;
    /**
     * Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store.
     */
    customerManagedS3?: CustomerManagedDatastoreS3Storage;
  }
  export interface DatastoreStorageSummary {
    /**
     * Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service.
     */
    serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;
    /**
     * Used to store data store data in an S3 bucket that you manage.
     */
    customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;
  }
  export type DatastoreSummaries = DatastoreSummary[];
  export interface DatastoreSummary {
    /**
     * The name of the data store.
     */
    datastoreName?: DatastoreName;
    /**
     * Where data store data is stored.
     */
    datastoreStorage?: DatastoreStorageSummary;
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
  export interface DeltaTime {
    /**
     * The number of seconds of estimated "in flight" lag time of message data. When you create data set contents using message data from a specified time frame, some message data may still be "in flight" when processing begins, and so will not arrive in time to be processed. Use this field to make allowances for the "in flight" time of your message data, so that data not processed from a previous time frame will be included with the next time frame. Without this, missed message data would be excluded from processing during the next time frame as well, because its timestamp places it within the previous time frame.
     */
    offsetSeconds: OffsetSeconds;
    /**
     * An expression by which the time of the message data may be determined. This may be the name of a timestamp field, or a SQL expression which is used to derive the time the message data was generated.
     */
    timeExpression: TimeExpression;
  }
  export interface DescribeChannelRequest {
    /**
     * The name of the channel whose information is retrieved.
     */
    channelName: ChannelName;
    /**
     * If true, additional statistical information about the channel is included in the response. This feature cannot be used with a channel whose S3 storage is customer-managed.
     */
    includeStatistics?: IncludeStatisticsFlag;
  }
  export interface DescribeChannelResponse {
    /**
     * An object that contains information about the channel.
     */
    channel?: Channel;
    /**
     * Statistics about the channel. Included if the 'includeStatistics' parameter is set to true in the request.
     */
    statistics?: ChannelStatistics;
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
    /**
     * If true, additional statistical information about the data store is included in the response. This feature cannot be used with a data store whose S3 storage is customer-managed.
     */
    includeStatistics?: IncludeStatisticsFlag;
  }
  export interface DescribeDatastoreResponse {
    /**
     * Information about the data store.
     */
    datastore?: Datastore;
    /**
     * Additional statistical information about the data store. Included if the 'includeStatistics' parameter is set to true in the request.
     */
    statistics?: DatastoreStatistics;
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
  export type DoubleValue = number;
  export type EndTime = Date;
  export type EntryName = string;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface EstimatedResourceSize {
    /**
     * The estimated size of the resource in bytes.
     */
    estimatedSizeInBytes?: SizeInBytes;
    /**
     * The time when the estimate of the size of the resource was made.
     */
    estimatedOn?: Timestamp;
  }
  export interface FilterActivity {
    /**
     * The name of the 'filter' activity.
     */
    name: ActivityName;
    /**
     * An expression that looks like a SQL WHERE clause that must return a Boolean value.
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
  export interface GlueConfiguration {
    /**
     * The name of the table in your AWS Glue Data Catalog which is used to perform the ETL (extract, transform and load) operations. (An AWS Glue Data Catalog table contains partitioned data and descriptions of data sources and targets.)
     */
    tableName: GlueTableName;
    /**
     * The name of the database in your AWS Glue Data Catalog in which the table is located. (An AWS Glue Data Catalog database contains Glue Data tables.)
     */
    databaseName: GlueDatabaseName;
  }
  export type GlueDatabaseName = string;
  export type GlueTableName = string;
  export type Image = string;
  export type IncludeStatisticsFlag = boolean;
  export interface IotEventsDestinationConfiguration {
    /**
     * The name of the AWS IoT Events input to which data set contents are delivered.
     */
    inputName: IotEventsInputName;
    /**
     * The ARN of the role which grants AWS IoT Analytics permission to deliver data set contents to an AWS IoT Events input.
     */
    roleArn: RoleArn;
  }
  export type IotEventsInputName = string;
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
  export interface ListDatasetContentsRequest {
    /**
     * The name of the data set whose contents information you want to list.
     */
    datasetName: DatasetName;
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: MaxResults;
    /**
     * A filter to limit results to those data set contents whose creation is scheduled on or after the given time. See the field triggers.schedule in the CreateDataset request. (timestamp)
     */
    scheduledOnOrAfter?: Timestamp;
    /**
     * A filter to limit results to those data set contents whose creation is scheduled before the given time. See the field triggers.schedule in the CreateDataset request. (timestamp)
     */
    scheduledBefore?: Timestamp;
  }
  export interface ListDatasetContentsResponse {
    /**
     * Summary information about data set contents that have been created.
     */
    datasetContentSummaries?: DatasetContentSummaries;
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
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource whose tags you want to list.
     */
    resourceArn: ResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags (metadata) which you have assigned to the resource.
     */
    tags?: TagList;
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
     * The name of the attribute that contains the result of the math operation.
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
  export type MaxVersions = number;
  export interface Message {
    /**
     * The ID you wish to assign to the message. Each "messageId" must be unique within each batch sent.
     */
    messageId: MessageId;
    /**
     * The payload of the message. This may be a JSON string or a Base64-encoded string representing binary data (in which case you must decode it by means of a pipeline activity).
     */
    payload: MessagePayload;
  }
  export type MessageId = string;
  export type MessagePayload = Buffer|Uint8Array|Blob|string;
  export type MessagePayloads = MessagePayload[];
  export type Messages = Message[];
  export type NextToken = string;
  export type OffsetSeconds = number;
  export type OutputFileName = string;
  export interface OutputFileUriValue {
    /**
     * The URI of the location where data set contents are stored, usually the URI of a file in an S3 bucket.
     */
    fileName: OutputFileName;
  }
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
  export interface QueryFilter {
    /**
     * Used to limit data to that which has arrived since the last execution of the action.
     */
    deltaTime?: DeltaTime;
  }
  export type QueryFilters = QueryFilter[];
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
  export type ResourceArn = string;
  export interface ResourceConfiguration {
    /**
     * The type of the compute resource used to execute the "containerAction". Possible values are: ACU_1 (vCPU=4, memory=16GiB) or ACU_2 (vCPU=8, memory=32GiB).
     */
    computeType: ComputeType;
    /**
     * The size (in GB) of the persistent storage available to the resource instance used to execute the "containerAction" (min: 1, max: 50).
     */
    volumeSizeInGB: VolumeSizeInGB;
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
  export interface S3DestinationConfiguration {
    /**
     * The name of the Amazon S3 bucket to which data set contents are delivered.
     */
    bucket: BucketName;
    /**
     * The key of the data set contents object. Each object in an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key). To produce a unique key, you can use "!{iotanalytics:scheduledTime}" to insert the time of the scheduled SQL query run, or "!{iotanalytics:versioned} to insert a unique hash identifying the data set, for example: "/DataSet/!{iotanalytics:scheduledTime}/!{iotanalytics:versioned}.csv".
     */
    key: BucketKeyExpression;
    /**
     * Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service.
     */
    glueConfiguration?: GlueConfiguration;
    /**
     * The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 and AWS Glue resources.
     */
    roleArn: RoleArn;
  }
  export type S3KeyPrefix = string;
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
     * The expression that defines when to trigger an update. For more information, see  Schedule Expressions for Rules in the Amazon CloudWatch Events User Guide.
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
  export interface ServiceManagedChannelS3Storage {
  }
  export interface ServiceManagedChannelS3StorageSummary {
  }
  export interface ServiceManagedDatastoreS3Storage {
  }
  export interface ServiceManagedDatastoreS3StorageSummary {
  }
  export type SizeInBytes = number;
  export type SqlQuery = string;
  export interface SqlQueryDatasetAction {
    /**
     * A SQL query string.
     */
    sqlQuery: SqlQuery;
    /**
     * Pre-filters applied to message data.
     */
    filters?: QueryFilters;
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
  export type StringValue = string;
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
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The ARN of the resource whose tags you want to modify.
     */
    resourceArn: ResourceArn;
    /**
     * The new or modified tags for the resource.
     */
    tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TimeExpression = string;
  export type Timestamp = Date;
  export interface TriggeringDataset {
    /**
     * The name of the data set whose content generation triggers the new data set content generation.
     */
    name: DatasetName;
  }
  export type UnlimitedRetentionPeriod = boolean;
  export type UnlimitedVersioning = boolean;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource whose tags you want to remove.
     */
    resourceArn: ResourceArn;
    /**
     * The keys of those tags which you want to remove.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateChannelRequest {
    /**
     * The name of the channel to be updated.
     */
    channelName: ChannelName;
    /**
     * Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel.
     */
    channelStorage?: ChannelStorage;
    /**
     * How long, in days, message data is kept for the channel. The retention period cannot be updated if the channel's S3 storage is customer-managed.
     */
    retentionPeriod?: RetentionPeriod;
  }
  export interface UpdateDatasetRequest {
    /**
     * The name of the data set to update.
     */
    datasetName: DatasetName;
    /**
     * A list of "DatasetAction" objects.
     */
    actions: DatasetActions;
    /**
     * A list of "DatasetTrigger" objects. The list can be empty or can contain up to five DataSetTrigger objects.
     */
    triggers?: DatasetTriggers;
    /**
     * When data set contents are created they are delivered to destinations specified here.
     */
    contentDeliveryRules?: DatasetContentDeliveryRules;
    /**
     * How long, in days, data set contents are kept for the data set.
     */
    retentionPeriod?: RetentionPeriod;
    /**
     * [Optional] How many versions of data set contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the "retentionPeriod" parameter. (For more information, see https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)
     */
    versioningConfiguration?: VersioningConfiguration;
  }
  export interface UpdateDatastoreRequest {
    /**
     * The name of the data store to be updated.
     */
    datastoreName: DatastoreName;
    /**
     * How long, in days, message data is kept for the data store. The retention period cannot be updated if the data store's S3 storage is customer-managed.
     */
    retentionPeriod?: RetentionPeriod;
    /**
     * Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created.
     */
    datastoreStorage?: DatastoreStorage;
  }
  export interface UpdatePipelineRequest {
    /**
     * The name of the pipeline to update.
     */
    pipelineName: PipelineName;
    /**
     * A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data. The list can be 2-25 PipelineActivity objects and must contain both a channel and a datastore activity. Each entry in the list must contain only one activity, for example:  pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ] 
     */
    pipelineActivities: PipelineActivities;
  }
  export interface Variable {
    /**
     * The name of the variable.
     */
    name: VariableName;
    /**
     * The value of the variable as a string.
     */
    stringValue?: StringValue;
    /**
     * The value of the variable as a double (numeric).
     */
    doubleValue?: DoubleValue;
    /**
     * The value of the variable as a structure that specifies a data set content version.
     */
    datasetContentVersionValue?: DatasetContentVersionValue;
    /**
     * The value of the variable as a structure that specifies an output file URI.
     */
    outputFileUriValue?: OutputFileUriValue;
  }
  export type VariableName = string;
  export type Variables = Variable[];
  export interface VersioningConfiguration {
    /**
     * If true, unlimited versions of data set contents will be kept.
     */
    unlimited?: UnlimitedVersioning;
    /**
     * How many versions of data set contents will be kept. The "unlimited" parameter must be false.
     */
    maxVersions?: MaxVersions;
  }
  export type VolumeSizeInGB = number;
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
