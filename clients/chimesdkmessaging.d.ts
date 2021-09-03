import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ChimeSDKMessaging extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ChimeSDKMessaging.Types.ClientConfiguration)
  config: Config & ChimeSDKMessaging.Types.ClientConfiguration;
  /**
   * Adds a specified number of users to a channel. 
   */
  batchCreateChannelMembership(params: ChimeSDKMessaging.Types.BatchCreateChannelMembershipRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.BatchCreateChannelMembershipResponse) => void): Request<ChimeSDKMessaging.Types.BatchCreateChannelMembershipResponse, AWSError>;
  /**
   * Adds a specified number of users to a channel. 
   */
  batchCreateChannelMembership(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.BatchCreateChannelMembershipResponse) => void): Request<ChimeSDKMessaging.Types.BatchCreateChannelMembershipResponse, AWSError>;
  /**
   * Creates a channel to which you can add users and send messages.  Restriction: You can't change a channel's privacy.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  createChannel(params: ChimeSDKMessaging.Types.CreateChannelRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.CreateChannelResponse) => void): Request<ChimeSDKMessaging.Types.CreateChannelResponse, AWSError>;
  /**
   * Creates a channel to which you can add users and send messages.  Restriction: You can't change a channel's privacy.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  createChannel(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.CreateChannelResponse) => void): Request<ChimeSDKMessaging.Types.CreateChannelResponse, AWSError>;
  /**
   * Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to DeleteChannelBan, and then CreateChannelMembership. Bans are cleaned up when you delete users or channels. If you ban a user who is already part of a channel, that user is automatically kicked from the channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  createChannelBan(params: ChimeSDKMessaging.Types.CreateChannelBanRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.CreateChannelBanResponse) => void): Request<ChimeSDKMessaging.Types.CreateChannelBanResponse, AWSError>;
  /**
   * Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to DeleteChannelBan, and then CreateChannelMembership. Bans are cleaned up when you delete users or channels. If you ban a user who is already part of a channel, that user is automatically kicked from the channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  createChannelBan(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.CreateChannelBanResponse) => void): Request<ChimeSDKMessaging.Types.CreateChannelBanResponse, AWSError>;
  /**
   * Adds a user to a channel. The InvitedBy response field is derived from the request header. A channel member can:   List messages   Send messages   Receive messages   Edit their own messages   Leave the channel   Privacy settings impact this action as follows:   Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.   Private Channels: You must be a member to list or send messages.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  createChannelMembership(params: ChimeSDKMessaging.Types.CreateChannelMembershipRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.CreateChannelMembershipResponse) => void): Request<ChimeSDKMessaging.Types.CreateChannelMembershipResponse, AWSError>;
  /**
   * Adds a user to a channel. The InvitedBy response field is derived from the request header. A channel member can:   List messages   Send messages   Receive messages   Edit their own messages   Leave the channel   Privacy settings impact this action as follows:   Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.   Private Channels: You must be a member to list or send messages.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  createChannelMembership(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.CreateChannelMembershipResponse) => void): Request<ChimeSDKMessaging.Types.CreateChannelMembershipResponse, AWSError>;
  /**
   * Creates a new ChannelModerator. A channel moderator can:   Add and remove other members of the channel.   Add and remove other moderators of the channel.   Add and remove user bans for the channel.   Redact messages in the channel.   List messages in the channel.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  createChannelModerator(params: ChimeSDKMessaging.Types.CreateChannelModeratorRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.CreateChannelModeratorResponse) => void): Request<ChimeSDKMessaging.Types.CreateChannelModeratorResponse, AWSError>;
  /**
   * Creates a new ChannelModerator. A channel moderator can:   Add and remove other members of the channel.   Add and remove other moderators of the channel.   Add and remove user bans for the channel.   Redact messages in the channel.   List messages in the channel.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  createChannelModerator(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.CreateChannelModeratorResponse) => void): Request<ChimeSDKMessaging.Types.CreateChannelModeratorResponse, AWSError>;
  /**
   * Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannel(params: ChimeSDKMessaging.Types.DeleteChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a user from a channel's ban list.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannelBan(params: ChimeSDKMessaging.Types.DeleteChannelBanRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a user from a channel's ban list.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannelBan(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a member from a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannelMembership(params: ChimeSDKMessaging.Types.DeleteChannelMembershipRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a member from a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannelMembership(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by UpdateChannelMessage.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannelMessage(params: ChimeSDKMessaging.Types.DeleteChannelMessageRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by UpdateChannelMessage.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannelMessage(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a channel moderator.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannelModerator(params: ChimeSDKMessaging.Types.DeleteChannelModeratorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a channel moderator.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  deleteChannelModerator(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns the full details of a channel in an Amazon Chime AppInstance.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannel(params: ChimeSDKMessaging.Types.DescribeChannelRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelResponse, AWSError>;
  /**
   * Returns the full details of a channel in an Amazon Chime AppInstance.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannel(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelResponse, AWSError>;
  /**
   * Returns the full details of a channel ban.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelBan(params: ChimeSDKMessaging.Types.DescribeChannelBanRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelBanResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelBanResponse, AWSError>;
  /**
   * Returns the full details of a channel ban.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelBan(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelBanResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelBanResponse, AWSError>;
  /**
   * Returns the full details of a user's channel membership.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelMembership(params: ChimeSDKMessaging.Types.DescribeChannelMembershipRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelMembershipResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelMembershipResponse, AWSError>;
  /**
   * Returns the full details of a user's channel membership.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelMembership(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelMembershipResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelMembershipResponse, AWSError>;
  /**
   *  Returns the details of a channel based on the membership of the specified AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelMembershipForAppInstanceUser(params: ChimeSDKMessaging.Types.DescribeChannelMembershipForAppInstanceUserRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelMembershipForAppInstanceUserResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelMembershipForAppInstanceUserResponse, AWSError>;
  /**
   *  Returns the details of a channel based on the membership of the specified AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelMembershipForAppInstanceUser(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelMembershipForAppInstanceUserResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelMembershipForAppInstanceUserResponse, AWSError>;
  /**
   * Returns the full details of a channel moderated by the specified AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelModeratedByAppInstanceUser(params: ChimeSDKMessaging.Types.DescribeChannelModeratedByAppInstanceUserRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelModeratedByAppInstanceUserResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelModeratedByAppInstanceUserResponse, AWSError>;
  /**
   * Returns the full details of a channel moderated by the specified AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelModeratedByAppInstanceUser(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelModeratedByAppInstanceUserResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelModeratedByAppInstanceUserResponse, AWSError>;
  /**
   * Returns the full details of a single ChannelModerator.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelModerator(params: ChimeSDKMessaging.Types.DescribeChannelModeratorRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelModeratorResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelModeratorResponse, AWSError>;
  /**
   * Returns the full details of a single ChannelModerator.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  describeChannelModerator(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.DescribeChannelModeratorResponse) => void): Request<ChimeSDKMessaging.Types.DescribeChannelModeratorResponse, AWSError>;
  /**
   * Gets the full details of a channel message.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  getChannelMessage(params: ChimeSDKMessaging.Types.GetChannelMessageRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.GetChannelMessageResponse) => void): Request<ChimeSDKMessaging.Types.GetChannelMessageResponse, AWSError>;
  /**
   * Gets the full details of a channel message.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  getChannelMessage(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.GetChannelMessageResponse) => void): Request<ChimeSDKMessaging.Types.GetChannelMessageResponse, AWSError>;
  /**
   * The details of the endpoint for the messaging session.
   */
  getMessagingSessionEndpoint(params: ChimeSDKMessaging.Types.GetMessagingSessionEndpointRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.GetMessagingSessionEndpointResponse) => void): Request<ChimeSDKMessaging.Types.GetMessagingSessionEndpointResponse, AWSError>;
  /**
   * The details of the endpoint for the messaging session.
   */
  getMessagingSessionEndpoint(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.GetMessagingSessionEndpointResponse) => void): Request<ChimeSDKMessaging.Types.GetMessagingSessionEndpointResponse, AWSError>;
  /**
   * Lists all the users banned from a particular channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelBans(params: ChimeSDKMessaging.Types.ListChannelBansRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelBansResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelBansResponse, AWSError>;
  /**
   * Lists all the users banned from a particular channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelBans(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelBansResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelBansResponse, AWSError>;
  /**
   * Lists all channel memberships in a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelMemberships(params: ChimeSDKMessaging.Types.ListChannelMembershipsRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelMembershipsResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelMembershipsResponse, AWSError>;
  /**
   * Lists all channel memberships in a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelMemberships(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelMembershipsResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelMembershipsResponse, AWSError>;
  /**
   *  Lists all channels that a particular AppInstanceUser is a part of. Only an AppInstanceAdmin can call the API with a user ARN that is not their own.   The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelMembershipsForAppInstanceUser(params: ChimeSDKMessaging.Types.ListChannelMembershipsForAppInstanceUserRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelMembershipsForAppInstanceUserResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelMembershipsForAppInstanceUserResponse, AWSError>;
  /**
   *  Lists all channels that a particular AppInstanceUser is a part of. Only an AppInstanceAdmin can call the API with a user ARN that is not their own.   The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelMembershipsForAppInstanceUser(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelMembershipsForAppInstanceUserResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelMembershipsForAppInstanceUserResponse, AWSError>;
  /**
   * List all the messages in a channel. Returns a paginated list of ChannelMessages. By default, sorted by creation timestamp in descending order.  Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message. Also, the x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelMessages(params: ChimeSDKMessaging.Types.ListChannelMessagesRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelMessagesResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelMessagesResponse, AWSError>;
  /**
   * List all the messages in a channel. Returns a paginated list of ChannelMessages. By default, sorted by creation timestamp in descending order.  Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message. Also, the x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelMessages(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelMessagesResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelMessagesResponse, AWSError>;
  /**
   * Lists all the moderators for a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelModerators(params: ChimeSDKMessaging.Types.ListChannelModeratorsRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelModeratorsResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelModeratorsResponse, AWSError>;
  /**
   * Lists all the moderators for a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelModerators(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelModeratorsResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelModeratorsResponse, AWSError>;
  /**
   * Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.  Functionality &amp; restrictions    Use privacy = PUBLIC to retrieve all public channels in the account.   Only an AppInstanceAdmin can set privacy = PRIVATE to list the private channels in an account.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannels(params: ChimeSDKMessaging.Types.ListChannelsRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelsResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelsResponse, AWSError>;
  /**
   * Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.  Functionality &amp; restrictions    Use privacy = PUBLIC to retrieve all public channels in the account.   Only an AppInstanceAdmin can set privacy = PRIVATE to list the private channels in an account.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannels(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelsResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelsResponse, AWSError>;
  /**
   * A list of the channels moderated by an AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelsModeratedByAppInstanceUser(params: ChimeSDKMessaging.Types.ListChannelsModeratedByAppInstanceUserRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelsModeratedByAppInstanceUserResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelsModeratedByAppInstanceUserResponse, AWSError>;
  /**
   * A list of the channels moderated by an AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  listChannelsModeratedByAppInstanceUser(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.ListChannelsModeratedByAppInstanceUserResponse) => void): Request<ChimeSDKMessaging.Types.ListChannelsModeratedByAppInstanceUserResponse, AWSError>;
  /**
   * Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  redactChannelMessage(params: ChimeSDKMessaging.Types.RedactChannelMessageRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.RedactChannelMessageResponse) => void): Request<ChimeSDKMessaging.Types.RedactChannelMessageResponse, AWSError>;
  /**
   * Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  redactChannelMessage(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.RedactChannelMessageResponse) => void): Request<ChimeSDKMessaging.Types.RedactChannelMessageResponse, AWSError>;
  /**
   * Sends a message to a particular channel that the member is a part of.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. Also, STANDARD messages can contain 4KB of data and the 1KB of metadata. CONTROL messages can contain 30 bytes of data and no metadata. 
   */
  sendChannelMessage(params: ChimeSDKMessaging.Types.SendChannelMessageRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.SendChannelMessageResponse) => void): Request<ChimeSDKMessaging.Types.SendChannelMessageResponse, AWSError>;
  /**
   * Sends a message to a particular channel that the member is a part of.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. Also, STANDARD messages can contain 4KB of data and the 1KB of metadata. CONTROL messages can contain 30 bytes of data and no metadata. 
   */
  sendChannelMessage(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.SendChannelMessageResponse) => void): Request<ChimeSDKMessaging.Types.SendChannelMessageResponse, AWSError>;
  /**
   * Update a channel's attributes.  Restriction: You can't change a channel's privacy.   The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  updateChannel(params: ChimeSDKMessaging.Types.UpdateChannelRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.UpdateChannelResponse) => void): Request<ChimeSDKMessaging.Types.UpdateChannelResponse, AWSError>;
  /**
   * Update a channel's attributes.  Restriction: You can't change a channel's privacy.   The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  updateChannel(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.UpdateChannelResponse) => void): Request<ChimeSDKMessaging.Types.UpdateChannelResponse, AWSError>;
  /**
   * Updates the content of a message.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  updateChannelMessage(params: ChimeSDKMessaging.Types.UpdateChannelMessageRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.UpdateChannelMessageResponse) => void): Request<ChimeSDKMessaging.Types.UpdateChannelMessageResponse, AWSError>;
  /**
   * Updates the content of a message.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  updateChannelMessage(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.UpdateChannelMessageResponse) => void): Request<ChimeSDKMessaging.Types.UpdateChannelMessageResponse, AWSError>;
  /**
   * The details of the time when a user last read messages in a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  updateChannelReadMarker(params: ChimeSDKMessaging.Types.UpdateChannelReadMarkerRequest, callback?: (err: AWSError, data: ChimeSDKMessaging.Types.UpdateChannelReadMarkerResponse) => void): Request<ChimeSDKMessaging.Types.UpdateChannelReadMarkerResponse, AWSError>;
  /**
   * The details of the time when a user last read messages in a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. 
   */
  updateChannelReadMarker(callback?: (err: AWSError, data: ChimeSDKMessaging.Types.UpdateChannelReadMarkerResponse) => void): Request<ChimeSDKMessaging.Types.UpdateChannelReadMarkerResponse, AWSError>;
}
declare namespace ChimeSDKMessaging {
  export interface AppInstanceUserMembershipSummary {
    /**
     * The type of ChannelMembership.
     */
    Type?: ChannelMembershipType;
    /**
     * The time at which a message was last read.
     */
    ReadMarkerTimestamp?: Timestamp;
  }
  export interface BatchChannelMemberships {
    /**
     * The identifier of the member who invited another member.
     */
    InvitedBy?: Identity;
    /**
     * The membership types set for the channel users.
     */
    Type?: ChannelMembershipType;
    /**
     * The users successfully added to the request.
     */
    Members?: Members;
    /**
     * The ARN of the channel to which you're adding users.
     */
    ChannelArn?: ChimeArn;
  }
  export interface BatchCreateChannelMembershipError {
    /**
     * The ARN of the member that the service couldn't add.
     */
    MemberArn?: ChimeArn;
    /**
     * The error code.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message.
     */
    ErrorMessage?: String;
  }
  export type BatchCreateChannelMembershipErrors = BatchCreateChannelMembershipError[];
  export interface BatchCreateChannelMembershipRequest {
    /**
     * The ARN of the channel to which you're adding users.
     */
    ChannelArn: ChimeArn;
    /**
     * The membership type of a user, DEFAULT or HIDDEN. Default members are always returned as part of ListChannelMemberships. Hidden members are only returned if the type filter in ListChannelMemberships equals HIDDEN. Otherwise hidden members are not returned. This is only supported by moderators.
     */
    Type?: ChannelMembershipType;
    /**
     * The ARNs of the members you want to add to the channel.
     */
    MemberArns: MemberArns;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface BatchCreateChannelMembershipResponse {
    /**
     * The list of channel memberships in the response.
     */
    BatchChannelMemberships?: BatchChannelMemberships;
    /**
     * If the action fails for one or more of the memberships in the request, a list of the memberships is returned, along with error codes and error messages.
     */
    Errors?: BatchCreateChannelMembershipErrors;
  }
  export interface Channel {
    /**
     * The name of a channel.
     */
    Name?: NonEmptyResourceName;
    /**
     * The ARN of a channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The mode of the channel.
     */
    Mode?: ChannelMode;
    /**
     * The channel's privacy setting.
     */
    Privacy?: ChannelPrivacy;
    /**
     * The channel's metadata.
     */
    Metadata?: Metadata;
    /**
     * The AppInstanceUser who created the channel.
     */
    CreatedBy?: Identity;
    /**
     * The time at which the AppInstanceUser created the channel.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The time at which a member sent the last message in the channel.
     */
    LastMessageTimestamp?: Timestamp;
    /**
     * The time at which a channel was last updated.
     */
    LastUpdatedTimestamp?: Timestamp;
  }
  export interface ChannelBan {
    /**
     * The member being banned from the channel.
     */
    Member?: Identity;
    /**
     * The ARN of the channel from which a member is being banned.
     */
    ChannelArn?: ChimeArn;
    /**
     * The time at which the ban was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The AppInstanceUser who created the ban.
     */
    CreatedBy?: Identity;
  }
  export interface ChannelBanSummary {
    /**
     * The member being banned from a channel.
     */
    Member?: Identity;
  }
  export type ChannelBanSummaryList = ChannelBanSummary[];
  export interface ChannelMembership {
    /**
     * The identifier of the member who invited another member.
     */
    InvitedBy?: Identity;
    /**
     * The membership type set for the channel member.
     */
    Type?: ChannelMembershipType;
    /**
     * The data of the channel member.
     */
    Member?: Identity;
    /**
     * The ARN of the member's channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The time at which the channel membership was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The time at which a channel membership was last updated.
     */
    LastUpdatedTimestamp?: Timestamp;
  }
  export interface ChannelMembershipForAppInstanceUserSummary {
    /**
     * Returns the channel data for an AppInstance.
     */
    ChannelSummary?: ChannelSummary;
    /**
     * Returns the channel membership data for an AppInstance.
     */
    AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
  }
  export type ChannelMembershipForAppInstanceUserSummaryList = ChannelMembershipForAppInstanceUserSummary[];
  export interface ChannelMembershipSummary {
    /**
     * A member's summary data.
     */
    Member?: Identity;
  }
  export type ChannelMembershipSummaryList = ChannelMembershipSummary[];
  export type ChannelMembershipType = "DEFAULT"|"HIDDEN"|string;
  export interface ChannelMessage {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The ID of a message.
     */
    MessageId?: MessageId;
    /**
     * The message content.
     */
    Content?: Content;
    /**
     * The message metadata.
     */
    Metadata?: Metadata;
    /**
     * The message type.
     */
    Type?: ChannelMessageType;
    /**
     * The time at which the message was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The time at which a message was edited.
     */
    LastEditedTimestamp?: Timestamp;
    /**
     * The time at which a message was updated.
     */
    LastUpdatedTimestamp?: Timestamp;
    /**
     * The message sender.
     */
    Sender?: Identity;
    /**
     * Hides the content of a message.
     */
    Redacted?: NonNullableBoolean;
    /**
     * The persistence setting for a channel message.
     */
    Persistence?: ChannelMessagePersistenceType;
  }
  export type ChannelMessagePersistenceType = "PERSISTENT"|"NON_PERSISTENT"|string;
  export interface ChannelMessageSummary {
    /**
     * The ID of the message.
     */
    MessageId?: MessageId;
    /**
     * The content of the message.
     */
    Content?: Content;
    /**
     * The metadata of the message.
     */
    Metadata?: Metadata;
    /**
     * The type of message.
     */
    Type?: ChannelMessageType;
    /**
     * The time at which the message summary was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The time at which a message was last updated.
     */
    LastUpdatedTimestamp?: Timestamp;
    /**
     * The time at which a message was last edited.
     */
    LastEditedTimestamp?: Timestamp;
    /**
     * The message sender.
     */
    Sender?: Identity;
    /**
     * Indicates whether a message was redacted.
     */
    Redacted?: NonNullableBoolean;
  }
  export type ChannelMessageSummaryList = ChannelMessageSummary[];
  export type ChannelMessageType = "STANDARD"|"CONTROL"|string;
  export type ChannelMode = "UNRESTRICTED"|"RESTRICTED"|string;
  export interface ChannelModeratedByAppInstanceUserSummary {
    /**
     * Summary of the details of a Channel.
     */
    ChannelSummary?: ChannelSummary;
  }
  export type ChannelModeratedByAppInstanceUserSummaryList = ChannelModeratedByAppInstanceUserSummary[];
  export interface ChannelModerator {
    /**
     * The moderator's data.
     */
    Moderator?: Identity;
    /**
     * The ARN of the moderator's channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The time at which the moderator was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The AppInstanceUser who created the moderator.
     */
    CreatedBy?: Identity;
  }
  export interface ChannelModeratorSummary {
    /**
     * The data for a moderator.
     */
    Moderator?: Identity;
  }
  export type ChannelModeratorSummaryList = ChannelModeratorSummary[];
  export type ChannelPrivacy = "PUBLIC"|"PRIVATE"|string;
  export interface ChannelSummary {
    /**
     * The name of the channel.
     */
    Name?: NonEmptyResourceName;
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The mode of the channel.
     */
    Mode?: ChannelMode;
    /**
     * The privacy setting of the channel.
     */
    Privacy?: ChannelPrivacy;
    /**
     * The metadata of the channel.
     */
    Metadata?: Metadata;
    /**
     * The time at which the last message in a channel was sent.
     */
    LastMessageTimestamp?: Timestamp;
  }
  export type ChannelSummaryList = ChannelSummary[];
  export type ChimeArn = string;
  export type ClientRequestToken = string;
  export type Content = string;
  export interface CreateChannelBanRequest {
    /**
     * The ARN of the ban request.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the member being banned.
     */
    MemberArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface CreateChannelBanResponse {
    /**
     * The ARN of the response to the ban request.
     */
    ChannelArn?: ChimeArn;
    /**
     * The ChannelArn and BannedIdentity of the member in the ban response.
     */
    Member?: Identity;
  }
  export interface CreateChannelMembershipRequest {
    /**
     * The ARN of the channel to which you're adding users.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the member you want to add to the channel.
     */
    MemberArn: ChimeArn;
    /**
     * The membership type of a user, DEFAULT or HIDDEN. Default members are always returned as part of ListChannelMemberships. Hidden members are only returned if the type filter in ListChannelMemberships equals HIDDEN. Otherwise hidden members are not returned. This is only supported by moderators.
     */
    Type: ChannelMembershipType;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface CreateChannelMembershipResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The ARN and metadata of the member being added.
     */
    Member?: Identity;
  }
  export interface CreateChannelModeratorRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the moderator.
     */
    ChannelModeratorArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface CreateChannelModeratorResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The ARNs of the channel and the moderator.
     */
    ChannelModerator?: Identity;
  }
  export interface CreateChannelRequest {
    /**
     * The ARN of the channel request.
     */
    AppInstanceArn: ChimeArn;
    /**
     * The name of the channel.
     */
    Name: NonEmptyResourceName;
    /**
     * The channel mode: UNRESTRICTED or RESTRICTED. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels.
     */
    Mode?: ChannelMode;
    /**
     * The channel's privacy level: PUBLIC or PRIVATE. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the AppInstance.
     */
    Privacy?: ChannelPrivacy;
    /**
     * The metadata of the creation request. Limited to 1KB and UTF-8.
     */
    Metadata?: Metadata;
    /**
     * The client token for the request. An Idempotency token.
     */
    ClientRequestToken: ClientRequestToken;
    /**
     * The tags for the creation request.
     */
    Tags?: TagList;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface CreateChannelResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
  }
  export interface DeleteChannelBanRequest {
    /**
     * The ARN of the channel from which the AppInstanceUser was banned.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the AppInstanceUser that you want to reinstate.
     */
    MemberArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DeleteChannelMembershipRequest {
    /**
     * The ARN of the channel from which you want to remove the user.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the member that you're removing from the channel.
     */
    MemberArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DeleteChannelMessageRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The ID of the message being deleted.
     */
    MessageId: MessageId;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DeleteChannelModeratorRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the moderator being deleted.
     */
    ChannelModeratorArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DeleteChannelRequest {
    /**
     * The ARN of the channel being deleted.
     */
    ChannelArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DescribeChannelBanRequest {
    /**
     * The ARN of the channel from which the user is banned.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the member being banned.
     */
    MemberArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DescribeChannelBanResponse {
    /**
     * The details of the ban.
     */
    ChannelBan?: ChannelBan;
  }
  export interface DescribeChannelMembershipForAppInstanceUserRequest {
    /**
     * The ARN of the channel to which the user belongs.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the user in a channel.
     */
    AppInstanceUserArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DescribeChannelMembershipForAppInstanceUserResponse {
    /**
     * The channel to which a user belongs.
     */
    ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
  }
  export interface DescribeChannelMembershipRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the member.
     */
    MemberArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DescribeChannelMembershipResponse {
    /**
     * The details of the membership.
     */
    ChannelMembership?: ChannelMembership;
  }
  export interface DescribeChannelModeratedByAppInstanceUserRequest {
    /**
     * The ARN of the moderated channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the AppInstanceUser in the moderated channel.
     */
    AppInstanceUserArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DescribeChannelModeratedByAppInstanceUserResponse {
    /**
     * The moderated channel.
     */
    Channel?: ChannelModeratedByAppInstanceUserSummary;
  }
  export interface DescribeChannelModeratorRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The ARN of the channel moderator.
     */
    ChannelModeratorArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DescribeChannelModeratorResponse {
    /**
     * The details of the channel moderator.
     */
    ChannelModerator?: ChannelModerator;
  }
  export interface DescribeChannelRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface DescribeChannelResponse {
    /**
     * The channel details.
     */
    Channel?: Channel;
  }
  export type ErrorCode = "BadRequest"|"Conflict"|"Forbidden"|"NotFound"|"PreconditionFailed"|"ResourceLimitExceeded"|"ServiceFailure"|"AccessDenied"|"ServiceUnavailable"|"Throttled"|"Throttling"|"Unauthorized"|"Unprocessable"|"VoiceConnectorGroupAssociationsExist"|"PhoneNumberAssociationsExist"|string;
  export interface GetChannelMessageRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The ID of the message.
     */
    MessageId: MessageId;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface GetChannelMessageResponse {
    /**
     * The details of and content in the message.
     */
    ChannelMessage?: ChannelMessage;
  }
  export interface GetMessagingSessionEndpointRequest {
  }
  export interface GetMessagingSessionEndpointResponse {
    /**
     * The endpoint returned in the response.
     */
    Endpoint?: MessagingSessionEndpoint;
  }
  export interface Identity {
    /**
     * The ARN in an Identity.
     */
    Arn?: ChimeArn;
    /**
     * The name in an Identity.
     */
    Name?: ResourceName;
  }
  export interface ListChannelBansRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The maximum number of bans that you want returned.
     */
    MaxResults?: MaxResults;
    /**
     * The token passed by previous API calls until all requested bans are returned.
     */
    NextToken?: NextToken;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface ListChannelBansResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The token passed by previous API calls until all requested bans are returned.
     */
    NextToken?: NextToken;
    /**
     * The information for each requested ban.
     */
    ChannelBans?: ChannelBanSummaryList;
  }
  export interface ListChannelMembershipsForAppInstanceUserRequest {
    /**
     * The ARN of the AppInstanceUsers
     */
    AppInstanceUserArn?: ChimeArn;
    /**
     * The maximum number of users that you want returned.
     */
    MaxResults?: MaxResults;
    /**
     * The token returned from previous API requests until the number of channel memberships is reached.
     */
    NextToken?: NextToken;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface ListChannelMembershipsForAppInstanceUserResponse {
    /**
     * The token passed by previous API calls until all requested users are returned.
     */
    ChannelMemberships?: ChannelMembershipForAppInstanceUserSummaryList;
    /**
     * The token passed by previous API calls until all requested users are returned.
     */
    NextToken?: NextToken;
  }
  export interface ListChannelMembershipsRequest {
    /**
     * The maximum number of channel memberships that you want returned.
     */
    ChannelArn: ChimeArn;
    /**
     * The membership type of a user, DEFAULT or HIDDEN. Default members are always returned as part of ListChannelMemberships. Hidden members are only returned if the type filter in ListChannelMemberships equals HIDDEN. Otherwise hidden members are not returned.
     */
    Type?: ChannelMembershipType;
    /**
     * The maximum number of channel memberships that you want returned.
     */
    MaxResults?: MaxResults;
    /**
     * The token passed by previous API calls until all requested channel memberships are returned.
     */
    NextToken?: NextToken;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface ListChannelMembershipsResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The information for the requested channel memberships.
     */
    ChannelMemberships?: ChannelMembershipSummaryList;
    /**
     * The token passed by previous API calls until all requested channel memberships are returned.
     */
    NextToken?: NextToken;
  }
  export interface ListChannelMessagesRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The order in which you want messages sorted. Default is Descending, based on time created.
     */
    SortOrder?: SortOrder;
    /**
     * The initial or starting time stamp for your requested messages.
     */
    NotBefore?: Timestamp;
    /**
     * The final or ending time stamp for your requested messages.
     */
    NotAfter?: Timestamp;
    /**
     * The maximum number of messages that you want returned.
     */
    MaxResults?: MaxResults;
    /**
     * The token passed by previous API calls until all requested messages are returned.
     */
    NextToken?: NextToken;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface ListChannelMessagesResponse {
    /**
     * The ARN of the channel containing the requested messages.
     */
    ChannelArn?: ChimeArn;
    /**
     * The token passed by previous API calls until all requested messages are returned.
     */
    NextToken?: NextToken;
    /**
     * The information about, and content of, each requested message.
     */
    ChannelMessages?: ChannelMessageSummaryList;
  }
  export interface ListChannelModeratorsRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The maximum number of moderators that you want returned.
     */
    MaxResults?: MaxResults;
    /**
     * The token passed by previous API calls until all requested moderators are returned.
     */
    NextToken?: NextToken;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface ListChannelModeratorsResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The token passed by previous API calls until all requested moderators are returned.
     */
    NextToken?: NextToken;
    /**
     * The information about and names of each moderator.
     */
    ChannelModerators?: ChannelModeratorSummaryList;
  }
  export interface ListChannelsModeratedByAppInstanceUserRequest {
    /**
     * The ARN of the user in the moderated channel.
     */
    AppInstanceUserArn?: ChimeArn;
    /**
     * The maximum number of channels in the request.
     */
    MaxResults?: MaxResults;
    /**
     * The token returned from previous API requests until the number of channels moderated by the user is reached.
     */
    NextToken?: NextToken;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface ListChannelsModeratedByAppInstanceUserResponse {
    /**
     * The moderated channels in the request.
     */
    Channels?: ChannelModeratedByAppInstanceUserSummaryList;
    /**
     * The token returned from previous API requests until the number of channels moderated by the user is reached.
     */
    NextToken?: NextToken;
  }
  export interface ListChannelsRequest {
    /**
     * The ARN of the AppInstance.
     */
    AppInstanceArn: ChimeArn;
    /**
     * The privacy setting. PUBLIC retrieves all the public channels. PRIVATE retrieves private channels. Only an AppInstanceAdmin can retrieve private channels. 
     */
    Privacy?: ChannelPrivacy;
    /**
     * The maximum number of channels that you want to return.
     */
    MaxResults?: MaxResults;
    /**
     * The token passed by previous API calls until all requested channels are returned.
     */
    NextToken?: NextToken;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface ListChannelsResponse {
    /**
     * The information about each channel.
     */
    Channels?: ChannelSummaryList;
    /**
     * The token returned from previous API requests until the number of channels is reached.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type MemberArns = ChimeArn[];
  export type Members = Identity[];
  export type MessageId = string;
  export interface MessagingSessionEndpoint {
    /**
     * The endpoint to which you establish a websocket connection.
     */
    Url?: UrlType;
  }
  export type Metadata = string;
  export type NextToken = string;
  export type NonEmptyContent = string;
  export type NonEmptyResourceName = string;
  export type NonNullableBoolean = boolean;
  export interface RedactChannelMessageRequest {
    /**
     * The ARN of the channel containing the messages that you want to redact.
     */
    ChannelArn: ChimeArn;
    /**
     * The ID of the message being redacted.
     */
    MessageId: MessageId;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface RedactChannelMessageResponse {
    /**
     * The ARN of the channel containing the messages that you want to redact.
     */
    ChannelArn?: ChimeArn;
    /**
     * The ID of the message being redacted.
     */
    MessageId?: MessageId;
  }
  export type ResourceName = string;
  export interface SendChannelMessageRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The content of the message.
     */
    Content: NonEmptyContent;
    /**
     * The type of message, STANDARD or CONTROL.
     */
    Type: ChannelMessageType;
    /**
     * Boolean that controls whether the message is persisted on the back end. Required.
     */
    Persistence: ChannelMessagePersistenceType;
    /**
     * The optional metadata for each message.
     */
    Metadata?: Metadata;
    /**
     * The Idempotency token for each client request.
     */
    ClientRequestToken: ClientRequestToken;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface SendChannelMessageResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The ID string assigned to each message.
     */
    MessageId?: MessageId;
  }
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export type String = string;
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
  export type TagKey = string;
  export type TagList = Tag[];
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UpdateChannelMessageRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The ID string of the message being updated.
     */
    MessageId: MessageId;
    /**
     * The content of the message being updated.
     */
    Content?: Content;
    /**
     * The metadata of the message being updated.
     */
    Metadata?: Metadata;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface UpdateChannelMessageResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
    /**
     * The ID string of the message being updated.
     */
    MessageId?: MessageId;
  }
  export interface UpdateChannelReadMarkerRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface UpdateChannelReadMarkerResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
  }
  export interface UpdateChannelRequest {
    /**
     * The ARN of the channel.
     */
    ChannelArn: ChimeArn;
    /**
     * The name of the channel.
     */
    Name: NonEmptyResourceName;
    /**
     * The mode of the update request.
     */
    Mode: ChannelMode;
    /**
     * The metadata for the update request.
     */
    Metadata?: Metadata;
    /**
     * The AppInstanceUserArn of the user that makes the API call.
     */
    ChimeBearer: ChimeArn;
  }
  export interface UpdateChannelResponse {
    /**
     * The ARN of the channel.
     */
    ChannelArn?: ChimeArn;
  }
  export type UrlType = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-05-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ChimeSDKMessaging client.
   */
  export import Types = ChimeSDKMessaging;
}
export = ChimeSDKMessaging;
