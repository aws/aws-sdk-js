import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CognitoIdentityServiceProvider extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CognitoIdentityServiceProvider.Types.ClientConfiguration)
  config: Config & CognitoIdentityServiceProvider.Types.ClientConfiguration;
  /**
   * Adds additional user attributes to the user pool schema.
   */
  addCustomAttributes(params: CognitoIdentityServiceProvider.Types.AddCustomAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AddCustomAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AddCustomAttributesResponse, AWSError>;
  /**
   * Adds additional user attributes to the user pool schema.
   */
  addCustomAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AddCustomAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AddCustomAttributesResponse, AWSError>;
  /**
   * Adds the specified user to the specified group. Requires developer credentials.
   */
  adminAddUserToGroup(params: CognitoIdentityServiceProvider.Types.AdminAddUserToGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds the specified user to the specified group. Requires developer credentials.
   */
  adminAddUserToGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Confirms user registration as an admin without using a confirmation code. Works on any user. Requires developer credentials.
   */
  adminConfirmSignUp(params: CognitoIdentityServiceProvider.Types.AdminConfirmSignUpRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminConfirmSignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminConfirmSignUpResponse, AWSError>;
  /**
   * Confirms user registration as an admin without using a confirmation code. Works on any user. Requires developer credentials.
   */
  adminConfirmSignUp(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminConfirmSignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminConfirmSignUpResponse, AWSError>;
  /**
   * Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to CreateUserPool or UpdateUserPool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Requires developer credentials.
   */
  adminCreateUser(params: CognitoIdentityServiceProvider.Types.AdminCreateUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminCreateUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminCreateUserResponse, AWSError>;
  /**
   * Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to CreateUserPool or UpdateUserPool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Requires developer credentials.
   */
  adminCreateUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminCreateUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminCreateUserResponse, AWSError>;
  /**
   * Deletes a user as an administrator. Works on any user. Requires developer credentials.
   */
  adminDeleteUser(params: CognitoIdentityServiceProvider.Types.AdminDeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user as an administrator. Works on any user. Requires developer credentials.
   */
  adminDeleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the user attributes in a user pool as an administrator. Works on any user. Requires developer credentials.
   */
  adminDeleteUserAttributes(params: CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesResponse, AWSError>;
  /**
   * Deletes the user attributes in a user pool as an administrator. Works on any user. Requires developer credentials.
   */
  adminDeleteUserAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDeleteUserAttributesResponse, AWSError>;
  /**
   * Disables the specified user as an administrator. Works on any user. Requires developer credentials.
   */
  adminDisableUser(params: CognitoIdentityServiceProvider.Types.AdminDisableUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDisableUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDisableUserResponse, AWSError>;
  /**
   * Disables the specified user as an administrator. Works on any user. Requires developer credentials.
   */
  adminDisableUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminDisableUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminDisableUserResponse, AWSError>;
  /**
   * Enables the specified user as an administrator. Works on any user. Requires developer credentials.
   */
  adminEnableUser(params: CognitoIdentityServiceProvider.Types.AdminEnableUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminEnableUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminEnableUserResponse, AWSError>;
  /**
   * Enables the specified user as an administrator. Works on any user. Requires developer credentials.
   */
  adminEnableUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminEnableUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminEnableUserResponse, AWSError>;
  /**
   * Forgets the device, as an administrator. Requires developer credentials.
   */
  adminForgetDevice(params: CognitoIdentityServiceProvider.Types.AdminForgetDeviceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Forgets the device, as an administrator. Requires developer credentials.
   */
  adminForgetDevice(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets the device, as an administrator. Requires developer credentials.
   */
  adminGetDevice(params: CognitoIdentityServiceProvider.Types.AdminGetDeviceRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminGetDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminGetDeviceResponse, AWSError>;
  /**
   * Gets the device, as an administrator. Requires developer credentials.
   */
  adminGetDevice(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminGetDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminGetDeviceResponse, AWSError>;
  /**
   * Gets the specified user by user name in a user pool as an administrator. Works on any user. Requires developer credentials.
   */
  adminGetUser(params: CognitoIdentityServiceProvider.Types.AdminGetUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminGetUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminGetUserResponse, AWSError>;
  /**
   * Gets the specified user by user name in a user pool as an administrator. Works on any user. Requires developer credentials.
   */
  adminGetUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminGetUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminGetUserResponse, AWSError>;
  /**
   * Initiates the authentication flow, as an administrator. Requires developer credentials.
   */
  adminInitiateAuth(params: CognitoIdentityServiceProvider.Types.AdminInitiateAuthRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminInitiateAuthResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminInitiateAuthResponse, AWSError>;
  /**
   * Initiates the authentication flow, as an administrator. Requires developer credentials.
   */
  adminInitiateAuth(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminInitiateAuthResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminInitiateAuthResponse, AWSError>;
  /**
   * Lists devices, as an administrator. Requires developer credentials.
   */
  adminListDevices(params: CognitoIdentityServiceProvider.Types.AdminListDevicesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminListDevicesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminListDevicesResponse, AWSError>;
  /**
   * Lists devices, as an administrator. Requires developer credentials.
   */
  adminListDevices(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminListDevicesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminListDevicesResponse, AWSError>;
  /**
   * Lists the groups that the user belongs to. Requires developer credentials.
   */
  adminListGroupsForUser(params: CognitoIdentityServiceProvider.Types.AdminListGroupsForUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminListGroupsForUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminListGroupsForUserResponse, AWSError>;
  /**
   * Lists the groups that the user belongs to. Requires developer credentials.
   */
  adminListGroupsForUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminListGroupsForUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminListGroupsForUserResponse, AWSError>;
  /**
   * Removes the specified user from the specified group. Requires developer credentials.
   */
  adminRemoveUserFromGroup(params: CognitoIdentityServiceProvider.Types.AdminRemoveUserFromGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified user from the specified group. Requires developer credentials.
   */
  adminRemoveUserFromGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Resets the specified user's password in a user pool as an administrator. Works on any user. When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password. Requires developer credentials.
   */
  adminResetUserPassword(params: CognitoIdentityServiceProvider.Types.AdminResetUserPasswordRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminResetUserPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminResetUserPasswordResponse, AWSError>;
  /**
   * Resets the specified user's password in a user pool as an administrator. Works on any user. When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password. Requires developer credentials.
   */
  adminResetUserPassword(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminResetUserPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminResetUserPasswordResponse, AWSError>;
  /**
   * Responds to an authentication challenge, as an administrator. Requires developer credentials.
   */
  adminRespondToAuthChallenge(params: CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeResponse, AWSError>;
  /**
   * Responds to an authentication challenge, as an administrator. Requires developer credentials.
   */
  adminRespondToAuthChallenge(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminRespondToAuthChallengeResponse, AWSError>;
  /**
   * Sets all the user settings for a specified user name. Works on any user. Requires developer credentials.
   */
  adminSetUserSettings(params: CognitoIdentityServiceProvider.Types.AdminSetUserSettingsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminSetUserSettingsResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminSetUserSettingsResponse, AWSError>;
  /**
   * Sets all the user settings for a specified user name. Works on any user. Requires developer credentials.
   */
  adminSetUserSettings(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminSetUserSettingsResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminSetUserSettingsResponse, AWSError>;
  /**
   * Updates the device status as an administrator. Requires developer credentials.
   */
  adminUpdateDeviceStatus(params: CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusResponse, AWSError>;
  /**
   * Updates the device status as an administrator. Requires developer credentials.
   */
  adminUpdateDeviceStatus(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUpdateDeviceStatusResponse, AWSError>;
  /**
   * Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user. Requires developer credentials.
   */
  adminUpdateUserAttributes(params: CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesResponse, AWSError>;
  /**
   * Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user. Requires developer credentials.
   */
  adminUpdateUserAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesResponse, AWSError>;
  /**
   * Signs out users from all devices, as an administrator. Requires developer credentials.
   */
  adminUserGlobalSignOut(params: CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutResponse, AWSError>;
  /**
   * Signs out users from all devices, as an administrator. Requires developer credentials.
   */
  adminUserGlobalSignOut(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutResponse) => void): Request<CognitoIdentityServiceProvider.Types.AdminUserGlobalSignOutResponse, AWSError>;
  /**
   * Changes the password for a specified user in a user pool.
   */
  changePassword(params: CognitoIdentityServiceProvider.Types.ChangePasswordRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ChangePasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ChangePasswordResponse, AWSError>;
  /**
   * Changes the password for a specified user in a user pool.
   */
  changePassword(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ChangePasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ChangePasswordResponse, AWSError>;
  /**
   * Confirms tracking of the device. This API call is the call that beings device tracking.
   */
  confirmDevice(params: CognitoIdentityServiceProvider.Types.ConfirmDeviceRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmDeviceResponse, AWSError>;
  /**
   * Confirms tracking of the device. This API call is the call that beings device tracking.
   */
  confirmDevice(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmDeviceResponse, AWSError>;
  /**
   * Allows a user to enter a code provided when they reset their password to update their password.
   */
  confirmForgotPassword(params: CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordResponse, AWSError>;
  /**
   * Allows a user to enter a code provided when they reset their password to update their password.
   */
  confirmForgotPassword(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmForgotPasswordResponse, AWSError>;
  /**
   * Confirms registration of a user and handles the existing alias from a previous user.
   */
  confirmSignUp(params: CognitoIdentityServiceProvider.Types.ConfirmSignUpRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmSignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmSignUpResponse, AWSError>;
  /**
   * Confirms registration of a user and handles the existing alias from a previous user.
   */
  confirmSignUp(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ConfirmSignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.ConfirmSignUpResponse, AWSError>;
  /**
   * Creates a new group in the specified user pool. Requires developer credentials.
   */
  createGroup(params: CognitoIdentityServiceProvider.Types.CreateGroupRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates a new group in the specified user pool. Requires developer credentials.
   */
  createGroup(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates the user import job.
   */
  createUserImportJob(params: CognitoIdentityServiceProvider.Types.CreateUserImportJobRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserImportJobResponse, AWSError>;
  /**
   * Creates the user import job.
   */
  createUserImportJob(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserImportJobResponse, AWSError>;
  /**
   * Creates a new Amazon Cognito user pool and sets the password policy for the pool.
   */
  createUserPool(params: CognitoIdentityServiceProvider.Types.CreateUserPoolRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolResponse, AWSError>;
  /**
   * Creates a new Amazon Cognito user pool and sets the password policy for the pool.
   */
  createUserPool(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolResponse, AWSError>;
  /**
   * Creates the user pool client.
   */
  createUserPoolClient(params: CognitoIdentityServiceProvider.Types.CreateUserPoolClientRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolClientResponse, AWSError>;
  /**
   * Creates the user pool client.
   */
  createUserPoolClient(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.CreateUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.CreateUserPoolClientResponse, AWSError>;
  /**
   * Deletes a group. Currently only groups with no members can be deleted. Requires developer credentials.
   */
  deleteGroup(params: CognitoIdentityServiceProvider.Types.DeleteGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a group. Currently only groups with no members can be deleted. Requires developer credentials.
   */
  deleteGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows a user to delete one's self.
   */
  deleteUser(params: CognitoIdentityServiceProvider.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows a user to delete one's self.
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the attributes for a user.
   */
  deleteUserAttributes(params: CognitoIdentityServiceProvider.Types.DeleteUserAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DeleteUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.DeleteUserAttributesResponse, AWSError>;
  /**
   * Deletes the attributes for a user.
   */
  deleteUserAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DeleteUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.DeleteUserAttributesResponse, AWSError>;
  /**
   * Deletes the specified Amazon Cognito user pool.
   */
  deleteUserPool(params: CognitoIdentityServiceProvider.Types.DeleteUserPoolRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Cognito user pool.
   */
  deleteUserPool(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows the developer to delete the user pool client.
   */
  deleteUserPoolClient(params: CognitoIdentityServiceProvider.Types.DeleteUserPoolClientRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows the developer to delete the user pool client.
   */
  deleteUserPoolClient(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes the user import job.
   */
  describeUserImportJob(params: CognitoIdentityServiceProvider.Types.DescribeUserImportJobRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserImportJobResponse, AWSError>;
  /**
   * Describes the user import job.
   */
  describeUserImportJob(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserImportJobResponse, AWSError>;
  /**
   * Returns the configuration information and metadata of the specified user pool.
   */
  describeUserPool(params: CognitoIdentityServiceProvider.Types.DescribeUserPoolRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolResponse, AWSError>;
  /**
   * Returns the configuration information and metadata of the specified user pool.
   */
  describeUserPool(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolResponse, AWSError>;
  /**
   * Client method for returning the configuration information and metadata of the specified user pool client.
   */
  describeUserPoolClient(params: CognitoIdentityServiceProvider.Types.DescribeUserPoolClientRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolClientResponse, AWSError>;
  /**
   * Client method for returning the configuration information and metadata of the specified user pool client.
   */
  describeUserPoolClient(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.DescribeUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.DescribeUserPoolClientResponse, AWSError>;
  /**
   * Forgets the specified device.
   */
  forgetDevice(params: CognitoIdentityServiceProvider.Types.ForgetDeviceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Forgets the specified device.
   */
  forgetDevice(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the password for the specified client ID or username.
   */
  forgotPassword(params: CognitoIdentityServiceProvider.Types.ForgotPasswordRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ForgotPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ForgotPasswordResponse, AWSError>;
  /**
   * Retrieves the password for the specified client ID or username.
   */
  forgotPassword(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ForgotPasswordResponse) => void): Request<CognitoIdentityServiceProvider.Types.ForgotPasswordResponse, AWSError>;
  /**
   * Gets the header information for the .csv file to be used as input for the user import job.
   */
  getCSVHeader(params: CognitoIdentityServiceProvider.Types.GetCSVHeaderRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetCSVHeaderResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetCSVHeaderResponse, AWSError>;
  /**
   * Gets the header information for the .csv file to be used as input for the user import job.
   */
  getCSVHeader(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetCSVHeaderResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetCSVHeaderResponse, AWSError>;
  /**
   * Gets the device.
   */
  getDevice(params: CognitoIdentityServiceProvider.Types.GetDeviceRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetDeviceResponse, AWSError>;
  /**
   * Gets the device.
   */
  getDevice(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetDeviceResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetDeviceResponse, AWSError>;
  /**
   * Gets a group. Requires developer credentials.
   */
  getGroup(params: CognitoIdentityServiceProvider.Types.GetGroupRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetGroupResponse, AWSError>;
  /**
   * Gets a group. Requires developer credentials.
   */
  getGroup(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetGroupResponse, AWSError>;
  /**
   * Gets the user attributes and metadata for a user.
   */
  getUser(params: CognitoIdentityServiceProvider.Types.GetUserRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUserResponse, AWSError>;
  /**
   * Gets the user attributes and metadata for a user.
   */
  getUser(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUserResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUserResponse, AWSError>;
  /**
   * Gets the user attribute verification code for the specified attribute name.
   */
  getUserAttributeVerificationCode(params: CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeResponse, AWSError>;
  /**
   * Gets the user attribute verification code for the specified attribute name.
   */
  getUserAttributeVerificationCode(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeResponse) => void): Request<CognitoIdentityServiceProvider.Types.GetUserAttributeVerificationCodeResponse, AWSError>;
  /**
   * Signs out users from all devices.
   */
  globalSignOut(params: CognitoIdentityServiceProvider.Types.GlobalSignOutRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GlobalSignOutResponse) => void): Request<CognitoIdentityServiceProvider.Types.GlobalSignOutResponse, AWSError>;
  /**
   * Signs out users from all devices.
   */
  globalSignOut(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.GlobalSignOutResponse) => void): Request<CognitoIdentityServiceProvider.Types.GlobalSignOutResponse, AWSError>;
  /**
   * Initiates the authentication flow.
   */
  initiateAuth(params: CognitoIdentityServiceProvider.Types.InitiateAuthRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.InitiateAuthResponse) => void): Request<CognitoIdentityServiceProvider.Types.InitiateAuthResponse, AWSError>;
  /**
   * Initiates the authentication flow.
   */
  initiateAuth(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.InitiateAuthResponse) => void): Request<CognitoIdentityServiceProvider.Types.InitiateAuthResponse, AWSError>;
  /**
   * Lists the devices.
   */
  listDevices(params: CognitoIdentityServiceProvider.Types.ListDevicesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListDevicesResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListDevicesResponse, AWSError>;
  /**
   * Lists the devices.
   */
  listDevices(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListDevicesResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListDevicesResponse, AWSError>;
  /**
   * Lists the groups associated with a user pool. Requires developer credentials.
   */
  listGroups(params: CognitoIdentityServiceProvider.Types.ListGroupsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListGroupsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists the groups associated with a user pool. Requires developer credentials.
   */
  listGroups(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListGroupsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists the user import jobs.
   */
  listUserImportJobs(params: CognitoIdentityServiceProvider.Types.ListUserImportJobsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserImportJobsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserImportJobsResponse, AWSError>;
  /**
   * Lists the user import jobs.
   */
  listUserImportJobs(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserImportJobsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserImportJobsResponse, AWSError>;
  /**
   * Lists the clients that have been created for the specified user pool.
   */
  listUserPoolClients(params: CognitoIdentityServiceProvider.Types.ListUserPoolClientsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserPoolClientsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserPoolClientsResponse, AWSError>;
  /**
   * Lists the clients that have been created for the specified user pool.
   */
  listUserPoolClients(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserPoolClientsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserPoolClientsResponse, AWSError>;
  /**
   * Lists the user pools associated with an AWS account.
   */
  listUserPools(params: CognitoIdentityServiceProvider.Types.ListUserPoolsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserPoolsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserPoolsResponse, AWSError>;
  /**
   * Lists the user pools associated with an AWS account.
   */
  listUserPools(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUserPoolsResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUserPoolsResponse, AWSError>;
  /**
   * Lists the users in the Amazon Cognito user pool.
   */
  listUsers(params: CognitoIdentityServiceProvider.Types.ListUsersRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUsersResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users in the Amazon Cognito user pool.
   */
  listUsers(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUsersResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users in the specified group. Requires developer credentials.
   */
  listUsersInGroup(params: CognitoIdentityServiceProvider.Types.ListUsersInGroupRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUsersInGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUsersInGroupResponse, AWSError>;
  /**
   * Lists the users in the specified group. Requires developer credentials.
   */
  listUsersInGroup(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ListUsersInGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.ListUsersInGroupResponse, AWSError>;
  /**
   * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
   */
  resendConfirmationCode(params: CognitoIdentityServiceProvider.Types.ResendConfirmationCodeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ResendConfirmationCodeResponse) => void): Request<CognitoIdentityServiceProvider.Types.ResendConfirmationCodeResponse, AWSError>;
  /**
   * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
   */
  resendConfirmationCode(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.ResendConfirmationCodeResponse) => void): Request<CognitoIdentityServiceProvider.Types.ResendConfirmationCodeResponse, AWSError>;
  /**
   * Responds to the authentication challenge.
   */
  respondToAuthChallenge(params: CognitoIdentityServiceProvider.Types.RespondToAuthChallengeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.RespondToAuthChallengeResponse) => void): Request<CognitoIdentityServiceProvider.Types.RespondToAuthChallengeResponse, AWSError>;
  /**
   * Responds to the authentication challenge.
   */
  respondToAuthChallenge(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.RespondToAuthChallengeResponse) => void): Request<CognitoIdentityServiceProvider.Types.RespondToAuthChallengeResponse, AWSError>;
  /**
   * Sets the user settings like multi-factor authentication (MFA). If MFA is to be removed for a particular attribute pass the attribute with code delivery as null. If null list is passed, all MFA options are removed.
   */
  setUserSettings(params: CognitoIdentityServiceProvider.Types.SetUserSettingsRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SetUserSettingsResponse) => void): Request<CognitoIdentityServiceProvider.Types.SetUserSettingsResponse, AWSError>;
  /**
   * Sets the user settings like multi-factor authentication (MFA). If MFA is to be removed for a particular attribute pass the attribute with code delivery as null. If null list is passed, all MFA options are removed.
   */
  setUserSettings(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SetUserSettingsResponse) => void): Request<CognitoIdentityServiceProvider.Types.SetUserSettingsResponse, AWSError>;
  /**
   * Registers the user in the specified user pool and creates a user name, password, and user attributes.
   */
  signUp(params: CognitoIdentityServiceProvider.Types.SignUpRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.SignUpResponse, AWSError>;
  /**
   * Registers the user in the specified user pool and creates a user name, password, and user attributes.
   */
  signUp(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.SignUpResponse) => void): Request<CognitoIdentityServiceProvider.Types.SignUpResponse, AWSError>;
  /**
   * Starts the user import.
   */
  startUserImportJob(params: CognitoIdentityServiceProvider.Types.StartUserImportJobRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.StartUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.StartUserImportJobResponse, AWSError>;
  /**
   * Starts the user import.
   */
  startUserImportJob(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.StartUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.StartUserImportJobResponse, AWSError>;
  /**
   * Stops the user import job.
   */
  stopUserImportJob(params: CognitoIdentityServiceProvider.Types.StopUserImportJobRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.StopUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.StopUserImportJobResponse, AWSError>;
  /**
   * Stops the user import job.
   */
  stopUserImportJob(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.StopUserImportJobResponse) => void): Request<CognitoIdentityServiceProvider.Types.StopUserImportJobResponse, AWSError>;
  /**
   * Updates the device status.
   */
  updateDeviceStatus(params: CognitoIdentityServiceProvider.Types.UpdateDeviceStatusRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateDeviceStatusResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateDeviceStatusResponse, AWSError>;
  /**
   * Updates the device status.
   */
  updateDeviceStatus(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateDeviceStatusResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateDeviceStatusResponse, AWSError>;
  /**
   * Updates the specified group with the specified attributes. Requires developer credentials.
   */
  updateGroup(params: CognitoIdentityServiceProvider.Types.UpdateGroupRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates the specified group with the specified attributes. Requires developer credentials.
   */
  updateGroup(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateGroupResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateGroupResponse, AWSError>;
  /**
   * Allows a user to update a specific attribute (one at a time).
   */
  updateUserAttributes(params: CognitoIdentityServiceProvider.Types.UpdateUserAttributesRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserAttributesResponse, AWSError>;
  /**
   * Allows a user to update a specific attribute (one at a time).
   */
  updateUserAttributes(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserAttributesResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserAttributesResponse, AWSError>;
  /**
   * Updates the specified user pool with the specified attributes.
   */
  updateUserPool(params: CognitoIdentityServiceProvider.Types.UpdateUserPoolRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserPoolResponse, AWSError>;
  /**
   * Updates the specified user pool with the specified attributes.
   */
  updateUserPool(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserPoolResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserPoolResponse, AWSError>;
  /**
   * Allows the developer to update the specified user pool client and password policy.
   */
  updateUserPoolClient(params: CognitoIdentityServiceProvider.Types.UpdateUserPoolClientRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserPoolClientResponse, AWSError>;
  /**
   * Allows the developer to update the specified user pool client and password policy.
   */
  updateUserPoolClient(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.UpdateUserPoolClientResponse) => void): Request<CognitoIdentityServiceProvider.Types.UpdateUserPoolClientResponse, AWSError>;
  /**
   * Verifies the specified user attributes in the user pool.
   */
  verifyUserAttribute(params: CognitoIdentityServiceProvider.Types.VerifyUserAttributeRequest, callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.VerifyUserAttributeResponse) => void): Request<CognitoIdentityServiceProvider.Types.VerifyUserAttributeResponse, AWSError>;
  /**
   * Verifies the specified user attributes in the user pool.
   */
  verifyUserAttribute(callback?: (err: AWSError, data: CognitoIdentityServiceProvider.Types.VerifyUserAttributeResponse) => void): Request<CognitoIdentityServiceProvider.Types.VerifyUserAttributeResponse, AWSError>;
}
declare namespace CognitoIdentityServiceProvider {
  export interface AddCustomAttributesRequest {
    /**
     * The user pool ID for the user pool where you want to add custom attributes.
     */
    UserPoolId: UserPoolIdType;
    /**
     * An array of custom attributes, such as Mutable and Name.
     */
    CustomAttributes: CustomAttributesListType;
  }
  export interface AddCustomAttributesResponse {
  }
  export interface AdminAddUserToGroupRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The username for the user.
     */
    Username: UsernameType;
    /**
     * The group name.
     */
    GroupName: GroupNameType;
  }
  export interface AdminConfirmSignUpRequest {
    /**
     * The user pool ID for which you want to confirm user registration.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name for which you want to confirm user registration.
     */
    Username: UsernameType;
  }
  export interface AdminConfirmSignUpResponse {
  }
  export interface AdminCreateUserConfigType {
    /**
     * Set to True if only the administrator is allowed to create user profiles. Set to False if users can sign themselves up via an app.
     */
    AllowAdminCreateUserOnly?: BooleanType;
    /**
     * The user account expiration limit, in days, after which the account is no longer usable. To reset the account after that time limit, you must call AdminCreateUser again, specifying "RESEND" for the MessageAction parameter. The default value for this paameter is 7.
     */
    UnusedAccountValidityDays?: AdminCreateUserUnusedAccountValidityDaysType;
    /**
     * The message template to be used for the welcome message to new users.
     */
    InviteMessageTemplate?: MessageTemplateType;
  }
  export interface AdminCreateUserRequest {
    /**
     * The user pool ID for the user pool where the user will be created.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The username for the user. Must be unique within the user pool. Must be a UTF-8 string between 1 and 128 characters. After the user is created, the username cannot be changed.
     */
    Username: UsernameType;
    /**
     * An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created. You can create a user without specifying any attributes other than Username. However, any attributes that you specify as required (in CreateUserPool or in the Attributes tab of the console) must be supplied either by you (in your call to AdminCreateUser) or by the user (when he or she signs up in response to your welcome message). To send a message inviting the user to sign up, you must specify the user's email address or phone number. This can be done in your call to AdminCreateUser or in the Users tab of the Amazon Cognito console for managing your user pools. In your call to AdminCreateUser, you can set the email_verified attribute to True, and you can set the phone_number_verified attribute to True. (You cannot do this by calling other operations such as AdminUpdateUserAttributes.)    email: The email address of the user to whom the message that contains the code and username will be sent. Required if the email_verified attribute is set to True, or if "EMAIL" is specified in the DesiredDeliveryMediums parameter.    phone_number: The phone number of the user to whom the message that contains the code and username will be sent. Required if the phone_number_verified attribute is set to True, or if "SMS" is specified in the DesiredDeliveryMediums parameter.  
     */
    UserAttributes?: AttributeListType;
    /**
     * The user's validation data. This is an array of name-value pairs that contain user attributes and attribute values that you can use for custom validation, such as restricting the types of user accounts that can be registered. For example, you might choose to allow or disallow user sign-up based on the user's domain. To configure custom validation, you must create a Pre Sign-up Lambda trigger for the user pool as described in the Amazon Cognito Developer Guide. The Lambda trigger receives the validation data and uses it in the validation process. The user's validation data is not persisted.
     */
    ValidationData?: AttributeListType;
    /**
     * The user's temporary password. This password must conform to the password policy that you specified when you created the user pool. The temporary password is valid only once. To complete the Admin Create User flow, the user must enter the temporary password in the sign-in page along with a new password to be used in all future sign-ins. This parameter is not required. If you do not specify a value, Amazon Cognito generates one for you. The temporary password can only be used until the user account expiration limit that you specified when you created the user pool. To reset the account after that time limit, you must call AdminCreateUser again, specifying "RESEND" for the MessageAction parameter.
     */
    TemporaryPassword?: PasswordType;
    /**
     * This parameter is only used if the phone_number_verified or email_verified attribute is set to True. Otherwise, it is ignored. If this parameter is set to True and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias. If this parameter is set to False, the API throws an AliasExistsException error if the alias already exists. The default value is False.
     */
    ForceAliasCreation?: ForceAliasCreation;
    /**
     * Set to "RESEND" to resend the invitation message to a user that already exists and reset the expiration limit on the user's account. Set to "SUPPRESS" to suppress sending the message. Only one value can be specified.
     */
    MessageAction?: MessageActionType;
    /**
     * Specify "EMAIL" if email will be used to send the welcome message. Specify "SMS" if the phone number will be used. The default value is "SMS". More than one value can be specified.
     */
    DesiredDeliveryMediums?: DeliveryMediumListType;
  }
  export interface AdminCreateUserResponse {
    /**
     * The user returned in the request to create a new user.
     */
    User?: UserType;
  }
  export type AdminCreateUserUnusedAccountValidityDaysType = number;
  export interface AdminDeleteUserAttributesRequest {
    /**
     * The user pool ID for the user pool where you want to delete user attributes.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user from which you would like to delete attributes.
     */
    Username: UsernameType;
    /**
     * An array of strings representing the user attribute names you wish to delete.
     */
    UserAttributeNames: AttributeNameListType;
  }
  export interface AdminDeleteUserAttributesResponse {
  }
  export interface AdminDeleteUserRequest {
    /**
     * The user pool ID for the user pool where you want to delete the user.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user you wish to delete.
     */
    Username: UsernameType;
  }
  export interface AdminDisableUserRequest {
    /**
     * The user pool ID for the user pool where you want to disable the user.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user you wish to disable.
     */
    Username: UsernameType;
  }
  export interface AdminDisableUserResponse {
  }
  export interface AdminEnableUserRequest {
    /**
     * The user pool ID for the user pool where you want to enable the user.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user you wish to ebable.
     */
    Username: UsernameType;
  }
  export interface AdminEnableUserResponse {
  }
  export interface AdminForgetDeviceRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
  }
  export interface AdminGetDeviceRequest {
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
  }
  export interface AdminGetDeviceResponse {
    /**
     * The device.
     */
    Device: DeviceType;
  }
  export interface AdminGetUserRequest {
    /**
     * The user pool ID for the user pool where you want to get information about the user.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user you wish to retrieve.
     */
    Username: UsernameType;
  }
  export interface AdminGetUserResponse {
    /**
     * The user name of the user about whom you are receiving information.
     */
    Username: UsernameType;
    /**
     * An array of name-value pairs representing user attributes.
     */
    UserAttributes?: AttributeListType;
    /**
     * The date the user was created.
     */
    UserCreateDate?: DateType;
    /**
     * The date the user was last modified.
     */
    UserLastModifiedDate?: DateType;
    /**
     * Indicates that the status is enabled.
     */
    Enabled?: BooleanType;
    /**
     * The user status. Can be one of the following:   UNCONFIRMED - User has been created but not confirmed.   CONFIRMED - User has been confirmed.   ARCHIVED - User is no longer active.   COMPROMISED - User is disabled due to a potential security threat.   UNKNOWN - User status is not known.  
     */
    UserStatus?: UserStatusType;
    /**
     * Specifies the options for MFA (e.g., email or phone number).
     */
    MFAOptions?: MFAOptionListType;
  }
  export interface AdminInitiateAuthRequest {
    /**
     * The ID of the Amazon Cognito user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The client app ID.
     */
    ClientId: ClientIdType;
    /**
     * The authentication flow.
     */
    AuthFlow: AuthFlowType;
    /**
     * The authentication parameters.
     */
    AuthParameters?: AuthParametersType;
    /**
     * The client app metadata.
     */
    ClientMetadata?: ClientMetadataType;
  }
  export interface AdminInitiateAuthResponse {
    /**
     * The name of the challenge.
     */
    ChallengeName?: ChallengeNameType;
    /**
     * The session.
     */
    Session?: SessionType;
    /**
     * The challenge parameters.
     */
    ChallengeParameters?: ChallengeParametersType;
    /**
     * The result of the authentication response.
     */
    AuthenticationResult?: AuthenticationResultType;
  }
  export interface AdminListDevicesRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
    /**
     * The limit of the devices request.
     */
    Limit?: QueryLimitType;
    /**
     * The pagination token.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export interface AdminListDevicesResponse {
    /**
     * The devices in the list of devices response.
     */
    Devices?: DeviceListType;
    /**
     * The pagination token.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export interface AdminListGroupsForUserRequest {
    /**
     * The username for the user.
     */
    Username: UsernameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The limit of the request to list groups.
     */
    Limit?: QueryLimitType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface AdminListGroupsForUserResponse {
    /**
     * The groups that the user belongs to.
     */
    Groups?: GroupListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface AdminRemoveUserFromGroupRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The username for the user.
     */
    Username: UsernameType;
    /**
     * The group name.
     */
    GroupName: GroupNameType;
  }
  export interface AdminResetUserPasswordRequest {
    /**
     * The user pool ID for the user pool where you want to reset the user's password.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user whose password you wish to reset.
     */
    Username: UsernameType;
  }
  export interface AdminResetUserPasswordResponse {
  }
  export interface AdminRespondToAuthChallengeRequest {
    /**
     * The ID of the Amazon Cognito user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The client ID.
     */
    ClientId: ClientIdType;
    /**
     * The name of the challenge.
     */
    ChallengeName: ChallengeNameType;
    /**
     * The challenge response.
     */
    ChallengeResponses?: ChallengeResponsesType;
    /**
     * The session.
     */
    Session?: SessionType;
  }
  export interface AdminRespondToAuthChallengeResponse {
    /**
     * The name of the challenge.
     */
    ChallengeName?: ChallengeNameType;
    /**
     * The session.
     */
    Session?: SessionType;
    /**
     * The challenge parameters.
     */
    ChallengeParameters?: ChallengeParametersType;
    /**
     * The result returned by the server in response to the authentication request.
     */
    AuthenticationResult?: AuthenticationResultType;
  }
  export interface AdminSetUserSettingsRequest {
    /**
     * The user pool ID for the user pool where you want to set the user's settings, such as MFA options.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user for whom you wish to set user settings.
     */
    Username: UsernameType;
    /**
     * Specifies the options for MFA (e.g., email or phone number).
     */
    MFAOptions: MFAOptionListType;
  }
  export interface AdminSetUserSettingsResponse {
  }
  export interface AdminUpdateDeviceStatusRequest {
    /**
     * The user pool ID&gt;
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The status indicating whether a device has been remembered or not.
     */
    DeviceRememberedStatus?: DeviceRememberedStatusType;
  }
  export interface AdminUpdateDeviceStatusResponse {
  }
  export interface AdminUpdateUserAttributesRequest {
    /**
     * The user pool ID for the user pool where you want to update user attributes.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name of the user for whom you want to update user attributes.
     */
    Username: UsernameType;
    /**
     * An array of name-value pairs representing user attributes.
     */
    UserAttributes: AttributeListType;
  }
  export interface AdminUpdateUserAttributesResponse {
  }
  export interface AdminUserGlobalSignOutRequest {
    /**
     * The user pool ID.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The user name.
     */
    Username: UsernameType;
  }
  export interface AdminUserGlobalSignOutResponse {
  }
  export type AliasAttributeType = "phone_number"|"email"|"preferred_username"|string;
  export type AliasAttributesListType = AliasAttributeType[];
  export type ArnType = string;
  export type AttributeDataType = "String"|"Number"|"DateTime"|"Boolean"|string;
  export type AttributeListType = AttributeType[];
  export type AttributeNameListType = AttributeNameType[];
  export type AttributeNameType = string;
  export interface AttributeType {
    /**
     * The name of the attribute.
     */
    Name: AttributeNameType;
    /**
     * The value of the attribute.
     */
    Value?: AttributeValueType;
  }
  export type AttributeValueType = string;
  export type AuthFlowType = "USER_SRP_AUTH"|"REFRESH_TOKEN_AUTH"|"REFRESH_TOKEN"|"CUSTOM_AUTH"|"ADMIN_NO_SRP_AUTH"|string;
  export type AuthParametersType = {[key: string]: StringType};
  export interface AuthenticationResultType {
    /**
     * The access token of the authentication result.
     */
    AccessToken?: TokenModelType;
    /**
     * The expiration period of the authentication result.
     */
    ExpiresIn?: IntegerType;
    /**
     * The token type of the authentication result.
     */
    TokenType?: StringType;
    /**
     * The refresh token of the authentication result.
     */
    RefreshToken?: TokenModelType;
    /**
     * The ID token of the authentication result.
     */
    IdToken?: TokenModelType;
    /**
     * The new device metadata from an authentication result.
     */
    NewDeviceMetadata?: NewDeviceMetadataType;
  }
  export type BooleanType = boolean;
  export type ChallengeNameType = "SMS_MFA"|"PASSWORD_VERIFIER"|"CUSTOM_CHALLENGE"|"DEVICE_SRP_AUTH"|"DEVICE_PASSWORD_VERIFIER"|"ADMIN_NO_SRP_AUTH"|"NEW_PASSWORD_REQUIRED"|string;
  export type ChallengeParametersType = {[key: string]: StringType};
  export type ChallengeResponsesType = {[key: string]: StringType};
  export interface ChangePasswordRequest {
    /**
     * The old password in the change password request.
     */
    PreviousPassword: PasswordType;
    /**
     * The new password in the change password request.
     */
    ProposedPassword: PasswordType;
    /**
     * The access token in the change password request.
     */
    AccessToken?: TokenModelType;
  }
  export interface ChangePasswordResponse {
  }
  export type ClientIdType = string;
  export type ClientMetadataType = {[key: string]: StringType};
  export type ClientNameType = string;
  export type ClientPermissionListType = ClientPermissionType[];
  export type ClientPermissionType = string;
  export type ClientSecretType = string;
  export type CodeDeliveryDetailsListType = CodeDeliveryDetailsType[];
  export interface CodeDeliveryDetailsType {
    /**
     * The destination for the code delivery details.
     */
    Destination?: StringType;
    /**
     * The delivery medium (email message or phone number).
     */
    DeliveryMedium?: DeliveryMediumType;
    /**
     * The name of the attribute in the code delivery details type.
     */
    AttributeName?: AttributeNameType;
  }
  export type CompletionMessageType = string;
  export interface ConfirmDeviceRequest {
    /**
     * The access token.
     */
    AccessToken: TokenModelType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The configuration of the device secret verifier.
     */
    DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
    /**
     * The device name.
     */
    DeviceName?: DeviceNameType;
  }
  export interface ConfirmDeviceResponse {
    /**
     * Indicates whether the user confirmation is necessary to confirm the device response.
     */
    UserConfirmationNecessary?: BooleanType;
  }
  export interface ConfirmForgotPasswordRequest {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user for whom you want to enter a code to retrieve a forgotten password.
     */
    Username: UsernameType;
    /**
     * The confirmation code sent by a user's request to retrieve a forgotten password.
     */
    ConfirmationCode: ConfirmationCodeType;
    /**
     * The password sent by sent by a user's request to retrieve a forgotten password.
     */
    Password: PasswordType;
  }
  export interface ConfirmForgotPasswordResponse {
  }
  export interface ConfirmSignUpRequest {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user whose registration you wish to confirm.
     */
    Username: UsernameType;
    /**
     * The confirmation code sent by a user's request to confirm registration.
     */
    ConfirmationCode: ConfirmationCodeType;
    /**
     * Boolean to be specified to force user confirmation irrespective of existing alias. By default set to False. If this parameter is set to True and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user being confirmed. If set to False, the API will throw an AliasExistsException error.
     */
    ForceAliasCreation?: ForceAliasCreation;
  }
  export interface ConfirmSignUpResponse {
  }
  export type ConfirmationCodeType = string;
  export interface CreateGroupRequest {
    /**
     * The name of the group. Must be unique.
     */
    GroupName: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * A string containing the description of the group.
     */
    Description?: DescriptionType;
    /**
     * The role ARN for the group.
     */
    RoleArn?: ArnType;
    /**
     * A nonnegative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower Precedence values take precedence over groups with higher or null Precedence values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN will be used in the cognito:roles and cognito:preferred_role claims in the user's tokens. Two groups can have the same Precedence value. If this happens, neither group takes precedence over the other. If two groups with the same Precedence have the same role ARN, that role is used in the cognito:preferred_role claim in tokens for users in each group. If the two groups have different role ARNs, the cognito:preferred_role claim is not set in users' tokens. The default Precedence value is null.
     */
    Precedence?: PrecedenceType;
  }
  export interface CreateGroupResponse {
    /**
     * The group object for the group.
     */
    Group?: GroupType;
  }
  export interface CreateUserImportJobRequest {
    /**
     * The job name for the user import job.
     */
    JobName: UserImportJobNameType;
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The role ARN for the Amazon CloudWatch Logging role for the user import job.
     */
    CloudWatchLogsRoleArn: ArnType;
  }
  export interface CreateUserImportJobResponse {
    /**
     * The job object that represents the user import job.
     */
    UserImportJob?: UserImportJobType;
  }
  export interface CreateUserPoolClientRequest {
    /**
     * The user pool ID for the user pool where you want to create a user pool client.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The client name for the user pool client you would like to create.
     */
    ClientName: ClientNameType;
    /**
     * Boolean to specify whether you want to generate a secret for the user pool client being created.
     */
    GenerateSecret?: GenerateSecret;
    /**
     * The validity of the refresh token, in days.
     */
    RefreshTokenValidity?: RefreshTokenValidityType;
    /**
     * The read attributes.
     */
    ReadAttributes?: ClientPermissionListType;
    /**
     * The write attributes.
     */
    WriteAttributes?: ClientPermissionListType;
    /**
     * The explicit authentication flows.
     */
    ExplicitAuthFlows?: ExplicitAuthFlowsListType;
  }
  export interface CreateUserPoolClientResponse {
    /**
     * The user pool client that was just created.
     */
    UserPoolClient?: UserPoolClientType;
  }
  export interface CreateUserPoolRequest {
    /**
     * A string used to name the user pool.
     */
    PoolName: UserPoolNameType;
    /**
     * The policies associated with the new user pool.
     */
    Policies?: UserPoolPolicyType;
    /**
     * The Lambda trigger configuration information for the new user pool.
     */
    LambdaConfig?: LambdaConfigType;
    /**
     * The attributes to be auto-verified. Possible values: email, phone_number.
     */
    AutoVerifiedAttributes?: VerifiedAttributesListType;
    /**
     * Attributes supported as an alias for this user pool. Possible values: phone_number, email, or preferred_username.
     */
    AliasAttributes?: AliasAttributesListType;
    /**
     * A string representing the SMS verification message.
     */
    SmsVerificationMessage?: SmsVerificationMessageType;
    /**
     * A string representing the email verification message.
     */
    EmailVerificationMessage?: EmailVerificationMessageType;
    /**
     * A string representing the email verification subject.
     */
    EmailVerificationSubject?: EmailVerificationSubjectType;
    /**
     * A string representing the SMS authentication message.
     */
    SmsAuthenticationMessage?: SmsVerificationMessageType;
    /**
     * Specifies MFA configuration details.
     */
    MfaConfiguration?: UserPoolMfaType;
    /**
     * The device configuration.
     */
    DeviceConfiguration?: DeviceConfigurationType;
    /**
     * The email configuration.
     */
    EmailConfiguration?: EmailConfigurationType;
    /**
     * The SMS configuration.
     */
    SmsConfiguration?: SmsConfigurationType;
    /**
     * The cost allocation tags for the user pool. For more information, see Adding Cost Allocation Tags to Your User Pool 
     */
    UserPoolTags?: UserPoolTagsType;
    /**
     * The configuration for AdminCreateUser requests.
     */
    AdminCreateUserConfig?: AdminCreateUserConfigType;
    /**
     * An array of schema attributes for the new user pool. These attributes can be standard or custom attributes.
     */
    Schema?: SchemaAttributesListType;
  }
  export interface CreateUserPoolResponse {
    /**
     * A container for the user pool details.
     */
    UserPool?: UserPoolType;
  }
  export type CustomAttributeNameType = string;
  export type CustomAttributesListType = SchemaAttributeType[];
  export type DateType = Date;
  export interface DeleteGroupRequest {
    /**
     * The name of the group.
     */
    GroupName: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface DeleteUserAttributesRequest {
    /**
     * An array of strings representing the user attribute names you wish to delete.
     */
    UserAttributeNames: AttributeNameListType;
    /**
     * The access token used in the request to delete user attributes.
     */
    AccessToken?: TokenModelType;
  }
  export interface DeleteUserAttributesResponse {
  }
  export interface DeleteUserPoolClientRequest {
    /**
     * The user pool ID for the user pool where you want to delete the client.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
  }
  export interface DeleteUserPoolRequest {
    /**
     * The user pool ID for the user pool you want to delete.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface DeleteUserRequest {
    /**
     * The access token from a request to delete a user.
     */
    AccessToken?: TokenModelType;
  }
  export type DeliveryMediumListType = DeliveryMediumType[];
  export type DeliveryMediumType = "SMS"|"EMAIL"|string;
  export interface DescribeUserImportJobRequest {
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The job ID for the user import job.
     */
    JobId: UserImportJobIdType;
  }
  export interface DescribeUserImportJobResponse {
    /**
     * The job object that represents the user import job.
     */
    UserImportJob?: UserImportJobType;
  }
  export interface DescribeUserPoolClientRequest {
    /**
     * The user pool ID for the user pool you want to describe.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
  }
  export interface DescribeUserPoolClientResponse {
    /**
     * The user pool client from a server response to describe the user pool client.
     */
    UserPoolClient?: UserPoolClientType;
  }
  export interface DescribeUserPoolRequest {
    /**
     * The user pool ID for the user pool you want to describe.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface DescribeUserPoolResponse {
    /**
     * The container of metadata returned by the server to describe the pool.
     */
    UserPool?: UserPoolType;
  }
  export type DescriptionType = string;
  export interface DeviceConfigurationType {
    /**
     * Indicates whether a challenge is required on a new device. Only applicable to a new device.
     */
    ChallengeRequiredOnNewDevice?: BooleanType;
    /**
     * If true, a device is only remembered on user prompt.
     */
    DeviceOnlyRememberedOnUserPrompt?: BooleanType;
  }
  export type DeviceKeyType = string;
  export type DeviceListType = DeviceType[];
  export type DeviceNameType = string;
  export type DeviceRememberedStatusType = "remembered"|"not_remembered"|string;
  export interface DeviceSecretVerifierConfigType {
    /**
     * The password verifier.
     */
    PasswordVerifier?: StringType;
    /**
     * The salt.
     */
    Salt?: StringType;
  }
  export interface DeviceType {
    /**
     * The device key.
     */
    DeviceKey?: DeviceKeyType;
    /**
     * The device attributes.
     */
    DeviceAttributes?: AttributeListType;
    /**
     * The creation date of the device.
     */
    DeviceCreateDate?: DateType;
    /**
     * The last modified date of the device.
     */
    DeviceLastModifiedDate?: DateType;
    /**
     * The date in which the device was last authenticated.
     */
    DeviceLastAuthenticatedDate?: DateType;
  }
  export type EmailAddressType = string;
  export interface EmailConfigurationType {
    /**
     * The Amazon Resource Name (ARN) of the email source.
     */
    SourceArn?: ArnType;
    /**
     * The REPLY-TO email address.
     */
    ReplyToEmailAddress?: EmailAddressType;
  }
  export type EmailVerificationMessageType = string;
  export type EmailVerificationSubjectType = string;
  export type ExplicitAuthFlowsListType = ExplicitAuthFlowsType[];
  export type ExplicitAuthFlowsType = "ADMIN_NO_SRP_AUTH"|"CUSTOM_AUTH_FLOW_ONLY"|string;
  export type ForceAliasCreation = boolean;
  export interface ForgetDeviceRequest {
    /**
     * The access token for the forgotten device request.
     */
    AccessToken?: TokenModelType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
  }
  export interface ForgotPasswordRequest {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user for whom you want to enter a code to reset a forgotten password.
     */
    Username: UsernameType;
  }
  export interface ForgotPasswordResponse {
    /**
     * The code delivery details returned by the server in response to the request to reset a password.
     */
    CodeDeliveryDetails?: CodeDeliveryDetailsType;
  }
  export type GenerateSecret = boolean;
  export interface GetCSVHeaderRequest {
    /**
     * The user pool ID for the user pool that the users are to be imported into.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface GetCSVHeaderResponse {
    /**
     * The user pool ID for the user pool that the users are to be imported into.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The header information for the .csv file for the user import job.
     */
    CSVHeader?: ListOfStringTypes;
  }
  export interface GetDeviceRequest {
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The access token.
     */
    AccessToken?: TokenModelType;
  }
  export interface GetDeviceResponse {
    /**
     * The device.
     */
    Device: DeviceType;
  }
  export interface GetGroupRequest {
    /**
     * The name of the group.
     */
    GroupName: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
  }
  export interface GetGroupResponse {
    /**
     * The group object for the group.
     */
    Group?: GroupType;
  }
  export interface GetUserAttributeVerificationCodeRequest {
    /**
     * The access token returned by the server response to get the user attribute verification code.
     */
    AccessToken?: TokenModelType;
    /**
     * The attribute name returned by the server response to get the user attribute verification code.
     */
    AttributeName: AttributeNameType;
  }
  export interface GetUserAttributeVerificationCodeResponse {
    /**
     * The code delivery details returned by the server in response to the request to get the user attribute verification code.
     */
    CodeDeliveryDetails?: CodeDeliveryDetailsType;
  }
  export interface GetUserRequest {
    /**
     * The access token returned by the server response to get information about the user.
     */
    AccessToken?: TokenModelType;
  }
  export interface GetUserResponse {
    /**
     * The user name of the user you wish to retrieve from the get user request.
     */
    Username: UsernameType;
    /**
     * An array of name-value pairs representing user attributes.
     */
    UserAttributes: AttributeListType;
    /**
     * Specifies the options for MFA (e.g., email or phone number).
     */
    MFAOptions?: MFAOptionListType;
  }
  export interface GlobalSignOutRequest {
    /**
     * The access token.
     */
    AccessToken?: TokenModelType;
  }
  export interface GlobalSignOutResponse {
  }
  export type GroupListType = GroupType[];
  export type GroupNameType = string;
  export interface GroupType {
    /**
     * The name of the group.
     */
    GroupName?: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * A string containing the description of the group.
     */
    Description?: DescriptionType;
    /**
     * The role ARN for the group.
     */
    RoleArn?: ArnType;
    /**
     * A nonnegative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. If a user belongs to two or more groups, it is the group with the highest precedence whose role ARN will be used in the cognito:roles and cognito:preferred_role claims in the user's tokens. Groups with higher Precedence values take precedence over groups with lower Precedence values or with null Precedence values. Two groups can have the same Precedence value. If this happens, neither group takes precedence over the other. If two groups with the same Precedence have the same role ARN, that role is used in the cognito:preferred_role claim in tokens for users in each group. If the two groups have different role ARNs, the cognito:preferred_role claim is not set in users' tokens. The default Precedence value is null.
     */
    Precedence?: PrecedenceType;
    /**
     * The date the group was last modified.
     */
    LastModifiedDate?: DateType;
    /**
     * The date the group was created.
     */
    CreationDate?: DateType;
  }
  export interface InitiateAuthRequest {
    /**
     * The authentication flow.
     */
    AuthFlow: AuthFlowType;
    /**
     * The authentication parameters.
     */
    AuthParameters?: AuthParametersType;
    /**
     * The client app's metadata.
     */
    ClientMetadata?: ClientMetadataType;
    /**
     * The client ID.
     */
    ClientId: ClientIdType;
  }
  export interface InitiateAuthResponse {
    /**
     * The name of the challenge.
     */
    ChallengeName?: ChallengeNameType;
    /**
     * The session.
     */
    Session?: SessionType;
    /**
     * The challenge parameters.
     */
    ChallengeParameters?: ChallengeParametersType;
    /**
     * The result returned by the server in response to the request to initiate authentication.
     */
    AuthenticationResult?: AuthenticationResultType;
  }
  export type IntegerType = number;
  export interface LambdaConfigType {
    /**
     * A pre-registration AWS Lambda trigger.
     */
    PreSignUp?: ArnType;
    /**
     * A custom Message AWS Lambda trigger.
     */
    CustomMessage?: ArnType;
    /**
     * A post-confirmation AWS Lambda trigger.
     */
    PostConfirmation?: ArnType;
    /**
     * A pre-authentication AWS Lambda trigger.
     */
    PreAuthentication?: ArnType;
    /**
     * A post-authentication AWS Lambda trigger.
     */
    PostAuthentication?: ArnType;
    /**
     * Defines the authentication challenge.
     */
    DefineAuthChallenge?: ArnType;
    /**
     * Creates an authentication challenge.
     */
    CreateAuthChallenge?: ArnType;
    /**
     * Verifies the authentication challenge response.
     */
    VerifyAuthChallengeResponse?: ArnType;
  }
  export interface ListDevicesRequest {
    /**
     * The access tokens for the request to list devices.
     */
    AccessToken: TokenModelType;
    /**
     * The limit of the device request.
     */
    Limit?: QueryLimitType;
    /**
     * The pagination token for the list request.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export interface ListDevicesResponse {
    /**
     * The devices returned in the list devices response.
     */
    Devices?: DeviceListType;
    /**
     * The pagination token for the list device response.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export interface ListGroupsRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The limit of the request to list groups.
     */
    Limit?: QueryLimitType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListGroupsResponse {
    /**
     * The group objects for the groups.
     */
    Groups?: GroupListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export type ListOfStringTypes = StringType[];
  export interface ListUserImportJobsRequest {
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The maximum number of import jobs you want the request to return.
     */
    MaxResults: PoolQueryLimitType;
    /**
     * An identifier that was returned from the previous call to ListUserImportJobs, which can be used to return the next set of import jobs in the list.
     */
    PaginationToken?: PaginationKeyType;
  }
  export interface ListUserImportJobsResponse {
    /**
     * The user import jobs.
     */
    UserImportJobs?: UserImportJobsListType;
    /**
     * An identifier that can be used to return the next set of user import jobs in the list.
     */
    PaginationToken?: PaginationKeyType;
  }
  export interface ListUserPoolClientsRequest {
    /**
     * The user pool ID for the user pool where you want to list user pool clients.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The maximum number of results you want the request to return when listing the user pool clients.
     */
    MaxResults?: QueryLimit;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListUserPoolClientsResponse {
    /**
     * The user pool clients in the response that lists user pool clients.
     */
    UserPoolClients?: UserPoolClientListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListUserPoolsRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKeyType;
    /**
     * The maximum number of results you want the request to return when listing the user pools.
     */
    MaxResults: PoolQueryLimitType;
  }
  export interface ListUserPoolsResponse {
    /**
     * The user pools from the response to list users.
     */
    UserPools?: UserPoolListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKeyType;
  }
  export interface ListUsersInGroupRequest {
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The name of the group.
     */
    GroupName: GroupNameType;
    /**
     * The limit of the request to list users.
     */
    Limit?: QueryLimitType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListUsersInGroupResponse {
    /**
     * The users returned in the request to list users.
     */
    Users?: UsersListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    NextToken?: PaginationKey;
  }
  export interface ListUsersRequest {
    /**
     * The user pool ID for which you want to list users.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The attributes to get from the request to list users.
     */
    AttributesToGet?: SearchedAttributeNamesListType;
    /**
     * The limit of the request to list users.
     */
    Limit?: QueryLimitType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    PaginationToken?: SearchPaginationTokenType;
    /**
     * The filter for the list users request.
     */
    Filter?: UserFilterType;
  }
  export interface ListUsersResponse {
    /**
     * The users returned in the request to list users.
     */
    Users?: UsersListType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    PaginationToken?: SearchPaginationTokenType;
  }
  export type LongType = number;
  export type MFAOptionListType = MFAOptionType[];
  export interface MFAOptionType {
    /**
     * The delivery medium (email message or SMS message) to send the MFA code.
     */
    DeliveryMedium?: DeliveryMediumType;
    /**
     * The attribute name of the MFA option type.
     */
    AttributeName?: AttributeNameType;
  }
  export type MessageActionType = "RESEND"|"SUPPRESS"|string;
  export interface MessageTemplateType {
    /**
     * The message template for SMS messages.
     */
    SMSMessage?: SmsVerificationMessageType;
    /**
     * The message template for email messages.
     */
    EmailMessage?: EmailVerificationMessageType;
    /**
     * The subject line for email messages.
     */
    EmailSubject?: EmailVerificationSubjectType;
  }
  export type MessageType = string;
  export interface NewDeviceMetadataType {
    /**
     * The device key.
     */
    DeviceKey?: DeviceKeyType;
    /**
     * The device group key.
     */
    DeviceGroupKey?: StringType;
  }
  export interface NumberAttributeConstraintsType {
    /**
     * The minimum value of an attribute that is of the number data type.
     */
    MinValue?: StringType;
    /**
     * The maximum value of an attribute that is of the number data type.
     */
    MaxValue?: StringType;
  }
  export type PaginationKey = string;
  export type PaginationKeyType = string;
  export type PasswordPolicyMinLengthType = number;
  export interface PasswordPolicyType {
    /**
     * The minimum length of the password policy that you have set. Cannot be less than 6.
     */
    MinimumLength?: PasswordPolicyMinLengthType;
    /**
     * In the password policy that you have set, refers to whether you have required users to use at least one uppercase letter in their password.
     */
    RequireUppercase?: BooleanType;
    /**
     * In the password policy that you have set, refers to whether you have required users to use at least one lowercase letter in their password.
     */
    RequireLowercase?: BooleanType;
    /**
     * In the password policy that you have set, refers to whether you have required users to use at least one number in their password.
     */
    RequireNumbers?: BooleanType;
    /**
     * In the password policy that you have set, refers to whether you have required users to use at least one symbol in their password.
     */
    RequireSymbols?: BooleanType;
  }
  export type PasswordType = string;
  export type PoolQueryLimitType = number;
  export type PreSignedUrlType = string;
  export type PrecedenceType = number;
  export type QueryLimit = number;
  export type QueryLimitType = number;
  export type RefreshTokenValidityType = number;
  export interface ResendConfirmationCodeRequest {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user to whom you wish to resend a confirmation code.
     */
    Username: UsernameType;
  }
  export interface ResendConfirmationCodeResponse {
    /**
     * The code delivery details returned by the server in response to the request to resend the confirmation code.
     */
    CodeDeliveryDetails?: CodeDeliveryDetailsType;
  }
  export interface RespondToAuthChallengeRequest {
    /**
     * The client ID.
     */
    ClientId: ClientIdType;
    /**
     * The name of the challenge.
     */
    ChallengeName: ChallengeNameType;
    /**
     * The session.
     */
    Session?: SessionType;
    /**
     * The responses to the authentication challenge.
     */
    ChallengeResponses?: ChallengeResponsesType;
  }
  export interface RespondToAuthChallengeResponse {
    /**
     * The challenge name.
     */
    ChallengeName?: ChallengeNameType;
    /**
     * The session.
     */
    Session?: SessionType;
    /**
     * The challenge parameters.
     */
    ChallengeParameters?: ChallengeParametersType;
    /**
     * The result returned by the server in response to the request to respond to the authentication challenge.
     */
    AuthenticationResult?: AuthenticationResultType;
  }
  export interface SchemaAttributeType {
    /**
     * A schema attribute of the name type.
     */
    Name?: CustomAttributeNameType;
    /**
     * The attribute data type.
     */
    AttributeDataType?: AttributeDataType;
    /**
     * Specifies whether the attribute type is developer only.
     */
    DeveloperOnlyAttribute?: BooleanType;
    /**
     * Specifies whether the attribute can be changed once it has been created.
     */
    Mutable?: BooleanType;
    /**
     * Specifies whether a user pool attribute is required. If the attribute is required and the user does not provide a value, registration or sign-in will fail.
     */
    Required?: BooleanType;
    /**
     * Specifies the constraints for an attribute of the number type.
     */
    NumberAttributeConstraints?: NumberAttributeConstraintsType;
    /**
     * Specifies the constraints for an attribute of the string type.
     */
    StringAttributeConstraints?: StringAttributeConstraintsType;
  }
  export type SchemaAttributesListType = SchemaAttributeType[];
  export type SearchPaginationTokenType = string;
  export type SearchedAttributeNamesListType = AttributeNameType[];
  export type SecretHashType = string;
  export type SessionType = string;
  export interface SetUserSettingsRequest {
    /**
     * The access token for the set user settings request.
     */
    AccessToken: TokenModelType;
    /**
     * Specifies the options for MFA (e.g., email or phone number).
     */
    MFAOptions: MFAOptionListType;
  }
  export interface SetUserSettingsResponse {
  }
  export interface SignUpRequest {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.
     */
    SecretHash?: SecretHashType;
    /**
     * The user name of the user you wish to register.
     */
    Username: UsernameType;
    /**
     * The password of the user you wish to register.
     */
    Password: PasswordType;
    /**
     * An array of name-value pairs representing user attributes.
     */
    UserAttributes?: AttributeListType;
    /**
     * The validation data in the request to register a user.
     */
    ValidationData?: AttributeListType;
  }
  export interface SignUpResponse {
    /**
     * A response from the server indicating that a user registration has been confirmed.
     */
    UserConfirmed?: BooleanType;
    /**
     * The code delivery details returned by the server response to the user registration request.
     */
    CodeDeliveryDetails?: CodeDeliveryDetailsType;
  }
  export interface SmsConfigurationType {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) caller.
     */
    SnsCallerArn: ArnType;
    /**
     * The external ID.
     */
    ExternalId?: StringType;
  }
  export type SmsVerificationMessageType = string;
  export interface StartUserImportJobRequest {
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The job ID for the user import job.
     */
    JobId: UserImportJobIdType;
  }
  export interface StartUserImportJobResponse {
    /**
     * The job object that represents the user import job.
     */
    UserImportJob?: UserImportJobType;
  }
  export type StatusType = "Enabled"|"Disabled"|string;
  export interface StopUserImportJobRequest {
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The job ID for the user import job.
     */
    JobId: UserImportJobIdType;
  }
  export interface StopUserImportJobResponse {
    /**
     * The job object that represents the user import job.
     */
    UserImportJob?: UserImportJobType;
  }
  export interface StringAttributeConstraintsType {
    /**
     * The minimum length of an attribute value of the string type.
     */
    MinLength?: StringType;
    /**
     * The maximum length of an attribute value of the string type.
     */
    MaxLength?: StringType;
  }
  export type StringType = string;
  export type TokenModelType = string;
  export interface UpdateDeviceStatusRequest {
    /**
     * The access token.
     */
    AccessToken: TokenModelType;
    /**
     * The device key.
     */
    DeviceKey: DeviceKeyType;
    /**
     * The status of whether a device is remembered.
     */
    DeviceRememberedStatus?: DeviceRememberedStatusType;
  }
  export interface UpdateDeviceStatusResponse {
  }
  export interface UpdateGroupRequest {
    /**
     * The name of the group.
     */
    GroupName: GroupNameType;
    /**
     * The user pool ID for the user pool.
     */
    UserPoolId: UserPoolIdType;
    /**
     * A string containing the new description of the group.
     */
    Description?: DescriptionType;
    /**
     * The new role ARN for the group. This is used for setting the cognito:roles and cognito:preferred_role claims in the token.
     */
    RoleArn?: ArnType;
    /**
     * The new precedence value for the group. For more information about this parameter, see CreateGroupRequest.
     */
    Precedence?: PrecedenceType;
  }
  export interface UpdateGroupResponse {
    /**
     * The group object for the group.
     */
    Group?: GroupType;
  }
  export interface UpdateUserAttributesRequest {
    /**
     * An array of name-value pairs representing user attributes.
     */
    UserAttributes: AttributeListType;
    /**
     * The access token for the request to update user attributes.
     */
    AccessToken?: TokenModelType;
  }
  export interface UpdateUserAttributesResponse {
    /**
     * The code delivery details list from the server for the request to update user attributes.
     */
    CodeDeliveryDetailsList?: CodeDeliveryDetailsListType;
  }
  export interface UpdateUserPoolClientRequest {
    /**
     * The user pool ID for the user pool where you want to update the user pool client.
     */
    UserPoolId: UserPoolIdType;
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId: ClientIdType;
    /**
     * The client name from the update user pool client request.
     */
    ClientName?: ClientNameType;
    /**
     * The validity of the refresh token, in days.
     */
    RefreshTokenValidity?: RefreshTokenValidityType;
    /**
     * The read-only attributes of the user pool.
     */
    ReadAttributes?: ClientPermissionListType;
    /**
     * The writeable attributes of the user pool.
     */
    WriteAttributes?: ClientPermissionListType;
    /**
     * Explicit authentication flows.
     */
    ExplicitAuthFlows?: ExplicitAuthFlowsListType;
  }
  export interface UpdateUserPoolClientResponse {
    /**
     * The user pool client value from the response from the server when an update user pool client request is made.
     */
    UserPoolClient?: UserPoolClientType;
  }
  export interface UpdateUserPoolRequest {
    /**
     * The user pool ID for the user pool you want to update.
     */
    UserPoolId: UserPoolIdType;
    /**
     * A container with the policies you wish to update in a user pool.
     */
    Policies?: UserPoolPolicyType;
    /**
     * The AWS Lambda configuration information from the request to update the user pool.
     */
    LambdaConfig?: LambdaConfigType;
    /**
     * The attributes that are automatically verified when the Amazon Cognito service makes a request to update user pools.
     */
    AutoVerifiedAttributes?: VerifiedAttributesListType;
    /**
     * A container with information about the SMS verification message.
     */
    SmsVerificationMessage?: SmsVerificationMessageType;
    /**
     * The contents of the email verification message.
     */
    EmailVerificationMessage?: EmailVerificationMessageType;
    /**
     * The subject of the email verfication message.
     */
    EmailVerificationSubject?: EmailVerificationSubjectType;
    /**
     * The contents of the SMS authentication message.
     */
    SmsAuthenticationMessage?: SmsVerificationMessageType;
    /**
     * Can be one of the following values:    OFF - MFA tokens are not required and cannot be specified during user registration.    ON - MFA tokens are required for all user registrations. You can only specify required when you are initially creating a user pool.    OPTIONAL - Users have the option when registering to create an MFA token.  
     */
    MfaConfiguration?: UserPoolMfaType;
    /**
     * Device configuration.
     */
    DeviceConfiguration?: DeviceConfigurationType;
    /**
     * Email configuration.
     */
    EmailConfiguration?: EmailConfigurationType;
    /**
     * SMS configuration.
     */
    SmsConfiguration?: SmsConfigurationType;
    /**
     * The cost allocation tags for the user pool. For more information, see Adding Cost Allocation Tags to Your User Pool 
     */
    UserPoolTags?: UserPoolTagsType;
    /**
     * The configuration for AdminCreateUser requests.
     */
    AdminCreateUserConfig?: AdminCreateUserConfigType;
  }
  export interface UpdateUserPoolResponse {
  }
  export type UserFilterType = string;
  export type UserImportJobIdType = string;
  export type UserImportJobNameType = string;
  export type UserImportJobStatusType = "Created"|"Pending"|"InProgress"|"Stopping"|"Expired"|"Stopped"|"Failed"|"Succeeded"|string;
  export interface UserImportJobType {
    /**
     * The job name for the user import job.
     */
    JobName?: UserImportJobNameType;
    /**
     * The job ID for the user import job.
     */
    JobId?: UserImportJobIdType;
    /**
     * The user pool ID for the user pool that the users are being imported into.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The pre-signed URL to be used to upload the .csv file.
     */
    PreSignedUrl?: PreSignedUrlType;
    /**
     * The date when the user import job was created.
     */
    CreationDate?: DateType;
    /**
     * The date when the user import job was started.
     */
    StartDate?: DateType;
    /**
     * The date when the user imoprt job was completed.
     */
    CompletionDate?: DateType;
    /**
     * The status of the user import job. One of the following:   Created - The job was created but not started.   Pending - A transition state. You have started the job, but it has not begun importing users yet.   InProgress - The job has started, and users are being imported.   Stopping - You have stopped the job, but the job has not stopped importing users yet.   Stopped - You have stopped the job, and the job has stopped importing users.   Succeeded - The job has completed successfully.   Failed - The job has stopped due to an error.   Expired - You created a job, but did not start the job within 24-48 hours. All data associated with the job was deleted, and the job cannot be started.  
     */
    Status?: UserImportJobStatusType;
    /**
     * The role ARN for the Amazon CloudWatch Logging role for the user import job. For more information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer Guide.
     */
    CloudWatchLogsRoleArn?: ArnType;
    /**
     * The number of users that were successfully imported.
     */
    ImportedUsers?: LongType;
    /**
     * The number of users that were skipped.
     */
    SkippedUsers?: LongType;
    /**
     * The number of users that could not be imported.
     */
    FailedUsers?: LongType;
    /**
     * The message returned when the user import job is completed.
     */
    CompletionMessage?: CompletionMessageType;
  }
  export type UserImportJobsListType = UserImportJobType[];
  export interface UserPoolClientDescription {
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId?: ClientIdType;
    /**
     * The user pool ID for the user pool where you want to describe the user pool client.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The client name from the user pool client description.
     */
    ClientName?: ClientNameType;
  }
  export type UserPoolClientListType = UserPoolClientDescription[];
  export interface UserPoolClientType {
    /**
     * The user pool ID for the user pool client.
     */
    UserPoolId?: UserPoolIdType;
    /**
     * The client name from the user pool request of the client type.
     */
    ClientName?: ClientNameType;
    /**
     * The ID of the client associated with the user pool.
     */
    ClientId?: ClientIdType;
    /**
     * The client secret from the user pool request of the client type.
     */
    ClientSecret?: ClientSecretType;
    /**
     * The last modified date from the user pool request of the client type.
     */
    LastModifiedDate?: DateType;
    /**
     * The creation date from the user pool request of the client type.
     */
    CreationDate?: DateType;
    /**
     * The validity of the refresh token, in days.
     */
    RefreshTokenValidity?: RefreshTokenValidityType;
    /**
     * The Read-only attributes.
     */
    ReadAttributes?: ClientPermissionListType;
    /**
     * The writeable attributes.
     */
    WriteAttributes?: ClientPermissionListType;
    /**
     * The explicit authentication flows.
     */
    ExplicitAuthFlows?: ExplicitAuthFlowsListType;
  }
  export interface UserPoolDescriptionType {
    /**
     * The ID in a user pool description.
     */
    Id?: UserPoolIdType;
    /**
     * The name in a user pool description.
     */
    Name?: UserPoolNameType;
    /**
     * The AWS Lambda configuration information in a user pool description.
     */
    LambdaConfig?: LambdaConfigType;
    /**
     * The user pool status in a user pool description.
     */
    Status?: StatusType;
    /**
     * The last modified date in a user pool description.
     */
    LastModifiedDate?: DateType;
    /**
     * The creation date in a user pool description.
     */
    CreationDate?: DateType;
  }
  export type UserPoolIdType = string;
  export type UserPoolListType = UserPoolDescriptionType[];
  export type UserPoolMfaType = "OFF"|"ON"|"OPTIONAL"|string;
  export type UserPoolNameType = string;
  export interface UserPoolPolicyType {
    /**
     * A container with information about the user pool password policy.
     */
    PasswordPolicy?: PasswordPolicyType;
  }
  export type UserPoolTagsType = {[key: string]: StringType};
  export interface UserPoolType {
    /**
     * The ID of the user pool.
     */
    Id?: UserPoolIdType;
    /**
     * The name of the user pool.
     */
    Name?: UserPoolNameType;
    /**
     * A container describing the policies associated with a user pool.
     */
    Policies?: UserPoolPolicyType;
    /**
     * A container describing the AWS Lambda triggers associated with a user pool.
     */
    LambdaConfig?: LambdaConfigType;
    /**
     * The status of a user pool.
     */
    Status?: StatusType;
    /**
     * The last modified date of a user pool.
     */
    LastModifiedDate?: DateType;
    /**
     * The creation date of a user pool.
     */
    CreationDate?: DateType;
    /**
     * A container with the schema attributes of a user pool.
     */
    SchemaAttributes?: SchemaAttributesListType;
    /**
     * Specifies the attributes that are auto-verified in a user pool.
     */
    AutoVerifiedAttributes?: VerifiedAttributesListType;
    /**
     * Specifies the attributes that are aliased in a user pool.
     */
    AliasAttributes?: AliasAttributesListType;
    /**
     * The contents of the SMS verification message.
     */
    SmsVerificationMessage?: SmsVerificationMessageType;
    /**
     * The contents of the email verification message.
     */
    EmailVerificationMessage?: EmailVerificationMessageType;
    /**
     * The subject of the email verification message.
     */
    EmailVerificationSubject?: EmailVerificationSubjectType;
    /**
     * The contents of the SMS authentication message.
     */
    SmsAuthenticationMessage?: SmsVerificationMessageType;
    /**
     * Can be one of the following values:    OFF - MFA tokens are not required and cannot be specified during user registration.    ON - MFA tokens are required for all user registrations. You can only specify required when you are initially creating a user pool.    OPTIONAL - Users have the option when registering to create an MFA token.  
     */
    MfaConfiguration?: UserPoolMfaType;
    /**
     * The device configuration.
     */
    DeviceConfiguration?: DeviceConfigurationType;
    /**
     * A number estimating the size of the user pool.
     */
    EstimatedNumberOfUsers?: IntegerType;
    /**
     * The email configuration.
     */
    EmailConfiguration?: EmailConfigurationType;
    /**
     * The SMS configuration.
     */
    SmsConfiguration?: SmsConfigurationType;
    /**
     * The cost allocation tags for the user pool. For more information, see Adding Cost Allocation Tags to Your User Pool 
     */
    UserPoolTags?: UserPoolTagsType;
    /**
     * The reason why the SMS configuration cannot send the message(s) to your users.
     */
    SmsConfigurationFailure?: StringType;
    /**
     * The reason why the email configuration cannot send the messages to your users.
     */
    EmailConfigurationFailure?: StringType;
    /**
     * The configuration for AdminCreateUser requests.
     */
    AdminCreateUserConfig?: AdminCreateUserConfigType;
  }
  export type UserStatusType = "UNCONFIRMED"|"CONFIRMED"|"ARCHIVED"|"COMPROMISED"|"UNKNOWN"|"RESET_REQUIRED"|"FORCE_CHANGE_PASSWORD"|string;
  export interface UserType {
    /**
     * The user name of the user you wish to describe.
     */
    Username?: UsernameType;
    /**
     * A container with information about the user type attributes.
     */
    Attributes?: AttributeListType;
    /**
     * The creation date of the user.
     */
    UserCreateDate?: DateType;
    /**
     * The last modified date of the user.
     */
    UserLastModifiedDate?: DateType;
    /**
     * Specifies whether the user is enabled.
     */
    Enabled?: BooleanType;
    /**
     * The user status. Can be one of the following:   UNCONFIRMED - User has been created but not confirmed.   CONFIRMED - User has been confirmed.   ARCHIVED - User is no longer active.   COMPROMISED - User is disabled due to a potential security threat.   UNKNOWN - User status is not known.  
     */
    UserStatus?: UserStatusType;
    /**
     * The MFA options for the user.
     */
    MFAOptions?: MFAOptionListType;
  }
  export type UsernameType = string;
  export type UsersListType = UserType[];
  export type VerifiedAttributeType = "phone_number"|"email"|string;
  export type VerifiedAttributesListType = VerifiedAttributeType[];
  export interface VerifyUserAttributeRequest {
    /**
     * Represents the access token of the request to verify user attributes.
     */
    AccessToken?: TokenModelType;
    /**
     * The attribute name in the request to verify user attributes.
     */
    AttributeName: AttributeNameType;
    /**
     * The verification code in the request to verify user attributes.
     */
    Code: ConfirmationCodeType;
  }
  export interface VerifyUserAttributeResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-04-18"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CognitoIdentityServiceProvider client.
   */
  export import Types = CognitoIdentityServiceProvider;
}
export = CognitoIdentityServiceProvider;
