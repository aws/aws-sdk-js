import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class CleanRoomsML extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CleanRoomsML.Types.ClientConfiguration)
  config: Config & CleanRoomsML.Types.ClientConfiguration;
  /**
   * Defines the information necessary to create an audience model. An audience model is a machine learning model that Clean Rooms ML trains to measure similarity between users. Clean Rooms ML manages training and storing the audience model. The audience model can be used in multiple calls to the StartAudienceGenerationJob API.
   */
  createAudienceModel(params: CleanRoomsML.Types.CreateAudienceModelRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.CreateAudienceModelResponse) => void): Request<CleanRoomsML.Types.CreateAudienceModelResponse, AWSError>;
  /**
   * Defines the information necessary to create an audience model. An audience model is a machine learning model that Clean Rooms ML trains to measure similarity between users. Clean Rooms ML manages training and storing the audience model. The audience model can be used in multiple calls to the StartAudienceGenerationJob API.
   */
  createAudienceModel(callback?: (err: AWSError, data: CleanRoomsML.Types.CreateAudienceModelResponse) => void): Request<CleanRoomsML.Types.CreateAudienceModelResponse, AWSError>;
  /**
   * Defines the information necessary to create a configured audience model.
   */
  createConfiguredAudienceModel(params: CleanRoomsML.Types.CreateConfiguredAudienceModelRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.CreateConfiguredAudienceModelResponse) => void): Request<CleanRoomsML.Types.CreateConfiguredAudienceModelResponse, AWSError>;
  /**
   * Defines the information necessary to create a configured audience model.
   */
  createConfiguredAudienceModel(callback?: (err: AWSError, data: CleanRoomsML.Types.CreateConfiguredAudienceModelResponse) => void): Request<CleanRoomsML.Types.CreateConfiguredAudienceModelResponse, AWSError>;
  /**
   * Defines the information necessary to create a training dataset, or seed audience. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation.
   */
  createTrainingDataset(params: CleanRoomsML.Types.CreateTrainingDatasetRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.CreateTrainingDatasetResponse) => void): Request<CleanRoomsML.Types.CreateTrainingDatasetResponse, AWSError>;
  /**
   * Defines the information necessary to create a training dataset, or seed audience. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation.
   */
  createTrainingDataset(callback?: (err: AWSError, data: CleanRoomsML.Types.CreateTrainingDatasetResponse) => void): Request<CleanRoomsML.Types.CreateTrainingDatasetResponse, AWSError>;
  /**
   * Deletes the specified audience generation job, and removes all data associated with the job.
   */
  deleteAudienceGenerationJob(params: CleanRoomsML.Types.DeleteAudienceGenerationJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified audience generation job, and removes all data associated with the job.
   */
  deleteAudienceGenerationJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specifies an audience model that you want to delete. You can't delete an audience model if there are any configured audience models that depend on the audience model.
   */
  deleteAudienceModel(params: CleanRoomsML.Types.DeleteAudienceModelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specifies an audience model that you want to delete. You can't delete an audience model if there are any configured audience models that depend on the audience model.
   */
  deleteAudienceModel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified configured audience model. You can't delete a configured audience model if there are any lookalike models that use the configured audience model. If you delete a configured audience model, it will be removed from any collaborations that it is associated to.
   */
  deleteConfiguredAudienceModel(params: CleanRoomsML.Types.DeleteConfiguredAudienceModelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified configured audience model. You can't delete a configured audience model if there are any lookalike models that use the configured audience model. If you delete a configured audience model, it will be removed from any collaborations that it is associated to.
   */
  deleteConfiguredAudienceModel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified configured audience model policy.
   */
  deleteConfiguredAudienceModelPolicy(params: CleanRoomsML.Types.DeleteConfiguredAudienceModelPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified configured audience model policy.
   */
  deleteConfiguredAudienceModelPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specifies a training dataset that you want to delete. You can't delete a training dataset if there are any audience models that depend on the training dataset. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation. This action deletes the metadata.
   */
  deleteTrainingDataset(params: CleanRoomsML.Types.DeleteTrainingDatasetRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Specifies a training dataset that you want to delete. You can't delete a training dataset if there are any audience models that depend on the training dataset. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation. This action deletes the metadata.
   */
  deleteTrainingDataset(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns information about an audience generation job.
   */
  getAudienceGenerationJob(params: CleanRoomsML.Types.GetAudienceGenerationJobRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.GetAudienceGenerationJobResponse) => void): Request<CleanRoomsML.Types.GetAudienceGenerationJobResponse, AWSError>;
  /**
   * Returns information about an audience generation job.
   */
  getAudienceGenerationJob(callback?: (err: AWSError, data: CleanRoomsML.Types.GetAudienceGenerationJobResponse) => void): Request<CleanRoomsML.Types.GetAudienceGenerationJobResponse, AWSError>;
  /**
   * Returns information about an audience model
   */
  getAudienceModel(params: CleanRoomsML.Types.GetAudienceModelRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.GetAudienceModelResponse) => void): Request<CleanRoomsML.Types.GetAudienceModelResponse, AWSError>;
  /**
   * Returns information about an audience model
   */
  getAudienceModel(callback?: (err: AWSError, data: CleanRoomsML.Types.GetAudienceModelResponse) => void): Request<CleanRoomsML.Types.GetAudienceModelResponse, AWSError>;
  /**
   * Returns information about a specified configured audience model.
   */
  getConfiguredAudienceModel(params: CleanRoomsML.Types.GetConfiguredAudienceModelRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.GetConfiguredAudienceModelResponse) => void): Request<CleanRoomsML.Types.GetConfiguredAudienceModelResponse, AWSError>;
  /**
   * Returns information about a specified configured audience model.
   */
  getConfiguredAudienceModel(callback?: (err: AWSError, data: CleanRoomsML.Types.GetConfiguredAudienceModelResponse) => void): Request<CleanRoomsML.Types.GetConfiguredAudienceModelResponse, AWSError>;
  /**
   * Returns information about a configured audience model policy.
   */
  getConfiguredAudienceModelPolicy(params: CleanRoomsML.Types.GetConfiguredAudienceModelPolicyRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.GetConfiguredAudienceModelPolicyResponse) => void): Request<CleanRoomsML.Types.GetConfiguredAudienceModelPolicyResponse, AWSError>;
  /**
   * Returns information about a configured audience model policy.
   */
  getConfiguredAudienceModelPolicy(callback?: (err: AWSError, data: CleanRoomsML.Types.GetConfiguredAudienceModelPolicyResponse) => void): Request<CleanRoomsML.Types.GetConfiguredAudienceModelPolicyResponse, AWSError>;
  /**
   * Returns information about a training dataset.
   */
  getTrainingDataset(params: CleanRoomsML.Types.GetTrainingDatasetRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.GetTrainingDatasetResponse) => void): Request<CleanRoomsML.Types.GetTrainingDatasetResponse, AWSError>;
  /**
   * Returns information about a training dataset.
   */
  getTrainingDataset(callback?: (err: AWSError, data: CleanRoomsML.Types.GetTrainingDatasetResponse) => void): Request<CleanRoomsML.Types.GetTrainingDatasetResponse, AWSError>;
  /**
   * Returns a list of the audience export jobs.
   */
  listAudienceExportJobs(params: CleanRoomsML.Types.ListAudienceExportJobsRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.ListAudienceExportJobsResponse) => void): Request<CleanRoomsML.Types.ListAudienceExportJobsResponse, AWSError>;
  /**
   * Returns a list of the audience export jobs.
   */
  listAudienceExportJobs(callback?: (err: AWSError, data: CleanRoomsML.Types.ListAudienceExportJobsResponse) => void): Request<CleanRoomsML.Types.ListAudienceExportJobsResponse, AWSError>;
  /**
   * Returns a list of audience generation jobs.
   */
  listAudienceGenerationJobs(params: CleanRoomsML.Types.ListAudienceGenerationJobsRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.ListAudienceGenerationJobsResponse) => void): Request<CleanRoomsML.Types.ListAudienceGenerationJobsResponse, AWSError>;
  /**
   * Returns a list of audience generation jobs.
   */
  listAudienceGenerationJobs(callback?: (err: AWSError, data: CleanRoomsML.Types.ListAudienceGenerationJobsResponse) => void): Request<CleanRoomsML.Types.ListAudienceGenerationJobsResponse, AWSError>;
  /**
   * Returns a list of audience models.
   */
  listAudienceModels(params: CleanRoomsML.Types.ListAudienceModelsRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.ListAudienceModelsResponse) => void): Request<CleanRoomsML.Types.ListAudienceModelsResponse, AWSError>;
  /**
   * Returns a list of audience models.
   */
  listAudienceModels(callback?: (err: AWSError, data: CleanRoomsML.Types.ListAudienceModelsResponse) => void): Request<CleanRoomsML.Types.ListAudienceModelsResponse, AWSError>;
  /**
   * Returns a list of the configured audience models.
   */
  listConfiguredAudienceModels(params: CleanRoomsML.Types.ListConfiguredAudienceModelsRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.ListConfiguredAudienceModelsResponse) => void): Request<CleanRoomsML.Types.ListConfiguredAudienceModelsResponse, AWSError>;
  /**
   * Returns a list of the configured audience models.
   */
  listConfiguredAudienceModels(callback?: (err: AWSError, data: CleanRoomsML.Types.ListConfiguredAudienceModelsResponse) => void): Request<CleanRoomsML.Types.ListConfiguredAudienceModelsResponse, AWSError>;
  /**
   * Returns a list of tags for a provided resource.
   */
  listTagsForResource(params: CleanRoomsML.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.ListTagsForResourceResponse) => void): Request<CleanRoomsML.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of tags for a provided resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: CleanRoomsML.Types.ListTagsForResourceResponse) => void): Request<CleanRoomsML.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of training datasets.
   */
  listTrainingDatasets(params: CleanRoomsML.Types.ListTrainingDatasetsRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.ListTrainingDatasetsResponse) => void): Request<CleanRoomsML.Types.ListTrainingDatasetsResponse, AWSError>;
  /**
   * Returns a list of training datasets.
   */
  listTrainingDatasets(callback?: (err: AWSError, data: CleanRoomsML.Types.ListTrainingDatasetsResponse) => void): Request<CleanRoomsML.Types.ListTrainingDatasetsResponse, AWSError>;
  /**
   * Create or update the resource policy for a configured audience model.
   */
  putConfiguredAudienceModelPolicy(params: CleanRoomsML.Types.PutConfiguredAudienceModelPolicyRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.PutConfiguredAudienceModelPolicyResponse) => void): Request<CleanRoomsML.Types.PutConfiguredAudienceModelPolicyResponse, AWSError>;
  /**
   * Create or update the resource policy for a configured audience model.
   */
  putConfiguredAudienceModelPolicy(callback?: (err: AWSError, data: CleanRoomsML.Types.PutConfiguredAudienceModelPolicyResponse) => void): Request<CleanRoomsML.Types.PutConfiguredAudienceModelPolicyResponse, AWSError>;
  /**
   * Export an audience of a specified size after you have generated an audience.
   */
  startAudienceExportJob(params: CleanRoomsML.Types.StartAudienceExportJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Export an audience of a specified size after you have generated an audience.
   */
  startAudienceExportJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Information necessary to start the audience generation job.
   */
  startAudienceGenerationJob(params: CleanRoomsML.Types.StartAudienceGenerationJobRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.StartAudienceGenerationJobResponse) => void): Request<CleanRoomsML.Types.StartAudienceGenerationJobResponse, AWSError>;
  /**
   * Information necessary to start the audience generation job.
   */
  startAudienceGenerationJob(callback?: (err: AWSError, data: CleanRoomsML.Types.StartAudienceGenerationJobResponse) => void): Request<CleanRoomsML.Types.StartAudienceGenerationJobResponse, AWSError>;
  /**
   * Adds metadata tags to a specified resource.
   */
  tagResource(params: CleanRoomsML.Types.TagResourceRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.TagResourceResponse) => void): Request<CleanRoomsML.Types.TagResourceResponse, AWSError>;
  /**
   * Adds metadata tags to a specified resource.
   */
  tagResource(callback?: (err: AWSError, data: CleanRoomsML.Types.TagResourceResponse) => void): Request<CleanRoomsML.Types.TagResourceResponse, AWSError>;
  /**
   * Removes metadata tags from a specified resource.
   */
  untagResource(params: CleanRoomsML.Types.UntagResourceRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.UntagResourceResponse) => void): Request<CleanRoomsML.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes metadata tags from a specified resource.
   */
  untagResource(callback?: (err: AWSError, data: CleanRoomsML.Types.UntagResourceResponse) => void): Request<CleanRoomsML.Types.UntagResourceResponse, AWSError>;
  /**
   * Provides the information necessary to update a configured audience model. Updates that impact audience generation jobs take effect when a new job starts, but do not impact currently running jobs.
   */
  updateConfiguredAudienceModel(params: CleanRoomsML.Types.UpdateConfiguredAudienceModelRequest, callback?: (err: AWSError, data: CleanRoomsML.Types.UpdateConfiguredAudienceModelResponse) => void): Request<CleanRoomsML.Types.UpdateConfiguredAudienceModelResponse, AWSError>;
  /**
   * Provides the information necessary to update a configured audience model. Updates that impact audience generation jobs take effect when a new job starts, but do not impact currently running jobs.
   */
  updateConfiguredAudienceModel(callback?: (err: AWSError, data: CleanRoomsML.Types.UpdateConfiguredAudienceModelResponse) => void): Request<CleanRoomsML.Types.UpdateConfiguredAudienceModelResponse, AWSError>;
}
declare namespace CleanRoomsML {
  export type AccountId = string;
  export interface AudienceDestination {
    /**
     * The Amazon S3 bucket and path for the configured audience.
     */
    s3Destination: S3ConfigMap;
  }
  export type AudienceExportJobList = AudienceExportJobSummary[];
  export type AudienceExportJobStatus = "CREATE_PENDING"|"CREATE_IN_PROGRESS"|"CREATE_FAILED"|"ACTIVE"|string;
  export interface AudienceExportJobSummary {
    /**
     * The Amazon Resource Name (ARN) of the audience generation job that was exported.
     */
    audienceGenerationJobArn: AudienceGenerationJobArn;
    audienceSize: AudienceSize;
    /**
     * The time at which the audience export job was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the audience export job.
     */
    description?: ResourceDescription;
    /**
     * The name of the audience export job.
     */
    name: NameString;
    /**
     * The Amazon S3 bucket where the audience export is stored.
     */
    outputLocation?: S3Path;
    /**
     * The status of the audience export job.
     */
    status: AudienceExportJobStatus;
    statusDetails?: StatusDetails;
    /**
     * The most recent time at which the audience export job was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export type AudienceGenerationJobArn = string;
  export interface AudienceGenerationJobDataSource {
    /**
     * The Amazon S3 bucket where the training data for the configured audience is stored.
     */
    dataSource: S3ConfigMap;
    /**
     * The ARN of the IAM role that can read the Amazon S3 bucket where the training data is stored.
     */
    roleArn: IamRoleArn;
  }
  export type AudienceGenerationJobList = AudienceGenerationJobSummary[];
  export type AudienceGenerationJobStatus = "CREATE_PENDING"|"CREATE_IN_PROGRESS"|"CREATE_FAILED"|"ACTIVE"|"DELETE_PENDING"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|string;
  export interface AudienceGenerationJobSummary {
    /**
     * The Amazon Resource Name (ARN) of the audience generation job.
     */
    audienceGenerationJobArn: AudienceGenerationJobArn;
    /**
     * The identifier of the collaboration that contains this audience generation job.
     */
    collaborationId?: UUID;
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that was used for this audience generation job.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
    /**
     * The time at which the audience generation job was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the audience generation job.
     */
    description?: ResourceDescription;
    /**
     * The name of the audience generation job.
     */
    name: NameString;
    /**
     * The AWS Account that submitted the job.
     */
    startedBy?: AccountId;
    /**
     * The status of the audience generation job.
     */
    status: AudienceGenerationJobStatus;
    /**
     * The most recent time at which the audience generation job was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export type AudienceModelArn = string;
  export type AudienceModelList = AudienceModelSummary[];
  export interface AudienceModelMetric {
    /**
     * The number of users that were used to generate these model metrics.
     */
    forTopKItemPredictions: Integer;
    /**
     * The audience model metric.
     */
    type: AudienceModelMetricType;
    /**
     * The value of the audience model metric
     */
    value: Double;
  }
  export type AudienceModelMetricType = "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN"|"MEAN_RECIPROCAL_RANK"|"PRECISION"|"RECALL"|string;
  export type AudienceModelMetrics = AudienceModelMetric[];
  export type AudienceModelStatus = "CREATE_PENDING"|"CREATE_IN_PROGRESS"|"CREATE_FAILED"|"ACTIVE"|"DELETE_PENDING"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|string;
  export interface AudienceModelSummary {
    /**
     * The Amazon Resource Name (ARN) of the audience model.
     */
    audienceModelArn: AudienceModelArn;
    /**
     * The time at which the audience model was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the audience model.
     */
    description?: ResourceDescription;
    /**
     * The name of the audience model.
     */
    name: NameString;
    /**
     * The status of the audience model.
     */
    status: AudienceModelStatus;
    /**
     * The Amazon Resource Name (ARN) of the training dataset that was used for the audience model.
     */
    trainingDatasetArn: TrainingDatasetArn;
    /**
     * The most recent time at which the audience model was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export interface AudienceQualityMetrics {
    /**
     * The relevance scores of the generated audience.
     */
    relevanceMetrics: RelevanceMetrics;
  }
  export interface AudienceSize {
    /**
     * Whether the audience size is defined in absolute terms or as a percentage. You can use the ABSOLUTE AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the Percentage AudienceSize to configure sizes in the range 1-100 percent.
     */
    type: AudienceSizeType;
    /**
     * Specify an audience size value.
     */
    value: AudienceSizeValue;
  }
  export type AudienceSizeBins = AudienceSizeValue[];
  export interface AudienceSizeConfig {
    /**
     * An array of the different audience output sizes.
     */
    audienceSizeBins: AudienceSizeBins;
    /**
     * Whether the audience output sizes are defined as an absolute number or a percentage.
     */
    audienceSizeType: AudienceSizeType;
  }
  export type AudienceSizeType = "ABSOLUTE"|"PERCENTAGE"|string;
  export type AudienceSizeValue = number;
  export type Boolean = boolean;
  export type ColumnName = string;
  export interface ColumnSchema {
    /**
     * The name of a column.
     */
    columnName: ColumnName;
    /**
     * The data type of column.
     */
    columnTypes: ColumnTypeList;
  }
  export type ColumnType = "USER_ID"|"ITEM_ID"|"TIMESTAMP"|"CATEGORICAL_FEATURE"|"NUMERICAL_FEATURE"|string;
  export type ColumnTypeList = ColumnType[];
  export type ConfiguredAudienceModelArn = string;
  export type ConfiguredAudienceModelList = ConfiguredAudienceModelSummary[];
  export interface ConfiguredAudienceModelOutputConfig {
    destination: AudienceDestination;
    /**
     * The ARN of the IAM role that can write the Amazon S3 bucket.
     */
    roleArn: IamRoleArn;
  }
  export type ConfiguredAudienceModelStatus = "ACTIVE"|string;
  export interface ConfiguredAudienceModelSummary {
    /**
     * The Amazon Resource Name (ARN) of the audience model that was used to create the configured audience model.
     */
    audienceModelArn: AudienceModelArn;
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that you are interested in.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
    /**
     * The time at which the configured audience model was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the configured audience model.
     */
    description?: ResourceDescription;
    /**
     * The name of the configured audience model.
     */
    name: NameString;
    /**
     * The output configuration of the configured audience model.
     */
    outputConfig: ConfiguredAudienceModelOutputConfig;
    /**
     * The status of the configured audience model.
     */
    status: ConfiguredAudienceModelStatus;
    /**
     * The most recent time at which the configured audience model was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export interface CreateAudienceModelRequest {
    /**
     * The description of the audience model.
     */
    description?: ResourceDescription;
    /**
     * The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and the associated data.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The name of the audience model resource.
     */
    name: NameString;
    /**
     * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50.   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8.   Maximum value length - 256 Unicode characters in UTF-8.   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.  
     */
    tags?: TagMap;
    /**
     * The end date and time of the training window.
     */
    trainingDataEndTime?: SyntheticTimestamp_date_time;
    /**
     * The start date and time of the training window.
     */
    trainingDataStartTime?: SyntheticTimestamp_date_time;
    /**
     * The Amazon Resource Name (ARN) of the training dataset for this audience model.
     */
    trainingDatasetArn: TrainingDatasetArn;
  }
  export interface CreateAudienceModelResponse {
    /**
     * The Amazon Resource Name (ARN) of the audience model.
     */
    audienceModelArn: AudienceModelArn;
  }
  export interface CreateConfiguredAudienceModelRequest {
    /**
     * The Amazon Resource Name (ARN) of the audience model to use for the configured audience model.
     */
    audienceModelArn: AudienceModelArn;
    /**
     * Configure the list of output sizes of audiences that can be created using this configured audience model. A request to StartAudienceGenerationJob that uses this configured audience model must have an audienceSize selected from this list. You can use the ABSOLUTE AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the Percentage AudienceSize to configure sizes in the range 1-100 percent.
     */
    audienceSizeConfig?: AudienceSizeConfig;
    /**
     * Configure how the service tags audience generation jobs created using this configured audience model. If you specify NONE, the tags from the StartAudienceGenerationJob request determine the tags of the audience generation job. If you specify FROM_PARENT_RESOURCE, the audience generation job inherits the tags from the configured audience model, by default. Tags in the StartAudienceGenerationJob will override the default.
     */
    childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
    /**
     * The description of the configured audience model.
     */
    description?: ResourceDescription;
    /**
     * The minimum number of users from the seed audience that must match with users in the training data of the audience model.
     */
    minMatchingSeedSize?: MinMatchingSeedSize;
    /**
     * The name of the configured audience model.
     */
    name: NameString;
    /**
     * Configure the Amazon S3 location and IAM Role for audiences created using this configured audience model. Each audience will have a unique location. The IAM Role must have s3:PutObject permission on the destination Amazon S3 location. If the destination is protected with Amazon S3 KMS-SSE, then the Role must also have the required KMS permissions.
     */
    outputConfig: ConfiguredAudienceModelOutputConfig;
    /**
     * Whether audience metrics are shared.
     */
    sharedAudienceMetrics: MetricsList;
    /**
     * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50.   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8.   Maximum value length - 256 Unicode characters in UTF-8.   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.  
     */
    tags?: TagMap;
  }
  export interface CreateConfiguredAudienceModelResponse {
    /**
     * The Amazon Resource Name (ARN) of the configured audience model.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
  }
  export interface CreateTrainingDatasetRequest {
    /**
     * The description of the training dataset.
     */
    description?: ResourceDescription;
    /**
     * The name of the training dataset. This name must be unique in your account and region.
     */
    name: NameString;
    /**
     * The ARN of the IAM role that Clean Rooms ML can assume to read the data referred to in the dataSource field of each dataset. Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an AccessDeniedException error.
     */
    roleArn: IamRoleArn;
    /**
     * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50.   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8.   Maximum value length - 256 Unicode characters in UTF-8.   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.  
     */
    tags?: TagMap;
    /**
     * An array of information that lists the Dataset objects, which specifies the dataset type and details on its location and schema. You must provide a role that has read access to these tables.
     */
    trainingData: CreateTrainingDatasetRequestTrainingDataList;
  }
  export type CreateTrainingDatasetRequestTrainingDataList = Dataset[];
  export interface CreateTrainingDatasetResponse {
    /**
     * The Amazon Resource Name (ARN) of the training dataset resource.
     */
    trainingDatasetArn: TrainingDatasetArn;
  }
  export interface DataSource {
    /**
     * A GlueDataSource object that defines the catalog ID, database name, and table name for the training data.
     */
    glueDataSource: GlueDataSource;
  }
  export interface Dataset {
    /**
     * A DatasetInputConfig object that defines the data source and schema mapping.
     */
    inputConfig: DatasetInputConfig;
    /**
     * What type of information is found in the dataset.
     */
    type: DatasetType;
  }
  export interface DatasetInputConfig {
    /**
     * A DataSource object that specifies the Glue data source for the training data.
     */
    dataSource: DataSource;
    /**
     * The schema information for the training data.
     */
    schema: DatasetInputConfigSchemaList;
  }
  export type DatasetInputConfigSchemaList = ColumnSchema[];
  export type DatasetList = Dataset[];
  export type DatasetType = "INTERACTIONS"|string;
  export interface DeleteAudienceGenerationJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the audience generation job that you want to delete.
     */
    audienceGenerationJobArn: AudienceGenerationJobArn;
  }
  export interface DeleteAudienceModelRequest {
    /**
     * The Amazon Resource Name (ARN) of the audience model that you want to delete.
     */
    audienceModelArn: AudienceModelArn;
  }
  export interface DeleteConfiguredAudienceModelPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the configured audience model policy that you want to delete.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
  }
  export interface DeleteConfiguredAudienceModelRequest {
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that you want to delete.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
  }
  export interface DeleteTrainingDatasetRequest {
    /**
     * The Amazon Resource Name (ARN) of the training dataset that you want to delete.
     */
    trainingDatasetArn: TrainingDatasetArn;
  }
  export type Double = number;
  export interface GetAudienceGenerationJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the audience generation job that you are interested in.
     */
    audienceGenerationJobArn: AudienceGenerationJobArn;
  }
  export interface GetAudienceGenerationJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the audience generation job.
     */
    audienceGenerationJobArn: AudienceGenerationJobArn;
    /**
     * The identifier of the collaboration that this audience generation job is associated with.
     */
    collaborationId?: UUID;
    /**
     * The Amazon Resource Name (ARN) of the configured audience model used for this audience generation job.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
    /**
     * The time at which the audience generation job was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the audience generation job.
     */
    description?: ResourceDescription;
    /**
     * Configure whether the seed users are included in the output audience. By default, Clean Rooms ML removes seed users from the output audience. If you specify TRUE, the seed users will appear first in the output. Clean Rooms ML does not explicitly reveal whether a user was in the seed, but the recipient of the audience will know that the first minimumSeedSize count of users are from the seed.
     */
    includeSeedInOutput?: Boolean;
    /**
     * The relevance scores for different audience sizes. 
     */
    metrics?: AudienceQualityMetrics;
    /**
     * The name of the audience generation job.
     */
    name: NameString;
    /**
     * The seed audience that was used for this audience generation job. This field will be null if the account calling the API is the account that started this audience generation job. 
     */
    seedAudience?: AudienceGenerationJobDataSource;
    /**
     * The AWS account that started this audience generation job.
     */
    startedBy?: AccountId;
    /**
     * The status of the audience generation job.
     */
    status: AudienceGenerationJobStatus;
    /**
     * Details about the status of the audience generation job.
     */
    statusDetails?: StatusDetails;
    /**
     * The tags that are associated to this audience generation job.
     */
    tags?: TagMap;
    /**
     * The most recent time at which the audience generation job was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export interface GetAudienceModelRequest {
    /**
     * The Amazon Resource Name (ARN) of the audience model that you are interested in.
     */
    audienceModelArn: AudienceModelArn;
  }
  export interface GetAudienceModelResponse {
    /**
     * The Amazon Resource Name (ARN) of the audience model.
     */
    audienceModelArn: AudienceModelArn;
    /**
     * The time at which the audience model was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the audience model.
     */
    description?: ResourceDescription;
    /**
     * The KMS key ARN used for the audience model.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * Accuracy metrics for the model.
     */
    metrics?: AudienceModelMetrics;
    /**
     * The name of the audience model.
     */
    name: NameString;
    /**
     * The status of the audience model.
     */
    status: AudienceModelStatus;
    /**
     * Details about the status of the audience model.
     */
    statusDetails?: StatusDetails;
    /**
     * The tags that are assigned to the audience model.
     */
    tags?: TagMap;
    /**
     * The end date specified for the training window.
     */
    trainingDataEndTime?: SyntheticTimestamp_date_time;
    /**
     * The start date specified for the training window.
     */
    trainingDataStartTime?: SyntheticTimestamp_date_time;
    /**
     * The Amazon Resource Name (ARN) of the training dataset that was used for this audience model.
     */
    trainingDatasetArn: TrainingDatasetArn;
    /**
     * The most recent time at which the audience model was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export interface GetConfiguredAudienceModelPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that you are interested in.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
  }
  export interface GetConfiguredAudienceModelPolicyResponse {
    /**
     * The Amazon Resource Name (ARN) of the configured audience model.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
    /**
     * The configured audience model policy. This is a JSON IAM resource policy.
     */
    configuredAudienceModelPolicy: ResourcePolicy;
    /**
     * A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.
     */
    policyHash: Hash;
  }
  export interface GetConfiguredAudienceModelRequest {
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that you are interested in.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
  }
  export interface GetConfiguredAudienceModelResponse {
    /**
     * The Amazon Resource Name (ARN) of the audience model used for this configured audience model.
     */
    audienceModelArn: AudienceModelArn;
    /**
     * The list of output sizes of audiences that can be created using this configured audience model. A request to StartAudienceGenerationJob that uses this configured audience model must have an audienceSize selected from this list. You can use the ABSOLUTE AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the Percentage AudienceSize to configure sizes in the range 1-100 percent.
     */
    audienceSizeConfig?: AudienceSizeConfig;
    /**
     * Provides the childResourceTagOnCreatePolicy that was used for this configured audience model.
     */
    childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
    /**
     * The Amazon Resource Name (ARN) of the configured audience model.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
    /**
     * The time at which the configured audience model was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the configured audience model.
     */
    description?: ResourceDescription;
    /**
     * The minimum number of users from the seed audience that must match with users in the training data of the audience model.
     */
    minMatchingSeedSize?: MinMatchingSeedSize;
    /**
     * The name of the configured audience model.
     */
    name: NameString;
    /**
     * The output configuration of the configured audience model
     */
    outputConfig: ConfiguredAudienceModelOutputConfig;
    /**
     * Whether audience metrics are shared.
     */
    sharedAudienceMetrics: MetricsList;
    /**
     * The status of the configured audience model.
     */
    status: ConfiguredAudienceModelStatus;
    /**
     * The tags that are associated to this configured audience model.
     */
    tags?: TagMap;
    /**
     * The most recent time at which the configured audience model was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export interface GetTrainingDatasetRequest {
    /**
     * The Amazon Resource Name (ARN) of the training dataset that you are interested in.
     */
    trainingDatasetArn: TrainingDatasetArn;
  }
  export interface GetTrainingDatasetResponse {
    /**
     * The time at which the training dataset was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the training dataset.
     */
    description?: ResourceDescription;
    /**
     * The name of the training dataset.
     */
    name: NameString;
    /**
     * The IAM role used to read the training data.
     */
    roleArn: IamRoleArn;
    /**
     * The status of the training dataset.
     */
    status: TrainingDatasetStatus;
    /**
     * The tags that are assigned to this training dataset.
     */
    tags?: TagMap;
    /**
     * Metadata about the requested training data. 
     */
    trainingData: DatasetList;
    /**
     * The Amazon Resource Name (ARN) of the training dataset.
     */
    trainingDatasetArn: TrainingDatasetArn;
    /**
     * The most recent time at which the training dataset was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export interface GlueDataSource {
    /**
     * The Glue catalog that contains the training data.
     */
    catalogId?: AccountId;
    /**
     * The Glue database that contains the training data.
     */
    databaseName: GlueDatabaseName;
    /**
     * The Glue table that contains the training data.
     */
    tableName: GlueTableName;
  }
  export type GlueDatabaseName = string;
  export type GlueTableName = string;
  export type Hash = string;
  export type IamRoleArn = string;
  export type Integer = number;
  export type KmsKeyArn = string;
  export interface ListAudienceExportJobsRequest {
    /**
     * The Amazon Resource Name (ARN) of the audience generation job that you are interested in.
     */
    audienceGenerationJobArn?: AudienceGenerationJobArn;
    /**
     * The maximum size of the results that is returned per call.
     */
    maxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAudienceExportJobsResponse {
    /**
     * The audience export jobs that match the request.
     */
    audienceExportJobs: AudienceExportJobList;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAudienceGenerationJobsRequest {
    /**
     * The identifier of the collaboration that contains the audience generation jobs that you are interested in.
     */
    collaborationId?: UUID;
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that was used for the audience generation jobs that you are interested in.
     */
    configuredAudienceModelArn?: ConfiguredAudienceModelArn;
    /**
     * The maximum size of the results that is returned per call.
     */
    maxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAudienceGenerationJobsResponse {
    /**
     * The audience generation jobs that match the request.
     */
    audienceGenerationJobs: AudienceGenerationJobList;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAudienceModelsRequest {
    /**
     * The maximum size of the results that is returned per call.
     */
    maxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAudienceModelsResponse {
    /**
     * The audience models that match the request.
     */
    audienceModels: AudienceModelList;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListConfiguredAudienceModelsRequest {
    /**
     * The maximum size of the results that is returned per call.
     */
    maxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListConfiguredAudienceModelsResponse {
    /**
     * The configured audience models.
     */
    configuredAudienceModels: ConfiguredAudienceModelList;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you are interested in.
     */
    resourceArn: TaggableArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags that are associated with the resource.
     */
    tags: TagMap;
  }
  export interface ListTrainingDatasetsRequest {
    /**
     * The maximum size of the results that is returned per call.
     */
    maxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListTrainingDatasetsResponse {
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The training datasets that match the request.
     */
    trainingDatasets: TrainingDatasetList;
  }
  export type MaxResults = number;
  export type MetricsList = SharedAudienceMetrics[];
  export type MinMatchingSeedSize = number;
  export type NameString = string;
  export type NextToken = string;
  export type PolicyExistenceCondition = "POLICY_MUST_EXIST"|"POLICY_MUST_NOT_EXIST"|string;
  export interface PutConfiguredAudienceModelPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that the resource policy will govern.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
    /**
     * The IAM resource policy.
     */
    configuredAudienceModelPolicy: ResourcePolicy;
    /**
     * Use this to prevent unexpected concurrent modification of the policy.
     */
    policyExistenceCondition?: PolicyExistenceCondition;
    /**
     * A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.
     */
    previousPolicyHash?: Hash;
  }
  export interface PutConfiguredAudienceModelPolicyResponse {
    /**
     * The IAM resource policy.
     */
    configuredAudienceModelPolicy: ResourcePolicy;
    /**
     * A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.
     */
    policyHash: Hash;
  }
  export interface RelevanceMetric {
    audienceSize: AudienceSize;
    /**
     * The relevance score of the generated audience.
     */
    score?: Double;
  }
  export type RelevanceMetrics = RelevanceMetric[];
  export type ResourceDescription = string;
  export type ResourcePolicy = string;
  export interface S3ConfigMap {
    /**
     * The Amazon S3 location URI.
     */
    s3Uri: S3Path;
  }
  export type S3Path = string;
  export type SharedAudienceMetrics = "ALL"|"NONE"|string;
  export interface StartAudienceExportJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the audience generation job that you want to export.
     */
    audienceGenerationJobArn: AudienceGenerationJobArn;
    audienceSize: AudienceSize;
    /**
     * The description of the audience export job.
     */
    description?: ResourceDescription;
    /**
     * The name of the audience export job.
     */
    name: NameString;
  }
  export interface StartAudienceGenerationJobRequest {
    /**
     * The identifier of the collaboration that contains the audience generation job.
     */
    collaborationId?: UUID;
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that is used for this audience generation job.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
    /**
     * The description of the audience generation job.
     */
    description?: ResourceDescription;
    /**
     * Whether the seed audience is included in the audience generation output.
     */
    includeSeedInOutput?: Boolean;
    /**
     * The name of the audience generation job.
     */
    name: NameString;
    /**
     * The seed audience that is used to generate the audience.
     */
    seedAudience: AudienceGenerationJobDataSource;
    /**
     * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50.   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8.   Maximum value length - 256 Unicode characters in UTF-8.   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.  
     */
    tags?: TagMap;
  }
  export interface StartAudienceGenerationJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the audience generation job.
     */
    audienceGenerationJobArn: AudienceGenerationJobArn;
  }
  export interface StatusDetails {
    /**
     * The error message that was returned. The message is intended for human consumption and can change at any time. Use the statusCode for programmatic error handling.
     */
    message?: String;
    /**
     * The status code that was returned. The status code is intended for programmatic error handling. Clean Rooms ML will not change the status code for existing error conditions.
     */
    statusCode?: String;
  }
  export type String = string;
  export type SyntheticTimestamp_date_time = Date;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export type TagOnCreatePolicy = "FROM_PARENT_RESOURCE"|"NONE"|string;
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to assign tags.
     */
    resourceArn: TaggableArn;
    /**
     * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50.   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8.   Maximum value length - 256 Unicode characters in UTF-8.   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.  
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TaggableArn = string;
  export type TrainingDatasetArn = string;
  export type TrainingDatasetList = TrainingDatasetSummary[];
  export type TrainingDatasetStatus = "ACTIVE"|string;
  export interface TrainingDatasetSummary {
    /**
     * The time at which the training dataset was created.
     */
    createTime: SyntheticTimestamp_date_time;
    /**
     * The description of the training dataset.
     */
    description?: ResourceDescription;
    /**
     * The name of the training dataset.
     */
    name: NameString;
    /**
     * The status of the training dataset.
     */
    status: TrainingDatasetStatus;
    /**
     * The Amazon Resource Name (ARN) of the training dataset.
     */
    trainingDatasetArn: TrainingDatasetArn;
    /**
     * The most recent time at which the training dataset was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export type UUID = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
     */
    resourceArn: TaggableArn;
    /**
     * The key values of tags that you want to remove.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateConfiguredAudienceModelRequest {
    /**
     * The Amazon Resource Name (ARN) of the new audience model that you want to use.
     */
    audienceModelArn?: AudienceModelArn;
    /**
     * The new audience size configuration.
     */
    audienceSizeConfig?: AudienceSizeConfig;
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that you want to update.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
    /**
     * The new description of the configured audience model.
     */
    description?: ResourceDescription;
    /**
     * The minimum number of users from the seed audience that must match with users in the training data of the audience model.
     */
    minMatchingSeedSize?: MinMatchingSeedSize;
    /**
     * The new output configuration.
     */
    outputConfig?: ConfiguredAudienceModelOutputConfig;
    /**
     * The new value for whether to share audience metrics.
     */
    sharedAudienceMetrics?: MetricsList;
  }
  export interface UpdateConfiguredAudienceModelResponse {
    /**
     * The Amazon Resource Name (ARN) of the configured audience model that was updated.
     */
    configuredAudienceModelArn: ConfiguredAudienceModelArn;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-09-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CleanRoomsML client.
   */
  export import Types = CleanRoomsML;
}
export = CleanRoomsML;
