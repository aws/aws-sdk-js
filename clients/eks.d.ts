import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class EKS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EKS.Types.ClientConfiguration)
  config: Config & EKS.Types.ClientConfiguration;
  /**
   * Associates an access policy and its scope to an access entry. For more information about associating access policies, see Associating and disassociating access policies to and from access entries in the Amazon EKS User Guide.
   */
  associateAccessPolicy(params: EKS.Types.AssociateAccessPolicyRequest, callback?: (err: AWSError, data: EKS.Types.AssociateAccessPolicyResponse) => void): Request<EKS.Types.AssociateAccessPolicyResponse, AWSError>;
  /**
   * Associates an access policy and its scope to an access entry. For more information about associating access policies, see Associating and disassociating access policies to and from access entries in the Amazon EKS User Guide.
   */
  associateAccessPolicy(callback?: (err: AWSError, data: EKS.Types.AssociateAccessPolicyResponse) => void): Request<EKS.Types.AssociateAccessPolicyResponse, AWSError>;
  /**
   * Associates an encryption configuration to an existing cluster. Use this API to enable encryption on existing clusters that don't already have encryption enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.
   */
  associateEncryptionConfig(params: EKS.Types.AssociateEncryptionConfigRequest, callback?: (err: AWSError, data: EKS.Types.AssociateEncryptionConfigResponse) => void): Request<EKS.Types.AssociateEncryptionConfigResponse, AWSError>;
  /**
   * Associates an encryption configuration to an existing cluster. Use this API to enable encryption on existing clusters that don't already have encryption enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.
   */
  associateEncryptionConfig(callback?: (err: AWSError, data: EKS.Types.AssociateEncryptionConfigResponse) => void): Request<EKS.Types.AssociateEncryptionConfigResponse, AWSError>;
  /**
   * Associates an identity provider configuration to a cluster. If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes Role and ClusterRole objects, assign permissions to them, and then bind them to the identities using Kubernetes RoleBinding and ClusterRoleBinding objects. For more information see Using RBAC Authorization in the Kubernetes documentation.
   */
  associateIdentityProviderConfig(params: EKS.Types.AssociateIdentityProviderConfigRequest, callback?: (err: AWSError, data: EKS.Types.AssociateIdentityProviderConfigResponse) => void): Request<EKS.Types.AssociateIdentityProviderConfigResponse, AWSError>;
  /**
   * Associates an identity provider configuration to a cluster. If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes Role and ClusterRole objects, assign permissions to them, and then bind them to the identities using Kubernetes RoleBinding and ClusterRoleBinding objects. For more information see Using RBAC Authorization in the Kubernetes documentation.
   */
  associateIdentityProviderConfig(callback?: (err: AWSError, data: EKS.Types.AssociateIdentityProviderConfigResponse) => void): Request<EKS.Types.AssociateIdentityProviderConfigResponse, AWSError>;
  /**
   * Creates an access entry. An access entry allows an IAM principal to access your cluster. Access entries can replace the need to maintain entries in the aws-auth ConfigMap for authentication. You have the following options for authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects, in addition to managing access entries. If you use Amazon EKS authorization exclusively, you don't need to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects. For more information about access entries, see Access entries in the Amazon EKS User Guide.
   */
  createAccessEntry(params: EKS.Types.CreateAccessEntryRequest, callback?: (err: AWSError, data: EKS.Types.CreateAccessEntryResponse) => void): Request<EKS.Types.CreateAccessEntryResponse, AWSError>;
  /**
   * Creates an access entry. An access entry allows an IAM principal to access your cluster. Access entries can replace the need to maintain entries in the aws-auth ConfigMap for authentication. You have the following options for authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects, in addition to managing access entries. If you use Amazon EKS authorization exclusively, you don't need to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects. For more information about access entries, see Access entries in the Amazon EKS User Guide.
   */
  createAccessEntry(callback?: (err: AWSError, data: EKS.Types.CreateAccessEntryResponse) => void): Request<EKS.Types.CreateAccessEntryResponse, AWSError>;
  /**
   * Creates an Amazon EKS add-on. Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see Amazon EKS add-ons in the Amazon EKS User Guide.
   */
  createAddon(params: EKS.Types.CreateAddonRequest, callback?: (err: AWSError, data: EKS.Types.CreateAddonResponse) => void): Request<EKS.Types.CreateAddonResponse, AWSError>;
  /**
   * Creates an Amazon EKS add-on. Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see Amazon EKS add-ons in the Amazon EKS User Guide.
   */
  createAddon(callback?: (err: AWSError, data: EKS.Types.CreateAddonResponse) => void): Request<EKS.Types.CreateAddonResponse, AWSError>;
  /**
   * Creates an Amazon EKS control plane. The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing.  In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see Allowing users to access your cluster and Launching Amazon EKS nodes in the Amazon EKS User Guide.
   */
  createCluster(params: EKS.Types.CreateClusterRequest, callback?: (err: AWSError, data: EKS.Types.CreateClusterResponse) => void): Request<EKS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates an Amazon EKS control plane. The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .  You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing.  In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see Allowing users to access your cluster and Launching Amazon EKS nodes in the Amazon EKS User Guide.
   */
  createCluster(callback?: (err: AWSError, data: EKS.Types.CreateClusterResponse) => void): Request<EKS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates an EKS Anywhere subscription. When a subscription is created, it is a contract agreement for the length of the term specified in the request. Licenses that are used to validate support are provisioned in Amazon Web Services License Manager and the caller account is granted access to EKS Anywhere Curated Packages.
   */
  createEksAnywhereSubscription(params: EKS.Types.CreateEksAnywhereSubscriptionRequest, callback?: (err: AWSError, data: EKS.Types.CreateEksAnywhereSubscriptionResponse) => void): Request<EKS.Types.CreateEksAnywhereSubscriptionResponse, AWSError>;
  /**
   * Creates an EKS Anywhere subscription. When a subscription is created, it is a contract agreement for the length of the term specified in the request. Licenses that are used to validate support are provisioned in Amazon Web Services License Manager and the caller account is granted access to EKS Anywhere Curated Packages.
   */
  createEksAnywhereSubscription(callback?: (err: AWSError, data: EKS.Types.CreateEksAnywhereSubscriptionResponse) => void): Request<EKS.Types.CreateEksAnywhereSubscriptionResponse, AWSError>;
  /**
   * Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate. The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate. When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes Role Based Access Control (RBAC) for authorization so that the kubelet that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster. For more information, see Fargate profile in the Amazon EKS User Guide.
   */
  createFargateProfile(params: EKS.Types.CreateFargateProfileRequest, callback?: (err: AWSError, data: EKS.Types.CreateFargateProfileResponse) => void): Request<EKS.Types.CreateFargateProfileResponse, AWSError>;
  /**
   * Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate. The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate. When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes Role Based Access Control (RBAC) for authorization so that the kubelet that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster. For more information, see Fargate profile in the Amazon EKS User Guide.
   */
  createFargateProfile(callback?: (err: AWSError, data: EKS.Types.CreateFargateProfileResponse) => void): Request<EKS.Types.CreateFargateProfileResponse, AWSError>;
  /**
   * Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see Customizing managed nodes with launch templates. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see Managed node groups in the Amazon EKS User Guide.  Windows AMI types are only supported for commercial Amazon Web Services Regions that support Windows on Amazon EKS. 
   */
  createNodegroup(params: EKS.Types.CreateNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.CreateNodegroupResponse) => void): Request<EKS.Types.CreateNodegroupResponse, AWSError>;
  /**
   * Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see Customizing managed nodes with launch templates. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see Managed node groups in the Amazon EKS User Guide.  Windows AMI types are only supported for commercial Amazon Web Services Regions that support Windows on Amazon EKS. 
   */
  createNodegroup(callback?: (err: AWSError, data: EKS.Types.CreateNodegroupResponse) => void): Request<EKS.Types.CreateNodegroupResponse, AWSError>;
  /**
   * Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role with EKS Pod Identity. Use EKS Pod Identity to give temporary IAM credentials to pods and the credentials are rotated automatically. Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances. If a pod uses a service account that has an association, Amazon EKS sets environment variables in the containers of the pod. The environment variables configure the Amazon Web Services SDKs, including the Command Line Interface, to use the EKS Pod Identity credentials. Pod Identity is a simpler method than IAM roles for service accounts, as this method doesn't use OIDC identity providers. Additionally, you can configure a role for Pod Identity once, and reuse it across clusters.
   */
  createPodIdentityAssociation(params: EKS.Types.CreatePodIdentityAssociationRequest, callback?: (err: AWSError, data: EKS.Types.CreatePodIdentityAssociationResponse) => void): Request<EKS.Types.CreatePodIdentityAssociationResponse, AWSError>;
  /**
   * Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role with EKS Pod Identity. Use EKS Pod Identity to give temporary IAM credentials to pods and the credentials are rotated automatically. Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances. If a pod uses a service account that has an association, Amazon EKS sets environment variables in the containers of the pod. The environment variables configure the Amazon Web Services SDKs, including the Command Line Interface, to use the EKS Pod Identity credentials. Pod Identity is a simpler method than IAM roles for service accounts, as this method doesn't use OIDC identity providers. Additionally, you can configure a role for Pod Identity once, and reuse it across clusters.
   */
  createPodIdentityAssociation(callback?: (err: AWSError, data: EKS.Types.CreatePodIdentityAssociationResponse) => void): Request<EKS.Types.CreatePodIdentityAssociationResponse, AWSError>;
  /**
   * Deletes an access entry. Deleting an access entry of a type other than Standard can cause your cluster to function improperly. If you delete an access entry in error, you can recreate it.
   */
  deleteAccessEntry(params: EKS.Types.DeleteAccessEntryRequest, callback?: (err: AWSError, data: EKS.Types.DeleteAccessEntryResponse) => void): Request<EKS.Types.DeleteAccessEntryResponse, AWSError>;
  /**
   * Deletes an access entry. Deleting an access entry of a type other than Standard can cause your cluster to function improperly. If you delete an access entry in error, you can recreate it.
   */
  deleteAccessEntry(callback?: (err: AWSError, data: EKS.Types.DeleteAccessEntryResponse) => void): Request<EKS.Types.DeleteAccessEntryResponse, AWSError>;
  /**
   * Deletes an Amazon EKS add-on. When you remove an add-on, it's deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.
   */
  deleteAddon(params: EKS.Types.DeleteAddonRequest, callback?: (err: AWSError, data: EKS.Types.DeleteAddonResponse) => void): Request<EKS.Types.DeleteAddonResponse, AWSError>;
  /**
   * Deletes an Amazon EKS add-on. When you remove an add-on, it's deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.
   */
  deleteAddon(callback?: (err: AWSError, data: EKS.Types.DeleteAddonResponse) => void): Request<EKS.Types.DeleteAddonResponse, AWSError>;
  /**
   * Deletes an Amazon EKS cluster control plane. If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a cluster in the Amazon EKS User Guide. If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see DeleteNodgroup and DeleteFargateProfile.
   */
  deleteCluster(params: EKS.Types.DeleteClusterRequest, callback?: (err: AWSError, data: EKS.Types.DeleteClusterResponse) => void): Request<EKS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes an Amazon EKS cluster control plane. If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a cluster in the Amazon EKS User Guide. If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see DeleteNodgroup and DeleteFargateProfile.
   */
  deleteCluster(callback?: (err: AWSError, data: EKS.Types.DeleteClusterResponse) => void): Request<EKS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes an expired or inactive subscription. Deleting inactive subscriptions removes them from the Amazon Web Services Management Console view and from list/describe API responses. Subscriptions can only be cancelled within 7 days of creation and are cancelled by creating a ticket in the Amazon Web Services Support Center. 
   */
  deleteEksAnywhereSubscription(params: EKS.Types.DeleteEksAnywhereSubscriptionRequest, callback?: (err: AWSError, data: EKS.Types.DeleteEksAnywhereSubscriptionResponse) => void): Request<EKS.Types.DeleteEksAnywhereSubscriptionResponse, AWSError>;
  /**
   * Deletes an expired or inactive subscription. Deleting inactive subscriptions removes them from the Amazon Web Services Management Console view and from list/describe API responses. Subscriptions can only be cancelled within 7 days of creation and are cancelled by creating a ticket in the Amazon Web Services Support Center. 
   */
  deleteEksAnywhereSubscription(callback?: (err: AWSError, data: EKS.Types.DeleteEksAnywhereSubscriptionResponse) => void): Request<EKS.Types.DeleteEksAnywhereSubscriptionResponse, AWSError>;
  /**
   * Deletes an Fargate profile. When you delete a Fargate profile, any Pod running on Fargate that was created with the profile is deleted. If the Pod matches another Fargate profile, then it is scheduled on Fargate with that profile. If it no longer matches any Fargate profiles, then it's not scheduled on Fargate and may remain in a pending state. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.
   */
  deleteFargateProfile(params: EKS.Types.DeleteFargateProfileRequest, callback?: (err: AWSError, data: EKS.Types.DeleteFargateProfileResponse) => void): Request<EKS.Types.DeleteFargateProfileResponse, AWSError>;
  /**
   * Deletes an Fargate profile. When you delete a Fargate profile, any Pod running on Fargate that was created with the profile is deleted. If the Pod matches another Fargate profile, then it is scheduled on Fargate with that profile. If it no longer matches any Fargate profiles, then it's not scheduled on Fargate and may remain in a pending state. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.
   */
  deleteFargateProfile(callback?: (err: AWSError, data: EKS.Types.DeleteFargateProfileResponse) => void): Request<EKS.Types.DeleteFargateProfileResponse, AWSError>;
  /**
   * Deletes a managed node group.
   */
  deleteNodegroup(params: EKS.Types.DeleteNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.DeleteNodegroupResponse) => void): Request<EKS.Types.DeleteNodegroupResponse, AWSError>;
  /**
   * Deletes a managed node group.
   */
  deleteNodegroup(callback?: (err: AWSError, data: EKS.Types.DeleteNodegroupResponse) => void): Request<EKS.Types.DeleteNodegroupResponse, AWSError>;
  /**
   * Deletes a EKS Pod Identity association. The temporary Amazon Web Services credentials from the previous IAM role session might still be valid until the session expiry. If you need to immediately revoke the temporary session credentials, then go to the role in the IAM console.
   */
  deletePodIdentityAssociation(params: EKS.Types.DeletePodIdentityAssociationRequest, callback?: (err: AWSError, data: EKS.Types.DeletePodIdentityAssociationResponse) => void): Request<EKS.Types.DeletePodIdentityAssociationResponse, AWSError>;
  /**
   * Deletes a EKS Pod Identity association. The temporary Amazon Web Services credentials from the previous IAM role session might still be valid until the session expiry. If you need to immediately revoke the temporary session credentials, then go to the role in the IAM console.
   */
  deletePodIdentityAssociation(callback?: (err: AWSError, data: EKS.Types.DeletePodIdentityAssociationResponse) => void): Request<EKS.Types.DeletePodIdentityAssociationResponse, AWSError>;
  /**
   * Deregisters a connected cluster to remove it from the Amazon EKS control plane. A connected cluster is a Kubernetes cluster that you've connected to your control plane using the Amazon EKS Connector.
   */
  deregisterCluster(params: EKS.Types.DeregisterClusterRequest, callback?: (err: AWSError, data: EKS.Types.DeregisterClusterResponse) => void): Request<EKS.Types.DeregisterClusterResponse, AWSError>;
  /**
   * Deregisters a connected cluster to remove it from the Amazon EKS control plane. A connected cluster is a Kubernetes cluster that you've connected to your control plane using the Amazon EKS Connector.
   */
  deregisterCluster(callback?: (err: AWSError, data: EKS.Types.DeregisterClusterResponse) => void): Request<EKS.Types.DeregisterClusterResponse, AWSError>;
  /**
   * Describes an access entry.
   */
  describeAccessEntry(params: EKS.Types.DescribeAccessEntryRequest, callback?: (err: AWSError, data: EKS.Types.DescribeAccessEntryResponse) => void): Request<EKS.Types.DescribeAccessEntryResponse, AWSError>;
  /**
   * Describes an access entry.
   */
  describeAccessEntry(callback?: (err: AWSError, data: EKS.Types.DescribeAccessEntryResponse) => void): Request<EKS.Types.DescribeAccessEntryResponse, AWSError>;
  /**
   * Describes an Amazon EKS add-on.
   */
  describeAddon(params: EKS.Types.DescribeAddonRequest, callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Describes an Amazon EKS add-on.
   */
  describeAddon(callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Returns configuration options.
   */
  describeAddonConfiguration(params: EKS.Types.DescribeAddonConfigurationRequest, callback?: (err: AWSError, data: EKS.Types.DescribeAddonConfigurationResponse) => void): Request<EKS.Types.DescribeAddonConfigurationResponse, AWSError>;
  /**
   * Returns configuration options.
   */
  describeAddonConfiguration(callback?: (err: AWSError, data: EKS.Types.DescribeAddonConfigurationResponse) => void): Request<EKS.Types.DescribeAddonConfigurationResponse, AWSError>;
  /**
   * Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the owner, publisher, and the type of the add-on are returned.
   */
  describeAddonVersions(params: EKS.Types.DescribeAddonVersionsRequest, callback?: (err: AWSError, data: EKS.Types.DescribeAddonVersionsResponse) => void): Request<EKS.Types.DescribeAddonVersionsResponse, AWSError>;
  /**
   * Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the owner, publisher, and the type of the add-on are returned.
   */
  describeAddonVersions(callback?: (err: AWSError, data: EKS.Types.DescribeAddonVersionsResponse) => void): Request<EKS.Types.DescribeAddonVersionsResponse, AWSError>;
  /**
   * Describes an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Creating or updating a kubeconfig file for an Amazon EKS cluster.  The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state. 
   */
  describeCluster(params: EKS.Types.DescribeClusterRequest, callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Describes an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Creating or updating a kubeconfig file for an Amazon EKS cluster.  The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state. 
   */
  describeCluster(callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns descriptive information about a subscription.
   */
  describeEksAnywhereSubscription(params: EKS.Types.DescribeEksAnywhereSubscriptionRequest, callback?: (err: AWSError, data: EKS.Types.DescribeEksAnywhereSubscriptionResponse) => void): Request<EKS.Types.DescribeEksAnywhereSubscriptionResponse, AWSError>;
  /**
   * Returns descriptive information about a subscription.
   */
  describeEksAnywhereSubscription(callback?: (err: AWSError, data: EKS.Types.DescribeEksAnywhereSubscriptionResponse) => void): Request<EKS.Types.DescribeEksAnywhereSubscriptionResponse, AWSError>;
  /**
   * Describes an Fargate profile.
   */
  describeFargateProfile(params: EKS.Types.DescribeFargateProfileRequest, callback?: (err: AWSError, data: EKS.Types.DescribeFargateProfileResponse) => void): Request<EKS.Types.DescribeFargateProfileResponse, AWSError>;
  /**
   * Describes an Fargate profile.
   */
  describeFargateProfile(callback?: (err: AWSError, data: EKS.Types.DescribeFargateProfileResponse) => void): Request<EKS.Types.DescribeFargateProfileResponse, AWSError>;
  /**
   * Describes an identity provider configuration.
   */
  describeIdentityProviderConfig(params: EKS.Types.DescribeIdentityProviderConfigRequest, callback?: (err: AWSError, data: EKS.Types.DescribeIdentityProviderConfigResponse) => void): Request<EKS.Types.DescribeIdentityProviderConfigResponse, AWSError>;
  /**
   * Describes an identity provider configuration.
   */
  describeIdentityProviderConfig(callback?: (err: AWSError, data: EKS.Types.DescribeIdentityProviderConfigResponse) => void): Request<EKS.Types.DescribeIdentityProviderConfigResponse, AWSError>;
  /**
   * Returns details about an insight that you specify using its ID.
   */
  describeInsight(params: EKS.Types.DescribeInsightRequest, callback?: (err: AWSError, data: EKS.Types.DescribeInsightResponse) => void): Request<EKS.Types.DescribeInsightResponse, AWSError>;
  /**
   * Returns details about an insight that you specify using its ID.
   */
  describeInsight(callback?: (err: AWSError, data: EKS.Types.DescribeInsightResponse) => void): Request<EKS.Types.DescribeInsightResponse, AWSError>;
  /**
   * Describes a managed node group.
   */
  describeNodegroup(params: EKS.Types.DescribeNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Describes a managed node group.
   */
  describeNodegroup(callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Returns descriptive information about an EKS Pod Identity association. This action requires the ID of the association. You can get the ID from the response to the CreatePodIdentityAssocation for newly created associations. Or, you can list the IDs for associations with ListPodIdentityAssociations and filter the list by namespace or service account.
   */
  describePodIdentityAssociation(params: EKS.Types.DescribePodIdentityAssociationRequest, callback?: (err: AWSError, data: EKS.Types.DescribePodIdentityAssociationResponse) => void): Request<EKS.Types.DescribePodIdentityAssociationResponse, AWSError>;
  /**
   * Returns descriptive information about an EKS Pod Identity association. This action requires the ID of the association. You can get the ID from the response to the CreatePodIdentityAssocation for newly created associations. Or, you can list the IDs for associations with ListPodIdentityAssociations and filter the list by namespace or service account.
   */
  describePodIdentityAssociation(callback?: (err: AWSError, data: EKS.Types.DescribePodIdentityAssociationResponse) => void): Request<EKS.Types.DescribePodIdentityAssociationResponse, AWSError>;
  /**
   * Describes an update to an Amazon EKS resource. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.
   */
  describeUpdate(params: EKS.Types.DescribeUpdateRequest, callback?: (err: AWSError, data: EKS.Types.DescribeUpdateResponse) => void): Request<EKS.Types.DescribeUpdateResponse, AWSError>;
  /**
   * Describes an update to an Amazon EKS resource. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.
   */
  describeUpdate(callback?: (err: AWSError, data: EKS.Types.DescribeUpdateResponse) => void): Request<EKS.Types.DescribeUpdateResponse, AWSError>;
  /**
   * Disassociates an access policy from an access entry.
   */
  disassociateAccessPolicy(params: EKS.Types.DisassociateAccessPolicyRequest, callback?: (err: AWSError, data: EKS.Types.DisassociateAccessPolicyResponse) => void): Request<EKS.Types.DisassociateAccessPolicyResponse, AWSError>;
  /**
   * Disassociates an access policy from an access entry.
   */
  disassociateAccessPolicy(callback?: (err: AWSError, data: EKS.Types.DisassociateAccessPolicyResponse) => void): Request<EKS.Types.DisassociateAccessPolicyResponse, AWSError>;
  /**
   * Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with IAM principals.
   */
  disassociateIdentityProviderConfig(params: EKS.Types.DisassociateIdentityProviderConfigRequest, callback?: (err: AWSError, data: EKS.Types.DisassociateIdentityProviderConfigResponse) => void): Request<EKS.Types.DisassociateIdentityProviderConfigResponse, AWSError>;
  /**
   * Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with IAM principals.
   */
  disassociateIdentityProviderConfig(callback?: (err: AWSError, data: EKS.Types.DisassociateIdentityProviderConfigResponse) => void): Request<EKS.Types.DisassociateIdentityProviderConfigResponse, AWSError>;
  /**
   * Lists the access entries for your cluster.
   */
  listAccessEntries(params: EKS.Types.ListAccessEntriesRequest, callback?: (err: AWSError, data: EKS.Types.ListAccessEntriesResponse) => void): Request<EKS.Types.ListAccessEntriesResponse, AWSError>;
  /**
   * Lists the access entries for your cluster.
   */
  listAccessEntries(callback?: (err: AWSError, data: EKS.Types.ListAccessEntriesResponse) => void): Request<EKS.Types.ListAccessEntriesResponse, AWSError>;
  /**
   * Lists the available access policies. 
   */
  listAccessPolicies(params: EKS.Types.ListAccessPoliciesRequest, callback?: (err: AWSError, data: EKS.Types.ListAccessPoliciesResponse) => void): Request<EKS.Types.ListAccessPoliciesResponse, AWSError>;
  /**
   * Lists the available access policies. 
   */
  listAccessPolicies(callback?: (err: AWSError, data: EKS.Types.ListAccessPoliciesResponse) => void): Request<EKS.Types.ListAccessPoliciesResponse, AWSError>;
  /**
   * Lists the installed add-ons.
   */
  listAddons(params: EKS.Types.ListAddonsRequest, callback?: (err: AWSError, data: EKS.Types.ListAddonsResponse) => void): Request<EKS.Types.ListAddonsResponse, AWSError>;
  /**
   * Lists the installed add-ons.
   */
  listAddons(callback?: (err: AWSError, data: EKS.Types.ListAddonsResponse) => void): Request<EKS.Types.ListAddonsResponse, AWSError>;
  /**
   * Lists the access policies associated with an access entry.
   */
  listAssociatedAccessPolicies(params: EKS.Types.ListAssociatedAccessPoliciesRequest, callback?: (err: AWSError, data: EKS.Types.ListAssociatedAccessPoliciesResponse) => void): Request<EKS.Types.ListAssociatedAccessPoliciesResponse, AWSError>;
  /**
   * Lists the access policies associated with an access entry.
   */
  listAssociatedAccessPolicies(callback?: (err: AWSError, data: EKS.Types.ListAssociatedAccessPoliciesResponse) => void): Request<EKS.Types.ListAssociatedAccessPoliciesResponse, AWSError>;
  /**
   * Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Amazon Web Services Region.
   */
  listClusters(params: EKS.Types.ListClustersRequest, callback?: (err: AWSError, data: EKS.Types.ListClustersResponse) => void): Request<EKS.Types.ListClustersResponse, AWSError>;
  /**
   * Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Amazon Web Services Region.
   */
  listClusters(callback?: (err: AWSError, data: EKS.Types.ListClustersResponse) => void): Request<EKS.Types.ListClustersResponse, AWSError>;
  /**
   * Displays the full description of the subscription.
   */
  listEksAnywhereSubscriptions(params: EKS.Types.ListEksAnywhereSubscriptionsRequest, callback?: (err: AWSError, data: EKS.Types.ListEksAnywhereSubscriptionsResponse) => void): Request<EKS.Types.ListEksAnywhereSubscriptionsResponse, AWSError>;
  /**
   * Displays the full description of the subscription.
   */
  listEksAnywhereSubscriptions(callback?: (err: AWSError, data: EKS.Types.ListEksAnywhereSubscriptionsResponse) => void): Request<EKS.Types.ListEksAnywhereSubscriptionsResponse, AWSError>;
  /**
   * Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region.
   */
  listFargateProfiles(params: EKS.Types.ListFargateProfilesRequest, callback?: (err: AWSError, data: EKS.Types.ListFargateProfilesResponse) => void): Request<EKS.Types.ListFargateProfilesResponse, AWSError>;
  /**
   * Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region.
   */
  listFargateProfiles(callback?: (err: AWSError, data: EKS.Types.ListFargateProfilesResponse) => void): Request<EKS.Types.ListFargateProfilesResponse, AWSError>;
  /**
   * Lists the identity provider configurations for your cluster.
   */
  listIdentityProviderConfigs(params: EKS.Types.ListIdentityProviderConfigsRequest, callback?: (err: AWSError, data: EKS.Types.ListIdentityProviderConfigsResponse) => void): Request<EKS.Types.ListIdentityProviderConfigsResponse, AWSError>;
  /**
   * Lists the identity provider configurations for your cluster.
   */
  listIdentityProviderConfigs(callback?: (err: AWSError, data: EKS.Types.ListIdentityProviderConfigsResponse) => void): Request<EKS.Types.ListIdentityProviderConfigsResponse, AWSError>;
  /**
   * Returns a list of all insights checked for against the specified cluster. You can filter which insights are returned by category, associated Kubernetes version, and status.
   */
  listInsights(params: EKS.Types.ListInsightsRequest, callback?: (err: AWSError, data: EKS.Types.ListInsightsResponse) => void): Request<EKS.Types.ListInsightsResponse, AWSError>;
  /**
   * Returns a list of all insights checked for against the specified cluster. You can filter which insights are returned by category, associated Kubernetes version, and status.
   */
  listInsights(callback?: (err: AWSError, data: EKS.Types.ListInsightsResponse) => void): Request<EKS.Types.ListInsightsResponse, AWSError>;
  /**
   * Lists the managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region. Self-managed node groups aren't listed.
   */
  listNodegroups(params: EKS.Types.ListNodegroupsRequest, callback?: (err: AWSError, data: EKS.Types.ListNodegroupsResponse) => void): Request<EKS.Types.ListNodegroupsResponse, AWSError>;
  /**
   * Lists the managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region. Self-managed node groups aren't listed.
   */
  listNodegroups(callback?: (err: AWSError, data: EKS.Types.ListNodegroupsResponse) => void): Request<EKS.Types.ListNodegroupsResponse, AWSError>;
  /**
   * List the EKS Pod Identity associations in a cluster. You can filter the list by the namespace that the association is in or the service account that the association uses.
   */
  listPodIdentityAssociations(params: EKS.Types.ListPodIdentityAssociationsRequest, callback?: (err: AWSError, data: EKS.Types.ListPodIdentityAssociationsResponse) => void): Request<EKS.Types.ListPodIdentityAssociationsResponse, AWSError>;
  /**
   * List the EKS Pod Identity associations in a cluster. You can filter the list by the namespace that the association is in or the service account that the association uses.
   */
  listPodIdentityAssociations(callback?: (err: AWSError, data: EKS.Types.ListPodIdentityAssociationsResponse) => void): Request<EKS.Types.ListPodIdentityAssociationsResponse, AWSError>;
  /**
   * List the tags for an Amazon EKS resource.
   */
  listTagsForResource(params: EKS.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: EKS.Types.ListTagsForResourceResponse) => void): Request<EKS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List the tags for an Amazon EKS resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: EKS.Types.ListTagsForResourceResponse) => void): Request<EKS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the updates associated with an Amazon EKS resource in your Amazon Web Services account, in the specified Amazon Web Services Region.
   */
  listUpdates(params: EKS.Types.ListUpdatesRequest, callback?: (err: AWSError, data: EKS.Types.ListUpdatesResponse) => void): Request<EKS.Types.ListUpdatesResponse, AWSError>;
  /**
   * Lists the updates associated with an Amazon EKS resource in your Amazon Web Services account, in the specified Amazon Web Services Region.
   */
  listUpdates(callback?: (err: AWSError, data: EKS.Types.ListUpdatesResponse) => void): Request<EKS.Types.ListUpdatesResponse, AWSError>;
  /**
   * Connects a Kubernetes cluster to the Amazon EKS control plane.  Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes.  Cluster connection requires two steps. First, send a  RegisterClusterRequest  to add it to the Amazon EKS control plane. Second, a Manifest containing the activationID and activationCode must be applied to the Kubernetes cluster through it's native provider to provide visibility. After the manifest is updated and applied, the connected cluster is visible to the Amazon EKS control plane. If the manifest isn't applied within three days, the connected cluster will no longer be visible and must be deregistered using DeregisterCluster.
   */
  registerCluster(params: EKS.Types.RegisterClusterRequest, callback?: (err: AWSError, data: EKS.Types.RegisterClusterResponse) => void): Request<EKS.Types.RegisterClusterResponse, AWSError>;
  /**
   * Connects a Kubernetes cluster to the Amazon EKS control plane.  Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes.  Cluster connection requires two steps. First, send a  RegisterClusterRequest  to add it to the Amazon EKS control plane. Second, a Manifest containing the activationID and activationCode must be applied to the Kubernetes cluster through it's native provider to provide visibility. After the manifest is updated and applied, the connected cluster is visible to the Amazon EKS control plane. If the manifest isn't applied within three days, the connected cluster will no longer be visible and must be deregistered using DeregisterCluster.
   */
  registerCluster(callback?: (err: AWSError, data: EKS.Types.RegisterClusterResponse) => void): Request<EKS.Types.RegisterClusterResponse, AWSError>;
  /**
   * Associates the specified tags to an Amazon EKS resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted. Tags that you create for Amazon EKS resources don't propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag doesn't automatically propagate to the subnets and nodes associated with the cluster.
   */
  tagResource(params: EKS.Types.TagResourceRequest, callback?: (err: AWSError, data: EKS.Types.TagResourceResponse) => void): Request<EKS.Types.TagResourceResponse, AWSError>;
  /**
   * Associates the specified tags to an Amazon EKS resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted. Tags that you create for Amazon EKS resources don't propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag doesn't automatically propagate to the subnets and nodes associated with the cluster.
   */
  tagResource(callback?: (err: AWSError, data: EKS.Types.TagResourceResponse) => void): Request<EKS.Types.TagResourceResponse, AWSError>;
  /**
   * Deletes specified tags from an Amazon EKS resource.
   */
  untagResource(params: EKS.Types.UntagResourceRequest, callback?: (err: AWSError, data: EKS.Types.UntagResourceResponse) => void): Request<EKS.Types.UntagResourceResponse, AWSError>;
  /**
   * Deletes specified tags from an Amazon EKS resource.
   */
  untagResource(callback?: (err: AWSError, data: EKS.Types.UntagResourceResponse) => void): Request<EKS.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an access entry.
   */
  updateAccessEntry(params: EKS.Types.UpdateAccessEntryRequest, callback?: (err: AWSError, data: EKS.Types.UpdateAccessEntryResponse) => void): Request<EKS.Types.UpdateAccessEntryResponse, AWSError>;
  /**
   * Updates an access entry.
   */
  updateAccessEntry(callback?: (err: AWSError, data: EKS.Types.UpdateAccessEntryResponse) => void): Request<EKS.Types.UpdateAccessEntryResponse, AWSError>;
  /**
   * Updates an Amazon EKS add-on.
   */
  updateAddon(params: EKS.Types.UpdateAddonRequest, callback?: (err: AWSError, data: EKS.Types.UpdateAddonResponse) => void): Request<EKS.Types.UpdateAddonResponse, AWSError>;
  /**
   * Updates an Amazon EKS add-on.
   */
  updateAddon(callback?: (err: AWSError, data: EKS.Types.UpdateAddonResponse) => void): Request<EKS.Types.UpdateAddonResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with DescribeUpdate"/&gt;. You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing.  You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS cluster endpoint access control in the  Amazon EKS User Guide . You can also use this API operation to choose different subnets and security groups for the cluster. You must specify at least two subnets that are in different Availability Zones. You can't change which VPC the subnets are from, the subnets must be in the same VPC as the subnets that the cluster was created with. For more information about the VPC requirements, see https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html in the  Amazon EKS User Guide . Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterConfig(params: EKS.Types.UpdateClusterConfigRequest, callback?: (err: AWSError, data: EKS.Types.UpdateClusterConfigResponse) => void): Request<EKS.Types.UpdateClusterConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with DescribeUpdate"/&gt;. You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing.  You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS cluster endpoint access control in the  Amazon EKS User Guide . You can also use this API operation to choose different subnets and security groups for the cluster. You must specify at least two subnets that are in different Availability Zones. You can't change which VPC the subnets are from, the subnets must be in the same VPC as the subnets that the cluster was created with. For more information about the VPC requirements, see https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html in the  Amazon EKS User Guide . Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
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
   * Update an EKS Anywhere Subscription. Only auto renewal and tags can be updated after subscription creation.
   */
  updateEksAnywhereSubscription(params: EKS.Types.UpdateEksAnywhereSubscriptionRequest, callback?: (err: AWSError, data: EKS.Types.UpdateEksAnywhereSubscriptionResponse) => void): Request<EKS.Types.UpdateEksAnywhereSubscriptionResponse, AWSError>;
  /**
   * Update an EKS Anywhere Subscription. Only auto renewal and tags can be updated after subscription creation.
   */
  updateEksAnywhereSubscription(callback?: (err: AWSError, data: EKS.Types.UpdateEksAnywhereSubscriptionResponse) => void): Request<EKS.Types.UpdateEksAnywhereSubscriptionResponse, AWSError>;
  /**
   * Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
   */
  updateNodegroupConfig(params: EKS.Types.UpdateNodegroupConfigRequest, callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupConfigResponse) => void): Request<EKS.Types.UpdateNodegroupConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
   */
  updateNodegroupConfig(callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupConfigResponse) => void): Request<EKS.Types.UpdateNodegroupConfigResponse, AWSError>;
  /**
   * Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template. If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide.  You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, every Pod on that node is drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a Pod disruption budget issue.
   */
  updateNodegroupVersion(params: EKS.Types.UpdateNodegroupVersionRequest, callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupVersionResponse) => void): Request<EKS.Types.UpdateNodegroupVersionResponse, AWSError>;
  /**
   * Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template. If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide.  You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, every Pod on that node is drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a Pod disruption budget issue.
   */
  updateNodegroupVersion(callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupVersionResponse) => void): Request<EKS.Types.UpdateNodegroupVersionResponse, AWSError>;
  /**
   * Updates a EKS Pod Identity association. Only the IAM role can be changed; an association can't be moved between clusters, namespaces, or service accounts. If you need to edit the namespace or service account, you need to delete the association and then create a new association with your desired settings.
   */
  updatePodIdentityAssociation(params: EKS.Types.UpdatePodIdentityAssociationRequest, callback?: (err: AWSError, data: EKS.Types.UpdatePodIdentityAssociationResponse) => void): Request<EKS.Types.UpdatePodIdentityAssociationResponse, AWSError>;
  /**
   * Updates a EKS Pod Identity association. Only the IAM role can be changed; an association can't be moved between clusters, namespaces, or service accounts. If you need to edit the namespace or service account, you need to delete the association and then create a new association with your desired settings.
   */
  updatePodIdentityAssociation(callback?: (err: AWSError, data: EKS.Types.UpdatePodIdentityAssociationResponse) => void): Request<EKS.Types.UpdatePodIdentityAssociationResponse, AWSError>;
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
  /**
   * Waits for the addonActive state by periodically calling the underlying EKS.describeAddonoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "addonActive", params: EKS.Types.DescribeAddonRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Waits for the addonActive state by periodically calling the underlying EKS.describeAddonoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "addonActive", callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Waits for the addonDeleted state by periodically calling the underlying EKS.describeAddonoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "addonDeleted", params: EKS.Types.DescribeAddonRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Waits for the addonDeleted state by periodically calling the underlying EKS.describeAddonoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "addonDeleted", callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Waits for the fargateProfileActive state by periodically calling the underlying EKS.describeFargateProfileoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "fargateProfileActive", params: EKS.Types.DescribeFargateProfileRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeFargateProfileResponse) => void): Request<EKS.Types.DescribeFargateProfileResponse, AWSError>;
  /**
   * Waits for the fargateProfileActive state by periodically calling the underlying EKS.describeFargateProfileoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "fargateProfileActive", callback?: (err: AWSError, data: EKS.Types.DescribeFargateProfileResponse) => void): Request<EKS.Types.DescribeFargateProfileResponse, AWSError>;
  /**
   * Waits for the fargateProfileDeleted state by periodically calling the underlying EKS.describeFargateProfileoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "fargateProfileDeleted", params: EKS.Types.DescribeFargateProfileRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeFargateProfileResponse) => void): Request<EKS.Types.DescribeFargateProfileResponse, AWSError>;
  /**
   * Waits for the fargateProfileDeleted state by periodically calling the underlying EKS.describeFargateProfileoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "fargateProfileDeleted", callback?: (err: AWSError, data: EKS.Types.DescribeFargateProfileResponse) => void): Request<EKS.Types.DescribeFargateProfileResponse, AWSError>;
}
declare namespace EKS {
  export type AMITypes = "AL2_x86_64"|"AL2_x86_64_GPU"|"AL2_ARM_64"|"CUSTOM"|"BOTTLEROCKET_ARM_64"|"BOTTLEROCKET_x86_64"|"BOTTLEROCKET_ARM_64_NVIDIA"|"BOTTLEROCKET_x86_64_NVIDIA"|"WINDOWS_CORE_2019_x86_64"|"WINDOWS_FULL_2019_x86_64"|"WINDOWS_CORE_2022_x86_64"|"WINDOWS_FULL_2022_x86_64"|"AL2023_x86_64_STANDARD"|"AL2023_ARM_64_STANDARD"|string;
  export interface AccessConfigResponse {
    /**
     * Specifies whether or not the cluster creator IAM principal was set as a cluster admin access entry during cluster creation time.
     */
    bootstrapClusterCreatorAdminPermissions?: BoxedBoolean;
    /**
     * The current authentication mode of the cluster.
     */
    authenticationMode?: AuthenticationMode;
  }
  export interface AccessEntry {
    /**
     * The name of your cluster.
     */
    clusterName?: String;
    /**
     * The ARN of the IAM principal for the access entry. If you ever delete the IAM principal with this ARN, the access entry isn't automatically deleted. We recommend that you delete the access entry with an ARN for an IAM principal that you delete. If you don't delete the access entry and ever recreate the IAM principal, even if it has the same ARN, the access entry won't work. This is because even though the ARN is the same for the recreated IAM principal, the roleID or userID (you can see this with the Security Token Service GetCallerIdentity API) is different for the recreated IAM principal than it was for the original IAM principal. Even though you don't see the IAM principal's roleID or userID for an access entry, Amazon EKS stores it with the access entry.
     */
    principalArn?: String;
    /**
     * A name that you've specified in a Kubernetes RoleBinding or ClusterRoleBinding object so that Kubernetes authorizes the principalARN access to cluster objects.
     */
    kubernetesGroups?: StringList;
    /**
     * The ARN of the access entry.
     */
    accessEntryArn?: String;
    /**
     * The Unix epoch timestamp at object creation.
     */
    createdAt?: Timestamp;
    /**
     * The Unix epoch timestamp for the last modification to the object.
     */
    modifiedAt?: Timestamp;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * The name of a user that can authenticate to your cluster.
     */
    username?: String;
    /**
     * The type of the access entry.
     */
    type?: String;
  }
  export type AccessPoliciesList = AccessPolicy[];
  export interface AccessPolicy {
    /**
     * The name of the access policy.
     */
    name?: String;
    /**
     * The ARN of the access policy.
     */
    arn?: String;
  }
  export interface AccessScope {
    /**
     * The scope type of an access policy.
     */
    type?: AccessScopeType;
    /**
     * A Kubernetes namespace that an access policy is scoped to. A value is required if you specified namespace for Type.
     */
    namespaces?: StringList;
  }
  export type AccessScopeType = "cluster"|"namespace"|string;
  export type AdditionalInfoMap = {[key: string]: String};
  export interface Addon {
    /**
     * The name of the add-on.
     */
    addonName?: String;
    /**
     * The name of your cluster.
     */
    clusterName?: ClusterName;
    /**
     * The status of the add-on.
     */
    status?: AddonStatus;
    /**
     * The version of the add-on.
     */
    addonVersion?: String;
    /**
     * An object that represents the health of the add-on.
     */
    health?: AddonHealth;
    /**
     * The Amazon Resource Name (ARN) of the add-on.
     */
    addonArn?: String;
    /**
     * The Unix epoch timestamp at object creation.
     */
    createdAt?: Timestamp;
    /**
     * The Unix epoch timestamp for the last modification to the object.
     */
    modifiedAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that's bound to the Kubernetes ServiceAccount object that the add-on uses.
     */
    serviceAccountRoleArn?: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * The publisher of the add-on.
     */
    publisher?: String;
    /**
     * The owner of the add-on.
     */
    owner?: String;
    /**
     * Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.
     */
    marketplaceInformation?: MarketplaceInformation;
    /**
     * The configuration values that you provided.
     */
    configurationValues?: String;
    /**
     * An array of Pod Identity Assocations owned by the Addon. Each EKS Pod Identity association maps a role to a service account in a namespace in the cluster. For more information, see Attach an IAM Role to an Amazon EKS add-on using Pod Identity in the EKS User Guide.
     */
    podIdentityAssociations?: StringList;
  }
  export interface AddonHealth {
    /**
     * An object representing the health issues for an add-on.
     */
    issues?: AddonIssueList;
  }
  export interface AddonInfo {
    /**
     * The name of the add-on.
     */
    addonName?: String;
    /**
     * The type of the add-on.
     */
    type?: String;
    /**
     * An object representing information about available add-on versions and compatible Kubernetes versions.
     */
    addonVersions?: AddonVersionInfoList;
    /**
     * The publisher of the add-on.
     */
    publisher?: String;
    /**
     * The owner of the add-on.
     */
    owner?: String;
    /**
     * Information about the add-on from the Amazon Web Services Marketplace.
     */
    marketplaceInformation?: MarketplaceInformation;
  }
  export interface AddonIssue {
    /**
     * A code that describes the type of issue.
     */
    code?: AddonIssueCode;
    /**
     * A message that provides details about the issue and what might cause it.
     */
    message?: String;
    /**
     * The resource IDs of the issue.
     */
    resourceIds?: StringList;
  }
  export type AddonIssueCode = "AccessDenied"|"InternalFailure"|"ClusterUnreachable"|"InsufficientNumberOfReplicas"|"ConfigurationConflict"|"AdmissionRequestDenied"|"UnsupportedAddonModification"|"K8sResourceNotFound"|"AddonSubscriptionNeeded"|"AddonPermissionFailure"|string;
  export type AddonIssueList = AddonIssue[];
  export interface AddonPodIdentityAssociations {
    /**
     * The name of a Kubernetes Service Account.
     */
    serviceAccount: String;
    /**
     * The ARN of an IAM Role.
     */
    roleArn: String;
  }
  export type AddonPodIdentityAssociationsList = AddonPodIdentityAssociations[];
  export interface AddonPodIdentityConfiguration {
    /**
     * The Kubernetes Service Account name used by the addon.
     */
    serviceAccount?: String;
    /**
     * A suggested IAM Policy for the addon.
     */
    recommendedManagedPolicies?: StringList;
  }
  export type AddonPodIdentityConfigurationList = AddonPodIdentityConfiguration[];
  export type AddonStatus = "CREATING"|"ACTIVE"|"CREATE_FAILED"|"UPDATING"|"DELETING"|"DELETE_FAILED"|"DEGRADED"|"UPDATE_FAILED"|string;
  export interface AddonVersionInfo {
    /**
     * The version of the add-on.
     */
    addonVersion?: String;
    /**
     * The architectures that the version supports.
     */
    architecture?: StringList;
    /**
     * An object representing the compatibilities of a version.
     */
    compatibilities?: Compatibilities;
    /**
     * Whether the add-on requires configuration.
     */
    requiresConfiguration?: Boolean;
    /**
     * Indicates if the Addon requires IAM Permissions to operate, such as networking permissions.
     */
    requiresIamPermissions?: Boolean;
  }
  export type AddonVersionInfoList = AddonVersionInfo[];
  export type Addons = AddonInfo[];
  export interface AssociateAccessPolicyRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM user or role for the AccessEntry that you're associating the access policy to. 
     */
    principalArn: String;
    /**
     * The ARN of the AccessPolicy that you're associating. For a list of ARNs, use ListAccessPolicies.
     */
    policyArn: String;
    /**
     * The scope for the AccessPolicy. You can scope access policies to an entire cluster or to specific Kubernetes namespaces.
     */
    accessScope: AccessScope;
  }
  export interface AssociateAccessPolicyResponse {
    /**
     * The name of your cluster.
     */
    clusterName?: String;
    /**
     * The ARN of the IAM principal for the AccessEntry.
     */
    principalArn?: String;
    /**
     * The AccessPolicy and scope associated to the AccessEntry.
     */
    associatedAccessPolicy?: AssociatedAccessPolicy;
  }
  export interface AssociateEncryptionConfigRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The configuration you are using for encryption.
     */
    encryptionConfig: EncryptionConfigList;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface AssociateEncryptionConfigResponse {
    update?: Update;
  }
  export interface AssociateIdentityProviderConfigRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * An object representing an OpenID Connect (OIDC) identity provider configuration.
     */
    oidc: OidcIdentityProviderConfigRequest;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface AssociateIdentityProviderConfigResponse {
    update?: Update;
    /**
     * The tags for the resource.
     */
    tags?: TagMap;
  }
  export type AssociatedAccessPoliciesList = AssociatedAccessPolicy[];
  export interface AssociatedAccessPolicy {
    /**
     * The ARN of the AccessPolicy.
     */
    policyArn?: String;
    /**
     * The scope of the access policy.
     */
    accessScope?: AccessScope;
    /**
     * The date and time the AccessPolicy was associated with an AccessEntry.
     */
    associatedAt?: Timestamp;
    /**
     * The Unix epoch timestamp for the last modification to the object.
     */
    modifiedAt?: Timestamp;
  }
  export type AuthenticationMode = "API"|"API_AND_CONFIG_MAP"|"CONFIG_MAP"|string;
  export interface AutoScalingGroup {
    /**
     * The name of the Auto Scaling group associated with an Amazon EKS managed node group.
     */
    name?: String;
  }
  export type AutoScalingGroupList = AutoScalingGroup[];
  export type Boolean = boolean;
  export type BoxedBoolean = boolean;
  export type BoxedInteger = number;
  export type Capacity = number;
  export type CapacityTypes = "ON_DEMAND"|"SPOT"|string;
  export type Category = "UPGRADE_READINESS"|string;
  export type CategoryList = Category[];
  export interface Certificate {
    /**
     * The Base64-encoded certificate data required to communicate with your cluster. Add this to the certificate-authority-data section of the kubeconfig file for your cluster.
     */
    data?: String;
  }
  export interface ClientStat {
    /**
     * The user agent of the Kubernetes client using the deprecated resource.
     */
    userAgent?: String;
    /**
     * The number of requests from the Kubernetes client seen over the last 30 days.
     */
    numberOfRequestsLast30Days?: Integer;
    /**
     * The timestamp of the last request seen from the Kubernetes client.
     */
    lastRequestTime?: Timestamp;
  }
  export type ClientStats = ClientStat[];
  export interface Cluster {
    /**
     * The name of your cluster.
     */
    name?: String;
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     */
    arn?: String;
    /**
     * The Unix epoch timestamp at object creation.
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
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf.
     */
    roleArn?: String;
    /**
     * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC considerations and Cluster security group considerations in the Amazon EKS User Guide.
     */
    resourcesVpcConfig?: VpcConfigResponse;
    /**
     * The Kubernetes network configuration for the cluster.
     */
    kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;
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
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The platform version of your Amazon EKS cluster. For more information about clusters deployed on the Amazon Web Services Cloud, see Platform versions in the  Amazon EKS User Guide . For more information about local clusters deployed on an Outpost, see Amazon EKS local cluster platform versions in the  Amazon EKS User Guide .
     */
    platformVersion?: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * The encryption configuration for the cluster.
     */
    encryptionConfig?: EncryptionConfigList;
    /**
     * The configuration used to connect to a cluster for registration.
     */
    connectorConfig?: ConnectorConfigResponse;
    /**
     * The ID of your local Amazon EKS cluster on an Amazon Web Services Outpost. This property isn't available for an Amazon EKS cluster on the Amazon Web Services cloud.
     */
    id?: String;
    /**
     * An object representing the health of your Amazon EKS cluster.
     */
    health?: ClusterHealth;
    /**
     * An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This object isn't available for clusters on the Amazon Web Services cloud.
     */
    outpostConfig?: OutpostConfigResponse;
    /**
     * The access configuration for the cluster.
     */
    accessConfig?: AccessConfigResponse;
  }
  export interface ClusterHealth {
    /**
     * An object representing the health issues of your Amazon EKS cluster.
     */
    issues?: ClusterIssueList;
  }
  export interface ClusterIssue {
    /**
     * The error code of the issue.
     */
    code?: ClusterIssueCode;
    /**
     * A description of the issue.
     */
    message?: String;
    /**
     * The resource IDs that the issue relates to.
     */
    resourceIds?: StringList;
  }
  export type ClusterIssueCode = "AccessDenied"|"ClusterUnreachable"|"ConfigurationConflict"|"InternalFailure"|"ResourceLimitExceeded"|"ResourceNotFound"|"IamRoleNotFound"|"VpcNotFound"|"InsufficientFreeAddresses"|"Ec2ServiceNotSubscribed"|"Ec2SubnetNotFound"|"Ec2SecurityGroupNotFound"|"KmsGrantRevoked"|"KmsKeyNotFound"|"KmsKeyMarkedForDeletion"|"KmsKeyDisabled"|"StsRegionalEndpointDisabled"|"UnsupportedVersion"|"Other"|string;
  export type ClusterIssueList = ClusterIssue[];
  export type ClusterName = string;
  export type ClusterStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"UPDATING"|"PENDING"|string;
  export type Compatibilities = Compatibility[];
  export interface Compatibility {
    /**
     * The supported Kubernetes version of the cluster.
     */
    clusterVersion?: String;
    /**
     * The supported compute platform.
     */
    platformVersions?: StringList;
    /**
     * The supported default version.
     */
    defaultVersion?: Boolean;
  }
  export type ConnectorConfigProvider = "EKS_ANYWHERE"|"ANTHOS"|"GKE"|"AKS"|"OPENSHIFT"|"TANZU"|"RANCHER"|"EC2"|"OTHER"|string;
  export interface ConnectorConfigRequest {
    /**
     * The Amazon Resource Name (ARN) of the role that is authorized to request the connector configuration.
     */
    roleArn: String;
    /**
     * The cloud provider for the target cluster to connect.
     */
    provider: ConnectorConfigProvider;
  }
  export interface ConnectorConfigResponse {
    /**
     * A unique ID associated with the cluster for registration purposes.
     */
    activationId?: String;
    /**
     * A unique code associated with the cluster for registration purposes.
     */
    activationCode?: String;
    /**
     * The expiration time of the connected cluster. The cluster's YAML file must be applied through the native provider.
     */
    activationExpiry?: Timestamp;
    /**
     * The cluster's cloud service provider.
     */
    provider?: String;
    /**
     * The Amazon Resource Name (ARN) of the role to communicate with services from the connected Kubernetes cluster.
     */
    roleArn?: String;
  }
  export interface ControlPlanePlacementRequest {
    /**
     * The name of the placement group for the Kubernetes control plane instances. This setting can't be changed after cluster creation. 
     */
    groupName?: String;
  }
  export interface ControlPlanePlacementResponse {
    /**
     * The name of the placement group for the Kubernetes control plane instances.
     */
    groupName?: String;
  }
  export interface CreateAccessConfigRequest {
    /**
     * Specifies whether or not the cluster creator IAM principal was set as a cluster admin access entry during cluster creation time. The default value is true.
     */
    bootstrapClusterCreatorAdminPermissions?: BoxedBoolean;
    /**
     * The desired authentication mode for the cluster. If you create a cluster by using the EKS API, Amazon Web Services SDKs, or CloudFormation, the default is CONFIG_MAP. If you create the cluster by using the Amazon Web Services Management Console, the default value is API_AND_CONFIG_MAP.
     */
    authenticationMode?: AuthenticationMode;
  }
  export interface CreateAccessEntryRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The ARN of the IAM principal for the AccessEntry. You can specify one ARN for each access entry. You can't specify the same ARN in more than one access entry. This value can't be changed after access entry creation. The valid principals differ depending on the type of the access entry in the type field. The only valid ARN is IAM roles for the types of access entries for nodes:  . You can use every IAM principal type for STANDARD access entries. You can't use the STS session principal type with access entries because this is a temporary principal for each session and not a permanent identity that can be assigned permissions.  IAM best practices recommend using IAM roles with temporary credentials, rather than IAM users with long-term credentials. 
     */
    principalArn: String;
    /**
     * The value for name that you've specified for kind: Group as a subject in a Kubernetes RoleBinding or ClusterRoleBinding object. Amazon EKS doesn't confirm that the value for name exists in any bindings on your cluster. You can specify one or more names. Kubernetes authorizes the principalArn of the access entry to access any cluster objects that you've specified in a Kubernetes Role or ClusterRole object that is also specified in a binding's roleRef. For more information about creating Kubernetes RoleBinding, ClusterRoleBinding, Role, or ClusterRole objects, see Using RBAC Authorization in the Kubernetes documentation. If you want Amazon EKS to authorize the principalArn (instead of, or in addition to Kubernetes authorizing the principalArn), you can associate one or more access policies to the access entry using AssociateAccessPolicy. If you associate any access policies, the principalARN has all permissions assigned in the associated access policies and all permissions in any Kubernetes Role or ClusterRole objects that the group names are bound to.
     */
    kubernetesGroups?: StringList;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The username to authenticate to Kubernetes with. We recommend not specifying a username and letting Amazon EKS specify it for you. For more information about the value Amazon EKS specifies for you, or constraints before specifying your own username, see Creating access entries in the Amazon EKS User Guide.
     */
    username?: String;
    /**
     * The type of the new access entry. Valid values are Standard, FARGATE_LINUX, EC2_LINUX, and EC2_WINDOWS. If the principalArn is for an IAM role that's used for self-managed Amazon EC2 nodes, specify EC2_LINUX or EC2_WINDOWS. Amazon EKS grants the necessary permissions to the node for you. If the principalArn is for any other purpose, specify STANDARD. If you don't specify a value, Amazon EKS sets the value to STANDARD. It's unnecessary to create access entries for IAM roles used with Fargate profiles or managed Amazon EC2 nodes, because Amazon EKS creates entries in the aws-auth ConfigMap for the roles. You can't change this value once you've created the access entry. If you set the value to EC2_LINUX or EC2_WINDOWS, you can't specify values for kubernetesGroups, or associate an AccessPolicy to the access entry.
     */
    type?: String;
  }
  export interface CreateAccessEntryResponse {
    accessEntry?: AccessEntry;
  }
  export interface CreateAddonRequest {
    /**
     * The name of your cluster.
     */
    clusterName: ClusterName;
    /**
     * The name of the add-on. The name must match one of the names returned by DescribeAddonVersions.
     */
    addonName: String;
    /**
     * The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions .
     */
    addonVersion?: String;
    /**
     * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.  To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide. 
     */
    serviceAccountRoleArn?: RoleArn;
    /**
     * How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:    None – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.    Overwrite – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.    Preserve – This is similar to the NONE option. If the self-managed version of the add-on is installed on your cluster Amazon EKS doesn't change the add-on resource properties. Creation of the add-on might fail if conflicts are detected. This option works differently during the update operation. For more information, see UpdateAddon.   If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.
     */
    resolveConflicts?: ResolveConflicts;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * The set of configuration values for the add-on that's created. The values that you provide are validated against the schema returned by DescribeAddonConfiguration.
     */
    configurationValues?: String;
    /**
     * An array of Pod Identity Assocations to be created. Each EKS Pod Identity association maps a Kubernetes service account to an IAM Role. For more information, see Attach an IAM Role to an Amazon EKS add-on using Pod Identity in the EKS User Guide.
     */
    podIdentityAssociations?: AddonPodIdentityAssociationsList;
  }
  export interface CreateAddonResponse {
    addon?: Addon;
  }
  export interface CreateClusterRequest {
    /**
     * The unique name to give to your cluster.
     */
    name: ClusterName;
    /**
     * The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.  The default version might not be the latest version available. 
     */
    version?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see Amazon EKS Service IAM Role in the  Amazon EKS User Guide .
     */
    roleArn: String;
    /**
     * The VPC configuration that's used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations and Cluster Security Group Considerations in the Amazon EKS User Guide. You must specify at least two subnets. You can specify up to five security groups. However, we recommend that you use a dedicated security group for your cluster control plane.
     */
    resourcesVpcConfig: VpcConfigRequest;
    /**
     * The Kubernetes network configuration for the cluster.
     */
    kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;
    /**
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing. 
     */
    logging?: Logging;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * The encryption configuration for the cluster.
     */
    encryptionConfig?: EncryptionConfigList;
    /**
     * An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a local cluster on an Outpost, review Local clusters for Amazon EKS on Amazon Web Services Outposts in the Amazon EKS User Guide. This object isn't available for creating Amazon EKS clusters on the Amazon Web Services cloud.
     */
    outpostConfig?: OutpostConfigRequest;
    /**
     * The access configuration for the cluster.
     */
    accessConfig?: CreateAccessConfigRequest;
    /**
     * If you set this value to False when creating a cluster, the default networking add-ons will not be installed. The default networking addons include vpc-cni, coredns, and kube-proxy. Use this option when you plan to install third-party alternative add-ons or self-manage the default networking add-ons.
     */
    bootstrapSelfManagedAddons?: BoxedBoolean;
  }
  export interface CreateClusterResponse {
    /**
     * The full description of your new cluster.
     */
    cluster?: Cluster;
  }
  export interface CreateEksAnywhereSubscriptionRequest {
    /**
     * The unique name for your subscription. It must be unique in your Amazon Web Services account in the Amazon Web Services Region you're creating the subscription in. The name can contain only alphanumeric characters (case-sensitive), hyphens, and underscores. It must start with an alphabetic character and can't be longer than 100 characters.
     */
    name: EksAnywhereSubscriptionName;
    /**
     * An object representing the term duration and term unit type of your subscription. This determines the term length of your subscription. Valid values are MONTHS for term unit and 12 or 36 for term duration, indicating a 12 month or 36 month subscription. This value cannot be changed after creating the subscription.
     */
    term: EksAnywhereSubscriptionTerm;
    /**
     * The number of licenses to purchase with the subscription. Valid values are between 1 and 100. This value can't be changed after creating the subscription.
     */
    licenseQuantity?: Integer;
    /**
     * The license type for all licenses in the subscription. Valid value is CLUSTER. With the CLUSTER license type, each license covers support for a single EKS Anywhere cluster.
     */
    licenseType?: EksAnywhereSubscriptionLicenseType;
    /**
     * A boolean indicating whether the subscription auto renews at the end of the term.
     */
    autoRenew?: Boolean;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The metadata for a subscription to assist with categorization and organization. Each tag consists of a key and an optional value. Subscription tags don't propagate to any other resources associated with the subscription.
     */
    tags?: TagMap;
  }
  export interface CreateEksAnywhereSubscriptionResponse {
    /**
     * The full description of the subscription.
     */
    subscription?: EksAnywhereSubscription;
  }
  export interface CreateFargateProfileRequest {
    /**
     * The name of the Fargate profile.
     */
    fargateProfileName: String;
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The Amazon Resource Name (ARN) of the Pod execution role to use for a Pod that matches the selectors in the Fargate profile. The Pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see  Pod execution role in the Amazon EKS User Guide.
     */
    podExecutionRoleArn: String;
    /**
     * The IDs of subnets to launch a Pod into. A Pod running on Fargate isn't assigned a public IP address, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.
     */
    subnets?: StringList;
    /**
     * The selectors to match for a Pod to use this Fargate profile. Each selector must have an associated Kubernetes namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile.
     */
    selectors?: FargateProfileSelectors;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
  }
  export interface CreateFargateProfileResponse {
    /**
     * The full description of your new Fargate profile.
     */
    fargateProfile?: FargateProfile;
  }
  export interface CreateNodegroupRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The unique name to give your node group.
     */
    nodegroupName: String;
    /**
     * The scaling configuration details for the Auto Scaling group that is created for your node group.
     */
    scalingConfig?: NodegroupScalingConfig;
    /**
     * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify launchTemplate, then don't specify diskSize, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    diskSize?: BoxedInteger;
    /**
     * The subnets to use for the Auto Scaling group that is created for your node group. If you specify launchTemplate, then don't specify  SubnetId  in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    subnets: StringList;
    /**
     * Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the amiType parameter. If you specify launchTemplate, then you can specify zero or one instance type in your launch template or you can specify 0-20 instance types for instanceTypes. If however, you specify an instance type in your launch template and specify any instanceTypes, the node group deployment will fail. If you don't specify an instance type in a launch template or for instanceTypes, then t3.medium is used, by default. If you specify Spot for capacityType, then we recommend specifying multiple values for instanceTypes. For more information, see Managed node group capacity types and Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    instanceTypes?: StringList;
    /**
     * The AMI type for your node group. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify amiType, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add eks:kube-proxy-windows to your Windows nodes rolearn in the aws-auth ConfigMap. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    amiType?: AMITypes;
    /**
     * The remote access configuration to use with your node group. For Linux, the protocol is SSH. For Windows, the protocol is RDP. If you specify launchTemplate, then don't specify remoteAccess, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    remoteAccess?: RemoteAccessConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node kubelet daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see Amazon EKS node IAM role in the  Amazon EKS User Guide . If you specify launchTemplate, then don't specify  IamInstanceProfile  in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    nodeRole: String;
    /**
     * The Kubernetes labels to apply to the nodes in the node group when they are created.
     */
    labels?: labelsMap;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group. For more information, see Node taints on managed node groups.
     */
    taints?: taintsList;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * An object representing a node group's launch template specification. When using this object, don't directly specify instanceTypes, diskSize, or remoteAccess. Make sure that the launch template meets the requirements in launchTemplateSpecification. Also refer to Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    launchTemplate?: LaunchTemplateSpecification;
    /**
     * The node group update configuration.
     */
    updateConfig?: NodegroupUpdateConfig;
    /**
     * The capacity type for your node group.
     */
    capacityType?: CapacityTypes;
    /**
     * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    version?: String;
    /**
     * The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    releaseVersion?: String;
  }
  export interface CreateNodegroupResponse {
    /**
     * The full description of your new node group.
     */
    nodegroup?: Nodegroup;
  }
  export interface CreatePodIdentityAssociationRequest {
    /**
     * The name of the cluster to create the association in.
     */
    clusterName: String;
    /**
     * The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the pods that use the service account must be in this namespace.
     */
    namespace: String;
    /**
     * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
     */
    serviceAccount: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account.
     */
    roleArn: String;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources. The following basic restrictions apply to tags:   Maximum number of tags per resource – 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length – 128 Unicode characters in UTF-8   Maximum value length – 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: TagMap;
  }
  export interface CreatePodIdentityAssociationResponse {
    /**
     * The full description of your new association. The description includes an ID for the association. Use the ID of the association in further actions to manage the association.
     */
    association?: PodIdentityAssociation;
  }
  export interface DeleteAccessEntryRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The ARN of the IAM principal for the AccessEntry.
     */
    principalArn: String;
  }
  export interface DeleteAccessEntryResponse {
  }
  export interface DeleteAddonRequest {
    /**
     * The name of your cluster.
     */
    clusterName: ClusterName;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName: String;
    /**
     * Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed.
     */
    preserve?: Boolean;
  }
  export interface DeleteAddonResponse {
    addon?: Addon;
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
  export interface DeleteEksAnywhereSubscriptionRequest {
    /**
     * The ID of the subscription.
     */
    id: String;
  }
  export interface DeleteEksAnywhereSubscriptionResponse {
    /**
     * The full description of the subscription to be deleted.
     */
    subscription?: EksAnywhereSubscription;
  }
  export interface DeleteFargateProfileRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The name of the Fargate profile to delete.
     */
    fargateProfileName: String;
  }
  export interface DeleteFargateProfileResponse {
    /**
     * The deleted Fargate profile.
     */
    fargateProfile?: FargateProfile;
  }
  export interface DeleteNodegroupRequest {
    /**
     * The name of your cluster.
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
  export interface DeletePodIdentityAssociationRequest {
    /**
     * The cluster name that
     */
    clusterName: String;
    /**
     * The ID of the association to be deleted.
     */
    associationId: String;
  }
  export interface DeletePodIdentityAssociationResponse {
    /**
     * The full description of the EKS Pod Identity association that was deleted.
     */
    association?: PodIdentityAssociation;
  }
  export interface DeprecationDetail {
    /**
     * The deprecated version of the resource.
     */
    usage?: String;
    /**
     * The newer version of the resource to migrate to if applicable. 
     */
    replacedWith?: String;
    /**
     * The version of the software where the deprecated resource version will stop being served.
     */
    stopServingVersion?: String;
    /**
     * The version of the software where the newer resource version became available to migrate to if applicable.
     */
    startServingReplacementVersion?: String;
    /**
     * Details about Kubernetes clients using the deprecated resources.
     */
    clientStats?: ClientStats;
  }
  export type DeprecationDetails = DeprecationDetail[];
  export interface DeregisterClusterRequest {
    /**
     * The name of the connected cluster to deregister.
     */
    name: String;
  }
  export interface DeregisterClusterResponse {
    cluster?: Cluster;
  }
  export interface DescribeAccessEntryRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The ARN of the IAM principal for the AccessEntry.
     */
    principalArn: String;
  }
  export interface DescribeAccessEntryResponse {
    /**
     * Information about the access entry.
     */
    accessEntry?: AccessEntry;
  }
  export interface DescribeAddonConfigurationRequest {
    /**
     * The name of the add-on. The name must match one of the names returned by DescribeAddonVersions.
     */
    addonName: String;
    /**
     * The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions .
     */
    addonVersion: String;
  }
  export interface DescribeAddonConfigurationResponse {
    /**
     * The name of the add-on.
     */
    addonName?: String;
    /**
     * The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions .
     */
    addonVersion?: String;
    /**
     * A JSON schema that's used to validate the configuration values you provide when an add-on is created or updated.
     */
    configurationSchema?: String;
    /**
     * The Kubernetes service account name used by the addon, and any suggested IAM policies. Use this information to create an IAM Role for the Addon.
     */
    podIdentityConfiguration?: AddonPodIdentityConfigurationList;
  }
  export interface DescribeAddonRequest {
    /**
     * The name of your cluster.
     */
    clusterName: ClusterName;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName: String;
  }
  export interface DescribeAddonResponse {
    addon?: Addon;
  }
  export interface DescribeAddonVersionsRequest {
    /**
     * The Kubernetes versions that you can use the add-on with.
     */
    kubernetesVersion?: String;
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: DescribeAddonVersionsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName?: String;
    /**
     * The type of the add-on. For valid types, don't specify a value for this property.
     */
    types?: StringList;
    /**
     * The publisher of the add-on. For valid publishers, don't specify a value for this property.
     */
    publishers?: StringList;
    /**
     * The owner of the add-on. For valid owners, don't specify a value for this property.
     */
    owners?: StringList;
  }
  export type DescribeAddonVersionsRequestMaxResults = number;
  export interface DescribeAddonVersionsResponse {
    /**
     * The list of available versions with Kubernetes version compatibility and other properties.
     */
    addons?: Addons;
    /**
     * The nextToken value to include in a future DescribeAddonVersions request. When the results of a DescribeAddonVersions request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface DescribeClusterRequest {
    /**
     * The name of your cluster.
     */
    name: String;
  }
  export interface DescribeClusterResponse {
    /**
     * The full description of your specified cluster.
     */
    cluster?: Cluster;
  }
  export interface DescribeEksAnywhereSubscriptionRequest {
    /**
     * The ID of the subscription.
     */
    id: String;
  }
  export interface DescribeEksAnywhereSubscriptionResponse {
    /**
     * The full description of the subscription.
     */
    subscription?: EksAnywhereSubscription;
  }
  export interface DescribeFargateProfileRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The name of the Fargate profile to describe.
     */
    fargateProfileName: String;
  }
  export interface DescribeFargateProfileResponse {
    /**
     * The full description of your Fargate profile.
     */
    fargateProfile?: FargateProfile;
  }
  export interface DescribeIdentityProviderConfigRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * An object representing an identity provider configuration.
     */
    identityProviderConfig: IdentityProviderConfig;
  }
  export interface DescribeIdentityProviderConfigResponse {
    /**
     * The object that represents an OpenID Connect (OIDC) identity provider configuration.
     */
    identityProviderConfig?: IdentityProviderConfigResponse;
  }
  export interface DescribeInsightRequest {
    /**
     * The name of the cluster to describe the insight for.
     */
    clusterName: String;
    /**
     * The identity of the insight to describe.
     */
    id: String;
  }
  export interface DescribeInsightResponse {
    /**
     * The full description of the insight.
     */
    insight?: Insight;
  }
  export interface DescribeNodegroupRequest {
    /**
     * The name of your cluster.
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
  export interface DescribePodIdentityAssociationRequest {
    /**
     * The name of the cluster that the association is in.
     */
    clusterName: String;
    /**
     * The ID of the association that you want the description of.
     */
    associationId: String;
  }
  export interface DescribePodIdentityAssociationResponse {
    /**
     * The full description of the EKS Pod Identity association.
     */
    association?: PodIdentityAssociation;
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
     * The name of the Amazon EKS node group associated with the update. This parameter is required if the update is a node group update.
     */
    nodegroupName?: String;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons . This parameter is required if the update is an add-on update.
     */
    addonName?: String;
  }
  export interface DescribeUpdateResponse {
    /**
     * The full description of the specified update.
     */
    update?: Update;
  }
  export interface DisassociateAccessPolicyRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The ARN of the IAM principal for the AccessEntry.
     */
    principalArn: String;
    /**
     * The ARN of the policy to disassociate from the access entry. For a list of associated policies ARNs, use ListAssociatedAccessPolicies.
     */
    policyArn: String;
  }
  export interface DisassociateAccessPolicyResponse {
  }
  export interface DisassociateIdentityProviderConfigRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * An object representing an identity provider configuration.
     */
    identityProviderConfig: IdentityProviderConfig;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface DisassociateIdentityProviderConfigResponse {
    update?: Update;
  }
  export interface EksAnywhereSubscription {
    /**
     * UUID identifying a subscription.
     */
    id?: String;
    /**
     * The Amazon Resource Name (ARN) for the subscription.
     */
    arn?: String;
    /**
     * The Unix timestamp in seconds for when the subscription was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp in seconds for when the subscription is effective.
     */
    effectiveDate?: Timestamp;
    /**
     * The Unix timestamp in seconds for when the subscription will expire or auto renew, depending on the auto renew configuration of the subscription object.
     */
    expirationDate?: Timestamp;
    /**
     * The number of licenses included in a subscription. Valid values are between 1 and 100.
     */
    licenseQuantity?: Integer;
    /**
     * The type of licenses included in the subscription. Valid value is CLUSTER. With the CLUSTER license type, each license covers support for a single EKS Anywhere cluster.
     */
    licenseType?: EksAnywhereSubscriptionLicenseType;
    /**
     * An EksAnywhereSubscriptionTerm object. 
     */
    term?: EksAnywhereSubscriptionTerm;
    /**
     * The status of a subscription.
     */
    status?: String;
    /**
     * A boolean indicating whether or not a subscription will auto renew when it expires.
     */
    autoRenew?: Boolean;
    /**
     * Amazon Web Services License Manager ARN associated with the subscription.
     */
    licenseArns?: StringList;
    /**
     * The metadata for a subscription to assist with categorization and organization. Each tag consists of a key and an optional value. Subscription tags do not propagate to any other resources associated with the subscription.
     */
    tags?: TagMap;
  }
  export type EksAnywhereSubscriptionLicenseType = "Cluster"|string;
  export type EksAnywhereSubscriptionList = EksAnywhereSubscription[];
  export type EksAnywhereSubscriptionName = string;
  export type EksAnywhereSubscriptionStatus = "CREATING"|"ACTIVE"|"UPDATING"|"EXPIRING"|"EXPIRED"|"DELETING"|string;
  export type EksAnywhereSubscriptionStatusValues = EksAnywhereSubscriptionStatus[];
  export interface EksAnywhereSubscriptionTerm {
    /**
     * The duration of the subscription term. Valid values are 12 and 36, indicating a 12 month or 36 month subscription.
     */
    duration?: Integer;
    /**
     * The term unit of the subscription. Valid value is MONTHS.
     */
    unit?: EksAnywhereSubscriptionTermUnit;
  }
  export type EksAnywhereSubscriptionTermUnit = "MONTHS"|string;
  export interface EncryptionConfig {
    /**
     * Specifies the resources to be encrypted. The only supported value is secrets.
     */
    resources?: StringList;
    /**
     * Key Management Service (KMS) key. Either the ARN or the alias can be used.
     */
    provider?: Provider;
  }
  export type EncryptionConfigList = EncryptionConfig[];
  export type ErrorCode = "SubnetNotFound"|"SecurityGroupNotFound"|"EniLimitReached"|"IpNotAvailable"|"AccessDenied"|"OperationNotPermitted"|"VpcIdNotFound"|"Unknown"|"NodeCreationFailure"|"PodEvictionFailure"|"InsufficientFreeAddresses"|"ClusterUnreachable"|"InsufficientNumberOfReplicas"|"ConfigurationConflict"|"AdmissionRequestDenied"|"UnsupportedAddonModification"|"K8sResourceNotFound"|string;
  export interface ErrorDetail {
    /**
     * A brief description of the error.     SubnetNotFound: We couldn't find one of the subnets associated with the cluster.    SecurityGroupNotFound: We couldn't find one of the security groups associated with the cluster.    EniLimitReached: You have reached the elastic network interface limit for your account.    IpNotAvailable: A subnet associated with the cluster doesn't have any available IP addresses.    AccessDenied: You don't have permissions to perform the specified operation.    OperationNotPermitted: The service role associated with the cluster doesn't have the required access permissions for Amazon EKS.    VpcIdNotFound: We couldn't find the VPC associated with the cluster.  
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
  export interface FargateProfile {
    /**
     * The name of the Fargate profile.
     */
    fargateProfileName?: String;
    /**
     * The full Amazon Resource Name (ARN) of the Fargate profile.
     */
    fargateProfileArn?: String;
    /**
     * The name of your cluster.
     */
    clusterName?: String;
    /**
     * The Unix epoch timestamp at object creation.
     */
    createdAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the Pod execution role to use for any Pod that matches the selectors in the Fargate profile. For more information, see  Pod execution role in the Amazon EKS User Guide.
     */
    podExecutionRoleArn?: String;
    /**
     * The IDs of subnets to launch a Pod into.
     */
    subnets?: StringList;
    /**
     * The selectors to match for a Pod to use this Fargate profile.
     */
    selectors?: FargateProfileSelectors;
    /**
     * The current status of the Fargate profile.
     */
    status?: FargateProfileStatus;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * The health status of the Fargate profile. If there are issues with your Fargate profile's health, they are listed here.
     */
    health?: FargateProfileHealth;
  }
  export interface FargateProfileHealth {
    /**
     * Any issues that are associated with the Fargate profile.
     */
    issues?: FargateProfileIssueList;
  }
  export interface FargateProfileIssue {
    /**
     * A brief description of the error.
     */
    code?: FargateProfileIssueCode;
    /**
     * The error message associated with the issue.
     */
    message?: String;
    /**
     * The Amazon Web Services resources that are affected by this issue.
     */
    resourceIds?: StringList;
  }
  export type FargateProfileIssueCode = "PodExecutionRoleAlreadyInUse"|"AccessDenied"|"ClusterUnreachable"|"InternalFailure"|string;
  export type FargateProfileIssueList = FargateProfileIssue[];
  export type FargateProfileLabel = {[key: string]: String};
  export interface FargateProfileSelector {
    /**
     * The Kubernetes namespace that the selector should match.
     */
    namespace?: String;
    /**
     * The Kubernetes labels that the selector should match. A pod must contain all of the labels that are specified in the selector for it to be considered a match.
     */
    labels?: FargateProfileLabel;
  }
  export type FargateProfileSelectors = FargateProfileSelector[];
  export type FargateProfileStatus = "CREATING"|"ACTIVE"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|string;
  export type FargateProfilesRequestMaxResults = number;
  export interface Identity {
    /**
     * An object representing the OpenID Connect identity provider information.
     */
    oidc?: OIDC;
  }
  export interface IdentityProviderConfig {
    /**
     * The type of the identity provider configuration. The only type available is oidc.
     */
    type: String;
    /**
     * The name of the identity provider configuration.
     */
    name: String;
  }
  export interface IdentityProviderConfigResponse {
    /**
     * An object representing an OpenID Connect (OIDC) identity provider configuration.
     */
    oidc?: OidcIdentityProviderConfig;
  }
  export type IdentityProviderConfigs = IdentityProviderConfig[];
  export type IncludeClustersList = String[];
  export interface Insight {
    /**
     * The ID of the insight.
     */
    id?: String;
    /**
     * The name of the insight.
     */
    name?: String;
    /**
     * The category of the insight.
     */
    category?: Category;
    /**
     * The Kubernetes minor version associated with an insight if applicable.
     */
    kubernetesVersion?: String;
    /**
     * The time Amazon EKS last successfully completed a refresh of this insight check on the cluster.
     */
    lastRefreshTime?: Timestamp;
    /**
     * The time the status of the insight last changed.
     */
    lastTransitionTime?: Timestamp;
    /**
     * The description of the insight which includes alert criteria, remediation recommendation, and additional resources (contains Markdown).
     */
    description?: String;
    /**
     * An object containing more detail on the status of the insight resource.
     */
    insightStatus?: InsightStatus;
    /**
     * A summary of how to remediate the finding of this insight if applicable. 
     */
    recommendation?: String;
    /**
     * Links to sources that provide additional context on the insight.
     */
    additionalInfo?: AdditionalInfoMap;
    /**
     * The details about each resource listed in the insight check result.
     */
    resources?: InsightResourceDetails;
    /**
     * Summary information that relates to the category of the insight. Currently only returned with certain insights having category UPGRADE_READINESS.
     */
    categorySpecificSummary?: InsightCategorySpecificSummary;
  }
  export interface InsightCategorySpecificSummary {
    /**
     * The summary information about deprecated resource usage for an insight check in the UPGRADE_READINESS category.
     */
    deprecationDetails?: DeprecationDetails;
  }
  export interface InsightResourceDetail {
    /**
     * An object containing more detail on the status of the insight resource.
     */
    insightStatus?: InsightStatus;
    /**
     * The Kubernetes resource URI if applicable.
     */
    kubernetesResourceUri?: String;
    /**
     * The Amazon Resource Name (ARN) if applicable.
     */
    arn?: String;
  }
  export type InsightResourceDetails = InsightResourceDetail[];
  export interface InsightStatus {
    /**
     * The status of the resource.
     */
    status?: InsightStatusValue;
    /**
     * Explanation on the reasoning for the status of the resource. 
     */
    reason?: String;
  }
  export type InsightStatusValue = "PASSING"|"WARNING"|"ERROR"|"UNKNOWN"|string;
  export type InsightStatusValueList = InsightStatusValue[];
  export type InsightSummaries = InsightSummary[];
  export interface InsightSummary {
    /**
     * The ID of the insight.
     */
    id?: String;
    /**
     * The name of the insight.
     */
    name?: String;
    /**
     * The category of the insight.
     */
    category?: Category;
    /**
     * The Kubernetes minor version associated with an insight if applicable. 
     */
    kubernetesVersion?: String;
    /**
     * The time Amazon EKS last successfully completed a refresh of this insight check on the cluster.
     */
    lastRefreshTime?: Timestamp;
    /**
     * The time the status of the insight last changed.
     */
    lastTransitionTime?: Timestamp;
    /**
     * The description of the insight which includes alert criteria, remediation recommendation, and additional resources (contains Markdown).
     */
    description?: String;
    /**
     * An object containing more detail on the status of the insight.
     */
    insightStatus?: InsightStatus;
  }
  export interface InsightsFilter {
    /**
     * The categories to use to filter insights.
     */
    categories?: CategoryList;
    /**
     * The Kubernetes versions to use to filter the insights.
     */
    kubernetesVersions?: StringList;
    /**
     * The statuses to use to filter the insights. 
     */
    statuses?: InsightStatusValueList;
  }
  export type Integer = number;
  export type IpFamily = "ipv4"|"ipv6"|string;
  export interface Issue {
    /**
     * A brief description of the error.    AccessDenied: Amazon EKS or one or more of your managed nodes is failing to authenticate or authorize with your Kubernetes cluster API server.    AsgInstanceLaunchFailures: Your Auto Scaling group is experiencing failures while attempting to launch instances.    AutoScalingGroupNotFound: We couldn't find the Auto Scaling group associated with the managed node group. You may be able to recreate an Auto Scaling group with the same settings to recover.    ClusterUnreachable: Amazon EKS or one or more of your managed nodes is unable to to communicate with your Kubernetes cluster API server. This can happen if there are network disruptions or if API servers are timing out processing requests.     Ec2LaunchTemplateNotFound: We couldn't find the Amazon EC2 launch template for your managed node group. You may be able to recreate a launch template with the same settings to recover.    Ec2LaunchTemplateVersionMismatch: The Amazon EC2 launch template version for your managed node group does not match the version that Amazon EKS created. You may be able to revert to the version that Amazon EKS created to recover.    Ec2SecurityGroupDeletionFailure: We could not delete the remote access security group for your managed node group. Remove any dependencies from the security group.    Ec2SecurityGroupNotFound: We couldn't find the cluster security group for the cluster. You must recreate your cluster.    Ec2SubnetInvalidConfiguration: One or more Amazon EC2 subnets specified for a node group do not automatically assign public IP addresses to instances launched into it. If you want your instances to be assigned a public IP address, then you need to enable the auto-assign public IP address setting for the subnet. See Modifying the public IPv4 addressing attribute for your subnet in the Amazon VPC User Guide.    IamInstanceProfileNotFound: We couldn't find the IAM instance profile for your managed node group. You may be able to recreate an instance profile with the same settings to recover.    IamNodeRoleNotFound: We couldn't find the IAM role for your managed node group. You may be able to recreate an IAM role with the same settings to recover.    InstanceLimitExceeded: Your Amazon Web Services account is unable to launch any more instances of the specified instance type. You may be able to request an Amazon EC2 instance limit increase to recover.    InsufficientFreeAddresses: One or more of the subnets associated with your managed node group does not have enough available IP addresses for new nodes.    InternalFailure: These errors are usually caused by an Amazon EKS server-side issue.    NodeCreationFailure: Your launched instances are unable to register with your Amazon EKS cluster. Common causes of this failure are insufficient node IAM role permissions or lack of outbound internet access for the nodes.   
     */
    code?: NodegroupIssueCode;
    /**
     * The error message associated with the issue.
     */
    message?: String;
    /**
     * The Amazon Web Services resources that are afflicted by this issue.
     */
    resourceIds?: StringList;
  }
  export type IssueList = Issue[];
  export interface KubernetesNetworkConfigRequest {
    /**
     * Don't specify a value if you select ipv6 for ipFamily. The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. The block must meet the following requirements:   Within one of the following private IP address blocks: 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16.   Doesn't overlap with any CIDR block assigned to the VPC that you selected for VPC.   Between /24 and /12.    You can only specify a custom CIDR block when you create a cluster. You can't change this value after the cluster is created. 
     */
    serviceIpv4Cidr?: String;
    /**
     * Specify which IP family is used to assign Kubernetes pod and service IP addresses. If you don't specify a value, ipv4 is used by default. You can only specify an IP family when you create a cluster and can't change this value once the cluster is created. If you specify ipv6, the VPC and subnets that you specify for cluster creation must have both IPv4 and IPv6 CIDR blocks assigned to them. You can't specify ipv6 for clusters in China Regions. You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on. If you specify ipv6, then ensure that your VPC meets the requirements listed in the considerations listed in Assigning IPv6 addresses to pods and services in the Amazon EKS User Guide. Kubernetes assigns services IPv6 addresses from the unique local address range (fc00::/7). You can't specify a custom IPv6 CIDR block. Pod addresses are assigned from the subnet's IPv6 CIDR.
     */
    ipFamily?: IpFamily;
  }
  export interface KubernetesNetworkConfigResponse {
    /**
     * The CIDR block that Kubernetes Pod and Service object IP addresses are assigned from. Kubernetes assigns addresses from an IPv4 CIDR block assigned to a subnet that the node is in. If you didn't specify a CIDR block when you created the cluster, then Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. If this was specified, then it was specified when the cluster was created and it can't be changed.
     */
    serviceIpv4Cidr?: String;
    /**
     * The CIDR block that Kubernetes pod and service IP addresses are assigned from if you created a 1.21 or later cluster with version 1.10.1 or later of the Amazon VPC CNI add-on and specified ipv6 for ipFamily when you created the cluster. Kubernetes assigns service addresses from the unique local address range (fc00::/7) because you can't specify a custom IPv6 CIDR block when you create the cluster.
     */
    serviceIpv6Cidr?: String;
    /**
     * The IP family used to assign Kubernetes Pod and Service objects IP addresses. The IP family is always ipv4, unless you have a 1.21 or later cluster running version 1.10.1 or later of the Amazon VPC CNI plugin for Kubernetes and specified ipv6 when you created the cluster. 
     */
    ipFamily?: IpFamily;
  }
  export interface LaunchTemplateSpecification {
    /**
     * The name of the launch template. You must specify either the launch template name or the launch template ID in the request, but not both.
     */
    name?: String;
    /**
     * The version number of the launch template to use. If no version is specified, then the template's default version is used.
     */
    version?: String;
    /**
     * The ID of the launch template. You must specify either the launch template ID or the launch template name in the request, but not both.
     */
    id?: String;
  }
  export interface ListAccessEntriesRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The ARN of an AccessPolicy. When you specify an access policy ARN, only the access entries associated to that access policy are returned. For a list of available policy ARNs, use ListAccessPolicies.
     */
    associatedPolicyArn?: String;
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: ListAccessEntriesRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListAccessEntriesRequestMaxResults = number;
  export interface ListAccessEntriesResponse {
    /**
     * The list of access entries that exist for the cluster.
     */
    accessEntries?: StringList;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListAccessPoliciesRequest {
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: ListAccessPoliciesRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListAccessPoliciesRequestMaxResults = number;
  export interface ListAccessPoliciesResponse {
    /**
     * The list of available access policies. You can't view the contents of an access policy using the API. To view the contents, see Access policy permissions in the Amazon EKS User Guide.
     */
    accessPolicies?: AccessPoliciesList;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListAddonsRequest {
    /**
     * The name of your cluster.
     */
    clusterName: ClusterName;
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: ListAddonsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListAddonsRequestMaxResults = number;
  export interface ListAddonsResponse {
    /**
     * A list of installed add-ons.
     */
    addons?: StringList;
    /**
     * The nextToken value to include in a future ListAddons request. When the results of a ListAddons request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListAssociatedAccessPoliciesRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The ARN of the IAM principal for the AccessEntry.
     */
    principalArn: String;
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: ListAssociatedAccessPoliciesRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListAssociatedAccessPoliciesRequestMaxResults = number;
  export interface ListAssociatedAccessPoliciesResponse {
    /**
     * The name of your cluster.
     */
    clusterName?: String;
    /**
     * The ARN of the IAM principal for the AccessEntry.
     */
    principalArn?: String;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The list of access policies associated with the access entry.
     */
    associatedAccessPolicies?: AssociatedAccessPoliciesList;
  }
  export interface ListClustersRequest {
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: ListClustersRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * Indicates whether external clusters are included in the returned list. Use 'all' to return https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.htmlconnected clusters, or blank to return only Amazon EKS clusters. 'all' must be in lowercase otherwise an error occurs.
     */
    include?: IncludeClustersList;
  }
  export type ListClustersRequestMaxResults = number;
  export interface ListClustersResponse {
    /**
     * A list of all of the clusters for your account in the specified Amazon Web Services Region.
     */
    clusters?: StringList;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListEksAnywhereSubscriptionsRequest {
    /**
     * The maximum number of cluster results returned by ListEksAnywhereSubscriptions in paginated output. When you use this parameter, ListEksAnywhereSubscriptions returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListEksAnywhereSubscriptions request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListEksAnywhereSubscriptions returns up to 10 results and a nextToken value if applicable.
     */
    maxResults?: ListEksAnywhereSubscriptionsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListEksAnywhereSubscriptions request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
    /**
     * An array of subscription statuses to filter on.
     */
    includeStatus?: EksAnywhereSubscriptionStatusValues;
  }
  export type ListEksAnywhereSubscriptionsRequestMaxResults = number;
  export interface ListEksAnywhereSubscriptionsResponse {
    /**
     * A list of all subscription objects in the region, filtered by includeStatus and paginated by nextToken and maxResults.
     */
    subscriptions?: EksAnywhereSubscriptionList;
    /**
     * The nextToken value to include in a future ListEksAnywhereSubscriptions request. When the results of a ListEksAnywhereSubscriptions request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListFargateProfilesRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: FargateProfilesRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListFargateProfilesResponse {
    /**
     * A list of all of the Fargate profiles associated with the specified cluster.
     */
    fargateProfileNames?: StringList;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListIdentityProviderConfigsRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: ListIdentityProviderConfigsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListIdentityProviderConfigsRequestMaxResults = number;
  export interface ListIdentityProviderConfigsResponse {
    /**
     * The identity provider configurations for the cluster.
     */
    identityProviderConfigs?: IdentityProviderConfigs;
    /**
     * The nextToken value to include in a future ListIdentityProviderConfigsResponse request. When the results of a ListIdentityProviderConfigsResponse request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListInsightsMaxResults = number;
  export interface ListInsightsRequest {
    /**
     * The name of the Amazon EKS cluster associated with the insights.
     */
    clusterName: String;
    /**
     * The criteria to filter your list of insights for your cluster. You can filter which insights are returned by category, associated Kubernetes version, and status.
     */
    filter?: InsightsFilter;
    /**
     * The maximum number of identity provider configurations returned by ListInsights in paginated output. When you use this parameter, ListInsights returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListInsights request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListInsights returns up to 100 results and a nextToken value, if applicable.
     */
    maxResults?: ListInsightsMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListInsights request. When the results of a ListInsights request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListInsightsResponse {
    /**
     * The returned list of insights.
     */
    insights?: InsightSummaries;
    /**
     * The nextToken value to include in a future ListInsights request. When the results of a ListInsights request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListNodegroupsRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
     */
    maxResults?: ListNodegroupsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
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
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListPodIdentityAssociationsMaxResults = number;
  export interface ListPodIdentityAssociationsRequest {
    /**
     * The name of the cluster that the associations are in.
     */
    clusterName: String;
    /**
     * The name of the Kubernetes namespace inside the cluster that the associations are in.
     */
    namespace?: String;
    /**
     * The name of the Kubernetes service account that the associations use.
     */
    serviceAccount?: String;
    /**
     * The maximum number of EKS Pod Identity association results returned by ListPodIdentityAssociations in paginated output. When you use this parameter, ListPodIdentityAssociations returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListPodIdentityAssociations request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListPodIdentityAssociations returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: ListPodIdentityAssociationsMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListUpdates request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListPodIdentityAssociationsResponse {
    /**
     * The list of summarized descriptions of the associations that are in the cluster and match any filters that you provided. Each summary is simplified by removing these fields compared to the full  PodIdentityAssociation :   The IAM role: roleArn    The timestamp that the association was created at: createdAt    The most recent timestamp that the association was modified at:. modifiedAt    The tags on the association: tags   
     */
    associations?: PodIdentityAssociationSummaries;
    /**
     * The nextToken value to include in a future ListPodIdentityAssociations request. When the results of a ListPodIdentityAssociations request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the resource to list tags for.
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
     * The names of the installed add-ons that have available updates.
     */
    addonName?: String;
    /**
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.
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
     * The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
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
  export interface MarketplaceInformation {
    /**
     * The product ID from the Amazon Web Services Marketplace.
     */
    productId?: String;
    /**
     * The product URL from the Amazon Web Services Marketplace.
     */
    productUrl?: String;
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
     * The name of your cluster.
     */
    clusterName?: String;
    /**
     * The Kubernetes version of the managed node group.
     */
    version?: String;
    /**
     * If the node group was deployed using a launch template with a custom AMI, then this is the AMI ID that was specified in the launch template. For node groups that weren't deployed using a launch template, this is the version of the Amazon EKS optimized AMI that the node group was deployed with.
     */
    releaseVersion?: String;
    /**
     * The Unix epoch timestamp at object creation.
     */
    createdAt?: Timestamp;
    /**
     * The Unix epoch timestamp for the last modification to the object.
     */
    modifiedAt?: Timestamp;
    /**
     * The current status of the managed node group.
     */
    status?: NodegroupStatus;
    /**
     * The capacity type of your managed node group.
     */
    capacityType?: CapacityTypes;
    /**
     * The scaling configuration details for the Auto Scaling group that is associated with your node group.
     */
    scalingConfig?: NodegroupScalingConfig;
    /**
     * If the node group wasn't deployed with a launch template, then this is the instance type that is associated with the node group. If the node group was deployed with a launch template, then this is null.
     */
    instanceTypes?: StringList;
    /**
     * The subnets that were specified for the Auto Scaling group that is associated with your node group.
     */
    subnets?: StringList;
    /**
     * If the node group wasn't deployed with a launch template, then this is the remote access configuration that is associated with the node group. If the node group was deployed with a launch template, then this is null.
     */
    remoteAccess?: RemoteAccessConfig;
    /**
     * If the node group was deployed using a launch template with a custom AMI, then this is CUSTOM. For node groups that weren't deployed using a launch template, this is the AMI type that was specified in the node group configuration.
     */
    amiType?: AMITypes;
    /**
     * The IAM role associated with your node group. The Amazon EKS node kubelet daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies.
     */
    nodeRole?: String;
    /**
     * The Kubernetes labels applied to the nodes in the node group.  Only labels that are applied with the Amazon EKS API are shown here. There may be other Kubernetes labels applied to the nodes in this group. 
     */
    labels?: labelsMap;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group when they are created. Effect is one of No_Schedule, Prefer_No_Schedule, or No_Execute. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. For more information, see Node taints on managed node groups.
     */
    taints?: taintsList;
    /**
     * The resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
     */
    resources?: NodegroupResources;
    /**
     * If the node group wasn't deployed with a launch template, then this is the disk size in the node group configuration. If the node group was deployed with a launch template, then this is null.
     */
    diskSize?: BoxedInteger;
    /**
     * The health status of the node group. If there are issues with your node group's health, they are listed here.
     */
    health?: NodegroupHealth;
    /**
     * The node group update configuration.
     */
    updateConfig?: NodegroupUpdateConfig;
    /**
     * If a launch template was used to create the node group, then this is the launch template that was used.
     */
    launchTemplate?: LaunchTemplateSpecification;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
  }
  export interface NodegroupHealth {
    /**
     * Any issues that are associated with the node group. 
     */
    issues?: IssueList;
  }
  export type NodegroupIssueCode = "AutoScalingGroupNotFound"|"AutoScalingGroupInvalidConfiguration"|"Ec2SecurityGroupNotFound"|"Ec2SecurityGroupDeletionFailure"|"Ec2LaunchTemplateNotFound"|"Ec2LaunchTemplateVersionMismatch"|"Ec2SubnetNotFound"|"Ec2SubnetInvalidConfiguration"|"IamInstanceProfileNotFound"|"Ec2SubnetMissingIpv6Assignment"|"IamLimitExceeded"|"IamNodeRoleNotFound"|"NodeCreationFailure"|"AsgInstanceLaunchFailures"|"InstanceLimitExceeded"|"InsufficientFreeAddresses"|"AccessDenied"|"InternalFailure"|"ClusterUnreachable"|"AmiIdNotFound"|"AutoScalingGroupOptInRequired"|"AutoScalingGroupRateLimitExceeded"|"Ec2LaunchTemplateDeletionFailure"|"Ec2LaunchTemplateInvalidConfiguration"|"Ec2LaunchTemplateMaxLimitExceeded"|"Ec2SubnetListTooLong"|"IamThrottling"|"NodeTerminationFailure"|"PodEvictionFailure"|"SourceEc2LaunchTemplateNotFound"|"LimitExceeded"|"Unknown"|"AutoScalingGroupInstanceRefreshActive"|"KubernetesLabelInvalid"|"Ec2LaunchTemplateVersionMaxLimitExceeded"|string;
  export interface NodegroupResources {
    /**
     * The Auto Scaling groups associated with the node group.
     */
    autoScalingGroups?: AutoScalingGroupList;
    /**
     * The remote access security group associated with the node group. This security group controls SSH access to the nodes.
     */
    remoteAccessSecurityGroup?: String;
  }
  export interface NodegroupScalingConfig {
    /**
     * The minimum number of nodes that the managed node group can scale in to.
     */
    minSize?: ZeroCapacity;
    /**
     * The maximum number of nodes that the managed node group can scale out to. For information about the maximum number that you can specify, see Amazon EKS service quotas in the Amazon EKS User Guide.
     */
    maxSize?: Capacity;
    /**
     * The current number of nodes that the managed node group should maintain.  If you use the Kubernetes Cluster Autoscaler, you shouldn't change the desiredSize value directly, as this can cause the Cluster Autoscaler to suddenly scale up or scale down.  Whenever this parameter changes, the number of worker nodes in the node group is updated to the specified size. If this parameter is given a value that is smaller than the current number of running worker nodes, the necessary number of worker nodes are terminated to match the given value. When using CloudFormation, no action occurs if you remove this parameter from your CFN template. This parameter can be different from minSize in some cases, such as when starting with extra hosts for testing. This parameter can also be different when you want to start with an estimated number of needed hosts, but let the Cluster Autoscaler reduce the number if there are too many. When the Cluster Autoscaler is used, the desiredSize parameter is altered by the Cluster Autoscaler (but can be out-of-date for short periods of time). the Cluster Autoscaler doesn't scale a managed node group lower than minSize or higher than maxSize.
     */
    desiredSize?: ZeroCapacity;
  }
  export type NodegroupStatus = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|"DEGRADED"|string;
  export interface NodegroupUpdateConfig {
    /**
     * The maximum number of nodes unavailable at once during a version update. Nodes are updated in parallel. This value or maxUnavailablePercentage is required to have a value.The maximum number is 100.
     */
    maxUnavailable?: NonZeroInteger;
    /**
     * The maximum percentage of nodes unavailable during a version update. This percentage of nodes are updated in parallel, up to 100 nodes at once. This value or maxUnavailable is required to have a value.
     */
    maxUnavailablePercentage?: PercentCapacity;
  }
  export type NonZeroInteger = number;
  export interface OIDC {
    /**
     * The issuer URL for the OIDC identity provider.
     */
    issuer?: String;
  }
  export interface OidcIdentityProviderConfig {
    /**
     * The name of the configuration.
     */
    identityProviderConfigName?: String;
    /**
     * The ARN of the configuration.
     */
    identityProviderConfigArn?: String;
    /**
     * The name of your cluster.
     */
    clusterName?: String;
    /**
     * The URL of the OIDC identity provider that allows the API server to discover public signing keys for verifying tokens.
     */
    issuerUrl?: String;
    /**
     * This is also known as audience. The ID of the client application that makes authentication requests to the OIDC identity provider.
     */
    clientId?: String;
    /**
     * The JSON Web token (JWT) claim that is used as the username.
     */
    usernameClaim?: String;
    /**
     * The prefix that is prepended to username claims to prevent clashes with existing names. The prefix can't contain system: 
     */
    usernamePrefix?: String;
    /**
     * The JSON web token (JWT) claim that the provider uses to return your groups.
     */
    groupsClaim?: String;
    /**
     * The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: creates group names like oidc:engineering and oidc:infra. The prefix can't contain system: 
     */
    groupsPrefix?: String;
    /**
     * The key-value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value.
     */
    requiredClaims?: requiredClaimsMap;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
    /**
     * The status of the OIDC identity provider.
     */
    status?: configStatus;
  }
  export interface OidcIdentityProviderConfigRequest {
    /**
     * The name of the OIDC provider configuration.
     */
    identityProviderConfigName: String;
    /**
     * The URL of the OIDC identity provider that allows the API server to discover public signing keys for verifying tokens. The URL must begin with https:// and should correspond to the iss claim in the provider's OIDC ID tokens. Based on the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like https://server.example.org or https://example.com. This URL should point to the level below .well-known/openid-configuration and must be publicly accessible over the internet.
     */
    issuerUrl: String;
    /**
     * This is also known as audience. The ID for the client application that makes authentication requests to the OIDC identity provider.
     */
    clientId: String;
    /**
     * The JSON Web Token (JWT) claim to use as the username. The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OIDC identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.
     */
    usernameClaim?: String;
    /**
     * The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.
     */
    usernamePrefix?: String;
    /**
     * The JWT claim that the provider uses to return your groups.
     */
    groupsClaim?: String;
    /**
     * The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra.
     */
    groupsPrefix?: String;
    /**
     * The key value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value. For the maximum number of claims that you can require, see Amazon EKS service quotas in the Amazon EKS User Guide.
     */
    requiredClaims?: requiredClaimsMap;
  }
  export interface OutpostConfigRequest {
    /**
     * The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. Only a single Outpost ARN is supported.
     */
    outpostArns: StringList;
    /**
     * The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. Choose an instance type based on the number of nodes that your cluster will have. For more information, see Capacity considerations in the Amazon EKS User Guide. The instance type that you specify is used for all Kubernetes control plane instances. The instance type can't be changed after cluster creation. The control plane is not automatically scaled by Amazon EKS.  
     */
    controlPlaneInstanceType: String;
    /**
     * An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see Capacity considerations in the Amazon EKS User Guide.
     */
    controlPlanePlacement?: ControlPlanePlacementRequest;
  }
  export interface OutpostConfigResponse {
    /**
     * The ARN of the Outpost that you specified for use with your local Amazon EKS cluster on Outposts.
     */
    outpostArns: StringList;
    /**
     * The Amazon EC2 instance type used for the control plane. The instance type is the same for all control plane instances.
     */
    controlPlaneInstanceType: String;
    /**
     * An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see Capacity considerations in the Amazon EKS User Guide.
     */
    controlPlanePlacement?: ControlPlanePlacementResponse;
  }
  export type PercentCapacity = number;
  export interface PodIdentityAssociation {
    /**
     * The name of the cluster that the association is in.
     */
    clusterName?: String;
    /**
     * The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the pods that use the service account must be in this namespace.
     */
    namespace?: String;
    /**
     * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
     */
    serviceAccount?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account.
     */
    roleArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the association.
     */
    associationArn?: String;
    /**
     * The ID of the association.
     */
    associationId?: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources. The following basic restrictions apply to tags:   Maximum number of tags per resource – 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length – 128 Unicode characters in UTF-8   Maximum value length – 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: TagMap;
    /**
     * The timestamp that the association was created at.
     */
    createdAt?: Timestamp;
    /**
     * The most recent timestamp that the association was modified at
     */
    modifiedAt?: Timestamp;
    /**
     * If defined, the Pod Identity Association is owned by an Amazon EKS Addon.
     */
    ownerArn?: String;
  }
  export type PodIdentityAssociationSummaries = PodIdentityAssociationSummary[];
  export interface PodIdentityAssociationSummary {
    /**
     * The name of the cluster that the association is in.
     */
    clusterName?: String;
    /**
     * The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the pods that use the service account must be in this namespace.
     */
    namespace?: String;
    /**
     * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
     */
    serviceAccount?: String;
    /**
     * The Amazon Resource Name (ARN) of the association.
     */
    associationArn?: String;
    /**
     * The ID of the association.
     */
    associationId?: String;
    /**
     * If defined, the Pod Identity Association is owned by an Amazon EKS Addon.
     */
    ownerArn?: String;
  }
  export interface Provider {
    /**
     * Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric and created in the same Amazon Web Services Region as the cluster. If the KMS key was created in a different account, the IAM principal must have access to the KMS key. For more information, see Allowing users in other accounts to use a KMS key in the Key Management Service Developer Guide.
     */
    keyArn?: String;
  }
  export interface RegisterClusterRequest {
    /**
     * A unique name for this cluster in your Amazon Web Services Region.
     */
    name: ClusterName;
    /**
     * The configuration settings required to connect the Kubernetes cluster to the Amazon EKS control plane.
     */
    connectorConfig: ConnectorConfigRequest;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags?: TagMap;
  }
  export interface RegisterClusterResponse {
    cluster?: Cluster;
  }
  export interface RemoteAccessConfig {
    /**
     * The Amazon EC2 SSH key name that provides access for SSH communication with the nodes in the managed node group. For more information, see Amazon EC2 key pairs and Linux instances in the Amazon Elastic Compute Cloud User Guide for Linux Instances. For Windows, an Amazon EC2 SSH key is used to obtain the RDP password. For more information, see Amazon EC2 key pairs and Windows instances in the Amazon Elastic Compute Cloud User Guide for Windows Instances.
     */
    ec2SshKey?: String;
    /**
     * The security group IDs that are allowed SSH access (port 22) to the nodes. For Windows, the port is 3389. If you specify an Amazon EC2 SSH key but don't specify a source security group when you create a managed node group, then the port on the nodes is opened to the internet (0.0.0.0/0). For more information, see Security Groups for Your VPC in the Amazon Virtual Private Cloud User Guide.
     */
    sourceSecurityGroups?: StringList;
  }
  export type ResolveConflicts = "OVERWRITE"|"NONE"|"PRESERVE"|string;
  export type RoleArn = string;
  export type String = string;
  export type StringList = String[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to add tags to.
     */
    resourceArn: String;
    /**
     * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface Taint {
    /**
     * The key of the taint.
     */
    key?: taintKey;
    /**
     * The value of the taint.
     */
    value?: taintValue;
    /**
     * The effect of the taint.
     */
    effect?: TaintEffect;
  }
  export type TaintEffect = "NO_SCHEDULE"|"NO_EXECUTE"|"PREFER_NO_SCHEDULE"|string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to delete tags from.
     */
    resourceArn: String;
    /**
     * The keys of the tags to remove.
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
     * The Unix epoch timestamp at object creation.
     */
    createdAt?: Timestamp;
    /**
     * Any errors associated with a Failed update.
     */
    errors?: ErrorDetails;
  }
  export interface UpdateAccessConfigRequest {
    /**
     * The desired authentication mode for the cluster.
     */
    authenticationMode?: AuthenticationMode;
  }
  export interface UpdateAccessEntryRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The ARN of the IAM principal for the AccessEntry.
     */
    principalArn: String;
    /**
     * The value for name that you've specified for kind: Group as a subject in a Kubernetes RoleBinding or ClusterRoleBinding object. Amazon EKS doesn't confirm that the value for name exists in any bindings on your cluster. You can specify one or more names. Kubernetes authorizes the principalArn of the access entry to access any cluster objects that you've specified in a Kubernetes Role or ClusterRole object that is also specified in a binding's roleRef. For more information about creating Kubernetes RoleBinding, ClusterRoleBinding, Role, or ClusterRole objects, see Using RBAC Authorization in the Kubernetes documentation. If you want Amazon EKS to authorize the principalArn (instead of, or in addition to Kubernetes authorizing the principalArn), you can associate one or more access policies to the access entry using AssociateAccessPolicy. If you associate any access policies, the principalARN has all permissions assigned in the associated access policies and all permissions in any Kubernetes Role or ClusterRole objects that the group names are bound to.
     */
    kubernetesGroups?: StringList;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The username to authenticate to Kubernetes with. We recommend not specifying a username and letting Amazon EKS specify it for you. For more information about the value Amazon EKS specifies for you, or constraints before specifying your own username, see Creating access entries in the Amazon EKS User Guide.
     */
    username?: String;
  }
  export interface UpdateAccessEntryResponse {
    /**
     * The ARN of the IAM principal for the AccessEntry.
     */
    accessEntry?: AccessEntry;
  }
  export interface UpdateAddonRequest {
    /**
     * The name of your cluster.
     */
    clusterName: ClusterName;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName: String;
    /**
     * The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions .
     */
    addonVersion?: String;
    /**
     * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.  To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide. 
     */
    serviceAccountRoleArn?: RoleArn;
    /**
     * How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Conflicts are handled based on the option you choose:    None – Amazon EKS doesn't change the value. The update might fail.    Overwrite – Amazon EKS overwrites the changed value back to the Amazon EKS default value.    Preserve – Amazon EKS preserves the value. If you choose this option, we recommend that you test any field and value changes on a non-production cluster before updating the add-on on your production cluster.  
     */
    resolveConflicts?: ResolveConflicts;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The set of configuration values for the add-on that's created. The values that you provide are validated against the schema returned by DescribeAddonConfiguration.
     */
    configurationValues?: String;
    /**
     * An array of Pod Identity Assocations to be updated. Each EKS Pod Identity association maps a Kubernetes service account to an IAM Role. If this value is left blank, no change. If an empty array is provided, existing Pod Identity Assocations owned by the Addon are deleted. For more information, see Attach an IAM Role to an Amazon EKS add-on using Pod Identity in the EKS User Guide.
     */
    podIdentityAssociations?: AddonPodIdentityAssociationsList;
  }
  export interface UpdateAddonResponse {
    update?: Update;
  }
  export interface UpdateClusterConfigRequest {
    /**
     * The name of the Amazon EKS cluster to update.
     */
    name: String;
    resourcesVpcConfig?: VpcConfigRequest;
    /**
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS cluster control plane logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing. 
     */
    logging?: Logging;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The access configuration for the cluster.
     */
    accessConfig?: UpdateAccessConfigRequest;
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
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateClusterVersionResponse {
    /**
     * The full description of the specified update
     */
    update?: Update;
  }
  export interface UpdateEksAnywhereSubscriptionRequest {
    /**
     * The ID of the subscription.
     */
    id: String;
    /**
     * A boolean indicating whether or not to automatically renew the subscription.
     */
    autoRenew: Boolean;
    /**
     * Unique, case-sensitive identifier to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateEksAnywhereSubscriptionResponse {
    /**
     * The full description of the updated subscription.
     */
    subscription?: EksAnywhereSubscription;
  }
  export interface UpdateLabelsPayload {
    /**
     * The Kubernetes labels to add or update.
     */
    addOrUpdateLabels?: labelsMap;
    /**
     * The Kubernetes labels to remove.
     */
    removeLabels?: labelsKeyList;
  }
  export interface UpdateNodegroupConfigRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The name of the managed node group to update.
     */
    nodegroupName: String;
    /**
     * The Kubernetes labels to apply to the nodes in the node group after the update.
     */
    labels?: UpdateLabelsPayload;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group after the update. For more information, see Node taints on managed node groups.
     */
    taints?: UpdateTaintsPayload;
    /**
     * The scaling configuration details for the Auto Scaling group after the update.
     */
    scalingConfig?: NodegroupScalingConfig;
    /**
     * The node group update configuration.
     */
    updateConfig?: NodegroupUpdateConfig;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateNodegroupConfigResponse {
    update?: Update;
  }
  export interface UpdateNodegroupVersionRequest {
    /**
     * The name of your cluster.
     */
    clusterName: String;
    /**
     * The name of the managed node group to update.
     */
    nodegroupName: String;
    /**
     * The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group update will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    version?: String;
    /**
     * The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group update will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide.
     */
    releaseVersion?: String;
    /**
     * An object representing a node group's launch template specification. You can only update a node group using a launch template if the node group was originally deployed with a launch template.
     */
    launchTemplate?: LaunchTemplateSpecification;
    /**
     * Force the update if any Pod on the existing node group can't be drained due to a Pod disruption budget issue. If an update fails because all Pods can't be drained, you can force the update after it fails to terminate the old node whether or not any Pod is running on the node.
     */
    force?: Boolean;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
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
  export type UpdateParamType = "Version"|"PlatformVersion"|"EndpointPrivateAccess"|"EndpointPublicAccess"|"ClusterLogging"|"DesiredSize"|"LabelsToAdd"|"LabelsToRemove"|"TaintsToAdd"|"TaintsToRemove"|"MaxSize"|"MinSize"|"ReleaseVersion"|"PublicAccessCidrs"|"LaunchTemplateName"|"LaunchTemplateVersion"|"IdentityProviderConfig"|"EncryptionConfig"|"AddonVersion"|"ServiceAccountRoleArn"|"ResolveConflicts"|"MaxUnavailable"|"MaxUnavailablePercentage"|"ConfigurationValues"|"SecurityGroups"|"Subnets"|"AuthenticationMode"|"PodIdentityAssociations"|string;
  export type UpdateParams = UpdateParam[];
  export interface UpdatePodIdentityAssociationRequest {
    /**
     * The name of the cluster that you want to update the association in.
     */
    clusterName: String;
    /**
     * The ID of the association to be updated.
     */
    associationId: String;
    /**
     * The new IAM role to change the 
     */
    roleArn?: String;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdatePodIdentityAssociationResponse {
    /**
     * The full description of the EKS Pod Identity association that was updated.
     */
    association?: PodIdentityAssociation;
  }
  export type UpdateStatus = "InProgress"|"Failed"|"Cancelled"|"Successful"|string;
  export interface UpdateTaintsPayload {
    /**
     * Kubernetes taints to be added or updated.
     */
    addOrUpdateTaints?: taintsList;
    /**
     * Kubernetes taints to remove.
     */
    removeTaints?: taintsList;
  }
  export type UpdateType = "VersionUpdate"|"EndpointAccessUpdate"|"LoggingUpdate"|"ConfigUpdate"|"AssociateIdentityProviderConfig"|"DisassociateIdentityProviderConfig"|"AssociateEncryptionConfig"|"AddonUpdate"|"VpcConfigUpdate"|"AccessConfigUpdate"|string;
  export interface VpcConfigRequest {
    /**
     * Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
     */
    subnetIds?: StringList;
    /**
     * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use that allow communication between your nodes and the Kubernetes control plane. If you don't specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes. For more information, see Amazon EKS security group considerations in the  Amazon EKS User Guide .
     */
    securityGroupIds?: StringList;
    /**
     * Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server. For more information, see Amazon EKS cluster endpoint access control in the  Amazon EKS User Guide .
     */
    endpointPublicAccess?: BoxedBoolean;
    /**
     * Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see Amazon EKS cluster endpoint access control in the  Amazon EKS User Guide .
     */
    endpointPrivateAccess?: BoxedBoolean;
    /**
     * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access, make sure that you specify the necessary CIDR blocks for every node and Fargate Pod in the cluster. For more information, see Amazon EKS cluster endpoint access control in the  Amazon EKS User Guide .
     */
    publicAccessCidrs?: StringList;
  }
  export interface VpcConfigResponse {
    /**
     * The subnets associated with your cluster.
     */
    subnetIds?: StringList;
    /**
     * The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Kubernetes control plane.
     */
    securityGroupIds?: StringList;
    /**
     * The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control-plane-to-data-plane communication.
     */
    clusterSecurityGroupId?: String;
    /**
     * The VPC associated with your cluster.
     */
    vpcId?: String;
    /**
     * Whether the public API server endpoint is enabled.
     */
    endpointPublicAccess?: Boolean;
    /**
     * This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster's VPC use the private VPC endpoint instead of traversing the internet. If this value is disabled and you have nodes or Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see Amazon EKS cluster endpoint access control in the  Amazon EKS User Guide .
     */
    endpointPrivateAccess?: Boolean;
    /**
     * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint.
     */
    publicAccessCidrs?: StringList;
  }
  export type ZeroCapacity = number;
  export type configStatus = "CREATING"|"DELETING"|"ACTIVE"|string;
  export type labelKey = string;
  export type labelValue = string;
  export type labelsKeyList = String[];
  export type labelsMap = {[key: string]: labelValue};
  export type requiredClaimsKey = string;
  export type requiredClaimsMap = {[key: string]: requiredClaimsValue};
  export type requiredClaimsValue = string;
  export type taintKey = string;
  export type taintValue = string;
  export type taintsList = Taint[];
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
