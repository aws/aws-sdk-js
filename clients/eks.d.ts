import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class EKS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EKS.Types.ClientConfiguration)
  config: Config & EKS.Types.ClientConfiguration;
  /**
   * Creates an Amazon EKS control plane.  The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, like etcd and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique, and runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the worker nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS worker nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs are not exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  Cluster creation typically takes between 10 and 15 minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch worker nodes into your cluster. For more information, see Managing Cluster Authentication and Launching Amazon EKS Worker Nodes in the Amazon EKS User Guide.
   */
  createCluster(params: EKS.Types.CreateClusterRequest, callback?: (err: AWSError, data: EKS.Types.CreateClusterResponse) => void): Request<EKS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates an Amazon EKS control plane.  The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, like etcd and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique, and runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the worker nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS worker nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs are not exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  Cluster creation typically takes between 10 and 15 minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch worker nodes into your cluster. For more information, see Managing Cluster Authentication and Launching Amazon EKS Worker Nodes in the Amazon EKS User Guide.
   */
  createCluster(callback?: (err: AWSError, data: EKS.Types.CreateClusterResponse) => void): Request<EKS.Types.CreateClusterResponse, AWSError>;
  /**
   * Deletes the Amazon EKS cluster control plane.   If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a Cluster in the Amazon EKS User Guide. 
   */
  deleteCluster(params: EKS.Types.DeleteClusterRequest, callback?: (err: AWSError, data: EKS.Types.DeleteClusterResponse) => void): Request<EKS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the Amazon EKS cluster control plane.   If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a Cluster in the Amazon EKS User Guide. 
   */
  deleteCluster(callback?: (err: AWSError, data: EKS.Types.DeleteClusterResponse) => void): Request<EKS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Create a kubeconfig for Amazon EKS.  The API server endpoint and certificate authority data are not available until the cluster reaches the ACTIVE state. 
   */
  describeCluster(params: EKS.Types.DescribeClusterRequest, callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Create a kubeconfig for Amazon EKS.  The API server endpoint and certificate authority data are not available until the cluster reaches the ACTIVE state. 
   */
  describeCluster(callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns descriptive information about an update against your Amazon EKS cluster. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.
   */
  describeUpdate(params: EKS.Types.DescribeUpdateRequest, callback?: (err: AWSError, data: EKS.Types.DescribeUpdateResponse) => void): Request<EKS.Types.DescribeUpdateResponse, AWSError>;
  /**
   * Returns descriptive information about an update against your Amazon EKS cluster. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.
   */
  describeUpdate(callback?: (err: AWSError, data: EKS.Types.DescribeUpdateResponse) => void): Request<EKS.Types.DescribeUpdateResponse, AWSError>;
  /**
   * Lists the Amazon EKS clusters in your AWS account in the specified Region.
   */
  listClusters(params: EKS.Types.ListClustersRequest, callback?: (err: AWSError, data: EKS.Types.ListClustersResponse) => void): Request<EKS.Types.ListClustersResponse, AWSError>;
  /**
   * Lists the Amazon EKS clusters in your AWS account in the specified Region.
   */
  listClusters(callback?: (err: AWSError, data: EKS.Types.ListClustersResponse) => void): Request<EKS.Types.ListClustersResponse, AWSError>;
  /**
   * Lists the updates associated with an Amazon EKS cluster in your AWS account, in the specified Region.
   */
  listUpdates(params: EKS.Types.ListUpdatesRequest, callback?: (err: AWSError, data: EKS.Types.ListUpdatesResponse) => void): Request<EKS.Types.ListUpdatesResponse, AWSError>;
  /**
   * Lists the updates associated with an Amazon EKS cluster in your AWS account, in the specified Region.
   */
  listUpdates(callback?: (err: AWSError, data: EKS.Types.ListUpdatesResponse) => void): Request<EKS.Types.ListUpdatesResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. You can use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can also use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs are not exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterConfig(params: EKS.Types.UpdateClusterConfigRequest, callback?: (err: AWSError, data: EKS.Types.UpdateClusterConfigResponse) => void): Request<EKS.Types.UpdateClusterConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. You can use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can also use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs are not exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterConfig(callback?: (err: AWSError, data: EKS.Types.UpdateClusterConfigResponse) => void): Request<EKS.Types.UpdateClusterConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterVersion(params: EKS.Types.UpdateClusterVersionRequest, callback?: (err: AWSError, data: EKS.Types.UpdateClusterVersionResponse) => void): Request<EKS.Types.UpdateClusterVersionResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterVersion(callback?: (err: AWSError, data: EKS.Types.UpdateClusterVersionResponse) => void): Request<EKS.Types.UpdateClusterVersionResponse, AWSError>;
  /**
   * Waits for the clusterActive state by periodically calling the underlying EKS.describeClusteroperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "clusterActive", params: EKS.Types.DescribeClusterRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Waits for the clusterActive state by periodically calling the underlying EKS.describeClusteroperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "clusterActive", callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Waits for the clusterDeleted state by periodically calling the underlying EKS.describeClusteroperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "clusterDeleted", params: EKS.Types.DescribeClusterRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Waits for the clusterDeleted state by periodically calling the underlying EKS.describeClusteroperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "clusterDeleted", callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
}
declare namespace EKS {
  export type Boolean = boolean;
  export type BoxedBoolean = boolean;
  export interface Certificate {
    /**
     * The base64 encoded certificate data required to communicate with your cluster. Add this to the certificate-authority-data section of the kubeconfig file for your cluster.
     */
    data?: String;
  }
  export interface Cluster {
    /**
     * The name of the cluster.
     */
    name?: String;
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     */
    arn?: String;
    /**
     * The Unix epoch timestamp in seconds for when the cluster was created.
     */
    createdAt?: Timestamp;
    /**
     * The Kubernetes server version for the cluster.
     */
    version?: String;
    /**
     * The endpoint for your Kubernetes API server.
     */
    endpoint?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
     */
    roleArn?: String;
    /**
     * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations and Cluster Security Group Considerations in the Amazon EKS User Guide.
     */
    resourcesVpcConfig?: VpcConfigResponse;
    /**
     * The logging configuration for your cluster.
     */
    logging?: Logging;
    /**
     * The current status of the cluster.
     */
    status?: ClusterStatus;
    /**
     * The certificate-authority-data for your cluster.
     */
    certificateAuthority?: Certificate;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The platform version of your Amazon EKS cluster. For more information, see Platform Versions in the  Amazon EKS User Guide .
     */
    platformVersion?: String;
  }
  export type ClusterName = string;
  export type ClusterStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|string;
  export interface CreateClusterRequest {
    /**
     * The unique name to give to your cluster.
     */
    name: ClusterName;
    /**
     * The desired Kubernetes version for your cluster. If you do not specify a value here, the latest version available in Amazon EKS is used.
     */
    version?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to other AWS API operations on your behalf. For more information, see Amazon EKS Service IAM Role in the  Amazon EKS User Guide .
     */
    roleArn: String;
    /**
     * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations and Cluster Security Group Considerations in the Amazon EKS User Guide. You must specify at least two subnets. You may specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane.
     */
    resourcesVpcConfig: VpcConfigRequest;
    /**
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs are not exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing. 
     */
    logging?: Logging;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface CreateClusterResponse {
    /**
     * The full description of your new cluster.
     */
    cluster?: Cluster;
  }
  export interface DeleteClusterRequest {
    /**
     * The name of the cluster to delete.
     */
    name: String;
  }
  export interface DeleteClusterResponse {
    /**
     * The full description of the cluster to delete.
     */
    cluster?: Cluster;
  }
  export interface DescribeClusterRequest {
    /**
     * The name of the cluster to describe.
     */
    name: String;
  }
  export interface DescribeClusterResponse {
    /**
     * The full description of your specified cluster.
     */
    cluster?: Cluster;
  }
  export interface DescribeUpdateRequest {
    /**
     * The name of the Amazon EKS cluster to update.
     */
    name: String;
    /**
     * The ID of the update to describe.
     */
    updateId: String;
  }
  export interface DescribeUpdateResponse {
    /**
     * The full description of the specified update.
     */
    update?: Update;
  }
  export type ErrorCode = "SubnetNotFound"|"SecurityGroupNotFound"|"EniLimitReached"|"IpNotAvailable"|"AccessDenied"|"OperationNotPermitted"|"VpcIdNotFound"|"Unknown"|string;
  export interface ErrorDetail {
    /**
     * A brief description of the error.     SubnetNotFound: One of the subnets associated with the cluster could not be found.    SecurityGroupNotFound: One of the security groups associated with the cluster could not be found.    EniLimitReached: You have reached the elastic network interface limit for your account.    IpNotAvailable: A subnet associated with the cluster does not have any free IP addresses.    AccessDenied: You do not have permissions to perform the specified operation.    OperationNotPermitted: The service role associated with the cluster does not have the required access permissions for Amazon EKS.    VpcIdNotFound: The VPC associated with the cluster could not be found.  
     */
    errorCode?: ErrorCode;
    /**
     * A more complete description of the error.
     */
    errorMessage?: String;
    /**
     * An optional field that contains the resource IDs associated with the error.
     */
    resourceIds?: StringList;
  }
  export type ErrorDetails = ErrorDetail[];
  export interface ListClustersRequest {
    /**
     * The maximum number of cluster results returned by ListClusters in paginated output. When this parameter is used, ListClusters only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListClusters request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListClusters returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: ListClustersRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListClusters request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListClustersRequestMaxResults = number;
  export interface ListClustersResponse {
    /**
     * A list of all of the clusters for your account in the specified Region.
     */
    clusters?: StringList;
    /**
     * The nextToken value to include in a future ListClusters request. When the results of a ListClusters request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListUpdatesRequest {
    /**
     * The name of the Amazon EKS cluster for which to list updates.
     */
    name: String;
    /**
     * The nextToken value returned from a previous paginated ListUpdates request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
    /**
     * The maximum number of update results returned by ListUpdates in paginated output. When this parameter is used, ListUpdates only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListUpdates request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListUpdates returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: ListUpdatesRequestMaxResults;
  }
  export type ListUpdatesRequestMaxResults = number;
  export interface ListUpdatesResponse {
    /**
     * A list of all the updates for the specified cluster and Region.
     */
    updateIds?: StringList;
    /**
     * The nextToken value to include in a future ListUpdates request. When the results of a ListUpdates request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface LogSetup {
    /**
     * The available cluster control plane log types.
     */
    types?: LogTypes;
    /**
     * If a log type is enabled, then that log type exports its control plane logs to CloudWatch Logs. If a log type is not enabled, then that log type does not export its control plane logs. Each individual log type can be enabled or disabled independently.
     */
    enabled?: BoxedBoolean;
  }
  export type LogSetups = LogSetup[];
  export type LogType = "api"|"audit"|"authenticator"|"controllerManager"|"scheduler"|string;
  export type LogTypes = LogType[];
  export interface Logging {
    /**
     * The cluster control plane logging configuration for your cluster.
     */
    clusterLogging?: LogSetups;
  }
  export type String = string;
  export type StringList = String[];
  export type Timestamp = Date;
  export interface Update {
    /**
     * A UUID that is used to track the update.
     */
    id?: String;
    /**
     * The current status of the update.
     */
    status?: UpdateStatus;
    /**
     * The type of the update.
     */
    type?: UpdateType;
    /**
     * A key-value map that contains the parameters associated with the update.
     */
    params?: UpdateParams;
    /**
     * The Unix epoch timestamp in seconds for when the update was created.
     */
    createdAt?: Timestamp;
    /**
     * Any errors associated with a Failed update.
     */
    errors?: ErrorDetails;
  }
  export interface UpdateClusterConfigRequest {
    /**
     * The name of the Amazon EKS cluster to update.
     */
    name: String;
    resourcesVpcConfig?: VpcConfigRequest;
    /**
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs are not exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing. 
     */
    logging?: Logging;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateClusterConfigResponse {
    update?: Update;
  }
  export interface UpdateClusterVersionRequest {
    /**
     * The name of the Amazon EKS cluster to update.
     */
    name: String;
    /**
     * The desired Kubernetes version following a successful update.
     */
    version: String;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateClusterVersionResponse {
    /**
     * The full description of the specified update
     */
    update?: Update;
  }
  export interface UpdateParam {
    /**
     * The keys associated with an update request.
     */
    type?: UpdateParamType;
    /**
     * The value of the keys submitted as part of an update request.
     */
    value?: String;
  }
  export type UpdateParamType = "Version"|"PlatformVersion"|"EndpointPrivateAccess"|"EndpointPublicAccess"|"ClusterLogging"|string;
  export type UpdateParams = UpdateParam[];
  export type UpdateStatus = "InProgress"|"Failed"|"Cancelled"|"Successful"|string;
  export type UpdateType = "VersionUpdate"|"EndpointAccessUpdate"|"LoggingUpdate"|string;
  export interface VpcConfigRequest {
    /**
     * Specify subnets for your Amazon EKS worker nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your worker nodes and the Kubernetes control plane.
     */
    subnetIds?: StringList;
    /**
     * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you do not specify a security group, the default security group for your VPC is used.
     */
    securityGroupIds?: StringList;
    /**
     * Set this value to false to disable public access for your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
     */
    endpointPublicAccess?: BoxedBoolean;
    /**
     * Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC will use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
     */
    endpointPrivateAccess?: BoxedBoolean;
  }
  export interface VpcConfigResponse {
    /**
     * The subnets associated with your cluster.
     */
    subnetIds?: StringList;
    /**
     * The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your worker nodes and the Kubernetes control plane.
     */
    securityGroupIds?: StringList;
    /**
     * The VPC associated with your cluster.
     */
    vpcId?: String;
    /**
     * This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If the Amazon EKS public API server endpoint is disabled, your cluster's Kubernetes API server can only receive requests that originate from within the cluster VPC. 
     */
    endpointPublicAccess?: Boolean;
    /**
     * This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster's VPC will use the private VPC endpoint instead of traversing the internet.
     */
    endpointPrivateAccess?: Boolean;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EKS client.
   */
  export import Types = EKS;
}
export = EKS;
