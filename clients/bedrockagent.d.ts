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
   * Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers.   Specify the following fields for security purposes.    agentResourceRoleArn – The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent.   (Optional) customerEncryptionKeyArn – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent.   (Optional) idleSessionTTLinSeconds – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeAgent request begins a new session.     To enable your agent to retain conversational context across multiple sessions, include a memoryConfiguration object. For more information, see Configure memory.   To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts.   If you agent fails to be created, the response returns a list of failureReasons alongside a list of recommendedActions for you to troubleshoot.  
   */
  createAgent(params: BedrockAgent.Types.CreateAgentRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentResponse) => void): Request<BedrockAgent.Types.CreateAgentResponse, AWSError>;
  /**
   * Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers.   Specify the following fields for security purposes.    agentResourceRoleArn – The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent.   (Optional) customerEncryptionKeyArn – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent.   (Optional) idleSessionTTLinSeconds – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeAgent request begins a new session.     To enable your agent to retain conversational context across multiple sessions, include a memoryConfiguration object. For more information, see Configure memory.   To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts.   If you agent fails to be created, the response returns a list of failureReasons alongside a list of recommendedActions for you to troubleshoot.  
   */
  createAgent(callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentResponse) => void): Request<BedrockAgent.Types.CreateAgentResponse, AWSError>;
  /**
   * Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them. To allow your agent to request the user for additional information when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.UserInput.  To allow your agent to generate, run, and troubleshoot code when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.CodeInterpreter.  You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
   */
  createAgentActionGroup(params: BedrockAgent.Types.CreateAgentActionGroupRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateAgentActionGroupResponse) => void): Request<BedrockAgent.Types.CreateAgentActionGroupResponse, AWSError>;
  /**
   * Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them. To allow your agent to request the user for additional information when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.UserInput.  To allow your agent to generate, run, and troubleshoot code when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.CodeInterpreter.  You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
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
   * Creates a data source connector for a knowledge base.  You can't change the chunkingConfiguration after you create the data source connector. 
   */
  createDataSource(params: BedrockAgent.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateDataSourceResponse) => void): Request<BedrockAgent.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a data source connector for a knowledge base.  You can't change the chunkingConfiguration after you create the data source connector. 
   */
  createDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.CreateDataSourceResponse) => void): Request<BedrockAgent.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a prompt flow that you can use to send an input through various steps to yield an output. Configure nodes, each of which corresponds to a step of the flow, and create connections between the nodes to create paths to different outputs. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  createFlow(params: BedrockAgent.Types.CreateFlowRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateFlowResponse) => void): Request<BedrockAgent.Types.CreateFlowResponse, AWSError>;
  /**
   * Creates a prompt flow that you can use to send an input through various steps to yield an output. Configure nodes, each of which corresponds to a step of the flow, and create connections between the nodes to create paths to different outputs. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  createFlow(callback?: (err: AWSError, data: BedrockAgent.Types.CreateFlowResponse) => void): Request<BedrockAgent.Types.CreateFlowResponse, AWSError>;
  /**
   * Creates an alias of a flow for deployment. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  createFlowAlias(params: BedrockAgent.Types.CreateFlowAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateFlowAliasResponse) => void): Request<BedrockAgent.Types.CreateFlowAliasResponse, AWSError>;
  /**
   * Creates an alias of a flow for deployment. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  createFlowAlias(callback?: (err: AWSError, data: BedrockAgent.Types.CreateFlowAliasResponse) => void): Request<BedrockAgent.Types.CreateFlowAliasResponse, AWSError>;
  /**
   * Creates a version of the flow that you can deploy. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  createFlowVersion(params: BedrockAgent.Types.CreateFlowVersionRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateFlowVersionResponse) => void): Request<BedrockAgent.Types.CreateFlowVersionResponse, AWSError>;
  /**
   * Creates a version of the flow that you can deploy. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  createFlowVersion(callback?: (err: AWSError, data: BedrockAgent.Types.CreateFlowVersionResponse) => void): Request<BedrockAgent.Types.CreateFlowVersionResponse, AWSError>;
  /**
   * Creates a knowledge base that contains data sources from which information can be queried and used by LLMs. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see Set up your data for ingestion.  If you prefer to let Amazon Bedrock create and manage a vector store for you in Amazon OpenSearch Service, use the console. For more information, see Create a knowledge base.    Provide the name and an optional description.   Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the roleArn field.   Provide the embedding model to use in the embeddingModelArn field in the knowledgeBaseConfiguration object.   Provide the configuration for your vector store in the storageConfiguration object.   For an Amazon OpenSearch Service database, use the opensearchServerlessConfiguration object. For more information, see Create a vector store in Amazon OpenSearch Service.   For an Amazon Aurora database, use the RdsConfiguration object. For more information, see Create a vector store in Amazon Aurora.   For a Pinecone database, use the pineconeConfiguration object. For more information, see Create a vector store in Pinecone.   For a Redis Enterprise Cloud database, use the redisEnterpriseCloudConfiguration object. For more information, see Create a vector store in Redis Enterprise Cloud.    
   */
  createKnowledgeBase(params: BedrockAgent.Types.CreateKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.CreateKnowledgeBaseResponse, AWSError>;
  /**
   * Creates a knowledge base that contains data sources from which information can be queried and used by LLMs. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see Set up your data for ingestion.  If you prefer to let Amazon Bedrock create and manage a vector store for you in Amazon OpenSearch Service, use the console. For more information, see Create a knowledge base.    Provide the name and an optional description.   Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the roleArn field.   Provide the embedding model to use in the embeddingModelArn field in the knowledgeBaseConfiguration object.   Provide the configuration for your vector store in the storageConfiguration object.   For an Amazon OpenSearch Service database, use the opensearchServerlessConfiguration object. For more information, see Create a vector store in Amazon OpenSearch Service.   For an Amazon Aurora database, use the RdsConfiguration object. For more information, see Create a vector store in Amazon Aurora.   For a Pinecone database, use the pineconeConfiguration object. For more information, see Create a vector store in Pinecone.   For a Redis Enterprise Cloud database, use the redisEnterpriseCloudConfiguration object. For more information, see Create a vector store in Redis Enterprise Cloud.    
   */
  createKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.CreateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.CreateKnowledgeBaseResponse, AWSError>;
  /**
   * Creates a prompt in your prompt library that you can add to a flow. For more information, see Prompt management in Amazon Bedrock, Create a prompt using Prompt management and Prompt flows in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  createPrompt(params: BedrockAgent.Types.CreatePromptRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreatePromptResponse) => void): Request<BedrockAgent.Types.CreatePromptResponse, AWSError>;
  /**
   * Creates a prompt in your prompt library that you can add to a flow. For more information, see Prompt management in Amazon Bedrock, Create a prompt using Prompt management and Prompt flows in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  createPrompt(callback?: (err: AWSError, data: BedrockAgent.Types.CreatePromptResponse) => void): Request<BedrockAgent.Types.CreatePromptResponse, AWSError>;
  /**
   * Creates a static snapshot of your prompt that can be deployed to production. For more information, see Deploy prompts using Prompt management by creating versions in the Amazon Bedrock User Guide.
   */
  createPromptVersion(params: BedrockAgent.Types.CreatePromptVersionRequest, callback?: (err: AWSError, data: BedrockAgent.Types.CreatePromptVersionResponse) => void): Request<BedrockAgent.Types.CreatePromptVersionResponse, AWSError>;
  /**
   * Creates a static snapshot of your prompt that can be deployed to production. For more information, see Deploy prompts using Prompt management by creating versions in the Amazon Bedrock User Guide.
   */
  createPromptVersion(callback?: (err: AWSError, data: BedrockAgent.Types.CreatePromptVersionResponse) => void): Request<BedrockAgent.Types.CreatePromptVersionResponse, AWSError>;
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
   * Deletes a flow.
   */
  deleteFlow(params: BedrockAgent.Types.DeleteFlowRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteFlowResponse) => void): Request<BedrockAgent.Types.DeleteFlowResponse, AWSError>;
  /**
   * Deletes a flow.
   */
  deleteFlow(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteFlowResponse) => void): Request<BedrockAgent.Types.DeleteFlowResponse, AWSError>;
  /**
   * Deletes an alias of a flow.
   */
  deleteFlowAlias(params: BedrockAgent.Types.DeleteFlowAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteFlowAliasResponse) => void): Request<BedrockAgent.Types.DeleteFlowAliasResponse, AWSError>;
  /**
   * Deletes an alias of a flow.
   */
  deleteFlowAlias(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteFlowAliasResponse) => void): Request<BedrockAgent.Types.DeleteFlowAliasResponse, AWSError>;
  /**
   * Deletes a version of a flow.
   */
  deleteFlowVersion(params: BedrockAgent.Types.DeleteFlowVersionRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteFlowVersionResponse) => void): Request<BedrockAgent.Types.DeleteFlowVersionResponse, AWSError>;
  /**
   * Deletes a version of a flow.
   */
  deleteFlowVersion(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteFlowVersionResponse) => void): Request<BedrockAgent.Types.DeleteFlowVersionResponse, AWSError>;
  /**
   * Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a DisassociateAgentKnowledgeBase request.
   */
  deleteKnowledgeBase(params: BedrockAgent.Types.DeleteKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeleteKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DeleteKnowledgeBaseResponse, AWSError>;
  /**
   * Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a DisassociateAgentKnowledgeBase request.
   */
  deleteKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.DeleteKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.DeleteKnowledgeBaseResponse, AWSError>;
  /**
   * Deletes a prompt or a version of it, depending on whether you include the promptVersion field or not. For more information, see Delete prompts from the Prompt management tool and Delete a version of a prompt from the Prompt management tool in the Amazon Bedrock User Guide.
   */
  deletePrompt(params: BedrockAgent.Types.DeletePromptRequest, callback?: (err: AWSError, data: BedrockAgent.Types.DeletePromptResponse) => void): Request<BedrockAgent.Types.DeletePromptResponse, AWSError>;
  /**
   * Deletes a prompt or a version of it, depending on whether you include the promptVersion field or not. For more information, see Delete prompts from the Prompt management tool and Delete a version of a prompt from the Prompt management tool in the Amazon Bedrock User Guide.
   */
  deletePrompt(callback?: (err: AWSError, data: BedrockAgent.Types.DeletePromptResponse) => void): Request<BedrockAgent.Types.DeletePromptResponse, AWSError>;
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
   * Retrieves information about a flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  getFlow(params: BedrockAgent.Types.GetFlowRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetFlowResponse) => void): Request<BedrockAgent.Types.GetFlowResponse, AWSError>;
  /**
   * Retrieves information about a flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  getFlow(callback?: (err: AWSError, data: BedrockAgent.Types.GetFlowResponse) => void): Request<BedrockAgent.Types.GetFlowResponse, AWSError>;
  /**
   * Retrieves information about a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  getFlowAlias(params: BedrockAgent.Types.GetFlowAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetFlowAliasResponse) => void): Request<BedrockAgent.Types.GetFlowAliasResponse, AWSError>;
  /**
   * Retrieves information about a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  getFlowAlias(callback?: (err: AWSError, data: BedrockAgent.Types.GetFlowAliasResponse) => void): Request<BedrockAgent.Types.GetFlowAliasResponse, AWSError>;
  /**
   * Retrieves information about a version of a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  getFlowVersion(params: BedrockAgent.Types.GetFlowVersionRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetFlowVersionResponse) => void): Request<BedrockAgent.Types.GetFlowVersionResponse, AWSError>;
  /**
   * Retrieves information about a version of a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  getFlowVersion(callback?: (err: AWSError, data: BedrockAgent.Types.GetFlowVersionResponse) => void): Request<BedrockAgent.Types.GetFlowVersionResponse, AWSError>;
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
   * Retrieves information about the working draft (DRAFT version) of a prompt or a version of it, depending on whether you include the promptVersion field or not. For more information, see View information about prompts using Prompt management and View information about a version of your prompt in the Amazon Bedrock User Guide.
   */
  getPrompt(params: BedrockAgent.Types.GetPromptRequest, callback?: (err: AWSError, data: BedrockAgent.Types.GetPromptResponse) => void): Request<BedrockAgent.Types.GetPromptResponse, AWSError>;
  /**
   * Retrieves information about the working draft (DRAFT version) of a prompt or a version of it, depending on whether you include the promptVersion field or not. For more information, see View information about prompts using Prompt management and View information about a version of your prompt in the Amazon Bedrock User Guide.
   */
  getPrompt(callback?: (err: AWSError, data: BedrockAgent.Types.GetPromptResponse) => void): Request<BedrockAgent.Types.GetPromptResponse, AWSError>;
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
   * Returns a list of aliases for a flow.
   */
  listFlowAliases(params: BedrockAgent.Types.ListFlowAliasesRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListFlowAliasesResponse) => void): Request<BedrockAgent.Types.ListFlowAliasesResponse, AWSError>;
  /**
   * Returns a list of aliases for a flow.
   */
  listFlowAliases(callback?: (err: AWSError, data: BedrockAgent.Types.ListFlowAliasesResponse) => void): Request<BedrockAgent.Types.ListFlowAliasesResponse, AWSError>;
  /**
   * Returns a list of information about each flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  listFlowVersions(params: BedrockAgent.Types.ListFlowVersionsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListFlowVersionsResponse) => void): Request<BedrockAgent.Types.ListFlowVersionsResponse, AWSError>;
  /**
   * Returns a list of information about each flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  listFlowVersions(callback?: (err: AWSError, data: BedrockAgent.Types.ListFlowVersionsResponse) => void): Request<BedrockAgent.Types.ListFlowVersionsResponse, AWSError>;
  /**
   * Returns a list of flows and information about each flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  listFlows(params: BedrockAgent.Types.ListFlowsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListFlowsResponse) => void): Request<BedrockAgent.Types.ListFlowsResponse, AWSError>;
  /**
   * Returns a list of flows and information about each flow. For more information, see Manage a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  listFlows(callback?: (err: AWSError, data: BedrockAgent.Types.ListFlowsResponse) => void): Request<BedrockAgent.Types.ListFlowsResponse, AWSError>;
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
   * Returns either information about the working draft (DRAFT version) of each prompt in an account, or information about of all versions of a prompt, depending on whether you include the promptIdentifier field or not. For more information, see View information about prompts using Prompt management in the Amazon Bedrock User Guide.
   */
  listPrompts(params: BedrockAgent.Types.ListPromptsRequest, callback?: (err: AWSError, data: BedrockAgent.Types.ListPromptsResponse) => void): Request<BedrockAgent.Types.ListPromptsResponse, AWSError>;
  /**
   * Returns either information about the working draft (DRAFT version) of each prompt in an account, or information about of all versions of a prompt, depending on whether you include the promptIdentifier field or not. For more information, see View information about prompts using Prompt management in the Amazon Bedrock User Guide.
   */
  listPrompts(callback?: (err: AWSError, data: BedrockAgent.Types.ListPromptsResponse) => void): Request<BedrockAgent.Types.ListPromptsResponse, AWSError>;
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
   * Prepares the DRAFT version of a flow so that it can be invoked. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  prepareFlow(params: BedrockAgent.Types.PrepareFlowRequest, callback?: (err: AWSError, data: BedrockAgent.Types.PrepareFlowResponse) => void): Request<BedrockAgent.Types.PrepareFlowResponse, AWSError>;
  /**
   * Prepares the DRAFT version of a flow so that it can be invoked. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  prepareFlow(callback?: (err: AWSError, data: BedrockAgent.Types.PrepareFlowResponse) => void): Request<BedrockAgent.Types.PrepareFlowResponse, AWSError>;
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
   * Updates the configurations for a data source connector.  You can't change the chunkingConfiguration after you create the data source connector. Specify the existing chunkingConfiguration. 
   */
  updateDataSource(params: BedrockAgent.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateDataSourceResponse) => void): Request<BedrockAgent.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates the configurations for a data source connector.  You can't change the chunkingConfiguration after you create the data source connector. Specify the existing chunkingConfiguration. 
   */
  updateDataSource(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateDataSourceResponse) => void): Request<BedrockAgent.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Modifies a flow. Include both fields that you want to keep and fields that you want to change. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  updateFlow(params: BedrockAgent.Types.UpdateFlowRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateFlowResponse) => void): Request<BedrockAgent.Types.UpdateFlowResponse, AWSError>;
  /**
   * Modifies a flow. Include both fields that you want to keep and fields that you want to change. For more information, see How it works and Create a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  updateFlow(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateFlowResponse) => void): Request<BedrockAgent.Types.UpdateFlowResponse, AWSError>;
  /**
   * Modifies the alias of a flow. Include both fields that you want to keep and ones that you want to change. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  updateFlowAlias(params: BedrockAgent.Types.UpdateFlowAliasRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateFlowAliasResponse) => void): Request<BedrockAgent.Types.UpdateFlowAliasResponse, AWSError>;
  /**
   * Modifies the alias of a flow. Include both fields that you want to keep and ones that you want to change. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.
   */
  updateFlowAlias(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateFlowAliasResponse) => void): Request<BedrockAgent.Types.UpdateFlowAliasResponse, AWSError>;
  /**
   * Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same. You can change the following fields:    name     description     roleArn    You can't change the knowledgeBaseConfiguration or storageConfiguration fields, so you must specify the same configurations as when you created the knowledge base. You can send a GetKnowledgeBase request and copy the same configurations.
   */
  updateKnowledgeBase(params: BedrockAgent.Types.UpdateKnowledgeBaseRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateKnowledgeBaseResponse, AWSError>;
  /**
   * Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same. You can change the following fields:    name     description     roleArn    You can't change the knowledgeBaseConfiguration or storageConfiguration fields, so you must specify the same configurations as when you created the knowledge base. You can send a GetKnowledgeBase request and copy the same configurations.
   */
  updateKnowledgeBase(callback?: (err: AWSError, data: BedrockAgent.Types.UpdateKnowledgeBaseResponse) => void): Request<BedrockAgent.Types.UpdateKnowledgeBaseResponse, AWSError>;
  /**
   * Modifies a prompt in your prompt library. Include both fields that you want to keep and fields that you want to replace. For more information, see Prompt management in Amazon Bedrock and Edit prompts in your prompt library in the Amazon Bedrock User Guide.
   */
  updatePrompt(params: BedrockAgent.Types.UpdatePromptRequest, callback?: (err: AWSError, data: BedrockAgent.Types.UpdatePromptResponse) => void): Request<BedrockAgent.Types.UpdatePromptResponse, AWSError>;
  /**
   * Modifies a prompt in your prompt library. Include both fields that you want to keep and fields that you want to replace. For more information, see Prompt management in Amazon Bedrock and Edit prompts in your prompt library in the Amazon Bedrock User Guide.
   */
  updatePrompt(callback?: (err: AWSError, data: BedrockAgent.Types.UpdatePromptResponse) => void): Request<BedrockAgent.Types.UpdatePromptResponse, AWSError>;
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
  export type ActionGroupSignature = "AMAZON.UserInput"|"AMAZON.CodeInterpreter"|string;
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
     * Details about the guardrail associated with the agent.
     */
    guardrailConfiguration?: GuardrailConfiguration;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     */
    idleSessionTTLInSeconds: SessionTTL;
    /**
     * Instructions that tell the agent what it should do and how it should interact with users.
     */
    instruction?: Instruction;
    /**
     * Contains memory configuration for the agent.
     */
    memoryConfiguration?: MemoryConfiguration;
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
     * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
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
     * Information on the failure of Provisioned Throughput assigned to an agent alias.
     */
    failureReasons?: FailureReasons;
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
    agentVersion?: Version;
    /**
     * Information on the Provisioned Throughput assigned to an agent alias.
     */
    provisionedThroughput?: ProvisionedModelIdentifier;
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
  export interface AgentFlowNodeConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the alias of the agent to invoke.
     */
    agentAliasArn: AgentAliasArn;
  }
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
     * Details about the guardrail associated with the agent.
     */
    guardrailConfiguration?: GuardrailConfiguration;
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
     * Details about the guardrail associated with the agent.
     */
    guardrailConfiguration?: GuardrailConfiguration;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     */
    idleSessionTTLInSeconds: SessionTTL;
    /**
     * The instructions provided to the agent.
     */
    instruction?: Instruction;
    /**
     *  Contains details of the memory configuration on the version of the agent. 
     */
    memoryConfiguration?: MemoryConfiguration;
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
     * Details about the guardrail associated with the agent.
     */
    guardrailConfiguration?: GuardrailConfiguration;
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
  export interface BedrockEmbeddingModelConfiguration {
    /**
     * The dimensions details for the vector configuration used on the Bedrock embeddings model.
     */
    dimensions?: Dimensions;
  }
  export interface BedrockFoundationModelConfiguration {
    /**
     * The model's ARN.
     */
    modelArn: BedrockModelArn;
    /**
     * Instructions for interpreting the contents of a document.
     */
    parsingPrompt?: ParsingPrompt;
  }
  export type BedrockModelArn = string;
  export type Boolean = boolean;
  export type BucketOwnerAccountId = string;
  export interface ChunkingConfiguration {
    /**
     * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.    FIXED_SIZE – Amazon Bedrock splits your source data into chunks of the approximate size that you set in the fixedSizeChunkingConfiguration.    HIERARCHICAL – Split documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.    SEMANTIC – Split documents into chunks based on groups of similar content derived with natural language processing.    NONE – Amazon Bedrock treats each file as one chunk. If you choose this option, you may want to pre-process your documents by splitting them into separate files.  
     */
    chunkingStrategy: ChunkingStrategy;
    /**
     * Configurations for when you choose fixed-size chunking. If you set the chunkingStrategy as NONE, exclude this field.
     */
    fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
    /**
     * Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
     */
    hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;
    /**
     * Settings for semantic document chunking for a data source. Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.
     */
    semanticChunkingConfiguration?: SemanticChunkingConfiguration;
  }
  export type ChunkingStrategy = "FIXED_SIZE"|"NONE"|"HIERARCHICAL"|"SEMANTIC"|string;
  export type ClientToken = string;
  export interface CollectorFlowNodeConfiguration {
  }
  export type ColumnName = string;
  export interface ConditionFlowNodeConfiguration {
    /**
     * An array of conditions. Each member contains the name of a condition and an expression that defines the condition.
     */
    conditions: FlowConditions;
  }
  export type ConfluenceAuthType = "BASIC"|"OAUTH2_CLIENT_CREDENTIALS"|string;
  export interface ConfluenceCrawlerConfiguration {
    /**
     * The configuration of filtering the Confluence content. For example, configuring regular expression patterns to include or exclude certain content.
     */
    filterConfiguration?: CrawlFilterConfiguration;
  }
  export interface ConfluenceDataSourceConfiguration {
    /**
     * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
     */
    crawlerConfiguration?: ConfluenceCrawlerConfiguration;
    /**
     * The endpoint information to connect to your Confluence data source.
     */
    sourceConfiguration: ConfluenceSourceConfiguration;
  }
  export type ConfluenceHostType = "SAAS"|string;
  export interface ConfluenceSourceConfiguration {
    /**
     * The supported authentication type to authenticate and connect to your Confluence instance.
     */
    authType: ConfluenceAuthType;
    /**
     * The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Confluence connection configuration.
     */
    credentialsSecretArn: SecretArn;
    /**
     * The supported host type, whether online/cloud or server/on-premises.
     */
    hostType: ConfluenceHostType;
    /**
     * The Confluence host URL or instance URL.
     */
    hostUrl: HttpsUrl;
  }
  export interface CrawlFilterConfiguration {
    /**
     * The configuration of filtering certain objects or content types of the data source.
     */
    patternObjectFilter?: PatternObjectFilterConfiguration;
    /**
     * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
     */
    type: CrawlFilterConfigurationType;
  }
  export type CrawlFilterConfigurationType = "PATTERN"|string;
  export interface CreateAgentActionGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
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
     * To allow your agent to request the user for additional information when trying to complete a task, set this field to AMAZON.UserInput. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. To allow your agent to generate, run, and troubleshoot code when trying to complete a task, set this field to AMAZON.CodeInterpreter. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.
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
     * The unique Guardrail configuration assigned to the agent when it is created.
     */
    guardrailConfiguration?: GuardrailConfiguration;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     */
    idleSessionTTLInSeconds?: SessionTTL;
    /**
     * Instructions that tell the agent what it should do and how it should interact with users.
     */
    instruction?: Instruction;
    /**
     *  Contains the details of the memory configured for the agent.
     */
    memoryConfiguration?: MemoryConfiguration;
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
     * The data deletion policy for the data source. You can set the data deletion policy to:   DELETE: Deletes all data from your data source that’s converted into vector embeddings upon deletion of a knowledge base or data source resource. Note that the vector store itself is not deleted, only the data. This flag is ignored if an Amazon Web Services account is deleted.   RETAIN: Retains all data from your data source that’s converted into vector embeddings upon deletion of a knowledge base or data source resource. Note that the vector store itself is not deleted if you delete a knowledge base or data source resource.  
     */
    dataDeletionPolicy?: DataDeletionPolicy;
    /**
     * The connection configuration for the data source.
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
  export interface CreateFlowAliasRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * A description for the alias.
     */
    description?: Description;
    /**
     * The unique identifier of the flow for which to create an alias.
     */
    flowIdentifier: FlowIdentifier;
    /**
     * A name for the alias.
     */
    name: Name;
    /**
     * Contains information about the version to which to map the alias.
     */
    routingConfiguration: FlowAliasRoutingConfiguration;
    /**
     * Any tags that you want to attach to the alias of the flow. For more information, see Tagging resources in Amazon Bedrock.
     */
    tags?: TagsMap;
  }
  export interface CreateFlowAliasResponse {
    /**
     * The Amazon Resource Name (ARN) of the alias.
     */
    arn: FlowAliasArn;
    /**
     * The time at which the alias was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the alias.
     */
    description?: Description;
    /**
     * The unique identifier of the flow that the alias belongs to.
     */
    flowId: FlowId;
    /**
     * The unique identifier of the alias.
     */
    id: FlowAliasId;
    /**
     * The name of the alias.
     */
    name: Name;
    /**
     * Contains information about the version that the alias is mapped to.
     */
    routingConfiguration: FlowAliasRoutingConfiguration;
    /**
     * The time at which the alias of the flow was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface CreateFlowRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the KMS key to encrypt the flow.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * A definition of the nodes and connections between nodes in the flow.
     */
    definition?: FlowDefinition;
    /**
     * A description for the flow.
     */
    description?: FlowDescription;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create and manage a flow. For more information, see Create a service role for flows in Amazon Bedrock in the Amazon Bedrock User Guide.
     */
    executionRoleArn: FlowExecutionRoleArn;
    /**
     * A name for the flow.
     */
    name: FlowName;
    /**
     * Any tags that you want to attach to the flow. For more information, see Tagging resources in Amazon Bedrock.
     */
    tags?: TagsMap;
  }
  export interface CreateFlowResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    arn: FlowArn;
    /**
     * The time at which the flow was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that you encrypted the flow with.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * A definition of the nodes and connections between nodes in the flow.
     */
    definition?: FlowDefinition;
    /**
     * The description of the flow.
     */
    description?: FlowDescription;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see Create a service role for flows in Amazon Bedrock in the Amazon Bedrock User Guide.
     */
    executionRoleArn: FlowExecutionRoleArn;
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
    /**
     * The name of the flow.
     */
    name: FlowName;
    /**
     * The status of the flow. When you submit this request, the status will be NotPrepared. If creation fails, the status becomes Failed.
     */
    status: FlowStatus;
    /**
     * The time at which the flow was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * The version of the flow. When you create a flow, the version created is the DRAFT version.
     */
    version: DraftVersion;
  }
  export interface CreateFlowVersionRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * A description of the version of the flow.
     */
    description?: FlowDescription;
    /**
     * The unique identifier of the flow that you want to create a version of.
     */
    flowIdentifier: FlowIdentifier;
  }
  export interface CreateFlowVersionResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    arn: FlowArn;
    /**
     * The time at which the flow was created.
     */
    createdAt: DateTimestamp;
    /**
     * The KMS key that the flow is encrypted with.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * A definition of the nodes and connections in the flow.
     */
    definition?: FlowDefinition;
    /**
     * The description of the version.
     */
    description?: FlowDescription;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see Create a service role for flows in Amazon Bedrock in the Amazon Bedrock User Guide.
     */
    executionRoleArn: FlowExecutionRoleArn;
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
    /**
     * The name of the version.
     */
    name: FlowName;
    /**
     * The status of the flow.
     */
    status: FlowStatus;
    /**
     * The version of the flow that was created. Versions are numbered incrementally, starting from 1.
     */
    version: NumericalVersion;
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
  export interface CreatePromptRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The name of the default variant for the prompt. This value must match the name field in the relevant PromptVariant object.
     */
    defaultVariant?: PromptVariantName;
    /**
     * A description for the prompt.
     */
    description?: PromptDescription;
    /**
     * A name for the prompt.
     */
    name: PromptName;
    /**
     * Any tags that you want to attach to the prompt. For more information, see Tagging resources in Amazon Bedrock.
     */
    tags?: TagsMap;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     */
    variants?: PromptVariantList;
  }
  export interface CreatePromptResponse {
    /**
     * The Amazon Resource Name (ARN) of the prompt.
     */
    arn: PromptArn;
    /**
     * The time at which the prompt was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that you encrypted the prompt with.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The name of the default variant for your prompt.
     */
    defaultVariant?: PromptVariantName;
    /**
     * The description of the prompt.
     */
    description?: PromptDescription;
    /**
     * The unique identifier of the prompt.
     */
    id: PromptId;
    /**
     * The name of the prompt.
     */
    name: PromptName;
    /**
     * The time at which the prompt was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     */
    variants?: PromptVariantList;
    /**
     * The version of the prompt. When you create a prompt, the version created is the DRAFT version.
     */
    version: Version;
  }
  export interface CreatePromptVersionRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientToken?: ClientToken;
    /**
     * A description for the version of the prompt.
     */
    description?: PromptDescription;
    /**
     * The unique identifier of the prompt that you want to create a version of.
     */
    promptIdentifier: PromptIdentifier;
    /**
     * Any tags that you want to attach to the version of the prompt. For more information, see Tagging resources in Amazon Bedrock.
     */
    tags?: TagsMap;
  }
  export interface CreatePromptVersionResponse {
    /**
     * The Amazon Resource Name (ARN) of the version of the prompt.
     */
    arn: PromptArn;
    /**
     * The time at which the prompt was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key to encrypt the version of the prompt.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The name of the default variant for the prompt. This value must match the name field in the relevant PromptVariant object.
     */
    defaultVariant?: PromptVariantName;
    /**
     * A description for the version.
     */
    description?: PromptDescription;
    /**
     * The unique identifier of the prompt.
     */
    id: PromptId;
    /**
     * The name of the prompt.
     */
    name: PromptName;
    /**
     * The time at which the prompt was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     */
    variants?: PromptVariantList;
    /**
     * The version of the prompt that was created. Versions are numbered incrementally, starting from 1.
     */
    version: Version;
  }
  export type CreationMode = "DEFAULT"|"OVERRIDDEN"|string;
  export type CustomControlMethod = "RETURN_CONTROL"|string;
  export interface CustomTransformationConfiguration {
    /**
     * An S3 bucket path for input and output objects.
     */
    intermediateStorage: IntermediateStorage;
    /**
     * A Lambda function that processes documents.
     */
    transformations: Transformations;
  }
  export type DataDeletionPolicy = "RETAIN"|"DELETE"|string;
  export interface DataSource {
    /**
     * The time at which the data source was created.
     */
    createdAt: DateTimestamp;
    /**
     * The data deletion policy for the data source.
     */
    dataDeletionPolicy?: DataDeletionPolicy;
    /**
     * The connection configuration for the data source.
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
     * The detailed reasons on the failure to delete a data source.
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
     * The configuration information to connect to Confluence as your data source.  Confluence data source connector is in preview release and is subject to change. 
     */
    confluenceConfiguration?: ConfluenceDataSourceConfiguration;
    /**
     * The configuration information to connect to Amazon S3 as your data source.
     */
    s3Configuration?: S3DataSourceConfiguration;
    /**
     * The configuration information to connect to Salesforce as your data source.  Salesforce data source connector is in preview release and is subject to change. 
     */
    salesforceConfiguration?: SalesforceDataSourceConfiguration;
    /**
     * The configuration information to connect to SharePoint as your data source.  SharePoint data source connector is in preview release and is subject to change. 
     */
    sharePointConfiguration?: SharePointDataSourceConfiguration;
    /**
     * The type of data source.
     */
    type: DataSourceType;
    /**
     * The configuration of web URLs to crawl for your data source. You should be authorized to crawl the URLs.  Crawling web URLs as your data source is in preview release and is subject to change. 
     */
    webConfiguration?: WebDataSourceConfiguration;
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
  export type DataSourceType = "S3"|"WEB"|"CONFLUENCE"|"SALESFORCE"|"SHAREPOINT"|string;
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
  export interface DeleteFlowAliasRequest {
    /**
     * The unique identifier of the alias to be deleted.
     */
    aliasIdentifier: FlowAliasIdentifier;
    /**
     * The unique identifier of the flow that the alias belongs to.
     */
    flowIdentifier: FlowIdentifier;
  }
  export interface DeleteFlowAliasResponse {
    /**
     * The unique identifier of the flow that the alias belongs to.
     */
    flowId: FlowId;
    /**
     * The unique identifier of the flow.
     */
    id: FlowAliasId;
  }
  export interface DeleteFlowRequest {
    /**
     * The unique identifier of the flow.
     */
    flowIdentifier: FlowIdentifier;
    /**
     * By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.
     */
    skipResourceInUseCheck?: Boolean;
  }
  export interface DeleteFlowResponse {
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
  }
  export interface DeleteFlowVersionRequest {
    /**
     * The unique identifier of the flow whose version that you want to delete
     */
    flowIdentifier: FlowIdentifier;
    /**
     * The version of the flow that you want to delete.
     */
    flowVersion: NumericalVersion;
    /**
     * By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.
     */
    skipResourceInUseCheck?: Boolean;
  }
  export interface DeleteFlowVersionResponse {
    /**
     * The unique identifier of the flow.
     */
    id: Id;
    /**
     * The version of the flow being deleted.
     */
    version: NumericalVersion;
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
  export interface DeletePromptRequest {
    /**
     * The unique identifier of the prompt.
     */
    promptIdentifier: PromptIdentifier;
    /**
     * The version of the prompt to delete. To delete the prompt, omit this field.
     */
    promptVersion?: NumericalVersion;
  }
  export interface DeletePromptResponse {
    /**
     * The unique identifier of the prompt that was deleted.
     */
    id: PromptId;
    /**
     * The version of the prompt that was deleted.
     */
    version?: NumericalVersion;
  }
  export type Description = string;
  export type Dimensions = number;
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
  export interface EmbeddingModelConfiguration {
    /**
     * The vector configuration details on the Bedrock embeddings model.
     */
    bedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration;
  }
  export type EnabledMemoryTypes = MemoryType[];
  export type FailureReason = string;
  export type FailureReasons = FailureReason[];
  export type FieldName = string;
  export type FilterList = FilterPattern[];
  export type FilterPattern = string;
  export type FilteredObjectType = string;
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
  export type FlowAliasArn = string;
  export type FlowAliasId = string;
  export type FlowAliasIdentifier = string;
  export type FlowAliasRoutingConfiguration = FlowAliasRoutingConfigurationListItem[];
  export interface FlowAliasRoutingConfigurationListItem {
    /**
     * The version that the alias maps to.
     */
    flowVersion?: Version;
  }
  export type FlowAliasSummaries = FlowAliasSummary[];
  export interface FlowAliasSummary {
    /**
     * The Amazon Resource Name (ARN) of the alias.
     */
    arn: FlowAliasArn;
    /**
     * The time at which the alias was created.
     */
    createdAt: DateTimestamp;
    /**
     * A description of the alias.
     */
    description?: Description;
    /**
     * The unique identifier of the flow.
     */
    flowId: FlowId;
    /**
     * The unique identifier of the alias of the flow.
     */
    id: FlowAliasId;
    /**
     * The name of the alias.
     */
    name: Name;
    /**
     * A list of configurations about the versions that the alias maps to. Currently, you can only specify one.
     */
    routingConfiguration: FlowAliasRoutingConfiguration;
    /**
     * The time at which the alias was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export type FlowArn = string;
  export interface FlowCondition {
    /**
     * Defines the condition. You must refer to at least one of the inputs in the condition. For more information, expand the Condition node section in Node types in prompt flows.
     */
    expression?: FlowConditionExpression;
    /**
     * A name for the condition that you can reference.
     */
    name: FlowConditionName;
  }
  export type FlowConditionExpression = string;
  export type FlowConditionName = string;
  export interface FlowConditionalConnectionConfiguration {
    /**
     * The condition that triggers this connection. For more information about how to write conditions, see the Condition node type in the Node types topic in the Amazon Bedrock User Guide.
     */
    condition: FlowConditionName;
  }
  export type FlowConditions = FlowCondition[];
  export interface FlowConnection {
    /**
     * The configuration of the connection.
     */
    configuration?: FlowConnectionConfiguration;
    /**
     * A name for the connection that you can reference.
     */
    name: FlowConnectionName;
    /**
     * The node that the connection starts at.
     */
    source: FlowNodeName;
    /**
     * The node that the connection ends at.
     */
    target: FlowNodeName;
    /**
     * Whether the source node that the connection begins from is a condition node (Conditional) or not (Data).
     */
    type: FlowConnectionType;
  }
  export interface FlowConnectionConfiguration {
    /**
     * The configuration of a connection originating from a Condition node.
     */
    conditional?: FlowConditionalConnectionConfiguration;
    /**
     * The configuration of a connection originating from a node that isn't a Condition node.
     */
    data?: FlowDataConnectionConfiguration;
  }
  export type FlowConnectionName = string;
  export type FlowConnectionType = "Data"|"Conditional"|string;
  export type FlowConnections = FlowConnection[];
  export interface FlowDataConnectionConfiguration {
    /**
     * The name of the output in the source node that the connection begins from.
     */
    sourceOutput: FlowNodeOutputName;
    /**
     * The name of the input in the target node that the connection ends at.
     */
    targetInput: FlowNodeInputName;
  }
  export interface FlowDefinition {
    /**
     * An array of connection definitions in the flow.
     */
    connections?: FlowConnections;
    /**
     * An array of node definitions in the flow.
     */
    nodes?: FlowNodes;
  }
  export type FlowDescription = string;
  export type FlowExecutionRoleArn = string;
  export type FlowId = string;
  export type FlowIdentifier = string;
  export type FlowName = string;
  export interface FlowNode {
    /**
     * Contains configurations for the node.
     */
    configuration?: FlowNodeConfiguration;
    /**
     * An array of objects, each of which contains information about an input into the node.
     */
    inputs?: FlowNodeInputs;
    /**
     * A name for the node.
     */
    name: FlowNodeName;
    /**
     * A list of objects, each of which contains information about an output from the node.
     */
    outputs?: FlowNodeOutputs;
    /**
     * The type of node. This value must match the name of the key that you provide in the configuration you provide in the FlowNodeConfiguration field.
     */
    type: FlowNodeType;
  }
  export interface FlowNodeConfiguration {
    /**
     * Contains configurations for an agent node in your flow. Invokes an alias of an agent and returns the response.
     */
    agent?: AgentFlowNodeConfiguration;
    /**
     * Contains configurations for a collector node in your flow. Collects an iteration of inputs and consolidates them into an array of outputs.
     */
    collector?: CollectorFlowNodeConfiguration;
    /**
     * Contains configurations for a Condition node in your flow. Defines conditions that lead to different branches of the flow.
     */
    condition?: ConditionFlowNodeConfiguration;
    /**
     * Contains configurations for an input flow node in your flow. The first node in the flow. inputs can't be specified for this node.
     */
    input?: InputFlowNodeConfiguration;
    /**
     * Contains configurations for an iterator node in your flow. Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output. The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.
     */
    iterator?: IteratorFlowNodeConfiguration;
    /**
     * Contains configurations for a knowledge base node in your flow. Queries a knowledge base and returns the retrieved results or generated response.
     */
    knowledgeBase?: KnowledgeBaseFlowNodeConfiguration;
    /**
     * Contains configurations for a Lambda function node in your flow. Invokes an Lambda function.
     */
    lambdaFunction?: LambdaFunctionFlowNodeConfiguration;
    /**
     * Contains configurations for a Lex node in your flow. Invokes an Amazon Lex bot to identify the intent of the input and return the intent as the output.
     */
    lex?: LexFlowNodeConfiguration;
    /**
     * Contains configurations for an output flow node in your flow. The last node in the flow. outputs can't be specified for this node.
     */
    output?: OutputFlowNodeConfiguration;
    /**
     * Contains configurations for a prompt node in your flow. Runs a prompt and generates the model response as the output. You can use a prompt from Prompt management or you can configure one in this node.
     */
    prompt?: PromptFlowNodeConfiguration;
    /**
     * Contains configurations for a Retrieval node in your flow. Retrieves data from an Amazon S3 location and returns it as the output.
     */
    retrieval?: RetrievalFlowNodeConfiguration;
    /**
     * Contains configurations for a Storage node in your flow. Stores an input in an Amazon S3 location.
     */
    storage?: StorageFlowNodeConfiguration;
  }
  export type FlowNodeIODataType = "String"|"Number"|"Boolean"|"Object"|"Array"|string;
  export interface FlowNodeInput {
    /**
     * An expression that formats the input for the node. For an explanation of how to create expressions, see Expressions in Prompt flows in Amazon Bedrock.
     */
    expression: FlowNodeInputExpression;
    /**
     * A name for the input that you can reference.
     */
    name: FlowNodeInputName;
    /**
     * The data type of the input. If the input doesn't match this type at runtime, a validation error will be thrown.
     */
    type: FlowNodeIODataType;
  }
  export type FlowNodeInputExpression = string;
  export type FlowNodeInputName = string;
  export type FlowNodeInputs = FlowNodeInput[];
  export type FlowNodeName = string;
  export interface FlowNodeOutput {
    /**
     * A name for the output that you can reference.
     */
    name: FlowNodeOutputName;
    /**
     * The data type of the output. If the output doesn't match this type at runtime, a validation error will be thrown.
     */
    type: FlowNodeIODataType;
  }
  export type FlowNodeOutputName = string;
  export type FlowNodeOutputs = FlowNodeOutput[];
  export type FlowNodeType = "Input"|"Output"|"KnowledgeBase"|"Condition"|"Lex"|"Prompt"|"LambdaFunction"|"Storage"|"Agent"|"Retrieval"|"Iterator"|"Collector"|string;
  export type FlowNodes = FlowNode[];
  export type FlowStatus = "Failed"|"Prepared"|"Preparing"|"NotPrepared"|string;
  export type FlowSummaries = FlowSummary[];
  export interface FlowSummary {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    arn: FlowArn;
    /**
     * The time at which the flow was created.
     */
    createdAt: DateTimestamp;
    /**
     * A description of the flow.
     */
    description?: FlowDescription;
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
    /**
     * The name of the flow.
     */
    name: FlowName;
    /**
     * The status of the flow. The following statuses are possible:   NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the DRAFT version won't contain the latest changes for testing. Send a PrepareFlow request to package the latest changes into the DRAFT version.   Preparing – The flow is being prepared so that the DRAFT version contains the latest changes for testing.   Prepared – The flow is prepared and the DRAFT version contains the latest changes for testing.   Failed – The last API operation that you invoked on the flow failed. Send a GetFlow request and check the error message in the validations field.  
     */
    status: FlowStatus;
    /**
     * The time at which the flow was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * The latest version of the flow.
     */
    version: DraftVersion;
  }
  export interface FlowValidation {
    /**
     * A message describing the validation error.
     */
    message: NonBlankString;
    /**
     * The severity of the issue described in the message.
     */
    severity: FlowValidationSeverity;
  }
  export type FlowValidationSeverity = "Warning"|"Error"|string;
  export type FlowValidations = FlowValidation[];
  export type FlowVersionSummaries = FlowVersionSummary[];
  export interface FlowVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the flow that the version belongs to.
     */
    arn: FlowArn;
    /**
     * The time at the version was created.
     */
    createdAt: DateTimestamp;
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
    /**
     * The status of the flow.
     */
    status: FlowStatus;
    /**
     * The version of the flow.
     */
    version: NumericalVersion;
  }
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
    /**
     * Contains information if user confirmation is required to invoke the function.
     */
    requireConfirmation?: RequireConfirmation;
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
  export interface GetFlowAliasRequest {
    /**
     * The unique identifier of the alias for which to retrieve information.
     */
    aliasIdentifier: FlowAliasIdentifier;
    /**
     * The unique identifier of the flow that the alias belongs to.
     */
    flowIdentifier: FlowIdentifier;
  }
  export interface GetFlowAliasResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    arn: FlowAliasArn;
    /**
     * The time at which the flow was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the flow.
     */
    description?: Description;
    /**
     * The unique identifier of the flow that the alias belongs to.
     */
    flowId: FlowId;
    /**
     * The unique identifier of the alias of the flow.
     */
    id: FlowAliasId;
    /**
     * The name of the alias.
     */
    name: Name;
    /**
     * Contains information about the version that the alias is mapped to.
     */
    routingConfiguration: FlowAliasRoutingConfiguration;
    /**
     * The time at which the alias was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface GetFlowRequest {
    /**
     * The unique identifier of the flow.
     */
    flowIdentifier: FlowIdentifier;
  }
  export interface GetFlowResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    arn: FlowArn;
    /**
     * The time at which the flow was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the flow is encrypted with.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The definition of the nodes and connections between the nodes in the flow.
     */
    definition?: FlowDefinition;
    /**
     * The description of the flow.
     */
    description?: FlowDescription;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see Create a service row for flows in the Amazon Bedrock User Guide.
     */
    executionRoleArn: FlowExecutionRoleArn;
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
    /**
     * The name of the flow.
     */
    name: FlowName;
    /**
     * The status of the flow. The following statuses are possible:   NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the DRAFT version won't contain the latest changes for testing. Send a PrepareFlow request to package the latest changes into the DRAFT version.   Preparing – The flow is being prepared so that the DRAFT version contains the latest changes for testing.   Prepared – The flow is prepared and the DRAFT version contains the latest changes for testing.   Failed – The last API operation that you invoked on the flow failed. Send a GetFlow request and check the error message in the validations field.  
     */
    status: FlowStatus;
    /**
     * The time at which the flow was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * A list of validation error messages related to the last failed operation on the flow.
     */
    validations?: FlowValidations;
    /**
     * The version of the flow for which information was retrieved.
     */
    version: DraftVersion;
  }
  export interface GetFlowVersionRequest {
    /**
     * The unique identifier of the flow for which to get information.
     */
    flowIdentifier: FlowIdentifier;
    /**
     * The version of the flow for which to get information.
     */
    flowVersion: NumericalVersion;
  }
  export interface GetFlowVersionResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    arn: FlowArn;
    /**
     * The time at which the flow was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the version of the flow is encrypted with.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The definition of the nodes and connections between nodes in the flow.
     */
    definition?: FlowDefinition;
    /**
     * The description of the flow.
     */
    description?: FlowDescription;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see Create a service role for flows in Amazon Bedrock in the Amazon Bedrock User Guide.
     */
    executionRoleArn: FlowExecutionRoleArn;
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
    /**
     * The name of the version.
     */
    name: FlowName;
    /**
     * The status of the flow.
     */
    status: FlowStatus;
    /**
     * The version of the flow for which information was retrieved.
     */
    version: NumericalVersion;
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
  export interface GetPromptRequest {
    /**
     * The unique identifier of the prompt.
     */
    promptIdentifier: PromptIdentifier;
    /**
     * The version of the prompt about which you want to retrieve information. Omit this field to return information about the working draft of the prompt.
     */
    promptVersion?: Version;
  }
  export interface GetPromptResponse {
    /**
     * The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).
     */
    arn: PromptArn;
    /**
     * The time at which the prompt was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The name of the default variant for the prompt. This value must match the name field in the relevant PromptVariant object.
     */
    defaultVariant?: PromptVariantName;
    /**
     * The descriptino of the prompt.
     */
    description?: PromptDescription;
    /**
     * The unique identifier of the prompt.
     */
    id: PromptId;
    /**
     * The name of the prompt.
     */
    name: PromptName;
    /**
     * The time at which the prompt was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     */
    variants?: PromptVariantList;
    /**
     * The version of the prompt.
     */
    version: Version;
  }
  export interface GuardrailConfiguration {
    /**
     * The unique identifier of the guardrail.
     */
    guardrailIdentifier?: GuardrailIdentifier;
    /**
     * The version of the guardrail.
     */
    guardrailVersion?: GuardrailVersion;
  }
  export type GuardrailIdentifier = string;
  export type GuardrailVersion = string;
  export interface HierarchicalChunkingConfiguration {
    /**
     * Token settings for each layer.
     */
    levelConfigurations: HierarchicalChunkingLevelConfigurations;
    /**
     * The number of tokens to repeat across chunks in the same layer.
     */
    overlapTokens: HierarchicalChunkingConfigurationOverlapTokensInteger;
  }
  export type HierarchicalChunkingConfigurationOverlapTokensInteger = number;
  export interface HierarchicalChunkingLevelConfiguration {
    /**
     * The maximum number of tokens that a chunk can contain in this layer.
     */
    maxTokens: HierarchicalChunkingLevelConfigurationMaxTokensInteger;
  }
  export type HierarchicalChunkingLevelConfigurationMaxTokensInteger = number;
  export type HierarchicalChunkingLevelConfigurations = HierarchicalChunkingLevelConfiguration[];
  export type HttpsUrl = string;
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
  export interface InputFlowNodeConfiguration {
  }
  export type Instruction = string;
  export interface IntermediateStorage {
    /**
     * An S3 bucket path.
     */
    s3Location: S3Location;
  }
  export interface IteratorFlowNodeConfiguration {
  }
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
  export interface KnowledgeBaseFlowNodeConfiguration {
    /**
     * The unique identifier of the knowledge base to query.
     */
    knowledgeBaseId: KnowledgeBaseId;
    /**
     * The unique identifier of the model to use to generate a response from the query results. Omit this field if you want to return the retrieved results as an array.
     */
    modelId?: ModelIdentifier;
  }
  export type KnowledgeBaseId = string;
  export type KnowledgeBaseRoleArn = string;
  export type KnowledgeBaseState = "ENABLED"|"DISABLED"|string;
  export type KnowledgeBaseStatus = "CREATING"|"ACTIVE"|"DELETING"|"UPDATING"|"FAILED"|"DELETE_UNSUCCESSFUL"|string;
  export type KnowledgeBaseStorageType = "OPENSEARCH_SERVERLESS"|"PINECONE"|"REDIS_ENTERPRISE_CLOUD"|"RDS"|"MONGO_DB_ATLAS"|string;
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
  export interface LambdaFunctionFlowNodeConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the Lambda function to invoke.
     */
    lambdaArn: LambdaArn;
  }
  export type LexBotAliasArn = string;
  export type LexBotLocaleId = string;
  export interface LexFlowNodeConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Lex bot alias to invoke.
     */
    botAliasArn: LexBotAliasArn;
    /**
     * The Region to invoke the Amazon Lex bot in.
     */
    localeId: LexBotLocaleId;
  }
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
  export interface ListFlowAliasesRequest {
    /**
     * The unique identifier of the flow for which aliases are being returned.
     */
    flowIdentifier: FlowIdentifier;
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListFlowAliasesResponse {
    /**
     * A list, each member of which contains information about an alias.
     */
    flowAliasSummaries: FlowAliasSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListFlowVersionsRequest {
    /**
     * The unique identifier of the flow.
     */
    flowIdentifier: FlowIdentifier;
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListFlowVersionsResponse {
    /**
     * A list, each member of which contains information about a flow.
     */
    flowVersionSummaries: FlowVersionSummaries;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListFlowsRequest {
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface ListFlowsResponse {
    /**
     * A list, each member of which contains information about a flow.
     */
    flowSummaries: FlowSummaries;
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
  export interface ListPromptsRequest {
    /**
     * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxResults?: MaxResults;
    /**
     * If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
    /**
     * The unique identifier of the prompt for whose versions you want to return information. Omit this field to list information about all prompts in an account.
     */
    promptIdentifier?: PromptIdentifier;
  }
  export interface ListPromptsResponse {
    /**
     * If the total number of results is greater than the maxResults value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
    /**
     * A list, each member of which contains information about a prompt using Prompt management.
     */
    promptSummaries: PromptSummaries;
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
  export interface MemoryConfiguration {
    /**
     * The type of memory that is stored. 
     */
    enabledMemoryTypes: EnabledMemoryTypes;
    /**
     * The number of days the agent is configured to retain the conversational context.
     */
    storageDays?: StorageDays;
  }
  export type MemoryType = "SESSION_SUMMARY"|string;
  export type Microsoft365TenantId = string;
  export type ModelIdentifier = string;
  export type MongoDbAtlasCollectionName = string;
  export interface MongoDbAtlasConfiguration {
    /**
     * The collection name of the knowledge base in MongoDB Atlas.
     */
    collectionName: MongoDbAtlasCollectionName;
    /**
     * The Amazon Resource Name (ARN) of the secret that you created in Secrets Manager that contains user credentials for your MongoDB Atlas cluster.
     */
    credentialsSecretArn: SecretArn;
    /**
     * The database name in your MongoDB Atlas cluster for your knowledge base.
     */
    databaseName: MongoDbAtlasDatabaseName;
    /**
     * The endpoint URL of your MongoDB Atlas cluster for your knowledge base.
     */
    endpoint: MongoDbAtlasEndpoint;
    /**
     * The name of the VPC endpoint service in your account that is connected to your MongoDB Atlas cluster.
     */
    endpointServiceName?: MongoDbAtlasEndpointServiceName;
    /**
     * Contains the names of the fields to which to map information about the vector store.
     */
    fieldMapping: MongoDbAtlasFieldMapping;
    /**
     * The name of the MongoDB Atlas vector search index.
     */
    vectorIndexName: MongoDbAtlasIndexName;
  }
  export type MongoDbAtlasDatabaseName = string;
  export type MongoDbAtlasEndpoint = string;
  export type MongoDbAtlasEndpointServiceName = string;
  export interface MongoDbAtlasFieldMapping {
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
  export type MongoDbAtlasIndexName = string;
  export type Name = string;
  export type NextToken = string;
  export type NonBlankString = string;
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
  export interface OutputFlowNodeConfiguration {
  }
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
  export interface ParsingConfiguration {
    /**
     * Settings for a foundation model used to parse documents for a data source.
     */
    bedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
    /**
     * The parsing strategy for the data source.
     */
    parsingStrategy: ParsingStrategy;
  }
  export interface ParsingPrompt {
    /**
     * Instructions for interpreting the contents of a document.
     */
    parsingPromptText: ParsingPromptText;
  }
  export type ParsingPromptText = string;
  export type ParsingStrategy = "BEDROCK_FOUNDATION_MODEL"|string;
  export interface PatternObjectFilter {
    /**
     * A list of one or more exclusion regular expression patterns to exclude certain object types that adhere to the pattern. If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.
     */
    exclusionFilters?: FilterList;
    /**
     * A list of one or more inclusion regular expression patterns to include certain object types that adhere to the pattern. If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.
     */
    inclusionFilters?: FilterList;
    /**
     * The supported object type or content type of the data source.
     */
    objectType: FilteredObjectType;
  }
  export interface PatternObjectFilterConfiguration {
    /**
     * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
     */
    filters: PatternObjectFilterList;
  }
  export type PatternObjectFilterList = PatternObjectFilter[];
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
  export interface PrepareFlowRequest {
    /**
     * The unique identifier of the flow.
     */
    flowIdentifier: FlowIdentifier;
  }
  export interface PrepareFlowResponse {
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
    /**
     * The status of the flow. When you submit this request, the status will be NotPrepared. If preparation succeeds, the status becomes Prepared. If it fails, the status becomes FAILED.
     */
    status: FlowStatus;
  }
  export type PrimitiveLong = number;
  export type PromptArn = string;
  export interface PromptConfiguration {
    /**
     * Defines the prompt template with which to replace the default prompt template. You can use placeholder variables in the base prompt template to customize the prompt. For more information, see Prompt template placeholder variables. For more information, see Configure the prompt templates.
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
  export type PromptDescription = string;
  export interface PromptFlowNodeConfiguration {
    /**
     * Specifies whether the prompt is from Prompt management or defined inline.
     */
    sourceConfiguration: PromptFlowNodeSourceConfiguration;
  }
  export interface PromptFlowNodeInlineConfiguration {
    /**
     * Contains inference configurations for the prompt.
     */
    inferenceConfiguration?: PromptInferenceConfiguration;
    /**
     * The unique identifier of the model to run inference with.
     */
    modelId: PromptModelIdentifier;
    /**
     * Contains a prompt and variables in the prompt that can be replaced with values at runtime.
     */
    templateConfiguration: PromptTemplateConfiguration;
    /**
     * The type of prompt template.
     */
    templateType: PromptTemplateType;
  }
  export interface PromptFlowNodeResourceConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the prompt from Prompt management.
     */
    promptArn: PromptArn;
  }
  export interface PromptFlowNodeSourceConfiguration {
    /**
     * Contains configurations for a prompt that is defined inline
     */
    inline?: PromptFlowNodeInlineConfiguration;
    /**
     * Contains configurations for a prompt from Prompt management.
     */
    resource?: PromptFlowNodeResourceConfiguration;
  }
  export type PromptId = string;
  export type PromptIdentifier = string;
  export interface PromptInferenceConfiguration {
    /**
     * Contains inference configurations for a text prompt.
     */
    text?: PromptModelInferenceConfiguration;
  }
  export interface PromptInputVariable {
    /**
     * The name of the variable.
     */
    name?: PromptInputVariableName;
  }
  export type PromptInputVariableName = string;
  export type PromptInputVariablesList = PromptInputVariable[];
  export type PromptModelIdentifier = string;
  export interface PromptModelInferenceConfiguration {
    /**
     * The maximum number of tokens to return in the response.
     */
    maxTokens?: MaximumLength;
    /**
     * A list of strings that define sequences after which the model will stop generating.
     */
    stopSequences?: StopSequences;
    /**
     * Controls the randomness of the response. Choose a lower value for more predictable outputs and a higher value for more surprising outputs.
     */
    temperature?: Temperature;
    /**
     * The number of most-likely candidates that the model considers for the next token during generation.
     */
    topK?: TopK;
    /**
     * The percentage of most-likely candidates that the model considers for the next token.
     */
    topP?: TopP;
  }
  export type PromptName = string;
  export interface PromptOverrideConfiguration {
    /**
     * The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. If you specify this field, at least one of the promptConfigurations must contain a parserMode value that is set to OVERRIDDEN. For more information, see Parser Lambda function in Agents for Amazon Bedrock.
     */
    overrideLambda?: LambdaArn;
    /**
     * Contains configurations to override a prompt template in one part of an agent sequence. For more information, see Advanced prompts.
     */
    promptConfigurations: PromptConfigurations;
  }
  export type PromptState = "ENABLED"|"DISABLED"|string;
  export type PromptSummaries = PromptSummary[];
  export interface PromptSummary {
    /**
     * The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).
     */
    arn: PromptArn;
    /**
     * The time at which the prompt was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the prompt.
     */
    description?: PromptDescription;
    /**
     * The unique identifier of the prompt.
     */
    id: PromptId;
    /**
     * The name of the prompt.
     */
    name: PromptName;
    /**
     * The time at which the prompt was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * The version of the prompt that this summary applies to.
     */
    version: Version;
  }
  export interface PromptTemplateConfiguration {
    /**
     * Contains configurations for the text in a message for a prompt.
     */
    text?: TextPromptTemplateConfiguration;
  }
  export type PromptTemplateType = "TEXT"|string;
  export type PromptType = "PRE_PROCESSING"|"ORCHESTRATION"|"POST_PROCESSING"|"KNOWLEDGE_BASE_RESPONSE_GENERATION"|string;
  export interface PromptVariant {
    /**
     * Contains inference configurations for the prompt variant.
     */
    inferenceConfiguration?: PromptInferenceConfiguration;
    /**
     * The unique identifier of the model with which to run inference on the prompt.
     */
    modelId?: PromptModelIdentifier;
    /**
     * The name of the prompt variant.
     */
    name: PromptVariantName;
    /**
     * Contains configurations for the prompt template.
     */
    templateConfiguration?: PromptTemplateConfiguration;
    /**
     * The type of prompt template to use.
     */
    templateType: PromptTemplateType;
  }
  export type PromptVariantList = PromptVariant[];
  export type PromptVariantName = string;
  export type ProvisionedModelIdentifier = string;
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
  export type RequireConfirmation = "ENABLED"|"DISABLED"|string;
  export interface RetrievalFlowNodeConfiguration {
    /**
     * Contains configurations for the service to use for retrieving data to return as the output from the node.
     */
    serviceConfiguration: RetrievalFlowNodeServiceConfiguration;
  }
  export interface RetrievalFlowNodeS3Configuration {
    /**
     * The name of the Amazon S3 bucket from which to retrieve data.
     */
    bucketName: S3BucketName;
  }
  export interface RetrievalFlowNodeServiceConfiguration {
    /**
     * Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
     */
    s3?: RetrievalFlowNodeS3Configuration;
  }
  export type S3BucketArn = string;
  export type S3BucketName = string;
  export type S3BucketUri = string;
  export interface S3DataSourceConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the S3 bucket that contains your data.
     */
    bucketArn: S3BucketArn;
    /**
     * The account ID for the owner of the S3 bucket.
     */
    bucketOwnerAccountId?: BucketOwnerAccountId;
    /**
     * A list of S3 prefixes to include certain files or content. For more information, see Organizing objects using prefixes.
     */
    inclusionPrefixes?: S3Prefixes;
  }
  export interface S3Identifier {
    /**
     * The name of the S3 bucket.
     */
    s3BucketName?: S3BucketName;
    /**
     * The S3 object key for the S3 resource.
     */
    s3ObjectKey?: S3ObjectKey;
  }
  export interface S3Location {
    /**
     * The location's URI. For example, s3://my-bucket/chunk-processor/.
     */
    uri: S3BucketUri;
  }
  export type S3ObjectKey = string;
  export type S3Prefix = string;
  export type S3Prefixes = S3Prefix[];
  export type SalesforceAuthType = "OAUTH2_CLIENT_CREDENTIALS"|string;
  export interface SalesforceCrawlerConfiguration {
    /**
     * The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.
     */
    filterConfiguration?: CrawlFilterConfiguration;
  }
  export interface SalesforceDataSourceConfiguration {
    /**
     * The configuration of the Salesforce content. For example, configuring specific types of Salesforce content.
     */
    crawlerConfiguration?: SalesforceCrawlerConfiguration;
    /**
     * The endpoint information to connect to your Salesforce data source.
     */
    sourceConfiguration: SalesforceSourceConfiguration;
  }
  export interface SalesforceSourceConfiguration {
    /**
     * The supported authentication type to authenticate and connect to your Salesforce instance.
     */
    authType: SalesforceAuthType;
    /**
     * The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Salesforce connection configuration.
     */
    credentialsSecretArn: SecretArn;
    /**
     * The Salesforce host URL or instance URL.
     */
    hostUrl: HttpsUrl;
  }
  export type SecretArn = string;
  export interface SeedUrl {
    /**
     * A seed or starting point URL.
     */
    url?: Url;
  }
  export type SeedUrls = SeedUrl[];
  export interface SemanticChunkingConfiguration {
    /**
     * The dissimilarity threshold for splitting chunks.
     */
    breakpointPercentileThreshold: SemanticChunkingConfigurationBreakpointPercentileThresholdInteger;
    /**
     * The buffer size.
     */
    bufferSize: SemanticChunkingConfigurationBufferSizeInteger;
    /**
     * The maximum number of tokens that a chunk can contain.
     */
    maxTokens: SemanticChunkingConfigurationMaxTokensInteger;
  }
  export type SemanticChunkingConfigurationBreakpointPercentileThresholdInteger = number;
  export type SemanticChunkingConfigurationBufferSizeInteger = number;
  export type SemanticChunkingConfigurationMaxTokensInteger = number;
  export interface ServerSideEncryptionConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the KMS key used to encrypt the resource.
     */
    kmsKeyArn?: KmsKeyArn;
  }
  export type SessionTTL = number;
  export type SharePointAuthType = "OAUTH2_CLIENT_CREDENTIALS"|string;
  export interface SharePointCrawlerConfiguration {
    /**
     * The configuration of filtering the SharePoint content. For example, configuring regular expression patterns to include or exclude certain content.
     */
    filterConfiguration?: CrawlFilterConfiguration;
  }
  export interface SharePointDataSourceConfiguration {
    /**
     * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
     */
    crawlerConfiguration?: SharePointCrawlerConfiguration;
    /**
     * The endpoint information to connect to your SharePoint data source.
     */
    sourceConfiguration: SharePointSourceConfiguration;
  }
  export type SharePointDomain = string;
  export type SharePointHostType = "ONLINE"|string;
  export type SharePointSiteUrls = HttpsUrl[];
  export interface SharePointSourceConfiguration {
    /**
     * The supported authentication type to authenticate and connect to your SharePoint site/sites.
     */
    authType: SharePointAuthType;
    /**
     * The Amazon Resource Name of an Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see SharePoint connection configuration.
     */
    credentialsSecretArn: SecretArn;
    /**
     * The domain of your SharePoint instance or site URL/URLs.
     */
    domain: SharePointDomain;
    /**
     * The supported host type, whether online/cloud or server/on-premises.
     */
    hostType: SharePointHostType;
    /**
     * A list of one or more SharePoint site URLs.
     */
    siteUrls: SharePointSiteUrls;
    /**
     * The identifier of your Microsoft 365 tenant.
     */
    tenantId?: Microsoft365TenantId;
  }
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
  export type StepType = "POST_CHUNKING"|string;
  export type StopSequences = String[];
  export interface StorageConfiguration {
    /**
     * Contains the storage configuration of the knowledge base in MongoDB Atlas.
     */
    mongoDbAtlasConfiguration?: MongoDbAtlasConfiguration;
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
  export type StorageDays = number;
  export interface StorageFlowNodeConfiguration {
    /**
     * Contains configurations for the service to use for storing the input into the node.
     */
    serviceConfiguration: StorageFlowNodeServiceConfiguration;
  }
  export interface StorageFlowNodeS3Configuration {
    /**
     * The name of the Amazon S3 bucket in which to store the input into the node.
     */
    bucketName: S3BucketName;
  }
  export interface StorageFlowNodeServiceConfiguration {
    /**
     * Contains configurations for the Amazon S3 location in which to store the input into the node.
     */
    s3?: StorageFlowNodeS3Configuration;
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
  export type TextPrompt = string;
  export interface TextPromptTemplateConfiguration {
    /**
     * An array of the variables in the prompt template.
     */
    inputVariables?: PromptInputVariablesList;
    /**
     * The message for the prompt.
     */
    text: TextPrompt;
  }
  export type TopK = number;
  export type TopP = number;
  export interface Transformation {
    /**
     * When the service applies the transformation.
     */
    stepToApply: StepType;
    /**
     * A Lambda function that processes documents.
     */
    transformationFunction: TransformationFunction;
  }
  export interface TransformationFunction {
    /**
     * The Lambda function.
     */
    transformationLambdaConfiguration: TransformationLambdaConfiguration;
  }
  export interface TransformationLambdaConfiguration {
    /**
     * The function's ARN identifier.
     */
    lambdaArn: LambdaArn;
  }
  export type Transformations = Transformation[];
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
     * The unique Guardrail configuration assigned to the agent when it is updated.
     */
    guardrailConfiguration?: GuardrailConfiguration;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     */
    idleSessionTTLInSeconds?: SessionTTL;
    /**
     * Specifies new instructions that tell the agent what it should do and how it should interact with users.
     */
    instruction?: Instruction;
    /**
     * Specifies the new memory configuration for the agent. 
     */
    memoryConfiguration?: MemoryConfiguration;
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
     * The data deletion policy for the data source that you want to update.
     */
    dataDeletionPolicy?: DataDeletionPolicy;
    /**
     * The connection configuration for the data source that you want to update.
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
     * The unique identifier of the knowledge base for the data source.
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
  export interface UpdateFlowAliasRequest {
    /**
     * The unique identifier of the alias.
     */
    aliasIdentifier: FlowAliasIdentifier;
    /**
     * A description for the alias.
     */
    description?: Description;
    /**
     * The unique identifier of the flow.
     */
    flowIdentifier: FlowIdentifier;
    /**
     * The name of the alias.
     */
    name: Name;
    /**
     * Contains information about the version to which to map the alias.
     */
    routingConfiguration: FlowAliasRoutingConfiguration;
  }
  export interface UpdateFlowAliasResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    arn: FlowAliasArn;
    /**
     * The time at which the flow was created.
     */
    createdAt: DateTimestamp;
    /**
     * The description of the flow.
     */
    description?: Description;
    /**
     * The unique identifier of the flow.
     */
    flowId: FlowId;
    /**
     * The unique identifier of the alias.
     */
    id: FlowAliasId;
    /**
     * The name of the alias.
     */
    name: Name;
    /**
     * Contains information about the version that the alias is mapped to.
     */
    routingConfiguration: FlowAliasRoutingConfiguration;
    /**
     * The time at which the alias was last updated.
     */
    updatedAt: DateTimestamp;
  }
  export interface UpdateFlowRequest {
    /**
     * The Amazon Resource Name (ARN) of the KMS key to encrypt the flow.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * A definition of the nodes and the connections between the nodes in the flow.
     */
    definition?: FlowDefinition;
    /**
     * A description for the flow.
     */
    description?: FlowDescription;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create and manage a flow. For more information, see Create a service role for flows in Amazon Bedrock in the Amazon Bedrock User Guide.
     */
    executionRoleArn: FlowExecutionRoleArn;
    /**
     * The unique identifier of the flow.
     */
    flowIdentifier: FlowIdentifier;
    /**
     * A name for the flow.
     */
    name: FlowName;
  }
  export interface UpdateFlowResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    arn: FlowArn;
    /**
     * The time at which the flow was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the flow was encrypted with.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * A definition of the nodes and the connections between nodes in the flow.
     */
    definition?: FlowDefinition;
    /**
     * The description of the flow.
     */
    description?: FlowDescription;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see Create a service role for flows in Amazon Bedrock in the Amazon Bedrock User Guide.
     */
    executionRoleArn: FlowExecutionRoleArn;
    /**
     * The unique identifier of the flow.
     */
    id: FlowId;
    /**
     * The name of the flow.
     */
    name: FlowName;
    /**
     * The status of the flow. When you submit this request, the status will be NotPrepared. If updating fails, the status becomes Failed.
     */
    status: FlowStatus;
    /**
     * The time at which the flow was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * The version of the flow. When you update a flow, the version updated is the DRAFT version.
     */
    version: DraftVersion;
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
  export interface UpdatePromptRequest {
    /**
     * The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The name of the default variant for the prompt. This value must match the name field in the relevant PromptVariant object.
     */
    defaultVariant?: PromptVariantName;
    /**
     * A description for the prompt.
     */
    description?: PromptDescription;
    /**
     * A name for the prompt.
     */
    name: PromptName;
    /**
     * The unique identifier of the prompt.
     */
    promptIdentifier: PromptIdentifier;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     */
    variants?: PromptVariantList;
  }
  export interface UpdatePromptResponse {
    /**
     * The Amazon Resource Name (ARN) of the prompt.
     */
    arn: PromptArn;
    /**
     * The time at which the prompt was created.
     */
    createdAt: DateTimestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.
     */
    customerEncryptionKeyArn?: KmsKeyArn;
    /**
     * The name of the default variant for the prompt. This value must match the name field in the relevant PromptVariant object.
     */
    defaultVariant?: PromptVariantName;
    /**
     * The description of the prompt.
     */
    description?: PromptDescription;
    /**
     * The unique identifier of the prompt.
     */
    id: PromptId;
    /**
     * The name of the prompt.
     */
    name: PromptName;
    /**
     * The time at which the prompt was last updated.
     */
    updatedAt: DateTimestamp;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     */
    variants?: PromptVariantList;
    /**
     * The version of the prompt. When you update a prompt, the version updated is the DRAFT version.
     */
    version: Version;
  }
  export type Url = string;
  export interface UrlConfiguration {
    /**
     * One or more seed or starting point URLs.
     */
    seedUrls?: SeedUrls;
  }
  export interface VectorIngestionConfiguration {
    /**
     * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
     */
    chunkingConfiguration?: ChunkingConfiguration;
    /**
     * A custom document transformer for parsed data source documents.
     */
    customTransformationConfiguration?: CustomTransformationConfiguration;
    /**
     * A custom parser for data source documents.
     */
    parsingConfiguration?: ParsingConfiguration;
  }
  export interface VectorKnowledgeBaseConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.
     */
    embeddingModelArn: BedrockEmbeddingModelArn;
    /**
     * The embeddings model configuration details for the vector model used in Knowledge Base.
     */
    embeddingModelConfiguration?: EmbeddingModelConfiguration;
  }
  export type Version = string;
  export interface WebCrawlerConfiguration {
    /**
     * The configuration of crawl limits for the web URLs.
     */
    crawlerLimits?: WebCrawlerLimits;
    /**
     * A list of one or more exclusion regular expression patterns to exclude certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
     */
    exclusionFilters?: FilterList;
    /**
     * A list of one or more inclusion regular expression patterns to include certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
     */
    inclusionFilters?: FilterList;
    /**
     * The scope of what is crawled for your URLs. You can choose to crawl only web pages that belong to the same host or primary domain. For example, only web pages that contain the seed URL "https://docs.aws.amazon.com/bedrock/latest/userguide/" and no other domains. You can choose to include sub domains in addition to the host or primary domain. For example, web pages that contain "aws.amazon.com" can also include sub domain "docs.aws.amazon.com".
     */
    scope?: WebScopeType;
  }
  export interface WebCrawlerLimits {
    /**
     * The max rate at which pages are crawled, up to 300 per minute per host.
     */
    rateLimit?: WebCrawlerLimitsRateLimitInteger;
  }
  export type WebCrawlerLimitsRateLimitInteger = number;
  export interface WebDataSourceConfiguration {
    /**
     * The Web Crawler configuration details for the web data source.
     */
    crawlerConfiguration?: WebCrawlerConfiguration;
    /**
     * The source configuration details for the web data source.
     */
    sourceConfiguration: WebSourceConfiguration;
  }
  export type WebScopeType = "HOST_ONLY"|"SUBDOMAINS"|string;
  export interface WebSourceConfiguration {
    /**
     * The configuration of the URL/URLs.
     */
    urlConfiguration: UrlConfiguration;
  }
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
