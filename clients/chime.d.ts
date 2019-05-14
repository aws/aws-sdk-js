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
   * Associates a phone number with the specified Amazon Chime user.
   */
  associatePhoneNumberWithUser(params: Chime.Types.AssociatePhoneNumberWithUserRequest, callback?: (err: AWSError, data: Chime.Types.AssociatePhoneNumberWithUserResponse) => void): Request<Chime.Types.AssociatePhoneNumberWithUserResponse, AWSError>;
  /**
   * Associates a phone number with the specified Amazon Chime user.
   */
  associatePhoneNumberWithUser(callback?: (err: AWSError, data: Chime.Types.AssociatePhoneNumberWithUserResponse) => void): Request<Chime.Types.AssociatePhoneNumberWithUserResponse, AWSError>;
  /**
   * Associates a phone number with the specified Amazon Chime Voice Connector.
   */
  associatePhoneNumbersWithVoiceConnector(params: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorRequest, callback?: (err: AWSError, data: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorResponse) => void): Request<Chime.Types.AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError>;
  /**
   * Associates a phone number with the specified Amazon Chime Voice Connector.
   */
  associatePhoneNumbersWithVoiceConnector(callback?: (err: AWSError, data: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorResponse) => void): Request<Chime.Types.AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError>;
  /**
   * Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.
   */
  batchDeletePhoneNumber(params: Chime.Types.BatchDeletePhoneNumberRequest, callback?: (err: AWSError, data: Chime.Types.BatchDeletePhoneNumberResponse) => void): Request<Chime.Types.BatchDeletePhoneNumberResponse, AWSError>;
  /**
   * Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.
   */
  batchDeletePhoneNumber(callback?: (err: AWSError, data: Chime.Types.BatchDeletePhoneNumberResponse) => void): Request<Chime.Types.BatchDeletePhoneNumberResponse, AWSError>;
  /**
   * Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are dissasociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action.  To sign out users without suspending them, use the LogoutUser action.
   */
  batchSuspendUser(params: Chime.Types.BatchSuspendUserRequest, callback?: (err: AWSError, data: Chime.Types.BatchSuspendUserResponse) => void): Request<Chime.Types.BatchSuspendUserResponse, AWSError>;
  /**
   * Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are dissasociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action.  To sign out users without suspending them, use the LogoutUser action.
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
   * Updates phone number product types. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types.
   */
  batchUpdatePhoneNumber(params: Chime.Types.BatchUpdatePhoneNumberRequest, callback?: (err: AWSError, data: Chime.Types.BatchUpdatePhoneNumberResponse) => void): Request<Chime.Types.BatchUpdatePhoneNumberResponse, AWSError>;
  /**
   * Updates phone number product types. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types.
   */
  batchUpdatePhoneNumber(callback?: (err: AWSError, data: Chime.Types.BatchUpdatePhoneNumberResponse) => void): Request<Chime.Types.BatchUpdatePhoneNumberResponse, AWSError>;
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
   * Creates a bot for an Amazon Chime Enterprise account.
   */
  createBot(params: Chime.Types.CreateBotRequest, callback?: (err: AWSError, data: Chime.Types.CreateBotResponse) => void): Request<Chime.Types.CreateBotResponse, AWSError>;
  /**
   * Creates a bot for an Amazon Chime Enterprise account.
   */
  createBot(callback?: (err: AWSError, data: Chime.Types.CreateBotResponse) => void): Request<Chime.Types.CreateBotResponse, AWSError>;
  /**
   * Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types.
   */
  createPhoneNumberOrder(params: Chime.Types.CreatePhoneNumberOrderRequest, callback?: (err: AWSError, data: Chime.Types.CreatePhoneNumberOrderResponse) => void): Request<Chime.Types.CreatePhoneNumberOrderResponse, AWSError>;
  /**
   * Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types.
   */
  createPhoneNumberOrder(callback?: (err: AWSError, data: Chime.Types.CreatePhoneNumberOrderResponse) => void): Request<Chime.Types.CreatePhoneNumberOrderResponse, AWSError>;
  /**
   * Creates an Amazon Chime Voice Connector under the administrator's AWS account. Enabling CreateVoiceConnectorRequest$RequireEncryption configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.
   */
  createVoiceConnector(params: Chime.Types.CreateVoiceConnectorRequest, callback?: (err: AWSError, data: Chime.Types.CreateVoiceConnectorResponse) => void): Request<Chime.Types.CreateVoiceConnectorResponse, AWSError>;
  /**
   * Creates an Amazon Chime Voice Connector under the administrator's AWS account. Enabling CreateVoiceConnectorRequest$RequireEncryption configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.
   */
  createVoiceConnector(callback?: (err: AWSError, data: Chime.Types.CreateVoiceConnectorResponse) => void): Request<Chime.Types.CreateVoiceConnectorResponse, AWSError>;
  /**
   * Deletes the specified Amazon Chime account. You must suspend all users before deleting a Team account. You can use the BatchSuspendUser action to do so. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore a deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list.
   */
  deleteAccount(params: Chime.Types.DeleteAccountRequest, callback?: (err: AWSError, data: Chime.Types.DeleteAccountResponse) => void): Request<Chime.Types.DeleteAccountResponse, AWSError>;
  /**
   * Deletes the specified Amazon Chime account. You must suspend all users before deleting a Team account. You can use the BatchSuspendUser action to do so. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore a deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list.
   */
  deleteAccount(callback?: (err: AWSError, data: Chime.Types.DeleteAccountResponse) => void): Request<Chime.Types.DeleteAccountResponse, AWSError>;
  /**
   * Deletes the events configuration that allows a bot to receive outgoing events.
   */
  deleteEventsConfiguration(params: Chime.Types.DeleteEventsConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the events configuration that allows a bot to receive outgoing events.
   */
  deleteEventsConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.
   */
  deletePhoneNumber(params: Chime.Types.DeletePhoneNumberRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.
   */
  deletePhoneNumber(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Chime Voice Connector. Any phone numbers assigned to the Amazon Chime Voice Connector must be unassigned from it before it can be deleted.
   */
  deleteVoiceConnector(params: Chime.Types.DeleteVoiceConnectorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Chime Voice Connector. Any phone numbers assigned to the Amazon Chime Voice Connector must be unassigned from it before it can be deleted.
   */
  deleteVoiceConnector(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the origination settings for the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorOrigination(params: Chime.Types.DeleteVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the origination settings for the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorOrigination(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the termination settings for the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorTermination(params: Chime.Types.DeleteVoiceConnectorTerminationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the termination settings for the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorTermination(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified SIP credentials used by your equipment to authenticate during call termination.
   */
  deleteVoiceConnectorTerminationCredentials(params: Chime.Types.DeleteVoiceConnectorTerminationCredentialsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified SIP credentials used by your equipment to authenticate during call termination.
   */
  deleteVoiceConnectorTerminationCredentials(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates the primary provisioned phone number from the specified Amazon Chime user.
   */
  disassociatePhoneNumberFromUser(params: Chime.Types.DisassociatePhoneNumberFromUserRequest, callback?: (err: AWSError, data: Chime.Types.DisassociatePhoneNumberFromUserResponse) => void): Request<Chime.Types.DisassociatePhoneNumberFromUserResponse, AWSError>;
  /**
   * Disassociates the primary provisioned phone number from the specified Amazon Chime user.
   */
  disassociatePhoneNumberFromUser(callback?: (err: AWSError, data: Chime.Types.DisassociatePhoneNumberFromUserResponse) => void): Request<Chime.Types.DisassociatePhoneNumberFromUserResponse, AWSError>;
  /**
   * Disassociates the specified phone number from the specified Amazon Chime Voice Connector.
   */
  disassociatePhoneNumbersFromVoiceConnector(params: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorRequest, callback?: (err: AWSError, data: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse) => void): Request<Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError>;
  /**
   * Disassociates the specified phone number from the specified Amazon Chime Voice Connector.
   */
  disassociatePhoneNumbersFromVoiceConnector(callback?: (err: AWSError, data: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse) => void): Request<Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError>;
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
   * Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.
   */
  getBot(params: Chime.Types.GetBotRequest, callback?: (err: AWSError, data: Chime.Types.GetBotResponse) => void): Request<Chime.Types.GetBotResponse, AWSError>;
  /**
   * Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.
   */
  getBot(callback?: (err: AWSError, data: Chime.Types.GetBotResponse) => void): Request<Chime.Types.GetBotResponse, AWSError>;
  /**
   * Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN. 
   */
  getEventsConfiguration(params: Chime.Types.GetEventsConfigurationRequest, callback?: (err: AWSError, data: Chime.Types.GetEventsConfigurationResponse) => void): Request<Chime.Types.GetEventsConfigurationResponse, AWSError>;
  /**
   * Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN. 
   */
  getEventsConfiguration(callback?: (err: AWSError, data: Chime.Types.GetEventsConfigurationResponse) => void): Request<Chime.Types.GetEventsConfigurationResponse, AWSError>;
  /**
   * Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.
   */
  getGlobalSettings(callback?: (err: AWSError, data: Chime.Types.GetGlobalSettingsResponse) => void): Request<Chime.Types.GetGlobalSettingsResponse, AWSError>;
  /**
   * Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.
   */
  getPhoneNumber(params: Chime.Types.GetPhoneNumberRequest, callback?: (err: AWSError, data: Chime.Types.GetPhoneNumberResponse) => void): Request<Chime.Types.GetPhoneNumberResponse, AWSError>;
  /**
   * Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.
   */
  getPhoneNumber(callback?: (err: AWSError, data: Chime.Types.GetPhoneNumberResponse) => void): Request<Chime.Types.GetPhoneNumberResponse, AWSError>;
  /**
   * Retrieves details for the specified phone number order, such as order creation timestamp, phone numbers in E.164 format, product type, and order status.
   */
  getPhoneNumberOrder(params: Chime.Types.GetPhoneNumberOrderRequest, callback?: (err: AWSError, data: Chime.Types.GetPhoneNumberOrderResponse) => void): Request<Chime.Types.GetPhoneNumberOrderResponse, AWSError>;
  /**
   * Retrieves details for the specified phone number order, such as order creation timestamp, phone numbers in E.164 format, product type, and order status.
   */
  getPhoneNumberOrder(callback?: (err: AWSError, data: Chime.Types.GetPhoneNumberOrderResponse) => void): Request<Chime.Types.GetPhoneNumberOrderResponse, AWSError>;
  /**
   * Retrieves details for the specified user ID, such as primary email address, license type, and personal meeting PIN. To retrieve user details with an email address instead of a user ID, use the ListUsers action, and then filter by email address.
   */
  getUser(params: Chime.Types.GetUserRequest, callback?: (err: AWSError, data: Chime.Types.GetUserResponse) => void): Request<Chime.Types.GetUserResponse, AWSError>;
  /**
   * Retrieves details for the specified user ID, such as primary email address, license type, and personal meeting PIN. To retrieve user details with an email address instead of a user ID, use the ListUsers action, and then filter by email address.
   */
  getUser(callback?: (err: AWSError, data: Chime.Types.GetUserResponse) => void): Request<Chime.Types.GetUserResponse, AWSError>;
  /**
   * Retrieves settings for the specified user ID, such as any associated phone number settings.
   */
  getUserSettings(params: Chime.Types.GetUserSettingsRequest, callback?: (err: AWSError, data: Chime.Types.GetUserSettingsResponse) => void): Request<Chime.Types.GetUserSettingsResponse, AWSError>;
  /**
   * Retrieves settings for the specified user ID, such as any associated phone number settings.
   */
  getUserSettings(callback?: (err: AWSError, data: Chime.Types.GetUserSettingsResponse) => void): Request<Chime.Types.GetUserSettingsResponse, AWSError>;
  /**
   * Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps, name, outbound host, and encryption requirements.
   */
  getVoiceConnector(params: Chime.Types.GetVoiceConnectorRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorResponse) => void): Request<Chime.Types.GetVoiceConnectorResponse, AWSError>;
  /**
   * Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps, name, outbound host, and encryption requirements.
   */
  getVoiceConnector(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorResponse) => void): Request<Chime.Types.GetVoiceConnectorResponse, AWSError>;
  /**
   * Retrieves origination setting details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorOrigination(params: Chime.Types.GetVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorOriginationResponse) => void): Request<Chime.Types.GetVoiceConnectorOriginationResponse, AWSError>;
  /**
   * Retrieves origination setting details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorOrigination(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorOriginationResponse) => void): Request<Chime.Types.GetVoiceConnectorOriginationResponse, AWSError>;
  /**
   * Retrieves termination setting details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorTermination(params: Chime.Types.GetVoiceConnectorTerminationRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorTerminationResponse) => void): Request<Chime.Types.GetVoiceConnectorTerminationResponse, AWSError>;
  /**
   * Retrieves termination setting details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorTermination(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorTerminationResponse) => void): Request<Chime.Types.GetVoiceConnectorTerminationResponse, AWSError>;
  /**
   * Retrieves information about the last time a SIP OPTIONS ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorTerminationHealth(params: Chime.Types.GetVoiceConnectorTerminationHealthRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorTerminationHealthResponse) => void): Request<Chime.Types.GetVoiceConnectorTerminationHealthResponse, AWSError>;
  /**
   * Retrieves information about the last time a SIP OPTIONS ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorTerminationHealth(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorTerminationHealthResponse) => void): Request<Chime.Types.GetVoiceConnectorTerminationHealthResponse, AWSError>;
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
   * Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.
   */
  listBots(params: Chime.Types.ListBotsRequest, callback?: (err: AWSError, data: Chime.Types.ListBotsResponse) => void): Request<Chime.Types.ListBotsResponse, AWSError>;
  /**
   * Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.
   */
  listBots(callback?: (err: AWSError, data: Chime.Types.ListBotsResponse) => void): Request<Chime.Types.ListBotsResponse, AWSError>;
  /**
   * Lists the phone number orders for the administrator's Amazon Chime account.
   */
  listPhoneNumberOrders(params: Chime.Types.ListPhoneNumberOrdersRequest, callback?: (err: AWSError, data: Chime.Types.ListPhoneNumberOrdersResponse) => void): Request<Chime.Types.ListPhoneNumberOrdersResponse, AWSError>;
  /**
   * Lists the phone number orders for the administrator's Amazon Chime account.
   */
  listPhoneNumberOrders(callback?: (err: AWSError, data: Chime.Types.ListPhoneNumberOrdersResponse) => void): Request<Chime.Types.ListPhoneNumberOrdersResponse, AWSError>;
  /**
   * Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, or Amazon Chime Voice Connector.
   */
  listPhoneNumbers(params: Chime.Types.ListPhoneNumbersRequest, callback?: (err: AWSError, data: Chime.Types.ListPhoneNumbersResponse) => void): Request<Chime.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, or Amazon Chime Voice Connector.
   */
  listPhoneNumbers(callback?: (err: AWSError, data: Chime.Types.ListPhoneNumbersResponse) => void): Request<Chime.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.
   */
  listUsers(params: Chime.Types.ListUsersRequest, callback?: (err: AWSError, data: Chime.Types.ListUsersResponse) => void): Request<Chime.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.
   */
  listUsers(callback?: (err: AWSError, data: Chime.Types.ListUsersResponse) => void): Request<Chime.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the SIP credentials for the specified Amazon Chime Voice Connector.
   */
  listVoiceConnectorTerminationCredentials(params: Chime.Types.ListVoiceConnectorTerminationCredentialsRequest, callback?: (err: AWSError, data: Chime.Types.ListVoiceConnectorTerminationCredentialsResponse) => void): Request<Chime.Types.ListVoiceConnectorTerminationCredentialsResponse, AWSError>;
  /**
   * Lists the SIP credentials for the specified Amazon Chime Voice Connector.
   */
  listVoiceConnectorTerminationCredentials(callback?: (err: AWSError, data: Chime.Types.ListVoiceConnectorTerminationCredentialsResponse) => void): Request<Chime.Types.ListVoiceConnectorTerminationCredentialsResponse, AWSError>;
  /**
   * Lists the Amazon Chime Voice Connectors for the administrator's AWS account.
   */
  listVoiceConnectors(params: Chime.Types.ListVoiceConnectorsRequest, callback?: (err: AWSError, data: Chime.Types.ListVoiceConnectorsResponse) => void): Request<Chime.Types.ListVoiceConnectorsResponse, AWSError>;
  /**
   * Lists the Amazon Chime Voice Connectors for the administrator's AWS account.
   */
  listVoiceConnectors(callback?: (err: AWSError, data: Chime.Types.ListVoiceConnectorsResponse) => void): Request<Chime.Types.ListVoiceConnectorsResponse, AWSError>;
  /**
   * Logs out the specified user from all of the devices they are currently logged into.
   */
  logoutUser(params: Chime.Types.LogoutUserRequest, callback?: (err: AWSError, data: Chime.Types.LogoutUserResponse) => void): Request<Chime.Types.LogoutUserResponse, AWSError>;
  /**
   * Logs out the specified user from all of the devices they are currently logged into.
   */
  logoutUser(callback?: (err: AWSError, data: Chime.Types.LogoutUserResponse) => void): Request<Chime.Types.LogoutUserResponse, AWSError>;
  /**
   * Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see Bot.
   */
  putEventsConfiguration(params: Chime.Types.PutEventsConfigurationRequest, callback?: (err: AWSError, data: Chime.Types.PutEventsConfigurationResponse) => void): Request<Chime.Types.PutEventsConfigurationResponse, AWSError>;
  /**
   * Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see Bot.
   */
  putEventsConfiguration(callback?: (err: AWSError, data: Chime.Types.PutEventsConfigurationResponse) => void): Request<Chime.Types.PutEventsConfigurationResponse, AWSError>;
  /**
   * Adds origination settings for the specified Amazon Chime Voice Connector.
   */
  putVoiceConnectorOrigination(params: Chime.Types.PutVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorOriginationResponse) => void): Request<Chime.Types.PutVoiceConnectorOriginationResponse, AWSError>;
  /**
   * Adds origination settings for the specified Amazon Chime Voice Connector.
   */
  putVoiceConnectorOrigination(callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorOriginationResponse) => void): Request<Chime.Types.PutVoiceConnectorOriginationResponse, AWSError>;
  /**
   * Adds termination settings for the specified Amazon Chime Voice Connector.
   */
  putVoiceConnectorTermination(params: Chime.Types.PutVoiceConnectorTerminationRequest, callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorTerminationResponse) => void): Request<Chime.Types.PutVoiceConnectorTerminationResponse, AWSError>;
  /**
   * Adds termination settings for the specified Amazon Chime Voice Connector.
   */
  putVoiceConnectorTermination(callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorTerminationResponse) => void): Request<Chime.Types.PutVoiceConnectorTerminationResponse, AWSError>;
  /**
   * Adds termination SIP credentials for the specified Amazon Chime Voice Connector.
   */
  putVoiceConnectorTerminationCredentials(params: Chime.Types.PutVoiceConnectorTerminationCredentialsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds termination SIP credentials for the specified Amazon Chime Voice Connector.
   */
  putVoiceConnectorTerminationCredentials(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Regenerates the security token for a bot.
   */
  regenerateSecurityToken(params: Chime.Types.RegenerateSecurityTokenRequest, callback?: (err: AWSError, data: Chime.Types.RegenerateSecurityTokenResponse) => void): Request<Chime.Types.RegenerateSecurityTokenResponse, AWSError>;
  /**
   * Regenerates the security token for a bot.
   */
  regenerateSecurityToken(callback?: (err: AWSError, data: Chime.Types.RegenerateSecurityTokenResponse) => void): Request<Chime.Types.RegenerateSecurityTokenResponse, AWSError>;
  /**
   * Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the User object with the updated personal meeting PIN.
   */
  resetPersonalPIN(params: Chime.Types.ResetPersonalPINRequest, callback?: (err: AWSError, data: Chime.Types.ResetPersonalPINResponse) => void): Request<Chime.Types.ResetPersonalPINResponse, AWSError>;
  /**
   * Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the User object with the updated personal meeting PIN.
   */
  resetPersonalPIN(callback?: (err: AWSError, data: Chime.Types.ResetPersonalPINResponse) => void): Request<Chime.Types.ResetPersonalPINResponse, AWSError>;
  /**
   * Moves a phone number from the Deletion queue back into the phone number Inventory.
   */
  restorePhoneNumber(params: Chime.Types.RestorePhoneNumberRequest, callback?: (err: AWSError, data: Chime.Types.RestorePhoneNumberResponse) => void): Request<Chime.Types.RestorePhoneNumberResponse, AWSError>;
  /**
   * Moves a phone number from the Deletion queue back into the phone number Inventory.
   */
  restorePhoneNumber(callback?: (err: AWSError, data: Chime.Types.RestorePhoneNumberResponse) => void): Request<Chime.Types.RestorePhoneNumberResponse, AWSError>;
  /**
   * Searches phone numbers that can be ordered.
   */
  searchAvailablePhoneNumbers(params: Chime.Types.SearchAvailablePhoneNumbersRequest, callback?: (err: AWSError, data: Chime.Types.SearchAvailablePhoneNumbersResponse) => void): Request<Chime.Types.SearchAvailablePhoneNumbersResponse, AWSError>;
  /**
   * Searches phone numbers that can be ordered.
   */
  searchAvailablePhoneNumbers(callback?: (err: AWSError, data: Chime.Types.SearchAvailablePhoneNumbersResponse) => void): Request<Chime.Types.SearchAvailablePhoneNumbersResponse, AWSError>;
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
   * Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.
   */
  updateBot(params: Chime.Types.UpdateBotRequest, callback?: (err: AWSError, data: Chime.Types.UpdateBotResponse) => void): Request<Chime.Types.UpdateBotResponse, AWSError>;
  /**
   * Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.
   */
  updateBot(callback?: (err: AWSError, data: Chime.Types.UpdateBotResponse) => void): Request<Chime.Types.UpdateBotResponse, AWSError>;
  /**
   * Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.
   */
  updateGlobalSettings(params: Chime.Types.UpdateGlobalSettingsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.
   */
  updateGlobalSettings(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates phone number details, such as product type, for the specified phone number ID.
   */
  updatePhoneNumber(params: Chime.Types.UpdatePhoneNumberRequest, callback?: (err: AWSError, data: Chime.Types.UpdatePhoneNumberResponse) => void): Request<Chime.Types.UpdatePhoneNumberResponse, AWSError>;
  /**
   * Updates phone number details, such as product type, for the specified phone number ID.
   */
  updatePhoneNumber(callback?: (err: AWSError, data: Chime.Types.UpdatePhoneNumberResponse) => void): Request<Chime.Types.UpdatePhoneNumberResponse, AWSError>;
  /**
   * Updates user details for a specified user ID. Currently, only LicenseType updates are supported for this action.
   */
  updateUser(params: Chime.Types.UpdateUserRequest, callback?: (err: AWSError, data: Chime.Types.UpdateUserResponse) => void): Request<Chime.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates user details for a specified user ID. Currently, only LicenseType updates are supported for this action.
   */
  updateUser(callback?: (err: AWSError, data: Chime.Types.UpdateUserResponse) => void): Request<Chime.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates the settings for the specified user, such as phone number settings.
   */
  updateUserSettings(params: Chime.Types.UpdateUserSettingsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings for the specified user, such as phone number settings.
   */
  updateUserSettings(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates details for the specified Amazon Chime Voice Connector.
   */
  updateVoiceConnector(params: Chime.Types.UpdateVoiceConnectorRequest, callback?: (err: AWSError, data: Chime.Types.UpdateVoiceConnectorResponse) => void): Request<Chime.Types.UpdateVoiceConnectorResponse, AWSError>;
  /**
   * Updates details for the specified Amazon Chime Voice Connector.
   */
  updateVoiceConnector(callback?: (err: AWSError, data: Chime.Types.UpdateVoiceConnectorResponse) => void): Request<Chime.Types.UpdateVoiceConnectorResponse, AWSError>;
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
  export interface AssociatePhoneNumberWithUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: String;
    /**
     * The user ID.
     */
    UserId: String;
    /**
     * The phone number, in E.164 format.
     */
    E164PhoneNumber: E164PhoneNumber;
  }
  export interface AssociatePhoneNumberWithUserResponse {
  }
  export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * List of phone numbers, in E.164 format.
     */
    E164PhoneNumbers?: E164PhoneNumberList;
  }
  export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
    /**
     * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
     */
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface BatchDeletePhoneNumberRequest {
    /**
     * List of phone number IDs.
     */
    PhoneNumberIds: NonEmptyStringList;
  }
  export interface BatchDeletePhoneNumberResponse {
    /**
     * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
     */
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
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
  export interface BatchUpdatePhoneNumberRequest {
    /**
     * The request containing the phone number IDs and product types to update.
     */
    UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItemList;
  }
  export interface BatchUpdatePhoneNumberResponse {
    /**
     * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
     */
    PhoneNumberErrors?: PhoneNumberErrorList;
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
  export interface Bot {
    /**
     * The bot ID.
     */
    BotId?: String;
    /**
     * The unique ID for the bot user.
     */
    UserId?: String;
    /**
     * The bot display name.
     */
    DisplayName?: SensitiveString;
    /**
     * The bot type.
     */
    BotType?: BotType;
    /**
     * When true, the bot is stopped from running in your account.
     */
    Disabled?: NullableBoolean;
    /**
     * The bot creation timestamp, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The updated bot timestamp, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
    /**
     * The bot email address.
     */
    BotEmail?: SensitiveString;
    /**
     * The security token used to authenticate Amazon Chime with the outgoing event endpoint.
     */
    SecurityToken?: SensitiveString;
  }
  export type BotList = Bot[];
  export type BotType = "ChatBot"|string;
  export interface BusinessCallingSettings {
    /**
     * The Amazon S3 bucket designated for call detail record storage.
     */
    CdrBucket?: String;
  }
  export type CallingRegion = string;
  export type CallingRegionList = CallingRegion[];
  export type CpsLimit = number;
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
  export interface CreateBotRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The bot display name.
     */
    DisplayName: SensitiveString;
    /**
     * The domain of the Amazon Chime Enterprise account.
     */
    Domain?: NonEmptyString;
  }
  export interface CreateBotResponse {
    /**
     * The bot details.
     */
    Bot?: Bot;
  }
  export interface CreatePhoneNumberOrderRequest {
    /**
     * The phone number product type.
     */
    ProductType: PhoneNumberProductType;
    /**
     * List of phone numbers, in E.164 format.
     */
    E164PhoneNumbers: E164PhoneNumberList;
  }
  export interface CreatePhoneNumberOrderResponse {
    /**
     * The phone number order details.
     */
    PhoneNumberOrder?: PhoneNumberOrder;
  }
  export interface CreateVoiceConnectorRequest {
    /**
     * The name of the Amazon Chime Voice Connector.
     */
    Name: VoiceConnectorName;
    /**
     * When enabled, requires encryption for the Amazon Chime Voice Connector.
     */
    RequireEncryption: Boolean;
  }
  export interface CreateVoiceConnectorResponse {
    /**
     * The Amazon Chime Voice Connector details.
     */
    VoiceConnector?: VoiceConnector;
  }
  export interface Credential {
    /**
     * The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII format.
     */
    Username?: SensitiveString;
    /**
     * The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.
     */
    Password?: SensitiveString;
  }
  export type CredentialList = Credential[];
  export interface DeleteAccountRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
  }
  export interface DeleteAccountResponse {
  }
  export interface DeleteEventsConfigurationRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The bot ID.
     */
    BotId: NonEmptyString;
  }
  export interface DeletePhoneNumberRequest {
    /**
     * The phone number ID.
     */
    PhoneNumberId: String;
  }
  export interface DeleteVoiceConnectorOriginationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorTerminationCredentialsRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.
     */
    Usernames?: SensitiveStringList;
  }
  export interface DeleteVoiceConnectorTerminationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface DisassociatePhoneNumberFromUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: String;
    /**
     * The user ID.
     */
    UserId: String;
  }
  export interface DisassociatePhoneNumberFromUserResponse {
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * List of phone numbers, in E.164 format.
     */
    E164PhoneNumbers?: E164PhoneNumberList;
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
    /**
     * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
     */
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export type E164PhoneNumber = string;
  export type E164PhoneNumberList = E164PhoneNumber[];
  export type EmailAddress = string;
  export type EmailStatus = "NotSent"|"Sent"|"Failed"|string;
  export type ErrorCode = "Unauthorized"|"Forbidden"|"NotFound"|"BadRequest"|"Conflict"|"ServiceFailure"|"ServiceUnavailable"|"Unprocessable"|"Throttled"|"PreconditionFailed"|string;
  export interface EventsConfiguration {
    /**
     * The bot ID.
     */
    BotId?: String;
    /**
     * HTTPS endpoint that allows a bot to receive outgoing events.
     */
    OutboundEventsHTTPSEndpoint?: SensitiveString;
    /**
     * Lambda function ARN that allows a bot to receive outgoing events.
     */
    LambdaFunctionArn?: SensitiveString;
  }
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
  export interface GetBotRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The bot ID.
     */
    BotId: NonEmptyString;
  }
  export interface GetBotResponse {
    /**
     * The chat bot details.
     */
    Bot?: Bot;
  }
  export interface GetEventsConfigurationRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The bot ID.
     */
    BotId: NonEmptyString;
  }
  export interface GetEventsConfigurationResponse {
    /**
     * The events configuration details.
     */
    EventsConfiguration?: EventsConfiguration;
  }
  export interface GetGlobalSettingsResponse {
    /**
     * The Amazon Chime Business Calling settings.
     */
    BusinessCalling?: BusinessCallingSettings;
    /**
     * The Amazon Chime Voice Connector settings.
     */
    VoiceConnector?: VoiceConnectorSettings;
  }
  export interface GetPhoneNumberOrderRequest {
    /**
     * The ID for the phone number order.
     */
    PhoneNumberOrderId: GuidString;
  }
  export interface GetPhoneNumberOrderResponse {
    /**
     * The phone number order details.
     */
    PhoneNumberOrder?: PhoneNumberOrder;
  }
  export interface GetPhoneNumberRequest {
    /**
     * The phone number ID.
     */
    PhoneNumberId: String;
  }
  export interface GetPhoneNumberResponse {
    /**
     * The phone number details.
     */
    PhoneNumber?: PhoneNumber;
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
  export interface GetUserSettingsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: String;
    /**
     * The user ID.
     */
    UserId: String;
  }
  export interface GetUserSettingsResponse {
    /**
     * The user settings.
     */
    UserSettings?: UserSettings;
  }
  export interface GetVoiceConnectorOriginationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorOriginationResponse {
    /**
     * The origination setting details.
     */
    Origination?: Origination;
  }
  export interface GetVoiceConnectorRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorResponse {
    /**
     * The Amazon Chime Voice Connector details.
     */
    VoiceConnector?: VoiceConnector;
  }
  export interface GetVoiceConnectorTerminationHealthRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorTerminationHealthResponse {
    /**
     * The termination health details.
     */
    TerminationHealth?: TerminationHealth;
  }
  export interface GetVoiceConnectorTerminationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorTerminationResponse {
    /**
     * The termination setting details.
     */
    Termination?: Termination;
  }
  export type GuidString = string;
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
  export interface ListBotsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The maximum number of results to return in a single call. Default is 10.
     */
    MaxResults?: ResultMax;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListBotsResponse {
    /**
     * List of bots and bot details.
     */
    Bots?: BotList;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListPhoneNumberOrdersRequest {
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
  }
  export interface ListPhoneNumberOrdersResponse {
    /**
     * The phone number order details.
     */
    PhoneNumberOrders?: PhoneNumberOrderList;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListPhoneNumbersRequest {
    /**
     * The phone number status.
     */
    Status?: PhoneNumberStatus;
    /**
     * The phone number product type.
     */
    ProductType?: PhoneNumberProductType;
    /**
     * The filter to use to limit the number of results.
     */
    FilterName?: PhoneNumberAssociationName;
    /**
     * The value to use for the filter.
     */
    FilterValue?: String;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListPhoneNumbersResponse {
    /**
     * The phone number details.
     */
    PhoneNumbers?: PhoneNumberList;
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
     * Optional. The user email address used to filter results. Maximum 1.
     */
    UserEmail?: EmailAddress;
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
  export interface ListVoiceConnectorTerminationCredentialsRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface ListVoiceConnectorTerminationCredentialsResponse {
    /**
     * A list of user names.
     */
    Usernames?: SensitiveStringList;
  }
  export interface ListVoiceConnectorsRequest {
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
  }
  export interface ListVoiceConnectorsResponse {
    /**
     * The details of the Amazon Chime Voice Connectors.
     */
    VoiceConnectors?: VoiceConnectorList;
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
  export type NonEmptyStringList = String[];
  export type NullableBoolean = boolean;
  export interface OrderedPhoneNumber {
    /**
     * The phone number, in E.164 format.
     */
    E164PhoneNumber?: E164PhoneNumber;
    /**
     * The phone number status.
     */
    Status?: OrderedPhoneNumberStatus;
  }
  export type OrderedPhoneNumberList = OrderedPhoneNumber[];
  export type OrderedPhoneNumberStatus = "Processing"|"Acquired"|"Failed"|string;
  export interface Origination {
    /**
     * The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1. Maximum value of 20.
     */
    Routes?: OriginationRouteList;
    /**
     * When origination settings are disabled, inbound calls are not enabled for your Amazon Chime Voice Connector.
     */
    Disabled?: Boolean;
  }
  export interface OriginationRoute {
    /**
     * The FODN or IP address to contact for origination traffic.
     */
    Host?: String;
    /**
     * The designated origination route port. Defaults to 5060.
     */
    Port?: Port;
    /**
     * The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.
     */
    Protocol?: OriginationRouteProtocol;
    /**
     * The priority associated with the host, with 1 being the highest priority. Higher priority hosts are attempted first.
     */
    Priority?: OriginationRoutePriority;
    /**
     * The weight associated with the host. If hosts are equal in priority, calls are distributed among them based on their relative weight.
     */
    Weight?: OriginationRouteWeight;
  }
  export type OriginationRouteList = OriginationRoute[];
  export type OriginationRoutePriority = number;
  export type OriginationRouteProtocol = "TCP"|"UDP"|string;
  export type OriginationRouteWeight = number;
  export interface PhoneNumber {
    /**
     * The phone number ID.
     */
    PhoneNumberId?: String;
    /**
     * The phone number, in E.164 format.
     */
    E164PhoneNumber?: E164PhoneNumber;
    /**
     * The phone number product type.
     */
    ProductType?: PhoneNumberProductType;
    /**
     * The phone number status.
     */
    Status?: PhoneNumberStatus;
    /**
     * The phone number capabilities.
     */
    Capabilities?: PhoneNumberCapabilities;
    /**
     * The phone number associations.
     */
    Associations?: PhoneNumberAssociationList;
    /**
     * The phone number creation timestamp, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The updated phone number timestamp, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
    /**
     * The deleted phone number timestamp, in ISO 8601 format.
     */
    DeletionTimestamp?: Iso8601Timestamp;
  }
  export interface PhoneNumberAssociation {
    /**
     * Contains the ID for the entity specified in Name.
     */
    Value?: String;
    /**
     * Defines the association with an Amazon Chime account ID, user ID, or Amazon Chime Voice Connector ID.
     */
    Name?: PhoneNumberAssociationName;
    /**
     * The timestamp of the phone number association, in ISO 8601 format.
     */
    AssociatedTimestamp?: Iso8601Timestamp;
  }
  export type PhoneNumberAssociationList = PhoneNumberAssociation[];
  export type PhoneNumberAssociationName = "AccountId"|"UserId"|"VoiceConnectorId"|string;
  export interface PhoneNumberCapabilities {
    /**
     * Allows or denies inbound calling for the specified phone number.
     */
    InboundCall?: NullableBoolean;
    /**
     * Allows or denies outbound calling for the specified phone number.
     */
    OutboundCall?: NullableBoolean;
    /**
     * Allows or denies inbound SMS messaging for the specified phone number.
     */
    InboundSMS?: NullableBoolean;
    /**
     * Allows or denies outbound SMS messaging for the specified phone number.
     */
    OutboundSMS?: NullableBoolean;
    /**
     * Allows or denies inbound MMS messaging for the specified phone number.
     */
    InboundMMS?: NullableBoolean;
    /**
     * Allows or denies outbound MMS messaging for the specified phone number.
     */
    OutboundMMS?: NullableBoolean;
  }
  export interface PhoneNumberError {
    /**
     * The phone number ID for which the action failed.
     */
    PhoneNumberId?: NonEmptyString;
    /**
     * The error code.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message.
     */
    ErrorMessage?: String;
  }
  export type PhoneNumberErrorList = PhoneNumberError[];
  export type PhoneNumberList = PhoneNumber[];
  export type PhoneNumberMaxResults = number;
  export interface PhoneNumberOrder {
    /**
     * The phone number order ID.
     */
    PhoneNumberOrderId?: GuidString;
    /**
     * The phone number order product type.
     */
    ProductType?: PhoneNumberProductType;
    /**
     * The status of the phone number order.
     */
    Status?: PhoneNumberOrderStatus;
    /**
     * The ordered phone number details, such as the phone number in E.164 format and the phone number status.
     */
    OrderedPhoneNumbers?: OrderedPhoneNumberList;
    /**
     * The phone number order creation timestamp, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The updated phone number order timestamp, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type PhoneNumberOrderList = PhoneNumberOrder[];
  export type PhoneNumberOrderStatus = "Processing"|"Successful"|"Failed"|"Partial"|string;
  export type PhoneNumberProductType = "BusinessCalling"|"VoiceConnector"|string;
  export type PhoneNumberStatus = "AcquireInProgress"|"AcquireFailed"|"Unassigned"|"Assigned"|"ReleaseInProgress"|"DeleteInProgress"|"ReleaseFailed"|"DeleteFailed"|string;
  export type Port = number;
  export type ProfileServiceMaxResults = number;
  export interface PutEventsConfigurationRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The bot ID.
     */
    BotId: NonEmptyString;
    /**
     * HTTPS endpoint that allows the bot to receive outgoing events.
     */
    OutboundEventsHTTPSEndpoint?: SensitiveString;
    /**
     * Lambda function ARN that allows the bot to receive outgoing events.
     */
    LambdaFunctionArn?: SensitiveString;
  }
  export interface PutEventsConfigurationResponse {
    EventsConfiguration?: EventsConfiguration;
  }
  export interface PutVoiceConnectorOriginationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The origination setting details to add.
     */
    Origination: Origination;
  }
  export interface PutVoiceConnectorOriginationResponse {
    /**
     * The updated origination setting details.
     */
    Origination?: Origination;
  }
  export interface PutVoiceConnectorTerminationCredentialsRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The termination SIP credentials.
     */
    Credentials?: CredentialList;
  }
  export interface PutVoiceConnectorTerminationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The termination setting details to add.
     */
    Termination: Termination;
  }
  export interface PutVoiceConnectorTerminationResponse {
    /**
     * The updated termination setting details.
     */
    Termination?: Termination;
  }
  export interface RegenerateSecurityTokenRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The bot ID.
     */
    BotId: NonEmptyString;
  }
  export interface RegenerateSecurityTokenResponse {
    Bot?: Bot;
  }
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
  export interface RestorePhoneNumberRequest {
    /**
     * The phone number.
     */
    PhoneNumberId: NonEmptyString;
  }
  export interface RestorePhoneNumberResponse {
    /**
     * The phone number details.
     */
    PhoneNumber?: PhoneNumber;
  }
  export type ResultMax = number;
  export interface SearchAvailablePhoneNumbersRequest {
    /**
     * The area code used to filter results.
     */
    AreaCode?: String;
    /**
     * The city used to filter results.
     */
    City?: String;
    /**
     * The country used to filter results.
     */
    Country?: String;
    /**
     * The state used to filter results.
     */
    State?: String;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: PhoneNumberMaxResults;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface SearchAvailablePhoneNumbersResponse {
    /**
     * List of phone numbers, in E.164 format.
     */
    E164PhoneNumbers?: E164PhoneNumberList;
  }
  export type SensitiveString = string;
  export type SensitiveStringList = SensitiveString[];
  export type String = string;
  export type StringList = String[];
  export interface TelephonySettings {
    /**
     * Allows or denies inbound calling.
     */
    InboundCalling: Boolean;
    /**
     * Allows or denies outbound calling.
     */
    OutboundCalling: Boolean;
    /**
     * Allows or denies SMS messaging.
     */
    SMS: Boolean;
  }
  export interface Termination {
    /**
     * The limit on calls per second. Max value based on account service limit. Default value of 1.
     */
    CpsLimit?: CpsLimit;
    /**
     * The default caller ID phone number.
     */
    DefaultPhoneNumber?: E164PhoneNumber;
    /**
     * The countries to which calls are allowed.
     */
    CallingRegions?: CallingRegionList;
    /**
     * The IP addresses allowed to make calls, in CIDR format.
     */
    CidrAllowedList?: StringList;
    /**
     * When termination settings are disabled, outbound calls can not be made.
     */
    Disabled?: Boolean;
  }
  export interface TerminationHealth {
    /**
     * The timestamp, in ISO 8601 format.
     */
    Timestamp?: Iso8601Timestamp;
    /**
     * The source IP address.
     */
    Source?: String;
  }
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
  export interface UpdateBotRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The bot ID.
     */
    BotId: NonEmptyString;
    /**
     * When true, stops the specified bot from running in your account.
     */
    Disabled?: NullableBoolean;
  }
  export interface UpdateBotResponse {
    /**
     * The updated bot details.
     */
    Bot?: Bot;
  }
  export interface UpdateGlobalSettingsRequest {
    /**
     * The Amazon Chime Business Calling settings.
     */
    BusinessCalling: BusinessCallingSettings;
    /**
     * The Amazon Chime Voice Connector settings.
     */
    VoiceConnector: VoiceConnectorSettings;
  }
  export interface UpdatePhoneNumberRequest {
    /**
     * The phone number ID.
     */
    PhoneNumberId: String;
    /**
     * The product type.
     */
    ProductType?: PhoneNumberProductType;
  }
  export interface UpdatePhoneNumberRequestItem {
    /**
     * The phone number ID to update.
     */
    PhoneNumberId: NonEmptyString;
    /**
     * The product type to update.
     */
    ProductType?: PhoneNumberProductType;
  }
  export type UpdatePhoneNumberRequestItemList = UpdatePhoneNumberRequestItem[];
  export interface UpdatePhoneNumberResponse {
    /**
     * The updated phone number details.
     */
    PhoneNumber?: PhoneNumber;
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
  export interface UpdateUserSettingsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: String;
    /**
     * The user ID.
     */
    UserId: String;
    /**
     * The user settings to update.
     */
    UserSettings: UserSettings;
  }
  export interface UpdateVoiceConnectorRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The name of the Amazon Chime Voice Connector.
     */
    Name: VoiceConnectorName;
    /**
     * When enabled, requires encryption for the Amazon Chime Voice Connector.
     */
    RequireEncryption: Boolean;
  }
  export interface UpdateVoiceConnectorResponse {
    /**
     * The Amazon Chime Voice Connector details.
     */
    VoiceConnector?: VoiceConnector;
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
     * The primary phone number associated with the user.
     */
    PrimaryProvisionedNumber?: SensitiveString;
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
  export interface UserSettings {
    /**
     * The telephony settings associated with the user.
     */
    Telephony: TelephonySettings;
  }
  export interface VoiceConnector {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId?: NonEmptyString;
    /**
     * The name of the Amazon Chime Voice Connector.
     */
    Name?: VoiceConnectorName;
    /**
     * The outbound host name for the Amazon Chime Voice Connector.
     */
    OutboundHostName?: String;
    /**
     * Designates whether encryption is required for the Amazon Chime Voice Connector.
     */
    RequireEncryption?: Boolean;
    /**
     * The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type VoiceConnectorList = VoiceConnector[];
  export type VoiceConnectorName = string;
  export interface VoiceConnectorSettings {
    /**
     * The Amazon S3 bucket designated for call detail record storage.
     */
    CdrBucket?: String;
  }
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
