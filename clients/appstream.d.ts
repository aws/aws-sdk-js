import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class AppStream extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AppStream.Types.ClientConfiguration)
  config: Config & AppStream.Types.ClientConfiguration;
  /**
   * Associate a fleet to a stack.
   */
  associateFleet(params: AppStream.Types.AssociateFleetRequest, callback?: (err: AWSError, data: AppStream.Types.AssociateFleetResult) => void): Request<AppStream.Types.AssociateFleetResult, AWSError>;
  /**
   * Associate a fleet to a stack.
   */
  associateFleet(callback?: (err: AWSError, data: AppStream.Types.AssociateFleetResult) => void): Request<AppStream.Types.AssociateFleetResult, AWSError>;
  /**
   * Creates a new fleet.
   */
  createFleet(params: AppStream.Types.CreateFleetRequest, callback?: (err: AWSError, data: AppStream.Types.CreateFleetResult) => void): Request<AppStream.Types.CreateFleetResult, AWSError>;
  /**
   * Creates a new fleet.
   */
  createFleet(callback?: (err: AWSError, data: AppStream.Types.CreateFleetResult) => void): Request<AppStream.Types.CreateFleetResult, AWSError>;
  /**
   * Create a new stack.
   */
  createStack(params: AppStream.Types.CreateStackRequest, callback?: (err: AWSError, data: AppStream.Types.CreateStackResult) => void): Request<AppStream.Types.CreateStackResult, AWSError>;
  /**
   * Create a new stack.
   */
  createStack(callback?: (err: AWSError, data: AppStream.Types.CreateStackResult) => void): Request<AppStream.Types.CreateStackResult, AWSError>;
  /**
   * Creates a URL to start an AppStream 2.0 streaming session for a user. By default, the URL is valid only for 1 minute from the time that it is generated.
   */
  createStreamingURL(params: AppStream.Types.CreateStreamingURLRequest, callback?: (err: AWSError, data: AppStream.Types.CreateStreamingURLResult) => void): Request<AppStream.Types.CreateStreamingURLResult, AWSError>;
  /**
   * Creates a URL to start an AppStream 2.0 streaming session for a user. By default, the URL is valid only for 1 minute from the time that it is generated.
   */
  createStreamingURL(callback?: (err: AWSError, data: AppStream.Types.CreateStreamingURLResult) => void): Request<AppStream.Types.CreateStreamingURLResult, AWSError>;
  /**
   * Deletes a fleet.
   */
  deleteFleet(params: AppStream.Types.DeleteFleetRequest, callback?: (err: AWSError, data: AppStream.Types.DeleteFleetResult) => void): Request<AppStream.Types.DeleteFleetResult, AWSError>;
  /**
   * Deletes a fleet.
   */
  deleteFleet(callback?: (err: AWSError, data: AppStream.Types.DeleteFleetResult) => void): Request<AppStream.Types.DeleteFleetResult, AWSError>;
  /**
   * Deletes the stack. After this operation completes, the environment can no longer be activated, and any reservations made for the stack are released.
   */
  deleteStack(params: AppStream.Types.DeleteStackRequest, callback?: (err: AWSError, data: AppStream.Types.DeleteStackResult) => void): Request<AppStream.Types.DeleteStackResult, AWSError>;
  /**
   * Deletes the stack. After this operation completes, the environment can no longer be activated, and any reservations made for the stack are released.
   */
  deleteStack(callback?: (err: AWSError, data: AppStream.Types.DeleteStackResult) => void): Request<AppStream.Types.DeleteStackResult, AWSError>;
  /**
   * If fleet names are provided, this operation describes the specified fleets; otherwise, all the fleets in the account are described.
   */
  describeFleets(params: AppStream.Types.DescribeFleetsRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * If fleet names are provided, this operation describes the specified fleets; otherwise, all the fleets in the account are described.
   */
  describeFleets(callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Describes the images. If a list of names is not provided, all images in your account are returned. This operation does not return a paginated result.
   */
  describeImages(params: AppStream.Types.DescribeImagesRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeImagesResult) => void): Request<AppStream.Types.DescribeImagesResult, AWSError>;
  /**
   * Describes the images. If a list of names is not provided, all images in your account are returned. This operation does not return a paginated result.
   */
  describeImages(callback?: (err: AWSError, data: AppStream.Types.DescribeImagesResult) => void): Request<AppStream.Types.DescribeImagesResult, AWSError>;
  /**
   * Describes the streaming sessions for a stack and a fleet. If a user ID is provided, this operation returns streaming sessions for only that user. Pass this value for the nextToken parameter in a subsequent call to this operation to retrieve the next set of items. If an authentication type is not provided, the operation defaults to users authenticated using a streaming URL.
   */
  describeSessions(params: AppStream.Types.DescribeSessionsRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeSessionsResult) => void): Request<AppStream.Types.DescribeSessionsResult, AWSError>;
  /**
   * Describes the streaming sessions for a stack and a fleet. If a user ID is provided, this operation returns streaming sessions for only that user. Pass this value for the nextToken parameter in a subsequent call to this operation to retrieve the next set of items. If an authentication type is not provided, the operation defaults to users authenticated using a streaming URL.
   */
  describeSessions(callback?: (err: AWSError, data: AppStream.Types.DescribeSessionsResult) => void): Request<AppStream.Types.DescribeSessionsResult, AWSError>;
  /**
   * If stack names are not provided, this operation describes the specified stacks; otherwise, all stacks in the account are described. Pass the nextToken value in a subsequent call to this operation to retrieve the next set of items.
   */
  describeStacks(params: AppStream.Types.DescribeStacksRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeStacksResult) => void): Request<AppStream.Types.DescribeStacksResult, AWSError>;
  /**
   * If stack names are not provided, this operation describes the specified stacks; otherwise, all stacks in the account are described. Pass the nextToken value in a subsequent call to this operation to retrieve the next set of items.
   */
  describeStacks(callback?: (err: AWSError, data: AppStream.Types.DescribeStacksResult) => void): Request<AppStream.Types.DescribeStacksResult, AWSError>;
  /**
   * Disassociates a fleet from a stack.
   */
  disassociateFleet(params: AppStream.Types.DisassociateFleetRequest, callback?: (err: AWSError, data: AppStream.Types.DisassociateFleetResult) => void): Request<AppStream.Types.DisassociateFleetResult, AWSError>;
  /**
   * Disassociates a fleet from a stack.
   */
  disassociateFleet(callback?: (err: AWSError, data: AppStream.Types.DisassociateFleetResult) => void): Request<AppStream.Types.DisassociateFleetResult, AWSError>;
  /**
   * This operation immediately stops a streaming session.
   */
  expireSession(params: AppStream.Types.ExpireSessionRequest, callback?: (err: AWSError, data: AppStream.Types.ExpireSessionResult) => void): Request<AppStream.Types.ExpireSessionResult, AWSError>;
  /**
   * This operation immediately stops a streaming session.
   */
  expireSession(callback?: (err: AWSError, data: AppStream.Types.ExpireSessionResult) => void): Request<AppStream.Types.ExpireSessionResult, AWSError>;
  /**
   * Lists all fleets associated with the stack.
   */
  listAssociatedFleets(params: AppStream.Types.ListAssociatedFleetsRequest, callback?: (err: AWSError, data: AppStream.Types.ListAssociatedFleetsResult) => void): Request<AppStream.Types.ListAssociatedFleetsResult, AWSError>;
  /**
   * Lists all fleets associated with the stack.
   */
  listAssociatedFleets(callback?: (err: AWSError, data: AppStream.Types.ListAssociatedFleetsResult) => void): Request<AppStream.Types.ListAssociatedFleetsResult, AWSError>;
  /**
   * Lists all stacks to which the specified fleet is associated.
   */
  listAssociatedStacks(params: AppStream.Types.ListAssociatedStacksRequest, callback?: (err: AWSError, data: AppStream.Types.ListAssociatedStacksResult) => void): Request<AppStream.Types.ListAssociatedStacksResult, AWSError>;
  /**
   * Lists all stacks to which the specified fleet is associated.
   */
  listAssociatedStacks(callback?: (err: AWSError, data: AppStream.Types.ListAssociatedStacksResult) => void): Request<AppStream.Types.ListAssociatedStacksResult, AWSError>;
  /**
   * Starts a fleet.
   */
  startFleet(params: AppStream.Types.StartFleetRequest, callback?: (err: AWSError, data: AppStream.Types.StartFleetResult) => void): Request<AppStream.Types.StartFleetResult, AWSError>;
  /**
   * Starts a fleet.
   */
  startFleet(callback?: (err: AWSError, data: AppStream.Types.StartFleetResult) => void): Request<AppStream.Types.StartFleetResult, AWSError>;
  /**
   * Stops a fleet.
   */
  stopFleet(params: AppStream.Types.StopFleetRequest, callback?: (err: AWSError, data: AppStream.Types.StopFleetResult) => void): Request<AppStream.Types.StopFleetResult, AWSError>;
  /**
   * Stops a fleet.
   */
  stopFleet(callback?: (err: AWSError, data: AppStream.Types.StopFleetResult) => void): Request<AppStream.Types.StopFleetResult, AWSError>;
  /**
   * Updates an existing fleet. All the attributes except the fleet name can be updated in the STOPPED state. When a fleet is in the RUNNING state, only DisplayName and ComputeCapacity can be updated. A fleet cannot be updated in a status of STARTING or STOPPING.
   */
  updateFleet(params: AppStream.Types.UpdateFleetRequest, callback?: (err: AWSError, data: AppStream.Types.UpdateFleetResult) => void): Request<AppStream.Types.UpdateFleetResult, AWSError>;
  /**
   * Updates an existing fleet. All the attributes except the fleet name can be updated in the STOPPED state. When a fleet is in the RUNNING state, only DisplayName and ComputeCapacity can be updated. A fleet cannot be updated in a status of STARTING or STOPPING.
   */
  updateFleet(callback?: (err: AWSError, data: AppStream.Types.UpdateFleetResult) => void): Request<AppStream.Types.UpdateFleetResult, AWSError>;
  /**
   * Updates the specified fields in the stack with the specified name.
   */
  updateStack(params: AppStream.Types.UpdateStackRequest, callback?: (err: AWSError, data: AppStream.Types.UpdateStackResult) => void): Request<AppStream.Types.UpdateStackResult, AWSError>;
  /**
   * Updates the specified fields in the stack with the specified name.
   */
  updateStack(callback?: (err: AWSError, data: AppStream.Types.UpdateStackResult) => void): Request<AppStream.Types.UpdateStackResult, AWSError>;
  /**
   * Waits for the fleetStarted state by periodically calling the underlying AppStream.describeFleetsoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "fleetStarted", params: AppStream.Types.DescribeFleetsRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Waits for the fleetStarted state by periodically calling the underlying AppStream.describeFleetsoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "fleetStarted", callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Waits for the fleetStopped state by periodically calling the underlying AppStream.describeFleetsoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "fleetStopped", params: AppStream.Types.DescribeFleetsRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Waits for the fleetStopped state by periodically calling the underlying AppStream.describeFleetsoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "fleetStopped", callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
}
declare namespace AppStream {
  export interface Application {
    /**
     * The unique identifier for the application.
     */
    Name?: String;
    /**
     * The name of the application shown to the end users.
     */
    DisplayName?: String;
    /**
     * The URL for the application icon. This URL may be time-limited.
     */
    IconURL?: String;
    /**
     * The path to the application executable in the instance.
     */
    LaunchPath?: String;
    /**
     * A list of arguments that are passed to the application at launch.
     */
    LaunchParameters?: String;
    /**
     * An application can be disabled after image creation if there is a problem.
     */
    Enabled?: Boolean;
    /**
     * Additional attributes that describe the application.
     */
    Metadata?: Metadata;
  }
  export type Applications = Application[];
  export type Arn = string;
  export interface AssociateFleetRequest {
    /**
     * The name of the fleet to associate.
     */
    FleetName: String;
    /**
     * The name of the stack to which the fleet is associated.
     */
    StackName: String;
  }
  export interface AssociateFleetResult {
  }
  export type AuthenticationType = "API"|"SAML"|"USERPOOL"|string;
  export type Boolean = boolean;
  export type BooleanObject = boolean;
  export interface ComputeCapacity {
    /**
     * The desired number of streaming instances.
     */
    DesiredInstances: Integer;
  }
  export interface ComputeCapacityStatus {
    /**
     * The desired number of streaming instances.
     */
    Desired: Integer;
    /**
     * The total number of simultaneous streaming instances that are running.
     */
    Running?: Integer;
    /**
     * The number of instances that are being used for streaming.
     */
    InUse?: Integer;
    /**
     * The number of currently available instances that can be used to stream sessions.
     */
    Available?: Integer;
  }
  export interface CreateFleetRequest {
    /**
     * A unique identifier for the fleet.
     */
    Name: Name;
    /**
     * Unique name of the image used by the fleet.
     */
    ImageName: String;
    /**
     * The instance type of compute resources for the fleet. Fleet instances are launched from this instance type.
     */
    InstanceType: String;
    /**
     * The parameters for the capacity allocated to the fleet.
     */
    ComputeCapacity: ComputeCapacity;
    /**
     * The VPC configuration for the fleet.
     */
    VpcConfig?: VpcConfig;
    /**
     * The maximum time for which a streaming session can run. The input can be any numeric value in seconds between 600 and 57600.
     */
    MaxUserDurationInSeconds?: Integer;
    /**
     * The time after disconnection when a session is considered to have ended. If a user who got disconnected reconnects within this timeout interval, the user is connected back to their previous session. The input can be any numeric value in seconds between 60 and 57600. 
     */
    DisconnectTimeoutInSeconds?: Integer;
    /**
     * The description of the fleet.
     */
    Description?: Description;
    /**
     * The display name of the fleet.
     */
    DisplayName?: DisplayName;
    /**
     * Enables or disables default Internet access for the fleet.
     */
    EnableDefaultInternetAccess?: BooleanObject;
  }
  export interface CreateFleetResult {
    /**
     * The details for the created fleet.
     */
    Fleet?: Fleet;
  }
  export interface CreateStackRequest {
    /**
     * The unique identifier for this stack.
     */
    Name: String;
    /**
     * The description displayed to end users on the AppStream 2.0 portal.
     */
    Description?: Description;
    /**
     * The name displayed to end users on the AppStream 2.0 portal.
     */
    DisplayName?: DisplayName;
    /**
     * The storage connectors to be enabled for the stack.
     */
    StorageConnectors?: StorageConnectorList;
  }
  export interface CreateStackResult {
    /**
     * The details for the created stack.
     */
    Stack?: Stack;
  }
  export interface CreateStreamingURLRequest {
    /**
     * The stack for which the URL is generated.
     */
    StackName: String;
    /**
     * The fleet for which the URL is generated.
     */
    FleetName: String;
    /**
     * A unique user ID for whom the URL is generated.
     */
    UserId: UserId;
    /**
     * The ID of the application that must be launched after the session starts.
     */
    ApplicationId?: String;
    /**
     * The duration up to which the URL returned by this action is valid. The input can be any numeric value in seconds between 1 and 604800 seconds.
     */
    Validity?: Long;
    /**
     * The sessionContext of the streaming URL.
     */
    SessionContext?: String;
  }
  export interface CreateStreamingURLResult {
    /**
     * The URL to start the AppStream 2.0 streaming session.
     */
    StreamingURL?: String;
    /**
     * Elapsed seconds after the Unix epoch, at which time this URL expires.
     */
    Expires?: Timestamp;
  }
  export interface DeleteFleetRequest {
    /**
     * The name of the fleet to be deleted.
     */
    Name: String;
  }
  export interface DeleteFleetResult {
  }
  export interface DeleteStackRequest {
    /**
     * The name of the stack to delete.
     */
    Name: String;
  }
  export interface DeleteStackResult {
  }
  export interface DescribeFleetsRequest {
    /**
     * The fleet names to describe. Use null to describe all the fleets for the AWS account.
     */
    Names?: StringList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface DescribeFleetsResult {
    /**
     * The list of fleet details.
     */
    Fleets?: FleetList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface DescribeImagesRequest {
    /**
     * A specific list of images to describe.
     */
    Names?: StringList;
  }
  export interface DescribeImagesResult {
    /**
     * The list of images.
     */
    Images?: ImageList;
  }
  export interface DescribeSessionsRequest {
    /**
     * The name of the stack for which to list sessions.
     */
    StackName: String;
    /**
     * The name of the fleet for which to list sessions.
     */
    FleetName: String;
    /**
     * The user for whom to list sessions. Use null to describe all the sessions for the stack and fleet.
     */
    UserId?: UserId;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
    /**
     * The size of each page of results. The default value is 20 and the maximum supported value is 50.
     */
    Limit?: Integer;
    /**
     * The authentication method of the user. It can be API for a user authenticated using a streaming URL, or SAML for a SAML federated user. If an authentication type is not provided, the operation defaults to users authenticated using a streaming URL.
     */
    AuthenticationType?: AuthenticationType;
  }
  export interface DescribeSessionsResult {
    /**
     * The list of streaming sessions.
     */
    Sessions?: SessionList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface DescribeStacksRequest {
    /**
     * The stack names to describe. Use null to describe all the stacks for the AWS account.
     */
    Names?: StringList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface DescribeStacksResult {
    /**
     * The list of stack details.
     */
    Stacks?: StackList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export type Description = string;
  export interface DisassociateFleetRequest {
    /**
     * The name of the fleet to disassociate.
     */
    FleetName: String;
    /**
     * The name of the stack with which the fleet is associated.
     */
    StackName: String;
  }
  export interface DisassociateFleetResult {
  }
  export type DisplayName = string;
  export type ErrorMessage = string;
  export interface ExpireSessionRequest {
    /**
     * The unique identifier of the streaming session to be stopped.
     */
    SessionId: String;
  }
  export interface ExpireSessionResult {
  }
  export interface Fleet {
    /**
     * The ARN for the fleet.
     */
    Arn: Arn;
    /**
     * The name of the fleet.
     */
    Name: String;
    /**
     * The name displayed to end users on the AppStream 2.0 portal.
     */
    DisplayName?: String;
    /**
     * The description displayed to end users on the AppStream 2.0 portal.
     */
    Description?: String;
    /**
     * The image used by the fleet.
     */
    ImageName: String;
    /**
     * The instance type of compute resources for the fleet. The fleet instances are launched from this instance type. 
     */
    InstanceType: String;
    /**
     * The capacity information for the fleet.
     */
    ComputeCapacityStatus: ComputeCapacityStatus;
    /**
     * The maximum time for which a streaming session can run. The value can be any numeric value in seconds between 600 and 57600.
     */
    MaxUserDurationInSeconds?: Integer;
    /**
     * The time after disconnection when a session is considered to have ended. If a user who got disconnected reconnects within this timeout interval, the user is connected back to their previous session. The input can be any numeric value in seconds between 60 and 57600.
     */
    DisconnectTimeoutInSeconds?: Integer;
    /**
     * The current state for the fleet.
     */
    State: FleetState;
    /**
     * The VPC configuration for the fleet.
     */
    VpcConfig?: VpcConfig;
    /**
     * The time at which the fleet was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The list of fleet errors is appended to this list.
     */
    FleetErrors?: FleetErrors;
    /**
     * Whether default Internet access is enabled for the fleet. 
     */
    EnableDefaultInternetAccess?: BooleanObject;
  }
  export type FleetAttribute = "VPC_CONFIGURATION"|"VPC_CONFIGURATION_SECURITY_GROUP_IDS"|string;
  export type FleetAttributes = FleetAttribute[];
  export interface FleetError {
    /**
     * The error code for the fleet error.
     */
    ErrorCode?: FleetErrorCode;
    /**
     * The error message generated when the fleet has errors.
     */
    ErrorMessage?: String;
  }
  export type FleetErrorCode = "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION"|"IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION"|"IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION"|"NETWORK_INTERFACE_LIMIT_EXCEEDED"|"INTERNAL_SERVICE_ERROR"|"IAM_SERVICE_ROLE_IS_MISSING"|"SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES"|"IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION"|"SUBNET_NOT_FOUND"|"IMAGE_NOT_FOUND"|"INVALID_SUBNET_CONFIGURATION"|string;
  export type FleetErrors = FleetError[];
  export type FleetList = Fleet[];
  export type FleetState = "STARTING"|"RUNNING"|"STOPPING"|"STOPPED"|string;
  export interface Image {
    /**
     * The unique identifier for the image.
     */
    Name: String;
    /**
     * The ARN for the image.
     */
    Arn?: Arn;
    /**
     * The source image ARN from which this image was created.
     */
    BaseImageArn?: Arn;
    /**
     * The display name for the image.
     */
    DisplayName?: String;
    /**
     * The image starts in the PENDING state, and then moves to AVAILABLE if image creation succeeds and FAILED if image creation has failed.
     */
    State?: ImageState;
    /**
     * The visibility of an image to the user; images can be public or private.
     */
    Visibility?: VisibilityType;
    /**
     * Whether an image builder can be launched from this image.
     */
    ImageBuilderSupported?: Boolean;
    /**
     * The operating system platform of the image.
     */
    Platform?: PlatformType;
    /**
     * A meaningful description for the image.
     */
    Description?: String;
    /**
     * The reason why the last state change occurred.
     */
    StateChangeReason?: ImageStateChangeReason;
    /**
     * The applications associated with an image.
     */
    Applications?: Applications;
    /**
     * The timestamp when the image was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The AWS release date of the public base image. For private images, this date is the release date of the base image from which the image was created.
     */
    PublicBaseImageReleasedDate?: Timestamp;
  }
  export type ImageList = Image[];
  export type ImageState = "PENDING"|"AVAILABLE"|"FAILED"|"DELETING"|string;
  export interface ImageStateChangeReason {
    /**
     * The state change reason code of the image.
     */
    Code?: ImageStateChangeReasonCode;
    /**
     * The state change reason message to the end user.
     */
    Message?: String;
  }
  export type ImageStateChangeReasonCode = "INTERNAL_ERROR"|"IMAGE_BUILDER_NOT_AVAILABLE"|string;
  export type Integer = number;
  export interface ListAssociatedFleetsRequest {
    /**
     * The name of the stack whose associated fleets are listed.
     */
    StackName: String;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface ListAssociatedFleetsResult {
    /**
     * The names of associated fleets.
     */
    Names?: StringList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface ListAssociatedStacksRequest {
    /**
     * The name of the fleet whose associated stacks are listed.
     */
    FleetName: String;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface ListAssociatedStacksResult {
    /**
     * The names of associated stacks.
     */
    Names?: StringList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export type Long = number;
  export type Metadata = {[key: string]: String};
  export type Name = string;
  export type PlatformType = "WINDOWS"|string;
  export type ResourceIdentifier = string;
  export type SecurityGroupIdList = String[];
  export interface Session {
    /**
     * The unique ID for a streaming session.
     */
    Id: String;
    /**
     * The identifier of the user for whom the session was created.
     */
    UserId: UserId;
    /**
     * The name of the stack for which the streaming session was created.
     */
    StackName: String;
    /**
     * The name of the fleet for which the streaming session was created.
     */
    FleetName: String;
    /**
     * The current state of the streaming session.
     */
    State: SessionState;
    /**
     * The authentication method of the user for whom the session was created. It can be API for a user authenticated using a streaming URL or SAML for a SAML federated user.
     */
    AuthenticationType?: AuthenticationType;
  }
  export type SessionList = Session[];
  export type SessionState = "ACTIVE"|"PENDING"|"EXPIRED"|string;
  export interface Stack {
    /**
     * The ARN of the stack.
     */
    Arn?: Arn;
    /**
     * The unique identifier of the stack.
     */
    Name: String;
    /**
     * A meaningful description for the stack.
     */
    Description?: String;
    /**
     * A display name for the stack.
     */
    DisplayName?: String;
    /**
     * The timestamp when the stack was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The storage connectors to be enabled for the stack.
     */
    StorageConnectors?: StorageConnectorList;
    /**
     * The list of errors associated with the stack.
     */
    StackErrors?: StackErrors;
  }
  export interface StackError {
    /**
     * The error code of a stack error.
     */
    ErrorCode?: StackErrorCode;
    /**
     * The error message of a stack error.
     */
    ErrorMessage?: String;
  }
  export type StackErrorCode = "STORAGE_CONNECTOR_ERROR"|"INTERNAL_SERVICE_ERROR"|string;
  export type StackErrors = StackError[];
  export type StackList = Stack[];
  export interface StartFleetRequest {
    /**
     * The name of the fleet to start.
     */
    Name: String;
  }
  export interface StartFleetResult {
  }
  export interface StopFleetRequest {
    /**
     * The name of the fleet to stop.
     */
    Name: String;
  }
  export interface StopFleetResult {
  }
  export interface StorageConnector {
    /**
     * The type of storage connector. The possible values include: HOMEFOLDERS.
     */
    ConnectorType: StorageConnectorType;
    /**
     * The ARN associated with the storage connector.
     */
    ResourceIdentifier?: ResourceIdentifier;
  }
  export type StorageConnectorList = StorageConnector[];
  export type StorageConnectorType = "HOMEFOLDERS"|string;
  export type String = string;
  export type StringList = String[];
  export type SubnetIdList = String[];
  export type Timestamp = Date;
  export interface UpdateFleetRequest {
    /**
     * The image name from which a fleet is created.
     */
    ImageName?: String;
    /**
     * The name of the fleet.
     */
    Name: String;
    /**
     * The instance type of compute resources for the fleet. Fleet instances are launched from this instance type.
     */
    InstanceType?: String;
    /**
     * The parameters for the capacity allocated to the fleet. 
     */
    ComputeCapacity?: ComputeCapacity;
    /**
     * The VPC configuration for the fleet.
     */
    VpcConfig?: VpcConfig;
    /**
     * The maximum time for which a streaming session can run. The input can be any numeric value in seconds between 600 and 57600.
     */
    MaxUserDurationInSeconds?: Integer;
    /**
     * The time after disconnection when a session is considered to have ended. If a user who got disconnected reconnects within this timeout interval, the user is connected back to their previous session. The input can be any numeric value in seconds between 60 and 57600.
     */
    DisconnectTimeoutInSeconds?: Integer;
    /**
     * Delete the VPC association for the specified fleet.
     */
    DeleteVpcConfig?: Boolean;
    /**
     * The description displayed to end users on the AppStream 2.0 portal.
     */
    Description?: Description;
    /**
     * The name displayed to end users on the AppStream 2.0 portal.
     */
    DisplayName?: DisplayName;
    /**
     * Enables or disables default Internet access for the fleet.
     */
    EnableDefaultInternetAccess?: BooleanObject;
    /**
     * Fleet attributes to be deleted.
     */
    AttributesToDelete?: FleetAttributes;
  }
  export interface UpdateFleetResult {
    /**
     * A list of fleet details.
     */
    Fleet?: Fleet;
  }
  export interface UpdateStackRequest {
    /**
     * The name displayed to end users on the AppStream 2.0 portal.
     */
    DisplayName?: DisplayName;
    /**
     * The description displayed to end users on the AppStream 2.0 portal.
     */
    Description?: Description;
    /**
     * The name of the stack to update.
     */
    Name: String;
    /**
     * The storage connectors to be enabled for the stack.
     */
    StorageConnectors?: StorageConnectorList;
    /**
     * Remove all the storage connectors currently enabled for the stack.
     */
    DeleteStorageConnectors?: Boolean;
  }
  export interface UpdateStackResult {
    /**
     * A list of stack details.
     */
    Stack?: Stack;
  }
  export type UserId = string;
  export type VisibilityType = "PUBLIC"|"PRIVATE"|string;
  export interface VpcConfig {
    /**
     * The list of subnets to which a network interface is established from the fleet instance.
     */
    SubnetIds?: SubnetIdList;
    /**
     * Security groups associated with the fleet.
     */
    SecurityGroupIds?: SecurityGroupIdList;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-12-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AppStream client.
   */
  export import Types = AppStream;
}
export = AppStream;
