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
   * Sends messages to the specified Amazon Bedrock model. Converse provides a consistent interface that works with all models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model. For more information, see Run inference in the Bedrock User Guide. This operation requires permission for the bedrock:InvokeModel action. 
   */
  converse(params: BedrockRuntime.Types.ConverseRequest, callback?: (err: AWSError, data: BedrockRuntime.Types.ConverseResponse) => void): Request<BedrockRuntime.Types.ConverseResponse, AWSError>;
  /**
   * Sends messages to the specified Amazon Bedrock model. Converse provides a consistent interface that works with all models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model. For more information, see Run inference in the Bedrock User Guide. This operation requires permission for the bedrock:InvokeModel action. 
   */
  converse(callback?: (err: AWSError, data: BedrockRuntime.Types.ConverseResponse) => void): Request<BedrockRuntime.Types.ConverseResponse, AWSError>;
  /**
   * Sends messages to the specified Amazon Bedrock model and returns the response in a stream. ConverseStream provides a consistent API that works with all Amazon Bedrock models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model. For more information, see Run inference in the Bedrock User Guide. To find out if a model supports streaming, call GetFoundationModel and check the responseStreamingSupported field in the response. For example code, see Invoke model with streaming code example in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModelWithResponseStream action.
   */
  converseStream(params: BedrockRuntime.Types.ConverseStreamRequest, callback?: (err: AWSError, data: BedrockRuntime.Types.ConverseStreamResponse) => void): Request<BedrockRuntime.Types.ConverseStreamResponse, AWSError>;
  /**
   * Sends messages to the specified Amazon Bedrock model and returns the response in a stream. ConverseStream provides a consistent API that works with all Amazon Bedrock models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model. For more information, see Run inference in the Bedrock User Guide. To find out if a model supports streaming, call GetFoundationModel and check the responseStreamingSupported field in the response. For example code, see Invoke model with streaming code example in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModelWithResponseStream action.
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
     * Information about a tool use request from a model. 
     */
    toolUse?: ToolUseBlock;
    /**
     * The result for a tool request that a model makes.
     */
    toolResult?: ToolResultBlock;
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
     * Additional inference parameters that the model supports, beyond the base set of inference parameters that Converse supports in the inferenceConfig field. For more information, see Model parameters.
     */
    additionalModelRequestFields?: Document;
    /**
     * Additional model parameters field paths to return in the response. Converse returns the requested fields as a JSON Pointer object in the additionalModelResultFields field. The following is example JSON for additionalModelResponseFieldPaths.  [ "/stop_sequence" ]  For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation.  Converse rejects an empty JSON Pointer or incorrectly structured JSON Pointer with a 400 error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by Converse.
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
     * Additional inference parameters that the model supports, beyond the base set of inference parameters that ConverseStream supports in the inferenceConfig field.
     */
    additionalModelRequestFields?: Document;
    /**
     * Additional model parameters field paths to return in the response. ConverseStream returns the requested fields as a JSON Pointer object in the additionalModelResultFields field. The following is example JSON for additionalModelResponseFieldPaths.  [ "/stop_sequence" ]  For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation.  ConverseStream rejects an empty JSON Pointer or incorrectly structured JSON Pointer with a 400 error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by ConverseStream.
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
  export interface Document {
  }
  export type GuardrailIdentifier = string;
  export type GuardrailVersion = string;
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
     * The raw image bytes for the image. If you use an AWS SDK, you don't need to base64 encode the image bytes.
     */
    bytes?: ImageSourceBytesBlob;
  }
  export type ImageSourceBytesBlob = Buffer|Uint8Array|Blob|string;
  export interface InferenceConfiguration {
    /**
     * The maximum number of tokens to allow in the generated response. The default value is the maximum allowed value for the model that you are using. For more information, see Inference parameters for foundatio{ "messages": [ { "role": "user", "content": [ { "text": "what's the weather in Queens, NY and Austin, TX?" } ] }, { "role": "assistant", "content": [ { "toolUse": { "toolUseId": "1", "name": "get_weather", "input": { "city": "Queens", "state": "NY" } } }, { "toolUse": { "toolUseId": "2", "name": "get_weather", "input": { "city": "Austin", "state": "TX" } } } ] }, { "role": "user", "content": [ { "toolResult": { "toolUseId": "2", "content": [ { "json": { "weather": "40" } } ] } }, { "text": "..." }, { "toolResult": { "toolUseId": "1", "content": [ { "text": "result text" } ] } } ] } ], "toolConfig": { "tools": [ { "name": "get_weather", "description": "Get weather", "inputSchema": { "type": "object", "properties": { "city": { "type": "string", "description": "City of location" }, "state": { "type": "string", "description": "State of location" } }, "required": ["city", "state"] } } ] } } n models. 
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
     * The prompt and inference parameters in the format specified in the contentType in the header. To see the format and content of the request and response bodies for different models, refer to Inference parameters. For more information, see Run inference in the Bedrock User Guide.
     */
    body: Body;
    /**
     * The MIME type of the input data in the request. The default value is application/json.
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
     * The prompt and inference parameters in the format specified in the contentType in the header. To see the format and content of the request and response bodies for different models, refer to Inference parameters. For more information, see Run inference in the Bedrock User Guide.
     */
    body: Body;
    /**
     * The MIME type of the input data in the request. The default value is application/json.
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
     * The message content.
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
  export type StopReason = "end_turn"|"tool_use"|"max_tokens"|"stop_sequence"|"content_filtered"|string;
  export type String = string;
  export interface SystemContentBlock {
    /**
     * A system prompt for the model. 
     */
    text?: NonEmptyString;
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
     * The Model automatically decides if a tool should be called or to whether to generate text instead.
     */
    auto?: AutoToolChoice;
    /**
     * The model must request at least one tool (no text is generated).
     */
    any?: AnyToolChoice;
    /**
     * The Model must request the specified tool.
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
