import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class ImportExport extends Service {
  /**
   * This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
   */
  cancelJob(params: ImportExport.CancelJobInput, callback?: (err: AWSError, data: ImportExport.CancelJobOutput) => void): Request<ImportExport.CancelJobOutput, AWSError>;
  /**
   * This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
   */
  cancelJob(callback?: (err: AWSError, data: ImportExport.CancelJobOutput) => void): Request<ImportExport.CancelJobOutput, AWSError>;
  /**
   * This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
   */
  createJob(params: ImportExport.CreateJobInput, callback?: (err: AWSError, data: ImportExport.CreateJobOutput) => void): Request<ImportExport.CreateJobOutput, AWSError>;
  /**
   * This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
   */
  createJob(callback?: (err: AWSError, data: ImportExport.CreateJobOutput) => void): Request<ImportExport.CreateJobOutput, AWSError>;
  /**
   * This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
   */
  getShippingLabel(params: ImportExport.GetShippingLabelInput, callback?: (err: AWSError, data: ImportExport.GetShippingLabelOutput) => void): Request<ImportExport.GetShippingLabelOutput, AWSError>;
  /**
   * This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
   */
  getShippingLabel(callback?: (err: AWSError, data: ImportExport.GetShippingLabelOutput) => void): Request<ImportExport.GetShippingLabelOutput, AWSError>;
  /**
   * This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
   */
  getStatus(params: ImportExport.GetStatusInput, callback?: (err: AWSError, data: ImportExport.GetStatusOutput) => void): Request<ImportExport.GetStatusOutput, AWSError>;
  /**
   * This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
   */
  getStatus(callback?: (err: AWSError, data: ImportExport.GetStatusOutput) => void): Request<ImportExport.GetStatusOutput, AWSError>;
  /**
   * This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
   */
  listJobs(params: ImportExport.ListJobsInput, callback?: (err: AWSError, data: ImportExport.ListJobsOutput) => void): Request<ImportExport.ListJobsOutput, AWSError>;
  /**
   * This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
   */
  listJobs(callback?: (err: AWSError, data: ImportExport.ListJobsOutput) => void): Request<ImportExport.ListJobsOutput, AWSError>;
  /**
   * You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
   */
  updateJob(params: ImportExport.UpdateJobInput, callback?: (err: AWSError, data: ImportExport.UpdateJobOutput) => void): Request<ImportExport.UpdateJobOutput, AWSError>;
  /**
   * You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
   */
  updateJob(callback?: (err: AWSError, data: ImportExport.UpdateJobOutput) => void): Request<ImportExport.UpdateJobOutput, AWSError>;
}
declare namespace ImportExport {
  export type APIVersion = string;
  export interface Artifact {
    Description?: Description;
    URL?: URL;
  }
  export type ArtifactList = Artifact[];
  export interface CancelJobInput {
    JobId: JobId;
    APIVersion?: APIVersion;
  }
  export interface CancelJobOutput {
    Success?: Success;
  }
  export type Carrier = string;
  export interface CreateJobInput {
    JobType: JobType;
    Manifest?: Manifest;
    ManifestAddendum?: ManifestAddendum;
    ValidateOnly?: ValidateOnly;
    APIVersion?: APIVersion;
  }
  export interface CreateJobOutput {
    JobId?: JobId;
    JobType?: JobType;
    Signature?: Signature;
    SignatureFileContents?: SignatureFileContents;
    WarningMessage?: WarningMessage;
    ArtifactList?: ArtifactList;
  }
  export type CreationDate = Date;
  export type CurrentManifest = string;
  export type Description = string;
  export type ErrorCount = number;
  export type ErrorMessage = string;
  export type GenericString = string;
  export interface GetShippingLabelInput {
    jobIds: JobIdList;
    name?: name;
    company?: company;
    phoneNumber?: phoneNumber;
    country?: country;
    stateOrProvince?: stateOrProvince;
    city?: city;
    postalCode?: postalCode;
    street1?: street1;
    street2?: street2;
    street3?: street3;
    APIVersion?: APIVersion;
  }
  export interface GetShippingLabelOutput {
    ShippingLabelURL?: GenericString;
    Warning?: GenericString;
  }
  export interface GetStatusInput {
    JobId: JobId;
    APIVersion?: APIVersion;
  }
  export interface GetStatusOutput {
    JobId?: JobId;
    JobType?: JobType;
    LocationCode?: LocationCode;
    LocationMessage?: LocationMessage;
    ProgressCode?: ProgressCode;
    ProgressMessage?: ProgressMessage;
    Carrier?: Carrier;
    TrackingNumber?: TrackingNumber;
    LogBucket?: LogBucket;
    LogKey?: LogKey;
    ErrorCount?: ErrorCount;
    Signature?: Signature;
    SignatureFileContents?: Signature;
    CurrentManifest?: CurrentManifest;
    CreationDate?: CreationDate;
    ArtifactList?: ArtifactList;
  }
  export type IsCanceled = boolean;
  export type IsTruncated = boolean;
  export interface Job {
    JobId?: JobId;
    CreationDate?: CreationDate;
    IsCanceled?: IsCanceled;
    JobType?: JobType;
  }
  export type JobId = string;
  export type JobIdList = GenericString[];
  export type JobType = string;
  export type JobsList = Job[];
  export interface ListJobsInput {
    MaxJobs?: MaxJobs;
    Marker?: Marker;
    APIVersion?: APIVersion;
  }
  export interface ListJobsOutput {
    Jobs?: JobsList;
    IsTruncated?: IsTruncated;
  }
  export type LocationCode = string;
  export type LocationMessage = string;
  export type LogBucket = string;
  export type LogKey = string;
  export type Manifest = string;
  export type ManifestAddendum = string;
  export type Marker = string;
  export type MaxJobs = number;
  export type ProgressCode = string;
  export type ProgressMessage = string;
  export type Signature = string;
  export type SignatureFileContents = string;
  export type Success = boolean;
  export type TrackingNumber = string;
  export type URL = string;
  export interface UpdateJobInput {
    JobId: JobId;
    Manifest?: Manifest;
    JobType?: JobType;
    ValidateOnly?: ValidateOnly;
    APIVersion?: APIVersion;
  }
  export interface UpdateJobOutput {
    Success?: Success;
    WarningMessage?: WarningMessage;
    ArtifactList?: ArtifactList;
  }
  export type ValidateOnly = boolean;
  export type WarningMessage = string;
  export type city = string;
  export type company = string;
  export type country = string;
  export type name = string;
  export type phoneNumber = string;
  export type postalCode = string;
  export type stateOrProvince = string;
  export type street1 = string;
  export type street2 = string;
  export type street3 = string;
}
export = ImportExport;
