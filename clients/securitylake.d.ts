import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SecurityLake extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SecurityLake.Types.ClientConfiguration)
  config: Config & SecurityLake.Types.ClientConfiguration;
  /**
   * Adds a natively-supported Amazon Web Services service as a Security Lake source. Enables source types for member accounts in required Regions, based on specified parameters. You can choose any source type in any Region for accounts that are either part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, any combination of the three dimensions can be supplied to this API.  By default, dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when members is not specified, the API disables all Security Lake member accounts for sources. Similarly, when Regions are not specified, Security Lake is disabled for all the Regions where Security Lake is available as a service. You can use this API only to enable a natively-supported Amazon Web Services services as a source. Use CreateCustomLogSource to enable data collection from a custom source. 
   */
  createAwsLogSource(params: SecurityLake.Types.CreateAwsLogSourceRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateAwsLogSourceResponse) => void): Request<SecurityLake.Types.CreateAwsLogSourceResponse, AWSError>;
  /**
   * Adds a natively-supported Amazon Web Services service as a Security Lake source. Enables source types for member accounts in required Regions, based on specified parameters. You can choose any source type in any Region for accounts that are either part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, any combination of the three dimensions can be supplied to this API.  By default, dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when members is not specified, the API disables all Security Lake member accounts for sources. Similarly, when Regions are not specified, Security Lake is disabled for all the Regions where Security Lake is available as a service. You can use this API only to enable a natively-supported Amazon Web Services services as a source. Use CreateCustomLogSource to enable data collection from a custom source. 
   */
  createAwsLogSource(callback?: (err: AWSError, data: SecurityLake.Types.CreateAwsLogSourceResponse) => void): Request<SecurityLake.Types.CreateAwsLogSourceResponse, AWSError>;
  /**
   * Adds a third-party custom source in Amazon Security Lake, from the Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate API roles, use this API to add a custom source name in Security Lake. This operation creates a partition in the Security Lake S3 bucket as the target location for log files from the custom source, an associated Glue table, and an Glue crawler.
   */
  createCustomLogSource(params: SecurityLake.Types.CreateCustomLogSourceRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateCustomLogSourceResponse) => void): Request<SecurityLake.Types.CreateCustomLogSourceResponse, AWSError>;
  /**
   * Adds a third-party custom source in Amazon Security Lake, from the Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate API roles, use this API to add a custom source name in Security Lake. This operation creates a partition in the Security Lake S3 bucket as the target location for log files from the custom source, an associated Glue table, and an Glue crawler.
   */
  createCustomLogSource(callback?: (err: AWSError, data: SecurityLake.Types.CreateCustomLogSourceResponse) => void): Request<SecurityLake.Types.CreateCustomLogSourceResponse, AWSError>;
  /**
   * Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Regions with customized settings in advance before enabling log collection in Regions. You can either use the enableAll parameter to specify all Regions or you can specify the Regions you want to enable Security Lake using the Regions parameter and configure these Regions using the configurations parameter. When the CreateDataLake API is called multiple times, if that Region is already enabled, it will update the Region if configuration for that Region is provided. If that Region is a new Region, it will be set up with the customized configurations if it is specified.  When you enable Security Lake, it starts ingesting security data after the CreateAwsLogSource call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your account in the current Region, including security log and event data. For more information, see the Amazon Security Lake User Guide.
   */
  createDatalake(params: SecurityLake.Types.CreateDatalakeRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeResponse) => void): Request<SecurityLake.Types.CreateDatalakeResponse, AWSError>;
  /**
   * Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Regions with customized settings in advance before enabling log collection in Regions. You can either use the enableAll parameter to specify all Regions or you can specify the Regions you want to enable Security Lake using the Regions parameter and configure these Regions using the configurations parameter. When the CreateDataLake API is called multiple times, if that Region is already enabled, it will update the Region if configuration for that Region is provided. If that Region is a new Region, it will be set up with the customized configurations if it is specified.  When you enable Security Lake, it starts ingesting security data after the CreateAwsLogSource call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your account in the current Region, including security log and event data. For more information, see the Amazon Security Lake User Guide.
   */
  createDatalake(callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeResponse) => void): Request<SecurityLake.Types.CreateDatalakeResponse, AWSError>;
  /**
   * Automatically enable Security Lake in the specified Regions to begin ingesting security data. When you choose to enable organization accounts automatically, then Security Lake begins to enable new accounts as member accounts as they are added to the organization. Security Lake does not enable existing organization accounts that are not yet enabled.
   */
  createDatalakeAutoEnable(params: SecurityLake.Types.CreateDatalakeAutoEnableRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.CreateDatalakeAutoEnableResponse, AWSError>;
  /**
   * Automatically enable Security Lake in the specified Regions to begin ingesting security data. When you choose to enable organization accounts automatically, then Security Lake begins to enable new accounts as member accounts as they are added to the organization. Security Lake does not enable existing organization accounts that are not yet enabled.
   */
  createDatalakeAutoEnable(callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.CreateDatalakeAutoEnableResponse, AWSError>;
  /**
   * Designates the Security Lake administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
   */
  createDatalakeDelegatedAdmin(params: SecurityLake.Types.CreateDatalakeDelegatedAdminRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeDelegatedAdminResponse) => void): Request<SecurityLake.Types.CreateDatalakeDelegatedAdminResponse, AWSError>;
  /**
   * Designates the Security Lake administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
   */
  createDatalakeDelegatedAdmin(callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeDelegatedAdminResponse) => void): Request<SecurityLake.Types.CreateDatalakeDelegatedAdminResponse, AWSError>;
  /**
   * Creates the specified notification subscription in Security Lake. Creates the specified subscription notifications in the specified organization. 
   */
  createDatalakeExceptionsSubscription(params: SecurityLake.Types.CreateDatalakeExceptionsSubscriptionRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.CreateDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Creates the specified notification subscription in Security Lake. Creates the specified subscription notifications in the specified organization. 
   */
  createDatalakeExceptionsSubscription(callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.CreateDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Creates a subscription permission for accounts that are already enabled in Security Lake.
   */
  createSubscriber(params: SecurityLake.Types.CreateSubscriberRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateSubscriberResponse) => void): Request<SecurityLake.Types.CreateSubscriberResponse, AWSError>;
  /**
   * Creates a subscription permission for accounts that are already enabled in Security Lake.
   */
  createSubscriber(callback?: (err: AWSError, data: SecurityLake.Types.CreateSubscriberResponse) => void): Request<SecurityLake.Types.CreateSubscriberResponse, AWSError>;
  /**
   * Creates the specified notification subscription in Security Lake. Creates the specified subscription notifications from the specified organization. 
   */
  createSubscriptionNotificationConfiguration(params: SecurityLake.Types.CreateSubscriptionNotificationConfigurationRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.CreateSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Creates the specified notification subscription in Security Lake. Creates the specified subscription notifications from the specified organization. 
   */
  createSubscriptionNotificationConfiguration(callback?: (err: AWSError, data: SecurityLake.Types.CreateSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.CreateSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Removes a natively-supported Amazon Web Services service as a Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Amazon Security Lake collected from the source before disablement. You can choose any source type in any Region for accounts that are either part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, any combination of the three dimensions can be supplied to this API.  By default, dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when members is not specified, the API disables all Security Lake member accounts for sources. Similarly, when Regions are not specified, Security Lake is disabled for all the Regions where Security Lake is available as a service. You can use this API to remove a natively-supported Amazon Web Services service as a source. Use DeregisterCustomData to remove a custom source. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.
   */
  deleteAwsLogSource(params: SecurityLake.Types.DeleteAwsLogSourceRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteAwsLogSourceResponse) => void): Request<SecurityLake.Types.DeleteAwsLogSourceResponse, AWSError>;
  /**
   * Removes a natively-supported Amazon Web Services service as a Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Amazon Security Lake collected from the source before disablement. You can choose any source type in any Region for accounts that are either part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, any combination of the three dimensions can be supplied to this API.  By default, dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when members is not specified, the API disables all Security Lake member accounts for sources. Similarly, when Regions are not specified, Security Lake is disabled for all the Regions where Security Lake is available as a service. You can use this API to remove a natively-supported Amazon Web Services service as a source. Use DeregisterCustomData to remove a custom source. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.
   */
  deleteAwsLogSource(callback?: (err: AWSError, data: SecurityLake.Types.DeleteAwsLogSourceResponse) => void): Request<SecurityLake.Types.DeleteAwsLogSourceResponse, AWSError>;
  /**
   * Removes a custom log source from Security Lake.
   */
  deleteCustomLogSource(params: SecurityLake.Types.DeleteCustomLogSourceRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteCustomLogSourceResponse) => void): Request<SecurityLake.Types.DeleteCustomLogSourceResponse, AWSError>;
  /**
   * Removes a custom log source from Security Lake.
   */
  deleteCustomLogSource(callback?: (err: AWSError, data: SecurityLake.Types.DeleteCustomLogSourceResponse) => void): Request<SecurityLake.Types.DeleteCustomLogSourceResponse, AWSError>;
  /**
   * When you delete Amazon Security Lake from your account, Security Lake is disabled in all Regions. Also, this API automatically performs the off-boarding steps to off-board the account from Security Lake . This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your account in the current Region, including security log and event data. DeleteDatalake does not delete the S3 bucket which is owned by the Amazon Web Services account. For more information, see the Amazon Security Lake User Guide.
   */
  deleteDatalake(params: SecurityLake.Types.DeleteDatalakeRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeResponse) => void): Request<SecurityLake.Types.DeleteDatalakeResponse, AWSError>;
  /**
   * When you delete Amazon Security Lake from your account, Security Lake is disabled in all Regions. Also, this API automatically performs the off-boarding steps to off-board the account from Security Lake . This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your account in the current Region, including security log and event data. DeleteDatalake does not delete the S3 bucket which is owned by the Amazon Web Services account. For more information, see the Amazon Security Lake User Guide.
   */
  deleteDatalake(callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeResponse) => void): Request<SecurityLake.Types.DeleteDatalakeResponse, AWSError>;
  /**
   * Automatically delete Security Lake in the specified Regions to stop ingesting security data. When you delete Amazon Security Lake from your account, Security Lake is disabled in all Regions. Also, this API automatically performs the off-boarding steps to off-board the account from Security Lake . This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your account in the current Region, including security log and event data. For more information, see the Amazon Security Lake User Guide. 
   */
  deleteDatalakeAutoEnable(params: SecurityLake.Types.DeleteDatalakeAutoEnableRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.DeleteDatalakeAutoEnableResponse, AWSError>;
  /**
   * Automatically delete Security Lake in the specified Regions to stop ingesting security data. When you delete Amazon Security Lake from your account, Security Lake is disabled in all Regions. Also, this API automatically performs the off-boarding steps to off-board the account from Security Lake . This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your account in the current Region, including security log and event data. For more information, see the Amazon Security Lake User Guide. 
   */
  deleteDatalakeAutoEnable(callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.DeleteDatalakeAutoEnableResponse, AWSError>;
  /**
   * Deletes the Security Lake administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
   */
  deleteDatalakeDelegatedAdmin(params: SecurityLake.Types.DeleteDatalakeDelegatedAdminRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeDelegatedAdminResponse) => void): Request<SecurityLake.Types.DeleteDatalakeDelegatedAdminResponse, AWSError>;
  /**
   * Deletes the Security Lake administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
   */
  deleteDatalakeDelegatedAdmin(callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeDelegatedAdminResponse) => void): Request<SecurityLake.Types.DeleteDatalakeDelegatedAdminResponse, AWSError>;
  /**
   * Deletes the specified notification subscription in Security Lake. Deletes the specified subscription notifications in the specified organization.
   */
  deleteDatalakeExceptionsSubscription(params: SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Deletes the specified notification subscription in Security Lake. Deletes the specified subscription notifications in the specified organization.
   */
  deleteDatalakeExceptionsSubscription(callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Deletes the specified subscription permissions to Security Lake. Deletes the specified subscription permissions from the specified organization. 
   */
  deleteSubscriber(params: SecurityLake.Types.DeleteSubscriberRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteSubscriberResponse) => void): Request<SecurityLake.Types.DeleteSubscriberResponse, AWSError>;
  /**
   * Deletes the specified subscription permissions to Security Lake. Deletes the specified subscription permissions from the specified organization. 
   */
  deleteSubscriber(callback?: (err: AWSError, data: SecurityLake.Types.DeleteSubscriberResponse) => void): Request<SecurityLake.Types.DeleteSubscriberResponse, AWSError>;
  /**
   * Deletes the specified notification subscription in Security Lake. Deletes the specified subscription notifications from the specified organization. 
   */
  deleteSubscriptionNotificationConfiguration(params: SecurityLake.Types.DeleteSubscriptionNotificationConfigurationRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.DeleteSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Deletes the specified notification subscription in Security Lake. Deletes the specified subscription notifications from the specified organization. 
   */
  deleteSubscriptionNotificationConfiguration(callback?: (err: AWSError, data: SecurityLake.Types.DeleteSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.DeleteSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Retrieve the Security Lake configuration object for the specified account ID. This API does not take input parameters. 
   */
  getDatalake(params: SecurityLake.Types.GetDatalakeRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeResponse) => void): Request<SecurityLake.Types.GetDatalakeResponse, AWSError>;
  /**
   * Retrieve the Security Lake configuration object for the specified account ID. This API does not take input parameters. 
   */
  getDatalake(callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeResponse) => void): Request<SecurityLake.Types.GetDatalakeResponse, AWSError>;
  /**
   * Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has on boarded to Amazon Security Lake. This API does not take input parameters.
   */
  getDatalakeAutoEnable(params: SecurityLake.Types.GetDatalakeAutoEnableRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.GetDatalakeAutoEnableResponse, AWSError>;
  /**
   * Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has on boarded to Amazon Security Lake. This API does not take input parameters.
   */
  getDatalakeAutoEnable(callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.GetDatalakeAutoEnableResponse, AWSError>;
  /**
   * Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for a 2 week period of time from when a record was created in Security Lake. This API does not take input parameters. This API does not take input parameters.
   */
  getDatalakeExceptionsExpiry(params: SecurityLake.Types.GetDatalakeExceptionsExpiryRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeExceptionsExpiryResponse) => void): Request<SecurityLake.Types.GetDatalakeExceptionsExpiryResponse, AWSError>;
  /**
   * Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for a 2 week period of time from when a record was created in Security Lake. This API does not take input parameters. This API does not take input parameters.
   */
  getDatalakeExceptionsExpiry(callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeExceptionsExpiryResponse) => void): Request<SecurityLake.Types.GetDatalakeExceptionsExpiryResponse, AWSError>;
  /**
   * Retrieves the details of exception notifications for the account in Amazon Security Lake.
   */
  getDatalakeExceptionsSubscription(params: SecurityLake.Types.GetDatalakeExceptionsSubscriptionRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.GetDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Retrieves the details of exception notifications for the account in Amazon Security Lake.
   */
  getDatalakeExceptionsSubscription(callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.GetDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Retrieve the Security Lake configuration object for the specified account ID. This API does not take input parameters. 
   */
  getDatalakeStatus(params: SecurityLake.Types.GetDatalakeStatusRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeStatusResponse) => void): Request<SecurityLake.Types.GetDatalakeStatusResponse, AWSError>;
  /**
   * Retrieve the Security Lake configuration object for the specified account ID. This API does not take input parameters. 
   */
  getDatalakeStatus(callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeStatusResponse) => void): Request<SecurityLake.Types.GetDatalakeStatusResponse, AWSError>;
  /**
   * Retrieves subscription information for the specified subscription ID.
   */
  getSubscriber(params: SecurityLake.Types.GetSubscriberRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetSubscriberResponse) => void): Request<SecurityLake.Types.GetSubscriberResponse, AWSError>;
  /**
   * Retrieves subscription information for the specified subscription ID.
   */
  getSubscriber(callback?: (err: AWSError, data: SecurityLake.Types.GetSubscriberResponse) => void): Request<SecurityLake.Types.GetSubscriberResponse, AWSError>;
  /**
   * List the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
   */
  listDatalakeExceptions(params: SecurityLake.Types.ListDatalakeExceptionsRequest, callback?: (err: AWSError, data: SecurityLake.Types.ListDatalakeExceptionsResponse) => void): Request<SecurityLake.Types.ListDatalakeExceptionsResponse, AWSError>;
  /**
   * List the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
   */
  listDatalakeExceptions(callback?: (err: AWSError, data: SecurityLake.Types.ListDatalakeExceptionsResponse) => void): Request<SecurityLake.Types.ListDatalakeExceptionsResponse, AWSError>;
  /**
   * Lists the log sources in the current region.
   */
  listLogSources(params: SecurityLake.Types.ListLogSourcesRequest, callback?: (err: AWSError, data: SecurityLake.Types.ListLogSourcesResponse) => void): Request<SecurityLake.Types.ListLogSourcesResponse, AWSError>;
  /**
   * Lists the log sources in the current region.
   */
  listLogSources(callback?: (err: AWSError, data: SecurityLake.Types.ListLogSourcesResponse) => void): Request<SecurityLake.Types.ListLogSourcesResponse, AWSError>;
  /**
   * List all subscribers for the specific Security Lake account ID.
   */
  listSubscribers(params: SecurityLake.Types.ListSubscribersRequest, callback?: (err: AWSError, data: SecurityLake.Types.ListSubscribersResponse) => void): Request<SecurityLake.Types.ListSubscribersResponse, AWSError>;
  /**
   * List all subscribers for the specific Security Lake account ID.
   */
  listSubscribers(callback?: (err: AWSError, data: SecurityLake.Types.ListSubscribersResponse) => void): Request<SecurityLake.Types.ListSubscribersResponse, AWSError>;
  /**
   * Amazon Security Lake allows you to specify where to store your security data and for how long. You can specify a rollup Region to consolidate data from multiple regions.  You can update the properties of a Region or source. Input can either be directly specified to the API. 
   */
  updateDatalake(params: SecurityLake.Types.UpdateDatalakeRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeResponse) => void): Request<SecurityLake.Types.UpdateDatalakeResponse, AWSError>;
  /**
   * Amazon Security Lake allows you to specify where to store your security data and for how long. You can specify a rollup Region to consolidate data from multiple regions.  You can update the properties of a Region or source. Input can either be directly specified to the API. 
   */
  updateDatalake(callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeResponse) => void): Request<SecurityLake.Types.UpdateDatalakeResponse, AWSError>;
  /**
   * Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default, for a 2 week period of time from when a record was created in Security Lake. 
   */
  updateDatalakeExceptionsExpiry(params: SecurityLake.Types.UpdateDatalakeExceptionsExpiryRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeExceptionsExpiryResponse) => void): Request<SecurityLake.Types.UpdateDatalakeExceptionsExpiryResponse, AWSError>;
  /**
   * Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default, for a 2 week period of time from when a record was created in Security Lake. 
   */
  updateDatalakeExceptionsExpiry(callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeExceptionsExpiryResponse) => void): Request<SecurityLake.Types.UpdateDatalakeExceptionsExpiryResponse, AWSError>;
  /**
   * Update the subscription notification for exception notification.
   */
  updateDatalakeExceptionsSubscription(params: SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Update the subscription notification for exception notification.
   */
  updateDatalakeExceptionsSubscription(callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Update the subscription permission for the given Security Lake account ID.
   */
  updateSubscriber(params: SecurityLake.Types.UpdateSubscriberRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateSubscriberResponse) => void): Request<SecurityLake.Types.UpdateSubscriberResponse, AWSError>;
  /**
   * Update the subscription permission for the given Security Lake account ID.
   */
  updateSubscriber(callback?: (err: AWSError, data: SecurityLake.Types.UpdateSubscriberResponse) => void): Request<SecurityLake.Types.UpdateSubscriberResponse, AWSError>;
  /**
   * Create a new subscription notification or add the existing subscription notification setting for the specified subscription ID.
   */
  updateSubscriptionNotificationConfiguration(params: SecurityLake.Types.UpdateSubscriptionNotificationConfigurationRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.UpdateSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Create a new subscription notification or add the existing subscription notification setting for the specified subscription ID.
   */
  updateSubscriptionNotificationConfiguration(callback?: (err: AWSError, data: SecurityLake.Types.UpdateSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.UpdateSubscriptionNotificationConfigurationResponse, AWSError>;
}
declare namespace SecurityLake {
  export type AccessType = "LAKEFORMATION"|"S3"|string;
  export type AccessTypeList = AccessType[];
  export type AccountList = String[];
  export interface AccountSources {
    /**
     * Account ID of the Security Lake account for which logs are collected.
     */
    account: String;
    /**
     * Initializes a new instance of the Event class.
     */
    eventClass?: OcsfEventClass;
    /**
     * Log status for the Security Lake account.
     */
    logsStatus?: LogsStatusList;
    /**
     * The supported Amazon Web Services services from which logs and events are collected. Amazon Security Lake supports logs and events collection for natively-supported Amazon Web Services services. For more information, see the Amazon Security Lake User Guide. 
     */
    sourceType: String;
  }
  export type AccountSourcesList = AccountSources[];
  export type AllDimensionsMap = {[key: string]: TwoDimensionsMap};
  export interface AutoEnableNewRegionConfiguration {
    /**
     * The Regions where Security Lake is auto enabled
     */
    region: Region;
    /**
     * The Amazon Web Services sources which are auto enabled in Security Lake.
     */
    sources: AwsSourceTypeList;
  }
  export type AutoEnableNewRegionConfigurationList = AutoEnableNewRegionConfiguration[];
  export type AwsAccountId = string;
  export type AwsLogSourceType = "ROUTE53"|"VPC_FLOW"|"CLOUD_TRAIL"|"SH_FINDINGS"|string;
  export type AwsSourceTypeList = AwsLogSourceType[];
  export type Boolean = boolean;
  export interface CreateAwsLogSourceRequest {
    /**
     * Enables specific sources in all Regions and source types.
     */
    enableAllDimensions?: AllDimensionsMap;
    /**
     * Enables all sources in specific accounts or Regions.
     */
    enableSingleDimension?: InputSet;
    /**
     * Enables specific service sources in specific accounts or Regions.
     */
    enableTwoDimensions?: TwoDimensionsMap;
    /**
     * Specifies the input order to enable dimensions in Security Lake, namely region, source type, and member account.
     */
    inputOrder: DimensionSet;
  }
  export interface CreateAwsLogSourceResponse {
    /**
     * List of all accounts in which enabling a natively-supported Amazon Web Services service as a Security Lake failed. The failure occurred as these accounts are not part of an organization.
     */
    failed?: AccountList;
    /**
     * List of all accounts which are in the process of enabling a natively-supported Amazon Web Services service as a Security Lake.
     */
    processing?: AccountList;
  }
  export interface CreateCustomLogSourceRequest {
    /**
     * The custom source name for a third-party custom source. 
     */
    customSourceName: CustomSourceType;
    /**
     * The Open Cybersecurity Schema Framework (OCSF) event class.
     */
    eventClass: OcsfEventClass;
    /**
     * The IAM Role ARN to be used by the Glue Crawler. The recommended IAM policies are:   The managed policy AWSGlueServiceRole    A custom policy granting access to your S3 Data Lake  
     */
    glueInvocationRoleArn: RoleArn;
    /**
     * The Account ID that will assume the above Role to put logs into the Data Lake.
     */
    logProviderAccountId: AwsAccountId;
  }
  export interface CreateCustomLogSourceResponse {
    /**
     * The location of the partition in the Security Lake S3 bucket.
     */
    customDataLocation: String;
    /**
     * The name of the Glue crawler.
     */
    glueCrawlerName: String;
    /**
     * The Glue database where results are written, such as: arn:aws:daylight:us-east-1::database/sometable/*.
     */
    glueDatabaseName: String;
    /**
     * The table name of the Glue crawler.
     */
    glueTableName: String;
    /**
     *  IAM Role ARN to be used by the entity putting logs into your Custom Source partition. Security Lake will apply the correct access policies to this Role, but this Role must have the trust policy created manually. This Role's name must start with the text 'Security Lake'. It must trust the logProviderAccountId to assume it.
     */
    logProviderAccessRoleArn: String;
  }
  export interface CreateDatalakeAutoEnableRequest {
    /**
     * Enable Amazon Security Lake with the specified configurations settings to begin ingesting security data for new accounts in Security Lake. 
     */
    configurationForNewAccounts: AutoEnableNewRegionConfigurationList;
  }
  export interface CreateDatalakeAutoEnableResponse {
  }
  export interface CreateDatalakeDelegatedAdminRequest {
    /**
     * Account ID of the Security Lake delegated administrator.
     */
    account: SafeString;
  }
  export interface CreateDatalakeDelegatedAdminResponse {
  }
  export interface CreateDatalakeExceptionsSubscriptionRequest {
    /**
     * The account in which the exception notifications subscription is created.
     */
    notificationEndpoint: SafeString;
    /**
     * The subscription protocol to which exception messages are posted. 
     */
    subscriptionProtocol: SubscriptionProtocolType;
  }
  export interface CreateDatalakeExceptionsSubscriptionResponse {
  }
  export interface CreateDatalakeRequest {
    /**
     * Enable Security Lake with the specified configurations settings to begin ingesting security data. 
     */
    configurations?: LakeConfigurationRequestMap;
    /**
     * Enable Security Lake in all Regions to begin ingesting security data.
     */
    enableAll?: Boolean;
    /**
     * The Role ARN used to create and update the Glue table with partitions generated by ingestion and normalization of Amazon Web Services log sources and custom sources.
     */
    metaStoreManagerRoleArn?: RoleArn;
    /**
     * Enable Security Lake in the specified Regions to begin ingesting security data. To enable Security Lake in specific Amazon Web Services Regions, such as us-east-1 or ap-northeast-3, provide the Region codes. For a list of Region codes, see Region codes in the Amazon Web Services General Reference.
     */
    regions?: RegionSet;
  }
  export interface CreateDatalakeResponse {
  }
  export interface CreateSubscriberRequest {
    /**
     * The Amazon S3 or Lake Formation access type.
     */
    accessTypes?: AccessTypeList;
    /**
     * The third party Amazon Web Services account ID used to access your data.
     */
    accountId: AwsAccountId;
    /**
     * The external ID of the subscriber. External ID allows the user that is assuming the role to assert the circumstances in which they are operating. It also provides a way for the account owner to permit the role to be assumed only under specific circumstances.
     */
    externalId: SafeString;
    /**
     * The supported Amazon Web Services services from which logs and events are collected. Amazon Security Lake supports logs and events collection for natively-supported Amazon Web Services services.
     */
    sourceTypes: SourceTypeList;
    /**
     * The subscriber descriptions for the subscriber account in Amazon Security Lake. 
     */
    subscriberDescription?: SafeString;
    /**
     * The name of your Amazon Security Lake subscriber account.
     */
    subscriberName: CreateSubscriberRequestSubscriberNameString;
  }
  export type CreateSubscriberRequestSubscriberNameString = string;
  export interface CreateSubscriberResponse {
    /**
     * The Amazon Resource Name (ARN) created by the user to provide to the subscriber. For more information about ARNs and how to use them in policies, see IAM identifiers in the IAM User Guide.
     */
    roleArn?: RoleArn;
    /**
     * The Amazon Resource Name (ARN) for the Amazon S3 bucket. 
     */
    s3BucketArn?: S3BucketArn;
    /**
     * The Amazon Resource Name (ARN) for the Amazon Simple Notification Service.
     */
    snsArn?: SnsTopicArn;
    /**
     * The subscriptionId that was created by the CreateSubscriber API call.
     */
    subscriptionId: UUID;
  }
  export interface CreateSubscriptionNotificationConfigurationRequest {
    /**
     * Create a new subscription notification for the specified subscription ID in Security Lake.
     */
    createSqs?: Boolean;
    /**
     * The key name for the subscription notification.
     */
    httpsApiKeyName?: String;
    /**
     * The key value for the subscription notification.
     */
    httpsApiKeyValue?: String;
    /**
     * The HTTPS method used for the subscription notification. 
     */
    httpsMethod?: HttpsMethod;
    /**
     * The Amazon Resource Name (ARN) specifying the role of the subscriber.
     */
    roleArn?: RoleArn;
    /**
     * The subscription endpoint in Security Lake.
     */
    subscriptionEndpoint?: CreateSubscriptionNotificationConfigurationRequestSubscriptionEndpointString;
    /**
     * The subscription ID for which the subscription notification is specified. 
     */
    subscriptionId: UUID;
  }
  export type CreateSubscriptionNotificationConfigurationRequestSubscriptionEndpointString = string;
  export interface CreateSubscriptionNotificationConfigurationResponse {
    /**
     * Returns the Amazon resource name (ARN) of the queue.
     */
    queueArn?: SafeString;
  }
  export type CustomSourceType = string;
  export interface DeleteAwsLogSourceRequest {
    /**
     * Removes the specific Amazon Web Services sources from all Regions and source types.
     */
    disableAllDimensions?: AllDimensionsMap;
    /**
     * Removes all Amazon Web Services sources from specific accounts or Regions.
     */
    disableSingleDimension?: InputSet;
    /**
     * Remove a specific Amazon Web Services source from specific accounts or Regions.
     */
    disableTwoDimensions?: TwoDimensionsMap;
    /**
     * This is a mandatory input. Specifies the input order to disable dimensions in Security Lake, namely Region, source type, and member. 
     */
    inputOrder: DimensionSet;
  }
  export interface DeleteAwsLogSourceResponse {
    /**
     * Deletion of the Amazon Web Services sources failed as the account is not a part of the organization.
     */
    failed?: AccountList;
    /**
     * Deletion of the Amazon Web Services sources is in-progress.
     */
    processing?: AccountList;
  }
  export interface DeleteCustomLogSourceRequest {
    /**
     * The custom source name for the custome log source.
     */
    customSourceName: String;
  }
  export interface DeleteCustomLogSourceResponse {
    /**
     * The location of the partition in the Security Lake S3 bucket.
     */
    customDataLocation: String;
  }
  export interface DeleteDatalakeAutoEnableRequest {
    /**
     * Delete Amazon Security Lake with the specified configurations settings to stop ingesting security data for new accounts in Security Lake. 
     */
    removeFromConfigurationForNewAccounts: AutoEnableNewRegionConfigurationList;
  }
  export interface DeleteDatalakeAutoEnableResponse {
  }
  export interface DeleteDatalakeDelegatedAdminRequest {
    /**
     * Account ID the Security Lake delegated administrator.
     */
    account: SafeString;
  }
  export interface DeleteDatalakeDelegatedAdminResponse {
  }
  export interface DeleteDatalakeExceptionsSubscriptionRequest {
  }
  export interface DeleteDatalakeExceptionsSubscriptionResponse {
    /**
     * Retrieves the status of the delete Security Lake operation for an account. 
     */
    status: SafeString;
  }
  export interface DeleteDatalakeRequest {
  }
  export interface DeleteDatalakeResponse {
  }
  export interface DeleteSubscriberRequest {
    /**
     * A value created by Security Lake that uniquely identifies your DeleteSubscriber API request. 
     */
    id: String;
  }
  export interface DeleteSubscriberResponse {
  }
  export interface DeleteSubscriptionNotificationConfigurationRequest {
    /**
     * The subscription ID of the Amazon Security Lake subscriber account.
     */
    subscriptionId: UUID;
  }
  export interface DeleteSubscriptionNotificationConfigurationResponse {
  }
  export type Dimension = "REGION"|"SOURCE_TYPE"|"MEMBER"|string;
  export type DimensionSet = Dimension[];
  export type EndpointProtocol = "HTTPS"|"SQS"|string;
  export interface Failures {
    /**
     * List of all exception messages.
     */
    exceptionMessage: SafeString;
    /**
     * List of all remediation steps for failures.
     */
    remediation: SafeString;
    /**
     * This error can occur if you configure the wrong timestamp format, or if the subset of entries used for validation had errors or missing values.
     */
    timestamp: SyntheticTimestamp_date_time;
  }
  export interface FailuresResponse {
    /**
     * List of all failures. 
     */
    failures?: Failureslist;
    /**
     * List of Regions where the failure occurred. 
     */
    region?: SafeString;
  }
  export type FailuresResponseList = FailuresResponse[];
  export type Failureslist = Failures[];
  export interface GetDatalakeAutoEnableRequest {
  }
  export interface GetDatalakeAutoEnableResponse {
    /**
     * The configuration for new accounts.
     */
    autoEnableNewAccounts: AutoEnableNewRegionConfigurationList;
  }
  export interface GetDatalakeExceptionsExpiryRequest {
  }
  export interface GetDatalakeExceptionsExpiryResponse {
    /**
     * The expiration period and time-to-live (TTL).
     */
    exceptionMessageExpiry: Long;
  }
  export interface GetDatalakeExceptionsSubscriptionRequest {
  }
  export interface GetDatalakeExceptionsSubscriptionResponse {
    /**
     * Retrieves the exception notification subscription information.
     */
    protocolAndNotificationEndpoint: ProtocolAndNotificationEndpoint;
  }
  export interface GetDatalakeRequest {
  }
  export interface GetDatalakeResponse {
    /**
     * Retrieves the Security Lake configuration object. 
     */
    configurations: LakeConfigurationResponseMap;
  }
  export interface GetDatalakeStatusRequest {
    /**
     * The account IDs for which a static snapshot of the current Region, including enabled accounts and log sources is retrieved.
     */
    accountSet?: InputSet;
    /**
     * The maximum limit of accounts for which the static snapshot of the current Region including enabled accounts and log sources is retrieved.
     */
    maxAccountResults?: Integer;
    /**
     * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: SafeString;
  }
  export interface GetDatalakeStatusResponse {
    /**
     * The list of enabled accounts and enabled sources.
     */
    accountSourcesList: AccountSourcesList;
    /**
     * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: SafeString;
  }
  export interface GetSubscriberRequest {
    /**
     * A value created by Security Lake that uniquely identifies your GetSubscriber API request.
     */
    id: String;
  }
  export interface GetSubscriberResponse {
    /**
     * Subscription information for the specified subscription ID
     */
    subscriber?: SubscriberResource;
  }
  export type HttpsMethod = "POST"|"PUT"|string;
  export type InputSet = SafeString[];
  export type Integer = number;
  export interface LakeConfigurationRequest {
    /**
     * The type of encryption key used by Security Lake to encrypt the lake configuration object.
     */
    encryptionKey?: String;
    /**
     * Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. Amazon S3 buckets that are configured for object replication can be owned by the same Amazon Web Services account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different Amazon Web Services Regions or within the same Region as the source bucket. Set up one or more rollup Regions by providing the Region or Regions that should contribute to the central rollup Region. 
     */
    replicationDestinationRegions?: RegionSet;
    /**
     * Replication settings for the Amazon S3 buckets. This parameter uses the IAM role created by you that is managed by Security Lake, to ensure the replication setting is correct. 
     */
    replicationRoleArn?: RoleArn;
    /**
     * Retention settings for the destination Amazon S3 buckets. 
     */
    retentionSettings?: RetentionSettingList;
    /**
     * A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define.
     */
    tagsMap?: TagsMap;
  }
  export type LakeConfigurationRequestMap = {[key: string]: LakeConfigurationRequest};
  export interface LakeConfigurationResponse {
    /**
     * The type of encryption key used by Security Lake to encrypt the lake configuration
     */
    encryptionKey?: String;
    /**
     * Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. Amazon S3 buckets that are configured for object replication can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different Amazon Web Services Regions or within the same Region as the source bucket. Set up one or more rollup Regions by providing the Region or Regions that should contribute to the central rollup Region. 
     */
    replicationDestinationRegions?: RegionSet;
    /**
     * Replication settings for the Amazon S3 buckets. This parameter uses the IAM role created by you that is managed by Security Lake, to ensure the replication setting is correct. 
     */
    replicationRoleArn?: RoleArn;
    /**
     * Retention settings for the destination Amazon S3 buckets. 
     */
    retentionSettings?: RetentionSettingList;
    /**
     * Amazon Resource Names (ARNs) uniquely identify Amazon Web Services resources. Security Lake requires an ARN when you need to specify a resource unambiguously across all of Amazon Web Services, such as in IAM policies, Amazon Relational Database Service (Amazon RDS) tags, and API calls. 
     */
    s3BucketArn?: S3BucketArn;
    /**
     * Retrieves the status of the configuration operation for an account in Amazon Security Lake. 
     */
    status?: settingsStatus;
    /**
     * A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define.
     */
    tagsMap?: TagsMap;
  }
  export type LakeConfigurationResponseMap = {[key: string]: LakeConfigurationResponse};
  export interface ListDatalakeExceptionsRequest {
    /**
     * List the maximum number of failures in Security Lake.
     */
    maxFailures?: Integer;
    /**
     * List if there are more results available. if nextToken is returned, You can make the call again using the returned token to retrieve the next page
     */
    nextToken?: SafeString;
    /**
     * List the regions from which exceptions are retrieved.
     */
    regionSet?: RegionSet;
  }
  export interface ListDatalakeExceptionsResponse {
    /**
     * List if there are more results available. if nextToken is returned, You can make the call again using the returned token to retrieve the next page
     */
    nextToken?: SafeString;
    /**
     * Lists the non-retryable failures in the current region.
     */
    nonRetryableFailures: FailuresResponseList;
  }
  export interface ListLogSourcesRequest {
    /**
     * Lists the log sources in input order, namely Region, source type, and member account.
     */
    inputOrder?: DimensionSet;
    /**
     * List the view of log sources for enabled Security Lake accounts in all Regions and source types.
     */
    listAllDimensions?: AllDimensionsMap;
    /**
     * List the view of log sources for enabled Security Lake accounts for the entire region.
     */
    listSingleDimension?: InputSet;
    /**
     * Lists the log sources for the specified source types in enabled Security Lake accounts for the entire Region, for selected member accounts.
     */
    listTwoDimensions?: TwoDimensionsMap;
    /**
     * The maximum number of accounts for which the configuration is displayed.
     */
    maxResults?: Integer;
    /**
     * If nextToken is returned, there are more results available. You can make the call again using the returned token to retrieve the next page.
     */
    nextToken?: SafeString;
  }
  export interface ListLogSourcesResponse {
    /**
     * If nextToken is returned, there are more results available. You can make the call again using the returned token to retrieve the next page.
     */
    nextToken?: String;
    /**
     * Lists the log sources in the Regions for enabled Security Lake accounts.
     */
    regionSourceTypesAccountsList: RegionSourceTypesAccountsList;
  }
  export interface ListSubscribersRequest {
    /**
     * The maximum number of accounts for which the configuration is displayed.
     */
    maxResults?: Integer;
    /**
     * If nextToken is returned, there are more results available. You can make the call again using the returned token to retrieve the next page.
     */
    nextToken?: SafeString;
  }
  export interface ListSubscribersResponse {
    /**
     * If nextToken is returned, there are more results available. You can make the call again using the returned token to retrieve the next page.
     */
    nextToken?: SafeString;
    /**
     * The subscribers available in the specified Security Lake account ID.
     */
    subscribers: SubscriberList;
  }
  export interface LogsStatus {
    /**
     * Health status of services including error codes and patterns.
     */
    healthStatus: SourceStatus;
    /**
     * Defines path the stored logs are available which has information on your systems, applications, and services. 
     */
    pathToLogs: String;
  }
  export type LogsStatusList = LogsStatus[];
  export type Long = number;
  export type OcsfEventClass = "ACCESS_ACTIVITY"|"FILE_ACTIVITY"|"KERNEL_ACTIVITY"|"KERNEL_EXTENSION"|"MEMORY_ACTIVITY"|"MODULE_ACTIVITY"|"PROCESS_ACTIVITY"|"REGISTRY_KEY_ACTIVITY"|"REGISTRY_VALUE_ACTIVITY"|"RESOURCE_ACTIVITY"|"SCHEDULED_JOB_ACTIVITY"|"SECURITY_FINDING"|"ACCOUNT_CHANGE"|"AUTHENTICATION"|"AUTHORIZATION"|"ENTITY_MANAGEMENT_AUDIT"|"DHCP_ACTIVITY"|"NETWORK_ACTIVITY"|"DNS_ACTIVITY"|"FTP_ACTIVITY"|"HTTP_ACTIVITY"|"RDP_ACTIVITY"|"SMB_ACTIVITY"|"SSH_ACTIVITY"|"CLOUD_API"|"CONTAINER_LIFECYCLE"|"DATABASE_LIFECYCLE"|"CONFIG_STATE"|"CLOUD_STORAGE"|"INVENTORY_INFO"|"RFB_ACTIVITY"|"SMTP_ACTIVITY"|"VIRTUAL_MACHINE_ACTIVITY"|string;
  export interface ProtocolAndNotificationEndpoint {
    /**
     * The account which is subscribed to receive exception notifications. 
     */
    endpoint?: SafeString;
    /**
     * The protocol to which notification messages are posted. 
     */
    protocol?: SafeString;
  }
  export type Region = "us-east-1"|"us-west-2"|"eu-central-1"|"us-east-2"|"eu-west-1"|"ap-northeast-1"|"ap-southeast-2"|string;
  export type RegionSet = Region[];
  export type RegionSourceTypesAccountsList = AllDimensionsMap[];
  export interface RetentionSetting {
    /**
     * The retention period specifies a fixed period of time during which the Security Lake object remains locked. You can specify the retention period for one or more source in days. 
     */
    retentionPeriod?: RetentionSettingRetentionPeriodInteger;
    /**
     * The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.
     */
    storageClass?: StorageClass;
  }
  export type RetentionSettingList = RetentionSetting[];
  export type RetentionSettingRetentionPeriodInteger = number;
  export type RoleArn = string;
  export type S3BucketArn = string;
  export type SafeString = string;
  export type SnsTopicArn = string;
  export type SourceStatus = "ACTIVE"|"DEACTIVATED"|"PENDING"|string;
  export interface SourceType {
    /**
     * Amazon Security Lake supports logs and events collection for natively-supported Amazon Web Services services. For more information, see the Amazon Security Lake User Guide.
     */
    awsSourceType?: AwsLogSourceType;
    /**
     * Amazon Security Lake supports custom source types. For the detailed list, see the Amazon Security Lake User Guide.
     */
    customSourceType?: CustomSourceType;
  }
  export type SourceTypeList = SourceType[];
  export type StorageClass = "STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"GLACIER_IR"|"GLACIER"|"DEEP_ARCHIVE"|"EXPIRE"|string;
  export type String = string;
  export type SubscriberList = SubscriberResource[];
  export interface SubscriberResource {
    /**
     * You can choose to notify subscribers of new objects with an Amazon Simple Queue Service (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the subscriber.   Subscribers can consume data by directly querying Lake Formation tables in your S3 bucket via services like Amazon Athena. This subscription type is defined as LAKEFORMATION. 
     */
    accessTypes?: AccessTypeList;
    /**
     * The Amazon Web Services account ID of the account that you are using to create your Amazon Security Lake account.
     */
    accountId: AwsAccountId;
    /**
     * The date and time when the subscription was created. 
     */
    createdAt?: SyntheticTimestamp_date_time;
    /**
     * The external ID of the subscriber. External ID allows the user that is assuming the role to assert the circumstances in which they are operating. It also provides a way for the account owner to permit the role to be assumed only under specific circumstances.
     */
    externalId?: SafeString;
    /**
     * The Amazon Resource Name (ARN) specifying the role of the subscriber.
     */
    roleArn?: RoleArn;
    /**
     * The Amazon Resource Name (ARN) for the Amazon S3 bucket. 
     */
    s3BucketArn?: S3BucketArn;
    /**
     * The Amazon Resource Name (ARN) for the Amazon Simple Notification Service.
     */
    snsArn?: SnsTopicArn;
    /**
     * Amazon Security Lake supports logs and events collection for the natively-supported Amazon Web Services services. For more information, see the Amazon Security Lake User Guide.
     */
    sourceTypes: SourceTypeList;
    /**
     * The subscriber descriptions for a subscriber account. The description for a subscriber includes subscriberName, accountID, externalID, and subscriptionId.
     */
    subscriberDescription?: SafeString;
    /**
     * The name of your Amazon Security Lake subscriber account.
     */
    subscriberName?: SafeString;
    /**
     * The subscription endpoint to which exception messages are posted. 
     */
    subscriptionEndpoint?: String;
    /**
     * The subscription ID of the Amazon Security Lake subscriber account.
     */
    subscriptionId: UUID;
    /**
     * The subscription protocol to which exception messages are posted. 
     */
    subscriptionProtocol?: EndpointProtocol;
    /**
     * Subscription status of the Amazon Security Lake subscriber account.
     */
    subscriptionStatus?: SubscriptionStatus;
    /**
     * The date and time when the subscription was created. 
     */
    updatedAt?: SyntheticTimestamp_date_time;
  }
  export type SubscriptionProtocolType = "HTTP"|"HTTPS"|"EMAIL"|"EMAIL_JSON"|"SMS"|"SQS"|"LAMBDA"|"APP"|"FIREHOSE"|string;
  export type SubscriptionStatus = "ACTIVE"|"DEACTIVATED"|"PENDING"|"READY"|string;
  export type SyntheticTimestamp_date_time = Date;
  export type TagsMap = {[key: string]: String};
  export type TwoDimensionsMap = {[key: string]: ValueSet};
  export type UUID = string;
  export interface UpdateDatalakeExceptionsExpiryRequest {
    /**
     * The time-to-live (TTL) for the exception message to remain.
     */
    exceptionMessageExpiry: UpdateDatalakeExceptionsExpiryRequestExceptionMessageExpiryLong;
  }
  export type UpdateDatalakeExceptionsExpiryRequestExceptionMessageExpiryLong = number;
  export interface UpdateDatalakeExceptionsExpiryResponse {
  }
  export interface UpdateDatalakeExceptionsSubscriptionRequest {
    /**
     * The account which is subscribed to receive exception notifications.
     */
    notificationEndpoint: SafeString;
    /**
     * The subscription protocol to which exception messages are posted. 
     */
    subscriptionProtocol: SubscriptionProtocolType;
  }
  export interface UpdateDatalakeExceptionsSubscriptionResponse {
  }
  export interface UpdateDatalakeRequest {
    /**
     * The configuration object
     */
    configurations: LakeConfigurationRequestMap;
  }
  export interface UpdateDatalakeResponse {
  }
  export interface UpdateSubscriberRequest {
    /**
     * External ID of the Security Lake account.
     */
    externalId?: SafeString;
    /**
     * A value created by Security Lake that uniquely identifies your UpdateSubscriber API request. 
     */
    id: String;
    /**
     * The supported Amazon Web Services services from which logs and events are collected. Amazon Security Lake supports logs and events collection for the following natively-supported Amazon Web Services services. For more information, see the Amazon Security Lake User Guide.
     */
    sourceTypes?: SourceTypeList;
    /**
     * Description of the Security Lake account subscriber.
     */
    subscriberDescription?: SafeString;
    /**
     * Name of the Security Lake account subscriber. 
     */
    subscriberName?: UpdateSubscriberRequestSubscriberNameString;
  }
  export type UpdateSubscriberRequestSubscriberNameString = string;
  export interface UpdateSubscriberResponse {
    /**
     * The account subscriber in Amazon Security Lake.
     */
    subscriber?: SubscriberResource;
  }
  export interface UpdateSubscriptionNotificationConfigurationRequest {
    /**
     * Create a new subscription notification for the specified subscription ID in Security Lake.
     */
    createSqs?: Boolean;
    /**
     * The key name for the subscription notification.
     */
    httpsApiKeyName?: String;
    /**
     * The key value for the subscription notification.
     */
    httpsApiKeyValue?: String;
    /**
     * The HTTPS method used for the subscription notification. 
     */
    httpsMethod?: HttpsMethod;
    /**
     * The Amazon Resource Name (ARN) specifying the role of the subscriber. 
     */
    roleArn?: RoleArn;
    /**
     * The subscription endpoint in Security Lake.
     */
    subscriptionEndpoint?: UpdateSubscriptionNotificationConfigurationRequestSubscriptionEndpointString;
    /**
     * The subscription ID for which the subscription notification is specified. 
     */
    subscriptionId: UUID;
  }
  export type UpdateSubscriptionNotificationConfigurationRequestSubscriptionEndpointString = string;
  export interface UpdateSubscriptionNotificationConfigurationResponse {
    /**
     * Returns the Amazon resource name (ARN) of the queue.
     */
    queueArn?: SafeString;
  }
  export type ValueSet = String[];
  export type settingsStatus = "INITIALIZED"|"PENDING"|"COMPLETED"|"FAILED"|string;
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
   * Contains interfaces for use with the SecurityLake client.
   */
  export import Types = SecurityLake;
}
export = SecurityLake;
