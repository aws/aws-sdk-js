import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class ElastiCache extends Service {
  /**
   * The AddTagsToResource action adds up to 10 cost allocation tags to the named resource. A cost allocation tag is a key-value pair where the key and value are case-sensitive. Cost allocation tags can be used to categorize and track your AWS costs.  When you apply tags to your ElastiCache resources, AWS generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see Using Cost Allocation Tags in Amazon ElastiCache in the ElastiCache User Guide.
   */
  addTagsToResource(params: ElastiCache.AddTagsToResourceMessage, callback?: (err: AWSError, data: ElastiCache.TagListMessage) => void): Request<ElastiCache.TagListMessage, AWSError>;
  /**
   * The AddTagsToResource action adds up to 10 cost allocation tags to the named resource. A cost allocation tag is a key-value pair where the key and value are case-sensitive. Cost allocation tags can be used to categorize and track your AWS costs.  When you apply tags to your ElastiCache resources, AWS generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see Using Cost Allocation Tags in Amazon ElastiCache in the ElastiCache User Guide.
   */
  addTagsToResource(callback?: (err: AWSError, data: ElastiCache.TagListMessage) => void): Request<ElastiCache.TagListMessage, AWSError>;
  /**
   * The AuthorizeCacheSecurityGroupIngress action allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.  You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region. 
   */
  authorizeCacheSecurityGroupIngress(params: ElastiCache.AuthorizeCacheSecurityGroupIngressMessage, callback?: (err: AWSError, data: ElastiCache.AuthorizeCacheSecurityGroupIngressResult) => void): Request<ElastiCache.AuthorizeCacheSecurityGroupIngressResult, AWSError>;
  /**
   * The AuthorizeCacheSecurityGroupIngress action allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.  You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region. 
   */
  authorizeCacheSecurityGroupIngress(callback?: (err: AWSError, data: ElastiCache.AuthorizeCacheSecurityGroupIngressResult) => void): Request<ElastiCache.AuthorizeCacheSecurityGroupIngressResult, AWSError>;
  /**
   * The CopySnapshot action makes a copy of an existing snapshot.  Users or groups that have permissions to use the CopySnapshot API can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the CopySnapshot API. For more information about using IAM to control the use of ElastiCache APIs, see Exporting Snapshots and Authentication &amp; Access Control.   Erorr Message:     Error Message: The authenticated user does not have sufficient permissions to perform the desired activity.  Solution: Contact your system administrator to get the needed permissions.  
   */
  copySnapshot(params: ElastiCache.CopySnapshotMessage, callback?: (err: AWSError, data: ElastiCache.CopySnapshotResult) => void): Request<ElastiCache.CopySnapshotResult, AWSError>;
  /**
   * The CopySnapshot action makes a copy of an existing snapshot.  Users or groups that have permissions to use the CopySnapshot API can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the CopySnapshot API. For more information about using IAM to control the use of ElastiCache APIs, see Exporting Snapshots and Authentication &amp; Access Control.   Erorr Message:     Error Message: The authenticated user does not have sufficient permissions to perform the desired activity.  Solution: Contact your system administrator to get the needed permissions.  
   */
  copySnapshot(callback?: (err: AWSError, data: ElastiCache.CopySnapshotResult) => void): Request<ElastiCache.CopySnapshotResult, AWSError>;
  /**
   * The CreateCacheCluster action creates a cache cluster. All nodes in the cache cluster run the same protocol-compliant cache engine software, either Memcached or Redis.
   */
  createCacheCluster(params: ElastiCache.CreateCacheClusterMessage, callback?: (err: AWSError, data: ElastiCache.CreateCacheClusterResult) => void): Request<ElastiCache.CreateCacheClusterResult, AWSError>;
  /**
   * The CreateCacheCluster action creates a cache cluster. All nodes in the cache cluster run the same protocol-compliant cache engine software, either Memcached or Redis.
   */
  createCacheCluster(callback?: (err: AWSError, data: ElastiCache.CreateCacheClusterResult) => void): Request<ElastiCache.CreateCacheClusterResult, AWSError>;
  /**
   * The CreateCacheParameterGroup action creates a new cache parameter group. A cache parameter group is a collection of parameters that you apply to all of the nodes in a cache cluster.
   */
  createCacheParameterGroup(params: ElastiCache.CreateCacheParameterGroupMessage, callback?: (err: AWSError, data: ElastiCache.CreateCacheParameterGroupResult) => void): Request<ElastiCache.CreateCacheParameterGroupResult, AWSError>;
  /**
   * The CreateCacheParameterGroup action creates a new cache parameter group. A cache parameter group is a collection of parameters that you apply to all of the nodes in a cache cluster.
   */
  createCacheParameterGroup(callback?: (err: AWSError, data: ElastiCache.CreateCacheParameterGroupResult) => void): Request<ElastiCache.CreateCacheParameterGroupResult, AWSError>;
  /**
   * The CreateCacheSecurityGroup action creates a new cache security group. Use a cache security group to control access to one or more cache clusters. Cache security groups are only used when you are creating a cache cluster outside of an Amazon Virtual Private Cloud (VPC). If you are creating a cache cluster inside of a VPC, use a cache subnet group instead. For more information, see CreateCacheSubnetGroup.
   */
  createCacheSecurityGroup(params: ElastiCache.CreateCacheSecurityGroupMessage, callback?: (err: AWSError, data: ElastiCache.CreateCacheSecurityGroupResult) => void): Request<ElastiCache.CreateCacheSecurityGroupResult, AWSError>;
  /**
   * The CreateCacheSecurityGroup action creates a new cache security group. Use a cache security group to control access to one or more cache clusters. Cache security groups are only used when you are creating a cache cluster outside of an Amazon Virtual Private Cloud (VPC). If you are creating a cache cluster inside of a VPC, use a cache subnet group instead. For more information, see CreateCacheSubnetGroup.
   */
  createCacheSecurityGroup(callback?: (err: AWSError, data: ElastiCache.CreateCacheSecurityGroupResult) => void): Request<ElastiCache.CreateCacheSecurityGroupResult, AWSError>;
  /**
   * The CreateCacheSubnetGroup action creates a new cache subnet group. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (VPC).
   */
  createCacheSubnetGroup(params: ElastiCache.CreateCacheSubnetGroupMessage, callback?: (err: AWSError, data: ElastiCache.CreateCacheSubnetGroupResult) => void): Request<ElastiCache.CreateCacheSubnetGroupResult, AWSError>;
  /**
   * The CreateCacheSubnetGroup action creates a new cache subnet group. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (VPC).
   */
  createCacheSubnetGroup(callback?: (err: AWSError, data: ElastiCache.CreateCacheSubnetGroupResult) => void): Request<ElastiCache.CreateCacheSubnetGroupResult, AWSError>;
  /**
   * The CreateReplicationGroup action creates a replication group. A replication group is a collection of cache clusters, where one of the cache clusters is a read/write primary and the others are read-only replicas. Writes to the primary are automatically propagated to the replicas. When you create a replication group, you must specify an existing cache cluster that is in the primary role. When the replication group has been successfully created, you can add one or more read replica replicas to it, up to a total of five read replicas.  This action is valid only for Redis. 
   */
  createReplicationGroup(params: ElastiCache.CreateReplicationGroupMessage, callback?: (err: AWSError, data: ElastiCache.CreateReplicationGroupResult) => void): Request<ElastiCache.CreateReplicationGroupResult, AWSError>;
  /**
   * The CreateReplicationGroup action creates a replication group. A replication group is a collection of cache clusters, where one of the cache clusters is a read/write primary and the others are read-only replicas. Writes to the primary are automatically propagated to the replicas. When you create a replication group, you must specify an existing cache cluster that is in the primary role. When the replication group has been successfully created, you can add one or more read replica replicas to it, up to a total of five read replicas.  This action is valid only for Redis. 
   */
  createReplicationGroup(callback?: (err: AWSError, data: ElastiCache.CreateReplicationGroupResult) => void): Request<ElastiCache.CreateReplicationGroupResult, AWSError>;
  /**
   * The CreateSnapshot action creates a copy of an entire cache cluster at a specific moment in time.
   */
  createSnapshot(params: ElastiCache.CreateSnapshotMessage, callback?: (err: AWSError, data: ElastiCache.CreateSnapshotResult) => void): Request<ElastiCache.CreateSnapshotResult, AWSError>;
  /**
   * The CreateSnapshot action creates a copy of an entire cache cluster at a specific moment in time.
   */
  createSnapshot(callback?: (err: AWSError, data: ElastiCache.CreateSnapshotResult) => void): Request<ElastiCache.CreateSnapshotResult, AWSError>;
  /**
   * The DeleteCacheCluster action deletes a previously provisioned cache cluster. DeleteCacheCluster deletes all associated cache nodes, node endpoints and the cache cluster itself. When you receive a successful response from this action, Amazon ElastiCache immediately begins deleting the cache cluster; you cannot cancel or revert this action. This API cannot be used to delete a cache cluster that is the last read replica of a replication group that has Multi-AZ mode enabled.
   */
  deleteCacheCluster(params: ElastiCache.DeleteCacheClusterMessage, callback?: (err: AWSError, data: ElastiCache.DeleteCacheClusterResult) => void): Request<ElastiCache.DeleteCacheClusterResult, AWSError>;
  /**
   * The DeleteCacheCluster action deletes a previously provisioned cache cluster. DeleteCacheCluster deletes all associated cache nodes, node endpoints and the cache cluster itself. When you receive a successful response from this action, Amazon ElastiCache immediately begins deleting the cache cluster; you cannot cancel or revert this action. This API cannot be used to delete a cache cluster that is the last read replica of a replication group that has Multi-AZ mode enabled.
   */
  deleteCacheCluster(callback?: (err: AWSError, data: ElastiCache.DeleteCacheClusterResult) => void): Request<ElastiCache.DeleteCacheClusterResult, AWSError>;
  /**
   * The DeleteCacheParameterGroup action deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters.
   */
  deleteCacheParameterGroup(params: ElastiCache.DeleteCacheParameterGroupMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The DeleteCacheParameterGroup action deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters.
   */
  deleteCacheParameterGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The DeleteCacheSecurityGroup action deletes a cache security group.  You cannot delete a cache security group if it is associated with any cache clusters. 
   */
  deleteCacheSecurityGroup(params: ElastiCache.DeleteCacheSecurityGroupMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The DeleteCacheSecurityGroup action deletes a cache security group.  You cannot delete a cache security group if it is associated with any cache clusters. 
   */
  deleteCacheSecurityGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The DeleteCacheSubnetGroup action deletes a cache subnet group.  You cannot delete a cache subnet group if it is associated with any cache clusters. 
   */
  deleteCacheSubnetGroup(params: ElastiCache.DeleteCacheSubnetGroupMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The DeleteCacheSubnetGroup action deletes a cache subnet group.  You cannot delete a cache subnet group if it is associated with any cache clusters. 
   */
  deleteCacheSubnetGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The DeleteReplicationGroup action deletes an existing replication group. By default, this action deletes the entire replication group, including the primary cluster and all of the read replicas. You can optionally delete only the read replicas, while retaining the primary cluster. When you receive a successful response from this action, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this action.
   */
  deleteReplicationGroup(params: ElastiCache.DeleteReplicationGroupMessage, callback?: (err: AWSError, data: ElastiCache.DeleteReplicationGroupResult) => void): Request<ElastiCache.DeleteReplicationGroupResult, AWSError>;
  /**
   * The DeleteReplicationGroup action deletes an existing replication group. By default, this action deletes the entire replication group, including the primary cluster and all of the read replicas. You can optionally delete only the read replicas, while retaining the primary cluster. When you receive a successful response from this action, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this action.
   */
  deleteReplicationGroup(callback?: (err: AWSError, data: ElastiCache.DeleteReplicationGroupResult) => void): Request<ElastiCache.DeleteReplicationGroupResult, AWSError>;
  /**
   * The DeleteSnapshot action deletes an existing snapshot. When you receive a successful response from this action, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this action.
   */
  deleteSnapshot(params: ElastiCache.DeleteSnapshotMessage, callback?: (err: AWSError, data: ElastiCache.DeleteSnapshotResult) => void): Request<ElastiCache.DeleteSnapshotResult, AWSError>;
  /**
   * The DeleteSnapshot action deletes an existing snapshot. When you receive a successful response from this action, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this action.
   */
  deleteSnapshot(callback?: (err: AWSError, data: ElastiCache.DeleteSnapshotResult) => void): Request<ElastiCache.DeleteSnapshotResult, AWSError>;
  /**
   * The DescribeCacheClusters action returns information about all provisioned cache clusters if no cache cluster identifier is specified, or about a specific cache cluster if a cache cluster identifier is supplied. By default, abbreviated information about the cache clusters(s) will be returned. You can use the optional ShowDetails flag to retrieve detailed information about the cache nodes associated with the cache clusters. These details include the DNS address and port for the cache node endpoint. If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned. If the cluster is in the DELETING state, only cluster level information will be displayed. If cache nodes are currently being added to the cache cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the cache cluster state is available, the cluster is ready for use. If cache nodes are currently being removed from the cache cluster, no endpoint information for the removed nodes is displayed.
   */
  describeCacheClusters(params: ElastiCache.DescribeCacheClustersMessage, callback?: (err: AWSError, data: ElastiCache.CacheClusterMessage) => void): Request<ElastiCache.CacheClusterMessage, AWSError>;
  /**
   * The DescribeCacheClusters action returns information about all provisioned cache clusters if no cache cluster identifier is specified, or about a specific cache cluster if a cache cluster identifier is supplied. By default, abbreviated information about the cache clusters(s) will be returned. You can use the optional ShowDetails flag to retrieve detailed information about the cache nodes associated with the cache clusters. These details include the DNS address and port for the cache node endpoint. If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned. If the cluster is in the DELETING state, only cluster level information will be displayed. If cache nodes are currently being added to the cache cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the cache cluster state is available, the cluster is ready for use. If cache nodes are currently being removed from the cache cluster, no endpoint information for the removed nodes is displayed.
   */
  describeCacheClusters(callback?: (err: AWSError, data: ElastiCache.CacheClusterMessage) => void): Request<ElastiCache.CacheClusterMessage, AWSError>;
  /**
   * The DescribeCacheEngineVersions action returns a list of the available cache engines and their versions.
   */
  describeCacheEngineVersions(params: ElastiCache.DescribeCacheEngineVersionsMessage, callback?: (err: AWSError, data: ElastiCache.CacheEngineVersionMessage) => void): Request<ElastiCache.CacheEngineVersionMessage, AWSError>;
  /**
   * The DescribeCacheEngineVersions action returns a list of the available cache engines and their versions.
   */
  describeCacheEngineVersions(callback?: (err: AWSError, data: ElastiCache.CacheEngineVersionMessage) => void): Request<ElastiCache.CacheEngineVersionMessage, AWSError>;
  /**
   * The DescribeCacheParameterGroups action returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list will contain only the descriptions for that group.
   */
  describeCacheParameterGroups(params: ElastiCache.DescribeCacheParameterGroupsMessage, callback?: (err: AWSError, data: ElastiCache.CacheParameterGroupsMessage) => void): Request<ElastiCache.CacheParameterGroupsMessage, AWSError>;
  /**
   * The DescribeCacheParameterGroups action returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list will contain only the descriptions for that group.
   */
  describeCacheParameterGroups(callback?: (err: AWSError, data: ElastiCache.CacheParameterGroupsMessage) => void): Request<ElastiCache.CacheParameterGroupsMessage, AWSError>;
  /**
   * The DescribeCacheParameters action returns the detailed parameter list for a particular cache parameter group.
   */
  describeCacheParameters(params: ElastiCache.DescribeCacheParametersMessage, callback?: (err: AWSError, data: ElastiCache.CacheParameterGroupDetails) => void): Request<ElastiCache.CacheParameterGroupDetails, AWSError>;
  /**
   * The DescribeCacheParameters action returns the detailed parameter list for a particular cache parameter group.
   */
  describeCacheParameters(callback?: (err: AWSError, data: ElastiCache.CacheParameterGroupDetails) => void): Request<ElastiCache.CacheParameterGroupDetails, AWSError>;
  /**
   * The DescribeCacheSecurityGroups action returns a list of cache security group descriptions. If a cache security group name is specified, the list will contain only the description of that group.
   */
  describeCacheSecurityGroups(params: ElastiCache.DescribeCacheSecurityGroupsMessage, callback?: (err: AWSError, data: ElastiCache.CacheSecurityGroupMessage) => void): Request<ElastiCache.CacheSecurityGroupMessage, AWSError>;
  /**
   * The DescribeCacheSecurityGroups action returns a list of cache security group descriptions. If a cache security group name is specified, the list will contain only the description of that group.
   */
  describeCacheSecurityGroups(callback?: (err: AWSError, data: ElastiCache.CacheSecurityGroupMessage) => void): Request<ElastiCache.CacheSecurityGroupMessage, AWSError>;
  /**
   * The DescribeCacheSubnetGroups action returns a list of cache subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
   */
  describeCacheSubnetGroups(params: ElastiCache.DescribeCacheSubnetGroupsMessage, callback?: (err: AWSError, data: ElastiCache.CacheSubnetGroupMessage) => void): Request<ElastiCache.CacheSubnetGroupMessage, AWSError>;
  /**
   * The DescribeCacheSubnetGroups action returns a list of cache subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
   */
  describeCacheSubnetGroups(callback?: (err: AWSError, data: ElastiCache.CacheSubnetGroupMessage) => void): Request<ElastiCache.CacheSubnetGroupMessage, AWSError>;
  /**
   * The DescribeEngineDefaultParameters action returns the default engine and system parameter information for the specified cache engine.
   */
  describeEngineDefaultParameters(params: ElastiCache.DescribeEngineDefaultParametersMessage, callback?: (err: AWSError, data: ElastiCache.DescribeEngineDefaultParametersResult) => void): Request<ElastiCache.DescribeEngineDefaultParametersResult, AWSError>;
  /**
   * The DescribeEngineDefaultParameters action returns the default engine and system parameter information for the specified cache engine.
   */
  describeEngineDefaultParameters(callback?: (err: AWSError, data: ElastiCache.DescribeEngineDefaultParametersResult) => void): Request<ElastiCache.DescribeEngineDefaultParametersResult, AWSError>;
  /**
   * The DescribeEvents action returns events related to cache clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cache cluster, cache security group, or cache parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
   */
  describeEvents(params: ElastiCache.DescribeEventsMessage, callback?: (err: AWSError, data: ElastiCache.EventsMessage) => void): Request<ElastiCache.EventsMessage, AWSError>;
  /**
   * The DescribeEvents action returns events related to cache clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cache cluster, cache security group, or cache parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
   */
  describeEvents(callback?: (err: AWSError, data: ElastiCache.EventsMessage) => void): Request<ElastiCache.EventsMessage, AWSError>;
  /**
   * The DescribeReplicationGroups action returns information about a particular replication group. If no identifier is specified, DescribeReplicationGroups returns information about all replication groups.
   */
  describeReplicationGroups(params: ElastiCache.DescribeReplicationGroupsMessage, callback?: (err: AWSError, data: ElastiCache.ReplicationGroupMessage) => void): Request<ElastiCache.ReplicationGroupMessage, AWSError>;
  /**
   * The DescribeReplicationGroups action returns information about a particular replication group. If no identifier is specified, DescribeReplicationGroups returns information about all replication groups.
   */
  describeReplicationGroups(callback?: (err: AWSError, data: ElastiCache.ReplicationGroupMessage) => void): Request<ElastiCache.ReplicationGroupMessage, AWSError>;
  /**
   * The DescribeReservedCacheNodes action returns information about reserved cache nodes for this account, or about a specified reserved cache node.
   */
  describeReservedCacheNodes(params: ElastiCache.DescribeReservedCacheNodesMessage, callback?: (err: AWSError, data: ElastiCache.ReservedCacheNodeMessage) => void): Request<ElastiCache.ReservedCacheNodeMessage, AWSError>;
  /**
   * The DescribeReservedCacheNodes action returns information about reserved cache nodes for this account, or about a specified reserved cache node.
   */
  describeReservedCacheNodes(callback?: (err: AWSError, data: ElastiCache.ReservedCacheNodeMessage) => void): Request<ElastiCache.ReservedCacheNodeMessage, AWSError>;
  /**
   * The DescribeReservedCacheNodesOfferings action lists available reserved cache node offerings.
   */
  describeReservedCacheNodesOfferings(params: ElastiCache.DescribeReservedCacheNodesOfferingsMessage, callback?: (err: AWSError, data: ElastiCache.ReservedCacheNodesOfferingMessage) => void): Request<ElastiCache.ReservedCacheNodesOfferingMessage, AWSError>;
  /**
   * The DescribeReservedCacheNodesOfferings action lists available reserved cache node offerings.
   */
  describeReservedCacheNodesOfferings(callback?: (err: AWSError, data: ElastiCache.ReservedCacheNodesOfferingMessage) => void): Request<ElastiCache.ReservedCacheNodesOfferingMessage, AWSError>;
  /**
   * The DescribeSnapshots action returns information about cache cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.
   */
  describeSnapshots(params: ElastiCache.DescribeSnapshotsMessage, callback?: (err: AWSError, data: ElastiCache.DescribeSnapshotsListMessage) => void): Request<ElastiCache.DescribeSnapshotsListMessage, AWSError>;
  /**
   * The DescribeSnapshots action returns information about cache cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.
   */
  describeSnapshots(callback?: (err: AWSError, data: ElastiCache.DescribeSnapshotsListMessage) => void): Request<ElastiCache.DescribeSnapshotsListMessage, AWSError>;
  /**
   * The ListAllowedNodeTypeModifications action lists all available node types that you can scale your Redis cluster's or replication group's current node type up to. When you use the ModifyCacheCluster or ModifyReplicationGroup APIs to scale up your cluster or replication group, the value of the CacheNodeType parameter must be one of the node types returned by this action.
   */
  listAllowedNodeTypeModifications(params: ElastiCache.ListAllowedNodeTypeModificationsMessage, callback?: (err: AWSError, data: ElastiCache.AllowedNodeTypeModificationsMessage) => void): Request<ElastiCache.AllowedNodeTypeModificationsMessage, AWSError>;
  /**
   * The ListAllowedNodeTypeModifications action lists all available node types that you can scale your Redis cluster's or replication group's current node type up to. When you use the ModifyCacheCluster or ModifyReplicationGroup APIs to scale up your cluster or replication group, the value of the CacheNodeType parameter must be one of the node types returned by this action.
   */
  listAllowedNodeTypeModifications(callback?: (err: AWSError, data: ElastiCache.AllowedNodeTypeModificationsMessage) => void): Request<ElastiCache.AllowedNodeTypeModificationsMessage, AWSError>;
  /**
   * The ListTagsForResource action lists all cost allocation tags currently on the named resource. A cost allocation tag is a key-value pair where the key is case-sensitive and the value is optional. Cost allocation tags can be used to categorize and track your AWS costs. You can have a maximum of 10 cost allocation tags on an ElastiCache resource. For more information, see Using Cost Allocation Tags in Amazon ElastiCache.
   */
  listTagsForResource(params: ElastiCache.ListTagsForResourceMessage, callback?: (err: AWSError, data: ElastiCache.TagListMessage) => void): Request<ElastiCache.TagListMessage, AWSError>;
  /**
   * The ListTagsForResource action lists all cost allocation tags currently on the named resource. A cost allocation tag is a key-value pair where the key is case-sensitive and the value is optional. Cost allocation tags can be used to categorize and track your AWS costs. You can have a maximum of 10 cost allocation tags on an ElastiCache resource. For more information, see Using Cost Allocation Tags in Amazon ElastiCache.
   */
  listTagsForResource(callback?: (err: AWSError, data: ElastiCache.TagListMessage) => void): Request<ElastiCache.TagListMessage, AWSError>;
  /**
   * The ModifyCacheCluster action modifies the settings for a cache cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
   */
  modifyCacheCluster(params: ElastiCache.ModifyCacheClusterMessage, callback?: (err: AWSError, data: ElastiCache.ModifyCacheClusterResult) => void): Request<ElastiCache.ModifyCacheClusterResult, AWSError>;
  /**
   * The ModifyCacheCluster action modifies the settings for a cache cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
   */
  modifyCacheCluster(callback?: (err: AWSError, data: ElastiCache.ModifyCacheClusterResult) => void): Request<ElastiCache.ModifyCacheClusterResult, AWSError>;
  /**
   * The ModifyCacheParameterGroup action modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
   */
  modifyCacheParameterGroup(params: ElastiCache.ModifyCacheParameterGroupMessage, callback?: (err: AWSError, data: ElastiCache.CacheParameterGroupNameMessage) => void): Request<ElastiCache.CacheParameterGroupNameMessage, AWSError>;
  /**
   * The ModifyCacheParameterGroup action modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
   */
  modifyCacheParameterGroup(callback?: (err: AWSError, data: ElastiCache.CacheParameterGroupNameMessage) => void): Request<ElastiCache.CacheParameterGroupNameMessage, AWSError>;
  /**
   * The ModifyCacheSubnetGroup action modifies an existing cache subnet group.
   */
  modifyCacheSubnetGroup(params: ElastiCache.ModifyCacheSubnetGroupMessage, callback?: (err: AWSError, data: ElastiCache.ModifyCacheSubnetGroupResult) => void): Request<ElastiCache.ModifyCacheSubnetGroupResult, AWSError>;
  /**
   * The ModifyCacheSubnetGroup action modifies an existing cache subnet group.
   */
  modifyCacheSubnetGroup(callback?: (err: AWSError, data: ElastiCache.ModifyCacheSubnetGroupResult) => void): Request<ElastiCache.ModifyCacheSubnetGroupResult, AWSError>;
  /**
   * The ModifyReplicationGroup action modifies the settings for a replication group.
   */
  modifyReplicationGroup(params: ElastiCache.ModifyReplicationGroupMessage, callback?: (err: AWSError, data: ElastiCache.ModifyReplicationGroupResult) => void): Request<ElastiCache.ModifyReplicationGroupResult, AWSError>;
  /**
   * The ModifyReplicationGroup action modifies the settings for a replication group.
   */
  modifyReplicationGroup(callback?: (err: AWSError, data: ElastiCache.ModifyReplicationGroupResult) => void): Request<ElastiCache.ModifyReplicationGroupResult, AWSError>;
  /**
   * The PurchaseReservedCacheNodesOffering action allows you to purchase a reserved cache node offering.
   */
  purchaseReservedCacheNodesOffering(params: ElastiCache.PurchaseReservedCacheNodesOfferingMessage, callback?: (err: AWSError, data: ElastiCache.PurchaseReservedCacheNodesOfferingResult) => void): Request<ElastiCache.PurchaseReservedCacheNodesOfferingResult, AWSError>;
  /**
   * The PurchaseReservedCacheNodesOffering action allows you to purchase a reserved cache node offering.
   */
  purchaseReservedCacheNodesOffering(callback?: (err: AWSError, data: ElastiCache.PurchaseReservedCacheNodesOfferingResult) => void): Request<ElastiCache.PurchaseReservedCacheNodesOfferingResult, AWSError>;
  /**
   * The RebootCacheCluster action reboots some, or all, of the cache nodes within a provisioned cache cluster. This API will apply any modified cache parameter groups to the cache cluster. The reboot action takes place as soon as possible, and results in a momentary outage to the cache cluster. During the reboot, the cache cluster status is set to REBOOTING. The reboot causes the contents of the cache (for each cache node being rebooted) to be lost. When the reboot is complete, a cache cluster event is created.
   */
  rebootCacheCluster(params: ElastiCache.RebootCacheClusterMessage, callback?: (err: AWSError, data: ElastiCache.RebootCacheClusterResult) => void): Request<ElastiCache.RebootCacheClusterResult, AWSError>;
  /**
   * The RebootCacheCluster action reboots some, or all, of the cache nodes within a provisioned cache cluster. This API will apply any modified cache parameter groups to the cache cluster. The reboot action takes place as soon as possible, and results in a momentary outage to the cache cluster. During the reboot, the cache cluster status is set to REBOOTING. The reboot causes the contents of the cache (for each cache node being rebooted) to be lost. When the reboot is complete, a cache cluster event is created.
   */
  rebootCacheCluster(callback?: (err: AWSError, data: ElastiCache.RebootCacheClusterResult) => void): Request<ElastiCache.RebootCacheClusterResult, AWSError>;
  /**
   * The RemoveTagsFromResource action removes the tags identified by the TagKeys list from the named resource.
   */
  removeTagsFromResource(params: ElastiCache.RemoveTagsFromResourceMessage, callback?: (err: AWSError, data: ElastiCache.TagListMessage) => void): Request<ElastiCache.TagListMessage, AWSError>;
  /**
   * The RemoveTagsFromResource action removes the tags identified by the TagKeys list from the named resource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: ElastiCache.TagListMessage) => void): Request<ElastiCache.TagListMessage, AWSError>;
  /**
   * The ResetCacheParameterGroup action modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the ResetAllParameters and CacheParameterGroupName parameters.
   */
  resetCacheParameterGroup(params: ElastiCache.ResetCacheParameterGroupMessage, callback?: (err: AWSError, data: ElastiCache.CacheParameterGroupNameMessage) => void): Request<ElastiCache.CacheParameterGroupNameMessage, AWSError>;
  /**
   * The ResetCacheParameterGroup action modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the ResetAllParameters and CacheParameterGroupName parameters.
   */
  resetCacheParameterGroup(callback?: (err: AWSError, data: ElastiCache.CacheParameterGroupNameMessage) => void): Request<ElastiCache.CacheParameterGroupNameMessage, AWSError>;
  /**
   * The RevokeCacheSecurityGroupIngress action revokes ingress from a cache security group. Use this action to disallow access from an Amazon EC2 security group that had been previously authorized.
   */
  revokeCacheSecurityGroupIngress(params: ElastiCache.RevokeCacheSecurityGroupIngressMessage, callback?: (err: AWSError, data: ElastiCache.RevokeCacheSecurityGroupIngressResult) => void): Request<ElastiCache.RevokeCacheSecurityGroupIngressResult, AWSError>;
  /**
   * The RevokeCacheSecurityGroupIngress action revokes ingress from a cache security group. Use this action to disallow access from an Amazon EC2 security group that had been previously authorized.
   */
  revokeCacheSecurityGroupIngress(callback?: (err: AWSError, data: ElastiCache.RevokeCacheSecurityGroupIngressResult) => void): Request<ElastiCache.RevokeCacheSecurityGroupIngressResult, AWSError>;
  /**
   * Waits for the CacheClusterAvailable state by periodically calling the underlying ElastiCache.describeCacheClustersoperation every 15 seconds (at most 40 times). Wait until ElastiCache cluster is available.
   */
  waitFor(state: "CacheClusterAvailable", params: ElastiCache.DescribeCacheClustersMessage, callback?: (err: AWSError, data: ElastiCache.CacheClusterMessage) => void): Request<ElastiCache.CacheClusterMessage, AWSError>;
  /**
   * Waits for the CacheClusterAvailable state by periodically calling the underlying ElastiCache.describeCacheClustersoperation every 15 seconds (at most 40 times). Wait until ElastiCache cluster is available.
   */
  waitFor(state: "CacheClusterAvailable", callback?: (err: AWSError, data: ElastiCache.CacheClusterMessage) => void): Request<ElastiCache.CacheClusterMessage, AWSError>;
  /**
   * Waits for the CacheClusterDeleted state by periodically calling the underlying ElastiCache.describeCacheClustersoperation every 15 seconds (at most 40 times). Wait until ElastiCache cluster is deleted.
   */
  waitFor(state: "CacheClusterDeleted", params: ElastiCache.DescribeCacheClustersMessage, callback?: (err: AWSError, data: ElastiCache.CacheClusterMessage) => void): Request<ElastiCache.CacheClusterMessage, AWSError>;
  /**
   * Waits for the CacheClusterDeleted state by periodically calling the underlying ElastiCache.describeCacheClustersoperation every 15 seconds (at most 40 times). Wait until ElastiCache cluster is deleted.
   */
  waitFor(state: "CacheClusterDeleted", callback?: (err: AWSError, data: ElastiCache.CacheClusterMessage) => void): Request<ElastiCache.CacheClusterMessage, AWSError>;
  /**
   * Waits for the ReplicationGroupAvailable state by periodically calling the underlying ElastiCache.describeReplicationGroupsoperation every 15 seconds (at most 40 times). Wait until ElastiCache replication group is available.
   */
  waitFor(state: "ReplicationGroupAvailable", params: ElastiCache.DescribeReplicationGroupsMessage, callback?: (err: AWSError, data: ElastiCache.ReplicationGroupMessage) => void): Request<ElastiCache.ReplicationGroupMessage, AWSError>;
  /**
   * Waits for the ReplicationGroupAvailable state by periodically calling the underlying ElastiCache.describeReplicationGroupsoperation every 15 seconds (at most 40 times). Wait until ElastiCache replication group is available.
   */
  waitFor(state: "ReplicationGroupAvailable", callback?: (err: AWSError, data: ElastiCache.ReplicationGroupMessage) => void): Request<ElastiCache.ReplicationGroupMessage, AWSError>;
  /**
   * Waits for the ReplicationGroupDeleted state by periodically calling the underlying ElastiCache.describeReplicationGroupsoperation every 15 seconds (at most 40 times). Wait until ElastiCache replication group is deleted.
   */
  waitFor(state: "ReplicationGroupDeleted", params: ElastiCache.DescribeReplicationGroupsMessage, callback?: (err: AWSError, data: ElastiCache.ReplicationGroupMessage) => void): Request<ElastiCache.ReplicationGroupMessage, AWSError>;
  /**
   * Waits for the ReplicationGroupDeleted state by periodically calling the underlying ElastiCache.describeReplicationGroupsoperation every 15 seconds (at most 40 times). Wait until ElastiCache replication group is deleted.
   */
  waitFor(state: "ReplicationGroupDeleted", callback?: (err: AWSError, data: ElastiCache.ReplicationGroupMessage) => void): Request<ElastiCache.ReplicationGroupMessage, AWSError>;
}
declare namespace ElastiCache {
  export type AZMode = string;
  export interface AddTagsToResourceMessage {
    /**
     * The Amazon Resource Name (ARN) of the resource to which the tags are to be added, for example arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster or arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot. For more information on ARNs, go to Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    ResourceName: String;
    /**
     * A list of cost allocation tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value.
     */
    Tags?: TagList;
  }
  export interface AllowedNodeTypeModificationsMessage {
    /**
     * A string list, each element of which specifies a cache node type which you can use to scale your cache cluster or replication group. When scaling up a Redis cluster or replication group using ModifyCacheCluster or ModifyReplicationGroup, use a value from this list for the CacheNodeType parameter.
     */
    ScaleUpModifications?: NodeTypeList;
  }
  export interface AuthorizeCacheSecurityGroupIngressMessage {
    /**
     * The cache security group which will allow network ingress.
     */
    CacheSecurityGroupName: String;
    /**
     * The Amazon EC2 security group to be authorized for ingress to the cache security group.
     */
    EC2SecurityGroupName?: String;
    /**
     * The AWS account number of the Amazon EC2 security group owner. Note that this is not the same thing as an AWS access key ID - you must provide a valid AWS account number for this parameter.
     */
    EC2SecurityGroupOwnerId?: String;
  }
  export interface AuthorizeCacheSecurityGroupIngressResult {
    CacheSecurityGroup?: CacheSecurityGroup;
  }
  export type AutomaticFailoverStatus = string;
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone.
     */
    Name?: String;
  }
  export type AvailabilityZonesList = String[];
  export type AwsQueryErrorMessage = string;
  export type Boolean = boolean;
  export type BooleanOptional = boolean;
  export interface CacheCluster {
    /**
     * The user-supplied identifier of the cache cluster. This identifier is a unique key that identifies a cache cluster.
     */
    CacheClusterId?: String;
    ConfigurationEndpoint?: Endpoint;
    /**
     * The URL of the web page where you can download the latest ElastiCache client library.
     */
    ClientDownloadLandingPage?: String;
    /**
     * The name of the compute and memory capacity node type for the cache cluster. Valid node types are as follows:   General purpose:   Current generation: cache.t2.micro, cache.t2.small, cache.t2.medium, cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge    Previous generation: cache.t1.micro, cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized: cache.c1.xlarge    Memory optimized:   Current generation: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All t2 instances are created in an Amazon Virtual Private Cloud (VPC).   Redis backup/restore is not supported for t2 instances.   Redis Append-only files (AOF) functionality is not supported for t1 or t2 instances.   For a complete listing of cache node types and specifications, see Amazon ElastiCache Product Features and Details and Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The name of the cache engine (memcached or redis) to be used for this cache cluster.
     */
    Engine?: String;
    /**
     * The version of the cache engine that is used in this cache cluster.
     */
    EngineVersion?: String;
    /**
     * The current state of this cache cluster, one of the following values: available, creating, deleted, deleting, incompatible-network, modifying, rebooting cache cluster nodes, restore-failed, or snapshotting.
     */
    CacheClusterStatus?: String;
    /**
     * The number of cache nodes in the cache cluster. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * The name of the Availability Zone in which the cache cluster is located or "Multiple" if the cache nodes are located in different Availability Zones.
     */
    PreferredAvailabilityZone?: String;
    /**
     * The date and time when the cache cluster was created.
     */
    CacheClusterCreateTime?: TStamp;
    /**
     * Specifies the weekly time range during which maintenance on the cache cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:05:00-sun:09:00 
     */
    PreferredMaintenanceWindow?: String;
    PendingModifiedValues?: PendingModifiedValues;
    NotificationConfiguration?: NotificationConfiguration;
    /**
     * A list of cache security group elements, composed of name and status sub-elements.
     */
    CacheSecurityGroups?: CacheSecurityGroupMembershipList;
    CacheParameterGroup?: CacheParameterGroupStatus;
    /**
     * The name of the cache subnet group associated with the cache cluster.
     */
    CacheSubnetGroupName?: String;
    /**
     * A list of cache nodes that are members of the cache cluster.
     */
    CacheNodes?: CacheNodeList;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * A list of VPC Security Groups associated with the cache cluster.
     */
    SecurityGroups?: SecurityGroupMembershipList;
    /**
     * The replication group to which this cache cluster belongs. If this field is empty, the cache cluster is not associated with any replication group.
     */
    ReplicationGroupId?: String;
    /**
     * The number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted.   If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. 
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. Example: 05:00-09:00 
     */
    SnapshotWindow?: String;
  }
  export type CacheClusterList = CacheCluster[];
  export interface CacheClusterMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache clusters. Each item in the list contains detailed information about one cache cluster.
     */
    CacheClusters?: CacheClusterList;
  }
  export interface CacheEngineVersion {
    /**
     * The name of the cache engine.
     */
    Engine?: String;
    /**
     * The version number of the cache engine.
     */
    EngineVersion?: String;
    /**
     * The name of the cache parameter group family associated with this cache engine.
     */
    CacheParameterGroupFamily?: String;
    /**
     * The description of the cache engine.
     */
    CacheEngineDescription?: String;
    /**
     * The description of the cache engine version.
     */
    CacheEngineVersionDescription?: String;
  }
  export type CacheEngineVersionList = CacheEngineVersion[];
  export interface CacheEngineVersionMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache engine version details. Each element in the list contains detailed information about one cache engine version.
     */
    CacheEngineVersions?: CacheEngineVersionList;
  }
  export interface CacheNode {
    /**
     * The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The combination of cluster ID and node ID uniquely identifies every cache node used in a customer's AWS account.
     */
    CacheNodeId?: String;
    /**
     * The current state of this cache node.
     */
    CacheNodeStatus?: String;
    /**
     * The date and time when the cache node was created.
     */
    CacheNodeCreateTime?: TStamp;
    /**
     * The hostname for connecting to this cache node.
     */
    Endpoint?: Endpoint;
    /**
     * The status of the parameter group applied to this cache node.
     */
    ParameterGroupStatus?: String;
    /**
     * The ID of the primary node to which this read replica node is synchronized. If this field is empty, then this node is not associated with a primary cache cluster.
     */
    SourceCacheNodeId?: String;
    /**
     * The Availability Zone where this node was created and now resides.
     */
    CustomerAvailabilityZone?: String;
  }
  export type CacheNodeIdsList = String[];
  export type CacheNodeList = CacheNode[];
  export interface CacheNodeTypeSpecificParameter {
    /**
     * The name of the parameter.
     */
    ParameterName?: String;
    /**
     * A description of the parameter.
     */
    Description?: String;
    /**
     * The source of the parameter value.
     */
    Source?: String;
    /**
     * The valid data type for the parameter.
     */
    DataType?: String;
    /**
     * The valid range of values for the parameter.
     */
    AllowedValues?: String;
    /**
     * Indicates whether (true) or not (false) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.
     */
    IsModifiable?: Boolean;
    /**
     * The earliest cache engine version to which the parameter can apply.
     */
    MinimumEngineVersion?: String;
    /**
     * A list of cache node types and their corresponding values for this parameter.
     */
    CacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValueList;
    /**
     * ChangeType indicates whether a change to the parameter will be applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window's reboot. For more information, see Rebooting a Cluster.
     */
    ChangeType?: ChangeType;
  }
  export type CacheNodeTypeSpecificParametersList = CacheNodeTypeSpecificParameter[];
  export interface CacheNodeTypeSpecificValue {
    /**
     * The cache node type for which this value applies.
     */
    CacheNodeType?: String;
    /**
     * The value for the cache node type.
     */
    Value?: String;
  }
  export type CacheNodeTypeSpecificValueList = CacheNodeTypeSpecificValue[];
  export interface CacheParameterGroup {
    /**
     * The name of the cache parameter group.
     */
    CacheParameterGroupName?: String;
    /**
     * The name of the cache parameter group family that this cache parameter group is compatible with.
     */
    CacheParameterGroupFamily?: String;
    /**
     * The description for this cache parameter group.
     */
    Description?: String;
  }
  export interface CacheParameterGroupDetails {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of Parameter instances.
     */
    Parameters?: ParametersList;
    /**
     * A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.
     */
    CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList;
  }
  export type CacheParameterGroupList = CacheParameterGroup[];
  export interface CacheParameterGroupNameMessage {
    /**
     * The name of the cache parameter group.
     */
    CacheParameterGroupName?: String;
  }
  export interface CacheParameterGroupStatus {
    /**
     * The name of the cache parameter group.
     */
    CacheParameterGroupName?: String;
    /**
     * The status of parameter updates.
     */
    ParameterApplyStatus?: String;
    /**
     * A list of the cache node IDs which need to be rebooted for parameter changes to be applied. A node ID is a numeric identifier (0001, 0002, etc.).
     */
    CacheNodeIdsToReboot?: CacheNodeIdsList;
  }
  export interface CacheParameterGroupsMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache parameter groups. Each element in the list contains detailed information about one cache parameter group.
     */
    CacheParameterGroups?: CacheParameterGroupList;
  }
  export interface CacheSecurityGroup {
    /**
     * The AWS account ID of the cache security group owner.
     */
    OwnerId?: String;
    /**
     * The name of the cache security group.
     */
    CacheSecurityGroupName?: String;
    /**
     * The description of the cache security group.
     */
    Description?: String;
    /**
     * A list of Amazon EC2 security groups that are associated with this cache security group.
     */
    EC2SecurityGroups?: EC2SecurityGroupList;
  }
  export interface CacheSecurityGroupMembership {
    /**
     * The name of the cache security group.
     */
    CacheSecurityGroupName?: String;
    /**
     * The membership status in the cache security group. The status changes when a cache security group is modified, or when the cache security groups assigned to a cache cluster are modified.
     */
    Status?: String;
  }
  export type CacheSecurityGroupMembershipList = CacheSecurityGroupMembership[];
  export interface CacheSecurityGroupMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache security groups. Each element in the list contains detailed information about one group.
     */
    CacheSecurityGroups?: CacheSecurityGroups;
  }
  export type CacheSecurityGroupNameList = String[];
  export type CacheSecurityGroups = CacheSecurityGroup[];
  export interface CacheSubnetGroup {
    /**
     * The name of the cache subnet group.
     */
    CacheSubnetGroupName?: String;
    /**
     * The description of the cache subnet group.
     */
    CacheSubnetGroupDescription?: String;
    /**
     * The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.
     */
    VpcId?: String;
    /**
     * A list of subnets associated with the cache subnet group.
     */
    Subnets?: SubnetList;
  }
  export interface CacheSubnetGroupMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of cache subnet groups. Each element in the list contains detailed information about one group.
     */
    CacheSubnetGroups?: CacheSubnetGroups;
  }
  export type CacheSubnetGroups = CacheSubnetGroup[];
  export type ChangeType = string;
  export type ClusterIdList = String[];
  export interface CopySnapshotMessage {
    /**
     * The name of an existing snapshot from which to make a copy.
     */
    SourceSnapshotName: String;
    /**
     * A name for the snapshot copy. ElastiCache does not permit overwriting a snapshot, therefore this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting.  Error Message     Error Message: The S3 bucket %s already contains an object with key %s.  Solution: Give the TargetSnapshotName a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for TargetSnapshotName.  
     */
    TargetSnapshotName?: String;
    /**
     * The Amazon S3 bucket to which the snapshot will be exported. This parameter is used only when exporting a snapshot for external access. When using this parameter to export a snapshot, be sure Amazon ElastiCache has the needed permissions to this S3 bucket. For more information, see Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket in the Amazon ElastiCache User Guide.  Error Messages:  You could receive one of the following error messages.  Erorr Messages     Error Message:  ElastiCache has not been granted READ permissions %s on the S3 Bucket.  Solution: Add List and Read permissions on the bucket.    Error Message:  ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.  Solution: Add Upload/Delete permissions on the bucket.    Error Message:  ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.  Solution: Add View Permissions permissions on the bucket.    Error Message: The S3 bucket %s is outside of the region.  Solution: Before exporting your snapshot, create a new Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket.    Error Message: The S3 bucket %s does not exist.  Solution: Create an Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket.    Error Message: The S3 bucket %s is not owned by the authenticated user.  Solution: Create an Amazon S3 bucket in the same region as your snapshot. For more information, see Step 1: Create an Amazon S3 Bucket.    Error Message: The authenticated user does not have sufficient permissions to perform the desired activity.  Solution: Contact your system administrator to get the needed permissions.   For more information, see Exporting a Snapshot in the Amazon ElastiCache User Guide.
     */
    TargetBucket?: String;
  }
  export interface CopySnapshotResult {
    Snapshot?: Snapshot;
  }
  export interface CreateCacheClusterMessage {
    /**
     * The node group identifier. This parameter is stored as a lowercase string.  Constraints:    A name must contain from 1 to 20 alphanumeric characters or hyphens.   The first character must be a letter.   A name cannot end with a hyphen or contain two consecutive hyphens.  
     */
    CacheClusterId: String;
    /**
     * The ID of the replication group to which this cache cluster should belong. If this parameter is specified, the cache cluster will be added to the specified replication group as a read replica; otherwise, the cache cluster will be a standalone primary that is not part of any replication group. If the specified replication group is Multi-AZ enabled and the availability zone is not specified, the cache cluster will be created in availability zones that provide the best spread of read replicas across availability zones.  This parameter is only valid if the Engine parameter is redis. 
     */
    ReplicationGroupId?: String;
    /**
     * Specifies whether the nodes in this Memcached node group are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. This parameter is only supported for Memcached cache clusters. If the AZMode and PreferredAvailabilityZones are not specified, ElastiCache assumes single-az mode.
     */
    AZMode?: AZMode;
    /**
     * The EC2 Availability Zone in which the cache cluster will be created. All nodes belonging to this Memcached cache cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use PreferredAvailabilityZones. Default: System chosen Availability Zone.
     */
    PreferredAvailabilityZone?: String;
    /**
     * A list of the Availability Zones in which cache nodes will be created. The order of the zones in the list is not important. This option is only supported on Memcached.  If you are creating your cache cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheNodes.  If you want all the nodes in the same Availability Zone, use PreferredAvailabilityZone instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones. Example: One Memcached node in each of three different Availability Zones: PreferredAvailabilityZones.member.1=us-west-2a&amp;amp;PreferredAvailabilityZones.member.2=us-west-2b&amp;amp;PreferredAvailabilityZones.member.3=us-west-2c  Example: All three Memcached nodes in one Availability Zone: PreferredAvailabilityZones.member.1=us-west-2a&amp;amp;PreferredAvailabilityZones.member.2=us-west-2a&amp;amp;PreferredAvailabilityZones.member.3=us-west-2a 
     */
    PreferredAvailabilityZones?: PreferredAvailabilityZoneList;
    /**
     * The initial number of cache nodes that the cache cluster will have. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20. If you need more than 20 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at http://aws.amazon.com/contact-us/elasticache-node-limit-request/.
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * The compute and memory capacity of the nodes in the node group. Valid node types are as follows:   General purpose:   Current generation: cache.t2.micro, cache.t2.small, cache.t2.medium, cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge    Previous generation: cache.t1.micro, cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized: cache.c1.xlarge    Memory optimized:   Current generation: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All t2 instances are created in an Amazon Virtual Private Cloud (VPC).   Redis backup/restore is not supported for t2 instances.   Redis Append-only files (AOF) functionality is not supported for t1 or t2 instances.   For a complete listing of cache node types and specifications, see Amazon ElastiCache Product Features and Details and Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The name of the cache engine to be used for this cache cluster. Valid values for this parameter are:  memcached | redis 
     */
    Engine?: String;
    /**
     * The version number of the cache engine to be used for this cache cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions action.  Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cache cluster or replication group and create it anew with the earlier engine version. 
     */
    EngineVersion?: String;
    /**
     * The name of the parameter group to associate with this cache cluster. If this argument is omitted, the default parameter group for the specified engine is used.
     */
    CacheParameterGroupName?: String;
    /**
     * The name of the subnet group to be used for the cache cluster. Use this parameter only when you are creating a cache cluster in an Amazon Virtual Private Cloud (VPC).
     */
    CacheSubnetGroupName?: String;
    /**
     * A list of security group names to associate with this cache cluster. Use this parameter only when you are creating a cache cluster outside of an Amazon Virtual Private Cloud (VPC).
     */
    CacheSecurityGroupNames?: CacheSecurityGroupNameList;
    /**
     * One or more VPC security groups associated with the cache cluster. Use this parameter only when you are creating a cache cluster in an Amazon Virtual Private Cloud (VPC).
     */
    SecurityGroupIds?: SecurityGroupIdsList;
    /**
     * A list of cost allocation tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value.
     */
    Tags?: TagList;
    /**
     * A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. The snapshot file will be used to populate the node group. The Amazon S3 object name in the ARN cannot contain any commas.  This parameter is only valid if the Engine parameter is redis.  Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb 
     */
    SnapshotArns?: SnapshotArnsList;
    /**
     * The name of a snapshot from which to restore data into the new node group. The snapshot status changes to restoring while the new node group is being created.  This parameter is only valid if the Engine parameter is redis. 
     */
    SnapshotName?: String;
    /**
     * Specifies the weekly time range during which maintenance on the cache cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:05:00-sun:09:00 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The port number on which each of the cache nodes will accept connections.
     */
    Port?: IntegerOptional;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications will be sent.  The Amazon SNS topic owner must be the same as the cache cluster owner. 
     */
    NotificationTopicArn?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The number of days for which ElastiCache will retain automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted.  This parameter is only valid if the Engine parameter is redis.  Default: 0 (i.e., automatic backups are disabled for this cache cluster).
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your node group. Example: 05:00-09:00  If you do not specify this parameter, then ElastiCache will automatically choose an appropriate time range.  Note: This parameter is only valid if the Engine parameter is redis.
     */
    SnapshotWindow?: String;
  }
  export interface CreateCacheClusterResult {
    CacheCluster?: CacheCluster;
  }
  export interface CreateCacheParameterGroupMessage {
    /**
     * A user-specified name for the cache parameter group.
     */
    CacheParameterGroupName: String;
    /**
     * The name of the cache parameter group family the cache parameter group can be used with. Valid values are: memcached1.4 | redis2.6 | redis2.8 
     */
    CacheParameterGroupFamily?: String;
    /**
     * A user-specified description for the cache parameter group.
     */
    Description?: String;
  }
  export interface CreateCacheParameterGroupResult {
    CacheParameterGroup?: CacheParameterGroup;
  }
  export interface CreateCacheSecurityGroupMessage {
    /**
     * A name for the cache security group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default". Example: mysecuritygroup 
     */
    CacheSecurityGroupName: String;
    /**
     * A description for the cache security group.
     */
    Description?: String;
  }
  export interface CreateCacheSecurityGroupResult {
    CacheSecurityGroup?: CacheSecurityGroup;
  }
  export interface CreateCacheSubnetGroupMessage {
    /**
     * A name for the cache subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters or hyphens. Example: mysubnetgroup 
     */
    CacheSubnetGroupName: String;
    /**
     * A description for the cache subnet group.
     */
    CacheSubnetGroupDescription?: String;
    /**
     * A list of VPC subnet IDs for the cache subnet group.
     */
    SubnetIds?: SubnetIdentifierList;
  }
  export interface CreateCacheSubnetGroupResult {
    CacheSubnetGroup?: CacheSubnetGroup;
  }
  export interface CreateReplicationGroupMessage {
    /**
     * The replication group identifier. This parameter is stored as a lowercase string. Constraints:   A name must contain from 1 to 20 alphanumeric characters or hyphens.   The first character must be a letter.   A name cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationGroupId: String;
    /**
     * A user-created description for the replication group.
     */
    ReplicationGroupDescription?: String;
    /**
     * The identifier of the cache cluster that will serve as the primary for this replication group. This cache cluster must already exist and have a status of available. This parameter is not required if NumCacheClusters is specified.
     */
    PrimaryClusterId?: String;
    /**
     * Specifies whether a read-only replica will be automatically promoted to read/write primary if the existing primary fails. If true, Multi-AZ is enabled for this replication group. If false, Multi-AZ is disabled for this replication group. Default: false  ElastiCache Multi-AZ replication groups is not supported on:   Redis versions earlier than 2.8.6.   T1 and T2 cache node types.   
     */
    AutomaticFailoverEnabled?: BooleanOptional;
    /**
     * The number of cache clusters this replication group will initially have. If Multi-AZ is enabled, the value of this parameter must be at least 2. The maximum permitted value for NumCacheClusters is 6 (primary plus 5 replicas). If you need to exceed this limit, please fill out the ElastiCache Limit Increase Request form at http://aws.amazon.com/contact-us/elasticache-node-limit-request.
     */
    NumCacheClusters?: IntegerOptional;
    /**
     * A list of EC2 availability zones in which the replication group's cache clusters will be created. The order of the availability zones in the list is not important.  If you are creating your replication group in an Amazon VPC (recommended), you can only locate cache clusters in availability zones associated with the subnets in the selected subnet group. The number of availability zones listed must equal the value of NumCacheClusters.  Default: system chosen availability zones. Example: One Redis cache cluster in each of three availability zones.   PreferredAvailabilityZones.member.1=us-west-2a PreferredAvailabilityZones.member.2=us-west-2c PreferredAvailabilityZones.member.3=us-west-2c 
     */
    PreferredCacheClusterAZs?: AvailabilityZonesList;
    /**
     * The compute and memory capacity of the nodes in the node group. Valid node types are as follows:   General purpose:   Current generation: cache.t2.micro, cache.t2.small, cache.t2.medium, cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge    Previous generation: cache.t1.micro, cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized: cache.c1.xlarge    Memory optimized:   Current generation: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All t2 instances are created in an Amazon Virtual Private Cloud (VPC).   Redis backup/restore is not supported for t2 instances.   Redis Append-only files (AOF) functionality is not supported for t1 or t2 instances.   For a complete listing of cache node types and specifications, see Amazon ElastiCache Product Features and Details and Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The name of the cache engine to be used for the cache clusters in this replication group. Default: redis
     */
    Engine?: String;
    /**
     * The version number of the cache engine to be used for the cache clusters in this replication group. To view the supported cache engine versions, use the DescribeCacheEngineVersions action.  Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version) in the ElastiCache User Guide, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cache cluster or replication group and create it anew with the earlier engine version. 
     */
    EngineVersion?: String;
    /**
     * The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.
     */
    CacheParameterGroupName?: String;
    /**
     * The name of the cache subnet group to be used for the replication group.
     */
    CacheSubnetGroupName?: String;
    /**
     * A list of cache security group names to associate with this replication group.
     */
    CacheSecurityGroupNames?: CacheSecurityGroupNameList;
    /**
     * One or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (VPC).
     */
    SecurityGroupIds?: SecurityGroupIdsList;
    /**
     * A list of cost allocation tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value.
     */
    Tags?: TagList;
    /**
     * A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. The snapshot file will be used to populate the node group. The Amazon S3 object name in the ARN cannot contain any commas.  This parameter is only valid if the Engine parameter is redis.  Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb 
     */
    SnapshotArns?: SnapshotArnsList;
    /**
     * The name of a snapshot from which to restore data into the new node group. The snapshot status changes to restoring while the new node group is being created.  This parameter is only valid if the Engine parameter is redis. 
     */
    SnapshotName?: String;
    /**
     * Specifies the weekly time range during which maintenance on the cache cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:05:00-sun:09:00 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The port number on which each member of the replication group will accept connections.
     */
    Port?: IntegerOptional;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications will be sent.  The Amazon SNS topic owner must be the same as the cache cluster owner. 
     */
    NotificationTopicArn?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The number of days for which ElastiCache will retain automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted.  This parameter is only valid if the Engine parameter is redis.  Default: 0 (i.e., automatic backups are disabled for this cache cluster).
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your node group. Example: 05:00-09:00  If you do not specify this parameter, then ElastiCache will automatically choose an appropriate time range.  This parameter is only valid if the Engine parameter is redis. 
     */
    SnapshotWindow?: String;
  }
  export interface CreateReplicationGroupResult {
    ReplicationGroup?: ReplicationGroup;
  }
  export interface CreateSnapshotMessage {
    /**
     * The identifier of an existing cache cluster. The snapshot will be created from this cache cluster.
     */
    CacheClusterId: String;
    /**
     * A name for the snapshot being created.
     */
    SnapshotName?: String;
  }
  export interface CreateSnapshotResult {
    Snapshot?: Snapshot;
  }
  export interface DeleteCacheClusterMessage {
    /**
     * The cache cluster identifier for the cluster to be deleted. This parameter is not case sensitive.
     */
    CacheClusterId: String;
    /**
     * The user-supplied name of a final cache cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cache cluster immediately afterward.
     */
    FinalSnapshotIdentifier?: String;
  }
  export interface DeleteCacheClusterResult {
    CacheCluster?: CacheCluster;
  }
  export interface DeleteCacheParameterGroupMessage {
    /**
     * The name of the cache parameter group to delete.  The specified cache security group must not be associated with any cache clusters. 
     */
    CacheParameterGroupName: String;
  }
  export interface DeleteCacheSecurityGroupMessage {
    /**
     * The name of the cache security group to delete.  You cannot delete the default security group. 
     */
    CacheSecurityGroupName: String;
  }
  export interface DeleteCacheSubnetGroupMessage {
    /**
     * The name of the cache subnet group to delete. Constraints: Must contain no more than 255 alphanumeric characters or hyphens.
     */
    CacheSubnetGroupName: String;
  }
  export interface DeleteReplicationGroupMessage {
    /**
     * The identifier for the cluster to be deleted. This parameter is not case sensitive.
     */
    ReplicationGroupId: String;
    /**
     * If set to true, all of the read replicas will be deleted, but the primary node will be retained.
     */
    RetainPrimaryCluster?: BooleanOptional;
    /**
     * The name of a final node group snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the cluster is immediately deleted.
     */
    FinalSnapshotIdentifier?: String;
  }
  export interface DeleteReplicationGroupResult {
    ReplicationGroup?: ReplicationGroup;
  }
  export interface DeleteSnapshotMessage {
    /**
     * The name of the snapshot to be deleted.
     */
    SnapshotName: String;
  }
  export interface DeleteSnapshotResult {
    Snapshot?: Snapshot;
  }
  export interface DescribeCacheClustersMessage {
    /**
     * The user-supplied cluster identifier. If this parameter is specified, only information about that specific cache cluster is returned. This parameter isn't case sensitive.
     */
    CacheClusterId?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * An optional flag that can be included in the DescribeCacheCluster request to retrieve information about the individual cache nodes.
     */
    ShowCacheNodeInfo?: BooleanOptional;
  }
  export interface DescribeCacheEngineVersionsMessage {
    /**
     * The cache engine to return. Valid values: memcached | redis 
     */
    Engine?: String;
    /**
     * The cache engine version to return. Example: 1.4.14 
     */
    EngineVersion?: String;
    /**
     * The name of a specific cache parameter group family to return details for. Constraints:   Must be 1 to 255 alphanumeric characters   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens  
     */
    CacheParameterGroupFamily?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * If true, specifies that only the default version of the specified engine or engine and major version combination is to be returned.
     */
    DefaultOnly?: Boolean;
  }
  export interface DescribeCacheParameterGroupsMessage {
    /**
     * The name of a specific cache parameter group to return details for.
     */
    CacheParameterGroupName?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeCacheParametersMessage {
    /**
     * The name of a specific cache parameter group to return details for.
     */
    CacheParameterGroupName: String;
    /**
     * The parameter types to return. Valid values: user | system | engine-default 
     */
    Source?: String;
    /**
     * The maximum number of brecords to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeCacheSecurityGroupsMessage {
    /**
     * The name of the cache security group to return details for.
     */
    CacheSecurityGroupName?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeCacheSubnetGroupsMessage {
    /**
     * The name of the cache subnet group to return details for.
     */
    CacheSubnetGroupName?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeEngineDefaultParametersMessage {
    /**
     * The name of the cache parameter group family. Valid values are: memcached1.4 | redis2.6 | redis2.8 
     */
    CacheParameterGroupFamily: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeEngineDefaultParametersResult {
    EngineDefaults?: EngineDefaults;
  }
  export interface DescribeEventsMessage {
    /**
     * The identifier of the event source for which events will be returned. If not specified, then all sources are included in the response.
     */
    SourceIdentifier?: String;
    /**
     * The event source to retrieve events for. If no value is specified, all events are returned. Valid values are: cache-cluster | cache-parameter-group | cache-security-group | cache-subnet-group 
     */
    SourceType?: SourceType;
    /**
     * The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
     */
    StartTime?: TStamp;
    /**
     * The end of the time interval for which to retrieve events, specified in ISO 8601 format.
     */
    EndTime?: TStamp;
    /**
     * The number of minutes' worth of events to retrieve.
     */
    Duration?: IntegerOptional;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReplicationGroupsMessage {
    /**
     * The identifier for the replication group to be described. This parameter is not case sensitive. If you do not specify this parameter, information about all replication groups is returned.
     */
    ReplicationGroupId?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReservedCacheNodesMessage {
    /**
     * The reserved cache node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.
     */
    ReservedCacheNodeId?: String;
    /**
     * The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.
     */
    ReservedCacheNodesOfferingId?: String;
    /**
     * The cache node type filter value. Use this parameter to show only those reservations matching the specified cache node type. Valid node types are as follows:   General purpose:   Current generation: cache.t2.micro, cache.t2.small, cache.t2.medium, cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge    Previous generation: cache.t1.micro, cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized: cache.c1.xlarge    Memory optimized:   Current generation: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All t2 instances are created in an Amazon Virtual Private Cloud (VPC).   Redis backup/restore is not supported for t2 instances.   Redis Append-only files (AOF) functionality is not supported for t1 or t2 instances.   For a complete listing of cache node types and specifications, see Amazon ElastiCache Product Features and Details and Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration. Valid Values: 1 | 3 | 31536000 | 94608000 
     */
    Duration?: String;
    /**
     * The product description filter value. Use this parameter to show only those reservations matching the specified product description.
     */
    ProductDescription?: String;
    /**
     * The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type. Valid values: "Light Utilization"|"Medium Utilization"|"Heavy Utilization" 
     */
    OfferingType?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReservedCacheNodesOfferingsMessage {
    /**
     * The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706 
     */
    ReservedCacheNodesOfferingId?: String;
    /**
     * The cache node type filter value. Use this parameter to show only the available offerings matching the specified cache node type. Valid node types are as follows:   General purpose:   Current generation: cache.t2.micro, cache.t2.small, cache.t2.medium, cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge    Previous generation: cache.t1.micro, cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized: cache.c1.xlarge    Memory optimized:   Current generation: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All t2 instances are created in an Amazon Virtual Private Cloud (VPC).   Redis backup/restore is not supported for t2 instances.   Redis Append-only files (AOF) functionality is not supported for t1 or t2 instances.   For a complete listing of cache node types and specifications, see Amazon ElastiCache Product Features and Details and Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration. Valid Values: 1 | 3 | 31536000 | 94608000 
     */
    Duration?: String;
    /**
     * The product description filter value. Use this parameter to show only the available offerings matching the specified product description.
     */
    ProductDescription?: String;
    /**
     * The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type. Valid Values: "Light Utilization"|"Medium Utilization"|"Heavy Utilization" 
     */
    OfferingType?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeSnapshotsListMessage {
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * A list of snapshots. Each item in the list contains detailed information about one snapshot.
     */
    Snapshots?: SnapshotList;
  }
  export interface DescribeSnapshotsMessage {
    /**
     * A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cache cluster will be described.
     */
    CacheClusterId?: String;
    /**
     * A user-supplied name of the snapshot. If this parameter is specified, only this snapshot will be described.
     */
    SnapshotName?: String;
    /**
     * If set to system, the output shows snapshots that were automatically created by ElastiCache. If set to user the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.
     */
    SnapshotSource?: String;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this action. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 50 Constraints: minimum 20; maximum 50.
     */
    MaxRecords?: IntegerOptional;
  }
  export type Double = number;
  export interface EC2SecurityGroup {
    /**
     * The status of the Amazon EC2 security group.
     */
    Status?: String;
    /**
     * The name of the Amazon EC2 security group.
     */
    EC2SecurityGroupName?: String;
    /**
     * The AWS account ID of the Amazon EC2 security group owner.
     */
    EC2SecurityGroupOwnerId?: String;
  }
  export type EC2SecurityGroupList = EC2SecurityGroup[];
  export interface Endpoint {
    /**
     * The DNS hostname of the cache node.
     */
    Address?: String;
    /**
     * The port number that the cache engine is listening on.
     */
    Port?: Integer;
  }
  export interface EngineDefaults {
    /**
     * Specifies the name of the cache parameter group family to which the engine default parameters apply.
     */
    CacheParameterGroupFamily?: String;
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * Contains a list of engine default parameters.
     */
    Parameters?: ParametersList;
    /**
     * A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.
     */
    CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList;
  }
  export interface Event {
    /**
     * The identifier for the source of the event. For example, if the event occurred at the cache cluster level, the identifier would be the name of the cache cluster.
     */
    SourceIdentifier?: String;
    /**
     * Specifies the origin of this event - a cache cluster, a parameter group, a security group, etc.
     */
    SourceType?: SourceType;
    /**
     * The text of the event.
     */
    Message?: String;
    /**
     * The date and time when the event occurred.
     */
    Date?: TStamp;
  }
  export type EventList = Event[];
  export interface EventsMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of events. Each element in the list contains detailed information about one event.
     */
    Events?: EventList;
  }
  export type Integer = number;
  export type IntegerOptional = number;
  export type KeyList = String[];
  export interface ListAllowedNodeTypeModificationsMessage {
    /**
     * The name of the cache cluster you want to scale up to a larger node instanced type. ElastiCache uses the cluster id to identify the current node type of this cluster and from that to to create a list of node types you can scale up to.  You must provide a value for either the CacheClusterId or the ReplicationGroupId. 
     */
    CacheClusterId?: String;
    /**
     * The name of the replication group want to scale up to a larger node type. ElastiCache uses the replication group id to identify the current node type being used by this replication group, and from that to create a list of node types you can scale up to.  You must provide a value for either the CacheClusterId or the ReplicationGroupId. 
     */
    ReplicationGroupId?: String;
  }
  export interface ListTagsForResourceMessage {
    /**
     * The Amazon Resource Name (ARN) of the resource for which you want the list of tags, for example arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster or arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot. For more information on ARNs, go to Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    ResourceName: String;
  }
  export interface ModifyCacheClusterMessage {
    /**
     * The cache cluster identifier. This value is stored as a lowercase string.
     */
    CacheClusterId: String;
    /**
     * The number of cache nodes that the cache cluster should have. If the value for NumCacheNodes is greater than the sum of the number of current cache nodes and the number of cache nodes pending creation (which may be zero), then more nodes will be added. If the value is less than the number of existing cache nodes, then nodes will be removed. If the value is equal to the number of current cache nodes, then any pending add or remove requests are canceled. If you are removing cache nodes, you must use the CacheNodeIdsToRemove parameter to provide the IDs of the specific cache nodes to remove. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.  Adding or removing Memcached cache nodes can be applied immediately or as a pending action. See ApplyImmediately. A pending action to modify the number of cache nodes in a cluster during its maintenance window, whether by adding or removing nodes in accordance with the scale out architecture, is not queued. The customer's latest request to add or remove nodes to the cluster overrides any previous pending actions to modify the number of cache nodes in the cluster. For example, a request to remove 2 nodes would override a previous pending action to remove 3 nodes. Similarly, a request to add 2 nodes would override a previous pending action to remove 3 nodes and vice versa. As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement, a request to add nodes does not automatically override a previous pending action to add nodes. The customer can modify the previous pending action to add more nodes or explicitly cancel the pending request and retry the new request. To cancel pending actions to modify the number of cache nodes in a cluster, use the ModifyCacheCluster request and set NumCacheNodes equal to the number of cache nodes currently in the cache cluster. 
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002, etc.). This parameter is only valid when NumCacheNodes is less than the existing number of cache nodes. The number of cache node IDs supplied in this parameter must match the difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is greater, and the value of NumCacheNodes in the request. For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this ModifyCacheCluser call is 5, you must list 2 (7 - 5) cache node IDs to remove.
     */
    CacheNodeIdsToRemove?: CacheNodeIdsList;
    /**
     * Specifies whether the new nodes in this Memcached cache cluster are all created in a single Availability Zone or created across multiple Availability Zones. Valid values: single-az | cross-az. This option is only supported for Memcached cache clusters.  You cannot specify single-az if the Memcached cache cluster already has cache nodes in different Availability Zones. If cross-az is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes will be located in different Availability Zones. For instructions on how to move existing Memcached nodes to different Availability Zones, see the Availability Zone Considerations section of Cache Node Considerations for Memcached. 
     */
    AZMode?: AZMode;
    /**
     * The list of Availability Zones where the new Memcached cache nodes will be created. This parameter is only valid when NumCacheNodes in the request is greater than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero). The number of Availability Zones supplied in this list must match the cache nodes being added in this request. This option is only supported on Memcached clusters. Scenarios:    Scenario 1: You have 3 active nodes and wish to add 2 nodes. Specify NumCacheNodes=5 (3 + 2) and optionally specify two Availability Zones for the two new nodes.    Scenario 2: You have 3 active nodes and 2 nodes pending creation (from the scenario 1 call) and want to add 1 more node. Specify NumCacheNodes=6 ((3 + 2) + 1) and optionally specify an Availability Zone for the new node.    Scenario 3: You want to cancel all pending actions. Specify NumCacheNodes=3 to cancel all pending actions.   The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation, add 0 nodes by setting NumCacheNodes to the number of current nodes. If cross-az is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes can be located in different Availability Zones. For guidance on how to move existing Memcached nodes to different Availability Zones, see the Availability Zone Considerations section of Cache Node Considerations for Memcached.  Impact of new add/remove requests upon pending requests    Scenario-1   Pending Action: Delete   New Request: Delete   Result: The new delete, pending or immediate, replaces the pending delete.     Scenario-2   Pending Action: Delete   New Request: Create   Result: The new create, pending or immediate, replaces the pending delete.     Scenario-3   Pending Action: Create   New Request: Delete   Result: The new delete, pending or immediate, replaces the pending create.     Scenario-4   Pending Action: Create   New Request: Create   Result: The new create is added to the pending create.   Important: If the new create request is Apply Immediately - Yes, all creates are performed immediately. If the new create request is Apply Immediately - No, all creates are pending.      Example:  NewAvailabilityZones.member.1=us-west-2a&amp;amp;NewAvailabilityZones.member.2=us-west-2b&amp;amp;NewAvailabilityZones.member.3=us-west-2c 
     */
    NewAvailabilityZones?: PreferredAvailabilityZoneList;
    /**
     * A list of cache security group names to authorize on this cache cluster. This change is asynchronously applied as soon as possible. This parameter can be used only with clusters that are created outside of an Amazon Virtual Private Cloud (VPC). Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".
     */
    CacheSecurityGroupNames?: CacheSecurityGroupNameList;
    /**
     * Specifies the VPC Security Groups associated with the cache cluster. This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (VPC).
     */
    SecurityGroupIds?: SecurityGroupIdsList;
    /**
     * Specifies the weekly time range during which maintenance on the cache cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:05:00-sun:09:00 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent.  The Amazon SNS topic owner must be same as the cache cluster owner. 
     */
    NotificationTopicArn?: String;
    /**
     * The name of the cache parameter group to apply to this cache cluster. This change is asynchronously applied as soon as possible for parameters when the ApplyImmediately parameter is specified as true for this request.
     */
    CacheParameterGroupName?: String;
    /**
     * The status of the Amazon SNS notification topic. Notifications are sent only if the status is active. Valid values: active | inactive 
     */
    NotificationTopicStatus?: String;
    /**
     * If true, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the PreferredMaintenanceWindow setting for the cache cluster. If false, then changes to the cache cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.  If you perform a ModifyCacheCluster before a pending modification is applied, the pending modification is replaced by the newer modification.  Valid values: true | false  Default: false 
     */
    ApplyImmediately?: Boolean;
    /**
     * The upgraded version of the cache engine to be run on the cache nodes.  Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cache cluster and create it anew with the earlier engine version. 
     */
    EngineVersion?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted.  If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. 
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. 
     */
    SnapshotWindow?: String;
    /**
     * A valid cache node type that you want to scale this cache cluster to. The value of this parameter must be one of the ScaleUpModifications values returned by the ListAllowedCacheNodeTypeModification action.
     */
    CacheNodeType?: String;
  }
  export interface ModifyCacheClusterResult {
    CacheCluster?: CacheCluster;
  }
  export interface ModifyCacheParameterGroupMessage {
    /**
     * The name of the cache parameter group to modify.
     */
    CacheParameterGroupName: String;
    /**
     * An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.
     */
    ParameterNameValues?: ParameterNameValueList;
  }
  export interface ModifyCacheSubnetGroupMessage {
    /**
     * The name for the cache subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters or hyphens. Example: mysubnetgroup 
     */
    CacheSubnetGroupName: String;
    /**
     * A description for the cache subnet group.
     */
    CacheSubnetGroupDescription?: String;
    /**
     * The EC2 subnet IDs for the cache subnet group.
     */
    SubnetIds?: SubnetIdentifierList;
  }
  export interface ModifyCacheSubnetGroupResult {
    CacheSubnetGroup?: CacheSubnetGroup;
  }
  export interface ModifyReplicationGroupMessage {
    /**
     * The identifier of the replication group to modify.
     */
    ReplicationGroupId: String;
    /**
     * A description for the replication group. Maximum length is 255 characters.
     */
    ReplicationGroupDescription?: String;
    /**
     * If this parameter is specified, ElastiCache will promote the specified cluster in the specified replication group to the primary role. The nodes of all other clusters in the replication group will be read replicas.
     */
    PrimaryClusterId?: String;
    /**
     * The cache cluster ID that will be used as the daily snapshot source for the replication group.
     */
    SnapshottingClusterId?: String;
    /**
     * Whether a read replica will be automatically promoted to read/write primary if the existing primary encounters a failure. Valid values: true | false   ElastiCache Multi-AZ replication groups are not supported on:   Redis versions earlier than 2.8.6.   T1 and T2 cache node types.   
     */
    AutomaticFailoverEnabled?: BooleanOptional;
    /**
     * A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible. This parameter can be used only with replication group containing cache clusters running outside of an Amazon Virtual Private Cloud (VPC). Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".
     */
    CacheSecurityGroupNames?: CacheSecurityGroupNameList;
    /**
     * Specifies the VPC Security Groups associated with the cache clusters in the replication group. This parameter can be used only with replication group containing cache clusters running in an Amazon Virtual Private Cloud (VPC).
     */
    SecurityGroupIds?: SecurityGroupIdsList;
    /**
     * Specifies the weekly time range during which maintenance on the cache cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:05:00-sun:09:00 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent.  The Amazon SNS topic owner must be same as the replication group owner.  
     */
    NotificationTopicArn?: String;
    /**
     * The name of the cache parameter group to apply to all of the clusters in this replication group. This change is asynchronously applied as soon as possible for parameters when the ApplyImmediately parameter is specified as true for this request.
     */
    CacheParameterGroupName?: String;
    /**
     * The status of the Amazon SNS notification topic for the replication group. Notifications are sent only if the status is active. Valid values: active | inactive 
     */
    NotificationTopicStatus?: String;
    /**
     * If true, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the PreferredMaintenanceWindow setting for the replication group. If false, then changes to the nodes in the replication group are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first. Valid values: true | false  Default: false 
     */
    ApplyImmediately?: Boolean;
    /**
     * The upgraded version of the cache engine to be run on the cache clusters in the replication group.  Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing replication group and create it anew with the earlier engine version. 
     */
    EngineVersion?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The number of days for which ElastiCache will retain automatic node group snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted.  Important If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of the node group specified by SnapshottingClusterId. Example: 05:00-09:00  If you do not specify this parameter, then ElastiCache will automatically choose an appropriate time range.
     */
    SnapshotWindow?: String;
    /**
     * A valid cache node type that you want to scale this replication group to. The value of this parameter must be one of the ScaleUpModifications values returned by the ListAllowedCacheNodeTypeModification action.
     */
    CacheNodeType?: String;
  }
  export interface ModifyReplicationGroupResult {
    ReplicationGroup?: ReplicationGroup;
  }
  export interface NodeGroup {
    /**
     * The identifier for the node group. A replication group contains only one node group; therefore, the node group ID is 0001.
     */
    NodeGroupId?: String;
    /**
     * The current state of this replication group - creating, available, etc.
     */
    Status?: String;
    PrimaryEndpoint?: Endpoint;
    /**
     * A list containing information about individual nodes within the node group.
     */
    NodeGroupMembers?: NodeGroupMemberList;
  }
  export type NodeGroupList = NodeGroup[];
  export interface NodeGroupMember {
    /**
     * The ID of the cache cluster to which the node belongs.
     */
    CacheClusterId?: String;
    /**
     * The ID of the node within its cache cluster. A node ID is a numeric identifier (0001, 0002, etc.).
     */
    CacheNodeId?: String;
    ReadEndpoint?: Endpoint;
    /**
     * The name of the Availability Zone in which the node is located.
     */
    PreferredAvailabilityZone?: String;
    /**
     * The role that is currently assigned to the node - primary or replica.
     */
    CurrentRole?: String;
  }
  export type NodeGroupMemberList = NodeGroupMember[];
  export interface NodeSnapshot {
    /**
     * The cache node identifier for the node in the source cache cluster.
     */
    CacheNodeId?: String;
    /**
     * The size of the cache on the source cache node.
     */
    CacheSize?: String;
    /**
     * The date and time when the cache node was created in the source cache cluster.
     */
    CacheNodeCreateTime?: TStamp;
    /**
     * The date and time when the source node's metadata and cache data set was obtained for the snapshot.
     */
    SnapshotCreateTime?: TStamp;
  }
  export type NodeSnapshotList = NodeSnapshot[];
  export type NodeTypeList = String[];
  export interface NotificationConfiguration {
    /**
     * The Amazon Resource Name (ARN) that identifies the topic.
     */
    TopicArn?: String;
    /**
     * The current state of the topic.
     */
    TopicStatus?: String;
  }
  export interface Parameter {
    /**
     * The name of the parameter.
     */
    ParameterName?: String;
    /**
     * The value of the parameter.
     */
    ParameterValue?: String;
    /**
     * A description of the parameter.
     */
    Description?: String;
    /**
     * The source of the parameter.
     */
    Source?: String;
    /**
     * The valid data type for the parameter.
     */
    DataType?: String;
    /**
     * The valid range of values for the parameter.
     */
    AllowedValues?: String;
    /**
     * Indicates whether (true) or not (false) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.
     */
    IsModifiable?: Boolean;
    /**
     * The earliest cache engine version to which the parameter can apply.
     */
    MinimumEngineVersion?: String;
    /**
     * ChangeType indicates whether a change to the parameter will be applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window's reboot. For more information, see Rebooting a Cluster.
     */
    ChangeType?: ChangeType;
  }
  export interface ParameterNameValue {
    /**
     * The name of the parameter.
     */
    ParameterName?: String;
    /**
     * The value of the parameter.
     */
    ParameterValue?: String;
  }
  export type ParameterNameValueList = ParameterNameValue[];
  export type ParametersList = Parameter[];
  export type PendingAutomaticFailoverStatus = string;
  export interface PendingModifiedValues {
    /**
     * The new number of cache nodes for the cache cluster. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * A list of cache node IDs that are being removed (or will be removed) from the cache cluster. A node ID is a numeric identifier (0001, 0002, etc.).
     */
    CacheNodeIdsToRemove?: CacheNodeIdsList;
    /**
     * The new cache engine version that the cache cluster will run.
     */
    EngineVersion?: String;
    /**
     * The cache node type that this cache cluster or replication group will be scaled to.
     */
    CacheNodeType?: String;
  }
  export type PreferredAvailabilityZoneList = String[];
  export interface PurchaseReservedCacheNodesOfferingMessage {
    /**
     * The ID of the reserved cache node offering to purchase. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706 
     */
    ReservedCacheNodesOfferingId: String;
    /**
     * A customer-specified identifier to track this reservation.  The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation. If this parameter is not specified, ElastiCache automatically generates an identifier for the reservation.  Example: myreservationID
     */
    ReservedCacheNodeId?: String;
    /**
     * The number of cache node instances to reserve. Default: 1 
     */
    CacheNodeCount?: IntegerOptional;
  }
  export interface PurchaseReservedCacheNodesOfferingResult {
    ReservedCacheNode?: ReservedCacheNode;
  }
  export interface RebootCacheClusterMessage {
    /**
     * The cache cluster identifier. This parameter is stored as a lowercase string.
     */
    CacheClusterId: String;
    /**
     * A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cache cluster, specify all of the cache node IDs.
     */
    CacheNodeIdsToReboot?: CacheNodeIdsList;
  }
  export interface RebootCacheClusterResult {
    CacheCluster?: CacheCluster;
  }
  export interface RecurringCharge {
    /**
     * The monetary amount of the recurring charge.
     */
    RecurringChargeAmount?: Double;
    /**
     * The frequency of the recurring charge.
     */
    RecurringChargeFrequency?: String;
  }
  export type RecurringChargeList = RecurringCharge[];
  export interface RemoveTagsFromResourceMessage {
    /**
     * The Amazon Resource Name (ARN) of the resource from which you want the tags removed, for example arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster or arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot. For more information on ARNs, go to Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    ResourceName: String;
    /**
     * A list of TagKeys identifying the tags you want removed from the named resource. For example, TagKeys.member.1=Region removes the cost allocation tag with the key name Region from the resource named by the ResourceName parameter.
     */
    TagKeys?: KeyList;
  }
  export interface ReplicationGroup {
    /**
     * The identifier for the replication group.
     */
    ReplicationGroupId?: String;
    /**
     * The description of the replication group.
     */
    Description?: String;
    /**
     * The current state of this replication group - creating, available, etc.
     */
    Status?: String;
    /**
     * A group of settings to be applied to the replication group, either immediately or during the next maintenance window.
     */
    PendingModifiedValues?: ReplicationGroupPendingModifiedValues;
    /**
     * The names of all the cache clusters that are part of this replication group.
     */
    MemberClusters?: ClusterIdList;
    /**
     * A single element list with information about the nodes in the replication group.
     */
    NodeGroups?: NodeGroupList;
    /**
     * The cache cluster ID that is used as the daily snapshot source for the replication group.
     */
    SnapshottingClusterId?: String;
    /**
     * Indicates the status of Multi-AZ for this replication group.  ElastiCache Multi-AZ replication groups are not supported on:   Redis versions earlier than 2.8.6.   T1 and T2 cache node types.   
     */
    AutomaticFailover?: AutomaticFailoverStatus;
  }
  export type ReplicationGroupList = ReplicationGroup[];
  export interface ReplicationGroupMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of replication groups. Each item in the list contains detailed information about one replication group.
     */
    ReplicationGroups?: ReplicationGroupList;
  }
  export interface ReplicationGroupPendingModifiedValues {
    /**
     * The primary cluster ID which will be applied immediately (if --apply-immediately was specified), or during the next maintenance window.
     */
    PrimaryClusterId?: String;
    /**
     * Indicates the status of Multi-AZ for this replication group.  ElastiCache Multi-AZ replication groups are not supported on:   Redis versions earlier than 2.8.6.   T1 and T2 cache node types.   
     */
    AutomaticFailoverStatus?: PendingAutomaticFailoverStatus;
  }
  export interface ReservedCacheNode {
    /**
     * The unique identifier for the reservation.
     */
    ReservedCacheNodeId?: String;
    /**
     * The offering identifier.
     */
    ReservedCacheNodesOfferingId?: String;
    /**
     * The cache node type for the reserved cache nodes. Valid node types are as follows:   General purpose:   Current generation: cache.t2.micro, cache.t2.small, cache.t2.medium, cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge    Previous generation: cache.t1.micro, cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized: cache.c1.xlarge    Memory optimized:   Current generation: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All t2 instances are created in an Amazon Virtual Private Cloud (VPC).   Redis backup/restore is not supported for t2 instances.   Redis Append-only files (AOF) functionality is not supported for t1 or t2 instances.   For a complete listing of cache node types and specifications, see Amazon ElastiCache Product Features and Details and Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The time the reservation started.
     */
    StartTime?: TStamp;
    /**
     * The duration of the reservation in seconds.
     */
    Duration?: Integer;
    /**
     * The fixed price charged for this reserved cache node.
     */
    FixedPrice?: Double;
    /**
     * The hourly price charged for this reserved cache node.
     */
    UsagePrice?: Double;
    /**
     * The number of cache nodes that have been reserved.
     */
    CacheNodeCount?: Integer;
    /**
     * The description of the reserved cache node.
     */
    ProductDescription?: String;
    /**
     * The offering type of this reserved cache node.
     */
    OfferingType?: String;
    /**
     * The state of the reserved cache node.
     */
    State?: String;
    /**
     * The recurring price charged to run this reserved cache node.
     */
    RecurringCharges?: RecurringChargeList;
  }
  export type ReservedCacheNodeList = ReservedCacheNode[];
  export interface ReservedCacheNodeMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of reserved cache nodes. Each element in the list contains detailed information about one node.
     */
    ReservedCacheNodes?: ReservedCacheNodeList;
  }
  export interface ReservedCacheNodesOffering {
    /**
     * A unique identifier for the reserved cache node offering.
     */
    ReservedCacheNodesOfferingId?: String;
    /**
     * The cache node type for the reserved cache node. Valid node types are as follows:   General purpose:   Current generation: cache.t2.micro, cache.t2.small, cache.t2.medium, cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge    Previous generation: cache.t1.micro, cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized: cache.c1.xlarge    Memory optimized:   Current generation: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All t2 instances are created in an Amazon Virtual Private Cloud (VPC).   Redis backup/restore is not supported for t2 instances.   Redis Append-only files (AOF) functionality is not supported for t1 or t2 instances.   For a complete listing of cache node types and specifications, see Amazon ElastiCache Product Features and Details and Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The duration of the offering. in seconds.
     */
    Duration?: Integer;
    /**
     * The fixed price charged for this offering.
     */
    FixedPrice?: Double;
    /**
     * The hourly price charged for this offering.
     */
    UsagePrice?: Double;
    /**
     * The cache engine used by the offering.
     */
    ProductDescription?: String;
    /**
     * The offering type.
     */
    OfferingType?: String;
    /**
     * The recurring price charged to run this reserved cache node.
     */
    RecurringCharges?: RecurringChargeList;
  }
  export type ReservedCacheNodesOfferingList = ReservedCacheNodesOffering[];
  export interface ReservedCacheNodesOfferingMessage {
    /**
     * Provides an identifier to allow retrieval of paginated results.
     */
    Marker?: String;
    /**
     * A list of reserved cache node offerings. Each element in the list contains detailed information about one offering.
     */
    ReservedCacheNodesOfferings?: ReservedCacheNodesOfferingList;
  }
  export interface ResetCacheParameterGroupMessage {
    /**
     * The name of the cache parameter group to reset.
     */
    CacheParameterGroupName: String;
    /**
     * If true, all parameters in the cache parameter group will be reset to their default values. If false, only the parameters listed by ParameterNameValues are reset to their default values. Valid values: true | false 
     */
    ResetAllParameters?: Boolean;
    /**
     * An array of parameter names to reset to their default values. If ResetAllParameters is false, you must specify the name of at least one parameter to reset.
     */
    ParameterNameValues?: ParameterNameValueList;
  }
  export interface RevokeCacheSecurityGroupIngressMessage {
    /**
     * The name of the cache security group to revoke ingress from.
     */
    CacheSecurityGroupName: String;
    /**
     * The name of the Amazon EC2 security group to revoke access from.
     */
    EC2SecurityGroupName?: String;
    /**
     * The AWS account number of the Amazon EC2 security group owner. Note that this is not the same thing as an AWS access key ID - you must provide a valid AWS account number for this parameter.
     */
    EC2SecurityGroupOwnerId?: String;
  }
  export interface RevokeCacheSecurityGroupIngressResult {
    CacheSecurityGroup?: CacheSecurityGroup;
  }
  export type SecurityGroupIdsList = String[];
  export interface SecurityGroupMembership {
    /**
     * The identifier of the cache security group.
     */
    SecurityGroupId?: String;
    /**
     * The status of the cache security group membership. The status changes whenever a cache security group is modified, or when the cache security groups assigned to a cache cluster are modified.
     */
    Status?: String;
  }
  export type SecurityGroupMembershipList = SecurityGroupMembership[];
  export interface Snapshot {
    /**
     * The name of a snapshot. For an automatic snapshot, the name is system-generated; for a manual snapshot, this is the user-provided name.
     */
    SnapshotName?: String;
    /**
     * The user-supplied identifier of the source cache cluster.
     */
    CacheClusterId?: String;
    /**
     * The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.
     */
    SnapshotStatus?: String;
    /**
     * Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).
     */
    SnapshotSource?: String;
    /**
     * The name of the compute and memory capacity node type for the source cache cluster. Valid node types are as follows:   General purpose:   Current generation: cache.t2.micro, cache.t2.small, cache.t2.medium, cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge    Previous generation: cache.t1.micro, cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge      Compute optimized: cache.c1.xlarge    Memory optimized:   Current generation: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge    Previous generation: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge       Notes:    All t2 instances are created in an Amazon Virtual Private Cloud (VPC).   Redis backup/restore is not supported for t2 instances.   Redis Append-only files (AOF) functionality is not supported for t1 or t2 instances.   For a complete listing of cache node types and specifications, see Amazon ElastiCache Product Features and Details and Cache Node Type-Specific Parameters for Memcached or Cache Node Type-Specific Parameters for Redis.
     */
    CacheNodeType?: String;
    /**
     * The name of the cache engine (memcached or redis) used by the source cache cluster.
     */
    Engine?: String;
    /**
     * The version of the cache engine version that is used by the source cache cluster.
     */
    EngineVersion?: String;
    /**
     * The number of cache nodes in the source cache cluster. For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.
     */
    NumCacheNodes?: IntegerOptional;
    /**
     * The name of the Availability Zone in which the source cache cluster is located.
     */
    PreferredAvailabilityZone?: String;
    /**
     * The date and time when the source cache cluster was created.
     */
    CacheClusterCreateTime?: TStamp;
    /**
     * Specifies the weekly time range during which maintenance on the cache cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are:    sun     mon     tue     wed     thu     fri     sat    Example: sun:05:00-sun:09:00 
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The Amazon Resource Name (ARN) for the topic used by the source cache cluster for publishing notifications.
     */
    TopicArn?: String;
    /**
     * The port number used by each cache nodes in the source cache cluster.
     */
    Port?: IntegerOptional;
    /**
     * The cache parameter group that is associated with the source cache cluster.
     */
    CacheParameterGroupName?: String;
    /**
     * The name of the cache subnet group associated with the source cache cluster.
     */
    CacheSubnetGroupName?: String;
    /**
     * The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the source cache cluster.
     */
    VpcId?: String;
    /**
     * This parameter is currently disabled.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * For an automatic snapshot, the number of days for which ElastiCache will retain the snapshot before deleting it. For manual snapshots, this field reflects the SnapshotRetentionLimit for the source cache cluster when the snapshot was created. This field is otherwise ignored: Manual snapshots do not expire, and can only be deleted using the DeleteSnapshot action.   Important If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
     */
    SnapshotRetentionLimit?: IntegerOptional;
    /**
     * The daily time range during which ElastiCache takes daily snapshots of the source cache cluster.
     */
    SnapshotWindow?: String;
    /**
     * A list of the cache nodes in the source cache cluster.
     */
    NodeSnapshots?: NodeSnapshotList;
  }
  export type SnapshotArnsList = String[];
  export type SnapshotList = Snapshot[];
  export type SourceType = string;
  export type String = string;
  export interface Subnet {
    /**
     * The unique identifier for the subnet.
     */
    SubnetIdentifier?: String;
    /**
     * The Availability Zone associated with the subnet.
     */
    SubnetAvailabilityZone?: AvailabilityZone;
  }
  export type SubnetIdentifierList = String[];
  export type SubnetList = Subnet[];
  export type TStamp = Date;
  export interface Tag {
    /**
     * The key for the tag.
     */
    Key?: String;
    /**
     * The tag's value. May not be null.
     */
    Value?: String;
  }
  export type TagList = Tag[];
  export interface TagListMessage {
    /**
     * A list of cost allocation tags as key-value pairs.
     */
    TagList?: TagList;
  }
}
export = ElastiCache;
