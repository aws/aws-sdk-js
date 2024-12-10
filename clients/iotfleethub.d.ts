import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class IoTFleetHub extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IoTFleetHub.Types.ClientConfiguration)
  config: Config & IoTFleetHub.Types.ClientConfiguration;
  /**
   * Creates a Fleet Hub for IoT Device Management web application. When creating a Fleet Hub application, you must create an organization instance of IAM Identity Center if you don't already have one. The Fleet Hub application you create must also be in the same Amazon Web Services Region of the organization instance of IAM Identity Center. For more information see Enabling IAM Identity Center and Organization instances of IAM Identity Center.
   */
  createApplication(params: IoTFleetHub.Types.CreateApplicationRequest, callback?: (err: AWSError, data: IoTFleetHub.Types.CreateApplicationResponse) => void): Request<IoTFleetHub.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates a Fleet Hub for IoT Device Management web application. When creating a Fleet Hub application, you must create an organization instance of IAM Identity Center if you don't already have one. The Fleet Hub application you create must also be in the same Amazon Web Services Region of the organization instance of IAM Identity Center. For more information see Enabling IAM Identity Center and Organization instances of IAM Identity Center.
   */
  createApplication(callback?: (err: AWSError, data: IoTFleetHub.Types.CreateApplicationResponse) => void): Request<IoTFleetHub.Types.CreateApplicationResponse, AWSError>;
  /**
   * Deletes a Fleet Hub for IoT Device Management web application.
   */
  deleteApplication(params: IoTFleetHub.Types.DeleteApplicationRequest, callback?: (err: AWSError, data: IoTFleetHub.Types.DeleteApplicationResponse) => void): Request<IoTFleetHub.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes a Fleet Hub for IoT Device Management web application.
   */
  deleteApplication(callback?: (err: AWSError, data: IoTFleetHub.Types.DeleteApplicationResponse) => void): Request<IoTFleetHub.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Gets information about a Fleet Hub for IoT Device Management web application.
   */
  describeApplication(params: IoTFleetHub.Types.DescribeApplicationRequest, callback?: (err: AWSError, data: IoTFleetHub.Types.DescribeApplicationResponse) => void): Request<IoTFleetHub.Types.DescribeApplicationResponse, AWSError>;
  /**
   * Gets information about a Fleet Hub for IoT Device Management web application.
   */
  describeApplication(callback?: (err: AWSError, data: IoTFleetHub.Types.DescribeApplicationResponse) => void): Request<IoTFleetHub.Types.DescribeApplicationResponse, AWSError>;
  /**
   * Gets a list of Fleet Hub for IoT Device Management web applications for the current account.
   */
  listApplications(params: IoTFleetHub.Types.ListApplicationsRequest, callback?: (err: AWSError, data: IoTFleetHub.Types.ListApplicationsResponse) => void): Request<IoTFleetHub.Types.ListApplicationsResponse, AWSError>;
  /**
   * Gets a list of Fleet Hub for IoT Device Management web applications for the current account.
   */
  listApplications(callback?: (err: AWSError, data: IoTFleetHub.Types.ListApplicationsResponse) => void): Request<IoTFleetHub.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists the tags for the specified resource.
   */
  listTagsForResource(params: IoTFleetHub.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IoTFleetHub.Types.ListTagsForResourceResponse) => void): Request<IoTFleetHub.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags for the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: IoTFleetHub.Types.ListTagsForResourceResponse) => void): Request<IoTFleetHub.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.
   */
  tagResource(params: IoTFleetHub.Types.TagResourceRequest, callback?: (err: AWSError, data: IoTFleetHub.Types.TagResourceResponse) => void): Request<IoTFleetHub.Types.TagResourceResponse, AWSError>;
  /**
   * Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.
   */
  tagResource(callback?: (err: AWSError, data: IoTFleetHub.Types.TagResourceResponse) => void): Request<IoTFleetHub.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tags (metadata) from the resource.
   */
  untagResource(params: IoTFleetHub.Types.UntagResourceRequest, callback?: (err: AWSError, data: IoTFleetHub.Types.UntagResourceResponse) => void): Request<IoTFleetHub.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tags (metadata) from the resource.
   */
  untagResource(callback?: (err: AWSError, data: IoTFleetHub.Types.UntagResourceResponse) => void): Request<IoTFleetHub.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates information about a Fleet Hub for IoT Device Management web application.
   */
  updateApplication(params: IoTFleetHub.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: IoTFleetHub.Types.UpdateApplicationResponse) => void): Request<IoTFleetHub.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates information about a Fleet Hub for IoT Device Management web application.
   */
  updateApplication(callback?: (err: AWSError, data: IoTFleetHub.Types.UpdateApplicationResponse) => void): Request<IoTFleetHub.Types.UpdateApplicationResponse, AWSError>;
}
declare namespace IoTFleetHub {
  export type ApplicationState = "CREATING"|"DELETING"|"ACTIVE"|"CREATE_FAILED"|"DELETE_FAILED"|string;
  export type ApplicationSummaries = ApplicationSummary[];
  export interface ApplicationSummary {
    /**
     * The unique Id of the web application.
     */
    applicationId: Id;
    /**
     * The name of the web application.
     */
    applicationName: Name;
    /**
     * An optional description of the web application.
     */
    applicationDescription?: Description;
    /**
     * The URL of the web application.
     */
    applicationUrl: Url;
    /**
     * The date (in Unix epoch time) when the web application was created.
     */
    applicationCreationDate?: Timestamp;
    /**
     * The date (in Unix epoch time) when the web application was last updated.
     */
    applicationLastUpdateDate?: Timestamp;
    /**
     * The current state of the web application.
     */
    applicationState?: ApplicationState;
  }
  export type Arn = string;
  export type ClientRequestToken = string;
  export interface CreateApplicationRequest {
    /**
     * The name of the web application.
     */
    applicationName: Name;
    /**
     * An optional description of the web application.
     */
    applicationDescription?: Description;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientRequestToken;
    /**
     * The ARN of the role that the web application assumes when it interacts with Amazon Web Services IoT Core.  The name of the role must be in the form AWSIotFleetHub_random_string . 
     */
    roleArn: Arn;
    /**
     * A set of key/value pairs that you can use to manage the web application resource.
     */
    tags?: TagMap;
  }
  export interface CreateApplicationResponse {
    /**
     * The unique Id of the web application.
     */
    applicationId: Id;
    /**
     * The ARN of the web application.
     */
    applicationArn: Arn;
  }
  export interface DeleteApplicationRequest {
    /**
     * The unique Id of the web application.
     */
    applicationId: Id;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientRequestToken;
  }
  export interface DeleteApplicationResponse {
  }
  export interface DescribeApplicationRequest {
    /**
     * The unique Id of the web application.
     */
    applicationId: Id;
  }
  export interface DescribeApplicationResponse {
    /**
     * The unique Id of the web application.
     */
    applicationId: Id;
    /**
     * The ARN of the web application.
     */
    applicationArn: Arn;
    /**
     * The name of the web application.
     */
    applicationName: Name;
    /**
     * An optional description of the web application.
     */
    applicationDescription?: Description;
    /**
     * The URL of the web application.
     */
    applicationUrl: Url;
    /**
     * The current state of the web application.
     */
    applicationState: ApplicationState;
    /**
     * The date (in Unix epoch time) when the application was created.
     */
    applicationCreationDate: Timestamp;
    /**
     * The date (in Unix epoch time) when the application was last updated.
     */
    applicationLastUpdateDate: Timestamp;
    /**
     * The ARN of the role that the web application assumes when it interacts with Amazon Web Services IoT Core.
     */
    roleArn: Arn;
    /**
     * The Id of the single sign-on client that you use to authenticate and authorize users on the web application.
     */
    ssoClientId?: SsoClientId;
    /**
     * A message that explains any failures included in the applicationState response field. This message explains failures in the CreateApplication and DeleteApplication actions.
     */
    errorMessage?: ErrorMessage;
    /**
     * A set of key/value pairs that you can use to manage the web application resource.
     */
    tags?: TagMap;
  }
  export type Description = string;
  export type ErrorMessage = string;
  export type Id = string;
  export interface ListApplicationsRequest {
    /**
     * A token used to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListApplicationsResponse {
    /**
     * An array of objects that provide summaries of information about the web applications in the list.
     */
    applicationSummaries?: ApplicationSummaries;
    /**
     * A token used to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: ResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of tags assigned to the resource.
     */
    tags?: TagMap;
  }
  export type Name = string;
  export type NextToken = string;
  export type ResourceArn = string;
  export type SsoClientId = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: ResourceArn;
    /**
     * The new or modified tags for the resource.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = number;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: ResourceArn;
    /**
     * A list of the keys of the tags to be removed from the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateApplicationRequest {
    /**
     * The unique Id of the web application.
     */
    applicationId: Id;
    /**
     * The name of the web application.
     */
    applicationName?: Name;
    /**
     * An optional description of the web application.
     */
    applicationDescription?: Description;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientRequestToken;
  }
  export interface UpdateApplicationResponse {
  }
  export type Url = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-11-03"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IoTFleetHub client.
   */
  export import Types = IoTFleetHub;
}
export = IoTFleetHub;
