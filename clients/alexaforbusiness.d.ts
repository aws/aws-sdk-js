import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class AlexaForBusiness extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AlexaForBusiness.Types.ClientConfiguration)
  config: Config & AlexaForBusiness.Types.ClientConfiguration;
  /**
   * Associates a device to a given room. This applies all the settings from the room profile to the device, and all the skills in any skill groups added to that room. This operation requires the device to be online, or a manual sync is required. 
   */
  associateDeviceWithRoom(params: AlexaForBusiness.Types.AssociateDeviceWithRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.AssociateDeviceWithRoomResponse) => void): Request<AlexaForBusiness.Types.AssociateDeviceWithRoomResponse, AWSError>;
  /**
   * Associates a device to a given room. This applies all the settings from the room profile to the device, and all the skills in any skill groups added to that room. This operation requires the device to be online, or a manual sync is required. 
   */
  associateDeviceWithRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.AssociateDeviceWithRoomResponse) => void): Request<AlexaForBusiness.Types.AssociateDeviceWithRoomResponse, AWSError>;
  /**
   * Associates a skill group to a given room. This enables all skills in the associated skill group on all devices in the room.
   */
  associateSkillGroupWithRoom(params: AlexaForBusiness.Types.AssociateSkillGroupWithRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.AssociateSkillGroupWithRoomResponse) => void): Request<AlexaForBusiness.Types.AssociateSkillGroupWithRoomResponse, AWSError>;
  /**
   * Associates a skill group to a given room. This enables all skills in the associated skill group on all devices in the room.
   */
  associateSkillGroupWithRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.AssociateSkillGroupWithRoomResponse) => void): Request<AlexaForBusiness.Types.AssociateSkillGroupWithRoomResponse, AWSError>;
  /**
   * Creates a new room profile with the specified details.
   */
  createProfile(params: AlexaForBusiness.Types.CreateProfileRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.CreateProfileResponse) => void): Request<AlexaForBusiness.Types.CreateProfileResponse, AWSError>;
  /**
   * Creates a new room profile with the specified details.
   */
  createProfile(callback?: (err: AWSError, data: AlexaForBusiness.Types.CreateProfileResponse) => void): Request<AlexaForBusiness.Types.CreateProfileResponse, AWSError>;
  /**
   * Creates a room with the specified details.
   */
  createRoom(params: AlexaForBusiness.Types.CreateRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.CreateRoomResponse) => void): Request<AlexaForBusiness.Types.CreateRoomResponse, AWSError>;
  /**
   * Creates a room with the specified details.
   */
  createRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.CreateRoomResponse) => void): Request<AlexaForBusiness.Types.CreateRoomResponse, AWSError>;
  /**
   * Creates a skill group with a specified name and description.
   */
  createSkillGroup(params: AlexaForBusiness.Types.CreateSkillGroupRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.CreateSkillGroupResponse) => void): Request<AlexaForBusiness.Types.CreateSkillGroupResponse, AWSError>;
  /**
   * Creates a skill group with a specified name and description.
   */
  createSkillGroup(callback?: (err: AWSError, data: AlexaForBusiness.Types.CreateSkillGroupResponse) => void): Request<AlexaForBusiness.Types.CreateSkillGroupResponse, AWSError>;
  /**
   * Creates a user.
   */
  createUser(params: AlexaForBusiness.Types.CreateUserRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.CreateUserResponse) => void): Request<AlexaForBusiness.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a user.
   */
  createUser(callback?: (err: AWSError, data: AlexaForBusiness.Types.CreateUserResponse) => void): Request<AlexaForBusiness.Types.CreateUserResponse, AWSError>;
  /**
   * Deletes a room profile by the profile ARN.
   */
  deleteProfile(params: AlexaForBusiness.Types.DeleteProfileRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteProfileResponse) => void): Request<AlexaForBusiness.Types.DeleteProfileResponse, AWSError>;
  /**
   * Deletes a room profile by the profile ARN.
   */
  deleteProfile(callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteProfileResponse) => void): Request<AlexaForBusiness.Types.DeleteProfileResponse, AWSError>;
  /**
   * Deletes a room by the room ARN.
   */
  deleteRoom(params: AlexaForBusiness.Types.DeleteRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteRoomResponse) => void): Request<AlexaForBusiness.Types.DeleteRoomResponse, AWSError>;
  /**
   * Deletes a room by the room ARN.
   */
  deleteRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteRoomResponse) => void): Request<AlexaForBusiness.Types.DeleteRoomResponse, AWSError>;
  /**
   * Deletes room skill parameter details by room, skill, and parameter key ID.
   */
  deleteRoomSkillParameter(params: AlexaForBusiness.Types.DeleteRoomSkillParameterRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteRoomSkillParameterResponse) => void): Request<AlexaForBusiness.Types.DeleteRoomSkillParameterResponse, AWSError>;
  /**
   * Deletes room skill parameter details by room, skill, and parameter key ID.
   */
  deleteRoomSkillParameter(callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteRoomSkillParameterResponse) => void): Request<AlexaForBusiness.Types.DeleteRoomSkillParameterResponse, AWSError>;
  /**
   * Deletes a skill group by skill group ARN.
   */
  deleteSkillGroup(params: AlexaForBusiness.Types.DeleteSkillGroupRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteSkillGroupResponse) => void): Request<AlexaForBusiness.Types.DeleteSkillGroupResponse, AWSError>;
  /**
   * Deletes a skill group by skill group ARN.
   */
  deleteSkillGroup(callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteSkillGroupResponse) => void): Request<AlexaForBusiness.Types.DeleteSkillGroupResponse, AWSError>;
  /**
   * Deletes a specified user by user ARN and enrollment ARN.
   */
  deleteUser(params: AlexaForBusiness.Types.DeleteUserRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteUserResponse) => void): Request<AlexaForBusiness.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes a specified user by user ARN and enrollment ARN.
   */
  deleteUser(callback?: (err: AWSError, data: AlexaForBusiness.Types.DeleteUserResponse) => void): Request<AlexaForBusiness.Types.DeleteUserResponse, AWSError>;
  /**
   * Disassociates a device from its current room. The device continues to be connected to the Wi-Fi network and is still registered to the account. The device settings and skills are removed from the room.
   */
  disassociateDeviceFromRoom(params: AlexaForBusiness.Types.DisassociateDeviceFromRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.DisassociateDeviceFromRoomResponse) => void): Request<AlexaForBusiness.Types.DisassociateDeviceFromRoomResponse, AWSError>;
  /**
   * Disassociates a device from its current room. The device continues to be connected to the Wi-Fi network and is still registered to the account. The device settings and skills are removed from the room.
   */
  disassociateDeviceFromRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.DisassociateDeviceFromRoomResponse) => void): Request<AlexaForBusiness.Types.DisassociateDeviceFromRoomResponse, AWSError>;
  /**
   * Disassociates a skill group from a specified room. This disables all skills in the skill group on all devices in the room.
   */
  disassociateSkillGroupFromRoom(params: AlexaForBusiness.Types.DisassociateSkillGroupFromRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.DisassociateSkillGroupFromRoomResponse) => void): Request<AlexaForBusiness.Types.DisassociateSkillGroupFromRoomResponse, AWSError>;
  /**
   * Disassociates a skill group from a specified room. This disables all skills in the skill group on all devices in the room.
   */
  disassociateSkillGroupFromRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.DisassociateSkillGroupFromRoomResponse) => void): Request<AlexaForBusiness.Types.DisassociateSkillGroupFromRoomResponse, AWSError>;
  /**
   * Gets the details of a device by device ARN.
   */
  getDevice(params: AlexaForBusiness.Types.GetDeviceRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.GetDeviceResponse) => void): Request<AlexaForBusiness.Types.GetDeviceResponse, AWSError>;
  /**
   * Gets the details of a device by device ARN.
   */
  getDevice(callback?: (err: AWSError, data: AlexaForBusiness.Types.GetDeviceResponse) => void): Request<AlexaForBusiness.Types.GetDeviceResponse, AWSError>;
  /**
   * Gets the details of a room profile by profile ARN.
   */
  getProfile(params: AlexaForBusiness.Types.GetProfileRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.GetProfileResponse) => void): Request<AlexaForBusiness.Types.GetProfileResponse, AWSError>;
  /**
   * Gets the details of a room profile by profile ARN.
   */
  getProfile(callback?: (err: AWSError, data: AlexaForBusiness.Types.GetProfileResponse) => void): Request<AlexaForBusiness.Types.GetProfileResponse, AWSError>;
  /**
   * Gets room details by room ARN.
   */
  getRoom(params: AlexaForBusiness.Types.GetRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.GetRoomResponse) => void): Request<AlexaForBusiness.Types.GetRoomResponse, AWSError>;
  /**
   * Gets room details by room ARN.
   */
  getRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.GetRoomResponse) => void): Request<AlexaForBusiness.Types.GetRoomResponse, AWSError>;
  /**
   * Gets room skill parameter details by room, skill, and parameter key ARN.
   */
  getRoomSkillParameter(params: AlexaForBusiness.Types.GetRoomSkillParameterRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.GetRoomSkillParameterResponse) => void): Request<AlexaForBusiness.Types.GetRoomSkillParameterResponse, AWSError>;
  /**
   * Gets room skill parameter details by room, skill, and parameter key ARN.
   */
  getRoomSkillParameter(callback?: (err: AWSError, data: AlexaForBusiness.Types.GetRoomSkillParameterResponse) => void): Request<AlexaForBusiness.Types.GetRoomSkillParameterResponse, AWSError>;
  /**
   * Gets skill group details by skill group ARN.
   */
  getSkillGroup(params: AlexaForBusiness.Types.GetSkillGroupRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.GetSkillGroupResponse) => void): Request<AlexaForBusiness.Types.GetSkillGroupResponse, AWSError>;
  /**
   * Gets skill group details by skill group ARN.
   */
  getSkillGroup(callback?: (err: AWSError, data: AlexaForBusiness.Types.GetSkillGroupResponse) => void): Request<AlexaForBusiness.Types.GetSkillGroupResponse, AWSError>;
  /**
   * Lists all enabled skills in a specific skill group.
   */
  listSkills(params: AlexaForBusiness.Types.ListSkillsRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.ListSkillsResponse) => void): Request<AlexaForBusiness.Types.ListSkillsResponse, AWSError>;
  /**
   * Lists all enabled skills in a specific skill group.
   */
  listSkills(callback?: (err: AWSError, data: AlexaForBusiness.Types.ListSkillsResponse) => void): Request<AlexaForBusiness.Types.ListSkillsResponse, AWSError>;
  /**
   * Lists all tags for a specific resource.
   */
  listTags(params: AlexaForBusiness.Types.ListTagsRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.ListTagsResponse) => void): Request<AlexaForBusiness.Types.ListTagsResponse, AWSError>;
  /**
   * Lists all tags for a specific resource.
   */
  listTags(callback?: (err: AWSError, data: AlexaForBusiness.Types.ListTagsResponse) => void): Request<AlexaForBusiness.Types.ListTagsResponse, AWSError>;
  /**
   * Updates room skill parameter details by room, skill, and parameter key ID. Not all skills have a room skill parameter.
   */
  putRoomSkillParameter(params: AlexaForBusiness.Types.PutRoomSkillParameterRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.PutRoomSkillParameterResponse) => void): Request<AlexaForBusiness.Types.PutRoomSkillParameterResponse, AWSError>;
  /**
   * Updates room skill parameter details by room, skill, and parameter key ID. Not all skills have a room skill parameter.
   */
  putRoomSkillParameter(callback?: (err: AWSError, data: AlexaForBusiness.Types.PutRoomSkillParameterResponse) => void): Request<AlexaForBusiness.Types.PutRoomSkillParameterResponse, AWSError>;
  /**
   * Determines the details for the room from which a skill request was invoked. This operation is used by skill developers.
   */
  resolveRoom(params: AlexaForBusiness.Types.ResolveRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.ResolveRoomResponse) => void): Request<AlexaForBusiness.Types.ResolveRoomResponse, AWSError>;
  /**
   * Determines the details for the room from which a skill request was invoked. This operation is used by skill developers.
   */
  resolveRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.ResolveRoomResponse) => void): Request<AlexaForBusiness.Types.ResolveRoomResponse, AWSError>;
  /**
   * Revokes an invitation and invalidates the enrollment URL.
   */
  revokeInvitation(params: AlexaForBusiness.Types.RevokeInvitationRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.RevokeInvitationResponse) => void): Request<AlexaForBusiness.Types.RevokeInvitationResponse, AWSError>;
  /**
   * Revokes an invitation and invalidates the enrollment URL.
   */
  revokeInvitation(callback?: (err: AWSError, data: AlexaForBusiness.Types.RevokeInvitationResponse) => void): Request<AlexaForBusiness.Types.RevokeInvitationResponse, AWSError>;
  /**
   * Searches devices and lists the ones that meet a set of filter criteria.
   */
  searchDevices(params: AlexaForBusiness.Types.SearchDevicesRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchDevicesResponse) => void): Request<AlexaForBusiness.Types.SearchDevicesResponse, AWSError>;
  /**
   * Searches devices and lists the ones that meet a set of filter criteria.
   */
  searchDevices(callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchDevicesResponse) => void): Request<AlexaForBusiness.Types.SearchDevicesResponse, AWSError>;
  /**
   * Searches room profiles and lists the ones that meet a set of filter criteria.
   */
  searchProfiles(params: AlexaForBusiness.Types.SearchProfilesRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchProfilesResponse) => void): Request<AlexaForBusiness.Types.SearchProfilesResponse, AWSError>;
  /**
   * Searches room profiles and lists the ones that meet a set of filter criteria.
   */
  searchProfiles(callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchProfilesResponse) => void): Request<AlexaForBusiness.Types.SearchProfilesResponse, AWSError>;
  /**
   * Searches rooms and lists the ones that meet a set of filter and sort criteria.
   */
  searchRooms(params: AlexaForBusiness.Types.SearchRoomsRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchRoomsResponse) => void): Request<AlexaForBusiness.Types.SearchRoomsResponse, AWSError>;
  /**
   * Searches rooms and lists the ones that meet a set of filter and sort criteria.
   */
  searchRooms(callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchRoomsResponse) => void): Request<AlexaForBusiness.Types.SearchRoomsResponse, AWSError>;
  /**
   * Searches skill groups and lists the ones that meet a set of filter and sort criteria.
   */
  searchSkillGroups(params: AlexaForBusiness.Types.SearchSkillGroupsRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchSkillGroupsResponse) => void): Request<AlexaForBusiness.Types.SearchSkillGroupsResponse, AWSError>;
  /**
   * Searches skill groups and lists the ones that meet a set of filter and sort criteria.
   */
  searchSkillGroups(callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchSkillGroupsResponse) => void): Request<AlexaForBusiness.Types.SearchSkillGroupsResponse, AWSError>;
  /**
   * Searches users and lists the ones that meet a set of filter and sort criteria.
   */
  searchUsers(params: AlexaForBusiness.Types.SearchUsersRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchUsersResponse) => void): Request<AlexaForBusiness.Types.SearchUsersResponse, AWSError>;
  /**
   * Searches users and lists the ones that meet a set of filter and sort criteria.
   */
  searchUsers(callback?: (err: AWSError, data: AlexaForBusiness.Types.SearchUsersResponse) => void): Request<AlexaForBusiness.Types.SearchUsersResponse, AWSError>;
  /**
   * Sends an enrollment invitation email with a URL to a user. The URL is valid for 72 hours or until you call this operation again, whichever comes first. 
   */
  sendInvitation(params: AlexaForBusiness.Types.SendInvitationRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.SendInvitationResponse) => void): Request<AlexaForBusiness.Types.SendInvitationResponse, AWSError>;
  /**
   * Sends an enrollment invitation email with a URL to a user. The URL is valid for 72 hours or until you call this operation again, whichever comes first. 
   */
  sendInvitation(callback?: (err: AWSError, data: AlexaForBusiness.Types.SendInvitationResponse) => void): Request<AlexaForBusiness.Types.SendInvitationResponse, AWSError>;
  /**
   * Resets a device and its account to the known default settings by clearing all information and settings set by previous users.
   */
  startDeviceSync(params: AlexaForBusiness.Types.StartDeviceSyncRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.StartDeviceSyncResponse) => void): Request<AlexaForBusiness.Types.StartDeviceSyncResponse, AWSError>;
  /**
   * Resets a device and its account to the known default settings by clearing all information and settings set by previous users.
   */
  startDeviceSync(callback?: (err: AWSError, data: AlexaForBusiness.Types.StartDeviceSyncResponse) => void): Request<AlexaForBusiness.Types.StartDeviceSyncResponse, AWSError>;
  /**
   * Adds metadata tags to a specified resource.
   */
  tagResource(params: AlexaForBusiness.Types.TagResourceRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.TagResourceResponse) => void): Request<AlexaForBusiness.Types.TagResourceResponse, AWSError>;
  /**
   * Adds metadata tags to a specified resource.
   */
  tagResource(callback?: (err: AWSError, data: AlexaForBusiness.Types.TagResourceResponse) => void): Request<AlexaForBusiness.Types.TagResourceResponse, AWSError>;
  /**
   * Removes metadata tags from a specified resource.
   */
  untagResource(params: AlexaForBusiness.Types.UntagResourceRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.UntagResourceResponse) => void): Request<AlexaForBusiness.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes metadata tags from a specified resource.
   */
  untagResource(callback?: (err: AWSError, data: AlexaForBusiness.Types.UntagResourceResponse) => void): Request<AlexaForBusiness.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the device name by device ARN.
   */
  updateDevice(params: AlexaForBusiness.Types.UpdateDeviceRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.UpdateDeviceResponse) => void): Request<AlexaForBusiness.Types.UpdateDeviceResponse, AWSError>;
  /**
   * Updates the device name by device ARN.
   */
  updateDevice(callback?: (err: AWSError, data: AlexaForBusiness.Types.UpdateDeviceResponse) => void): Request<AlexaForBusiness.Types.UpdateDeviceResponse, AWSError>;
  /**
   * Updates an existing room profile by room profile ARN.
   */
  updateProfile(params: AlexaForBusiness.Types.UpdateProfileRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.UpdateProfileResponse) => void): Request<AlexaForBusiness.Types.UpdateProfileResponse, AWSError>;
  /**
   * Updates an existing room profile by room profile ARN.
   */
  updateProfile(callback?: (err: AWSError, data: AlexaForBusiness.Types.UpdateProfileResponse) => void): Request<AlexaForBusiness.Types.UpdateProfileResponse, AWSError>;
  /**
   * Updates room details by room ARN.
   */
  updateRoom(params: AlexaForBusiness.Types.UpdateRoomRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.UpdateRoomResponse) => void): Request<AlexaForBusiness.Types.UpdateRoomResponse, AWSError>;
  /**
   * Updates room details by room ARN.
   */
  updateRoom(callback?: (err: AWSError, data: AlexaForBusiness.Types.UpdateRoomResponse) => void): Request<AlexaForBusiness.Types.UpdateRoomResponse, AWSError>;
  /**
   * Updates skill group details by skill group ARN.
   */
  updateSkillGroup(params: AlexaForBusiness.Types.UpdateSkillGroupRequest, callback?: (err: AWSError, data: AlexaForBusiness.Types.UpdateSkillGroupResponse) => void): Request<AlexaForBusiness.Types.UpdateSkillGroupResponse, AWSError>;
  /**
   * Updates skill group details by skill group ARN.
   */
  updateSkillGroup(callback?: (err: AWSError, data: AlexaForBusiness.Types.UpdateSkillGroupResponse) => void): Request<AlexaForBusiness.Types.UpdateSkillGroupResponse, AWSError>;
}
declare namespace AlexaForBusiness {
  export type Address = string;
  export type Arn = string;
  export interface AssociateDeviceWithRoomRequest {
    /**
     * The ARN of the device to associate to a room. Required.
     */
    DeviceArn?: Arn;
    /**
     * The ARN of the room with which to associate the device. Required.
     */
    RoomArn?: Arn;
  }
  export interface AssociateDeviceWithRoomResponse {
  }
  export interface AssociateSkillGroupWithRoomRequest {
    /**
     * The ARN of the skill group to associate with a room. Required.
     */
    SkillGroupArn?: Arn;
    /**
     * The ARN of the room with which to associate the skill group. Required.
     */
    RoomArn?: Arn;
  }
  export interface AssociateSkillGroupWithRoomResponse {
  }
  export type Boolean = boolean;
  export type ClientRequestToken = string;
  export interface CreateProfileRequest {
    /**
     * The name of a room profile.
     */
    ProfileName: ProfileName;
    /**
     * The time zone used by a room profile.
     */
    Timezone: Timezone;
    /**
     * The valid address for the room.
     */
    Address: Address;
    /**
     * The distance unit to be used by devices in the profile.
     */
    DistanceUnit: DistanceUnit;
    /**
     * The temperature unit to be used by devices in the profile.
     */
    TemperatureUnit: TemperatureUnit;
    /**
     * A wake word for Alexa, Echo, Amazon, or a computer.
     */
    WakeWord: WakeWord;
    /**
     * The user-specified token that is used during the creation of a profile.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * Whether room profile setup is enabled.
     */
    SetupModeDisabled?: Boolean;
    /**
     * The maximum volume limit for a room profile.
     */
    MaxVolumeLimit?: MaxVolumeLimit;
    /**
     * Whether PSTN calling is enabled.
     */
    PSTNEnabled?: Boolean;
  }
  export interface CreateProfileResponse {
    /**
     * The ARN of the newly created room profile in the response.
     */
    ProfileArn?: Arn;
  }
  export interface CreateRoomRequest {
    /**
     * The name for the room.
     */
    RoomName: RoomName;
    /**
     * The description for the room.
     */
    Description?: RoomDescription;
    /**
     * The profile ARN for the room.
     */
    ProfileArn?: Arn;
    /**
     * The calendar ARN for the room.
     */
    ProviderCalendarId?: ProviderCalendarId;
    /**
     * A unique, user-specified identifier for this request that ensures idempotency. 
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The tags for the room.
     */
    Tags?: TagList;
  }
  export interface CreateRoomResponse {
    /**
     * The ARN of the newly created room in the response.
     */
    RoomArn?: Arn;
  }
  export interface CreateSkillGroupRequest {
    /**
     * The name for the skill group.
     */
    SkillGroupName: SkillGroupName;
    /**
     * The description for the skill group.
     */
    Description?: SkillGroupDescription;
    /**
     * A unique, user-specified identifier for this request that ensures idempotency. 
     */
    ClientRequestToken?: ClientRequestToken;
  }
  export interface CreateSkillGroupResponse {
    /**
     * The ARN of the newly created skill group in the response.
     */
    SkillGroupArn?: Arn;
  }
  export interface CreateUserRequest {
    /**
     * The ARN for the user.
     */
    UserId: user_UserId;
    /**
     * The first name for the user.
     */
    FirstName?: user_FirstName;
    /**
     * The last name for the user.
     */
    LastName?: user_LastName;
    /**
     * The email address for the user.
     */
    Email?: Email;
    /**
     * A unique, user-specified identifier for this request that ensures idempotency. 
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The tags for the user.
     */
    Tags?: TagList;
  }
  export interface CreateUserResponse {
    /**
     * The ARN of the newly created user in the response.
     */
    UserArn?: Arn;
  }
  export interface DeleteProfileRequest {
    /**
     * The ARN of the room profile to delete. Required.
     */
    ProfileArn?: Arn;
  }
  export interface DeleteProfileResponse {
  }
  export interface DeleteRoomRequest {
    /**
     * The ARN of the room to delete. Required.
     */
    RoomArn?: Arn;
  }
  export interface DeleteRoomResponse {
  }
  export interface DeleteRoomSkillParameterRequest {
    /**
     * The ARN of the room from which to remove the room skill parameter details.
     */
    RoomArn?: Arn;
    /**
     * The ID of the skill from which to remove the room skill parameter details.
     */
    SkillId: SkillId;
    /**
     * The room skill parameter key for which to remove details.
     */
    ParameterKey: RoomSkillParameterKey;
  }
  export interface DeleteRoomSkillParameterResponse {
  }
  export interface DeleteSkillGroupRequest {
    /**
     * The ARN of the skill group to delete. Required.
     */
    SkillGroupArn?: Arn;
  }
  export interface DeleteSkillGroupResponse {
  }
  export interface DeleteUserRequest {
    /**
     * The ARN of the user to delete in the organization. Required.
     */
    UserArn?: Arn;
    /**
     * The ARN of the user's enrollment in the organization. Required.
     */
    EnrollmentId: EnrollmentId;
  }
  export interface DeleteUserResponse {
  }
  export interface Device {
    /**
     * The ARN of a device.
     */
    DeviceArn?: Arn;
    /**
     * The serial number of a device.
     */
    DeviceSerialNumber?: DeviceSerialNumber;
    /**
     * The type of a device.
     */
    DeviceType?: DeviceType;
    /**
     * The name of a device.
     */
    DeviceName?: DeviceName;
    /**
     * The software version of a device.
     */
    SoftwareVersion?: SoftwareVersion;
    /**
     * The MAC address of a device.
     */
    MacAddress?: MacAddress;
    /**
     * The room ARN of a device.
     */
    RoomArn?: Arn;
    /**
     * The status of a device. If the status is not READY, check the DeviceStatusInfo for details.
     */
    DeviceStatus?: DeviceStatus;
    /**
     * Detailed information about a device's status.
     */
    DeviceStatusInfo?: DeviceStatusInfo;
  }
  export interface DeviceData {
    /**
     * The ARN of a device.
     */
    DeviceArn?: Arn;
    /**
     * The serial number of a device.
     */
    DeviceSerialNumber?: DeviceSerialNumber;
    /**
     * The type of a device.
     */
    DeviceType?: DeviceType;
    /**
     * The name of a device.
     */
    DeviceName?: DeviceName;
    /**
     * The software version of a device.
     */
    SoftwareVersion?: SoftwareVersion;
    /**
     * The MAC address of a device.
     */
    MacAddress?: MacAddress;
    /**
     * The status of a device.
     */
    DeviceStatus?: DeviceStatus;
    /**
     * The room ARN associated with a device.
     */
    RoomArn?: Arn;
    /**
     * The name of the room associated with a device.
     */
    RoomName?: RoomName;
    /**
     * Detailed information about a device's status.
     */
    DeviceStatusInfo?: DeviceStatusInfo;
  }
  export type DeviceDataList = DeviceData[];
  export type DeviceName = string;
  export type DeviceSerialNumber = string;
  export type DeviceStatus = "READY"|"PENDING"|"WAS_OFFLINE"|string;
  export interface DeviceStatusDetail {
    /**
     * The device status detail code.
     */
    Code?: DeviceStatusDetailCode;
  }
  export type DeviceStatusDetailCode = "DEVICE_SOFTWARE_UPDATE_NEEDED"|"DEVICE_WAS_OFFLINE"|string;
  export type DeviceStatusDetails = DeviceStatusDetail[];
  export interface DeviceStatusInfo {
    /**
     * One or more device status detail descriptions.
     */
    DeviceStatusDetails?: DeviceStatusDetails;
  }
  export type DeviceType = string;
  export interface DisassociateDeviceFromRoomRequest {
    /**
     * The ARN of the device to disassociate from a room. Required.
     */
    DeviceArn?: Arn;
  }
  export interface DisassociateDeviceFromRoomResponse {
  }
  export interface DisassociateSkillGroupFromRoomRequest {
    /**
     * The ARN of the skill group to disassociate from a room. Required.
     */
    SkillGroupArn?: Arn;
    /**
     * The ARN of the room from which the skill group is to be disassociated. Required.
     */
    RoomArn?: Arn;
  }
  export interface DisassociateSkillGroupFromRoomResponse {
  }
  export type DistanceUnit = "METRIC"|"IMPERIAL"|string;
  export type Email = string;
  export type EnrollmentId = string;
  export type EnrollmentStatus = "INITIALIZED"|"PENDING"|"REGISTERED"|"DEREGISTERING"|string;
  export type ErrorMessage = string;
  export type Feature = "BLUETOOTH"|"VOLUME"|"NOTIFICATIONS"|"LISTS"|"SKILLS"|"ALL"|string;
  export type Features = Feature[];
  export interface Filter {
    /**
     * The key of a filter.
     */
    Key: FilterKey;
    /**
     * The values of a filter.
     */
    Values: FilterValueList;
  }
  export type FilterKey = string;
  export type FilterList = Filter[];
  export type FilterValue = string;
  export type FilterValueList = FilterValue[];
  export interface GetDeviceRequest {
    /**
     * The ARN of the device for which to request details. Required.
     */
    DeviceArn?: Arn;
  }
  export interface GetDeviceResponse {
    /**
     * The details of the device requested. Required.
     */
    Device?: Device;
  }
  export interface GetProfileRequest {
    /**
     * The ARN of the room profile for which to request details. Required.
     */
    ProfileArn?: Arn;
  }
  export interface GetProfileResponse {
    /**
     * The details of the room profile requested. Required.
     */
    Profile?: Profile;
  }
  export interface GetRoomRequest {
    /**
     * The ARN of the room for which to request details. Required.
     */
    RoomArn?: Arn;
  }
  export interface GetRoomResponse {
    /**
     * The details of the room requested.
     */
    Room?: Room;
  }
  export interface GetRoomSkillParameterRequest {
    /**
     * The ARN of the room from which to get the room skill parameter details. 
     */
    RoomArn?: Arn;
    /**
     * The ARN of the skill from which to get the room skill parameter details. Required.
     */
    SkillId: SkillId;
    /**
     * The room skill parameter key for which to get details. Required.
     */
    ParameterKey: RoomSkillParameterKey;
  }
  export interface GetRoomSkillParameterResponse {
    /**
     * The details of the room skill parameter requested. Required.
     */
    RoomSkillParameter?: RoomSkillParameter;
  }
  export interface GetSkillGroupRequest {
    /**
     * The ARN of the skill group for which to get details. Required.
     */
    SkillGroupArn?: Arn;
  }
  export interface GetSkillGroupResponse {
    /**
     * The details of the skill group requested. Required.
     */
    SkillGroup?: SkillGroup;
  }
  export interface ListSkillsRequest {
    /**
     * The ARN of the skill group for which to list enabled skills. Required.
     */
    SkillGroupArn?: Arn;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults. Required.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. Required.
     */
    MaxResults?: SkillListMaxResults;
  }
  export interface ListSkillsResponse {
    /**
     * The list of enabled skills requested. Required.
     */
    SkillSummaries?: SkillSummaryList;
    /**
     * The token returned to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsRequest {
    /**
     * The ARN of the specific resource for which to list tags. Required.
     */
    Arn: Arn;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTagsResponse {
    /**
     * The list of tags requested for the specific resource.
     */
    Tags?: TagList;
    /**
     * The token returned to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export type MacAddress = string;
  export type MaxResults = number;
  export type MaxVolumeLimit = number;
  export type NextToken = string;
  export interface Profile {
    /**
     * The ARN of a room profile.
     */
    ProfileArn?: Arn;
    /**
     * The name of a room profile.
     */
    ProfileName?: ProfileName;
    /**
     * The address of a room profile.
     */
    Address?: Address;
    /**
     * The time zone of a room profile.
     */
    Timezone?: Timezone;
    /**
     * The distance unit of a room profile.
     */
    DistanceUnit?: DistanceUnit;
    /**
     * The temperature unit of a room profile.
     */
    TemperatureUnit?: TemperatureUnit;
    /**
     * The wake word of a room profile.
     */
    WakeWord?: WakeWord;
    /**
     * The setup mode of a room profile.
     */
    SetupModeDisabled?: Boolean;
    /**
     * The max volume limit of a room profile.
     */
    MaxVolumeLimit?: MaxVolumeLimit;
    /**
     * The PSTN setting of a room profile.
     */
    PSTNEnabled?: Boolean;
  }
  export interface ProfileData {
    /**
     * The ARN of a room profile.
     */
    ProfileArn?: Arn;
    /**
     * The name of a room profile.
     */
    ProfileName?: ProfileName;
    /**
     * The address of a room profile.
     */
    Address?: Address;
    /**
     * The timezone of a room profile.
     */
    Timezone?: Timezone;
    /**
     * The distance unit of a room profile.
     */
    DistanceUnit?: DistanceUnit;
    /**
     * The temperature unit of a room profile.
     */
    TemperatureUnit?: TemperatureUnit;
    /**
     * The wake word of a room profile.
     */
    WakeWord?: WakeWord;
  }
  export type ProfileDataList = ProfileData[];
  export type ProfileName = string;
  export type ProviderCalendarId = string;
  export interface PutRoomSkillParameterRequest {
    /**
     * The ARN of the room associated with the room skill parameter. Required.
     */
    RoomArn?: Arn;
    /**
     * The ARN of the skill associated with the room skill parameter. Required.
     */
    SkillId: SkillId;
    /**
     * The updated room skill parameter. Required.
     */
    RoomSkillParameter: RoomSkillParameter;
  }
  export interface PutRoomSkillParameterResponse {
  }
  export interface ResolveRoomRequest {
    /**
     * The ARN of the user. Required.
     */
    UserId: UserId;
    /**
     * The ARN of the skill that was requested. Required.
     */
    SkillId: SkillId;
  }
  export interface ResolveRoomResponse {
    /**
     * The ARN of the room from which the skill request was invoked.
     */
    RoomArn?: Arn;
    /**
     * The name of the room from which the skill request was invoked.
     */
    RoomName?: RoomName;
    /**
     * Response to get the room profile request. Required.
     */
    RoomSkillParameters?: RoomSkillParameters;
  }
  export interface RevokeInvitationRequest {
    /**
     * The ARN of the user for whom to revoke an enrollment invitation. Required.
     */
    UserArn?: Arn;
    /**
     * The ARN of the enrollment invitation to revoke. Required.
     */
    EnrollmentId?: EnrollmentId;
  }
  export interface RevokeInvitationResponse {
  }
  export interface Room {
    /**
     * The ARN of a room.
     */
    RoomArn?: Arn;
    /**
     * The name of a room.
     */
    RoomName?: RoomName;
    /**
     * The description of a room.
     */
    Description?: RoomDescription;
    /**
     * The provider calendar ARN of a room.
     */
    ProviderCalendarId?: ProviderCalendarId;
    /**
     * The profile ARN of a room.
     */
    ProfileArn?: Arn;
  }
  export interface RoomData {
    /**
     * The ARN of a room.
     */
    RoomArn?: Arn;
    /**
     * The name of a room.
     */
    RoomName?: RoomName;
    /**
     * The description of a room.
     */
    Description?: RoomDescription;
    /**
     * The provider calendar ARN of a room.
     */
    ProviderCalendarId?: ProviderCalendarId;
    /**
     * The profile ARN of a room.
     */
    ProfileArn?: Arn;
    /**
     * The profile name of a room.
     */
    ProfileName?: ProfileName;
  }
  export type RoomDataList = RoomData[];
  export type RoomDescription = string;
  export type RoomName = string;
  export interface RoomSkillParameter {
    /**
     * The parameter key of a room skill parameter. ParameterKey is an enumerated type that only takes “DEFAULT” or “SCOPE” as valid values.
     */
    ParameterKey: RoomSkillParameterKey;
    /**
     * The parameter value of a room skill parameter.
     */
    ParameterValue: RoomSkillParameterValue;
  }
  export type RoomSkillParameterKey = string;
  export type RoomSkillParameterValue = string;
  export type RoomSkillParameters = RoomSkillParameter[];
  export interface SearchDevicesRequest {
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
    /**
     * The filters to use to list a specified set of devices. Supported filter keys are DeviceName, DeviceStatus, DeviceStatusDetailCode, RoomName, DeviceType, DeviceSerialNumber, and UnassociatedOnly.
     */
    Filters?: FilterList;
    /**
     * The sort order to use in listing the specified set of devices. Supported sort keys are DeviceName, DeviceStatus, RoomName, DeviceType, and DeviceSerialNumber.
     */
    SortCriteria?: SortList;
  }
  export interface SearchDevicesResponse {
    /**
     * The devices that meet the specified set of filter criteria, in sort order.
     */
    Devices?: DeviceDataList;
    /**
     * The token returned to indicate that there is more data available.
     */
    NextToken?: NextToken;
    /**
     * The total number of devices returned.
     */
    TotalCount?: TotalCount;
  }
  export interface SearchProfilesRequest {
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
    /**
     * The filters to use to list a specified set of room profiles. Supported filter keys are ProfileName and Address. Required. 
     */
    Filters?: FilterList;
    /**
     * The sort order to use in listing the specified set of room profiles. Supported sort keys are ProfileName and Address.
     */
    SortCriteria?: SortList;
  }
  export interface SearchProfilesResponse {
    /**
     * The profiles that meet the specified set of filter criteria, in sort order.
     */
    Profiles?: ProfileDataList;
    /**
     * The token returned to indicate that there is more data available.
     */
    NextToken?: NextToken;
    /**
     * The total number of room profiles returned.
     */
    TotalCount?: TotalCount;
  }
  export interface SearchRoomsRequest {
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. 
     */
    MaxResults?: MaxResults;
    /**
     * The filters to use to list a specified set of rooms. The supported filter keys are RoomName and ProfileName.
     */
    Filters?: FilterList;
    /**
     * The sort order to use in listing the specified set of rooms. The supported sort keys are RoomName and ProfileName.
     */
    SortCriteria?: SortList;
  }
  export interface SearchRoomsResponse {
    /**
     * The rooms that meet the specified set of filter criteria, in sort order.
     */
    Rooms?: RoomDataList;
    /**
     * The token returned to indicate that there is more data available.
     */
    NextToken?: NextToken;
    /**
     * The total number of rooms returned.
     */
    TotalCount?: TotalCount;
  }
  export interface SearchSkillGroupsRequest {
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults. Required.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. 
     */
    MaxResults?: MaxResults;
    /**
     * The filters to use to list a specified set of skill groups. The supported filter key is SkillGroupName. 
     */
    Filters?: FilterList;
    /**
     * The sort order to use in listing the specified set of skill groups. The supported sort key is SkillGroupName. 
     */
    SortCriteria?: SortList;
  }
  export interface SearchSkillGroupsResponse {
    /**
     * The skill groups that meet the filter criteria, in sort order.
     */
    SkillGroups?: SkillGroupDataList;
    /**
     * The token returned to indicate that there is more data available.
     */
    NextToken?: NextToken;
    /**
     * The total number of skill groups returned.
     */
    TotalCount?: TotalCount;
  }
  export interface SearchUsersRequest {
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults. Required.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. Required.
     */
    MaxResults?: MaxResults;
    /**
     * The filters to use for listing a specific set of users. Required. Supported filter keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.
     */
    Filters?: FilterList;
    /**
     * The sort order to use in listing the filtered set of users. Required. Supported sort keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.
     */
    SortCriteria?: SortList;
  }
  export interface SearchUsersResponse {
    /**
     * The users that meet the specified set of filter criteria, in sort order.
     */
    Users?: UserDataList;
    /**
     * The token returned to indicate that there is more data available.
     */
    NextToken?: NextToken;
    /**
     * The total number of users returned.
     */
    TotalCount?: TotalCount;
  }
  export interface SendInvitationRequest {
    /**
     * The ARN of the user to whom to send an invitation. Required.
     */
    UserArn?: Arn;
  }
  export interface SendInvitationResponse {
  }
  export interface SkillGroup {
    /**
     * The ARN of a skill group.
     */
    SkillGroupArn?: Arn;
    /**
     * The name of a skill group.
     */
    SkillGroupName?: SkillGroupName;
    /**
     * The description of a skill group.
     */
    Description?: SkillGroupDescription;
  }
  export interface SkillGroupData {
    /**
     * The skill group ARN of a skill group.
     */
    SkillGroupArn?: Arn;
    /**
     * The skill group name of a skill group.
     */
    SkillGroupName?: SkillGroupName;
    /**
     * The description of a skill group.
     */
    Description?: SkillGroupDescription;
  }
  export type SkillGroupDataList = SkillGroupData[];
  export type SkillGroupDescription = string;
  export type SkillGroupName = string;
  export type SkillId = string;
  export type SkillListMaxResults = number;
  export type SkillName = string;
  export interface SkillSummary {
    /**
     * The ARN of the skill summary.
     */
    SkillId?: SkillId;
    /**
     * The name of the skill.
     */
    SkillName?: SkillName;
    /**
     * Linking support for a skill.
     */
    SupportsLinking?: boolean;
  }
  export type SkillSummaryList = SkillSummary[];
  export type SoftwareVersion = string;
  export interface Sort {
    /**
     * The sort key of a sort object.
     */
    Key: SortKey;
    /**
     * The sort value of a sort object.
     */
    Value: SortValue;
  }
  export type SortKey = string;
  export type SortList = Sort[];
  export type SortValue = "ASC"|"DESC"|string;
  export interface StartDeviceSyncRequest {
    /**
     * The ARN of the room with which the device to sync is associated. Required.
     */
    RoomArn?: Arn;
    /**
     * The ARN of the device to sync. Required.
     */
    DeviceArn?: Arn;
    /**
     * Request structure to start the device sync. Required.
     */
    Features: Features;
  }
  export interface StartDeviceSyncResponse {
  }
  export interface Tag {
    /**
     * The key of a tag. Tag keys are case-sensitive. 
     */
    Key?: TagKey;
    /**
     * The value of a tag. Tag values are case-sensitive and can be null.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The ARN of the resource to which to add metadata tags. Required. 
     */
    Arn: Arn;
    /**
     * The tags to be added to the specified resource. Do not provide system tags. Required. 
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TemperatureUnit = "FAHRENHEIT"|"CELSIUS"|string;
  export type Timezone = string;
  export type TotalCount = number;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource from which to remove metadata tags. Required. 
     */
    Arn: Arn;
    /**
     * The tags to be removed from the specified resource. Do not provide system tags. Required. 
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateDeviceRequest {
    /**
     * The ARN of the device to update. Required.
     */
    DeviceArn?: Arn;
    /**
     * The updated device name. Required.
     */
    DeviceName?: DeviceName;
  }
  export interface UpdateDeviceResponse {
  }
  export interface UpdateProfileRequest {
    /**
     * The ARN of the room profile to update. Required.
     */
    ProfileArn?: Arn;
    /**
     * The updated name for the room profile.
     */
    ProfileName?: ProfileName;
    /**
     * The updated timezone for the room profile.
     */
    Timezone?: Timezone;
    /**
     * The updated address for the room profile.
     */
    Address?: Address;
    /**
     * The updated distance unit for the room profile.
     */
    DistanceUnit?: DistanceUnit;
    /**
     * The updated temperature unit for the room profile.
     */
    TemperatureUnit?: TemperatureUnit;
    /**
     * The updated wake word for the room profile.
     */
    WakeWord?: WakeWord;
    /**
     * Whether the setup mode of the profile is enabled.
     */
    SetupModeDisabled?: Boolean;
    /**
     * The updated maximum volume limit for the room profile.
     */
    MaxVolumeLimit?: MaxVolumeLimit;
    /**
     * Whether the PSTN setting of the room profile is enabled.
     */
    PSTNEnabled?: Boolean;
  }
  export interface UpdateProfileResponse {
  }
  export interface UpdateRoomRequest {
    /**
     * The ARN of the room to update. 
     */
    RoomArn?: Arn;
    /**
     * The updated name for the room.
     */
    RoomName?: RoomName;
    /**
     * The updated description for the room.
     */
    Description?: RoomDescription;
    /**
     * The updated provider calendar ARN for the room.
     */
    ProviderCalendarId?: ProviderCalendarId;
    /**
     * The updated profile ARN for the room.
     */
    ProfileArn?: Arn;
  }
  export interface UpdateRoomResponse {
  }
  export interface UpdateSkillGroupRequest {
    /**
     * The ARN of the skill group to update. 
     */
    SkillGroupArn?: Arn;
    /**
     * The updated name for the skill group.
     */
    SkillGroupName?: SkillGroupName;
    /**
     * The updated description for the skill group.
     */
    Description?: SkillGroupDescription;
  }
  export interface UpdateSkillGroupResponse {
  }
  export interface UserData {
    /**
     * The ARN of a user.
     */
    UserArn?: Arn;
    /**
     * The first name of a user.
     */
    FirstName?: user_FirstName;
    /**
     * The last name of a user.
     */
    LastName?: user_LastName;
    /**
     * The email of a user.
     */
    Email?: Email;
    /**
     * The enrollment status of a user.
     */
    EnrollmentStatus?: EnrollmentStatus;
    /**
     * The enrollment ARN of a user.
     */
    EnrollmentId?: EnrollmentId;
  }
  export type UserDataList = UserData[];
  export type UserId = string;
  export type WakeWord = "ALEXA"|"AMAZON"|"ECHO"|"COMPUTER"|string;
  export type user_FirstName = string;
  export type user_LastName = string;
  export type user_UserId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-09"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AlexaForBusiness client.
   */
  export import Types = AlexaForBusiness;
}
export = AlexaForBusiness;
