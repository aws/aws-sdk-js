import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class RUM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: RUM.Types.ClientConfiguration)
  config: Config & RUM.Types.ClientConfiguration;
  /**
   * Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior. You use this operation only to create a new app monitor. To update an existing app monitor, use UpdateAppMonitor instead. After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated? 
   */
  createAppMonitor(params: RUM.Types.CreateAppMonitorRequest, callback?: (err: AWSError, data: RUM.Types.CreateAppMonitorResponse) => void): Request<RUM.Types.CreateAppMonitorResponse, AWSError>;
  /**
   * Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior. You use this operation only to create a new app monitor. To update an existing app monitor, use UpdateAppMonitor instead. After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated? 
   */
  createAppMonitor(callback?: (err: AWSError, data: RUM.Types.CreateAppMonitorResponse) => void): Request<RUM.Types.CreateAppMonitorResponse, AWSError>;
  /**
   * Deletes an existing app monitor. This immediately stops the collection of data.
   */
  deleteAppMonitor(params: RUM.Types.DeleteAppMonitorRequest, callback?: (err: AWSError, data: RUM.Types.DeleteAppMonitorResponse) => void): Request<RUM.Types.DeleteAppMonitorResponse, AWSError>;
  /**
   * Deletes an existing app monitor. This immediately stops the collection of data.
   */
  deleteAppMonitor(callback?: (err: AWSError, data: RUM.Types.DeleteAppMonitorResponse) => void): Request<RUM.Types.DeleteAppMonitorResponse, AWSError>;
  /**
   * Retrieves the complete configuration information for one app monitor.
   */
  getAppMonitor(params: RUM.Types.GetAppMonitorRequest, callback?: (err: AWSError, data: RUM.Types.GetAppMonitorResponse) => void): Request<RUM.Types.GetAppMonitorResponse, AWSError>;
  /**
   * Retrieves the complete configuration information for one app monitor.
   */
  getAppMonitor(callback?: (err: AWSError, data: RUM.Types.GetAppMonitorResponse) => void): Request<RUM.Types.GetAppMonitorResponse, AWSError>;
  /**
   * Retrieves the raw performance events that RUM has collected from your web application, so that you can do your own processing or analysis of this data.
   */
  getAppMonitorData(params: RUM.Types.GetAppMonitorDataRequest, callback?: (err: AWSError, data: RUM.Types.GetAppMonitorDataResponse) => void): Request<RUM.Types.GetAppMonitorDataResponse, AWSError>;
  /**
   * Retrieves the raw performance events that RUM has collected from your web application, so that you can do your own processing or analysis of this data.
   */
  getAppMonitorData(callback?: (err: AWSError, data: RUM.Types.GetAppMonitorDataResponse) => void): Request<RUM.Types.GetAppMonitorDataResponse, AWSError>;
  /**
   * Returns a list of the Amazon CloudWatch RUM app monitors in the account.
   */
  listAppMonitors(params: RUM.Types.ListAppMonitorsRequest, callback?: (err: AWSError, data: RUM.Types.ListAppMonitorsResponse) => void): Request<RUM.Types.ListAppMonitorsResponse, AWSError>;
  /**
   * Returns a list of the Amazon CloudWatch RUM app monitors in the account.
   */
  listAppMonitors(callback?: (err: AWSError, data: RUM.Types.ListAppMonitorsResponse) => void): Request<RUM.Types.ListAppMonitorsResponse, AWSError>;
  /**
   * Displays the tags associated with a CloudWatch RUM resource.
   */
  listTagsForResource(params: RUM.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: RUM.Types.ListTagsForResourceResponse) => void): Request<RUM.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Displays the tags associated with a CloudWatch RUM resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: RUM.Types.ListTagsForResourceResponse) => void): Request<RUM.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code snippet that RUM generates for you to add to your application includes PutRumEvents operations to send this data to RUM. Each PutRumEvents operation can send a batch of events from one user session.
   */
  putRumEvents(params: RUM.Types.PutRumEventsRequest, callback?: (err: AWSError, data: RUM.Types.PutRumEventsResponse) => void): Request<RUM.Types.PutRumEventsResponse, AWSError>;
  /**
   * Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code snippet that RUM generates for you to add to your application includes PutRumEvents operations to send this data to RUM. Each PutRumEvents operation can send a batch of events from one user session.
   */
  putRumEvents(callback?: (err: AWSError, data: RUM.Types.PutRumEventsResponse) => void): Request<RUM.Types.PutRumEventsResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified CloudWatch RUM resource. Currently, the only resources that can be tagged app monitors. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. For more information, see Tagging Amazon Web Services resources.
   */
  tagResource(params: RUM.Types.TagResourceRequest, callback?: (err: AWSError, data: RUM.Types.TagResourceResponse) => void): Request<RUM.Types.TagResourceResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified CloudWatch RUM resource. Currently, the only resources that can be tagged app monitors. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. For more information, see Tagging Amazon Web Services resources.
   */
  tagResource(callback?: (err: AWSError, data: RUM.Types.TagResourceResponse) => void): Request<RUM.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified resource.
   */
  untagResource(params: RUM.Types.UntagResourceRequest, callback?: (err: AWSError, data: RUM.Types.UntagResourceResponse) => void): Request<RUM.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: RUM.Types.UntagResourceResponse) => void): Request<RUM.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor configuration that you specify in this operation are changed. For any parameters that you omit, the existing values are kept. You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use TagResource. To create a new app monitor, use CreateAppMonitor. After you update an app monitor, sign in to the CloudWatch RUM console to get the updated JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated? 
   */
  updateAppMonitor(params: RUM.Types.UpdateAppMonitorRequest, callback?: (err: AWSError, data: RUM.Types.UpdateAppMonitorResponse) => void): Request<RUM.Types.UpdateAppMonitorResponse, AWSError>;
  /**
   * Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor configuration that you specify in this operation are changed. For any parameters that you omit, the existing values are kept. You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use TagResource. To create a new app monitor, use CreateAppMonitor. After you update an app monitor, sign in to the CloudWatch RUM console to get the updated JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated? 
   */
  updateAppMonitor(callback?: (err: AWSError, data: RUM.Types.UpdateAppMonitorResponse) => void): Request<RUM.Types.UpdateAppMonitorResponse, AWSError>;
}
declare namespace RUM {
  export interface AppMonitor {
    /**
     * A structure that contains much of the configuration data for the app monitor.
     */
    AppMonitorConfiguration?: AppMonitorConfiguration;
    /**
     * The date and time that this app monitor was created.
     */
    Created?: ISOTimestampString;
    /**
     * A structure that contains information about whether this app monitor stores a copy of the telemetry data that RUM collects using CloudWatch Logs.
     */
    DataStorage?: DataStorage;
    /**
     * The top-level internet domain name for which your application has administrative authority.
     */
    Domain?: AppMonitorDomain;
    /**
     * The unique ID of this app monitor.
     */
    Id?: AppMonitorId;
    /**
     * The date and time of the most recent changes to this app monitor's configuration.
     */
    LastModified?: ISOTimestampString;
    /**
     * The name of the app monitor.
     */
    Name?: AppMonitorName;
    /**
     * The current state of the app monitor.
     */
    State?: StateEnum;
    /**
     * The list of tag keys and values associated with this app monitor.
     */
    Tags?: TagMap;
  }
  export interface AppMonitorConfiguration {
    /**
     * If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.
     */
    AllowCookies?: Boolean;
    /**
     * If you set this to true, RUM enables X-Ray tracing for the user sessions that RUM samples. RUM adds an X-Ray trace header to allowed HTTP requests. It also records an X-Ray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the X-Ray console and the CloudWatch ServiceLens console. For more information, see What is X-Ray? 
     */
    EnableXRay?: Boolean;
    /**
     * A list of URLs in your website or application to exclude from RUM data collection. You can't include both ExcludedPages and IncludedPages in the same operation.
     */
    ExcludedPages?: Pages;
    /**
     * A list of pages in the CloudWatch RUM console that are to be displayed with a "favorite" icon.
     */
    FavoritePages?: FavoritePages;
    /**
     * The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool that is used to authorize the sending of data to RUM.
     */
    GuestRoleArn?: Arn;
    /**
     * The ID of the Amazon Cognito identity pool that is used to authorize the sending of data to RUM.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.   &lt;p&gt;You can't include both &lt;code&gt;ExcludedPages&lt;/code&gt; and &lt;code&gt;IncludedPages&lt;/code&gt; in the same operation.&lt;/p&gt; 
     */
    IncludedPages?: Pages;
    /**
     * Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.
     */
    SessionSampleRate?: SessionSampleRate;
    /**
     * An array that lists the types of telemetry data that this app monitor is to collect.    errors indicates that RUM collects data about unhandled JavaScript errors raised by your application.    performance indicates that RUM collects performance data about how your application and its resources are loaded and rendered. This includes Core Web Vitals.    http indicates that RUM collects data about HTTP errors thrown by your application.  
     */
    Telemetries?: Telemetries;
  }
  export interface AppMonitorDetails {
    /**
     * The unique ID of the app monitor.
     */
    id?: String;
    /**
     * The name of the app monitor.
     */
    name?: String;
    /**
     * The version of the app monitor.
     */
    version?: String;
  }
  export type AppMonitorDomain = string;
  export type AppMonitorId = string;
  export type AppMonitorName = string;
  export interface AppMonitorSummary {
    /**
     * The date and time that the app monitor was created.
     */
    Created?: ISOTimestampString;
    /**
     * The unique ID of this app monitor.
     */
    Id?: AppMonitorId;
    /**
     * The date and time of the most recent changes to this app monitor's configuration.
     */
    LastModified?: ISOTimestampString;
    /**
     * The name of this app monitor.
     */
    Name?: AppMonitorName;
    /**
     * The current state of this app monitor.
     */
    State?: StateEnum;
  }
  export type AppMonitorSummaryList = AppMonitorSummary[];
  export type Arn = string;
  export type Boolean = boolean;
  export interface CreateAppMonitorRequest {
    /**
     * A structure that contains much of the configuration data for the app monitor. If you are using Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the Amazon Cognito identity pool to use for authorization. If you don't include AppMonitorConfiguration, you must set up your own authorization method. For more information, see Authorize your application to send data to Amazon Web Services. If you omit this argument, the sample rate used for RUM is set to 10% of the user sessions.
     */
    AppMonitorConfiguration?: AppMonitorConfiguration;
    /**
     * Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. If you omit this parameter, the default is false.
     */
    CwLogEnabled?: Boolean;
    /**
     * The top-level internet domain name for which your application has administrative authority.
     */
    Domain: AppMonitorDomain;
    /**
     * A name for the app monitor.
     */
    Name: AppMonitorName;
    /**
     * Assigns one or more tags (key-value pairs) to the app monitor. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.  &lt;p&gt;You can associate as many as 50 tags with an app monitor.&lt;/p&gt; &lt;p&gt;For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html&quot;&gt;Tagging Amazon Web Services resources&lt;/a&gt;.&lt;/p&gt; 
     */
    Tags?: TagMap;
  }
  export interface CreateAppMonitorResponse {
    /**
     * The unique ID of the new app monitor.
     */
    Id?: AppMonitorId;
  }
  export interface CwLog {
    /**
     * Indicated whether the app monitor stores copies of the data that RUM collects in CloudWatch Logs.
     */
    CwLogEnabled?: Boolean;
    /**
     * The name of the log group where the copies are stored.
     */
    CwLogGroup?: String;
  }
  export interface DataStorage {
    /**
     * A structure that contains the information about whether the app monitor stores copies of the data that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group.
     */
    CwLog?: CwLog;
  }
  export interface DeleteAppMonitorRequest {
    /**
     * The name of the app monitor to delete.
     */
    Name: AppMonitorName;
  }
  export interface DeleteAppMonitorResponse {
  }
  export type EventData = string;
  export type EventDataList = EventData[];
  export type FavoritePages = String[];
  export interface GetAppMonitorDataRequest {
    /**
     * An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify.
     */
    Filters?: QueryFilters;
    /**
     * The maximum number of results to return in one operation. 
     */
    MaxResults?: MaxQueryResults;
    /**
     * The name of the app monitor that collected the data that you want to retrieve.
     */
    Name: AppMonitorName;
    /**
     * Use the token returned by the previous operation to request the next page of results.
     */
    NextToken?: Token;
    /**
     * A structure that defines the time range that you want to retrieve results from.
     */
    TimeRange: TimeRange;
  }
  export interface GetAppMonitorDataResponse {
    /**
     * The events that RUM collected that match your request.
     */
    Events?: EventDataList;
    /**
     * A token that you can use in a subsequent operation to retrieve the next set of results.
     */
    NextToken?: Token;
  }
  export interface GetAppMonitorRequest {
    /**
     * The app monitor to retrieve information for.
     */
    Name: AppMonitorName;
  }
  export interface GetAppMonitorResponse {
    /**
     * A structure containing all the configuration information for the app monitor.
     */
    AppMonitor?: AppMonitor;
  }
  export type ISOTimestampString = string;
  export type IdentityPoolId = string;
  export type Integer = number;
  export type JsonValue = string;
  export interface ListAppMonitorsRequest {
    /**
     * The maximum number of results to return in one operation. 
     */
    MaxResults?: Integer;
    /**
     * Use the token returned by the previous operation to request the next page of results.
     */
    NextToken?: String;
  }
  export interface ListAppMonitorsResponse {
    /**
     * An array of structures that contain information about the returned app monitors.
     */
    AppMonitorSummaries?: AppMonitorSummaryList;
    /**
     * A token that you can use in a subsequent operation to retrieve the next set of results.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource that you want to see the tags of.
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The ARN of the resource that you are viewing.
     */
    ResourceArn: Arn;
    /**
     * The list of tag keys and values associated with the resource you specified.
     */
    Tags: TagMap;
  }
  export type MaxQueryResults = number;
  export type Pages = Url[];
  export interface PutRumEventsRequest {
    /**
     * A structure that contains information about the app monitor that collected this telemetry information.
     */
    AppMonitorDetails: AppMonitorDetails;
    /**
     * A unique identifier for this batch of RUM event data.
     */
    BatchId: String;
    /**
     * The ID of the app monitor that is sending this data.
     */
    Id: AppMonitorId;
    /**
     * An array of structures that contain the telemetry event data.
     */
    RumEvents: RumEventList;
    /**
     * A structure that contains information about the user session that this batch of events was collected from.
     */
    UserDetails: UserDetails;
  }
  export interface PutRumEventsResponse {
  }
  export interface QueryFilter {
    /**
     * The name of a key to search for. The filter returns only the events that match the Name and Values that you specify.  Valid values for Name are Browser | Device | Country | Page | OS | EventType | Invert 
     */
    Name?: QueryFilterKey;
    /**
     * The values of the Name that are to be be included in the returned results.
     */
    Values?: QueryFilterValueList;
  }
  export type QueryFilterKey = string;
  export type QueryFilterValue = string;
  export type QueryFilterValueList = QueryFilterValue[];
  export type QueryFilters = QueryFilter[];
  export type QueryTimestamp = number;
  export interface RumEvent {
    /**
     * A string containing details about the event.
     */
    details: JsonValue;
    /**
     * A unique ID for this event.
     */
    id: String;
    /**
     * Metadata about this event, which contains a JSON serialization of the identity of the user for this session. The user information comes from information such as the HTTP user-agent request header and document interface.
     */
    metadata?: JsonValue;
    /**
     * The exact time that this event occurred.
     */
    timestamp: Timestamp;
    /**
     * The JSON schema that denotes the type of event this is, such as a page load or a new session.
     */
    type: String;
  }
  export type RumEventList = RumEvent[];
  export type SessionSampleRate = number;
  export type StateEnum = "CREATED"|"DELETING"|"ACTIVE"|string;
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the CloudWatch RUM resource that you're adding tags to.
     */
    ResourceArn: Arn;
    /**
     * The list of key-value pairs to associate with the resource.
     */
    Tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Telemetries = Telemetry[];
  export type Telemetry = "errors"|"performance"|"http"|string;
  export interface TimeRange {
    /**
     * The beginning of the time range to retrieve performance events from.
     */
    After: QueryTimestamp;
    /**
     * The end of the time range to retrieve performance events from. If you omit this, the time range extends to the time that this operation is performed.
     */
    Before?: QueryTimestamp;
  }
  export type Timestamp = Date;
  export type Token = string;
  export interface UntagResourceRequest {
    /**
     * The ARN of the CloudWatch RUM resource that you're removing tags from.
     */
    ResourceArn: Arn;
    /**
     * The list of tag keys to remove from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAppMonitorRequest {
    /**
     * A structure that contains much of the configuration data for the app monitor. If you are using Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the Amazon Cognito identity pool to use for authorization. If you don't include AppMonitorConfiguration, you must set up your own authorization method. For more information, see Authorize your application to send data to Amazon Web Services.
     */
    AppMonitorConfiguration?: AppMonitorConfiguration;
    /**
     * Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges.
     */
    CwLogEnabled?: Boolean;
    /**
     * The top-level internet domain name for which your application has administrative authority.
     */
    Domain?: AppMonitorDomain;
    /**
     * The name of the app monitor to update.
     */
    Name: AppMonitorName;
  }
  export interface UpdateAppMonitorResponse {
  }
  export type Url = string;
  export interface UserDetails {
    /**
     * The session ID that the performance events are from.
     */
    sessionId?: String;
    /**
     * The ID of the user for this user session. This ID is generated by RUM and does not include any personally identifiable information about the user.
     */
    userId?: String;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the RUM client.
   */
  export import Types = RUM;
}
export = RUM;
