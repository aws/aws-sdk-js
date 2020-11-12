import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ServiceCatalogAppRegistry extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ServiceCatalogAppRegistry.Types.ClientConfiguration)
  config: Config & ServiceCatalogAppRegistry.Types.ClientConfiguration;
  /**
   * Associates an attribute group with an application to augment the application's metadata with the group's attributes. This way applications can be described with user-defined details which are machine-readable (e.g. for third-party integrations).
   */
  associateAttributeGroup(params: ServiceCatalogAppRegistry.Types.AssociateAttributeGroupRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.AssociateAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.AssociateAttributeGroupResponse, AWSError>;
  /**
   * Associates an attribute group with an application to augment the application's metadata with the group's attributes. This way applications can be described with user-defined details which are machine-readable (e.g. for third-party integrations).
   */
  associateAttributeGroup(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.AssociateAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.AssociateAttributeGroupResponse, AWSError>;
  /**
   * Associates a resource with an application. Both the resource and the application can be specified either by ID or name.
   */
  associateResource(params: ServiceCatalogAppRegistry.Types.AssociateResourceRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.AssociateResourceResponse) => void): Request<ServiceCatalogAppRegistry.Types.AssociateResourceResponse, AWSError>;
  /**
   * Associates a resource with an application. Both the resource and the application can be specified either by ID or name.
   */
  associateResource(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.AssociateResourceResponse) => void): Request<ServiceCatalogAppRegistry.Types.AssociateResourceResponse, AWSError>;
  /**
   * Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
   */
  createApplication(params: ServiceCatalogAppRegistry.Types.CreateApplicationRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.CreateApplicationResponse) => void): Request<ServiceCatalogAppRegistry.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
   */
  createApplication(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.CreateApplicationResponse) => void): Request<ServiceCatalogAppRegistry.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates a new attribute group as a container for user-defined attributes. This approach enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
   */
  createAttributeGroup(params: ServiceCatalogAppRegistry.Types.CreateAttributeGroupRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.CreateAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.CreateAttributeGroupResponse, AWSError>;
  /**
   * Creates a new attribute group as a container for user-defined attributes. This approach enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
   */
  createAttributeGroup(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.CreateAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.CreateAttributeGroupResponse, AWSError>;
  /**
   * Delete an application, specified either by its application ID or name.
   */
  deleteApplication(params: ServiceCatalogAppRegistry.Types.DeleteApplicationRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.DeleteApplicationResponse) => void): Request<ServiceCatalogAppRegistry.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Delete an application, specified either by its application ID or name.
   */
  deleteApplication(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.DeleteApplicationResponse) => void): Request<ServiceCatalogAppRegistry.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes an attribute group, specified either by its attribute group ID or name.
   */
  deleteAttributeGroup(params: ServiceCatalogAppRegistry.Types.DeleteAttributeGroupRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.DeleteAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.DeleteAttributeGroupResponse, AWSError>;
  /**
   * Deletes an attribute group, specified either by its attribute group ID or name.
   */
  deleteAttributeGroup(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.DeleteAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.DeleteAttributeGroupResponse, AWSError>;
  /**
   * Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts AssociateAttributeGroup.
   */
  disassociateAttributeGroup(params: ServiceCatalogAppRegistry.Types.DisassociateAttributeGroupRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.DisassociateAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.DisassociateAttributeGroupResponse, AWSError>;
  /**
   * Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts AssociateAttributeGroup.
   */
  disassociateAttributeGroup(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.DisassociateAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.DisassociateAttributeGroupResponse, AWSError>;
  /**
   * Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
   */
  disassociateResource(params: ServiceCatalogAppRegistry.Types.DisassociateResourceRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.DisassociateResourceResponse) => void): Request<ServiceCatalogAppRegistry.Types.DisassociateResourceResponse, AWSError>;
  /**
   * Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
   */
  disassociateResource(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.DisassociateResourceResponse) => void): Request<ServiceCatalogAppRegistry.Types.DisassociateResourceResponse, AWSError>;
  /**
   * Retrieves metadata information about one of your applications. The application can be specified either by its unique ID or by its name (which is unique within one account in one region at a given point in time). Specify by ID in automated workflows if you want to make sure that the exact same application is returned or a ResourceNotFoundException is thrown, avoiding the ABA addressing problem.
   */
  getApplication(params: ServiceCatalogAppRegistry.Types.GetApplicationRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.GetApplicationResponse) => void): Request<ServiceCatalogAppRegistry.Types.GetApplicationResponse, AWSError>;
  /**
   * Retrieves metadata information about one of your applications. The application can be specified either by its unique ID or by its name (which is unique within one account in one region at a given point in time). Specify by ID in automated workflows if you want to make sure that the exact same application is returned or a ResourceNotFoundException is thrown, avoiding the ABA addressing problem.
   */
  getApplication(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.GetApplicationResponse) => void): Request<ServiceCatalogAppRegistry.Types.GetApplicationResponse, AWSError>;
  /**
   * Retrieves an attribute group, either by its name or its ID.
   */
  getAttributeGroup(params: ServiceCatalogAppRegistry.Types.GetAttributeGroupRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.GetAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.GetAttributeGroupResponse, AWSError>;
  /**
   * Retrieves an attribute group, either by its name or its ID.
   */
  getAttributeGroup(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.GetAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.GetAttributeGroupResponse, AWSError>;
  /**
   * Retrieves a list of all of your applications. Results are paginated.
   */
  listApplications(params: ServiceCatalogAppRegistry.Types.ListApplicationsRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.ListApplicationsResponse) => void): Request<ServiceCatalogAppRegistry.Types.ListApplicationsResponse, AWSError>;
  /**
   * Retrieves a list of all of your applications. Results are paginated.
   */
  listApplications(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.ListApplicationsResponse) => void): Request<ServiceCatalogAppRegistry.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists all attribute groups that are associated with specified application. Results are paginated.
   */
  listAssociatedAttributeGroups(params: ServiceCatalogAppRegistry.Types.ListAssociatedAttributeGroupsRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.ListAssociatedAttributeGroupsResponse) => void): Request<ServiceCatalogAppRegistry.Types.ListAssociatedAttributeGroupsResponse, AWSError>;
  /**
   * Lists all attribute groups that are associated with specified application. Results are paginated.
   */
  listAssociatedAttributeGroups(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.ListAssociatedAttributeGroupsResponse) => void): Request<ServiceCatalogAppRegistry.Types.ListAssociatedAttributeGroupsResponse, AWSError>;
  /**
   * Lists all resources that are associated with specified application. Results are paginated.
   */
  listAssociatedResources(params: ServiceCatalogAppRegistry.Types.ListAssociatedResourcesRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.ListAssociatedResourcesResponse) => void): Request<ServiceCatalogAppRegistry.Types.ListAssociatedResourcesResponse, AWSError>;
  /**
   * Lists all resources that are associated with specified application. Results are paginated.
   */
  listAssociatedResources(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.ListAssociatedResourcesResponse) => void): Request<ServiceCatalogAppRegistry.Types.ListAssociatedResourcesResponse, AWSError>;
  /**
   * Lists all attribute groups which you have access to. Results are paginated.
   */
  listAttributeGroups(params: ServiceCatalogAppRegistry.Types.ListAttributeGroupsRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.ListAttributeGroupsResponse) => void): Request<ServiceCatalogAppRegistry.Types.ListAttributeGroupsResponse, AWSError>;
  /**
   * Lists all attribute groups which you have access to. Results are paginated.
   */
  listAttributeGroups(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.ListAttributeGroupsResponse) => void): Request<ServiceCatalogAppRegistry.Types.ListAttributeGroupsResponse, AWSError>;
  /**
   * Updates an existing application with new attributes.
   */
  updateApplication(params: ServiceCatalogAppRegistry.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.UpdateApplicationResponse) => void): Request<ServiceCatalogAppRegistry.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates an existing application with new attributes.
   */
  updateApplication(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.UpdateApplicationResponse) => void): Request<ServiceCatalogAppRegistry.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates an existing attribute group with new details. 
   */
  updateAttributeGroup(params: ServiceCatalogAppRegistry.Types.UpdateAttributeGroupRequest, callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.UpdateAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.UpdateAttributeGroupResponse, AWSError>;
  /**
   * Updates an existing attribute group with new details. 
   */
  updateAttributeGroup(callback?: (err: AWSError, data: ServiceCatalogAppRegistry.Types.UpdateAttributeGroupResponse) => void): Request<ServiceCatalogAppRegistry.Types.UpdateAttributeGroupResponse, AWSError>;
}
declare namespace ServiceCatalogAppRegistry {
  export interface Application {
    /**
     * The identifier of the application.
     */
    id?: ApplicationId;
    /**
     * The Amazon resource name (ARN) that specifies the application across services.
     */
    arn?: ApplicationArn;
    /**
     * The name of the application. The name must be unique in the region in which you are creating the application.
     */
    name?: Name;
    /**
     * The description of the application.
     */
    description?: Description;
    /**
     * The ISO-8601 formatted timestamp of the moment when the application was created.
     */
    creationTime?: Timestamp;
    /**
     *  The ISO-8601 formatted timestamp of the moment when the application was last updated.
     */
    lastUpdateTime?: Timestamp;
    /**
     * Key-value pairs you can use to associate with the application.
     */
    tags?: Tags;
  }
  export type ApplicationArn = string;
  export type ApplicationId = string;
  export type ApplicationSpecifier = string;
  export type ApplicationSummaries = ApplicationSummary[];
  export interface ApplicationSummary {
    /**
     * The identifier of the application.
     */
    id?: ApplicationId;
    /**
     * The Amazon resource name (ARN) that specifies the application across services.
     */
    arn?: ApplicationArn;
    /**
     * The name of the application. The name must be unique in the region in which you are creating the application.
     */
    name?: Name;
    /**
     * The description of the application.
     */
    description?: Description;
    /**
     * The ISO-8601 formatted timestamp of the moment when the application was created.
     */
    creationTime?: Timestamp;
    /**
     *  The ISO-8601 formatted timestamp of the moment when the application was last updated.
     */
    lastUpdateTime?: Timestamp;
  }
  export type Arn = string;
  export interface AssociateAttributeGroupRequest {
    /**
     * The name or ID of the application.
     */
    application: ApplicationSpecifier;
    /**
     * The name or ID of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup: AttributeGroupSpecifier;
  }
  export interface AssociateAttributeGroupResponse {
    /**
     * The Amazon resource name (ARN) of the application that was augmented with attributes.
     */
    applicationArn?: ApplicationArn;
    /**
     * The Amazon resource name (ARN) of the attribute group that contains the application's new attributes.
     */
    attributeGroupArn?: AttributeGroupArn;
  }
  export interface AssociateResourceRequest {
    /**
     * The name or ID of the application.
     */
    application: ApplicationSpecifier;
    resourceType: ResourceType;
    /**
     * The name or ID of the resource of which the application will be associated.
     */
    resource: ResourceSpecifier;
  }
  export interface AssociateResourceResponse {
    /**
     * The Amazon resource name (ARN) of the application that was augmented with attributes.
     */
    applicationArn?: ApplicationArn;
    /**
     * The Amazon resource name (ARN) that specifies the resource.
     */
    resourceArn?: Arn;
  }
  export type AssociationCount = number;
  export interface AttributeGroup {
    /**
     * The globally unique attribute group identifier of the attribute group.
     */
    id?: AttributeGroupId;
    /**
     * The Amazon resource name (ARN) that specifies the application across services.
     */
    arn?: AttributeGroupArn;
    /**
     * The name of the attribute group.
     */
    name?: Name;
    /**
     * The description of the attribute group that the user provides.
     */
    description?: Description;
    /**
     * The ISO-8601 formatted timestamp of the moment the attribute group was created.
     */
    creationTime?: Timestamp;
    /**
     * The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.
     */
    lastUpdateTime?: Timestamp;
    /**
     * Key-value pairs you can use to associate with the attribute group.
     */
    tags?: Tags;
  }
  export type AttributeGroupArn = string;
  export type AttributeGroupId = string;
  export type AttributeGroupIds = AttributeGroupId[];
  export type AttributeGroupSpecifier = string;
  export type AttributeGroupSummaries = AttributeGroupSummary[];
  export interface AttributeGroupSummary {
    /**
     * The globally unique attribute group identifier of the attribute group.
     */
    id?: AttributeGroupId;
    /**
     * The Amazon resource name (ARN) that specifies the application across services.
     */
    arn?: AttributeGroupArn;
    /**
     * The name of the attribute group.
     */
    name?: Name;
    /**
     * The description of the attribute group that the user provides.
     */
    description?: Description;
    /**
     * The ISO-8601 formatted timestamp of the moment the attribute group was created.
     */
    creationTime?: Timestamp;
    /**
     * The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.
     */
    lastUpdateTime?: Timestamp;
  }
  export type Attributes = string;
  export type ClientToken = string;
  export interface CreateApplicationRequest {
    /**
     * The name of the application. The name must be unique in the region in which you are creating the application.
     */
    name: Name;
    /**
     * The description of the application.
     */
    description?: Description;
    /**
     * Key-value pairs you can use to associate with the application.
     */
    tags?: Tags;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the clientToken, the same response is returned for each repeated request.
     */
    clientToken: ClientToken;
  }
  export interface CreateApplicationResponse {
    /**
     * The name or ID of the application.
     */
    application?: Application;
  }
  export interface CreateAttributeGroupRequest {
    /**
     * The name of the attribute group.
     */
    name: Name;
    /**
     * The description of the attribute group that the user provides.
     */
    description?: Description;
    /**
     * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
     */
    attributes: Attributes;
    /**
     * Key-value pairs you can use to associate with the attribute group.
     */
    tags?: Tags;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the clientToken, the same response is returned for each repeated request.
     */
    clientToken: ClientToken;
  }
  export interface CreateAttributeGroupResponse {
    /**
     * The name or ID of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup?: AttributeGroup;
  }
  export interface DeleteApplicationRequest {
    /**
     * The name or ID of the application.
     */
    application: ApplicationSpecifier;
  }
  export interface DeleteApplicationResponse {
    /**
     * The name or ID of the application.
     */
    application?: ApplicationSummary;
  }
  export interface DeleteAttributeGroupRequest {
    /**
     * The name or ID of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup: AttributeGroupSpecifier;
  }
  export interface DeleteAttributeGroupResponse {
    /**
     * The name or ID of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup?: AttributeGroupSummary;
  }
  export type Description = string;
  export interface DisassociateAttributeGroupRequest {
    /**
     * The name or ID of the application.
     */
    application: ApplicationSpecifier;
    /**
     * The name or ID of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup: AttributeGroupSpecifier;
  }
  export interface DisassociateAttributeGroupResponse {
    /**
     * The Amazon resource name (ARN) of the application that was augmented with attributes.
     */
    applicationArn?: ApplicationArn;
    /**
     * The Amazon resource name (ARN) of the attribute group that contains the application's new attributes.
     */
    attributeGroupArn?: AttributeGroupArn;
  }
  export interface DisassociateResourceRequest {
    /**
     * The name or ID of the application.
     */
    application: ApplicationSpecifier;
    /**
     * The type of the resource that's being disassociated.
     */
    resourceType: ResourceType;
    /**
     * The name or ID of the resource of which the application will be associated.
     */
    resource: ResourceSpecifier;
  }
  export interface DisassociateResourceResponse {
    /**
     * The Amazon resource name (ARN) of the application that was augmented with attributes.
     */
    applicationArn?: ApplicationArn;
    /**
     * The Amazon resource name (ARN) that specifies the resource.
     */
    resourceArn?: Arn;
  }
  export interface GetApplicationRequest {
    /**
     * The name or ID of the application.
     */
    application: ApplicationSpecifier;
  }
  export interface GetApplicationResponse {
    /**
     * The identifier of the application.
     */
    id?: ApplicationId;
    /**
     * The Amazon resource name (ARN) that specifies the application across services.
     */
    arn?: ApplicationArn;
    /**
     * The name of the application. The name must be unique in the region in which you are creating the application.
     */
    name?: Name;
    /**
     * The description of the application.
     */
    description?: Description;
    /**
     * The ISO-8601 formatted timestamp of the moment when the application was created.
     */
    creationTime?: Timestamp;
    /**
     * The ISO-8601 formatted timestamp of the moment when the application was last updated.
     */
    lastUpdateTime?: Timestamp;
    /**
     * The number of top-level resources that were registered as part of this application.
     */
    associatedResourceCount?: AssociationCount;
    /**
     * Key-value pairs you can use to associate with the application.
     */
    tags?: Tags;
  }
  export interface GetAttributeGroupRequest {
    /**
     * The name or ID of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup: AttributeGroupSpecifier;
  }
  export interface GetAttributeGroupResponse {
    /**
     * The identifier of the application.
     */
    id?: AttributeGroupId;
    /**
     * The Amazon resource name (ARN) that specifies the application across services.
     */
    arn?: AttributeGroupArn;
    /**
     * The name of the attribute group.
     */
    name?: Name;
    /**
     * The description of the attribute group that the user provides.
     */
    description?: Description;
    /**
     * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
     */
    attributes?: Attributes;
    /**
     * The ISO-8601 formatted timestamp of the moment the attribute group was created.
     */
    creationTime?: Timestamp;
    /**
     * The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.
     */
    lastUpdateTime?: Timestamp;
    /**
     * Key-value pairs you can use to associate with the attribute group.
     */
    tags?: Tags;
  }
  export interface ListApplicationsRequest {
    /**
     * The token to use to get the next page of results after a previous API call. 
     */
    nextToken?: NextToken;
    /**
     * The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
     */
    maxResults?: MaxResults;
  }
  export interface ListApplicationsResponse {
    /**
     * The name or ID of the application.
     */
    applications?: ApplicationSummaries;
    /**
     * The token to use to get the next page of results after a previous API call. 
     */
    nextToken?: NextToken;
  }
  export interface ListAssociatedAttributeGroupsRequest {
    /**
     * The name or ID of the application.
     */
    application: ApplicationSpecifier;
    /**
     * The token to use to get the next page of results after a previous API call. 
     */
    nextToken?: NextToken;
    /**
     * The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
     */
    maxResults?: MaxResults;
  }
  export interface ListAssociatedAttributeGroupsResponse {
    /**
     * A list of attribute group IDs.
     */
    attributeGroups?: AttributeGroupIds;
    /**
     * The token to use to get the next page of results after a previous API call. 
     */
    nextToken?: NextToken;
  }
  export interface ListAssociatedResourcesRequest {
    /**
     * The name or ID of the application.
     */
    application: ApplicationSpecifier;
    /**
     * The token to use to get the next page of results after a previous API call. 
     */
    nextToken?: NextToken;
    /**
     * The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
     */
    maxResults?: MaxResults;
  }
  export interface ListAssociatedResourcesResponse {
    /**
     * The name or ID of the resource of which the application will be associated.
     */
    resources?: Resources;
    /**
     * The token to use to get the next page of results after a previous API call. 
     */
    nextToken?: NextToken;
  }
  export interface ListAttributeGroupsRequest {
    /**
     * The token to use to get the next page of results after a previous API call. 
     */
    nextToken?: NextToken;
    /**
     * The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.
     */
    maxResults?: MaxResults;
  }
  export interface ListAttributeGroupsResponse {
    /**
     * A list of attribute group IDs.
     */
    attributeGroups?: AttributeGroupSummaries;
    /**
     * The token to use to get the next page of results after a previous API call. 
     */
    nextToken?: NextToken;
  }
  export type MaxResults = number;
  export type Name = string;
  export type NextToken = string;
  export interface ResourceInfo {
    /**
     * The name of the resource.
     */
    name?: ResourceSpecifier;
    /**
     * The Amazon resource name (ARN) that specifies the application across services.
     */
    arn?: StackArn;
  }
  export type ResourceSpecifier = string;
  export type ResourceType = "CFN_STACK"|string;
  export type Resources = ResourceInfo[];
  export type StackArn = string;
  export type TagKey = string;
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type Timestamp = Date;
  export interface UpdateApplicationRequest {
    /**
     * The name or ID of the application. The name must be unique in the region in which you are updating the attribute group.
     */
    application: ApplicationSpecifier;
    /**
     * The anme of the application. The name must be unique in the region in which you are creating the application.
     */
    name?: Name;
    /**
     * The description of the application.
     */
    description?: Description;
  }
  export interface UpdateApplicationResponse {
    /**
     * The name or ID of the application.
     */
    application?: Application;
  }
  export interface UpdateAttributeGroupRequest {
    /**
     * The name or ID of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup: AttributeGroupSpecifier;
    /**
     * The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group.
     */
    name?: Name;
    /**
     * The description of the attribute group that the user provides.
     */
    description?: Description;
    /**
     * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
     */
    attributes?: Attributes;
  }
  export interface UpdateAttributeGroupResponse {
    /**
     * The name or ID of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup?: AttributeGroup;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-06-24"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ServiceCatalogAppRegistry client.
   */
  export import Types = ServiceCatalogAppRegistry;
}
export = ServiceCatalogAppRegistry;
