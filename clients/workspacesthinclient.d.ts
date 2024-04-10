import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class WorkSpacesThinClient extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WorkSpacesThinClient.Types.ClientConfiguration)
  config: Config & WorkSpacesThinClient.Types.ClientConfiguration;
  /**
   * Creates an environment for your thin client devices.
   */
  createEnvironment(params: WorkSpacesThinClient.Types.CreateEnvironmentRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.CreateEnvironmentResponse) => void): Request<WorkSpacesThinClient.Types.CreateEnvironmentResponse, AWSError>;
  /**
   * Creates an environment for your thin client devices.
   */
  createEnvironment(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.CreateEnvironmentResponse) => void): Request<WorkSpacesThinClient.Types.CreateEnvironmentResponse, AWSError>;
  /**
   * Deletes a thin client device.
   */
  deleteDevice(params: WorkSpacesThinClient.Types.DeleteDeviceRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.DeleteDeviceResponse) => void): Request<WorkSpacesThinClient.Types.DeleteDeviceResponse, AWSError>;
  /**
   * Deletes a thin client device.
   */
  deleteDevice(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.DeleteDeviceResponse) => void): Request<WorkSpacesThinClient.Types.DeleteDeviceResponse, AWSError>;
  /**
   * Deletes an environment.
   */
  deleteEnvironment(params: WorkSpacesThinClient.Types.DeleteEnvironmentRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.DeleteEnvironmentResponse) => void): Request<WorkSpacesThinClient.Types.DeleteEnvironmentResponse, AWSError>;
  /**
   * Deletes an environment.
   */
  deleteEnvironment(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.DeleteEnvironmentResponse) => void): Request<WorkSpacesThinClient.Types.DeleteEnvironmentResponse, AWSError>;
  /**
   * Deregisters a thin client device.
   */
  deregisterDevice(params: WorkSpacesThinClient.Types.DeregisterDeviceRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.DeregisterDeviceResponse) => void): Request<WorkSpacesThinClient.Types.DeregisterDeviceResponse, AWSError>;
  /**
   * Deregisters a thin client device.
   */
  deregisterDevice(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.DeregisterDeviceResponse) => void): Request<WorkSpacesThinClient.Types.DeregisterDeviceResponse, AWSError>;
  /**
   * Returns information for a thin client device.
   */
  getDevice(params: WorkSpacesThinClient.Types.GetDeviceRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.GetDeviceResponse) => void): Request<WorkSpacesThinClient.Types.GetDeviceResponse, AWSError>;
  /**
   * Returns information for a thin client device.
   */
  getDevice(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.GetDeviceResponse) => void): Request<WorkSpacesThinClient.Types.GetDeviceResponse, AWSError>;
  /**
   * Returns information for an environment.
   */
  getEnvironment(params: WorkSpacesThinClient.Types.GetEnvironmentRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.GetEnvironmentResponse) => void): Request<WorkSpacesThinClient.Types.GetEnvironmentResponse, AWSError>;
  /**
   * Returns information for an environment.
   */
  getEnvironment(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.GetEnvironmentResponse) => void): Request<WorkSpacesThinClient.Types.GetEnvironmentResponse, AWSError>;
  /**
   * Returns information for a software set.
   */
  getSoftwareSet(params: WorkSpacesThinClient.Types.GetSoftwareSetRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.GetSoftwareSetResponse) => void): Request<WorkSpacesThinClient.Types.GetSoftwareSetResponse, AWSError>;
  /**
   * Returns information for a software set.
   */
  getSoftwareSet(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.GetSoftwareSetResponse) => void): Request<WorkSpacesThinClient.Types.GetSoftwareSetResponse, AWSError>;
  /**
   * Returns a list of thin client devices.
   */
  listDevices(params: WorkSpacesThinClient.Types.ListDevicesRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.ListDevicesResponse) => void): Request<WorkSpacesThinClient.Types.ListDevicesResponse, AWSError>;
  /**
   * Returns a list of thin client devices.
   */
  listDevices(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.ListDevicesResponse) => void): Request<WorkSpacesThinClient.Types.ListDevicesResponse, AWSError>;
  /**
   * Returns a list of environments.
   */
  listEnvironments(params: WorkSpacesThinClient.Types.ListEnvironmentsRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.ListEnvironmentsResponse) => void): Request<WorkSpacesThinClient.Types.ListEnvironmentsResponse, AWSError>;
  /**
   * Returns a list of environments.
   */
  listEnvironments(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.ListEnvironmentsResponse) => void): Request<WorkSpacesThinClient.Types.ListEnvironmentsResponse, AWSError>;
  /**
   * Returns a list of software sets.
   */
  listSoftwareSets(params: WorkSpacesThinClient.Types.ListSoftwareSetsRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.ListSoftwareSetsResponse) => void): Request<WorkSpacesThinClient.Types.ListSoftwareSetsResponse, AWSError>;
  /**
   * Returns a list of software sets.
   */
  listSoftwareSets(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.ListSoftwareSetsResponse) => void): Request<WorkSpacesThinClient.Types.ListSoftwareSetsResponse, AWSError>;
  /**
   * Returns a list of tags for a resource.
   */
  listTagsForResource(params: WorkSpacesThinClient.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.ListTagsForResourceResponse) => void): Request<WorkSpacesThinClient.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of tags for a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.ListTagsForResourceResponse) => void): Request<WorkSpacesThinClient.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified resource.
   */
  tagResource(params: WorkSpacesThinClient.Types.TagResourceRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.TagResourceResponse) => void): Request<WorkSpacesThinClient.Types.TagResourceResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.TagResourceResponse) => void): Request<WorkSpacesThinClient.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag or tags from a resource.
   */
  untagResource(params: WorkSpacesThinClient.Types.UntagResourceRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.UntagResourceResponse) => void): Request<WorkSpacesThinClient.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag or tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.UntagResourceResponse) => void): Request<WorkSpacesThinClient.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a thin client device.
   */
  updateDevice(params: WorkSpacesThinClient.Types.UpdateDeviceRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.UpdateDeviceResponse) => void): Request<WorkSpacesThinClient.Types.UpdateDeviceResponse, AWSError>;
  /**
   * Updates a thin client device.
   */
  updateDevice(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.UpdateDeviceResponse) => void): Request<WorkSpacesThinClient.Types.UpdateDeviceResponse, AWSError>;
  /**
   * Updates an environment.
   */
  updateEnvironment(params: WorkSpacesThinClient.Types.UpdateEnvironmentRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.UpdateEnvironmentResponse) => void): Request<WorkSpacesThinClient.Types.UpdateEnvironmentResponse, AWSError>;
  /**
   * Updates an environment.
   */
  updateEnvironment(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.UpdateEnvironmentResponse) => void): Request<WorkSpacesThinClient.Types.UpdateEnvironmentResponse, AWSError>;
  /**
   * Updates a software set.
   */
  updateSoftwareSet(params: WorkSpacesThinClient.Types.UpdateSoftwareSetRequest, callback?: (err: AWSError, data: WorkSpacesThinClient.Types.UpdateSoftwareSetResponse) => void): Request<WorkSpacesThinClient.Types.UpdateSoftwareSetResponse, AWSError>;
  /**
   * Updates a software set.
   */
  updateSoftwareSet(callback?: (err: AWSError, data: WorkSpacesThinClient.Types.UpdateSoftwareSetResponse) => void): Request<WorkSpacesThinClient.Types.UpdateSoftwareSetResponse, AWSError>;
}
declare namespace WorkSpacesThinClient {
  export type ActivationCode = string;
  export type ApplyTimeOf = "UTC"|"DEVICE"|string;
  export type Arn = string;
  export type ClientToken = string;
  export interface CreateEnvironmentRequest {
    /**
     * The name for the environment.
     */
    name?: EnvironmentName;
    /**
     * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
     */
    desktopArn: Arn;
    /**
     * The URL for the identity provider login (only for environments that use AppStream 2.0).
     */
    desktopEndpoint?: DesktopEndpoint;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
    /**
     * A specification for a time window to apply software updates.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * An option to define which software updates to apply.
     */
    softwareSetUpdateMode?: SoftwareSetUpdateMode;
    /**
     * The ID of the software set to apply.
     */
    desiredSoftwareSetId?: SoftwareSetId;
    /**
     * The Amazon Resource Name (ARN) of the Key Management Service key to use to encrypt the environment.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
     */
    clientToken?: ClientToken;
    /**
     * A map of the key-value pairs of the tag or tags to assign to the resource.
     */
    tags?: TagsMap;
  }
  export interface CreateEnvironmentResponse {
    /**
     * Describes an environment.
     */
    environment?: EnvironmentSummary;
  }
  export type DayOfWeek = "MONDAY"|"TUESDAY"|"WEDNESDAY"|"THURSDAY"|"FRIDAY"|"SATURDAY"|"SUNDAY"|string;
  export type DayOfWeekList = DayOfWeek[];
  export interface DeleteDeviceRequest {
    /**
     * The ID of the device to delete.
     */
    id: DeviceId;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteDeviceResponse {
  }
  export interface DeleteEnvironmentRequest {
    /**
     * The ID of the environment to delete.
     */
    id: EnvironmentId;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteEnvironmentResponse {
  }
  export interface DeregisterDeviceRequest {
    /**
     * The ID of the device to deregister.
     */
    id: DeviceId;
    /**
     * The desired new status for the device.
     */
    targetDeviceStatus?: TargetDeviceStatus;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
     */
    clientToken?: ClientToken;
  }
  export interface DeregisterDeviceResponse {
  }
  export type DesktopEndpoint = string;
  export type DesktopType = "workspaces"|"appstream"|"workspaces-web"|string;
  export interface Device {
    /**
     * The ID of the device.
     */
    id?: DeviceId;
    /**
     * The hardware serial number of the device.
     */
    serialNumber?: String;
    /**
     * The name of the device.
     */
    name?: DeviceName;
    /**
     * The model number of the device.
     */
    model?: String;
    /**
     * The ID of the environment the device is associated with.
     */
    environmentId?: EnvironmentId;
    /**
     * The status of the device.
     */
    status?: DeviceStatus;
    /**
     * The ID of the software set currently installed on the device.
     */
    currentSoftwareSetId?: SoftwareSetId;
    /**
     * The version of the software set currently installed on the device.
     */
    currentSoftwareSetVersion?: String;
    /**
     * The ID of the software set which the device has been set to.
     */
    desiredSoftwareSetId?: SoftwareSetId;
    /**
     * The ID of the software set that is pending to be installed on the device.
     */
    pendingSoftwareSetId?: SoftwareSetId;
    /**
     * The version of the software set that is pending to be installed on the device.
     */
    pendingSoftwareSetVersion?: String;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
    /**
     * Describes if the software currently installed on the device is a supported version.
     */
    softwareSetComplianceStatus?: DeviceSoftwareSetComplianceStatus;
    /**
     * Describes if the device has a supported version of software installed.
     */
    softwareSetUpdateStatus?: SoftwareSetUpdateStatus;
    /**
     * The timestamp of the most recent session on the device.
     */
    lastConnectedAt?: Timestamp;
    /**
     * The timestamp of the most recent check-in of the device.
     */
    lastPostureAt?: Timestamp;
    /**
     * The timestamp of when the device was created.
     */
    createdAt?: Timestamp;
    /**
     * The timestamp of when the device was updated.
     */
    updatedAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the device.
     */
    arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the device.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The tag keys and optional values for the resource.
     */
    tags?: TagsMap;
  }
  export type DeviceId = string;
  export type DeviceList = DeviceSummary[];
  export type DeviceName = string;
  export type DeviceSoftwareSetComplianceStatus = "NONE"|"COMPLIANT"|"NOT_COMPLIANT"|string;
  export type DeviceStatus = "REGISTERED"|"DEREGISTERING"|"DEREGISTERED"|"ARCHIVED"|string;
  export interface DeviceSummary {
    /**
     * The ID of the device.
     */
    id?: DeviceId;
    /**
     * The hardware serial number of the device.
     */
    serialNumber?: String;
    /**
     * The name of the device.
     */
    name?: DeviceName;
    /**
     * The model number of the device.
     */
    model?: String;
    /**
     * The ID of the environment the device is associated with.
     */
    environmentId?: EnvironmentId;
    /**
     * The status of the device.
     */
    status?: DeviceStatus;
    /**
     * The ID of the software set currently installed on the device.
     */
    currentSoftwareSetId?: SoftwareSetId;
    /**
     * The ID of the software set which the device has been set to.
     */
    desiredSoftwareSetId?: SoftwareSetId;
    /**
     * The ID of the software set that is pending to be installed on the device.
     */
    pendingSoftwareSetId?: SoftwareSetId;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
    /**
     * The timestamp of the most recent session on the device.
     */
    lastConnectedAt?: Timestamp;
    /**
     * The timestamp of the most recent check-in of the device.
     */
    lastPostureAt?: Timestamp;
    /**
     * The timestamp of when the device was created.
     */
    createdAt?: Timestamp;
    /**
     * The timestamp of when the device was updated.
     */
    updatedAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the device.
     */
    arn?: Arn;
  }
  export interface Environment {
    /**
     * The ID of the environment.
     */
    id?: EnvironmentId;
    /**
     * The name of the environment.
     */
    name?: EnvironmentName;
    /**
     * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
     */
    desktopArn?: Arn;
    /**
     * The URL for the identity provider login (only for environments that use AppStream 2.0).
     */
    desktopEndpoint?: DesktopEndpoint;
    /**
     * The type of streaming desktop for the environment.
     */
    desktopType?: DesktopType;
    /**
     * The activation code to register a device to the environment.
     */
    activationCode?: ActivationCode;
    /**
     * The number of devices registered to the environment.
     */
    registeredDevicesCount?: Integer;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
    /**
     * A specification for a time window to apply software updates.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * An option to define which software updates to apply.
     */
    softwareSetUpdateMode?: SoftwareSetUpdateMode;
    /**
     * The ID of the software set to apply.
     */
    desiredSoftwareSetId?: SoftwareSetId;
    /**
     * The ID of the software set that is pending to be installed.
     */
    pendingSoftwareSetId?: SoftwareSetId;
    /**
     * The version of the software set that is pending to be installed.
     */
    pendingSoftwareSetVersion?: String;
    /**
     * Describes if the software currently installed on all devices in the environment is a supported version.
     */
    softwareSetComplianceStatus?: EnvironmentSoftwareSetComplianceStatus;
    /**
     * The timestamp of when the environment was created.
     */
    createdAt?: Timestamp;
    /**
     * The timestamp of when the device was updated.
     */
    updatedAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the environment.
     */
    arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the environment.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The tag keys and optional values for the resource.
     */
    tags?: TagsMap;
  }
  export type EnvironmentId = string;
  export type EnvironmentList = EnvironmentSummary[];
  export type EnvironmentName = string;
  export type EnvironmentSoftwareSetComplianceStatus = "NO_REGISTERED_DEVICES"|"COMPLIANT"|"NOT_COMPLIANT"|string;
  export interface EnvironmentSummary {
    /**
     * The ID of the environment.
     */
    id?: EnvironmentId;
    /**
     * The name of the environment.
     */
    name?: EnvironmentName;
    /**
     * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
     */
    desktopArn?: Arn;
    /**
     * The URL for the identity provider login (only for environments that use AppStream 2.0).
     */
    desktopEndpoint?: DesktopEndpoint;
    /**
     * The type of streaming desktop for the environment.
     */
    desktopType?: DesktopType;
    /**
     * The activation code to register a device to the environment.
     */
    activationCode?: ActivationCode;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
    /**
     * A specification for a time window to apply software updates.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * An option to define which software updates to apply.
     */
    softwareSetUpdateMode?: SoftwareSetUpdateMode;
    /**
     * The ID of the software set to apply.
     */
    desiredSoftwareSetId?: SoftwareSetId;
    /**
     * The ID of the software set that is pending to be installed.
     */
    pendingSoftwareSetId?: SoftwareSetId;
    /**
     * The timestamp of when the environment was created.
     */
    createdAt?: Timestamp;
    /**
     * The timestamp of when the device was updated.
     */
    updatedAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the environment.
     */
    arn?: Arn;
  }
  export interface GetDeviceRequest {
    /**
     * The ID of the device for which to return information.
     */
    id: DeviceId;
  }
  export interface GetDeviceResponse {
    /**
     * Describes an device.
     */
    device?: Device;
  }
  export interface GetEnvironmentRequest {
    /**
     * The ID of the environment for which to return information.
     */
    id: EnvironmentId;
  }
  export interface GetEnvironmentResponse {
    /**
     * Describes an environment.
     */
    environment?: Environment;
  }
  export interface GetSoftwareSetRequest {
    /**
     * The ID of the software set for which to return information.
     */
    id: SoftwareSetId;
  }
  export interface GetSoftwareSetResponse {
    /**
     * Describes a software set.
     */
    softwareSet?: SoftwareSet;
  }
  export type Hour = number;
  export type Integer = number;
  export type KmsKeyArn = string;
  export interface ListDevicesRequest {
    /**
     * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
     */
    maxResults?: MaxResults;
  }
  export interface ListDevicesResponse {
    /**
     * Describes devices.
     */
    devices?: DeviceList;
    /**
     * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: PaginationToken;
  }
  export interface ListEnvironmentsRequest {
    /**
     * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
     */
    maxResults?: MaxResults;
  }
  export interface ListEnvironmentsResponse {
    /**
     * Describes environments.
     */
    environments?: EnvironmentList;
    /**
     * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSoftwareSetsRequest {
    /**
     * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
     */
    maxResults?: MaxResults;
  }
  export interface ListSoftwareSetsResponse {
    /**
     * Describes software sets.
     */
    softwareSets?: SoftwareSetList;
    /**
     * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A map of the key-value pairs for the tag or tags assigned to the specified resource.
     */
    tags?: TagsMap;
  }
  export interface MaintenanceWindow {
    /**
     * An option to select the default or custom maintenance window.
     */
    type?: MaintenanceWindowType;
    /**
     * The hour for the maintenance window start (00-23).
     */
    startTimeHour?: Hour;
    /**
     * The minutes past the hour for the maintenance window start (00-59).
     */
    startTimeMinute?: Minute;
    /**
     * The hour for the maintenance window end (00-23).
     */
    endTimeHour?: Hour;
    /**
     * The minutes for the maintenance window end (00-59).
     */
    endTimeMinute?: Minute;
    /**
     * The days of the week during which the maintenance window is open.
     */
    daysOfTheWeek?: DayOfWeekList;
    /**
     * The option to set the maintenance window during the device local time or Universal Coordinated Time (UTC).
     */
    applyTimeOf?: ApplyTimeOf;
  }
  export type MaintenanceWindowType = "SYSTEM"|"CUSTOM"|string;
  export type MaxResults = number;
  export type Minute = number;
  export type PaginationToken = string;
  export interface Software {
    /**
     * The name of the software component.
     */
    name?: String;
    /**
     * The version of the software component.
     */
    version?: String;
  }
  export type SoftwareList = Software[];
  export interface SoftwareSet {
    /**
     * The ID of the software set.
     */
    id?: SoftwareSetId;
    /**
     * The version of the software set.
     */
    version?: String;
    /**
     * The timestamp of when the software set was released.
     */
    releasedAt?: Timestamp;
    /**
     * The timestamp of the end of support for the software set.
     */
    supportedUntil?: Timestamp;
    /**
     * An option to define if the software set has been validated.
     */
    validationStatus?: SoftwareSetValidationStatus;
    /**
     * A list of the software components in the software set.
     */
    software?: SoftwareList;
    /**
     * The Amazon Resource Name (ARN) of the software set.
     */
    arn?: Arn;
    /**
     * The tag keys and optional values for the resource.
     */
    tags?: TagsMap;
  }
  export type SoftwareSetId = string;
  export type SoftwareSetIdOrEmptyString = string;
  export type SoftwareSetList = SoftwareSetSummary[];
  export interface SoftwareSetSummary {
    /**
     * The ID of the software set.
     */
    id?: SoftwareSetId;
    /**
     * The version of the software set.
     */
    version?: String;
    /**
     * The timestamp of when the software set was released.
     */
    releasedAt?: Timestamp;
    /**
     * The timestamp of the end of support for the software set.
     */
    supportedUntil?: Timestamp;
    /**
     * An option to define if the software set has been validated.
     */
    validationStatus?: SoftwareSetValidationStatus;
    /**
     * The Amazon Resource Name (ARN) of the software set.
     */
    arn?: Arn;
  }
  export type SoftwareSetUpdateMode = "USE_LATEST"|"USE_DESIRED"|string;
  export type SoftwareSetUpdateSchedule = "USE_MAINTENANCE_WINDOW"|"APPLY_IMMEDIATELY"|string;
  export type SoftwareSetUpdateStatus = "AVAILABLE"|"IN_PROGRESS"|"UP_TO_DATE"|string;
  export type SoftwareSetValidationStatus = "VALIDATED"|"NOT_VALIDATED"|string;
  export type String = string;
  export type TagKeys = String[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to tag.
     */
    resourceArn: String;
    /**
     * A map of the key-value pairs of the tag or tags to assign to the resource.
     */
    tags: TagsMap;
  }
  export interface TagResourceResponse {
  }
  export type TagsMap = {[key: string]: String};
  export type TargetDeviceStatus = "DEREGISTERED"|"ARCHIVED"|string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to untag.
     */
    resourceArn: String;
    /**
     * The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateDeviceRequest {
    /**
     * The ID of the device to update.
     */
    id: DeviceId;
    /**
     * The name of the device to update.
     */
    name?: DeviceName;
    /**
     * The ID of the software set to apply.
     */
    desiredSoftwareSetId?: SoftwareSetId;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  }
  export interface UpdateDeviceResponse {
    /**
     * Describes a device.
     */
    device?: DeviceSummary;
  }
  export interface UpdateEnvironmentRequest {
    /**
     * The ID of the environment to update.
     */
    id: EnvironmentId;
    /**
     * The name of the environment to update.
     */
    name?: EnvironmentName;
    /**
     * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
     */
    desktopArn?: Arn;
    /**
     * The URL for the identity provider login (only for environments that use AppStream 2.0).
     */
    desktopEndpoint?: DesktopEndpoint;
    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
    /**
     * A specification for a time window to apply software updates.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * An option to define which software updates to apply.
     */
    softwareSetUpdateMode?: SoftwareSetUpdateMode;
    /**
     * The ID of the software set to apply.
     */
    desiredSoftwareSetId?: SoftwareSetIdOrEmptyString;
  }
  export interface UpdateEnvironmentResponse {
    /**
     * Describes an environment.
     */
    environment?: EnvironmentSummary;
  }
  export interface UpdateSoftwareSetRequest {
    /**
     * The ID of the software set to update.
     */
    id: SoftwareSetId;
    /**
     * An option to define if the software set has been validated.
     */
    validationStatus: SoftwareSetValidationStatus;
  }
  export interface UpdateSoftwareSetResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-08-22"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WorkSpacesThinClient client.
   */
  export import Types = WorkSpacesThinClient;
}
export = WorkSpacesThinClient;
