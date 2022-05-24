import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Ivschat extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Ivschat.Types.ClientConfiguration)
  config: Config & Ivschat.Types.ClientConfiguration;
  /**
   * Creates an encrypted token that is used to establish an individual WebSocket connection to a room. The token is valid for one minute, and a connection (session) established with the token is valid for the specified duration. Encryption keys are owned by Amazon IVS Chat and never used directly by your application.
   */
  createChatToken(params: Ivschat.Types.CreateChatTokenRequest, callback?: (err: AWSError, data: Ivschat.Types.CreateChatTokenResponse) => void): Request<Ivschat.Types.CreateChatTokenResponse, AWSError>;
  /**
   * Creates an encrypted token that is used to establish an individual WebSocket connection to a room. The token is valid for one minute, and a connection (session) established with the token is valid for the specified duration. Encryption keys are owned by Amazon IVS Chat and never used directly by your application.
   */
  createChatToken(callback?: (err: AWSError, data: Ivschat.Types.CreateChatTokenResponse) => void): Request<Ivschat.Types.CreateChatTokenResponse, AWSError>;
  /**
   * Creates a room that allows clients to connect and pass messages.
   */
  createRoom(params: Ivschat.Types.CreateRoomRequest, callback?: (err: AWSError, data: Ivschat.Types.CreateRoomResponse) => void): Request<Ivschat.Types.CreateRoomResponse, AWSError>;
  /**
   * Creates a room that allows clients to connect and pass messages.
   */
  createRoom(callback?: (err: AWSError, data: Ivschat.Types.CreateRoomResponse) => void): Request<Ivschat.Types.CreateRoomResponse, AWSError>;
  /**
   * Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s EventName is aws:DELETE_MESSAGE. This replicates the  DeleteMessage WebSocket operation in the Amazon IVS Chat Messaging API.
   */
  deleteMessage(params: Ivschat.Types.DeleteMessageRequest, callback?: (err: AWSError, data: Ivschat.Types.DeleteMessageResponse) => void): Request<Ivschat.Types.DeleteMessageResponse, AWSError>;
  /**
   * Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s EventName is aws:DELETE_MESSAGE. This replicates the  DeleteMessage WebSocket operation in the Amazon IVS Chat Messaging API.
   */
  deleteMessage(callback?: (err: AWSError, data: Ivschat.Types.DeleteMessageResponse) => void): Request<Ivschat.Types.DeleteMessageResponse, AWSError>;
  /**
   * Deletes the specified room.
   */
  deleteRoom(params: Ivschat.Types.DeleteRoomRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified room.
   */
  deleteRoom(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disconnects all connections using a specified user ID from a room. This replicates the  DisconnectUser WebSocket operation in the Amazon IVS Chat Messaging API.
   */
  disconnectUser(params: Ivschat.Types.DisconnectUserRequest, callback?: (err: AWSError, data: Ivschat.Types.DisconnectUserResponse) => void): Request<Ivschat.Types.DisconnectUserResponse, AWSError>;
  /**
   * Disconnects all connections using a specified user ID from a room. This replicates the  DisconnectUser WebSocket operation in the Amazon IVS Chat Messaging API.
   */
  disconnectUser(callback?: (err: AWSError, data: Ivschat.Types.DisconnectUserResponse) => void): Request<Ivschat.Types.DisconnectUserResponse, AWSError>;
  /**
   * Gets the specified room.
   */
  getRoom(params: Ivschat.Types.GetRoomRequest, callback?: (err: AWSError, data: Ivschat.Types.GetRoomResponse) => void): Request<Ivschat.Types.GetRoomResponse, AWSError>;
  /**
   * Gets the specified room.
   */
  getRoom(callback?: (err: AWSError, data: Ivschat.Types.GetRoomResponse) => void): Request<Ivschat.Types.GetRoomResponse, AWSError>;
  /**
   * Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of updateTime.
   */
  listRooms(params: Ivschat.Types.ListRoomsRequest, callback?: (err: AWSError, data: Ivschat.Types.ListRoomsResponse) => void): Request<Ivschat.Types.ListRoomsResponse, AWSError>;
  /**
   * Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of updateTime.
   */
  listRooms(callback?: (err: AWSError, data: Ivschat.Types.ListRoomsResponse) => void): Request<Ivschat.Types.ListRoomsResponse, AWSError>;
  /**
   * Gets information about AWS tags for the specified ARN.
   */
  listTagsForResource(params: Ivschat.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Ivschat.Types.ListTagsForResourceResponse) => void): Request<Ivschat.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets information about AWS tags for the specified ARN.
   */
  listTagsForResource(callback?: (err: AWSError, data: Ivschat.Types.ListTagsForResourceResponse) => void): Request<Ivschat.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
   */
  sendEvent(params: Ivschat.Types.SendEventRequest, callback?: (err: AWSError, data: Ivschat.Types.SendEventResponse) => void): Request<Ivschat.Types.SendEventResponse, AWSError>;
  /**
   * Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
   */
  sendEvent(callback?: (err: AWSError, data: Ivschat.Types.SendEventResponse) => void): Request<Ivschat.Types.SendEventResponse, AWSError>;
  /**
   * Adds or updates tags for the AWS resource with the specified ARN.
   */
  tagResource(params: Ivschat.Types.TagResourceRequest, callback?: (err: AWSError, data: Ivschat.Types.TagResourceResponse) => void): Request<Ivschat.Types.TagResourceResponse, AWSError>;
  /**
   * Adds or updates tags for the AWS resource with the specified ARN.
   */
  tagResource(callback?: (err: AWSError, data: Ivschat.Types.TagResourceResponse) => void): Request<Ivschat.Types.TagResourceResponse, AWSError>;
  /**
   * Removes tags from the resource with the specified ARN.
   */
  untagResource(params: Ivschat.Types.UntagResourceRequest, callback?: (err: AWSError, data: Ivschat.Types.UntagResourceResponse) => void): Request<Ivschat.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes tags from the resource with the specified ARN.
   */
  untagResource(callback?: (err: AWSError, data: Ivschat.Types.UntagResourceResponse) => void): Request<Ivschat.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a room’s configuration.
   */
  updateRoom(params: Ivschat.Types.UpdateRoomRequest, callback?: (err: AWSError, data: Ivschat.Types.UpdateRoomResponse) => void): Request<Ivschat.Types.UpdateRoomResponse, AWSError>;
  /**
   * Updates a room’s configuration.
   */
  updateRoom(callback?: (err: AWSError, data: Ivschat.Types.UpdateRoomResponse) => void): Request<Ivschat.Types.UpdateRoomResponse, AWSError>;
}
declare namespace Ivschat {
  export type ChatToken = string;
  export type ChatTokenAttributes = {[key: string]: String};
  export type ChatTokenCapabilities = ChatTokenCapability[];
  export type ChatTokenCapability = "SEND_MESSAGE"|"DISCONNECT_USER"|"DELETE_MESSAGE"|string;
  export interface CreateChatTokenRequest {
    /**
     * Application-provided attributes to encode into the token and attach to a chat session. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
     */
    attributes?: ChatTokenAttributes;
    /**
     * Set of capabilities that the user is allowed to perform in the room. Default: None (the capability to view messages is implicitly included in all requests).
     */
    capabilities?: ChatTokenCapabilities;
    /**
     * Identifier of the room that the client is trying to access. Currently this must be an ARN. 
     */
    roomIdentifier: RoomIdentifier;
    /**
     * Session duration (in minutes), after which the session expires. Default: 60 (1 hour).
     */
    sessionDurationInMinutes?: SessionDurationInMinutes;
    /**
     * Application-provided ID that uniquely identifies the user associated with this token. This can be any UTF-8 encoded text.
     */
    userId: UserID;
  }
  export interface CreateChatTokenResponse {
    /**
     * Time after which an end user's session is no longer valid. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    sessionExpirationTime?: Time;
    /**
     * The issued client token, encrypted.
     */
    token?: ChatToken;
    /**
     * Time after which the token is no longer valid and cannot be used to connect to a room. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    tokenExpirationTime?: Time;
  }
  export interface CreateRoomRequest {
    /**
     * Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
     */
    maximumMessageLength?: RoomMaxMessageLength;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10. 
     */
    maximumMessageRatePerSecond?: RoomMaxMessageRatePerSecond;
    /**
     * Configuration information for optional review of messages.
     */
    messageReviewHandler?: MessageReviewHandler;
    /**
     * Room name. The value does not need to be unique.
     */
    name?: RoomName;
    /**
     * Tags to attach to the resource. Array of maps, each of the form string:string (key:value). 
     */
    tags?: Tags;
  }
  export interface CreateRoomResponse {
    /**
     * Room ARN, assigned by the system.
     */
    arn?: RoomArn;
    /**
     * Time when the room was created. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    createTime?: Time;
    /**
     * Room ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
     */
    id?: RoomID;
    /**
     * Maximum number of characters in a single message, from the request.
     */
    maximumMessageLength?: RoomMaxMessageLength;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients), from the request.
     */
    maximumMessageRatePerSecond?: RoomMaxMessageRatePerSecond;
    /**
     * Configuration information for optional review of messages.
     */
    messageReviewHandler?: MessageReviewHandler;
    /**
     * Room name, from the request (if specified).
     */
    name?: RoomName;
    /**
     * Tags attached to the resource, from the request.
     */
    tags?: Tags;
    /**
     * Time of the room’s last update. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    updateTime?: Time;
  }
  export interface DeleteMessageRequest {
    /**
     * ID of the message to be deleted. This is the Id field in the received message (see  Message (Subscribe) in the Chat Messaging API).
     */
    id: MessageID;
    /**
     * Reason for deleting the message.
     */
    reason?: Reason;
    /**
     * Identifier of the room where the message should be deleted. Currently this must be an ARN. 
     */
    roomIdentifier: RoomIdentifier;
  }
  export interface DeleteMessageResponse {
    /**
     * Operation identifier, generated by Amazon IVS Chat.
     */
    id?: ID;
  }
  export interface DeleteRoomRequest {
    /**
     * Identifier of the room to be deleted. Currently this must be an ARN.
     */
    identifier: RoomIdentifier;
  }
  export interface DisconnectUserRequest {
    /**
     * Reason for disconnecting the user.
     */
    reason?: Reason;
    /**
     * Identifier of the room from which the user's clients should be disconnected. Currently this must be an ARN.
     */
    roomIdentifier: RoomIdentifier;
    /**
     * ID of the user (connection) to disconnect from the room.
     */
    userId: UserID;
  }
  export interface DisconnectUserResponse {
  }
  export type EventAttributes = {[key: string]: String};
  export type EventName = string;
  export type FallbackResult = "ALLOW"|"DENY"|string;
  export interface GetRoomRequest {
    /**
     * Identifier of the room for which the configuration is to be retrieved. Currently this must be an ARN.
     */
    identifier: RoomIdentifier;
  }
  export interface GetRoomResponse {
    /**
     * Room ARN, from the request (if identifier was an ARN).
     */
    arn?: RoomArn;
    /**
     * Time when the room was created. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    createTime?: Time;
    /**
     * Room ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
     */
    id?: RoomID;
    /**
     * Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
     */
    maximumMessageLength?: RoomMaxMessageLength;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
     */
    maximumMessageRatePerSecond?: RoomMaxMessageRatePerSecond;
    /**
     * Configuration information for optional review of messages.
     */
    messageReviewHandler?: MessageReviewHandler;
    /**
     * Room name. The value does not need to be unique.
     */
    name?: RoomName;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value).
     */
    tags?: Tags;
    /**
     * Time of the room’s last update. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    updateTime?: Time;
  }
  export type ID = string;
  export type LambdaArn = string;
  export interface ListRoomsRequest {
    /**
     * Maximum number of rooms to return. Default: 50.
     */
    maxResults?: MaxRoomResults;
    /**
     * Filters the list to match the specified message review handler URI.
     */
    messageReviewHandlerUri?: LambdaArn;
    /**
     * Filters the list to match the specified room name.
     */
    name?: RoomName;
    /**
     * The first room to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRoomsResponse {
    /**
     * If there are more rooms than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
    /**
     * List of the matching rooms (summary information only).
     */
    rooms: RoomList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource to be retrieved. The ARN must be URL-encoded.
     */
    resourceArn: ResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Tags to attach to the resource. Array of maps, each of the form string:string (key:value).
     */
    tags: Tags;
  }
  export type MaxRoomResults = number;
  export type MessageID = string;
  export interface MessageReviewHandler {
    /**
     * Specifies the fallback behavior (whether the message is allowed or denied) if the handler does not return a valid response, encounters an error, or times out. (For the timeout period, see  Service Quotas.) If allowed, the message is delivered with returned content to all users connected to the room. If denied, the message is not delivered to any user. Default: ALLOW.
     */
    fallbackResult?: FallbackResult;
    /**
     * Identifier of the message review handler. Currently this must be an ARN of a lambda function.
     */
    uri?: LambdaArn;
  }
  export type PaginationToken = string;
  export type Reason = string;
  export type ResourceArn = string;
  export type RoomArn = string;
  export type RoomID = string;
  export type RoomIdentifier = string;
  export type RoomList = RoomSummary[];
  export type RoomMaxMessageLength = number;
  export type RoomMaxMessageRatePerSecond = number;
  export type RoomName = string;
  export interface RoomSummary {
    /**
     * Room ARN.
     */
    arn?: RoomArn;
    /**
     * Time when the room was created. This is an ISO 8601 timestamp; note that this is returned as a string. 
     */
    createTime?: Time;
    /**
     * Room ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
     */
    id?: RoomID;
    /**
     * Configuration information for optional review of messages.
     */
    messageReviewHandler?: MessageReviewHandler;
    /**
     * Room name. The value does not need to be unique.
     */
    name?: RoomName;
    /**
     * Tags attached to the resource. 
     */
    tags?: Tags;
    /**
     * Time of the room’s last update. This is an ISO 8601 timestamp; note that this is returned as a string. 
     */
    updateTime?: Time;
  }
  export interface SendEventRequest {
    /**
     * Application-defined metadata to attach to the event sent to clients. The maximum length of the metadata is 1 KB total.
     */
    attributes?: EventAttributes;
    /**
     * Application-defined name of the event to send to clients.
     */
    eventName: EventName;
    /**
     * Identifier of the room to which the event will be sent. Currently this must be an ARN.
     */
    roomIdentifier: RoomIdentifier;
  }
  export interface SendEventResponse {
    /**
     * An identifier generated by Amazon IVS Chat. This identifier must be used in subsequent operations for this message, such as DeleteMessage.
     */
    id?: ID;
  }
  export type SessionDurationInMinutes = number;
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The ARN of the resource to be tagged. The ARN must be URL-encoded.
     */
    resourceArn: ResourceArn;
    /**
     * Array of tags to be added or updated.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type Time = Date;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource to be untagged. The ARN must be URL-encoded.
     */
    resourceArn: ResourceArn;
    /**
     * Array of tags to be removed.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateRoomRequest {
    /**
     * Identifier of the room to be updated. Currently this must be an ARN.
     */
    identifier: RoomIdentifier;
    /**
     * The maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
     */
    maximumMessageLength?: RoomMaxMessageLength;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
     */
    maximumMessageRatePerSecond?: RoomMaxMessageRatePerSecond;
    /**
     * Configuration information for optional review of messages. Specify an empty uri string to disassociate a message review handler from the specified room.
     */
    messageReviewHandler?: MessageReviewHandler;
    /**
     * Room name. The value does not need to be unique.
     */
    name?: RoomName;
  }
  export interface UpdateRoomResponse {
    /**
     * Room ARN, from the request (if identifier was an ARN).
     */
    arn?: RoomArn;
    /**
     * Time when the room was created. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    createTime?: Time;
    /**
     * Room ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
     */
    id?: RoomID;
    /**
     * Maximum number of characters in a single message, from the request.
     */
    maximumMessageLength?: RoomMaxMessageLength;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients), from the request.
     */
    maximumMessageRatePerSecond?: RoomMaxMessageRatePerSecond;
    /**
     * Configuration information for optional review of messages.
     */
    messageReviewHandler?: MessageReviewHandler;
    /**
     * Room name, from the request.
     */
    name?: RoomName;
    /**
     * Tags attached to the resource.
     */
    tags?: Tags;
    /**
     * Time of the room’s last update. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    updateTime?: Time;
  }
  export type UserID = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Ivschat client.
   */
  export import Types = Ivschat;
}
export = Ivschat;
