import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class NetworkMonitor extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: NetworkMonitor.Types.ClientConfiguration)
  config: Config & NetworkMonitor.Types.ClientConfiguration;
  /**
   * Creates a monitor between a source subnet and destination IP address. Within a monitor you'll create one or more probes that monitor network traffic between your source Amazon Web Services VPC subnets and your destination IP addresses. Each probe then aggregates and sends metrics to Amazon CloudWatch. You can also create a monitor with probes using this command. For each probe, you define the following:    source—The subnet IDs where the probes will be created.    destination— The target destination IP address for the probe.    destinationPort—Required only if the protocol is TCP.    protocol—The communication protocol between the source and destination. This will be either TCP or ICMP.    packetSize—The size of the packets. This must be a number between 56 and 8500.   (Optional) tags —Key-value pairs created and assigned to the probe.  
   */
  createMonitor(params: NetworkMonitor.Types.CreateMonitorInput, callback?: (err: AWSError, data: NetworkMonitor.Types.CreateMonitorOutput) => void): Request<NetworkMonitor.Types.CreateMonitorOutput, AWSError>;
  /**
   * Creates a monitor between a source subnet and destination IP address. Within a monitor you'll create one or more probes that monitor network traffic between your source Amazon Web Services VPC subnets and your destination IP addresses. Each probe then aggregates and sends metrics to Amazon CloudWatch. You can also create a monitor with probes using this command. For each probe, you define the following:    source—The subnet IDs where the probes will be created.    destination— The target destination IP address for the probe.    destinationPort—Required only if the protocol is TCP.    protocol—The communication protocol between the source and destination. This will be either TCP or ICMP.    packetSize—The size of the packets. This must be a number between 56 and 8500.   (Optional) tags —Key-value pairs created and assigned to the probe.  
   */
  createMonitor(callback?: (err: AWSError, data: NetworkMonitor.Types.CreateMonitorOutput) => void): Request<NetworkMonitor.Types.CreateMonitorOutput, AWSError>;
  /**
   * Create a probe within a monitor. Once you create a probe, and it begins monitoring your network traffic, you'll incur billing charges for that probe. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. Note the name of the monitorName you want to create the probe for.
   */
  createProbe(params: NetworkMonitor.Types.CreateProbeInput, callback?: (err: AWSError, data: NetworkMonitor.Types.CreateProbeOutput) => void): Request<NetworkMonitor.Types.CreateProbeOutput, AWSError>;
  /**
   * Create a probe within a monitor. Once you create a probe, and it begins monitoring your network traffic, you'll incur billing charges for that probe. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. Note the name of the monitorName you want to create the probe for.
   */
  createProbe(callback?: (err: AWSError, data: NetworkMonitor.Types.CreateProbeOutput) => void): Request<NetworkMonitor.Types.CreateProbeOutput, AWSError>;
  /**
   * Deletes a specified monitor. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. 
   */
  deleteMonitor(params: NetworkMonitor.Types.DeleteMonitorInput, callback?: (err: AWSError, data: NetworkMonitor.Types.DeleteMonitorOutput) => void): Request<NetworkMonitor.Types.DeleteMonitorOutput, AWSError>;
  /**
   * Deletes a specified monitor. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. 
   */
  deleteMonitor(callback?: (err: AWSError, data: NetworkMonitor.Types.DeleteMonitorOutput) => void): Request<NetworkMonitor.Types.DeleteMonitorOutput, AWSError>;
  /**
   * Deletes the specified probe. Once a probe is deleted you'll no longer incur any billing fees for that probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. You can only delete a single probe at a time using this action. 
   */
  deleteProbe(params: NetworkMonitor.Types.DeleteProbeInput, callback?: (err: AWSError, data: NetworkMonitor.Types.DeleteProbeOutput) => void): Request<NetworkMonitor.Types.DeleteProbeOutput, AWSError>;
  /**
   * Deletes the specified probe. Once a probe is deleted you'll no longer incur any billing fees for that probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. You can only delete a single probe at a time using this action. 
   */
  deleteProbe(callback?: (err: AWSError, data: NetworkMonitor.Types.DeleteProbeOutput) => void): Request<NetworkMonitor.Types.DeleteProbeOutput, AWSError>;
  /**
   * Returns details about a specific monitor.  This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. 
   */
  getMonitor(params: NetworkMonitor.Types.GetMonitorInput, callback?: (err: AWSError, data: NetworkMonitor.Types.GetMonitorOutput) => void): Request<NetworkMonitor.Types.GetMonitorOutput, AWSError>;
  /**
   * Returns details about a specific monitor.  This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. 
   */
  getMonitor(callback?: (err: AWSError, data: NetworkMonitor.Types.GetMonitorOutput) => void): Request<NetworkMonitor.Types.GetMonitorOutput, AWSError>;
  /**
   * Returns the details about a probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. 
   */
  getProbe(params: NetworkMonitor.Types.GetProbeInput, callback?: (err: AWSError, data: NetworkMonitor.Types.GetProbeOutput) => void): Request<NetworkMonitor.Types.GetProbeOutput, AWSError>;
  /**
   * Returns the details about a probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. 
   */
  getProbe(callback?: (err: AWSError, data: NetworkMonitor.Types.GetProbeOutput) => void): Request<NetworkMonitor.Types.GetProbeOutput, AWSError>;
  /**
   * Returns a list of all of your monitors.
   */
  listMonitors(params: NetworkMonitor.Types.ListMonitorsInput, callback?: (err: AWSError, data: NetworkMonitor.Types.ListMonitorsOutput) => void): Request<NetworkMonitor.Types.ListMonitorsOutput, AWSError>;
  /**
   * Returns a list of all of your monitors.
   */
  listMonitors(callback?: (err: AWSError, data: NetworkMonitor.Types.ListMonitorsOutput) => void): Request<NetworkMonitor.Types.ListMonitorsOutput, AWSError>;
  /**
   * Lists the tags assigned to this resource.
   */
  listTagsForResource(params: NetworkMonitor.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: NetworkMonitor.Types.ListTagsForResourceOutput) => void): Request<NetworkMonitor.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists the tags assigned to this resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: NetworkMonitor.Types.ListTagsForResourceOutput) => void): Request<NetworkMonitor.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Adds key-value pairs to a monitor or probe.
   */
  tagResource(params: NetworkMonitor.Types.TagResourceInput, callback?: (err: AWSError, data: NetworkMonitor.Types.TagResourceOutput) => void): Request<NetworkMonitor.Types.TagResourceOutput, AWSError>;
  /**
   * Adds key-value pairs to a monitor or probe.
   */
  tagResource(callback?: (err: AWSError, data: NetworkMonitor.Types.TagResourceOutput) => void): Request<NetworkMonitor.Types.TagResourceOutput, AWSError>;
  /**
   * Removes a key-value pair from a monitor or probe.
   */
  untagResource(params: NetworkMonitor.Types.UntagResourceInput, callback?: (err: AWSError, data: NetworkMonitor.Types.UntagResourceOutput) => void): Request<NetworkMonitor.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes a key-value pair from a monitor or probe.
   */
  untagResource(callback?: (err: AWSError, data: NetworkMonitor.Types.UntagResourceOutput) => void): Request<NetworkMonitor.Types.UntagResourceOutput, AWSError>;
  /**
   * Updates the aggregationPeriod for a monitor. Monitors support an aggregationPeriod of either 30 or 60 seconds. This action requires the monitorName and probeId parameter. Run ListMonitors to get a list of monitor names. 
   */
  updateMonitor(params: NetworkMonitor.Types.UpdateMonitorInput, callback?: (err: AWSError, data: NetworkMonitor.Types.UpdateMonitorOutput) => void): Request<NetworkMonitor.Types.UpdateMonitorOutput, AWSError>;
  /**
   * Updates the aggregationPeriod for a monitor. Monitors support an aggregationPeriod of either 30 or 60 seconds. This action requires the monitorName and probeId parameter. Run ListMonitors to get a list of monitor names. 
   */
  updateMonitor(callback?: (err: AWSError, data: NetworkMonitor.Types.UpdateMonitorOutput) => void): Request<NetworkMonitor.Types.UpdateMonitorOutput, AWSError>;
  /**
   * Updates a monitor probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs.  You can update the following para create a monitor with probes using this command. For each probe, you define the following:    state—The state of the probe.    destination— The target destination IP address for the probe.    destinationPort—Required only if the protocol is TCP.    protocol—The communication protocol between the source and destination. This will be either TCP or ICMP.    packetSize—The size of the packets. This must be a number between 56 and 8500.   (Optional) tags —Key-value pairs created and assigned to the probe.  
   */
  updateProbe(params: NetworkMonitor.Types.UpdateProbeInput, callback?: (err: AWSError, data: NetworkMonitor.Types.UpdateProbeOutput) => void): Request<NetworkMonitor.Types.UpdateProbeOutput, AWSError>;
  /**
   * Updates a monitor probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs.  You can update the following para create a monitor with probes using this command. For each probe, you define the following:    state—The state of the probe.    destination— The target destination IP address for the probe.    destinationPort—Required only if the protocol is TCP.    protocol—The communication protocol between the source and destination. This will be either TCP or ICMP.    packetSize—The size of the packets. This must be a number between 56 and 8500.   (Optional) tags —Key-value pairs created and assigned to the probe.  
   */
  updateProbe(callback?: (err: AWSError, data: NetworkMonitor.Types.UpdateProbeOutput) => void): Request<NetworkMonitor.Types.UpdateProbeOutput, AWSError>;
}
declare namespace NetworkMonitor {
  export type AddressFamily = "IPV4"|"IPV6"|string;
  export type AggregationPeriod = number;
  export type Arn = string;
  export interface CreateMonitorInput {
    /**
     * The name identifying the monitor. It can contain only letters, underscores (_), or dashes (-), and can be up to 200 characters.
     */
    monitorName: ResourceName;
    /**
     * Displays a list of all of the probes created for a monitor.
     */
    probes?: CreateMonitorProbeInputList;
    /**
     * The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either 30 or 60. 60 is the default if no period is chosen.
     */
    aggregationPeriod?: AggregationPeriod;
    /**
     * Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.
     */
    clientToken?: String;
    /**
     * The list of key-value pairs created and assigned to the monitor.
     */
    tags?: TagMap;
  }
  export interface CreateMonitorOutput {
    /**
     * The ARN of the monitor.
     */
    monitorArn: MonitorArn;
    /**
     * The name of the monitor.
     */
    monitorName: ResourceName;
    /**
     * The state of the monitor.
     */
    state: MonitorState;
    /**
     * The number of seconds that metrics are aggregated by and sent to Amazon CloudWatch. This will be either 30 or 60. 
     */
    aggregationPeriod?: AggregationPeriod;
    /**
     * The list of key-value pairs assigned to the monitor.
     */
    tags?: TagMap;
  }
  export interface CreateMonitorProbeInput {
    /**
     * The ARN of the subnet.
     */
    sourceArn: Arn;
    /**
     * The destination IP address. This must be either IPV4 or IPV6.
     */
    destination: Destination;
    /**
     * The port associated with the destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.
     */
    destinationPort?: Port;
    /**
     * The protocol used for the network traffic between the source and destination. This must be either TCP or ICMP.
     */
    protocol: Protocol;
    /**
     * The size of the packets sent between the source and destination. This must be a number between 56 and 8500.
     */
    packetSize?: PacketSize;
    /**
     * The list of key-value pairs created and assigned to the monitor.
     */
    probeTags?: TagMap;
  }
  export type CreateMonitorProbeInputList = CreateMonitorProbeInput[];
  export interface CreateProbeInput {
    /**
     * The name of the monitor to associated with the probe. 
     */
    monitorName: ResourceName;
    /**
     * Describes the details of an individual probe for a monitor.
     */
    probe: ProbeInput;
    /**
     * Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.
     */
    clientToken?: String;
    /**
     * The list of key-value pairs created and assigned to the probe.
     */
    tags?: TagMap;
  }
  export interface CreateProbeOutput {
    /**
     * The ID of the probe for which details are returned.
     */
    probeId?: ProbeId;
    /**
     * The ARN of the probe.
     */
    probeArn?: Arn;
    /**
     * The ARN of the probe.
     */
    sourceArn: Arn;
    /**
     * The destination IP address for the monitor. This must be either an IPv4 or IPv6 address.
     */
    destination: Destination;
    /**
     * The port associated with the destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.
     */
    destinationPort?: Port;
    /**
     * The protocol used for the network traffic between the source and destination. This must be either TCP or ICMP.
     */
    protocol: Protocol;
    /**
     * The size of the packets sent between the source and destination. This must be a number between 56 and 8500.
     */
    packetSize?: PacketSize;
    /**
     * Indicates whether the IP address is IPV4 or IPV6.
     */
    addressFamily?: AddressFamily;
    /**
     * The ID of the source VPC or subnet.
     */
    vpcId?: VpcId;
    /**
     * The state of the probe.
     */
    state?: ProbeState;
    /**
     * The time and date that the probe was created.
     */
    createdAt?: Iso8601Timestamp;
    /**
     * The time and date when the probe was last modified. 
     */
    modifiedAt?: Iso8601Timestamp;
    /**
     * The list of key-value pairs assigned to the probe.
     */
    tags?: TagMap;
  }
  export interface DeleteMonitorInput {
    /**
     * The name of the monitor to delete. 
     */
    monitorName: ResourceName;
  }
  export interface DeleteMonitorOutput {
  }
  export interface DeleteProbeInput {
    /**
     * The name of the monitor to delete. 
     */
    monitorName: ResourceName;
    /**
     * The ID of the probe to delete. 
     */
    probeId: ProbeId;
  }
  export interface DeleteProbeOutput {
  }
  export type Destination = string;
  export interface GetMonitorInput {
    /**
     * The name of the monitor that details are returned for.
     */
    monitorName: ResourceName;
  }
  export interface GetMonitorOutput {
    /**
     * The ARN of the selected monitor.
     */
    monitorArn: MonitorArn;
    /**
     * The name of the monitor. 
     */
    monitorName: ResourceName;
    /**
     * Lists the status of the state of each monitor. 
     */
    state: MonitorState;
    /**
     * The aggregation period for the specified monitor.
     */
    aggregationPeriod: AggregationPeriod;
    /**
     * The list of key-value pairs assigned to the monitor.
     */
    tags?: TagMap;
    /**
     * The details about each probe associated with that monitor. 
     */
    probes?: ProbeList;
    /**
     * The time and date when the monitor was created.
     */
    createdAt: Iso8601Timestamp;
    /**
     * The time and date when the monitor was last modified.
     */
    modifiedAt: Iso8601Timestamp;
  }
  export interface GetProbeInput {
    /**
     * The name of the monitor associated with the probe. Run ListMonitors to get a list of monitor names.
     */
    monitorName: ResourceName;
    /**
     * The ID of the probe to get information about. Run GetMonitor action to get a list of probes and probe IDs for the monitor.
     */
    probeId: ProbeId;
  }
  export interface GetProbeOutput {
    /**
     * The ID of the probe for which details are returned.
     */
    probeId?: ProbeId;
    /**
     * The ARN of the probe.
     */
    probeArn?: Arn;
    /**
     * The ARN of the probe.
     */
    sourceArn: Arn;
    /**
     * The destination IP address for the monitor. This must be either an IPv4 or IPv6 address.
     */
    destination: Destination;
    /**
     * The port associated with the destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.
     */
    destinationPort?: Port;
    /**
     * The protocol used for the network traffic between the source and destination. This must be either TCP or ICMP.
     */
    protocol: Protocol;
    /**
     * The size of the packets sent between the source and destination. This must be a number between 56 and 8500.
     */
    packetSize?: PacketSize;
    /**
     * Indicates whether the IP address is IPV4 or IPV6.
     */
    addressFamily?: AddressFamily;
    /**
     * The ID of the source VPC or subnet.
     */
    vpcId?: VpcId;
    /**
     * The state of the probe.
     */
    state?: ProbeState;
    /**
     * The time and date that the probe was created.
     */
    createdAt?: Iso8601Timestamp;
    /**
     * The time and date that the probe was last modified.
     */
    modifiedAt?: Iso8601Timestamp;
    /**
     * The list of key-value pairs assigned to the probe.
     */
    tags?: TagMap;
  }
  export type Iso8601Timestamp = Date;
  export interface ListMonitorsInput {
    /**
     * The token for the next page of results.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If MaxResults is given a value larger than 100, only 100 results are returned.
     */
    maxResults?: MaxResults;
    /**
     * The list of all monitors and their states.
     */
    state?: String;
  }
  export interface ListMonitorsOutput {
    /**
     * Lists individual details about each of your monitors.
     */
    monitors: MonitorList;
    /**
     * The token for the next page of results.
     */
    nextToken?: String;
  }
  export interface ListTagsForResourceInput {
    /**
     * The 
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * Lists the tags assigned to the resource.
     */
    tags?: TagMap;
  }
  export type MaxResults = number;
  export type MonitorArn = string;
  export type MonitorList = MonitorSummary[];
  export type MonitorState = "PENDING"|"ACTIVE"|"INACTIVE"|"ERROR"|"DELETING"|string;
  export interface MonitorSummary {
    /**
     * The ARN of the monitor.
     */
    monitorArn: MonitorArn;
    /**
     * The name of the monitor.
     */
    monitorName: ResourceName;
    /**
     * The state of the monitor.
     */
    state: MonitorState;
    /**
     * The time, in seconds, that metrics are collected and sent to Amazon CloudWatch. Valid values are either 30 or 60.
     */
    aggregationPeriod?: AggregationPeriod;
    /**
     * The list of key-value pairs assigned to the monitor.
     */
    tags?: TagMap;
  }
  export type PacketSize = number;
  export type PaginationToken = string;
  export type Port = number;
  export interface Probe {
    /**
     * The ID of the probe.
     */
    probeId?: ProbeId;
    /**
     * The ARN of the probe.
     */
    probeArn?: Arn;
    /**
     * The ARN of the probe source subnet.
     */
    sourceArn: Arn;
    /**
     * The destination for the probe. This should be either an IPV4 or IPV6.
     */
    destination: Destination;
    /**
     * The destination port for the probe. This is required only if the protocol is TCP and must be a number between 1 and 65536.
     */
    destinationPort?: Port;
    /**
     * The network protocol for the destination. This can be either TCP or ICMP. If the protocol is TCP, then port is also required.
     */
    protocol: Protocol;
    /**
     * The size of the packets traveling between the source and destination. This must be a number between 56 and 
     */
    packetSize?: PacketSize;
    /**
     * The IPv4 or IPv6 address for the probe.
     */
    addressFamily?: AddressFamily;
    /**
     * The ID of the source VPC subnet.
     */
    vpcId?: VpcId;
    /**
     * The state of the probe.
     */
    state?: ProbeState;
    /**
     * The time and date the probe was created.
     */
    createdAt?: Iso8601Timestamp;
    /**
     * The time and date that the probe was last modified.
     */
    modifiedAt?: Iso8601Timestamp;
    /**
     * The list of key-value pairs created and assigned to the probe.
     */
    tags?: TagMap;
  }
  export type ProbeId = string;
  export interface ProbeInput {
    /**
     * The ARN of the subnet.
     */
    sourceArn: Arn;
    /**
     * The destination IP address. This must be either IPV4 or IPV6.
     */
    destination: Destination;
    /**
     * The port associated with the destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.
     */
    destinationPort?: Port;
    /**
     * The protocol used for the network traffic between the source and destination. This must be either TCP or ICMP.
     */
    protocol: Protocol;
    /**
     * The size of the packets sent between the source and destination. This must be a number between 56 and 8500.
     */
    packetSize?: PacketSize;
    /**
     * The list of key-value pairs created and assigned to the monitor.
     */
    tags?: TagMap;
  }
  export type ProbeList = Probe[];
  export type ProbeState = "PENDING"|"ACTIVE"|"INACTIVE"|"ERROR"|"DELETING"|"DELETED"|string;
  export type Protocol = "TCP"|"ICMP"|string;
  export type ResourceName = string;
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceInput {
    /**
     * The ARN of the monitor or probe to tag.
     */
    resourceArn: Arn;
    /**
     * The list of key-value pairs assigned to the monitor or probe.
     */
    tags: TagMap;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export interface UntagResourceInput {
    /**
     * The ARN of the monitor or probe that the tag should be removed from. 
     */
    resourceArn: Arn;
    /**
     * The key-value pa
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateMonitorInput {
    /**
     * The name of the monitor to update. 
     */
    monitorName: ResourceName;
    /**
     * The aggregation time, in seconds, to change to. This must be either 30 or 60. 
     */
    aggregationPeriod: AggregationPeriod;
  }
  export interface UpdateMonitorOutput {
    /**
     * The ARN of the monitor that was updated.
     */
    monitorArn: MonitorArn;
    /**
     * The name of the monitor that was updated.
     */
    monitorName: ResourceName;
    /**
     * The state of the updated monitor.
     */
    state: MonitorState;
    /**
     * The changed aggregation period.
     */
    aggregationPeriod?: AggregationPeriod;
    /**
     * The list of key-value pairs associated with the monitor.
     */
    tags?: TagMap;
  }
  export interface UpdateProbeInput {
    /**
     * The name of the monitor that the probe was updated for.
     */
    monitorName: ResourceName;
    /**
     * The ID of the probe to update.
     */
    probeId: ProbeId;
    /**
     * The state of the probe update.
     */
    state?: ProbeState;
    /**
     * The updated IP address for the probe destination. This must be either an IPv4 or IPv6 address.
     */
    destination?: Destination;
    /**
     * The updated port for the probe destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.
     */
    destinationPort?: Port;
    /**
     * The updated network protocol for the destination. This can be either TCP or ICMP. If the protocol is TCP, then port is also required.
     */
    protocol?: Protocol;
    /**
     * he updated packets size for network traffic between the source and destination. This must be a number between 56 and 8500.
     */
    packetSize?: PacketSize;
  }
  export interface UpdateProbeOutput {
    /**
     * The updated ID of the probe.
     */
    probeId?: ProbeId;
    /**
     * The updated ARN of the probe.
     */
    probeArn?: Arn;
    /**
     * The updated ARN of the source subnet.
     */
    sourceArn: Arn;
    /**
     * The updated destination IP address for the probe.
     */
    destination: Destination;
    /**
     * The updated destination port. This must be a number between 1 and 65536.
     */
    destinationPort?: Port;
    /**
     * The updated protocol for the probe.
     */
    protocol: Protocol;
    /**
     * The updated packet size for the probe. 
     */
    packetSize?: PacketSize;
    /**
     * The updated IP address family. This must be either IPV4 or IPV6.
     */
    addressFamily?: AddressFamily;
    /**
     * The updated ID of the source VPC subnet ID.
     */
    vpcId?: VpcId;
    /**
     * The state of the updated probe.
     */
    state?: ProbeState;
    /**
     * The time and date that the probe was created.
     */
    createdAt?: Iso8601Timestamp;
    /**
     * The time and date that the probe was last updated.
     */
    modifiedAt?: Iso8601Timestamp;
    /**
     * Update tags for a probe.
     */
    tags?: TagMap;
  }
  export type VpcId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-08-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the NetworkMonitor client.
   */
  export import Types = NetworkMonitor;
}
export = NetworkMonitor;
