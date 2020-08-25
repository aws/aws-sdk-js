import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ConnectParticipant extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ConnectParticipant.Types.ClientConfiguration)
  config: Config & ConnectParticipant.Types.ClientConfiguration;
  /**
   * Creates the participant's connection. Note that ParticipantToken is used for invoking this API instead of ConnectionToken. The participant token is valid for the lifetime of the participant – until the they are part of a contact. The response URL for WEBSOCKET Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic.  For chat, you need to publish the following on the established websocket connection:  {"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}  Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.
   */
  createParticipantConnection(params: ConnectParticipant.Types.CreateParticipantConnectionRequest, callback?: (err: AWSError, data: ConnectParticipant.Types.CreateParticipantConnectionResponse) => void): Request<ConnectParticipant.Types.CreateParticipantConnectionResponse, AWSError>;
  /**
   * Creates the participant's connection. Note that ParticipantToken is used for invoking this API instead of ConnectionToken. The participant token is valid for the lifetime of the participant – until the they are part of a contact. The response URL for WEBSOCKET Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic.  For chat, you need to publish the following on the established websocket connection:  {"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}  Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.
   */
  createParticipantConnection(callback?: (err: AWSError, data: ConnectParticipant.Types.CreateParticipantConnectionResponse) => void): Request<ConnectParticipant.Types.CreateParticipantConnectionResponse, AWSError>;
  /**
   * Disconnects a participant. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
   */
  disconnectParticipant(params: ConnectParticipant.Types.DisconnectParticipantRequest, callback?: (err: AWSError, data: ConnectParticipant.Types.DisconnectParticipantResponse) => void): Request<ConnectParticipant.Types.DisconnectParticipantResponse, AWSError>;
  /**
   * Disconnects a participant. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
   */
  disconnectParticipant(callback?: (err: AWSError, data: ConnectParticipant.Types.DisconnectParticipantResponse) => void): Request<ConnectParticipant.Types.DisconnectParticipantResponse, AWSError>;
  /**
   * Retrieves a transcript of the session. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
   */
  getTranscript(params: ConnectParticipant.Types.GetTranscriptRequest, callback?: (err: AWSError, data: ConnectParticipant.Types.GetTranscriptResponse) => void): Request<ConnectParticipant.Types.GetTranscriptResponse, AWSError>;
  /**
   * Retrieves a transcript of the session. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
   */
  getTranscript(callback?: (err: AWSError, data: ConnectParticipant.Types.GetTranscriptResponse) => void): Request<ConnectParticipant.Types.GetTranscriptResponse, AWSError>;
  /**
   * Sends an event. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
   */
  sendEvent(params: ConnectParticipant.Types.SendEventRequest, callback?: (err: AWSError, data: ConnectParticipant.Types.SendEventResponse) => void): Request<ConnectParticipant.Types.SendEventResponse, AWSError>;
  /**
   * Sends an event. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
   */
  sendEvent(callback?: (err: AWSError, data: ConnectParticipant.Types.SendEventResponse) => void): Request<ConnectParticipant.Types.SendEventResponse, AWSError>;
  /**
   * Sends a message. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
   */
  sendMessage(params: ConnectParticipant.Types.SendMessageRequest, callback?: (err: AWSError, data: ConnectParticipant.Types.SendMessageResponse) => void): Request<ConnectParticipant.Types.SendMessageResponse, AWSError>;
  /**
   * Sends a message. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
   */
  sendMessage(callback?: (err: AWSError, data: ConnectParticipant.Types.SendMessageResponse) => void): Request<ConnectParticipant.Types.SendMessageResponse, AWSError>;
}
declare namespace ConnectParticipant {
  export type ChatContent = string;
  export type ChatContentType = string;
  export type ChatItemId = string;
  export type ChatItemType = "MESSAGE"|"EVENT"|"CONNECTION_ACK"|string;
  export type ClientToken = string;
  export interface ConnectionCredentials {
    /**
     * The connection token.
     */
    ConnectionToken?: ParticipantToken;
    /**
     * The expiration of the token. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
     */
    Expiry?: ISO8601Datetime;
  }
  export type ConnectionType = "WEBSOCKET"|"CONNECTION_CREDENTIALS"|string;
  export type ConnectionTypeList = ConnectionType[];
  export type ContactId = string;
  export interface CreateParticipantConnectionRequest {
    /**
     * Type of connection information required.
     */
    Type: ConnectionTypeList;
    /**
     * Participant Token as obtained from StartChatContact API response.
     */
    ParticipantToken: ParticipantToken;
  }
  export interface CreateParticipantConnectionResponse {
    /**
     * Creates the participant's websocket connection.
     */
    Websocket?: Websocket;
    /**
     * Creates the participant's connection credentials. The authentication token associated with the participant's connection.
     */
    ConnectionCredentials?: ConnectionCredentials;
  }
  export interface DisconnectParticipantRequest {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    ClientToken?: ClientToken;
    /**
     * The authentication token associated with the participant's connection.
     */
    ConnectionToken: ParticipantToken;
  }
  export interface DisconnectParticipantResponse {
  }
  export type DisplayName = string;
  export interface GetTranscriptRequest {
    /**
     * The contactId from the current contact chain for which transcript is needed.
     */
    ContactId?: ContactId;
    /**
     * The maximum number of results to return in the page. Default: 10. 
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. 
     */
    ScanDirection?: ScanDirection;
    /**
     * The sort order for the records. Default: DESCENDING.
     */
    SortOrder?: SortKey;
    /**
     * A filtering option for where to start.
     */
    StartPosition?: StartPosition;
    /**
     * The authentication token associated with the participant's connection.
     */
    ConnectionToken: ParticipantToken;
  }
  export interface GetTranscriptResponse {
    /**
     * The initial contact ID for the contact. 
     */
    InitialContactId?: ContactId;
    /**
     * The list of messages in the session.
     */
    Transcript?: Transcript;
    /**
     * The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export type ISO8601Datetime = string;
  export type Instant = string;
  export interface Item {
    /**
     * The time when the message or event was sent. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
     */
    AbsoluteTime?: Instant;
    /**
     * The content of the message or event.
     */
    Content?: ChatContent;
    /**
     * The type of content of the item.
     */
    ContentType?: ChatContentType;
    /**
     * The ID of the item.
     */
    Id?: ChatItemId;
    /**
     * Type of the item: message or event. 
     */
    Type?: ChatItemType;
    /**
     * The ID of the sender in the session.
     */
    ParticipantId?: ParticipantId;
    /**
     * The chat display name of the sender.
     */
    DisplayName?: DisplayName;
    /**
     * The role of the sender. For example, is it a customer, agent, or system.
     */
    ParticipantRole?: ParticipantRole;
  }
  export type MaxResults = number;
  export type MostRecent = number;
  export type NextToken = string;
  export type ParticipantId = string;
  export type ParticipantRole = "AGENT"|"CUSTOMER"|"SYSTEM"|string;
  export type ParticipantToken = string;
  export type PreSignedConnectionUrl = string;
  export type ScanDirection = "FORWARD"|"BACKWARD"|string;
  export interface SendEventRequest {
    /**
     * The content type of the request. Supported types are:   application/vnd.amazonaws.connect.event.typing   application/vnd.amazonaws.connect.event.connection.acknowledged  
     */
    ContentType: ChatContentType;
    /**
     * The content of the event to be sent (for example, message text). This is not yet supported.
     */
    Content?: ChatContent;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    ClientToken?: ClientToken;
    /**
     * The authentication token associated with the participant's connection.
     */
    ConnectionToken: ParticipantToken;
  }
  export interface SendEventResponse {
    /**
     * The ID of the response.
     */
    Id?: ChatItemId;
    /**
     * The time when the event was sent. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
     */
    AbsoluteTime?: Instant;
  }
  export interface SendMessageRequest {
    /**
     * The type of the content. Supported types are text/plain.
     */
    ContentType: ChatContentType;
    /**
     * The content of the message.
     */
    Content: ChatContent;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    ClientToken?: ClientToken;
    /**
     * The authentication token associated with the connection.
     */
    ConnectionToken: ParticipantToken;
  }
  export interface SendMessageResponse {
    /**
     * The ID of the message.
     */
    Id?: ChatItemId;
    /**
     * The time when the message was sent. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
     */
    AbsoluteTime?: Instant;
  }
  export type SortKey = "DESCENDING"|"ASCENDING"|string;
  export interface StartPosition {
    /**
     * The ID of the message or event where to start. 
     */
    Id?: ChatItemId;
    /**
     * The time in ISO format where to start. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
     */
    AbsoluteTime?: Instant;
    /**
     * The start position of the most recent message where you want to start. 
     */
    MostRecent?: MostRecent;
  }
  export type Transcript = Item[];
  export interface Websocket {
    /**
     * The URL of the websocket.
     */
    Url?: PreSignedConnectionUrl;
    /**
     * The URL expiration timestamp in ISO date format. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
     */
    ConnectionExpiry?: ISO8601Datetime;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-09-07"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ConnectParticipant client.
   */
  export import Types = ConnectParticipant;
}
export = ConnectParticipant;
