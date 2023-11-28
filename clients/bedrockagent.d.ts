import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class BedrockAgent extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: BedrockAgent.Types.ClientConfiguration)
  config: Config & BedrockAgent.Types.ClientConfiguration;
  /**
   * Associate a Knowledge Base to an existing Amazon Bedrock Agent
   */
  associateAgentKnowledgeBase(params: BedrockAgent.Types.AssociateAgentKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.AssociateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.AssociateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Associate a Knowledge Base to an existing Amazon Bedrock Agent
   */
  associateAgentKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.AssociateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.AssociateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Creates an Amazon Bedrock Agent
   */
  createAgent(params: BedrockAgent.Types.CreateAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentResponse) => void): Request<BedrockAgent.Types.CreateAgentResponse, AWSError>;
  /**
   * Creates an Amazon Bedrock Agent
   */
  createAgent(callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentResponse) => void): Request<BedrockAgent.Types.CreateAgentResponse, AWSError>;
  /**
   * Creates an Action Group for existing Amazon Bedrock Agent
   */
  createAgentActionGroup(params: BedrockAgent.Types.CreateAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.CreateAgentActionGroupResponse, AWSError>;
  /**
   * Creates an Action Group for existing Amazon Bedrock Agent
   */
  createAgentActionGroup(callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.CreateAgentActionGroupResponse, AWSError>;
  /**
   * Creates an Alias for an existing Amazon Bedrock Agent
   */
  createAgentAlias(params: BedrockAgent.Types.CreateAgentAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentAliasResponse) => void): Request<BedrockAgent.Types.CreateAgentAliasResponse, AWSError>;
  /**
   * Creates an Alias for an existing Amazon Bedrock Agent
   */
  createAgentAlias(callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentAliasResponse) => void): Request<BedrockAgent.Types.CreateAgentAliasResponse, AWSError>;
  /**
   * Create a new data source
   */
  createDataSource(params: BedrockAgent.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateDataSourceResponse) => void): Request<BedrockAgent.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Create a new data source
   */
  createDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.CreateDataSourceResponse) => void): Request<BedrockAgent.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Create a new knowledge base
   */
  createKnowledgeBase(params: BedrockAgent.Types.CreateKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.CreateKnowledgeBaseResponse, AWSError>;
  /**
   * Create a new knowledge base
   */
  createKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.CreateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.CreateKnowledgeBaseResponse, AWSError>;
  /**
   * Deletes an Agent for existing Amazon Bedrock Agent
   */
  deleteAgent(params: BedrockAgent.Types.DeleteAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentResponse) => void): Request<BedrockAgent.Types.DeleteAgentResponse, AWSError>;
  /**
   * Deletes an Agent for existing Amazon Bedrock Agent
   */
  deleteAgent(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentResponse) => void): Request<BedrockAgent.Types.DeleteAgentResponse, AWSError>;
  /**
   * Deletes an Action Group for existing Amazon Bedrock Agent.
   */
  deleteAgentActionGroup(params: BedrockAgent.Types.DeleteAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentActionGroupResponse) => void): Request<BedrockAgent.Types.DeleteAgentActionGroupResponse, AWSError>;
  /**
   * Deletes an Action Group for existing Amazon Bedrock Agent.
   */
  deleteAgentActionGroup(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentActionGroupResponse) => void): Request<BedrockAgent.Types.DeleteAgentActionGroupResponse, AWSError>;
  /**
   * Deletes an Alias for a Amazon Bedrock Agent
   */
  deleteAgentAlias(params: BedrockAgent.Types.DeleteAgentAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentAliasResponse) => void): Request<BedrockAgent.Types.DeleteAgentAliasResponse, AWSError>;
  /**
   * Deletes an Alias for a Amazon Bedrock Agent
   */
  deleteAgentAlias(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentAliasResponse) => void): Request<BedrockAgent.Types.DeleteAgentAliasResponse, AWSError>;
  /**
   * Deletes an Agent version for existing Amazon Bedrock Agent
   */
  deleteAgentVersion(params: BedrockAgent.Types.DeleteAgentVersionRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentVersionResponse) => void): Request<BedrockAgent.Types.DeleteAgentVersionResponse, AWSError>;
  /**
   * Deletes an Agent version for existing Amazon Bedrock Agent
   */
  deleteAgentVersion(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentVersionResponse) => void): Request<BedrockAgent.Types.DeleteAgentVersionResponse, AWSError>;
  /**
   * Delete an existing data source
   */
  deleteDataSource(params: BedrockAgent.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteDataSourceResponse) => void): Request<BedrockAgent.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Delete an existing data source
   */
  deleteDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteDataSourceResponse) => void): Request<BedrockAgent.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Delete an existing knowledge base
   */
  deleteKnowledgeBase(params: BedrockAgent.Types.DeleteKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DeleteKnowledgeBaseResponse, AWSError>;
  /**
   * Delete an existing knowledge base
   */
  deleteKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DeleteKnowledgeBaseResponse, AWSError>;
  /**
   * Disassociate an existing Knowledge Base from an Amazon Bedrock Agent
   */
  disassociateAgentKnowledgeBase(params: BedrockAgent.Types.DisassociateAgentKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DisassociateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DisassociateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Disassociate an existing Knowledge Base from an Amazon Bedrock Agent
   */
  disassociateAgentKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.DisassociateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DisassociateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Gets an Agent for existing Amazon Bedrock Agent
   */
  getAgent(params: BedrockAgent.Types.GetAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentResponse) => void): Request<BedrockAgent.Types.GetAgentResponse, AWSError>;
  /**
   * Gets an Agent for existing Amazon Bedrock Agent
   */
  getAgent(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentResponse) => void): Request<BedrockAgent.Types.GetAgentResponse, AWSError>;
  /**
   * Gets an Action Group for existing Amazon Bedrock Agent Version
   */
  getAgentActionGroup(params: BedrockAgent.Types.GetAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentActionGroupResponse) => void): Request<BedrockAgent.Types.GetAgentActionGroupResponse, AWSError>;
  /**
   * Gets an Action Group for existing Amazon Bedrock Agent Version
   */
  getAgentActionGroup(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentActionGroupResponse) => void): Request<BedrockAgent.Types.GetAgentActionGroupResponse, AWSError>;
  /**
   * Describes an Alias for a Amazon Bedrock Agent
   */
  getAgentAlias(params: BedrockAgent.Types.GetAgentAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentAliasResponse) => void): Request<BedrockAgent.Types.GetAgentAliasResponse, AWSError>;
  /**
   * Describes an Alias for a Amazon Bedrock Agent
   */
  getAgentAlias(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentAliasResponse) => void): Request<BedrockAgent.Types.GetAgentAliasResponse, AWSError>;
  /**
   * Gets a knowledge base associated to an existing Amazon Bedrock Agent Version
   */
  getAgentKnowledgeBase(params: BedrockAgent.Types.GetAgentKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.GetAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Gets a knowledge base associated to an existing Amazon Bedrock Agent Version
   */
  getAgentKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.GetAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Gets an Agent version for existing Amazon Bedrock Agent
   */
  getAgentVersion(params: BedrockAgent.Types.GetAgentVersionRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentVersionResponse) => void): Request<BedrockAgent.Types.GetAgentVersionResponse, AWSError>;
  /**
   * Gets an Agent version for existing Amazon Bedrock Agent
   */
  getAgentVersion(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentVersionResponse) => void): Request<BedrockAgent.Types.GetAgentVersionResponse, AWSError>;
  /**
   * Get an existing data source
   */
  getDataSource(params: BedrockAgent.Types.GetDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetDataSourceResponse) => void): Request<BedrockAgent.Types.GetDataSourceResponse, AWSError>;
  /**
   * Get an existing data source
   */
  getDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.GetDataSourceResponse) => void): Request<BedrockAgent.Types.GetDataSourceResponse, AWSError>;
  /**
   * Get an ingestion job
   */
  getIngestionJob(params: BedrockAgent.Types.GetIngestionJobRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetIngestionJobResponse) => void): Request<BedrockAgent.Types.GetIngestionJobResponse, AWSError>;
  /**
   * Get an ingestion job
   */
  getIngestionJob(callback?: (err: AWSError, data: BedrockAgent.Types.GetIngestionJobResponse) => void): Request<BedrockAgent.Types.GetIngestionJobResponse, AWSError>;
  /**
   * Get an existing knowledge base
   */
  getKnowledgeBase(params: BedrockAgent.Types.GetKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.GetKnowledgeBaseResponse, AWSError>;
  /**
   * Get an existing knowledge base
   */
  getKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.GetKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.GetKnowledgeBaseResponse, AWSError>;
  /**
   * Lists an Action Group for existing Amazon Bedrock Agent Version
   */
  listAgentActionGroups(params: BedrockAgent.Types.ListAgentActionGroupsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentActionGroupsResponse) => void): Request<BedrockAgent.Types.ListAgentActionGroupsResponse, AWSError>;
  /**
   * Lists an Action Group for existing Amazon Bedrock Agent Version
   */
  listAgentActionGroups(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentActionGroupsResponse) => void): Request<BedrockAgent.Types.ListAgentActionGroupsResponse, AWSError>;
  /**
   * Lists all the Aliases for an Amazon Bedrock Agent
   */
  listAgentAliases(params: BedrockAgent.Types.ListAgentAliasesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentAliasesResponse) => void): Request<BedrockAgent.Types.ListAgentAliasesResponse, AWSError>;
  /**
   * Lists all the Aliases for an Amazon Bedrock Agent
   */
  listAgentAliases(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentAliasesResponse) => void): Request<BedrockAgent.Types.ListAgentAliasesResponse, AWSError>;
  /**
   * List of Knowledge Bases associated to an existing Amazon Bedrock Agent Version
   */
  listAgentKnowledgeBases(params: BedrockAgent.Types.ListAgentKnowledgeBasesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentKnowledgeBasesResponse) => void): Request<BedrockAgent.Types.ListAgentKnowledgeBasesResponse, AWSError>;
  /**
   * List of Knowledge Bases associated to an existing Amazon Bedrock Agent Version
   */
  listAgentKnowledgeBases(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentKnowledgeBasesResponse) => void): Request<BedrockAgent.Types.ListAgentKnowledgeBasesResponse, AWSError>;
  /**
   * Lists Agent Versions
   */
  listAgentVersions(params: BedrockAgent.Types.ListAgentVersionsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentVersionsResponse) => void): Request<BedrockAgent.Types.ListAgentVersionsResponse, AWSError>;
  /**
   * Lists Agent Versions
   */
  listAgentVersions(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentVersionsResponse) => void): Request<BedrockAgent.Types.ListAgentVersionsResponse, AWSError>;
  /**
   * Lists Agents
   */
  listAgents(params: BedrockAgent.Types.ListAgentsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentsResponse) => void): Request<BedrockAgent.Types.ListAgentsResponse, AWSError>;
  /**
   * Lists Agents
   */
  listAgents(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentsResponse) => void): Request<BedrockAgent.Types.ListAgentsResponse, AWSError>;
  /**
   * List data sources
   */
  listDataSources(params: BedrockAgent.Types.ListDataSourcesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListDataSourcesResponse) => void): Request<BedrockAgent.Types.ListDataSourcesResponse, AWSError>;
  /**
   * List data sources
   */
  listDataSources(callback?: (err: AWSError, data: BedrockAgent.Types.ListDataSourcesResponse) => void): Request<BedrockAgent.Types.ListDataSourcesResponse, AWSError>;
  /**
   * List ingestion jobs
   */
  listIngestionJobs(params: BedrockAgent.Types.ListIngestionJobsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListIngestionJobsResponse) => void): Request<BedrockAgent.Types.ListIngestionJobsResponse, AWSError>;
  /**
   * List ingestion jobs
   */
  listIngestionJobs(callback?: (err: AWSError, data: BedrockAgent.Types.ListIngestionJobsResponse) => void): Request<BedrockAgent.Types.ListIngestionJobsResponse, AWSError>;
  /**
   * List Knowledge Bases
   */
  listKnowledgeBases(params: BedrockAgent.Types.ListKnowledgeBasesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListKnowledgeBasesResponse) => void): Request<BedrockAgent.Types.ListKnowledgeBasesResponse, AWSError>;
  /**
   * List Knowledge Bases
   */
  listKnowledgeBases(callback?: (err: AWSError, data: BedrockAgent.Types.ListKnowledgeBasesResponse) => void): Request<BedrockAgent.Types.ListKnowledgeBasesResponse, AWSError>;
  /**
   * List tags for a resource
   */
  listTagsForResource(params: BedrockAgent.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListTagsForResourceResponse) => void): Request<BedrockAgent.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List tags for a resource
   */
  listTagsForResource(callback?: (err: AWSError, data: BedrockAgent.Types.ListTagsForResourceResponse) => void): Request<BedrockAgent.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Prepares an existing Amazon Bedrock Agent to receive runtime requests
   */
  prepareAgent(params: BedrockAgent.Types.PrepareAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.PrepareAgentResponse) => void): Request<BedrockAgent.Types.PrepareAgentResponse, AWSError>;
  /**
   * Prepares an existing Amazon Bedrock Agent to receive runtime requests
   */
  prepareAgent(callback?: (err: AWSError, data: BedrockAgent.Types.PrepareAgentResponse) => void): Request<BedrockAgent.Types.PrepareAgentResponse, AWSError>;
  /**
   * Start a new ingestion job
   */
  startIngestionJob(params: BedrockAgent.Types.StartIngestionJobRequest, callback?: (err: AWSError, data: BedrockAgent.Types.StartIngestionJobResponse) => void): Request<BedrockAgent.Types.StartIngestionJobResponse, AWSError>;
  /**
   * Start a new ingestion job
   */
  startIngestionJob(callback?: (err: AWSError, data: BedrockAgent.Types.StartIngestionJobResponse) => void): Request<BedrockAgent.Types.StartIngestionJobResponse, AWSError>;
  /**
   * Tag a resource
   */
  tagResource(params: BedrockAgent.Types.TagResourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.TagResourceResponse) => void): Request<BedrockAgent.Types.TagResourceResponse, AWSError>;
  /**
   * Tag a resource
   */
  tagResource(callback?: (err: AWSError, data: BedrockAgent.Types.TagResourceResponse) => void): Request<BedrockAgent.Types.TagResourceResponse, AWSError>;
  /**
   * Untag a resource
   */
  untagResource(params: BedrockAgent.Types.UntagResourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UntagResourceResponse) => void): Request<BedrockAgent.Types.UntagResourceResponse, AWSError>;
  /**
   * Untag a resource
   */
  untagResource(callback?: (err: AWSError, data: BedrockAgent.Types.UntagResourceResponse) => void): Request<BedrockAgent.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing Amazon Bedrock Agent
   */
  updateAgent(params: BedrockAgent.Types.UpdateAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentResponse) => void): Request<BedrockAgent.Types.UpdateAgentResponse, AWSError>;
  /**
   * Updates an existing Amazon Bedrock Agent
   */
  updateAgent(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentResponse) => void): Request<BedrockAgent.Types.UpdateAgentResponse, AWSError>;
  /**
   * Updates an existing Action Group for Amazon Bedrock Agent
   */
  updateAgentActionGroup(params: BedrockAgent.Types.UpdateAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.UpdateAgentActionGroupResponse, AWSError>;
  /**
   * Updates an existing Action Group for Amazon Bedrock Agent
   */
  updateAgentActionGroup(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.UpdateAgentActionGroupResponse, AWSError>;
  /**
   * Updates an existing Alias for an Amazon Bedrock Agent
   */
  updateAgentAlias(params: BedrockAgent.Types.UpdateAgentAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentAliasResponse) => void): Request<BedrockAgent.Types.UpdateAgentAliasResponse, AWSError>;
  /**
   * Updates an existing Alias for an Amazon Bedrock Agent
   */
  updateAgentAlias(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentAliasResponse) => void): Request<BedrockAgent.Types.UpdateAgentAliasResponse, AWSError>;
  /**
   * Updates an existing Knowledge Base associated to an Amazon Bedrock Agent
   */
  updateAgentKnowledgeBase(params: BedrockAgent.Types.UpdateAgentKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Updates an existing Knowledge Base associated to an Amazon Bedrock Agent
   */
  updateAgentKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Update an existing data source
   */
  updateDataSource(params: BedrockAgent.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateDataSourceResponse) => void): Request<BedrockAgent.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Update an existing data source
   */
  updateDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateDataSourceResponse) => void): Request<BedrockAgent.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Update an existing knowledge base
   */
  updateKnowledgeBase(params: BedrockAgent.Types.UpdateKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateKnowledgeBaseResponse, AWSError>;
  /**
   * Update an existing knowledge base
   */
  updateKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateKnowledgeBaseResponse, AWSError>;
}
declare namespace BedrockAgent {
  export interface APISchema {
    s3?: S3Identifier;
    payload?: Payload;
  }
  export interface ActionGroupExecutor {
    lambda?: LambdaArn;
  }
  export type ActionGroupSignature = "AMAZON.UserInput"|string;
  export type ActionGroupState = "ENABLED"|"DISABLED"|string;
  export type ActionGroupSummaries = ActionGroupSummary[];
  export interface ActionGroupSummary {
    actionGroupId: Id;
    actionGroupName: Name;
    actionGroupState: ActionGroupState;
    description?: Description;
    updatedAt: DateTimestamp;
  }
  export interface Agent {
    agentId: Id;
    agentName: Name;
    agentArn: AgentArn;
    agentVersion: DraftVersion;
    clientToken?: ClientToken;
    instruction?: Instruction;
    agentStatus: AgentStatus;
    foundationModel?: ModelIdentifier;
    description?: Description;
    idleSessionTTLInSeconds: SessionTTL;
    agentResourceRoleArn: AgentRoleArn;
    customerEncryptionKeyArn?: KmsKeyArn;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
    preparedAt?: DateTimestamp;
    failureReasons?: FailureReasons;
    recommendedActions?: RecommendedActions;
    promptOverrideConfiguration?: PromptOverrideConfiguration;
  }
  export interface AgentActionGroup {
    agentId: Id;
    agentVersion: Version;
    actionGroupId: Id;
    actionGroupName: Name;
    clientToken?: ClientToken;
    description?: Description;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
    parentActionSignature?: ActionGroupSignature;
    actionGroupExecutor?: ActionGroupExecutor;
    apiSchema?: APISchema;
    actionGroupState: ActionGroupState;
  }
  export interface AgentAlias {
    agentId: Id;
    agentAliasId: AgentAliasId;
    agentAliasName: Name;
    agentAliasArn: AgentAliasArn;
    clientToken?: ClientToken;
    description?: Description;
    routingConfiguration: AgentAliasRoutingConfiguration;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
    agentAliasHistoryEvents?: AgentAliasHistoryEvents;
    agentAliasStatus: AgentAliasStatus;
  }
  export type AgentAliasArn = string;
  export interface AgentAliasHistoryEvent {
    routingConfiguration?: AgentAliasRoutingConfiguration;
    endDate?: DateTimestamp;
    startDate?: DateTimestamp;
  }
  export type AgentAliasHistoryEvents = AgentAliasHistoryEvent[];
  export type AgentAliasId = string;
  export type AgentAliasRoutingConfiguration = AgentAliasRoutingConfigurationListItem[];
  export interface AgentAliasRoutingConfigurationListItem {
    agentVersion: Version;
  }
  export type AgentAliasStatus = "CREATING"|"PREPARED"|"FAILED"|"UPDATING"|"DELETING"|string;
  export type AgentAliasSummaries = AgentAliasSummary[];
  export interface AgentAliasSummary {
    agentAliasId: AgentAliasId;
    agentAliasName: Name;
    description?: Description;
    routingConfiguration?: AgentAliasRoutingConfiguration;
    agentAliasStatus: AgentAliasStatus;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
  }
  export type AgentArn = string;
  export interface AgentKnowledgeBase {
    agentId: Id;
    agentVersion: Version;
    knowledgeBaseId: Id;
    description: Description;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
    knowledgeBaseState: KnowledgeBaseState;
  }
  export type AgentKnowledgeBaseSummaries = AgentKnowledgeBaseSummary[];
  export interface AgentKnowledgeBaseSummary {
    knowledgeBaseId: Id;
    description?: Description;
    knowledgeBaseState: KnowledgeBaseState;
    updatedAt: DateTimestamp;
  }
  export type AgentRoleArn = string;
  export type AgentStatus = "CREATING"|"PREPARING"|"PREPARED"|"NOT_PREPARED"|"DELETING"|"FAILED"|"VERSIONING"|"UPDATING"|string;
  export type AgentSummaries = AgentSummary[];
  export interface AgentSummary {
    agentId: Id;
    agentName: Name;
    agentStatus: AgentStatus;
    description?: Description;
    updatedAt: DateTimestamp;
    latestAgentVersion?: Version;
  }
  export interface AgentVersion {
    agentId: Id;
    agentName: Name;
    agentArn: AgentArn;
    version: NumericalVersion;
    instruction?: Instruction;
    agentStatus: AgentStatus;
    foundationModel?: ModelIdentifier;
    description?: Description;
    idleSessionTTLInSeconds: SessionTTL;
    agentResourceRoleArn: AgentRoleArn;
    customerEncryptionKeyArn?: KmsKeyArn;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
    failureReasons?: FailureReasons;
    recommendedActions?: RecommendedActions;
    promptOverrideConfiguration?: PromptOverrideConfiguration;
  }
  export type AgentVersionSummaries = AgentVersionSummary[];
  export interface AgentVersionSummary {
    agentName: Name;
    agentStatus: AgentStatus;
    agentVersion: Version;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
    description?: Description;
  }
  export interface AssociateAgentKnowledgeBaseRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Draft Version of the Agent.
     */
    agentVersion: DraftVersion;
    knowledgeBaseId: Id;
    description: Description;
    knowledgeBaseState?: KnowledgeBaseState;
  }
  export interface AssociateAgentKnowledgeBaseResponse {
    agentKnowledgeBase: AgentKnowledgeBase;
  }
  export type BasePromptTemplate = string;
  export type BedrockEmbeddingModelArn = string;
  export type Boolean = boolean;
  export interface ChunkingConfiguration {
    chunkingStrategy: ChunkingStrategy;
    fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
  }
  export type ChunkingStrategy = "FIXED_SIZE"|"NONE"|string;
  export type ClientToken = string;
  export interface CreateAgentActionGroupRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Draft Version of the Agent.
     */
    agentVersion: DraftVersion;
    actionGroupName: Name;
    clientToken?: ClientToken;
    description?: Description;
    parentActionGroupSignature?: ActionGroupSignature;
    actionGroupExecutor?: ActionGroupExecutor;
    apiSchema?: APISchema;
    actionGroupState?: ActionGroupState;
  }
  export interface CreateAgentActionGroupResponse {
    agentActionGroup: AgentActionGroup;
  }
  export interface CreateAgentAliasRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    agentAliasName: Name;
    clientToken?: ClientToken;
    description?: Description;
    routingConfiguration?: AgentAliasRoutingConfiguration;
    tags?: TagsMap;
  }
  export interface CreateAgentAliasResponse {
    agentAlias: AgentAlias;
  }
  export interface CreateAgentRequest {
    agentName: Name;
    clientToken?: ClientToken;
    instruction?: Instruction;
    foundationModel?: ModelIdentifier;
    description?: Description;
    idleSessionTTLInSeconds?: SessionTTL;
    agentResourceRoleArn: AgentRoleArn;
    customerEncryptionKeyArn?: KmsKeyArn;
    tags?: TagsMap;
    promptOverrideConfiguration?: PromptOverrideConfiguration;
  }
  export interface CreateAgentResponse {
    agent: Agent;
  }
  export interface CreateDataSourceRequest {
    knowledgeBaseId: Id;
    clientToken?: ClientToken;
    name: Name;
    description?: Description;
    dataSourceConfiguration: DataSourceConfiguration;
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    vectorIngestionConfiguration?: VectorIngestionConfiguration;
  }
  export interface CreateDataSourceResponse {
    dataSource: DataSource;
  }
  export interface CreateKnowledgeBaseRequest {
    clientToken?: ClientToken;
    name: Name;
    description?: Description;
    roleArn: KnowledgeBaseRoleArn;
    knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
    storageConfiguration: StorageConfiguration;
    tags?: TagsMap;
  }
  export interface CreateKnowledgeBaseResponse {
    knowledgeBase: KnowledgeBase;
  }
  export type CreationMode = "DEFAULT"|"OVERRIDDEN"|string;
  export interface DataSource {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    name: Name;
    status: DataSourceStatus;
    description?: Description;
    dataSourceConfiguration: DataSourceConfiguration;
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    vectorIngestionConfiguration?: VectorIngestionConfiguration;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
  }
  export interface DataSourceConfiguration {
    type: DataSourceType;
    s3Configuration?: S3DataSourceConfiguration;
  }
  export type DataSourceStatus = "AVAILABLE"|"DELETING"|string;
  export type DataSourceSummaries = DataSourceSummary[];
  export interface DataSourceSummary {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    name: Name;
    status: DataSourceStatus;
    description?: Description;
    updatedAt: DateTimestamp;
  }
  export type DataSourceType = "S3"|string;
  export type DateTimestamp = Date;
  export interface DeleteAgentActionGroupRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Draft Version of the Agent.
     */
    agentVersion: DraftVersion;
    /**
     * Id generated at the server side when an Agent ActionGroup is created
     */
    actionGroupId: Id;
    /**
     * Skips checking if resource is in use when set to true. Defaults to false
     */
    skipResourceInUseCheck?: Boolean;
  }
  export interface DeleteAgentActionGroupResponse {
  }
  export interface DeleteAgentAliasRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Id generated at the server side when an Agent Alias is created
     */
    agentAliasId: AgentAliasId;
  }
  export interface DeleteAgentAliasResponse {
    agentId: Id;
    agentAliasId: AgentAliasId;
    agentAliasStatus: AgentAliasStatus;
  }
  export interface DeleteAgentRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Skips checking if resource is in use when set to true. Defaults to false
     */
    skipResourceInUseCheck?: Boolean;
  }
  export interface DeleteAgentResponse {
    agentId: Id;
    agentStatus: AgentStatus;
  }
  export interface DeleteAgentVersionRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    agentVersion: NumericalVersion;
    /**
     * Skips checking if resource is in use when set to true. Defaults to false
     */
    skipResourceInUseCheck?: Boolean;
  }
  export interface DeleteAgentVersionResponse {
    agentId: Id;
    agentVersion: NumericalVersion;
    agentStatus: AgentStatus;
  }
  export interface DeleteDataSourceRequest {
    knowledgeBaseId: Id;
    dataSourceId: Id;
  }
  export interface DeleteDataSourceResponse {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    status: DataSourceStatus;
  }
  export interface DeleteKnowledgeBaseRequest {
    knowledgeBaseId: Id;
  }
  export interface DeleteKnowledgeBaseResponse {
    knowledgeBaseId: Id;
    status: KnowledgeBaseStatus;
  }
  export type Description = string;
  export interface DisassociateAgentKnowledgeBaseRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Draft Version of the Agent.
     */
    agentVersion: DraftVersion;
    /**
     * Id generated at the server side when a Knowledge Base is associated to an Agent
     */
    knowledgeBaseId: Id;
  }
  export interface DisassociateAgentKnowledgeBaseResponse {
  }
  export type DraftVersion = string;
  export type FailureReason = string;
  export type FailureReasons = FailureReason[];
  export type FieldName = string;
  export interface FixedSizeChunkingConfiguration {
    /**
     * The maximum number of tokens per chunk.
     */
    maxTokens: FixedSizeChunkingConfigurationMaxTokensInteger;
    /**
     * The overlap percentage between adjacent chunks.
     */
    overlapPercentage: FixedSizeChunkingConfigurationOverlapPercentageInteger;
  }
  export type FixedSizeChunkingConfigurationMaxTokensInteger = number;
  export type FixedSizeChunkingConfigurationOverlapPercentageInteger = number;
  export interface GetAgentActionGroupRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Version number generated when a version is created
     */
    agentVersion: Version;
    /**
     * Id generated at the server side when an Agent Action Group is created
     */
    actionGroupId: Id;
  }
  export interface GetAgentActionGroupResponse {
    agentActionGroup: AgentActionGroup;
  }
  export interface GetAgentAliasRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Id generated at the server side when an Agent Alias is created
     */
    agentAliasId: AgentAliasId;
  }
  export interface GetAgentAliasResponse {
    agentAlias: AgentAlias;
  }
  export interface GetAgentKnowledgeBaseRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Version number generated when a version is created
     */
    agentVersion: Version;
    /**
     * Id generated at the server side when a Knowledge Base is associated
     */
    knowledgeBaseId: Id;
  }
  export interface GetAgentKnowledgeBaseResponse {
    agentKnowledgeBase: AgentKnowledgeBase;
  }
  export interface GetAgentRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
  }
  export interface GetAgentResponse {
    agent: Agent;
  }
  export interface GetAgentVersionRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    agentVersion: NumericalVersion;
  }
  export interface GetAgentVersionResponse {
    agentVersion: AgentVersion;
  }
  export interface GetDataSourceRequest {
    knowledgeBaseId: Id;
    dataSourceId: Id;
  }
  export interface GetDataSourceResponse {
    dataSource: DataSource;
  }
  export interface GetIngestionJobRequest {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    ingestionJobId: Id;
  }
  export interface GetIngestionJobResponse {
    ingestionJob: IngestionJob;
  }
  export interface GetKnowledgeBaseRequest {
    knowledgeBaseId: Id;
  }
  export interface GetKnowledgeBaseResponse {
    knowledgeBase: KnowledgeBase;
  }
  export type Id = string;
  export interface InferenceConfiguration {
    temperature?: Temperature;
    topP?: TopP;
    topK?: TopK;
    maximumLength?: MaximumLength;
    stopSequences?: StopSequences;
  }
  export interface IngestionJob {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    ingestionJobId: Id;
    description?: Description;
    status: IngestionJobStatus;
    statistics?: IngestionJobStatistics;
    failureReasons?: FailureReasons;
    startedAt: DateTimestamp;
    updatedAt: DateTimestamp;
  }
  export interface IngestionJobFilter {
    attribute: IngestionJobFilterAttribute;
    operator: IngestionJobFilterOperator;
    values: IngestionJobFilterValues;
  }
  export type IngestionJobFilterAttribute = "STATUS"|string;
  export type IngestionJobFilterOperator = "EQ"|string;
  export type IngestionJobFilterValue = string;
  export type IngestionJobFilterValues = IngestionJobFilterValue[];
  export type IngestionJobFilters = IngestionJobFilter[];
  export interface IngestionJobSortBy {
    attribute: IngestionJobSortByAttribute;
    order: SortOrder;
  }
  export type IngestionJobSortByAttribute = "STATUS"|"STARTED_AT"|string;
  export interface IngestionJobStatistics {
    /**
     * Number of scanned documents
     */
    numberOfDocumentsScanned?: PrimitiveLong;
    /**
     * Number of indexed documents
     */
    numberOfNewDocumentsIndexed?: PrimitiveLong;
    /**
     * Number of modified documents indexed
     */
    numberOfModifiedDocumentsIndexed?: PrimitiveLong;
    /**
     * Number of deleted documents
     */
    numberOfDocumentsDeleted?: PrimitiveLong;
    /**
     * Number of failed documents
     */
    numberOfDocumentsFailed?: PrimitiveLong;
  }
  export type IngestionJobStatus = "STARTING"|"IN_PROGRESS"|"COMPLETE"|"FAILED"|string;
  export type IngestionJobSummaries = IngestionJobSummary[];
  export interface IngestionJobSummary {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    ingestionJobId: Id;
    description?: Description;
    status: IngestionJobStatus;
    startedAt: DateTimestamp;
    updatedAt: DateTimestamp;
    statistics?: IngestionJobStatistics;
  }
  export type Instruction = string;
  export type KmsKeyArn = string;
  export interface KnowledgeBase {
    knowledgeBaseId: Id;
    name: Name;
    knowledgeBaseArn: KnowledgeBaseArn;
    description?: Description;
    roleArn: KnowledgeBaseRoleArn;
    knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
    storageConfiguration: StorageConfiguration;
    status: KnowledgeBaseStatus;
    createdAt: DateTimestamp;
    updatedAt: DateTimestamp;
    failureReasons?: FailureReasons;
  }
  export type KnowledgeBaseArn = string;
  export interface KnowledgeBaseConfiguration {
    type: KnowledgeBaseType;
    vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
  }
  export type KnowledgeBaseRoleArn = string;
  export type KnowledgeBaseState = "ENABLED"|"DISABLED"|string;
  export type KnowledgeBaseStatus = "CREATING"|"ACTIVE"|"DELETING"|"UPDATING"|"FAILED"|string;
  export type KnowledgeBaseStorageType = "OPENSEARCH_SERVERLESS"|"PINECONE"|"REDIS_ENTERPRISE_CLOUD"|string;
  export type KnowledgeBaseSummaries = KnowledgeBaseSummary[];
  export interface KnowledgeBaseSummary {
    knowledgeBaseId: Id;
    name: Name;
    description?: Description;
    status: KnowledgeBaseStatus;
    updatedAt: DateTimestamp;
  }
  export type KnowledgeBaseType = "VECTOR"|string;
  export type LambdaArn = string;
  export interface ListAgentActionGroupsRequest {
    /**
     * Id generated at the server side when an Agent is Listed
     */
    agentId: Id;
    /**
     * Id generated at the server side when an Agent is Listed
     */
    agentVersion: Version;
    maxResults?: MaxResults;
    nextToken?: NextToken;
  }
  export interface ListAgentActionGroupsResponse {
    actionGroupSummaries: ActionGroupSummaries;
    nextToken?: NextToken;
  }
  export interface ListAgentAliasesRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    maxResults?: MaxResults;
    nextToken?: NextToken;
  }
  export interface ListAgentAliasesResponse {
    agentAliasSummaries: AgentAliasSummaries;
    nextToken?: NextToken;
  }
  export interface ListAgentKnowledgeBasesRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Version number generated when a version is created
     */
    agentVersion: Version;
    maxResults?: MaxResults;
    nextToken?: NextToken;
  }
  export interface ListAgentKnowledgeBasesResponse {
    agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummaries;
    nextToken?: NextToken;
  }
  export interface ListAgentVersionsRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    maxResults?: MaxResults;
    nextToken?: NextToken;
  }
  export interface ListAgentVersionsResponse {
    agentVersionSummaries: AgentVersionSummaries;
    nextToken?: NextToken;
  }
  export interface ListAgentsRequest {
    maxResults?: MaxResults;
    nextToken?: NextToken;
  }
  export interface ListAgentsResponse {
    agentSummaries: AgentSummaries;
    nextToken?: NextToken;
  }
  export interface ListDataSourcesRequest {
    knowledgeBaseId: Id;
    maxResults?: MaxResults;
    nextToken?: NextToken;
  }
  export interface ListDataSourcesResponse {
    dataSourceSummaries: DataSourceSummaries;
    nextToken?: NextToken;
  }
  export interface ListIngestionJobsRequest {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    filters?: IngestionJobFilters;
    sortBy?: IngestionJobSortBy;
    maxResults?: MaxResults;
    nextToken?: NextToken;
  }
  export interface ListIngestionJobsResponse {
    ingestionJobSummaries: IngestionJobSummaries;
    nextToken?: NextToken;
  }
  export interface ListKnowledgeBasesRequest {
    maxResults?: MaxResults;
    nextToken?: NextToken;
  }
  export interface ListKnowledgeBasesResponse {
    knowledgeBaseSummaries: KnowledgeBaseSummaries;
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    resourceArn: TaggableResourcesArn;
  }
  export interface ListTagsForResourceResponse {
    tags?: TagsMap;
  }
  export type MaxResults = number;
  export type MaximumLength = number;
  export type ModelIdentifier = string;
  export type Name = string;
  export type NextToken = string;
  export type NumericalVersion = string;
  export type OpenSearchServerlessCollectionArn = string;
  export interface OpenSearchServerlessConfiguration {
    collectionArn: OpenSearchServerlessCollectionArn;
    vectorIndexName: OpenSearchServerlessIndexName;
    fieldMapping: OpenSearchServerlessFieldMapping;
  }
  export interface OpenSearchServerlessFieldMapping {
    vectorField: FieldName;
    textField: FieldName;
    metadataField: FieldName;
  }
  export type OpenSearchServerlessIndexName = string;
  export type Payload = string;
  export interface PineconeConfiguration {
    connectionString: PineconeConnectionString;
    credentialsSecretArn: SecretArn;
    namespace?: PineconeNamespace;
    fieldMapping: PineconeFieldMapping;
  }
  export type PineconeConnectionString = string;
  export interface PineconeFieldMapping {
    textField: FieldName;
    metadataField: FieldName;
  }
  export type PineconeNamespace = string;
  export interface PrepareAgentRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
  }
  export interface PrepareAgentResponse {
    agentId: Id;
    agentStatus: AgentStatus;
    agentVersion: Version;
    preparedAt: DateTimestamp;
  }
  export type PrimitiveLong = number;
  export interface PromptConfiguration {
    promptType?: PromptType;
    promptCreationMode?: CreationMode;
    promptState?: PromptState;
    basePromptTemplate?: BasePromptTemplate;
    inferenceConfiguration?: InferenceConfiguration;
    parserMode?: CreationMode;
  }
  export type PromptConfigurations = PromptConfiguration[];
  export interface PromptOverrideConfiguration {
    promptConfigurations: PromptConfigurations;
    overrideLambda?: LambdaArn;
  }
  export type PromptState = "ENABLED"|"DISABLED"|string;
  export type PromptType = "PRE_PROCESSING"|"ORCHESTRATION"|"POST_PROCESSING"|"KNOWLEDGE_BASE_RESPONSE_GENERATION"|string;
  export type RecommendedAction = string;
  export type RecommendedActions = RecommendedAction[];
  export interface RedisEnterpriseCloudConfiguration {
    endpoint: RedisEnterpriseCloudEndpoint;
    vectorIndexName: RedisEnterpriseCloudIndexName;
    credentialsSecretArn: SecretArn;
    fieldMapping: RedisEnterpriseCloudFieldMapping;
  }
  export type RedisEnterpriseCloudEndpoint = string;
  export interface RedisEnterpriseCloudFieldMapping {
    vectorField: FieldName;
    textField: FieldName;
    metadataField: FieldName;
  }
  export type RedisEnterpriseCloudIndexName = string;
  export type S3BucketArn = string;
  export type S3BucketName = string;
  export interface S3DataSourceConfiguration {
    bucketArn: S3BucketArn;
    inclusionPrefixes?: S3Prefixes;
  }
  export interface S3Identifier {
    s3BucketName?: S3BucketName;
    s3ObjectKey?: S3ObjectKey;
  }
  export type S3ObjectKey = string;
  export type S3Prefix = string;
  export type S3Prefixes = S3Prefix[];
  export type SecretArn = string;
  export interface ServerSideEncryptionConfiguration {
    kmsKeyArn?: KmsKeyArn;
  }
  export type SessionTTL = number;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export interface StartIngestionJobRequest {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    clientToken?: ClientToken;
    description?: Description;
  }
  export interface StartIngestionJobResponse {
    ingestionJob: IngestionJob;
  }
  export type StopSequences = String[];
  export interface StorageConfiguration {
    type: KnowledgeBaseStorageType;
    opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration;
    pineconeConfiguration?: PineconeConfiguration;
    redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration;
  }
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    resourceArn: TaggableResourcesArn;
    tags: TagsMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TaggableResourcesArn = string;
  export type TagsMap = {[key: string]: TagValue};
  export type Temperature = number;
  export type TopK = number;
  export type TopP = number;
  export interface UntagResourceRequest {
    resourceArn: TaggableResourcesArn;
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAgentActionGroupRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Draft Version of the Agent.
     */
    agentVersion: DraftVersion;
    /**
     * Id generated at the server side when an Action Group is created under Agent
     */
    actionGroupId: Id;
    actionGroupName: Name;
    description?: Description;
    parentActionGroupSignature?: ActionGroupSignature;
    actionGroupExecutor?: ActionGroupExecutor;
    actionGroupState?: ActionGroupState;
    apiSchema?: APISchema;
  }
  export interface UpdateAgentActionGroupResponse {
    agentActionGroup: AgentActionGroup;
  }
  export interface UpdateAgentAliasRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Id generated at the server side when an Agent Alias is created
     */
    agentAliasId: AgentAliasId;
    agentAliasName: Name;
    description?: Description;
    routingConfiguration?: AgentAliasRoutingConfiguration;
  }
  export interface UpdateAgentAliasResponse {
    agentAlias: AgentAlias;
  }
  export interface UpdateAgentKnowledgeBaseRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    /**
     * Draft Version of the Agent.
     */
    agentVersion: DraftVersion;
    /**
     * Id generated at the server side when a Knowledge Base is associated to an Agent
     */
    knowledgeBaseId: Id;
    description?: Description;
    knowledgeBaseState?: KnowledgeBaseState;
  }
  export interface UpdateAgentKnowledgeBaseResponse {
    agentKnowledgeBase: AgentKnowledgeBase;
  }
  export interface UpdateAgentRequest {
    /**
     * Id generated at the server side when an Agent is created
     */
    agentId: Id;
    agentName: Name;
    instruction?: Instruction;
    foundationModel?: ModelIdentifier;
    description?: Description;
    idleSessionTTLInSeconds?: SessionTTL;
    agentResourceRoleArn: AgentRoleArn;
    customerEncryptionKeyArn?: KmsKeyArn;
    promptOverrideConfiguration?: PromptOverrideConfiguration;
  }
  export interface UpdateAgentResponse {
    agent: Agent;
  }
  export interface UpdateDataSourceRequest {
    knowledgeBaseId: Id;
    dataSourceId: Id;
    name: Name;
    description?: Description;
    dataSourceConfiguration: DataSourceConfiguration;
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    vectorIngestionConfiguration?: VectorIngestionConfiguration;
  }
  export interface UpdateDataSourceResponse {
    dataSource: DataSource;
  }
  export interface UpdateKnowledgeBaseRequest {
    knowledgeBaseId: Id;
    name: Name;
    description?: Description;
    roleArn: KnowledgeBaseRoleArn;
    knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
    storageConfiguration: StorageConfiguration;
  }
  export interface UpdateKnowledgeBaseResponse {
    knowledgeBase: KnowledgeBase;
  }
  export interface VectorIngestionConfiguration {
    chunkingConfiguration?: ChunkingConfiguration;
  }
  export interface VectorKnowledgeBaseConfiguration {
    embeddingModelArn: BedrockEmbeddingModelArn;
  }
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-06-05"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the BedrockAgent client.
   */
  export import Types = BedrockAgent;
}
export = BedrockAgent;
