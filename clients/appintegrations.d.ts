import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class AppIntegrations extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AppIntegrations.Types.ClientConfiguration)
  config: Config & AppIntegrations.Types.ClientConfiguration;
  /**
   * Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
   */
  createEventIntegration(params: AppIntegrations.Types.CreateEventIntegrationRequest, callback?: (err: AWSError, data: AppIntegrations.Types.CreateEventIntegrationResponse) => void): Request<AppIntegrations.Types.CreateEventIntegrationResponse, AWSError>;
  /**
   * Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
   */
  createEventIntegration(callback?: (err: AWSError, data: AppIntegrations.Types.CreateEventIntegrationResponse) => void): Request<AppIntegrations.Types.CreateEventIntegrationResponse, AWSError>;
  /**
   * Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
   */
  deleteEventIntegration(params: AppIntegrations.Types.DeleteEventIntegrationRequest, callback?: (err: AWSError, data: AppIntegrations.Types.DeleteEventIntegrationResponse) => void): Request<AppIntegrations.Types.DeleteEventIntegrationResponse, AWSError>;
  /**
   * Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
   */
  deleteEventIntegration(callback?: (err: AWSError, data: AppIntegrations.Types.DeleteEventIntegrationResponse) => void): Request<AppIntegrations.Types.DeleteEventIntegrationResponse, AWSError>;
  /**
   * Return information about the event integration.
   */
  getEventIntegration(params: AppIntegrations.Types.GetEventIntegrationRequest, callback?: (err: AWSError, data: AppIntegrations.Types.GetEventIntegrationResponse) => void): Request<AppIntegrations.Types.GetEventIntegrationResponse, AWSError>;
  /**
   * Return information about the event integration.
   */
  getEventIntegration(callback?: (err: AWSError, data: AppIntegrations.Types.GetEventIntegrationResponse) => void): Request<AppIntegrations.Types.GetEventIntegrationResponse, AWSError>;
  /**
   * Returns a paginated list of event integration associations in the account. 
   */
  listEventIntegrationAssociations(params: AppIntegrations.Types.ListEventIntegrationAssociationsRequest, callback?: (err: AWSError, data: AppIntegrations.Types.ListEventIntegrationAssociationsResponse) => void): Request<AppIntegrations.Types.ListEventIntegrationAssociationsResponse, AWSError>;
  /**
   * Returns a paginated list of event integration associations in the account. 
   */
  listEventIntegrationAssociations(callback?: (err: AWSError, data: AppIntegrations.Types.ListEventIntegrationAssociationsResponse) => void): Request<AppIntegrations.Types.ListEventIntegrationAssociationsResponse, AWSError>;
  /**
   * Returns a paginated list of event integrations in the account.
   */
  listEventIntegrations(params: AppIntegrations.Types.ListEventIntegrationsRequest, callback?: (err: AWSError, data: AppIntegrations.Types.ListEventIntegrationsResponse) => void): Request<AppIntegrations.Types.ListEventIntegrationsResponse, AWSError>;
  /**
   * Returns a paginated list of event integrations in the account.
   */
  listEventIntegrations(callback?: (err: AWSError, data: AppIntegrations.Types.ListEventIntegrationsResponse) => void): Request<AppIntegrations.Types.ListEventIntegrationsResponse, AWSError>;
  /**
   * Lists the tags for the specified resource.
   */
  listTagsForResource(params: AppIntegrations.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: AppIntegrations.Types.ListTagsForResourceResponse) => void): Request<AppIntegrations.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags for the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: AppIntegrations.Types.ListTagsForResourceResponse) => void): Request<AppIntegrations.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource.
   */
  tagResource(params: AppIntegrations.Types.TagResourceRequest, callback?: (err: AWSError, data: AppIntegrations.Types.TagResourceResponse) => void): Request<AppIntegrations.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: AppIntegrations.Types.TagResourceResponse) => void): Request<AppIntegrations.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(params: AppIntegrations.Types.UntagResourceRequest, callback?: (err: AWSError, data: AppIntegrations.Types.UntagResourceResponse) => void): Request<AppIntegrations.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: AppIntegrations.Types.UntagResourceResponse) => void): Request<AppIntegrations.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the description of an event integration.
   */
  updateEventIntegration(params: AppIntegrations.Types.UpdateEventIntegrationRequest, callback?: (err: AWSError, data: AppIntegrations.Types.UpdateEventIntegrationResponse) => void): Request<AppIntegrations.Types.UpdateEventIntegrationResponse, AWSError>;
  /**
   * Updates the description of an event integration.
   */
  updateEventIntegration(callback?: (err: AWSError, data: AppIntegrations.Types.UpdateEventIntegrationResponse) => void): Request<AppIntegrations.Types.UpdateEventIntegrationResponse, AWSError>;
}
declare namespace AppIntegrations {
  export type Arn = string;
  export type ClientAssociationMetadata = {[key: string]: NonBlankString};
  export type ClientId = string;
  export interface CreateEventIntegrationRequest {
    /**
     * The name of the event integration.
     */
    Name: Name;
    /**
     * The description of the event integration.
     */
    Description?: Description;
    /**
     * The event filter.
     */
    EventFilter: EventFilter;
    /**
     * The EventBridge bus.
     */
    EventBridgeBus: EventBridgeBus;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    ClientToken?: IdempotencyToken;
    /**
     * One or more tags.
     */
    Tags?: TagMap;
  }
  export interface CreateEventIntegrationResponse {
    /**
     * The Amazon Resource Name (ARN) of the event integration. 
     */
    EventIntegrationArn?: Arn;
  }
  export interface DeleteEventIntegrationRequest {
    /**
     * The name of the event integration.
     */
    Name: Name;
  }
  export interface DeleteEventIntegrationResponse {
  }
  export type Description = string;
  export type EventBridgeBus = string;
  export type EventBridgeRuleName = string;
  export interface EventFilter {
    /**
     * The source of the events.
     */
    Source: Source;
  }
  export interface EventIntegration {
    /**
     * The Amazon Resource Name (ARN) of the event integration.
     */
    EventIntegrationArn?: Arn;
    /**
     * The name of the event integration.
     */
    Name?: Name;
    /**
     * The event integration description.
     */
    Description?: Description;
    /**
     * The event integration filter.
     */
    EventFilter?: EventFilter;
    /**
     * The Amazon EventBridge bus for the event integration.
     */
    EventBridgeBus?: EventBridgeBus;
    /**
     * The tags.
     */
    Tags?: TagMap;
  }
  export interface EventIntegrationAssociation {
    /**
     * The Amazon Resource Name (ARN) for the event integration association.
     */
    EventIntegrationAssociationArn?: Arn;
    /**
     * The identifier for the event integration association.
     */
    EventIntegrationAssociationId?: UUID;
    /**
     * The name of the event integration.
     */
    EventIntegrationName?: Name;
    /**
     * The identifier for the client that is associated with the event integration.
     */
    ClientId?: ClientId;
    /**
     * The name of the EventBridge rule.
     */
    EventBridgeRuleName?: EventBridgeRuleName;
    /**
     * The metadata associated with the client.
     */
    ClientAssociationMetadata?: ClientAssociationMetadata;
  }
  export type EventIntegrationAssociationsList = EventIntegrationAssociation[];
  export type EventIntegrationsList = EventIntegration[];
  export interface GetEventIntegrationRequest {
    /**
     * The name of the event integration. 
     */
    Name: Name;
  }
  export interface GetEventIntegrationResponse {
    /**
     * The name of the event integration. 
     */
    Name?: Name;
    /**
     * The description of the event integration.
     */
    Description?: Description;
    /**
     * The Amazon Resource Name (ARN) for the event integration.
     */
    EventIntegrationArn?: Arn;
    /**
     * The EventBridge bus.
     */
    EventBridgeBus?: EventBridgeBus;
    /**
     * The event filter.
     */
    EventFilter?: EventFilter;
    /**
     * One or more tags.
     */
    Tags?: TagMap;
  }
  export type IdempotencyToken = string;
  export interface ListEventIntegrationAssociationsRequest {
    /**
     * The name of the event integration. 
     */
    EventIntegrationName: Name;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResults;
  }
  export interface ListEventIntegrationAssociationsResponse {
    /**
     * The event integration associations.
     */
    EventIntegrationAssociations?: EventIntegrationAssociationsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListEventIntegrationsRequest {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResults;
  }
  export interface ListEventIntegrationsResponse {
    /**
     * The event integrations.
     */
    EventIntegrations?: EventIntegrationsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource. 
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Information about the tags.
     */
    tags?: TagMap;
  }
  export type MaxResults = number;
  export type Name = string;
  export type NextToken = string;
  export type NonBlankString = string;
  export type Source = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
    /**
     * One or more tags. 
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type UUID = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
    /**
     * The tag keys.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateEventIntegrationRequest {
    /**
     * The name of the event integration.
     */
    Name: Name;
    /**
     * The description of the event inegration.
     */
    Description?: Description;
  }
  export interface UpdateEventIntegrationResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-29"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AppIntegrations client.
   */
  export import Types = AppIntegrations;
}
export = AppIntegrations;
