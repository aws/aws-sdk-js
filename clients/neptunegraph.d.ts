import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class NeptuneGraph extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: NeptuneGraph.Types.ClientConfiguration)
  config: Config & NeptuneGraph.Types.ClientConfiguration;
  /**
   * Deletes the specified import task
   */
  cancelImportTask(params: NeptuneGraph.Types.CancelImportTaskInput, callback?: (err: AWSError, data: NeptuneGraph.Types.CancelImportTaskOutput) => void): Request<NeptuneGraph.Types.CancelImportTaskOutput, AWSError>;
  /**
   * Deletes the specified import task
   */
  cancelImportTask(callback?: (err: AWSError, data: NeptuneGraph.Types.CancelImportTaskOutput) => void): Request<NeptuneGraph.Types.CancelImportTaskOutput, AWSError>;
  /**
   * Creates a new Neptune Analytics graph.
   */
  createGraph(params: NeptuneGraph.Types.CreateGraphInput, callback?: (err: AWSError, data: NeptuneGraph.Types.CreateGraphOutput) => void): Request<NeptuneGraph.Types.CreateGraphOutput, AWSError>;
  /**
   * Creates a new Neptune Analytics graph.
   */
  createGraph(callback?: (err: AWSError, data: NeptuneGraph.Types.CreateGraphOutput) => void): Request<NeptuneGraph.Types.CreateGraphOutput, AWSError>;
  /**
   * Creates a snapshot of the specific graph.
   */
  createGraphSnapshot(params: NeptuneGraph.Types.CreateGraphSnapshotInput, callback?: (err: AWSError, data: NeptuneGraph.Types.CreateGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.CreateGraphSnapshotOutput, AWSError>;
  /**
   * Creates a snapshot of the specific graph.
   */
  createGraphSnapshot(callback?: (err: AWSError, data: NeptuneGraph.Types.CreateGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.CreateGraphSnapshotOutput, AWSError>;
  /**
   * Creates a new Neptune Analytics graph and imports data into it, either from Amazon Simple Storage Service (S3) or from a Neptune database or a Neptune database snapshot. The data can be loaded from files in S3 that in either the Gremlin CSV format or the openCypher load format.
   */
  createGraphUsingImportTask(params: NeptuneGraph.Types.CreateGraphUsingImportTaskInput, callback?: (err: AWSError, data: NeptuneGraph.Types.CreateGraphUsingImportTaskOutput) => void): Request<NeptuneGraph.Types.CreateGraphUsingImportTaskOutput, AWSError>;
  /**
   * Creates a new Neptune Analytics graph and imports data into it, either from Amazon Simple Storage Service (S3) or from a Neptune database or a Neptune database snapshot. The data can be loaded from files in S3 that in either the Gremlin CSV format or the openCypher load format.
   */
  createGraphUsingImportTask(callback?: (err: AWSError, data: NeptuneGraph.Types.CreateGraphUsingImportTaskOutput) => void): Request<NeptuneGraph.Types.CreateGraphUsingImportTaskOutput, AWSError>;
  /**
   * Create a private graph endpoint to allow private access from to the graph from within a VPC. You can attach security groups to the private graph endpoint. VPC endpoint charges apply.
   */
  createPrivateGraphEndpoint(params: NeptuneGraph.Types.CreatePrivateGraphEndpointInput, callback?: (err: AWSError, data: NeptuneGraph.Types.CreatePrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.CreatePrivateGraphEndpointOutput, AWSError>;
  /**
   * Create a private graph endpoint to allow private access from to the graph from within a VPC. You can attach security groups to the private graph endpoint. VPC endpoint charges apply.
   */
  createPrivateGraphEndpoint(callback?: (err: AWSError, data: NeptuneGraph.Types.CreatePrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.CreatePrivateGraphEndpointOutput, AWSError>;
  /**
   * Deletes the specified graph. Graphs cannot be deleted if delete-protection is enabled.
   */
  deleteGraph(params: NeptuneGraph.Types.DeleteGraphInput, callback?: (err: AWSError, data: NeptuneGraph.Types.DeleteGraphOutput) => void): Request<NeptuneGraph.Types.DeleteGraphOutput, AWSError>;
  /**
   * Deletes the specified graph. Graphs cannot be deleted if delete-protection is enabled.
   */
  deleteGraph(callback?: (err: AWSError, data: NeptuneGraph.Types.DeleteGraphOutput) => void): Request<NeptuneGraph.Types.DeleteGraphOutput, AWSError>;
  /**
   * Deletes the specifed graph snapshot.
   */
  deleteGraphSnapshot(params: NeptuneGraph.Types.DeleteGraphSnapshotInput, callback?: (err: AWSError, data: NeptuneGraph.Types.DeleteGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.DeleteGraphSnapshotOutput, AWSError>;
  /**
   * Deletes the specifed graph snapshot.
   */
  deleteGraphSnapshot(callback?: (err: AWSError, data: NeptuneGraph.Types.DeleteGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.DeleteGraphSnapshotOutput, AWSError>;
  /**
   * Deletes a private graph endpoint.
   */
  deletePrivateGraphEndpoint(params: NeptuneGraph.Types.DeletePrivateGraphEndpointInput, callback?: (err: AWSError, data: NeptuneGraph.Types.DeletePrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.DeletePrivateGraphEndpointOutput, AWSError>;
  /**
   * Deletes a private graph endpoint.
   */
  deletePrivateGraphEndpoint(callback?: (err: AWSError, data: NeptuneGraph.Types.DeletePrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.DeletePrivateGraphEndpointOutput, AWSError>;
  /**
   * Gets information about a specified graph.
   */
  getGraph(params: NeptuneGraph.Types.GetGraphInput, callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphOutput) => void): Request<NeptuneGraph.Types.GetGraphOutput, AWSError>;
  /**
   * Gets information about a specified graph.
   */
  getGraph(callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphOutput) => void): Request<NeptuneGraph.Types.GetGraphOutput, AWSError>;
  /**
   * Retrieves a specified graph snapshot.
   */
  getGraphSnapshot(params: NeptuneGraph.Types.GetGraphSnapshotInput, callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.GetGraphSnapshotOutput, AWSError>;
  /**
   * Retrieves a specified graph snapshot.
   */
  getGraphSnapshot(callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.GetGraphSnapshotOutput, AWSError>;
  /**
   * Retrieves a specified import task.
   */
  getImportTask(params: NeptuneGraph.Types.GetImportTaskInput, callback?: (err: AWSError, data: NeptuneGraph.Types.GetImportTaskOutput) => void): Request<NeptuneGraph.Types.GetImportTaskOutput, AWSError>;
  /**
   * Retrieves a specified import task.
   */
  getImportTask(callback?: (err: AWSError, data: NeptuneGraph.Types.GetImportTaskOutput) => void): Request<NeptuneGraph.Types.GetImportTaskOutput, AWSError>;
  /**
   * Retrieves information about a specified private endpoint.
   */
  getPrivateGraphEndpoint(params: NeptuneGraph.Types.GetPrivateGraphEndpointInput, callback?: (err: AWSError, data: NeptuneGraph.Types.GetPrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.GetPrivateGraphEndpointOutput, AWSError>;
  /**
   * Retrieves information about a specified private endpoint.
   */
  getPrivateGraphEndpoint(callback?: (err: AWSError, data: NeptuneGraph.Types.GetPrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.GetPrivateGraphEndpointOutput, AWSError>;
  /**
   * Lists available snapshots of a specified Neptune Analytics graph.
   */
  listGraphSnapshots(params: NeptuneGraph.Types.ListGraphSnapshotsInput, callback?: (err: AWSError, data: NeptuneGraph.Types.ListGraphSnapshotsOutput) => void): Request<NeptuneGraph.Types.ListGraphSnapshotsOutput, AWSError>;
  /**
   * Lists available snapshots of a specified Neptune Analytics graph.
   */
  listGraphSnapshots(callback?: (err: AWSError, data: NeptuneGraph.Types.ListGraphSnapshotsOutput) => void): Request<NeptuneGraph.Types.ListGraphSnapshotsOutput, AWSError>;
  /**
   * Lists available Neptune Analytics graphs.
   */
  listGraphs(params: NeptuneGraph.Types.ListGraphsInput, callback?: (err: AWSError, data: NeptuneGraph.Types.ListGraphsOutput) => void): Request<NeptuneGraph.Types.ListGraphsOutput, AWSError>;
  /**
   * Lists available Neptune Analytics graphs.
   */
  listGraphs(callback?: (err: AWSError, data: NeptuneGraph.Types.ListGraphsOutput) => void): Request<NeptuneGraph.Types.ListGraphsOutput, AWSError>;
  /**
   * Lists import tasks.
   */
  listImportTasks(params: NeptuneGraph.Types.ListImportTasksInput, callback?: (err: AWSError, data: NeptuneGraph.Types.ListImportTasksOutput) => void): Request<NeptuneGraph.Types.ListImportTasksOutput, AWSError>;
  /**
   * Lists import tasks.
   */
  listImportTasks(callback?: (err: AWSError, data: NeptuneGraph.Types.ListImportTasksOutput) => void): Request<NeptuneGraph.Types.ListImportTasksOutput, AWSError>;
  /**
   * Lists private endpoints for a specified Neptune Analytics graph.
   */
  listPrivateGraphEndpoints(params: NeptuneGraph.Types.ListPrivateGraphEndpointsInput, callback?: (err: AWSError, data: NeptuneGraph.Types.ListPrivateGraphEndpointsOutput) => void): Request<NeptuneGraph.Types.ListPrivateGraphEndpointsOutput, AWSError>;
  /**
   * Lists private endpoints for a specified Neptune Analytics graph.
   */
  listPrivateGraphEndpoints(callback?: (err: AWSError, data: NeptuneGraph.Types.ListPrivateGraphEndpointsOutput) => void): Request<NeptuneGraph.Types.ListPrivateGraphEndpointsOutput, AWSError>;
  /**
   * Lists tags associated with a specified resource.
   */
  listTagsForResource(params: NeptuneGraph.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: NeptuneGraph.Types.ListTagsForResourceOutput) => void): Request<NeptuneGraph.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists tags associated with a specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: NeptuneGraph.Types.ListTagsForResourceOutput) => void): Request<NeptuneGraph.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Empties the data from a specified Neptune Analytics graph.
   */
  resetGraph(params: NeptuneGraph.Types.ResetGraphInput, callback?: (err: AWSError, data: NeptuneGraph.Types.ResetGraphOutput) => void): Request<NeptuneGraph.Types.ResetGraphOutput, AWSError>;
  /**
   * Empties the data from a specified Neptune Analytics graph.
   */
  resetGraph(callback?: (err: AWSError, data: NeptuneGraph.Types.ResetGraphOutput) => void): Request<NeptuneGraph.Types.ResetGraphOutput, AWSError>;
  /**
   * Restores a graph from a snapshot.
   */
  restoreGraphFromSnapshot(params: NeptuneGraph.Types.RestoreGraphFromSnapshotInput, callback?: (err: AWSError, data: NeptuneGraph.Types.RestoreGraphFromSnapshotOutput) => void): Request<NeptuneGraph.Types.RestoreGraphFromSnapshotOutput, AWSError>;
  /**
   * Restores a graph from a snapshot.
   */
  restoreGraphFromSnapshot(callback?: (err: AWSError, data: NeptuneGraph.Types.RestoreGraphFromSnapshotOutput) => void): Request<NeptuneGraph.Types.RestoreGraphFromSnapshotOutput, AWSError>;
  /**
   * Adds tags to the specified resource.
   */
  tagResource(params: NeptuneGraph.Types.TagResourceInput, callback?: (err: AWSError, data: NeptuneGraph.Types.TagResourceOutput) => void): Request<NeptuneGraph.Types.TagResourceOutput, AWSError>;
  /**
   * Adds tags to the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: NeptuneGraph.Types.TagResourceOutput) => void): Request<NeptuneGraph.Types.TagResourceOutput, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(params: NeptuneGraph.Types.UntagResourceInput, callback?: (err: AWSError, data: NeptuneGraph.Types.UntagResourceOutput) => void): Request<NeptuneGraph.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: NeptuneGraph.Types.UntagResourceOutput) => void): Request<NeptuneGraph.Types.UntagResourceOutput, AWSError>;
  /**
   * Updates the configuration of a specified Neptune Analytics graph
   */
  updateGraph(params: NeptuneGraph.Types.UpdateGraphInput, callback?: (err: AWSError, data: NeptuneGraph.Types.UpdateGraphOutput) => void): Request<NeptuneGraph.Types.UpdateGraphOutput, AWSError>;
  /**
   * Updates the configuration of a specified Neptune Analytics graph
   */
  updateGraph(callback?: (err: AWSError, data: NeptuneGraph.Types.UpdateGraphOutput) => void): Request<NeptuneGraph.Types.UpdateGraphOutput, AWSError>;
  /**
   * Waits for the graphAvailable state by periodically calling the underlying NeptuneGraph.getGraphoperation every 60 seconds (at most 480 times). Wait until Graph is Available
   */
  waitFor(state: "graphAvailable", params: NeptuneGraph.Types.GetGraphInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphOutput) => void): Request<NeptuneGraph.Types.GetGraphOutput, AWSError>;
  /**
   * Waits for the graphAvailable state by periodically calling the underlying NeptuneGraph.getGraphoperation every 60 seconds (at most 480 times). Wait until Graph is Available
   */
  waitFor(state: "graphAvailable", callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphOutput) => void): Request<NeptuneGraph.Types.GetGraphOutput, AWSError>;
  /**
   * Waits for the graphDeleted state by periodically calling the underlying NeptuneGraph.getGraphoperation every 60 seconds (at most 60 times). Wait until Graph is Deleted
   */
  waitFor(state: "graphDeleted", params: NeptuneGraph.Types.GetGraphInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphOutput) => void): Request<NeptuneGraph.Types.GetGraphOutput, AWSError>;
  /**
   * Waits for the graphDeleted state by periodically calling the underlying NeptuneGraph.getGraphoperation every 60 seconds (at most 60 times). Wait until Graph is Deleted
   */
  waitFor(state: "graphDeleted", callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphOutput) => void): Request<NeptuneGraph.Types.GetGraphOutput, AWSError>;
  /**
   * Waits for the graphSnapshotAvailable state by periodically calling the underlying NeptuneGraph.getGraphSnapshotoperation every 60 seconds (at most 120 times). Wait until GraphSnapshot is Available
   */
  waitFor(state: "graphSnapshotAvailable", params: NeptuneGraph.Types.GetGraphSnapshotInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.GetGraphSnapshotOutput, AWSError>;
  /**
   * Waits for the graphSnapshotAvailable state by periodically calling the underlying NeptuneGraph.getGraphSnapshotoperation every 60 seconds (at most 120 times). Wait until GraphSnapshot is Available
   */
  waitFor(state: "graphSnapshotAvailable", callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.GetGraphSnapshotOutput, AWSError>;
  /**
   * Waits for the graphSnapshotDeleted state by periodically calling the underlying NeptuneGraph.getGraphSnapshotoperation every 60 seconds (at most 60 times). Wait until GraphSnapshot is Deleted
   */
  waitFor(state: "graphSnapshotDeleted", params: NeptuneGraph.Types.GetGraphSnapshotInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.GetGraphSnapshotOutput, AWSError>;
  /**
   * Waits for the graphSnapshotDeleted state by periodically calling the underlying NeptuneGraph.getGraphSnapshotoperation every 60 seconds (at most 60 times). Wait until GraphSnapshot is Deleted
   */
  waitFor(state: "graphSnapshotDeleted", callback?: (err: AWSError, data: NeptuneGraph.Types.GetGraphSnapshotOutput) => void): Request<NeptuneGraph.Types.GetGraphSnapshotOutput, AWSError>;
  /**
   * Waits for the importTaskCancelled state by periodically calling the underlying NeptuneGraph.getImportTaskoperation every 60 seconds (at most 60 times). Wait until Import Task is Cancelled
   */
  waitFor(state: "importTaskCancelled", params: NeptuneGraph.Types.GetImportTaskInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: NeptuneGraph.Types.GetImportTaskOutput) => void): Request<NeptuneGraph.Types.GetImportTaskOutput, AWSError>;
  /**
   * Waits for the importTaskCancelled state by periodically calling the underlying NeptuneGraph.getImportTaskoperation every 60 seconds (at most 60 times). Wait until Import Task is Cancelled
   */
  waitFor(state: "importTaskCancelled", callback?: (err: AWSError, data: NeptuneGraph.Types.GetImportTaskOutput) => void): Request<NeptuneGraph.Types.GetImportTaskOutput, AWSError>;
  /**
   * Waits for the importTaskSuccessful state by periodically calling the underlying NeptuneGraph.getImportTaskoperation every 60 seconds (at most 480 times). Wait until Import Task is Successful
   */
  waitFor(state: "importTaskSuccessful", params: NeptuneGraph.Types.GetImportTaskInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: NeptuneGraph.Types.GetImportTaskOutput) => void): Request<NeptuneGraph.Types.GetImportTaskOutput, AWSError>;
  /**
   * Waits for the importTaskSuccessful state by periodically calling the underlying NeptuneGraph.getImportTaskoperation every 60 seconds (at most 480 times). Wait until Import Task is Successful
   */
  waitFor(state: "importTaskSuccessful", callback?: (err: AWSError, data: NeptuneGraph.Types.GetImportTaskOutput) => void): Request<NeptuneGraph.Types.GetImportTaskOutput, AWSError>;
  /**
   * Waits for the privateGraphEndpointAvailable state by periodically calling the underlying NeptuneGraph.getPrivateGraphEndpointoperation every 10 seconds (at most 180 times). Wait until PrivateGraphEndpoint is Available
   */
  waitFor(state: "privateGraphEndpointAvailable", params: NeptuneGraph.Types.GetPrivateGraphEndpointInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: NeptuneGraph.Types.GetPrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.GetPrivateGraphEndpointOutput, AWSError>;
  /**
   * Waits for the privateGraphEndpointAvailable state by periodically calling the underlying NeptuneGraph.getPrivateGraphEndpointoperation every 10 seconds (at most 180 times). Wait until PrivateGraphEndpoint is Available
   */
  waitFor(state: "privateGraphEndpointAvailable", callback?: (err: AWSError, data: NeptuneGraph.Types.GetPrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.GetPrivateGraphEndpointOutput, AWSError>;
  /**
   * Waits for the privateGraphEndpointDeleted state by periodically calling the underlying NeptuneGraph.getPrivateGraphEndpointoperation every 10 seconds (at most 180 times). Wait until PrivateGraphEndpoint is Deleted
   */
  waitFor(state: "privateGraphEndpointDeleted", params: NeptuneGraph.Types.GetPrivateGraphEndpointInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: NeptuneGraph.Types.GetPrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.GetPrivateGraphEndpointOutput, AWSError>;
  /**
   * Waits for the privateGraphEndpointDeleted state by periodically calling the underlying NeptuneGraph.getPrivateGraphEndpointoperation every 10 seconds (at most 180 times). Wait until PrivateGraphEndpoint is Deleted
   */
  waitFor(state: "privateGraphEndpointDeleted", callback?: (err: AWSError, data: NeptuneGraph.Types.GetPrivateGraphEndpointOutput) => void): Request<NeptuneGraph.Types.GetPrivateGraphEndpointOutput, AWSError>;
}
declare namespace NeptuneGraph {
  export type Arn = string;
  export type Boolean = boolean;
  export interface CancelImportTaskInput {
    /**
     * The unique identifier of the import task.
     */
    taskIdentifier: TaskId;
  }
  export interface CancelImportTaskOutput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphId?: GraphId;
    /**
     * The unique identifier of the import task.
     */
    taskId: TaskId;
    /**
     * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot
     */
    source: String;
    /**
     * Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format.
     */
    format?: Format;
    /**
     * The ARN of the IAM role that will allow access to the data that is to be imported.
     */
    roleArn: RoleArn;
    /**
     * Current status of the task. Status is CANCELLING when the import task is cancelled.
     */
    status: ImportTaskStatus;
  }
  export interface CreateGraphInput {
    /**
     * A name for the new Neptune Analytics graph to be created. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. 
     */
    graphName: GraphName;
    /**
     * Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
     */
    tags?: TagMap;
    /**
     * Specifies whether or not the graph can be reachable over the internet. All access to graphs IAM authenticated. (true to enable, or false to disable.
     */
    publicConnectivity?: Boolean;
    /**
     * Specifies a KMS key to use to encrypt data in the new graph.
     */
    kmsKeyIdentifier?: KmsKeyArn;
    /**
     * Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as dimension=value. Max = 65,535
     */
    vectorSearchConfiguration?: VectorSearchConfiguration;
    /**
     * The number of replicas in other AZs. Min =0, Max = 2, Default =1
     */
    replicaCount?: ReplicaCount;
    /**
     * Indicates whether or not to enable deletion protection on the graph. The graph can’t be deleted when deletion protection is enabled. (true or false).
     */
    deletionProtection?: Boolean;
    /**
     * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128
     */
    provisionedMemory: ProvisionedMemory;
  }
  export interface CreateGraphOutput {
    /**
     * The ID of the graph.
     */
    id: GraphId;
    /**
     * The graph name. For example: my-graph-1. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. 
     */
    name: GraphName;
    /**
     * The ARN of the graph.
     */
    arn: String;
    /**
     * The current status of the graph.
     */
    status?: GraphStatus;
    /**
     * The reason the status was given.
     */
    statusReason?: String;
    /**
     * The time when the graph was created.
     */
    createTime?: Timestamp;
    /**
     * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * The graph endpoint.
     */
    endpoint?: String;
    /**
     * Specifies whether or not the graph can be reachable over the internet. All access to graphs IAM authenticated.
     */
    publicConnectivity?: Boolean;
    /**
     * The vector-search configuration for the graph, which specifies the vector dimension to use in the vector index, if any.
     */
    vectorSearchConfiguration?: VectorSearchConfiguration;
    /**
     * The number of replicas in other AZs.
     */
    replicaCount?: ReplicaCount;
    /**
     * Specifies the KMS key used to encrypt data in the new graph.
     */
    kmsKeyIdentifier?: KmsKeyArn;
    /**
     * The ID of the source graph.
     */
    sourceSnapshotId?: SnapshotId;
    /**
     * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
     */
    deletionProtection?: Boolean;
    /**
     * The build number of the graph software.
     */
    buildNumber?: String;
  }
  export interface CreateGraphSnapshotInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: GraphIdentifier;
    /**
     * The snapshot name. For example: my-snapshot-1. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
     */
    snapshotName: SnapshotName;
    /**
     * Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
     */
    tags?: TagMap;
  }
  export interface CreateGraphSnapshotOutput {
    /**
     * The ID of the snapshot created.
     */
    id: SnapshotId;
    /**
     * The name of the snapshot created.
     */
    name: SnapshotName;
    /**
     * The ARN of the snapshot created.
     */
    arn: String;
    /**
     * The Id of the Neptune Analytics graph from which the snapshot is created.
     */
    sourceGraphId?: GraphId;
    /**
     * The snapshot creation time
     */
    snapshotCreateTime?: Timestamp;
    /**
     * The current state of the snapshot.
     */
    status?: SnapshotStatus;
    /**
     * The ID of the KMS key used to encrypt and decrypt graph data.
     */
    kmsKeyIdentifier?: KmsKeyArn;
  }
  export interface CreateGraphUsingImportTaskInput {
    /**
     * A name for the new Neptune Analytics graph to be created. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. 
     */
    graphName: GraphName;
    /**
     * Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
     */
    tags?: TagMap;
    /**
     * Specifies whether or not the graph can be reachable over the internet. All access to graphs IAM authenticated. (true to enable, or false to disable.
     */
    publicConnectivity?: Boolean;
    /**
     * Specifies a KMS key to use to encrypt data imported into the new graph.
     */
    kmsKeyIdentifier?: KmsKeyArn;
    /**
     * Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as dimension=value. Max = 65,535 
     */
    vectorSearchConfiguration?: VectorSearchConfiguration;
    /**
     * The number of replicas in other AZs to provision on the new graph after import. Default = 0, Min = 0, Max = 2.
     */
    replicaCount?: ReplicaCount;
    /**
     * Indicates whether or not to enable deletion protection on the graph. The graph can’t be deleted when deletion protection is enabled. (true or false).
     */
    deletionProtection?: Boolean;
    /**
     * Contains options for controlling the import process. For example, if the failOnError key is set to false, the import skips problem data and attempts to continue (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered.
     */
    importOptions?: ImportOptions;
    /**
     * The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 1024, or the approved upper limit for your account.  If both the minimum and maximum values are specified, the max of the min-provisioned-memory and max-provisioned memory is used to create the graph. If neither value is specified 128 m-NCUs are used.
     */
    maxProvisionedMemory?: ProvisionedMemory;
    /**
     * The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 128
     */
    minProvisionedMemory?: ProvisionedMemory;
    /**
     * If set to true, the task halts when an import error is encountered. If set to false, the task skips the data that caused the error and continues if possible.
     */
    failOnError?: Boolean;
    /**
     * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.
     */
    source: String;
    /**
     * Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format.
     */
    format?: Format;
    /**
     * The ARN of the IAM role that will allow access to the data that is to be imported.
     */
    roleArn: RoleArn;
  }
  export interface CreateGraphUsingImportTaskOutput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphId?: GraphId;
    /**
     * The unique identifier of the import task.
     */
    taskId: TaskId;
    /**
     * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.
     */
    source: String;
    /**
     * Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format.
     */
    format?: Format;
    /**
     * The ARN of the IAM role that will allow access to the data that is to be imported.
     */
    roleArn: RoleArn;
    /**
     * The status of the import task.
     */
    status: ImportTaskStatus;
    /**
     * Contains options for controlling the import process. For example, if the failOnError key is set to false, the import skips problem data and attempts to continue (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered.
     */
    importOptions?: ImportOptions;
  }
  export interface CreatePrivateGraphEndpointInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: GraphIdentifier;
    /**
     *  The VPC in which the private graph endpoint needs to be created.
     */
    vpcId?: VpcId;
    /**
     * Subnets in which private graph endpoint ENIs are created.
     */
    subnetIds?: SubnetIds;
    /**
     * Security groups to be attached to the private graph endpoint..
     */
    vpcSecurityGroupIds?: SecurityGroupIds;
  }
  export interface CreatePrivateGraphEndpointOutput {
    /**
     * VPC in which the private graph endpoint is created.
     */
    vpcId: VpcId;
    /**
     * Subnets in which the private graph endpoint ENIs are created. 
     */
    subnetIds: SubnetIds;
    /**
     * Status of the private graph endpoint.
     */
    status: PrivateGraphEndpointStatus;
    /**
     * Endpoint ID of the prviate grpah endpoint.
     */
    vpcEndpointId?: VpcEndpointId;
  }
  export interface DeleteGraphInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: GraphIdentifier;
    /**
     * Determines whether a final graph snapshot is created before the graph is deleted. If true is specified, no graph snapshot is created. If false is specified, a graph snapshot is created before the graph is deleted.
     */
    skipSnapshot: Boolean;
  }
  export interface DeleteGraphOutput {
    /**
     * The unique identifier of the graph.
     */
    id: GraphId;
    /**
     * The name of the graph.
     */
    name: GraphName;
    /**
     * The ARN associated with the graph.
     */
    arn: String;
    /**
     * The status of the graph.
     */
    status?: GraphStatus;
    /**
     * The reason for the status of the graph.
     */
    statusReason?: String;
    /**
     * The time at which the graph was created.
     */
    createTime?: Timestamp;
    /**
     * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * The graph endpoint.
     */
    endpoint?: String;
    /**
     * If true, the graph has a public endpoint, otherwise not.
     */
    publicConnectivity?: Boolean;
    vectorSearchConfiguration?: VectorSearchConfiguration;
    /**
     * The number of replicas for the graph.
     */
    replicaCount?: ReplicaCount;
    /**
     * The ID of the KMS key used to encrypt and decrypt graph data.
     */
    kmsKeyIdentifier?: KmsKeyArn;
    /**
     * The ID of the snapshot from which the graph was created, if the graph was recovered from a snapshot.
     */
    sourceSnapshotId?: SnapshotId;
    /**
     * If true, deletion protection was enabled for the graph.
     */
    deletionProtection?: Boolean;
    /**
     * The build number associated with the graph.
     */
    buildNumber?: String;
  }
  export interface DeleteGraphSnapshotInput {
    /**
     * ID of the graph snapshot to be deleted.
     */
    snapshotIdentifier: SnapshotIdentifier;
  }
  export interface DeleteGraphSnapshotOutput {
    /**
     * The unique identifier of the graph snapshot.
     */
    id: SnapshotId;
    /**
     * The snapshot name. For example: my-snapshot-1. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
     */
    name: SnapshotName;
    /**
     * The ARN of the graph snapshot.
     */
    arn: String;
    /**
     * The graph identifier for the graph from which the snapshot was created.
     */
    sourceGraphId?: GraphId;
    /**
     * The time when the snapshot was created.
     */
    snapshotCreateTime?: Timestamp;
    /**
     * The status of the graph snapshot.
     */
    status?: SnapshotStatus;
    /**
     * The ID of the KMS key used to encrypt and decrypt the snapshot.
     */
    kmsKeyIdentifier?: KmsKeyArn;
  }
  export interface DeletePrivateGraphEndpointInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: GraphIdentifier;
    /**
     * The ID of the VPC where the private endpoint is located.
     */
    vpcId: VpcId;
  }
  export interface DeletePrivateGraphEndpointOutput {
    /**
     * The ID of the VPC where the private endpoint was deleted.
     */
    vpcId: VpcId;
    /**
     * The subnet IDs involved.
     */
    subnetIds: SubnetIds;
    /**
     * The status of the delete operation.
     */
    status: PrivateGraphEndpointStatus;
    /**
     * The ID of the VPC endpoint that was deleted.
     */
    vpcEndpointId?: VpcEndpointId;
  }
  export type Format = "CSV"|"OPEN_CYPHER"|string;
  export interface GetGraphInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: GraphIdentifier;
  }
  export interface GetGraphOutput {
    /**
     * The unique identifier of the graph.
     */
    id: GraphId;
    /**
     * The name of the graph.
     */
    name: GraphName;
    /**
     * The ARN associated with the graph.
     */
    arn: String;
    /**
     * The status of the graph.
     */
    status?: GraphStatus;
    /**
     * The reason that the graph has this status.
     */
    statusReason?: String;
    /**
     * The time at which the graph was created.
     */
    createTime?: Timestamp;
    /**
     * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * The graph endpoint.
     */
    endpoint?: String;
    /**
     * If true, the graph has a public endpoint, otherwise not.
     */
    publicConnectivity?: Boolean;
    vectorSearchConfiguration?: VectorSearchConfiguration;
    /**
     * The number of replicas for the graph.
     */
    replicaCount?: ReplicaCount;
    /**
     * The ID of the KMS key used to encrypt and decrypt graph data.
     */
    kmsKeyIdentifier?: KmsKeyArn;
    /**
     * The ID of the snapshot from which the graph was created, if it was created from a snapshot.
     */
    sourceSnapshotId?: SnapshotId;
    /**
     * If true, deletion protection is enabled for the graph.
     */
    deletionProtection?: Boolean;
    /**
     * The build number of the graph.
     */
    buildNumber?: String;
  }
  export interface GetGraphSnapshotInput {
    /**
     * The ID of the snapshot to retrieve.
     */
    snapshotIdentifier: SnapshotIdentifier;
  }
  export interface GetGraphSnapshotOutput {
    /**
     * The unique identifier of the graph snapshot.
     */
    id: SnapshotId;
    /**
     * The snapshot name. For example: my-snapshot-1. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
     */
    name: SnapshotName;
    /**
     * The ARN of the graph snapshot.
     */
    arn: String;
    /**
     * The graph identifier for the graph for which a snapshot is to be created.
     */
    sourceGraphId?: GraphId;
    /**
     * The time when the snapshot was created.
     */
    snapshotCreateTime?: Timestamp;
    /**
     * The status of the graph snapshot.
     */
    status?: SnapshotStatus;
    /**
     * The ID of the KMS key used to encrypt and decrypt the snapshot.
     */
    kmsKeyIdentifier?: KmsKeyArn;
  }
  export interface GetImportTaskInput {
    /**
     * The unique identifier of the import task.
     */
    taskIdentifier: TaskId;
  }
  export interface GetImportTaskOutput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphId?: GraphId;
    /**
     * The unique identifier of the import task.
     */
    taskId: TaskId;
    /**
     * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot
     */
    source: String;
    /**
     * Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format.
     */
    format?: Format;
    /**
     * The ARN of the IAM role that will allow access to the data that is to be imported.
     */
    roleArn: RoleArn;
    /**
     * The status of the import task:    INITIALIZING   –   The necessary resources needed to create the graph are being prepared.    ANALYZING_DATA   –   The data is being analyzed to determine the optimal infrastructure configuration for the new graph.    RE_PROVISIONING   –   The data did not fit into the provisioned graph, so it is being re-provisioned with more capacity.    IMPORTING   –   The data is being loaded.    ERROR_ENCOUNTERED   –   An error has been encountered while trying to create the graph and import the data.    ERROR_ENCOUNTERED_ROLLING_BACK   –   Because of the error that was encountered, the graph is being rolled back and all its resources released.    SUCCEEDED   –   Graph creation and data loading succeeded.    FAILED   –   Graph creation or data loading failed. When the status is FAILED, you can use get-graphs to get more information about the state of the graph.    CANCELLING   –   Because you cancelled the import task, cancellation is in progress.    CANCELLED   –   You have successfully cancelled the import task.  
     */
    status: ImportTaskStatus;
    /**
     * Contains options for controlling the import process. For example, if the failOnError key is set to false, the import skips problem data and attempts to continue (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered.
     */
    importOptions?: ImportOptions;
    /**
     * Contains details about the specified import task.
     */
    importTaskDetails?: ImportTaskDetails;
    /**
     * The number of the current attempt to execute the import task.
     */
    attemptNumber?: Integer;
    /**
     * The reason that the import task has this status value.
     */
    statusReason?: String;
  }
  export interface GetPrivateGraphEndpointInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: GraphIdentifier;
    /**
     * The ID of the VPC where the private endpoint is located.
     */
    vpcId: VpcId;
  }
  export interface GetPrivateGraphEndpointOutput {
    /**
     * The ID of the VPC where the private endpoint is located.
     */
    vpcId: VpcId;
    /**
     * The subnet IDs involved.
     */
    subnetIds: SubnetIds;
    /**
     * The current status of the private endpoint.
     */
    status: PrivateGraphEndpointStatus;
    /**
     * The ID of the private endpoint.
     */
    vpcEndpointId?: VpcEndpointId;
  }
  export type GraphId = string;
  export type GraphIdentifier = string;
  export type GraphName = string;
  export interface GraphSnapshotSummary {
    /**
     * The unique identifier of the graph snapshot.
     */
    id: SnapshotId;
    /**
     * The snapshot name. For example: my-snapshot-1. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
     */
    name: SnapshotName;
    /**
     * The ARN of the graph snapshot.
     */
    arn: String;
    /**
     * The graph identifier for the graph for which a snapshot is to be created.
     */
    sourceGraphId?: GraphId;
    /**
     * The time when the snapshot was created.
     */
    snapshotCreateTime?: Timestamp;
    /**
     * The status of the graph snapshot.
     */
    status?: SnapshotStatus;
    /**
     * The ID of the KMS key used to encrypt and decrypt the snapshot.
     */
    kmsKeyIdentifier?: KmsKeyArn;
  }
  export type GraphSnapshotSummaryList = GraphSnapshotSummary[];
  export type GraphStatus = "CREATING"|"AVAILABLE"|"DELETING"|"RESETTING"|"UPDATING"|"SNAPSHOTTING"|"FAILED"|string;
  export interface GraphSummary {
    /**
     * The unique identifier of the graph.
     */
    id: GraphId;
    /**
     * The name of the graph.
     */
    name: GraphName;
    /**
     * The ARN associated with the graph.
     */
    arn: String;
    /**
     * The status of the graph.
     */
    status?: GraphStatus;
    /**
     * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * If true, the graph has a public endpoint, otherwise not.
     */
    publicConnectivity?: Boolean;
    /**
     * The graph endpoint.
     */
    endpoint?: String;
    /**
     * The number of replicas for the graph.
     */
    replicaCount?: ReplicaCount;
    /**
     * The ID of the KMS key used to encrypt and decrypt graph data.
     */
    kmsKeyIdentifier?: String;
    /**
     * If true, deletion protection is enabled for the graph.
     */
    deletionProtection?: Boolean;
  }
  export type GraphSummaryList = GraphSummary[];
  export interface ImportOptions {
    /**
     * Options for importing data from a Neptune database.
     */
    neptune?: NeptuneImportOptions;
  }
  export interface ImportTaskDetails {
    /**
     * Status of the import task.
     */
    status: String;
    /**
     * Time at which the import task started.
     */
    startTime: Timestamp;
    /**
     * Seconds elapsed since the import task started.
     */
    timeElapsedSeconds: Long;
    /**
     * The percentage progress so far.
     */
    progressPercentage: Integer;
    /**
     * The number of errors encountered so far.
     */
    errorCount: Integer;
    /**
     * Details about the errors that have been encountered.
     */
    errorDetails?: String;
    /**
     * The number of statements in the import task.
     */
    statementCount: Long;
    /**
     * The number of dictionary entries in the import task.
     */
    dictionaryEntryCount: Long;
  }
  export type ImportTaskStatus = "INITIALIZING"|"EXPORTING"|"ANALYZING_DATA"|"IMPORTING"|"REPROVISIONING"|"ROLLING_BACK"|"SUCCEEDED"|"FAILED"|"CANCELLING"|"CANCELLED"|string;
  export interface ImportTaskSummary {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphId?: GraphId;
    /**
     * The unique identifier of the import task.
     */
    taskId: TaskId;
    /**
     * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot
     */
    source: String;
    /**
     * Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format.
     */
    format?: Format;
    /**
     * The ARN of the IAM role that will allow access to the data that is to be imported.
     */
    roleArn: RoleArn;
    /**
     * Status of the import task.
     */
    status: ImportTaskStatus;
  }
  export type ImportTaskSummaryList = ImportTaskSummary[];
  export type Integer = number;
  export type KmsKeyArn = string;
  export interface ListGraphSnapshotsInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier?: GraphIdentifier;
    /**
     * Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
     */
    nextToken?: PaginationToken;
    /**
     * The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI.
     */
    maxResults?: MaxResults;
  }
  export interface ListGraphSnapshotsOutput {
    /**
     * The requested list of snapshots.
     */
    graphSnapshots: GraphSnapshotSummaryList;
    /**
     * Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface ListGraphsInput {
    /**
     * Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
     */
    nextToken?: PaginationToken;
    /**
     * The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI.
     */
    maxResults?: MaxResults;
  }
  export interface ListGraphsOutput {
    /**
     * A list of the graphs.
     */
    graphs: GraphSummaryList;
    /**
     * Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface ListImportTasksInput {
    /**
     * Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
     */
    nextToken?: PaginationToken;
    /**
     * The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI.
     */
    maxResults?: MaxResults;
  }
  export interface ListImportTasksOutput {
    /**
     * The requested list of import tasks.
     */
    tasks: ImportTaskSummaryList;
    /**
     * Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface ListPrivateGraphEndpointsInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: GraphIdentifier;
    /**
     * Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
     */
    nextToken?: PaginationToken;
    /**
     * The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI.
     */
    maxResults?: MaxResults;
  }
  export interface ListPrivateGraphEndpointsOutput {
    /**
     * A list of private endpoints for the specified Neptune Analytics graph.
     */
    privateGraphEndpoints: PrivateGraphEndpointSummaryList;
    /**
     * Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTagsForResourceInput {
    /**
     * The ARN of the resource.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The list of metadata tags associated with the resource.
     */
    tags?: TagMap;
  }
  export type Long = number;
  export type MaxResults = number;
  export interface NeptuneImportOptions {
    /**
     * The path to an S3 bucket from which to import data.
     */
    s3ExportPath: NeptuneImportOptionsS3ExportPathString;
    /**
     * The KMS key to use to encrypt data in the S3 bucket where the graph data is exported
     */
    s3ExportKmsKeyId: NeptuneImportOptionsS3ExportKmsKeyIdString;
    /**
     * Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided. Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting preserveDefaultVertexLabels to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.
     */
    preserveDefaultVertexLabels?: Boolean;
    /**
     * Neptune Analytics currently does not support user defined edge ids. The edge ids are not imported by default. They are imported if preserveEdgeIds is set to true, and ids are stored as properties on the relationships with the property name neptuneEdgeId.
     */
    preserveEdgeIds?: Boolean;
  }
  export type NeptuneImportOptionsS3ExportKmsKeyIdString = string;
  export type NeptuneImportOptionsS3ExportPathString = string;
  export type PaginationToken = string;
  export type PrivateGraphEndpointStatus = "CREATING"|"AVAILABLE"|"DELETING"|"FAILED"|string;
  export interface PrivateGraphEndpointSummary {
    /**
     * The ID of the VPC in which the private graph endpoint is located.
     */
    vpcId: VpcId;
    /**
     * The subnet IDs associated with the private graph endpoint.
     */
    subnetIds: SubnetIds;
    /**
     * The status of the private graph endpoint.
     */
    status: PrivateGraphEndpointStatus;
    /**
     * The ID of the VPC endpoint.
     */
    vpcEndpointId?: VpcEndpointId;
  }
  export type PrivateGraphEndpointSummaryList = PrivateGraphEndpointSummary[];
  export type ProvisionedMemory = number;
  export type ReplicaCount = number;
  export interface ResetGraphInput {
    /**
     * ID of the graph to reset.
     */
    graphIdentifier: GraphIdentifier;
    /**
     * Determines whether a final graph snapshot is created before the graph data is deleted. If set to true, no graph snapshot is created. If set to false, a graph snapshot is created before the data is deleted.
     */
    skipSnapshot: Boolean;
  }
  export interface ResetGraphOutput {
    /**
     * The unique identifier of the graph.
     */
    id: GraphId;
    /**
     * The name of the graph.
     */
    name: GraphName;
    /**
     * The ARN associated with the graph.
     */
    arn: String;
    /**
     * The status of the graph.
     */
    status?: GraphStatus;
    /**
     * The reason that the graph has this status.
     */
    statusReason?: String;
    /**
     * The time at which the graph was created.
     */
    createTime?: Timestamp;
    /**
     * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * The graph endpoint.
     */
    endpoint?: String;
    /**
     * If true, the graph has a public endpoint, otherwise not.
     */
    publicConnectivity?: Boolean;
    vectorSearchConfiguration?: VectorSearchConfiguration;
    /**
     * The number of replicas for the graph.
     */
    replicaCount?: ReplicaCount;
    /**
     * The ID of the KMS key used to encrypt and decrypt graph data.
     */
    kmsKeyIdentifier?: KmsKeyArn;
    /**
     * The ID of the snapshot from which the graph was created, if any.
     */
    sourceSnapshotId?: SnapshotId;
    /**
     * If true, deletion protection is enabled for the graph.
     */
    deletionProtection?: Boolean;
    /**
     * The build number of the graph.
     */
    buildNumber?: String;
  }
  export interface RestoreGraphFromSnapshotInput {
    /**
     * The ID of the snapshot in question.
     */
    snapshotIdentifier: SnapshotIdentifier;
    /**
     * A name for the new Neptune Analytics graph to be created from the snapshot. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens. 
     */
    graphName: GraphName;
    /**
     * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
     */
    deletionProtection?: Boolean;
    /**
     * Adds metadata tags to the snapshot. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
     */
    tags?: TagMap;
    /**
     * The number of replicas in other AZs. Min =0, Max = 2, Default =1
     */
    replicaCount?: ReplicaCount;
    /**
     * Specifies whether or not the graph can be reachable over the internet. All access to graphs IAM authenticated. (true to enable, or false to disable).
     */
    publicConnectivity?: Boolean;
  }
  export interface RestoreGraphFromSnapshotOutput {
    /**
     * The unique identifier of the graph.
     */
    id: GraphId;
    /**
     * The name of the graph.
     */
    name: GraphName;
    /**
     * The ARN associated with the graph.
     */
    arn: String;
    /**
     * The status of the graph.
     */
    status?: GraphStatus;
    /**
     * The reason that the graph has this status.
     */
    statusReason?: String;
    /**
     * The time at which the graph was created.
     */
    createTime?: Timestamp;
    /**
     * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * The graph endpoint.
     */
    endpoint?: String;
    /**
     * If true, the graph has a public endpoint, otherwise not.
     */
    publicConnectivity?: Boolean;
    vectorSearchConfiguration?: VectorSearchConfiguration;
    /**
     * The number of replicas for the graph.
     */
    replicaCount?: ReplicaCount;
    /**
     * The ID of the KMS key used to encrypt and decrypt graph data.
     */
    kmsKeyIdentifier?: KmsKeyArn;
    /**
     * The ID of the snapshot from which the graph was created, if any.
     */
    sourceSnapshotId?: SnapshotId;
    /**
     * If true, deletion protection is enabled for the graph.
     */
    deletionProtection?: Boolean;
    /**
     * The build number of the graph.
     */
    buildNumber?: String;
  }
  export type RoleArn = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type SnapshotId = string;
  export type SnapshotIdentifier = string;
  export type SnapshotName = string;
  export type SnapshotStatus = "CREATING"|"AVAILABLE"|"DELETING"|"FAILED"|string;
  export type String = string;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceInput {
    /**
     * ARN of the resource for which tags need to be added.
     */
    resourceArn: Arn;
    /**
     * The tags to be assigned to the Neptune Analytics resource. The tags are metadata that are specified as a list of key-value pairs:  Key (string)   –   A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length. It can't be prefixed with aws: and can only contain the set of Unicode characters specified by this Java regular expression: "^([\p{L}\p{Z}\p{N}_.:/=+\-]*)$").  Value (string)   –   A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length. It can't be prefixed with aws: and can only contain the set of Unicode characters specified by this Java regular expression: "^([\p{L}\p{Z}\p{N}_.:/=+\-]*)$").
     */
    tags: TagMap;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type TaskId = string;
  export type Timestamp = Date;
  export interface UntagResourceInput {
    /**
     * ARN of the resource whose tag needs to be removed.
     */
    resourceArn: Arn;
    /**
     * Tag keys for the tags to be removed.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateGraphInput {
    /**
     * The unique identifier of the Neptune Analytics graph.
     */
    graphIdentifier: GraphIdentifier;
    /**
     * Specifies whether or not the graph can be reachable over the internet. All access to graphs IAM authenticated. (true to enable, or false to disable.
     */
    publicConnectivity?: Boolean;
    /**
     * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
     */
    deletionProtection?: Boolean;
  }
  export interface UpdateGraphOutput {
    /**
     * The unique identifier of the graph.
     */
    id: GraphId;
    /**
     * The name of the graph.
     */
    name: GraphName;
    /**
     * The ARN associated with the graph.
     */
    arn: String;
    /**
     * The status of the graph.
     */
    status?: GraphStatus;
    /**
     * The reason that the graph has this status.
     */
    statusReason?: String;
    /**
     * The time at which the graph was created.
     */
    createTime?: Timestamp;
    /**
     * The number of memory-optimized Neptune Capacity Units (m-NCUs) allocated to the graph.
     */
    provisionedMemory?: ProvisionedMemory;
    /**
     * The graph endpoint.
     */
    endpoint?: String;
    /**
     * If true, the graph has a public endpoint, otherwise not.
     */
    publicConnectivity?: Boolean;
    vectorSearchConfiguration?: VectorSearchConfiguration;
    /**
     * The number of replicas for the graph.
     */
    replicaCount?: ReplicaCount;
    /**
     * The ID of the KMS key used to encrypt and decrypt graph data.
     */
    kmsKeyIdentifier?: KmsKeyArn;
    /**
     * The ID of the snapshot from which the graph was created, if any.
     */
    sourceSnapshotId?: SnapshotId;
    /**
     * If true, deletion protection is enabled for the graph.
     */
    deletionProtection?: Boolean;
    /**
     * The build number of the graph.
     */
    buildNumber?: String;
  }
  export interface VectorSearchConfiguration {
    /**
     * The number of dimensions.
     */
    dimension: VectorSearchDimension;
  }
  export type VectorSearchDimension = number;
  export type VpcEndpointId = string;
  export type VpcId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-11-29"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the NeptuneGraph client.
   */
  export import Types = NeptuneGraph;
}
export = NeptuneGraph;
