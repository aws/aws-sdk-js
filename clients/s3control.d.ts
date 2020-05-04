import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {UseDualstackConfigOptions} from '../lib/config_use_dualstack';
interface Blob {}
declare class S3Control extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: S3Control.Types.ClientConfiguration)
  config: Config & S3Control.Types.ClientConfiguration;
  /**
   * Creates an access point and associates it with the specified bucket.
   */
  createAccessPoint(params: S3Control.Types.CreateAccessPointRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an access point and associates it with the specified bucket.
   */
  createAccessPoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * You can use Amazon S3 Batch Operations to perform large-scale Batch Operations on Amazon S3 objects. Amazon S3 Batch Operations can execute a single operation or action on lists of Amazon S3 objects that you specify. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide. Related actions include:    DescribeJob     ListJobs     UpdateJobPriority     UpdateJobStatus   
   */
  createJob(params: S3Control.Types.CreateJobRequest, callback?: (err: AWSError, data: S3Control.Types.CreateJobResult) => void): Request<S3Control.Types.CreateJobResult, AWSError>;
  /**
   * You can use Amazon S3 Batch Operations to perform large-scale Batch Operations on Amazon S3 objects. Amazon S3 Batch Operations can execute a single operation or action on lists of Amazon S3 objects that you specify. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide. Related actions include:    DescribeJob     ListJobs     UpdateJobPriority     UpdateJobStatus   
   */
  createJob(callback?: (err: AWSError, data: S3Control.Types.CreateJobResult) => void): Request<S3Control.Types.CreateJobResult, AWSError>;
  /**
   * Deletes the specified access point.
   */
  deleteAccessPoint(params: S3Control.Types.DeleteAccessPointRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified access point.
   */
  deleteAccessPoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the access point policy for the specified access point.
   */
  deleteAccessPointPolicy(params: S3Control.Types.DeleteAccessPointPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the access point policy for the specified access point.
   */
  deleteAccessPointPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the entire tag set from the specified Amazon S3 Batch Operations job. To use this operation, you must have permission to perform the s3:DeleteJobTagging action. For more information, see Using Job Tags in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     GetJobTagging     PutJobTagging   
   */
  deleteJobTagging(params: S3Control.Types.DeleteJobTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.DeleteJobTaggingResult) => void): Request<S3Control.Types.DeleteJobTaggingResult, AWSError>;
  /**
   * Removes the entire tag set from the specified Amazon S3 Batch Operations job. To use this operation, you must have permission to perform the s3:DeleteJobTagging action. For more information, see Using Job Tags in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     GetJobTagging     PutJobTagging   
   */
  deleteJobTagging(callback?: (err: AWSError, data: S3Control.Types.DeleteJobTaggingResult) => void): Request<S3Control.Types.DeleteJobTaggingResult, AWSError>;
  /**
   * Removes the PublicAccessBlock configuration for an Amazon Web Services account.
   */
  deletePublicAccessBlock(params: S3Control.Types.DeletePublicAccessBlockRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the PublicAccessBlock configuration for an Amazon Web Services account.
   */
  deletePublicAccessBlock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the configuration parameters and status for a Batch Operations job. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     ListJobs     UpdateJobPriority     UpdateJobStatus   
   */
  describeJob(params: S3Control.Types.DescribeJobRequest, callback?: (err: AWSError, data: S3Control.Types.DescribeJobResult) => void): Request<S3Control.Types.DescribeJobResult, AWSError>;
  /**
   * Retrieves the configuration parameters and status for a Batch Operations job. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     ListJobs     UpdateJobPriority     UpdateJobStatus   
   */
  describeJob(callback?: (err: AWSError, data: S3Control.Types.DescribeJobResult) => void): Request<S3Control.Types.DescribeJobResult, AWSError>;
  /**
   * Returns configuration information about the specified access point.
   */
  getAccessPoint(params: S3Control.Types.GetAccessPointRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointResult) => void): Request<S3Control.Types.GetAccessPointResult, AWSError>;
  /**
   * Returns configuration information about the specified access point.
   */
  getAccessPoint(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointResult) => void): Request<S3Control.Types.GetAccessPointResult, AWSError>;
  /**
   * Returns the access point policy associated with the specified access point.
   */
  getAccessPointPolicy(params: S3Control.Types.GetAccessPointPolicyRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyResult) => void): Request<S3Control.Types.GetAccessPointPolicyResult, AWSError>;
  /**
   * Returns the access point policy associated with the specified access point.
   */
  getAccessPointPolicy(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyResult) => void): Request<S3Control.Types.GetAccessPointPolicyResult, AWSError>;
  /**
   * Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see Managing Data Access with Amazon S3 Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  getAccessPointPolicyStatus(params: S3Control.Types.GetAccessPointPolicyStatusRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyStatusResult) => void): Request<S3Control.Types.GetAccessPointPolicyStatusResult, AWSError>;
  /**
   * Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see Managing Data Access with Amazon S3 Access Points in the Amazon Simple Storage Service Developer Guide.
   */
  getAccessPointPolicyStatus(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyStatusResult) => void): Request<S3Control.Types.GetAccessPointPolicyStatusResult, AWSError>;
  /**
   * Returns the tags on an Amazon S3 Batch Operations job. To use this operation, you must have permission to perform the s3:GetJobTagging action. For more information, see Using Job Tags in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     PutJobTagging     DeleteJobTagging   
   */
  getJobTagging(params: S3Control.Types.GetJobTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.GetJobTaggingResult) => void): Request<S3Control.Types.GetJobTaggingResult, AWSError>;
  /**
   * Returns the tags on an Amazon S3 Batch Operations job. To use this operation, you must have permission to perform the s3:GetJobTagging action. For more information, see Using Job Tags in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     PutJobTagging     DeleteJobTagging   
   */
  getJobTagging(callback?: (err: AWSError, data: S3Control.Types.GetJobTaggingResult) => void): Request<S3Control.Types.GetJobTaggingResult, AWSError>;
  /**
   * Retrieves the PublicAccessBlock configuration for an Amazon Web Services account.
   */
  getPublicAccessBlock(params: S3Control.Types.GetPublicAccessBlockRequest, callback?: (err: AWSError, data: S3Control.Types.GetPublicAccessBlockOutput) => void): Request<S3Control.Types.GetPublicAccessBlockOutput, AWSError>;
  /**
   * Retrieves the PublicAccessBlock configuration for an Amazon Web Services account.
   */
  getPublicAccessBlock(callback?: (err: AWSError, data: S3Control.Types.GetPublicAccessBlockOutput) => void): Request<S3Control.Types.GetPublicAccessBlockOutput, AWSError>;
  /**
   * Returns a list of the access points currently associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points.
   */
  listAccessPoints(params: S3Control.Types.ListAccessPointsRequest, callback?: (err: AWSError, data: S3Control.Types.ListAccessPointsResult) => void): Request<S3Control.Types.ListAccessPointsResult, AWSError>;
  /**
   * Returns a list of the access points currently associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points.
   */
  listAccessPoints(callback?: (err: AWSError, data: S3Control.Types.ListAccessPointsResult) => void): Request<S3Control.Types.ListAccessPointsResult, AWSError>;
  /**
   * Lists current Amazon S3 Batch Operations jobs and jobs that have ended within the last 30 days for the AWS account making the request. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide. Related actions include:     CreateJob     DescribeJob     UpdateJobPriority     UpdateJobStatus   
   */
  listJobs(params: S3Control.Types.ListJobsRequest, callback?: (err: AWSError, data: S3Control.Types.ListJobsResult) => void): Request<S3Control.Types.ListJobsResult, AWSError>;
  /**
   * Lists current Amazon S3 Batch Operations jobs and jobs that have ended within the last 30 days for the AWS account making the request. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide. Related actions include:     CreateJob     DescribeJob     UpdateJobPriority     UpdateJobStatus   
   */
  listJobs(callback?: (err: AWSError, data: S3Control.Types.ListJobsResult) => void): Request<S3Control.Types.ListJobsResult, AWSError>;
  /**
   * Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.
   */
  putAccessPointPolicy(params: S3Control.Types.PutAccessPointPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.
   */
  putAccessPointPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Set the supplied tag-set on an Amazon S3 Batch Operations job. A tag is a key-value pair. You can associate Amazon S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this API action to replace the tag set with the one you have modified.. For more information, see Using Job Tags in the Amazon Simple Storage Service Developer Guide.      If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you will be charged for a Tier 1 Request (PUT). For more information, see Amazon S3 pricing.   For deleting existing tags for your batch operations job, DeleteJobTagging request is preferred because it achieves the same result without incurring charges.   A few things to consider about using tags:   Amazon S3 limits the maximum number of tags to 50 tags per job.   You can associate up to 50 tags with a job as long as they have unique tag keys.   A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.   The key and values are case sensitive.   For tagging-related restrictions related to characters and encodings, see User-Defined Tag Restrictions.       To use this operation, you must have permission to perform the s3:PutJobTagging action. Related actions include:    CreateJob     GetJobTagging     DeleteJobTagging   
   */
  putJobTagging(params: S3Control.Types.PutJobTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.PutJobTaggingResult) => void): Request<S3Control.Types.PutJobTaggingResult, AWSError>;
  /**
   * Set the supplied tag-set on an Amazon S3 Batch Operations job. A tag is a key-value pair. You can associate Amazon S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this API action to replace the tag set with the one you have modified.. For more information, see Using Job Tags in the Amazon Simple Storage Service Developer Guide.      If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you will be charged for a Tier 1 Request (PUT). For more information, see Amazon S3 pricing.   For deleting existing tags for your batch operations job, DeleteJobTagging request is preferred because it achieves the same result without incurring charges.   A few things to consider about using tags:   Amazon S3 limits the maximum number of tags to 50 tags per job.   You can associate up to 50 tags with a job as long as they have unique tag keys.   A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.   The key and values are case sensitive.   For tagging-related restrictions related to characters and encodings, see User-Defined Tag Restrictions.       To use this operation, you must have permission to perform the s3:PutJobTagging action. Related actions include:    CreateJob     GetJobTagging     DeleteJobTagging   
   */
  putJobTagging(callback?: (err: AWSError, data: S3Control.Types.PutJobTaggingResult) => void): Request<S3Control.Types.PutJobTaggingResult, AWSError>;
  /**
   * Creates or modifies the PublicAccessBlock configuration for an Amazon Web Services account.
   */
  putPublicAccessBlock(params: S3Control.Types.PutPublicAccessBlockRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or modifies the PublicAccessBlock configuration for an Amazon Web Services account.
   */
  putPublicAccessBlock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an existing Amazon S3 Batch Operations job's priority. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus   
   */
  updateJobPriority(params: S3Control.Types.UpdateJobPriorityRequest, callback?: (err: AWSError, data: S3Control.Types.UpdateJobPriorityResult) => void): Request<S3Control.Types.UpdateJobPriorityResult, AWSError>;
  /**
   * Updates an existing Amazon S3 Batch Operations job's priority. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus   
   */
  updateJobPriority(callback?: (err: AWSError, data: S3Control.Types.UpdateJobPriorityResult) => void): Request<S3Control.Types.UpdateJobPriorityResult, AWSError>;
  /**
   * Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus   
   */
  updateJobStatus(params: S3Control.Types.UpdateJobStatusRequest, callback?: (err: AWSError, data: S3Control.Types.UpdateJobStatusResult) => void): Request<S3Control.Types.UpdateJobStatusResult, AWSError>;
  /**
   * Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see Amazon S3 Batch Operations in the Amazon Simple Storage Service Developer Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus   
   */
  updateJobStatus(callback?: (err: AWSError, data: S3Control.Types.UpdateJobStatusResult) => void): Request<S3Control.Types.UpdateJobStatusResult, AWSError>;
}
declare namespace S3Control {
  export interface AccessPoint {
    /**
     * The name of this access point.
     */
    Name: AccessPointName;
    /**
     * Indicates whether this access point allows access from the public internet. If VpcConfiguration is specified for this access point, then NetworkOrigin is VPC, and the access point doesn't allow access from the public internet. Otherwise, NetworkOrigin is Internet, and the access point allows access from the public internet, subject to the access point and bucket access policies.
     */
    NetworkOrigin: NetworkOrigin;
    /**
     * The virtual private cloud (VPC) configuration for this access point, if one exists.
     */
    VpcConfiguration?: VpcConfiguration;
    /**
     * The name of the bucket associated with this access point.
     */
    Bucket: BucketName;
  }
  export type AccessPointList = AccessPoint[];
  export type AccessPointName = string;
  export type AccountId = string;
  export type Boolean = boolean;
  export type BucketName = string;
  export type ConfirmationRequired = boolean;
  export interface CreateAccessPointRequest {
    /**
     * The AWS account ID for the owner of the bucket for which you want to create an access point.
     */
    AccountId: AccountId;
    /**
     * The name you want to assign to this access point.
     */
    Name: AccessPointName;
    /**
     * The name of the bucket that you want to associate this access point with.
     */
    Bucket: BucketName;
    /**
     * If you include this field, Amazon S3 restricts access to this access point to requests from the specified virtual private cloud (VPC).
     */
    VpcConfiguration?: VpcConfiguration;
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  }
  export interface CreateJobRequest {
    /**
     * 
     */
    AccountId: AccountId;
    /**
     * Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.
     */
    ConfirmationRequired?: ConfirmationRequired;
    /**
     * The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see Available Operations in the Amazon Simple Storage Service Developer Guide.
     */
    Operation: JobOperation;
    /**
     * Configuration parameters for the optional job-completion report.
     */
    Report: JobReport;
    /**
     * An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.
     */
    ClientRequestToken: NonEmptyMaxLength64String;
    /**
     * Configuration parameters for the manifest.
     */
    Manifest: JobManifest;
    /**
     * A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.
     */
    Description?: NonEmptyMaxLength256String;
    /**
     * The numerical priority for this job. Higher numbers indicate higher priority.
     */
    Priority: JobPriority;
    /**
     * The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role that Batch Operations will use to execute this job's operation on each object in the manifest.
     */
    RoleArn: IAMRoleArn;
    /**
     * A set of tags to associate with the Amazon S3 Batch Operations job. This is an optional parameter. 
     */
    Tags?: S3TagSet;
  }
  export interface CreateJobResult {
    /**
     * The ID for this job. Amazon S3 generates this ID automatically and returns it after a successful Create Job request.
     */
    JobId?: JobId;
  }
  export type CreationDate = Date;
  export interface DeleteAccessPointPolicyRequest {
    /**
     * The account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point whose policy you want to delete.
     */
    Name: AccessPointName;
  }
  export interface DeleteAccessPointRequest {
    /**
     * The account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point you want to delete.
     */
    Name: AccessPointName;
  }
  export interface DeleteJobTaggingRequest {
    /**
     * The AWS account ID associated with the Amazon S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID for the Amazon S3 Batch Operations job whose tags you want to delete.
     */
    JobId: JobId;
  }
  export interface DeleteJobTaggingResult {
  }
  export interface DeletePublicAccessBlockRequest {
    /**
     * The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to remove.
     */
    AccountId: AccountId;
  }
  export interface DescribeJobRequest {
    /**
     * 
     */
    AccountId: AccountId;
    /**
     * The ID for the job whose information you want to retrieve.
     */
    JobId: JobId;
  }
  export interface DescribeJobResult {
    /**
     * Contains the configuration parameters and status for the job specified in the Describe Job request.
     */
    Job?: JobDescriptor;
  }
  export type FunctionArnString = string;
  export interface GetAccessPointPolicyRequest {
    /**
     * The account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point whose policy you want to retrieve.
     */
    Name: AccessPointName;
  }
  export interface GetAccessPointPolicyResult {
    /**
     * The access point policy associated with the specified access point.
     */
    Policy?: Policy;
  }
  export interface GetAccessPointPolicyStatusRequest {
    /**
     * The account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point whose policy status you want to retrieve.
     */
    Name: AccessPointName;
  }
  export interface GetAccessPointPolicyStatusResult {
    /**
     * Indicates the current policy status of the specified access point.
     */
    PolicyStatus?: PolicyStatus;
  }
  export interface GetAccessPointRequest {
    /**
     * The account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point whose configuration information you want to retrieve.
     */
    Name: AccessPointName;
  }
  export interface GetAccessPointResult {
    /**
     * The name of the specified access point.
     */
    Name?: AccessPointName;
    /**
     * The name of the bucket associated with the specified access point.
     */
    Bucket?: BucketName;
    /**
     * Indicates whether this access point allows access from the public internet. If VpcConfiguration is specified for this access point, then NetworkOrigin is VPC, and the access point doesn't allow access from the public internet. Otherwise, NetworkOrigin is Internet, and the access point allows access from the public internet, subject to the access point and bucket access policies.
     */
    NetworkOrigin?: NetworkOrigin;
    /**
     * Contains the virtual private cloud (VPC) configuration for the specified access point.
     */
    VpcConfiguration?: VpcConfiguration;
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    /**
     * The date and time when the specified access point was created.
     */
    CreationDate?: CreationDate;
  }
  export interface GetJobTaggingRequest {
    /**
     * The AWS account ID associated with the Amazon S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID for the Amazon S3 Batch Operations job whose tags you want to retrieve.
     */
    JobId: JobId;
  }
  export interface GetJobTaggingResult {
    /**
     * The set of tags associated with the Amazon S3 Batch Operations job.
     */
    Tags?: S3TagSet;
  }
  export interface GetPublicAccessBlockOutput {
    /**
     * The PublicAccessBlock configuration currently in effect for this Amazon Web Services account.
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  }
  export interface GetPublicAccessBlockRequest {
    /**
     * The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to retrieve.
     */
    AccountId: AccountId;
  }
  export type IAMRoleArn = string;
  export type IsPublic = boolean;
  export type JobArn = string;
  export type JobCreationTime = Date;
  export interface JobDescriptor {
    /**
     * The ID for the specified job.
     */
    JobId?: JobId;
    /**
     * Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.
     */
    ConfirmationRequired?: ConfirmationRequired;
    /**
     * The description for this job, if one was provided in this job's Create Job request.
     */
    Description?: NonEmptyMaxLength256String;
    /**
     * The Amazon Resource Name (ARN) for this job.
     */
    JobArn?: JobArn;
    /**
     * The current status of the specified job.
     */
    Status?: JobStatus;
    /**
     * The configuration information for the specified job's manifest object.
     */
    Manifest?: JobManifest;
    /**
     * The operation that the specified job is configured to execute on the objects listed in the manifest.
     */
    Operation?: JobOperation;
    /**
     * The priority of the specified job.
     */
    Priority?: JobPriority;
    /**
     * Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.
     */
    ProgressSummary?: JobProgressSummary;
    /**
     * 
     */
    StatusUpdateReason?: JobStatusUpdateReason;
    /**
     * If the specified job failed, this field contains information describing the failure.
     */
    FailureReasons?: JobFailureList;
    /**
     * Contains the configuration information for the job-completion report if you requested one in the Create Job request.
     */
    Report?: JobReport;
    /**
     * A timestamp indicating when this job was created.
     */
    CreationTime?: JobCreationTime;
    /**
     * A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.
     */
    TerminationDate?: JobTerminationDate;
    /**
     * The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role assigned to execute the tasks for this job.
     */
    RoleArn?: IAMRoleArn;
    /**
     * The timestamp when this job was suspended, if it has been suspended.
     */
    SuspendedDate?: SuspendedDate;
    /**
     * The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters the Suspended state to await confirmation before running. After you confirm the job, it automatically exits the Suspended state.
     */
    SuspendedCause?: SuspendedCause;
  }
  export interface JobFailure {
    /**
     * The failure code, if any, for the specified job.
     */
    FailureCode?: JobFailureCode;
    /**
     * The failure reason, if any, for the specified job.
     */
    FailureReason?: JobFailureReason;
  }
  export type JobFailureCode = string;
  export type JobFailureList = JobFailure[];
  export type JobFailureReason = string;
  export type JobId = string;
  export interface JobListDescriptor {
    /**
     * The ID for the specified job.
     */
    JobId?: JobId;
    /**
     * The user-specified description that was included in the specified job's Create Job request.
     */
    Description?: NonEmptyMaxLength256String;
    /**
     * The operation that the specified job is configured to run on each object listed in the manifest.
     */
    Operation?: OperationName;
    /**
     * The current priority for the specified job.
     */
    Priority?: JobPriority;
    /**
     * The specified job's current status.
     */
    Status?: JobStatus;
    /**
     * A timestamp indicating when the specified job was created.
     */
    CreationTime?: JobCreationTime;
    /**
     * A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.
     */
    TerminationDate?: JobTerminationDate;
    /**
     * Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.
     */
    ProgressSummary?: JobProgressSummary;
  }
  export type JobListDescriptorList = JobListDescriptor[];
  export interface JobManifest {
    /**
     * Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.
     */
    Spec: JobManifestSpec;
    /**
     * Contains the information required to locate the specified job's manifest.
     */
    Location: JobManifestLocation;
  }
  export type JobManifestFieldList = JobManifestFieldName[];
  export type JobManifestFieldName = "Ignore"|"Bucket"|"Key"|"VersionId"|string;
  export type JobManifestFormat = "S3BatchOperations_CSV_20180820"|"S3InventoryReport_CSV_20161130"|string;
  export interface JobManifestLocation {
    /**
     * The Amazon Resource Name (ARN) for a manifest object.
     */
    ObjectArn: S3KeyArnString;
    /**
     * The optional version ID to identify a specific version of the manifest object.
     */
    ObjectVersionId?: S3ObjectVersionId;
    /**
     * The ETag for the specified manifest object.
     */
    ETag: NonEmptyMaxLength1024String;
  }
  export interface JobManifestSpec {
    /**
     * Indicates which of the available formats the specified manifest uses.
     */
    Format: JobManifestFormat;
    /**
     * If the specified manifest object is in the S3BatchOperations_CSV_20180820 format, this element describes which columns contain the required data.
     */
    Fields?: JobManifestFieldList;
  }
  export type JobNumberOfTasksFailed = number;
  export type JobNumberOfTasksSucceeded = number;
  export interface JobOperation {
    /**
     * Directs the specified job to invoke an AWS Lambda function on each object in the manifest.
     */
    LambdaInvoke?: LambdaInvokeOperation;
    /**
     * Directs the specified job to execute a PUT Copy object call on each object in the manifest.
     */
    S3PutObjectCopy?: S3CopyObjectOperation;
    /**
     * Directs the specified job to execute a PUT Object acl call on each object in the manifest.
     */
    S3PutObjectAcl?: S3SetObjectAclOperation;
    /**
     * Directs the specified job to execute a PUT Object tagging call on each object in the manifest.
     */
    S3PutObjectTagging?: S3SetObjectTaggingOperation;
    /**
     * Directs the specified job to execute an Initiate Glacier Restore call on each object in the manifest.
     */
    S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;
    S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;
    S3PutObjectRetention?: S3SetObjectRetentionOperation;
  }
  export type JobPriority = number;
  export interface JobProgressSummary {
    /**
     * 
     */
    TotalNumberOfTasks?: JobTotalNumberOfTasks;
    /**
     * 
     */
    NumberOfTasksSucceeded?: JobNumberOfTasksSucceeded;
    /**
     * 
     */
    NumberOfTasksFailed?: JobNumberOfTasksFailed;
  }
  export interface JobReport {
    /**
     * The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.
     */
    Bucket?: S3BucketArnString;
    /**
     * The format of the specified job-completion report.
     */
    Format?: JobReportFormat;
    /**
     * Indicates whether the specified job will generate a job-completion report.
     */
    Enabled: Boolean;
    /**
     * An optional prefix to describe where in the specified bucket the job-completion report will be stored. Amazon S3 will store the job-completion report at &lt;prefix&gt;/job-&lt;job-id&gt;/report.json.
     */
    Prefix?: ReportPrefixString;
    /**
     * Indicates whether the job-completion report will include details of all tasks or only failed tasks.
     */
    ReportScope?: JobReportScope;
  }
  export type JobReportFormat = "Report_CSV_20180820"|string;
  export type JobReportScope = "AllTasks"|"FailedTasksOnly"|string;
  export type JobStatus = "Active"|"Cancelled"|"Cancelling"|"Complete"|"Completing"|"Failed"|"Failing"|"New"|"Paused"|"Pausing"|"Preparing"|"Ready"|"Suspended"|string;
  export type JobStatusList = JobStatus[];
  export type JobStatusUpdateReason = string;
  export type JobTerminationDate = Date;
  export type JobTotalNumberOfTasks = number;
  export type KmsKeyArnString = string;
  export interface LambdaInvokeOperation {
    /**
     * The Amazon Resource Name (ARN) for the AWS Lambda function that the specified job will invoke for each object in the manifest.
     */
    FunctionArn?: FunctionArnString;
  }
  export interface ListAccessPointsRequest {
    /**
     * The AWS account ID for owner of the bucket whose access points you want to list.
     */
    AccountId: AccountId;
    /**
     * The name of the bucket whose associated access points you want to list.
     */
    Bucket?: BucketName;
    /**
     * A continuation token. If a previous call to ListAccessPoints returned a continuation token in the NextToken field, then providing that value here causes Amazon S3 to retrieve the next page of results.
     */
    NextToken?: NonEmptyMaxLength1024String;
    /**
     * The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the NextToken field that you can use to retrieve the next page of access points.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAccessPointsResult {
    /**
     * Contains identification and configuration information for one or more access points associated with the specified bucket.
     */
    AccessPointList?: AccessPointList;
    /**
     * If the specified bucket has more access points than can be returned in one call to this API, then this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.
     */
    NextToken?: NonEmptyMaxLength1024String;
  }
  export interface ListJobsRequest {
    /**
     * 
     */
    AccountId: AccountId;
    /**
     * The List Jobs request returns jobs that match the statuses listed in this element.
     */
    JobStatuses?: JobStatusList;
    /**
     * A pagination token to request the next page of results. Use the token that Amazon S3 returned in the NextToken element of the ListJobsResult from the previous List Jobs request.
     */
    NextToken?: StringForNextToken;
    /**
     * The maximum number of jobs that Amazon S3 will include in the List Jobs response. If there are more jobs than this number, the response will include a pagination token in the NextToken field to enable you to retrieve the next page of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListJobsResult {
    /**
     * If the List Jobs request produced more than the maximum number of results, you can pass this value into a subsequent List Jobs request in order to retrieve the next page of results.
     */
    NextToken?: StringForNextToken;
    /**
     * The list of current jobs and jobs that have ended within the last 30 days.
     */
    Jobs?: JobListDescriptorList;
  }
  export type MaxLength1024String = string;
  export type MaxResults = number;
  export type NetworkOrigin = "Internet"|"VPC"|string;
  export type NonEmptyMaxLength1024String = string;
  export type NonEmptyMaxLength2048String = string;
  export type NonEmptyMaxLength256String = string;
  export type NonEmptyMaxLength64String = string;
  export type OperationName = "LambdaInvoke"|"S3PutObjectCopy"|"S3PutObjectAcl"|"S3PutObjectTagging"|"S3InitiateRestoreObject"|"S3PutObjectLegalHold"|"S3PutObjectRetention"|string;
  export type Policy = string;
  export interface PolicyStatus {
    /**
     * 
     */
    IsPublic?: IsPublic;
  }
  export interface PublicAccessBlockConfiguration {
    /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:   PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.   PUT Object calls fail if the request includes a public ACL.   PUT Bucket calls fail if the request includes a public ACL.   Enabling this setting doesn't affect existing policies or ACLs.
     */
    BlockPublicAcls?: Setting;
    /**
     * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain.  Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
     */
    IgnorePublicAcls?: Setting;
    /**
     * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.  Enabling this setting doesn't affect existing bucket policies.
     */
    BlockPublicPolicy?: Setting;
    /**
     * Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. Setting this element to TRUE restricts access to buckets with public policies to only AWS services and authorized users within this account. Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
     */
    RestrictPublicBuckets?: Setting;
  }
  export interface PutAccessPointPolicyRequest {
    /**
     * The AWS account ID for owner of the bucket associated with the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point that you want to associate with the specified policy.
     */
    Name: AccessPointName;
    /**
     * The policy that you want to apply to the specified access point. For more information about access point policies, see Managing Data Access with Amazon S3 Access Points in the Amazon Simple Storage Service Developer Guide.
     */
    Policy: Policy;
  }
  export interface PutJobTaggingRequest {
    /**
     * The AWS account ID associated with the Amazon S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID for the Amazon S3 Batch Operations job whose tags you want to replace.
     */
    JobId: JobId;
    /**
     * The set of tags to associate with the Amazon S3 Batch Operations job.
     */
    Tags: S3TagSet;
  }
  export interface PutJobTaggingResult {
  }
  export interface PutPublicAccessBlockRequest {
    /**
     * The PublicAccessBlock configuration that you want to apply to the specified Amazon Web Services account.
     */
    PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
    /**
     * The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to set.
     */
    AccountId: AccountId;
  }
  export type ReportPrefixString = string;
  export type RequestedJobStatus = "Cancelled"|"Ready"|string;
  export interface S3AccessControlList {
    /**
     * 
     */
    Owner: S3ObjectOwner;
    /**
     * 
     */
    Grants?: S3GrantList;
  }
  export interface S3AccessControlPolicy {
    /**
     * 
     */
    AccessControlList?: S3AccessControlList;
    /**
     * 
     */
    CannedAccessControlList?: S3CannedAccessControlList;
  }
  export type S3BucketArnString = string;
  export type S3CannedAccessControlList = "private"|"public-read"|"public-read-write"|"aws-exec-read"|"authenticated-read"|"bucket-owner-read"|"bucket-owner-full-control"|string;
  export type S3ContentLength = number;
  export interface S3CopyObjectOperation {
    /**
     * 
     */
    TargetResource?: S3BucketArnString;
    /**
     * 
     */
    CannedAccessControlList?: S3CannedAccessControlList;
    /**
     * 
     */
    AccessControlGrants?: S3GrantList;
    /**
     * 
     */
    MetadataDirective?: S3MetadataDirective;
    /**
     * 
     */
    ModifiedSinceConstraint?: TimeStamp;
    /**
     * 
     */
    NewObjectMetadata?: S3ObjectMetadata;
    /**
     * 
     */
    NewObjectTagging?: S3TagSet;
    /**
     * 
     */
    RedirectLocation?: NonEmptyMaxLength2048String;
    /**
     * 
     */
    RequesterPays?: Boolean;
    /**
     * 
     */
    StorageClass?: S3StorageClass;
    /**
     * 
     */
    UnModifiedSinceConstraint?: TimeStamp;
    /**
     * 
     */
    SSEAwsKmsKeyId?: KmsKeyArnString;
    /**
     * 
     */
    TargetKeyPrefix?: NonEmptyMaxLength1024String;
    /**
     * The Legal Hold status to be applied to all objects in the Batch Operations job.
     */
    ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus;
    /**
     * The Retention mode to be applied to all objects in the Batch Operations job.
     */
    ObjectLockMode?: S3ObjectLockMode;
    /**
     * The date when the applied Object Retention configuration will expire on all objects in the Batch Operations job.
     */
    ObjectLockRetainUntilDate?: TimeStamp;
  }
  export type S3ExpirationInDays = number;
  export type S3GlacierJobTier = "BULK"|"STANDARD"|string;
  export interface S3Grant {
    /**
     * 
     */
    Grantee?: S3Grantee;
    /**
     * 
     */
    Permission?: S3Permission;
  }
  export type S3GrantList = S3Grant[];
  export interface S3Grantee {
    /**
     * 
     */
    TypeIdentifier?: S3GranteeTypeIdentifier;
    /**
     * 
     */
    Identifier?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    DisplayName?: NonEmptyMaxLength1024String;
  }
  export type S3GranteeTypeIdentifier = "id"|"emailAddress"|"uri"|string;
  export interface S3InitiateRestoreObjectOperation {
    /**
     * 
     */
    ExpirationInDays?: S3ExpirationInDays;
    /**
     * 
     */
    GlacierJobTier?: S3GlacierJobTier;
  }
  export type S3KeyArnString = string;
  export type S3MetadataDirective = "COPY"|"REPLACE"|string;
  export interface S3ObjectLockLegalHold {
    /**
     * The Legal Hold status to be applied to all objects in the Batch Operations job.
     */
    Status: S3ObjectLockLegalHoldStatus;
  }
  export type S3ObjectLockLegalHoldStatus = "OFF"|"ON"|string;
  export type S3ObjectLockMode = "COMPLIANCE"|"GOVERNANCE"|string;
  export type S3ObjectLockRetentionMode = "COMPLIANCE"|"GOVERNANCE"|string;
  export interface S3ObjectMetadata {
    /**
     * 
     */
    CacheControl?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    ContentDisposition?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    ContentEncoding?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    ContentLanguage?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    UserMetadata?: S3UserMetadata;
    /**
     * 
     */
    ContentLength?: S3ContentLength;
    /**
     * 
     */
    ContentMD5?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    ContentType?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    HttpExpiresDate?: TimeStamp;
    /**
     * 
     */
    RequesterCharged?: Boolean;
    /**
     * 
     */
    SSEAlgorithm?: S3SSEAlgorithm;
  }
  export interface S3ObjectOwner {
    /**
     * 
     */
    ID?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    DisplayName?: NonEmptyMaxLength1024String;
  }
  export type S3ObjectVersionId = string;
  export type S3Permission = "FULL_CONTROL"|"READ"|"WRITE"|"READ_ACP"|"WRITE_ACP"|string;
  export interface S3Retention {
    /**
     * The date when the applied Object Retention will expire on all objects in the Batch Operations job.
     */
    RetainUntilDate?: TimeStamp;
    /**
     * The Retention mode to be applied to all objects in the Batch Operations job.
     */
    Mode?: S3ObjectLockRetentionMode;
  }
  export type S3SSEAlgorithm = "AES256"|"KMS"|string;
  export interface S3SetObjectAclOperation {
    /**
     * 
     */
    AccessControlPolicy?: S3AccessControlPolicy;
  }
  export interface S3SetObjectLegalHoldOperation {
    /**
     * The Legal Hold contains the status to be applied to all objects in the Batch Operations job.
     */
    LegalHold: S3ObjectLockLegalHold;
  }
  export interface S3SetObjectRetentionOperation {
    /**
     * Indicates if the operation should be applied to objects in the Batch Operations job even if they have Governance-type Object Lock in place.
     */
    BypassGovernanceRetention?: Boolean;
    /**
     * Amazon S3 object lock Retention contains the retention mode to be applied to all objects in the Batch Operations job.
     */
    Retention: S3Retention;
  }
  export interface S3SetObjectTaggingOperation {
    /**
     * 
     */
    TagSet?: S3TagSet;
  }
  export type S3StorageClass = "STANDARD"|"STANDARD_IA"|"ONEZONE_IA"|"GLACIER"|"INTELLIGENT_TIERING"|"DEEP_ARCHIVE"|string;
  export interface S3Tag {
    /**
     * 
     */
    Key: TagKeyString;
    /**
     * 
     */
    Value: TagValueString;
  }
  export type S3TagSet = S3Tag[];
  export type S3UserMetadata = {[key: string]: MaxLength1024String};
  export type Setting = boolean;
  export type StringForNextToken = string;
  export type SuspendedCause = string;
  export type SuspendedDate = Date;
  export type TagKeyString = string;
  export type TagValueString = string;
  export type TimeStamp = Date;
  export interface UpdateJobPriorityRequest {
    /**
     * 
     */
    AccountId: AccountId;
    /**
     * The ID for the job whose priority you want to update.
     */
    JobId: JobId;
    /**
     * The priority you want to assign to this job.
     */
    Priority: JobPriority;
  }
  export interface UpdateJobPriorityResult {
    /**
     * The ID for the job whose priority Amazon S3 updated.
     */
    JobId: JobId;
    /**
     * The new priority assigned to the specified job.
     */
    Priority: JobPriority;
  }
  export interface UpdateJobStatusRequest {
    /**
     * 
     */
    AccountId: AccountId;
    /**
     * The ID of the job whose status you want to update.
     */
    JobId: JobId;
    /**
     * The status that you want to move the specified job to.
     */
    RequestedJobStatus: RequestedJobStatus;
    /**
     * A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.
     */
    StatusUpdateReason?: JobStatusUpdateReason;
  }
  export interface UpdateJobStatusResult {
    /**
     * The ID for the job whose status was updated.
     */
    JobId?: JobId;
    /**
     * The current status for the specified job.
     */
    Status?: JobStatus;
    /**
     * The reason that the specified job's status was updated.
     */
    StatusUpdateReason?: JobStatusUpdateReason;
  }
  export interface VpcConfiguration {
    /**
     * If this field is specified, this access point will only allow connections from the specified VPC ID.
     */
    VpcId: VpcId;
  }
  export type VpcId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-08-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & UseDualstackConfigOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the S3Control client.
   */
  export import Types = S3Control;
}
export = S3Control;
