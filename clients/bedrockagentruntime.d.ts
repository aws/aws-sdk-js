import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
import {EventStream} from '../lib/event-stream/event-stream';
interface Blob {}
declare class BedrockAgentRuntime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: BedrockAgentRuntime.Types.ClientConfiguration)
  config: Config & BedrockAgentRuntime.Types.ClientConfiguration;
  /**
   * Sends a prompt for the agent to process and respond to.  The CLI doesn't support InvokeAgent.    To continue the same conversation with an agent, use the same sessionId value in the request.   To activate trace enablement, turn enableTrace to true. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see Trace enablement.   End a conversation by setting endSession to true.   Include attributes for the session or prompt in the sessionState object.   The response is returned in the bytes field of the chunk object.   The attribution object contains citations for parts of the response.   If you set enableTrace to true in the request, you can trace the agent's steps and reasoning process that led it to the response.   Errors are also surfaced in the response.  
   */
  invokeAgent(params: BedrockAgentRuntime.Types.InvokeAgentRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.InvokeAgentResponse) => void): Request<BedrockAgentRuntime.Types.InvokeAgentResponse, AWSError>;
  /**
   * Sends a prompt for the agent to process and respond to.  The CLI doesn't support InvokeAgent.    To continue the same conversation with an agent, use the same sessionId value in the request.   To activate trace enablement, turn enableTrace to true. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see Trace enablement.   End a conversation by setting endSession to true.   Include attributes for the session or prompt in the sessionState object.   The response is returned in the bytes field of the chunk object.   The attribution object contains citations for parts of the response.   If you set enableTrace to true in the request, you can trace the agent's steps and reasoning process that led it to the response.   Errors are also surfaced in the response.  
   */
  invokeAgent(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.InvokeAgentResponse) => void): Request<BedrockAgentRuntime.Types.InvokeAgentResponse, AWSError>;
  /**
   * Queries a knowledge base and retrieves information from it.
   */
  retrieve(params: BedrockAgentRuntime.Types.RetrieveRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.RetrieveResponse) => void): Request<BedrockAgentRuntime.Types.RetrieveResponse, AWSError>;
  /**
   * Queries a knowledge base and retrieves information from it.
   */
  retrieve(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.RetrieveResponse) => void): Request<BedrockAgentRuntime.Types.RetrieveResponse, AWSError>;
  /**
   * Queries a knowledge base and generates responses based on the retrieved results. The response only cites sources that are relevant to the query.
   */
  retrieveAndGenerate(params: BedrockAgentRuntime.Types.RetrieveAndGenerateRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.RetrieveAndGenerateResponse) => void): Request<BedrockAgentRuntime.Types.RetrieveAndGenerateResponse, AWSError>;
  /**
   * Queries a knowledge base and generates responses based on the retrieved results. The response only cites sources that are relevant to the query.
   */
  retrieveAndGenerate(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.RetrieveAndGenerateResponse) => void): Request<BedrockAgentRuntime.Types.RetrieveAndGenerateResponse, AWSError>;
}
declare namespace BedrockAgentRuntime {
  export interface AccessDeniedException {
    message?: NonBlankString;
  }
  export interface ActionGroupInvocationInput {
    /**
     * The name of the action group.
     */
    actionGroupName?: ActionGroupName;
    /**
     * The path to the API to call, based off the action group.
     */
    apiPath?: ApiPath;
    /**
     * The parameters in the Lambda input event.
     */
    parameters?: Parameters;
    /**
     * The parameters in the request body for the Lambda input event.
     */
    requestBody?: RequestBody;
    /**
     * The API method being used, based off the action group.
     */
    verb?: Verb;
  }
  export interface ActionGroupInvocationOutput {
    /**
     * The JSON-formatted string returned by the API invoked by the action group.
     */
    text?: ActionGroupOutputString;
  }
  export type ActionGroupName = string;
  export type ActionGroupOutputString = string;
  export type AgentAliasId = string;
  export type AgentId = string;
  export type ApiPath = string;
  export interface Attribution {
    /**
     * A list of citations and related information for a part of an agent response.
     */
    citations?: Citations;
  }
  export interface BadGatewayException {
    message?: NonBlankString;
    /**
     * The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.
     */
    resourceName?: NonBlankString;
  }
  export type BedrockModelArn = string;
  export type Boolean = boolean;
  export interface Citation {
    /**
     * Contains the generated response and metadata 
     */
    generatedResponsePart?: GeneratedResponsePart;
    /**
     * Contains metadata about the sources cited for the generated response.
     */
    retrievedReferences?: RetrievedReferences;
  }
  export type Citations = Citation[];
  export interface ConflictException {
    message?: NonBlankString;
  }
  export type ContentMap = {[key: string]: Parameters};
  export type CreationMode = "DEFAULT"|"OVERRIDDEN"|string;
  export interface DependencyFailedException {
    message?: NonBlankString;
    /**
     * The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.
     */
    resourceName?: NonBlankString;
  }
  export type Double = number;
  export type FailureReasonString = string;
  export interface FailureTrace {
    /**
     * The reason the interaction failed.
     */
    failureReason?: FailureReasonString;
    /**
     * The unique identifier of the trace.
     */
    traceId?: TraceId;
  }
  export interface FilterAttribute {
    /**
     * The name that the metadata attribute must match.
     */
    key: FilterKey;
    /**
     * The value to whcih to compare the value of the metadata attribute.
     */
    value: FilterValue;
  }
  export type FilterKey = string;
  export interface FilterValue {
  }
  export interface FinalResponse {
    /**
     * The text in the response to the user.
     */
    text?: FinalResponseString;
  }
  export type FinalResponseString = string;
  export interface GeneratedResponsePart {
    /**
     * Contains metadata about a textual part of the generated response that is accompanied by a citation.
     */
    textResponsePart?: TextResponsePart;
  }
  export interface GenerationConfiguration {
    /**
     * Contains the template for the prompt that's sent to the model for response generation.
     */
    promptTemplate?: PromptTemplate;
  }
  export interface InferenceConfiguration {
    /**
     * The maximum number of tokens allowed in the generated response.
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
  export type InputText = string;
  export interface InternalServerException {
    message?: NonBlankString;
  }
  export interface InvocationInput {
    /**
     * Contains information about the action group to be invoked.
     */
    actionGroupInvocationInput?: ActionGroupInvocationInput;
    /**
     * Specifies whether the agent is invoking an action group or a knowledge base.
     */
    invocationType?: InvocationType;
    /**
     * Contains details about the knowledge base to look up and the query to be made.
     */
    knowledgeBaseLookupInput?: KnowledgeBaseLookupInput;
    /**
     * The unique identifier of the trace.
     */
    traceId?: TraceId;
  }
  export type InvocationType = "ACTION_GROUP"|"KNOWLEDGE_BASE"|"FINISH"|string;
  export interface InvokeAgentRequest {
    /**
     * The alias of the agent to use.
     */
    agentAliasId: AgentAliasId;
    /**
     * The unique identifier of the agent to use.
     */
    agentId: AgentId;
    /**
     * Specifies whether to turn on the trace or not to track the agent's reasoning process. For more information, see Trace enablement.
     */
    enableTrace?: Boolean;
    /**
     * Specifies whether to end the session with the agent or not.
     */
    endSession?: Boolean;
    /**
     * The prompt text to send the agent.
     */
    inputText: InputText;
    /**
     * The unique identifier of the session. Use the same value across requests to continue the same conversation.
     */
    sessionId: SessionId;
    /**
     * Contains parameters that specify various attributes of the session. For more information, see Control session context.
     */
    sessionState?: SessionState;
  }
  export interface InvokeAgentResponse {
    /**
     * The agent's response to the user prompt.
     */
    completion: ResponseStream;
    /**
     * The MIME type of the input data in the request. The default value is application/json.
     */
    contentType: MimeType;
    /**
     * The unique identifier of the session with the agent.
     */
    sessionId: SessionId;
  }
  export type KmsKeyArn = string;
  export type KnowledgeBaseId = string;
  export interface KnowledgeBaseLookupInput {
    /**
     * The unique identifier of the knowledge base to look up.
     */
    knowledgeBaseId?: TraceKnowledgeBaseId;
    /**
     * The query made to the knowledge base.
     */
    text?: KnowledgeBaseLookupInputString;
  }
  export type KnowledgeBaseLookupInputString = string;
  export interface KnowledgeBaseLookupOutput {
    /**
     * Contains metadata about the sources cited for the generated response.
     */
    retrievedReferences?: RetrievedReferences;
  }
  export interface KnowledgeBaseQuery {
    /**
     * The text of the query made to the knowledge base.
     */
    text: KnowledgeBaseQueryTextString;
  }
  export type KnowledgeBaseQueryTextString = string;
  export interface KnowledgeBaseRetrievalConfiguration {
    /**
     * Contains details about how the results from the vector search should be returned. For more information, see Query configurations.
     */
    vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration;
  }
  export interface KnowledgeBaseRetrievalResult {
    /**
     * Contains a chunk of text from a data source in the knowledge base.
     */
    content: RetrievalResultContent;
    /**
     * Contains information about the location of the data source.
     */
    location?: RetrievalResultLocation;
    /**
     * Contains metadata attributes and their values for the file in the data source. For more information, see Metadata and filtering.
     */
    metadata?: RetrievalResultMetadata;
    /**
     * The level of relevance of the result to the query.
     */
    score?: Double;
  }
  export type KnowledgeBaseRetrievalResults = KnowledgeBaseRetrievalResult[];
  export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
    /**
     * Contains configurations for response generation based on the knowwledge base query results.
     */
    generationConfiguration?: GenerationConfiguration;
    /**
     * The unique identifier of the knowledge base that is queried and the foundation model used for generation.
     */
    knowledgeBaseId: KnowledgeBaseId;
    /**
     * The ARN of the foundation model used to generate a response.
     */
    modelArn: BedrockModelArn;
    /**
     * Contains configurations for how to retrieve and return the knowledge base query.
     */
    retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
  }
  export interface KnowledgeBaseVectorSearchConfiguration {
    /**
     * Specifies the filters to use on the metadata in the knowledge base data sources before returning results. For more information, see Query configurations.
     */
    filter?: RetrievalFilter;
    /**
     * The number of source chunks to retrieve.
     */
    numberOfResults?: KnowledgeBaseVectorSearchConfigurationNumberOfResultsInteger;
    /**
     * By default, Amazon Bedrock decides a search strategy for you. If you're using an Amazon OpenSearch Serverless vector store that contains a filterable text field, you can specify whether to query the knowledge base with a HYBRID search using both vector embeddings and raw text, or SEMANTIC search using only vector embeddings. For other vector store configurations, only SEMANTIC search is available. For more information, see Test a knowledge base.
     */
    overrideSearchType?: SearchType;
  }
  export type KnowledgeBaseVectorSearchConfigurationNumberOfResultsInteger = number;
  export type LambdaArn = string;
  export type MaximumLength = number;
  export type MimeType = string;
  export interface ModelInvocationInput {
    /**
     * Specifications about the inference parameters that were provided alongside the prompt. These are specified in the PromptOverrideConfiguration object that was set when the agent was created or updated. For more information, see Inference parameters for foundation models.
     */
    inferenceConfiguration?: InferenceConfiguration;
    /**
     * The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence.
     */
    overrideLambda?: LambdaArn;
    /**
     * Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the promptType.
     */
    parserMode?: CreationMode;
    /**
     * Specifies whether the default prompt template was OVERRIDDEN. If it was, the basePromptTemplate that was set in the PromptOverrideConfiguration object when the agent was created or updated is used instead.
     */
    promptCreationMode?: CreationMode;
    /**
     * The text that prompted the agent at this step.
     */
    text?: PromptText;
    /**
     * The unique identifier of the trace.
     */
    traceId?: TraceId;
    /**
     * The step in the agent sequence.
     */
    type?: PromptType;
  }
  export type NextToken = string;
  export type NonBlankString = string;
  export interface Observation {
    /**
     * Contains the JSON-formatted string returned by the API invoked by the action group.
     */
    actionGroupInvocationOutput?: ActionGroupInvocationOutput;
    /**
     * Contains details about the response to the user.
     */
    finalResponse?: FinalResponse;
    /**
     * Contains details about the results from looking up the knowledge base.
     */
    knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput;
    /**
     * Contains details about the response to reprompt the input.
     */
    repromptResponse?: RepromptResponse;
    /**
     * The unique identifier of the trace.
     */
    traceId?: TraceId;
    /**
     * Specifies what kind of information the agent returns in the observation. The following values are possible.    ACTION_GROUP – The agent returns the result of an action group.    KNOWLEDGE_BASE – The agent returns information from a knowledge base.    FINISH – The agent returns a final response to the user with no follow-up.    ASK_USER – The agent asks the user a question.    REPROMPT – The agent prompts the user again for the same information.  
     */
    type?: Type;
  }
  export interface OrchestrationTrace {
    /**
     * Contains information pertaining to the action group or knowledge base that is being invoked.
     */
    invocationInput?: InvocationInput;
    /**
     * The input for the orchestration step.   The type is ORCHESTRATION.   The text contains the prompt.   The inferenceConfiguration, parserMode, and overrideLambda values are set in the PromptOverrideConfiguration object that was set when the agent was created or updated.  
     */
    modelInvocationInput?: ModelInvocationInput;
    /**
     * Details about the observation (the output of the action group Lambda or knowledge base) made by the agent.
     */
    observation?: Observation;
    /**
     * Details about the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.
     */
    rationale?: Rationale;
  }
  export type OutputString = string;
  export interface Parameter {
    /**
     * The name of the parameter.
     */
    name?: String;
    /**
     * The type of the parameter.
     */
    type?: String;
    /**
     * The value of the parameter.
     */
    value?: String;
  }
  export type Parameters = Parameter[];
  export type PartBody = Buffer|Uint8Array|Blob|string;
  export interface PayloadPart {
    /**
     * Contains citations for a part of an agent response.
     */
    attribution?: Attribution;
    /**
     * A part of the agent response in bytes.
     */
    bytes?: PartBody;
  }
  export interface PostProcessingModelInvocationOutput {
    /**
     * Details about the response from the Lambda parsing of the output of the post-processing step.
     */
    parsedResponse?: PostProcessingParsedResponse;
    /**
     * The unique identifier of the trace.
     */
    traceId?: TraceId;
  }
  export interface PostProcessingParsedResponse {
    /**
     * The text returned by the parser.
     */
    text?: OutputString;
  }
  export interface PostProcessingTrace {
    /**
     * The input for the post-processing step.   The type is POST_PROCESSING.   The text contains the prompt.   The inferenceConfiguration, parserMode, and overrideLambda values are set in the PromptOverrideConfiguration object that was set when the agent was created or updated.  
     */
    modelInvocationInput?: ModelInvocationInput;
    /**
     * The foundation model output from the post-processing step.
     */
    modelInvocationOutput?: PostProcessingModelInvocationOutput;
  }
  export interface PreProcessingModelInvocationOutput {
    /**
     * Details about the response from the Lambda parsing of the output of the pre-processing step.
     */
    parsedResponse?: PreProcessingParsedResponse;
    /**
     * The unique identifier of the trace.
     */
    traceId?: TraceId;
  }
  export interface PreProcessingParsedResponse {
    /**
     * Whether the user input is valid or not. If false, the agent doesn't proceed to orchestration.
     */
    isValid?: Boolean;
    /**
     * The text returned by the parsing of the pre-processing step, explaining the steps that the agent plans to take in orchestration, if the user input is valid.
     */
    rationale?: RationaleString;
  }
  export interface PreProcessingTrace {
    /**
     * The input for the pre-processing step.   The type is PRE_PROCESSING.   The text contains the prompt.   The inferenceConfiguration, parserMode, and overrideLambda values are set in the PromptOverrideConfiguration object that was set when the agent was created or updated.  
     */
    modelInvocationInput?: ModelInvocationInput;
    /**
     * The foundation model output from the pre-processing step.
     */
    modelInvocationOutput?: PreProcessingModelInvocationOutput;
  }
  export type PromptSessionAttributesMap = {[key: string]: String};
  export interface PromptTemplate {
    /**
     * The template for the prompt that's sent to the model for response generation. You can include prompt placeholders, which become replaced before the prompt is sent to the model to provide instructions and context to the model. In addition, you can include XML tags to delineate meaningful sections of the prompt template. For more information, see the following resources:    Knowledge base prompt templates     Use XML tags with Anthropic Claude models   
     */
    textPromptTemplate?: TextPromptTemplate;
  }
  export type PromptText = string;
  export type PromptType = "PRE_PROCESSING"|"ORCHESTRATION"|"KNOWLEDGE_BASE_RESPONSE_GENERATION"|"POST_PROCESSING"|string;
  export interface Rationale {
    /**
     * The reasoning or thought process of the agent, based on the input.
     */
    text?: RationaleString;
    /**
     * The unique identifier of the trace step.
     */
    traceId?: TraceId;
  }
  export type RationaleString = string;
  export interface RepromptResponse {
    /**
     * Specifies what output is prompting the agent to reprompt the input.
     */
    source?: Source;
    /**
     * The text reprompting the input.
     */
    text?: String;
  }
  export interface RequestBody {
    /**
     * The content in the request body.
     */
    content?: ContentMap;
  }
  export interface ResourceNotFoundException {
    message?: NonBlankString;
  }
  export type ResponseStream = EventStream<{accessDeniedException?:AccessDeniedException,badGatewayException?:BadGatewayException,chunk?:PayloadPart,conflictException?:ConflictException,dependencyFailedException?:DependencyFailedException,internalServerException?:InternalServerException,resourceNotFoundException?:ResourceNotFoundException,serviceQuotaExceededException?:ServiceQuotaExceededException,throttlingException?:ThrottlingException,trace?:TracePart,validationException?:ValidationException}>;
  export interface RetrievalFilter {
    /**
     * Knowledge base data sources whose metadata attributes fulfill all the filter conditions inside this list are returned.
     */
    andAll?: RetrievalFilterList;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value matches the value in this object are returned.
     */
    equals?: FilterAttribute;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value is greater than the value in this object are returned.
     */
    greaterThan?: FilterAttribute;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value is greater than or equal to the value in this object are returned.
     */
    greaterThanOrEquals?: FilterAttribute;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value is in the list specified in the value in this object are returned.
     */
    in?: FilterAttribute;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value is less than the value in this object are returned.
     */
    lessThan?: FilterAttribute;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value is less than or equal to the value in this object are returned.
     */
    lessThanOrEquals?: FilterAttribute;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value doesn't match the value in this object are returned.
     */
    notEquals?: FilterAttribute;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value isn't in the list specified in the value in this object are returned.
     */
    notIn?: FilterAttribute;
    /**
     * Knowledge base data sources whose metadata attributes fulfill at least one of the filter conditions inside this list are returned.
     */
    orAll?: RetrievalFilterList;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value starts with the value in this object are returned. This filter is currently only supported for Amazon OpenSearch Serverless vector stores.
     */
    startsWith?: FilterAttribute;
  }
  export type RetrievalFilterList = RetrievalFilter[];
  export interface RetrievalResultContent {
    /**
     * The cited text from the data source.
     */
    text: String;
  }
  export interface RetrievalResultLocation {
    /**
     * Contains the S3 location of the data source.
     */
    s3Location?: RetrievalResultS3Location;
    /**
     * The type of the location of the data source.
     */
    type: RetrievalResultLocationType;
  }
  export type RetrievalResultLocationType = "S3"|string;
  export type RetrievalResultMetadata = {[key: string]: RetrievalResultMetadataValue};
  export type RetrievalResultMetadataKey = string;
  export interface RetrievalResultMetadataValue {
  }
  export interface RetrievalResultS3Location {
    /**
     * The S3 URI of the data source.
     */
    uri?: String;
  }
  export interface RetrieveAndGenerateConfiguration {
    /**
     * Contains details about the resource being queried.
     */
    knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
    /**
     * The type of resource that is queried by the request.
     */
    type: RetrieveAndGenerateType;
  }
  export interface RetrieveAndGenerateInput {
    /**
     * The query made to the knowledge base.
     */
    text: RetrieveAndGenerateInputTextString;
  }
  export type RetrieveAndGenerateInputTextString = string;
  export interface RetrieveAndGenerateOutput {
    /**
     * The response generated from querying the knowledge base.
     */
    text: String;
  }
  export interface RetrieveAndGenerateRequest {
    /**
     * Contains the query to be made to the knowledge base.
     */
    input: RetrieveAndGenerateInput;
    /**
     * Contains configurations for the knowledge base query and retrieval process. For more information, see Query configurations.
     */
    retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;
    /**
     * Contains details about the session with the knowledge base.
     */
    sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
    /**
     * The unique identifier of the session. Reuse the same value to continue the same session with the knowledge base.
     */
    sessionId?: SessionId;
  }
  export interface RetrieveAndGenerateResponse {
    /**
     * A list of segments of the generated response that are based on sources in the knowledge base, alongside information about the sources.
     */
    citations?: Citations;
    /**
     * Contains the response generated from querying the knowledge base.
     */
    output: RetrieveAndGenerateOutput;
    /**
     * The unique identifier of the session. Reuse the same value to continue the same session with the knowledge base.
     */
    sessionId: SessionId;
  }
  export interface RetrieveAndGenerateSessionConfiguration {
    /**
     * The ARN of the KMS key encrypting the session.
     */
    kmsKeyArn: KmsKeyArn;
  }
  export type RetrieveAndGenerateType = "KNOWLEDGE_BASE"|string;
  export interface RetrieveRequest {
    /**
     * The unique identifier of the knowledge base to query.
     */
    knowledgeBaseId: KnowledgeBaseId;
    /**
     * If there are more results than can fit in the response, the response returns a nextToken. Use this token in the nextToken field of another request to retrieve the next batch of results.
     */
    nextToken?: NextToken;
    /**
     * Contains configurations for the knowledge base query and retrieval process. For more information, see Query configurations.
     */
    retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
    /**
     * Contains the query to send the knowledge base.
     */
    retrievalQuery: KnowledgeBaseQuery;
  }
  export interface RetrieveResponse {
    /**
     * If there are more results than can fit in the response, the response returns a nextToken. Use this token in the nextToken field of another request to retrieve the next batch of results.
     */
    nextToken?: NextToken;
    /**
     * A list of results from querying the knowledge base.
     */
    retrievalResults: KnowledgeBaseRetrievalResults;
  }
  export interface RetrievedReference {
    /**
     * Contains the cited text from the data source.
     */
    content?: RetrievalResultContent;
    /**
     * Contains information about the location of the data source.
     */
    location?: RetrievalResultLocation;
    /**
     * Contains metadata attributes and their values for the file in the data source. For more information, see Metadata and filtering.
     */
    metadata?: RetrievalResultMetadata;
  }
  export type RetrievedReferences = RetrievedReference[];
  export type SearchType = "HYBRID"|"SEMANTIC"|string;
  export interface ServiceQuotaExceededException {
    message?: NonBlankString;
  }
  export type SessionAttributesMap = {[key: string]: String};
  export type SessionId = string;
  export interface SessionState {
    /**
     * Contains attributes that persist across a prompt and the values of those attributes. These attributes replace the $prompt_session_attributes$ placeholder variable in the orchestration prompt template. For more information, see Prompt template placeholder variables.
     */
    promptSessionAttributes?: PromptSessionAttributesMap;
    /**
     * Contains attributes that persist across a session and the values of those attributes.
     */
    sessionAttributes?: SessionAttributesMap;
  }
  export type Source = "ACTION_GROUP"|"KNOWLEDGE_BASE"|"PARSER"|string;
  export interface Span {
    /**
     * Where the text with a citation ends in the generated output.
     */
    end?: SpanEndInteger;
    /**
     * Where the text with a citation starts in the generated output.
     */
    start?: SpanStartInteger;
  }
  export type SpanEndInteger = number;
  export type SpanStartInteger = number;
  export type StopSequences = String[];
  export type String = string;
  export type Temperature = number;
  export type TextPromptTemplate = string;
  export interface TextResponsePart {
    /**
     * Contains information about where the text with a citation begins and ends in the generated output.
     */
    span?: Span;
    /**
     * The part of the generated text that contains a citation.
     */
    text?: String;
  }
  export interface ThrottlingException {
    message?: NonBlankString;
  }
  export type TopK = number;
  export type TopP = number;
  export interface Trace {
    /**
     * Contains information about the failure of the interaction.
     */
    failureTrace?: FailureTrace;
    /**
     * Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.
     */
    orchestrationTrace?: OrchestrationTrace;
    /**
     * Details about the post-processing step, in which the agent shapes the response..
     */
    postProcessingTrace?: PostProcessingTrace;
    /**
     * Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.
     */
    preProcessingTrace?: PreProcessingTrace;
  }
  export type TraceId = string;
  export type TraceKnowledgeBaseId = string;
  export interface TracePart {
    /**
     * The unique identifier of the alias of the agent.
     */
    agentAliasId?: AgentAliasId;
    /**
     * The unique identifier of the agent.
     */
    agentId?: AgentId;
    /**
     * The unique identifier of the session with the agent.
     */
    sessionId?: SessionId;
    /**
     * Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see Trace enablement.
     */
    trace?: Trace;
  }
  export type Type = "ACTION_GROUP"|"KNOWLEDGE_BASE"|"FINISH"|"ASK_USER"|"REPROMPT"|string;
  export interface ValidationException {
    message?: NonBlankString;
  }
  export type Verb = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-07-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the BedrockAgentRuntime client.
   */
  export import Types = BedrockAgentRuntime;
}
export = BedrockAgentRuntime;
