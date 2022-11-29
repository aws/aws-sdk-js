import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SimSpaceWeaver extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SimSpaceWeaver.Types.ClientConfiguration)
  config: Config & SimSpaceWeaver.Types.ClientConfiguration;
  /**
   * Deletes the instance of the given custom app.
   */
  deleteApp(params: SimSpaceWeaver.Types.DeleteAppInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.DeleteAppOutput) => void): Request<SimSpaceWeaver.Types.DeleteAppOutput, AWSError>;
  /**
   * Deletes the instance of the given custom app.
   */
  deleteApp(callback?: (err: AWSError, data: SimSpaceWeaver.Types.DeleteAppOutput) => void): Request<SimSpaceWeaver.Types.DeleteAppOutput, AWSError>;
  /**
   * Deletes all SimSpace Weaver resources assigned to the given simulation.  Your simulation uses resources in other Amazon Web Services services. This API operation doesn't delete resources in other Amazon Web Services services. 
   */
  deleteSimulation(params: SimSpaceWeaver.Types.DeleteSimulationInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.DeleteSimulationOutput) => void): Request<SimSpaceWeaver.Types.DeleteSimulationOutput, AWSError>;
  /**
   * Deletes all SimSpace Weaver resources assigned to the given simulation.  Your simulation uses resources in other Amazon Web Services services. This API operation doesn't delete resources in other Amazon Web Services services. 
   */
  deleteSimulation(callback?: (err: AWSError, data: SimSpaceWeaver.Types.DeleteSimulationOutput) => void): Request<SimSpaceWeaver.Types.DeleteSimulationOutput, AWSError>;
  /**
   * Returns the state of the given custom app.
   */
  describeApp(params: SimSpaceWeaver.Types.DescribeAppInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.DescribeAppOutput) => void): Request<SimSpaceWeaver.Types.DescribeAppOutput, AWSError>;
  /**
   * Returns the state of the given custom app.
   */
  describeApp(callback?: (err: AWSError, data: SimSpaceWeaver.Types.DescribeAppOutput) => void): Request<SimSpaceWeaver.Types.DescribeAppOutput, AWSError>;
  /**
   * Returns the current state of the given simulation.
   */
  describeSimulation(params: SimSpaceWeaver.Types.DescribeSimulationInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.DescribeSimulationOutput) => void): Request<SimSpaceWeaver.Types.DescribeSimulationOutput, AWSError>;
  /**
   * Returns the current state of the given simulation.
   */
  describeSimulation(callback?: (err: AWSError, data: SimSpaceWeaver.Types.DescribeSimulationOutput) => void): Request<SimSpaceWeaver.Types.DescribeSimulationOutput, AWSError>;
  /**
   * Lists all custom apps or service apps for the given simulation and domain.
   */
  listApps(params: SimSpaceWeaver.Types.ListAppsInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.ListAppsOutput) => void): Request<SimSpaceWeaver.Types.ListAppsOutput, AWSError>;
  /**
   * Lists all custom apps or service apps for the given simulation and domain.
   */
  listApps(callback?: (err: AWSError, data: SimSpaceWeaver.Types.ListAppsOutput) => void): Request<SimSpaceWeaver.Types.ListAppsOutput, AWSError>;
  /**
   * Lists the SimSpace Weaver simulations in the Amazon Web Services account used to make the API call.
   */
  listSimulations(params: SimSpaceWeaver.Types.ListSimulationsInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.ListSimulationsOutput) => void): Request<SimSpaceWeaver.Types.ListSimulationsOutput, AWSError>;
  /**
   * Lists the SimSpace Weaver simulations in the Amazon Web Services account used to make the API call.
   */
  listSimulations(callback?: (err: AWSError, data: SimSpaceWeaver.Types.ListSimulationsOutput) => void): Request<SimSpaceWeaver.Types.ListSimulationsOutput, AWSError>;
  /**
   * Lists all tags on a SimSpace Weaver resource.
   */
  listTagsForResource(params: SimSpaceWeaver.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.ListTagsForResourceOutput) => void): Request<SimSpaceWeaver.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists all tags on a SimSpace Weaver resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SimSpaceWeaver.Types.ListTagsForResourceOutput) => void): Request<SimSpaceWeaver.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Starts a custom app with the configuration specified in the simulation schema.
   */
  startApp(params: SimSpaceWeaver.Types.StartAppInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.StartAppOutput) => void): Request<SimSpaceWeaver.Types.StartAppOutput, AWSError>;
  /**
   * Starts a custom app with the configuration specified in the simulation schema.
   */
  startApp(callback?: (err: AWSError, data: SimSpaceWeaver.Types.StartAppOutput) => void): Request<SimSpaceWeaver.Types.StartAppOutput, AWSError>;
  /**
   * Starts the simulation clock.
   */
  startClock(params: SimSpaceWeaver.Types.StartClockInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.StartClockOutput) => void): Request<SimSpaceWeaver.Types.StartClockOutput, AWSError>;
  /**
   * Starts the simulation clock.
   */
  startClock(callback?: (err: AWSError, data: SimSpaceWeaver.Types.StartClockOutput) => void): Request<SimSpaceWeaver.Types.StartClockOutput, AWSError>;
  /**
   * Starts a simulation with the given name and schema.
   */
  startSimulation(params: SimSpaceWeaver.Types.StartSimulationInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.StartSimulationOutput) => void): Request<SimSpaceWeaver.Types.StartSimulationOutput, AWSError>;
  /**
   * Starts a simulation with the given name and schema.
   */
  startSimulation(callback?: (err: AWSError, data: SimSpaceWeaver.Types.StartSimulationOutput) => void): Request<SimSpaceWeaver.Types.StartSimulationOutput, AWSError>;
  /**
   * Stops the given custom app and shuts down all of its allocated compute resources.
   */
  stopApp(params: SimSpaceWeaver.Types.StopAppInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.StopAppOutput) => void): Request<SimSpaceWeaver.Types.StopAppOutput, AWSError>;
  /**
   * Stops the given custom app and shuts down all of its allocated compute resources.
   */
  stopApp(callback?: (err: AWSError, data: SimSpaceWeaver.Types.StopAppOutput) => void): Request<SimSpaceWeaver.Types.StopAppOutput, AWSError>;
  /**
   * Stops the simulation clock.
   */
  stopClock(params: SimSpaceWeaver.Types.StopClockInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.StopClockOutput) => void): Request<SimSpaceWeaver.Types.StopClockOutput, AWSError>;
  /**
   * Stops the simulation clock.
   */
  stopClock(callback?: (err: AWSError, data: SimSpaceWeaver.Types.StopClockOutput) => void): Request<SimSpaceWeaver.Types.StopClockOutput, AWSError>;
  /**
   * Stops the given simulation.  You can't restart a simulation after you stop it. If you need to restart a simulation, you must stop it, delete it, and start a new instance of it. 
   */
  stopSimulation(params: SimSpaceWeaver.Types.StopSimulationInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.StopSimulationOutput) => void): Request<SimSpaceWeaver.Types.StopSimulationOutput, AWSError>;
  /**
   * Stops the given simulation.  You can't restart a simulation after you stop it. If you need to restart a simulation, you must stop it, delete it, and start a new instance of it. 
   */
  stopSimulation(callback?: (err: AWSError, data: SimSpaceWeaver.Types.StopSimulationOutput) => void): Request<SimSpaceWeaver.Types.StopSimulationOutput, AWSError>;
  /**
   * Adds tags to a SimSpace Weaver resource. For more information about tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference.
   */
  tagResource(params: SimSpaceWeaver.Types.TagResourceInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.TagResourceOutput) => void): Request<SimSpaceWeaver.Types.TagResourceOutput, AWSError>;
  /**
   * Adds tags to a SimSpace Weaver resource. For more information about tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference.
   */
  tagResource(callback?: (err: AWSError, data: SimSpaceWeaver.Types.TagResourceOutput) => void): Request<SimSpaceWeaver.Types.TagResourceOutput, AWSError>;
  /**
   * Removes tags from a SimSpace Weaver resource. For more information about tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference.
   */
  untagResource(params: SimSpaceWeaver.Types.UntagResourceInput, callback?: (err: AWSError, data: SimSpaceWeaver.Types.UntagResourceOutput) => void): Request<SimSpaceWeaver.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes tags from a SimSpace Weaver resource. For more information about tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference.
   */
  untagResource(callback?: (err: AWSError, data: SimSpaceWeaver.Types.UntagResourceOutput) => void): Request<SimSpaceWeaver.Types.UntagResourceOutput, AWSError>;
}
declare namespace SimSpaceWeaver {
  export type AppPortMappings = SimulationAppPortMapping[];
  export type BucketName = string;
  export type ClientToken = string;
  export type ClockStatus = "UNKNOWN"|"STARTING"|"STARTED"|"STOPPING"|"STOPPED"|string;
  export type ClockTargetStatus = "UNKNOWN"|"STARTED"|"STOPPED"|string;
  export interface CloudWatchLogsLogGroup {
    /**
     * The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log group for the simulation. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. For more information about log groups, see Working with log groups and log streams in the Amazon CloudWatch Logs User Guide.
     */
    LogGroupArn?: LogGroupArn;
  }
  export interface DeleteAppInput {
    /**
     * The name of the app.
     */
    App: SimSpaceWeaverResourceName;
    /**
     * The name of the domain of the app.
     */
    Domain: SimSpaceWeaverResourceName;
    /**
     * The name of the simulation of the app.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface DeleteAppOutput {
  }
  export interface DeleteSimulationInput {
    /**
     * The name of the simulation.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface DeleteSimulationOutput {
  }
  export interface DescribeAppInput {
    /**
     * The name of the app.
     */
    App: SimSpaceWeaverResourceName;
    /**
     * The name of the domain of the app.
     */
    Domain: SimSpaceWeaverResourceName;
    /**
     * The name of the simulation of the app.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface DescribeAppOutput {
    /**
     * The description of the app.
     */
    Description?: Description;
    /**
     * The name of the domain of the app.
     */
    Domain?: SimSpaceWeaverResourceName;
    /**
     * Information about the network endpoint for the custom app. You can use the endpoint to connect to the custom app.
     */
    EndpointInfo?: SimulationAppEndpointInfo;
    LaunchOverrides?: LaunchOverrides;
    /**
     * The name of the app.
     */
    Name?: SimSpaceWeaverResourceName;
    /**
     * The name of the simulation of the app.
     */
    Simulation?: SimSpaceWeaverResourceName;
    /**
     * The current lifecycle state of the custom app.
     */
    Status?: SimulationAppStatus;
    /**
     * The desired lifecycle state of the custom app.
     */
    TargetStatus?: SimulationAppTargetStatus;
  }
  export interface DescribeSimulationInput {
    /**
     * The name of the simulation.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface DescribeSimulationOutput {
    /**
     * The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
     */
    Arn?: SimSpaceWeaverArn;
    /**
     * The time when the simulation was created, expressed as the number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).
     */
    CreationTime?: Timestamp;
    /**
     * The description of the simulation.
     */
    Description?: Description;
    /**
     * A universally unique identifier (UUID) for this simulation.
     */
    ExecutionId?: UUID;
    /**
     * A collection of additional state information, such as domain and clock configuration.
     */
    LiveSimulationState?: LiveSimulationState;
    /**
     * Settings that control how SimSpace Weaver handles your simulation log data.
     */
    LoggingConfiguration?: LoggingConfiguration;
    /**
     * The maximum running time of the simulation, specified as a number of months (m or M), hours (h or H), or days (d or D). The simulation stops when it reaches this limit.
     */
    MaximumDuration?: TimeToLiveString;
    /**
     * The name of the simulation.
     */
    Name?: SimSpaceWeaverResourceName;
    /**
     * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that the simulation assumes to perform actions. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. For more information about IAM roles, see IAM roles in the Identity and Access Management User Guide.
     */
    RoleArn?: RoleArn;
    /**
     * An error message that SimSpace Weaver returns only if there is a problem with the simulation schema.
     */
    SchemaError?: OptionalString;
    /**
     * The location of the simulation schema in Amazon Simple Storage Service (Amazon S3). For more information about Amazon S3, see the  Amazon Simple Storage Service User Guide .
     */
    SchemaS3Location?: S3Location;
    /**
     * The current lifecycle state of the simulation.
     */
    Status?: SimulationStatus;
    /**
     * The desired lifecycle state of the simulation.
     */
    TargetStatus?: SimulationTargetStatus;
  }
  export type Description = string;
  export interface Domain {
    /**
     * The type of lifecycle management for apps in the domain. This value indicates whether apps in this domain are managed (SimSpace Weaver starts and stops the apps) or unmanaged (you must start and stop the apps).  Lifecycle types     PerWorker – Managed: SimSpace Weaver starts 1 app on each worker    BySpatialSubdivision – Managed: SimSpace Weaver starts 1 app for each spatial partition    ByRequest – Unmanaged: You use the StartApp API to start the apps and use the StopApp API to stop the apps.    The lifecycle types will change when the service is released for general availability (GA). 
     */
    Lifecycle?: LifecycleManagementStrategy;
    /**
     * The name of the domain.
     */
    Name?: SimSpaceWeaverResourceName;
  }
  export type DomainList = Domain[];
  export type LaunchCommandList = NonEmptyString[];
  export interface LaunchOverrides {
    /**
     * App launch commands and command line parameters that override the launch command configured in the simulation schema.
     */
    LaunchCommands?: LaunchCommandList;
  }
  export type LifecycleManagementStrategy = "Unknown"|"PerWorker"|"BySpatialSubdivision"|"ByRequest"|string;
  export interface ListAppsInput {
    /**
     * The name of the domain that you want to list apps for.
     */
    Domain?: SimSpaceWeaverResourceName;
    /**
     * The maximum number of apps to list.
     */
    MaxResults?: PositiveInteger;
    /**
     * If SimSpace Weaver returns nextToken, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, you receive an HTTP 400 ValidationException error.
     */
    NextToken?: OptionalString;
    /**
     * The name of the simulation that you want to list apps for.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface ListAppsOutput {
    /**
     * The list of apps for the given simulation and domain.
     */
    Apps?: SimulationAppList;
    /**
     * If SimSpace Weaver returns nextToken, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, you receive an HTTP 400 ValidationException error.
     */
    NextToken?: OptionalString;
  }
  export interface ListSimulationsInput {
    /**
     * The maximum number of simulations to list.
     */
    MaxResults?: PositiveInteger;
    /**
     * If SimSpace Weaver returns nextToken, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, you receive an HTTP 400 ValidationException error.
     */
    NextToken?: OptionalString;
  }
  export interface ListSimulationsOutput {
    /**
     * If SimSpace Weaver returns nextToken, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, you receive an HTTP 400 ValidationException error.
     */
    NextToken?: OptionalString;
    /**
     * The list of simulations.
     */
    Simulations?: SimulationList;
  }
  export interface ListTagsForResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
     */
    ResourceArn: SimSpaceWeaverArn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The list of tags for the resource.
     */
    Tags?: TagMap;
  }
  export interface LiveSimulationState {
    /**
     * A list of simulation clocks.  At this time, a simulation has only one clock. 
     */
    Clocks?: SimulationClockList;
    /**
     * A list of domains for the simulation. For more information about domains, see Key concepts in the Amazon Web Services SimSpace Weaver User Guide.
     */
    Domains?: DomainList;
  }
  export interface LogDestination {
    /**
     * An Amazon CloudWatch Logs log group that stores simulation log data. For more information about log groups, see Working with log groups and log streams in the Amazon CloudWatch Logs User Guide.
     */
    CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
  }
  export type LogDestinations = LogDestination[];
  export type LogGroupArn = string;
  export interface LoggingConfiguration {
    /**
     * A list of the locations where SimSpace Weaver sends simulation log data.
     */
    Destinations?: LogDestinations;
  }
  export type NonEmptyString = string;
  export type ObjectKey = string;
  export type OptionalString = string;
  export type PortNumber = number;
  export type PositiveInteger = number;
  export type RoleArn = string;
  export interface S3Location {
    /**
     * The name of an Amazon S3 bucket. For more information about buckets, see Creating, configuring, and working with Amazon S3 buckets in the Amazon Simple Storage Service User Guide.
     */
    BucketName?: BucketName;
    /**
     * The key name of an object in Amazon S3. For more information about Amazon S3 objects and object keys, see Uploading, downloading, and working with objects in Amazon S3 in the Amazon Simple Storage Service User Guide.
     */
    ObjectKey?: ObjectKey;
  }
  export type SimSpaceWeaverArn = string;
  export type SimSpaceWeaverResourceName = string;
  export interface SimulationAppEndpointInfo {
    /**
     * The IP address of the app. SimSpace Weaver dynamically assigns this IP address when the app starts.
     */
    Address?: NonEmptyString;
    /**
     * The inbound TCP/UDP port numbers of the app. The combination of an IP address and a port number form a network endpoint.
     */
    IngressPortMappings?: AppPortMappings;
  }
  export type SimulationAppList = SimulationAppMetadata[];
  export interface SimulationAppMetadata {
    /**
     * The domain of the app. For more information about domains, see Key concepts in the Amazon Web Services SimSpace Weaver User Guide.
     */
    Domain?: SimSpaceWeaverResourceName;
    /**
     * The name of the app.
     */
    Name?: SimSpaceWeaverResourceName;
    /**
     * The name of the simulation of the app.
     */
    Simulation?: SimSpaceWeaverResourceName;
    /**
     * The current status of the app.
     */
    Status?: SimulationAppStatus;
    /**
     * The desired status of the app.
     */
    TargetStatus?: SimulationAppTargetStatus;
  }
  export interface SimulationAppPortMapping {
    /**
     * The TCP/UDP port number of the running app. SimSpace Weaver dynamically assigns this port number when the app starts. SimSpace Weaver maps the Declared port to the Actual port. Clients connect to the app using the app's IP address and the Actual port number.
     */
    Actual?: PortNumber;
    /**
     * The TCP/UDP port number of the app, declared in the simulation schema. SimSpace Weaver maps the Declared port to the Actual port. The source code for the app should bind to the Declared port.
     */
    Declared?: PortNumber;
  }
  export type SimulationAppStatus = "STARTING"|"STARTED"|"STOPPING"|"STOPPED"|"ERROR"|"UNKNOWN"|string;
  export type SimulationAppTargetStatus = "UNKNOWN"|"STARTED"|"STOPPED"|string;
  export interface SimulationClock {
    /**
     * The current status of the simulation clock.
     */
    Status?: ClockStatus;
    /**
     * The desired status of the simulation clock.
     */
    TargetStatus?: ClockTargetStatus;
  }
  export type SimulationClockList = SimulationClock[];
  export type SimulationList = SimulationMetadata[];
  export interface SimulationMetadata {
    /**
     * The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
     */
    Arn?: SimSpaceWeaverArn;
    /**
     * The time when the simulation was created, expressed as the number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).
     */
    CreationTime?: Timestamp;
    /**
     * The name of the simulation.
     */
    Name?: SimSpaceWeaverResourceName;
    /**
     * The current status of the simulation.
     */
    Status?: SimulationStatus;
    /**
     * The desired status of the simulation.
     */
    TargetStatus?: SimulationTargetStatus;
  }
  export type SimulationStatus = "UNKNOWN"|"STARTING"|"STARTED"|"STOPPING"|"STOPPED"|"FAILED"|"DELETING"|"DELETED"|string;
  export type SimulationTargetStatus = "UNKNOWN"|"STARTED"|"STOPPED"|"DELETED"|string;
  export interface StartAppInput {
    /**
     * A value that you provide to ensure that repeated calls to this API operation using the same parameters complete only once. A ClientToken is also known as an idempotency token. A ClientToken expires after 24 hours.
     */
    ClientToken?: ClientToken;
    /**
     * The description of the app.
     */
    Description?: Description;
    /**
     * The name of the domain of the app.
     */
    Domain: SimSpaceWeaverResourceName;
    LaunchOverrides?: LaunchOverrides;
    /**
     * The name of the app.
     */
    Name: SimSpaceWeaverResourceName;
    /**
     * The name of the simulation of the app.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface StartAppOutput {
    /**
     * The name of the domain of the app.
     */
    Domain?: SimSpaceWeaverResourceName;
    /**
     * The name of the app.
     */
    Name?: SimSpaceWeaverResourceName;
    /**
     * The name of the simulation of the app.
     */
    Simulation?: SimSpaceWeaverResourceName;
  }
  export interface StartClockInput {
    /**
     * The name of the simulation.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface StartClockOutput {
  }
  export interface StartSimulationInput {
    /**
     * A value that you provide to ensure that repeated calls to this API operation using the same parameters complete only once. A ClientToken is also known as an idempotency token. A ClientToken expires after 24 hours.
     */
    ClientToken?: ClientToken;
    /**
     * The description of the simulation.
     */
    Description?: Description;
    /**
     * The maximum running time of the simulation, specified as a number of months (m or M), hours (h or H), or days (d or D). The simulation stops when it reaches this limit.
     */
    MaximumDuration?: TimeToLiveString;
    /**
     * The name of the simulation.
     */
    Name: SimSpaceWeaverResourceName;
    /**
     * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that the simulation assumes to perform actions. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. For more information about IAM roles, see IAM roles in the Identity and Access Management User Guide.
     */
    RoleArn: RoleArn;
    /**
     * The location of the simulation schema in Amazon Simple Storage Service (Amazon S3). For more information about Amazon S3, see the  Amazon Simple Storage Service User Guide .
     */
    SchemaS3Location: S3Location;
    /**
     * A list of tags for the simulation. For more information about tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference.
     */
    Tags?: TagMap;
  }
  export interface StartSimulationOutput {
    /**
     * The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
     */
    Arn?: SimSpaceWeaverArn;
    /**
     * The time when the simulation was created, expressed as the number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).
     */
    CreationTime?: Timestamp;
    /**
     * A universally unique identifier (UUID) for this simulation.
     */
    ExecutionId?: UUID;
  }
  export interface StopAppInput {
    /**
     * The name of the app.
     */
    App: SimSpaceWeaverResourceName;
    /**
     * The name of the domain of the app.
     */
    Domain: SimSpaceWeaverResourceName;
    /**
     * The name of the simulation of the app.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface StopAppOutput {
  }
  export interface StopClockInput {
    /**
     * The name of the simulation.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface StopClockOutput {
  }
  export interface StopSimulationInput {
    /**
     * The name of the simulation.
     */
    Simulation: SimSpaceWeaverResourceName;
  }
  export interface StopSimulationOutput {
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to add tags to. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
     */
    ResourceArn: SimSpaceWeaverArn;
    /**
     * A list of tags to apply to the resource.
     */
    Tags: TagMap;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type TimeToLiveString = string;
  export type Timestamp = Date;
  export type UUID = string;
  export interface UntagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
     */
    ResourceArn: SimSpaceWeaverArn;
    /**
     * A list of tag keys to remove from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-10-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SimSpaceWeaver client.
   */
  export import Types = SimSpaceWeaver;
}
export = SimSpaceWeaver;
