import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Transfer extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Transfer.Types.ClientConfiguration)
  config: Config & Transfer.Types.ClientConfiguration;
  /**
   * Instantiates an autoscaling virtual server based on Secure File Transfer Protocol (SFTP) in AWS. When you make updates to your server or when you work with users, use the service-generated ServerId property that is assigned to the newly created server.
   */
  createServer(params: Transfer.Types.CreateServerRequest, callback?: (err: AWSError, data: Transfer.Types.CreateServerResponse) => void): Request<Transfer.Types.CreateServerResponse, AWSError>;
  /**
   * Instantiates an autoscaling virtual server based on Secure File Transfer Protocol (SFTP) in AWS. When you make updates to your server or when you work with users, use the service-generated ServerId property that is assigned to the newly created server.
   */
  createServer(callback?: (err: AWSError, data: Transfer.Types.CreateServerResponse) => void): Request<Transfer.Types.CreateServerResponse, AWSError>;
  /**
   * Creates a user and associates them with an existing Secure File Transfer Protocol (SFTP) server. You can only create and associate users with SFTP servers that have the IdentityProviderType set to SERVICE_MANAGED. Using parameters for CreateUser, you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a scope-down policy, and assign metadata with tags that can be used to group and search for users.
   */
  createUser(params: Transfer.Types.CreateUserRequest, callback?: (err: AWSError, data: Transfer.Types.CreateUserResponse) => void): Request<Transfer.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a user and associates them with an existing Secure File Transfer Protocol (SFTP) server. You can only create and associate users with SFTP servers that have the IdentityProviderType set to SERVICE_MANAGED. Using parameters for CreateUser, you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a scope-down policy, and assign metadata with tags that can be used to group and search for users.
   */
  createUser(callback?: (err: AWSError, data: Transfer.Types.CreateUserResponse) => void): Request<Transfer.Types.CreateUserResponse, AWSError>;
  /**
   * Deletes the Secure File Transfer Protocol (SFTP) server that you specify. No response returns from this operation.
   */
  deleteServer(params: Transfer.Types.DeleteServerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the Secure File Transfer Protocol (SFTP) server that you specify. No response returns from this operation.
   */
  deleteServer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user's Secure Shell (SSH) public key. No response is returned from this operation.
   */
  deleteSshPublicKey(params: Transfer.Types.DeleteSshPublicKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user's Secure Shell (SSH) public key. No response is returned from this operation.
   */
  deleteSshPublicKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the user belonging to the server you specify. No response returns from this operation.  When you delete a user from a server, the user's information is lost. 
   */
  deleteUser(params: Transfer.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the user belonging to the server you specify. No response returns from this operation.  When you delete a user from a server, the user's information is lost. 
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes the server that you specify by passing the ServerId parameter. The response contains a description of the server's properties.
   */
  describeServer(params: Transfer.Types.DescribeServerRequest, callback?: (err: AWSError, data: Transfer.Types.DescribeServerResponse) => void): Request<Transfer.Types.DescribeServerResponse, AWSError>;
  /**
   * Describes the server that you specify by passing the ServerId parameter. The response contains a description of the server's properties.
   */
  describeServer(callback?: (err: AWSError, data: Transfer.Types.DescribeServerResponse) => void): Request<Transfer.Types.DescribeServerResponse, AWSError>;
  /**
   * Describes the user assigned to a specific server, as identified by its ServerId property. The response from this call returns the properties of the user associated with the ServerId value that was specified.
   */
  describeUser(params: Transfer.Types.DescribeUserRequest, callback?: (err: AWSError, data: Transfer.Types.DescribeUserResponse) => void): Request<Transfer.Types.DescribeUserResponse, AWSError>;
  /**
   * Describes the user assigned to a specific server, as identified by its ServerId property. The response from this call returns the properties of the user associated with the ServerId value that was specified.
   */
  describeUser(callback?: (err: AWSError, data: Transfer.Types.DescribeUserResponse) => void): Request<Transfer.Types.DescribeUserResponse, AWSError>;
  /**
   * Adds a Secure Shell (SSH) public key to a user account identified by a UserName value assigned to a specific server, identified by ServerId. The response returns the UserName value, the ServerId value, and the name of the SshPublicKeyId.
   */
  importSshPublicKey(params: Transfer.Types.ImportSshPublicKeyRequest, callback?: (err: AWSError, data: Transfer.Types.ImportSshPublicKeyResponse) => void): Request<Transfer.Types.ImportSshPublicKeyResponse, AWSError>;
  /**
   * Adds a Secure Shell (SSH) public key to a user account identified by a UserName value assigned to a specific server, identified by ServerId. The response returns the UserName value, the ServerId value, and the name of the SshPublicKeyId.
   */
  importSshPublicKey(callback?: (err: AWSError, data: Transfer.Types.ImportSshPublicKeyResponse) => void): Request<Transfer.Types.ImportSshPublicKeyResponse, AWSError>;
  /**
   * Lists the Secure File Transfer Protocol (SFTP) servers that are associated with your AWS account.
   */
  listServers(params: Transfer.Types.ListServersRequest, callback?: (err: AWSError, data: Transfer.Types.ListServersResponse) => void): Request<Transfer.Types.ListServersResponse, AWSError>;
  /**
   * Lists the Secure File Transfer Protocol (SFTP) servers that are associated with your AWS account.
   */
  listServers(callback?: (err: AWSError, data: Transfer.Types.ListServersResponse) => void): Request<Transfer.Types.ListServersResponse, AWSError>;
  /**
   * Lists all of the tags associated with the Amazon Resource Number (ARN) you specify. The resource can be a user, server, or role.
   */
  listTagsForResource(params: Transfer.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Transfer.Types.ListTagsForResourceResponse) => void): Request<Transfer.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all of the tags associated with the Amazon Resource Number (ARN) you specify. The resource can be a user, server, or role.
   */
  listTagsForResource(callback?: (err: AWSError, data: Transfer.Types.ListTagsForResourceResponse) => void): Request<Transfer.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the users for the server that you specify by passing the ServerId parameter.
   */
  listUsers(params: Transfer.Types.ListUsersRequest, callback?: (err: AWSError, data: Transfer.Types.ListUsersResponse) => void): Request<Transfer.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users for the server that you specify by passing the ServerId parameter.
   */
  listUsers(callback?: (err: AWSError, data: Transfer.Types.ListUsersResponse) => void): Request<Transfer.Types.ListUsersResponse, AWSError>;
  /**
   * Changes the state of a Secure File Transfer Protocol (SFTP) server from OFFLINE to ONLINE. It has no impact on an SFTP server that is already ONLINE. An ONLINE server can accept and process file transfer jobs. The state of STARTING indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of START_FAILED can indicate an error condition.  No response is returned from this call.
   */
  startServer(params: Transfer.Types.StartServerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the state of a Secure File Transfer Protocol (SFTP) server from OFFLINE to ONLINE. It has no impact on an SFTP server that is already ONLINE. An ONLINE server can accept and process file transfer jobs. The state of STARTING indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of START_FAILED can indicate an error condition.  No response is returned from this call.
   */
  startServer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the state of an SFTP server from ONLINE to OFFLINE. An OFFLINE server cannot accept and process file transfer jobs. Information tied to your server such as server and user properties are not affected by stopping your server. Stopping a server will not reduce or impact your Secure File Transfer Protocol (SFTP) endpoint billing. The state of STOPPING indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of STOP_FAILED can indicate an error condition. No response is returned from this call.
   */
  stopServer(params: Transfer.Types.StopServerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the state of an SFTP server from ONLINE to OFFLINE. An OFFLINE server cannot accept and process file transfer jobs. Information tied to your server such as server and user properties are not affected by stopping your server. Stopping a server will not reduce or impact your Secure File Transfer Protocol (SFTP) endpoint billing. The state of STOPPING indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of STOP_FAILED can indicate an error condition. No response is returned from this call.
   */
  stopServer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities. There is no response returned from this call.
   */
  tagResource(params: Transfer.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities. There is no response returned from this call.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * If the IdentityProviderType of the server is API_Gateway, tests whether your API Gateway is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the API Gateway integration to ensure that your users can successfully use the service.
   */
  testIdentityProvider(params: Transfer.Types.TestIdentityProviderRequest, callback?: (err: AWSError, data: Transfer.Types.TestIdentityProviderResponse) => void): Request<Transfer.Types.TestIdentityProviderResponse, AWSError>;
  /**
   * If the IdentityProviderType of the server is API_Gateway, tests whether your API Gateway is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the API Gateway integration to ensure that your users can successfully use the service.
   */
  testIdentityProvider(callback?: (err: AWSError, data: Transfer.Types.TestIdentityProviderResponse) => void): Request<Transfer.Types.TestIdentityProviderResponse, AWSError>;
  /**
   * Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities. No response is returned from this call.
   */
  untagResource(params: Transfer.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities. No response is returned from this call.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the server properties after that server has been created. The UpdateServer call returns the ServerId of the Secure File Transfer Protocol (SFTP) server you updated.
   */
  updateServer(params: Transfer.Types.UpdateServerRequest, callback?: (err: AWSError, data: Transfer.Types.UpdateServerResponse) => void): Request<Transfer.Types.UpdateServerResponse, AWSError>;
  /**
   * Updates the server properties after that server has been created. The UpdateServer call returns the ServerId of the Secure File Transfer Protocol (SFTP) server you updated.
   */
  updateServer(callback?: (err: AWSError, data: Transfer.Types.UpdateServerResponse) => void): Request<Transfer.Types.UpdateServerResponse, AWSError>;
  /**
   * Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the UserName and ServerId you specify. The response returns the ServerId and the UserName for the updated user.
   */
  updateUser(params: Transfer.Types.UpdateUserRequest, callback?: (err: AWSError, data: Transfer.Types.UpdateUserResponse) => void): Request<Transfer.Types.UpdateUserResponse, AWSError>;
  /**
   * Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the UserName and ServerId you specify. The response returns the ServerId and the UserName for the updated user.
   */
  updateUser(callback?: (err: AWSError, data: Transfer.Types.UpdateUserResponse) => void): Request<Transfer.Types.UpdateUserResponse, AWSError>;
}
declare namespace Transfer {
  export type Arn = string;
  export interface CreateServerRequest {
    /**
     * The virtual private cloud (VPC) endpoint settings that you want to configure for your SFTP server. This parameter is required when you specify a value for the EndpointType parameter.
     */
    EndpointDetails?: EndpointDetails;
    /**
     * The type of VPC endpoint that you want your SFTP server to connect to. If you connect to a VPC endpoint, your SFTP server isn't accessible over the public internet.
     */
    EndpointType?: EndpointType;
    /**
     * The RSA private key as generated by the ssh-keygen -N "" -f my-new-server-key command.  If you aren't planning to migrate existing users from an existing SFTP server to a new AWS SFTP server, don't update the host key. Accidentally changing a server's host key can be disruptive.   For more information, see "https://alpha-docs-aws.amazon.com/transfer/latest/userguide/configuring-servers.html#change-host-key" in the AWS SFTP User Guide. 
     */
    HostKey?: HostKey;
    /**
     * This parameter is required when the IdentityProviderType is set to API_GATEWAY. Accepts an array containing all of the information required to call a customer-supplied authentication API, including the API Gateway URL. This property is not required when the IdentityProviderType is set to SERVICE_MANAGED.
     */
    IdentityProviderDetails?: IdentityProviderDetails;
    /**
     * Specifies the mode of authentication for the SFTP server. The default value is SERVICE_MANAGED, which allows you to store and access SFTP user credentials within the AWS Transfer for SFTP service. Use the API_GATEWAY value to integrate with an identity provider of your choosing. The API_GATEWAY setting requires you to provide an API Gateway endpoint URL to call for authentication using the IdentityProviderDetails parameter.
     */
    IdentityProviderType?: IdentityProviderType;
    /**
     * A value that allows the service to write your SFTP users' activity to your Amazon CloudWatch logs for monitoring and auditing purposes.
     */
    LoggingRole?: Role;
    /**
     * Key-value pairs that can be used to group and search for servers.
     */
    Tags?: Tags;
  }
  export interface CreateServerResponse {
    /**
     * The service-assigned ID of the SFTP server that is created.
     */
    ServerId: ServerId;
  }
  export interface CreateUserRequest {
    /**
     * The landing directory (folder) for a user when they log in to the server using their SFTP client.  An example is &lt;your-Amazon-S3-bucket-name&gt;/home/username.
     */
    HomeDirectory?: HomeDirectory;
    /**
     * The type of landing directory (folder) you want your users' home directory to be when they log into the SFTP server. If you set it to PATH, the user will see the absolute Amazon S3 bucket paths as is in their SFTP clients. If you set it LOGICAL, you will need to provide mappings in the HomeDirectoryMappings for how you want to make S3 paths visible to your user.
     */
    HomeDirectoryType?: HomeDirectoryType;
    /**
     * Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. You will need to specify the "Entry" and "Target" pair, where Entry shows how the path is made visible and Target is the actual S3 path. If you only specify a target, it will be displayed as is. You will need to also make sure that your AWS IAM Role provides access to paths in Target. The following is an example.  '[ "/bucket2/documentation", { "Entry": "your-personal-report.pdf", "Target": "/bucket3/customized-reports/${transfer:UserName}.pdf" } ]'  In most cases, you can use this value instead of the scope down policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to '/' and set Target to the HomeDirectory parameter value. 
     */
    HomeDirectoryMappings?: HomeDirectoryMappings;
    /**
     * A scope-down policy for your user so you can use the same IAM role across multiple users. This policy scopes down user access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include ${Transfer:UserName}, ${Transfer:HomeDirectory}, and ${Transfer:HomeBucket}.  For scope-down policies, AWS Transfer for SFTP stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a scope-down policy, see "https://docs.aws.amazon.com/transfer/latest/userguide/users.html#users-policies-scope-down"&gt;Creating a Scope-Down Policy. For more information, see "https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html" in the AWS Security Token Service API Reference. 
     */
    Policy?: Policy;
    /**
     * The IAM role that controls your user's access to your Amazon S3 bucket. The policies attached to this role will determine the level of access you want to provide your users when transferring files into and out of your Amazon S3 bucket or buckets. The IAM role should also contain a trust relationship that allows the SFTP server to access your resources when servicing your SFTP user's transfer requests.
     */
    Role: Role;
    /**
     * A system-assigned unique identifier for an SFTP server instance. This is the specific SFTP server that you added your user to.
     */
    ServerId: ServerId;
    /**
     * The public portion of the Secure Shell (SSH) key used to authenticate the user to the SFTP server.
     */
    SshPublicKeyBody?: SshPublicKeyBody;
    /**
     * Key-value pairs that can be used to group and search for users. Tags are metadata attached to users for any purpose.
     */
    Tags?: Tags;
    /**
     * A unique string that identifies a user and is associated with a server as specified by the ServerId. This user name must be a minimum of 3 and a maximum of 32 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore, and hyphen. The user name can't start with a hyphen.
     */
    UserName: UserName;
  }
  export interface CreateUserResponse {
    /**
     * The ID of the SFTP server that the user is attached to.
     */
    ServerId: ServerId;
    /**
     * A unique string that identifies a user account associated with an SFTP server.
     */
    UserName: UserName;
  }
  export type DateImported = Date;
  export interface DeleteServerRequest {
    /**
     * A unique system-assigned identifier for an SFTP server instance.
     */
    ServerId: ServerId;
  }
  export interface DeleteSshPublicKeyRequest {
    /**
     * A system-assigned unique identifier for a Secure File Transfer Protocol (SFTP) server instance that has the user assigned to it.
     */
    ServerId: ServerId;
    /**
     * A unique identifier used to reference your user's specific SSH key.
     */
    SshPublicKeyId: SshPublicKeyId;
    /**
     * A unique string that identifies a user whose public key is being deleted.
     */
    UserName: UserName;
  }
  export interface DeleteUserRequest {
    /**
     * A system-assigned unique identifier for an SFTP server instance that has the user assigned to it.
     */
    ServerId: ServerId;
    /**
     * A unique string that identifies a user that is being deleted from the server.
     */
    UserName: UserName;
  }
  export interface DescribeServerRequest {
    /**
     * A system-assigned unique identifier for an SFTP server.
     */
    ServerId: ServerId;
  }
  export interface DescribeServerResponse {
    /**
     * An array containing the properties of the server with the ServerID you specified.
     */
    Server: DescribedServer;
  }
  export interface DescribeUserRequest {
    /**
     * A system-assigned unique identifier for an SFTP server that has this user assigned.
     */
    ServerId: ServerId;
    /**
     * The name of the user assigned to one or more servers. User names are part of the sign-in credentials to use the AWS Transfer for SFTP service and perform file transfer tasks.
     */
    UserName: UserName;
  }
  export interface DescribeUserResponse {
    /**
     * A system-assigned unique identifier for an SFTP server that has this user assigned.
     */
    ServerId: ServerId;
    /**
     * An array containing the properties of the user account for the ServerID value that you specified.
     */
    User: DescribedUser;
  }
  export interface DescribedServer {
    /**
     * Specifies the unique Amazon Resource Name (ARN) for the server to be described.
     */
    Arn: Arn;
    /**
     * The virtual private cloud (VPC) endpoint settings that you configured for your SFTP server.
     */
    EndpointDetails?: EndpointDetails;
    /**
     * The type of endpoint that your SFTP server is connected to. If your SFTP server is connected to a VPC endpoint, your server isn't accessible over the public internet.
     */
    EndpointType?: EndpointType;
    /**
     * This value contains the message-digest algorithm (MD5) hash of the server's host key. This value is equivalent to the output of the ssh-keygen -l -E md5 -f my-new-server-key command.
     */
    HostKeyFingerprint?: HostKeyFingerprint;
    /**
     * Specifies information to call a customer-supplied authentication API. This field is not populated when the IdentityProviderType of the server is SERVICE_MANAGED&gt;.
     */
    IdentityProviderDetails?: IdentityProviderDetails;
    /**
     * This property defines the mode of authentication method enabled for this service. A value of SERVICE_MANAGED means that you are using this server to store and access SFTP user credentials within the service. A value of API_GATEWAY indicates that you have integrated an API Gateway endpoint that will be invoked for authenticating your user into the service.
     */
    IdentityProviderType?: IdentityProviderType;
    /**
     * This property is an AWS Identity and Access Management (IAM) entity that allows the server to turn on Amazon CloudWatch logging for Amazon S3 events. When set, user activity can be viewed in your CloudWatch logs.
     */
    LoggingRole?: Role;
    /**
     * This property is a unique system-assigned identifier for the SFTP server that you instantiate.
     */
    ServerId?: ServerId;
    /**
     * The condition of the SFTP server for the server that was described. A value of ONLINE indicates that the server can accept jobs and transfer files. A State value of OFFLINE means that the server cannot perform file transfer operations. The states of STARTING and STOPPING indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of START_FAILED or STOP_FAILED can indicate an error condition.
     */
    State?: State;
    /**
     * This property contains the key-value pairs that you can use to search for and group servers that were assigned to the server that was described.
     */
    Tags?: Tags;
    /**
     * The number of users that are assigned to the SFTP server you specified with the ServerId.
     */
    UserCount?: UserCount;
  }
  export interface DescribedUser {
    /**
     * This property contains the unique Amazon Resource Name (ARN) for the user that was requested to be described.
     */
    Arn: Arn;
    /**
     * This property specifies the landing directory (or folder), which is the location that files are written to or read from in an Amazon S3 bucket for the described user. An example is /your s3 bucket name/home/username .
     */
    HomeDirectory?: HomeDirectory;
    /**
     * Logical directory mappings that you specified for what S3 paths and keys should be visible to your user and how you want to make them visible. You will need to specify the "Entry" and "Target" pair, where Entry shows how the path is made visible and Target is the actual S3 path. If you only specify a target, it will be displayed as is. You will need to also make sure that your AWS IAM Role provides access to paths in Target. In most cases, you can use this value instead of the scope down policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to '/' and set Target to the HomeDirectory parameter value.  In most cases, you can use this value instead of the scope down policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to '/' and set Target to the HomeDirectory parameter value.
     */
    HomeDirectoryMappings?: HomeDirectoryMappings;
    /**
     * The type of landing directory (folder) you mapped for your users' to see when they log into the SFTP server. If you set it to PATH, the user will see the absolute Amazon S3 bucket paths as is in their SFTP clients. If you set it LOGICAL, you will need to provide mappings in the HomeDirectoryMappings for how you want to make S3 paths visible to your user.
     */
    HomeDirectoryType?: HomeDirectoryType;
    /**
     * Specifies the name of the policy in use for the described user.
     */
    Policy?: Policy;
    /**
     * This property specifies the IAM role that controls your user's access to your Amazon S3 bucket. The policies attached to this role will determine the level of access you want to provide your users when transferring files into and out of your Amazon S3 bucket or buckets. The IAM role should also contain a trust relationship that allows the SFTP server to access your resources when servicing your SFTP user's transfer requests.
     */
    Role?: Role;
    /**
     * This property contains the public key portion of the Secure Shell (SSH) keys stored for the described user.
     */
    SshPublicKeys?: SshPublicKeys;
    /**
     * This property contains the key-value pairs for the user requested. Tag can be used to search for and group users for a variety of purposes.
     */
    Tags?: Tags;
    /**
     * This property is the name of the user that was requested to be described. User names are used for authentication purposes. This is the string that will be used by your user when they log in to your SFTP server.
     */
    UserName?: UserName;
  }
  export interface EndpointDetails {
    /**
     * The ID of the VPC endpoint.
     */
    VpcEndpointId?: VpcEndpointId;
  }
  export type EndpointType = "PUBLIC"|"VPC_ENDPOINT"|string;
  export type HomeDirectory = string;
  export interface HomeDirectoryMapEntry {
    /**
     * Represents an entry and a target for HomeDirectoryMappings.
     */
    Entry: MapEntry;
    /**
     * Represents the map target that is used in a HomeDirectorymapEntry.
     */
    Target: MapTarget;
  }
  export type HomeDirectoryMappings = HomeDirectoryMapEntry[];
  export type HomeDirectoryType = "PATH"|"LOGICAL"|string;
  export type HostKey = string;
  export type HostKeyFingerprint = string;
  export interface IdentityProviderDetails {
    /**
     * The Url parameter provides contains the location of the service endpoint used to authenticate users.
     */
    Url?: Url;
    /**
     * The InvocationRole parameter provides the type of InvocationRole used to authenticate the user account.
     */
    InvocationRole?: Role;
  }
  export type IdentityProviderType = "SERVICE_MANAGED"|"API_GATEWAY"|string;
  export interface ImportSshPublicKeyRequest {
    /**
     * A system-assigned unique identifier for an SFTP server.
     */
    ServerId: ServerId;
    /**
     * The public key portion of an SSH key pair.
     */
    SshPublicKeyBody: SshPublicKeyBody;
    /**
     * The name of the user account that is assigned to one or more servers.
     */
    UserName: UserName;
  }
  export interface ImportSshPublicKeyResponse {
    /**
     * A system-assigned unique identifier for an SFTP server.
     */
    ServerId: ServerId;
    /**
     * This identifier is the name given to a public key by the system that was imported.
     */
    SshPublicKeyId: SshPublicKeyId;
    /**
     * A user name assigned to the ServerID value that you specified.
     */
    UserName: UserName;
  }
  export interface ListServersRequest {
    /**
     * Specifies the number of servers to return as a response to the ListServers query.
     */
    MaxResults?: MaxResults;
    /**
     * When additional results are obtained from the ListServers command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional servers.
     */
    NextToken?: NextToken;
  }
  export interface ListServersResponse {
    /**
     * When you can get additional results from the ListServers operation, a NextToken parameter is returned in the output. In a following command, you can pass in the NextToken parameter to continue listing additional servers.
     */
    NextToken?: NextToken;
    /**
     * An array of servers that were listed.
     */
    Servers: ListedServers;
  }
  export interface ListTagsForResourceRequest {
    /**
     * Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an identifier for a specific AWS resource, such as a server, user, or role.
     */
    Arn: Arn;
    /**
     * Specifies the number of tags to return as a response to the ListTagsForResource request.
     */
    MaxResults?: MaxResults;
    /**
     * When you request additional results from the ListTagsForResource operation, a NextToken parameter is returned in the input. You can then pass in a subsequent command to the NextToken parameter to continue listing additional tags.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceResponse {
    /**
     * This value is the ARN you specified to list the tags of.
     */
    Arn?: Arn;
    /**
     * When you can get additional results from the ListTagsForResource call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional tags.
     */
    NextToken?: NextToken;
    /**
     * Key-value pairs that are assigned to a resource, usually for the purpose of grouping and searching for items. Tags are metadata that you define.
     */
    Tags?: Tags;
  }
  export interface ListUsersRequest {
    /**
     * Specifies the number of users to return as a response to the ListUsers request.
     */
    MaxResults?: MaxResults;
    /**
     * When you can get additional results from the ListUsers call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional users.
     */
    NextToken?: NextToken;
    /**
     * A system-assigned unique identifier for a Secure File Transfer Protocol (SFTP) server that has users assigned to it.
     */
    ServerId: ServerId;
  }
  export interface ListUsersResponse {
    /**
     * When you can get additional results from the ListUsers call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional users.
     */
    NextToken?: NextToken;
    /**
     * A system-assigned unique identifier for an SFTP server that the users are assigned to.
     */
    ServerId: ServerId;
    /**
     * Returns the user accounts and their properties for the ServerId value that you specify.
     */
    Users: ListedUsers;
  }
  export interface ListedServer {
    /**
     * The unique Amazon Resource Name (ARN) for the server to be listed.
     */
    Arn: Arn;
    /**
     * The authentication method used to validate a user for the server that was specified. This can include Secure Shell (SSH), user name and password combinations, or your own custom authentication method. Valid values include SERVICE_MANAGED or API_GATEWAY.
     */
    IdentityProviderType?: IdentityProviderType;
    /**
     * The type of VPC endpoint that your SFTP server is connected to. If your SFTP server is connected to a VPC endpoint, your server isn't accessible over the public internet.
     */
    EndpointType?: EndpointType;
    /**
     * The AWS Identity and Access Management entity that allows the server to turn on Amazon CloudWatch logging.
     */
    LoggingRole?: Role;
    /**
     * This value is the unique system assigned identifier for the SFTP servers that were listed.
     */
    ServerId?: ServerId;
    /**
     * This property describes the condition of the SFTP server for the server that was described. A value of ONLINE&gt; indicates that the server can accept jobs and transfer files. A State value of OFFLINE means that the server cannot perform file transfer operations. The states of STARTING and STOPPING indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of START_FAILED or STOP_FAILED can indicate an error condition.
     */
    State?: State;
    /**
     * This property is a numeric value that indicates the number of users that are assigned to the SFTP server you specified with the ServerId.
     */
    UserCount?: UserCount;
  }
  export type ListedServers = ListedServer[];
  export interface ListedUser {
    /**
     * This property is the unique Amazon Resource Name (ARN) for the user that you want to learn about.
     */
    Arn: Arn;
    /**
     * This value specifies the location that files are written to or read from an Amazon S3 bucket for the user you specify by their ARN.
     */
    HomeDirectory?: HomeDirectory;
    /**
     * The type of landing directory (folder) you mapped for your users' home directory. If you set it to PATH, the user will see the absolute Amazon S3 bucket paths as is in their SFTP clients. If you set it LOGICAL, you will need to provide mappings in the HomeDirectoryMappings for how you want to make S3 paths visible to your user.
     */
    HomeDirectoryType?: HomeDirectoryType;
    /**
     * The role in use by this user. A role is an AWS Identity and Access Management (IAM) entity that, in this case, allows the SFTP server to act on a user's behalf. It allows the server to inherit the trust relationship that enables that user to perform file operations to their Amazon S3 bucket.
     */
    Role?: Role;
    /**
     * This value is the number of SSH public keys stored for the user you specified.
     */
    SshPublicKeyCount?: SshPublicKeyCount;
    /**
     * The name of the user whose ARN was specified. User names are used for authentication purposes.
     */
    UserName?: UserName;
  }
  export type ListedUsers = ListedUser[];
  export type MapEntry = string;
  export type MapTarget = string;
  export type MaxResults = number;
  export type Message = string;
  export type NextToken = string;
  export type NullableRole = string;
  export type Policy = string;
  export type Response = string;
  export type Role = string;
  export type ServerId = string;
  export interface SshPublicKey {
    /**
     * The date that the public key was added to the user account.
     */
    DateImported: DateImported;
    /**
     * The content of the SSH public key as specified by the PublicKeyId.
     */
    SshPublicKeyBody: SshPublicKeyBody;
    /**
     * The SshPublicKeyId parameter contains the identifier of the public key.
     */
    SshPublicKeyId: SshPublicKeyId;
  }
  export type SshPublicKeyBody = string;
  export type SshPublicKeyCount = number;
  export type SshPublicKeyId = string;
  export type SshPublicKeys = SshPublicKey[];
  export interface StartServerRequest {
    /**
     * A system-assigned unique identifier for an SFTP server that you start.
     */
    ServerId: ServerId;
  }
  export type State = "OFFLINE"|"ONLINE"|"STARTING"|"STOPPING"|"START_FAILED"|"STOP_FAILED"|string;
  export type StatusCode = number;
  export interface StopServerRequest {
    /**
     * A system-assigned unique identifier for an SFTP server that you stopped.
     */
    ServerId: ServerId;
  }
  export interface Tag {
    /**
     * The name assigned to the tag that you create.
     */
    Key: TagKey;
    /**
     * This property contains one or more values that you assigned to the key name you create.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * An Amazon Resource Name (ARN) for a specific AWS resource, such as a server, user, or role.
     */
    Arn: Arn;
    /**
     * Key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to user accounts for any purpose.
     */
    Tags: Tags;
  }
  export type TagValue = string;
  export type Tags = Tag[];
  export interface TestIdentityProviderRequest {
    /**
     * A system-assigned identifier for a specific server. That server's user authentication method is tested with a user name and password.
     */
    ServerId: ServerId;
    /**
     * This request parameter is the name of the user account to be tested.
     */
    UserName: UserName;
    /**
     * The password of the user account to be tested.
     */
    UserPassword?: UserPassword;
  }
  export interface TestIdentityProviderResponse {
    /**
     * The response that is returned from your API Gateway.
     */
    Response?: Response;
    /**
     * The HTTP status code that is the response from your API Gateway.
     */
    StatusCode: StatusCode;
    /**
     * A message that indicates whether the test was successful or not. 
     */
    Message?: Message;
    /**
     * The endpoint of the service used to authenticate a user.
     */
    Url: Url;
  }
  export interface UntagResourceRequest {
    /**
     * This is the value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is an identifier for a specific AWS resource, such as a server, user, or role.
     */
    Arn: Arn;
    /**
     * TagKeys are key-value pairs assigned to ARNs that can be used to group and search for resources by type. This metadata can be attached to resources for any purpose.
     */
    TagKeys: TagKeys;
  }
  export interface UpdateServerRequest {
    /**
     * The virtual private cloud (VPC) endpoint settings that are configured for your SFTP server. With a VPC endpoint, your SFTP server isn't accessible over the public internet.
     */
    EndpointDetails?: EndpointDetails;
    /**
     * The type of endpoint that you want your SFTP server to connect to. You can choose to connect to the public internet or a virtual private cloud (VPC) endpoint. With a VPC endpoint, your SFTP server isn't accessible over the public internet. 
     */
    EndpointType?: EndpointType;
    /**
     * The RSA private key as generated by ssh-keygen -N "" -f my-new-server-key.  If you aren't planning to migrate existing users from an existing SFTP server to a new AWS SFTP server, don't update the host key. Accidentally changing a server's host key can be disruptive.   For more information, see "https://docs.aws.amazon.com/transfer/latest/userguide/configuring-servers.html#change-host-key" in the AWS SFTP User Guide. 
     */
    HostKey?: HostKey;
    /**
     * This response parameter is an array containing all of the information required to call a customer's authentication API method.
     */
    IdentityProviderDetails?: IdentityProviderDetails;
    /**
     * A value that changes the AWS Identity and Access Management (IAM) role that allows Amazon S3 events to be logged in Amazon CloudWatch, turning logging on or off.
     */
    LoggingRole?: NullableRole;
    /**
     * A system-assigned unique identifier for an SFTP server instance that the user account is assigned to.
     */
    ServerId: ServerId;
  }
  export interface UpdateServerResponse {
    /**
     * A system-assigned unique identifier for an SFTP server that the user account is assigned to.
     */
    ServerId: ServerId;
  }
  export interface UpdateUserRequest {
    /**
     * A parameter that specifies the landing directory (folder) for a user when they log in to the server using their client.  An example is &lt;your-Amazon-S3-bucket-name&gt;/home/username.
     */
    HomeDirectory?: HomeDirectory;
    /**
     * The type of landing directory (folder) you want your users' home directory to be when they log into the SFTP serve. If you set it to PATH, the user will see the absolute Amazon S3 bucket paths as is in their SFTP clients. If you set it LOGICAL, you will need to provide mappings in the HomeDirectoryMappings for how you want to make S3 paths visible to your user.
     */
    HomeDirectoryType?: HomeDirectoryType;
    /**
     * Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. You will need to specify the "Entry" and "Target" pair, where Entry shows how the path is made visible and Target is the actual S3 path. If you only specify a target, it will be displayed as is. You will need to also make sure that your AWS IAM Role provides access to paths in Target. The following is an example.  '[ "/bucket2/documentation", { "Entry": "your-personal-report.pdf", "Target": "/bucket3/customized-reports/${transfer:UserName}.pdf" } ]'  In most cases, you can use this value instead of the scope down policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to '/' and set Target to the HomeDirectory parameter value.   
     */
    HomeDirectoryMappings?: HomeDirectoryMappings;
    /**
     * Allows you to supply a scope-down policy for your user so you can use the same AWS Identity and Access Management (IAM) role across multiple users. The policy scopes down user access to portions of your Amazon S3 bucket. Variables you can use inside this policy include ${Transfer:UserName}, ${Transfer:HomeDirectory}, and ${Transfer:HomeBucket}.  For scope-down policies, AWS Transfer for SFTP stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a scope-down policy, see "https://docs.aws.amazon.com/transfer/latest/userguide/users.html#users-policies-scope-down"&gt;Creating a Scope-Down Policy. For more information, see "https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html" in the AWS Security Token Service API Reference. 
     */
    Policy?: Policy;
    /**
     * The IAM role that controls your user's access to your Amazon S3 bucket. The policies attached to this role will determine the level of access you want to provide your users when transferring files into and out of your Amazon S3 bucket or buckets. The IAM role should also contain a trust relationship that allows the Secure File Transfer Protocol (SFTP) server to access your resources when servicing your SFTP user's transfer requests.
     */
    Role?: Role;
    /**
     * A system-assigned unique identifier for an SFTP server instance that the user account is assigned to.
     */
    ServerId: ServerId;
    /**
     * A unique string that identifies a user and is associated with a server as specified by the ServerId. This is the string that will be used by your user when they log in to your SFTP server. This user name is a minimum of 3 and a maximum of 32 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore, and hyphen. The user name can't start with a hyphen.
     */
    UserName: UserName;
  }
  export interface UpdateUserResponse {
    /**
     * A system-assigned unique identifier for an SFTP server instance that the user account is assigned to.
     */
    ServerId: ServerId;
    /**
     * The unique identifier for a user that is assigned to the SFTP server instance that was specified in the request.
     */
    UserName: UserName;
  }
  export type Url = string;
  export type UserCount = number;
  export type UserName = string;
  export type UserPassword = string;
  export type VpcEndpointId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-05"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Transfer client.
   */
  export import Types = Transfer;
}
export = Transfer;
