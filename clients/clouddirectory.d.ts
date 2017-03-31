import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudDirectory extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudDirectory.Types.ClientConfiguration)
  config: Config & CloudDirectory.Types.ClientConfiguration;
  /**
   * Adds a new Facet to an object.
   */
  addFacetToObject(params: CloudDirectory.Types.AddFacetToObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AddFacetToObjectResponse) => void): Request<CloudDirectory.Types.AddFacetToObjectResponse, AWSError>;
  /**
   * Adds a new Facet to an object.
   */
  addFacetToObject(callback?: (err: AWSError, data: CloudDirectory.Types.AddFacetToObjectResponse) => void): Request<CloudDirectory.Types.AddFacetToObjectResponse, AWSError>;
  /**
   * Copies input published schema into Directory with same name and version as that of published schema .
   */
  applySchema(params: CloudDirectory.Types.ApplySchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ApplySchemaResponse) => void): Request<CloudDirectory.Types.ApplySchemaResponse, AWSError>;
  /**
   * Copies input published schema into Directory with same name and version as that of published schema .
   */
  applySchema(callback?: (err: AWSError, data: CloudDirectory.Types.ApplySchemaResponse) => void): Request<CloudDirectory.Types.ApplySchemaResponse, AWSError>;
  /**
   * Attaches an existing object to another object. An object can be accessed in two ways:   Using the path   Using ObjectIdentifier   
   */
  attachObject(params: CloudDirectory.Types.AttachObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AttachObjectResponse) => void): Request<CloudDirectory.Types.AttachObjectResponse, AWSError>;
  /**
   * Attaches an existing object to another object. An object can be accessed in two ways:   Using the path   Using ObjectIdentifier   
   */
  attachObject(callback?: (err: AWSError, data: CloudDirectory.Types.AttachObjectResponse) => void): Request<CloudDirectory.Types.AttachObjectResponse, AWSError>;
  /**
   * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
   */
  attachPolicy(params: CloudDirectory.Types.AttachPolicyRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AttachPolicyResponse) => void): Request<CloudDirectory.Types.AttachPolicyResponse, AWSError>;
  /**
   * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
   */
  attachPolicy(callback?: (err: AWSError, data: CloudDirectory.Types.AttachPolicyResponse) => void): Request<CloudDirectory.Types.AttachPolicyResponse, AWSError>;
  /**
   * Attaches the specified object to the specified index.
   */
  attachToIndex(params: CloudDirectory.Types.AttachToIndexRequest, callback?: (err: AWSError, data: CloudDirectory.Types.AttachToIndexResponse) => void): Request<CloudDirectory.Types.AttachToIndexResponse, AWSError>;
  /**
   * Attaches the specified object to the specified index.
   */
  attachToIndex(callback?: (err: AWSError, data: CloudDirectory.Types.AttachToIndexResponse) => void): Request<CloudDirectory.Types.AttachToIndexResponse, AWSError>;
  /**
   * Performs all the read operations in a batch. 
   */
  batchRead(params: CloudDirectory.Types.BatchReadRequest, callback?: (err: AWSError, data: CloudDirectory.Types.BatchReadResponse) => void): Request<CloudDirectory.Types.BatchReadResponse, AWSError>;
  /**
   * Performs all the read operations in a batch. 
   */
  batchRead(callback?: (err: AWSError, data: CloudDirectory.Types.BatchReadResponse) => void): Request<CloudDirectory.Types.BatchReadResponse, AWSError>;
  /**
   * Performs all the write operations in a batch. Either all the operations succeed or none. Batch writes supports only object-related operations.
   */
  batchWrite(params: CloudDirectory.Types.BatchWriteRequest, callback?: (err: AWSError, data: CloudDirectory.Types.BatchWriteResponse) => void): Request<CloudDirectory.Types.BatchWriteResponse, AWSError>;
  /**
   * Performs all the write operations in a batch. Either all the operations succeed or none. Batch writes supports only object-related operations.
   */
  batchWrite(callback?: (err: AWSError, data: CloudDirectory.Types.BatchWriteResponse) => void): Request<CloudDirectory.Types.BatchWriteResponse, AWSError>;
  /**
   * Creates a Directory by copying the published schema into the directory. A directory cannot be created without a schema.
   */
  createDirectory(params: CloudDirectory.Types.CreateDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateDirectoryResponse) => void): Request<CloudDirectory.Types.CreateDirectoryResponse, AWSError>;
  /**
   * Creates a Directory by copying the published schema into the directory. A directory cannot be created without a schema.
   */
  createDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.CreateDirectoryResponse) => void): Request<CloudDirectory.Types.CreateDirectoryResponse, AWSError>;
  /**
   * Creates a new Facet in a schema. Facet creation is allowed only in development or applied schemas.
   */
  createFacet(params: CloudDirectory.Types.CreateFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateFacetResponse) => void): Request<CloudDirectory.Types.CreateFacetResponse, AWSError>;
  /**
   * Creates a new Facet in a schema. Facet creation is allowed only in development or applied schemas.
   */
  createFacet(callback?: (err: AWSError, data: CloudDirectory.Types.CreateFacetResponse) => void): Request<CloudDirectory.Types.CreateFacetResponse, AWSError>;
  /**
   * Creates an index object. See Indexing for more information.
   */
  createIndex(params: CloudDirectory.Types.CreateIndexRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateIndexResponse) => void): Request<CloudDirectory.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates an index object. See Indexing for more information.
   */
  createIndex(callback?: (err: AWSError, data: CloudDirectory.Types.CreateIndexResponse) => void): Request<CloudDirectory.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates an object in a Directory. Additionally attaches the object to a parent, if a parent reference and LinkName is specified. An object is simply a collection of Facet attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
   */
  createObject(params: CloudDirectory.Types.CreateObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateObjectResponse) => void): Request<CloudDirectory.Types.CreateObjectResponse, AWSError>;
  /**
   * Creates an object in a Directory. Additionally attaches the object to a parent, if a parent reference and LinkName is specified. An object is simply a collection of Facet attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
   */
  createObject(callback?: (err: AWSError, data: CloudDirectory.Types.CreateObjectResponse) => void): Request<CloudDirectory.Types.CreateObjectResponse, AWSError>;
  /**
   * Creates a new schema in a development state. A schema can exist in three phases:    Development: This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.    Published: Published schemas are immutable and have a version associated with them.    Applied: Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories.   
   */
  createSchema(params: CloudDirectory.Types.CreateSchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.CreateSchemaResponse) => void): Request<CloudDirectory.Types.CreateSchemaResponse, AWSError>;
  /**
   * Creates a new schema in a development state. A schema can exist in three phases:    Development: This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.    Published: Published schemas are immutable and have a version associated with them.    Applied: Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories.   
   */
  createSchema(callback?: (err: AWSError, data: CloudDirectory.Types.CreateSchemaResponse) => void): Request<CloudDirectory.Types.CreateSchemaResponse, AWSError>;
  /**
   * Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
   */
  deleteDirectory(params: CloudDirectory.Types.DeleteDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteDirectoryResponse) => void): Request<CloudDirectory.Types.DeleteDirectoryResponse, AWSError>;
  /**
   * Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
   */
  deleteDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteDirectoryResponse) => void): Request<CloudDirectory.Types.DeleteDirectoryResponse, AWSError>;
  /**
   * Deletes a given Facet. All attributes and Rules associated with the facet will be deleted. Only development schema facets are allowed deletion.
   */
  deleteFacet(params: CloudDirectory.Types.DeleteFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteFacetResponse) => void): Request<CloudDirectory.Types.DeleteFacetResponse, AWSError>;
  /**
   * Deletes a given Facet. All attributes and Rules associated with the facet will be deleted. Only development schema facets are allowed deletion.
   */
  deleteFacet(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteFacetResponse) => void): Request<CloudDirectory.Types.DeleteFacetResponse, AWSError>;
  /**
   * Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
   */
  deleteObject(params: CloudDirectory.Types.DeleteObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteObjectResponse) => void): Request<CloudDirectory.Types.DeleteObjectResponse, AWSError>;
  /**
   * Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
   */
  deleteObject(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteObjectResponse) => void): Request<CloudDirectory.Types.DeleteObjectResponse, AWSError>;
  /**
   * Deletes a given schema. Schemas in a development and published state can only be deleted. 
   */
  deleteSchema(params: CloudDirectory.Types.DeleteSchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DeleteSchemaResponse) => void): Request<CloudDirectory.Types.DeleteSchemaResponse, AWSError>;
  /**
   * Deletes a given schema. Schemas in a development and published state can only be deleted. 
   */
  deleteSchema(callback?: (err: AWSError, data: CloudDirectory.Types.DeleteSchemaResponse) => void): Request<CloudDirectory.Types.DeleteSchemaResponse, AWSError>;
  /**
   * Detaches the specified object from the specified index.
   */
  detachFromIndex(params: CloudDirectory.Types.DetachFromIndexRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DetachFromIndexResponse) => void): Request<CloudDirectory.Types.DetachFromIndexResponse, AWSError>;
  /**
   * Detaches the specified object from the specified index.
   */
  detachFromIndex(callback?: (err: AWSError, data: CloudDirectory.Types.DetachFromIndexResponse) => void): Request<CloudDirectory.Types.DetachFromIndexResponse, AWSError>;
  /**
   * Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
   */
  detachObject(params: CloudDirectory.Types.DetachObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DetachObjectResponse) => void): Request<CloudDirectory.Types.DetachObjectResponse, AWSError>;
  /**
   * Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
   */
  detachObject(callback?: (err: AWSError, data: CloudDirectory.Types.DetachObjectResponse) => void): Request<CloudDirectory.Types.DetachObjectResponse, AWSError>;
  /**
   * Detaches a policy from an object.
   */
  detachPolicy(params: CloudDirectory.Types.DetachPolicyRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DetachPolicyResponse) => void): Request<CloudDirectory.Types.DetachPolicyResponse, AWSError>;
  /**
   * Detaches a policy from an object.
   */
  detachPolicy(callback?: (err: AWSError, data: CloudDirectory.Types.DetachPolicyResponse) => void): Request<CloudDirectory.Types.DetachPolicyResponse, AWSError>;
  /**
   * Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
   */
  disableDirectory(params: CloudDirectory.Types.DisableDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.DisableDirectoryResponse) => void): Request<CloudDirectory.Types.DisableDirectoryResponse, AWSError>;
  /**
   * Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
   */
  disableDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.DisableDirectoryResponse) => void): Request<CloudDirectory.Types.DisableDirectoryResponse, AWSError>;
  /**
   * Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
   */
  enableDirectory(params: CloudDirectory.Types.EnableDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.EnableDirectoryResponse) => void): Request<CloudDirectory.Types.EnableDirectoryResponse, AWSError>;
  /**
   * Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
   */
  enableDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.EnableDirectoryResponse) => void): Request<CloudDirectory.Types.EnableDirectoryResponse, AWSError>;
  /**
   * Retrieves metadata about a directory.
   */
  getDirectory(params: CloudDirectory.Types.GetDirectoryRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetDirectoryResponse) => void): Request<CloudDirectory.Types.GetDirectoryResponse, AWSError>;
  /**
   * Retrieves metadata about a directory.
   */
  getDirectory(callback?: (err: AWSError, data: CloudDirectory.Types.GetDirectoryResponse) => void): Request<CloudDirectory.Types.GetDirectoryResponse, AWSError>;
  /**
   * Gets details of the Facet, such as Facet Name, Attributes, Rules, or ObjectType. You can call this on all kinds of schema facets -- published, development, or applied.
   */
  getFacet(params: CloudDirectory.Types.GetFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetFacetResponse) => void): Request<CloudDirectory.Types.GetFacetResponse, AWSError>;
  /**
   * Gets details of the Facet, such as Facet Name, Attributes, Rules, or ObjectType. You can call this on all kinds of schema facets -- published, development, or applied.
   */
  getFacet(callback?: (err: AWSError, data: CloudDirectory.Types.GetFacetResponse) => void): Request<CloudDirectory.Types.GetFacetResponse, AWSError>;
  /**
   * Retrieves metadata about an object.
   */
  getObjectInformation(params: CloudDirectory.Types.GetObjectInformationRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetObjectInformationResponse) => void): Request<CloudDirectory.Types.GetObjectInformationResponse, AWSError>;
  /**
   * Retrieves metadata about an object.
   */
  getObjectInformation(callback?: (err: AWSError, data: CloudDirectory.Types.GetObjectInformationResponse) => void): Request<CloudDirectory.Types.GetObjectInformationResponse, AWSError>;
  /**
   * Retrieves a JSON representation of the schema. See JSON Schema Format for more information.
   */
  getSchemaAsJson(params: CloudDirectory.Types.GetSchemaAsJsonRequest, callback?: (err: AWSError, data: CloudDirectory.Types.GetSchemaAsJsonResponse) => void): Request<CloudDirectory.Types.GetSchemaAsJsonResponse, AWSError>;
  /**
   * Retrieves a JSON representation of the schema. See JSON Schema Format for more information.
   */
  getSchemaAsJson(callback?: (err: AWSError, data: CloudDirectory.Types.GetSchemaAsJsonResponse) => void): Request<CloudDirectory.Types.GetSchemaAsJsonResponse, AWSError>;
  /**
   * Lists schemas applied to a directory.
   */
  listAppliedSchemaArns(params: CloudDirectory.Types.ListAppliedSchemaArnsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListAppliedSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListAppliedSchemaArnsResponse, AWSError>;
  /**
   * Lists schemas applied to a directory.
   */
  listAppliedSchemaArns(callback?: (err: AWSError, data: CloudDirectory.Types.ListAppliedSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListAppliedSchemaArnsResponse, AWSError>;
  /**
   * Lists indices attached to an object.
   */
  listAttachedIndices(params: CloudDirectory.Types.ListAttachedIndicesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListAttachedIndicesResponse) => void): Request<CloudDirectory.Types.ListAttachedIndicesResponse, AWSError>;
  /**
   * Lists indices attached to an object.
   */
  listAttachedIndices(callback?: (err: AWSError, data: CloudDirectory.Types.ListAttachedIndicesResponse) => void): Request<CloudDirectory.Types.ListAttachedIndicesResponse, AWSError>;
  /**
   * Retrieves the ARNs of schemas in the development state.
   */
  listDevelopmentSchemaArns(params: CloudDirectory.Types.ListDevelopmentSchemaArnsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListDevelopmentSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListDevelopmentSchemaArnsResponse, AWSError>;
  /**
   * Retrieves the ARNs of schemas in the development state.
   */
  listDevelopmentSchemaArns(callback?: (err: AWSError, data: CloudDirectory.Types.ListDevelopmentSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListDevelopmentSchemaArnsResponse, AWSError>;
  /**
   * Lists directories created within an account.
   */
  listDirectories(params: CloudDirectory.Types.ListDirectoriesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListDirectoriesResponse) => void): Request<CloudDirectory.Types.ListDirectoriesResponse, AWSError>;
  /**
   * Lists directories created within an account.
   */
  listDirectories(callback?: (err: AWSError, data: CloudDirectory.Types.ListDirectoriesResponse) => void): Request<CloudDirectory.Types.ListDirectoriesResponse, AWSError>;
  /**
   * Retrieves attributes attached to the facet.
   */
  listFacetAttributes(params: CloudDirectory.Types.ListFacetAttributesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListFacetAttributesResponse) => void): Request<CloudDirectory.Types.ListFacetAttributesResponse, AWSError>;
  /**
   * Retrieves attributes attached to the facet.
   */
  listFacetAttributes(callback?: (err: AWSError, data: CloudDirectory.Types.ListFacetAttributesResponse) => void): Request<CloudDirectory.Types.ListFacetAttributesResponse, AWSError>;
  /**
   * Retrieves the names of facets that exist in a schema.
   */
  listFacetNames(params: CloudDirectory.Types.ListFacetNamesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListFacetNamesResponse) => void): Request<CloudDirectory.Types.ListFacetNamesResponse, AWSError>;
  /**
   * Retrieves the names of facets that exist in a schema.
   */
  listFacetNames(callback?: (err: AWSError, data: CloudDirectory.Types.ListFacetNamesResponse) => void): Request<CloudDirectory.Types.ListFacetNamesResponse, AWSError>;
  /**
   * Lists objects attached to the specified index.
   */
  listIndex(params: CloudDirectory.Types.ListIndexRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListIndexResponse) => void): Request<CloudDirectory.Types.ListIndexResponse, AWSError>;
  /**
   * Lists objects attached to the specified index.
   */
  listIndex(callback?: (err: AWSError, data: CloudDirectory.Types.ListIndexResponse) => void): Request<CloudDirectory.Types.ListIndexResponse, AWSError>;
  /**
   * Lists all attributes associated with an object. 
   */
  listObjectAttributes(params: CloudDirectory.Types.ListObjectAttributesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectAttributesResponse) => void): Request<CloudDirectory.Types.ListObjectAttributesResponse, AWSError>;
  /**
   * Lists all attributes associated with an object. 
   */
  listObjectAttributes(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectAttributesResponse) => void): Request<CloudDirectory.Types.ListObjectAttributesResponse, AWSError>;
  /**
   * Returns a paginated list of child objects associated with a given object.
   */
  listObjectChildren(params: CloudDirectory.Types.ListObjectChildrenRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectChildrenResponse) => void): Request<CloudDirectory.Types.ListObjectChildrenResponse, AWSError>;
  /**
   * Returns a paginated list of child objects associated with a given object.
   */
  listObjectChildren(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectChildrenResponse) => void): Request<CloudDirectory.Types.ListObjectChildrenResponse, AWSError>;
  /**
   * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see Directory Structure. Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined MaxResults, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to directory root are ignored from the target object.
   */
  listObjectParentPaths(params: CloudDirectory.Types.ListObjectParentPathsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectParentPathsResponse) => void): Request<CloudDirectory.Types.ListObjectParentPathsResponse, AWSError>;
  /**
   * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see Directory Structure. Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined MaxResults, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to directory root are ignored from the target object.
   */
  listObjectParentPaths(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectParentPathsResponse) => void): Request<CloudDirectory.Types.ListObjectParentPathsResponse, AWSError>;
  /**
   * Lists parent objects associated with a given object in pagination fashion.
   */
  listObjectParents(params: CloudDirectory.Types.ListObjectParentsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectParentsResponse) => void): Request<CloudDirectory.Types.ListObjectParentsResponse, AWSError>;
  /**
   * Lists parent objects associated with a given object in pagination fashion.
   */
  listObjectParents(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectParentsResponse) => void): Request<CloudDirectory.Types.ListObjectParentsResponse, AWSError>;
  /**
   * Returns policies attached to an object in pagination fashion.
   */
  listObjectPolicies(params: CloudDirectory.Types.ListObjectPoliciesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectPoliciesResponse) => void): Request<CloudDirectory.Types.ListObjectPoliciesResponse, AWSError>;
  /**
   * Returns policies attached to an object in pagination fashion.
   */
  listObjectPolicies(callback?: (err: AWSError, data: CloudDirectory.Types.ListObjectPoliciesResponse) => void): Request<CloudDirectory.Types.ListObjectPoliciesResponse, AWSError>;
  /**
   * Returns all of the ObjectIdentifiers to which a given policy is attached.
   */
  listPolicyAttachments(params: CloudDirectory.Types.ListPolicyAttachmentsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListPolicyAttachmentsResponse) => void): Request<CloudDirectory.Types.ListPolicyAttachmentsResponse, AWSError>;
  /**
   * Returns all of the ObjectIdentifiers to which a given policy is attached.
   */
  listPolicyAttachments(callback?: (err: AWSError, data: CloudDirectory.Types.ListPolicyAttachmentsResponse) => void): Request<CloudDirectory.Types.ListPolicyAttachmentsResponse, AWSError>;
  /**
   * Retrieves published schema ARNs.
   */
  listPublishedSchemaArns(params: CloudDirectory.Types.ListPublishedSchemaArnsRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListPublishedSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListPublishedSchemaArnsResponse, AWSError>;
  /**
   * Retrieves published schema ARNs.
   */
  listPublishedSchemaArns(callback?: (err: AWSError, data: CloudDirectory.Types.ListPublishedSchemaArnsResponse) => void): Request<CloudDirectory.Types.ListPublishedSchemaArnsResponse, AWSError>;
  /**
   * Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
   */
  listTagsForResource(params: CloudDirectory.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: CloudDirectory.Types.ListTagsForResourceResponse) => void): Request<CloudDirectory.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
   */
  listTagsForResource(callback?: (err: AWSError, data: CloudDirectory.Types.ListTagsForResourceResponse) => void): Request<CloudDirectory.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the ObjectIdentifier for such objects. If policies are present, it returns ObjectIdentifier, policyId, and policyType. Paths that don't lead to the root from the target object are ignored.
   */
  lookupPolicy(params: CloudDirectory.Types.LookupPolicyRequest, callback?: (err: AWSError, data: CloudDirectory.Types.LookupPolicyResponse) => void): Request<CloudDirectory.Types.LookupPolicyResponse, AWSError>;
  /**
   * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the ObjectIdentifier for such objects. If policies are present, it returns ObjectIdentifier, policyId, and policyType. Paths that don't lead to the root from the target object are ignored.
   */
  lookupPolicy(callback?: (err: AWSError, data: CloudDirectory.Types.LookupPolicyResponse) => void): Request<CloudDirectory.Types.LookupPolicyResponse, AWSError>;
  /**
   * Publishes a development schema with a version. If description and attributes are specified, PublishSchema overrides the development schema description and attributes. If not, the development schema description and attributes are used.
   */
  publishSchema(params: CloudDirectory.Types.PublishSchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.PublishSchemaResponse) => void): Request<CloudDirectory.Types.PublishSchemaResponse, AWSError>;
  /**
   * Publishes a development schema with a version. If description and attributes are specified, PublishSchema overrides the development schema description and attributes. If not, the development schema description and attributes are used.
   */
  publishSchema(callback?: (err: AWSError, data: CloudDirectory.Types.PublishSchemaResponse) => void): Request<CloudDirectory.Types.PublishSchemaResponse, AWSError>;
  /**
   * Allows a schema to be updated using JSON upload. Only available for development schemas. See JSON Schema Format for more information.
   */
  putSchemaFromJson(params: CloudDirectory.Types.PutSchemaFromJsonRequest, callback?: (err: AWSError, data: CloudDirectory.Types.PutSchemaFromJsonResponse) => void): Request<CloudDirectory.Types.PutSchemaFromJsonResponse, AWSError>;
  /**
   * Allows a schema to be updated using JSON upload. Only available for development schemas. See JSON Schema Format for more information.
   */
  putSchemaFromJson(callback?: (err: AWSError, data: CloudDirectory.Types.PutSchemaFromJsonResponse) => void): Request<CloudDirectory.Types.PutSchemaFromJsonResponse, AWSError>;
  /**
   * Removes the specified facet from the specified object.
   */
  removeFacetFromObject(params: CloudDirectory.Types.RemoveFacetFromObjectRequest, callback?: (err: AWSError, data: CloudDirectory.Types.RemoveFacetFromObjectResponse) => void): Request<CloudDirectory.Types.RemoveFacetFromObjectResponse, AWSError>;
  /**
   * Removes the specified facet from the specified object.
   */
  removeFacetFromObject(callback?: (err: AWSError, data: CloudDirectory.Types.RemoveFacetFromObjectResponse) => void): Request<CloudDirectory.Types.RemoveFacetFromObjectResponse, AWSError>;
  /**
   * API for adding tags to a resource.
   */
  tagResource(params: CloudDirectory.Types.TagResourceRequest, callback?: (err: AWSError, data: CloudDirectory.Types.TagResourceResponse) => void): Request<CloudDirectory.Types.TagResourceResponse, AWSError>;
  /**
   * API for adding tags to a resource.
   */
  tagResource(callback?: (err: AWSError, data: CloudDirectory.Types.TagResourceResponse) => void): Request<CloudDirectory.Types.TagResourceResponse, AWSError>;
  /**
   * API for removing tags from a resource.
   */
  untagResource(params: CloudDirectory.Types.UntagResourceRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UntagResourceResponse) => void): Request<CloudDirectory.Types.UntagResourceResponse, AWSError>;
  /**
   * API for removing tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: CloudDirectory.Types.UntagResourceResponse) => void): Request<CloudDirectory.Types.UntagResourceResponse, AWSError>;
  /**
   * Does the following:   Adds new Attributes, Rules, or ObjectTypes.   Updates existing Attributes, Rules, or ObjectTypes.   Deletes existing Attributes, Rules, or ObjectTypes.  
   */
  updateFacet(params: CloudDirectory.Types.UpdateFacetRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UpdateFacetResponse) => void): Request<CloudDirectory.Types.UpdateFacetResponse, AWSError>;
  /**
   * Does the following:   Adds new Attributes, Rules, or ObjectTypes.   Updates existing Attributes, Rules, or ObjectTypes.   Deletes existing Attributes, Rules, or ObjectTypes.  
   */
  updateFacet(callback?: (err: AWSError, data: CloudDirectory.Types.UpdateFacetResponse) => void): Request<CloudDirectory.Types.UpdateFacetResponse, AWSError>;
  /**
   * Updates a given object's attributes.
   */
  updateObjectAttributes(params: CloudDirectory.Types.UpdateObjectAttributesRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UpdateObjectAttributesResponse) => void): Request<CloudDirectory.Types.UpdateObjectAttributesResponse, AWSError>;
  /**
   * Updates a given object's attributes.
   */
  updateObjectAttributes(callback?: (err: AWSError, data: CloudDirectory.Types.UpdateObjectAttributesResponse) => void): Request<CloudDirectory.Types.UpdateObjectAttributesResponse, AWSError>;
  /**
   * Updates the schema name with a new name. Only development schema names can be updated.
   */
  updateSchema(params: CloudDirectory.Types.UpdateSchemaRequest, callback?: (err: AWSError, data: CloudDirectory.Types.UpdateSchemaResponse) => void): Request<CloudDirectory.Types.UpdateSchemaResponse, AWSError>;
  /**
   * Updates the schema name with a new name. Only development schema names can be updated.
   */
  updateSchema(callback?: (err: AWSError, data: CloudDirectory.Types.UpdateSchemaResponse) => void): Request<CloudDirectory.Types.UpdateSchemaResponse, AWSError>;
}
declare namespace CloudDirectory {
  export interface AddFacetToObjectRequest {
    /**
     * ARN associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Identifiers for the facet that you are adding to the object.
     */
    SchemaFacet: SchemaFacet;
    /**
     * Attributes on the facet you are adding to the object.
     */
    ObjectAttributeList?: AttributeKeyAndValueList;
    /**
     * A reference to the object you are adding the specified facet to.
     */
    ObjectReference: ObjectReference;
  }
  export interface AddFacetToObjectResponse {
  }
  export interface ApplySchemaRequest {
    /**
     * Published schema ARN that needs to be copied. For more information, see arns.
     */
    PublishedSchemaArn: Arn;
    /**
     * ARN associated with the Directory into which the schema is copied. For more information, see arns.
     */
    DirectoryArn: Arn;
  }
  export interface ApplySchemaResponse {
    /**
     * Applied schema ARN associated with the copied schema in the Directory. You can use this ARN to describe the schema information applied on this directory. For more information, see arns.
     */
    AppliedSchemaArn?: Arn;
    /**
     * ARN associated with the Directory. For more information, see arns.
     */
    DirectoryArn?: Arn;
  }
  export type Arn = string;
  export type Arns = Arn[];
  export interface AttachObjectRequest {
    /**
     * ARN associated with the Directory where both objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Parent object reference.
     */
    ParentReference: ObjectReference;
    /**
     * Child object reference to be attached to the object.
     */
    ChildReference: ObjectReference;
    /**
     * Link name with which the child object is attached to the parent.
     */
    LinkName: LinkName;
  }
  export interface AttachObjectResponse {
    /**
     * Attached ObjectIdentifier, which is the child ObjectIdentifier.
     */
    AttachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface AttachPolicyRequest {
    /**
     * ARN associated with the Directory where both objects reside. For more information, see arns.
     */
    DirectoryArn?: Arn;
    /**
     * Reference associated with the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * Reference that identifies the object to which the policy will be attached.
     */
    ObjectReference: ObjectReference;
  }
  export interface AttachPolicyResponse {
  }
  export interface AttachToIndexRequest {
    /**
     * The ARN of the directory where the object and index exist.
     */
    DirectoryArn: Arn;
    /**
     * A reference to the index that you are attaching the object to.
     */
    IndexReference: ObjectReference;
    /**
     * A reference to the object that you are attaching to the index.
     */
    TargetReference: ObjectReference;
  }
  export interface AttachToIndexResponse {
    /**
     * The ObjectIdentifier of the object that was attached to the index.
     */
    AttachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface AttributeKey {
    /**
     * The ARN of the schema that contains the facet and attribute.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet the attribute exists within.
     */
    FacetName: FacetName;
    /**
     * The name of the attribute.
     */
    Name: AttributeName;
  }
  export interface AttributeKeyAndValue {
    /**
     * The key of the attribute.
     */
    Key: AttributeKey;
    /**
     * The value of the attribute.
     */
    Value: TypedAttributeValue;
  }
  export type AttributeKeyAndValueList = AttributeKeyAndValue[];
  export type AttributeKeyList = AttributeKey[];
  export type AttributeName = string;
  export interface BatchAddFacetToObject {
    /**
     * Represents the facet being added to the object.
     */
    SchemaFacet: SchemaFacet;
    /**
     * The attributes to set on the object.
     */
    ObjectAttributeList: AttributeKeyAndValueList;
    /**
     * A reference to the object being mutated.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchAddFacetToObjectResponse {
  }
  export interface BatchAttachObject {
    /**
     * Parent object reference.
     */
    ParentReference: ObjectReference;
    /**
     * Child object reference to be attached to the object.
     */
    ChildReference: ObjectReference;
    /**
     * The name of the link.
     */
    LinkName: LinkName;
  }
  export interface BatchAttachObjectResponse {
    /**
     * The ObjectIdentifier of the object that has been attached.
     */
    attachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchCreateObject {
    /**
     * List of FacetArns that will be associated with the object. For more information, see arns.
     */
    SchemaFacet: SchemaFacetList;
    /**
     * Attribute map, which contains an attribute ARN as the key and attribute value as the map value.
     */
    ObjectAttributeList: AttributeKeyAndValueList;
    /**
     * If specified, the parent reference to which this object will be attached.
     */
    ParentReference: ObjectReference;
    /**
     * The name of the link.
     */
    LinkName: LinkName;
    /**
     * The batch reference name. See Batches for more information.
     */
    BatchReferenceName: BatchReferenceName;
  }
  export interface BatchCreateObjectResponse {
    /**
     * ID associated with the object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchDeleteObject {
    /**
     * Reference that identifies the object.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchDeleteObjectResponse {
  }
  export interface BatchDetachObject {
    /**
     * Parent reference from which the object with the specified link name is detached.
     */
    ParentReference: ObjectReference;
    /**
     * The name of the link.
     */
    LinkName: LinkName;
    /**
     * The batch reference name. See Batches for more information.
     */
    BatchReferenceName: BatchReferenceName;
  }
  export interface BatchDetachObjectResponse {
    /**
     * The ObjectIdentifier of the detached object.
     */
    detachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface BatchListObjectAttributes {
    /**
     * Reference of the object whose attributes need to be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Used to filter the list of object attributes associated with a certain facet.
     */
    FacetFilter?: SchemaFacet;
  }
  export interface BatchListObjectAttributesResponse {
    /**
     * Attributes map associated with the object. AttributeArn is the key; attribute value is the value.
     */
    Attributes?: AttributeKeyAndValueList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface BatchListObjectChildren {
    /**
     * Reference of the object for which child objects are being listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
  }
  export interface BatchListObjectChildrenResponse {
    /**
     * Children structure, which is a map with key as the LinkName and ObjectIdentifier as the value.
     */
    Children?: LinkNameToObjectIdentifierMap;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export type BatchOperationIndex = number;
  export interface BatchReadException {
    /**
     * Type of exception, such as InvalidArnException.
     */
    Type?: BatchReadExceptionType;
    /**
     * Exception message associated with the failure.
     */
    Message?: ExceptionMessage;
  }
  export type BatchReadExceptionType = "ValidationException"|"InvalidArnException"|"ResourceNotFoundException"|"InvalidNextTokenException"|"AccessDeniedException"|"NotNodeException"|string;
  export interface BatchReadOperation {
    /**
     * Lists all attributes associated with an object.
     */
    ListObjectAttributes?: BatchListObjectAttributes;
    /**
     * Returns a paginated list of child objects that are associated with a given object.
     */
    ListObjectChildren?: BatchListObjectChildren;
  }
  export type BatchReadOperationList = BatchReadOperation[];
  export interface BatchReadOperationResponse {
    /**
     * Identifies which operation in a batch has succeeded.
     */
    SuccessfulResponse?: BatchReadSuccessfulResponse;
    /**
     * Identifies which operation in a batch has failed.
     */
    ExceptionResponse?: BatchReadException;
  }
  export type BatchReadOperationResponseList = BatchReadOperationResponse[];
  export interface BatchReadRequest {
    /**
     * ARN associated with the Directory. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * List of operations that are part of the batch.
     */
    Operations: BatchReadOperationList;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface BatchReadResponse {
    /**
     * List of all the responses for each batch read.
     */
    Responses?: BatchReadOperationResponseList;
  }
  export interface BatchReadSuccessfulResponse {
    /**
     * Lists all attributes associated with an object.
     */
    ListObjectAttributes?: BatchListObjectAttributesResponse;
    /**
     * Returns a paginated list of child objects associated with a given object.
     */
    ListObjectChildren?: BatchListObjectChildrenResponse;
  }
  export type BatchReferenceName = string;
  export interface BatchRemoveFacetFromObject {
    /**
     * The facet to remove from the object.
     */
    SchemaFacet: SchemaFacet;
    /**
     * A reference to the object whose facet will be removed.
     */
    ObjectReference: ObjectReference;
  }
  export interface BatchRemoveFacetFromObjectResponse {
  }
  export interface BatchUpdateObjectAttributes {
    /**
     * Reference that identifies the object.
     */
    ObjectReference: ObjectReference;
    /**
     * Attributes update structure.
     */
    AttributeUpdates: ObjectAttributeUpdateList;
  }
  export interface BatchUpdateObjectAttributesResponse {
    /**
     * ID associated with the object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export type BatchWriteExceptionType = "InternalServiceException"|"ValidationException"|"InvalidArnException"|"LinkNameAlreadyInUseException"|"StillContainsLinksException"|"FacetValidationException"|"ObjectNotDetachedException"|"ResourceNotFoundException"|"AccessDeniedException"|string;
  export interface BatchWriteOperation {
    /**
     * Creates an object.
     */
    CreateObject?: BatchCreateObject;
    /**
     * Attaches an object to a Directory.
     */
    AttachObject?: BatchAttachObject;
    /**
     * Detaches an object from a Directory.
     */
    DetachObject?: BatchDetachObject;
    /**
     * Update a given object's attributes.
     */
    UpdateObjectAttributes?: BatchUpdateObjectAttributes;
    /**
     * Deletes an object in a Directory.
     */
    DeleteObject?: BatchDeleteObject;
    /**
     * Batch operation adding a facet to an object.
     */
    AddFacetToObject?: BatchAddFacetToObject;
    /**
     * Batch operation removing a facet from an object.
     */
    RemoveFacetFromObject?: BatchRemoveFacetFromObject;
  }
  export type BatchWriteOperationList = BatchWriteOperation[];
  export interface BatchWriteOperationResponse {
    /**
     * Creates an object in a Directory.
     */
    CreateObject?: BatchCreateObjectResponse;
    /**
     * Attaches an object to a Directory.
     */
    AttachObject?: BatchAttachObjectResponse;
    /**
     * Detaches an object from a Directory.
     */
    DetachObject?: BatchDetachObjectResponse;
    /**
     * Updates a given object’s attributes.
     */
    UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;
    /**
     * Deletes an object in a Directory.
     */
    DeleteObject?: BatchDeleteObjectResponse;
    /**
     * Result of an add facet to object batch operation.
     */
    AddFacetToObject?: BatchAddFacetToObjectResponse;
    /**
     * Result of a batch remove facet from object operation.
     */
    RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;
  }
  export type BatchWriteOperationResponseList = BatchWriteOperationResponse[];
  export interface BatchWriteRequest {
    /**
     * ARN associated with the Directory. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * List of operations that are part of the batch.
     */
    Operations: BatchWriteOperationList;
  }
  export interface BatchWriteResponse {
    /**
     * List of all the responses for each batch write.
     */
    Responses?: BatchWriteOperationResponseList;
  }
  export type BinaryAttributeValue = Buffer|Uint8Array|Blob|string;
  export type Bool = boolean;
  export type BooleanAttributeValue = boolean;
  export type ConsistencyLevel = "SERIALIZABLE"|"EVENTUAL"|string;
  export interface CreateDirectoryRequest {
    /**
     * Name of the Directory. Should be unique per account, per region.
     */
    Name: DirectoryName;
    /**
     * ARN of the published schema that will be copied into the data Directory. For more information, see arns.
     */
    SchemaArn: Arn;
  }
  export interface CreateDirectoryResponse {
    /**
     * ARN associated with the Directory. For more information, see arns.
     */
    DirectoryArn: DirectoryArn;
    /**
     * Name of the Directory.
     */
    Name: DirectoryName;
    /**
     * The root object node of the created directory.
     */
    ObjectIdentifier: ObjectIdentifier;
    /**
     * ARN of the published schema in the Directory. Once a published schema is copied into the directory, it has its own ARN which is referred to applied schema ARN. For more information, see arns.
     */
    AppliedSchemaArn: Arn;
  }
  export interface CreateFacetRequest {
    /**
     * Schema ARN in which the new Facet will be created. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * Name of the Facet, which is unique for a given schema.
     */
    Name: FacetName;
    /**
     * Attributes associated with the Facet.e
     */
    Attributes?: FacetAttributeList;
    /**
     * Specifies whether a given object created from this facet is of type Node, Leaf Node, Policy or Index.   Node: Can have multiple children but one parent.     Leaf Node: Cannot have children but can have multiple parents.     Policy: Allows you to store a policy document and policy type. For more information, see Policies.     Index: Can be created with the Index API.  
     */
    ObjectType: ObjectType;
  }
  export interface CreateFacetResponse {
  }
  export interface CreateIndexRequest {
    /**
     * The ARN of the directory where the index should be created.
     */
    DirectoryArn: Arn;
    /**
     * Specifies the Attributes that should be indexed on. Currently only a single attribute is supported.
     */
    OrderedIndexedAttributeList: AttributeKeyList;
    /**
     * Indicates whether objects with the same indexed attribute value can be added to the index.
     */
    IsUnique: Bool;
    /**
     * A reference to the parent object that contains the index object.
     */
    ParentReference?: ObjectReference;
    /**
     * The name of the link between the parent object and the index object.
     */
    LinkName?: LinkName;
  }
  export interface CreateIndexResponse {
    /**
     * The ObjectIdentifier of the index created by this operation.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface CreateObjectRequest {
    /**
     * ARN associated with the Directory in which the object will be created. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * List of facet ARNs to be associated with the object. For more information, see arns.
     */
    SchemaFacets: SchemaFacetList;
    /**
     * Attribute map whose attribute ARN contains the key and attribute value as the map value.
     */
    ObjectAttributeList?: AttributeKeyAndValueList;
    /**
     * If specified, the parent reference to which this object will be attached.
     */
    ParentReference?: ObjectReference;
    /**
     * The name of link that is used to attach this object to a parent.
     */
    LinkName?: LinkName;
  }
  export interface CreateObjectResponse {
    /**
     * Identifier associated with the object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface CreateSchemaRequest {
    /**
     * Name associated with the schema. This is unique to each account and in each region.
     */
    Name: SchemaName;
  }
  export interface CreateSchemaResponse {
    /**
     * ARN associated with the schema. For more information, see arns.
     */
    SchemaArn?: Arn;
  }
  export type _Date = Date;
  export type DatetimeAttributeValue = Date;
  export interface DeleteDirectoryRequest {
    /**
     * The ARN of the directory to delete.
     */
    DirectoryArn: Arn;
  }
  export interface DeleteDirectoryResponse {
    /**
     * The ARN of the deleted directory.
     */
    DirectoryArn: Arn;
  }
  export interface DeleteFacetRequest {
    /**
     * ARN associated with the Facet. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet to delete.
     */
    Name: FacetName;
  }
  export interface DeleteFacetResponse {
  }
  export interface DeleteObjectRequest {
    /**
     * ARN associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object.
     */
    ObjectReference: ObjectReference;
  }
  export interface DeleteObjectResponse {
  }
  export interface DeleteSchemaRequest {
    /**
     * ARN of the development schema. For more information, see arns.
     */
    SchemaArn: Arn;
  }
  export interface DeleteSchemaResponse {
    /**
     * Input ARN that is returned as part of the response. For more information, see arns.
     */
    SchemaArn?: Arn;
  }
  export interface DetachFromIndexRequest {
    /**
     * The ARN of the directory the index and object exist in.
     */
    DirectoryArn: Arn;
    /**
     * A reference to the index object.
     */
    IndexReference: ObjectReference;
    /**
     * A reference to the object being detached from the index.
     */
    TargetReference: ObjectReference;
  }
  export interface DetachFromIndexResponse {
    /**
     * The ObjectIdentifier of the object that was detached from the index.
     */
    DetachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface DetachObjectRequest {
    /**
     * ARN associated with the Directory where objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Parent reference from which the object with the specified link name is detached.
     */
    ParentReference: ObjectReference;
    /**
     * Link name associated with the object that needs to be detached.
     */
    LinkName: LinkName;
  }
  export interface DetachObjectResponse {
    /**
     * The ObjectIdentifier that was detached from the object.
     */
    DetachedObjectIdentifier?: ObjectIdentifier;
  }
  export interface DetachPolicyRequest {
    /**
     * ARN associated with the Directory where both objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * Reference that identifies the object whose policy object will be detached.
     */
    ObjectReference: ObjectReference;
  }
  export interface DetachPolicyResponse {
  }
  export interface Directory {
    /**
     * The name of the directory.
     */
    Name?: DirectoryName;
    /**
     * ARN associated with the directory. For more information, see arns.
     */
    DirectoryArn?: DirectoryArn;
    /**
     * The state of the directory. Can be either Enabled, Disabled, or Deleted.
     */
    State?: DirectoryState;
    /**
     * The date and time when the directory was created.
     */
    CreationDateTime?: _Date;
  }
  export type DirectoryArn = string;
  export type DirectoryList = Directory[];
  export type DirectoryName = string;
  export type DirectoryState = "ENABLED"|"DISABLED"|"DELETED"|string;
  export interface DisableDirectoryRequest {
    /**
     * The ARN of the directory to disable.
     */
    DirectoryArn: Arn;
  }
  export interface DisableDirectoryResponse {
    /**
     * The ARN of the directory that has been disabled.
     */
    DirectoryArn: Arn;
  }
  export interface EnableDirectoryRequest {
    /**
     * The ARN of the directory to enable.
     */
    DirectoryArn: Arn;
  }
  export interface EnableDirectoryResponse {
    /**
     * The ARN of the enabled directory.
     */
    DirectoryArn: Arn;
  }
  export type ExceptionMessage = string;
  export interface Facet {
    /**
     * The name of the Facet.
     */
    Name?: FacetName;
    /**
     * Object type associated with the facet. See CreateFacetRequest$ObjectType for more details.
     */
    ObjectType?: ObjectType;
  }
  export interface FacetAttribute {
    /**
     * The name of the facet attribute.
     */
    Name: AttributeName;
    /**
     * A facet attribute consists of either a definition or a reference. This structure contains the attribute definition. See Attribute References for more information.
     */
    AttributeDefinition?: FacetAttributeDefinition;
    /**
     * Attribute reference associated with the attribute. See Attribute References for more information.
     */
    AttributeReference?: FacetAttributeReference;
    /**
     * The required behavior of the FacetAttribute.
     */
    RequiredBehavior?: RequiredAttributeBehavior;
  }
  export interface FacetAttributeDefinition {
    /**
     * The type of the attribute.
     */
    Type: FacetAttributeType;
    /**
     * The default value of the attribute (if configured).
     */
    DefaultValue?: TypedAttributeValue;
    /**
     * Whether the attribute is mutable or not.
     */
    IsImmutable?: Bool;
    /**
     * Validation rules attached to the attribute definition.
     */
    Rules?: RuleMap;
  }
  export type FacetAttributeList = FacetAttribute[];
  export interface FacetAttributeReference {
    /**
     * Target facet name associated with the facet reference. See Attribute References for more information.
     */
    TargetFacetName: FacetName;
    /**
     * Target attribute name associated with the facet reference. See Attribute References for more information.
     */
    TargetAttributeName: AttributeName;
  }
  export type FacetAttributeType = "STRING"|"BINARY"|"BOOLEAN"|"NUMBER"|"DATETIME"|string;
  export interface FacetAttributeUpdate {
    /**
     * The attribute to update.
     */
    Attribute?: FacetAttribute;
    /**
     * The action to perform when updating the attribute.
     */
    Action?: UpdateActionType;
  }
  export type FacetAttributeUpdateList = FacetAttributeUpdate[];
  export type FacetName = string;
  export type FacetNameList = FacetName[];
  export interface GetDirectoryRequest {
    /**
     * The ARN of the directory.
     */
    DirectoryArn: DirectoryArn;
  }
  export interface GetDirectoryResponse {
    /**
     * Metadata about the directory.
     */
    Directory: Directory;
  }
  export interface GetFacetRequest {
    /**
     * ARN associated with the Facet. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet to retrieve.
     */
    Name: FacetName;
  }
  export interface GetFacetResponse {
    /**
     *  Facet structure associated with the facet.
     */
    Facet?: Facet;
  }
  export interface GetObjectInformationRequest {
    /**
     * The ARN of the directory being retrieved.
     */
    DirectoryArn: Arn;
    /**
     * A reference to the object.
     */
    ObjectReference: ObjectReference;
    /**
     * The consistency level at which to retrieve the object information.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface GetObjectInformationResponse {
    /**
     * The facets attached to the specified object.
     */
    SchemaFacets?: SchemaFacetList;
    /**
     * The ObjectIdentifier of the specified object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface GetSchemaAsJsonRequest {
    /**
     * The ARN of the schema to retrieve.
     */
    SchemaArn: Arn;
  }
  export interface GetSchemaAsJsonResponse {
    /**
     * The name of the retrieved schema.
     */
    Name?: SchemaName;
    /**
     * The JSON representation of the schema document.
     */
    Document?: SchemaJsonDocument;
  }
  export interface IndexAttachment {
    /**
     * The indexed attribute values.
     */
    IndexedAttributes?: AttributeKeyAndValueList;
    /**
     * The ObjectIdentifier of the object attached to the index.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export type IndexAttachmentList = IndexAttachment[];
  export type LinkName = string;
  export type LinkNameToObjectIdentifierMap = {[key: string]: ObjectIdentifier};
  export interface ListAppliedSchemaArnsRequest {
    /**
     * The ARN of the directory you are listing.
     */
    DirectoryArn: Arn;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListAppliedSchemaArnsResponse {
    /**
     * The ARNs of schemas that are applied to the directory.
     */
    SchemaArns?: Arns;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListAttachedIndicesRequest {
    /**
     * The ARN of the directory.
     */
    DirectoryArn: Arn;
    /**
     * A reference to the object to that has indices attached.
     */
    TargetReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
    /**
     * The consistency level to use for this operation.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListAttachedIndicesResponse {
    /**
     * The indices attached to the specified object.
     */
    IndexAttachments?: IndexAttachmentList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListDevelopmentSchemaArnsRequest {
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListDevelopmentSchemaArnsResponse {
    /**
     * The ARNs of retrieved development schemas.
     */
    SchemaArns?: Arns;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListDirectoriesRequest {
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
    /**
     * The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.
     */
    state?: DirectoryState;
  }
  export interface ListDirectoriesResponse {
    /**
     * Lists all directories associated with your account in pagination fashion.
     */
    Directories: DirectoryList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListFacetAttributesRequest {
    /**
     * The ARN of the schema where the facet resides.
     */
    SchemaArn: Arn;
    /**
     * The name of the facet whose attributes will be retrieved.
     */
    Name: FacetName;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListFacetAttributesResponse {
    /**
     * The attributes attached to the facet.
     */
    Attributes?: FacetAttributeList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListFacetNamesRequest {
    /**
     * The ARN to retrieve facet names from.
     */
    SchemaArn: Arn;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve
     */
    MaxResults?: NumberResults;
  }
  export interface ListFacetNamesResponse {
    /**
     * The names of facets that exist within the schema.
     */
    FacetNames?: FacetNameList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListIndexRequest {
    /**
     * The ARN of the directory that the index exists in.
     */
    DirectoryArn: Arn;
    /**
     * Specifies the ranges of indexed values that you want to query.
     */
    RangesOnIndexedValues?: ObjectAttributeRangeList;
    /**
     * The reference to the index to list.
     */
    IndexReference: ObjectReference;
    /**
     * The maximum number of results to retrieve from the index.
     */
    MaxResults?: NumberResults;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The consistency level to execute the request at.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListIndexResponse {
    /**
     * The objects and indexed values attached to the index.
     */
    IndexAttachments?: IndexAttachmentList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectAttributesRequest {
    /**
     * ARN associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object whose attributes will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
    /**
     * Used to filter the list of object attributes associated with a certain facet.
     */
    FacetFilter?: SchemaFacet;
  }
  export interface ListObjectAttributesResponse {
    /**
     * Attributes map associated with the object. AttributeArn is the key, and attribute value is the value.
     */
    Attributes?: AttributeKeyAndValueList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectChildrenRequest {
    /**
     * ARN associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object for which child objects are being listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListObjectChildrenResponse {
    /**
     * Children structure, which is a map with key as the LinkName and ObjectIdentifier as the value.
     */
    Children?: LinkNameToObjectIdentifierMap;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectParentPathsRequest {
    /**
     * The ARN of the directory to which the parent path applies.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object whose parent paths are listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
  }
  export interface ListObjectParentPathsResponse {
    /**
     * Returns the path to the ObjectIdentifiers associated with the directory.
     */
    PathToObjectIdentifiersList?: PathToObjectIdentifiersList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectParentsRequest {
    /**
     * ARN associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object for which parent objects are being listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListObjectParentsResponse {
    /**
     * Parent structure, which is a map with key as the ObjectIdentifier and LinkName as the value.
     */
    Parents?: ObjectIdentifierToLinkNameMap;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListObjectPoliciesRequest {
    /**
     * ARN associated with the Directory where objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object for which policies will be listed.
     */
    ObjectReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListObjectPoliciesResponse {
    /**
     * List of policy ObjectIdentifiers, that are attached to the object.
     */
    AttachedPolicyIds?: ObjectIdentifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListPolicyAttachmentsRequest {
    /**
     * ARN associated with the Directory where objects reside. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the policy object.
     */
    PolicyReference: ObjectReference;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    ConsistencyLevel?: ConsistencyLevel;
  }
  export interface ListPolicyAttachmentsResponse {
    /**
     * List of ObjectIdentifiers to which the policy is attached.
     */
    ObjectIdentifiers?: ObjectIdentifierList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListPublishedSchemaArnsRequest {
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to retrieve.
     */
    MaxResults?: NumberResults;
  }
  export interface ListPublishedSchemaArnsResponse {
    /**
     * The ARNs of published schemas.
     */
    SchemaArns?: Arns;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * ARN of the resource. Tagging is only supported for directories.
     */
    ResourceArn: Arn;
    /**
     * The pagination token. This is for future use. Currently pagination is not supported for tagging.
     */
    NextToken?: NextToken;
    /**
     * The MaxResults parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.
     */
    MaxResults?: TagsNumberResults;
  }
  export interface ListTagsForResourceResponse {
    /**
     * List of tag key value pairs associated with the response.
     */
    Tags?: TagList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface LookupPolicyRequest {
    /**
     * ARN associated with the Directory. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object whose policies will be looked up.
     */
    ObjectReference: ObjectReference;
    /**
     * The token to request the next page of results.
     */
    NextToken?: NextToken;
    /**
     * Maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    MaxResults?: NumberResults;
  }
  export interface LookupPolicyResponse {
    /**
     * Provides list of path to policies. Policies contain PolicyId, ObjectIdentifier, and PolicyType.
     */
    PolicyToPathList?: PolicyToPathList;
    /**
     * The pagination token.
     */
    NextToken?: NextToken;
  }
  export type NextToken = string;
  export type NumberAttributeValue = string;
  export type NumberResults = number;
  export interface ObjectAttributeAction {
    /**
     * Type can be either Update or Delete.
     */
    ObjectAttributeActionType?: UpdateActionType;
    /**
     * The value that you want to update to.
     */
    ObjectAttributeUpdateValue?: TypedAttributeValue;
  }
  export interface ObjectAttributeRange {
    /**
     * The key of the attribute the attribute range covers.
     */
    AttributeKey?: AttributeKey;
    /**
     * The range of attribute values being selected.
     */
    Range?: TypedAttributeValueRange;
  }
  export type ObjectAttributeRangeList = ObjectAttributeRange[];
  export interface ObjectAttributeUpdate {
    /**
     * The key of the attribute being updated.
     */
    ObjectAttributeKey?: AttributeKey;
    /**
     * The action to perform as part of the attribute update.
     */
    ObjectAttributeAction?: ObjectAttributeAction;
  }
  export type ObjectAttributeUpdateList = ObjectAttributeUpdate[];
  export type ObjectIdentifier = string;
  export type ObjectIdentifierList = ObjectIdentifier[];
  export type ObjectIdentifierToLinkNameMap = {[key: string]: LinkName};
  export interface ObjectReference {
    /**
     * Allows you to specify an object. You can identify an object in one of the following ways:    $ObjectIdentifier - Identifies the object by ObjectIdentifier     /some/path - Identifies the object based on path    #SomeBatchReference - Identifies the object in a batch call  
     */
    Selector?: SelectorObjectReference;
  }
  export type ObjectType = "NODE"|"LEAF_NODE"|"POLICY"|"INDEX"|string;
  export type PathString = string;
  export interface PathToObjectIdentifiers {
    /**
     * The path used to identify the object starting from directory root.
     */
    Path?: PathString;
    /**
     * Lists ObjectIdentifiers starting from directory root to the object in the request.
     */
    ObjectIdentifiers?: ObjectIdentifierList;
  }
  export type PathToObjectIdentifiersList = PathToObjectIdentifiers[];
  export interface PolicyAttachment {
    /**
     * The ID of PolicyAttachment.
     */
    PolicyId?: ObjectIdentifier;
    /**
     * The ObjectIdentifier associated with PolicyAttachment.
     */
    ObjectIdentifier?: ObjectIdentifier;
    /**
     * The type of policy that can be associated with PolicyAttachment.
     */
    PolicyType?: PolicyType;
  }
  export type PolicyAttachmentList = PolicyAttachment[];
  export interface PolicyToPath {
    /**
     * The path that is referenced from the root.
     */
    Path?: PathString;
    /**
     * List of policy objects.
     */
    Policies?: PolicyAttachmentList;
  }
  export type PolicyToPathList = PolicyToPath[];
  export type PolicyType = string;
  export interface PublishSchemaRequest {
    /**
     * ARN associated with the development schema. For more information, see arns.
     */
    DevelopmentSchemaArn: Arn;
    /**
     * Version under which the schema will be published.
     */
    Version: Version;
    /**
     * New name under which the schema will be published. If this is not provided, the development schema is considered.
     */
    Name?: SchemaName;
  }
  export interface PublishSchemaResponse {
    /**
     * ARN associated with the published schema. For more information, see arns.
     */
    PublishedSchemaArn?: Arn;
  }
  export interface PutSchemaFromJsonRequest {
    /**
     * The ARN of the schema to update.
     */
    SchemaArn: Arn;
    /**
     * The replacement JSON schema.
     */
    Document: SchemaJsonDocument;
  }
  export interface PutSchemaFromJsonResponse {
    /**
     * The ARN of the schema to update.
     */
    Arn?: Arn;
  }
  export type RangeMode = "FIRST"|"LAST"|"LAST_BEFORE_MISSING_VALUES"|"INCLUSIVE"|"EXCLUSIVE"|string;
  export interface RemoveFacetFromObjectRequest {
    /**
     * The ARN of the directory in which the object resides.
     */
    DirectoryArn: Arn;
    /**
     * The facet to remove.
     */
    SchemaFacet: SchemaFacet;
    /**
     * A reference to the object to remove the facet from.
     */
    ObjectReference: ObjectReference;
  }
  export interface RemoveFacetFromObjectResponse {
  }
  export type RequiredAttributeBehavior = "REQUIRED_ALWAYS"|"NOT_REQUIRED"|string;
  export interface Rule {
    /**
     * The type of attribute validation rule.
     */
    Type?: RuleType;
    /**
     * Min and max parameters associated with the rule.
     */
    Parameters?: RuleParameterMap;
  }
  export type RuleKey = string;
  export type RuleMap = {[key: string]: Rule};
  export type RuleParameterKey = string;
  export type RuleParameterMap = {[key: string]: RuleParameterValue};
  export type RuleParameterValue = string;
  export type RuleType = "BINARY_LENGTH"|"NUMBER_COMPARISON"|"STRING_FROM_SET"|"STRING_LENGTH"|string;
  export interface SchemaFacet {
    /**
     * The ARN of the schema that contains the facet.
     */
    SchemaArn?: Arn;
    /**
     * The name of the facet.
     */
    FacetName?: FacetName;
  }
  export type SchemaFacetList = SchemaFacet[];
  export type SchemaJsonDocument = string;
  export type SchemaName = string;
  export type SelectorObjectReference = string;
  export type StringAttributeValue = string;
  export interface Tag {
    /**
     * Key associated with the tag.
     */
    Key?: TagKey;
    /**
     * Value associated with the tag.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * ARN of the resource. Tagging is only supported for directories.
     */
    ResourceArn: Arn;
    /**
     * List of tag key value pairs.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TagsNumberResults = number;
  export interface TypedAttributeValue {
    /**
     * A string data value.
     */
    StringValue?: StringAttributeValue;
    /**
     * A binary data value.
     */
    BinaryValue?: BinaryAttributeValue;
    /**
     * A Boolean data value.
     */
    BooleanValue?: BooleanAttributeValue;
    /**
     * A number data value.
     */
    NumberValue?: NumberAttributeValue;
    /**
     * A date and time value.
     */
    DatetimeValue?: DatetimeAttributeValue;
  }
  export interface TypedAttributeValueRange {
    /**
     * Inclusive or exclusive range start.
     */
    StartMode: RangeMode;
    /**
     * The value to start the range at.
     */
    StartValue?: TypedAttributeValue;
    /**
     * Inclusive or exclusive range end.
     */
    EndMode: RangeMode;
    /**
     * The attribute value to terminate the range at.
     */
    EndValue?: TypedAttributeValue;
  }
  export interface UntagResourceRequest {
    /**
     * ARN of the resource. Tagging is only supported for directories.
     */
    ResourceArn: Arn;
    /**
     * Keys of the tag that needs to be removed from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export type UpdateActionType = "CREATE_OR_UPDATE"|"DELETE"|string;
  export interface UpdateFacetRequest {
    /**
     * ARN associated with the Facet. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     *  
     */
    Name: FacetName;
    /**
     * List of attributes that need to be updated in a given schema Facet. Each attribute is followed by AttributeAction, which specifies the type of update operation to perform. 
     */
    AttributeUpdates?: FacetAttributeUpdateList;
    /**
     * Object type associated with the facet. See CreateFacetRequest$ObjectType for more details.
     */
    ObjectType?: ObjectType;
  }
  export interface UpdateFacetResponse {
  }
  export interface UpdateObjectAttributesRequest {
    /**
     * ARN associated with the Directory where the object resides. For more information, see arns.
     */
    DirectoryArn: Arn;
    /**
     * Reference that identifies the object.
     */
    ObjectReference: ObjectReference;
    /**
     * Attributes update structure.
     */
    AttributeUpdates: ObjectAttributeUpdateList;
  }
  export interface UpdateObjectAttributesResponse {
    /**
     *  ObjectIdentifier of the updated object.
     */
    ObjectIdentifier?: ObjectIdentifier;
  }
  export interface UpdateSchemaRequest {
    /**
     * ARN of the development schema. For more information, see arns.
     */
    SchemaArn: Arn;
    /**
     * Name of the schema.
     */
    Name: SchemaName;
  }
  export interface UpdateSchemaResponse {
    /**
     * ARN associated with the updated schema. For more information, see arns.
     */
    SchemaArn?: Arn;
  }
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudDirectory client.
   */
  export import Types = CloudDirectory;
}
export = CloudDirectory;
