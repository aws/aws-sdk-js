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
   * Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API.  By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service. You can use this API only to enable natively supported Amazon Web Services as a source. Use CreateCustomLogSource to enable data collection from a custom source. 
   */
  createAwsLogSource(params: SecurityLake.Types.CreateAwsLogSourceRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateAwsLogSourceResponse) => void): Request<SecurityLake.Types.CreateAwsLogSourceResponse, AWSError>;
  /**
   * Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API.  By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service. You can use this API only to enable natively supported Amazon Web Services as a source. Use CreateCustomLogSource to enable data collection from a custom source. 
   */
  createAwsLogSource(callback?: (err: AWSError, data: SecurityLake.Types.CreateAwsLogSourceResponse) => void): Request<SecurityLake.Types.CreateAwsLogSourceResponse, AWSError>;
  /**
   * Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.
   */
  createCustomLogSource(params: SecurityLake.Types.CreateCustomLogSourceRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateCustomLogSourceResponse) => void): Request<SecurityLake.Types.CreateCustomLogSourceResponse, AWSError>;
  /**
   * Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.
   */
  createCustomLogSource(callback?: (err: AWSError, data: SecurityLake.Types.CreateCustomLogSourceResponse) => void): Request<SecurityLake.Types.CreateCustomLogSourceResponse, AWSError>;
  /**
   * Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the enableAll parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the Regions parameter and then configure these Regions using the configurations parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations. When you enable Security Lake, it starts ingesting security data after the CreateAwsLogSource call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the Amazon Security Lake User Guide.
   */
  createDatalake(params: SecurityLake.Types.CreateDatalakeRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeResponse) => void): Request<SecurityLake.Types.CreateDatalakeResponse, AWSError>;
  /**
   * Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the enableAll parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the Regions parameter and then configure these Regions using the configurations parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations. When you enable Security Lake, it starts ingesting security data after the CreateAwsLogSource call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the Amazon Security Lake User Guide.
   */
  createDatalake(callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeResponse) => void): Request<SecurityLake.Types.CreateDatalakeResponse, AWSError>;
  /**
   * Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.
   */
  createDatalakeAutoEnable(params: SecurityLake.Types.CreateDatalakeAutoEnableRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.CreateDatalakeAutoEnableResponse, AWSError>;
  /**
   * Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.
   */
  createDatalakeAutoEnable(callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.CreateDatalakeAutoEnableResponse, AWSError>;
  /**
   * Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
   */
  createDatalakeDelegatedAdmin(params: SecurityLake.Types.CreateDatalakeDelegatedAdminRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeDelegatedAdminResponse) => void): Request<SecurityLake.Types.CreateDatalakeDelegatedAdminResponse, AWSError>;
  /**
   * Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
   */
  createDatalakeDelegatedAdmin(callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeDelegatedAdminResponse) => void): Request<SecurityLake.Types.CreateDatalakeDelegatedAdminResponse, AWSError>;
  /**
   * Creates the specified notification subscription in Amazon Security Lake for the organization you specify.
   */
  createDatalakeExceptionsSubscription(params: SecurityLake.Types.CreateDatalakeExceptionsSubscriptionRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.CreateDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Creates the specified notification subscription in Amazon Security Lake for the organization you specify.
   */
  createDatalakeExceptionsSubscription(callback?: (err: AWSError, data: SecurityLake.Types.CreateDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.CreateDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.
   */
  createSubscriber(params: SecurityLake.Types.CreateSubscriberRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateSubscriberResponse) => void): Request<SecurityLake.Types.CreateSubscriberResponse, AWSError>;
  /**
   * Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.
   */
  createSubscriber(callback?: (err: AWSError, data: SecurityLake.Types.CreateSubscriberResponse) => void): Request<SecurityLake.Types.CreateSubscriberResponse, AWSError>;
  /**
   * Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
   */
  createSubscriptionNotificationConfiguration(params: SecurityLake.Types.CreateSubscriptionNotificationConfigurationRequest, callback?: (err: AWSError, data: SecurityLake.Types.CreateSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.CreateSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
   */
  createSubscriptionNotificationConfiguration(callback?: (err: AWSError, data: SecurityLake.Types.CreateSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.CreateSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement. You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API.  By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.
   */
  deleteAwsLogSource(params: SecurityLake.Types.DeleteAwsLogSourceRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteAwsLogSourceResponse) => void): Request<SecurityLake.Types.DeleteAwsLogSourceResponse, AWSError>;
  /**
   * Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement. You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API.  By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.
   */
  deleteAwsLogSource(callback?: (err: AWSError, data: SecurityLake.Types.DeleteAwsLogSourceResponse) => void): Request<SecurityLake.Types.DeleteAwsLogSourceResponse, AWSError>;
  /**
   * Removes a custom log source from Amazon Security Lake.
   */
  deleteCustomLogSource(params: SecurityLake.Types.DeleteCustomLogSourceRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteCustomLogSourceResponse) => void): Request<SecurityLake.Types.DeleteCustomLogSourceResponse, AWSError>;
  /**
   * Removes a custom log source from Amazon Security Lake.
   */
  deleteCustomLogSource(callback?: (err: AWSError, data: SecurityLake.Types.DeleteCustomLogSourceResponse) => void): Request<SecurityLake.Types.DeleteCustomLogSourceResponse, AWSError>;
  /**
   * When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake .  This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The DeleteDatalake operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the Amazon Security Lake User Guide.
   */
  deleteDatalake(params: SecurityLake.Types.DeleteDatalakeRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeResponse) => void): Request<SecurityLake.Types.DeleteDatalakeResponse, AWSError>;
  /**
   * When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake .  This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The DeleteDatalake operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the Amazon Security Lake User Guide.
   */
  deleteDatalake(callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeResponse) => void): Request<SecurityLake.Types.DeleteDatalakeResponse, AWSError>;
  /**
   *  DeleteDatalakeAutoEnable removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.
   */
  deleteDatalakeAutoEnable(params: SecurityLake.Types.DeleteDatalakeAutoEnableRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.DeleteDatalakeAutoEnableResponse, AWSError>;
  /**
   *  DeleteDatalakeAutoEnable removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.
   */
  deleteDatalakeAutoEnable(callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.DeleteDatalakeAutoEnableResponse, AWSError>;
  /**
   * Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
   */
  deleteDatalakeDelegatedAdmin(params: SecurityLake.Types.DeleteDatalakeDelegatedAdminRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeDelegatedAdminResponse) => void): Request<SecurityLake.Types.DeleteDatalakeDelegatedAdminResponse, AWSError>;
  /**
   * Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
   */
  deleteDatalakeDelegatedAdmin(callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeDelegatedAdminResponse) => void): Request<SecurityLake.Types.DeleteDatalakeDelegatedAdminResponse, AWSError>;
  /**
   * Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
   */
  deleteDatalakeExceptionsSubscription(params: SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
   */
  deleteDatalakeExceptionsSubscription(callback?: (err: AWSError, data: SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.DeleteDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.
   */
  deleteSubscriber(params: SecurityLake.Types.DeleteSubscriberRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteSubscriberResponse) => void): Request<SecurityLake.Types.DeleteSubscriberResponse, AWSError>;
  /**
   * Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.
   */
  deleteSubscriber(callback?: (err: AWSError, data: SecurityLake.Types.DeleteSubscriberResponse) => void): Request<SecurityLake.Types.DeleteSubscriberResponse, AWSError>;
  /**
   * Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
   */
  deleteSubscriptionNotificationConfiguration(params: SecurityLake.Types.DeleteSubscriptionNotificationConfigurationRequest, callback?: (err: AWSError, data: SecurityLake.Types.DeleteSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.DeleteSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
   */
  deleteSubscriptionNotificationConfiguration(callback?: (err: AWSError, data: SecurityLake.Types.DeleteSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.DeleteSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the GetDatalake API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 
   */
  getDatalake(params: SecurityLake.Types.GetDatalakeRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeResponse) => void): Request<SecurityLake.Types.GetDatalakeResponse, AWSError>;
  /**
   * Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the GetDatalake API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 
   */
  getDatalake(callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeResponse) => void): Request<SecurityLake.Types.GetDatalakeResponse, AWSError>;
  /**
   * Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.
   */
  getDatalakeAutoEnable(params: SecurityLake.Types.GetDatalakeAutoEnableRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.GetDatalakeAutoEnableResponse, AWSError>;
  /**
   * Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.
   */
  getDatalakeAutoEnable(callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeAutoEnableResponse) => void): Request<SecurityLake.Types.GetDatalakeAutoEnableResponse, AWSError>;
  /**
   * Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.
   */
  getDatalakeExceptionsExpiry(params: SecurityLake.Types.GetDatalakeExceptionsExpiryRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeExceptionsExpiryResponse) => void): Request<SecurityLake.Types.GetDatalakeExceptionsExpiryResponse, AWSError>;
  /**
   * Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.
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
   * Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 
   */
  getDatalakeStatus(params: SecurityLake.Types.GetDatalakeStatusRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeStatusResponse) => void): Request<SecurityLake.Types.GetDatalakeStatusResponse, AWSError>;
  /**
   * Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 
   */
  getDatalakeStatus(callback?: (err: AWSError, data: SecurityLake.Types.GetDatalakeStatusResponse) => void): Request<SecurityLake.Types.GetDatalakeStatusResponse, AWSError>;
  /**
   * Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.
   */
  getSubscriber(params: SecurityLake.Types.GetSubscriberRequest, callback?: (err: AWSError, data: SecurityLake.Types.GetSubscriberResponse) => void): Request<SecurityLake.Types.GetSubscriberResponse, AWSError>;
  /**
   * Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.
   */
  getSubscriber(callback?: (err: AWSError, data: SecurityLake.Types.GetSubscriberResponse) => void): Request<SecurityLake.Types.GetSubscriberResponse, AWSError>;
  /**
   * Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
   */
  listDatalakeExceptions(params: SecurityLake.Types.ListDatalakeExceptionsRequest, callback?: (err: AWSError, data: SecurityLake.Types.ListDatalakeExceptionsResponse) => void): Request<SecurityLake.Types.ListDatalakeExceptionsResponse, AWSError>;
  /**
   * Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
   */
  listDatalakeExceptions(callback?: (err: AWSError, data: SecurityLake.Types.ListDatalakeExceptionsResponse) => void): Request<SecurityLake.Types.ListDatalakeExceptionsResponse, AWSError>;
  /**
   * Retrieves the log sources in the current Amazon Web Services Region. 
   */
  listLogSources(params: SecurityLake.Types.ListLogSourcesRequest, callback?: (err: AWSError, data: SecurityLake.Types.ListLogSourcesResponse) => void): Request<SecurityLake.Types.ListLogSourcesResponse, AWSError>;
  /**
   * Retrieves the log sources in the current Amazon Web Services Region. 
   */
  listLogSources(callback?: (err: AWSError, data: SecurityLake.Types.ListLogSourcesResponse) => void): Request<SecurityLake.Types.ListLogSourcesResponse, AWSError>;
  /**
   * List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.
   */
  listSubscribers(params: SecurityLake.Types.ListSubscribersRequest, callback?: (err: AWSError, data: SecurityLake.Types.ListSubscribersResponse) => void): Request<SecurityLake.Types.ListSubscribersResponse, AWSError>;
  /**
   * List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.
   */
  listSubscribers(callback?: (err: AWSError, data: SecurityLake.Types.ListSubscribersResponse) => void): Request<SecurityLake.Types.ListSubscribersResponse, AWSError>;
  /**
   * Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 
   */
  updateDatalake(params: SecurityLake.Types.UpdateDatalakeRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeResponse) => void): Request<SecurityLake.Types.UpdateDatalakeResponse, AWSError>;
  /**
   * Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 
   */
  updateDatalake(callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeResponse) => void): Request<SecurityLake.Types.UpdateDatalakeResponse, AWSError>;
  /**
   * Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 
   */
  updateDatalakeExceptionsExpiry(params: SecurityLake.Types.UpdateDatalakeExceptionsExpiryRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeExceptionsExpiryResponse) => void): Request<SecurityLake.Types.UpdateDatalakeExceptionsExpiryResponse, AWSError>;
  /**
   * Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 
   */
  updateDatalakeExceptionsExpiry(callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeExceptionsExpiryResponse) => void): Request<SecurityLake.Types.UpdateDatalakeExceptionsExpiryResponse, AWSError>;
  /**
   * Updates the specified notification subscription in Amazon Security Lake for the organization you specify.
   */
  updateDatalakeExceptionsSubscription(params: SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Updates the specified notification subscription in Amazon Security Lake for the organization you specify.
   */
  updateDatalakeExceptionsSubscription(callback?: (err: AWSError, data: SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionResponse) => void): Request<SecurityLake.Types.UpdateDatalakeExceptionsSubscriptionResponse, AWSError>;
  /**
   * Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 
   */
  updateSubscriber(params: SecurityLake.Types.UpdateSubscriberRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateSubscriberResponse) => void): Request<SecurityLake.Types.UpdateSubscriberResponse, AWSError>;
  /**
   * Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 
   */
  updateSubscriber(callback?: (err: AWSError, data: SecurityLake.Types.UpdateSubscriberResponse) => void): Request<SecurityLake.Types.UpdateSubscriberResponse, AWSError>;
  /**
   * Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.
   */
  updateSubscriptionNotificationConfiguration(params: SecurityLake.Types.UpdateSubscriptionNotificationConfigurationRequest, callback?: (err: AWSError, data: SecurityLake.Types.UpdateSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.UpdateSubscriptionNotificationConfigurationResponse, AWSError>;
  /**
   * Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.
   */
  updateSubscriptionNotificationConfiguration(callback?: (err: AWSError, data: SecurityLake.Types.UpdateSubscriptionNotificationConfigurationResponse) => void): Request<SecurityLake.Types.UpdateSubscriptionNotificationConfigurationResponse, AWSError>;
}
declare namespace SecurityLake {
  export type AccessType = "LAKEFORMATION"|"S3"|string;
  export type AccessTypeList = AccessType[];
  export type AccountList = String[];
  export interface AccountSources {
    /**
     * The ID of the Security Lake account for which logs are collected.
     */
    account: String;
    /**
     * Initializes a new instance of the Event class.
     */
    eventClass?: OcsfEventClass;
    /**
     * The log status for the Security Lake account.
     */
    logsStatus?: LogsStatusList;
    /**
     * The supported Amazon Web Services from which logs and events are collected. Amazon Security Lake supports log and event collection for natively supported Amazon Web Services. 
     */
    sourceType: String;
  }
  export type AccountSourcesList = AccountSources[];
  export type AllDimensionsMap = {[key: string]: TwoDimensionsMap};
  export interface AutoEnableNewRegionConfiguration {
    /**
     * The Amazon Web Services Regions where Security Lake is automatically enabled.
     */
    region: Region;
    /**
     * The Amazon Web Services sources that are automatically enabled in Security Lake.
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
     * Enables data collection from specific Amazon Web Services sources in all specific accounts and specific Regions.
     */
    enableAllDimensions?: AllDimensionsMap;
    /**
     * Enables data collection from all Amazon Web Services sources in specific accounts or Regions.
     */
    enableSingleDimension?: InputSet;
    /**
     * Enables data collection from specific Amazon Web Services sources in specific accounts or Regions.
     */
    enableTwoDimensions?: TwoDimensionsMap;
    /**
     * Specifies the input order to enable dimensions in Security Lake, namely Region, source type, and member account.
     */
    inputOrder: DimensionSet;
  }
  export interface CreateAwsLogSourceResponse {
    /**
     * Lists all accounts in which enabling a natively supported Amazon Web Service as a Security Lake source failed. The failure occurred as these accounts are not part of an organization.
     */
    failed?: AccountList;
    /**
     * Lists the accounts that are in the process of enabling a natively supported Amazon Web Service as a Security Lake source.
     */
    processing?: AccountList;
  }
  export interface CreateCustomLogSourceRequest {
    /**
     * The name for a third-party custom source. This must be a Regionally unique value.
     */
    customSourceName: CustomSourceType;
    /**
     * The Open Cybersecurity Schema Framework (OCSF) event class which describes the type of data that the custom source will send to Security Lake.
     */
    eventClass: OcsfEventClass;
    /**
     * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be used by the Glue crawler. The recommended IAM policies are:   The managed policy AWSGlueServiceRole    A custom policy granting access to your Amazon S3 Data Lake  
     */
    glueInvocationRoleArn: RoleArn;
    /**
     * The Amazon Web Services account ID of the custom source that will write logs and events into the Amazon S3 Data Lake.
     */
    logProviderAccountId: AwsAccountId;
  }
  export interface CreateCustomLogSourceResponse {
    /**
     * The location of the partition in the Amazon S3 bucket for Security Lake.
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
     * The ARN of the IAM role to be used by the entity putting logs into your custom source partition. Security Lake will apply the correct access policies to this role, but you must first manually create the trust policy for this role. The IAM role name must start with the text 'Security Lake'. The IAM role must trust the logProviderAccountId to assume the role.
     */
    logProviderAccessRoleArn: String;
  }
  export interface CreateDatalakeAutoEnableRequest {
    /**
     * Enable Security Lake with the specified configuration settings to begin collecting security data for new accounts in your organization. 
     */
    configurationForNewAccounts: AutoEnableNewRegionConfigurationList;
  }
  export interface CreateDatalakeAutoEnableResponse {
  }
  export interface CreateDatalakeDelegatedAdminRequest {
    /**
     * The Amazon Web Services account ID of the Security Lake delegated administrator.
     */
    account: SafeString;
  }
  export interface CreateDatalakeDelegatedAdminResponse {
  }
  export interface CreateDatalakeExceptionsSubscriptionRequest {
    /**
     * The Amazon Web Services account where you want to receive exception notifications.
     */
    notificationEndpoint: SafeString;
    /**
     * The subscription protocol to which exception notifications are posted. 
     */
    subscriptionProtocol: SubscriptionProtocolType;
  }
  export interface CreateDatalakeExceptionsSubscriptionResponse {
  }
  export interface CreateDatalakeRequest {
    /**
     * Specify the Region or Regions that will contribute data to the rollup region.
     */
    configurations?: LakeConfigurationRequestMap;
    /**
     * Enable Security Lake in all Regions.
     */
    enableAll?: Boolean;
    /**
     * The Amazon Resource Name (ARN) used to create and update the Glue table. This table contains partitions generated by the ingestion and normalization of Amazon Web Services log sources and custom sources.
     */
    metaStoreManagerRoleArn?: RoleArn;
    /**
     * Enable Security Lake in the specified Regions. To enable Security Lake in specific Amazon Web Services Regions, such as us-east-1 or ap-northeast-3, provide the Region codes. For a list of Region codes, see Amazon Security Lake endpoints in the Amazon Web Services General Reference.
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
     * The Amazon Web Services account ID used to access your data.
     */
    accountId: AwsAccountId;
    /**
     * The external ID of the subscriber. This lets the user that is assuming the role assert the circumstances in which they are operating. It also provides a way for the account owner to permit the role to be assumed only under specific circumstances.
     */
    externalId: SafeString;
    /**
     * The supported Amazon Web Services from which logs and events are collected. Security Lake supports log and event collection for natively supported Amazon Web Services.
     */
    sourceTypes: SourceTypeList;
    /**
     * The description for your subscriber account in Security Lake. 
     */
    subscriberDescription?: DescriptionString;
    /**
     * The name of your Security Lake subscriber account.
     */
    subscriberName: CreateSubscriberRequestSubscriberNameString;
  }
  export type CreateSubscriberRequestSubscriberNameString = string;
  export interface CreateSubscriberResponse {
    /**
     * The Amazon Resource Name (ARN) which uniquely defines the AWS RAM resource share. Before accepting the RAM resource share invitation, you can view details related to the RAM resource share.
     */
    resourceShareArn?: ResourceShareArn;
    /**
     * The name of the resource share.
     */
    resourceShareName?: ResourceShareName;
    /**
     * The Amazon Resource Name (ARN) created by you to provide to the subscriber. For more information about ARNs and how to use them in policies, see Amazon Security Lake User Guide.
     */
    roleArn?: RoleArn;
    /**
     * The ARN for the Amazon S3 bucket. 
     */
    s3BucketArn?: S3BucketArn;
    /**
     * The ARN for the Amazon Simple Notification Service.
     */
    snsArn?: SnsTopicArn;
    /**
     * The subscriptionId created by the CreateSubscriber API call.
     */
    subscriptionId: UUID;
  }
  export interface CreateSubscriptionNotificationConfigurationRequest {
    /**
     * Create an Amazon Simple Queue Service queue.
     */
    createSqs?: Boolean;
    /**
     * The key name for the notification subscription.
     */
    httpsApiKeyName?: String;
    /**
     * The key value for the notification subscription.
     */
    httpsApiKeyValue?: String;
    /**
     * The HTTPS method used for the notification subscription. 
     */
    httpsMethod?: HttpsMethod;
    /**
     * The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created. For more information about ARNs and how to use them in policies, see Managing data access and Amazon Web Services Managed Policies in the Amazon Security Lake User Guide.
     */
    roleArn?: RoleArn;
    /**
     * The subscription endpoint in Security Lake. If you prefer notification with an HTTPs endpoint, populate this field.
     */
    subscriptionEndpoint?: CreateSubscriptionNotificationConfigurationRequestSubscriptionEndpointString;
    /**
     * The subscription ID for the notification subscription.
     */
    subscriptionId: UUID;
  }
  export type CreateSubscriptionNotificationConfigurationRequestSubscriptionEndpointString = string;
  export interface CreateSubscriptionNotificationConfigurationResponse {
    /**
     * Returns the Amazon Resource Name (ARN) of the queue.
     */
    queueArn?: SafeString;
  }
  export type CustomSourceType = string;
  export interface DeleteAwsLogSourceRequest {
    /**
     * Removes the specific Amazon Web Services sources from specific accounts and specific Regions.
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
     * This is a mandatory input. Specify the input order to disable dimensions in Security Lake, namely Region (Amazon Web Services Region code, source type, and member (account ID of a specific Amazon Web Services account). 
     */
    inputOrder: DimensionSet;
  }
  export interface DeleteAwsLogSourceResponse {
    /**
     * Deletion of the Amazon Web Services sources failed as the account is not a part of the organization.
     */
    failed?: AccountList;
    /**
     * Deletion of the Amazon Web Services sources is in progress.
     */
    processing?: AccountList;
  }
  export interface DeleteCustomLogSourceRequest {
    /**
     * The custom source name for the custom log source.
     */
    customSourceName: String;
  }
  export interface DeleteCustomLogSourceResponse {
    /**
     * The location of the partition in the Amazon S3 bucket for Security Lake.
     */
    customDataLocation: String;
  }
  export interface DeleteDatalakeAutoEnableRequest {
    /**
     * Remove automatic enablement of configuration settings for new member accounts in Security Lake. 
     */
    removeFromConfigurationForNewAccounts: AutoEnableNewRegionConfigurationList;
  }
  export interface DeleteDatalakeAutoEnableResponse {
  }
  export interface DeleteDatalakeDelegatedAdminRequest {
    /**
     * The account ID the Security Lake delegated administrator.
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
     * The ID of the Security Lake subscriber account.
     */
    subscriptionId: UUID;
  }
  export interface DeleteSubscriptionNotificationConfigurationResponse {
  }
  export type DescriptionString = string;
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
     * List of Amazon Web Services Regions where the failure occurred. 
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
     * The Amazon Web Services account ID for which a static snapshot of the current Amazon Web Services Region, including enabled accounts and log sources, is retrieved.
     */
    accountSet?: InputSet;
    /**
     * The maximum limit of accounts for which the static snapshot of the current Region, including enabled accounts and log sources, is retrieved.
     */
    maxAccountResults?: Integer;
    /**
     * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.  Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: SafeString;
  }
  export interface GetDatalakeStatusResponse {
    /**
     * The list of enabled accounts and enabled sources.
     */
    accountSourcesList: AccountSourcesList;
    /**
     * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.  Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: SafeString;
  }
  export interface GetSubscriberRequest {
    /**
     * A value created by Amazon Security Lake that uniquely identifies your GetSubscriber API request.
     */
    id: String;
  }
  export interface GetSubscriberResponse {
    /**
     * The subscription information for the specified subscription ID.
     */
    subscriber?: SubscriberResource;
  }
  export type HttpsMethod = "POST"|"PUT"|string;
  export type InputSet = SafeString[];
  export type Integer = number;
  export interface LakeConfigurationRequest {
    /**
     * The type of encryption key used by Amazon Security Lake to encrypt the Security Lake configuration object.
     */
    encryptionKey?: String;
    /**
     * Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. Amazon S3 buckets that are configured for object replication can be owned by the same Amazon Web Services account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different Amazon Web Services Regions or within the same Region as the source bucket. Set up one or more rollup Regions by providing the Region or Regions that should contribute to the central rollup Region. 
     */
    replicationDestinationRegions?: RegionSet;
    /**
     * Replication settings for the Amazon S3 buckets. This parameter uses the Identity and Access Management (IAM) role you created that is managed by Security Lake, to ensure the replication setting is correct. 
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
     * The type of encryption key used by secure the Security Lake configuration object.
     */
    encryptionKey?: String;
    /**
     * Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. Amazon S3 buckets that are configured for object replication can be owned by the same Amazon Web Services account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different Amazon Web Services Regions or within the same Region as the source bucket. Set up one or more rollup Regions by providing the Region or Regions that should contribute to the central rollup Region. 
     */
    replicationDestinationRegions?: RegionSet;
    /**
     * Replication settings for the Amazon S3 buckets. This parameter uses the IAM role you created that is managed by Security Lake, to ensure the replication setting is correct. 
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
    /**
     * The status of the last UpdateDatalake or DeleteDatalake API request. 
     */
    updateStatus?: UpdateStatus;
  }
  export type LakeConfigurationResponseMap = {[key: string]: LakeConfigurationResponse};
  export interface LastUpdateFailure {
    /**
     * The reason code for the failure of the last UpdateDatalake or DeleteDatalake API request.
     */
    code?: String;
    /**
     * The reason for the failure of the last UpdateDatalakeor DeleteDatalake API request.
     */
    reason?: String;
  }
  export interface ListDatalakeExceptionsRequest {
    /**
     * List the maximum number of failures in Security Lake.
     */
    maxFailures?: Integer;
    /**
     * List if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.  Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: SafeString;
    /**
     * List the Amazon Web Services Regions from which exceptions are retrieved.
     */
    regionSet?: RegionSet;
  }
  export interface ListDatalakeExceptionsResponse {
    /**
     * List if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.  Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
     */
    nextToken?: SafeString;
    /**
     * Lists the failures that cannot be retried in the current Region.
     */
    nonRetryableFailures: FailuresResponseList;
  }
  export interface ListLogSourcesRequest {
    /**
     * Lists the log sources in input order, namely Region, source type, and member account.
     */
    inputOrder?: DimensionSet;
    /**
     * List the view of log sources for enabled Amazon Security Lake accounts for specific Amazon Web Services sources from specific accounts and specific Regions.
     */
    listAllDimensions?: AllDimensionsMap;
    /**
     * List the view of log sources for enabled Security Lake accounts for all Amazon Web Services sources from specific accounts or specific Regions.
     */
    listSingleDimension?: InputSet;
    /**
     * Lists the view of log sources for enabled Security Lake accounts for specific Amazon Web Services sources from specific accounts or specific Regions.
     */
    listTwoDimensions?: TwoDimensionsMap;
    /**
     * The maximum number of accounts for which the log sources are displayed.
     */
    maxResults?: Integer;
    /**
     * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
     */
    nextToken?: SafeString;
  }
  export interface ListLogSourcesResponse {
    /**
     * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
     */
    nextToken?: String;
    /**
     * Lists the log sources by Regions for enabled Security Lake accounts.
     */
    regionSourceTypesAccountsList: RegionSourceTypesAccountsList;
  }
  export interface ListSubscribersRequest {
    /**
     * The maximum number of accounts for which the configuration is displayed.
     */
    maxResults?: Integer;
    /**
     * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
     */
    nextToken?: String;
  }
  export interface ListSubscribersResponse {
    /**
     * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
     */
    nextToken?: String;
    /**
     * The subscribers available for the specified Security Lake account ID.
     */
    subscribers: SubscriberList;
  }
  export interface LogsStatus {
    /**
     * The health status of services, including error codes and patterns.
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
     * The account that is subscribed to receive exception notifications. 
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
  export type ResourceShareArn = string;
  export type ResourceShareName = string;
  export interface RetentionSetting {
    /**
     * The retention period specifies a fixed period of time during which the Security Lake object remains locked. You can specify the retention period in days for one or more sources. 
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
     * Amazon Security Lake supports log and event collection for natively supported Amazon Web Services. 
     */
    awsSourceType?: AwsLogSourceType;
    /**
     * Amazon Security Lake supports custom source types. For a detailed list, see the Amazon Security Lake User Guide.
     */
    customSourceType?: CustomSourceType;
  }
  export type SourceTypeList = SourceType[];
  export type StorageClass = "STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"GLACIER_IR"|"GLACIER"|"DEEP_ARCHIVE"|"EXPIRE"|string;
  export type String = string;
  export type SubscriberList = SubscriberResource[];
  export interface SubscriberResource {
    /**
     * You can choose to notify subscribers of new objects with an Amazon Simple Queue Service (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the subscriber.   Subscribers can consume data by directly querying Lake Formation tables in your Amazon S3 bucket through services like Amazon Athena. This subscription type is defined as LAKEFORMATION. 
     */
    accessTypes?: AccessTypeList;
    /**
     * The Amazon Web Services account ID you are using to create your Amazon Security Lake account.
     */
    accountId: AwsAccountId;
    /**
     * The date and time when the subscription was created. 
     */
    createdAt?: SyntheticTimestamp_date_time;
    /**
     * The external ID of the subscriber. The external ID lets the user that is assuming the role assert the circumstances in which they are operating. It also provides a way for the account owner to permit the role to be assumed only under specific circumstances.
     */
    externalId?: SafeString;
    /**
     * The Amazon Resource Name (ARN) which uniquely defines the AWS RAM resource share. Before accepting the RAM resource share invitation, you can view details related to the RAM resource share. This field is available only for Lake Formation subscribers created after March 8, 2023.
     */
    resourceShareArn?: ResourceShareArn;
    /**
     * The name of the resource share.
     */
    resourceShareName?: ResourceShareName;
    /**
     * The Amazon Resource Name (ARN) specifying the role of the subscriber.
     */
    roleArn?: RoleArn;
    /**
     * The ARN for the Amazon S3 bucket. 
     */
    s3BucketArn?: S3BucketArn;
    /**
     * The ARN for the Amazon Simple Notification Service.
     */
    snsArn?: SnsTopicArn;
    /**
     * Amazon Security Lake supports log and event collection for natively supported Amazon Web Services. For more information, see the Amazon Security Lake User Guide.
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
     * The subscription status of the Amazon Security Lake subscriber account.
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
     * The account that is subscribed to receive exception notifications.
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
     * Specify the Region or Regions that will contribute data to the rollup region.
     */
    configurations: LakeConfigurationRequestMap;
  }
  export interface UpdateDatalakeResponse {
  }
  export interface UpdateStatus {
    /**
     * The details of the last UpdateDatalakeor DeleteDatalake API request which failed.
     */
    lastUpdateFailure?: LastUpdateFailure;
    /**
     * The unique ID for the UpdateDatalake or DeleteDatalake API request.
     */
    lastUpdateRequestId?: String;
    /**
     * The status of the last UpdateDatalake or DeleteDatalake API request that was requested.
     */
    lastUpdateStatus?: settingsStatus;
  }
  export interface UpdateSubscriberRequest {
    /**
     * The external ID of the Security Lake account.
     */
    externalId?: SafeString;
    /**
     * A value created by Security Lake that uniquely identifies your subscription. 
     */
    id: String;
    /**
     * The supported Amazon Web Services from which logs and events are collected. For the list of supported Amazon Web Services, see the Amazon Security Lake User Guide.
     */
    sourceTypes: SourceTypeList;
    /**
     * The description of the Security Lake account subscriber.
     */
    subscriberDescription?: DescriptionString;
    /**
     * The name of the Security Lake account subscriber. 
     */
    subscriberName?: UpdateSubscriberRequestSubscriberNameString;
  }
  export type UpdateSubscriberRequestSubscriberNameString = string;
  export interface UpdateSubscriberResponse {
    /**
     * The account of the subscriber.
     */
    subscriber?: SubscriberResource;
  }
  export interface UpdateSubscriptionNotificationConfigurationRequest {
    /**
     * Create a new subscription notification for the specified subscription ID in Amazon Security Lake.
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
     * The Amazon Resource Name (ARN) specifying the role of the subscriber. For more information about ARNs and how to use them in policies, see, see the Managing data access and Amazon Web Services Managed Policiesin the Amazon Security Lake User Guide.
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
     * Returns the ARN of the queue.
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
