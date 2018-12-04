import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Budgets extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Budgets.Types.ClientConfiguration)
  config: Config & Budgets.Types.ClientConfiguration;
  /**
   * Creates a budget and, if included, notifications and subscribers. 
   */
  createBudget(params: Budgets.Types.CreateBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.CreateBudgetResponse) => void): Request<Budgets.Types.CreateBudgetResponse, AWSError>;
  /**
   * Creates a budget and, if included, notifications and subscribers. 
   */
  createBudget(callback?: (err: AWSError, data: Budgets.Types.CreateBudgetResponse) => void): Request<Budgets.Types.CreateBudgetResponse, AWSError>;
  /**
   * Creates a notification. You must create the budget before you create the associated notification.
   */
  createNotification(params: Budgets.Types.CreateNotificationRequest, callback?: (err: AWSError, data: Budgets.Types.CreateNotificationResponse) => void): Request<Budgets.Types.CreateNotificationResponse, AWSError>;
  /**
   * Creates a notification. You must create the budget before you create the associated notification.
   */
  createNotification(callback?: (err: AWSError, data: Budgets.Types.CreateNotificationResponse) => void): Request<Budgets.Types.CreateNotificationResponse, AWSError>;
  /**
   * Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
   */
  createSubscriber(params: Budgets.Types.CreateSubscriberRequest, callback?: (err: AWSError, data: Budgets.Types.CreateSubscriberResponse) => void): Request<Budgets.Types.CreateSubscriberResponse, AWSError>;
  /**
   * Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
   */
  createSubscriber(callback?: (err: AWSError, data: Budgets.Types.CreateSubscriberResponse) => void): Request<Budgets.Types.CreateSubscriberResponse, AWSError>;
  /**
   * Deletes a budget. You can delete your budget at any time.  Deleting a budget also deletes the notifications and subscribers associated with that budget. 
   */
  deleteBudget(params: Budgets.Types.DeleteBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.DeleteBudgetResponse) => void): Request<Budgets.Types.DeleteBudgetResponse, AWSError>;
  /**
   * Deletes a budget. You can delete your budget at any time.  Deleting a budget also deletes the notifications and subscribers associated with that budget. 
   */
  deleteBudget(callback?: (err: AWSError, data: Budgets.Types.DeleteBudgetResponse) => void): Request<Budgets.Types.DeleteBudgetResponse, AWSError>;
  /**
   * Deletes a notification.  Deleting a notification also deletes the subscribers associated with the notification. 
   */
  deleteNotification(params: Budgets.Types.DeleteNotificationRequest, callback?: (err: AWSError, data: Budgets.Types.DeleteNotificationResponse) => void): Request<Budgets.Types.DeleteNotificationResponse, AWSError>;
  /**
   * Deletes a notification.  Deleting a notification also deletes the subscribers associated with the notification. 
   */
  deleteNotification(callback?: (err: AWSError, data: Budgets.Types.DeleteNotificationResponse) => void): Request<Budgets.Types.DeleteNotificationResponse, AWSError>;
  /**
   * Deletes a subscriber.  Deleting the last subscriber to a notification also deletes the notification. 
   */
  deleteSubscriber(params: Budgets.Types.DeleteSubscriberRequest, callback?: (err: AWSError, data: Budgets.Types.DeleteSubscriberResponse) => void): Request<Budgets.Types.DeleteSubscriberResponse, AWSError>;
  /**
   * Deletes a subscriber.  Deleting the last subscriber to a notification also deletes the notification. 
   */
  deleteSubscriber(callback?: (err: AWSError, data: Budgets.Types.DeleteSubscriberResponse) => void): Request<Budgets.Types.DeleteSubscriberResponse, AWSError>;
  /**
   * Describes a budget.
   */
  describeBudget(params: Budgets.Types.DescribeBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.DescribeBudgetResponse) => void): Request<Budgets.Types.DescribeBudgetResponse, AWSError>;
  /**
   * Describes a budget.
   */
  describeBudget(callback?: (err: AWSError, data: Budgets.Types.DescribeBudgetResponse) => void): Request<Budgets.Types.DescribeBudgetResponse, AWSError>;
  /**
   * Lists the budgets associated with an account.
   */
  describeBudgets(params: Budgets.Types.DescribeBudgetsRequest, callback?: (err: AWSError, data: Budgets.Types.DescribeBudgetsResponse) => void): Request<Budgets.Types.DescribeBudgetsResponse, AWSError>;
  /**
   * Lists the budgets associated with an account.
   */
  describeBudgets(callback?: (err: AWSError, data: Budgets.Types.DescribeBudgetsResponse) => void): Request<Budgets.Types.DescribeBudgetsResponse, AWSError>;
  /**
   * Lists the notifications associated with a budget.
   */
  describeNotificationsForBudget(params: Budgets.Types.DescribeNotificationsForBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.DescribeNotificationsForBudgetResponse) => void): Request<Budgets.Types.DescribeNotificationsForBudgetResponse, AWSError>;
  /**
   * Lists the notifications associated with a budget.
   */
  describeNotificationsForBudget(callback?: (err: AWSError, data: Budgets.Types.DescribeNotificationsForBudgetResponse) => void): Request<Budgets.Types.DescribeNotificationsForBudgetResponse, AWSError>;
  /**
   * Lists the subscribers associated with a notification.
   */
  describeSubscribersForNotification(params: Budgets.Types.DescribeSubscribersForNotificationRequest, callback?: (err: AWSError, data: Budgets.Types.DescribeSubscribersForNotificationResponse) => void): Request<Budgets.Types.DescribeSubscribersForNotificationResponse, AWSError>;
  /**
   * Lists the subscribers associated with a notification.
   */
  describeSubscribersForNotification(callback?: (err: AWSError, data: Budgets.Types.DescribeSubscribersForNotificationResponse) => void): Request<Budgets.Types.DescribeSubscribersForNotificationResponse, AWSError>;
  /**
   * Updates a budget. You can change every part of a budget except for the budgetName and the calculatedSpend. When a budget is modified, the calculatedSpend drops to zero until AWS has new usage data to use for forecasting.
   */
  updateBudget(params: Budgets.Types.UpdateBudgetRequest, callback?: (err: AWSError, data: Budgets.Types.UpdateBudgetResponse) => void): Request<Budgets.Types.UpdateBudgetResponse, AWSError>;
  /**
   * Updates a budget. You can change every part of a budget except for the budgetName and the calculatedSpend. When a budget is modified, the calculatedSpend drops to zero until AWS has new usage data to use for forecasting.
   */
  updateBudget(callback?: (err: AWSError, data: Budgets.Types.UpdateBudgetResponse) => void): Request<Budgets.Types.UpdateBudgetResponse, AWSError>;
  /**
   * Updates a notification.
   */
  updateNotification(params: Budgets.Types.UpdateNotificationRequest, callback?: (err: AWSError, data: Budgets.Types.UpdateNotificationResponse) => void): Request<Budgets.Types.UpdateNotificationResponse, AWSError>;
  /**
   * Updates a notification.
   */
  updateNotification(callback?: (err: AWSError, data: Budgets.Types.UpdateNotificationResponse) => void): Request<Budgets.Types.UpdateNotificationResponse, AWSError>;
  /**
   * Updates a subscriber.
   */
  updateSubscriber(params: Budgets.Types.UpdateSubscriberRequest, callback?: (err: AWSError, data: Budgets.Types.UpdateSubscriberResponse) => void): Request<Budgets.Types.UpdateSubscriberResponse, AWSError>;
  /**
   * Updates a subscriber.
   */
  updateSubscriber(callback?: (err: AWSError, data: Budgets.Types.UpdateSubscriberResponse) => void): Request<Budgets.Types.UpdateSubscriberResponse, AWSError>;
}
declare namespace Budgets {
  export type AccountId = string;
  export interface Budget {
    /**
     * The name of a budget. Unique within accounts. : and \ characters are not allowed in the BudgetName.
     */
    BudgetName: BudgetName;
    /**
     * The total amount of cost, usage, or RI utilization that you want to track with your budget.  BudgetLimit is required for cost or usage budgets, but optional for RI utilization budgets. RI utilization budgets default to the only valid value for RI utilization budgets, which is 100.
     */
    BudgetLimit?: Spend;
    /**
     * The cost filters applied to a budget, such as service or region.
     */
    CostFilters?: CostFilters;
    /**
     * The types of costs included in this budget.
     */
    CostTypes?: CostTypes;
    /**
     * The length of time until a budget resets the actual and forecasted spend.
     */
    TimeUnit: TimeUnit;
    /**
     * The period of time covered by a budget. Has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.  If you created your budget and didn't specify a start date, AWS defaults to the start of your chosen time period (i.e. DAILY, MONTHLY, QUARTERLY, ANNUALLY). For example, if you created your budget on January 24th 2018, chose DAILY, and didn't set a start date, AWS set your start date to 01/24/18 00:00 UTC. If you chose MONTHLY, AWS set your start date to 01/01/18 00:00 UTC. If you didn't specify an end date, AWS set your end date to 06/15/87 00:00 UTC. The defaults are the same for the AWS Billing and Cost Management console and the API.  You can change either date with the UpdateBudget operation. After the end date, AWS deletes the budget and all associated notifications and subscribers.
     */
    TimePeriod?: TimePeriod;
    /**
     * The actual and forecasted cost or usage being tracked by a budget.
     */
    CalculatedSpend?: CalculatedSpend;
    /**
     * Whether this budget tracks monetary costs, usage, or RI utilization.
     */
    BudgetType: BudgetType;
  }
  export type BudgetName = string;
  export type BudgetType = "USAGE"|"COST"|"RI_UTILIZATION"|"RI_COVERAGE"|string;
  export type Budgets = Budget[];
  export interface CalculatedSpend {
    /**
     * The amount of cost, usage, or RI units that you have used.
     */
    ActualSpend: Spend;
    /**
     * The amount of cost, usage, or RI units that you are forecasted to use.
     */
    ForecastedSpend?: Spend;
  }
  export type ComparisonOperator = "GREATER_THAN"|"LESS_THAN"|"EQUAL_TO"|string;
  export type CostFilters = {[key: string]: DimensionValues};
  export interface CostTypes {
    /**
     * Specifies whether a budget includes taxes. The default value is true.
     */
    IncludeTax?: NullableBoolean;
    /**
     * Specifies whether a budget includes subscriptions. The default value is true.
     */
    IncludeSubscription?: NullableBoolean;
    /**
     * Specifies whether a budget uses blended rate. The default value is false.
     */
    UseBlended?: NullableBoolean;
    /**
     * Specifies whether a budget includes refunds. The default value is true.
     */
    IncludeRefund?: NullableBoolean;
    /**
     * Specifies whether a budget includes credits. The default value is true.
     */
    IncludeCredit?: NullableBoolean;
    /**
     * Specifies whether a budget includes upfront RI costs. The default value is true.
     */
    IncludeUpfront?: NullableBoolean;
    /**
     * Specifies whether a budget includes recurring fees such as monthly RI fees. The default value is true.
     */
    IncludeRecurring?: NullableBoolean;
    /**
     * Specifies whether a budget includes non-RI subscription costs. The default value is true.
     */
    IncludeOtherSubscription?: NullableBoolean;
    /**
     * Specifies whether a budget includes support subscription fees. The default value is true.
     */
    IncludeSupport?: NullableBoolean;
    /**
     * Specifies whether a budget includes discounts. The default value is true.
     */
    IncludeDiscount?: NullableBoolean;
    /**
     * Specifies whether a budget uses the amortized rate. The default value is false.
     */
    UseAmortized?: NullableBoolean;
  }
  export interface CreateBudgetRequest {
    /**
     * The accountId that is associated with the budget.
     */
    AccountId: AccountId;
    /**
     * The budget object that you want to create.
     */
    Budget: Budget;
    /**
     * A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to ten email subscribers. If you include notifications and subscribers in your CreateBudget call, AWS creates the notifications and subscribers for you.
     */
    NotificationsWithSubscribers?: NotificationWithSubscribersList;
  }
  export interface CreateBudgetResponse {
  }
  export interface CreateNotificationRequest {
    /**
     * The accountId that is associated with the budget that you want to create a notification for.
     */
    AccountId: AccountId;
    /**
     * The name of the budget that you want AWS to notified you about. Budget names must be unique within an account.
     */
    BudgetName: BudgetName;
    /**
     * The notification that you want to create.
     */
    Notification: Notification;
    /**
     * A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to ten email subscribers.
     */
    Subscribers: Subscribers;
  }
  export interface CreateNotificationResponse {
  }
  export interface CreateSubscriberRequest {
    /**
     * The accountId associated with the budget that you want to create a subscriber for.
     */
    AccountId: AccountId;
    /**
     * The name of the budget that you want to subscribe to. Budget names must be unique within an account.
     */
    BudgetName: BudgetName;
    /**
     * The notification that you want to create a subscriber for.
     */
    Notification: Notification;
    /**
     * The subscriber that you want to associate with a budget notification.
     */
    Subscriber: Subscriber;
  }
  export interface CreateSubscriberResponse {
  }
  export interface DeleteBudgetRequest {
    /**
     * The accountId that is associated with the budget that you want to delete.
     */
    AccountId: AccountId;
    /**
     * The name of the budget that you want to delete.
     */
    BudgetName: BudgetName;
  }
  export interface DeleteBudgetResponse {
  }
  export interface DeleteNotificationRequest {
    /**
     * The accountId that is associated with the budget whose notification you want to delete.
     */
    AccountId: AccountId;
    /**
     * The name of the budget whose notification you want to delete.
     */
    BudgetName: BudgetName;
    /**
     * The notification that you want to delete.
     */
    Notification: Notification;
  }
  export interface DeleteNotificationResponse {
  }
  export interface DeleteSubscriberRequest {
    /**
     * The accountId that is associated with the budget whose subscriber you want to delete.
     */
    AccountId: AccountId;
    /**
     * The name of the budget whose subscriber you want to delete.
     */
    BudgetName: BudgetName;
    /**
     * The notification whose subscriber you want to delete.
     */
    Notification: Notification;
    /**
     * The subscriber that you want to delete.
     */
    Subscriber: Subscriber;
  }
  export interface DeleteSubscriberResponse {
  }
  export interface DescribeBudgetRequest {
    /**
     * The accountId that is associated with the budget that you want a description of.
     */
    AccountId: AccountId;
    /**
     * The name of the budget that you want a description of.
     */
    BudgetName: BudgetName;
  }
  export interface DescribeBudgetResponse {
    /**
     * The description of the budget.
     */
    Budget?: Budget;
  }
  export interface DescribeBudgetsRequest {
    /**
     * The accountId that is associated with the budgets that you want descriptions of.
     */
    AccountId: AccountId;
    /**
     * Optional integer. Specifies the maximum number of results to return in response.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: GenericString;
  }
  export interface DescribeBudgetsResponse {
    /**
     * A list of budgets.
     */
    Budgets?: Budgets;
    /**
     * The pagination token that indicates the next set of results that you can retrieve.
     */
    NextToken?: GenericString;
  }
  export interface DescribeNotificationsForBudgetRequest {
    /**
     * The accountId that is associated with the budget whose notifications you want descriptions of.
     */
    AccountId: AccountId;
    /**
     * The name of the budget whose notifications you want descriptions of.
     */
    BudgetName: BudgetName;
    /**
     * Optional integer. Specifies the maximum number of results to return in response.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: GenericString;
  }
  export interface DescribeNotificationsForBudgetResponse {
    /**
     * A list of notifications associated with a budget.
     */
    Notifications?: Notifications;
    /**
     * The pagination token that indicates the next set of results that you can retrieve.
     */
    NextToken?: GenericString;
  }
  export interface DescribeSubscribersForNotificationRequest {
    /**
     * The accountId that is associated with the budget whose subscribers you want descriptions of.
     */
    AccountId: AccountId;
    /**
     * The name of the budget whose subscribers you want descriptions of.
     */
    BudgetName: BudgetName;
    /**
     * The notification whose subscribers you want to list.
     */
    Notification: Notification;
    /**
     * Optional integer. Specifies the maximum number of results to return in response.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: GenericString;
  }
  export interface DescribeSubscribersForNotificationResponse {
    /**
     * A list of subscribers associated with a notification.
     */
    Subscribers?: Subscribers;
    /**
     * The pagination token that indicates the next set of results that you can retrieve.
     */
    NextToken?: GenericString;
  }
  export type DimensionValues = GenericString[];
  export type GenericString = string;
  export type GenericTimestamp = Date;
  export type MaxResults = number;
  export interface Notification {
    /**
     * Whether the notification is for how much you have spent (ACTUAL) or for how much you are forecasted to spend (FORECASTED).
     */
    NotificationType: NotificationType;
    /**
     * The comparison used for this notification.
     */
    ComparisonOperator: ComparisonOperator;
    /**
     * The threshold associated with a notification. Thresholds are always a percentage.
     */
    Threshold: NotificationThreshold;
    /**
     * The type of threshold for a notification. For ACTUAL thresholds, AWS notifies you when you go over the threshold, and for FORECASTED thresholds AWS notifies you when you are forecasted to go over the threshold.
     */
    ThresholdType?: ThresholdType;
  }
  export type NotificationThreshold = number;
  export type NotificationType = "ACTUAL"|"FORECASTED"|string;
  export interface NotificationWithSubscribers {
    /**
     * The notification associated with a budget.
     */
    Notification: Notification;
    /**
     * A list of subscribers who are subscribed to this notification.
     */
    Subscribers: Subscribers;
  }
  export type NotificationWithSubscribersList = NotificationWithSubscribers[];
  export type Notifications = Notification[];
  export type NullableBoolean = boolean;
  export type NumericValue = string;
  export interface Spend {
    /**
     * The cost or usage amount associated with a budget forecast, actual spend, or budget threshold.
     */
    Amount: NumericValue;
    /**
     * The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB.
     */
    Unit: UnitValue;
  }
  export interface Subscriber {
    /**
     * The type of notification that AWS sends to a subscriber.
     */
    SubscriptionType: SubscriptionType;
    /**
     * The address that AWS sends budget notifications to, either an SNS topic or an email.
     */
    Address: SubscriberAddress;
  }
  export type SubscriberAddress = string;
  export type Subscribers = Subscriber[];
  export type SubscriptionType = "SNS"|"EMAIL"|string;
  export type ThresholdType = "PERCENTAGE"|"ABSOLUTE_VALUE"|string;
  export interface TimePeriod {
    /**
     * The start date for a budget. If you created your budget and didn't specify a start date, AWS defaults to the start of your chosen time period (i.e. DAILY, MONTHLY, QUARTERLY, ANNUALLY). For example, if you created your budget on January 24th 2018, chose DAILY, and didn't set a start date, AWS set your start date to 01/24/18 00:00 UTC. If you chose MONTHLY, AWS set your start date to 01/01/18 00:00 UTC. The defaults are the same for the AWS Billing and Cost Management console and the API. You can change your start date with the UpdateBudget operation.
     */
    Start?: GenericTimestamp;
    /**
     * The end date for a budget. If you didn't specify an end date, AWS set your end date to 06/15/87 00:00 UTC. The defaults are the same for the AWS Billing and Cost Management console and the API. After the end date, AWS deletes the budget and all associated notifications and subscribers. You can change your end date with the UpdateBudget operation.
     */
    End?: GenericTimestamp;
  }
  export type TimeUnit = "DAILY"|"MONTHLY"|"QUARTERLY"|"ANNUALLY"|string;
  export type UnitValue = string;
  export interface UpdateBudgetRequest {
    /**
     * The accountId that is associated with the budget that you want to update.
     */
    AccountId: AccountId;
    /**
     * The budget that you want to update your budget to.
     */
    NewBudget: Budget;
  }
  export interface UpdateBudgetResponse {
  }
  export interface UpdateNotificationRequest {
    /**
     * The accountId that is associated with the budget whose notification you want to update.
     */
    AccountId: AccountId;
    /**
     * The name of the budget whose notification you want to update.
     */
    BudgetName: BudgetName;
    /**
     * The previous notification associated with a budget.
     */
    OldNotification: Notification;
    /**
     * The updated notification to be associated with a budget.
     */
    NewNotification: Notification;
  }
  export interface UpdateNotificationResponse {
  }
  export interface UpdateSubscriberRequest {
    /**
     * The accountId that is associated with the budget whose subscriber you want to update.
     */
    AccountId: AccountId;
    /**
     * The name of the budget whose subscriber you want to update.
     */
    BudgetName: BudgetName;
    /**
     * The notification whose subscriber you want to update.
     */
    Notification: Notification;
    /**
     * The previous subscriber associated with a budget notification.
     */
    OldSubscriber: Subscriber;
    /**
     * The updated subscriber associated with a budget notification.
     */
    NewSubscriber: Subscriber;
  }
  export interface UpdateSubscriberResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-10-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Budgets client.
   */
  export import Types = Budgets;
}
export = Budgets;
