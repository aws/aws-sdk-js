import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SageMakerRuntime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SageMakerRuntime.Types.ClientConfiguration)
  config: Config & SageMakerRuntime.Types.ClientConfiguration;
  /**
   * After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint.  For an overview of Amazon SageMaker, see How It Works   Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. 
   */
  invokeEndpoint(params: SageMakerRuntime.Types.InvokeEndpointInput, callback?: (err: AWSError, data: SageMakerRuntime.Types.InvokeEndpointOutput) => void): Request<SageMakerRuntime.Types.InvokeEndpointOutput, AWSError>;
  /**
   * After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint.  For an overview of Amazon SageMaker, see How It Works   Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. 
   */
  invokeEndpoint(callback?: (err: AWSError, data: SageMakerRuntime.Types.InvokeEndpointOutput) => void): Request<SageMakerRuntime.Types.InvokeEndpointOutput, AWSError>;
}
declare namespace SageMakerRuntime {
  export type BodyBlob = Buffer|Uint8Array|Blob|string;
  export type EndpointName = string;
  export type Header = string;
  export interface InvokeEndpointInput {
    /**
     * The name of the endpoint that you specified when you created the endpoint using the CreateEndpoint API. 
     */
    EndpointName: EndpointName;
    /**
     * Provides input data, in the format specified in the ContentType request header. Amazon SageMaker passes all of the data in the body to the model. 
     */
    Body: BodyBlob;
    /**
     * The MIME type of the input data in the request body.
     */
    ContentType?: Header;
    /**
     * The desired MIME type of the inference in the response.
     */
    Accept?: Header;
  }
  export interface InvokeEndpointOutput {
    /**
     * Includes the inference provided by the model.
     */
    Body: BodyBlob;
    /**
     * The MIME type of the inference returned in the response body.
     */
    ContentType?: Header;
    /**
     * Identifies the production variant that was invoked.
     */
    InvokedProductionVariant?: Header;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-05-13"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SageMakerRuntime client.
   */
  export import Types = SageMakerRuntime;
}
export = SageMakerRuntime;
