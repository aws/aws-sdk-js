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
  export type Body = Buffer|Uint8Array|Blob|string;
  export type GuardrailIdentifier = string;
  export type GuardrailVersion = string;
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
  export type PartBody = Buffer|Uint8Array|Blob|string;
  export interface PayloadPart {
    /**
     * Base64-encoded bytes of payload data.
     */
    bytes?: PartBody;
  }
  export type ResponseStream = EventStream<{chunk?:PayloadPart,internalServerException?:InternalServerException,modelStreamErrorException?:ModelStreamErrorException,validationException?:ValidationException,throttlingException?:ThrottlingException,modelTimeoutException?:ModelTimeoutException}>;
  export type StatusCode = number;
  export interface ThrottlingException {
    message?: NonBlankString;
  }
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
