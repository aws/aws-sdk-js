import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class InternetMonitor extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: InternetMonitor.Types.ClientConfiguration)
  config: Config & InternetMonitor.Types.ClientConfiguration;
  /**
   * Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the city-networks, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see Using Amazon CloudWatch Internet Monitor in the Amazon CloudWatch User Guide. When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide.
   */
  createMonitor(params: InternetMonitor.Types.CreateMonitorInput, callback?: (err: AWSError, data: InternetMonitor.Types.CreateMonitorOutput) => void): Request<InternetMonitor.Types.CreateMonitorOutput, AWSError>;
  /**
   * Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the city-networks, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see Using Amazon CloudWatch Internet Monitor in the Amazon CloudWatch User Guide. When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide.
   */
  createMonitor(callback?: (err: AWSError, data: InternetMonitor.Types.CreateMonitorOutput) => void): Request<InternetMonitor.Types.CreateMonitorOutput, AWSError>;
  /**
   * Deletes a monitor in Amazon CloudWatch Internet Monitor. 
   */
  deleteMonitor(params: InternetMonitor.Types.DeleteMonitorInput, callback?: (err: AWSError, data: InternetMonitor.Types.DeleteMonitorOutput) => void): Request<InternetMonitor.Types.DeleteMonitorOutput, AWSError>;
  /**
   * Deletes a monitor in Amazon CloudWatch Internet Monitor. 
   */
  deleteMonitor(callback?: (err: AWSError, data: InternetMonitor.Types.DeleteMonitorOutput) => void): Request<InternetMonitor.Types.DeleteMonitorOutput, AWSError>;
  /**
   * Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location. The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on. Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.
   */
  getHealthEvent(params: InternetMonitor.Types.GetHealthEventInput, callback?: (err: AWSError, data: InternetMonitor.Types.GetHealthEventOutput) => void): Request<InternetMonitor.Types.GetHealthEventOutput, AWSError>;
  /**
   * Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location. The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on. Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.
   */
  getHealthEvent(callback?: (err: AWSError, data: InternetMonitor.Types.GetHealthEventOutput) => void): Request<InternetMonitor.Types.GetHealthEventOutput, AWSError>;
  /**
   * Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
   */
  getMonitor(params: InternetMonitor.Types.GetMonitorInput, callback?: (err: AWSError, data: InternetMonitor.Types.GetMonitorOutput) => void): Request<InternetMonitor.Types.GetMonitorOutput, AWSError>;
  /**
   * Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
   */
  getMonitor(callback?: (err: AWSError, data: InternetMonitor.Types.GetMonitorOutput) => void): Request<InternetMonitor.Types.GetMonitorOutput, AWSError>;
  /**
   * Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.  Health events that have start times during the time frame that is requested are not included in the list of health events. 
   */
  listHealthEvents(params: InternetMonitor.Types.ListHealthEventsInput, callback?: (err: AWSError, data: InternetMonitor.Types.ListHealthEventsOutput) => void): Request<InternetMonitor.Types.ListHealthEventsOutput, AWSError>;
  /**
   * Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.  Health events that have start times during the time frame that is requested are not included in the list of health events. 
   */
  listHealthEvents(callback?: (err: AWSError, data: InternetMonitor.Types.ListHealthEventsOutput) => void): Request<InternetMonitor.Types.ListHealthEventsOutput, AWSError>;
  /**
   * Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
   */
  listMonitors(params: InternetMonitor.Types.ListMonitorsInput, callback?: (err: AWSError, data: InternetMonitor.Types.ListMonitorsOutput) => void): Request<InternetMonitor.Types.ListMonitorsOutput, AWSError>;
  /**
   * Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
   */
  listMonitors(callback?: (err: AWSError, data: InternetMonitor.Types.ListMonitorsOutput) => void): Request<InternetMonitor.Types.ListMonitorsOutput, AWSError>;
  /**
   * Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
   */
  listTagsForResource(params: InternetMonitor.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: InternetMonitor.Types.ListTagsForResourceOutput) => void): Request<InternetMonitor.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
   */
  listTagsForResource(callback?: (err: AWSError, data: InternetMonitor.Types.ListTagsForResourceOutput) => void): Request<InternetMonitor.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor. A minimum of one tag is required for this call. It returns an error if you use the TagResource request with 0 tags.
   */
  tagResource(params: InternetMonitor.Types.TagResourceInput, callback?: (err: AWSError, data: InternetMonitor.Types.TagResourceOutput) => void): Request<InternetMonitor.Types.TagResourceOutput, AWSError>;
  /**
   * Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor. A minimum of one tag is required for this call. It returns an error if you use the TagResource request with 0 tags.
   */
  tagResource(callback?: (err: AWSError, data: InternetMonitor.Types.TagResourceOutput) => void): Request<InternetMonitor.Types.TagResourceOutput, AWSError>;
  /**
   * Removes a tag from a resource.
   */
  untagResource(params: InternetMonitor.Types.UntagResourceInput, callback?: (err: AWSError, data: InternetMonitor.Types.UntagResourceOutput) => void): Request<InternetMonitor.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes a tag from a resource.
   */
  untagResource(callback?: (err: AWSError, data: InternetMonitor.Types.UntagResourceOutput) => void): Request<InternetMonitor.Types.UntagResourceOutput, AWSError>;
  /**
   * Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide.
   */
  updateMonitor(params: InternetMonitor.Types.UpdateMonitorInput, callback?: (err: AWSError, data: InternetMonitor.Types.UpdateMonitorOutput) => void): Request<InternetMonitor.Types.UpdateMonitorOutput, AWSError>;
  /**
   * Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide.
   */
  updateMonitor(callback?: (err: AWSError, data: InternetMonitor.Types.UpdateMonitorOutput) => void): Request<InternetMonitor.Types.UpdateMonitorOutput, AWSError>;
}
declare namespace InternetMonitor {
  export type Arn = string;
  export interface AvailabilityMeasurement {
    /**
     * Experience scores, or health scores are calculated for different geographic and network provider combinations (that is, different granularities) and also summed into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor provides global health scores. The Amazon CloudWatch Internet Monitor chapter in the CloudWatch User Guide includes detailed information about how Internet Monitor calculates health scores, including performance and availability scores, and when it creates and resolves health events. For more information, see How Amazon Web Services calculates performance and availability scores in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    ExperienceScore?: Double;
    /**
     * The percentage of impact caused by a health event for total traffic globally. For information about how Internet Monitor calculates impact, see Inside Internet Monitor in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User Guide.
     */
    PercentOfTotalTrafficImpacted?: Double;
    /**
     * The percentage of impact caused by a health event for client location traffic globally. For information about how Internet Monitor calculates impact, see Inside Internet Monitor in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User Guide.
     */
    PercentOfClientLocationImpacted?: Double;
  }
  export interface CreateMonitorInput {
    /**
     * The name of the monitor. 
     */
    MonitorName: ResourceName;
    /**
     * The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). You can add a combination of Amazon Virtual Private Clouds (VPCs) and Amazon CloudFront distributions, or you can add Amazon WorkSpaces directories. You can't add all three types of resources.  If you add only VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity. 
     */
    Resources?: SetOfARNs;
    /**
     * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.
     */
    ClientToken?: String;
    /**
     * The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor.
     */
    Tags?: TagMap;
    /**
     * The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the network or ASN, such as an internet service provider (ISP), that clients access the resources through. This limit helps control billing costs. To learn more, see Choosing a city-network maximum value  in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    MaxCityNetworksToMonitor?: MaxCityNetworksToMonitor;
    /**
     * Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs.
     */
    InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
    /**
     * The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.
     */
    TrafficPercentageToMonitor?: TrafficPercentageToMonitor;
  }
  export interface CreateMonitorOutput {
    /**
     * The Amazon Resource Name (ARN) of the monitor.
     */
    Arn: MonitorArn;
    /**
     * The status of a monitor.
     */
    Status: MonitorConfigState;
  }
  export interface DeleteMonitorInput {
    /**
     * The name of the monitor to delete.
     */
    MonitorName: ResourceName;
  }
  export interface DeleteMonitorOutput {
  }
  export type Double = number;
  export interface GetHealthEventInput {
    /**
     * The name of the monitor.
     */
    MonitorName: ResourceName;
    /**
     * The internally generated identifier of a health event. Because EventID contains the forward slash (“/”) character, you must URL-encode the EventID field in the request URL.
     */
    EventId: HealthEventName;
  }
  export interface GetHealthEventOutput {
    /**
     * The Amazon Resource Name (ARN) of the event.
     */
    EventArn: Arn;
    /**
     * The internally generated identifier of a health event.
     */
    EventId: HealthEventName;
    /**
     * The time when a health event started.
     */
    StartedAt: SyntheticTimestamp_date_time;
    /**
     * The time when a health event was resolved. If the health event is still active, the end time is not set.
     */
    EndedAt?: SyntheticTimestamp_date_time;
    /**
     * The time when a health event was created.
     */
    CreatedAt?: SyntheticTimestamp_date_time;
    /**
     * The time when a health event was last updated or recalculated.
     */
    LastUpdatedAt: SyntheticTimestamp_date_time;
    /**
     * The locations affected by a health event.
     */
    ImpactedLocations: ImpactedLocationsList;
    /**
     * The status of a health event.
     */
    Status: HealthEventStatus;
    /**
     * The impact on total traffic that a health event has.
     */
    PercentOfTotalTrafficImpacted?: Double;
    /**
     * The type of impairment of a specific health event.
     */
    ImpactType: HealthEventImpactType;
  }
  export interface GetMonitorInput {
    /**
     * The name of the monitor.
     */
    MonitorName: ResourceName;
  }
  export interface GetMonitorOutput {
    /**
     * The name of the monitor.
     */
    MonitorName: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the monitor.
     */
    MonitorArn: MonitorArn;
    /**
     * The resources that have been added for the monitor. Resources are listed by their Amazon Resource Names (ARNs).
     */
    Resources: SetOfARNs;
    /**
     * The status of the monitor.
     */
    Status: MonitorConfigState;
    /**
     * The time when the monitor was created.
     */
    CreatedAt: SyntheticTimestamp_date_time;
    /**
     * The last time that the monitor was modified.
     */
    ModifiedAt: SyntheticTimestamp_date_time;
    /**
     * The health of the data processing for the monitor.
     */
    ProcessingStatus?: MonitorProcessingStatusCode;
    /**
     * Additional information about the health of the data processing for the monitor.
     */
    ProcessingStatusInfo?: String;
    /**
     * The tags that have been added to monitor.
     */
    Tags?: TagMap;
    /**
     * The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the network or ASN, such as an internet service provider (ISP), that clients access the resources through. This limit helps control billing costs. To learn more, see Choosing a city-network maximum value  in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    MaxCityNetworksToMonitor?: MaxCityNetworksToMonitor;
    /**
     * Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.
     */
    InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
    /**
     * The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.
     */
    TrafficPercentageToMonitor?: TrafficPercentageToMonitor;
  }
  export interface HealthEvent {
    /**
     * The Amazon Resource Name (ARN) of the event.
     */
    EventArn: Arn;
    /**
     * The internally generated identifier of a specific network traffic impairment health event.
     */
    EventId: HealthEventName;
    /**
     * When a health event started.
     */
    StartedAt: SyntheticTimestamp_date_time;
    /**
     * The time when a health event ended. If the health event is still active, then the end time is not set.
     */
    EndedAt?: SyntheticTimestamp_date_time;
    /**
     * When the health event was created.
     */
    CreatedAt?: SyntheticTimestamp_date_time;
    /**
     * When the health event was last updated.
     */
    LastUpdatedAt: SyntheticTimestamp_date_time;
    /**
     * The locations impacted by the health event.
     */
    ImpactedLocations: ImpactedLocationsList;
    /**
     * Health event list member.
     */
    Status: HealthEventStatus;
    /**
     * The impact on global traffic monitored by this monitor for this health event.
     */
    PercentOfTotalTrafficImpacted?: Double;
    /**
     * The type of impairment for a health event.
     */
    ImpactType: HealthEventImpactType;
  }
  export type HealthEventImpactType = "AVAILABILITY"|"PERFORMANCE"|string;
  export type HealthEventList = HealthEvent[];
  export type HealthEventName = string;
  export type HealthEventStatus = "ACTIVE"|"RESOLVED"|string;
  export interface ImpactedLocation {
    /**
     * The name of the network at an impacted location.
     */
    ASName: String;
    /**
     * The Autonomous System Number (ASN) of the network at an impacted location.
     */
    ASNumber: Long;
    /**
     * The name of the country where the health event is located.
     */
    Country: String;
    /**
     * The subdivision location where the health event is located. The subdivision usually maps to states in most countries (including the United States). For United Kingdom, it maps to a country (England, Scotland, Wales) or province (Northern Ireland).
     */
    Subdivision?: String;
    /**
     * The metro area where the health event is located. Metro indicates a metropolitan region in the United States, such as the region around New York City. In non-US countries, this is a second-level subdivision. For example, in the United Kingdom, it could be a county, a London borough, a unitary authority, council area, and so on.
     */
    Metro?: String;
    /**
     * The name of the city where the health event is located.
     */
    City?: String;
    /**
     * The latitude where the health event is located.
     */
    Latitude?: Double;
    /**
     * The longitude where the health event is located.
     */
    Longitude?: Double;
    /**
     * The country code where the health event is located. The ISO 3166-2 codes for the country is provided, when available. 
     */
    CountryCode?: String;
    /**
     * The subdivision code where the health event is located. The ISO 3166-2 codes for country subdivisions is provided, when available. 
     */
    SubdivisionCode?: String;
    /**
     * The service location where the health event is located.
     */
    ServiceLocation?: String;
    /**
     * The status of the health event at an impacted location.
     */
    Status: HealthEventStatus;
    /**
     * The cause of the impairment. There are two types of network impairments: Amazon Web Services network issues or internet issues. Internet issues are typically a problem with a network provider, like an internet service provider (ISP).
     */
    CausedBy?: NetworkImpairment;
    /**
     * The calculated health at a specific location.
     */
    InternetHealth?: InternetHealth;
  }
  export type ImpactedLocationsList = ImpactedLocation[];
  export interface InternetHealth {
    /**
     * Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair. For more information, see How Internet Monitor calculates performance and availability scores in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    Availability?: AvailabilityMeasurement;
    /**
     * Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair. For more information, see How Internet Monitor calculates performance and availability scores in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    Performance?: PerformanceMeasurement;
  }
  export interface InternetMeasurementsLogDelivery {
    /**
     * The configuration information for publishing Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix for the S3 bucket to store the measurements, and the delivery status. The delivery status is ENABLED or DISABLED, depending on whether you choose to deliver internet measurements to S3 logs.
     */
    S3Config?: S3Config;
  }
  export interface ListHealthEventsInput {
    /**
     * The name of the monitor.
     */
    MonitorName: ResourceName;
    /**
     * The time when a health event started.
     */
    StartTime?: SyntheticTimestamp_date_time;
    /**
     * The time when a health event ended. If the health event is still ongoing, then the end time is not set.
     */
    EndTime?: SyntheticTimestamp_date_time;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: String;
    /**
     * The number of health event objects that you want to return with this call. 
     */
    MaxResults?: MaxResults;
    /**
     * The status of a health event.
     */
    EventStatus?: HealthEventStatus;
  }
  export interface ListHealthEventsOutput {
    /**
     * A list of health events.
     */
    HealthEvents: HealthEventList;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: String;
  }
  export interface ListMonitorsInput {
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: String;
    /**
     * The number of monitor objects that you want to return with this call.
     */
    MaxResults?: MaxResults;
    /**
     * The status of a monitor. This includes the status of the data processing for the monitor and the status of the monitor itself. For information about the statuses for a monitor, see  Monitor.
     */
    MonitorStatus?: String;
  }
  export interface ListMonitorsOutput {
    /**
     * A list of monitors.
     */
    Monitors: MonitorList;
    /**
     * The token for the next set of results. You receive this token from a previous call.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceInput {
    /**
     * The Amazon Resource Name (ARN) for a resource.
     */
    ResourceArn: MonitorArn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * Tags for a resource.
     */
    Tags?: TagMap;
  }
  export type LogDeliveryStatus = "ENABLED"|"DISABLED"|string;
  export type Long = number;
  export type MaxCityNetworksToMonitor = number;
  export type MaxResults = number;
  export interface Monitor {
    /**
     * The name of the monitor.
     */
    MonitorName: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the monitor.
     */
    MonitorArn: MonitorArn;
    /**
     * The status of a monitor.
     */
    Status: MonitorConfigState;
    /**
     * The health of data processing for the monitor.
     */
    ProcessingStatus?: MonitorProcessingStatusCode;
  }
  export type MonitorArn = string;
  export type MonitorConfigState = "PENDING"|"ACTIVE"|"INACTIVE"|"ERROR"|string;
  export type MonitorList = Monitor[];
  export type MonitorProcessingStatusCode = "OK"|"INACTIVE"|"COLLECTING_DATA"|"INSUFFICIENT_DATA"|"FAULT_SERVICE"|"FAULT_ACCESS_CLOUDWATCH"|string;
  export interface Network {
    /**
     * The internet provider name or network name.
     */
    ASName: String;
    /**
     * The Autonomous System Number (ASN) of the internet provider or network.
     */
    ASNumber: Long;
  }
  export interface NetworkImpairment {
    /**
     * The networks that could be impacted by a network impairment event.
     */
    Networks: NetworkList;
    /**
     * The combination of the Autonomous System Number (ASN) of the network and the name of the network.
     */
    AsPath: NetworkList;
    /**
     * Type of network impairment.
     */
    NetworkEventType: TriangulationEventType;
  }
  export type NetworkList = Network[];
  export interface PerformanceMeasurement {
    /**
     * Experience scores, or health scores, are calculated for different geographic and network provider combinations (that is, different granularities) and also totaled into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor provides global health scores. The Amazon CloudWatch Internet Monitor chapter in the CloudWatch User Guide includes detailed information about how Internet Monitor calculates health scores, including performance and availability scores, and when it creates and resolves health events. For more information, see How Amazon Web Services calculates performance and availability scores in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    ExperienceScore?: Double;
    /**
     * How much performance impact was caused by a health event for total traffic globally. For performance, this is the percentage of how much latency increased during the event compared to typical performance for your application traffic globally.  For more information, see When Amazon Web Services creates and resolves health events in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    PercentOfTotalTrafficImpacted?: Double;
    /**
     * How much performance impact was caused by a health event at a client location. For performance, this is the percentage of how much latency increased during the event compared to typical performance for traffic, from this client location to an Amazon Web Services location, using a specific client network.  For more information, see When Amazon Web Services creates and resolves health events in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    PercentOfClientLocationImpacted?: Double;
    /**
     * This is the percentage of how much round-trip time increased during the event compared to typical round-trip time for your application for traffic.  For more information, see When Amazon Web Services creates and resolves health events in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.
     */
    RoundTripTime?: RoundTripTime;
  }
  export type ResourceName = string;
  export interface RoundTripTime {
    /**
     * RTT at the 50th percentile (p50).
     */
    P50?: Double;
    /**
     * RTT at the 90th percentile (p90). 
     */
    P90?: Double;
    /**
     * RTT at the 95th percentile (p95). 
     */
    P95?: Double;
  }
  export interface S3Config {
    /**
     * The Amazon S3 bucket name.
     */
    BucketName?: S3ConfigBucketNameString;
    /**
     * The Amazon S3 bucket prefix.
     */
    BucketPrefix?: String;
    /**
     * The status of publishing Internet Monitor internet measurements to an Amazon S3 bucket.
     */
    LogDeliveryStatus?: LogDeliveryStatus;
  }
  export type S3ConfigBucketNameString = string;
  export type SetOfARNs = Arn[];
  export type String = string;
  export type SyntheticTimestamp_date_time = Date;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceInput {
    /**
     * The Amazon Resource Name (ARN) for a tag that you add to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
     */
    ResourceArn: MonitorArn;
    /**
     * Tags that you add to a resource. You can add a maximum of 50 tags in Internet Monitor.
     */
    Tags: TagMap;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type TrafficPercentageToMonitor = number;
  export type TriangulationEventType = "AWS"|"Internet"|string;
  export interface UntagResourceInput {
    /**
     * The Amazon Resource Name (ARN) for a tag you remove a resource from.
     */
    ResourceArn: MonitorArn;
    /**
     * Tag keys that you remove from a resource.
     */
    TagKeys: TagKeys;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateMonitorInput {
    /**
     * The name of the monitor. 
     */
    MonitorName: ResourceName;
    /**
     * The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). You can add a combination of Amazon Virtual Private Clouds (VPCs) and Amazon CloudFront distributions, or you can add Amazon WorkSpaces directories. You can't add all three types of resources.  If you add only VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity. 
     */
    ResourcesToAdd?: SetOfARNs;
    /**
     * The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs).
     */
    ResourcesToRemove?: SetOfARNs;
    /**
     * The status for a monitor. The accepted values for Status with the UpdateMonitor API call are the following: ACTIVE and INACTIVE. The following values are not accepted: PENDING, and ERROR.
     */
    Status?: MonitorConfigState;
    /**
     * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client token for other API requests.
     */
    ClientToken?: String;
    /**
     * The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the network or ASN, such as an internet service provider, that clients access the resources through.
     */
    MaxCityNetworksToMonitor?: MaxCityNetworksToMonitor;
    /**
     * Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.
     */
    InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
    /**
     * The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.
     */
    TrafficPercentageToMonitor?: TrafficPercentageToMonitor;
  }
  export interface UpdateMonitorOutput {
    /**
     * The Amazon Resource Name (ARN) of the monitor.
     */
    MonitorArn: MonitorArn;
    /**
     * The status of a monitor.
     */
    Status: MonitorConfigState;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-06-03"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the InternetMonitor client.
   */
  export import Types = InternetMonitor;
}
export = InternetMonitor;
