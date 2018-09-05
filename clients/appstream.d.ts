import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
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
   * Associates the specified fleet with the specified stack.
   */
  associateFleet(params: AppStream.Types.AssociateFleetRequest, callback?: (err: AWSError, data: AppStream.Types.AssociateFleetResult) => void): Request<AppStream.Types.AssociateFleetResult, AWSError>;
  /**
   * Associates the specified fleet with the specified stack.
   */
  associateFleet(callback?: (err: AWSError, data: AppStream.Types.AssociateFleetResult) => void): Request<AppStream.Types.AssociateFleetResult, AWSError>;
  /**
   * Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
   */
  copyImage(params: AppStream.Types.CopyImageRequest, callback?: (err: AWSError, data: AppStream.Types.CopyImageResponse) => void): Request<AppStream.Types.CopyImageResponse, AWSError>;
  /**
   * Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
   */
  copyImage(callback?: (err: AWSError, data: AppStream.Types.CopyImageResponse) => void): Request<AppStream.Types.CopyImageResponse, AWSError>;
  /**
   * Creates a Directory Config object in AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
   */
  createDirectoryConfig(params: AppStream.Types.CreateDirectoryConfigRequest, callback?: (err: AWSError, data: AppStream.Types.CreateDirectoryConfigResult) => void): Request<AppStream.Types.CreateDirectoryConfigResult, AWSError>;
  /**
   * Creates a Directory Config object in AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
   */
  createDirectoryConfig(callback?: (err: AWSError, data: AppStream.Types.CreateDirectoryConfigResult) => void): Request<AppStream.Types.CreateDirectoryConfigResult, AWSError>;
  /**
   * Creates a fleet. A fleet consists of streaming instances that run a specified image.
   */
  createFleet(params: AppStream.Types.CreateFleetRequest, callback?: (err: AWSError, data: AppStream.Types.CreateFleetResult) => void): Request<AppStream.Types.CreateFleetResult, AWSError>;
  /**
   * Creates a fleet. A fleet consists of streaming instances that run a specified image.
   */
  createFleet(callback?: (err: AWSError, data: AppStream.Types.CreateFleetResult) => void): Request<AppStream.Types.CreateFleetResult, AWSError>;
  /**
   * Creates an image builder. An image builder is a virtual machine that is used to create an image. The initial state of the builder is PENDING. When it is ready, the state is RUNNING.
   */
  createImageBuilder(params: AppStream.Types.CreateImageBuilderRequest, callback?: (err: AWSError, data: AppStream.Types.CreateImageBuilderResult) => void): Request<AppStream.Types.CreateImageBuilderResult, AWSError>;
  /**
   * Creates an image builder. An image builder is a virtual machine that is used to create an image. The initial state of the builder is PENDING. When it is ready, the state is RUNNING.
   */
  createImageBuilder(callback?: (err: AWSError, data: AppStream.Types.CreateImageBuilderResult) => void): Request<AppStream.Types.CreateImageBuilderResult, AWSError>;
  /**
   * Creates a URL to start an image builder streaming session.
   */
  createImageBuilderStreamingURL(params: AppStream.Types.CreateImageBuilderStreamingURLRequest, callback?: (err: AWSError, data: AppStream.Types.CreateImageBuilderStreamingURLResult) => void): Request<AppStream.Types.CreateImageBuilderStreamingURLResult, AWSError>;
  /**
   * Creates a URL to start an image builder streaming session.
   */
  createImageBuilderStreamingURL(callback?: (err: AWSError, data: AppStream.Types.CreateImageBuilderStreamingURLResult) => void): Request<AppStream.Types.CreateImageBuilderStreamingURLResult, AWSError>;
  /**
   * Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 
   */
  createStack(params: AppStream.Types.CreateStackRequest, callback?: (err: AWSError, data: AppStream.Types.CreateStackResult) => void): Request<AppStream.Types.CreateStackResult, AWSError>;
  /**
   * Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 
   */
  createStack(callback?: (err: AWSError, data: AppStream.Types.CreateStackResult) => void): Request<AppStream.Types.CreateStackResult, AWSError>;
  /**
   * Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 
   */
  createStreamingURL(params: AppStream.Types.CreateStreamingURLRequest, callback?: (err: AWSError, data: AppStream.Types.CreateStreamingURLResult) => void): Request<AppStream.Types.CreateStreamingURLResult, AWSError>;
  /**
   * Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 
   */
  createStreamingURL(callback?: (err: AWSError, data: AppStream.Types.CreateStreamingURLResult) => void): Request<AppStream.Types.CreateStreamingURLResult, AWSError>;
  /**
   * Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
   */
  deleteDirectoryConfig(params: AppStream.Types.DeleteDirectoryConfigRequest, callback?: (err: AWSError, data: AppStream.Types.DeleteDirectoryConfigResult) => void): Request<AppStream.Types.DeleteDirectoryConfigResult, AWSError>;
  /**
   * Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
   */
  deleteDirectoryConfig(callback?: (err: AWSError, data: AppStream.Types.DeleteDirectoryConfigResult) => void): Request<AppStream.Types.DeleteDirectoryConfigResult, AWSError>;
  /**
   * Deletes the specified fleet.
   */
  deleteFleet(params: AppStream.Types.DeleteFleetRequest, callback?: (err: AWSError, data: AppStream.Types.DeleteFleetResult) => void): Request<AppStream.Types.DeleteFleetResult, AWSError>;
  /**
   * Deletes the specified fleet.
   */
  deleteFleet(callback?: (err: AWSError, data: AppStream.Types.DeleteFleetResult) => void): Request<AppStream.Types.DeleteFleetResult, AWSError>;
  /**
   * Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
   */
  deleteImage(params: AppStream.Types.DeleteImageRequest, callback?: (err: AWSError, data: AppStream.Types.DeleteImageResult) => void): Request<AppStream.Types.DeleteImageResult, AWSError>;
  /**
   * Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
   */
  deleteImage(callback?: (err: AWSError, data: AppStream.Types.DeleteImageResult) => void): Request<AppStream.Types.DeleteImageResult, AWSError>;
  /**
   * Deletes the specified image builder and releases the capacity.
   */
  deleteImageBuilder(params: AppStream.Types.DeleteImageBuilderRequest, callback?: (err: AWSError, data: AppStream.Types.DeleteImageBuilderResult) => void): Request<AppStream.Types.DeleteImageBuilderResult, AWSError>;
  /**
   * Deletes the specified image builder and releases the capacity.
   */
  deleteImageBuilder(callback?: (err: AWSError, data: AppStream.Types.DeleteImageBuilderResult) => void): Request<AppStream.Types.DeleteImageBuilderResult, AWSError>;
  /**
   * Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
   */
  deleteImagePermissions(params: AppStream.Types.DeleteImagePermissionsRequest, callback?: (err: AWSError, data: AppStream.Types.DeleteImagePermissionsResult) => void): Request<AppStream.Types.DeleteImagePermissionsResult, AWSError>;
  /**
   * Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
   */
  deleteImagePermissions(callback?: (err: AWSError, data: AppStream.Types.DeleteImagePermissionsResult) => void): Request<AppStream.Types.DeleteImagePermissionsResult, AWSError>;
  /**
   * Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
   */
  deleteStack(params: AppStream.Types.DeleteStackRequest, callback?: (err: AWSError, data: AppStream.Types.DeleteStackResult) => void): Request<AppStream.Types.DeleteStackResult, AWSError>;
  /**
   * Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
   */
  deleteStack(callback?: (err: AWSError, data: AppStream.Types.DeleteStackResult) => void): Request<AppStream.Types.DeleteStackResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the information required to join streaming instances to an Active Directory domain.  Although the response syntax in this topic includes the account password, this password is not returned in the actual response.
   */
  describeDirectoryConfigs(params: AppStream.Types.DescribeDirectoryConfigsRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeDirectoryConfigsResult) => void): Request<AppStream.Types.DescribeDirectoryConfigsResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the information required to join streaming instances to an Active Directory domain.  Although the response syntax in this topic includes the account password, this password is not returned in the actual response.
   */
  describeDirectoryConfigs(callback?: (err: AWSError, data: AppStream.Types.DescribeDirectoryConfigsResult) => void): Request<AppStream.Types.DescribeDirectoryConfigsResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
   */
  describeFleets(params: AppStream.Types.DescribeFleetsRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
   */
  describeFleets(callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
   */
  describeImageBuilders(params: AppStream.Types.DescribeImageBuildersRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeImageBuildersResult) => void): Request<AppStream.Types.DescribeImageBuildersResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
   */
  describeImageBuilders(callback?: (err: AWSError, data: AppStream.Types.DescribeImageBuildersResult) => void): Request<AppStream.Types.DescribeImageBuildersResult, AWSError>;
  /**
   * Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 
   */
  describeImagePermissions(params: AppStream.Types.DescribeImagePermissionsRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeImagePermissionsResult) => void): Request<AppStream.Types.DescribeImagePermissionsResult, AWSError>;
  /**
   * Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 
   */
  describeImagePermissions(callback?: (err: AWSError, data: AppStream.Types.DescribeImagePermissionsResult) => void): Request<AppStream.Types.DescribeImagePermissionsResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
   */
  describeImages(params: AppStream.Types.DescribeImagesRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeImagesResult) => void): Request<AppStream.Types.DescribeImagesResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
   */
  describeImages(callback?: (err: AWSError, data: AppStream.Types.DescribeImagesResult) => void): Request<AppStream.Types.DescribeImagesResult, AWSError>;
  /**
   * Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a user ID is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
   */
  describeSessions(params: AppStream.Types.DescribeSessionsRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeSessionsResult) => void): Request<AppStream.Types.DescribeSessionsResult, AWSError>;
  /**
   * Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a user ID is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
   */
  describeSessions(callback?: (err: AWSError, data: AppStream.Types.DescribeSessionsResult) => void): Request<AppStream.Types.DescribeSessionsResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
   */
  describeStacks(params: AppStream.Types.DescribeStacksRequest, callback?: (err: AWSError, data: AppStream.Types.DescribeStacksResult) => void): Request<AppStream.Types.DescribeStacksResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
   */
  describeStacks(callback?: (err: AWSError, data: AppStream.Types.DescribeStacksResult) => void): Request<AppStream.Types.DescribeStacksResult, AWSError>;
  /**
   * Disassociates the specified fleet from the specified stack.
   */
  disassociateFleet(params: AppStream.Types.DisassociateFleetRequest, callback?: (err: AWSError, data: AppStream.Types.DisassociateFleetResult) => void): Request<AppStream.Types.DisassociateFleetResult, AWSError>;
  /**
   * Disassociates the specified fleet from the specified stack.
   */
  disassociateFleet(callback?: (err: AWSError, data: AppStream.Types.DisassociateFleetResult) => void): Request<AppStream.Types.DisassociateFleetResult, AWSError>;
  /**
   * Immediately stops the specified streaming session.
   */
  expireSession(params: AppStream.Types.ExpireSessionRequest, callback?: (err: AWSError, data: AppStream.Types.ExpireSessionResult) => void): Request<AppStream.Types.ExpireSessionResult, AWSError>;
  /**
   * Immediately stops the specified streaming session.
   */
  expireSession(callback?: (err: AWSError, data: AppStream.Types.ExpireSessionResult) => void): Request<AppStream.Types.ExpireSessionResult, AWSError>;
  /**
   * Retrieves the name of the fleet that is associated with the specified stack.
   */
  listAssociatedFleets(params: AppStream.Types.ListAssociatedFleetsRequest, callback?: (err: AWSError, data: AppStream.Types.ListAssociatedFleetsResult) => void): Request<AppStream.Types.ListAssociatedFleetsResult, AWSError>;
  /**
   * Retrieves the name of the fleet that is associated with the specified stack.
   */
  listAssociatedFleets(callback?: (err: AWSError, data: AppStream.Types.ListAssociatedFleetsResult) => void): Request<AppStream.Types.ListAssociatedFleetsResult, AWSError>;
  /**
   * Retrieves the name of the stack with which the specified fleet is associated.
   */
  listAssociatedStacks(params: AppStream.Types.ListAssociatedStacksRequest, callback?: (err: AWSError, data: AppStream.Types.ListAssociatedStacksResult) => void): Request<AppStream.Types.ListAssociatedStacksResult, AWSError>;
  /**
   * Retrieves the name of the stack with which the specified fleet is associated.
   */
  listAssociatedStacks(callback?: (err: AWSError, data: AppStream.Types.ListAssociatedStacksResult) => void): Request<AppStream.Types.ListAssociatedStacksResult, AWSError>;
  /**
   * Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Developer Guide.
   */
  listTagsForResource(params: AppStream.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: AppStream.Types.ListTagsForResourceResponse) => void): Request<AppStream.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Developer Guide.
   */
  listTagsForResource(callback?: (err: AWSError, data: AppStream.Types.ListTagsForResourceResponse) => void): Request<AppStream.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Starts the specified fleet.
   */
  startFleet(params: AppStream.Types.StartFleetRequest, callback?: (err: AWSError, data: AppStream.Types.StartFleetResult) => void): Request<AppStream.Types.StartFleetResult, AWSError>;
  /**
   * Starts the specified fleet.
   */
  startFleet(callback?: (err: AWSError, data: AppStream.Types.StartFleetResult) => void): Request<AppStream.Types.StartFleetResult, AWSError>;
  /**
   * Starts the specified image builder.
   */
  startImageBuilder(params: AppStream.Types.StartImageBuilderRequest, callback?: (err: AWSError, data: AppStream.Types.StartImageBuilderResult) => void): Request<AppStream.Types.StartImageBuilderResult, AWSError>;
  /**
   * Starts the specified image builder.
   */
  startImageBuilder(callback?: (err: AWSError, data: AppStream.Types.StartImageBuilderResult) => void): Request<AppStream.Types.StartImageBuilderResult, AWSError>;
  /**
   * Stops the specified fleet.
   */
  stopFleet(params: AppStream.Types.StopFleetRequest, callback?: (err: AWSError, data: AppStream.Types.StopFleetResult) => void): Request<AppStream.Types.StopFleetResult, AWSError>;
  /**
   * Stops the specified fleet.
   */
  stopFleet(callback?: (err: AWSError, data: AppStream.Types.StopFleetResult) => void): Request<AppStream.Types.StopFleetResult, AWSError>;
  /**
   * Stops the specified image builder.
   */
  stopImageBuilder(params: AppStream.Types.StopImageBuilderRequest, callback?: (err: AWSError, data: AppStream.Types.StopImageBuilderResult) => void): Request<AppStream.Types.StopImageBuilderResult, AWSError>;
  /**
   * Stops the specified image builder.
   */
  stopImageBuilder(callback?: (err: AWSError, data: AppStream.Types.StopImageBuilderResult) => void): Request<AppStream.Types.StopImageBuilderResult, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value. To list the current tags for your resources, use ListTagsForResource. To disassociate tags from your resources, use UntagResource. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Developer Guide.
   */
  tagResource(params: AppStream.Types.TagResourceRequest, callback?: (err: AWSError, data: AppStream.Types.TagResourceResponse) => void): Request<AppStream.Types.TagResourceResponse, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value. To list the current tags for your resources, use ListTagsForResource. To disassociate tags from your resources, use UntagResource. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Developer Guide.
   */
  tagResource(callback?: (err: AWSError, data: AppStream.Types.TagResourceResponse) => void): Request<AppStream.Types.TagResourceResponse, AWSError>;
  /**
   * Disassociates one or more specified tags from the specified AppStream 2.0 resource. To list the current tags for your resources, use ListTagsForResource. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Developer Guide.
   */
  untagResource(params: AppStream.Types.UntagResourceRequest, callback?: (err: AWSError, data: AppStream.Types.UntagResourceResponse) => void): Request<AppStream.Types.UntagResourceResponse, AWSError>;
  /**
   * Disassociates one or more specified tags from the specified AppStream 2.0 resource. To list the current tags for your resources, use ListTagsForResource. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Developer Guide.
   */
  untagResource(callback?: (err: AWSError, data: AppStream.Types.UntagResourceResponse) => void): Request<AppStream.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the specified Directory Config object in AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
   */
  updateDirectoryConfig(params: AppStream.Types.UpdateDirectoryConfigRequest, callback?: (err: AWSError, data: AppStream.Types.UpdateDirectoryConfigResult) => void): Request<AppStream.Types.UpdateDirectoryConfigResult, AWSError>;
  /**
   * Updates the specified Directory Config object in AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
   */
  updateDirectoryConfig(callback?: (err: AWSError, data: AppStream.Types.UpdateDirectoryConfigResult) => void): Request<AppStream.Types.UpdateDirectoryConfigResult, AWSError>;
  /**
   * Updates the specified fleet. If the fleet is in the STOPPED state, you can update any attribute except the fleet name. If the fleet is in the RUNNING state, you can update the DisplayName and ComputeCapacity attributes. If the fleet is in the STARTING or STOPPING state, you can't update it.
   */
  updateFleet(params: AppStream.Types.UpdateFleetRequest, callback?: (err: AWSError, data: AppStream.Types.UpdateFleetResult) => void): Request<AppStream.Types.UpdateFleetResult, AWSError>;
  /**
   * Updates the specified fleet. If the fleet is in the STOPPED state, you can update any attribute except the fleet name. If the fleet is in the RUNNING state, you can update the DisplayName and ComputeCapacity attributes. If the fleet is in the STARTING or STOPPING state, you can't update it.
   */
  updateFleet(callback?: (err: AWSError, data: AppStream.Types.UpdateFleetResult) => void): Request<AppStream.Types.UpdateFleetResult, AWSError>;
  /**
   * Adds or updates permissions for the specified private image. 
   */
  updateImagePermissions(params: AppStream.Types.UpdateImagePermissionsRequest, callback?: (err: AWSError, data: AppStream.Types.UpdateImagePermissionsResult) => void): Request<AppStream.Types.UpdateImagePermissionsResult, AWSError>;
  /**
   * Adds or updates permissions for the specified private image. 
   */
  updateImagePermissions(callback?: (err: AWSError, data: AppStream.Types.UpdateImagePermissionsResult) => void): Request<AppStream.Types.UpdateImagePermissionsResult, AWSError>;
  /**
   * Updates the specified fields for the specified stack.
   */
  updateStack(params: AppStream.Types.UpdateStackRequest, callback?: (err: AWSError, data: AppStream.Types.UpdateStackResult) => void): Request<AppStream.Types.UpdateStackResult, AWSError>;
  /**
   * Updates the specified fields for the specified stack.
   */
  updateStack(callback?: (err: AWSError, data: AppStream.Types.UpdateStackResult) => void): Request<AppStream.Types.UpdateStackResult, AWSError>;
  /**
   * Waits for the fleetStarted state by periodically calling the underlying AppStream.describeFleetsoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "fleetStarted", params: AppStream.Types.DescribeFleetsRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Waits for the fleetStarted state by periodically calling the underlying AppStream.describeFleetsoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "fleetStarted", callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Waits for the fleetStopped state by periodically calling the underlying AppStream.describeFleetsoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "fleetStopped", params: AppStream.Types.DescribeFleetsRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
  /**
   * Waits for the fleetStopped state by periodically calling the underlying AppStream.describeFleetsoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "fleetStopped", callback?: (err: AWSError, data: AppStream.Types.DescribeFleetsResult) => void): Request<AppStream.Types.DescribeFleetsResult, AWSError>;
}
declare namespace AppStream {
  export type AccountName = string;
  export type AccountPassword = string;
  export type Action = "CLIPBOARD_COPY_FROM_LOCAL_DEVICE"|"CLIPBOARD_COPY_TO_LOCAL_DEVICE"|"FILE_UPLOAD"|"FILE_DOWNLOAD"|"PRINTING_TO_LOCAL_DEVICE"|string;
  export interface Application {
    /**
     * The name of the application.
     */
    Name?: String;
    /**
     * The application name for display.
     */
    DisplayName?: String;
    /**
     * The URL for the application icon. This URL might be time-limited.
     */
    IconURL?: String;
    /**
     * The path to the application executable in the instance.
     */
    LaunchPath?: String;
    /**
     * The arguments that are passed to the application at launch.
     */
    LaunchParameters?: String;
    /**
     * If there is a problem, the application can be disabled after image creation.
     */
    Enabled?: Boolean;
    /**
     * Additional attributes that describe the application.
     */
    Metadata?: Metadata;
  }
  export interface ApplicationSettings {
    /**
     * Enables or disables persistent application settings for users during their streaming sessions. 
     */
    Enabled: Boolean;
    /**
     * The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack. 
     */
    SettingsGroup?: SettingsGroup;
  }
  export interface ApplicationSettingsResponse {
    /**
     * Specifies whether persistent application settings are enabled for users during their streaming sessions.
     */
    Enabled?: Boolean;
    /**
     * The path prefix for the S3 bucket where users’ persistent application settings are stored.
     */
    SettingsGroup?: SettingsGroup;
    /**
     * The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an AWS Region, an S3 bucket is created. The bucket is unique to the AWS account and the Region. 
     */
    S3BucketName?: String;
  }
  export type Applications = Application[];
  export type AppstreamAgentVersion = string;
  export type Arn = string;
  export type ArnList = Arn[];
  export interface AssociateFleetRequest {
    /**
     * The name of the fleet. 
     */
    FleetName: String;
    /**
     * The name of the stack.
     */
    StackName: String;
  }
  export interface AssociateFleetResult {
  }
  export type AuthenticationType = "API"|"SAML"|"USERPOOL"|string;
  export type AwsAccountId = string;
  export type AwsAccountIdList = AwsAccountId[];
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
     * The number of instances in use for streaming.
     */
    InUse?: Integer;
    /**
     * The number of currently available instances that can be used to stream sessions.
     */
    Available?: Integer;
  }
  export interface CopyImageRequest {
    /**
     * The name of the image to copy.
     */
    SourceImageName: Name;
    /**
     * The name that the image will have when it is copied to the destination.
     */
    DestinationImageName: Name;
    /**
     * The destination region to which the image will be copied. This parameter is required, even if you are copying an image within the same region.
     */
    DestinationRegion: RegionName;
    /**
     * The description that the image will have when it is copied to the destination.
     */
    DestinationImageDescription?: Description;
  }
  export interface CopyImageResponse {
    /**
     * The name of the destination image.
     */
    DestinationImageName?: Name;
  }
  export interface CreateDirectoryConfigRequest {
    /**
     * The fully qualified name of the directory (for example, corp.example.com).
     */
    DirectoryName: DirectoryName;
    /**
     * The distinguished names of the organizational units for computer accounts.
     */
    OrganizationalUnitDistinguishedNames: OrganizationalUnitDistinguishedNamesList;
    /**
     * The credentials for the service account used by the streaming instance to connect to the directory.
     */
    ServiceAccountCredentials: ServiceAccountCredentials;
  }
  export interface CreateDirectoryConfigResult {
    /**
     * Information about the directory configuration.
     */
    DirectoryConfig?: DirectoryConfig;
  }
  export interface CreateFleetRequest {
    /**
     * A unique name for the fleet.
     */
    Name: Name;
    /**
     * The name of the image used to create the fleet.
     */
    ImageName?: String;
    /**
     * The ARN of the public, private, or shared image to use.
     */
    ImageArn?: Arn;
    /**
     * The instance type to use when launching fleet instances. The following instance types are available:   stream.standard.medium   stream.standard.large   stream.compute.large   stream.compute.xlarge   stream.compute.2xlarge   stream.compute.4xlarge   stream.compute.8xlarge   stream.memory.large   stream.memory.xlarge   stream.memory.2xlarge   stream.memory.4xlarge   stream.memory.8xlarge   stream.graphics-design.large   stream.graphics-design.xlarge   stream.graphics-design.2xlarge   stream.graphics-design.4xlarge   stream.graphics-desktop.2xlarge   stream.graphics-pro.4xlarge   stream.graphics-pro.8xlarge   stream.graphics-pro.16xlarge  
     */
    InstanceType: String;
    /**
     * The fleet type.  ALWAYS_ON  Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.  ON_DEMAND  Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.  
     */
    FleetType?: FleetType;
    /**
     * The desired capacity for the fleet.
     */
    ComputeCapacity: ComputeCapacity;
    /**
     * The VPC configuration for the fleet.
     */
    VpcConfig?: VpcConfig;
    /**
     * The maximum time that a streaming session can run, in seconds. Specify a value between 600 and 57600.
     */
    MaxUserDurationInSeconds?: Integer;
    /**
     * The time after disconnection when a session is considered to have ended, in seconds. If a user who was disconnected reconnects within this time interval, the user is connected to their previous session. Specify a value between 60 and 57600.
     */
    DisconnectTimeoutInSeconds?: Integer;
    /**
     * The description for display.
     */
    Description?: Description;
    /**
     * The fleet name for display.
     */
    DisplayName?: DisplayName;
    /**
     * Enables or disables default internet access for the fleet.
     */
    EnableDefaultInternetAccess?: BooleanObject;
    /**
     * The information needed to join a Microsoft Active Directory domain.
     */
    DomainJoinInfo?: DomainJoinInfo;
  }
  export interface CreateFleetResult {
    /**
     * Information about the fleet.
     */
    Fleet?: Fleet;
  }
  export interface CreateImageBuilderRequest {
    /**
     * A unique name for the image builder.
     */
    Name: Name;
    /**
     * The name of the image used to create the builder.
     */
    ImageName?: String;
    /**
     * The ARN of the public, private, or shared image to use.
     */
    ImageArn?: Arn;
    /**
     * The instance type to use when launching the image builder.
     */
    InstanceType: String;
    /**
     * The description for display.
     */
    Description?: Description;
    /**
     * The image builder name for display.
     */
    DisplayName?: DisplayName;
    /**
     * The VPC configuration for the image builder. You can specify only one subnet.
     */
    VpcConfig?: VpcConfig;
    /**
     * Enables or disables default internet access for the image builder.
     */
    EnableDefaultInternetAccess?: BooleanObject;
    /**
     * The information needed to join a Microsoft Active Directory domain.
     */
    DomainJoinInfo?: DomainJoinInfo;
    /**
     * The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. 
     */
    AppstreamAgentVersion?: AppstreamAgentVersion;
  }
  export interface CreateImageBuilderResult {
    /**
     * Information about the image builder.
     */
    ImageBuilder?: ImageBuilder;
  }
  export interface CreateImageBuilderStreamingURLRequest {
    /**
     * The name of the image builder.
     */
    Name: String;
    /**
     * The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 3600 seconds.
     */
    Validity?: Long;
  }
  export interface CreateImageBuilderStreamingURLResult {
    /**
     * The URL to start the AppStream 2.0 streaming session.
     */
    StreamingURL?: String;
    /**
     * The elapsed time, in seconds after the Unix epoch, when this URL expires.
     */
    Expires?: Timestamp;
  }
  export interface CreateStackRequest {
    /**
     * The name of the stack.
     */
    Name: Name;
    /**
     * The description for display.
     */
    Description?: Description;
    /**
     * The stack name for display.
     */
    DisplayName?: DisplayName;
    /**
     * The storage connectors to enable.
     */
    StorageConnectors?: StorageConnectorList;
    /**
     * The URL that users are redirected to after their streaming session ends.
     */
    RedirectURL?: RedirectURL;
    /**
     * The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
     */
    FeedbackURL?: FeedbackURL;
    /**
     * The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. 
     */
    UserSettings?: UserSettingList;
    /**
     * The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
     */
    ApplicationSettings?: ApplicationSettings;
  }
  export interface CreateStackResult {
    /**
     * Information about the stack.
     */
    Stack?: Stack;
  }
  export interface CreateStreamingURLRequest {
    /**
     * The name of the stack.
     */
    StackName: String;
    /**
     * The name of the fleet.
     */
    FleetName: String;
    /**
     * The ID of the user.
     */
    UserId: StreamingUrlUserId;
    /**
     * The name of the application to launch after the session starts. This is the name that you specified as Name in the Image Assistant.
     */
    ApplicationId?: String;
    /**
     * The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 60 seconds.
     */
    Validity?: Long;
    /**
     * The session context. For more information, see Session Context in the Amazon AppStream 2.0 Developer Guide.
     */
    SessionContext?: String;
  }
  export interface CreateStreamingURLResult {
    /**
     * The URL to start the AppStream 2.0 streaming session.
     */
    StreamingURL?: String;
    /**
     * The elapsed time, in seconds after the Unix epoch, when this URL expires.
     */
    Expires?: Timestamp;
  }
  export interface DeleteDirectoryConfigRequest {
    /**
     * The name of the directory configuration.
     */
    DirectoryName: DirectoryName;
  }
  export interface DeleteDirectoryConfigResult {
  }
  export interface DeleteFleetRequest {
    /**
     * The name of the fleet.
     */
    Name: String;
  }
  export interface DeleteFleetResult {
  }
  export interface DeleteImageBuilderRequest {
    /**
     * The name of the image builder.
     */
    Name: Name;
  }
  export interface DeleteImageBuilderResult {
    /**
     * Information about the image builder.
     */
    ImageBuilder?: ImageBuilder;
  }
  export interface DeleteImagePermissionsRequest {
    /**
     * The name of the private image.
     */
    Name: Name;
    /**
     * The 12-digit ID of the AWS account for which to delete image permissions.
     */
    SharedAccountId: AwsAccountId;
  }
  export interface DeleteImagePermissionsResult {
  }
  export interface DeleteImageRequest {
    /**
     * The name of the image.
     */
    Name: Name;
  }
  export interface DeleteImageResult {
    /**
     * Information about the image.
     */
    Image?: Image;
  }
  export interface DeleteStackRequest {
    /**
     * The name of the stack.
     */
    Name: String;
  }
  export interface DeleteStackResult {
  }
  export interface DescribeDirectoryConfigsRequest {
    /**
     * The directory names.
     */
    DirectoryNames?: DirectoryNameList;
    /**
     * The maximum size of each page of results.
     */
    MaxResults?: Integer;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface DescribeDirectoryConfigsResult {
    /**
     * Information about the directory configurations. Note that although the response syntax in this topic includes the account password, this password is not returned in the actual response. 
     */
    DirectoryConfigs?: DirectoryConfigList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface DescribeFleetsRequest {
    /**
     * The names of the fleets to describe.
     */
    Names?: StringList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface DescribeFleetsResult {
    /**
     * Information about the fleets.
     */
    Fleets?: FleetList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface DescribeImageBuildersRequest {
    /**
     * The names of the image builders to describe.
     */
    Names?: StringList;
    /**
     * The maximum size of each page of results.
     */
    MaxResults?: Integer;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface DescribeImageBuildersResult {
    /**
     * Information about the image builders.
     */
    ImageBuilders?: ImageBuilderList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface DescribeImagePermissionsRequest {
    /**
     * The name of the private image for which to describe permissions. The image must be one that you own. 
     */
    Name: Name;
    /**
     * The maximum size of each results page.
     */
    MaxResults?: MaxResults;
    /**
     * The 12-digit ID of one or more AWS accounts with which the image is shared.
     */
    SharedAwsAccountIds?: AwsAccountIdList;
    /**
     * The pagination token to use to retrieve the next page of results. If this value is empty, only the first page is retrieved.
     */
    NextToken?: String;
  }
  export interface DescribeImagePermissionsResult {
    /**
     * The name of the private image.
     */
    Name?: Name;
    /**
     * The permissions for a private image that you own. 
     */
    SharedImagePermissionsList?: SharedImagePermissionsList;
    /**
     * The pagination token to use to retrieve the next page of results. If this value is empty, only the first page is retrieved.
     */
    NextToken?: String;
  }
  export type DescribeImagesMaxResults = number;
  export interface DescribeImagesRequest {
    /**
     * The names of the public or private images to describe.
     */
    Names?: StringList;
    /**
     * The ARNs of the public, private, and shared images to describe.
     */
    Arns?: ArnList;
    /**
     * The type of image (public, private, or shared) to describe. 
     */
    Type?: VisibilityType;
    /**
     * The pagination token to use to retrieve the next page of results. If this value is empty, only the first page is retrieved.
     */
    NextToken?: String;
    /**
     * The maximum size of each page of results.
     */
    MaxResults?: DescribeImagesMaxResults;
  }
  export interface DescribeImagesResult {
    /**
     * Information about the images.
     */
    Images?: ImageList;
    /**
     * The pagination token to use to retrieve the next page of results. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface DescribeSessionsRequest {
    /**
     * The name of the stack. This value is case-sensitive.
     */
    StackName: String;
    /**
     * The name of the fleet. This value is case-sensitive.
     */
    FleetName: String;
    /**
     * The user ID.
     */
    UserId?: UserId;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
    /**
     * The size of each page of results. The default value is 20 and the maximum value is 50.
     */
    Limit?: Integer;
    /**
     * The authentication method. Specify API for a user authenticated using a streaming URL or SAML for a SAML federated user. The default is to authenticate users using a streaming URL.
     */
    AuthenticationType?: AuthenticationType;
  }
  export interface DescribeSessionsResult {
    /**
     * Information about the streaming sessions.
     */
    Sessions?: SessionList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface DescribeStacksRequest {
    /**
     * The names of the stacks to describe.
     */
    Names?: StringList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface DescribeStacksResult {
    /**
     * Information about the stacks.
     */
    Stacks?: StackList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export type Description = string;
  export interface DirectoryConfig {
    /**
     * The fully qualified name of the directory (for example, corp.example.com).
     */
    DirectoryName: DirectoryName;
    /**
     * The distinguished names of the organizational units for computer accounts.
     */
    OrganizationalUnitDistinguishedNames?: OrganizationalUnitDistinguishedNamesList;
    /**
     * The credentials for the service account used by the streaming instance to connect to the directory.
     */
    ServiceAccountCredentials?: ServiceAccountCredentials;
    /**
     * The time the directory configuration was created.
     */
    CreatedTime?: Timestamp;
  }
  export type DirectoryConfigList = DirectoryConfig[];
  export type DirectoryName = string;
  export type DirectoryNameList = DirectoryName[];
  export interface DisassociateFleetRequest {
    /**
     * The name of the fleet.
     */
    FleetName: String;
    /**
     * The name of the stack.
     */
    StackName: String;
  }
  export interface DisassociateFleetResult {
  }
  export type DisplayName = string;
  export type Domain = string;
  export interface DomainJoinInfo {
    /**
     * The fully qualified name of the directory (for example, corp.example.com).
     */
    DirectoryName?: DirectoryName;
    /**
     * The distinguished name of the organizational unit for computer accounts.
     */
    OrganizationalUnitDistinguishedName?: OrganizationalUnitDistinguishedName;
  }
  export type DomainList = Domain[];
  export interface ExpireSessionRequest {
    /**
     * The ID of the streaming session.
     */
    SessionId: String;
  }
  export interface ExpireSessionResult {
  }
  export type FeedbackURL = string;
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
     * The fleet name for display.
     */
    DisplayName?: String;
    /**
     * The description for display.
     */
    Description?: String;
    /**
     * The name of the image used to create the fleet.
     */
    ImageName?: String;
    /**
     * The ARN for the public, private, or shared image.
     */
    ImageArn?: Arn;
    /**
     * The instance type to use when launching fleet instances.
     */
    InstanceType: String;
    /**
     * The fleet type.  ALWAYS_ON  Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.  ON_DEMAND  Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.  
     */
    FleetType?: FleetType;
    /**
     * The capacity status for the fleet.
     */
    ComputeCapacityStatus: ComputeCapacityStatus;
    /**
     * The maximum time that a streaming session can run, in seconds. Specify a value between 600 and 57600.
     */
    MaxUserDurationInSeconds?: Integer;
    /**
     * The time after disconnection when a session is considered to have ended, in seconds. If a user who was disconnected reconnects within this time interval, the user is connected to their previous session. Specify a value between 60 and 57600.
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
     * The time the fleet was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The fleet errors.
     */
    FleetErrors?: FleetErrors;
    /**
     * Indicates whether default internet access is enabled for the fleet.
     */
    EnableDefaultInternetAccess?: BooleanObject;
    /**
     * The information needed to join a Microsoft Active Directory domain.
     */
    DomainJoinInfo?: DomainJoinInfo;
  }
  export type FleetAttribute = "VPC_CONFIGURATION"|"VPC_CONFIGURATION_SECURITY_GROUP_IDS"|"DOMAIN_JOIN_INFO"|string;
  export type FleetAttributes = FleetAttribute[];
  export interface FleetError {
    /**
     * The error code.
     */
    ErrorCode?: FleetErrorCode;
    /**
     * The error message.
     */
    ErrorMessage?: String;
  }
  export type FleetErrorCode = "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION"|"IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION"|"IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION"|"NETWORK_INTERFACE_LIMIT_EXCEEDED"|"INTERNAL_SERVICE_ERROR"|"IAM_SERVICE_ROLE_IS_MISSING"|"SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES"|"IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION"|"SUBNET_NOT_FOUND"|"IMAGE_NOT_FOUND"|"INVALID_SUBNET_CONFIGURATION"|"SECURITY_GROUPS_NOT_FOUND"|"IGW_NOT_ATTACHED"|"IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION"|"DOMAIN_JOIN_ERROR_FILE_NOT_FOUND"|"DOMAIN_JOIN_ERROR_ACCESS_DENIED"|"DOMAIN_JOIN_ERROR_LOGON_FAILURE"|"DOMAIN_JOIN_ERROR_INVALID_PARAMETER"|"DOMAIN_JOIN_ERROR_MORE_DATA"|"DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN"|"DOMAIN_JOIN_ERROR_NOT_SUPPORTED"|"DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME"|"DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED"|"DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED"|"DOMAIN_JOIN_NERR_PASSWORD_EXPIRED"|"DOMAIN_JOIN_INTERNAL_SERVICE_ERROR"|string;
  export type FleetErrors = FleetError[];
  export type FleetList = Fleet[];
  export type FleetState = "STARTING"|"RUNNING"|"STOPPING"|"STOPPED"|string;
  export type FleetType = "ALWAYS_ON"|"ON_DEMAND"|string;
  export interface Image {
    /**
     * The name of the image.
     */
    Name: String;
    /**
     * The ARN of the image.
     */
    Arn?: Arn;
    /**
     * The ARN of the image from which this image was created.
     */
    BaseImageArn?: Arn;
    /**
     * The image name for display.
     */
    DisplayName?: String;
    /**
     * The image starts in the PENDING state. If image creation succeeds, the state is AVAILABLE. If image creation fails, the state is FAILED.
     */
    State?: ImageState;
    /**
     * Indicates whether the image is public or private.
     */
    Visibility?: VisibilityType;
    /**
     * Indicates whether an image builder can be launched from this image.
     */
    ImageBuilderSupported?: Boolean;
    /**
     * The operating system platform of the image.
     */
    Platform?: PlatformType;
    /**
     * The description for display.
     */
    Description?: String;
    /**
     * The reason why the last state change occurred.
     */
    StateChangeReason?: ImageStateChangeReason;
    /**
     * The applications associated with the image.
     */
    Applications?: Applications;
    /**
     * The time the image was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The release date of the public base image. For private images, this date is the release date of the base image from which the image was created.
     */
    PublicBaseImageReleasedDate?: Timestamp;
    /**
     * The version of the AppStream 2.0 agent to use for instances that are launched from this image. 
     */
    AppstreamAgentVersion?: AppstreamAgentVersion;
    /**
     * The permissions to provide to the destination AWS account for the specified image.
     */
    ImagePermissions?: ImagePermissions;
  }
  export interface ImageBuilder {
    /**
     * The name of the image builder.
     */
    Name: String;
    /**
     * The ARN for the image builder.
     */
    Arn?: Arn;
    /**
     * The ARN of the image from which this builder was created.
     */
    ImageArn?: Arn;
    /**
     * The description for display.
     */
    Description?: String;
    /**
     * The image builder name for display.
     */
    DisplayName?: String;
    /**
     * The VPC configuration of the image builder.
     */
    VpcConfig?: VpcConfig;
    /**
     * The instance type for the image builder.
     */
    InstanceType?: String;
    /**
     * The operating system platform of the image builder.
     */
    Platform?: PlatformType;
    /**
     * The state of the image builder.
     */
    State?: ImageBuilderState;
    /**
     * The reason why the last state change occurred.
     */
    StateChangeReason?: ImageBuilderStateChangeReason;
    /**
     * The time stamp when the image builder was created.
     */
    CreatedTime?: Timestamp;
    /**
     * Enables or disables default internet access for the image builder.
     */
    EnableDefaultInternetAccess?: BooleanObject;
    /**
     * The information needed to join a Microsoft Active Directory domain.
     */
    DomainJoinInfo?: DomainJoinInfo;
    /**
     * The image builder errors.
     */
    ImageBuilderErrors?: ResourceErrors;
    /**
     * The version of the AppStream 2.0 agent that is currently being used by this image builder. 
     */
    AppstreamAgentVersion?: AppstreamAgentVersion;
  }
  export type ImageBuilderList = ImageBuilder[];
  export type ImageBuilderState = "PENDING"|"UPDATING_AGENT"|"RUNNING"|"STOPPING"|"STOPPED"|"REBOOTING"|"SNAPSHOTTING"|"DELETING"|"FAILED"|string;
  export interface ImageBuilderStateChangeReason {
    /**
     * The state change reason code.
     */
    Code?: ImageBuilderStateChangeReasonCode;
    /**
     * The state change reason message.
     */
    Message?: String;
  }
  export type ImageBuilderStateChangeReasonCode = "INTERNAL_ERROR"|"IMAGE_UNAVAILABLE"|string;
  export type ImageList = Image[];
  export interface ImagePermissions {
    /**
     * Indicates whether the image can be used for a fleet.
     */
    allowFleet?: BooleanObject;
    /**
     * Indicates whether the image can be used for an image builder.
     */
    allowImageBuilder?: BooleanObject;
  }
  export type ImageState = "PENDING"|"AVAILABLE"|"FAILED"|"COPYING"|"DELETING"|string;
  export interface ImageStateChangeReason {
    /**
     * The state change reason code.
     */
    Code?: ImageStateChangeReasonCode;
    /**
     * The state change reason message.
     */
    Message?: String;
  }
  export type ImageStateChangeReasonCode = "INTERNAL_ERROR"|"IMAGE_BUILDER_NOT_AVAILABLE"|"IMAGE_COPY_FAILURE"|string;
  export type Integer = number;
  export interface ListAssociatedFleetsRequest {
    /**
     * The name of the stack.
     */
    StackName: String;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface ListAssociatedFleetsResult {
    /**
     * The name of the fleet.
     */
    Names?: StringList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface ListAssociatedStacksRequest {
    /**
     * The name of the fleet.
     */
    FleetName: String;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: String;
  }
  export interface ListAssociatedStacksResult {
    /**
     * The name of the stack.
     */
    Names?: StringList;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The information about the tags.
     */
    Tags?: Tags;
  }
  export type Long = number;
  export type MaxResults = number;
  export type Metadata = {[key: string]: String};
  export type Name = string;
  export interface NetworkAccessConfiguration {
    /**
     * The private IP address of the elastic network interface that is attached to instances in your VPC.
     */
    EniPrivateIpAddress?: String;
    /**
     * The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.
     */
    EniId?: String;
  }
  export type OrganizationalUnitDistinguishedName = string;
  export type OrganizationalUnitDistinguishedNamesList = OrganizationalUnitDistinguishedName[];
  export type Permission = "ENABLED"|"DISABLED"|string;
  export type PlatformType = "WINDOWS"|string;
  export type RedirectURL = string;
  export type RegionName = string;
  export interface ResourceError {
    /**
     * The error code.
     */
    ErrorCode?: FleetErrorCode;
    /**
     * The error message.
     */
    ErrorMessage?: String;
    /**
     * The time the error occurred.
     */
    ErrorTimestamp?: Timestamp;
  }
  export type ResourceErrors = ResourceError[];
  export type ResourceIdentifier = string;
  export type SecurityGroupIdList = String[];
  export interface ServiceAccountCredentials {
    /**
     * The user name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.
     */
    AccountName: AccountName;
    /**
     * The password for the account.
     */
    AccountPassword: AccountPassword;
  }
  export interface Session {
    /**
     * The ID of the streaming session.
     */
    Id: String;
    /**
     * The identifier of the user for whom the session was created.
     */
    UserId: UserId;
    /**
     * The name of the stack for the streaming session.
     */
    StackName: String;
    /**
     * The name of the fleet for the streaming session.
     */
    FleetName: String;
    /**
     * The current state of the streaming session.
     */
    State: SessionState;
    /**
     * The authentication method. The user is authenticated using a streaming URL (API) or SAML federation (SAML).
     */
    AuthenticationType?: AuthenticationType;
    /**
     * The network details for the streaming session.
     */
    NetworkAccessConfiguration?: NetworkAccessConfiguration;
  }
  export type SessionList = Session[];
  export type SessionState = "ACTIVE"|"PENDING"|"EXPIRED"|string;
  export type SettingsGroup = string;
  export interface SharedImagePermissions {
    /**
     * The 12-digit ID of the AWS account with which the image is shared.
     */
    sharedAccountId: AwsAccountId;
    /**
     * Describes the permissions for a shared image.
     */
    imagePermissions: ImagePermissions;
  }
  export type SharedImagePermissionsList = SharedImagePermissions[];
  export interface Stack {
    /**
     * The ARN of the stack.
     */
    Arn?: Arn;
    /**
     * The name of the stack.
     */
    Name: String;
    /**
     * The description for display.
     */
    Description?: String;
    /**
     * The stack name for display.
     */
    DisplayName?: String;
    /**
     * The time the stack was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The storage connectors to enable.
     */
    StorageConnectors?: StorageConnectorList;
    /**
     * The URL that users are redirected to after their streaming session ends.
     */
    RedirectURL?: RedirectURL;
    /**
     * The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
     */
    FeedbackURL?: FeedbackURL;
    /**
     * The errors for the stack.
     */
    StackErrors?: StackErrors;
    /**
     * The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.
     */
    UserSettings?: UserSettingList;
    /**
     * The persistent application settings for users of the stack.
     */
    ApplicationSettings?: ApplicationSettingsResponse;
  }
  export type StackAttribute = "STORAGE_CONNECTORS"|"STORAGE_CONNECTOR_HOMEFOLDERS"|"STORAGE_CONNECTOR_GOOGLE_DRIVE"|"STORAGE_CONNECTOR_ONE_DRIVE"|"REDIRECT_URL"|"FEEDBACK_URL"|"THEME_NAME"|"USER_SETTINGS"|string;
  export type StackAttributes = StackAttribute[];
  export interface StackError {
    /**
     * The error code.
     */
    ErrorCode?: StackErrorCode;
    /**
     * The error message.
     */
    ErrorMessage?: String;
  }
  export type StackErrorCode = "STORAGE_CONNECTOR_ERROR"|"INTERNAL_SERVICE_ERROR"|string;
  export type StackErrors = StackError[];
  export type StackList = Stack[];
  export interface StartFleetRequest {
    /**
     * The name of the fleet.
     */
    Name: String;
  }
  export interface StartFleetResult {
  }
  export interface StartImageBuilderRequest {
    /**
     * The name of the image builder.
     */
    Name: String;
    /**
     * The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. 
     */
    AppstreamAgentVersion?: AppstreamAgentVersion;
  }
  export interface StartImageBuilderResult {
    /**
     * Information about the image builder.
     */
    ImageBuilder?: ImageBuilder;
  }
  export interface StopFleetRequest {
    /**
     * The name of the fleet.
     */
    Name: String;
  }
  export interface StopFleetResult {
  }
  export interface StopImageBuilderRequest {
    /**
     * The name of the image builder.
     */
    Name: String;
  }
  export interface StopImageBuilderResult {
    /**
     * Information about the image builder.
     */
    ImageBuilder?: ImageBuilder;
  }
  export interface StorageConnector {
    /**
     * The type of storage connector.
     */
    ConnectorType: StorageConnectorType;
    /**
     * The ARN of the storage connector.
     */
    ResourceIdentifier?: ResourceIdentifier;
    /**
     * The names of the domains for the G Suite account.
     */
    Domains?: DomainList;
  }
  export type StorageConnectorList = StorageConnector[];
  export type StorageConnectorType = "HOMEFOLDERS"|"GOOGLE_DRIVE"|"ONE_DRIVE"|string;
  export type StreamingUrlUserId = string;
  export type String = string;
  export type StringList = String[];
  export type SubnetIdList = String[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: Arn;
    /**
     * The tags to associate. A tag is a key-value pair (the value is optional). For example, Environment=Test, or, if you do not specify a value, Environment=.  If you do not specify a value, we set the value to an empty string.
     */
    Tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: Arn;
    /**
     * The tag keys for the tags to disassociate.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateDirectoryConfigRequest {
    /**
     * The name of the Directory Config object.
     */
    DirectoryName: DirectoryName;
    /**
     * The distinguished names of the organizational units for computer accounts.
     */
    OrganizationalUnitDistinguishedNames?: OrganizationalUnitDistinguishedNamesList;
    /**
     * The credentials for the service account used by the streaming instance to connect to the directory.
     */
    ServiceAccountCredentials?: ServiceAccountCredentials;
  }
  export interface UpdateDirectoryConfigResult {
    /**
     * Information about the Directory Config object.
     */
    DirectoryConfig?: DirectoryConfig;
  }
  export interface UpdateFleetRequest {
    /**
     * The name of the image used to create the fleet.
     */
    ImageName?: String;
    /**
     * The ARN of the public, private, or shared image to use.
     */
    ImageArn?: Arn;
    /**
     * A unique name for the fleet.
     */
    Name?: String;
    /**
     * The instance type to use when launching fleet instances. The following instance types are available:   stream.standard.medium   stream.standard.large   stream.compute.large   stream.compute.xlarge   stream.compute.2xlarge   stream.compute.4xlarge   stream.compute.8xlarge   stream.memory.large   stream.memory.xlarge   stream.memory.2xlarge   stream.memory.4xlarge   stream.memory.8xlarge   stream.graphics-design.large   stream.graphics-design.xlarge   stream.graphics-design.2xlarge   stream.graphics-design.4xlarge   stream.graphics-desktop.2xlarge   stream.graphics-pro.4xlarge   stream.graphics-pro.8xlarge   stream.graphics-pro.16xlarge  
     */
    InstanceType?: String;
    /**
     * The desired capacity for the fleet.
     */
    ComputeCapacity?: ComputeCapacity;
    /**
     * The VPC configuration for the fleet.
     */
    VpcConfig?: VpcConfig;
    /**
     * The maximum time that a streaming session can run, in seconds. Specify a value between 600 and 57600.
     */
    MaxUserDurationInSeconds?: Integer;
    /**
     * The time after disconnection when a session is considered to have ended, in seconds. If a user who was disconnected reconnects within this time interval, the user is connected to their previous session. Specify a value between 60 and 57600.
     */
    DisconnectTimeoutInSeconds?: Integer;
    /**
     * Deletes the VPC association for the specified fleet.
     */
    DeleteVpcConfig?: Boolean;
    /**
     * The description for display.
     */
    Description?: Description;
    /**
     * The fleet name for display.
     */
    DisplayName?: DisplayName;
    /**
     * Enables or disables default internet access for the fleet.
     */
    EnableDefaultInternetAccess?: BooleanObject;
    /**
     * The information needed to join a Microsoft Active Directory domain.
     */
    DomainJoinInfo?: DomainJoinInfo;
    /**
     * The fleet attributes to delete.
     */
    AttributesToDelete?: FleetAttributes;
  }
  export interface UpdateFleetResult {
    /**
     * Information about the fleet.
     */
    Fleet?: Fleet;
  }
  export interface UpdateImagePermissionsRequest {
    /**
     * The name of the private image.
     */
    Name: Name;
    /**
     * The 12-digit ID of the AWS account for which you want add or update image permissions.
     */
    SharedAccountId: AwsAccountId;
    /**
     * The permissions for the image.
     */
    ImagePermissions: ImagePermissions;
  }
  export interface UpdateImagePermissionsResult {
  }
  export interface UpdateStackRequest {
    /**
     * The stack name for display.
     */
    DisplayName?: DisplayName;
    /**
     * The description for display.
     */
    Description?: Description;
    /**
     * The name of the stack.
     */
    Name: String;
    /**
     * The storage connectors to enable.
     */
    StorageConnectors?: StorageConnectorList;
    /**
     * Deletes the storage connectors currently enabled for the stack.
     */
    DeleteStorageConnectors?: Boolean;
    /**
     * The URL that users are redirected to after their streaming session ends.
     */
    RedirectURL?: RedirectURL;
    /**
     * The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
     */
    FeedbackURL?: FeedbackURL;
    /**
     * The stack attributes to delete.
     */
    AttributesToDelete?: StackAttributes;
    /**
     * The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.
     */
    UserSettings?: UserSettingList;
    /**
     * The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
     */
    ApplicationSettings?: ApplicationSettings;
  }
  export interface UpdateStackResult {
    /**
     * Information about the stack.
     */
    Stack?: Stack;
  }
  export type UserId = string;
  export interface UserSetting {
    /**
     * The action that is enabled or disabled.
     */
    Action: Action;
    /**
     * Indicates whether the action is enabled or disabled.
     */
    Permission: Permission;
  }
  export type UserSettingList = UserSetting[];
  export type VisibilityType = "PUBLIC"|"PRIVATE"|"SHARED"|string;
  export interface VpcConfig {
    /**
     * The subnets to which a network interface is established from the fleet instance.
     */
    SubnetIds?: SubnetIdList;
    /**
     * The security groups for the fleet.
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
