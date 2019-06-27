import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class EC2InstanceConnect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EC2InstanceConnect.Types.ClientConfiguration)
  config: Config & EC2InstanceConnect.Types.ClientConfiguration;
  /**
   * Pushes an SSH public key to a particular OS user on a given EC2 instance for 60 seconds.
   */
  sendSSHPublicKey(params: EC2InstanceConnect.Types.SendSSHPublicKeyRequest, callback?: (err: AWSError, data: EC2InstanceConnect.Types.SendSSHPublicKeyResponse) => void): Request<EC2InstanceConnect.Types.SendSSHPublicKeyResponse, AWSError>;
  /**
   * Pushes an SSH public key to a particular OS user on a given EC2 instance for 60 seconds.
   */
  sendSSHPublicKey(callback?: (err: AWSError, data: EC2InstanceConnect.Types.SendSSHPublicKeyResponse) => void): Request<EC2InstanceConnect.Types.SendSSHPublicKeyResponse, AWSError>;
}
declare namespace EC2InstanceConnect {
  export type AvailabilityZone = string;
  export type InstanceId = string;
  export type InstanceOSUser = string;
  export type RequestId = string;
  export type SSHPublicKey = string;
  export interface SendSSHPublicKeyRequest {
    /**
     * The EC2 instance you wish to publish the SSH key to.
     */
    InstanceId: InstanceId;
    /**
     * The OS user on the EC2 instance whom the key may be used to authenticate as.
     */
    InstanceOSUser: InstanceOSUser;
    /**
     * The public key to be published to the instance. To use it after publication you must have the matching private key.
     */
    SSHPublicKey: SSHPublicKey;
    /**
     * The availability zone the EC2 instance was launched in.
     */
    AvailabilityZone: AvailabilityZone;
  }
  export interface SendSSHPublicKeyResponse {
    /**
     * The request ID as logged by EC2 Connect. Please provide this when contacting AWS Support.
     */
    RequestId?: RequestId;
    /**
     * Indicates request success.
     */
    Success?: Success;
  }
  export type Success = boolean;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-04-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EC2InstanceConnect client.
   */
  export import Types = EC2InstanceConnect;
}
export = EC2InstanceConnect;
