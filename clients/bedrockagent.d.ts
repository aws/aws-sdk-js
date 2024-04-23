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
   * Associates a knowledge base with an agent. If a knowledge base is associated and its indexState is set to Enabled, the agent queries the knowledge base for information to augment its response to the user.
   */
  associateAgentKnowledgeBase(params: BedrockAgent.Types.AssociateAgentKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.AssociateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.AssociateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Associates a knowledge base with an agent. If a knowledge base is associated and its indexState is set to Enabled, the agent queries the knowledge base for information to augment its response to the user.
   */
  associateAgentKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.AssociateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.AssociateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers.   Specify the following fields for security purposes.    agentResourceRoleArn – The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent.   (Optional) customerEncryptionKeyArn – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent.   (Optional) idleSessionTTLinSeconds – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeAgent request begins a new session.     To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts.   If you agent fails to be created, the response returns a list of failureReasons alongside a list of recommendedActions for you to troubleshoot.  
   */
  createAgent(params: BedrockAgent.Types.CreateAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentResponse) => void): Request<BedrockAgent.Types.CreateAgentResponse, AWSError>;
  /**
   * Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers.   Specify the following fields for security purposes.    agentResourceRoleArn – The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent.   (Optional) customerEncryptionKeyArn – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent.   (Optional) idleSessionTTLinSeconds – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeAgent request begins a new session.     To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts.   If you agent fails to be created, the response returns a list of failureReasons alongside a list of recommendedActions for you to troubleshoot.  
   */
  createAgent(callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentResponse) => void): Request<BedrockAgent.Types.CreateAgentResponse, AWSError>;
  /**
   * Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them. To allow your agent to request the user for additional information when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.UserInput. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
   */
  createAgentActionGroup(params: BedrockAgent.Types.CreateAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.CreateAgentActionGroupResponse, AWSError>;
  /**
   * Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them. To allow your agent to request the user for additional information when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.UserInput. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
   */
  createAgentActionGroup(callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.CreateAgentActionGroupResponse, AWSError>;
  /**
   * Creates an alias of an agent that can be used to deploy the agent.
   */
  createAgentAlias(params: BedrockAgent.Types.CreateAgentAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentAliasResponse) => void): Request<BedrockAgent.Types.CreateAgentAliasResponse, AWSError>;
  /**
   * Creates an alias of an agent that can be used to deploy the agent.
   */
  createAgentAlias(callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentAliasResponse) => void): Request<BedrockAgent.Types.CreateAgentAliasResponse, AWSError>;
  /**
   * Sets up a data source to be added to a knowledge base.  You can't change the chunkingConfiguration after you create the data source. 
   */
  createDataSource(params: BedrockAgent.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateDataSourceResponse) => void): Request<BedrockAgent.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Sets up a data source to be added to a knowledge base.  You can't change the chunkingConfiguration after you create the data source. 
   */
  createDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.CreateDataSourceResponse) => void): Request<BedrockAgent.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a knowledge base that contains data sources from which information can be queried and used by LLMs. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see Set up your data for ingestion.  If you prefer to let Amazon Bedrock create and manage a vector store for you in Amazon OpenSearch Service, use the console. For more information, see Create a knowledge base.    Provide the name and an optional description.   Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the roleArn field.   Provide the embedding model to use in the embeddingModelArn field in the knowledgeBaseConfiguration object.   Provide the configuration for your vector store in the storageConfiguration object.   For an Amazon OpenSearch Service database, use the opensearchServerlessConfiguration object. For more information, see Create a vector store in Amazon OpenSearch Service.   For an Amazon Aurora database, use the RdsConfiguration object. For more information, see Create a vector store in Amazon Aurora.   For a Pinecone database, use the pineconeConfiguration object. For more information, see Create a vector store in Pinecone.   For a Redis Enterprise Cloud database, use the redisEnterpriseCloudConfiguration object. For more information, see Create a vector store in Redis Enterprise Cloud.    
   */
  createKnowledgeBase(params: BedrockAgent.Types.CreateKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.CreateKnowledgeBaseResponse, AWSError>;
  /**
   * Creates a knowledge base that contains data sources from which information can be queried and used by LLMs. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see Set up your data for ingestion.  If you prefer to let Amazon Bedrock create and manage a vector store for you in Amazon OpenSearch Service, use the console. For more information, see Create a knowledge base.    Provide the name and an optional description.   Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the roleArn field.   Provide the embedding model to use in the embeddingModelArn field in the knowledgeBaseConfiguration object.   Provide the configuration for your vector store in the storageConfiguration object.   For an Amazon OpenSearch Service database, use the opensearchServerlessConfiguration object. For more information, see Create a vector store in Amazon OpenSearch Service.   For an Amazon Aurora database, use the RdsConfiguration object. For more information, see Create a vector store in Amazon Aurora.   For a Pinecone database, use the pineconeConfiguration object. For more information, see Create a vector store in Pinecone.   For a Redis Enterprise Cloud database, use the redisEnterpriseCloudConfiguration object. For more information, see Create a vector store in Redis Enterprise Cloud.    
   */
  createKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.CreateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.CreateKnowledgeBaseResponse, AWSError>;
  /**
   * Deletes an agent.
   */
  deleteAgent(params: BedrockAgent.Types.DeleteAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentResponse) => void): Request<BedrockAgent.Types.DeleteAgentResponse, AWSError>;
  /**
   * Deletes an agent.
   */
  deleteAgent(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentResponse) => void): Request<BedrockAgent.Types.DeleteAgentResponse, AWSError>;
  /**
   * Deletes an action group in an agent.
   */
  deleteAgentActionGroup(params: BedrockAgent.Types.DeleteAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentActionGroupResponse) => void): Request<BedrockAgent.Types.DeleteAgentActionGroupResponse, AWSError>;
  /**
   * Deletes an action group in an agent.
   */
  deleteAgentActionGroup(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentActionGroupResponse) => void): Request<BedrockAgent.Types.DeleteAgentActionGroupResponse, AWSError>;
  /**
   * Deletes an alias of an agent.
   */
  deleteAgentAlias(params: BedrockAgent.Types.DeleteAgentAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentAliasResponse) => void): Request<BedrockAgent.Types.DeleteAgentAliasResponse, AWSError>;
  /**
   * Deletes an alias of an agent.
   */
  deleteAgentAlias(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentAliasResponse) => void): Request<BedrockAgent.Types.DeleteAgentAliasResponse, AWSError>;
  /**
   * Deletes a version of an agent.
   */
  deleteAgentVersion(params: BedrockAgent.Types.DeleteAgentVersionRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentVersionResponse) => void): Request<BedrockAgent.Types.DeleteAgentVersionResponse, AWSError>;
  /**
   * Deletes a version of an agent.
   */
  deleteAgentVersion(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteAgentVersionResponse) => void): Request<BedrockAgent.Types.DeleteAgentVersionResponse, AWSError>;
  /**
   * Deletes a data source from a knowledge base.
   */
  deleteDataSource(params: BedrockAgent.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteDataSourceResponse) => void): Request<BedrockAgent.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes a data source from a knowledge base.
   */
  deleteDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteDataSourceResponse) => void): Request<BedrockAgent.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a DisassociateAgentKnowledgeBase request.
   */
  deleteKnowledgeBase(params: BedrockAgent.Types.DeleteKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DeleteKnowledgeBaseResponse, AWSError>;
  /**
   * Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a DisassociateAgentKnowledgeBase request.
   */
  deleteKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DeleteKnowledgeBaseResponse, AWSError>;
  /**
   * Disassociates a knowledge base from an agent.
   */
  disassociateAgentKnowledgeBase(params: BedrockAgent.Types.DisassociateAgentKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DisassociateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DisassociateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Disassociates a knowledge base from an agent.
   */
  disassociateAgentKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.DisassociateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DisassociateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Gets information about an agent.
   */
  getAgent(params: BedrockAgent.Types.GetAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentResponse) => void): Request<BedrockAgent.Types.GetAgentResponse, AWSError>;
  /**
   * Gets information about an agent.
   */
  getAgent(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentResponse) => void): Request<BedrockAgent.Types.GetAgentResponse, AWSError>;
  /**
   * Gets information about an action group for an agent.
   */
  getAgentActionGroup(params: BedrockAgent.Types.GetAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentActionGroupResponse) => void): Request<BedrockAgent.Types.GetAgentActionGroupResponse, AWSError>;
  /**
   * Gets information about an action group for an agent.
   */
  getAgentActionGroup(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentActionGroupResponse) => void): Request<BedrockAgent.Types.GetAgentActionGroupResponse, AWSError>;
  /**
   * Gets information about an alias of an agent.
   */
  getAgentAlias(params: BedrockAgent.Types.GetAgentAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentAliasResponse) => void): Request<BedrockAgent.Types.GetAgentAliasResponse, AWSError>;
  /**
   * Gets information about an alias of an agent.
   */
  getAgentAlias(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentAliasResponse) => void): Request<BedrockAgent.Types.GetAgentAliasResponse, AWSError>;
  /**
   * Gets information about a knowledge base associated with an agent.
   */
  getAgentKnowledgeBase(params: BedrockAgent.Types.GetAgentKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.GetAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Gets information about a knowledge base associated with an agent.
   */
  getAgentKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.GetAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Gets details about a version of an agent.
   */
  getAgentVersion(params: BedrockAgent.Types.GetAgentVersionRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentVersionResponse) => void): Request<BedrockAgent.Types.GetAgentVersionResponse, AWSError>;
  /**
   * Gets details about a version of an agent.
   */
  getAgentVersion(callback?: (err: AWSError, data: BedrockAgent.Types.GetAgentVersionResponse) => void): Request<BedrockAgent.Types.GetAgentVersionResponse, AWSError>;
  /**
   * Gets information about a data source.
   */
  getDataSource(params: BedrockAgent.Types.GetDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetDataSourceResponse) => void): Request<BedrockAgent.Types.GetDataSourceResponse, AWSError>;
  /**
   * Gets information about a data source.
   */
  getDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.GetDataSourceResponse) => void): Request<BedrockAgent.Types.GetDataSourceResponse, AWSError>;
  /**
   * Gets information about a ingestion job, in which a data source is added to a knowledge base.
   */
  getIngestionJob(params: BedrockAgent.Types.GetIngestionJobRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetIngestionJobResponse) => void): Request<BedrockAgent.Types.GetIngestionJobResponse, AWSError>;
  /**
   * Gets information about a ingestion job, in which a data source is added to a knowledge base.
   */
  getIngestionJob(callback?: (err: AWSError, data: BedrockAgent.Types.GetIngestionJobResponse) => void): Request<BedrockAgent.Types.GetIngestionJobResponse, AWSError>;
  /**
   * Gets information about a knoweldge base.
   */
  getKnowledgeBase(params: BedrockAgent.Types.GetKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.GetKnowledgeBaseResponse, AWSError>;
  /**
   * Gets information about a knoweldge base.
   */
  getKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.GetKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.GetKnowledgeBaseResponse, AWSError>;
  /**
   * Lists the action groups for an agent and information about each one.
   */
  listAgentActionGroups(params: BedrockAgent.Types.ListAgentActionGroupsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentActionGroupsResponse) => void): Request<BedrockAgent.Types.ListAgentActionGroupsResponse, AWSError>;
  /**
   * Lists the action groups for an agent and information about each one.
   */
  listAgentActionGroups(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentActionGroupsResponse) => void): Request<BedrockAgent.Types.ListAgentActionGroupsResponse, AWSError>;
  /**
   * Lists the aliases of an agent and information about each one.
   */
  listAgentAliases(params: BedrockAgent.Types.ListAgentAliasesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentAliasesResponse) => void): Request<BedrockAgent.Types.ListAgentAliasesResponse, AWSError>;
  /**
   * Lists the aliases of an agent and information about each one.
   */
  listAgentAliases(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentAliasesResponse) => void): Request<BedrockAgent.Types.ListAgentAliasesResponse, AWSError>;
  /**
   * Lists knowledge bases associated with an agent and information about each one.
   */
  listAgentKnowledgeBases(params: BedrockAgent.Types.ListAgentKnowledgeBasesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentKnowledgeBasesResponse) => void): Request<BedrockAgent.Types.ListAgentKnowledgeBasesResponse, AWSError>;
  /**
   * Lists knowledge bases associated with an agent and information about each one.
   */
  listAgentKnowledgeBases(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentKnowledgeBasesResponse) => void): Request<BedrockAgent.Types.ListAgentKnowledgeBasesResponse, AWSError>;
  /**
   * Lists the versions of an agent and information about each version.
   */
  listAgentVersions(params: BedrockAgent.Types.ListAgentVersionsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentVersionsResponse) => void): Request<BedrockAgent.Types.ListAgentVersionsResponse, AWSError>;
  /**
   * Lists the versions of an agent and information about each version.
   */
  listAgentVersions(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentVersionsResponse) => void): Request<BedrockAgent.Types.ListAgentVersionsResponse, AWSError>;
  /**
   * Lists the agents belonging to an account and information about each agent.
   */
  listAgents(params: BedrockAgent.Types.ListAgentsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentsResponse) => void): Request<BedrockAgent.Types.ListAgentsResponse, AWSError>;
  /**
   * Lists the agents belonging to an account and information about each agent.
   */
  listAgents(callback?: (err: AWSError, data: BedrockAgent.Types.ListAgentsResponse) => void): Request<BedrockAgent.Types.ListAgentsResponse, AWSError>;
  /**
   * Lists the data sources in a knowledge base and information about each one.
   */
  listDataSources(params: BedrockAgent.Types.ListDataSourcesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListDataSourcesResponse) => void): Request<BedrockAgent.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists the data sources in a knowledge base and information about each one.
   */
  listDataSources(callback?: (err: AWSError, data: BedrockAgent.Types.ListDataSourcesResponse) => void): Request<BedrockAgent.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists the ingestion jobs for a data source and information about each of them.
   */
  listIngestionJobs(params: BedrockAgent.Types.ListIngestionJobsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListIngestionJobsResponse) => void): Request<BedrockAgent.Types.ListIngestionJobsResponse, AWSError>;
  /**
   * Lists the ingestion jobs for a data source and information about each of them.
   */
  listIngestionJobs(callback?: (err: AWSError, data: BedrockAgent.Types.ListIngestionJobsResponse) => void): Request<BedrockAgent.Types.ListIngestionJobsResponse, AWSError>;
  /**
   * Lists the knowledge bases in an account and information about each of them.
   */
  listKnowledgeBases(params: BedrockAgent.Types.ListKnowledgeBasesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListKnowledgeBasesResponse) => void): Request<BedrockAgent.Types.ListKnowledgeBasesResponse, AWSError>;
  /**
   * Lists the knowledge bases in an account and information about each of them.
   */
  listKnowledgeBases(callback?: (err: AWSError, data: BedrockAgent.Types.ListKnowledgeBasesResponse) => void): Request<BedrockAgent.Types.ListKnowledgeBasesResponse, AWSError>;
  /**
   * List all the tags for the resource you specify.
   */
  listTagsForResource(params: BedrockAgent.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListTagsForResourceResponse) => void): Request<BedrockAgent.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List all the tags for the resource you specify.
   */
  listTagsForResource(callback?: (err: AWSError, data: BedrockAgent.Types.ListTagsForResourceResponse) => void): Request<BedrockAgent.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Creates a DRAFT version of the agent that can be used for internal testing.
   */
  prepareAgent(params: BedrockAgent.Types.PrepareAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.PrepareAgentResponse) => void): Request<BedrockAgent.Types.PrepareAgentResponse, AWSError>;
  /**
   * Creates a DRAFT version of the agent that can be used for internal testing.
   */
  prepareAgent(callback?: (err: AWSError, data: BedrockAgent.Types.PrepareAgentResponse) => void): Request<BedrockAgent.Types.PrepareAgentResponse, AWSError>;
  /**
   * Begins an ingestion job, in which a data source is added to a knowledge base.
   */
  startIngestionJob(params: BedrockAgent.Types.StartIngestionJobRequest, callback?: (err: AWSError, data: BedrockAgent.Types.StartIngestionJobResponse) => void): Request<BedrockAgent.Types.StartIngestionJobResponse, AWSError>;
  /**
   * Begins an ingestion job, in which a data source is added to a knowledge base.
   */
  startIngestionJob(callback?: (err: AWSError, data: BedrockAgent.Types.StartIngestionJobResponse) => void): Request<BedrockAgent.Types.StartIngestionJobResponse, AWSError>;
  /**
   * Associate tags with a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
   */
  tagResource(params: BedrockAgent.Types.TagResourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.TagResourceResponse) => void): Request<BedrockAgent.Types.TagResourceResponse, AWSError>;
  /**
   * Associate tags with a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
   */
  tagResource(callback?: (err: AWSError, data: BedrockAgent.Types.TagResourceResponse) => void): Request<BedrockAgent.Types.TagResourceResponse, AWSError>;
  /**
   * Remove tags from a resource.
   */
  untagResource(params: BedrockAgent.Types.UntagResourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UntagResourceResponse) => void): Request<BedrockAgent.Types.UntagResourceResponse, AWSError>;
  /**
   * Remove tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: BedrockAgent.Types.UntagResourceResponse) => void): Request<BedrockAgent.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the configuration of an agent.
   */
  updateAgent(params: BedrockAgent.Types.UpdateAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentResponse) => void): Request<BedrockAgent.Types.UpdateAgentResponse, AWSError>;
  /**
   * Updates the configuration of an agent.
   */
  updateAgent(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentResponse) => void): Request<BedrockAgent.Types.UpdateAgentResponse, AWSError>;
  /**
   * Updates the configuration for an action group for an agent.
   */
  updateAgentActionGroup(params: BedrockAgent.Types.UpdateAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.UpdateAgentActionGroupResponse, AWSError>;
  /**
   * Updates the configuration for an action group for an agent.
   */
  updateAgentActionGroup(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.UpdateAgentActionGroupResponse, AWSError>;
  /**
   * Updates configurations for an alias of an agent.
   */
  updateAgentAlias(params: BedrockAgent.Types.UpdateAgentAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentAliasResponse) => void): Request<BedrockAgent.Types.UpdateAgentAliasResponse, AWSError>;
  /**
   * Updates configurations for an alias of an agent.
   */
  updateAgentAlias(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentAliasResponse) => void): Request<BedrockAgent.Types.UpdateAgentAliasResponse, AWSError>;
  /**
   * Updates the configuration for a knowledge base that has been associated with an agent.
   */
  updateAgentKnowledgeBase(params: BedrockAgent.Types.UpdateAgentKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Updates the configuration for a knowledge base that has been associated with an agent.
   */
  updateAgentKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateAgentKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateAgentKnowledgeBaseResponse, AWSError>;
  /**
   * Updates configurations for a data source.  You can't change the chunkingConfiguration after you create the data source. Specify the existing chunkingConfiguration. 
   */
  updateDataSource(params: BedrockAgent.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateDataSourceResponse) => void): Request<BedrockAgent.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates configurations for a data source.  You can't change the chunkingConfiguration after you create the data source. Specify the existing chunkingConfiguration. 
   */
  updateDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateDataSourceResponse) => void): Request<BedrockAgent.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same. You can change the following fields:    name     description     roleArn    You can't change the knowledgeBaseConfiguration or storageConfiguration fields, so you must specify the same configurations as when you created the knowledge base. You can send a GetKnowledgeBase request and copy the same configurations.
   */
  updateKnowledgeBase(params: BedrockAgent.Types.UpdateKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateKnowledgeBaseResponse, AWSError>;
  /**
   * Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same. You can change the following fields:    name     description     roleArn    You can't change the knowledgeBaseConfiguration or storageConfiguration fields, so you must specify the same configurations as when you created the knowledge base. You can send a GetKnowledgeBase request and copy the same configurations.
   */
  updateKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateKnowledgeBaseResponse, AWSError>;
}
declare namespace BedrockAgent {
  export interface APISchema {
    /**
     * The JSON or YAML-formatted payload defining the OpenAPI schema for the action group. For more information, see Action group OpenAPI schemas.
     */
    payload?: Payload;
    /**
     * Contains details about the S3 object containing the OpenAPI schema for the action group. For more information, see Action group OpenAPI schemas.
     */
    s3?: S3Identifier;
  }
  export interface ActionGroupExecutor {
    /**
     * To return the action group invocation results directly in the InvokeAgent response, specify RETURN_CONTROL.
     */
    customControl?: CustomControlMethod;
    /**
     * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
     */
    lambda?: LambdaArn;
  }
  export type ActionGroupSignature = "AMAZON.UserInput"|string;
  export type ActionGroupState = "ENABLED"|"DISABLED"|string;
  export type ActionGroupSummaries = ActionGroupSummary[];
  export interface ActionGroupSummary {
    /**
     * The unique identifier of the action group.
     */
    actionGroupId: Id;
    /**
     * The name of the action group.
     */
    actionGroupName: Name;
    /**
     * Specifies whether the action group is available for the agent to invoke or not when sending an InvokeAgent request.
     */
    actionGroupState: ActionGroupState;
    /**
     * The description of the action group.
     */
    description?: Description;
    /**
     * The time at which the action group was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface Agent {
    /**
     * The Amazon Resource Name (ARN) of the agent.
     */
    agentArn: AgentArn;
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * The name of the agent.
     */
    agentName: Name;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
     */
    agentResourceRoleArn: AgentRoleArn;
    /**
     * The status of the agent and whether it is ready for use. The following statuses are possible:   CREATING – The agent is being created.   PREPARING – The agent is being prepared.   PREPARED – The agent is prepared and ready to be invoked.   NOT_PREPARED – The agent has been created but not yet prepared.   FAILED – The agent API operation failed.   UPDATING – The agent is being updated.   DELETING – The agent is being deleted.  
     */
    agentStatus: AgentStatus;
    /**
     * The version of the agent.
     */
    agentVersion: DraftVersion;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The time at which the agent was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that encrypts the agent.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The description of the agent.
     */
    description?: Description;
    /**
     * Contains reasons that the agent-related API that you invoked failed.
     */
    failureReasons?: FailureReasons;
    /**
     * The foundation model used for orchestration by the agent.
     */
    foundationModel?: ModelIdentifier;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     */
    idleSessionTTLInSeconds: SessionTTL;
    /**
     * Instructions that tell the agent what it should do and how it should interact with users.
     */
    instruction?: Instruction;
    /**
     * The time at which the agent was last prepared.
     */
    preparedAt?: DateTimestamp;
    /**
     * Contains configurations to override prompt templates in different parts of an agent sequence. For more information, see Advanced prompts.
     */
    promptOverrideConfiguration?: PromptOverrideConfiguration;
    /**
     * Contains recommended actions to take for the agent-related API that you invoked to succeed.
     */
    recommendedActions?: RecommendedActions;
    /**
     * The time at which the agent was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface AgentActionGroup {
    /**
     * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
     */
    actionGroupExecutor?: ActionGroupExecutor;
    /**
     * The unique identifier of the action group.
     */
    actionGroupId: Id;
    /**
     * The name of the action group.
     */
    actionGroupName: Name;
    /**
     * Specifies whether the action group is available for the agent to invoke or not when sending an InvokeAgent request.
     */
    actionGroupState: ActionGroupState;
    /**
     * The unique identifier of the agent to which the action group belongs.
     */
    agentId: Id;
    /**
     * The version of the agent to which the action group belongs.
     */
    agentVersion: Version;
    /**
     * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see Action group OpenAPI schemas.
     */
    apiSchema?: APISchema;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The time at which the action group was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the action group.
     */
    description?: Description;
    /**
     * Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group.
     */
    functionSchema?: FunctionSchema;
    /**
     * If this field is set as AMAZON.UserInput, the agent can request the user for additional information when trying to complete a task. The description, apiSchema, and actionGroupExecutor fields must be blank for this action group. During orchestration, if the agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
     */
    parentActionSignature?: ActionGroupSignature;
    /**
     * The time at which the action group was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface AgentAlias {
    /**
     * The Amazon Resource Name (ARN) of the alias of the agent.
     */
    agentAliasArn: AgentAliasArn;
    /**
     * Contains details about the history of the alias.
     */
    agentAliasHistoryEvents?: AgentAliasHistoryEvents;
    /**
     * The unique identifier of the alias of the agent.
     */
    agentAliasId: AgentAliasId;
    /**
     * The name of the alias of the agent.
     */
    agentAliasName: Name;
    /**
     * The status of the alias of the agent and whether it is ready for use. The following statuses are possible:   CREATING – The agent alias is being created.   PREPARED – The agent alias is finished being created or updated and is ready to be invoked.   FAILED – The agent alias API operation failed.   UPDATING – The agent alias is being updated.   DELETING – The agent alias is being deleted.  
     */
    agentAliasStatus: AgentAliasStatus;
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The time at which the alias of the agent was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the alias of the agent.
     */
    description?: Description;
    /**
     * Contains details about the routing configuration of the alias.
     */
    routingConfiguration: AgentAliasRoutingConfiguration;
    /**
     * The time at which the alias was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type AgentAliasArn = string;
  export interface AgentAliasHistoryEvent {
    /**
     * The date that the alias stopped being associated to the version in the routingConfiguration object
     */
    endDate?: DateTimestamp;
    /**
     * Contains details about the version of the agent with which the alias is associated.
     */
    routingConfiguration?: AgentAliasRoutingConfiguration;
    /**
     * The date that the alias began being associated to the version in the routingConfiguration object.
     */
    startDate?: DateTimestamp;
  }
  export type AgentAliasHistoryEvents = AgentAliasHistoryEvent[];
  export type AgentAliasId = string;
  export type AgentAliasRoutingConfiguration = AgentAliasRoutingConfigurationListItem[];
  export interface AgentAliasRoutingConfigurationListItem {
    /**
     * The version of the agent with which the alias is associated.
     */
    agentVersion: Version;
  }
  export type AgentAliasStatus = "CREATING"|"PREPARED"|"FAILED"|"UPDATING"|"DELETING"|string;
  export type AgentAliasSummaries = AgentAliasSummary[];
  export interface AgentAliasSummary {
    /**
     * Contains details about 
     */
    agentAliasId: AgentAliasId;
    /**
     * The name of the alias.
     */
    agentAliasName: Name;
    /**
     * The status of the alias.
     */
    agentAliasStatus: AgentAliasStatus;
    /**
     * The time at which the alias of the agent was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the alias.
     */
    description?: Description;
    /**
     * Contains details about the version of the agent with which the alias is associated.
     */
    routingConfiguration?: AgentAliasRoutingConfiguration;
    /**
     * The time at which the alias was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type AgentArn = string;
  export interface AgentKnowledgeBase {
    /**
     * The unique identifier of the agent with which the knowledge base is associated.
     */
    agentId: Id;
    /**
     * The version of the agent with which the knowledge base is associated.
     */
    agentVersion: Version;
    /**
     * The time at which the association between the agent and the knowledge base was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the association between the agent and the knowledge base.
     */
    description: Description;
    /**
     * The unique identifier of the association between the agent and the knowledge base.
     */
    knowledgeBaseId: Id;
    /**
     * Specifies whether to use the knowledge base or not when sending an InvokeAgent request.
     */
    knowledgeBaseState: KnowledgeBaseState;
    /**
     * The time at which the association between the agent and the knowledge base was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type AgentKnowledgeBaseSummaries = AgentKnowledgeBaseSummary[];
  export interface AgentKnowledgeBaseSummary {
    /**
     * The description of the knowledge base associated with an agent.
     */
    description?: Description;
    /**
     * The unique identifier of the knowledge base associated with an agent.
     */
    knowledgeBaseId: Id;
    /**
     * Specifies whether the agent uses the knowledge base or not when sending an InvokeAgent request.
     */
    knowledgeBaseState: KnowledgeBaseState;
    /**
     * The time at which the knowledge base associated with an agent was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type AgentRoleArn = string;
  export type AgentStatus = "CREATING"|"PREPARING"|"PREPARED"|"NOT_PREPARED"|"DELETING"|"FAILED"|"VERSIONING"|"UPDATING"|string;
  export type AgentSummaries = AgentSummary[];
  export interface AgentSummary {
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * The name of the agent.
     */
    agentName: Name;
    /**
     * The status of the agent.
     */
    agentStatus: AgentStatus;
    /**
     * The description of the agent.
     */
    description?: Description;
    /**
     * The latest version of the agent.
     */
    latestAgentVersion?: Version;
    /**
     * The time at which the agent was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface AgentVersion {
    /**
     * The Amazon Resource Name (ARN) of the agent that the version belongs to.
     */
    agentArn: AgentArn;
    /**
     * The unique identifier of the agent that the version belongs to.
     */
    agentId: Id;
    /**
     * The name of the agent that the version belongs to.
     */
    agentName: Name;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
     */
    agentResourceRoleArn: AgentRoleArn;
    /**
     * The status of the agent that the version belongs to.
     */
    agentStatus: AgentStatus;
    /**
     * The time at which the version was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that encrypts the agent.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The description of the version.
     */
    description?: Description;
    /**
     * A list of reasons that the API operation on the version failed.
     */
    failureReasons?: FailureReasons;
    /**
     * The foundation model that the version invokes.
     */
    foundationModel?: ModelIdentifier;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     */
    idleSessionTTLInSeconds: SessionTTL;
    /**
     * The instructions provided to the agent.
     */
    instruction?: Instruction;
    /**
     * Contains configurations to override prompt templates in different parts of an agent sequence. For more information, see Advanced prompts.
     */
    promptOverrideConfiguration?: PromptOverrideConfiguration;
    /**
     * A list of recommended actions to take for the failed API operation on the version to succeed.
     */
    recommendedActions?: RecommendedActions;
    /**
     * The time at which the version was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * The version number.
     */
    version: NumericalVersion;
  }
  export type AgentVersionSummaries = AgentVersionSummary[];
  export interface AgentVersionSummary {
    /**
     * The name of the agent to which the version belongs.
     */
    agentName: Name;
    /**
     * The status of the agent to which the version belongs.
     */
    agentStatus: AgentStatus;
    /**
     * The version of the agent.
     */
    agentVersion: Version;
    /**
     * The time at which the version was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the version of the agent.
     */
    description?: Description;
    /**
     * The time at which the version was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface AssociateAgentKnowledgeBaseRequest {
    /**
     * The unique identifier of the agent with which you want to associate the knowledge base.
     */
    agentId: Id;
    /**
     * The version of the agent with which you want to associate the knowledge base.
     */
    agentVersion: DraftVersion;
    /**
     * A description of what the agent should use the knowledge base for.
     */
    description: Description;
    /**
     * The unique identifier of the knowledge base to associate with the agent.
     */
    knowledgeBaseId: Id;
    /**
     * Specifies whether to use the knowledge base or not when sending an InvokeAgent request.
     */
    knowledgeBaseState?: KnowledgeBaseState;
  }
  export interface AssociateAgentKnowledgeBaseResponse {
    /**
     * Contains details about the knowledge base that has been associated with the agent.
     */
    agentKnowledgeBase: AgentKnowledgeBase;
  }
  export type BasePromptTemplate = string;
  export type BedrockEmbeddingModelArn = string;
  export type Boolean = boolean;
  export type BucketOwnerAccountId = string;
  export interface ChunkingConfiguration {
    /**
     * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.    FIXED_SIZE – Amazon Bedrock splits your source data into chunks of the approximate size that you set in the fixedSizeChunkingConfiguration.    NONE – Amazon Bedrock treats each file as one chunk. If you choose this option, you may want to pre-process your documents by splitting them into separate files.  
     */
    chunkingStrategy: ChunkingStrategy;
    /**
     * Configurations for when you choose fixed-size chunking. If you set the chunkingStrategy as NONE, exclude this field.
     */
    fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
  }
  export type ChunkingStrategy = "FIXED_SIZE"|"NONE"|string;
  export type ClientToken = string;
  export type ColumnName = string;
  export interface CreateAgentActionGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
     */
    actionGroupExecutor?: ActionGroupExecutor;
    /**
     * The name to give the action group.
     */
    actionGroupName: Name;
    /**
     * Specifies whether the action group is available for the agent to invoke or not when sending an InvokeAgent request.
     */
    actionGroupState?: ActionGroupState;
    /**
     * The unique identifier of the agent for which to create the action group.
     */
    agentId: Id;
    /**
     * The version of the agent for which to create the action group.
     */
    agentVersion: DraftVersion;
    /**
     * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see Action group OpenAPI schemas.
     */
    apiSchema?: APISchema;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * A description of the action group.
     */
    description?: Description;
    /**
     * Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.
     */
    functionSchema?: FunctionSchema;
    /**
     * To allow your agent to request the user for additional information when trying to complete a task, set this field to AMAZON.UserInput. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
     */
    parentActionGroupSignature?: ActionGroupSignature;
  }
  export interface CreateAgentActionGroupResponse {
    /**
     * Contains details about the action group that was created.
     */
    agentActionGroup: AgentActionGroup;
  }
  export interface CreateAgentAliasRequest {
    /**
     * The name of the alias.
     */
    agentAliasName: Name;
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * A description of the alias of the agent.
     */
    description?: Description;
    /**
     * Contains details about the routing configuration of the alias.
     */
    routingConfiguration?: AgentAliasRoutingConfiguration;
    /**
     * Any tags that you want to attach to the alias of the agent.
     */
    tags?: TagsMap;
  }
  export interface CreateAgentAliasResponse {
    /**
     * Contains details about the alias that was created.
     */
    agentAlias: AgentAlias;
  }
  export interface CreateAgentRequest {
    /**
     * A name for the agent that you create.
     */
    agentName: Name;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
     */
    agentResourceRoleArn?: AgentRoleArn;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * A description of the agent.
     */
    description?: Description;
    /**
     * The foundation model to be used for orchestration by the agent you create.
     */
    foundationModel?: ModelIdentifier;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     */
    idleSessionTTLInSeconds?: SessionTTL;
    /**
     * Instructions that tell the agent what it should do and how it should interact with users.
     */
    instruction?: Instruction;
    /**
     * Contains configurations to override prompts in different parts of an agent sequence. For more information, see Advanced prompts.
     */
    promptOverrideConfiguration?: PromptOverrideConfiguration;
    /**
     * Any tags that you want to attach to the agent.
     */
    tags?: TagsMap;
  }
  export interface CreateAgentResponse {
    /**
     * Contains details about the agent created.
     */
    agent: Agent;
  }
  export interface CreateDataSourceRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The deletion policy for the requested data source
     */
    dataDeletionPolicy?: DataDeletionPolicy;
    /**
     * Contains metadata about where the data source is stored.
     */
    dataSourceConfiguration: DataSourceConfiguration;
    /**
     * A description of the data source.
     */
    description?: Description;
    /**
     * The unique identifier of the knowledge base to which to add the data source.
     */
    knowledgeBaseId: Id;
    /**
     * The name of the data source.
     */
    name: Name;
    /**
     * Contains details about the server-side encryption for the data source.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * Contains details about how to ingest the documents in the data source.
     */
    vectorIngestionConfiguration?: VectorIngestionConfiguration;
  }
  export interface CreateDataSourceResponse {
    /**
     * Contains details about the data source.
     */
    dataSource: DataSource;
  }
  export interface CreateKnowledgeBaseRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * A description of the knowledge base.
     */
    description?: Description;
    /**
     * Contains details about the embeddings model used for the knowledge base.
     */
    knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
    /**
     * A name for the knowledge base.
     */
    name: Name;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
     */
    roleArn: KnowledgeBaseRoleArn;
    /**
     * Contains details about the configuration of the vector database used for the knowledge base.
     */
    storageConfiguration: StorageConfiguration;
    /**
     * Specify the key-value pairs for the tags that you want to attach to your knowledge base in this object.
     */
    tags?: TagsMap;
  }
  export interface CreateKnowledgeBaseResponse {
    /**
     * Contains details about the knowledge base.
     */
    knowledgeBase: KnowledgeBase;
  }
  export type CreationMode = "DEFAULT"|"OVERRIDDEN"|string;
  export type CustomControlMethod = "RETURN_CONTROL"|string;
  export type DataDeletionPolicy = "RETAIN"|"DELETE"|string;
  export interface DataSource {
    /**
     * The time at which the data source was created.
     */
    createdAt: DateTimestamp;
    /**
     * The deletion policy for the data source.
     */
    dataDeletionPolicy?: DataDeletionPolicy;
    /**
     * Contains details about how the data source is stored.
     */
    dataSourceConfiguration: DataSourceConfiguration;
    /**
     * The unique identifier of the data source.
     */
    dataSourceId: Id;
    /**
     * The description of the data source.
     */
    description?: Description;
    /**
     * The details of the failure reasons related to the data source.
     */
    failureReasons?: FailureReasons;
    /**
     * The unique identifier of the knowledge base to which the data source belongs.
     */
    knowledgeBaseId: Id;
    /**
     * The name of the data source.
     */
    name: Name;
    /**
     * Contains details about the configuration of the server-side encryption.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * The status of the data source. The following statuses are possible:   Available – The data source has been created and is ready for ingestion into the knowledge base.   Deleting – The data source is being deleted.  
     */
    status: DataSourceStatus;
    /**
     * The time at which the data source was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * Contains details about how to ingest the documents in the data source.
     */
    vectorIngestionConfiguration?: VectorIngestionConfiguration;
  }
  export interface DataSourceConfiguration {
    /**
     * Contains details about the configuration of the S3 object containing the data source.
     */
    s3Configuration?: S3DataSourceConfiguration;
    /**
     * The type of storage for the data source.
     */
    type: DataSourceType;
  }
  export type DataSourceStatus = "AVAILABLE"|"DELETING"|"DELETE_UNSUCCESSFUL"|string;
  export type DataSourceSummaries = DataSourceSummary[];
  export interface DataSourceSummary {
    /**
     * The unique identifier of the data source.
     */
    dataSourceId: Id;
    /**
     * The description of the data source.
     */
    description?: Description;
    /**
     * The unique identifier of the knowledge base to which the data source belongs.
     */
    knowledgeBaseId: Id;
    /**
     * The name of the data source.
     */
    name: Name;
    /**
     * The status of the data source.
     */
    status: DataSourceStatus;
    /**
     * The time at which the data source was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type DataSourceType = "S3"|string;
  export type DateTimestamp = Date;
  export interface DeleteAgentActionGroupRequest {
    /**
     * The unique identifier of the action group to delete.
     */
    actionGroupId: Id;
    /**
     * The unique identifier of the agent that the action group belongs to.
     */
    agentId: Id;
    /**
     * The version of the agent that the action group belongs to.
     */
    agentVersion: DraftVersion;
    /**
     * By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.
     */
    skipResourceInUseCheck?: Boolean;
  }
  export interface DeleteAgentActionGroupResponse {
  }
  export interface DeleteAgentAliasRequest {
    /**
     * The unique identifier of the alias to delete.
     */
    agentAliasId: AgentAliasId;
    /**
     * The unique identifier of the agent that the alias belongs to.
     */
    agentId: Id;
  }
  export interface DeleteAgentAliasResponse {
    /**
     * The unique identifier of the alias that was deleted.
     */
    agentAliasId: AgentAliasId;
    /**
     * The status of the alias.
     */
    agentAliasStatus: AgentAliasStatus;
    /**
     * The unique identifier of the agent that the alias belongs to.
     */
    agentId: Id;
  }
  export interface DeleteAgentRequest {
    /**
     * The unique identifier of the agent to delete.
     */
    agentId: Id;
    /**
     * By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.
     */
    skipResourceInUseCheck?: Boolean;
  }
  export interface DeleteAgentResponse {
    /**
     * The unique identifier of the agent that was deleted.
     */
    agentId: Id;
    /**
     * The status of the agent.
     */
    agentStatus: AgentStatus;
  }
  export interface DeleteAgentVersionRequest {
    /**
     * The unique identifier of the agent that the version belongs to.
     */
    agentId: Id;
    /**
     * The version of the agent to delete.
     */
    agentVersion: NumericalVersion;
    /**
     * By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.
     */
    skipResourceInUseCheck?: Boolean;
  }
  export interface DeleteAgentVersionResponse {
    /**
     * The unique identifier of the agent that the version belongs to.
     */
    agentId: Id;
    /**
     * The status of the agent version.
     */
    agentStatus: AgentStatus;
    /**
     * The version that was deleted.
     */
    agentVersion: NumericalVersion;
  }
  export interface DeleteDataSourceRequest {
    /**
     * The unique identifier of the data source to delete.
     */
    dataSourceId: Id;
    /**
     * The unique identifier of the knowledge base from which to delete the data source.
     */
    knowledgeBaseId: Id;
  }
  export interface DeleteDataSourceResponse {
    /**
     * The unique identifier of the data source that was deleted.
     */
    dataSourceId: Id;
    /**
     * The unique identifier of the knowledge base to which the data source that was deleted belonged.
     */
    knowledgeBaseId: Id;
    /**
     * The status of the data source.
     */
    status: DataSourceStatus;
  }
  export interface DeleteKnowledgeBaseRequest {
    /**
     * The unique identifier of the knowledge base to delete.
     */
    knowledgeBaseId: Id;
  }
  export interface DeleteKnowledgeBaseResponse {
    /**
     * The unique identifier of the knowledge base that was deleted.
     */
    knowledgeBaseId: Id;
    /**
     * The status of the knowledge base and whether it has been successfully deleted.
     */
    status: KnowledgeBaseStatus;
  }
  export type Description = string;
  export interface DisassociateAgentKnowledgeBaseRequest {
    /**
     * The unique identifier of the agent from which to disassociate the knowledge base.
     */
    agentId: Id;
    /**
     * The version of the agent from which to disassociate the knowledge base.
     */
    agentVersion: DraftVersion;
    /**
     * The unique identifier of the knowledge base to disassociate.
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
     * The maximum number of tokens to include in a chunk.
     */
    maxTokens: FixedSizeChunkingConfigurationMaxTokensInteger;
    /**
     * The percentage of overlap between adjacent chunks of a data source.
     */
    overlapPercentage: FixedSizeChunkingConfigurationOverlapPercentageInteger;
  }
  export type FixedSizeChunkingConfigurationMaxTokensInteger = number;
  export type FixedSizeChunkingConfigurationOverlapPercentageInteger = number;
  export interface Function {
    /**
     * A description of the function and its purpose.
     */
    description?: FunctionDescription;
    /**
     * A name for the function.
     */
    name: Name;
    /**
     * The parameters that the agent elicits from the user to fulfill the function.
     */
    parameters?: ParameterMap;
  }
  export type FunctionDescription = string;
  export interface FunctionSchema {
    /**
     * A list of functions that each define an action in the action group.
     */
    functions?: Functions;
  }
  export type Functions = Function[];
  export interface GetAgentActionGroupRequest {
    /**
     * The unique identifier of the action group for which to get information.
     */
    actionGroupId: Id;
    /**
     * The unique identifier of the agent that the action group belongs to.
     */
    agentId: Id;
    /**
     * The version of the agent that the action group belongs to.
     */
    agentVersion: Version;
  }
  export interface GetAgentActionGroupResponse {
    /**
     * Contains details about the action group.
     */
    agentActionGroup: AgentActionGroup;
  }
  export interface GetAgentAliasRequest {
    /**
     * The unique identifier of the alias for which to get information.
     */
    agentAliasId: AgentAliasId;
    /**
     * The unique identifier of the agent to which the alias to get information belongs.
     */
    agentId: Id;
  }
  export interface GetAgentAliasResponse {
    /**
     * Contains information about the alias.
     */
    agentAlias: AgentAlias;
  }
  export interface GetAgentKnowledgeBaseRequest {
    /**
     * The unique identifier of the agent with which the knowledge base is associated.
     */
    agentId: Id;
    /**
     * The version of the agent with which the knowledge base is associated.
     */
    agentVersion: Version;
    /**
     * The unique identifier of the knowledge base associated with the agent.
     */
    knowledgeBaseId: Id;
  }
  export interface GetAgentKnowledgeBaseResponse {
    /**
     * Contains details about a knowledge base attached to an agent.
     */
    agentKnowledgeBase: AgentKnowledgeBase;
  }
  export interface GetAgentRequest {
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
  }
  export interface GetAgentResponse {
    /**
     * Contains details about the agent.
     */
    agent: Agent;
  }
  export interface GetAgentVersionRequest {
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * The version of the agent.
     */
    agentVersion: NumericalVersion;
  }
  export interface GetAgentVersionResponse {
    /**
     * Contains details about the version of the agent.
     */
    agentVersion: AgentVersion;
  }
  export interface GetDataSourceRequest {
    /**
     * The unique identifier of the data source.
     */
    dataSourceId: Id;
    /**
     * The unique identifier of the knowledge base that the data source was added to.
     */
    knowledgeBaseId: Id;
  }
  export interface GetDataSourceResponse {
    /**
     * Contains details about the data source.
     */
    dataSource: DataSource;
  }
  export interface GetIngestionJobRequest {
    /**
     * The unique identifier of the data source in the ingestion job.
     */
    dataSourceId: Id;
    /**
     * The unique identifier of the ingestion job.
     */
    ingestionJobId: Id;
    /**
     * The unique identifier of the knowledge base for which the ingestion job applies.
     */
    knowledgeBaseId: Id;
  }
  export interface GetIngestionJobResponse {
    /**
     * Contains details about the ingestion job.
     */
    ingestionJob: IngestionJob;
  }
  export interface GetKnowledgeBaseRequest {
    /**
     * The unique identifier of the knowledge base for which to get information.
     */
    knowledgeBaseId: Id;
  }
  export interface GetKnowledgeBaseResponse {
    /**
     * Contains details about the knowledge base.
     */
    knowledgeBase: KnowledgeBase;
  }
  export type Id = string;
  export interface InferenceConfiguration {
    /**
     * The maximum number of tokens to allow in the generated response.
     */
    maximumLength?: MaximumLength;
    /**
     * A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.
     */
    stopSequences?: StopSequences;
    /**
     * The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.
     */
    temperature?: Temperature;
    /**
     * While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for topK is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set topK to 50, the model selects the next token from among the top 50 most likely choices.
     */
    topK?: TopK;
    /**
     * While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for Top P determines the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set topP to 80, the model only selects the next token from the top 80% of the probability distribution of next tokens.
     */
    topP?: TopP;
  }
  export interface IngestionJob {
    /**
     * The unique identifier of the ingested data source.
     */
    dataSourceId: Id;
    /**
     * The description of the ingestion job.
     */
    description?: Description;
    /**
     * A list of reasons that the ingestion job failed.
     */
    failureReasons?: FailureReasons;
    /**
     * The unique identifier of the ingestion job.
     */
    ingestionJobId: Id;
    /**
     * The unique identifier of the knowledge base to which the data source is being added.
     */
    knowledgeBaseId: Id;
    /**
     * The time at which the ingestion job started.
     */
    startedAt: DateTimestamp;
    /**
     * Contains statistics about the ingestion job.
     */
    statistics?: IngestionJobStatistics;
    /**
     * The status of the ingestion job.
     */
    status: IngestionJobStatus;
    /**
     * The time at which the ingestion job was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface IngestionJobFilter {
    /**
     * The attribute by which to filter the results.
     */
    attribute: IngestionJobFilterAttribute;
    /**
     * The operation to carry out between the attribute and the values.
     */
    operator: IngestionJobFilterOperator;
    /**
     * A list of values for the attribute.
     */
    values: IngestionJobFilterValues;
  }
  export type IngestionJobFilterAttribute = "STATUS"|string;
  export type IngestionJobFilterOperator = "EQ"|string;
  export type IngestionJobFilterValue = string;
  export type IngestionJobFilterValues = IngestionJobFilterValue[];
  export type IngestionJobFilters = IngestionJobFilter[];
  export interface IngestionJobSortBy {
    /**
     * The attribute by which to sort the results.
     */
    attribute: IngestionJobSortByAttribute;
    /**
     * The order by which to sort the results.
     */
    order: SortOrder;
  }
  export type IngestionJobSortByAttribute = "STATUS"|"STARTED_AT"|string;
  export interface IngestionJobStatistics {
    /**
     * The number of source documents that was deleted.
     */
    numberOfDocumentsDeleted?: PrimitiveLong;
    /**
     * The number of source documents that failed to be ingested.
     */
    numberOfDocumentsFailed?: PrimitiveLong;
    /**
     * The total number of source documents that were scanned. Includes new, updated, and unchanged documents.
     */
    numberOfDocumentsScanned?: PrimitiveLong;
    /**
     * The number of metadata files that were updated or deleted.
     */
    numberOfMetadataDocumentsModified?: PrimitiveLong;
    /**
     * The total number of metadata files that were scanned. Includes new, updated, and unchanged files.
     */
    numberOfMetadataDocumentsScanned?: PrimitiveLong;
    /**
     * The number of modified source documents in the data source that were successfully indexed.
     */
    numberOfModifiedDocumentsIndexed?: PrimitiveLong;
    /**
     * The number of new source documents in the data source that were successfully indexed.
     */
    numberOfNewDocumentsIndexed?: PrimitiveLong;
  }
  export type IngestionJobStatus = "STARTING"|"IN_PROGRESS"|"COMPLETE"|"FAILED"|string;
  export type IngestionJobSummaries = IngestionJobSummary[];
  export interface IngestionJobSummary {
    /**
     * The unique identifier of the data source in the ingestion job.
     */
    dataSourceId: Id;
    /**
     * The description of the ingestion job.
     */
    description?: Description;
    /**
     * The unique identifier of the ingestion job.
     */
    ingestionJobId: Id;
    /**
     * The unique identifier of the knowledge base to which the data source is added.
     */
    knowledgeBaseId: Id;
    /**
     * The time at which the ingestion job was started.
     */
    startedAt: DateTimestamp;
    /**
     * Contains statistics for the ingestion job.
     */
    statistics?: IngestionJobStatistics;
    /**
     * The status of the ingestion job.
     */
    status: IngestionJobStatus;
    /**
     * The time at which the ingestion job was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type Instruction = string;
  export type KmsKeyArn = string;
  export interface KnowledgeBase {
    /**
     * The time at which the knowledge base was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the knowledge base.
     */
    description?: Description;
    /**
     * A list of reasons that the API operation on the knowledge base failed.
     */
    failureReasons?: FailureReasons;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: KnowledgeBaseArn;
    /**
     * Contains details about the embeddings configuration of the knowledge base.
     */
    knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
    /**
     * The unique identifier of the knowledge base.
     */
    knowledgeBaseId: Id;
    /**
     * The name of the knowledge base.
     */
    name: Name;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
     */
    roleArn: KnowledgeBaseRoleArn;
    /**
     * The status of the knowledge base. The following statuses are possible:   CREATING – The knowledge base is being created.   ACTIVE – The knowledge base is ready to be queried.   DELETING – The knowledge base is being deleted.   UPDATING – The knowledge base is being updated.   FAILED – The knowledge base API operation failed.  
     */
    status: KnowledgeBaseStatus;
    /**
     * Contains details about the storage configuration of the knowledge base.
     */
    storageConfiguration: StorageConfiguration;
    /**
     * The time at which the knowledge base was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type KnowledgeBaseArn = string;
  export interface KnowledgeBaseConfiguration {
    /**
     * The type of data that the data source is converted into for the knowledge base.
     */
    type: KnowledgeBaseType;
    /**
     * Contains details about the embeddings model that'sused to convert the data source.
     */
    vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
  }
  export type KnowledgeBaseRoleArn = string;
  export type KnowledgeBaseState = "ENABLED"|"DISABLED"|string;
  export type KnowledgeBaseStatus = "CREATING"|"ACTIVE"|"DELETING"|"UPDATING"|"FAILED"|"DELETE_UNSUCCESSFUL"|string;
  export type KnowledgeBaseStorageType = "OPENSEARCH_SERVERLESS"|"PINECONE"|"REDIS_ENTERPRISE_CLOUD"|"RDS"|string;
  export type KnowledgeBaseSummaries = KnowledgeBaseSummary[];
  export interface KnowledgeBaseSummary {
    /**
     * The description of the knowledge base.
     */
    description?: Description;
    /**
     * The unique identifier of the knowledge base.
     */
    knowledgeBaseId: Id;
    /**
     * The name of the knowledge base.
     */
    name: Name;
    /**
     * The status of the knowledge base.
     */
    status: KnowledgeBaseStatus;
    /**
     * The time at which the knowledge base was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type KnowledgeBaseType = "VECTOR"|string;
  export type LambdaArn = string;
  export interface ListAgentActionGroupsRequest {
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * The version of the agent.
     */
    agentVersion: Version;
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentActionGroupsResponse {
    /**
     * A list of objects, each of which contains information about an action group.
     */
    actionGroupSummaries: ActionGroupSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentAliasesRequest {
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentAliasesResponse {
    /**
     * A list of objects, each of which contains information about an alias of the agent.
     */
    agentAliasSummaries: AgentAliasSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentKnowledgeBasesRequest {
    /**
     * The unique identifier of the agent for which to return information about knowledge bases associated with it.
     */
    agentId: Id;
    /**
     * The version of the agent for which to return information about knowledge bases associated with it.
     */
    agentVersion: Version;
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentKnowledgeBasesResponse {
    /**
     * A list of objects, each of which contains information about a knowledge base associated with the agent.
     */
    agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentVersionsRequest {
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentVersionsResponse {
    /**
     * A list of objects, each of which contains information about a version of the agent.
     */
    agentVersionSummaries: AgentVersionSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentsRequest {
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAgentsResponse {
    /**
     * A list of objects, each of which contains information about an agent.
     */
    agentSummaries: AgentSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListDataSourcesRequest {
    /**
     * The unique identifier of the knowledge base for which to return a list of information.
     */
    knowledgeBaseId: Id;
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListDataSourcesResponse {
    /**
     * A list of objects, each of which contains information about a data source.
     */
    dataSourceSummaries: DataSourceSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListIngestionJobsRequest {
    /**
     * The unique identifier of the data source for which to return ingestion jobs.
     */
    dataSourceId: Id;
    /**
     * Contains a definition of a filter for which to filter the results.
     */
    filters?: IngestionJobFilters;
    /**
     * The unique identifier of the knowledge base for which to return ingestion jobs.
     */
    knowledgeBaseId: Id;
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
    /**
     * Contains details about how to sort the results.
     */
    sortBy?: IngestionJobSortBy;
  }
  export interface ListIngestionJobsResponse {
    /**
     * A list of objects, each of which contains information about an ingestion job.
     */
    ingestionJobSummaries: IngestionJobSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListKnowledgeBasesRequest {
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListKnowledgeBasesResponse {
    /**
     * A list of objects, each of which contains information about a knowledge base.
     */
    knowledgeBaseSummaries: KnowledgeBaseSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource for which to list tags.
     */
    resourceArn: TaggableResourcesArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The key-value pairs for the tags associated with the resource.
     */
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
    /**
     * The Amazon Resource Name (ARN) of the OpenSearch Service vector store.
     */
    collectionArn: OpenSearchServerlessCollectionArn;
    /**
     * Contains the names of the fields to which to map information about the vector store.
     */
    fieldMapping: OpenSearchServerlessFieldMapping;
    /**
     * The name of the vector store.
     */
    vectorIndexName: OpenSearchServerlessIndexName;
  }
  export interface OpenSearchServerlessFieldMapping {
    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    metadataField: FieldName;
    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    textField: FieldName;
    /**
     * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     */
    vectorField: FieldName;
  }
  export type OpenSearchServerlessIndexName = string;
  export type ParameterDescription = string;
  export interface ParameterDetail {
    /**
     * A description of the parameter. Helps the foundation model determine how to elicit the parameters from the user.
     */
    description?: ParameterDescription;
    /**
     * Whether the parameter is required for the agent to complete the function for action group invocation.
     */
    required?: Boolean;
    /**
     * The data type of the parameter.
     */
    type: Type;
  }
  export type ParameterMap = {[key: string]: ParameterDetail};
  export type Payload = string;
  export interface PineconeConfiguration {
    /**
     * The endpoint URL for your index management page.
     */
    connectionString: PineconeConnectionString;
    /**
     * The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Pinecone API key.
     */
    credentialsSecretArn: SecretArn;
    /**
     * Contains the names of the fields to which to map information about the vector store.
     */
    fieldMapping: PineconeFieldMapping;
    /**
     * The namespace to be used to write new data to your database.
     */
    namespace?: PineconeNamespace;
  }
  export type PineconeConnectionString = string;
  export interface PineconeFieldMapping {
    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    metadataField: FieldName;
    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    textField: FieldName;
  }
  export type PineconeNamespace = string;
  export interface PrepareAgentRequest {
    /**
     * The unique identifier of the agent for which to create a DRAFT version.
     */
    agentId: Id;
  }
  export interface PrepareAgentResponse {
    /**
     * The unique identifier of the agent for which the DRAFT version was created.
     */
    agentId: Id;
    /**
     * The status of the DRAFT version and whether it is ready for use.
     */
    agentStatus: AgentStatus;
    /**
     * The version of the agent.
     */
    agentVersion: Version;
    /**
     * The time at which the DRAFT version of the agent was last prepared.
     */
    preparedAt: DateTimestamp;
  }
  export type PrimitiveLong = number;
  export interface PromptConfiguration {
    /**
     * Defines the prompt template with which to replace the default prompt template. You can use placeholder variables in the base prompt template to customize the prompt. For more information, see Prompt template placeholder variables.
     */
    basePromptTemplate?: BasePromptTemplate;
    /**
     * Contains inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the promptType. For more information, see Inference parameters for foundation models.
     */
    inferenceConfiguration?: InferenceConfiguration;
    /**
     * Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the promptType. If you set the field as OVERRIDEN, the overrideLambda field in the PromptOverrideConfiguration must be specified with the ARN of a Lambda function.
     */
    parserMode?: CreationMode;
    /**
     * Specifies whether to override the default prompt template for this promptType. Set this value to OVERRIDDEN to use the prompt that you provide in the basePromptTemplate. If you leave it as DEFAULT, the agent uses a default prompt template.
     */
    promptCreationMode?: CreationMode;
    /**
     * Specifies whether to allow the agent to carry out the step specified in the promptType. If you set this value to DISABLED, the agent skips that step. The default state for each promptType is as follows.    PRE_PROCESSING – ENABLED     ORCHESTRATION – ENABLED     KNOWLEDGE_BASE_RESPONSE_GENERATION – ENABLED     POST_PROCESSING – DISABLED   
     */
    promptState?: PromptState;
    /**
     * The step in the agent sequence that this prompt configuration applies to.
     */
    promptType?: PromptType;
  }
  export type PromptConfigurations = PromptConfiguration[];
  export interface PromptOverrideConfiguration {
    /**
     * The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. If you specify this field, at least one of the promptConfigurations must contain a parserMode value that is set to OVERRIDDEN.
     */
    overrideLambda?: LambdaArn;
    /**
     * Contains configurations to override a prompt template in one part of an agent sequence. For more information, see Advanced prompts.
     */
    promptConfigurations: PromptConfigurations;
  }
  export type PromptState = "ENABLED"|"DISABLED"|string;
  export type PromptType = "PRE_PROCESSING"|"ORCHESTRATION"|"POST_PROCESSING"|"KNOWLEDGE_BASE_RESPONSE_GENERATION"|string;
  export type RdsArn = string;
  export interface RdsConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Amazon RDS database.
     */
    credentialsSecretArn: SecretArn;
    /**
     * The name of your Amazon RDS database.
     */
    databaseName: RdsDatabaseName;
    /**
     * Contains the names of the fields to which to map information about the vector store.
     */
    fieldMapping: RdsFieldMapping;
    /**
     * The Amazon Resource Name (ARN) of the vector store.
     */
    resourceArn: RdsArn;
    /**
     * The name of the table in the database.
     */
    tableName: RdsTableName;
  }
  export type RdsDatabaseName = string;
  export interface RdsFieldMapping {
    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    metadataField: ColumnName;
    /**
     * The name of the field in which Amazon Bedrock stores the ID for each entry.
     */
    primaryKeyField: ColumnName;
    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    textField: ColumnName;
    /**
     * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     */
    vectorField: ColumnName;
  }
  export type RdsTableName = string;
  export type RecommendedAction = string;
  export type RecommendedActions = RecommendedAction[];
  export interface RedisEnterpriseCloudConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that is linked to your Redis Enterprise Cloud database.
     */
    credentialsSecretArn: SecretArn;
    /**
     * The endpoint URL of the Redis Enterprise Cloud database.
     */
    endpoint: RedisEnterpriseCloudEndpoint;
    /**
     * Contains the names of the fields to which to map information about the vector store.
     */
    fieldMapping: RedisEnterpriseCloudFieldMapping;
    /**
     * The name of the vector index.
     */
    vectorIndexName: RedisEnterpriseCloudIndexName;
  }
  export type RedisEnterpriseCloudEndpoint = string;
  export interface RedisEnterpriseCloudFieldMapping {
    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    metadataField: FieldName;
    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    textField: FieldName;
    /**
     * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     */
    vectorField: FieldName;
  }
  export type RedisEnterpriseCloudIndexName = string;
  export type S3BucketArn = string;
  export type S3BucketName = string;
  export interface S3DataSourceConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the bucket that contains the data source.
     */
    bucketArn: S3BucketArn;
    /**
     * The account ID for the owner of the S3 bucket.
     */
    bucketOwnerAccountId?: BucketOwnerAccountId;
    /**
     * A list of S3 prefixes that define the object containing the data sources. For more information, see Organizing objects using prefixes.
     */
    inclusionPrefixes?: S3Prefixes;
  }
  export interface S3Identifier {
    /**
     * The name of the S3 bucket.
     */
    s3BucketName?: S3BucketName;
    /**
     * The S3 object key containing the resource.
     */
    s3ObjectKey?: S3ObjectKey;
  }
  export type S3ObjectKey = string;
  export type S3Prefix = string;
  export type S3Prefixes = S3Prefix[];
  export type SecretArn = string;
  export interface ServerSideEncryptionConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the KMS key used to encrypt the resource.
     */
    kmsKeyArn?: KmsKeyArn;
  }
  export type SessionTTL = number;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export interface StartIngestionJobRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The unique identifier of the data source to ingest.
     */
    dataSourceId: Id;
    /**
     * A description of the ingestion job.
     */
    description?: Description;
    /**
     * The unique identifier of the knowledge base to which to add the data source.
     */
    knowledgeBaseId: Id;
  }
  export interface StartIngestionJobResponse {
    /**
     * An object containing information about the ingestion job.
     */
    ingestionJob: IngestionJob;
  }
  export type StopSequences = String[];
  export interface StorageConfiguration {
    /**
     * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
     */
    opensearchServerlessConfiguration?: OpenSearchServerlessConfiguration;
    /**
     * Contains the storage configuration of the knowledge base in Pinecone.
     */
    pineconeConfiguration?: PineconeConfiguration;
    /**
     * Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see Create a vector index in Amazon RDS.
     */
    rdsConfiguration?: RdsConfiguration;
    /**
     * Contains the storage configuration of the knowledge base in Redis Enterprise Cloud.
     */
    redisEnterpriseCloudConfiguration?: RedisEnterpriseCloudConfiguration;
    /**
     * The vector store service in which the knowledge base is stored.
     */
    type: KnowledgeBaseStorageType;
  }
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to tag.
     */
    resourceArn: TaggableResourcesArn;
    /**
     * An object containing key-value pairs that define the tags to attach to the resource.
     */
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
  export type Type = "string"|"number"|"integer"|"boolean"|"array"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource from which to remove tags.
     */
    resourceArn: TaggableResourcesArn;
    /**
     * A list of keys of the tags to remove from the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAgentActionGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
     */
    actionGroupExecutor?: ActionGroupExecutor;
    /**
     * The unique identifier of the action group.
     */
    actionGroupId: Id;
    /**
     * Specifies a new name for the action group.
     */
    actionGroupName: Name;
    /**
     * Specifies whether the action group is available for the agent to invoke or not when sending an InvokeAgent request.
     */
    actionGroupState?: ActionGroupState;
    /**
     * The unique identifier of the agent for which to update the action group.
     */
    agentId: Id;
    /**
     * The unique identifier of the agent version for which to update the action group.
     */
    agentVersion: DraftVersion;
    /**
     * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see Action group OpenAPI schemas.
     */
    apiSchema?: APISchema;
    /**
     * Specifies a new name for the action group.
     */
    description?: Description;
    /**
     * Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.
     */
    functionSchema?: FunctionSchema;
    /**
     * To allow your agent to request the user for additional information when trying to complete a task, set this field to AMAZON.UserInput. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
     */
    parentActionGroupSignature?: ActionGroupSignature;
  }
  export interface UpdateAgentActionGroupResponse {
    /**
     * Contains details about the action group that was updated.
     */
    agentActionGroup: AgentActionGroup;
  }
  export interface UpdateAgentAliasRequest {
    /**
     * The unique identifier of the alias.
     */
    agentAliasId: AgentAliasId;
    /**
     * Specifies a new name for the alias.
     */
    agentAliasName: Name;
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * Specifies a new description for the alias.
     */
    description?: Description;
    /**
     * Contains details about the routing configuration of the alias.
     */
    routingConfiguration?: AgentAliasRoutingConfiguration;
  }
  export interface UpdateAgentAliasResponse {
    /**
     * Contains details about the alias that was updated.
     */
    agentAlias: AgentAlias;
  }
  export interface UpdateAgentKnowledgeBaseRequest {
    /**
     * The unique identifier of the agent associated with the knowledge base that you want to update.
     */
    agentId: Id;
    /**
     * The version of the agent associated with the knowledge base that you want to update.
     */
    agentVersion: DraftVersion;
    /**
     * Specifies a new description for the knowledge base associated with an agent.
     */
    description?: Description;
    /**
     * The unique identifier of the knowledge base that has been associated with an agent.
     */
    knowledgeBaseId: Id;
    /**
     * Specifies whether the agent uses the knowledge base or not when sending an InvokeAgent request.
     */
    knowledgeBaseState?: KnowledgeBaseState;
  }
  export interface UpdateAgentKnowledgeBaseResponse {
    /**
     * Contains details about the knowledge base that has been associated with an agent.
     */
    agentKnowledgeBase: AgentKnowledgeBase;
  }
  export interface UpdateAgentRequest {
    /**
     * The unique identifier of the agent.
     */
    agentId: Id;
    /**
     * Specifies a new name for the agent.
     */
    agentName: Name;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
     */
    agentResourceRoleArn: AgentRoleArn;
    /**
     * The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * Specifies a new description of the agent.
     */
    description?: Description;
    /**
     * Specifies a new foundation model to be used for orchestration by the agent.
     */
    foundationModel: ModelIdentifier;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     */
    idleSessionTTLInSeconds?: SessionTTL;
    /**
     * Specifies new instructions that tell the agent what it should do and how it should interact with users.
     */
    instruction?: Instruction;
    /**
     * Contains configurations to override prompts in different parts of an agent sequence. For more information, see Advanced prompts.
     */
    promptOverrideConfiguration?: PromptOverrideConfiguration;
  }
  export interface UpdateAgentResponse {
    /**
     * Contains details about the agent that was updated.
     */
    agent: Agent;
  }
  export interface UpdateDataSourceRequest {
    /**
     * The data deletion policy of the updated data source.
     */
    dataDeletionPolicy?: DataDeletionPolicy;
    /**
     * Contains details about the storage configuration of the data source.
     */
    dataSourceConfiguration: DataSourceConfiguration;
    /**
     * The unique identifier of the data source.
     */
    dataSourceId: Id;
    /**
     * Specifies a new description for the data source.
     */
    description?: Description;
    /**
     * The unique identifier of the knowledge base to which the data source belongs.
     */
    knowledgeBaseId: Id;
    /**
     * Specifies a new name for the data source.
     */
    name: Name;
    /**
     * Contains details about server-side encryption of the data source.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * Contains details about how to ingest the documents in the data source.
     */
    vectorIngestionConfiguration?: VectorIngestionConfiguration;
  }
  export interface UpdateDataSourceResponse {
    /**
     * Contains details about the data source.
     */
    dataSource: DataSource;
  }
  export interface UpdateKnowledgeBaseRequest {
    /**
     * Specifies a new description for the knowledge base.
     */
    description?: Description;
    /**
     * Specifies the configuration for the embeddings model used for the knowledge base. You must use the same configuration as when the knowledge base was created.
     */
    knowledgeBaseConfiguration: KnowledgeBaseConfiguration;
    /**
     * The unique identifier of the knowledge base to update.
     */
    knowledgeBaseId: Id;
    /**
     * Specifies a new name for the knowledge base.
     */
    name: Name;
    /**
     * Specifies a different Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
     */
    roleArn: KnowledgeBaseRoleArn;
    /**
     * Specifies the configuration for the vector store used for the knowledge base. You must use the same configuration as when the knowledge base was created.
     */
    storageConfiguration: StorageConfiguration;
  }
  export interface UpdateKnowledgeBaseResponse {
    /**
     * Contains details about the knowledge base.
     */
    knowledgeBase: KnowledgeBase;
  }
  export interface VectorIngestionConfiguration {
    /**
     * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
     */
    chunkingConfiguration?: ChunkingConfiguration;
  }
  export interface VectorKnowledgeBaseConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.
     */
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
