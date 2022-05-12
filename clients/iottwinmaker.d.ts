import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class IoTTwinMaker extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IoTTwinMaker.Types.ClientConfiguration)
  config: Config & IoTTwinMaker.Types.ClientConfiguration;
  /**
   * Sets values for multiple time series properties.
   */
  batchPutPropertyValues(params: IoTTwinMaker.Types.BatchPutPropertyValuesRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.BatchPutPropertyValuesResponse) => void): Request<IoTTwinMaker.Types.BatchPutPropertyValuesResponse, AWSError>;
  /**
   * Sets values for multiple time series properties.
   */
  batchPutPropertyValues(callback?: (err: AWSError, data: IoTTwinMaker.Types.BatchPutPropertyValuesResponse) => void): Request<IoTTwinMaker.Types.BatchPutPropertyValuesResponse, AWSError>;
  /**
   * Creates a component type.
   */
  createComponentType(params: IoTTwinMaker.Types.CreateComponentTypeRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.CreateComponentTypeResponse) => void): Request<IoTTwinMaker.Types.CreateComponentTypeResponse, AWSError>;
  /**
   * Creates a component type.
   */
  createComponentType(callback?: (err: AWSError, data: IoTTwinMaker.Types.CreateComponentTypeResponse) => void): Request<IoTTwinMaker.Types.CreateComponentTypeResponse, AWSError>;
  /**
   * Creates an entity.
   */
  createEntity(params: IoTTwinMaker.Types.CreateEntityRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.CreateEntityResponse) => void): Request<IoTTwinMaker.Types.CreateEntityResponse, AWSError>;
  /**
   * Creates an entity.
   */
  createEntity(callback?: (err: AWSError, data: IoTTwinMaker.Types.CreateEntityResponse) => void): Request<IoTTwinMaker.Types.CreateEntityResponse, AWSError>;
  /**
   * Creates a scene.
   */
  createScene(params: IoTTwinMaker.Types.CreateSceneRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.CreateSceneResponse) => void): Request<IoTTwinMaker.Types.CreateSceneResponse, AWSError>;
  /**
   * Creates a scene.
   */
  createScene(callback?: (err: AWSError, data: IoTTwinMaker.Types.CreateSceneResponse) => void): Request<IoTTwinMaker.Types.CreateSceneResponse, AWSError>;
  /**
   * Creates a workplace.
   */
  createWorkspace(params: IoTTwinMaker.Types.CreateWorkspaceRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.CreateWorkspaceResponse) => void): Request<IoTTwinMaker.Types.CreateWorkspaceResponse, AWSError>;
  /**
   * Creates a workplace.
   */
  createWorkspace(callback?: (err: AWSError, data: IoTTwinMaker.Types.CreateWorkspaceResponse) => void): Request<IoTTwinMaker.Types.CreateWorkspaceResponse, AWSError>;
  /**
   * Deletes a component type.
   */
  deleteComponentType(params: IoTTwinMaker.Types.DeleteComponentTypeRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.DeleteComponentTypeResponse) => void): Request<IoTTwinMaker.Types.DeleteComponentTypeResponse, AWSError>;
  /**
   * Deletes a component type.
   */
  deleteComponentType(callback?: (err: AWSError, data: IoTTwinMaker.Types.DeleteComponentTypeResponse) => void): Request<IoTTwinMaker.Types.DeleteComponentTypeResponse, AWSError>;
  /**
   * Deletes an entity.
   */
  deleteEntity(params: IoTTwinMaker.Types.DeleteEntityRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.DeleteEntityResponse) => void): Request<IoTTwinMaker.Types.DeleteEntityResponse, AWSError>;
  /**
   * Deletes an entity.
   */
  deleteEntity(callback?: (err: AWSError, data: IoTTwinMaker.Types.DeleteEntityResponse) => void): Request<IoTTwinMaker.Types.DeleteEntityResponse, AWSError>;
  /**
   * Deletes a scene.
   */
  deleteScene(params: IoTTwinMaker.Types.DeleteSceneRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.DeleteSceneResponse) => void): Request<IoTTwinMaker.Types.DeleteSceneResponse, AWSError>;
  /**
   * Deletes a scene.
   */
  deleteScene(callback?: (err: AWSError, data: IoTTwinMaker.Types.DeleteSceneResponse) => void): Request<IoTTwinMaker.Types.DeleteSceneResponse, AWSError>;
  /**
   * Deletes a workspace.
   */
  deleteWorkspace(params: IoTTwinMaker.Types.DeleteWorkspaceRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.DeleteWorkspaceResponse) => void): Request<IoTTwinMaker.Types.DeleteWorkspaceResponse, AWSError>;
  /**
   * Deletes a workspace.
   */
  deleteWorkspace(callback?: (err: AWSError, data: IoTTwinMaker.Types.DeleteWorkspaceResponse) => void): Request<IoTTwinMaker.Types.DeleteWorkspaceResponse, AWSError>;
  /**
   * Retrieves information about a component type.
   */
  getComponentType(params: IoTTwinMaker.Types.GetComponentTypeRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.GetComponentTypeResponse) => void): Request<IoTTwinMaker.Types.GetComponentTypeResponse, AWSError>;
  /**
   * Retrieves information about a component type.
   */
  getComponentType(callback?: (err: AWSError, data: IoTTwinMaker.Types.GetComponentTypeResponse) => void): Request<IoTTwinMaker.Types.GetComponentTypeResponse, AWSError>;
  /**
   * Retrieves information about an entity.
   */
  getEntity(params: IoTTwinMaker.Types.GetEntityRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.GetEntityResponse) => void): Request<IoTTwinMaker.Types.GetEntityResponse, AWSError>;
  /**
   * Retrieves information about an entity.
   */
  getEntity(callback?: (err: AWSError, data: IoTTwinMaker.Types.GetEntityResponse) => void): Request<IoTTwinMaker.Types.GetEntityResponse, AWSError>;
  /**
   * Gets the property values for a component, component type, entity, or workspace. You must specify a value for either componentName, componentTypeId, entityId, or workspaceId.
   */
  getPropertyValue(params: IoTTwinMaker.Types.GetPropertyValueRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.GetPropertyValueResponse) => void): Request<IoTTwinMaker.Types.GetPropertyValueResponse, AWSError>;
  /**
   * Gets the property values for a component, component type, entity, or workspace. You must specify a value for either componentName, componentTypeId, entityId, or workspaceId.
   */
  getPropertyValue(callback?: (err: AWSError, data: IoTTwinMaker.Types.GetPropertyValueResponse) => void): Request<IoTTwinMaker.Types.GetPropertyValueResponse, AWSError>;
  /**
   * Retrieves information about the history of a time series property value for a component, component type, entity, or workspace. You must specify a value for workspaceId. For entity-specific queries, specify values for componentName and entityId. For cross-entity quries, specify a value for componentTypeId.
   */
  getPropertyValueHistory(params: IoTTwinMaker.Types.GetPropertyValueHistoryRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.GetPropertyValueHistoryResponse) => void): Request<IoTTwinMaker.Types.GetPropertyValueHistoryResponse, AWSError>;
  /**
   * Retrieves information about the history of a time series property value for a component, component type, entity, or workspace. You must specify a value for workspaceId. For entity-specific queries, specify values for componentName and entityId. For cross-entity quries, specify a value for componentTypeId.
   */
  getPropertyValueHistory(callback?: (err: AWSError, data: IoTTwinMaker.Types.GetPropertyValueHistoryResponse) => void): Request<IoTTwinMaker.Types.GetPropertyValueHistoryResponse, AWSError>;
  /**
   * Retrieves information about a scene.
   */
  getScene(params: IoTTwinMaker.Types.GetSceneRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.GetSceneResponse) => void): Request<IoTTwinMaker.Types.GetSceneResponse, AWSError>;
  /**
   * Retrieves information about a scene.
   */
  getScene(callback?: (err: AWSError, data: IoTTwinMaker.Types.GetSceneResponse) => void): Request<IoTTwinMaker.Types.GetSceneResponse, AWSError>;
  /**
   * Retrieves information about a workspace.
   */
  getWorkspace(params: IoTTwinMaker.Types.GetWorkspaceRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.GetWorkspaceResponse) => void): Request<IoTTwinMaker.Types.GetWorkspaceResponse, AWSError>;
  /**
   * Retrieves information about a workspace.
   */
  getWorkspace(callback?: (err: AWSError, data: IoTTwinMaker.Types.GetWorkspaceResponse) => void): Request<IoTTwinMaker.Types.GetWorkspaceResponse, AWSError>;
  /**
   * Lists all component types in a workspace.
   */
  listComponentTypes(params: IoTTwinMaker.Types.ListComponentTypesRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.ListComponentTypesResponse) => void): Request<IoTTwinMaker.Types.ListComponentTypesResponse, AWSError>;
  /**
   * Lists all component types in a workspace.
   */
  listComponentTypes(callback?: (err: AWSError, data: IoTTwinMaker.Types.ListComponentTypesResponse) => void): Request<IoTTwinMaker.Types.ListComponentTypesResponse, AWSError>;
  /**
   * Lists all entities in a workspace.
   */
  listEntities(params: IoTTwinMaker.Types.ListEntitiesRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.ListEntitiesResponse) => void): Request<IoTTwinMaker.Types.ListEntitiesResponse, AWSError>;
  /**
   * Lists all entities in a workspace.
   */
  listEntities(callback?: (err: AWSError, data: IoTTwinMaker.Types.ListEntitiesResponse) => void): Request<IoTTwinMaker.Types.ListEntitiesResponse, AWSError>;
  /**
   * Lists all scenes in a workspace.
   */
  listScenes(params: IoTTwinMaker.Types.ListScenesRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.ListScenesResponse) => void): Request<IoTTwinMaker.Types.ListScenesResponse, AWSError>;
  /**
   * Lists all scenes in a workspace.
   */
  listScenes(callback?: (err: AWSError, data: IoTTwinMaker.Types.ListScenesResponse) => void): Request<IoTTwinMaker.Types.ListScenesResponse, AWSError>;
  /**
   * Lists all tags associated with a resource.
   */
  listTagsForResource(params: IoTTwinMaker.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.ListTagsForResourceResponse) => void): Request<IoTTwinMaker.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags associated with a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: IoTTwinMaker.Types.ListTagsForResourceResponse) => void): Request<IoTTwinMaker.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves information about workspaces in the current account.
   */
  listWorkspaces(params: IoTTwinMaker.Types.ListWorkspacesRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.ListWorkspacesResponse) => void): Request<IoTTwinMaker.Types.ListWorkspacesResponse, AWSError>;
  /**
   * Retrieves information about workspaces in the current account.
   */
  listWorkspaces(callback?: (err: AWSError, data: IoTTwinMaker.Types.ListWorkspacesResponse) => void): Request<IoTTwinMaker.Types.ListWorkspacesResponse, AWSError>;
  /**
   * Adds tags to a resource.
   */
  tagResource(params: IoTTwinMaker.Types.TagResourceRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.TagResourceResponse) => void): Request<IoTTwinMaker.Types.TagResourceResponse, AWSError>;
  /**
   * Adds tags to a resource.
   */
  tagResource(callback?: (err: AWSError, data: IoTTwinMaker.Types.TagResourceResponse) => void): Request<IoTTwinMaker.Types.TagResourceResponse, AWSError>;
  /**
   * Removes tags from a resource.
   */
  untagResource(params: IoTTwinMaker.Types.UntagResourceRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.UntagResourceResponse) => void): Request<IoTTwinMaker.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: IoTTwinMaker.Types.UntagResourceResponse) => void): Request<IoTTwinMaker.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates information in a component type.
   */
  updateComponentType(params: IoTTwinMaker.Types.UpdateComponentTypeRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.UpdateComponentTypeResponse) => void): Request<IoTTwinMaker.Types.UpdateComponentTypeResponse, AWSError>;
  /**
   * Updates information in a component type.
   */
  updateComponentType(callback?: (err: AWSError, data: IoTTwinMaker.Types.UpdateComponentTypeResponse) => void): Request<IoTTwinMaker.Types.UpdateComponentTypeResponse, AWSError>;
  /**
   * Updates an entity.
   */
  updateEntity(params: IoTTwinMaker.Types.UpdateEntityRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.UpdateEntityResponse) => void): Request<IoTTwinMaker.Types.UpdateEntityResponse, AWSError>;
  /**
   * Updates an entity.
   */
  updateEntity(callback?: (err: AWSError, data: IoTTwinMaker.Types.UpdateEntityResponse) => void): Request<IoTTwinMaker.Types.UpdateEntityResponse, AWSError>;
  /**
   * Updates a scene.
   */
  updateScene(params: IoTTwinMaker.Types.UpdateSceneRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.UpdateSceneResponse) => void): Request<IoTTwinMaker.Types.UpdateSceneResponse, AWSError>;
  /**
   * Updates a scene.
   */
  updateScene(callback?: (err: AWSError, data: IoTTwinMaker.Types.UpdateSceneResponse) => void): Request<IoTTwinMaker.Types.UpdateSceneResponse, AWSError>;
  /**
   * Updates a workspace.
   */
  updateWorkspace(params: IoTTwinMaker.Types.UpdateWorkspaceRequest, callback?: (err: AWSError, data: IoTTwinMaker.Types.UpdateWorkspaceResponse) => void): Request<IoTTwinMaker.Types.UpdateWorkspaceResponse, AWSError>;
  /**
   * Updates a workspace.
   */
  updateWorkspace(callback?: (err: AWSError, data: IoTTwinMaker.Types.UpdateWorkspaceResponse) => void): Request<IoTTwinMaker.Types.UpdateWorkspaceResponse, AWSError>;
}
declare namespace IoTTwinMaker {
  export interface BatchPutPropertyError {
    /**
     * An object that contains information about errors returned by the BatchPutProperty action.
     */
    entry: PropertyValueEntry;
    /**
     * The error code.
     */
    errorCode: String;
    /**
     * The error message.
     */
    errorMessage: String;
  }
  export interface BatchPutPropertyErrorEntry {
    /**
     * A list of objects that contain information about errors returned by the BatchPutProperty action.
     */
    errors: Errors;
  }
  export interface BatchPutPropertyValuesRequest {
    /**
     * An object that maps strings to the property value entries to set. Each string in the mapping must be unique to this object.
     */
    entries: Entries;
    /**
     * The ID of the workspace that contains the properties to set.
     */
    workspaceId: Id;
  }
  export interface BatchPutPropertyValuesResponse {
    /**
     * Entries that caused errors in the batch put operation.
     */
    errorEntries: ErrorEntries;
  }
  export type Boolean = boolean;
  export interface ComponentRequest {
    /**
     * The ID of the component type.
     */
    componentTypeId?: ComponentTypeId;
    /**
     * The description of the component request.
     */
    description?: Description;
    /**
     * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
     */
    properties?: PropertyRequests;
  }
  export interface ComponentResponse {
    /**
     * The name of the component.
     */
    componentName?: Name;
    /**
     * The ID of the component type.
     */
    componentTypeId?: ComponentTypeId;
    /**
     * The name of the property definition set in the request.
     */
    definedIn?: String;
    /**
     * The description of the component type.
     */
    description?: Description;
    /**
     * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
     */
    properties?: PropertyResponses;
    /**
     * The status of the component type.
     */
    status?: Status;
  }
  export type ComponentTypeId = string;
  export type ComponentTypeSummaries = ComponentTypeSummary[];
  export interface ComponentTypeSummary {
    /**
     * The ARN of the component type.
     */
    arn: TwinMakerArn;
    /**
     * The ID of the component type.
     */
    componentTypeId: ComponentTypeId;
    /**
     * The date and time when the component type was created.
     */
    creationDateTime: Timestamp;
    /**
     * The description of the component type.
     */
    description?: Description;
    /**
     * The current status of the component type.
     */
    status?: Status;
    /**
     * The date and time when the component type was last updated.
     */
    updateDateTime: Timestamp;
  }
  export interface ComponentUpdateRequest {
    /**
     * The ID of the component type.
     */
    componentTypeId?: ComponentTypeId;
    /**
     * The description of the component type.
     */
    description?: Description;
    /**
     * An object that maps strings to the properties to set in the component type update. Each string in the mapping must be unique to this object.
     */
    propertyUpdates?: PropertyRequests;
    /**
     * The update type of the component update request.
     */
    updateType?: ComponentUpdateType;
  }
  export type ComponentUpdateType = "CREATE"|"UPDATE"|"DELETE"|string;
  export type ComponentUpdatesMapRequest = {[key: string]: ComponentUpdateRequest};
  export type ComponentsMap = {[key: string]: ComponentResponse};
  export type ComponentsMapRequest = {[key: string]: ComponentRequest};
  export type Configuration = {[key: string]: Value};
  export interface CreateComponentTypeRequest {
    /**
     * The ID of the component type.
     */
    componentTypeId: ComponentTypeId;
    /**
     * The description of the component type.
     */
    description?: Description;
    /**
     * Specifies the parent component type to extend.
     */
    extendsFrom?: ExtendsFrom;
    /**
     * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
     */
    functions?: FunctionsRequest;
    /**
     * A Boolean value that specifies whether an entity can have more than one component of this type.
     */
    isSingleton?: Boolean;
    /**
     * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
     */
    propertyDefinitions?: PropertyDefinitionsRequest;
    /**
     * Metadata that you can use to manage the component type.
     */
    tags?: TagMap;
    /**
     * The ID of the workspace that contains the component type.
     */
    workspaceId: Id;
  }
  export interface CreateComponentTypeResponse {
    /**
     * The ARN of the component type.
     */
    arn: TwinMakerArn;
    /**
     * The date and time when the entity was created.
     */
    creationDateTime: Timestamp;
    /**
     * The current state of the component type.
     */
    state: State;
  }
  export interface CreateEntityRequest {
    /**
     * An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object.
     */
    components?: ComponentsMapRequest;
    /**
     * The description of the entity.
     */
    description?: Description;
    /**
     * The ID of the entity.
     */
    entityId?: EntityId;
    /**
     * The name of the entity.
     */
    entityName: EntityName;
    /**
     * The ID of the entity's parent entity.
     */
    parentEntityId?: ParentEntityId;
    /**
     * Metadata that you can use to manage the entity.
     */
    tags?: TagMap;
    /**
     * The ID of the workspace that contains the entity.
     */
    workspaceId: Id;
  }
  export interface CreateEntityResponse {
    /**
     * The ARN of the entity.
     */
    arn: TwinMakerArn;
    /**
     * The date and time when the entity was created.
     */
    creationDateTime: Timestamp;
    /**
     * The ID of the entity.
     */
    entityId: EntityId;
    /**
     * The current state of the entity.
     */
    state: State;
  }
  export interface CreateSceneRequest {
    /**
     * A list of capabilities that the scene uses to render itself.
     */
    capabilities?: SceneCapabilities;
    /**
     * The relative path that specifies the location of the content definition file.
     */
    contentLocation: S3Url;
    /**
     * The description for this scene.
     */
    description?: Description;
    /**
     * The ID of the scene.
     */
    sceneId: Id;
    /**
     * Metadata that you can use to manage the scene.
     */
    tags?: TagMap;
    /**
     * The ID of the workspace that contains the scene.
     */
    workspaceId: Id;
  }
  export interface CreateSceneResponse {
    /**
     * The ARN of the scene.
     */
    arn: TwinMakerArn;
    /**
     * The date and time when the scene was created.
     */
    creationDateTime: Timestamp;
  }
  export interface CreateWorkspaceRequest {
    /**
     * The description of the workspace.
     */
    description?: Description;
    /**
     * The ARN of the execution role associated with the workspace.
     */
    role: RoleArn;
    /**
     * The ARN of the S3 bucket where resources associated with the workspace are stored.
     */
    s3Location: S3Location;
    /**
     * Metadata that you can use to manage the workspace
     */
    tags?: TagMap;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface CreateWorkspaceResponse {
    /**
     * The ARN of the workspace.
     */
    arn: TwinMakerArn;
    /**
     * The date and time when the workspace was created.
     */
    creationDateTime: Timestamp;
  }
  export interface DataConnector {
    /**
     * A Boolean value that specifies whether the data connector is native to IoT TwinMaker.
     */
    isNative?: Boolean;
    /**
     * The Lambda function associated with this data connector.
     */
    lambda?: LambdaFunction;
  }
  export interface DataType {
    /**
     * The allowed values for this data type.
     */
    allowedValues?: DataValueList;
    /**
     * The nested type in the data type.
     */
    nestedType?: DataType;
    /**
     * A relationship that associates a component with another component.
     */
    relationship?: Relationship;
    /**
     * The underlying type of the data type.
     */
    type: Type;
    /**
     * The unit of measure used in this data type.
     */
    unitOfMeasure?: String;
  }
  export interface DataValue {
    /**
     * A Boolean value.
     */
    booleanValue?: Boolean;
    /**
     * A double value.
     */
    doubleValue?: Double;
    /**
     * An expression that produces the value.
     */
    expression?: Expression;
    /**
     * An integer value.
     */
    integerValue?: Integer;
    /**
     * A list of multiple values.
     */
    listValue?: DataValueList;
    /**
     * A long value.
     */
    longValue?: Long;
    /**
     * An object that maps strings to multiple DataValue objects.
     */
    mapValue?: DataValueMap;
    /**
     * A value that relates a component to another component.
     */
    relationshipValue?: RelationshipValue;
    /**
     * A string value.
     */
    stringValue?: String;
  }
  export type DataValueList = DataValue[];
  export type DataValueMap = {[key: string]: DataValue};
  export interface DeleteComponentTypeRequest {
    /**
     * The ID of the component type to delete.
     */
    componentTypeId: ComponentTypeId;
    /**
     * The ID of the workspace that contains the component type.
     */
    workspaceId: Id;
  }
  export interface DeleteComponentTypeResponse {
    /**
     * The current state of the component type to be deleted.
     */
    state: State;
  }
  export interface DeleteEntityRequest {
    /**
     * The ID of the entity to delete.
     */
    entityId: EntityId;
    /**
     * A Boolean value that specifies whether the operation deletes child entities.
     */
    isRecursive?: Boolean;
    /**
     * The ID of the workspace that contains the entity to delete.
     */
    workspaceId: Id;
  }
  export interface DeleteEntityResponse {
    /**
     * The current state of the deleted entity.
     */
    state: State;
  }
  export interface DeleteSceneRequest {
    /**
     * The ID of the scene to delete.
     */
    sceneId: Id;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface DeleteSceneResponse {
  }
  export interface DeleteWorkspaceRequest {
    /**
     * The ID of the workspace to delete.
     */
    workspaceId: Id;
  }
  export interface DeleteWorkspaceResponse {
  }
  export type Description = string;
  export type Double = number;
  export type EntityId = string;
  export type EntityName = string;
  export interface EntityPropertyReference {
    /**
     * The name of the component.
     */
    componentName?: Name;
    /**
     * The ID of the entity.
     */
    entityId?: EntityId;
    /**
     * A mapping of external IDs to property names. External IDs uniquely identify properties from external data stores.
     */
    externalIdProperty?: ExternalIdProperty;
    /**
     * The name of the property.
     */
    propertyName: Name;
  }
  export type EntitySummaries = EntitySummary[];
  export interface EntitySummary {
    /**
     * The ARN of the entity.
     */
    arn: TwinMakerArn;
    /**
     * The date and time when the entity was created.
     */
    creationDateTime: Timestamp;
    /**
     * The description of the entity.
     */
    description?: Description;
    /**
     * The ID of the entity.
     */
    entityId: EntityId;
    /**
     * The name of the entity.
     */
    entityName: EntityName;
    /**
     * A Boolean value that specifies whether the entity has child entities or not.
     */
    hasChildEntities?: Boolean;
    /**
     * The ID of the parent entity.
     */
    parentEntityId?: ParentEntityId;
    /**
     * The current status of the entity.
     */
    status: Status;
    /**
     * The last date and time when the entity was updated.
     */
    updateDateTime: Timestamp;
  }
  export type Entries = PropertyValueEntry[];
  export type ErrorCode = "VALIDATION_ERROR"|"INTERNAL_FAILURE"|string;
  export interface ErrorDetails {
    /**
     * The error code.
     */
    code?: ErrorCode;
    /**
     * The error message.
     */
    message?: ErrorMessage;
  }
  export type ErrorEntries = BatchPutPropertyErrorEntry[];
  export type ErrorMessage = string;
  export type Errors = BatchPutPropertyError[];
  export type Expression = string;
  export type ExtendsFrom = ComponentTypeId[];
  export type ExternalIdProperty = {[key: string]: String};
  export interface FunctionRequest {
    /**
     * The data connector.
     */
    implementedBy?: DataConnector;
    /**
     * The required properties of the function.
     */
    requiredProperties?: RequiredProperties;
    /**
     * The scope of the function.
     */
    scope?: Scope;
  }
  export interface FunctionResponse {
    /**
     * The data connector.
     */
    implementedBy?: DataConnector;
    /**
     * Indicates whether this function is inherited.
     */
    isInherited?: Boolean;
    /**
     * The required properties of the function.
     */
    requiredProperties?: RequiredProperties;
    /**
     * The scope of the function.
     */
    scope?: Scope;
  }
  export type FunctionsRequest = {[key: string]: FunctionRequest};
  export type FunctionsResponse = {[key: string]: FunctionResponse};
  export interface GetComponentTypeRequest {
    /**
     * The ID of the component type.
     */
    componentTypeId: ComponentTypeId;
    /**
     * The ID of the workspace that contains the component type.
     */
    workspaceId: Id;
  }
  export interface GetComponentTypeResponse {
    /**
     * The ARN of the component type.
     */
    arn: TwinMakerArn;
    /**
     * The ID of the component type.
     */
    componentTypeId: ComponentTypeId;
    /**
     * The date and time when the component type was created.
     */
    creationDateTime: Timestamp;
    /**
     * The description of the component type.
     */
    description?: Description;
    /**
     * The name of the parent component type that this component type extends.
     */
    extendsFrom?: ExtendsFrom;
    /**
     * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
     */
    functions?: FunctionsResponse;
    /**
     * A Boolean value that specifies whether the component type is abstract.
     */
    isAbstract?: Boolean;
    /**
     * A Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run.
     */
    isSchemaInitialized?: Boolean;
    /**
     * A Boolean value that specifies whether an entity can have more than one component of this type.
     */
    isSingleton?: Boolean;
    /**
     * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
     */
    propertyDefinitions?: PropertyDefinitionsResponse;
    /**
     * The current status of the component type.
     */
    status?: Status;
    /**
     * The date and time when the component was last updated.
     */
    updateDateTime: Timestamp;
    /**
     * The ID of the workspace that contains the component type.
     */
    workspaceId: Id;
  }
  export interface GetEntityRequest {
    /**
     * The ID of the entity.
     */
    entityId: EntityId;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface GetEntityResponse {
    /**
     * The ARN of the entity.
     */
    arn: TwinMakerArn;
    /**
     * An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object.
     */
    components?: ComponentsMap;
    /**
     * The date and time when the entity was created.
     */
    creationDateTime: Timestamp;
    /**
     * The description of the entity.
     */
    description?: Description;
    /**
     * The ID of the entity.
     */
    entityId: EntityId;
    /**
     * The name of the entity.
     */
    entityName: EntityName;
    /**
     * A Boolean value that specifies whether the entity has associated child entities.
     */
    hasChildEntities: Boolean;
    /**
     * The ID of the parent entity for this entity.
     */
    parentEntityId: ParentEntityId;
    /**
     * The current status of the entity.
     */
    status: Status;
    /**
     * The date and time when the entity was last updated.
     */
    updateDateTime: Timestamp;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface GetPropertyValueHistoryRequest {
    /**
     * The name of the component.
     */
    componentName?: Name;
    /**
     * The ID of the component type.
     */
    componentTypeId?: ComponentTypeId;
    /**
     * The date and time of the latest property value to return.
     */
    endDateTime?: Timestamp;
    /**
     * The ISO8601 DateTime of the latest property value to return. For more information about the ISO8601 DateTime format, see the data type PropertyValue.
     */
    endTime?: Time;
    /**
     * The ID of the entity.
     */
    entityId?: EntityId;
    /**
     * An object that specifies the interpolation type and the interval over which to interpolate data.
     */
    interpolation?: InterpolationParameters;
    /**
     * The maximum number of results to return.
     */
    maxResults?: MaxResults;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The time direction to use in the result order.
     */
    orderByTime?: OrderByTime;
    /**
     * A list of objects that filter the property value history request.
     */
    propertyFilters?: PropertyFilters;
    /**
     * A list of properties whose value histories the request retrieves.
     */
    selectedProperties: SelectedPropertyList;
    /**
     * The date and time of the earliest property value to return.
     */
    startDateTime?: Timestamp;
    /**
     * The ISO8601 DateTime of the earliest property value to return. For more information about the ISO8601 DateTime format, see the data type PropertyValue.
     */
    startTime?: Time;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface GetPropertyValueHistoryResponse {
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
     */
    propertyValues: PropertyValueList;
  }
  export interface GetPropertyValueRequest {
    /**
     * The name of the component whose property values the operation returns.
     */
    componentName?: Name;
    /**
     * The ID of the component type whose property values the operation returns.
     */
    componentTypeId?: ComponentTypeId;
    /**
     * The ID of the entity whose property values the operation returns.
     */
    entityId?: EntityId;
    /**
     * The properties whose values the operation returns.
     */
    selectedProperties: SelectedPropertyList;
    /**
     * The ID of the workspace whose values the operation returns.
     */
    workspaceId: Id;
  }
  export interface GetPropertyValueResponse {
    /**
     * An object that maps strings to the properties and latest property values in the response. Each string in the mapping must be unique to this object.
     */
    propertyValues: PropertyLatestValueMap;
  }
  export interface GetSceneRequest {
    /**
     * The ID of the scene.
     */
    sceneId: Id;
    /**
     * The ID of the workspace that contains the scene.
     */
    workspaceId: Id;
  }
  export interface GetSceneResponse {
    /**
     * The ARN of the scene.
     */
    arn: TwinMakerArn;
    /**
     * A list of capabilities that the scene uses to render.
     */
    capabilities?: SceneCapabilities;
    /**
     * The relative path that specifies the location of the content definition file.
     */
    contentLocation: S3Url;
    /**
     * The date and time when the scene was created.
     */
    creationDateTime: Timestamp;
    /**
     * The description of the scene.
     */
    description?: Description;
    /**
     * The ID of the scene.
     */
    sceneId: Id;
    /**
     * The date and time when the scene was last updated.
     */
    updateDateTime: Timestamp;
    /**
     * The ID of the workspace that contains the scene.
     */
    workspaceId: Id;
  }
  export interface GetWorkspaceRequest {
    /**
     * The ID of the workspace.
     */
    workspaceId: IdOrArn;
  }
  export interface GetWorkspaceResponse {
    /**
     * The ARN of the workspace.
     */
    arn: TwinMakerArn;
    /**
     * The date and time when the workspace was created.
     */
    creationDateTime: Timestamp;
    /**
     * The description of the workspace.
     */
    description?: Description;
    /**
     * The ARN of the execution role associated with the workspace.
     */
    role: RoleArn;
    /**
     * The ARN of the S3 bucket where resources associated with the workspace are stored.
     */
    s3Location: S3Location;
    /**
     * The date and time when the workspace was last updated.
     */
    updateDateTime: Timestamp;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export type Id = string;
  export type IdOrArn = string;
  export type Integer = number;
  export interface InterpolationParameters {
    /**
     * The interpolation type.
     */
    interpolationType?: InterpolationType;
    /**
     * The interpolation time interval in seconds.
     */
    intervalInSeconds?: IntervalInSeconds;
  }
  export type InterpolationType = "LINEAR"|string;
  export type IntervalInSeconds = number;
  export type LambdaArn = string;
  export interface LambdaFunction {
    /**
     * The ARN of the Lambda function.
     */
    arn: LambdaArn;
  }
  export interface ListComponentTypesFilter {
    /**
     * The component type that the component types in the list extend.
     */
    extendsFrom?: ComponentTypeId;
    /**
     * A Boolean value that specifies whether the component types in the list are abstract.
     */
    isAbstract?: Boolean;
    /**
     * The namespace to which the component types in the list belong.
     */
    namespace?: String;
  }
  export type ListComponentTypesFilters = ListComponentTypesFilter[];
  export interface ListComponentTypesRequest {
    /**
     * A list of objects that filter the request.
     */
    filters?: ListComponentTypesFilters;
    /**
     * The maximum number of results to display.
     */
    maxResults?: MaxResults;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface ListComponentTypesResponse {
    /**
     * A list of objects that contain information about the component types.
     */
    componentTypeSummaries: ComponentTypeSummaries;
    /**
     * Specifies the maximum number of results to display.
     */
    maxResults?: MaxResults;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface ListEntitiesFilter {
    /**
     * The ID of the component type in the entities in the list.
     */
    componentTypeId?: ComponentTypeId;
    /**
     * The external-Id property of a component. The external-Id property is the primary key of an external storage system.
     */
    externalId?: String;
    /**
     * The parent of the entities in the list.
     */
    parentEntityId?: ParentEntityId;
  }
  export type ListEntitiesFilters = ListEntitiesFilter[];
  export interface ListEntitiesRequest {
    /**
     * A list of objects that filter the request.  Only one object is accepted as a valid input. 
     */
    filters?: ListEntitiesFilters;
    /**
     * The maximum number of results to display.
     */
    maxResults?: MaxResults;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface ListEntitiesResponse {
    /**
     * A list of objects that contain information about the entities.
     */
    entitySummaries?: EntitySummaries;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListScenesRequest {
    /**
     * Specifies the maximum number of results to display.
     */
    maxResults?: MaxResults;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The ID of the workspace that contains the scenes.
     */
    workspaceId: Id;
  }
  export interface ListScenesResponse {
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * A list of objects that contain information about the scenes.
     */
    sceneSummaries?: SceneSummaries;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The maximum number of results to display.
     */
    maxResults?: MaxResults;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The ARN of the resource.
     */
    resourceARN: TwinMakerArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * Metadata that you can use to manage a resource.
     */
    tags?: TagMap;
  }
  export interface ListWorkspacesRequest {
    /**
     * The maximum number of results to display.
     */
    maxResults?: MaxResults;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListWorkspacesResponse {
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: NextToken;
    /**
     * A list of objects that contain information about the workspaces.
     */
    workspaceSummaries?: WorkspaceSummaries;
  }
  export type Long = number;
  export type MaxResults = number;
  export type Name = string;
  export type NextToken = string;
  export type OrderByTime = "ASCENDING"|"DESCENDING"|string;
  export type ParentEntityId = string;
  export interface ParentEntityUpdateRequest {
    /**
     * The ID of the parent entity.
     */
    parentEntityId?: ParentEntityId;
    /**
     * The type of the update.
     */
    updateType: ParentEntityUpdateType;
  }
  export type ParentEntityUpdateType = "UPDATE"|"DELETE"|string;
  export interface PropertyDefinitionRequest {
    /**
     * A mapping that specifies configuration information about the property. Use this field to specify information that you read from and write to an external source.
     */
    configuration?: Configuration;
    /**
     * An object that contains information about the data type.
     */
    dataType?: DataType;
    /**
     * An object that contains the default value.
     */
    defaultValue?: DataValue;
    /**
     * A Boolean value that specifies whether the property ID comes from an external data store.
     */
    isExternalId?: Boolean;
    /**
     * A Boolean value that specifies whether the property is required.
     */
    isRequiredInEntity?: Boolean;
    /**
     * A Boolean value that specifies whether the property is stored externally.
     */
    isStoredExternally?: Boolean;
    /**
     * A Boolean value that specifies whether the property consists of time series data.
     */
    isTimeSeries?: Boolean;
  }
  export interface PropertyDefinitionResponse {
    /**
     * A mapping that specifies configuration information about the property.
     */
    configuration?: Configuration;
    /**
     * An object that contains information about the data type.
     */
    dataType: DataType;
    /**
     * An object that contains the default value.
     */
    defaultValue?: DataValue;
    /**
     * A Boolean value that specifies whether the property ID comes from an external data store.
     */
    isExternalId: Boolean;
    /**
     * A Boolean value that specifies whether the property definition can be updated.
     */
    isFinal: Boolean;
    /**
     * A Boolean value that specifies whether the property definition is imported from an external data store.
     */
    isImported: Boolean;
    /**
     * A Boolean value that specifies whether the property definition is inherited from a parent entity.
     */
    isInherited: Boolean;
    /**
     * A Boolean value that specifies whether the property is required in an entity.
     */
    isRequiredInEntity: Boolean;
    /**
     * A Boolean value that specifies whether the property is stored externally.
     */
    isStoredExternally: Boolean;
    /**
     * A Boolean value that specifies whether the property consists of time series data.
     */
    isTimeSeries: Boolean;
  }
  export type PropertyDefinitionsRequest = {[key: string]: PropertyDefinitionRequest};
  export type PropertyDefinitionsResponse = {[key: string]: PropertyDefinitionResponse};
  export interface PropertyFilter {
    /**
     * The operator associated with this property filter.
     */
    operator?: String;
    /**
     * The property name associated with this property filter.
     */
    propertyName?: String;
    /**
     * The value associated with this property filter.
     */
    value?: DataValue;
  }
  export type PropertyFilters = PropertyFilter[];
  export interface PropertyLatestValue {
    /**
     * An object that specifies information about a property.&gt;
     */
    propertyReference: EntityPropertyReference;
    /**
     * The value of the property.
     */
    propertyValue?: DataValue;
  }
  export type PropertyLatestValueMap = {[key: string]: PropertyLatestValue};
  export interface PropertyRequest {
    /**
     * An object that specifies information about a property.
     */
    definition?: PropertyDefinitionRequest;
    /**
     * The update type of the update property request.
     */
    updateType?: PropertyUpdateType;
    /**
     * The value of the property.
     */
    value?: DataValue;
  }
  export type PropertyRequests = {[key: string]: PropertyRequest};
  export interface PropertyResponse {
    /**
     * An object that specifies information about a property.
     */
    definition?: PropertyDefinitionResponse;
    /**
     * The value of the property.
     */
    value?: DataValue;
  }
  export type PropertyResponses = {[key: string]: PropertyResponse};
  export type PropertyUpdateType = "UPDATE"|"DELETE"|"CREATE"|string;
  export interface PropertyValue {
    /**
     * ISO8601 DateTime of a value for a time series property. The time for when the property value was recorded in ISO 8601 format: YYYY-MM-DDThh:mm:ss[.SSSSSSSSS][Z/±HH:mm].    [YYYY]: year    [MM]: month    [DD]: day    [hh]: hour    [mm]: minute    [ss]: seconds    [.SSSSSSSSS]: additional precision, where precedence is maintained. For example: [.573123] is equal to 573123000 nanoseconds.    Z: default timezone UTC    ± HH:mm: time zone offset in Hours and Minutes.    Required sub-fields: YYYY-MM-DDThh:mm:ss and [Z/±HH:mm]
     */
    time?: Time;
    /**
     * The timestamp of a value for a time series property.
     */
    timestamp?: Timestamp;
    /**
     * An object that specifies a value for a time series property.
     */
    value: DataValue;
  }
  export interface PropertyValueEntry {
    /**
     * An object that contains information about the entity that has the property.
     */
    entityPropertyReference: EntityPropertyReference;
    /**
     * A list of objects that specify time series property values.
     */
    propertyValues?: PropertyValues;
  }
  export interface PropertyValueHistory {
    /**
     * An object that uniquely identifies an entity property.
     */
    entityPropertyReference: EntityPropertyReference;
    /**
     * A list of objects that contain information about the values in the history of a time series property.
     */
    values?: Values;
  }
  export type PropertyValueList = PropertyValueHistory[];
  export type PropertyValues = PropertyValue[];
  export interface Relationship {
    /**
     * The type of the relationship.
     */
    relationshipType?: String;
    /**
     * The ID of the target component type associated with this relationship.
     */
    targetComponentTypeId?: ComponentTypeId;
  }
  export interface RelationshipValue {
    /**
     * The name of the target component associated with the relationship value.
     */
    targetComponentName?: Name;
    /**
     * The ID of the target entity associated with this relationship value.
     */
    targetEntityId?: EntityId;
  }
  export type RequiredProperties = Name[];
  export type RoleArn = string;
  export type S3Location = string;
  export type S3Url = string;
  export type SceneCapabilities = SceneCapability[];
  export type SceneCapability = string;
  export type SceneSummaries = SceneSummary[];
  export interface SceneSummary {
    /**
     * The ARN of the scene.
     */
    arn: TwinMakerArn;
    /**
     * The relative path that specifies the location of the content definition file.
     */
    contentLocation: S3Url;
    /**
     * The date and time when the scene was created.
     */
    creationDateTime: Timestamp;
    /**
     * The scene description.
     */
    description?: Description;
    /**
     * The ID of the scene.
     */
    sceneId: Id;
    /**
     * The date and time when the scene was last updated.
     */
    updateDateTime: Timestamp;
  }
  export type Scope = "ENTITY"|"WORKSPACE"|string;
  export type SelectedPropertyList = String[];
  export type State = "CREATING"|"UPDATING"|"DELETING"|"ACTIVE"|"ERROR"|string;
  export interface Status {
    /**
     * The error message.
     */
    error?: ErrorDetails;
    /**
     * The current state of the entity, component, component type, or workspace.
     */
    state?: State;
  }
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceARN: TwinMakerArn;
    /**
     * Metadata to add to this resource.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Time = string;
  export type Timestamp = Date;
  export type TwinMakerArn = string;
  export type Type = "RELATIONSHIP"|"STRING"|"LONG"|"BOOLEAN"|"INTEGER"|"DOUBLE"|"LIST"|"MAP"|string;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceARN: TwinMakerArn;
    /**
     * A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateComponentTypeRequest {
    /**
     * The ID of the component type.
     */
    componentTypeId: ComponentTypeId;
    /**
     * The description of the component type.
     */
    description?: Description;
    /**
     * Specifies the component type that this component type extends.
     */
    extendsFrom?: ExtendsFrom;
    /**
     * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
     */
    functions?: FunctionsRequest;
    /**
     * A Boolean value that specifies whether an entity can have more than one component of this type.
     */
    isSingleton?: Boolean;
    /**
     * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
     */
    propertyDefinitions?: PropertyDefinitionsRequest;
    /**
     * The ID of the workspace that contains the component type.
     */
    workspaceId: Id;
  }
  export interface UpdateComponentTypeResponse {
    /**
     * The ARN of the component type.
     */
    arn: TwinMakerArn;
    /**
     * The ID of the component type.
     */
    componentTypeId: ComponentTypeId;
    /**
     * The current state of the component type.
     */
    state: State;
    /**
     * The ID of the workspace that contains the component type.
     */
    workspaceId: Id;
  }
  export interface UpdateEntityRequest {
    /**
     * An object that maps strings to the component updates in the request. Each string in the mapping must be unique to this object.
     */
    componentUpdates?: ComponentUpdatesMapRequest;
    /**
     * The description of the entity.
     */
    description?: Description;
    /**
     * The ID of the entity.
     */
    entityId: EntityId;
    /**
     * The name of the entity.
     */
    entityName?: EntityName;
    /**
     * An object that describes the update request for a parent entity.
     */
    parentEntityUpdate?: ParentEntityUpdateRequest;
    /**
     * The ID of the workspace that contains the entity.
     */
    workspaceId: Id;
  }
  export interface UpdateEntityResponse {
    /**
     * The current state of the entity update.
     */
    state: State;
    /**
     * The date and time when the entity was last updated.
     */
    updateDateTime: Timestamp;
  }
  export interface UpdateSceneRequest {
    /**
     * A list of capabilities that the scene uses to render.
     */
    capabilities?: SceneCapabilities;
    /**
     * The relative path that specifies the location of the content definition file.
     */
    contentLocation?: S3Url;
    /**
     * The description of this scene.
     */
    description?: Description;
    /**
     * The ID of the scene.
     */
    sceneId: Id;
    /**
     * The ID of the workspace that contains the scene.
     */
    workspaceId: Id;
  }
  export interface UpdateSceneResponse {
    /**
     * The date and time when the scene was last updated.
     */
    updateDateTime: Timestamp;
  }
  export interface UpdateWorkspaceRequest {
    /**
     * The description of the workspace.
     */
    description?: Description;
    /**
     * The ARN of the execution role associated with the workspace.
     */
    role?: RoleArn;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  export interface UpdateWorkspaceResponse {
    /**
     * The date and time of the current update.
     */
    updateDateTime: Timestamp;
  }
  export type Value = string;
  export type Values = PropertyValue[];
  export type WorkspaceSummaries = WorkspaceSummary[];
  export interface WorkspaceSummary {
    /**
     * The ARN of the workspace.
     */
    arn: TwinMakerArn;
    /**
     * The date and time when the workspace was created.
     */
    creationDateTime: Timestamp;
    /**
     * The description of the workspace.
     */
    description?: Description;
    /**
     * The date and time when the workspace was last updated.
     */
    updateDateTime: Timestamp;
    /**
     * The ID of the workspace.
     */
    workspaceId: Id;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-11-29"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IoTTwinMaker client.
   */
  export import Types = IoTTwinMaker;
}
export = IoTTwinMaker;
