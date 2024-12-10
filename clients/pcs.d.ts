import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class PCS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PCS.Types.ClientConfiguration)
  config: Config & PCS.Types.ClientConfiguration;
  /**
   * Creates a cluster in your account. Amazon Web Services PCS creates the cluster controller in a service-owned account. The cluster controller communicates with the cluster resources in your account. The subnets and security groups for the cluster must already exist before you use this API action.  It takes time for Amazon Web Services PCS to create the cluster. The cluster is in a Creating state until it is ready to use. There can only be 1 cluster in a Creating state per Amazon Web Services Region per Amazon Web Services account. CreateCluster fails with a ServiceQuotaExceededException if there is already a cluster in a Creating state. 
   */
  createCluster(params: PCS.Types.CreateClusterRequest, callback?: (err: AWSError, data: PCS.Types.CreateClusterResponse) => void): Request<PCS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a cluster in your account. Amazon Web Services PCS creates the cluster controller in a service-owned account. The cluster controller communicates with the cluster resources in your account. The subnets and security groups for the cluster must already exist before you use this API action.  It takes time for Amazon Web Services PCS to create the cluster. The cluster is in a Creating state until it is ready to use. There can only be 1 cluster in a Creating state per Amazon Web Services Region per Amazon Web Services account. CreateCluster fails with a ServiceQuotaExceededException if there is already a cluster in a Creating state. 
   */
  createCluster(callback?: (err: AWSError, data: PCS.Types.CreateClusterResponse) => void): Request<PCS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a managed set of compute nodes. You associate a compute node group with a cluster through 1 or more Amazon Web Services PCS queues or as part of the login fleet. A compute node group includes the definition of the compute properties and lifecycle management. Amazon Web Services PCS uses the information you provide to this API action to launch compute nodes in your account. You can only specify subnets in the same Amazon VPC as your cluster. You receive billing charges for the compute nodes that Amazon Web Services PCS launches in your account. You must already have a launch template before you call this API. For more information, see Launch an instance from a launch template in the Amazon Elastic Compute Cloud User Guide for Linux Instances.
   */
  createComputeNodeGroup(params: PCS.Types.CreateComputeNodeGroupRequest, callback?: (err: AWSError, data: PCS.Types.CreateComputeNodeGroupResponse) => void): Request<PCS.Types.CreateComputeNodeGroupResponse, AWSError>;
  /**
   * Creates a managed set of compute nodes. You associate a compute node group with a cluster through 1 or more Amazon Web Services PCS queues or as part of the login fleet. A compute node group includes the definition of the compute properties and lifecycle management. Amazon Web Services PCS uses the information you provide to this API action to launch compute nodes in your account. You can only specify subnets in the same Amazon VPC as your cluster. You receive billing charges for the compute nodes that Amazon Web Services PCS launches in your account. You must already have a launch template before you call this API. For more information, see Launch an instance from a launch template in the Amazon Elastic Compute Cloud User Guide for Linux Instances.
   */
  createComputeNodeGroup(callback?: (err: AWSError, data: PCS.Types.CreateComputeNodeGroupResponse) => void): Request<PCS.Types.CreateComputeNodeGroupResponse, AWSError>;
  /**
   * Creates a job queue. You must associate 1 or more compute node groups with the queue. You can associate 1 compute node group with multiple queues.
   */
  createQueue(params: PCS.Types.CreateQueueRequest, callback?: (err: AWSError, data: PCS.Types.CreateQueueResponse) => void): Request<PCS.Types.CreateQueueResponse, AWSError>;
  /**
   * Creates a job queue. You must associate 1 or more compute node groups with the queue. You can associate 1 compute node group with multiple queues.
   */
  createQueue(callback?: (err: AWSError, data: PCS.Types.CreateQueueResponse) => void): Request<PCS.Types.CreateQueueResponse, AWSError>;
  /**
   * Deletes a cluster and all its linked resources. You must delete all queues and compute node groups associated with the cluster before you can delete the cluster.
   */
  deleteCluster(params: PCS.Types.DeleteClusterRequest, callback?: (err: AWSError, data: PCS.Types.DeleteClusterResponse) => void): Request<PCS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes a cluster and all its linked resources. You must delete all queues and compute node groups associated with the cluster before you can delete the cluster.
   */
  deleteCluster(callback?: (err: AWSError, data: PCS.Types.DeleteClusterResponse) => void): Request<PCS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes a compute node group. You must delete all queues associated with the compute node group first.
   */
  deleteComputeNodeGroup(params: PCS.Types.DeleteComputeNodeGroupRequest, callback?: (err: AWSError, data: PCS.Types.DeleteComputeNodeGroupResponse) => void): Request<PCS.Types.DeleteComputeNodeGroupResponse, AWSError>;
  /**
   * Deletes a compute node group. You must delete all queues associated with the compute node group first.
   */
  deleteComputeNodeGroup(callback?: (err: AWSError, data: PCS.Types.DeleteComputeNodeGroupResponse) => void): Request<PCS.Types.DeleteComputeNodeGroupResponse, AWSError>;
  /**
   * Deletes a job queue. If the compute node group associated with this queue isn't associated with any other queues, Amazon Web Services PCS terminates all the compute nodes for this queue.
   */
  deleteQueue(params: PCS.Types.DeleteQueueRequest, callback?: (err: AWSError, data: PCS.Types.DeleteQueueResponse) => void): Request<PCS.Types.DeleteQueueResponse, AWSError>;
  /**
   * Deletes a job queue. If the compute node group associated with this queue isn't associated with any other queues, Amazon Web Services PCS terminates all the compute nodes for this queue.
   */
  deleteQueue(callback?: (err: AWSError, data: PCS.Types.DeleteQueueResponse) => void): Request<PCS.Types.DeleteQueueResponse, AWSError>;
  /**
   * Returns detailed information about a running cluster in your account. This API action provides networking information, endpoint information for communication with the scheduler, and provisioning status.
   */
  getCluster(params: PCS.Types.GetClusterRequest, callback?: (err: AWSError, data: PCS.Types.GetClusterResponse) => void): Request<PCS.Types.GetClusterResponse, AWSError>;
  /**
   * Returns detailed information about a running cluster in your account. This API action provides networking information, endpoint information for communication with the scheduler, and provisioning status.
   */
  getCluster(callback?: (err: AWSError, data: PCS.Types.GetClusterResponse) => void): Request<PCS.Types.GetClusterResponse, AWSError>;
  /**
   * Returns detailed information about a compute node group. This API action provides networking information, EC2 instance type, compute node group status, and scheduler (such as Slurm) configuration.
   */
  getComputeNodeGroup(params: PCS.Types.GetComputeNodeGroupRequest, callback?: (err: AWSError, data: PCS.Types.GetComputeNodeGroupResponse) => void): Request<PCS.Types.GetComputeNodeGroupResponse, AWSError>;
  /**
   * Returns detailed information about a compute node group. This API action provides networking information, EC2 instance type, compute node group status, and scheduler (such as Slurm) configuration.
   */
  getComputeNodeGroup(callback?: (err: AWSError, data: PCS.Types.GetComputeNodeGroupResponse) => void): Request<PCS.Types.GetComputeNodeGroupResponse, AWSError>;
  /**
   * Returns detailed information about a queue. The information includes the compute node groups that the queue uses to schedule jobs.
   */
  getQueue(params: PCS.Types.GetQueueRequest, callback?: (err: AWSError, data: PCS.Types.GetQueueResponse) => void): Request<PCS.Types.GetQueueResponse, AWSError>;
  /**
   * Returns detailed information about a queue. The information includes the compute node groups that the queue uses to schedule jobs.
   */
  getQueue(callback?: (err: AWSError, data: PCS.Types.GetQueueResponse) => void): Request<PCS.Types.GetQueueResponse, AWSError>;
  /**
   * Returns a list of running clusters in your account.
   */
  listClusters(params: PCS.Types.ListClustersRequest, callback?: (err: AWSError, data: PCS.Types.ListClustersResponse) => void): Request<PCS.Types.ListClustersResponse, AWSError>;
  /**
   * Returns a list of running clusters in your account.
   */
  listClusters(callback?: (err: AWSError, data: PCS.Types.ListClustersResponse) => void): Request<PCS.Types.ListClustersResponse, AWSError>;
  /**
   * Returns a list of all compute node groups associated with a cluster.
   */
  listComputeNodeGroups(params: PCS.Types.ListComputeNodeGroupsRequest, callback?: (err: AWSError, data: PCS.Types.ListComputeNodeGroupsResponse) => void): Request<PCS.Types.ListComputeNodeGroupsResponse, AWSError>;
  /**
   * Returns a list of all compute node groups associated with a cluster.
   */
  listComputeNodeGroups(callback?: (err: AWSError, data: PCS.Types.ListComputeNodeGroupsResponse) => void): Request<PCS.Types.ListComputeNodeGroupsResponse, AWSError>;
  /**
   * Returns a list of all queues associated with a cluster.
   */
  listQueues(params: PCS.Types.ListQueuesRequest, callback?: (err: AWSError, data: PCS.Types.ListQueuesResponse) => void): Request<PCS.Types.ListQueuesResponse, AWSError>;
  /**
   * Returns a list of all queues associated with a cluster.
   */
  listQueues(callback?: (err: AWSError, data: PCS.Types.ListQueuesResponse) => void): Request<PCS.Types.ListQueuesResponse, AWSError>;
  /**
   * Returns a list of all tags on an Amazon Web Services PCS resource.
   */
  listTagsForResource(params: PCS.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: PCS.Types.ListTagsForResourceResponse) => void): Request<PCS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of all tags on an Amazon Web Services PCS resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: PCS.Types.ListTagsForResourceResponse) => void): Request<PCS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  This API action isn't intended for you to use.  Amazon Web Services PCS uses this API action to register the compute nodes it launches in your account.
   */
  registerComputeNodeGroupInstance(params: PCS.Types.RegisterComputeNodeGroupInstanceRequest, callback?: (err: AWSError, data: PCS.Types.RegisterComputeNodeGroupInstanceResponse) => void): Request<PCS.Types.RegisterComputeNodeGroupInstanceResponse, AWSError>;
  /**
   *  This API action isn't intended for you to use.  Amazon Web Services PCS uses this API action to register the compute nodes it launches in your account.
   */
  registerComputeNodeGroupInstance(callback?: (err: AWSError, data: PCS.Types.RegisterComputeNodeGroupInstanceResponse) => void): Request<PCS.Types.RegisterComputeNodeGroupInstanceResponse, AWSError>;
  /**
   * Adds or edits tags on an Amazon Web Services PCS resource. Each tag consists of a tag key and a tag value. The tag key and tag value are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.
   */
  tagResource(params: PCS.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or edits tags on an Amazon Web Services PCS resource. Each tag consists of a tag key and a tag value. The tag key and tag value are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes tags from an Amazon Web Services PCS resource. To delete a tag, specify the tag key and the Amazon Resource Name (ARN) of the Amazon Web Services PCS resource.
   */
  untagResource(params: PCS.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes tags from an Amazon Web Services PCS resource. To delete a tag, specify the tag key and the Amazon Resource Name (ARN) of the Amazon Web Services PCS resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a compute node group. You can update many of the fields related to your compute node group including the configurations for networking, compute nodes, and settings specific to your scheduler (such as Slurm).
   */
  updateComputeNodeGroup(params: PCS.Types.UpdateComputeNodeGroupRequest, callback?: (err: AWSError, data: PCS.Types.UpdateComputeNodeGroupResponse) => void): Request<PCS.Types.UpdateComputeNodeGroupResponse, AWSError>;
  /**
   * Updates a compute node group. You can update many of the fields related to your compute node group including the configurations for networking, compute nodes, and settings specific to your scheduler (such as Slurm).
   */
  updateComputeNodeGroup(callback?: (err: AWSError, data: PCS.Types.UpdateComputeNodeGroupResponse) => void): Request<PCS.Types.UpdateComputeNodeGroupResponse, AWSError>;
  /**
   * Updates the compute node group configuration of a queue. Use this API to change the compute node groups that the queue can send jobs to.
   */
  updateQueue(params: PCS.Types.UpdateQueueRequest, callback?: (err: AWSError, data: PCS.Types.UpdateQueueResponse) => void): Request<PCS.Types.UpdateQueueResponse, AWSError>;
  /**
   * Updates the compute node group configuration of a queue. Use this API to change the compute node groups that the queue can send jobs to.
   */
  updateQueue(callback?: (err: AWSError, data: PCS.Types.UpdateQueueResponse) => void): Request<PCS.Types.UpdateQueueResponse, AWSError>;
}
declare namespace PCS {
  export type AmiId = string;
  export type Arn = string;
  export type BootstrapId = string;
  export interface Cluster {
    /**
     * The name that identifies the cluster.
     */
    name: String;
    /**
     * The generated unique ID of the cluster.
     */
    id: String;
    /**
     * The unique Amazon Resource Name (ARN) of the cluster.
     */
    arn: String;
    /**
     * The provisioning status of the cluster.  The provisioning status doesn't indicate the overall health of the cluster. 
     */
    status: ClusterStatus;
    /**
     * The date and time the resource was created.
     */
    createdAt: SyntheticTimestamp_date_time;
    /**
     * The date and time the resource was modified.
     */
    modifiedAt: SyntheticTimestamp_date_time;
    scheduler: Scheduler;
    /**
     * The size of the cluster.    SMALL: 32 compute nodes and 256 jobs    MEDIUM: 512 compute nodes and 8192 jobs    LARGE: 2048 compute nodes and 16,384 jobs  
     */
    size: Size;
    /**
     * Additional options related to the Slurm scheduler.
     */
    slurmConfiguration?: ClusterSlurmConfiguration;
    networking: Networking;
    /**
     * The list of endpoints available for interaction with the scheduler.
     */
    endpoints?: Endpoints;
    /**
     * The list of errors that occurred during cluster provisioning.
     */
    errorInfo?: ErrorInfoList;
  }
  export type ClusterIdentifier = string;
  export type ClusterList = ClusterSummary[];
  export type ClusterName = string;
  export interface ClusterSlurmConfiguration {
    /**
     * The time before an idle node is scaled down.
     */
    scaleDownIdleTimeInSeconds?: ClusterSlurmConfigurationScaleDownIdleTimeInSecondsInteger;
    /**
     * Additional Slurm-specific configuration that directly maps to Slurm settings.
     */
    slurmCustomSettings?: SlurmCustomSettings;
    /**
     * The shared Slurm key for authentication, also known as the cluster secret.
     */
    authKey?: SlurmAuthKey;
  }
  export interface ClusterSlurmConfigurationRequest {
    /**
     * The time before an idle node is scaled down.
     */
    scaleDownIdleTimeInSeconds?: ClusterSlurmConfigurationRequestScaleDownIdleTimeInSecondsInteger;
    /**
     * Additional Slurm-specific configuration that directly maps to Slurm settings.
     */
    slurmCustomSettings?: SlurmCustomSettings;
  }
  export type ClusterSlurmConfigurationRequestScaleDownIdleTimeInSecondsInteger = number;
  export type ClusterSlurmConfigurationScaleDownIdleTimeInSecondsInteger = number;
  export type ClusterStatus = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|"UPDATE_FAILED"|string;
  export interface ClusterSummary {
    /**
     * The name that identifies the cluster.
     */
    name: String;
    /**
     * The generated unique ID of the cluster.
     */
    id: String;
    /**
     * The unique Amazon Resource Name (ARN) of the cluster.
     */
    arn: String;
    /**
     * The date and time the resource was created.
     */
    createdAt: SyntheticTimestamp_date_time;
    /**
     * The date and time the resource was modified.
     */
    modifiedAt: SyntheticTimestamp_date_time;
    /**
     * The provisioning status of the cluster.  The provisioning status doesn't indicate the overall health of the cluster. 
     */
    status: ClusterStatus;
  }
  export interface ComputeNodeGroup {
    /**
     * The name that identifies the compute node group.
     */
    name: ComputeNodeGroupName;
    /**
     * The generated unique ID of the compute node group.
     */
    id: String;
    /**
     * The unique Amazon Resource Name (ARN) of the compute node group.
     */
    arn: String;
    /**
     * The ID of the cluster of the compute node group.
     */
    clusterId: String;
    /**
     * The date and time the resource was created.
     */
    createdAt: SyntheticTimestamp_date_time;
    /**
     * The date and time the resource was modified.
     */
    modifiedAt: SyntheticTimestamp_date_time;
    /**
     * The provisioning status of the compute node group.  The provisioning status doesn't indicate the overall health of the compute node group. 
     */
    status: ComputeNodeGroupStatus;
    /**
     * The ID of the Amazon Machine Image (AMI) that Amazon Web Services PCS uses to launch instances. If not provided, Amazon Web Services PCS uses the AMI ID specified in the custom launch template.
     */
    amiId?: AmiId;
    /**
     * The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster.
     */
    subnetIds: SubnetIdList;
    /**
     * Specifies how EC2 instances are purchased on your behalf. Amazon Web Services PCS supports On-Demand and Spot instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.
     */
    purchaseOption?: PurchaseOption;
    customLaunchTemplate: CustomLaunchTemplate;
    /**
     * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly.
     */
    iamInstanceProfileArn: InstanceProfileArn;
    scalingConfiguration: ScalingConfiguration;
    /**
     * A list of EC2 instance configurations that Amazon Web Services PCS can provision in the compute node group.
     */
    instanceConfigs: InstanceList;
    spotOptions?: SpotOptions;
    slurmConfiguration?: ComputeNodeGroupSlurmConfiguration;
    /**
     * The list of errors that occurred during compute node group provisioning.
     */
    errorInfo?: ErrorInfoList;
  }
  export interface ComputeNodeGroupConfiguration {
    /**
     * The compute node group ID for the compute node group configuration.
     */
    computeNodeGroupId?: String;
  }
  export type ComputeNodeGroupConfigurationList = ComputeNodeGroupConfiguration[];
  export type ComputeNodeGroupIdentifier = string;
  export type ComputeNodeGroupList = ComputeNodeGroupSummary[];
  export type ComputeNodeGroupName = string;
  export interface ComputeNodeGroupSlurmConfiguration {
    /**
     * Additional Slurm-specific configuration that directly maps to Slurm settings.
     */
    slurmCustomSettings?: SlurmCustomSettings;
  }
  export interface ComputeNodeGroupSlurmConfigurationRequest {
    /**
     * Additional Slurm-specific configuration that directly maps to Slurm settings.
     */
    slurmCustomSettings?: SlurmCustomSettings;
  }
  export type ComputeNodeGroupStatus = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|"UPDATE_FAILED"|"DELETED"|string;
  export interface ComputeNodeGroupSummary {
    /**
     * The name that identifies the compute node group.
     */
    name: ComputeNodeGroupName;
    /**
     * The generated unique ID of the compute node group.
     */
    id: String;
    /**
     * The unique Amazon Resource Name (ARN) of the compute node group.
     */
    arn: String;
    /**
     * The ID of the cluster of the compute node group.
     */
    clusterId: String;
    /**
     * The date and time the resource was created.
     */
    createdAt: SyntheticTimestamp_date_time;
    /**
     * The date and time the resource was modified.
     */
    modifiedAt: SyntheticTimestamp_date_time;
    /**
     * The provisioning status of the compute node group.  The provisioning status doesn't indicate the overall health of the compute node group. 
     */
    status: ComputeNodeGroupStatus;
  }
  export interface CreateClusterRequest {
    /**
     * A name to identify the cluster. Example: MyCluster 
     */
    clusterName: ClusterName;
    /**
     * The cluster management and job scheduling software associated with the cluster.
     */
    scheduler: SchedulerRequest;
    /**
     * A value that determines the maximum number of compute nodes in the cluster and the maximum number of jobs (active and queued).    SMALL: 32 compute nodes and 256 jobs    MEDIUM: 512 compute nodes and 8192 jobs    LARGE: 2048 compute nodes and 16,384 jobs  
     */
    size: Size;
    /**
     * The networking configuration used to set up the cluster's control plane.
     */
    networking: NetworkingRequest;
    /**
     * Additional options related to the Slurm scheduler.
     */
    slurmConfiguration?: ClusterSlurmConfigurationRequest;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
     */
    clientToken?: SBClientToken;
    /**
     * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
     */
    tags?: RequestTagMap;
  }
  export interface CreateClusterResponse {
    /**
     * The cluster resource.
     */
    cluster?: Cluster;
  }
  export interface CreateComputeNodeGroupRequest {
    /**
     * The name or ID of the cluster to create a compute node group in.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * A name to identify the cluster. Example: MyCluster 
     */
    computeNodeGroupName: ComputeNodeGroupName;
    /**
     *  The ID of the Amazon Machine Image (AMI) that Amazon Web Services PCS uses to launch compute nodes (Amazon EC2 instances). If you don't provide this value, Amazon Web Services PCS uses the AMI ID specified in the custom launch template.
     */
    amiId?: AmiId;
    /**
     * The list of subnet IDs where the compute node group launches instances. Subnets must be in the same VPC as the cluster.
     */
    subnetIds: StringList;
    /**
     * Specifies how EC2 instances are purchased on your behalf. Amazon Web Services PCS supports On-Demand and Spot instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.
     */
    purchaseOption?: PurchaseOption;
    customLaunchTemplate: CustomLaunchTemplate;
    /**
     * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached in order to provision instances correctly. The resource identifier of the ARN must start with AWSPCS. For example, arn:aws:iam:123456789012:instance-profile/AWSPCSMyComputeNodeInstanceProfile. 
     */
    iamInstanceProfileArn: InstanceProfileArn;
    /**
     * Specifies the boundaries of the compute node group auto scaling.
     */
    scalingConfiguration: ScalingConfigurationRequest;
    /**
     * A list of EC2 instance configurations that Amazon Web Services PCS can provision in the compute node group.
     */
    instanceConfigs: InstanceList;
    spotOptions?: SpotOptions;
    /**
     * Additional options related to the Slurm scheduler.
     */
    slurmConfiguration?: ComputeNodeGroupSlurmConfigurationRequest;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
     */
    clientToken?: SBClientToken;
    /**
     * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
     */
    tags?: RequestTagMap;
  }
  export interface CreateComputeNodeGroupResponse {
    computeNodeGroup?: ComputeNodeGroup;
  }
  export interface CreateQueueRequest {
    /**
     * The name or ID of the cluster for which to create a queue.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * A name to identify the queue.
     */
    queueName: QueueName;
    /**
     * The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups.
     */
    computeNodeGroupConfigurations?: ComputeNodeGroupConfigurationList;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
     */
    clientToken?: SBClientToken;
    /**
     * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
     */
    tags?: RequestTagMap;
  }
  export interface CreateQueueResponse {
    queue?: Queue;
  }
  export interface CustomLaunchTemplate {
    /**
     * The ID of the EC2 launch template to use to provision instances.  Example: lt-xxxx 
     */
    id: String;
    /**
     * The version of the EC2 launch template to use to provision instances.
     */
    version: String;
  }
  export interface DeleteClusterRequest {
    /**
     * The name or ID of the cluster to delete.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
     */
    clientToken?: SBClientToken;
  }
  export interface DeleteClusterResponse {
  }
  export interface DeleteComputeNodeGroupRequest {
    /**
     * The name or ID of the cluster of the compute node group.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The name or ID of the compute node group to delete.
     */
    computeNodeGroupIdentifier: ComputeNodeGroupIdentifier;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
     */
    clientToken?: SBClientToken;
  }
  export interface DeleteComputeNodeGroupResponse {
  }
  export interface DeleteQueueRequest {
    /**
     * The name or ID of the cluster of the queue.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The name or ID of the queue to delete.
     */
    queueIdentifier: QueueIdentifier;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
     */
    clientToken?: SBClientToken;
  }
  export interface DeleteQueueResponse {
  }
  export interface Endpoint {
    /**
     * Indicates the type of endpoint running at the specific IP address.
     */
    type: EndpointType;
    /**
     * The endpoint's private IP address. Example: 2.2.2.2 
     */
    privateIpAddress: String;
    /**
     * The endpoint's public IP address. Example: 1.1.1.1 
     */
    publicIpAddress?: String;
    /**
     * The endpoint's connection port number.  Example: 1234 
     */
    port: String;
  }
  export type EndpointType = "SLURMCTLD"|"SLURMDBD"|string;
  export type Endpoints = Endpoint[];
  export interface ErrorInfo {
    /**
     * The short-form error code.
     */
    code?: String;
    /**
     * The detailed error information.
     */
    message?: String;
  }
  export type ErrorInfoList = ErrorInfo[];
  export interface GetClusterRequest {
    /**
     * The name or ID of the cluster of the queue.
     */
    clusterIdentifier: ClusterIdentifier;
  }
  export interface GetClusterResponse {
    /**
     * The cluster resource.
     */
    cluster?: Cluster;
  }
  export interface GetComputeNodeGroupRequest {
    /**
     * The name or ID of the cluster.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The name or ID of the compute node group.
     */
    computeNodeGroupIdentifier: ComputeNodeGroupIdentifier;
  }
  export interface GetComputeNodeGroupResponse {
    computeNodeGroup?: ComputeNodeGroup;
  }
  export interface GetQueueRequest {
    /**
     * The name or ID of the cluster of the queue.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The name or ID of the queue.
     */
    queueIdentifier: QueueIdentifier;
  }
  export interface GetQueueResponse {
    queue?: Queue;
  }
  export interface InstanceConfig {
    /**
     * The EC2 instance type that Amazon Web Services PCS can provision in the compute node group.  Example: t2.xlarge 
     */
    instanceType?: String;
  }
  export type InstanceList = InstanceConfig[];
  export type InstanceProfileArn = string;
  export interface ListClustersRequest {
    /**
     * The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error.
     */
    nextToken?: String;
    /**
     * The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.
     */
    maxResults?: MaxResults;
  }
  export interface ListClustersResponse {
    /**
     * The list of clusters.
     */
    clusters: ClusterList;
    /**
     * The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error.
     */
    nextToken?: String;
  }
  export interface ListComputeNodeGroupsRequest {
    /**
     * The name or ID of the cluster to list compute node groups for.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error.
     */
    nextToken?: String;
    /**
     * The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.
     */
    maxResults?: MaxResults;
  }
  export interface ListComputeNodeGroupsResponse {
    /**
     * The list of compute node groups for the cluster.
     */
    computeNodeGroups: ComputeNodeGroupList;
    /**
     * The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error.
     */
    nextToken?: String;
  }
  export interface ListQueuesRequest {
    /**
     * The name or ID of the cluster to list queues for.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error.
     */
    nextToken?: String;
    /**
     * The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.
     */
    maxResults?: MaxResults;
  }
  export interface ListQueuesResponse {
    /**
     * The list of queues associated with the cluster.
     */
    queues: QueueList;
    /**
     * The value of nextToken is a unique pagination token for each page of results returned. If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an HTTP 400 InvalidToken error.
     */
    nextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource for which to list tags.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
     */
    tags?: ResponseTagMap;
  }
  export type MaxResults = number;
  export interface Networking {
    /**
     * The ID of the subnet where Amazon Web Services PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and Amazon Web Services PCS resources. The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone.  Example: subnet-abcd1234 
     */
    subnetIds?: SubnetIdList;
    /**
     * The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets. The following rules are required:   Inbound rule 1   Protocol: All   Ports: All   Source: Self     Outbound rule 1   Protocol: All   Ports: All   Destination: 0.0.0.0/0 (IPv4)     Outbound rule 2   Protocol: All   Ports: All   Destination: Self    
     */
    securityGroupIds?: SecurityGroupIdList;
  }
  export interface NetworkingRequest {
    /**
     * The list of subnet IDs where Amazon Web Services PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and Amazon Web Services PCS resources. Subnet IDs have the form subnet-0123456789abcdef0. Subnets can't be in Outposts, Wavelength or an Amazon Web Services Local Zone.  Amazon Web Services PCS currently supports only 1 subnet in this list. 
     */
    subnetIds?: SubnetIdList;
    /**
     * A list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.
     */
    securityGroupIds?: SecurityGroupIdList;
  }
  export type PurchaseOption = "ONDEMAND"|"SPOT"|string;
  export interface Queue {
    /**
     * The name that identifies the queue.
     */
    name: QueueName;
    /**
     * The generated unique ID of the queue.
     */
    id: String;
    /**
     * The unique Amazon Resource Name (ARN) of the queue.
     */
    arn: String;
    /**
     * The ID of the cluster of the queue.
     */
    clusterId: String;
    /**
     * The date and time the resource was created.
     */
    createdAt: SyntheticTimestamp_date_time;
    /**
     * The date and time the resource was modified.
     */
    modifiedAt: SyntheticTimestamp_date_time;
    /**
     * The provisioning status of the queue.  The provisioning status doesn't indicate the overall health of the queue. 
     */
    status: QueueStatus;
    /**
     * The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.
     */
    computeNodeGroupConfigurations: ComputeNodeGroupConfigurationList;
    /**
     * The list of errors that occurred during queue provisioning.
     */
    errorInfo?: ErrorInfoList;
  }
  export type QueueIdentifier = string;
  export type QueueList = QueueSummary[];
  export type QueueName = string;
  export type QueueStatus = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|"UPDATE_FAILED"|string;
  export interface QueueSummary {
    /**
     * The name that identifies the queue.
     */
    name: QueueName;
    /**
     * The generated unique ID of the queue.
     */
    id: String;
    /**
     * The unique Amazon Resource Name (ARN) of the queue.
     */
    arn: String;
    /**
     * The ID of the cluster of the queue.
     */
    clusterId: String;
    /**
     * The date and time the resource was created.
     */
    createdAt: SyntheticTimestamp_date_time;
    /**
     * The date and time the resource was modified.
     */
    modifiedAt: SyntheticTimestamp_date_time;
    /**
     * The provisioning status of the queue.   The provisioning status doesn't indicate the overall health of the queue. 
     */
    status: QueueStatus;
  }
  export interface RegisterComputeNodeGroupInstanceRequest {
    /**
     * The name or ID of the cluster to register the compute node group instance in.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The client-generated token to allow for retries.
     */
    bootstrapId: BootstrapId;
  }
  export interface RegisterComputeNodeGroupInstanceResponse {
    /**
     * The scheduler node ID for this instance.
     */
    nodeID: String;
    /**
     * For the Slurm scheduler, this is the shared Munge key the scheduler uses to authenticate compute node group instances.
     */
    sharedSecret: SharedSecret;
    /**
     * The list of endpoints available for interaction with the scheduler.
     */
    endpoints: Endpoints;
  }
  export type RequestTagMap = {[key: string]: TagValue};
  export type ResponseTagMap = {[key: string]: TagValue};
  export type SBClientToken = string;
  export interface ScalingConfiguration {
    /**
     * The lower bound of the number of instances allowed in the compute fleet.
     */
    minInstanceCount: ScalingConfigurationMinInstanceCountInteger;
    /**
     * The upper bound of the number of instances allowed in the compute fleet.
     */
    maxInstanceCount: ScalingConfigurationMaxInstanceCountInteger;
  }
  export type ScalingConfigurationMaxInstanceCountInteger = number;
  export type ScalingConfigurationMinInstanceCountInteger = number;
  export interface ScalingConfigurationRequest {
    /**
     * The lower bound of the number of instances allowed in the compute fleet.
     */
    minInstanceCount: ScalingConfigurationRequestMinInstanceCountInteger;
    /**
     * The upper bound of the number of instances allowed in the compute fleet.
     */
    maxInstanceCount: ScalingConfigurationRequestMaxInstanceCountInteger;
  }
  export type ScalingConfigurationRequestMaxInstanceCountInteger = number;
  export type ScalingConfigurationRequestMinInstanceCountInteger = number;
  export interface Scheduler {
    /**
     * The software Amazon Web Services PCS uses to manage cluster scaling and job scheduling.
     */
    type: SchedulerType;
    /**
     * The version of the specified scheduling software that Amazon Web Services PCS uses to manage cluster scaling and job scheduling.
     */
    version: String;
  }
  export interface SchedulerRequest {
    /**
     * The software Amazon Web Services PCS uses to manage cluster scaling and job scheduling.
     */
    type: SchedulerType;
    /**
     * The version of the specified scheduling software that Amazon Web Services PCS uses to manage cluster scaling and job scheduling.
     */
    version: String;
  }
  export type SchedulerType = "SLURM"|string;
  export type SecurityGroupId = string;
  export type SecurityGroupIdList = SecurityGroupId[];
  export type SharedSecret = string;
  export type Size = "SMALL"|"MEDIUM"|"LARGE"|string;
  export interface SlurmAuthKey {
    /**
     * The Amazon Resource Name (ARN) of the the shared Slurm key.
     */
    secretArn: String;
    /**
     * The version of the shared Slurm key.
     */
    secretVersion: String;
  }
  export interface SlurmCustomSetting {
    /**
     * Amazon Web Services PCS supports configuration of the following Slurm parameters:  Prolog ,  Epilog , and  SelectTypeParameters .
     */
    parameterName: String;
    /**
     * The values for the configured Slurm settings.
     */
    parameterValue: String;
  }
  export type SlurmCustomSettings = SlurmCustomSetting[];
  export type SpotAllocationStrategy = "lowest-price"|"capacity-optimized"|"price-capacity-optimized"|string;
  export interface SpotOptions {
    /**
     * The Amazon EC2 allocation strategy Amazon Web Services PCS uses to provision EC2 instances. Amazon Web Services PCS supports lowest price, capacity optimized, and price capacity optimized. For more information, see Use allocation strategies to determine how EC2 Fleet or Spot Fleet fulfills Spot and On-Demand capacity in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to price capacity optimized.
     */
    allocationStrategy?: SpotAllocationStrategy;
  }
  export type String = string;
  export type StringList = String[];
  export type SubnetId = string;
  export type SubnetIdList = SubnetId[];
  export type SyntheticTimestamp_date_time = Date;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
    /**
     * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
     */
    tags: RequestTagMap;
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
    /**
     * 1 or more tag keys to remove from the resource. Specify only tag keys and not tag values.
     */
    tagKeys: TagKeys;
  }
  export interface UpdateComputeNodeGroupRequest {
    /**
     * The name or ID of the cluster of the compute node group.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The name or ID of the compute node group.
     */
    computeNodeGroupIdentifier: ComputeNodeGroupIdentifier;
    /**
     * The ID of the Amazon Machine Image (AMI) that Amazon Web Services PCS uses to launch instances. If not provided, Amazon Web Services PCS uses the AMI ID specified in the custom launch template.
     */
    amiId?: AmiId;
    /**
     * The list of subnet IDs where the compute node group provisions instances. The subnets must be in the same VPC as the cluster.
     */
    subnetIds?: StringList;
    customLaunchTemplate?: CustomLaunchTemplate;
    /**
     * Specifies how EC2 instances are purchased on your behalf. Amazon Web Services PCS supports On-Demand and Spot instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.
     */
    purchaseOption?: PurchaseOption;
    spotOptions?: SpotOptions;
    /**
     * Specifies the boundaries of the compute node group auto scaling.
     */
    scalingConfiguration?: ScalingConfigurationRequest;
    /**
     * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly.
     */
    iamInstanceProfileArn?: InstanceProfileArn;
    /**
     * Additional options related to the Slurm scheduler.
     */
    slurmConfiguration?: UpdateComputeNodeGroupSlurmConfigurationRequest;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
     */
    clientToken?: SBClientToken;
  }
  export interface UpdateComputeNodeGroupResponse {
    computeNodeGroup?: ComputeNodeGroup;
  }
  export interface UpdateComputeNodeGroupSlurmConfigurationRequest {
    /**
     * Additional Slurm-specific configuration that directly maps to Slurm settings.
     */
    slurmCustomSettings?: SlurmCustomSettings;
  }
  export interface UpdateQueueRequest {
    /**
     * The name or ID of the cluster of the queue.
     */
    clusterIdentifier: ClusterIdentifier;
    /**
     * The name or ID of the queue.
     */
    queueIdentifier: QueueIdentifier;
    /**
     * The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups.
     */
    computeNodeGroupConfigurations?: ComputeNodeGroupConfigurationList;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
     */
    clientToken?: SBClientToken;
  }
  export interface UpdateQueueResponse {
    queue?: Queue;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-02-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PCS client.
   */
  export import Types = PCS;
}
export = PCS;
