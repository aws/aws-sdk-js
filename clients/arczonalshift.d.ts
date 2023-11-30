import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ARCZonalShift extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ARCZonalShift.Types.ClientConfiguration)
  config: Config & ARCZonalShift.Types.ClientConfiguration;
  /**
   * Cancel a zonal shift in Amazon Route 53 Application Recovery Controller. To cancel the zonal shift, specify the zonal shift ID. A zonal shift can be one that you've started for a resource in your Amazon Web Services account in an Amazon Web Services Region, or it can be a zonal shift started by a practice run with zonal autoshift. 
   */
  cancelZonalShift(params: ARCZonalShift.Types.CancelZonalShiftRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.ZonalShift) => void): Request<ARCZonalShift.Types.ZonalShift, AWSError>;
  /**
   * Cancel a zonal shift in Amazon Route 53 Application Recovery Controller. To cancel the zonal shift, specify the zonal shift ID. A zonal shift can be one that you've started for a resource in your Amazon Web Services account in an Amazon Web Services Region, or it can be a zonal shift started by a practice run with zonal autoshift. 
   */
  cancelZonalShift(callback?: (err: AWSError, data: ARCZonalShift.Types.ZonalShift) => void): Request<ARCZonalShift.Types.ZonalShift, AWSError>;
  /**
   * A practice run configuration for zonal autoshift is required when you enable zonal autoshift. A practice run configuration includes specifications for blocked dates and blocked time windows, and for Amazon CloudWatch alarms that you create to use with practice runs. The alarms that you specify are an outcome alarm, to monitor application health during practice runs and, optionally, a blocking alarm, to block practice runs from starting. For more information, see  Considerations when you configure zonal autoshift in the Amazon Route 53 Application Recovery Controller Developer Guide.
   */
  createPracticeRunConfiguration(params: ARCZonalShift.Types.CreatePracticeRunConfigurationRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.CreatePracticeRunConfigurationResponse) => void): Request<ARCZonalShift.Types.CreatePracticeRunConfigurationResponse, AWSError>;
  /**
   * A practice run configuration for zonal autoshift is required when you enable zonal autoshift. A practice run configuration includes specifications for blocked dates and blocked time windows, and for Amazon CloudWatch alarms that you create to use with practice runs. The alarms that you specify are an outcome alarm, to monitor application health during practice runs and, optionally, a blocking alarm, to block practice runs from starting. For more information, see  Considerations when you configure zonal autoshift in the Amazon Route 53 Application Recovery Controller Developer Guide.
   */
  createPracticeRunConfiguration(callback?: (err: AWSError, data: ARCZonalShift.Types.CreatePracticeRunConfigurationResponse) => void): Request<ARCZonalShift.Types.CreatePracticeRunConfigurationResponse, AWSError>;
  /**
   * Deletes the practice run configuration for a resource. Before you can delete a practice run configuration for a resource., you must disable zonal autoshift for the resource. Practice runs must be configured for zonal autoshift to be enabled.
   */
  deletePracticeRunConfiguration(params: ARCZonalShift.Types.DeletePracticeRunConfigurationRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.DeletePracticeRunConfigurationResponse) => void): Request<ARCZonalShift.Types.DeletePracticeRunConfigurationResponse, AWSError>;
  /**
   * Deletes the practice run configuration for a resource. Before you can delete a practice run configuration for a resource., you must disable zonal autoshift for the resource. Practice runs must be configured for zonal autoshift to be enabled.
   */
  deletePracticeRunConfiguration(callback?: (err: AWSError, data: ARCZonalShift.Types.DeletePracticeRunConfigurationResponse) => void): Request<ARCZonalShift.Types.DeletePracticeRunConfigurationResponse, AWSError>;
  /**
   * Get information about a resource that's been registered for zonal shifts with Amazon Route 53 Application Recovery Controller in this Amazon Web Services Region. Resources that are registered for zonal shifts are managed resources in Route 53 ARC. You can start zonal shifts and configure zonal autoshift for managed resources. At this time, you can only start a zonal shift or configure zonal autoshift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
   */
  getManagedResource(params: ARCZonalShift.Types.GetManagedResourceRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.GetManagedResourceResponse) => void): Request<ARCZonalShift.Types.GetManagedResourceResponse, AWSError>;
  /**
   * Get information about a resource that's been registered for zonal shifts with Amazon Route 53 Application Recovery Controller in this Amazon Web Services Region. Resources that are registered for zonal shifts are managed resources in Route 53 ARC. You can start zonal shifts and configure zonal autoshift for managed resources. At this time, you can only start a zonal shift or configure zonal autoshift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
   */
  getManagedResource(callback?: (err: AWSError, data: ARCZonalShift.Types.GetManagedResourceResponse) => void): Request<ARCZonalShift.Types.GetManagedResourceResponse, AWSError>;
  /**
   * Returns the active autoshifts for a specified resource.
   */
  listAutoshifts(params: ARCZonalShift.Types.ListAutoshiftsRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.ListAutoshiftsResponse) => void): Request<ARCZonalShift.Types.ListAutoshiftsResponse, AWSError>;
  /**
   * Returns the active autoshifts for a specified resource.
   */
  listAutoshifts(callback?: (err: AWSError, data: ARCZonalShift.Types.ListAutoshiftsResponse) => void): Request<ARCZonalShift.Types.ListAutoshiftsResponse, AWSError>;
  /**
   * Lists all the resources in your Amazon Web Services account in this Amazon Web Services Region that are managed for zonal shifts in Amazon Route 53 Application Recovery Controller, and information about them. The information includes the zonal autoshift status for the resource, as well as the Amazon Resource Name (ARN), the Availability Zones that each resource is deployed in, and the resource name.
   */
  listManagedResources(params: ARCZonalShift.Types.ListManagedResourcesRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.ListManagedResourcesResponse) => void): Request<ARCZonalShift.Types.ListManagedResourcesResponse, AWSError>;
  /**
   * Lists all the resources in your Amazon Web Services account in this Amazon Web Services Region that are managed for zonal shifts in Amazon Route 53 Application Recovery Controller, and information about them. The information includes the zonal autoshift status for the resource, as well as the Amazon Resource Name (ARN), the Availability Zones that each resource is deployed in, and the resource name.
   */
  listManagedResources(callback?: (err: AWSError, data: ARCZonalShift.Types.ListManagedResourcesResponse) => void): Request<ARCZonalShift.Types.ListManagedResourcesResponse, AWSError>;
  /**
   * Lists all active and completed zonal shifts in Amazon Route 53 Application Recovery Controller in your Amazon Web Services account in this Amazon Web Services Region. ListZonalShifts returns customer-started zonal shifts, as well as practice run zonal shifts that Route 53 ARC started on your behalf for zonal autoshift. The ListZonalShifts operation does not list autoshifts. For more information about listing autoshifts, see "&gt;ListAutoshifts.
   */
  listZonalShifts(params: ARCZonalShift.Types.ListZonalShiftsRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.ListZonalShiftsResponse) => void): Request<ARCZonalShift.Types.ListZonalShiftsResponse, AWSError>;
  /**
   * Lists all active and completed zonal shifts in Amazon Route 53 Application Recovery Controller in your Amazon Web Services account in this Amazon Web Services Region. ListZonalShifts returns customer-started zonal shifts, as well as practice run zonal shifts that Route 53 ARC started on your behalf for zonal autoshift. The ListZonalShifts operation does not list autoshifts. For more information about listing autoshifts, see "&gt;ListAutoshifts.
   */
  listZonalShifts(callback?: (err: AWSError, data: ARCZonalShift.Types.ListZonalShiftsResponse) => void): Request<ARCZonalShift.Types.ListZonalShiftsResponse, AWSError>;
  /**
   * You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in an Amazon Web Services Region, to help your application recover immediately, for example, from a developer's bad code deployment or from an Amazon Web Services infrastructure failure in a single Availability Zone. You can start a zonal shift in Route 53 ARC only for managed resources in your Amazon Web Services account in an Amazon Web Services Region. Resources are automatically registered with Route 53 ARC by Amazon Web Services services. At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off. When you start a zonal shift, traffic for the resource is no longer routed to the Availability Zone. The zonal shift is created immediately in Route 53 ARC. However, it can take a short time, typically up to a few minutes, for existing, in-progress connections in the Availability Zone to complete. For more information, see Zonal shift in the Amazon Route 53 Application Recovery Controller Developer Guide.
   */
  startZonalShift(params: ARCZonalShift.Types.StartZonalShiftRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.ZonalShift) => void): Request<ARCZonalShift.Types.ZonalShift, AWSError>;
  /**
   * You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in an Amazon Web Services Region, to help your application recover immediately, for example, from a developer's bad code deployment or from an Amazon Web Services infrastructure failure in a single Availability Zone. You can start a zonal shift in Route 53 ARC only for managed resources in your Amazon Web Services account in an Amazon Web Services Region. Resources are automatically registered with Route 53 ARC by Amazon Web Services services. At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off. When you start a zonal shift, traffic for the resource is no longer routed to the Availability Zone. The zonal shift is created immediately in Route 53 ARC. However, it can take a short time, typically up to a few minutes, for existing, in-progress connections in the Availability Zone to complete. For more information, see Zonal shift in the Amazon Route 53 Application Recovery Controller Developer Guide.
   */
  startZonalShift(callback?: (err: AWSError, data: ARCZonalShift.Types.ZonalShift) => void): Request<ARCZonalShift.Types.ZonalShift, AWSError>;
  /**
   * Update a practice run configuration to change one or more of the following: add, change, or remove the blocking alarm; change the outcome alarm; or add, change, or remove blocking dates or time windows.
   */
  updatePracticeRunConfiguration(params: ARCZonalShift.Types.UpdatePracticeRunConfigurationRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.UpdatePracticeRunConfigurationResponse) => void): Request<ARCZonalShift.Types.UpdatePracticeRunConfigurationResponse, AWSError>;
  /**
   * Update a practice run configuration to change one or more of the following: add, change, or remove the blocking alarm; change the outcome alarm; or add, change, or remove blocking dates or time windows.
   */
  updatePracticeRunConfiguration(callback?: (err: AWSError, data: ARCZonalShift.Types.UpdatePracticeRunConfigurationResponse) => void): Request<ARCZonalShift.Types.UpdatePracticeRunConfigurationResponse, AWSError>;
  /**
   * You can update the zonal autoshift status for a resource, to enable or disable zonal autoshift. When zonal autoshift is ENABLED, Amazon Web Services shifts away resource traffic from an Availability Zone, on your behalf, when Amazon Web Services determines that there's an issue in the Availability Zone that could potentially affect customers.
   */
  updateZonalAutoshiftConfiguration(params: ARCZonalShift.Types.UpdateZonalAutoshiftConfigurationRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.UpdateZonalAutoshiftConfigurationResponse) => void): Request<ARCZonalShift.Types.UpdateZonalAutoshiftConfigurationResponse, AWSError>;
  /**
   * You can update the zonal autoshift status for a resource, to enable or disable zonal autoshift. When zonal autoshift is ENABLED, Amazon Web Services shifts away resource traffic from an Availability Zone, on your behalf, when Amazon Web Services determines that there's an issue in the Availability Zone that could potentially affect customers.
   */
  updateZonalAutoshiftConfiguration(callback?: (err: AWSError, data: ARCZonalShift.Types.UpdateZonalAutoshiftConfigurationResponse) => void): Request<ARCZonalShift.Types.UpdateZonalAutoshiftConfigurationResponse, AWSError>;
  /**
   * Update an active zonal shift in Amazon Route 53 Application Recovery Controller in your Amazon Web Services account. You can update a zonal shift to set a new expiration, or edit or replace the comment for the zonal shift. 
   */
  updateZonalShift(params: ARCZonalShift.Types.UpdateZonalShiftRequest, callback?: (err: AWSError, data: ARCZonalShift.Types.ZonalShift) => void): Request<ARCZonalShift.Types.ZonalShift, AWSError>;
  /**
   * Update an active zonal shift in Amazon Route 53 Application Recovery Controller in your Amazon Web Services account. You can update a zonal shift to set a new expiration, or edit or replace the comment for the zonal shift. 
   */
  updateZonalShift(callback?: (err: AWSError, data: ARCZonalShift.Types.ZonalShift) => void): Request<ARCZonalShift.Types.ZonalShift, AWSError>;
}
declare namespace ARCZonalShift {
  export type AppliedStatus = "APPLIED"|"NOT_APPLIED"|string;
  export type AppliedWeights = {[key: string]: Weight};
  export type AutoshiftAppliedStatus = "APPLIED"|"NOT_APPLIED"|string;
  export type AutoshiftExecutionStatus = "ACTIVE"|"COMPLETED"|string;
  export interface AutoshiftInResource {
    /**
     * The appliedStatus field specifies which application traffic shift is in effect for a resource when there is more than one traffic shift active. There can be more than one application traffic shift in progress at the same time - that is, practice run zonal shifts, customer-started zonal shifts, or an autoshift. The appliedStatus field for an autoshift for a resource can have one of two values: APPLIED or NOT_APPLIED. The zonal shift or autoshift that is currently in effect for the resource has an applied status set to APPLIED. The overall principle for precedence is that zonal shifts that you start as a customer take precedence autoshifts, which take precedence over practice runs. That is, customer-started zonal shifts &gt; autoshifts &gt; practice run zonal shifts. For more information, see How zonal autoshift and practice runs work in the Amazon Route 53 Application Recovery Controller Developer Guide.
     */
    appliedStatus: AutoshiftAppliedStatus;
    /**
     * The Availability Zone that traffic is shifted away from for a resource, when Amazon Web Services starts an autoshift. Until the autoshift ends, traffic for the resource is instead directed to other Availability Zones in the Amazon Web Services Region. An autoshift can end for a resource, for example, when Amazon Web Services ends the autoshift for the Availability Zone or when you disable zonal autoshift for the resource.
     */
    awayFrom: AvailabilityZone;
    /**
     * The time (UTC) when the autoshift started.
     */
    startTime: StartTime;
  }
  export type AutoshiftSummaries = AutoshiftSummary[];
  export interface AutoshiftSummary {
    /**
     * The Availability Zone that traffic is shifted away from for a resource when Amazon Web Services starts an autoshift. Until the autoshift ends, traffic for the resource is instead directed to other Availability Zones in the Amazon Web Services Region. An autoshift can end for a resource, for example, when Amazon Web Services ends the autoshift for the Availability Zone or when you disable zonal autoshift for the resource.
     */
    awayFrom: AvailabilityZone;
    /**
     * The time (in UTC) when the autoshift ended.
     */
    endTime: ExpiryTime;
    /**
     * The time (in UTC) when the autoshift started.
     */
    startTime: StartTime;
    /**
     * The status for an autoshift. 
     */
    status: AutoshiftExecutionStatus;
  }
  export type AutoshiftsInResource = AutoshiftInResource[];
  export type AvailabilityZone = string;
  export type AvailabilityZones = AvailabilityZone[];
  export type BlockedDate = string;
  export type BlockedDates = BlockedDate[];
  export type BlockedWindow = string;
  export type BlockedWindows = BlockedWindow[];
  export interface CancelZonalShiftRequest {
    /**
     * The internally-generated identifier of a zonal shift.
     */
    zonalShiftId: ZonalShiftId;
  }
  export interface ControlCondition {
    /**
     * The Amazon Resource Name (ARN) for the Amazon CloudWatch alarm that you specify as a control condition for a practice run.
     */
    alarmIdentifier: ResourceArn;
    /**
     * The type of alarm specified for a practice run. The only valid value is CLOUDWATCH.
     */
    type: ControlConditionType;
  }
  export type ControlConditionType = "CLOUDWATCH"|string;
  export type ControlConditions = ControlCondition[];
  export interface CreatePracticeRunConfigurationRequest {
    /**
     * Optionally, you can block Route 53 ARC from starting practice runs for a resource on specific calendar dates. The format for blocked dates is: YYYY-MM-DD. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Separate multiple blocked dates with spaces. For example, if you have an application update scheduled to launch on May 1, 2024, and you don't want practice runs to shift traffic away at that time, you could set a blocked date for 2024-05-01.
     */
    blockedDates?: BlockedDates;
    /**
     * Optionally, you can block Route 53 ARC from starting practice runs for specific windows of days and times.  The format for blocked windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple blocked windows with spaces. For example, say you run business report summaries three days a week. For this scenario, you might set the following recurring days and times as blocked windows, for example: MON-20:30-21:30 WED-20:30-21:30 FRI-20:30-21:30.
     */
    blockedWindows?: BlockedWindows;
    /**
     * An Amazon CloudWatch alarm that you can specify for zonal autoshift practice runs. This alarm blocks Route 53 ARC from starting practice run zonal shifts, and ends a practice run that's in progress, when the alarm is in an ALARM state. 
     */
    blockingAlarms?: ControlConditions;
    /**
     * The outcome alarm for practice runs is a required Amazon CloudWatch alarm that you specify that ends a practice run when the alarm is in an ALARM state. Configure the alarm to monitor the health of your application when traffic is shifted away from an Availability Zone during each weekly practice run. You should configure the alarm to go into an ALARM state if your application is impacted by the zonal shift, and you want to stop the zonal shift, to let traffic for the resource return to the Availability Zone.
     */
    outcomeAlarms: ControlConditions;
    /**
     * The identifier of the resource to shift away traffic for when a practice run starts a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource. At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
     */
    resourceIdentifier: ResourceIdentifier;
  }
  export interface CreatePracticeRunConfigurationResponse {
    /**
     * The Amazon Resource Name (ARN) of the resource that you configured the practice run for.
     */
    arn: ResourceArn;
    /**
     * The name of the resource that you configured the practice run for. 
     */
    name: ResourceName;
    /**
     * A practice run configuration for a resource. Configurations include the outcome alarm that you specify for practice runs, and, optionally, a blocking alarm and blocking dates and windows.
     */
    practiceRunConfiguration: PracticeRunConfiguration;
    /**
     * The status for zonal autoshift for a resource. When you specify the autoshift status as ENABLED, Amazon Web Services shifts traffic away from shifts away application resource traffic from an Availability Zone, on your behalf, when Amazon Web Services determines that there's an issue in the Availability Zone that could potentially affect customers. When you enable zonal autoshift, you must also configure practice runs for the resource.
     */
    zonalAutoshiftStatus: ZonalAutoshiftStatus;
  }
  export interface DeletePracticeRunConfigurationRequest {
    /**
     * The identifier for the resource that you want to delete the practice run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.
     */
    resourceIdentifier: ResourceIdentifier;
  }
  export interface DeletePracticeRunConfigurationResponse {
    /**
     * The Amazon Resource Name (ARN) of the resource that you deleted the practice run for.
     */
    arn: ResourceArn;
    /**
     * The name of the resource that you deleted the practice run for. 
     */
    name: ResourceName;
    /**
     * The status of zonal autoshift for the resource.
     */
    zonalAutoshiftStatus: ZonalAutoshiftStatus;
  }
  export type ExpiresIn = string;
  export type ExpiryTime = Date;
  export interface GetManagedResourceRequest {
    /**
     * The identifier for the resource to shift away traffic for. The identifier is the Amazon Resource Name (ARN) for the resource. At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
     */
    resourceIdentifier: ResourceIdentifier;
  }
  export interface GetManagedResourceResponse {
    /**
     * A collection of key-value pairs that indicate whether resources are active in Availability Zones or not. The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.
     */
    appliedWeights: AppliedWeights;
    /**
     * The Amazon Resource Name (ARN) for the resource.
     */
    arn?: ResourceArn;
    /**
     * An array of the autoshifts that are active for the resource.
     */
    autoshifts?: AutoshiftsInResource;
    /**
     * The name of the resource.
     */
    name?: ResourceName;
    /**
     * The practice run configuration for zonal autoshift that's associated with the resource.
     */
    practiceRunConfiguration?: PracticeRunConfiguration;
    /**
     * The status for zonal autoshift for a resource. When the autoshift status is ENABLED, Amazon Web Services shifts traffic for a resource away from an Availability Zone, on your behalf, when Amazon Web Services determines that there's an issue in the Availability Zone that could potentially affect customers.
     */
    zonalAutoshiftStatus?: ZonalAutoshiftStatus;
    /**
     * The zonal shifts that are currently active for a resource. 
     */
    zonalShifts: ZonalShiftsInResource;
  }
  export interface ListAutoshiftsRequest {
    /**
     * The number of objects that you want to return with this call.
     */
    maxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * The status of the autoshift.
     */
    status?: AutoshiftExecutionStatus;
  }
  export interface ListAutoshiftsResponse {
    /**
     * The items in the response list.
     */
    items?: AutoshiftSummaries;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
  }
  export interface ListManagedResourcesRequest {
    /**
     * The number of objects that you want to return with this call.
     */
    maxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
  }
  export interface ListManagedResourcesResponse {
    /**
     * The items in the response list.
     */
    items: ManagedResourceSummaries;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
  }
  export interface ListZonalShiftsRequest {
    /**
     * The number of objects that you want to return with this call.
     */
    maxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * The identifier for the resource that you want to list zonal shifts for. The identifier is the Amazon Resource Name (ARN) for the resource.
     */
    resourceIdentifier?: ResourceIdentifier;
    /**
     * A status for a zonal shift. The Status for a zonal shift can have one of the following values:    ACTIVE: The zonal shift has been started and active.    EXPIRED: The zonal shift has expired (the expiry time was exceeded).    CANCELED: The zonal shift was canceled.  
     */
    status?: ZonalShiftStatus;
  }
  export interface ListZonalShiftsResponse {
    /**
     * The items in the response list.
     */
    items?: ZonalShiftSummaries;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
  }
  export type ManagedResourceSummaries = ManagedResourceSummary[];
  export interface ManagedResourceSummary {
    /**
     * A collection of key-value pairs that indicate whether resources are active in Availability Zones or not. The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.
     */
    appliedWeights?: AppliedWeights;
    /**
     * The Amazon Resource Name (ARN) for the managed resource.
     */
    arn?: ResourceArn;
    /**
     * An array of the autoshifts that have been completed for a resource.
     */
    autoshifts?: AutoshiftsInResource;
    /**
     * The Availability Zones that a resource is deployed in.
     */
    availabilityZones: AvailabilityZones;
    /**
     * The name of the managed resource.
     */
    name?: ResourceName;
    /**
     * This status tracks whether a practice run configuration exists for a resource. When you configure a practice run for a resource so that a practice run configuration exists, Route 53 ARC sets this value to ENABLED. If a you have not configured a practice run for the resource, or delete a practice run configuration, Route 53 ARC sets the value to DISABLED. Route 53 ARC updates this status; you can't set a practice run status to ENABLED or DISABLED.
     */
    practiceRunStatus?: ZonalAutoshiftStatus;
    /**
     * The status of autoshift for a resource. When you configure zonal autoshift for a resource, you can set the value of the status to ENABLED or DISABLED.
     */
    zonalAutoshiftStatus?: ZonalAutoshiftStatus;
    /**
     * An array of the zonal shifts for a resource.
     */
    zonalShifts?: ZonalShiftsInResource;
  }
  export type MaxResults = number;
  export interface PracticeRunConfiguration {
    /**
     * An array of one or more dates that you can specify when Amazon Web Services does not start practice runs for a resource. Specify blocked dates, in UTC, in the format YYYY-MM-DD, separated by spaces. 
     */
    blockedDates?: BlockedDates;
    /**
     * An array of one or more windows of days and times that you can block Route 53 ARC from starting practice runs for a resource. Specify the blocked windows in UTC, using the format DAY:HH:MM-DAY:HH:MM, separated by spaces. For example, MON:18:30-MON:19:30 TUE:18:30-TUE:19:30.
     */
    blockedWindows?: BlockedWindows;
    /**
     * The blocking alarm for practice runs is an optional alarm that you can specify that blocks practice runs when the alarm is in an ALARM state.
     */
    blockingAlarms?: ControlConditions;
    /**
     * The outcome alarm for practice runs is an alarm that you specify that ends a practice run when the alarm is in an ALARM state.
     */
    outcomeAlarms: ControlConditions;
  }
  export type PracticeRunOutcome = "FAILED"|"INTERRUPTED"|"PENDING"|"SUCCEEDED"|string;
  export type ResourceArn = string;
  export type ResourceIdentifier = string;
  export type ResourceName = string;
  export type StartTime = Date;
  export interface StartZonalShiftRequest {
    /**
     * The Availability Zone that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.
     */
    awayFrom: AvailabilityZone;
    /**
     * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.
     */
    comment: ZonalShiftComment;
    /**
     * The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours). If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone. To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:    A lowercase letter m: To specify that the value is in minutes.    A lowercase letter h: To specify that the value is in hours.   For example: 20h means the zonal shift expires in 20 hours. 120m means the zonal shift expires in 120 minutes (2 hours).
     */
    expiresIn: ExpiresIn;
    /**
     * The identifier for the resource to shift away traffic for. The identifier is the Amazon Resource Name (ARN) for the resource. At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
     */
    resourceIdentifier: ResourceIdentifier;
  }
  export type String = string;
  export interface UpdatePracticeRunConfigurationRequest {
    /**
     * Add, change, or remove blocked dates for a practice run in zonal autoshift. Optionally, you can block practice runs for specific calendar dates. The format for blocked dates is: YYYY-MM-DD. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Separate multiple blocked dates with spaces. For example, if you have an application update scheduled to launch on May 1, 2024, and you don't want practice runs to shift traffic away at that time, you could set a blocked date for 2024-05-01.
     */
    blockedDates?: BlockedDates;
    /**
     * Add, change, or remove windows of days and times for when you can, optionally, block Route 53 ARC from starting a practice run for a resource. The format for blocked windows is: DAY:HH:SS-DAY:HH:SS. Keep in mind, when you specify dates, that dates and times for practice runs are in UTC. Also, be aware of potential time adjustments that might be required for daylight saving time differences. Separate multiple blocked windows with spaces. For example, say you run business report summaries three days a week. For this scenario, you might set the following recurring days and times as blocked windows, for example: MON-20:30-21:30 WED-20:30-21:30 FRI-20:30-21:30.
     */
    blockedWindows?: BlockedWindows;
    /**
     * Add, change, or remove the Amazon CloudWatch alarm that you optionally specify as the blocking alarm for practice runs.
     */
    blockingAlarms?: ControlConditions;
    /**
     * Specify a new the Amazon CloudWatch alarm as the outcome alarm for practice runs.
     */
    outcomeAlarms?: ControlConditions;
    /**
     * The identifier for the resource that you want to update the practice run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.
     */
    resourceIdentifier: ResourceIdentifier;
  }
  export interface UpdatePracticeRunConfigurationResponse {
    /**
     * The Amazon Resource Name (ARN) of the resource that you updated the practice run for.
     */
    arn: ResourceArn;
    /**
     * The name of the resource that you updated the practice run for. 
     */
    name: ResourceName;
    /**
     * The practice run configuration that was updated.
     */
    practiceRunConfiguration: PracticeRunConfiguration;
    /**
     * The zonal autoshift status for the resource that you updated the practice run for.
     */
    zonalAutoshiftStatus: ZonalAutoshiftStatus;
  }
  export interface UpdateZonalAutoshiftConfigurationRequest {
    /**
     * The identifier for the resource that you want to update the zonal autoshift configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.
     */
    resourceIdentifier: ResourceIdentifier;
    /**
     * The zonal autoshift status for the resource that you want to update the zonal autoshift configuration for.
     */
    zonalAutoshiftStatus: ZonalAutoshiftStatus;
  }
  export interface UpdateZonalAutoshiftConfigurationResponse {
    /**
     * The identifier for the resource that you updated the zonal autoshift configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.
     */
    resourceIdentifier: ResourceIdentifier;
    /**
     * The zonal autoshift status for the resource that you updated the zonal autoshift configuration for.
     */
    zonalAutoshiftStatus: ZonalAutoshiftStatus;
  }
  export interface UpdateZonalShiftRequest {
    /**
     * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.
     */
    comment?: ZonalShiftComment;
    /**
     * The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours). If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone. To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:    A lowercase letter m: To specify that the value is in minutes.    A lowercase letter h: To specify that the value is in hours.   For example: 20h means the zonal shift expires in 20 hours. 120m means the zonal shift expires in 120 minutes (2 hours).
     */
    expiresIn?: ExpiresIn;
    /**
     * The identifier of a zonal shift.
     */
    zonalShiftId: ZonalShiftId;
  }
  export type Weight = number;
  export type ZonalAutoshiftStatus = "ENABLED"|"DISABLED"|string;
  export interface ZonalShift {
    /**
     * The Availability Zone that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.
     */
    awayFrom: AvailabilityZone;
    /**
     * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.
     */
    comment: ZonalShiftComment;
    /**
     * The expiry time (expiration time) for a customer-started zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift. You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift to set a new expiration at any time.  When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.
     */
    expiryTime: ExpiryTime;
    /**
     * The identifier for the resource to shift away traffic for. The identifier is the Amazon Resource Name (ARN) for the resource. At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
     */
    resourceIdentifier: ResourceIdentifier;
    /**
     * The time (UTC) when the zonal shift starts.
     */
    startTime: StartTime;
    /**
     * A status for a zonal shift. The Status for a zonal shift can have one of the following values:    ACTIVE: The zonal shift has been started and active.    EXPIRED: The zonal shift has expired (the expiry time was exceeded).    CANCELED: The zonal shift was canceled.  
     */
    status: ZonalShiftStatus;
    /**
     * The identifier of a zonal shift.
     */
    zonalShiftId: ZonalShiftId;
  }
  export type ZonalShiftComment = string;
  export type ZonalShiftId = string;
  export interface ZonalShiftInResource {
    /**
     * The appliedStatus field specifies which application traffic shift is in effect for a resource when there is more than one traffic shift active. There can be more than one application traffic shift in progress at the same time - that is, practice run zonal shifts, customer-started zonal shifts, or an autoshift. The appliedStatus field for an autoshift for a resource can have one of two values: APPLIED or NOT_APPLIED. The zonal shift or autoshift that is currently in effect for the resource has an applied status set to APPLIED. The overall principle for precedence is that zonal shifts that you start as a customer take precedence autoshifts, which take precedence over practice runs. That is, customer-started zonal shifts &gt; autoshifts &gt; practice run zonal shifts. For more information, see How zonal autoshift and practice runs work in the Amazon Route 53 Application Recovery Controller Developer Guide.
     */
    appliedStatus: AppliedStatus;
    /**
     * The Availability Zone that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.
     */
    awayFrom: AvailabilityZone;
    /**
     * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. That is, a new comment overwrites any existing comment string.
     */
    comment: ZonalShiftComment;
    /**
     * The expiry time (expiration time) for a customer-started zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift. You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift to set a new expiration at any time.  When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.
     */
    expiryTime: ExpiryTime;
    /**
     * The outcome, or end state, returned for a practice run. The following values can be returned:    PENDING: Outcome value when a practice run is in progress.    SUCCEEDED: Outcome value when the outcome alarm specified for the practice run configuration does not go into an ALARM state during the practice run, and the practice run was not interrupted before it completed the expected 30 minute zonal shift.    INTERRUPTED: Outcome value when the practice run was stopped before the expected 30 minute zonal shift duration, or there was another problem with the practice run that created an inconclusive outcome.    FAILED: Outcome value when the outcome alarm specified for the practice run configuration goes into an ALARM state during the practice run, and the practice run was not interrupted before it completed.   For more information about practice run outcomes, see  Considerations when you configure zonal autoshift in the Amazon Route 53 Application Recovery Controller Developer Guide.
     */
    practiceRunOutcome?: PracticeRunOutcome;
    /**
     * The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource. At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
     */
    resourceIdentifier: ResourceIdentifier;
    /**
     * The time (UTC) when the zonal shift starts.
     */
    startTime: StartTime;
    /**
     * The identifier of a zonal shift.
     */
    zonalShiftId: ZonalShiftId;
  }
  export type ZonalShiftStatus = "ACTIVE"|"EXPIRED"|"CANCELED"|string;
  export type ZonalShiftSummaries = ZonalShiftSummary[];
  export interface ZonalShiftSummary {
    /**
     * The Availability Zone that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.
     */
    awayFrom: AvailabilityZone;
    /**
     * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. That is, a new comment overwrites any existing comment string.
     */
    comment: ZonalShiftComment;
    /**
     * The expiry time (expiration time) for a customer-started zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift. You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift to set a new expiration at any time.  When you start a zonal shift, you specify how long you want it to be active, which Route 53 ARC converts to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.
     */
    expiryTime: ExpiryTime;
    /**
     * The outcome, or end state, of a practice run. The following values can be returned:    PENDING: Outcome value when the practice run is in progress.    SUCCEEDED: Outcome value when the outcome alarm specified for the practice run configuration does not go into an ALARM state during the practice run, and the practice run was not interrupted before it completed.    INTERRUPTED: Outcome value when the practice run did not run for the expected 30 minutes or there was another problem with the practice run that created an inconclusive outcome.    FAILED: Outcome value when the outcome alarm specified for the practice run configuration goes into an ALARM state during the practice run, and the practice run was not interrupted before it completed.   For more information about practice run outcomes, see  Considerations when you configure zonal autoshift in the Amazon Route 53 Application Recovery Controller Developer Guide.
     */
    practiceRunOutcome?: PracticeRunOutcome;
    /**
     * The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource. At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
     */
    resourceIdentifier: ResourceIdentifier;
    /**
     * The time (UTC) when the zonal shift starts.
     */
    startTime: StartTime;
    /**
     * A status for a zonal shift. The Status for a zonal shift can have one of the following values:    ACTIVE: The zonal shift has been started and active.    EXPIRED: The zonal shift has expired (the expiry time was exceeded).    CANCELED: The zonal shift was canceled.  
     */
    status: ZonalShiftStatus;
    /**
     * The identifier of a zonal shift.
     */
    zonalShiftId: ZonalShiftId;
  }
  export type ZonalShiftsInResource = ZonalShiftInResource[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-10-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ARCZonalShift client.
   */
  export import Types = ARCZonalShift;
}
export = ARCZonalShift;
