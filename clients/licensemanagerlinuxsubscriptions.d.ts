import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class LicenseManagerLinuxSubscriptions extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: LicenseManagerLinuxSubscriptions.Types.ClientConfiguration)
  config: Config & LicenseManagerLinuxSubscriptions.Types.ClientConfiguration;
  /**
   * Remove a third-party subscription provider from the Bring Your Own License (BYOL) subscriptions registered to your account.
   */
  deregisterSubscriptionProvider(params: LicenseManagerLinuxSubscriptions.Types.DeregisterSubscriptionProviderRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.DeregisterSubscriptionProviderResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.DeregisterSubscriptionProviderResponse, AWSError>;
  /**
   * Remove a third-party subscription provider from the Bring Your Own License (BYOL) subscriptions registered to your account.
   */
  deregisterSubscriptionProvider(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.DeregisterSubscriptionProviderResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.DeregisterSubscriptionProviderResponse, AWSError>;
  /**
   * Get details for a Bring Your Own License (BYOL) subscription that's registered to your account.
   */
  getRegisteredSubscriptionProvider(params: LicenseManagerLinuxSubscriptions.Types.GetRegisteredSubscriptionProviderRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.GetRegisteredSubscriptionProviderResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.GetRegisteredSubscriptionProviderResponse, AWSError>;
  /**
   * Get details for a Bring Your Own License (BYOL) subscription that's registered to your account.
   */
  getRegisteredSubscriptionProvider(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.GetRegisteredSubscriptionProviderResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.GetRegisteredSubscriptionProviderResponse, AWSError>;
  /**
   * Lists the Linux subscriptions service settings for your account.
   */
  getServiceSettings(params: LicenseManagerLinuxSubscriptions.Types.GetServiceSettingsRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.GetServiceSettingsResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.GetServiceSettingsResponse, AWSError>;
  /**
   * Lists the Linux subscriptions service settings for your account.
   */
  getServiceSettings(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.GetServiceSettingsResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.GetServiceSettingsResponse, AWSError>;
  /**
   * Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.
   */
  listLinuxSubscriptionInstances(params: LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionInstancesRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionInstancesResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionInstancesResponse, AWSError>;
  /**
   * Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.
   */
  listLinuxSubscriptionInstances(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionInstancesResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionInstancesResponse, AWSError>;
  /**
   * Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.
   */
  listLinuxSubscriptions(params: LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionsRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionsResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionsResponse, AWSError>;
  /**
   * Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.
   */
  listLinuxSubscriptions(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionsResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.ListLinuxSubscriptionsResponse, AWSError>;
  /**
   * List Bring Your Own License (BYOL) subscription registration resources for your account.
   */
  listRegisteredSubscriptionProviders(params: LicenseManagerLinuxSubscriptions.Types.ListRegisteredSubscriptionProvidersRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.ListRegisteredSubscriptionProvidersResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.ListRegisteredSubscriptionProvidersResponse, AWSError>;
  /**
   * List Bring Your Own License (BYOL) subscription registration resources for your account.
   */
  listRegisteredSubscriptionProviders(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.ListRegisteredSubscriptionProvidersResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.ListRegisteredSubscriptionProvidersResponse, AWSError>;
  /**
   * List the metadata tags that are assigned to the specified Amazon Web Services resource.
   */
  listTagsForResource(params: LicenseManagerLinuxSubscriptions.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.ListTagsForResourceResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List the metadata tags that are assigned to the specified Amazon Web Services resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.ListTagsForResourceResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Register the supported third-party subscription provider for your Bring Your Own License (BYOL) subscription.
   */
  registerSubscriptionProvider(params: LicenseManagerLinuxSubscriptions.Types.RegisterSubscriptionProviderRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.RegisterSubscriptionProviderResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.RegisterSubscriptionProviderResponse, AWSError>;
  /**
   * Register the supported third-party subscription provider for your Bring Your Own License (BYOL) subscription.
   */
  registerSubscriptionProvider(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.RegisterSubscriptionProviderResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.RegisterSubscriptionProviderResponse, AWSError>;
  /**
   * Add metadata tags to the specified Amazon Web Services resource.
   */
  tagResource(params: LicenseManagerLinuxSubscriptions.Types.TagResourceRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.TagResourceResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.TagResourceResponse, AWSError>;
  /**
   * Add metadata tags to the specified Amazon Web Services resource.
   */
  tagResource(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.TagResourceResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.TagResourceResponse, AWSError>;
  /**
   * Remove one or more metadata tag from the specified Amazon Web Services resource.
   */
  untagResource(params: LicenseManagerLinuxSubscriptions.Types.UntagResourceRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.UntagResourceResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.UntagResourceResponse, AWSError>;
  /**
   * Remove one or more metadata tag from the specified Amazon Web Services resource.
   */
  untagResource(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.UntagResourceResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the service settings for Linux subscriptions.
   */
  updateServiceSettings(params: LicenseManagerLinuxSubscriptions.Types.UpdateServiceSettingsRequest, callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.UpdateServiceSettingsResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.UpdateServiceSettingsResponse, AWSError>;
  /**
   * Updates the service settings for Linux subscriptions.
   */
  updateServiceSettings(callback?: (err: AWSError, data: LicenseManagerLinuxSubscriptions.Types.UpdateServiceSettingsResponse) => void): Request<LicenseManagerLinuxSubscriptions.Types.UpdateServiceSettingsResponse, AWSError>;
}
declare namespace LicenseManagerLinuxSubscriptions {
  export type Boolean = boolean;
  export type BoxInteger = number;
  export type BoxLong = number;
  export interface DeregisterSubscriptionProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the subscription provider resource to deregister.
     */
    SubscriptionProviderArn: SubscriptionProviderArn;
  }
  export interface DeregisterSubscriptionProviderResponse {
  }
  export interface Filter {
    /**
     * The type of name to filter by.
     */
    Name?: String;
    /**
     * An operator for filtering results.
     */
    Operator?: Operator;
    /**
     * One or more values for the name to filter by.
     */
    Values?: StringList;
  }
  export type FilterList = Filter[];
  export interface GetRegisteredSubscriptionProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the BYOL registration resource to get details for.
     */
    SubscriptionProviderArn: SubscriptionProviderArn;
  }
  export interface GetRegisteredSubscriptionProviderResponse {
    /**
     * The timestamp from the last time License Manager retrieved subscription details from your registered third-party Linux subscription provider.
     */
    LastSuccessfulDataRetrievalTime?: String;
    /**
     * The Amazon Resource Name (ARN) of the third-party access secret stored in Secrets Manager for the BYOL registration resource specified in the request.
     */
    SecretArn?: SecretArn;
    /**
     * The Amazon Resource Name (ARN) for the BYOL registration resource specified in the request.
     */
    SubscriptionProviderArn?: SubscriptionProviderArn;
    /**
     * The subscription provider for the BYOL registration resource specified in the request.
     */
    SubscriptionProviderSource?: SubscriptionProviderSource;
    /**
     * The status of the Linux subscription provider access token from the last successful subscription data request.
     */
    SubscriptionProviderStatus?: SubscriptionProviderStatus;
    /**
     * The detailed message from your subscription provider token status.
     */
    SubscriptionProviderStatusMessage?: String;
  }
  export interface GetServiceSettingsRequest {
  }
  export interface GetServiceSettingsResponse {
    /**
     * The Region in which License Manager displays the aggregated data for Linux subscriptions.
     */
    HomeRegions?: StringList;
    /**
     * Lists if discovery has been enabled for Linux subscriptions.
     */
    LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery;
    /**
     * Lists the settings defined for Linux subscriptions discovery. The settings include if Organizations integration has been enabled, and which Regions data will be aggregated from.
     */
    LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;
    /**
     * Indicates the status of Linux subscriptions settings being applied.
     */
    Status?: Status;
    /**
     * A message which details the Linux subscriptions service settings current status.
     */
    StatusMessage?: StringMap;
  }
  export interface Instance {
    /**
     * The account ID which owns the instance.
     */
    AccountID?: String;
    /**
     * The AMI ID used to launch the instance.
     */
    AmiId?: String;
    /**
     * Indicates that you have two different license subscriptions for the same software on your instance.
     */
    DualSubscription?: String;
    /**
     * The instance ID of the resource.
     */
    InstanceID?: String;
    /**
     * The instance type of the resource.
     */
    InstanceType?: String;
    /**
     * The time in which the last discovery updated the instance details.
     */
    LastUpdatedTime?: String;
    /**
     * The operating system software version that runs on your instance.
     */
    OsVersion?: String;
    /**
     * The product code for the instance. For more information, see Usage operation values in the License Manager User Guide .
     */
    ProductCode?: ProductCodeList;
    /**
     * The Region the instance is running in.
     */
    Region?: String;
    /**
     * Indicates that your instance uses a BYOL license subscription from a third-party Linux subscription provider that you've registered with License Manager.
     */
    RegisteredWithSubscriptionProvider?: String;
    /**
     * The status of the instance.
     */
    Status?: String;
    /**
     * The name of the license subscription that the instance uses.
     */
    SubscriptionName?: String;
    /**
     * The timestamp when you registered the third-party Linux subscription provider for the subscription that the instance uses.
     */
    SubscriptionProviderCreateTime?: String;
    /**
     * The timestamp from the last time that the instance synced with the registered third-party Linux subscription provider.
     */
    SubscriptionProviderUpdateTime?: String;
    /**
     * The usage operation of the instance. For more information, see For more information, see Usage operation values in the License Manager User Guide.
     */
    UsageOperation?: String;
  }
  export type InstanceList = Instance[];
  export type LinuxSubscriptionsDiscovery = "Enabled"|"Disabled"|string;
  export interface LinuxSubscriptionsDiscoverySettings {
    /**
     * Details if you have enabled resource discovery across your accounts in Organizations.
     */
    OrganizationIntegration: OrganizationIntegration;
    /**
     * The Regions in which to discover data for Linux subscriptions.
     */
    SourceRegions: StringList;
  }
  export interface ListLinuxSubscriptionInstancesRequest {
    /**
     * An array of structures that you can use to filter the results by your specified criteria. For example, you can specify Region in the Name, with the contains operator to list all subscriptions that match a partial string in the Value, such as us-west. For each filter, you can specify one of the following values for the Name key to streamline results:    AccountID     AmiID     DualSubscription     InstanceID     InstanceType     ProductCode     Region     Status     UsageOperation    For each filter, you can use one of the following Operator values to define the behavior of the filter:    contains     equals     Notequal   
     */
    Filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    MaxResults?: BoxInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    NextToken?: ListLinuxSubscriptionInstancesRequestNextTokenString;
  }
  export type ListLinuxSubscriptionInstancesRequestNextTokenString = string;
  export interface ListLinuxSubscriptionInstancesResponse {
    /**
     * An array that contains instance objects.
     */
    Instances?: InstanceList;
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    NextToken?: String;
  }
  export interface ListLinuxSubscriptionsRequest {
    /**
     * An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. For example, you can filter by the name of Subscription with an optional operator to see subscriptions that match, partially match, or don't match a certain subscription's name. The valid names for this filter are:    Subscription    The valid Operators for this filter are:    contains     equals     Notequal   
     */
    Filters?: FilterList;
    /**
     * The maximum items to return in a request.
     */
    MaxResults?: BoxInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    NextToken?: ListLinuxSubscriptionsRequestNextTokenString;
  }
  export type ListLinuxSubscriptionsRequestNextTokenString = string;
  export interface ListLinuxSubscriptionsResponse {
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    NextToken?: String;
    /**
     * An array that contains subscription objects.
     */
    Subscriptions?: SubscriptionList;
  }
  export interface ListRegisteredSubscriptionProvidersRequest {
    /**
     * The maximum items to return in a request.
     */
    MaxResults?: ListRegisteredSubscriptionProvidersRequestMaxResultsInteger;
    /**
     * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
     */
    NextToken?: String;
    /**
     * To filter your results, specify which subscription providers to return in the list.
     */
    SubscriptionProviderSources?: SubscriptionProviderSourceList;
  }
  export type ListRegisteredSubscriptionProvidersRequestMaxResultsInteger = number;
  export interface ListRegisteredSubscriptionProvidersResponse {
    /**
     * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
     */
    NextToken?: String;
    /**
     * The list of BYOL registration resources that fit the criteria you specified in the request.
     */
    RegisteredSubscriptionProviders?: RegisteredSubscriptionProviderList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource for which to list metadata tags.
     */
    resourceArn: SubscriptionProviderArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The metadata tags for the requested resource.
     */
    tags?: Tags;
  }
  export type Operator = "Equal"|"NotEqual"|"Contains"|string;
  export type OrganizationIntegration = "Enabled"|"Disabled"|string;
  export type ProductCodeList = String[];
  export interface RegisterSubscriptionProviderRequest {
    /**
     * The Amazon Resource Name (ARN) of the secret where you've stored your subscription provider's access token. For RHEL subscriptions managed through the Red Hat Subscription Manager (RHSM), the secret contains your Red Hat Offline token.
     */
    SecretArn: SecretArn;
    /**
     * The supported Linux subscription provider to register.
     */
    SubscriptionProviderSource: SubscriptionProviderSource;
    /**
     * The metadata tags to assign to your registered Linux subscription provider resource.
     */
    Tags?: Tags;
  }
  export interface RegisterSubscriptionProviderResponse {
    /**
     * The Amazon Resource Name (ARN) of the Linux subscription provider resource that you registered.
     */
    SubscriptionProviderArn?: String;
    /**
     * The Linux subscription provider that you registered.
     */
    SubscriptionProviderSource?: SubscriptionProviderSource;
    /**
     * Indicates the status of the registration action for the Linux subscription provider that you requested.
     */
    SubscriptionProviderStatus?: SubscriptionProviderStatus;
  }
  export interface RegisteredSubscriptionProvider {
    /**
     * The timestamp from the last time that License Manager accessed third-party subscription data for your account from your registered Linux subscription provider.
     */
    LastSuccessfulDataRetrievalTime?: String;
    /**
     * The Amazon Resource Name (ARN) of the Secrets Manager secret that stores your registered Linux subscription provider access token. For RHEL account subscriptions, this is the offline token.
     */
    SecretArn?: SecretArn;
    /**
     * The Amazon Resource Name (ARN) of the Linux subscription provider resource that you registered.
     */
    SubscriptionProviderArn?: SubscriptionProviderArn;
    /**
     * A supported third-party Linux subscription provider. License Manager currently supports Red Hat subscriptions.
     */
    SubscriptionProviderSource?: SubscriptionProviderSource;
    /**
     * Indicates the status of your registered Linux subscription provider access token from the last time License Manager retrieved subscription data. For RHEL account subscriptions, this is the status of the offline token.
     */
    SubscriptionProviderStatus?: SubscriptionProviderStatus;
    /**
     * A detailed message that's associated with your BYOL subscription provider token status.
     */
    SubscriptionProviderStatusMessage?: String;
  }
  export type RegisteredSubscriptionProviderList = RegisteredSubscriptionProvider[];
  export type SecretArn = string;
  export type Status = "InProgress"|"Completed"|"Successful"|"Failed"|string;
  export type String = string;
  export type StringList = StringListMemberString[];
  export type StringListMemberString = string;
  export type StringMap = {[key: string]: String};
  export interface Subscription {
    /**
     * The total amount of running instances using this subscription.
     */
    InstanceCount?: BoxLong;
    /**
     * The name of the subscription.
     */
    Name?: String;
    /**
     * The type of subscription. The type can be subscription-included with Amazon EC2, Bring Your Own Subscription model (BYOS), or from the Amazon Web Services Marketplace. Certain subscriptions may use licensing from the Amazon Web Services Marketplace as well as OS licensing from Amazon EC2 or BYOS.
     */
    Type?: String;
  }
  export type SubscriptionList = Subscription[];
  export type SubscriptionProviderArn = string;
  export type SubscriptionProviderSource = "RedHat"|string;
  export type SubscriptionProviderSourceList = SubscriptionProviderSource[];
  export type SubscriptionProviderStatus = "ACTIVE"|"INVALID"|"PENDING"|string;
  export type TagKeyList = String[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Web Services resource to which to add the specified metadata tags.
     */
    resourceArn: SubscriptionProviderArn;
    /**
     * The metadata tags to assign to the Amazon Web Services resource. Tags are formatted as key value pairs.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type Tags = {[key: string]: String};
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Web Services resource to remove the metadata tags from.
     */
    resourceArn: SubscriptionProviderArn;
    /**
     * A list of metadata tag keys to remove from the requested resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateServiceSettingsRequest {
    /**
     * Describes if updates are allowed to the service settings for Linux subscriptions. If you allow updates, you can aggregate Linux subscription data in more than one home Region.
     */
    AllowUpdate?: Boolean;
    /**
     * Describes if the discovery of Linux subscriptions is enabled.
     */
    LinuxSubscriptionsDiscovery: LinuxSubscriptionsDiscovery;
    /**
     * The settings defined for Linux subscriptions discovery. The settings include if Organizations integration has been enabled, and which Regions data will be aggregated from.
     */
    LinuxSubscriptionsDiscoverySettings: LinuxSubscriptionsDiscoverySettings;
  }
  export interface UpdateServiceSettingsResponse {
    /**
     * The Region in which License Manager displays the aggregated data for Linux subscriptions.
     */
    HomeRegions?: StringList;
    /**
     * Lists if discovery has been enabled for Linux subscriptions.
     */
    LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery;
    /**
     * The settings defined for Linux subscriptions discovery. The settings include if Organizations integration has been enabled, and which Regions data will be aggregated from.
     */
    LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;
    /**
     * Indicates the status of Linux subscriptions settings being applied.
     */
    Status?: Status;
    /**
     * A message which details the Linux subscriptions service settings current status.
     */
    StatusMessage?: StringMap;
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
   * Contains interfaces for use with the LicenseManagerLinuxSubscriptions client.
   */
  export import Types = LicenseManagerLinuxSubscriptions;
}
export = LicenseManagerLinuxSubscriptions;
