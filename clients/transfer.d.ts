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
   * Instantiates an autoscaling virtual server based on the selected file transfer protocol in AWS. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated ServerId property that is assigned to the newly created server.
   */
  createServer(params: Transfer.Types.CreateServerRequest, callback?: (err: AWSError, data: Transfer.Types.CreateServerResponse) => void): Request<Transfer.Types.CreateServerResponse, AWSError>;
  /**
   * Instantiates an autoscaling virtual server based on the selected file transfer protocol in AWS. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated ServerId property that is assigned to the newly created server.
   */
  createServer(callback?: (err: AWSError, data: Transfer.Types.CreateServerResponse) => void): Request<Transfer.Types.CreateServerResponse, AWSError>;
  /**
   * Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the IdentityProviderType set to SERVICE_MANAGED. Using parameters for CreateUser, you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a scope-down policy, and assign metadata with tags that can be used to group and search for users.
   */
  createUser(params: Transfer.Types.CreateUserRequest, callback?: (err: AWSError, data: Transfer.Types.CreateUserResponse) => void): Request<Transfer.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the IdentityProviderType set to SERVICE_MANAGED. Using parameters for CreateUser, you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a scope-down policy, and assign metadata with tags that can be used to group and search for users.
   */
  createUser(callback?: (err: AWSError, data: Transfer.Types.CreateUserResponse) => void): Request<Transfer.Types.CreateUserResponse, AWSError>;
  /**
   * Deletes the file transfer protocol-enabled server that you specify. No response returns from this operation.
   */
  deleteServer(params: Transfer.Types.DeleteServerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the file transfer protocol-enabled server that you specify. No response returns from this operation.
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
   * Deletes the user belonging to a file transfer protocol-enabled server you specify. No response returns from this operation.  When you delete a user from a server, the user's information is lost. 
   */
  deleteUser(params: Transfer.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the user belonging to a file transfer protocol-enabled server you specify. No response returns from this operation.  When you delete a user from a server, the user's information is lost. 
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes a file transfer protocol-enabled server that you specify by passing the ServerId parameter. The response contains a description of a server's properties. When you set EndpointType to VPC, the response will contain the EndpointDetails.
   */
  describeServer(params: Transfer.Types.DescribeServerRequest, callback?: (err: AWSError, data: Transfer.Types.DescribeServerResponse) => void): Request<Transfer.Types.DescribeServerResponse, AWSError>;
  /**
   * Describes a file transfer protocol-enabled server that you specify by passing the ServerId parameter. The response contains a description of a server's properties. When you set EndpointType to VPC, the response will contain the EndpointDetails.
   */
  describeServer(callback?: (err: AWSError, data: Transfer.Types.DescribeServerResponse) => void): Request<Transfer.Types.DescribeServerResponse, AWSError>;
  /**
   * Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its ServerId property. The response from this call returns the properties of the user associated with the ServerId value that was specified.
   */
  describeUser(params: Transfer.Types.DescribeUserRequest, callback?: (err: AWSError, data: Transfer.Types.DescribeUserResponse) => void): Request<Transfer.Types.DescribeUserResponse, AWSError>;
  /**
   * Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its ServerId property. The response from this call returns the properties of the user associated with the ServerId value that was specified.
   */
  describeUser(callback?: (err: AWSError, data: Transfer.Types.DescribeUserResponse) => void): Request<Transfer.Types.DescribeUserResponse, AWSError>;
  /**
   * Adds a Secure Shell (SSH) public key to a user account identified by a UserName value assigned to the specific file transfer protocol-enabled server, identified by ServerId. The response returns the UserName value, the ServerId value, and the name of the SshPublicKeyId.
   */
  importSshPublicKey(params: Transfer.Types.ImportSshPublicKeyRequest, callback?: (err: AWSError, data: Transfer.Types.ImportSshPublicKeyResponse) => void): Request<Transfer.Types.ImportSshPublicKeyResponse, AWSError>;
  /**
   * Adds a Secure Shell (SSH) public key to a user account identified by a UserName value assigned to the specific file transfer protocol-enabled server, identified by ServerId. The response returns the UserName value, the ServerId value, and the name of the SshPublicKeyId.
   */
  importSshPublicKey(callback?: (err: AWSError, data: Transfer.Types.ImportSshPublicKeyResponse) => void): Request<Transfer.Types.ImportSshPublicKeyResponse, AWSError>;
  /**
   * Lists the file transfer protocol-enabled servers that are associated with your AWS account.
   */
  listServers(params: Transfer.Types.ListServersRequest, callback?: (err: AWSError, data: Transfer.Types.ListServersResponse) => void): Request<Transfer.Types.ListServersResponse, AWSError>;
  /**
   * Lists the file transfer protocol-enabled servers that are associated with your AWS account.
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
   * Lists the users for a file transfer protocol-enabled server that you specify by passing the ServerId parameter.
   */
  listUsers(params: Transfer.Types.ListUsersRequest, callback?: (err: AWSError, data: Transfer.Types.ListUsersResponse) => void): Request<Transfer.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users for a file transfer protocol-enabled server that you specify by passing the ServerId parameter.
   */
  listUsers(callback?: (err: AWSError, data: Transfer.Types.ListUsersResponse) => void): Request<Transfer.Types.ListUsersResponse, AWSError>;
  /**
   * Changes the state of a file transfer protocol-enabled server from OFFLINE to ONLINE. It has no impact on a server that is already ONLINE. An ONLINE server can accept and process file transfer jobs. The state of STARTING indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of START_FAILED can indicate an error condition. No response is returned from this call.
   */
  startServer(params: Transfer.Types.StartServerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the state of a file transfer protocol-enabled server from OFFLINE to ONLINE. It has no impact on a server that is already ONLINE. An ONLINE server can accept and process file transfer jobs. The state of STARTING indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of START_FAILED can indicate an error condition. No response is returned from this call.
   */
  startServer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the state of a file transfer protocol-enabled server from ONLINE to OFFLINE. An OFFLINE server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server. Stopping the server will not reduce or impact your file transfer protocol endpoint billing. The state of STOPPING indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of STOP_FAILED can indicate an error condition. No response is returned from this call.
   */
  stopServer(params: Transfer.Types.StopServerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the state of a file transfer protocol-enabled server from ONLINE to OFFLINE. An OFFLINE server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server. Stopping the server will not reduce or impact your file transfer protocol endpoint billing. The state of STOPPING indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of STOP_FAILED can indicate an error condition. No response is returned from this call.
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
   * If the IdentityProviderType of a file transfer protocol-enabled server is API_Gateway, tests whether your API Gateway is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the API Gateway integration to ensure that your users can successfully use the service.
   */
  testIdentityProvider(params: Transfer.Types.TestIdentityProviderRequest, callback?: (err: AWSError, data: Transfer.Types.TestIdentityProviderResponse) => void): Request<Transfer.Types.TestIdentityProviderResponse, AWSError>;
  /**
   * If the IdentityProviderType of a file transfer protocol-enabled server is API_Gateway, tests whether your API Gateway is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the API Gateway integration to ensure that your users can successfully use the service.
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
   * Updates the file transfer protocol-enabled server's properties after that server has been created. The UpdateServer call returns the ServerId of the server you updated.
   */
  updateServer(params: Transfer.Types.UpdateServerRequest, callback?: (err: AWSError, data: Transfer.Types.UpdateServerResponse) => void): Request<Transfer.Types.UpdateServerResponse, AWSError>;
  /**
   * Updates the file transfer protocol-enabled server's properties after that server has been created. The UpdateServer call returns the ServerId of the server you updated.
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
  export type AddressAllocationId = string;
  export type AddressAllocationIds = AddressAllocationId[];
  export type Arn = string;
  export type Certificate = string;
  export interface CreateServerRequest {
    /**
     * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. Required when Protocols is set to FTPS. To request a new public certificate, see Request a public certificate in the  AWS Certificate Manager User Guide. To import an existing certificate into ACM, see Importing certificates into ACM in the  AWS Certificate Manager User Guide. To request a private certificate to use FTPS through private IP addresses, see Request a private certificate in the  AWS Certificate Manager User Guide. Certificates with the following cryptographic algorithms and key sizes are supported:   2048-bit RSA (RSA_2048)   4096-bit RSA (RSA_4096)   Elliptic Prime Curve 256 bit (EC_prime256v1)   Elliptic Prime Curve 384 bit (EC_secp384r1)   Elliptic Prime Curve 521 bit (EC_secp521r1)    The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer. 
     */
    Certificate?: Certificate;
    /**
     * The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. When you host your endpoint within your VPC, you can make it accessible only to resources within your VPC, or you can attach Elastic IPs and make it accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
     */
    EndpointDetails?: EndpointDetails;
    /**
     * The type of VPC endpoint that you want your file transfer protocol-enabled server to connect to. You can choose to connect to the public internet or a VPC endpoint. With a VPC endpoint, you can restrict access to your server and resources only within your VPC.  It is recommended that you use VPC as the EndpointType. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with EndpointType set to VPC_ENDPOINT. 
     */
    EndpointType?: EndpointType;
    /**
     * The RSA private key as generated by the ssh-keygen -N "" -m PEM -f my-new-server-key command.  If you aren't planning to migrate existing users from an existing SFTP-enabled server to a new server, don't update the host key. Accidentally changing a server's host key can be disruptive.  For more information, see Change the host key for your SFTP-enabled server in the AWS Transfer Family User Guide.
     */
    HostKey?: HostKey;
    /**
     * Required when IdentityProviderType is set to API_GATEWAY. Accepts an array containing all of the information required to call a customer-supplied authentication API, including the API Gateway URL. Not required when IdentityProviderType is set to SERVICE_MANAGED.
     */
    IdentityProviderDetails?: IdentityProviderDetails;
    /**
     * Specifies the mode of authentication for a file transfer protocol-enabled server. The default value is SERVICE_MANAGED, which allows you to store and access user credentials within the AWS Transfer Family service. Use the API_GATEWAY value to integrate with an identity provider of your choosing. The API_GATEWAY setting requires you to provide an API Gateway endpoint URL to call for authentication using the IdentityProviderDetails parameter.
     */
    IdentityProviderType?: IdentityProviderType;
    /**
     * Allows the service to write your users' activity to your Amazon CloudWatch logs for monitoring and auditing purposes.
     */
    LoggingRole?: Role;
    /**
     * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:    SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH    FTPS (File Transfer Protocol Secure): File transfer with TLS encryption    FTP (File Transfer Protocol): Unencrypted file transfer    If you select FTPS, you must choose a certificate stored in AWS Certificate Manager (ACM) which will be used to identify your server when clients connect to it over FTPS. If Protocol includes either FTP or FTPS, then the EndpointType must be VPC and the IdentityProviderType must be API_GATEWAY. If Protocol includes FTP, then AddressAllocationIds cannot be associated. If Protocol is set only to SFTP, the EndpointType can be set to PUBLIC and the IdentityProviderType can be set to SERVICE_MANAGED. 
     */
    Protocols?: Protocols;
    /**
     * Key-value pairs that can be used to group and search for file transfer protocol-enabled servers.
     */
    Tags?: Tags;
  }
  export interface CreateServerResponse {
    /**
     * The service-assigned ID of the file transfer protocol-enabled server that is created.
     */
    ServerId: ServerId;
  }
  export interface CreateUserRequest {
    /**
     * The landing directory (folder) for a user when they log in to the file transfer protocol-enabled server using the client. An example is  your-Amazon-S3-bucket-name&gt;/home/username .
     */
    HomeDirectory?: HomeDirectory;
    /**
     * The type of landing directory (folder) you want your users' home directory to be when they log into the file transfer protocol-enabled server. If you set it to PATH, the user will see the absolute Amazon S3 bucket paths as is in their file transfer protocol clients. If you set it LOGICAL, you will need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 paths visible to your users.
     */
    HomeDirectoryType?: HomeDirectoryType;
    /**
     * Logical directory mappings that specify what Amazon S3 paths and keys should be visible to your user and how you want to make them visible. You will need to specify the "Entry" and "Target" pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 path. If you only specify a target, it will be displayed as is. You will need to also make sure that your IAM role provides access to paths in Target. The following is an example.  '[ "/bucket2/documentation", { "Entry": "your-personal-report.pdf", "Target": "/bucket3/customized-reports/${transfer:UserName}.pdf" } ]'  In most cases, you can use this value instead of the scope-down policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to '/' and set Target to the HomeDirectory parameter value.  If the target of a logical directory entry does not exist in Amazon S3, the entry will be ignored. As a workaround, you can use the Amazon S3 api to create 0 byte objects as place holders for your directory. If using the CLI, use the s3api call instead of s3 so you can use the put-object operation. For example, you use the following: aws s3api put-object --bucket bucketname --key path/to/folder/. Make sure that the end of the key name ends in a '/' for it to be considered a folder. 
     */
    HomeDirectoryMappings?: HomeDirectoryMappings;
    /**
     * A scope-down policy for your user so you can use the same IAM role across multiple users. This policy scopes down user access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include ${Transfer:UserName}, ${Transfer:HomeDirectory}, and ${Transfer:HomeBucket}.  For scope-down policies, AWS Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a scope-down policy, see Creating a scope-down policy. For more information, see AssumeRole in the AWS Security Token Service API Reference. 
     */
    Policy?: Policy;
    /**
     * The IAM role that controls your users' access to your Amazon S3 bucket. The policies attached to this role will determine the level of access you want to provide your users when transferring files into and out of your Amazon S3 bucket or buckets. The IAM role should also contain a trust relationship that allows the file transfer protocol-enabled server to access your resources when servicing your users' transfer requests.
     */
    Role: Role;
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server instance. This is the specific server that you added your user to.
     */
    ServerId: ServerId;
    /**
     * The public portion of the Secure Shell (SSH) key used to authenticate the user to the file transfer protocol-enabled server.
     */
    SshPublicKeyBody?: SshPublicKeyBody;
    /**
     * Key-value pairs that can be used to group and search for users. Tags are metadata attached to users for any purpose.
     */
    Tags?: Tags;
    /**
     * A unique string that identifies a user and is associated with a file transfer protocol-enabled server as specified by the ServerId. This user name must be a minimum of 3 and a maximum of 32 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore, and hyphen. The user name can't start with a hyphen.
     */
    UserName: UserName;
  }
  export interface CreateUserResponse {
    /**
     * The ID of the file transfer protocol-enabled server that the user is attached to.
     */
    ServerId: ServerId;
    /**
     * A unique string that identifies a user account associated with a file transfer protocol-enabled server.
     */
    UserName: UserName;
  }
  export type DateImported = Date;
  export interface DeleteServerRequest {
    /**
     * A unique system-assigned identifier for a file transfer protocol-enabled server instance.
     */
    ServerId: ServerId;
  }
  export interface DeleteSshPublicKeyRequest {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server instance that has the user assigned to it.
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
     * A system-assigned unique identifier for a file transfer protocol-enabled server instance that has the user assigned to it.
     */
    ServerId: ServerId;
    /**
     * A unique string that identifies a user that is being deleted from a file transfer protocol-enabled server.
     */
    UserName: UserName;
  }
  export interface DescribeServerRequest {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server.
     */
    ServerId: ServerId;
  }
  export interface DescribeServerResponse {
    /**
     * An array containing the properties of a file transfer protocol-enabled server with the ServerID you specified.
     */
    Server: DescribedServer;
  }
  export interface DescribeUserRequest {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server that has this user assigned.
     */
    ServerId: ServerId;
    /**
     * The name of the user assigned to one or more file transfer protocol-enabled servers. User names are part of the sign-in credentials to use the AWS Transfer Family service and perform file transfer tasks.
     */
    UserName: UserName;
  }
  export interface DescribeUserResponse {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server that has this user assigned.
     */
    ServerId: ServerId;
    /**
     * An array containing the properties of the user account for the ServerID value that you specified.
     */
    User: DescribedUser;
  }
  export interface DescribedServer {
    /**
     * Specifies the unique Amazon Resource Name (ARN) for a file transfer protocol-enabled server to be described.
     */
    Arn: Arn;
    /**
     * Specifies the ARN of the AWS Certificate Manager (ACM) certificate. Required when Protocols is set to FTPS.
     */
    Certificate?: Certificate;
    /**
     * Specifies the virtual private cloud (VPC) endpoint settings that you configured for your file transfer protocol-enabled server.
     */
    EndpointDetails?: EndpointDetails;
    /**
     * Defines the type of endpoint that your file transfer protocol-enabled server is connected to. If your server is connected to a VPC endpoint, your server isn't accessible over the public internet.
     */
    EndpointType?: EndpointType;
    /**
     * Specifies the Base64-encoded SHA256 fingerprint of the server's host key. This value is equivalent to the output of the ssh-keygen -l -f my-new-server-key command.
     */
    HostKeyFingerprint?: HostKeyFingerprint;
    /**
     * Specifies information to call a customer-supplied authentication API. This field is not populated when the IdentityProviderType of a file transfer protocol-enabled server is SERVICE_MANAGED.
     */
    IdentityProviderDetails?: IdentityProviderDetails;
    /**
     * Specifies the mode of authentication method enabled for this service. A value of SERVICE_MANAGED means that you are using this file transfer protocol-enabled server to store and access user credentials within the service. A value of API_GATEWAY indicates that you have integrated an API Gateway endpoint that will be invoked for authenticating your user into the service.
     */
    IdentityProviderType?: IdentityProviderType;
    /**
     * Specifies the AWS Identity and Access Management (IAM) role that allows a file transfer protocol-enabled server to turn on Amazon CloudWatch logging for Amazon S3 events. When set, user activity can be viewed in your CloudWatch logs.
     */
    LoggingRole?: Role;
    /**
     * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:    SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH    FTPS (File Transfer Protocol Secure): File transfer with TLS encryption    FTP (File Transfer Protocol): Unencrypted file transfer  
     */
    Protocols?: Protocols;
    /**
     * Specifies the unique system-assigned identifier for a file transfer protocol-enabled server that you instantiate.
     */
    ServerId?: ServerId;
    /**
     * Specifies the condition of a file transfer protocol-enabled server for the server that was described. A value of ONLINE indicates that the server can accept jobs and transfer files. A State value of OFFLINE means that the server cannot perform file transfer operations. The states of STARTING and STOPPING indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of START_FAILED or STOP_FAILED can indicate an error condition.
     */
    State?: State;
    /**
     * Specifies the key-value pairs that you can use to search for and group file transfer protocol-enabled servers that were assigned to the server that was described.
     */
    Tags?: Tags;
    /**
     * Specifies the number of users that are assigned to a file transfer protocol-enabled server you specified with the ServerId.
     */
    UserCount?: UserCount;
  }
  export interface DescribedUser {
    /**
     * Specifies the unique Amazon Resource Name (ARN) for the user that was requested to be described.
     */
    Arn: Arn;
    /**
     * Specifies the landing directory (or folder), which is the location that files are written to or read from in an Amazon S3 bucket, for the described user. An example is  your-Amazon-S3-bucket-name&gt;/home/username .
     */
    HomeDirectory?: HomeDirectory;
    /**
     * Specifies the logical directory mappings that specify what Amazon S3 paths and keys should be visible to your user and how you want to make them visible. You will need to specify the "Entry" and "Target" pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 path. If you only specify a target, it will be displayed as is. You will need to also make sure that your AWS Identity and Access Management (IAM) role provides access to paths in Target. In most cases, you can use this value instead of the scope-down policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to '/' and set Target to the HomeDirectory parameter value.
     */
    HomeDirectoryMappings?: HomeDirectoryMappings;
    /**
     * Specifies the type of landing directory (folder) you mapped for your users to see when they log into the file transfer protocol-enabled server. If you set it to PATH, the user will see the absolute Amazon S3 bucket paths as is in their file transfer protocol clients. If you set it LOGICAL, you will need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 paths visible to your users.
     */
    HomeDirectoryType?: HomeDirectoryType;
    /**
     * Specifies the name of the policy in use for the described user.
     */
    Policy?: Policy;
    /**
     * Specifies the IAM role that controls your users' access to your Amazon S3 bucket. The policies attached to this role will determine the level of access you want to provide your users when transferring files into and out of your Amazon S3 bucket or buckets. The IAM role should also contain a trust relationship that allows a file transfer protocol-enabled server to access your resources when servicing your users' transfer requests.
     */
    Role?: Role;
    /**
     * Specifies the public key portion of the Secure Shell (SSH) keys stored for the described user.
     */
    SshPublicKeys?: SshPublicKeys;
    /**
     * Specifies the key-value pairs for the user requested. Tag can be used to search for and group users for a variety of purposes.
     */
    Tags?: Tags;
    /**
     * Specifies the name of the user that was requested to be described. User names are used for authentication purposes. This is the string that will be used by your user when they log in to your file transfer protocol-enabled server.
     */
    UserName?: UserName;
  }
  export interface EndpointDetails {
    /**
     * A list of address allocation IDs that are required to attach an Elastic IP address to your file transfer protocol-enabled server's endpoint. This is only valid in the UpdateServer API.  This property can only be use when EndpointType is set to VPC. 
     */
    AddressAllocationIds?: AddressAllocationIds;
    /**
     * A list of subnet IDs that are required to host your file transfer protocol-enabled server endpoint in your VPC.  This property can only be used when EndpointType is set to VPC. 
     */
    SubnetIds?: SubnetIds;
    /**
     * The ID of the VPC endpoint.  This property can only be used when EndpointType is set to VPC_ENDPOINT. 
     */
    VpcEndpointId?: VpcEndpointId;
    /**
     * The VPC ID of the VPC in which a file transfer protocol-enabled server's endpoint will be hosted.  This property can only be used when EndpointType is set to VPC. 
     */
    VpcId?: VpcId;
  }
  export type EndpointType = "PUBLIC"|"VPC"|"VPC_ENDPOINT"|string;
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
     * Provides the location of the service endpoint used to authenticate users.
     */
    Url?: Url;
    /**
     * Provides the type of InvocationRole used to authenticate the user account.
     */
    InvocationRole?: Role;
  }
  export type IdentityProviderType = "SERVICE_MANAGED"|"API_GATEWAY"|string;
  export interface ImportSshPublicKeyRequest {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server.
     */
    ServerId: ServerId;
    /**
     * The public key portion of an SSH key pair.
     */
    SshPublicKeyBody: SshPublicKeyBody;
    /**
     * The name of the user account that is assigned to one or more file transfer protocol-enabled servers.
     */
    UserName: UserName;
  }
  export interface ImportSshPublicKeyResponse {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server.
     */
    ServerId: ServerId;
    /**
     * The name given to a public key by the system that was imported.
     */
    SshPublicKeyId: SshPublicKeyId;
    /**
     * A user name assigned to the ServerID value that you specified.
     */
    UserName: UserName;
  }
  export interface ListServersRequest {
    /**
     * Specifies the number of file transfer protocol-enabled servers to return as a response to the ListServers query.
     */
    MaxResults?: MaxResults;
    /**
     * When additional results are obtained from theListServers command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional file transfer protocol-enabled servers.
     */
    NextToken?: NextToken;
  }
  export interface ListServersResponse {
    /**
     * When you can get additional results from the ListServers operation, a NextToken parameter is returned in the output. In a following command, you can pass in the NextToken parameter to continue listing additional file transfer protocol-enabled servers.
     */
    NextToken?: NextToken;
    /**
     * An array of file transfer protocol-enabled servers that were listed.
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
     * The ARN you specified to list the tags of.
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
     * A system-assigned unique identifier for a file transfer protocol-enabled server that has users assigned to it.
     */
    ServerId: ServerId;
  }
  export interface ListUsersResponse {
    /**
     * When you can get additional results from the ListUsers call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional users.
     */
    NextToken?: NextToken;
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server that the users are assigned to.
     */
    ServerId: ServerId;
    /**
     * Returns the user accounts and their properties for the ServerId value that you specify.
     */
    Users: ListedUsers;
  }
  export interface ListedServer {
    /**
     * Specifies the unique Amazon Resource Name (ARN) for a file transfer protocol-enabled server to be listed.
     */
    Arn: Arn;
    /**
     * Specifies the authentication method used to validate a user for a file transfer protocol-enabled server that was specified. This can include Secure Shell (SSH), user name and password combinations, or your own custom authentication method. Valid values include SERVICE_MANAGED or API_GATEWAY.
     */
    IdentityProviderType?: IdentityProviderType;
    /**
     * Specifies the type of VPC endpoint that your file transfer protocol-enabled server is connected to. If your server is connected to a VPC endpoint, your server isn't accessible over the public internet.
     */
    EndpointType?: EndpointType;
    /**
     * Specifies the AWS Identity and Access Management (IAM) role that allows a file transfer protocol-enabled server to turn on Amazon CloudWatch logging.
     */
    LoggingRole?: Role;
    /**
     * Specifies the unique system assigned identifier for a file transfer protocol-enabled servers that were listed.
     */
    ServerId?: ServerId;
    /**
     * Specifies the condition of a file transfer protocol-enabled server for the server that was described. A value of ONLINE indicates that the server can accept jobs and transfer files. A State value of OFFLINE means that the server cannot perform file transfer operations. The states of STARTING and STOPPING indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of START_FAILED or STOP_FAILED can indicate an error condition.
     */
    State?: State;
    /**
     * Specifies the number of users that are assigned to a file transfer protocol-enabled server you specified with the ServerId.
     */
    UserCount?: UserCount;
  }
  export type ListedServers = ListedServer[];
  export interface ListedUser {
    /**
     * Provides the unique Amazon Resource Name (ARN) for the user that you want to learn about.
     */
    Arn: Arn;
    /**
     * Specifies the location that files are written to or read from an Amazon S3 bucket for the user you specify by their ARN.
     */
    HomeDirectory?: HomeDirectory;
    /**
     * Specifies the type of landing directory (folder) you mapped for your users' home directory. If you set it to PATH, the user will see the absolute Amazon S3 bucket paths as is in their file transfer protocol clients. If you set it LOGICAL, you will need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 paths visible to your users.
     */
    HomeDirectoryType?: HomeDirectoryType;
    /**
     * Specifies the role that is in use by this user. A role is an AWS Identity and Access Management (IAM) entity that, in this case, allows a file transfer protocol-enabled server to act on a user's behalf. It allows the server to inherit the trust relationship that enables that user to perform file operations to their Amazon S3 bucket.
     */
    Role?: Role;
    /**
     * Specifies the number of SSH public keys stored for the user you specified.
     */
    SshPublicKeyCount?: SshPublicKeyCount;
    /**
     * Specifies the name of the user whose ARN was specified. User names are used for authentication purposes.
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
  export type Protocol = "SFTP"|"FTP"|"FTPS"|string;
  export type Protocols = Protocol[];
  export type Response = string;
  export type Role = string;
  export type ServerId = string;
  export type SourceIp = string;
  export interface SshPublicKey {
    /**
     * Specifies the date that the public key was added to the user account.
     */
    DateImported: DateImported;
    /**
     * Specifies the content of the SSH public key as specified by the PublicKeyId.
     */
    SshPublicKeyBody: SshPublicKeyBody;
    /**
     * Specifies the SshPublicKeyId parameter contains the identifier of the public key.
     */
    SshPublicKeyId: SshPublicKeyId;
  }
  export type SshPublicKeyBody = string;
  export type SshPublicKeyCount = number;
  export type SshPublicKeyId = string;
  export type SshPublicKeys = SshPublicKey[];
  export interface StartServerRequest {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server that you start.
     */
    ServerId: ServerId;
  }
  export type State = "OFFLINE"|"ONLINE"|"STARTING"|"STOPPING"|"START_FAILED"|"STOP_FAILED"|string;
  export type StatusCode = number;
  export interface StopServerRequest {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server that you stopped.
     */
    ServerId: ServerId;
  }
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface Tag {
    /**
     * The name assigned to the tag that you create.
     */
    Key: TagKey;
    /**
     * Contains one or more values that you assigned to the key name you create.
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
     * A system-assigned identifier for a specific file transfer protocol-enabled server. That server's user authentication method is tested with a user name and password.
     */
    ServerId: ServerId;
    /**
     * The type of file transfer protocol to be tested. The available protocols are:   Secure Shell (SSH) File Transfer Protocol (SFTP)   File Transfer Protocol Secure (FTPS)   File Transfer Protocol (FTP)  
     */
    ServerProtocol?: Protocol;
    /**
     * The source IP address of the user account to be tested.
     */
    SourceIp?: SourceIp;
    /**
     * The name of the user account to be tested.
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
     * The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is an identifier for a specific AWS resource, such as a server, user, or role.
     */
    Arn: Arn;
    /**
     * TagKeys are key-value pairs assigned to ARNs that can be used to group and search for resources by type. This metadata can be attached to resources for any purpose.
     */
    TagKeys: TagKeys;
  }
  export interface UpdateServerRequest {
    /**
     * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. Required when Protocols is set to FTPS. To request a new public certificate, see Request a public certificate in the  AWS Certificate Manager User Guide. To import an existing certificate into ACM, see Importing certificates into ACM in the  AWS Certificate Manager User Guide. To request a private certificate to use FTPS through private IP addresses, see Request a private certificate in the  AWS Certificate Manager User Guide. Certificates with the following cryptographic algorithms and key sizes are supported:   2048-bit RSA (RSA_2048)   4096-bit RSA (RSA_4096)   Elliptic Prime Curve 256 bit (EC_prime256v1)   Elliptic Prime Curve 384 bit (EC_secp384r1)   Elliptic Prime Curve 521 bit (EC_secp521r1)    The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer. 
     */
    Certificate?: Certificate;
    /**
     * The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server to resources only within your VPC. To control incoming internet traffic, you will need to associate one or more Elastic IP addresses with your server's endpoint.
     */
    EndpointDetails?: EndpointDetails;
    /**
     * The type of endpoint that you want your file transfer protocol-enabled server to connect to. You can choose to connect to the public internet or a VPC endpoint. With a VPC endpoint, you can restrict access to your server and resources only within your VPC.  It is recommended that you use VPC as the EndpointType. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with EndpointType set to VPC_ENDPOINT. 
     */
    EndpointType?: EndpointType;
    /**
     * The RSA private key as generated by ssh-keygen -N "" -m PEM -f my-new-server-key.  If you aren't planning to migrate existing users from an existing file transfer protocol-enabled server to a new server, don't update the host key. Accidentally changing a server's host key can be disruptive.  For more information, see Change the host key for your SFTP-enabled server in the AWS Transfer Family User Guide.
     */
    HostKey?: HostKey;
    /**
     * An array containing all of the information required to call a customer's authentication API method.
     */
    IdentityProviderDetails?: IdentityProviderDetails;
    /**
     * Changes the AWS Identity and Access Management (IAM) role that allows Amazon S3 events to be logged in Amazon CloudWatch, turning logging on or off.
     */
    LoggingRole?: NullableRole;
    /**
     * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:   Secure Shell (SSH) File Transfer Protocol (SFTP): File transfer over SSH   File Transfer Protocol Secure (FTPS): File transfer with TLS encryption   File Transfer Protocol (FTP): Unencrypted file transfer    If you select FTPS, you must choose a certificate stored in AWS Certificate Manager (ACM) which will be used to identify your server when clients connect to it over FTPS. If Protocol includes either FTP or FTPS, then the EndpointType must be VPC and the IdentityProviderType must be API_GATEWAY. If Protocol includes FTP, then AddressAllocationIds cannot be associated. If Protocol is set only to SFTP, the EndpointType can be set to PUBLIC and the IdentityProviderType can be set to SERVICE_MANAGED. 
     */
    Protocols?: Protocols;
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server instance that the user account is assigned to.
     */
    ServerId: ServerId;
  }
  export interface UpdateServerResponse {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server that the user account is assigned to.
     */
    ServerId: ServerId;
  }
  export interface UpdateUserRequest {
    /**
     * Specifies the landing directory (folder) for a user when they log in to the file transfer protocol-enabled server using their file transfer protocol client. An example is your-Amazon-S3-bucket-name&gt;/home/username.
     */
    HomeDirectory?: HomeDirectory;
    /**
     * The type of landing directory (folder) you want your users' home directory to be when they log into the file transfer protocol-enabled server. If you set it to PATH, the user will see the absolute Amazon S3 bucket paths as is in their file transfer protocol clients. If you set it LOGICAL, you will need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 paths visible to your users.
     */
    HomeDirectoryType?: HomeDirectoryType;
    /**
     * Logical directory mappings that specify what Amazon S3 paths and keys should be visible to your user and how you want to make them visible. You will need to specify the "Entry" and "Target" pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 path. If you only specify a target, it will be displayed as is. You will need to also make sure that your IAM role provides access to paths in Target. The following is an example.  '[ "/bucket2/documentation", { "Entry": "your-personal-report.pdf", "Target": "/bucket3/customized-reports/${transfer:UserName}.pdf" } ]'  In most cases, you can use this value instead of the scope-down policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to '/' and set Target to the HomeDirectory parameter value.  If the target of a logical directory entry does not exist in Amazon S3, the entry will be ignored. As a workaround, you can use the Amazon S3 api to create 0 byte objects as place holders for your directory. If using the CLI, use the s3api call instead of s3 so you can use the put-object operation. For example, you use the following: aws s3api put-object --bucket bucketname --key path/to/folder/. Make sure that the end of the key name ends in a / for it to be considered a folder. 
     */
    HomeDirectoryMappings?: HomeDirectoryMappings;
    /**
     * Allows you to supply a scope-down policy for your user so you can use the same IAM role across multiple users. The policy scopes down user access to portions of your Amazon S3 bucket. Variables you can use inside this policy include ${Transfer:UserName}, ${Transfer:HomeDirectory}, and ${Transfer:HomeBucket}.  For scope-down policies, AWS Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a scope-down policy, see Creating a scope-down policy. For more information, see AssumeRole in the AWS Security Token Service API Reference. 
     */
    Policy?: Policy;
    /**
     * The IAM role that controls your users' access to your Amazon S3 bucket. The policies attached to this role will determine the level of access you want to provide your users when transferring files into and out of your Amazon S3 bucket or buckets. The IAM role should also contain a trust relationship that allows the file transfer protocol-enabled server to access your resources when servicing your users' transfer requests.
     */
    Role?: Role;
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server instance that the user account is assigned to.
     */
    ServerId: ServerId;
    /**
     * A unique string that identifies a user and is associated with a file transfer protocol-enabled server as specified by the ServerId. This is the string that will be used by your user when they log in to your server. This user name is a minimum of 3 and a maximum of 32 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore, and hyphen. The user name can't start with a hyphen.
     */
    UserName: UserName;
  }
  export interface UpdateUserResponse {
    /**
     * A system-assigned unique identifier for a file transfer protocol-enabled server instance that the user account is assigned to.
     */
    ServerId: ServerId;
    /**
     * The unique identifier for a user that is assigned to a file transfer protocol-enabled server instance that was specified in the request.
     */
    UserName: UserName;
  }
  export type Url = string;
  export type UserCount = number;
  export type UserName = string;
  export type UserPassword = string;
  export type VpcEndpointId = string;
  export type VpcId = string;
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
