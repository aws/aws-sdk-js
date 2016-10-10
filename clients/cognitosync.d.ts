import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class CognitoSync extends Service {
  /**
   * Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  bulkPublish(params: CognitoSync.BulkPublishRequest, callback?: (err: AWSError, data: CognitoSync.BulkPublishResponse) => void): Request<CognitoSync.BulkPublishResponse, AWSError>;
  /**
   * Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  bulkPublish(callback?: (err: AWSError, data: CognitoSync.BulkPublishResponse) => void): Request<CognitoSync.BulkPublishResponse, AWSError>;
  /**
   * Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
   */
  deleteDataset(params: CognitoSync.DeleteDatasetRequest, callback?: (err: AWSError, data: CognitoSync.DeleteDatasetResponse) => void): Request<CognitoSync.DeleteDatasetResponse, AWSError>;
  /**
   * Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
   */
  deleteDataset(callback?: (err: AWSError, data: CognitoSync.DeleteDatasetResponse) => void): Request<CognitoSync.DeleteDatasetResponse, AWSError>;
  /**
   * Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.
   */
  describeDataset(params: CognitoSync.DescribeDatasetRequest, callback?: (err: AWSError, data: CognitoSync.DescribeDatasetResponse) => void): Request<CognitoSync.DescribeDatasetResponse, AWSError>;
  /**
   * Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.
   */
  describeDataset(callback?: (err: AWSError, data: CognitoSync.DescribeDatasetResponse) => void): Request<CognitoSync.DescribeDatasetResponse, AWSError>;
  /**
   * Gets usage details (for example, data storage) about a particular identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  describeIdentityPoolUsage(params: CognitoSync.DescribeIdentityPoolUsageRequest, callback?: (err: AWSError, data: CognitoSync.DescribeIdentityPoolUsageResponse) => void): Request<CognitoSync.DescribeIdentityPoolUsageResponse, AWSError>;
  /**
   * Gets usage details (for example, data storage) about a particular identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  describeIdentityPoolUsage(callback?: (err: AWSError, data: CognitoSync.DescribeIdentityPoolUsageResponse) => void): Request<CognitoSync.DescribeIdentityPoolUsageResponse, AWSError>;
  /**
   * Gets usage information for an identity, including number of datasets and data usage. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
   */
  describeIdentityUsage(params: CognitoSync.DescribeIdentityUsageRequest, callback?: (err: AWSError, data: CognitoSync.DescribeIdentityUsageResponse) => void): Request<CognitoSync.DescribeIdentityUsageResponse, AWSError>;
  /**
   * Gets usage information for an identity, including number of datasets and data usage. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
   */
  describeIdentityUsage(callback?: (err: AWSError, data: CognitoSync.DescribeIdentityUsageResponse) => void): Request<CognitoSync.DescribeIdentityUsageResponse, AWSError>;
  /**
   * Get the status of the last BulkPublish operation for an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  getBulkPublishDetails(params: CognitoSync.GetBulkPublishDetailsRequest, callback?: (err: AWSError, data: CognitoSync.GetBulkPublishDetailsResponse) => void): Request<CognitoSync.GetBulkPublishDetailsResponse, AWSError>;
  /**
   * Get the status of the last BulkPublish operation for an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  getBulkPublishDetails(callback?: (err: AWSError, data: CognitoSync.GetBulkPublishDetailsResponse) => void): Request<CognitoSync.GetBulkPublishDetailsResponse, AWSError>;
  /**
   * Gets the events and the corresponding Lambda functions associated with an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  getCognitoEvents(params: CognitoSync.GetCognitoEventsRequest, callback?: (err: AWSError, data: CognitoSync.GetCognitoEventsResponse) => void): Request<CognitoSync.GetCognitoEventsResponse, AWSError>;
  /**
   * Gets the events and the corresponding Lambda functions associated with an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  getCognitoEvents(callback?: (err: AWSError, data: CognitoSync.GetCognitoEventsResponse) => void): Request<CognitoSync.GetCognitoEventsResponse, AWSError>;
  /**
   * Gets the configuration settings of an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  getIdentityPoolConfiguration(params: CognitoSync.GetIdentityPoolConfigurationRequest, callback?: (err: AWSError, data: CognitoSync.GetIdentityPoolConfigurationResponse) => void): Request<CognitoSync.GetIdentityPoolConfigurationResponse, AWSError>;
  /**
   * Gets the configuration settings of an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  getIdentityPoolConfiguration(callback?: (err: AWSError, data: CognitoSync.GetIdentityPoolConfigurationResponse) => void): Request<CognitoSync.GetIdentityPoolConfigurationResponse, AWSError>;
  /**
   * Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.
   */
  listDatasets(params: CognitoSync.ListDatasetsRequest, callback?: (err: AWSError, data: CognitoSync.ListDatasetsResponse) => void): Request<CognitoSync.ListDatasetsResponse, AWSError>;
  /**
   * Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.
   */
  listDatasets(callback?: (err: AWSError, data: CognitoSync.ListDatasetsResponse) => void): Request<CognitoSync.ListDatasetsResponse, AWSError>;
  /**
   * Gets a list of identity pools registered with Cognito. ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.
   */
  listIdentityPoolUsage(params: CognitoSync.ListIdentityPoolUsageRequest, callback?: (err: AWSError, data: CognitoSync.ListIdentityPoolUsageResponse) => void): Request<CognitoSync.ListIdentityPoolUsageResponse, AWSError>;
  /**
   * Gets a list of identity pools registered with Cognito. ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.
   */
  listIdentityPoolUsage(callback?: (err: AWSError, data: CognitoSync.ListIdentityPoolUsageResponse) => void): Request<CognitoSync.ListIdentityPoolUsageResponse, AWSError>;
  /**
   * Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.
   */
  listRecords(params: CognitoSync.ListRecordsRequest, callback?: (err: AWSError, data: CognitoSync.ListRecordsResponse) => void): Request<CognitoSync.ListRecordsResponse, AWSError>;
  /**
   * Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.
   */
  listRecords(callback?: (err: AWSError, data: CognitoSync.ListRecordsResponse) => void): Request<CognitoSync.ListRecordsResponse, AWSError>;
  /**
   * Registers a device to receive push sync notifications. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
   */
  registerDevice(params: CognitoSync.RegisterDeviceRequest, callback?: (err: AWSError, data: CognitoSync.RegisterDeviceResponse) => void): Request<CognitoSync.RegisterDeviceResponse, AWSError>;
  /**
   * Registers a device to receive push sync notifications. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
   */
  registerDevice(callback?: (err: AWSError, data: CognitoSync.RegisterDeviceResponse) => void): Request<CognitoSync.RegisterDeviceResponse, AWSError>;
  /**
   * Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  setCognitoEvents(params: CognitoSync.SetCognitoEventsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  setCognitoEvents(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the necessary configuration for push sync. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  setIdentityPoolConfiguration(params: CognitoSync.SetIdentityPoolConfigurationRequest, callback?: (err: AWSError, data: CognitoSync.SetIdentityPoolConfigurationResponse) => void): Request<CognitoSync.SetIdentityPoolConfigurationResponse, AWSError>;
  /**
   * Sets the necessary configuration for push sync. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
   */
  setIdentityPoolConfiguration(callback?: (err: AWSError, data: CognitoSync.SetIdentityPoolConfigurationResponse) => void): Request<CognitoSync.SetIdentityPoolConfigurationResponse, AWSError>;
  /**
   * Subscribes to receive notifications when a dataset is modified by another device. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
   */
  subscribeToDataset(params: CognitoSync.SubscribeToDatasetRequest, callback?: (err: AWSError, data: CognitoSync.SubscribeToDatasetResponse) => void): Request<CognitoSync.SubscribeToDatasetResponse, AWSError>;
  /**
   * Subscribes to receive notifications when a dataset is modified by another device. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
   */
  subscribeToDataset(callback?: (err: AWSError, data: CognitoSync.SubscribeToDatasetResponse) => void): Request<CognitoSync.SubscribeToDatasetResponse, AWSError>;
  /**
   * Unsubscribes from receiving notifications when a dataset is modified by another device. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
   */
  unsubscribeFromDataset(params: CognitoSync.UnsubscribeFromDatasetRequest, callback?: (err: AWSError, data: CognitoSync.UnsubscribeFromDatasetResponse) => void): Request<CognitoSync.UnsubscribeFromDatasetResponse, AWSError>;
  /**
   * Unsubscribes from receiving notifications when a dataset is modified by another device. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
   */
  unsubscribeFromDataset(callback?: (err: AWSError, data: CognitoSync.UnsubscribeFromDatasetResponse) => void): Request<CognitoSync.UnsubscribeFromDatasetResponse, AWSError>;
  /**
   * Posts updates to records and adds and deletes records for a dataset and user. The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count. For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
   */
  updateRecords(params: CognitoSync.UpdateRecordsRequest, callback?: (err: AWSError, data: CognitoSync.UpdateRecordsResponse) => void): Request<CognitoSync.UpdateRecordsResponse, AWSError>;
  /**
   * Posts updates to records and adds and deletes records for a dataset and user. The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count. For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
   */
  updateRecords(callback?: (err: AWSError, data: CognitoSync.UpdateRecordsResponse) => void): Request<CognitoSync.UpdateRecordsResponse, AWSError>;
}
declare namespace CognitoSync {
  export type ApplicationArn = string;
  export type ApplicationArnList = ApplicationArn[];
  export type AssumeRoleArn = string;
  export type Boolean = boolean;
  export interface BulkPublishRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface BulkPublishResponse {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId?: IdentityPoolId;
  }
  export type BulkPublishStatus = string;
  export type ClientContext = string;
  export type CognitoEventType = string;
  export interface CognitoStreams {
    /**
     * The name of the Cognito stream to receive updates. This stream must be in the developers account and in the same region as the identity pool.
     */
    StreamName?: StreamName;
    /**
     * The ARN of the role Amazon Cognito can assume in order to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke PutRecord on your Cognito stream.
     */
    RoleArn?: AssumeRoleArn;
    /**
     * Status of the Cognito streams. Valid values are: ENABLED - Streaming of updates to identity pool is enabled. DISABLED - Streaming of updates to identity pool is disabled. Bulk publish will also fail if StreamingStatus is DISABLED.
     */
    StreamingStatus?: StreamingStatus;
  }
  export interface Dataset {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityId?: IdentityId;
    /**
     * A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
     */
    DatasetName?: DatasetName;
    /**
     * Date on which the dataset was created.
     */
    CreationDate?: Date;
    /**
     * Date when the dataset was last modified.
     */
    LastModifiedDate?: Date;
    /**
     * The device that made the last change to this dataset.
     */
    LastModifiedBy?: String;
    /**
     * Total size in bytes of the records in this dataset.
     */
    DataStorage?: Long;
    /**
     * Number of records in this dataset.
     */
    NumRecords?: Long;
  }
  export type DatasetList = Dataset[];
  export type DatasetName = string;
  export interface DeleteDatasetRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityId?: IdentityId;
    /**
     * A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
     */
    DatasetName?: DatasetName;
  }
  export interface DeleteDatasetResponse {
    /**
     * A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
     */
    Dataset?: Dataset;
  }
  export interface DescribeDatasetRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityId?: IdentityId;
    /**
     * A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
     */
    DatasetName?: DatasetName;
  }
  export interface DescribeDatasetResponse {
    /**
     * Meta data for a collection of data for an identity. An identity can have multiple datasets. A dataset can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
     */
    Dataset?: Dataset;
  }
  export interface DescribeIdentityPoolUsageRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface DescribeIdentityPoolUsageResponse {
    /**
     * Information about the usage of the identity pool.
     */
    IdentityPoolUsage?: IdentityPoolUsage;
  }
  export interface DescribeIdentityUsageRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityId?: IdentityId;
  }
  export interface DescribeIdentityUsageResponse {
    /**
     * Usage information for the identity.
     */
    IdentityUsage?: IdentityUsage;
  }
  export type DeviceId = string;
  export type Events = {[key: string]: LambdaFunctionArn};
  export type ExceptionMessage = string;
  export interface GetBulkPublishDetailsRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface GetBulkPublishDetailsResponse {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * The date/time at which the last bulk publish was initiated.
     */
    BulkPublishStartTime?: Date;
    /**
     * If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.
     */
    BulkPublishCompleteTime?: Date;
    /**
     * Status of the last bulk publish operation, valid values are: NOT_STARTED - No bulk publish has been requested for this identity pool IN_PROGRESS - Data is being published to the configured stream SUCCEEDED - All data for the identity pool has been published to the configured stream FAILED - Some portion of the data has failed to publish, check FailureMessage for the cause.
     */
    BulkPublishStatus?: BulkPublishStatus;
    /**
     * If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.
     */
    FailureMessage?: String;
  }
  export interface GetCognitoEventsRequest {
    /**
     * The Cognito Identity Pool ID for the request
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface GetCognitoEventsResponse {
    /**
     * The Cognito Events returned from the GetCognitoEvents request
     */
    Events?: Events;
  }
  export interface GetIdentityPoolConfigurationRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool for which to return a configuration.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface GetIdentityPoolConfigurationResponse {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * Options to apply to this identity pool for push synchronization.
     */
    PushSync?: PushSync;
    /**
     * Options to apply to this identity pool for Amazon Cognito streams.
     */
    CognitoStreams?: CognitoStreams;
  }
  export type IdentityId = string;
  export type IdentityPoolId = string;
  export interface IdentityPoolUsage {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * Number of sync sessions for the identity pool.
     */
    SyncSessionsCount?: Long;
    /**
     * Data storage information for the identity pool.
     */
    DataStorage?: Long;
    /**
     * Date on which the identity pool was last modified.
     */
    LastModifiedDate?: Date;
  }
  export type IdentityPoolUsageList = IdentityPoolUsage[];
  export interface IdentityUsage {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityId?: IdentityId;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * Date on which the identity was last modified.
     */
    LastModifiedDate?: Date;
    /**
     * Number of datasets for the identity.
     */
    DatasetCount?: Integer;
    /**
     * Total data storage for this identity.
     */
    DataStorage?: Long;
  }
  export type Integer = number;
  export type IntegerString = number;
  export type LambdaFunctionArn = string;
  export interface ListDatasetsRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityId: IdentityId;
    /**
     * A pagination token for obtaining the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned.
     */
    MaxResults?: IntegerString;
  }
  export interface ListDatasetsResponse {
    /**
     * A set of datasets.
     */
    Datasets?: DatasetList;
    /**
     * Number of datasets returned.
     */
    Count?: Integer;
    /**
     * A pagination token for obtaining the next page of results.
     */
    NextToken?: String;
  }
  export interface ListIdentityPoolUsageRequest {
    /**
     * A pagination token for obtaining the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned.
     */
    MaxResults?: IntegerString;
  }
  export interface ListIdentityPoolUsageResponse {
    /**
     * Usage information for the identity pools.
     */
    IdentityPoolUsages?: IdentityPoolUsageList;
    /**
     * The maximum number of results to be returned.
     */
    MaxResults?: Integer;
    /**
     * Total number of identities for the identity pool.
     */
    Count?: Integer;
    /**
     * A pagination token for obtaining the next page of results.
     */
    NextToken?: String;
  }
  export interface ListRecordsRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityId?: IdentityId;
    /**
     * A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
     */
    DatasetName?: DatasetName;
    /**
     * The last server sync count for this record.
     */
    LastSyncCount?: Long;
    /**
     * A pagination token for obtaining the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to be returned.
     */
    MaxResults?: IntegerString;
    /**
     * A token containing a session ID, identity ID, and expiration.
     */
    SyncSessionToken?: SyncSessionToken;
  }
  export interface ListRecordsResponse {
    /**
     * A list of all records.
     */
    Records?: RecordList;
    /**
     * A pagination token for obtaining the next page of results.
     */
    NextToken?: String;
    /**
     * Total number of records.
     */
    Count?: Integer;
    /**
     * Server sync count for this dataset.
     */
    DatasetSyncCount?: Long;
    /**
     * The user/device that made the last change to this record.
     */
    LastModifiedBy?: String;
    /**
     * Names of merged datasets.
     */
    MergedDatasetNames?: MergedDatasetNameList;
    /**
     * Indicates whether the dataset exists.
     */
    DatasetExists?: Boolean;
    /**
     * A boolean value specifying whether to delete the dataset locally.
     */
    DatasetDeletedAfterRequestedSyncCount?: Boolean;
    /**
     * A token containing a session ID, identity ID, and expiration.
     */
    SyncSessionToken?: String;
  }
  export type Long = number;
  export type MergedDatasetNameList = String[];
  export type Operation = string;
  export type Platform = string;
  export interface PushSync {
    /**
     * List of SNS platform application ARNs that could be used by clients.
     */
    ApplicationArns?: ApplicationArnList;
    /**
     * A role configured to allow Cognito to call SNS on behalf of the developer.
     */
    RoleArn?: AssumeRoleArn;
  }
  export type PushToken = string;
  export interface Record {
    /**
     * The key for the record.
     */
    Key?: RecordKey;
    /**
     * The value for the record.
     */
    Value?: RecordValue;
    /**
     * The server sync count for this record.
     */
    SyncCount?: Long;
    /**
     * The date on which the record was last modified.
     */
    LastModifiedDate?: Date;
    /**
     * The user/device that made the last change to this record.
     */
    LastModifiedBy?: String;
    /**
     * The last modified date of the client device.
     */
    DeviceLastModifiedDate?: Date;
  }
  export type RecordKey = string;
  export type RecordList = Record[];
  export interface RecordPatch {
    /**
     * An operation, either replace or remove.
     */
    Op: Operation;
    /**
     * The key associated with the record patch.
     */
    Key?: RecordKey;
    /**
     * The value associated with the record patch.
     */
    Value?: RecordValue;
    /**
     * Last known server sync count for this record. Set to 0 if unknown.
     */
    SyncCount?: Long;
    /**
     * The last modified date of the client device.
     */
    DeviceLastModifiedDate?: Date;
  }
  export type RecordPatchList = RecordPatch[];
  export type RecordValue = string;
  export interface RegisterDeviceRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * The unique ID for this identity.
     */
    IdentityId?: IdentityId;
    /**
     * The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).
     */
    Platform?: Platform;
    /**
     * The push token.
     */
    Token?: PushToken;
  }
  export interface RegisterDeviceResponse {
    /**
     * The unique ID generated for this device by Cognito.
     */
    DeviceId?: DeviceId;
  }
  export interface SetCognitoEventsRequest {
    /**
     * The Cognito Identity Pool to use when configuring Cognito Events
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * The events to configure
     */
    Events?: Events;
  }
  export interface SetIdentityPoolConfigurationRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * Options to apply to this identity pool for push synchronization.
     */
    PushSync?: PushSync;
    /**
     * Options to apply to this identity pool for Amazon Cognito streams.
     */
    CognitoStreams?: CognitoStreams;
  }
  export interface SetIdentityPoolConfigurationResponse {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * Options to apply to this identity pool for push synchronization.
     */
    PushSync?: PushSync;
    /**
     * Options to apply to this identity pool for Amazon Cognito streams.
     */
    CognitoStreams?: CognitoStreams;
  }
  export type StreamName = string;
  export type StreamingStatus = string;
  export type String = string;
  export interface SubscribeToDatasetRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * Unique ID for this identity.
     */
    IdentityId?: IdentityId;
    /**
     * The name of the dataset to subcribe to.
     */
    DatasetName?: DatasetName;
    /**
     * The unique ID generated for this device by Cognito.
     */
    DeviceId?: DeviceId;
  }
  export interface SubscribeToDatasetResponse {
  }
  export type SyncSessionToken = string;
  export interface UnsubscribeFromDatasetRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * Unique ID for this identity.
     */
    IdentityId?: IdentityId;
    /**
     * The name of the dataset from which to unsubcribe.
     */
    DatasetName?: DatasetName;
    /**
     * The unique ID generated for this device by Cognito.
     */
    DeviceId?: DeviceId;
  }
  export interface UnsubscribeFromDatasetResponse {
  }
  export interface UpdateRecordsRequest {
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    IdentityId?: IdentityId;
    /**
     * A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
     */
    DatasetName?: DatasetName;
    /**
     * The unique ID generated for this device by Cognito.
     */
    DeviceId?: DeviceId;
    /**
     * A list of patch operations.
     */
    RecordPatches?: RecordPatchList;
    /**
     * The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.
     */
    SyncSessionToken?: SyncSessionToken;
    /**
     * Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.
     */
    ClientContext?: ClientContext;
  }
  export interface UpdateRecordsResponse {
    /**
     * A list of records that have been updated.
     */
    Records?: RecordList;
  }
}
export = CognitoSync;
