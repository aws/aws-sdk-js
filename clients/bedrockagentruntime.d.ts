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
   * Invokes the specified Bedrock model to run inference using the input provided in the request body.
   */
  invokeAgent(params: BedrockAgentRuntime.Types.InvokeAgentRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.InvokeAgentResponse) => void): Request<BedrockAgentRuntime.Types.InvokeAgentResponse, AWSError>;
  /**
   * Invokes the specified Bedrock model to run inference using the input provided in the request body.
   */
  invokeAgent(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.InvokeAgentResponse) => void): Request<BedrockAgentRuntime.Types.InvokeAgentResponse, AWSError>;
  /**
   * Retrieve from knowledge base.
   */
  retrieve(params: BedrockAgentRuntime.Types.RetrieveRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.RetrieveResponse) => void): Request<BedrockAgentRuntime.Types.RetrieveResponse, AWSError>;
  /**
   * Retrieve from knowledge base.
   */
  retrieve(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.RetrieveResponse) => void): Request<BedrockAgentRuntime.Types.RetrieveResponse, AWSError>;
  /**
   * RetrieveAndGenerate API
   */
  retrieveAndGenerate(params: BedrockAgentRuntime.Types.RetrieveAndGenerateRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.RetrieveAndGenerateResponse) => void): Request<BedrockAgentRuntime.Types.RetrieveAndGenerateResponse, AWSError>;
  /**
   * RetrieveAndGenerate API
   */
  retrieveAndGenerate(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.RetrieveAndGenerateResponse) => void): Request<BedrockAgentRuntime.Types.RetrieveAndGenerateResponse, AWSError>;
}
declare namespace BedrockAgentRuntime {
  export interface AccessDeniedException {
    message?: NonBlankString;
  }
  export interface ActionGroupInvocationInput {
    actionGroupName?: ActionGroupName;
    verb?: Verb;
    apiPath?: ApiPath;
    parameters?: Parameters;
    requestBody?: RequestBody;
  }
  export interface ActionGroupInvocationOutput {
    text?: ActionGroupOutputString;
  }
  export type ActionGroupName = string;
  export type ActionGroupOutputString = string;
  export type AgentAliasId = string;
  export type AgentId = string;
  export type ApiPath = string;
  export interface Attribution {
    citations?: Citations;
  }
  export interface BadGatewayException {
    message?: NonBlankString;
    resourceName?: NonBlankString;
  }
  export type BedrockModelArn = string;
  export type Boolean = boolean;
  export interface Citation {
    generatedResponsePart?: GeneratedResponsePart;
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
    resourceName?: NonBlankString;
  }
  export type Double = number;
  export type FailureReasonString = string;
  export interface FailureTrace {
    traceId?: TraceId;
    failureReason?: FailureReasonString;
  }
  export interface FinalResponse {
    text?: FinalResponseString;
  }
  export type FinalResponseString = string;
  export interface GeneratedResponsePart {
    textResponsePart?: TextResponsePart;
  }
  export interface InferenceConfiguration {
    temperature?: Temperature;
    topP?: TopP;
    topK?: TopK;
    maximumLength?: MaximumLength;
    stopSequences?: StopSequences;
  }
  export type InputText = string;
  export interface InternalServerException {
    message?: NonBlankString;
  }
  export interface InvocationInput {
    traceId?: TraceId;
    invocationType?: InvocationType;
    actionGroupInvocationInput?: ActionGroupInvocationInput;
    knowledgeBaseLookupInput?: KnowledgeBaseLookupInput;
  }
  export type InvocationType = "ACTION_GROUP"|"KNOWLEDGE_BASE"|"FINISH"|string;
  export interface InvokeAgentRequest {
    /**
     * Session state passed by customer. Base64 encoded json string representation of SessionState.
     */
    sessionState?: SessionState;
    /**
     * Identifier for Agent
     */
    agentId: AgentId;
    /**
     * Identifier for Agent Alias
     */
    agentAliasId: AgentAliasId;
    /**
     * Identifier used for the current session
     */
    sessionId: SessionId;
    /**
     * End current session
     */
    endSession?: Boolean;
    /**
     * Enable agent trace events for improved debugging
     */
    enableTrace?: Boolean;
    /**
     * Input data in the format specified in the Content-Type request header.
     */
    inputText: InputText;
  }
  export interface InvokeAgentResponse {
    /**
     * Inference response from the model in the format specified in the Content-Type response header.
     */
    completion: ResponseStream;
    /**
     * streaming response mimetype of the model
     */
    contentType: MimeType;
    /**
     * streaming response mimetype of the model
     */
    sessionId: SessionId;
  }
  export type KmsKeyArn = string;
  export type KnowledgeBaseId = string;
  export interface KnowledgeBaseLookupInput {
    text?: KnowledgeBaseLookupInputString;
    knowledgeBaseId?: TraceKnowledgeBaseId;
  }
  export type KnowledgeBaseLookupInputString = string;
  export interface KnowledgeBaseLookupOutput {
    retrievedReferences?: RetrievedReferences;
  }
  export interface KnowledgeBaseQuery {
    /**
     * Knowledge base input query in text
     */
    text: KnowledgeBaseQueryTextString;
  }
  export type KnowledgeBaseQueryTextString = string;
  export interface KnowledgeBaseRetrievalConfiguration {
    vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration;
  }
  export interface KnowledgeBaseRetrievalResult {
    content: RetrievalResultContent;
    location?: RetrievalResultLocation;
    /**
     * The relevance score of a result.
     */
    score?: Double;
  }
  export type KnowledgeBaseRetrievalResults = KnowledgeBaseRetrievalResult[];
  export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
    knowledgeBaseId: KnowledgeBaseId;
    modelArn: BedrockModelArn;
  }
  export interface KnowledgeBaseVectorSearchConfiguration {
    /**
     * Top-K results to retrieve from knowledge base.
     */
    numberOfResults: KnowledgeBaseVectorSearchConfigurationNumberOfResultsInteger;
  }
  export type KnowledgeBaseVectorSearchConfigurationNumberOfResultsInteger = number;
  export type LambdaArn = string;
  export type MaximumLength = number;
  export type MimeType = string;
  export interface ModelInvocationInput {
    traceId?: TraceId;
    text?: PromptText;
    type?: PromptType;
    inferenceConfiguration?: InferenceConfiguration;
    overrideLambda?: LambdaArn;
    promptCreationMode?: CreationMode;
    parserMode?: CreationMode;
  }
  export type NextToken = string;
  export type NonBlankString = string;
  export interface Observation {
    traceId?: TraceId;
    type?: Type;
    actionGroupInvocationOutput?: ActionGroupInvocationOutput;
    knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput;
    finalResponse?: FinalResponse;
    repromptResponse?: RepromptResponse;
  }
  export interface OrchestrationTrace {
    rationale?: Rationale;
    invocationInput?: InvocationInput;
    observation?: Observation;
    modelInvocationInput?: ModelInvocationInput;
  }
  export type OutputString = string;
  export interface Parameter {
    /**
     * Name of parameter
     */
    name?: String;
    /**
     * Type of parameter
     */
    type?: String;
    /**
     * Value of parameter
     */
    value?: String;
  }
  export type Parameters = Parameter[];
  export type PartBody = Buffer|Uint8Array|Blob|string;
  export interface PayloadPart {
    bytes?: PartBody;
    attribution?: Attribution;
  }
  export interface PostProcessingModelInvocationOutput {
    traceId?: TraceId;
    parsedResponse?: PostProcessingParsedResponse;
  }
  export interface PostProcessingParsedResponse {
    text?: OutputString;
  }
  export interface PostProcessingTrace {
    modelInvocationInput?: ModelInvocationInput;
    modelInvocationOutput?: PostProcessingModelInvocationOutput;
  }
  export interface PreProcessingModelInvocationOutput {
    traceId?: TraceId;
    parsedResponse?: PreProcessingParsedResponse;
  }
  export interface PreProcessingParsedResponse {
    rationale?: RationaleString;
    /**
     * Boolean value
     */
    isValid?: Boolean;
  }
  export interface PreProcessingTrace {
    modelInvocationInput?: ModelInvocationInput;
    modelInvocationOutput?: PreProcessingModelInvocationOutput;
  }
  export type PromptSessionAttributesMap = {[key: string]: String};
  export type PromptText = string;
  export type PromptType = "PRE_PROCESSING"|"ORCHESTRATION"|"KNOWLEDGE_BASE_RESPONSE_GENERATION"|"POST_PROCESSING"|string;
  export interface Rationale {
    traceId?: TraceId;
    text?: RationaleString;
  }
  export type RationaleString = string;
  export interface RepromptResponse {
    /**
     * Reprompt response text
     */
    text?: String;
    source?: Source;
  }
  export interface RequestBody {
    content?: ContentMap;
  }
  export interface ResourceNotFoundException {
    message?: NonBlankString;
  }
  export type ResponseStream = EventStream<{chunk?:PayloadPart,trace?:TracePart,internalServerException?:InternalServerException,validationException?:ValidationException,resourceNotFoundException?:ResourceNotFoundException,serviceQuotaExceededException?:ServiceQuotaExceededException,throttlingException?:ThrottlingException,accessDeniedException?:AccessDeniedException,conflictException?:ConflictException,dependencyFailedException?:DependencyFailedException,badGatewayException?:BadGatewayException}>;
  export interface RetrievalResultContent {
    /**
     * Content of a retrieval result in text
     */
    text: String;
  }
  export interface RetrievalResultLocation {
    type: RetrievalResultLocationType;
    s3Location?: RetrievalResultS3Location;
  }
  export type RetrievalResultLocationType = "S3"|string;
  export interface RetrievalResultS3Location {
    /**
     * URI of S3 location
     */
    uri?: String;
  }
  export interface RetrieveAndGenerateConfiguration {
    type: RetrieveAndGenerateType;
    knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
  }
  export interface RetrieveAndGenerateInput {
    /**
     * Customer input of the turn in text
     */
    text: RetrieveAndGenerateInputTextString;
  }
  export type RetrieveAndGenerateInputTextString = string;
  export interface RetrieveAndGenerateOutput {
    /**
     * Service response of the turn in text
     */
    text: String;
  }
  export interface RetrieveAndGenerateRequest {
    sessionId?: SessionId;
    input: RetrieveAndGenerateInput;
    retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;
    sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
  }
  export interface RetrieveAndGenerateResponse {
    sessionId: SessionId;
    output: RetrieveAndGenerateOutput;
    citations?: Citations;
  }
  export interface RetrieveAndGenerateSessionConfiguration {
    /**
     * The KMS key arn to encrypt the customer data of the session.
     */
    kmsKeyArn: KmsKeyArn;
  }
  export type RetrieveAndGenerateType = "KNOWLEDGE_BASE"|string;
  export interface RetrieveRequest {
    knowledgeBaseId: KnowledgeBaseId;
    retrievalQuery: KnowledgeBaseQuery;
    retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
    nextToken?: NextToken;
  }
  export interface RetrieveResponse {
    retrievalResults: KnowledgeBaseRetrievalResults;
    nextToken?: NextToken;
  }
  export interface RetrievedReference {
    content?: RetrievalResultContent;
    location?: RetrievalResultLocation;
  }
  export type RetrievedReferences = RetrievedReference[];
  export interface ServiceQuotaExceededException {
    message?: NonBlankString;
  }
  export type SessionAttributesMap = {[key: string]: String};
  export type SessionId = string;
  export interface SessionState {
    /**
     * Session Attributes
     */
    sessionAttributes?: SessionAttributesMap;
    /**
     * Prompt Session Attributes
     */
    promptSessionAttributes?: PromptSessionAttributesMap;
  }
  export type Source = "ACTION_GROUP"|"KNOWLEDGE_BASE"|"PARSER"|string;
  export interface Span {
    /**
     * Start of span
     */
    start?: SpanStartInteger;
    /**
     * End of span
     */
    end?: SpanEndInteger;
  }
  export type SpanEndInteger = number;
  export type SpanStartInteger = number;
  export type StopSequences = String[];
  export type String = string;
  export type Temperature = number;
  export interface TextResponsePart {
    /**
     * Response part in text
     */
    text?: String;
    span?: Span;
  }
  export interface ThrottlingException {
    message?: NonBlankString;
  }
  export type TopK = number;
  export type TopP = number;
  export interface Trace {
    preProcessingTrace?: PreProcessingTrace;
    orchestrationTrace?: OrchestrationTrace;
    postProcessingTrace?: PostProcessingTrace;
    failureTrace?: FailureTrace;
  }
  export type TraceId = string;
  export type TraceKnowledgeBaseId = string;
  export interface TracePart {
    agentId?: AgentId;
    agentAliasId?: AgentAliasId;
    sessionId?: SessionId;
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
