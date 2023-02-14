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
   * Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.
   */
  cancelTaskExecution(params: DataSync.Types.CancelTaskExecutionRequest, callback?: (err: AWSError, data: DataSync.Types.CancelTaskExecutionResponse) => void): Request<DataSync.Types.CancelTaskExecutionResponse, AWSError>;
  /**
   * Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.
   */
  cancelTaskExecution(callback?: (err: AWSError, data: DataSync.Types.CancelTaskExecutionResponse) => void): Request<DataSync.Types.CancelTaskExecutionResponse, AWSError>;
  /**
   * Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region. You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet. You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run.  Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.
   */
  createAgent(params: DataSync.Types.CreateAgentRequest, callback?: (err: AWSError, data: DataSync.Types.CreateAgentResponse) => void): Request<DataSync.Types.CreateAgentResponse, AWSError>;
  /**
   * Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region. You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet. You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run.  Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.
   */
  createAgent(callback?: (err: AWSError, data: DataSync.Types.CreateAgentResponse) => void): Request<DataSync.Types.CreateAgentResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see Creating a location for Amazon EFS.
   */
  createLocationEfs(params: DataSync.Types.CreateLocationEfsRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationEfsResponse) => void): Request<DataSync.Types.CreateLocationEfsResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see Creating a location for Amazon EFS.
   */
  createLocationEfs(callback?: (err: AWSError, data: DataSync.Types.CreateLocationEfsResponse) => void): Request<DataSync.Types.CreateLocationEfsResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for Lustre file system.
   */
  createLocationFsxLustre(params: DataSync.Types.CreateLocationFsxLustreRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxLustreResponse) => void): Request<DataSync.Types.CreateLocationFsxLustreResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for Lustre file system.
   */
  createLocationFsxLustre(callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxLustreResponse) => void): Request<DataSync.Types.CreateLocationFsxLustreResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see Creating a location for FSx for ONTAP.
   */
  createLocationFsxOntap(params: DataSync.Types.CreateLocationFsxOntapRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxOntapResponse) => void): Request<DataSync.Types.CreateLocationFsxOntapResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see Creating a location for FSx for ONTAP.
   */
  createLocationFsxOntap(callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxOntapResponse) => void): Request<DataSync.Types.CreateLocationFsxOntapResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see Creating a location for FSx for OpenZFS.  Request parameters related to SMB aren't supported with the CreateLocationFsxOpenZfs operation. 
   */
  createLocationFsxOpenZfs(params: DataSync.Types.CreateLocationFsxOpenZfsRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxOpenZfsResponse) => void): Request<DataSync.Types.CreateLocationFsxOpenZfsResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see Creating a location for FSx for OpenZFS.  Request parameters related to SMB aren't supported with the CreateLocationFsxOpenZfs operation. 
   */
  createLocationFsxOpenZfs(callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxOpenZfsResponse) => void): Request<DataSync.Types.CreateLocationFsxOpenZfsResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for Windows File Server file system.
   */
  createLocationFsxWindows(params: DataSync.Types.CreateLocationFsxWindowsRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxWindowsResponse) => void): Request<DataSync.Types.CreateLocationFsxWindowsResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon FSx for Windows File Server file system.
   */
  createLocationFsxWindows(callback?: (err: AWSError, data: DataSync.Types.CreateLocationFsxWindowsResponse) => void): Request<DataSync.Types.CreateLocationFsxWindowsResponse, AWSError>;
  /**
   * Creates an endpoint for a Hadoop Distributed File System (HDFS). 
   */
  createLocationHdfs(params: DataSync.Types.CreateLocationHdfsRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationHdfsResponse) => void): Request<DataSync.Types.CreateLocationHdfsResponse, AWSError>;
  /**
   * Creates an endpoint for a Hadoop Distributed File System (HDFS). 
   */
  createLocationHdfs(callback?: (err: AWSError, data: DataSync.Types.CreateLocationHdfsResponse) => void): Request<DataSync.Types.CreateLocationHdfsResponse, AWSError>;
  /**
   * Defines a file system on a Network File System (NFS) server that can be read from or written to.
   */
  createLocationNfs(params: DataSync.Types.CreateLocationNfsRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationNfsResponse) => void): Request<DataSync.Types.CreateLocationNfsResponse, AWSError>;
  /**
   * Defines a file system on a Network File System (NFS) server that can be read from or written to.
   */
  createLocationNfs(callback?: (err: AWSError, data: DataSync.Types.CreateLocationNfsResponse) => void): Request<DataSync.Types.CreateLocationNfsResponse, AWSError>;
  /**
   * Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see Creating a location for object storage.
   */
  createLocationObjectStorage(params: DataSync.Types.CreateLocationObjectStorageRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationObjectStorageResponse) => void): Request<DataSync.Types.CreateLocationObjectStorageResponse, AWSError>;
  /**
   * Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see Creating a location for object storage.
   */
  createLocationObjectStorage(callback?: (err: AWSError, data: DataSync.Types.CreateLocationObjectStorageResponse) => void): Request<DataSync.Types.CreateLocationObjectStorageResponse, AWSError>;
  /**
   * Creates an endpoint for an Amazon S3 bucket that DataSync can access for a transfer. For more information, see Create an Amazon S3 location.
   */
  createLocationS3(params: DataSync.Types.CreateLocationS3Request, callback?: (err: AWSError, data: DataSync.Types.CreateLocationS3Response) => void): Request<DataSync.Types.CreateLocationS3Response, AWSError>;
  /**
   * Creates an endpoint for an Amazon S3 bucket that DataSync can access for a transfer. For more information, see Create an Amazon S3 location.
   */
  createLocationS3(callback?: (err: AWSError, data: DataSync.Types.CreateLocationS3Response) => void): Request<DataSync.Types.CreateLocationS3Response, AWSError>;
  /**
   * Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see Creating an SMB location.
   */
  createLocationSmb(params: DataSync.Types.CreateLocationSmbRequest, callback?: (err: AWSError, data: DataSync.Types.CreateLocationSmbResponse) => void): Request<DataSync.Types.CreateLocationSmbResponse, AWSError>;
  /**
   * Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see Creating an SMB location.
   */
  createLocationSmb(callback?: (err: AWSError, data: DataSync.Types.CreateLocationSmbResponse) => void): Request<DataSync.Types.CreateLocationSmbResponse, AWSError>;
  /**
   * Configures a task, which defines where and how DataSync transfers your data. A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).
   */
  createTask(params: DataSync.Types.CreateTaskRequest, callback?: (err: AWSError, data: DataSync.Types.CreateTaskResponse) => void): Request<DataSync.Types.CreateTaskResponse, AWSError>;
  /**
   * Configures a task, which defines where and how DataSync transfers your data. A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).
   */
  createTask(callback?: (err: AWSError, data: DataSync.Types.CreateTaskResponse) => void): Request<DataSync.Types.CreateTaskResponse, AWSError>;
  /**
   * Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
   */
  deleteAgent(params: DataSync.Types.DeleteAgentRequest, callback?: (err: AWSError, data: DataSync.Types.DeleteAgentResponse) => void): Request<DataSync.Types.DeleteAgentResponse, AWSError>;
  /**
   * Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
   */
  deleteAgent(callback?: (err: AWSError, data: DataSync.Types.DeleteAgentResponse) => void): Request<DataSync.Types.DeleteAgentResponse, AWSError>;
  /**
   * Deletes the configuration of a location used by DataSync. 
   */
  deleteLocation(params: DataSync.Types.DeleteLocationRequest, callback?: (err: AWSError, data: DataSync.Types.DeleteLocationResponse) => void): Request<DataSync.Types.DeleteLocationResponse, AWSError>;
  /**
   * Deletes the configuration of a location used by DataSync. 
   */
  deleteLocation(callback?: (err: AWSError, data: DataSync.Types.DeleteLocationResponse) => void): Request<DataSync.Types.DeleteLocationResponse, AWSError>;
  /**
   * Deletes an DataSync task.
   */
  deleteTask(params: DataSync.Types.DeleteTaskRequest, callback?: (err: AWSError, data: DataSync.Types.DeleteTaskResponse) => void): Request<DataSync.Types.DeleteTaskResponse, AWSError>;
  /**
   * Deletes an DataSync task.
   */
  deleteTask(callback?: (err: AWSError, data: DataSync.Types.DeleteTaskResponse) => void): Request<DataSync.Types.DeleteTaskResponse, AWSError>;
  /**
   * Returns metadata about an DataSync agent, such as its name, endpoint type, and status.
   */
  describeAgent(params: DataSync.Types.DescribeAgentRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeAgentResponse) => void): Request<DataSync.Types.DescribeAgentResponse, AWSError>;
  /**
   * Returns metadata about an DataSync agent, such as its name, endpoint type, and status.
   */
  describeAgent(callback?: (err: AWSError, data: DataSync.Types.DescribeAgentResponse) => void): Request<DataSync.Types.DescribeAgentResponse, AWSError>;
  /**
   * Returns metadata about your DataSync location for an Amazon EFS file system.
   */
  describeLocationEfs(params: DataSync.Types.DescribeLocationEfsRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationEfsResponse) => void): Request<DataSync.Types.DescribeLocationEfsResponse, AWSError>;
  /**
   * Returns metadata about your DataSync location for an Amazon EFS file system.
   */
  describeLocationEfs(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationEfsResponse) => void): Request<DataSync.Types.DescribeLocationEfsResponse, AWSError>;
  /**
   * Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.
   */
  describeLocationFsxLustre(params: DataSync.Types.DescribeLocationFsxLustreRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxLustreResponse) => void): Request<DataSync.Types.DescribeLocationFsxLustreResponse, AWSError>;
  /**
   * Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.
   */
  describeLocationFsxLustre(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxLustreResponse) => void): Request<DataSync.Types.DescribeLocationFsxLustreResponse, AWSError>;
  /**
   * Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.  If your location uses SMB, the DescribeLocationFsxOntap operation doesn't actually return a Password. 
   */
  describeLocationFsxOntap(params: DataSync.Types.DescribeLocationFsxOntapRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxOntapResponse) => void): Request<DataSync.Types.DescribeLocationFsxOntapResponse, AWSError>;
  /**
   * Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.  If your location uses SMB, the DescribeLocationFsxOntap operation doesn't actually return a Password. 
   */
  describeLocationFsxOntap(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxOntapResponse) => void): Request<DataSync.Types.DescribeLocationFsxOntapResponse, AWSError>;
  /**
   * Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.  Response elements related to SMB aren't supported with the DescribeLocationFsxOpenZfs operation. 
   */
  describeLocationFsxOpenZfs(params: DataSync.Types.DescribeLocationFsxOpenZfsRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxOpenZfsResponse) => void): Request<DataSync.Types.DescribeLocationFsxOpenZfsResponse, AWSError>;
  /**
   * Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.  Response elements related to SMB aren't supported with the DescribeLocationFsxOpenZfs operation. 
   */
  describeLocationFsxOpenZfs(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxOpenZfsResponse) => void): Request<DataSync.Types.DescribeLocationFsxOpenZfsResponse, AWSError>;
  /**
   * Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.
   */
  describeLocationFsxWindows(params: DataSync.Types.DescribeLocationFsxWindowsRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxWindowsResponse) => void): Request<DataSync.Types.DescribeLocationFsxWindowsResponse, AWSError>;
  /**
   * Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.
   */
  describeLocationFsxWindows(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationFsxWindowsResponse) => void): Request<DataSync.Types.DescribeLocationFsxWindowsResponse, AWSError>;
  /**
   * Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 
   */
  describeLocationHdfs(params: DataSync.Types.DescribeLocationHdfsRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationHdfsResponse) => void): Request<DataSync.Types.DescribeLocationHdfsResponse, AWSError>;
  /**
   * Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 
   */
  describeLocationHdfs(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationHdfsResponse) => void): Request<DataSync.Types.DescribeLocationHdfsResponse, AWSError>;
  /**
   * Returns metadata, such as the path information, about an NFS location.
   */
  describeLocationNfs(params: DataSync.Types.DescribeLocationNfsRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationNfsResponse) => void): Request<DataSync.Types.DescribeLocationNfsResponse, AWSError>;
  /**
   * Returns metadata, such as the path information, about an NFS location.
   */
  describeLocationNfs(callback?: (err: AWSError, data: DataSync.Types.DescribeLocationNfsResponse) => void): Request<DataSync.Types.DescribeLocationNfsResponse, AWSError>;
  /**
   * Returns metadata about your DataSync location for an object storage system.
   */
  describeLocationObjectStorage(params: DataSync.Types.DescribeLocationObjectStorageRequest, callback?: (err: AWSError, data: DataSync.Types.DescribeLocationObjectStorageResponse) => void): Request<DataSync.Types.DescribeLocationObjectStorageResponse, AWSError>;
  /**
   * Returns metadata about your DataSync location for an object storage system.
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
   * Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request. With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.  ListAgents is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with CreateAgent and then immediately run ListAgents, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using DescribeAgent.
   */
  listAgents(params: DataSync.Types.ListAgentsRequest, callback?: (err: AWSError, data: DataSync.Types.ListAgentsResponse) => void): Request<DataSync.Types.ListAgentsResponse, AWSError>;
  /**
   * Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request. With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.  ListAgents is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with CreateAgent and then immediately run ListAgents, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using DescribeAgent.
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
   * Returns all the tags associated with an Amazon Web Services resource.
   */
  listTagsForResource(params: DataSync.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: DataSync.Types.ListTagsForResourceResponse) => void): Request<DataSync.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns all the tags associated with an Amazon Web Services resource.
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
   * Returns a list of the DataSync tasks you created.
   */
  listTasks(params: DataSync.Types.ListTasksRequest, callback?: (err: AWSError, data: DataSync.Types.ListTasksResponse) => void): Request<DataSync.Types.ListTasksResponse, AWSError>;
  /**
   * Returns a list of the DataSync tasks you created.
   */
  listTasks(callback?: (err: AWSError, data: DataSync.Types.ListTasksResponse) => void): Request<DataSync.Types.ListTasksResponse, AWSError>;
  /**
   * Starts an DataSync task. For each task, you can only run one task execution at a time. There are several phases to a task execution. For more information, see Task execution statuses.
   */
  startTaskExecution(params: DataSync.Types.StartTaskExecutionRequest, callback?: (err: AWSError, data: DataSync.Types.StartTaskExecutionResponse) => void): Request<DataSync.Types.StartTaskExecutionResponse, AWSError>;
  /**
   * Starts an DataSync task. For each task, you can only run one task execution at a time. There are several phases to a task execution. For more information, see Task execution statuses.
   */
  startTaskExecution(callback?: (err: AWSError, data: DataSync.Types.StartTaskExecutionResponse) => void): Request<DataSync.Types.StartTaskExecutionResponse, AWSError>;
  /**
   * Applies a tag to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources. These include DataSync resources, such as locations, tasks, and task executions.
   */
  tagResource(params: DataSync.Types.TagResourceRequest, callback?: (err: AWSError, data: DataSync.Types.TagResourceResponse) => void): Request<DataSync.Types.TagResourceResponse, AWSError>;
  /**
   * Applies a tag to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources. These include DataSync resources, such as locations, tasks, and task executions.
   */
  tagResource(callback?: (err: AWSError, data: DataSync.Types.TagResourceResponse) => void): Request<DataSync.Types.TagResourceResponse, AWSError>;
  /**
   * Removes tags from an Amazon Web Services resource.
   */
  untagResource(params: DataSync.Types.UntagResourceRequest, callback?: (err: AWSError, data: DataSync.Types.UntagResourceResponse) => void): Request<DataSync.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes tags from an Amazon Web Services resource.
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
   * Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.
   */
  updateLocationHdfs(params: DataSync.Types.UpdateLocationHdfsRequest, callback?: (err: AWSError, data: DataSync.Types.UpdateLocationHdfsResponse) => void): Request<DataSync.Types.UpdateLocationHdfsResponse, AWSError>;
  /**
   * Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.
   */
  updateLocationHdfs(callback?: (err: AWSError, data: DataSync.Types.UpdateLocationHdfsResponse) => void): Request<DataSync.Types.UpdateLocationHdfsResponse, AWSError>;
  /**
   * Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see Creating a location for NFS.
   */
  updateLocationNfs(params: DataSync.Types.UpdateLocationNfsRequest, callback?: (err: AWSError, data: DataSync.Types.UpdateLocationNfsResponse) => void): Request<DataSync.Types.UpdateLocationNfsResponse, AWSError>;
  /**
   * Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see Creating a location for NFS.
   */
  updateLocationNfs(callback?: (err: AWSError, data: DataSync.Types.UpdateLocationNfsResponse) => void): Request<DataSync.Types.UpdateLocationNfsResponse, AWSError>;
  /**
   * Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see Creating a location for object storage.
   */
  updateLocationObjectStorage(params: DataSync.Types.UpdateLocationObjectStorageRequest, callback?: (err: AWSError, data: DataSync.Types.UpdateLocationObjectStorageResponse) => void): Request<DataSync.Types.UpdateLocationObjectStorageResponse, AWSError>;
  /**
   * Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see Creating a location for object storage.
   */
  updateLocationObjectStorage(callback?: (err: AWSError, data: DataSync.Types.UpdateLocationObjectStorageResponse) => void): Request<DataSync.Types.UpdateLocationObjectStorageResponse, AWSError>;
  /**
   * Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see Creating a location for SMB.
   */
  updateLocationSmb(params: DataSync.Types.UpdateLocationSmbRequest, callback?: (err: AWSError, data: DataSync.Types.UpdateLocationSmbResponse) => void): Request<DataSync.Types.UpdateLocationSmbResponse, AWSError>;
  /**
   * Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see Creating a location for SMB.
   */
  updateLocationSmb(callback?: (err: AWSError, data: DataSync.Types.UpdateLocationSmbResponse) => void): Request<DataSync.Types.UpdateLocationSmbResponse, AWSError>;
  /**
   * Updates the metadata associated with a task.
   */
  updateTask(params: DataSync.Types.UpdateTaskRequest, callback?: (err: AWSError, data: DataSync.Types.UpdateTaskResponse) => void): Request<DataSync.Types.UpdateTaskResponse, AWSError>;
  /**
   * Updates the metadata associated with a task.
   */
  updateTask(callback?: (err: AWSError, data: DataSync.Types.UpdateTaskResponse) => void): Request<DataSync.Types.UpdateTaskResponse, AWSError>;
  /**
   * Updates execution of a task. You can modify bandwidth throttling for a task execution that is running or queued. For more information, see Adjusting Bandwidth Throttling for a Task Execution.  The only Option that can be modified by UpdateTaskExecution is  BytesPerSecond . 
   */
  updateTaskExecution(params: DataSync.Types.UpdateTaskExecutionRequest, callback?: (err: AWSError, data: DataSync.Types.UpdateTaskExecutionResponse) => void): Request<DataSync.Types.UpdateTaskExecutionResponse, AWSError>;
  /**
   * Updates execution of a task. You can modify bandwidth throttling for a task execution that is running or queued. For more information, see Adjusting Bandwidth Throttling for a Task Execution.  The only Option that can be modified by UpdateTaskExecution is  BytesPerSecond . 
   */
  updateTaskExecution(callback?: (err: AWSError, data: DataSync.Types.UpdateTaskExecutionResponse) => void): Request<DataSync.Types.UpdateTaskExecutionResponse, AWSError>;
}
declare namespace DataSync {
  export type ActivationKey = string;
  export type AgentArn = string;
  export type AgentArnList = AgentArn[];
  export type AgentList = AgentListEntry[];
  export interface AgentListEntry {
    /**
     * The Amazon Resource Name (ARN) of a DataSync agent.
     */
    AgentArn?: AgentArn;
    /**
     * The name of an agent.
     */
    Name?: TagValue;
    /**
     * The status of an agent. For more information, see DataSync agent statuses.
     */
    Status?: AgentStatus;
  }
  export type AgentStatus = "ONLINE"|"OFFLINE"|string;
  export type Atime = "NONE"|"BEST_EFFORT"|string;
  export type BytesPerSecond = number;
  export interface CancelTaskExecutionRequest {
    /**
     * The Amazon Resource Name (ARN) of the task execution to stop.
     */
    TaskExecutionArn: TaskExecutionArn;
  }
  export interface CancelTaskExecutionResponse {
  }
  export interface CreateAgentRequest {
    /**
     * Your agent activation key. You can get the activation key either by sending an HTTP GET request with redirects that enable you to get the agent IP address (port 80). Alternatively, you can get it from the DataSync console. The redirect URL returned in the response provides you the activation key for your agent in the query string parameter activationKey. It might also include other activation-related parameters; however, these are merely defaults. The arguments you pass to this API call determine the actual configuration of your agent. For more information, see Activating an Agent in the DataSync User Guide. 
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
     * The ARNs of the security groups used to protect your data transfer task subnets. See SecurityGroupArns.
     */
    SecurityGroupArns?: PLSecurityGroupArnList;
  }
  export interface CreateAgentResponse {
    /**
     * The Amazon Resource Name (ARN) of the agent. Use the ListAgents operation to return a list of agents for your account and Amazon Web Services Region.
     */
    AgentArn?: AgentArn;
  }
  export interface CreateLocationEfsRequest {
    /**
     * Specifies a mount path for your Amazon EFS file system. This is where DataSync reads or writes data (depending on if this is a source or destination location). By default, DataSync uses the root directory, but you can also include subdirectories.  You must specify a value with forward slashes (for example, /path/to/folder). 
     */
    Subdirectory?: EfsSubdirectory;
    /**
     * Specifies the ARN for the Amazon EFS file system.
     */
    EfsFilesystemArn: EfsFilesystemArn;
    /**
     * Specifies the subnet and security groups DataSync uses to access your Amazon EFS file system.
     */
    Ec2Config: Ec2Config;
    /**
     * Specifies the key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
     */
    Tags?: InputTagList;
    /**
     * Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.
     */
    AccessPointArn?: EfsAccessPointArn;
    /**
     * Specifies an Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.
     */
    FileSystemAccessRoleArn?: IamRoleArn;
    /**
     * Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2 encryption when it copies data to or from the Amazon EFS file system. If you specify an access point using AccessPointArn or an IAM role using FileSystemAccessRoleArn, you must set this parameter to TLS1_2.
     */
    InTransitEncryption?: EfsInTransitEncryption;
  }
  export interface CreateLocationEfsResponse {
    /**
     * The Amazon Resource Name (ARN) of the Amazon EFS file system location that you create.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationFsxLustreRequest {
    /**
     * The Amazon Resource Name (ARN) for the FSx for Lustre file system.
     */
    FsxFilesystemArn: FsxFilesystemArn;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are used to configure the FSx for Lustre file system.
     */
    SecurityGroupArns: Ec2SecurityGroupArnList;
    /**
     * A subdirectory in the location's path. This subdirectory in the FSx for Lustre file system is used to read data from the FSx for Lustre source location or write data to the FSx for Lustre destination.
     */
    Subdirectory?: FsxLustreSubdirectory;
    /**
     * The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationFsxLustreResponse {
    /**
     * The Amazon Resource Name (ARN) of the FSx for Lustre file system location that's created. 
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationFsxOntapRequest {
    Protocol: FsxProtocol;
    /**
     * Specifies the Amazon EC2 security groups that provide access to your file system's preferred subnet. The security groups must allow outbound traffic on the following ports (depending on the protocol you use):    Network File System (NFS): TCP ports 111, 635, and 2049    Server Message Block (SMB): TCP port 445   Your file system's security groups must also allow inbound traffic on the same ports.
     */
    SecurityGroupArns: Ec2SecurityGroupArnList;
    /**
     * Specifies the ARN of the storage virtual machine (SVM) in your file system where you want to copy data to or from.
     */
    StorageVirtualMachineArn: StorageVirtualMachineArn;
    /**
     * Specifies a path to the file share in the SVM where you'll copy your data. You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares). For example, your mount path might be /vol1, /vol1/tree1, or /share1.  Don't specify a junction path in the SVM's root volume. For more information, see Managing FSx for ONTAP storage virtual machines in the Amazon FSx for NetApp ONTAP User Guide. 
     */
    Subdirectory?: FsxOntapSubdirectory;
    /**
     * Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationFsxOntapResponse {
    /**
     * Specifies the ARN of the FSx for ONTAP file system location that you create.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationFsxOpenZfsRequest {
    /**
     * The Amazon Resource Name (ARN) of the FSx for OpenZFS file system.
     */
    FsxFilesystemArn: FsxFilesystemArn;
    /**
     * The type of protocol that DataSync uses to access your file system.
     */
    Protocol: FsxProtocol;
    /**
     * The ARNs of the security groups that are used to configure the FSx for OpenZFS file system.
     */
    SecurityGroupArns: Ec2SecurityGroupArnList;
    /**
     * A subdirectory in the location's path that must begin with /fsx. DataSync uses this subdirectory to read or write data (depending on whether the file system is a source or destination location).
     */
    Subdirectory?: FsxOpenZfsSubdirectory;
    /**
     * The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationFsxOpenZfsResponse {
    /**
     * The ARN of the FSx for OpenZFS file system location that you created.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationFsxWindowsRequest {
    /**
     * Specifies a mount path for your file system using forward slashes. This is where DataSync reads or writes data (depending on if this is a source or destination location).
     */
    Subdirectory?: FsxWindowsSubdirectory;
    /**
     * Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file system.
     */
    FsxFilesystemArn: FsxFilesystemArn;
    /**
     * Specifies the ARNs of the security groups that provide access to your file system's preferred subnet.  If you choose a security group that doesn't allow connections from within itself, do one of the following:   Configure the security group to allow it to communicate within itself.   Choose a different security group that can communicate with the mount target's security group.   
     */
    SecurityGroupArns: Ec2SecurityGroupArnList;
    /**
     * Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.
     */
    Tags?: InputTagList;
    /**
     * Specifies the user who has the permissions to access files and folders in the file system. For information about choosing a user name that ensures sufficient permissions to files, folders, and metadata, see user.
     */
    User: SmbUser;
    /**
     * Specifies the name of the Windows domain that the FSx for Windows File Server belongs to.
     */
    Domain?: SmbDomain;
    /**
     * Specifies the password of the user who has the permissions to access files and folders in the file system.
     */
    Password: SmbPassword;
  }
  export interface CreateLocationFsxWindowsResponse {
    /**
     * The ARN of the FSx for Windows File Server file system location you created.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationHdfsRequest {
    /**
     * A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /.
     */
    Subdirectory?: HdfsSubdirectory;
    /**
     * The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode.
     */
    NameNodes: HdfsNameNodeList;
    /**
     * The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB).
     */
    BlockSize?: HdfsBlockSize;
    /**
     * The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes.
     */
    ReplicationFactor?: HdfsReplicationFactor;
    /**
     * The URI of the HDFS cluster's Key Management Server (KMS). 
     */
    KmsKeyProviderUri?: KmsKeyProviderUri;
    /**
     * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If QopConfiguration isn't specified, RpcProtection and DataTransferProtection default to PRIVACY. If you set RpcProtection or DataTransferProtection, the other parameter assumes the same value. 
     */
    QopConfiguration?: QopConfiguration;
    /**
     * The type of authentication used to determine the identity of the user. 
     */
    AuthenticationType: HdfsAuthenticationType;
    /**
     * The user name used to identify the client on the host operating system.   If SIMPLE is specified for AuthenticationType, this parameter is required.  
     */
    SimpleUser?: HdfsUser;
    /**
     * The Kerberos principal with access to the files and folders on the HDFS cluster.   If KERBEROS is specified for AuthenticationType, this parameter is required. 
     */
    KerberosPrincipal?: KerberosPrincipal;
    /**
     * The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. You can load the keytab from a file by providing the file's address. If you're using the CLI, it performs base64 encoding for you. Otherwise, provide the base64-encoded text.   If KERBEROS is specified for AuthenticationType, this parameter is required.  
     */
    KerberosKeytab?: KerberosKeytabFile;
    /**
     * The krb5.conf file that contains the Kerberos configuration information. You can load the krb5.conf file by providing the file's address. If you're using the CLI, it performs the base64 encoding for you. Otherwise, provide the base64-encoded text.   If KERBEROS is specified for AuthenticationType, this parameter is required. 
     */
    KerberosKrb5Conf?: KerberosKrb5ConfFile;
    /**
     * The Amazon Resource Names (ARNs) of the agents that are used to connect to the HDFS cluster.
     */
    AgentArns: AgentArnList;
    /**
     * The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources. 
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationHdfsResponse {
    /**
     * The ARN of the source HDFS cluster location that's created. 
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationNfsRequest {
    /**
     * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that's exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network.  To see all the paths exported by your NFS server, run "showmount -e nfs-server-name" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication.  To transfer all the data in the folder you specified, DataSync needs to have permissions to read all the data. To ensure this, either configure the NFS export with no_root_squash, or ensure that the permissions for all of the files that you want DataSync allow read access for all users. Doing either enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access. If you are copying data to or from your Snowcone device, see NFS Server on Snowcone for more information. For information about NFS export configuration, see 18.7. The /etc/exports Configuration File in the Red Hat Enterprise Linux documentation.
     */
    Subdirectory: NfsSubdirectory;
    /**
     * The name of the NFS server. This value is the IP address or Domain Name Service (DNS) name of the NFS server. An agent that is installed on-premises uses this hostname to mount the NFS server in a network.  If you are copying data to or from your Snowcone device, see NFS Server on Snowcone for more information.  This name must either be DNS-compliant or must be an IP version 4 (IPv4) address. 
     */
    ServerHostname: ServerHostname;
    /**
     * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect to an NFS server.  If you are copying data to or from your Snowcone device, see NFS Server on Snowcone for more information.
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
     * Specifies the domain name or IP address of the object storage server. A DataSync agent uses this hostname to mount the object storage server in a network.
     */
    ServerHostname: ServerHostname;
    /**
     * Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443).
     */
    ServerPort?: ObjectStorageServerPort;
    /**
     * Specifies the protocol that your object storage server uses to communicate.
     */
    ServerProtocol?: ObjectStorageServerProtocol;
    /**
     * Specifies the object prefix for your object storage server. If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix. 
     */
    Subdirectory?: S3Subdirectory;
    /**
     * Specifies the name of the object storage bucket involved in the transfer.
     */
    BucketName: ObjectStorageBucketName;
    /**
     * Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server.
     */
    AccessKey?: ObjectStorageAccessKey;
    /**
     * Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server.
     */
    SecretKey?: ObjectStorageSecretKey;
    /**
     * Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can securely connect with your location.
     */
    AgentArns: AgentArnList;
    /**
     * Specifies the key-value pair that represents a tag that you want to add to the resource. Tags can help you manage, filter, and search for your resources. We recommend creating a name tag for your location.
     */
    Tags?: InputTagList;
    /**
     * Specifies a certificate to authenticate with an object storage system that uses a private or self-signed certificate authority (CA). You must specify a Base64-encoded .pem file (for example, file:///home/user/.ssh/storage_sys_certificate.pem). The certificate can be up to 32768 bytes (before Base64 encoding). To use this parameter, configure ServerProtocol to HTTPS.
     */
    ServerCertificate?: ObjectStorageCertificate;
  }
  export interface CreateLocationObjectStorageResponse {
    /**
     * Specifies the ARN of the object storage system location that you create.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateLocationS3Request {
    /**
     * A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.
     */
    Subdirectory?: S3Subdirectory;
    /**
     * The ARN of the Amazon S3 bucket. If the bucket is on an Amazon Web Services Outpost, this must be an access point ARN.
     */
    S3BucketArn: S3BucketArn;
    /**
     * The Amazon S3 storage class that you want to store your files in when this location is used as a task destination. For buckets in Amazon Web Services Regions, the storage class defaults to Standard. For buckets on Outposts, the storage class defaults to Amazon Web Services S3 Outposts. For more information about S3 storage classes, see Amazon S3 Storage Classes. Some storage classes have behaviors that can affect your S3 storage cost. For detailed information, see Considerations when working with S3 storage classes in DataSync.
     */
    S3StorageClass?: S3StorageClass;
    S3Config: S3Config;
    /**
     * If you're using DataSync on an Amazon Web Services Outpost, specify the Amazon Resource Names (ARNs) of the DataSync agents deployed on your Outpost. For more information about launching a DataSync agent on an Amazon Web Services Outpost, see Deploy your DataSync agent on Outposts.
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
     * Specifies the name of the share exported by your SMB file server where DataSync will read or write data. You can include a subdirectory in the share path (for example, /path/to/subdirectory). Make sure that other SMB clients in your network can also mount this path. To copy all data in the specified subdirectory, DataSync must be able to mount the SMB share and access all of its data. For more information, see required permissions for SMB locations.
     */
    Subdirectory: SmbSubdirectory;
    /**
     * Specifies the Domain Name Service (DNS) name or IP address of the SMB file server that your DataSync agent will mount.  You can't specify an IP version 6 (IPv6) address. 
     */
    ServerHostname: ServerHostname;
    /**
     * Specifies the user name that can mount your SMB file server and has permission to access the files and folders involved in your transfer. For information about choosing a user with the right level of access for your transfer, see required permissions for SMB locations.
     */
    User: SmbUser;
    /**
     * Specifies the Windows domain name that your SMB file server belongs to.  For more information, see required permissions for SMB locations.
     */
    Domain?: SmbDomain;
    /**
     * Specifies the password of the user who can mount your SMB file server and has permission to access the files and folders involved in your transfer. For more information, see required permissions for SMB locations.
     */
    Password: SmbPassword;
    /**
     * Specifies the DataSync agent (or agents) which you want to connect to your SMB file server. You specify an agent by using its Amazon Resource Name (ARN).
     */
    AgentArns: AgentArnList;
    /**
     * Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.
     */
    MountOptions?: SmbMountOptions;
    /**
     * Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.
     */
    Tags?: InputTagList;
  }
  export interface CreateLocationSmbResponse {
    /**
     * The ARN of the SMB location that you created.
     */
    LocationArn?: LocationArn;
  }
  export interface CreateTaskRequest {
    /**
     * The Amazon Resource Name (ARN) of the source location for the task.
     */
    SourceLocationArn: LocationArn;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Web Services storage resource's location. 
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
     * Specifies the configuration options for a task. Some options include preserving file or object metadata and verifying data integrity. You can also override these options before starting an individual run of a task (also known as a task execution). For more information, see StartTaskExecution.
     */
    Options?: Options;
    /**
     * Specifies a list of filter rules that exclude specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.
     */
    Excludes?: FilterList;
    /**
     * Specifies a schedule used to periodically transfer files from a source to a destination location. The schedule should be specified in UTC time. For more information, see Scheduling your task.
     */
    Schedule?: TaskSchedule;
    /**
     * Specifies the tags that you want to apply to the Amazon Resource Name (ARN) representing the task.  Tags are key-value pairs that help you manage, filter, and search for your DataSync resources.
     */
    Tags?: InputTagList;
    /**
     * Specifies a list of filter rules that include specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.
     */
    Includes?: FilterList;
  }
  export interface CreateTaskResponse {
    /**
     * The Amazon Resource Name (ARN) of the task.
     */
    TaskArn?: TaskArn;
  }
  export interface DeleteAgentRequest {
    /**
     * The Amazon Resource Name (ARN) of the agent to delete. Use the ListAgents operation to return a list of agents for your account and Amazon Web Services Region.
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
     * Specifies the Amazon Resource Name (ARN) of the task that you want to delete.
     */
    TaskArn: TaskArn;
  }
  export interface DeleteTaskResponse {
  }
  export interface DescribeAgentRequest {
    /**
     * Specifies the Amazon Resource Name (ARN) of the DataSync agent to describe.
     */
    AgentArn: AgentArn;
  }
  export interface DescribeAgentResponse {
    /**
     * The ARN of the agent.
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
     * The time that the agent last connected to DataSync.
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
     * The Amazon Resource Name (ARN) of the Amazon EFS file system location that you want information about.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationEfsResponse {
    /**
     * The ARN of the Amazon EFS file system location.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the Amazon EFS file system location.
     */
    LocationUri?: LocationUri;
    Ec2Config?: Ec2Config;
    /**
     * The time that the location was created.
     */
    CreationTime?: Time;
    /**
     * The ARN of the access point that DataSync uses to access the Amazon EFS file system.
     */
    AccessPointArn?: EfsAccessPointArn;
    /**
     * The Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.
     */
    FileSystemAccessRoleArn?: IamRoleArn;
    /**
     * Describes whether DataSync uses Transport Layer Security (TLS) encryption when copying data to or from the Amazon EFS file system.
     */
    InTransitEncryption?: EfsInTransitEncryption;
  }
  export interface DescribeLocationFsxLustreRequest {
    /**
     * The Amazon Resource Name (ARN) of the FSx for Lustre location to describe. 
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationFsxLustreResponse {
    /**
     * The Amazon Resource Name (ARN) of the FSx for Lustre location that was described.
     */
    LocationArn?: LocationArn;
    /**
     * The URI of the FSx for Lustre location that was described.
     */
    LocationUri?: LocationUri;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are configured for the FSx for Lustre file system.
     */
    SecurityGroupArns?: Ec2SecurityGroupArnList;
    /**
     * The time that the FSx for Lustre location was created.
     */
    CreationTime?: Time;
  }
  export interface DescribeLocationFsxOntapRequest {
    /**
     * Specifies the Amazon Resource Name (ARN) of the FSx for ONTAP file system location that you want information about.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationFsxOntapResponse {
    /**
     * The time that the location was created.
     */
    CreationTime?: Time;
    /**
     * The ARN of the FSx for ONTAP file system location.
     */
    LocationArn?: LocationArn;
    /**
     * The uniform resource identifier (URI) of the FSx for ONTAP file system location.
     */
    LocationUri?: LocationUri;
    Protocol?: FsxProtocol;
    /**
     * The security groups that DataSync uses to access your FSx for ONTAP file system.
     */
    SecurityGroupArns?: Ec2SecurityGroupArnList;
    /**
     * The ARN of the storage virtual machine (SVM) on your FSx for ONTAP file system where you're copying data to or from.
     */
    StorageVirtualMachineArn?: StorageVirtualMachineArn;
    /**
     * The ARN of the FSx for ONTAP file system.
     */
    FsxFilesystemArn?: FsxFilesystemArn;
  }
  export interface DescribeLocationFsxOpenZfsRequest {
    /**
     * The Amazon Resource Name (ARN) of the FSx for OpenZFS location to describe.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationFsxOpenZfsResponse {
    /**
     * The ARN of the FSx for OpenZFS location that was described.
     */
    LocationArn?: LocationArn;
    /**
     * The uniform resource identifier (URI) of the FSx for OpenZFS location that was described. Example: fsxz://us-west-2.fs-1234567890abcdef02/fsx/folderA/folder 
     */
    LocationUri?: LocationUri;
    /**
     * The ARNs of the security groups that are configured for the FSx for OpenZFS file system.
     */
    SecurityGroupArns?: Ec2SecurityGroupArnList;
    /**
     * The type of protocol that DataSync uses to access your file system.
     */
    Protocol?: FsxProtocol;
    /**
     * The time that the FSx for OpenZFS location was created.
     */
    CreationTime?: Time;
  }
  export interface DescribeLocationFsxWindowsRequest {
    /**
     * The Amazon Resource Name (ARN) of the FSx for Windows File Server location to describe.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationFsxWindowsResponse {
    /**
     * The Amazon Resource Name (ARN) of the FSx for Windows File Server location that was described.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the FSx for Windows File Server location that was described.
     */
    LocationUri?: LocationUri;
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are configured for the FSx for Windows File Server file system.
     */
    SecurityGroupArns?: Ec2SecurityGroupArnList;
    /**
     * The time that the FSx for Windows File Server location was created.
     */
    CreationTime?: Time;
    /**
     * The user who has the permissions to access files and folders in the FSx for Windows File Server file system.
     */
    User?: SmbUser;
    /**
     * The name of the Windows domain that the FSx for Windows File Server belongs to.
     */
    Domain?: SmbDomain;
  }
  export interface DescribeLocationHdfsRequest {
    /**
     * The Amazon Resource Name (ARN) of the HDFS cluster location to describe.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationHdfsResponse {
    /**
     * The ARN of the HDFS cluster location.
     */
    LocationArn?: LocationArn;
    /**
     * The URI of the HDFS cluster location.
     */
    LocationUri?: LocationUri;
    /**
     * The NameNode that manage the HDFS namespace. 
     */
    NameNodes?: HdfsNameNodeList;
    /**
     * The size of the data blocks to write into the HDFS cluster. 
     */
    BlockSize?: HdfsBlockSize;
    /**
     * The number of DataNodes to replicate the data to when writing to the HDFS cluster. 
     */
    ReplicationFactor?: HdfsReplicationFactor;
    /**
     *  The URI of the HDFS cluster's Key Management Server (KMS). 
     */
    KmsKeyProviderUri?: KmsKeyProviderUri;
    /**
     * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. 
     */
    QopConfiguration?: QopConfiguration;
    /**
     * The type of authentication used to determine the identity of the user. 
     */
    AuthenticationType?: HdfsAuthenticationType;
    /**
     * The user name used to identify the client on the host operating system. This parameter is used if the AuthenticationType is defined as SIMPLE.
     */
    SimpleUser?: HdfsUser;
    /**
     * The Kerberos principal with access to the files and folders on the HDFS cluster. This parameter is used if the AuthenticationType is defined as KERBEROS.
     */
    KerberosPrincipal?: KerberosPrincipal;
    /**
     * The ARNs of the agents that are used to connect to the HDFS cluster. 
     */
    AgentArns?: AgentArnList;
    /**
     * The time that the HDFS location was created.
     */
    CreationTime?: Time;
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
     * The Amazon Resource Name (ARN) of the object storage system location that you want information about.
     */
    LocationArn: LocationArn;
  }
  export interface DescribeLocationObjectStorageResponse {
    /**
     * The ARN of the object storage system location.
     */
    LocationArn?: LocationArn;
    /**
     * The URL of the object storage system location.
     */
    LocationUri?: LocationUri;
    /**
     * The access key (for example, a user name) required to authenticate with the object storage system.
     */
    AccessKey?: ObjectStorageAccessKey;
    /**
     * The port that your object storage server accepts inbound network traffic on (for example, port 443).
     */
    ServerPort?: ObjectStorageServerPort;
    /**
     * The protocol that your object storage system uses to communicate.
     */
    ServerProtocol?: ObjectStorageServerProtocol;
    /**
     * The ARNs of the DataSync agents that can securely connect with your location.
     */
    AgentArns?: AgentArnList;
    /**
     * The time that the location was created.
     */
    CreationTime?: Time;
    /**
     * The self-signed certificate that DataSync uses to securely authenticate with your object storage system.
     */
    ServerCertificate?: ObjectStorageCertificate;
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
     * The Amazon S3 storage class that you chose to store your files in when this location is used as a task destination. For more information about S3 storage classes, see Amazon S3 Storage Classes. Some storage classes have behaviors that can affect your S3 storage cost. For detailed information, see Considerations when working with S3 storage classes in DataSync.
     */
    S3StorageClass?: S3StorageClass;
    S3Config?: S3Config;
    /**
     * If you are using DataSync on an Amazon Web Services Outpost, the Amazon Resource Name (ARNs) of the EC2 agents deployed on your Outpost. For more information about launching a DataSync agent on an Amazon Web Services Outpost, see Deploy your DataSync agent on Outposts.
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
     * The URL of the source SMB location that was described.
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
     * The status of the task execution.  For detailed information about task execution statuses, see Understanding Task Statuses in the DataSync User Guide. 
     */
    Status?: TaskExecutionStatus;
    Options?: Options;
    /**
     * A list of filter rules that exclude specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.
     */
    Excludes?: FilterList;
    /**
     * A list of filter rules that include specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.
     */
    Includes?: FilterList;
    /**
     * The time that the task execution was started.
     */
    StartTime?: Time;
    /**
     * The expected number of files that is to be transferred over the network. This value is calculated during the PREPARING phase before the TRANSFERRING phase of the task execution. This value is the expected number of files to be transferred. It's calculated based on comparing the content of the source and destination locations and finding the delta that needs to be transferred. 
     */
    EstimatedFilesToTransfer?: long;
    /**
     * The estimated physical number of bytes that is to be transferred over the network.
     */
    EstimatedBytesToTransfer?: long;
    /**
     * The actual number of files that was transferred over the network. This value is calculated and updated on an ongoing basis during the TRANSFERRING phase of the task execution. It's updated periodically when each file is read from the source and sent over the network.  If failures occur during a transfer, this value can be less than EstimatedFilesToTransfer. In some cases, this value can also be greater than EstimatedFilesToTransfer. This element is implementation-specific for some location types, so don't use it as an indicator for a correct file number or to monitor your task execution.
     */
    FilesTransferred?: long;
    /**
     * The number of logical bytes written to the destination Amazon Web Services storage resource.
     */
    BytesWritten?: long;
    /**
     * The total number of bytes that are involved in the transfer. For the number of bytes sent over the network, see BytesCompressed. 
     */
    BytesTransferred?: long;
    /**
     * The result of the task execution.
     */
    Result?: TaskExecutionResultDetail;
    /**
     * The physical number of bytes transferred over the network after compression was applied. In most cases, this number is less than BytesTransferred unless the data isn't compressible.
     */
    BytesCompressed?: long;
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
     * The status of the task that was described. For detailed information about task execution statuses, see Understanding Task Statuses in the DataSync User Guide.
     */
    Status?: TaskStatus;
    /**
     * The name of the task that was described.
     */
    Name?: TagValue;
    /**
     * The Amazon Resource Name (ARN) of the task execution that is transferring files.
     */
    CurrentTaskExecutionArn?: TaskExecutionArn;
    /**
     * The Amazon Resource Name (ARN) of the source file system's location.
     */
    SourceLocationArn?: LocationArn;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Web Services storage resource's location.
     */
    DestinationLocationArn?: LocationArn;
    /**
     * The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that was used to monitor and log events in the task. For more information on these groups, see Working with Log Groups and Log Streams in the Amazon CloudWatch User Guide.
     */
    CloudWatchLogGroupArn?: LogGroupArn;
    /**
     * The Amazon Resource Names (ARNs) of the network interfaces created for your source location. For more information, see Network interface requirements.
     */
    SourceNetworkInterfaceArns?: SourceNetworkInterfaceArns;
    /**
     * The Amazon Resource Names (ARNs) of the network interfaces created for your destination location. For more information, see Network interface requirements.
     */
    DestinationNetworkInterfaceArns?: DestinationNetworkInterfaceArns;
    /**
     * The configuration options that control the behavior of the StartTaskExecution operation. Some options include preserving file or object metadata and verifying data integrity. You can override these options for each task execution. For more information, see StartTaskExecution.
     */
    Options?: Options;
    /**
     * A list of filter rules that exclude specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.
     */
    Excludes?: FilterList;
    /**
     * The schedule used to periodically transfer files from a source to a destination location.
     */
    Schedule?: TaskSchedule;
    /**
     * Errors that DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.
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
    /**
     * A list of filter rules that include specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.
     */
    Includes?: FilterList;
  }
  export type DestinationNetworkInterfaceArns = NetworkInterfaceArn[];
  export type Duration = number;
  export interface Ec2Config {
    /**
     * Specifies the ARN of a subnet where DataSync creates the network interfaces for managing traffic during your transfer. The subnet must be located:   In the same virtual private cloud (VPC) as the Amazon EFS file system.   In the same Availability Zone as at least one mount target for the Amazon EFS file system.    You don't need to specify a subnet that includes a file system mount target. 
     */
    SubnetArn: Ec2SubnetArn;
    /**
     * Specifies the Amazon Resource Names (ARNs) of the security groups associated with an Amazon EFS file system's mount target.
     */
    SecurityGroupArns: Ec2SecurityGroupArnList;
  }
  export type Ec2SecurityGroupArn = string;
  export type Ec2SecurityGroupArnList = Ec2SecurityGroupArn[];
  export type Ec2SubnetArn = string;
  export type EfsAccessPointArn = string;
  export type EfsFilesystemArn = string;
  export type EfsInTransitEncryption = "NONE"|"TLS1_2"|string;
  export type EfsSubdirectory = string;
  export type Endpoint = string;
  export type EndpointType = "PUBLIC"|"PRIVATE_LINK"|"FIPS"|string;
  export type FilterAttributeValue = string;
  export type FilterList = FilterRule[];
  export interface FilterRule {
    /**
     * The type of filter rule to apply. DataSync only supports the SIMPLE_PATTERN rule type.
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
  export type FsxLustreSubdirectory = string;
  export type FsxOntapSubdirectory = string;
  export type FsxOpenZfsSubdirectory = string;
  export interface FsxProtocol {
    /**
     * Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your FSx for OpenZFS file system or FSx for ONTAP file system's storage virtual machine (SVM).
     */
    NFS?: FsxProtocolNfs;
    /**
     * Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your FSx for ONTAP file system's SVM.
     */
    SMB?: FsxProtocolSmb;
  }
  export interface FsxProtocolNfs {
    MountOptions?: NfsMountOptions;
  }
  export interface FsxProtocolSmb {
    /**
     * Specifies the fully qualified domain name (FQDN) of the Microsoft Active Directory that your storage virtual machine (SVM) belongs to.
     */
    Domain?: SmbDomain;
    MountOptions?: SmbMountOptions;
    /**
     * Specifies the password of a user who has permission to access your SVM.
     */
    Password: SmbPassword;
    /**
     * Specifies a user name that can mount the location and access the files, folders, and metadata that you need in the SVM. If you provide a user in your Active Directory, note the following:   If you're using Directory Service for Microsoft Active Directory, the user must be a member of the Amazon Web Services Delegated FSx Administrators group.   If you're using a self-managed Active Directory, the user must be a member of either the Domain Admins group or a custom group that you specified for file system administration when you created your file system.   Make sure that the user has the permissions it needs to copy the data you want:    SE_TCB_NAME: Required to set object ownership and file metadata. With this privilege, you also can copy NTFS discretionary access lists (DACLs).    SE_SECURITY_NAME: May be needed to copy NTFS system access control lists (SACLs). This operation specifically requires the Windows privilege, which is granted to members of the Domain Admins group. If you configure your task to copy SACLs, make sure that the user has the required privileges. For information about copying SACLs, see Ownership and permissions-related options.  
     */
    User: SmbUser;
  }
  export type FsxWindowsSubdirectory = string;
  export type Gid = "NONE"|"INT_VALUE"|"NAME"|"BOTH"|string;
  export type HdfsAuthenticationType = "SIMPLE"|"KERBEROS"|string;
  export type HdfsBlockSize = number;
  export type HdfsDataTransferProtection = "DISABLED"|"AUTHENTICATION"|"INTEGRITY"|"PRIVACY"|string;
  export interface HdfsNameNode {
    /**
     * The hostname of the NameNode in the HDFS cluster. This value is the IP address or Domain Name Service (DNS) name of the NameNode. An agent that's installed on-premises uses this hostname to communicate with the NameNode in the network.
     */
    Hostname: HdfsServerHostname;
    /**
     * The port that the NameNode uses to listen to client requests.
     */
    Port: HdfsServerPort;
  }
  export type HdfsNameNodeList = HdfsNameNode[];
  export type HdfsReplicationFactor = number;
  export type HdfsRpcProtection = "DISABLED"|"AUTHENTICATION"|"INTEGRITY"|"PRIVACY"|string;
  export type HdfsServerHostname = string;
  export type HdfsServerPort = number;
  export type HdfsSubdirectory = string;
  export type HdfsUser = string;
  export type IamRoleArn = string;
  export type InputTagList = TagListEntry[];
  export type KerberosKeytabFile = Buffer|Uint8Array|Blob|string;
  export type KerberosKrb5ConfFile = Buffer|Uint8Array|Blob|string;
  export type KerberosPrincipal = string;
  export type KmsKeyProviderUri = string;
  export interface ListAgentsRequest {
    /**
     * Specifies the maximum number of DataSync agents to list in a response. By default, a response shows a maximum of 100 agents.
     */
    MaxResults?: MaxResults;
    /**
     * Specifies an opaque string that indicates the position to begin the next list of results in the response.
     */
    NextToken?: NextToken;
  }
  export interface ListAgentsResponse {
    /**
     * A list of DataSync agents in your Amazon Web Services account in the Amazon Web Services Region specified in the request. The list is ordered by the agents' Amazon Resource Names (ARNs).
     */
    Agents?: AgentList;
    /**
     * The opaque string that indicates the position to begin the next list of results in the response.
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
     * Specifies the Amazon Resource Name (ARN) of the resource that you want tag information on.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * Specifies how many results that you want in the response.
     */
    MaxResults?: MaxResults;
    /**
     * Specifies an opaque string that indicates the position to begin the next list of results in the response.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceResponse {
    /**
     * An array of tags applied to the specified resource.
     */
    Tags?: OutputTagList;
    /**
     * The opaque string that indicates the position to begin the next list of results in the response.
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
     * The operator that is used to compare filter values (for example, Equals or Contains).
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
     * Represents a list of URIs of a location. LocationUri returns an array that contains a list of locations when the ListLocations operation is called. Format: TYPE://GLOBAL_ID/SUBDIR. TYPE designates the type of location (for example, nfs or s3). GLOBAL_ID is the globally unique identifier of the resource that backs the location. An example for EFS is us-east-2.fs-abcd1234. An example for Amazon S3 is the bucket name, such as myBucket. An example for NFS is a valid IPv4 address or a hostname that is compliant with Domain Name Service (DNS). SUBDIR is a valid file system path, delimited by forward slashes as is the *nix convention. For NFS and Amazon EFS, it's the export path to mount the location. For Amazon S3, it's the prefix path that you mount to and treat as the root of the location. 
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
     * Specifies the NFS version that you want DataSync to use when mounting your NFS share. If the server refuses to use the version specified, the task fails. You can specify the following options:    AUTOMATIC (default): DataSync chooses NFS version 4.1.    NFS3: Stateless protocol version that allows for asynchronous writes on the server.    NFSv4_0: Stateful, firewall-friendly protocol version that supports delegations and pseudo file systems.    NFSv4_1: Stateful protocol version that supports sessions, directory delegations, and parallel data processing. NFS version 4.1 also includes all features available in version 4.0.    DataSync currently only supports NFS version 3 with Amazon FSx for NetApp ONTAP locations. 
     */
    Version?: NfsVersion;
  }
  export type NfsSubdirectory = string;
  export type NfsVersion = "AUTOMATIC"|"NFS3"|"NFS4_0"|"NFS4_1"|string;
  export type ObjectStorageAccessKey = string;
  export type ObjectStorageBucketName = string;
  export type ObjectStorageCertificate = Buffer|Uint8Array|Blob|string;
  export type ObjectStorageSecretKey = string;
  export type ObjectStorageServerPort = number;
  export type ObjectStorageServerProtocol = "HTTPS"|"HTTP"|string;
  export type ObjectTags = "PRESERVE"|"NONE"|string;
  export interface OnPremConfig {
    /**
     * ARNs of the agents to use for an NFS location.
     */
    AgentArns: AgentArnList;
  }
  export type Operator = "Equals"|"NotEquals"|"In"|"LessThanOrEqual"|"LessThan"|"GreaterThanOrEqual"|"GreaterThan"|"Contains"|"NotContains"|"BeginsWith"|string;
  export interface Options {
    /**
     * Specifies how and when DataSync checks the integrity of your data during a transfer.  Default value: POINT_IN_TIME_CONSISTENT   ONLY_FILES_TRANSFERRED (recommended): DataSync calculates the checksum of transferred files and metadata at the source location. At the end of the transfer, DataSync then compares this checksum to the checksum calculated on those files at the destination. We recommend this option when transferring to S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes. For more information, see Storage class considerations with Amazon S3 locations.  POINT_IN_TIME_CONSISTENT: At the end of the transfer, DataSync scans the entire source and destination to verify that both locations are fully synchronized. You can't use this option when transferring to S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes. For more information, see Storage class considerations with Amazon S3 locations.  NONE: DataSync doesn't run additional verification at the end of the transfer. All data transmissions are still integrity-checked with checksum verification during the transfer.
     */
    VerifyMode?: VerifyMode;
    /**
     * Specifies whether data at the destination location should be overwritten or preserved. If set to NEVER, a destination file for example will not be replaced by a source file (even if the destination file differs from the source file). If you modify files in the destination and you sync the files, you can use this value to protect against overwriting those changes.  Some storage classes have specific behaviors that can affect your Amazon S3 storage cost. For detailed information, see Considerations when working with Amazon S3 storage classes in DataSync.
     */
    OverwriteMode?: OverwriteMode;
    /**
     * Specifies whether to preserve metadata indicating the last time a file was read or written to. If you set Atime to BEST_EFFORT, DataSync attempts to preserve the original Atime attribute on all source files (that is, the version before the PREPARING phase of the task execution).  The behavior of Atime isn't fully standard across platforms, so DataSync can only do this on a best-effort basis.  Default value: BEST_EFFORT   BEST_EFFORT: Attempt to preserve the per-file Atime value (recommended).  NONE: Ignore Atime.  If Atime is set to BEST_EFFORT, Mtime must be set to PRESERVE.  If Atime is set to NONE, Mtime must also be NONE.  
     */
    Atime?: Atime;
    /**
     * Specifies whether to preserve metadata indicating the last time that a file was written to before the PREPARING phase of your task execution. This option is required when you need to run the a task more than once. Default Value: PRESERVE   PRESERVE: Preserve original Mtime (recommended)  NONE: Ignore Mtime.   If Mtime is set to PRESERVE, Atime must be set to BEST_EFFORT. If Mtime is set to NONE, Atime must also be set to NONE.  
     */
    Mtime?: Mtime;
    /**
     * Specifies the POSIX user ID (UID) of the file's owner. For more information, see Metadata copied by DataSync. Default value: INT_VALUE. This preserves the integer value of the ID.  INT_VALUE: Preserve the integer value of UID and group ID (GID) (recommended).  NONE: Ignore UID and GID. 
     */
    Uid?: Uid;
    /**
     * Specifies the POSIX group ID (GID) of the file's owners. For more information, see Metadata copied by DataSync. Default value: INT_VALUE. This preserves the integer value of the ID.  INT_VALUE: Preserve the integer value of user ID (UID) and GID (recommended).  NONE: Ignore UID and GID.
     */
    Gid?: Gid;
    /**
     * Specifies whether files in the destination location that don't exist in the source should be preserved. This option can affect your Amazon S3 storage cost. If your task deletes objects, you might incur minimum storage duration charges for certain storage classes. For detailed information, see Considerations when working with Amazon S3 storage classes in DataSync. Default value: PRESERVE   PRESERVE: Ignore such destination files (recommended).   REMOVE: Delete destination files that aren’t present in the source.  If you set this parameter to REMOVE, you can't set TransferMode to ALL. When you transfer all data, DataSync doesn't scan your destination location and doesn't know what to delete. 
     */
    PreserveDeletedFiles?: PreserveDeletedFiles;
    /**
     * Specifies whether DataSync should preserve the metadata of block and character devices in the source location and recreate the files with that device name and metadata on the destination. DataSync copies only the name and metadata of such devices.  DataSync can't copy the actual contents of these devices because they're nonterminal and don't return an end-of-file (EOF) marker.  Default value: NONE   NONE: Ignore special devices (recommended).   PRESERVE: Preserve character and block device metadata. This option currently isn't supported for Amazon EFS. 
     */
    PreserveDevices?: PreserveDevices;
    /**
     * Specifies which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file. For more information, see Metadata copied by DataSync. Default value: PRESERVE   PRESERVE: Preserve POSIX-style permissions (recommended).  NONE: Ignore permissions.   DataSync can preserve extant permissions of a source location. 
     */
    PosixPermissions?: PosixPermissions;
    /**
     * Limits the bandwidth used by a DataSync task. For example, if you want DataSync to use a maximum of 1 MB, set this value to 1048576 (=1024*1024).
     */
    BytesPerSecond?: BytesPerSecond;
    /**
     * Specifies whether tasks should be queued before executing the tasks. The default is ENABLED, which means the tasks will be queued. If you use the same agent to run multiple tasks, you can enable the tasks to run in series. For more information, see Queueing task executions.
     */
    TaskQueueing?: TaskQueueing;
    /**
     * Specifies the type of logs that DataSync publishes to a Amazon CloudWatch Logs log group. To specify the log group, see CloudWatchLogGroupArn. If you set LogLevel to OFF, no logs are published. BASIC publishes logs on errors for individual files transferred. TRANSFER publishes logs for every file or object that is transferred and integrity checked.
     */
    LogLevel?: LogLevel;
    /**
     * Determines whether DataSync transfers only the data and metadata that differ between the source and the destination location or transfers all the content from the source (without comparing what's in the destination).  CHANGED: DataSync copies only data or metadata that is new or different content from the source location to the destination location.  ALL: DataSync copies all source location content to the destination (without comparing what's in the destination).
     */
    TransferMode?: TransferMode;
    /**
     * Specifies which components of the SMB security descriptor are copied from source to destination objects.  This value is only used for transfers between SMB and Amazon FSx for Windows File Server locations or between two FSx for Windows File Server locations. For more information, see how DataSync handles metadata. Default value: OWNER_DACL   OWNER_DACL: For each copied object, DataSync copies the following metadata:   The object owner.   NTFS discretionary access control lists (DACLs), which determine whether to grant access to an object. DataSync won't copy NTFS system access control lists (SACLs) with this option.    OWNER_DACL_SACL: For each copied object, DataSync copies the following metadata:   The object owner.   NTFS discretionary access control lists (DACLs), which determine whether to grant access to an object.   SACLs, which are used by administrators to log attempts to access a secured object. Copying SACLs requires granting additional permissions to the Windows user that DataSync uses to access your SMB location. For information about choosing a user that ensures sufficient permissions to files, folders, and metadata, see user.    NONE: None of the SMB security descriptor components are copied. Destination objects are owned by the user that was provided for accessing the destination location. DACLs and SACLs are set based on the destination server’s configuration. 
     */
    SecurityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlags;
    /**
     * Specifies whether object tags are preserved when transferring between object storage systems. If you want your DataSync task to ignore object tags, specify the NONE value. Default Value: PRESERVE 
     */
    ObjectTags?: ObjectTags;
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
  export interface QopConfiguration {
    /**
     * The RPC protection setting configured on the HDFS cluster. This setting corresponds to your hadoop.rpc.protection setting in your core-site.xml file on your Hadoop cluster.
     */
    RpcProtection?: HdfsRpcProtection;
    /**
     * The data transfer protection setting configured on the HDFS cluster. This setting corresponds to your dfs.data.transfer.protection setting in the hdfs-site.xml file on your Hadoop cluster.
     */
    DataTransferProtection?: HdfsDataTransferProtection;
  }
  export type S3BucketArn = string;
  export interface S3Config {
    /**
     * The ARN of the IAM role for accessing the S3 bucket. 
     */
    BucketAccessRoleArn: IamRoleArn;
  }
  export type S3StorageClass = "STANDARD"|"STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"GLACIER"|"DEEP_ARCHIVE"|"OUTPOSTS"|"GLACIER_INSTANT_RETRIEVAL"|string;
  export type S3Subdirectory = string;
  export type ScheduleExpressionCron = string;
  export type ServerHostname = string;
  export type SmbDomain = string;
  export interface SmbMountOptions {
    /**
     * By default, DataSync automatically chooses an SMB protocol version based on negotiation with your SMB file server. You also can configure DataSync to use a specific SMB version, but we recommend doing this only if DataSync has trouble negotiating with the SMB file server automatically. These are the following options for configuring the SMB version:    AUTOMATIC (default): DataSync and the SMB file server negotiate a protocol version that they mutually support. (DataSync supports SMB versions 1.0 and later.) This is the recommended option. If you instead choose a specific version that your file server doesn't support, you may get an Operation Not Supported error.    SMB3: Restricts the protocol negotiation to only SMB version 3.0.2.    SMB2: Restricts the protocol negotiation to only SMB version 2.1.    SMB2_0: Restricts the protocol negotiation to only SMB version 2.0.    SMB1: Restricts the protocol negotiation to only SMB version 1.0.  The SMB1 option isn't available when creating an Amazon FSx for NetApp ONTAP location.   
     */
    Version?: SmbVersion;
  }
  export type SmbPassword = string;
  export type SmbSecurityDescriptorCopyFlags = "NONE"|"OWNER_DACL"|"OWNER_DACL_SACL"|string;
  export type SmbSubdirectory = string;
  export type SmbUser = string;
  export type SmbVersion = "AUTOMATIC"|"SMB2"|"SMB3"|"SMB1"|"SMB2_0"|string;
  export type SourceNetworkInterfaceArns = NetworkInterfaceArn[];
  export interface StartTaskExecutionRequest {
    /**
     * Specifies the Amazon Resource Name (ARN) of the task that you want to start.
     */
    TaskArn: TaskArn;
    OverrideOptions?: Options;
    /**
     * Specifies a list of filter rules that determines which files to include when running a task. The pattern should contain a single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe), for example, "/folder1|/folder2". 
     */
    Includes?: FilterList;
    /**
     * Specifies a list of filter rules that determines which files to exclude from a task. The list contains a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example, "/folder1|/folder2". 
     */
    Excludes?: FilterList;
    /**
     * Specifies the tags that you want to apply to the Amazon Resource Name (ARN) representing the task execution.  Tags are key-value pairs that help you manage, filter, and search for your DataSync resources.
     */
    Tags?: InputTagList;
  }
  export interface StartTaskExecutionResponse {
    /**
     * The ARN of the running task execution.
     */
    TaskExecutionArn?: TaskExecutionArn;
  }
  export type StorageVirtualMachineArn = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagListEntry {
    /**
     * The key for an Amazon Web Services resource tag.
     */
    Key: TagKey;
    /**
     * The value for an Amazon Web Services resource tag.
     */
    Value?: TagValue;
  }
  export interface TagResourceRequest {
    /**
     * Specifies the Amazon Resource Name (ARN) of the resource to apply the tag to.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * Specifies the tags that you want to apply to the resource.
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
     * The total time in milliseconds that DataSync spent in the PREPARING phase. 
     */
    PrepareDuration?: Duration;
    /**
     * The status of the PREPARING phase.
     */
    PrepareStatus?: PhaseStatus;
    /**
     * The total time in milliseconds that DataSync took to transfer the file from the source to the destination location.
     */
    TotalDuration?: Duration;
    /**
     * The total time in milliseconds that DataSync spent in the TRANSFERRING phase.
     */
    TransferDuration?: Duration;
    /**
     * The status of the TRANSFERRING phase.
     */
    TransferStatus?: PhaseStatus;
    /**
     * The total time in milliseconds that DataSync spent in the VERIFYING phase.
     */
    VerifyDuration?: Duration;
    /**
     * The status of the VERIFYING phase.
     */
    VerifyStatus?: PhaseStatus;
    /**
     * Errors that DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.
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
     * The operator that is used to compare filter values (for example, Equals or Contains).
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
     * A cron expression that specifies when DataSync initiates a scheduled transfer from a source to a destination location. 
     */
    ScheduleExpression: ScheduleExpressionCron;
  }
  export type TaskStatus = "AVAILABLE"|"CREATING"|"QUEUED"|"RUNNING"|"UNAVAILABLE"|string;
  export type Time = Date;
  export type TransferMode = "CHANGED"|"ALL"|string;
  export type Uid = "NONE"|"INT_VALUE"|"NAME"|"BOTH"|string;
  export interface UntagResourceRequest {
    /**
     * Specifies the Amazon Resource Name (ARN) of the resource to remove the tags from.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * Specifies the keys in the tags that you want to remove.
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
  export interface UpdateLocationHdfsRequest {
    /**
     * The Amazon Resource Name (ARN) of the source HDFS cluster location.
     */
    LocationArn: LocationArn;
    /**
     * A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster.
     */
    Subdirectory?: HdfsSubdirectory;
    /**
     * The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode.
     */
    NameNodes?: HdfsNameNodeList;
    /**
     * The size of the data blocks to write into the HDFS cluster. 
     */
    BlockSize?: HdfsBlockSize;
    /**
     * The number of DataNodes to replicate the data to when writing to the HDFS cluster. 
     */
    ReplicationFactor?: HdfsReplicationFactor;
    /**
     * The URI of the HDFS cluster's Key Management Server (KMS). 
     */
    KmsKeyProviderUri?: KmsKeyProviderUri;
    /**
     * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster. 
     */
    QopConfiguration?: QopConfiguration;
    /**
     * The type of authentication used to determine the identity of the user. 
     */
    AuthenticationType?: HdfsAuthenticationType;
    /**
     * The user name used to identify the client on the host operating system.
     */
    SimpleUser?: HdfsUser;
    /**
     * The Kerberos principal with access to the files and folders on the HDFS cluster. 
     */
    KerberosPrincipal?: KerberosPrincipal;
    /**
     * The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. You can load the keytab from a file by providing the file's address. If you use the CLI, it performs base64 encoding for you. Otherwise, provide the base64-encoded text.
     */
    KerberosKeytab?: KerberosKeytabFile;
    /**
     * The krb5.conf file that contains the Kerberos configuration information. You can load the krb5.conf file by providing the file's address. If you're using the CLI, it performs the base64 encoding for you. Otherwise, provide the base64-encoded text.
     */
    KerberosKrb5Conf?: KerberosKrb5ConfFile;
    /**
     * The ARNs of the agents that are used to connect to the HDFS cluster. 
     */
    AgentArns?: AgentArnList;
  }
  export interface UpdateLocationHdfsResponse {
  }
  export interface UpdateLocationNfsRequest {
    /**
     * The Amazon Resource Name (ARN) of the NFS location to update.
     */
    LocationArn: LocationArn;
    /**
     * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that's exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network. To see all the paths exported by your NFS server, run "showmount -e nfs-server-name" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication.  To transfer all the data in the folder that you specified, DataSync must have permissions to read all the data. To ensure this, either configure the NFS export with no_root_squash, or ensure that the files you want DataSync to access have permissions that allow read access for all users. Doing either option enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access. If you are copying data to or from your Snowcone device, see NFS Server on Snowcone for more information. For information about NFS export configuration, see 18.7. The /etc/exports Configuration File in the Red Hat Enterprise Linux documentation.
     */
    Subdirectory?: NfsSubdirectory;
    OnPremConfig?: OnPremConfig;
    MountOptions?: NfsMountOptions;
  }
  export interface UpdateLocationNfsResponse {
  }
  export interface UpdateLocationObjectStorageRequest {
    /**
     * Specifies the ARN of the object storage system location that you're updating.
     */
    LocationArn: LocationArn;
    /**
     * Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443).
     */
    ServerPort?: ObjectStorageServerPort;
    /**
     * Specifies the protocol that your object storage server uses to communicate.
     */
    ServerProtocol?: ObjectStorageServerProtocol;
    /**
     * Specifies the object prefix for your object storage server. If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix.
     */
    Subdirectory?: S3Subdirectory;
    /**
     * Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server.
     */
    AccessKey?: ObjectStorageAccessKey;
    /**
     * Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server.
     */
    SecretKey?: ObjectStorageSecretKey;
    /**
     * Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can securely connect with your location.
     */
    AgentArns?: AgentArnList;
    /**
     * Specifies a certificate to authenticate with an object storage system that uses a private or self-signed certificate authority (CA). You must specify a Base64-encoded .pem file (for example, file:///home/user/.ssh/storage_sys_certificate.pem). The certificate can be up to 32768 bytes (before Base64 encoding). To use this parameter, configure ServerProtocol to HTTPS. Updating the certificate doesn't interfere with tasks that you have in progress.
     */
    ServerCertificate?: ObjectStorageCertificate;
  }
  export interface UpdateLocationObjectStorageResponse {
  }
  export interface UpdateLocationSmbRequest {
    /**
     * The Amazon Resource Name (ARN) of the SMB location to update.
     */
    LocationArn: LocationArn;
    /**
     * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. The SMB path should be a path that's exported by the SMB server, or a subdirectory of that path. The path should be such that it can be mounted by other SMB clients in your network.   Subdirectory must be specified with forward slashes. For example, /path/to/folder.  To transfer all the data in the folder that you specified, DataSync must have permissions to mount the SMB share and to access all the data in that share. To ensure this, do either of the following:   Ensure that the user/password specified belongs to the user who can mount the share and who has the appropriate permissions for all of the files and directories that you want DataSync to access.   Use credentials of a member of the Backup Operators group to mount the share.    Doing either of these options enables the agent to access the data. For the agent to access directories, you must also enable all execute access.
     */
    Subdirectory?: SmbSubdirectory;
    /**
     * The user who can mount the share has the permissions to access files and folders in the SMB share.
     */
    User?: SmbUser;
    /**
     * The name of the Windows domain that the SMB server belongs to.
     */
    Domain?: SmbDomain;
    /**
     * The password of the user who can mount the share has the permissions to access files and folders in the SMB share.
     */
    Password?: SmbPassword;
    /**
     * The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.
     */
    AgentArns?: AgentArnList;
    MountOptions?: SmbMountOptions;
  }
  export interface UpdateLocationSmbResponse {
  }
  export interface UpdateTaskExecutionRequest {
    /**
     * The Amazon Resource Name (ARN) of the specific task execution that is being updated. 
     */
    TaskExecutionArn: TaskExecutionArn;
    Options: Options;
  }
  export interface UpdateTaskExecutionResponse {
  }
  export interface UpdateTaskRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource name of the task to update.
     */
    TaskArn: TaskArn;
    Options?: Options;
    /**
     * Specifies a list of filter rules that exclude specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.
     */
    Excludes?: FilterList;
    /**
     * Specifies a schedule used to periodically transfer files from a source to a destination location. You can configure your task to execute hourly, daily, weekly or on specific days of the week. You control when in the day or hour you want the task to execute. The time you specify is UTC time. For more information, see Scheduling your task.
     */
    Schedule?: TaskSchedule;
    /**
     * The name of the task to update.
     */
    Name?: TagValue;
    /**
     * The Amazon Resource Name (ARN) of the resource name of the Amazon CloudWatch log group.
     */
    CloudWatchLogGroupArn?: LogGroupArn;
    /**
     * Specifies a list of filter rules that include specific data during your transfer. For more information and examples, see Filtering data transferred by DataSync.
     */
    Includes?: FilterList;
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
