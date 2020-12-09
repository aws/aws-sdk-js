import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class HealthLake extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: HealthLake.Types.ClientConfiguration)
  config: Config & HealthLake.Types.ClientConfiguration;
  /**
   * Creates a datastore that can ingest and export FHIR data.
   */
  createFHIRDatastore(params: HealthLake.Types.CreateFHIRDatastoreRequest, callback?: (err: AWSError, data: HealthLake.Types.CreateFHIRDatastoreResponse) => void): Request<HealthLake.Types.CreateFHIRDatastoreResponse, AWSError>;
  /**
   * Creates a datastore that can ingest and export FHIR data.
   */
  createFHIRDatastore(callback?: (err: AWSError, data: HealthLake.Types.CreateFHIRDatastoreResponse) => void): Request<HealthLake.Types.CreateFHIRDatastoreResponse, AWSError>;
  /**
   * Deletes a datastore. 
   */
  deleteFHIRDatastore(params: HealthLake.Types.DeleteFHIRDatastoreRequest, callback?: (err: AWSError, data: HealthLake.Types.DeleteFHIRDatastoreResponse) => void): Request<HealthLake.Types.DeleteFHIRDatastoreResponse, AWSError>;
  /**
   * Deletes a datastore. 
   */
  deleteFHIRDatastore(callback?: (err: AWSError, data: HealthLake.Types.DeleteFHIRDatastoreResponse) => void): Request<HealthLake.Types.DeleteFHIRDatastoreResponse, AWSError>;
  /**
   * Gets the properties associated with the FHIR datastore, including the datastore ID, datastore ARN, datastore name, datastore status, created at, datastore type version, and datastore endpoint.
   */
  describeFHIRDatastore(params: HealthLake.Types.DescribeFHIRDatastoreRequest, callback?: (err: AWSError, data: HealthLake.Types.DescribeFHIRDatastoreResponse) => void): Request<HealthLake.Types.DescribeFHIRDatastoreResponse, AWSError>;
  /**
   * Gets the properties associated with the FHIR datastore, including the datastore ID, datastore ARN, datastore name, datastore status, created at, datastore type version, and datastore endpoint.
   */
  describeFHIRDatastore(callback?: (err: AWSError, data: HealthLake.Types.DescribeFHIRDatastoreResponse) => void): Request<HealthLake.Types.DescribeFHIRDatastoreResponse, AWSError>;
  /**
   * Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the datastore.
   */
  describeFHIRImportJob(params: HealthLake.Types.DescribeFHIRImportJobRequest, callback?: (err: AWSError, data: HealthLake.Types.DescribeFHIRImportJobResponse) => void): Request<HealthLake.Types.DescribeFHIRImportJobResponse, AWSError>;
  /**
   * Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the datastore.
   */
  describeFHIRImportJob(callback?: (err: AWSError, data: HealthLake.Types.DescribeFHIRImportJobResponse) => void): Request<HealthLake.Types.DescribeFHIRImportJobResponse, AWSError>;
  /**
   * Lists all FHIR datastores that are in the user’s account, regardless of datastore status.
   */
  listFHIRDatastores(params: HealthLake.Types.ListFHIRDatastoresRequest, callback?: (err: AWSError, data: HealthLake.Types.ListFHIRDatastoresResponse) => void): Request<HealthLake.Types.ListFHIRDatastoresResponse, AWSError>;
  /**
   * Lists all FHIR datastores that are in the user’s account, regardless of datastore status.
   */
  listFHIRDatastores(callback?: (err: AWSError, data: HealthLake.Types.ListFHIRDatastoresResponse) => void): Request<HealthLake.Types.ListFHIRDatastoresResponse, AWSError>;
  /**
   * Begins a FHIR Import job.
   */
  startFHIRImportJob(params: HealthLake.Types.StartFHIRImportJobRequest, callback?: (err: AWSError, data: HealthLake.Types.StartFHIRImportJobResponse) => void): Request<HealthLake.Types.StartFHIRImportJobResponse, AWSError>;
  /**
   * Begins a FHIR Import job.
   */
  startFHIRImportJob(callback?: (err: AWSError, data: HealthLake.Types.StartFHIRImportJobResponse) => void): Request<HealthLake.Types.StartFHIRImportJobResponse, AWSError>;
}
declare namespace HealthLake {
  export type BoundedLengthString = string;
  export type ClientTokenString = string;
  export interface CreateFHIRDatastoreRequest {
    /**
     * The user generated name for the datastore.
     */
    DatastoreName?: DatastoreName;
    /**
     * The FHIR version of the datastore. The only supported version is R4.
     */
    DatastoreTypeVersion: FHIRVersion;
    /**
     * Optional parameter to preload data upon creation of the datastore. Currently, the only supported preloaded data is synthetic data generated from Synthea.
     */
    PreloadDataConfig?: PreloadDataConfig;
    /**
     * Optional user provided token used for ensuring idempotency.
     */
    ClientToken?: ClientTokenString;
  }
  export interface CreateFHIRDatastoreResponse {
    /**
     * The AWS-generated datastore id. This id is in the output from the initial datastore creation call.
     */
    DatastoreId: DatastoreId;
    /**
     * The datastore ARN is generated during the creation of the datastore and can be found in the output from the initial datastore creation call.
     */
    DatastoreArn: DatastoreArn;
    /**
     * The status of the FHIR datastore. Possible statuses are ‘CREATING’, ‘ACTIVE’, ‘DELETING’, ‘DELETED’.
     */
    DatastoreStatus: DatastoreStatus;
    /**
     * The AWS endpoint for the created datastore. For preview, only US-east-1 endpoints are supported.
     */
    DatastoreEndpoint: BoundedLengthString;
  }
  export type DatastoreArn = string;
  export interface DatastoreFilter {
    /**
     * Allows the user to filter datastore results by name.
     */
    DatastoreName?: DatastoreName;
    /**
     * Allows the user to filter datastore results by status.
     */
    DatastoreStatus?: DatastoreStatus;
    /**
     * A filter that allows the user to set cutoff dates for records. All datastores created before the specified date will be included in the results. 
     */
    CreatedBefore?: Timestamp;
    /**
     * A filter that allows the user to set cutoff dates for records. All datastores created after the specified date will be included in the results.
     */
    CreatedAfter?: Timestamp;
  }
  export type DatastoreId = string;
  export type DatastoreName = string;
  export interface DatastoreProperties {
    /**
     * The AWS-generated ID number for the datastore.
     */
    DatastoreId: DatastoreId;
    /**
     * The Amazon Resource Name used in the creation of the datastore.
     */
    DatastoreArn: DatastoreArn;
    /**
     * The user-generated name for the datastore.
     */
    DatastoreName?: DatastoreName;
    /**
     * The status of the datastore. Possible statuses are 'CREATING', 'ACTIVE', 'DELETING', or 'DELETED'.
     */
    DatastoreStatus: DatastoreStatus;
    /**
     * The time that a datastore was created. 
     */
    CreatedAt?: Timestamp;
    /**
     * The FHIR version. Only R4 version data is supported.
     */
    DatastoreTypeVersion: FHIRVersion;
    /**
     * The AWS endpoint for the datastore. Each datastore will have it's own endpoint with datastore ID in the endpoint URL.
     */
    DatastoreEndpoint: String;
    /**
     * The preloaded data configuration for the datastore. Only data preloaded from Synthea is supported.
     */
    PreloadDataConfig?: PreloadDataConfig;
  }
  export type DatastorePropertiesList = DatastoreProperties[];
  export type DatastoreStatus = "CREATING"|"ACTIVE"|"DELETING"|"DELETED"|string;
  export interface DeleteFHIRDatastoreRequest {
    /**
     *  The AWS-generated ID for the datastore to be deleted.
     */
    DatastoreId?: DatastoreId;
  }
  export interface DeleteFHIRDatastoreResponse {
    /**
     * The AWS-generated ID for the datastore to be deleted.
     */
    DatastoreId: DatastoreId;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission.
     */
    DatastoreArn: DatastoreArn;
    /**
     * The status of the datastore that the user has requested to be deleted. 
     */
    DatastoreStatus: DatastoreStatus;
    /**
     * The AWS endpoint for the datastore the user has requested to be deleted.
     */
    DatastoreEndpoint: BoundedLengthString;
  }
  export interface DescribeFHIRDatastoreRequest {
    /**
     * The AWS-generated datastore id. This is part of the ‘CreateFHIRDatastore’ output.
     */
    DatastoreId?: DatastoreId;
  }
  export interface DescribeFHIRDatastoreResponse {
    /**
     * All properties associated with a datastore, including the datastore ID, datastore ARN, datastore name, datastore status, created at, datastore type version, and datastore endpoint.
     */
    DatastoreProperties: DatastoreProperties;
  }
  export interface DescribeFHIRImportJobRequest {
    /**
     * The AWS-generated ID of the datastore.
     */
    DatastoreId: DatastoreId;
    /**
     * The AWS-generated job ID.
     */
    JobId: JobId;
  }
  export interface DescribeFHIRImportJobResponse {
    /**
     * The properties of the Import job request, including the ID, ARN, name, and the status of the datastore.
     */
    ImportJobProperties: ImportJobProperties;
  }
  export type FHIRVersion = "R4"|string;
  export type IamRoleArn = string;
  export interface ImportJobProperties {
    /**
     * The AWS-generated id number for the Import job.
     */
    JobId: JobId;
    /**
     * The user-generated name for an Import job.
     */
    JobName?: JobName;
    /**
     * The job status for an Import job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, FAILED.
     */
    JobStatus: JobStatus;
    /**
     * The time that the Import job was submitted for processing.
     */
    SubmitTime: Timestamp;
    /**
     * The time that the Import job was completed.
     */
    EndTime?: Timestamp;
    /**
     * The datastore id used when the Import job was created. 
     */
    DatastoreId: DatastoreId;
    /**
     * The input data configuration that was supplied when the Import job was created.
     */
    InputDataConfig: InputDataConfig;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon HealthLake access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * An explanation of any errors that may have occurred during the FHIR import job. 
     */
    Message?: Message;
  }
  export interface InputDataConfig {
    /**
     * The S3Uri is the user specified S3 location of the FHIR data to be imported into Amazon HealthLake. 
     */
    S3Uri?: S3Uri;
  }
  export type JobId = string;
  export type JobName = string;
  export type JobStatus = "SUBMITTED"|"IN_PROGRESS"|"COMPLETED"|"FAILED"|string;
  export interface ListFHIRDatastoresRequest {
    /**
     * Lists all filters associated with a FHIR datastore request.
     */
    Filter?: DatastoreFilter;
    /**
     * Fetches the next page of datastores when results are paginated.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of datastores returned in a single page of a ListFHIRDatastoresRequest call.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListFHIRDatastoresResponse {
    /**
     * All properties associated with the listed datastores.
     */
    DatastorePropertiesList: DatastorePropertiesList;
    /**
     * Pagination token that can be used to retrieve the next page of results.
     */
    NextToken?: NextToken;
  }
  export type MaxResultsInteger = number;
  export type Message = string;
  export type NextToken = string;
  export interface PreloadDataConfig {
    /**
     * The type of preloaded data. Only Synthea preloaded data is supported.
     */
    PreloadDataType: PreloadDataType;
  }
  export type PreloadDataType = "SYNTHEA"|string;
  export type S3Uri = string;
  export interface StartFHIRImportJobRequest {
    /**
     * The name of the FHIR Import job in the StartFHIRImport job request.
     */
    JobName?: JobName;
    /**
     * The input properties of the FHIR Import job in the StartFHIRImport job request.
     */
    InputDataConfig: InputDataConfig;
    /**
     * The AWS-generated datastore ID.
     */
    DatastoreId: DatastoreId;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * Optional user provided token used for ensuring idempotency.
     */
    ClientToken: ClientTokenString;
  }
  export interface StartFHIRImportJobResponse {
    /**
     * The AWS-generated job ID.
     */
    JobId: JobId;
    /**
     * The status of an import job.
     */
    JobStatus: JobStatus;
    /**
     * The AWS-generated datastore ID.
     */
    DatastoreId?: DatastoreId;
  }
  export type String = string;
  export type Timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the HealthLake client.
   */
  export import Types = HealthLake;
}
export = HealthLake;
