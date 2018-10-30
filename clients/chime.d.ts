import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Chime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Chime.Types.ClientConfiguration)
  config: Config & Chime.Types.ClientConfiguration;
  /**
   * Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are dissociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and are no longer able to sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action.  To sign out users without suspending them, use the LogoutUser action.
   */
  batchSuspendUser(params: Chime.Types.BatchSuspendUserRequest, callback?: (err: AWSError, data: Chime.Types.BatchSuspendUserResponse) => void): Request<Chime.Types.BatchSuspendUserResponse, AWSError>;
  /**
   * Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are dissociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and are no longer able to sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action.  To sign out users without suspending them, use the LogoutUser action.
   */
  batchSuspendUser(callback?: (err: AWSError, data: Chime.Types.BatchSuspendUserResponse) => void): Request<Chime.Types.BatchSuspendUserResponse, AWSError>;
  /**
   * Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account. Only users on EnterpriseLWA accounts can be unsuspended using this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Previously suspended users who are unsuspended using this action are returned to Registered status. Users who are not previously suspended are ignored.
   */
  batchUnsuspendUser(params: Chime.Types.BatchUnsuspendUserRequest, callback?: (err: AWSError, data: Chime.Types.BatchUnsuspendUserResponse) => void): Request<Chime.Types.BatchUnsuspendUserResponse, AWSError>;
  /**
   * Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account. Only users on EnterpriseLWA accounts can be unsuspended using this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Previously suspended users who are unsuspended using this action are returned to Registered status. Users who are not previously suspended are ignored.
   */
  batchUnsuspendUser(callback?: (err: AWSError, data: Chime.Types.BatchUnsuspendUserResponse) => void): Request<Chime.Types.BatchUnsuspendUserResponse, AWSError>;
  /**
   * Updates user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account. Currently, only LicenseType updates are supported for this action.
   */
  batchUpdateUser(params: Chime.Types.BatchUpdateUserRequest, callback?: (err: AWSError, data: Chime.Types.BatchUpdateUserResponse) => void): Request<Chime.Types.BatchUpdateUserResponse, AWSError>;
  /**
   * Updates user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account. Currently, only LicenseType updates are supported for this action.
   */
  batchUpdateUser(callback?: (err: AWSError, data: Chime.Types.BatchUpdateUserResponse) => void): Request<Chime.Types.BatchUpdateUserResponse, AWSError>;
  /**
   * Creates an Amazon Chime account under the administrator's AWS account. Only Team account types are currently supported for this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide.
   */
  createAccount(params: Chime.Types.CreateAccountRequest, callback?: (err: AWSError, data: Chime.Types.CreateAccountResponse) => void): Request<Chime.Types.CreateAccountResponse, AWSError>;
  /**
   * Creates an Amazon Chime account under the administrator's AWS account. Only Team account types are currently supported for this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide.
   */
  createAccount(callback?: (err: AWSError, data: Chime.Types.CreateAccountResponse) => void): Request<Chime.Types.CreateAccountResponse, AWSError>;
  /**
   * Deletes the specified Amazon Chime account. You must suspend all users before deleting a Team account. You can use the BatchSuspendUser action to do so. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore a deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list.
   */
  deleteAccount(params: Chime.Types.DeleteAccountRequest, callback?: (err: AWSError, data: Chime.Types.DeleteAccountResponse) => void): Request<Chime.Types.DeleteAccountResponse, AWSError>;
  /**
   * Deletes the specified Amazon Chime account. You must suspend all users before deleting a Team account. You can use the BatchSuspendUser action to do so. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore a deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list.
   */
  deleteAccount(callback?: (err: AWSError, data: Chime.Types.DeleteAccountResponse) => void): Request<Chime.Types.DeleteAccountResponse, AWSError>;
  /**
   * Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.
   */
  getAccount(params: Chime.Types.GetAccountRequest, callback?: (err: AWSError, data: Chime.Types.GetAccountResponse) => void): Request<Chime.Types.GetAccountResponse, AWSError>;
  /**
   * Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.
   */
  getAccount(callback?: (err: AWSError, data: Chime.Types.GetAccountResponse) => void): Request<Chime.Types.GetAccountResponse, AWSError>;
  /**
   * Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dial out settings. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide.
   */
  getAccountSettings(params: Chime.Types.GetAccountSettingsRequest, callback?: (err: AWSError, data: Chime.Types.GetAccountSettingsResponse) => void): Request<Chime.Types.GetAccountSettingsResponse, AWSError>;
  /**
   * Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dial out settings. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide.
   */
  getAccountSettings(callback?: (err: AWSError, data: Chime.Types.GetAccountSettingsResponse) => void): Request<Chime.Types.GetAccountSettingsResponse, AWSError>;
  /**
   * Retrieves details for the specified user ID, such as primary email address, license type, and personal meeting PIN.
   */
  getUser(params: Chime.Types.GetUserRequest, callback?: (err: AWSError, data: Chime.Types.GetUserResponse) => void): Request<Chime.Types.GetUserResponse, AWSError>;
  /**
   * Retrieves details for the specified user ID, such as primary email address, license type, and personal meeting PIN.
   */
  getUser(callback?: (err: AWSError, data: Chime.Types.GetUserResponse) => void): Request<Chime.Types.GetUserResponse, AWSError>;
  /**
   * Sends email invites to as many as 50 users, inviting them to the specified Amazon Chime Team account. Only Team account types are currently supported for this action. 
   */
  inviteUsers(params: Chime.Types.InviteUsersRequest, callback?: (err: AWSError, data: Chime.Types.InviteUsersResponse) => void): Request<Chime.Types.InviteUsersResponse, AWSError>;
  /**
   * Sends email invites to as many as 50 users, inviting them to the specified Amazon Chime Team account. Only Team account types are currently supported for this action. 
   */
  inviteUsers(callback?: (err: AWSError, data: Chime.Types.InviteUsersResponse) => void): Request<Chime.Types.InviteUsersResponse, AWSError>;
  /**
   * Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.
   */
  listAccounts(params: Chime.Types.ListAccountsRequest, callback?: (err: AWSError, data: Chime.Types.ListAccountsResponse) => void): Request<Chime.Types.ListAccountsResponse, AWSError>;
  /**
   * Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.
   */
  listAccounts(callback?: (err: AWSError, data: Chime.Types.ListAccountsResponse) => void): Request<Chime.Types.ListAccountsResponse, AWSError>;
  /**
   * Lists the users that belong to the specified Amazon Chime account.
   */
  listUsers(params: Chime.Types.ListUsersRequest, callback?: (err: AWSError, data: Chime.Types.ListUsersResponse) => void): Request<Chime.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users that belong to the specified Amazon Chime account.
   */
  listUsers(callback?: (err: AWSError, data: Chime.Types.ListUsersResponse) => void): Request<Chime.Types.ListUsersResponse, AWSError>;
  /**
   * Logs out the specified user from all of the devices they are currently logged into.
   */
  logoutUser(params: Chime.Types.LogoutUserRequest, callback?: (err: AWSError, data: Chime.Types.LogoutUserResponse) => void): Request<Chime.Types.LogoutUserResponse, AWSError>;
  /**
   * Logs out the specified user from all of the devices they are currently logged into.
   */
  logoutUser(callback?: (err: AWSError, data: Chime.Types.LogoutUserResponse) => void): Request<Chime.Types.LogoutUserResponse, AWSError>;
  /**
   * Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the User object with the updated personal meeting PIN.
   */
  resetPersonalPIN(params: Chime.Types.ResetPersonalPINRequest, callback?: (err: AWSError, data: Chime.Types.ResetPersonalPINResponse) => void): Request<Chime.Types.ResetPersonalPINResponse, AWSError>;
  /**
   * Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the User object with the updated personal meeting PIN.
   */
  resetPersonalPIN(callback?: (err: AWSError, data: Chime.Types.ResetPersonalPINResponse) => void): Request<Chime.Types.ResetPersonalPINResponse, AWSError>;
  /**
   * Updates account details for the specified Amazon Chime account. Currently, only account name updates are supported for this action.
   */
  updateAccount(params: Chime.Types.UpdateAccountRequest, callback?: (err: AWSError, data: Chime.Types.UpdateAccountResponse) => void): Request<Chime.Types.UpdateAccountResponse, AWSError>;
  /**
   * Updates account details for the specified Amazon Chime account. Currently, only account name updates are supported for this action.
   */
  updateAccount(callback?: (err: AWSError, data: Chime.Types.UpdateAccountResponse) => void): Request<Chime.Types.UpdateAccountResponse, AWSError>;
  /**
   * Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide.
   */
  updateAccountSettings(params: Chime.Types.UpdateAccountSettingsRequest, callback?: (err: AWSError, data: Chime.Types.UpdateAccountSettingsResponse) => void): Request<Chime.Types.UpdateAccountSettingsResponse, AWSError>;
  /**
   * Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide.
   */
  updateAccountSettings(callback?: (err: AWSError, data: Chime.Types.UpdateAccountSettingsResponse) => void): Request<Chime.Types.UpdateAccountSettingsResponse, AWSError>;
  /**
   * Updates user details for a specified user ID. Currently, only LicenseType updates are supported for this action.
   */
  updateUser(params: Chime.Types.UpdateUserRequest, callback?: (err: AWSError, data: Chime.Types.UpdateUserResponse) => void): Request<Chime.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates user details for a specified user ID. Currently, only LicenseType updates are supported for this action.
   */
  updateUser(callback?: (err: AWSError, data: Chime.Types.UpdateUserResponse) => void): Request<Chime.Types.UpdateUserResponse, AWSError>;
}
declare namespace Chime {
  export interface Account {
    /**
     * The AWS account ID.
     */
    AwsAccountId: String;
    /**
     * The Amazon Chime account ID.
     */
    AccountId: String;
    /**
     * The Amazon Chime account name.
     */
    Name: String;
    /**
     * The Amazon Chime account type. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide.
     */
    AccountType?: AccountType;
    /**
     * The Amazon Chime account creation timestamp, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The default license for the Amazon Chime account.
     */
    DefaultLicense?: License;
    /**
     * Supported licenses for the Amazon Chime account.
     */
    SupportedLicenses?: LicenseList;
  }
  export type AccountList = Account[];
  export type AccountName = string;
  export interface AccountSettings {
    /**
     * Setting that stops or starts remote control of shared screens during meetings.
     */
    DisableRemoteControl?: Boolean;
    /**
     * Setting that allows meeting participants to choose the Call me at a phone number option. For more information, see Join a Meeting without the Amazon Chime App.
     */
    EnableDialOut?: Boolean;
  }
  export type AccountType = "Team"|"EnterpriseDirectory"|"EnterpriseLWA"|"EnterpriseOIDC"|string;
  export interface BatchSuspendUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The request containing the user IDs to suspend.
     */
    UserIdList: UserIdList;
  }
  export interface BatchSuspendUserResponse {
    /**
     * If the BatchSuspendUser action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.
     */
    UserErrors?: UserErrorList;
  }
  export interface BatchUnsuspendUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The request containing the user IDs to unsuspend.
     */
    UserIdList: UserIdList;
  }
  export interface BatchUnsuspendUserResponse {
    /**
     * If the BatchUnsuspendUser action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.
     */
    UserErrors?: UserErrorList;
  }
  export interface BatchUpdateUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The request containing the user IDs and details to update.
     */
    UpdateUserRequestItems: UpdateUserRequestItemList;
  }
  export interface BatchUpdateUserResponse {
    /**
     * If the BatchUpdateUser action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.
     */
    UserErrors?: UserErrorList;
  }
  export type Boolean = boolean;
  export interface CreateAccountRequest {
    /**
     * The name of the Amazon Chime account.
     */
    Name: AccountName;
  }
  export interface CreateAccountResponse {
    /**
     * The Amazon Chime account details.
     */
    Account?: Account;
  }
  export interface DeleteAccountRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
  }
  export interface DeleteAccountResponse {
  }
  export type EmailAddress = string;
  export type EmailStatus = "NotSent"|"Sent"|"Failed"|string;
  export type ErrorCode = "Unauthorized"|"Forbidden"|"NotFound"|"BadRequest"|"Conflict"|"ServiceFailure"|"ServiceUnavailable"|"Unprocessable"|"Throttled"|"PreconditionFailed"|string;
  export interface GetAccountRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
  }
  export interface GetAccountResponse {
    /**
     * The Amazon Chime account details.
     */
    Account?: Account;
  }
  export interface GetAccountSettingsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
  }
  export interface GetAccountSettingsResponse {
    /**
     * The Amazon Chime account settings.
     */
    AccountSettings?: AccountSettings;
  }
  export interface GetUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The user ID.
     */
    UserId: NonEmptyString;
  }
  export interface GetUserResponse {
    /**
     * The user details.
     */
    User?: User;
  }
  export interface Invite {
    /**
     * The invite ID.
     */
    InviteId?: String;
    /**
     * The status of the invite.
     */
    Status?: InviteStatus;
    /**
     * The email address to which the invite is sent.
     */
    EmailAddress?: EmailAddress;
    /**
     * The status of the invite email.
     */
    EmailStatus?: EmailStatus;
  }
  export type InviteList = Invite[];
  export type InviteStatus = "Pending"|"Accepted"|"Failed"|string;
  export interface InviteUsersRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The user email addresses to which to send the invite.
     */
    UserEmailList: UserEmailList;
  }
  export interface InviteUsersResponse {
    /**
     * The invite details.
     */
    Invites?: InviteList;
  }
  export type Iso8601Timestamp = Date;
  export type License = "Basic"|"Plus"|"Pro"|"ProTrial"|string;
  export type LicenseList = License[];
  export interface ListAccountsRequest {
    /**
     * Amazon Chime account name prefix with which to filter results.
     */
    Name?: AccountName;
    /**
     * User email address with which to filter results.
     */
    UserEmail?: EmailAddress;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in a single call. Defaults to 100.
     */
    MaxResults?: ProfileServiceMaxResults;
  }
  export interface ListAccountsResponse {
    /**
     * List of Amazon Chime accounts and account details.
     */
    Accounts?: AccountList;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListUsersRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The maximum number of results to return in a single call. Defaults to 100.
     */
    MaxResults?: ProfileServiceMaxResults;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListUsersResponse {
    /**
     * List of users and user details.
     */
    Users?: UserList;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface LogoutUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The user ID.
     */
    UserId: NonEmptyString;
  }
  export interface LogoutUserResponse {
  }
  export type NonEmptyString = string;
  export type ProfileServiceMaxResults = number;
  export type RegistrationStatus = "Unregistered"|"Registered"|"Suspended"|string;
  export interface ResetPersonalPINRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The user ID.
     */
    UserId: NonEmptyString;
  }
  export interface ResetPersonalPINResponse {
    /**
     * The user details and new personal meeting PIN.
     */
    User?: User;
  }
  export type SensitiveString = string;
  export type String = string;
  export interface UpdateAccountRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The new name for the specified Amazon Chime account.
     */
    Name?: AccountName;
  }
  export interface UpdateAccountResponse {
    /**
     * The updated Amazon Chime account details.
     */
    Account?: Account;
  }
  export interface UpdateAccountSettingsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The Amazon Chime account settings to update.
     */
    AccountSettings: AccountSettings;
  }
  export interface UpdateAccountSettingsResponse {
  }
  export interface UpdateUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The user ID.
     */
    UserId: NonEmptyString;
    /**
     * The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to.
     */
    LicenseType?: License;
  }
  export interface UpdateUserRequestItem {
    /**
     * The user ID.
     */
    UserId: NonEmptyString;
    /**
     * The user license type.
     */
    LicenseType?: License;
  }
  export type UpdateUserRequestItemList = UpdateUserRequestItem[];
  export interface UpdateUserResponse {
    /**
     * The updated user details.
     */
    User?: User;
  }
  export interface User {
    /**
     * The user ID.
     */
    UserId: String;
    /**
     * The Amazon Chime account ID.
     */
    AccountId?: String;
    /**
     * The primary email address of the user.
     */
    PrimaryEmail?: EmailAddress;
    /**
     * The display name of the user.
     */
    DisplayName?: SensitiveString;
    /**
     * The license type for the user.
     */
    LicenseType?: License;
    /**
     * The user registration status.
     */
    UserRegistrationStatus?: RegistrationStatus;
    /**
     * The user invite status.
     */
    UserInvitationStatus?: InviteStatus;
    /**
     * Date and time when the user is registered, in ISO 8601 format.
     */
    RegisteredOn?: Iso8601Timestamp;
    /**
     * Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.
     */
    InvitedOn?: Iso8601Timestamp;
    /**
     * The user's personal meeting PIN.
     */
    PersonalPIN?: String;
  }
  export type UserEmailList = EmailAddress[];
  export interface UserError {
    /**
     * The user ID for which the action failed.
     */
    UserId?: NonEmptyString;
    /**
     * The error code.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message.
     */
    ErrorMessage?: String;
  }
  export type UserErrorList = UserError[];
  export type UserIdList = NonEmptyString[];
  export type UserList = User[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Chime client.
   */
  export import Types = Chime;
}
export = Chime;
