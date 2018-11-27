import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class GlobalAccelerator extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: GlobalAccelerator.Types.ClientConfiguration)
  config: Config & GlobalAccelerator.Types.ClientConfiguration;
  /**
   * Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. To see an AWS CLI example of creating an accelerator, scroll down to Example.
   */
  createAccelerator(params: GlobalAccelerator.Types.CreateAcceleratorRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.CreateAcceleratorResponse) => void): Request<GlobalAccelerator.Types.CreateAcceleratorResponse, AWSError>;
  /**
   * Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. To see an AWS CLI example of creating an accelerator, scroll down to Example.
   */
  createAccelerator(callback?: (err: AWSError, data: GlobalAccelerator.Types.CreateAcceleratorResponse) => void): Request<GlobalAccelerator.Types.CreateAcceleratorResponse, AWSError>;
  /**
   * Create an endpoint group for the specified accelerator. An endpoint group is a collection of endpoints in one AWS Region. To see an AWS CLI example of creating an endpoint group, scroll down to Example.
   */
  createEndpointGroup(params: GlobalAccelerator.Types.CreateEndpointGroupRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.CreateEndpointGroupResponse) => void): Request<GlobalAccelerator.Types.CreateEndpointGroupResponse, AWSError>;
  /**
   * Create an endpoint group for the specified accelerator. An endpoint group is a collection of endpoints in one AWS Region. To see an AWS CLI example of creating an endpoint group, scroll down to Example.
   */
  createEndpointGroup(callback?: (err: AWSError, data: GlobalAccelerator.Types.CreateEndpointGroupResponse) => void): Request<GlobalAccelerator.Types.CreateEndpointGroupResponse, AWSError>;
  /**
   * Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. To see an AWS CLI example of creating a listener, scroll down to Example.
   */
  createListener(params: GlobalAccelerator.Types.CreateListenerRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.CreateListenerResponse) => void): Request<GlobalAccelerator.Types.CreateListenerResponse, AWSError>;
  /**
   * Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. To see an AWS CLI example of creating a listener, scroll down to Example.
   */
  createListener(callback?: (err: AWSError, data: GlobalAccelerator.Types.CreateListenerResponse) => void): Request<GlobalAccelerator.Types.CreateListenerResponse, AWSError>;
  /**
   * Delete an accelerator. Note: before you can delete an accelerator, you must disable it.
   */
  deleteAccelerator(params: GlobalAccelerator.Types.DeleteAcceleratorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete an accelerator. Note: before you can delete an accelerator, you must disable it.
   */
  deleteAccelerator(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete an endpoint group from a listener.
   */
  deleteEndpointGroup(params: GlobalAccelerator.Types.DeleteEndpointGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete an endpoint group from a listener.
   */
  deleteEndpointGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a listener from an accelerator.
   */
  deleteListener(params: GlobalAccelerator.Types.DeleteListenerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a listener from an accelerator.
   */
  deleteListener(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describe an accelerator. To see an AWS CLI example of describing an accelerator, scroll down to Example.
   */
  describeAccelerator(params: GlobalAccelerator.Types.DescribeAcceleratorRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.DescribeAcceleratorResponse) => void): Request<GlobalAccelerator.Types.DescribeAcceleratorResponse, AWSError>;
  /**
   * Describe an accelerator. To see an AWS CLI example of describing an accelerator, scroll down to Example.
   */
  describeAccelerator(callback?: (err: AWSError, data: GlobalAccelerator.Types.DescribeAcceleratorResponse) => void): Request<GlobalAccelerator.Types.DescribeAcceleratorResponse, AWSError>;
  /**
   * Describe the attributes of an accelerator.
   */
  describeAcceleratorAttributes(params: GlobalAccelerator.Types.DescribeAcceleratorAttributesRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.DescribeAcceleratorAttributesResponse) => void): Request<GlobalAccelerator.Types.DescribeAcceleratorAttributesResponse, AWSError>;
  /**
   * Describe the attributes of an accelerator.
   */
  describeAcceleratorAttributes(callback?: (err: AWSError, data: GlobalAccelerator.Types.DescribeAcceleratorAttributesResponse) => void): Request<GlobalAccelerator.Types.DescribeAcceleratorAttributesResponse, AWSError>;
  /**
   * Describe an endpoint group.
   */
  describeEndpointGroup(params: GlobalAccelerator.Types.DescribeEndpointGroupRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.DescribeEndpointGroupResponse) => void): Request<GlobalAccelerator.Types.DescribeEndpointGroupResponse, AWSError>;
  /**
   * Describe an endpoint group.
   */
  describeEndpointGroup(callback?: (err: AWSError, data: GlobalAccelerator.Types.DescribeEndpointGroupResponse) => void): Request<GlobalAccelerator.Types.DescribeEndpointGroupResponse, AWSError>;
  /**
   * Describe a listener.
   */
  describeListener(params: GlobalAccelerator.Types.DescribeListenerRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.DescribeListenerResponse) => void): Request<GlobalAccelerator.Types.DescribeListenerResponse, AWSError>;
  /**
   * Describe a listener.
   */
  describeListener(callback?: (err: AWSError, data: GlobalAccelerator.Types.DescribeListenerResponse) => void): Request<GlobalAccelerator.Types.DescribeListenerResponse, AWSError>;
  /**
   * List the accelerators for an AWS account.
   */
  listAccelerators(params: GlobalAccelerator.Types.ListAcceleratorsRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.ListAcceleratorsResponse) => void): Request<GlobalAccelerator.Types.ListAcceleratorsResponse, AWSError>;
  /**
   * List the accelerators for an AWS account.
   */
  listAccelerators(callback?: (err: AWSError, data: GlobalAccelerator.Types.ListAcceleratorsResponse) => void): Request<GlobalAccelerator.Types.ListAcceleratorsResponse, AWSError>;
  /**
   * List the endpoint groups that are associated with a listener.
   */
  listEndpointGroups(params: GlobalAccelerator.Types.ListEndpointGroupsRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.ListEndpointGroupsResponse) => void): Request<GlobalAccelerator.Types.ListEndpointGroupsResponse, AWSError>;
  /**
   * List the endpoint groups that are associated with a listener.
   */
  listEndpointGroups(callback?: (err: AWSError, data: GlobalAccelerator.Types.ListEndpointGroupsResponse) => void): Request<GlobalAccelerator.Types.ListEndpointGroupsResponse, AWSError>;
  /**
   * List the listeners for an accelerator.
   */
  listListeners(params: GlobalAccelerator.Types.ListListenersRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.ListListenersResponse) => void): Request<GlobalAccelerator.Types.ListListenersResponse, AWSError>;
  /**
   * List the listeners for an accelerator.
   */
  listListeners(callback?: (err: AWSError, data: GlobalAccelerator.Types.ListListenersResponse) => void): Request<GlobalAccelerator.Types.ListListenersResponse, AWSError>;
  /**
   * Update an accelerator.
   */
  updateAccelerator(params: GlobalAccelerator.Types.UpdateAcceleratorRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.UpdateAcceleratorResponse) => void): Request<GlobalAccelerator.Types.UpdateAcceleratorResponse, AWSError>;
  /**
   * Update an accelerator.
   */
  updateAccelerator(callback?: (err: AWSError, data: GlobalAccelerator.Types.UpdateAcceleratorResponse) => void): Request<GlobalAccelerator.Types.UpdateAcceleratorResponse, AWSError>;
  /**
   * Update the attributes for an accelerator. To see an AWS CLI example of updating an accelerator to enable flow logs, scroll down to Example.
   */
  updateAcceleratorAttributes(params: GlobalAccelerator.Types.UpdateAcceleratorAttributesRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.UpdateAcceleratorAttributesResponse) => void): Request<GlobalAccelerator.Types.UpdateAcceleratorAttributesResponse, AWSError>;
  /**
   * Update the attributes for an accelerator. To see an AWS CLI example of updating an accelerator to enable flow logs, scroll down to Example.
   */
  updateAcceleratorAttributes(callback?: (err: AWSError, data: GlobalAccelerator.Types.UpdateAcceleratorAttributesResponse) => void): Request<GlobalAccelerator.Types.UpdateAcceleratorAttributesResponse, AWSError>;
  /**
   * Update an endpoint group. To see an AWS CLI example of updating an endpoint group, scroll down to Example.
   */
  updateEndpointGroup(params: GlobalAccelerator.Types.UpdateEndpointGroupRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.UpdateEndpointGroupResponse) => void): Request<GlobalAccelerator.Types.UpdateEndpointGroupResponse, AWSError>;
  /**
   * Update an endpoint group. To see an AWS CLI example of updating an endpoint group, scroll down to Example.
   */
  updateEndpointGroup(callback?: (err: AWSError, data: GlobalAccelerator.Types.UpdateEndpointGroupResponse) => void): Request<GlobalAccelerator.Types.UpdateEndpointGroupResponse, AWSError>;
  /**
   * Update a listener.
   */
  updateListener(params: GlobalAccelerator.Types.UpdateListenerRequest, callback?: (err: AWSError, data: GlobalAccelerator.Types.UpdateListenerResponse) => void): Request<GlobalAccelerator.Types.UpdateListenerResponse, AWSError>;
  /**
   * Update a listener.
   */
  updateListener(callback?: (err: AWSError, data: GlobalAccelerator.Types.UpdateListenerResponse) => void): Request<GlobalAccelerator.Types.UpdateListenerResponse, AWSError>;
}
declare namespace GlobalAccelerator {
  export interface Accelerator {
    /**
     * The Amazon Resource Name (ARN) of the accelerator.
     */
    AcceleratorArn?: GenericString;
    /**
     * The name of the accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.
     */
    Name?: GenericString;
    /**
     * The value for the address type must be IPv4. 
     */
    IpAddressType?: IpAddressType;
    /**
     * Indicates whether theaccelerator is enabled. The value is true or false. The default value is true.  If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.
     */
    Enabled?: GenericBoolean;
    /**
     * IP address set associated with the accelerator.
     */
    IpSets?: IpSets;
    /**
     * Describes the deployment status of the accelerator.
     */
    Status?: AcceleratorStatus;
    /**
     * The date and time that the accelerator was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The date and time that the accelerator was last modified.
     */
    LastModifiedTime?: Timestamp;
  }
  export interface AcceleratorAttributes {
    /**
     * Indicates whether flow logs are enabled. The value is true or false. The default value is false. If the value is true, FlowLogsS3Bucket and FlowLogsS3Prefix must be specified.
     */
    FlowLogsEnabled?: GenericBoolean;
    /**
     * The name of the Amazon S3 bucket for the flow logs. This attribute is required if flow logs are enabled. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the bucket.
     */
    FlowLogsS3Bucket?: GenericString;
    /**
     * The prefix for the location in the Amazon S3 bucket for the flow logs. If you don’t specify a prefix, the flow logs are stored in the root of the bucket.
     */
    FlowLogsS3Prefix?: GenericString;
  }
  export type AcceleratorStatus = "DEPLOYED"|"IN_PROGRESS"|string;
  export type Accelerators = Accelerator[];
  export type ClientAffinity = "NONE"|"SOURCE_IP"|string;
  export interface CreateAcceleratorRequest {
    /**
     * The name of an accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.
     */
    Name: GenericString;
    /**
     * The value for the address type must be IPv4. 
     */
    IpAddressType?: IpAddressType;
    /**
     * Indicates whether an accelerator is enabled. The value is true or false. The default value is true.  If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.
     */
    Enabled?: GenericBoolean;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of an accelerator.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateAcceleratorResponse {
    /**
     * The accelerator that is created by specifying a listener and the supported IP address types.
     */
    Accelerator?: Accelerator;
  }
  export interface CreateEndpointGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: GenericString;
    /**
     * The name of the AWS Region where the endpoint group is located. A listener can have only one endpoint group in a specific Region.
     */
    EndpointGroupRegion: GenericString;
    /**
     * The list of endpoint objects.
     */
    EndpointConfigurations?: EndpointConfigurations;
    /**
     * The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener.  Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing. The default value is 100.
     */
    TrafficDialPercentage?: TrafficDialPercentage;
    /**
     * The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
     */
    HealthCheckProtocol?: HealthCheckProtocol;
    /**
     * If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).
     */
    HealthCheckPath?: GenericString;
    /**
     * The time, in seconds, between each health check for an endpoint. The default value is 30.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
     */
    ThresholdCount?: ThresholdCount;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateEndpointGroupResponse {
    /**
     * The information about the endpoint group that was created.
     */
    EndpointGroup?: EndpointGroup;
  }
  export interface CreateListenerRequest {
    /**
     * The Amazon Resource Name (ARN) of your accelerator.
     */
    AcceleratorArn: GenericString;
    /**
     * The list of port ranges to support for connections from clients to your accelerator.
     */
    PortRanges: PortRanges;
    /**
     * The protocol for connections from clients to your accelerator.
     */
    Protocol: Protocol;
    /**
     * Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Clienty affinity gives you control over whether to always route each client to the same specific endpoint. AWS Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is NONE, Global Accelerator uses the "five-tuple" (5-tuple) properties—client IP address, client port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes.  If you want a given client to always be routed to the same endpoint, set client affinity to CLIENT_IP instead. When you use the CLIENT_IP setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— client IP address and destination IP address—to select the hash value. For UDP, Global Accelerator always uses two-tuple properties to select the hash value. The default value is NONE.
     */
    ClientAffinity?: ClientAffinity;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateListenerResponse {
    /**
     * The listener that you've created.
     */
    Listener?: Listener;
  }
  export interface DeleteAcceleratorRequest {
    /**
     * The Amazon Resource Name (ARN) of an accelerator.
     */
    AcceleratorArn: GenericString;
  }
  export interface DeleteEndpointGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the endpoint group to delete.
     */
    EndpointGroupArn: GenericString;
  }
  export interface DeleteListenerRequest {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: GenericString;
  }
  export interface DescribeAcceleratorAttributesRequest {
    /**
     * The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.
     */
    AcceleratorArn?: GenericString;
  }
  export interface DescribeAcceleratorAttributesResponse {
    /**
     * The attributes of the accelerator.
     */
    AcceleratorAttributes?: AcceleratorAttributes;
  }
  export interface DescribeAcceleratorRequest {
    /**
     * The Amazon Resource Name (ARN) of the accelerator to describe.
     */
    AcceleratorArn: GenericString;
  }
  export interface DescribeAcceleratorResponse {
    /**
     * The description of the accelerator.
     */
    Accelerator?: Accelerator;
  }
  export interface DescribeEndpointGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the endpoint group to describe.
     */
    EndpointGroupArn: GenericString;
  }
  export interface DescribeEndpointGroupResponse {
    /**
     * The description of an endpoint group.
     */
    EndpointGroup?: EndpointGroup;
  }
  export interface DescribeListenerRequest {
    /**
     * The Amazon Resource Name (ARN) of the listener to describe.
     */
    ListenerArn: GenericString;
  }
  export interface DescribeListenerResponse {
    /**
     * The description of a listener.
     */
    Listener?: Listener;
  }
  export interface EndpointConfiguration {
    /**
     * An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID.
     */
    EndpointId?: GenericString;
    /**
     * The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second and third endpoints, and 6/20 is routed to the last endpoint. For more information, see Endpoint Weights in the AWS Global Accelerator Developer Guide.
     */
    Weight?: EndpointWeight;
  }
  export type EndpointConfigurations = EndpointConfiguration[];
  export interface EndpointDescription {
    /**
     * An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID.
     */
    EndpointId?: GenericString;
    /**
     * The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second and third endpoints, and 6/20 is routed to the last endpoint. For more information, see Endpoint Weights in the AWS Global Accelerator Developer Guide. 
     */
    Weight?: EndpointWeight;
    /**
     * The health status of the endpoint.
     */
    HealthState?: HealthState;
    /**
     * The reason code associated with why the endpoint is not healthy. If the endpoint state is healthy, a reason code is not provided. If the endpoint state is unhealthy, the reason code can be one of the following values:    Timeout: The health check requests to the endpoint are timing out before returning a status.    Failed: The health check failed, for example because the endpoint response was invalid (malformed).   If the endpoint state is initial, the reason code can be one of the following values:    ProvisioningInProgress: The endpoint is in the process of being provisioned.    InitialHealthChecking: Global Accelerator is still setting up the minimum number of health checks for the endpoint that are required to determine its health status.  
     */
    HealthReason?: GenericString;
  }
  export type EndpointDescriptions = EndpointDescription[];
  export interface EndpointGroup {
    /**
     * The Amazon Resource Name (ARN) of the endpoint group.
     */
    EndpointGroupArn?: GenericString;
    /**
     * The AWS Region that this endpoint group belongs.
     */
    EndpointGroupRegion?: GenericString;
    /**
     * The list of endpoint objects.
     */
    EndpointDescriptions?: EndpointDescriptions;
    /**
     * The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener.  Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing. The default value is 100.
     */
    TrafficDialPercentage?: TrafficDialPercentage;
    /**
     * The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group.  The default port is the port for the listener that this endpoint group is associated with. If the listener port is a list, Global Accelerator uses the first specified port in the list of ports.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default value is TCP.
     */
    HealthCheckProtocol?: HealthCheckProtocol;
    /**
     * If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the endpoints for health checks. The default is slash (/).
     */
    HealthCheckPath?: GenericString;
    /**
     * The elapsed time, in seconds, between health checks for each endpoint. The default value is 30.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
     */
    ThresholdCount?: ThresholdCount;
  }
  export type EndpointGroups = EndpointGroup[];
  export type EndpointWeight = number;
  export type GenericBoolean = boolean;
  export type GenericString = string;
  export type HealthCheckIntervalSeconds = number;
  export type HealthCheckPort = number;
  export type HealthCheckProtocol = "TCP"|"HTTP"|"HTTPS"|string;
  export type HealthState = "INITIAL"|"HEALTHY"|"UNHEALTHY"|string;
  export type IdempotencyToken = string;
  export type IpAddress = string;
  export type IpAddressType = "IPV4"|string;
  export type IpAddresses = IpAddress[];
  export interface IpSet {
    /**
     * The types of IP addresses included in this IP set.
     */
    IpFamily?: GenericString;
    /**
     * The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.
     */
    IpAddresses?: IpAddresses;
  }
  export type IpSets = IpSet[];
  export interface ListAcceleratorsRequest {
    /**
     * The number of Global Accelerator objects that you want to return with this call. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: GenericString;
  }
  export interface ListAcceleratorsResponse {
    /**
     * The list of accelerators for a customer account.
     */
    Accelerators?: Accelerators;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: GenericString;
  }
  export interface ListEndpointGroupsRequest {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: GenericString;
    /**
     * The number of endpoint group objects that you want to return with this call. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: GenericString;
  }
  export interface ListEndpointGroupsResponse {
    /**
     * The list of the endpoint groups associated with a listener.
     */
    EndpointGroups?: EndpointGroups;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: GenericString;
  }
  export interface ListListenersRequest {
    /**
     * The Amazon Resource Name (ARN) of the accelerator for which you want to list listener objects.
     */
    AcceleratorArn: GenericString;
    /**
     * The number of listener objects that you want to return with this call. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: GenericString;
  }
  export interface ListListenersResponse {
    /**
     * The list of listeners for an accelerator.
     */
    Listeners?: Listeners;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: GenericString;
  }
  export interface Listener {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn?: GenericString;
    /**
     * The list of port ranges for the connections from clients to the accelerator.
     */
    PortRanges?: PortRanges;
    /**
     * The protocol for the connections from clients to the accelerator.
     */
    Protocol?: Protocol;
    /**
     * The client properties that Global Accelerator uses to select an endpoint so that you can choose to route traffic from users to their original endpoint. The default value is NONE.
     */
    ClientAffinity?: ClientAffinity;
  }
  export type Listeners = Listener[];
  export type MaxResults = number;
  export type PortNumber = number;
  export interface PortRange {
    /**
     * The first port in the range of ports, inclusive.
     */
    FromPort?: PortNumber;
    /**
     * The last port in the range of ports, inclusive.
     */
    ToPort?: PortNumber;
  }
  export type PortRanges = PortRange[];
  export type Protocol = "TCP"|"UDP"|string;
  export type ThresholdCount = number;
  export type Timestamp = Date;
  export type TrafficDialPercentage = number;
  export interface UpdateAcceleratorAttributesRequest {
    /**
     * The Amazon Resource Name (ARN) of the accelerator that you want to update.
     */
    AcceleratorArn?: GenericString;
    /**
     * Update whether flow logs are enabled.
     */
    FlowLogsEnabled?: GenericBoolean;
    /**
     * Update the name of the Amazon S3 bucket for the flow logs.
     */
    FlowLogsS3Bucket?: GenericString;
    /**
     * Update the prefix for the location in the Amazon S3 bucket for the flow logs.
     */
    FlowLogsS3Prefix?: GenericString;
  }
  export interface UpdateAcceleratorAttributesResponse {
    /**
     * Updated attributes for the accelerator.
     */
    AcceleratorAttributes?: AcceleratorAttributes;
  }
  export interface UpdateAcceleratorRequest {
    /**
     * The Amazon Resource Name (ARN) of the accelerator to update.
     */
    AcceleratorArn: GenericString;
    /**
     * The name of the accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.
     */
    Name?: GenericString;
    /**
     * The value for the address type must be IPv4. 
     */
    IpAddressType?: IpAddressType;
    /**
     * Indicates whether an accelerator is enabled. The value is true or false. The default value is true.  If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.
     */
    Enabled?: GenericBoolean;
  }
  export interface UpdateAcceleratorResponse {
    /**
     * Information about the updated accelerator.
     */
    Accelerator?: Accelerator;
  }
  export interface UpdateEndpointGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the endpoint group.
     */
    EndpointGroupArn: GenericString;
    /**
     * The list of endpoint objects.
     */
    EndpointConfigurations?: EndpointConfigurations;
    /**
     * The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener.  Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing. The default value is 100.
     */
    TrafficDialPercentage?: TrafficDialPercentage;
    /**
     * The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If the listener port is a list of ports, Global Accelerator uses the first port in the list.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
     */
    HealthCheckProtocol?: HealthCheckProtocol;
    /**
     * If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).
     */
    HealthCheckPath?: GenericString;
    /**
     * The time, in seconds, between each health check for an endpoint. The default value is 30.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
     */
    ThresholdCount?: ThresholdCount;
  }
  export interface UpdateEndpointGroupResponse {
    /**
     * The information about the endpoint group that was updated.
     */
    EndpointGroup?: EndpointGroup;
  }
  export interface UpdateListenerRequest {
    /**
     * The Amazon Resource Name (ARN) of the listener to update.
     */
    ListenerArn: GenericString;
    /**
     * The updated list of port ranges for the connections from clients to the accelerator.
     */
    PortRanges?: PortRanges;
    /**
     * The updated protocol for the connections from clients to the accelerator.
     */
    Protocol?: Protocol;
    /**
     * Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the source port and protocol of the user request. This gives you control over whether and how to maintain client affinity to a given endpoint. The default value is NONE.
     */
    ClientAffinity?: ClientAffinity;
  }
  export interface UpdateListenerResponse {
    /**
     * Information for the updated listener.
     */
    Listener?: Listener;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-08-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the GlobalAccelerator client.
   */
  export import Types = GlobalAccelerator;
}
export = GlobalAccelerator;
