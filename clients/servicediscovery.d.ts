import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ServiceDiscovery extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ServiceDiscovery.Types.ClientConfiguration)
  config: Config & ServiceDiscovery.Types.ClientConfiguration;
  /**
   * Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace example.com and name your service backend, the resulting DNS name for the service will be backend.example.com. You can associate more than one service with the same namespace.
   */
  createPrivateDnsNamespace(params: ServiceDiscovery.Types.CreatePrivateDnsNamespaceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.CreatePrivateDnsNamespaceResponse) => void): Request<ServiceDiscovery.Types.CreatePrivateDnsNamespaceResponse, AWSError>;
  /**
   * Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace example.com and name your service backend, the resulting DNS name for the service will be backend.example.com. You can associate more than one service with the same namespace.
   */
  createPrivateDnsNamespace(callback?: (err: AWSError, data: ServiceDiscovery.Types.CreatePrivateDnsNamespaceResponse) => void): Request<ServiceDiscovery.Types.CreatePrivateDnsNamespaceResponse, AWSError>;
  /**
   * Creates a public namespace based on DNS, which will be visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace example.com and name your service backend, the resulting DNS name for the service will be backend.example.com. You can associate more than one service with the same namespace.
   */
  createPublicDnsNamespace(params: ServiceDiscovery.Types.CreatePublicDnsNamespaceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.CreatePublicDnsNamespaceResponse) => void): Request<ServiceDiscovery.Types.CreatePublicDnsNamespaceResponse, AWSError>;
  /**
   * Creates a public namespace based on DNS, which will be visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace example.com and name your service backend, the resulting DNS name for the service will be backend.example.com. You can associate more than one service with the same namespace.
   */
  createPublicDnsNamespace(callback?: (err: AWSError, data: ServiceDiscovery.Types.CreatePublicDnsNamespaceResponse) => void): Request<ServiceDiscovery.Types.CreatePublicDnsNamespaceResponse, AWSError>;
  /**
   * Creates a service, which defines a template for the following entities:   One to five resource record sets   Optionally, a health check   After you create the service, you can submit a RegisterInstance request, and Amazon Route 53 uses the values in the template to create the specified entities. 
   */
  createService(params: ServiceDiscovery.Types.CreateServiceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.CreateServiceResponse) => void): Request<ServiceDiscovery.Types.CreateServiceResponse, AWSError>;
  /**
   * Creates a service, which defines a template for the following entities:   One to five resource record sets   Optionally, a health check   After you create the service, you can submit a RegisterInstance request, and Amazon Route 53 uses the values in the template to create the specified entities. 
   */
  createService(callback?: (err: AWSError, data: ServiceDiscovery.Types.CreateServiceResponse) => void): Request<ServiceDiscovery.Types.CreateServiceResponse, AWSError>;
  /**
   * Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.
   */
  deleteNamespace(params: ServiceDiscovery.Types.DeleteNamespaceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.DeleteNamespaceResponse) => void): Request<ServiceDiscovery.Types.DeleteNamespaceResponse, AWSError>;
  /**
   * Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.
   */
  deleteNamespace(callback?: (err: AWSError, data: ServiceDiscovery.Types.DeleteNamespaceResponse) => void): Request<ServiceDiscovery.Types.DeleteNamespaceResponse, AWSError>;
  /**
   * Deletes a specified service. If the service still contains one or more registered instances, the request fails.
   */
  deleteService(params: ServiceDiscovery.Types.DeleteServiceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.DeleteServiceResponse) => void): Request<ServiceDiscovery.Types.DeleteServiceResponse, AWSError>;
  /**
   * Deletes a specified service. If the service still contains one or more registered instances, the request fails.
   */
  deleteService(callback?: (err: AWSError, data: ServiceDiscovery.Types.DeleteServiceResponse) => void): Request<ServiceDiscovery.Types.DeleteServiceResponse, AWSError>;
  /**
   * Deletes the resource record sets and the health check, if any, that Amazon Route 53 created for the specified instance.
   */
  deregisterInstance(params: ServiceDiscovery.Types.DeregisterInstanceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.DeregisterInstanceResponse) => void): Request<ServiceDiscovery.Types.DeregisterInstanceResponse, AWSError>;
  /**
   * Deletes the resource record sets and the health check, if any, that Amazon Route 53 created for the specified instance.
   */
  deregisterInstance(callback?: (err: AWSError, data: ServiceDiscovery.Types.DeregisterInstanceResponse) => void): Request<ServiceDiscovery.Types.DeregisterInstanceResponse, AWSError>;
  /**
   * Gets information about a specified instance.
   */
  getInstance(params: ServiceDiscovery.Types.GetInstanceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.GetInstanceResponse) => void): Request<ServiceDiscovery.Types.GetInstanceResponse, AWSError>;
  /**
   * Gets information about a specified instance.
   */
  getInstance(callback?: (err: AWSError, data: ServiceDiscovery.Types.GetInstanceResponse) => void): Request<ServiceDiscovery.Types.GetInstanceResponse, AWSError>;
  /**
   * Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances that are associated with a specified service.
   */
  getInstancesHealthStatus(params: ServiceDiscovery.Types.GetInstancesHealthStatusRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.GetInstancesHealthStatusResponse) => void): Request<ServiceDiscovery.Types.GetInstancesHealthStatusResponse, AWSError>;
  /**
   * Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances that are associated with a specified service.
   */
  getInstancesHealthStatus(callback?: (err: AWSError, data: ServiceDiscovery.Types.GetInstancesHealthStatusResponse) => void): Request<ServiceDiscovery.Types.GetInstancesHealthStatusResponse, AWSError>;
  /**
   * Gets information about a namespace.
   */
  getNamespace(params: ServiceDiscovery.Types.GetNamespaceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.GetNamespaceResponse) => void): Request<ServiceDiscovery.Types.GetNamespaceResponse, AWSError>;
  /**
   * Gets information about a namespace.
   */
  getNamespace(callback?: (err: AWSError, data: ServiceDiscovery.Types.GetNamespaceResponse) => void): Request<ServiceDiscovery.Types.GetNamespaceResponse, AWSError>;
  /**
   * Gets information about any operation that returns an operation ID in the response, such as a CreateService request. To get a list of operations that match specified criteria, see ListOperations.
   */
  getOperation(params: ServiceDiscovery.Types.GetOperationRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.GetOperationResponse) => void): Request<ServiceDiscovery.Types.GetOperationResponse, AWSError>;
  /**
   * Gets information about any operation that returns an operation ID in the response, such as a CreateService request. To get a list of operations that match specified criteria, see ListOperations.
   */
  getOperation(callback?: (err: AWSError, data: ServiceDiscovery.Types.GetOperationResponse) => void): Request<ServiceDiscovery.Types.GetOperationResponse, AWSError>;
  /**
   * Gets the settings for a specified service.
   */
  getService(params: ServiceDiscovery.Types.GetServiceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.GetServiceResponse) => void): Request<ServiceDiscovery.Types.GetServiceResponse, AWSError>;
  /**
   * Gets the settings for a specified service.
   */
  getService(callback?: (err: AWSError, data: ServiceDiscovery.Types.GetServiceResponse) => void): Request<ServiceDiscovery.Types.GetServiceResponse, AWSError>;
  /**
   * Gets summary information about the instances that you created by using a specified service.
   */
  listInstances(params: ServiceDiscovery.Types.ListInstancesRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.ListInstancesResponse) => void): Request<ServiceDiscovery.Types.ListInstancesResponse, AWSError>;
  /**
   * Gets summary information about the instances that you created by using a specified service.
   */
  listInstances(callback?: (err: AWSError, data: ServiceDiscovery.Types.ListInstancesResponse) => void): Request<ServiceDiscovery.Types.ListInstancesResponse, AWSError>;
  /**
   * Gets information about the namespaces that were created by the current AWS account.
   */
  listNamespaces(params: ServiceDiscovery.Types.ListNamespacesRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.ListNamespacesResponse) => void): Request<ServiceDiscovery.Types.ListNamespacesResponse, AWSError>;
  /**
   * Gets information about the namespaces that were created by the current AWS account.
   */
  listNamespaces(callback?: (err: AWSError, data: ServiceDiscovery.Types.ListNamespacesResponse) => void): Request<ServiceDiscovery.Types.ListNamespacesResponse, AWSError>;
  /**
   * Lists operations that match the criteria that you specify.
   */
  listOperations(params: ServiceDiscovery.Types.ListOperationsRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.ListOperationsResponse) => void): Request<ServiceDiscovery.Types.ListOperationsResponse, AWSError>;
  /**
   * Lists operations that match the criteria that you specify.
   */
  listOperations(callback?: (err: AWSError, data: ServiceDiscovery.Types.ListOperationsResponse) => void): Request<ServiceDiscovery.Types.ListOperationsResponse, AWSError>;
  /**
   * Gets settings for all the services that are associated with one or more specified namespaces.
   */
  listServices(params: ServiceDiscovery.Types.ListServicesRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.ListServicesResponse) => void): Request<ServiceDiscovery.Types.ListServicesResponse, AWSError>;
  /**
   * Gets settings for all the services that are associated with one or more specified namespaces.
   */
  listServices(callback?: (err: AWSError, data: ServiceDiscovery.Types.ListServicesResponse) => void): Request<ServiceDiscovery.Types.ListServicesResponse, AWSError>;
  /**
   * Creates one or more resource record sets and optionally a health check based on the settings in a specified service. When you submit a RegisterInstance request, Amazon Route 53 does the following:   Creates a resource record set for each resource record set template in the service   Creates a health check based on the settings in the health check template in the service, if any   Associates the health check, if any, with each of the resource record sets    One RegisterInstance request must complete before you can submit another request and specify the same service and instance ID.  For more information, see CreateService. When Amazon Route 53 receives a DNS query for the specified DNS name, it returns the applicable value:    If the health check is healthy: returns all the resource record sets    If the health check is unhealthy: returns the IP address of the last healthy instance    If you didn't specify a health check template: returns all the resource record sets  
   */
  registerInstance(params: ServiceDiscovery.Types.RegisterInstanceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.RegisterInstanceResponse) => void): Request<ServiceDiscovery.Types.RegisterInstanceResponse, AWSError>;
  /**
   * Creates one or more resource record sets and optionally a health check based on the settings in a specified service. When you submit a RegisterInstance request, Amazon Route 53 does the following:   Creates a resource record set for each resource record set template in the service   Creates a health check based on the settings in the health check template in the service, if any   Associates the health check, if any, with each of the resource record sets    One RegisterInstance request must complete before you can submit another request and specify the same service and instance ID.  For more information, see CreateService. When Amazon Route 53 receives a DNS query for the specified DNS name, it returns the applicable value:    If the health check is healthy: returns all the resource record sets    If the health check is unhealthy: returns the IP address of the last healthy instance    If you didn't specify a health check template: returns all the resource record sets  
   */
  registerInstance(callback?: (err: AWSError, data: ServiceDiscovery.Types.RegisterInstanceResponse) => void): Request<ServiceDiscovery.Types.RegisterInstanceResponse, AWSError>;
  /**
   * Updates the TTL setting for a specified service. You must specify all the resource record set templates (and, optionally, a health check template) that you want to appear in the updated service. Any current resource record set templates (or health check template) that don't appear in an UpdateService request are deleted. When you update the TTL setting for a service, Amazon Route 53 also updates the corresponding settings in all the resource record sets and health checks that were created by using the specified service.
   */
  updateService(params: ServiceDiscovery.Types.UpdateServiceRequest, callback?: (err: AWSError, data: ServiceDiscovery.Types.UpdateServiceResponse) => void): Request<ServiceDiscovery.Types.UpdateServiceResponse, AWSError>;
  /**
   * Updates the TTL setting for a specified service. You must specify all the resource record set templates (and, optionally, a health check template) that you want to appear in the updated service. Any current resource record set templates (or health check template) that don't appear in an UpdateService request are deleted. When you update the TTL setting for a service, Amazon Route 53 also updates the corresponding settings in all the resource record sets and health checks that were created by using the specified service.
   */
  updateService(callback?: (err: AWSError, data: ServiceDiscovery.Types.UpdateServiceResponse) => void): Request<ServiceDiscovery.Types.UpdateServiceResponse, AWSError>;
}
declare namespace ServiceDiscovery {
  export type Arn = string;
  export type AttrKey = string;
  export type AttrValue = string;
  export type Attributes = {[key: string]: AttrValue};
  export type Code = string;
  export interface CreatePrivateDnsNamespaceRequest {
    /**
     * The name that you want to assign to this namespace. When you create a namespace, Amazon Route 53 automatically creates a hosted zone that has the same name as the namespace.
     */
    Name: NamespaceName;
    /**
     * An optional parameter that you can use to resolve concurrent creation requests. CreatorRequestId helps to determine if a specific client owns the namespace.
     */
    CreatorRequestId?: ResourceId;
    /**
     * A description for the namespace.
     */
    Description?: ResourceDescription;
    /**
     * The ID of the Amazon VPC that you want to associate the namespace with.
     */
    Vpc: ResourceId;
  }
  export interface CreatePrivateDnsNamespaceResponse {
    /**
     * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see GetOperation.
     */
    OperationId?: OperationId;
  }
  export interface CreatePublicDnsNamespaceRequest {
    /**
     * The name that you want to assign to this namespace.
     */
    Name: NamespaceName;
    /**
     * An optional parameter that you can use to resolve concurrent creation requests. CreatorRequestId helps to determine if a specific client owns the namespace.
     */
    CreatorRequestId?: ResourceId;
    /**
     * A description for the namespace.
     */
    Description?: ResourceDescription;
  }
  export interface CreatePublicDnsNamespaceResponse {
    /**
     * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see GetOperation.
     */
    OperationId?: OperationId;
  }
  export interface CreateServiceRequest {
    /**
     * The name that you want to assign to the service.
     */
    Name: ServiceName;
    /**
     * An optional parameter that you can use to resolve concurrent creation requests. CreatorRequestId helps to determine if a specific client owns the namespace.
     */
    CreatorRequestId?: ResourceId;
    /**
     * A description for the service.
     */
    Description?: ResourceDescription;
    /**
     * A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance. 
     */
    DnsConfig: DnsConfig;
    /**
     *  Public DNS namespaces only. A complex type that contains settings for an optional health check. If you specify settings for a health check, Amazon Route 53 associates the health check with all the resource record sets that you specify in DnsConfig.  The health check uses 30 seconds as the request interval. This is the number of seconds between the time that each Amazon Route 53 health checker gets a response from your endpoint and the time that it sends the next health check request. A health checker in each data center around the world sends your endpoint a health check request every 30 seconds. On average, your endpoint receives a health check request about every two seconds. Health checkers in different data centers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.  For information about the charges for health checks, see Amazon Route 53 Pricing.
     */
    HealthCheckConfig?: HealthCheckConfig;
  }
  export interface CreateServiceResponse {
    /**
     * A complex type that contains information about the new service.
     */
    Service?: Service;
  }
  export interface DeleteNamespaceRequest {
    /**
     * The ID of the namespace that you want to delete.
     */
    Id: ResourceId;
  }
  export interface DeleteNamespaceResponse {
    /**
     * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see GetOperation.
     */
    OperationId?: OperationId;
  }
  export interface DeleteServiceRequest {
    /**
     * The ID of the service that you want to delete.
     */
    Id: ResourceId;
  }
  export interface DeleteServiceResponse {
  }
  export interface DeregisterInstanceRequest {
    /**
     * The ID of the service that the instance is associated with.
     */
    ServiceId: ResourceId;
    /**
     * The value that you specified for Id in the RegisterInstance request.
     */
    InstanceId: ResourceId;
  }
  export interface DeregisterInstanceResponse {
    /**
     * A value that you can use to determine whether the request completed successfully. For more information, see GetOperation.
     */
    OperationId?: OperationId;
  }
  export interface DnsConfig {
    /**
     * The ID of the namespace to use for DNS configuration.
     */
    NamespaceId: ResourceId;
    /**
     * An array that contains one DnsRecord object for each resource record set that you want Amazon Route 53 to create when you register an instance.
     */
    DnsRecords: DnsRecordList;
  }
  export interface DnsConfigChange {
    /**
     * An array that contains one DnsRecord object for each resource record set that you want Amazon Route 53 to create when you register an instance.
     */
    DnsRecords: DnsRecordList;
  }
  export interface DnsProperties {
    /**
     * The ID for the hosted zone that Amazon Route 53 creates when you create a namespace.
     */
    HostedZoneId?: ResourceId;
  }
  export interface DnsRecord {
    /**
     * The type of the resource, which indicates the value that Amazon Route 53 returns in response to DNS queries. The following values are supported:    A: Amazon Route 53 returns the IP address of the resource in IPv4 format, such as 192.0.2.44.    AAAA: Amazon Route 53 returns the IP address of the resource in IPv6 format, such as 2001:0db8:85a3:0000:0000:abcd:0001:2345.    SRV: Amazon Route 53 returns the value for an SRV record. The value for an SRV record uses the following template, which can't be changed:  priority weight port resource-record-set-name  The values of priority and weight are both set to 1. The value of port comes from the value that you specify for Port when you submit a RegisterInstance request.  
     */
    Type: RecordType;
    /**
     * The amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.
     */
    TTL: RecordTTL;
  }
  export type DnsRecordList = DnsRecord[];
  export type ErrorMessage = string;
  export type FailureThreshold = number;
  export type FilterCondition = "EQ"|"IN"|"BETWEEN"|string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export interface GetInstanceRequest {
    /**
     * The ID of the service that the instance is associated with.
     */
    ServiceId: ResourceId;
    /**
     * The ID of the instance that you want to get information about.
     */
    InstanceId: ResourceId;
  }
  export interface GetInstanceResponse {
    /**
     * A complex type that contains information about a specified instance.
     */
    Instance?: Instance;
  }
  export interface GetInstancesHealthStatusRequest {
    /**
     * The ID of the service that the instance is associated with.
     */
    ServiceId: ResourceId;
    /**
     * An array that contains the IDs of all the instances that you want to get the health status for. To get the IDs for the instances that you've created by using a specified service, submit a ListInstances request. If you omit Instances, Amazon Route 53 returns the health status for all the instances that are associated with the specified service.
     */
    Instances?: InstanceIdList;
    /**
     * The maximum number of instances that you want Amazon Route 53 to return in the response to a GetInstancesHealthStatus request. If you don't specify a value for MaxResults, Amazon Route 53 returns up to 100 instances.
     */
    MaxResults?: MaxResults;
    /**
     * For the first GetInstancesHealthStatus request, omit this value. If more than MaxResults instances match the specified criteria, you can submit another GetInstancesHealthStatus request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
  }
  export interface GetInstancesHealthStatusResponse {
    /**
     * A complex type that contains the IDs and the health status of the instances that you specified in the GetInstancesHealthStatus request.
     */
    Status?: InstanceHealthStatusMap;
    /**
     * If more than MaxResults instances match the specified criteria, you can submit another GetInstancesHealthStatus request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
  }
  export interface GetNamespaceRequest {
    /**
     * The ID of the namespace that you want to get information about.
     */
    Id: ResourceId;
  }
  export interface GetNamespaceResponse {
    /**
     * A complex type that contains information about the specified namespace.
     */
    Namespace?: Namespace;
  }
  export interface GetOperationRequest {
    /**
     * The ID of the operation that you want to get more information about.
     */
    OperationId: ResourceId;
  }
  export interface GetOperationResponse {
    /**
     * A complex type that contains information about the operation.
     */
    Operation?: Operation;
  }
  export interface GetServiceRequest {
    /**
     * The ID of the service that you want to get settings for.
     */
    Id: ResourceId;
  }
  export interface GetServiceResponse {
    /**
     * A complex type that contains information about the service.
     */
    Service?: Service;
  }
  export interface HealthCheckConfig {
    /**
     * The type of health check that you want to create, which indicates how Amazon Route 53 determines whether an endpoint is healthy.  You can't change the value of Type after you create a health check.  You can create the following types of health checks:    HTTP: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.    HTTPS: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.  If you specify HTTPS for the value of Type, the endpoint must support TLS v1.0 or later.     TCP: Amazon Route 53 tries to establish a TCP connection.   For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the Amazon Route 53 Developer Guide.
     */
    Type?: HealthCheckType;
    /**
     * The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, such as the file /docs/route53-health-check.html. Amazon Route 53 automatically adds the DNS name for the service and a leading forward slash (/) character. 
     */
    ResourcePath?: ResourcePath;
    /**
     * The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the Amazon Route 53 Developer Guide.
     */
    FailureThreshold?: FailureThreshold;
  }
  export type HealthCheckType = "HTTP"|"HTTPS"|"TCP"|string;
  export type HealthStatus = "HEALTHY"|"UNHEALTHY"|"UNKNOWN"|string;
  export interface Instance {
    /**
     * An identifier that you want to associate with the instance. Note the following:   You can use this value to update an existing instance.   To associate a new instance, you must specify a value that is unique among instances that you associate by using the same service.  
     */
    Id: ResourceId;
    /**
     * An optional parameter that you can use to resolve concurrent creation requests. CreatorRequestId helps to determine if a specific client owns the namespace.
     */
    CreatorRequestId?: ResourceId;
    /**
     * A string map that contains attribute keys and values. Supported attribute keys include the following:    AWS_INSTANCE_PORT: The port on the endpoint that you want Amazon Route 53 to perform health checks on. This value is also used for the port value in an SRV record if the service that you specify includes an SRV record. For more information, see CreateService.    AWS_INSTANCE_IP: If the service that you specify contains a resource record set template for an A or AAAA record, the IP address that you want Amazon Route 53 to use for the value of the A record.    AWS_INSTANCE_WEIGHT: The weight value in an SRV record if the service that you specify includes an SRV record. You can also specify a default weight that is applied to all instances in the Service configuration. For more information, see CreateService.    AWS_INSTANCE_PRIORITY: The priority value in an SRV record if the service that you specify includes an SRV record.  
     */
    Attributes?: Attributes;
  }
  export type InstanceHealthStatusMap = {[key: string]: HealthStatus};
  export type InstanceIdList = ResourceId[];
  export interface InstanceSummary {
    /**
     * The ID for an instance that you created by using a specified service.
     */
    Id?: ResourceId;
    /**
     * A string map that contain attribute keys and values for an instance. Supported attribute keys include the following:    AWS_INSTANCE_PORT: The port on the endpoint that you want Amazon Route 53 to perform health checks on. This value is also used for the port value in an SRV record if the service that you specify includes an SRV record. For more information, see CreateService.    AWS_INSTANCE_IP: If the service that you specify contains a resource record set template for an A or AAAA record, the IP address that you want Amazon Route 53 to use for the value of the A record.  
     */
    Attributes?: Attributes;
  }
  export type InstanceSummaryList = InstanceSummary[];
  export interface ListInstancesRequest {
    /**
     * The ID of the service that you want to list instances for.
     */
    ServiceId: ResourceId;
    /**
     * For the first ListInstances request, omit this value. If more than MaxResults instances match the specified criteria, you can submit another ListInstances request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of instances that you want Amazon Route 53 to return in the response to a ListInstances request. If you don't specify a value for MaxResults, Amazon Route 53 returns up to 100 instances.
     */
    MaxResults?: MaxResults;
  }
  export interface ListInstancesResponse {
    /**
     * Summary information about the instances that are associated with the specified service.
     */
    Instances?: InstanceSummaryList;
    /**
     * If more than MaxResults instances match the specified criteria, you can submit another ListInstances request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListNamespacesRequest {
    /**
     * For the first ListNamespaces request, omit this value. If more than MaxResults namespaces match the specified criteria, you can submit another ListNamespaces request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of namespaces that you want Amazon Route 53 to return in the response to a ListNamespaces request. If you don't specify a value for MaxResults, Amazon Route 53 returns up to 100 namespaces.
     */
    MaxResults?: MaxResults;
    /**
     * A complex type that contains specifications for the namespaces that you want to list. If you specify more than one filter, an operation must match all filters to be returned by ListNamespaces.
     */
    Filters?: NamespaceFilters;
  }
  export interface ListNamespacesResponse {
    /**
     * An array that contains one NamespaceSummary object for each namespace that matches the specified filter criteria.
     */
    Namespaces?: NamespaceSummariesList;
    /**
     * If more than MaxResults namespaces match the specified criteria, you can submit another ListNamespaces request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListOperationsRequest {
    /**
     * For the first ListOperations request, omit this value. If more than MaxResults operations match the specified criteria, you can submit another ListOperations request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items that you want Amazon Route 53 to return in the response to a ListOperations request. If you don't specify a value for MaxResults, Amazon Route 53 returns up to 100 operations.
     */
    MaxResults?: MaxResults;
    /**
     * A complex type that contains specifications for the operations that you want to list, for example, operations that you started between a specified start date and end date. If you specify more than one filter, an operation must match all filters to be returned by ListOperations.
     */
    Filters?: OperationFilters;
  }
  export interface ListOperationsResponse {
    /**
     * Summary information about the operations that match the specified criteria.
     */
    Operations?: OperationSummaryList;
    /**
     * If more than MaxResults operations match the specified criteria, you can submit another ListOperations request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListServicesRequest {
    /**
     * For the first ListServices request, omit this value. If more than MaxResults services match the specified criteria, you can submit another ListServices request to get the next group of results. Specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of services that you want Amazon Route 53 to return in the response to a ListServices request. If you don't specify a value for MaxResults, Amazon Route 53 returns up to 100 services.
     */
    MaxResults?: MaxResults;
    /**
     * A complex type that contains specifications for the namespaces that you want to list services for.  If you specify more than one filter, an operation must match all filters to be returned by ListServices.
     */
    Filters?: ServiceFilters;
  }
  export interface ListServicesResponse {
    /**
     * An array that contains one ServiceSummary object for each service that matches the specified filter criteria.
     */
    Services?: ServiceSummariesList;
    /**
     * If more than MaxResults operations match the specified criteria, the value of NextToken is the first service in the next group of services that were created by the current AWS account. To get the next group, specify the value of NextToken from the previous response in the next request.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type Message = string;
  export interface Namespace {
    /**
     * The ID of a namespace.
     */
    Id?: ResourceId;
    /**
     * The Amazon Resource Name (ARN) that Amazon Route 53 assigns to the namespace when you create it.
     */
    Arn?: Arn;
    /**
     * The name of the namespace, such as example.com.
     */
    Name?: NamespaceName;
    /**
     * The type of the namespace. Valid values are DNS_PUBLIC and DNS_PRIVATE.
     */
    Type?: NamespaceType;
    /**
     * The description that you specify for the namespace when you create it.
     */
    Description?: ResourceDescription;
    /**
     * The number of services that are associated with the namespace.
     */
    ServiceCount?: ResourceCount;
    /**
     * A complex type that contains information that's specific to the type of the namespace.
     */
    Properties?: NamespaceProperties;
    /**
     * The date that the namespace was created, in Unix date/time format and Coordinated Universal Time (UTC).
     */
    CreateDate?: Timestamp;
    /**
     * An optional parameter that you can use to resolve concurrent creation requests. CreatorRequestId helps to determine if a specific client owns the namespace.
     */
    CreatorRequestId?: ResourceId;
  }
  export interface NamespaceFilter {
    /**
     * Specify TYPE.
     */
    Name: NamespaceFilterName;
    /**
     * If you specify EQ for Condition, specify either DNS_PUBLIC or DNS_PRIVATE. If you specify IN for Condition, you can specify DNS_PUBLIC, DNS_PRIVATE, or both.
     */
    Values: FilterValues;
    /**
     * The operator that you want to use to determine whether ListNamespaces returns a namespace. Valid values for condition include:    EQ: When you specify EQ for the condition, you can choose to list only public namespaces or private namespaces, but not both. EQ is the default condition and can be omitted.    IN: When you specify IN for the condition, you can choose to list public namespaces, private namespaces, or both.   
     */
    Condition?: FilterCondition;
  }
  export type NamespaceFilterName = "TYPE"|string;
  export type NamespaceFilters = NamespaceFilter[];
  export type NamespaceName = string;
  export interface NamespaceProperties {
    /**
     * A complex type that contains the ID for the hosted zone that Amazon Route 53 creates when you create a namespace.
     */
    DnsProperties?: DnsProperties;
  }
  export type NamespaceSummariesList = NamespaceSummary[];
  export interface NamespaceSummary {
    /**
     * The ID of the namespace.
     */
    Id?: ResourceId;
    /**
     * The Amazon Resource Name (ARN) that Amazon Route 53 assigns to the namespace when you create it.
     */
    Arn?: Arn;
    /**
     * The name of the namespace. When you create a namespace, Amazon Route 53 automatically creates a hosted zone that has the same name as the namespace.
     */
    Name?: NamespaceName;
    /**
     * The type of the namespace, either public or private.
     */
    Type?: NamespaceType;
  }
  export type NamespaceType = "DNS_PUBLIC"|"DNS_PRIVATE"|string;
  export type NextToken = string;
  export interface Operation {
    /**
     * The ID of the operation that you want to get information about.
     */
    Id?: OperationId;
    /**
     * The name of the operation that is associated with the specified ID.
     */
    Type?: OperationType;
    /**
     * The status of the operation. Values include the following:    SUBMITTED: This is the initial state immediately after you submit a request.    PENDING: Amazon Route 53 is performing the operation.    SUCCESS: The operation succeeded.    FAIL: The operation failed. For the failure reason, see ErrorMessage.  
     */
    Status?: OperationStatus;
    /**
     * If the value of Status is FAIL, the reason that the operation failed.
     */
    ErrorMessage?: Message;
    /**
     * The code associated with ErrorMessage.
     */
    ErrorCode?: Code;
    /**
     * The date and time that the request was submitted, in Unix date/time format and Coordinated Universal Time (UTC).
     */
    CreateDate?: Timestamp;
    /**
     * The date and time that the value of Status changed to the current value, in Unix date/time format and Coordinated Universal Time (UTC).
     */
    UpdateDate?: Timestamp;
    /**
     * The name of the target entity that is associated with the operation:    NAMESPACE: The namespace ID is returned in the ResourceId property.    SERVICE: The service ID is returned in the ResourceId property.    INSTANCE: The instance ID is returned in the ResourceId property.  
     */
    Targets?: OperationTargetsMap;
  }
  export interface OperationFilter {
    /**
     * Specify the operations that you want to get:    NAMESPACE_ID: Gets operations related to specified namespaces.    SERVICE_ID: Gets operations related to specified services.    STATUS: Gets operations based on the status of the operations: SUBMITTED, PENDING, SUCCEED, or FAIL.    TYPE: Gets specified types of operation.    UPDATE_DATE: Gets operations that changed status during a specified date/time range.   
     */
    Name: OperationFilterName;
    /**
     * Specify values that are applicable to the value that you specify for Name:     NAMESPACE_ID: Specify one namespace ID.    SERVICE_ID: Specify one service ID.    STATUS: Specify one or more statuses: SUBMITTED, PENDING, SUCCEED, or FAIL.    TYPE: Specify one or more of the following types: CREATE_NAMESPACE, DELETE_NAMESPACE, UPDATE_SERVICE, REGISTER_INSTANCE, or DEREGISTER_INSTANCE.    UPDATE_DATE: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC). The start date must be the first value.  
     */
    Values: FilterValues;
    /**
     * The operator that you want to use to determine whether an operation matches the specified value. Valid values for condition include:    EQ: When you specify EQ for the condition, you can specify only one value. EQ is supported for NAMESPACE_ID, SERVICE_ID, STATUS, and TYPE. EQ is the default condition and can be omitted.    IN: When you specify IN for the condition, you can specify a list of one or more values. IN is supported for STATUS and TYPE. An operation must match one of the specified values to be returned in the response.    BETWEEN: Specify two values, a start date and an end date. The start date must be the first value. BETWEEN is supported for U.   
     */
    Condition?: FilterCondition;
  }
  export type OperationFilterName = "NAMESPACE_ID"|"SERVICE_ID"|"STATUS"|"TYPE"|"UPDATE_DATE"|string;
  export type OperationFilters = OperationFilter[];
  export type OperationId = string;
  export type OperationStatus = "SUBMITTED"|"PENDING"|"SUCCESS"|"FAIL"|string;
  export interface OperationSummary {
    /**
     * The ID for an operation.
     */
    Id?: OperationId;
    /**
     * The status of the operation. Values include the following:    SUBMITTED: This is the initial state immediately after you submit a request.    PENDING: Amazon Route 53 is performing the operation.    SUCCESS: The operation succeeded.    FAIL: The operation failed. For the failure reason, see ErrorMessage.  
     */
    Status?: OperationStatus;
  }
  export type OperationSummaryList = OperationSummary[];
  export type OperationTargetType = "NAMESPACE"|"SERVICE"|"INSTANCE"|string;
  export type OperationTargetsMap = {[key: string]: ResourceId};
  export type OperationType = "CREATE_NAMESPACE"|"DELETE_NAMESPACE"|"UPDATE_SERVICE"|"REGISTER_INSTANCE"|"DEREGISTER_INSTANCE"|string;
  export type RecordTTL = number;
  export type RecordType = "SRV"|"A"|"AAAA"|string;
  export interface RegisterInstanceRequest {
    /**
     * The ID of the service that you want to use for settings for the resource record sets and health check that Amazon Route 53 will create.
     */
    ServiceId: ResourceId;
    /**
     * An identifier that you want to associate with the instance. Note the following:   You can use this value to update an existing instance.   To register a new instance, you must specify a value that is unique among instances that you register by using the same service.  
     */
    InstanceId: ResourceId;
    /**
     * An optional parameter that you can use to resolve concurrent creation requests. CreatorRequestId helps to determine if a specific client owns the namespace.
     */
    CreatorRequestId?: ResourceId;
    /**
     * A string map that contain attribute keys and values. Supported attribute keys include the following:    AWS_INSTANCE_PORT: The port on the endpoint that you want Amazon Route 53 to perform health checks on. This value is also used for the port value in an SRV record if the service that you specify includes an SRV record. For more information, see CreateService.    AWS_INSTANCE_IPV4: If the service that you specify contains a resource record set template for an A record, the IPv4 address that you want Amazon Route 53 to use for the value of the A record.    AWS_INSTANCE_IPV6: If the service that you specify contains a resource record set template for an AAAA record, the IPv6 address that you want Amazon Route 53 to use for the value of the AAAA record.  
     */
    Attributes: Attributes;
  }
  export interface RegisterInstanceResponse {
    /**
     * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see GetOperation.
     */
    OperationId?: OperationId;
  }
  export type ResourceCount = number;
  export type ResourceDescription = string;
  export type ResourceId = string;
  export type ResourcePath = string;
  export interface Service {
    /**
     * The ID that Amazon Route 53 assigned to the service when you created it.
     */
    Id?: ResourceId;
    /**
     * The Amazon Resource Name (ARN) that Amazon Route 53 assigns to the service when you create it.
     */
    Arn?: Arn;
    /**
     * The name of the service.
     */
    Name?: ServiceName;
    /**
     * The description of the service.
     */
    Description?: ResourceDescription;
    /**
     * The number of instances that are currently associated with the service. Instances that were previously associated with the service but that have been deleted are not included in the count.
     */
    InstanceCount?: ResourceCount;
    /**
     * A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
     */
    DnsConfig?: DnsConfig;
    /**
     *  Public DNS namespaces only. A complex type that contains settings for an optional health check. If you specify settings for a health check, Amazon Route 53 associates the health check with all the resource record sets that you specify in DnsConfig.  The health check uses 30 seconds as the request interval. This is the number of seconds between the time that each Amazon Route 53 health checker gets a response from your endpoint and the time that it sends the next health check request. A health checker in each data center around the world sends your endpoint a health check request every 30 seconds. On average, your endpoint receives a health check request about every two seconds. Health checkers in different data centers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.  For information about the charges for health checks, see Amazon Route 53 Pricing.
     */
    HealthCheckConfig?: HealthCheckConfig;
    /**
     * The date and time that the service was created, in Unix format and Coordinated Universal Time (UTC).
     */
    CreateDate?: Timestamp;
    /**
     * An optional parameter that you can use to resolve concurrent creation requests. CreatorRequestId helps to determine if a specific client owns the namespace.
     */
    CreatorRequestId?: ResourceId;
  }
  export interface ServiceChange {
    /**
     * A description for the service.
     */
    Description?: ResourceDescription;
    /**
     * A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
     */
    DnsConfig: DnsConfigChange;
    HealthCheckConfig?: HealthCheckConfig;
  }
  export interface ServiceFilter {
    /**
     * Specify NAMESPACE_ID.
     */
    Name: ServiceFilterName;
    /**
     * The values that are applicable to the value that you specify for Condition to filter the list of services.
     */
    Values: FilterValues;
    /**
     * The operator that you want to use to determine whether a service is returned by ListServices. Valid values for Condition include the following:    EQ: When you specify EQ, specify one namespace ID for Values. EQ is the default condition and can be omitted.    IN: When you specify IN, specify a list of the IDs for the namespaces that you want ListServices to return a list of services for.  
     */
    Condition?: FilterCondition;
  }
  export type ServiceFilterName = "NAMESPACE_ID"|string;
  export type ServiceFilters = ServiceFilter[];
  export type ServiceName = string;
  export type ServiceSummariesList = ServiceSummary[];
  export interface ServiceSummary {
    /**
     * The ID that Amazon Route 53 assigned to the service when you created it.
     */
    Id?: ResourceId;
    /**
     * The Amazon Resource Name (ARN) that Amazon Route 53 assigns to the service when you create it.
     */
    Arn?: Arn;
    /**
     * The name of the service.
     */
    Name?: ServiceName;
    /**
     * The description that you specify when you create the service.
     */
    Description?: ResourceDescription;
    /**
     * The number of instances that are currently associated with the service. Instances that were previously associated with the service but that have been deleted are not included in the count.
     */
    InstanceCount?: ResourceCount;
  }
  export type Timestamp = Date;
  export interface UpdateServiceRequest {
    /**
     * The ID of the service that you want to update.
     */
    Id: ResourceId;
    /**
     * A complex type that contains the new settings for the service.
     */
    Service: ServiceChange;
  }
  export interface UpdateServiceResponse {
    /**
     * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see GetOperation.
     */
    OperationId?: OperationId;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-03-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ServiceDiscovery client.
   */
  export import Types = ServiceDiscovery;
}
export = ServiceDiscovery;
