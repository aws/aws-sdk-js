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
   * Removes the Public Access Block configuration for an Amazon Web Services account.
   */
  deletePublicAccessBlock(params: S3Control.Types.DeletePublicAccessBlockRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the Public Access Block configuration for an Amazon Web Services account.
   */
  deletePublicAccessBlock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the Public Access Block configuration for an Amazon Web Services account.
   */
  getPublicAccessBlock(params: S3Control.Types.GetPublicAccessBlockRequest, callback?: (err: AWSError, data: S3Control.Types.GetPublicAccessBlockOutput) => void): Request<S3Control.Types.GetPublicAccessBlockOutput, AWSError>;
  /**
   * Retrieves the Public Access Block configuration for an Amazon Web Services account.
   */
  getPublicAccessBlock(callback?: (err: AWSError, data: S3Control.Types.GetPublicAccessBlockOutput) => void): Request<S3Control.Types.GetPublicAccessBlockOutput, AWSError>;
  /**
   * Creates or modifies the Public Access Block configuration for an Amazon Web Services account.
   */
  putPublicAccessBlock(params: S3Control.Types.PutPublicAccessBlockRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or modifies the Public Access Block configuration for an Amazon Web Services account.
   */
  putPublicAccessBlock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace S3Control {
  export type AccountId = string;
  export interface DeletePublicAccessBlockRequest {
    /**
     * The Account ID for the Amazon Web Services account whose Public Access Block configuration you want to remove.
     */
    AccountId: AccountId;
  }
  export interface GetPublicAccessBlockOutput {
    /**
     * The Public Access Block configuration currently in effect for this Amazon Web Services account.
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  }
  export interface GetPublicAccessBlockRequest {
    /**
     * The Account ID for the Amazon Web Services account whose Public Access Block configuration you want to retrieve.
     */
    AccountId: AccountId;
  }
  export interface PublicAccessBlockConfiguration {
    /**
     * Specifies whether Amazon S3 should block public ACLs for buckets in this account. Setting this element to TRUE causes the following behavior:   PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.   PUT Object calls will fail if the request includes an object ACL.   Note that enabling this setting doesn't affect existing policies or ACLs.
     */
    BlockPublicAcls?: Setting;
    /**
     * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain.  Note that enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
     */
    IgnorePublicAcls?: Setting;
    /**
     * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.  Note that enabling this setting doesn't affect existing bucket policies.
     */
    BlockPublicPolicy?: Setting;
    /**
     * Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. If this element is set to TRUE, then only the bucket owner and AWS Services can access buckets with public policies. Note that enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. 
     */
    RestrictPublicBuckets?: Setting;
  }
  export interface PutPublicAccessBlockRequest {
    /**
     * The Public Access Block configuration that you want to apply to this Amazon Web Services account.
     */
    PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
    /**
     * The Account ID for the Amazon Web Services account whose Public Access Block configuration you want to set.
     */
    AccountId: AccountId;
  }
  export type Setting = boolean;
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
