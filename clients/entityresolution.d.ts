import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class EntityResolution extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EntityResolution.Types.ClientConfiguration)
  config: Config & EntityResolution.Types.ClientConfiguration;
  /**
   * Adds a policy statement object. To retrieve a list of existing policy statements, use the GetPolicy API.
   */
  addPolicyStatement(params: EntityResolution.Types.AddPolicyStatementInput, callback?: (err: AWSError, data: EntityResolution.Types.AddPolicyStatementOutput) => void): Request<EntityResolution.Types.AddPolicyStatementOutput, AWSError>;
  /**
   * Adds a policy statement object. To retrieve a list of existing policy statements, use the GetPolicy API.
   */
  addPolicyStatement(callback?: (err: AWSError, data: EntityResolution.Types.AddPolicyStatementOutput) => void): Request<EntityResolution.Types.AddPolicyStatementOutput, AWSError>;
  /**
   * Deletes multiple unique IDs in a matching workflow.
   */
  batchDeleteUniqueId(params: EntityResolution.Types.BatchDeleteUniqueIdInput, callback?: (err: AWSError, data: EntityResolution.Types.BatchDeleteUniqueIdOutput) => void): Request<EntityResolution.Types.BatchDeleteUniqueIdOutput, AWSError>;
  /**
   * Deletes multiple unique IDs in a matching workflow.
   */
  batchDeleteUniqueId(callback?: (err: AWSError, data: EntityResolution.Types.BatchDeleteUniqueIdOutput) => void): Request<EntityResolution.Types.BatchDeleteUniqueIdOutput, AWSError>;
  /**
   * Creates an IdMappingWorkflow object which stores the configuration of the data processing job to be run. Each IdMappingWorkflow must have a unique workflow name. To modify an existing workflow, use the UpdateIdMappingWorkflow API.
   */
  createIdMappingWorkflow(params: EntityResolution.Types.CreateIdMappingWorkflowInput, callback?: (err: AWSError, data: EntityResolution.Types.CreateIdMappingWorkflowOutput) => void): Request<EntityResolution.Types.CreateIdMappingWorkflowOutput, AWSError>;
  /**
   * Creates an IdMappingWorkflow object which stores the configuration of the data processing job to be run. Each IdMappingWorkflow must have a unique workflow name. To modify an existing workflow, use the UpdateIdMappingWorkflow API.
   */
  createIdMappingWorkflow(callback?: (err: AWSError, data: EntityResolution.Types.CreateIdMappingWorkflowOutput) => void): Request<EntityResolution.Types.CreateIdMappingWorkflowOutput, AWSError>;
  /**
   * Creates an ID namespace object which will help customers provide metadata explaining their dataset and how to use it. Each ID namespace must have a unique name. To modify an existing ID namespace, use the UpdateIdNamespace API.
   */
  createIdNamespace(params: EntityResolution.Types.CreateIdNamespaceInput, callback?: (err: AWSError, data: EntityResolution.Types.CreateIdNamespaceOutput) => void): Request<EntityResolution.Types.CreateIdNamespaceOutput, AWSError>;
  /**
   * Creates an ID namespace object which will help customers provide metadata explaining their dataset and how to use it. Each ID namespace must have a unique name. To modify an existing ID namespace, use the UpdateIdNamespace API.
   */
  createIdNamespace(callback?: (err: AWSError, data: EntityResolution.Types.CreateIdNamespaceOutput) => void): Request<EntityResolution.Types.CreateIdNamespaceOutput, AWSError>;
  /**
   * Creates a MatchingWorkflow object which stores the configuration of the data processing job to be run. It is important to note that there should not be a pre-existing MatchingWorkflow with the same name. To modify an existing workflow, utilize the UpdateMatchingWorkflow API.
   */
  createMatchingWorkflow(params: EntityResolution.Types.CreateMatchingWorkflowInput, callback?: (err: AWSError, data: EntityResolution.Types.CreateMatchingWorkflowOutput) => void): Request<EntityResolution.Types.CreateMatchingWorkflowOutput, AWSError>;
  /**
   * Creates a MatchingWorkflow object which stores the configuration of the data processing job to be run. It is important to note that there should not be a pre-existing MatchingWorkflow with the same name. To modify an existing workflow, utilize the UpdateMatchingWorkflow API.
   */
  createMatchingWorkflow(callback?: (err: AWSError, data: EntityResolution.Types.CreateMatchingWorkflowOutput) => void): Request<EntityResolution.Types.CreateMatchingWorkflowOutput, AWSError>;
  /**
   * Creates a schema mapping, which defines the schema of the input customer records table. The SchemaMapping also provides Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.
   */
  createSchemaMapping(params: EntityResolution.Types.CreateSchemaMappingInput, callback?: (err: AWSError, data: EntityResolution.Types.CreateSchemaMappingOutput) => void): Request<EntityResolution.Types.CreateSchemaMappingOutput, AWSError>;
  /**
   * Creates a schema mapping, which defines the schema of the input customer records table. The SchemaMapping also provides Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.
   */
  createSchemaMapping(callback?: (err: AWSError, data: EntityResolution.Types.CreateSchemaMappingOutput) => void): Request<EntityResolution.Types.CreateSchemaMappingOutput, AWSError>;
  /**
   * Deletes the IdMappingWorkflow with a given name. This operation will succeed even if a workflow with the given name does not exist.
   */
  deleteIdMappingWorkflow(params: EntityResolution.Types.DeleteIdMappingWorkflowInput, callback?: (err: AWSError, data: EntityResolution.Types.DeleteIdMappingWorkflowOutput) => void): Request<EntityResolution.Types.DeleteIdMappingWorkflowOutput, AWSError>;
  /**
   * Deletes the IdMappingWorkflow with a given name. This operation will succeed even if a workflow with the given name does not exist.
   */
  deleteIdMappingWorkflow(callback?: (err: AWSError, data: EntityResolution.Types.DeleteIdMappingWorkflowOutput) => void): Request<EntityResolution.Types.DeleteIdMappingWorkflowOutput, AWSError>;
  /**
   * Deletes the IdNamespace with a given name.
   */
  deleteIdNamespace(params: EntityResolution.Types.DeleteIdNamespaceInput, callback?: (err: AWSError, data: EntityResolution.Types.DeleteIdNamespaceOutput) => void): Request<EntityResolution.Types.DeleteIdNamespaceOutput, AWSError>;
  /**
   * Deletes the IdNamespace with a given name.
   */
  deleteIdNamespace(callback?: (err: AWSError, data: EntityResolution.Types.DeleteIdNamespaceOutput) => void): Request<EntityResolution.Types.DeleteIdNamespaceOutput, AWSError>;
  /**
   * Deletes the MatchingWorkflow with a given name. This operation will succeed even if a workflow with the given name does not exist.
   */
  deleteMatchingWorkflow(params: EntityResolution.Types.DeleteMatchingWorkflowInput, callback?: (err: AWSError, data: EntityResolution.Types.DeleteMatchingWorkflowOutput) => void): Request<EntityResolution.Types.DeleteMatchingWorkflowOutput, AWSError>;
  /**
   * Deletes the MatchingWorkflow with a given name. This operation will succeed even if a workflow with the given name does not exist.
   */
  deleteMatchingWorkflow(callback?: (err: AWSError, data: EntityResolution.Types.DeleteMatchingWorkflowOutput) => void): Request<EntityResolution.Types.DeleteMatchingWorkflowOutput, AWSError>;
  /**
   * Deletes the policy statement.
   */
  deletePolicyStatement(params: EntityResolution.Types.DeletePolicyStatementInput, callback?: (err: AWSError, data: EntityResolution.Types.DeletePolicyStatementOutput) => void): Request<EntityResolution.Types.DeletePolicyStatementOutput, AWSError>;
  /**
   * Deletes the policy statement.
   */
  deletePolicyStatement(callback?: (err: AWSError, data: EntityResolution.Types.DeletePolicyStatementOutput) => void): Request<EntityResolution.Types.DeletePolicyStatementOutput, AWSError>;
  /**
   * Deletes the SchemaMapping with a given name. This operation will succeed even if a schema with the given name does not exist. This operation will fail if there is a MatchingWorkflow object that references the SchemaMapping in the workflow's InputSourceConfig.
   */
  deleteSchemaMapping(params: EntityResolution.Types.DeleteSchemaMappingInput, callback?: (err: AWSError, data: EntityResolution.Types.DeleteSchemaMappingOutput) => void): Request<EntityResolution.Types.DeleteSchemaMappingOutput, AWSError>;
  /**
   * Deletes the SchemaMapping with a given name. This operation will succeed even if a schema with the given name does not exist. This operation will fail if there is a MatchingWorkflow object that references the SchemaMapping in the workflow's InputSourceConfig.
   */
  deleteSchemaMapping(callback?: (err: AWSError, data: EntityResolution.Types.DeleteSchemaMappingOutput) => void): Request<EntityResolution.Types.DeleteSchemaMappingOutput, AWSError>;
  /**
   * Gets the status, metrics, and errors (if there are any) that are associated with a job.
   */
  getIdMappingJob(params: EntityResolution.Types.GetIdMappingJobInput, callback?: (err: AWSError, data: EntityResolution.Types.GetIdMappingJobOutput) => void): Request<EntityResolution.Types.GetIdMappingJobOutput, AWSError>;
  /**
   * Gets the status, metrics, and errors (if there are any) that are associated with a job.
   */
  getIdMappingJob(callback?: (err: AWSError, data: EntityResolution.Types.GetIdMappingJobOutput) => void): Request<EntityResolution.Types.GetIdMappingJobOutput, AWSError>;
  /**
   * Returns the IdMappingWorkflow with a given name, if it exists.
   */
  getIdMappingWorkflow(params: EntityResolution.Types.GetIdMappingWorkflowInput, callback?: (err: AWSError, data: EntityResolution.Types.GetIdMappingWorkflowOutput) => void): Request<EntityResolution.Types.GetIdMappingWorkflowOutput, AWSError>;
  /**
   * Returns the IdMappingWorkflow with a given name, if it exists.
   */
  getIdMappingWorkflow(callback?: (err: AWSError, data: EntityResolution.Types.GetIdMappingWorkflowOutput) => void): Request<EntityResolution.Types.GetIdMappingWorkflowOutput, AWSError>;
  /**
   * Returns the IdNamespace with a given name, if it exists.
   */
  getIdNamespace(params: EntityResolution.Types.GetIdNamespaceInput, callback?: (err: AWSError, data: EntityResolution.Types.GetIdNamespaceOutput) => void): Request<EntityResolution.Types.GetIdNamespaceOutput, AWSError>;
  /**
   * Returns the IdNamespace with a given name, if it exists.
   */
  getIdNamespace(callback?: (err: AWSError, data: EntityResolution.Types.GetIdNamespaceOutput) => void): Request<EntityResolution.Types.GetIdNamespaceOutput, AWSError>;
  /**
   * Returns the corresponding Match ID of a customer record if the record has been processed.
   */
  getMatchId(params: EntityResolution.Types.GetMatchIdInput, callback?: (err: AWSError, data: EntityResolution.Types.GetMatchIdOutput) => void): Request<EntityResolution.Types.GetMatchIdOutput, AWSError>;
  /**
   * Returns the corresponding Match ID of a customer record if the record has been processed.
   */
  getMatchId(callback?: (err: AWSError, data: EntityResolution.Types.GetMatchIdOutput) => void): Request<EntityResolution.Types.GetMatchIdOutput, AWSError>;
  /**
   * Gets the status, metrics, and errors (if there are any) that are associated with a job.
   */
  getMatchingJob(params: EntityResolution.Types.GetMatchingJobInput, callback?: (err: AWSError, data: EntityResolution.Types.GetMatchingJobOutput) => void): Request<EntityResolution.Types.GetMatchingJobOutput, AWSError>;
  /**
   * Gets the status, metrics, and errors (if there are any) that are associated with a job.
   */
  getMatchingJob(callback?: (err: AWSError, data: EntityResolution.Types.GetMatchingJobOutput) => void): Request<EntityResolution.Types.GetMatchingJobOutput, AWSError>;
  /**
   * Returns the MatchingWorkflow with a given name, if it exists.
   */
  getMatchingWorkflow(params: EntityResolution.Types.GetMatchingWorkflowInput, callback?: (err: AWSError, data: EntityResolution.Types.GetMatchingWorkflowOutput) => void): Request<EntityResolution.Types.GetMatchingWorkflowOutput, AWSError>;
  /**
   * Returns the MatchingWorkflow with a given name, if it exists.
   */
  getMatchingWorkflow(callback?: (err: AWSError, data: EntityResolution.Types.GetMatchingWorkflowOutput) => void): Request<EntityResolution.Types.GetMatchingWorkflowOutput, AWSError>;
  /**
   * Returns the resource-based policy.
   */
  getPolicy(params: EntityResolution.Types.GetPolicyInput, callback?: (err: AWSError, data: EntityResolution.Types.GetPolicyOutput) => void): Request<EntityResolution.Types.GetPolicyOutput, AWSError>;
  /**
   * Returns the resource-based policy.
   */
  getPolicy(callback?: (err: AWSError, data: EntityResolution.Types.GetPolicyOutput) => void): Request<EntityResolution.Types.GetPolicyOutput, AWSError>;
  /**
   * Returns the ProviderService of a given name.
   */
  getProviderService(params: EntityResolution.Types.GetProviderServiceInput, callback?: (err: AWSError, data: EntityResolution.Types.GetProviderServiceOutput) => void): Request<EntityResolution.Types.GetProviderServiceOutput, AWSError>;
  /**
   * Returns the ProviderService of a given name.
   */
  getProviderService(callback?: (err: AWSError, data: EntityResolution.Types.GetProviderServiceOutput) => void): Request<EntityResolution.Types.GetProviderServiceOutput, AWSError>;
  /**
   * Returns the SchemaMapping of a given name.
   */
  getSchemaMapping(params: EntityResolution.Types.GetSchemaMappingInput, callback?: (err: AWSError, data: EntityResolution.Types.GetSchemaMappingOutput) => void): Request<EntityResolution.Types.GetSchemaMappingOutput, AWSError>;
  /**
   * Returns the SchemaMapping of a given name.
   */
  getSchemaMapping(callback?: (err: AWSError, data: EntityResolution.Types.GetSchemaMappingOutput) => void): Request<EntityResolution.Types.GetSchemaMappingOutput, AWSError>;
  /**
   * Lists all ID mapping jobs for a given workflow.
   */
  listIdMappingJobs(params: EntityResolution.Types.ListIdMappingJobsInput, callback?: (err: AWSError, data: EntityResolution.Types.ListIdMappingJobsOutput) => void): Request<EntityResolution.Types.ListIdMappingJobsOutput, AWSError>;
  /**
   * Lists all ID mapping jobs for a given workflow.
   */
  listIdMappingJobs(callback?: (err: AWSError, data: EntityResolution.Types.ListIdMappingJobsOutput) => void): Request<EntityResolution.Types.ListIdMappingJobsOutput, AWSError>;
  /**
   * Returns a list of all the IdMappingWorkflows that have been created for an Amazon Web Services account.
   */
  listIdMappingWorkflows(params: EntityResolution.Types.ListIdMappingWorkflowsInput, callback?: (err: AWSError, data: EntityResolution.Types.ListIdMappingWorkflowsOutput) => void): Request<EntityResolution.Types.ListIdMappingWorkflowsOutput, AWSError>;
  /**
   * Returns a list of all the IdMappingWorkflows that have been created for an Amazon Web Services account.
   */
  listIdMappingWorkflows(callback?: (err: AWSError, data: EntityResolution.Types.ListIdMappingWorkflowsOutput) => void): Request<EntityResolution.Types.ListIdMappingWorkflowsOutput, AWSError>;
  /**
   * Returns a list of all ID namespaces.
   */
  listIdNamespaces(params: EntityResolution.Types.ListIdNamespacesInput, callback?: (err: AWSError, data: EntityResolution.Types.ListIdNamespacesOutput) => void): Request<EntityResolution.Types.ListIdNamespacesOutput, AWSError>;
  /**
   * Returns a list of all ID namespaces.
   */
  listIdNamespaces(callback?: (err: AWSError, data: EntityResolution.Types.ListIdNamespacesOutput) => void): Request<EntityResolution.Types.ListIdNamespacesOutput, AWSError>;
  /**
   * Lists all jobs for a given workflow.
   */
  listMatchingJobs(params: EntityResolution.Types.ListMatchingJobsInput, callback?: (err: AWSError, data: EntityResolution.Types.ListMatchingJobsOutput) => void): Request<EntityResolution.Types.ListMatchingJobsOutput, AWSError>;
  /**
   * Lists all jobs for a given workflow.
   */
  listMatchingJobs(callback?: (err: AWSError, data: EntityResolution.Types.ListMatchingJobsOutput) => void): Request<EntityResolution.Types.ListMatchingJobsOutput, AWSError>;
  /**
   * Returns a list of all the MatchingWorkflows that have been created for an Amazon Web Services account.
   */
  listMatchingWorkflows(params: EntityResolution.Types.ListMatchingWorkflowsInput, callback?: (err: AWSError, data: EntityResolution.Types.ListMatchingWorkflowsOutput) => void): Request<EntityResolution.Types.ListMatchingWorkflowsOutput, AWSError>;
  /**
   * Returns a list of all the MatchingWorkflows that have been created for an Amazon Web Services account.
   */
  listMatchingWorkflows(callback?: (err: AWSError, data: EntityResolution.Types.ListMatchingWorkflowsOutput) => void): Request<EntityResolution.Types.ListMatchingWorkflowsOutput, AWSError>;
  /**
   * Returns a list of all the ProviderServices that are available in this Amazon Web Services Region.
   */
  listProviderServices(params: EntityResolution.Types.ListProviderServicesInput, callback?: (err: AWSError, data: EntityResolution.Types.ListProviderServicesOutput) => void): Request<EntityResolution.Types.ListProviderServicesOutput, AWSError>;
  /**
   * Returns a list of all the ProviderServices that are available in this Amazon Web Services Region.
   */
  listProviderServices(callback?: (err: AWSError, data: EntityResolution.Types.ListProviderServicesOutput) => void): Request<EntityResolution.Types.ListProviderServicesOutput, AWSError>;
  /**
   * Returns a list of all the SchemaMappings that have been created for an Amazon Web Services account.
   */
  listSchemaMappings(params: EntityResolution.Types.ListSchemaMappingsInput, callback?: (err: AWSError, data: EntityResolution.Types.ListSchemaMappingsOutput) => void): Request<EntityResolution.Types.ListSchemaMappingsOutput, AWSError>;
  /**
   * Returns a list of all the SchemaMappings that have been created for an Amazon Web Services account.
   */
  listSchemaMappings(callback?: (err: AWSError, data: EntityResolution.Types.ListSchemaMappingsOutput) => void): Request<EntityResolution.Types.ListSchemaMappingsOutput, AWSError>;
  /**
   * Displays the tags associated with an Entity Resolution resource. In Entity Resolution, SchemaMapping, and MatchingWorkflow can be tagged.
   */
  listTagsForResource(params: EntityResolution.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: EntityResolution.Types.ListTagsForResourceOutput) => void): Request<EntityResolution.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Displays the tags associated with an Entity Resolution resource. In Entity Resolution, SchemaMapping, and MatchingWorkflow can be tagged.
   */
  listTagsForResource(callback?: (err: AWSError, data: EntityResolution.Types.ListTagsForResourceOutput) => void): Request<EntityResolution.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Updates the resource-based policy.
   */
  putPolicy(params: EntityResolution.Types.PutPolicyInput, callback?: (err: AWSError, data: EntityResolution.Types.PutPolicyOutput) => void): Request<EntityResolution.Types.PutPolicyOutput, AWSError>;
  /**
   * Updates the resource-based policy.
   */
  putPolicy(callback?: (err: AWSError, data: EntityResolution.Types.PutPolicyOutput) => void): Request<EntityResolution.Types.PutPolicyOutput, AWSError>;
  /**
   * Starts the IdMappingJob of a workflow. The workflow must have previously been created using the CreateIdMappingWorkflow endpoint.
   */
  startIdMappingJob(params: EntityResolution.Types.StartIdMappingJobInput, callback?: (err: AWSError, data: EntityResolution.Types.StartIdMappingJobOutput) => void): Request<EntityResolution.Types.StartIdMappingJobOutput, AWSError>;
  /**
   * Starts the IdMappingJob of a workflow. The workflow must have previously been created using the CreateIdMappingWorkflow endpoint.
   */
  startIdMappingJob(callback?: (err: AWSError, data: EntityResolution.Types.StartIdMappingJobOutput) => void): Request<EntityResolution.Types.StartIdMappingJobOutput, AWSError>;
  /**
   * Starts the MatchingJob of a workflow. The workflow must have previously been created using the CreateMatchingWorkflow endpoint.
   */
  startMatchingJob(params: EntityResolution.Types.StartMatchingJobInput, callback?: (err: AWSError, data: EntityResolution.Types.StartMatchingJobOutput) => void): Request<EntityResolution.Types.StartMatchingJobOutput, AWSError>;
  /**
   * Starts the MatchingJob of a workflow. The workflow must have previously been created using the CreateMatchingWorkflow endpoint.
   */
  startMatchingJob(callback?: (err: AWSError, data: EntityResolution.Types.StartMatchingJobOutput) => void): Request<EntityResolution.Types.StartMatchingJobOutput, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified Entity Resolution resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Entity Resolution, SchemaMapping and MatchingWorkflow can be tagged. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
   */
  tagResource(params: EntityResolution.Types.TagResourceInput, callback?: (err: AWSError, data: EntityResolution.Types.TagResourceOutput) => void): Request<EntityResolution.Types.TagResourceOutput, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified Entity Resolution resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Entity Resolution, SchemaMapping and MatchingWorkflow can be tagged. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
   */
  tagResource(callback?: (err: AWSError, data: EntityResolution.Types.TagResourceOutput) => void): Request<EntityResolution.Types.TagResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the specified Entity Resolution resource. In Entity Resolution, SchemaMapping, and MatchingWorkflow can be tagged.
   */
  untagResource(params: EntityResolution.Types.UntagResourceInput, callback?: (err: AWSError, data: EntityResolution.Types.UntagResourceOutput) => void): Request<EntityResolution.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the specified Entity Resolution resource. In Entity Resolution, SchemaMapping, and MatchingWorkflow can be tagged.
   */
  untagResource(callback?: (err: AWSError, data: EntityResolution.Types.UntagResourceOutput) => void): Request<EntityResolution.Types.UntagResourceOutput, AWSError>;
  /**
   * Updates an existing IdMappingWorkflow. This method is identical to CreateIdMappingWorkflow, except it uses an HTTP PUT request instead of a POST request, and the IdMappingWorkflow must already exist for the method to succeed.
   */
  updateIdMappingWorkflow(params: EntityResolution.Types.UpdateIdMappingWorkflowInput, callback?: (err: AWSError, data: EntityResolution.Types.UpdateIdMappingWorkflowOutput) => void): Request<EntityResolution.Types.UpdateIdMappingWorkflowOutput, AWSError>;
  /**
   * Updates an existing IdMappingWorkflow. This method is identical to CreateIdMappingWorkflow, except it uses an HTTP PUT request instead of a POST request, and the IdMappingWorkflow must already exist for the method to succeed.
   */
  updateIdMappingWorkflow(callback?: (err: AWSError, data: EntityResolution.Types.UpdateIdMappingWorkflowOutput) => void): Request<EntityResolution.Types.UpdateIdMappingWorkflowOutput, AWSError>;
  /**
   * Updates an existing ID namespace.
   */
  updateIdNamespace(params: EntityResolution.Types.UpdateIdNamespaceInput, callback?: (err: AWSError, data: EntityResolution.Types.UpdateIdNamespaceOutput) => void): Request<EntityResolution.Types.UpdateIdNamespaceOutput, AWSError>;
  /**
   * Updates an existing ID namespace.
   */
  updateIdNamespace(callback?: (err: AWSError, data: EntityResolution.Types.UpdateIdNamespaceOutput) => void): Request<EntityResolution.Types.UpdateIdNamespaceOutput, AWSError>;
  /**
   * Updates an existing MatchingWorkflow. This method is identical to CreateMatchingWorkflow, except it uses an HTTP PUT request instead of a POST request, and the MatchingWorkflow must already exist for the method to succeed.
   */
  updateMatchingWorkflow(params: EntityResolution.Types.UpdateMatchingWorkflowInput, callback?: (err: AWSError, data: EntityResolution.Types.UpdateMatchingWorkflowOutput) => void): Request<EntityResolution.Types.UpdateMatchingWorkflowOutput, AWSError>;
  /**
   * Updates an existing MatchingWorkflow. This method is identical to CreateMatchingWorkflow, except it uses an HTTP PUT request instead of a POST request, and the MatchingWorkflow must already exist for the method to succeed.
   */
  updateMatchingWorkflow(callback?: (err: AWSError, data: EntityResolution.Types.UpdateMatchingWorkflowOutput) => void): Request<EntityResolution.Types.UpdateMatchingWorkflowOutput, AWSError>;
  /**
   * Updates a schema mapping.  A schema is immutable if it is being used by a workflow. Therefore, you can't update a schema mapping if it's associated with a workflow.  
   */
  updateSchemaMapping(params: EntityResolution.Types.UpdateSchemaMappingInput, callback?: (err: AWSError, data: EntityResolution.Types.UpdateSchemaMappingOutput) => void): Request<EntityResolution.Types.UpdateSchemaMappingOutput, AWSError>;
  /**
   * Updates a schema mapping.  A schema is immutable if it is being used by a workflow. Therefore, you can't update a schema mapping if it's associated with a workflow.  
   */
  updateSchemaMapping(callback?: (err: AWSError, data: EntityResolution.Types.UpdateSchemaMappingOutput) => void): Request<EntityResolution.Types.UpdateSchemaMappingOutput, AWSError>;
}
declare namespace EntityResolution {
  export interface AddPolicyStatementInput {
    /**
     * The action that the principal can use on the resource.  For example, entityresolution:GetIdMappingJob, entityresolution:GetMatchingJob.
     */
    action: StatementActionList;
    /**
     * The Amazon Resource Name (ARN) of the resource that will be accessed by the principal.
     */
    arn: VeniceGlobalArn;
    /**
     * A set of condition keys that you can use in key policies.
     */
    condition?: StatementCondition;
    /**
     * Determines whether the permissions specified in the policy are to be allowed (Allow) or denied (Deny).
     */
    effect: StatementEffect;
    /**
     * The Amazon Web Services service or Amazon Web Services account that can access the resource defined as ARN.
     */
    principal: StatementPrincipalList;
    /**
     * A statement identifier that differentiates the statement from others in the same policy.
     */
    statementId: StatementId;
  }
  export interface AddPolicyStatementOutput {
    /**
     * The Amazon Resource Name (ARN) of the resource that will be accessed by the principal.
     */
    arn: VeniceGlobalArn;
    /**
     * The resource-based policy.
     */
    policy?: PolicyDocument;
    /**
     * A unique identifier for the current revision of the policy.
     */
    token: PolicyToken;
  }
  export type AttributeMatchingModel = "ONE_TO_ONE"|"MANY_TO_MANY"|string;
  export type AttributeName = string;
  export type AwsAccountId = string;
  export type AwsAccountIdList = AwsAccountId[];
  export interface BatchDeleteUniqueIdInput {
    /**
     * The input source for the batch delete unique ID operation.
     */
    inputSource?: BatchDeleteUniqueIdInputInputSourceString;
    /**
     * The unique IDs to delete.
     */
    uniqueIds: UniqueIdList;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export type BatchDeleteUniqueIdInputInputSourceString = string;
  export interface BatchDeleteUniqueIdOutput {
    /**
     * The unique IDs that were deleted.
     */
    deleted: DeletedUniqueIdList;
    /**
     * The unique IDs that were disconnected.
     */
    disconnectedUniqueIds: DisconnectedUniqueIdsList;
    /**
     *  The errors from deleting multiple unique IDs.
     */
    errors: DeleteUniqueIdErrorsList;
    /**
     * The status of the batch delete unique ID operation.
     */
    status: DeleteUniqueIdStatus;
  }
  export type Boolean = boolean;
  export interface CreateIdMappingWorkflowInput {
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines the idMappingType and the providerProperties.
     */
    idMappingTechniques: IdMappingTechniques;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: IdMappingWorkflowInputSourceConfig;
    /**
     * A list of IdMappingWorkflowOutputSource objects, each of which contains fields OutputS3Path and Output.
     */
    outputSourceConfig?: IdMappingWorkflowOutputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     */
    roleArn: RoleArn;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
    /**
     * The name of the workflow. There can't be multiple IdMappingWorkflows with the same name.
     */
    workflowName: EntityName;
  }
  export interface CreateIdMappingWorkflowOutput {
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines the idMappingType and the providerProperties.
     */
    idMappingTechniques: IdMappingTechniques;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: IdMappingWorkflowInputSourceConfig;
    /**
     * A list of IdMappingWorkflowOutputSource objects, each of which contains fields OutputS3Path and Output.
     */
    outputSourceConfig?: IdMappingWorkflowOutputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     */
    roleArn: RoleArn;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the IDMappingWorkflow.
     */
    workflowArn: IdMappingWorkflowArn;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface CreateIdNamespaceInput {
    /**
     * The description of the ID namespace.
     */
    description?: Description;
    /**
     * Determines the properties of IdMappingWorflow where this IdNamespace can be used as a Source or a Target.
     */
    idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowPropertiesList;
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: EntityName;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig?: IdNamespaceInputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this IdNamespace on your behalf as part of the workflow run.
     */
    roleArn?: RoleArn;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
    /**
     * The type of ID namespace. There are two types: SOURCE and TARGET.  The SOURCE contains configurations for sourceId data that will be processed in an ID mapping workflow.  The TARGET contains a configuration of targetId to which all sourceIds will resolve to.
     */
    type: IdNamespaceType;
  }
  export interface CreateIdNamespaceOutput {
    /**
     * The timestamp of when the ID namespace was created.
     */
    createdAt: Timestamp;
    /**
     * The description of the ID namespace.
     */
    description?: Description;
    /**
     * Determines the properties of IdMappingWorkflow where this IdNamespace can be used as a Source or a Target.
     */
    idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowPropertiesList;
    /**
     * The Amazon Resource Name (ARN) of the ID namespace.
     */
    idNamespaceArn: IdNamespaceArn;
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: EntityName;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig?: IdNamespaceInputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in inputSourceConfig on your behalf as part of the workflow run.
     */
    roleArn?: RoleArn;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
    /**
     * The type of ID namespace. There are two types: SOURCE and TARGET. The SOURCE contains configurations for sourceId data that will be processed in an ID mapping workflow.  The TARGET contains a configuration of targetId to which all sourceIds will resolve to.
     */
    type: IdNamespaceType;
    /**
     * The timestamp of when the ID namespace was last updated.
     */
    updatedAt: Timestamp;
  }
  export interface CreateMatchingWorkflowInput {
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines an incremental run type and has only incrementalRunType as a field.
     */
    incrementalRunConfig?: IncrementalRunConfig;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: InputSourceConfig;
    /**
     * A list of OutputSource objects, each of which contains fields OutputS3Path, ApplyNormalization, and Output.
     */
    outputSourceConfig: OutputSourceConfig;
    /**
     * An object which defines the resolutionType and the ruleBasedProperties.
     */
    resolutionTechniques: ResolutionTechniques;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     */
    roleArn: String;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
    /**
     * The name of the workflow. There can't be multiple MatchingWorkflows with the same name.
     */
    workflowName: EntityName;
  }
  export interface CreateMatchingWorkflowOutput {
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines an incremental run type and has only incrementalRunType as a field.
     */
    incrementalRunConfig?: IncrementalRunConfig;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: InputSourceConfig;
    /**
     * A list of OutputSource objects, each of which contains fields OutputS3Path, ApplyNormalization, and Output.
     */
    outputSourceConfig: OutputSourceConfig;
    /**
     * An object which defines the resolutionType and the ruleBasedProperties.
     */
    resolutionTechniques: ResolutionTechniques;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     */
    roleArn: String;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the MatchingWorkflow.
     */
    workflowArn: MatchingWorkflowArn;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface CreateSchemaMappingInput {
    /**
     * A description of the schema.
     */
    description?: Description;
    /**
     * A list of MappedInputFields. Each MappedInputField corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
     */
    mappedInputFields: SchemaInputAttributes;
    /**
     * The name of the schema. There can't be multiple SchemaMappings with the same name.
     */
    schemaName: EntityName;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
  }
  export interface CreateSchemaMappingOutput {
    /**
     * A description of the schema.
     */
    description: Description;
    /**
     * A list of MappedInputFields. Each MappedInputField corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
     */
    mappedInputFields: SchemaInputAttributes;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the SchemaMapping.
     */
    schemaArn: SchemaMappingArn;
    /**
     * The name of the schema.
     */
    schemaName: EntityName;
  }
  export interface DeleteIdMappingWorkflowInput {
    /**
     * The name of the workflow to be deleted.
     */
    workflowName: EntityName;
  }
  export interface DeleteIdMappingWorkflowOutput {
    /**
     * A successful operation message.
     */
    message: String;
  }
  export interface DeleteIdNamespaceInput {
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: EntityName;
  }
  export interface DeleteIdNamespaceOutput {
    /**
     * A successful operation message.
     */
    message: String;
  }
  export interface DeleteMatchingWorkflowInput {
    /**
     * The name of the workflow to be retrieved.
     */
    workflowName: EntityName;
  }
  export interface DeleteMatchingWorkflowOutput {
    /**
     * A successful operation message.
     */
    message: String;
  }
  export interface DeletePolicyStatementInput {
    /**
     * The ARN of the resource for which the policy need to be deleted.
     */
    arn: VeniceGlobalArn;
    /**
     * A statement identifier that differentiates the statement from others in the same policy.
     */
    statementId: StatementId;
  }
  export interface DeletePolicyStatementOutput {
    /**
     * The ARN of the resource for which the policy need to be deleted.
     */
    arn: VeniceGlobalArn;
    /**
     * The resource-based policy.
     */
    policy?: PolicyDocument;
    /**
     * A unique identifier for the deleted policy.
     */
    token: PolicyToken;
  }
  export interface DeleteSchemaMappingInput {
    /**
     * The name of the schema to delete.
     */
    schemaName: EntityName;
  }
  export interface DeleteSchemaMappingOutput {
    /**
     * A successful operation message.
     */
    message: String;
  }
  export interface DeleteUniqueIdError {
    /**
     *  The error type for the batch delete unique ID operation.
     */
    errorType: DeleteUniqueIdErrorType;
    /**
     * The unique ID that could not be deleted.
     */
    uniqueId: UniqueId;
  }
  export type DeleteUniqueIdErrorType = "SERVICE_ERROR"|"VALIDATION_ERROR"|string;
  export type DeleteUniqueIdErrorsList = DeleteUniqueIdError[];
  export type DeleteUniqueIdStatus = "COMPLETED"|"ACCEPTED"|string;
  export interface DeletedUniqueId {
    /**
     *  The unique ID of the deleted item.
     */
    uniqueId: UniqueId;
  }
  export type DeletedUniqueIdList = DeletedUniqueId[];
  export type Description = string;
  export type DisconnectedUniqueIdsList = UniqueId[];
  export interface Document {
  }
  export type EntityName = string;
  export type EntityNameOrIdMappingWorkflowArn = string;
  export type EntityNameOrIdNamespaceArn = string;
  export interface ErrorDetails {
    /**
     * The error message from the job, if there is one.
     */
    errorMessage?: ErrorMessage;
  }
  export type ErrorMessage = string;
  export interface GetIdMappingJobInput {
    /**
     * The ID of the job.
     */
    jobId: JobId;
    /**
     * The name of the workflow.
     */
    workflowName: EntityNameOrIdMappingWorkflowArn;
  }
  export interface GetIdMappingJobOutput {
    /**
     * The time at which the job has finished.
     */
    endTime?: Timestamp;
    errorDetails?: ErrorDetails;
    /**
     * The ID of the job.
     */
    jobId: JobId;
    /**
     * Metrics associated with the execution, specifically total records processed, unique IDs generated, and records the execution skipped.
     */
    metrics?: IdMappingJobMetrics;
    /**
     * A list of OutputSource objects.
     */
    outputSourceConfig?: IdMappingJobOutputSourceConfig;
    /**
     * The time at which the job was started.
     */
    startTime: Timestamp;
    /**
     * The current status of the job.
     */
    status: JobStatus;
  }
  export interface GetIdMappingWorkflowInput {
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface GetIdMappingWorkflowOutput {
    /**
     * The timestamp of when the workflow was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines the idMappingType and the providerProperties.
     */
    idMappingTechniques: IdMappingTechniques;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: IdMappingWorkflowInputSourceConfig;
    /**
     * A list of OutputSource objects, each of which contains fields OutputS3Path and KMSArn.
     */
    outputSourceConfig?: IdMappingWorkflowOutputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
     */
    roleArn: RoleArn;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
    /**
     * The timestamp of when the workflow was last updated.
     */
    updatedAt: Timestamp;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the IdMappingWorkflow .
     */
    workflowArn: IdMappingWorkflowArn;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface GetIdNamespaceInput {
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: EntityNameOrIdNamespaceArn;
  }
  export interface GetIdNamespaceOutput {
    /**
     * The timestamp of when the ID namespace was created.
     */
    createdAt: Timestamp;
    /**
     * The description of the ID namespace.
     */
    description?: Description;
    /**
     * Determines the properties of IdMappingWorkflow where this IdNamespace can be used as a Source or a Target.
     */
    idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowPropertiesList;
    /**
     * The Amazon Resource Name (ARN) of the ID namespace.
     */
    idNamespaceArn: IdNamespaceArn;
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: EntityName;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig?: IdNamespaceInputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this IdNamespace on your behalf as part of a workflow run.
     */
    roleArn?: RoleArn;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
    /**
     * The type of ID namespace. There are two types: SOURCE and TARGET. The SOURCE contains configurations for sourceId data that will be processed in an ID mapping workflow.  The TARGET contains a configuration of targetId to which all sourceIds will resolve to.
     */
    type: IdNamespaceType;
    /**
     * The timestamp of when the ID namespace was last updated.
     */
    updatedAt: Timestamp;
  }
  export interface GetMatchIdInput {
    /**
     * Normalizes the attributes defined in the schema in the input data. For example, if an attribute has an AttributeType of PHONE_NUMBER, and the data in the input table is in a format of 1234567890, Entity Resolution will normalize this field in the output to (123)-456-7890.
     */
    applyNormalization?: Boolean;
    /**
     * The record to fetch the Match ID for.
     */
    record: RecordAttributeMap;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface GetMatchIdOutput {
    /**
     * The unique identifiers for this group of match records.
     */
    matchId?: String;
    /**
     * The rule the record matched on.
     */
    matchRule?: String;
  }
  export interface GetMatchingJobInput {
    /**
     * The ID of the job.
     */
    jobId: JobId;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface GetMatchingJobOutput {
    /**
     * The time at which the job has finished.
     */
    endTime?: Timestamp;
    /**
     * An object containing an error message, if there was an error.
     */
    errorDetails?: ErrorDetails;
    /**
     * The ID of the job.
     */
    jobId: JobId;
    /**
     * Metrics associated with the execution, specifically total records processed, unique IDs generated, and records the execution skipped.
     */
    metrics?: JobMetrics;
    /**
     * A list of OutputSource objects.
     */
    outputSourceConfig?: JobOutputSourceConfig;
    /**
     * The time at which the job was started.
     */
    startTime: Timestamp;
    /**
     * The current status of the job.
     */
    status: JobStatus;
  }
  export interface GetMatchingWorkflowInput {
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface GetMatchingWorkflowOutput {
    /**
     * The timestamp of when the workflow was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines an incremental run type and has only incrementalRunType as a field.
     */
    incrementalRunConfig?: IncrementalRunConfig;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: InputSourceConfig;
    /**
     * A list of OutputSource objects, each of which contains fields OutputS3Path, ApplyNormalization, and Output.
     */
    outputSourceConfig: OutputSourceConfig;
    /**
     * An object which defines the resolutionType and the ruleBasedProperties.
     */
    resolutionTechniques: ResolutionTechniques;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
     */
    roleArn: String;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
    /**
     * The timestamp of when the workflow was last updated.
     */
    updatedAt: Timestamp;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the MatchingWorkflow.
     */
    workflowArn: MatchingWorkflowArn;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface GetPolicyInput {
    /**
     * The Amazon Resource Name (ARN) of the resource for which the policy need to be returned.
     */
    arn: VeniceGlobalArn;
  }
  export interface GetPolicyOutput {
    /**
     * The Entity Resolution resource ARN.
     */
    arn: VeniceGlobalArn;
    /**
     * The resource-based policy.
     */
    policy?: PolicyDocument;
    /**
     * A unique identifier for the current revision of the policy.
     */
    token: PolicyToken;
  }
  export interface GetProviderServiceInput {
    /**
     * The name of the provider. This name is typically the company name.
     */
    providerName: EntityName;
    /**
     * The ARN (Amazon Resource Name) of the product that the provider service provides.
     */
    providerServiceName: ProviderServiceArn;
  }
  export interface GetProviderServiceOutput {
    /**
     * Specifies whether output data from the provider is anonymized. A value of TRUE means the output will be anonymized and you can't relate the data that comes back from the provider to the identifying input. A value of FALSE means the output won't be anonymized and you can relate the data that comes back from the provider to your source data. 
     */
    anonymizedOutput: Boolean;
    /**
     * Input schema for the provider service.
     */
    providerComponentSchema?: ProviderComponentSchema;
    /**
     * The definition of the provider configuration.
     */
    providerConfigurationDefinition?: Document;
    /**
     * The required configuration fields to use with the provider service.
     */
    providerEndpointConfiguration: ProviderEndpointConfiguration;
    /**
     * The definition of the provider entity output.
     */
    providerEntityOutputDefinition: Document;
    /**
     * The provider configuration required for different ID namespace types.
     */
    providerIdNameSpaceConfiguration?: ProviderIdNameSpaceConfiguration;
    /**
     * The Amazon Web Services accounts and the S3 permissions that are required by some providers to create an S3 bucket for intermediate data storage.
     */
    providerIntermediateDataAccessConfiguration?: ProviderIntermediateDataAccessConfiguration;
    /**
     * Provider service job configurations.
     */
    providerJobConfiguration?: Document;
    /**
     * The name of the provider. This name is typically the company name.
     */
    providerName: EntityName;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the provider service.
     */
    providerServiceArn: ProviderServiceArn;
    /**
     * The display name of the provider service.
     */
    providerServiceDisplayName: ProviderServiceDisplayName;
    /**
     * The name of the product that the provider service provides. 
     */
    providerServiceName: EntityName;
    /**
     * The type of provider service.
     */
    providerServiceType: ServiceType;
  }
  export interface GetSchemaMappingInput {
    /**
     * The name of the schema to be retrieved.
     */
    schemaName: EntityName;
  }
  export interface GetSchemaMappingOutput {
    /**
     * The timestamp of when the SchemaMapping was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the schema.
     */
    description?: Description;
    /**
     * Specifies whether the schema mapping has been applied to a workflow.
     */
    hasWorkflows: Boolean;
    /**
     * A list of MappedInputFields. Each MappedInputField corresponds to a column the source data table, and contains column name plus additional information Venice uses for matching.
     */
    mappedInputFields: SchemaInputAttributes;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the SchemaMapping.
     */
    schemaArn: SchemaMappingArn;
    /**
     * The name of the schema.
     */
    schemaName: EntityName;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: TagMap;
    /**
     * The timestamp of when the SchemaMapping was last updated.
     */
    updatedAt: Timestamp;
  }
  export interface IdMappingJobMetrics {
    /**
     * The total number of input records.
     */
    inputRecords?: Integer;
    /**
     * The total number of records that did not get processed.
     */
    recordsNotProcessed?: Integer;
    /**
     * The total number of records processed.
     */
    totalRecordsProcessed?: Integer;
  }
  export interface IdMappingJobOutputSource {
    /**
     * Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.
     */
    KMSArn?: KMSArn;
    /**
     * The S3 path to which Entity Resolution will write the output table.
     */
    outputS3Path: S3Path;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf as part of workflow execution.
     */
    roleArn: RoleArn;
  }
  export type IdMappingJobOutputSourceConfig = IdMappingJobOutputSource[];
  export interface IdMappingTechniques {
    /**
     * The type of ID mapping.
     */
    idMappingType: IdMappingType;
    /**
     * An object which defines any additional configurations required by the provider service.
     */
    providerProperties?: ProviderProperties;
  }
  export type IdMappingType = "PROVIDER"|string;
  export type IdMappingWorkflowArn = string;
  export interface IdMappingWorkflowInputSource {
    /**
     * An Glue table ARN for the input source table.
     */
    inputSourceARN: IdMappingWorkflowInputSourceInputSourceARNString;
    /**
     * The name of the schema to be retrieved.
     */
    schemaName?: EntityName;
    /**
     * The type of ID namespace. There are two types: SOURCE and TARGET.  The SOURCE contains configurations for sourceId data that will be processed in an ID mapping workflow.  The TARGET contains a configuration of targetId to which all sourceIds will resolve to.
     */
    type?: IdNamespaceType;
  }
  export type IdMappingWorkflowInputSourceConfig = IdMappingWorkflowInputSource[];
  export type IdMappingWorkflowInputSourceInputSourceARNString = string;
  export type IdMappingWorkflowList = IdMappingWorkflowSummary[];
  export interface IdMappingWorkflowOutputSource {
    /**
     * Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.
     */
    KMSArn?: KMSArn;
    /**
     * The S3 path to which Entity Resolution will write the output table.
     */
    outputS3Path: S3Path;
  }
  export type IdMappingWorkflowOutputSourceConfig = IdMappingWorkflowOutputSource[];
  export interface IdMappingWorkflowSummary {
    /**
     * The timestamp of when the workflow was created.
     */
    createdAt: Timestamp;
    /**
     * The timestamp of when the workflow was last updated.
     */
    updatedAt: Timestamp;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the IdMappingWorkflow.
     */
    workflowArn: IdMappingWorkflowArn;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export type IdNamespaceArn = string;
  export interface IdNamespaceIdMappingWorkflowProperties {
    /**
     * The type of ID mapping.
     */
    idMappingType: IdMappingType;
    /**
     * An object which defines any additional configurations required by the provider service.
     */
    providerProperties?: NamespaceProviderProperties;
  }
  export type IdNamespaceIdMappingWorkflowPropertiesList = IdNamespaceIdMappingWorkflowProperties[];
  export interface IdNamespaceInputSource {
    /**
     * An Glue table ARN for the input source table.
     */
    inputSourceARN: IdNamespaceInputSourceInputSourceARNString;
    /**
     * The name of the schema.
     */
    schemaName?: EntityName;
  }
  export type IdNamespaceInputSourceConfig = IdNamespaceInputSource[];
  export type IdNamespaceInputSourceInputSourceARNString = string;
  export type IdNamespaceList = IdNamespaceSummary[];
  export interface IdNamespaceSummary {
    /**
     * The timestamp of when the ID namespace was created.
     */
    createdAt: Timestamp;
    /**
     * The description of the ID namespace.
     */
    description?: Description;
    /**
     * The Amazon Resource Name (ARN) of the ID namespace.
     */
    idNamespaceArn: IdNamespaceArn;
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: EntityName;
    /**
     * The type of ID namespace. There are two types: SOURCE and TARGET. The SOURCE contains configurations for sourceId data that will be processed in an ID mapping workflow.  The TARGET contains a configuration of targetId to which all sourceIds will resolve to.
     */
    type: IdNamespaceType;
    /**
     * The timestamp of when the ID namespace was last updated.
     */
    updatedAt: Timestamp;
  }
  export type IdNamespaceType = "SOURCE"|"TARGET"|string;
  export interface IncrementalRunConfig {
    /**
     * The type of incremental run. It takes only one value: IMMEDIATE.
     */
    incrementalRunType?: IncrementalRunType;
  }
  export type IncrementalRunType = "IMMEDIATE"|string;
  export interface InputSource {
    /**
     * Normalizes the attributes defined in the schema in the input data. For example, if an attribute has an AttributeType of PHONE_NUMBER, and the data in the input table is in a format of 1234567890, Entity Resolution will normalize this field in the output to (123)-456-7890.
     */
    applyNormalization?: Boolean;
    /**
     * An Glue table ARN for the input source table.
     */
    inputSourceARN: InputSourceInputSourceARNString;
    /**
     * The name of the schema to be retrieved.
     */
    schemaName: EntityName;
  }
  export type InputSourceConfig = InputSource[];
  export type InputSourceInputSourceARNString = string;
  export type Integer = number;
  export interface IntermediateSourceConfiguration {
    /**
     * The Amazon S3 location (bucket and prefix). For example: s3://provider_bucket/DOC-EXAMPLE-BUCKET 
     */
    intermediateS3Path: S3Path;
  }
  export type JobId = string;
  export type JobList = JobSummary[];
  export interface JobMetrics {
    /**
     * The total number of input records.
     */
    inputRecords?: Integer;
    /**
     * The total number of matchIDs generated.
     */
    matchIDs?: Integer;
    /**
     * The total number of records that did not get processed.
     */
    recordsNotProcessed?: Integer;
    /**
     * The total number of records processed.
     */
    totalRecordsProcessed?: Integer;
  }
  export interface JobOutputSource {
    /**
     * Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.
     */
    KMSArn?: KMSArn;
    /**
     * The S3 path to which Entity Resolution will write the output table.
     */
    outputS3Path: S3Path;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf as part of workflow execution.
     */
    roleArn: RoleArn;
  }
  export type JobOutputSourceConfig = JobOutputSource[];
  export type JobStatus = "RUNNING"|"SUCCEEDED"|"FAILED"|"QUEUED"|string;
  export interface JobSummary {
    /**
     * The time at which the job has finished.
     */
    endTime?: Timestamp;
    /**
     * The ID of the job.
     */
    jobId: JobId;
    /**
     * The time at which the job was started.
     */
    startTime: Timestamp;
    /**
     * The current status of the job.
     */
    status: JobStatus;
  }
  export type KMSArn = string;
  export interface ListIdMappingJobsInput {
    /**
     * The maximum number of objects returned per page.
     */
    maxResults?: ListIdMappingJobsInputMaxResultsInteger;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
    /**
     * The name of the workflow to be retrieved.
     */
    workflowName: EntityNameOrIdMappingWorkflowArn;
  }
  export type ListIdMappingJobsInputMaxResultsInteger = number;
  export interface ListIdMappingJobsOutput {
    /**
     * A list of JobSummary objects.
     */
    jobs?: JobList;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
  }
  export interface ListIdMappingWorkflowsInput {
    /**
     * The maximum number of objects returned per page.
     */
    maxResults?: ListIdMappingWorkflowsInputMaxResultsInteger;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
  }
  export type ListIdMappingWorkflowsInputMaxResultsInteger = number;
  export interface ListIdMappingWorkflowsOutput {
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
    /**
     * A list of IdMappingWorkflowSummary objects.
     */
    workflowSummaries?: IdMappingWorkflowList;
  }
  export interface ListIdNamespacesInput {
    /**
     * The maximum number of IdNamespace objects returned per page.
     */
    maxResults?: ListIdNamespacesInputMaxResultsInteger;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
  }
  export type ListIdNamespacesInputMaxResultsInteger = number;
  export interface ListIdNamespacesOutput {
    /**
     * A list of IdNamespaceSummaries objects.
     */
    idNamespaceSummaries?: IdNamespaceList;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
  }
  export interface ListMatchingJobsInput {
    /**
     * The maximum number of objects returned per page.
     */
    maxResults?: ListMatchingJobsInputMaxResultsInteger;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
    /**
     * The name of the workflow to be retrieved.
     */
    workflowName: EntityName;
  }
  export type ListMatchingJobsInputMaxResultsInteger = number;
  export interface ListMatchingJobsOutput {
    /**
     * A list of JobSummary objects, each of which contain the ID, status, start time, and end time of a job.
     */
    jobs?: JobList;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
  }
  export interface ListMatchingWorkflowsInput {
    /**
     * The maximum number of objects returned per page.
     */
    maxResults?: ListMatchingWorkflowsInputMaxResultsInteger;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
  }
  export type ListMatchingWorkflowsInputMaxResultsInteger = number;
  export interface ListMatchingWorkflowsOutput {
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
    /**
     * A list of MatchingWorkflowSummary objects, each of which contain the fields WorkflowName, WorkflowArn, CreatedAt, and UpdatedAt.
     */
    workflowSummaries?: MatchingWorkflowList;
  }
  export interface ListProviderServicesInput {
    /**
     * The maximum number of objects returned per page.
     */
    maxResults?: ListProviderServicesInputMaxResultsInteger;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
    /**
     * The name of the provider. This name is typically the company name.
     */
    providerName?: EntityName;
  }
  export type ListProviderServicesInputMaxResultsInteger = number;
  export interface ListProviderServicesOutput {
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
    /**
     * A list of ProviderServices objects.
     */
    providerServiceSummaries?: ProviderServiceList;
  }
  export interface ListSchemaMappingsInput {
    /**
     * The maximum number of objects returned per page.
     */
    maxResults?: ListSchemaMappingsInputMaxResultsInteger;
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
  }
  export type ListSchemaMappingsInputMaxResultsInteger = number;
  export interface ListSchemaMappingsOutput {
    /**
     * The pagination token from the previous API call.
     */
    nextToken?: NextToken;
    /**
     * A list of SchemaMappingSummary objects, each of which contain the fields SchemaName, SchemaArn, CreatedAt, UpdatedAt.
     */
    schemaList?: SchemaMappingList;
  }
  export interface ListTagsForResourceInput {
    /**
     * The ARN of the resource for which you want to view tags.
     */
    resourceArn: VeniceGlobalArn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags: TagMap;
  }
  export type MatchingWorkflowArn = string;
  export type MatchingWorkflowList = MatchingWorkflowSummary[];
  export interface MatchingWorkflowSummary {
    /**
     * The timestamp of when the workflow was created.
     */
    createdAt: Timestamp;
    /**
     * The method that has been specified for data matching, either using matching provided by Entity Resolution or through a provider service.
     */
    resolutionType: ResolutionType;
    /**
     * The timestamp of when the workflow was last updated.
     */
    updatedAt: Timestamp;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the MatchingWorkflow.
     */
    workflowArn: MatchingWorkflowArn;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface NamespaceProviderProperties {
    /**
     * An object which defines any additional configurations required by the provider service.
     */
    providerConfiguration?: Document;
    /**
     * The Amazon Resource Name (ARN) of the provider service.
     */
    providerServiceArn: ProviderServiceArn;
  }
  export type NextToken = string;
  export interface OutputAttribute {
    /**
     * Enables the ability to hash the column values in the output.
     */
    hashed?: Boolean;
    /**
     * A name of a column to be written to the output. This must be an InputField name in the schema mapping.
     */
    name: AttributeName;
  }
  export interface OutputSource {
    /**
     * Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.
     */
    KMSArn?: KMSArn;
    /**
     * Normalizes the attributes defined in the schema in the input data. For example, if an attribute has an AttributeType of PHONE_NUMBER, and the data in the input table is in a format of 1234567890, Entity Resolution will normalize this field in the output to (123)-456-7890.
     */
    applyNormalization?: Boolean;
    /**
     * A list of OutputAttribute objects, each of which have the fields Name and Hashed. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
     */
    output: OutputSourceOutputList;
    /**
     * The S3 path to which Entity Resolution will write the output table.
     */
    outputS3Path: S3Path;
  }
  export type OutputSourceConfig = OutputSource[];
  export type OutputSourceOutputList = OutputAttribute[];
  export type PolicyDocument = string;
  export type PolicyToken = string;
  export interface ProviderComponentSchema {
    /**
     * The provider schema attributes.
     */
    providerSchemaAttributes?: ProviderSchemaAttributes;
    /**
     * Input schema for the provider service.
     */
    schemas?: Schemas;
  }
  export interface ProviderEndpointConfiguration {
    /**
     * The identifiers of the provider service, from Data Exchange.
     */
    marketplaceConfiguration?: ProviderMarketplaceConfiguration;
  }
  export interface ProviderIdNameSpaceConfiguration {
    /**
     * The description of the ID namespace.
     */
    description?: String;
    /**
     * Configurations required for the source ID namespace.
     */
    providerSourceConfigurationDefinition?: Document;
    /**
     * Configurations required for the target ID namespace.
     */
    providerTargetConfigurationDefinition?: Document;
  }
  export interface ProviderIntermediateDataAccessConfiguration {
    /**
     * The Amazon Web Services account that provider can use to read or write data into the customer's intermediate S3 bucket.
     */
    awsAccountIds?: AwsAccountIdList;
    /**
     * The S3 bucket actions that the provider requires permission for.
     */
    requiredBucketActions?: RequiredBucketActionsList;
  }
  export interface ProviderMarketplaceConfiguration {
    /**
     * The asset ID on Data Exchange.
     */
    assetId: String;
    /**
     * The dataset ID on Data Exchange.
     */
    dataSetId: String;
    /**
     * The listing ID on Data Exchange.
     */
    listingId: String;
    /**
     * The revision ID on Data Exchange.
     */
    revisionId: String;
  }
  export interface ProviderProperties {
    /**
     * The Amazon S3 location that temporarily stores your data while it processes. Your information won't be saved permanently.
     */
    intermediateSourceConfiguration?: IntermediateSourceConfiguration;
    /**
     * The required configuration fields to use with the provider service.
     */
    providerConfiguration?: Document;
    /**
     * The ARN of the provider service.
     */
    providerServiceArn: ProviderServiceArn;
  }
  export interface ProviderSchemaAttribute {
    /**
     * The field name.
     */
    fieldName: AttributeName;
    /**
     * The hashing attribute of the provider schema.
     */
    hashing?: Boolean;
    /**
     * The sub type of the provider schema attribute.
     */
    subType?: AttributeName;
    /**
     * The type of the provider schema attribute.
     */
    type: SchemaAttributeType;
  }
  export type ProviderSchemaAttributes = ProviderSchemaAttribute[];
  export type ProviderServiceArn = string;
  export type ProviderServiceDisplayName = string;
  export type ProviderServiceList = ProviderServiceSummary[];
  export interface ProviderServiceSummary {
    /**
     * The name of the provider. This name is typically the company name.
     */
    providerName: EntityName;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the providerService.
     */
    providerServiceArn: ProviderServiceArn;
    /**
     * The display name of the provider service.
     */
    providerServiceDisplayName: ProviderServiceDisplayName;
    /**
     * The name of the product that the provider service provides.
     */
    providerServiceName: EntityName;
    /**
     * The type of provider service.
     */
    providerServiceType: ServiceType;
  }
  export interface PutPolicyInput {
    /**
     * The Amazon Resource Name (ARN) of the resource for which the policy needs to be updated.
     */
    arn: VeniceGlobalArn;
    /**
     * The resource-based policy.
     */
    policy: PolicyDocument;
    /**
     * A unique identifier for the current revision of the policy.
     */
    token?: PolicyToken;
  }
  export interface PutPolicyOutput {
    /**
     * The Entity Resolution resource ARN.
     */
    arn: VeniceGlobalArn;
    /**
     * The resource-based policy.
     */
    policy?: PolicyDocument;
    /**
     * A unique identifier for the current revision of the policy.
     */
    token: PolicyToken;
  }
  export type RecordAttributeMap = {[key: string]: RecordAttributeMapValueString};
  export type RecordAttributeMapKeyString = string;
  export type RecordAttributeMapValueString = string;
  export type RequiredBucketActionsList = String[];
  export interface ResolutionTechniques {
    /**
     * The properties of the provider service.
     */
    providerProperties?: ProviderProperties;
    /**
     * The type of matching. There are three types of matching: RULE_MATCHING, ML_MATCHING, and PROVIDER.
     */
    resolutionType: ResolutionType;
    /**
     * An object which defines the list of matching rules to run and has a field Rules, which is a list of rule objects.
     */
    ruleBasedProperties?: RuleBasedProperties;
  }
  export type ResolutionType = "RULE_MATCHING"|"ML_MATCHING"|"PROVIDER"|string;
  export type RoleArn = string;
  export interface Rule {
    /**
     * A list of MatchingKeys. The MatchingKeys must have been defined in the SchemaMapping. Two records are considered to match according to this rule if all of the MatchingKeys match.
     */
    matchingKeys: RuleMatchingKeysList;
    /**
     * A name for the matching rule.
     */
    ruleName: RuleRuleNameString;
  }
  export interface RuleBasedProperties {
    /**
     * The comparison type. You can either choose ONE_TO_ONE or MANY_TO_MANY as the AttributeMatchingModel. When choosing MANY_TO_MANY, the system can match attributes across the sub-types of an attribute type. For example, if the value of the Email field of Profile A and the value of BusinessEmail field of Profile B matches, the two profiles are matched on the Email type. When choosing ONE_TO_ONE ,the system can only match if the sub-types are exact matches. For example, only when the value of the Email field of Profile A and the value of the Email field of Profile B matches, the two profiles are matched on the Email type.
     */
    attributeMatchingModel: AttributeMatchingModel;
    /**
     * A list of Rule objects, each of which have fields RuleName and MatchingKeys.
     */
    rules: RuleBasedPropertiesRulesList;
  }
  export type RuleBasedPropertiesRulesList = Rule[];
  export type RuleMatchingKeysList = AttributeName[];
  export type RuleRuleNameString = string;
  export type S3Path = string;
  export type SchemaAttributeType = "NAME"|"NAME_FIRST"|"NAME_MIDDLE"|"NAME_LAST"|"ADDRESS"|"ADDRESS_STREET1"|"ADDRESS_STREET2"|"ADDRESS_STREET3"|"ADDRESS_CITY"|"ADDRESS_STATE"|"ADDRESS_COUNTRY"|"ADDRESS_POSTALCODE"|"PHONE"|"PHONE_NUMBER"|"PHONE_COUNTRYCODE"|"EMAIL_ADDRESS"|"UNIQUE_ID"|"DATE"|"STRING"|"PROVIDER_ID"|string;
  export interface SchemaInputAttribute {
    /**
     * A string containing the field name.
     */
    fieldName: AttributeName;
    /**
     * A string that instructs Entity Resolution to combine several columns into a unified column with the identical attribute type.  For example, when working with columns such as first_name, middle_name, and last_name, assigning them a common groupName will prompt Entity Resolution to concatenate them into a single value.
     */
    groupName?: AttributeName;
    /**
     * A key that allows grouping of multiple input attributes into a unified matching group. For example, consider a scenario where the source table contains various addresses, such as business_address and shipping_address. By assigning a matchKey called address to both attributes, Entity Resolution will match records across these fields to create a consolidated matching group. If no matchKey is specified for a column, it won't be utilized for matching purposes but will still be included in the output table.
     */
    matchKey?: AttributeName;
    /**
     * The subtype of the attribute, selected from a list of values.
     */
    subType?: AttributeName;
    /**
     * The type of the attribute, selected from a list of values.
     */
    type: SchemaAttributeType;
  }
  export type SchemaInputAttributes = SchemaInputAttribute[];
  export type SchemaList = String[];
  export type SchemaMappingArn = string;
  export type SchemaMappingList = SchemaMappingSummary[];
  export interface SchemaMappingSummary {
    /**
     * The timestamp of when the SchemaMapping was created.
     */
    createdAt: Timestamp;
    /**
     * Specifies whether the schema mapping has been applied to a workflow.
     */
    hasWorkflows: Boolean;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the SchemaMapping.
     */
    schemaArn: SchemaMappingArn;
    /**
     * The name of the schema.
     */
    schemaName: EntityName;
    /**
     * The timestamp of when the SchemaMapping was last updated.
     */
    updatedAt: Timestamp;
  }
  export type Schemas = SchemaList[];
  export type ServiceType = "ASSIGNMENT"|"ID_MAPPING"|string;
  export interface StartIdMappingJobInput {
    /**
     * A list of OutputSource objects.
     */
    outputSourceConfig?: IdMappingJobOutputSourceConfig;
    /**
     * The name of the ID mapping job to be retrieved.
     */
    workflowName: EntityNameOrIdMappingWorkflowArn;
  }
  export interface StartIdMappingJobOutput {
    /**
     * The ID of the job.
     */
    jobId: JobId;
    /**
     * A list of OutputSource objects.
     */
    outputSourceConfig?: IdMappingJobOutputSourceConfig;
  }
  export interface StartMatchingJobInput {
    /**
     * The name of the matching job to be retrieved.
     */
    workflowName: EntityName;
  }
  export interface StartMatchingJobOutput {
    /**
     * The ID of the job.
     */
    jobId: JobId;
  }
  export type StatementAction = string;
  export type StatementActionList = StatementAction[];
  export type StatementCondition = string;
  export type StatementEffect = "Allow"|"Deny"|string;
  export type StatementId = string;
  export type StatementPrincipal = string;
  export type StatementPrincipalList = StatementPrincipal[];
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceInput {
    /**
     * The ARN of the resource for which you want to view tags.
     */
    resourceArn: VeniceGlobalArn;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags: TagMap;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export type UniqueId = string;
  export type UniqueIdList = UniqueId[];
  export interface UntagResourceInput {
    /**
     * The ARN of the resource for which you want to untag.
     */
    resourceArn: VeniceGlobalArn;
    /**
     * The list of tag keys to remove from the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateIdMappingWorkflowInput {
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines the idMappingType and the providerProperties.
     */
    idMappingTechniques: IdMappingTechniques;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: IdMappingWorkflowInputSourceConfig;
    /**
     * A list of OutputSource objects, each of which contains fields OutputS3Path and KMSArn.
     */
    outputSourceConfig?: IdMappingWorkflowOutputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
     */
    roleArn: RoleArn;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface UpdateIdMappingWorkflowOutput {
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines the idMappingType and the providerProperties.
     */
    idMappingTechniques: IdMappingTechniques;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: IdMappingWorkflowInputSourceConfig;
    /**
     * A list of OutputSource objects, each of which contains fields OutputS3Path and KMSArn.
     */
    outputSourceConfig?: IdMappingWorkflowOutputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
     */
    roleArn: RoleArn;
    /**
     * The Amazon Resource Name (ARN) of the workflow role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
     */
    workflowArn: IdMappingWorkflowArn;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface UpdateIdNamespaceInput {
    /**
     * The description of the ID namespace.
     */
    description?: Description;
    /**
     * Determines the properties of IdMappingWorkflow where this IdNamespace can be used as a Source or a Target.
     */
    idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowPropertiesList;
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: EntityName;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig?: IdNamespaceInputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this IdNamespace on your behalf as part of a workflow run.
     */
    roleArn?: RoleArn;
  }
  export interface UpdateIdNamespaceOutput {
    /**
     * The timestamp of when the ID namespace was created.
     */
    createdAt: Timestamp;
    /**
     * The description of the ID namespace.
     */
    description?: Description;
    /**
     * Determines the properties of IdMappingWorkflow where this IdNamespace can be used as a Source or a Target.
     */
    idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowPropertiesList;
    /**
     * The Amazon Resource Name (ARN) of the ID namespace.
     */
    idNamespaceArn: IdNamespaceArn;
    /**
     * The name of the ID namespace.
     */
    idNamespaceName: EntityName;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig?: IdNamespaceInputSourceConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this IdNamespace on your behalf as part of a workflow run.
     */
    roleArn?: RoleArn;
    /**
     * The type of ID namespace. There are two types: SOURCE and TARGET. The SOURCE contains configurations for sourceId data that will be processed in an ID mapping workflow.  The TARGET contains a configuration of targetId to which all sourceIds will resolve to.
     */
    type: IdNamespaceType;
    /**
     * The timestamp of when the ID namespace was last updated.
     */
    updatedAt: Timestamp;
  }
  export interface UpdateMatchingWorkflowInput {
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines an incremental run type and has only incrementalRunType as a field.
     */
    incrementalRunConfig?: IncrementalRunConfig;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: InputSourceConfig;
    /**
     * A list of OutputSource objects, each of which contains fields OutputS3Path, ApplyNormalization, and Output.
     */
    outputSourceConfig: OutputSourceConfig;
    /**
     * An object which defines the resolutionType and the ruleBasedProperties.
     */
    resolutionTechniques: ResolutionTechniques;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     */
    roleArn: String;
    /**
     * The name of the workflow to be retrieved.
     */
    workflowName: EntityName;
  }
  export interface UpdateMatchingWorkflowOutput {
    /**
     * A description of the workflow.
     */
    description?: Description;
    /**
     * An object which defines an incremental run type and has only incrementalRunType as a field.
     */
    incrementalRunConfig?: IncrementalRunConfig;
    /**
     * A list of InputSource objects, which have the fields InputSourceARN and SchemaName.
     */
    inputSourceConfig: InputSourceConfig;
    /**
     * A list of OutputSource objects, each of which contains fields OutputS3Path, ApplyNormalization, and Output.
     */
    outputSourceConfig: OutputSourceConfig;
    /**
     * An object which defines the resolutionType and the ruleBasedProperties 
     */
    resolutionTechniques: ResolutionTechniques;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     */
    roleArn: String;
    /**
     * The name of the workflow.
     */
    workflowName: EntityName;
  }
  export interface UpdateSchemaMappingInput {
    /**
     * A description of the schema.
     */
    description?: Description;
    /**
     * A list of MappedInputFields. Each MappedInputField corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
     */
    mappedInputFields: SchemaInputAttributes;
    /**
     * The name of the schema. There can't be multiple SchemaMappings with the same name.
     */
    schemaName: EntityName;
  }
  export interface UpdateSchemaMappingOutput {
    /**
     * A description of the schema.
     */
    description?: Description;
    /**
     * A list of MappedInputFields. Each MappedInputField corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
     */
    mappedInputFields: SchemaInputAttributes;
    /**
     * The ARN (Amazon Resource Name) that Entity Resolution generated for the SchemaMapping.
     */
    schemaArn: SchemaMappingArn;
    /**
     * The name of the schema.
     */
    schemaName: EntityName;
  }
  export type VeniceGlobalArn = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EntityResolution client.
   */
  export import Types = EntityResolution;
}
export = EntityResolution;
