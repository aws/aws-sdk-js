import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Signer extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Signer.Types.ClientConfiguration)
  config: Config & Signer.Types.ClientConfiguration;
  /**
   * Changes the state of an ACTIVE signing profile to CANCELED. A canceled profile is still viewable with the ListSigningProfiles operation, but it cannot perform new signing jobs, and is deleted two years after cancelation.
   */
  cancelSigningProfile(params: Signer.Types.CancelSigningProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the state of an ACTIVE signing profile to CANCELED. A canceled profile is still viewable with the ListSigningProfiles operation, but it cannot perform new signing jobs, and is deleted two years after cancelation.
   */
  cancelSigningProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns information about a specific code signing job. You specify the job by using the jobId value that is returned by the StartSigningJob operation. 
   */
  describeSigningJob(params: Signer.Types.DescribeSigningJobRequest, callback?: (err: AWSError, data: Signer.Types.DescribeSigningJobResponse) => void): Request<Signer.Types.DescribeSigningJobResponse, AWSError>;
  /**
   * Returns information about a specific code signing job. You specify the job by using the jobId value that is returned by the StartSigningJob operation. 
   */
  describeSigningJob(callback?: (err: AWSError, data: Signer.Types.DescribeSigningJobResponse) => void): Request<Signer.Types.DescribeSigningJobResponse, AWSError>;
  /**
   * Returns information on a specific signing platform.
   */
  getSigningPlatform(params: Signer.Types.GetSigningPlatformRequest, callback?: (err: AWSError, data: Signer.Types.GetSigningPlatformResponse) => void): Request<Signer.Types.GetSigningPlatformResponse, AWSError>;
  /**
   * Returns information on a specific signing platform.
   */
  getSigningPlatform(callback?: (err: AWSError, data: Signer.Types.GetSigningPlatformResponse) => void): Request<Signer.Types.GetSigningPlatformResponse, AWSError>;
  /**
   * Returns information on a specific signing profile.
   */
  getSigningProfile(params: Signer.Types.GetSigningProfileRequest, callback?: (err: AWSError, data: Signer.Types.GetSigningProfileResponse) => void): Request<Signer.Types.GetSigningProfileResponse, AWSError>;
  /**
   * Returns information on a specific signing profile.
   */
  getSigningProfile(callback?: (err: AWSError, data: Signer.Types.GetSigningProfileResponse) => void): Request<Signer.Types.GetSigningProfileResponse, AWSError>;
  /**
   * Lists all your signing jobs. You can use the maxResults parameter to limit the number of signing jobs that are returned in the response. If additional jobs remain to be listed, AWS Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that AWS Signer returns in the nextToken parameter until all of your signing jobs have been returned. 
   */
  listSigningJobs(params: Signer.Types.ListSigningJobsRequest, callback?: (err: AWSError, data: Signer.Types.ListSigningJobsResponse) => void): Request<Signer.Types.ListSigningJobsResponse, AWSError>;
  /**
   * Lists all your signing jobs. You can use the maxResults parameter to limit the number of signing jobs that are returned in the response. If additional jobs remain to be listed, AWS Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that AWS Signer returns in the nextToken parameter until all of your signing jobs have been returned. 
   */
  listSigningJobs(callback?: (err: AWSError, data: Signer.Types.ListSigningJobsResponse) => void): Request<Signer.Types.ListSigningJobsResponse, AWSError>;
  /**
   * Lists all signing platforms available in AWS Signer that match the request parameters. If additional jobs remain to be listed, AWS Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that AWS Signer returns in the nextToken parameter until all of your signing jobs have been returned.
   */
  listSigningPlatforms(params: Signer.Types.ListSigningPlatformsRequest, callback?: (err: AWSError, data: Signer.Types.ListSigningPlatformsResponse) => void): Request<Signer.Types.ListSigningPlatformsResponse, AWSError>;
  /**
   * Lists all signing platforms available in AWS Signer that match the request parameters. If additional jobs remain to be listed, AWS Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that AWS Signer returns in the nextToken parameter until all of your signing jobs have been returned.
   */
  listSigningPlatforms(callback?: (err: AWSError, data: Signer.Types.ListSigningPlatformsResponse) => void): Request<Signer.Types.ListSigningPlatformsResponse, AWSError>;
  /**
   * Lists all available signing profiles in your AWS account. Returns only profiles with an ACTIVE status unless the includeCanceled request field is set to true. If additional jobs remain to be listed, AWS Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that AWS Signer returns in the nextToken parameter until all of your signing jobs have been returned.
   */
  listSigningProfiles(params: Signer.Types.ListSigningProfilesRequest, callback?: (err: AWSError, data: Signer.Types.ListSigningProfilesResponse) => void): Request<Signer.Types.ListSigningProfilesResponse, AWSError>;
  /**
   * Lists all available signing profiles in your AWS account. Returns only profiles with an ACTIVE status unless the includeCanceled request field is set to true. If additional jobs remain to be listed, AWS Signer returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that AWS Signer returns in the nextToken parameter until all of your signing jobs have been returned.
   */
  listSigningProfiles(callback?: (err: AWSError, data: Signer.Types.ListSigningProfilesResponse) => void): Request<Signer.Types.ListSigningProfilesResponse, AWSError>;
  /**
   * Creates a signing profile. A signing profile is an AWS Signer template that can be used to carry out a pre-defined signing job. For more information, see http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html 
   */
  putSigningProfile(params: Signer.Types.PutSigningProfileRequest, callback?: (err: AWSError, data: Signer.Types.PutSigningProfileResponse) => void): Request<Signer.Types.PutSigningProfileResponse, AWSError>;
  /**
   * Creates a signing profile. A signing profile is an AWS Signer template that can be used to carry out a pre-defined signing job. For more information, see http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html 
   */
  putSigningProfile(callback?: (err: AWSError, data: Signer.Types.PutSigningProfileResponse) => void): Request<Signer.Types.PutSigningProfileResponse, AWSError>;
  /**
   * Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the ListSigningJobs operation for two years after they are performed. Note the following requirements:     You must create an Amazon S3 source bucket. For more information, see Create a Bucket in the Amazon S3 Getting Started Guide.    Your S3 source bucket must be version enabled.   You must create an S3 destination bucket. AWS Signer uses your S3 destination bucket to write your signed code.   You specify the name of the source and destination buckets when calling the StartSigningJob operation.   You must also specify a request token that identifies your request to AWS Signer.    You can call the DescribeSigningJob and the ListSigningJobs actions after you call StartSigningJob. For a Java example that shows how to use this action, see http://docs.aws.amazon.com/acm/latest/userguide/ 
   */
  startSigningJob(params: Signer.Types.StartSigningJobRequest, callback?: (err: AWSError, data: Signer.Types.StartSigningJobResponse) => void): Request<Signer.Types.StartSigningJobResponse, AWSError>;
  /**
   * Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the ListSigningJobs operation for two years after they are performed. Note the following requirements:     You must create an Amazon S3 source bucket. For more information, see Create a Bucket in the Amazon S3 Getting Started Guide.    Your S3 source bucket must be version enabled.   You must create an S3 destination bucket. AWS Signer uses your S3 destination bucket to write your signed code.   You specify the name of the source and destination buckets when calling the StartSigningJob operation.   You must also specify a request token that identifies your request to AWS Signer.    You can call the DescribeSigningJob and the ListSigningJobs actions after you call StartSigningJob. For a Java example that shows how to use this action, see http://docs.aws.amazon.com/acm/latest/userguide/ 
   */
  startSigningJob(callback?: (err: AWSError, data: Signer.Types.StartSigningJobResponse) => void): Request<Signer.Types.StartSigningJobResponse, AWSError>;
  /**
   * Waits for the successfulSigningJob state by periodically calling the underlying Signer.describeSigningJoboperation every 20 seconds (at most 25 times).
   */
  waitFor(state: "successfulSigningJob", params: Signer.Types.DescribeSigningJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Signer.Types.DescribeSigningJobResponse) => void): Request<Signer.Types.DescribeSigningJobResponse, AWSError>;
  /**
   * Waits for the successfulSigningJob state by periodically calling the underlying Signer.describeSigningJoboperation every 20 seconds (at most 25 times).
   */
  waitFor(state: "successfulSigningJob", callback?: (err: AWSError, data: Signer.Types.DescribeSigningJobResponse) => void): Request<Signer.Types.DescribeSigningJobResponse, AWSError>;
}
declare namespace Signer {
  export type key = string;
  export type BucketName = string;
  export interface CancelSigningProfileRequest {
    /**
     * The name of the signing profile to be canceled.
     */
    profileName: ProfileName;
  }
  export type Category = "AWSIoT"|string;
  export type CertificateArn = string;
  export type ClientRequestToken = string;
  export type CompletedAt = Date;
  export type CreatedAt = Date;
  export interface DescribeSigningJobRequest {
    /**
     * The ID of the signing job on input.
     */
    jobId: JobId;
  }
  export interface DescribeSigningJobResponse {
    /**
     * The ID of the signing job on output.
     */
    jobId?: JobId;
    /**
     * The object that contains the name of your S3 bucket or your raw code.
     */
    source?: Source;
    /**
     * Amazon Resource Name (ARN) of your code signing certificate.
     */
    signingMaterial?: SigningMaterial;
    /**
     * The microcontroller platform to which your signed code image will be distributed.
     */
    platformId?: PlatformId;
    /**
     * The name of the profile that initiated the signing operation.
     */
    profileName?: ProfileName;
    /**
     * A list of any overrides that were applied to the signing operation.
     */
    overrides?: SigningPlatformOverrides;
    /**
     * Map of user-assigned key-value pairs used during signing. These values contain any information that you specified for use in your signing job. 
     */
    signingParameters?: SigningParameters;
    /**
     * Date and time that the signing job was created.
     */
    createdAt?: CreatedAt;
    /**
     * Date and time that the signing job was completed.
     */
    completedAt?: CompletedAt;
    /**
     * The IAM principal that requested the signing job.
     */
    requestedBy?: RequestedBy;
    /**
     * Status of the signing job.
     */
    status?: SigningStatus;
    /**
     * String value that contains the status reason.
     */
    statusReason?: StatusReason;
    /**
     * Name of the S3 bucket where the signed code image is saved by AWS Signer.
     */
    signedObject?: SignedObject;
  }
  export interface Destination {
    /**
     * The S3Destination object.
     */
    s3?: S3Destination;
  }
  export type DisplayName = string;
  export type EncryptionAlgorithm = "RSA"|"ECDSA"|string;
  export interface EncryptionAlgorithmOptions {
    /**
     * The set of accepted encryption algorithms that are allowed in an AWS Signer job.
     */
    allowedValues: EncryptionAlgorithms;
    /**
     * The default encryption algorithm that is used by an AWS Signer job.
     */
    defaultValue: EncryptionAlgorithm;
  }
  export type EncryptionAlgorithms = EncryptionAlgorithm[];
  export interface GetSigningPlatformRequest {
    /**
     * The ID of the target signing platform.
     */
    platformId: PlatformId;
  }
  export interface GetSigningPlatformResponse {
    /**
     * The ID of the target signing platform.
     */
    platformId?: PlatformId;
    /**
     * The display name of the target signing platform.
     */
    displayName?: DisplayName;
    /**
     * A list of partner entities that use the target signing platform.
     */
    partner?: String;
    /**
     * The validation template that is used by the target signing platform.
     */
    target?: String;
    /**
     * The category type of the target signing platform.
     */
    category?: Category;
    /**
     * A list of configurations applied to the target platform at signing.
     */
    signingConfiguration?: SigningConfiguration;
    /**
     * The format of the target platform's signing image.
     */
    signingImageFormat?: SigningImageFormat;
    /**
     * The maximum size (in MB) of the payload that can be signed by the target platform.
     */
    maxSizeInMB?: MaxSizeInMB;
  }
  export interface GetSigningProfileRequest {
    /**
     * The name of the target signing profile.
     */
    profileName: ProfileName;
  }
  export interface GetSigningProfileResponse {
    /**
     * The name of the target signing profile.
     */
    profileName?: ProfileName;
    /**
     * The ARN of the certificate that the target profile uses for signing operations.
     */
    signingMaterial?: SigningMaterial;
    /**
     * The ID of the platform that is used by the target signing profile.
     */
    platformId?: PlatformId;
    /**
     * A list of overrides applied by the target signing profile for signing operations.
     */
    overrides?: SigningPlatformOverrides;
    /**
     * A map of key-value pairs for signing operations that is attached to the target signing profile.
     */
    signingParameters?: SigningParameters;
    /**
     * The status of the target signing profile.
     */
    status?: SigningProfileStatus;
  }
  export type HashAlgorithm = "SHA1"|"SHA256"|string;
  export interface HashAlgorithmOptions {
    /**
     * The set of accepted hash algorithms allowed in an AWS Signer job.
     */
    allowedValues: HashAlgorithms;
    /**
     * The default hash algorithm that is used in an AWS Signer job.
     */
    defaultValue: HashAlgorithm;
  }
  export type HashAlgorithms = HashAlgorithm[];
  export type ImageFormat = "JSON"|string;
  export type ImageFormats = ImageFormat[];
  export type JobId = string;
  export type Key = string;
  export interface ListSigningJobsRequest {
    /**
     * A status value with which to filter your results.
     */
    status?: SigningStatus;
    /**
     * The ID of microcontroller platform that you specified for the distribution of your code image.
     */
    platformId?: PlatformId;
    /**
     * The IAM principal that requested the signing job.
     */
    requestedBy?: RequestedBy;
    /**
     * Specifies the maximum number of items to return in the response. Use this parameter when paginating results. If additional items exist beyond the number you specify, the nextToken element is set in the response. Use the nextToken value in a subsequent request to retrieve additional items. 
     */
    maxResults?: MaxResults;
    /**
     * String for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of nextToken from the response that you just received.
     */
    nextToken?: NextToken;
  }
  export interface ListSigningJobsResponse {
    /**
     * A list of your signing jobs.
     */
    jobs?: SigningJobs;
    /**
     * String for specifying the next set of paginated results.
     */
    nextToken?: NextToken;
  }
  export interface ListSigningPlatformsRequest {
    /**
     * The category type of a signing platform.
     */
    category?: String;
    /**
     * Any partner entities connected to a signing platform.
     */
    partner?: String;
    /**
     * The validation template that is used by the target signing platform.
     */
    target?: String;
    /**
     * The maximum number of results to be returned by this operation.
     */
    maxResults?: MaxResults;
    /**
     * Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of nextToken from the response that you just received.
     */
    nextToken?: String;
  }
  export interface ListSigningPlatformsResponse {
    /**
     * A list of all platforms that match the request parameters.
     */
    platforms?: SigningPlatforms;
    /**
     * Value for specifying the next set of paginated results to return.
     */
    nextToken?: String;
  }
  export interface ListSigningProfilesRequest {
    /**
     * Designates whether to include profiles with the status of CANCELED.
     */
    includeCanceled?: bool;
    /**
     * The maximum number of profiles to be returned.
     */
    maxResults?: MaxResults;
    /**
     * Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of nextToken from the response that you just received.
     */
    nextToken?: NextToken;
  }
  export interface ListSigningProfilesResponse {
    /**
     * A list of profiles that are available in the AWS account. This includes profiles with the status of CANCELED if the includeCanceled parameter is set to true.
     */
    profiles?: SigningProfiles;
    /**
     * Value for specifying the next set of paginated results to return.
     */
    nextToken?: NextToken;
  }
  export type MaxResults = number;
  export type MaxSizeInMB = number;
  export type NextToken = string;
  export type PlatformId = string;
  export type Prefix = string;
  export type ProfileName = string;
  export interface PutSigningProfileRequest {
    /**
     * The name of the signing profile to be created.
     */
    profileName: ProfileName;
    /**
     * The AWS Certificate Manager certificate that will be used to sign code with the new signing profile.
     */
    signingMaterial: SigningMaterial;
    /**
     * The ID of the signing profile to be created.
     */
    platformId: PlatformId;
    /**
     * A subfield of platform. This specifies any different configuration options that you want to apply to the chosen platform (such as a different hash-algorithm or signing-algorithm).
     */
    overrides?: SigningPlatformOverrides;
    /**
     * Map of key-value pairs for signing. These can include any information that you want to use during signing.
     */
    signingParameters?: SigningParameters;
  }
  export interface PutSigningProfileResponse {
    /**
     * The Amazon Resource Name (ARN) of the signing profile created.
     */
    arn?: string;
  }
  export type RequestedBy = string;
  export interface S3Destination {
    /**
     * Name of the S3 bucket.
     */
    bucketName?: BucketName;
    /**
     * An Amazon S3 prefix that you can use to limit responses to those that begin with the specified prefix.
     */
    prefix?: Prefix;
  }
  export interface S3SignedObject {
    /**
     * Name of the S3 bucket.
     */
    bucketName?: BucketName;
    /**
     * Key name that uniquely identifies a signed code image in your bucket.
     */
    key?: key;
  }
  export interface S3Source {
    /**
     * Name of the S3 bucket.
     */
    bucketName: BucketName;
    /**
     * Key name of the bucket object that contains your unsigned code.
     */
    key: Key;
    /**
     * Version of your source image in your version enabled S3 bucket.
     */
    version: Version;
  }
  export interface SignedObject {
    /**
     * The S3SignedObject.
     */
    s3?: S3SignedObject;
  }
  export interface SigningConfiguration {
    /**
     * The encryption algorithm options that are available for an AWS Signer job.
     */
    encryptionAlgorithmOptions: EncryptionAlgorithmOptions;
    /**
     * The hash algorithm options that are available for an AWS Signer job.
     */
    hashAlgorithmOptions: HashAlgorithmOptions;
  }
  export interface SigningConfigurationOverrides {
    /**
     * A specified override of the default encryption algorithm that is used in an AWS Signer job.
     */
    encryptionAlgorithm?: EncryptionAlgorithm;
    /**
     * A specified override of the default hash algorithm that is used in an AWS Signer job.
     */
    hashAlgorithm?: HashAlgorithm;
  }
  export interface SigningImageFormat {
    /**
     * The supported formats of an AWS Signer signing image.
     */
    supportedFormats: ImageFormats;
    /**
     * The default format of an AWS Signer signing image.
     */
    defaultFormat: ImageFormat;
  }
  export interface SigningJob {
    /**
     * The ID of the signing job.
     */
    jobId?: JobId;
    /**
     * A Source that contains information about a signing job's code image source.
     */
    source?: Source;
    /**
     * A SignedObject structure that contains information about a signing job's signed code image.
     */
    signedObject?: SignedObject;
    /**
     * A SigningMaterial object that contains the Amazon Resource Name (ARN) of the certificate used for the signing job.
     */
    signingMaterial?: SigningMaterial;
    /**
     * The date and time that the signing job was created.
     */
    createdAt?: CreatedAt;
    /**
     * The status of the signing job.
     */
    status?: SigningStatus;
  }
  export type SigningJobs = SigningJob[];
  export interface SigningMaterial {
    /**
     * The Amazon Resource Name (ARN) of the certificates that is used to sign your code.
     */
    certificateArn: CertificateArn;
  }
  export type SigningParameterKey = string;
  export type SigningParameterValue = string;
  export type SigningParameters = {[key: string]: SigningParameterValue};
  export interface SigningPlatform {
    /**
     * The ID of an AWS Signer platform.
     */
    platformId?: String;
    /**
     * The display name of an AWS Signer platform.
     */
    displayName?: String;
    /**
     * Any partner entities linked to an AWS Signer platform.
     */
    partner?: String;
    /**
     * The types of targets that can be signed by an AWS Signer platform.
     */
    target?: String;
    /**
     * The category of an AWS Signer platform.
     */
    category?: Category;
    /**
     * The configuration of an AWS Signer platform. This includes the designated hash algorithm and encryption algorithm of a signing platform.
     */
    signingConfiguration?: SigningConfiguration;
    /**
     * The signing image format that is used by an AWS Signer platform.
     */
    signingImageFormat?: SigningImageFormat;
    /**
     * The maximum size (in MB) of code that can be signed by a AWS Signer platform.
     */
    maxSizeInMB?: MaxSizeInMB;
  }
  export interface SigningPlatformOverrides {
    signingConfiguration?: SigningConfigurationOverrides;
  }
  export type SigningPlatforms = SigningPlatform[];
  export interface SigningProfile {
    /**
     * The name of the AWS Signer profile.
     */
    profileName?: ProfileName;
    /**
     * The ACM certificate that is available for use by a signing profile.
     */
    signingMaterial?: SigningMaterial;
    /**
     * The ID of a platform that is available for use by a signing profile.
     */
    platformId?: PlatformId;
    /**
     * The parameters that are available for use by an AWS Signer user.
     */
    signingParameters?: SigningParameters;
    /**
     * The status of an AWS Signer profile.
     */
    status?: SigningProfileStatus;
  }
  export type SigningProfileStatus = "Active"|"Canceled"|string;
  export type SigningProfiles = SigningProfile[];
  export type SigningStatus = "InProgress"|"Failed"|"Succeeded"|string;
  export interface Source {
    /**
     * The S3Source object.
     */
    s3?: S3Source;
  }
  export interface StartSigningJobRequest {
    /**
     * The S3 bucket that contains the object to sign or a BLOB that contains your raw code.
     */
    source: Source;
    /**
     * The S3 bucket in which to save your signed object. The destination contains the name of your bucket and an optional prefix.
     */
    destination: Destination;
    /**
     * The name of the signing profile.
     */
    profileName?: ProfileName;
    /**
     * String that identifies the signing request. All calls after the first that use this token return the same response as the first call.
     */
    clientRequestToken: ClientRequestToken;
  }
  export interface StartSigningJobResponse {
    /**
     * The ID of your signing job.
     */
    jobId?: JobId;
  }
  export type StatusReason = string;
  export type String = string;
  export type Version = string;
  export type bool = boolean;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-08-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Signer client.
   */
  export import Types = Signer;
}
export = Signer;
