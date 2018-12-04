import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Connect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Connect.Types.ClientConfiguration)
  config: Config & Connect.Types.ClientConfiguration;
  /**
   * Creates a new user account in your Amazon Connect instance.
   */
  createUser(params: Connect.Types.CreateUserRequest, callback?: (err: AWSError, data: Connect.Types.CreateUserResponse) => void): Request<Connect.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a new user account in your Amazon Connect instance.
   */
  createUser(callback?: (err: AWSError, data: Connect.Types.CreateUserResponse) => void): Request<Connect.Types.CreateUserResponse, AWSError>;
  /**
   * Deletes a user account from Amazon Connect.
   */
  deleteUser(params: Connect.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user account from Amazon Connect.
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns a User object that contains information about the user account specified by the UserId.
   */
  describeUser(params: Connect.Types.DescribeUserRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserResponse) => void): Request<Connect.Types.DescribeUserResponse, AWSError>;
  /**
   * Returns a User object that contains information about the user account specified by the UserId.
   */
  describeUser(callback?: (err: AWSError, data: Connect.Types.DescribeUserResponse) => void): Request<Connect.Types.DescribeUserResponse, AWSError>;
  /**
   * Returns a HierarchyGroup object that includes information about a hierarchy group in your instance.
   */
  describeUserHierarchyGroup(params: Connect.Types.DescribeUserHierarchyGroupRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyGroupResponse) => void): Request<Connect.Types.DescribeUserHierarchyGroupResponse, AWSError>;
  /**
   * Returns a HierarchyGroup object that includes information about a hierarchy group in your instance.
   */
  describeUserHierarchyGroup(callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyGroupResponse) => void): Request<Connect.Types.DescribeUserHierarchyGroupResponse, AWSError>;
  /**
   * Returns a HiearchyGroupStructure object, which contains data about the levels in the agent hierarchy.
   */
  describeUserHierarchyStructure(params: Connect.Types.DescribeUserHierarchyStructureRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyStructureResponse) => void): Request<Connect.Types.DescribeUserHierarchyStructureResponse, AWSError>;
  /**
   * Returns a HiearchyGroupStructure object, which contains data about the levels in the agent hierarchy.
   */
  describeUserHierarchyStructure(callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyStructureResponse) => void): Request<Connect.Types.DescribeUserHierarchyStructureResponse, AWSError>;
  /**
   * The GetCurrentMetricData operation retrieves current metric data from your Amazon Connect instance. If you are using an IAM account, it must have permission to the connect:GetCurrentMetricData action.
   */
  getCurrentMetricData(params: Connect.Types.GetCurrentMetricDataRequest, callback?: (err: AWSError, data: Connect.Types.GetCurrentMetricDataResponse) => void): Request<Connect.Types.GetCurrentMetricDataResponse, AWSError>;
  /**
   * The GetCurrentMetricData operation retrieves current metric data from your Amazon Connect instance. If you are using an IAM account, it must have permission to the connect:GetCurrentMetricData action.
   */
  getCurrentMetricData(callback?: (err: AWSError, data: Connect.Types.GetCurrentMetricDataResponse) => void): Request<Connect.Types.GetCurrentMetricDataResponse, AWSError>;
  /**
   * Retrieves a token for federation.
   */
  getFederationToken(params: Connect.Types.GetFederationTokenRequest, callback?: (err: AWSError, data: Connect.Types.GetFederationTokenResponse) => void): Request<Connect.Types.GetFederationTokenResponse, AWSError>;
  /**
   * Retrieves a token for federation.
   */
  getFederationToken(callback?: (err: AWSError, data: Connect.Types.GetFederationTokenResponse) => void): Request<Connect.Types.GetFederationTokenResponse, AWSError>;
  /**
   * The GetMetricData operation retrieves historical metrics data from your Amazon Connect instance. If you are using an IAM account, it must have permission to the connect:GetMetricData action.
   */
  getMetricData(params: Connect.Types.GetMetricDataRequest, callback?: (err: AWSError, data: Connect.Types.GetMetricDataResponse) => void): Request<Connect.Types.GetMetricDataResponse, AWSError>;
  /**
   * The GetMetricData operation retrieves historical metrics data from your Amazon Connect instance. If you are using an IAM account, it must have permission to the connect:GetMetricData action.
   */
  getMetricData(callback?: (err: AWSError, data: Connect.Types.GetMetricDataResponse) => void): Request<Connect.Types.GetMetricDataResponse, AWSError>;
  /**
   * Returns an array of RoutingProfileSummary objects that includes information about the routing profiles in your instance.
   */
  listRoutingProfiles(params: Connect.Types.ListRoutingProfilesRequest, callback?: (err: AWSError, data: Connect.Types.ListRoutingProfilesResponse) => void): Request<Connect.Types.ListRoutingProfilesResponse, AWSError>;
  /**
   * Returns an array of RoutingProfileSummary objects that includes information about the routing profiles in your instance.
   */
  listRoutingProfiles(callback?: (err: AWSError, data: Connect.Types.ListRoutingProfilesResponse) => void): Request<Connect.Types.ListRoutingProfilesResponse, AWSError>;
  /**
   * Returns an array of SecurityProfileSummary objects that contain information about the security profiles in your instance, including the ARN, Id, and Name of the security profile.
   */
  listSecurityProfiles(params: Connect.Types.ListSecurityProfilesRequest, callback?: (err: AWSError, data: Connect.Types.ListSecurityProfilesResponse) => void): Request<Connect.Types.ListSecurityProfilesResponse, AWSError>;
  /**
   * Returns an array of SecurityProfileSummary objects that contain information about the security profiles in your instance, including the ARN, Id, and Name of the security profile.
   */
  listSecurityProfiles(callback?: (err: AWSError, data: Connect.Types.ListSecurityProfilesResponse) => void): Request<Connect.Types.ListSecurityProfilesResponse, AWSError>;
  /**
   * Returns a UserHierarchyGroupSummaryList, which is an array of HierarchyGroupSummary objects that contain information about the hierarchy groups in your instance.
   */
  listUserHierarchyGroups(params: Connect.Types.ListUserHierarchyGroupsRequest, callback?: (err: AWSError, data: Connect.Types.ListUserHierarchyGroupsResponse) => void): Request<Connect.Types.ListUserHierarchyGroupsResponse, AWSError>;
  /**
   * Returns a UserHierarchyGroupSummaryList, which is an array of HierarchyGroupSummary objects that contain information about the hierarchy groups in your instance.
   */
  listUserHierarchyGroups(callback?: (err: AWSError, data: Connect.Types.ListUserHierarchyGroupsResponse) => void): Request<Connect.Types.ListUserHierarchyGroupsResponse, AWSError>;
  /**
   * Returns a UserSummaryList, which is an array of UserSummary objects.
   */
  listUsers(params: Connect.Types.ListUsersRequest, callback?: (err: AWSError, data: Connect.Types.ListUsersResponse) => void): Request<Connect.Types.ListUsersResponse, AWSError>;
  /**
   * Returns a UserSummaryList, which is an array of UserSummary objects.
   */
  listUsers(callback?: (err: AWSError, data: Connect.Types.ListUsersResponse) => void): Request<Connect.Types.ListUsersResponse, AWSError>;
  /**
   * The StartOutboundVoiceContact operation initiates a contact flow to place an outbound call to a customer. If you are using an IAM account, it must have permission to the connect:StartOutboundVoiceContact action.
   */
  startOutboundVoiceContact(params: Connect.Types.StartOutboundVoiceContactRequest, callback?: (err: AWSError, data: Connect.Types.StartOutboundVoiceContactResponse) => void): Request<Connect.Types.StartOutboundVoiceContactResponse, AWSError>;
  /**
   * The StartOutboundVoiceContact operation initiates a contact flow to place an outbound call to a customer. If you are using an IAM account, it must have permission to the connect:StartOutboundVoiceContact action.
   */
  startOutboundVoiceContact(callback?: (err: AWSError, data: Connect.Types.StartOutboundVoiceContactResponse) => void): Request<Connect.Types.StartOutboundVoiceContactResponse, AWSError>;
  /**
   * Ends the contact initiated by the StartOutboundVoiceContact operation. If you are using an IAM account, it must have permission to the connect:StopContact action.
   */
  stopContact(params: Connect.Types.StopContactRequest, callback?: (err: AWSError, data: Connect.Types.StopContactResponse) => void): Request<Connect.Types.StopContactResponse, AWSError>;
  /**
   * Ends the contact initiated by the StartOutboundVoiceContact operation. If you are using an IAM account, it must have permission to the connect:StopContact action.
   */
  stopContact(callback?: (err: AWSError, data: Connect.Types.StopContactResponse) => void): Request<Connect.Types.StopContactResponse, AWSError>;
  /**
   * The UpdateContactAttributes operation lets you programmatically create new, or update existing, contact attributes associated with a contact. You can use the operation to add or update attributes for both ongoing and completed contacts. For example, you can update the customer's name or the reason the customer called while the call is active, or add notes about steps that the agent took during the call that are displayed to the next agent that takes the call. You can also use the UpdateContactAttributes operation to update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or identifying abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted.  Important:  You cannot use the operation to update attributes for contacts that occurred prior to the release of the API, September 12, 2018. You can update attributes only for contacts that started after the release of the API. If you attempt to update attributes for a contact that occurred prior to the release of the API, a 400 error is returned. This applies also to queued callbacks that were initiated prior to the release of the API but are still active in your instance.
   */
  updateContactAttributes(params: Connect.Types.UpdateContactAttributesRequest, callback?: (err: AWSError, data: Connect.Types.UpdateContactAttributesResponse) => void): Request<Connect.Types.UpdateContactAttributesResponse, AWSError>;
  /**
   * The UpdateContactAttributes operation lets you programmatically create new, or update existing, contact attributes associated with a contact. You can use the operation to add or update attributes for both ongoing and completed contacts. For example, you can update the customer's name or the reason the customer called while the call is active, or add notes about steps that the agent took during the call that are displayed to the next agent that takes the call. You can also use the UpdateContactAttributes operation to update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or identifying abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted.  Important:  You cannot use the operation to update attributes for contacts that occurred prior to the release of the API, September 12, 2018. You can update attributes only for contacts that started after the release of the API. If you attempt to update attributes for a contact that occurred prior to the release of the API, a 400 error is returned. This applies also to queued callbacks that were initiated prior to the release of the API but are still active in your instance.
   */
  updateContactAttributes(callback?: (err: AWSError, data: Connect.Types.UpdateContactAttributesResponse) => void): Request<Connect.Types.UpdateContactAttributesResponse, AWSError>;
  /**
   * Assigns the specified hierarchy group to the user.
   */
  updateUserHierarchy(params: Connect.Types.UpdateUserHierarchyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified hierarchy group to the user.
   */
  updateUserHierarchy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the identity information for the specified user in a UserIdentityInfo object, including email, first name, and last name.
   */
  updateUserIdentityInfo(params: Connect.Types.UpdateUserIdentityInfoRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the identity information for the specified user in a UserIdentityInfo object, including email, first name, and last name.
   */
  updateUserIdentityInfo(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the phone configuration settings in the UserPhoneConfig object for the specified user.
   */
  updateUserPhoneConfig(params: Connect.Types.UpdateUserPhoneConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the phone configuration settings in the UserPhoneConfig object for the specified user.
   */
  updateUserPhoneConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified routing profile to a user.
   */
  updateUserRoutingProfile(params: Connect.Types.UpdateUserRoutingProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified routing profile to a user.
   */
  updateUserRoutingProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the security profiles assigned to the user.
   */
  updateUserSecurityProfiles(params: Connect.Types.UpdateUserSecurityProfilesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the security profiles assigned to the user.
   */
  updateUserSecurityProfiles(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Connect {
  export type ARN = string;
  export type AfterContactWorkTimeLimit = number;
  export type AgentFirstName = string;
  export type AgentLastName = string;
  export type AgentUsername = string;
  export type AttributeName = string;
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type AutoAccept = boolean;
  export type Channel = "VOICE"|string;
  export type Channels = Channel[];
  export type ClientToken = string;
  export type Comparison = "LT"|string;
  export type ContactFlowId = string;
  export type ContactId = string;
  export interface CreateUserRequest {
    /**
     * The user name in Amazon Connect for the account to create.
     */
    Username: AgentUsername;
    /**
     * The password for the user account to create. This is required if you are using Amazon Connect for identity management. If you are using SAML for identity management and include this parameter, an InvalidRequestException is returned.
     */
    Password?: Password;
    /**
     * Information about the user, including email address, first name, and last name.
     */
    IdentityInfo?: UserIdentityInfo;
    /**
     * Specifies the phone settings for the user, including AfterContactWorkTimeLimit, AutoAccept, DeskPhoneNumber, and PhoneType.
     */
    PhoneConfig: UserPhoneConfig;
    /**
     * The unique identifier for the user account in the directory service directory used for identity management. If Amazon Connect is unable to access the existing directory, you can use the DirectoryUserId to authenticate users. If you include the parameter, it is assumed that Amazon Connect cannot access the directory. If the parameter is not included, the UserIdentityInfo is used to authenticate users from your existing directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an InvalidRequestException is returned.
     */
    DirectoryUserId?: DirectoryUserId;
    /**
     * The unique identifier of the security profile to assign to the user created.
     */
    SecurityProfileIds: SecurityProfileIds;
    /**
     * The unique identifier for the routing profile to assign to the user created.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The unique identifier for the hierarchy group to assign to the user created.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface CreateUserResponse {
    /**
     * The unique identifier for the user account in Amazon Connect
     */
    UserId?: UserId;
    /**
     * The Amazon Resource Name (ARN) of the user account created.
     */
    UserArn?: ARN;
  }
  export interface Credentials {
    /**
     * An access token generated for a federated user to access Amazon Connect
     */
    AccessToken?: SecurityToken;
    /**
     * A token generated with an expiration time for the session a user is logged in to Amazon Connect
     */
    AccessTokenExpiration?: timestamp;
    /**
     * Renews a token generated for a user to access the Amazon Connect instance.
     */
    RefreshToken?: SecurityToken;
    /**
     * Renews the expiration timer for a generated token.
     */
    RefreshTokenExpiration?: timestamp;
  }
  export interface CurrentMetric {
    /**
     * The name of the metric.
     */
    Name?: CurrentMetricName;
    /**
     * The unit for the metric.
     */
    Unit?: Unit;
  }
  export interface CurrentMetricData {
    /**
     * The metric in a CurrentMetricData object.
     */
    Metric?: CurrentMetric;
    /**
     * The value of the metric in the CurrentMetricData object.
     */
    Value?: Value;
  }
  export type CurrentMetricDataCollections = CurrentMetricData[];
  export type CurrentMetricName = "AGENTS_ONLINE"|"AGENTS_AVAILABLE"|"AGENTS_ON_CALL"|"AGENTS_NON_PRODUCTIVE"|"AGENTS_AFTER_CONTACT_WORK"|"AGENTS_ERROR"|"AGENTS_STAFFED"|"CONTACTS_IN_QUEUE"|"OLDEST_CONTACT_AGE"|"CONTACTS_SCHEDULED"|string;
  export interface CurrentMetricResult {
    /**
     * The Dimensions for the CurrentMetricResult object.
     */
    Dimensions?: Dimensions;
    /**
     * The Collections for the CurrentMetricResult object.
     */
    Collections?: CurrentMetricDataCollections;
  }
  export type CurrentMetricResults = CurrentMetricResult[];
  export type CurrentMetrics = CurrentMetric[];
  export interface DeleteUserRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * The unique identifier of the user to delete.
     */
    UserId: UserId;
  }
  export interface DescribeUserHierarchyGroupRequest {
    /**
     * The identifier for the hierarchy group to return.
     */
    HierarchyGroupId: HierarchyGroupId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserHierarchyGroupResponse {
    /**
     * Returns a HierarchyGroup object.
     */
    HierarchyGroup?: HierarchyGroup;
  }
  export interface DescribeUserHierarchyStructureRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserHierarchyStructureResponse {
    /**
     * A HierarchyStructure object.
     */
    HierarchyStructure?: HierarchyStructure;
  }
  export interface DescribeUserRequest {
    /**
     * Unique identifier for the user account to return.
     */
    UserId: UserId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserResponse {
    /**
     * A User object that contains information about the user account and configuration settings.
     */
    User?: User;
  }
  export interface Dimensions {
    /**
     * A QueueReference object used as one part of dimension for the metrics results.
     */
    Queue?: QueueReference;
    /**
     * The channel used for grouping and filters. Only VOICE is supported.
     */
    Channel?: Channel;
  }
  export type DirectoryUserId = string;
  export type Email = string;
  export interface Filters {
    /**
     * A list of up to 100 queue IDs or queue ARNs to use to filter the metrics retrieved. You can include both IDs and ARNs in a request.
     */
    Queues?: Queues;
    /**
     * The Channel to use as a filter for the metrics returned. Only VOICE is supported.
     */
    Channels?: Channels;
  }
  export interface GetCurrentMetricDataRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * A Filters object that contains a list of queue IDs or queue ARNs, up to 100, or list of Channels to use to filter the metrics returned in the response. Metric data is retrieved only for the resources associated with the queue IDs, ARNs, or Channels included in the filter. You can include both IDs and ARNs in the same request. To retrieve metrics for all queues, add the queue ID or ARN for each queue in your instance. Only VOICE is supported for Channels. To find the ARN for a queue, open the queue you want to use in the Amazon Connect Queue editor. The ARN for the queue is displayed in the address bar as part of the URL. For example, the queue ARN is the set of characters at the end of the URL, after 'id=' such as arn:aws:connect:us-east-1:270923740243:instance/78fb859d-1b7d-44b1-8aa3-12f0835c5855/queue/1d1a4575-9618-40ab-bbeb-81e45795fe61. The queue ID is also included in the URL, and is the string after 'queue/'.
     */
    Filters: Filters;
    /**
     * The grouping applied to the metrics returned. For example, when grouped by QUEUE, the metrics returned apply to each queue rather than aggregated for all queues. If you group by CHANNEL, you should include a Channels filter. The only supported channel is VOICE. If no Grouping is included in the request, a summary of CurrentMetrics is returned. 
     */
    Groupings?: Groupings;
    /**
     * A list of CurrentMetric objects for the metrics to retrieve. Each CurrentMetric includes a name of a metric to retrieve and the unit to use for it. The following metrics are available:  AGENTS_AVAILABLE  Unit: COUNT  AGENTS_ONLINE  Unit: COUNT  AGENTS_ON_CALL  Unit: COUNT  AGENTS_STAFFED  Unit: COUNT  AGENTS_AFTER_CONTACT_WORK  Unit: COUNT  AGENTS_NON_PRODUCTIVE  Unit: COUNT  AGENTS_ERROR  Unit: COUNT  CONTACTS_IN_QUEUE  Unit: COUNT  OLDEST_CONTACT_AGE  Unit: SECONDS  CONTACTS_SCHEDULED  Unit: COUNT  
     */
    CurrentMetrics: CurrentMetrics;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the NextToken must use the same request parameters as the request that generated the token.
     */
    NextToken?: NextToken;
    /**
     *  MaxResults indicates the maximum number of results to return per page in the response, between 1 and 100.
     */
    MaxResults?: MaxResult100;
  }
  export interface GetCurrentMetricDataResponse {
    /**
     * A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the NextToken must use the same request parameters as the request that generated the token. 
     */
    NextToken?: NextToken;
    /**
     * A list of CurrentMetricResult objects organized by Dimensions combining with CurrentMetricDataCollections.  Dimensions is the resourceId specified in the Filters of the request.   Collections is a list of CurrentMetricData objects with corresponding values to the CurrentMetrics specified in the request. If no Grouping is specified in the request, Collections is a summary for the CurrentMetric returned.
     */
    MetricResults?: CurrentMetricResults;
    /**
     * The time at which CurrentMetricData was retrieved and cached for pagination.
     */
    DataSnapshotTime?: timestamp;
  }
  export interface GetFederationTokenRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface GetFederationTokenResponse {
    /**
     * The credentials to use for federation.
     */
    Credentials?: Credentials;
  }
  export interface GetMetricDataRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15.  StartTime cannot be earlier than 24 hours before the time of the request. Historical metrics are available in Amazon Connect only for 24 hours.
     */
    StartTime: timestamp;
    /**
     * The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the StartTime timestamp. The time range between StartTime and EndTime must be less than 24 hours.
     */
    EndTime: timestamp;
    /**
     * A Filters object that contains a list of queue IDs or queue ARNs, up to 100, or a list of Channels to use to filter the metrics returned in the response. Metric data is retrieved only for the resources associated with the IDs, ARNs, or Channels included in the filter. You can use both IDs and ARNs together in a request. Only VOICE is supported for Channel. To find the ARN for a queue, open the queue you want to use in the Amazon Connect Queue editor. The ARN for the queue is displayed in the address bar as part of the URL. For example, the queue ARN is the set of characters at the end of the URL, after 'id=' such as arn:aws:connect:us-east-1:270923740243:instance/78fb859d-1b7d-44b1-8aa3-12f0835c5855/queue/1d1a4575-9618-40ab-bbeb-81e45795fe61. The queue ID is also included in the URL, and is the string after 'queue/'.
     */
    Filters: Filters;
    /**
     * The grouping applied to the metrics returned. For example, when results are grouped by queueId, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues. The current version supports grouping by Queue If no Grouping is included in the request, a summary of HistoricalMetrics for all queues is returned.
     */
    Groupings?: Groupings;
    /**
     * A list of HistoricalMetric objects that contain the metrics to retrieve with the request. A HistoricalMetric object contains: HistoricalMetricName, Statistic, Threshold, and Unit. For each historical metric you include in the request, you must include a Unit and a Statistic.  The following historical metrics are available:  CONTACTS_QUEUED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED  Unit: COUNT Statistics: SUM  CONTACTS_ABANDONED  Unit: COUNT Statistics: SUM  CONTACTS_CONSULTED  Unit: COUNT Statistics: SUM  CONTACTS_AGENT_HUNG_UP_FIRST  Unit: COUNT Statistics: SUM  CONTACTS_HANDLED_INCOMING  Unit: COUNT Statistics: SUM  CONTACTS_HANDLED_OUTBOUND  Unit: COUNT Statistics: SUM  CONTACTS_HOLD_ABANDONS  Unit: COUNT Statistics: SUM  CONTACTS_TRANSFERRED_IN  Unit: COUNT Statistics: SUM  CONTACTS_TRANSFERRED_OUT  Unit: COUNT Statistics: SUM  CONTACTS_TRANSFERRED_IN_FROM_QUEUE  Unit: COUNT Statistics: SUM  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE  Unit: COUNT Statistics: SUM  CALLBACK_CONTACTS_HANDLED  Unit: COUNT Statistics: SUM  CALLBACK_CONTACTS_HANDLED  Unit: COUNT Statistics: SUM  API_CONTACTS_HANDLED  Unit: COUNT Statistics: SUM  CONTACTS_MISSED  Unit: COUNT Statistics: SUM  OCCUPANCY  Unit: PERCENT Statistics: AVG  HANDLE_TIME  Unit: SECONDS Statistics: AVG  AFTER_CONTACT_WORK_TIME  Unit: SECONDS Statistics: AVG  QUEUED_TIME  Unit: SECONDS Statistics: MAX  ABANDON_TIME  Unit: COUNT Statistics: SUM  QUEUE_ANSWER_TIME  Unit: SECONDS Statistics: AVG  HOLD_TIME  Unit: SECONDS Statistics: AVG  INTERACTION_TIME  Unit: SECONDS Statistics: AVG  INTERACTION_AND_HOLD_TIME  Unit: SECONDS Statistics: AVG  SERVICE_LEVEL  Unit: PERCENT Statistics: AVG Threshold: Only "Less than" comparisons are supported, with the following service level thresholds: 15, 20, 25, 30, 45, 60, 90, 120, 180, 240, 300, 600  
     */
    HistoricalMetrics: HistoricalMetrics;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Indicates the maximum number of results to return per page in the response, between 1-100.
     */
    MaxResults?: MaxResult100;
  }
  export interface GetMetricDataResponse {
    /**
     * A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the NextToken must use the same request parameters as the request that generated the token. 
     */
    NextToken?: NextToken;
    /**
     * A list of HistoricalMetricResult objects, organized by Dimensions, which is the ID of the resource specified in the Filters used for the request. The metrics are combined with the metrics included in Collections, which is a list of HisotricalMetricData objects. If no Grouping is specified in the request, Collections includes summary data for the HistoricalMetrics.
     */
    MetricResults?: HistoricalMetricResults;
  }
  export type Grouping = "QUEUE"|"CHANNEL"|string;
  export type Groupings = Grouping[];
  export interface HierarchyGroup {
    /**
     * The identifier for the hierarchy group.
     */
    Id?: HierarchyGroupId;
    /**
     * The Amazon Resource Name (ARN) for the hierarchy group.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy group in your instance.
     */
    Name?: HierarchyGroupName;
    /**
     * The identifier for the level in the hierarchy group.
     */
    LevelId?: HierarchyLevelId;
    /**
     * A HierarchyPath object that contains information about the levels in the hierarchy group.
     */
    HierarchyPath?: HierarchyPath;
  }
  export type HierarchyGroupId = string;
  export type HierarchyGroupName = string;
  export interface HierarchyGroupSummary {
    /**
     * The identifier of the hierarchy group.
     */
    Id?: HierarchyGroupId;
    /**
     * The ARN for the hierarchy group.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy group.
     */
    Name?: HierarchyGroupName;
  }
  export type HierarchyGroupSummaryList = HierarchyGroupSummary[];
  export interface HierarchyLevel {
    /**
     * The identifier for the hierarchy group level.
     */
    Id?: HierarchyLevelId;
    /**
     * The ARN for the hierarchy group level.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy group level.
     */
    Name?: HierarchyLevelName;
  }
  export type HierarchyLevelId = string;
  export type HierarchyLevelName = string;
  export interface HierarchyPath {
    /**
     * A HierarchyGroupSummary object that contains information about the level of the hierarchy group, including ARN, Id, and Name.
     */
    LevelOne?: HierarchyGroupSummary;
    /**
     * A HierarchyGroupSummary object that contains information about the level of the hierarchy group, including ARN, Id, and Name.
     */
    LevelTwo?: HierarchyGroupSummary;
    /**
     * A HierarchyGroupSummary object that contains information about the level of the hierarchy group, including ARN, Id, and Name.
     */
    LevelThree?: HierarchyGroupSummary;
    /**
     * A HierarchyGroupSummary object that contains information about the level of the hierarchy group, including ARN, Id, and Name.
     */
    LevelFour?: HierarchyGroupSummary;
    /**
     * A HierarchyGroupSummary object that contains information about the level of the hierarchy group, including ARN, Id, and Name.
     */
    LevelFive?: HierarchyGroupSummary;
  }
  export interface HierarchyStructure {
    /**
     * A HierarchyLevel object that contains information about the hierarchy group level.
     */
    LevelOne?: HierarchyLevel;
    /**
     * A HierarchyLevel object that contains information about the hierarchy group level.
     */
    LevelTwo?: HierarchyLevel;
    /**
     * A HierarchyLevel object that contains information about the hierarchy group level.
     */
    LevelThree?: HierarchyLevel;
    /**
     * A HierarchyLevel object that contains information about the hierarchy group level.
     */
    LevelFour?: HierarchyLevel;
    /**
     * A HierarchyLevel object that contains information about the hierarchy group level.
     */
    LevelFive?: HierarchyLevel;
  }
  export interface HistoricalMetric {
    /**
     * The name of the historical metric.
     */
    Name?: HistoricalMetricName;
    /**
     * The threshold for the metric, used with service level metrics.
     */
    Threshold?: Threshold;
    /**
     * The statistic for the metric: SUM, MAX, or SUM.
     */
    Statistic?: Statistic;
    /**
     * The unit for the metric: COUNT, PERCENT, or SECONDS.
     */
    Unit?: Unit;
  }
  export interface HistoricalMetricData {
    /**
     * A HistoricalMetric object.
     */
    Metric?: HistoricalMetric;
    /**
     * The Value of the metric.
     */
    Value?: Value;
  }
  export type HistoricalMetricDataCollections = HistoricalMetricData[];
  export type HistoricalMetricName = "CONTACTS_QUEUED"|"CONTACTS_HANDLED"|"CONTACTS_ABANDONED"|"CONTACTS_CONSULTED"|"CONTACTS_AGENT_HUNG_UP_FIRST"|"CONTACTS_HANDLED_INCOMING"|"CONTACTS_HANDLED_OUTBOUND"|"CONTACTS_HOLD_ABANDONS"|"CONTACTS_TRANSFERRED_IN"|"CONTACTS_TRANSFERRED_OUT"|"CONTACTS_TRANSFERRED_IN_FROM_QUEUE"|"CONTACTS_TRANSFERRED_OUT_FROM_QUEUE"|"CONTACTS_MISSED"|"CALLBACK_CONTACTS_HANDLED"|"API_CONTACTS_HANDLED"|"OCCUPANCY"|"HANDLE_TIME"|"AFTER_CONTACT_WORK_TIME"|"QUEUED_TIME"|"ABANDON_TIME"|"QUEUE_ANSWER_TIME"|"HOLD_TIME"|"INTERACTION_TIME"|"INTERACTION_AND_HOLD_TIME"|"SERVICE_LEVEL"|string;
  export interface HistoricalMetricResult {
    /**
     * The Dimensions for the metrics.
     */
    Dimensions?: Dimensions;
    /**
     * A list of HistoricalMetricData objects.
     */
    Collections?: HistoricalMetricDataCollections;
  }
  export type HistoricalMetricResults = HistoricalMetricResult[];
  export type HistoricalMetrics = HistoricalMetric[];
  export type InstanceId = string;
  export interface ListRoutingProfilesRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of routing profiles to return in the response.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListRoutingProfilesResponse {
    /**
     * An array of RoutingProfileSummary objects that include the ARN, Id, and Name of the routing profile.
     */
    RoutingProfileSummaryList?: RoutingProfileSummaryList;
    /**
     * A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListSecurityProfilesRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of security profiles to return.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListSecurityProfilesResponse {
    /**
     * An array of SecurityProfileSummary objects.
     */
    SecurityProfileSummaryList?: SecurityProfileSummaryList;
    /**
     * A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListUserHierarchyGroupsRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of hierarchy groups to return.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListUserHierarchyGroupsResponse {
    /**
     * An array of HierarchyGroupSummary objects.
     */
    UserHierarchyGroupSummaryList?: HierarchyGroupSummaryList;
    /**
     * A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListUsersRequest {
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in the response.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListUsersResponse {
    /**
     * An array of UserSummary objects that contain information about the users in your instance.
     */
    UserSummaryList?: UserSummaryList;
    /**
     * A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export type MaxResult100 = number;
  export type MaxResult1000 = number;
  export type NextToken = string;
  export type Password = string;
  export type PhoneNumber = string;
  export type PhoneType = "SOFT_PHONE"|"DESK_PHONE"|string;
  export type QueueId = string;
  export interface QueueReference {
    /**
     * The ID of the queue associated with the metrics returned.
     */
    Id?: QueueId;
    /**
     * The Amazon Resource Name (ARN) of queue.
     */
    Arn?: ARN;
  }
  export type Queues = QueueId[];
  export type RoutingProfileId = string;
  export type RoutingProfileName = string;
  export interface RoutingProfileSummary {
    /**
     * The identifier of the routing profile.
     */
    Id?: RoutingProfileId;
    /**
     * The ARN of the routing profile.
     */
    Arn?: ARN;
    /**
     * The name of the routing profile.
     */
    Name?: RoutingProfileName;
  }
  export type RoutingProfileSummaryList = RoutingProfileSummary[];
  export type SecurityProfileId = string;
  export type SecurityProfileIds = SecurityProfileId[];
  export type SecurityProfileName = string;
  export interface SecurityProfileSummary {
    /**
     * The identifier of the security profile.
     */
    Id?: SecurityProfileId;
    /**
     * The ARN of the security profile.
     */
    Arn?: ARN;
    /**
     * The name of the security profile.
     */
    Name?: SecurityProfileName;
  }
  export type SecurityProfileSummaryList = SecurityProfileSummary[];
  export type SecurityToken = string;
  export interface StartOutboundVoiceContactRequest {
    /**
     * The phone number of the customer in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The identifier for the contact flow to connect the outbound call to. To find the ContactFlowId, open the contact flow you want to use in the Amazon Connect contact flow editor. The ID for the contact flow is displayed in the address bar as part of the URL. For example, the contact flow ID is the set of characters at the end of the URL, after 'contact-flow/' such as 78ea8fd5-2659-4f2b-b528-699760ccfc1b.
     */
    ContactFlowId: ContactFlowId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. If the contact is disconnected, a new contact is started.
     */
    ClientToken?: ClientToken;
    /**
     * The phone number, in E.164 format, associated with your Amazon Connect instance to use for the outbound call.
     */
    SourcePhoneNumber?: PhoneNumber;
    /**
     * The queue to add the call to. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue used will be the queue defined in the contact flow. To find the QueueId, open the queue you want to use in the Amazon Connect Queue editor. The ID for the queue is displayed in the address bar as part of the URL. For example, the queue ID is the set of characters at the end of the URL, after 'queue/' such as queue/aeg40574-2d01-51c3-73d6-bf8624d2168c.
     */
    QueueId?: QueueId;
    /**
     * Specify a custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs. Attribute keys can include only alphanumeric, dash, and underscore characters. For example, if you want play a greeting when the customer answers the call, you can pass the customer name in attributes similar to the following:
     */
    Attributes?: Attributes;
  }
  export interface StartOutboundVoiceContactResponse {
    /**
     * The unique identifier of this contact within your Amazon Connect instance.
     */
    ContactId?: ContactId;
  }
  export type Statistic = "SUM"|"MAX"|"AVG"|string;
  export interface StopContactRequest {
    /**
     * The unique identifier of the contact to end.
     */
    ContactId: ContactId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface StopContactResponse {
  }
  export interface Threshold {
    /**
     * The Threshold to use to compare service level metrics to. Only "Less than" (LT) comparisons are supported.
     */
    Comparison?: Comparison;
    /**
     * The value of the threshold to compare the metric to. Only "Less than" (LT) comparisons are supported.
     */
    ThresholdValue?: ThresholdValue;
  }
  export type ThresholdValue = number;
  export type Unit = "SECONDS"|"COUNT"|"PERCENT"|string;
  export interface UpdateContactAttributesRequest {
    /**
     * The unique identifier of the contact for which to update attributes. This is the identifier for the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * The key-value pairs for the attribute to update.
     */
    Attributes: Attributes;
  }
  export interface UpdateContactAttributesResponse {
  }
  export interface UpdateUserHierarchyRequest {
    /**
     * The identifier for the hierarchy group to assign to the user.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The identifier of the user account to assign the hierarchy group to.
     */
    UserId: UserId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserIdentityInfoRequest {
    /**
     * A UserIdentityInfo object.
     */
    IdentityInfo: UserIdentityInfo;
    /**
     * The identifier for the user account to update identity information for.
     */
    UserId: UserId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserPhoneConfigRequest {
    /**
     * A UserPhoneConfig object that contains settings for AfterContactWorkTimeLimit, AutoAccept, DeskPhoneNumber, and PhoneType to assign to the user.
     */
    PhoneConfig: UserPhoneConfig;
    /**
     * The identifier for the user account to change phone settings for.
     */
    UserId: UserId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserRoutingProfileRequest {
    /**
     * The identifier of the routing profile to assign to the user.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The identifier for the user account to assign the routing profile to.
     */
    UserId: UserId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserSecurityProfilesRequest {
    /**
     * The identifiers for the security profiles to assign to the user.
     */
    SecurityProfileIds: SecurityProfileIds;
    /**
     * The identifier of the user account to assign the security profiles.
     */
    UserId: UserId;
    /**
     * The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
  }
  export interface User {
    /**
     * The identifier of the user account.
     */
    Id?: UserId;
    /**
     * The ARN of the user account.
     */
    Arn?: ARN;
    /**
     * The user name assigned to the user account.
     */
    Username?: AgentUsername;
    /**
     * A UserIdentityInfo object.
     */
    IdentityInfo?: UserIdentityInfo;
    /**
     * A UserPhoneConfig object.
     */
    PhoneConfig?: UserPhoneConfig;
    /**
     * The directory Id for the user account in the existing directory used for identity management.
     */
    DirectoryUserId?: DirectoryUserId;
    /**
     * The identifier(s) for the security profile assigned to the user.
     */
    SecurityProfileIds?: SecurityProfileIds;
    /**
     * The identifier of the routing profile assigned to the user.
     */
    RoutingProfileId?: RoutingProfileId;
    /**
     * The identifier for the hierarchy group assigned to the user.
     */
    HierarchyGroupId?: HierarchyGroupId;
  }
  export type UserId = string;
  export interface UserIdentityInfo {
    /**
     * The first name used in the user account. This is required if you are using Amazon Connect or SAML for identity management.
     */
    FirstName?: AgentFirstName;
    /**
     * The last name used in the user account. This is required if you are using Amazon Connect or SAML for identity management.
     */
    LastName?: AgentLastName;
    /**
     * The email address added to the user account. If you are using SAML for identity management and include this parameter, an InvalidRequestException is returned.
     */
    Email?: Email;
  }
  export interface UserPhoneConfig {
    /**
     * The phone type selected for the user, either Soft phone or Desk phone.
     */
    PhoneType: PhoneType;
    /**
     * The Auto accept setting for the user, Yes or No.
     */
    AutoAccept?: AutoAccept;
    /**
     * The After Call Work (ACW) timeout setting, in seconds, for the user.
     */
    AfterContactWorkTimeLimit?: AfterContactWorkTimeLimit;
    /**
     * The phone number for the user's desk phone.
     */
    DeskPhoneNumber?: PhoneNumber;
  }
  export interface UserSummary {
    /**
     * The identifier for the user account.
     */
    Id?: UserId;
    /**
     * The ARN for the user account.
     */
    Arn?: ARN;
    /**
     * The Amazon Connect user name for the user account.
     */
    Username?: AgentUsername;
  }
  export type UserSummaryList = UserSummary[];
  export type Value = number;
  export type timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-08-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Connect client.
   */
  export import Types = Connect;
}
export = Connect;
