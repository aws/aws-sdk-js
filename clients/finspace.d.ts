import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Finspace extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Finspace.Types.ClientConfiguration)
  config: Config & Finspace.Types.ClientConfiguration;
  /**
   * Create a new FinSpace environment.
   */
  createEnvironment(params: Finspace.Types.CreateEnvironmentRequest, callback?: (err: AWSError, data: Finspace.Types.CreateEnvironmentResponse) => void): Request<Finspace.Types.CreateEnvironmentResponse, AWSError>;
  /**
   * Create a new FinSpace environment.
   */
  createEnvironment(callback?: (err: AWSError, data: Finspace.Types.CreateEnvironmentResponse) => void): Request<Finspace.Types.CreateEnvironmentResponse, AWSError>;
  /**
   *  Creates a changeset for a kdb database. A changeset allows you to add and delete existing files by using an ordered list of change requests. 
   */
  createKxChangeset(params: Finspace.Types.CreateKxChangesetRequest, callback?: (err: AWSError, data: Finspace.Types.CreateKxChangesetResponse) => void): Request<Finspace.Types.CreateKxChangesetResponse, AWSError>;
  /**
   *  Creates a changeset for a kdb database. A changeset allows you to add and delete existing files by using an ordered list of change requests. 
   */
  createKxChangeset(callback?: (err: AWSError, data: Finspace.Types.CreateKxChangesetResponse) => void): Request<Finspace.Types.CreateKxChangesetResponse, AWSError>;
  /**
   * Creates a new kdb cluster.
   */
  createKxCluster(params: Finspace.Types.CreateKxClusterRequest, callback?: (err: AWSError, data: Finspace.Types.CreateKxClusterResponse) => void): Request<Finspace.Types.CreateKxClusterResponse, AWSError>;
  /**
   * Creates a new kdb cluster.
   */
  createKxCluster(callback?: (err: AWSError, data: Finspace.Types.CreateKxClusterResponse) => void): Request<Finspace.Types.CreateKxClusterResponse, AWSError>;
  /**
   * Creates a new kdb database in the environment.
   */
  createKxDatabase(params: Finspace.Types.CreateKxDatabaseRequest, callback?: (err: AWSError, data: Finspace.Types.CreateKxDatabaseResponse) => void): Request<Finspace.Types.CreateKxDatabaseResponse, AWSError>;
  /**
   * Creates a new kdb database in the environment.
   */
  createKxDatabase(callback?: (err: AWSError, data: Finspace.Types.CreateKxDatabaseResponse) => void): Request<Finspace.Types.CreateKxDatabaseResponse, AWSError>;
  /**
   *  Creates a snapshot of kdb database with tiered storage capabilities and a pre-warmed cache, ready for mounting on kdb clusters. Dataviews are only available for clusters running on a scaling group. They are not supported on dedicated clusters. 
   */
  createKxDataview(params: Finspace.Types.CreateKxDataviewRequest, callback?: (err: AWSError, data: Finspace.Types.CreateKxDataviewResponse) => void): Request<Finspace.Types.CreateKxDataviewResponse, AWSError>;
  /**
   *  Creates a snapshot of kdb database with tiered storage capabilities and a pre-warmed cache, ready for mounting on kdb clusters. Dataviews are only available for clusters running on a scaling group. They are not supported on dedicated clusters. 
   */
  createKxDataview(callback?: (err: AWSError, data: Finspace.Types.CreateKxDataviewResponse) => void): Request<Finspace.Types.CreateKxDataviewResponse, AWSError>;
  /**
   * Creates a managed kdb environment for the account.
   */
  createKxEnvironment(params: Finspace.Types.CreateKxEnvironmentRequest, callback?: (err: AWSError, data: Finspace.Types.CreateKxEnvironmentResponse) => void): Request<Finspace.Types.CreateKxEnvironmentResponse, AWSError>;
  /**
   * Creates a managed kdb environment for the account.
   */
  createKxEnvironment(callback?: (err: AWSError, data: Finspace.Types.CreateKxEnvironmentResponse) => void): Request<Finspace.Types.CreateKxEnvironmentResponse, AWSError>;
  /**
   * Creates a new scaling group. 
   */
  createKxScalingGroup(params: Finspace.Types.CreateKxScalingGroupRequest, callback?: (err: AWSError, data: Finspace.Types.CreateKxScalingGroupResponse) => void): Request<Finspace.Types.CreateKxScalingGroupResponse, AWSError>;
  /**
   * Creates a new scaling group. 
   */
  createKxScalingGroup(callback?: (err: AWSError, data: Finspace.Types.CreateKxScalingGroupResponse) => void): Request<Finspace.Types.CreateKxScalingGroupResponse, AWSError>;
  /**
   * Creates a user in FinSpace kdb environment with an associated IAM role.
   */
  createKxUser(params: Finspace.Types.CreateKxUserRequest, callback?: (err: AWSError, data: Finspace.Types.CreateKxUserResponse) => void): Request<Finspace.Types.CreateKxUserResponse, AWSError>;
  /**
   * Creates a user in FinSpace kdb environment with an associated IAM role.
   */
  createKxUser(callback?: (err: AWSError, data: Finspace.Types.CreateKxUserResponse) => void): Request<Finspace.Types.CreateKxUserResponse, AWSError>;
  /**
   *  Creates a new volume with a specific amount of throughput and storage capacity. 
   */
  createKxVolume(params: Finspace.Types.CreateKxVolumeRequest, callback?: (err: AWSError, data: Finspace.Types.CreateKxVolumeResponse) => void): Request<Finspace.Types.CreateKxVolumeResponse, AWSError>;
  /**
   *  Creates a new volume with a specific amount of throughput and storage capacity. 
   */
  createKxVolume(callback?: (err: AWSError, data: Finspace.Types.CreateKxVolumeResponse) => void): Request<Finspace.Types.CreateKxVolumeResponse, AWSError>;
  /**
   * Delete an FinSpace environment.
   */
  deleteEnvironment(params: Finspace.Types.DeleteEnvironmentRequest, callback?: (err: AWSError, data: Finspace.Types.DeleteEnvironmentResponse) => void): Request<Finspace.Types.DeleteEnvironmentResponse, AWSError>;
  /**
   * Delete an FinSpace environment.
   */
  deleteEnvironment(callback?: (err: AWSError, data: Finspace.Types.DeleteEnvironmentResponse) => void): Request<Finspace.Types.DeleteEnvironmentResponse, AWSError>;
  /**
   * Deletes a kdb cluster.
   */
  deleteKxCluster(params: Finspace.Types.DeleteKxClusterRequest, callback?: (err: AWSError, data: Finspace.Types.DeleteKxClusterResponse) => void): Request<Finspace.Types.DeleteKxClusterResponse, AWSError>;
  /**
   * Deletes a kdb cluster.
   */
  deleteKxCluster(callback?: (err: AWSError, data: Finspace.Types.DeleteKxClusterResponse) => void): Request<Finspace.Types.DeleteKxClusterResponse, AWSError>;
  /**
   * Deletes the specified database and all of its associated data. This action is irreversible. You must copy any data out of the database before deleting it if the data is to be retained.
   */
  deleteKxDatabase(params: Finspace.Types.DeleteKxDatabaseRequest, callback?: (err: AWSError, data: Finspace.Types.DeleteKxDatabaseResponse) => void): Request<Finspace.Types.DeleteKxDatabaseResponse, AWSError>;
  /**
   * Deletes the specified database and all of its associated data. This action is irreversible. You must copy any data out of the database before deleting it if the data is to be retained.
   */
  deleteKxDatabase(callback?: (err: AWSError, data: Finspace.Types.DeleteKxDatabaseResponse) => void): Request<Finspace.Types.DeleteKxDatabaseResponse, AWSError>;
  /**
   *  Deletes the specified dataview. Before deleting a dataview, make sure that it is not in use by any cluster. 
   */
  deleteKxDataview(params: Finspace.Types.DeleteKxDataviewRequest, callback?: (err: AWSError, data: Finspace.Types.DeleteKxDataviewResponse) => void): Request<Finspace.Types.DeleteKxDataviewResponse, AWSError>;
  /**
   *  Deletes the specified dataview. Before deleting a dataview, make sure that it is not in use by any cluster. 
   */
  deleteKxDataview(callback?: (err: AWSError, data: Finspace.Types.DeleteKxDataviewResponse) => void): Request<Finspace.Types.DeleteKxDataviewResponse, AWSError>;
  /**
   * Deletes the kdb environment. This action is irreversible. Deleting a kdb environment will remove all the associated data and any services running in it. 
   */
  deleteKxEnvironment(params: Finspace.Types.DeleteKxEnvironmentRequest, callback?: (err: AWSError, data: Finspace.Types.DeleteKxEnvironmentResponse) => void): Request<Finspace.Types.DeleteKxEnvironmentResponse, AWSError>;
  /**
   * Deletes the kdb environment. This action is irreversible. Deleting a kdb environment will remove all the associated data and any services running in it. 
   */
  deleteKxEnvironment(callback?: (err: AWSError, data: Finspace.Types.DeleteKxEnvironmentResponse) => void): Request<Finspace.Types.DeleteKxEnvironmentResponse, AWSError>;
  /**
   *  Deletes the specified scaling group. This action is irreversible. You cannot delete a scaling group until all the clusters running on it have been deleted.
   */
  deleteKxScalingGroup(params: Finspace.Types.DeleteKxScalingGroupRequest, callback?: (err: AWSError, data: Finspace.Types.DeleteKxScalingGroupResponse) => void): Request<Finspace.Types.DeleteKxScalingGroupResponse, AWSError>;
  /**
   *  Deletes the specified scaling group. This action is irreversible. You cannot delete a scaling group until all the clusters running on it have been deleted.
   */
  deleteKxScalingGroup(callback?: (err: AWSError, data: Finspace.Types.DeleteKxScalingGroupResponse) => void): Request<Finspace.Types.DeleteKxScalingGroupResponse, AWSError>;
  /**
   * Deletes a user in the specified kdb environment.
   */
  deleteKxUser(params: Finspace.Types.DeleteKxUserRequest, callback?: (err: AWSError, data: Finspace.Types.DeleteKxUserResponse) => void): Request<Finspace.Types.DeleteKxUserResponse, AWSError>;
  /**
   * Deletes a user in the specified kdb environment.
   */
  deleteKxUser(callback?: (err: AWSError, data: Finspace.Types.DeleteKxUserResponse) => void): Request<Finspace.Types.DeleteKxUserResponse, AWSError>;
  /**
   *  Deletes a volume. You can only delete a volume if it's not attached to a cluster or a dataview. When a volume is deleted, any data on the volume is lost. This action is irreversible. 
   */
  deleteKxVolume(params: Finspace.Types.DeleteKxVolumeRequest, callback?: (err: AWSError, data: Finspace.Types.DeleteKxVolumeResponse) => void): Request<Finspace.Types.DeleteKxVolumeResponse, AWSError>;
  /**
   *  Deletes a volume. You can only delete a volume if it's not attached to a cluster or a dataview. When a volume is deleted, any data on the volume is lost. This action is irreversible. 
   */
  deleteKxVolume(callback?: (err: AWSError, data: Finspace.Types.DeleteKxVolumeResponse) => void): Request<Finspace.Types.DeleteKxVolumeResponse, AWSError>;
  /**
   * Returns the FinSpace environment object.
   */
  getEnvironment(params: Finspace.Types.GetEnvironmentRequest, callback?: (err: AWSError, data: Finspace.Types.GetEnvironmentResponse) => void): Request<Finspace.Types.GetEnvironmentResponse, AWSError>;
  /**
   * Returns the FinSpace environment object.
   */
  getEnvironment(callback?: (err: AWSError, data: Finspace.Types.GetEnvironmentResponse) => void): Request<Finspace.Types.GetEnvironmentResponse, AWSError>;
  /**
   * Returns information about a kdb changeset.
   */
  getKxChangeset(params: Finspace.Types.GetKxChangesetRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxChangesetResponse) => void): Request<Finspace.Types.GetKxChangesetResponse, AWSError>;
  /**
   * Returns information about a kdb changeset.
   */
  getKxChangeset(callback?: (err: AWSError, data: Finspace.Types.GetKxChangesetResponse) => void): Request<Finspace.Types.GetKxChangesetResponse, AWSError>;
  /**
   * Retrieves information about a kdb cluster.
   */
  getKxCluster(params: Finspace.Types.GetKxClusterRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxClusterResponse) => void): Request<Finspace.Types.GetKxClusterResponse, AWSError>;
  /**
   * Retrieves information about a kdb cluster.
   */
  getKxCluster(callback?: (err: AWSError, data: Finspace.Types.GetKxClusterResponse) => void): Request<Finspace.Types.GetKxClusterResponse, AWSError>;
  /**
   * Retrieves a connection string for a user to connect to a kdb cluster. You must call this API using the same role that you have defined while creating a user. 
   */
  getKxConnectionString(params: Finspace.Types.GetKxConnectionStringRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxConnectionStringResponse) => void): Request<Finspace.Types.GetKxConnectionStringResponse, AWSError>;
  /**
   * Retrieves a connection string for a user to connect to a kdb cluster. You must call this API using the same role that you have defined while creating a user. 
   */
  getKxConnectionString(callback?: (err: AWSError, data: Finspace.Types.GetKxConnectionStringResponse) => void): Request<Finspace.Types.GetKxConnectionStringResponse, AWSError>;
  /**
   * Returns database information for the specified environment ID.
   */
  getKxDatabase(params: Finspace.Types.GetKxDatabaseRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxDatabaseResponse) => void): Request<Finspace.Types.GetKxDatabaseResponse, AWSError>;
  /**
   * Returns database information for the specified environment ID.
   */
  getKxDatabase(callback?: (err: AWSError, data: Finspace.Types.GetKxDatabaseResponse) => void): Request<Finspace.Types.GetKxDatabaseResponse, AWSError>;
  /**
   *  Retrieves details of the dataview. 
   */
  getKxDataview(params: Finspace.Types.GetKxDataviewRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxDataviewResponse) => void): Request<Finspace.Types.GetKxDataviewResponse, AWSError>;
  /**
   *  Retrieves details of the dataview. 
   */
  getKxDataview(callback?: (err: AWSError, data: Finspace.Types.GetKxDataviewResponse) => void): Request<Finspace.Types.GetKxDataviewResponse, AWSError>;
  /**
   * Retrieves all the information for the specified kdb environment.
   */
  getKxEnvironment(params: Finspace.Types.GetKxEnvironmentRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxEnvironmentResponse) => void): Request<Finspace.Types.GetKxEnvironmentResponse, AWSError>;
  /**
   * Retrieves all the information for the specified kdb environment.
   */
  getKxEnvironment(callback?: (err: AWSError, data: Finspace.Types.GetKxEnvironmentResponse) => void): Request<Finspace.Types.GetKxEnvironmentResponse, AWSError>;
  /**
   *  Retrieves details of a scaling group.
   */
  getKxScalingGroup(params: Finspace.Types.GetKxScalingGroupRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxScalingGroupResponse) => void): Request<Finspace.Types.GetKxScalingGroupResponse, AWSError>;
  /**
   *  Retrieves details of a scaling group.
   */
  getKxScalingGroup(callback?: (err: AWSError, data: Finspace.Types.GetKxScalingGroupResponse) => void): Request<Finspace.Types.GetKxScalingGroupResponse, AWSError>;
  /**
   * Retrieves information about the specified kdb user.
   */
  getKxUser(params: Finspace.Types.GetKxUserRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxUserResponse) => void): Request<Finspace.Types.GetKxUserResponse, AWSError>;
  /**
   * Retrieves information about the specified kdb user.
   */
  getKxUser(callback?: (err: AWSError, data: Finspace.Types.GetKxUserResponse) => void): Request<Finspace.Types.GetKxUserResponse, AWSError>;
  /**
   *  Retrieves the information about the volume. 
   */
  getKxVolume(params: Finspace.Types.GetKxVolumeRequest, callback?: (err: AWSError, data: Finspace.Types.GetKxVolumeResponse) => void): Request<Finspace.Types.GetKxVolumeResponse, AWSError>;
  /**
   *  Retrieves the information about the volume. 
   */
  getKxVolume(callback?: (err: AWSError, data: Finspace.Types.GetKxVolumeResponse) => void): Request<Finspace.Types.GetKxVolumeResponse, AWSError>;
  /**
   * A list of all of your FinSpace environments.
   */
  listEnvironments(params: Finspace.Types.ListEnvironmentsRequest, callback?: (err: AWSError, data: Finspace.Types.ListEnvironmentsResponse) => void): Request<Finspace.Types.ListEnvironmentsResponse, AWSError>;
  /**
   * A list of all of your FinSpace environments.
   */
  listEnvironments(callback?: (err: AWSError, data: Finspace.Types.ListEnvironmentsResponse) => void): Request<Finspace.Types.ListEnvironmentsResponse, AWSError>;
  /**
   * Returns a list of all the changesets for a database.
   */
  listKxChangesets(params: Finspace.Types.ListKxChangesetsRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxChangesetsResponse) => void): Request<Finspace.Types.ListKxChangesetsResponse, AWSError>;
  /**
   * Returns a list of all the changesets for a database.
   */
  listKxChangesets(callback?: (err: AWSError, data: Finspace.Types.ListKxChangesetsResponse) => void): Request<Finspace.Types.ListKxChangesetsResponse, AWSError>;
  /**
   * Lists all the nodes in a kdb cluster.
   */
  listKxClusterNodes(params: Finspace.Types.ListKxClusterNodesRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxClusterNodesResponse) => void): Request<Finspace.Types.ListKxClusterNodesResponse, AWSError>;
  /**
   * Lists all the nodes in a kdb cluster.
   */
  listKxClusterNodes(callback?: (err: AWSError, data: Finspace.Types.ListKxClusterNodesResponse) => void): Request<Finspace.Types.ListKxClusterNodesResponse, AWSError>;
  /**
   * Returns a list of clusters.
   */
  listKxClusters(params: Finspace.Types.ListKxClustersRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxClustersResponse) => void): Request<Finspace.Types.ListKxClustersResponse, AWSError>;
  /**
   * Returns a list of clusters.
   */
  listKxClusters(callback?: (err: AWSError, data: Finspace.Types.ListKxClustersResponse) => void): Request<Finspace.Types.ListKxClustersResponse, AWSError>;
  /**
   * Returns a list of all the databases in the kdb environment.
   */
  listKxDatabases(params: Finspace.Types.ListKxDatabasesRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxDatabasesResponse) => void): Request<Finspace.Types.ListKxDatabasesResponse, AWSError>;
  /**
   * Returns a list of all the databases in the kdb environment.
   */
  listKxDatabases(callback?: (err: AWSError, data: Finspace.Types.ListKxDatabasesResponse) => void): Request<Finspace.Types.ListKxDatabasesResponse, AWSError>;
  /**
   *  Returns a list of all the dataviews in the database.
   */
  listKxDataviews(params: Finspace.Types.ListKxDataviewsRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxDataviewsResponse) => void): Request<Finspace.Types.ListKxDataviewsResponse, AWSError>;
  /**
   *  Returns a list of all the dataviews in the database.
   */
  listKxDataviews(callback?: (err: AWSError, data: Finspace.Types.ListKxDataviewsResponse) => void): Request<Finspace.Types.ListKxDataviewsResponse, AWSError>;
  /**
   * Returns a list of kdb environments created in an account.
   */
  listKxEnvironments(params: Finspace.Types.ListKxEnvironmentsRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxEnvironmentsResponse) => void): Request<Finspace.Types.ListKxEnvironmentsResponse, AWSError>;
  /**
   * Returns a list of kdb environments created in an account.
   */
  listKxEnvironments(callback?: (err: AWSError, data: Finspace.Types.ListKxEnvironmentsResponse) => void): Request<Finspace.Types.ListKxEnvironmentsResponse, AWSError>;
  /**
   *  Returns a list of scaling groups in a kdb environment.
   */
  listKxScalingGroups(params: Finspace.Types.ListKxScalingGroupsRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxScalingGroupsResponse) => void): Request<Finspace.Types.ListKxScalingGroupsResponse, AWSError>;
  /**
   *  Returns a list of scaling groups in a kdb environment.
   */
  listKxScalingGroups(callback?: (err: AWSError, data: Finspace.Types.ListKxScalingGroupsResponse) => void): Request<Finspace.Types.ListKxScalingGroupsResponse, AWSError>;
  /**
   * Lists all the users in a kdb environment.
   */
  listKxUsers(params: Finspace.Types.ListKxUsersRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxUsersResponse) => void): Request<Finspace.Types.ListKxUsersResponse, AWSError>;
  /**
   * Lists all the users in a kdb environment.
   */
  listKxUsers(callback?: (err: AWSError, data: Finspace.Types.ListKxUsersResponse) => void): Request<Finspace.Types.ListKxUsersResponse, AWSError>;
  /**
   *  Lists all the volumes in a kdb environment. 
   */
  listKxVolumes(params: Finspace.Types.ListKxVolumesRequest, callback?: (err: AWSError, data: Finspace.Types.ListKxVolumesResponse) => void): Request<Finspace.Types.ListKxVolumesResponse, AWSError>;
  /**
   *  Lists all the volumes in a kdb environment. 
   */
  listKxVolumes(callback?: (err: AWSError, data: Finspace.Types.ListKxVolumesResponse) => void): Request<Finspace.Types.ListKxVolumesResponse, AWSError>;
  /**
   * A list of all tags for a resource.
   */
  listTagsForResource(params: Finspace.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Finspace.Types.ListTagsForResourceResponse) => void): Request<Finspace.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * A list of all tags for a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Finspace.Types.ListTagsForResourceResponse) => void): Request<Finspace.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds metadata tags to a FinSpace resource.
   */
  tagResource(params: Finspace.Types.TagResourceRequest, callback?: (err: AWSError, data: Finspace.Types.TagResourceResponse) => void): Request<Finspace.Types.TagResourceResponse, AWSError>;
  /**
   * Adds metadata tags to a FinSpace resource.
   */
  tagResource(callback?: (err: AWSError, data: Finspace.Types.TagResourceResponse) => void): Request<Finspace.Types.TagResourceResponse, AWSError>;
  /**
   * Removes metadata tags from a FinSpace resource.
   */
  untagResource(params: Finspace.Types.UntagResourceRequest, callback?: (err: AWSError, data: Finspace.Types.UntagResourceResponse) => void): Request<Finspace.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes metadata tags from a FinSpace resource.
   */
  untagResource(callback?: (err: AWSError, data: Finspace.Types.UntagResourceResponse) => void): Request<Finspace.Types.UntagResourceResponse, AWSError>;
  /**
   * Update your FinSpace environment.
   */
  updateEnvironment(params: Finspace.Types.UpdateEnvironmentRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateEnvironmentResponse) => void): Request<Finspace.Types.UpdateEnvironmentResponse, AWSError>;
  /**
   * Update your FinSpace environment.
   */
  updateEnvironment(callback?: (err: AWSError, data: Finspace.Types.UpdateEnvironmentResponse) => void): Request<Finspace.Types.UpdateEnvironmentResponse, AWSError>;
  /**
   *  Allows you to update code configuration on a running cluster. By using this API you can update the code, the initialization script path, and the command line arguments for a specific cluster. The configuration that you want to update will override any existing configurations on the cluster. 
   */
  updateKxClusterCodeConfiguration(params: Finspace.Types.UpdateKxClusterCodeConfigurationRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateKxClusterCodeConfigurationResponse) => void): Request<Finspace.Types.UpdateKxClusterCodeConfigurationResponse, AWSError>;
  /**
   *  Allows you to update code configuration on a running cluster. By using this API you can update the code, the initialization script path, and the command line arguments for a specific cluster. The configuration that you want to update will override any existing configurations on the cluster. 
   */
  updateKxClusterCodeConfiguration(callback?: (err: AWSError, data: Finspace.Types.UpdateKxClusterCodeConfigurationResponse) => void): Request<Finspace.Types.UpdateKxClusterCodeConfigurationResponse, AWSError>;
  /**
   * Updates the databases mounted on a kdb cluster, which includes the changesetId and all the dbPaths to be cached. This API does not allow you to change a database name or add a database if you created a cluster without one.  Using this API you can point a cluster to a different changeset and modify a list of partitions being cached.
   */
  updateKxClusterDatabases(params: Finspace.Types.UpdateKxClusterDatabasesRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateKxClusterDatabasesResponse) => void): Request<Finspace.Types.UpdateKxClusterDatabasesResponse, AWSError>;
  /**
   * Updates the databases mounted on a kdb cluster, which includes the changesetId and all the dbPaths to be cached. This API does not allow you to change a database name or add a database if you created a cluster without one.  Using this API you can point a cluster to a different changeset and modify a list of partitions being cached.
   */
  updateKxClusterDatabases(callback?: (err: AWSError, data: Finspace.Types.UpdateKxClusterDatabasesResponse) => void): Request<Finspace.Types.UpdateKxClusterDatabasesResponse, AWSError>;
  /**
   * Updates information for the given kdb database.
   */
  updateKxDatabase(params: Finspace.Types.UpdateKxDatabaseRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateKxDatabaseResponse) => void): Request<Finspace.Types.UpdateKxDatabaseResponse, AWSError>;
  /**
   * Updates information for the given kdb database.
   */
  updateKxDatabase(callback?: (err: AWSError, data: Finspace.Types.UpdateKxDatabaseResponse) => void): Request<Finspace.Types.UpdateKxDatabaseResponse, AWSError>;
  /**
   *  Updates the specified dataview. The dataviews get automatically updated when any new changesets are ingested. Each update of the dataview creates a new version, including changeset details and cache configurations
   */
  updateKxDataview(params: Finspace.Types.UpdateKxDataviewRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateKxDataviewResponse) => void): Request<Finspace.Types.UpdateKxDataviewResponse, AWSError>;
  /**
   *  Updates the specified dataview. The dataviews get automatically updated when any new changesets are ingested. Each update of the dataview creates a new version, including changeset details and cache configurations
   */
  updateKxDataview(callback?: (err: AWSError, data: Finspace.Types.UpdateKxDataviewResponse) => void): Request<Finspace.Types.UpdateKxDataviewResponse, AWSError>;
  /**
   * Updates information for the given kdb environment.
   */
  updateKxEnvironment(params: Finspace.Types.UpdateKxEnvironmentRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateKxEnvironmentResponse) => void): Request<Finspace.Types.UpdateKxEnvironmentResponse, AWSError>;
  /**
   * Updates information for the given kdb environment.
   */
  updateKxEnvironment(callback?: (err: AWSError, data: Finspace.Types.UpdateKxEnvironmentResponse) => void): Request<Finspace.Types.UpdateKxEnvironmentResponse, AWSError>;
  /**
   * Updates environment network to connect to your internal network by using a transit gateway. This API supports request to create a transit gateway attachment from FinSpace VPC to your transit gateway ID and create a custom Route-53 outbound resolvers. Once you send a request to update a network, you cannot change it again. Network update might require termination of any clusters that are running in the existing network.
   */
  updateKxEnvironmentNetwork(params: Finspace.Types.UpdateKxEnvironmentNetworkRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateKxEnvironmentNetworkResponse) => void): Request<Finspace.Types.UpdateKxEnvironmentNetworkResponse, AWSError>;
  /**
   * Updates environment network to connect to your internal network by using a transit gateway. This API supports request to create a transit gateway attachment from FinSpace VPC to your transit gateway ID and create a custom Route-53 outbound resolvers. Once you send a request to update a network, you cannot change it again. Network update might require termination of any clusters that are running in the existing network.
   */
  updateKxEnvironmentNetwork(callback?: (err: AWSError, data: Finspace.Types.UpdateKxEnvironmentNetworkResponse) => void): Request<Finspace.Types.UpdateKxEnvironmentNetworkResponse, AWSError>;
  /**
   * Updates the user details. You can only update the IAM role associated with a user.
   */
  updateKxUser(params: Finspace.Types.UpdateKxUserRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateKxUserResponse) => void): Request<Finspace.Types.UpdateKxUserResponse, AWSError>;
  /**
   * Updates the user details. You can only update the IAM role associated with a user.
   */
  updateKxUser(callback?: (err: AWSError, data: Finspace.Types.UpdateKxUserResponse) => void): Request<Finspace.Types.UpdateKxUserResponse, AWSError>;
  /**
   *  Updates the throughput or capacity of a volume. During the update process, the filesystem might be unavailable for a few minutes. You can retry any operations after the update is complete. 
   */
  updateKxVolume(params: Finspace.Types.UpdateKxVolumeRequest, callback?: (err: AWSError, data: Finspace.Types.UpdateKxVolumeResponse) => void): Request<Finspace.Types.UpdateKxVolumeResponse, AWSError>;
  /**
   *  Updates the throughput or capacity of a volume. During the update process, the filesystem might be unavailable for a few minutes. You can retry any operations after the update is complete. 
   */
  updateKxVolume(callback?: (err: AWSError, data: Finspace.Types.UpdateKxVolumeResponse) => void): Request<Finspace.Types.UpdateKxVolumeResponse, AWSError>;
}
declare namespace Finspace {
  export type AttachedClusterList = KxClusterName[];
  export type AttributeMap = {[key: string]: FederationAttributeValue};
  export interface AutoScalingConfiguration {
    /**
     * The lowest number of nodes to scale. This value must be at least 1 and less than the maxNodeCount. If the nodes in a cluster belong to multiple availability zones, then minNodeCount must be at least 3.
     */
    minNodeCount?: NodeCount;
    /**
     * The highest number of nodes to scale. This value cannot be greater than 5.
     */
    maxNodeCount?: NodeCount;
    /**
     *  The metric your cluster will track in order to scale in and out. For example, CPU_UTILIZATION_PERCENTAGE is the average CPU usage across all the nodes in a cluster.
     */
    autoScalingMetric?: AutoScalingMetric;
    /**
     * The desired value of the chosen autoScalingMetric. When the metric drops below this value, the cluster will scale in. When the metric goes above this value, the cluster will scale out. You can set the target value between 1 and 100 percent.
     */
    metricTarget?: AutoScalingMetricTarget;
    /**
     * The duration in seconds that FinSpace will wait after a scale in event before initiating another scaling event.
     */
    scaleInCooldownSeconds?: CooldownTime;
    /**
     * The duration in seconds that FinSpace will wait after a scale out event before initiating another scaling event.
     */
    scaleOutCooldownSeconds?: CooldownTime;
  }
  export type AutoScalingMetric = "CPU_UTILIZATION_PERCENTAGE"|string;
  export type AutoScalingMetricTarget = number;
  export type AvailabilityZoneId = string;
  export type AvailabilityZoneIds = AvailabilityZoneId[];
  export type BoxedInteger = number;
  export interface CapacityConfiguration {
    /**
     * The type that determines the hardware of the host computer used for your cluster instance. Each node type offers different memory and storage capabilities. Choose a node type based on the requirements of the application or software that you plan to run on your instance. You can only specify one of the following values:    kx.s.large – The node type with a configuration of 12 GiB memory and 2 vCPUs.    kx.s.xlarge – The node type with a configuration of 27 GiB memory and 4 vCPUs.    kx.s.2xlarge – The node type with a configuration of 54 GiB memory and 8 vCPUs.    kx.s.4xlarge – The node type with a configuration of 108 GiB memory and 16 vCPUs.    kx.s.8xlarge – The node type with a configuration of 216 GiB memory and 32 vCPUs.    kx.s.16xlarge – The node type with a configuration of 432 GiB memory and 64 vCPUs.    kx.s.32xlarge – The node type with a configuration of 864 GiB memory and 128 vCPUs.  
     */
    nodeType?: NodeType;
    /**
     * The number of instances running in a cluster.
     */
    nodeCount?: NodeCount;
  }
  export interface ChangeRequest {
    /**
     * Defines the type of change request. A changeType can have the following values:   PUT – Adds or updates files in a database.   DELETE – Deletes files in a database.  
     */
    changeType: ChangeType;
    /**
     * Defines the S3 path of the source file that is required to add or update files in a database.
     */
    s3Path?: S3Path;
    /**
     * Defines the path within the database directory. 
     */
    dbPath: DbPath;
  }
  export type ChangeRequests = ChangeRequest[];
  export type ChangeType = "PUT"|"DELETE"|string;
  export type ChangesetId = string;
  export type ChangesetStatus = "PENDING"|"PROCESSING"|"FAILED"|"COMPLETED"|string;
  export type ClientToken = string;
  export type ClientTokenString = string;
  export type ClusterNodeCount = number;
  export interface CodeConfiguration {
    /**
     * A unique name for the S3 bucket.
     */
    s3Bucket?: S3Bucket;
    /**
     * The full S3 path (excluding bucket) to the .zip file. This file contains the code that is loaded onto the cluster when it's started.
     */
    s3Key?: S3Key;
    /**
     * The version of an S3 object.
     */
    s3ObjectVersion?: S3ObjectVersion;
  }
  export type CooldownTime = number;
  export type CpuCount = number;
  export interface CreateEnvironmentRequest {
    /**
     * The name of the FinSpace environment to be created.
     */
    name: EnvironmentName;
    /**
     * The description of the FinSpace environment to be created.
     */
    description?: Description;
    /**
     * The KMS key id to encrypt your data in the FinSpace environment.
     */
    kmsKeyId?: KmsKeyId;
    /**
     * Add tags to your FinSpace environment.
     */
    tags?: TagMap;
    /**
     * Authentication mode for the environment.    FEDERATED - Users access FinSpace through Single Sign On (SSO) via your Identity provider.    LOCAL - Users access FinSpace via email and password managed within the FinSpace environment.  
     */
    federationMode?: FederationMode;
    /**
     * Configuration information when authentication mode is FEDERATED.
     */
    federationParameters?: FederationParameters;
    /**
     * Configuration information for the superuser.
     */
    superuserParameters?: SuperuserParameters;
    /**
     * The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:    arn:aws:finspace:${Region}::data-bundle/capital-markets-sample - Contains sample Capital Markets datasets, categories and controlled vocabularies.    arn:aws:finspace:${Region}::data-bundle/taq (default) - Contains trades and quotes data in addition to sample Capital Markets data.  
     */
    dataBundles?: DataBundleArns;
  }
  export interface CreateEnvironmentResponse {
    /**
     * The unique identifier for FinSpace environment that you created.
     */
    environmentId?: IdType;
    /**
     * The Amazon Resource Name (ARN) of the FinSpace environment that you created.
     */
    environmentArn?: EnvironmentArn;
    /**
     * The sign-in URL for the web application of the FinSpace environment you created.
     */
    environmentUrl?: url;
  }
  export interface CreateKxChangesetRequest {
    /**
     * A unique identifier of the kdb environment.
     */
    environmentId: EnvironmentId;
    /**
     * The name of the kdb database.
     */
    databaseName: DatabaseName;
    /**
     * A list of change request objects that are run in order. A change request object consists of changeType , s3Path, and dbPath. A changeType can has the following values:    PUT – Adds or updates files in a database.   DELETE – Deletes files in a database.   All the change requests require a mandatory dbPath attribute that defines the path within the database directory. All database paths must start with a leading / and end with a trailing /. The s3Path attribute defines the s3 source file path and is required for a PUT change type. The s3path must end with a trailing / if it is a directory and must end without a trailing / if it is a file.  Here are few examples of how you can use the change request object:   This request adds a single sym file at database root location.   { "changeType": "PUT", "s3Path":"s3://bucket/db/sym", "dbPath":"/"}    This request adds files in the given s3Path under the 2020.01.02 partition of the database.  { "changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/", "dbPath":"/2020.01.02/"}    This request adds files in the given s3Path under the taq table partition of the database.  [ { "changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/taq/", "dbPath":"/2020.01.02/taq/"}]    This request deletes the 2020.01.02 partition of the database.  [{ "changeType": "DELETE", "dbPath": "/2020.01.02/"} ]    The DELETE request allows you to delete the existing files under the 2020.01.02 partition of the database, and the PUT request adds a new taq table under it.  [ {"changeType": "DELETE", "dbPath":"/2020.01.02/"}, {"changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/taq/", "dbPath":"/2020.01.02/taq/"}]   
     */
    changeRequests: ChangeRequests;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken: ClientTokenString;
  }
  export interface CreateKxChangesetResponse {
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     * The name of the kdb database.
     */
    databaseName?: DatabaseName;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: EnvironmentId;
    /**
     * A list of change requests.
     */
    changeRequests?: ChangeRequests;
    /**
     * The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * The timestamp at which the changeset was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     * Status of the changeset creation process.   Pending – Changeset creation is pending.   Processing – Changeset creation is running.   Failed – Changeset creation has failed.   Complete – Changeset creation has succeeded.  
     */
    status?: ChangesetStatus;
    /**
     * The details of the error that you receive when creating a changeset. It consists of the type of error and the error message.
     */
    errorInfo?: ErrorInfo;
  }
  export interface CreateKxClusterRequest {
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: KxEnvironmentId;
    /**
     * A unique name for the cluster that you want to create.
     */
    clusterName: KxClusterName;
    /**
     * Specifies the type of KDB database that is being created. The following types are available:    HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.   RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter.   GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.   GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode.   Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.  
     */
    clusterType: KxClusterType;
    /**
     *  A configuration to store Tickerplant logs. It consists of a list of volumes that will be mounted to your cluster. For the cluster type Tickerplant, the location of the TP volume on the cluster will be available by using the global variable .aws.tp_log_path. 
     */
    tickerplantLogConfiguration?: TickerplantLogConfiguration;
    /**
     * A list of databases that will be available for querying.
     */
    databases?: KxDatabaseConfigurations;
    /**
     * The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. 
     */
    cacheStorageConfigurations?: KxCacheStorageConfigurations;
    /**
     * The configuration based on which FinSpace will scale in or scale out nodes in your cluster.
     */
    autoScalingConfiguration?: AutoScalingConfiguration;
    /**
     * A description of the cluster.
     */
    clusterDescription?: KxClusterDescription;
    /**
     * A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.
     */
    capacityConfiguration?: CapacityConfiguration;
    /**
     * The version of FinSpace managed kdb to run.
     */
    releaseLabel: ReleaseLabel;
    /**
     * Configuration details about the network where the Privatelink endpoint of the cluster resides.
     */
    vpcConfiguration: VpcConfiguration;
    /**
     * Specifies a Q program that will be run at launch of a cluster. It is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q.
     */
    initializationScript?: InitializationScriptFilePath;
    /**
     * Defines the key-value pairs to make them available inside the cluster.
     */
    commandLineArguments?: KxCommandLineArguments;
    /**
     * The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. 
     */
    code?: CodeConfiguration;
    /**
     * An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
     */
    executionRole?: ExecutionRoleArn;
    /**
     * The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose clusterType as RDB. All the data written to this storage space is lost when the cluster node is restarted.
     */
    savedownStorageConfiguration?: KxSavedownStorageConfiguration;
    /**
     * The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode: KxAzMode;
    /**
     * The availability zone identifiers for the requested regions.
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * A list of key-value pairs to label the cluster. You can add up to 50 tags to a cluster.
     */
    tags?: TagMap;
    /**
     * The structure that stores the configuration details of a scaling group.
     */
    scalingGroupConfiguration?: KxScalingGroupConfiguration;
  }
  export interface CreateKxClusterResponse {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: KxEnvironmentId;
    /**
     * The status of cluster creation.   PENDING – The cluster is pending creation.   CREATING – The cluster creation process is in progress.   CREATE_FAILED – The cluster creation process has failed.   RUNNING – The cluster creation process is running.   UPDATING – The cluster is in the process of being updated.   DELETING – The cluster is in the process of being deleted.   DELETED – The cluster has been deleted.   DELETE_FAILED – The cluster failed to delete.  
     */
    status?: KxClusterStatus;
    /**
     * The error message when a failed state occurs. 
     */
    statusReason?: KxClusterStatusReason;
    /**
     * A unique name for the cluster.
     */
    clusterName?: KxClusterName;
    /**
     * Specifies the type of KDB database that is being created. The following types are available:    HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.   RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter.   GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.   GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode.   Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.  
     */
    clusterType?: KxClusterType;
    tickerplantLogConfiguration?: TickerplantLogConfiguration;
    /**
     *  A list of volumes mounted on the cluster. 
     */
    volumes?: Volumes;
    /**
     * A list of databases that will be available for querying.
     */
    databases?: KxDatabaseConfigurations;
    /**
     * The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. 
     */
    cacheStorageConfigurations?: KxCacheStorageConfigurations;
    /**
     * The configuration based on which FinSpace will scale in or scale out nodes in your cluster.
     */
    autoScalingConfiguration?: AutoScalingConfiguration;
    /**
     * A description of the cluster.
     */
    clusterDescription?: KxClusterDescription;
    /**
     * A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.
     */
    capacityConfiguration?: CapacityConfiguration;
    /**
     * A version of the FinSpace managed kdb to run.
     */
    releaseLabel?: ReleaseLabel;
    /**
     * Configuration details about the network where the Privatelink endpoint of the cluster resides.
     */
    vpcConfiguration?: VpcConfiguration;
    /**
     * Specifies a Q program that will be run at launch of a cluster. It is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q.
     */
    initializationScript?: InitializationScriptFilePath;
    /**
     * Defines the key-value pairs to make them available inside the cluster.
     */
    commandLineArguments?: KxCommandLineArguments;
    /**
     * The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. 
     */
    code?: CodeConfiguration;
    /**
     *  An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster. 
     */
    executionRole?: ExecutionRoleArn;
    /**
     * The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     * The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose clusterType as RDB. All the data written to this storage space is lost when the cluster node is restarted.
     */
    savedownStorageConfiguration?: KxSavedownStorageConfiguration;
    /**
     * The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode?: KxAzMode;
    /**
     *  The availability zone identifiers for the requested regions. 
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * The structure that stores the configuration details of a scaling group.
     */
    scalingGroupConfiguration?: KxScalingGroupConfiguration;
  }
  export interface CreateKxDatabaseRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: EnvironmentId;
    /**
     * The name of the kdb database.
     */
    databaseName: DatabaseName;
    /**
     * A description of the database.
     */
    description?: Description;
    /**
     * A list of key-value pairs to label the kdb database. You can add up to 50 tags to your kdb database
     */
    tags?: TagMap;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken: ClientTokenString;
  }
  export interface CreateKxDatabaseResponse {
    /**
     * The name of the kdb database.
     */
    databaseName?: DatabaseName;
    /**
     * The ARN identifier of the database.
     */
    databaseArn?: DatabaseArn;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: EnvironmentId;
    /**
     * A description of the database.
     */
    description?: Description;
    /**
     * The timestamp at which the database is created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * The last time that the database was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
  }
  export interface CreateKxDataviewRequest {
    /**
     * A unique identifier for the kdb environment, where you want to create the dataview. 
     */
    environmentId: EnvironmentId;
    /**
     *  The name of the database where you want to create a dataview. 
     */
    databaseName: DatabaseName;
    /**
     * A unique identifier for the dataview.
     */
    dataviewName: KxDataviewName;
    /**
     * The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode: KxAzMode;
    /**
     *  The identifier of the availability zones. 
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     *  A unique identifier of the changeset that you want to use to ingest data. 
     */
    changesetId?: ChangesetId;
    /**
     *  The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. 
     */
    segmentConfigurations?: KxDataviewSegmentConfigurationList;
    /**
     * The option to specify whether you want to apply all the future additions and corrections automatically to the dataview, when you ingest new changesets. The default value is false.
     */
    autoUpdate?: booleanValue;
    /**
     * A description of the dataview.
     */
    description?: Description;
    /**
     *  A list of key-value pairs to label the dataview. You can add up to 50 tags to a dataview. 
     */
    tags?: TagMap;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken: ClientTokenString;
  }
  export interface CreateKxDataviewResponse {
    /**
     * A unique identifier for the dataview.
     */
    dataviewName?: KxDataviewName;
    /**
     * The name of the database where you want to create a dataview.
     */
    databaseName?: DatabaseName;
    /**
     * A unique identifier for the kdb environment, where you want to create the dataview. 
     */
    environmentId?: EnvironmentId;
    /**
     * The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode?: KxAzMode;
    /**
     *  The identifier of the availability zones. 
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     *  The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. 
     */
    segmentConfigurations?: KxDataviewSegmentConfigurationList;
    /**
     * A description of the dataview.
     */
    description?: Description;
    /**
     * The option to select whether you want to apply all the future additions and corrections automatically to the dataview when you ingest new changesets. The default value is false.
     */
    autoUpdate?: booleanValue;
    /**
     *  The timestamp at which the dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     *  The last time that the dataview was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  The status of dataview creation.    CREATING – The dataview creation is in progress.    UPDATING – The dataview is in the process of being updated.    ACTIVE – The dataview is active.  
     */
    status?: KxDataviewStatus;
  }
  export interface CreateKxEnvironmentRequest {
    /**
     * The name of the kdb environment that you want to create.
     */
    name: KxEnvironmentName;
    /**
     * A description for the kdb environment.
     */
    description?: Description;
    /**
     * The KMS key ID to encrypt your data in the FinSpace environment.
     */
    kmsKeyId: KmsKeyARN;
    /**
     * A list of key-value pairs to label the kdb environment. You can add up to 50 tags to your kdb environment.
     */
    tags?: TagMap;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
  }
  export interface CreateKxEnvironmentResponse {
    /**
     * The name of the kdb environment.
     */
    name?: KxEnvironmentName;
    /**
     * The status of the kdb environment.
     */
    status?: EnvironmentStatus;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: IdType;
    /**
     * A description for the kdb environment.
     */
    description?: Description;
    /**
     * The ARN identifier of the environment.
     */
    environmentArn?: EnvironmentArn;
    /**
     * The KMS key ID to encrypt your data in the FinSpace environment.
     */
    kmsKeyId?: KmsKeyId;
    /**
     * The timestamp at which the kdb environment was created in FinSpace.
     */
    creationTimestamp?: Timestamp;
  }
  export interface CreateKxScalingGroupRequest {
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken: ClientToken;
    /**
     * A unique identifier for the kdb environment, where you want to create the scaling group. 
     */
    environmentId: KxEnvironmentId;
    /**
     * A unique identifier for the kdb scaling group. 
     */
    scalingGroupName: KxScalingGroupName;
    /**
     *  The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed. 
     */
    hostType: KxHostType;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneId: AvailabilityZoneId;
    /**
     *  A list of key-value pairs to label the scaling group. You can add up to 50 tags to a scaling group. 
     */
    tags?: TagMap;
  }
  export interface CreateKxScalingGroupResponse {
    /**
     * A unique identifier for the kdb environment, where you create the scaling group. 
     */
    environmentId?: KxEnvironmentId;
    /**
     * A unique identifier for the kdb scaling group. 
     */
    scalingGroupName?: KxScalingGroupName;
    /**
     *  The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed. 
     */
    hostType?: KxHostType;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * The status of scaling group.   CREATING – The scaling group creation is in progress.   CREATE_FAILED – The scaling group creation has failed.   ACTIVE – The scaling group is active.   UPDATING – The scaling group is in the process of being updated.   UPDATE_FAILED – The update action failed.   DELETING – The scaling group is in the process of being deleted.   DELETE_FAILED – The system failed to delete the scaling group.   DELETED – The scaling group is successfully deleted.  
     */
    status?: KxScalingGroupStatus;
    /**
     *  The last time that the scaling group was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  The timestamp at which the scaling group was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
  }
  export interface CreateKxUserRequest {
    /**
     * A unique identifier for the kdb environment where you want to create a user.
     */
    environmentId: IdType;
    /**
     * A unique identifier for the user.
     */
    userName: KxUserNameString;
    /**
     * The IAM role ARN that will be associated with the user.
     */
    iamRole: RoleArn;
    /**
     * A list of key-value pairs to label the user. You can add up to 50 tags to a user.
     */
    tags?: TagMap;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
  }
  export interface CreateKxUserResponse {
    /**
     * A unique identifier for the user.
     */
    userName?: KxUserNameString;
    /**
     *  The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide. 
     */
    userArn?: KxUserArn;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: IdType;
    /**
     * The IAM role ARN that will be associated with the user.
     */
    iamRole?: RoleArn;
  }
  export interface CreateKxVolumeRequest {
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
    /**
     * A unique identifier for the kdb environment, whose clusters can attach to the volume. 
     */
    environmentId: KxEnvironmentId;
    /**
     *  The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. When you select NAS_1 volume type, you must also provide nas1Configuration. 
     */
    volumeType: KxVolumeType;
    /**
     * A unique identifier for the volume.
     */
    volumeName: KxVolumeName;
    /**
     *  A description of the volume. 
     */
    description?: Description;
    /**
     *  Specifies the configuration for the Network attached storage (NAS_1) file system volume. This parameter is required when you choose volumeType as NAS_1.
     */
    nas1Configuration?: KxNAS1Configuration;
    /**
     * The number of availability zones you want to assign per cluster. Currently, FinSpace only support SINGLE for volumes.
     */
    azMode: KxAzMode;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneIds: AvailabilityZoneIds;
    /**
     *  A list of key-value pairs to label the volume. You can add up to 50 tags to a volume. 
     */
    tags?: TagMap;
  }
  export interface CreateKxVolumeResponse {
    /**
     * A unique identifier for the kdb environment, whose clusters can attach to the volume. 
     */
    environmentId?: KxEnvironmentId;
    /**
     * A unique identifier for the volume.
     */
    volumeName?: KxVolumeName;
    /**
     *  The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. 
     */
    volumeType?: KxVolumeType;
    /**
     *  The ARN identifier of the volume. 
     */
    volumeArn?: KxVolumeArn;
    /**
     *  Specifies the configuration for the Network attached storage (NAS_1) file system volume.
     */
    nas1Configuration?: KxNAS1Configuration;
    /**
     * The status of volume creation.   CREATING – The volume creation is in progress.   CREATE_FAILED – The volume creation has failed.   ACTIVE – The volume is active.   UPDATING – The volume is in the process of being updated.   UPDATE_FAILED – The update action failed.   UPDATED – The volume is successfully updated.   DELETING – The volume is in the process of being deleted.   DELETE_FAILED – The system failed to delete the volume.   DELETED – The volume is successfully deleted.  
     */
    status?: KxVolumeStatus;
    /**
     * The error message when a failed state occurs. 
     */
    statusReason?: KxVolumeStatusReason;
    /**
     * The number of availability zones you want to assign per cluster. Currently, FinSpace only support SINGLE for volumes.
     */
    azMode?: KxAzMode;
    /**
     *  A description of the volume. 
     */
    description?: Description;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneIds?: AvailabilityZoneIds;
    /**
     * The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
  }
  export type CustomDNSConfiguration = CustomDNSServer[];
  export interface CustomDNSServer {
    /**
     * The name of the DNS server.
     */
    customDNSServerName: ValidHostname;
    /**
     * The IP address of the DNS server.
     */
    customDNSServerIP: ValidIPAddress;
  }
  export type DataBundleArn = string;
  export type DataBundleArns = DataBundleArn[];
  export type DatabaseArn = string;
  export type DatabaseName = string;
  export type DbPath = string;
  export type DbPaths = DbPath[];
  export interface DeleteEnvironmentRequest {
    /**
     * The identifier for the FinSpace environment.
     */
    environmentId: IdType;
  }
  export interface DeleteEnvironmentResponse {
  }
  export interface DeleteKxClusterRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: KxEnvironmentId;
    /**
     * The name of the cluster that you want to delete.
     */
    clusterName: KxClusterName;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientTokenString;
  }
  export interface DeleteKxClusterResponse {
  }
  export interface DeleteKxDatabaseRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: EnvironmentId;
    /**
     * The name of the kdb database that you want to delete.
     */
    databaseName: DatabaseName;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken: ClientTokenString;
  }
  export interface DeleteKxDatabaseResponse {
  }
  export interface DeleteKxDataviewRequest {
    /**
     * A unique identifier for the kdb environment, from where you want to delete the dataview. 
     */
    environmentId: EnvironmentId;
    /**
     * The name of the database whose dataview you want to delete.
     */
    databaseName: DatabaseName;
    /**
     * The name of the dataview that you want to delete.
     */
    dataviewName: KxDataviewName;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken: ClientTokenString;
  }
  export interface DeleteKxDataviewResponse {
  }
  export interface DeleteKxEnvironmentRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteKxEnvironmentResponse {
  }
  export interface DeleteKxScalingGroupRequest {
    /**
     * A unique identifier for the kdb environment, from where you want to delete the dataview. 
     */
    environmentId: KxEnvironmentId;
    /**
     * A unique identifier for the kdb scaling group. 
     */
    scalingGroupName: KxScalingGroupName;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientTokenString;
  }
  export interface DeleteKxScalingGroupResponse {
  }
  export interface DeleteKxUserRequest {
    /**
     * A unique identifier for the user that you want to delete.
     */
    userName: KxUserNameString;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteKxUserResponse {
  }
  export interface DeleteKxVolumeRequest {
    /**
     * A unique identifier for the kdb environment, whose clusters can attach to the volume. 
     */
    environmentId: KxEnvironmentId;
    /**
     *  The name of the volume that you want to delete. 
     */
    volumeName: KxVolumeName;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientTokenString;
  }
  export interface DeleteKxVolumeResponse {
  }
  export type Description = string;
  export type EmailId = string;
  export interface Environment {
    /**
     * The name of the FinSpace environment.
     */
    name?: EnvironmentName;
    /**
     * The identifier of the FinSpace environment.
     */
    environmentId?: IdType;
    /**
     * The ID of the AWS account in which the FinSpace environment is created.
     */
    awsAccountId?: IdType;
    /**
     * The current status of creation of the FinSpace environment.
     */
    status?: EnvironmentStatus;
    /**
     * The sign-in URL for the web application of your FinSpace environment.
     */
    environmentUrl?: url;
    /**
     * The description of the FinSpace environment.
     */
    description?: Description;
    /**
     * The Amazon Resource Name (ARN) of your FinSpace environment.
     */
    environmentArn?: EnvironmentArn;
    /**
     * The URL of the integrated FinSpace notebook environment in your web application.
     */
    sageMakerStudioDomainUrl?: SmsDomainUrl;
    /**
     * The KMS key id used to encrypt in the FinSpace environment.
     */
    kmsKeyId?: KmsKeyId;
    /**
     * The AWS account ID of the dedicated service account associated with your FinSpace environment.
     */
    dedicatedServiceAccountId?: IdType;
    /**
     * The authentication mode for the environment.
     */
    federationMode?: FederationMode;
    /**
     * Configuration information when authentication mode is FEDERATED.
     */
    federationParameters?: FederationParameters;
  }
  export type EnvironmentArn = string;
  export type EnvironmentErrorMessage = string;
  export type EnvironmentId = string;
  export type EnvironmentList = Environment[];
  export type EnvironmentName = string;
  export type EnvironmentStatus = "CREATE_REQUESTED"|"CREATING"|"CREATED"|"DELETE_REQUESTED"|"DELETING"|"DELETED"|"FAILED_CREATION"|"RETRY_DELETION"|"FAILED_DELETION"|"UPDATE_NETWORK_REQUESTED"|"UPDATING_NETWORK"|"FAILED_UPDATING_NETWORK"|"SUSPENDED"|string;
  export type ErrorDetails = "The inputs to this request are invalid."|"Service limits have been exceeded."|"Missing required permission to perform this request."|"One or more inputs to this request were not found."|"The system temporarily lacks sufficient resources to process the request."|"An internal error has occurred."|"Cancelled"|"A user recoverable error has occurred"|string;
  export interface ErrorInfo {
    /**
     * Specifies the error message that appears if a flow fails. 
     */
    errorMessage?: ErrorMessage;
    /**
     * Specifies the type of error.
     */
    errorType?: ErrorDetails;
  }
  export type ErrorMessage = string;
  export type ExecutionRoleArn = string;
  export type FederationAttributeKey = string;
  export type FederationAttributeValue = string;
  export type FederationMode = "FEDERATED"|"LOCAL"|string;
  export interface FederationParameters {
    /**
     * SAML 2.0 Metadata document from identity provider (IdP).
     */
    samlMetadataDocument?: SamlMetadataDocument;
    /**
     * Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).
     */
    samlMetadataURL?: url;
    /**
     * The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration (IdP).
     */
    applicationCallBackURL?: url;
    /**
     * The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.
     */
    federationURN?: urn;
    /**
     * Name of the identity provider (IdP).
     */
    federationProviderName?: FederationProviderName;
    /**
     * SAML attribute name and value. The name must always be Email and the value should be set to the attribute definition in which user email is set. For example, name would be Email and value http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress. Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.
     */
    attributeMap?: AttributeMap;
  }
  export type FederationProviderName = string;
  export type FinSpaceTaggableArn = string;
  export interface GetEnvironmentRequest {
    /**
     * The identifier of the FinSpace environment.
     */
    environmentId: IdType;
  }
  export interface GetEnvironmentResponse {
    /**
     * The name of the FinSpace environment.
     */
    environment?: Environment;
  }
  export interface GetKxChangesetRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: EnvironmentId;
    /**
     * The name of the kdb database.
     */
    databaseName: DatabaseName;
    /**
     * A unique identifier of the changeset for which you want to retrieve data.
     */
    changesetId: ChangesetId;
  }
  export interface GetKxChangesetResponse {
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     * The name of the kdb database.
     */
    databaseName?: DatabaseName;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: EnvironmentId;
    /**
     * A list of change request objects that are run in order.
     */
    changeRequests?: ChangeRequests;
    /**
     * The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * Beginning time from which the changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    activeFromTimestamp?: Timestamp;
    /**
     * The timestamp at which the changeset was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     * Status of the changeset creation process.   Pending – Changeset creation is pending.   Processing – Changeset creation is running.   Failed – Changeset creation has failed.   Complete – Changeset creation has succeeded.  
     */
    status?: ChangesetStatus;
    /**
     * Provides details in the event of a failed flow, including the error type and the related error message.
     */
    errorInfo?: ErrorInfo;
  }
  export interface GetKxClusterRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: KxEnvironmentId;
    /**
     * The name of the cluster that you want to retrieve.
     */
    clusterName: KxClusterName;
  }
  export interface GetKxClusterResponse {
    /**
     * The status of cluster creation.   PENDING – The cluster is pending creation.   CREATING – The cluster creation process is in progress.   CREATE_FAILED – The cluster creation process has failed.   RUNNING – The cluster creation process is running.   UPDATING – The cluster is in the process of being updated.   DELETING – The cluster is in the process of being deleted.   DELETED – The cluster has been deleted.   DELETE_FAILED – The cluster failed to delete.  
     */
    status?: KxClusterStatus;
    /**
     * The error message when a failed state occurs. 
     */
    statusReason?: KxClusterStatusReason;
    /**
     * A unique name for the cluster.
     */
    clusterName?: KxClusterName;
    /**
     * Specifies the type of KDB database that is being created. The following types are available:    HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.   RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter.   GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.   GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode.   Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.  
     */
    clusterType?: KxClusterType;
    tickerplantLogConfiguration?: TickerplantLogConfiguration;
    /**
     *  A list of volumes attached to the cluster. 
     */
    volumes?: Volumes;
    /**
     *  A list of databases mounted on the cluster.
     */
    databases?: KxDatabaseConfigurations;
    /**
     * The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. 
     */
    cacheStorageConfigurations?: KxCacheStorageConfigurations;
    /**
     * The configuration based on which FinSpace will scale in or scale out nodes in your cluster.
     */
    autoScalingConfiguration?: AutoScalingConfiguration;
    /**
     * A description of the cluster.
     */
    clusterDescription?: KxClusterDescription;
    /**
     * A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.
     */
    capacityConfiguration?: CapacityConfiguration;
    /**
     * The version of FinSpace managed kdb to run.
     */
    releaseLabel?: ReleaseLabel;
    /**
     * Configuration details about the network where the Privatelink endpoint of the cluster resides.
     */
    vpcConfiguration?: VpcConfiguration;
    /**
     * Specifies a Q program that will be run at launch of a cluster. It is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q.
     */
    initializationScript?: InitializationScriptFilePath;
    /**
     * Defines key-value pairs to make them available inside the cluster.
     */
    commandLineArguments?: KxCommandLineArguments;
    /**
     * The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. 
     */
    code?: CodeConfiguration;
    /**
     *  An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster. 
     */
    executionRole?: ExecutionRoleArn;
    /**
     * The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     * The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose clusterType as RDB. All the data written to this storage space is lost when the cluster node is restarted.
     */
    savedownStorageConfiguration?: KxSavedownStorageConfiguration;
    /**
     * The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode?: KxAzMode;
    /**
     *  The availability zone identifiers for the requested regions. 
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    scalingGroupConfiguration?: KxScalingGroupConfiguration;
  }
  export interface GetKxConnectionStringRequest {
    /**
     *  The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide. 
     */
    userArn: KxUserArn;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
    /**
     * A name of the kdb cluster.
     */
    clusterName: KxClusterName;
  }
  export interface GetKxConnectionStringResponse {
    /**
     * The signed connection string that you can use to connect to clusters.
     */
    signedConnectionString?: SignedKxConnectionString;
  }
  export interface GetKxDatabaseRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: EnvironmentId;
    /**
     * The name of the kdb database.
     */
    databaseName: DatabaseName;
  }
  export interface GetKxDatabaseResponse {
    /**
     * The name of the kdb database for which the information is retrieved.
     */
    databaseName?: DatabaseName;
    /**
     * The ARN identifier of the database.
     */
    databaseArn?: DatabaseArn;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: EnvironmentId;
    /**
     * A description of the database.
     */
    description?: Description;
    /**
     * The timestamp at which the database is created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     * A unique identifier for the changeset.
     */
    lastCompletedChangesetId?: ChangesetId;
    /**
     * The total number of bytes in the database.
     */
    numBytes?: numBytes;
    /**
     * The total number of changesets in the database.
     */
    numChangesets?: numChangesets;
    /**
     * The total number of files in the database.
     */
    numFiles?: numFiles;
  }
  export interface GetKxDataviewRequest {
    /**
     * A unique identifier for the kdb environment, from where you want to retrieve the dataview details.
     */
    environmentId: EnvironmentId;
    /**
     *  The name of the database where you created the dataview.
     */
    databaseName: DatabaseName;
    /**
     * A unique identifier for the dataview.
     */
    dataviewName: KxDataviewName;
  }
  export interface GetKxDataviewResponse {
    /**
     *  The name of the database where you created the dataview.
     */
    databaseName?: DatabaseName;
    /**
     * A unique identifier for the dataview.
     */
    dataviewName?: KxDataviewName;
    /**
     * The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode?: KxAzMode;
    /**
     *  The identifier of the availability zones. 
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     *  A unique identifier of the changeset that you want to use to ingest data. 
     */
    changesetId?: ChangesetId;
    /**
     *  The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. 
     */
    segmentConfigurations?: KxDataviewSegmentConfigurationList;
    /**
     *  The current active changeset versions of the database on the given dataview. 
     */
    activeVersions?: KxDataviewActiveVersionList;
    /**
     * A description of the dataview.
     */
    description?: Description;
    /**
     * The option to specify whether you want to apply all the future additions and corrections automatically to the dataview when new changesets are ingested. The default value is false.
     */
    autoUpdate?: booleanValue;
    /**
     * A unique identifier for the kdb environment, from where you want to retrieve the dataview details.
     */
    environmentId?: EnvironmentId;
    /**
     * The timestamp at which the dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     *  The last time that the dataview was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  The status of dataview creation.    CREATING – The dataview creation is in progress.    UPDATING – The dataview is in the process of being updated.    ACTIVE – The dataview is active.  
     */
    status?: KxDataviewStatus;
    /**
     *  The error message when a failed state occurs. 
     */
    statusReason?: KxDataviewStatusReason;
  }
  export interface GetKxEnvironmentRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
  }
  export interface GetKxEnvironmentResponse {
    /**
     * The name of the kdb environment.
     */
    name?: KxEnvironmentName;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: IdType;
    /**
     * The unique identifier of the AWS account that is used to create the kdb environment.
     */
    awsAccountId?: IdType;
    /**
     * The status of the kdb environment.
     */
    status?: EnvironmentStatus;
    /**
     * The status of the network configuration.
     */
    tgwStatus?: tgwStatus;
    /**
     * The status of DNS configuration.
     */
    dnsStatus?: dnsStatus;
    /**
     * Specifies the error message that appears if a flow fails.
     */
    errorMessage?: EnvironmentErrorMessage;
    /**
     * A description for the kdb environment.
     */
    description?: Description;
    /**
     * The ARN identifier of the environment.
     */
    environmentArn?: EnvironmentArn;
    /**
     * The KMS key ID to encrypt your data in the FinSpace environment.
     */
    kmsKeyId?: KmsKeyId;
    /**
     * A unique identifier for the AWS environment infrastructure account.
     */
    dedicatedServiceAccountId?: IdType;
    transitGatewayConfiguration?: TransitGatewayConfiguration;
    /**
     * A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.
     */
    customDNSConfiguration?: CustomDNSConfiguration;
    /**
     * The timestamp at which the kdb environment was created in FinSpace. 
     */
    creationTimestamp?: Timestamp;
    /**
     * The timestamp at which the kdb environment was updated. 
     */
    updateTimestamp?: Timestamp;
    /**
     * The identifier of the availability zones where subnets for the environment are created.
     */
    availabilityZoneIds?: AvailabilityZoneIds;
    /**
     * The Amazon Resource Name (ARN) of the certificate authority of the kdb environment.
     */
    certificateAuthorityArn?: stringValueLength1to255;
  }
  export interface GetKxScalingGroupRequest {
    /**
     * A unique identifier for the kdb environment. 
     */
    environmentId: KxEnvironmentId;
    /**
     * A unique identifier for the kdb scaling group. 
     */
    scalingGroupName: KxScalingGroupName;
  }
  export interface GetKxScalingGroupResponse {
    /**
     * A unique identifier for the kdb scaling group. 
     */
    scalingGroupName?: KxScalingGroupName;
    /**
     *  The ARN identifier for the scaling group. 
     */
    scalingGroupArn?: arn;
    /**
     *  The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed. 
     */
    hostType?: KxHostType;
    /**
     *  The list of Managed kdb clusters that are currently active in the given scaling group. 
     */
    clusters?: KxClusterNameList;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * The status of scaling group.   CREATING – The scaling group creation is in progress.   CREATE_FAILED – The scaling group creation has failed.   ACTIVE – The scaling group is active.   UPDATING – The scaling group is in the process of being updated.   UPDATE_FAILED – The update action failed.   DELETING – The scaling group is in the process of being deleted.   DELETE_FAILED – The system failed to delete the scaling group.   DELETED – The scaling group is successfully deleted.  
     */
    status?: KxScalingGroupStatus;
    /**
     *  The error message when a failed state occurs. 
     */
    statusReason?: KxClusterStatusReason;
    /**
     *  The last time that the scaling group was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  The timestamp at which the scaling group was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
  }
  export interface GetKxUserRequest {
    /**
     * A unique identifier for the user.
     */
    userName: KxUserNameString;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
  }
  export interface GetKxUserResponse {
    /**
     * A unique identifier for the user.
     */
    userName?: IdType;
    /**
     *  The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide. 
     */
    userArn?: KxUserArn;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: IdType;
    /**
     * The IAM role ARN that is associated with the user.
     */
    iamRole?: RoleArn;
  }
  export interface GetKxVolumeRequest {
    /**
     * A unique identifier for the kdb environment, whose clusters can attach to the volume. 
     */
    environmentId: KxEnvironmentId;
    /**
     * A unique identifier for the volume.
     */
    volumeName: KxVolumeName;
  }
  export interface GetKxVolumeResponse {
    /**
     * A unique identifier for the kdb environment, whose clusters can attach to the volume. 
     */
    environmentId?: KxEnvironmentId;
    /**
     *  A unique identifier for the volume.
     */
    volumeName?: KxVolumeName;
    /**
     *  The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. 
     */
    volumeType?: KxVolumeType;
    /**
     *  The ARN identifier of the volume. 
     */
    volumeArn?: KxVolumeArn;
    /**
     *  Specifies the configuration for the Network attached storage (NAS_1) file system volume.
     */
    nas1Configuration?: KxNAS1Configuration;
    /**
     * The status of volume creation.   CREATING – The volume creation is in progress.   CREATE_FAILED – The volume creation has failed.   ACTIVE – The volume is active.   UPDATING – The volume is in the process of being updated.   UPDATE_FAILED – The update action failed.   UPDATED – The volume is successfully updated.   DELETING – The volume is in the process of being deleted.   DELETE_FAILED – The system failed to delete the volume.   DELETED – The volume is successfully deleted.  
     */
    status?: KxVolumeStatus;
    /**
     * The error message when a failed state occurs. 
     */
    statusReason?: KxVolumeStatusReason;
    /**
     *  The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    createdTimestamp?: Timestamp;
    /**
     *  A description of the volume. 
     */
    description?: Description;
    /**
     * The number of availability zones you want to assign per cluster. Currently, FinSpace only support SINGLE for volumes.
     */
    azMode?: KxAzMode;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneIds?: AvailabilityZoneIds;
    /**
     * The last time that the volume was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  A list of cluster identifiers that a volume is attached to. 
     */
    attachedClusters?: KxAttachedClusters;
  }
  export type IPAddressType = "IP_V4"|string;
  export interface IcmpTypeCode {
    /**
     * The ICMP type. A value of -1 means all types. 
     */
    type: IcmpTypeOrCode;
    /**
     *  The ICMP code. A value of -1 means all codes for the specified ICMP type. 
     */
    code: IcmpTypeOrCode;
  }
  export type IcmpTypeOrCode = number;
  export type IdType = string;
  export type InitializationScriptFilePath = string;
  export type KmsKeyARN = string;
  export type KmsKeyId = string;
  export interface KxAttachedCluster {
    /**
     * A unique name for the attached cluster.
     */
    clusterName?: KxClusterName;
    /**
     * Specifies the type of cluster. The volume for TP and RDB cluster types will be used for TP logs.
     */
    clusterType?: KxClusterType;
    /**
     * The status of the attached cluster.   PENDING – The cluster is pending creation.   CREATING – The cluster creation process is in progress.   CREATE_FAILED – The cluster creation process has failed.   RUNNING – The cluster creation process is running.   UPDATING – The cluster is in the process of being updated.   DELETING – The cluster is in the process of being deleted.   DELETED – The cluster has been deleted.   DELETE_FAILED – The cluster failed to delete.  
     */
    clusterStatus?: KxClusterStatus;
  }
  export type KxAttachedClusters = KxAttachedCluster[];
  export type KxAzMode = "SINGLE"|"MULTI"|string;
  export interface KxCacheStorageConfiguration {
    /**
     * The type of cache storage. The valid values are:    CACHE_1000 – This type provides at least 1000 MB/s disk access throughput.    CACHE_250 – This type provides at least 250 MB/s disk access throughput.    CACHE_12 – This type provides at least 12 MB/s disk access throughput.    For cache type CACHE_1000 and CACHE_250 you can select cache size as 1200 GB or increments of 2400 GB. For cache type CACHE_12 you can select the cache size in increments of 6000 GB.
     */
    type: KxCacheStorageType;
    /**
     * The size of cache in Gigabytes.
     */
    size: KxCacheStorageSize;
  }
  export type KxCacheStorageConfigurations = KxCacheStorageConfiguration[];
  export type KxCacheStorageSize = number;
  export type KxCacheStorageType = string;
  export interface KxChangesetListEntry {
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     * The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * Beginning time from which the changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    activeFromTimestamp?: Timestamp;
    /**
     * The timestamp at which the changeset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  Status of the changeset.   Pending – Changeset creation is pending.   Processing – Changeset creation is running.   Failed – Changeset creation has failed.   Complete – Changeset creation has succeeded.  
     */
    status?: ChangesetStatus;
  }
  export type KxChangesets = KxChangesetListEntry[];
  export interface KxCluster {
    /**
     * The status of a cluster.   PENDING – The cluster is pending creation.   CREATING –The cluster creation process is in progress.   CREATE_FAILED– The cluster creation process has failed.   RUNNING – The cluster creation process is running.   UPDATING – The cluster is in the process of being updated.    DELETING – The cluster is in the process of being deleted.   DELETED – The cluster has been deleted.   DELETE_FAILED – The cluster failed to delete.  
     */
    status?: KxClusterStatus;
    /**
     * The error message when a failed state occurs. 
     */
    statusReason?: KxClusterStatusReason;
    /**
     * A unique name for the cluster.
     */
    clusterName?: KxClusterName;
    /**
     * Specifies the type of KDB database that is being created. The following types are available:    HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.   RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter.   GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.   GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode.   Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.  
     */
    clusterType?: KxClusterType;
    /**
     * A description of the cluster.
     */
    clusterDescription?: KxClusterDescription;
    /**
     * A version of the FinSpace managed kdb to run.
     */
    releaseLabel?: ReleaseLabel;
    /**
     *  A list of volumes attached to the cluster. 
     */
    volumes?: Volumes;
    /**
     * Specifies a Q program that will be run at launch of a cluster. It is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q.
     */
    initializationScript?: InitializationScriptFilePath;
    /**
     *  An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster. 
     */
    executionRole?: ExecutionRoleArn;
    /**
     * The number of availability zones assigned per cluster. This can be one of the following:    SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode?: KxAzMode;
    /**
     *  The availability zone identifiers for the requested regions. 
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     * The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
  }
  export interface KxClusterCodeDeploymentConfiguration {
    /**
     *  The type of deployment that you want on a cluster.    ROLLING – This options updates the cluster by stopping the exiting q process and starting a new q process with updated configuration.   NO_RESTART – This option updates the cluster without stopping the running q process. It is only available for GP type cluster. This option is quicker as it reduces the turn around time to update configuration on a cluster.  With this deployment mode, you cannot update the initializationScript and commandLineArguments parameters.   FORCE – This option updates the cluster by immediately stopping all the running processes before starting up new ones with the updated configuration.   
     */
    deploymentStrategy: KxClusterCodeDeploymentStrategy;
  }
  export type KxClusterCodeDeploymentStrategy = "NO_RESTART"|"ROLLING"|"FORCE"|string;
  export type KxClusterDescription = string;
  export type KxClusterName = string;
  export type KxClusterNameList = KxClusterName[];
  export type KxClusterNodeIdString = string;
  export type KxClusterStatus = "PENDING"|"CREATING"|"CREATE_FAILED"|"RUNNING"|"UPDATING"|"DELETING"|"DELETED"|"DELETE_FAILED"|string;
  export type KxClusterStatusReason = string;
  export type KxClusterType = "HDB"|"RDB"|"GATEWAY"|"GP"|"TICKERPLANT"|string;
  export type KxClusters = KxCluster[];
  export interface KxCommandLineArgument {
    /**
     * The name of the key.
     */
    key?: KxCommandLineArgumentKey;
    /**
     * The value of the key.
     */
    value?: KxCommandLineArgumentValue;
  }
  export type KxCommandLineArgumentKey = string;
  export type KxCommandLineArgumentValue = string;
  export type KxCommandLineArguments = KxCommandLineArgument[];
  export interface KxDatabaseCacheConfiguration {
    /**
     * The type of disk cache. This parameter is used to map the database path to cache storage. The valid values are:   CACHE_1000 – This type provides at least 1000 MB/s disk access throughput.   
     */
    cacheType: KxCacheStorageType;
    /**
     * Specifies the portions of database that will be loaded into the cache for access.
     */
    dbPaths: DbPaths;
    /**
     *  The name of the dataview to be used for caching historical data on disk. 
     */
    dataviewName?: KxDataviewName;
  }
  export type KxDatabaseCacheConfigurations = KxDatabaseCacheConfiguration[];
  export interface KxDatabaseConfiguration {
    /**
     * The name of the kdb database. When this parameter is specified in the structure, S3 with the whole database is included by default.
     */
    databaseName: DatabaseName;
    /**
     * Configuration details for the disk cache used to increase performance reading from a kdb database mounted to the cluster.
     */
    cacheConfigurations?: KxDatabaseCacheConfigurations;
    /**
     * A unique identifier of the changeset that is associated with the cluster.
     */
    changesetId?: ChangesetId;
    /**
     *  The name of the dataview to be used for caching historical data on disk. 
     */
    dataviewName?: KxDataviewName;
    /**
     *  The configuration of the dataview to be used with specified cluster. 
     */
    dataviewConfiguration?: KxDataviewConfiguration;
  }
  export type KxDatabaseConfigurations = KxDatabaseConfiguration[];
  export interface KxDatabaseListEntry {
    /**
     * The name of the kdb database.
     */
    databaseName?: DatabaseName;
    /**
     * The timestamp at which the database was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
  }
  export type KxDatabases = KxDatabaseListEntry[];
  export interface KxDataviewActiveVersion {
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     *  The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. 
     */
    segmentConfigurations?: KxDataviewSegmentConfigurationList;
    /**
     *  The list of clusters that are currently using this dataview. 
     */
    attachedClusters?: AttachedClusterList;
    /**
     *  The timestamp at which the dataview version was active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     *  A unique identifier of the active version.
     */
    versionId?: VersionId;
  }
  export type KxDataviewActiveVersionList = KxDataviewActiveVersion[];
  export interface KxDataviewConfiguration {
    /**
     *  The unique identifier of the dataview.
     */
    dataviewName?: KxDataviewName;
    /**
     *  The version of the dataview corresponding to a given changeset. 
     */
    dataviewVersionId?: VersionId;
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     *  The db path and volume configuration for the segmented database.
     */
    segmentConfigurations?: KxDataviewSegmentConfigurationList;
  }
  export interface KxDataviewListEntry {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: EnvironmentId;
    /**
     *  A unique identifier of the database.
     */
    databaseName?: DatabaseName;
    /**
     *  A unique identifier of the dataview.
     */
    dataviewName?: KxDataviewName;
    /**
     * The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode?: KxAzMode;
    /**
     *  The identifier of the availability zones. 
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     *  The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. 
     */
    segmentConfigurations?: KxDataviewSegmentConfigurationList;
    /**
     *  The active changeset versions for the given dataview entry. 
     */
    activeVersions?: KxDataviewActiveVersionList;
    /**
     *  The status of a given dataview entry. 
     */
    status?: KxDataviewStatus;
    /**
     *  A description for the dataview list entry.
     */
    description?: Description;
    /**
     *  The option to specify whether you want to apply all the future additions and corrections automatically to the dataview when you ingest new changesets. The default value is false. 
     */
    autoUpdate?: booleanValue;
    /**
     *  The timestamp at which the dataview list entry was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * The last time that the dataview list was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  The error message when a failed state occurs. 
     */
    statusReason?: KxDataviewStatusReason;
  }
  export type KxDataviewName = string;
  export interface KxDataviewSegmentConfiguration {
    /**
     *  The database path of the data that you want to place on each selected volume for the segment. Each segment must have a unique database path for each volume.
     */
    dbPaths: SegmentConfigurationDbPathList;
    /**
     *  The name of the volume where you want to add data. 
     */
    volumeName: KxVolumeName;
  }
  export type KxDataviewSegmentConfigurationList = KxDataviewSegmentConfiguration[];
  export type KxDataviewStatus = "CREATING"|"ACTIVE"|"UPDATING"|"FAILED"|"DELETING"|string;
  export type KxDataviewStatusReason = string;
  export type KxDataviews = KxDataviewListEntry[];
  export interface KxDeploymentConfiguration {
    /**
     *  The type of deployment that you want on a cluster.    ROLLING – This options updates the cluster by stopping the exiting q process and starting a new q process with updated configuration.   NO_RESTART – This option updates the cluster without stopping the running q process. It is only available for HDB type cluster. This option is quicker as it reduces the turn around time to update configuration on a cluster.  With this deployment mode, you cannot update the initializationScript and commandLineArguments parameters.  
     */
    deploymentStrategy: KxDeploymentStrategy;
  }
  export type KxDeploymentStrategy = "NO_RESTART"|"ROLLING"|string;
  export interface KxEnvironment {
    /**
     * The name of the kdb environment.
     */
    name?: KxEnvironmentName;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: IdType;
    /**
     * The unique identifier of the AWS account in which you create the kdb environment.
     */
    awsAccountId?: IdType;
    /**
     * The status of the environment creation.    CREATE_REQUESTED – Environment creation has been requested.   CREATING – Environment is in the process of being created.   FAILED_CREATION – Environment creation has failed.   CREATED – Environment is successfully created and is currently active.   DELETE REQUESTED – Environment deletion has been requested.   DELETING – Environment is in the process of being deleted.   RETRY_DELETION – Initial environment deletion failed, system is reattempting delete.   DELETED – Environment has been deleted.   FAILED_DELETION – Environment deletion has failed.  
     */
    status?: EnvironmentStatus;
    /**
     * The status of the network configuration.
     */
    tgwStatus?: tgwStatus;
    /**
     * The status of DNS configuration.
     */
    dnsStatus?: dnsStatus;
    /**
     * Specifies the error message that appears if a flow fails. 
     */
    errorMessage?: EnvironmentErrorMessage;
    /**
     * A description of the kdb environment.
     */
    description?: Description;
    /**
     * The Amazon Resource Name (ARN) of your kdb environment.
     */
    environmentArn?: EnvironmentArn;
    /**
     * The unique identifier of the KMS key.
     */
    kmsKeyId?: KmsKeyId;
    /**
     * A unique identifier for the AWS environment infrastructure account.
     */
    dedicatedServiceAccountId?: IdType;
    /**
     * Specifies the transit gateway and network configuration to connect the kdb environment to an internal network.
     */
    transitGatewayConfiguration?: TransitGatewayConfiguration;
    /**
     * A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.
     */
    customDNSConfiguration?: CustomDNSConfiguration;
    /**
     * The timestamp at which the kdb environment was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    creationTimestamp?: Timestamp;
    /**
     * The timestamp at which the kdb environment was modified in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    updateTimestamp?: Timestamp;
    /**
     * The identifier of the availability zones where subnets for the environment are created.
     */
    availabilityZoneIds?: AvailabilityZoneIds;
    /**
     * The Amazon Resource Name (ARN) of the certificate authority:
     */
    certificateAuthorityArn?: stringValueLength1to255;
  }
  export type KxEnvironmentId = string;
  export type KxEnvironmentList = KxEnvironment[];
  export type KxEnvironmentName = string;
  export type KxHostType = string;
  export interface KxNAS1Configuration {
    /**
     *  The type of the network attached storage. 
     */
    type?: KxNAS1Type;
    /**
     *  The size of the network attached storage.
     */
    size?: KxNAS1Size;
  }
  export type KxNAS1Size = number;
  export type KxNAS1Type = "SSD_1000"|"SSD_250"|"HDD_12"|string;
  export interface KxNode {
    /**
     * A unique identifier for the node.
     */
    nodeId?: KxClusterNodeIdString;
    /**
     * The identifier of the availability zones where subnets for the environment are created.
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * The time when a particular node is started. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    launchTime?: Timestamp;
  }
  export type KxNodeSummaries = KxNode[];
  export interface KxSavedownStorageConfiguration {
    /**
     * The type of writeable storage space for temporarily storing your savedown data. The valid values are:   SDS01 – This type represents 3000 IOPS and io2 ebs volume type.  
     */
    type?: KxSavedownStorageType;
    /**
     * The size of temporary storage in gibibytes.
     */
    size?: KxSavedownStorageSize;
    /**
     *  The name of the kdb volume that you want to use as writeable save-down storage for clusters. 
     */
    volumeName?: KxVolumeName;
  }
  export type KxSavedownStorageSize = number;
  export type KxSavedownStorageType = "SDS01"|string;
  export interface KxScalingGroup {
    /**
     * A unique identifier for the kdb scaling group. 
     */
    scalingGroupName?: KxScalingGroupName;
    /**
     *  The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed. 
     */
    hostType?: KxHostType;
    /**
     *  The list of clusters currently active in a given scaling group. 
     */
    clusters?: KxClusterNameList;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     *  The status of scaling groups. 
     */
    status?: KxScalingGroupStatus;
    /**
     *  The error message when a failed state occurs. 
     */
    statusReason?: KxClusterStatusReason;
    /**
     *  The last time that the scaling group was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  The timestamp at which the scaling group was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    createdTimestamp?: Timestamp;
  }
  export interface KxScalingGroupConfiguration {
    /**
     * A unique identifier for the kdb scaling group. 
     */
    scalingGroupName: KxScalingGroupName;
    /**
     *  An optional hard limit on the amount of memory a kdb cluster can use. 
     */
    memoryLimit?: MemoryMib;
    /**
     *  A reservation of the minimum amount of memory that should be available on the scaling group for a kdb cluster to be successfully placed in a scaling group. 
     */
    memoryReservation: MemoryMib;
    /**
     *  The number of kdb cluster nodes. 
     */
    nodeCount: ClusterNodeCount;
    /**
     *  The number of vCPUs that you want to reserve for each node of this kdb cluster on the scaling group host. 
     */
    cpu?: CpuCount;
  }
  export type KxScalingGroupList = KxScalingGroup[];
  export type KxScalingGroupName = string;
  export type KxScalingGroupStatus = "CREATING"|"CREATE_FAILED"|"ACTIVE"|"DELETING"|"DELETED"|"DELETE_FAILED"|string;
  export interface KxUser {
    /**
     *  The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide. 
     */
    userArn?: KxUserArn;
    /**
     * A unique identifier for the user.
     */
    userName?: KxUserNameString;
    /**
     * The IAM role ARN that is associated with the user.
     */
    iamRole?: RoleArn;
    /**
     * The timestamp at which the kdb user was created. 
     */
    createTimestamp?: Timestamp;
    /**
     * The timestamp at which the kdb user was updated. 
     */
    updateTimestamp?: Timestamp;
  }
  export type KxUserArn = string;
  export type KxUserList = KxUser[];
  export type KxUserNameString = string;
  export interface KxVolume {
    /**
     * A unique identifier for the volume.
     */
    volumeName?: KxVolumeName;
    /**
     *  The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. 
     */
    volumeType?: KxVolumeType;
    /**
     * The status of volume.   CREATING – The volume creation is in progress.   CREATE_FAILED – The volume creation has failed.   ACTIVE – The volume is active.   UPDATING – The volume is in the process of being updated.   UPDATE_FAILED – The update action failed.   UPDATED – The volume is successfully updated.   DELETING – The volume is in the process of being deleted.   DELETE_FAILED – The system failed to delete the volume.   DELETED – The volume is successfully deleted.  
     */
    status?: KxVolumeStatus;
    /**
     *  A description of the volume. 
     */
    description?: Description;
    /**
     * The error message when a failed state occurs. 
     */
    statusReason?: KxVolumeStatusReason;
    /**
     *  The number of availability zones assigned to the volume. Currently, only SINGLE is supported. 
     */
    azMode?: KxAzMode;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneIds?: AvailabilityZoneIds;
    /**
     *  The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * The last time that the volume was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
  }
  export type KxVolumeArn = string;
  export type KxVolumeName = string;
  export type KxVolumeStatus = "CREATING"|"CREATE_FAILED"|"ACTIVE"|"UPDATING"|"UPDATED"|"UPDATE_FAILED"|"DELETING"|"DELETED"|"DELETE_FAILED"|string;
  export type KxVolumeStatusReason = string;
  export type KxVolumeType = "NAS_1"|string;
  export type KxVolumes = KxVolume[];
  export interface ListEnvironmentsRequest {
    /**
     * A token generated by FinSpace that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the nextTokennextToken value from the response object of the previous page call.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: ResultLimit;
  }
  export interface ListEnvironmentsResponse {
    /**
     * A list of all of your FinSpace environments.
     */
    environments?: EnvironmentList;
    /**
     * A token that you can use in a subsequent call to retrieve the next set of results.
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxChangesetsRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: EnvironmentId;
    /**
     * The name of the kdb database.
     */
    databaseName: DatabaseName;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: MaxResults;
  }
  export interface ListKxChangesetsResponse {
    /**
     * A list of changesets for a database.
     */
    kxChangesets?: KxChangesets;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxClusterNodesRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: KxEnvironmentId;
    /**
     * A unique name for the cluster.
     */
    clusterName: KxClusterName;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: ResultLimit;
  }
  export interface ListKxClusterNodesResponse {
    /**
     * A list of nodes associated with the cluster.
     */
    nodes?: KxNodeSummaries;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxClustersRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: KxEnvironmentId;
    /**
     * Specifies the type of KDB database that is being created. The following types are available:    HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.   RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter.   GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.   GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode.   Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.  
     */
    clusterType?: KxClusterType;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: MaxResults;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxClustersResponse {
    /**
     * Lists the cluster details.
     */
    kxClusterSummaries?: KxClusters;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxDatabasesRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: EnvironmentId;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: MaxResults;
  }
  export interface ListKxDatabasesResponse {
    /**
     * A list of databases in the kdb environment.
     */
    kxDatabases?: KxDatabases;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxDataviewsRequest {
    /**
     * A unique identifier for the kdb environment, for which you want to retrieve a list of dataviews.
     */
    environmentId: EnvironmentId;
    /**
     *  The name of the database where the dataviews were created.
     */
    databaseName: DatabaseName;
    /**
     *  A token that indicates where a results page should begin. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: MaxResults;
  }
  export interface ListKxDataviewsResponse {
    /**
     *  The list of kdb dataviews that are currently active for the given database. 
     */
    kxDataviews?: KxDataviews;
    /**
     *  A token that indicates where a results page should begin. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxEnvironmentsRequest {
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListKxEnvironmentsResponse {
    /**
     * A list of environments in an account.
     */
    environments?: KxEnvironmentList;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxScalingGroupsRequest {
    /**
     * A unique identifier for the kdb environment, for which you want to retrieve a list of scaling groups.
     */
    environmentId: KxEnvironmentId;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: MaxResults;
    /**
     *  A token that indicates where a results page should begin. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxScalingGroupsResponse {
    /**
     *  A list of scaling groups available in a kdb environment.
     */
    scalingGroups?: KxScalingGroupList;
    /**
     *  A token that indicates where a results page should begin. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxUsersRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: ResultLimit;
  }
  export interface ListKxUsersResponse {
    /**
     * A list of users in a kdb environment.
     */
    users?: KxUserList;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListKxVolumesRequest {
    /**
     * A unique identifier for the kdb environment, whose clusters can attach to the volume. 
     */
    environmentId: KxEnvironmentId;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: MaxResults;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     *  The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. 
     */
    volumeType?: KxVolumeType;
  }
  export interface ListKxVolumesResponse {
    /**
     *  A summary of volumes. 
     */
    kxVolumeSummaries?: KxVolumes;
    /**
     * A token that indicates where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name of the resource.
     */
    resourceArn: FinSpaceTaggableArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of all tags for a resource.
     */
    tags?: TagMap;
  }
  export type MaxResults = number;
  export type MemoryMib = number;
  export type NameString = string;
  export type NetworkACLConfiguration = NetworkACLEntry[];
  export interface NetworkACLEntry {
    /**
     *  The rule number for the entry. For example 100. All the network ACL entries are processed in ascending order by rule number. 
     */
    ruleNumber: RuleNumber;
    /**
     *  The protocol number. A value of -1 means all the protocols. 
     */
    protocol: Protocol;
    /**
     *  Indicates whether to allow or deny the traffic that matches the rule. 
     */
    ruleAction: RuleAction;
    /**
     *  The range of ports the rule applies to. 
     */
    portRange?: PortRange;
    /**
     *  Defines the ICMP protocol that consists of the ICMP type and code. 
     */
    icmpTypeCode?: IcmpTypeCode;
    /**
     *  The IPv4 network range to allow or deny, in CIDR notation. For example, 172.16.0.0/24. We modify the specified CIDR block to its canonical form. For example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18. 
     */
    cidrBlock: ValidCIDRBlock;
  }
  export type NodeCount = number;
  export type NodeType = string;
  export type PaginationToken = string;
  export type Port = number;
  export interface PortRange {
    /**
     *  The first port in the range. 
     */
    from: Port;
    /**
     *  The last port in the range. 
     */
    to: Port;
  }
  export type Protocol = string;
  export type ReleaseLabel = string;
  export type ResultLimit = number;
  export type RoleArn = string;
  export type RuleAction = "allow"|"deny"|string;
  export type RuleNumber = number;
  export type S3Bucket = string;
  export type S3Key = string;
  export type S3ObjectVersion = string;
  export type S3Path = string;
  export type SamlMetadataDocument = string;
  export type SecurityGroupIdList = SecurityGroupIdString[];
  export type SecurityGroupIdString = string;
  export type SegmentConfigurationDbPathList = DbPath[];
  export type SignedKxConnectionString = string;
  export type SmsDomainUrl = string;
  export type SubnetIdList = SubnetIdString[];
  export type SubnetIdString = string;
  export interface SuperuserParameters {
    /**
     * The email address of the superuser.
     */
    emailAddress: EmailId;
    /**
     * The first name of the superuser.
     */
    firstName: NameString;
    /**
     * The last name of the superuser.
     */
    lastName: NameString;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the resource.
     */
    resourceArn: FinSpaceTaggableArn;
    /**
     * One or more tags to be assigned to the resource.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface TickerplantLogConfiguration {
    /**
     *  The name of the volumes for tickerplant logs. 
     */
    tickerplantLogVolumes?: TickerplantLogVolumes;
  }
  export type TickerplantLogVolumes = VolumeName[];
  export type Timestamp = Date;
  export interface TransitGatewayConfiguration {
    /**
     * The identifier of the transit gateway created by the customer to connect outbound traffics from kdb network to your internal network.
     */
    transitGatewayID: TransitGatewayID;
    /**
     * The routing CIDR on behalf of kdb environment. It could be any "/26 range in the 100.64.0.0 CIDR space. After providing, it will be added to the customer's transit gateway routing table so that the traffics could be routed to kdb network.
     */
    routableCIDRSpace: ValidCIDRSpace;
    /**
     *  The rules that define how you manage the outbound traffic from kdb network to your internal network. 
     */
    attachmentNetworkAclConfiguration?: NetworkACLConfiguration;
  }
  export type TransitGatewayID = string;
  export interface UntagResourceRequest {
    /**
     * A FinSpace resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN).
     */
    resourceArn: FinSpaceTaggableArn;
    /**
     * The tag keys (names) of one or more tags to be removed.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateEnvironmentRequest {
    /**
     * The identifier of the FinSpace environment.
     */
    environmentId: IdType;
    /**
     * The name of the environment.
     */
    name?: EnvironmentName;
    /**
     * The description of the environment.
     */
    description?: Description;
    /**
     * Authentication mode for the environment.    FEDERATED - Users access FinSpace through Single Sign On (SSO) via your Identity provider.    LOCAL - Users access FinSpace via email and password managed within the FinSpace environment.  
     */
    federationMode?: FederationMode;
    federationParameters?: FederationParameters;
  }
  export interface UpdateEnvironmentResponse {
    /**
     * Returns the FinSpace environment object.
     */
    environment?: Environment;
  }
  export interface UpdateKxClusterCodeConfigurationRequest {
    /**
     *  A unique identifier of the kdb environment. 
     */
    environmentId: KxEnvironmentId;
    /**
     * The name of the cluster.
     */
    clusterName: KxClusterName;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientTokenString;
    code: CodeConfiguration;
    /**
     * Specifies a Q program that will be run at launch of a cluster. It is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q. You cannot update this parameter for a NO_RESTART deployment.
     */
    initializationScript?: InitializationScriptFilePath;
    /**
     * Specifies the key-value pairs to make them available inside the cluster. You cannot update this parameter for a NO_RESTART deployment.
     */
    commandLineArguments?: KxCommandLineArguments;
    /**
     *  The configuration that allows you to choose how you want to update the code on a cluster. 
     */
    deploymentConfiguration?: KxClusterCodeDeploymentConfiguration;
  }
  export interface UpdateKxClusterCodeConfigurationResponse {
  }
  export interface UpdateKxClusterDatabasesRequest {
    /**
     * The unique identifier of a kdb environment.
     */
    environmentId: KxEnvironmentId;
    /**
     * A unique name for the cluster that you want to modify.
     */
    clusterName: KxClusterName;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientTokenString;
    /**
     *  The structure of databases mounted on the cluster.
     */
    databases: KxDatabaseConfigurations;
    /**
     *  The configuration that allows you to choose how you want to update the databases on a cluster. 
     */
    deploymentConfiguration?: KxDeploymentConfiguration;
  }
  export interface UpdateKxClusterDatabasesResponse {
  }
  export interface UpdateKxDatabaseRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: EnvironmentId;
    /**
     * The name of the kdb database.
     */
    databaseName: DatabaseName;
    /**
     * A description of the database.
     */
    description?: Description;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken: ClientTokenString;
  }
  export interface UpdateKxDatabaseResponse {
    /**
     * The name of the kdb database.
     */
    databaseName?: DatabaseName;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: EnvironmentId;
    /**
     * A description of the database.
     */
    description?: Description;
    /**
     * The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
  }
  export interface UpdateKxDataviewRequest {
    /**
     * A unique identifier for the kdb environment, where you want to update the dataview.
     */
    environmentId: EnvironmentId;
    /**
     *  The name of the database.
     */
    databaseName: DatabaseName;
    /**
     * The name of the dataview that you want to update.
     */
    dataviewName: KxDataviewName;
    /**
     *  The description for a dataview. 
     */
    description?: Description;
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     *  The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. 
     */
    segmentConfigurations?: KxDataviewSegmentConfigurationList;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken: ClientTokenString;
  }
  export interface UpdateKxDataviewResponse {
    /**
     * A unique identifier for the kdb environment, where you want to update the dataview.
     */
    environmentId?: EnvironmentId;
    /**
     *  The name of the database. 
     */
    databaseName?: DatabaseName;
    /**
     *  The name of the database under which the dataview was created. 
     */
    dataviewName?: KxDataviewName;
    /**
     * The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE – Assigns one availability zone per cluster.    MULTI – Assigns all the availability zones per cluster.  
     */
    azMode?: KxAzMode;
    /**
     *  The identifier of the availability zones. 
     */
    availabilityZoneId?: AvailabilityZoneId;
    /**
     * A unique identifier for the changeset.
     */
    changesetId?: ChangesetId;
    /**
     *  The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. 
     */
    segmentConfigurations?: KxDataviewSegmentConfigurationList;
    /**
     *  The current active changeset versions of the database on the given dataview. 
     */
    activeVersions?: KxDataviewActiveVersionList;
    /**
     *  The status of dataview creation.    CREATING – The dataview creation is in progress.    UPDATING – The dataview is in the process of being updated.    ACTIVE – The dataview is active.  
     */
    status?: KxDataviewStatus;
    /**
     * The option to specify whether you want to apply all the future additions and corrections automatically to the dataview when new changesets are ingested. The default value is false.
     */
    autoUpdate?: booleanValue;
    /**
     * A description of the dataview.
     */
    description?: Description;
    /**
     *  The timestamp at which the dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    createdTimestamp?: Timestamp;
    /**
     *  The last time that the dataview was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. 
     */
    lastModifiedTimestamp?: Timestamp;
  }
  export interface UpdateKxEnvironmentNetworkRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
    /**
     * Specifies the transit gateway and network configuration to connect the kdb environment to an internal network.
     */
    transitGatewayConfiguration?: TransitGatewayConfiguration;
    /**
     * A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.
     */
    customDNSConfiguration?: CustomDNSConfiguration;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
  }
  export interface UpdateKxEnvironmentNetworkResponse {
    /**
     * The name of the kdb environment.
     */
    name?: KxEnvironmentName;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: IdType;
    /**
     * The unique identifier of the AWS account that is used to create the kdb environment.
     */
    awsAccountId?: IdType;
    /**
     * The status of the kdb environment.
     */
    status?: EnvironmentStatus;
    /**
     * The status of the network configuration.
     */
    tgwStatus?: tgwStatus;
    /**
     * The status of DNS configuration.
     */
    dnsStatus?: dnsStatus;
    /**
     * Specifies the error message that appears if a flow fails.
     */
    errorMessage?: EnvironmentErrorMessage;
    /**
     * The description of the environment.
     */
    description?: Description;
    /**
     * The ARN identifier of the environment.
     */
    environmentArn?: EnvironmentArn;
    /**
     * The KMS key ID to encrypt your data in the FinSpace environment.
     */
    kmsKeyId?: KmsKeyId;
    /**
     * A unique identifier for the AWS environment infrastructure account.
     */
    dedicatedServiceAccountId?: IdType;
    transitGatewayConfiguration?: TransitGatewayConfiguration;
    /**
     * A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.
     */
    customDNSConfiguration?: CustomDNSConfiguration;
    /**
     * The timestamp at which the kdb environment was created in FinSpace. 
     */
    creationTimestamp?: Timestamp;
    /**
     * The timestamp at which the kdb environment was updated. 
     */
    updateTimestamp?: Timestamp;
    /**
     * The identifier of the availability zones where subnets for the environment are created.
     */
    availabilityZoneIds?: AvailabilityZoneIds;
  }
  export interface UpdateKxEnvironmentRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
    /**
     * The name of the kdb environment.
     */
    name?: KxEnvironmentName;
    /**
     * A description of the kdb environment.
     */
    description?: Description;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
  }
  export interface UpdateKxEnvironmentResponse {
    /**
     * The name of the kdb environment.
     */
    name?: KxEnvironmentName;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: IdType;
    /**
     * The unique identifier of the AWS account that is used to create the kdb environment.
     */
    awsAccountId?: IdType;
    /**
     * The status of the kdb environment.
     */
    status?: EnvironmentStatus;
    /**
     * The status of the network configuration.
     */
    tgwStatus?: tgwStatus;
    /**
     * The status of DNS configuration.
     */
    dnsStatus?: dnsStatus;
    /**
     * Specifies the error message that appears if a flow fails.
     */
    errorMessage?: EnvironmentErrorMessage;
    /**
     * The description of the environment.
     */
    description?: Description;
    /**
     * The ARN identifier of the environment.
     */
    environmentArn?: EnvironmentArn;
    /**
     * The KMS key ID to encrypt your data in the FinSpace environment.
     */
    kmsKeyId?: KmsKeyId;
    /**
     * A unique identifier for the AWS environment infrastructure account.
     */
    dedicatedServiceAccountId?: IdType;
    transitGatewayConfiguration?: TransitGatewayConfiguration;
    /**
     * A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.
     */
    customDNSConfiguration?: CustomDNSConfiguration;
    /**
     * The timestamp at which the kdb environment was created in FinSpace. 
     */
    creationTimestamp?: Timestamp;
    /**
     * The timestamp at which the kdb environment was updated. 
     */
    updateTimestamp?: Timestamp;
    /**
     * The identifier of the availability zones where subnets for the environment are created.
     */
    availabilityZoneIds?: AvailabilityZoneIds;
  }
  export interface UpdateKxUserRequest {
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId: IdType;
    /**
     * A unique identifier for the user.
     */
    userName: KxUserNameString;
    /**
     * The IAM role ARN that is associated with the user.
     */
    iamRole: RoleArn;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientToken;
  }
  export interface UpdateKxUserResponse {
    /**
     * A unique identifier for the user.
     */
    userName?: KxUserNameString;
    /**
     *  The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide. 
     */
    userArn?: KxUserArn;
    /**
     * A unique identifier for the kdb environment.
     */
    environmentId?: IdType;
    /**
     * The IAM role ARN that is associated with the user.
     */
    iamRole?: RoleArn;
  }
  export interface UpdateKxVolumeRequest {
    /**
     * A unique identifier for the kdb environment where you created the storage volume. 
     */
    environmentId: KxEnvironmentId;
    /**
     *  A unique identifier for the volume.
     */
    volumeName: KxVolumeName;
    /**
     *  A description of the volume. 
     */
    description?: Description;
    /**
     * A token that ensures idempotency. This token expires in 10 minutes.
     */
    clientToken?: ClientTokenString;
    /**
     *  Specifies the configuration for the Network attached storage (NAS_1) file system volume.
     */
    nas1Configuration?: KxNAS1Configuration;
  }
  export interface UpdateKxVolumeResponse {
    /**
     * A unique identifier for the kdb environment where you want to update the volume. 
     */
    environmentId?: KxEnvironmentId;
    /**
     * A unique identifier for the volume that you want to update.
     */
    volumeName?: KxVolumeName;
    /**
     *  The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. 
     */
    volumeType?: KxVolumeType;
    /**
     *  The ARN identifier of the volume. 
     */
    volumeArn?: KxVolumeArn;
    /**
     *  Specifies the configuration for the Network attached storage (NAS_1) file system volume.
     */
    nas1Configuration?: KxNAS1Configuration;
    /**
     * The status of the volume.   CREATING – The volume creation is in progress.   CREATE_FAILED – The volume creation has failed.   ACTIVE – The volume is active.   UPDATING – The volume is in the process of being updated.   UPDATE_FAILED – The update action failed.   UPDATED – The volume is successfully updated.   DELETING – The volume is in the process of being deleted.   DELETE_FAILED – The system failed to delete the volume.   DELETED – The volume is successfully deleted.  
     */
    status?: KxVolumeStatus;
    /**
     *  The description for the volume. 
     */
    description?: Description;
    /**
     * The error message when a failed state occurs. 
     */
    statusReason?: KxVolumeStatusReason;
    /**
     *  The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createdTimestamp?: Timestamp;
    /**
     * The number of availability zones you want to assign per cluster. Currently, FinSpace only support SINGLE for volumes.
     */
    azMode?: KxAzMode;
    /**
     * The identifier of the availability zones.
     */
    availabilityZoneIds?: AvailabilityZoneIds;
    /**
     * The last time that the volume was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTimestamp?: Timestamp;
    /**
     *  Specifies the clusters that a volume is attached to. 
     */
    attachedClusters?: KxAttachedClusters;
  }
  export type ValidCIDRBlock = string;
  export type ValidCIDRSpace = string;
  export type ValidHostname = string;
  export type ValidIPAddress = string;
  export type VersionId = string;
  export interface Volume {
    /**
     * A unique identifier for the volume.
     */
    volumeName?: VolumeName;
    /**
     *  The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. 
     */
    volumeType?: VolumeType;
  }
  export type VolumeName = string;
  export type VolumeType = "NAS_1"|string;
  export type Volumes = Volume[];
  export interface VpcConfiguration {
    /**
     * The identifier of the VPC endpoint.
     */
    vpcId?: VpcIdString;
    /**
     * The unique identifier of the VPC security group applied to the VPC endpoint ENI for the cluster.
     */
    securityGroupIds?: SecurityGroupIdList;
    /**
     * The identifier of the subnet that the Privatelink VPC endpoint uses to connect to the cluster.
     */
    subnetIds?: SubnetIdList;
    /**
     * The IP address type for cluster network configuration parameters. The following type is available:   IP_V4 – IP address version 4  
     */
    ipAddressType?: IPAddressType;
  }
  export type VpcIdString = string;
  export type arn = string;
  export type booleanValue = boolean;
  export type dnsStatus = "NONE"|"UPDATE_REQUESTED"|"UPDATING"|"FAILED_UPDATE"|"SUCCESSFULLY_UPDATED"|string;
  export type numBytes = number;
  export type numChangesets = number;
  export type numFiles = number;
  export type stringValueLength1to255 = string;
  export type tgwStatus = "NONE"|"UPDATE_REQUESTED"|"UPDATING"|"FAILED_UPDATE"|"SUCCESSFULLY_UPDATED"|string;
  export type url = string;
  export type urn = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-03-12"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Finspace client.
   */
  export import Types = Finspace;
}
export = Finspace;
