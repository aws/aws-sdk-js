import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class MarketplaceCatalog extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MarketplaceCatalog.Types.ClientConfiguration)
  config: Config & MarketplaceCatalog.Types.ClientConfiguration;
  /**
   * Returns metadata and content for multiple entities. This is the Batch version of the DescribeEntity API and uses the same IAM permission action as DescribeEntity API.
   */
  batchDescribeEntities(params: MarketplaceCatalog.Types.BatchDescribeEntitiesRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.BatchDescribeEntitiesResponse) => void): Request<MarketplaceCatalog.Types.BatchDescribeEntitiesResponse, AWSError>;
  /**
   * Returns metadata and content for multiple entities. This is the Batch version of the DescribeEntity API and uses the same IAM permission action as DescribeEntity API.
   */
  batchDescribeEntities(callback?: (err: AWSError, data: MarketplaceCatalog.Types.BatchDescribeEntitiesResponse) => void): Request<MarketplaceCatalog.Types.BatchDescribeEntitiesResponse, AWSError>;
  /**
   * Used to cancel an open change request. Must be sent before the status of the request changes to APPLYING, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
   */
  cancelChangeSet(params: MarketplaceCatalog.Types.CancelChangeSetRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.CancelChangeSetResponse) => void): Request<MarketplaceCatalog.Types.CancelChangeSetResponse, AWSError>;
  /**
   * Used to cancel an open change request. Must be sent before the status of the request changes to APPLYING, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
   */
  cancelChangeSet(callback?: (err: AWSError, data: MarketplaceCatalog.Types.CancelChangeSetResponse) => void): Request<MarketplaceCatalog.Types.CancelChangeSetResponse, AWSError>;
  /**
   * Deletes a resource-based policy on an entity that is identified by its resource ARN.
   */
  deleteResourcePolicy(params: MarketplaceCatalog.Types.DeleteResourcePolicyRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.DeleteResourcePolicyResponse) => void): Request<MarketplaceCatalog.Types.DeleteResourcePolicyResponse, AWSError>;
  /**
   * Deletes a resource-based policy on an entity that is identified by its resource ARN.
   */
  deleteResourcePolicy(callback?: (err: AWSError, data: MarketplaceCatalog.Types.DeleteResourcePolicyResponse) => void): Request<MarketplaceCatalog.Types.DeleteResourcePolicyResponse, AWSError>;
  /**
   * Provides information about a given change set.
   */
  describeChangeSet(params: MarketplaceCatalog.Types.DescribeChangeSetRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.DescribeChangeSetResponse) => void): Request<MarketplaceCatalog.Types.DescribeChangeSetResponse, AWSError>;
  /**
   * Provides information about a given change set.
   */
  describeChangeSet(callback?: (err: AWSError, data: MarketplaceCatalog.Types.DescribeChangeSetResponse) => void): Request<MarketplaceCatalog.Types.DescribeChangeSetResponse, AWSError>;
  /**
   * Returns the metadata and content of the entity.
   */
  describeEntity(params: MarketplaceCatalog.Types.DescribeEntityRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.DescribeEntityResponse) => void): Request<MarketplaceCatalog.Types.DescribeEntityResponse, AWSError>;
  /**
   * Returns the metadata and content of the entity.
   */
  describeEntity(callback?: (err: AWSError, data: MarketplaceCatalog.Types.DescribeEntityResponse) => void): Request<MarketplaceCatalog.Types.DescribeEntityResponse, AWSError>;
  /**
   * Gets a resource-based policy of an entity that is identified by its resource ARN.
   */
  getResourcePolicy(params: MarketplaceCatalog.Types.GetResourcePolicyRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.GetResourcePolicyResponse) => void): Request<MarketplaceCatalog.Types.GetResourcePolicyResponse, AWSError>;
  /**
   * Gets a resource-based policy of an entity that is identified by its resource ARN.
   */
  getResourcePolicy(callback?: (err: AWSError, data: MarketplaceCatalog.Types.GetResourcePolicyResponse) => void): Request<MarketplaceCatalog.Types.GetResourcePolicyResponse, AWSError>;
  /**
   * Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of entityId, ChangeSetName, and status. If you provide more than one filter, the API operation applies a logical AND between the filters. You can describe a change during the 60-day request history retention period for API calls.
   */
  listChangeSets(params: MarketplaceCatalog.Types.ListChangeSetsRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.ListChangeSetsResponse) => void): Request<MarketplaceCatalog.Types.ListChangeSetsResponse, AWSError>;
  /**
   * Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of entityId, ChangeSetName, and status. If you provide more than one filter, the API operation applies a logical AND between the filters. You can describe a change during the 60-day request history retention period for API calls.
   */
  listChangeSets(callback?: (err: AWSError, data: MarketplaceCatalog.Types.ListChangeSetsResponse) => void): Request<MarketplaceCatalog.Types.ListChangeSetsResponse, AWSError>;
  /**
   * Provides the list of entities of a given type.
   */
  listEntities(params: MarketplaceCatalog.Types.ListEntitiesRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.ListEntitiesResponse) => void): Request<MarketplaceCatalog.Types.ListEntitiesResponse, AWSError>;
  /**
   * Provides the list of entities of a given type.
   */
  listEntities(callback?: (err: AWSError, data: MarketplaceCatalog.Types.ListEntitiesResponse) => void): Request<MarketplaceCatalog.Types.ListEntitiesResponse, AWSError>;
  /**
   * Lists all tags that have been added to a resource (either an entity or change set).
   */
  listTagsForResource(params: MarketplaceCatalog.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.ListTagsForResourceResponse) => void): Request<MarketplaceCatalog.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags that have been added to a resource (either an entity or change set).
   */
  listTagsForResource(callback?: (err: AWSError, data: MarketplaceCatalog.Types.ListTagsForResourceResponse) => void): Request<MarketplaceCatalog.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Attaches a resource-based policy to an entity. Examples of an entity include: AmiProduct and ContainerProduct.
   */
  putResourcePolicy(params: MarketplaceCatalog.Types.PutResourcePolicyRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.PutResourcePolicyResponse) => void): Request<MarketplaceCatalog.Types.PutResourcePolicyResponse, AWSError>;
  /**
   * Attaches a resource-based policy to an entity. Examples of an entity include: AmiProduct and ContainerProduct.
   */
  putResourcePolicy(callback?: (err: AWSError, data: MarketplaceCatalog.Types.PutResourcePolicyResponse) => void): Request<MarketplaceCatalog.Types.PutResourcePolicyResponse, AWSError>;
  /**
   * Allows you to request changes for your entities. Within a single ChangeSet, you can't start the same change type against the same entity multiple times. Additionally, when a ChangeSet is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a ResourceInUseException error. For example, you can't start the ChangeSet described in the example later in this topic because it contains two changes to run the same change type (AddRevisions) against the same entity (entity-id@1). For more information about working with change sets, see  Working with change sets. For information about change types for single-AMI products, see Working with single-AMI products. Also, for more information about change types available for container-based products, see Working with container products.
   */
  startChangeSet(params: MarketplaceCatalog.Types.StartChangeSetRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.StartChangeSetResponse) => void): Request<MarketplaceCatalog.Types.StartChangeSetResponse, AWSError>;
  /**
   * Allows you to request changes for your entities. Within a single ChangeSet, you can't start the same change type against the same entity multiple times. Additionally, when a ChangeSet is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a ResourceInUseException error. For example, you can't start the ChangeSet described in the example later in this topic because it contains two changes to run the same change type (AddRevisions) against the same entity (entity-id@1). For more information about working with change sets, see  Working with change sets. For information about change types for single-AMI products, see Working with single-AMI products. Also, for more information about change types available for container-based products, see Working with container products.
   */
  startChangeSet(callback?: (err: AWSError, data: MarketplaceCatalog.Types.StartChangeSetResponse) => void): Request<MarketplaceCatalog.Types.StartChangeSetResponse, AWSError>;
  /**
   * Tags a resource (either an entity or change set).
   */
  tagResource(params: MarketplaceCatalog.Types.TagResourceRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.TagResourceResponse) => void): Request<MarketplaceCatalog.Types.TagResourceResponse, AWSError>;
  /**
   * Tags a resource (either an entity or change set).
   */
  tagResource(callback?: (err: AWSError, data: MarketplaceCatalog.Types.TagResourceResponse) => void): Request<MarketplaceCatalog.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag or list of tags from a resource (either an entity or change set).
   */
  untagResource(params: MarketplaceCatalog.Types.UntagResourceRequest, callback?: (err: AWSError, data: MarketplaceCatalog.Types.UntagResourceResponse) => void): Request<MarketplaceCatalog.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag or list of tags from a resource (either an entity or change set).
   */
  untagResource(callback?: (err: AWSError, data: MarketplaceCatalog.Types.UntagResourceResponse) => void): Request<MarketplaceCatalog.Types.UntagResourceResponse, AWSError>;
}
declare namespace MarketplaceCatalog {
  export type ARN = string;
  export interface AmiProductEntityIdFilter {
    /**
     * A string array of unique entity id values to be filtered on.
     */
    ValueList?: AmiProductEntityIdFilterValueList;
  }
  export type AmiProductEntityIdFilterValueList = AmiProductEntityIdString[];
  export type AmiProductEntityIdString = string;
  export interface AmiProductFilters {
    /**
     * Unique identifier for the AMI product.
     */
    EntityId?: AmiProductEntityIdFilter;
    /**
     * The last date on which the AMI product was modified.
     */
    LastModifiedDate?: AmiProductLastModifiedDateFilter;
    /**
     * The title of the AMI product.
     */
    ProductTitle?: AmiProductTitleFilter;
    /**
     * The visibility of the AMI product.
     */
    Visibility?: AmiProductVisibilityFilter;
  }
  export interface AmiProductLastModifiedDateFilter {
    /**
     * Dates between which the AMI product was last modified.
     */
    DateRange?: AmiProductLastModifiedDateFilterDateRange;
  }
  export interface AmiProductLastModifiedDateFilterDateRange {
    /**
     * Date after which the AMI product was last modified.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Date before which the AMI product was last modified.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export interface AmiProductSort {
    /**
     * Field to sort the AMI products by.
     */
    SortBy?: AmiProductSortBy;
    /**
     * The sorting order. Can be ASCENDING or DESCENDING. The default value is DESCENDING.
     */
    SortOrder?: SortOrder;
  }
  export type AmiProductSortBy = "EntityId"|"LastModifiedDate"|"ProductTitle"|"Visibility"|string;
  export interface AmiProductSummary {
    /**
     * The title of the AMI product.
     */
    ProductTitle?: AmiProductTitleString;
    /**
     * The lifecycle of the AMI product.
     */
    Visibility?: AmiProductVisibilityString;
  }
  export interface AmiProductTitleFilter {
    /**
     * A string array of unique product title values to be filtered on.
     */
    ValueList?: AmiProductTitleFilterValueList;
    /**
     * A string that will be the wildCard input for product tile filter. It matches the provided value as a substring in the actual value.
     */
    WildCardValue?: AmiProductTitleString;
  }
  export type AmiProductTitleFilterValueList = AmiProductTitleString[];
  export type AmiProductTitleString = string;
  export interface AmiProductVisibilityFilter {
    /**
     * A string array of unique visibility values to be filtered on.
     */
    ValueList?: AmiProductVisibilityFilterValueList;
  }
  export type AmiProductVisibilityFilterValueList = AmiProductVisibilityString[];
  export type AmiProductVisibilityString = "Limited"|"Public"|"Restricted"|"Draft"|string;
  export interface BatchDescribeEntitiesRequest {
    /**
     * List of entity IDs and the catalogs the entities are present in.
     */
    EntityRequestList: EntityRequestList;
  }
  export interface BatchDescribeEntitiesResponse {
    /**
     * Details about each entity.
     */
    EntityDetails?: EntityDetails;
    /**
     * A map of errors returned, with EntityId as the key and errorDetail as the value.
     */
    Errors?: Errors;
  }
  export type BatchDescribeErrorCodeString = string;
  export interface BatchDescribeErrorDetail {
    /**
     * The error code returned.
     */
    ErrorCode?: BatchDescribeErrorCodeString;
    /**
     * The error message returned.
     */
    ErrorMessage?: BatchDescribeErrorMessageContent;
  }
  export type BatchDescribeErrorMessageContent = string;
  export interface CancelChangeSetRequest {
    /**
     * Required. The catalog related to the request. Fixed value: AWSMarketplace.
     */
    Catalog: Catalog;
    /**
     * Required. The unique identifier of the StartChangeSet request that you want to cancel.
     */
    ChangeSetId: ResourceId;
  }
  export interface CancelChangeSetResponse {
    /**
     * The unique identifier for the change set referenced in this request.
     */
    ChangeSetId?: ResourceId;
    /**
     * The ARN associated with the change set referenced in this request.
     */
    ChangeSetArn?: ARN;
  }
  export type Catalog = string;
  export interface Change {
    /**
     * Change types are single string values that describe your intention for the change. Each change type is unique for each EntityType provided in the change's scope. For more information about change types available for single-AMI products, see Working with single-AMI products. Also, for more information about change types available for container-based products, see Working with container products.
     */
    ChangeType: ChangeType;
    /**
     * The entity to be changed.
     */
    Entity: Entity;
    /**
     * The tags associated with the change.
     */
    EntityTags?: TagList;
    /**
     * This object contains details specific to the change type of the requested change. For more information about change types available for single-AMI products, see Working with single-AMI products. Also, for more information about change types available for container-based products, see Working with container products.
     */
    Details?: Json;
    /**
     * Alternative field that accepts a JSON value instead of a string for ChangeType details. You can use either Details or DetailsDocument, but not both.
     */
    DetailsDocument?: JsonDocumentType;
    /**
     * Optional name for the change.
     */
    ChangeName?: ChangeName;
  }
  export type ChangeName = string;
  export type ChangeSetDescription = ChangeSummary[];
  export type ChangeSetName = string;
  export type ChangeSetSummaryList = ChangeSetSummaryListItem[];
  export interface ChangeSetSummaryListItem {
    /**
     * The unique identifier for a change set.
     */
    ChangeSetId?: ResourceId;
    /**
     * The ARN associated with the unique identifier for the change set referenced in this request.
     */
    ChangeSetArn?: ARN;
    /**
     * The non-unique name for the change set.
     */
    ChangeSetName?: ChangeSetName;
    /**
     * The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was started.
     */
    StartTime?: DateTimeISO8601;
    /**
     * The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was finished.
     */
    EndTime?: DateTimeISO8601;
    /**
     * The current status of the change set.
     */
    Status?: ChangeStatus;
    /**
     * This object is a list of entity IDs (string) that are a part of a change set. The entity ID list is a maximum of 20 entities. It must contain at least one entity.
     */
    EntityIdList?: ResourceIdList;
    /**
     * Returned if the change set is in FAILED status. Can be either CLIENT_ERROR, which means that there are issues with the request (see the ErrorDetailList of DescribeChangeSet), or SERVER_FAULT, which means that there is a problem in the system, and you should retry your request.
     */
    FailureCode?: FailureCode;
  }
  export type ChangeStatus = "PREPARING"|"APPLYING"|"SUCCEEDED"|"CANCELLED"|"FAILED"|string;
  export interface ChangeSummary {
    /**
     * The type of the change.
     */
    ChangeType?: ChangeType;
    /**
     * The entity to be changed.
     */
    Entity?: Entity;
    /**
     * This object contains details specific to the change type of the requested change.
     */
    Details?: Json;
    /**
     * The JSON value of the details specific to the change type of the requested change.
     */
    DetailsDocument?: JsonDocumentType;
    /**
     * An array of ErrorDetail objects associated with the change.
     */
    ErrorDetailList?: ErrorDetailList;
    /**
     * Optional name for the change.
     */
    ChangeName?: ChangeName;
  }
  export type ChangeType = string;
  export type ClientRequestToken = string;
  export interface ContainerProductEntityIdFilter {
    /**
     * A string array of unique entity id values to be filtered on.
     */
    ValueList?: ContainerProductEntityIdFilterValueList;
  }
  export type ContainerProductEntityIdFilterValueList = ContainerProductEntityIdString[];
  export type ContainerProductEntityIdString = string;
  export interface ContainerProductFilters {
    /**
     * Unique identifier for the container product.
     */
    EntityId?: ContainerProductEntityIdFilter;
    /**
     * The last date on which the container product was modified.
     */
    LastModifiedDate?: ContainerProductLastModifiedDateFilter;
    /**
     * The title of the container product.
     */
    ProductTitle?: ContainerProductTitleFilter;
    /**
     * The visibility of the container product.
     */
    Visibility?: ContainerProductVisibilityFilter;
  }
  export interface ContainerProductLastModifiedDateFilter {
    /**
     * Dates between which the container product was last modified.
     */
    DateRange?: ContainerProductLastModifiedDateFilterDateRange;
  }
  export interface ContainerProductLastModifiedDateFilterDateRange {
    /**
     * Date after which the container product was last modified.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Date before which the container product was last modified.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export interface ContainerProductSort {
    /**
     * Field to sort the container products by.
     */
    SortBy?: ContainerProductSortBy;
    /**
     * The sorting order. Can be ASCENDING or DESCENDING. The default value is DESCENDING.
     */
    SortOrder?: SortOrder;
  }
  export type ContainerProductSortBy = "EntityId"|"LastModifiedDate"|"ProductTitle"|"Visibility"|string;
  export interface ContainerProductSummary {
    /**
     * The title of the container product.
     */
    ProductTitle?: ContainerProductTitleString;
    /**
     * The lifecycle of the product.
     */
    Visibility?: ContainerProductVisibilityString;
  }
  export interface ContainerProductTitleFilter {
    /**
     * A string array of unique product title values to be filtered on.
     */
    ValueList?: ContainerProductTitleFilterValueList;
    /**
     * A string that will be the wildCard input for product tile filter. It matches the provided value as a substring in the actual value.
     */
    WildCardValue?: ContainerProductTitleString;
  }
  export type ContainerProductTitleFilterValueList = ContainerProductTitleString[];
  export type ContainerProductTitleString = string;
  export interface ContainerProductVisibilityFilter {
    /**
     * A string array of unique visibility values to be filtered on.
     */
    ValueList?: ContainerProductVisibilityFilterValueList;
  }
  export type ContainerProductVisibilityFilterValueList = ContainerProductVisibilityString[];
  export type ContainerProductVisibilityString = "Limited"|"Public"|"Restricted"|"Draft"|string;
  export interface DataProductEntityIdFilter {
    /**
     * A string array of unique entity id values to be filtered on.
     */
    ValueList?: DataProductEntityIdFilterValueList;
  }
  export type DataProductEntityIdFilterValueList = DataProductEntityIdString[];
  export type DataProductEntityIdString = string;
  export interface DataProductFilters {
    /**
     * Unique identifier for the data product.
     */
    EntityId?: DataProductEntityIdFilter;
    /**
     * The title of the data product.
     */
    ProductTitle?: DataProductTitleFilter;
    /**
     * The visibility of the data product.
     */
    Visibility?: DataProductVisibilityFilter;
    /**
     * The last date on which the data product was modified.
     */
    LastModifiedDate?: DataProductLastModifiedDateFilter;
  }
  export interface DataProductLastModifiedDateFilter {
    /**
     * Dates between which the data product was last modified.
     */
    DateRange?: DataProductLastModifiedDateFilterDateRange;
  }
  export interface DataProductLastModifiedDateFilterDateRange {
    /**
     * Date after which the data product was last modified.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Date before which the data product was last modified.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export interface DataProductSort {
    /**
     * Field to sort the data products by.
     */
    SortBy?: DataProductSortBy;
    /**
     * The sorting order. Can be ASCENDING or DESCENDING. The default value is DESCENDING.
     */
    SortOrder?: SortOrder;
  }
  export type DataProductSortBy = "EntityId"|"ProductTitle"|"Visibility"|"LastModifiedDate"|string;
  export interface DataProductSummary {
    /**
     * The title of the data product.
     */
    ProductTitle?: DataProductTitleString;
    /**
     * The lifecycle of the data product.
     */
    Visibility?: DataProductVisibilityString;
  }
  export interface DataProductTitleFilter {
    /**
     * A string array of unique product title values to be filtered on.
     */
    ValueList?: DataProductTitleFilterValueList;
    /**
     * A string that will be the wildCard input for product tile filter. It matches the provided value as a substring in the actual value.
     */
    WildCardValue?: DataProductTitleString;
  }
  export type DataProductTitleFilterValueList = DataProductTitleString[];
  export type DataProductTitleString = string;
  export interface DataProductVisibilityFilter {
    /**
     * A string array of unique visibility values to be filtered on.
     */
    ValueList?: DataProductVisibilityFilterValueList;
  }
  export type DataProductVisibilityFilterValueList = DataProductVisibilityString[];
  export type DataProductVisibilityString = "Limited"|"Public"|"Restricted"|"Unavailable"|"Draft"|string;
  export type DateTimeISO8601 = string;
  export interface DeleteResourcePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the entity resource that is associated with the resource policy.
     */
    ResourceArn: ResourceARN;
  }
  export interface DeleteResourcePolicyResponse {
  }
  export interface DescribeChangeSetRequest {
    /**
     * Required. The catalog related to the request. Fixed value: AWSMarketplace 
     */
    Catalog: Catalog;
    /**
     * Required. The unique identifier for the StartChangeSet request that you want to describe the details for.
     */
    ChangeSetId: ResourceId;
  }
  export interface DescribeChangeSetResponse {
    /**
     * Required. The unique identifier for the change set referenced in this request.
     */
    ChangeSetId?: ResourceId;
    /**
     * The ARN associated with the unique identifier for the change set referenced in this request.
     */
    ChangeSetArn?: ARN;
    /**
     * The optional name provided in the StartChangeSet request. If you do not provide a name, one is set by default.
     */
    ChangeSetName?: ChangeSetName;
    /**
     * The optional intent provided in the StartChangeSet request. If you do not provide an intent, APPLY is set by default.
     */
    Intent?: Intent;
    /**
     * The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request started. 
     */
    StartTime?: DateTimeISO8601;
    /**
     * The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request transitioned to a terminal state. The change cannot transition to a different state. Null if the request is not in a terminal state. 
     */
    EndTime?: DateTimeISO8601;
    /**
     * The status of the change request.
     */
    Status?: ChangeStatus;
    /**
     * Returned if the change set is in FAILED status. Can be either CLIENT_ERROR, which means that there are issues with the request (see the ErrorDetailList), or SERVER_FAULT, which means that there is a problem in the system, and you should retry your request.
     */
    FailureCode?: FailureCode;
    /**
     * Returned if there is a failure on the change set, but that failure is not related to any of the changes in the request.
     */
    FailureDescription?: ExceptionMessageContent;
    /**
     * An array of ChangeSummary objects.
     */
    ChangeSet?: ChangeSetDescription;
  }
  export interface DescribeEntityRequest {
    /**
     * Required. The catalog related to the request. Fixed value: AWSMarketplace 
     */
    Catalog: Catalog;
    /**
     * Required. The unique ID of the entity to describe.
     */
    EntityId: ResourceId;
  }
  export interface DescribeEntityResponse {
    /**
     * The named type of the entity, in the format of EntityType@Version.
     */
    EntityType?: EntityType;
    /**
     * The identifier of the entity, in the format of EntityId@RevisionId.
     */
    EntityIdentifier?: Identifier;
    /**
     * The ARN associated to the unique identifier for the entity referenced in this request.
     */
    EntityArn?: ARN;
    /**
     * The last modified date of the entity, in ISO 8601 format (2018-02-27T13:45:22Z).
     */
    LastModifiedDate?: DateTimeISO8601;
    /**
     * This stringified JSON object includes the details of the entity.
     */
    Details?: Json;
    /**
     * The JSON value of the details specific to the entity.
     */
    DetailsDocument?: JsonDocumentType;
  }
  export interface Entity {
    /**
     * The type of entity.
     */
    Type: EntityType;
    /**
     * The identifier for the entity.
     */
    Identifier?: Identifier;
  }
  export interface EntityDetail {
    /**
     * The entity type of the entity, in the format of EntityType@Version.
     */
    EntityType?: EntityType;
    /**
     * The Amazon Resource Name (ARN) of the entity.
     */
    EntityArn?: ARN;
    /**
     * The ID of the entity, in the format of EntityId@RevisionId.
     */
    EntityIdentifier?: Identifier;
    /**
     * The last time the entity was modified.
     */
    LastModifiedDate?: DateTimeISO8601;
    /**
     * An object that contains all the details of the entity.
     */
    DetailsDocument?: JsonDocumentType;
  }
  export type EntityDetails = {[key: string]: EntityDetail};
  export type EntityId = string;
  export type EntityNameString = string;
  export interface EntityRequest {
    /**
     * The name of the catalog the entity is present in. The only value at this time is AWSMarketplace.
     */
    Catalog: Catalog;
    /**
     * The ID of the entity.
     */
    EntityId: EntityId;
  }
  export type EntityRequestList = EntityRequest[];
  export interface EntitySummary {
    /**
     * The name for the entity. This value is not unique. It is defined by the seller.
     */
    Name?: EntityNameString;
    /**
     * The type of the entity.
     */
    EntityType?: EntityType;
    /**
     * The unique identifier for the entity.
     */
    EntityId?: ResourceId;
    /**
     * The ARN associated with the unique identifier for the entity.
     */
    EntityArn?: ARN;
    /**
     * The last time the entity was published, using ISO 8601 format (2018-02-27T13:45:22Z).
     */
    LastModifiedDate?: DateTimeISO8601;
    /**
     * The visibility status of the entity to buyers. This value can be Public (everyone can view the entity), Limited (the entity is visible to limited accounts only), or Restricted (the entity was published and then unpublished and only existing buyers can view it). 
     */
    Visibility?: VisibilityValue;
    /**
     * An object that contains summary information about the AMI product.
     */
    AmiProductSummary?: AmiProductSummary;
    /**
     * An object that contains summary information about the container product.
     */
    ContainerProductSummary?: ContainerProductSummary;
    /**
     * An object that contains summary information about the data product.
     */
    DataProductSummary?: DataProductSummary;
    /**
     * An object that contains summary information about the SaaS product.
     */
    SaaSProductSummary?: SaaSProductSummary;
    /**
     * An object that contains summary information about the offer.
     */
    OfferSummary?: OfferSummary;
    /**
     * An object that contains summary information about the Resale Authorization.
     */
    ResaleAuthorizationSummary?: ResaleAuthorizationSummary;
  }
  export type EntitySummaryList = EntitySummary[];
  export type EntityType = string;
  export interface EntityTypeFilters {
    /**
     * A filter for data products.
     */
    DataProductFilters?: DataProductFilters;
    /**
     * A filter for SaaS products.
     */
    SaaSProductFilters?: SaaSProductFilters;
    /**
     * A filter for AMI products.
     */
    AmiProductFilters?: AmiProductFilters;
    /**
     * A filter for offers.
     */
    OfferFilters?: OfferFilters;
    /**
     * A filter for container products.
     */
    ContainerProductFilters?: ContainerProductFilters;
    /**
     * A filter for Resale Authorizations.
     */
    ResaleAuthorizationFilters?: ResaleAuthorizationFilters;
  }
  export interface EntityTypeSort {
    /**
     * A sort for data products.
     */
    DataProductSort?: DataProductSort;
    /**
     * A sort for SaaS products.
     */
    SaaSProductSort?: SaaSProductSort;
    /**
     * A sort for AMI products.
     */
    AmiProductSort?: AmiProductSort;
    /**
     * A sort for offers.
     */
    OfferSort?: OfferSort;
    /**
     * A sort for container products.
     */
    ContainerProductSort?: ContainerProductSort;
    /**
     * A sort for Resale Authorizations.
     */
    ResaleAuthorizationSort?: ResaleAuthorizationSort;
  }
  export type ErrorCodeString = string;
  export interface ErrorDetail {
    /**
     * The error code that identifies the type of error.
     */
    ErrorCode?: ErrorCodeString;
    /**
     * The message for the error.
     */
    ErrorMessage?: ExceptionMessageContent;
  }
  export type ErrorDetailList = ErrorDetail[];
  export type Errors = {[key: string]: BatchDescribeErrorDetail};
  export type ExceptionMessageContent = string;
  export type FailureCode = "CLIENT_ERROR"|"SERVER_FAULT"|string;
  export interface Filter {
    /**
     * For ListEntities, the supported value for this is an EntityId. For ListChangeSets, the supported values are as follows:
     */
    Name?: FilterName;
    /**
     *  ListEntities - This is a list of unique EntityIds.  ListChangeSets - The supported filter names and associated ValueLists is as follows:    ChangeSetName - The supported ValueList is a list of non-unique ChangeSetNames. These are defined when you call the StartChangeSet action.    Status - The supported ValueList is a list of statuses for all change set requests.    EntityId - The supported ValueList is a list of unique EntityIds.    BeforeStartTime - The supported ValueList is a list of all change sets that started before the filter value.    AfterStartTime - The supported ValueList is a list of all change sets that started after the filter value.    BeforeEndTime - The supported ValueList is a list of all change sets that ended before the filter value.    AfterEndTime - The supported ValueList is a list of all change sets that ended after the filter value.  
     */
    ValueList?: ValueList;
  }
  export type FilterList = Filter[];
  export type FilterName = string;
  export type FilterValueContent = string;
  export interface GetResourcePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the entity resource that is associated with the resource policy.
     */
    ResourceArn: ResourceARN;
  }
  export interface GetResourcePolicyResponse {
    /**
     * The policy document to set; formatted in JSON.
     */
    Policy?: ResourcePolicyJson;
  }
  export type Identifier = string;
  export type Intent = "VALIDATE"|"APPLY"|string;
  export type Json = string;
  export interface JsonDocumentType {
  }
  export type ListChangeSetsMaxResultInteger = number;
  export interface ListChangeSetsRequest {
    /**
     * The catalog related to the request. Fixed value: AWSMarketplace 
     */
    Catalog: Catalog;
    /**
     * An array of filter objects.
     */
    FilterList?: FilterList;
    /**
     * An object that contains two attributes, SortBy and SortOrder.
     */
    Sort?: Sort;
    /**
     * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
     */
    MaxResults?: ListChangeSetsMaxResultInteger;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface ListChangeSetsResponse {
    /**
     *  Array of ChangeSetSummaryListItem objects.
     */
    ChangeSetSummaryList?: ChangeSetSummaryList;
    /**
     * The value of the next token, if it exists. Null if there are no more results.
     */
    NextToken?: NextToken;
  }
  export type ListEntitiesMaxResultInteger = number;
  export interface ListEntitiesRequest {
    /**
     * The catalog related to the request. Fixed value: AWSMarketplace 
     */
    Catalog: Catalog;
    /**
     * The type of entities to retrieve. Valid values are: AmiProduct, ContainerProduct, DataProduct, SaaSProduct, ProcurementPolicy, Experience, Audience, BrandingSettings, Offer, Seller, ResaleAuthorization.
     */
    EntityType: EntityType;
    /**
     * An array of filter objects. Each filter object contains two attributes, filterName and filterValues.
     */
    FilterList?: FilterList;
    /**
     * An object that contains two attributes, SortBy and SortOrder.
     */
    Sort?: Sort;
    /**
     * The value of the next token, if it exists. Null if there are no more results.
     */
    NextToken?: NextToken;
    /**
     * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
     */
    MaxResults?: ListEntitiesMaxResultInteger;
    /**
     * Filters the returned set of entities based on their owner. The default is SELF. To list entities shared with you through AWS Resource Access Manager (AWS RAM), set to SHARED. Entities shared through the AWS Marketplace Catalog API PutResourcePolicy operation can't be discovered through the SHARED parameter.
     */
    OwnershipType?: OwnershipType;
    /**
     * A Union object containing filter shapes for all EntityTypes. Each EntityTypeFilter shape will have filters applicable for that EntityType that can be used to search or filter entities.
     */
    EntityTypeFilters?: EntityTypeFilters;
    /**
     * A Union object containing Sort shapes for all EntityTypes. Each EntityTypeSort shape will have SortBy and SortOrder applicable for fields on that EntityType. This can be used to sort the results of the filter query.
     */
    EntityTypeSort?: EntityTypeSort;
  }
  export interface ListEntitiesResponse {
    /**
     * Array of EntitySummary objects.
     */
    EntitySummaryList?: EntitySummaryList;
    /**
     * The value of the next token if it exists. Null if there is no more result.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * Required. The Amazon Resource Name (ARN) associated with the resource you want to list tags on.
     */
    ResourceArn: ResourceARN;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Required. The ARN associated with the resource you want to list tags on.
     */
    ResourceArn?: ResourceARN;
    /**
     * Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.
     */
    Tags?: TagList;
  }
  export type NextToken = string;
  export interface OfferAvailabilityEndDateFilter {
    /**
     * Allows filtering on the AvailabilityEndDate of an offer with date range as input.
     */
    DateRange?: OfferAvailabilityEndDateFilterDateRange;
  }
  export interface OfferAvailabilityEndDateFilterDateRange {
    /**
     * Allows filtering on the AvailabilityEndDate of an offer after a date.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Allows filtering on the AvailabilityEndDate of an offer before a date.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export interface OfferBuyerAccountsFilter {
    /**
     * Allows filtering on the BuyerAccounts of an offer with wild card input.
     */
    WildCardValue?: OfferBuyerAccountsFilterWildcard;
  }
  export type OfferBuyerAccountsFilterWildcard = string;
  export type OfferBuyerAccountsList = OfferBuyerAccountsString[];
  export type OfferBuyerAccountsString = string;
  export interface OfferEntityIdFilter {
    /**
     * Allows filtering on entity id of an offer with list input.
     */
    ValueList?: OfferEntityIdFilterValueList;
  }
  export type OfferEntityIdFilterValueList = OfferEntityIdString[];
  export type OfferEntityIdString = string;
  export interface OfferFilters {
    /**
     * Allows filtering on EntityId of an offer.
     */
    EntityId?: OfferEntityIdFilter;
    /**
     * Allows filtering on the Name of an offer.
     */
    Name?: OfferNameFilter;
    /**
     * Allows filtering on the ProductId of an offer.
     */
    ProductId?: OfferProductIdFilter;
    /**
     * Allows filtering on the ReleaseDate of an offer.
     */
    ReleaseDate?: OfferReleaseDateFilter;
    /**
     * Allows filtering on the AvailabilityEndDate of an offer.
     */
    AvailabilityEndDate?: OfferAvailabilityEndDateFilter;
    /**
     * Allows filtering on the BuyerAccounts of an offer.
     */
    BuyerAccounts?: OfferBuyerAccountsFilter;
    /**
     * Allows filtering on the State of an offer.
     */
    State?: OfferStateFilter;
    /**
     * Allows filtering on the Targeting of an offer.
     */
    Targeting?: OfferTargetingFilter;
    /**
     * Allows filtering on the LastModifiedDate of an offer.
     */
    LastModifiedDate?: OfferLastModifiedDateFilter;
  }
  export interface OfferLastModifiedDateFilter {
    /**
     * Allows filtering on the LastModifiedDate of an offer with date range as input.
     */
    DateRange?: OfferLastModifiedDateFilterDateRange;
  }
  export interface OfferLastModifiedDateFilterDateRange {
    /**
     * Allows filtering on the LastModifiedDate of an offer after a date.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Allows filtering on the LastModifiedDate of an offer before a date.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export interface OfferNameFilter {
    /**
     * Allows filtering on the Name of an offer with list input.
     */
    ValueList?: OfferNameFilterValueList;
    /**
     * Allows filtering on the Name of an offer with wild card input.
     */
    WildCardValue?: OfferNameString;
  }
  export type OfferNameFilterValueList = OfferNameString[];
  export type OfferNameString = string;
  export interface OfferProductIdFilter {
    /**
     * Allows filtering on the ProductId of an offer with list input.
     */
    ValueList?: OfferProductIdFilterValueList;
  }
  export type OfferProductIdFilterValueList = OfferProductIdString[];
  export type OfferProductIdString = string;
  export interface OfferReleaseDateFilter {
    /**
     * Allows filtering on the ReleaseDate of an offer with date range as input.
     */
    DateRange?: OfferReleaseDateFilterDateRange;
  }
  export interface OfferReleaseDateFilterDateRange {
    /**
     * Allows filtering on the ReleaseDate of offers after a date.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Allows filtering on the ReleaseDate of offers before a date.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export interface OfferSort {
    /**
     * Allows to sort offers.
     */
    SortBy?: OfferSortBy;
    /**
     * Allows to sort offers.
     */
    SortOrder?: SortOrder;
  }
  export type OfferSortBy = "EntityId"|"Name"|"ProductId"|"ReleaseDate"|"AvailabilityEndDate"|"BuyerAccounts"|"State"|"Targeting"|"LastModifiedDate"|string;
  export interface OfferStateFilter {
    /**
     * Allows filtering on the State of an offer with list input.
     */
    ValueList?: OfferStateFilterValueList;
  }
  export type OfferStateFilterValueList = OfferStateString[];
  export type OfferStateString = "Draft"|"Released"|string;
  export interface OfferSummary {
    /**
     * The name of the offer.
     */
    Name?: OfferNameString;
    /**
     * The product ID of the offer.
     */
    ProductId?: OfferProductIdString;
    /**
     * The release date of the offer.
     */
    ReleaseDate?: DateTimeISO8601;
    /**
     * The availability end date of the offer.
     */
    AvailabilityEndDate?: DateTimeISO8601;
    /**
     * The buyer accounts in the offer.
     */
    BuyerAccounts?: OfferBuyerAccountsList;
    /**
     * The status of the offer.
     */
    State?: OfferStateString;
    /**
     * The targeting in the offer.
     */
    Targeting?: OfferTargetingList;
  }
  export interface OfferTargetingFilter {
    /**
     * Allows filtering on the Targeting of an offer with list input.
     */
    ValueList?: OfferTargetingFilterValueList;
  }
  export type OfferTargetingFilterValueList = OfferTargetingString[];
  export type OfferTargetingList = OfferTargetingString[];
  export type OfferTargetingString = "BuyerAccounts"|"ParticipatingPrograms"|"CountryCodes"|"None"|string;
  export type OwnershipType = "SELF"|"SHARED"|string;
  export interface PutResourcePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the entity resource you want to associate with a resource policy.
     */
    ResourceArn: ResourceARN;
    /**
     * The policy document to set; formatted in JSON.
     */
    Policy: ResourcePolicyJson;
  }
  export interface PutResourcePolicyResponse {
  }
  export type RequestedChangeList = Change[];
  export interface ResaleAuthorizationAvailabilityEndDateFilter {
    /**
     * Allows filtering on AvailabilityEndDate of a ResaleAuthorization with date range as input
     */
    DateRange?: ResaleAuthorizationAvailabilityEndDateFilterDateRange;
    /**
     * Allows filtering on AvailabilityEndDate of a ResaleAuthorization with date value as input.
     */
    ValueList?: ResaleAuthorizationAvailabilityEndDateFilterValueList;
  }
  export interface ResaleAuthorizationAvailabilityEndDateFilterDateRange {
    /**
     * Allows filtering on AvailabilityEndDate of a ResaleAuthorization after a date.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Allows filtering on AvailabilityEndDate of a ResaleAuthorization before a date.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export type ResaleAuthorizationAvailabilityEndDateFilterValueList = DateTimeISO8601[];
  export interface ResaleAuthorizationCreatedDateFilter {
    /**
     * Allows filtering on CreatedDate of a ResaleAuthorization with date range as input.
     */
    DateRange?: ResaleAuthorizationCreatedDateFilterDateRange;
    /**
     * Allows filtering on CreatedDate of a ResaleAuthorization with date value as input.
     */
    ValueList?: ResaleAuthorizationCreatedDateFilterValueList;
  }
  export interface ResaleAuthorizationCreatedDateFilterDateRange {
    /**
     * Allows filtering on CreatedDate of a ResaleAuthorization after a date.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Allows filtering on CreatedDate of a ResaleAuthorization before a date.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export type ResaleAuthorizationCreatedDateFilterValueList = DateTimeISO8601[];
  export interface ResaleAuthorizationEntityIdFilter {
    /**
     * Allows filtering on EntityId of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationEntityIdFilterValueList;
  }
  export type ResaleAuthorizationEntityIdFilterValueList = ResaleAuthorizationEntityIdString[];
  export type ResaleAuthorizationEntityIdString = string;
  export interface ResaleAuthorizationFilters {
    /**
     * Allows filtering on the EntityId of a ResaleAuthorization.
     */
    EntityId?: ResaleAuthorizationEntityIdFilter;
    /**
     * Allows filtering on the Name of a ResaleAuthorization.
     */
    Name?: ResaleAuthorizationNameFilter;
    /**
     * Allows filtering on the ProductId of a ResaleAuthorization.
     */
    ProductId?: ResaleAuthorizationProductIdFilter;
    /**
     * Allows filtering on the CreatedDate of a ResaleAuthorization.
     */
    CreatedDate?: ResaleAuthorizationCreatedDateFilter;
    /**
     * Allows filtering on the AvailabilityEndDate of a ResaleAuthorization.
     */
    AvailabilityEndDate?: ResaleAuthorizationAvailabilityEndDateFilter;
    /**
     * Allows filtering on the ManufacturerAccountId of a ResaleAuthorization.
     */
    ManufacturerAccountId?: ResaleAuthorizationManufacturerAccountIdFilter;
    /**
     * Allows filtering on the ProductName of a ResaleAuthorization.
     */
    ProductName?: ResaleAuthorizationProductNameFilter;
    /**
     * Allows filtering on the ManufacturerLegalName of a ResaleAuthorization.
     */
    ManufacturerLegalName?: ResaleAuthorizationManufacturerLegalNameFilter;
    /**
     * Allows filtering on the ResellerAccountID of a ResaleAuthorization.
     */
    ResellerAccountID?: ResaleAuthorizationResellerAccountIDFilter;
    /**
     * Allows filtering on the ResellerLegalName of a ResaleAuthorization.
     */
    ResellerLegalName?: ResaleAuthorizationResellerLegalNameFilter;
    /**
     * Allows filtering on the Status of a ResaleAuthorization.
     */
    Status?: ResaleAuthorizationStatusFilter;
    /**
     * Allows filtering on the OfferExtendedStatus of a ResaleAuthorization.
     */
    OfferExtendedStatus?: ResaleAuthorizationOfferExtendedStatusFilter;
    /**
     * Allows filtering on the LastModifiedDate of a ResaleAuthorization.
     */
    LastModifiedDate?: ResaleAuthorizationLastModifiedDateFilter;
  }
  export interface ResaleAuthorizationLastModifiedDateFilter {
    /**
     * Allows filtering on the LastModifiedDate of a ResaleAuthorization with date range as input.
     */
    DateRange?: ResaleAuthorizationLastModifiedDateFilterDateRange;
  }
  export interface ResaleAuthorizationLastModifiedDateFilterDateRange {
    /**
     * Allows filtering on the LastModifiedDate of a ResaleAuthorization after a date.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Allows filtering on the LastModifiedDate of a ResaleAuthorization before a date.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export interface ResaleAuthorizationManufacturerAccountIdFilter {
    /**
     * Allows filtering on the ManufacturerAccountId of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationManufacturerAccountIdFilterValueList;
    /**
     * Allows filtering on the ManufacturerAccountId of a ResaleAuthorization with wild card input.
     */
    WildCardValue?: ResaleAuthorizationManufacturerAccountIdFilterWildcard;
  }
  export type ResaleAuthorizationManufacturerAccountIdFilterValueList = ResaleAuthorizationManufacturerAccountIdString[];
  export type ResaleAuthorizationManufacturerAccountIdFilterWildcard = string;
  export type ResaleAuthorizationManufacturerAccountIdString = string;
  export interface ResaleAuthorizationManufacturerLegalNameFilter {
    /**
     * Allows filtering on the ManufacturerLegalName of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationManufacturerLegalNameFilterValueList;
    /**
     * Allows filtering on the ManufacturerLegalName of a ResaleAuthorization with wild card input.
     */
    WildCardValue?: ResaleAuthorizationManufacturerLegalNameFilterWildcard;
  }
  export type ResaleAuthorizationManufacturerLegalNameFilterValueList = ResaleAuthorizationManufacturerLegalNameString[];
  export type ResaleAuthorizationManufacturerLegalNameFilterWildcard = string;
  export type ResaleAuthorizationManufacturerLegalNameString = string;
  export interface ResaleAuthorizationNameFilter {
    /**
     * Allows filtering on the Name of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationNameFilterValueList;
    /**
     * Allows filtering on the Name of a ResaleAuthorization with wild card input.
     */
    WildCardValue?: ResaleAuthorizationNameFilterWildcard;
  }
  export type ResaleAuthorizationNameFilterValueList = ResaleAuthorizationNameString[];
  export type ResaleAuthorizationNameFilterWildcard = string;
  export type ResaleAuthorizationNameString = string;
  export interface ResaleAuthorizationOfferExtendedStatusFilter {
    /**
     * Allows filtering on the OfferExtendedStatus of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationOfferExtendedStatusFilterValueList;
  }
  export type ResaleAuthorizationOfferExtendedStatusFilterValueList = ResaleAuthorizationOfferExtendedStatusString[];
  export type ResaleAuthorizationOfferExtendedStatusString = string;
  export interface ResaleAuthorizationProductIdFilter {
    /**
     * Allows filtering on the ProductId of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationProductIdFilterValueList;
    /**
     * Allows filtering on the ProductId of a ResaleAuthorization with wild card input.
     */
    WildCardValue?: ResaleAuthorizationProductIdFilterWildcard;
  }
  export type ResaleAuthorizationProductIdFilterValueList = ResaleAuthorizationProductIdString[];
  export type ResaleAuthorizationProductIdFilterWildcard = string;
  export type ResaleAuthorizationProductIdString = string;
  export interface ResaleAuthorizationProductNameFilter {
    /**
     * Allows filtering on the ProductName of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationProductNameFilterValueList;
    /**
     * Allows filtering on the ProductName of a ResaleAuthorization with wild card input.
     */
    WildCardValue?: ResaleAuthorizationProductNameFilterWildcard;
  }
  export type ResaleAuthorizationProductNameFilterValueList = ResaleAuthorizationProductNameString[];
  export type ResaleAuthorizationProductNameFilterWildcard = string;
  export type ResaleAuthorizationProductNameString = string;
  export interface ResaleAuthorizationResellerAccountIDFilter {
    /**
     * Allows filtering on the ResellerAccountID of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationResellerAccountIDFilterValueList;
    /**
     * Allows filtering on the ResellerAccountID of a ResaleAuthorization with wild card input.
     */
    WildCardValue?: ResaleAuthorizationResellerAccountIDFilterWildcard;
  }
  export type ResaleAuthorizationResellerAccountIDFilterValueList = ResaleAuthorizationResellerAccountIDString[];
  export type ResaleAuthorizationResellerAccountIDFilterWildcard = string;
  export type ResaleAuthorizationResellerAccountIDString = string;
  export interface ResaleAuthorizationResellerLegalNameFilter {
    /**
     * Allows filtering on the ResellerLegalNameProductName of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationResellerLegalNameFilterValueList;
    /**
     * Allows filtering on the ResellerLegalName of a ResaleAuthorization with wild card input.
     */
    WildCardValue?: ResaleAuthorizationResellerLegalNameFilterWildcard;
  }
  export type ResaleAuthorizationResellerLegalNameFilterValueList = ResaleAuthorizationResellerLegalNameString[];
  export type ResaleAuthorizationResellerLegalNameFilterWildcard = string;
  export type ResaleAuthorizationResellerLegalNameString = string;
  export interface ResaleAuthorizationSort {
    /**
     * Allows to sort ResaleAuthorization.
     */
    SortBy?: ResaleAuthorizationSortBy;
    /**
     * Allows to sort ResaleAuthorization.
     */
    SortOrder?: SortOrder;
  }
  export type ResaleAuthorizationSortBy = "EntityId"|"Name"|"ProductId"|"ProductName"|"ManufacturerAccountId"|"ManufacturerLegalName"|"ResellerAccountID"|"ResellerLegalName"|"Status"|"OfferExtendedStatus"|"CreatedDate"|"AvailabilityEndDate"|"LastModifiedDate"|string;
  export interface ResaleAuthorizationStatusFilter {
    /**
     * Allows filtering on the Status of a ResaleAuthorization with list input.
     */
    ValueList?: ResaleAuthorizationStatusFilterValueList;
  }
  export type ResaleAuthorizationStatusFilterValueList = ResaleAuthorizationStatusString[];
  export type ResaleAuthorizationStatusString = "Draft"|"Active"|"Restricted"|string;
  export interface ResaleAuthorizationSummary {
    /**
     * The name of the ResaleAuthorization.
     */
    Name?: ResaleAuthorizationNameString;
    /**
     * The product ID of the ResaleAuthorization.
     */
    ProductId?: ResaleAuthorizationProductIdString;
    /**
     * The product name of the ResaleAuthorization.
     */
    ProductName?: ResaleAuthorizationProductNameString;
    /**
     * The manufacturer account ID of the ResaleAuthorization.
     */
    ManufacturerAccountId?: ResaleAuthorizationManufacturerAccountIdString;
    /**
     * The manufacturer legal name of the ResaleAuthorization.
     */
    ManufacturerLegalName?: ResaleAuthorizationManufacturerLegalNameString;
    /**
     * The reseller account ID of the ResaleAuthorization.
     */
    ResellerAccountID?: ResaleAuthorizationResellerAccountIDString;
    /**
     * The reseller legal name of the ResaleAuthorization
     */
    ResellerLegalName?: ResaleAuthorizationResellerLegalNameString;
    /**
     * The status of the ResaleAuthorization.
     */
    Status?: ResaleAuthorizationStatusString;
    /**
     * The offer extended status of the ResaleAuthorization
     */
    OfferExtendedStatus?: ResaleAuthorizationOfferExtendedStatusString;
    /**
     * The created date of the ResaleAuthorization.
     */
    CreatedDate?: DateTimeISO8601;
    /**
     * The availability end date of the ResaleAuthorization.
     */
    AvailabilityEndDate?: DateTimeISO8601;
  }
  export type ResourceARN = string;
  export type ResourceId = string;
  export type ResourceIdList = ResourceId[];
  export type ResourcePolicyJson = string;
  export interface SaaSProductEntityIdFilter {
    /**
     * A string array of unique entity id values to be filtered on.
     */
    ValueList?: SaaSProductEntityIdFilterValueList;
  }
  export type SaaSProductEntityIdFilterValueList = SaaSProductEntityIdString[];
  export type SaaSProductEntityIdString = string;
  export interface SaaSProductFilters {
    /**
     * Unique identifier for the SaaS product.
     */
    EntityId?: SaaSProductEntityIdFilter;
    /**
     * The title of the SaaS product.
     */
    ProductTitle?: SaaSProductTitleFilter;
    /**
     * The visibility of the SaaS product.
     */
    Visibility?: SaaSProductVisibilityFilter;
    /**
     * The last date on which the SaaS product was modified.
     */
    LastModifiedDate?: SaaSProductLastModifiedDateFilter;
  }
  export interface SaaSProductLastModifiedDateFilter {
    /**
     * Dates between which the SaaS product was last modified.
     */
    DateRange?: SaaSProductLastModifiedDateFilterDateRange;
  }
  export interface SaaSProductLastModifiedDateFilterDateRange {
    /**
     * Date after which the SaaS product was last modified.
     */
    AfterValue?: DateTimeISO8601;
    /**
     * Date before which the SaaS product was last modified.
     */
    BeforeValue?: DateTimeISO8601;
  }
  export interface SaaSProductSort {
    /**
     * Field to sort the SaaS products by.
     */
    SortBy?: SaaSProductSortBy;
    /**
     * The sorting order. Can be ASCENDING or DESCENDING. The default value is DESCENDING.
     */
    SortOrder?: SortOrder;
  }
  export type SaaSProductSortBy = "EntityId"|"ProductTitle"|"Visibility"|"LastModifiedDate"|string;
  export interface SaaSProductSummary {
    /**
     * The title of the SaaS product.
     */
    ProductTitle?: SaaSProductTitleString;
    /**
     * The lifecycle of the SaaS product.
     */
    Visibility?: SaaSProductVisibilityString;
  }
  export interface SaaSProductTitleFilter {
    /**
     * A string array of unique product title values to be filtered on.
     */
    ValueList?: SaaSProductTitleFilterValueList;
    /**
     * A string that will be the wildCard input for product tile filter. It matches the provided value as a substring in the actual value.
     */
    WildCardValue?: SaaSProductTitleString;
  }
  export type SaaSProductTitleFilterValueList = SaaSProductTitleString[];
  export type SaaSProductTitleString = string;
  export interface SaaSProductVisibilityFilter {
    /**
     * A string array of unique visibility values to be filtered on.
     */
    ValueList?: SaaSProductVisibilityFilterValueList;
  }
  export type SaaSProductVisibilityFilterValueList = SaaSProductVisibilityString[];
  export type SaaSProductVisibilityString = "Limited"|"Public"|"Restricted"|"Draft"|string;
  export interface Sort {
    /**
     * For ListEntities, supported attributes include LastModifiedDate (default) and EntityId. In addition to LastModifiedDate and EntityId, each EntityType might support additional fields. For ListChangeSets, supported attributes include StartTime and EndTime.
     */
    SortBy?: SortBy;
    /**
     * The sorting order. Can be ASCENDING or DESCENDING. The default value is DESCENDING.
     */
    SortOrder?: SortOrder;
  }
  export type SortBy = string;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export interface StartChangeSetRequest {
    /**
     * The catalog related to the request. Fixed value: AWSMarketplace 
     */
    Catalog: Catalog;
    /**
     * Array of change object.
     */
    ChangeSet: RequestedChangeList;
    /**
     * Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets. 
     */
    ChangeSetName?: ChangeSetName;
    /**
     * A unique token to identify the request to ensure idempotency.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * A list of objects specifying each key name and value for the ChangeSetTags property.
     */
    ChangeSetTags?: TagList;
    /**
     * The intent related to the request. The default is APPLY. To test your request before applying changes to your entities, use VALIDATE. This feature is currently available for adding versions to single-AMI products. For more information, see Add a new version.
     */
    Intent?: Intent;
  }
  export interface StartChangeSetResponse {
    /**
     * Unique identifier generated for the request.
     */
    ChangeSetId?: ResourceId;
    /**
     * The ARN associated to the unique identifier generated for the request.
     */
    ChangeSetArn?: ARN;
  }
  export interface Tag {
    /**
     * The key associated with the tag.
     */
    Key: TagKey;
    /**
     * The value associated with the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * Required. The Amazon Resource Name (ARN) associated with the resource you want to tag.
     */
    ResourceArn: ResourceARN;
    /**
     * Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * Required. The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.
     */
    ResourceArn: ResourceARN;
    /**
     * Required. A list of key names of tags to be removed. Number of strings allowed: 0-256.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export type ValueList = FilterValueContent[];
  export type VisibilityValue = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-09-17"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MarketplaceCatalog client.
   */
  export import Types = MarketplaceCatalog;
}
export = MarketplaceCatalog;
