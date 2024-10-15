import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class PersonalizeEvents extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PersonalizeEvents.Types.ClientConfiguration)
  config: Config & PersonalizeEvents.Types.ClientConfiguration;
  /**
   * Records action interaction event data. An action interaction event is an interaction between a user and an action. For example, a user taking an action, such a enrolling in a membership program or downloading your app.  For more information about recording action interactions, see Recording action interaction events. For more information about actions in an Actions dataset, see Actions dataset.
   */
  putActionInteractions(params: PersonalizeEvents.Types.PutActionInteractionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records action interaction event data. An action interaction event is an interaction between a user and an action. For example, a user taking an action, such a enrolling in a membership program or downloading your app.  For more information about recording action interactions, see Recording action interaction events. For more information about actions in an Actions dataset, see Actions dataset.
   */
  putActionInteractions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more actions to an Actions dataset. For more information see Importing actions individually. 
   */
  putActions(params: PersonalizeEvents.Types.PutActionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more actions to an Actions dataset. For more information see Importing actions individually. 
   */
  putActions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records item interaction event data. For more information see Recording item interaction events.
   */
  putEvents(params: PersonalizeEvents.Types.PutEventsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records item interaction event data. For more information see Recording item interaction events.
   */
  putEvents(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more items to an Items dataset. For more information see Importing items individually. 
   */
  putItems(params: PersonalizeEvents.Types.PutItemsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more items to an Items dataset. For more information see Importing items individually. 
   */
  putItems(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more users to a Users dataset. For more information see Importing users individually.
   */
  putUsers(params: PersonalizeEvents.Types.PutUsersRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more users to a Users dataset. For more information see Importing users individually.
   */
  putUsers(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace PersonalizeEvents {
  export interface Action {
    /**
     * The ID associated with the action.
     */
    actionId: StringType;
    /**
     * A string map of action-specific metadata. Each element in the map consists of a key-value pair. For example, {"value": "100"}. The keys use camel case names that match the fields in the schema for the Actions dataset. In the previous example, the value matches the 'VALUE' field defined in the Actions schema. For categorical string data, to include multiple categories for a single action, separate each category with a pipe separator (|). For example, \"Deluxe|Premium\".
     */
    properties?: ActionProperties;
  }
  export type ActionId = string;
  export type ActionImpression = ActionId[];
  export interface ActionInteraction {
    /**
     * The ID of the action the user interacted with. This corresponds to the ACTION_ID field of the Action interaction schema.
     */
    actionId: ActionId;
    /**
     * The ID of the user who interacted with the action. This corresponds to the USER_ID field of the Action interaction schema.
     */
    userId?: UserId;
    /**
     * The ID associated with the user's visit. Your application generates a unique sessionId when a user first visits your website or uses your application. 
     */
    sessionId: StringType;
    /**
     * The timestamp for when the action interaction event occurred. Timestamps must be in Unix epoch time format, in seconds.
     */
    timestamp: _Date;
    /**
     * The type of action interaction event. You can specify Viewed, Taken, and Not Taken event types. For more information about action interaction event type data, see Event type data. 
     */
    eventType: StringType;
    /**
     * An ID associated with the event. If an event ID is not provided, Amazon Personalize generates a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses the event ID to distinguish unique events. Any subsequent events after the first with the same event ID are not used in model training.
     */
    eventId?: StringType;
    /**
     * The ID of the list of recommendations that contains the action the user interacted with.
     */
    recommendationId?: RecommendationId;
    /**
     * A list of action IDs that represents the sequence of actions you have shown the user. For example, ["actionId1", "actionId2", "actionId3"]. Amazon Personalize doesn't use impressions data from action interaction events. Instead, record multiple events for each action and use the Viewed event type. 
     */
    impression?: ActionImpression;
    /**
     * A string map of event-specific data that you might choose to record. For example, if a user takes an action, other than the action ID, you might also send the number of actions taken by the user. Each item in the map consists of a key-value pair. For example,  {"numberOfActions": "12"}  The keys use camel case names that match the fields in the Action interactions schema. In the above example, the numberOfActions would match the 'NUMBER_OF_ACTIONS' field defined in the Action interactions schema.  The following can't be included as a keyword for properties (case insensitive).     userId     sessionId    eventType   timestamp   recommendationId   impression  
     */
    properties?: ActionInteractionProperties;
  }
  export type ActionInteractionProperties = string;
  export type ActionInteractionsList = ActionInteraction[];
  export type ActionList = Action[];
  export type ActionProperties = string;
  export type Arn = string;
  export type _Date = Date;
  export interface Event {
    /**
     * An ID associated with the event. If an event ID is not provided, Amazon Personalize generates a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses the event ID to distinguish unique events. Any subsequent events after the first with the same event ID are not used in model training.
     */
    eventId?: StringType;
    /**
     * The type of event, such as click or download. This property corresponds to the EVENT_TYPE field of your Item interactions dataset's schema and depends on the types of events you are tracking.
     */
    eventType: StringType;
    /**
     * The event value that corresponds to the EVENT_VALUE field of the Item interactions schema.
     */
    eventValue?: FloatType;
    /**
     * The item ID key that corresponds to the ITEM_ID field of the Item interactions dataset's schema.
     */
    itemId?: ItemId;
    /**
     * A string map of event-specific data that you might choose to record. For example, if a user rates a movie on your site, other than movie ID (itemId) and rating (eventValue) , you might also send the number of movie ratings made by the user. Each item in the map consists of a key-value pair. For example,  {"numberOfRatings": "12"}  The keys use camel case names that match the fields in the Item interactions dataset's schema. In the above example, the numberOfRatings would match the 'NUMBER_OF_RATINGS' field defined in the Item interactions dataset's schema.  The following can't be included as a keyword for properties (case insensitive).     userId     sessionId    eventType   timestamp   recommendationId   impression  
     */
    properties?: EventPropertiesJSON;
    /**
     * The timestamp (in Unix time) on the client side when the event occurred.
     */
    sentAt: _Date;
    /**
     * The ID of the list of recommendations that contains the item the user interacted with. Provide a recommendationId to have Amazon Personalize implicitly record the recommendations you show your user as impressions data. Or provide a recommendationId if you use a metric attribution to measure the impact of recommendations.   For more information on recording impressions data, see Recording impressions data. For more information on creating a metric attribution see Measuring impact of recommendations. 
     */
    recommendationId?: RecommendationId;
    /**
     * A list of item IDs that represents the sequence of items you have shown the user. For example, ["itemId1", "itemId2", "itemId3"]. Provide a list of items to manually record impressions data for an event. For more information on recording impressions data, see Recording impressions data. 
     */
    impression?: Impression;
    /**
     * Contains information about the metric attribution associated with an event. For more information about metric attributions, see Measuring impact of recommendations.
     */
    metricAttribution?: MetricAttribution;
  }
  export type EventAttributionSource = string;
  export type EventList = Event[];
  export type EventPropertiesJSON = string;
  export type FloatType = number;
  export type Impression = ItemId[];
  export interface Item {
    /**
     * The ID associated with the item.
     */
    itemId: StringType;
    /**
     * A string map of item-specific metadata. Each element in the map consists of a key-value pair. For example, {"numberOfRatings": "12"}. The keys use camel case names that match the fields in the schema for the Items dataset. In the previous example, the numberOfRatings matches the 'NUMBER_OF_RATINGS' field defined in the Items schema. For categorical string data, to include multiple categories for a single item, separate each category with a pipe separator (|). For example, \"Horror|Action\".
     */
    properties?: ItemProperties;
  }
  export type ItemId = string;
  export type ItemList = Item[];
  export type ItemProperties = string;
  export interface MetricAttribution {
    /**
     * The source of the event, such as a third party.
     */
    eventAttributionSource: EventAttributionSource;
  }
  export interface PutActionInteractionsRequest {
    /**
     * The ID of your action interaction event tracker. When you create an Action interactions dataset, Amazon Personalize creates an action interaction event tracker for you. For more information, see Action interaction event tracker ID.
     */
    trackingId: StringType;
    /**
     * A list of action interaction events from the session.
     */
    actionInteractions: ActionInteractionsList;
  }
  export interface PutActionsRequest {
    /**
     * The Amazon Resource Name (ARN) of the Actions dataset you are adding the action or actions to.
     */
    datasetArn: Arn;
    /**
     * A list of action data.
     */
    actions: ActionList;
  }
  export interface PutEventsRequest {
    /**
     * The tracking ID for the event. The ID is generated by a call to the CreateEventTracker API.
     */
    trackingId: StringType;
    /**
     * The user associated with the event.
     */
    userId?: UserId;
    /**
     * The session ID associated with the user's visit. Your application generates the sessionId when a user first visits your website or uses your application. Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see Recording item interaction events.
     */
    sessionId: StringType;
    /**
     * A list of event data from the session.
     */
    eventList: EventList;
  }
  export interface PutItemsRequest {
    /**
     * The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.
     */
    datasetArn: Arn;
    /**
     * A list of item data.
     */
    items: ItemList;
  }
  export interface PutUsersRequest {
    /**
     * The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.
     */
    datasetArn: Arn;
    /**
     * A list of user data.
     */
    users: UserList;
  }
  export type RecommendationId = string;
  export type StringType = string;
  export interface User {
    /**
     * The ID associated with the user.
     */
    userId: StringType;
    /**
     * A string map of user-specific metadata. Each element in the map consists of a key-value pair. For example, {"numberOfVideosWatched": "45"}. The keys use camel case names that match the fields in the schema for the Users dataset. In the previous example, the numberOfVideosWatched matches the 'NUMBER_OF_VIDEOS_WATCHED' field defined in the Users schema. For categorical string data, to include multiple categories for a single user, separate each category with a pipe separator (|). For example, \"Member|Frequent shopper\".
     */
    properties?: UserProperties;
  }
  export type UserId = string;
  export type UserList = User[];
  export type UserProperties = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-03-22"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PersonalizeEvents client.
   */
  export import Types = PersonalizeEvents;
}
export = PersonalizeEvents;
