import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class CostOptimizationHub extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CostOptimizationHub.Types.ClientConfiguration)
  config: Config & CostOptimizationHub.Types.ClientConfiguration;
  /**
   * Returns a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented—estimated savings after discounts or estimated savings before discounts, for example.
   */
  getPreferences(params: CostOptimizationHub.Types.GetPreferencesRequest, callback?: (err: AWSError, data: CostOptimizationHub.Types.GetPreferencesResponse) => void): Request<CostOptimizationHub.Types.GetPreferencesResponse, AWSError>;
  /**
   * Returns a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented—estimated savings after discounts or estimated savings before discounts, for example.
   */
  getPreferences(callback?: (err: AWSError, data: CostOptimizationHub.Types.GetPreferencesResponse) => void): Request<CostOptimizationHub.Types.GetPreferencesResponse, AWSError>;
  /**
   * Returns both the current and recommended resource configuration and the estimated cost impact for a recommendation. The recommendationId is only valid for up to a maximum of 24 hours as recommendations are refreshed daily. To retrieve the recommendationId, use the ListRecommendations API.
   */
  getRecommendation(params: CostOptimizationHub.Types.GetRecommendationRequest, callback?: (err: AWSError, data: CostOptimizationHub.Types.GetRecommendationResponse) => void): Request<CostOptimizationHub.Types.GetRecommendationResponse, AWSError>;
  /**
   * Returns both the current and recommended resource configuration and the estimated cost impact for a recommendation. The recommendationId is only valid for up to a maximum of 24 hours as recommendations are refreshed daily. To retrieve the recommendationId, use the ListRecommendations API.
   */
  getRecommendation(callback?: (err: AWSError, data: CostOptimizationHub.Types.GetRecommendationResponse) => void): Request<CostOptimizationHub.Types.GetRecommendationResponse, AWSError>;
  /**
   * Retrieves the enrollment status for an account. It can also return the list of accounts that are enrolled under the organization.
   */
  listEnrollmentStatuses(params: CostOptimizationHub.Types.ListEnrollmentStatusesRequest, callback?: (err: AWSError, data: CostOptimizationHub.Types.ListEnrollmentStatusesResponse) => void): Request<CostOptimizationHub.Types.ListEnrollmentStatusesResponse, AWSError>;
  /**
   * Retrieves the enrollment status for an account. It can also return the list of accounts that are enrolled under the organization.
   */
  listEnrollmentStatuses(callback?: (err: AWSError, data: CostOptimizationHub.Types.ListEnrollmentStatusesResponse) => void): Request<CostOptimizationHub.Types.ListEnrollmentStatusesResponse, AWSError>;
  /**
   * Returns a concise representation of savings estimates for resources. Also returns de-duped savings across different types of recommendations.  The following filters are not supported for this API: recommendationIds, resourceArns, and resourceIds. 
   */
  listRecommendationSummaries(params: CostOptimizationHub.Types.ListRecommendationSummariesRequest, callback?: (err: AWSError, data: CostOptimizationHub.Types.ListRecommendationSummariesResponse) => void): Request<CostOptimizationHub.Types.ListRecommendationSummariesResponse, AWSError>;
  /**
   * Returns a concise representation of savings estimates for resources. Also returns de-duped savings across different types of recommendations.  The following filters are not supported for this API: recommendationIds, resourceArns, and resourceIds. 
   */
  listRecommendationSummaries(callback?: (err: AWSError, data: CostOptimizationHub.Types.ListRecommendationSummariesResponse) => void): Request<CostOptimizationHub.Types.ListRecommendationSummariesResponse, AWSError>;
  /**
   * Returns a list of recommendations.
   */
  listRecommendations(params: CostOptimizationHub.Types.ListRecommendationsRequest, callback?: (err: AWSError, data: CostOptimizationHub.Types.ListRecommendationsResponse) => void): Request<CostOptimizationHub.Types.ListRecommendationsResponse, AWSError>;
  /**
   * Returns a list of recommendations.
   */
  listRecommendations(callback?: (err: AWSError, data: CostOptimizationHub.Types.ListRecommendationsResponse) => void): Request<CostOptimizationHub.Types.ListRecommendationsResponse, AWSError>;
  /**
   * Updates the enrollment (opt in and opt out) status of an account to the Cost Optimization Hub service. If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization. You must have the appropriate permissions to opt in to Cost Optimization Hub and to view its recommendations. When you opt in, Cost Optimization Hub automatically creates a service-linked role in your account to access its data.
   */
  updateEnrollmentStatus(params: CostOptimizationHub.Types.UpdateEnrollmentStatusRequest, callback?: (err: AWSError, data: CostOptimizationHub.Types.UpdateEnrollmentStatusResponse) => void): Request<CostOptimizationHub.Types.UpdateEnrollmentStatusResponse, AWSError>;
  /**
   * Updates the enrollment (opt in and opt out) status of an account to the Cost Optimization Hub service. If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization. You must have the appropriate permissions to opt in to Cost Optimization Hub and to view its recommendations. When you opt in, Cost Optimization Hub automatically creates a service-linked role in your account to access its data.
   */
  updateEnrollmentStatus(callback?: (err: AWSError, data: CostOptimizationHub.Types.UpdateEnrollmentStatusResponse) => void): Request<CostOptimizationHub.Types.UpdateEnrollmentStatusResponse, AWSError>;
  /**
   * Updates a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented.
   */
  updatePreferences(params: CostOptimizationHub.Types.UpdatePreferencesRequest, callback?: (err: AWSError, data: CostOptimizationHub.Types.UpdatePreferencesResponse) => void): Request<CostOptimizationHub.Types.UpdatePreferencesResponse, AWSError>;
  /**
   * Updates a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented.
   */
  updatePreferences(callback?: (err: AWSError, data: CostOptimizationHub.Types.UpdatePreferencesResponse) => void): Request<CostOptimizationHub.Types.UpdatePreferencesResponse, AWSError>;
}
declare namespace CostOptimizationHub {
  export interface AccountEnrollmentStatus {
    /**
     * The Amazon Web Services account ID.
     */
    accountId?: AccountId;
    /**
     * The time when the account enrollment status was created.
     */
    createdTimestamp?: Timestamp;
    /**
     * The time when the account enrollment status was last updated.
     */
    lastUpdatedTimestamp?: Timestamp;
    /**
     * The account enrollment status.
     */
    status?: EnrollmentStatus;
  }
  export type AccountEnrollmentStatuses = AccountEnrollmentStatus[];
  export type AccountId = string;
  export type AccountIdList = AccountId[];
  export type ActionType = "Rightsize"|"Stop"|"Upgrade"|"PurchaseSavingsPlans"|"PurchaseReservedInstances"|"MigrateToGraviton"|string;
  export type ActionTypeList = ActionType[];
  export interface BlockStoragePerformanceConfiguration {
    /**
     * The number of I/O operations per second.
     */
    iops?: Double;
    /**
     * The throughput that the volume supports.
     */
    throughput?: Double;
  }
  export type Boolean = boolean;
  export interface ComputeConfiguration {
    /**
     * The architecture of the resource.
     */
    architecture?: String;
    /**
     * The memory size of the resource.
     */
    memorySizeInMB?: Integer;
    /**
     * The platform of the resource. The platform is the specific combination of operating system, license model, and software on an instance.
     */
    platform?: String;
    /**
     * The number of vCPU cores in the resource.
     */
    vCpu?: Double;
  }
  export interface ComputeSavingsPlans {
    /**
     * Configuration details of the Compute Savings Plans to purchase.
     */
    configuration?: ComputeSavingsPlansConfiguration;
    /**
     * Cost impact of the Savings Plans purchase recommendation.
     */
    costCalculation?: SavingsPlansCostCalculation;
  }
  export interface ComputeSavingsPlansConfiguration {
    /**
     * The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to PAYER. If the value is LINKED, recommendations are calculated for individual member accounts only.
     */
    accountScope?: String;
    /**
     * The hourly commitment for the Savings Plans type.
     */
    hourlyCommitment?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The Savings Plans recommendation term in years.
     */
    term?: String;
  }
  export type Datetime = Date;
  export type Double = number;
  export interface EbsVolume {
    /**
     * The Amazon Elastic Block Store volume configuration used for recommendations.
     */
    configuration?: EbsVolumeConfiguration;
    /**
     * Cost impact of the recommendation.
     */
    costCalculation?: ResourceCostCalculation;
  }
  export interface EbsVolumeConfiguration {
    /**
     * The Amazon Elastic Block Store attachment state.
     */
    attachmentState?: String;
    /**
     * The Amazon Elastic Block Store performance configuration.
     */
    performance?: BlockStoragePerformanceConfiguration;
    /**
     * The disk storage of the Amazon Elastic Block Store volume.
     */
    storage?: StorageConfiguration;
  }
  export interface Ec2AutoScalingGroup {
    /**
     * The EC2 Auto Scaling group configuration used for recommendations.
     */
    configuration?: Ec2AutoScalingGroupConfiguration;
    /**
     * Cost impact of the recommendation.
     */
    costCalculation?: ResourceCostCalculation;
  }
  export interface Ec2AutoScalingGroupConfiguration {
    /**
     * Details about the instance.
     */
    instance?: InstanceConfiguration;
  }
  export interface Ec2Instance {
    /**
     * The EC2 instance configuration used for recommendations.
     */
    configuration?: Ec2InstanceConfiguration;
    /**
     * Cost impact of the recommendation.
     */
    costCalculation?: ResourceCostCalculation;
  }
  export interface Ec2InstanceConfiguration {
    /**
     * Details about the instance.
     */
    instance?: InstanceConfiguration;
  }
  export interface Ec2InstanceSavingsPlans {
    /**
     * The EC2 instance Savings Plans configuration used for recommendations.
     */
    configuration?: Ec2InstanceSavingsPlansConfiguration;
    /**
     * Cost impact of the Savings Plans purchase recommendation.
     */
    costCalculation?: SavingsPlansCostCalculation;
  }
  export interface Ec2InstanceSavingsPlansConfiguration {
    /**
     * The account scope that you want your recommendations for.
     */
    accountScope?: String;
    /**
     * The hourly commitment for the Savings Plans type.
     */
    hourlyCommitment?: String;
    /**
     * The instance family of the recommended Savings Plan.
     */
    instanceFamily?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    savingsPlansRegion?: String;
    /**
     * The Savings Plans recommendation term in years.
     */
    term?: String;
  }
  export interface Ec2ReservedInstances {
    /**
     * The EC2 reserved instances configuration used for recommendations.
     */
    configuration?: Ec2ReservedInstancesConfiguration;
    /**
     * Cost impact of the purchase recommendation.
     */
    costCalculation?: ReservedInstancesCostCalculation;
  }
  export interface Ec2ReservedInstancesConfiguration {
    /**
     * The account scope that you want your recommendations for.
     */
    accountScope?: String;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * The instance family of the recommended reservation.
     */
    instanceFamily?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * How much purchasing reserved instances costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * Indicates whether the recommendation is for standard or convertible reservations.
     */
    offeringClass?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.
     */
    platform?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * Determines whether the recommended reservation is dedicated or shared.
     */
    tenancy?: String;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
  }
  export interface EcsService {
    /**
     * The ECS service configuration used for recommendations.
     */
    configuration?: EcsServiceConfiguration;
    /**
     * Cost impact of the recommendation.
     */
    costCalculation?: ResourceCostCalculation;
  }
  export interface EcsServiceConfiguration {
    /**
     * Details about the compute configuration.
     */
    compute?: ComputeConfiguration;
  }
  export interface ElastiCacheReservedInstances {
    /**
     * The ElastiCache reserved instances configuration used for recommendations.
     */
    configuration?: ElastiCacheReservedInstancesConfiguration;
    /**
     * Cost impact of the purchase recommendation.
     */
    costCalculation?: ReservedInstancesCostCalculation;
  }
  export interface ElastiCacheReservedInstancesConfiguration {
    /**
     * The account scope that you want your recommendations for.
     */
    accountScope?: String;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * The instance family of the recommended reservation.
     */
    instanceFamily?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * How much purchasing reserved instances costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
  }
  export type EnrollmentStatus = "Active"|"Inactive"|string;
  export interface EstimatedDiscounts {
    /**
     * Estimated other discounts include all discounts that are not itemized. Itemized discounts include reservedInstanceDiscount and savingsPlansDiscount.
     */
    otherDiscount?: Double;
    /**
     * Estimated reserved instance discounts.
     */
    reservedInstancesDiscount?: Double;
    /**
     * Estimated Savings Plans discounts.
     */
    savingsPlansDiscount?: Double;
  }
  export interface Filter {
    /**
     * The account that the recommendation is for.
     */
    accountIds?: AccountIdList;
    /**
     * The type of action you can take by adopting the recommendation.
     */
    actionTypes?: ActionTypeList;
    /**
     * The effort required to implement the recommendation.
     */
    implementationEfforts?: ImplementationEffortList;
    /**
     * The IDs for the recommendations.
     */
    recommendationIds?: RecommendationIdList;
    /**
     * The Amazon Web Services Region of the resource.
     */
    regions?: RegionList;
    /**
     * The Amazon Resource Name (ARN) of the recommendation.
     */
    resourceArns?: ResourceArnList;
    /**
     * The resource ID of the recommendation.
     */
    resourceIds?: ResourceIdList;
    /**
     * The resource type of the recommendation.
     */
    resourceTypes?: ResourceTypeList;
    /**
     * Whether or not implementing the recommendation requires a restart.
     */
    restartNeeded?: Boolean;
    /**
     * Whether or not implementing the recommendation can be rolled back.
     */
    rollbackPossible?: Boolean;
    /**
     * A list of tags assigned to the recommendation.
     */
    tags?: TagList;
  }
  export interface GetPreferencesRequest {
  }
  export interface GetPreferencesResponse {
    /**
     * Retrieves the status of the "member account discount visibility" preference.
     */
    memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
    /**
     * Retrieves the status of the "savings estimation mode" preference.
     */
    savingsEstimationMode?: SavingsEstimationMode;
  }
  export interface GetRecommendationRequest {
    /**
     * The ID for the recommendation.
     */
    recommendationId: String;
  }
  export interface GetRecommendationResponse {
    /**
     * The account that the recommendation is for.
     */
    accountId?: String;
    /**
     * The type of action you can take by adopting the recommendation.
     */
    actionType?: ActionType;
    /**
     * The lookback period used to calculate cost impact for a recommendation.
     */
    costCalculationLookbackPeriodInDays?: Integer;
    /**
     * The currency code used for the recommendation.
     */
    currencyCode?: String;
    /**
     * The details for the resource.
     */
    currentResourceDetails?: ResourceDetails;
    /**
     * The type of resource.
     */
    currentResourceType?: ResourceType;
    /**
     * The estimated monthly cost of the recommendation.
     */
    estimatedMonthlyCost?: Double;
    /**
     * The estimated monthly savings amount for the recommendation.
     */
    estimatedMonthlySavings?: Double;
    /**
     * The estimated savings amount over the lookback period used to calculate cost impact for a recommendation.
     */
    estimatedSavingsOverCostCalculationLookbackPeriod?: Double;
    /**
     * The estimated savings percentage relative to the total cost over the cost calculation lookback period.
     */
    estimatedSavingsPercentage?: Double;
    /**
     * The effort required to implement the recommendation.
     */
    implementationEffort?: ImplementationEffort;
    /**
     * The time when the recommendation was last generated.
     */
    lastRefreshTimestamp?: Datetime;
    /**
     * The ID for the recommendation.
     */
    recommendationId?: String;
    /**
     * The lookback period that's used to generate the recommendation.
     */
    recommendationLookbackPeriodInDays?: Integer;
    /**
     * The details about the recommended resource.
     */
    recommendedResourceDetails?: ResourceDetails;
    /**
     * The resource type of the recommendation.
     */
    recommendedResourceType?: ResourceType;
    /**
     * The Amazon Web Services Region of the resource.
     */
    region?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn?: String;
    /**
     * The unique identifier for the resource. This is the same as the Amazon Resource Name (ARN), if available.
     */
    resourceId?: String;
    /**
     * Whether or not implementing the recommendation requires a restart.
     */
    restartNeeded?: Boolean;
    /**
     * Whether or not implementing the recommendation can be rolled back.
     */
    rollbackPossible?: Boolean;
    /**
     * The source of the recommendation.
     */
    source?: Source;
    /**
     * A list of tags associated with the resource for which the recommendation exists.
     */
    tags?: TagList;
  }
  export type ImplementationEffort = "VeryLow"|"Low"|"Medium"|"High"|"VeryHigh"|string;
  export type ImplementationEffortList = ImplementationEffort[];
  export interface InstanceConfiguration {
    /**
     * Details about the type.
     */
    type?: String;
  }
  export type Integer = number;
  export interface LambdaFunction {
    /**
     * The Lambda function configuration used for recommendations.
     */
    configuration?: LambdaFunctionConfiguration;
    /**
     * Cost impact of the recommendation.
     */
    costCalculation?: ResourceCostCalculation;
  }
  export interface LambdaFunctionConfiguration {
    /**
     * Details about the compute configuration.
     */
    compute?: ComputeConfiguration;
  }
  export interface ListEnrollmentStatusesRequest {
    /**
     * The account ID of a member account in the organization.
     */
    accountId?: AccountId;
    /**
     * Indicates whether to return the enrollment status for the organization.
     */
    includeOrganizationInfo?: PrimitiveBoolean;
    /**
     * The maximum number of objects that are returned for the request.
     */
    maxResults?: MaxResults;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: String;
  }
  export interface ListEnrollmentStatusesResponse {
    /**
     * The enrollment status of all member accounts in the organization if the account is the management account.
     */
    includeMemberAccounts?: Boolean;
    /**
     * The enrollment status of a specific account ID, including creation and last updated timestamps.
     */
    items?: AccountEnrollmentStatuses;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: String;
  }
  export interface ListRecommendationSummariesRequest {
    filter?: Filter;
    /**
     * The grouping of recommendations by a dimension.
     */
    groupBy: String;
    /**
     * The maximum number of recommendations that are returned for the request.
     */
    maxResults?: ListRecommendationSummariesRequestMaxResultsInteger;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: String;
  }
  export type ListRecommendationSummariesRequestMaxResultsInteger = number;
  export interface ListRecommendationSummariesResponse {
    /**
     * The currency code used for the recommendation.
     */
    currencyCode?: String;
    /**
     * The total overall savings for the aggregated view.
     */
    estimatedTotalDedupedSavings?: Double;
    /**
     * The dimension used to group the recommendations by.
     */
    groupBy?: String;
    /**
     * List of all savings recommendations.
     */
    items?: RecommendationSummariesList;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: String;
  }
  export interface ListRecommendationsRequest {
    /**
     * The constraints that you want all returned recommendations to match.
     */
    filter?: Filter;
    /**
     * List of all recommendations for a resource, or a single recommendation if de-duped by resourceId.
     */
    includeAllRecommendations?: PrimitiveBoolean;
    /**
     * The maximum number of recommendations that are returned for the request.
     */
    maxResults?: ListRecommendationsRequestMaxResultsInteger;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: String;
    /**
     * The ordering of recommendations by a dimension.
     */
    orderBy?: OrderBy;
  }
  export type ListRecommendationsRequestMaxResultsInteger = number;
  export interface ListRecommendationsResponse {
    /**
     * List of all savings recommendations.
     */
    items?: RecommendationList;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: String;
  }
  export type MaxResults = number;
  export type MemberAccountDiscountVisibility = "All"|"None"|string;
  export interface OpenSearchReservedInstances {
    /**
     * The OpenSearch reserved instances configuration used for recommendations.
     */
    configuration?: OpenSearchReservedInstancesConfiguration;
    /**
     * Cost impact of the purchase recommendation.
     */
    costCalculation?: ReservedInstancesCostCalculation;
  }
  export interface OpenSearchReservedInstancesConfiguration {
    /**
     * The account scope that you want your recommendations for.
     */
    accountScope?: String;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * How much purchasing reserved instances costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
  }
  export type Order = "Asc"|"Desc"|string;
  export interface OrderBy {
    /**
     * Sorts by dimension values.
     */
    dimension?: String;
    /**
     * The order that's used to sort the data.
     */
    order?: Order;
  }
  export type PrimitiveBoolean = boolean;
  export interface RdsReservedInstances {
    /**
     * The RDS reserved instances configuration used for recommendations.
     */
    configuration?: RdsReservedInstancesConfiguration;
    /**
     * Cost impact of the purchase recommendation.
     */
    costCalculation?: ReservedInstancesCostCalculation;
  }
  export interface RdsReservedInstancesConfiguration {
    /**
     * The account scope that you want your recommendations for.
     */
    accountScope?: String;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * The database edition that the recommended reservation supports.
     */
    databaseEdition?: String;
    /**
     * The database engine that the recommended reservation supports.
     */
    databaseEngine?: String;
    /**
     * Determines whether the recommendation is for a reservation in a single Availability Zone or a reservation with a backup in a second Availability Zone.
     */
    deploymentOption?: String;
    /**
     * The instance family of the recommended reservation.
     */
    instanceFamily?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * The license model that the recommended reservation supports.
     */
    licenseModel?: String;
    /**
     * How much purchasing this instance costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
  }
  export interface Recommendation {
    /**
     * The account that the recommendation is for.
     */
    accountId?: String;
    /**
     * The type of tasks that can be carried out by this action.
     */
    actionType?: String;
    /**
     * The currency code used for the recommendation.
     */
    currencyCode?: String;
    /**
     * Describes the current resource.
     */
    currentResourceSummary?: String;
    /**
     * The current resource type.
     */
    currentResourceType?: String;
    /**
     * The estimated monthly cost for the recommendation.
     */
    estimatedMonthlyCost?: Double;
    /**
     * The estimated monthly savings amount for the recommendation.
     */
    estimatedMonthlySavings?: Double;
    /**
     * The estimated savings percentage relative to the total cost over the cost calculation lookback period.
     */
    estimatedSavingsPercentage?: Double;
    /**
     * The effort required to implement the recommendation.
     */
    implementationEffort?: String;
    /**
     * The time when the recommendation was last generated.
     */
    lastRefreshTimestamp?: Datetime;
    /**
     * The ID for the recommendation.
     */
    recommendationId?: String;
    /**
     * The lookback period that's used to generate the recommendation.
     */
    recommendationLookbackPeriodInDays?: Integer;
    /**
     * Describes the recommended resource.
     */
    recommendedResourceSummary?: String;
    /**
     * The recommended resource type.
     */
    recommendedResourceType?: String;
    /**
     * The Amazon Web Services Region of the resource.
     */
    region?: String;
    /**
     * The Amazon Resource Name (ARN) for the recommendation.
     */
    resourceArn?: String;
    /**
     * The resource ID for the recommendation.
     */
    resourceId?: String;
    /**
     * Whether or not implementing the recommendation requires a restart.
     */
    restartNeeded?: Boolean;
    /**
     * Whether or not implementing the recommendation can be rolled back.
     */
    rollbackPossible?: Boolean;
    /**
     * The source of the recommendation.
     */
    source?: Source;
    /**
     * A list of tags assigned to the recommendation.
     */
    tags?: TagList;
  }
  export type RecommendationIdList = String[];
  export type RecommendationList = Recommendation[];
  export type RecommendationSummariesList = RecommendationSummary[];
  export interface RecommendationSummary {
    /**
     * The estimated total savings resulting from modifications, on a monthly basis.
     */
    estimatedMonthlySavings?: Double;
    /**
     * The grouping of recommendations.
     */
    group?: String;
    /**
     * The total number of instance recommendations.
     */
    recommendationCount?: Integer;
  }
  export interface RedshiftReservedInstances {
    /**
     * The Redshift reserved instances configuration used for recommendations.
     */
    configuration?: RedshiftReservedInstancesConfiguration;
    /**
     * Cost impact of the purchase recommendation.
     */
    costCalculation?: ReservedInstancesCostCalculation;
  }
  export interface RedshiftReservedInstancesConfiguration {
    /**
     * The account scope that you want your recommendations for.
     */
    accountScope?: String;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * The instance family of the recommended reservation.
     */
    instanceFamily?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * How much purchasing reserved instances costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
  }
  export type RegionList = String[];
  export interface ReservedInstancesCostCalculation {
    /**
     * Pricing details of the purchase recommendation.
     */
    pricing?: ReservedInstancesPricing;
  }
  export interface ReservedInstancesPricing {
    /**
     * The estimated cost of your recurring monthly fees for the recommended reserved instance across the month.
     */
    estimatedMonthlyAmortizedReservationCost?: Double;
    /**
     * The remaining On-Demand cost estimated to not be covered by the recommended reserved instance, over the length of the lookback period.
     */
    estimatedOnDemandCost?: Double;
    /**
     * The cost of paying for the recommended reserved instance monthly.
     */
    monthlyReservationEligibleCost?: Double;
    /**
     * The savings percentage relative to the total On-Demand costs that are associated with this instance.
     */
    savingsPercentage?: Double;
  }
  export type ResourceArnList = String[];
  export interface ResourceCostCalculation {
    /**
     * Pricing details of the resource recommendation.
     */
    pricing?: ResourcePricing;
    /**
     * Usage details of the resource recommendation.
     */
    usages?: UsageList;
  }
  export interface ResourceDetails {
    /**
     * The Compute Savings Plans recommendation details.
     */
    computeSavingsPlans?: ComputeSavingsPlans;
    /**
     * The Amazon Elastic Block Store volume recommendation details.
     */
    ebsVolume?: EbsVolume;
    /**
     * The EC2 Auto Scaling group recommendation details.
     */
    ec2AutoScalingGroup?: Ec2AutoScalingGroup;
    /**
     * The EC2 instance recommendation details.
     */
    ec2Instance?: Ec2Instance;
    /**
     * The EC2 instance Savings Plans recommendation details.
     */
    ec2InstanceSavingsPlans?: Ec2InstanceSavingsPlans;
    /**
     * The EC2 reserved instances recommendation details.
     */
    ec2ReservedInstances?: Ec2ReservedInstances;
    /**
     * The ECS service recommendation details.
     */
    ecsService?: EcsService;
    /**
     * The ElastiCache reserved instances recommendation details.
     */
    elastiCacheReservedInstances?: ElastiCacheReservedInstances;
    /**
     * The Lambda function recommendation details.
     */
    lambdaFunction?: LambdaFunction;
    /**
     * The OpenSearch reserved instances recommendation details.
     */
    openSearchReservedInstances?: OpenSearchReservedInstances;
    /**
     * The RDS reserved instances recommendation details.
     */
    rdsReservedInstances?: RdsReservedInstances;
    /**
     * The Redshift reserved instances recommendation details.
     */
    redshiftReservedInstances?: RedshiftReservedInstances;
    /**
     * The SageMaker Savings Plans recommendation details.
     */
    sageMakerSavingsPlans?: SageMakerSavingsPlans;
  }
  export type ResourceIdList = String[];
  export interface ResourcePricing {
    /**
     * The savings estimate incorporating all discounts with Amazon Web Services, such as Reserved Instances and Savings Plans.
     */
    estimatedCostAfterDiscounts?: Double;
    /**
     * The savings estimate using Amazon Web Services public pricing without incorporating any discounts.
     */
    estimatedCostBeforeDiscounts?: Double;
    /**
     * The estimated discounts for a recommendation.
     */
    estimatedDiscounts?: EstimatedDiscounts;
    /**
     * The estimated net unused amortized commitment for the recommendation.
     */
    estimatedNetUnusedAmortizedCommitments?: Double;
  }
  export type ResourceType = "Ec2Instance"|"LambdaFunction"|"EbsVolume"|"EcsService"|"Ec2AutoScalingGroup"|"Ec2InstanceSavingsPlans"|"ComputeSavingsPlans"|"SageMakerSavingsPlans"|"Ec2ReservedInstances"|"RdsReservedInstances"|"OpenSearchReservedInstances"|"RedshiftReservedInstances"|"ElastiCacheReservedInstances"|string;
  export type ResourceTypeList = ResourceType[];
  export interface SageMakerSavingsPlans {
    /**
     * The SageMaker Savings Plans configuration used for recommendations.
     */
    configuration?: SageMakerSavingsPlansConfiguration;
    /**
     * Cost impact of the Savings Plans purchase recommendation.
     */
    costCalculation?: SavingsPlansCostCalculation;
  }
  export interface SageMakerSavingsPlansConfiguration {
    /**
     * The account scope that you want your recommendations for.
     */
    accountScope?: String;
    /**
     * The hourly commitment for the Savings Plans type.
     */
    hourlyCommitment?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The Savings Plans recommendation term in years.
     */
    term?: String;
  }
  export type SavingsEstimationMode = "BeforeDiscounts"|"AfterDiscounts"|string;
  export interface SavingsPlansCostCalculation {
    /**
     * Pricing details of the purchase recommendation.
     */
    pricing?: SavingsPlansPricing;
  }
  export interface SavingsPlansPricing {
    /**
     * Estimated monthly commitment for the Savings Plan.
     */
    estimatedMonthlyCommitment?: Double;
    /**
     * Estimated On-Demand cost you will pay after buying the Savings Plan.
     */
    estimatedOnDemandCost?: Double;
    /**
     * The cost of paying for the recommended Savings Plan monthly.
     */
    monthlySavingsPlansEligibleCost?: Double;
    /**
     * Estimated savings as a percentage of your overall costs after buying the Savings Plan.
     */
    savingsPercentage?: Double;
  }
  export type Source = "ComputeOptimizer"|"CostExplorer"|string;
  export interface StorageConfiguration {
    /**
     * The storage volume.
     */
    sizeInGb?: Double;
    /**
     * The storage type.
     */
    type?: String;
  }
  export type String = string;
  export interface Tag {
    /**
     * The key that's associated with the tag.
     */
    key?: String;
    /**
     * The value that's associated with the tag.
     */
    value?: String;
  }
  export type TagList = Tag[];
  export type Timestamp = Date;
  export interface UpdateEnrollmentStatusRequest {
    /**
     * Indicates whether to enroll member accounts of the organization if the account is the management account.
     */
    includeMemberAccounts?: Boolean;
    /**
     * Sets the account status.
     */
    status: EnrollmentStatus;
  }
  export interface UpdateEnrollmentStatusResponse {
    /**
     * The enrollment status of the account.
     */
    status?: String;
  }
  export interface UpdatePreferencesRequest {
    /**
     * Sets the "member account discount visibility" preference.
     */
    memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
    /**
     * Sets the "savings estimation mode" preference.
     */
    savingsEstimationMode?: SavingsEstimationMode;
  }
  export interface UpdatePreferencesResponse {
    /**
     * Shows the status of the "member account discount visibility" preference.
     */
    memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
    /**
     * Shows the status of the "savings estimation mode" preference.
     */
    savingsEstimationMode?: SavingsEstimationMode;
  }
  export interface Usage {
    /**
     * The operation value.
     */
    operation?: String;
    /**
     * The product code.
     */
    productCode?: String;
    /**
     * The usage unit.
     */
    unit?: String;
    /**
     * The usage amount.
     */
    usageAmount?: Double;
    /**
     * The usage type.
     */
    usageType?: String;
  }
  export type UsageList = Usage[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-07-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CostOptimizationHub client.
   */
  export import Types = CostOptimizationHub;
}
export = CostOptimizationHub;
