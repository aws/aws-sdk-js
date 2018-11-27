import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SMS.Types.ClientConfiguration)
  config: Config & SMS.Types.ClientConfiguration;
  /**
   * Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
   */
  createApp(params: SMS.Types.CreateAppRequest, callback?: (err: AWSError, data: SMS.Types.CreateAppResponse) => void): Request<SMS.Types.CreateAppResponse, AWSError>;
  /**
   * Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
   */
  createApp(callback?: (err: AWSError, data: SMS.Types.CreateAppResponse) => void): Request<SMS.Types.CreateAppResponse, AWSError>;
  /**
   * Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
   */
  createReplicationJob(params: SMS.Types.CreateReplicationJobRequest, callback?: (err: AWSError, data: SMS.Types.CreateReplicationJobResponse) => void): Request<SMS.Types.CreateReplicationJobResponse, AWSError>;
  /**
   * Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
   */
  createReplicationJob(callback?: (err: AWSError, data: SMS.Types.CreateReplicationJobResponse) => void): Request<SMS.Types.CreateReplicationJobResponse, AWSError>;
  /**
   * Deletes an existing application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
   */
  deleteApp(params: SMS.Types.DeleteAppRequest, callback?: (err: AWSError, data: SMS.Types.DeleteAppResponse) => void): Request<SMS.Types.DeleteAppResponse, AWSError>;
  /**
   * Deletes an existing application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
   */
  deleteApp(callback?: (err: AWSError, data: SMS.Types.DeleteAppResponse) => void): Request<SMS.Types.DeleteAppResponse, AWSError>;
  /**
   * Deletes existing launch configuration for an application.
   */
  deleteAppLaunchConfiguration(params: SMS.Types.DeleteAppLaunchConfigurationRequest, callback?: (err: AWSError, data: SMS.Types.DeleteAppLaunchConfigurationResponse) => void): Request<SMS.Types.DeleteAppLaunchConfigurationResponse, AWSError>;
  /**
   * Deletes existing launch configuration for an application.
   */
  deleteAppLaunchConfiguration(callback?: (err: AWSError, data: SMS.Types.DeleteAppLaunchConfigurationResponse) => void): Request<SMS.Types.DeleteAppLaunchConfigurationResponse, AWSError>;
  /**
   * Deletes existing replication configuration for an application.
   */
  deleteAppReplicationConfiguration(params: SMS.Types.DeleteAppReplicationConfigurationRequest, callback?: (err: AWSError, data: SMS.Types.DeleteAppReplicationConfigurationResponse) => void): Request<SMS.Types.DeleteAppReplicationConfigurationResponse, AWSError>;
  /**
   * Deletes existing replication configuration for an application.
   */
  deleteAppReplicationConfiguration(callback?: (err: AWSError, data: SMS.Types.DeleteAppReplicationConfigurationResponse) => void): Request<SMS.Types.DeleteAppReplicationConfigurationResponse, AWSError>;
  /**
   * Deletes the specified replication job. After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.
   */
  deleteReplicationJob(params: SMS.Types.DeleteReplicationJobRequest, callback?: (err: AWSError, data: SMS.Types.DeleteReplicationJobResponse) => void): Request<SMS.Types.DeleteReplicationJobResponse, AWSError>;
  /**
   * Deletes the specified replication job. After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.
   */
  deleteReplicationJob(callback?: (err: AWSError, data: SMS.Types.DeleteReplicationJobResponse) => void): Request<SMS.Types.DeleteReplicationJobResponse, AWSError>;
  /**
   * Deletes all servers from your server catalog.
   */
  deleteServerCatalog(params: SMS.Types.DeleteServerCatalogRequest, callback?: (err: AWSError, data: SMS.Types.DeleteServerCatalogResponse) => void): Request<SMS.Types.DeleteServerCatalogResponse, AWSError>;
  /**
   * Deletes all servers from your server catalog.
   */
  deleteServerCatalog(callback?: (err: AWSError, data: SMS.Types.DeleteServerCatalogResponse) => void): Request<SMS.Types.DeleteServerCatalogResponse, AWSError>;
  /**
   * Disassociates the specified connector from AWS SMS. After you disassociate a connector, it is no longer available to support replication jobs.
   */
  disassociateConnector(params: SMS.Types.DisassociateConnectorRequest, callback?: (err: AWSError, data: SMS.Types.DisassociateConnectorResponse) => void): Request<SMS.Types.DisassociateConnectorResponse, AWSError>;
  /**
   * Disassociates the specified connector from AWS SMS. After you disassociate a connector, it is no longer available to support replication jobs.
   */
  disassociateConnector(callback?: (err: AWSError, data: SMS.Types.DisassociateConnectorResponse) => void): Request<SMS.Types.DisassociateConnectorResponse, AWSError>;
  /**
   * Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
   */
  generateChangeSet(params: SMS.Types.GenerateChangeSetRequest, callback?: (err: AWSError, data: SMS.Types.GenerateChangeSetResponse) => void): Request<SMS.Types.GenerateChangeSetResponse, AWSError>;
  /**
   * Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
   */
  generateChangeSet(callback?: (err: AWSError, data: SMS.Types.GenerateChangeSetResponse) => void): Request<SMS.Types.GenerateChangeSetResponse, AWSError>;
  /**
   * Generates an Amazon CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
   */
  generateTemplate(params: SMS.Types.GenerateTemplateRequest, callback?: (err: AWSError, data: SMS.Types.GenerateTemplateResponse) => void): Request<SMS.Types.GenerateTemplateResponse, AWSError>;
  /**
   * Generates an Amazon CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
   */
  generateTemplate(callback?: (err: AWSError, data: SMS.Types.GenerateTemplateResponse) => void): Request<SMS.Types.GenerateTemplateResponse, AWSError>;
  /**
   * Retrieve information about an application.
   */
  getApp(params: SMS.Types.GetAppRequest, callback?: (err: AWSError, data: SMS.Types.GetAppResponse) => void): Request<SMS.Types.GetAppResponse, AWSError>;
  /**
   * Retrieve information about an application.
   */
  getApp(callback?: (err: AWSError, data: SMS.Types.GetAppResponse) => void): Request<SMS.Types.GetAppResponse, AWSError>;
  /**
   * Retrieves the application launch configuration associated with an application.
   */
  getAppLaunchConfiguration(params: SMS.Types.GetAppLaunchConfigurationRequest, callback?: (err: AWSError, data: SMS.Types.GetAppLaunchConfigurationResponse) => void): Request<SMS.Types.GetAppLaunchConfigurationResponse, AWSError>;
  /**
   * Retrieves the application launch configuration associated with an application.
   */
  getAppLaunchConfiguration(callback?: (err: AWSError, data: SMS.Types.GetAppLaunchConfigurationResponse) => void): Request<SMS.Types.GetAppLaunchConfigurationResponse, AWSError>;
  /**
   * Retrieves an application replication configuration associatd with an application.
   */
  getAppReplicationConfiguration(params: SMS.Types.GetAppReplicationConfigurationRequest, callback?: (err: AWSError, data: SMS.Types.GetAppReplicationConfigurationResponse) => void): Request<SMS.Types.GetAppReplicationConfigurationResponse, AWSError>;
  /**
   * Retrieves an application replication configuration associatd with an application.
   */
  getAppReplicationConfiguration(callback?: (err: AWSError, data: SMS.Types.GetAppReplicationConfigurationResponse) => void): Request<SMS.Types.GetAppReplicationConfigurationResponse, AWSError>;
  /**
   * Describes the connectors registered with the AWS SMS.
   */
  getConnectors(params: SMS.Types.GetConnectorsRequest, callback?: (err: AWSError, data: SMS.Types.GetConnectorsResponse) => void): Request<SMS.Types.GetConnectorsResponse, AWSError>;
  /**
   * Describes the connectors registered with the AWS SMS.
   */
  getConnectors(callback?: (err: AWSError, data: SMS.Types.GetConnectorsResponse) => void): Request<SMS.Types.GetConnectorsResponse, AWSError>;
  /**
   * Describes the specified replication job or all of your replication jobs.
   */
  getReplicationJobs(params: SMS.Types.GetReplicationJobsRequest, callback?: (err: AWSError, data: SMS.Types.GetReplicationJobsResponse) => void): Request<SMS.Types.GetReplicationJobsResponse, AWSError>;
  /**
   * Describes the specified replication job or all of your replication jobs.
   */
  getReplicationJobs(callback?: (err: AWSError, data: SMS.Types.GetReplicationJobsResponse) => void): Request<SMS.Types.GetReplicationJobsResponse, AWSError>;
  /**
   * Describes the replication runs for the specified replication job.
   */
  getReplicationRuns(params: SMS.Types.GetReplicationRunsRequest, callback?: (err: AWSError, data: SMS.Types.GetReplicationRunsResponse) => void): Request<SMS.Types.GetReplicationRunsResponse, AWSError>;
  /**
   * Describes the replication runs for the specified replication job.
   */
  getReplicationRuns(callback?: (err: AWSError, data: SMS.Types.GetReplicationRunsResponse) => void): Request<SMS.Types.GetReplicationRunsResponse, AWSError>;
  /**
   * Describes the servers in your server catalog. Before you can describe your servers, you must import them using ImportServerCatalog.
   */
  getServers(params: SMS.Types.GetServersRequest, callback?: (err: AWSError, data: SMS.Types.GetServersResponse) => void): Request<SMS.Types.GetServersResponse, AWSError>;
  /**
   * Describes the servers in your server catalog. Before you can describe your servers, you must import them using ImportServerCatalog.
   */
  getServers(callback?: (err: AWSError, data: SMS.Types.GetServersResponse) => void): Request<SMS.Types.GetServersResponse, AWSError>;
  /**
   * Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers that you want to import. This call returns immediately, but might take additional time to retrieve all the servers.
   */
  importServerCatalog(params: SMS.Types.ImportServerCatalogRequest, callback?: (err: AWSError, data: SMS.Types.ImportServerCatalogResponse) => void): Request<SMS.Types.ImportServerCatalogResponse, AWSError>;
  /**
   * Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers that you want to import. This call returns immediately, but might take additional time to retrieve all the servers.
   */
  importServerCatalog(callback?: (err: AWSError, data: SMS.Types.ImportServerCatalogResponse) => void): Request<SMS.Types.ImportServerCatalogResponse, AWSError>;
  /**
   * Launches an application stack.
   */
  launchApp(params: SMS.Types.LaunchAppRequest, callback?: (err: AWSError, data: SMS.Types.LaunchAppResponse) => void): Request<SMS.Types.LaunchAppResponse, AWSError>;
  /**
   * Launches an application stack.
   */
  launchApp(callback?: (err: AWSError, data: SMS.Types.LaunchAppResponse) => void): Request<SMS.Types.LaunchAppResponse, AWSError>;
  /**
   * Returns a list of summaries for all applications.
   */
  listApps(params: SMS.Types.ListAppsRequest, callback?: (err: AWSError, data: SMS.Types.ListAppsResponse) => void): Request<SMS.Types.ListAppsResponse, AWSError>;
  /**
   * Returns a list of summaries for all applications.
   */
  listApps(callback?: (err: AWSError, data: SMS.Types.ListAppsResponse) => void): Request<SMS.Types.ListAppsResponse, AWSError>;
  /**
   * Creates a launch configuration for an application.
   */
  putAppLaunchConfiguration(params: SMS.Types.PutAppLaunchConfigurationRequest, callback?: (err: AWSError, data: SMS.Types.PutAppLaunchConfigurationResponse) => void): Request<SMS.Types.PutAppLaunchConfigurationResponse, AWSError>;
  /**
   * Creates a launch configuration for an application.
   */
  putAppLaunchConfiguration(callback?: (err: AWSError, data: SMS.Types.PutAppLaunchConfigurationResponse) => void): Request<SMS.Types.PutAppLaunchConfigurationResponse, AWSError>;
  /**
   * Creates or updates a replication configuration for an application.
   */
  putAppReplicationConfiguration(params: SMS.Types.PutAppReplicationConfigurationRequest, callback?: (err: AWSError, data: SMS.Types.PutAppReplicationConfigurationResponse) => void): Request<SMS.Types.PutAppReplicationConfigurationResponse, AWSError>;
  /**
   * Creates or updates a replication configuration for an application.
   */
  putAppReplicationConfiguration(callback?: (err: AWSError, data: SMS.Types.PutAppReplicationConfigurationResponse) => void): Request<SMS.Types.PutAppReplicationConfigurationResponse, AWSError>;
  /**
   * Starts replicating an application.
   */
  startAppReplication(params: SMS.Types.StartAppReplicationRequest, callback?: (err: AWSError, data: SMS.Types.StartAppReplicationResponse) => void): Request<SMS.Types.StartAppReplicationResponse, AWSError>;
  /**
   * Starts replicating an application.
   */
  startAppReplication(callback?: (err: AWSError, data: SMS.Types.StartAppReplicationResponse) => void): Request<SMS.Types.StartAppReplicationResponse, AWSError>;
  /**
   * Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled. There is a limit on the number of on-demand replications runs you can request in a 24-hour period.
   */
  startOnDemandReplicationRun(params: SMS.Types.StartOnDemandReplicationRunRequest, callback?: (err: AWSError, data: SMS.Types.StartOnDemandReplicationRunResponse) => void): Request<SMS.Types.StartOnDemandReplicationRunResponse, AWSError>;
  /**
   * Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled. There is a limit on the number of on-demand replications runs you can request in a 24-hour period.
   */
  startOnDemandReplicationRun(callback?: (err: AWSError, data: SMS.Types.StartOnDemandReplicationRunResponse) => void): Request<SMS.Types.StartOnDemandReplicationRunResponse, AWSError>;
  /**
   * Stops replicating an application.
   */
  stopAppReplication(params: SMS.Types.StopAppReplicationRequest, callback?: (err: AWSError, data: SMS.Types.StopAppReplicationResponse) => void): Request<SMS.Types.StopAppReplicationResponse, AWSError>;
  /**
   * Stops replicating an application.
   */
  stopAppReplication(callback?: (err: AWSError, data: SMS.Types.StopAppReplicationResponse) => void): Request<SMS.Types.StopAppReplicationResponse, AWSError>;
  /**
   * Terminates the stack for an application.
   */
  terminateApp(params: SMS.Types.TerminateAppRequest, callback?: (err: AWSError, data: SMS.Types.TerminateAppResponse) => void): Request<SMS.Types.TerminateAppResponse, AWSError>;
  /**
   * Terminates the stack for an application.
   */
  terminateApp(callback?: (err: AWSError, data: SMS.Types.TerminateAppResponse) => void): Request<SMS.Types.TerminateAppResponse, AWSError>;
  /**
   * Updates an application.
   */
  updateApp(params: SMS.Types.UpdateAppRequest, callback?: (err: AWSError, data: SMS.Types.UpdateAppResponse) => void): Request<SMS.Types.UpdateAppResponse, AWSError>;
  /**
   * Updates an application.
   */
  updateApp(callback?: (err: AWSError, data: SMS.Types.UpdateAppResponse) => void): Request<SMS.Types.UpdateAppResponse, AWSError>;
  /**
   * Updates the specified settings for the specified replication job.
   */
  updateReplicationJob(params: SMS.Types.UpdateReplicationJobRequest, callback?: (err: AWSError, data: SMS.Types.UpdateReplicationJobResponse) => void): Request<SMS.Types.UpdateReplicationJobResponse, AWSError>;
  /**
   * Updates the specified settings for the specified replication job.
   */
  updateReplicationJob(callback?: (err: AWSError, data: SMS.Types.UpdateReplicationJobResponse) => void): Request<SMS.Types.UpdateReplicationJobResponse, AWSError>;
}
declare namespace SMS {
  export type AmiId = string;
  export type AppDescription = string;
  export type AppId = string;
  export type AppIds = AppId[];
  export type AppLaunchStatus = "READY_FOR_CONFIGURATION"|"CONFIGURATION_IN_PROGRESS"|"CONFIGURATION_INVALID"|"READY_FOR_LAUNCH"|"VALIDATION_IN_PROGRESS"|"LAUNCH_PENDING"|"LAUNCH_IN_PROGRESS"|"LAUNCHED"|"DELTA_LAUNCH_IN_PROGRESS"|"DELTA_LAUNCH_FAILED"|"LAUNCH_FAILED"|"TERMINATE_IN_PROGRESS"|"TERMINATE_FAILED"|"TERMINATED"|string;
  export type AppLaunchStatusMessage = string;
  export type AppName = string;
  export type AppReplicationStatus = "READY_FOR_CONFIGURATION"|"CONFIGURATION_IN_PROGRESS"|"CONFIGURATION_INVALID"|"READY_FOR_REPLICATION"|"VALIDATION_IN_PROGRESS"|"REPLICATION_PENDING"|"REPLICATION_IN_PROGRESS"|"REPLICATED"|"DELTA_REPLICATION_IN_PROGRESS"|"DELTA_REPLICATED"|"DELTA_REPLICATION_FAILED"|"REPLICATION_FAILED"|"REPLICATION_STOPPING"|"REPLICATION_STOP_FAILED"|"REPLICATION_STOPPED"|string;
  export type AppReplicationStatusMessage = string;
  export type AppStatus = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"DELETED"|"DELETE_FAILED"|string;
  export type AppStatusMessage = string;
  export interface AppSummary {
    /**
     * Unique ID of the application.
     */
    appId?: AppId;
    /**
     * Name of the application.
     */
    name?: AppName;
    /**
     * Description of the application.
     */
    description?: AppDescription;
    /**
     * Status of the application.
     */
    status?: AppStatus;
    /**
     * A message related to the status of the application
     */
    statusMessage?: AppStatusMessage;
    /**
     * Replication status of the application.
     */
    replicationStatus?: AppReplicationStatus;
    /**
     * A message related to the replication status of the application.
     */
    replicationStatusMessage?: AppReplicationStatusMessage;
    /**
     * Timestamp of the application's most recent successful replication.
     */
    latestReplicationTime?: Timestamp;
    /**
     * Launch status of the application.
     */
    launchStatus?: AppLaunchStatus;
    /**
     * A message related to the launch status of the application.
     */
    launchStatusMessage?: AppLaunchStatusMessage;
    /**
     * Details about the latest launch of the application.
     */
    launchDetails?: LaunchDetails;
    /**
     * Time of creation of this application.
     */
    creationTime?: Timestamp;
    /**
     * Timestamp of the application's creation.
     */
    lastModified?: Timestamp;
    /**
     * Name of the service role in the customer's account used by AWS SMS.
     */
    roleName?: RoleName;
    /**
     * Number of server groups present in the application.
     */
    totalServerGroups?: TotalServerGroups;
    /**
     * Number of servers present in the application.
     */
    totalServers?: TotalServers;
  }
  export type Apps = AppSummary[];
  export type AssociatePublicIpAddress = boolean;
  export type BucketName = string;
  export type ClientToken = string;
  export interface Connector {
    /**
     * The identifier of the connector.
     */
    connectorId?: ConnectorId;
    /**
     * The connector version.
     */
    version?: ConnectorVersion;
    /**
     * The status of the connector.
     */
    status?: ConnectorStatus;
    /**
     * The capabilities of the connector.
     */
    capabilityList?: ConnectorCapabilityList;
    /**
     * The name of the VM manager.
     */
    vmManagerName?: VmManagerName;
    /**
     * The VM management product.
     */
    vmManagerType?: VmManagerType;
    /**
     * The identifier of the VM manager.
     */
    vmManagerId?: VmManagerId;
    /**
     * The IP address of the connector.
     */
    ipAddress?: IpAddress;
    /**
     * The MAC address of the connector.
     */
    macAddress?: MacAddress;
    /**
     * The time the connector was associated.
     */
    associatedOn?: Timestamp;
  }
  export type ConnectorCapability = "VSPHERE"|"SCVMM"|"HYPERV-MANAGER"|"SNAPSHOT_BATCHING"|string;
  export type ConnectorCapabilityList = ConnectorCapability[];
  export type ConnectorId = string;
  export type ConnectorList = Connector[];
  export type ConnectorStatus = "HEALTHY"|"UNHEALTHY"|string;
  export type ConnectorVersion = string;
  export interface CreateAppRequest {
    /**
     * Name of the new application.
     */
    name?: AppName;
    /**
     * Description of the new application
     */
    description?: AppDescription;
    /**
     * Name of service role in customer's account to be used by AWS SMS.
     */
    roleName?: RoleName;
    /**
     * A unique, case-sensitive identifier you provide to ensure idempotency of application creation.
     */
    clientToken?: ClientToken;
    /**
     * List of server groups to include in the application.
     */
    serverGroups?: ServerGroups;
    /**
     * List of tags to be associated with the application.
     */
    tags?: Tags;
  }
  export interface CreateAppResponse {
    /**
     * Summary description of the application.
     */
    appSummary?: AppSummary;
    /**
     * List of server groups included in the application.
     */
    serverGroups?: ServerGroups;
    /**
     * List of taags associated with the application.
     */
    tags?: Tags;
  }
  export interface CreateReplicationJobRequest {
    /**
     * The identifier of the server.
     */
    serverId: ServerId;
    /**
     * The seed replication time.
     */
    seedReplicationTime: Timestamp;
    /**
     * The time between consecutive replication runs, in hours.
     */
    frequency?: Frequency;
    /**
     * 
     */
    runOnce?: RunOnce;
    /**
     * The license type to be used for the AMI created by a successful replication run.
     */
    licenseType?: LicenseType;
    /**
     * The name of the IAM role to be used by the AWS SMS.
     */
    roleName?: RoleName;
    /**
     * The description of the replication job.
     */
    description?: Description;
    /**
     * The maximum number of SMS-created AMIs to retain. The oldest will be deleted once the maximum number is reached and a new AMI is created.
     */
    numberOfRecentAmisToKeep?: NumberOfRecentAmisToKeep;
    /**
     * When true, the replication job produces encrypted AMIs. See also KmsKeyId below.
     */
    encrypted?: Encrypted;
    /**
     * KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following:    KMS key ID   KMS key alias   ARN referring to KMS key ID   ARN referring to KMS key alias    If encrypted is true but a KMS key id is not specified, the customer's default KMS key for EBS is used. 
     */
    kmsKeyId?: KmsKeyId;
  }
  export interface CreateReplicationJobResponse {
    /**
     * The unique identifier of the replication job.
     */
    replicationJobId?: ReplicationJobId;
  }
  export interface DeleteAppLaunchConfigurationRequest {
    /**
     * ID of the application associated with the launch configuration.
     */
    appId?: AppId;
  }
  export interface DeleteAppLaunchConfigurationResponse {
  }
  export interface DeleteAppReplicationConfigurationRequest {
    /**
     * ID of the application associated with the replication configuration.
     */
    appId?: AppId;
  }
  export interface DeleteAppReplicationConfigurationResponse {
  }
  export interface DeleteAppRequest {
    /**
     * ID of the application to delete.
     */
    appId?: AppId;
    /**
     * While deleting the application, stop all replication jobs corresponding to the servers in the application.
     */
    forceStopAppReplication?: ForceStopAppReplication;
    /**
     * While deleting the application, terminate the stack corresponding to the application.
     */
    forceTerminateApp?: ForceTerminateApp;
  }
  export interface DeleteAppResponse {
  }
  export interface DeleteReplicationJobRequest {
    /**
     * The identifier of the replication job.
     */
    replicationJobId: ReplicationJobId;
  }
  export interface DeleteReplicationJobResponse {
  }
  export interface DeleteServerCatalogRequest {
  }
  export interface DeleteServerCatalogResponse {
  }
  export type Description = string;
  export interface DisassociateConnectorRequest {
    /**
     * The identifier of the connector.
     */
    connectorId: ConnectorId;
  }
  export interface DisassociateConnectorResponse {
  }
  export type EC2KeyName = string;
  export type Encrypted = boolean;
  export type ForceStopAppReplication = boolean;
  export type ForceTerminateApp = boolean;
  export type Frequency = number;
  export interface GenerateChangeSetRequest {
    /**
     * ID of the application associated with the change set.
     */
    appId?: AppId;
    /**
     * Format for the change set.
     */
    changesetFormat?: OutputFormat;
  }
  export interface GenerateChangeSetResponse {
    /**
     * Location of the Amazon S3 object.
     */
    s3Location?: S3Location;
  }
  export interface GenerateTemplateRequest {
    /**
     * ID of the application associated with the Amazon CloudFormation template.
     */
    appId?: AppId;
    /**
     * Format for generating the Amazon CloudFormation template.
     */
    templateFormat?: OutputFormat;
  }
  export interface GenerateTemplateResponse {
    /**
     * Location of the Amazon S3 object.
     */
    s3Location?: S3Location;
  }
  export interface GetAppLaunchConfigurationRequest {
    /**
     * ID of the application launch configuration.
     */
    appId?: AppId;
  }
  export interface GetAppLaunchConfigurationResponse {
    /**
     * ID of the application associated with the launch configuration.
     */
    appId?: AppId;
    /**
     * Name of the service role in the customer's account that Amazon CloudFormation uses to launch the application.
     */
    roleName?: RoleName;
    /**
     * List of launch configurations for server groups in this application.
     */
    serverGroupLaunchConfigurations?: ServerGroupLaunchConfigurations;
  }
  export interface GetAppReplicationConfigurationRequest {
    /**
     * ID of the application associated with the replication configuration.
     */
    appId?: AppId;
  }
  export interface GetAppReplicationConfigurationResponse {
    /**
     * Replication configurations associated with server groups in this application.
     */
    serverGroupReplicationConfigurations?: ServerGroupReplicationConfigurations;
  }
  export interface GetAppRequest {
    /**
     * ID of the application whose information is being retrieved.
     */
    appId?: AppId;
  }
  export interface GetAppResponse {
    /**
     * Information about the application.
     */
    appSummary?: AppSummary;
    /**
     * List of server groups belonging to the application.
     */
    serverGroups?: ServerGroups;
    /**
     * List of tags associated with the application.
     */
    tags?: Tags;
  }
  export interface GetConnectorsRequest {
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface GetConnectorsResponse {
    /**
     * Information about the registered connectors.
     */
    connectorList?: ConnectorList;
    /**
     * The token required to retrieve the next set of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export interface GetReplicationJobsRequest {
    /**
     * The identifier of the replication job.
     */
    replicationJobId?: ReplicationJobId;
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface GetReplicationJobsResponse {
    /**
     * Information about the replication jobs.
     */
    replicationJobList?: ReplicationJobList;
    /**
     * The token required to retrieve the next set of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export interface GetReplicationRunsRequest {
    /**
     * The identifier of the replication job.
     */
    replicationJobId: ReplicationJobId;
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface GetReplicationRunsResponse {
    /**
     * Information about the replication job.
     */
    replicationJob?: ReplicationJob;
    /**
     * Information about the replication runs.
     */
    replicationRunList?: ReplicationRunList;
    /**
     * The token required to retrieve the next set of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export interface GetServersRequest {
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    maxResults?: MaxResults;
    /**
     * List of VmServerAddress objects
     */
    vmServerAddressList?: VmServerAddressList;
  }
  export interface GetServersResponse {
    /**
     * The time when the server was last modified.
     */
    lastModifiedOn?: Timestamp;
    /**
     * The status of the server catalog.
     */
    serverCatalogStatus?: ServerCatalogStatus;
    /**
     * Information about the servers.
     */
    serverList?: ServerList;
    /**
     * The token required to retrieve the next set of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export interface ImportServerCatalogRequest {
  }
  export interface ImportServerCatalogResponse {
  }
  export type InstanceType = string;
  export type IpAddress = string;
  export type KeyName = string;
  export type KmsKeyId = string;
  export interface LaunchAppRequest {
    /**
     * ID of the application to launch.
     */
    appId?: AppId;
  }
  export interface LaunchAppResponse {
  }
  export interface LaunchDetails {
    /**
     * Latest time this application was launched successfully.
     */
    latestLaunchTime?: Timestamp;
    /**
     * Name of the latest stack launched for this application.
     */
    stackName?: StackName;
    /**
     * Identifier of the latest stack launched for this application.
     */
    stackId?: StackId;
  }
  export type LaunchOrder = number;
  export type LicenseType = "AWS"|"BYOL"|string;
  export interface ListAppsRequest {
    /**
     * 
     */
    appIds?: AppIds;
    /**
     * The token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned NextToken value. 
     */
    maxResults?: MaxResults;
  }
  export interface ListAppsResponse {
    /**
     * A list of application summaries.
     */
    apps?: Apps;
    /**
     * The token required to retrieve the next set of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export type LogicalId = string;
  export type MacAddress = string;
  export type MaxResults = number;
  export type NextToken = string;
  export type NumberOfRecentAmisToKeep = number;
  export type OutputFormat = "JSON"|"YAML"|string;
  export interface PutAppLaunchConfigurationRequest {
    /**
     * ID of the application associated with the launch configuration.
     */
    appId?: AppId;
    /**
     * Name of service role in the customer's account that Amazon CloudFormation uses to launch the application.
     */
    roleName?: RoleName;
    /**
     * Launch configurations for server groups in the application.
     */
    serverGroupLaunchConfigurations?: ServerGroupLaunchConfigurations;
  }
  export interface PutAppLaunchConfigurationResponse {
  }
  export interface PutAppReplicationConfigurationRequest {
    /**
     * ID of the application tassociated with the replication configuration.
     */
    appId?: AppId;
    /**
     * Replication configurations for server groups in the application.
     */
    serverGroupReplicationConfigurations?: ServerGroupReplicationConfigurations;
  }
  export interface PutAppReplicationConfigurationResponse {
  }
  export interface ReplicationJob {
    /**
     * The identifier of the replication job.
     */
    replicationJobId?: ReplicationJobId;
    /**
     * The identifier of the server.
     */
    serverId?: ServerId;
    /**
     * The type of server.
     */
    serverType?: ServerType;
    /**
     * Information about the VM server.
     */
    vmServer?: VmServer;
    /**
     * The seed replication time.
     */
    seedReplicationTime?: Timestamp;
    /**
     * The time between consecutive replication runs, in hours.
     */
    frequency?: Frequency;
    /**
     * 
     */
    runOnce?: RunOnce;
    /**
     * The start time of the next replication run.
     */
    nextReplicationRunStartTime?: Timestamp;
    /**
     * The license type to be used for the AMI created by a successful replication run.
     */
    licenseType?: LicenseType;
    /**
     * The name of the IAM role to be used by the Server Migration Service.
     */
    roleName?: RoleName;
    /**
     * The ID of the latest Amazon Machine Image (AMI).
     */
    latestAmiId?: AmiId;
    /**
     * The state of the replication job.
     */
    state?: ReplicationJobState;
    /**
     * The description of the current status of the replication job.
     */
    statusMessage?: ReplicationJobStatusMessage;
    /**
     * The description of the replication job.
     */
    description?: Description;
    /**
     * Number of recent AMIs to keep in the customer's account for a replication job. By default the value is set to zero, meaning that all AMIs are kept.
     */
    numberOfRecentAmisToKeep?: NumberOfRecentAmisToKeep;
    /**
     * Whether the replication job should produce encrypted AMIs or not. See also KmsKeyId below.
     */
    encrypted?: Encrypted;
    /**
     * KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following:    KMS key ID   KMS key alias   ARN referring to KMS key ID   ARN referring to KMS key alias    If encrypted is true but a KMS key id is not specified, the customer's default KMS key for EBS is used. 
     */
    kmsKeyId?: KmsKeyId;
    /**
     * Information about the replication runs.
     */
    replicationRunList?: ReplicationRunList;
  }
  export type ReplicationJobId = string;
  export type ReplicationJobList = ReplicationJob[];
  export type ReplicationJobState = "PENDING"|"ACTIVE"|"FAILED"|"DELETING"|"DELETED"|"COMPLETED"|"PAUSED_ON_FAILURE"|"FAILING"|string;
  export type ReplicationJobStatusMessage = string;
  export type ReplicationJobTerminated = boolean;
  export interface ReplicationRun {
    /**
     * The identifier of the replication run.
     */
    replicationRunId?: ReplicationRunId;
    /**
     * The state of the replication run.
     */
    state?: ReplicationRunState;
    /**
     * The type of replication run.
     */
    type?: ReplicationRunType;
    /**
     * Details of the current stage of the replication run.
     */
    stageDetails?: ReplicationRunStageDetails;
    /**
     * The description of the current status of the replication job.
     */
    statusMessage?: ReplicationRunStatusMessage;
    /**
     * The identifier of the Amazon Machine Image (AMI) from the replication run.
     */
    amiId?: AmiId;
    /**
     * The start time of the next replication run.
     */
    scheduledStartTime?: Timestamp;
    /**
     * The completion time of the last replication run.
     */
    completedTime?: Timestamp;
    /**
     * The description of the replication run.
     */
    description?: Description;
    /**
     * Whether the replication run should produce encrypted AMI or not. See also KmsKeyId below.
     */
    encrypted?: Encrypted;
    /**
     * KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following:    KMS key ID   KMS key alias   ARN referring to KMS key ID   ARN referring to KMS key alias    If encrypted is true but a KMS key id is not specified, the customer's default KMS key for EBS is used. 
     */
    kmsKeyId?: KmsKeyId;
  }
  export type ReplicationRunId = string;
  export type ReplicationRunList = ReplicationRun[];
  export type ReplicationRunStage = string;
  export interface ReplicationRunStageDetails {
    /**
     * String describing the current stage of a replication run.
     */
    stage?: ReplicationRunStage;
    /**
     * String describing the progress of the current stage of a replication run.
     */
    stageProgress?: ReplicationRunStageProgress;
  }
  export type ReplicationRunStageProgress = string;
  export type ReplicationRunState = "PENDING"|"MISSED"|"ACTIVE"|"FAILED"|"COMPLETED"|"DELETING"|"DELETED"|string;
  export type ReplicationRunStatusMessage = string;
  export type ReplicationRunType = "ON_DEMAND"|"AUTOMATIC"|string;
  export type RoleName = string;
  export type RunOnce = boolean;
  export interface S3Location {
    /**
     * Amazon S3 bucket name.
     */
    bucket?: BucketName;
    /**
     * Amazon S3 bucket key.
     */
    key?: KeyName;
  }
  export type SecurityGroup = string;
  export interface Server {
    /**
     * The identifier of the server.
     */
    serverId?: ServerId;
    /**
     * The type of server.
     */
    serverType?: ServerType;
    /**
     * Information about the VM server.
     */
    vmServer?: VmServer;
    /**
     * The identifier of the replication job.
     */
    replicationJobId?: ReplicationJobId;
    /**
     * Indicates whether the replication job is deleted or failed.
     */
    replicationJobTerminated?: ReplicationJobTerminated;
  }
  export type ServerCatalogStatus = "NOT_IMPORTED"|"IMPORTING"|"AVAILABLE"|"DELETED"|"EXPIRED"|string;
  export interface ServerGroup {
    /**
     * Identifier of a server group.
     */
    serverGroupId?: ServerGroupId;
    /**
     * Name of a server group.
     */
    name?: ServerGroupName;
    /**
     * List of servers belonging to a server group.
     */
    serverList?: ServerList;
  }
  export type ServerGroupId = string;
  export interface ServerGroupLaunchConfiguration {
    /**
     * Identifier of the server group the launch configuration is associated with.
     */
    serverGroupId?: ServerGroupId;
    /**
     * Launch order of servers in the server group.
     */
    launchOrder?: LaunchOrder;
    /**
     * Launch configuration for servers in the server group.
     */
    serverLaunchConfigurations?: ServerLaunchConfigurations;
  }
  export type ServerGroupLaunchConfigurations = ServerGroupLaunchConfiguration[];
  export type ServerGroupName = string;
  export interface ServerGroupReplicationConfiguration {
    /**
     * Identifier of the server group this replication configuration is associated with.
     */
    serverGroupId?: ServerGroupId;
    /**
     * Replication configuration for servers in the server group.
     */
    serverReplicationConfigurations?: ServerReplicationConfigurations;
  }
  export type ServerGroupReplicationConfigurations = ServerGroupReplicationConfiguration[];
  export type ServerGroups = ServerGroup[];
  export type ServerId = string;
  export interface ServerLaunchConfiguration {
    /**
     * Identifier of the server the launch configuration is associated with.
     */
    server?: Server;
    /**
     * Logical ID of the server in the Amazon CloudFormation template.
     */
    logicalId?: LogicalId;
    /**
     * Identifier of the VPC the server should be launched into.
     */
    vpc?: VPC;
    /**
     * Identifier of the subnet the server should be launched into.
     */
    subnet?: Subnet;
    /**
     * Identifier of the security group that applies to the launched server.
     */
    securityGroup?: SecurityGroup;
    /**
     * Name of the EC2 SSH Key to be used for connecting to the launched server.
     */
    ec2KeyName?: EC2KeyName;
    /**
     * Location of the user-data script to be executed when launching the server.
     */
    userData?: UserData;
    /**
     * Instance type to be used for launching the server.
     */
    instanceType?: InstanceType;
    /**
     * If true, a publicly accessible IP address is created when launching the server.
     */
    associatePublicIpAddress?: AssociatePublicIpAddress;
  }
  export type ServerLaunchConfigurations = ServerLaunchConfiguration[];
  export type ServerList = Server[];
  export interface ServerReplicationConfiguration {
    /**
     * Identifier of the server this replication configuration is associated with.
     */
    server?: Server;
    /**
     * Parameters for replicating the server.
     */
    serverReplicationParameters?: ServerReplicationParameters;
  }
  export type ServerReplicationConfigurations = ServerReplicationConfiguration[];
  export interface ServerReplicationParameters {
    /**
     * Seed time for creating a replication job for the server.
     */
    seedTime?: Timestamp;
    /**
     * Frequency of creating replication jobs for the server.
     */
    frequency?: Frequency;
    /**
     * 
     */
    runOnce?: RunOnce;
    /**
     * License type for creating a replication job for the server.
     */
    licenseType?: LicenseType;
    /**
     * Number of recent AMIs to keep when creating a replication job for this server.
     */
    numberOfRecentAmisToKeep?: NumberOfRecentAmisToKeep;
    /**
     * When true, the replication job produces encrypted AMIs. See also KmsKeyId below.
     */
    encrypted?: Encrypted;
    /**
     *  KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following:    KMS key ID   KMS key alias   ARN referring to KMS key ID   ARN referring to KMS key alias    If encrypted is true but a KMS key id is not specified, the customer's default KMS key for EBS is used. 
     */
    kmsKeyId?: KmsKeyId;
  }
  export type ServerType = "VIRTUAL_MACHINE"|string;
  export type StackId = string;
  export type StackName = string;
  export interface StartAppReplicationRequest {
    /**
     * ID of the application to replicate.
     */
    appId?: AppId;
  }
  export interface StartAppReplicationResponse {
  }
  export interface StartOnDemandReplicationRunRequest {
    /**
     * The identifier of the replication job.
     */
    replicationJobId: ReplicationJobId;
    /**
     * The description of the replication run.
     */
    description?: Description;
  }
  export interface StartOnDemandReplicationRunResponse {
    /**
     * The identifier of the replication run.
     */
    replicationRunId?: ReplicationRunId;
  }
  export interface StopAppReplicationRequest {
    /**
     * ID of the application to stop replicating.
     */
    appId?: AppId;
  }
  export interface StopAppReplicationResponse {
  }
  export type Subnet = string;
  export interface Tag {
    /**
     * Tag key.
     */
    key?: TagKey;
    /**
     * Tag value.
     */
    value?: TagValue;
  }
  export type TagKey = string;
  export type TagValue = string;
  export type Tags = Tag[];
  export interface TerminateAppRequest {
    /**
     * ID of the application to terminate.
     */
    appId?: AppId;
  }
  export interface TerminateAppResponse {
  }
  export type Timestamp = Date;
  export type TotalServerGroups = number;
  export type TotalServers = number;
  export interface UpdateAppRequest {
    /**
     * ID of the application to update.
     */
    appId?: AppId;
    /**
     * New name of the application.
     */
    name?: AppName;
    /**
     * New description of the application.
     */
    description?: AppDescription;
    /**
     * Name of the service role in the customer's account used by AWS SMS.
     */
    roleName?: RoleName;
    /**
     * List of server groups in the application to update.
     */
    serverGroups?: ServerGroups;
    /**
     * List of tags to associate with the application.
     */
    tags?: Tags;
  }
  export interface UpdateAppResponse {
    /**
     * Summary description of the application.
     */
    appSummary?: AppSummary;
    /**
     * List of updated server groups in the application.
     */
    serverGroups?: ServerGroups;
    /**
     * List of tags associated with the application.
     */
    tags?: Tags;
  }
  export interface UpdateReplicationJobRequest {
    /**
     * The identifier of the replication job.
     */
    replicationJobId: ReplicationJobId;
    /**
     * The time between consecutive replication runs, in hours.
     */
    frequency?: Frequency;
    /**
     * The start time of the next replication run.
     */
    nextReplicationRunStartTime?: Timestamp;
    /**
     * The license type to be used for the AMI created by a successful replication run.
     */
    licenseType?: LicenseType;
    /**
     * The name of the IAM role to be used by AWS SMS.
     */
    roleName?: RoleName;
    /**
     * The description of the replication job.
     */
    description?: Description;
    /**
     * The maximum number of SMS-created AMIs to retain. The oldest will be deleted once the maximum number is reached and a new AMI is created.
     */
    numberOfRecentAmisToKeep?: NumberOfRecentAmisToKeep;
    /**
     * When true, the replication job produces encrypted AMIs . See also KmsKeyId below.
     */
    encrypted?: Encrypted;
    /**
     *  KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following:    KMS key ID   KMS key alias   ARN referring to KMS key ID   ARN referring to KMS key alias    If encrypted is true but a KMS key id is not specified, the customer's default KMS key for EBS is used. 
     */
    kmsKeyId?: KmsKeyId;
  }
  export interface UpdateReplicationJobResponse {
  }
  export interface UserData {
    /**
     * Amazon S3 location of the user-data script.
     */
    s3Location?: S3Location;
  }
  export type VPC = string;
  export type VmId = string;
  export type VmManagerId = string;
  export type VmManagerName = string;
  export type VmManagerType = "VSPHERE"|"SCVMM"|"HYPERV-MANAGER"|string;
  export type VmName = string;
  export type VmPath = string;
  export interface VmServer {
    /**
     * Information about the VM server location.
     */
    vmServerAddress?: VmServerAddress;
    /**
     * The name of the VM.
     */
    vmName?: VmName;
    /**
     * The name of the VM manager.
     */
    vmManagerName?: VmManagerName;
    /**
     * The type of VM management product.
     */
    vmManagerType?: VmManagerType;
    /**
     * The VM folder path in the vCenter Server virtual machine inventory tree.
     */
    vmPath?: VmPath;
  }
  export interface VmServerAddress {
    /**
     * The identifier of the VM manager.
     */
    vmManagerId?: VmManagerId;
    /**
     * The identifier of the VM.
     */
    vmId?: VmId;
  }
  export type VmServerAddressList = VmServerAddress[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-10-24"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SMS client.
   */
  export import Types = SMS;
}
export = SMS;
