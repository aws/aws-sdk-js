import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Drs extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Drs.Types.ClientConfiguration)
  config: Config & Drs.Types.ClientConfiguration;
  /**
   * Creates a new ReplicationConfigurationTemplate.
   */
  createReplicationConfigurationTemplate(params: Drs.Types.CreateReplicationConfigurationTemplateRequest, callback?: (err: AWSError, data: Drs.Types.ReplicationConfigurationTemplate) => void): Request<Drs.Types.ReplicationConfigurationTemplate, AWSError>;
  /**
   * Creates a new ReplicationConfigurationTemplate.
   */
  createReplicationConfigurationTemplate(callback?: (err: AWSError, data: Drs.Types.ReplicationConfigurationTemplate) => void): Request<Drs.Types.ReplicationConfigurationTemplate, AWSError>;
  /**
   * Deletes a single Job by ID.
   */
  deleteJob(params: Drs.Types.DeleteJobRequest, callback?: (err: AWSError, data: Drs.Types.DeleteJobResponse) => void): Request<Drs.Types.DeleteJobResponse, AWSError>;
  /**
   * Deletes a single Job by ID.
   */
  deleteJob(callback?: (err: AWSError, data: Drs.Types.DeleteJobResponse) => void): Request<Drs.Types.DeleteJobResponse, AWSError>;
  /**
   * Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
   */
  deleteRecoveryInstance(params: Drs.Types.DeleteRecoveryInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
   */
  deleteRecoveryInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a single Replication Configuration Template by ID
   */
  deleteReplicationConfigurationTemplate(params: Drs.Types.DeleteReplicationConfigurationTemplateRequest, callback?: (err: AWSError, data: Drs.Types.DeleteReplicationConfigurationTemplateResponse) => void): Request<Drs.Types.DeleteReplicationConfigurationTemplateResponse, AWSError>;
  /**
   * Deletes a single Replication Configuration Template by ID
   */
  deleteReplicationConfigurationTemplate(callback?: (err: AWSError, data: Drs.Types.DeleteReplicationConfigurationTemplateResponse) => void): Request<Drs.Types.DeleteReplicationConfigurationTemplateResponse, AWSError>;
  /**
   * Deletes a single Source Server by ID. The Source Server must be disconnected first.
   */
  deleteSourceServer(params: Drs.Types.DeleteSourceServerRequest, callback?: (err: AWSError, data: Drs.Types.DeleteSourceServerResponse) => void): Request<Drs.Types.DeleteSourceServerResponse, AWSError>;
  /**
   * Deletes a single Source Server by ID. The Source Server must be disconnected first.
   */
  deleteSourceServer(callback?: (err: AWSError, data: Drs.Types.DeleteSourceServerResponse) => void): Request<Drs.Types.DeleteSourceServerResponse, AWSError>;
  /**
   * Retrieves a detailed Job log with pagination.
   */
  describeJobLogItems(params: Drs.Types.DescribeJobLogItemsRequest, callback?: (err: AWSError, data: Drs.Types.DescribeJobLogItemsResponse) => void): Request<Drs.Types.DescribeJobLogItemsResponse, AWSError>;
  /**
   * Retrieves a detailed Job log with pagination.
   */
  describeJobLogItems(callback?: (err: AWSError, data: Drs.Types.DescribeJobLogItemsResponse) => void): Request<Drs.Types.DescribeJobLogItemsResponse, AWSError>;
  /**
   * Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
   */
  describeJobs(params: Drs.Types.DescribeJobsRequest, callback?: (err: AWSError, data: Drs.Types.DescribeJobsResponse) => void): Request<Drs.Types.DescribeJobsResponse, AWSError>;
  /**
   * Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
   */
  describeJobs(callback?: (err: AWSError, data: Drs.Types.DescribeJobsResponse) => void): Request<Drs.Types.DescribeJobsResponse, AWSError>;
  /**
   * Lists all Recovery Instances or multiple Recovery Instances by ID.
   */
  describeRecoveryInstances(params: Drs.Types.DescribeRecoveryInstancesRequest, callback?: (err: AWSError, data: Drs.Types.DescribeRecoveryInstancesResponse) => void): Request<Drs.Types.DescribeRecoveryInstancesResponse, AWSError>;
  /**
   * Lists all Recovery Instances or multiple Recovery Instances by ID.
   */
  describeRecoveryInstances(callback?: (err: AWSError, data: Drs.Types.DescribeRecoveryInstancesResponse) => void): Request<Drs.Types.DescribeRecoveryInstancesResponse, AWSError>;
  /**
   * Lists all Recovery Snapshots for a single Source Server.
   */
  describeRecoverySnapshots(params: Drs.Types.DescribeRecoverySnapshotsRequest, callback?: (err: AWSError, data: Drs.Types.DescribeRecoverySnapshotsResponse) => void): Request<Drs.Types.DescribeRecoverySnapshotsResponse, AWSError>;
  /**
   * Lists all Recovery Snapshots for a single Source Server.
   */
  describeRecoverySnapshots(callback?: (err: AWSError, data: Drs.Types.DescribeRecoverySnapshotsResponse) => void): Request<Drs.Types.DescribeRecoverySnapshotsResponse, AWSError>;
  /**
   * Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
   */
  describeReplicationConfigurationTemplates(params: Drs.Types.DescribeReplicationConfigurationTemplatesRequest, callback?: (err: AWSError, data: Drs.Types.DescribeReplicationConfigurationTemplatesResponse) => void): Request<Drs.Types.DescribeReplicationConfigurationTemplatesResponse, AWSError>;
  /**
   * Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
   */
  describeReplicationConfigurationTemplates(callback?: (err: AWSError, data: Drs.Types.DescribeReplicationConfigurationTemplatesResponse) => void): Request<Drs.Types.DescribeReplicationConfigurationTemplatesResponse, AWSError>;
  /**
   * Lists all Source Servers or multiple Source Servers filtered by ID.
   */
  describeSourceServers(params: Drs.Types.DescribeSourceServersRequest, callback?: (err: AWSError, data: Drs.Types.DescribeSourceServersResponse) => void): Request<Drs.Types.DescribeSourceServersResponse, AWSError>;
  /**
   * Lists all Source Servers or multiple Source Servers filtered by ID.
   */
  describeSourceServers(callback?: (err: AWSError, data: Drs.Types.DescribeSourceServersResponse) => void): Request<Drs.Types.DescribeSourceServersResponse, AWSError>;
  /**
   * Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
   */
  disconnectRecoveryInstance(params: Drs.Types.DisconnectRecoveryInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
   */
  disconnectRecoveryInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
   */
  disconnectSourceServer(params: Drs.Types.DisconnectSourceServerRequest, callback?: (err: AWSError, data: Drs.Types.SourceServer) => void): Request<Drs.Types.SourceServer, AWSError>;
  /**
   * Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
   */
  disconnectSourceServer(callback?: (err: AWSError, data: Drs.Types.SourceServer) => void): Request<Drs.Types.SourceServer, AWSError>;
  /**
   * Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
   */
  getFailbackReplicationConfiguration(params: Drs.Types.GetFailbackReplicationConfigurationRequest, callback?: (err: AWSError, data: Drs.Types.GetFailbackReplicationConfigurationResponse) => void): Request<Drs.Types.GetFailbackReplicationConfigurationResponse, AWSError>;
  /**
   * Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
   */
  getFailbackReplicationConfiguration(callback?: (err: AWSError, data: Drs.Types.GetFailbackReplicationConfigurationResponse) => void): Request<Drs.Types.GetFailbackReplicationConfigurationResponse, AWSError>;
  /**
   * Gets a LaunchConfiguration, filtered by Source Server IDs.
   */
  getLaunchConfiguration(params: Drs.Types.GetLaunchConfigurationRequest, callback?: (err: AWSError, data: Drs.Types.LaunchConfiguration) => void): Request<Drs.Types.LaunchConfiguration, AWSError>;
  /**
   * Gets a LaunchConfiguration, filtered by Source Server IDs.
   */
  getLaunchConfiguration(callback?: (err: AWSError, data: Drs.Types.LaunchConfiguration) => void): Request<Drs.Types.LaunchConfiguration, AWSError>;
  /**
   * Gets a ReplicationConfiguration, filtered by Source Server ID.
   */
  getReplicationConfiguration(params: Drs.Types.GetReplicationConfigurationRequest, callback?: (err: AWSError, data: Drs.Types.ReplicationConfiguration) => void): Request<Drs.Types.ReplicationConfiguration, AWSError>;
  /**
   * Gets a ReplicationConfiguration, filtered by Source Server ID.
   */
  getReplicationConfiguration(callback?: (err: AWSError, data: Drs.Types.ReplicationConfiguration) => void): Request<Drs.Types.ReplicationConfiguration, AWSError>;
  /**
   * Initialize Elastic Disaster Recovery.
   */
  initializeService(params: Drs.Types.InitializeServiceRequest, callback?: (err: AWSError, data: Drs.Types.InitializeServiceResponse) => void): Request<Drs.Types.InitializeServiceResponse, AWSError>;
  /**
   * Initialize Elastic Disaster Recovery.
   */
  initializeService(callback?: (err: AWSError, data: Drs.Types.InitializeServiceResponse) => void): Request<Drs.Types.InitializeServiceResponse, AWSError>;
  /**
   * List all tags for your Elastic Disaster Recovery resources.
   */
  listTagsForResource(params: Drs.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Drs.Types.ListTagsForResourceResponse) => void): Request<Drs.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List all tags for your Elastic Disaster Recovery resources.
   */
  listTagsForResource(callback?: (err: AWSError, data: Drs.Types.ListTagsForResourceResponse) => void): Request<Drs.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
   */
  retryDataReplication(params: Drs.Types.RetryDataReplicationRequest, callback?: (err: AWSError, data: Drs.Types.SourceServer) => void): Request<Drs.Types.SourceServer, AWSError>;
  /**
   * Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
   */
  retryDataReplication(callback?: (err: AWSError, data: Drs.Types.SourceServer) => void): Request<Drs.Types.SourceServer, AWSError>;
  /**
   * Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
   */
  startFailbackLaunch(params: Drs.Types.StartFailbackLaunchRequest, callback?: (err: AWSError, data: Drs.Types.StartFailbackLaunchResponse) => void): Request<Drs.Types.StartFailbackLaunchResponse, AWSError>;
  /**
   * Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
   */
  startFailbackLaunch(callback?: (err: AWSError, data: Drs.Types.StartFailbackLaunchResponse) => void): Request<Drs.Types.StartFailbackLaunchResponse, AWSError>;
  /**
   * Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
   */
  startRecovery(params: Drs.Types.StartRecoveryRequest, callback?: (err: AWSError, data: Drs.Types.StartRecoveryResponse) => void): Request<Drs.Types.StartRecoveryResponse, AWSError>;
  /**
   * Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
   */
  startRecovery(callback?: (err: AWSError, data: Drs.Types.StartRecoveryResponse) => void): Request<Drs.Types.StartRecoveryResponse, AWSError>;
  /**
   * Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
   */
  stopFailback(params: Drs.Types.StopFailbackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
   */
  stopFailback(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
   */
  tagResource(params: Drs.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
   */
  terminateRecoveryInstances(params: Drs.Types.TerminateRecoveryInstancesRequest, callback?: (err: AWSError, data: Drs.Types.TerminateRecoveryInstancesResponse) => void): Request<Drs.Types.TerminateRecoveryInstancesResponse, AWSError>;
  /**
   * Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
   */
  terminateRecoveryInstances(callback?: (err: AWSError, data: Drs.Types.TerminateRecoveryInstancesResponse) => void): Request<Drs.Types.TerminateRecoveryInstancesResponse, AWSError>;
  /**
   * Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
   */
  untagResource(params: Drs.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows you to update the failback replication configuration of a Recovery Instance by ID.
   */
  updateFailbackReplicationConfiguration(params: Drs.Types.UpdateFailbackReplicationConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows you to update the failback replication configuration of a Recovery Instance by ID.
   */
  updateFailbackReplicationConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a LaunchConfiguration by Source Server ID.
   */
  updateLaunchConfiguration(params: Drs.Types.UpdateLaunchConfigurationRequest, callback?: (err: AWSError, data: Drs.Types.LaunchConfiguration) => void): Request<Drs.Types.LaunchConfiguration, AWSError>;
  /**
   * Updates a LaunchConfiguration by Source Server ID.
   */
  updateLaunchConfiguration(callback?: (err: AWSError, data: Drs.Types.LaunchConfiguration) => void): Request<Drs.Types.LaunchConfiguration, AWSError>;
  /**
   * Allows you to update a ReplicationConfiguration by Source Server ID.
   */
  updateReplicationConfiguration(params: Drs.Types.UpdateReplicationConfigurationRequest, callback?: (err: AWSError, data: Drs.Types.ReplicationConfiguration) => void): Request<Drs.Types.ReplicationConfiguration, AWSError>;
  /**
   * Allows you to update a ReplicationConfiguration by Source Server ID.
   */
  updateReplicationConfiguration(callback?: (err: AWSError, data: Drs.Types.ReplicationConfiguration) => void): Request<Drs.Types.ReplicationConfiguration, AWSError>;
  /**
   * Updates a ReplicationConfigurationTemplate by ID.
   */
  updateReplicationConfigurationTemplate(params: Drs.Types.UpdateReplicationConfigurationTemplateRequest, callback?: (err: AWSError, data: Drs.Types.ReplicationConfigurationTemplate) => void): Request<Drs.Types.ReplicationConfigurationTemplate, AWSError>;
  /**
   * Updates a ReplicationConfigurationTemplate by ID.
   */
  updateReplicationConfigurationTemplate(callback?: (err: AWSError, data: Drs.Types.ReplicationConfigurationTemplate) => void): Request<Drs.Types.ReplicationConfigurationTemplate, AWSError>;
}
declare namespace Drs {
  export type ARN = string;
  export type Boolean = boolean;
  export type BoundedString = string;
  export interface CPU {
    /**
     * The number of CPU cores.
     */
    cores?: PositiveInteger;
    /**
     * The model name of the CPU.
     */
    modelName?: BoundedString;
  }
  export type Cpus = CPU[];
  export interface CreateReplicationConfigurationTemplateRequest {
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
     */
    associateDefaultSecurityGroup: Boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling: PositiveInteger;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP: Boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting: ReplicationConfigurationDataPlaneRouting;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption: ReplicationConfigurationEbsEncryption;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy: PITPolicy;
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType: EC2InstanceType;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs: ReplicationServersSecurityGroupsIDs;
    /**
     * The subnet to be used by the replication staging area.
     */
    stagingAreaSubnetId: SubnetID;
    /**
     * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
     */
    stagingAreaTags: TagsMap;
    /**
     * A set of tags to be associated with the Replication Configuration Template resource.
     */
    tags?: TagsMap;
    /**
     * Whether to use a dedicated Replication Server in the replication staging area.
     */
    useDedicatedReplicationServer: Boolean;
  }
  export interface DataReplicationError {
    /**
     * Error in data replication.
     */
    error?: DataReplicationErrorString;
    /**
     * Error in data replication.
     */
    rawError?: LargeBoundedString;
  }
  export type DataReplicationErrorString = "AGENT_NOT_SEEN"|"SNAPSHOTS_FAILURE"|"NOT_CONVERGING"|"UNSTABLE_NETWORK"|"FAILED_TO_CREATE_SECURITY_GROUP"|"FAILED_TO_LAUNCH_REPLICATION_SERVER"|"FAILED_TO_BOOT_REPLICATION_SERVER"|"FAILED_TO_AUTHENTICATE_WITH_SERVICE"|"FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE"|"FAILED_TO_CREATE_STAGING_DISKS"|"FAILED_TO_ATTACH_STAGING_DISKS"|"FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT"|"FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER"|"FAILED_TO_START_DATA_TRANSFER"|string;
  export interface DataReplicationInfo {
    /**
     * Error in data replication.
     */
    dataReplicationError?: DataReplicationError;
    /**
     * Information about whether the data replication has been initiated.
     */
    dataReplicationInitiation?: DataReplicationInitiation;
    /**
     * The state of the data replication.
     */
    dataReplicationState?: DataReplicationState;
    /**
     * An estimate of when the data replication will be completed.
     */
    etaDateTime?: ISO8601DatetimeString;
    /**
     * Data replication lag duration.
     */
    lagDuration?: ISO8601DatetimeString;
    /**
     * The disks that should be replicated.
     */
    replicatedDisks?: DataReplicationInfoReplicatedDisks;
  }
  export interface DataReplicationInfoReplicatedDisk {
    /**
     * The size of the replication backlog in bytes.
     */
    backloggedStorageBytes?: PositiveInteger;
    /**
     * The name of the device.
     */
    deviceName?: BoundedString;
    /**
     * The amount of data replicated so far in bytes.
     */
    replicatedStorageBytes?: PositiveInteger;
    /**
     * The amount of data to be rescanned in bytes.
     */
    rescannedStorageBytes?: PositiveInteger;
    /**
     * The total amount of data to be replicated in bytes.
     */
    totalStorageBytes?: PositiveInteger;
  }
  export type DataReplicationInfoReplicatedDisks = DataReplicationInfoReplicatedDisk[];
  export interface DataReplicationInitiation {
    /**
     * The date and time of the next attempt to initiate data replication.
     */
    nextAttemptDateTime?: ISO8601DatetimeString;
    /**
     * The date and time of the current attempt to initiate data replication.
     */
    startDateTime?: ISO8601DatetimeString;
    /**
     * The steps of the current attempt to initiate data replication.
     */
    steps?: DataReplicationInitiationSteps;
  }
  export interface DataReplicationInitiationStep {
    /**
     * The name of the step.
     */
    name?: DataReplicationInitiationStepName;
    /**
     * The status of the step.
     */
    status?: DataReplicationInitiationStepStatus;
  }
  export type DataReplicationInitiationStepName = "WAIT"|"CREATE_SECURITY_GROUP"|"LAUNCH_REPLICATION_SERVER"|"BOOT_REPLICATION_SERVER"|"AUTHENTICATE_WITH_SERVICE"|"DOWNLOAD_REPLICATION_SOFTWARE"|"CREATE_STAGING_DISKS"|"ATTACH_STAGING_DISKS"|"PAIR_REPLICATION_SERVER_WITH_AGENT"|"CONNECT_AGENT_TO_REPLICATION_SERVER"|"START_DATA_TRANSFER"|string;
  export type DataReplicationInitiationStepStatus = "NOT_STARTED"|"IN_PROGRESS"|"SUCCEEDED"|"FAILED"|"SKIPPED"|string;
  export type DataReplicationInitiationSteps = DataReplicationInitiationStep[];
  export type DataReplicationState = "STOPPED"|"INITIATING"|"INITIAL_SYNC"|"BACKLOG"|"CREATING_SNAPSHOT"|"CONTINUOUS"|"PAUSED"|"RESCAN"|"STALLED"|"DISCONNECTED"|string;
  export interface DeleteJobRequest {
    /**
     * The ID of the Job to be deleted.
     */
    jobID: JobID;
  }
  export interface DeleteJobResponse {
  }
  export interface DeleteRecoveryInstanceRequest {
    /**
     * RThe ID of the Recovery Instance to be deleted.
     */
    recoveryInstanceID: RecoveryInstanceID;
  }
  export interface DeleteReplicationConfigurationTemplateRequest {
    /**
     * The ID of the Replication Configuration Template to be deleted.
     */
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateID;
  }
  export interface DeleteReplicationConfigurationTemplateResponse {
  }
  export interface DeleteSourceServerRequest {
    /**
     * The ID of the Source Server to be deleted.
     */
    sourceServerID: SourceServerID;
  }
  export interface DeleteSourceServerResponse {
  }
  export interface DescribeJobLogItemsRequest {
    /**
     * The ID of the Job for which Job log items will be retrieved.
     */
    jobID: JobID;
    /**
     * Maximum number of Job log items to retrieve.
     */
    maxResults?: StrictlyPositiveInteger;
    /**
     * The token of the next Job log items to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeJobLogItemsResponse {
    /**
     * An array of Job log items.
     */
    items?: JobLogs;
    /**
     * The token of the next Job log items to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeJobsRequest {
    /**
     * A set of filters by which to return Jobs.
     */
    filters: DescribeJobsRequestFilters;
    /**
     * Maximum number of Jobs to retrieve.
     */
    maxResults?: StrictlyPositiveInteger;
    /**
     * The token of the next Job to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeJobsRequestFilters {
    /**
     * The start date in a date range query.
     */
    fromDate?: ISO8601DatetimeString;
    /**
     * An array of Job IDs that should be returned. An empty array means all jobs.
     */
    jobIDs?: DescribeJobsRequestFiltersJobIDs;
    /**
     * The end date in a date range query.
     */
    toDate?: ISO8601DatetimeString;
  }
  export type DescribeJobsRequestFiltersJobIDs = JobID[];
  export interface DescribeJobsResponse {
    /**
     * An array of Jobs.
     */
    items?: JobsList;
    /**
     * The token of the next Job to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export type DescribeRecoveryInstancesItems = RecoveryInstance[];
  export interface DescribeRecoveryInstancesRequest {
    /**
     * A set of filters by which to return Recovery Instances.
     */
    filters: DescribeRecoveryInstancesRequestFilters;
    /**
     * Maximum number of Recovery Instances to retrieve.
     */
    maxResults?: StrictlyPositiveInteger;
    /**
     * The token of the next Recovery Instance to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeRecoveryInstancesRequestFilters {
    /**
     * An array of Recovery Instance IDs that should be returned. An empty array means all Recovery Instances.
     */
    recoveryInstanceIDs?: RecoveryInstanceIDs;
    /**
     * An array of Source Server IDs for which associated Recovery Instances should be returned.
     */
    sourceServerIDs?: SourceServerIDs;
  }
  export interface DescribeRecoveryInstancesResponse {
    /**
     * An array of Recovery Instances.
     */
    items?: DescribeRecoveryInstancesItems;
    /**
     * The token of the next Recovery Instance to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeRecoverySnapshotsRequest {
    /**
     * A set of filters by which to return Recovery Snapshots.
     */
    filters?: DescribeRecoverySnapshotsRequestFilters;
    /**
     * Maximum number of Recovery Snapshots to retrieve.
     */
    maxResults?: StrictlyPositiveInteger;
    /**
     * The token of the next Recovery Snapshot to retrieve.
     */
    nextToken?: PaginationToken;
    /**
     * The sorted ordering by which to return Recovery Snapshots.
     */
    order?: RecoverySnapshotsOrder;
    /**
     * Filter Recovery Snapshots by Source Server ID.
     */
    sourceServerID: SourceServerID;
  }
  export interface DescribeRecoverySnapshotsRequestFilters {
    /**
     * The start date in a date range query.
     */
    fromDateTime?: ISO8601DatetimeString;
    /**
     * The end date in a date range query.
     */
    toDateTime?: ISO8601DatetimeString;
  }
  export interface DescribeRecoverySnapshotsResponse {
    /**
     * An array of Recovery Snapshots.
     */
    items?: RecoverySnapshotsList;
    /**
     * The token of the next Recovery Snapshot to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeReplicationConfigurationTemplatesRequest {
    /**
     * Maximum number of Replication Configuration Templates to retrieve.
     */
    maxResults?: StrictlyPositiveInteger;
    /**
     * The token of the next Replication Configuration Template to retrieve.
     */
    nextToken?: PaginationToken;
    /**
     * The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates.
     */
    replicationConfigurationTemplateIDs: ReplicationConfigurationTemplateIDs;
  }
  export interface DescribeReplicationConfigurationTemplatesResponse {
    /**
     * An array of Replication Configuration Templates.
     */
    items?: ReplicationConfigurationTemplates;
    /**
     * The token of the next Replication Configuration Template to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeSourceServersRequest {
    /**
     * A set of filters by which to return Source Servers.
     */
    filters: DescribeSourceServersRequestFilters;
    /**
     * Maximum number of Source Servers to retrieve.
     */
    maxResults?: StrictlyPositiveInteger;
    /**
     * The token of the next Source Server to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeSourceServersRequestFilters {
    /**
     * An ID that describes the hardware of the Source Server. This is either an EC2 instance id, a VMware uuid or a mac address.
     */
    hardwareId?: BoundedString;
    /**
     * An array of Source Servers IDs that should be returned. An empty array means all Source Servers.
     */
    sourceServerIDs?: DescribeSourceServersRequestFiltersIDs;
  }
  export type DescribeSourceServersRequestFiltersIDs = SourceServerID[];
  export interface DescribeSourceServersResponse {
    /**
     * An array of Source Servers.
     */
    items?: SourceServersList;
    /**
     * The token of the next Source Server to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DisconnectRecoveryInstanceRequest {
    /**
     * The ID of the Recovery Instance to disconnect.
     */
    recoveryInstanceID: RecoveryInstanceID;
  }
  export interface DisconnectSourceServerRequest {
    /**
     * The ID of the Source Server to disconnect.
     */
    sourceServerID: SourceServerID;
  }
  export interface Disk {
    /**
     * The amount of storage on the disk in bytes.
     */
    bytes?: PositiveInteger;
    /**
     * The disk or device name.
     */
    deviceName?: BoundedString;
  }
  export type Disks = Disk[];
  export type EC2InstanceID = string;
  export type EC2InstanceState = "PENDING"|"RUNNING"|"STOPPING"|"STOPPED"|"SHUTTING-DOWN"|"TERMINATED"|"NOT_FOUND"|string;
  export type EC2InstanceType = string;
  export type EbsSnapshotsList = ebsSnapshot[];
  export type EbsVolumeID = string;
  export type FailbackReplicationError = "AGENT_NOT_SEEN"|"FAILBACK_CLIENT_NOT_SEEN"|"NOT_CONVERGING"|"UNSTABLE_NETWORK"|"FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION"|"FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT"|"FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE"|"FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE"|"FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION"|string;
  export type FailbackState = "FAILBACK_NOT_STARTED"|"FAILBACK_IN_PROGRESS"|"FAILBACK_READY_FOR_LAUNCH"|"FAILBACK_COMPLETED"|"FAILBACK_ERROR"|string;
  export interface GetFailbackReplicationConfigurationRequest {
    /**
     * The ID of the Recovery Instance whose failback replication configuration should be returned.
     */
    recoveryInstanceID: RecoveryInstanceID;
  }
  export interface GetFailbackReplicationConfigurationResponse {
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * The name of the Failback Replication Configuration.
     */
    name?: BoundedString;
    /**
     * The ID of the Recovery Instance.
     */
    recoveryInstanceID: RecoveryInstanceID;
    /**
     * Whether to use Private IP for the failback replication of the Recovery Instance.
     */
    usePrivateIP?: Boolean;
  }
  export interface GetLaunchConfigurationRequest {
    /**
     * The ID of the Source Server that we want to retrieve a Launch Configuration for.
     */
    sourceServerID: SourceServerID;
  }
  export interface GetReplicationConfigurationRequest {
    /**
     * The ID of the Source Serve for this Replication Configuration.r
     */
    sourceServerID: SourceServerID;
  }
  export type IPsList = BoundedString[];
  export type ISO8601DatetimeString = string;
  export interface IdentificationHints {
    /**
     * AWS Instance ID identification hint.
     */
    awsInstanceID?: EC2InstanceID;
    /**
     * Fully Qualified Domain Name identification hint.
     */
    fqdn?: BoundedString;
    /**
     * Hostname identification hint.
     */
    hostname?: BoundedString;
    /**
     * vCenter VM path identification hint.
     */
    vmWareUuid?: BoundedString;
  }
  export interface InitializeServiceRequest {
  }
  export interface InitializeServiceResponse {
  }
  export type InitiatedBy = "START_RECOVERY"|"START_DRILL"|"FAILBACK"|"DIAGNOSTIC"|"TERMINATE_RECOVERY_INSTANCES"|string;
  export interface Job {
    /**
     * The ARN of a Job.
     */
    arn?: ARN;
    /**
     * The date and time of when the Job was created.
     */
    creationDateTime?: ISO8601DatetimeString;
    /**
     * The date and time of when the Job ended.
     */
    endDateTime?: ISO8601DatetimeString;
    /**
     * A string representing who initiated the Job.
     */
    initiatedBy?: InitiatedBy;
    /**
     * The ID of the Job.
     */
    jobID: JobID;
    /**
     * A list of servers that the Job is acting upon.
     */
    participatingServers?: ParticipatingServers;
    /**
     * The status of the Job.
     */
    status?: JobStatus;
    /**
     * A list of tags associated with the Job.
     */
    tags?: TagsMap;
    /**
     * The type of the Job.
     */
    type?: JobType;
  }
  export type JobID = string;
  export interface JobLog {
    /**
     * The event represents the type of a log.
     */
    event?: JobLogEvent;
    /**
     * Metadata associated with a Job log.
     */
    eventData?: JobLogEventData;
    /**
     * The date and time the log was taken.
     */
    logDateTime?: ISO8601DatetimeString;
  }
  export type JobLogEvent = "JOB_START"|"SERVER_SKIPPED"|"CLEANUP_START"|"CLEANUP_END"|"CLEANUP_FAIL"|"SNAPSHOT_START"|"SNAPSHOT_END"|"SNAPSHOT_FAIL"|"USING_PREVIOUS_SNAPSHOT"|"USING_PREVIOUS_SNAPSHOT_FAILED"|"CONVERSION_START"|"CONVERSION_END"|"CONVERSION_FAIL"|"LAUNCH_START"|"LAUNCH_FAILED"|"JOB_CANCEL"|"JOB_END"|string;
  export interface JobLogEventData {
    /**
     * The ID of a conversion server.
     */
    conversionServerID?: EC2InstanceID;
    /**
     * A string representing a job error.
     */
    rawError?: LargeBoundedString;
    /**
     * The ID of a Source Server.
     */
    sourceServerID?: SourceServerID;
    /**
     * The ID of a Recovery Instance.
     */
    targetInstanceID?: EC2InstanceID;
  }
  export type JobLogs = JobLog[];
  export type JobStatus = "PENDING"|"STARTED"|"COMPLETED"|string;
  export type JobType = "LAUNCH"|"TERMINATE"|string;
  export type JobsList = Job[];
  export type LargeBoundedString = string;
  export type LastLaunchResult = "NOT_STARTED"|"PENDING"|"SUCCEEDED"|"FAILED"|string;
  export type LastLaunchType = "RECOVERY"|"DRILL"|string;
  export interface LaunchConfiguration {
    /**
     * Whether we should copy the Private IP of the Source Server to the Recovery Instance.
     */
    copyPrivateIp?: Boolean;
    /**
     * Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.
     */
    copyTags?: Boolean;
    /**
     * The EC2 launch template ID of this launch configuration.
     */
    ec2LaunchTemplateID?: BoundedString;
    /**
     * The state of the Recovery Instance in EC2 after the recovery operation.
     */
    launchDisposition?: LaunchDisposition;
    /**
     * The licensing configuration to be used for this launch configuration.
     */
    licensing?: Licensing;
    /**
     * The name of the launch configuration.
     */
    name?: SmallBoundedString;
    /**
     * The ID of the Source Server for this launch configuration.
     */
    sourceServerID?: SourceServerID;
    /**
     * Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.
     */
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
  }
  export type LaunchDisposition = "STOPPED"|"STARTED"|string;
  export type LaunchStatus = "PENDING"|"IN_PROGRESS"|"LAUNCHED"|"FAILED"|"TERMINATED"|string;
  export interface Licensing {
    /**
     * Whether to enable "Bring your own license" or not.
     */
    osByol?: Boolean;
  }
  export interface LifeCycle {
    /**
     * The date and time of when the Source Server was added to the service.
     */
    addedToServiceDateTime?: ISO8601DatetimeString;
    /**
     * The amount of time that the Source Server has been replicating for.
     */
    elapsedReplicationDuration?: ISO8601DatetimeString;
    /**
     * The date and time of the first byte that was replicated from the Source Server.
     */
    firstByteDateTime?: ISO8601DatetimeString;
    /**
     * An object containing information regarding the last launch of the Source Server.
     */
    lastLaunch?: LifeCycleLastLaunch;
    /**
     * The date and time this Source Server was last seen by the service.
     */
    lastSeenByServiceDateTime?: ISO8601DatetimeString;
  }
  export interface LifeCycleLastLaunch {
    /**
     * An object containing information regarding the initiation of the last launch of a Source Server.
     */
    initiated?: LifeCycleLastLaunchInitiated;
  }
  export interface LifeCycleLastLaunchInitiated {
    /**
     * The date and time the last Source Server launch was initiated.
     */
    apiCallDateTime?: ISO8601DatetimeString;
    /**
     * The ID of the Job that was used to last launch the Source Server.
     */
    jobID?: JobID;
    /**
     * The Job type that was used to last launch the Source Server.
     */
    type?: LastLaunchType;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource whose tags should be returned.
     */
    resourceArn: ARN;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags of the requested resource.
     */
    tags?: TagsMap;
  }
  export interface NetworkInterface {
    /**
     * Network interface IPs.
     */
    ips?: IPsList;
    /**
     * Whether this is the primary network interface.
     */
    isPrimary?: Boolean;
    /**
     * The MAC address of the network interface.
     */
    macAddress?: BoundedString;
  }
  export type NetworkInterfaces = NetworkInterface[];
  export interface OS {
    /**
     * The long name of the Operating System.
     */
    fullString?: BoundedString;
  }
  export type PITPolicy = PITPolicyRule[];
  export interface PITPolicyRule {
    /**
     * Whether this rule is enabled or not.
     */
    enabled?: Boolean;
    /**
     * How often, in the chosen units, a snapshot should be taken.
     */
    interval: StrictlyPositiveInteger;
    /**
     * The duration to retain a snapshot for, in the chosen units.
     */
    retentionDuration: StrictlyPositiveInteger;
    /**
     * The ID of the rule.
     */
    ruleID?: PositiveInteger;
    /**
     * The units used to measure the interval and retentionDuration.
     */
    units: PITPolicyRuleUnits;
  }
  export type PITPolicyRuleUnits = "MINUTE"|"HOUR"|"DAY"|string;
  export type PaginationToken = string;
  export interface ParticipatingServer {
    /**
     * The launch status of a participating server.
     */
    launchStatus?: LaunchStatus;
    /**
     * The Recovery Instance ID of a participating server.
     */
    recoveryInstanceID?: RecoveryInstanceID;
    /**
     * The Source Server ID of a participating server.
     */
    sourceServerID?: SourceServerID;
  }
  export type ParticipatingServers = ParticipatingServer[];
  export type PositiveInteger = number;
  export interface RecoveryInstance {
    /**
     * The ARN of the Recovery Instance.
     */
    arn?: ARN;
    /**
     * The Data Replication Info of the Recovery Instance.
     */
    dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;
    /**
     * The EC2 instance ID of the Recovery Instance.
     */
    ec2InstanceID?: EC2InstanceID;
    /**
     * The state of the EC2 instance for this Recovery Instance.
     */
    ec2InstanceState?: EC2InstanceState;
    /**
     * An object representing failback related information of the Recovery Instance.
     */
    failback?: RecoveryInstanceFailback;
    /**
     * Whether this Recovery Instance was created for a drill or for an actual Recovery event.
     */
    isDrill?: Boolean;
    /**
     * The ID of the Job that created the Recovery Instance.
     */
    jobID?: JobID;
    /**
     * The date and time of the Point in Time (PIT) snapshot that this Recovery Instance was launched from.
     */
    pointInTimeSnapshotDateTime?: ISO8601DatetimeString;
    /**
     * The ID of the Recovery Instance.
     */
    recoveryInstanceID?: RecoveryInstanceID;
    /**
     * Properties of the Recovery Instance machine.
     */
    recoveryInstanceProperties?: RecoveryInstanceProperties;
    /**
     * The Source Server ID that this Recovery Instance is associated with.
     */
    sourceServerID?: SourceServerID;
    /**
     * An array of tags that are associated with the Recovery Instance.
     */
    tags?: TagsMap;
  }
  export interface RecoveryInstanceDataReplicationError {
    /**
     * Error in data replication.
     */
    error?: FailbackReplicationError;
    /**
     * Error in data replication.
     */
    rawError?: LargeBoundedString;
  }
  export interface RecoveryInstanceDataReplicationInfo {
    /**
     * Information about Data Replication
     */
    dataReplicationError?: RecoveryInstanceDataReplicationError;
    /**
     * Information about whether the data replication has been initiated.
     */
    dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;
    /**
     * The state of the data replication.
     */
    dataReplicationState?: RecoveryInstanceDataReplicationState;
    /**
     * An estimate of when the data replication will be completed.
     */
    etaDateTime?: ISO8601DatetimeString;
    /**
     * Data replication lag duration.
     */
    lagDuration?: ISO8601DatetimeString;
    /**
     * The disks that should be replicated.
     */
    replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisks;
  }
  export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
    /**
     * The size of the replication backlog in bytes.
     */
    backloggedStorageBytes?: PositiveInteger;
    /**
     * The name of the device.
     */
    deviceName?: BoundedString;
    /**
     * The amount of data replicated so far in bytes.
     */
    replicatedStorageBytes?: PositiveInteger;
    /**
     * The amount of data to be rescanned in bytes.
     */
    rescannedStorageBytes?: PositiveInteger;
    /**
     * The total amount of data to be replicated in bytes.
     */
    totalStorageBytes?: PositiveInteger;
  }
  export type RecoveryInstanceDataReplicationInfoReplicatedDisks = RecoveryInstanceDataReplicationInfoReplicatedDisk[];
  export interface RecoveryInstanceDataReplicationInitiation {
    /**
     * The date and time of the current attempt to initiate data replication.
     */
    startDateTime?: ISO8601DatetimeString;
    /**
     * The steps of the current attempt to initiate data replication.
     */
    steps?: RecoveryInstanceDataReplicationInitiationSteps;
  }
  export interface RecoveryInstanceDataReplicationInitiationStep {
    /**
     * The name of the step.
     */
    name?: RecoveryInstanceDataReplicationInitiationStepName;
    /**
     * The status of the step.
     */
    status?: RecoveryInstanceDataReplicationInitiationStepStatus;
  }
  export type RecoveryInstanceDataReplicationInitiationStepName = "LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE"|"COMPLETE_VOLUME_MAPPING"|"ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION"|"DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT"|"CONFIGURE_REPLICATION_SOFTWARE"|"PAIR_AGENT_WITH_REPLICATION_SOFTWARE"|"ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION"|string;
  export type RecoveryInstanceDataReplicationInitiationStepStatus = "NOT_STARTED"|"IN_PROGRESS"|"SUCCEEDED"|"FAILED"|"SKIPPED"|string;
  export type RecoveryInstanceDataReplicationInitiationSteps = RecoveryInstanceDataReplicationInitiationStep[];
  export type RecoveryInstanceDataReplicationState = "STOPPED"|"INITIATING"|"INITIAL_SYNC"|"BACKLOG"|"CREATING_SNAPSHOT"|"CONTINUOUS"|"PAUSED"|"RESCAN"|"STALLED"|"DISCONNECTED"|string;
  export interface RecoveryInstanceDisk {
    /**
     * The amount of storage on the disk in bytes.
     */
    bytes?: PositiveInteger;
    /**
     * The EBS Volume ID of this disk.
     */
    ebsVolumeID?: EbsVolumeID;
    /**
     * The internal device name of this disk. This is the name that is visible on the machine itself and not from the EC2 console.
     */
    internalDeviceName?: BoundedString;
  }
  export type RecoveryInstanceDisks = RecoveryInstanceDisk[];
  export interface RecoveryInstanceFailback {
    /**
     * The date and time the agent on the Recovery Instance was last seen by the service.
     */
    agentLastSeenByServiceDateTime?: ISO8601DatetimeString;
    /**
     * The amount of time that the Recovery Instance has been replicating for.
     */
    elapsedReplicationDuration?: ISO8601DatetimeString;
    /**
     * The ID of the failback client that this Recovery Instance is associated with.
     */
    failbackClientID?: BoundedString;
    /**
     * The date and time that the failback client was last seen by the service.
     */
    failbackClientLastSeenByServiceDateTime?: ISO8601DatetimeString;
    /**
     * The date and time that the failback initiation started.
     */
    failbackInitiationTime?: ISO8601DatetimeString;
    /**
     * The Job ID of the last failback log for this Recovery Instance.
     */
    failbackJobID?: JobID;
    /**
     * Whether we are failing back to the original Source Server for this Recovery Instance.
     */
    failbackToOriginalServer?: Boolean;
    /**
     * The date and time of the first byte that was replicated from the Recovery Instance.
     */
    firstByteDateTime?: ISO8601DatetimeString;
    /**
     * The state of the failback process that this Recovery Instance is in.
     */
    state?: FailbackState;
  }
  export type RecoveryInstanceID = string;
  export type RecoveryInstanceIDs = RecoveryInstanceID[];
  export interface RecoveryInstanceProperties {
    /**
     * An array of CPUs.
     */
    cpus?: Cpus;
    /**
     * An array of disks.
     */
    disks?: RecoveryInstanceDisks;
    /**
     * Hints used to uniquely identify a machine.
     */
    identificationHints?: IdentificationHints;
    /**
     * The date and time the Recovery Instance properties were last updated on.
     */
    lastUpdatedDateTime?: ISO8601DatetimeString;
    /**
     * An array of network interfaces.
     */
    networkInterfaces?: NetworkInterfaces;
    /**
     * Operating system.
     */
    os?: OS;
    /**
     * The amount of RAM in bytes.
     */
    ramBytes?: PositiveInteger;
  }
  export type RecoveryInstancesForTerminationRequest = RecoveryInstanceID[];
  export interface RecoverySnapshot {
    /**
     * A list of EBS snapshots.
     */
    ebsSnapshots?: EbsSnapshotsList;
    /**
     * The timestamp of when we expect the snapshot to be taken.
     */
    expectedTimestamp: ISO8601DatetimeString;
    /**
     * The ID of the Recovery Snapshot.
     */
    snapshotID: RecoverySnapshotID;
    /**
     * The ID of the Source Server that the snapshot was taken for.
     */
    sourceServerID: SourceServerID;
    /**
     * The actual timestamp that the snapshot was taken.
     */
    timestamp?: ISO8601DatetimeString;
  }
  export type RecoverySnapshotID = string;
  export type RecoverySnapshotsList = RecoverySnapshot[];
  export type RecoverySnapshotsOrder = "ASC"|"DESC"|string;
  export interface ReplicationConfiguration {
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP?: Boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * The name of the Replication Configuration.
     */
    name?: SmallBoundedString;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy?: PITPolicy;
    /**
     * The configuration of the disks of the Source Server to be replicated.
     */
    replicatedDisks?: ReplicationConfigurationReplicatedDisks;
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * The ID of the Source Server for this Replication Configuration.
     */
    sourceServerID?: SourceServerID;
    /**
     * The subnet to be used by the replication staging area.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
     */
    stagingAreaTags?: TagsMap;
    /**
     * Whether to use a dedicated Replication Server in the replication staging area.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export type ReplicationConfigurationDataPlaneRouting = "PRIVATE_IP"|"PUBLIC_IP"|string;
  export type ReplicationConfigurationDefaultLargeStagingDiskType = "GP2"|"GP3"|"ST1"|string;
  export type ReplicationConfigurationEbsEncryption = "DEFAULT"|"CUSTOM"|string;
  export interface ReplicationConfigurationReplicatedDisk {
    /**
     * The name of the device.
     */
    deviceName?: BoundedString;
    /**
     * The requested number of I/O operations per second (IOPS).
     */
    iops?: PositiveInteger;
    /**
     * Whether to boot from this disk or not.
     */
    isBootDisk?: Boolean;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;
    /**
     * The throughput to use for the EBS volume in MiB/s. This parameter is valid only for gp3 volumes.
     */
    throughput?: PositiveInteger;
  }
  export type ReplicationConfigurationReplicatedDiskStagingDiskType = "AUTO"|"GP2"|"GP3"|"IO1"|"SC1"|"ST1"|"STANDARD"|string;
  export type ReplicationConfigurationReplicatedDisks = ReplicationConfigurationReplicatedDisk[];
  export interface ReplicationConfigurationTemplate {
    /**
     * The Replication Configuration Template ARN.
     */
    arn?: ARN;
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP?: Boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy?: PITPolicy;
    /**
     * The Replication Configuration Template ID.
     */
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateID;
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * The subnet to be used by the replication staging area.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
     */
    stagingAreaTags?: TagsMap;
    /**
     * A set of tags to be associated with the Replication Configuration Template resource.
     */
    tags?: TagsMap;
    /**
     * Whether to use a dedicated Replication Server in the replication staging area.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export type ReplicationConfigurationTemplateID = string;
  export type ReplicationConfigurationTemplateIDs = ReplicationConfigurationTemplateID[];
  export type ReplicationConfigurationTemplates = ReplicationConfigurationTemplate[];
  export type ReplicationServersSecurityGroupsIDs = SecurityGroupID[];
  export interface RetryDataReplicationRequest {
    /**
     * The ID of the Source Server whose data replication should be retried.
     */
    sourceServerID: SourceServerID;
  }
  export type SecurityGroupID = string;
  export type SmallBoundedString = string;
  export interface SourceProperties {
    /**
     * An array of CPUs.
     */
    cpus?: Cpus;
    /**
     * An array of disks.
     */
    disks?: Disks;
    /**
     * Hints used to uniquely identify a machine.
     */
    identificationHints?: IdentificationHints;
    /**
     * The date and time the Source Properties were last updated on.
     */
    lastUpdatedDateTime?: ISO8601DatetimeString;
    /**
     * An array of network interfaces.
     */
    networkInterfaces?: NetworkInterfaces;
    /**
     * Operating system.
     */
    os?: OS;
    /**
     * The amount of RAM in bytes.
     */
    ramBytes?: PositiveInteger;
    /**
     * The recommended EC2 instance type that will be used when recovering the Source Server.
     */
    recommendedInstanceType?: EC2InstanceType;
  }
  export interface SourceServer {
    /**
     * The ARN of the Source Server.
     */
    arn?: ARN;
    /**
     * The Data Replication Info of the Source Server.
     */
    dataReplicationInfo?: DataReplicationInfo;
    /**
     * The status of the last recovery launch of this Source Server.
     */
    lastLaunchResult?: LastLaunchResult;
    /**
     * The lifecycle information of this Source Server.
     */
    lifeCycle?: LifeCycle;
    /**
     * The ID of the Recovery Instance associated with this Source Server.
     */
    recoveryInstanceId?: RecoveryInstanceID;
    /**
     * The source properties of the Source Server.
     */
    sourceProperties?: SourceProperties;
    /**
     * The ID of the Source Server.
     */
    sourceServerID?: SourceServerID;
    /**
     * The tags associated with the Source Server.
     */
    tags?: TagsMap;
  }
  export type SourceServerID = string;
  export type SourceServerIDs = SourceServerID[];
  export type SourceServersList = SourceServer[];
  export interface StartFailbackLaunchRequest {
    /**
     * The IDs of the Recovery Instance whose failback launch we want to request.
     */
    recoveryInstanceIDs: StartFailbackRequestRecoveryInstanceIDs;
    /**
     * The tags to be associated with the failback launch Job.
     */
    tags?: TagsMap;
  }
  export interface StartFailbackLaunchResponse {
    /**
     * The failback launch Job.
     */
    job?: Job;
  }
  export type StartFailbackRequestRecoveryInstanceIDs = RecoveryInstanceID[];
  export interface StartRecoveryRequest {
    /**
     * Whether this Source Server Recovery operation is a drill or not.
     */
    isDrill?: Boolean;
    /**
     * The Source Servers that we want to start a Recovery Job for.
     */
    sourceServers: StartRecoveryRequestSourceServers;
    /**
     * The tags to be associated with the Recovery Job.
     */
    tags?: TagsMap;
  }
  export interface StartRecoveryRequestSourceServer {
    /**
     * The ID of a Recovery Snapshot we want to recover from. Omit this field to launch from the latest data by taking an on-demand snapshot.
     */
    recoverySnapshotID?: RecoverySnapshotID;
    /**
     * The ID of the Source Server you want to recover.
     */
    sourceServerID: SourceServerID;
  }
  export type StartRecoveryRequestSourceServers = StartRecoveryRequestSourceServer[];
  export interface StartRecoveryResponse {
    /**
     * The Recovery Job.
     */
    job?: Job;
  }
  export interface StopFailbackRequest {
    /**
     * The ID of the Recovery Instance we want to stop failback for.
     */
    recoveryInstanceID: RecoveryInstanceID;
  }
  export type StrictlyPositiveInteger = number;
  export type SubnetID = string;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * ARN of the resource for which tags are to be added or updated.
     */
    resourceArn: ARN;
    /**
     * Array of tags to be added or updated.
     */
    tags: TagsMap;
  }
  export type TagValue = string;
  export type TagsMap = {[key: string]: TagValue};
  export type TargetInstanceTypeRightSizingMethod = "NONE"|"BASIC"|string;
  export interface TerminateRecoveryInstancesRequest {
    /**
     * The IDs of the Recovery Instances that should be terminated.
     */
    recoveryInstanceIDs: RecoveryInstancesForTerminationRequest;
  }
  export interface TerminateRecoveryInstancesResponse {
    /**
     * The Job for terminating the Recovery Instances.
     */
    job?: Job;
  }
  export interface UntagResourceRequest {
    /**
     * ARN of the resource for which tags are to be removed.
     */
    resourceArn: ARN;
    /**
     * Array of tags to be removed.
     */
    tagKeys: TagKeys;
  }
  export interface UpdateFailbackReplicationConfigurationRequest {
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * The name of the Failback Replication Configuration.
     */
    name?: BoundedString;
    /**
     * The ID of the Recovery Instance.
     */
    recoveryInstanceID: RecoveryInstanceID;
    /**
     * Whether to use Private IP for the failback replication of the Recovery Instance.
     */
    usePrivateIP?: Boolean;
  }
  export interface UpdateLaunchConfigurationRequest {
    /**
     * Whether we should copy the Private IP of the Source Server to the Recovery Instance.
     */
    copyPrivateIp?: Boolean;
    /**
     * Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.
     */
    copyTags?: Boolean;
    /**
     * The state of the Recovery Instance in EC2 after the recovery operation.
     */
    launchDisposition?: LaunchDisposition;
    /**
     * The licensing configuration to be used for this launch configuration.
     */
    licensing?: Licensing;
    /**
     * The name of the launch configuration.
     */
    name?: SmallBoundedString;
    /**
     * The ID of the Source Server that we want to retrieve a Launch Configuration for.
     */
    sourceServerID: SourceServerID;
    /**
     * Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.
     */
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
  }
  export interface UpdateReplicationConfigurationRequest {
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP?: Boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * The name of the Replication Configuration.
     */
    name?: SmallBoundedString;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy?: PITPolicy;
    /**
     * The configuration of the disks of the Source Server to be replicated.
     */
    replicatedDisks?: ReplicationConfigurationReplicatedDisks;
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * The ID of the Source Server for this Replication Configuration.
     */
    sourceServerID: SourceServerID;
    /**
     * The subnet to be used by the replication staging area.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
     */
    stagingAreaTags?: TagsMap;
    /**
     * Whether to use a dedicated Replication Server in the replication staging area.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export interface UpdateReplicationConfigurationTemplateRequest {
    /**
     * The Replication Configuration Template ARN.
     */
    arn?: ARN;
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP?: Boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy?: PITPolicy;
    /**
     * The Replication Configuration Template ID.
     */
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateID;
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * The subnet to be used by the replication staging area.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
     */
    stagingAreaTags?: TagsMap;
    /**
     * Whether to use a dedicated Replication Server in the replication staging area.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export type ebsSnapshot = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-02-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Drs client.
   */
  export import Types = Drs;
}
export = Drs;
