import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ApiGatewayManagementApi extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ApiGatewayManagementApi.Types.ClientConfiguration)
  config: Config & ApiGatewayManagementApi.Types.ClientConfiguration;
  /**
   * Sends the provided data to the specified connection.
   */
  postToConnection(params: ApiGatewayManagementApi.Types.PostToConnectionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sends the provided data to the specified connection.
   */
  postToConnection(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace ApiGatewayManagementApi {
  export type Data = Buffer|Uint8Array|Blob|string;
  export interface PostToConnectionRequest {
    /**
     * The data to be sent to the client specified by its connection id.
     */
    Data: Data;
    /**
     * The identifier of the connection that a specific client is using.
     */
    ConnectionId: __string;
  }
  export type __string = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-29"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ApiGatewayManagementApi client.
   */
  export import Types = ApiGatewayManagementApi;
}
export = ApiGatewayManagementApi;
