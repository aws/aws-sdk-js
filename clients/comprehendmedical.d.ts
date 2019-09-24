import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ComprehendMedical extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ComprehendMedical.Types.ClientConfiguration)
  config: Config & ComprehendMedical.Types.ClientConfiguration;
  /**
   * Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
   */
  describeEntitiesDetectionV2Job(params: ComprehendMedical.Types.DescribeEntitiesDetectionV2JobRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.DescribeEntitiesDetectionV2JobResponse) => void): Request<ComprehendMedical.Types.DescribeEntitiesDetectionV2JobResponse, AWSError>;
  /**
   * Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
   */
  describeEntitiesDetectionV2Job(callback?: (err: AWSError, data: ComprehendMedical.Types.DescribeEntitiesDetectionV2JobResponse) => void): Request<ComprehendMedical.Types.DescribeEntitiesDetectionV2JobResponse, AWSError>;
  /**
   * Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
   */
  describePHIDetectionJob(params: ComprehendMedical.Types.DescribePHIDetectionJobRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.DescribePHIDetectionJobResponse) => void): Request<ComprehendMedical.Types.DescribePHIDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
   */
  describePHIDetectionJob(callback?: (err: AWSError, data: ComprehendMedical.Types.DescribePHIDetectionJobResponse) => void): Request<ComprehendMedical.Types.DescribePHIDetectionJobResponse, AWSError>;
  /**
   * The DetectEntities operation is deprecated. You should use the DetectEntitiesV2 operation instead.  Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .
   */
  detectEntities(params: ComprehendMedical.Types.DetectEntitiesRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.DetectEntitiesResponse) => void): Request<ComprehendMedical.Types.DetectEntitiesResponse, AWSError>;
  /**
   * The DetectEntities operation is deprecated. You should use the DetectEntitiesV2 operation instead.  Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .
   */
  detectEntities(callback?: (err: AWSError, data: ComprehendMedical.Types.DetectEntitiesResponse) => void): Request<ComprehendMedical.Types.DetectEntitiesResponse, AWSError>;
  /**
   * Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. The DetectEntitiesV2 operation replaces the DetectEntities operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the DetectEntitiesV2 operation in all new applications. The DetectEntitiesV2 operation returns the Acuity and Direction entities as attributes instead of types. It does not return the Quality or Quantity entities.
   */
  detectEntitiesV2(params: ComprehendMedical.Types.DetectEntitiesV2Request, callback?: (err: AWSError, data: ComprehendMedical.Types.DetectEntitiesV2Response) => void): Request<ComprehendMedical.Types.DetectEntitiesV2Response, AWSError>;
  /**
   * Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. The DetectEntitiesV2 operation replaces the DetectEntities operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the DetectEntitiesV2 operation in all new applications. The DetectEntitiesV2 operation returns the Acuity and Direction entities as attributes instead of types. It does not return the Quality or Quantity entities.
   */
  detectEntitiesV2(callback?: (err: AWSError, data: ComprehendMedical.Types.DetectEntitiesV2Response) => void): Request<ComprehendMedical.Types.DetectEntitiesV2Response, AWSError>;
  /**
   *  Inspects the clinical text for protected health information (PHI) entities and entity category, location, and confidence score on that information.
   */
  detectPHI(params: ComprehendMedical.Types.DetectPHIRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.DetectPHIResponse) => void): Request<ComprehendMedical.Types.DetectPHIResponse, AWSError>;
  /**
   *  Inspects the clinical text for protected health information (PHI) entities and entity category, location, and confidence score on that information.
   */
  detectPHI(callback?: (err: AWSError, data: ComprehendMedical.Types.DetectPHIResponse) => void): Request<ComprehendMedical.Types.DetectPHIResponse, AWSError>;
  /**
   * Gets a list of medical entity detection jobs that you have submitted.
   */
  listEntitiesDetectionV2Jobs(params: ComprehendMedical.Types.ListEntitiesDetectionV2JobsRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.ListEntitiesDetectionV2JobsResponse) => void): Request<ComprehendMedical.Types.ListEntitiesDetectionV2JobsResponse, AWSError>;
  /**
   * Gets a list of medical entity detection jobs that you have submitted.
   */
  listEntitiesDetectionV2Jobs(callback?: (err: AWSError, data: ComprehendMedical.Types.ListEntitiesDetectionV2JobsResponse) => void): Request<ComprehendMedical.Types.ListEntitiesDetectionV2JobsResponse, AWSError>;
  /**
   * Gets a list of protected health information (PHI) detection jobs that you have submitted.
   */
  listPHIDetectionJobs(params: ComprehendMedical.Types.ListPHIDetectionJobsRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.ListPHIDetectionJobsResponse) => void): Request<ComprehendMedical.Types.ListPHIDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of protected health information (PHI) detection jobs that you have submitted.
   */
  listPHIDetectionJobs(callback?: (err: AWSError, data: ComprehendMedical.Types.ListPHIDetectionJobsResponse) => void): Request<ComprehendMedical.Types.ListPHIDetectionJobsResponse, AWSError>;
  /**
   * Starts an asynchronous medical entity detection job for a collection of documents. Use the DescribeEntitiesDetectionV2Job operation to track the status of a job.
   */
  startEntitiesDetectionV2Job(params: ComprehendMedical.Types.StartEntitiesDetectionV2JobRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.StartEntitiesDetectionV2JobResponse) => void): Request<ComprehendMedical.Types.StartEntitiesDetectionV2JobResponse, AWSError>;
  /**
   * Starts an asynchronous medical entity detection job for a collection of documents. Use the DescribeEntitiesDetectionV2Job operation to track the status of a job.
   */
  startEntitiesDetectionV2Job(callback?: (err: AWSError, data: ComprehendMedical.Types.StartEntitiesDetectionV2JobResponse) => void): Request<ComprehendMedical.Types.StartEntitiesDetectionV2JobResponse, AWSError>;
  /**
   * Starts an asynchronous job to detect protected health information (PHI). Use the DescribePHIDetectionJob operation to track the status of a job.
   */
  startPHIDetectionJob(params: ComprehendMedical.Types.StartPHIDetectionJobRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.StartPHIDetectionJobResponse) => void): Request<ComprehendMedical.Types.StartPHIDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous job to detect protected health information (PHI). Use the DescribePHIDetectionJob operation to track the status of a job.
   */
  startPHIDetectionJob(callback?: (err: AWSError, data: ComprehendMedical.Types.StartPHIDetectionJobResponse) => void): Request<ComprehendMedical.Types.StartPHIDetectionJobResponse, AWSError>;
  /**
   * Stops a medical entities detection job in progress.
   */
  stopEntitiesDetectionV2Job(params: ComprehendMedical.Types.StopEntitiesDetectionV2JobRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.StopEntitiesDetectionV2JobResponse) => void): Request<ComprehendMedical.Types.StopEntitiesDetectionV2JobResponse, AWSError>;
  /**
   * Stops a medical entities detection job in progress.
   */
  stopEntitiesDetectionV2Job(callback?: (err: AWSError, data: ComprehendMedical.Types.StopEntitiesDetectionV2JobResponse) => void): Request<ComprehendMedical.Types.StopEntitiesDetectionV2JobResponse, AWSError>;
  /**
   * Stops a protected health information (PHI) detection job in progress.
   */
  stopPHIDetectionJob(params: ComprehendMedical.Types.StopPHIDetectionJobRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.StopPHIDetectionJobResponse) => void): Request<ComprehendMedical.Types.StopPHIDetectionJobResponse, AWSError>;
  /**
   * Stops a protected health information (PHI) detection job in progress.
   */
  stopPHIDetectionJob(callback?: (err: AWSError, data: ComprehendMedical.Types.StopPHIDetectionJobResponse) => void): Request<ComprehendMedical.Types.StopPHIDetectionJobResponse, AWSError>;
}
declare namespace ComprehendMedical {
  export type AnyLengthString = string;
  export interface Attribute {
    /**
     *  The type of attribute. 
     */
    Type?: EntitySubType;
    /**
     *  The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as an attribute. 
     */
    Score?: Float;
    /**
     *  The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related to this entity. 
     */
    RelationshipScore?: Float;
    /**
     *  The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier. 
     */
    Id?: Integer;
    /**
     *  The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string. 
     */
    BeginOffset?: Integer;
    /**
     *  The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string. 
     */
    EndOffset?: Integer;
    /**
     *  The segment of input text extracted as this attribute.
     */
    Text?: String;
    /**
     *  Contextual information for this attribute. 
     */
    Traits?: TraitList;
  }
  export type AttributeList = Attribute[];
  export type AttributeName = "SIGN"|"SYMPTOM"|"DIAGNOSIS"|"NEGATION"|string;
  export type BoundedLengthString = string;
  export type ClientRequestTokenString = string;
  export interface ComprehendMedicalAsyncJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface ComprehendMedicalAsyncJobProperties {
    /**
     * The identifier assigned to the detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned to the detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the detection job. If the status is FAILED, the Message field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description of the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the detection job completed.
     */
    EndTime?: Timestamp;
    /**
     * The date and time that job metadata is deleted from the server. Output files in your S3 bucket will not be deleted. After the metadata is deleted, the job will no longer appear in the results of the ListEntitiesDetectionV2Job or the ListPHIDetectionJobs operation.
     */
    ExpirationTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The language code of the input documents.
     */
    LanguageCode?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend Medical read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * The path to the file that describes the results of a batch job.
     */
    ManifestFilePath?: ManifestFilePath;
    /**
     * The AWS Key Management Service key, if any, used to encrypt the output files. 
     */
    KMSKey?: KMSKey;
    /**
     * The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.
     */
    ModelVersion?: ModelVersion;
  }
  export type ComprehendMedicalAsyncJobPropertiesList = ComprehendMedicalAsyncJobProperties[];
  export interface DescribeEntitiesDetectionV2JobRequest {
    /**
     * The identifier that Amazon Comprehend Medical generated for the job. The StartEntitiesDetectionV2Job operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeEntitiesDetectionV2JobResponse {
    /**
     * An object that contains the properties associated with a detection job.
     */
    ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
  }
  export interface DescribePHIDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend Medical generated for the job. The StartPHIDetectionJob operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribePHIDetectionJobResponse {
    /**
     * An object that contains the properties associated with a detection job.
     */
    ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
  }
  export interface DetectEntitiesRequest {
    /**
     *  A UTF-8 text string containing the clinical content being examined for entities. Each string must contain fewer than 20,000 bytes of characters.
     */
    Text: BoundedLengthString;
  }
  export interface DetectEntitiesResponse {
    /**
     *  The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
     */
    Entities: EntityList;
    /**
     *  Attributes extracted from the input text that we were unable to relate to an entity.
     */
    UnmappedAttributes?: UnmappedAttributeList;
    /**
     *  If the result of the previous request to DetectEntities was truncated, include the PaginationToken to fetch the next page of entities.
     */
    PaginationToken?: String;
    /**
     * The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.
     */
    ModelVersion: String;
  }
  export interface DetectEntitiesV2Request {
    /**
     * A UTF-8 string containing the clinical content being examined for entities. Each string must contain fewer than 20,000 bytes of characters.
     */
    Text: BoundedLengthString;
  }
  export interface DetectEntitiesV2Response {
    /**
     * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence in the detection and analysis. Attributes and traits of the entity are also returned.
     */
    Entities: EntityList;
    /**
     * Attributes extracted from the input text that couldn't be related to an entity.
     */
    UnmappedAttributes?: UnmappedAttributeList;
    /**
     * If the result to the DetectEntitiesV2 operation was truncated, include the PaginationToken to fetch the next page of entities.
     */
    PaginationToken?: String;
    /**
     * The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.
     */
    ModelVersion: String;
  }
  export interface DetectPHIRequest {
    /**
     *  A UTF-8 text string containing the clinical content being examined for PHI entities. Each string must contain fewer than 20,000 bytes of characters. 
     */
    Text: BoundedLengthString;
  }
  export interface DetectPHIResponse {
    /**
     *  The collection of PHI entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in its detection. 
     */
    Entities: EntityList;
    /**
     *  If the result of the previous request to DetectPHI was truncated, include the PaginationToken to fetch the next page of PHI entities. 
     */
    PaginationToken?: String;
    /**
     * The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.
     */
    ModelVersion: String;
  }
  export interface Entity {
    /**
     *  The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier. 
     */
    Id?: Integer;
    /**
     *  The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string. 
     */
    BeginOffset?: Integer;
    /**
     *  The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string. 
     */
    EndOffset?: Integer;
    /**
     * The level of confidence that Amazon Comprehend Medical has in the accuracy of the detection.
     */
    Score?: Float;
    /**
     *  The segment of input text extracted as this entity.
     */
    Text?: String;
    /**
     *  The category of the entity.
     */
    Category?: EntityType;
    /**
     *  Describes the specific type of entity with category of entities. 
     */
    Type?: EntitySubType;
    /**
     * Contextual information for the entity
     */
    Traits?: TraitList;
    /**
     *  The extracted attributes that relate to this entity.
     */
    Attributes?: AttributeList;
  }
  export type EntityList = Entity[];
  export type EntitySubType = "NAME"|"DOSAGE"|"ROUTE_OR_MODE"|"FORM"|"FREQUENCY"|"DURATION"|"GENERIC_NAME"|"BRAND_NAME"|"STRENGTH"|"RATE"|"ACUITY"|"TEST_NAME"|"TEST_VALUE"|"TEST_UNITS"|"PROCEDURE_NAME"|"TREATMENT_NAME"|"DATE"|"AGE"|"CONTACT_POINT"|"EMAIL"|"IDENTIFIER"|"URL"|"ADDRESS"|"PROFESSION"|"SYSTEM_ORGAN_SITE"|"DIRECTION"|"QUALITY"|"QUANTITY"|string;
  export type EntityType = "MEDICATION"|"MEDICAL_CONDITION"|"PROTECTED_HEALTH_INFORMATION"|"TEST_TREATMENT_PROCEDURE"|"ANATOMY"|string;
  export type Float = number;
  export type IamRoleArn = string;
  export interface InputDataConfig {
    /**
     * The URI of the S3 bucket that contains the input data. The bucket must be in the same region as the API endpoint that you are calling. Each file in the document collection must be less than 40 KB. You can store a maximum of 30 GB in the bucket.
     */
    S3Bucket: S3Bucket;
    /**
     * The path to the input data files in the S3 bucket.
     */
    S3Key?: S3Key;
  }
  export type Integer = number;
  export type JobId = string;
  export type JobName = string;
  export type JobStatus = "SUBMITTED"|"IN_PROGRESS"|"COMPLETED"|"PARTIAL_SUCCESS"|"FAILED"|"STOP_REQUESTED"|"STOPPED"|string;
  export type KMSKey = string;
  export type LanguageCode = "en"|string;
  export interface ListEntitiesDetectionV2JobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: ComprehendMedicalAsyncJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListEntitiesDetectionV2JobsResponse {
    /**
     * A list containing the properties of each job returned.
     */
    ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListPHIDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: ComprehendMedicalAsyncJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListPHIDetectionJobsResponse {
    /**
     * A list containing the properties of each job returned.
     */
    ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export type ManifestFilePath = string;
  export type MaxResultsInteger = number;
  export type ModelVersion = string;
  export interface OutputDataConfig {
    /**
     * When you use the OutputDataConfig object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output.
     */
    S3Bucket: S3Bucket;
    /**
     * The path to the output data files in the S3 bucket. Amazon Comprehend Medical creates an output directory using the job ID so that the output from one job does not overwrite the output of another.
     */
    S3Key?: S3Key;
  }
  export type S3Bucket = string;
  export type S3Key = string;
  export interface StartEntitiesDetectionV2JobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see  Role-Based Permissions Required for Asynchronous Operations.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.
     */
    KMSKey?: KMSKey;
    /**
     * The language of the input documents. All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface StartEntitiesDetectionV2JobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this identifier with the DescribeEntitiesDetectionV2Job operation.
     */
    JobId?: JobId;
  }
  export interface StartPHIDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see  Role-Based Permissions Required for Asynchronous Operations.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.
     */
    KMSKey?: KMSKey;
    /**
     * The language of the input documents. All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface StartPHIDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this identifier with the DescribePHIDetectionJob operation.
     */
    JobId?: JobId;
  }
  export interface StopEntitiesDetectionV2JobRequest {
    /**
     * The identifier of the medical entities job to stop.
     */
    JobId: JobId;
  }
  export interface StopEntitiesDetectionV2JobResponse {
    /**
     * The identifier of the medical entities detection job that was stopped.
     */
    JobId?: JobId;
  }
  export interface StopPHIDetectionJobRequest {
    /**
     * The identifier of the PHI detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopPHIDetectionJobResponse {
    /**
     * The identifier of the PHI detection job that was stopped.
     */
    JobId?: JobId;
  }
  export type String = string;
  export type Timestamp = Date;
  export interface Trait {
    /**
     *  Provides a name or contextual description about the trait. 
     */
    Name?: AttributeName;
    /**
     *  The level of confidence that Amazon Comprehend Medical has in the accuracy of this trait.
     */
    Score?: Float;
  }
  export type TraitList = Trait[];
  export interface UnmappedAttribute {
    /**
     *  The type of the attribute, could be one of the following values: "MEDICATION", "MEDICAL_CONDITION", "ANATOMY", "TEST_AND_TREATMENT_PROCEDURE" or "PROTECTED_HEALTH_INFORMATION". 
     */
    Type?: EntityType;
    /**
     *  The specific attribute that has been extracted but not mapped to an entity. 
     */
    Attribute?: Attribute;
  }
  export type UnmappedAttributeList = UnmappedAttribute[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-10-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ComprehendMedical client.
   */
  export import Types = ComprehendMedical;
}
export = ComprehendMedical;
