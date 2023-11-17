import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class CodeStarconnections extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeStarconnections.Types.ClientConfiguration)
  config: Config & CodeStarconnections.Types.ClientConfiguration;
  /**
   * Creates a connection that can then be given to other Amazon Web Services services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
   */
  createConnection(params: CodeStarconnections.Types.CreateConnectionInput, callback?: (err: AWSError, data: CodeStarconnections.Types.CreateConnectionOutput) => void): Request<CodeStarconnections.Types.CreateConnectionOutput, AWSError>;
  /**
   * Creates a connection that can then be given to other Amazon Web Services services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
   */
  createConnection(callback?: (err: AWSError, data: CodeStarconnections.Types.CreateConnectionOutput) => void): Request<CodeStarconnections.Types.CreateConnectionOutput, AWSError>;
  /**
   * Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.  A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console. 
   */
  createHost(params: CodeStarconnections.Types.CreateHostInput, callback?: (err: AWSError, data: CodeStarconnections.Types.CreateHostOutput) => void): Request<CodeStarconnections.Types.CreateHostOutput, AWSError>;
  /**
   * Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.  A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console. 
   */
  createHost(callback?: (err: AWSError, data: CodeStarconnections.Types.CreateHostOutput) => void): Request<CodeStarconnections.Types.CreateHostOutput, AWSError>;
  /**
   * Creates a link to a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
   */
  createRepositoryLink(params: CodeStarconnections.Types.CreateRepositoryLinkInput, callback?: (err: AWSError, data: CodeStarconnections.Types.CreateRepositoryLinkOutput) => void): Request<CodeStarconnections.Types.CreateRepositoryLinkOutput, AWSError>;
  /**
   * Creates a link to a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
   */
  createRepositoryLink(callback?: (err: AWSError, data: CodeStarconnections.Types.CreateRepositoryLinkOutput) => void): Request<CodeStarconnections.Types.CreateRepositoryLinkOutput, AWSError>;
  /**
   * Creates a sync configuration which allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services resource. Parameters for the sync configuration are determined by the sync type.
   */
  createSyncConfiguration(params: CodeStarconnections.Types.CreateSyncConfigurationInput, callback?: (err: AWSError, data: CodeStarconnections.Types.CreateSyncConfigurationOutput) => void): Request<CodeStarconnections.Types.CreateSyncConfigurationOutput, AWSError>;
  /**
   * Creates a sync configuration which allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services resource. Parameters for the sync configuration are determined by the sync type.
   */
  createSyncConfiguration(callback?: (err: AWSError, data: CodeStarconnections.Types.CreateSyncConfigurationOutput) => void): Request<CodeStarconnections.Types.CreateSyncConfigurationOutput, AWSError>;
  /**
   * The connection to be deleted.
   */
  deleteConnection(params: CodeStarconnections.Types.DeleteConnectionInput, callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteConnectionOutput) => void): Request<CodeStarconnections.Types.DeleteConnectionOutput, AWSError>;
  /**
   * The connection to be deleted.
   */
  deleteConnection(callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteConnectionOutput) => void): Request<CodeStarconnections.Types.DeleteConnectionOutput, AWSError>;
  /**
   * The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.  A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state. 
   */
  deleteHost(params: CodeStarconnections.Types.DeleteHostInput, callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteHostOutput) => void): Request<CodeStarconnections.Types.DeleteHostOutput, AWSError>;
  /**
   * The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.  A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state. 
   */
  deleteHost(callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteHostOutput) => void): Request<CodeStarconnections.Types.DeleteHostOutput, AWSError>;
  /**
   * Deletes the association between your connection and a specified external Git repository.
   */
  deleteRepositoryLink(params: CodeStarconnections.Types.DeleteRepositoryLinkInput, callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteRepositoryLinkOutput) => void): Request<CodeStarconnections.Types.DeleteRepositoryLinkOutput, AWSError>;
  /**
   * Deletes the association between your connection and a specified external Git repository.
   */
  deleteRepositoryLink(callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteRepositoryLinkOutput) => void): Request<CodeStarconnections.Types.DeleteRepositoryLinkOutput, AWSError>;
  /**
   * Deletes the sync configuration for a specified repository and connection.
   */
  deleteSyncConfiguration(params: CodeStarconnections.Types.DeleteSyncConfigurationInput, callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteSyncConfigurationOutput) => void): Request<CodeStarconnections.Types.DeleteSyncConfigurationOutput, AWSError>;
  /**
   * Deletes the sync configuration for a specified repository and connection.
   */
  deleteSyncConfiguration(callback?: (err: AWSError, data: CodeStarconnections.Types.DeleteSyncConfigurationOutput) => void): Request<CodeStarconnections.Types.DeleteSyncConfigurationOutput, AWSError>;
  /**
   * Returns the connection ARN and details such as status, owner, and provider type.
   */
  getConnection(params: CodeStarconnections.Types.GetConnectionInput, callback?: (err: AWSError, data: CodeStarconnections.Types.GetConnectionOutput) => void): Request<CodeStarconnections.Types.GetConnectionOutput, AWSError>;
  /**
   * Returns the connection ARN and details such as status, owner, and provider type.
   */
  getConnection(callback?: (err: AWSError, data: CodeStarconnections.Types.GetConnectionOutput) => void): Request<CodeStarconnections.Types.GetConnectionOutput, AWSError>;
  /**
   * Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
   */
  getHost(params: CodeStarconnections.Types.GetHostInput, callback?: (err: AWSError, data: CodeStarconnections.Types.GetHostOutput) => void): Request<CodeStarconnections.Types.GetHostOutput, AWSError>;
  /**
   * Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
   */
  getHost(callback?: (err: AWSError, data: CodeStarconnections.Types.GetHostOutput) => void): Request<CodeStarconnections.Types.GetHostOutput, AWSError>;
  /**
   * Returns details about a repository link. A repository link allows Git sync to monitor and sync changes from files in a specified Git repository.
   */
  getRepositoryLink(params: CodeStarconnections.Types.GetRepositoryLinkInput, callback?: (err: AWSError, data: CodeStarconnections.Types.GetRepositoryLinkOutput) => void): Request<CodeStarconnections.Types.GetRepositoryLinkOutput, AWSError>;
  /**
   * Returns details about a repository link. A repository link allows Git sync to monitor and sync changes from files in a specified Git repository.
   */
  getRepositoryLink(callback?: (err: AWSError, data: CodeStarconnections.Types.GetRepositoryLinkOutput) => void): Request<CodeStarconnections.Types.GetRepositoryLinkOutput, AWSError>;
  /**
   * Returns details about the sync status for a repository. A repository sync uses Git sync to push and pull changes from your remote repository.
   */
  getRepositorySyncStatus(params: CodeStarconnections.Types.GetRepositorySyncStatusInput, callback?: (err: AWSError, data: CodeStarconnections.Types.GetRepositorySyncStatusOutput) => void): Request<CodeStarconnections.Types.GetRepositorySyncStatusOutput, AWSError>;
  /**
   * Returns details about the sync status for a repository. A repository sync uses Git sync to push and pull changes from your remote repository.
   */
  getRepositorySyncStatus(callback?: (err: AWSError, data: CodeStarconnections.Types.GetRepositorySyncStatusOutput) => void): Request<CodeStarconnections.Types.GetRepositorySyncStatusOutput, AWSError>;
  /**
   * Returns the status of the sync with the Git repository for a specific Amazon Web Services resource.
   */
  getResourceSyncStatus(params: CodeStarconnections.Types.GetResourceSyncStatusInput, callback?: (err: AWSError, data: CodeStarconnections.Types.GetResourceSyncStatusOutput) => void): Request<CodeStarconnections.Types.GetResourceSyncStatusOutput, AWSError>;
  /**
   * Returns the status of the sync with the Git repository for a specific Amazon Web Services resource.
   */
  getResourceSyncStatus(callback?: (err: AWSError, data: CodeStarconnections.Types.GetResourceSyncStatusOutput) => void): Request<CodeStarconnections.Types.GetResourceSyncStatusOutput, AWSError>;
  /**
   * Returns a list of the most recent sync blockers.
   */
  getSyncBlockerSummary(params: CodeStarconnections.Types.GetSyncBlockerSummaryInput, callback?: (err: AWSError, data: CodeStarconnections.Types.GetSyncBlockerSummaryOutput) => void): Request<CodeStarconnections.Types.GetSyncBlockerSummaryOutput, AWSError>;
  /**
   * Returns a list of the most recent sync blockers.
   */
  getSyncBlockerSummary(callback?: (err: AWSError, data: CodeStarconnections.Types.GetSyncBlockerSummaryOutput) => void): Request<CodeStarconnections.Types.GetSyncBlockerSummaryOutput, AWSError>;
  /**
   * Returns details about a sync configuration, including the sync type and resource name. A sync configuration allows the configuration to sync (push and pull) changes from the remote repository for a specified branch in a Git repository.
   */
  getSyncConfiguration(params: CodeStarconnections.Types.GetSyncConfigurationInput, callback?: (err: AWSError, data: CodeStarconnections.Types.GetSyncConfigurationOutput) => void): Request<CodeStarconnections.Types.GetSyncConfigurationOutput, AWSError>;
  /**
   * Returns details about a sync configuration, including the sync type and resource name. A sync configuration allows the configuration to sync (push and pull) changes from the remote repository for a specified branch in a Git repository.
   */
  getSyncConfiguration(callback?: (err: AWSError, data: CodeStarconnections.Types.GetSyncConfigurationOutput) => void): Request<CodeStarconnections.Types.GetSyncConfigurationOutput, AWSError>;
  /**
   * Lists the connections associated with your account.
   */
  listConnections(params: CodeStarconnections.Types.ListConnectionsInput, callback?: (err: AWSError, data: CodeStarconnections.Types.ListConnectionsOutput) => void): Request<CodeStarconnections.Types.ListConnectionsOutput, AWSError>;
  /**
   * Lists the connections associated with your account.
   */
  listConnections(callback?: (err: AWSError, data: CodeStarconnections.Types.ListConnectionsOutput) => void): Request<CodeStarconnections.Types.ListConnectionsOutput, AWSError>;
  /**
   * Lists the hosts associated with your account.
   */
  listHosts(params: CodeStarconnections.Types.ListHostsInput, callback?: (err: AWSError, data: CodeStarconnections.Types.ListHostsOutput) => void): Request<CodeStarconnections.Types.ListHostsOutput, AWSError>;
  /**
   * Lists the hosts associated with your account.
   */
  listHosts(callback?: (err: AWSError, data: CodeStarconnections.Types.ListHostsOutput) => void): Request<CodeStarconnections.Types.ListHostsOutput, AWSError>;
  /**
   * Lists the repository links created for connections in your account.
   */
  listRepositoryLinks(params: CodeStarconnections.Types.ListRepositoryLinksInput, callback?: (err: AWSError, data: CodeStarconnections.Types.ListRepositoryLinksOutput) => void): Request<CodeStarconnections.Types.ListRepositoryLinksOutput, AWSError>;
  /**
   * Lists the repository links created for connections in your account.
   */
  listRepositoryLinks(callback?: (err: AWSError, data: CodeStarconnections.Types.ListRepositoryLinksOutput) => void): Request<CodeStarconnections.Types.ListRepositoryLinksOutput, AWSError>;
  /**
   * Lists the repository sync definitions for repository links in your account.
   */
  listRepositorySyncDefinitions(params: CodeStarconnections.Types.ListRepositorySyncDefinitionsInput, callback?: (err: AWSError, data: CodeStarconnections.Types.ListRepositorySyncDefinitionsOutput) => void): Request<CodeStarconnections.Types.ListRepositorySyncDefinitionsOutput, AWSError>;
  /**
   * Lists the repository sync definitions for repository links in your account.
   */
  listRepositorySyncDefinitions(callback?: (err: AWSError, data: CodeStarconnections.Types.ListRepositorySyncDefinitionsOutput) => void): Request<CodeStarconnections.Types.ListRepositorySyncDefinitionsOutput, AWSError>;
  /**
   * Returns a list of sync configurations for a specified repository.
   */
  listSyncConfigurations(params: CodeStarconnections.Types.ListSyncConfigurationsInput, callback?: (err: AWSError, data: CodeStarconnections.Types.ListSyncConfigurationsOutput) => void): Request<CodeStarconnections.Types.ListSyncConfigurationsOutput, AWSError>;
  /**
   * Returns a list of sync configurations for a specified repository.
   */
  listSyncConfigurations(callback?: (err: AWSError, data: CodeStarconnections.Types.ListSyncConfigurationsOutput) => void): Request<CodeStarconnections.Types.ListSyncConfigurationsOutput, AWSError>;
  /**
   * Gets the set of key-value pairs (metadata) that are used to manage the resource.
   */
  listTagsForResource(params: CodeStarconnections.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: CodeStarconnections.Types.ListTagsForResourceOutput) => void): Request<CodeStarconnections.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Gets the set of key-value pairs (metadata) that are used to manage the resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: CodeStarconnections.Types.ListTagsForResourceOutput) => void): Request<CodeStarconnections.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
   */
  tagResource(params: CodeStarconnections.Types.TagResourceInput, callback?: (err: AWSError, data: CodeStarconnections.Types.TagResourceOutput) => void): Request<CodeStarconnections.Types.TagResourceOutput, AWSError>;
  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
   */
  tagResource(callback?: (err: AWSError, data: CodeStarconnections.Types.TagResourceOutput) => void): Request<CodeStarconnections.Types.TagResourceOutput, AWSError>;
  /**
   * Removes tags from an Amazon Web Services resource.
   */
  untagResource(params: CodeStarconnections.Types.UntagResourceInput, callback?: (err: AWSError, data: CodeStarconnections.Types.UntagResourceOutput) => void): Request<CodeStarconnections.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes tags from an Amazon Web Services resource.
   */
  untagResource(callback?: (err: AWSError, data: CodeStarconnections.Types.UntagResourceOutput) => void): Request<CodeStarconnections.Types.UntagResourceOutput, AWSError>;
  /**
   * Updates a specified host with the provided configurations.
   */
  updateHost(params: CodeStarconnections.Types.UpdateHostInput, callback?: (err: AWSError, data: CodeStarconnections.Types.UpdateHostOutput) => void): Request<CodeStarconnections.Types.UpdateHostOutput, AWSError>;
  /**
   * Updates a specified host with the provided configurations.
   */
  updateHost(callback?: (err: AWSError, data: CodeStarconnections.Types.UpdateHostOutput) => void): Request<CodeStarconnections.Types.UpdateHostOutput, AWSError>;
  /**
   * Updates the association between your connection and a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
   */
  updateRepositoryLink(params: CodeStarconnections.Types.UpdateRepositoryLinkInput, callback?: (err: AWSError, data: CodeStarconnections.Types.UpdateRepositoryLinkOutput) => void): Request<CodeStarconnections.Types.UpdateRepositoryLinkOutput, AWSError>;
  /**
   * Updates the association between your connection and a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
   */
  updateRepositoryLink(callback?: (err: AWSError, data: CodeStarconnections.Types.UpdateRepositoryLinkOutput) => void): Request<CodeStarconnections.Types.UpdateRepositoryLinkOutput, AWSError>;
  /**
   * Allows you to update the status of a sync blocker, resolving the blocker and allowing syncing to continue.
   */
  updateSyncBlocker(params: CodeStarconnections.Types.UpdateSyncBlockerInput, callback?: (err: AWSError, data: CodeStarconnections.Types.UpdateSyncBlockerOutput) => void): Request<CodeStarconnections.Types.UpdateSyncBlockerOutput, AWSError>;
  /**
   * Allows you to update the status of a sync blocker, resolving the blocker and allowing syncing to continue.
   */
  updateSyncBlocker(callback?: (err: AWSError, data: CodeStarconnections.Types.UpdateSyncBlockerOutput) => void): Request<CodeStarconnections.Types.UpdateSyncBlockerOutput, AWSError>;
  /**
   * Updates the sync configuration for your connection and a specified external Git repository.
   */
  updateSyncConfiguration(params: CodeStarconnections.Types.UpdateSyncConfigurationInput, callback?: (err: AWSError, data: CodeStarconnections.Types.UpdateSyncConfigurationOutput) => void): Request<CodeStarconnections.Types.UpdateSyncConfigurationOutput, AWSError>;
  /**
   * Updates the sync configuration for your connection and a specified external Git repository.
   */
  updateSyncConfiguration(callback?: (err: AWSError, data: CodeStarconnections.Types.UpdateSyncConfigurationOutput) => void): Request<CodeStarconnections.Types.UpdateSyncConfigurationOutput, AWSError>;
}
declare namespace CodeStarconnections {
  export type AccountId = string;
  export type AmazonResourceName = string;
  export type BlockerStatus = "ACTIVE"|"RESOLVED"|string;
  export type BlockerType = "AUTOMATED"|string;
  export type BranchName = string;
  export interface Connection {
    /**
     * The name of the connection. Connection names must be unique in an Amazon Web Services account.
     */
    ConnectionName?: ConnectionName;
    /**
     * The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between Amazon Web Services.  The ARN is never reused if the connection is deleted. 
     */
    ConnectionArn?: ConnectionArn;
    /**
     * The name of the external provider where your third-party code repository is configured.
     */
    ProviderType?: ProviderType;
    /**
     * The identifier of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.
     */
    OwnerAccountId?: AccountId;
    /**
     * The current status of the connection. 
     */
    ConnectionStatus?: ConnectionStatus;
    /**
     * The Amazon Resource Name (ARN) of the host associated with the connection.
     */
    HostArn?: HostArn;
  }
  export type ConnectionArn = string;
  export type ConnectionList = Connection[];
  export type ConnectionName = string;
  export type ConnectionStatus = "PENDING"|"AVAILABLE"|"ERROR"|string;
  export interface CreateConnectionInput {
    /**
     * The name of the external provider where your third-party code repository is configured.
     */
    ProviderType?: ProviderType;
    /**
     * The name of the connection to be created.
     */
    ConnectionName: ConnectionName;
    /**
     * The key-value pair to use when tagging the resource.
     */
    Tags?: TagList;
    /**
     * The Amazon Resource Name (ARN) of the host associated with the connection to be created.
     */
    HostArn?: HostArn;
  }
  export interface CreateConnectionOutput {
    /**
     * The Amazon Resource Name (ARN) of the connection to be created. The ARN is used as the connection reference when the connection is shared between Amazon Web Services services.  The ARN is never reused if the connection is deleted. 
     */
    ConnectionArn: ConnectionArn;
    /**
     * Specifies the tags applied to the resource.
     */
    Tags?: TagList;
  }
  export interface CreateHostInput {
    /**
     * The name of the host to be created.
     */
    Name: HostName;
    /**
     * The name of the installed provider to be associated with your connection. The host resource represents the infrastructure where your provider type is installed. The valid provider type is GitHub Enterprise Server.
     */
    ProviderType: ProviderType;
    /**
     * The endpoint of the infrastructure to be represented by the host after it is created.
     */
    ProviderEndpoint: Url;
    /**
     * The VPC configuration to be provisioned for the host. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.
     */
    VpcConfiguration?: VpcConfiguration;
    /**
     * Tags for the host to be created.
     */
    Tags?: TagList;
  }
  export interface CreateHostOutput {
    /**
     * The Amazon Resource Name (ARN) of the host to be created.
     */
    HostArn?: HostArn;
    /**
     * Tags for the created host.
     */
    Tags?: TagList;
  }
  export interface CreateRepositoryLinkInput {
    /**
     * The Amazon Resource Name (ARN) of the connection to be associated with the repository link.
     */
    ConnectionArn: ConnectionArn;
    /**
     * The owner ID for the repository associated with a specific sync configuration, such as the owner ID in GitHub.
     */
    OwnerId: OwnerId;
    /**
     * The name of the repository to be associated with the repository link.
     */
    RepositoryName: RepositoryName;
    /**
     * The Amazon Resource Name (ARN) encryption key for the repository to be associated with the repository link.
     */
    EncryptionKeyArn?: KmsKeyArn;
    /**
     * The tags for the repository to be associated with the repository link.
     */
    Tags?: TagList;
  }
  export interface CreateRepositoryLinkOutput {
    /**
     * The returned information about the created repository link.
     */
    RepositoryLinkInfo: RepositoryLinkInfo;
  }
  export interface CreateSyncConfigurationInput {
    /**
     * The branch in the repository from which changes will be synced.
     */
    Branch: BranchName;
    /**
     * The file name of the configuration file that manages syncing between the connection and the repository. This configuration file is stored in the repository.
     */
    ConfigFile: DeploymentFilePath;
    /**
     * The ID of the repository link created for the connection. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
     */
    RepositoryLinkId: RepositoryLinkId;
    /**
     * The name of the Amazon Web Services resource (for example, a CloudFormation stack in the case of CFN_STACK_SYNC) that will be synchronized from the linked repository.
     */
    ResourceName: ResourceName;
    /**
     * The ARN of the IAM role that grants permission for Amazon Web Services to use Git sync to update a given Amazon Web Services resource on your behalf.
     */
    RoleArn: IamRoleArn;
    /**
     * The type of sync configuration.
     */
    SyncType: SyncConfigurationType;
  }
  export interface CreateSyncConfigurationOutput {
    /**
     * The created sync configuration for the connection. A sync configuration allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services resource. 
     */
    SyncConfiguration: SyncConfiguration;
  }
  export type CreatedReason = string;
  export interface DeleteConnectionInput {
    /**
     * The Amazon Resource Name (ARN) of the connection to be deleted.  The ARN is never reused if the connection is deleted. 
     */
    ConnectionArn: ConnectionArn;
  }
  export interface DeleteConnectionOutput {
  }
  export interface DeleteHostInput {
    /**
     * The Amazon Resource Name (ARN) of the host to be deleted.
     */
    HostArn: HostArn;
  }
  export interface DeleteHostOutput {
  }
  export interface DeleteRepositoryLinkInput {
    /**
     * The ID of the repository link to be deleted.
     */
    RepositoryLinkId: RepositoryLinkId;
  }
  export interface DeleteRepositoryLinkOutput {
  }
  export interface DeleteSyncConfigurationInput {
    /**
     * The type of sync configuration to be deleted.
     */
    SyncType: SyncConfigurationType;
    /**
     * The name of the Amazon Web Services resource associated with the sync configuration to be deleted.
     */
    ResourceName: ResourceName;
  }
  export interface DeleteSyncConfigurationOutput {
  }
  export type DeploymentFilePath = string;
  export type Directory = string;
  export type Event = string;
  export type ExternalId = string;
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
  export interface GetHostInput {
    /**
     * The Amazon Resource Name (ARN) of the requested host.
     */
    HostArn: HostArn;
  }
  export interface GetHostOutput {
    /**
     * The name of the requested host.
     */
    Name?: HostName;
    /**
     * The status of the requested host.
     */
    Status?: HostStatus;
    /**
     * The provider type of the requested host, such as GitHub Enterprise Server.
     */
    ProviderType?: ProviderType;
    /**
     * The endpoint of the infrastructure represented by the requested host.
     */
    ProviderEndpoint?: Url;
    /**
     * The VPC configuration of the requested host.
     */
    VpcConfiguration?: VpcConfiguration;
  }
  export interface GetRepositoryLinkInput {
    /**
     * The ID of the repository link to get.
     */
    RepositoryLinkId: RepositoryLinkId;
  }
  export interface GetRepositoryLinkOutput {
    /**
     * The information returned for a specified repository link.
     */
    RepositoryLinkInfo: RepositoryLinkInfo;
  }
  export interface GetRepositorySyncStatusInput {
    /**
     * The branch of the repository link for the requested repository sync status.
     */
    Branch: BranchName;
    /**
     * The repository link ID for the requested repository sync status.
     */
    RepositoryLinkId: RepositoryLinkId;
    /**
     * The sync type of the requested sync status.
     */
    SyncType: SyncConfigurationType;
  }
  export interface GetRepositorySyncStatusOutput {
    /**
     * The status of the latest sync returned for a specified repository and branch.
     */
    LatestSync: RepositorySyncAttempt;
  }
  export interface GetResourceSyncStatusInput {
    /**
     * The name of the Amazon Web Services resource for the sync status with the Git repository.
     */
    ResourceName: ResourceName;
    /**
     * The sync type for the sync status with the Git repository.
     */
    SyncType: SyncConfigurationType;
  }
  export interface GetResourceSyncStatusOutput {
    /**
     * The desired state of the Amazon Web Services resource for the sync status with the Git repository.
     */
    DesiredState?: Revision;
    /**
     * The latest successful sync for the sync status with the Git repository.
     */
    LatestSuccessfulSync?: ResourceSyncAttempt;
    /**
     * The latest sync for the sync status with the Git repository, whether successful or not.
     */
    LatestSync: ResourceSyncAttempt;
  }
  export interface GetSyncBlockerSummaryInput {
    /**
     * The sync type for the sync blocker summary.
     */
    SyncType: SyncConfigurationType;
    /**
     * The name of the Amazon Web Services resource currently blocked from automatically being synced from a Git repository.
     */
    ResourceName: ResourceName;
  }
  export interface GetSyncBlockerSummaryOutput {
    /**
     * The list of sync blockers for a specified resource.
     */
    SyncBlockerSummary: SyncBlockerSummary;
  }
  export interface GetSyncConfigurationInput {
    /**
     * The sync type for the sync configuration for which you want to retrieve information.
     */
    SyncType: SyncConfigurationType;
    /**
     * The name of the Amazon Web Services resource for the sync configuration for which you want to retrieve information.
     */
    ResourceName: ResourceName;
  }
  export interface GetSyncConfigurationOutput {
    /**
     * The details about the sync configuration for which you want to retrieve information.
     */
    SyncConfiguration: SyncConfiguration;
  }
  export interface Host {
    /**
     * The name of the host.
     */
    Name?: HostName;
    /**
     * The Amazon Resource Name (ARN) of the host.
     */
    HostArn?: HostArn;
    /**
     * The name of the installed provider to be associated with your connection. The host resource represents the infrastructure where your provider type is installed. The valid provider type is GitHub Enterprise Server.
     */
    ProviderType?: ProviderType;
    /**
     * The endpoint of the infrastructure where your provider type is installed.
     */
    ProviderEndpoint?: Url;
    /**
     * The VPC configuration provisioned for the host.
     */
    VpcConfiguration?: VpcConfiguration;
    /**
     * The status of the host, such as PENDING, AVAILABLE, VPC_CONFIG_DELETING, VPC_CONFIG_INITIALIZING, and VPC_CONFIG_FAILED_INITIALIZATION.
     */
    Status?: HostStatus;
    /**
     * The status description for the host.
     */
    StatusMessage?: HostStatusMessage;
  }
  export type HostArn = string;
  export type HostList = Host[];
  export type HostName = string;
  export type HostStatus = string;
  export type HostStatusMessage = string;
  export type IamRoleArn = string;
  export type Id = string;
  export type KmsKeyArn = string;
  export type LatestSyncBlockerList = SyncBlocker[];
  export interface ListConnectionsInput {
    /**
     * Filters the list of connections to those associated with a specified provider, such as Bitbucket.
     */
    ProviderTypeFilter?: ProviderType;
    /**
     * Filters the list of connections to those associated with a specified host.
     */
    HostArnFilter?: HostArn;
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
  export interface ListHostsInput {
    /**
     * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value.
     */
    MaxResults?: MaxResults;
    /**
     * The token that was returned from the previous ListHosts call, which can be used to return the next set of hosts in the list.
     */
    NextToken?: NextToken;
  }
  export interface ListHostsOutput {
    /**
     * A list of hosts and the details for each host, such as status, endpoint, and provider type.
     */
    Hosts?: HostList;
    /**
     * A token that can be used in the next ListHosts call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned.
     */
    NextToken?: NextToken;
  }
  export interface ListRepositoryLinksInput {
    /**
     *  A non-zero, non-negative integer used to limit the number of returned results.
     */
    MaxResults?: MaxResults;
    /**
     *  An enumeration token that, when provided in a request, returns the next batch of the results.
     */
    NextToken?: SharpNextToken;
  }
  export interface ListRepositoryLinksOutput {
    /**
     * Lists the repository links called by the list repository links operation.
     */
    RepositoryLinks: RepositoryLinkList;
    /**
     * An enumeration token that allows the operation to batch the results of the operation. 
     */
    NextToken?: SharpNextToken;
  }
  export interface ListRepositorySyncDefinitionsInput {
    /**
     * The ID of the repository link for the sync definition for which you want to retrieve information.
     */
    RepositoryLinkId: RepositoryLinkId;
    /**
     * The sync type of the repository link for the the sync definition for which you want to retrieve information.
     */
    SyncType: SyncConfigurationType;
  }
  export interface ListRepositorySyncDefinitionsOutput {
    /**
     * The list of repository sync definitions returned by the request. A RepositorySyncDefinition is a mapping from a repository branch to all the Amazon Web Services resources that are being synced from that branch.
     */
    RepositorySyncDefinitions: RepositorySyncDefinitionList;
    /**
     * An enumeration token that, when provided in a request, returns the next batch of the results.
     */
    NextToken?: SharpNextToken;
  }
  export interface ListSyncConfigurationsInput {
    /**
     * A non-zero, non-negative integer used to limit the number of returned results.
     */
    MaxResults?: MaxResults;
    /**
     * An enumeration token that allows the operation to batch the results of the operation.
     */
    NextToken?: SharpNextToken;
    /**
     * The ID of the repository link for the requested list of sync configurations.
     */
    RepositoryLinkId: RepositoryLinkId;
    /**
     * The sync type for the requested list of sync configurations.
     */
    SyncType: SyncConfigurationType;
  }
  export interface ListSyncConfigurationsOutput {
    /**
     * The list of repository sync definitions returned by the request.
     */
    SyncConfigurations: SyncConfigurationList;
    /**
     * An enumeration token that allows the operation to batch the next results of the operation.
     */
    NextToken?: SharpNextToken;
  }
  export interface ListTagsForResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.
     */
    ResourceArn: AmazonResourceName;
  }
  export interface ListTagsForResourceOutput {
    /**
     * A list of tag key and value pairs associated with the specified resource.
     */
    Tags?: TagList;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type OwnerId = string;
  export type Parent = string;
  export type ProviderType = "Bitbucket"|"GitHub"|"GitHubEnterpriseServer"|"GitLab"|string;
  export type RepositoryLinkArn = string;
  export type RepositoryLinkId = string;
  export interface RepositoryLinkInfo {
    /**
     * The Amazon Resource Name (ARN) of the connection associated with the repository link.
     */
    ConnectionArn: ConnectionArn;
    /**
     * The Amazon Resource Name (ARN) of the encryption key for the repository associated with the repository link.
     */
    EncryptionKeyArn?: KmsKeyArn;
    /**
     * The owner ID for the repository associated with the repository link, such as the owner ID in GitHub.
     */
    OwnerId: OwnerId;
    /**
     * The provider type for the connection, such as GitHub, associated with the repository link.
     */
    ProviderType: ProviderType;
    /**
     * The Amazon Resource Name (ARN) of the repository link.
     */
    RepositoryLinkArn: RepositoryLinkArn;
    /**
     * The ID of the repository link.
     */
    RepositoryLinkId: RepositoryLinkId;
    /**
     * The name of the repository associated with the repository link.
     */
    RepositoryName: RepositoryName;
  }
  export type RepositoryLinkList = RepositoryLinkInfo[];
  export type RepositoryName = string;
  export interface RepositorySyncAttempt {
    /**
     * The start time of a specific sync attempt.
     */
    StartedAt: Timestamp;
    /**
     * The status of a specific sync attempt. The following are valid statuses:   INITIATED - A repository sync attempt has been created and will begin soon.   IN_PROGRESS - A repository sync attempt has started and work is being done to reconcile the branch.   SUCCEEDED - The repository sync attempt has completed successfully.   FAILED - The repository sync attempt has failed.   QUEUED - The repository sync attempt didn't execute and was queued.  
     */
    Status: RepositorySyncStatus;
    /**
     * The events associated with a specific sync attempt.
     */
    Events: RepositorySyncEventList;
  }
  export interface RepositorySyncDefinition {
    /**
     * The branch specified for a repository sync definition.
     */
    Branch: BranchName;
    /**
     * The configuration file for a repository sync definition. This value comes from creating or updating the config-file field of a sync-configuration.
     */
    Directory: Directory;
    /**
     * The parent resource specified for a repository sync definition.
     */
    Parent: Parent;
    /**
     * The target resource specified for a repository sync definition. In some cases, such as CFN_STACK_SYNC, the parent and target resource are the same.
     */
    Target: Target;
  }
  export type RepositorySyncDefinitionList = RepositorySyncDefinition[];
  export interface RepositorySyncEvent {
    /**
     * A description of a repository sync event.
     */
    Event: Event;
    /**
     * The ID for a repository sync event.
     */
    ExternalId?: ExternalId;
    /**
     * The time that a repository sync event occurred.
     */
    Time: Timestamp;
    /**
     * The event type for a repository sync event.
     */
    Type: Type;
  }
  export type RepositorySyncEventList = RepositorySyncEvent[];
  export type RepositorySyncStatus = "FAILED"|"INITIATED"|"IN_PROGRESS"|"SUCCEEDED"|"QUEUED"|string;
  export type ResolvedReason = string;
  export type ResourceName = string;
  export interface ResourceSyncAttempt {
    /**
     * The events related to a resource sync attempt.
     */
    Events: ResourceSyncEventList;
    /**
     * The current state of the resource as defined in the resource's config-file in the linked repository.
     */
    InitialRevision: Revision;
    /**
     * The start time for a resource sync attempt.
     */
    StartedAt: Timestamp;
    /**
     * The status for a resource sync attempt. The follow are valid statuses:   SYNC-INITIATED - A resource sync attempt has been created and will begin soon.   SYNCING - Syncing has started and work is being done to reconcile state.   SYNCED - Syncing has completed successfully.   SYNC_FAILED - A resource sync attempt has failed.  
     */
    Status: ResourceSyncStatus;
    /**
     * The desired state of the resource as defined in the resource's config-file in the linked repository. Git sync attempts to update the resource to this state.
     */
    TargetRevision: Revision;
    /**
     * The name of the Amazon Web Services resource that is attempted to be synchronized.
     */
    Target: Target;
  }
  export interface ResourceSyncEvent {
    /**
     * The event for a resource sync event.
     */
    Event: Event;
    /**
     * The ID for a resource sync event.
     */
    ExternalId?: ExternalId;
    /**
     * The time that a resource sync event occurred.
     */
    Time: Timestamp;
    /**
     * The type of resource sync event.
     */
    Type: Type;
  }
  export type ResourceSyncEventList = ResourceSyncEvent[];
  export type ResourceSyncStatus = "FAILED"|"INITIATED"|"IN_PROGRESS"|"SUCCEEDED"|string;
  export interface Revision {
    /**
     * The branch name for a specific revision.
     */
    Branch: BranchName;
    /**
     * The directory, if any, for a specific revision.
     */
    Directory: Directory;
    /**
     * The owner ID for a specific revision, such as the GitHub owner ID for a GitHub repository.
     */
    OwnerId: OwnerId;
    /**
     * The repository name for a specific revision.
     */
    RepositoryName: RepositoryName;
    /**
     * The provider type for a revision, such as GitHub.
     */
    ProviderType: ProviderType;
    /**
     * The SHA, such as the commit ID, for a specific revision.
     */
    Sha: SHA;
  }
  export type SHA = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type SharpNextToken = string;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface SyncBlocker {
    /**
     * The ID for a specific sync blocker.
     */
    Id: Id;
    /**
     * The sync blocker type.
     */
    Type: BlockerType;
    /**
     * The status for a specific sync blocker.
     */
    Status: BlockerStatus;
    /**
     * The provided reason for a specific sync blocker.
     */
    CreatedReason: CreatedReason;
    /**
     * The creation time for a specific sync blocker.
     */
    CreatedAt: Timestamp;
    /**
     * The contexts for a specific sync blocker.
     */
    Contexts?: SyncBlockerContextList;
    /**
     * The resolved reason for a specific sync blocker.
     */
    ResolvedReason?: ResolvedReason;
    /**
     * The time that a specific sync blocker was resolved.
     */
    ResolvedAt?: Timestamp;
  }
  export interface SyncBlockerContext {
    /**
     * The key provided for a context key-value pair for a specific sync blocker.
     */
    Key: SyncBlockerContextKey;
    /**
     * The value provided for a context key-value pair for a specific sync blocker.
     */
    Value: SyncBlockerContextValue;
  }
  export type SyncBlockerContextKey = string;
  export type SyncBlockerContextList = SyncBlockerContext[];
  export type SyncBlockerContextValue = string;
  export interface SyncBlockerSummary {
    /**
     * The resource name for sync blocker summary.
     */
    ResourceName: ResourceName;
    /**
     * The parent resource name for a sync blocker summary.
     */
    ParentResourceName?: ResourceName;
    /**
     * The latest events for a sync blocker summary.
     */
    LatestBlockers?: LatestSyncBlockerList;
  }
  export interface SyncConfiguration {
    /**
     * The branch associated with a specific sync configuration.
     */
    Branch: BranchName;
    /**
     * The file path to the configuration file associated with a specific sync configuration. The path should point to an actual file in the sync configurations linked repository.
     */
    ConfigFile?: DeploymentFilePath;
    /**
     * The owner ID for the repository associated with a specific sync configuration, such as the owner ID in GitHub.
     */
    OwnerId: OwnerId;
    /**
     * The connection provider type associated with a specific sync configuration, such as GitHub.
     */
    ProviderType: ProviderType;
    /**
     * The ID of the repository link associated with a specific sync configuration.
     */
    RepositoryLinkId: RepositoryLinkId;
    /**
     * The name of the repository associated with a specific sync configuration.
     */
    RepositoryName: RepositoryName;
    /**
     * The name of the connection resource associated with a specific sync configuration.
     */
    ResourceName: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with a specific sync configuration.
     */
    RoleArn: IamRoleArn;
    /**
     * The type of sync for a specific sync configuration.
     */
    SyncType: SyncConfigurationType;
  }
  export type SyncConfigurationList = SyncConfiguration[];
  export type SyncConfigurationType = "CFN_STACK_SYNC"|string;
  export interface Tag {
    /**
     * The tag's key.
     */
    Key: TagKey;
    /**
     * The tag's value.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.
     */
    ResourceArn: AmazonResourceName;
    /**
     * The tags you want to modify or add to the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type Target = string;
  export type Timestamp = Date;
  export type TlsCertificate = string;
  export type Type = string;
  export interface UntagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource to remove tags from.
     */
    ResourceArn: AmazonResourceName;
    /**
     * The list of keys for the tags to be removed from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateHostInput {
    /**
     * The Amazon Resource Name (ARN) of the host to be updated.
     */
    HostArn: HostArn;
    /**
     * The URL or endpoint of the host to be updated.
     */
    ProviderEndpoint?: Url;
    /**
     * The VPC configuration of the host to be updated. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.
     */
    VpcConfiguration?: VpcConfiguration;
  }
  export interface UpdateHostOutput {
  }
  export interface UpdateRepositoryLinkInput {
    /**
     * The Amazon Resource Name (ARN) of the connection for the repository link to be updated. The updated connection ARN must have the same providerType (such as GitHub) as the original connection ARN for the repo link.
     */
    ConnectionArn?: ConnectionArn;
    /**
     * The Amazon Resource Name (ARN) of the encryption key for the repository link to be updated.
     */
    EncryptionKeyArn?: KmsKeyArn;
    /**
     * The ID of the repository link to be updated.
     */
    RepositoryLinkId: RepositoryLinkId;
  }
  export interface UpdateRepositoryLinkOutput {
    /**
     * Information about the repository link to be updated.
     */
    RepositoryLinkInfo: RepositoryLinkInfo;
  }
  export interface UpdateSyncBlockerInput {
    /**
     * The ID of the sync blocker to be updated.
     */
    Id: Id;
    /**
     * The sync type of the sync blocker to be updated.
     */
    SyncType: SyncConfigurationType;
    /**
     * The name of the resource for the sync blocker to be updated.
     */
    ResourceName: ResourceName;
    /**
     * The reason for resolving the sync blocker.
     */
    ResolvedReason: ResolvedReason;
  }
  export interface UpdateSyncBlockerOutput {
    /**
     * The resource name for the sync blocker.
     */
    ResourceName: ResourceName;
    /**
     * The parent resource name for the sync blocker.
     */
    ParentResourceName?: ResourceName;
    /**
     * Information about the sync blocker to be updated.
     */
    SyncBlocker: SyncBlocker;
  }
  export interface UpdateSyncConfigurationInput {
    /**
     * The branch for the sync configuration to be updated.
     */
    Branch?: BranchName;
    /**
     * The configuration file for the sync configuration to be updated.
     */
    ConfigFile?: DeploymentFilePath;
    /**
     * The ID of the repository link for the sync configuration to be updated.
     */
    RepositoryLinkId?: RepositoryLinkId;
    /**
     * The name of the Amazon Web Services resource for the sync configuration to be updated.
     */
    ResourceName: ResourceName;
    /**
     * The ARN of the IAM role for the sync configuration to be updated.
     */
    RoleArn?: IamRoleArn;
    /**
     * The sync type for the sync configuration to be updated.
     */
    SyncType: SyncConfigurationType;
  }
  export interface UpdateSyncConfigurationOutput {
    /**
     * The information returned for the sync configuration to be updated.
     */
    SyncConfiguration: SyncConfiguration;
  }
  export type Url = string;
  export interface VpcConfiguration {
    /**
     * The ID of the Amazon VPC connected to the infrastructure where your provider type is installed.
     */
    VpcId: VpcId;
    /**
     * The ID of the subnet or subnets associated with the Amazon VPC connected to the infrastructure where your provider type is installed.
     */
    SubnetIds: SubnetIds;
    /**
     * The ID of the security group or security groups associated with the Amazon VPC connected to the infrastructure where your provider type is installed.
     */
    SecurityGroupIds: SecurityGroupIds;
    /**
     * The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.
     */
    TlsCertificate?: TlsCertificate;
  }
  export type VpcId = string;
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
