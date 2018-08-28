import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class S3Control extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: S3Control.Types.ClientConfiguration)
  config: Config & S3Control.Types.ClientConfiguration;
  /**
   * 
   */
  deletePublicLockdown(params: S3Control.Types.DeletePublicLockdownRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deletePublicLockdown(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  getPublicLockdown(params: S3Control.Types.GetPublicLockdownRequest, callback?: (err: AWSError, data: S3Control.Types.GetPublicLockdownOutput) => void): Request<S3Control.Types.GetPublicLockdownOutput, AWSError>;
  /**
   * 
   */
  getPublicLockdown(callback?: (err: AWSError, data: S3Control.Types.GetPublicLockdownOutput) => void): Request<S3Control.Types.GetPublicLockdownOutput, AWSError>;
  /**
   * 
   */
  putPublicLockdown(params: S3Control.Types.PutPublicLockdownRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  putPublicLockdown(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace S3Control {
  export type AccountIdType = string;
  export interface DeletePublicLockdownRequest {
    AccountId?: AccountIdType;
  }
  export interface GetPublicLockdownOutput {
    PublicLockdownConfiguration?: PublicLockdownConfigurationType;
  }
  export interface GetPublicLockdownRequest {
    AccountId?: AccountIdType;
  }
  export interface PublicLockdownConfigurationType {
    RejectPublicAcls?: SettingType;
    IgnorePublicAcls?: SettingType;
    BlockPublicPolicy?: SettingType;
    LockdownPublicBucket?: SettingType;
  }
  export interface PutPublicLockdownRequest {
    PublicLockdownConfiguration: PublicLockdownConfigurationType;
    AccountId?: AccountIdType;
  }
  export type SettingType = boolean;
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
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the S3Control client.
   */
  export import Types = S3Control;
}
export = S3Control;
