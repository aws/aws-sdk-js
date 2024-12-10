import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class DocDBElastic extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DocDBElastic.Types.ClientConfiguration)
  config: Config & DocDBElastic.Types.ClientConfiguration;
  /**
   * Copies a snapshot of an elastic cluster.
   */
  copyClusterSnapshot(params: DocDBElastic.Types.CopyClusterSnapshotInput, callback?: (err: AWSError, data: DocDBElastic.Types.CopyClusterSnapshotOutput) => void): Request<DocDBElastic.Types.CopyClusterSnapshotOutput, AWSError>;
  /**
   * Copies a snapshot of an elastic cluster.
   */
  copyClusterSnapshot(callback?: (err: AWSError, data: DocDBElastic.Types.CopyClusterSnapshotOutput) => void): Request<DocDBElastic.Types.CopyClusterSnapshotOutput, AWSError>;
  /**
   * Creates a new Amazon DocumentDB elastic cluster and returns its cluster structure.
   */
  createCluster(params: DocDBElastic.Types.CreateClusterInput, callback?: (err: AWSError, data: DocDBElastic.Types.CreateClusterOutput) => void): Request<DocDBElastic.Types.CreateClusterOutput, AWSError>;
  /**
   * Creates a new Amazon DocumentDB elastic cluster and returns its cluster structure.
   */
  createCluster(callback?: (err: AWSError, data: DocDBElastic.Types.CreateClusterOutput) => void): Request<DocDBElastic.Types.CreateClusterOutput, AWSError>;
  /**
   * Creates a snapshot of an elastic cluster.
   */
  createClusterSnapshot(params: DocDBElastic.Types.CreateClusterSnapshotInput, callback?: (err: AWSError, data: DocDBElastic.Types.CreateClusterSnapshotOutput) => void): Request<DocDBElastic.Types.CreateClusterSnapshotOutput, AWSError>;
  /**
   * Creates a snapshot of an elastic cluster.
   */
  createClusterSnapshot(callback?: (err: AWSError, data: DocDBElastic.Types.CreateClusterSnapshotOutput) => void): Request<DocDBElastic.Types.CreateClusterSnapshotOutput, AWSError>;
  /**
   * Delete an elastic cluster.
   */
  deleteCluster(params: DocDBElastic.Types.DeleteClusterInput, callback?: (err: AWSError, data: DocDBElastic.Types.DeleteClusterOutput) => void): Request<DocDBElastic.Types.DeleteClusterOutput, AWSError>;
  /**
   * Delete an elastic cluster.
   */
  deleteCluster(callback?: (err: AWSError, data: DocDBElastic.Types.DeleteClusterOutput) => void): Request<DocDBElastic.Types.DeleteClusterOutput, AWSError>;
  /**
   * Delete an elastic cluster snapshot.
   */
  deleteClusterSnapshot(params: DocDBElastic.Types.DeleteClusterSnapshotInput, callback?: (err: AWSError, data: DocDBElastic.Types.DeleteClusterSnapshotOutput) => void): Request<DocDBElastic.Types.DeleteClusterSnapshotOutput, AWSError>;
  /**
   * Delete an elastic cluster snapshot.
   */
  deleteClusterSnapshot(callback?: (err: AWSError, data: DocDBElastic.Types.DeleteClusterSnapshotOutput) => void): Request<DocDBElastic.Types.DeleteClusterSnapshotOutput, AWSError>;
  /**
   * Returns information about a specific elastic cluster.
   */
  getCluster(params: DocDBElastic.Types.GetClusterInput, callback?: (err: AWSError, data: DocDBElastic.Types.GetClusterOutput) => void): Request<DocDBElastic.Types.GetClusterOutput, AWSError>;
  /**
   * Returns information about a specific elastic cluster.
   */
  getCluster(callback?: (err: AWSError, data: DocDBElastic.Types.GetClusterOutput) => void): Request<DocDBElastic.Types.GetClusterOutput, AWSError>;
  /**
   * Returns information about a specific elastic cluster snapshot
   */
  getClusterSnapshot(params: DocDBElastic.Types.GetClusterSnapshotInput, callback?: (err: AWSError, data: DocDBElastic.Types.GetClusterSnapshotOutput) => void): Request<DocDBElastic.Types.GetClusterSnapshotOutput, AWSError>;
  /**
   * Returns information about a specific elastic cluster snapshot
   */
  getClusterSnapshot(callback?: (err: AWSError, data: DocDBElastic.Types.GetClusterSnapshotOutput) => void): Request<DocDBElastic.Types.GetClusterSnapshotOutput, AWSError>;
  /**
   * Returns information about snapshots for a specified elastic cluster.
   */
  listClusterSnapshots(params: DocDBElastic.Types.ListClusterSnapshotsInput, callback?: (err: AWSError, data: DocDBElastic.Types.ListClusterSnapshotsOutput) => void): Request<DocDBElastic.Types.ListClusterSnapshotsOutput, AWSError>;
  /**
   * Returns information about snapshots for a specified elastic cluster.
   */
  listClusterSnapshots(callback?: (err: AWSError, data: DocDBElastic.Types.ListClusterSnapshotsOutput) => void): Request<DocDBElastic.Types.ListClusterSnapshotsOutput, AWSError>;
  /**
   * Returns information about provisioned Amazon DocumentDB elastic clusters.
   */
  listClusters(params: DocDBElastic.Types.ListClustersInput, callback?: (err: AWSError, data: DocDBElastic.Types.ListClustersOutput) => void): Request<DocDBElastic.Types.ListClustersOutput, AWSError>;
  /**
   * Returns information about provisioned Amazon DocumentDB elastic clusters.
   */
  listClusters(callback?: (err: AWSError, data: DocDBElastic.Types.ListClustersOutput) => void): Request<DocDBElastic.Types.ListClustersOutput, AWSError>;
  /**
   * Lists all tags on a elastic cluster resource
   */
  listTagsForResource(params: DocDBElastic.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: DocDBElastic.Types.ListTagsForResourceResponse) => void): Request<DocDBElastic.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags on a elastic cluster resource
   */
  listTagsForResource(callback?: (err: AWSError, data: DocDBElastic.Types.ListTagsForResourceResponse) => void): Request<DocDBElastic.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Restores an elastic cluster from a snapshot.
   */
  restoreClusterFromSnapshot(params: DocDBElastic.Types.RestoreClusterFromSnapshotInput, callback?: (err: AWSError, data: DocDBElastic.Types.RestoreClusterFromSnapshotOutput) => void): Request<DocDBElastic.Types.RestoreClusterFromSnapshotOutput, AWSError>;
  /**
   * Restores an elastic cluster from a snapshot.
   */
  restoreClusterFromSnapshot(callback?: (err: AWSError, data: DocDBElastic.Types.RestoreClusterFromSnapshotOutput) => void): Request<DocDBElastic.Types.RestoreClusterFromSnapshotOutput, AWSError>;
  /**
   * Restarts the stopped elastic cluster that is specified by clusterARN.
   */
  startCluster(params: DocDBElastic.Types.StartClusterInput, callback?: (err: AWSError, data: DocDBElastic.Types.StartClusterOutput) => void): Request<DocDBElastic.Types.StartClusterOutput, AWSError>;
  /**
   * Restarts the stopped elastic cluster that is specified by clusterARN.
   */
  startCluster(callback?: (err: AWSError, data: DocDBElastic.Types.StartClusterOutput) => void): Request<DocDBElastic.Types.StartClusterOutput, AWSError>;
  /**
   * Stops the running elastic cluster that is specified by clusterArn. The elastic cluster must be in the available state. 
   */
  stopCluster(params: DocDBElastic.Types.StopClusterInput, callback?: (err: AWSError, data: DocDBElastic.Types.StopClusterOutput) => void): Request<DocDBElastic.Types.StopClusterOutput, AWSError>;
  /**
   * Stops the running elastic cluster that is specified by clusterArn. The elastic cluster must be in the available state. 
   */
  stopCluster(callback?: (err: AWSError, data: DocDBElastic.Types.StopClusterOutput) => void): Request<DocDBElastic.Types.StopClusterOutput, AWSError>;
  /**
   * Adds metadata tags to an elastic cluster resource
   */
  tagResource(params: DocDBElastic.Types.TagResourceRequest, callback?: (err: AWSError, data: DocDBElastic.Types.TagResourceResponse) => void): Request<DocDBElastic.Types.TagResourceResponse, AWSError>;
  /**
   * Adds metadata tags to an elastic cluster resource
   */
  tagResource(callback?: (err: AWSError, data: DocDBElastic.Types.TagResourceResponse) => void): Request<DocDBElastic.Types.TagResourceResponse, AWSError>;
  /**
   * Removes metadata tags from an elastic cluster resource
   */
  untagResource(params: DocDBElastic.Types.UntagResourceRequest, callback?: (err: AWSError, data: DocDBElastic.Types.UntagResourceResponse) => void): Request<DocDBElastic.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes metadata tags from an elastic cluster resource
   */
  untagResource(callback?: (err: AWSError, data: DocDBElastic.Types.UntagResourceResponse) => void): Request<DocDBElastic.Types.UntagResourceResponse, AWSError>;
  /**
   * Modifies an elastic cluster. This includes updating admin-username/password, upgrading the API version, and setting up a backup window and maintenance window
   */
  updateCluster(params: DocDBElastic.Types.UpdateClusterInput, callback?: (err: AWSError, data: DocDBElastic.Types.UpdateClusterOutput) => void): Request<DocDBElastic.Types.UpdateClusterOutput, AWSError>;
  /**
   * Modifies an elastic cluster. This includes updating admin-username/password, upgrading the API version, and setting up a backup window and maintenance window
   */
  updateCluster(callback?: (err: AWSError, data: DocDBElastic.Types.UpdateClusterOutput) => void): Request<DocDBElastic.Types.UpdateClusterOutput, AWSError>;
}
declare namespace DocDBElastic {
  export type Arn = string;
  export type Auth = "PLAIN_TEXT"|"SECRET_ARN"|string;
  export type Boolean = boolean;
  export interface Cluster {
    /**
     * The name of the elastic cluster administrator.
     */
    adminUserName: String;
    /**
     * The authentication type for the elastic cluster.
     */
    authType: Auth;
    /**
     * The number of days for which automatic snapshots are retained.
     */
    backupRetentionPeriod?: Integer;
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn: String;
    /**
     * The URL used to connect to the elastic cluster.
     */
    clusterEndpoint: String;
    /**
     * The name of the elastic cluster.
     */
    clusterName: String;
    /**
     * The time when the elastic cluster was created in Universal Coordinated Time (UTC).
     */
    createTime: String;
    /**
     * The KMS key identifier to use to encrypt the elastic cluster.
     */
    kmsKeyId: String;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled, as determined by backupRetentionPeriod.
     */
    preferredBackupWindow?: String;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi 
     */
    preferredMaintenanceWindow: String;
    /**
     * The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.
     */
    shardCapacity: Integer;
    /**
     * The number of shards assigned to the elastic cluster. Maximum is 32.
     */
    shardCount: Integer;
    /**
     * The number of replica instances applying to all shards in the cluster. A shardInstanceCount value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
     */
    shardInstanceCount?: Integer;
    /**
     * The total number of shards in the cluster.
     */
    shards?: ShardList;
    /**
     * The status of the elastic cluster.
     */
    status: Status;
    /**
     * The Amazon EC2 subnet IDs for the elastic cluster.
     */
    subnetIds: StringList;
    /**
     * A list of EC2 VPC security groups associated with thie elastic cluster.
     */
    vpcSecurityGroupIds: StringList;
  }
  export interface ClusterInList {
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn: String;
    /**
     * The name of the elastic cluster.
     */
    clusterName: String;
    /**
     * The status of the elastic cluster.
     */
    status: Status;
  }
  export type ClusterList = ClusterInList[];
  export interface ClusterSnapshot {
    /**
     * The name of the elastic cluster administrator.
     */
    adminUserName: String;
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn: String;
    /**
     * The time when the elastic cluster was created in Universal Coordinated Time (UTC).
     */
    clusterCreationTime: String;
    /**
     * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key. If an encryption key is not specified here, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region. 
     */
    kmsKeyId: String;
    /**
     * The ARN identifier of the elastic cluster snapshot.
     */
    snapshotArn: String;
    /**
     * The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).
     */
    snapshotCreationTime: String;
    /**
     * The name of the elastic cluster snapshot.
     */
    snapshotName: String;
    /**
     * The type of cluster snapshots to be returned. You can specify one of the following values:    automated - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.    manual - Return all cluster snapshots that you have manually created for your Amazon Web Services account.  
     */
    snapshotType?: SnapshotType;
    /**
     * The status of the elastic cluster snapshot.
     */
    status: Status;
    /**
     * The Amazon EC2 subnet IDs for the elastic cluster.
     */
    subnetIds: StringList;
    /**
     * A list of EC2 VPC security groups to associate with the elastic cluster.
     */
    vpcSecurityGroupIds: StringList;
  }
  export interface ClusterSnapshotInList {
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn: String;
    /**
     * The ARN identifier of the elastic cluster snapshot.
     */
    snapshotArn: String;
    /**
     * The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).
     */
    snapshotCreationTime: String;
    /**
     * The name of the elastic cluster snapshot.
     */
    snapshotName: String;
    /**
     * The status of the elastic cluster snapshot.
     */
    status: Status;
  }
  export type ClusterSnapshotList = ClusterSnapshotInList[];
  export interface CopyClusterSnapshotInput {
    /**
     * Set to true to copy all tags from the source cluster snapshot to the target elastic cluster snapshot. The default is false.
     */
    copyTags?: Boolean;
    /**
     * The Amazon Web Services KMS key ID for an encrypted elastic cluster snapshot. The Amazon Web Services KMS key ID is the Amazon Resource Name (ARN), Amazon Web Services KMS key identifier, or the Amazon Web Services KMS key alias for the Amazon Web Services KMS encryption key. If you copy an encrypted elastic cluster snapshot from your Amazon Web Services account, you can specify a value for KmsKeyId to encrypt the copy with a new Amazon Web ServicesS KMS encryption key. If you don't specify a value for KmsKeyId, then the copy of the elastic cluster snapshot is encrypted with the same AWS KMS key as the source elastic cluster snapshot. To copy an encrypted elastic cluster snapshot to another Amazon Web Services region, set KmsKeyId to the Amazon Web Services KMS key ID that you want to use to encrypt the copy of the elastic cluster snapshot in the destination region. Amazon Web Services KMS encryption keys are specific to the Amazon Web Services region that they are created in, and you can't use encryption keys from one Amazon Web Services region in another Amazon Web Services region. If you copy an unencrypted elastic cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned.
     */
    kmsKeyId?: String;
    /**
     * The Amazon Resource Name (ARN) identifier of the elastic cluster snapshot.
     */
    snapshotArn: String;
    /**
     * The tags to be assigned to the elastic cluster snapshot.
     */
    tags?: TagMap;
    /**
     * The identifier of the new elastic cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: elastic-cluster-snapshot-5 
     */
    targetSnapshotName: CopyClusterSnapshotInputTargetSnapshotNameString;
  }
  export type CopyClusterSnapshotInputTargetSnapshotNameString = string;
  export interface CopyClusterSnapshotOutput {
    snapshot: ClusterSnapshot;
  }
  export interface CreateClusterInput {
    /**
     * The name of the Amazon DocumentDB elastic clusters administrator.  Constraints:   Must be from 1 to 63 letters or numbers.   The first character must be a letter.   Cannot be a reserved word.  
     */
    adminUserName: String;
    /**
     * The password for the Amazon DocumentDB elastic clusters administrator. The password can contain any printable ASCII characters.  Constraints:   Must contain from 8 to 100 characters.   Cannot contain a forward slash (/), double quote ("), or the "at" symbol (@).  
     */
    adminUserPassword: Password;
    /**
     * The authentication type used to determine where to fetch the password used for accessing the elastic cluster. Valid types are PLAIN_TEXT or SECRET_ARN.
     */
    authType: Auth;
    /**
     * The number of days for which automatic snapshots are retained.
     */
    backupRetentionPeriod?: Integer;
    /**
     * The client token for the elastic cluster.
     */
    clientToken?: String;
    /**
     * The name of the new elastic cluster. This parameter is stored as a lowercase string.  Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.    Example: my-cluster 
     */
    clusterName: String;
    /**
     * The KMS key identifier to use to encrypt the new elastic cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key. If an encryption key is not specified, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.
     */
    kmsKeyId?: String;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled, as determined by the backupRetentionPeriod.
     */
    preferredBackupWindow?: String;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi   Default: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.  Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun  Constraints: Minimum 30-minute window.
     */
    preferredMaintenanceWindow?: String;
    /**
     * The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.
     */
    shardCapacity: Integer;
    /**
     * The number of shards assigned to the elastic cluster. Maximum is 32.
     */
    shardCount: Integer;
    /**
     * The number of replica instances applying to all shards in the elastic cluster. A shardInstanceCount value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
     */
    shardInstanceCount?: Integer;
    /**
     * The Amazon EC2 subnet IDs for the new elastic cluster.
     */
    subnetIds?: StringList;
    /**
     * The tags to be assigned to the new elastic cluster.
     */
    tags?: TagMap;
    /**
     * A list of EC2 VPC security groups to associate with the new elastic cluster.
     */
    vpcSecurityGroupIds?: StringList;
  }
  export interface CreateClusterOutput {
    /**
     * The new elastic cluster that has been created.
     */
    cluster: Cluster;
  }
  export interface CreateClusterSnapshotInput {
    /**
     * The ARN identifier of the elastic cluster of which you want to create a snapshot.
     */
    clusterArn: String;
    /**
     * The name of the new elastic cluster snapshot.
     */
    snapshotName: CreateClusterSnapshotInputSnapshotNameString;
    /**
     * The tags to be assigned to the new elastic cluster snapshot.
     */
    tags?: TagMap;
  }
  export type CreateClusterSnapshotInputSnapshotNameString = string;
  export interface CreateClusterSnapshotOutput {
    /**
     * Returns information about the new elastic cluster snapshot.
     */
    snapshot: ClusterSnapshot;
  }
  export interface DeleteClusterInput {
    /**
     * The ARN identifier of the elastic cluster that is to be deleted.
     */
    clusterArn: String;
  }
  export interface DeleteClusterOutput {
    /**
     * Returns information about the newly deleted elastic cluster.
     */
    cluster: Cluster;
  }
  export interface DeleteClusterSnapshotInput {
    /**
     * The ARN identifier of the elastic cluster snapshot that is to be deleted.
     */
    snapshotArn: String;
  }
  export interface DeleteClusterSnapshotOutput {
    /**
     * Returns information about the newly deleted elastic cluster snapshot.
     */
    snapshot: ClusterSnapshot;
  }
  export interface GetClusterInput {
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn: String;
  }
  export interface GetClusterOutput {
    /**
     * Returns information about a specific elastic cluster.
     */
    cluster: Cluster;
  }
  export interface GetClusterSnapshotInput {
    /**
     * The ARN identifier of the elastic cluster snapshot.
     */
    snapshotArn: String;
  }
  export interface GetClusterSnapshotOutput {
    /**
     * Returns information about a specific elastic cluster snapshot.
     */
    snapshot: ClusterSnapshot;
  }
  export type Integer = number;
  export interface ListClusterSnapshotsInput {
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn?: String;
    /**
     * The maximum number of elastic cluster snapshot results to receive in the response.
     */
    maxResults?: ListClusterSnapshotsInputMaxResultsInteger;
    /**
     * A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by max-results. If there is no more data in the responce, the nextToken will not be returned.
     */
    nextToken?: PaginationToken;
    /**
     * The type of cluster snapshots to be returned. You can specify one of the following values:    automated - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.    manual - Return all cluster snapshots that you have manually created for your Amazon Web Services account.  
     */
    snapshotType?: String;
  }
  export type ListClusterSnapshotsInputMaxResultsInteger = number;
  export interface ListClusterSnapshotsOutput {
    /**
     * A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by max-results. If there is no more data in the responce, the nextToken will not be returned.
     */
    nextToken?: PaginationToken;
    /**
     * A list of snapshots for a specified elastic cluster.
     */
    snapshots?: ClusterSnapshotList;
  }
  export interface ListClustersInput {
    /**
     * The maximum number of elastic cluster snapshot results to receive in the response.
     */
    maxResults?: ListClustersInputMaxResultsInteger;
    /**
     * A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by max-results. If there is no more data in the responce, the nextToken will not be returned.
     */
    nextToken?: PaginationToken;
  }
  export type ListClustersInputMaxResultsInteger = number;
  export interface ListClustersOutput {
    /**
     * A list of Amazon DocumentDB elastic clusters.
     */
    clusters?: ClusterList;
    /**
     * A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by max-results. If there is no more data in the responce, the nextToken will not be returned.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN identifier of the elastic cluster resource.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of tags for the specified elastic cluster resource.
     */
    tags?: TagMap;
  }
  export type PaginationToken = string;
  export type Password = string;
  export interface RestoreClusterFromSnapshotInput {
    /**
     * The name of the elastic cluster.
     */
    clusterName: String;
    /**
     * The KMS key identifier to use to encrypt the new Amazon DocumentDB elastic clusters cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key. If an encryption key is not specified here, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.
     */
    kmsKeyId?: String;
    /**
     * The capacity of each shard in the new restored elastic cluster.
     */
    shardCapacity?: Integer;
    /**
     * The number of replica instances applying to all shards in the elastic cluster. A shardInstanceCount value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
     */
    shardInstanceCount?: Integer;
    /**
     * The ARN identifier of the elastic cluster snapshot.
     */
    snapshotArn: String;
    /**
     * The Amazon EC2 subnet IDs for the elastic cluster.
     */
    subnetIds?: StringList;
    /**
     * A list of the tag names to be assigned to the restored elastic cluster, in the form of an array of key-value pairs in which the key is the tag name and the value is the key value.
     */
    tags?: TagMap;
    /**
     * A list of EC2 VPC security groups to associate with the elastic cluster.
     */
    vpcSecurityGroupIds?: StringList;
  }
  export interface RestoreClusterFromSnapshotOutput {
    /**
     * Returns information about a the restored elastic cluster.
     */
    cluster: Cluster;
  }
  export interface Shard {
    /**
     * The time when the shard was created in Universal Coordinated Time (UTC).
     */
    createTime: String;
    /**
     * The ID of the shard.
     */
    shardId: String;
    /**
     * The current status of the shard.
     */
    status: Status;
  }
  export type ShardList = Shard[];
  export type SnapshotType = "MANUAL"|"AUTOMATED"|string;
  export interface StartClusterInput {
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn: String;
  }
  export interface StartClusterOutput {
    cluster: Cluster;
  }
  export type Status = "CREATING"|"ACTIVE"|"DELETING"|"UPDATING"|"VPC_ENDPOINT_LIMIT_EXCEEDED"|"IP_ADDRESS_LIMIT_EXCEEDED"|"INVALID_SECURITY_GROUP_ID"|"INVALID_SUBNET_ID"|"INACCESSIBLE_ENCRYPTION_CREDS"|"INACCESSIBLE_SECRET_ARN"|"INACCESSIBLE_VPC_ENDPOINT"|"INCOMPATIBLE_NETWORK"|"MERGING"|"MODIFYING"|"SPLITTING"|"COPYING"|"STARTING"|"STOPPING"|"STOPPED"|string;
  export interface StopClusterInput {
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn: String;
  }
  export interface StopClusterOutput {
    cluster: Cluster;
  }
  export type String = string;
  export type StringList = String[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN identifier of the elastic cluster resource.
     */
    resourceArn: Arn;
    /**
     * The tags that are assigned to the elastic cluster resource.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * The ARN identifier of the elastic cluster resource.
     */
    resourceArn: Arn;
    /**
     * The tag keys to be removed from the elastic cluster resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateClusterInput {
    /**
     * The password associated with the elastic cluster administrator. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).  Constraints: Must contain from 8 to 100 characters.
     */
    adminUserPassword?: Password;
    /**
     * The authentication type used to determine where to fetch the password used for accessing the elastic cluster. Valid types are PLAIN_TEXT or SECRET_ARN.
     */
    authType?: Auth;
    /**
     * The number of days for which automatic snapshots are retained.
     */
    backupRetentionPeriod?: Integer;
    /**
     * The client token for the elastic cluster.
     */
    clientToken?: String;
    /**
     * The ARN identifier of the elastic cluster.
     */
    clusterArn: String;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled, as determined by the backupRetentionPeriod.
     */
    preferredBackupWindow?: String;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi   Default: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.  Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun  Constraints: Minimum 30-minute window.
     */
    preferredMaintenanceWindow?: String;
    /**
     * The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.
     */
    shardCapacity?: Integer;
    /**
     * The number of shards assigned to the elastic cluster. Maximum is 32.
     */
    shardCount?: Integer;
    /**
     * The number of replica instances applying to all shards in the elastic cluster. A shardInstanceCount value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
     */
    shardInstanceCount?: Integer;
    /**
     * The Amazon EC2 subnet IDs for the elastic cluster.
     */
    subnetIds?: StringList;
    /**
     * A list of EC2 VPC security groups to associate with the elastic cluster.
     */
    vpcSecurityGroupIds?: StringList;
  }
  export interface UpdateClusterOutput {
    /**
     * Returns information about the updated elastic cluster.
     */
    cluster: Cluster;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-11-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DocDBElastic client.
   */
  export import Types = DocDBElastic;
}
export = DocDBElastic;
