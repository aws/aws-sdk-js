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
   * Associates phone numbers with the specified Amazon Chime Voice Connector.
   */
  associatePhoneNumbersWithVoiceConnector(params: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorRequest, callback?: (err: AWSError, data: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorResponse) => void): Request<Chime.Types.AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError>;
  /**
   * Associates phone numbers with the specified Amazon Chime Voice Connector.
   */
  associatePhoneNumbersWithVoiceConnector(callback?: (err: AWSError, data: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorResponse) => void): Request<Chime.Types.AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError>;
  /**
   * Associates phone numbers with the specified Amazon Chime Voice Connector group.
   */
  associatePhoneNumbersWithVoiceConnectorGroup(params: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorGroupRequest, callback?: (err: AWSError, data: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorGroupResponse) => void): Request<Chime.Types.AssociatePhoneNumbersWithVoiceConnectorGroupResponse, AWSError>;
  /**
   * Associates phone numbers with the specified Amazon Chime Voice Connector group.
   */
  associatePhoneNumbersWithVoiceConnectorGroup(callback?: (err: AWSError, data: Chime.Types.AssociatePhoneNumbersWithVoiceConnectorGroupResponse) => void): Request<Chime.Types.AssociatePhoneNumbersWithVoiceConnectorGroupResponse, AWSError>;
  /**
   * Associates the specified sign-in delegate groups with the specified Amazon Chime account.
   */
  associateSigninDelegateGroupsWithAccount(params: Chime.Types.AssociateSigninDelegateGroupsWithAccountRequest, callback?: (err: AWSError, data: Chime.Types.AssociateSigninDelegateGroupsWithAccountResponse) => void): Request<Chime.Types.AssociateSigninDelegateGroupsWithAccountResponse, AWSError>;
  /**
   * Associates the specified sign-in delegate groups with the specified Amazon Chime account.
   */
  associateSigninDelegateGroupsWithAccount(callback?: (err: AWSError, data: Chime.Types.AssociateSigninDelegateGroupsWithAccountResponse) => void): Request<Chime.Types.AssociateSigninDelegateGroupsWithAccountResponse, AWSError>;
  /**
   * Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide. 
   */
  batchCreateAttendee(params: Chime.Types.BatchCreateAttendeeRequest, callback?: (err: AWSError, data: Chime.Types.BatchCreateAttendeeResponse) => void): Request<Chime.Types.BatchCreateAttendeeResponse, AWSError>;
  /**
   * Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide. 
   */
  batchCreateAttendee(callback?: (err: AWSError, data: Chime.Types.BatchCreateAttendeeResponse) => void): Request<Chime.Types.BatchCreateAttendeeResponse, AWSError>;
  /**
   * Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be either users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.
   */
  batchCreateRoomMembership(params: Chime.Types.BatchCreateRoomMembershipRequest, callback?: (err: AWSError, data: Chime.Types.BatchCreateRoomMembershipResponse) => void): Request<Chime.Types.BatchCreateRoomMembershipResponse, AWSError>;
  /**
   * Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be either users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.
   */
  batchCreateRoomMembership(callback?: (err: AWSError, data: Chime.Types.BatchCreateRoomMembershipResponse) => void): Request<Chime.Types.BatchCreateRoomMembershipResponse, AWSError>;
  /**
   * Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.
   */
  batchDeletePhoneNumber(params: Chime.Types.BatchDeletePhoneNumberRequest, callback?: (err: AWSError, data: Chime.Types.BatchDeletePhoneNumberResponse) => void): Request<Chime.Types.BatchDeletePhoneNumberResponse, AWSError>;
  /**
   * Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.
   */
  batchDeletePhoneNumber(callback?: (err: AWSError, data: Chime.Types.BatchDeletePhoneNumberResponse) => void): Request<Chime.Types.BatchDeletePhoneNumberResponse, AWSError>;
  /**
   * Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are disassociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action.  To sign out users without suspending them, use the LogoutUser action.
   */
  batchSuspendUser(params: Chime.Types.BatchSuspendUserRequest, callback?: (err: AWSError, data: Chime.Types.BatchSuspendUserResponse) => void): Request<Chime.Types.BatchSuspendUserResponse, AWSError>;
  /**
   * Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are disassociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action.  To sign out users without suspending them, use the LogoutUser action.
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
   * Updates phone number product types or calling names. You can update one attribute at a time for each UpdatePhoneNumberRequestItem. For example, you can update either the product type or the calling name. For product types, choose from Amazon Chime Business Calling and Amazon Chime Voice Connector. For toll-free numbers, you must use the Amazon Chime Voice Connector product type. Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.
   */
  batchUpdatePhoneNumber(params: Chime.Types.BatchUpdatePhoneNumberRequest, callback?: (err: AWSError, data: Chime.Types.BatchUpdatePhoneNumberResponse) => void): Request<Chime.Types.BatchUpdatePhoneNumberResponse, AWSError>;
  /**
   * Updates phone number product types or calling names. You can update one attribute at a time for each UpdatePhoneNumberRequestItem. For example, you can update either the product type or the calling name. For product types, choose from Amazon Chime Business Calling and Amazon Chime Voice Connector. For toll-free numbers, you must use the Amazon Chime Voice Connector product type. Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.
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
   * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  createAttendee(params: Chime.Types.CreateAttendeeRequest, callback?: (err: AWSError, data: Chime.Types.CreateAttendeeResponse) => void): Request<Chime.Types.CreateAttendeeResponse, AWSError>;
  /**
   * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  createAttendee(callback?: (err: AWSError, data: Chime.Types.CreateAttendeeResponse) => void): Request<Chime.Types.CreateAttendeeResponse, AWSError>;
  /**
   * Creates a bot for an Amazon Chime Enterprise account.
   */
  createBot(params: Chime.Types.CreateBotRequest, callback?: (err: AWSError, data: Chime.Types.CreateBotResponse) => void): Request<Chime.Types.CreateBotResponse, AWSError>;
  /**
   * Creates a bot for an Amazon Chime Enterprise account.
   */
  createBot(callback?: (err: AWSError, data: Chime.Types.CreateBotResponse) => void): Request<Chime.Types.CreateBotResponse, AWSError>;
  /**
   * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see Amazon Chime SDK Media Regions in the Amazon Chime Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  createMeeting(params: Chime.Types.CreateMeetingRequest, callback?: (err: AWSError, data: Chime.Types.CreateMeetingResponse) => void): Request<Chime.Types.CreateMeetingResponse, AWSError>;
  /**
   * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see Amazon Chime SDK Media Regions in the Amazon Chime Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  createMeeting(callback?: (err: AWSError, data: Chime.Types.CreateMeetingResponse) => void): Request<Chime.Types.CreateMeetingResponse, AWSError>;
  /**
   * Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see Amazon Chime SDK Media Regions in the Amazon Chime Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  createMeetingWithAttendees(params: Chime.Types.CreateMeetingWithAttendeesRequest, callback?: (err: AWSError, data: Chime.Types.CreateMeetingWithAttendeesResponse) => void): Request<Chime.Types.CreateMeetingWithAttendeesResponse, AWSError>;
  /**
   * Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see Amazon Chime SDK Media Regions in the Amazon Chime Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  createMeetingWithAttendees(callback?: (err: AWSError, data: Chime.Types.CreateMeetingWithAttendeesResponse) => void): Request<Chime.Types.CreateMeetingWithAttendeesResponse, AWSError>;
  /**
   * Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types. For toll-free numbers, you must use the Amazon Chime Voice Connector product type.
   */
  createPhoneNumberOrder(params: Chime.Types.CreatePhoneNumberOrderRequest, callback?: (err: AWSError, data: Chime.Types.CreatePhoneNumberOrderResponse) => void): Request<Chime.Types.CreatePhoneNumberOrderResponse, AWSError>;
  /**
   * Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types. For toll-free numbers, you must use the Amazon Chime Voice Connector product type.
   */
  createPhoneNumberOrder(callback?: (err: AWSError, data: Chime.Types.CreatePhoneNumberOrderResponse) => void): Request<Chime.Types.CreatePhoneNumberOrderResponse, AWSError>;
  /**
   * Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.
   */
  createProxySession(params: Chime.Types.CreateProxySessionRequest, callback?: (err: AWSError, data: Chime.Types.CreateProxySessionResponse) => void): Request<Chime.Types.CreateProxySessionResponse, AWSError>;
  /**
   * Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.
   */
  createProxySession(callback?: (err: AWSError, data: Chime.Types.CreateProxySessionResponse) => void): Request<Chime.Types.CreateProxySessionResponse, AWSError>;
  /**
   * Creates a chat room for the specified Amazon Chime Enterprise account.
   */
  createRoom(params: Chime.Types.CreateRoomRequest, callback?: (err: AWSError, data: Chime.Types.CreateRoomResponse) => void): Request<Chime.Types.CreateRoomResponse, AWSError>;
  /**
   * Creates a chat room for the specified Amazon Chime Enterprise account.
   */
  createRoom(callback?: (err: AWSError, data: Chime.Types.CreateRoomResponse) => void): Request<Chime.Types.CreateRoomResponse, AWSError>;
  /**
   * Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.
   */
  createRoomMembership(params: Chime.Types.CreateRoomMembershipRequest, callback?: (err: AWSError, data: Chime.Types.CreateRoomMembershipResponse) => void): Request<Chime.Types.CreateRoomMembershipResponse, AWSError>;
  /**
   * Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.
   */
  createRoomMembership(callback?: (err: AWSError, data: Chime.Types.CreateRoomMembershipResponse) => void): Request<Chime.Types.CreateRoomMembershipResponse, AWSError>;
  /**
   * Creates a user under the specified Amazon Chime account.
   */
  createUser(params: Chime.Types.CreateUserRequest, callback?: (err: AWSError, data: Chime.Types.CreateUserResponse) => void): Request<Chime.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a user under the specified Amazon Chime account.
   */
  createUser(callback?: (err: AWSError, data: Chime.Types.CreateUserResponse) => void): Request<Chime.Types.CreateUserResponse, AWSError>;
  /**
   * Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region. Enabling CreateVoiceConnectorRequest$RequireEncryption configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.
   */
  createVoiceConnector(params: Chime.Types.CreateVoiceConnectorRequest, callback?: (err: AWSError, data: Chime.Types.CreateVoiceConnectorResponse) => void): Request<Chime.Types.CreateVoiceConnectorResponse, AWSError>;
  /**
   * Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region. Enabling CreateVoiceConnectorRequest$RequireEncryption configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.
   */
  createVoiceConnector(callback?: (err: AWSError, data: Chime.Types.CreateVoiceConnectorResponse) => void): Request<Chime.Types.CreateVoiceConnectorResponse, AWSError>;
  /**
   * Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including VoiceConnectorItems in the request. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.
   */
  createVoiceConnectorGroup(params: Chime.Types.CreateVoiceConnectorGroupRequest, callback?: (err: AWSError, data: Chime.Types.CreateVoiceConnectorGroupResponse) => void): Request<Chime.Types.CreateVoiceConnectorGroupResponse, AWSError>;
  /**
   * Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including VoiceConnectorItems in the request. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.
   */
  createVoiceConnectorGroup(callback?: (err: AWSError, data: Chime.Types.CreateVoiceConnectorGroupResponse) => void): Request<Chime.Types.CreateVoiceConnectorGroupResponse, AWSError>;
  /**
   * Deletes the specified Amazon Chime account. You must suspend all users before deleting a Team account. You can use the BatchSuspendUser action to do so. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore a deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list.
   */
  deleteAccount(params: Chime.Types.DeleteAccountRequest, callback?: (err: AWSError, data: Chime.Types.DeleteAccountResponse) => void): Request<Chime.Types.DeleteAccountResponse, AWSError>;
  /**
   * Deletes the specified Amazon Chime account. You must suspend all users before deleting a Team account. You can use the BatchSuspendUser action to do so. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore a deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list.
   */
  deleteAccount(callback?: (err: AWSError, data: Chime.Types.DeleteAccountResponse) => void): Request<Chime.Types.DeleteAccountResponse, AWSError>;
  /**
   * Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their JoinToken. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  deleteAttendee(params: Chime.Types.DeleteAttendeeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their JoinToken. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  deleteAttendee(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the events configuration that allows a bot to receive outgoing events.
   */
  deleteEventsConfiguration(params: Chime.Types.DeleteEventsConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the events configuration that allows a bot to receive outgoing events.
   */
  deleteEventsConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Chime SDK meeting. When a meeting is deleted, its attendees are also deleted and clients can no longer join it. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  deleteMeeting(params: Chime.Types.DeleteMeetingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Chime SDK meeting. When a meeting is deleted, its attendees are also deleted and clients can no longer join it. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  deleteMeeting(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.
   */
  deletePhoneNumber(params: Chime.Types.DeletePhoneNumberRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.
   */
  deletePhoneNumber(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified proxy session from the specified Amazon Chime Voice Connector.
   */
  deleteProxySession(params: Chime.Types.DeleteProxySessionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified proxy session from the specified Amazon Chime Voice Connector.
   */
  deleteProxySession(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a chat room in an Amazon Chime Enterprise account.
   */
  deleteRoom(params: Chime.Types.DeleteRoomRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a chat room in an Amazon Chime Enterprise account.
   */
  deleteRoom(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a member from a chat room in an Amazon Chime Enterprise account.
   */
  deleteRoomMembership(params: Chime.Types.DeleteRoomMembershipRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a member from a chat room in an Amazon Chime Enterprise account.
   */
  deleteRoomMembership(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.
   */
  deleteVoiceConnector(params: Chime.Types.DeleteVoiceConnectorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.
   */
  deleteVoiceConnector(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorEmergencyCallingConfiguration(params: Chime.Types.DeleteVoiceConnectorEmergencyCallingConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorEmergencyCallingConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Chime Voice Connector group. Any VoiceConnectorItems and phone numbers associated with the group must be removed before it can be deleted.
   */
  deleteVoiceConnectorGroup(params: Chime.Types.DeleteVoiceConnectorGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Amazon Chime Voice Connector group. Any VoiceConnectorItems and phone numbers associated with the group must be removed before it can be deleted.
   */
  deleteVoiceConnectorGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the origination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings. 
   */
  deleteVoiceConnectorOrigination(params: Chime.Types.DeleteVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the origination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings. 
   */
  deleteVoiceConnectorOrigination(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the proxy configuration from the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorProxy(params: Chime.Types.DeleteVoiceConnectorProxyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the proxy configuration from the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorProxy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the streaming configuration for the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorStreamingConfiguration(params: Chime.Types.DeleteVoiceConnectorStreamingConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the streaming configuration for the specified Amazon Chime Voice Connector.
   */
  deleteVoiceConnectorStreamingConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the termination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings. 
   */
  deleteVoiceConnectorTermination(params: Chime.Types.DeleteVoiceConnectorTerminationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the termination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings. 
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
   * Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.
   */
  disassociatePhoneNumbersFromVoiceConnector(params: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorRequest, callback?: (err: AWSError, data: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse) => void): Request<Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError>;
  /**
   * Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.
   */
  disassociatePhoneNumbersFromVoiceConnector(callback?: (err: AWSError, data: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse) => void): Request<Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError>;
  /**
   * Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.
   */
  disassociatePhoneNumbersFromVoiceConnectorGroup(params: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupRequest, callback?: (err: AWSError, data: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse) => void): Request<Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse, AWSError>;
  /**
   * Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.
   */
  disassociatePhoneNumbersFromVoiceConnectorGroup(callback?: (err: AWSError, data: Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse) => void): Request<Chime.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse, AWSError>;
  /**
   * Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.
   */
  disassociateSigninDelegateGroupsFromAccount(params: Chime.Types.DisassociateSigninDelegateGroupsFromAccountRequest, callback?: (err: AWSError, data: Chime.Types.DisassociateSigninDelegateGroupsFromAccountResponse) => void): Request<Chime.Types.DisassociateSigninDelegateGroupsFromAccountResponse, AWSError>;
  /**
   * Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.
   */
  disassociateSigninDelegateGroupsFromAccount(callback?: (err: AWSError, data: Chime.Types.DisassociateSigninDelegateGroupsFromAccountResponse) => void): Request<Chime.Types.DisassociateSigninDelegateGroupsFromAccountResponse, AWSError>;
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
   * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  getAttendee(params: Chime.Types.GetAttendeeRequest, callback?: (err: AWSError, data: Chime.Types.GetAttendeeResponse) => void): Request<Chime.Types.GetAttendeeResponse, AWSError>;
  /**
   * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  getAttendee(callback?: (err: AWSError, data: Chime.Types.GetAttendeeResponse) => void): Request<Chime.Types.GetAttendeeResponse, AWSError>;
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
   * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  getMeeting(params: Chime.Types.GetMeetingRequest, callback?: (err: AWSError, data: Chime.Types.GetMeetingResponse) => void): Request<Chime.Types.GetMeetingResponse, AWSError>;
  /**
   * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  getMeeting(callback?: (err: AWSError, data: Chime.Types.GetMeetingResponse) => void): Request<Chime.Types.GetMeetingResponse, AWSError>;
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
   * Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.
   */
  getPhoneNumberSettings(callback?: (err: AWSError, data: Chime.Types.GetPhoneNumberSettingsResponse) => void): Request<Chime.Types.GetPhoneNumberSettingsResponse, AWSError>;
  /**
   * Gets the specified proxy session details for the specified Amazon Chime Voice Connector.
   */
  getProxySession(params: Chime.Types.GetProxySessionRequest, callback?: (err: AWSError, data: Chime.Types.GetProxySessionResponse) => void): Request<Chime.Types.GetProxySessionResponse, AWSError>;
  /**
   * Gets the specified proxy session details for the specified Amazon Chime Voice Connector.
   */
  getProxySession(callback?: (err: AWSError, data: Chime.Types.GetProxySessionResponse) => void): Request<Chime.Types.GetProxySessionResponse, AWSError>;
  /**
   * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide.
   */
  getRetentionSettings(params: Chime.Types.GetRetentionSettingsRequest, callback?: (err: AWSError, data: Chime.Types.GetRetentionSettingsResponse) => void): Request<Chime.Types.GetRetentionSettingsResponse, AWSError>;
  /**
   * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide.
   */
  getRetentionSettings(callback?: (err: AWSError, data: Chime.Types.GetRetentionSettingsResponse) => void): Request<Chime.Types.GetRetentionSettingsResponse, AWSError>;
  /**
   * Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.
   */
  getRoom(params: Chime.Types.GetRoomRequest, callback?: (err: AWSError, data: Chime.Types.GetRoomResponse) => void): Request<Chime.Types.GetRoomResponse, AWSError>;
  /**
   * Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.
   */
  getRoom(callback?: (err: AWSError, data: Chime.Types.GetRoomResponse) => void): Request<Chime.Types.GetRoomResponse, AWSError>;
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
   * Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorEmergencyCallingConfiguration(params: Chime.Types.GetVoiceConnectorEmergencyCallingConfigurationRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorEmergencyCallingConfigurationResponse) => void): Request<Chime.Types.GetVoiceConnectorEmergencyCallingConfigurationResponse, AWSError>;
  /**
   * Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorEmergencyCallingConfiguration(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorEmergencyCallingConfigurationResponse) => void): Request<Chime.Types.GetVoiceConnectorEmergencyCallingConfigurationResponse, AWSError>;
  /**
   * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps, name, and associated VoiceConnectorItems.
   */
  getVoiceConnectorGroup(params: Chime.Types.GetVoiceConnectorGroupRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorGroupResponse) => void): Request<Chime.Types.GetVoiceConnectorGroupResponse, AWSError>;
  /**
   * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps, name, and associated VoiceConnectorItems.
   */
  getVoiceConnectorGroup(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorGroupResponse) => void): Request<Chime.Types.GetVoiceConnectorGroupResponse, AWSError>;
  /**
   * Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
   */
  getVoiceConnectorLoggingConfiguration(params: Chime.Types.GetVoiceConnectorLoggingConfigurationRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorLoggingConfigurationResponse) => void): Request<Chime.Types.GetVoiceConnectorLoggingConfigurationResponse, AWSError>;
  /**
   * Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
   */
  getVoiceConnectorLoggingConfiguration(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorLoggingConfigurationResponse) => void): Request<Chime.Types.GetVoiceConnectorLoggingConfigurationResponse, AWSError>;
  /**
   * Retrieves origination setting details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorOrigination(params: Chime.Types.GetVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorOriginationResponse) => void): Request<Chime.Types.GetVoiceConnectorOriginationResponse, AWSError>;
  /**
   * Retrieves origination setting details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorOrigination(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorOriginationResponse) => void): Request<Chime.Types.GetVoiceConnectorOriginationResponse, AWSError>;
  /**
   * Gets the proxy configuration details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorProxy(params: Chime.Types.GetVoiceConnectorProxyRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorProxyResponse) => void): Request<Chime.Types.GetVoiceConnectorProxyResponse, AWSError>;
  /**
   * Gets the proxy configuration details for the specified Amazon Chime Voice Connector.
   */
  getVoiceConnectorProxy(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorProxyResponse) => void): Request<Chime.Types.GetVoiceConnectorProxyResponse, AWSError>;
  /**
   * Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.
   */
  getVoiceConnectorStreamingConfiguration(params: Chime.Types.GetVoiceConnectorStreamingConfigurationRequest, callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorStreamingConfigurationResponse) => void): Request<Chime.Types.GetVoiceConnectorStreamingConfigurationResponse, AWSError>;
  /**
   * Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.
   */
  getVoiceConnectorStreamingConfiguration(callback?: (err: AWSError, data: Chime.Types.GetVoiceConnectorStreamingConfigurationResponse) => void): Request<Chime.Types.GetVoiceConnectorStreamingConfigurationResponse, AWSError>;
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
   * Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime Team account. Only Team account types are currently supported for this action. 
   */
  inviteUsers(params: Chime.Types.InviteUsersRequest, callback?: (err: AWSError, data: Chime.Types.InviteUsersResponse) => void): Request<Chime.Types.InviteUsersResponse, AWSError>;
  /**
   * Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime Team account. Only Team account types are currently supported for this action. 
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
   * Lists the tags applied to an Amazon Chime SDK attendee resource.
   */
  listAttendeeTags(params: Chime.Types.ListAttendeeTagsRequest, callback?: (err: AWSError, data: Chime.Types.ListAttendeeTagsResponse) => void): Request<Chime.Types.ListAttendeeTagsResponse, AWSError>;
  /**
   * Lists the tags applied to an Amazon Chime SDK attendee resource.
   */
  listAttendeeTags(callback?: (err: AWSError, data: Chime.Types.ListAttendeeTagsResponse) => void): Request<Chime.Types.ListAttendeeTagsResponse, AWSError>;
  /**
   * Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  listAttendees(params: Chime.Types.ListAttendeesRequest, callback?: (err: AWSError, data: Chime.Types.ListAttendeesResponse) => void): Request<Chime.Types.ListAttendeesResponse, AWSError>;
  /**
   * Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  listAttendees(callback?: (err: AWSError, data: Chime.Types.ListAttendeesResponse) => void): Request<Chime.Types.ListAttendeesResponse, AWSError>;
  /**
   * Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.
   */
  listBots(params: Chime.Types.ListBotsRequest, callback?: (err: AWSError, data: Chime.Types.ListBotsResponse) => void): Request<Chime.Types.ListBotsResponse, AWSError>;
  /**
   * Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.
   */
  listBots(callback?: (err: AWSError, data: Chime.Types.ListBotsResponse) => void): Request<Chime.Types.ListBotsResponse, AWSError>;
  /**
   * Lists the tags applied to an Amazon Chime SDK meeting resource.
   */
  listMeetingTags(params: Chime.Types.ListMeetingTagsRequest, callback?: (err: AWSError, data: Chime.Types.ListMeetingTagsResponse) => void): Request<Chime.Types.ListMeetingTagsResponse, AWSError>;
  /**
   * Lists the tags applied to an Amazon Chime SDK meeting resource.
   */
  listMeetingTags(callback?: (err: AWSError, data: Chime.Types.ListMeetingTagsResponse) => void): Request<Chime.Types.ListMeetingTagsResponse, AWSError>;
  /**
   * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  listMeetings(params: Chime.Types.ListMeetingsRequest, callback?: (err: AWSError, data: Chime.Types.ListMeetingsResponse) => void): Request<Chime.Types.ListMeetingsResponse, AWSError>;
  /**
   * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide.
   */
  listMeetings(callback?: (err: AWSError, data: Chime.Types.ListMeetingsResponse) => void): Request<Chime.Types.ListMeetingsResponse, AWSError>;
  /**
   * Lists the phone number orders for the administrator's Amazon Chime account.
   */
  listPhoneNumberOrders(params: Chime.Types.ListPhoneNumberOrdersRequest, callback?: (err: AWSError, data: Chime.Types.ListPhoneNumberOrdersResponse) => void): Request<Chime.Types.ListPhoneNumberOrdersResponse, AWSError>;
  /**
   * Lists the phone number orders for the administrator's Amazon Chime account.
   */
  listPhoneNumberOrders(callback?: (err: AWSError, data: Chime.Types.ListPhoneNumberOrdersResponse) => void): Request<Chime.Types.ListPhoneNumberOrdersResponse, AWSError>;
  /**
   * Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.
   */
  listPhoneNumbers(params: Chime.Types.ListPhoneNumbersRequest, callback?: (err: AWSError, data: Chime.Types.ListPhoneNumbersResponse) => void): Request<Chime.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.
   */
  listPhoneNumbers(callback?: (err: AWSError, data: Chime.Types.ListPhoneNumbersResponse) => void): Request<Chime.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * Lists the proxy sessions for the specified Amazon Chime Voice Connector.
   */
  listProxySessions(params: Chime.Types.ListProxySessionsRequest, callback?: (err: AWSError, data: Chime.Types.ListProxySessionsResponse) => void): Request<Chime.Types.ListProxySessionsResponse, AWSError>;
  /**
   * Lists the proxy sessions for the specified Amazon Chime Voice Connector.
   */
  listProxySessions(callback?: (err: AWSError, data: Chime.Types.ListProxySessionsResponse) => void): Request<Chime.Types.ListProxySessionsResponse, AWSError>;
  /**
   * Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.
   */
  listRoomMemberships(params: Chime.Types.ListRoomMembershipsRequest, callback?: (err: AWSError, data: Chime.Types.ListRoomMembershipsResponse) => void): Request<Chime.Types.ListRoomMembershipsResponse, AWSError>;
  /**
   * Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.
   */
  listRoomMemberships(callback?: (err: AWSError, data: Chime.Types.ListRoomMembershipsResponse) => void): Request<Chime.Types.ListRoomMembershipsResponse, AWSError>;
  /**
   * Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.
   */
  listRooms(params: Chime.Types.ListRoomsRequest, callback?: (err: AWSError, data: Chime.Types.ListRoomsResponse) => void): Request<Chime.Types.ListRoomsResponse, AWSError>;
  /**
   * Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.
   */
  listRooms(callback?: (err: AWSError, data: Chime.Types.ListRoomsResponse) => void): Request<Chime.Types.ListRoomsResponse, AWSError>;
  /**
   * Lists the tags applied to an Amazon Chime SDK meeting resource.
   */
  listTagsForResource(params: Chime.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Chime.Types.ListTagsForResourceResponse) => void): Request<Chime.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags applied to an Amazon Chime SDK meeting resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Chime.Types.ListTagsForResourceResponse) => void): Request<Chime.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.
   */
  listUsers(params: Chime.Types.ListUsersRequest, callback?: (err: AWSError, data: Chime.Types.ListUsersResponse) => void): Request<Chime.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.
   */
  listUsers(callback?: (err: AWSError, data: Chime.Types.ListUsersResponse) => void): Request<Chime.Types.ListUsersResponse, AWSError>;
  /**
   * Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.
   */
  listVoiceConnectorGroups(params: Chime.Types.ListVoiceConnectorGroupsRequest, callback?: (err: AWSError, data: Chime.Types.ListVoiceConnectorGroupsResponse) => void): Request<Chime.Types.ListVoiceConnectorGroupsResponse, AWSError>;
  /**
   * Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.
   */
  listVoiceConnectorGroups(callback?: (err: AWSError, data: Chime.Types.ListVoiceConnectorGroupsResponse) => void): Request<Chime.Types.ListVoiceConnectorGroupsResponse, AWSError>;
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
   * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see Logging Amazon Chime API Calls with AWS CloudTrail in the Amazon Chime Administration Guide. To turn off existing retention settings, remove the number of days from the corresponding RetentionDays field in the RetentionSettings object. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide.
   */
  putRetentionSettings(params: Chime.Types.PutRetentionSettingsRequest, callback?: (err: AWSError, data: Chime.Types.PutRetentionSettingsResponse) => void): Request<Chime.Types.PutRetentionSettingsResponse, AWSError>;
  /**
   * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see Logging Amazon Chime API Calls with AWS CloudTrail in the Amazon Chime Administration Guide. To turn off existing retention settings, remove the number of days from the corresponding RetentionDays field in the RetentionSettings object. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide.
   */
  putRetentionSettings(callback?: (err: AWSError, data: Chime.Types.PutRetentionSettingsResponse) => void): Request<Chime.Types.PutRetentionSettingsResponse, AWSError>;
  /**
   * Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.
   */
  putVoiceConnectorEmergencyCallingConfiguration(params: Chime.Types.PutVoiceConnectorEmergencyCallingConfigurationRequest, callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorEmergencyCallingConfigurationResponse) => void): Request<Chime.Types.PutVoiceConnectorEmergencyCallingConfigurationResponse, AWSError>;
  /**
   * Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.
   */
  putVoiceConnectorEmergencyCallingConfiguration(callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorEmergencyCallingConfigurationResponse) => void): Request<Chime.Types.PutVoiceConnectorEmergencyCallingConfigurationResponse, AWSError>;
  /**
   * Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
   */
  putVoiceConnectorLoggingConfiguration(params: Chime.Types.PutVoiceConnectorLoggingConfigurationRequest, callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorLoggingConfigurationResponse) => void): Request<Chime.Types.PutVoiceConnectorLoggingConfigurationResponse, AWSError>;
  /**
   * Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
   */
  putVoiceConnectorLoggingConfiguration(callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorLoggingConfigurationResponse) => void): Request<Chime.Types.PutVoiceConnectorLoggingConfigurationResponse, AWSError>;
  /**
   * Adds origination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings. 
   */
  putVoiceConnectorOrigination(params: Chime.Types.PutVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorOriginationResponse) => void): Request<Chime.Types.PutVoiceConnectorOriginationResponse, AWSError>;
  /**
   * Adds origination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings. 
   */
  putVoiceConnectorOrigination(callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorOriginationResponse) => void): Request<Chime.Types.PutVoiceConnectorOriginationResponse, AWSError>;
  /**
   * Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.
   */
  putVoiceConnectorProxy(params: Chime.Types.PutVoiceConnectorProxyRequest, callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorProxyResponse) => void): Request<Chime.Types.PutVoiceConnectorProxyResponse, AWSError>;
  /**
   * Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.
   */
  putVoiceConnectorProxy(callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorProxyResponse) => void): Request<Chime.Types.PutVoiceConnectorProxyResponse, AWSError>;
  /**
   * Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Amazon Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.
   */
  putVoiceConnectorStreamingConfiguration(params: Chime.Types.PutVoiceConnectorStreamingConfigurationRequest, callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorStreamingConfigurationResponse) => void): Request<Chime.Types.PutVoiceConnectorStreamingConfigurationResponse, AWSError>;
  /**
   * Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Amazon Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.
   */
  putVoiceConnectorStreamingConfiguration(callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorStreamingConfigurationResponse) => void): Request<Chime.Types.PutVoiceConnectorStreamingConfigurationResponse, AWSError>;
  /**
   * Adds termination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings. 
   */
  putVoiceConnectorTermination(params: Chime.Types.PutVoiceConnectorTerminationRequest, callback?: (err: AWSError, data: Chime.Types.PutVoiceConnectorTerminationResponse) => void): Request<Chime.Types.PutVoiceConnectorTerminationResponse, AWSError>;
  /**
   * Adds termination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings. 
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
   * Redacts the specified message from the specified Amazon Chime conversation.
   */
  redactConversationMessage(params: Chime.Types.RedactConversationMessageRequest, callback?: (err: AWSError, data: Chime.Types.RedactConversationMessageResponse) => void): Request<Chime.Types.RedactConversationMessageResponse, AWSError>;
  /**
   * Redacts the specified message from the specified Amazon Chime conversation.
   */
  redactConversationMessage(callback?: (err: AWSError, data: Chime.Types.RedactConversationMessageResponse) => void): Request<Chime.Types.RedactConversationMessageResponse, AWSError>;
  /**
   * Redacts the specified message from the specified Amazon Chime chat room.
   */
  redactRoomMessage(params: Chime.Types.RedactRoomMessageRequest, callback?: (err: AWSError, data: Chime.Types.RedactRoomMessageResponse) => void): Request<Chime.Types.RedactRoomMessageResponse, AWSError>;
  /**
   * Redacts the specified message from the specified Amazon Chime chat room.
   */
  redactRoomMessage(callback?: (err: AWSError, data: Chime.Types.RedactRoomMessageResponse) => void): Request<Chime.Types.RedactRoomMessageResponse, AWSError>;
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
   * Applies the specified tags to the specified Amazon Chime SDK attendee.
   */
  tagAttendee(params: Chime.Types.TagAttendeeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Applies the specified tags to the specified Amazon Chime SDK attendee.
   */
  tagAttendee(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Applies the specified tags to the specified Amazon Chime SDK meeting.
   */
  tagMeeting(params: Chime.Types.TagMeetingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Applies the specified tags to the specified Amazon Chime SDK meeting.
   */
  tagMeeting(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Applies the specified tags to the specified Amazon Chime SDK meeting resource.
   */
  tagResource(params: Chime.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Applies the specified tags to the specified Amazon Chime SDK meeting resource.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Untags the specified tags from the specified Amazon Chime SDK attendee.
   */
  untagAttendee(params: Chime.Types.UntagAttendeeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Untags the specified tags from the specified Amazon Chime SDK attendee.
   */
  untagAttendee(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Untags the specified tags from the specified Amazon Chime SDK meeting.
   */
  untagMeeting(params: Chime.Types.UntagMeetingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Untags the specified tags from the specified Amazon Chime SDK meeting.
   */
  untagMeeting(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Untags the specified tags from the specified Amazon Chime SDK meeting resource.
   */
  untagResource(params: Chime.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Untags the specified tags from the specified Amazon Chime SDK meeting resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
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
   * Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action. For toll-free numbers, you must use the Amazon Chime Voice Connector product type. Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.
   */
  updatePhoneNumber(params: Chime.Types.UpdatePhoneNumberRequest, callback?: (err: AWSError, data: Chime.Types.UpdatePhoneNumberResponse) => void): Request<Chime.Types.UpdatePhoneNumberResponse, AWSError>;
  /**
   * Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action. For toll-free numbers, you must use the Amazon Chime Voice Connector product type. Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.
   */
  updatePhoneNumber(callback?: (err: AWSError, data: Chime.Types.UpdatePhoneNumberResponse) => void): Request<Chime.Types.UpdatePhoneNumberResponse, AWSError>;
  /**
   * Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.
   */
  updatePhoneNumberSettings(params: Chime.Types.UpdatePhoneNumberSettingsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.
   */
  updatePhoneNumberSettings(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified proxy session details, such as voice or SMS capabilities.
   */
  updateProxySession(params: Chime.Types.UpdateProxySessionRequest, callback?: (err: AWSError, data: Chime.Types.UpdateProxySessionResponse) => void): Request<Chime.Types.UpdateProxySessionResponse, AWSError>;
  /**
   * Updates the specified proxy session details, such as voice or SMS capabilities.
   */
  updateProxySession(callback?: (err: AWSError, data: Chime.Types.UpdateProxySessionResponse) => void): Request<Chime.Types.UpdateProxySessionResponse, AWSError>;
  /**
   * Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.
   */
  updateRoom(params: Chime.Types.UpdateRoomRequest, callback?: (err: AWSError, data: Chime.Types.UpdateRoomResponse) => void): Request<Chime.Types.UpdateRoomResponse, AWSError>;
  /**
   * Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.
   */
  updateRoom(callback?: (err: AWSError, data: Chime.Types.UpdateRoomResponse) => void): Request<Chime.Types.UpdateRoomResponse, AWSError>;
  /**
   * Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.
   */
  updateRoomMembership(params: Chime.Types.UpdateRoomMembershipRequest, callback?: (err: AWSError, data: Chime.Types.UpdateRoomMembershipResponse) => void): Request<Chime.Types.UpdateRoomMembershipResponse, AWSError>;
  /**
   * Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.
   */
  updateRoomMembership(callback?: (err: AWSError, data: Chime.Types.UpdateRoomMembershipResponse) => void): Request<Chime.Types.UpdateRoomMembershipResponse, AWSError>;
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
  /**
   * Updates details for the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.
   */
  updateVoiceConnectorGroup(params: Chime.Types.UpdateVoiceConnectorGroupRequest, callback?: (err: AWSError, data: Chime.Types.UpdateVoiceConnectorGroupResponse) => void): Request<Chime.Types.UpdateVoiceConnectorGroupResponse, AWSError>;
  /**
   * Updates details for the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.
   */
  updateVoiceConnectorGroup(callback?: (err: AWSError, data: Chime.Types.UpdateVoiceConnectorGroupResponse) => void): Request<Chime.Types.UpdateVoiceConnectorGroupResponse, AWSError>;
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
    /**
     * The sign-in delegate groups associated with the account.
     */
    SigninDelegateGroups?: SigninDelegateGroupList;
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
  export interface AlexaForBusinessMetadata {
    /**
     * Starts or stops Alexa for Business.
     */
    IsAlexaForBusinessEnabled?: Boolean;
    /**
     * The ARN of the room resource.
     */
    AlexaForBusinessRoomArn?: SensitiveString;
  }
  export type Alpha2CountryCode = string;
  export type AreaCode = string;
  export type Arn = string;
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
  export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
    /**
     * The Amazon Chime Voice Connector group ID.
     */
    VoiceConnectorGroupId: NonEmptyString;
    /**
     * List of phone numbers, in E.164 format.
     */
    E164PhoneNumbers: E164PhoneNumberList;
    /**
     * If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.
     */
    ForceAssociate?: NullableBoolean;
  }
  export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
    /**
     * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
     */
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * List of phone numbers, in E.164 format.
     */
    E164PhoneNumbers: E164PhoneNumberList;
    /**
     * If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.
     */
    ForceAssociate?: NullableBoolean;
  }
  export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
    /**
     * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
     */
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface AssociateSigninDelegateGroupsWithAccountRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The sign-in delegate groups.
     */
    SigninDelegateGroups: SigninDelegateGroupList;
  }
  export interface AssociateSigninDelegateGroupsWithAccountResponse {
  }
  export interface Attendee {
    /**
     * The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.
     */
    ExternalUserId?: ExternalUserIdType;
    /**
     * The Amazon Chime SDK attendee ID.
     */
    AttendeeId?: GuidString;
    /**
     * The join token used by the Amazon Chime SDK attendee.
     */
    JoinToken?: JoinTokenString;
  }
  export type AttendeeList = Attendee[];
  export type AttendeeTagKeyList = TagKey[];
  export type AttendeeTagList = Tag[];
  export type BatchCreateAttendeeErrorList = CreateAttendeeError[];
  export interface BatchCreateAttendeeRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The request containing the attendees to create.
     */
    Attendees: CreateAttendeeRequestItemList;
  }
  export interface BatchCreateAttendeeResponse {
    /**
     * The attendee information, including attendees IDs and join tokens.
     */
    Attendees?: AttendeeList;
    /**
     * If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.
     */
    Errors?: BatchCreateAttendeeErrorList;
  }
  export interface BatchCreateRoomMembershipRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room ID.
     */
    RoomId: NonEmptyString;
    /**
     * The list of membership items.
     */
    MembershipItemList: MembershipItemList;
  }
  export interface BatchCreateRoomMembershipResponse {
    /**
     * If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.
     */
    Errors?: MemberErrorList;
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
     * The request containing the phone number IDs and product types or calling names to update.
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
  export type CallingName = string;
  export type CallingNameStatus = "Unassigned"|"UpdateInProgress"|"UpdateSucceeded"|"UpdateFailed"|string;
  export type CallingRegion = string;
  export type CallingRegionList = CallingRegion[];
  export type Capability = "Voice"|"SMS"|string;
  export type CapabilityList = Capability[];
  export type ClientRequestToken = string;
  export interface ConversationRetentionSettings {
    /**
     * The number of days for which to retain chat conversation messages.
     */
    RetentionDays?: RetentionDays;
  }
  export type Country = string;
  export type CountryList = Country[];
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
  export interface CreateAttendeeError {
    /**
     * The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.
     */
    ExternalUserId?: ExternalUserIdType;
    /**
     * The error code.
     */
    ErrorCode?: String;
    /**
     * The error message.
     */
    ErrorMessage?: String;
  }
  export interface CreateAttendeeRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.
     */
    ExternalUserId: ExternalUserIdType;
    /**
     * The tag key-value pairs.
     */
    Tags?: AttendeeTagList;
  }
  export interface CreateAttendeeRequestItem {
    /**
     * The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.
     */
    ExternalUserId: ExternalUserIdType;
    /**
     * The tag key-value pairs.
     */
    Tags?: AttendeeTagList;
  }
  export type CreateAttendeeRequestItemList = CreateAttendeeRequestItem[];
  export interface CreateAttendeeResponse {
    /**
     * The attendee information, including attendee ID and join token.
     */
    Attendee?: Attendee;
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
  export interface CreateMeetingRequest {
    /**
     * The unique identifier for the client request. Use a different token for different meetings.
     */
    ClientRequestToken: ClientRequestToken;
    /**
     * The external meeting ID.
     */
    ExternalMeetingId?: ExternalMeetingIdType;
    /**
     * Reserved.
     */
    MeetingHostId?: ExternalUserIdType;
    /**
     * The Region in which to create the meeting. Default: us-east-1. Available values: ap-northeast-1, ap-southeast-1, ap-southeast-2, ca-central-1, eu-central-1, eu-north-1, eu-west-1, eu-west-2, eu-west-3, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2.
     */
    MediaRegion?: String;
    /**
     * The tag key-value pairs.
     */
    Tags?: MeetingTagList;
    /**
     * The configuration for resource targets to receive notifications when meeting and attendee events occur.
     */
    NotificationsConfiguration?: MeetingNotificationConfiguration;
  }
  export interface CreateMeetingResponse {
    /**
     * The meeting information, including the meeting ID and MediaPlacement.
     */
    Meeting?: Meeting;
  }
  export interface CreateMeetingWithAttendeesRequest {
    /**
     * The unique identifier for the client request. Use a different token for different meetings.
     */
    ClientRequestToken: ClientRequestToken;
    /**
     * The external meeting ID.
     */
    ExternalMeetingId?: ExternalMeetingIdType;
    /**
     * Reserved.
     */
    MeetingHostId?: ExternalUserIdType;
    /**
     * The Region in which to create the meeting. Default: us-east-1. Available values: ap-northeast-1, ap-southeast-1, ap-southeast-2, ca-central-1, eu-central-1, eu-north-1, eu-west-1, eu-west-2, eu-west-3, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2.
     */
    MediaRegion?: String;
    /**
     * The tag key-value pairs.
     */
    Tags?: MeetingTagList;
    NotificationsConfiguration?: MeetingNotificationConfiguration;
    /**
     * The request containing the attendees to create.
     */
    Attendees?: CreateMeetingWithAttendeesRequestItemList;
  }
  export type CreateMeetingWithAttendeesRequestItemList = CreateAttendeeRequestItem[];
  export interface CreateMeetingWithAttendeesResponse {
    Meeting?: Meeting;
    /**
     * The attendee information, including attendees IDs and join tokens.
     */
    Attendees?: AttendeeList;
    /**
     * If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.
     */
    Errors?: BatchCreateAttendeeErrorList;
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
  export interface CreateProxySessionRequest {
    /**
     * The Amazon Chime voice connector ID.
     */
    VoiceConnectorId: NonEmptyString128;
    /**
     * The participant phone numbers.
     */
    ParticipantPhoneNumbers: ParticipantPhoneNumberList;
    /**
     * The name of the proxy session.
     */
    Name?: ProxySessionNameString;
    /**
     * The number of minutes allowed for the proxy session.
     */
    ExpiryMinutes?: PositiveInteger;
    /**
     * The proxy session capabilities.
     */
    Capabilities: CapabilityList;
    /**
     * The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.
     */
    NumberSelectionBehavior?: NumberSelectionBehavior;
    /**
     * The preference for matching the country or area code of the proxy phone number with that of the first participant.
     */
    GeoMatchLevel?: GeoMatchLevel;
    /**
     * The country and area code for the proxy phone number.
     */
    GeoMatchParams?: GeoMatchParams;
  }
  export interface CreateProxySessionResponse {
    /**
     * The proxy session details.
     */
    ProxySession?: ProxySession;
  }
  export interface CreateRoomMembershipRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room ID.
     */
    RoomId: NonEmptyString;
    /**
     * The Amazon Chime member ID (user ID or bot ID).
     */
    MemberId: NonEmptyString;
    /**
     * The role of the member.
     */
    Role?: RoomMembershipRole;
  }
  export interface CreateRoomMembershipResponse {
    /**
     * The room membership details.
     */
    RoomMembership?: RoomMembership;
  }
  export interface CreateRoomRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room name.
     */
    Name: SensitiveString;
    /**
     * The idempotency token for the request.
     */
    ClientRequestToken?: ClientRequestToken;
  }
  export interface CreateRoomResponse {
    /**
     * The room details.
     */
    Room?: Room;
  }
  export interface CreateUserRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The user name.
     */
    Username?: String;
    /**
     * The user's email address.
     */
    Email?: EmailAddress;
    /**
     * The user type.
     */
    UserType?: UserType;
  }
  export interface CreateUserResponse {
    User?: User;
  }
  export interface CreateVoiceConnectorGroupRequest {
    /**
     * The name of the Amazon Chime Voice Connector group.
     */
    Name: VoiceConnectorGroupName;
    /**
     * The Amazon Chime Voice Connectors to route inbound calls to.
     */
    VoiceConnectorItems?: VoiceConnectorItemList;
  }
  export interface CreateVoiceConnectorGroupResponse {
    /**
     * The Amazon Chime Voice Connector group details.
     */
    VoiceConnectorGroup?: VoiceConnectorGroup;
  }
  export interface CreateVoiceConnectorRequest {
    /**
     * The name of the Amazon Chime Voice Connector.
     */
    Name: VoiceConnectorName;
    /**
     * The AWS Region in which the Amazon Chime Voice Connector is created. Default value: us-east-1.
     */
    AwsRegion?: VoiceConnectorAwsRegion;
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
  export interface DNISEmergencyCallingConfiguration {
    /**
     * The DNIS phone number to route emergency calls to, in E.164 format.
     */
    EmergencyPhoneNumber: E164PhoneNumber;
    /**
     * The DNIS phone number to route test emergency calls to, in E.164 format.
     */
    TestPhoneNumber?: E164PhoneNumber;
    /**
     * The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.
     */
    CallingCountry: Alpha2CountryCode;
  }
  export type DNISEmergencyCallingConfigurationList = DNISEmergencyCallingConfiguration[];
  export type DataRetentionInHours = number;
  export interface DeleteAccountRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
  }
  export interface DeleteAccountResponse {
  }
  export interface DeleteAttendeeRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The Amazon Chime SDK attendee ID.
     */
    AttendeeId: GuidString;
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
  export interface DeleteMeetingRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
  }
  export interface DeletePhoneNumberRequest {
    /**
     * The phone number ID.
     */
    PhoneNumberId: String;
  }
  export interface DeleteProxySessionRequest {
    /**
     * The Amazon Chime voice connector ID.
     */
    VoiceConnectorId: NonEmptyString128;
    /**
     * The proxy session ID.
     */
    ProxySessionId: NonEmptyString128;
  }
  export interface DeleteRoomMembershipRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room ID.
     */
    RoomId: NonEmptyString;
    /**
     * The member ID (user ID or bot ID).
     */
    MemberId: NonEmptyString;
  }
  export interface DeleteRoomRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The chat room ID.
     */
    RoomId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorGroupRequest {
    /**
     * The Amazon Chime Voice Connector group ID.
     */
    VoiceConnectorGroupId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorOriginationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorProxyRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString128;
  }
  export interface DeleteVoiceConnectorRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorStreamingConfigurationRequest {
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
    Usernames: SensitiveStringList;
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
  export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
    /**
     * The Amazon Chime Voice Connector group ID.
     */
    VoiceConnectorGroupId: NonEmptyString;
    /**
     * List of phone numbers, in E.164 format.
     */
    E164PhoneNumbers: E164PhoneNumberList;
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
    /**
     * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
     */
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * List of phone numbers, in E.164 format.
     */
    E164PhoneNumbers: E164PhoneNumberList;
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
    /**
     * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
     */
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface DisassociateSigninDelegateGroupsFromAccountRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The sign-in delegate group names.
     */
    GroupNames: NonEmptyStringList;
  }
  export interface DisassociateSigninDelegateGroupsFromAccountResponse {
  }
  export type E164PhoneNumber = string;
  export type E164PhoneNumberList = E164PhoneNumber[];
  export type EmailAddress = string;
  export type EmailStatus = "NotSent"|"Sent"|"Failed"|string;
  export interface EmergencyCallingConfiguration {
    /**
     * The Dialed Number Identification Service (DNIS) emergency calling configuration details.
     */
    DNIS?: DNISEmergencyCallingConfigurationList;
  }
  export type ErrorCode = "BadRequest"|"Conflict"|"Forbidden"|"NotFound"|"PreconditionFailed"|"ResourceLimitExceeded"|"ServiceFailure"|"AccessDenied"|"ServiceUnavailable"|"Throttled"|"Throttling"|"Unauthorized"|"Unprocessable"|"VoiceConnectorGroupAssociationsExist"|"PhoneNumberAssociationsExist"|string;
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
  export type ExternalMeetingIdType = string;
  export type ExternalUserIdType = string;
  export type GeoMatchLevel = "Country"|"AreaCode"|string;
  export interface GeoMatchParams {
    /**
     * The country.
     */
    Country: Country;
    /**
     * The area code.
     */
    AreaCode: AreaCode;
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
  export interface GetAttendeeRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The Amazon Chime SDK attendee ID.
     */
    AttendeeId: GuidString;
  }
  export interface GetAttendeeResponse {
    /**
     * The Amazon Chime SDK attendee information.
     */
    Attendee?: Attendee;
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
  export interface GetMeetingRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
  }
  export interface GetMeetingResponse {
    /**
     * The Amazon Chime SDK meeting information.
     */
    Meeting?: Meeting;
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
  export interface GetPhoneNumberSettingsResponse {
    /**
     * The default outbound calling name for the account.
     */
    CallingName?: CallingName;
    /**
     * The updated outbound calling name timestamp, in ISO 8601 format.
     */
    CallingNameUpdatedTimestamp?: Iso8601Timestamp;
  }
  export interface GetProxySessionRequest {
    /**
     * The Amazon Chime voice connector ID.
     */
    VoiceConnectorId: NonEmptyString128;
    /**
     * The proxy session ID.
     */
    ProxySessionId: NonEmptyString128;
  }
  export interface GetProxySessionResponse {
    /**
     * The proxy session details.
     */
    ProxySession?: ProxySession;
  }
  export interface GetRetentionSettingsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
  }
  export interface GetRetentionSettingsResponse {
    /**
     * The retention settings.
     */
    RetentionSettings?: RetentionSettings;
    /**
     * The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.
     */
    InitiateDeletionTimestamp?: Iso8601Timestamp;
  }
  export interface GetRoomRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room ID.
     */
    RoomId: NonEmptyString;
  }
  export interface GetRoomResponse {
    /**
     * The room details.
     */
    Room?: Room;
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
  export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
    /**
     * The emergency calling configuration details.
     */
    EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
  }
  export interface GetVoiceConnectorGroupRequest {
    /**
     * The Amazon Chime Voice Connector group ID.
     */
    VoiceConnectorGroupId: NonEmptyString;
  }
  export interface GetVoiceConnectorGroupResponse {
    /**
     * The Amazon Chime Voice Connector group details.
     */
    VoiceConnectorGroup?: VoiceConnectorGroup;
  }
  export interface GetVoiceConnectorLoggingConfigurationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorLoggingConfigurationResponse {
    /**
     * The logging configuration details.
     */
    LoggingConfiguration?: LoggingConfiguration;
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
  export interface GetVoiceConnectorProxyRequest {
    /**
     * The Amazon Chime voice connector ID.
     */
    VoiceConnectorId: NonEmptyString128;
  }
  export interface GetVoiceConnectorProxyResponse {
    /**
     * The proxy configuration details.
     */
    Proxy?: Proxy;
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
  export interface GetVoiceConnectorStreamingConfigurationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorStreamingConfigurationResponse {
    /**
     * The streaming configuration details.
     */
    StreamingConfiguration?: StreamingConfiguration;
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
  export type Integer = number;
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
     * The user email addresses to which to send the email invitation.
     */
    UserEmailList: UserEmailList;
    /**
     * The user type.
     */
    UserType?: UserType;
  }
  export interface InviteUsersResponse {
    /**
     * The email invitation details.
     */
    Invites?: InviteList;
  }
  export type Iso8601Timestamp = Date;
  export type JoinTokenString = string;
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
  export interface ListAttendeeTagsRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The Amazon Chime SDK attendee ID.
     */
    AttendeeId: GuidString;
  }
  export interface ListAttendeeTagsResponse {
    /**
     * A list of tag key-value pairs.
     */
    Tags?: TagList;
  }
  export interface ListAttendeesRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
  }
  export interface ListAttendeesResponse {
    /**
     * The Amazon Chime SDK attendee information.
     */
    Attendees?: AttendeeList;
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
     * The maximum number of results to return in a single call. The default is 10.
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
  export interface ListMeetingTagsRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
  }
  export interface ListMeetingTagsResponse {
    /**
     * A list of tag key-value pairs.
     */
    Tags?: TagList;
  }
  export interface ListMeetingsRequest {
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
  }
  export interface ListMeetingsResponse {
    /**
     * The Amazon Chime SDK meeting information.
     */
    Meetings?: MeetingList;
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
  export interface ListProxySessionsRequest {
    /**
     * The Amazon Chime voice connector ID.
     */
    VoiceConnectorId: NonEmptyString128;
    /**
     * The proxy session status.
     */
    Status?: ProxySessionStatus;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: NextTokenString;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
  }
  export interface ListProxySessionsResponse {
    /**
     * The proxy session details.
     */
    ProxySessions?: ProxySessions;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: NextTokenString;
  }
  export interface ListRoomMembershipsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room ID.
     */
    RoomId: NonEmptyString;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListRoomMembershipsResponse {
    /**
     * The room membership details.
     */
    RoomMemberships?: RoomMembershipList;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListRoomsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The member ID (user ID or bot ID).
     */
    MemberId?: String;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListRoomsResponse {
    /**
     * The room details.
     */
    Rooms?: RoomList;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tag-key value pairs.
     */
    Tags?: TagList;
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
     * The user type.
     */
    UserType?: UserType;
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
  export interface ListVoiceConnectorGroupsRequest {
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: ResultMax;
  }
  export interface ListVoiceConnectorGroupsResponse {
    /**
     * The details of the Amazon Chime Voice Connector groups.
     */
    VoiceConnectorGroups?: VoiceConnectorGroupList;
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
  export interface LoggingConfiguration {
    /**
     * When true, enables SIP message logs for sending to Amazon CloudWatch Logs.
     */
    EnableSIPLogs?: Boolean;
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
  export interface MediaPlacement {
    /**
     * The audio host URL.
     */
    AudioHostUrl?: UriType;
    /**
     * The audio fallback URL.
     */
    AudioFallbackUrl?: UriType;
    /**
     * The screen data URL.
     */
    ScreenDataUrl?: UriType;
    /**
     * The screen sharing URL.
     */
    ScreenSharingUrl?: UriType;
    /**
     * The screen viewing URL.
     */
    ScreenViewingUrl?: UriType;
    /**
     * The signaling URL.
     */
    SignalingUrl?: UriType;
    /**
     * The turn control URL.
     */
    TurnControlUrl?: UriType;
  }
  export interface Meeting {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId?: GuidString;
    /**
     * The external meeting ID.
     */
    ExternalMeetingId?: ExternalMeetingIdType;
    /**
     * The media placement for the meeting.
     */
    MediaPlacement?: MediaPlacement;
    /**
     * The Region in which to create the meeting. Available values: ap-northeast-1, ap-southeast-1, ap-southeast-2, ca-central-1, eu-central-1, eu-north-1, eu-west-1, eu-west-2, eu-west-3, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2.
     */
    MediaRegion?: String;
  }
  export type MeetingList = Meeting[];
  export interface MeetingNotificationConfiguration {
    /**
     * The SNS topic ARN.
     */
    SnsTopicArn?: Arn;
    /**
     * The SQS queue ARN.
     */
    SqsQueueArn?: Arn;
  }
  export type MeetingTagKeyList = TagKey[];
  export type MeetingTagList = Tag[];
  export interface Member {
    /**
     * The member ID (user ID or bot ID).
     */
    MemberId?: NonEmptyString;
    /**
     * The member type.
     */
    MemberType?: MemberType;
    /**
     * The member email address.
     */
    Email?: SensitiveString;
    /**
     * The member name.
     */
    FullName?: SensitiveString;
    /**
     * The Amazon Chime account ID.
     */
    AccountId?: NonEmptyString;
  }
  export interface MemberError {
    /**
     * The member ID.
     */
    MemberId?: NonEmptyString;
    /**
     * The error code.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message.
     */
    ErrorMessage?: String;
  }
  export type MemberErrorList = MemberError[];
  export type MemberType = "User"|"Bot"|"Webhook"|string;
  export interface MembershipItem {
    /**
     * The member ID.
     */
    MemberId?: NonEmptyString;
    /**
     * The member role.
     */
    Role?: RoomMembershipRole;
  }
  export type MembershipItemList = MembershipItem[];
  export type NextTokenString = string;
  export type NonEmptyString = string;
  export type NonEmptyString128 = string;
  export type NonEmptyStringList = String[];
  export type NotificationTarget = "EventBridge"|"SNS"|"SQS"|string;
  export type NullableBoolean = boolean;
  export type NumberSelectionBehavior = "PreferSticky"|"AvoidSticky"|string;
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
     * The FQDN or IP address to contact for origination traffic.
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
  export interface Participant {
    /**
     * The participant's phone number.
     */
    PhoneNumber?: E164PhoneNumber;
    /**
     * The participant's proxy phone number.
     */
    ProxyPhoneNumber?: E164PhoneNumber;
  }
  export type ParticipantPhoneNumberList = E164PhoneNumber[];
  export type Participants = Participant[];
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
     * The phone number type.
     */
    Type?: PhoneNumberType;
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
     * The outbound calling name associated with the phone number.
     */
    CallingName?: CallingName;
    /**
     * The outbound calling name status.
     */
    CallingNameStatus?: CallingNameStatus;
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
     * Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.
     */
    Name?: PhoneNumberAssociationName;
    /**
     * The timestamp of the phone number association, in ISO 8601 format.
     */
    AssociatedTimestamp?: Iso8601Timestamp;
  }
  export type PhoneNumberAssociationList = PhoneNumberAssociation[];
  export type PhoneNumberAssociationName = "AccountId"|"UserId"|"VoiceConnectorId"|"VoiceConnectorGroupId"|string;
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
  export type PhoneNumberType = "Local"|"TollFree"|string;
  export type Port = number;
  export type PositiveInteger = number;
  export type ProfileServiceMaxResults = number;
  export interface Proxy {
    /**
     * The default number of minutes allowed for proxy sessions.
     */
    DefaultSessionExpiryMinutes?: Integer;
    /**
     * When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.
     */
    Disabled?: Boolean;
    /**
     * The phone number to route calls to after a proxy session expires.
     */
    FallBackPhoneNumber?: E164PhoneNumber;
    /**
     * The countries for proxy phone numbers to be selected from.
     */
    PhoneNumberCountries?: StringList;
  }
  export interface ProxySession {
    /**
     * The Amazon Chime voice connector ID.
     */
    VoiceConnectorId?: NonEmptyString128;
    /**
     * The proxy session ID.
     */
    ProxySessionId?: NonEmptyString128;
    /**
     * The name of the proxy session.
     */
    Name?: String128;
    /**
     * The status of the proxy session.
     */
    Status?: ProxySessionStatus;
    /**
     * The number of minutes allowed for the proxy session.
     */
    ExpiryMinutes?: PositiveInteger;
    /**
     * The proxy session capabilities.
     */
    Capabilities?: CapabilityList;
    /**
     * The created timestamp, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The updated timestamp, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
    /**
     * The ended timestamp, in ISO 8601 format.
     */
    EndedTimestamp?: Iso8601Timestamp;
    /**
     * The proxy session participants.
     */
    Participants?: Participants;
    /**
     * The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.
     */
    NumberSelectionBehavior?: NumberSelectionBehavior;
    /**
     * The preference for matching the country or area code of the proxy phone number with that of the first participant.
     */
    GeoMatchLevel?: GeoMatchLevel;
    /**
     * The country and area code for the proxy phone number.
     */
    GeoMatchParams?: GeoMatchParams;
  }
  export type ProxySessionNameString = string;
  export type ProxySessionStatus = "Open"|"InProgress"|"Closed"|string;
  export type ProxySessions = ProxySession[];
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
  export interface PutRetentionSettingsRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The retention settings.
     */
    RetentionSettings: RetentionSettings;
  }
  export interface PutRetentionSettingsResponse {
    /**
     * The retention settings.
     */
    RetentionSettings?: RetentionSettings;
    /**
     * The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.
     */
    InitiateDeletionTimestamp?: Iso8601Timestamp;
  }
  export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The emergency calling configuration details.
     */
    EmergencyCallingConfiguration: EmergencyCallingConfiguration;
  }
  export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
    /**
     * The emergency calling configuration details.
     */
    EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
  }
  export interface PutVoiceConnectorLoggingConfigurationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The logging configuration details to add.
     */
    LoggingConfiguration: LoggingConfiguration;
  }
  export interface PutVoiceConnectorLoggingConfigurationResponse {
    /**
     * The updated logging configuration details.
     */
    LoggingConfiguration?: LoggingConfiguration;
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
  export interface PutVoiceConnectorProxyRequest {
    /**
     * The Amazon Chime voice connector ID.
     */
    VoiceConnectorId: NonEmptyString128;
    /**
     * The default number of minutes allowed for proxy sessions.
     */
    DefaultSessionExpiryMinutes: Integer;
    /**
     * The countries for proxy phone numbers to be selected from.
     */
    PhoneNumberPoolCountries: CountryList;
    /**
     * The phone number to route calls to after a proxy session expires.
     */
    FallBackPhoneNumber?: E164PhoneNumber;
    /**
     * When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.
     */
    Disabled?: Boolean;
  }
  export interface PutVoiceConnectorProxyResponse {
    /**
     * The proxy configuration details.
     */
    Proxy?: Proxy;
  }
  export interface PutVoiceConnectorStreamingConfigurationRequest {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The streaming configuration details to add.
     */
    StreamingConfiguration: StreamingConfiguration;
  }
  export interface PutVoiceConnectorStreamingConfigurationResponse {
    /**
     * The updated streaming configuration details.
     */
    StreamingConfiguration?: StreamingConfiguration;
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
  export interface RedactConversationMessageRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The conversation ID.
     */
    ConversationId: NonEmptyString;
    /**
     * The message ID.
     */
    MessageId: NonEmptyString;
  }
  export interface RedactConversationMessageResponse {
  }
  export interface RedactRoomMessageRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room ID.
     */
    RoomId: NonEmptyString;
    /**
     * The message ID.
     */
    MessageId: NonEmptyString;
  }
  export interface RedactRoomMessageResponse {
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
  export type RetentionDays = number;
  export interface RetentionSettings {
    /**
     * The chat room retention settings.
     */
    RoomRetentionSettings?: RoomRetentionSettings;
    /**
     * The chat conversation retention settings.
     */
    ConversationRetentionSettings?: ConversationRetentionSettings;
  }
  export interface Room {
    /**
     * The room ID.
     */
    RoomId?: NonEmptyString;
    /**
     * The room name.
     */
    Name?: SensitiveString;
    /**
     * The Amazon Chime account ID.
     */
    AccountId?: NonEmptyString;
    /**
     * The identifier of the room creator.
     */
    CreatedBy?: NonEmptyString;
    /**
     * The room creation timestamp, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The room update timestamp, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type RoomList = Room[];
  export interface RoomMembership {
    /**
     * The room ID.
     */
    RoomId?: NonEmptyString;
    Member?: Member;
    /**
     * The membership role.
     */
    Role?: RoomMembershipRole;
    /**
     * The identifier of the user that invited the room member.
     */
    InvitedBy?: NonEmptyString;
    /**
     * The room membership update timestamp, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type RoomMembershipList = RoomMembership[];
  export type RoomMembershipRole = "Administrator"|"Member"|string;
  export interface RoomRetentionSettings {
    /**
     * The number of days for which to retain chat room messages.
     */
    RetentionDays?: RetentionDays;
  }
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
     * The toll-free prefix that you use to filter results.
     */
    TollFreePrefix?: TollFreePrefix;
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
  export interface SigninDelegateGroup {
    /**
     * The group name.
     */
    GroupName?: NonEmptyString;
  }
  export type SigninDelegateGroupList = SigninDelegateGroup[];
  export interface StreamingConfiguration {
    /**
     * The retention period, in hours, for the Amazon Kinesis data.
     */
    DataRetentionInHours: DataRetentionInHours;
    /**
     * When true, media streaming to Amazon Kinesis is turned off.
     */
    Disabled?: Boolean;
    /**
     * The streaming notification targets.
     */
    StreamingNotificationTargets?: StreamingNotificationTargetList;
  }
  export interface StreamingNotificationTarget {
    /**
     * The streaming notification target.
     */
    NotificationTarget: NotificationTarget;
  }
  export type StreamingNotificationTargetList = StreamingNotificationTarget[];
  export type String = string;
  export type String128 = string;
  export type StringList = String[];
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export interface TagAttendeeRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The Amazon Chime SDK attendee ID.
     */
    AttendeeId: GuidString;
    /**
     * The tag key-value pairs.
     */
    Tags: AttendeeTagList;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagMeetingRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The tag key-value pairs.
     */
    Tags: MeetingTagList;
  }
  export interface TagResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: Arn;
    /**
     * The tag key-value pairs.
     */
    Tags: TagList;
  }
  export type TagValue = string;
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
     * The limit on calls per second. Max value based on account service quota. Default value of 1.
     */
    CpsLimit?: CpsLimit;
    /**
     * The default caller ID phone number.
     */
    DefaultPhoneNumber?: E164PhoneNumber;
    /**
     * The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.
     */
    CallingRegions?: CallingRegionList;
    /**
     * The IP addresses allowed to make calls, in CIDR format. Required.
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
  export type TollFreePrefix = string;
  export interface UntagAttendeeRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The Amazon Chime SDK attendee ID.
     */
    AttendeeId: GuidString;
    /**
     * The tag keys.
     */
    TagKeys: AttendeeTagKeyList;
  }
  export interface UntagMeetingRequest {
    /**
     * The Amazon Chime SDK meeting ID.
     */
    MeetingId: GuidString;
    /**
     * The tag keys.
     */
    TagKeys: MeetingTagKeyList;
  }
  export interface UntagResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: Arn;
    /**
     * The tag keys.
     */
    TagKeys: TagKeyList;
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
    /**
     * The outbound calling name associated with the phone number.
     */
    CallingName?: CallingName;
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
    /**
     * The outbound calling name to update.
     */
    CallingName?: CallingName;
  }
  export type UpdatePhoneNumberRequestItemList = UpdatePhoneNumberRequestItem[];
  export interface UpdatePhoneNumberResponse {
    /**
     * The updated phone number details.
     */
    PhoneNumber?: PhoneNumber;
  }
  export interface UpdatePhoneNumberSettingsRequest {
    /**
     * The default outbound calling name for the account.
     */
    CallingName: CallingName;
  }
  export interface UpdateProxySessionRequest {
    /**
     * The Amazon Chime voice connector ID.
     */
    VoiceConnectorId: NonEmptyString128;
    /**
     * The proxy session ID.
     */
    ProxySessionId: NonEmptyString128;
    /**
     * The proxy session capabilities.
     */
    Capabilities: CapabilityList;
    /**
     * The number of minutes allowed for the proxy session.
     */
    ExpiryMinutes?: PositiveInteger;
  }
  export interface UpdateProxySessionResponse {
    /**
     * The proxy session details.
     */
    ProxySession?: ProxySession;
  }
  export interface UpdateRoomMembershipRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room ID.
     */
    RoomId: NonEmptyString;
    /**
     * The member ID.
     */
    MemberId: NonEmptyString;
    /**
     * The role of the member.
     */
    Role?: RoomMembershipRole;
  }
  export interface UpdateRoomMembershipResponse {
    /**
     * The room membership details.
     */
    RoomMembership?: RoomMembership;
  }
  export interface UpdateRoomRequest {
    /**
     * The Amazon Chime account ID.
     */
    AccountId: NonEmptyString;
    /**
     * The room ID.
     */
    RoomId: NonEmptyString;
    /**
     * The room name.
     */
    Name?: SensitiveString;
  }
  export interface UpdateRoomResponse {
    /**
     * The room details.
     */
    Room?: Room;
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
    /**
     * The user type.
     */
    UserType?: UserType;
    /**
     * The Alexa for Business metadata.
     */
    AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
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
    /**
     * The user type.
     */
    UserType?: UserType;
    /**
     * The Alexa for Business metadata.
     */
    AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
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
  export interface UpdateVoiceConnectorGroupRequest {
    /**
     * The Amazon Chime Voice Connector group ID.
     */
    VoiceConnectorGroupId: NonEmptyString;
    /**
     * The name of the Amazon Chime Voice Connector group.
     */
    Name: VoiceConnectorGroupName;
    /**
     * The VoiceConnectorItems to associate with the group.
     */
    VoiceConnectorItems: VoiceConnectorItemList;
  }
  export interface UpdateVoiceConnectorGroupResponse {
    /**
     * The updated Amazon Chime Voice Connector group details.
     */
    VoiceConnectorGroup?: VoiceConnectorGroup;
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
     * The updated Amazon Chime Voice Connector details.
     */
    VoiceConnector?: VoiceConnector;
  }
  export type UriType = string;
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
     * The user type.
     */
    UserType?: UserType;
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
     * The Alexa for Business metadata.
     */
    AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
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
  export type UserType = "PrivateUser"|"SharedDevice"|string;
  export interface VoiceConnector {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId?: NonEmptyString;
    /**
     * The AWS Region in which the Amazon Chime Voice Connector is created. Default: us-east-1.
     */
    AwsRegion?: VoiceConnectorAwsRegion;
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
  export type VoiceConnectorAwsRegion = "us-east-1"|"us-west-2"|string;
  export interface VoiceConnectorGroup {
    /**
     * The Amazon Chime Voice Connector group ID.
     */
    VoiceConnectorGroupId?: NonEmptyString;
    /**
     * The name of the Amazon Chime Voice Connector group.
     */
    Name?: VoiceConnectorGroupName;
    /**
     * The Amazon Chime Voice Connectors to which to route inbound calls.
     */
    VoiceConnectorItems?: VoiceConnectorItemList;
    /**
     * The Amazon Chime Voice Connector group creation timestamp, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The updated Amazon Chime Voice Connector group timestamp, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type VoiceConnectorGroupList = VoiceConnectorGroup[];
  export type VoiceConnectorGroupName = string;
  export interface VoiceConnectorItem {
    /**
     * The Amazon Chime Voice Connector ID.
     */
    VoiceConnectorId: NonEmptyString;
    /**
     * The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first. 
     */
    Priority: VoiceConnectorItemPriority;
  }
  export type VoiceConnectorItemList = VoiceConnectorItem[];
  export type VoiceConnectorItemPriority = number;
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
