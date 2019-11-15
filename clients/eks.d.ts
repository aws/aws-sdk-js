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
   * Creates an Amazon EKS control plane.  The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the worker nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS worker nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  Cluster creation typically takes between 10 and 15 minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch worker nodes into your cluster. For more information, see Managing Cluster Authentication and Launching Amazon EKS Worker Nodes in the Amazon EKS User Guide.
   */
  createCluster(params: EKS.Types.CreateClusterRequest, callback?: (err: AWSError, data: EKS.Types.CreateClusterResponse) => void): Request<EKS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates an Amazon EKS control plane.  The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the worker nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS worker nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  Cluster creation typically takes between 10 and 15 minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch worker nodes into your cluster. For more information, see Managing Cluster Authentication and Launching Amazon EKS Worker Nodes in the Amazon EKS User Guide.
   */
  createCluster(callback?: (err: AWSError, data: EKS.Types.CreateClusterResponse) => void): Request<EKS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a managed worker node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS-optimized Amazon Linux 2 AMI. For more information, see Managed Node Groups in the Amazon EKS User Guide. 
   */
  createNodegroup(params: EKS.Types.CreateNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.CreateNodegroupResponse) => void): Request<EKS.Types.CreateNodegroupResponse, AWSError>;
  /**
   * Creates a managed worker node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS-optimized Amazon Linux 2 AMI. For more information, see Managed Node Groups in the Amazon EKS User Guide. 
   */
  createNodegroup(callback?: (err: AWSError, data: EKS.Types.CreateNodegroupResponse) => void): Request<EKS.Types.CreateNodegroupResponse, AWSError>;
  /**
   * Deletes the Amazon EKS cluster control plane. If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a Cluster in the Amazon EKS User Guide. If you have managed node groups attached to the cluster, you must delete them first. For more information, see DeleteNodegroup.
   */
  deleteCluster(params: EKS.Types.DeleteClusterRequest, callback?: (err: AWSError, data: EKS.Types.DeleteClusterResponse) => void): Request<EKS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the Amazon EKS cluster control plane. If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a Cluster in the Amazon EKS User Guide. If you have managed node groups attached to the cluster, you must delete them first. For more information, see DeleteNodegroup.
   */
  deleteCluster(callback?: (err: AWSError, data: EKS.Types.DeleteClusterResponse) => void): Request<EKS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes an Amazon EKS node group for a cluster.
   */
  deleteNodegroup(params: EKS.Types.DeleteNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.DeleteNodegroupResponse) => void): Request<EKS.Types.DeleteNodegroupResponse, AWSError>;
  /**
   * Deletes an Amazon EKS node group for a cluster.
   */
  deleteNodegroup(callback?: (err: AWSError, data: EKS.Types.DeleteNodegroupResponse) => void): Request<EKS.Types.DeleteNodegroupResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Create a kubeconfig for Amazon EKS.  The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state. 
   */
  describeCluster(params: EKS.Types.DescribeClusterRequest, callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Create a kubeconfig for Amazon EKS.  The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state. 
   */
  describeCluster(callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS node group.
   */
  describeNodegroup(params: EKS.Types.DescribeNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS node group.
   */
  describeNodegroup(callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.
   */
  describeUpdate(params: EKS.Types.DescribeUpdateRequest, callback?: (err: AWSError, data: EKS.Types.DescribeUpdateResponse) => void): Request<EKS.Types.DescribeUpdateResponse, AWSError>;
  /**
   * Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.
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
   * Lists the Amazon EKS node groups associated with the specified cluster in your AWS account in the specified Region.
   */
  listNodegroups(params: EKS.Types.ListNodegroupsRequest, callback?: (err: AWSError, data: EKS.Types.ListNodegroupsResponse) => void): Request<EKS.Types.ListNodegroupsResponse, AWSError>;
  /**
   * Lists the Amazon EKS node groups associated with the specified cluster in your AWS account in the specified Region.
   */
  listNodegroups(callback?: (err: AWSError, data: EKS.Types.ListNodegroupsResponse) => void): Request<EKS.Types.ListNodegroupsResponse, AWSError>;
  /**
   * List the tags for an Amazon EKS resource.
   */
  listTagsForResource(params: EKS.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: EKS.Types.ListTagsForResourceResponse) => void): Request<EKS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List the tags for an Amazon EKS resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: EKS.Types.ListTagsForResourceResponse) => void): Request<EKS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the updates associated with an Amazon EKS cluster or managed node group in your AWS account, in the specified Region.
   */
  listUpdates(params: EKS.Types.ListUpdatesRequest, callback?: (err: AWSError, data: EKS.Types.ListUpdatesResponse) => void): Request<EKS.Types.ListUpdatesResponse, AWSError>;
  /**
   * Lists the updates associated with an Amazon EKS cluster or managed node group in your AWS account, in the specified Region.
   */
  listUpdates(callback?: (err: AWSError, data: EKS.Types.ListUpdatesResponse) => void): Request<EKS.Types.ListUpdatesResponse, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and worker nodes associated with the cluster.
   */
  tagResource(params: EKS.Types.TagResourceRequest, callback?: (err: AWSError, data: EKS.Types.TagResourceResponse) => void): Request<EKS.Types.TagResourceResponse, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and worker nodes associated with the cluster.
   */
  tagResource(callback?: (err: AWSError, data: EKS.Types.TagResourceResponse) => void): Request<EKS.Types.TagResourceResponse, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(params: EKS.Types.UntagResourceRequest, callback?: (err: AWSError, data: EKS.Types.UntagResourceResponse) => void): Request<EKS.Types.UntagResourceResponse, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: EKS.Types.UntagResourceResponse) => void): Request<EKS.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .   At this time, you can not update the subnets or security group IDs for an existing cluster.  Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterConfig(params: EKS.Types.UpdateClusterConfigRequest, callback?: (err: AWSError, data: EKS.Types.UpdateClusterConfigResponse) => void): Request<EKS.Types.UpdateClusterConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .   At this time, you can not update the subnets or security group IDs for an existing cluster.  Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterConfig(callback?: (err: AWSError, data: EKS.Types.UpdateClusterConfigResponse) => void): Request<EKS.Types.UpdateClusterConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active. If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.
   */
  updateClusterVersion(params: EKS.Types.UpdateClusterVersionRequest, callback?: (err: AWSError, data: EKS.Types.UpdateClusterVersionResponse) => void): Request<EKS.Types.UpdateClusterVersionResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active. If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.
   */
  updateClusterVersion(callback?: (err: AWSError, data: EKS.Types.UpdateClusterVersionResponse) => void): Request<EKS.Types.UpdateClusterVersionResponse, AWSError>;
  /**
   * Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
   */
  updateNodegroupConfig(params: EKS.Types.UpdateNodegroupConfigRequest, callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupConfigResponse) => void): Request<EKS.Types.UpdateNodegroupConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
   */
  updateNodegroupConfig(callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupConfigResponse) => void): Request<EKS.Types.UpdateNodegroupConfigResponse, AWSError>;
  /**
   * Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For more information, see Amazon EKS-Optimized Linux AMI Versions in the Amazon EKS User Guide. You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.
   */
  updateNodegroupVersion(params: EKS.Types.UpdateNodegroupVersionRequest, callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupVersionResponse) => void): Request<EKS.Types.UpdateNodegroupVersionResponse, AWSError>;
  /**
   * Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For more information, see Amazon EKS-Optimized Linux AMI Versions in the Amazon EKS User Guide. You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.
   */
  updateNodegroupVersion(callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupVersionResponse) => void): Request<EKS.Types.UpdateNodegroupVersionResponse, AWSError>;
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
  /**
   * Waits for the nodegroupActive state by periodically calling the underlying EKS.describeNodegroupoperation every 30 seconds (at most 80 times).
   */
  waitFor(state: "nodegroupActive", params: EKS.Types.DescribeNodegroupRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Waits for the nodegroupActive state by periodically calling the underlying EKS.describeNodegroupoperation every 30 seconds (at most 80 times).
   */
  waitFor(state: "nodegroupActive", callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Waits for the nodegroupDeleted state by periodically calling the underlying EKS.describeNodegroupoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "nodegroupDeleted", params: EKS.Types.DescribeNodegroupRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Waits for the nodegroupDeleted state by periodically calling the underlying EKS.describeNodegroupoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "nodegroupDeleted", callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
}
declare namespace EKS {
  export type AMITypes = "AL2_x86_64"|"AL2_x86_64_GPU"|string;
  export interface AutoScalingGroup {
    /**
     * The name of the AutoScaling group associated with an Amazon EKS managed node group.
     */
    name?: String;
  }
  export type AutoScalingGroupList = AutoScalingGroup[];
  export type Boolean = boolean;
  export type BoxedBoolean = boolean;
  export type BoxedInteger = number;
  export type Capacity = number;
  export interface Certificate {
    /**
     * The Base64-encoded certificate data required to communicate with your cluster. Add this to the certificate-authority-data section of the kubeconfig file for your cluster.
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
     * The identity provider information for the cluster.
     */
    identity?: Identity;
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
    /**
     * The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster. 
     */
    tags?: TagMap;
  }
  export type ClusterName = string;
  export type ClusterStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"UPDATING"|string;
  export interface CreateClusterRequest {
    /**
     * The unique name to give to your cluster.
     */
    name: ClusterName;
    /**
     * The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.
     */
    version?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to other AWS API operations on your behalf. For more information, see Amazon EKS Service IAM Role in the  Amazon EKS User Guide .
     */
    roleArn: String;
    /**
     * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations and Cluster Security Group Considerations in the Amazon EKS User Guide. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane.
     */
    resourcesVpcConfig: VpcConfigRequest;
    /**
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing. 
     */
    logging?: Logging;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define.
     */
    tags?: TagMap;
  }
  export interface CreateClusterResponse {
    /**
     * The full description of your new cluster.
     */
    cluster?: Cluster;
  }
  export interface CreateNodegroupRequest {
    /**
     * The name of the cluster to create the node group in.
     */
    clusterName: String;
    /**
     * The unique name to give your node group.
     */
    nodegroupName: String;
    /**
     * The scaling configuration details for the AutoScaling group that is created for your node group.
     */
    scalingConfig?: NodegroupScalingConfig;
    /**
     * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB.
     */
    diskSize?: BoxedInteger;
    /**
     * The subnets to use for the AutoScaling group that is created for your node group. These subnets must have the tag key kubernetes.io/cluster/CLUSTER_NAME with a value of shared, where CLUSTER_NAME is replaced with the name of your cluster.
     */
    subnets: StringList;
    /**
     * The instance type to use for your node group. Currently, you can specify a single instance type for a node group. The default value for this parameter is t3.medium. If you choose a GPU instance type, be sure to specify the AL2_x86_64_GPU with the amiType parameter.
     */
    instanceTypes?: StringList;
    /**
     * The AMI type for your node group. GPU instance types should use the AL2_x86_64_GPU AMI type, which uses the Amazon EKS-optimized Linux AMI with GPU support; non-GPU instances should use the AL2_x86_64 AMI type, which uses the Amazon EKS-optimized Linux AMI.
     */
    amiType?: AMITypes;
    /**
     * The remote access (SSH) configuration to use with your node group.
     */
    remoteAccess?: RemoteAccessConfig;
    /**
     * The IAM role associated with your node group. The Amazon EKS worker node kubelet daemon makes calls to AWS APIs on your behalf. Worker nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch worker nodes and register them into a cluster, you must create an IAM role for those worker nodes to use when they are launched. For more information, see Amazon EKS Worker Node IAM Role in the  Amazon EKS User Guide .
     */
    nodeRole: String;
    /**
     * The Kubernetes labels to be applied to the nodes in the node group when they are created.
     */
    labels?: labelsMap;
    /**
     * The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value.
     */
    version?: String;
    /**
     * The AMI version of the Amazon EKS-optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see Amazon EKS-Optimized Linux AMI Versions in the Amazon EKS User Guide.
     */
    releaseVersion?: String;
  }
  export interface CreateNodegroupResponse {
    /**
     * The full description of your new node group.
     */
    nodegroup?: Nodegroup;
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
  export interface DeleteNodegroupRequest {
    /**
     * The name of the Amazon EKS cluster that is associated with your node group.
     */
    clusterName: String;
    /**
     * The name of the node group to delete.
     */
    nodegroupName: String;
  }
  export interface DeleteNodegroupResponse {
    /**
     * The full description of your deleted node group.
     */
    nodegroup?: Nodegroup;
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
  export interface DescribeNodegroupRequest {
    /**
     * The name of the Amazon EKS cluster associated with the node group.
     */
    clusterName: String;
    /**
     * The name of the node group to describe.
     */
    nodegroupName: String;
  }
  export interface DescribeNodegroupResponse {
    /**
     * The full description of your node group.
     */
    nodegroup?: Nodegroup;
  }
  export interface DescribeUpdateRequest {
    /**
     * The name of the Amazon EKS cluster associated with the update.
     */
    name: String;
    /**
     * The ID of the update to describe.
     */
    updateId: String;
    /**
     * The name of the Amazon EKS node group associated with the update.
     */
    nodegroupName?: String;
  }
  export interface DescribeUpdateResponse {
    /**
     * The full description of the specified update.
     */
    update?: Update;
  }
  export type ErrorCode = "SubnetNotFound"|"SecurityGroupNotFound"|"EniLimitReached"|"IpNotAvailable"|"AccessDenied"|"OperationNotPermitted"|"VpcIdNotFound"|"Unknown"|"NodeCreationFailure"|"PodEvictionFailure"|"InsufficientFreeAddresses"|string;
  export interface ErrorDetail {
    /**
     * A brief description of the error.     SubnetNotFound: We couldn't find one of the subnets associated with the cluster.    SecurityGroupNotFound: We couldn't find one of the security groups associated with the cluster.    EniLimitReached: You have reached the elastic network interface limit for your account.    IpNotAvailable: A subnet associated with the cluster doesn't have any free IP addresses.    AccessDenied: You don't have permissions to perform the specified operation.    OperationNotPermitted: The service role associated with the cluster doesn't have the required access permissions for Amazon EKS.    VpcIdNotFound: We couldn't find the VPC associated with the cluster.  
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
  export interface Identity {
    /**
     * The OpenID Connect identity provider information for the cluster.
     */
    oidc?: OIDC;
  }
  export interface Issue {
    /**
     * A brief description of the error.    AutoScalingGroupNotFound: We couldn't find the Auto Scaling group associated with the managed node group. You may be able to recreate an Auto Scaling group with the same settings to recover.    Ec2SecurityGroupNotFound: We couldn't find the cluster security group for the cluster. You must recreate your cluster.    Ec2SecurityGroupDeletionFailure: We could not delete the remote access security group for your managed node group. Remove any dependencies from the security group.    Ec2LaunchTemplateNotFound: We couldn't find the Amazon EC2 launch template for your managed node group. You may be able to recreate a launch template with the same settings to recover.    Ec2LaunchTemplateVersionMismatch: The Amazon EC2 launch template version for your managed node group does not match the version that Amazon EKS created. You may be able to revert to the Amazon EKS-created version to recover.    IamInstanceProfileNotFound: We couldn't find the IAM instance profile for your managed node group. You may be able to recreate an instance profile with the same settings to recover.    IamNodeRoleNotFound: We couldn't find the IAM role for your managed node group. You may be able to recreate an IAM role with the same settings to recover.    AsgInstanceLaunchFailures: Your Auto Scaling group is experiencing failures while attempting to launch instances.    InstanceLimitExceeded: Your AWS account is unable to launch any more instances of the specified instance type. You may be able to request an Amazon EC2 instance limit increase to recover.    InsufficientFreeAddresses: One or more of the subnets associated with your managed node group does not have enough available IP addresses for new nodes.    AccessDenied: Amazon EKS and or one or more of your managed nodes is unable to communicate with your cluster API server.    InternalFailure: These errors are usually caused by an Amazon EKS server-side issue.  
     */
    code?: NodegroupIssueCode;
    /**
     * The error message associated with the issue.
     */
    message?: String;
    /**
     * The AWS resources that are afflicted by this issue.
     */
    resourceIds?: StringList;
  }
  export type IssueList = Issue[];
  export interface ListClustersRequest {
    /**
     * The maximum number of cluster results returned by ListClusters in paginated output. When you use this parameter, ListClusters returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListClusters request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListClusters returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: ListClustersRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListClusters request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
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
     * The nextToken value to include in a future ListClusters request. When the results of a ListClusters request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListNodegroupsRequest {
    /**
     * The name of the Amazon EKS cluster that you would like to list node groups in.
     */
    clusterName: String;
    /**
     * The maximum number of node group results returned by ListNodegroups in paginated output. When you use this parameter, ListNodegroups returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListNodegroups request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListNodegroups returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: ListNodegroupsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListNodegroups request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export type ListNodegroupsRequestMaxResults = number;
  export interface ListNodegroupsResponse {
    /**
     * A list of all of the node groups associated with the specified cluster.
     */
    nodegroups?: StringList;
    /**
     * The nextToken value to include in a future ListNodegroups request. When the results of a ListNodegroups request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags for the resource.
     */
    tags?: TagMap;
  }
  export interface ListUpdatesRequest {
    /**
     * The name of the Amazon EKS cluster to list updates for.
     */
    name: String;
    /**
     * The name of the Amazon EKS managed node group to list updates for.
     */
    nodegroupName?: String;
    /**
     * The nextToken value returned from a previous paginated ListUpdates request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
    /**
     * The maximum number of update results returned by ListUpdates in paginated output. When you use this parameter, ListUpdates returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListUpdates request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListUpdates returns up to 100 results and a nextToken value if applicable.
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
     * The nextToken value to include in a future ListUpdates request. When the results of a ListUpdates request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface LogSetup {
    /**
     * The available cluster control plane log types.
     */
    types?: LogTypes;
    /**
     * If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a log type isn't enabled, that log type doesn't export its control plane logs. Each individual log type can be enabled or disabled independently.
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
  export interface Nodegroup {
    /**
     * The name associated with an Amazon EKS managed node group.
     */
    nodegroupName?: String;
    /**
     * The Amazon Resource Name (ARN) associated with the managed node group.
     */
    nodegroupArn?: String;
    /**
     * The name of the cluster that the managed node group resides in.
     */
    clusterName?: String;
    /**
     * The Kubernetes version of the managed node group.
     */
    version?: String;
    /**
     * The AMI version of the managed node group. For more information, see Amazon EKS-Optimized Linux AMI Versions  in the Amazon EKS User Guide.
     */
    releaseVersion?: String;
    /**
     * The Unix epoch timestamp in seconds for when the managed node group was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix epoch timestamp in seconds for when the managed node group was last modified.
     */
    modifiedAt?: Timestamp;
    /**
     * The current status of the managed node group.
     */
    status?: NodegroupStatus;
    /**
     * The scaling configuration details for the AutoScaling group that is associated with your node group.
     */
    scalingConfig?: NodegroupScalingConfig;
    /**
     * The instance types associated with your node group.
     */
    instanceTypes?: StringList;
    /**
     * The subnets allowed for the AutoScaling group that is associated with your node group. These subnets must have the following tag: kubernetes.io/cluster/CLUSTER_NAME, where CLUSTER_NAME is replaced with the name of your cluster.
     */
    subnets?: StringList;
    /**
     * The remote access (SSH) configuration that is associated with the node group.
     */
    remoteAccess?: RemoteAccessConfig;
    /**
     * The AMI type associated with your node group. GPU instance types should use the AL2_x86_64_GPU AMI type, which uses the Amazon EKS-optimized Linux AMI with GPU support; non-GPU instances should use the AL2_x86_64 AMI type, which uses the Amazon EKS-optimized Linux AMI.
     */
    amiType?: AMITypes;
    /**
     * The IAM role associated with your node group. The Amazon EKS worker node kubelet daemon makes calls to AWS APIs on your behalf. Worker nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch worker nodes and register them into a cluster, you must create an IAM role for those worker nodes to use when they are launched. For more information, see Amazon EKS Worker Node IAM Role in the  Amazon EKS User Guide .
     */
    nodeRole?: String;
    /**
     * The Kubernetes labels applied to the nodes in the node group.  Only labels that are applied with the Amazon EKS API are shown here. There may be other Kubernetes labels applied to the nodes in this group. 
     */
    labels?: labelsMap;
    /**
     * The resources associated with the nodegroup, such as AutoScaling groups and security groups for remote access.
     */
    resources?: NodegroupResources;
    /**
     * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB.
     */
    diskSize?: BoxedInteger;
    /**
     * The health status of the node group. If there are issues with your node group's health, they are listed here.
     */
    health?: NodegroupHealth;
    /**
     * The metadata applied the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets. 
     */
    tags?: TagMap;
  }
  export interface NodegroupHealth {
    /**
     * Any issues that are associated with the node group. 
     */
    issues?: IssueList;
  }
  export type NodegroupIssueCode = "AutoScalingGroupNotFound"|"Ec2SecurityGroupNotFound"|"Ec2SecurityGroupDeletionFailure"|"Ec2LaunchTemplateNotFound"|"Ec2LaunchTemplateVersionMismatch"|"IamInstanceProfileNotFound"|"IamNodeRoleNotFound"|"AsgInstanceLaunchFailures"|"InstanceLimitExceeded"|"InsufficientFreeAddresses"|"AccessDenied"|"InternalFailure"|string;
  export interface NodegroupResources {
    /**
     * The autoscaling groups associated with the node group.
     */
    autoScalingGroups?: AutoScalingGroupList;
    /**
     * The remote access security group associated with the node group. This security group controls SSH access to the worker nodes.
     */
    remoteAccessSecurityGroup?: String;
  }
  export interface NodegroupScalingConfig {
    /**
     * The minimum number of worker nodes that the managed node group can scale in to. This number must be greater than zero.
     */
    minSize?: Capacity;
    /**
     * The maximum number of worker nodes that the managed node group can scale out to. Managed node groups can support up to 100 nodes by default.
     */
    maxSize?: Capacity;
    /**
     * The current number of worker nodes that the managed node group should maintain.
     */
    desiredSize?: Capacity;
  }
  export type NodegroupStatus = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|"DEGRADED"|string;
  export interface OIDC {
    /**
     * The issuer URL for the OpenID Connect identity provider.
     */
    issuer?: String;
  }
  export interface RemoteAccessConfig {
    /**
     * The Amazon EC2 SSH key that provides access for SSH communication with the worker nodes in the managed node group. For more information, see Amazon EC2 Key Pairs in the Amazon Elastic Compute Cloud User Guide for Linux Instances.
     */
    ec2SshKey?: String;
    /**
     * The security groups to allow SSH access (port 22) from on the worker nodes. If you specify an Amazon EC2 SSH key, but you do not specify a source security group when you create a managed node group, port 22 on the worker nodes is opened to the internet (0.0.0.0/0). For more information, see Security Groups for Your VPC in the Amazon Virtual Private Cloud User Guide.
     */
    sourceSecurityGroups?: StringList;
  }
  export type String = string;
  export type StringList = String[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
     */
    resourceArn: String;
    /**
     * The tags to add to the resource. A tag is an array of key-value pairs.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
     */
    resourceArn: String;
    /**
     * The keys of the tags to be removed.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
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
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing. 
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
  export interface UpdateLabelsPayload {
    /**
     * Kubernetes labels to be added or updated.
     */
    addOrUpdateLabels?: labelsMap;
    /**
     * Kubernetes labels to be removed.
     */
    removeLabels?: labelsKeyList;
  }
  export interface UpdateNodegroupConfigRequest {
    /**
     * The name of the Amazon EKS cluster that the managed node group resides in.
     */
    clusterName: String;
    /**
     * The name of the managed node group to update.
     */
    nodegroupName: String;
    /**
     * The Kubernetes labels to be applied to the nodes in the node group after the update.
     */
    labels?: UpdateLabelsPayload;
    /**
     * The scaling configuration details for the AutoScaling group after the update.
     */
    scalingConfig?: NodegroupScalingConfig;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateNodegroupConfigResponse {
    update?: Update;
  }
  export interface UpdateNodegroupVersionRequest {
    /**
     * The name of the Amazon EKS cluster that is associated with the managed node group to update.
     */
    clusterName: String;
    /**
     * The name of the managed node group to update.
     */
    nodegroupName: String;
    /**
     * The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version.
     */
    version?: String;
    /**
     * The AMI version of the Amazon EKS-optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For more information, see Amazon EKS-Optimized Linux AMI Versions  in the Amazon EKS User Guide.
     */
    releaseVersion?: String;
    /**
     * Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If a previous update fails because pods could not be drained, you can force the update after it fails to terminate the old node regardless of whether or not any pods are running on the node.
     */
    force?: Boolean;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateNodegroupVersionResponse {
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
  export type UpdateParamType = "Version"|"PlatformVersion"|"EndpointPrivateAccess"|"EndpointPublicAccess"|"ClusterLogging"|"DesiredSize"|"LabelsToAdd"|"LabelsToRemove"|"MaxSize"|"MinSize"|"ReleaseVersion"|string;
  export type UpdateParams = UpdateParam[];
  export type UpdateStatus = "InProgress"|"Failed"|"Cancelled"|"Successful"|string;
  export type UpdateType = "VersionUpdate"|"EndpointAccessUpdate"|"LoggingUpdate"|"ConfigUpdate"|string;
  export interface VpcConfigRequest {
    /**
     * Specify subnets for your Amazon EKS worker nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your worker nodes and the Kubernetes control plane.
     */
    subnetIds?: StringList;
    /**
     * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used.
     */
    securityGroupIds?: StringList;
    /**
     * Set this value to false to disable public access for your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can receive only requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
     */
    endpointPublicAccess?: BoxedBoolean;
    /**
     * Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
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
     * The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control plane to data plane communication.
     */
    clusterSecurityGroupId?: String;
    /**
     * The VPC associated with your cluster.
     */
    vpcId?: String;
    /**
     * This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If the Amazon EKS public API server endpoint is disabled, your cluster's Kubernetes API server can receive only requests that originate from within the cluster VPC. 
     */
    endpointPublicAccess?: Boolean;
    /**
     * This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster's VPC use the private VPC endpoint instead of traversing the internet.
     */
    endpointPrivateAccess?: Boolean;
  }
  export type labelKey = string;
  export type labelValue = string;
  export type labelsKeyList = String[];
  export type labelsMap = {[key: string]: labelValue};
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
