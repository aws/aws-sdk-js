import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class DataSync extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DataSync.Types.ClientConfiguration)
  config: Config & DataSync.Types.ClientConfiguration;
  /**
   * Cancels execution of a task.  When you cancel a task execution, the transfer of some files is abruptly interrupted. The contents of files that are transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution on the same task and you allow the task execution to complete, file content on the destination is complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, AWS DataSync successfully complete the transfer when you start the next task execution.
   */
  cancelTaskExecution(params: DataSync.Types.CancelTaskExecutionRequest, callback?: (err: AWSError, data: DataSync.Types.CancelTaskExecutionResponse) => void): Request<DataSync.Types.CancelTaskExecutionResponse, AWSError>;
  /**
   * Cancels execution of a task.  When you cancel a task execution, the transfer of some files is abruptly interrupted. The contents of files that are transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution on the same task and you allow the task execution to complete, file content on the destination is complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, AWS DataSync successfully complete the transfer when you start the next task execution.
   */
  cancelTaskExecution(callback?: (err: AWSError, data: DataSync.Types.CancelTaskExecutionResponse) => void): Request<DataSync.Types.CancelTaskExecutionResponse, AWSError>;
  /**
   * Activates an AWS DataSync agent that you have deployed on your host. The activation process associates your agent with your account. In the activation process, you specify information such as the AWS Region that you want to activate the agent in. You activate the agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this AWS Region. You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet. You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run.  Agents are automatically updated by AWS on a regular basis, using a mechanism that ensures minimal interruption to your tasks. 
   */
  createAgent(params: DataSync.Types.CreateAgentRequest, callback?: (err: AWSError, data: DataSync.Types.CreateAgentResponse) => void): Request<DataSync.Types.CreateAgentResponse, AWSError>;
  /**
   * Activates an AWS DataSync agent that you have deployed on your host. The activation process associates your agent with your account. In the activation process, you specify information such as the AWS Region that you want to activate the agent in. You activate the agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this AWS Region. You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet. You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run.  Agents are automatically updated by AWS on a regular basis, using a mechanism that ensures minimal interruption to your tasks. 
   */
  createAgent(callback?: (err: AWSError, data: DataSync.Types.CreateAgentResponse) => void): Request<DataSync.Types.CreateAgentResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon EFS file system.
   */
  createLocationEfs(params: DataSync.Types.CreateLocationEfsRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationEfsResponse) => void): Request<DataSync.Types.CreateLocationEfsResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon EFS file system.
   */
  createLocationEfs(callback?: (err: AWSError, data: DataSync.Types.CreateLocationEfsResponse) => void): Request<DataSync.Types.CreateLocationEfsResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for Windows file system.
   */
  createLocationFsxWindows(params: DataSync.Types.CreateLocationFsxWindowsRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxWindowsResponse) => void): Request<DataSync.Types.CreateLocationFsxWindowsResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for Windows file system.
   */
  createLocationFsxWindows(callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxWindowsResponse) => void): Request<DataSync.Types.CreateLocationFsxWindowsResponse, AWSError>;
  /**
   * Defines a file system on a Network File System (NFS) server that can be read from or written to.
   */
  createLocationNfs(params: DataSync.Types.CreateLocationNfsRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationNfsResponse) => void): Request<DataSync.Types.CreateLocationNfsResponse, AWSError>;
  /**
   * Defines a file system on a Network File System (NFS) server that can be read from or written to.
   */
  createLocationNfs(callback?: (err: AWSError, data: DataSync.Types.CreateLocationNfsResponse) => void): Request<DataSync.Types.CreateLocationNfsResponse, AWSError>;
  /**
   * Creates an endpoint for a self-managed object storage bucket. For more information about self-managed object storage locations, see create-object-location.
   */
  createLocationObjectStorage(params: DataSync.Types.CreateLocationObjectStorageRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationObjectStorageResponse) => void): Request<DataSync.Types.CreateLocationObjectStorageResponse, AWSError>;
  /**
   * Creates an endpoint for a self-managed object storage bucket. For more information about self-managed object storage locations, see create-object-location.
   */
  createLocationObjectStorage(callback?: (err: AWSError, data: DataSync.Types.CreateLocationObjectStorageResponse) => void): Request<DataSync.Types.CreateLocationObjectStorageResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon S3 bucket. For more information, see https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli in the AWS DataSync User Guide.
   */
  createLocationS3(params: DataSync.Types.CreateLocationS3Request, callback?: (err: AWSError, data: DataSync.Types.CreateLocationS3Response) => void): Request<DataSync.Types.CreateLocationS3Response, AWSError>;
  /**
   * Creates an endpoint for an Amazon S3 bucket. For more information, see https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli in the AWS DataSync User Guide.
   */
  createLocationS3(callback?: (err: AWSError, data: DataSync.Types.CreateLocationS3Response) => void): Request<DataSync.Types.CreateLocationS3Response, AWSError>;
  /**
   * Defines a file system on a Server Message Block (SMB) server that can be read from or written to.
   */
  createLocationSmb(params: DataSync.Types.CreateLocationSmbRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationSmbResponse) => void): Request<DataSync.Types.CreateLocationSmbResponse, AWSError>;
  /**
   * Defines a file system on a Server Message Block (SMB) server that can be read from or written to.
   */
  createLocationSmb(callback?: (err: AWSError, data: DataSync.Types.CreateLocationSmbResponse) => void): Request<DataSync.Types.CreateLocationSmbResponse, AWSError>;
  /**
   * Creates a task. A task is a set of two locations (source and destination) and a set of Options that you use to control the behavior of a task. If you don't specify Options when you create a task, AWS DataSync populates them with service defaults. When you create a task, it first enters the CREATING state. During CREATING AWS DataSync attempts to mount the on-premises Network File System (NFS) location. The task transitions to the AVAILABLE state without waiting for the AWS location to become mounted. If required, AWS DataSync mounts the AWS location before each task execution. If an agent that is associated with a source (NFS) location goes offline, the task transitions to the UNAVAILABLE status. If the status of the task remains in the CREATING status for more than a few minutes, it means that your agent might be having trouble mounting the source NFS file system. Check the task's ErrorCode and ErrorDetail. Mount issues are often caused by either a misconfigured firewall or a mistyped NFS server hostname.
   */
  createTask(params: DataSync.Types.CreateTaskRequest, callback?: (err: AWSError, data: DataSync.Types.CreateTaskResponse) => void): Request<DataSync.Types.CreateTaskResponse, AWSError>;
  /**
   * Creates a task. A task is a set of two locations (source and destination) and a set of Options that you use to control the behavior of a task. If you don't specify Options when you create a task, AWS DataSync populates them with service defaults. When you create a task, it first enters the CREATING state. During CREATING AWS DataSync attempts to mount the on-premises Network File System (NFS) location. The task transitions to the AVAILABLE state without waiting for the AWS location to become mounted. If required, AWS DataSync mounts the AWS location before each task execution. If an agent that is associated with a source (NFS) location goes offline, the task transitions to the UNAVAILABLE status. If the status of the task remains in the CREATING status for more than a few minutes, it means that your agent might be having trouble mounting the source NFS file system. Check the task's ErrorCode and ErrorDetail. Mount issues are often caused by either a misconfigured firewall or a mistyped NFS server hostname.
   */
  createTask(callback?: (err: AWSError, data: DataSync.Types.CreateTaskResponse) => void): Request<DataSync.Types.CreateTaskResponse, AWSError>;
  /**
   * Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your AWS account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
   */
  deleteAgent(params: DataSync.Types.DeleteAgentRequest, callback?: (err: AWSError, data: DataSync.Types.DeleteAgentResponse) => void): Request<DataSync.Types.DeleteAgentResponse, AWSError>;
  /**
   * Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your AWS account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
   */
  deleteAgent(callback?: (err: AWSError, data: DataSync.Types.DeleteAgentResponse) => void): Request<DataSync.Types.DeleteAgentResponse, AWSError>;
  /**
   * Deletes the configuration of a location used by AWS DataSync. 
   */
  deleteLocation(params: DataSync.Types.DeleteLocationRequest, callback?: (err: AWSError, data: DataSync.Types.DeleteLocationResponse) => void): Request<DataSync.Types.DeleteLocationResponse, AWSError>;
  /**
   * Deletes the configuration of a location used by AWS DataSync. 
   */
  deleteLocation(callback?: (err: AWSError, data: DataSync.Types.DeleteLocationResponse) => void): Request<DataSync.Types.DeleteLocationResponse, AWSError>;
  /**
   * Deletes a task.
   */
  deleteTask(params: DataSync.Types.DeleteTaskRequest, callback?: (err: AWSError, data: DataSync.Types.DeleteTaskResponse) => void): Request<DataSync.Types.DeleteTaskResponse, AWSError>;
  /**
   * Deletes a task.
   */
  deleteTask(callback?: (err: AWSError, data: DataSync.Types.DeleteTaskResponse) => void): Request<DataSync.Types.DeleteTaskResponse, AWSError>;
  /**
   * Returns metadata such as the name, the network interfaces, and the status (that is, whether the agent is running or not) for an agent. To specify which agent to describe, use the Amazon Resource Name (ARN) of the agent in your request. 
   */
  describeAgent(params: DataSync.Types.DescribeAgentRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeAgentResponse) => void): Request<DataSync.Types.DescribeAgentResponse, AWSError>;
  /**
   * Returns metadata such as the name, the network interfaces, and the status (that is, whether the agent is running or not) for an agent. To specify which agent to describe, use the Amazon Resource Name (ARN) of the agent in your request. 
   */
  describeAgent(callback?: (err: AWSError, data: DataSync.Types.DescribeAgentResponse) => void): Request<DataSync.Types.DescribeAgentResponse, AWSError>;
  /**
   * Returns metadata, such as the path information about an Amazon EFS location.
   */
  describeLocationEfs(params: DataSync.Types.DescribeLocationEfsRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationEfsResponse) => void): Request<DataSync.Types.DescribeLocationEfsResponse, AWSError>;
  /**
   * Returns metadata, such as the path information about an Amazon EFS location.
   */
  describeLocationEfs(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationEfsResponse) => void): Request<DataSync.Types.DescribeLocationEfsResponse, AWSError>;
  /**
   * Returns metadata, such as the path information about an Amazon FSx for Windows location.
   */
  describeLocationFsxWindows(params: DataSync.Types.DescribeLocationFsxWindowsRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxWindowsResponse) => void): Request<DataSync.Types.DescribeLocationFsxWindowsResponse, AWSError>;
  /**
   * Returns metadata, such as the path information about an Amazon FSx for Windows location.
   */
  describeLocationFsxWindows(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxWindowsResponse) => void): Request<DataSync.Types.DescribeLocationFsxWindowsResponse, AWSError>;
  /**
   * Returns metadata, such as the path information, about an NFS location.
   */
  describeLocationNfs(params: DataSync.Types.DescribeLocationNfsRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationNfsResponse) => void): Request<DataSync.Types.DescribeLocationNfsResponse, AWSError>;
  /**
   * Returns metadata, such as the path information, about an NFS location.
   */
  describeLocationNfs(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationNfsResponse) => void): Request<DataSync.Types.DescribeLocationNfsResponse, AWSError>;
  /**
   * Returns metadata about a self-managed object storage server location. For more information about self-managed object storage locations, see create-object-location.
   */
  describeLocationObjectStorage(params: DataSync.Types.DescribeLocationObjectStorageRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationObjectStorageResponse) => void): Request<DataSync.Types.DescribeLocationObjectStorageResponse, AWSError>;
  /**
   * Returns metadata about a self-managed object storage server location. For more information about self-managed object storage locations, see create-object-location.
   */
  describeLocationObjectStorage(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationObjectStorageResponse) => void): Request<DataSync.Types.DescribeLocationObjectStorageResponse, AWSError>;
  /**
   * Returns metadata, such as bucket name, about an Amazon S3 bucket location.
   */
  describeLocationS3(params: DataSync.Types.DescribeLocationS3Request, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationS3Response) => void): Request<DataSync.Types.DescribeLocationS3Response, AWSError>;
  /**
   * Returns metadata, such as bucket name, about an Amazon S3 bucket location.
   */
  describeLocationS3(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationS3Response) => void): Request<DataSync.Types.DescribeLocationS3Response, AWSError>;
  /**
   * Returns metadata, such as the path and user information about an SMB location.
   */
  describeLocationSmb(params: DataSync.Types.DescribeLocationSmbRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationSmbResponse) => void): Request<DataSync.Types.DescribeLocationSmbResponse, AWSError>;
  /**
   * Returns metadata, such as the path and user information about an SMB location.
   */
  describeLocationSmb(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationSmbResponse) => void): Request<DataSync.Types.DescribeLocationSmbResponse, AWSError>;
  /**
   * Returns metadata about a task.
   */
  describeTask(params: DataSync.Types.DescribeTaskRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeTaskResponse) => void): Request<DataSync.Types.DescribeTaskResponse, AWSError>;
  /**
   * Returns metadata about a task.
   */
  describeTask(callback?: (err: AWSError, data: DataSync.Types.DescribeTaskResponse) => void): Request<DataSync.Types.DescribeTaskResponse, AWSError>;
  /**
   * Returns detailed metadata about a task that is being executed.
   */
  describeTaskExecution(params: DataSync.Types.DescribeTaskExecutionRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeTaskExecutionResponse) => void): Request<DataSync.Types.DescribeTaskExecutionResponse, AWSError>;
  /**
   * Returns detailed metadata about a task that is being executed.
   */
  describeTaskExecution(callback?: (err: AWSError, data: DataSync.Types.DescribeTaskExecutionResponse) => void): Request<DataSync.Types.DescribeTaskExecutionResponse, AWSError>;
  /**
   * Returns a list of agents owned by an AWS account in the AWS Region specified in the request. The returned list is ordered by agent Amazon Resource Name (ARN). By default, this operation returns a maximum of 100 agents. This operation supports pagination that enables you to optionally reduce the number of agents returned in a response. If you have more agents than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a marker that you can specify in your next request to fetch the next page of agents.
   */
  listAgents(params: DataSync.Types.ListAgentsRequest, callback?: (err: AWSError, data: DataSync.Types.ListAgentsResponse) => void): Request<DataSync.Types.ListAgentsResponse, AWSError>;
  /**
   * Returns a list of agents owned by an AWS account in the AWS Region specified in the request. The returned list is ordered by agent Amazon Resource Name (ARN). By default, this operation returns a maximum of 100 agents. This operation supports pagination that enables you to optionally reduce the number of agents returned in a response. If you have more agents than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a marker that you can specify in your next request to fetch the next page of agents.
   */
  listAgents(callback?: (err: AWSError, data: DataSync.Types.ListAgentsResponse) => void): Request<DataSync.Types.ListAgentsResponse, AWSError>;
  /**
   * Returns a list of source and destination locations. If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.
   */
  listLocations(params: DataSync.Types.ListLocationsRequest, callback?: (err: AWSError, data: DataSync.Types.ListLocationsResponse) => void): Request<DataSync.Types.ListLocationsResponse, AWSError>;
  /**
   * Returns a list of source and destination locations. If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.
   */
  listLocations(callback?: (err: AWSError, data: DataSync.Types.ListLocationsResponse) => void): Request<DataSync.Types.ListLocationsResponse, AWSError>;
  /**
   * Returns all the tags associated with a specified resource. 
   */
  listTagsForResource(params: DataSync.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: DataSync.Types.ListTagsForResourceResponse) => void): Request<DataSync.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns all the tags associated with a specified resource. 
   */
  listTagsForResource(callback?: (err: AWSError, data: DataSync.Types.ListTagsForResourceResponse) => void): Request<DataSync.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of executed tasks.
   */
  listTaskExecutions(params: DataSync.Types.ListTaskExecutionsRequest, callback?: (err: AWSError, data: DataSync.Types.ListTaskExecutionsResponse) => void): Request<DataSync.Types.ListTaskExecutionsResponse, AWSError>;
  /**
   * Returns a list of executed tasks.
   */
  listTaskExecutions(callback?: (err: AWSError, data: DataSync.Types.ListTaskExecutionsResponse) => void): Request<DataSync.Types.ListTaskExecutionsResponse, AWSError>;
  /**
   * Returns a list of all the tasks.
   */
  listTasks(params: DataSync.Types.ListTasksRequest, callback?: (err: AWSError, data: DataSync.Types.ListTasksResponse) => void): Request<DataSync.Types.ListTasksResponse, AWSError>;
  /**
   * Returns a list of all the tasks.
   */
  listTasks(callback?: (err: AWSError, data: DataSync.Types.ListTasksResponse) => void): Request<DataSync.Types.ListTasksResponse, AWSError>;
  /**
   * Starts a specific invocation of a task. A TaskExecution value represents an individual run of a task. Each task can have at most one TaskExecution at a time.  TaskExecution has the following transition phases: INITIALIZING | PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE.  For detailed information, see the Task Execution section in the Components and Terminology topic in the AWS DataSync User Guide.
   */
  startTaskExecution(params: DataSync.Types.StartTaskExecutionRequest, callback?: (err: AWSError, data: DataSync.Types.StartTaskExecutionResponse) => void): Request<DataSync.Types.StartTaskExecutionResponse, AWSError>;
  /**
   * Starts a specific invocation of a task. A TaskExecution value represents an individual run of a task. Each task can have at most one TaskExecution at a time.  TaskExecution has the following transition phases: INITIALIZING | PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE.  For detailed information, see the Task Execution section in the Components and Terminology topic in the AWS DataSync User Guide.
   */
  startTaskExecution(callback?: (err: AWSError, data: DataSync.Types.StartTaskExecutionResponse) => void): Request<DataSync.Types.StartTaskExecutionResponse, AWSError>;
  /**
   * Applies a key-value pair to an AWS resource.
   */
  tagResource(params: DataSync.Types.TagResourceRequest, callback?: (err: AWSError, data: DataSync.Types.TagResourceResponse) => void): Request<DataSync.Types.TagResourceResponse, AWSError>;
  /**
   * Applies a key-value pair to an AWS resource.
   */
  tagResource(callback?: (err: AWSError, data: DataSync.Types.TagResourceResponse) => void): Request<DataSync.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from an AWS resource.
   */
  untagResource(params: DataSync.Types.UntagResourceRequest, callback?: (err: AWSError, data: DataSync.Types.UntagResourceResponse) => void): Request<DataSync.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from an AWS resource.
   */
  untagResource(callback?: (err: AWSError, data: DataSync.Types.UntagResourceResponse) => void): Request<DataSync.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the name of an agent.
   */
  updateAgent(params: DataSync.Types.UpdateAgentRequest, callback?: (err: AWSError, data: DataSync.Types.UpdateAgentResponse) => void): Request<DataSync.Types.UpdateAgentResponse, AWSError>;
  /**
   * Updates the name of an agent.
   */
  updateAgent(callback?: (err: AWSError, data: DataSync.Types.UpdateAgentResponse) => void): Request<DataSync.Types.UpdateAgentResponse, AWSError>;
  /**
   * Updates the metadata associated with a task.
   */
  updateTask(params: DataSync.Types.UpdateTaskRequest, callback?: (err: AWSError, data: DataSync.Types.UpdateTaskResponse) => void): Request<DataSync.Types.UpdateTaskResponse, AWSError>;
  /**
   * Updates the metadata associated with a task.
   */
  updateTask(callback?: (err: AWSError, data: DataSync.Types.UpdateTaskResponse) => void): Request<DataSync.Types.UpdateTaskResponse, AWSError>;
}
declare namespace DataSync {
  export type ActivationKey = string;
  export type AgentArn = string;
  export type AgentArnList = AgentArn[];
  export type AgentList = AgentListEntry[];
  export interface AgentListEntry {
    /**
     * The Amazon Resource Name (ARN) of the agent.
     */
    AgentArn?: AgentArn;
    /**
     * The name of the agent.
     */
    Name?: TagValue;
    /**
     * The status of the agent.
     */
    Status?: AgentStatus;
  }
  export type AgentStatus = "ONLINE"|"OFFLINE"|string;
  export type Atime = "NONE"|"BEST_EFFORT"|string;
  export type BytesPerSecond = number;
  export interface CancelTaskExecutionRequest {
    /**
     * The Amazon Resource Name (ARN) of the task execution to cancel.
     */
    TaskExecutionArn: TaskExecutionArn;
  }
  export interface CancelTaskExecutionResponse {
  }
  export interface CreateAgentRequest {
    /**
     * Your agent activation key. You can get the activation key either by sending an HTTP GET request with redirects that enable you to get the agent IP address (port 80). Alternatively, you can get it from the AWS DataSync console. The redirect URL returned in the response provides you the activation key for your agent in the query string parameter activationKey. It might also include other activation-related parameters; however, these are merely defaults. The arguments you pass to this API call determine the actual configuration of your agent. For more information, see Activating an Agent in the AWS DataSync User Guide. 
     */
    ActivationKey: ActivationKey;
    /**
     * The name you configured for your agent. This value is a text reference that is used to identify the agent in the console.
     */
    AgentName?: TagValue;
    /**
     * The key-value pair that represents the tag that you want to associate with the agent. The value can be an empty string. This value helps you manage, filter, and search for your agents.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @.  
     */
    Tags?: InputTagList;
    /**
     * The ID of the VPC (virtual private cloud) endpoint that the agent has access to. This is the client-side VPC endpoint, also called a PrivateLink. If you don't have a PrivateLink VPC endpoint, see Creating a VPC Endpoint Service Configuration in the Amazon VPC User Guide. VPC endpoint ID looks like this: vpce-01234d5aff67890e1.
     */
    VpcEndpointId?: VpcEndpointId;
    /**
     * The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic network interfaces for each data transfer task. The agent that runs a task must be private. When you start a task that is associated with an agent created in a VPC, or one that has access to an IP address in a VPC, then the task is also private. In this case, DataSync creates four network interfaces for each task in your subnet. For a data transfer to work, the agent must be able to route to all these four network interfaces.
     */
    SubnetArns?: PLSubnetArnList;
    /**
     * The ARNs of the security groups used to protect your data transfer task subnets. See CreateAgentRequest$SubnetArns.
     */
    SecurityGroupArns?: PLSecurityGroupArnList;
  }
  export interface CreateAgentResponse {
    /**
     * The Amazon Resource Name (ARN) of the agent. Use the ListAgents operation to return a list of agents for your account and AWS Region.
     */
    AgentArn?: AgentArn;
  }
  export interface CreateLocationEfsRequest {
    /**
     * A subdirectory in the location’s path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination. By default, AWS DataSync uses the root directory.   Subdirectory must be specified with forward slashes. For example, /path/to/folder. 
     */
    Subdirectory?: EfsSubdirectory;
    /**
     * The Amazon Resource Name (ARN) for the Amazon EFS file system.
     */
    EfsFilesystemArn: EfsFilesystemArn;
    /**
     * The subnet and security group that the Amazon EFS file system uses. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. The exact relationship between security group M (of the mount target) and security group S (which you provide for DataSync to use at this stage) is as follows:     Security group M (which you associate with the mount target) must allow inbound access for the Transmission Control Protocol (TCP) on the NFS port (2049) from security group S. You can enable inbound connections either by IP address (CIDR range) or security group.    Security group S (provided to DataSync to access EFS) should have a rule that enables outbound connections to the NFS port on one of the file system’s mount targets. You can enable outbound connections either by IP address (CIDR range) or security group. For information about security groups and mount targets, see Security Groups for Amazon EC2 Instances and Mount Targets in the Amazon EFS User Guide.   
     */
    Ec2Config: Ec2Config;
    /**
     * The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationEfsResponse {
    /**
     * The Amazon Resource Name (ARN) of the Amazon EFS file system location that is created.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationFsxWindowsRequest {
    /**
     * A subdirectory in the location’s path. This subdirectory in the Amazon FSx for Windows file system is used to read data from the Amazon FSx for Windows source location or write data to the FSx for Windows destination.
     */
    Subdirectory?: FsxWindowsSubdirectory;
    /**
     * The Amazon Resource Name (ARN) for the FSx for Windows file system.
     */
    FsxFilesystemArn: FsxFilesystemArn;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Windows file system.
     */
    SecurityGroupArns: Ec2SecurityGroupArnList;
    /**
     * The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
     */
    Tags?: InputTagList;
    /**
     * The user who has the permissions to access files and folders in the FSx for Windows file system.
     */
    User: SmbUser;
    /**
     * The name of the Windows domain that the FSx for Windows server belongs to.
     */
    Domain?: SmbDomain;
    /**
     * The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
     */
    Password: SmbPassword;
  }
  export interface CreateLocationFsxWindowsResponse {
    /**
     * The Amazon Resource Name (ARN) of the FSx for Windows file system location that is created.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationNfsRequest {
    /**
     * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that's exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network.  To see all the paths exported by your NFS server. run "showmount -e nfs-server-name" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication.  To transfer all the data in the folder you specified, DataSync needs to have permissions to read all the data. To ensure this, either configure the NFS export with no_root_squash, or ensure that the permissions for all of the files that you want DataSync allow read access for all users. Doing either enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access. If you are copying data to or from your AWS Snowcone device, see NFS Server on AWS Snowcone for more information. For information about NFS export configuration, see 18.7. The /etc/exports Configuration File in the Red Hat Enterprise Linux documentation.
     */
    Subdirectory: NfsSubdirectory;
    /**
     * The name of the NFS server. This value is the IP address or Domain Name Service (DNS) name of the NFS server. An agent that is installed on-premises uses this host name to mount the NFS server in a network.  If you are copying data to or from your AWS Snowcone device, see NFS Server on AWS Snowcone for more information.  This name must either be DNS-compliant or must be an IP version 4 (IPv4) address. 
     */
    ServerHostname: ServerHostname;
    /**
     * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect to an NFS server.  If you are copying data to or from your AWS Snowcone device, see NFS Server on AWS Snowcone for more information.
     */
    OnPremConfig: OnPremConfig;
    /**
     * The NFS mount options that DataSync can use to mount your NFS share.
     */
    MountOptions?: NfsMountOptions;
    /**
     * The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationNfsResponse {
    /**
     * The Amazon Resource Name (ARN) of the source NFS file system location that is created.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationObjectStorageRequest {
    /**
     * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server. An agent uses this host name to mount the object storage server in a network. 
     */
    ServerHostname: ServerHostname;
    /**
     * The port that your self-managed object storage server accepts inbound network traffic on. The server port is set by default to TCP 80 (HTTP) or TCP 443 (HTTPS). You can specify a custom port if your self-managed object storage server requires one.
     */
    ServerPort?: ObjectStorageServerPort;
    /**
     * The protocol that the object storage server uses to communicate. Valid values are HTTP or HTTPS.
     */
    ServerProtocol?: ObjectStorageServerProtocol;
    /**
     * The subdirectory in the self-managed object storage server that is used to read data from.
     */
    Subdirectory?: S3Subdirectory;
    /**
     * The bucket on the self-managed object storage server that is used to read data from.
     */
    BucketName: ObjectStorageBucketName;
    /**
     * Optional. The access key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use AccessKey and SecretKey to provide the user name and password, respectively.
     */
    AccessKey?: ObjectStorageAccessKey;
    /**
     * Optional. The secret key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use AccessKey and SecretKey to provide the user name and password, respectively.
     */
    SecretKey?: ObjectStorageSecretKey;
    /**
     * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
     */
    AgentArns: AgentArnList;
    /**
     * The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationObjectStorageResponse {
    /**
     * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationS3Request {
    /**
     * A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.
     */
    Subdirectory?: S3Subdirectory;
    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket. If the bucket is on an AWS Outpost, this must be an access point ARN.
     */
    S3BucketArn: S3BucketArn;
    /**
     * The Amazon S3 storage class that you want to store your files in when this location is used as a task destination. For buckets in AWS Regions, the storage class defaults to Standard. For buckets on AWS Outposts, the storage class defaults to AWS S3 Outposts. For more information about S3 storage classes, see Amazon S3 Storage Classes in the Amazon Simple Storage Service Developer Guide. Some storage classes have behaviors that can affect your S3 storage cost. For detailed information, see using-storage-classes.
     */
    S3StorageClass?: S3StorageClass;
    S3Config: S3Config;
    /**
     * If you are using DataSync on an AWS Outpost, specify the Amazon Resource Names (ARNs) of the DataSync agents deployed on your AWS Outpost. For more information about launching a DataSync agent on an Amazon Outpost, see outposts-agent.
     */
    AgentArns?: AgentArnList;
    /**
     * The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationS3Response {
    /**
     * The Amazon Resource Name (ARN) of the source Amazon S3 bucket location that is created.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationSmbRequest {
    /**
     * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. The SMB path should be a path that's exported by the SMB server, or a subdirectory of that path. The path should be such that it can be mounted by other SMB clients in your network.   Subdirectory must be specified with forward slashes. For example, /path/to/folder.  To transfer all the data in the folder you specified, DataSync needs to have permissions to mount the SMB share, as well as to access all the data in that share. To ensure this, either ensure that the user/password specified belongs to the user who can mount the share, and who has the appropriate permissions for all of the files and directories that you want DataSync to access, or use credentials of a member of the Backup Operators group to mount the share. Doing either enables the agent to access the data. For the agent to access directories, you must additionally enable all execute access.
     */
    Subdirectory: SmbSubdirectory;
    /**
     * The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server. An agent that is installed on-premises uses this hostname to mount the SMB server in a network.  This name must either be DNS-compliant or must be an IP version 4 (IPv4) address. 
     */
    ServerHostname: ServerHostname;
    /**
     * The user who can mount the share, has the permissions to access files and folders in the SMB share.
     */
    User: SmbUser;
    /**
     * The name of the Windows domain that the SMB server belongs to.
     */
    Domain?: SmbDomain;
    /**
     * The password of the user who can mount the share, has the permissions to access files and folders in the SMB share.
     */
    Password: SmbPassword;
    /**
     * The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location. 
     */
    AgentArns: AgentArnList;
    /**
     * The mount options used by DataSync to access the SMB server.
     */
    MountOptions?: SmbMountOptions;
    /**
     * The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationSmbResponse {
    /**
     * The Amazon Resource Name (ARN) of the source SMB file system location that is created.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateTaskRequest {
    /**
     * The Amazon Resource Name (ARN) of the source location for the task.
     */
    SourceLocationArn: LocationArn;
    /**
     * The Amazon Resource Name (ARN) of an AWS storage resource's location. 
     */
    DestinationLocationArn: LocationArn;
    /**
     * The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor and log events in the task. 
     */
    CloudWatchLogGroupArn?: LogGroupArn;
    /**
     * The name of a task. This value is a text reference that is used to identify the task in the console. 
     */
    Name?: TagValue;
    /**
     * The set of configuration options that control the behavior of a single execution of the task that occurs when you call StartTaskExecution. You can configure these options to preserve metadata such as user ID (UID) and group ID (GID), file permissions, data integrity verification, and so on. For each individual task execution, you can override these options by specifying the OverrideOptions before starting the task execution. For more information, see the operation. 
     */
    Options?: Options;
    /**
     * A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example, "/folder1|/folder2"   
     */
    Excludes?: FilterList;
    /**
     * Specifies a schedule used to periodically transfer files from a source to a destination location. The schedule should be specified in UTC time. For more information, see task-scheduling.
     */
    Schedule?: TaskSchedule;
    /**
     * The key-value pair that represents the tag that you want to add to the resource. The value can be an empty string. 
     */
    Tags?: InputTagList;
  }
  export interface CreateTaskResponse {
    /**
     * The Amazon Resource Name (ARN) of the task.
     */
    TaskArn?: TaskArn;
  }
  export interface DeleteAgentRequest {
    /**
     * The Amazon Resource Name (ARN) of the agent to delete. Use the ListAgents operation to return a list of agents for your account and AWS Region.
     */
    AgentArn: AgentArn;
  }
  export interface DeleteAgentResponse {
  }
  export interface DeleteLocationRequest {
    /**
     * The Amazon Resource Name (ARN) of the location to delete.
     */
    LocationArn: LocationArn;
  }
  export interface DeleteLocationResponse {
  }
  export interface DeleteTaskRequest {
    /**
     * The Amazon Resource Name (ARN) of the task to delete.
     */
    TaskArn: TaskArn;
  }
  export interface DeleteTaskResponse {
  }
  export interface DescribeAgentRequest {
    /**
     * The Amazon Resource Name (ARN) of the agent to describe.
     */
    AgentArn: AgentArn;
  }
  export interface DescribeAgentResponse {
    /**
     * The Amazon Resource Name (ARN) of the agent.
     */
    AgentArn?: AgentArn;
    /**
     * The name of the agent.
     */
    Name?: TagValue;
    /**
     * The status of the agent. If the status is ONLINE, then the agent is configured properly and is available to use. The Running status is the normal running status for an agent. If the status is OFFLINE, the agent's VM is turned off or the agent is in an unhealthy state. When the issue that caused the unhealthy state is resolved, the agent returns to ONLINE status.
     */
    Status?: AgentStatus;
    /**
     * The time that the agent last connected to DataSyc.
     */
    LastConnectionTime?: Time;
    /**
     * The time that the agent was activated (that is, created in your account).
     */
    CreationTime?: Time;
    /**
     * The type of endpoint that your agent is connected to. If the endpoint is a VPC endpoint, the agent is not accessible over the public internet. 
     */
    EndpointType?: EndpointType;
    /**
     * The subnet and the security group that DataSync used to access a VPC endpoint.
     */
    PrivateLinkConfig?: PrivateLinkConfig;
  }
  export interface DescribeLocationEfsRequest {
    /**
     * The Amazon Resource Name (ARN) of the EFS location to describe.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationEfsResponse {
    /**
     * The Amazon Resource Name (ARN) of the EFS location that was described.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the EFS location that was described.
     */
    LocationUri?: LocationUri;
    Ec2Config?: Ec2Config;
    /**
     * The time that the EFS location was created.
     */
    CreationTime?: Time;
  }
  export interface DescribeLocationFsxWindowsRequest {
    /**
     * The Amazon Resource Name (ARN) of the FSx for Windows location to describe.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationFsxWindowsResponse {
    /**
     * The Amazon Resource Name (ARN) of the FSx for Windows location that was described.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the FSx for Windows location that was described.
     */
    LocationUri?: LocationUri;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are configured for the FSx for Windows file system.
     */
    SecurityGroupArns?: Ec2SecurityGroupArnList;
    /**
     * The time that the FSx for Windows location was created.
     */
    CreationTime?: Time;
    /**
     * The user who has the permissions to access files and folders in the FSx for Windows file system.
     */
    User?: SmbUser;
    /**
     * The name of the Windows domain that the FSx for Windows server belongs to.
     */
    Domain?: SmbDomain;
  }
  export interface DescribeLocationNfsRequest {
    /**
     * The Amazon Resource Name (ARN) of the NFS location to describe.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationNfsResponse {
    /**
     * The Amazon Resource Name (ARN) of the NFS location that was described.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the source NFS location that was described.
     */
    LocationUri?: LocationUri;
    OnPremConfig?: OnPremConfig;
    /**
     * The NFS mount options that DataSync used to mount your NFS share.
     */
    MountOptions?: NfsMountOptions;
    /**
     * The time that the NFS location was created.
     */
    CreationTime?: Time;
  }
  export interface DescribeLocationObjectStorageRequest {
    /**
     * The Amazon Resource Name (ARN) of the self-managed object storage server location that was described.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationObjectStorageResponse {
    /**
     * The Amazon Resource Name (ARN) of the self-managed object storage server location to describe.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the source self-managed object storage server location that was described.
     */
    LocationUri?: LocationUri;
    /**
     * Optional. The access key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use AccessKey and SecretKey to provide the user name and password, respectively.
     */
    AccessKey?: ObjectStorageAccessKey;
    /**
     * The port that your self-managed object storage server accepts inbound network traffic on. The server port is set by default to TCP 80 (HTTP) or TCP 443 (HTTPS).
     */
    ServerPort?: ObjectStorageServerPort;
    /**
     * The protocol that the object storage server uses to communicate. Valid values are HTTP or HTTPS.
     */
    ServerProtocol?: ObjectStorageServerProtocol;
    /**
     * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
     */
    AgentArns?: AgentArnList;
    /**
     * The time that the self-managed object storage server agent was created.
     */
    CreationTime?: Time;
  }
  export interface DescribeLocationS3Request {
    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket location to describe.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationS3Response {
    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket or access point.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the Amazon S3 location that was described.
     */
    LocationUri?: LocationUri;
    /**
     * The Amazon S3 storage class that you chose to store your files in when this location is used as a task destination. For more information about S3 storage classes, see Amazon S3 Storage Classes in the Amazon Simple Storage Service Developer Guide. Some storage classes have behaviors that can affect your S3 storage cost. For detailed information, see using-storage-classes.
     */
    S3StorageClass?: S3StorageClass;
    S3Config?: S3Config;
    /**
     * If you are using DataSync on an Amazon Outpost, the Amazon Resource Name (ARNs) of the EC2 agents deployed on your AWS Outpost. For more information about launching a DataSync agent on an Amazon Outpost, see outposts-agent.
     */
    AgentArns?: AgentArnList;
    /**
     * The time that the Amazon S3 bucket location was created.
     */
    CreationTime?: Time;
  }
  export interface DescribeLocationSmbRequest {
    /**
     * The Amazon Resource Name (ARN) of the SMB location to describe.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationSmbResponse {
    /**
     * The Amazon Resource Name (ARN) of the SMB location that was described.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the source SBM location that was described.
     */
    LocationUri?: LocationUri;
    /**
     * The Amazon Resource Name (ARN) of the source SMB file system location that is created.
     */
    AgentArns?: AgentArnList;
    /**
     * The user who can mount the share, has the permissions to access files and folders in the SMB share.
     */
    User?: SmbUser;
    /**
     * The name of the Windows domain that the SMB server belongs to.
     */
    Domain?: SmbDomain;
    /**
     * The mount options that are available for DataSync to use to access an SMB location.
     */
    MountOptions?: SmbMountOptions;
    /**
     * The time that the SMB location was created.
     */
    CreationTime?: Time;
  }
  export interface DescribeTaskExecutionRequest {
    /**
     * The Amazon Resource Name (ARN) of the task that is being executed.
     */
    TaskExecutionArn: TaskExecutionArn;
  }
  export interface DescribeTaskExecutionResponse {
    /**
     * The Amazon Resource Name (ARN) of the task execution that was described. TaskExecutionArn is hierarchical and includes TaskArn for the task that was executed.  For example, a TaskExecution value with the ARN arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2/execution/exec-08ef1e88ec491019b executed the task with the ARN arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2. 
     */
    TaskExecutionArn?: TaskExecutionArn;
    /**
     * The status of the task execution.  For detailed information about task execution statuses, see Understanding Task Statuses in the AWS DataSync User Guide. 
     */
    Status?: TaskExecutionStatus;
    Options?: Options;
    /**
     * A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example: "/folder1|/folder2"   
     */
    Excludes?: FilterList;
    /**
     * A list of filter rules that determines which files to include when running a task. The list should contain a single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe), for example: "/folder1|/folder2"   
     */
    Includes?: FilterList;
    /**
     * The time that the task execution was started.
     */
    StartTime?: Time;
    /**
     * The expected number of files that is to be transferred over the network. This value is calculated during the PREPARING phase, before the TRANSFERRING phase. This value is the expected number of files to be transferred. It's calculated based on comparing the content of the source and destination locations and finding the delta that needs to be transferred. 
     */
    EstimatedFilesToTransfer?: long;
    /**
     * The estimated physical number of bytes that is to be transferred over the network.
     */
    EstimatedBytesToTransfer?: long;
    /**
     * The actual number of files that was transferred over the network. This value is calculated and updated on an ongoing basis during the TRANSFERRING phase. It's updated periodically when each file is read from the source and sent over the network.  If failures occur during a transfer, this value can be less than EstimatedFilesToTransfer. This value can also be greater than EstimatedFilesTransferred in some cases. This element is implementation-specific for some location types, so don't use it as an indicator for a correct file number or to monitor your task execution.
     */
    FilesTransferred?: long;
    /**
     * The number of logical bytes written to the destination AWS storage resource.
     */
    BytesWritten?: long;
    /**
     * The physical number of bytes transferred over the network.
     */
    BytesTransferred?: long;
    /**
     * The result of the task execution.
     */
    Result?: TaskExecutionResultDetail;
  }
  export interface DescribeTaskRequest {
    /**
     * The Amazon Resource Name (ARN) of the task to describe.
     */
    TaskArn: TaskArn;
  }
  export interface DescribeTaskResponse {
    /**
     * The Amazon Resource Name (ARN) of the task that was described.
     */
    TaskArn?: TaskArn;
    /**
     * The status of the task that was described. For detailed information about task execution statuses, see Understanding Task Statuses in the AWS DataSync User Guide. 
     */
    Status?: TaskStatus;
    /**
     * The name of the task that was described.
     */
    Name?: TagValue;
    /**
     * The Amazon Resource Name (ARN) of the task execution that is syncing files.
     */
    CurrentTaskExecutionArn?: TaskExecutionArn;
    /**
     * The Amazon Resource Name (ARN) of the source file system's location.
     */
    SourceLocationArn?: LocationArn;
    /**
     * The Amazon Resource Name (ARN) of the AWS storage resource's location.
     */
    DestinationLocationArn?: LocationArn;
    /**
     * The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that was used to monitor and log events in the task. For more information on these groups, see Working with Log Groups and Log Streams in the Amazon CloudWatch User Guide.
     */
    CloudWatchLogGroupArn?: LogGroupArn;
    /**
     * The Amazon Resource Name (ARN) of the source ENIs (Elastic Network Interface) that was created for your subnet.
     */
    SourceNetworkInterfaceArns?: SourceNetworkInterfaceArns;
    /**
     * The Amazon Resource Name (ARN) of the destination ENIs (Elastic Network Interface) that was created for your subnet.
     */
    DestinationNetworkInterfaceArns?: DestinationNetworkInterfaceArns;
    /**
     * The set of configuration options that control the behavior of a single execution of the task that occurs when you call StartTaskExecution. You can configure these options to preserve metadata such as user ID (UID) and group (GID), file permissions, data integrity verification, and so on. For each individual task execution, you can override these options by specifying the overriding OverrideOptions value to operation. 
     */
    Options?: Options;
    /**
     * A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example: "/folder1|/folder2"   
     */
    Excludes?: FilterList;
    /**
     * The schedule used to periodically transfer files from a source to a destination location.
     */
    Schedule?: TaskSchedule;
    /**
     * Errors that AWS DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.
     */
    ErrorCode?: string;
    /**
     * Detailed description of an error that was encountered during the task execution. You can use this information to help troubleshoot issues. 
     */
    ErrorDetail?: string;
    /**
     * The time that the task was created.
     */
    CreationTime?: Time;
  }
  export type DestinationNetworkInterfaceArns = NetworkInterfaceArn[];
  export type Duration = number;
  export interface Ec2Config {
    /**
     * The ARN of the subnet and the security group that DataSync uses to access the target EFS file system.
     */
    SubnetArn: Ec2SubnetArn;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.
     */
    SecurityGroupArns: Ec2SecurityGroupArnList;
  }
  export type Ec2SecurityGroupArn = string;
  export type Ec2SecurityGroupArnList = Ec2SecurityGroupArn[];
  export type Ec2SubnetArn = string;
  export type EfsFilesystemArn = string;
  export type EfsSubdirectory = string;
  export type Endpoint = string;
  export type EndpointType = "PUBLIC"|"PRIVATE_LINK"|"FIPS"|string;
  export type FilterAttributeValue = string;
  export type FilterList = FilterRule[];
  export interface FilterRule {
    /**
     * The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
     */
    FilterType?: FilterType;
    /**
     * A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|" (that is, a pipe), for example: /folder1|/folder2   
     */
    Value?: FilterValue;
  }
  export type FilterType = "SIMPLE_PATTERN"|string;
  export type FilterValue = string;
  export type FilterValues = FilterAttributeValue[];
  export type FsxFilesystemArn = string;
  export type FsxWindowsSubdirectory = string;
  export type Gid = "NONE"|"INT_VALUE"|"NAME"|"BOTH"|string;
  export type IamRoleArn = string;
  export type InputTagList = TagListEntry[];
  export interface ListAgentsRequest {
    /**
     * The maximum number of agents to list.
     */
    MaxResults?: MaxResults;
    /**
     * An opaque string that indicates the position at which to begin the next list of agents.
     */
    NextToken?: NextToken;
  }
  export interface ListAgentsResponse {
    /**
     * A list of agents in your account.
     */
    Agents?: AgentList;
    /**
     * An opaque string that indicates the position at which to begin returning the next list of agents.
     */
    NextToken?: NextToken;
  }
  export interface ListLocationsRequest {
    /**
     * The maximum number of locations to return.
     */
    MaxResults?: MaxResults;
    /**
     * An opaque string that indicates the position at which to begin the next list of locations.
     */
    NextToken?: NextToken;
    /**
     * You can use API filters to narrow down the list of resources returned by ListLocations. For example, to retrieve all tasks on a specific source location, you can use ListLocations with filter name LocationType S3 and Operator Equals.
     */
    Filters?: LocationFilters;
  }
  export interface ListLocationsResponse {
    /**
     * An array that contains a list of locations.
     */
    Locations?: LocationList;
    /**
     * An opaque string that indicates the position at which to begin returning the next list of locations.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource whose tags to list.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * The maximum number of locations to return.
     */
    MaxResults?: MaxResults;
    /**
     * An opaque string that indicates the position at which to begin the next list of locations.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Array of resource tags.
     */
    Tags?: OutputTagList;
    /**
     * An opaque string that indicates the position at which to begin returning the next list of resource tags.
     */
    NextToken?: NextToken;
  }
  export interface ListTaskExecutionsRequest {
    /**
     * The Amazon Resource Name (ARN) of the task whose tasks you want to list.
     */
    TaskArn?: TaskArn;
    /**
     * The maximum number of executed tasks to list.
     */
    MaxResults?: MaxResults;
    /**
     * An opaque string that indicates the position at which to begin the next list of the executed tasks.
     */
    NextToken?: NextToken;
  }
  export interface ListTaskExecutionsResponse {
    /**
     * A list of executed tasks.
     */
    TaskExecutions?: TaskExecutionList;
    /**
     * An opaque string that indicates the position at which to begin returning the next list of executed tasks.
     */
    NextToken?: NextToken;
  }
  export interface ListTasksRequest {
    /**
     * The maximum number of tasks to return.
     */
    MaxResults?: MaxResults;
    /**
     * An opaque string that indicates the position at which to begin the next list of tasks.
     */
    NextToken?: NextToken;
    /**
     * You can use API filters to narrow down the list of resources returned by ListTasks. For example, to retrieve all tasks on a specific source location, you can use ListTasks with filter name LocationId and Operator Equals with the ARN for the location.
     */
    Filters?: TaskFilters;
  }
  export interface ListTasksResponse {
    /**
     * A list of all the tasks that are returned.
     */
    Tasks?: TaskList;
    /**
     * An opaque string that indicates the position at which to begin returning the next list of tasks.
     */
    NextToken?: NextToken;
  }
  export type LocationArn = string;
  export interface LocationFilter {
    /**
     * The name of the filter being used. Each API call supports a list of filters that are available for it (for example, LocationType for ListLocations).
     */
    Name: LocationFilterName;
    /**
     * The values that you want to filter for. For example, you might want to display only Amazon S3 locations.
     */
    Values: FilterValues;
    /**
     * The operator that is used to compare filter values (for example, Equals or Contains). For more about API filtering operators, see query-resources.
     */
    Operator: Operator;
  }
  export type LocationFilterName = "LocationUri"|"LocationType"|"CreationTime"|string;
  export type LocationFilters = LocationFilter[];
  export type LocationList = LocationListEntry[];
  export interface LocationListEntry {
    /**
     * The Amazon Resource Name (ARN) of the location. For Network File System (NFS) or Amazon EFS, the location is the export path. For Amazon S3, the location is the prefix path that you want to mount and use as the root of the location.
     */
    LocationArn?: LocationArn;
    /**
     * Represents a list of URLs of a location. LocationUri returns an array that contains a list of locations when the ListLocations operation is called. Format: TYPE://GLOBAL_ID/SUBDIR. TYPE designates the type of location. Valid values: NFS | EFS | S3. GLOBAL_ID is the globally unique identifier of the resource that backs the location. An example for EFS is us-east-2.fs-abcd1234. An example for Amazon S3 is the bucket name, such as myBucket. An example for NFS is a valid IPv4 address or a host name compliant with Domain Name Service (DNS). SUBDIR is a valid file system path, delimited by forward slashes as is the *nix convention. For NFS and Amazon EFS, it's the export path to mount the location. For Amazon S3, it's the prefix path that you mount to and treat as the root of the location. 
     */
    LocationUri?: LocationUri;
  }
  export type LocationUri = string;
  export type LogGroupArn = string;
  export type LogLevel = "OFF"|"BASIC"|"TRANSFER"|string;
  export type MaxResults = number;
  export type Mtime = "NONE"|"PRESERVE"|string;
  export type NetworkInterfaceArn = string;
  export type NextToken = string;
  export interface NfsMountOptions {
    /**
     * The specific NFS version that you want DataSync to use to mount your NFS share. If the server refuses to use the version specified, the sync will fail. If you don't specify a version, DataSync defaults to AUTOMATIC. That is, DataSync automatically selects a version based on negotiation with the NFS server. You can specify the following NFS versions:     NFSv3  - stateless protocol version that allows for asynchronous writes on the server.     NFSv4.0  - stateful, firewall-friendly protocol version that supports delegations and pseudo filesystems.     NFSv4.1  - stateful protocol version that supports sessions, directory delegations, and parallel data processing. Version 4.1 also includes all features available in version 4.0.  
     */
    Version?: NfsVersion;
  }
  export type NfsSubdirectory = string;
  export type NfsVersion = "AUTOMATIC"|"NFS3"|"NFS4_0"|"NFS4_1"|string;
  export type ObjectStorageAccessKey = string;
  export type ObjectStorageBucketName = string;
  export type ObjectStorageSecretKey = string;
  export type ObjectStorageServerPort = number;
  export type ObjectStorageServerProtocol = "HTTPS"|"HTTP"|string;
  export interface OnPremConfig {
    /**
     * ARNs of the agents to use for an NFS location.
     */
    AgentArns: AgentArnList;
  }
  export type Operator = "Equals"|"NotEquals"|"In"|"LessThanOrEqual"|"LessThan"|"GreaterThanOrEqual"|"GreaterThan"|"Contains"|"NotContains"|"BeginsWith"|string;
  export interface Options {
    /**
     * A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred. For more information, see create-task  Default value: POINT_IN_TIME_CONSISTENT. ONLY_FILES_TRANSFERRED (recommended): Perform verification only on files that were transferred.  POINT_IN_TIME_CONSISTENT: Scan the entire source and entire destination at the end of the transfer to verify that source and destination are fully synchronized. This option isn't supported when transferring to S3 Glacier or S3 Glacier Deep Archive storage classes. NONE: No additional verification is done at the end of the transfer, but all data transmissions are integrity-checked with checksum verification during the transfer.
     */
    VerifyMode?: VerifyMode;
    /**
     * A value that determines whether files at the destination should be overwritten or preserved when copying files. If set to NEVER a destination file will not be replaced by a source file, even if the destination file differs from the source file. If you modify files in the destination and you sync the files, you can use this value to protect against overwriting those changes.  Some storage classes have specific behaviors that can affect your S3 storage cost. For detailed information, see using-storage-classes in the AWS DataSync User Guide.
     */
    OverwriteMode?: OverwriteMode;
    /**
     * A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to). If you set Atime to BEST_EFFORT, DataSync attempts to preserve the original Atime attribute on all source files (that is, the version before the PREPARING phase). However, Atime's behavior is not fully standard across platforms, so AWS DataSync can only do this on a best-effort basis.  Default value: BEST_EFFORT. BEST_EFFORT: Attempt to preserve the per-file Atime value (recommended). NONE: Ignore Atime.  If Atime is set to BEST_EFFORT, Mtime must be set to PRESERVE.  If Atime is set to NONE, Mtime must also be NONE.  
     */
    Atime?: Atime;
    /**
     * A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.  Default value: PRESERVE.  PRESERVE: Preserve original Mtime (recommended)  NONE: Ignore Mtime.   If Mtime is set to PRESERVE, Atime must be set to BEST_EFFORT. If Mtime is set to NONE, Atime must also be set to NONE.  
     */
    Mtime?: Mtime;
    /**
     * The user ID (UID) of the file's owner.  Default value: INT_VALUE. This preserves the integer value of the ID. INT_VALUE: Preserve the integer value of UID and group ID (GID) (recommended). NONE: Ignore UID and GID. 
     */
    Uid?: Uid;
    /**
     * The group ID (GID) of the file's owners.  Default value: INT_VALUE. This preserves the integer value of the ID. INT_VALUE: Preserve the integer value of user ID (UID) and GID (recommended). NONE: Ignore UID and GID. 
     */
    Gid?: Gid;
    /**
     * A value that specifies whether files in the destination that don't exist in the source file system should be preserved. This option can affect your storage cost. If your task deletes objects, you might incur minimum storage duration charges for certain storage classes. For detailed information, see using-storage-classes in the AWS DataSync User Guide. Default value: PRESERVE. PRESERVE: Ignore such destination files (recommended).  REMOVE: Delete destination files that aren’t present in the source.
     */
    PreserveDeletedFiles?: PreserveDeletedFiles;
    /**
     * A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.  AWS DataSync can't sync the actual contents of such devices, because they are nonterminal and don't return an end-of-file (EOF) marker.  Default value: NONE. NONE: Ignore special devices (recommended).  PRESERVE: Preserve character and block device metadata. This option isn't currently supported for Amazon EFS. 
     */
    PreserveDevices?: PreserveDevices;
    /**
     * A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.  Default value: PRESERVE. PRESERVE: Preserve POSIX-style permissions (recommended). NONE: Ignore permissions.   AWS DataSync can preserve extant permissions of a source location. 
     */
    PosixPermissions?: PosixPermissions;
    /**
     * A value that limits the bandwidth used by AWS DataSync. For example, if you want AWS DataSync to use a maximum of 1 MB, set this value to 1048576 (=1024*1024).
     */
    BytesPerSecond?: BytesPerSecond;
    /**
     * A value that determines whether tasks should be queued before executing the tasks. If set to ENABLED, the tasks will be queued. The default is ENABLED. If you use the same agent to run multiple tasks, you can enable the tasks to run in series. For more information, see queue-task-execution.
     */
    TaskQueueing?: TaskQueueing;
    /**
     * A value that determines the type of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide. For more information about providing a log group for DataSync, see CloudWatchLogGroupArn. If set to OFF, no logs are published. BASIC publishes logs on errors for individual files transferred, and TRANSFER publishes logs for every file or object that is transferred and integrity checked.
     */
    LogLevel?: LogLevel;
    /**
     * A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.  CHANGED: DataSync copies only data or metadata that is new or different content from the source location to the destination location. ALL: DataSync copies all source location content to the destination, without comparing to existing content on the destination.
     */
    TransferMode?: TransferMode;
  }
  export type OutputTagList = TagListEntry[];
  export type OverwriteMode = "ALWAYS"|"NEVER"|string;
  export type PLSecurityGroupArnList = Ec2SecurityGroupArn[];
  export type PLSubnetArnList = Ec2SubnetArn[];
  export type PhaseStatus = "PENDING"|"SUCCESS"|"ERROR"|string;
  export type PosixPermissions = "NONE"|"PRESERVE"|string;
  export type PreserveDeletedFiles = "PRESERVE"|"REMOVE"|string;
  export type PreserveDevices = "NONE"|"PRESERVE"|string;
  export interface PrivateLinkConfig {
    /**
     * The ID of the VPC endpoint that is configured for an agent. An agent that is configured with a VPC endpoint will not be accessible over the public internet.
     */
    VpcEndpointId?: VpcEndpointId;
    /**
     * The private endpoint that is configured for an agent that has access to IP addresses in a PrivateLink. An agent that is configured with this endpoint will not be accessible over the public internet.
     */
    PrivateLinkEndpoint?: Endpoint;
    /**
     * The Amazon Resource Names (ARNs) of the subnets that are configured for an agent activated in a VPC or an agent that has access to a VPC endpoint.
     */
    SubnetArns?: PLSubnetArnList;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are configured for the EC2 resource that hosts an agent activated in a VPC or an agent that has access to a VPC endpoint.
     */
    SecurityGroupArns?: PLSecurityGroupArnList;
  }
  export type S3BucketArn = string;
  export interface S3Config {
    /**
     * The Amazon S3 bucket to access. This bucket is used as a parameter in the CreateLocationS3 operation. 
     */
    BucketAccessRoleArn: IamRoleArn;
  }
  export type S3StorageClass = "STANDARD"|"STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"GLACIER"|"DEEP_ARCHIVE"|"OUTPOSTS"|string;
  export type S3Subdirectory = string;
  export type ScheduleExpressionCron = string;
  export type ServerHostname = string;
  export type SmbDomain = string;
  export interface SmbMountOptions {
    /**
     * The specific SMB version that you want DataSync to use to mount your SMB share. If you don't specify a version, DataSync defaults to AUTOMATIC. That is, DataSync automatically selects a version based on negotiation with the SMB server.
     */
    Version?: SmbVersion;
  }
  export type SmbPassword = string;
  export type SmbSubdirectory = string;
  export type SmbUser = string;
  export type SmbVersion = "AUTOMATIC"|"SMB2"|"SMB3"|string;
  export type SourceNetworkInterfaceArns = NetworkInterfaceArn[];
  export interface StartTaskExecutionRequest {
    /**
     * The Amazon Resource Name (ARN) of the task to start.
     */
    TaskArn: TaskArn;
    OverrideOptions?: Options;
    /**
     * A list of filter rules that determines which files to include when running a task. The pattern should contain a single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe). For example: "/folder1|/folder2"   
     */
    Includes?: FilterList;
  }
  export interface StartTaskExecutionResponse {
    /**
     * The Amazon Resource Name (ARN) of the specific task execution that was started.
     */
    TaskExecutionArn?: TaskExecutionArn;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagListEntry {
    /**
     * The key for an AWS resource tag.
     */
    Key: TagKey;
    /**
     * The value for an AWS resource tag.
     */
    Value?: TagValue;
  }
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to apply the tag to.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * The tags to apply.
     */
    Tags: InputTagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TaggableResourceArn = string;
  export type TaskArn = string;
  export type TaskExecutionArn = string;
  export type TaskExecutionList = TaskExecutionListEntry[];
  export interface TaskExecutionListEntry {
    /**
     * The Amazon Resource Name (ARN) of the task that was executed.
     */
    TaskExecutionArn?: TaskExecutionArn;
    /**
     * The status of a task execution.
     */
    Status?: TaskExecutionStatus;
  }
  export interface TaskExecutionResultDetail {
    /**
     * The total time in milliseconds that AWS DataSync spent in the PREPARING phase. 
     */
    PrepareDuration?: Duration;
    /**
     * The status of the PREPARING phase.
     */
    PrepareStatus?: PhaseStatus;
    /**
     * The total time in milliseconds that AWS DataSync took to transfer the file from the source to the destination location.
     */
    TotalDuration?: Duration;
    /**
     * The total time in milliseconds that AWS DataSync spent in the TRANSFERRING phase.
     */
    TransferDuration?: Duration;
    /**
     * The status of the TRANSFERRING Phase.
     */
    TransferStatus?: PhaseStatus;
    /**
     * The total time in milliseconds that AWS DataSync spent in the VERIFYING phase.
     */
    VerifyDuration?: Duration;
    /**
     * The status of the VERIFYING Phase.
     */
    VerifyStatus?: PhaseStatus;
    /**
     * Errors that AWS DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.
     */
    ErrorCode?: string;
    /**
     * Detailed description of an error that was encountered during the task execution. You can use this information to help troubleshoot issues. 
     */
    ErrorDetail?: string;
  }
  export type TaskExecutionStatus = "QUEUED"|"LAUNCHING"|"PREPARING"|"TRANSFERRING"|"VERIFYING"|"SUCCESS"|"ERROR"|string;
  export interface TaskFilter {
    /**
     * The name of the filter being used. Each API call supports a list of filters that are available for it. For example, LocationId for ListTasks.
     */
    Name: TaskFilterName;
    /**
     * The values that you want to filter for. For example, you might want to display only tasks for a specific destination location.
     */
    Values: FilterValues;
    /**
     * The operator that is used to compare filter values (for example, Equals or Contains). For more about API filtering operators, see query-resources.
     */
    Operator: Operator;
  }
  export type TaskFilterName = "LocationId"|"CreationTime"|string;
  export type TaskFilters = TaskFilter[];
  export type TaskList = TaskListEntry[];
  export interface TaskListEntry {
    /**
     * The Amazon Resource Name (ARN) of the task.
     */
    TaskArn?: TaskArn;
    /**
     * The status of the task.
     */
    Status?: TaskStatus;
    /**
     * The name of the task.
     */
    Name?: TagValue;
  }
  export type TaskQueueing = "ENABLED"|"DISABLED"|string;
  export interface TaskSchedule {
    /**
     * A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location. 
     */
    ScheduleExpression: ScheduleExpressionCron;
  }
  export type TaskStatus = "AVAILABLE"|"CREATING"|"QUEUED"|"RUNNING"|"UNAVAILABLE"|string;
  export type Time = Date;
  export type TransferMode = "CHANGED"|"ALL"|string;
  export type Uid = "NONE"|"INT_VALUE"|"NAME"|"BOTH"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to remove the tag from.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * The keys in the key-value pair in the tag to remove.
     */
    Keys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAgentRequest {
    /**
     * The Amazon Resource Name (ARN) of the agent to update.
     */
    AgentArn: AgentArn;
    /**
     * The name that you want to use to configure the agent.
     */
    Name?: TagValue;
  }
  export interface UpdateAgentResponse {
  }
  export interface UpdateTaskRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource name of the task to update.
     */
    TaskArn: TaskArn;
    Options?: Options;
    /**
     * A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example: "/folder1|/folder2"   
     */
    Excludes?: FilterList;
    /**
     * Specifies a schedule used to periodically transfer files from a source to a destination location. You can configure your task to execute hourly, daily, weekly or on specific days of the week. You control when in the day or hour you want the task to execute. The time you specify is UTC time. For more information, see task-scheduling.
     */
    Schedule?: TaskSchedule;
    /**
     * The name of the task to update.
     */
    Name?: TagValue;
    /**
     * The Amazon Resource Name (ARN) of the resource name of the CloudWatch LogGroup.
     */
    CloudWatchLogGroupArn?: LogGroupArn;
  }
  export interface UpdateTaskResponse {
  }
  export type VerifyMode = "POINT_IN_TIME_CONSISTENT"|"ONLY_FILES_TRANSFERRED"|"NONE"|string;
  export type VpcEndpointId = string;
  export type long = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-09"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DataSync client.
   */
  export import Types = DataSync;
}
export = DataSync;
