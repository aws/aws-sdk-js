import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
import {EventStream} from '../lib/event-stream/event-stream';
interface Blob {}
declare class BedrockRuntime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: BedrockRuntime.Types.ClientConfiguration)
  config: Config & BedrockRuntime.Types.ClientConfiguration;
  /**
   * The action to apply a guardrail.
   */
  applyGuardrail(params: BedrockRuntime.Types.ApplyGuardrailRequest, callback?: (err: AWSError, data: BedrockRuntime.Types.ApplyGuardrailResponse) => void): Request<BedrockRuntime.Types.ApplyGuardrailResponse, AWSError>;
  /**
   * The action to apply a guardrail.
   */
  applyGuardrail(callback?: (err: AWSError, data: BedrockRuntime.Types.ApplyGuardrailResponse) => void): Request<BedrockRuntime.Types.ApplyGuardrailResponse, AWSError>;
  /**
   * Sends messages to the specified Amazon Bedrock model. Converse provides a consistent interface that works with all models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model. For information about the Converse API, see Use the Converse API in the Amazon Bedrock User Guide. To use a guardrail, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide. To use a tool with a model, see Tool use (Function calling) in the Amazon Bedrock User Guide  For example code, see Converse API examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action. 
   */
  converse(params: BedrockRuntime.Types.ConverseRequest, callback?: (err: AWSError, data: BedrockRuntime.Types.ConverseResponse) => void): Request<BedrockRuntime.Types.ConverseResponse, AWSError>;
  /**
   * Sends messages to the specified Amazon Bedrock model. Converse provides a consistent interface that works with all models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model. For information about the Converse API, see Use the Converse API in the Amazon Bedrock User Guide. To use a guardrail, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide. To use a tool with a model, see Tool use (Function calling) in the Amazon Bedrock User Guide  For example code, see Converse API examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action. 
   */
  converse(callback?: (err: AWSError, data: BedrockRuntime.Types.ConverseResponse) => void): Request<BedrockRuntime.Types.ConverseResponse, AWSError>;
  /**
   * Sends messages to the specified Amazon Bedrock model and returns the response in a stream. ConverseStream provides a consistent API that works with all Amazon Bedrock models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model.  To find out if a model supports streaming, call GetFoundationModel and check the responseStreamingSupported field in the response. For information about the Converse API, see Use the Converse API in the Amazon Bedrock User Guide. To use a guardrail, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide. To use a tool with a model, see Tool use (Function calling) in the Amazon Bedrock User Guide  For example code, see Conversation streaming example in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModelWithResponseStream action.
   */
  converseStream(params: BedrockRuntime.Types.ConverseStreamRequest, callback?: (err: AWSError, data: BedrockRuntime.Types.ConverseStreamResponse) => void): Request<BedrockRuntime.Types.ConverseStreamResponse, AWSError>;
  /**
   * Sends messages to the specified Amazon Bedrock model and returns the response in a stream. ConverseStream provides a consistent API that works with all Amazon Bedrock models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model.  To find out if a model supports streaming, call GetFoundationModel and check the responseStreamingSupported field in the response. For information about the Converse API, see Use the Converse API in the Amazon Bedrock User Guide. To use a guardrail, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide. To use a tool with a model, see Tool use (Function calling) in the Amazon Bedrock User Guide  For example code, see Conversation streaming example in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModelWithResponseStream action.
   */
  converseStream(callback?: (err: AWSError, data: BedrockRuntime.Types.ConverseStreamResponse) => void): Request<BedrockRuntime.Types.ConverseStreamResponse, AWSError>;
  /**
   * Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. You use model inference to generate text, images, and embeddings. For example code, see Invoke model code examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action.
   */
  invokeModel(params: BedrockRuntime.Types.InvokeModelRequest, callback?: (err: AWSError, data: BedrockRuntime.Types.InvokeModelResponse) => void): Request<BedrockRuntime.Types.InvokeModelResponse, AWSError>;
  /**
   * Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. You use model inference to generate text, images, and embeddings. For example code, see Invoke model code examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action.
   */
  invokeModel(callback?: (err: AWSError, data: BedrockRuntime.Types.InvokeModelResponse) => void): Request<BedrockRuntime.Types.InvokeModelResponse, AWSError>;
  /**
   * Invoke the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. The response is returned in a stream. To see if a model supports streaming, call GetFoundationModel and check the responseStreamingSupported field in the response.  The CLI doesn't support InvokeModelWithResponseStream.  For example code, see Invoke model with streaming code example in the Amazon Bedrock User Guide.  This operation requires permissions to perform the bedrock:InvokeModelWithResponseStream action. 
   */
  invokeModelWithResponseStream(params: BedrockRuntime.Types.InvokeModelWithResponseStreamRequest, callback?: (err: AWSError, data: BedrockRuntime.Types.InvokeModelWithResponseStreamResponse) => void): Request<BedrockRuntime.Types.InvokeModelWithResponseStreamResponse, AWSError>;
  /**
   * Invoke the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. The response is returned in a stream. To see if a model supports streaming, call GetFoundationModel and check the responseStreamingSupported field in the response.  The CLI doesn't support InvokeModelWithResponseStream.  For example code, see Invoke model with streaming code example in the Amazon Bedrock User Guide.  This operation requires permissions to perform the bedrock:InvokeModelWithResponseStream action. 
   */
  invokeModelWithResponseStream(callback?: (err: AWSError, data: BedrockRuntime.Types.InvokeModelWithResponseStreamResponse) => void): Request<BedrockRuntime.Types.InvokeModelWithResponseStreamResponse, AWSError>;
}
declare namespace BedrockRuntime {
  export interface AnyToolChoice {
  }
  export interface ApplyGuardrailRequest {
    /**
     * The guardrail identifier used in the request to apply the guardrail.
     */
    guardrailIdentifier: GuardrailIdentifier;
    /**
     * The guardrail version used in the request to apply the guardrail.
     */
    guardrailVersion: GuardrailVersion;
    /**
     * The source of data used in the request to apply the guardrail.
     */
    source: GuardrailContentSource;
    /**
     * The content details used in the request to apply the guardrail.
     */
    content: GuardrailContentBlockList;
  }
  export interface ApplyGuardrailResponse {
    /**
     * The usage details in the response from the guardrail.
     */
    usage: GuardrailUsage;
    /**
     * The action taken in the response from the guardrail.
     */
    action: GuardrailAction;
    /**
     * The output details in the response from the guardrail.
     */
    outputs: GuardrailOutputContentList;
    /**
     * The assessment details in the response from the guardrail.
     */
    assessments: GuardrailAssessmentList;
  }
  export interface AutoToolChoice {
  }
  export type Body = Buffer|Uint8Array|Blob|string;
  export interface ContentBlock {
    /**
     * Text to include in the message.
     */
    text?: String;
    /**
     * Image to include in the message.   This field is only supported by Anthropic Claude 3 models. 
     */
    image?: ImageBlock;
    /**
     * A document to include in the message.
     */
    document?: DocumentBlock;
    /**
     * Information about a tool use request from a model.
     */
    toolUse?: ToolUseBlock;
    /**
     * The result for a tool request that a model makes.
     */
    toolResult?: ToolResultBlock;
    /**
     * Contains the content to assess with the guardrail. If you don't specify guardContent in a call to the Converse API, the guardrail (if passed in the Converse API) assesses the entire message. For more information, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide.  &lt;/p&gt; 
     */
    guardContent?: GuardrailConverseContentBlock;
  }
  export interface ContentBlockDelta {
    /**
     * The content text.
     */
    text?: String;
    /**
     * Information about a tool that the model is requesting to use.
     */
    toolUse?: ToolUseBlockDelta;
  }
  export interface ContentBlockDeltaEvent {
    /**
     * The delta for a content block delta event.
     */
    delta: ContentBlockDelta;
    /**
     * The block index for a content block delta event. 
     */
    contentBlockIndex: NonNegativeInteger;
  }
  export interface ContentBlockStart {
    /**
     * Information about a tool that the model is requesting to use.
     */
    toolUse?: ToolUseBlockStart;
  }
  export interface ContentBlockStartEvent {
    /**
     * Start information about a content block start event. 
     */
    start: ContentBlockStart;
    /**
     * The index for a content block start event.
     */
    contentBlockIndex: NonNegativeInteger;
  }
  export interface ContentBlockStopEvent {
    /**
     * The index for a content block.
     */
    contentBlockIndex: NonNegativeInteger;
  }
  export type ContentBlocks = ContentBlock[];
  export type ConversationRole = "user"|"assistant"|string;
  export type ConversationalModelId = string;
  export interface ConverseMetrics {
    /**
     * The latency of the call to Converse, in milliseconds. 
     */
    latencyMs: Long;
  }
  export interface ConverseOutput {
    /**
     * The message that the model generates.
     */
    message?: Message;
  }
  export interface ConverseRequest {
    /**
     * The identifier for the model that you want to call. The modelId to provide depends on the type of model that you use:   If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide.   If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide.   If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide.  
     */
    modelId: ConversationalModelId;
    /**
     * The messages that you want to send to the model.
     */
    messages: Messages;
    /**
     * A system prompt to pass to the model.
     */
    system?: SystemContentBlocks;
    /**
     * Inference parameters to pass to the model. Converse supports a base set of inference parameters. If you need to pass additional parameters that the model supports, use the additionalModelRequestFields request field.
     */
    inferenceConfig?: InferenceConfiguration;
    /**
     * Configuration information for the tools that the model can use when generating a response.   This field is only supported by Anthropic Claude 3, Cohere Command R, Cohere Command R+, and Mistral Large models. 
     */
    toolConfig?: ToolConfiguration;
    /**
     * Configuration information for a guardrail that you want to use in the request. 
     */
    guardrailConfig?: GuardrailConfiguration;
    /**
     * Additional inference parameters that the model supports, beyond the base set of inference parameters that Converse supports in the inferenceConfig field. For more information, see Model parameters.
     */
    additionalModelRequestFields?: Document;
    /**
     * Additional model parameters field paths to return in the response. Converse returns the requested fields as a JSON Pointer object in the additionalModelResponseFields field. The following is example JSON for additionalModelResponseFieldPaths.  [ "/stop_sequence" ]  For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation.  Converse rejects an empty JSON Pointer or incorrectly structured JSON Pointer with a 400 error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by Converse.
     */
    additionalModelResponseFieldPaths?: ConverseRequestAdditionalModelResponseFieldPathsList;
  }
  export type ConverseRequestAdditionalModelResponseFieldPathsList = ConverseRequestAdditionalModelResponseFieldPathsListMemberString[];
  export type ConverseRequestAdditionalModelResponseFieldPathsListMemberString = string;
  export interface ConverseResponse {
    /**
     * The result from the call to Converse.
     */
    output: ConverseOutput;
    /**
     * The reason why the model stopped generating output.
     */
    stopReason: StopReason;
    /**
     * The total number of tokens used in the call to Converse. The total includes the tokens input to the model and the tokens generated by the model.
     */
    usage: TokenUsage;
    /**
     * Metrics for the call to Converse.
     */
    metrics: ConverseMetrics;
    /**
     * Additional fields in the response that are unique to the model. 
     */
    additionalModelResponseFields?: Document;
    /**
     * A trace object that contains information about the Guardrail behavior.
     */
    trace?: ConverseTrace;
  }
  export interface ConverseStreamMetadataEvent {
    /**
     * Usage information for the conversation stream event.
     */
    usage: TokenUsage;
    /**
     * The metrics for the conversation stream metadata event.
     */
    metrics: ConverseStreamMetrics;
    /**
     * The trace object in the response from ConverseStream that contains information about the guardrail behavior.
     */
    trace?: ConverseStreamTrace;
  }
  export interface ConverseStreamMetrics {
    /**
     * The latency for the streaming request, in milliseconds.
     */
    latencyMs: Long;
  }
  export type ConverseStreamOutput = EventStream<{messageStart?:MessageStartEvent,contentBlockStart?:ContentBlockStartEvent,contentBlockDelta?:ContentBlockDeltaEvent,contentBlockStop?:ContentBlockStopEvent,messageStop?:MessageStopEvent,metadata?:ConverseStreamMetadataEvent,internalServerException?:InternalServerException,modelStreamErrorException?:ModelStreamErrorException,validationException?:ValidationException,throttlingException?:ThrottlingException}>;
  export interface ConverseStreamRequest {
    /**
     * The ID for the model. The modelId to provide depends on the type of model that you use:   If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide.   If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide.   If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide.  
     */
    modelId: ConversationalModelId;
    /**
     * The messages that you want to send to the model.
     */
    messages: Messages;
    /**
     * A system prompt to send to the model.
     */
    system?: SystemContentBlocks;
    /**
     * Inference parameters to pass to the model. ConverseStream supports a base set of inference parameters. If you need to pass additional parameters that the model supports, use the additionalModelRequestFields request field.
     */
    inferenceConfig?: InferenceConfiguration;
    /**
     * Configuration information for the tools that the model can use when generating a response.  This field is only supported by Anthropic Claude 3 models. 
     */
    toolConfig?: ToolConfiguration;
    /**
     * Configuration information for a guardrail that you want to use in the request. 
     */
    guardrailConfig?: GuardrailStreamConfiguration;
    /**
     * Additional inference parameters that the model supports, beyond the base set of inference parameters that ConverseStream supports in the inferenceConfig field.
     */
    additionalModelRequestFields?: Document;
    /**
     * Additional model parameters field paths to return in the response. ConverseStream returns the requested fields as a JSON Pointer object in the additionalModelResponseFields field. The following is example JSON for additionalModelResponseFieldPaths.  [ "/stop_sequence" ]  For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation.  ConverseStream rejects an empty JSON Pointer or incorrectly structured JSON Pointer with a 400 error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by ConverseStream.
     */
    additionalModelResponseFieldPaths?: ConverseStreamRequestAdditionalModelResponseFieldPathsList;
  }
  export type ConverseStreamRequestAdditionalModelResponseFieldPathsList = ConverseStreamRequestAdditionalModelResponseFieldPathsListMemberString[];
  export type ConverseStreamRequestAdditionalModelResponseFieldPathsListMemberString = string;
  export interface ConverseStreamResponse {
    /**
     * The output stream that the model generated.
     */
    stream?: ConverseStreamOutput;
  }
  export interface ConverseStreamTrace {
    /**
     * The guardrail trace object. 
     */
    guardrail?: GuardrailTraceAssessment;
  }
  export interface ConverseTrace {
    /**
     * The guardrail trace object. 
     */
    guardrail?: GuardrailTraceAssessment;
  }
  export interface Document {
  }
  export interface DocumentBlock {
    /**
     * The format of a document, or its extension.
     */
    format: DocumentFormat;
    /**
     * A name for the document. The name can only contain the following characters:   Alphanumeric characters   Whitespace characters (no more than one in a row)   Hyphens   Parentheses   Square brackets    This field is vulnerable to prompt injections, because the model might inadvertently interpret it as instructions. Therefore, we recommend that you specify a neutral name. 
     */
    name: DocumentBlockNameString;
    /**
     * Contains the content of the document.
     */
    source: DocumentSource;
  }
  export type DocumentBlockNameString = string;
  export type DocumentFormat = "pdf"|"csv"|"doc"|"docx"|"xls"|"xlsx"|"html"|"txt"|"md"|string;
  export interface DocumentSource {
    /**
     * The raw bytes for the document. If you use an Amazon Web Services SDK, you don't need to encode the bytes in base64.
     */
    bytes?: DocumentSourceBytesBlob;
  }
  export type DocumentSourceBytesBlob = Buffer|Uint8Array|Blob|string;
  export type GuardrailAction = "NONE"|"GUARDRAIL_INTERVENED"|string;
  export interface GuardrailAssessment {
    /**
     * The topic policy.
     */
    topicPolicy?: GuardrailTopicPolicyAssessment;
    /**
     * The content policy.
     */
    contentPolicy?: GuardrailContentPolicyAssessment;
    /**
     * The word policy.
     */
    wordPolicy?: GuardrailWordPolicyAssessment;
    /**
     * The sensitive information policy.
     */
    sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment;
    /**
     * The contextual grounding policy used for the guardrail assessment.
     */
    contextualGroundingPolicy?: GuardrailContextualGroundingPolicyAssessment;
  }
  export type GuardrailAssessmentList = GuardrailAssessment[];
  export type GuardrailAssessmentListMap = {[key: string]: GuardrailAssessmentList};
  export type GuardrailAssessmentMap = {[key: string]: GuardrailAssessment};
  export interface GuardrailConfiguration {
    /**
     * The identifier for the guardrail.
     */
    guardrailIdentifier: GuardrailIdentifier;
    /**
     * The version of the guardrail.
     */
    guardrailVersion: GuardrailVersion;
    /**
     * The trace behavior for the guardrail.
     */
    trace?: GuardrailTrace;
  }
  export interface GuardrailContentBlock {
    /**
     * Text within content block to be evaluated by the guardrail.
     */
    text?: GuardrailTextBlock;
  }
  export type GuardrailContentBlockList = GuardrailContentBlock[];
  export interface GuardrailContentFilter {
    /**
     * The guardrail type.
     */
    type: GuardrailContentFilterType;
    /**
     * The guardrail confidence.
     */
    confidence: GuardrailContentFilterConfidence;
    /**
     * The guardrail action.
     */
    action: GuardrailContentPolicyAction;
  }
  export type GuardrailContentFilterConfidence = "NONE"|"LOW"|"MEDIUM"|"HIGH"|string;
  export type GuardrailContentFilterList = GuardrailContentFilter[];
  export type GuardrailContentFilterType = "INSULTS"|"HATE"|"SEXUAL"|"VIOLENCE"|"MISCONDUCT"|"PROMPT_ATTACK"|string;
  export type GuardrailContentPolicyAction = "BLOCKED"|string;
  export interface GuardrailContentPolicyAssessment {
    /**
     * The content policy filters.
     */
    filters: GuardrailContentFilterList;
  }
  export type GuardrailContentPolicyUnitsProcessed = number;
  export type GuardrailContentQualifier = "grounding_source"|"query"|"guard_content"|string;
  export type GuardrailContentQualifierList = GuardrailContentQualifier[];
  export type GuardrailContentSource = "INPUT"|"OUTPUT"|string;
  export interface GuardrailContextualGroundingFilter {
    /**
     * The contextual grounding filter type.
     */
    type: GuardrailContextualGroundingFilterType;
    /**
     * The threshold used by contextual grounding filter to determine whether the content is grounded or not.
     */
    threshold: GuardrailContextualGroundingFilterThresholdDouble;
    /**
     * The score generated by contextual grounding filter.
     */
    score: GuardrailContextualGroundingFilterScoreDouble;
    /**
     * The action performed by the guardrails contextual grounding filter.
     */
    action: GuardrailContextualGroundingPolicyAction;
  }
  export type GuardrailContextualGroundingFilterScoreDouble = number;
  export type GuardrailContextualGroundingFilterThresholdDouble = number;
  export type GuardrailContextualGroundingFilterType = "GROUNDING"|"RELEVANCE"|string;
  export type GuardrailContextualGroundingFilters = GuardrailContextualGroundingFilter[];
  export type GuardrailContextualGroundingPolicyAction = "BLOCKED"|"NONE"|string;
  export interface GuardrailContextualGroundingPolicyAssessment {
    /**
     * The filter details for the guardrails contextual grounding filter.
     */
    filters?: GuardrailContextualGroundingFilters;
  }
  export type GuardrailContextualGroundingPolicyUnitsProcessed = number;
  export interface GuardrailConverseContentBlock {
    /**
     * The text to guard.
     */
    text?: GuardrailConverseTextBlock;
  }
  export type GuardrailConverseContentQualifier = "grounding_source"|"query"|"guard_content"|string;
  export type GuardrailConverseContentQualifierList = GuardrailConverseContentQualifier[];
  export interface GuardrailConverseTextBlock {
    /**
     * The text that you want to guard.
     */
    text: String;
    /**
     * The qualifier details for the guardrails contextual grounding filter.
     */
    qualifiers?: GuardrailConverseContentQualifierList;
  }
  export interface GuardrailCustomWord {
    /**
     * The match for the custom word.
     */
    match: String;
    /**
     * The action for the custom word.
     */
    action: GuardrailWordPolicyAction;
  }
  export type GuardrailCustomWordList = GuardrailCustomWord[];
  export type GuardrailIdentifier = string;
  export interface GuardrailManagedWord {
    /**
     * The match for the managed word.
     */
    match: String;
    /**
     * The type for the managed word.
     */
    type: GuardrailManagedWordType;
    /**
     * The action for the managed word.
     */
    action: GuardrailWordPolicyAction;
  }
  export type GuardrailManagedWordList = GuardrailManagedWord[];
  export type GuardrailManagedWordType = "PROFANITY"|string;
  export interface GuardrailOutputContent {
    /**
     * The specific text for the output content produced by the guardrail.
     */
    text?: GuardrailOutputText;
  }
  export type GuardrailOutputContentList = GuardrailOutputContent[];
  export type GuardrailOutputText = string;
  export interface GuardrailPiiEntityFilter {
    /**
     * The PII entity filter match.
     */
    match: String;
    /**
     * The PII entity filter type.
     */
    type: GuardrailPiiEntityType;
    /**
     * The PII entity filter action.
     */
    action: GuardrailSensitiveInformationPolicyAction;
  }
  export type GuardrailPiiEntityFilterList = GuardrailPiiEntityFilter[];
  export type GuardrailPiiEntityType = "ADDRESS"|"AGE"|"AWS_ACCESS_KEY"|"AWS_SECRET_KEY"|"CA_HEALTH_NUMBER"|"CA_SOCIAL_INSURANCE_NUMBER"|"CREDIT_DEBIT_CARD_CVV"|"CREDIT_DEBIT_CARD_EXPIRY"|"CREDIT_DEBIT_CARD_NUMBER"|"DRIVER_ID"|"EMAIL"|"INTERNATIONAL_BANK_ACCOUNT_NUMBER"|"IP_ADDRESS"|"LICENSE_PLATE"|"MAC_ADDRESS"|"NAME"|"PASSWORD"|"PHONE"|"PIN"|"SWIFT_CODE"|"UK_NATIONAL_HEALTH_SERVICE_NUMBER"|"UK_NATIONAL_INSURANCE_NUMBER"|"UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"|"URL"|"USERNAME"|"US_BANK_ACCOUNT_NUMBER"|"US_BANK_ROUTING_NUMBER"|"US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"|"US_PASSPORT_NUMBER"|"US_SOCIAL_SECURITY_NUMBER"|"VEHICLE_IDENTIFICATION_NUMBER"|string;
  export interface GuardrailRegexFilter {
    /**
     * The regex filter name.
     */
    name?: String;
    /**
     * The regesx filter match.
     */
    match?: String;
    /**
     * The regex query.
     */
    regex?: String;
    /**
     * The region filter action.
     */
    action: GuardrailSensitiveInformationPolicyAction;
  }
  export type GuardrailRegexFilterList = GuardrailRegexFilter[];
  export type GuardrailSensitiveInformationPolicyAction = "ANONYMIZED"|"BLOCKED"|string;
  export interface GuardrailSensitiveInformationPolicyAssessment {
    /**
     * The PII entities in the assessment.
     */
    piiEntities: GuardrailPiiEntityFilterList;
    /**
     * The regex queries in the assessment.
     */
    regexes: GuardrailRegexFilterList;
  }
  export type GuardrailSensitiveInformationPolicyFreeUnitsProcessed = number;
  export type GuardrailSensitiveInformationPolicyUnitsProcessed = number;
  export interface GuardrailStreamConfiguration {
    /**
     * The identifier for the guardrail.
     */
    guardrailIdentifier: GuardrailIdentifier;
    /**
     * The version of the guardrail.
     */
    guardrailVersion: GuardrailVersion;
    /**
     * The trace behavior for the guardrail.
     */
    trace?: GuardrailTrace;
    /**
     * The processing mode.  The processing mode. For more information, see Configure streaming response behavior in the Amazon Bedrock User Guide. 
     */
    streamProcessingMode?: GuardrailStreamProcessingMode;
  }
  export type GuardrailStreamProcessingMode = "sync"|"async"|string;
  export interface GuardrailTextBlock {
    /**
     * The input text details to be evaluated by the guardrail.
     */
    text: String;
    /**
     * The qualifiers describing the text block.
     */
    qualifiers?: GuardrailContentQualifierList;
  }
  export interface GuardrailTopic {
    /**
     * The name for the guardrail.
     */
    name: String;
    /**
     * The type behavior that the guardrail should perform when the model detects the topic.
     */
    type: GuardrailTopicType;
    /**
     * The action the guardrail should take when it intervenes on a topic.
     */
    action: GuardrailTopicPolicyAction;
  }
  export type GuardrailTopicList = GuardrailTopic[];
  export type GuardrailTopicPolicyAction = "BLOCKED"|string;
  export interface GuardrailTopicPolicyAssessment {
    /**
     * The topics in the assessment.
     */
    topics: GuardrailTopicList;
  }
  export type GuardrailTopicPolicyUnitsProcessed = number;
  export type GuardrailTopicType = "DENY"|string;
  export type GuardrailTrace = "enabled"|"disabled"|string;
  export interface GuardrailTraceAssessment {
    /**
     * The output from the model.
     */
    modelOutput?: ModelOutputs;
    /**
     * The input assessment.
     */
    inputAssessment?: GuardrailAssessmentMap;
    /**
     * the output assessments.
     */
    outputAssessments?: GuardrailAssessmentListMap;
  }
  export interface GuardrailUsage {
    /**
     * The topic policy units processed by the guardrail.
     */
    topicPolicyUnits: GuardrailTopicPolicyUnitsProcessed;
    /**
     * The content policy units processed by the guardrail.
     */
    contentPolicyUnits: GuardrailContentPolicyUnitsProcessed;
    /**
     * The word policy units processed by the guardrail.
     */
    wordPolicyUnits: GuardrailWordPolicyUnitsProcessed;
    /**
     * The sensitive information policy units processed by the guardrail.
     */
    sensitiveInformationPolicyUnits: GuardrailSensitiveInformationPolicyUnitsProcessed;
    /**
     * The sensitive information policy free units processed by the guardrail.
     */
    sensitiveInformationPolicyFreeUnits: GuardrailSensitiveInformationPolicyFreeUnitsProcessed;
    /**
     * The contextual grounding policy units processed by the guardrail.
     */
    contextualGroundingPolicyUnits: GuardrailContextualGroundingPolicyUnitsProcessed;
  }
  export type GuardrailVersion = string;
  export type GuardrailWordPolicyAction = "BLOCKED"|string;
  export interface GuardrailWordPolicyAssessment {
    /**
     * Custom words in the assessment.
     */
    customWords: GuardrailCustomWordList;
    /**
     * Managed word lists in the assessment.
     */
    managedWordLists: GuardrailManagedWordList;
  }
  export type GuardrailWordPolicyUnitsProcessed = number;
  export interface ImageBlock {
    /**
     * The format of the image.
     */
    format: ImageFormat;
    /**
     * The source for the image.
     */
    source: ImageSource;
  }
  export type ImageFormat = "png"|"jpeg"|"gif"|"webp"|string;
  export interface ImageSource {
    /**
     * The raw image bytes for the image. If you use an AWS SDK, you don't need to encode the image bytes in base64.
     */
    bytes?: ImageSourceBytesBlob;
  }
  export type ImageSourceBytesBlob = Buffer|Uint8Array|Blob|string;
  export interface InferenceConfiguration {
    /**
     * The maximum number of tokens to allow in the generated response. The default value is the maximum allowed value for the model that you are using. For more information, see Inference parameters for foundation models. 
     */
    maxTokens?: InferenceConfigurationMaxTokensInteger;
    /**
     * The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options. The default value is the default value for the model that you are using. For more information, see Inference parameters for foundation models. 
     */
    temperature?: InferenceConfigurationTemperatureFloat;
    /**
     * The percentage of most-likely candidates that the model considers for the next token. For example, if you choose a value of 0.8 for topP, the model selects from the top 80% of the probability distribution of tokens that could be next in the sequence. The default value is the default value for the model that you are using. For more information, see Inference parameters for foundation models. 
     */
    topP?: InferenceConfigurationTopPFloat;
    /**
     * A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response. 
     */
    stopSequences?: InferenceConfigurationStopSequencesList;
  }
  export type InferenceConfigurationMaxTokensInteger = number;
  export type InferenceConfigurationStopSequencesList = NonEmptyString[];
  export type InferenceConfigurationTemperatureFloat = number;
  export type InferenceConfigurationTopPFloat = number;
  export interface InternalServerException {
    message?: NonBlankString;
  }
  export type InvokeModelIdentifier = string;
  export interface InvokeModelRequest {
    /**
     * The prompt and inference parameters in the format specified in the contentType in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to Inference parameters. For more information, see Run inference in the Bedrock User Guide.
     */
    body: Body;
    /**
     * The MIME type of the input data in the request. You must specify application/json.
     */
    contentType?: MimeType;
    /**
     * The desired MIME type of the inference body in the response. The default value is application/json.
     */
    accept?: MimeType;
    /**
     * The unique identifier of the model to invoke to run inference. The modelId to provide depends on the type of model that you use:   If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide.   If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide.   If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide.  
     */
    modelId: InvokeModelIdentifier;
    /**
     * Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.
     */
    trace?: Trace;
    /**
     * The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied to the invocation. An error will be thrown in the following situations.   You don't provide a guardrail identifier but you specify the amazon-bedrock-guardrailConfig field in the request body.   You enable the guardrail but the contentType isn't application/json.   You provide a guardrail identifier, but guardrailVersion isn't specified.  
     */
    guardrailIdentifier?: GuardrailIdentifier;
    /**
     * The version number for the guardrail. The value can also be DRAFT.
     */
    guardrailVersion?: GuardrailVersion;
  }
  export interface InvokeModelResponse {
    /**
     * Inference response from the model in the format specified in the contentType header. To see the format and content of the request and response bodies for different models, refer to Inference parameters.
     */
    body: Body;
    /**
     * The MIME type of the inference result.
     */
    contentType: MimeType;
  }
  export interface InvokeModelWithResponseStreamRequest {
    /**
     * The prompt and inference parameters in the format specified in the contentType in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to Inference parameters. For more information, see Run inference in the Bedrock User Guide.
     */
    body: Body;
    /**
     * The MIME type of the input data in the request. You must specify application/json.
     */
    contentType?: MimeType;
    /**
     * The desired MIME type of the inference body in the response. The default value is application/json.
     */
    accept?: MimeType;
    /**
     * The unique identifier of the model to invoke to run inference. The modelId to provide depends on the type of model that you use:   If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide.   If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide.   If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide.  
     */
    modelId: InvokeModelIdentifier;
    /**
     * Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.
     */
    trace?: Trace;
    /**
     * The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied to the invocation. An error is thrown in the following situations.   You don't provide a guardrail identifier but you specify the amazon-bedrock-guardrailConfig field in the request body.   You enable the guardrail but the contentType isn't application/json.   You provide a guardrail identifier, but guardrailVersion isn't specified.  
     */
    guardrailIdentifier?: GuardrailIdentifier;
    /**
     * The version number for the guardrail. The value can also be DRAFT.
     */
    guardrailVersion?: GuardrailVersion;
  }
  export interface InvokeModelWithResponseStreamResponse {
    /**
     * Inference response from the model in the format specified by the contentType header. To see the format and content of this field for different models, refer to Inference parameters.
     */
    body: ResponseStream;
    /**
     * The MIME type of the inference result.
     */
    contentType: MimeType;
  }
  export type Long = number;
  export interface Message {
    /**
     * The role that the message plays in the message.
     */
    role: ConversationRole;
    /**
     * The message content. Note the following restrictions:   You can include up to 20 images. Each image's size, height, and width must be no more than 3.75 MB, 8000 px, and 8000 px, respectively.   You can include up to five documents. Each document's size must be no more than 4.5 MB.   If you include a ContentBlock with a document field in the array, you must also include a ContentBlock with a text field.   You can only include images and documents if the role is user.  
     */
    content: ContentBlocks;
  }
  export interface MessageStartEvent {
    /**
     * The role for the message.
     */
    role: ConversationRole;
  }
  export interface MessageStopEvent {
    /**
     * The reason why the model stopped generating output.
     */
    stopReason: StopReason;
    /**
     * The additional model response fields.
     */
    additionalModelResponseFields?: Document;
  }
  export type Messages = Message[];
  export type MimeType = string;
  export type ModelOutputs = GuardrailOutputText[];
  export interface ModelStreamErrorException {
    message?: NonBlankString;
    /**
     * The original status code.
     */
    originalStatusCode?: StatusCode;
    /**
     * The original message.
     */
    originalMessage?: NonBlankString;
  }
  export interface ModelTimeoutException {
    message?: NonBlankString;
  }
  export type NonBlankString = string;
  export type NonEmptyString = string;
  export type NonNegativeInteger = number;
  export type PartBody = Buffer|Uint8Array|Blob|string;
  export interface PayloadPart {
    /**
     * Base64-encoded bytes of payload data.
     */
    bytes?: PartBody;
  }
  export type ResponseStream = EventStream<{chunk?:PayloadPart,internalServerException?:InternalServerException,modelStreamErrorException?:ModelStreamErrorException,validationException?:ValidationException,throttlingException?:ThrottlingException,modelTimeoutException?:ModelTimeoutException}>;
  export interface SpecificToolChoice {
    /**
     * The name of the tool that the model must request. 
     */
    name: ToolName;
  }
  export type StatusCode = number;
  export type StopReason = "end_turn"|"tool_use"|"max_tokens"|"stop_sequence"|"guardrail_intervened"|"content_filtered"|string;
  export type String = string;
  export interface SystemContentBlock {
    /**
     * A system prompt for the model. 
     */
    text?: NonEmptyString;
    /**
     * A content block to assess with the guardrail. Use with the Converse or ConverseStream API operations.  For more information, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide.
     */
    guardContent?: GuardrailConverseContentBlock;
  }
  export type SystemContentBlocks = SystemContentBlock[];
  export interface ThrottlingException {
    message?: NonBlankString;
  }
  export interface TokenUsage {
    /**
     * The number of tokens sent in the request to the model.
     */
    inputTokens: TokenUsageInputTokensInteger;
    /**
     * The number of tokens that the model generated for the request.
     */
    outputTokens: TokenUsageOutputTokensInteger;
    /**
     * The total of input tokens and tokens generated by the model.
     */
    totalTokens: TokenUsageTotalTokensInteger;
  }
  export type TokenUsageInputTokensInteger = number;
  export type TokenUsageOutputTokensInteger = number;
  export type TokenUsageTotalTokensInteger = number;
  export interface Tool {
    /**
     * The specfication for the tool.
     */
    toolSpec?: ToolSpecification;
  }
  export interface ToolChoice {
    /**
     * (Default). The Model automatically decides if a tool should be called or whether to generate text instead. 
     */
    auto?: AutoToolChoice;
    /**
     * The model must request at least one tool (no text is generated).
     */
    any?: AnyToolChoice;
    /**
     * The Model must request the specified tool. Only supported by Anthropic Claude 3 models. 
     */
    tool?: SpecificToolChoice;
  }
  export interface ToolConfiguration {
    /**
     * An array of tools that you want to pass to a model.
     */
    tools: ToolConfigurationToolsList;
    /**
     * If supported by model, forces the model to request a tool.
     */
    toolChoice?: ToolChoice;
  }
  export type ToolConfigurationToolsList = Tool[];
  export interface ToolInputSchema {
    /**
     * The JSON schema for the tool. For more information, see JSON Schema Reference.
     */
    json?: Document;
  }
  export type ToolName = string;
  export interface ToolResultBlock {
    /**
     * The ID of the tool request that this is the result for.
     */
    toolUseId: ToolUseId;
    /**
     * The content for tool result content block.
     */
    content: ToolResultContentBlocks;
    /**
     * The status for the tool result content block.  This field is only supported Anthropic Claude 3 models. 
     */
    status?: ToolResultStatus;
  }
  export interface ToolResultContentBlock {
    /**
     * A tool result that is JSON format data.
     */
    json?: Document;
    /**
     * A tool result that is text.
     */
    text?: String;
    /**
     * A tool result that is an image.  This field is only supported by Anthropic Claude 3 models. 
     */
    image?: ImageBlock;
    /**
     * A tool result that is a document.
     */
    document?: DocumentBlock;
  }
  export type ToolResultContentBlocks = ToolResultContentBlock[];
  export type ToolResultStatus = "success"|"error"|string;
  export interface ToolSpecification {
    /**
     * The name for the tool.
     */
    name: ToolName;
    /**
     * The description for the tool.
     */
    description?: NonEmptyString;
    /**
     * The input schema for the tool in JSON format.
     */
    inputSchema: ToolInputSchema;
  }
  export interface ToolUseBlock {
    /**
     * The ID for the tool request.
     */
    toolUseId: ToolUseId;
    /**
     * The name of the tool that the model wants to use.
     */
    name: ToolName;
    /**
     * The input to pass to the tool. 
     */
    input: Document;
  }
  export interface ToolUseBlockDelta {
    /**
     * The input for a requested tool.
     */
    input: String;
  }
  export interface ToolUseBlockStart {
    /**
     * The ID for the tool request.
     */
    toolUseId: ToolUseId;
    /**
     * The name of the tool that the model is requesting to use.
     */
    name: ToolName;
  }
  export type ToolUseId = string;
  export type Trace = "ENABLED"|"DISABLED"|string;
  export interface ValidationException {
    message?: NonBlankString;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-09-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the BedrockRuntime client.
   */
  export import Types = BedrockRuntime;
}
export = BedrockRuntime;
