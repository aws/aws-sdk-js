import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CodeStarconnections extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeStarconnections.Types.ClientConfiguration)
  config: Config & CodeStarconnections.Types.ClientConfiguration;
  /**
   * Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
   */
  createConnection(params: CodeStarconnections.Types.CreateConnectionInput, callback?: (err: AWSError, data: CodeStarconnections.Types.CreateConnectionOutput) => void): Request<CodeStarconnections.Types.CreateConnectionOutput, AWSError>;
  /**
   * Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
   */
  createConnection(callback?: (err: AWSError, data: CodeStarconnections.Types.CreateConnectionOutput) => void): Request<CodeStarconnections.Types.CreateConnectionOutput, AWSError>;
  /**
   * The connection to be deleted.
   */
  deleteConnection(params: CodeStarconnections.Types.DeleteConnectionInput, callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteConnectionOutput) => void): Request<CodeStarconnections.Types.DeleteConnectionOutput, AWSError>;
  /**
   * The connection to be deleted.
   */
  deleteConnection(callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteConnectionOutput) => void): Request<CodeStarconnections.Types.DeleteConnectionOutput, AWSError>;
  /**
   * Returns the connection ARN and details such as status, owner, and provider type.
   */
  getConnection(params: CodeStarconnections.Types.GetConnectionInput, callback?: (err: AWSError, data: CodeStarconnections.Types.GetConnectionOutput) => void): Request<CodeStarconnections.Types.GetConnectionOutput, AWSError>;
  /**
   * Returns the connection ARN and details such as status, owner, and provider type.
   */
  getConnection(callback?: (err: AWSError, data: CodeStarconnections.Types.GetConnectionOutput) => void): Request<CodeStarconnections.Types.GetConnectionOutput, AWSError>;
  /**
   * Lists the connections associated with your account.
   */
  listConnections(params: CodeStarconnections.Types.ListConnectionsInput, callback?: (err: AWSError, data: CodeStarconnections.Types.ListConnectionsOutput) => void): Request<CodeStarconnections.Types.ListConnectionsOutput, AWSError>;
  /**
   * Lists the connections associated with your account.
   */
  listConnections(callback?: (err: AWSError, data: CodeStarconnections.Types.ListConnectionsOutput) => void): Request<CodeStarconnections.Types.ListConnectionsOutput, AWSError>;
}
declare namespace CodeStarconnections {
  export type AccountId = string;
  export interface Connection {
    /**
     * The name of the connection. Connection names must be unique in an AWS user account.
     */
    ConnectionName?: ConnectionName;
    /**
     * The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between AWS services.  The ARN is never reused if the connection is deleted. 
     */
    ConnectionArn?: ConnectionArn;
    /**
     * The name of the external provider where your third-party code repository is configured. Currently, the valid provider type is Bitbucket.
     */
    ProviderType?: ProviderType;
    /**
     * The name of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.
     */
    OwnerAccountId?: AccountId;
    /**
     * The current status of the connection. 
     */
    ConnectionStatus?: ConnectionStatus;
  }
  export type ConnectionArn = string;
  export type ConnectionList = Connection[];
  export type ConnectionName = string;
  export type ConnectionStatus = "PENDING"|"AVAILABLE"|"ERROR"|string;
  export interface CreateConnectionInput {
    /**
     * The name of the external provider where your third-party code repository is configured. Currently, the valid provider type is Bitbucket.
     */
    ProviderType: ProviderType;
    /**
     * The name of the connection to be created. The name must be unique in the calling AWS account.
     */
    ConnectionName: ConnectionName;
  }
  export interface CreateConnectionOutput {
    /**
     * The Amazon Resource Name (ARN) of the connection to be created. The ARN is used as the connection reference when the connection is shared between AWS services.  The ARN is never reused if the connection is deleted. 
     */
    ConnectionArn: ConnectionArn;
  }
  export interface DeleteConnectionInput {
    /**
     * The Amazon Resource Name (ARN) of the connection to be deleted.  The ARN is never reused if the connection is deleted. 
     */
    ConnectionArn: ConnectionArn;
  }
  export interface DeleteConnectionOutput {
  }
  export interface GetConnectionInput {
    /**
     * The Amazon Resource Name (ARN) of a connection.
     */
    ConnectionArn: ConnectionArn;
  }
  export interface GetConnectionOutput {
    /**
     * The connection details, such as status, owner, and provider type.
     */
    Connection?: Connection;
  }
  export interface ListConnectionsInput {
    /**
     * Filters the list of connections to those associated with a specified provider, such as Bitbucket.
     */
    ProviderTypeFilter?: ProviderType;
    /**
     * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value.
     */
    MaxResults?: MaxResults;
    /**
     * The token that was returned from the previous ListConnections call, which can be used to return the next set of connections in the list.
     */
    NextToken?: NextToken;
  }
  export interface ListConnectionsOutput {
    /**
     * A list of connections and the details for each connection, such as status, owner, and provider type.
     */
    Connections?: ConnectionList;
    /**
     * A token that can be used in the next ListConnections call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type ProviderType = "Bitbucket"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-12-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CodeStarconnections client.
   */
  export import Types = CodeStarconnections;
}
export = CodeStarconnections;
