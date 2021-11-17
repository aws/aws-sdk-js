import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class AppConfigData extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AppConfigData.Types.ClientConfiguration)
  config: Config & AppConfigData.Types.ClientConfiguration;
  /**
   * Retrieves the latest deployed configuration. This API may return empty Configuration data if the client already has the latest version. See StartConfigurationSession to obtain an InitialConfigurationToken to call this API.  Each call to GetLatestConfiguration returns a new ConfigurationToken (NextPollConfigurationToken in the response). This new token MUST be provided to the next call to GetLatestConfiguration when polling for configuration updates. To avoid excess charges, we recommend that you include the ClientConfigurationVersion value with every call to GetConfiguration. This value must be saved on your client. Subsequent calls to GetConfiguration must pass this value by using the ClientConfigurationVersion parameter.  
   */
  getLatestConfiguration(params: AppConfigData.Types.GetLatestConfigurationRequest, callback?: (err: AWSError, data: AppConfigData.Types.GetLatestConfigurationResponse) => void): Request<AppConfigData.Types.GetLatestConfigurationResponse, AWSError>;
  /**
   * Retrieves the latest deployed configuration. This API may return empty Configuration data if the client already has the latest version. See StartConfigurationSession to obtain an InitialConfigurationToken to call this API.  Each call to GetLatestConfiguration returns a new ConfigurationToken (NextPollConfigurationToken in the response). This new token MUST be provided to the next call to GetLatestConfiguration when polling for configuration updates. To avoid excess charges, we recommend that you include the ClientConfigurationVersion value with every call to GetConfiguration. This value must be saved on your client. Subsequent calls to GetConfiguration must pass this value by using the ClientConfigurationVersion parameter.  
   */
  getLatestConfiguration(callback?: (err: AWSError, data: AppConfigData.Types.GetLatestConfigurationResponse) => void): Request<AppConfigData.Types.GetLatestConfigurationResponse, AWSError>;
  /**
   * Starts a configuration session used to retrieve a deployed configuration. See the GetLatestConfiguration API for more details.
   */
  startConfigurationSession(params: AppConfigData.Types.StartConfigurationSessionRequest, callback?: (err: AWSError, data: AppConfigData.Types.StartConfigurationSessionResponse) => void): Request<AppConfigData.Types.StartConfigurationSessionResponse, AWSError>;
  /**
   * Starts a configuration session used to retrieve a deployed configuration. See the GetLatestConfiguration API for more details.
   */
  startConfigurationSession(callback?: (err: AWSError, data: AppConfigData.Types.StartConfigurationSessionResponse) => void): Request<AppConfigData.Types.StartConfigurationSessionResponse, AWSError>;
}
declare namespace AppConfigData {
  export interface GetLatestConfigurationRequest {
    /**
     * Token describing the current state of the configuration session. To obtain a token, first call the StartConfigurationSession API. Note that every call to GetLatestConfiguration will return a new ConfigurationToken (NextPollConfigurationToken in the response) and MUST be provided to subsequent GetLatestConfiguration API calls.
     */
    ConfigurationToken: Token;
  }
  export interface GetLatestConfigurationResponse {
    /**
     * The data of the configuration. Note that this may be empty if the client already has the latest version of configuration.
     */
    Configuration?: SyntheticGetLatestConfigurationResponseBlob;
    /**
     * A standard MIME type describing the format of the configuration content.
     */
    ContentType?: String;
    /**
     * The latest token describing the current state of the configuration session. This MUST be provided to the next call to GetLatestConfiguration.
     */
    NextPollConfigurationToken?: Token;
    /**
     * The amount of time the client should wait before polling for configuration updates again. See RequiredMinimumPollIntervalInSeconds to set the desired poll interval.
     */
    NextPollIntervalInSeconds?: Integer;
  }
  export type Identifier = string;
  export type Integer = number;
  export type OptionalPollSeconds = number;
  export interface StartConfigurationSessionRequest {
    /**
     * The application ID or the application name.
     */
    ApplicationIdentifier: Identifier;
    /**
     * The configuration profile ID or the configuration profile name.
     */
    ConfigurationProfileIdentifier: Identifier;
    /**
     * The environment ID or the environment name.
     */
    EnvironmentIdentifier: Identifier;
    /**
     * The interval at which your client will poll for configuration. If provided, the service will throw a BadRequestException if the client polls before the specified poll interval. By default, client poll intervals are not enforced.
     */
    RequiredMinimumPollIntervalInSeconds?: OptionalPollSeconds;
  }
  export interface StartConfigurationSessionResponse {
    /**
     * Token encapsulating state about the configuration session. Provide this token to the GetLatestConfiguration API to retrieve configuration data.  This token should only be used once in your first call to GetLatestConfiguration. You MUST use the new token in the GetConfiguration response (NextPollConfigurationToken) in each subsequent call to GetLatestConfiguration. 
     */
    InitialConfigurationToken?: Token;
  }
  export type String = string;
  export type SyntheticGetLatestConfigurationResponseBlob = Buffer|Uint8Array|Blob|string;
  export type Token = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-11-11"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AppConfigData client.
   */
  export import Types = AppConfigData;
}
export = AppConfigData;
