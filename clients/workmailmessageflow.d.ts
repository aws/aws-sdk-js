import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {Readable} from 'stream';
interface Blob {}
declare class WorkMailMessageFlow extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WorkMailMessageFlow.Types.ClientConfiguration)
  config: Config & WorkMailMessageFlow.Types.ClientConfiguration;
  /**
   * Retrieves the raw content of an in-transit email message, in MIME format. 
   */
  getRawMessageContent(params: WorkMailMessageFlow.Types.GetRawMessageContentRequest, callback?: (err: AWSError, data: WorkMailMessageFlow.Types.GetRawMessageContentResponse) => void): Request<WorkMailMessageFlow.Types.GetRawMessageContentResponse, AWSError>;
  /**
   * Retrieves the raw content of an in-transit email message, in MIME format. 
   */
  getRawMessageContent(callback?: (err: AWSError, data: WorkMailMessageFlow.Types.GetRawMessageContentResponse) => void): Request<WorkMailMessageFlow.Types.GetRawMessageContentResponse, AWSError>;
}
declare namespace WorkMailMessageFlow {
  export interface GetRawMessageContentRequest {
    /**
     * The identifier of the email message to retrieve.
     */
    messageId: messageIdType;
  }
  export interface GetRawMessageContentResponse {
    /**
     * The raw content of the email message, in MIME format.
     */
    messageContent: messageContentBlob;
  }
  export type messageContentBlob = Buffer|Uint8Array|Blob|string|Readable;
  export type messageIdType = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-05-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WorkMailMessageFlow client.
   */
  export import Types = WorkMailMessageFlow;
}
export = WorkMailMessageFlow;
