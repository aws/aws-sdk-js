import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class WorkSpaces extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WorkSpaces.Types.ClientConfiguration)
  config: Config & WorkSpaces.Types.ClientConfiguration;
  /**
   * Creates tags for the specified WorkSpace.
   */
  createTags(params: WorkSpaces.Types.CreateTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.CreateTagsResult) => void): Request<WorkSpaces.Types.CreateTagsResult, AWSError>;
  /**
   * Creates tags for the specified WorkSpace.
   */
  createTags(callback?: (err: AWSError, data: WorkSpaces.Types.CreateTagsResult) => void): Request<WorkSpaces.Types.CreateTagsResult, AWSError>;
  /**
   * Creates one or more WorkSpaces. This operation is asynchronous and returns before the WorkSpaces are created.
   */
  createWorkspaces(params: WorkSpaces.Types.CreateWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.CreateWorkspacesResult) => void): Request<WorkSpaces.Types.CreateWorkspacesResult, AWSError>;
  /**
   * Creates one or more WorkSpaces. This operation is asynchronous and returns before the WorkSpaces are created.
   */
  createWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.CreateWorkspacesResult) => void): Request<WorkSpaces.Types.CreateWorkspacesResult, AWSError>;
  /**
   * Deletes the specified tags from a WorkSpace.
   */
  deleteTags(params: WorkSpaces.Types.DeleteTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DeleteTagsResult) => void): Request<WorkSpaces.Types.DeleteTagsResult, AWSError>;
  /**
   * Deletes the specified tags from a WorkSpace.
   */
  deleteTags(callback?: (err: AWSError, data: WorkSpaces.Types.DeleteTagsResult) => void): Request<WorkSpaces.Types.DeleteTagsResult, AWSError>;
  /**
   * Describes the tags for the specified WorkSpace.
   */
  describeTags(params: WorkSpaces.Types.DescribeTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeTagsResult) => void): Request<WorkSpaces.Types.DescribeTagsResult, AWSError>;
  /**
   * Describes the tags for the specified WorkSpace.
   */
  describeTags(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeTagsResult) => void): Request<WorkSpaces.Types.DescribeTagsResult, AWSError>;
  /**
   * Describes the available WorkSpace bundles. You can filter the results using either bundle ID or owner, but not both.
   */
  describeWorkspaceBundles(params: WorkSpaces.Types.DescribeWorkspaceBundlesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceBundlesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceBundlesResult, AWSError>;
  /**
   * Describes the available WorkSpace bundles. You can filter the results using either bundle ID or owner, but not both.
   */
  describeWorkspaceBundles(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceBundlesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceBundlesResult, AWSError>;
  /**
   * Describes the available AWS Directory Service directories that are registered with Amazon WorkSpaces.
   */
  describeWorkspaceDirectories(params: WorkSpaces.Types.DescribeWorkspaceDirectoriesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceDirectoriesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceDirectoriesResult, AWSError>;
  /**
   * Describes the available AWS Directory Service directories that are registered with Amazon WorkSpaces.
   */
  describeWorkspaceDirectories(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceDirectoriesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceDirectoriesResult, AWSError>;
  /**
   * Describes the specified WorkSpaces. You can filter the results using bundle ID, directory ID, or owner, but you can specify only one filter at a time.
   */
  describeWorkspaces(params: WorkSpaces.Types.DescribeWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesResult, AWSError>;
  /**
   * Describes the specified WorkSpaces. You can filter the results using bundle ID, directory ID, or owner, but you can specify only one filter at a time.
   */
  describeWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesResult, AWSError>;
  /**
   * Describes the connection status of the specified WorkSpaces.
   */
  describeWorkspacesConnectionStatus(params: WorkSpaces.Types.DescribeWorkspacesConnectionStatusRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult, AWSError>;
  /**
   * Describes the connection status of the specified WorkSpaces.
   */
  describeWorkspacesConnectionStatus(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult, AWSError>;
  /**
   * Modifies the specified WorkSpace properties.
   */
  modifyWorkspaceProperties(params: WorkSpaces.Types.ModifyWorkspacePropertiesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspacePropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspacePropertiesResult, AWSError>;
  /**
   * Modifies the specified WorkSpace properties.
   */
  modifyWorkspaceProperties(callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspacePropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspacePropertiesResult, AWSError>;
  /**
   * Reboots the specified WorkSpaces. You cannot reboot a WorkSpace unless its state is AVAILABLE, IMPAIRED, or INOPERABLE. This operation is asynchronous and returns before the WorkSpaces have rebooted.
   */
  rebootWorkspaces(params: WorkSpaces.Types.RebootWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RebootWorkspacesResult) => void): Request<WorkSpaces.Types.RebootWorkspacesResult, AWSError>;
  /**
   * Reboots the specified WorkSpaces. You cannot reboot a WorkSpace unless its state is AVAILABLE, IMPAIRED, or INOPERABLE. This operation is asynchronous and returns before the WorkSpaces have rebooted.
   */
  rebootWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.RebootWorkspacesResult) => void): Request<WorkSpaces.Types.RebootWorkspacesResult, AWSError>;
  /**
   * Rebuilds the specified WorkSpaces. You cannot rebuild a WorkSpace unless its state is AVAILABLE or ERROR. Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see Rebuild a WorkSpace. This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.
   */
  rebuildWorkspaces(params: WorkSpaces.Types.RebuildWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RebuildWorkspacesResult) => void): Request<WorkSpaces.Types.RebuildWorkspacesResult, AWSError>;
  /**
   * Rebuilds the specified WorkSpaces. You cannot rebuild a WorkSpace unless its state is AVAILABLE or ERROR. Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see Rebuild a WorkSpace. This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.
   */
  rebuildWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.RebuildWorkspacesResult) => void): Request<WorkSpaces.Types.RebuildWorkspacesResult, AWSError>;
  /**
   * Starts the specified WorkSpaces. You cannot start a WorkSpace unless it has a running mode of AutoStop and a state of STOPPED.
   */
  startWorkspaces(params: WorkSpaces.Types.StartWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.StartWorkspacesResult) => void): Request<WorkSpaces.Types.StartWorkspacesResult, AWSError>;
  /**
   * Starts the specified WorkSpaces. You cannot start a WorkSpace unless it has a running mode of AutoStop and a state of STOPPED.
   */
  startWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.StartWorkspacesResult) => void): Request<WorkSpaces.Types.StartWorkspacesResult, AWSError>;
  /**
   *  Stops the specified WorkSpaces. You cannot stop a WorkSpace unless it has a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.
   */
  stopWorkspaces(params: WorkSpaces.Types.StopWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.StopWorkspacesResult) => void): Request<WorkSpaces.Types.StopWorkspacesResult, AWSError>;
  /**
   *  Stops the specified WorkSpaces. You cannot stop a WorkSpace unless it has a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.
   */
  stopWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.StopWorkspacesResult) => void): Request<WorkSpaces.Types.StopWorkspacesResult, AWSError>;
  /**
   * Terminates the specified WorkSpaces. Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace. You can terminate a WorkSpace that is in any state except SUSPENDED. This operation is asynchronous and returns before the WorkSpaces have been completely terminated.
   */
  terminateWorkspaces(params: WorkSpaces.Types.TerminateWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.TerminateWorkspacesResult) => void): Request<WorkSpaces.Types.TerminateWorkspacesResult, AWSError>;
  /**
   * Terminates the specified WorkSpaces. Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace. You can terminate a WorkSpace that is in any state except SUSPENDED. This operation is asynchronous and returns before the WorkSpaces have been completely terminated.
   */
  terminateWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.TerminateWorkspacesResult) => void): Request<WorkSpaces.Types.TerminateWorkspacesResult, AWSError>;
}
declare namespace WorkSpaces {
  export type ARN = string;
  export type Alias = string;
  export type BooleanObject = boolean;
  export type BundleId = string;
  export type BundleIdList = BundleId[];
  export type BundleList = WorkspaceBundle[];
  export type BundleOwner = string;
  export type Compute = "VALUE"|"STANDARD"|"PERFORMANCE"|"POWER"|"GRAPHICS"|string;
  export interface ComputeType {
    /**
     * The compute type.
     */
    Name?: Compute;
  }
  export type ComputerName = string;
  export type ConnectionState = "CONNECTED"|"DISCONNECTED"|"UNKNOWN"|string;
  export interface CreateTagsRequest {
    /**
     * The ID of the resource.
     */
    ResourceId: NonEmptyString;
    /**
     * The tags. Each resource can have a maximum of 50 tags.
     */
    Tags: TagList;
  }
  export interface CreateTagsResult {
  }
  export interface CreateWorkspacesRequest {
    /**
     * Information about the WorkSpaces to create.
     */
    Workspaces: WorkspaceRequestList;
  }
  export interface CreateWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be created.
     */
    FailedRequests?: FailedCreateWorkspaceRequests;
    /**
     * Information about the WorkSpaces that were created. Because this operation is asynchronous, the identifier returned is not immediately available for use with other operations. For example, if you call DescribeWorkspaces before the WorkSpace is created, the information returned can be incomplete.
     */
    PendingRequests?: WorkspaceList;
  }
  export type DefaultOu = string;
  export interface DefaultWorkspaceCreationProperties {
    /**
     * Indicates whether the directory is enabled for Amazon WorkDocs.
     */
    EnableWorkDocs?: BooleanObject;
    /**
     * The public IP address to attach to all WorkSpaces that are created or rebuilt.
     */
    EnableInternetAccess?: BooleanObject;
    /**
     * The organizational unit (OU) in the directory for the WorkSpace machine accounts.
     */
    DefaultOu?: DefaultOu;
    /**
     * The identifier of any security groups to apply to WorkSpaces when they are created.
     */
    CustomSecurityGroupId?: SecurityGroupId;
    /**
     * Indicates whether the WorkSpace user is an administrator on the WorkSpace.
     */
    UserEnabledAsLocalAdministrator?: BooleanObject;
  }
  export interface DeleteTagsRequest {
    /**
     * The ID of the resource.
     */
    ResourceId: NonEmptyString;
    /**
     * The tag keys.
     */
    TagKeys: TagKeyList;
  }
  export interface DeleteTagsResult {
  }
  export interface DescribeTagsRequest {
    /**
     * The ID of the resource.
     */
    ResourceId: NonEmptyString;
  }
  export interface DescribeTagsResult {
    /**
     * The tags.
     */
    TagList?: TagList;
  }
  export interface DescribeWorkspaceBundlesRequest {
    /**
     * The IDs of the bundles. This parameter cannot be combined with any other filter.
     */
    BundleIds?: BundleIdList;
    /**
     * The owner of the bundles. This parameter cannot be combined with any other filter. Specify AMAZON to describe the bundles provided by AWS or null to describe the bundles that belong to your account.
     */
    Owner?: BundleOwner;
    /**
     * The token for the next set of results. (You received this token from a previous call.)
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceBundlesResult {
    /**
     * Information about the bundles.
     */
    Bundles?: BundleList;
    /**
     * The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceDirectoriesRequest {
    /**
     * The identifiers of the directories. If the value is null, all directories are retrieved.
     */
    DirectoryIds?: DirectoryIdList;
    /**
     * The token for the next set of results. (You received this token from a previous call.)
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceDirectoriesResult {
    /**
     * Information about the directories.
     */
    Directories?: DirectoryList;
    /**
     * The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesConnectionStatusRequest {
    /**
     * The identifiers of the WorkSpaces.
     */
    WorkspaceIds?: WorkspaceIdList;
    /**
     * The token for the next set of results. (You received this token from a previous call.)
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesConnectionStatusResult {
    /**
     * Information about the connection status of the WorkSpace.
     */
    WorkspacesConnectionStatus?: WorkspaceConnectionStatusList;
    /**
     * The token to use to retrieve the next set of results, or null if there are no more results available.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesRequest {
    /**
     * The IDs of the WorkSpaces. This parameter cannot be combined with any other filter. Because the CreateWorkspaces operation is asynchronous, the identifier it returns is not immediately available. If you immediately call DescribeWorkspaces with this identifier, no information is returned.
     */
    WorkspaceIds?: WorkspaceIdList;
    /**
     * The ID of the directory. In addition, you can optionally specify a specific directory user (see UserName). This parameter cannot be combined with any other filter.
     */
    DirectoryId?: DirectoryId;
    /**
     * The name of the directory user. You must specify this parameter with DirectoryId.
     */
    UserName?: UserName;
    /**
     * The ID of the bundle. All WorkSpaces that are created from this bundle are retrieved. This parameter cannot be combined with any other filter.
     */
    BundleId?: BundleId;
    /**
     * The maximum number of items to return.
     */
    Limit?: Limit;
    /**
     * The token for the next set of results. (You received this token from a previous call.)
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesResult {
    /**
     * Information about the WorkSpaces. Because CreateWorkspaces is an asynchronous operation, some of the returned information could be incomplete.
     */
    Workspaces?: WorkspaceList;
    /**
     * The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.
     */
    NextToken?: PaginationToken;
  }
  export type Description = string;
  export type DirectoryId = string;
  export type DirectoryIdList = DirectoryId[];
  export type DirectoryList = WorkspaceDirectory[];
  export type DirectoryName = string;
  export type DnsIpAddresses = IpAddress[];
  export type ErrorType = string;
  export type ExceptionMessage = string;
  export interface FailedCreateWorkspaceRequest {
    /**
     * Information about the WorkSpace.
     */
    WorkspaceRequest?: WorkspaceRequest;
    /**
     * The error code.
     */
    ErrorCode?: ErrorType;
    /**
     * The textual error message.
     */
    ErrorMessage?: Description;
  }
  export type FailedCreateWorkspaceRequests = FailedCreateWorkspaceRequest[];
  export type FailedRebootWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedRebuildWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedStartWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedStopWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedTerminateWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export interface FailedWorkspaceChangeRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The error code.
     */
    ErrorCode?: ErrorType;
    /**
     * The textual error message.
     */
    ErrorMessage?: Description;
  }
  export type IpAddress = string;
  export type Limit = number;
  export type ModificationResourceEnum = "ROOT_VOLUME"|"USER_VOLUME"|"COMPUTE_TYPE"|string;
  export interface ModificationState {
    /**
     * The resource.
     */
    Resource?: ModificationResourceEnum;
    /**
     * The modification state.
     */
    State?: ModificationStateEnum;
  }
  export type ModificationStateEnum = "UPDATE_INITIATED"|"UPDATE_IN_PROGRESS"|string;
  export type ModificationStateList = ModificationState[];
  export interface ModifyWorkspacePropertiesRequest {
    /**
     * The ID of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
    /**
     * The properties of the WorkSpace.
     */
    WorkspaceProperties: WorkspaceProperties;
  }
  export interface ModifyWorkspacePropertiesResult {
  }
  export type NonEmptyString = string;
  export type PaginationToken = string;
  export interface RebootRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
  }
  export type RebootWorkspaceRequests = RebootRequest[];
  export interface RebootWorkspacesRequest {
    /**
     * The WorkSpaces to reboot.
     */
    RebootWorkspaceRequests: RebootWorkspaceRequests;
  }
  export interface RebootWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be rebooted.
     */
    FailedRequests?: FailedRebootWorkspaceRequests;
  }
  export interface RebuildRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
  }
  export type RebuildWorkspaceRequests = RebuildRequest[];
  export interface RebuildWorkspacesRequest {
    /**
     * The WorkSpaces to rebuild.
     */
    RebuildWorkspaceRequests: RebuildWorkspaceRequests;
  }
  export interface RebuildWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be rebuilt.
     */
    FailedRequests?: FailedRebuildWorkspaceRequests;
  }
  export type RegistrationCode = string;
  export interface RootStorage {
    /**
     * The size of the root volume.
     */
    Capacity?: NonEmptyString;
  }
  export type RootVolumeSizeGib = number;
  export type RunningMode = "AUTO_STOP"|"ALWAYS_ON"|string;
  export type RunningModeAutoStopTimeoutInMinutes = number;
  export type SecurityGroupId = string;
  export interface StartRequest {
    /**
     * The ID of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
  }
  export type StartWorkspaceRequests = StartRequest[];
  export interface StartWorkspacesRequest {
    /**
     * The WorkSpaces to start.
     */
    StartWorkspaceRequests: StartWorkspaceRequests;
  }
  export interface StartWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be started.
     */
    FailedRequests?: FailedStartWorkspaceRequests;
  }
  export interface StopRequest {
    /**
     * The ID of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
  }
  export type StopWorkspaceRequests = StopRequest[];
  export interface StopWorkspacesRequest {
    /**
     * The WorkSpaces to stop.
     */
    StopWorkspaceRequests: StopWorkspaceRequests;
  }
  export interface StopWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be stopped.
     */
    FailedRequests?: FailedStopWorkspaceRequests;
  }
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = NonEmptyString[];
  export type TagList = Tag[];
  export type TagValue = string;
  export interface TerminateRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
  }
  export type TerminateWorkspaceRequests = TerminateRequest[];
  export interface TerminateWorkspacesRequest {
    /**
     * The WorkSpaces to terminate.
     */
    TerminateWorkspaceRequests: TerminateWorkspaceRequests;
  }
  export interface TerminateWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be terminated.
     */
    FailedRequests?: FailedTerminateWorkspaceRequests;
  }
  export type Timestamp = Date;
  export type UserName = string;
  export interface UserStorage {
    /**
     * The size of the user storage.
     */
    Capacity?: NonEmptyString;
  }
  export type UserVolumeSizeGib = number;
  export type VolumeEncryptionKey = string;
  export interface Workspace {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The identifier of the AWS Directory Service directory for the WorkSpace.
     */
    DirectoryId?: DirectoryId;
    /**
     * The user for the WorkSpace.
     */
    UserName?: UserName;
    /**
     * The IP address of the WorkSpace.
     */
    IpAddress?: IpAddress;
    /**
     * The operational state of the WorkSpace.
     */
    State?: WorkspaceState;
    /**
     * The identifier of the bundle used to create the WorkSpace.
     */
    BundleId?: BundleId;
    /**
     * The identifier of the subnet for the WorkSpace.
     */
    SubnetId?: SubnetId;
    /**
     * If the WorkSpace could not be created, contains a textual error message that describes the failure.
     */
    ErrorMessage?: Description;
    /**
     * If the WorkSpace could not be created, contains the error code.
     */
    ErrorCode?: WorkspaceErrorCode;
    /**
     * The name of the WorkSpace, as seen by the operating system.
     */
    ComputerName?: ComputerName;
    /**
     * The KMS key used to encrypt data stored on your WorkSpace.
     */
    VolumeEncryptionKey?: VolumeEncryptionKey;
    /**
     * Indicates whether the data stored on the user volume is encrypted.
     */
    UserVolumeEncryptionEnabled?: BooleanObject;
    /**
     * Indicates whether the data stored on the root volume is encrypted.
     */
    RootVolumeEncryptionEnabled?: BooleanObject;
    /**
     * The properties of the WorkSpace.
     */
    WorkspaceProperties?: WorkspaceProperties;
    /**
     * The modification states of the WorkSpace.
     */
    ModificationStates?: ModificationStateList;
  }
  export interface WorkspaceBundle {
    /**
     * The bundle identifier.
     */
    BundleId?: BundleId;
    /**
     * The name of the bundle.
     */
    Name?: NonEmptyString;
    /**
     * The owner of the bundle. This is the account identifier of the owner, or AMAZON if the bundle is provided by AWS.
     */
    Owner?: BundleOwner;
    /**
     * A description.
     */
    Description?: Description;
    /**
     * The size of the root volume.
     */
    RootStorage?: RootStorage;
    /**
     * The size of the user storage.
     */
    UserStorage?: UserStorage;
    /**
     * The compute type. For more information, see Amazon WorkSpaces Bundles.
     */
    ComputeType?: ComputeType;
  }
  export interface WorkspaceConnectionStatus {
    /**
     * The ID of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The connection state of the WorkSpace. The connection state is unknown if the WorkSpace is stopped.
     */
    ConnectionState?: ConnectionState;
    /**
     * The timestamp of the connection state check.
     */
    ConnectionStateCheckTimestamp?: Timestamp;
    /**
     * The timestamp of the last known user connection.
     */
    LastKnownUserConnectionTimestamp?: Timestamp;
  }
  export type WorkspaceConnectionStatusList = WorkspaceConnectionStatus[];
  export interface WorkspaceDirectory {
    /**
     * The directory identifier.
     */
    DirectoryId?: DirectoryId;
    /**
     * The directory alias.
     */
    Alias?: Alias;
    /**
     * The name of the directory.
     */
    DirectoryName?: DirectoryName;
    /**
     * The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
     */
    RegistrationCode?: RegistrationCode;
    /**
     * The identifiers of the subnets used with the directory.
     */
    SubnetIds?: SubnetIds;
    /**
     * The IP addresses of the DNS servers for the directory.
     */
    DnsIpAddresses?: DnsIpAddresses;
    /**
     * The user name for the service account.
     */
    CustomerUserName?: UserName;
    /**
     * The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
     */
    IamRoleId?: ARN;
    /**
     * The directory type.
     */
    DirectoryType?: WorkspaceDirectoryType;
    /**
     * The identifier of the security group that is assigned to new WorkSpaces.
     */
    WorkspaceSecurityGroupId?: SecurityGroupId;
    /**
     * The state of the directory's registration with Amazon WorkSpaces
     */
    State?: WorkspaceDirectoryState;
    /**
     * The default creation properties for all WorkSpaces in the directory.
     */
    WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
  }
  export type WorkspaceDirectoryState = "REGISTERING"|"REGISTERED"|"DEREGISTERING"|"DEREGISTERED"|"ERROR"|string;
  export type WorkspaceDirectoryType = "SIMPLE_AD"|"AD_CONNECTOR"|string;
  export type WorkspaceErrorCode = string;
  export type WorkspaceId = string;
  export type WorkspaceIdList = WorkspaceId[];
  export type WorkspaceList = Workspace[];
  export interface WorkspaceProperties {
    /**
     * The running mode. For more information, see Manage the WorkSpace Running Mode.
     */
    RunningMode?: RunningMode;
    /**
     * The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60 minute intervals.
     */
    RunningModeAutoStopTimeoutInMinutes?: RunningModeAutoStopTimeoutInMinutes;
    /**
     * The size of the root volume.
     */
    RootVolumeSizeGib?: RootVolumeSizeGib;
    /**
     * The size of the user storage.
     */
    UserVolumeSizeGib?: UserVolumeSizeGib;
    /**
     * The compute type. For more information, see Amazon WorkSpaces Bundles.
     */
    ComputeTypeName?: Compute;
  }
  export interface WorkspaceRequest {
    /**
     * The identifier of the AWS Directory Service directory for the WorkSpace. You can use DescribeWorkspaceDirectories to list the available directories.
     */
    DirectoryId: DirectoryId;
    /**
     * The username of the user for the WorkSpace. This username must exist in the AWS Directory Service directory for the WorkSpace.
     */
    UserName: UserName;
    /**
     * The identifier of the bundle for the WorkSpace. You can use DescribeWorkspaceBundles to list the available bundles.
     */
    BundleId: BundleId;
    /**
     * The KMS key used to encrypt data stored on your WorkSpace.
     */
    VolumeEncryptionKey?: VolumeEncryptionKey;
    /**
     * Indicates whether the data stored on the user volume is encrypted.
     */
    UserVolumeEncryptionEnabled?: BooleanObject;
    /**
     * Indicates whether the data stored on the root volume is encrypted.
     */
    RootVolumeEncryptionEnabled?: BooleanObject;
    /**
     * The WorkSpace properties.
     */
    WorkspaceProperties?: WorkspaceProperties;
    /**
     * The tags for the WorkSpace.
     */
    Tags?: TagList;
  }
  export type WorkspaceRequestList = WorkspaceRequest[];
  export type WorkspaceState = "PENDING"|"AVAILABLE"|"IMPAIRED"|"UNHEALTHY"|"REBOOTING"|"STARTING"|"REBUILDING"|"MAINTENANCE"|"TERMINATING"|"TERMINATED"|"SUSPENDED"|"UPDATING"|"STOPPING"|"STOPPED"|"ERROR"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-04-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WorkSpaces client.
   */
  export import Types = WorkSpaces;
}
export = WorkSpaces;
