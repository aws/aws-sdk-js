import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Kafka extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Kafka.Types.ClientConfiguration)
  config: Config & Kafka.Types.ClientConfiguration;
  /**
   * Creates a new MSK cluster.
   */
  createCluster(params: Kafka.Types.CreateClusterRequest, callback?: (err: AWSError, data: Kafka.Types.CreateClusterResponse) => void): Request<Kafka.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new MSK cluster.
   */
  createCluster(callback?: (err: AWSError, data: Kafka.Types.CreateClusterResponse) => void): Request<Kafka.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new MSK configuration.
   */
  createConfiguration(params: Kafka.Types.CreateConfigurationRequest, callback?: (err: AWSError, data: Kafka.Types.CreateConfigurationResponse) => void): Request<Kafka.Types.CreateConfigurationResponse, AWSError>;
  /**
   * Creates a new MSK configuration.
   */
  createConfiguration(callback?: (err: AWSError, data: Kafka.Types.CreateConfigurationResponse) => void): Request<Kafka.Types.CreateConfigurationResponse, AWSError>;
  /**
   * Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.
   */
  deleteCluster(params: Kafka.Types.DeleteClusterRequest, callback?: (err: AWSError, data: Kafka.Types.DeleteClusterResponse) => void): Request<Kafka.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.
   */
  deleteCluster(callback?: (err: AWSError, data: Kafka.Types.DeleteClusterResponse) => void): Request<Kafka.Types.DeleteClusterResponse, AWSError>;
  /**
   * Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.
   */
  describeCluster(params: Kafka.Types.DescribeClusterRequest, callback?: (err: AWSError, data: Kafka.Types.DescribeClusterResponse) => void): Request<Kafka.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.
   */
  describeCluster(callback?: (err: AWSError, data: Kafka.Types.DescribeClusterResponse) => void): Request<Kafka.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns a description of this MSK configuration.
   */
  describeConfiguration(params: Kafka.Types.DescribeConfigurationRequest, callback?: (err: AWSError, data: Kafka.Types.DescribeConfigurationResponse) => void): Request<Kafka.Types.DescribeConfigurationResponse, AWSError>;
  /**
   * Returns a description of this MSK configuration.
   */
  describeConfiguration(callback?: (err: AWSError, data: Kafka.Types.DescribeConfigurationResponse) => void): Request<Kafka.Types.DescribeConfigurationResponse, AWSError>;
  /**
   * Returns a description of this revision of the configuration.
   */
  describeConfigurationRevision(params: Kafka.Types.DescribeConfigurationRevisionRequest, callback?: (err: AWSError, data: Kafka.Types.DescribeConfigurationRevisionResponse) => void): Request<Kafka.Types.DescribeConfigurationRevisionResponse, AWSError>;
  /**
   * Returns a description of this revision of the configuration.
   */
  describeConfigurationRevision(callback?: (err: AWSError, data: Kafka.Types.DescribeConfigurationRevisionResponse) => void): Request<Kafka.Types.DescribeConfigurationRevisionResponse, AWSError>;
  /**
   * A list of brokers that a client application can use to bootstrap.
   */
  getBootstrapBrokers(params: Kafka.Types.GetBootstrapBrokersRequest, callback?: (err: AWSError, data: Kafka.Types.GetBootstrapBrokersResponse) => void): Request<Kafka.Types.GetBootstrapBrokersResponse, AWSError>;
  /**
   * A list of brokers that a client application can use to bootstrap.
   */
  getBootstrapBrokers(callback?: (err: AWSError, data: Kafka.Types.GetBootstrapBrokersResponse) => void): Request<Kafka.Types.GetBootstrapBrokersResponse, AWSError>;
  /**
   * Returns a list of clusters in an account.
   */
  listClusters(params: Kafka.Types.ListClustersRequest, callback?: (err: AWSError, data: Kafka.Types.ListClustersResponse) => void): Request<Kafka.Types.ListClustersResponse, AWSError>;
  /**
   * Returns a list of clusters in an account.
   */
  listClusters(callback?: (err: AWSError, data: Kafka.Types.ListClustersResponse) => void): Request<Kafka.Types.ListClustersResponse, AWSError>;
  /**
   * Returns a list of all the MSK configurations in this Region for this account.
   */
  listConfigurations(params: Kafka.Types.ListConfigurationsRequest, callback?: (err: AWSError, data: Kafka.Types.ListConfigurationsResponse) => void): Request<Kafka.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Returns a list of all the MSK configurations in this Region for this account.
   */
  listConfigurations(callback?: (err: AWSError, data: Kafka.Types.ListConfigurationsResponse) => void): Request<Kafka.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Returns a list of the broker nodes in the cluster.
   */
  listNodes(params: Kafka.Types.ListNodesRequest, callback?: (err: AWSError, data: Kafka.Types.ListNodesResponse) => void): Request<Kafka.Types.ListNodesResponse, AWSError>;
  /**
   * Returns a list of the broker nodes in the cluster.
   */
  listNodes(callback?: (err: AWSError, data: Kafka.Types.ListNodesResponse) => void): Request<Kafka.Types.ListNodesResponse, AWSError>;
  /**
   * Returns a list of tags attached to a resource.
   */
  listTagsForResource(params: Kafka.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Kafka.Types.ListTagsForResourceResponse) => void): Request<Kafka.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of tags attached to a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Kafka.Types.ListTagsForResourceResponse) => void): Request<Kafka.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Tag a resource with given tags.
   */
  tagResource(params: Kafka.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Tag a resource with given tags.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove tags of a resource by given tag keys.
   */
  untagResource(params: Kafka.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove tags of a resource by given tag keys.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Kafka {
  export type BrokerAZDistribution = "DEFAULT"|string;
  export interface BrokerNodeGroupInfo {
    /**
     * The distribution of broker nodes across Availability Zones.
     */
    BrokerAZDistribution?: BrokerAZDistribution;
    /**
     * The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't be in Availability Zone us-east-1e.
     */
    ClientSubnets: __listOf__string;
    /**
     * The type of Amazon EC2 instances to use for Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,
kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.
     */
    InstanceType: __stringMin5Max32;
    /**
     * The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster.
     */
    SecurityGroups?: __listOf__string;
    /**
     * Contains information about storage volumes attached to MSK broker nodes.
     */
    StorageInfo?: StorageInfo;
  }
  export interface BrokerNodeInfo {
    /**
     * The attached elastic network interface of the broker.
     */
    AttachedENIId?: __string;
    /**
     * The ID of the broker.
     */
    BrokerId?: __double;
    /**
     * The client subnet to which this broker node belongs.
     */
    ClientSubnet?: __string;
    /**
     * The virtual private cloud (VPC) of the client.
     */
    ClientVpcIpAddress?: __string;
    /**
     * Information about the version of software currently deployed on the Kafka brokers in the cluster.
     */
    CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
  }
  export interface BrokerSoftwareInfo {
    /**
     * The Amazon Resource Name (ARN) of the configuration used for the cluster.
     */
    ConfigurationArn?: __string;
    /**
     * The revision of the configuration to use.
     */
    ConfigurationRevision?: __long;
    /**
     * The version of Apache Kafka.
     */
    KafkaVersion?: __string;
  }
  export interface ClusterInfo {
    /**
     * Information about the broker nodes.
     */
    BrokerNodeGroupInfo?: BrokerNodeGroupInfo;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
     */
    ClusterArn?: __string;
    /**
     * The name of the cluster.
     */
    ClusterName?: __string;
    /**
     * The time when the cluster was created.
     */
    CreationTime?: __timestampIso8601;
    /**
     * Information about the version of software currently deployed on the Kafka brokers in the cluster.
     */
    CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
    /**
     * The current version of the MSK cluster.
     */
    CurrentVersion?: __string;
    /**
     * Includes all encryption-related information.
     */
    EncryptionInfo?: EncryptionInfo;
    /**
     * Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER.
     */
    EnhancedMonitoring?: EnhancedMonitoring;
    /**
     * The number of Kafka broker nodes in the cluster.
     */
    NumberOfBrokerNodes?: __integer;
    /**
     * The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.
     */
    State?: ClusterState;
    /**
     * The connection string to use to connect to the Apache ZooKeeper cluster.
     */
    ZookeeperConnectString?: __string;
  }
  export type ClusterState = "ACTIVE"|"CREATING"|"DELETING"|"FAILED"|string;
  export interface Configuration {
    /**
     * The Amazon Resource Name (ARN) of the configuration.
     */
    Arn: __string;
    /**
     * The time when the configuration was created.
     */
    CreationTime: __timestampIso8601;
    /**
     * The description of the configuration.
     */
    Description: __string;
    /**
     * An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.
     */
    KafkaVersions: __listOf__string;
    /**
     * Latest revision of the configuration.
     */
    LatestRevision: ConfigurationRevision;
    /**
     * The name of the configuration.
     */
    Name: __string;
  }
  export interface ConfigurationInfo {
    /**
     * ARN of the configuration to use.
     */
    Arn: __string;
    /**
     * The revision of the configuration to use.
     */
    Revision: __long;
  }
  export interface ConfigurationRevision {
    /**
     * The time when the configuration revision was created.
     */
    CreationTime: __timestampIso8601;
    /**
     * The description of the configuration revision.
     */
    Description?: __string;
    /**
     * The revision number.
     */
    Revision: __long;
  }
  export interface CreateClusterRequest {
    /**
     * Information about the broker nodes in the cluster.
     */
    BrokerNodeGroupInfo: BrokerNodeGroupInfo;
    /**
     * The name of the cluster.
     */
    ClusterName: __stringMin1Max64;
    /**
     * Comprises of the Configuration to be used on Kafka brokers in a cluster.
     */
    ConfigurationInfo?: ConfigurationInfo;
    /**
     * Includes all encryption-related information.
     */
    EncryptionInfo?: EncryptionInfo;
    /**
     * Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER.
     */
    EnhancedMonitoring?: EnhancedMonitoring;
    /**
     * The version of Apache Kafka.
     */
    KafkaVersion: __stringMin1Max128;
    /**
     * The number of Kafka broker nodes in the Amazon MSK cluster.
     */
    NumberOfBrokerNodes: __integerMin1Max15;
  }
  export interface CreateClusterResponse {
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     */
    ClusterArn?: __string;
    /**
     * The name of the MSK cluster.
     */
    ClusterName?: __string;
    /**
     * The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.
     */
    State?: ClusterState;
  }
  export interface CreateConfigurationRequest {
    /**
     * The description of the configuration.
     */
    Description?: __string;
    /**
     * The versions of Apache Kafka with which you can use this MSK configuration.
     */
    KafkaVersions: __listOf__string;
    /**
     * The name of the configuration.
     */
    Name: __string;
    /**
     * Contents of the server.properties file. When using the API, you must ensure that the contents of the file are base64 encoded. 
 When using the AWS Management Console, the SDK, or the AWS CLI, the contents of server.properties can be in plaintext.
     */
    ServerProperties: __blob;
  }
  export interface CreateConfigurationResponse {
    /**
     * The Amazon Resource Name (ARN) of the configuration.
     */
    Arn?: __string;
    /**
     * The time when the configuration was created.
     */
    CreationTime?: __timestampIso8601;
    /**
     * Latest revision of the configuration.
     */
    LatestRevision?: ConfigurationRevision;
    /**
     * The name of the configuration.
     */
    Name?: __string;
  }
  export interface DeleteClusterRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
     */
    ClusterArn: __string;
    /**
     * The current version of the MSK cluster.
     */
    CurrentVersion?: __string;
  }
  export interface DeleteClusterResponse {
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     */
    ClusterArn?: __string;
    /**
     * The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.
     */
    State?: ClusterState;
  }
  export interface DescribeClusterRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
     */
    ClusterArn: __string;
  }
  export interface DescribeClusterResponse {
    /**
     * The cluster information.
     */
    ClusterInfo?: ClusterInfo;
  }
  export interface DescribeConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.
     */
    Arn: __string;
  }
  export interface DescribeConfigurationResponse {
    /**
     * The Amazon Resource Name (ARN) of the configuration.
     */
    Arn?: __string;
    /**
     * The time when the configuration was created.
     */
    CreationTime?: __timestampIso8601;
    /**
     * The description of the configuration.
     */
    Description?: __string;
    /**
     * The versions of Apache Kafka with which you can use this MSK configuration.
     */
    KafkaVersions?: __listOf__string;
    /**
     * Latest revision of the configuration.
     */
    LatestRevision?: ConfigurationRevision;
    /**
     * The name of the configuration.
     */
    Name?: __string;
  }
  export interface DescribeConfigurationRevisionRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.
     */
    Arn: __string;
    /**
     * A string that uniquely identifies a revision of an MSK configuration.
     */
    Revision: __long;
  }
  export interface DescribeConfigurationRevisionResponse {
    /**
     * The Amazon Resource Name (ARN) of the configuration.
     */
    Arn?: __string;
    /**
     * The time when the configuration was created.
     */
    CreationTime?: __timestampIso8601;
    /**
     * The description of the configuration.
     */
    Description?: __string;
    /**
     * The revision number.
     */
    Revision?: __long;
    /**
     * Contents of the server.properties file. When using the API, you must ensure that the contents of the file are base64 encoded. 
 When using the AWS Management Console, the SDK, or the AWS CLI, the contents of server.properties can be in plaintext.
     */
    ServerProperties?: __blob;
  }
  export interface EBSStorageInfo {
    /**
     * The size in GiB of the EBS volume for the data drive on each broker node.
     */
    VolumeSize?: __integerMin1Max16384;
  }
  export interface EncryptionAtRest {
    /**
     * The AWS KMS key used for data encryption.
     */
    DataVolumeKMSKeyId: __string;
  }
  export interface EncryptionInfo {
    /**
     * The data volume encryption details.
     */
    EncryptionAtRest?: EncryptionAtRest;
  }
  export type EnhancedMonitoring = "DEFAULT"|"PER_BROKER"|"PER_TOPIC_PER_BROKER"|string;
  export interface GetBootstrapBrokersRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
     */
    ClusterArn: __string;
  }
  export interface GetBootstrapBrokersResponse {
    /**
     * A string containing one or more hostname:port pairs.
     */
    BootstrapBrokerString?: __string;
  }
  export interface ListClustersRequest {
    /**
     * Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.
     */
    ClusterNameFilter?: __string;
    /**
     * The maximum number of clusters to return in the response. If there are more clusters, the response includes a NextToken parameter.
     */
    MaxResults?: MaxResults;
    /**
     * The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response. 
 To get another batch of clusters, provide this token in your next request.
     */
    NextToken?: __string;
  }
  export interface ListClustersResponse {
    /**
     * Information on each of the MSK clusters in the response.
     */
    ClusterInfoList?: __listOfClusterInfo;
    /**
     * The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response. 
 To get another batch of clusters, provide this token in your next request.
     */
    NextToken?: __string;
  }
  export interface ListConfigurationsRequest {
    /**
     * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
     */
    MaxResults?: __string;
    /**
     * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
 To get the next batch, provide this token in your next request.
     */
    NextToken?: __string;
  }
  export interface ListConfigurationsResponse {
    /**
     * An array of MSK configurations.
     */
    Configurations?: __listOfConfiguration;
    /**
     * The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response. 
 To get another batch of configurations, provide this token in your next request.
     */
    NextToken?: __string;
  }
  export interface ListNodesRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
     */
    ClusterArn: __string;
    /**
     * The maximum number of clusters to return in the response. If there are more clusters, the response includes a NextToken parameter.
     */
    MaxResults?: MaxResults;
    /**
     * The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response. 
 To get another batch of clusters, provide this token in your next request.
     */
    NextToken?: __string;
  }
  export interface ListNodesResponse {
    /**
     * The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response. 
 To get another batch of nodes, provide this token in your next request.
     */
    NextToken?: __string;
    /**
     * List containing a NodeInfo object.
     */
    NodeInfoList?: __listOfNodeInfo;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the resource.
     */
    ResourceArn: __string;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The key-value pairs for the resource tags
     */
    Tags?: __mapOf__string;
  }
  export type MaxResults = number;
  export interface NodeInfo {
    /**
     * The start time.
     */
    AddedToClusterTime?: __string;
    /**
     * The broker node info.
     */
    BrokerNodeInfo?: BrokerNodeInfo;
    /**
     * The instance type.
     */
    InstanceType?: __string;
    /**
     * The Amazon Resource Name (ARN) of the node.
     */
    NodeARN?: __string;
    /**
     * The node type.
     */
    NodeType?: NodeType;
    /**
     * The ZookeeperNodeInfo.
     */
    ZookeeperNodeInfo?: ZookeeperNodeInfo;
  }
  export type NodeType = "BROKER"|string;
  export interface StorageInfo {
    /**
     * EBS volume information.
     */
    EbsStorageInfo?: EBSStorageInfo;
  }
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the resource.
     */
    ResourceArn: __string;
    /**
     * The key-value pairs for the resource tags
     */
    Tags: __mapOf__string;
  }
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the resource.
     */
    ResourceArn: __string;
    /**
     * The list of tag keys.
     */
    TagKeys: __listOf__string;
  }
  export interface ZookeeperNodeInfo {
    /**
     * The attached elastic network interface of the broker.
     */
    AttachedENIId?: __string;
    /**
     * The virtual private cloud (VPC) IP address of the client.
     */
    ClientVpcIpAddress?: __string;
    /**
     * The role-specific ID for Zookeeper.
     */
    ZookeeperId?: __double;
    /**
     * The version of Zookeeper.
     */
    ZookeeperVersion?: __string;
  }
  export type __blob = Buffer|Uint8Array|Blob|string;
  export type __double = number;
  export type __integer = number;
  export type __integerMin1Max15 = number;
  export type __integerMin1Max16384 = number;
  export type __listOfClusterInfo = ClusterInfo[];
  export type __listOfConfiguration = Configuration[];
  export type __listOfNodeInfo = NodeInfo[];
  export type __listOf__string = __string[];
  export type __long = number;
  export type __mapOf__string = {[key: string]: __string};
  export type __string = string;
  export type __stringMin1Max128 = string;
  export type __stringMin1Max64 = string;
  export type __stringMin5Max32 = string;
  export type __timestampIso8601 = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Kafka client.
   */
  export import Types = Kafka;
}
export = Kafka;
