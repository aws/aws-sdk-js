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
   * Deletes memory from the specified memory identifier.
   */
  deleteAgentMemory(params: BedrockAgentRuntime.Types.DeleteAgentMemoryRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.DeleteAgentMemoryResponse) => void): Request<BedrockAgentRuntime.Types.DeleteAgentMemoryResponse, AWSError>;
  /**
   * Deletes memory from the specified memory identifier.
   */
  deleteAgentMemory(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.DeleteAgentMemoryResponse) => void): Request<BedrockAgentRuntime.Types.DeleteAgentMemoryResponse, AWSError>;
  /**
   * Gets the sessions stored in the memory of the agent.
   */
  getAgentMemory(params: BedrockAgentRuntime.Types.GetAgentMemoryRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.GetAgentMemoryResponse) => void): Request<BedrockAgentRuntime.Types.GetAgentMemoryResponse, AWSError>;
  /**
   * Gets the sessions stored in the memory of the agent.
   */
  getAgentMemory(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.GetAgentMemoryResponse) => void): Request<BedrockAgentRuntime.Types.GetAgentMemoryResponse, AWSError>;
  /**
   *  The CLI doesn't support streaming operations in Amazon Bedrock, including InvokeAgent.  Sends a prompt for the agent to process and respond to. Note the following fields for the request:   To continue the same conversation with an agent, use the same sessionId value in the request.   To activate trace enablement, turn enableTrace to true. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see Trace enablement.   End a conversation by setting endSession to true.   In the sessionState object, you can include attributes for the session or prompt or, if you configured an action group to return control, results from invocation of the action group.   The response is returned in the bytes field of the chunk object.   The attribution object contains citations for parts of the response.   If you set enableTrace to true in the request, you can trace the agent's steps and reasoning process that led it to the response.   If the action predicted was configured to return control, the response returns parameters for the action, elicited from the user, in the returnControl field.   Errors are also surfaced in the response.  
   */
  invokeAgent(params: BedrockAgentRuntime.Types.InvokeAgentRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.InvokeAgentResponse) => void): Request<BedrockAgentRuntime.Types.InvokeAgentResponse, AWSError>;
  /**
   *  The CLI doesn't support streaming operations in Amazon Bedrock, including InvokeAgent.  Sends a prompt for the agent to process and respond to. Note the following fields for the request:   To continue the same conversation with an agent, use the same sessionId value in the request.   To activate trace enablement, turn enableTrace to true. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see Trace enablement.   End a conversation by setting endSession to true.   In the sessionState object, you can include attributes for the session or prompt or, if you configured an action group to return control, results from invocation of the action group.   The response is returned in the bytes field of the chunk object.   The attribution object contains citations for parts of the response.   If you set enableTrace to true in the request, you can trace the agent's steps and reasoning process that led it to the response.   If the action predicted was configured to return control, the response returns parameters for the action, elicited from the user, in the returnControl field.   Errors are also surfaced in the response.  
   */
  invokeAgent(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.InvokeAgentResponse) => void): Request<BedrockAgentRuntime.Types.InvokeAgentResponse, AWSError>;
  /**
   * Invokes an alias of a flow to run the inputs that you specify and return the output of each node as a stream. If there's an error, the error is returned. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide.  The CLI doesn't support streaming operations in Amazon Bedrock, including InvokeFlow. 
   */
  invokeFlow(params: BedrockAgentRuntime.Types.InvokeFlowRequest, callback?: (err: AWSError, data: BedrockAgentRuntime.Types.InvokeFlowResponse) => void): Request<BedrockAgentRuntime.Types.InvokeFlowResponse, AWSError>;
  /**
   * Invokes an alias of a flow to run the inputs that you specify and return the output of each node as a stream. If there's an error, the error is returned. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide.  The CLI doesn't support streaming operations in Amazon Bedrock, including InvokeFlow. 
   */
  invokeFlow(callback?: (err: AWSError, data: BedrockAgentRuntime.Types.InvokeFlowResponse) => void): Request<BedrockAgentRuntime.Types.InvokeFlowResponse, AWSError>;
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
     * How fulfillment of the action is handled. For more information, see Handling fulfillment of the action.
     */
    executionType?: ExecutionType;
    /**
     * The function in the action group to call.
     */
    function?: Function;
    /**
     * The unique identifier of the invocation. Only returned if the executionType is RETURN_CONTROL.
     */
    invocationId?: String;
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
  export type ActionInvocationType = "RESULT"|"USER_CONFIRMATION"|"USER_CONFIRMATION_AND_RESULT"|string;
  export type AdditionalModelRequestFields = {[key: string]: AdditionalModelRequestFieldsValue};
  export type AdditionalModelRequestFieldsKey = string;
  export interface AdditionalModelRequestFieldsValue {
  }
  export type AgentAliasId = string;
  export type AgentId = string;
  export type AgentVersion = string;
  export type ApiContentMap = {[key: string]: PropertyParameters};
  export interface ApiInvocationInput {
    /**
     * The action group that the API operation belongs to.
     */
    actionGroup: String;
    /**
     * Contains information about the API operation to invoke.
     */
    actionInvocationType?: ActionInvocationType;
    /**
     * The path to the API operation.
     */
    apiPath?: ApiPath;
    /**
     * The HTTP method of the API operation.
     */
    httpMethod?: String;
    /**
     * The parameters to provide for the API request, as the agent elicited from the user.
     */
    parameters?: ApiParameters;
    /**
     * The request body to provide for the API request, as the agent elicited from the user.
     */
    requestBody?: ApiRequestBody;
  }
  export interface ApiParameter {
    /**
     * The name of the parameter.
     */
    name?: String;
    /**
     * The data type for the parameter.
     */
    type?: String;
    /**
     * The value of the parameter.
     */
    value?: String;
  }
  export type ApiParameters = ApiParameter[];
  export type ApiPath = string;
  export interface ApiRequestBody {
    /**
     * The content of the request body. The key of the object in this field is a media type defining the format of the request body.
     */
    content?: ApiContentMap;
  }
  export interface ApiResult {
    /**
     * The action group that the API operation belongs to.
     */
    actionGroup: String;
    /**
     * The path to the API operation.
     */
    apiPath?: ApiPath;
    /**
     * Controls the API operations or functions to invoke based on the user confirmation.
     */
    confirmationState?: ConfirmationState;
    /**
     * The HTTP method for the API operation.
     */
    httpMethod?: String;
    /**
     * http status code from API execution response (for example: 200, 400, 500).
     */
    httpStatusCode?: Integer;
    /**
     * The response body from the API operation. The key of the object is the content type (currently, only TEXT is supported). The response may be returned directly or from the Lambda function.
     */
    responseBody?: ResponseBody;
    /**
     * Controls the final response state returned to end user when API/Function execution failed. When this state is FAILURE, the request would fail with dependency failure exception. When this state is REPROMPT, the API/function response will be sent to model for re-prompt
     */
    responseState?: ResponseState;
  }
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
  export type ByteContentBlob = Buffer|Uint8Array|Blob|string;
  export interface ByteContentDoc {
    /**
     * The MIME type of the document contained in the wrapper object.
     */
    contentType: ContentType;
    /**
     * The byte value of the file to upload, encoded as a Base-64 string.
     */
    data: ByteContentBlob;
    /**
     * The file name of the document contained in the wrapper object.
     */
    identifier: Identifier;
  }
  export interface ByteContentFile {
    /**
     * The raw bytes of the file to attach. The maximum size of all files that is attached is 10MB. You can attach a maximum of 5 files. 
     */
    data: ByteContentBlob;
    /**
     * The MIME type of data contained in the file used for chat.
     */
    mediaType: MimeType;
  }
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
  export interface CodeInterpreterInvocationInput {
    /**
     * The code for the code interpreter to use.
     */
    code?: String;
    /**
     * Files that are uploaded for code interpreter to use.
     */
    files?: Files;
  }
  export interface CodeInterpreterInvocationOutput {
    /**
     * Contains the error returned from code execution.
     */
    executionError?: String;
    /**
     * Contains the successful output returned from code execution
     */
    executionOutput?: String;
    /**
     * Indicates if the execution of the code timed out.
     */
    executionTimeout?: Boolean;
    /**
     * Contains output files, if generated by code execution.
     */
    files?: Files;
  }
  export type ConfirmationState = "CONFIRM"|"DENY"|string;
  export interface ConflictException {
    message?: NonBlankString;
  }
  export interface ContentBody {
    /**
     * The body of the API response.
     */
    body?: String;
  }
  export type ContentMap = {[key: string]: Parameters};
  export type ContentType = string;
  export type CreationMode = "DEFAULT"|"OVERRIDDEN"|string;
  export type DateTimestamp = Date;
  export interface DeleteAgentMemoryRequest {
    /**
     * The unique identifier of an alias of an agent.
     */
    agentAliasId: AgentAliasId;
    /**
     * The unique identifier of the agent to which the alias belongs.
     */
    agentId: AgentId;
    /**
     * The unique identifier of the memory.
     */
    memoryId?: MemoryId;
  }
  export interface DeleteAgentMemoryResponse {
  }
  export interface DependencyFailedException {
    message?: NonBlankString;
    /**
     * The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.
     */
    resourceName?: NonBlankString;
  }
  export interface Document {
  }
  export type Double = number;
  export type ExecutionType = "LAMBDA"|"RETURN_CONTROL"|string;
  export interface ExternalSource {
    /**
     * The identifier, contentType, and data of the external source wrapper object.
     */
    byteContent?: ByteContentDoc;
    /**
     * The S3 location of the external source wrapper object.
     */
    s3Location?: S3ObjectDoc;
    /**
     * The source type of the external source wrapper object.
     */
    sourceType: ExternalSourceType;
  }
  export type ExternalSourceType = "S3"|"BYTE_CONTENT"|string;
  export type ExternalSources = ExternalSource[];
  export interface ExternalSourcesGenerationConfiguration {
    /**
     *  Additional model parameters and their corresponding values not included in the textInferenceConfig structure for an external source. Takes in custom model parameters specific to the language model being used. 
     */
    additionalModelRequestFields?: AdditionalModelRequestFields;
    /**
     * The configuration details for the guardrail.
     */
    guardrailConfiguration?: GuardrailConfiguration;
    /**
     *  Configuration settings for inference when using RetrieveAndGenerate to generate responses while using an external source.
     */
    inferenceConfig?: InferenceConfig;
    /**
     * Contain the textPromptTemplate string for the external source wrapper object.
     */
    promptTemplate?: PromptTemplate;
  }
  export interface ExternalSourcesRetrieveAndGenerateConfiguration {
    /**
     * The prompt used with the external source wrapper object with the retrieveAndGenerate function.
     */
    generationConfiguration?: ExternalSourcesGenerationConfiguration;
    /**
     * The modelArn used with the external source wrapper object in the retrieveAndGenerate function.
     */
    modelArn: BedrockModelArn;
    /**
     * The document used with the external source wrapper object in the retrieveAndGenerate function.
     */
    sources: ExternalSources;
  }
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
  export type FileBody = Buffer|Uint8Array|Blob|string;
  export interface FilePart {
    /**
     * Files containing intermediate response for the user.
     */
    files?: OutputFiles;
  }
  export interface FileSource {
    /**
     * The data and the text of the attached files.
     */
    byteContent?: ByteContentFile;
    /**
     * The s3 location of the files to attach.
     */
    s3Location?: S3ObjectFile;
    /**
     * The source type of the files to attach.
     */
    sourceType: FileSourceType;
  }
  export type FileSourceType = "S3"|"BYTE_CONTENT"|string;
  export type FileUseCase = "CODE_INTERPRETER"|"CHAT"|string;
  export type Files = String[];
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
  export type FlowAliasIdentifier = string;
  export interface FlowCompletionEvent {
    /**
     * The reason that the flow completed.
     */
    completionReason: FlowCompletionReason;
  }
  export type FlowCompletionReason = "SUCCESS"|string;
  export type FlowIdentifier = string;
  export interface FlowInput {
    /**
     * Contains information about an input into the prompt flow.
     */
    content: FlowInputContent;
    /**
     * The name of the flow input node that begins the prompt flow.
     */
    nodeName: NodeName;
    /**
     * The name of the output from the flow input node that begins the prompt flow.
     */
    nodeOutputName: NodeOutputName;
  }
  export interface FlowInputContent {
    /**
     * The input to send to the prompt flow input node.
     */
    document?: Document;
  }
  export type FlowInputs = FlowInput[];
  export interface FlowOutputContent {
    /**
     * The content in the output.
     */
    document?: Document;
  }
  export interface FlowOutputEvent {
    /**
     * The content in the output.
     */
    content: FlowOutputContent;
    /**
     * The name of the flow output node that the output is from.
     */
    nodeName: NodeName;
    /**
     * The type of the node that the output is from.
     */
    nodeType: NodeType;
  }
  export type FlowResponseStream = EventStream<{accessDeniedException?:AccessDeniedException,badGatewayException?:BadGatewayException,conflictException?:ConflictException,dependencyFailedException?:DependencyFailedException,flowCompletionEvent?:FlowCompletionEvent,flowOutputEvent?:FlowOutputEvent,internalServerException?:InternalServerException,resourceNotFoundException?:ResourceNotFoundException,serviceQuotaExceededException?:ServiceQuotaExceededException,throttlingException?:ThrottlingException,validationException?:ValidationException}>;
  export type Function = string;
  export interface FunctionInvocationInput {
    /**
     * The action group that the function belongs to.
     */
    actionGroup: String;
    /**
     * Contains information about the function to invoke,
     */
    actionInvocationType?: ActionInvocationType;
    /**
     * The name of the function.
     */
    function?: String;
    /**
     * A list of parameters of the function.
     */
    parameters?: FunctionParameters;
  }
  export interface FunctionParameter {
    /**
     * The name of the parameter.
     */
    name?: String;
    /**
     * The data type of the parameter.
     */
    type?: String;
    /**
     * The value of the parameter.
     */
    value?: String;
  }
  export type FunctionParameters = FunctionParameter[];
  export interface FunctionResult {
    /**
     * The action group that the function belongs to.
     */
    actionGroup: String;
    /**
     * Contains the user confirmation information about the function that was called.
     */
    confirmationState?: ConfirmationState;
    /**
     * The name of the function that was called.
     */
    function?: String;
    /**
     * The response from the function call using the parameters. The key of the object is the content type (currently, only TEXT is supported). The response may be returned directly or from the Lambda function.
     */
    responseBody?: ResponseBody;
    /**
     * Controls the final response state returned to end user when API/Function execution failed. When this state is FAILURE, the request would fail with dependency failure exception. When this state is REPROMPT, the API/function response will be sent to model for re-prompt
     */
    responseState?: ResponseState;
  }
  export interface GeneratedResponsePart {
    /**
     * Contains metadata about a textual part of the generated response that is accompanied by a citation.
     */
    textResponsePart?: TextResponsePart;
  }
  export interface GenerationConfiguration {
    /**
     *  Additional model parameters and corresponding values not included in the textInferenceConfig structure for a knowledge base. This allows users to provide custom model parameters specific to the language model being used. 
     */
    additionalModelRequestFields?: AdditionalModelRequestFields;
    /**
     * The configuration details for the guardrail.
     */
    guardrailConfiguration?: GuardrailConfiguration;
    /**
     *  Configuration settings for inference when using RetrieveAndGenerate to generate responses while using a knowledge base as a source. 
     */
    inferenceConfig?: InferenceConfig;
    /**
     * Contains the template for the prompt that's sent to the model for response generation.
     */
    promptTemplate?: PromptTemplate;
  }
  export interface GetAgentMemoryRequest {
    /**
     * The unique identifier of an alias of an agent.
     */
    agentAliasId: AgentAliasId;
    /**
     * The unique identifier of the agent to which the alias belongs.
     */
    agentId: AgentId;
    /**
     * The maximum number of items to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.
     */
    maxItems?: MaxResults;
    /**
     * The unique identifier of the memory. 
     */
    memoryId: MemoryId;
    /**
     * The type of memory.
     */
    memoryType: MemoryType;
    /**
     * If the total number of results is greater than the maxItems value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export interface GetAgentMemoryResponse {
    /**
     * Contains details of the sessions stored in the memory
     */
    memoryContents?: Memories;
    /**
     * If the total number of results is greater than the maxItems value provided in the request, use this token when making another request in the nextToken field to return the next batch of results.
     */
    nextToken?: NextToken;
  }
  export type GuadrailAction = "INTERVENED"|"NONE"|string;
  export type GuardrailAction = "INTERVENED"|"NONE"|string;
  export interface GuardrailAssessment {
    /**
     * Content policy details of the Guardrail.
     */
    contentPolicy?: GuardrailContentPolicyAssessment;
    /**
     * Sensitive Information policy details of Guardrail.
     */
    sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment;
    /**
     * Topic policy details of the Guardrail.
     */
    topicPolicy?: GuardrailTopicPolicyAssessment;
    /**
     * Word policy details of the Guardrail.
     */
    wordPolicy?: GuardrailWordPolicyAssessment;
  }
  export type GuardrailAssessmentList = GuardrailAssessment[];
  export interface GuardrailConfiguration {
    /**
     * The unique identifier for the guardrail.
     */
    guardrailId: GuardrailConfigurationGuardrailIdString;
    /**
     * The version of the guardrail.
     */
    guardrailVersion: GuardrailConfigurationGuardrailVersionString;
  }
  export type GuardrailConfigurationGuardrailIdString = string;
  export type GuardrailConfigurationGuardrailVersionString = string;
  export interface GuardrailContentFilter {
    /**
     * The action placed on the content by the Guardrail filter.
     */
    action?: GuardrailContentPolicyAction;
    /**
     * The confidence level regarding the content detected in the filter by the Guardrail.
     */
    confidence?: GuardrailContentFilterConfidence;
    /**
     * The type of content detected in the filter by the Guardrail.
     */
    type?: GuardrailContentFilterType;
  }
  export type GuardrailContentFilterConfidence = "NONE"|"LOW"|"MEDIUM"|"HIGH"|string;
  export type GuardrailContentFilterList = GuardrailContentFilter[];
  export type GuardrailContentFilterType = "INSULTS"|"HATE"|"SEXUAL"|"VIOLENCE"|"MISCONDUCT"|"PROMPT_ATTACK"|string;
  export type GuardrailContentPolicyAction = "BLOCKED"|string;
  export interface GuardrailContentPolicyAssessment {
    /**
     * The filter details of the policy assessment used in the Guardrails filter.
     */
    filters?: GuardrailContentFilterList;
  }
  export interface GuardrailCustomWord {
    /**
     * The action details for the custom word filter in the Guardrail.
     */
    action?: GuardrailWordPolicyAction;
    /**
     * The match details for the custom word filter in the Guardrail.
     */
    match?: String;
  }
  export type GuardrailCustomWordList = GuardrailCustomWord[];
  export interface GuardrailManagedWord {
    /**
     * The action details for the managed word filter in the Guardrail.
     */
    action?: GuardrailWordPolicyAction;
    /**
     * The match details for the managed word filter in the Guardrail.
     */
    match?: String;
    /**
     * The type details for the managed word filter in the Guardrail.
     */
    type?: GuardrailManagedWordType;
  }
  export type GuardrailManagedWordList = GuardrailManagedWord[];
  export type GuardrailManagedWordType = "PROFANITY"|string;
  export interface GuardrailPiiEntityFilter {
    /**
     * The action of the Guardrail filter to identify and remove PII.
     */
    action?: GuardrailSensitiveInformationPolicyAction;
    /**
     * The match to settings in the Guardrail filter to identify and remove PII.
     */
    match?: String;
    /**
     * The type of PII the Guardrail filter has identified and removed.
     */
    type?: GuardrailPiiEntityType;
  }
  export type GuardrailPiiEntityFilterList = GuardrailPiiEntityFilter[];
  export type GuardrailPiiEntityType = "ADDRESS"|"AGE"|"AWS_ACCESS_KEY"|"AWS_SECRET_KEY"|"CA_HEALTH_NUMBER"|"CA_SOCIAL_INSURANCE_NUMBER"|"CREDIT_DEBIT_CARD_CVV"|"CREDIT_DEBIT_CARD_EXPIRY"|"CREDIT_DEBIT_CARD_NUMBER"|"DRIVER_ID"|"EMAIL"|"INTERNATIONAL_BANK_ACCOUNT_NUMBER"|"IP_ADDRESS"|"LICENSE_PLATE"|"MAC_ADDRESS"|"NAME"|"PASSWORD"|"PHONE"|"PIN"|"SWIFT_CODE"|"UK_NATIONAL_HEALTH_SERVICE_NUMBER"|"UK_NATIONAL_INSURANCE_NUMBER"|"UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"|"URL"|"USERNAME"|"US_BANK_ACCOUNT_NUMBER"|"US_BANK_ROUTING_NUMBER"|"US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"|"US_PASSPORT_NUMBER"|"US_SOCIAL_SECURITY_NUMBER"|"VEHICLE_IDENTIFICATION_NUMBER"|string;
  export interface GuardrailRegexFilter {
    /**
     * The action details for the regex filter used in the Guardrail.
     */
    action?: GuardrailSensitiveInformationPolicyAction;
    /**
     * The match details for the regex filter used in the Guardrail.
     */
    match?: String;
    /**
     * The name details for the regex filter used in the Guardrail.
     */
    name?: String;
    /**
     * The regex details for the regex filter used in the Guardrail.
     */
    regex?: String;
  }
  export type GuardrailRegexFilterList = GuardrailRegexFilter[];
  export type GuardrailSensitiveInformationPolicyAction = "BLOCKED"|"ANONYMIZED"|string;
  export interface GuardrailSensitiveInformationPolicyAssessment {
    /**
     * The details of the PII entities used in the sensitive policy assessment for the Guardrail.
     */
    piiEntities?: GuardrailPiiEntityFilterList;
    /**
     * The details of the regexes used in the sensitive policy assessment for the Guardrail.
     */
    regexes?: GuardrailRegexFilterList;
  }
  export interface GuardrailTopic {
    /**
     * The action details on a specific topic in the Guardrail.
     */
    action?: GuardrailTopicPolicyAction;
    /**
     * The name details on a specific topic in the Guardrail.
     */
    name?: String;
    /**
     * The type details on a specific topic in the Guardrail.
     */
    type?: GuardrailTopicType;
  }
  export type GuardrailTopicList = GuardrailTopic[];
  export type GuardrailTopicPolicyAction = "BLOCKED"|string;
  export interface GuardrailTopicPolicyAssessment {
    /**
     * The topic details of the policy assessment used in the Guardrail.
     */
    topics?: GuardrailTopicList;
  }
  export type GuardrailTopicType = "DENY"|string;
  export interface GuardrailTrace {
    /**
     * The trace action details used with the Guardrail.
     */
    action?: GuardrailAction;
    /**
     * The details of the input assessments used in the Guardrail Trace.
     */
    inputAssessments?: GuardrailAssessmentList;
    /**
     * The details of the output assessments used in the Guardrail Trace.
     */
    outputAssessments?: GuardrailAssessmentList;
    /**
     * The details of the trace Id used in the Guardrail Trace.
     */
    traceId?: TraceId;
  }
  export type GuardrailWordPolicyAction = "BLOCKED"|string;
  export interface GuardrailWordPolicyAssessment {
    /**
     * The custom word details for words defined in the Guardrail filter.
     */
    customWords?: GuardrailCustomWordList;
    /**
     * The managed word lists for words defined in the Guardrail filter.
     */
    managedWordLists?: GuardrailManagedWordList;
  }
  export type Identifier = string;
  export interface InferenceConfig {
    /**
     *  Configuration settings specific to text generation while generating responses using RetrieveAndGenerate. 
     */
    textInferenceConfig?: TextInferenceConfig;
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
     * While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for Top P determines the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set topP to 0.8, the model only selects the next token from the top 80% of the probability distribution of next tokens.
     */
    topP?: TopP;
  }
  export interface InputFile {
    /**
     * The name of the source file.
     */
    name: String;
    /**
     * Specifies where the files are located.
     */
    source: FileSource;
    /**
     * Specifies how the source files will be used by the code interpreter.
     */
    useCase: FileUseCase;
  }
  export type InputFiles = InputFile[];
  export type InputText = string;
  export type Integer = number;
  export interface InternalServerException {
    message?: NonBlankString;
  }
  export interface InvocationInput {
    /**
     * Contains information about the action group to be invoked.
     */
    actionGroupInvocationInput?: ActionGroupInvocationInput;
    /**
     * Contains information about the code interpreter to be invoked.
     */
    codeInterpreterInvocationInput?: CodeInterpreterInvocationInput;
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
  export interface InvocationInputMember {
    /**
     * Contains information about the API operation that the agent predicts should be called.
     */
    apiInvocationInput?: ApiInvocationInput;
    /**
     * Contains information about the function that the agent predicts should be called.
     */
    functionInvocationInput?: FunctionInvocationInput;
  }
  export type InvocationInputs = InvocationInputMember[];
  export interface InvocationResultMember {
    /**
     * The result from the API response from the action group invocation.
     */
    apiResult?: ApiResult;
    /**
     * The result from the function from the action group invocation.
     */
    functionResult?: FunctionResult;
  }
  export type InvocationType = "ACTION_GROUP"|"KNOWLEDGE_BASE"|"FINISH"|"ACTION_GROUP_CODE_INTERPRETER"|string;
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
     * The prompt text to send the agent.  If you include returnControlInvocationResults in the sessionState field, the inputText field will be ignored. 
     */
    inputText?: InputText;
    /**
     * The unique identifier of the agent memory.
     */
    memoryId?: MemoryId;
    /**
     * The unique identifier of the session. Use the same value across requests to continue the same conversation.
     */
    sessionId: SessionId;
    /**
     * Contains parameters that specify various attributes of the session. For more information, see Control session context.  If you include returnControlInvocationResults in the sessionState field, the inputText field will be ignored. 
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
     * The unique identifier of the agent memory.
     */
    memoryId?: MemoryId;
    /**
     * The unique identifier of the session with the agent.
     */
    sessionId: SessionId;
  }
  export interface InvokeFlowRequest {
    /**
     * The unique identifier of the flow alias.
     */
    flowAliasIdentifier: FlowAliasIdentifier;
    /**
     * The unique identifier of the flow.
     */
    flowIdentifier: FlowIdentifier;
    /**
     * A list of objects, each containing information about an input into the flow.
     */
    inputs: FlowInputs;
  }
  export interface InvokeFlowResponse {
    /**
     * The output of the flow, returned as a stream. If there's an error, the error is returned.
     */
    responseStream: FlowResponseStream;
  }
  export type KmsKeyArn = string;
  export interface KnowledgeBaseConfiguration {
    /**
     * The unique identifier for a knowledge base attached to the agent.
     */
    knowledgeBaseId: KnowledgeBaseId;
    /**
     * The configurations to apply to the knowledge base during query. For more information, see Query configurations.
     */
    retrievalConfiguration: KnowledgeBaseRetrievalConfiguration;
  }
  export type KnowledgeBaseConfigurations = KnowledgeBaseConfiguration[];
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
     * Contains configurations for response generation based on the knowledge base query results.
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
     * Settings for how the model processes the prompt prior to retrieval and generation.
     */
    orchestrationConfiguration?: OrchestrationConfiguration;
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
  export type MaxResults = number;
  export type MaxTokens = number;
  export type MaximumLength = number;
  export type Memories = Memory[];
  export interface Memory {
    /**
     * Contains summary of a session.
     */
    sessionSummary?: MemorySessionSummary;
  }
  export type MemoryId = string;
  export interface MemorySessionSummary {
    /**
     * The unique identifier of the memory where the session summary is stored.
     */
    memoryId?: MemoryId;
    /**
     * The time when the memory duration for the session is set to end.
     */
    sessionExpiryTime?: DateTimestamp;
    /**
     * The identifier for this session.
     */
    sessionId?: SessionId;
    /**
     * The start time for this session.
     */
    sessionStartTime?: DateTimestamp;
    /**
     * The summarized text for this session.
     */
    summaryText?: SummaryText;
  }
  export type MemoryType = "SESSION_SUMMARY"|string;
  export interface Metadata {
    /**
     * Contains details of the foundation model usage.
     */
    usage?: Usage;
  }
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
  export type NodeName = string;
  export type NodeOutputName = string;
  export type NodeType = "FlowInputNode"|"FlowOutputNode"|"LambdaFunctionNode"|"KnowledgeBaseNode"|"PromptNode"|"ConditionNode"|"LexNode"|string;
  export type NonBlankString = string;
  export interface Observation {
    /**
     * Contains the JSON-formatted string returned by the API invoked by the action group.
     */
    actionGroupInvocationOutput?: ActionGroupInvocationOutput;
    /**
     * Contains the JSON-formatted string returned by the API invoked by the code interpreter.
     */
    codeInterpreterInvocationOutput?: CodeInterpreterInvocationOutput;
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
  export interface OrchestrationConfiguration {
    /**
     * To split up the prompt and retrieve multiple sources, set the transformation type to QUERY_DECOMPOSITION.
     */
    queryTransformationConfiguration: QueryTransformationConfiguration;
  }
  export interface OrchestrationModelInvocationOutput {
    /**
     * Contains information about the foundation model output.
     */
    metadata?: Metadata;
    /**
     * Contains details of the raw response from the foundation model output.
     */
    rawResponse?: RawResponse;
    /**
     * The unique identifier of the trace.
     */
    traceId?: TraceId;
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
     * Contains information pertaining to the output from the foundation model that is being invoked.
     */
    modelInvocationOutput?: OrchestrationModelInvocationOutput;
    /**
     * Details about the observation (the output of the action group Lambda or knowledge base) made by the agent.
     */
    observation?: Observation;
    /**
     * Details about the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.
     */
    rationale?: Rationale;
  }
  export interface OutputFile {
    /**
     * The byte count of files that contains response from code interpreter.
     */
    bytes?: FileBody;
    /**
     * The name of the file containing response from code interpreter.
     */
    name?: String;
    /**
     * The type of file that contains response from the code interpreter.
     */
    type?: MimeType;
  }
  export type OutputFiles = OutputFile[];
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
  export type ParameterList = Parameter[];
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
  export interface PropertyParameters {
    /**
     * A list of parameters in the request body.
     */
    properties?: ParameterList;
  }
  export interface QueryTransformationConfiguration {
    /**
     * The type of transformation to apply to the prompt.
     */
    type: QueryTransformationType;
  }
  export type QueryTransformationType = "QUERY_DECOMPOSITION"|string;
  export type RAGStopSequences = RAGStopSequencesMemberString[];
  export type RAGStopSequencesMemberString = string;
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
  export interface RawResponse {
    /**
     * The foundation model's raw output content.
     */
    content?: String;
  }
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
  export type ResponseBody = {[key: string]: ContentBody};
  export type ResponseState = "FAILURE"|"REPROMPT"|string;
  export type ResponseStream = EventStream<{accessDeniedException?:AccessDeniedException,badGatewayException?:BadGatewayException,chunk?:PayloadPart,conflictException?:ConflictException,dependencyFailedException?:DependencyFailedException,files?:FilePart,internalServerException?:InternalServerException,resourceNotFoundException?:ResourceNotFoundException,returnControl?:ReturnControlPayload,serviceQuotaExceededException?:ServiceQuotaExceededException,throttlingException?:ThrottlingException,trace?:TracePart,validationException?:ValidationException}>;
  export interface RetrievalFilter {
    /**
     * Knowledge base data sources are returned if their metadata attributes fulfill all the filter conditions inside this list.
     */
    andAll?: RetrievalFilterList;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value matches the value in this object. The following example would return data sources with an animal attribute whose value is cat:  "equals": { "key": "animal", "value": "cat" } 
     */
    equals?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is greater than the value in this object. The following example would return data sources with an year attribute whose value is greater than 1989:  "greaterThan": { "key": "year", "value": 1989 } 
     */
    greaterThan?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is greater than or equal to the value in this object. The following example would return data sources with an year attribute whose value is greater than or equal to 1989:  "greaterThanOrEquals": { "key": "year", "value": 1989 } 
     */
    greaterThanOrEquals?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is in the list specified in the value in this object. The following example would return data sources with an animal attribute that is either cat or dog:  "in": { "key": "animal", "value": ["cat", "dog"] } 
     */
    in?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is less than the value in this object. The following example would return data sources with an year attribute whose value is less than to 1989.  "lessThan": { "key": "year", "value": 1989 } 
     */
    lessThan?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is less than or equal to the value in this object. The following example would return data sources with an year attribute whose value is less than or equal to 1989.  "lessThanOrEquals": { "key": "year", "value": 1989 } 
     */
    lessThanOrEquals?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is a list that contains the value as one of its members. The following example would return data sources with an animals attribute that is a list containing a cat member (for example ["dog", "cat"]).  "listContains": { "key": "animals", "value": "cat" } 
     */
    listContains?: FilterAttribute;
    /**
     * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value doesn't match the value in this object are returned. The following example would return data sources that don't contain an animal attribute whose value is cat.  "notEquals": { "key": "animal", "value": "cat" } 
     */
    notEquals?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value isn't in the list specified in the value in this object. The following example would return data sources whose animal attribute is neither cat nor dog.  "notIn": { "key": "animal", "value": ["cat", "dog"] } 
     */
    notIn?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if their metadata attributes fulfill at least one of the filter conditions inside this list.
     */
    orAll?: RetrievalFilterList;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value starts with the value in this object. This filter is currently only supported for Amazon OpenSearch Serverless vector stores. The following example would return data sources with an animal attribute starts with ca (for example, cat or camel).  "startsWith": { "key": "animal", "value": "ca" } 
     */
    startsWith?: FilterAttribute;
    /**
     * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is one of the following:   A string that contains the value as a substring. The following example would return data sources with an animal attribute that contains the substring at (for example cat).  "stringContains": { "key": "animal", "value": "at" }    A list with a member that contains the value as a substring. The following example would return data sources with an animals attribute that is a list containing a member that contains the substring at (for example ["dog", "cat"]).  "stringContains": { "key": "animals", "value": "at" }   
     */
    stringContains?: FilterAttribute;
  }
  export type RetrievalFilterList = RetrievalFilter[];
  export interface RetrievalResultConfluenceLocation {
    /**
     * The Confluence host URL for the data source location.
     */
    url?: String;
  }
  export interface RetrievalResultContent {
    /**
     * The cited text from the data source.
     */
    text: String;
  }
  export interface RetrievalResultLocation {
    /**
     * The Confluence data source location.
     */
    confluenceLocation?: RetrievalResultConfluenceLocation;
    /**
     * The S3 data source location.
     */
    s3Location?: RetrievalResultS3Location;
    /**
     * The Salesforce data source location.
     */
    salesforceLocation?: RetrievalResultSalesforceLocation;
    /**
     * The SharePoint data source location.
     */
    sharePointLocation?: RetrievalResultSharePointLocation;
    /**
     * The type of data source location.
     */
    type: RetrievalResultLocationType;
    /**
     * The web URL/URLs data source location.
     */
    webLocation?: RetrievalResultWebLocation;
  }
  export type RetrievalResultLocationType = "S3"|"WEB"|"CONFLUENCE"|"SALESFORCE"|"SHAREPOINT"|string;
  export type RetrievalResultMetadata = {[key: string]: RetrievalResultMetadataValue};
  export type RetrievalResultMetadataKey = string;
  export interface RetrievalResultMetadataValue {
  }
  export interface RetrievalResultS3Location {
    /**
     * The S3 URI for the data source location.
     */
    uri?: String;
  }
  export interface RetrievalResultSalesforceLocation {
    /**
     * The Salesforce host URL for the data source location.
     */
    url?: String;
  }
  export interface RetrievalResultSharePointLocation {
    /**
     * The SharePoint site URL for the data source location.
     */
    url?: String;
  }
  export interface RetrievalResultWebLocation {
    /**
     * The web URL/URLs for the data source location.
     */
    url?: String;
  }
  export interface RetrieveAndGenerateConfiguration {
    /**
     * The configuration used with the external source wrapper object in the retrieveAndGenerate function.
     */
    externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration;
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
     * The unique identifier of the session. When you first make a RetrieveAndGenerate request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the sessionId yourself.
     */
    sessionId?: SessionId;
  }
  export interface RetrieveAndGenerateResponse {
    /**
     * A list of segments of the generated response that are based on sources in the knowledge base, alongside information about the sources.
     */
    citations?: Citations;
    /**
     * Specifies if there is a guardrail intervention in the response.
     */
    guardrailAction?: GuadrailAction;
    /**
     * Contains the response generated from querying the knowledge base.
     */
    output: RetrieveAndGenerateOutput;
    /**
     * The unique identifier of the session. When you first make a RetrieveAndGenerate request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the sessionId yourself.
     */
    sessionId: SessionId;
  }
  export interface RetrieveAndGenerateSessionConfiguration {
    /**
     * The ARN of the KMS key encrypting the session.
     */
    kmsKeyArn: KmsKeyArn;
  }
  export type RetrieveAndGenerateType = "KNOWLEDGE_BASE"|"EXTERNAL_SOURCES"|string;
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
  export type ReturnControlInvocationResults = InvocationResultMember[];
  export interface ReturnControlPayload {
    /**
     * The identifier of the action group invocation.
     */
    invocationId?: String;
    /**
     * A list of objects that contain information about the parameters and inputs that need to be sent into the API operation or function, based on what the agent determines from its session with the user.
     */
    invocationInputs?: InvocationInputs;
  }
  export interface S3ObjectDoc {
    /**
     * The file location of the S3 wrapper object.
     */
    uri: S3Uri;
  }
  export interface S3ObjectFile {
    /**
     * The uri of the s3 object.
     */
    uri: S3Uri;
  }
  export type S3Uri = string;
  export type SearchType = "HYBRID"|"SEMANTIC"|string;
  export interface ServiceQuotaExceededException {
    message?: NonBlankString;
  }
  export type SessionAttributesMap = {[key: string]: String};
  export type SessionId = string;
  export interface SessionState {
    /**
     * Contains information about the files used by code interpreter.
     */
    files?: InputFiles;
    /**
     * The identifier of the invocation of an action. This value must match the invocationId returned in the InvokeAgent response for the action whose results are provided in the returnControlInvocationResults field. For more information, see Return control to the agent developer and Control session context.
     */
    invocationId?: String;
    /**
     * An array of configurations, each of which applies to a knowledge base attached to the agent.
     */
    knowledgeBaseConfigurations?: KnowledgeBaseConfigurations;
    /**
     * Contains attributes that persist across a prompt and the values of those attributes. These attributes replace the $prompt_session_attributes$ placeholder variable in the orchestration prompt template. For more information, see Prompt template placeholder variables.
     */
    promptSessionAttributes?: PromptSessionAttributesMap;
    /**
     * Contains information about the results from the action group invocation. For more information, see Return control to the agent developer and Control session context.  If you include this field, the inputText field will be ignored. 
     */
    returnControlInvocationResults?: ReturnControlInvocationResults;
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
  export type SummaryText = string;
  export type Temperature = number;
  export interface TextInferenceConfig {
    /**
     * The maximum number of tokens to generate in the output text. Do not use the minimum of 0 or the maximum of 65536. The limit values described here are arbitary values, for actual values consult the limits defined by your specific model.
     */
    maxTokens?: MaxTokens;
    /**
     * A list of sequences of characters that, if generated, will cause the model to stop generating further tokens. Do not use a minimum length of 1 or a maximum length of 1000. The limit values described here are arbitary values, for actual values consult the limits defined by your specific model.
     */
    stopSequences?: RAGStopSequences;
    /**
     *  Controls the random-ness of text generated by the language model, influencing how much the model sticks to the most predictable next words versus exploring more surprising options. A lower temperature value (e.g. 0.2 or 0.3) makes model outputs more deterministic or predictable, while a higher temperature (e.g. 0.8 or 0.9) makes the outputs more creative or unpredictable. 
     */
    temperature?: Temperature;
    /**
     *  A probability distribution threshold which controls what the model considers for the set of possible next tokens. The model will only consider the top p% of the probability distribution when generating the next token. 
     */
    topP?: TopP;
  }
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
     * The trace details for a trace defined in the Guardrail filter.
     */
    guardrailTrace?: GuardrailTrace;
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
     * The version of the agent.
     */
    agentVersion?: AgentVersion;
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
  export interface Usage {
    /**
     * Contains information about the input tokens from the foundation model usage.
     */
    inputTokens?: Integer;
    /**
     * Contains information about the output tokens from the foundation model usage.
     */
    outputTokens?: Integer;
  }
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
