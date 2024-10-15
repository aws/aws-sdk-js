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
   * Updates the enrollment (opt in and opt out) status of an account to the Cost Optimization Hub service. If the account is a management account or delegated administrator of an organization, this action can also be used to enroll member accounts of the organization. You must have the appropriate permissions to opt in to Cost Optimization Hub and to view its recommendations. When you opt in, Cost Optimization Hub automatically creates a service-linked role in your account to access its data.
   */
  updateEnrollmentStatus(params: CostOptimizationHub.Types.UpdateEnrollmentStatusRequest, callback?: (err: AWSError, data: CostOptimizationHub.Types.UpdateEnrollmentStatusResponse) => void): Request<CostOptimizationHub.Types.UpdateEnrollmentStatusResponse, AWSError>;
  /**
   * Updates the enrollment (opt in and opt out) status of an account to the Cost Optimization Hub service. If the account is a management account or delegated administrator of an organization, this action can also be used to enroll member accounts of the organization. You must have the appropriate permissions to opt in to Cost Optimization Hub and to view its recommendations. When you opt in, Cost Optimization Hub automatically creates a service-linked role in your account to access its data.
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
     * The account enrollment status.
     */
    status?: EnrollmentStatus;
    /**
     * The time when the account enrollment status was last updated.
     */
    lastUpdatedTimestamp?: Timestamp;
    /**
     * The time when the account enrollment status was created.
     */
    createdTimestamp?: Timestamp;
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
     * The number of vCPU cores in the resource.
     */
    vCpu?: Double;
    /**
     * The memory size of the resource.
     */
    memorySizeInMB?: Integer;
    /**
     * The architecture of the resource.
     */
    architecture?: String;
    /**
     * The platform of the resource. The platform is the specific combination of operating system, license model, and software on an instance.
     */
    platform?: String;
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
     * The Savings Plans recommendation term in years.
     */
    term?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The hourly commitment for the Savings Plans type.
     */
    hourlyCommitment?: String;
  }
  export type Datetime = Date;
  export interface DbInstanceConfiguration {
    /**
     * The DB instance class of the DB instance.
     */
    dbInstanceClass?: String;
  }
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
     * The disk storage of the Amazon Elastic Block Store volume.
     */
    storage?: StorageConfiguration;
    /**
     * The Amazon Elastic Block Store performance configuration.
     */
    performance?: BlockStoragePerformanceConfiguration;
    /**
     * The Amazon Elastic Block Store attachment state.
     */
    attachmentState?: String;
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
     * The Savings Plans recommendation term in years.
     */
    term?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The hourly commitment for the Savings Plans type.
     */
    hourlyCommitment?: String;
    /**
     * The instance family of the recommended Savings Plan.
     */
    instanceFamily?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    savingsPlansRegion?: String;
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
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * Indicates whether the recommendation is for standard or convertible reservations.
     */
    offeringClass?: String;
    /**
     * The instance family of the recommended reservation.
     */
    instanceFamily?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.
     */
    platform?: String;
    /**
     * Determines whether the recommended reservation is dedicated or shared.
     */
    tenancy?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
    /**
     * How much purchasing reserved instances costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
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
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * The instance family of the recommended reservation.
     */
    instanceFamily?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
    /**
     * How much purchasing reserved instances costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
  }
  export type EnrollmentStatus = "Active"|"Inactive"|string;
  export interface EstimatedDiscounts {
    /**
     * Estimated Savings Plans discounts.
     */
    savingsPlansDiscount?: Double;
    /**
     * Estimated reserved instance discounts.
     */
    reservedInstancesDiscount?: Double;
    /**
     * Estimated other discounts include all discounts that are not itemized. Itemized discounts include reservedInstanceDiscount and savingsPlansDiscount.
     */
    otherDiscount?: Double;
  }
  export interface Filter {
    /**
     * Whether or not implementing the recommendation requires a restart.
     */
    restartNeeded?: Boolean;
    /**
     * Whether or not implementing the recommendation can be rolled back.
     */
    rollbackPossible?: Boolean;
    /**
     * The effort required to implement the recommendation.
     */
    implementationEfforts?: ImplementationEffortList;
    /**
     * The account that the recommendation is for.
     */
    accountIds?: AccountIdList;
    /**
     * The Amazon Web Services Region of the resource.
     */
    regions?: RegionList;
    /**
     * The resource type of the recommendation.
     */
    resourceTypes?: ResourceTypeList;
    /**
     * The type of action you can take by adopting the recommendation.
     */
    actionTypes?: ActionTypeList;
    /**
     * A list of tags assigned to the recommendation.
     */
    tags?: TagList;
    /**
     * The resource ID of the recommendation.
     */
    resourceIds?: ResourceIdList;
    /**
     * The Amazon Resource Name (ARN) of the recommendation.
     */
    resourceArns?: ResourceArnList;
    /**
     * The IDs for the recommendations.
     */
    recommendationIds?: RecommendationIdList;
  }
  export interface GetPreferencesRequest {
  }
  export interface GetPreferencesResponse {
    /**
     * Retrieves the status of the "savings estimation mode" preference.
     */
    savingsEstimationMode?: SavingsEstimationMode;
    /**
     * Retrieves the status of the "member account discount visibility" preference.
     */
    memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
  }
  export interface GetRecommendationRequest {
    /**
     * The ID for the recommendation.
     */
    recommendationId: String;
  }
  export interface GetRecommendationResponse {
    /**
     * The ID for the recommendation.
     */
    recommendationId?: String;
    /**
     * The unique identifier for the resource. This is the same as the Amazon Resource Name (ARN), if available.
     */
    resourceId?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn?: String;
    /**
     * The account that the recommendation is for.
     */
    accountId?: String;
    /**
     * The currency code used for the recommendation.
     */
    currencyCode?: String;
    /**
     * The lookback period that's used to generate the recommendation.
     */
    recommendationLookbackPeriodInDays?: Integer;
    /**
     * The lookback period used to calculate cost impact for a recommendation.
     */
    costCalculationLookbackPeriodInDays?: Integer;
    /**
     * The estimated savings percentage relative to the total cost over the cost calculation lookback period.
     */
    estimatedSavingsPercentage?: Double;
    /**
     * The estimated savings amount over the lookback period used to calculate cost impact for a recommendation.
     */
    estimatedSavingsOverCostCalculationLookbackPeriod?: Double;
    /**
     * The type of resource.
     */
    currentResourceType?: ResourceType;
    /**
     * The resource type of the recommendation.
     */
    recommendedResourceType?: ResourceType;
    /**
     * The Amazon Web Services Region of the resource.
     */
    region?: String;
    /**
     * The source of the recommendation.
     */
    source?: Source;
    /**
     * The time when the recommendation was last generated.
     */
    lastRefreshTimestamp?: Datetime;
    /**
     * The estimated monthly savings amount for the recommendation.
     */
    estimatedMonthlySavings?: Double;
    /**
     * The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.
     */
    estimatedMonthlyCost?: Double;
    /**
     * The effort required to implement the recommendation.
     */
    implementationEffort?: ImplementationEffort;
    /**
     * Whether or not implementing the recommendation requires a restart.
     */
    restartNeeded?: Boolean;
    /**
     * The type of action you can take by adopting the recommendation.
     */
    actionType?: ActionType;
    /**
     * Whether or not implementing the recommendation can be rolled back.
     */
    rollbackPossible?: Boolean;
    /**
     * The details for the resource.
     */
    currentResourceDetails?: ResourceDetails;
    /**
     * The details about the recommended resource.
     */
    recommendedResourceDetails?: ResourceDetails;
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
     * Indicates whether to return the enrollment status for the organization.
     */
    includeOrganizationInfo?: PrimitiveBoolean;
    /**
     * The account ID of a member account in the organization.
     */
    accountId?: AccountId;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: String;
    /**
     * The maximum number of objects that are returned for the request.
     */
    maxResults?: MaxResults;
  }
  export interface ListEnrollmentStatusesResponse {
    /**
     * The enrollment status of a specific account ID, including creation and last updated timestamps.
     */
    items?: AccountEnrollmentStatuses;
    /**
     * The enrollment status of all member accounts in the organization if the account is the management account or delegated administrator.
     */
    includeMemberAccounts?: Boolean;
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
     * The maximum number of recommendations to be returned for the request.
     */
    maxResults?: ListRecommendationSummariesRequestMaxResultsInteger;
    /**
     * Additional metrics to be returned for the request. The only valid value is savingsPercentage.
     */
    metrics?: SummaryMetricsList;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: String;
  }
  export type ListRecommendationSummariesRequestMaxResultsInteger = number;
  export interface ListRecommendationSummariesResponse {
    /**
     * The total overall savings for the aggregated view.
     */
    estimatedTotalDedupedSavings?: Double;
    /**
     * A list of all savings recommendations.
     */
    items?: RecommendationSummariesList;
    /**
     * The dimension used to group the recommendations by.
     */
    groupBy?: String;
    /**
     * The currency code used for the recommendation.
     */
    currencyCode?: String;
    /**
     * The results or descriptions for the additional metrics, based on whether the metrics were or were not requested.
     */
    metrics?: SummaryMetricsResult;
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
     * The ordering of recommendations by a dimension.
     */
    orderBy?: OrderBy;
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
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
    /**
     * How much purchasing reserved instances costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
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
  export interface RdsDbInstance {
    /**
     * The Amazon RDS DB instance configuration used for recommendations.
     */
    configuration?: RdsDbInstanceConfiguration;
    costCalculation?: ResourceCostCalculation;
  }
  export interface RdsDbInstanceConfiguration {
    /**
     * Details about the instance configuration.
     */
    instance?: DbInstanceConfiguration;
  }
  export interface RdsDbInstanceStorage {
    /**
     * The Amazon RDS DB instance storage configuration used for recommendations.
     */
    configuration?: RdsDbInstanceStorageConfiguration;
    costCalculation?: ResourceCostCalculation;
  }
  export interface RdsDbInstanceStorageConfiguration {
    /**
     * The storage type to associate with the DB instance.
     */
    storageType?: String;
    /**
     * The new amount of storage in GB to allocate for the DB instance.
     */
    allocatedStorageInGb?: Double;
    /**
     * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
     */
    iops?: Double;
    /**
     * The storage throughput for the DB instance.
     */
    storageThroughput?: Double;
  }
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
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * The instance family of the recommended reservation.
     */
    instanceFamily?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
    /**
     * How much purchasing this instance costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
    /**
     * The license model that the recommended reservation supports.
     */
    licenseModel?: String;
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
  }
  export interface Recommendation {
    /**
     * The ID for the recommendation.
     */
    recommendationId?: String;
    /**
     * The account that the recommendation is for.
     */
    accountId?: String;
    /**
     * The Amazon Web Services Region of the resource.
     */
    region?: String;
    /**
     * The resource ID for the recommendation.
     */
    resourceId?: String;
    /**
     * The Amazon Resource Name (ARN) for the recommendation.
     */
    resourceArn?: String;
    /**
     * The current resource type.
     */
    currentResourceType?: String;
    /**
     * The recommended resource type.
     */
    recommendedResourceType?: String;
    /**
     * The estimated monthly savings amount for the recommendation.
     */
    estimatedMonthlySavings?: Double;
    /**
     * The estimated savings percentage relative to the total cost over the cost calculation lookback period.
     */
    estimatedSavingsPercentage?: Double;
    /**
     * The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.
     */
    estimatedMonthlyCost?: Double;
    /**
     * The currency code used for the recommendation.
     */
    currencyCode?: String;
    /**
     * The effort required to implement the recommendation.
     */
    implementationEffort?: String;
    /**
     * Whether or not implementing the recommendation requires a restart.
     */
    restartNeeded?: Boolean;
    /**
     * The type of tasks that can be carried out by this action.
     */
    actionType?: String;
    /**
     * Whether or not implementing the recommendation can be rolled back.
     */
    rollbackPossible?: Boolean;
    /**
     * Describes the current resource.
     */
    currentResourceSummary?: String;
    /**
     * Describes the recommended resource.
     */
    recommendedResourceSummary?: String;
    /**
     * The time when the recommendation was last generated.
     */
    lastRefreshTimestamp?: Datetime;
    /**
     * The lookback period that's used to generate the recommendation.
     */
    recommendationLookbackPeriodInDays?: Integer;
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
     * The grouping of recommendations.
     */
    group?: String;
    /**
     * The estimated total savings resulting from modifications, on a monthly basis.
     */
    estimatedMonthlySavings?: Double;
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
     * The service that you want your recommendations for.
     */
    service?: String;
    /**
     * The number of normalized units that Amazon Web Services recommends that you purchase.
     */
    normalizedUnitsToPurchase?: String;
    /**
     * The reserved instances recommendation term in years.
     */
    term?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The number of instances that Amazon Web Services recommends that you purchase.
     */
    numberOfInstancesToPurchase?: String;
    /**
     * The instance family of the recommended reservation.
     */
    instanceFamily?: String;
    /**
     * The type of instance that Amazon Web Services recommends.
     */
    instanceType?: String;
    /**
     * The Amazon Web Services Region of the commitment.
     */
    reservedInstancesRegion?: String;
    /**
     * Determines whether the recommendation is size flexible.
     */
    sizeFlexEligible?: Boolean;
    /**
     * Determines whether the recommendation is for a current generation instance.
     */
    currentGeneration?: String;
    /**
     * How much purchasing this instance costs you upfront.
     */
    upfrontCost?: String;
    /**
     * How much purchasing reserved instances costs you on a monthly basis.
     */
    monthlyRecurringCost?: String;
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
    /**
     * The estimated cost of your recurring monthly fees for the recommended reserved instance across the month.
     */
    estimatedMonthlyAmortizedReservationCost?: Double;
  }
  export type ResourceArnList = String[];
  export interface ResourceCostCalculation {
    /**
     * Usage details of the resource recommendation.
     */
    usages?: UsageList;
    /**
     * Pricing details of the resource recommendation.
     */
    pricing?: ResourcePricing;
  }
  export interface ResourceDetails {
    /**
     * The Lambda function recommendation details.
     */
    lambdaFunction?: LambdaFunction;
    /**
     * The ECS service recommendation details.
     */
    ecsService?: EcsService;
    /**
     * The EC2 instance recommendation details.
     */
    ec2Instance?: Ec2Instance;
    /**
     * The Amazon Elastic Block Store volume recommendation details.
     */
    ebsVolume?: EbsVolume;
    /**
     * The EC2 Auto Scaling group recommendation details.
     */
    ec2AutoScalingGroup?: Ec2AutoScalingGroup;
    /**
     * The EC2 reserved instances recommendation details.
     */
    ec2ReservedInstances?: Ec2ReservedInstances;
    /**
     * The RDS reserved instances recommendation details.
     */
    rdsReservedInstances?: RdsReservedInstances;
    /**
     * The ElastiCache reserved instances recommendation details.
     */
    elastiCacheReservedInstances?: ElastiCacheReservedInstances;
    /**
     * The OpenSearch reserved instances recommendation details.
     */
    openSearchReservedInstances?: OpenSearchReservedInstances;
    /**
     * The Redshift reserved instances recommendation details.
     */
    redshiftReservedInstances?: RedshiftReservedInstances;
    /**
     * The EC2 instance Savings Plans recommendation details.
     */
    ec2InstanceSavingsPlans?: Ec2InstanceSavingsPlans;
    /**
     * The Compute Savings Plans recommendation details.
     */
    computeSavingsPlans?: ComputeSavingsPlans;
    /**
     * The SageMaker Savings Plans recommendation details.
     */
    sageMakerSavingsPlans?: SageMakerSavingsPlans;
    /**
     * The DB instance recommendation details.
     */
    rdsDbInstance?: RdsDbInstance;
    /**
     * The DB instance storage recommendation details.
     */
    rdsDbInstanceStorage?: RdsDbInstanceStorage;
  }
  export type ResourceIdList = String[];
  export interface ResourcePricing {
    /**
     * The savings estimate using Amazon Web Services public pricing without incorporating any discounts.
     */
    estimatedCostBeforeDiscounts?: Double;
    /**
     * The estimated net unused amortized commitment for the recommendation.
     */
    estimatedNetUnusedAmortizedCommitments?: Double;
    /**
     * The estimated discounts for a recommendation.
     */
    estimatedDiscounts?: EstimatedDiscounts;
    /**
     * The savings estimate incorporating all discounts with Amazon Web Services, such as Reserved Instances and Savings Plans.
     */
    estimatedCostAfterDiscounts?: Double;
  }
  export type ResourceType = "Ec2Instance"|"LambdaFunction"|"EbsVolume"|"EcsService"|"Ec2AutoScalingGroup"|"Ec2InstanceSavingsPlans"|"ComputeSavingsPlans"|"SageMakerSavingsPlans"|"Ec2ReservedInstances"|"RdsReservedInstances"|"OpenSearchReservedInstances"|"RedshiftReservedInstances"|"ElastiCacheReservedInstances"|"RdsDbInstanceStorage"|"RdsDbInstance"|string;
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
     * The Savings Plans recommendation term in years.
     */
    term?: String;
    /**
     * The payment option for the commitment.
     */
    paymentOption?: String;
    /**
     * The hourly commitment for the Savings Plans type.
     */
    hourlyCommitment?: String;
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
     * The cost of paying for the recommended Savings Plan monthly.
     */
    monthlySavingsPlansEligibleCost?: Double;
    /**
     * Estimated monthly commitment for the Savings Plan.
     */
    estimatedMonthlyCommitment?: Double;
    /**
     * Estimated savings as a percentage of your overall costs after buying the Savings Plan.
     */
    savingsPercentage?: Double;
    /**
     * Estimated On-Demand cost you will pay after buying the Savings Plan.
     */
    estimatedOnDemandCost?: Double;
  }
  export type Source = "ComputeOptimizer"|"CostExplorer"|string;
  export interface StorageConfiguration {
    /**
     * The storage type.
     */
    type?: String;
    /**
     * The storage volume.
     */
    sizeInGb?: Double;
  }
  export type String = string;
  export type SummaryMetrics = "SavingsPercentage"|string;
  export type SummaryMetricsList = SummaryMetrics[];
  export interface SummaryMetricsResult {
    /**
     * The savings percentage based on your Amazon Web Services spend over the past 30 days.  Savings percentage is only supported when filtering by Region, account ID, or tags. 
     */
    savingsPercentage?: String;
  }
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
     * Sets the account status.
     */
    status: EnrollmentStatus;
    /**
     * Indicates whether to enroll member accounts of the organization if the account is the management account or delegated administrator.
     */
    includeMemberAccounts?: Boolean;
  }
  export interface UpdateEnrollmentStatusResponse {
    /**
     * The enrollment status of the account.
     */
    status?: String;
  }
  export interface UpdatePreferencesRequest {
    /**
     * Sets the "savings estimation mode" preference.
     */
    savingsEstimationMode?: SavingsEstimationMode;
    /**
     * Sets the "member account discount visibility" preference.
     */
    memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
  }
  export interface UpdatePreferencesResponse {
    /**
     * Shows the status of the "savings estimation mode" preference.
     */
    savingsEstimationMode?: SavingsEstimationMode;
    /**
     * Shows the status of the "member account discount visibility" preference.
     */
    memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
  }
  export interface Usage {
    /**
     * The usage type.
     */
    usageType?: String;
    /**
     * The usage amount.
     */
    usageAmount?: Double;
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
